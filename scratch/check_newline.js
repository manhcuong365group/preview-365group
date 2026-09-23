const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const regex = /\]\.filter\(Boolean\)\.join\('([^']+)'\);/;
const match = regex.exec(html);
if (match) {
    console.log(JSON.stringify(match[0]));
} else {
    console.log("Not found.");
}
