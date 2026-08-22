const fs = require('fs');
const html = fs.readFileSync('auto365/bi-gam/index.html', 'utf8');
const mustContain = [
  '.hero-title{font-size:clamp(36px,4.2vw,56px)}',
  '.hero-highlights{height:100%',
  'Thông tin nhanh',
  '.hero-grid{grid-template-columns:minmax(0,1.18fr) minmax(300px,.82fr);padding:22px 0 24px;gap:32px;align-items:stretch}',
  'id="knowledge-hub"',
  'class="price-quick-grid"',
  'data-price-filter="under-5"',
  'data-price-filter="five-to-six"',
  'data-price-filter="over-6"',
  'id="media-gallery"',
  'class="media-single-video"',
  "$$('[data-quick-filter]').forEach"
];
const missing = mustContain.filter((needle) => !html.includes(needle));
if (missing.length) throw new Error(`Hub enhancements are incomplete: ${missing.join(', ')}`);
console.log('Hero information panel, answer-first and media enhancements verified.');
