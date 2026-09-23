const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const camNangStart = html.indexOf('<h2 id="cam-nang-title"');
const camNangEnd = html.indexOf('</section>', camNangStart);
if(camNangStart > -1) {
    console.log(html.substring(camNangStart, camNangEnd).substring(0, 1500));
}
