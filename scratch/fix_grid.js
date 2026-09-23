const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('<section class="section" id="cum-den"');
const gridStart = html.indexOf('<div class="grid grid-3">', s1);
if (gridStart !== -1 && gridStart - s1 < 300) {
    html = html.substring(0, gridStart) + '<div class="grid grid-4">' + html.substring(gridStart + 25);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Changed grid-3 to grid-4");
} else {
    console.log("Could not find grid-3 in cum-den section");
}
