const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const scriptStart = html.indexOf('<script>(()=>{\n  \'use strict\';');
const scriptEnd = html.indexOf('})();\n</script>', scriptStart) + 5;
fs.writeFileSync('scratch/test.js', html.substring(scriptStart + 8, scriptEnd), 'utf8');
