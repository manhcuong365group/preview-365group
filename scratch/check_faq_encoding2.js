const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const lines = html.split('\n');
console.log(lines.slice(3890, 3910).join('\n'));
