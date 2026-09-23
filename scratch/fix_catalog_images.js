const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// Update T10 image and warranty in JS array
html = html.replace(
  /id: 't10',[\s\S]*?img: 'https:\/\/auto365.vn\/uploads\/images\/products\/auto365vn-bong-led-x-light-s3-pro-v2-2jpg-img_695f1520573f10\.37907652_auto365vn-1767839008-0\.jpg\.webp'/,
  "id: 't10',\n      name: 'X-Light T10 Demi / Đèn phụ',\n      priceText: '200.000đ/cặp',\n      price: 200000,\n      sockets: ['T10'],\n      temp: '6000K',\n      voltage: '12V',\n      needs: ['city'],\n      warranty: '12 tháng',\n      url: 'https://auto365.vn/den-led-x-light-t10',\n      img: 'https://auto365.vn/uploads/images/product_12052026/xlight-t10-1.jpg.webp'"
);

// Update S8 image
html = html.replace(
  /id: 'nao-s8-4300k',[\s\S]*?img: 'https:\/\/auto365.vn\/uploads\/images\/products\/auto365vn-bong-led-x-light-s6-pro-v2-4jpg-img_695f38042eb080\.27014796_auto365vn-1767847940-0\.jpg\.webp'/,
  "id: 'nao-s8-4300k',\n      name: 'NaoEvo S8 Pro 4300K H4',\n      priceText: '2.700.000đ/bộ',\n      price: 2700000,\n      sockets: ['H4'],\n      temp: '4300K',\n      voltage: '12V',\n      needs: ['rain', 'touring'],\n      url: 'https://auto365.vn/bong-led-naoevo-s8-pro-nhiet-mau-4300k-chan-h4',\n      img: 'https://auto365.vn/uploads/images/product/X-LIGHT/bong-led-s8-pro-4300K-chan-h4/s8-pro-4300k-chan-h4-5.png.webp'"
);

fs.writeFileSync(file, '\ufeff' + (html.charCodeAt(0) === 0xFEFF ? html.slice(1) : html), 'utf8');
console.log('Fixed LED_CATALOG images.');
