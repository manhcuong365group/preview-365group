const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('id="qs-voltage"');
console.log("qs-voltage dropdown:");
console.log(html.substring(s1, s1 + 300));

const s2 = html.indexOf('var finalThree');
console.log("\nrunSearch finalThree:");
console.log(html.substring(s2 - 100, s2 + 100));

const s3 = html.indexOf('.shop-grid { grid-template-columns');
if (s3 !== -1) {
  console.log("\nshop-grid:");
  console.log(html.substring(s3, s3 + 100));
}
