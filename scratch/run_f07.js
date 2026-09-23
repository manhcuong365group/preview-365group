const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

// Helper to replace text safely
function replaceText(searchText, replaceText) {
    if (html.includes(searchText)) {
        html = html.replace(searchText, replaceText);
        console.log("Replaced: " + searchText.substring(0, 30) + "...");
    } else {
        console.log("NOT FOUND: " + searchText.substring(0, 30) + "...");
    }
}

// 1. H11
replaceText(
    'Chỉ cần xoay 45 độ là khóa ngàm. Đạt chuẩn kháng nước IP68 an toàn cơ bản cho vị trí gầm thấp.',
    'Cần đối chiếu mã chân, ngàm, giắc và gioăng trên đúng cụm đèn. Khả năng chống bụi/nước phụ thuộc sản phẩm và trạng thái lắp hoàn thiện; không xác định cấp bảo vệ chỉ từ tên chân H11.'
);

// 2. Xenon D1/D2/D3/D4
// Let's use regex for this block as it spans multiple lines.
html = html.replace(
    /<tr>\s*<td><strong>D1, D2, D3, D4<\/strong>[\s\S]*?<\/tr>/i,
    `<tr>
            <td><strong>D1, D2, D3, D4</strong><br><span class="badge dark">Xenon</span></td>
            <td>D1, D2, D3 và D4 là các nhóm chân thuộc hệ đèn xenon. Cần nhận diện đúng bóng, ballast và cụm đèn đang có trên xe trước khi xem xét phương án thay thế.</td>
            <td>
              <div class="note-desc">Không dùng bảng này để xác nhận một bóng LED có thể cắm trực tiếp vào ballast xenon. Hãy gửi mã bóng hoặc mang xe đến điểm kỹ thuật để kiểm tra cấu hình và phương án đấu nối.</div>
            </td>
          </tr>`
);

// 3. 2cm
html = html.replace(
    /Khuyến nghị khoảng hở tối thiểu 2cm từ quạt tản nhiệt đến nắp chụp bụi[\s\S]*?giảm công suất để bảo vệ chip LED\./i,
    'Kiểm tra điện áp cấp, vị trí driver, hệ tản nhiệt và khả năng đóng nắp chụp. Khoảng hở cần đối chiếu hướng dẫn của đúng bóng và kết cấu cụm đèn; không áp dụng một con số chung cho mọi xe. Nếu nắp không đóng đúng hoặc quạt bị cản, cần điều chỉnh phương án lắp trước khi tiếp tục sử dụng.'
);

// 4. 4300K vs 6000K in #cam-nang
// Wait, I need to find the exact text in #so-sanh or #cam-nang
// I'll skip this one first and check the actual text.

// 5. Pricing - need to check actual text.
// 6. #chan-bong intro - need to check actual text.
// 7. #co-so legal - need to check actual text.

fs.writeFileSync('scratch/f07_part1.js', 'ok');
fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
