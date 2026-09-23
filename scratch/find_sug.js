const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const scriptMatches = html.match(/<script\b[^>]*>([\s\S]*?)<\/script>/g);
if (scriptMatches) {
    scriptMatches.forEach((s, i) => {
        if (s.includes('const suggestions') || s.includes('g?i ý') || s.includes('suggest')) {
            console.log('Found in script index:', i);
        }
    });
}
