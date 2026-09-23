const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

// find images for T10, S8, S9 from HTML cards
const t10Regex = /<article class="shop-card" data-product-id="t10"[\s\S]*?<img src="([^"]+)"/;
const s8Regex = /<article class="shop-card" data-product-id="s8"[\s\S]*?<img src="([^"]+)"/;
const s9Regex = /<article class="shop-card" data-product-id="s9"[\s\S]*?<img src="([^"]+)"/;

console.log('T10:', html.match(t10Regex)?.[1]);
console.log('S8:', html.match(s8Regex)?.[1]);
console.log('S9:', html.match(s9Regex)?.[1]);
