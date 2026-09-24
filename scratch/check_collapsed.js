const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('.shop-grid.collapsed');
console.log(html.substring(s1 - 100, s1 + 100));
