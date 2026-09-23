const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const lines = html.split('\n');
console.log(lines.slice(3860, 3870).join('\n'));
