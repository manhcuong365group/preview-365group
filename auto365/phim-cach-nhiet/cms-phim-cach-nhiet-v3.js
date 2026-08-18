  // Cần xác nhận CMS auto365.vn cho phép chạy script inline này
  // Script này bắt buộc để FilmMatch selector hoạt động: xử lý submit form #film-selector-form, render gợi ý (#rec-list), hiện khối #profile-result, xử lý form gửi lead (#lead-form) và nút sao chép nội dung sang Zalo (.zalo-action). Không có JS này, form chọn xe sẽ không sinh kết quả tư vấn. Script có tham chiếu #mobile-primary (thuộc .mobile-cta đã bị loại khỏi bản CMS-PASTE này) nhưng đã bọc null-check nên không lỗi nếu CMS không có phần tử đó — nếu muốn thanh CTA nổi trên mobile hoạt động trên trang CMS, cần bổ sung phần tử #mobile-primary tương ứng.
  (function(){
    'use strict';
    var qs=function(s,r){return (r||document).querySelector(s)};
    var qsa=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
    var form=qs('#film-selector-form');
    var latestSummary='';
    var reducedMotion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.dataLayer=window.dataLayer||[];
    function track(event,data){window.dataLayer.push(Object.assign({event:event},data||{}))}
    function showFormWarn(anchorEl,message){
      var warn=document.createElement('p');warn.className='form-warn';warn.textContent=message;
      (anchorEl.closest('.fm-card')||anchorEl.closest('form')).appendChild(warn);
      qs('#selector-live').textContent=message;
      (anchorEl.closest('.fm-card')||anchorEl.closest('form')).scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'center'});
    }
    function clearFormWarn(){qsa('.form-warn').forEach(function(el){el.remove()})}
    function renderRecommendations(vehicle,needs,panorama,filmStatus,budget){
      var recs=[];
      function has(v){return needs.indexOf(v)!==-1}
      var viewScore=(has('windshield-view')?2:0)+(has('clarity')?2:0)+(has('unsure')?1:0);
      var coolScore=(has('cooler')?2:0)+(has('outdoor')?1:0)+(has('parked-outdoor')?1:0);
      var privacyScore=(has('privacy')?2:0)+(has('family')?1:0);
      recs.push({score:viewScore+1,title:'Ưu tiên tầm nhìn và độ trong',
        reason:'Phù hợp khi anh/chị coi trọng quan sát khi lái, nhất là đi đêm, trời mưa hoặc vào hầm'+(has('windshield-view')||has('clarity')?' — đúng với nhu cầu vừa chọn':'')+'.',
        tradeoff:'Kính trước sáng hơn nên độ riêng tư và cảm giác dịu nắng ở khoang trước thấp hơn phương án tối màu.',
        next:'Thử mẫu phim sáng trên kính lái và so cảm giác nhìn ngày/đêm trước khi chốt.'});
      recs.push({score:coolScore+1,title:'Cân bằng giảm nóng và sinh hoạt hằng ngày',
        reason:'Phù hợp cho xe dùng thường xuyên ngoài trời hoặc chở gia đình'+(coolScore>0?' — đúng với nhu cầu vừa chọn':'')+', phối kính lái sáng với khoang sau dịu nắng hơn.',
        tradeoff:'Không tối đa một tiêu chí nào; hiệu quả từng vị trí phụ thuộc mã phim cụ thể và kính nguyên bản.',
        next:'Yêu cầu bảng thông số theo đúng mã cho từng vị trí kính khi nhận tư vấn.'});
      recs.push({score:privacyScore,title:'Ưu tiên riêng tư khoang sau',
        reason:'Phù hợp khi hay chở trẻ nhỏ, đồ đạc hoặc muốn hạn chế ánh nhìn từ ngoài'+(privacyScore>0?' — đúng với nhu cầu vừa chọn':'')+'; chỉ áp cho kính sườn sau và kính lưng.',
        tradeoff:'Kính tối hơn làm giảm khả năng quan sát từ trong ra khi trời tối; kính lái vẫn phải giữ sáng.',
        next:'Quan sát thử từ ghế sau lúc thiếu sáng trước khi chọn mức tối.'});
      recs.sort(function(a,b){return b.score-a.score});
      recs=recs.slice(0,privacyScore>0?3:2);
      var extra=[];
      if(panorama==='yes')extra.push('Xe có cửa sổ trời/panorama: hạng mục này cần khảo sát và báo giá riêng, không gộp ngầm vào gói.');
      if(filmStatus==='old'||has('replace-old'))extra.push('Xe đang có phim cũ: cần khảo sát keo, dây sấy và thiết bị trên kính trước khi bóc.');
      if(budget==='under-8')extra.push('Với ngân sách tiết kiệm, nên ưu tiên đúng vị trí kính quan trọng nhất thay vì trải đều toàn xe.');
      var list=qs('#rec-list');list.textContent='';
      recs.forEach(function(r){
        var card=document.createElement('article');card.className='rec-card';card.setAttribute('role','listitem');
        card.innerHTML='<b>'+r.title+'</b><p><strong>Vì sao phù hợp:</strong> '+r.reason+'</p><p><strong>Đánh đổi:</strong> '+r.tradeoff+'</p><p><strong>Bước tiếp theo:</strong> '+r.next+'</p>';
        list.appendChild(card);
      });
      extra.forEach(function(t){
        var note=document.createElement('article');note.className='rec-card';note.setAttribute('role','listitem');
        note.innerHTML='<b>Lưu ý theo xe của bạn</b><p>'+t+'</p>';
        list.appendChild(note);
      });
    }
    function generate(){
      var brand=qs('#car-brand').value.trim();
      var model=qs('#car-model').value.trim();
      var year=qs('#car-year').value.trim();
      var vehicleSelect=qs('#vehicle');
      var vehicleTypeLabel=vehicleSelect.options[vehicleSelect.selectedIndex].textContent;
      var needSelect=qs('#need-main');
      var needChecks=needSelect.value?[needSelect]:[];
      var needsValues=needSelect.value?[needSelect.value]:[];
      var needsLabels=needSelect.value?[needSelect.options[needSelect.selectedIndex].textContent]:[];
      clearFormWarn();
      if(!needSelect.value){showFormWarn(needSelect,'Vui lòng chọn nhu cầu chính.');return}
      if(!vehicleSelect.value){showFormWarn(vehicleSelect,'Vui lòng chọn loại xe.');return}
      var panoramaSelect=qs('#panorama-status');
      var hudSelect=qs('#hud-status');
      var filmSelect=qs('#film-status');
      var filmAgeSelect=qs('#film-age');
      var budgetSelect=qs('#budget-range');
      var panoramaLabel=panoramaSelect.options[panoramaSelect.selectedIndex].textContent;
      var hudLabel=hudSelect.options[hudSelect.selectedIndex].textContent;
      var filmLabel=filmSelect.options[filmSelect.selectedIndex].textContent;
      var filmAgeLabel=filmAgeSelect.value?filmAgeSelect.options[filmAgeSelect.selectedIndex].textContent:'';
      var budgetLabel=budgetSelect.options[budgetSelect.selectedIndex].textContent;
      var vehicleText=[brand,model].filter(Boolean).join(' ')||vehicleTypeLabel;
      var needsText=needsLabels.length?needsLabels.join(' · '):'Chưa chọn nhu cầu cụ thể';
      var filmText=filmLabel+(filmSelect.value==='old'&&filmAgeLabel?(' · '+filmAgeLabel):'');
      qs('#rs-vehicle').textContent=vehicleText+(year?(' · Năm '+year):'')+' · '+vehicleTypeLabel;
      qs('#rs-needs').textContent=needsText;
      qs('#rs-panorama').textContent=panoramaLabel+(hudSelect.value!=='unknown'?(' · HUD: '+hudLabel):'');
      qs('#rs-film').textContent=filmText;
      qs('#rs-budget').textContent=budgetLabel;
      latestSummary='Auto365 - Nhu cầu khách hàng qua FilmMatch\nXe: '+vehicleText+(year?' (năm '+year+')':'')+' — '+vehicleTypeLabel+'\nNhu cầu: '+needsText+'\nPanorama: '+panoramaLabel+'\nHUD: '+hudLabel+'\nPhim hiện tại: '+filmText+'\nNgân sách dự kiến: '+budgetLabel;
      renderRecommendations(vehicleSelect.value,needsValues,panoramaSelect.value,filmSelect.value,budgetSelect.value);
      var result=qs('#profile-result');result.hidden=false;qs('#selector-live').textContent='Đã tạo tóm tắt nhu cầu và hướng lựa chọn.';result.focus();result.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'center'});
      var mobile=qs('#mobile-primary');if(mobile){mobile.textContent='Nhận tư vấn';mobile.href='#lead-phone'}
      track('filmmatch_needs_submitted',{vehicle_type:vehicleSelect.value,needs_count:needChecks.length,panorama:panoramaSelect.value,hud:hudSelect.value,film_status:filmSelect.value,budget_range:budgetSelect.value});
    }
    function invalidateResult(){
      var result=qs('#profile-result');
      if(result.hidden)return;
      result.hidden=true;
      latestSummary='';
      var mobile=qs('#mobile-primary');if(mobile){mobile.textContent='Khảo sát nhu cầu';mobile.href='#selector'}
      track('filmmatch_needs_invalidated');
    }
    form.addEventListener('input',invalidateResult);
    form.addEventListener('change',invalidateResult);
    form.addEventListener('submit',function(e){e.preventDefault();generate()});
    

    function toast(message){var el=qs('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(function(){el.classList.remove('show')},3200)}
    function fallbackCopy(text){var area=document.createElement('textarea');area.value=text;area.setAttribute('readonly','');area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();var copied=false;try{copied=document.execCommand('copy')}catch{copied=false}document.body.removeChild(area);return copied}
    function copySummary(text){if(navigator.clipboard&&window.isSecureContext){return navigator.clipboard.writeText(text).then(function(){return true}).catch(function(){return fallbackCopy(text)})}return Promise.resolve(fallbackCopy(text))}
    qsa('.zalo-action').forEach(function(link){link.addEventListener('click',function(){
      var summary=latestSummary||'Tôi muốn được Auto365 tư vấn phim cách nhiệt theo xe và từng vị trí kính.';
      copySummary(summary).then(function(copied){toast(copied?'Đã sao chép tiêu chí. Hãy dán và bấm Gửi trong Zalo.':'Đã mở Zalo. Nếu tiêu chí chưa được sao chép, hãy nhập yêu cầu trong Zalo.')});
      track('zalo_click',{source:link.getAttribute('data-zalo-source')||'page',has_profile:Boolean(latestSummary)});
    })});
    var quickLinks=qsa('.quicknav a');
    var sections=quickLinks.map(function(link){return qs(link.getAttribute('href'))}).filter(Boolean);
    if('IntersectionObserver' in window){var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){quickLinks.forEach(function(link){var active=link.getAttribute('href')==='#'+entry.target.id;if(active){link.setAttribute('aria-current','location')}else{link.removeAttribute('aria-current')}})}})},{rootMargin:'-35% 0px -55% 0px',threshold:0});sections.forEach(function(section){observer.observe(section)})}
    var leadForm=qs('#lead-form');
    if(leadForm){
      leadForm.addEventListener('submit',function(e){
        e.preventDefault();
        var phone=qs('#lead-phone').value.trim();
        var statusEl=qs('#lead-status');
        var submitBtn=leadForm.querySelector('button[type="submit"]');
        if(!phone) return;
        var isProduction=/(^|\.)auto365\.vn$/.test(location.hostname);
        if(!isProduction){
          statusEl.textContent='Đây là bản xem thử — thông tin không được gửi đi. Trên trang chính thức auto365.vn, Auto365 sẽ nhận được nhu cầu này.';
          statusEl.className='lead-status err';statusEl.hidden=false;
          return;
        }
        submitBtn.disabled=true;submitBtn.textContent='Đang gửi...';
        statusEl.hidden=true;statusEl.className='lead-status';
        var brand=qs('#car-brand').value.trim();
        var model=qs('#car-model').value.trim();
        var year=qs('#car-year').value.trim();
        var vehicleSel=qs('#vehicle');
        var carModelText=[brand,model].filter(Boolean).join(' ')||vehicleSel.options[vehicleSel.selectedIndex].textContent;
        var needSelect2=qs('#need-main');
        var needsValues=needSelect2.value?[needSelect2.value]:[];
        var needsLabels=needSelect2.value?[needSelect2.options[needSelect2.selectedIndex].textContent]:[];
        var leadId='HUB-'+Date.now();
        var data=new FormData();
        data.append('form-honey','');
        data.append('fullname',qs('#lead-name').value.trim());
        data.append('phone',phone);
        data.append('car_model',carModelText);
        data.append('priority',needsLabels.join(', ')||'Chưa chọn nhu cầu cụ thể');
        data.append('service','Phim cách nhiệt — Khảo sát nhu cầu (Hub)');
        data.append('source_page','Phim cách nhiệt Hub V3');
        data.append('source_url',location.href);
        data.append('referrer',document.referrer||'');
        var qp=new URLSearchParams(location.search);
        ['utm_source','utm_medium','utm_campaign','utm_term','utm_content'].forEach(function(k){data.append(k,qp.get(k)||'')});
        data.append('lead_id',leadId);
        data.append('lead_source','FilmMatch');
        data.append('created_at',new Date().toISOString());
        data.append('car_brand',brand);
        data.append('car_year',year);
        data.append('vehicle_group',vehicleSel.value);
        data.append('main_needs',needsValues.join(','));
        data.append('has_panorama',qs('#panorama-status').value);
        data.append('has_hud',qs('#hud-status').value);
        data.append('current_film_status',qs('#film-status').value);
        data.append('current_film_age',qs('#film-age').value);
        data.append('budget_range',qs('#budget-range').value);
        data.append('province','');
        data.append('note',latestSummary);
        fetch('/api/leads',{method:'POST',body:data,keepalive:true}).then(function(res){
          if(!res.ok) throw new Error('bad status');
          return res.json().catch(function(){return null});
        }).then(function(){
          statusEl.textContent='Đã gửi. Auto365 sẽ liên hệ theo số vừa nhập.';
          statusEl.className='lead-status ok';statusEl.hidden=false;
          track('hub_lead_submitted',{lead_id:leadId});
        }).catch(function(){
          statusEl.textContent='Chưa gửi được lúc này. Anh/chị có thể dùng nút Zalo bên dưới.';
          statusEl.className='lead-status err';statusEl.hidden=false;
        }).finally(function(){
          submitBtn.disabled=false;submitBtn.textContent='Gửi nhu cầu cho Auto365';
        });
      });
    }

    qsa('a[href^="#"]').forEach(function(link){link.addEventListener('click',function(){track('internal_navigation',{target:link.getAttribute('href')})})});qsa('a[href^="tel:"]').forEach(function(link){link.addEventListener('click',function(){track('phone_click',{source:link.getAttribute('data-phone-source')||'page'})})});var brandHandoff=qs('#brand-handoff');if(brandHandoff){brandHandoff.addEventListener('click',function(){track('brand_commercial_handoff',{brand:'3M',has_profile:Boolean(latestSummary)})})}var compareHandoff=qs('#brand-compare-handoff');if(compareHandoff){compareHandoff.addEventListener('click',function(){track('filmmatch_compare_start',{has_profile:Boolean(latestSummary)})})}qsa('.brand-source-links a').forEach(function(link){link.addEventListener('click',function(){track('brand_source_open',{source_id:link.getAttribute('data-source-id')||'unknown'})})})
  })();
