// Dựng hub bi gầm cho hãng chưa có (hoặc có ít) hồ sơ bi gầm — 26/11/2026.
// Khung Peugeot (qua gen-bi-gam-brand.cjs) + mục "Xe <hãng> đã làm tại Auto365": ca bi gầm và ca hạng mục khác
// (bi LED, bi laser, phim, PPF, camera) có nhãn hạng mục, theo yêu cầu user 26/11.
// Dùng: node scripts/gen-bi-gam-brand-v2.cjs mercedes|audi|isuzu|mg|byd|geely|volvo|volkswagen
const fs = require('fs'); const P = 'https://auto365.vn/'; const N = P + 'uploads/images/news/';
const OLD = P + 'uploads/images/tin%20t%E1%BB%A9c/';
const BG = 'Bi gầm';
// need-card helpers
const city = (who, extra) => ['Xe đi phố, đi tỉnh', who, ['Nếu đèn hiện tại vẫn đủ sáng thì có thể chưa cần lắp.', 'Xe đi đêm nhiều nên ưu tiên đường cắt cos rõ và cân chỉnh sau khi lắp.', extra]];
const road = (who, extra) => ['Đi đường dài, đi mưa', who, ['Bi gầm bổ sung vùng sáng thấp gần đầu xe và hai bên lề đường, hữu ích khi đi đường dài ban đêm.', 'Hiệu quả phụ thuộc góc chiếu và căn chỉnh; nhiệt màu không tự quyết định khả năng nhìn khi mưa.', extra]];
const elec = (who) => ['Xe nhiều hệ thống điện tử', who, ['Kỹ thuật viên kiểm tra nguồn cấp, hệ thống điều khiển và dây/giắc theo đúng đời xe trước khi đề xuất cấu hình.', 'Không chọn chỉ theo số W; kỹ thuật viên cho xem vùng sáng thực tế trước khi chốt.', 'Hạn chế cắt khoét cản; ưu tiên pát và giắc phù hợp với xe.']];
const ev = (who) => ['Xe điện', who, ['Xe điện có hệ thống điện 12V phụ và nhiều cảm biến; kỹ thuật viên kiểm tra điểm cấp nguồn để không ảnh hưởng hệ thống của xe.', 'Không chọn chỉ theo số W; kỹ thuật viên cho xem vùng sáng thực tế trước khi chốt.', 'Một số mẫu không có hốc đèn gầm zin; khi đó cần đánh giá phương án đèn gầm dạng rời.']];
const NOCASE = 'Chưa có hồ sơ bi gầm: gửi đời xe để kỹ thuật viên kiểm tra hốc đèn.';
const lensNo = (B) => `Auto365 chưa có hồ sơ lắp bi gầm trên xe ${B}; kỹ thuật viên đo hốc đèn gầm trên chính xe để chọn lens 2.0 hay 3.0 inch, không suy theo hãng.`;
const faqNo = (B) => `Auto365 chưa có hồ sơ lắp bi gầm trên xe ${B}, nên chưa có kích thước lens tham khảo theo ca thực tế.`;
const CFG = {
  mercedes: { B: 'Mercedes', id: 'bgmer', ph: 'Mercedes GLC 2022', hero: 1,
    lead: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Mercedes; trang tổng hợp các xe Mercedes đã nâng cấp bi LED, bi laser và dán phim cách nhiệt tại Auto365 để chủ xe tham khảo',
    heavy: 'GLC, GLE, GLS',
    M: [['C-Class', 'sedan'], ['E-Class', 'sedan'], ['S-Class', 'sedan'], ['Maybach', 'sedan'], ['A-Class', 'sedan'], ['CLA', 'sedan'], ['EQS', 'sedan'], ['EQE', 'sedan'], ['GLA', 'suv'], ['GLB', 'suv'], ['GLC', 'suv'], ['GLC Coupe', 'suv'], ['GLE', 'suv'], ['GLE Coupe', 'suv'], ['GLS', 'suv'], ['G-Class', 'suv'], ['V-Class', 'mpv'], ['Sprinter', 'mpv']],
    T: [['all', 'Tất cả'], ['sedan', 'Sedan/Coupe'], ['suv', 'SUV'], ['mpv', 'MPV/Van']],
    C: [['C-Class', 'Mercedes C300 AMG 2014 lắp bi LED X-Light V20 New 2025', 'mercedes-c300-amg-2014-lap-bi-led-v20-new-2025', N + 'mercedes-c300-amg-2014-lap-bi-led-x-light-v20-new-2025-1791276590.webp', '2026-10-06', 'Bi LED'],
      ['S-Class', 'Mercedes S450L 2020 lắp bi laser Titan Platinum Plus', 'mercedes-s450l-2020-lap-bi-laser-titan-platinum-plus', N + 'mercedes-s450l-2020-lap-bi-laser-titan-platinum-plus-1790847519.webp', '2026-10-01', 'Bi laser'],
      ['Maybach', 'Maybach 62S 2012 lắp bi laser Titan Platinum Plus', 'maybach-62s-2012-lap-bi-laser-titan-platinum-plus', N + 'maybach-62s-titan-platinum-plus.webp', '2026-11-19', 'Bi laser'],
      ['E-Class', 'Mercedes E300 độ đèn bi laser Titan Platinum Plus', 'mercedes-e300-do-den-bi-laser-titan-platinum-plus', OLD + '2024/T8/mercedes-e300-do-den-bi-laser-titan-platinum-plus/mercedes-e300-do-den-bi-laser-titan-platinum-plus.jpg.webp', '2024-08-08', 'Bi laser'],
      ['GLE', 'Mercedes-Benz GLE 450 dán phim 3M CR BLK theo từng vị trí kính', 'mercedes-benz-gle-450-dan-phim-3m-cr-blk', N + 'mercedes-benz-gle-450-dan-phim-3m-cr-blk.webp', '2026-11-17', 'Phim cách nhiệt'],
      ['E-Class', 'Mercedes E300 AMG 2025 dán gói phim cách nhiệt 3M CR BLK Pro', 'mercedes-e300-amg-2025-dan-phim-cach-nhiet-3m-cr-blk-pro', N + 'mercedes-e300-amg-2025-dan-phim-cach-nhiet-3m-cr-blk-pro.webp', '2026-11-13', 'Phim cách nhiệt'],
      ['GLS', 'Mercedes-Benz GLS 450 dán phim cách nhiệt 3M CR BLK 50 cho kính lái', 'mercedes-benz-gls-450-dan-phim-3m-cr-blk-50-cho-kinh-lai', N + 'mercedes-benz-gls-450-dan-phim-3m-cr-blk-50-kinh-lai.webp', '2026-11-10', 'Phim cách nhiệt']],
    need: [city('C-Class, E-Class, A-Class, CLA, GLA, GLB', 'Mỗi đời C-Class, E-Class khác thiết kế cản; kỹ thuật viên kiểm tra hốc đèn gầm trước khi chọn mẫu.'), road('GLC, GLE, GLS, S-Class', 'Căn chỉnh kỹ để hạn chế chói xe đối diện.'), elec('S-Class, Maybach, EQS, EQE, G-Class, V-Class')],
    done: ['Xe đã làm tại Auto365: <a href="https://auto365.vn/mercedes-c300-amg-2014-lap-bi-led-v20-new-2025">C300 AMG 2014 – bi LED</a>', NOCASE, 'Xe đã làm tại Auto365: <a href="https://auto365.vn/mercedes-s450l-2020-lap-bi-laser-titan-platinum-plus">S450L 2020 – bi laser</a>'],
    has: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Mercedes. Các xe Mercedes đã làm tại Auto365 là ca bi LED (C300 AMG 2014), bi laser (S450L 2020, E300, Maybach 62S 2012) và phim cách nhiệt (GLE 450, E300 AMG 2025, GLS 450). Mọi dòng Mercedes hiện ở nhóm "Tư vấn cấu hình"' },
  audi: { B: 'Audi', id: 'bgaud', ph: 'Audi Q7 2018', hero: 0,
    lead: 'Auto365 tổng hợp ca lắp combo bi laser V30L Ultra và bi gầm X-Light F10 New trên Audi Q7, cùng các xe Audi đã làm PPF và camera hành trình tại Auto365',
    lens: 'Hồ sơ Audi Q7 tại Auto365 dùng bi gầm X-Light F10 New (lens 3.0 inch); mẫu lắp trong hồ sơ chỉ áp dụng cho đúng xe đó.',
    heavy: 'Q5, Q7, Q8',
    M: [['Q7', 'suv', P + 'khach-hang-noi-gi-ve-combo-v30l-ultra-va-bi-gam-f10-new-khi-len-chiec-audi-q7'], ['Q2', 'suv'], ['Q3', 'suv'], ['Q5', 'suv'], ['Q8', 'suv'], ['e-tron', 'suv'], ['A4', 'sedan'], ['A5 Sportback', 'sedan'], ['A6', 'sedan'], ['A7 Sportback', 'sedan'], ['A8', 'sedan'], ['TT', 'sport']],
    T: [['all', 'Tất cả'], ['suv', 'SUV'], ['sedan', 'Sedan/Sportback'], ['sport', 'Thể thao']],
    C: [['Q7', 'Audi Q7 lắp combo bi laser X-Light V30L Ultra và bi gầm X-Light F10 New', 'khach-hang-noi-gi-ve-combo-v30l-ultra-va-bi-gam-f10-new-khi-len-chiec-audi-q7', P + 'uploads/images/2021/anh-sang-thuc-te-combo-den.jpg.webp', '2022-01-20', BG],
      ['Q3', 'Audi Q3 2026 dán phim bảo vệ sơn PPF 3M 50 Gloss cho full xe', 'audi-q3-2026-dan-ppf-3m-50-gloss-full-xe', N + 'audi-q3-2026-dan-ppf-3m-50-gloss.webp', '2026-11-16', 'PPF'],
      ['TT', 'Audi TT Roadster 2014 lắp camera hành trình 70mai A800SE', 'audi-tt-roadster-2014-lap-camera-hanh-trinh-70mai-a800se', N + 'auto365vn-audi-tt-roadster-2014-lap-camera-hanh-trinh-70mai-a800se-img_6aa77c9c5bf2b8.33886237.webp', '2026-09-14', 'Camera']],
    need: [road('Q5, Q7, Q8, e-tron', 'Q7 đã có ca lắp F10 New tại Auto365; đời khác cần kiểm tra lại hốc đèn.'), city('A4, A5 Sportback, A6, Q2, Q3', 'Mỗi đời Audi khác thiết kế cản; kỹ thuật viên kiểm tra hốc đèn gầm trước khi chọn mẫu.'), elec('A7 Sportback, A8, Q8, e-tron, TT')],
    done: ['Đã lắp: <a href="https://auto365.vn/khach-hang-noi-gi-ve-combo-v30l-ultra-va-bi-gam-f10-new-khi-len-chiec-audi-q7">Q7 – X-Light F10 New</a>', NOCASE, NOCASE],
    has: 'Dòng đã có hồ sơ lắp bi gầm thực tế là Q7 (combo bi laser V30L Ultra và bi gầm X-Light F10 New). Audi Q3 (PPF) và TT Roadster (camera hành trình) đã làm hạng mục khác tại Auto365. Các dòng Audi còn lại hiện ở nhóm "Tư vấn cấu hình"',
    lensFaq: 'Trong hồ sơ tại Auto365, Audi Q7 lắp X-Light F10 New (lens 3.0 inch).' },
  isuzu: { B: 'Isuzu', id: 'bgisu', ph: 'Isuzu D-Max 2020', hero: 0,
    lead: 'Auto365 tổng hợp bài tư vấn chọn bi gầm Isuzu D-Max theo đời xe và ca nâng cấp bi LED X-Light V20 New 2025 trên D-Max 2018 tại Auto365',
    heavy: 'D-Max, mu-X',
    M: [['D-Max', 'pickup', P + 'bi-gam-isuzu-dmax', 'hinh/m-d-max.webp'], ['mu-X', 'suv', '', 'hinh/m-mu-x.webp'], ['Hi-Lander', 'mpv'], ['Trooper', 'suv']],
    T: [['all', 'Tất cả'], ['pickup', 'Bán tải'], ['suv', 'SUV'], ['mpv', 'MPV']],
    C: [['D-Max', 'Isuzu D-Max 2018 LS Prestige lắp bi LED X-Light V20 New 2025', 'isuzu-d-max-2018-lap-bi-led-v20-new-2025', N + 'isuzu-d-max-2018-lap-bi-led-v20-new-2025-1791001362.webp', '2026-10-03', 'Bi LED']],
    need: [['Bán tải, đi đường dài', 'D-Max', ['Nếu khó nhìn xa, nên kiểm tra đèn chính trước; bi gầm hỗ trợ vùng gần và lề đường.', 'D-Max mỗi đời khác hốc đèn gầm; kỹ thuật viên kiểm tra trước khi chọn lens 2.0 hay 3.0 inch.', 'Xe hay đi đường xấu nên kiểm tra độ kín giắc và cố định dây sau khi lắp.']],
      ['SUV 7 chỗ gia đình', 'mu-X, Trooper', ['Nếu đèn hiện tại vẫn đủ sáng thì có thể chưa cần lắp.', 'Bi gầm bổ sung vùng sáng thấp gần đầu xe và hai bên lề đường, hữu ích khi đi đường dài ban đêm.', 'Xe chở khách nhiều nên căn chỉnh kỹ để hạn chế chói xe đối diện.']],
      ['Xe đời cũ', 'Hi-Lander, Trooper', ['Xe đời cũ nên kiểm tra tình trạng cụm đèn gầm, giắc và dây điện trước khi chọn mẫu.', 'Hiệu quả phụ thuộc góc chiếu và căn chỉnh; nhiệt màu không tự quyết định khả năng nhìn khi mưa.', 'Không chọn chỉ theo số W; kỹ thuật viên cho xem vùng sáng thực tế trước khi chốt.']]],
    done: ['Xem tư vấn: <a href="https://auto365.vn/bi-gam-isuzu-dmax">Bi gầm Isuzu D-Max – chọn theo đời xe</a>', NOCASE, NOCASE],
    has: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Isuzu; D-Max có bài tư vấn chọn bi gầm theo đời xe, và D-Max 2018 đã nâng cấp bi LED X-Light V20 New 2025 tại Auto365. Các dòng Isuzu còn lại hiện ở nhóm "Tư vấn cấu hình"',
    lensFaq: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Isuzu; bài tư vấn D-Max trình bày các phương án lens theo từng đời xe.' },
  mg: { B: 'MG', id: 'bgmg', ph: 'MG ZS 2023', hero: 0,
    lead: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe MG; trang tổng hợp các xe MG đã nâng cấp bi LED, dán phim cách nhiệt và lắp camera hành trình tại Auto365 để chủ xe tham khảo',
    heavy: 'ZS, HS, RX5',
    M: [['MG5', 'sedan'], ['MG7', 'sedan'], ['MG4 EV', 'sedan'], ['GT', 'sedan'], ['ZS', 'suv'], ['HS', 'suv'], ['RX5', 'suv'], ['G50', 'mpv']],
    T: [['all', 'Tất cả'], ['sedan', 'Sedan/Hatchback'], ['suv', 'SUV'], ['mpv', 'MPV']],
    C: [['RX5', 'MG RX5 2024 lắp bi LED X-Light V20 Square', 'mg-rx5-2024-lap-bi-led-x-light-v20-square', N + 'auto365vn-mg-rx5-2024-lap-bi-led-x-light-v20-square-img_6aa3764965e589.21190357.webp', '2026-09-11', 'Bi LED'],
      ['ZS', 'MG ZS dán phim cách nhiệt 3M CR BLK 50 cho kính lái', 'mg-zs-dan-phim-cach-nhiet-3m-cr-blk-50-cho-kinh-lai', N + 'mg-zs-dan-phim-cach-nhiet-3m-cr-blk-50-kinh-lai-3.webp', '2026-11-11', 'Phim cách nhiệt'],
      ['MG5', 'MG5 dán phim 3M Crystalline CR BLK: chủ xe nên kiểm tra gì khi nhận xe', 'mg5-dan-phim-3m-crystalline-cr-blk-kiem-tra-khi-nhan-xe', N + 'auto365vn-mg5-dan-phim-3m-crystalline-cr-blk-kiem-tra-khi-nhan-xe-img_6a83c2bd94efa8.75871752.png.webp', '2026-08-18', 'Phim cách nhiệt'],
      ['MG5', 'MG5 Luxury 2025 lắp camera hành trình 70mai A800SE hai kênh', 'mg5-luxury-2025-lap-70mai-a800se-hai-kenh', N + 'mg5-luxury-2025-lap-70mai-a800se-hai-kenh-1-1791356031.webp', '2026-10-07', 'Camera']],
    need: [city('MG5, MG7, GT', 'Xe chạy dịch vụ dùng đèn nhiều giờ nên ưu tiên đi dây gọn, có bảo vệ mạch.'), road('ZS, HS, RX5, G50', 'Xe chở khách nhiều nên căn chỉnh kỹ để hạn chế chói xe đối diện.'), ev('MG4 EV')],
    done: ['Xe đã làm tại Auto365: <a href="https://auto365.vn/mg5-luxury-2025-lap-70mai-a800se-hai-kenh">MG5 Luxury 2025 – camera hành trình</a>', 'Xe đã làm tại Auto365: <a href="https://auto365.vn/mg-rx5-2024-lap-bi-led-x-light-v20-square">RX5 2024 – bi LED</a>', NOCASE],
    has: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe MG. Các xe MG đã làm tại Auto365 là ca bi LED (RX5 2024), phim cách nhiệt (ZS, MG5) và camera hành trình (MG5 Luxury 2025). Mọi dòng MG hiện ở nhóm "Tư vấn cấu hình"' },
  byd: { B: 'BYD', id: 'bgbyd', ph: 'BYD Sealion 6 2025', hero: 0,
    lead: 'Auto365 tổng hợp ca lắp đèn gầm dạng rời Titan M40 Ultra V2 trên BYD M6 (xe không lắp bi gầm vào hốc zin) để chủ xe BYD tham khảo phương án đèn gầm',
    heavy: 'M6, Sealion 6, Sealion 7',
    M: [['Atto 2', 'suv'], ['Atto 3', 'suv'], ['Sealion 5', 'suv'], ['Sealion 6', 'suv'], ['Sealion 7', 'suv'], ['Dolphin', 'sedan'], ['Seal', 'sedan'], ['Seal 5', 'sedan'], ['Han', 'sedan'], ['M6', 'mpv']],
    T: [['all', 'Tất cả'], ['suv', 'SUV'], ['sedan', 'Sedan/Hatchback'], ['mpv', 'MPV']],
    C: [['M6', 'BYD M6 lắp đèn gầm dạng rời Titan M40 Ultra V2', 'byd-m6-lap-den-gam-dang-roi-titan-m40-ultra-v2', N + 'auto365vn-byd-m6-lap-den-gam-dang-roi-titan-m40-ultra-v2-img_6a6d6a32b4a9a1.30639774.jpg.webp', '2026-08-01', 'Đèn gầm rời']],
    need: [ev('Atto 2, Atto 3, Dolphin, Seal, Seal 5, Han'), road('Sealion 5, Sealion 6, Sealion 7', 'Mỗi phiên bản khác thiết kế cản; kỹ thuật viên kiểm tra hốc đèn gầm trước khi chọn mẫu.'), ['MPV gia đình, chạy dịch vụ', 'M6', ['Xe chở khách nhiều nên căn chỉnh kỹ để hạn chế chói xe đối diện.', 'BYD M6 trong ca tại Auto365 dùng đèn gầm dạng rời Titan M40 Ultra V2, không lắp bi gầm vào hốc zin.', 'Xe dùng đèn nhiều giờ nên ưu tiên đi dây gọn, có bảo vệ mạch.']]],
    done: [NOCASE, NOCASE, 'Xe đã làm tại Auto365: <a href="https://auto365.vn/byd-m6-lap-den-gam-dang-roi-titan-m40-ultra-v2">M6 – đèn gầm rời Titan M40 Ultra V2</a>'],
    has: 'Auto365 chưa có hồ sơ lắp bi gầm vào hốc zin trên xe BYD; BYD M6 đã lắp đèn gầm dạng rời Titan M40 Ultra V2 tại Auto365. Các dòng BYD còn lại hiện ở nhóm "Tư vấn cấu hình"' },
  geely: { B: 'Geely', id: 'bggee', ph: 'Geely EX5 2025', hero: 0,
    lead: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Geely; trang tổng hợp các xe Geely EX2, EX5 đã dán phim cách nhiệt 3M và lắp camera hành trình tại Auto365 để chủ xe tham khảo',
    heavy: 'Monjaro, Okavango',
    M: [['EX2', 'ev'], ['EX5', 'ev'], ['Coolray', 'suv'], ['Monjaro', 'suv'], ['Okavango', 'suv'], ['Emgrand', 'sedan']],
    T: [['all', 'Tất cả'], ['ev', 'Xe điện'], ['suv', 'SUV'], ['sedan', 'Sedan']],
    C: [['EX5', 'Geely EX5 dán phim cách nhiệt 3M Crystalline CR BLK tại Auto365.vn - Trụ Sở Chính', 'geely-ex5-dan-phim-cach-nhiet-3m-crystalline-cr-blk', N + 'geely-ex5-dan-phim-cach-nhiet-3m-crystalline-cr-blk-1793675398.webp', '2026-11-03', 'Phim cách nhiệt'],
      ['EX2', 'Geely EX2 Max 2026 dán phim cách nhiệt 3M Crystalline CR BLK và Ceramic NR25', 'geely-ex2-max-2026-dan-phim-cach-nhiet-3m-cr-blk-va-ceramic-nr', N + 'geely-ex2-max-2026-dan-phim-3m-crystalline-cr-blk-va-ceramic-4.webp', '2026-11-24', 'Phim cách nhiệt'],
      ['EX2', 'Geely EX2 dán phim 3M Crystalline CR BLK: cấu hình thực tế tại Auto365', 'geely-ex2-dan-phim-cach-nhiet-3m-crystalline-cr-blk', N + 'geely-ex2-dan-phim-cach-nhiet-3m-crystalline-cr-blk-1793870067.webp', '2026-11-05', 'Phim cách nhiệt'],
      ['EX2', 'Geely EX2 dán phim 3M Crystalline Hybrid Pro: cấu hình thực tế tại Auto365', 'geely-ex2-dan-phim-3m-crystalline-hybrid-pro', N + 'geely-ex2-dan-phim-cach-nhiet-3m-crystalline-hybrid-pro-1793000939.webp', '2026-10-26', 'Phim cách nhiệt'],
      ['EX5', 'Geely EX5 2025 lắp camera hành trình Vietmap SpeedMap M1 trước–sau', 'geely-ex5-2025-lap-vietmap-speedmap-m1', N + 'geely-ex5-2025-lap-vietmap-speedmap-m1-1790912534.webp', '2026-10-02', 'Camera']],
    need: [ev('EX2, EX5'), road('Coolray, Monjaro, Okavango', 'Mỗi phiên bản khác thiết kế cản; kỹ thuật viên kiểm tra hốc đèn gầm trước khi chọn mẫu.'), city('Emgrand, Coolray', 'Hốc đèn gầm cần đo trước để chọn lens 2.0 hay 3.0 inch.')],
    done: ['Xe đã làm tại Auto365: <a href="https://auto365.vn/geely-ex5-2025-lap-vietmap-speedmap-m1">EX5 2025 – camera hành trình</a>', NOCASE, NOCASE],
    has: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Geely. Các xe Geely đã làm tại Auto365 là ca phim cách nhiệt 3M (EX2, EX2 Max 2026, EX5) và camera hành trình (EX5 2025). Mọi dòng Geely hiện ở nhóm "Tư vấn cấu hình"' },
  volvo: { B: 'Volvo', id: 'bgvol', ph: 'Volvo XC60 2022', hero: 0,
    lead: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Volvo; trang tổng hợp các xe Volvo đã nâng cấp bi LED, dán phim cách nhiệt, PPF và lắp Android box tại Auto365 để chủ xe tham khảo',
    heavy: 'XC60, XC90',
    M: [['XC40', 'suv'], ['XC60', 'suv'], ['XC90', 'suv'], ['EX30', 'suv'], ['EX40', 'suv'], ['EC40', 'suv'], ['S60', 'sedan'], ['S90', 'sedan'], ['V60 Cross Country', 'sedan']],
    T: [['all', 'Tất cả'], ['suv', 'SUV'], ['sedan', 'Sedan/Wagon']],
    C: [['XC40', 'Volvo XC40 2025 Ultimate lắp bi LED X-Light Quantum X V2', 'volvo-xc40-2025-ultimate-lap-bi-led-x-light-quantum-x-v2', N + 'volvo-xc40-2025-ultimate-lap-bi-led-x-light-quantum-x-v2-1791959093.webp', '2026-10-14', 'Bi LED'],
      ['XC90', 'Volvo XC90 dán phim cách nhiệt 3M Crystalline CR BLK Pro tại Auto365.vn - Trụ Sở Chính', 'dan-phim-cach-nhiet-3m-crystalline-cr-blk-pro-cho-volvo-xc90', N + 'auto365vn-dan-phim-cach-nhiet-3m-crystalline-cr-blk-pro-cho-volvo-xc90-9-img_6a58aee259bb33.90145276.jpg.webp', '2026-07-16', 'Phim cách nhiệt'],
      ['XC90', 'Volvo XC90 bảo vệ sơn zin bằng PPF dòng K Series', 'volvo-xc90-bao-ve-son-zin-xe-bang-ppf-k-series', OLD + '2024/T9/volvo-xc90-bao-ve-son-zin-xe-bang-ppf-k-series/volvo-xc90-bao-ve-son-zin-xe-bang-ppf-k-series-16.jpg.webp', '2024-09-16', 'PPF'],
      ['S60', 'Volvo S60 nâng cấp Android box Vietmap BS10', 'volvo-lap-android-box-vietmap-bs10', OLD + '2024/T11/volvo-lap-android-box-vietmap-bs10/volvo-lap-android-box-vietmap-bs10-8.jpg.webp', '2024-11-26', 'Android box']],
    need: [city('XC40, S60, S90, V60 Cross Country', 'Mỗi đời Volvo khác thiết kế cản; kỹ thuật viên kiểm tra hốc đèn gầm trước khi chọn mẫu.'), road('XC60, XC90', 'Xe chở khách nhiều nên căn chỉnh kỹ để hạn chế chói xe đối diện.'), ev('EX30, EX40, EC40')],
    done: ['Xe đã làm tại Auto365: <a href="https://auto365.vn/volvo-xc40-2025-ultimate-lap-bi-led-x-light-quantum-x-v2">XC40 2025 – bi LED</a>', NOCASE, NOCASE],
    has: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Volvo. Các xe Volvo đã làm tại Auto365 là ca bi LED (XC40 2025 Ultimate), phim cách nhiệt và PPF (XC90), Android box (S60). Mọi dòng Volvo hiện ở nhóm "Tư vấn cấu hình"' },
  volkswagen: { B: 'Volkswagen', id: 'bgvw', ph: 'Volkswagen Teramont 2023', hero: 0,
    lead: 'Auto365 tổng hợp hồ sơ lắp bi gầm X-Light F10 New trên Volkswagen Scirocco, ca lắp đèn gầm dạng rời Titan M40 Ultra V2 trên Viloran 2024 và các xe Volkswagen đã làm phim, PPF tại Auto365',
    lens: 'Hồ sơ Volkswagen Scirocco tại Auto365 dùng bi gầm X-Light F10 New (lens 3.0 inch); Viloran 2024 dùng đèn gầm dạng rời. Mẫu lắp trong hồ sơ chỉ áp dụng cho đúng xe đó.',
    heavy: 'Viloran, Teramont',
    M: [['Scirocco', 'sport', P + 'volkswagen-scirocco-do-den-bi-gam-f10-new'], ['Beetle', 'sport'], ['Golf', 'sedan'], ['Polo', 'sedan'], ['Virtus', 'sedan'], ['Passat', 'sedan'], ['T-Cross', 'suv'], ['Tiguan', 'suv'], ['Teramont', 'suv'], ['Teramont X', 'suv'], ['Touareg', 'suv'], ['Viloran', 'mpv']],
    T: [['all', 'Tất cả'], ['sedan', 'Sedan/Hatchback'], ['suv', 'SUV'], ['mpv', 'MPV'], ['sport', 'Coupe']],
    C: [['Scirocco', 'Volkswagen Scirocco độ đèn bi gầm X-Light F10 New', 'volkswagen-scirocco-do-den-bi-gam-f10-new', OLD + '2024/T11/volkswagen-scirocco-do-den-bi-gam-f10-new/volkswagen-scirocco-do-den-bi-gam-f10-new-11.jpg.webp', '2024-11-06', BG],
      ['Viloran', 'Volkswagen Viloran 2024 lắp đèn gầm dạng rời Titan M40 Ultra V2', 'volkswagen-viloran-2024-lap-den-gam-dang-roi-titan-m40-ultra-v2', N + 'auto365vn-volkswagen-viloran-lap-den-gam-dang-roi-titan-m40-ultra-v2-img_6a703443b087f1.21147795.jpg.webp', '2026-08-03', 'Đèn gầm rời'],
      ['Viloran', 'Volkswagen Viloran dán phim 3M Crystalline CR BLK cấu hình 50/35/15', 'volkswagen-viloran-dan-phim-3m-cr-blk', N + 'auto365vn-volkswagen-viloran-dan-phim-3m-cr-blk-img_6aab54e5accf49.02627310.webp', '2026-09-17', 'Phim cách nhiệt'],
      ['Viloran', 'Volkswagen Viloran dán PPF 3M: quy trình và giá tham khảo', 'volkswagen-viloran-dan-ppf-3m', N + 'volkswagen-viloran-dan-ppf-3m-1791367388.webp', '2026-10-07', 'PPF']],
    need: [city('Polo, Virtus, Golf, Passat, Scirocco, Beetle', 'Hốc đèn gầm cần đo trước để chọn lens 2.0 hay 3.0 inch.'), road('T-Cross, Tiguan, Teramont, Teramont X, Touareg', 'Mỗi phiên bản khác thiết kế cản; kỹ thuật viên kiểm tra hốc đèn gầm trước khi chọn mẫu.'), ['MPV gia đình, chạy dịch vụ', 'Viloran', ['Xe chở khách nhiều nên căn chỉnh kỹ để hạn chế chói xe đối diện.', 'Viloran 2024 trong ca tại Auto365 dùng đèn gầm dạng rời Titan M40 Ultra V2.', 'Xe dùng đèn nhiều giờ nên ưu tiên đi dây gọn, có bảo vệ mạch.']]],
    done: ['Đã lắp: <a href="https://auto365.vn/volkswagen-scirocco-do-den-bi-gam-f10-new">Scirocco – X-Light F10 New</a>', NOCASE, 'Xe đã làm tại Auto365: <a href="https://auto365.vn/volkswagen-viloran-2024-lap-den-gam-dang-roi-titan-m40-ultra-v2">Viloran 2024 – đèn gầm rời</a>'],
    has: 'Dòng đã có hồ sơ lắp bi gầm thực tế là Scirocco (X-Light F10 New); Viloran 2024 lắp đèn gầm dạng rời Titan M40 Ultra V2, và Viloran đã làm phim cách nhiệt, PPF tại Auto365. Các dòng Volkswagen còn lại hiện ở nhóm "Tư vấn cấu hình"',
    lensFaq: 'Trong hồ sơ tại Auto365, Volkswagen Scirocco lắp X-Light F10 New (lens 3.0 inch); Viloran 2024 dùng đèn gầm dạng rời Titan M40 Ultra V2.' },
  lexus: { B: 'Lexus', id: 'bglex', ph: 'Lexus RX350 2018', hero: 0,
    lead: 'Auto365 tổng hợp hồ sơ lắp bi gầm X-Light F10 Turbo trên Lexus ES350 và bi gầm X-Light F10 New trên LX570 Super Sport, cùng các xe Lexus đã nâng cấp bi LED, bi laser tại Auto365',
    lens: 'Hai hồ sơ Lexus tại Auto365 dùng bi gầm X-Light F10 Turbo (ES350) và X-Light F10 New (LX570), đều lens 3.0 inch; mẫu lắp trong hồ sơ chỉ áp dụng cho đúng xe đó.',
    heavy: 'RX, GX, LX',
    M: [['ES', 'sedan', P + 'lexus-do-den-f10-turbo'], ['LX', 'suv', P + 'lexus-lx570-super-sport-voi-combo-anh-sang-nha-x-light'], ['LS', 'sedan'], ['IS', 'sedan'], ['RX', 'suv'], ['NX', 'suv'], ['UX', 'suv'], ['GX', 'suv'], ['LM', 'mpv']],
    T: [['all', 'Tất cả'], ['sedan', 'Sedan'], ['suv', 'SUV'], ['mpv', 'MPV']],
    C: [['ES', 'Lexus ES350 nâng cấp bi gầm X-Light F10 Turbo', 'lexus-do-den-f10-turbo', OLD + '2024/T8/lexus-es350-do-den/do-denf10-turbo-cho-lexus-es350.jpg.webp', '2024-08-15', BG],
      ['LX', 'Lexus LX570 Super Sport lắp bi gầm X-Light F10 New (combo bi laser F+ Ultra Mini)', 'lexus-lx570-super-sport-voi-combo-anh-sang-nha-x-light', P + 'uploads/images/2022/06/03/lexus-lx570-nang-cap-anh-sang-x-light.jpg.webp', '2022-06-02', BG],
      ['LX', 'Lexus LX570 lắp bi LED X-Light F+ Pro V2', 'lexus-lx570-nang-cap-bi-led-x-light-f-pro-v2', N + 'auto365vn-lexus-lx-570-khi-hoan-thien-nang-cap-bi-led-xlight-f-pro-v2-img_6a5d8d5a4f0ff6.96284711.jpg.webp', '2026-07-20', 'Bi LED'],
      ['LX', 'Lexus LX570 5.7L V8 (2012–2015) lắp bi laser Titan Platinum Plus', 'lexus-lx570-2012-2015-lap-bi-laser-titan-platinum-plus', N + 'lexus-lx570-lap-bi-laser-titan-platinum-plus.webp', '2026-11-14', 'Bi laser'],
      ['LS', 'Lexus LS 600HL 2009 lắp bi laser Titan Platinum Plus', 'lexus-ls-600hl-2009-lap-bi-laser-titan-platinum-plus', N + 'lexus-ls-600hl-2009-lap-bi-laser-titan-platinum-plus.webp', '2026-11-19', 'Bi laser'],
      ['GX', 'Lexus GX470 độ đèn bi laser Titan Platinum Plus và X-Light S8 Pro', 'lexus-do-den-bi-laser-titan-platinum-plus-va-naoevo-s8-pro', OLD + '2024/T8/lexus-do-den-bi-laser-titan-platinum-plus-va-naoevo-s8-pro/lexus-do-den-bi-laser-titan-platinum-plus-va-naoevo-s8-pro%20-3.jpg.webp', '2024-08-09', 'Bi laser'],
      ['ES', 'Lexus ES 350h Luxury 2026 dán phim cách nhiệt 3M Crystalline CR BLK', 'lexus-es-350h-luxury-2026-dan-phim-cach-nhiet-3m-crystalline-cr-blk', N + 'lexus-es-350h-luxury-2026-dan-phim-cach-nhiet-3m-crystalline.webp', '2026-11-20', 'Phim cách nhiệt'],
      ['RX', 'Lexus RX 500h dán phim cách nhiệt 3M Crystalline CR BLK', 'lexus-rx-500h-dan-phim-cach-nhiet-3m-crystalline-cr-blk', N + 'lexus-rx-500h-dan-phim-cach-nhiet-3m-crystalline-cr-blk.webp', '2026-11-09', 'Phim cách nhiệt'],
      ['RX', 'Lexus RX350 dán phim 3M CR BLK cho xe đi cả ngày lẫn đêm', 'lexus-rx350-dan-phim-3m-cr-blk', N + 'lexus-rx350-dan-phim-3m-cr-blk-1790847928.webp', '2026-10-01', 'Phim cách nhiệt'],
      ['LM', 'Lexus LM 500h dán phim cách nhiệt CR BLK 50', 'lexus-lm-500h-dan-phim-cach-nhiet-cr-blk-50', P + 'uploads/images/tintuc/2025/T9/phim-cach-nhiet-3m-cr-blk-50-xe-lexus-lm-500h/dan-phim-cach-nhiet-cr-blk-50-xe-lexus-lm-500h-chinh-hang.png.webp', '2025-09-22', 'Phim cách nhiệt']],
    need: [city('ES, IS, UX, NX', 'ES350 đã có ca lắp F10 Turbo tại Auto365; đời khác cần kiểm tra lại hốc đèn.'), road('RX, GX, LX', 'LX570 Super Sport đã có ca lắp F10 New tại Auto365; căn chỉnh kỹ để hạn chế chói xe đối diện.'), elec('LS, LM, RX hybrid, ES hybrid')],
    done: ['Đã lắp: <a href="https://auto365.vn/lexus-do-den-f10-turbo">ES350 – X-Light F10 Turbo</a>', 'Đã lắp: <a href="https://auto365.vn/lexus-lx570-super-sport-voi-combo-anh-sang-nha-x-light">LX570 Super Sport – X-Light F10 New</a>', NOCASE],
    has: 'Dòng đã có hồ sơ lắp bi gầm thực tế là ES (ES350 – X-Light F10 Turbo) và LX (LX570 Super Sport – X-Light F10 New). Lexus LX570, LS 600HL, GX470 đã nâng cấp bi LED, bi laser; ES 350h, RX, LM đã dán phim cách nhiệt tại Auto365. Các dòng Lexus còn lại hiện ở nhóm "Tư vấn cấu hình"',
    lensFaq: 'Trong hồ sơ tại Auto365, Lexus ES350 lắp X-Light F10 Turbo và LX570 Super Sport lắp X-Light F10 New (đều lens 3.0 inch).' },
  subaru: { B: 'Subaru', id: 'bgsub', ph: 'Subaru Forester 2020', hero: 2,
    lead: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Subaru',
    heavy: 'Forester, Outback',
    M: [['Forester', 'suv'], ['Outback', 'suv'], ['Crosstrek', 'suv'], ['XV', 'suv'], ['Evoltis', 'suv'], ['BRZ', 'sport'], ['WRX', 'sport']],
    T: [['all', 'Tất cả'], ['suv', 'SUV/Crossover'], ['sport', 'Thể thao']],
    C: [['Forester', 'Subaru Forester 2024 2.0i-L lắp camera hành trình Vietmap TS-2K Lite', 'subaru-forester-2024-20i-l-lap-camera-hanh-trinh-vietmap-ts-2k-lite', N + 'subaru-forester-2024-20i-l-lap-camera-hanh-trinh-vietmap-ts.webp', '2026-11-10', 'Camera'],
      ['Forester', 'Subaru Forester 2.0 i-S EyeSight 2020 lắp 70mai A500S', 'subaru-forester-20-i-s-eyesight-2020-lap-70mai-a500s', N + 'subaru-forester-20-i-s-eyesight-2020-lap-camera-hanh-trinh-7-1791430613.webp', '2026-10-08', 'Camera'],
      ['Forester', 'Subaru Forester dán 3M CR BLK: hồ sơ thực tế và lưu ý EyeSight', 'subaru-forester-dan-phim-3m-cr-blk', N + 'auto365vn-subaru-forester-danphim-3m-cr-blk-img_6ab38d25d29a73.57512366.webp', '2026-09-23', 'Phim cách nhiệt'],
      ['Forester', 'Subaru Forester i-L 2020 lắp camera hành trình 70mai A510', 'subaru-forester-i-l-2020-lap-camera-hanh-trinh-70mai-a510', N + 'auto365vn-subaru-forester-i-l-2020-lap-camera-hanh-trinh-70mai-a510-8-img_6aa373c9b4c7d4.71355604.webp', '2026-09-11', 'Camera'],
      ['Outback', 'Subaru Outback 2017 2.5i-S lắp camera hành trình Vietmap S720 trước–sau', 'subaru-outback-2017-2-5i-s-lap-vietmap-s720', N + 'auto365vn-subaru-outback-2017-2-5i-s-lap-vietmap-s720-img_6ab381732ab3a0.01625493.webp', '2026-09-23', 'Camera']],
    need: [road('Forester, Outback, Evoltis', 'Xe có EyeSight: kỹ thuật viên kiểm tra để đèn lắp thêm không ảnh hưởng hệ thống hỗ trợ lái.'), city('Crosstrek, XV', 'Hốc đèn gầm cần đo trước để chọn lens 2.0 hay 3.0 inch.'), ['Xe thể thao', 'BRZ, WRX', ['Cản thấp, hốc đèn nhỏ; kỹ thuật viên kiểm tra khoảng hở trước khi chọn mẫu.', 'Không chọn chỉ theo số W; kỹ thuật viên cho xem vùng sáng thực tế trước khi chốt.', 'Hạn chế cắt khoét cản; ưu tiên pát và giắc phù hợp với xe.']]],
    done: [NOCASE, NOCASE, NOCASE],
    has: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Subaru. Các xe Subaru đã làm tại Auto365 là Forester (camera hành trình, phim cách nhiệt) và Outback 2017 (camera hành trình). Mọi dòng Subaru hiện ở nhóm "Tư vấn cấu hình"' },
  jeep: { B: 'Jeep', id: 'bgjee', ph: 'Jeep Wrangler 2021', hero: 0,
    lead: 'Auto365 tổng hợp hồ sơ lắp bi gầm X-Light F10 New trên Jeep Wrangler Rubicon',
    lens: 'Hồ sơ Jeep Wrangler Rubicon tại Auto365 dùng bi gầm X-Light F10 New (lens 3.0 inch); mẫu lắp trong hồ sơ chỉ áp dụng cho đúng xe đó.',
    heavy: 'Wrangler, Gladiator, Grand Cherokee',
    M: [['Wrangler', 'offroad', P + 'jeep-rubicon-nang-cap-bi-gam-x-light-f10-new-cung-goi-phim-cach-nhiet-3m-crystalline'], ['Gladiator', 'offroad'], ['Grand Cherokee', 'suv'], ['Cherokee', 'suv'], ['Compass', 'suv']],
    T: [['all', 'Tất cả'], ['offroad', 'Off-road/Bán tải'], ['suv', 'SUV']],
    C: [['Wrangler', 'Jeep Wrangler Rubicon nâng cấp bi gầm X-Light F10 New cùng gói phim 3M Crystalline', 'jeep-rubicon-nang-cap-bi-gam-x-light-f10-new-cung-goi-phim-cach-nhiet-3m-crystalline', OLD + '2023/T11/jeep-rubicon/jeep-rubicon.png.webp', '2023-11-01', BG],
      ['Wrangler', 'Jeep Wrangler Rubicon 2023 lắp camera hành trình Vietmap TS-C9P', 'jeep-wrangler-rubicon-2023-lap-camera-hanh-trinh-vietmap-ts-c9p', N + 'jeep-wrangler-rubicon-2023-lap-camera-hanh-trinh-vietmap-ts-1790821590.webp', '2026-10-01', 'Camera']],
    need: [['Off-road, đi đường xấu', 'Wrangler, Gladiator', ['Wrangler Rubicon đã có ca lắp F10 New tại Auto365; đời khác cần kiểm tra lại hốc đèn.', 'Xe hay lội nước, đi đường xấu nên kiểm tra độ kín giắc và cố định dây sau khi lắp.', 'Nếu khó nhìn xa, nên kiểm tra đèn chính trước; bi gầm hỗ trợ vùng gần và lề đường.']], road('Grand Cherokee, Cherokee', 'Căn chỉnh kỹ để hạn chế chói xe đối diện.'), city('Compass', 'Hốc đèn gầm cần đo trước để chọn lens 2.0 hay 3.0 inch.')],
    done: ['Đã lắp: <a href="https://auto365.vn/jeep-rubicon-nang-cap-bi-gam-x-light-f10-new-cung-goi-phim-cach-nhiet-3m-crystalline">Wrangler Rubicon – X-Light F10 New</a>', NOCASE, NOCASE],
    has: 'Dòng đã có hồ sơ lắp bi gầm thực tế là Wrangler (Wrangler Rubicon – X-Light F10 New). Wrangler Rubicon 2023 đã lắp camera hành trình tại Auto365. Các dòng Jeep còn lại hiện ở nhóm "Tư vấn cấu hình"',
    lensFaq: 'Trong hồ sơ tại Auto365, Jeep Wrangler Rubicon lắp X-Light F10 New (lens 3.0 inch).' },
  omoda: { B: 'Omoda', id: 'bgomo', ph: 'Omoda C5 2024', hero: 0,
    lead: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Omoda; trang tổng hợp ca Omoda C5 đã nâng cấp bi LED X-Light X5 Ultra tại Auto365 để chủ xe tham khảo',
    heavy: 'C5, C7',
    M: [['C5', 'suv'], ['E5', 'suv'], ['C7', 'suv'], ['S5', 'sedan']],
    T: [['all', 'Tất cả'], ['suv', 'SUV/Crossover'], ['sedan', 'Sedan']],
    C: [['C5', 'Omoda C5 nâng cấp combo đèn tăng sáng (bi LED X-Light X5 Ultra)', 'omoda-c5-nang-cap-combo-den-tang-sang', P + 'uploads/images/tintuc/2025/T9/omoda-c5-nang-cap-combo-den-tang-sang/1.jpg.webp', '2025-09-06', 'Bi LED'],
      ['C5', 'Omoda C5 nâng cấp gạt mưa Cleanbro chính hãng', 'omoda-c5-nang-cap-gat-mua-cleanbro', P + 'uploads/images/tintuc/2025/T9/omoda-c5-nang-cap-gat-mua-cleanbro/omoda-c5-nang-cap-gat-mua-cleanbro-chinh-hang.png.webp', '2025-09-10', 'Gạt mưa']],
    need: [city('C5, C7', 'Mỗi phiên bản khác thiết kế cản; kỹ thuật viên kiểm tra hốc đèn gầm trước khi chọn mẫu.'), ev('E5'), road('C5, C7, S5', 'Căn chỉnh kỹ để hạn chế chói xe đối diện.')],
    done: ['Xe đã làm tại Auto365: <a href="https://auto365.vn/omoda-c5-nang-cap-combo-den-tang-sang">C5 – bi LED X5 Ultra</a>', NOCASE, NOCASE],
    has: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Omoda. Omoda C5 đã nâng cấp bi LED X-Light X5 Ultra và gạt mưa Cleanbro tại Auto365. Mọi dòng Omoda hiện ở nhóm "Tư vấn cấu hình"' },
  jaecoo: { B: 'Jaecoo', id: 'bgjae', ph: 'Jaecoo J7 2025', hero: 0,
    lead: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Jaecoo',
    heavy: 'J7',
    M: [['J5', 'suv'], ['J5 EV', 'suv'], ['J7', 'suv'], ['J7 PHEV', 'suv']],
    T: [['all', 'Tất cả'], ['suv', 'SUV']],
    C: [['J5', 'Jaecoo J5 dán phim cách nhiệt 3M CR BLK 50 và IR 15', 'jaecoo-j5-nen-dan-phim-cach-nhiet-loai-nao', N + 'jaecoo-j5-nen-dan-phim-cach-nhiet-loai-nao-1791448868.webp', '2026-10-08', 'Phim cách nhiệt']],
    need: [city('J5', 'Hốc đèn gầm cần đo trước để chọn lens 2.0 hay 3.0 inch.'), ev('J5 EV, J7 PHEV'), road('J7', 'Mỗi phiên bản khác thiết kế cản; kỹ thuật viên kiểm tra hốc đèn gầm trước khi chọn mẫu.')],
    done: [NOCASE, NOCASE, NOCASE],
    has: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Jaecoo. Jaecoo J5 đã dán phim cách nhiệt 3M tại Auto365. Mọi dòng Jaecoo hiện ở nhóm "Tư vấn cấu hình"' },
  'lynk-co': { B: 'Lynk & Co', id: 'bglyn', ph: 'Lynk & Co 06 2024', hero: 0,
    lead: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Lynk & Co',
    heavy: '01, 05, 09',
    M: [['01', 'suv'], ['05', 'suv'], ['06', 'suv'], ['08', 'suv'], ['09', 'suv'], ['03', 'sedan']],
    T: [['all', 'Tất cả'], ['suv', 'SUV'], ['sedan', 'Sedan']],
    C: [['06', 'Lynk & Co 06 2024 Hyper Pro lắp 70mai A800SE 2 kênh', 'lynk-co-06-2024-hyper-pro-lap-70mai-a800se', N + 'auto365vn-lynk-co-06-2024-hyper-pro-lap-70mai-a800se-img_6a9e7c3c696cf0.38806589.webp', '2026-09-07', 'Camera'],
      ['06', 'Lynk & Co 06 dán phim cách nhiệt 3M', 'lynk-co-06-dan-phim-cach-nhiet-3m', N + 'auto365vn-lynk-co-06-dan-phim-cach-nhiet-3m-img_6a896e81764eb7.93060792.png.webp', '2026-08-22', 'Phim cách nhiệt']],
    need: [city('06, 03', 'Hốc đèn gầm cần đo trước để chọn lens 2.0 hay 3.0 inch.'), road('01, 05, 09', 'Mỗi phiên bản khác thiết kế cản; kỹ thuật viên kiểm tra hốc đèn gầm trước khi chọn mẫu.'), elec('08, 09, 01 PHEV')],
    done: [NOCASE, NOCASE, NOCASE],
    has: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Lynk & Co. Lynk & Co 06 đã lắp camera hành trình và dán phim cách nhiệt tại Auto365. Mọi dòng Lynk & Co hiện ở nhóm "Tư vấn cấu hình"' },
  skoda: { B: 'Skoda', id: 'bgsko', ph: 'Skoda Kodiaq 2024', hero: 0,
    lead: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Skoda',
    heavy: 'Kodiaq, Karoq',
    M: [['Kodiaq', 'suv'], ['Karoq', 'suv'], ['Kushaq', 'suv'], ['Slavia', 'sedan'], ['Octavia', 'sedan']],
    T: [['all', 'Tất cả'], ['suv', 'SUV'], ['sedan', 'Sedan']],
    C: [['Kodiaq', 'Skoda Kodiaq Style 2024 lắp Vietmap SpeedMap M1 trước–sau', 'skoda-kodiaq-style-2024-lap-vietmap-speedmap-m1-truoc-sau', N + 'skoda-kodiaq-style-2024-lap-camera-hanh-trinh-m1-1791526775.webp', '2026-10-09', 'Camera']],
    need: [road('Kodiaq, Karoq', 'Mỗi phiên bản khác thiết kế cản; kỹ thuật viên kiểm tra hốc đèn gầm trước khi chọn mẫu.'), city('Slavia, Octavia, Kushaq', 'Hốc đèn gầm cần đo trước để chọn lens 2.0 hay 3.0 inch.'), elec('Kodiaq, Octavia')],
    done: [NOCASE, NOCASE, NOCASE],
    has: 'Auto365 chưa có hồ sơ lắp bi gầm trên xe Skoda. Skoda Kodiaq Style 2024 đã lắp camera hành trình tại Auto365. Mọi dòng Skoda hiện ở nhóm "Tư vấn cấu hình"' },
};
const slug = process.argv[2], c = CFG[slug]; if (!c) throw new Error('brand?');
const B = c.B, norm = slug.replace(/-/g, '');
const hasBG = c.C.some((x) => x[5] === BG);
let s = fs.readFileSync('auto365/bi-gam/peugeot/content-src.html', 'utf8');
const R = (re, v) => { const has = typeof re === 'string' ? s.includes(re) : re.test(s); if (!has) throw new Error('miss ' + re); s = typeof re === 'string' ? s.split(re).join(v) : s.replace(re, v); };
const hc = c.C[c.hero];
R(/(<p class="bgvf-lead">[^<]*?)Auto365 tổng hợp hồ sơ lắp bi gầm X-Light trên Peugeot 5008 và 3008/, '$1' + c.lead);
R(/<!-- hero-src:[^>]*-->/, '<!-- hero-src: ' + hc[3] + ' -->');
R(/<img src="hinh\/hero-peugeot-bi-gam.webp"[^>]*>/, `<img src="hinh/hero-${slug}-bi-gam.webp" alt="${hc[1]} tại Auto365" width="__W__" height="__H__" fetchpriority="high">`);
R(/Hai hồ sơ Peugeot tại Auto365 dùng hai cỡ lens[^<]*/, c.lens || lensNo(B));
R('(5008, Traveller)', '(' + c.heavy + ')');
const i = s.indexOf('<div class="bgvf-need">'), j = s.indexOf('<p class="bgvf-nnote">');
s = s.slice(0, i) + '<div class="bgvf-need">\n' + c.need.map((n, k) => `  <article class="bgvf-nd"><h3>${n[0]}</h3><p class="who">${n[1]}</p><div class="bd">\n   <ul>${n[2].map((x) => '<li>' + x + '</li>').join('')}</ul>\n   <p class="done">${c.done[k]}</p></div></article>`).join('\n') + '\n </div>\n ' + s.slice(j);
R(/<details><summary>Dòng Peugeot nào đã có hồ sơ[^<]*<\/summary><p>[^:]*(: bấm thẻ)/, `<details><summary>Dòng ${B} nào đã có hồ sơ lắp bi gầm, xe nào đã làm tại Auto365?</summary><p>${c.has}$1`);
R('Trong hai hồ sơ tại Auto365, Peugeot 5008 2019 lắp X-Light F10 Hyper 2.0 (lens 2.0 inch), còn Peugeot 3008 lắp X-Light F10 New (lens 3.0 inch).', c.lensFaq || faqNo(B));
// trạng thái: bản dựng mới, chưa duyệt
R(/ · Rà soát kỹ thuật: <a[^>]*>[^<]*<\/a> \(<time class="bgvf-rv"[^)]*\)/, '');
R(/<time class="bgvf-dm" datetime="[^"]*">[^<]*<\/time>/, '<time class="bgvf-dm" datetime="2026-11-26">26/11/2026</time>');
R(/(<aside class="bgvf-ic-chk"[\s\S]*?<\/b><p>)[\s\S]*?(<\/p><\/div><\/aside>)/, `$1<b>Trạng thái: CHỜ DUYỆT.</b> Dựng 26/11/2026 theo khung hub Peugeot. Mục xe thực tế gồm ${c.C.filter((x) => x[5] === BG).length} ca bi gầm và ${c.C.filter((x) => x[5] !== BG).length} ca hạng mục khác (theo yêu cầu 26/11: hãng chưa đủ ca bi gầm thì đưa xe đã làm dịch vụ khác tại Auto365, có nhãn hạng mục). Ảnh thẻ dòng xe chưa có, chờ designer. Cần xác nhận: danh sách ${c.M.length} dòng xe, cơ sở và ngày thi công từng ca, kiểm duyệt kỹ thuật.$2`);
const q = (x) => "'" + x.replace(/'/g, "\\'") + "'";
R(/var M=\[[\s\S]*?\]\];/, 'var M=[' + c.M.map((m) => `[${q(m[0])},${q(m[1])},${q(m[3] || '')},${m[2] ? 'P+' + q(m[2].slice(P.length)) : "''"}]`).join(',\n') + '];');
R(/var T=\[[^;]*;/, 'var T=[' + c.T.map((t) => `[${q(t[0])},${q(t[1])}]`).join(',') + '];');
R(/\/\/ \[dòng xe, tiêu đề bài[^\n]*\nvar C=\[[\s\S]*?\]\];/, '// [dòng xe, tiêu đề bài, slug bài trên auto365.vn, ảnh, ngày đăng, hạng mục] — bài đã đăng trên auto365.vn; ca hạng mục khác ghi rõ nhãn\nvar C=[' + c.C.map((x) => JSON.stringify(x)).join(',\n') + '];');
R(/var NEW=\[[^\]]*\]/, 'var NEW=[' + c.M.map((m) => q(m[0])).join(',') + ']');
// mục xe thực tế: ca bi gầm + ca hạng mục khác
R("<span class=\"tag\">✓ Bi gầm</span>", "<span class=\"tag\">✓ '+esc(c[5]||'Bi gầm')+'</span>");
R('})(LM(c))', "})(c[5]==='Bi gầm'?LM(c):['',''])");
R('var brand=function(c){return LM(c)[0]}', "var brand=function(c){return c[5]||'Bi gầm'}");
R('aria-label="Lọc theo hãng đèn"><span class="bgvf-cl">Hãng đèn:</span>', 'aria-label="Lọc theo hạng mục"><span class="bgvf-cl">Hạng mục:</span>');
R('C.some(function(c){return c[0]===m[0]})', "C.some(function(c){return c[0]===m[0]&&c[5]==='Bi gầm'})");
R('var n=function(x){return C.filter(function(c){return c[0]===x[0]}).length}', "var n=function(x){return C.filter(function(c){return c[0]===x[0]&&c[5]==='Bi gầm'}).length}");
R('Xe Peugeot đã lắp bi gầm tại Auto365</h2></div>', 'Xe Peugeot đã làm tại Auto365</h2><p class="bgvf-csub">' + (hasBG ? 'Gồm ca lắp bi gầm và ca làm hạng mục khác' : 'Chưa có ca bi gầm; dưới đây là các xe đã làm hạng mục khác') + ' (bi LED, phim cách nhiệt, PPF, camera…) tại Auto365, nhãn trên ảnh ghi hạng mục. Chỉ ca bi gầm/đèn gầm dùng để tham khảo cấu hình đèn gầm.</p></div>');
R('</style>', '.bgvf-csub{margin:6px 0 0;color:#5b6570;font-size:14px;max-width:720px}\n</style>');
s = s.split('đã lắp bi gầm</a>').join('đã làm tại Auto365</a>');
s = s.replace(/Peugeot/g, B).replace(/\/bi-gam-peugeot-/g, '/bi-gam-' + slug + '-').replace(/replace\(\/peugeot\/g,''\)/g, 'replace(/' + norm + "/g,'')").replace(/peugeot/g, slug);
// tên dòng đã chứa tên hãng (MG5, MG4 EV) thì không lặp "MG MG5"
s = s.split(`'${B} '+esc(m[0])`).join(`(m[0].indexOf('${B}')===0?'':'${B} ')+esc(m[0])`).split(`'${B} '+esc(c[0])`).join(`(c[0].indexOf('${B}')===0?'':'${B} ')+esc(c[0])`);
fs.mkdirSync(`auto365/bi-gam/${slug}/hinh`, { recursive: true });
fs.writeFileSync(`auto365/bi-gam/${slug}/content-src.html`, s);
for (const w of ['5008', '3008', 'Traveller', 'F10 Hyper', 'Peugeot', 'peugeot', 'Nguyễn Quang Đạo', 'ĐÃ DUYỆT']) if (s.includes(w)) console.log('LEFT', w, s.substr(s.indexOf(w) - 60, 120).replace(/\n/g, ' '));
// build + export script
const GEN = { he: 'Mặt tiền chi nhánh Auto365, hệ thống hơn 90 chi nhánh tại 33 tỉnh thành', cc: 'Căn đường cắt Cos trên bảng test tại xưởng Auto365', tv: 'Kỹ thuật viên Auto365 tư vấn đèn gầm theo từng xe' };
const tr = (t) => t.replace(/bgpeu/g, c.id).replace(/Peugeot/g, B).replace(/peugeot/g, slug);
let b = tr(fs.readFileSync('scripts/build-bi-gam-peugeot.mjs', 'utf8'))
  .replace(/VD: [^"]*2019"/, 'VD: ' + c.ph + '"')
  .replace(/("hinh\/ly-do-he-thong.webp",")[^"]*"/, '$1' + GEN.he + '"')
  .replace(/("hinh\/ly-do-can-chinh.webp",")[^"]*"/, '$1' + GEN.cc + '"')
  .replace(/("hinh\/ly-do-tu-van.webp",")[^"]*"/, '$1' + GEN.tv + '"')
  .replace(/const title = '[^']*';/, `const title = 'Bi gầm ${B}: chọn theo dòng xe, xe đã làm tại Auto365 | Auto365';`)
  .replace(/const desc = '[^']*';/, `const desc = '${hasBG ? `Xem hồ sơ bi gầm ${B} đã lắp và xe ${B} đã làm tại Auto365` : `Chọn bi gầm cho xe ${B} theo đời xe; xem xe ${B} đã làm tại Auto365`}; gửi đời xe để kiểm tra hốc đèn, nguồn điện và báo chi phí.';`)
  .replace(`'Bài hồ sơ lắp bi gầm trên xe ${B} tại Auto365'`, `'Xe ${B} đã làm tại Auto365 (bi gầm và hạng mục khác)'`)
  .replace("if (!models.length || !cases.length || !faqs.length)", 'if (!cases.length || !faqs.length)')
  .replace(/    itemList\('dong-xe', ([^\n]*), models\),/, "    ...(models.length ? [itemList('dong-xe', $1, models)] : []),");
fs.writeFileSync(`scripts/build-bi-gam-${slug}.mjs`, b);
let e = tr(fs.readFileSync('scripts/export-bi-gam-peugeot-docs.mjs', 'utf8')).replace('Bộ lọc: dòng xe, hãng đèn (suy từ tên đèn trong tiêu đề bài).', 'Bộ lọc: dòng xe, hạng mục (bi gầm / đèn gầm rời / bi LED / phim / PPF / camera).');
const a = e.indexOf('const CASEINFO = {'), z = e.indexOf('};', a) + 2;
const cid = (x) => c.id.slice(2).toUpperCase() + '-' + x[0].toUpperCase().replace(/[^A-Z0-9]+/g, '') + '-' + (x[1].match(/\b(20\d\d)\b/) || [, 'NA'])[1] + '-' + x[5].normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/gi, 'D').toUpperCase().replace(/[^A-Z]+/g, '').slice(0, 6);
e = e.slice(0, a) + 'const CASEINFO = {\n' + c.C.map((x) => `  ${q(P + x[2])}: [${q(cid(x))}, ${q('Xe: ' + x[1] + ' (theo bài). Hạng mục: ' + x[5] + '. Cơ sở và thời điểm thi công: chờ chủ quản xác nhận (ngày đăng ' + x[4] + ' không phải ngày làm). Tư liệu: ảnh trong bài (ảnh Auto365).')}],`).join('\n') + '\n};' + e.slice(z);
fs.writeFileSync(`scripts/export-bi-gam-${slug}-docs.mjs`, e);
console.log('ok', slug, 'hasBG', hasBG);
