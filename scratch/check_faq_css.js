const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const match = html.match(/\.faq-grid[\s\S]*?\{[\s\S]*?\}/g);
if (match) {
    match.slice(0, 5).forEach(m => console.log(m));
} else {
    console.log("No faq-grid css found");
}
