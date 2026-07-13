import * as csstree from 'css-tree';
import { log, toDataUri, resolveUrl, isDataUri, isAbsoluteUrl } from './utils.js';
import { PRESERVE_RULES } from './config.js';

/**
 * Fetches an asset — first tries the Puppeteer response cache, then falls back
 * to a raw HTTPS fetch. Returns null if fetch fails.
 */
async function fetchAsset(url, assetCache) {
  if (!isAbsoluteUrl(url)) return null;
  if (assetCache.has(url)) return assetCache.get(url);
  try {
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) return null;
    const contentType = (res.headers.get('content-type') || 'application/octet-stream').split(';')[0].trim();
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const entry = { buffer, contentType };
    assetCache.set(url, entry);
    return entry;
  } catch {
    return null;
  }
}

/**
 * Decide whether to inline an image by size threshold. Non-image assets (font,
 * css, js, favicon) are always inlined when fetched.
 */
function shouldInlineImage(buffer, maxKB) {
  return buffer.length <= maxKB * 1024;
}

/**
 * Rewrite all url(...) references inside a CSS string using css-tree. Async
 * because each url() may need network fetch. Returns the rewritten CSS and a
 * counter of inlined/skipped urls.
 */
async function rewriteCssUrls(cssText, baseUrl, assetCache, imageMaxKB) {
  let inlined = 0;
  let skipped = 0;
  let ast;
  try {
    ast = csstree.parse(cssText, { positions: false, parseValue: true, parseCustomProperty: true });
  } catch (err) {
    log.warn(`css-tree parse error, leaving CSS untouched: ${err.message}`);
    return { css: cssText, inlined: 0, skipped: 0 };
  }

  // Collect url() nodes first, then rewrite (walking + async is awkward).
  const urlNodes = [];
  csstree.walk(ast, {
    visit: 'Url',
    enter(node) {
      urlNodes.push(node);
    },
  });

  for (const node of urlNodes) {
    const rawValue = node.value?.value ?? node.value;
    if (typeof rawValue !== 'string') continue;
    const cleaned = rawValue.replace(/^['"]|['"]$/g, '').trim();
    if (!cleaned || isDataUri(cleaned)) continue;
    const abs = resolveUrl(baseUrl, cleaned);
    if (!abs || !isAbsoluteUrl(abs)) continue;

    const asset = await fetchAsset(abs, assetCache);
    if (!asset) { skipped++; continue; }
    const isImage = asset.contentType.startsWith('image/');
    if (isImage && !shouldInlineImage(asset.buffer, imageMaxKB)) {
      // rewrite to absolute URL so relative paths keep working outside origin
      if (node.value?.value !== undefined) node.value.value = abs;
      else node.value = abs;
      skipped++;
      continue;
    }
    const dataUri = toDataUri(asset.buffer, asset.contentType);
    if (node.value?.value !== undefined) node.value.value = dataUri;
    else node.value = dataUri;
    inlined++;
  }

  return { css: csstree.generate(ast), inlined, skipped };
}

/**
 * Inline a srcset attribute value ("a.jpg 1x, b.jpg 2x" or "a.jpg 480w, b.jpg 960w").
 */
async function inlineSrcset(srcset, baseUrl, assetCache, imageMaxKB) {
  const parts = srcset.split(',').map((p) => p.trim()).filter(Boolean);
  const rewritten = [];
  let inlined = 0;
  let skipped = 0;
  for (const part of parts) {
    const [urlRaw, ...descriptors] = part.split(/\s+/);
    if (!urlRaw || isDataUri(urlRaw)) {
      rewritten.push(part);
      continue;
    }
    const abs = resolveUrl(baseUrl, urlRaw);
    if (!abs || !isAbsoluteUrl(abs)) {
      rewritten.push(part);
      continue;
    }
    const asset = await fetchAsset(abs, assetCache);
    if (!asset) { skipped++; rewritten.push([abs, ...descriptors].join(' ')); continue; }
    if (asset.contentType.startsWith('image/') && !shouldInlineImage(asset.buffer, imageMaxKB)) {
      rewritten.push([abs, ...descriptors].join(' '));
      skipped++;
      continue;
    }
    rewritten.push([toDataUri(asset.buffer, asset.contentType), ...descriptors].join(' '));
    inlined++;
  }
  return { srcset: rewritten.join(', '), inlined, skipped };
}

/**
 * Main entrypoint — walks the cheerio DOM and inlines every asset it can,
 * respecting PRESERVE_RULES for links/meta/JSON-LD.
 *
 * @param {import('cheerio').CheerioAPI} $
 * @param {string} baseUrl
 * @param {Map} assetCache
 * @param {object} opts { imageMaxKB }
 */
export async function inlineAssets($, baseUrl, assetCache, opts = {}) {
  const imageMaxKB = opts.imageMaxKB ?? 250;
  const stats = { imgInlined: 0, imgSkipped: 0, cssInlined: 0, jsInlined: 0, fontInlined: 0, iconInlined: 0, cssUrlInlined: 0, cssUrlSkipped: 0 };

  // 1. <img src> and <img srcset>
  const imgs = $('img').toArray();
  for (const el of imgs) {
    const $el = $(el);
    const src = $el.attr('src');
    if (src && !isDataUri(src)) {
      const abs = resolveUrl(baseUrl, src);
      if (abs && isAbsoluteUrl(abs)) {
        const asset = await fetchAsset(abs, assetCache);
        if (asset && asset.contentType.startsWith('image/')) {
          if (shouldInlineImage(asset.buffer, imageMaxKB)) {
            $el.attr('src', toDataUri(asset.buffer, asset.contentType));
            stats.imgInlined++;
          } else {
            $el.attr('src', abs);
            stats.imgSkipped++;
          }
        }
      }
    }
    const srcset = $el.attr('srcset');
    if (srcset) {
      const { srcset: rewritten, inlined, skipped } = await inlineSrcset(srcset, baseUrl, assetCache, imageMaxKB);
      $el.attr('srcset', rewritten);
      stats.imgInlined += inlined;
      stats.imgSkipped += skipped;
    }
  }

  // 2. <source> in <picture>/<video>
  const sources = $('source').toArray();
  for (const el of sources) {
    const $el = $(el);
    const srcset = $el.attr('srcset');
    if (srcset) {
      const { srcset: rewritten, inlined, skipped } = await inlineSrcset(srcset, baseUrl, assetCache, imageMaxKB);
      $el.attr('srcset', rewritten);
      stats.imgInlined += inlined;
      stats.imgSkipped += skipped;
    }
    const src = $el.attr('src');
    if (src && !isDataUri(src)) {
      const abs = resolveUrl(baseUrl, src);
      if (abs && isAbsoluteUrl(abs)) {
        const asset = await fetchAsset(abs, assetCache);
        if (asset) {
          const isImage = asset.contentType.startsWith('image/');
          if (!isImage || shouldInlineImage(asset.buffer, imageMaxKB)) {
            $el.attr('src', toDataUri(asset.buffer, asset.contentType));
            stats.imgInlined++;
          } else {
            $el.attr('src', abs);
            stats.imgSkipped++;
          }
        }
      }
    }
  }

  // 3. <video poster>
  for (const el of $('video[poster]').toArray()) {
    const $el = $(el);
    const poster = $el.attr('poster');
    if (poster && !isDataUri(poster)) {
      const abs = resolveUrl(baseUrl, poster);
      const asset = abs ? await fetchAsset(abs, assetCache) : null;
      if (asset && asset.contentType.startsWith('image/')) {
        if (shouldInlineImage(asset.buffer, imageMaxKB)) {
          $el.attr('poster', toDataUri(asset.buffer, asset.contentType));
          stats.imgInlined++;
        } else {
          $el.attr('poster', abs);
          stats.imgSkipped++;
        }
      }
    }
  }

  // 4. <link rel="stylesheet"> — fetch CSS, rewrite url() inside, inline as <style>
  const cssLinks = $('link[rel="stylesheet"]').toArray();
  for (const el of cssLinks) {
    const $el = $(el);
    const href = $el.attr('href');
    if (!href) continue;
    const abs = resolveUrl(baseUrl, href);
    if (!abs || !isAbsoluteUrl(abs)) continue;
    const asset = await fetchAsset(abs, assetCache);
    if (!asset) continue;
    const cssText = asset.buffer.toString('utf8');
    const { css: rewritten, inlined, skipped } = await rewriteCssUrls(cssText, abs, assetCache, imageMaxKB);
    stats.cssUrlInlined += inlined;
    stats.cssUrlSkipped += skipped;
    $el.replaceWith(`<style data-inlined-from="${abs.replace(/"/g, '&quot;')}">${rewritten}</style>`);
    stats.cssInlined++;
  }

  // 5. <style> — rewrite url() inside
  const styles = $('style').toArray();
  for (const el of styles) {
    const $el = $(el);
    const cssText = $el.html();
    if (!cssText || !cssText.includes('url(')) continue;
    const { css: rewritten, inlined, skipped } = await rewriteCssUrls(cssText, baseUrl, assetCache, imageMaxKB);
    stats.cssUrlInlined += inlined;
    stats.cssUrlSkipped += skipped;
    $el.text(rewritten);
  }

  // 6. <link rel="icon" | "apple-touch-icon" | "shortcut icon" | preload as="image|font">
  const linkAssets = $('link').toArray();
  for (const el of linkAssets) {
    const $el = $(el);
    const rel = ($el.attr('rel') || '').toLowerCase();
    const as = ($el.attr('as') || '').toLowerCase();
    if (PRESERVE_RULES.linkRelPreserve.has(rel)) continue;

    let shouldInline = false;
    if (rel === 'icon' || rel === 'apple-touch-icon' || rel === 'shortcut icon' || rel === 'mask-icon') shouldInline = true;
    if (rel === 'preload' && (as === 'image' || as === 'font')) shouldInline = true;
    if (rel === 'manifest') continue; // skip web manifest — separate JSON file, not inlinable meaningfully in V1

    if (!shouldInline) continue;
    const href = $el.attr('href');
    if (!href || isDataUri(href)) continue;
    const abs = resolveUrl(baseUrl, href);
    if (!abs || !isAbsoluteUrl(abs)) continue;
    const asset = await fetchAsset(abs, assetCache);
    if (!asset) continue;
    if (asset.contentType.startsWith('image/')) {
      if (shouldInlineImage(asset.buffer, imageMaxKB)) {
        $el.attr('href', toDataUri(asset.buffer, asset.contentType));
        stats.iconInlined++;
      }
    } else {
      // Fonts and other preload types — always inline
      $el.attr('href', toDataUri(asset.buffer, asset.contentType));
      stats.fontInlined++;
    }
  }

  // 7. <script src> (non-module fine; keep async/defer attrs after inlining is safe as text)
  const scripts = $('script[src]').toArray();
  for (const el of scripts) {
    const $el = $(el);
    if ($el.attr('type') === PRESERVE_RULES.jsonLdType) continue;
    const src = $el.attr('src');
    if (!src) continue;
    const abs = resolveUrl(baseUrl, src);
    if (!abs || !isAbsoluteUrl(abs)) continue;
    const asset = await fetchAsset(abs, assetCache);
    if (!asset) continue;
    const jsText = asset.buffer.toString('utf8');
    $el.removeAttr('src');
    $el.removeAttr('async');
    $el.removeAttr('defer');
    $el.text(jsText);
    stats.jsInlined++;
  }

  return stats;
}

export function logInlineStats(stats) {
  log.info(
    `Inlined: img=${stats.imgInlined} css=${stats.cssInlined} js=${stats.jsInlined} font=${stats.fontInlined} icon=${stats.iconInlined} cssUrl=${stats.cssUrlInlined}` +
    (stats.imgSkipped || stats.cssUrlSkipped ? ` — skipped (over threshold): img=${stats.imgSkipped} cssUrl=${stats.cssUrlSkipped}` : '')
  );
}
