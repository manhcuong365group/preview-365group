const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

html = html.replace(
    "].filter(Boolean).join('\n');",
    "].filter(Boolean).join('\\n');"
);
html = html.replace(
    "].filter(Boolean).join('\r\n');",
    "].filter(Boolean).join('\\n');"
);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Fixed newline in join()");
