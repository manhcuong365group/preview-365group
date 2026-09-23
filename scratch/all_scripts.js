
(function() {
  function el(tag, props, children) {
    var e = document.createElement(tag);
    if (props) Object.keys(props).forEach(function(k) { e.setAttribute(k, props[k]); });
    (children || []).forEach(function(c) { e.appendChild(c); });
    return e;
  }

  var LED_CATALOG = JSON.parse(document.getElementById('product-data').textContent);

  var activeConsultItem = null;
  var activeConsultMatch = null;

  function showRecoStep() {
    var vReco = document.getElementById('qs-view-reco');
    var vConsult = document.getElementById('qs-view-consult');
    if (vReco && vConsult) {
      vConsult.hidden = true;
      vReco.hidden = false;
    }
  }

  window.showConsultStepGlobal = function(item, matchObj) {
    openModal();
    showConsultStep(item, matchObj);
  };

  window.openBookingLightTest = function() {
    var testItem = {
      name: 'Trải nghiệm so sánh nhiệt màu 4300K & 6000K trên xe thực tế',
      priceText: 'Miễn phí trải nghiệm tại xưởng',
      img: 'https://auto365.vn/uploads/images/product/X-LIGHT/bong-led-s8-pro-4300K-chan-h4/s8-pro-4300k-chan-h4-5.png.webp'
    };

    openModal();
    showConsultStep(testItem, {
      isPick: true,
      isUpgrade: false,
      diffBudget: 0,
      isDirectBooking: true,
      customTitle: 'Đặt lịch thử ánh sáng trực tiếp tại xưởng Auto365',
      customBadge: 'Miễn phí trải nghiệm',
      customNeed: 'Đặt lịch thử ánh sáng 4300K / 6000K trực tiếp trên xe'
    });
  };

  function showConsultStep(item, matchObj) {
    activeConsultItem = item;
    activeConsultMatch = matchObj;

    var vReco = document.getElementById('qs-view-reco');
    var vConsult = document.getElementById('qs-view-consult');
    if (!vReco || !vConsult) return;

    var selImg = document.getElementById('qs-sel-img');
    var selName = document.getElementById('qs-sel-name');
    var selPrice = document.getElementById('qs-sel-price');
    var selBadge = document.getElementById('qs-sel-badge');
    var selDiff = document.getElementById('qs-sel-diff');
    var consultTitle = document.getElementById('qs-consult-title');
    var btnBack = document.getElementById('qs-btn-back');

    if (consultTitle) {
      consultTitle.textContent = (matchObj && matchObj.customTitle) ? matchObj.customTitle : 'Tư vấn lắp đặt theo xe';
    }
    if (btnBack) {
      btnBack.style.display = (matchObj && matchObj.isDirectBooking) ? 'none' : '';
    }

    if (selImg) { selImg.src = item.img; selImg.alt = item.name; }
    if (selName) selName.textContent = item.name;
    if (selPrice) selPrice.textContent = item.priceText;
    var selWarranty = document.getElementById('qs-sel-warranty');
    if (selWarranty) {
      selWarranty.textContent = 'Bảo hành: ' + (item.warranty || 'Theo quy định hãng');
    }

    if (matchObj && matchObj.customBadge) {
      if (selBadge) {
        selBadge.className = 'qs-badge qs-badge--pick';
        selBadge.textContent = matchObj.customBadge;
      }
      if (selDiff) selDiff.style.display = 'none';
    } else if (matchObj && matchObj.isUpgrade && matchObj.diffBudget > 0) {
      if (selBadge) {
        selBadge.className = 'qs-badge qs-badge--upgrade';
        selBadge.textContent = 'Nâng cấp (+' + formatVND(matchObj.diffBudget) + ')';
      }
      if (selDiff) {
        selDiff.style.display = 'inline-flex';
        selDiff.textContent = '+' + formatVND(matchObj.diffBudget) + ' (Nâng cấp)';
      }
    } else if (matchObj && matchObj.isPick) {
      if (selBadge) {
        selBadge.className = 'qs-badge qs-badge--pick';
        selBadge.textContent = 'Khuyến nghị ưu tiên';
      }
      if (selDiff) selDiff.style.display = 'none';
    } else {
      if (selBadge) {
        selBadge.className = 'qs-badge qs-badge--alt';
        selBadge.textContent = 'Lựa chọn thay thế';
      }
      if (selDiff) selDiff.style.display = 'none';
    }

    // Pre-fill need
    var qscNeed = document.getElementById('qsc-need');
    if (qscNeed) {
      if (matchObj && matchObj.customNeed) {
        var optFound = false;
        for (var oi = 0; oi < qscNeed.options.length; oi++) {
          if (qscNeed.options[oi].value === matchObj.customNeed) {
            optFound = true;
            break;
          }
        }
        if (!optFound) {
          var newOpt = document.createElement('option');
          newOpt.value = matchObj.customNeed;
          newOpt.textContent = matchObj.customNeed;
          qscNeed.appendChild(newOpt);
        }
        qscNeed.value = matchObj.customNeed;
      } else {
        var heroNeed = document.getElementById('qs-need') ? document.getElementById('qs-need').value : '';
        if (heroNeed === 'city') qscNeed.value = 'Đi phố, chống chói xe đối diện';
        else if (heroNeed === 'touring') qscNeed.value = 'Thường xuyên đi đêm, đường xa, quốc lộ';
        else if (heroNeed === 'rain') qscNeed.value = 'Hay đi trời mưa lớn, sương mù dày';
        else if (heroNeed === 'reflector') qscNeed.value = 'Chóa phản xạ hở cần gom sáng chuẩn';
      }
    }

    // Pre-fill province if already set in page form
    var midProv = document.getElementById('mid-province');
    var qscProv = document.getElementById('qsc-province');
    if (midProv && qscProv && midProv.value) {
      qscProv.value = midProv.value;
    }

    // Switch view
    vReco.hidden = true;
    vConsult.hidden = false;

    var modalInner = document.querySelector('.qs-modal-inner');
    if (modalInner) modalInner.scrollTop = 0;

    var nameInput = document.getElementById('qsc-name');
    if (nameInput) setTimeout(function() { nameInput.focus(); }, 120);
  }

  function openModal() {
    showRecoStep();
    var m = document.getElementById('qs-reco');
    if (m) {
      m.classList.add('is-open');
      document.documentElement.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    var m = document.getElementById('qs-reco');
    if (m) {
      m.classList.remove('is-open');
      document.documentElement.style.overflow = '';
      showRecoStep();
    }
  }

  function formatVND(n) {
    return (n || 0).toLocaleString('vi-VN') + 'đ';
  }

  function runSearch() {
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

  var btnSubmit = document.getElementById('qs-submit');
  if (btnSubmit) {
    btnSubmit.addEventListener('click', function(e) {
      e.preventDefault();
      runSearch();
    });
  }

  var btnClose = document.getElementById('qs-modal-close');
  if (btnClose) {
    btnClose.addEventListener('click', closeModal);
  }

  var btnConsultClose = document.getElementById('qs-consult-close');
  if (btnConsultClose) {
    btnConsultClose.addEventListener('click', closeModal);
  }

  var btnBack = document.getElementById('qs-btn-back');
  if (btnBack) {
    btnBack.addEventListener('click', showRecoStep);
  }

  var consultForm = document.getElementById('qs-consult-form');
  if (consultForm) {
    // Wire direct light test booking button
    var btnLightTest = document.getElementById('btn-direct-light-test');
    if (btnLightTest) {
      btnLightTest.addEventListener('click', function(e) {
        e.preventDefault();
        window.openBookingLightTest();
      });
    }

    // Wire FAQ compact toggle button
    var btnToggleFaq = document.getElementById('btn-toggle-faq');
    var faqGridEl = document.getElementById('faq-grid');
    if (btnToggleFaq && faqGridEl) {
      var faqToggleText = btnToggleFaq.querySelector('.faq-toggle-text');
      var faqToggleIcon = btnToggleFaq.querySelector('.faq-toggle-icon');
      btnToggleFaq.addEventListener('click', function() {
        var isExp = faqGridEl.classList.toggle('is-expanded');
        btnToggleFaq.setAttribute('aria-expanded', isExp ? 'true' : 'false');
        if (isExp) {
          if (faqToggleText) faqToggleText.textContent = 'Thu gọn bớt câu hỏi';
          if (faqToggleIcon) faqToggleIcon.style.transform = 'rotate(180deg)';
        } else {
          if (faqToggleText) faqToggleText.textContent = 'Xem thêm 6 câu hỏi thường gặp khác';
          if (faqToggleIcon) faqToggleIcon.style.transform = '';
        }
      });
    }

    consultForm.addEventListener('submit', function(e) {
      e.preventDefault();

      var name = (document.getElementById('qsc-name').value || '').trim();
      var phone = (document.getElementById('qsc-phone').value || '').trim();
      var car = (document.getElementById('qsc-car').value || '').trim();
      var prov = (document.getElementById('qsc-province').value || '').trim();
      var need = (document.getElementById('qsc-need').value || '').trim();
      var prod = activeConsultItem || { name: 'Bóng LED Auto365', priceText: '' };

      var phoneClean = phone.replace(/[\s.-]/g, '');
      if (!/^(0|\+84)[0-9]{9,10}$/.test(phoneClean)) {
        alert('Vui lòng nhập số điện thoại hợp lệ (10 số, bắt đầu bằng 0).');
        document.getElementById('qsc-phone').focus();
        return;
      }

      var isBooking = activeConsultMatch && activeConsultMatch.isDirectBooking;
      var msgLines = [
        isBooking ? 'Xin chào Auto365, tôi muốn đặt lịch thử ánh sáng trực tiếp tại xưởng:' : 'Xin chào Auto365, tôi muốn nhận tư vấn lắp đặt bóng LED:',
        isBooking ? '• Nội dung: ' + prod.name : '• Sản phẩm quan tâm: ' + prod.name + (prod.priceText ? ' (' + prod.priceText + ')' : ''),
        '• Khách hàng: ' + name,
        '• Số điện thoại: ' + phoneClean,
        car ? '• Dòng xe: ' + car : '',
        prov ? '• Tỉnh thành / Chi nhánh: ' + prov : '',
        need ? '• Nhu cầu: ' + need : '',
        isBooking ? 'Nhờ kỹ thuật viên Auto365 liên hệ xác nhận khung giờ thử ánh sáng 4300K / 6000K trực tiếp.' : 'Nhờ chuyên viên Auto365 kiểm tra đúng chân bóng và báo giá hoàn thiện theo xe.'
      ].filter(Boolean).join('\n');

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(msgLines).catch(function() {});
      }

      // Sync to on-page form fields
      var midName = document.getElementById('mid-name'); if (midName) midName.value = name;
      var midPhone = document.getElementById('mid-phone'); if (midPhone) midPhone.value = phoneClean;
      var midModel = document.getElementById('mid-model'); if (midModel && car) midModel.value = car;
      var midProv = document.getElementById('mid-province'); if (midProv && prov) midProv.value = prov;

      if (typeof toast === 'function') {
        toast('Đã sao chép yêu cầu! Đang mở Zalo kết nối chuyên viên Auto365...');
      }

      setTimeout(function() {
        window.open('https://zalo.me/0365365911', '_blank');
      }, 350);
    });
  }

  var modal = document.getElementById('qs-reco');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });
})();
