const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const lines = html.split('\n');
lines.forEach((line, i) => {
    if (line.includes('Trụ sở chính') || line.includes('Trụ Sở Chính')) {
        console.log((i+1) + ': ' + line.trim().substring(0, 150));
    }
});
