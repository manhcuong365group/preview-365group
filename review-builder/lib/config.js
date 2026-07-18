export const DEFAULTS = {
  inlineImageMaxKB: 250,
  minify: true,
  pdfEnabled: true,
  outputDir: './dist',
  outputHtml: 'review.html',
  outputPdf: 'review.pdf',
  navigationTimeoutMs: 60_000,
  viewport: { width: 1440, height: 900, deviceScaleFactor: 1 },
  pdfOptions: {
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '12mm', bottom: '12mm', left: '10mm', right: '10mm' },
  },
};

// --ai-review preset tuned for Auto365 pillar pages.
// Verified against auto365/bi-led-x-light-v30-ultra/index.html:
//   .topbar   at ~L238 (hotline banner)
//   .nav      at ~L244 (main navigation — KEEP)
//   .mobilebar at ~L707 (sticky mobile CTA)
//   <template id="lead-form-template"> at ~L677 (disabled lead form)
export const AI_REVIEW_PRESET = {
  remove: [
    '.topbar',
    '.mobilebar',
    'template',
    // Remove external tracking scripts, but keep inline page behaviour such as
    // filters, tabs and fitment form in the standalone review file.
    'script[src]:not([type="application/ld+json"])',
    // Common noise if crawling arbitrary URLs (no-op on Auto365 pages):
    '[class*="cookie" i]',
    '[class*="popup" i]',
    '[id*="popup" i]',
    '[class*="chat-widget" i]',
    '[class*="messenger" i]',
    '[class*="zalo" i]',
    'iframe[src*="facebook.com"]',
    'iframe[src*="youtube.com"]:not([data-keep])',
  ],
  // Keep review files self-contained even with the large technical diagrams
  // used on this pillar page; otherwise file:// previews lose those images.
  inlineImageMaxKB: 6000,
};

// Elements/attributes we NEVER touch (asset URLs to leave alone):
export const PRESERVE_RULES = {
  // Skip these <link rel="..."> — they are metadata, not assets
  linkRelPreserve: new Set(['canonical', 'alternate', 'author', 'help', 'license', 'next', 'prev', 'search']),
  // <meta property=...> / name=... — always keep URL as-is
  metaPropertyPreserve: /^(og:|twitter:|article:|fb:)/i,
  // JSON-LD scripts — never modify content
  jsonLdType: 'application/ld+json',
};
