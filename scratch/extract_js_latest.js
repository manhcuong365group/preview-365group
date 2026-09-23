const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const regex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
let match;
let scripts = [];
while ((match = regex.exec(html)) !== null) {
    if (!match[0].includes('application/ld+json') && !match[0].includes('application/json')) {
        scripts.push(match[1]);
    }
}
fs.writeFileSync('scratch/all_scripts_new.js', scripts.join('\n'));
