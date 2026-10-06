const fs = require('fs');
const html = fs.readFileSync('auto365/bi-gam/vinfast-vf3/index.html', 'utf8');
const h2Regex = /<h2[^>]*>(.*?)<\/h2>/g;
let match;
while ((match = h2Regex.exec(html)) !== null) {
  console.log(match[1].replace(/<[^>]+>/g, '').trim());
}
