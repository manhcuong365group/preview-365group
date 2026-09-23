const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const jsonStart = html.indexOf('<script type="application/json" id="product-data">');
const jsonEnd = html.indexOf('</script>', jsonStart);
const jsonDataStr = html.substring(jsonStart + 50, jsonEnd);
const jsonData = JSON.parse(jsonDataStr);
console.log("product-data length:", jsonData.length);

const catalogStart = html.indexOf('var LED_CATALOG = [');
const catalogEnd = html.indexOf('];', catalogStart) + 2;
console.log("LED_CATALOG length:", html.substring(catalogStart, catalogEnd).match(/\{/g).length);
