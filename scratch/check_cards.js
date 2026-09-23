const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const cards = html.match(/<article class="shop-card"/g);
console.log("Total shop cards in HTML:", cards ? cards.length : 0);
