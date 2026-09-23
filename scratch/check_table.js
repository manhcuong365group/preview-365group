const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const idx = html.indexOf('GÓI TIẾT KIỆM');
if (idx > -1) {
    const start = html.lastIndexOf('<table', idx);
    const end = html.indexOf('</table>', idx) + 8;
    console.log(html.substring(start, end));
}
