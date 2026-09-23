const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldFaqQJson = `Sau này tôi có thể tự tháo bóng LED X-Light để về lại Halogen \\"zin\\" không?`;
const newFaqQJson = `Sau này tôi có thể hoàn nguyên về bóng Halogen nguyên bản không?`;
html = html.replace(oldFaqQJson, newFaqQJson);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Fixed JSON-LD.");
