const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('function runSearch()');
const end = html.indexOf('}', html.indexOf('if (!socket || isNaN(voltage))')) + 10;
console.log(html.substring(s1, end));
