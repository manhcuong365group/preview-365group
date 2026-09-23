const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const scriptStart = html.lastIndexOf('<script>');
const scriptEnd = html.indexOf('</script>', scriptStart);
fs.writeFileSync('scratch/test.js', html.substring(scriptStart + 8, scriptEnd), 'utf8');
