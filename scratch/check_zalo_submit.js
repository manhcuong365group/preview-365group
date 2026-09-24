const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('var btnSubmit = document.getElementById(\'qs-submit\');');
const s2 = html.indexOf('var btnClose = document.getElementById', s1);
console.log(html.substring(s1, s2));
