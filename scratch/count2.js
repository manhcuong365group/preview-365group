const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const match = html.match(/<script[^>]*id="product-data"[^>]*>([\s\S]*?)<\/script>/);
if (match) {
    const data = JSON.parse(match[1]);
    console.log('JSON Products:', data.length);
} else {
    console.log('Not found');
}
const htmlCards = html.match(/<article class="shop-card"/g) || [];
console.log('HTML Cards:', htmlCards.length);
