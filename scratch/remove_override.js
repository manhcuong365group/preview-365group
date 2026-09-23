const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

const regex = /<style>\.shop-grid \{ display: grid !important;[\s\S]*?<\/style><\/head>/;
html = html.replace(regex, '</head>');

fs.writeFileSync(file, html);
console.log('Removed manual grid override.');
