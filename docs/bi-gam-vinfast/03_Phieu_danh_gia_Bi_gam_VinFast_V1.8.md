# 03 — Phiếu đánh giá SEO/GEO V1.8: Hub Bi gầm VinFast

| Trường | Giá trị |
|---|---|
| Chuẩn | Auto365 Quy chuẩn SEO/GEO HTML V1.8 — đủ 12 tiêu chí (có U3), thang /100. Ngưỡng: tổng ≥95, SEO ≥28,5/30, GEO ≥23,75/25 |
| Bản chấm | Preview `auto365/bi-gam/vinfast/index.html` — SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_VinFast.md) (dateModified 2026-10-27; SHA tính trên nội dung LF = đúng file Cloudflare phục vụ) |
| Ngày chấm | 22/10/2026 (lượt 1: 91,0 · lượt 2 sau khi anh Đạo duyệt: 92,3 · lượt 3 sau khối "Chọn theo nhu cầu": 93,1 · lượt 4 sau duyệt bổ sung + lead test: 94,9 · lượt 5 sau CRM xác nhận lead 228; phần sẽ bổ sung sau khi đăng không trừ điểm) |
| Loại chấm | Tự chấm của team triển khai trên preview — **không phải phiếu nghiệm thu** |
| Kiểm duyệt kỹ thuật | Nguyễn Quang Đạo — duyệt 22/10/2026, duyệt lại bản vá 23/10 và bản vá R2 24/10/2026; `lastReviewed` 2026-10-27 (duyệt lại 27/10); xem [05](05_Phieu_duyet_Bi_gam_VinFast.md) |

## R6 reviewer 28/10/2026 (V1.9) và bản vá 29/10/2026

Reviewer R6: **57,3/60** phần đủ bằng chứng + **CX /40**; đã đóng Bỏ lọc và 3 lỗi JS của R5 (nạp jQuery trước shell, commit 7a529ee). Chuyển SEO/IT chốt bản tích hợp: CÓ. Điểm "≈93/100" ở mục dưới là tự chấm theo thang khác, không so với 57,3/60.

| Mục R6 | Đã làm 29/10/2026 | Bằng chứng | Còn |
|---|---|---|---|
| §5 câu Limo Green | Đổi "Limo Green lắp được cả mẫu lens 2.0 và 3.0 inch" → "Đã lắp: Limo Green 2025 – X-Light F10 New (lens 3.0 inch), Limo Green – X-Light F10 2.0 New (lens 2.0 inch). Từng mã đèn vẫn cần kiểm tra xe trước khi chốt phương án." — 2 link bài case đã đăng (đều 200) | DOM preview | — |
| §7.1 / §11 U3: không đọc được GitHub | Bản sao 01–05 xuất cùng build tại `https://preview-365group.pages.dev/bi-gam/vinfast/ho-so/` (script export copy tự động); khối nội bộ link thẳng | 01 ghi SHA của index.html bản này | Reviewer đối chiếu |
| §7.2 bàn phím | Lỗi thật: Enter "Bỏ lọc" xong focus rơi về `body` (nút bị ẩn). Sửa: focus về chip "Tất cả". Kiểm phím thật: Enter chip VF 3 → 1 bài; Space chip X-Light → 0 bài + thông báo; Tab → "Bỏ lọc"; Enter → 10 bài, focus "Tất cả"; Enter trên summary → accordion mở | Kiểm local cùng build | Thiết bị thật |
| §7.2 đa thiết bị | scrollWidth ≤ innerWidth ở 375/768/1024/1366px (chênh = thanh cuộn) | Kiểm local cùng build | Thiết bị thật |
| §7.3 production | — | — | IT: shell/OG/robots+`X-Robots-Tag`/canonical, API/CRM/tracking, GSC/CWV |
| §7.4 danh bạ | — | — | Rating/Maps tại nguồn danh bạ |

dateModified 2026-10-29; lastReviewed 2026-10-29 — anh Đạo xác nhận nguồn từng case và bản vá R6 (xem 05). Tự chấm sau xác nhận: G3 5/5 → ≈94,4/100; SEO 28,8/30 và GEO 24,1/25 qua ngưỡng; tổng còn thiếu ≈0,6 — chờ test máy thật (U1).

## Tự chấm lại 28/10/2026 sau bản vá (thang 100 của phiếu 28/10)

Tự chấm trên preview theo quy ước: không trừ vì production chưa đăng; không trừ lỗi nằm ở trang đích ngoài hub. **≈93/100** (phiếu sơ bộ 88).

| Tiêu chí | Phiếu | Tự chấm | Căn cứ |
|---|---|---|---|
| Search intent, cấu trúc SEO | 14/15 | 14/15 | Title/H1/canonical đúng; H2 "Tìm gần đây/Mọi người hay tìm/Danh mục" thuộc header shell website |
| Tư vấn kỹ thuật, claim | 14/15 | 15/15 | C1 Limo Green 2.0/3.0 inch có hồ sơ trang con (17 mẫu, anh Đạo duyệt); C2 đã bỏ câu lặp |
| Nội dung theo dòng xe | 13/15 | 13/15 | 6/19 dòng có hồ sơ riêng — chỉ tăng khi có case lắp thật |
| GEO, AEO, FAQ | 9/10 | 9/10 | 8 FAQ phủ điện, hồ sơ, địa phương, chuẩn bị, thời gian, đăng kiểm, giá, bảo hành |
| EEAT | 9/10 | 10/10 | Người duyệt + ngày duyệt; bảng ảnh/nguồn ở 02; case từ bài đã đăng |
| Internal link | 9/10 | 9/10 | 67/67 link 200 |
| Trải nghiệm | 8/10 | 9/10 | Hết `$ is not defined` (nạp jQuery, 7a529ee); không tràn ngang 375–1366 |
| CTA, chuyển đổi | 7/10 | 9/10 | Form POST /api/leads, lead test #228 vào CRM 22/10 |
| Sẵn sàng xuất bản | 5/5 | 5/5 | Khối nội bộ chỉ hiện pages.dev/localhost |
| **Tổng** | **88** | **≈93** | |

Không trừ trên hub: T3 sao 0 (danh bạ chi nhánh đích; hub không xuất AggregateRating). IT khi đăng: bỏ noindex (meta + `X-Robots-Tag`), xoá khối nội bộ, test lại form/CRM, đo GSC/CWV.

## Phiếu V1.9 28/10/2026 (88/100 sơ bộ, CẦN FIX) — xử lý cùng ngày

| ID | Phụ trách | Lỗi | Ưu tiên | Đã làm / bằng chứng | Trạng thái |
|---|---|---|---|---|---|
| C1 | Content + anh Đạo | "Limo Green lắp được cả mẫu lens 2.0 và 3.0 inch" | Cao | Giữ câu: trang con `/vinfast/limo-green` (anh Đạo duyệt) liệt kê 17 mẫu lens 2.0 và 3.0 inch lắp Limo Green; link "Xem mẫu lắp được cho Limo Green →" ngay dưới câu | Có bằng chứng — reviewer đối chiếu |
| C2 | Content | Lặp ý nguồn/dây giắc/pin cao áp | TB | Thẻ "Xe điện đi phố": bỏ câu pin cao áp, thay "Điểm cấp nguồn được kiểm tra theo đời và phiên bản xe (xem lưu ý hệ điện ở trên)". Cảnh báo an toàn giữ ở box lưu ý + FAQ | Đã sửa |
| C3 | Content | Ảnh → xe → nguồn → alt | TB | Bảng ảnh và nguồn ở [02](02_Huong_dan_CMS_SEO_Bi_gam_VinFast_V1.8.md); ảnh case lấy từ bài đã đăng auto365.vn | Reviewer đối chiếu |
| T1 | IT | Khối kiểm tra nội bộ | Cao | `hidden` mặc định, script chỉ mở trên pages.dev/localhost; IT xoá aside + script khi tích hợp | IT xác nhận DOM production |
| T2 | IT | Console `$ is not defined` | Cao | Từ script shell (jquery.toc/content.js) của website | CHỜ IT |
| T3 | IT | Sao 0 | Cao | Trang hub không xuất AggregateRating (0 lần trong HTML); 0 sao ở danh bạ chi nhánh đích | CHỜ IT/Operations |
| T4 | IT | Form/CRM | Cao | POST /api/leads, chỉ báo thành công khi `success:true`; test lead 22/10 đã vào CRM (#228) | Test lại trên production |
| T5 | SEO/IT | Canonical/robots/schema/GSC/CWV | TB | Canonical trỏ auto365.vn; schema khớp visible (FAQ 8 câu) | CHỜ DỮ LIỆU production |

dateModified 2026-10-28; lastReviewed giữ 2026-10-27 (C2 chỉ bỏ câu lặp, không đổi nội dung kỹ thuật).

## R5 tự chấm 27/10/2026 (chuẩn V1.9, sau bản vá R4 + duyệt 27/10)

Tự chấm của team triển khai trên preview — **không phải phiếu nghiệm thu**. Phần đủ bằng chứng: **≈57/60** (R4: 55,9). Phần CX **/40** giữ nguyên chờ bằng chứng production.

| Hạng mục | Bằng chứng 27/10 | Kết quả |
|---|---|---|
| Bộ tìm chi nhánh (P0 R4) | Quảng Ninh 8 điểm, Đà Nẵng 2 điểm, từ khoá rỗng → thông báo + link danh bạ | Đạt |
| Đường địa phương | 91 điểm, 33 tỉnh/thành có link thật trong HTML | Đạt |
| FAQ | 8 câu, FAQPage schema khớp visible, anh Đạo duyệt 27/10 | Đạt |
| Lọc case | Trạng thái rỗng + Bỏ lọc; ≤4 bài → 1 hàng | Đạt |
| Responsive | 375/768/1024/1366: scrollWidth = clientWidth | Đạt |
| Link nội bộ | 67/67 link auto365.vn trả 200 | Đạt |
| U3 | SHA-256 trong 01 khớp file deploy (`3a68dc0e…`); script xuất băm nội dung LF | Đạt |
| Console shell (`$ is not defined`) | Script shell website | Trừ — IT |
| Sao 0 đánh giá ở danh bạ | Dữ liệu danh bạ | Trừ — IT/Operations |

**CX còn thiếu bằng chứng:** test máy thật (iOS/Android), lead vào CRM từ production, index + Core Web Vitals trên auto365.vn, trang tích hợp production. Cần IT đăng production rồi gửi reviewer tái chấm.

## R4 reviewer 27/10/2026 (chuẩn V1.9) và bản vá cùng ngày

Reviewer R4 chấm theo **V1.9**: 6 tiêu chí đủ bằng chứng **55,9/60**, 6 tiêu chí **CX /40** (chưa quy đổi /100). Điểm V1.8 trước đó là lịch sử.

| Mã R4 | Phát hiện | Đã làm 27/10/2026 | Còn |
|---|---|---|---|
| P0 | Tìm "Quảng Ninh" báo "Không tải được danh sách chi nhánh"; link dự phòng mở catalog preview | Nguyên nhân: script `newsroom-branch-finder` gọi `/chi-nhanh?json=1` và dựng link `/chi-nhanh…` tương đối → trên pages.dev trỏ về origin preview; auto365.vn không mở CORS. Build lấy danh bạ thật (91 điểm) nhúng vào trang + script nhỏ chỉ chạy khi không ở auto365.vn: trả dữ liệu nhúng và đổi mọi link `/chi-nhanh…` sang `https://auto365.vn/chi-nhanh…` (giữ từ khoá). Kiểm: Quảng Ninh 8 điểm, Đà Nẵng 2 điểm, "zzqa" → thông báo + link danh bạ; "Xem tất cả 8 điểm" → `https://auto365.vn/chi-nhanh?q=Quảng%20Ninh#workspace` | Trên production script tự tắt; IT kiểm lại bộ tìm tại auto365.vn |
| P1 địa phương | Thiếu đường tỉnh/cơ sở đọc được trước thao tác | Khối "Xem toàn bộ 91 điểm tiếp nhận" + danh sách 33 tỉnh/thành theo miền (a href thật, có sẵn trong HTML), mỗi tỉnh → danh bạ lọc theo tỉnh | URL trang tỉnh riêng: SEO chốt; chuẩn dịch vụ theo điểm: Operations |
| P1 FAQ | Thiếu câu nơi làm, thông tin cần chuẩn bị | +2 FAQ (8 câu, schema khớp); anh Đạo duyệt 27/10 | — |
| P2 lọc case | VF 3 + X-Light: 0 thẻ, không thông báo | Thông báo "Chưa có bài hồ sơ phù hợp… không có nghĩa là mẫu đèn không lắp được" + nút Bỏ lọc | — |
| P2 tràn ngang | Header shell: `.container` padding 0 → `.row` lệch −12px | Trả padding 12px cho container header (không dùng overflow-x:hidden); đo lại 1366/768/375: scrollWidth = clientWidth | — |
| P2 console | jquery.toc / content.js lỗi `$ is not defined` | — | Script shell của website: IT kiểm thứ tự nạp jQuery |
| P2 sao 0 đánh giá | Danh bạ đích | — | Dữ liệu danh bạ: IT/Operations |
| U3 | 01–05 chưa đọc được, tên file còn V1.8 | Cập nhật 01/02/03/05; tên file giữ để link cũ không gãy | Reviewer đối chiếu lại |

## Biên bản kiểm UX/tương tác 26/10/2026 (bằng chứng cho U1)

Kiểm trên preview local (cùng bản build) bằng script thao tác trong trình duyệt, 4 độ rộng: **375 · 768 · 1024 · 1366px**. Mỗi độ rộng chạy 16 phép thử:

| # | Phép thử | Kỳ vọng | 375 | 768 | 1024 | 1366 |
|---|---|---|:-:|:-:|:-:|:-:|
| 1–4 | Tab nhóm xe: Xe điện / Green / Mẫu xe cũ / Tất cả | 8 / 5 / 5 / 18 thẻ | ✓ | ✓ | ✓ | ✓ |
| 5–6 | Tìm "vf6", "lux" | 1, 2 thẻ | ✓ | ✓ | ✓ | ✓ |
| 7 | Tìm "xyz" | 0 thẻ + thông báo trống | ✓ | ✓ | ✓ | ✓ |
| 8 | Xoá ô tìm | về 18 thẻ | ✓ | ✓ | ✓ | ✓ |
| 9 | Bấm thẻ VF 8 (chưa có hồ sơ) | Form điền "VinFast VF 8" | ✓ | ✓ | ✓ | ✓ |
| 10–12 | Lọc case: GTR → GTR + VF 6 → bỏ lọc | 2 → 1 → 10 bài | ✓ | ✓ | ✓ | ✓ |
| 13 | Accordion "Gợi ý theo nhu cầu" | Mở, cao thêm, đóng lại | ✓ | ✓ | ✓ | ✓ |
| 14 | FAQ | Mở/đóng | ✓ | ✓ | ✓ | ✓ |
| 15 | Nút CTA | Nền đỏ #d71920, font Roboto | ✓ | ✓ | ✓ | ✓ |
| 16 | Tràn ngang | scrollWidth ≤ viewport | ✓ | ✓ | ✓ | ✓ |

Bàn phím: 44 phần tử tương tác (tab, chip lọc, ô tìm, thẻ xe, accordion, FAQ, CTA, nút cuộn) đều nhận focus; tab nhóm xe có `role=tab` + `aria-selected`; accordion/FAQ dùng `<details>/<summary>` gốc (Enter/Space).

Sửa trong lượt kiểm: link chữ "Xem tất cả…", "Xem mẫu lắp được…" vùng chạm 22px → ≥24px; ô tìm kiếm bị tắt viền focus → thêm viền đỏ khi focus.

Chưa kiểm: thiết bị thật (iOS/Android), trình đọc màn hình, CWV.

## R3 reviewer 25/10/2026 và bản vá 26/10/2026

Reviewer R3 chấm snapshot SHA `2accd820…` (25/10/2026 21:51): **95,5/100 — qua 3 ngưỡng điểm** (C 28,6 · SEO 28,7 · GEO 23,8 · U 14,4), chưa đóng nghiệm thu phát hành.

| Mã | Phiếu R3 | Đã làm 26/10/2026 |
|---|---|---|
| R3-01/02 | Thẻ Lux SA2.0 và ItemList trỏ `/lux-sa20` (404); trang thật ở `/lux-sa2-0` (200, self-canonical) | Đổi đích trong source; thẻ xe + ItemList dùng `/lux-sa2-0`; không còn URL cũ trong HTML (link bài case `vinfast-lux-sa20-lap-…` và tên ảnh giữ nguyên) |
| R3-03 | Meta description / og:description / CollectionPage.description còn AES cạnh "hồ sơ" | Đổi sang mẫu reviewer: "Tra cứu bi gầm VinFast theo dòng xe, xem hồ sơ X-Light và GTR đã lắp tại Auto365; kiểm tra cấu hình, chi phí và điểm tiếp nhận trước khi thi công." — sinh từ build cho cả 3 trường |
| R3-04 | 01/02/04 còn trạng thái 23/10 | 02 bảng URL kiểm 26/10 (6/6 trang 200); 04 dòng model checked_at 26/10 + ghi chú HTTP, case/guide giữ checked_at 23/10 (chưa kiểm lại); 01 xuất lại |
| R3-05 | 03/05 cập nhật | Mục này + 05 |
| R3-06/07 | Bản tích hợp production | Việc IT khi đăng (02 mục 7) |

Không tự chấm lại; chờ reviewer xác nhận bản SHA mới trong 01.

## R3 tự chấm (24/10/2026, sau bản vá R2 + đã duyệt)

Tự chấm của team, lấy phiếu reviewer R2 (94,8) làm mốc và chỉ cộng các mục đã sửa có bằng chứng. **Không phải phiếu nghiệm thu; không tự tuyên bố ĐẠT.** Kiểm 24/10: SHA index.html khớp 01; 29 link auto365.vn trong nội dung, 28 trả 200; trang con Fadil và Limo Green đã đăng production (200, canonical đúng, robots index), **Lux SA2.0 vẫn 404**.

| Mã | R2 | R3 | Căn cứ thay đổi |
|---|---:|---:|---|
| C1 | 9,2 | 9,5 | Sapo thu hẹp còn X-Light, GTR (khớp 10 bài: 8 X-Light, 2 GTR); câu điện áp theo từng xe; anh Đạo duyệt 24/10 |
| C2 | 9,6 | 9,6 | — |
| C3 | 9,6 | 9,6 | — |
| S1 | 9,7 | 9,7 | — |
| S2 | 9,6 | 9,6 | — |
| S3 | 9,1 | 9,4 | 02 map đủ ảnh (6 ảnh VinFast mới + logo); Fadil, Limo Green đã 200; Lux SA2.0 còn 404 |
| G1 | 9,4 | 9,4 | Sapo vẫn thiên giới thiệu (chủ quản chọn giữ) |
| G2 | 9,6 | 9,6 | — |
| G3 | 4,7 | 4,9 | Claim thương hiệu ở sapo khớp tập hồ sơ |
| U1 | 4,7 | 4,8 | Kiểm 360 / 375 / 768 / 820 / 1024 / 1366px không tràn ngang; tablet hero 1 cột, lưới dòng xe và cẩm nang vuốt ngang; sửa lỗi dư </div> làm CTA mất màu/font |
| U2 | 4,9 | 4,9 | — |
| U3 | 4,7 | 4,9 | 01 xuất đủ 6 thẻ + logo, hết lặp, đúng thứ tự trang; 03/05 đồng bộ trạng thái duyệt |

| Nhóm | R2 | R3 | Ngưỡng |
|---|---:|---:|---|
| Nội dung | 28,4 | 28,7 | — |
| SEO | 28,4 | **28,7** | ≥28,5 |
| GEO | 23,7 | **23,9** | ≥23,75 |
| UX + bàn giao | 14,3 | 14,6 | — |
| **Tổng** | **94,8** | **95,9** | ≥95 |

Điều kiện phát hành còn lại: **đăng trang Lux SA2.0** (hoặc đổi thẻ Lux SA2.0 + ItemList sang tư vấn) rồi reviewer tái kiểm.

## R2. Reviewer tái kiểm 23/10/2026 và bản vá 24/10/2026

Reviewer R2 chấm snapshot SHA `ead4cdc9…` (23/10/2026 22:38): **94,8/100 — CHƯA ĐẠT** (C 28,4 · SEO 28,4 · GEO 23,7 · U 14,3). Các lỗi lượt 92,0 đã đóng, trừ 3 trang con production 404.

| Mã | Phiếu R2 | Đã làm 24/10/2026 | Còn mở |
|---|---|---|---|
| R01 | 3 trang con 404 | — | CMS đăng Fadil / Limo Green / Lux SA2.0 (hoặc đổi 3 thẻ + CTA nhu cầu + ItemList sang tư vấn) |
| R02 | Sapo gắn AES với hồ sơ thi công (10 bài: 8 X-Light, 2 GTR, 0 AES) | Sapo thu hẹp còn "(X-Light, GTR)" | Đã duyệt 24/10 |
| R03 | 01 chưa xuất 6 thẻ "Vì sao chọn" | 01 xuất đủ 6 thẻ (tiêu đề, nội dung, tên ảnh, alt), dải 8 logo kèm phạm vi "không ngụ ý mỗi hãng đã có hồ sơ VinFast" | — |
| R04 | Thẻ tư vấn nêu 12V/24V chung | Riêng trang VinFast: "hệ điện phụ trợ và điện áp cấp nguồn theo tài liệu của từng xe" (build thay, khối gốc theo-hang-xe giữ nguyên) | Đã duyệt 24/10 |
| R05 | 02 thiếu map 6 ảnh mới | 02 mục 3 thêm 6 ảnh + logo | IT upload khi đăng |
| R06 | 01 lặp khối nhu cầu, mô tả vị trí cũ | 01 xuất theo đúng thứ tự trang, box lưu ý chỉ lấy nội dung trực tiếp (không lặp 3 nhóm), bỏ dấu gạch thừa; 02 bỏ mô tả ô "trả lời nhanh" riêng; 03 sửa B02/B04/B06 | — |
| R07 | Kiểm bản tích hợp production | — | IT + SEO khi đăng |

Chưa tự chấm lại — chờ reviewer tái kiểm bản SHA mới trong 01.

## 0. Reviewer chấm 22/10/2026 và bản vá 23/10/2026

Reviewer chấm snapshot SHA `1d8380cb…` (22/10/2026 20:54): **92,0/100 — CHƯA ĐẠT** (C 27,4 · SEO 28,0 · GEO 22,6 · U 14,0). Reviewer không công nhận mức tự chấm 95,1 ở mục 1. Điểm mục 1 giữ lại làm lịch sử, **không dùng làm kết luận**.

| Mã | Phiếu reviewer | Đã làm 23/10/2026 | Còn mở |
|---|---|---|---|
| P0-1 | Href tương đối (vf6/, ../vinfast-vf3/…) sai khi lên canonical | 6 link trang dòng xe ở thẻ, CTA khối nhu cầu, ItemList đổi sang URL tuyệt đối production; không còn href tương đối trong nội dung. 02 mục 3 map ảnh tương đối + lưu ý header/footer v2 | IT upload ảnh, dùng header/footer production |
| P0-2 | 3 trang con 404 | Giữ link (phương án 1: đăng trước hub); 02 mục 3 ghi điều kiện phát hành + phương án dự phòng đổi 3 thẻ sang tư vấn | CMS đăng Fadil / Limo Green / Lux SA2.0 |
| B01 | Trả lời nhanh trước lưới | Sapo viết lại thành câu trả lời nhanh (theo mẫu reviewer, ~60 từ), không tách ô riêng để hero không lặp ý | — |
| B02 | H2 lưới dễ hiểu 18 hồ sơ | H2 "Chọn dòng xe VinFast" (dòng phụ giải thích đã bỏ theo chủ quản 23/10) | — |
| B03 | Bài tư vấn Fadil bị tính là case | Bỏ `/bi-gam-vinfast-fadil` khỏi khối case và ItemList (11 → 10), chuyển sang cẩm nang nhãn "Tư vấn dòng xe"; ItemList đổi tên "Bài hồ sơ…"; 04 thêm content_type, model_id, case_id (trống — chưa có mã nội bộ), sku_version, checked_at, ghi chú chưa xác nhận trùng xe | case_id nội bộ từ Media nếu có |
| B04 | Câu giắc zin / tải nhỏ / chói quá rộng | Thay bằng đoạn reviewer đề xuất (kiểm điểm cấp nguồn, tải bổ sung, dây/giắc, bảo vệ mạch theo đời và phiên bản; không mặc định có sẵn giắc; không can thiệp pin cao áp) ở box lưu ý, khối nhu cầu, FAQ, thẻ lý do; chói → "lắp đặt và căn chỉnh phù hợp hỗ trợ hạn chế nguy cơ gây chói"; bỏ "đảm bảo" ở chú thích case | Đã duyệt 23/10 |
| B05 | Cẩm nang lệch chủ đề | 5 bài: tư vấn Fadil, bi gầm cho ô tô điện, dải sáng rộng / chiếu xa khi mưa, hốc đèn nhỏ 2.0 inch, đèn gầm sáng yếu (đã kiểm 200, đọc tiêu đề) | — |
| B06 | FAQ chi phí, bảo hành; nguồn quy định; nhãn form | +2 FAQ (khoản chi phí; bảo hành theo mẫu/phiên bản + phiếu bàn giao, không nêu thời hạn chung); FAQ đăng kiểm bỏ câu dẫn bài không có URL production; nhãn hiển thị "Đèn – Bi gầm, Bi LED" (giá trị API giữ nguyên) ở form nội dung + nút nổi; câu nhận diện Trụ Sở Chính ở khối chi nhánh; dòng tham khảo cuối FAQ | Đã duyệt 23/10 |
| B07 | 01 thiếu khối nhu cầu; 02 schema/map | 01 xuất thêm trả lời nhanh, tiêu đề lưới, khối nhu cầu (kèm link), CTA/form, câu chi nhánh, dòng tham khảo; 02 viết lại map production, robots + X-Robots-Tag, cách kiểm schema (không lấy FAQ rich result / RRT làm tiêu chí) | — |

Chưa tự chấm lại sau bản vá — **chờ reviewer tái kiểm** đúng bản SHA mới trong 01. Câu chữ B04/B06, sapo và các thay đổi 23/10 đã được anh Đạo duyệt 23/10/2026.

## 1. Điểm theo tiêu chí (tự chấm 22/10 — lịch sử, đã thay bằng mục 0)

| Mã | Tiêu chí | Điểm | Căn cứ | Còn mở |
|---|---|---:|---|---|
| C1 | Chính xác và nhất quán | 9,5/10 | Case, cẩm nang lấy từ bài đã đăng auto365.vn; không ghi giá; đại lý X-Light/GTR/AES, 90+ chi nhánh, hotline 911 theo dữ kiện đã chốt; title, H1, schema, FAQ khớp nhau; anh Đạo duyệt box lưu ý + FAQ 22/10/2026 | — |
| C2 | Đầy đủ theo vai trò | 9,4/10 | 18 dòng xe chia 3 nhóm, khối chọn theo nhu cầu 3 nhóm xe, 6 dòng có trang riêng, 11 case lọc theo dòng xe, box lưu ý, 4 lý do, chi nhánh, 8 cẩm nang, 4 FAQ, form | Cẩm nang riêng VinFast bổ sung sau khi có bài (không trừ điểm) |
| C3 | Tự nhiên và hữu ích | 9,2/10 | Giọng trung tính ("kỹ thuật viên", "chủ xe"), không "nhất/tuyệt đối"; thẻ dòng xe chưa có hồ sơ dẫn về form, tự điền dòng xe | — |
| **C** | | **28,1/30** | | |
| S1 | Nhu cầu tìm kiếm và vai trò URL | 9,5/10 | Trang hãng giữa hub bi gầm và trang dòng xe; phân vai trong 02 mục 1 | — |
| S2 | Nội dung SEO trên trang | 9,6/10 | Title 72 ký tự, meta 146, 1 H1 (đã sửa dính chữ khi đọc text), canonical, 6 khối schema sinh từ HTML; thẻ dòng xe/case/cẩm nang render sẵn trong HTML; CollectionPage có `reviewedBy`, `lastReviewed` khớp byline hiển thị | — |
| S3 | Liên kết và hồ sơ triển khai | 9,5/10 | 25 link auto365.vn kiểm 22/10 = 200; sửa link 404 `/xe-thuc-te`; liên kết xuống 6 trang dòng xe | 3 trang con production đăng sau (không trừ điểm, CMS xử lý theo 02 mục 6) |
| **S** | | **28,6/30** | | Đạt ngưỡng 28,5 |
| G1 | Câu trả lời rõ, đủ ngữ cảnh | 9,4/10 | Box "Xe VinFast lắp bi gầm cần lưu ý gì?" trả lời thẳng; FAQ xe điện, đăng kiểm, thời gian + khối chọn theo nhu cầu trả lời "khi nào chưa cần lắp" cho từng nhóm xe | — |
| G2 | Lập luận phục vụ nhu cầu | 9,6/10 | Khối "Gợi ý chọn bi gầm VinFast theo nhu cầu sử dụng" (trước là "Xe VinFast của bạn dùng để làm gì?"): 3 nhóm (xe điện đi phố / xe dịch vụ chạy đêm, đi mưa / dòng đời trước, đi tỉnh), mỗi nhóm có khi nào chưa cần lắp, nên ưu tiên gì, xe đã lắp thật và link trang dòng xe; câu chữ theo phần tư vấn nhu cầu đã duyệt ở các trang dòng xe ; anh Đạo duyệt bổ sung 22/10/2026 | — |
| G3 | Nguồn và truy nguyên | 4,8/5 | Mỗi case link bài gốc có ngày; nguồn ảnh ghi trong 02; 04 lưu URL từng dòng; người duyệt đứng tên + ngày trên trang | — |
| **G** | | **23,8/25** | | Đạt ngưỡng 23,75 |
| U1 | Cấu trúc dễ đọc | 4,6/5 | Hero → dòng xe → case → lưu ý → lý do → chi nhánh → cẩm nang → FAQ → CTA → form; mobile 375px không tràn ngang, lưới dòng xe 2 hàng vuốt ngang | — |
| U2 | Hành động tiếp theo | 5/5 | Form nr-lead (`data-service="Bi gầm VinFast"`), gọi 0365 365 911, Zalo; thẻ dòng xe chưa có hồ sơ tự điền dòng xe vào form; lead test 228 (22/10/2026) → `{"success":true}`; `source_page` sửa đúng "Bi gầm VinFast" ; CRM xác nhận nhận lead 228 có dòng xe "VinFast VF 8" (22/10/2026) | Xoá lead test 228 (vận hành, không tính điểm) |
| U3 | Bộ bàn giao nhất quán | 5/5 | 01 + 04 xuất tự động từ index.html cùng SHA; 02 hướng dẫn CMS; 03 phiếu này; khối kiểm tra nội bộ cuối trang (chỉ hiện trên preview); 05 phiếu duyệt ghi người, ngày, phạm vi | — |
| **U** | | **14,6/15** | | |
| **Tổng** | | **95,1/100** | | C 28,1 · S 28,6 · G 23,8 · U 14,6 |

## 2. Kết luận

**Reviewer R3 (25/10/2026): 95,5/100 — qua 3 ngưỡng điểm.** Bản vá 26/10 đóng R3-01..05 (URL Lux, mô tả meta). Nghiệm thu phát hành chờ IT tích hợp production (R3-06/07). Không tự tuyên bố đã nghiệm thu.

## 3. Việc cần làm để đạt

| Ưu tiên | Việc | Ai |
|---|---|---|
| 1 | Tích hợp production: ảnh, header/footer, robots + X-Robots-Tag, bỏ khối nội bộ, test form–CRM (02 mục 7) | IT + SEO + Ops |
| 2 | Reviewer tái kiểm bản SHA mới | Reviewer |
| — | Xoá lead test 228 khỏi CRM | Vận hành |

## 4. Đã sửa trong lượt chấm này (22/10/2026)

| Mục | Đã sửa |
|---|---|
| Link | "Xem tất cả case" `/xe-thuc-te` (404) → `/tin-tuc?q=VinFast` |
| H1 | Thêm khoảng trắng giữa "VinFast" và "theo từng dòng xe" (text bot đọc bị dính chữ) |
| VF 7 | Trang production đã 200 → thẻ VF 7 link sang trang dòng xe, vào ItemList |
| FAQ | Câu dòng có hồ sơ khớp 6 trang dòng xe |
| U3 | Bộ 01–04 + script xuất tự động + khối kiểm tra nội bộ cuối trang |
| Duyệt kỹ thuật | Byline "Rà soát kỹ thuật: Nguyễn Quang Đạo (22/10/2026)" + `reviewedBy`/`lastReviewed`; phiếu duyệt 05; khối kiểm tra nội bộ đổi trạng thái |
| Chọn theo nhu cầu | Khối 3 nhóm xe sau lưới dòng xe; desktop 3 cột, mobile vuốt ngang |
| Duyệt bổ sung + lead | Anh Đạo duyệt khối nhu cầu; sửa `data-source-page` thành "Bi gầm VinFast"; lead test 228 → success |
| CRM | Chủ quản xác nhận lead 228 có dòng xe "VinFast VF 8" (22/10/2026) |
| Lọc case theo hãng đèn | Hàng lọc thứ 2 "Hãng đèn" (X-Light / GTR, suy từ tên đèn trong tiêu đề bài), kết hợp với lọc dòng xe |
| Khối nhu cầu | Chuyển xuống sau khối bài hồ sơ; 3 nhóm thành accordion đóng sẵn (nội dung vẫn trong HTML) |
| Khối nhu cầu (23/10) | Cả khối là 1 accordion đóng sẵn, 3 nhóm bên trong hiện đầy đủ; đổi tiêu đề "Gợi ý chọn bi gầm VinFast theo nhu cầu sử dụng"; bỏ dòng phụ dưới H2 lưới dòng xe và dưới H2 khối case; sapo viết lại tự nhiên hơn |
| Khối nhu cầu (23/10, lượt 2) | Gộp vào box "Xe VinFast lắp bi gầm cần lưu ý gì?" thành accordion "Gợi ý chọn bi gầm VinFast theo nhu cầu sử dụng" đóng sẵn ở cuối box |
| Sapo + Vì sao chọn (23/10) | Sapo theo bản chủ quản viết; khối "Vì sao chọn" thay 4 thẻ icon bằng 6 thẻ ảnh + logo hãng đèn dùng chung với theo-hang-xe (build tự lấy) |
| 24/10 sau duyệt | 6 ảnh "Vì sao chọn" đổi sang ảnh xe VinFast thật; câu chi nhánh ghi đủ 8 thương hiệu đèn; thẻ nhu cầu cao đều; sửa lỗi dư </div> làm CTA mất màu, font |
| Responsive 24/10 | Tablet (≤991px): hero 1 cột, lưới dòng xe 2 hàng vuốt ngang (1.140 → 586px), cẩm nang vuốt ngang (1.033 → 378px); kiểm 768px và 375px không tràn ngang |
| Responsive 24/10 (lượt 2) | Kiểm thêm 360, 414-class, 820, 1024px: không tràn ngang; 993–1100px lưới dòng xe chuyển 2 hàng vuốt ngang 5 cột hiện (1.289 → 559px); desktop ≥1101px giữ lưới 6 cột |
| Sapo câu 3 (26/10) | Thêm câu "xe chưa có hồ sơ… chi phí gồm thiết bị, phụ kiện, công lắp và VAT" để sapo trả lời thẳng nhu cầu (G1) |
| Tab nhóm xe + VF Wild (26/10) | Tab "Xe xăng (4)" thay "Mẫu xe cũ"; VF e34 về nhóm Xe điện; thêm VF Wild (Liên hệ tư vấn) → 19 dòng: Xe điện 10 · Green 5 · Xe xăng 4 |
