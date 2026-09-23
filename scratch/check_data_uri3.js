const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const regex = /"data:image\/[^"]+"/g;
let match;
while ((match = regex.exec(html)) !== null) {
    if (match[0].length > 1000) {
        console.log("Found long data URI:", match[0].substring(0, 50));
    }
}
console.log("Check complete.");
