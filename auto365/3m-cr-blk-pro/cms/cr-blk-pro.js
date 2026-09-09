/* Auto365 CR BLK Pro — JavaScript CMS, generated from ../index.html */

;

/* Source block 1 */
(function(){
    'use strict';
    var VEHICLES={
      minicar:{label:'Minicar',short:'Mini',standard:12200000,pro:12900000,note:'Xe đô thị cỡ nhỏ'},
      sedan:{label:'Sedan',short:'Sedan',standard:14800000,pro:15500000,note:'Sedan phổ thông đến cao cấp'},
      suv:{label:'SUV / CUV / MPV',short:'SUV/CUV',standard:17600000,pro:18300000,note:'Xe gầm cao, kính lớn'}
    };
    var PACKAGES={
      standard:{name:'CR BLK tiêu chuẩn',short:'CR BLK',eyebrow:'Cân bằng tầm nhìn',windshield:'CR BLK 50 / 60'},
      pro:{name:'CR BLK Pro',short:'CR BLK Pro',eyebrow:'Giảm chói & riêng tư',windshield:'CR BLK 40'}
    };
    var state={vehicle:'sedan',drive:'day',priority:'privacy',panorama:false,manualPackage:null};

    function track(event,payload){
      window.dataLayer=window.dataLayer||[];
      var base={event:event,page_type:'cr_blk_pro'};
      Object.keys(payload||{}).forEach(function(key){base[key]=payload[key]});
      window.dataLayer.push(base);
    }
    function money(value){return new Intl.NumberFormat('vi-VN').format(value)+'đ'}
    function compact(value){return (value/1000000).toLocaleString('vi-VN',{maximumFractionDigits:1})+' triệu'}
    function autoPackage(){
      if(state.drive==='night'||state.priority==='visibility')return 'standard';
      if(state.drive==='day'||state.priority==='privacy')return 'pro';
      return 'standard';
    }
    function selectedPackage(){return state.manualPackage||autoPackage()}
    function setText(name,value){document.querySelectorAll('[data-bind="'+name+'"]').forEach(function(node){node.textContent=value})}
    function setPressed(selector,key,value){document.querySelectorAll(selector).forEach(function(button){var active=button.dataset[key]===value;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))})}
    function recommendation(pkg){
      if(pkg==='pro'){
        if(state.drive==='night'||state.priority==='visibility')return 'Anh/chị đang chọn Pro thủ công, nhưng câu trả lời cho thấy xe thường đi đêm/mưa hoặc cần tầm nhìn sáng. Hãy xem mẫu CR BLK 40 và so sánh trực tiếp với CR BLK 50/60 trên chính xe trước khi chốt.';
        return 'Anh/chị ưu tiên giảm chói, tông kính đậm và sự riêng tư. CR BLK 40 cho kính lái là lựa chọn đáng cân nhắc khi chủ yếu sử dụng xe ban ngày.';
      }
      if(state.drive==='night'||state.priority==='visibility')return 'Anh/chị thường xuyên đi đêm/mưa hoặc ưu tiên tầm nhìn sáng. CR BLK 50/60 phù hợp hơn để dễ thích nghi khi thiếu sáng.';
      return 'Cấu hình tiêu chuẩn tạo điểm cân bằng giữa độ sáng quan sát, giảm chói và ngân sách.';
    }
    function render(){
      var vehicle=VEHICLES[state.vehicle],pkgKey=selectedPackage(),pkg=PACKAGES[pkgKey],price=vehicle[pkgKey];
      var code=(pkgKey==='pro'?'CRP':'CRS')+'-'+state.vehicle.toUpperCase()+'-'+(pkgKey==='pro'?'40-35-15':'50/60-35-15');
      setPressed('.js-vehicle','vehicle',state.vehicle);setPressed('.js-price-select','vehicle',state.vehicle);setPressed('.js-drive','drive',state.drive);setPressed('.js-priority','priority',state.priority);setPressed('.js-panorama','panorama',state.panorama?'yes':'no');
      document.querySelectorAll('[data-price-card]').forEach(function(card){card.classList.toggle('active',card.dataset.priceCard===state.vehicle)});
      setText('hero-pro-price',money(vehicle.pro));setText('vehicle-note',vehicle.note+' • Panorama tính riêng');setText('standard-compact',compact(vehicle.standard));setText('pro-compact',compact(vehicle.pro));setText('vehicle-short-suffix','/ '+vehicle.short);
      setText('package-eyebrow',pkg.eyebrow);setText('package-name',pkg.name);setText('package-short',pkg.short);setText('selected-price',money(price));setText('selected-compact',compact(price));setText('vehicle-label',vehicle.label);setText('vehicle-short',vehicle.short);setText('windshield',pkg.windshield);setText('reason',recommendation(pkgKey));setText('code',code);
      document.getElementById('form-config-code').value=code;document.getElementById('form-vehicle-group').value=state.vehicle;document.getElementById('form-panorama').value=state.panorama?'yes':'no';document.getElementById('form-offer-price').value=price;
      var formPackage=document.getElementById('form-package');if(formPackage){Array.from(formPackage.options).forEach(function(option){option.selected=option.textContent===(pkgKey==='pro'?'3M Crystalline CR BLK PRO':'3M Crystalline CR BLK')});}
      var formPriority=document.getElementById('form-priority');if(formPriority){var priorityLabels={visibility:'Ưu tiên tầm nhìn an toàn',balanced:'Cân bằng ngân sách và hiệu quả',privacy:'Tăng riêng tư khoang sau'};Array.from(formPriority.options).forEach(function(option){option.selected=option.textContent===priorityLabels[state.priority]});}
      document.getElementById('panoramaRow').hidden=!state.panorama;document.querySelectorAll('.mobile-choice').forEach(function(select){select.value=select.dataset.mobile==='vehicle'?state.vehicle:select.dataset.mobile==='drive'?state.drive:select.dataset.mobile==='priority'?state.priority:(state.panorama?'yes':'no')});
      document.getElementById('packageStandard').classList.toggle('selected',pkgKey==='standard');document.getElementById('packagePro').classList.toggle('selected',pkgKey==='pro');
      document.querySelector('[data-badge="standard"]').hidden=pkgKey!=='standard';document.querySelector('[data-badge="pro"]').hidden=pkgKey!=='pro';document.querySelector('[data-popular]').hidden=pkgKey==='pro';
      var reset=document.getElementById('resetRecommendation');reset.style.display=(state.manualPackage&&state.manualPackage!==autoPackage())?'block':'none';
    }
    function chooseVehicle(value,source,manualPackage){state.vehicle=value;state.manualPackage=manualPackage||null;track('select_vehicle_type',{vehicle_type:value,source:source||'selector'});render()}
    document.querySelectorAll('.js-vehicle').forEach(function(button){button.addEventListener('click',function(){chooseVehicle(button.dataset.vehicle,'inline')})});
    document.querySelectorAll('.js-drive').forEach(function(button){button.addEventListener('click',function(){state.drive=button.dataset.drive;state.manualPackage=null;track('selector_answer',{step:'driving',answer:state.drive});render()})});
    document.querySelectorAll('.js-priority').forEach(function(button){button.addEventListener('click',function(){state.priority=button.dataset.priority;state.manualPackage=null;track('selector_answer',{step:'priority',answer:state.priority});render()})});
    document.querySelectorAll('.js-panorama').forEach(function(button){button.addEventListener('click',function(){state.panorama=button.dataset.panorama==='yes';track('selector_answer',{step:'panorama',answer:state.panorama?'yes':'no'});render()})});
    document.querySelectorAll('.mobile-choice').forEach(function(select){select.addEventListener('change',function(){if(select.dataset.mobile==='vehicle'){chooseVehicle(select.value,'mobile_select')}else if(select.dataset.mobile==='drive'){state.drive=select.value;state.manualPackage=null;track('selector_answer',{step:'driving',answer:state.drive});render()}else if(select.dataset.mobile==='priority'){state.priority=select.value;state.manualPackage=null;track('selector_answer',{step:'priority',answer:state.priority});render()}else{state.panorama=select.value==='yes';track('selector_answer',{step:'panorama',answer:state.panorama?'yes':'no'});render()}})});
     document.querySelectorAll('.js-package').forEach(function(button){button.addEventListener('click',function(event){event.stopPropagation();state.manualPackage=button.dataset.package;var v=VEHICLES[state.vehicle];track('select_package',{package:state.manualPackage,vehicle_type:state.vehicle,offer_price:v[state.manualPackage]});render();openConsultModal(event)})});
    var consultForm=document.getElementById('consultForm'),lastModalTrigger=null;var closeModalButton=document.createElement('button');closeModalButton.type='button';closeModalButton.className='form-modal-close';closeModalButton.setAttribute('aria-label','Đóng form tư vấn');closeModalButton.textContent='×';consultForm.insertBefore(closeModalButton,consultForm.firstChild);function openConsultModal(event){var trigger=event&&event.currentTarget||document.activeElement;if(trigger&&trigger.matches&&trigger.matches('[data-price-card]'))trigger=trigger.querySelector('.js-price-select')||trigger;lastModalTrigger=trigger;document.body.classList.add('form-modal-open');consultForm.setAttribute('aria-modal','true');document.getElementById('form-name').focus()}function closeConsultModal(){document.body.classList.remove('form-modal-open');consultForm.setAttribute('aria-modal','false');if(lastModalTrigger&&typeof lastModalTrigger.focus==='function')lastModalTrigger.focus()}function modalFocusables(){return Array.from(consultForm.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled])')).filter(function(node){return node.offsetParent!==null})}closeModalButton.addEventListener('click',closeConsultModal);document.querySelectorAll('.js-open-consult').forEach(function(button){button.addEventListener('click',openConsultModal)});document.querySelectorAll('.js-price-select').forEach(function(button){button.addEventListener('click',function(event){event.stopPropagation();chooseVehicle(button.dataset.vehicle,'price_card','pro');openConsultModal(event)})});document.querySelectorAll('[data-price-card]').forEach(function(card){card.addEventListener('click',function(event){if(event.target.closest&&event.target.closest('button,a,input,select,textarea'))return;chooseVehicle(card.dataset.priceCard,'price_card','pro');openConsultModal({currentTarget:card})})});document.addEventListener('mousedown',function(event){if(document.body.classList.contains('form-modal-open')&&!consultForm.contains(event.target))closeConsultModal()});document.addEventListener('keydown',function(event){if(!document.body.classList.contains('form-modal-open'))return;if(event.key==='Escape'){closeConsultModal();return}if(event.key==='Tab'){var nodes=modalFocusables(),first=nodes[0],last=nodes[nodes.length-1];if(!first)return;if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}});
    document.querySelectorAll('.js-selector-start').forEach(function(link){link.addEventListener('click',function(){track('selector_start',{source:link.dataset.source||'inline',vehicle_type:state.vehicle})})});
    document.getElementById('heroStart').addEventListener('click',function(){track('selector_start',{source:'hero',vehicle_type:state.vehicle});document.getElementById('selector').scrollIntoView({behavior:'smooth',block:'start'})});
    document.getElementById('resetRecommendation').addEventListener('click',function(){state.manualPackage=null;render()});
     var copyConfig=document.getElementById('copyConfig');if(copyConfig){copyConfig.addEventListener('click',function(){var code=document.querySelector('[data-bind="code"]').textContent;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(code)}})};
     var form=consultForm;
     form.addEventListener('submit',function(event){event.preventDefault();event.stopImmediatePropagation();var status=document.getElementById('consultStatus'),submit=form.querySelector('button[type="submit"]'),cooldownKey='cr_blk_pro_last_submit',previous=0;try{previous=Number(localStorage.getItem(cooldownKey)||0)}catch(error){track('lead_storage_unavailable',{operation:'read'})}var wait=60000-(Date.now()-previous);if(wait>0){status.textContent='Bạn vừa gửi thông tin. Vui lòng đợi '+Math.ceil(wait/1000)+' giây trước khi gửi lại.';return}if(document.getElementById('form-honey').value||!form.reportValidity())return;var phone=form.elements.phone.value.trim();if(!/^(?:\+84|0)(?:\d[ .-]?){8,10}\d$/.test(phone)){status.textContent='Vui lòng nhập số điện thoại Việt Nam hợp lệ.';form.elements.phone.focus();return}document.getElementById('form-consent-at').value=new Date().toISOString();var body=new FormData(form);body.set('phone',phone);body.append('service','Phim cách nhiệt 3M Crystalline CR BLK Pro');body.append('source_page','Landing 3M CR BLK Pro');body.append('source_url',window.location.href);body.append('referrer',document.referrer||'');var query=new URLSearchParams(window.location.search);['utm_source','utm_medium','utm_campaign','utm_term','utm_content'].forEach(function(key){body.append(key,query.get(key)||'')});var submittedPackage=form.elements.package.value,submittedVehicle=state.vehicle;submit.disabled=true;submit.textContent='Đang gửi...';status.textContent='';fetch(form.action,{method:'POST',body:body,credentials:'same-origin'}).then(function(response){return response.json().then(function(result){return {ok:response.ok,result:result}})}).then(function(payload){if(payload.ok&&payload.result&&payload.result.success===true){try{localStorage.setItem(cooldownKey,String(Date.now()))}catch(error){track('lead_storage_unavailable',{operation:'write'})}status.textContent='Gửi thông tin tư vấn thành công. Auto365 sẽ liên hệ với bạn sớm nhất.';form.reset();render();track('lead_form_submit',{form_source:'landing-3m-cr-blk-pro',service:'Phim cách nhiệt 3M Crystalline CR BLK Pro',package_name:submittedPackage,vehicle_type:submittedVehicle})}else{status.textContent=payload.result&&payload.result.message||'Gửi thông tin chưa thành công. Vui lòng gọi 0365 365 365 hoặc nhắn Zalo Auto365.'}}).catch(function(){status.textContent='Không thể gửi lúc này. Vui lòng gọi 0365 365 365 hoặc nhắn Zalo Auto365.'}).finally(function(){submit.disabled=false;submit.textContent='Gửi thông tin tư vấn'})},true);
    document.querySelectorAll('.js-contact').forEach(function(link){link.addEventListener('click',function(){var pkg=selectedPackage(),price=VEHICLES[state.vehicle][pkg],code=(pkg==='pro'?'CRP':'CRS')+'-'+state.vehicle.toUpperCase()+'-'+(pkg==='pro'?'40-35-15':'50/60-35-15');track('contact_click',{channel:link.dataset.channel,placement:link.dataset.placement,package:pkg,vehicle_type:state.vehicle,offer_price:price,config_code:code})})});
    document.querySelectorAll('.js-contact[data-channel="zalo"]').forEach(function(link){link.addEventListener('click',function(){var pkg=selectedPackage(),price=VEHICLES[state.vehicle][pkg],code=(pkg==='pro'?'CRP':'CRS')+'-'+state.vehicle.toUpperCase()+'-'+(pkg==='pro'?'40-35-15':'50/60-35-15'),message='Xin chào Auto365, tôi muốn tư vấn cấu hình phim 3M CR BLK.\nMã cấu hình: '+code+'\nNhóm xe: '+VEHICLES[state.vehicle].label+'\nGói: '+PACKAGES[pkg].name+'\nGiá tham khảo: '+money(price)+'\nPanorama: '+(state.panorama?'Có / chưa chắc':'Không');if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(message)}})});
    document.querySelectorAll('.case-filter').forEach(function(filter){filter.addEventListener('click',function(){document.querySelectorAll('.case-filter').forEach(function(item){item.classList.toggle('active',item===filter);item.setAttribute('aria-pressed',String(item===filter))});var brand=filter.dataset.brand;document.querySelectorAll('.case-card').forEach(function(card){var car=(card.querySelector('[data-car]')||{}).dataset?.car||'';card.hidden=brand!=='all'&&car.indexOf(brand)===-1})})});
    document.querySelectorAll('.case-filter').forEach(function(filter){filter.addEventListener('click',function(){var count=Array.from(document.querySelectorAll('.case-card')).filter(function(card){return !card.hidden}).length;document.getElementById('caseFilterStatus').textContent='Đang hiển thị '+count+' xe '+(filter.dataset.brand==='all'?'trong tất cả case':'thuộc hãng '+filter.dataset.brand)+'.';})});
    document.querySelectorAll('.js-case').forEach(function(link){link.addEventListener('click',function(){track('case_click',{car_model:link.dataset.car})})});
    document.querySelectorAll('.six-package-card .text-link').forEach(function(link){link.addEventListener('click',function(){var card=link.closest('.six-package-card'),name=card.querySelector('h3').textContent,select=document.querySelector('#consultForm select[name="package"]');if(select){Array.from(select.options).forEach(function(option){option.selected=option.textContent===name});}track('package_interest',{package_name:name});})});

    render();
  }());

;

/* Source block 2 */
(function(){
  var previewForm=document.getElementById('consultForm');
  if(previewForm && /preview-365group\.pages\.dev$/.test(location.hostname)){
    previewForm.addEventListener('submit',function(event){
      event.preventDefault();
      event.stopImmediatePropagation();
      var status=document.getElementById('consultStatus');
      if(status) status.textContent='Bản preview chưa kết nối CRM thật. Form sẽ gửi dữ liệu khi được triển khai trên auto365.vn.';
    },true);
  }
})();

;

/* Source block 3 */
(function(){
  var dialog=document.getElementById('consultForm');
  if(!dialog)return;
  new MutationObserver(function(){dialog.setAttribute('aria-modal',document.body.classList.contains('form-modal-open')?'true':'false');}).observe(document.body,{attributes:true,attributeFilter:['class']});
}());

;

/* Source block 4 */
document.querySelectorAll('.js-price-select').forEach(function(button){button.addEventListener('click',function(event){event.stopPropagation();});});

;

