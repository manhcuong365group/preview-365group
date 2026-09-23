const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const h2s = html.match(/<h2[^>]*>.*?<\/h2>/g);
if(h2s) h2s.forEach((h2, i) => console.log(i + ': ' + h2.replace(/<[^>]+>/g, '').trim()));
