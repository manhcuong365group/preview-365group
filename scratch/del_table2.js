const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const captionIdx = html.indexOf('<caption>Dự toán 4 gói');
const tableStart = html.lastIndexOf('<div', captionIdx);
const tableEnd = html.indexOf('</div>', html.indexOf('</table>', tableStart)) + 6;

html = html.substring(0, tableStart) + html.substring(tableEnd);
fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Deleted package table successfully.");
