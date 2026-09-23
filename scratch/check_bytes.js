const { execSync } = require('child_process');
const before = execSync('git show 94db5f36:auto365/bong-led/index.html').length;
const after = execSync('git show 7f52441c:auto365/bong-led/index.html').length;
console.log(`Before: ${before} bytes`);
console.log(`After:  ${after} bytes`);
console.log(`Diff:   ${after - before} bytes`);
