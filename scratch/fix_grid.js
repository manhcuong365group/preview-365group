const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

html = html.replace(/\.shop-grid\s*\{\s*grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\);\s*gap:\s*12px;\s*\}/, '.shop-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }');

fs.writeFileSync(file, html);
console.log('Added display: grid back.');
