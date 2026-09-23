const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const h2s = html.match(/<h2[^>]*>.*?<\/h2>/g);
if(h2s) {
    console.log(h2s[4]);
    console.log(h2s[6]);
}
