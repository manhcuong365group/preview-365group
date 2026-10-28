# 03 — Phiếu đánh giá V1.8: Phim cách nhiệt ô tô 3M (365Group)

- Trang: `https://preview-365group.pages.dev/3m.365group.com.vn/phim-cach-nhiet-3m/` (bản 28/10/2026, preview, noindex đúng chủ đích)
- Người chấm: reviewer R5 (27/10/2026, V1.9) + Claude ghi phần vá 28/10/2026. Claude không thay chấm của reviewer.
- Loại trang: trang sản phẩm/danh mục phim cách nhiệt 3M, giọng nhà phân phối. Tiêu chuẩn hiện hành: V1.9 (R5); các lần tự chấm cũ bên dưới theo V1.8, thang /100. Chấm trên preview.
- Ngưỡng ĐẠT: tổng ≥ 95; SEO ≥ 28,5/30; GEO ≥ 23,75/25.

## Xử lý phiếu tái kiểm R5 / V1.9 (reviewer 27/10/2026 — bản vá 28/10/2026)

Kết quả R5 của reviewer: điểm phần đã chấm **62,5/70** (C1 8,5 · C2 9 · C3 9 · S1 9,5 · S2 9 · G1 9 · G2 8,5). S3, G3, U1, U2, U3 còn CX. Trải nghiệm thương hiệu desktop 8,8/10. **Chưa ký ĐẠT V1.9.** Phiếu này chỉ ghi phần đã vá và phần còn mở; không tự quy đổi điểm /100, chờ reviewer tái kiểm.

### Đã vá trên preview

| Mã | Việc reviewer giao | Đã làm (28/10/2026) | Trạng thái |
|---|---|---|---|
| F01 | Tách chú thích IRR, không gộp điều kiện đo; sửa diễn giải TSER | Sửa 5 vị trí: ghi chú điều kiện đo của tab, đoạn mở đầu + caption bảng 12 mã, ghi chú mục thuật ngữ, DefinedTermSet. TSER/VLT/UVR/Glare R ghi "ước tính trên kính xanh 6 mm (VLT 73%)"; IRR ghi "đo trên phim, dải 900–1.000 nm, không có kính" theo 3M VN. Bỏ câu "điều kiện đo trùng với 3M VN" và "TSER càng cao, xe càng ít nóng"; thay bằng "trong cùng điều kiện đo…, nhiệt thực tế còn phụ thuộc kính, diện tích dán, thời tiết, cách sử dụng". Không đổi số liệu, không đổi IRR → IRER | Chờ Product/anh Hoàng chốt điều kiện từng chỉ tiêu (nhất là IRR nhóm NR/IR trong PDF 260815) |
| F02 | Bỏ `.m3-care__list` khỏi quy tắc cuộn ngang ≤560 px | Đã xoá khỏi cả 2 selector `:is(...)`; 4 bước chăm sóc hiển thị dọc. Kiểm 375 px: grid 1 cột, không tràn ngang. Dải cấu hình/case vẫn cuộn ngang | Đóng phần code; còn QA 360/390/430/768 px có ảnh |
| F03 | Nhãn 3 nhóm đại lý phải khớp đích | Chưa có dữ liệu phân nhóm đáng tin → đổi CTA cả 3 thẻ thành "Mở danh sách đại lý toàn quốc →" để khách biết đang mở danh sách chung; không tạo bộ lọc trống | Còn mở phần lọc theo nhóm (cần Operations phân loại) |
| F04 | Sapo hướng trải nghiệm, bỏ "Trang này gom…" | Sapo: "Khám phá Crystalline CR BLK, Ceramic IR và Ceramic NR. So sánh độ sáng, khả năng cản nhiệt và cấu hình theo xe, rồi chọn đại lý để được tư vấn." (thứ tự theo 3 tab) | Đóng |
| P2 tab | Mỗi tab nổi bật dữ kiện dễ quyết định, chỉ tiêu dài mở thêm | 3 tab cùng khung 7 ô (Mát xe, Chặn UV, Độ sáng kính, Bớt chói, Công nghệ, Bảo hành, Giá); số chi tiết mã kính lái/IRR chuyển về bảng 12 mã; ghi chú điều kiện đo là hàng riêng cuối tab; 3 tab cao bằng nhau trên desktop | Đóng |
| P2 tài liệu | Đường tra cứu/bảo hành dễ thấy | Khối "Tài liệu và hỗ trợ" đặt trước Chăm sóc phim/FAQ; dưới bảng 12 mã có link tải PDF + link tới khối tài liệu | Đóng |

### Thay đổi giao diện khác theo chủ trang (28/10/2026)

- Bảng 12 mã: đầu cột CR BLK xám, NR xanh lá, IR xanh dương; hàng TSER nền xanh nhạt.
- Bỏ màu đỏ ở chữ, link trong ghi chú, viền thẻ, nhãn, icon; đỏ chỉ còn logo, nút chính, dấu * bắt buộc. Nút "Nhận báo giá gói này" viền đỏ mảnh.
- Mục "Cách đọc các chỉ số": 1 accordion chung, 5 chỉ số luôn mở.
- 3 ghi chú dưới 6 cấu hình (PRO, TSER, Giá) rút gọn, 1 hàng 3 cột; vẫn giữ đủ điều kiện giá (gồm công + VAT, Minicar, cửa sổ trời).
- Bấm vào bất kỳ đâu trong thẻ gói mở popup form, chọn sẵn đúng gói (link "Xem dòng…" vẫn điều hướng).
- Chữ hiển thị "365Group" → "365 Group - 3M Authorized Distributor in Vietnam" (32 chỗ + 3 câu FAQ schema). Title, meta, tên Organization trong schema giữ "365Group" theo chủ trang (28/10). Menu đầu trang ghi "Về 365 Group" để header không tràn.
- dateModified 28/10/2026; lastReviewed giữ 23/10/2026 — reviewer xác định phạm vi duyệt lại cho các thay đổi sau ngày này.

### Còn mở (CX / ngoài phạm vi code)

| Mã | Việc | Đầu mối |
|---|---|---|
| F01 | Chốt điều kiện đo TSER/VLT/UVR/Glare R/IRR theo nguồn từng nhóm mã | Product / anh Hoàng |
| F03 | Phân nhóm Pro Shop / Auto365 / đại lý khác để lọc thật; danh mục + ngày đối chiếu cho 224 đại lý / 32 tỉnh | Operations |
| F05 | Production `https://3m.365group.com.vn/phim-cach-nhiet-3m` vẫn 404; route, PDF, ảnh, OG, robots/canonical | IT / SEO |
| F06 | Hồ sơ V1.9 cùng bản (01/02/03 hiện đứng tên V1.8), reviewer duyệt bản sửa | Reviewer + SEO/IT |
| F07 | Thử gửi /api/leads, phân tuyến, `generate_lead` | Dev + vận hành |
| U1 | QA mobile/tablet có ảnh: 360/390/430/768/1024 px, tab, popup, bàn phím | QA |
| N4 | Case Ceramic IR thật; ảnh hero kính/khoang xe (đề xuất) | Content / Design |

## Tự chấm lần 5 (bản 22/10/2026, có form tư vấn)

| Mã | Tối đa | Điểm | Căn cứ / phần thiếu |
|---|---:|---:|---|
| C1 | 10 | 8,8 | Thông số 15 mã có nguồn: CR BLK/IR theo bảng 365Group, NR theo catalog 3M Ceramic NR VN 03/2026 (đo kính xanh 6 mm); bỏ câu "Không gây nhiễu tín hiệu" và "đạt chuẩn 3M toàn cầu". Còn: 224 đại lý lệch "160+" trên site 365Group; giá 5,9–18,3tr là giá lẻ Auto365 |
| C2 | 10 | 8,2 | Thêm block 5 xe thực tế (Accent, Camry, Everest, VF8, XC90) dẫn bài thi công đã đăng; bảng thông số đủ 3 dòng. Thiếu: case Ceramic IR, quy trình thi công, cách tra cứu bảo hành điện tử |
| C3 | 10 | 9,0 | Bỏ "vượt trội", "tối ưu", "toàn diện", "cao cấp nhất"; câu NR theo câu đã duyệt (lai Nano Ceramic và Nano Reflective); lợi ích ghi bằng số (TSER, IRR) |
| S1 | 10 | 9,0 | URL đích `https://3m.365group.com.vn/phim-cach-nhiet-3m` (chủ trang chốt); vai trò trang nhà phân phối tách khỏi pillar bán lẻ auto365.vn khác domain. Còn: tiêu đề/H1 trùng từ khóa với pillar Auto365, cần theo dõi khi index |
| S2 | 10 | 8,7 | Không đổi (3 bảng/khối có caption hoặc mô tả; og:image 701px) |
| S3 | 10 | 9,0 | Canonical + og:url; link nội bộ trỏ trang thật trên 3m.365group.com.vn (8 đích), 2 cấu hình chưa có trang trỏ auto365.vn; 5 link bài thi công; WebSite + BreadcrumbList + WebPage @id tuyệt đối. Còn: Product chưa có Offer; breadcrumb chưa hiện trên giao diện |
| G1 | 10 | 8,6 | Lợi ích từng dòng có số trích riêng được |
| G2 | 10 | 9,3 | Bảng 15 mã đủ 3 dòng, cùng 5 chỉ số, có điều kiện đo NR |
| G3 | 5 | 4,3 | Kiểm duyệt kỹ thuật Nguyễn Quang Đạo (22/10/2026) có hồ sơ, hiện trên trang và trong reviewedBy; 5 bài thi công thật; 4 chứng nhận 3M; trích 3M Việt Nam có nguồn. Còn: chưa có case Ceramic IR, chưa có ý kiến chuyên gia riêng về phim |
| U1 | 5 | 4,4 | 375px/1280px không tràn; bảng 15 mã vừa khung desktop, cuộn ngang trên mobile với cột chỉ số cố định |
| U2 | 5 | 4,6 | Form #tu-van gửi /api/leads: kiểm tra số + đồng ý, chỉ báo thành công khi {"success":true}, lỗi giữ dữ liệu + hotline 0363 365 365; CTA Tìm đại lý + hotline/email. Còn: endpoint trên 3m.365group.com.vn chưa được IT xác nhận |
| U3 | 5 | 5,0 | 01–03 cùng SHA-256 bên dưới |

**Tổng tự chấm lần 5: C 26,0 · S 26,7 · G 22,2 · U 14,0 → 88,9/100. CHƯA ĐẠT V1.8** — SEO 26,7 < 28,5; GEO 22,2 < 23,75. Phần còn thiếu chủ yếu cần quyết định của chủ trang (URL đích, người kiểm duyệt, form).

## Lần 4

C 26,0 · S 26,7 · G 22,2 · U 13,2 → 88,1/100, CHƯA ĐẠT.

## Lần 3

C 26,0 · S 21,9 · G 22,2 · U 13,2 → 83,3/100, CHƯA ĐẠT.

## Lần 2 (SHA d0557c40…)

C 25,8 · S 21,9 · G 20,9 · U 13,2 → 81,8/100, CHƯA ĐẠT.

## Lần 1 (bản 22/10/2026, SHA dc06ee7b…)

**Tổng tự chấm: C 23,0 · S 21,7 · G 19,5 · U 13,2 → 77,4/100. CHƯA ĐẠT V1.8** — SEO 21,7 < 28,5; GEO 19,5 < 23,75.

## Tự chấm lần 14 (bản 26/10/2026, sau vá R3 + tab dòng phim + popup form + mobile)

| Mã | Tối đa | Lần 13 | Lần 14 | Căn cứ / phần thiếu |
|---|---:|---:|---:|---|
| C1 | 10 | 9,7 | 9,9 | Giá đã gồm công thi công và VAT, 224 đại lý (chủ trang chốt 26/10) – ghi trên thẻ, FAQ, Offer |
| C2 | 10 | 9,4 | 9,7 | Tab 3M™ Crystalline / Ceramic IR / Ceramic NR Series có "Đặc điểm chính"; ghi chú cấu hình PRO; mục "Chăm sóc phim sau khi dán" 4 bước theo 3M VN. Còn: case Ceramic IR |
| C3 | 10 | 9,2 | 9,6 | Tab và thẻ viết lợi ích trước (Mát xe / Bảo vệ da / Độ sáng kính / Bớt chói), thuật ngữ để trong ngoặc; nhãn thẻ "Cản nhiệt kính lái (TSER)", "Độ sáng kính lái (VLT)" |
| S1 | 10 | 9,3 | 9,3 | Không đổi |
| S2 | 10 | 9,4 | 9,4 | 1 H1, title 59 ký tự, meta 150, ảnh đủ alt |
| S3 | 10 | 9,8 | 9,8 | Canonical URL đích; JSON-LD parse được (Organization, Brand, FAQPage, DefinedTermSet, WebSite, BreadcrumbList, WebPage, ItemList) |
| G1 | 10 | 9,5 | 9,7 | FAQ thêm 2 câu (tra cứu bảo hành điện tử 3M, lưu ý sau khi dán) có nguồn 3M VN; FAQPage 6 câu khớp trang |
| G2 | 10 | 9,5 | 9,8 | VLT kính lái trên 6 thẻ; nguồn thứ hai: số liệu Crystalline CR BLK khớp 3m.com.vn + brochure CR BLK, Ceramic IR đối chiếu dải toàn dòng 3M VN, điều kiện đo trùng 3M VN |
| G3 | 5 | 4,7 | 4,7 | Không đổi. Còn: case Ceramic IR, hồ sơ anh Hoàng trên site 365Group |
| U1 | 5 | 4,7 | 4,8 | Mobile: chữ thu gọn, 7 nhóm thẻ vuốt ngang (6 gói 3983 → 656px), ảnh tab 3:2, không tràn ngang |
| U2 | 5 | 4,7 | 4,8 | Nút "Nhận báo giá gói này" mở popup form chọn sẵn gói; r.ok. Còn: IT nghiệm thu /api/leads |
| U3 | 5 | 5,0 | 5,0 | 01–03 cùng SHA |

**Tổng tự chấm lần 14: C 29,2 · S 28,5 · G 24,2 · U 14,6 → 96,5/100.** Chạm 3 ngưỡng (SEO 28,5; GEO ≥ 23,75; tổng ≥ 95) nhưng sát ngưỡng; reviewer R3 chấm 90 – không tự tuyên bố ĐẠT, chờ reviewer chấm lại đúng build.

## Xử lý phiếu tái kiểm R3 (reviewer 26/10/2026: 90/100 – SEO 27,5, GEO 22,5, ND 27,5, UX 12,5)

| Mục R3 | Trạng thái | Việc đã làm / còn chờ |
|---|---|---|
| P0-01 Nút tra thông số dẫn #bang-gia | Đã sửa | → #thong-so |
| P0-02 Production 404, tài nguyên | Chờ IT | Route, PDF/ảnh/OG upload, robots production |
| P0-03 Reviewer/nguồn/giá | Một phần | Khối nội bộ bỏ câu "IR chờ chốt"; bỏ câu "bảng so sánh phía trên"; "SUV / MPV" → "SUV" theo PDF. Chờ Kinh doanh xác nhận giá gồm công/VAT/phát sinh, phạm vi MPV; khối nội bộ phải xoá khỏi HTML production |
| P1-01 Tìm đại lý/giao diện đích/hotline | Chờ vận hành + IT | Trang đại lý thuộc site 365Group |
| P1-02 Hero trải nghiệm sản phẩm | Chưa làm | Chủ trang yêu cầu giữ layout (24/10); chờ tư liệu ảnh khoang xe/kính. Đã thay emoji bằng icon |
| P1-03 Lựa chọn kính lái PRO | Đã sửa | VLT kính lái trên 6 thẻ + ghi chú PRO (đậm hơn, không phải phù hợp hơn cho mọi người; xem mẫu thực tế) |
| P1-04 Bảo hành/tài liệu dễ tìm | Một phần | Tab dòng phim có link PDF + bảng 12 mã; nhãn "Hướng dẫn tra cứu bảo hành" giữ trong khối Tài liệu |
| P1-05 Form | Một phần | Nhãn nút rõ bên nhận; kiểm tra r.ok. Chờ IT nghiệm thu backend/phân tuyến |
| P2 Logo, offset, chứng nhận, báo chí | Đã sửa | Logo → trang chủ; một offset; chú thích Preferred Installer; báo chí 4 + xem thêm |
| Yêu cầu sếp 26/10 | Đã làm | 3 dòng phim dạng tab kiểu website 3M |

Theo phiếu R3: không tự cộng điểm, chờ reviewer chấm lại đúng build.

## Tự chấm lần 13 (bản 24/10/2026, preview /3m.365group.com.vn/phim-cach-nhiet-3m/)

| Mã | Tối đa | Lần 12 | Lần 13 | Căn cứ / phần thiếu |
|---|---:|---:|---:|---|
| C1 | 10 | 9,7 | 9,7 | Giá, cấu hình, 12 mã, bảo hành theo PDF 260815; 224 đại lý chủ trang chốt. Còn: site 365Group ghi 160+ |
| C2 | 10 | 9,3 | 9,4 | 6 thẻ giá có đủ mã theo vị trí kính, TSER kính lái, giá Minicar/Sedan/SUV, nút nhận báo giá; khối công nghệ 3M; 8 bài báo. Còn: case Ceramic IR, hướng dẫn chăm sóc phim |
| C3 | 10 | 9,2 | 9,6 | Tab và thẻ viết lợi ích trước (Mát xe / Bảo vệ da / Độ sáng kính / Bớt chói), thuật ngữ để trong ngoặc; nhãn thẻ "Cản nhiệt kính lái (TSER)", "Độ sáng kính lái (VLT)" |
| S1 | 10 | 9,3 | 9,3 | Không đổi |
| S2 | 10 | 9,4 | 9,4 | Không đổi (og 1200×630, caption bảng thông số, heading) |
| S3 | 10 | 9,8 | 9,8 | Không đổi; preview đổi đường dẫn có 301 từ /3m-365group/ |
| G1 | 10 | 9,5 | 9,5 | Thuật ngữ trong accordion vẫn nằm trong HTML + DefinedTermSet; câu công nghệ có nguồn |
| G2 | 10 | 9,6 | 9,5 | Bỏ bảng So sánh nhanh (trùng thẻ); còn bảng 12 mã + thẻ có TSER/giá |
| G3 | 5 | 4,7 | 4,7 | 8 bài báo (logo báo), kiểm duyệt Đặng Minh Hoàng ở khung cuối trang, PDF nguồn. Còn: case Ceramic IR; hồ sơ người duyệt trên site 365Group |
| U1 | 5 | 4,7 | 4,7 | Thẻ giá 3×2 (1 cột mobile), accordion thuật ngữ, khối công nghệ đồng bộ; bảng 12 mã cuộn ngang trên mobile (đã bỏ bộ lọc theo yêu cầu) |
| U2 | 5 | 4,6 | 4,7 | Nút "Nhận báo giá gói này" mở form chọn sẵn cấu hình. Còn: endpoint /api/leads chưa được IT xác nhận |
| U3 | 5 | 5,0 | 5,0 | 01–03 cùng SHA bên dưới |

**Tổng tự chấm lần 13: C 28,3 · S 28,5 · G 23,7 · U 14,4 → 94,9/100. CHƯA ĐẠT V1.8** — SEO 28,5 = ngưỡng; **GEO 23,7 < 23,75 (thiếu 0,05)**; tổng 94,9 < 95 (thiếu 0,1).

Để đạt: bài thi công Ceramic IR đã đăng (G3, C2) hoặc trang hồ sơ anh Hoàng trên site 365Group (G3) – một trong hai là đủ qua ngưỡng GEO và tổng. Đây là tự chấm, chờ reviewer.

## Cập nhật 24/10/2026 — thẻ giá 3×2, bỏ bảng So sánh nhanh

Thẻ giá đổi theo mẫu chủ trang (6 thẻ 3×2, hộp giá Minicar/Sedan/SUV, nút nhận báo giá), thêm TSER kính lái vào thẻ, bỏ bảng So sánh nhanh (trùng). G2 giảm nhẹ 9,6 → 9,5 (mất một bảng đối chiếu; vẫn còn bảng 12 mã). Ước tính tổng **94,7/100, CHƯA ĐẠT**. Chờ reviewer.

## Tự chấm lần 12 (bản 24/10/2026 – quay lại giao diện cũ + khối công nghệ 3M, báo chí)

Chủ trang yêu cầu giữ layout và nội dung cũ, chỉ thêm phần cần thiết. Giao diện dựng lại (lần 11) đã bỏ; điểm lần 11 không còn hiệu lực. So với lần 10:

| Mã | Lần 10 | Lần 12 | Căn cứ |
|---|---:|---:|---|
| C2 | 9,1 | 9,3 | Thêm khối Công nghệ 3M (Crystalline 200 lớp, cấu tạo 4 lớp, UV, bảo hành) và khối báo chí |
| G1 | 9,4 | 9,5 | Câu công nghệ trích riêng được, kèm nguồn PDF 260815 / 3M VN |
| G3 | 4,5 | 4,7 | 8 bài báo về 3M Pro Shop & Training Center (1 bài ghi rõ quảng cáo); tiêu đề/ngày theo trang báo chí trong repo, chưa mở lại từng link |
| Các mã khác | — | không đổi | |

**Tổng tự chấm lần 12: C 28,2 · S 28,5 · G 23,8 · U 14,3 → 94,8/100. CHƯA ĐẠT V1.8** — SEO 28,5 = ngưỡng; GEO 23,8 ≥ 23,75; tổng 94,8 < 95 (thiếu 0,2). Còn: case Ceramic IR, hồ sơ anh Hoàng trên site 365Group, bộ lọc đại lý theo nhóm. Chờ reviewer.

## Tự chấm lần 11 (bản 24/10/2026, giao diện mới theo brief trải nghiệm)

| Mã | Tối đa | Lần 10 | Lần 11 | Căn cứ / phần thiếu |
|---|---:|---:|---:|---|
| C1 | 10 | 9,7 | 9,7 | Giá, cấu hình, 12 mã, bảo hành theo PDF 260815; 224 đại lý chủ trang chốt. Còn: site 3m.365group.com.vn ghi 160+ |
| C2 | 10 | 9,1 | 9,4 | Thêm khối Công nghệ 3M (lịch sử hãng, Crystalline 200 lớp, cấu tạo 4 lớp, UV, bảo hành), khối báo chí, hỗ trợ sau khi dán; giá theo nhóm xe. Còn: case Ceramic IR, hướng dẫn chăm sóc phim |
| C3 | 10 | 9,2 | 9,3 | Văn phong theo trải nghiệm khách, ít thuật ngữ ở tầng đầu, số liệu đặt cạnh lợi ích |
| S1 | 10 | 9,3 | 9,3 | Không đổi |
| S2 | 10 | 9,4 | 9,5 | Hero ảnh 1600 px + ảnh mobile riêng, preload, alt mô tả đúng; heading theo thứ bậc; nội dung chi tiết trong details vẫn nằm trong HTML |
| S3 | 10 | 9,8 | 9,8 | Không đổi (link nội bộ, PDF, Offer, breadcrumb) |
| G1 | 10 | 9,4 | 9,5 | Khối công nghệ có câu trích riêng kèm nguồn; thuật ngữ + DefinedTermSet |
| G2 | 10 | 9,6 | 9,6 | Không đổi |
| G3 | 5 | 4,5 | 4,7 | 8 bài báo về 3M Pro Shop & Training Center (Thanh Niên, Kinh tế & Đời sống, Thể thao & Văn hóa, GenK, Dân Việt, Sức khỏe & Đời sống, Eva, Tinh Tế – ghi rõ "bài quảng cáo"); kiểm duyệt Đặng Minh Hoàng; PDF nguồn. Còn: case Ceramic IR; hồ sơ người duyệt trên site 365Group; tiêu đề/ngày bài báo lấy từ trang báo chí trong repo, chưa mở lại từng link |
| U1 | 5 | 4,7 | 4,8 | Hero sản phẩm, 3 lối vào, icon SVG, chữ 16 px, vùng chạm ≥44 px; render 375/820/1.366 px không tràn. Chưa thử thiết bị thật |
| U2 | 5 | 4,6 | 4,7 | Chọn nhóm xe đổi giá ngay (nhớ lựa chọn), giá không khóa sau form; form mở theo yêu cầu; tìm đại lý nhớ khu vực. Còn: endpoint /api/leads chưa được IT xác nhận |
| U3 | 5 | 5,0 | 5,0 | 01–03 cùng SHA bên dưới |

**Tổng tự chấm lần 11: C 28,4 · S 28,6 · G 23,8 · U 14,5 → 95,3/100.** Theo tự chấm, cả ba ngưỡng đã đạt trên preview (tổng ≥ 95; SEO 28,6 ≥ 28,5; GEO 23,8 ≥ 23,75), nhưng biên GEO rất mỏng (+0,05). **Đây là tự chấm, chưa phải nghiệm thu — chờ reviewer tái kiểm.** Trước xuất bản vẫn cần: IT đăng URL đích + upload ảnh/PDF, xác nhận /api/leads, xoá khối nội bộ.

## Dựng lại giao diện theo brief trải nghiệm (24/10/2026)

Trang dựng lại theo brief 23/10/2026 + góp ý sếp (thêm thông tin hãng, bài báo; giá để trong phần so sánh). Toàn bộ dữ liệu, schema, link, form, PDF, thuật ngữ giữ nguyên; bổ sung khối Công nghệ 3M và 8 bài báo. Đã render 375/820/1.366 px: không tràn ngang, menu ☰, chọn nhóm xe, lọc bảng mã, form (lỗi thiếu tỉnh; giả lập success:true) đều chạy. Chờ reviewer tái kiểm theo brief mới.

## Tự chấm lần 10 (bản 23/10/2026, PDF bảng giá 260815 tải về)

| Mã | Lần 9 | Lần 10 | Căn cứ |
|---|---:|---:|---|
| C1 | 9,4 | 9,7 | Toàn bộ giá, cấu hình, thông số trên trang có thể đối chiếu trực tiếp với PDF nguồn có mã 260815, ngày áp dụng 06/2026. Còn: site 3m.365group.com.vn ghi 160+ đại lý |
| S3 | 9,6 | 9,8 | Khối Tài liệu có file nguồn có phiên bản; câu nguồn bảng thông số link thẳng file. Còn: thẻ Pro Shop/Auto365 cùng danh sách chung |
| G3 | 4,4 | 4,5 | Tài liệu gốc có mã/ngày, người đọc và AI trích dẫn được. Còn: chưa có bài thi công Ceramic IR; hồ sơ anh Hoàng nằm trên auto365.vn |
| Các mã khác | — | không đổi | |

**Tổng tự chấm lần 10: C 28,0 · S 28,5 · G 23,5 · U 14,3 → 94,3/100. CHƯA ĐẠT V1.8** — SEO 28,5 = ngưỡng (đạt); GEO 23,5 < 23,75; tổng 94,3 < 95.

Còn thiếu ~0,7 điểm: bài thi công Ceramic IR đã đăng (G3, C2); trang hồ sơ anh Hoàng trên site 365Group (G3); bộ lọc đại lý theo nhóm (S3, U2). Đây là tự chấm, chờ reviewer.

## Tự chấm lần 9 (bản 23/10/2026, ảnh og 1200×630)

| Mã | Lần 8 | Lần 9 | Căn cứ |
|---|---:|---:|---|
| S2 | 9,0 | 9,4 | og:image 1200×630 riêng cho trang, có width/height/alt, twitter:card. Còn: ảnh hero trên trang vẫn từ bản gốc 701 px |
| Các mã khác | — | không đổi | Đã tìm case Ceramic IR trên auto365.vn (trang dòng IR, tìm kiếm tin tức): chỉ có bài tư vấn/so sánh, chưa có bài thi công → G3/C2 giữ nguyên |

**Tổng tự chấm lần 9: C 27,7 · S 28,3 · G 23,4 · U 14,3 → 93,7/100. CHƯA ĐẠT V1.8** — SEO 28,3 < 28,5; GEO 23,4 < 23,75.

Còn thiếu: bài thi công Ceramic IR đã đăng (G3 +0,3, C2); PDF bảng giá/thông số có revision đăng trên site 365Group (C1, S3); trang hồ sơ anh Hoàng trên site 365Group (G3); ảnh hero bản gốc lớn (S2). Đây là tự chấm, chờ reviewer.

## Tự chấm lần 8 (bản 23/10/2026, thêm thuật ngữ + nhãn link sang Auto365)

| Mã | Lần 7 | Lần 8 | Căn cứ |
|---|---:|---:|---|
| C2 | 9,0 | 9,1 | Thêm mục "Cách đọc các chỉ số" ngay dưới bảng thông số |
| S3 | 9,5 | 9,6 | 2 cấu hình chưa có trang trên site 365Group (Crystalline Hybrid, Hybrid PRO) có nhãn "Xem trên auto365.vn ↗", mở trang mới |
| G1 | 9,0 | 9,4 | Định nghĩa TSER, VLT, UVR, Glare R, IRR kèm điều kiện đo; nêu rõ IRR không thay TSER khi so cản nhiệt tổng; schema DefinedTermSet khớp nội dung hiển thị |
| Các mã khác | — | không đổi | |

**Tổng tự chấm lần 8: C 27,7 · S 27,9 · G 23,4 · U 14,3 → 93,3/100. CHƯA ĐẠT V1.8** — SEO 27,9 < 28,5; GEO 23,4 < 23,75.

Còn thiếu để đạt: case Ceramic IR đã đăng (G3, C2); ảnh og ≥1200 px (S2); link PDF bảng giá/thông số có revision trên site 365Group (C1, S3); hồ sơ anh Hoàng trên site 365Group (G3). Đây là tự chấm, chờ reviewer.

## Tự chấm lần 7 (bản 23/10/2026, sau phiếu tái kiểm 22/10 + bảng giá 260815)

| Mã | Tối đa | Lần 6 | Lần 7 | Căn cứ / phần thiếu |
|---|---:|---:|---:|---|
| C1 | 10 | 8,8 | 9,4 | Giá, 6 cấu hình, 12 mã thông số, bảo hành, điều kiện đo đều theo bảng 3M AutoFilm 365Group 260815 (06/2026); Ceramic IR đã thống nhất với Auto365; 224 đại lý chủ trang chốt. Còn: site 3m.365group.com.vn ghi 160+; tài liệu chưa có link tải bản PDF có revision |
| C2 | 10 | 8,2 | 9,0 | Thêm giá trọn xe theo cấu hình, khối Tài liệu & hỗ trợ, hướng dẫn tra cứu bảo hành, tìm đại lý theo khu vực, form. Còn: chưa có case Ceramic IR, chưa có quy trình thi công |
| C3 | 10 | 9,0 | 9,2 | Câu giải thích 6 cấu hình, FAQ theo nhu cầu, không claim quá |
| S1 | 10 | 9,0 | 9,3 | URL đích chốt, title/H1/meta theo vai trò tra cứu nhà phân phối, tách vai trò với Auto365 |
| S2 | 10 | 8,7 | 9,0 | Breadcrumb hiển thị, caption bảng, H1 gọn. Còn: og:image 701 px |
| S3 | 10 | 9,0 | 9,5 | Hết link 404, menu trỏ trang thật, khối tài liệu link sâu, AggregateOffer 6 cấu hình, tên WebSite đúng chủ thể. Còn: thẻ Pro Shop/Auto365 chung một danh sách; 2 cấu hình trỏ sang auto365.vn |
| G1 | 10 | 8,6 | 9,0 | Định nghĩa TSER, câu trả lời FAQ trích được. Còn: chưa có mục thuật ngữ VLT/IRR/IRER |
| G2 | 10 | 9,3 | 9,6 | 12 mã cùng điều kiện đo, bảng so sánh có giá + TSER + bảo hành, bộ lọc theo dòng |
| G3 | 5 | 4,3 | 4,4 | Kiểm duyệt Đặng Minh Hoàng, nguồn bảng giá chính thức, 4 chứng nhận, 5 case. Còn: case Ceramic IR; hồ sơ người duyệt trên auto365.vn |
| U1 | 5 | 4,4 | 4,7 | Menu ☰ ≤1.200 px, anchor không bị che, bảng lọc vừa mobile, hero cân lại; render 375/820/1.366 px không tràn. Chưa thử thiết bị thật |
| U2 | 5 | 4,6 | 4,6 | Form kiểm số/tỉnh/đồng ý, chỉ báo thành công khi success:true; tìm đại lý HCM/HN trang riêng. Còn: endpoint chưa được IT xác nhận, các tỉnh khác chỉ có danh sách chung |
| U3 | 5 | 5,0 | 5,0 | 01–03 cùng SHA bên dưới |

**Tổng tự chấm lần 7: C 27,6 · S 27,8 · G 23,0 · U 14,3 → 92,7/100. CHƯA ĐẠT V1.8** — SEO 27,8 < 28,5; GEO 23,0 < 23,75.

Để đạt (theo mức ảnh hưởng): case Ceramic IR đã đăng (G3, C2); mục thuật ngữ TSER/VLT/IRR (G1); ảnh og ≥1200 px (S2); trang cấu hình Hybrid/Hybrid PRO trên site 365Group hoặc nhãn rõ khi sang Auto365 (S3); link PDF bảng giá/thông số có revision (C1). Đây là tự chấm, chờ reviewer tái chấm.

## Đối chiếu bảng giá 260815 (23/10/2026)

Thêm giá trọn xe Minicar/Sedan/SUV của 6 cấu hình lên thẻ, bảng so sánh và AggregateOffer (xử lý điểm trừ S3 "Product không có Offer" và C2 thiếu giá theo cấu hình). Không tự cộng điểm, chờ reviewer.

Đã sửa: tên cấu hình Ceramic NR → **Ceramic Hybrid**; Crystalline Hybrid và Hybrid PRO kính sườn/lưng NR 25/15 → **NR 25/15/5**; Ceramic IR theo bảng mới (TSER IR 50 ~54%); bảng thông số còn 12 mã đúng bảng (bỏ CR BLK 30/70/80); điều kiện đo ghi chung cho cả bảng. Giá trọn xe, bảo hành, ghi chú cửa sổ trời khớp. Không tự cộng điểm.

## Tự chấm lần 6 (bản 23/10/2026, kiểm duyệt Đặng Minh Hoàng)

| Mã | Lần 5 | Lần 6 | Căn cứ |
|---|---:|---:|---|
| G3 | 4,3 | 4,3 | Kiểm duyệt kỹ thuật Đặng Minh Hoàng (Giám đốc điều hành 3M Pro Shop & 3M Training Center), hồ sơ có link, reviewedBy/lastReviewed 23/10; 5 bài thi công thật; 4 chứng nhận. Còn: chưa có case Ceramic IR; hồ sơ người duyệt nằm trên auto365.vn chứ chưa có trên site 365Group |
| Các mã khác | — | không đổi | Các sửa theo phiếu tái kiểm 22/10 (menu, tìm đại lý, bảng lọc, tài liệu, link 404…) **không tự cộng điểm**, chờ reviewer |

**Tổng tự chấm lần 6: C 26,0 · S 26,7 · G 22,2 · U 14,0 → 88,9/100. CHƯA ĐẠT V1.8** — SEO 26,7 < 28,5; GEO 22,2 < 23,75. Chờ: anh Hoàng chốt thông số Ceramic IR, IT đăng URL đích, số đại lý thống nhất, reviewer tái chấm.

## Cập nhật 23/10/2026 — gỡ người kiểm duyệt

Chủ trang xác nhận anh Nguyễn Quang Đạo không duyệt trang nhà phân phối 365Group. Đã gỡ tên khỏi trang và schema. G3 của lần tự chấm 3–5 (4,3) tính dựa trên người duyệt này nên **không còn hiệu lực**; ước tính G3 quay về ~3,0 → tổng tự chấm ~87,6/100, CHƯA ĐẠT, GEO ~20,9 < 23,75. Cần 365Group chỉ định người kiểm duyệt có tên.

## Xử lý phiếu tái kiểm 22/10/2026 (bản 23/10/2026)

Phiếu tái kiểm ghi điểm tự chấm lần 5 (88,9) chưa phải điểm nghiệm thu. **Không tự cộng điểm cho các sửa dưới đây; chờ reviewer chấm lại.**

| Mục phiếu | Trạng thái | Việc đã làm / còn chờ |
|---|---|---|
| 4.1 P0 case Everest 404 | Đã sửa | Link đổi sang `auto365.vn/dan-phim-cach-nhiet-3m-crystalline-cr-blk-ford-everest` |
| 4.1 P0 "Đại lý 3M khác" 404 | Đã sửa | Trỏ `/dai-ly-phim-cach-nhiet-3m-vn.html`, nhãn "Xem tất cả đại lý" |
| 4.1 P0 URL đích 404 | Chờ IT | Trang chưa triển khai tại `/phim-cach-nhiet-3m`; canonical/OG/schema đã thống nhất URL này |
| 4.1 P1 Trang chủ, Về 365Group `href="#"` | Đã sửa | `/index.html`, `/365-group.html` (200) |
| 4.1 P1 Tài liệu & Hỗ trợ | Đã sửa | Thêm khối #tai-lieu 4 liên kết sâu (thông số, tài liệu sản phẩm, tải tài liệu, bảo hành); nguồn bảng thông số dẫn `/thong-so-ky-thuat-3m.html` thay vì trang chủ. Còn: tài liệu chưa ghi revision/ngày hiệu lực (cần 365Group cung cấp) |
| 4.1 P1 og:image host preview | Đã sửa | Đổi sang đường dẫn 3m.365group.com.vn; IT cần upload ảnh |
| 4.1 P1 Thẻ Pro Shop/Auto365 cùng danh sách chung | Chờ dữ liệu | Danh bạ chưa có thuộc tính nhóm để lọc |
| 4.2 Tìm đại lý | Đã sửa (bản tối thiểu) | Đổi tên "Tìm đại lý 3M theo khu vực"; bỏ ô quận/huyện bị khoá; TP.HCM → `/dai-ly-3m-hcm.html`, Hà Nội → `/dai-ly-3m-ha-noi.html`, các tỉnh khác → danh sách toàn quốc (ghi rõ). Bản lọc đầy đủ chờ bảng điểm đại lý có ID/nhóm/ngày xác minh |
| 4.3 Menu ≤1.200 px | Đã sửa | Nút ☰ bàn phím được, aria-expanded |
| 4.3 Anchor bị header che | Đã sửa | scroll-margin 76 px |
| 4.3 Bảng 15 mã trên mobile | Đã sửa | Bộ lọc theo dòng; lọc 1 dòng không cần cuộn ngang |
| 4.3 Thẻ cấu hình 2 cột, chữ 12 px | Đã sửa | ≤480 px 1 cột, chữ 13 px |
| 4.3 Hero 820–1.024 px | Đã sửa | ≤1.024 px hero 1 cột |
| 4.3 Breadcrumb nhìn thấy | Đã sửa | Khớp BreadcrumbList |
| 5.1 Ceramic IR lệch Auto365 | Đã sửa 23/10 | Theo bảng 260815 (áp dụng 06/2026): IR 15/25/50 TSER 63/61/54, VLT 16/25/50, UVR 99,9/99,9/99,8; bảng 12 mã cùng điều kiện đo (kính xanh 6 mm, VLT 73%); IR 50 trong bảng so sánh ~54% |
| 5.2 Giải thích 6 cấu hình | Đã sửa | Câu ngay dưới tiêu đề 6 cấu hình: là cách phối mã do 365Group giới thiệu, không phải 6 dòng công nghệ; Hybrid/Hybrid PRO là phối CR BLK kính lái + NR kính hông/lưng |
| 5.3 Bảo hành | Giữ 10 năm (chủ trang xác nhận 22/10) | Có liên kết `/bao-hanh-3m.html` trong FAQ và khối Tài liệu. Còn: văn bản chính sách có mã phim/phạm vi |
| 5.3 Số đại lý 224/32 vs 160+ | Chủ trang chốt 224 (23/10) | Trang 3m.365group.com.vn còn ghi 160+, cần 365Group cập nhật |
| 6 Title/H1/meta | Đã đổi theo đề xuất | Xem 02 mục 2 |
| 6 Tên WebSite nhập nhằng | Đã sửa | "365Group – Nhà phân phối phim cách nhiệt 3M"; không dùng sameAs với 3M |
| 8 Form khi thiếu khu vực | Đã sửa | Tỉnh/thành bắt buộc trước khi gửi. Còn: IT/vận hành thử luồng nhận trên endpoint thật |
| 8 Hiệu năng | Chưa đo | Chưa có Lighthouse/CrUX |
| Ngày | dateModified 2026-10-23 | lastReviewed giữ 2026-10-22 |

## Đã sửa (22/10/2026)

Lần 2: thêm block xe thực tế (5 bài đã đăng); bỏ từ claim quá ở hero, 3 dòng phim, nhãn PRO, bảng so sánh, thẻ đại lý; câu NR theo câu đã duyệt; thay ô "Không gây nhiễu tín hiệu" bằng "Bảo hành điện tử 10 năm"; thêm NR 35/25/15/5 vào bảng thông số.

Lần 1:

- Thêm `robots noindex,nofollow` cho preview và bộ thẻ Open Graph.
- Tagline hero đổi từ H2 sang `<p>` (H2 chỉ dùng cho tiêu đề block).
- Thêm caption cho bảng so sánh và bảng thông số.
- Thêm khối "Kiểm tra nội bộ" (chỉ hiện trên pages.dev/localhost) dẫn tới 01–03.
- Lập bộ 01/02/03 cùng SHA (U3).

## Việc cần làm để đạt (theo mức ảnh hưởng)

| # | Việc | Tiêu chí | Ai quyết |
|---|---|---|---|
| 1 | Chốt URL/domain đích, canonical, đổi link nội bộ sang URL thật, thêm BreadcrumbList/WebSite, @id tuyệt đối | S1, S3 | SEO/chủ trang | ✅ Đã làm (URL https://3m.365group.com.vn/phim-cach-nhiet-3m)
| 2 | Người kiểm duyệt kỹ thuật có tên (vd anh Nguyễn Quang Đạo hoặc anh Đặng Minh Hoàng) + `reviewedBy`/`lastReviewed` | G3, C1 | Chủ trang | ✅ Đặng Minh Hoàng (23/10/2026)
| 3 | Thêm block xe thực tế (case đã đăng trên auto365.vn theo từng cấu hình) | C2, G3 | Có thể làm ngay từ bài đã đăng | ✅ Đã làm (lần 2)
| 4 | Bỏ từ claim quá ("vượt trội", "tối ưu", "cao cấp nhất"), sửa câu mô tả Ceramic NR theo câu đã duyệt | C3 | Có thể làm ngay | ✅ Đã làm (lần 2)
| 5 | Thêm thông số NR 35/25/15/5 (catalog NR 03/2026) vào bảng kỹ thuật | C2, G2 | Có thể làm ngay | ✅ Đã làm (lần 2)
| 6 | Thống nhất số đại lý (224 hay 160+) giữa trang này và 3m.365group.com.vn | C1 | Kinh doanh |
| 7 | Form để lại thông tin (POST /api/leads) hoặc nút Zalo/hotline rõ | U2 | Chủ trang | ✅ Đã làm (form #tu-van, chờ IT xác nhận endpoint)
| 8 | Nguồn cho "Không gây nhiễu tín hiệu" hoặc bỏ | C1 | Có thể làm ngay | ✅ Đã làm (lần 2)
| 9 | Ảnh hero/og bản gốc ≥ 1600px | S2 | Chủ trang |

Mọi sửa HTML sau phiên bản này phải xuất lại 01 và cập nhật SHA ở 02/03.

## Bảng đối chiếu phiên bản

| File | Phiên bản |
|---|---|
| `auto365/3m.365group.com.vn/phim-cach-nhiet-3m/index.html` | SHA-256 `de4535533017cf79344b4ec7f7065cb13c65f29b501947337ff46dceb4bcaf74` |
| 01_Noi_dung_3M_365Group.md | Xuất tự động từ HTML trên, 22/10/2026 |
| 02_Huong_dan_CMS_SEO_3M_365Group_V1.8.md | Ghi cùng SHA-256 |

Điểm là nhận định biên tập, không phải điểm Google hay xác suất AI đề xuất.
