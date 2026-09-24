const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('menu-btn');
const s2 = html.indexOf('</button>', s1);
console.log(html.substring(s1 - 50, s2 + 10));

const s3 = html.indexOf('querySelector(\'.menu-btn\')');
console.log(html.substring(s3 - 50, s3 + 300));
