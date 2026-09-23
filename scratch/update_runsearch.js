const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('function runSearch() {');
const e1 = html.indexOf('function generateCards', s1);

const oldRunSearch = html.substring(s1, e1);

const newRunSearch = `function runSearch() {
    var need = document.getElementById('qs-need') ? document.getElementById('qs-need').value : '';
    var socketStr = document.getElementById('qs-socket') ? document.getElementById('qs-socket').value : '';
    var socket = socketStr.trim().toUpperCase();
    var budget = document.getElementById('qs-budget') ? document.getElementById('qs-budget').value : '';
    var voltageStr = document.getElementById('qs-voltage') ? document.getElementById('qs-voltage').value : '';
    var voltage = parseInt(voltageStr);

    var resultBox = document.getElementById('qs-result');
    if (!resultBox) return;

    if (!socket || ![12, 24].includes(voltage)) {
      resultBox.innerHTML = '<div style="padding: 24px; text-align: center; background: #fff; border: 1px solid #dce4ea; border-radius: 8px;"><p style="margin:0; color:#ef2326; font-weight:600; font-size:16px;">Cần xác nhận chân bóng và hệ điện của xe.</p><p style="margin:8px 0 16px; font-size:14px; color:#657487; line-height:1.5;">Vui lòng điều chỉnh tiêu chí hoặc gửi thông tin để Auto365 kiểm tra.</p><button type="button" onclick="showConsultStepGlobal({id:\\'\\', name:\\'Gửi thông tin nhờ kiểm tra xe\\', priceText:\\'Chờ báo giá\\', img:\\'https://auto365.vn/uploads/images/product_12052026/xlight-t10-1.jpg.webp\\'}, {isPick:false, customBadge:\\'Hỗ trợ kỹ thuật\\', customTitle:\\'Gửi thông tin xe cần kiểm tra\\', isDirectBooking:true})" style="background:#e31b2d; color:#fff; border:0; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer;">Điền thông tin xe</button></div>';
      openModal();
      return;
    }

    var eligible = LED_CATALOG.filter(function(item) {
      return item.technicalStatus === 'verified' &&
             item.sellStatus === 'active' &&
             Array.isArray(item.sockets) &&
             item.sockets.some(function(val) { return String(val).toUpperCase() === socket; }) &&
             Array.isArray(item.supportedVehicleVoltages) &&
             item.supportedVehicleVoltages.indexOf(voltage) !== -1;
    });

    if (eligible.length === 0) {
      resultBox.innerHTML = '<div style="padding: 24px; text-align: center; background: #fff; border: 1px solid #dce4ea; border-radius: 8px;"><p style="margin:0; color:#ef2326; font-weight:600; font-size:16px;">Chưa có cấu hình đã xác minh phù hợp với thông tin này.</p><p style="margin:8px 0 16px; font-size:14px; color:#657487; line-height:1.5;">Gửi thông tin xe để Auto365 kiểm tra.</p><button type="button" onclick="showConsultStepGlobal({id:\\'\\', name:\\'Gửi thông tin nhờ kiểm tra xe\\', priceText:\\'Chờ báo giá\\', img:\\'https://auto365.vn/uploads/images/product_12052026/xlight-t10-1.jpg.webp\\'}, {isPick:false, customBadge:\\'Hỗ trợ kỹ thuật\\', customTitle:\\'Gửi thông tin xe cần kiểm tra\\', isDirectBooking:true})" style="background:#e31b2d; color:#fff; border:0; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer;">Điền thông tin xe</button></div>';
      openModal();
      return;
    }

    var htmlStr = '<div style="margin-bottom: 12px; font-size: 14px; color: #0f172a; font-weight: 500;">Sản phẩm để đối chiếu — cần kiểm tra cụm đèn, khoảng hở và hệ điều khiển trước khi xác nhận lắp.</div><div class="qs-result-list">';
    var displayItems = eligible.slice(0, 3);
    
    displayItems.forEach(function(item, idx) {
      var diffBudget = 0;
      if (budget === '1' && item.price > 2000000) diffBudget = item.price - 2000000;
      if (budget === '2' && item.price > 2500000) diffBudget = item.price - 2500000;
      if (budget === '3' && item.price > 3000000) diffBudget = item.price - 3000000;
      
      var matchObj = {
        isPick: (idx === 0),
        isUpgrade: (diffBudget > 0),
        diffBudget: diffBudget
      };
      htmlStr += generateCards(item, matchObj);
    });

    htmlStr += '</div>';
    resultBox.innerHTML = htmlStr;
    openModal();
  }

  `;

html = html.replace(oldRunSearch, newRunSearch);
fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("runSearch updated successfully.");
