const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// Fix S3 voltage in LED_CATALOG
html = html.replace(
  /id: 's3',\s*name: 'X-Light S3 Pro V2',([\s\S]*?)voltage: '12V',/,
  "id: 's3',\n      name: 'X-Light S3 Pro V2',$1voltage: '12V/24V',"
);
html = html.replace(
  /id: 's3-h4',\s*name: 'X-Light S3 Pro V2 H4',([\s\S]*?)voltage: '12V',/,
  "id: 's3-h4',\n      name: 'X-Light S3 Pro V2 H4',$1voltage: '12V/24V',"
);

// P0-03: Remove NaoEvo S6 H1 from LED_CATALOG entirely (ngừng kinh doanh)
const s6h1Regex = /\{\s*id: 'nao-s6-h1',[\s\S]*?\},/;
html = html.replace(s6h1Regex, '');

// P0-03: S8 4300K budget in LED_CATALOG
html = html.replace(
  /id: 'nao-s8-4300k',[\s\S]*?price: 2500000,/,
  "id: 'nao-s8-4300k',\n      name: 'NaoEvo S8 Pro 4300K H4',\n      priceText: '2.700.000đ/bộ',\n      price: 2700000,"
);
html = html.replace(
  /id: 'nao-s8-4300k',\n      name: 'NaoEvo S8 Pro 4300K H4',\n      priceText: '2.700.000đ\/bộ',\n      price: 2700000,\n      sockets: \['H1', 'H7', 'H11', '9005', '9006', '9012'\],/,
  "id: 'nao-s8-4300k',\n      name: 'NaoEvo S8 Pro 4300K H4',\n      priceText: '2.700.000đ/bộ',\n      price: 2700000,\n      sockets: ['H4'],"
);

fs.writeFileSync(file, '\ufeff' + (html.charCodeAt(0) === 0xFEFF ? html.slice(1) : html), 'utf8');
console.log("Fixed LED_CATALOG data.");
