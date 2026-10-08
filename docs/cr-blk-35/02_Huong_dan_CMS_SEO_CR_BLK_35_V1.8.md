# 02 — Hướng dẫn CMS/SEO: 3M CR BLK 35 (V1.8)

- Bản nguồn: `auto365/ma-phim/cr-blk-35.html` (preview https://preview-365group.pages.dev/ma-phim/cr-blk-35)
- URL production giữ nguyên: https://auto365.vn/phim-cach-nhiet-3m-cr-blk-35 (cập nhật URL hiện có, không tạo URL mới)
- Loại trang: Mã phim kính sườn trước/sau/kính lưng. Câu hỏi chính: CR BLK 35 giá, hợp kính sườn trước không.
- Phiên bản bàn giao: HTML SHA-256 `c58ec497075a47c9535d0a97d7ab665a2ef6d2414cd2e43fd8c7e8bf19936b91` (08/10/2026); phần 01 = file HTML này; phần 03 = `03_Phieu_danh_gia_CR_BLK_35_V1.8.md`
- Cập nhật 06/10/2026 (nguồn: Bảng giá chính thức 3M AutoFilm (chủ trang xác nhận 06/10/2026)): kính lưng NR25/NR15/NR5 cùng 1.900.000đ/kính; NR5 nay được dùng cho kính lưng (quy tắc cũ "NR5 không dùng kính lưng" đã thu hồi). Quy tắc kính lưng NR đã đồng bộ ở dữ liệu gợi ý mã, thẻ gói, FAQ (HTML + JSON-LD) của trang này (chỉ dữ liệu gợi ý dùng chung). NR35 chỉ kính lái; NR25/NR5 không dùng kính lái.
- dateModified: 2026-10-08; byline "Cập nhật nội dung 06/10/2026". Không có datePublished (chưa có dữ liệu); không tự thêm.

## 1. Bối cảnh các sửa đổi

Sếp duyệt preview lúc khoảng 18:00 ngày 05/10/2026 và yêu cầu chỉnh. Quy tắc cũ "không nhấn mạnh tối/đi đêm" chỉ nới ở các câu nhắc quan sát có điều kiện, ngắn, trung tính, không hứa hẹn (popup và FAQ liên quan). Mọi giá đã gồm VAT; hotline 0365 365 365; ưu đãi/dịch vụ áp dụng toàn hệ thống 91 chi nhánh; bảo hành ghi "lên đến 10 năm theo chính sách 3M Việt Nam".

**Nội dung trang này đã sửa**

- Chỉ áp dụng các sửa dùng chung (popup, form, S4–S7); đã rà vị trí kính sườn trước/sau/lưng: nhất quán trong hero, tóm tắt, thẻ vị trí, gói và FAQ (kính lái không phối CR BLK 35).
- Offer Service: thêm tên "CR BLK 35 - một cặp kính sườn trước" và ghi "đã gồm VAT".

**Sửa dùng chung (cả 9 trang mã phim)**: popup ghi chú quan sát theo vị trí + link "So với …" (CR BLK 15/IR15/NR15 ở sườn trước); nhãn giá có "đã gồm VAT"; nguồn thông số theo mã (trường SRC); nhãn ưu tiên "Kín hơn (độ truyền sáng thấp)" kèm dòng giải thích xếp theo VLT; form lead (trả focus về nút mở popup, khóa Tab trong hộp thoại, xóa trạng thái cũ mỗi lần mở, sau gửi thành công nhãn "Bạn đang quan tâm" luôn bằng gói ẩn, tùy chọn nhu cầu theo gói); tên điểm "Auto365.vn - Trụ Sở Chính" (gạch ngang thường); "điểm phần trăm" thay cho "điểm".

## 2. Đã kiểm trên production (06/10/2026)

| Hạng mục | Kết quả |
|---|---|
| HTTP, canonical | 200; canonical tự trỏ đúng URL |
| Robots | `index, follow, max-image-preview:large…`, không noindex. Preview có noindex qua `_headers` (đúng chủ đích); không mang header này sang production. |
| Nội dung live cũ 1 | Live: canonical đúng, index/follow. Title live "Phim cách nhiệt 3M CR BLK 35 kính sườn: VLT 33%, giá dán", H1 "3M CR BLK 35: thông số và cách chọn cho kính sườn, kính sau". |
| Nội dung live cũ 2 | Live hiển thị "kính lưng 4.100.000đ · cửa sổ trời 1.300.000đ" ngoài 2.600.000đ/cặp sườn trước; bản mới không công bố hai số này (chưa xác nhận) nên cần Kinh doanh quyết định trước khi ghép. |
| Nội dung live cũ 3 | Live có bảng so sánh (CR BLK 40/35/15) ghi "hợp nhất khi kính sườn trước cần sáng, hay đi đêm" (cùng chỗ với hub) → sửa theo hướng điều kiện: "nên xem mẫu trên xe". |

## 3. Việc IT/CMS

1. Thay nội dung trang hiện có bằng bản mới; giữ một H1 và title/meta của bản mới (title 52 ký tự: "3M CR BLK 35: giá, thông số, dán kính sườn | Auto365").
2. Ảnh trong `assets/` upload lên CMS, đổi `src` sang URL CMS thật; đường dẫn `assets/…` chỉ dùng cho preview.
3. JSON-LD: hợp nhất với graph CMS tự sinh, không để hai Product/WebPage mâu thuẫn. Giữ Organization, AutoRepair `#tru-so-chinh`, WebPage (author, reviewedBy, citation, dateModified), Product, Service (offers theo vị trí: giá hiện có [2600000] VND), BreadcrumbList, FAQPage (7 câu, khớp HTML). Không thêm InStock, priceValidUntil, rating.
4. Form `/api/leads`: kiểm bằng lead thử do team tạo (đánh dấu TEST): hero → CR BLK 35; thẻ gói → gói + "Nhiều vị trí"; popup gợi ý mã + vị trí → đúng mã + vị trí. Chỉ coi là thành công khi phản hồi {"success": true}. Lưu ý: /api/leads không validate phone/consent phía server.
5. Preview giữ noindex; production kiểm lại header và meta robots sau khi ghép.

## 4. Việc team (trang/bài khác trên site live — không sửa trong đợt này)

- Hub Crystalline: đối chiếu bảng so sánh 40/35/15 theo docs/cr-blk-40/02 mục 4; CR BLK 40 chỉ dùng cho kính lái.
- Bài case có CR BLK 35 ở kính sườn trước: giữ link về trang này (đã có 5 case trong trang).

## 5. Nguồn

- Thông số trang: VLT 33, TSER 60, IRER 67, giảm chói 55 (kính Auto 75; TDS Crystalline Rev F 08/2025).
- Bảo hành (3M Việt Nam, lên tới 10 năm): https://www.3m.com.vn/3M/vi_VN/car-personalization-vn/products/automotive-window-tint/
- Crystalline TDS Rev F 08/2025: https://multimedia.3m.com/mws/media/2628835O/cystalline-technical-data-sheet.pdf ; Ceramic IR TDS Rev B 07/2021: https://multimedia.3m.com/mws/media/1919598O/3m-automotive-window-film-ceramic-ir-series-tech-data-sheet.pdf

## 6. Còn chờ dữ liệu (CX)

- Giá kính lưng/cửa sổ trời trên live (xem trên) chưa xác nhận.
- Biên bản đo riêng CR BLK 35: trang không đăng ảnh máy đo và không tuyên bố số đo riêng, nên không dùng để trừ điểm.
- Bản chụp/biên bản đo gốc (thiết bị, ngày, vị trí kính, kính nguyên bản) cho các ảnh máy đo trên trang.
- Văn bản chính sách bảo hành riêng theo từng mã phim tại Việt Nam (trang đang dùng câu "lên đến 10 năm theo chính sách 3M Việt Nam" do chủ trang xác nhận).
- Danh sách chi nhánh có dịch vụ cho mã này (ưu đãi/dịch vụ áp dụng toàn hệ thống 91 chi nhánh đã được chủ trang xác nhận).
- Search Console (URL Inspection, canonical Google chọn), mobile thiết bị thật, PageSpeed, lead thử vào CRM (form POST /api/leads, chỉ báo thành công khi {"success": true}).

> Cập nhật 06/10/2026: nguồn bảo hành là cổng eWarranty 3M (https://ews2.3m.com/ews/pub/vnaf/searchWarranty) — chủ trang xác nhận đây là link chuẩn; đã mở được bằng trình duyệt. Đã bỏ link trang 3M Việt Nam (phim ô tô) khỏi các trang.
