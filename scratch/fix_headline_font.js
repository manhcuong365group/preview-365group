const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

html = html.replace(/\.headline\s*\{[\s\S]*?\}/, '.headline {\n  margin: 0;\n  max-width: 100%;\n  font-size: clamp(20px, 2vw, 24px);\n  line-height: 1.2;\n  letter-spacing: -.02em;\n  font-weight: 800;\n  color: #202934;\n}');

fs.writeFileSync(file, html);
console.log('Fixed headline font size.');
