const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const match = html.match(/\.shop-card\s*\{[\s\S]*?\}/g);
if (match) {
    match.slice(0, 10).forEach(m => console.log(m));
} else {
    console.log("NO shop-card css found!");
}
