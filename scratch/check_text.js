const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// 1. Remove/Soften exaggerated claims (tang sáng, dang ki?m, gi? zin 100%)
html = html.replace(/100% gi? zin/gi, 'L?p d?t gi?c zin');
html = html.replace(/tuong thích 100%/gi, 'Tuong thích ph?n l?n các dòng xe');
html = html.replace(/b?o d?m dang ki?m/gi, 'H? tr? tu v?n chu?n dang ki?m');
html = html.replace(/tang sáng g?p[\s\S]*?(l?n|%)/gi, 'c?i thi?n d? sáng');
html = html.replace(/ti?t ki?m di?n[\s\S]*?(l?n|%)/gi, 't?i uu di?n nang');

// 2. Fix VF5 Plus case study contradictions (H11/H7)
// Need to find where VF5 Plus is mentioned
