const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const start = html.indexOf('<div class="param-summary-box">');
if (start > -1) {
    const end = html.indexOf('</div>', html.indexOf('</style>', start)) + 6;
    // Actually the style is inside or outside? Let's check the block end.
    const realEnd = html.indexOf('</div>', html.indexOf('<div class="param-pills">', start) + 50); // wait this is dangerous
}
