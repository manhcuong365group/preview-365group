const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const jsCode = html.match(/<script>\(\(\)=>\{([\s\S]*?)\}\)\(\);<\/script>/);
if (jsCode) {
    fs.writeFileSync('scratch/main.js', jsCode[1]);
    console.log('Saved main.js');
}
