const fs = require('fs');
const file = 'auto365/bi-gam/vinfast-vf3/index.html';
let content = fs.readFileSync(file, 'utf8');

const jsonStr = fs.readFileSync('auto365/bi-gam/vinfast-vf3/data/vf3.json', 'utf8');
const data = JSON.parse(jsonStr);

let gridHtml = '';
data.lien_quan.slice(0,3).forEach(item => {
    gridHtml += \
    <article class=\x22vf3lp-knowledge-card\x22>
      <small>C?M NANG VINFAST VF3</small>
      <h3>\</h3>
      <p>\</p>
      <a href=\x22\\x22>\ &rarr;</a>
    </article>\;
});

const sectionRegex = /(<div class=\x22vf3lp-knowledge-grid\x22>)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/;
if (sectionRegex.test(content)) {
    content = content.replace(sectionRegex, '\\n' + gridHtml + '\n\');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated with lien_quan from json');
} else {
    console.log('knowledge grid not found');
}

