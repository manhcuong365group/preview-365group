const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const s1 = html.indexOf('function runSearch()');
const e1 = html.indexOf('function generateCards', s1);
console.log(html.substring(s1, e1));
