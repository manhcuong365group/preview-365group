const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('function runSearch() {');
const block = html.substring(s1, s1 + 8000);
const e1 = block.indexOf('  function formatVND(');
console.log(block.substring(e1 - 100, e1 + 100));
