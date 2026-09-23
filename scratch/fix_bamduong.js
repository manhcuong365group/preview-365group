const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

html = html.replace('khả năng bám đường vượt trội', 'kiểm soát vùng sáng tốt');
html = html.replace('tối ưu bám đường khi trời mưa hoặc sương mù dày', 'hỗ trợ quan sát khi trời mưa hoặc sương mù');
html = html.replace('chuyên giải pháp bám mưa và phá sương.', 'hỗ trợ đi mưa và sương mù.');

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
