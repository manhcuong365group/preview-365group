const fs = require('fs');
const js = fs.readFileSync('scratch/script_3.js', 'utf8');
const lines = js.split('\n').slice(10, 40);
console.log(lines.join('\n'));
