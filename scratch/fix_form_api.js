const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

html = html.replace(/sendAuto365LeadApi\(apiPayload, leadId\)\.then\(res => \{([\s\S]*?)\}\)\.catch\(\(\) => \{([\s\S]*?)\}\);/g, function(match) {
    return "sendAuto365LeadApi(apiPayload, leadId).then(res => {\n" +
"    if (res.success) {\n" +
"      if (submitBtn) { submitBtn.textContent = 'Ðã g?i yêu c?u thành công ?'; submitBtn.style.background = '#10b981'; }\n" +
"      if (statusEl) {\n" +
"        statusEl.style.display = 'block';\n" +
"        statusEl.className = 'form-success';\n" +
"        statusEl.innerHTML = 'Auto365 dã ti?p nh?n yêu c?u. Mã lead: <strong>' + (res.lead_id || leadId) + '</strong>. Chuyên viên s? liên h? l?i ngay.';\n" +
"      }\n" +
"      toast('Ðã g?i yêu c?u tu v?n thành công!');\n" +
"      window.dataLayer = window.dataLayer || [];\n" +
"      window.dataLayer.push({ event: 'lead_form_submit', form_source: 'bong-led-mid', lead_id: res.lead_id || leadId });\n" +
"    } else {\n" +
"      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Th? l?i (L?i m?ng)'; submitBtn.style.background = ''; }\n" +
"      if (statusEl) {\n" +
"        statusEl.style.display = 'block';\n" +
"        statusEl.className = 'form-error';\n" +
"        statusEl.innerHTML = 'L?i g?i yêu c?u: ' + (res.error || 'Th?t b?i') + '. Vui lòng th? l?i ho?c liên h? Zalo.';\n" +
"      }\n" +
"      toast('G?i th?t b?i. Vui lòng th? l?i.');\n" +
"    }\n" +
"  }).catch(() => {\n" +
"    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'G?i yêu c?u tu v?n'; }\n" +
"  });";
});

html = html.replace(/consultForm\.addEventListener\('submit', function\(e\) \{([\s\S]*?)setTimeout\(function\(\) \{\s*window\.open\('https:\/\/zalo\.me\/0365365911', '_blank'\);\s*\}, 350\);\s*\}\);/g, function(match) {
    return "consultForm.addEventListener('submit', function(e) {\n" +
"      e.preventDefault();\n" +
"      var submitBtn = consultForm.querySelector('button[type=\"submit\"]');\n" +
"      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Ðang x? lý...'; }\n" +
"\n" +
"      var name = (document.getElementById('qsc-name').value || '').trim();\n" +
"      var phone = (document.getElementById('qsc-phone').value || '').trim();\n" +
"      var car = (document.getElementById('qsc-car').value || '').trim();\n" +
"      var prov = (document.getElementById('qsc-province').value || '').trim();\n" +
"      var need = (document.getElementById('qsc-need').value || '').trim();\n" +
"      var prod = (typeof activeConsultItem !== 'undefined' && activeConsultItem) ? activeConsultItem : { name: 'Bóng LED Auto365', priceText: '' };\n" +
"\n" +
"      var phoneClean = phone.replace(/[\\s.-]/g, '');\n" +
"      if (!/^(0|\\+84)[0-9]{9,10}$/.test(phoneClean)) {\n" +
"        alert('Vui lòng nh?p s? di?n tho?i h?p l? (10 s?, b?t d?u b?ng 0).');\n" +
"        document.getElementById('qsc-phone').focus();\n" +
"        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Nh?n tu v?n ngay'; }\n" +
"        return;\n" +
"      }\n" +
"\n" +
"      var isBooking = (typeof activeConsultMatch !== 'undefined' && activeConsultMatch) ? activeConsultMatch.isDirectBooking : false;\n" +
"      var leadId = 'LED-' + Date.now().toString().slice(-6) + '-' + Math.floor(Math.random()*1000);\n" +
"\n" +
"      var apiPayload = {\n" +
"        source: 'bong-led-quickselect',\n" +
"        name: name,\n" +
"        phone: phoneClean,\n" +
"        car_model: car,\n" +
"        province: prov,\n" +
"        note: (isBooking ? 'Ð?t l?ch th? ánh sáng' : 'Tu v?n') + ' - Nhu c?u: ' + need,\n" +
"        product: prod.name\n" +
"      };\n" +
"\n" +
"      if (typeof sendAuto365LeadApi === 'function') {\n" +
"        sendAuto365LeadApi(apiPayload, leadId).then(function(res) {\n" +
"          if (res.success) {\n" +
"            if (submitBtn) { submitBtn.textContent = 'Ðã g?i thành công ?'; submitBtn.style.background = '#10b981'; }\n" +
"            if (typeof toast === 'function') toast('Auto365 dã nh?n yêu c?u. Chuyên viên s? g?i l?i s?m!');\n" +
"            window.dataLayer = window.dataLayer || [];\n" +
"            window.dataLayer.push({ event: 'lead_form_submit', form_source: 'bong-led-quickselect', lead_id: res.lead_id || leadId });\n" +
"          } else {\n" +
"            if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'G?i th?t b?i (Th? l?i)'; }\n" +
"            if (typeof toast === 'function') toast('L?i h? th?ng: ' + (res.error || 'Th?t b?i') + '. Xin vui lòng g?i tr?c ti?p.');\n" +
"          }\n" +
"        }).catch(function() {\n" +
"          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Nh?n tu v?n ngay'; }\n" +
"        });\n" +
"      } else {\n" +
"        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Nh?n tu v?n ngay'; }\n" +
"        window.open('https://zalo.me/0365365911', '_blank');\n" +
"      }\n" +
"    });";
});

fs.writeFileSync(file, html);
console.log('API Form updates applied successfully.');
