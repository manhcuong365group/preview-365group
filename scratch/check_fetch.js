const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const lines = html.split('\n').slice(4040, 4100);
console.log(lines.join('\n'));
