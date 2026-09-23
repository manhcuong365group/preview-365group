const { execSync } = require('child_process');
const diff = execSync('git diff 94db5f36 4c836516 -- auto365/bong-led/index.html').toString();
let lines = diff.split('\n');
let removedLines = lines.filter(l => l.startsWith('-') && !l.startsWith('---'));
let addedLines = lines.filter(l => l.startsWith('+') && !l.startsWith('+++'));
console.log(`Added lines: ${addedLines.length}`);
console.log(`Removed lines: ${removedLines.length}`);

// If they are not equal, something was lost. Let's find what was lost.
if (addedLines.length !== removedLines.length) {
    fs = require('fs');
    fs.writeFileSync('scratch/lost_lines.txt', removedLines.join('\n'));
    console.log("Wrote removed lines to scratch/lost_lines.txt");
}
