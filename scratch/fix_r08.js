const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldOpt = '<option value="9005">Chân 9005 / HB3 / 9006 / 9012</option>';
const newOpt = '<option value="9005">Chân 9005 (HB3)</option>\n                <option value="9006">Chân 9006 (HB4)</option>\n                <option value="9012">Chân 9012 (HIR2)</option>';

html = html.replace(oldOpt, newOpt);
fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("R08 fixed.");
