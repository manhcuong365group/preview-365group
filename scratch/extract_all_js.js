const fs = require('fs');
const html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const scripts = html.match(/<script[\s\S]*?<\/script>/g) || [];
scripts.forEach((s, i) => {
    fs.writeFileSync('scratch/script_' + i + '.js', s);
});
console.log('Saved ' + scripts.length + ' scripts');
