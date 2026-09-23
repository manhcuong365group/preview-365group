const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const start = html.indexOf('<tr data-socket-row="d1 d2 d3 d4');
const end = html.indexOf('</tr>', start) + 5;
console.log(html.substring(start, end));
