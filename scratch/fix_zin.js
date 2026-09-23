const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldStep02 = `Chọn đúng chân zin để cắm giắc trực tiếp không cắt chế dây hay ngàm chóa.`;
const newStep02 = `Chọn đúng chân cắm tương thích nguyên bản để hạn chế cắt chế dây hay ngàm chóa.`;
html = html.replace(oldStep02, newStep02);

const oldStep05 = `Cố định, cắm giắc zin, relay/canbus (nếu có), cầu chì và chống cọ xát/rung.`;
const newStep05 = `Cố định, đấu nối giắc/adapter, relay/canbus (nếu có), cầu chì và chống cọ xát/rung.`;
html = html.replace(oldStep05, newStep05);

const oldBiLedBlock = `Thay bóng LED giữ nguyên chóa đèn zin, thi công nhanh 30 phút, chi phí hợp lý. Độ Bi LED thay đổi toàn bộ cụm thấu kính cho luồng sáng gom rộng và mặt cắt phẳng cơ bản.`;
const newBiLedBlock = `Thay bóng LED tận dụng cụm chóa phản xạ nguyên bản, thi công nhanh, chi phí hợp lý. Nâng cấp Bi LED thay đổi toàn bộ hệ quang học bằng thấu kính (Projector) cho đường cắt sắc nét và kiểm soát vùng sáng tốt hơn.`;
html = html.replace(oldBiLedBlock, newBiLedBlock);

const oldFaqQ = `Sau này tôi có thể tự tháo bóng LED X-Light để về lại Halogen "zin" không?`;
const newFaqQ = `Sau này tôi có thể hoàn nguyên về bóng Halogen nguyên bản không?`;
html = html.replace(oldFaqQ, newFaqQ);

fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Fixed 'zin' claims.");
