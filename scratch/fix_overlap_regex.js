const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

html = html.replace(/<h2 class="headline">\s*<span class="headline-line">Auto365\.vn<\/span>\s*<span class="red">Tr? S? Chính<\/span>\s*<\/h2>/, '<h2 class="headline">Auto365.vn <span class="red">- Tr? s? chính</span></h2>');

fs.writeFileSync(file, html);
console.log('Fixed with regex.');
