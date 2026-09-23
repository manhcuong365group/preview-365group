const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const scriptStart = html.indexOf('<script type="application/json" id="product-data">');
const scriptEnd = html.indexOf('</script>', scriptStart);
const json = JSON.parse(html.substring(scriptStart + 50, scriptEnd));
const jsonIds = json.map(item => item.id);

const htmlIds = [];
const regex = /data-compare="([^"]+)"/g;
let match;
while ((match = regex.exec(html)) !== null) {
    htmlIds.push(match[1]);
}

console.log('JSON IDs:', jsonIds.join(', '));
console.log('HTML IDs:', htmlIds.join(', '));
