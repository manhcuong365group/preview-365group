# Bàn giao triển khai 10 trang mã phim (V1.8) — việc cần người xác nhận

Ngày lập: 08/10/2026. Phạm vi: cr-blk-15, cr-blk-35, cr-blk-40, ir50, ir25, ir15, nr35, nr25, nr15, nr5.
Các mục dưới đây cần quyết định hoặc thao tác của người có thẩm quyền; phần Claude đã chuẩn bị sẵn nội dung để chỉ cần xác nhận/làm theo. Ô "Xác nhận" để trống đến khi người phụ trách điền.

## 1. Xác nhận thương mại (Kinh doanh) — một văn bản cho cả 10 trang

Các giá trị đang hiển thị trên preview, đều ghi "đã gồm VAT". Giá đã được đối chiếu và khớp trang chuẩn https://auto365.vn/phim-cach-nhiet-o-to-3m (08/10/2026); Kinh doanh chỉ cần xác nhận các câu hỏi bổ sung bên dưới (mốc hiệu lực, phạm vi áp dụng).

| Hạng mục | Giá hiển thị | Xác nhận |
|---|---|---|
| CR BLK 60 / 50 kính lái | 5.700.000đ / kính | Khớp trang chuẩn 08/10/2026 |
| CR BLK 40 kính lái | 6.500.000đ / kính | Khớp trang chuẩn 08/10/2026 |
| IR50 kính lái | 3.300.000đ / kính | Khớp trang chuẩn 08/10/2026 |
| NR35 kính lái | 2.600.000đ / kính | Khớp trang chuẩn 08/10/2026 |
| Kính sườn (1 cặp) CR BLK 35/15 | 2.600.000đ | Khớp trang chuẩn 08/10/2026 |
| Kính sườn (1 cặp) IR25/IR15 | 1.800.000đ | Khớp trang chuẩn 08/10/2026 |
| Kính sườn (1 cặp) NR25/NR15/NR5 | 1.700.000đ | Khớp trang chuẩn 08/10/2026 |
| Kính lưng CR BLK 35/15 | 4.100.000đ | Khớp trang chuẩn 08/10/2026 |
| Kính lưng IR25/IR15 | 2.300.000đ | Khớp trang chuẩn 08/10/2026 |
| Kính lưng NR25/NR15/NR5 | 1.900.000đ | Khớp trang chuẩn 08/10/2026 |
| Cửa sổ trời nhỏ NR | từ 850.000đ, tùy diện tích; panorama từ 2.600.000đ, báo giá theo kích thước kính | Khớp trang chuẩn 08/10/2026 |
| Cửa sổ trời CR BLK 15 / IR15 | báo giá theo xe | Khớp trang chuẩn 08/10/2026 |
| Gói CR BLK Pro / CR BLK | 12,9/15,5/18,3 tr · 12,2/14,8/17,6 tr (Minicar/Sedan/SUV) | Khớp trang chuẩn 08/10/2026 |
| Gói Hybrid Pro / Hybrid | 9,8/11,6/13,3 tr · 9,0/10,8/12,5 tr | Khớp trang chuẩn 08/10/2026 |
| Gói Ceramic Hybrid / Ceramic IR | 5,9/7,9/9,5 tr · 7,2/9,0/10,5 tr | Khớp trang chuẩn 08/10/2026 |

Cần trả lời thêm:
1. Giá đã gồm VAT và công dán, tháo + vệ sinh phim cũ miễn phí: áp dụng mọi điểm hay theo điều kiện? ______
2. Quyền lợi (rửa xe/hút bụi, vệ sinh kính, giảm giá lần sau): điểm nào áp dụng? ______
3. Mốc hiệu lực bảng giá: **08/10/2026 (đã xác nhận)**. Trang đã đổi từ "từ 06/2026" sang "cập nhật và xác nhận ngày 08/10/2026". ✔ Đã trả lời
4. Mái kính (cửa sổ trời): **không nằm trong giá gói (đã xác nhận)**. Mọi gói (Ceramic Hybrid, Ceramic IR, Crystalline Hybrid/Pro, CR BLK/Pro…) không gồm cửa sổ trời; tính riêng: nhỏ từ 850.000đ tùy diện tích, panorama từ 2.600.000đ báo giá theo kích thước kính. Trang đã ghi "Cửa sổ trời tính riêng, không nằm trong giá gói." ✔ Đã trả lời
5. Điểm nào là 3M Pro Shop / Training Center được chứng nhận (đối chiếu 4 giấy chứng nhận trên trang)? ______
Người xác nhận / ngày: ______

Nếu Kinh doanh trả lời khác giá hiển thị, báo Claude để sửa đồng loạt (HTML, FAQ, JSON-LD, bộ gợi ý).

## 2. Nguồn số liệu NR và CR BLK 15 (Kỹ thuật/Master Data) — đã quyết định

- NR: dùng Catalog 3M Ceramic NR Việt Nam 03/2026 (bảng 4 mã, kính xanh 6 mm, nền 73%). Không trộn với bộ số TDS NR 01/2026 trong Master Data nội bộ. Cần thêm catalog này vào registry kèm ngày/người xác nhận.
- CR BLK 15: dùng Brochure 3M Crystalline CR BLK Việt Nam ©2025 (https://multimedia.3m.com/mws/media/2625471O/cbtd-personal-auto-2025.pdf). Số 14/64/81 giữ nguyên; CR BLK 60/50/40/35 theo TDS Rev F 08/2025.

## 3. Upload catalog PDF lên production (IT/CMS)

Vì sao cần upload / nếu không: link tương đối `assets/` chỉ chạy ở preview; trên auto365.vn sẽ 404, khách bấm nguồn gặp lỗi, mất truy nguyên (G3/S3) và ảnh chứng nhận bị vỡ.

1. Upload `auto365/ma-phim/assets/3m-ceramic-nr-catalog-viet-nam-03-2026.pdf` (6,2 MB) và các ảnh trong `assets/` lên kho tài sản của CMS; ghi lại URL thật.
2. Thay mọi `href="assets/3m-ceramic-nr-catalog-viet-nam-03-2026.pdf"` và `src="assets/…"` trong 10 trang bằng URL thật. Lệnh gợi ý (chạy sau khi có URL, ví dụ BASE):
   `sed -i 's#assets/#BASE/#g' auto365/ma-phim/<slug>.html`
3. Thêm `"url": "<URL PDF thật>"` vào `WebPage.citation` của catalog NR trong JSON-LD (nr35, nr25, nr15, nr5, ir50).
4. Kiểm từng URL trả 200 và đúng loại nội dung (PDF/ảnh), không phải trang HTML thay thế.

## 4. Đồng bộ các bài đang chạy trên auto365.vn (Content/SEO)

Quy tắc đã chốt: NR25 không dùng kính lái; NR5 được dùng cho kính lưng.

| Trang live | Cần sửa |
|---|---|
| https://auto365.vn/phim-cach-nhiet-3m-nr-25 | Bỏ lựa chọn "Kính lái 2.600.000đ" cho NR25; ghi kính lái dùng NR35 |
| https://auto365.vn/phim-cach-nhiet-o-to-3m-ceramic-hybrid (hub NR) | Bỏ thẻ "Kính lái" của NR25 và giá kính lái ở cột NR25; thẻ NR5 thêm kính lưng |
| https://auto365.vn/phim-cach-nhiet-3m-nr-15 | Tách dòng "kính lái 2.600.000đ" ra khỏi bảng giá NR15 (ghi rõ đó là NR35) |
| https://auto365.vn/phim-cach-nhiet-3m-nr-5 | Bộ chọn/mô tả: thêm kính lưng 1.900.000đ; "kính sườn" ghi rõ sườn sau |
| https://auto365.vn/vinfast-vf3-dan-phim-cach-nhiet-3m-2026 | Bảng IR dùng VLT 58% cho IR50: đổi theo TDS Rev B cùng một nền kính (IR50 = 50% trên Auto 75, 60% trên kính trong) hoặc ghi rõ đó là số đo ca xe |
| https://auto365.vn/vinfast-vf5-chay-dich-vu-chon-phim-cach-nhiet | NR25/NR15 VLT 24%/12% (TDS NR Rev A 01/2026) khác catalog VN 29%/14%: đối chiếu theo mục 2 |
| Hub Crystalline | Bỏ câu "cách nhiệt tốt hơn / chống nóng hiệu quả"; bỏ CR BLK 40 khỏi hàng kính sườn trước (thay bản trong docs/cr-blk-40/02…) |
| K5 (CR BLK 40) | Hotline phim 0365 365 911 → kiểm theo quy định hotline đã chốt |
| https://auto365.vn/innova-dan-phim-cach-nhiet-3m-camera-hanh-trinh | Thân bài/trích đoạn IR15 còn VLT 18%, TSER 59%, UV 99%: đổi theo TDS Rev B cùng một nền kính (Auto 75: 16/63, UV 99,9%; kính trong: 19/59). Giữ phần thẻ sản phẩm đã đúng |
| https://auto365.vn/dan-phim-cach-nhiet-3m-ceramic-nr-cua-so-troi-panorama-gia-bao-nhieu | Kính cửa sổ trời nhỏ ghi 1.700.000đ, 10 trang mã và hub NR ghi từ 850.000đ: Kinh doanh chốt một mức rồi đồng bộ |
| VF3 (bài 2026) | Đoạn tư vấn giá dùng hotline 0365 365 911, cuối bài dùng 0365 365 365: kiểm theo phân luồng hotline |

## 5. Nghiệm thu L1–L8 sau khi ghép CMS (IT/QA)

Ghi Pass/Fail/CX/NA cho từng URL sau khi đăng, kèm ngày và phạm vi:
- L1 nội dung/ảnh/title/H1/meta khớp bản duyệt · L2 HTTP 200, canonical tự trỏ, meta robots `index, follow`, **không** có `X-Robots-Tag: noindex` (header này chỉ dành cho preview) · L3 URL Inspection (canonical Google chọn) · L4 Rich Results/Schema Validator, JSON-LD không trùng graph CMS · L5 desktop/mobile/tablet thật · L6 PageSpeed lab + field · L7 link, điện thoại, form `/api/leads` bằng lead thử đánh dấu TEST (đúng mã/vị trí/gói) · L8 HTML trả về có đủ văn bản, bảng, a href.

## 6. Theo dõi AI (SEO/Local) — báo cáo riêng, không tính điểm

Ghi riêng 5 tín hiệu: Found, Understood, Cited, Mentioned, Recommended; kèm nền tảng/model, chế độ tìm web, ngày giờ, câu hỏi nguyên văn, toàn văn trả lời, URL được dẫn. Tách phép thử không đưa URL (đo tìm thấy) và có đưa URL (đo hiểu). Mốc: T0 (ngày đăng thật), +7, +14, +28 ngày.

Bộ câu hỏi tự nhiên (không nhắc Auto365):
1. CR BLK 40 có phù hợp kính lái không, VLT bao nhiêu?
2. CR BLK 35 hay CR BLK 15 cho kính sườn?
3. IR50 và NR35 khác nhau gì cho kính lái?
4. IR25 khác IR15 thế nào, kính lưng giá bao nhiêu?
5. NR25 có dán kính lái được không?
6. NR5 dán kính lưng có nhìn được không, đi đêm cần lưu ý gì?
7. IRR 91% có phải giảm 91% nhiệt không?
8. Bảo hành phim 3M lên đến 10 năm tra cứu ở đâu?

## 7. Ghi chú cho IT/CMS khi nhập lên v2 (theo các báo cáo kiểm v2 ngày 08–09/10/2026)

Đã sửa trong HTML nguồn (repo, 09/10/2026) — cần nhập lại bản mới lên v2:
- Link catalog NR trong bộ gợi ý mã (popup) tự lấy đúng thư mục của ảnh chứng nhận, nên trên v2 sẽ trỏ `/assets/landing/ma-phim/3m-ceramic-nr-catalog-viet-nam-03-2026.pdf` (file này đã có trên v2, HTTP 200). Hết lỗi 404.
- Nút "Mua / tư vấn" của thanh CMS (`data-js="landing-len-mua"`) được trang bắt trước và mở đúng form tư vấn của mã đang xem. IT nên gỡ handler cũ (cuộn tới form ẩn) để tránh xử lý trùng.
- Modal gợi ý mã và form tư vấn có z-index 1101/1102, cao hơn header CMS (1040) và thanh sticky (1030); thanh sticky tự ẩn khi modal mở. Hết lỗi bấm nút đóng bị header che.
- CR BLK 40: nhãn nguồn CR BLK 15 trong popup đổi sang "Brochure 3M Crystalline CR BLK Việt Nam ©2025".
- CR BLK 15: bảng ghi rõ Auto 75 theo brochure VN ©2025 + TDS Rev E; hàng kính trong 6 mm và VLR theo TDS Rev E (có link).
- Chữ "Xem tất cả case" đổi thành "Xem tất cả hồ sơ xe".

Việc chỉ CMS làm được (không nằm trong HTML landing):
- Title/meta/OG/Twitter do CMS xuất đang là bản cũ (vd CR BLK 40 còn "kính lái hoặc kính sườn trước"; NR5 thiếu kính lưng). Dùng đúng `<title>` và `<meta name="description">` trong file HTML repo của từng mã.
- Thanh giá sticky của CMS cần ghi đơn vị, ví dụ "Từ 1.700.000đ/cặp kính sườn" (NR), "Từ 1.800.000đ/cặp kính sườn" (IR25/IR15), "Từ 2.600.000đ/cặp kính sườn" (CR BLK 15/35), "Từ 6.500.000đ/kính lái" (CR BLK 40), "Từ 3.300.000đ/kính lái" (IR50), "Từ 2.600.000đ/kính lái" (NR35). NR25 hiện đang hiện 2.600.000đ không đơn vị: đổi thành 1.700.000đ/cặp kính sườn.
- CMS đang bỏ node FAQPage khỏi JSON-LD của landing; nếu muốn giữ, nhập nguyên khối JSON-LD trong file HTML.
- Breadcrumb CMS của CR BLK 40 đang đi qua "CR BLK Pro"; nên đi qua "3M Crystalline CR BLK" cho khớp BreadcrumbList.
- Khi lên auto365.vn: upload cùng thư mục `/assets/landing/ma-phim/` (ảnh + PDF), canonical/og:url về URL production, bỏ noindex của v2.
