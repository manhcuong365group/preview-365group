const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const regex = /\}\);\n  \}\)\.catch\(\(\) => \{\n    if \(submitBtn\)/;
if (regex.test(html)) {
    console.log("Found the double catch");
} else {
    console.log("Not found with exact match, replacing fallback");
}
