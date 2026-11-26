// Dựng hub phim cách nhiệt 3M theo hãng từ khung trang VinFast.
// node scripts/build-film-brand-hubs.mjs [brand...]  (cần scratch cases.json: node scripts/build-film-brand-hubs.mjs --cases <file>)
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');
const BASE = path.join(ROOT, 'auto365/phim-cach-nhiet-o-to');
const TPL = fs.readFileSync(path.join(BASE, 'vinfast/index.html'), 'utf8').split('\r\n').join('\n');
// ảnh case: không dùng thumbnail bài (có chữ) — dùng ảnh thật trong bài nếu có, không thì ảnh mẫu xe
const REALIMG = { 'https://auto365.vn/mazda-cx5-dan-phim-cach-nhiet-3m-crystalline-pro-cho-full-xe': 'https://auto365.vn/uploads/images/tin%20t%E1%BB%A9c/2024/T9/mazda-cx5-dan-phim-cach-nhiet-3m-crystalline-pro-cho-full-xe/mazda-cx-5-dan-phim-cach-nhiet-3m-crystalline-pro-1.jpg' };
const IMGSRC = [path.join(ROOT, 'auto365/bi-gam/theo-hang-xe/hinh')];
const TODAY = '2026-11-26', TODAY_VN = '26/11/2026';
const casesArg = process.argv.indexOf('--cases');
const CASES = JSON.parse(fs.readFileSync(casesArg > 0 ? process.argv[casesArg + 1] : path.join(ROOT, 'docs/phim-cach-nhiet-hang-xe/cases.json'), 'utf8'));
const only = process.argv.slice(2).filter(a => !a.startsWith('--') && !a.endsWith('.json'));

// [tên hiển thị, mã, nhóm giá (1 Sedan, 2 SUV/MPV), loại tab, file ảnh, thư mục ảnh bi-gam nếu khác, từ khóa tìm trong tiêu đề case]
const T = { s: 'Sedan, hatchback', u: 'SUV, crossover', m: 'MPV', p: 'Bán tải' };
const BR = {
  toyota: { name: 'Toyota', def: 'Vios', video: [['WmsfmRIEB4g', 'Toyota Fortuner dán phim cách nhiệt 3M CR BLK: kết quả thực tế sau khi dán'], ['Qq_DXAv24qw', 'Review mã phim 3M Crystalline CR50 trên Toyota Camry']], dia: ['m-vios.webp', 'm-fortuner.webp'], diaP: [[[38,40],[48,40],[60,40],[52,33],[74,40]],[[36,40],[48,40],[64,40],[55,31],[85,42]]], cars: [
    ['Wigo', 'Wigo', 1, 's', 'm-wigo.webp'], ['Vios', 'Vios', 1, 's', 'm-vios.webp'], ['Camry', 'Camry', 1, 's', 'm-camry.webp'],
    ['Raize', 'Raize', 2, 'u', 'm-raize.webp'], ['Yaris Cross', 'YarisCross', 2, 'u', 'm-yaris-cross.webp'], ['Corolla Cross', 'CorollaCross', 2, 'u', 'm-corolla-cross.webp'],
    ['Fortuner', 'Fortuner', 2, 'u', 'm-fortuner.webp'], ['Land Cruiser Prado', 'Prado', 2, 'u', 'm-land-cruiser-prado.webp', null, ['Prado']], ['Land Cruiser', 'LC300', 2, 'u', 'm-land-cruiser-300.webp', null, ['Land Cruiser(?! Prado)']],
    ['Veloz Cross', 'Veloz', 2, 'm', 'm-veloz-cross.webp', null, ['Veloz']], ['Avanza Premio', 'Avanza', 2, 'm', 'm-avanza-premio.webp', null, ['Avanza']], ['Innova Cross', 'Innova', 2, 'm', 'm-innova-cross.webp', null, ['Innova']],
    ['Alphard', 'Alphard', 2, 'm', 'm-alphard.webp'], ['Hilux', 'Hilux', 2, 'p', 'm-hilux.webp']] },
  hyundai: { name: 'Hyundai', def: 'Accent', video: [], dia: ['m-accent.webp', 'm-santa-fe.webp'], diaP: [[[52,30],[73,31],[81,33],[57,24],[86,35]],[[44,34],[67,34],[80,33],[54,24],[89,34]]], cars: [
    ['Grand i10', 'i10', 1, 's', 'm-grand-i10.webp', null, ['i10']], ['Accent', 'Accent', 1, 's', 'm-accent.webp'], ['Elantra', 'Elantra', 1, 's', 'm-elantra.webp'],
    ['Venue', 'Venue', 2, 'u', 'm-venue.webp'], ['Creta', 'Creta', 2, 'u', 'm-creta.webp'], ['Tucson', 'Tucson', 2, 'u', 'm-tucson.webp'],
    ['Santa Fe', 'SantaFe', 2, 'u', 'm-santa-fe.webp', null, ['Santa ?Fe']], ['Palisade', 'Palisade', 2, 'u', 'm-palisade.webp'], ['Ioniq 5', 'Ioniq5', 2, 'u', 'm-ioniq-5.webp', null, ['Ioniq']],
    ['Stargazer', 'Stargazer', 2, 'm', 'm-stargazer.webp'], ['Custin', 'Custin', 2, 'm', 'm-custin.webp']] },
  mitsubishi: { name: 'Mitsubishi', def: 'Xpander', video: [], dia: ['m-attrage.webp', 'm-destinator.webp'], diaP: [[[36,40],[45,40],[61,40],[52,34],[71,40]],[[35,40],[46,40],[61,40],[57,30],[80,40]]], cars: [
    ['Mirage', 'Mirage', 1, 's', 'm-mirage.webp', 'bi-gam/mitsubishi/hinh'], ['Attrage', 'Attrage', 1, 's', 'm-attrage.webp'],
    ['Xforce', 'Xforce', 2, 'u', 'm-xforce.webp', 'bi-gam/mitsubishi/hinh', ['X-?FORCE']], ['Outlander', 'Outlander', 2, 'u', 'm-outlander.webp'], ['Pajero Sport', 'Pajero', 2, 'u', 'm-pajero-sport.webp', null, ['Pajero']],
    ['Destinator', 'Destinator', 2, 'u', 'm-destinator.webp'],
    ['Xpander', 'Xpander', 2, 'm', 'm-xpander.webp', 'bi-gam/mitsubishi/hinh', ['Xpander(?! Cross)']], ['Xpander Cross', 'XpanderCross', 2, 'm', 'm-xpander-cross.webp'],
    ['Triton', 'Triton', 2, 'p', 'm-triton.webp']] },
  ford: { name: 'Ford', def: 'Ranger', video: [['0c1xtO_Z5sA', 'Ford Everest dán phim 3M CR BLK: quy trình thay phim cách nhiệt']], dia: ['m-focus.webp', 'm-everest.webp'], diaP: [[[46,25],[70,27],[82,25],[59,18],[88,26]],[[49,33],[34,33],[26,33],[44,26],[21,35]]], cars: [
    ['Focus', 'Focus', 1, 's', 'm-focus.webp', 'bi-gam/ford/hinh'],
    ['Territory', 'Territory', 2, 'u', 'm-territory.webp'], ['Everest', 'Everest', 2, 'u', 'm-everest.webp'], ['Mustang Mach-E', 'MachE', 2, 'u', 'm-mustang-mach-e.webp', null, ['Mach']],
    ['Ranger', 'Ranger', 2, 'p', 'm-ranger.webp', null, ['Ranger(?! Raptor)']], ['Ranger Raptor', 'Raptor', 2, 'p', 'm-ranger-raptor.webp', null, ['Raptor']]] },
  kia: { name: 'Kia', def: 'Seltos', video: [['ihw76oM54fw', 'Hiệu quả phim 3M Crystalline Pro CR50 trên Kia Carnival']], dia: ['m-k3.webp', 'm-sorento.webp'], diaP: [[[46,36],[66,37],[75,38],[57,30],[82,39]],[[40,37],[61,37],[74,37],[54,27],[84,36]]], cars: [
    ['Morning', 'Morning', 1, 's', 'm-morning.webp'], ['Soluto', 'Soluto', 1, 's', 'm-soluto.webp'], ['K3', 'K3', 1, 's', 'm-k3.webp', null, ['K3\\b']], ['K5', 'K5', 1, 's', 'm-k5.webp', null, ['K5\\b']],
    ['Sonet', 'Sonet', 2, 'u', 'm-sonet.webp'], ['Seltos', 'Seltos', 2, 'u', 'm-seltos.webp'], ['Sportage', 'Sportage', 2, 'u', 'm-sportage.webp'], ['Sorento', 'Sorento', 2, 'u', 'm-sorento.webp'],
    ['Carens', 'Carens', 2, 'm', 'm-carens.webp'], ['Carnival', 'Carnival', 2, 'm', 'm-carnival.webp']] },
  mazda: { name: 'Mazda', def: 'CX5', video: [['vg4tiT4t8eE', 'Mazda CX-8 dán phim cách nhiệt 3M Crystalline CR BLK']], dia: ['m-mazda3.webp', 'm-cx-5.webp'], diaP: [[[41,43],[49,43],[61,43],[55,37],[72,44]],[[36,40],[45,40],[61,40],[54,33],[77,40]]], cars: [
    ['Mazda2', 'Mazda2', 1, 's', 'm-mazda-2.webp', 'bi-gam/mazda/hinh', ['Mazda ?2\\b']], ['Mazda3', 'Mazda3', 1, 's', 'm-mazda3.webp', null, ['Mazda ?3\\b(?! Sport)']], ['Mazda3 Sport', 'Mazda3S', 1, 's', 'm-mazda3-sport.webp', null, ['Mazda ?3 Sport']],
    ['Mazda6', 'Mazda6', 1, 's', 'm-mazda6.webp', null, ['Mazda ?6\\b']],
    ['CX-3', 'CX3', 2, 'u', 'm-cx-3.webp', 'bi-gam/mazda/hinh', ['CX-?3\\b']], ['CX-30', 'CX30', 2, 'u', 'm-cx-30.webp', 'bi-gam/mazda/hinh', ['CX-?30']], ['CX-5', 'CX5', 2, 'u', 'm-cx-5.webp', null, ['CX-?5\\b']],
    ['CX-8', 'CX8', 2, 'u', 'm-cx-8.webp', null, ['CX-?8\\b']], ['BT-50', 'BT50', 2, 'p', 'm-bt-50.webp', 'bi-gam/mazda/hinh', ['BT-?50']]] },
};

const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const dec = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#039;/g, "'");
const vnd = n => (n * 1e6).toLocaleString('de-DE') + 'đ';
function rep(h, a, b, all) { if (!h.includes(a)) throw new Error('Không thấy: ' + a.slice(0, 80)); return all ? h.split(a).join(b) : h.replace(a, () => b); }
function between(h, a, b, mid) { const i = h.indexOf(a), j = h.indexOf(b, i + a.length); if (i < 0 || j < 0) throw new Error('Không thấy khối: ' + a.slice(0, 60)); return h.slice(0, i + a.length) + mid + h.slice(j); }
function filmOf(t) {
  t = t.replace(/Palisade Hybrid/i, 'Palisade');
  if (/Ceramic NR/i.test(t)) return 'Ceramic NR'; if (/Ceramic IR|IR ?15/i.test(t) && !/CR BLK/i.test(t)) return 'Ceramic IR';
  if (/Hybrid Pro/i.test(t)) return 'Crystalline Hybrid Pro'; if (/Hybrid/i.test(t)) return 'Crystalline Hybrid';
  if (/CR BLK Pro/i.test(t)) return 'Crystalline CR BLK Pro'; if (/CR BLK|CR50|CR BLK 50/i.test(t)) return 'Crystalline CR BLK'; return '';
}
function kindOf(u, t) {
  const s = u.split('/').pop();
  if (/^phim-cach-nhiet-3m-/.test(s) || /palisade-hybrid-gia/.test(s)) return 'tv';
  if (/^(Tại sao|Có nên)/i.test(t)) return 'cn';
  if (/co-nen|nen-dan|co-bi-toi|gia-bao-nhieu$|dong-nao|tai-sao/.test(s) || /\?$/.test(t) && !/dán phim .*(CR BLK|Ceramic|Hybrid)/i.test(t)) return 'cn';
  return 'tt';
}

for (const [slug, B] of Object.entries(BR)) {
  if (only.length && !only.includes(slug)) continue;
  const N = B.name, out = path.join(BASE, slug), hm = path.join(out, 'hinh/m');
  fs.mkdirSync(hm, { recursive: true }); fs.mkdirSync(path.join(out, 'hinh/goi'), { recursive: true });
  for (const f of fs.readdirSync(path.join(BASE, 'vinfast/hinh'))) if (/^(cert-|ewarranty)/.test(f)) fs.copyFileSync(path.join(BASE, 'vinfast/hinh', f), path.join(out, 'hinh', f));
  for (const f of fs.readdirSync(path.join(BASE, 'vinfast/hinh/goi'))) fs.copyFileSync(path.join(BASE, 'vinfast/hinh/goi', f), path.join(out, 'hinh/goi', f));
  fs.copyFileSync(path.join(ROOT, 'auto365/phim-3m-hcm/hinh/logo', slug + '.webp'), path.join(out, 'hinh/logo.webp'));
  for (const c of B.cars) fs.copyFileSync(path.join(ROOT, c[5] ? 'auto365/' + c[5] : 'auto365/bi-gam/theo-hang-xe/hinh', c[4]), path.join(hm, c[4]));
  for (const d of B.dia) if (!fs.existsSync(path.join(hm, d))) throw new Error('Thiếu ảnh sơ đồ ' + d);

  // ---- case ----
  const rx = c => new RegExp('(' + (c[6] || [c[0].replace(/ /g, ' ?')]).join('|') + ')', 'i');
  const list = CASES.filter(o => new RegExp(slug, 'i').test(o.u)).map(o => {
    const t = dec(o.t).replace(/\s*\|\s*Auto365$/, ''), car = B.cars.find(c => rx(c).test(t) || rx(c).test(o.u.replace(/-/g, ' ')));
    return car && { u: o.u, t, img: o.img, d: o.d.slice(0, 10), car, k: kindOf(o.u, t), f: filmOf(t) };
  }).filter(Boolean).sort((a, b) => b.d.localeCompare(a.d));
  const KL = { tt: ['Xe thực tế', ''], tv: ['Tư vấn theo xe', ' vf-case__k--g'], cn: ['Cẩm nang', ' vf-case__k--g'] };
  const cardsHtml = list.map(o => {
    const loai = o.f || (o.k === 'tv' ? 'Phim 3M' : 'Phim 3M'), em = o.k === 'tv' && !o.f ? '6 gói phim 3M' : loai, dd = o.d.split('-').reverse().join('/');
    return `  <a class="vf-case" data-m="${o.car[1]}" data-loai="${loai}" href="${o.u}" target="_blank" rel="noopener"><span class="vf-case__img"><img src="${REALIMG[o.u] || 'hinh/m/' + o.car[4]}" alt="${esc(o.t)}" loading="lazy" width="800" height="450"><em>✓ ${em}</em></span><span class="vf-case__b"><span class="vf-case__k${KL[o.k][1]}">${KL[o.k][0]}</span><span class="vf-case__xe"><img src="hinh/logo.webp" alt="" width="40" height="20">${N} ${o.car[0]}</span><span class="vf-case__t">${esc(o.t)}</span><span class="vf-case__f"><time datetime="${o.d}">${dd}</time><strong>Xem chi tiết →</strong></span></span></a>\n`;
  }).join('');
  const caseCars = B.cars.filter(c => list.some(o => o.car === c));
  const loais = [...new Set(list.map(o => o.f || 'Phim 3M'))].sort();
  const TV = {}; for (const o of list.slice().reverse()) if (o.k === 'tv') TV[o.car[0]] = o.u;
  const hero = list.find(o => o.k === 'tt') || list[0];

  const sedan = B.cars.filter(c => c[2] === 1).map(c => c[0]), suv = B.cars.filter(c => c[2] === 2).map(c => c[0]);
  const lowP = sedan.length ? 7.9 : 9.5;
  const priceTxt = `Giá dán trọn xe theo bảng giá 3M: ${sedan.length ? `nhóm Sedan (${sedan.join(', ')}) từ 7.900.000đ, ` : ''}nhóm SUV/MPV (${suv.join(', ')}) từ 9.500.000đ, đã gồm VAT.`;
  const grpTxt = `${sedan.length ? 'Sedan: ' + sedan.join(', ') + ' · ' : ''}SUV/MPV: ${suv.join(', ')}.`;

  let h = TPL;
  // head + schema
  h = rep(h, 'Dán phim cách nhiệt 3M cho VinFast VF3–VF9 tại Auto365: giá trọn xe từ 5.900.000đ', `Dán phim cách nhiệt 3M cho ${N} ${B.cars.slice(0, 3).map(c => c[0]).join(', ')}… tại Auto365: giá trọn xe từ ${vnd(lowP)}`);
  h = rep(h, 'hinh/hero-vinfast.webp', hero.img, true);
  h = rep(h, 'https://preview-365group.pages.dev/phim-cach-nhiet-o-to/vinfast/' + hero.img, hero.img);
  h = rep(h, '"lowPrice":"5900000"', `"lowPrice":"${lowP * 1e6}"`);
  h = h.replace(/"dateModified":"[^"]*"/, `"dateModified":"${TODAY}"`).replace(/"lastReviewed":"[^"]*"/, `"lastReviewed":"${TODAY}"`).replace(/Cập nhật \d\d\/\d\d\/\d{4}/, 'Cập nhật ' + TODAY_VN);
  h = rep(h, 'Giá dán trọn xe theo bảng giá 3M: Minicar (VF 2, VF 3, Minio Green) từ 5.900.000đ, Sedan (Herio Green, Fadil, Lux A2.0) từ 7.900.000đ, SUV/MPV (VF 5, VF 6, VF 7, VF 8, VF 9, VF MPV 7, VF Wild, VF e34, Nerio Green, Limo Green, EC Van, Lux SA2.0, President) từ 9.500.000đ, đã gồm VAT.', priceTxt, true);
  h = rep(h, 'theo từng model VinFast', `theo từng dòng ${N}`, true);
  // hero
  h = rep(h, 'Chọn cấu hình phim 3M theo từng dòng VinFast từ VF3 đến VF9: giá trọn xe từ 5.900.000đ', `Chọn cấu hình phim 3M theo từng dòng ${N} từ ${B.cars[0][0]} đến ${B.cars[B.cars.length - 1][0]}: giá trọn xe từ ${vnd(lowP)}`);
  h = h.replace(/alt="VinFast VF 5 dán phim 3M Crystalline CR BLK 50 tại Auto365"/, `alt="${esc(hero.t)}"`);
  // bộ lọc dòng xe
  const tabs = Object.keys(T).filter(k => B.cars.some(c => c[3] === k));
  h = h.replace(/<div class="vf-tabs" role="tablist" aria-label="Lọc dòng xe">[\s\S]*?<\/div>/, `<div class="vf-tabs" role="tablist" aria-label="Lọc dòng xe"><button type="button" data-t="all" aria-pressed="true">Tất cả (${B.cars.length})</button>${tabs.map(k => `<button type="button" data-t="${k}" aria-pressed="false">${T[k]} (${B.cars.filter(c => c[3] === k).length})</button>`).join('')}</div>`);
  const tvList = B.cars.filter(c => TV[c[0]]);
  h = h.replace(/<p class="vf-mlinks">[\s\S]*?<\/p>/, tvList.length ? `<p class="vf-mlinks">Tư vấn phim 3M theo dòng xe: ${tvList.map(c => `<a href="${TV[c[0]]}" target="_blank" rel="noopener">${c[0]}</a>`).join(' · ')}</p>` : '');
  // JS data
  h = h.replace(/var cur=0,TV=\{[^}]*\};/, `var cur=0,TV=${JSON.stringify(TV).replace(/"/g, "'")};`);
  h = h.replace(/var CARS=\[[\s\S]*?\]\];/, 'var CARS=' + JSON.stringify(B.cars.map(c => c.slice(0, 5))).replace(/"/g, "'") + ';');
  h = rep(h, "(c[1]==='VF8')", `(c[1]==='${B.def}')`);
  h = rep(h, "(F.m?' '+F.m.replace('VF','VF '):'')", "(F.m?' '+((CARS.filter(function(c){return c[1]===F.m})[0]||[F.m])[0]):'')");
  h = h.replace(/var SR=\{[^}]*\};/, 'var SR={};').replace(/ *\/\/ Kính nóc theo tài liệu VinFast[^\n]*\n/, '');
  h = h.replace(/var DIMG=\[[^\]]*\];/, `var DIMG=['${B.dia[0]}','${B.dia[0]}','${B.dia[1]}'];`);
  h = h.replace(/var DIA=\[[^;]*\];/, `var DIA=[DIAP[0],DIAP[0],DIAP[1]];`);
  h = h.replace(/var DP=\{[\s\S]*?\]\]\},/, `var DP={},DIAP=${JSON.stringify(B.diaP || [[[35, 44], [48, 44], [66, 44], [62, 36], [80, 46]], [[33, 42], [55, 42], [72, 42], [65, 34], [90, 42]]])},`);
  h = h.replace(/NC\.VF5=NC\.VF5\|\|1;?/, '');
  // sơ đồ: ẩn tab Minicar
  h = rep(h, '<button type="button" data-d="0">Minicar</button>', '<button type="button" data-d="0" hidden>Minicar</button>');
  // bảng giá
  h = rep(h, 'Bảng giá trọn xe 6 gói phim 3M theo nhóm xe VinFast', 'Bảng giá trọn xe 6 gói phim 3M theo nhóm xe ' + N);
  h = rep(h, 'Minicar: VF 2, VF 3, Minio Green · Sedan: Herio Green, Fadil, Lux A2.0 · SUV/MPV: các dòng còn lại.', grpTxt);
  // case
  h = h.replace(/(<div class="vf-cx-chips" data-f="m">)[\s\S]*?(<\/div>)/, `$1<button type="button" data-v="" aria-pressed="true">Tất cả</button>${caseCars.map(c => `<button type="button" data-v="${c[1]}" aria-pressed="false">${c[0]}</button>`).join('')}$2`);
  h = h.replace(/(<div class="vf-cx-chips" data-f="loai">)[\s\S]*?(<\/div>)/, `$1<button type="button" data-v="" aria-pressed="true">Tất cả</button>${loais.map(l => `<button type="button" data-v="${l}" aria-pressed="false">${l}</button>`).join('')}$2`);
  h = between(h, '<div class="vf-cases" id="vf-cases">\n', ' <a class="vf-case-fill"', cardsHtml);
  // video
  const vids = [...B.video, ['N-hSgRJJkVg', 'So sánh 3 loại phim chống nóng 3M – tại sao giá khác nhau?'], ['vAU-r8cXXZA', 'Phim cách nhiệt 3M Ceramic NR – phản xạ nhiệt thế hệ mới']].slice(0, 3);
  h = h.replace(/<div class="vf-vids">[\s\S]*?<\/div>/, '<div class="vf-vids">\n' + vids.map(v => `  <button type="button" class="vf-vid" data-yt="${v[0]}"><img src="https://i.ytimg.com/vi/${v[0]}/hqdefault.jpg" alt="" loading="lazy"><span>▶</span><b>${v[1]}</b></button>`).join('\n') + '\n </div>');
  if (!B.video.length) h = rep(h, 'Video dán phim cách nhiệt VinFast tại Auto365', 'Video phim cách nhiệt 3M tại Auto365');
  h = rep(h, ' (VF7, VF8…)', '');
  h = rep(h, 'Cửa sổ trời panorama (như VF 8, VF 9) tính', 'Cửa sổ trời panorama tính');
  // bỏ khối prerender của VinFast (chạy lại scripts/prerender-vinfast-film.mjs <slug>)
  h = h.replace(/<!--pre-->[\s\S]*?<!--\/pre-->/g, '');
  // URL + tên hãng còn lại
  h = rep(h, 'phim-cach-nhiet-o-to/vinfast', 'phim-cach-nhiet-o-to/' + slug, true);
  h = h.replace(/landing_3m_vinfast/g, 'landing_3m_' + slug).replace(/VinFast/g, N);
  const left = h.match(/.{40}(vinfast|VF ?\d|Minio|Fadil|Lux A).{40}/gi);
  if (left) console.warn(slug, 'CÒN SÓT:', left.slice(0, 8));
  // bảng giá: bỏ cột Minicar (không có xe hãng này thuộc nhóm Minicar)
  { const a = h.indexOf('<th scope="col">Nhóm Minicar</th>'), e = h.indexOf('</table>', a);
    if (a > -1) h = h.slice(0, a) + h.slice(a, e).replace('<th scope="col">Nhóm Minicar</th>', '').replace(/(<tr><th scope="row">.*?<\/th><td>[^<]*<\/td>)<td>[^<]*<\/td>/g, '$1') + h.slice(e); }
  fs.writeFileSync(path.join(out, 'index.html'), h);
  console.log(slug, 'xe', B.cars.length, 'case', list.length, '(tt', list.filter(o => o.k === 'tt').length + ')', 'TV', Object.keys(TV).length);
}
