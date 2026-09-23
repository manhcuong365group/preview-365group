const fs = require('fs');

const filePath = 'auto365/bong-led/index.html';
let html = fs.readFileSync(filePath, 'utf8');

const oldSection = `</section><section class="section" id="vi-sao-auto365" aria-labelledby="vi-sao-auto365-title">\r
<div class="wrap">\r
  <div class="section-title">\r
    <div>\r
      \r
      <h2 id="vi-sao-auto365-title">Bạn được tư vấn và hỗ trợ những gì khi chọn Auto365?</h2>\r
    </div>\r
  </div>`;

const newSection = `</section><section class="section" id="vi-sao-auto365" aria-labelledby="vi-sao-auto365-title">
<div class="wrap">
  <div class="section-title">
    <div>
      <h2 id="vi-sao-auto365-title">Vì sao chọn Auto365?</h2>
    </div>
  </div>`;

if (html.includes(oldSection)) {
  html = html.replace(oldSection, newSection);
  console.log('Step 1: Updated heading OK');
} else {
  // Try searching for the h2 directly
  const h2Old = '<h2 id="vi-sao-auto365-title">Bạn được tư vấn và hỗ trợ những gì khi chọn Auto365?</h2>';
  const h2New = '<h2 id="vi-sao-auto365-title">Vì sao chọn Auto365?</h2>';
  if (html.includes(h2Old)) {
    html = html.replace(h2Old, h2New);
    console.log('Step 1: Updated H2 heading directly OK');
  } else {
    console.log('Step 1: H2 heading not found, searching...');
    const idx = html.indexOf('vi-sao-auto365-title');
    console.log('Found at index:', idx);
    console.log('Context:', html.substring(idx - 20, idx + 100));
  }
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('Done');
