const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const titleStart = html.indexOf('<title>');
const titleEnd = html.indexOf('</title>', titleStart) + 8;
console.log(html.substring(titleStart, titleEnd));

const descRegex = /<meta name="description" content="([^"]+)">/;
const descMatch = html.match(descRegex);
if (descMatch) console.log("Meta desc:", descMatch[1]);

const h1Start = html.indexOf('<h1>');
const h1End = html.indexOf('</h1>', h1Start) + 5;
console.log("H1:", html.substring(h1Start, h1End));

const heroLeadStart = html.indexOf('<p class="hero-lead">');
const heroLeadEnd = html.indexOf('</p>', heroLeadStart) + 4;
console.log("Hero lead:", html.substring(heroLeadStart, heroLeadEnd));
