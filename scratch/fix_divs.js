const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

html = html.replace('</figcaption></figure></div></section><section class="section" id="vi-sao-auto365"', '</figcaption></figure></div></div></section><section class="section" id="vi-sao-auto365"');

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Added missing closing div.");
