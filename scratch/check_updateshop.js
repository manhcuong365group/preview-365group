const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('function updateShop');
if (s1 === -1) {
    const s2 = html.indexOf('updateShop');
    console.log(html.substring(s2 - 50, s2 + 200));
} else {
    console.log(html.substring(s1, s1 + 300));
}
