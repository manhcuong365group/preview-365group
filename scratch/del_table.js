const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const tableStart = html.indexOf('<div class="table-wrap" style="margin-bottom: 24px;">');
const tableEnd = html.indexOf('</div>', html.indexOf('</table>', tableStart)) + 6;

if (tableStart > -1) {
    html = html.substring(0, tableStart) + html.substring(tableEnd);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Deleted package table.");
}
