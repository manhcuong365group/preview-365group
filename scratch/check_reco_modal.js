const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('<div class="qs-modal-inner"');
const end = html.indexOf('</div>\n    </div>\n  </div>', s1) + 20;
console.log(html.substring(s1, end));
