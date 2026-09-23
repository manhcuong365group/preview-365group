const fs = require('fs');
const orig = fs.readFileSync('auto365/bong-led/index.html', 'utf8');
const edited = fs.readFileSync('scratch/out/index_edited.html', 'utf8');

console.log('Original length:', orig.length);
console.log('Edited length:', edited.length);

const claims = ['tuyệt đối', 'hoàn hảo', '100%', '99%', 'xuyên sương', 'cực tốt'];
claims.forEach(c => {
  console.log(c + ' in orig:', orig.split(c).length - 1);
  console.log(c + ' in edited:', edited.split(c).length - 1);
});
