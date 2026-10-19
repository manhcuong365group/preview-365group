const form=document.getElementById('fitForm'),out=document.getElementById('fitResult');
form?.addEventListener('submit',e=>{e.preventDefault();
const show=(ok,msg)=>{out.textContent=msg;out.classList.add('show');out.classList.toggle('is-error',!ok)};
const ph=form.elements.phone;const phone=(ph.value||'').replace(/[^\d+]/g,'');ph.removeAttribute('aria-invalid');
if(!form.elements.full_name.value.trim()){form.elements.full_name.focus();return show(false,'Vui lòng nhập họ tên.');}
if(!/^(0|\+?84)[35789]\d{8}$/.test(phone)){ph.setAttribute('aria-invalid','true');ph.focus();return show(false,'Số điện thoại chưa đúng, ví dụ 0365 365 911.');}
if(!form.elements.car_brand.value){form.elements.car_brand.focus();return show(false,'Vui lòng chọn hãng xe.');}
if(!form.elements.privacy_consent.checked){return show(false,'Vui lòng đồng ý Chính sách bảo mật để gửi yêu cầu.');}
const data=new FormData(form);data.set('phone',phone);data.set('service',form.dataset.service||'');data.set('source_page',form.dataset.sourcePage||'');data.set('source_url',location.href.split('?')[0]);data.set('referrer',document.referrer||'');
const note=['Đời xe: '+(data.get('car_year')||'-'),'Cấu hình đèn: '+(data.get('lamp_config')||'-'),'Chân bóng: '+(data.get('bulb_base')||'-')].join(' | ');data.set('note',note);
const qs=new URLSearchParams(location.search);['utm_source','utm_medium','utm_campaign','utm_term','utm_content'].forEach(k=>{if(qs.get(k))data.set(k,qs.get(k))});
const btn=form.querySelector('button[type=submit]');const old=btn.textContent;btn.disabled=true;btn.textContent='Đang gửi…';
fetch(form.action,{method:'POST',body:data,headers:{Accept:'application/json'}}).then(r=>r.json().catch(()=>null)).then(r=>{if(!r||r.success!==true||!r.lead_id)throw new Error('unconfirmed');form.reset();show(true,'Đã nhận yêu cầu. Auto365 sẽ gọi lại theo số bạn vừa để lại để kiểm tra xe.');window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'generate_lead',form_id:'v12-fitment',lead_id:String(r.lead_id)});})
.catch(()=>show(false,'Chưa gửi được. Vui lòng gọi 0365.365.911 hoặc thử lại.')).finally(()=>{btn.disabled=false;btn.textContent=old});});

(function(){
  var heroMain = document.getElementById('galleryMain');
  var sources = [];
  if(heroMain) sources.push({src:heroMain.src, srcset:heroMain.srcset, alt:heroMain.alt});
  ['x-light-v12-hyper-360-12-chip-led.webp','x-light-v12-hyper-360-tan-nhiet-ong-dong-quat.webp','x-light-v12-hyper-360-xoay-360.webp','x-light-v12-hyper-360-chan-den-h7-h11-9005.webp'].forEach(function(n){
    var img=document.querySelector('img[src$="'+n+'"]');
    if(img) sources.push({src:img.src, srcset:img.srcset, alt:img.alt});
  });
  document.querySelectorAll('.gallery-thumb-label').forEach(function(btn){
    btn.addEventListener('click', function(){
      var item = sources[Number(btn.dataset.index || 0)];
      if(!heroMain || !item) return;
      heroMain.srcset = item.srcset || ''; heroMain.src = item.src;
      heroMain.alt = item.alt || '';
      document.querySelectorAll('.gallery-thumb-label').forEach(function(b){ b.classList.remove('is-active'); });
      btn.classList.add('is-active');
    });
  });
})();

document.addEventListener('click',function(e){var b=e.target.closest('.yt-lite');if(!b||b.querySelector('iframe'))return;var f=document.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+b.dataset.yt+'?autoplay=1&rel=0';f.title=b.getAttribute('aria-label');f.allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';f.allowFullscreen=true;b.appendChild(f);});document.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.classList&&e.target.classList.contains('yt-lite')){e.preventDefault();e.target.click();}});
