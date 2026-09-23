const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const catalogStart = html.indexOf('var LED_CATALOG = [');
const catalogEnd = html.indexOf('];', catalogStart) + 2;
console.log(html.substring(catalogStart, catalogEnd));
