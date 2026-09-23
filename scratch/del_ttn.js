const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const ttnStart = html.indexOf('<section style="background-color: #fff');
const ttnEnd = html.indexOf('</section>', ttnStart) + 10;
if (ttnStart > -1 && html.substring(ttnStart, ttnStart + 500).includes('Thông tin nhanh')) {
    html = html.substring(0, ttnStart) + html.substring(ttnEnd);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Deleted Thông tin nhanh section.");
} else {
    console.log("Could not precisely find the block.");
}
