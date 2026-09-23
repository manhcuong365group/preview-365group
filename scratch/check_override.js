const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
if (html.includes('grid-template-columns: repeat(auto-fill')) {
    console.log("Override still exists!");
} else {
    console.log("Override successfully removed.");
}
