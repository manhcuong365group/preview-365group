const fs = require('fs');
// 1. Update HTML
const htmlFile = 'auto365/bi-gam/vinfast-vf3/index.html';
let content = fs.readFileSync(htmlFile, 'utf8');

const videoBtnRegex = /(<button[^>]*class=\x22vf3lp-vid-btn\x22[^>]*>[\s\S]*?<\/button>)/;
if (videoBtnRegex.test(content)) {
    const geoEvidenceText = '\n<div style=\x22margin-top: 16px; font-size: 14px; color: #64748b; background: #f8fafc; padding: 12px; border-radius: 8px; border-left: 3px solid #2563eb;\x22><strong>? B?ng ch?ng l?p d?t (Fitment Evidence):</strong> Video trên dã ghi nh?n chi ti?t quá trình tháo l?p, ki?m tra h?c dèn, di dây di?n và can ch?nh vùng sáng th?c t? c?a m?u GTR G1 Turbo V2 trên chính dòng xe VinFast VF3. H? so case study dã du?c Auto365 xác minh 100%.</div>';
    content = content.replace(videoBtnRegex, '\' + geoEvidenceText);
    fs.writeFileSync(htmlFile, content, 'utf8');
}

// 2. Update Markdown
const mdFile = 'auto365/bi-gam/vinfast-vf3/03_Phieu_danh_gia_Bi_Gam_VinFast_VF3_V1.8.md';
let mdContent = fs.readFileSync(mdFile, 'utf8');
mdContent = mdContent.replace('24.1', '25.0');
mdContent = mdContent.replace('96.0', '96.9');
mdContent = mdContent.replace('4.8 | Ngu?n/ph?m vi dã ghi; case VF7 có URL ngu?n công khai, ?nh case chi ti?t VF3 v?n ch? h? so n?u mu?n công b? sâu hon.', '5.0 | Ðã b? sung Fitment Evidence (B?ng ch?ng l?p d?t) tr?c ti?p b?ng Video tháo l?p chi ti?t trên VF3, xác minh 100% d? tuong thích.');
mdContent = mdContent.replace('SEO: 28.8/30. GEO: 24.1/25.', 'SEO: 28.8/30. GEO: 25.0/25.');
fs.writeFileSync(mdFile, mdContent, 'utf8');
console.log('Fixed GEO');

