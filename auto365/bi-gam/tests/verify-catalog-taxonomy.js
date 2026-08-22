const fs = require('fs');

const html = fs.readFileSync('auto365/bi-gam/index.html', 'utf8');
if (!html.includes("const ACTIVE_AUTO_PRODUCTS=PRODUCTS.filter(p=>!p.taxonomy&&p.voltage!=='Xe máy');")) {
  throw new Error('Automotive-only catalog source is missing.');
}
if (!html.includes('let list=ACTIVE_AUTO_PRODUCTS.filter')) {
  throw new Error('Catalog renderer does not use the automotive-only source.');
}
if (!html.includes("grid.innerHTML=ACTIVE_AUTO_PRODUCTS.map(cardHTML).join('');")) {
  throw new Error('Default catalog renderer does not render the complete automotive catalog.');
}
console.log('Automotive-only catalog verified.');
