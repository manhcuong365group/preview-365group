const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const scriptStart = html.indexOf('<script type="application/json" id="product-data">');
const scriptEnd = html.indexOf('</script>', scriptStart);
const json = JSON.parse(html.substring(scriptStart + 50, scriptEnd));
const s8 = json.find(item => item.id === 's8');
const s9 = json.find(item => item.id === 's9');
console.log('s8:', s8.name);
console.log('s9:', s9.name);
