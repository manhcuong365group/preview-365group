const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const start = html.indexOf('function updateShop');
const end = html.indexOf('}', html.indexOf('emit(\'filter\');', start));
console.log(html.substring(start, start + 800));
