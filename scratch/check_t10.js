const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const t10CardStart = html.indexOf('<article class="shop-card" data-product-id="t10"');
const t10CardEnd = html.indexOf('</article>', t10CardStart) + 10;
console.log(html.substring(t10CardStart, t10CardEnd));
