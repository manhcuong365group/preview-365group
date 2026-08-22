const fs = require('fs');
const html = fs.readFileSync('auto365/bi-gam/index.html', 'utf8');
const visible = html
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '');
const prohibited = ['MASTER LOCKED', 'NOINDEX', 'Dữ liệu chưa khóa', 'Mô phỏng tự chốt', 'SSOT/API/CRM'];
const found = prohibited.filter((phrase) => visible.includes(phrase));
if (found.length) throw new Error(`Internal copy visible: ${found.join(', ')}`);
if (!html.includes('font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text"')) throw new Error('Missing Apple system font stack');
console.log('Customer copy and Apple-system typography verified.');
