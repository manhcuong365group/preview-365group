import { minify as minifyHtml } from 'html-minifier-terser';
import { log } from './utils.js';

/**
 * Minify HTML with safe defaults. Defense-in-depth: swap every JSON-LD script
 * body with a placeholder before minify and restore after — html-minifier-terser
 * normally leaves them alone, but the schema block is business-critical.
 *
 * Also preserves the HANDOFF GATE header comment (Auto365 team notes).
 */
export async function safeMinify(html) {
  const jsonLdBlocks = [];
  const placeholder = (i) => `__REVIEW_BUILDER_JSONLD_${i}__`;

  // Extract JSON-LD script bodies. Non-greedy match, case-insensitive on type.
  const jsonLdRegex = /(<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>)([\s\S]*?)(<\/script>)/gi;
  let stashed = html.replace(jsonLdRegex, (_, open, body, close) => {
    const idx = jsonLdBlocks.push(body) - 1;
    return `${open}${placeholder(idx)}${close}`;
  });

  let minified;
  try {
    minified = await minifyHtml(stashed, {
      collapseWhitespace: true,
      conservativeCollapse: false,
      removeComments: true,
      // Keep comments that begin with `!` or contain HANDOFF GATE (team handoff notes).
      ignoreCustomComments: [/^!/, /HANDOFF GATE/i],
      minifyCSS: true,
      minifyJS: true,
      removeAttributeQuotes: false,
      removeEmptyAttributes: false,
      keepClosingSlash: true,
      preserveLineBreaks: false,
      // Never collapse inside these tags — content whitespace is semantic.
      // Note: html-minifier-terser handles <pre>, <textarea>, <script>, <style> internally.
      sortAttributes: false,
      sortClassName: false,
    });
  } catch (err) {
    log.warn(`html-minifier-terser failed, returning un-minified HTML: ${err.message}`);
    minified = stashed;
  }

  // Restore JSON-LD blocks
  const restored = minified.replace(new RegExp(`__REVIEW_BUILDER_JSONLD_(\\d+)__`, 'g'), (_, idx) => {
    return jsonLdBlocks[Number(idx)] ?? '';
  });

  return restored;
}
