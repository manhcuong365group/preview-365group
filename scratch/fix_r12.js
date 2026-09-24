const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('<p class="qs-subnote">Nội dung sẽ được tự động tạo sẵn');
if (s1 !== -1) {
    const newTextarea = `<p class="qs-subnote" style="margin-bottom:8px;">Nếu điện thoại không tự động chuyển, bạn có thể sao chép nội dung dưới đây và gửi cho chuyên viên:</p>
          <textarea id="qsc-copy-area" readonly style="width:100%; height:80px; padding:10px; border:1px solid #dce4ea; border-radius:8px; font-size:13px; margin-bottom:12px; color:#657487; resize:none; background:#f9fbfc;" placeholder="Nội dung sẽ hiện ở đây sau khi bạn ấn nút..."></textarea>`;
    
    html = html.replace('<p class="qs-subnote">Nội dung sẽ được tự động tạo sẵn và chuyển sang Zalo chính thức của Auto365. Không mất phí tư vấn.</p>', newTextarea);
}

// Update JS for toast and textarea
const oldToast = "toast('Đã sao chép yêu cầu! Đang mở Zalo kết nối chuyên viên Auto365...');";
const newToast = "toast('Đã copy. Hãy DÁN (Paste) nội dung vào Zalo và GỬI cho chuyên viên Auto365 nhé!');";
html = html.replace(oldToast, newToast);

const oldClip = "navigator.clipboard.writeText(msgLines).catch(function() {});";
const newClip = "navigator.clipboard.writeText(msgLines).catch(function() {});\n      var copyArea = document.getElementById('qsc-copy-area'); if(copyArea) { copyArea.value = msgLines; }";
html = html.replace(oldClip, newClip);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("R12 (textarea and Zalo text) added.");
