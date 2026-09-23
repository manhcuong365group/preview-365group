const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const regex = /  \}\);\n  \}\)\.catch\(\(\) => \{[\s\S]*?  \}\);/;
if (regex.test(html)) {
    console.log("Found double catch with regex");
    html = html.replace(regex, "  });");
    fs.writeFileSync('auto365/bong-led/index.html', html, 'utf8');
} else {
    console.log("Not found with regex");
}
