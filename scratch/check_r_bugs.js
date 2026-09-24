const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

console.log("updateShop includes:", html.includes("if(group === 'socket') return p.sockets.includes(v);"));
console.log("item.img:", html.includes("item.img"));
console.log("REVIEW:", html.includes("[CẦN REVIEW KỸ THUẬT]"));
console.log("2cm:", html.includes("tối thiểu 2cm"));
console.log("gấp 3-4 lần:", html.includes("gấp 3-4 lần"));
console.log("ưu tiên mẫu 12V:", html.includes("ưu tiên mẫu 12V"));
