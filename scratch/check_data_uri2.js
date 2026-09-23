const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const index = html.indexOf('data:image/webp;base64,UklGRnR0AQ');
console.log(html.substring(index - 20, index + 50));
