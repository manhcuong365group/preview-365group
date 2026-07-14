// Extract shell parts (head-shared, header, footer, floating, scripts) from a production Auto365 page.
// Rewrites relative URLs to absolute https://auto365.vn/... so preview pages can share brand shell without hosting assets.
//
// Usage:
//   node scripts/extract-shell.mjs <path-to-production-html>
//   → writes _shell/{head-shared,header,footer,floating,scripts}.html
//
// Idempotent — re-run whenever production changes header/footer.

import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const PROD_ORIGIN = 'https://auto365.vn';
const REPO_ROOT = path.resolve(process.argv[2] ? path.dirname(process.argv[2]) : '.', '..', '..', '..');
const OUT_DIR = path.join('D:/Manh_Cuong/laragon/www/03_internal_tools/preview-365group', '_shell');

const src = process.argv[2];
if (!src || !fs.existsSync(src)) {
  console.error('Usage: node scripts/extract-shell.mjs <production-html-path>');
  process.exit(1);
}

const html = fs.readFileSync(src, 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

fs.mkdirSync(OUT_DIR, { recursive: true });

// ─── URL rewriter: turn "/assets/..." → "https://auto365.vn/assets/..." ───
// Skip URLs that are already absolute, protocol-relative, data: URIs, anchors, or javascript: pseudo.
function absolutize(url) {
  if (!url) return url;
  if (/^(https?:|data:|javascript:|mailto:|tel:|#)/i.test(url)) return url;
  if (url.startsWith('//')) return url;
  if (url.startsWith('/')) return PROD_ORIGIN + url;
  return url; // leave truly relative paths (rare on production) untouched
}

const REWRITE_ATTRS = ['href', 'src', 'action', 'data-src', 'data-image', 'poster'];
function rewriteUrlsIn(fragment) {
  // Load as fragment (parseHTML-style) so cheerio doesn't wrap with <html><body>
  const $$ = cheerio.load(`<div id="__wrap__">${fragment}</div>`, { decodeEntities: false });
  $$('*').each((_, el) => {
    for (const attr of REWRITE_ATTRS) {
      const val = $$(el).attr(attr);
      if (val) $$(el).attr(attr, absolutize(val));
    }
    const srcset = $$(el).attr('srcset');
    if (srcset) {
      const rewritten = srcset.split(',').map(part => {
        const [u, d] = part.trim().split(/\s+/);
        return [absolutize(u), d].filter(Boolean).join(' ');
      }).join(', ');
      $$(el).attr('srcset', rewritten);
    }
  });
  return $$('#__wrap__').html();
}

// ─── 1. head-shared: everything in <head> EXCEPT page-specific meta ───
// Keep: link/script/style/preconnect/preload (shared assets)
// Drop: title, description meta, canonical, robots, og:*, twitter:*, JSON-LD (page-specific)
const $head = $('head');
const dropSelectors = [
  'title',
  'meta[name="description"]',
  'meta[name="keywords"]',
  'meta[name="robots"]',
  'meta[name="copyright"]',
  'meta[name="author"]',
  'link[rel="canonical"]',
  'meta[property^="og:"]',
  'meta[name^="twitter:"]',
  'meta[property^="fb:"]',
  'meta[name="google-site-verification"]',
  'script[type="application/ld+json"]',
];
const $headClone = cheerio.load('<head></head>', { decodeEntities: false });
$head.children().each((_, el) => {
  const $el = $(el);
  const shouldDrop = dropSelectors.some(sel => $el.is(sel));
  if (shouldDrop) return;
  $headClone('head').append($.html(el));
});
const headSharedRaw = $headClone('head').html().trim();
fs.writeFileSync(path.join(OUT_DIR, 'head-shared.html'), rewriteUrlsIn(headSharedRaw));

// ─── 2. header: .custom-header-pc + .custom-header-mobile + header.js ───
// Concat outerHTML strings directly (cheerio.append across contexts duplicates weirdly)
const headerParts = [];
$('.custom-header-pc').first().each((_, el) => headerParts.push($.html(el)));
$('.custom-header-mobile').first().each((_, el) => headerParts.push($.html(el)));
$('script[src*="header.js"]').first().each((_, el) => headerParts.push($.html(el)));
fs.writeFileSync(path.join(OUT_DIR, 'header.html'), rewriteUrlsIn(headerParts.join('\n')));

// ─── 3. footer: <footer class="footer">…</footer> ───
const $footerEl = $('footer.footer').first();
fs.writeFileSync(path.join(OUT_DIR, 'footer.html'), rewriteUrlsIn($.html($footerEl)));

// ─── 4. floating: cart float, chat pills, hotline popup, scroll-to-top ───
const floatingParts = [];
$('.nut-cart-float').first().each((_, el) => floatingParts.push($.html(el)));
$('.contact-box-bottom').first().each((_, el) => floatingParts.push($.html(el)));
$('#scrollToTop').first().each((_, el) => floatingParts.push($.html(el)));
$('link[href*="/frontend/css/footer.css"]').first().each((_, el) => floatingParts.push($.html(el)));
$('script[src*="/module/marketing.js"]').first().each((_, el) => floatingParts.push($.html(el)));
$('script[src*="/frontend/js/footer.js"]').first().each((_, el) => floatingParts.push($.html(el)));
fs.writeFileSync(path.join(OUT_DIR, 'floating.html'), rewriteUrlsIn(floatingParts.join('\n')));

// ─── 5. scripts: all tail scripts (Bootstrap, main bundle, FB SDK) + shared modals ───
const scriptParts = [];
$('#addProductModal, #loading-overlay').each((_, el) => scriptParts.push($.html(el)));
$('body > script, body > div#fb-root').each((_, el) => {
  const $el = $(el);
  const src = $el.attr('src') || '';
  if (src.includes('header.js') || src.includes('/frontend/js/footer.js') || src.includes('marketing.js')) return;
  scriptParts.push($.html(el));
});
fs.writeFileSync(path.join(OUT_DIR, 'scripts.html'), rewriteUrlsIn(scriptParts.join('\n')));

// ─── Summary ───
const stat = (name) => {
  const p = path.join(OUT_DIR, name);
  const size = fs.statSync(p).size;
  return `${name.padEnd(20)} ${(size / 1024).toFixed(1)} KB`;
};

console.log('══════════════════════════════════════════');
console.log('  Shell extracted from production');
console.log('══════════════════════════════════════════');
console.log(stat('head-shared.html'));
console.log(stat('header.html'));
console.log(stat('footer.html'));
console.log(stat('floating.html'));
console.log(stat('scripts.html'));
console.log(`\n  Output → ${OUT_DIR}`);
