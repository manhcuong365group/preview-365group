const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const match = html.match(/(\.headline|\.headline-line|\.fact-row|\.fact-item)[\s\S]*?\{[\s\S]*?\}/g);
if (match) {
    match.forEach(m => console.log(m));
}
