const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const s1 = html.indexOf('function runSearch() {');
const end1 = html.indexOf('var budgetMax = Infinity;', s1);
const oldTop = html.substring(s1, end1);

const newTop = `function runSearch() {
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
      if (item.technicalStatus !== 'verified' || item.sellStatus !== 'active') return false;
      var okSocket = Array.isArray(item.sockets) && item.sockets.some(function(v) { return String(v).toUpperCase() === socket; });
      var okVoltage = Array.isArray(item.supportedVehicleVoltages) && item.supportedVehicleVoltages.indexOf(voltage) !== -1;
      return okSocket && okVoltage;
    });

    if (eligible.length === 0) {
      resultBox.innerHTML = '<div style="padding: 24px; text-align: center; background: #fff; border: 1px solid #dce4ea; border-radius: 8px;"><p style="margin:0; color:#ef2326; font-weight:600; font-size:16px;">Chưa có cấu hình đã xác minh phù hợp với thông tin này.</p><p style="margin:8px 0 16px; font-size:14px; color:#657487; line-height:1.5;">Gửi thông tin xe để Auto365 kiểm tra.</p><button type="button" onclick="showConsultStepGlobal({id:\\'\\', name:\\'Gửi thông tin nhờ kiểm tra xe\\', priceText:\\'Chờ báo giá\\', img:\\'https://auto365.vn/uploads/images/product_12052026/xlight-t10-1.jpg.webp\\'}, {isPick:false, customBadge:\\'Hỗ trợ kỹ thuật\\', customTitle:\\'Gửi thông tin xe cần kiểm tra\\', isDirectBooking:true})" style="background:#e31b2d; color:#fff; border:0; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer;">Điền thông tin xe</button></div>';
      openModal();
      return;
    }

    `;

html = html.replace(oldTop, newTop);
fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Replaced top part of runSearch successfully");
