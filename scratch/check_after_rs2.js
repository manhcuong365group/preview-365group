const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('function runSearch() {');
console.log(html.substring(s1 + 4000, s1 + 5000));
