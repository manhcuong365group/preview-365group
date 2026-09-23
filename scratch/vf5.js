const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const match = html.match(/.{0,50}VF5.{0,50}/g);
if (match) {
    match.forEach(m => console.log(m));
}
