const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const catalogRegex = /var LED_CATALOG = \[.*?\];/s;
const newCatalog = `var LED_CATALOG = JSON.parse(document.getElementById('product-data').textContent);`;
html = html.replace(catalogRegex, newCatalog);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Replaced LED_CATALOG array.");
