const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const renderStart = html.indexOf('function renderCompareTable');
const renderEnd = html.indexOf('function openCompareModal', renderStart);
console.log(html.substring(renderStart, renderEnd));
