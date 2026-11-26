(function(){
 // Giá trọn xe (triệu đ) theo bảng giá 3M 06/2026: [Minicar, Sedan, SUV]
 var PK=[
  {id:'cr-blk-pro',u:'https://auto365.vn/phim-cach-nhiet-o-to-3m-crystalline-cr-blk-pro',n:'CR BLK PRO',c:'Lái CR BLK 40 · Sườn/sau CR BLK 35/15',t:['Kính lái CR BLK 40','Ceramic','Giảm chói'],p:[12.9,15.5,18.3],b:'Cao cấp',s:['CR BLK 40','58%','41%','98%']},
  {id:'cr-blk',u:'https://auto365.vn/phim-cach-nhiet-o-to-3m-crystalline-cr-blk',n:'CR BLK',c:'Lái CR BLK 60/50 · Sườn/sau CR BLK 35/15',t:['Cách nhiệt cao','Ceramic','Tầm nhìn rõ'],p:[12.2,14.8,17.6],s:['CR BLK 60 / 50','54 / 56%','57 / 48%','97 / 98%']},
  {id:'crystalline-hybrid-pro',u:'https://auto365.vn/phim-cach-nhiet-o-to-3m-crystalline-hybrid-pro',n:'Crystalline Hybrid Pro',c:'Lái CR BLK 40 · Sườn/sau NR 25/15/5',t:['Trong suốt','Giảm chói','Cách nhiệt tốt'],p:[9.8,11.6,13.3],s:['CR BLK 40','58%','41%','98%']},
  {id:'crystalline-hybrid',u:'https://auto365.vn/phim-cach-nhiet-o-to-3m-crystalline-hybrid',n:'Crystalline Hybrid',c:'Lái CR BLK 60/50 · Sườn/sau NR 25/15/5',t:['Trong suốt','Giảm chói','Tầm nhìn rõ'],p:[9.0,10.8,12.5],b:'Cân bằng',s:['CR BLK 60 / 50','54 / 56%','57 / 48%','97 / 98%']},
  {id:'ceramic-ir',u:'https://auto365.vn/phim-cach-nhiet-o-to-3m-ceramic-ir',n:'Ceramic IR',c:'Lái IR 50 · Sườn/sau IR 25/15',t:['Cản hồng ngoại','Ceramic','Cân bằng chi phí'],p:[7.2,9.0,10.5],s:['IR 50','54%','50%','83%']},
  {id:'ceramic-hybrid',u:'https://auto365.vn/phim-cach-nhiet-o-to-3m-ceramic-hybrid',n:'Ceramic Hybrid',c:'Lái NR 35 · Sườn/sau NR 25/15/5',t:['Lai ceramic + reflective','Chi phí tốt','Ngân sách vừa'],p:[5.9,7.9,9.5],s:['NR 35','51%','43%','79%']}
 ];
 function vnd(m){return Math.round(m*1e6).toLocaleString('vi-VN')+'đ'}
 var grid=document.getElementById('h3m-pk'),qs=document.getElementById('q-pk'),fs=document.getElementById('f-pk');
 var MQD=!matchMedia('(max-width:760px)').matches;
 PK.sort(function(a,b){return a.p[0]-b.p[0]||a.p[1]-b.p[1]});
 PK.forEach(function(k){
  grid.insertAdjacentHTML('beforeend','<article class="h3m-card" data-id="'+k.id+'"><div class="h3m-card__img"><img src="https://auto365.vn/uploads/images/landing/phim-3m-tphcm/goi/'+k.id+'.webp?v=2" alt="Xe dán phim cách nhiệt 3M '+k.n+' tại 3M Pro Shop" width="960" height="640" loading="lazy"><span class="h3m-card__from">Minicar từ <b>'+String(k.p[0]).replace('.',',')+' triệu</b></span></div>'+
   '<h3><b>3M</b> '+k.n+'</h3><p class="h3m-card__combo">'+k.c+'</p>'+
   '<details class="h3m-card__more" open><summary>Giá theo nhóm xe</summary><div class="h3m-card__price"><div class="h3m-card__ph">Giá trọn xe (đã gồm VAT)</div><table><tr tabindex="0" role="button" data-g="0" aria-label="Xem giá nhóm Minicar"><td>Minicar</td><td>'+vnd(k.p[0])+'</td></tr><tr tabindex="0" role="button" data-g="1" aria-label="Xem giá nhóm Sedan"><td>Sedan</td><td>'+vnd(k.p[1])+'</td></tr><tr tabindex="0" role="button" data-g="2" aria-label="Xem giá nhóm SUV / MPV"><td>SUV / MPV</td><td>'+vnd(k.p[2])+'</td></tr></table></div></details>'+
   
   '<div class="h3m-card__act"><button type="button" class="h3m-card__lead h3m-card__cta" data-open-lead data-pk="'+k.n+'" aria-label="Nhận báo giá gói 3M '+k.n+'">Nhận báo giá gói này</button></div><a class="h3m-card__det" href="'+k.u+'" target="_blank" rel="noopener" data-track="detail_pk" aria-label="Xem chi tiết dòng phim 3M '+k.n+'">Xem chi tiết dòng phim →</a></article>');
  qs.add(new Option('3M '+k.n,k.id));fs.add(new Option('3M '+k.n,'3M '+k.n));if(k===PK[PK.length-1]){fs.add(new Option('Dán lẻ từng vị trí','Dán lẻ từng vị trí'));fs.add(new Option('Chưa biết chọn gói – nhờ tư vấn theo xe','Chưa biết chọn gói – nhờ tư vấn theo xe'))}
 });
 qs.value='crystalline-hybrid';
 var GN=['Minicar','Sedan','SUV/MPV'],MOB0=matchMedia('(max-width:640px)').matches;
 
 // Lựa chọn của khách (gói + nhóm xe) dùng chung cho thẻ gói, bộ tra, popup và form cuối
 var SEL={pk:'',gr:''},qc=document.getElementById('q-car'),qo=document.getElementById('q-out'),fvg=document.getElementById('dang-ky').vehicle_group;
 function pkName(id){var k=PK.filter(function(x){return x.id===id})[0];return k?'3M '+k.n:''}
 function syncForms(){fs.value=SEL.pk;fvg.value=SEL.gr}
 function setSel(pk,gr){SEL.pk=pk||'';SEL.gr=gr||'';syncForms();var sk=PK.filter(function(x){return '3M '+x.n===SEL.pk})[0];if(sk)qs.value=sk.id;var sg=GN.indexOf(SEL.gr);qc.value=sg>-1?String(sg):'';renderCards();if(window.gbReady)syncTabs();if(qo.classList.contains('is-on')&&sk)qo.innerHTML=sg>-1?'<b>3M '+sk.n+'</b> – '+GN[sg]+': <b style="color:var(--r)">'+vnd(sk.p[sg])+'</b> trọn xe. <button type="button" class="h3m-linkbtn" data-open-lead data-pk="'+sk.n+'" data-group="'+GN[sg]+'">Nhận báo giá &amp; đặt lịch →</button>':'Chọn nhóm xe để xem giá trọn xe.';if(window.mf){mf.package_name.value=SEL.pk;mf.vehicle_group.value=SEL.gr}renderSum()}
 function renderSum(){if(!window.mpk)return;var k=PK.filter(function(x){return '3M '+x.n===SEL.pk})[0],g=GN.indexOf(SEL.gr);
  var pr=window.mf&&mf.priority?mf.priority.value:'',it=pr&&pr!=='Chưa chắc, cần tư vấn'?pr:'';mpk.hidden=!SEL.pk&&!SEL.gr&&!it;mpk.innerHTML=(SEL.pk?'Gói đã chọn: <b>'+SEL.pk+'</b>':(it?'Nhu cầu: <b>'+it+'</b>':'Gói: <b>chưa chọn</b>'))+' · '+(SEL.gr?SEL.gr:'nhóm xe chưa chọn')+(k&&g>-1?' · <b>'+vnd(k.p[g])+'</b>':'')}
 function renderCards(){var g=qc.value===''?-1:+qc.value;
  document.querySelectorAll('.h3m-card').forEach(function(c){var k=PK.filter(function(x){return x.id===c.dataset.id})[0];
   c.querySelectorAll('.h3m-card__price tr').forEach(function(r,i){r.classList.toggle('is-on',i===g)});
   var fr=c.querySelector('.h3m-card__from'),gi=g<0?0:g;if(fr)fr.innerHTML=(g<0?'Minicar từ':GN[g])+' <b>'+String(k.p[gi]).replace('.',',')+' triệu</b>';var b=c.querySelector('.h3m-card__lead');var lp=b.querySelector('.h3m-card__lp');if(lp)lp.innerHTML='<small>'+(g<0?'Minicar từ':GN[g])+'</small><b>'+vnd(k.p[gi])+'</b>';if(g<0)delete b.dataset.group;else b.dataset.group=GN[g];})}
 function renderQuote(){var k=PK.filter(function(x){return x.id===qs.value})[0];
  if(qc.value===''){setSel('3M '+k.n,'');qo.innerHTML='Chọn nhóm xe để xem giá trọn xe.';qo.classList.add('is-on');return}
  var g=+qc.value;setSel('3M '+k.n,GN[g]);
  qo.innerHTML='<b>3M '+k.n+'</b> – '+GN[g]+': <b style="color:var(--r)">'+vnd(k.p[g])+'</b> trọn xe. <button type="button" class="h3m-linkbtn" data-open-lead data-pk="'+k.n+'" data-group="'+GN[g]+'">Nhận báo giá &amp; đặt lịch →</button>';
  qo.classList.add('is-on')}
 qc.addEventListener('change',function(){setSel(SEL.pk,qc.value===''?'':GN[+qc.value]);if(qo.classList.contains('is-on'))renderQuote()});
 qs.addEventListener('change',function(){if(qo.classList.contains('is-on'))renderQuote()});
 var gb=[].slice.call(document.querySelectorAll('.h3m-grp button'));
 function syncTabs(){gb.forEach(function(b){var on=b.dataset.g===qc.value;b.classList.toggle('is-on',on);b.setAttribute('aria-pressed',on)})}
 gb.forEach(function(b){b.addEventListener('click',function(){qc.value=qc.value===b.dataset.g?'':b.dataset.g;qc.dispatchEvent(new Event('change'))})});
 qc.addEventListener('change',syncTabs);function pickRow(e){var r=e.target.closest('.h3m-card__price tr[data-g]');if(!r)return;if(e.type==='keydown'){if(e.key!=='Enter'&&e.key!==' ')return;e.preventDefault()}qc.value=r.dataset.g;qc.dispatchEvent(new Event('change'))}var pkEl=document.getElementById('h3m-pk');pkEl.addEventListener('click',pickRow);pkEl.addEventListener('click',function(e){if(e.target.closest('a,.h3m-card__lead'))return;var c=e.target.closest('.h3m-card');if(c)c.querySelector('.h3m-card__lead').click()});pkEl.addEventListener('keydown',pickRow);window.gbReady=1;
 renderCards();
 if(MOB0){var tr=document.querySelector('.h3m-hero .h3m-trust'),qw=document.querySelector('.h3m-quick');if(tr&&qw){tr.classList.add('h3m-trust--light');qw.insertAdjacentElement('afterend',tr)}}

 // Xe thực tế: lọc dòng phim + hãng, hiện 12 xe/lần
 var MOB=matchMedia('(max-width:640px)').matches,STEP=MOB?6:8,cf={loai:'',brand:''},shown=STEP,cards=[].slice.call(document.querySelectorAll('.h3m-case')),cnt=document.querySelector('.h3m-cfx__count'),moreC=document.querySelector('[data-more=cases]');
 function applyCases(){var m=cards.filter(function(c){return (!cf.loai||c.dataset.loai.split('|').indexOf(cf.loai)>-1)&&(!cf.brand||c.dataset.brand===cf.brand)});
  var gEl=cards[0].parentNode,cols=getComputedStyle(gEl).gridTemplateColumns.split(' ').length||1,lim=Math.ceil(shown/cols)*cols;
  cards.forEach(function(c){c.hidden=true});m.forEach(function(c,i){c.hidden=i>=lim});
  cnt.textContent='';cnt.hidden=true;moreC.hidden=m.length<=lim}
 document.querySelectorAll('.h3m-cfx__chips').forEach(function(g){g.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
  if(b.hasAttribute('data-plus')){g.querySelectorAll('.is-x').forEach(function(x){x.hidden=false});b.hidden=true;return}
  g.querySelectorAll('button').forEach(function(x){x.classList.toggle('is-on',x===b)});cf[g.dataset.f]=b.dataset.v;shown=STEP;applyCases()})});
 moreC.addEventListener('click',function(){shown+=STEP;applyCases()});applyCases();
 var rzT,rzW=innerWidth;addEventListener('resize',function(){clearTimeout(rzT);rzT=setTimeout(function(){if(innerWidth===rzW)return;rzW=innerWidth;var st=matchMedia('(max-width:640px)').matches?6:12;shown=Math.max(st,Math.ceil(shown/STEP)*st);STEP=st;applyCases()},150)});


 // Lead form: chỉ báo thành công khi API trả {"success": true}
 function bindLead(f){
  var msg=f.querySelector('.h3m-msg');
  function show(t,ok){msg.textContent=t;msg.className='h3m-msg '+(ok?'ok':'err')}
  f.addEventListener('submit',function(e){
   e.preventDefault();
   var name=f.fullname.value.trim(),phone=f.phone.value.replace(/[\s.\-]/g,'');
   if(!name)return show('Vui lòng nhập họ tên.');
   if(!/^0(3|5|7|8|9)\d{8}$/.test(phone))return show('Số điện thoại chưa đúng (vd: 0365 365 365).');
   if(!f.consent.checked)return show('Vui lòng xác nhận đồng ý để Auto365 liên hệ.');
   var d=new FormData(f),q=new URLSearchParams(location.search);
   d.set('phone',phone);d.set('service','Phim cách nhiệt 3M');d.set('province',d.get('province')||'TP.HCM');
   d.set('source_page','Landing 3M HCM'+(f.dataset.lead?' – '+f.dataset.lead:''));d.set('source_url',location.href);d.set('referrer',document.referrer||'');
   ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid'].forEach(function(k){d.set(k,q.get(k)||'')});
   var trackedPackage=String(d.get('package_name')||''),trackedGroup=String(d.get('vehicle_group')||'');
   var btn=f.querySelector('button[type=submit]');btn.disabled=true;
   fetch(f.action,{method:'POST',body:d}).then(function(r){return r.json()}).then(function(j){
    if(j&&j.success===true){show('Đã nhận thông tin'+(trackedPackage||trackedGroup?' ('+[trackedPackage,trackedGroup].filter(Boolean).join(' · ')+')':'')+'. Cố vấn Auto365.vn – Trụ Sở Chính – 3M Pro Shop sẽ gọi lại trong giờ làm việc 8:30–18:30 để xác nhận báo giá và lịch thi công. Cần gấp: gọi 0365 365 365 hoặc nhắn Zalo.',true);if(window.gtag)gtag('event','generate_lead',{form_id:'landing_3m_hcm_'+(f.dataset.lead||'main'),package_name:trackedPackage,vehicle_group:trackedGroup});f.reset()}
    else throw 0;
   }).catch(function(){show('Chưa gửi được. Vui lòng gọi 0365 365 365 hoặc nhắn Zalo.')}).then(function(){btn.disabled=false});
  });
 }
 bindLead(document.getElementById('dang-ky'));
 var dlg=document.getElementById('h3m-modal');window.mf=dlg.querySelector('form');window.mpk=document.getElementById('h3m-modal-pk');
 bindLead(mf);
 fs.addEventListener('change',function(){setSel(fs.value,SEL.gr)});fvg.addEventListener('change',function(){setSel(SEL.pk,fvg.value)});
 mf.package_name.addEventListener('change',function(){setSel(mf.package_name.value,SEL.gr)});mf.vehicle_group.addEventListener('change',function(){setSel(SEL.pk,mf.vehicle_group.value)});
 document.addEventListener('click',function(e){
  var o=e.target.closest('[data-open-lead]');
  if(!o&&!e.target.closest('a,button,input,select,textarea,summary,details')){var c=e.target.closest('.h3m-card');if(c)o=c.querySelector('[data-open-lead]')}if(!o||!dlg.showModal)return;e.preventDefault();
  var intent=o.dataset.priority||'';var pk=intent?'':(o.dataset.pkfull||(o.dataset.pk?'3M '+o.dataset.pk:SEL.pk)),gr=o.dataset.group||SEL.gr;
  setSel(pk,gr);if(intent&&mf.priority){mf.priority.value=intent;renderSum()}
  var m=mf.querySelector('.h3m-msg');m.className='h3m-msg';m.textContent='';
  if(dlg.showModal)dlg.showModal();else location.hash='dang-ky';
  if(window.gtag)gtag('event','open_lead_popup',{package_name:pk});
  setTimeout(function(){mf.fullname.focus()},50);
 });
 if(mf.priority)mf.priority.addEventListener('change',renderSum);
 dlg.addEventListener('click',function(e){if(e.target===dlg||e.target.closest('[data-close]'))dlg.close()});
})();
 document.addEventListener('click',function(e){var a=e.target.closest('a[href^="tel:"],a[href*="zalo.me"]');if(a&&window.gtag)gtag('event',a.href.indexOf('tel:')===0?'click_call':'click_zalo',{link_url:a.href})});

(function(){var el=document.querySelector(".h3m-shots"),hero=document.querySelector(".h3m-hero"),gp=document.getElementById("goi-phim");if(!el||!hero||!gp)return;function fit(){el.style.marginBottom="0px";gp.style.removeProperty("padding-top");var h=el.offsetHeight,eb=el.getBoundingClientRect().bottom,hb=hero.getBoundingClientRect().bottom,gap=hb-eb,ov=Math.round(h*0.7);el.style.marginBottom=(-(ov+gap))+"px";gp.style.setProperty("padding-top",(ov+(innerWidth>640?36:24))+"px","important")}fit();addEventListener("resize",fit);addEventListener("load",fit)})();