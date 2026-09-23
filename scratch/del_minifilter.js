const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const start = html.indexOf('<div class="mini-filter-row"');
if (start > -1) {
    const end = html.indexOf('</div>', html.indexOf('</select>', start)) + 6;
    console.log(html.substring(start, end));
    
    html = html.substring(0, start) + html.substring(end);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Deleted mini-filter-row");
}
