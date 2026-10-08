# 02 — Hướng dẫn CMS/SEO: 3M IR50 (V1.8)

- Bản nguồn: `auto365/ma-phim/ir50.html` (preview https://preview-365group.pages.dev/ma-phim/ir50)
- URL production giữ nguyên: https://auto365.vn/ir50 (cập nhật URL hiện có, không tạo URL mới)
- Loại trang: Mã phim kính lái dòng Ceramic IR. Câu hỏi chính: IR50 giá, VLT 50% hay 60%, so NR35/CR BLK 40.
- Phiên bản bàn giao: HTML SHA-256 `3f99a1464ac12572c0d29fa3e14c5cc1890b87890cb7710ef12ba6a57560a1f5` (06/10/2026); phần 01 = file HTML này; phần 03 = `03_Phieu_danh_gia_IR50_V1.8.md`
- Cập nhật 06/10/2026 (nguồn: Bảng giá chính thức 3M AutoFilm (chủ trang xác nhận 06/10/2026)): kính lưng NR25/NR15/NR5 cùng 1.900.000đ/kính; NR5 nay được dùng cho kính lưng (quy tắc cũ "NR5 không dùng kính lưng" đã thu hồi). Quy tắc kính lưng NR đã đồng bộ ở dữ liệu gợi ý mã, thẻ gói, FAQ (HTML + JSON-LD) của trang này (chỉ dữ liệu gợi ý dùng chung). NR35 chỉ kính lái; NR25/NR5 không dùng kính lái.
- dateModified: 2026-10-06; byline "Cập nhật nội dung 06/10/2026". Không có datePublished (chưa có dữ liệu); không tự thêm.

## 1. Bối cảnh các sửa đổi

Sếp duyệt preview lúc khoảng 18:00 ngày 05/10/2026 và yêu cầu chỉnh. Quy tắc cũ "không nhấn mạnh tối/đi đêm" chỉ nới ở các câu nhắc quan sát có điều kiện, ngắn, trung tính, không hứa hẹn (popup và FAQ liên quan). Mọi giá đã gồm VAT; hotline 0365 365 365; ưu đãi/dịch vụ áp dụng toàn hệ thống 91 chi nhánh; bảo hành ghi "lên đến 10 năm theo chính sách 3M Việt Nam".

**Nội dung trang này đã sửa**

- Câu giá thống nhất ở hero, Tóm tắt, FAQ, Offer; title/meta ghi "từ 3.300.000đ".
- Section-desc bảng so sánh viết lại theo nguồn từng tài liệu; bỏ câu "cùng loại kính Auto 75 nên có thể đặt cạnh nhau"; thêm link TDS Rev B ngay dòng nguồn của bảng.
- Popup: thêm dòng nguồn thông số cho từng mã (SRC).
- "cao hơn X điểm" đổi thành "điểm phần trăm" (FAQ/so sánh).

**Sửa dùng chung (cả 9 trang mã phim)**: popup ghi chú quan sát theo vị trí + link "So với …" (CR BLK 15/IR15/NR15 ở sườn trước); nhãn giá có "đã gồm VAT"; nguồn thông số theo mã (trường SRC); nhãn ưu tiên "Kín hơn (độ truyền sáng thấp)" kèm dòng giải thích xếp theo VLT; form lead (trả focus về nút mở popup, khóa Tab trong hộp thoại, xóa trạng thái cũ mỗi lần mở, sau gửi thành công nhãn "Bạn đang quan tâm" luôn bằng gói ẩn, tùy chọn nhu cầu theo gói); tên điểm "Auto365.vn - Trụ Sở Chính" (gạch ngang thường); "điểm phần trăm" thay cho "điểm".

## 2. Đã kiểm trên production (06/10/2026)

| Hạng mục | Kết quả |
|---|---|
| HTTP, canonical | 200; canonical tự trỏ đúng URL |
| Robots | `index, follow, max-image-preview:large…`, không noindex. Preview có noindex qua `_headers` (đúng chủ đích); không mang header này sang production. |
| Nội dung live cũ 1 | Live: canonical đúng, index/follow. Title live "IR50 / Auto365" và H1 "IR50": thiếu mã đầy đủ, vị trí, giá. |
| Nội dung live cũ 2 | Live ghi giá 3.300.000đ nhưng cạnh đó "VAT, công lắp (nếu có) và phụ kiện xác nhận theo báo giá"; bản mới ghi "đã gồm VAT và công dán" theo xác nhận chủ trang → thay đồng bộ. |
| Nội dung live cũ 3 | Live có đoạn IR50 dùng cho "kính lái hoặc kính sườn trước" → đổi thành kính lái. |

## 3. Việc IT/CMS

1. Thay nội dung trang hiện có bằng bản mới; giữ một H1 và title/meta của bản mới (title 63 ký tự: "3M Ceramic IR50 kính lái: giá từ 3.300.000đ, thông số | Auto365").
2. Ảnh trong `assets/` upload lên CMS, đổi `src` sang URL CMS thật; đường dẫn `assets/…` chỉ dùng cho preview.
3. JSON-LD: hợp nhất với graph CMS tự sinh, không để hai Product/WebPage mâu thuẫn. Giữ Organization, AutoRepair `#tru-so-chinh`, WebPage (author, reviewedBy, citation, dateModified), Product, Service (offers theo vị trí: giá hiện có [3300000] VND), BreadcrumbList, FAQPage (7 câu, khớp HTML). Không thêm InStock, priceValidUntil, rating.
4. Form `/api/leads`: kiểm bằng lead thử do team tạo (đánh dấu TEST): hero → IR50; thẻ gói → gói + "Nhiều vị trí"; popup gợi ý mã + vị trí → đúng mã + vị trí. Chỉ coi là thành công khi phản hồi {"success": true}. Lưu ý: /api/leads không validate phone/consent phía server.
5. Preview giữ noindex; production kiểm lại header và meta robots sau khi ghép.

## 4. Việc team (trang/bài khác trên site live — không sửa trong đợt này)

- Bài VF3 (IR50 kính lái, IR15 sườn/lưng): đang có số 58% trên site live. KHÔNG sửa trong đợt này; việc của team nội dung: đối chiếu số 58% với nguồn đo/điều kiện kính trước khi sửa.
- Hub Ceramic IR: đối chiếu IR50 chỉ cho kính lái; IR25/IR15 cho sườn/lưng.
- Trang so sánh "NR35 hay IR50" và "IR50 vs CR BLK 40": đồng bộ câu "điểm phần trăm" và nguồn từng tài liệu.

## 5. Nguồn

- Thông số trang: VLT 50, TSER 54, IRER 66, giảm chói 32 (kính Auto 75; TDS Ceramic IR Rev B 07/2021).
- Bảo hành (3M Việt Nam, lên tới 10 năm): https://www.3m.com.vn/3M/vi_VN/car-personalization-vn/products/automotive-window-tint/
- Crystalline TDS Rev F 08/2025: https://multimedia.3m.com/mws/media/2628835O/cystalline-technical-data-sheet.pdf ; Ceramic IR TDS Rev B 07/2021: https://multimedia.3m.com/mws/media/1919598O/3m-automotive-window-film-ceramic-ir-series-tech-data-sheet.pdf

- 06/10/2026: catalog 3M Ceramic NR (3M Việt Nam, 03/2026) đã có link PDF công khai trên preview (`assets/3m-ceramic-nr-catalog-viet-nam-03-2026.pdf`, chủ trang đồng ý công bố). Khi lên CMS production phải thay bằng URL production của file PDF và đặt vào `citation.url` của WebPage trong JSON-LD (hiện CỐ Ý không có `url` trong citation vì đường dẫn tương đối không hợp lệ theo schema.org). Ảnh máy đo, giấy chứng nhận, ảnh case trên trang đã được chủ trang duyệt (xác nhận của chủ trang 06/10/2026, không phải kiểm định độc lập của phòng thí nghiệm).

## 6. Còn chờ dữ liệu (CX)

- (Đã xử lý 06/10/2026) Catalog 3M Ceramic NR VN 03/2026: đã có link PDF trên preview. Việc còn lại khi lên CMS: thay bằng URL production và điền `citation.url` trong JSON-LD (xem mục 5).
- Ảnh máy đo/chứng nhận trên trang: chủ trang đã duyệt 06/10/2026 (xác nhận của chủ trang, không phải kiểm định độc lập). Biên bản đo gốc (thiết bị, ngày, kính nguyên bản) vẫn chưa có file riêng.
- Văn bản chính sách bảo hành riêng theo từng mã phim tại Việt Nam (trang đang dùng câu "lên đến 10 năm theo chính sách 3M Việt Nam" do chủ trang xác nhận).
- Danh sách chi nhánh có dịch vụ cho mã này (ưu đãi/dịch vụ áp dụng toàn hệ thống 91 chi nhánh đã được chủ trang xác nhận).
- Search Console (URL Inspection, canonical Google chọn), mobile thiết bị thật, PageSpeed, lead thử vào CRM (form POST /api/leads, chỉ báo thành công khi {"success": true}).

> Cập nhật 06/10/2026: nguồn bảo hành là cổng eWarranty 3M (https://ews2.3m.com/ews/pub/vnaf/searchWarranty) — chủ trang xác nhận đây là link chuẩn; đã mở được bằng trình duyệt. Đã bỏ link trang 3M Việt Nam (phim ô tô) khỏi các trang.
