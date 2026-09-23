const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const matchTitle = html.match(/<h2 class="headline">[\s\S]*?<\/h2>/);
console.log("Current Title:", matchTitle ? matchTitle[0] : "Not found");

const matchBadge = html.match(/<span class="map-badge">[\s\S]*?<\/span>/);
console.log("Current Badge:", matchBadge ? matchBadge[0] : "Not found");

const matchCss = html.match(/\.map-badge[\s\S]*?\{[\s\S]*?\}/g);
console.log("Badge CSS:", matchCss ? matchCss.join('\n') : "Not found");

