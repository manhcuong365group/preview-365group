const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('<script type="application/json" id="product-data">');
const e1 = html.indexOf('</script>', s1);
let jsonStr = html.substring(s1 + 50, e1);
console.log(jsonStr.substring(0, 500));
console.log("...");
console.log(jsonStr.substring(jsonStr.length - 500));

// Let's parse it and see how many items.
let data = JSON.parse(jsonStr);
console.log("Total items:", data.length);
