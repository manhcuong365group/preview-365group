const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const start = html.indexOf('function updateCompare() {');
const end = html.indexOf('function generateCompareCol', start);
console.log(html.substring(start, end));
