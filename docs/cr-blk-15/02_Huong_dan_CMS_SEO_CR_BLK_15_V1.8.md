# 02 — Hướng dẫn CMS/SEO: 3M CR BLK 15 (V1.8)

- Bản nguồn: `auto365/ma-phim/cr-blk-15.html` (preview https://preview-365group.pages.dev/ma-phim/cr-blk-15)
- URL production giữ nguyên: https://auto365.vn/phim-cach-nhiet-3m-cr-blk-15 (cập nhật URL hiện có, không tạo URL mới)
- Loại trang: Mã phim kính sườn sau/kính lưng. Câu hỏi chính: CR BLK 15 có hợp xe của tôi không, giá, nhìn ra ngoài thế nào.
- Phiên bản bàn giao: HTML SHA-256 `c368b78b6185a0e68a8a232480557661a500fe53367717751cbed2839258d2a8` (08/10/2026); phần 01 = file HTML này; phần 03 = `03_Phieu_danh_gia_CR_BLK_15_V1.8.md`
- Cập nhật 06/10/2026 (nguồn: Bảng giá chính thức 3M AutoFilm (chủ trang xác nhận 06/10/2026)): kính lưng NR25/NR15/NR5 cùng 1.900.000đ/kính; NR5 nay được dùng cho kính lưng (quy tắc cũ "NR5 không dùng kính lưng" đã thu hồi). Quy tắc kính lưng NR đã đồng bộ ở dữ liệu gợi ý mã, thẻ gói, FAQ (HTML + JSON-LD) của trang này (chỉ dữ liệu gợi ý dùng chung). NR35 chỉ kính lái; NR25/NR5 không dùng kính lái.
- dateModified: 2026-10-08; byline "Cập nhật nội dung 06/10/2026". Không có datePublished (chưa có dữ liệu); không tự thêm.

## 1. Bối cảnh các sửa đổi

Sếp duyệt preview lúc khoảng 18:00 ngày 05/10/2026 và yêu cầu chỉnh. Quy tắc cũ "không nhấn mạnh tối/đi đêm" chỉ nới ở các câu nhắc quan sát có điều kiện, ngắn, trung tính, không hứa hẹn (popup và FAQ liên quan). Mọi giá đã gồm VAT; hotline 0365 365 365; ưu đãi/dịch vụ áp dụng toàn hệ thống 91 chi nhánh; bảo hành ghi "lên đến 10 năm theo chính sách 3M Việt Nam".

**Nội dung trang này đã sửa**

- Dòng vị trí ở Tóm tắt nhanh: "Kính sườn sau, kính lưng; cửa sổ trời tư vấn sau khi kiểm tra kính nóc của xe"; thẻ so sánh CR BLK 15 thêm "cửa sổ trời cần kiểm tra loại kính và báo giá theo xe".
- FAQ nhìn ra ngoài viết lại (HTML + JSON-LD khớp), thêm ý chiều tối/thiếu sáng, kính lưng qua gương chiếu hậu trong xe, so thêm CR BLK 35.
- H3 "Khi nào nên chọn mã sáng hơn?" thêm ý chiều tối/thiếu sáng.
- Khối chứng nhận: thêm câu phạm vi hồ sơ; khối ảnh máy đo: thêm chú thích ghi nhận trung tính.
- Offer Service đặt tên "CR BLK 15 - một cặp kính sườn" (một giá duy nhất đang hiển thị, không cần tách).

**Sửa dùng chung (cả 9 trang mã phim)**: popup ghi chú quan sát theo vị trí + link "So với …" (CR BLK 15/IR15/NR15 ở sườn trước); nhãn giá có "đã gồm VAT"; nguồn thông số theo mã (trường SRC); nhãn ưu tiên "Kín hơn (độ truyền sáng thấp)" kèm dòng giải thích xếp theo VLT; form lead (trả focus về nút mở popup, khóa Tab trong hộp thoại, xóa trạng thái cũ mỗi lần mở, sau gửi thành công nhãn "Bạn đang quan tâm" luôn bằng gói ẩn, tùy chọn nhu cầu theo gói); tên điểm "Auto365.vn - Trụ Sở Chính" (gạch ngang thường); "điểm phần trăm" thay cho "điểm".

## 2. Đã kiểm trên production (06/10/2026)

| Hạng mục | Kết quả |
|---|---|
| HTTP, canonical | 200; canonical tự trỏ đúng URL |
| Robots | `index, follow, max-image-preview:large…`, không noindex. Preview có noindex qua `_headers` (đúng chủ đích); không mang header này sang production. |
| Nội dung live cũ 1 | Live: canonical đúng, index/follow. Title live "Phim cách nhiệt 3M CR BLK 15 / Auto365", H1 "Phim cách nhiệt 3M CR BLK 15" (không có vị trí/giá/VLT). |
| Nội dung live cũ 2 | Live đang hiển thị giá kính sau 4.100.000đ và cửa sổ trời 1.300.000đ; bản mới KHÔNG công bố hai số này (chưa có xác nhận). Không tự thêm; chờ Kinh doanh duyệt rồi mới đưa vào cả HTML + Offer. |
| Nội dung live cũ 3 | Live chưa có câu "đã gồm VAT" cạnh giá. |

## 3. Việc IT/CMS

1. Thay nội dung trang hiện có bằng bản mới; giữ một H1 và title/meta của bản mới (title 51 ký tự: "3M CR BLK 15: giá, thông số, dán kính sau | Auto365").
2. Ảnh trong `assets/` upload lên CMS, đổi `src` sang URL CMS thật; đường dẫn `assets/…` chỉ dùng cho preview.
3. JSON-LD: hợp nhất với graph CMS tự sinh, không để hai Product/WebPage mâu thuẫn. Giữ Organization, AutoRepair `#tru-so-chinh`, WebPage (author, reviewedBy, citation, dateModified), Product, Service (offers theo vị trí: giá hiện có [2600000] VND), BreadcrumbList, FAQPage (7 câu, khớp HTML). Không thêm InStock, priceValidUntil, rating.
4. Form `/api/leads`: kiểm bằng lead thử do team tạo (đánh dấu TEST): hero → CR BLK 15; thẻ gói → gói + "Nhiều vị trí"; popup gợi ý mã + vị trí → đúng mã + vị trí. Chỉ coi là thành công khi phản hồi {"success": true}. Lưu ý: /api/leads không validate phone/consent phía server.
5. Preview giữ noindex; production kiểm lại header và meta robots sau khi ghép.

## 4. Việc team (trang/bài khác trên site live — không sửa trong đợt này)

- Back-link từ bài case Subaru về trang CR BLK 15. Câu anchor gợi ý: "Xem xe Subaru đã dán CR BLK 15 tại Auto365" (chỉ dùng nếu bài đúng là CR BLK 15; kiểm bài trước khi gắn).
- Back-link từ bài case Viloran. Câu anchor gợi ý: "Xem xe Viloran đã dán CR BLK 15 tại Auto365" (kiểm đúng mã/vị trí trong bài).
- Bài Innova/camera hành trình: nếu nhắc kính lưng dán CR BLK 15, thêm câu "Với kính lưng nên kiểm tra tầm nhìn qua gương chiếu hậu trong xe; camera lùi hỗ trợ khi lùi xe" và link về trang CR BLK 15.
- Hub Crystalline: kiểm các câu "tối hơn/cách nhiệt tốt hơn" theo hướng dẫn trong docs/cr-blk-40/02, bảo đảm CR BLK 15 chỉ ghi cho kính sườn sau, kính lưng (cửa sổ trời sau khi kiểm kính nóc).

## 5. Nguồn

- Thông số trang: VLT 14, TSER 64, IRER 66, giảm chói 81 (kính Auto 75; brochure 3M Việt Nam ©2025).
- Bảo hành (3M Việt Nam, lên tới 10 năm): https://www.3m.com.vn/3M/vi_VN/car-personalization-vn/products/automotive-window-tint/
- Crystalline TDS Rev F 08/2025: https://multimedia.3m.com/mws/media/2628835O/cystalline-technical-data-sheet.pdf ; Ceramic IR TDS Rev B 07/2021: https://multimedia.3m.com/mws/media/1919598O/3m-automotive-window-film-ceramic-ir-series-tech-data-sheet.pdf

## 6. Còn chờ dữ liệu (CX)

- Brochure 3M Crystalline CR BLK Việt Nam ©2025 (CR BLK 15) đã có link công khai trên trang (multimedia.3m.com); CR BLK 60/50/40/35 theo TDS Rev F 08/2025.
- Giá kính lưng 4.100.000đ và cửa sổ trời 1.300.000đ trên live: chưa xác nhận, không đưa vào bản mới.
- Ảnh máy đo trên trang: chủ trang đã duyệt 06/10/2026 (xác nhận của chủ trang, không phải kiểm định độc lập); biên bản đo gốc dạng file vẫn chưa có. Back-link Subaru/Viloran vẫn là việc team (câu anchor có sẵn ở mục 4); S3 giữ 9,5.
- Văn bản chính sách bảo hành riêng theo từng mã phim tại Việt Nam (trang đang dùng câu "lên đến 10 năm theo chính sách 3M Việt Nam" do chủ trang xác nhận).
- Danh sách chi nhánh có dịch vụ cho mã này (ưu đãi/dịch vụ áp dụng toàn hệ thống 91 chi nhánh đã được chủ trang xác nhận).
- Search Console (URL Inspection, canonical Google chọn), mobile thiết bị thật, PageSpeed, lead thử vào CRM (form POST /api/leads, chỉ báo thành công khi {"success": true}).

> Cập nhật 06/10/2026: nguồn bảo hành là cổng eWarranty 3M (https://ews2.3m.com/ews/pub/vnaf/searchWarranty) — chủ trang xác nhận đây là link chuẩn; đã mở được bằng trình duyệt. Đã bỏ link trang 3M Việt Nam (phim ô tô) khỏi các trang.
