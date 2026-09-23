const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const match = html.match(/runSearch\(\) \{[\s\S]*?var btnSubmit/);
console.log(match ? 'Found' : 'Not found');
