const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('menu-btn');
console.log(html.substring(s1 - 100, s1 + 300));

const s2 = html.indexOf('.mobile-nav');
console.log(html.substring(s2 - 100, s2 + 300));
