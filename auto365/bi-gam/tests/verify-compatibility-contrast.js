const fs = require('fs');
const html = fs.readFileSync('auto365/bi-gam/index.html', 'utf8');
if (!html.includes('.fdb-preview,.fdb-row{color:var(--ink)}')) {
  throw new Error('Compatibility rows do not explicitly reset inherited dark-section text color.');
}
console.log('Compatibility table contrast verified.');
