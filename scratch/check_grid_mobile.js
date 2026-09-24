const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
console.log(html.includes('.grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }'));
console.log(html.includes('.steps, .solution, .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }'));
