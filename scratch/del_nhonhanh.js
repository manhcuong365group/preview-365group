const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const start = html.indexOf('<!-- Bottom summary bar: Nhớ nhanh trong 10 giây -->');
const paramBoxStart = html.indexOf('<div class="param-summary-box">', start);
const paramBoxEnd = html.indexOf('</div>', html.indexOf('</div>', paramBoxStart + 50) + 1) + 6;

html = html.substring(0, start) + html.substring(paramBoxEnd);
fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Deleted Nhớ nhanh trong 10 giây block.");
