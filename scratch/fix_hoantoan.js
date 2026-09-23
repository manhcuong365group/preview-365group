const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

html = html.replace('Hoàn toàn được.', 'Có thể thực hiện.');
html = html.replace('hoàn toàn tải được ổn định', 'có thể tải ổn định');

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
