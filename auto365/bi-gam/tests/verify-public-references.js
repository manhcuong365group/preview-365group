const fs = require('fs');

const html = fs.readFileSync('auto365/bi-gam/index.html', 'utf8');
const required = [
  'id="references"',
  'Nguồn thông tin dùng để đối chiếu',
  'class="reference-list"',
  'class="reference-related"',
  'Thông tư 48/2024/TT-BGTVT'
];

const missing = required.filter((needle) => !html.includes(needle));
if (missing.length) throw new Error(`Missing public-reference hub content: ${missing.join(', ')}`);
if (html.includes('id="methodology"')) throw new Error('Legacy internal methodology block is still published.');

console.log('Public reference and related-reading hub section verified.');
