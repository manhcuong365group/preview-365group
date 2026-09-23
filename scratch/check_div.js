const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const tableStart = html.lastIndexOf('<div', html.indexOf('<caption>Dự toán 4 gói'));
console.log(html.substring(tableStart, tableStart + 100));
