const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

const newRunSearch = 'function runSearch() {\\n' +
'    var need = document.getElementById(\'qs-need\') ? document.getElementById(\'qs-need\').value : \'\';\\n' +
'    var socket = document.getElementById(\'qs-socket\') ? document.getElementById(\'qs-socket\').value : \'\';\\n' +
'    var budget = document.getElementById(\'qs-budget\') ? document.getElementById(\'qs-budget\').value : \'\';\\n' +
'    var voltage = document.getElementById(\'qs-voltage\') ? document.getElementById(\'qs-voltage\').value : \'\';\\n' +
'\\n' +
'    var budgetMax = Infinity;\\n' +
'    var budgetMin = 0;\\n' +
'    var hasBudgetFilter = false;\\n' +
'    if (budget === \'under20\') {\\n' +
'      budgetMax = 2000000;\\n' +
'      hasBudgetFilter = true;\\n' +
'    } else if (budget === \'20to25\') {\\n' +
'      budgetMin = 2000000;\\n' +
'      budgetMax = 2500000;\\n' +
'      hasBudgetFilter = true;\\n' +
'    } else if (budget === \'over25\') {\\n' +
'      budgetMin = 2500000;\\n' +
'      hasBudgetFilter = true;\\n' +
'    }\\n' +
'\\n' +
'    var results = [];\\n' +
'    var addedIds = {};\\n' +
'\\n' +
'    var strictMatches = LED_CATALOG.filter(function(item) {\\n' +
'      var okSocket = !socket || item.sockets.indexOf(socket) !== -1;\\n' +
'      var okNeed = !need || item.needs.indexOf(need) !== -1;\\n' +
'      var okBudget = item.price >= budgetMin && item.price <= budgetMax;\\n' +
'      var itemVoltage = item.voltage || \'12V\';\\n' +
'      var okVoltage = !voltage || itemVoltage === voltage || itemVoltage.indexOf(voltage) !== -1;\\n' +
'      return okSocket && okNeed && okBudget && okVoltage;\\n' +
'    });\\n' +
'\\n' +
'    strictMatches.forEach(function(item) {\\n' +
'      results.push({\\n' +
'        item: item,\\n' +
'        isUpgrade: false,\\n' +
'        diffBudget: 0,\\n' +
'        diffBase: 0\\n' +
'      });\\n' +
'      addedIds[item.id] = true;\\n' +
'    });\\n' +
'\\n' +
'    if (results.length < 3) {\\n' +
'      var priceExpanded = LED_CATALOG.filter(function(item) {\\n' +
'        if (addedIds[item.id]) return false;\\n' +
'        var okSocket = !socket || item.sockets.indexOf(socket) !== -1;\\n' +
'        var okNeed = !need || item.needs.indexOf(need) !== -1;\\n' +
'        var itemVoltage = item.voltage || \'12V\';\\n' +
'        var okVoltage = !voltage || itemVoltage === voltage || itemVoltage.indexOf(voltage) !== -1;\\n' +
'        return okSocket && okNeed && okVoltage;\\n' +
'      });\\n' +
'\\n' +
'      priceExpanded.sort(function(a, b) {\\n' +
'        return a.price - b.price;\\n' +
'      });\\n' +
'\\n' +
'      priceExpanded.forEach(function(item) {\\n' +
'        if (results.length >= 3) return;\\n' +
'        var isExceed = hasBudgetFilter && budgetMax !== Infinity && item.price > budgetMax;\\n' +
'        var diffB = isExceed ? item.price - budgetMax : 0;\\n' +
'        var basePrice = results[0] ? results[0].item.price : (budgetMax !== Infinity ? budgetMax : item.price);\\n' +
'        var diffBase = item.price > basePrice ? item.price - basePrice : 0;\\n' +
'\\n' +
'        results.push({\\n' +
'          item: item,\\n' +
'          isUpgrade: isExceed,\\n' +
'          diffBudget: diffB,\\n' +
'          diffBase: diffBase\\n' +
'        });\\n' +
'        addedIds[item.id] = true;\\n' +
'      });\\n' +
'    }\\n' +
'\\n' +
'    var finalThree = results.slice(0, 3);\\n' +
'    var resultBox = document.getElementById(\'qs-result\');\\n' +
'    if (!resultBox) return;\\n' +
'    \\n' +
'    if (finalThree.length === 0) {\\n' +
'      resultBox.innerHTML = \'<div style="padding: 24px; text-align: center; background: #fff; border: 1px solid #dce4ea; border-radius: 8px;"><p style="margin:0; color:#ef2326; font-weight:600; font-size:16px;">Chưa tìm thấy cấu hình phù hợp</p><p style="margin:8px 0 0; font-size:14px; color:#657487; line-height:1.5;">Vui lòng điều chỉnh tiêu chí hoặc để lại thông tin, chuyên viên Auto365 sẽ tra cứu hồ sơ xe và tư vấn trực tiếp.</p></div>\';\\n' +
'      return;\\n' +
'    }\\n' +
'    \\n' +
'    resultBox.innerHTML = \'\';\\n' +
'    var isFullySpecified = socket !== \'\' && voltage !== \'\';\\n' +
'\\n' +
'    finalThree.forEach(function(matchObj, idx) {\\n' +
'      var isPick = idx === 0;\\n' +
'      var isUpgrade = matchObj.isUpgrade;\\n' +
'      var diffBudget = matchObj.diffBudget;\\n' +
'      var diffBase = matchObj.diffBase;\\n' +
'      var item = matchObj.item;\\n' +
'\\n' +
'      var card = el(\'div\', { class: \'qs-result\' + (isPick ? \' is-primary\' : (isUpgrade ? \' is-upgrade\' : \'\')) });\\n' +
'\\n' +
'      var badgeClass = \'qs-badge \';\\n' +
'      var badgeText = \'\';\\n' +
'      if (isPick) {\\n' +
'        badgeClass += \'qs-badge--pick\';\\n' +
'        badgeText = isFullySpecified ? \'Khuyến nghị hàng đầu\' : \'Sản phẩm để đối chiếu\';\\n' +
'      } else if (isUpgrade) {\\n' +
'        badgeClass += \'qs-badge--upgrade\';\\n' +
'        badgeText = \'Nâng cấp (+\' + formatVND(diffBudget) + \')\';\\n' +
'      } else {\\n' +
'        badgeClass += \'qs-badge--alt\';\\n' +
'        badgeText = \'Lựa chọn thay thế\';\\n' +
'      }\\n' +
'      var badge = el(\'span\', { class: badgeClass });\\n' +
'      badge.textContent = badgeText;\\n' +
'\\n' +
'      var img = el(\'img\', { src: item.img, alt: item.name, loading: \'lazy\' });\\n' +
'      var body = el(\'div\', { class: \'qs-result-body\' });\\n' +
'      var name = el(\'div\', { class: \'qs-result-name\' });\\n' +
'      name.textContent = item.name;\\n' +
'\\n' +
'      var price = el(\'div\', { class: \'qs-result-price\' });\\n' +
'      price.textContent = item.priceText;\\n' +
'      if (isUpgrade && diffBudget > 0) {\\n' +
'        var diffTag = el(\'span\', { class: \'qs-diff-tag\' });\\n' +
'        diffTag.textContent = \'+\' + formatVND(diffBudget) + \' (Nâng cấp)\';\\n' +
'        price.appendChild(diffTag);\\n' +
'      }\\n' +
'\\n' +
'      var vat = el(\'p\', { class: \'qs-result-vat\' });\\n' +
'      vat.textContent = \'Giá niêm yết chính hãng, bảo hành \' + (item.warranty || \'24 tháng\');\\n' +
'\\n' +
'      var reason = el(\'p\', { class: \'qs-result-reason\' });\\n' +
'      if (isPick) {\\n' +
'        reason.textContent = isFullySpecified ? (\'Phù hợp tối đa tiêu chí chọn: chuẩn chân \' + socket + \', điện áp \' + voltage + \'.\') : (\'Phù hợp với nhu cầu, tuy nhiên cần xác nhận đúng chuẩn chân cắm và hệ điện của xe.\');\\n' +
'      } else if (isUpgrade) {\\n' +
'        var diffInfo = \'+\' + formatVND(diffBudget) + \' vượt ngân sách\';\\n' +
'        if (diffBase > 0) {\\n' +
'          diffInfo += \', +\' + formatVND(diffBase) + \' so với bản tiêu chuẩn\';\\n' +
'        }\\n' +
'        reason.innerHTML = \'<strong>Gợi ý nâng cấp:</strong> \' + diffInfo + \'.\';\\n' +
'      } else {\\n' +
'        reason.textContent = \'Lựa chọn thay thế cùng phân khúc chất lượng.\';\\n' +
'      }\\n' +
'\\n' +
'      var actions = el(\'div\', { class: \'qs-result-actions\' });\\n' +
'      var btnDetail = el(\'a\', { class: \'qs-btn-outline\', href: item.url, target: \'_blank\', rel: \'noreferrer\' });\\n' +
'      btnDetail.textContent = \'Xem chi tiết sản phẩm\';\\n' +
'\\n' +
'      var btnConsult = el(\'button\', { type: \'button\', class: \'qs-btn-primary\' });\\n' +
'      btnConsult.textContent = \'Tư vấn theo dòng xe\';\\n' +
'      btnConsult.addEventListener(\'click\', function() {\\n' +
'        showConsultStep(item, { isPick: isPick, isUpgrade: isUpgrade, diffBudget: diffBudget, diffBase: diffBase });\\n' +
'      });\\n' +
'\\n' +
'      actions.appendChild(btnDetail);\\n' +
'      actions.appendChild(btnConsult);\\n' +
'\\n' +
'      body.appendChild(badge);\\n' +
'      body.appendChild(name);\\n' +
'      body.appendChild(price);\\n' +
'      body.appendChild(vat);\\n' +
'      body.appendChild(reason);\\n' +
'      body.appendChild(actions);\\n' +
'\\n' +
'      card.appendChild(img);\\n' +
'      card.appendChild(body);\\n' +
'      resultBox.appendChild(card);\\n' +
'    });\\n' +
'\\n' +
'    openModal();\\n' +
'  }';

const oldRegex = /function runSearch\(\) \{[\s\S]*?openModal\(\);\s*\}/;
if (oldRegex.test(html)) {
  html = html.replace(oldRegex, newRunSearch);
  fs.writeFileSync(file, '\ufeff' + (html.charCodeAt(0) === 0xFEFF ? html.slice(1) : html), 'utf8');
  console.log("Replaced runSearch successfully.");
} else {
  console.log("Could not find runSearch.");
}
