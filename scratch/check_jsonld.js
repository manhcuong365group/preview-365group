const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const blocks = html.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g);
if (blocks) {
    console.log("Total JSON-LD blocks:", blocks.length);
    blocks.forEach((b, i) => console.log('Block', i, 'length:', b.length));
}
