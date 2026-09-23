const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

html = html.replace(/\.shop-count\s*\{[\s\S]*?\}/, '.shop-count { display: none !important; }');

// Clean up the empty <p class="small"></p> since we removed its text earlier
html = html.replace(/<p class="small"><\/p>/g, '');

fs.writeFileSync(file, html);
console.log('Hid shop-count badge.');
