const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('<script type="application/json" id="product-data">');
const e1 = html.indexOf('</script>', s1);
let data = JSON.parse(html.substring(s1 + 50, e1));

let voltages = new Set();
data.forEach(item => voltages.add(item.voltage));
console.log("Unique voltages in JSON:", Array.from(voltages));
