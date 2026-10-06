const fs = require('fs');
const file = 'auto365/bi-gam/vinfast-vf3/index.html';
let content = fs.readFileSync(file, 'utf8');
const data = JSON.parse(fs.readFileSync('auto365/bi-gam/vinfast-vf3/data/vf3.json', 'utf8'));

let gridHtml = '';
data.lien_quan.slice(0,3).forEach(item => {
    let imgHtml = item.anh ? '<img src=\x22' + item.anh + '\x22 alt=\x22' + item.tieu_de + '\x22 style=\x22width:100%;height:180px;object-fit:cover;border-radius:8px;margin-bottom:16px;\x22 loading=\x22lazy\x22 />' : '';
    gridHtml += '<article class=\x22vf3lp-knowledge-card\x22>' + imgHtml + '<small>C?M NANG VINFAST VF3</small><h3>' + item.tieu_de + '</h3><p>' + item.mo_ta + '</p><a href=\x22' + item.url + '\x22>' + item.nut + ' &rarr;</a></article>';
});

const sectionRegex = /(<div class=\x22vf3lp-knowledge-grid\x22>)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/;
if (sectionRegex.test(content)) {
    content = content.replace(sectionRegex, '\\n' + gridHtml + '\n\');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed images');
} else {
    console.log('knowledge grid not found');
}
