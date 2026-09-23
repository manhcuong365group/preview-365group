const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const lines = html.split('\n');
console.log(lines[4264]);
console.log(lines[4265]);
console.log(lines[4266]);
