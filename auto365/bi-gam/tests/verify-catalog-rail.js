const fs = require('fs');

const html = fs.readFileSync('auto365/bi-gam/index.html', 'utf8');
const mustContain = [
  'class="product-grid product-grid--rail" id="grid"',
  '.shop-layout>div{min-width:0}',
  'id="catalogRailPrev"',
  'id="catalogRailNext"',
  '.product-grid--rail{display:grid;grid-template-rows:repeat(2',
  'grid-auto-columns:280px',
  '.product-grid--rail .pnote{display:none}',
  'overflow-x:auto',
  "catalogRailPrev?.addEventListener('click'",
  "catalogRailNext?.addEventListener('click'",
  'grid.scrollBy({left:delta,behavior:\'smooth\'})',
  "grid.addEventListener('pointerdown',startCatalogDrag)",
  "grid.addEventListener('pointerup',endCatalogDrag)",
  "setInterval(autoScrollCatalogRail,4200)"
];

const missing = mustContain.filter((needle) => !html.includes(needle));
if (missing.length) {
  throw new Error(`Catalog rail is incomplete: ${missing.join(', ')}`);
}

console.log('Two-row horizontal catalog rail verified.');
