const fs = require('fs');
let diff = fs.readFileSync('scratch/diff.txt', 'utf8');
let lines = diff.split('\n');
let added = 0;
let removed = 0;
for (let line of lines) {
    if (line.startsWith('+') && !line.startsWith('+++')) added++;
    if (line.startsWith('-') && !line.startsWith('---')) removed++;
}
console.log(`Added lines: ${added}`);
console.log(`Removed lines: ${removed}`);
