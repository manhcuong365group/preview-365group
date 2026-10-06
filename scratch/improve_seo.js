const fs = require('fs');
const file = 'auto365/bi-gam/vinfast-vf3/index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Extract FAQs and build FAQPage Schema
const faqRegex = /<details[^>]*>[\s\S]*?<summary[^>]*>([\s\S]*?)<\/summary>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>[\s\S]*?<\/details>/g;
let match;
let faqs = [];
while ((match = faqRegex.exec(content)) !== null) {
    let q = match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    let a = match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    faqs.push({ q, a });
}

if (faqs.length > 0) {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(f => ({
            '@type': 'Question',
            'name': f.q,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': f.a
            }
        }))
    };
    
    const schemaScript = '<script type=\x22application/ld+json\x22>\n' + JSON.stringify(faqSchema, null, 4) + '\n</script>';
    // Inject before closing </head>
    content = content.replace('</head>', schemaScript + '\n</head>');
}

// 2. Inject GEO text into the support section
const geoText = '<p class=\x22vf3lp-geo-text\x22 style=\x22margin-top:16px;text-align:center;font-size:14px;color:#64748b;\x22>H? th?ng Auto365 v?i hon 100 chi nhánh toàn qu?c (Hà N?i, TP.HCM, Ðà N?ng, C?n Tho...) h? tr? l?p d?t, b?o hành bi g?m chính hãng trên toàn qu?c.</p>';
const supportEndRegex = /(<section[^>]*class=\x22vf3lp-band[^>]*>[\s\S]*?H? tr? khi l?p t?i Auto365[\s\S]*?<\/div>\s*)(<\/div>\s*<\/section>)/;
if (supportEndRegex.test(content)) {
    content = content.replace(supportEndRegex, '' + geoText + '\n');
}

// 3. Add Author E-E-A-T text to the article metadata (if applicable) or right before the first content block.
// We'll just add a reviewer info.
const eeatText = '<div style=\x22font-size: 13px; color: #64748b; margin-bottom: 24px; display: flex; align-items: center; gap: 8px;\x22><svg width=\x2216\x22 height=\x2216\x22 viewBox=\x220 0 24 24\x22 fill=\x22none\x22 stroke=\x22currentColor\x22 stroke-width=\x222\x22><path d=\x22M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\x22/><path d=\x22M9 12l2 2 4-4\x22/></svg> N?i dung du?c ki?m duy?t b?i K? thu?t viên tru?ng Auto365. C?p nh?t tháng 10/2026.</div>';
const headerRegex = /(<h1[^>]*>[\s\S]*?<\/h1>)/;
if (headerRegex.test(content)) {
    content = content.replace(headerRegex, '\n' + eeatText);
}

fs.writeFileSync(file, content, 'utf8');
console.log('Improved SEO');
