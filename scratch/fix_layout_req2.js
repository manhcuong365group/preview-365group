const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldGridDefault = '.shop-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }';
const newGridDefault = '.shop-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }';

if (html.includes(oldGridDefault)) {
    html = html.replace(oldGridDefault, newGridDefault);
    console.log("Changed default shop-grid to 3 columns.");
} else {
    console.log("Default shop-grid not found.");
}

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
