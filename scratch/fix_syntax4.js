const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const regex = /  \}\);\n  \}\)\.catch\(\(\) => \{\n[\s\S]*?  \}\);/;
if (regex.test(html)) {
    console.log("Found bad string, replacing...");
    html = html.replace(regex, "  });");
    fs.writeFileSync('auto365/bong-led/index.html', html, 'utf8');
} else {
    console.log("Not found with simpler regex");
}
