const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const match = html.match(/<style[^>]*>[\s\S]*?\.shop-grid[\s\S]*?<\/style>/g);
if (match) {
    match.forEach(m => console.log(m.substring(0, 200)));
} else {
    console.log("No custom style block with .shop-grid found.");
}
