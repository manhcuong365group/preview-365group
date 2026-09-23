const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const start = html.indexOf('function runSearch() {');
const end = html.indexOf('  var btnSubmit = document.getElementById', start);
console.log(html.substring(start, end));
