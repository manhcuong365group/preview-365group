const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// Replace CTAs to point to the correct form ID
html = html.replace(/#hero-sales-form/g, '#mid-sales-form');

fs.writeFileSync(file, html);
console.log('Fixed CTAs.');
