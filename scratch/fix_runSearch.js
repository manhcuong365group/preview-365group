const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const start = html.indexOf('function runSearch() {');
const end = html.indexOf('  var btnSubmit = document.getElementById', start);

const oldRunSearch = html.substring(start, end);

const newRunSearch = `function runSearch() {
    var need = document.getElementById('qs-need') ? document.getElementById('qs-need').value : '';
    var socketStr = document.getElementById('qs-socket') ? document.getElementById('qs-socket').value : '';
    var socket = socketStr.trim().toUpperCase();
    var budget = document.getElementById('qs-budget') ? document.getElementById('qs-budget').value : '';
    var voltageStr = document.getElementById('qs-voltage') ? document.getElementById('qs-voltage').value : '';
    var voltage = parseInt(voltageStr);

    var resultBox = document.getElementById('qs-result');
    if (!resultBox) return;

    if (!socket || isNaN(voltage)) {
      resultBox.innerHTML = '<div style="padding: 24px; text-align: center; background: #fff; border: 1px solid #dce4ea; border-radius: 8px;"><p style="margin:0; color:#ef2326; font-weight:600; font-size:16px;">Cần xác nhận chân bóng và hệ điện của xe.</p><p style="margin:8px 0 0; font-size:14px; color:#657487; line-height:1.5;">Vui lòng điều chỉnh tiêu chí hoặc gửi thông tin để chuyên viên kiểm tra.</p></div>';
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
      resultBox.innerHTML = '<div style="padding: 24px; text-align: center; background: #fff; border: 1px solid #dce4ea; border-radius: 8px;"><p style="margin:0; color:#ef2326; font-weight:600; font-size:16px;">Chưa có cấu hình đã xác minh phù hợp với thông tin này.</p><p style="margin:8px 0 0; font-size:14px; color:#657487; line-height:1.5;">Gửi thông tin xe để Auto365 kiểm tra.</p></div>';
      openModal();
      return;
    }

    var budgetMax = Infinity;
    var hasBudgetFilter = false;
    if (budget === 'under20') { budgetMax = 2000000; hasBudgetFilter = true; }
    else if (budget === '20to25') { budgetMax = 2500000; hasBudgetFilter = true; }

    var results = [];
    eligible.forEach(function(item) {
      var diffB = (hasBudgetFilter && item.price > budgetMax) ? item.price - budgetMax : 0;
      results.push({ item: item, isUpgrade: diffB > 0, diffBudget: diffB });
    });

    results.sort(function(a, b) {
      if (a.isUpgrade !== b.isUpgrade) return a.isUpgrade ? 1 : -1;
      return a.item.price - b.item.price;
    });

    var finalThree = results.slice(0, 3);
    resultBox.innerHTML = '';
    finalThree.forEach(function(matchObj, idx) {
      var isPick = idx === 0;
      var isUpgrade = matchObj.isUpgrade;
      var diffBudget = matchObj.diffBudget;
      var item = matchObj.item;

      var card = el('div', { class: 'qs-result' + (isPick ? ' is-primary' : (isUpgrade ? ' is-upgrade' : '')) });

      var badgeClass = 'qs-badge ';
      var badgeText = '';
      if (isPick) {
        badgeClass += 'qs-badge--pick';
        badgeText = 'Sản phẩm để đối chiếu';
      } else if (isUpgrade) {
        badgeClass += 'qs-badge--upgrade';
        badgeText = 'Nâng cấp (+' + formatVND(diffBudget) + ')';
      } else {
        badgeClass += 'qs-badge--alt';
        badgeText = 'Lựa chọn thay thế';
      }
      var badge = el('span', { class: badgeClass });
      badge.textContent = badgeText;

      var img = el('img', { src: item.img, alt: item.name, loading: 'lazy' });
      var body = el('div', { class: 'qs-result-body' });
      var name = el('div', { class: 'qs-result-name' });
      name.textContent = item.name;

      var price = el('div', { class: 'qs-result-price' });
      price.textContent = item.priceText;
      if (isUpgrade && diffBudget > 0) {
        var diffTag = el('span', { class: 'qs-diff-tag' });
        diffTag.textContent = '+' + formatVND(diffBudget) + ' (Nâng cấp)';
        price.appendChild(diffTag);
      }

      var vat = el('p', { class: 'qs-result-vat' });
      vat.textContent = 'Giá niêm yết chính hãng, bảo hành ' + (item.warranty || '24 tháng');

      var reason = el('p', { class: 'qs-result-reason' });
      if (isPick) {
        reason.textContent = 'Cần kiểm tra cụm đèn, khoảng hở và hệ điều khiển trước khi xác nhận lắp.';
      } else if (isUpgrade) {
        reason.innerHTML = '<strong>Gợi ý nâng cấp:</strong> +' + formatVND(diffBudget) + ' vượt ngân sách.';
      } else {
        reason.textContent = 'Cần kiểm tra cụm đèn, khoảng hở và hệ điều khiển trước khi xác nhận lắp.';
      }

      var actions = el('div', { class: 'qs-result-actions' });
      var btnDetail = el('a', { class: 'qs-btn-outline', href: item.url, target: '_blank', rel: 'noreferrer' });
      btnDetail.textContent = 'Xem chi tiết sản phẩm';

      var btnConsult = el('button', { type: 'button', class: 'qs-btn-primary' });
      btnConsult.textContent = 'Tư vấn theo dòng xe';
      btnConsult.addEventListener('click', function() {
        showConsultStep(item, { isPick: isPick, isUpgrade: isUpgrade, diffBudget: diffBudget, diffBase: 0 });
      });

      actions.appendChild(btnDetail);
      actions.appendChild(btnConsult);
      body.appendChild(badge);
      body.appendChild(name);
      body.appendChild(price);
      body.appendChild(vat);
      body.appendChild(reason);
      body.appendChild(actions);
      card.appendChild(img);
      card.appendChild(body);
      resultBox.appendChild(card);
    });
    openModal();
  }

`;

html = html.replace(oldRunSearch, newRunSearch);
fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Rewrote runSearch.");
