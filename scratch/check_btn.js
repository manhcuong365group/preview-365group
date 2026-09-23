const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const match = html.match(/\.btn(?!-)[\s\S]*?\{[\s\S]*?\}/g);
if (match) {
    match.slice(0, 5).forEach(m => console.log(m));
}
