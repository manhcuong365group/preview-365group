const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const start = html.indexOf("$('#mid-sales-form').addEventListener('submit'");
const end = html.indexOf("$('#mid-phone').addEventListener('input'", start);
console.log(html.substring(start, end));
