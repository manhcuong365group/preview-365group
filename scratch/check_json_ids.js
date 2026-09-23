const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const jsonStart = html.indexOf('<script type="application/json" id="product-data">');
const jsonEnd = html.indexOf('</script>', jsonStart);
const catalog = JSON.parse(html.substring(jsonStart + 50, jsonEnd));
console.log(catalog.map(i => i.id + ': ' + i.sellStatus).join(', '));
