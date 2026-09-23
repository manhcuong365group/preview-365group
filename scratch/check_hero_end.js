const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const lines = html.split('\n');
console.log(lines.slice(2590, 2620).join('\n'));
