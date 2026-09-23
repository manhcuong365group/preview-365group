const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('<li>Bước sóng ánh sáng vàng ít bị khúc xạ và tán xạ ngược bởi hạt nước lơ lửng, giúp người lái không bị mỏi mắt.</li>');
console.log(html.substring(s1 - 500, s1 + 500));
