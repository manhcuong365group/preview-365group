const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const idx = html.indexOf('GÓI TIẾT KIỆM');
if (idx > -1) {
    const start = html.lastIndexOf('<section', idx);
    const end = html.indexOf('</section>', idx) + 10;
    console.log(html.substring(start, end).substring(0, 1000));
}
