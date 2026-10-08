# 02 — Hướng dẫn CMS/SEO: 3M IR25 (V1.8)

- Bản nguồn: `auto365/ma-phim/ir25.html` (preview https://preview-365group.pages.dev/ma-phim/ir25)
- URL production giữ nguyên: https://auto365.vn/ir25 (cập nhật URL hiện có, không tạo URL mới)
- Loại trang: Mã phim kính sườn/kính sau dòng Ceramic IR. Câu hỏi chính: IR25 giá, hợp kính sườn trước không.
- Phiên bản bàn giao: HTML SHA-256 `b6282f783c48823e5969fa98d592096e56474e67195f83b6af81371740dd99b9` (06/10/2026); phần 01 = file HTML này; phần 03 = `03_Phieu_danh_gia_IR25_V1.8.md`
- Cập nhật 06/10/2026 (nguồn: Bảng giá chính thức 3M AutoFilm (chủ trang xác nhận 06/10/2026)): kính lưng NR25/NR15/NR5 cùng 1.900.000đ/kính; NR5 nay được dùng cho kính lưng (quy tắc cũ "NR5 không dùng kính lưng" đã thu hồi). Quy tắc kính lưng NR đã đồng bộ ở dữ liệu gợi ý mã, thẻ gói, FAQ (HTML + JSON-LD) của trang này (chỉ dữ liệu gợi ý dùng chung). NR35 chỉ kính lái; NR25/NR5 không dùng kính lái.
- dateModified: 2026-10-06; byline "Cập nhật nội dung 06/10/2026". Không có datePublished (chưa có dữ liệu); không tự thêm.

## 1. Bối cảnh các sửa đổi

Sếp duyệt preview lúc khoảng 18:00 ngày 05/10/2026 và yêu cầu chỉnh. Quy tắc cũ "không nhấn mạnh tối/đi đêm" chỉ nới ở các câu nhắc quan sát có điều kiện, ngắn, trung tính, không hứa hẹn (popup và FAQ liên quan). Mọi giá đã gồm VAT; hotline 0365 365 365; ưu đãi/dịch vụ áp dụng toàn hệ thống 91 chi nhánh; bảo hành ghi "lên đến 10 năm theo chính sách 3M Việt Nam".

**Nội dung trang này đã sửa**

- Popup: ghi chú quan sát theo vị trí, giá có "đã gồm VAT", dòng nguồn TDS Rev B.
- Service.offers tách thành 2 Offer (cặp kính sườn; kính lưng), chỉ dùng giá đang hiển thị.
- FAQ giữ nguyên nội dung (chỉ chỉnh cách nói "điểm phần trăm" nếu có); tên điểm "Auto365.vn - Trụ Sở Chính" thống nhất.

**Sửa dùng chung (cả 9 trang mã phim)**: popup ghi chú quan sát theo vị trí + link "So với …" (CR BLK 15/IR15/NR15 ở sườn trước); nhãn giá có "đã gồm VAT"; nguồn thông số theo mã (trường SRC); nhãn ưu tiên "Kín hơn (độ truyền sáng thấp)" kèm dòng giải thích xếp theo VLT; form lead (trả focus về nút mở popup, khóa Tab trong hộp thoại, xóa trạng thái cũ mỗi lần mở, sau gửi thành công nhãn "Bạn đang quan tâm" luôn bằng gói ẩn, tùy chọn nhu cầu theo gói); tên điểm "Auto365.vn - Trụ Sở Chính" (gạch ngang thường); "điểm phần trăm" thay cho "điểm".

## 2. Đã kiểm trên production (06/10/2026)

| Hạng mục | Kết quả |
|---|---|
| HTTP, canonical | 200; canonical tự trỏ đúng URL |
| Robots | `index, follow, max-image-preview:large…`, không noindex. Preview có noindex qua `_headers` (đúng chủ đích); không mang header này sang production. |
| Nội dung live cũ 1 | Live: canonical đúng, index/follow. Title/H1 live chỉ "IR25" (thiếu vị trí/giá). |
| Nội dung live cũ 2 | Live giá sườn 1.800.000đ, kính sau 2.300.000đ: khớp bản mới. Live chưa có câu "đã gồm VAT". Live chưa có mục "Xe thực tế" cho IR25, khớp việc chưa có case riêng IR25. |

## 3. Việc IT/CMS

1. Thay nội dung trang hiện có bằng bản mới; giữ một H1 và title/meta của bản mới (title 60 ký tự: "3M Ceramic IR25 kính sườn, kính sau: giá, thông số | Auto365").
2. Ảnh trong `assets/` upload lên CMS, đổi `src` sang URL CMS thật; đường dẫn `assets/…` chỉ dùng cho preview.
3. JSON-LD: hợp nhất với graph CMS tự sinh, không để hai Product/WebPage mâu thuẫn. Giữ Organization, AutoRepair `#tru-so-chinh`, WebPage (author, reviewedBy, citation, dateModified), Product, Service (offers theo vị trí: giá hiện có [1800000,2300000] VND), BreadcrumbList, FAQPage (7 câu, khớp HTML). Không thêm InStock, priceValidUntil, rating.
4. Form `/api/leads`: kiểm bằng lead thử do team tạo (đánh dấu TEST): hero → IR25; thẻ gói → gói + "Nhiều vị trí"; popup gợi ý mã + vị trí → đúng mã + vị trí. Chỉ coi là thành công khi phản hồi {"success": true}. Lưu ý: /api/leads không validate phone/consent phía server.
5. Preview giữ noindex; production kiểm lại header và meta robots sau khi ghép.

## 4. Việc team (trang/bài khác trên site live — không sửa trong đợt này)

- Bài VF3/Innova có IR25: kiểm lại nếu có nhắc quan sát gương; thêm link về /ir25 nếu phù hợp.
- Hub Ceramic IR: IR25 là mã sáng hơn cho kính sườn (nhất là sườn trước).

## 5. Nguồn

- Thông số trang: VLT 25, TSER 61, IRR 90 (900–1.000 nm, trên phim), giảm chói 65 (kính Auto 75; TDS Ceramic IR Rev B 07/2021).
- Bảo hành (3M Việt Nam, lên tới 10 năm): https://www.3m.com.vn/3M/vi_VN/car-personalization-vn/products/automotive-window-tint/
- Crystalline TDS Rev F 08/2025: https://multimedia.3m.com/mws/media/2628835O/cystalline-technical-data-sheet.pdf ; Ceramic IR TDS Rev B 07/2021: https://multimedia.3m.com/mws/media/1919598O/3m-automotive-window-film-ceramic-ir-series-tech-data-sheet.pdf

## 6. Còn chờ dữ liệu (CX)

- Chưa có case riêng IR25: trang ghi rõ điều này (3 case là hồ sơ cùng dòng IR15) nên không trừ G3/C2 theo số case.
- Bản chụp/biên bản đo gốc (thiết bị, ngày, vị trí kính, kính nguyên bản) cho các ảnh máy đo trên trang.
- Văn bản chính sách bảo hành riêng theo từng mã phim tại Việt Nam (trang đang dùng câu "lên đến 10 năm theo chính sách 3M Việt Nam" do chủ trang xác nhận).
- Danh sách chi nhánh có dịch vụ cho mã này (ưu đãi/dịch vụ áp dụng toàn hệ thống 91 chi nhánh đã được chủ trang xác nhận).
- Search Console (URL Inspection, canonical Google chọn), mobile thiết bị thật, PageSpeed, lead thử vào CRM (form POST /api/leads, chỉ báo thành công khi {"success": true}).

> Cập nhật 06/10/2026: nguồn bảo hành là cổng eWarranty 3M (https://ews2.3m.com/ews/pub/vnaf/searchWarranty) — chủ trang xác nhận đây là link chuẩn; đã mở được bằng trình duyệt. Đã bỏ link trang 3M Việt Nam (phim ô tô) khỏi các trang.
