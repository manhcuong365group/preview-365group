// Dựng content-src + build/export script cho hub bi gầm hãng mới từ khung Peugeot/Chevrolet (24/11/2026).
// Dùng: node scripts/gen-bi-gam-brand.cjs nissan|land-rover|porsche
const fs = require('fs'); const P = 'https://auto365.vn/';
const CFG = {
  nissan: { B: 'Nissan', id: 'bgnis', ph: 'Nissan Sunny 2019',
    hero: ['https://auto365.vn/uploads/images/tin%20t%E1%BB%A9c/2024/T8/nissan-sunny-do-bi-gam/nissan-sunny-nang-cap-bi-gam-xlight-f10-turbo.jpg.webp', 'Nissan Sunny lắp bi gầm X-Light F10 Turbo tại Auto365'],
    lead: 'Auto365 tổng hợp hồ sơ lắp bi gầm X-Light F10 Turbo trên Nissan Sunny và bài tư vấn phương án bi gầm cho Nissan Navara',
    lens: 'Hồ sơ Nissan Sunny tại Auto365 dùng mẫu lens 3.0 inch; bài tư vấn Navara nêu cả phương án 2.0 và 3.0 inch tùy đời xe, nên mẫu lắp trong hồ sơ chỉ áp dụng cho đúng xe đó.',
    heavy: 'Navara, X-Trail',
    M: [['Navara', 'pickup', P + 'bi-gam-nissan-navara'], ['Sunny', 'sedan', P + 'nissan-sunny-do-den-bi-gam-xlight-f10-turbo'], ['Almera', 'sedan', ''], ['Teana', 'sedan', ''], ['Sylphy', 'sedan', ''], ['Bluebird', 'sedan', ''], ['Tiida', 'sedan', ''], ['X-Trail', 'suv', ''], ['Terra', 'suv', ''], ['Kicks', 'suv', ''], ['Juke', 'suv', ''], ['Qashqai', 'suv', ''], ['Murano', 'suv', ''], ['Pathfinder', 'suv', ''], ['Patrol', 'suv', ''], ['Grand Livina', 'mpv', ''], ['Livina', 'mpv', ''], ['Urvan', 'mpv', '']],
    T: [['all', 'Tất cả'], ['sedan', 'Sedan/Hatchback'], ['suv', 'SUV'], ['mpv', 'MPV'], ['pickup', 'Bán tải']],
    C: [['Sunny', 'Nissan Sunny nâng cấp bi gầm X-Light F10 Turbo', 'nissan-sunny-do-den-bi-gam-xlight-f10-turbo', 'https://auto365.vn/uploads/images/tin%20t%E1%BB%A9c/2024/T8/nissan-sunny-do-bi-gam/nissan-sunny-nang-cap-bi-gam-xlight-f10-turbo.jpg.webp', '2024-08-09']],
    need: [['Sedan đi phố, chạy dịch vụ', 'Sunny, Almera, Teana, Sylphy, Tiida', ['Nếu đèn hiện tại vẫn đủ sáng thì có thể chưa cần lắp.', 'Xe chạy dịch vụ dùng đèn nhiều giờ nên ưu tiên đi dây gọn, có bảo vệ mạch.', 'Hốc đèn gầm cần đo trước để chọn lens 2.0 hay 3.0 inch.'], 'Đã lắp: <a href="https://auto365.vn/nissan-sunny-do-den-bi-gam-xlight-f10-turbo">Sunny – X-Light F10 Turbo</a>'],
      ['SUV, MPV gia đình', 'X-Trail, Terra, Kicks, Qashqai, Patrol, Grand Livina, Livina', ['Bi gầm bổ sung vùng sáng thấp gần đầu xe và hai bên lề đường, hữu ích khi đi đường dài ban đêm.', 'Hiệu quả phụ thuộc góc chiếu và căn chỉnh; nhiệt màu không tự quyết định khả năng nhìn khi mưa.', 'Xe chở khách nhiều nên căn chỉnh kỹ để hạn chế chói xe đối diện.'], 'Chưa có hồ sơ: gửi đời xe để kỹ thuật viên kiểm tra hốc đèn.'],
      ['Bán tải, đi đường dài', 'Navara', ['Nếu khó nhìn xa, nên kiểm tra đèn chính trước; bi gầm hỗ trợ vùng gần và lề đường.', 'Navara mỗi đời khác hốc đèn gầm; kỹ thuật viên kiểm tra trước khi chọn lens 2.0 hay 3.0 inch.', 'Xe hay đi đường xấu nên kiểm tra độ kín giắc và cố định dây sau khi lắp.'], 'Xem tư vấn: <a href="https://auto365.vn/bi-gam-nissan-navara">Bi gầm Nissan Navara – phương án lắp và giá</a>']],
    has: 'Dòng đã có hồ sơ lắp thực tế là Sunny; Navara có bài tư vấn phương án bi gầm theo đời xe. Các dòng Nissan còn lại hiện ở nhóm "Tư vấn cấu hình"',
    lensFaq: 'Trong hồ sơ tại Auto365, Nissan Sunny lắp X-Light F10 Turbo (lens 3.0 inch); bài tư vấn Navara trình bày phương án 2.0 và 3.0 inch theo từng đời xe.' },
  'land-rover': { B: 'Land Rover', id: 'bglr', ph: 'Land Rover LR2 2010',
    hero: ['https://auto365.vn/uploads/images/news/auto365vn-land-rover-lr2-s-2010-lap-bi-gam-x-light-f10-turbo-v2-4300k-7-img_6ab63c99cdabc4.43871548.webp', 'Land Rover LR2 S 2010 lắp bi gầm X-Light F10 Turbo V2 4300K tại Auto365'],
    lead: 'Auto365 tổng hợp hồ sơ lắp bi gầm X-Light F10 Turbo V2 4300K trên Land Rover LR2 S 2010 và bài tư vấn cách chọn bi gầm cho LR2 S theo đời xe',
    lens: 'Hồ sơ Land Rover LR2 S 2010 tại Auto365 dùng mẫu lens 3.0 inch; mẫu lắp trong hồ sơ chỉ áp dụng cho đúng xe đó.',
    heavy: 'Discovery, Range Rover',
    M: [['LR2 S', 'land', P + 'bi-gam-land-rover-lr2-s'], ['Freelander', 'land', ''], ['Discovery Sport', 'land', ''], ['Discovery', 'land', ''], ['Discovery 4 (LR4)', 'land', ''], ['Discovery 3 (LR3)', 'land', ''], ['Defender', 'land', ''], ['Range Rover Evoque', 'range', ''], ['Range Rover Velar', 'range', ''], ['Range Rover Sport', 'range', ''], ['Range Rover', 'range', '']],
    T: [['all', 'Tất cả'], ['land', 'Discovery/Defender/Freelander'], ['range', 'Range Rover']],
    C: [['LR2 S', 'Land Rover LR2 S 2010 lắp bi gầm X-Light F10 Turbo V2 4300K', 'land-rover-lr2-s-2010-lap-bi-gam-x-light-f10-turbo-v2-4300k', 'https://auto365.vn/uploads/images/news/auto365vn-land-rover-lr2-s-2010-lap-bi-gam-x-light-f10-turbo-v2-4300k-7-img_6ab63c99cdabc4.43871548.webp', '2026-09-25']],
    need: [['SUV gia đình, đi phố', 'LR2 S, Freelander, Discovery Sport, Range Rover Evoque', ['Nếu đèn hiện tại vẫn đủ sáng thì có thể chưa cần lắp.', 'Xe đi đêm nhiều nên ưu tiên đường cắt cos rõ và cân chỉnh sau khi lắp.', 'Xe đời cũ nên kiểm tra tình trạng cụm đèn gầm và giắc trước khi chọn mẫu.'], 'Đã lắp: <a href="https://auto365.vn/land-rover-lr2-s-2010-lap-bi-gam-x-light-f10-turbo-v2-4300k">LR2 S 2010 – X-Light F10 Turbo V2 4300K</a>'],
      ['SUV cỡ lớn, đi đường dài', 'Discovery, Range Rover, Range Rover Sport, Velar', ['Bi gầm bổ sung vùng sáng thấp gần đầu xe và hai bên lề đường, hữu ích khi đi đường dài ban đêm.', 'Hiệu quả phụ thuộc góc chiếu và căn chỉnh; nhiệt màu không tự quyết định khả năng nhìn khi mưa.', 'Xe nhiều hệ thống điện tử nên kỹ thuật viên kiểm tra nguồn cấp, điều khiển và giắc theo đúng đời xe.'], 'Chưa có hồ sơ: gửi đời xe để kỹ thuật viên kiểm tra hốc đèn.'],
      ['Đi địa hình, đường xấu', 'Defender, Discovery', ['Nếu khó nhìn xa, nên kiểm tra đèn chính trước; bi gầm hỗ trợ vùng gần và lề đường.', 'Không chọn chỉ theo số W; kỹ thuật viên cho xem vùng sáng thực tế trước khi chốt.', 'Xe hay đi đường xấu nên kiểm tra độ kín giắc và cố định dây sau khi lắp.'], 'Chưa có hồ sơ: gửi đời xe để kỹ thuật viên kiểm tra hốc đèn.']],
    has: 'Dòng đã có hồ sơ lắp thực tế là LR2 S (đời 2010), kèm bài tư vấn chọn bi gầm theo đời xe. Các dòng Land Rover còn lại (Freelander, Discovery, Defender, Range Rover…) hiện ở nhóm "Tư vấn cấu hình"',
    lensFaq: 'Trong hồ sơ tại Auto365, Land Rover LR2 S 2010 lắp X-Light F10 Turbo V2 4300K (lens 3.0 inch).' },
  porsche: { B: 'Porsche', id: 'bgpor', ph: 'Porsche Cayenne 2014',
    hero: ['https://auto365.vn/uploads/images/news/auto365vn-porsche-cayenne-s-2014-lap-bi-gam-x-light-f10-turbo-v2-img_6a7ace89ea6559.98200792.jpg.webp', 'Porsche Cayenne S 2014 lắp bi gầm X-Light F10 Turbo V2 4300K tại Auto365'],
    lead: 'Auto365 tổng hợp hồ sơ lắp bi gầm X-Light F10 Turbo V2 4300K trên Porsche Cayenne S 2014 và bài tư vấn chọn bi gầm Cayenne theo đời xe',
    lens: 'Hồ sơ Porsche Cayenne S 2014 tại Auto365 dùng mẫu lens 3.0 inch; mẫu lắp trong hồ sơ chỉ áp dụng cho đúng xe đó.',
    heavy: 'Cayenne, Panamera',
    M: [['Cayenne', 'suv', P + 'bi-gam-porsche-cayenne'], ['Macan', 'suv', ''], ['Panamera', 'sedan', ''], ['Taycan', 'sedan', ''], ['911', 'sport', ''], ['718 Boxster', 'sport', ''], ['718 Cayman', 'sport', '']],
    T: [['all', 'Tất cả'], ['suv', 'SUV'], ['sedan', 'Sedan/Gran Turismo'], ['sport', 'Thể thao']],
    C: [['Cayenne', 'Porsche Cayenne S 2014 lắp bi gầm X-Light F10 Turbo V2 4300K', 'porsche-cayenne-s-2014-lap-bi-gam-x-light-f10-turbo-v2', 'https://auto365.vn/uploads/images/news/auto365vn-porsche-cayenne-s-2014-lap-bi-gam-x-light-f10-turbo-v2-img_6a7ace89ea6559.98200792.jpg.webp', '2026-08-11']],
    need: [['SUV gia đình, đi phố', 'Cayenne, Macan', ['Nếu đèn hiện tại vẫn đủ sáng thì có thể chưa cần lắp.', 'Xe đi đêm nhiều nên ưu tiên đường cắt cos rõ và cân chỉnh sau khi lắp.', 'Mỗi đời Cayenne, Macan khác thiết kế cản; kỹ thuật viên kiểm tra hốc đèn trước khi chọn mẫu.'], 'Đã lắp: <a href="https://auto365.vn/porsche-cayenne-s-2014-lap-bi-gam-x-light-f10-turbo-v2">Cayenne S 2014 – X-Light F10 Turbo V2</a>'],
      ['Đi đường dài, đi tỉnh', 'Cayenne, Panamera', ['Bi gầm bổ sung vùng sáng thấp gần đầu xe và hai bên lề đường, hữu ích khi đi đường dài ban đêm.', 'Hiệu quả phụ thuộc góc chiếu và căn chỉnh; nhiệt màu không tự quyết định khả năng nhìn khi mưa.', 'Căn chỉnh kỹ để hạn chế chói xe đối diện.'], 'Xem tư vấn: <a href="https://auto365.vn/bi-gam-porsche-cayenne">Bi gầm Porsche Cayenne – chọn theo đời xe</a>'],
      ['Xe nhiều hệ thống điện tử', 'Cayenne, Macan, Panamera, Taycan, 911, 718', ['Kỹ thuật viên kiểm tra nguồn cấp, hệ thống điều khiển và dây/giắc theo đúng đời xe trước khi đề xuất cấu hình.', 'Không chọn chỉ theo số W; kỹ thuật viên cho xem vùng sáng thực tế trước khi chốt.', 'Hạn chế cắt khoét cản; ưu tiên pát và giắc phù hợp với xe.'], 'Chưa có hồ sơ các dòng khác: gửi đời xe để kỹ thuật viên kiểm tra hốc đèn.']],
    has: 'Dòng đã có hồ sơ lắp thực tế là Cayenne (Cayenne S 2014), kèm bài tư vấn chọn bi gầm Cayenne theo đời xe. Các dòng Macan, Panamera, Taycan, 911 và 718 hiện ở nhóm "Tư vấn cấu hình"',
    lensFaq: 'Trong hồ sơ tại Auto365, Porsche Cayenne S 2014 lắp X-Light F10 Turbo V2 4300K (lens 3.0 inch).' },
};
const slug = process.argv[2], c = CFG[slug]; if (!c) throw new Error('brand?');
const B = c.B, norm = slug.replace(/-/g, '');
let s = fs.readFileSync('auto365/bi-gam/peugeot/content-src.html', 'utf8');
const R = (re, v) => { const has = typeof re === 'string' ? s.includes(re) : re.test(s); if (!has) throw new Error('miss ' + re); s = typeof re === 'string' ? s.split(re).join(v) : s.replace(re, v); };
R(/(<p class="bgvf-lead">[^<]*?)Auto365 tổng hợp hồ sơ lắp bi gầm X-Light trên Peugeot 5008 và 3008/, '$1' + c.lead);
R(/<!-- hero-src:[^>]*-->/, '<!-- hero-src: ' + c.hero[0] + ' -->');
R(/<img src="hinh\/hero-peugeot-bi-gam.webp"[^>]*>/, `<img src="hinh/hero-${slug}-bi-gam.webp" alt="${c.hero[1]}" width="__W__" height="__H__" fetchpriority="high">`);
R(/Hai hồ sơ Peugeot tại Auto365 dùng hai cỡ lens[^<]*/, c.lens);
R('(5008, Traveller)', '(' + c.heavy + ')');
const i = s.indexOf('<div class="bgvf-need">'), j = s.indexOf('<p class="bgvf-nnote">');
s = s.slice(0, i) + '<div class="bgvf-need">\n' + c.need.map((n) => `  <article class="bgvf-nd"><h3>${n[0]}</h3><p class="who">${n[1]}</p><div class="bd">\n   <ul>${n[2].map((x) => '<li>' + x + '</li>').join('')}</ul>\n   <p class="done">${n[3]}</p></div></article>`).join('\n') + '\n </div>\n ' + s.slice(j);
R(/(<details><summary>Dòng Peugeot nào đã có hồ sơ[^<]*<\/summary><p>)[^:]*(: bấm thẻ)/, '$1' + c.has + '$2');
R('Trong hai hồ sơ tại Auto365, Peugeot 5008 2019 lắp X-Light F10 Hyper 2.0 (lens 2.0 inch), còn Peugeot 3008 lắp X-Light F10 New (lens 3.0 inch).', c.lensFaq);
R(/Dựng 24\/11\/2026 theo khung hub Chevrolet;[^<]*/, 'Dựng 24/11/2026 theo khung hub Chevrolet/Peugeot; case và bài tư vấn lấy từ bài đã đăng trên auto365.vn, hãng đèn X-Light. Ảnh thẻ dòng xe chưa có (hiện chữ), chờ designer. Cần xác nhận: danh sách dòng xe, cơ sở và ngày thi công của ca.');
const q = (x) => "'" + x.replace(/'/g, "\\'") + "'";
R(/var M=\[[\s\S]*?\]\];/, 'var M=[' + c.M.map((m) => `[${q(m[0])},${q(m[1])},'',${m[2] ? 'P+' + q(m[2].slice(P.length)) : "''"}]`).join(',\n') + '];');
R(/var T=\[[^;]*;/, 'var T=[' + c.T.map((t) => `[${q(t[0])},${q(t[1])}]`).join(',') + '];');
R(/var C=\[[\s\S]*?\]\];/, 'var C=[' + c.C.map((x) => JSON.stringify(x)).join(',\n') + '];');
R(/var NEW=\[[^\]]*\]/, 'var NEW=[' + c.M.map((m) => q(m[0])).join(',') + ']');
s = s.replace(/Peugeot/g, B).replace(/\/bi-gam-peugeot-/g, '/bi-gam-' + slug + '-').replace(/replace\(\/peugeot\/g,''\)/g, 'replace(/' + norm + "/g,'')").replace(/peugeot/g, slug);
fs.mkdirSync(`auto365/bi-gam/${slug}/hinh`, { recursive: true });
fs.writeFileSync(`auto365/bi-gam/${slug}/content-src.html`, s);
for (const w of ['5008', '3008', 'Traveller', 'F10 Hyper', 'Peugeot', 'peugeot']) if (s.includes(w)) console.log('LEFT', w, s.substr(s.indexOf(w) - 60, 120));
const tr = (t) => t.replace(/bgpeu/g, c.id).replace(/Peugeot/g, B).replace(/peugeot/g, slug);
let b = tr(fs.readFileSync('scripts/build-bi-gam-peugeot.mjs', 'utf8'))
  .replace(/VD: [^"]*2019"/, 'VD: ' + c.ph + '"')
  .replace(/Xem hồ sơ bi gầm [^']*'/, `Xem hồ sơ bi gầm ${B} đã lắp tại Auto365; gửi đời xe để kiểm tra hốc đèn, nguồn điện, phụ kiện và báo chi phí.'`);
fs.writeFileSync(`scripts/build-bi-gam-${slug}.mjs`, b);
let e = tr(fs.readFileSync('scripts/export-bi-gam-peugeot-docs.mjs', 'utf8'));
const a = e.indexOf('const CASEINFO = {'), z = e.indexOf('};', a) + 2;
const cid = (x) => c.id.slice(2).toUpperCase() + '-' + x[0].toUpperCase().replace(/[^A-Z0-9]+/g, '') + '-' + (x[1].match(/\b(20\d\d)\b/) || [, 'NA'])[1];
e = e.slice(0, a) + 'const CASEINFO = {\n' + c.C.map((x) => `  ${q(P + x[2])}: [${q(cid(x))}, ${q('Xe: ' + x[1] + ' (theo bài). Cơ sở và thời điểm thi công: chờ chủ quản xác nhận (bài không ghi; ngày đăng ' + x[4] + ' không phải ngày làm). Tư liệu: ảnh trong bài (ảnh Auto365).')}],`).join('\n') + '\n};' + e.slice(z);
fs.writeFileSync(`scripts/export-bi-gam-${slug}-docs.mjs`, e);
console.log('ok', slug);
