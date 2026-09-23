const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldConsult = `window.showConsultStepGlobal({
            id: p.id,
            name: p.name,
            priceText: p.priceText,
            img: p.image
          },`;
const newConsult = `window.showConsultStepGlobal({
            id: p.id,
            name: p.name,
            priceText: p.priceText,
            img: p.image,
            warranty: p.warranty
          },`;

html = html.replace(oldConsult, newConsult);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Updated compare consult to include warranty.");
