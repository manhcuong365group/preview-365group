const fs = require('fs');
const html = fs.readFileSync('scratch/out/index_edited.html', 'utf8');

const matches = html.match(/.{0,20}100%.{0,20}/g);
if (matches) {
    const textMatches = matches.filter(m => !m.includes('width') && !m.includes('height') && !m.includes('transform') && !m.includes('opacity') && !m.includes('stop-color'));
    console.log(textMatches.join('\n'));
}
