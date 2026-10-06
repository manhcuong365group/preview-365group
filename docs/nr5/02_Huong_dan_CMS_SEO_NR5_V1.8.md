# 02 — Hướng dẫn CMS/SEO: 3M NR5 (V1.8)

- Bản nguồn: `auto365/ma-phim/nr5.html` (preview https://preview-365group.pages.dev/ma-phim/nr5)
- URL production giữ nguyên: https://auto365.vn/phim-cach-nhiet-3m-nr-5 (cập nhật URL hiện có, không tạo URL mới)
- Loại trang: Mã phim kính sườn sau/cửa sổ trời dòng Ceramic NR (không dùng kính lái, kính lưng, sườn trước). Câu hỏi chính: NR5 kín đến đâu, giá, khác NR15.
- Phiên bản bàn giao: HTML SHA-256 `d9e6b3b371478d8612fa6d3d4ac7f31e74b12365b88ae4bcc95e42d489da275d` (06/10/2026); phần 01 = file HTML này; phần 03 = `03_Phieu_danh_gia_NR5_V1.8.md`
- dateModified: 2026-10-06; byline "Cập nhật nội dung 06/10/2026". Không có datePublished (chưa có dữ liệu); không tự thêm.

## 1. Bối cảnh các sửa đổi

Sếp duyệt preview lúc khoảng 18:00 ngày 05/10/2026 và yêu cầu chỉnh. Quy tắc cũ "không nhấn mạnh tối/đi đêm" chỉ nới ở các câu nhắc quan sát có điều kiện, ngắn, trung tính, không hứa hẹn (popup và FAQ liên quan). Mọi giá đã gồm VAT; hotline 0365 365 365; ưu đãi/dịch vụ áp dụng toàn hệ thống 91 chi nhánh; bảo hành ghi "lên đến 10 năm theo chính sách 3M Việt Nam".

**Nội dung trang này đã sửa**

- Nhãn hero "Giá NR5 cho cặp kính sườn sau"; vị trí trong Product.description và additionalProperty: "kính sườn sau, cửa sổ trời".
- FAQ riêng tư viết lại (HTML + JSON-LD khớp); FAQ NR5 vs NR15 nêu "với kính sườn sau, NR5/NR15/NR25 cùng giá tham khảo 1.700.000đ/cặp".
- Thẻ gói tách "Kính sườn trước: NR25 / NR15" và "Kính sườn sau: NR25 / NR15 / NR5" (NR5 chỉ sườn sau); FAQ gói sửa tương ứng.
- Quy trình 8 bước: mỗi bước thêm một dòng kết quả đầu ra. Không thêm alias NR05.

**Sửa dùng chung (cả 9 trang mã phim)**: popup ghi chú quan sát theo vị trí + link "So với …" (CR BLK 15/IR15/NR15 ở sườn trước); nhãn giá có "đã gồm VAT"; nguồn thông số theo mã (trường SRC); nhãn ưu tiên "Kín hơn (độ truyền sáng thấp)" kèm dòng giải thích xếp theo VLT; form lead (trả focus về nút mở popup, khóa Tab trong hộp thoại, xóa trạng thái cũ mỗi lần mở, sau gửi thành công nhãn "Bạn đang quan tâm" luôn bằng gói ẩn, tùy chọn nhu cầu theo gói); tên điểm "Auto365.vn - Trụ Sở Chính" (gạch ngang thường); "điểm phần trăm" thay cho "điểm".

## 2. Đã kiểm trên production (06/10/2026)

| Hạng mục | Kết quả |
|---|---|
| HTTP, canonical | 200; canonical tự trỏ đúng URL |
| Robots | `index, follow, max-image-preview:large…`, không noindex. Preview có noindex qua `_headers` (đúng chủ đích); không mang header này sang production. |
| Nội dung live cũ 1 | Live: canonical đúng, index/follow. Live ghi bảng "Kính sườn 1.700.000đ · Kính sau 1.900.000đ · Cửa sổ trời 850.000đ" cho NR5, trong khi cùng trang nói không nên dùng NR5 cho kính lưng → gỡ dòng kính sau. |
| Nội dung live cũ 2 | Live gán NR15 cho kính sườn trước, NR5 cho kính sườn sau: khớp bản mới. |

## 3. Việc IT/CMS

1. Thay nội dung trang hiện có bằng bản mới; giữ một H1 và title/meta của bản mới (title 60 ký tự: "3M NR5 kính sườn sau, cửa sổ trời: thông số và giá | Auto365").
2. Ảnh trong `assets/` upload lên CMS, đổi `src` sang URL CMS thật; đường dẫn `assets/…` chỉ dùng cho preview.
3. JSON-LD: hợp nhất với graph CMS tự sinh, không để hai Product/WebPage mâu thuẫn. Giữ Organization, AutoRepair `#tru-so-chinh`, WebPage (author, reviewedBy, citation, dateModified), Product, Service (offers theo vị trí: giá hiện có [1700000,850000] VND), BreadcrumbList, FAQPage (7 câu, khớp HTML). Không thêm InStock, priceValidUntil, rating.
4. Form `/api/leads`: kiểm bằng lead thử do team tạo (đánh dấu TEST): hero → NR5; thẻ gói → gói + "Nhiều vị trí"; popup gợi ý mã + vị trí → đúng mã + vị trí. Chỉ coi là thành công khi phản hồi {"success": true}. Lưu ý: /api/leads không validate phone/consent phía server.
5. Preview giữ noindex; production kiểm lại header và meta robots sau khi ghép.

## 4. Việc team (trang/bài khác trên site live — không sửa trong đợt này)

- Gỡ giá kính sau khỏi bảng giá live NR5.
- Hub Ceramic NR: NR5 chỉ ghi sườn sau/cửa sổ trời.
- Bài VF3 NR (live): việc của team, không sửa trong đợt này.

## 5. Nguồn

- Thông số trang: VLT 7, TSER 69, IRER 68, giảm chói 93 (kính xanh 6 mm nền 73%; Catalog 3M Ceramic NR VN 03/2026).
- Bảo hành (3M Việt Nam, lên tới 10 năm): https://www.3m.com.vn/3M/vi_VN/car-personalization-vn/products/automotive-window-tint/
- Crystalline TDS Rev F 08/2025: https://multimedia.3m.com/mws/media/2628835O/cystalline-technical-data-sheet.pdf ; Ceramic IR TDS Rev B 07/2021: https://multimedia.3m.com/mws/media/1919598O/3m-automotive-window-film-ceramic-ir-series-tech-data-sheet.pdf

## 6. Còn chờ dữ liệu (CX)

- Catalog 3M Ceramic NR Việt Nam 03/2026 chưa có URL công khai để dẫn link trực tiếp; chỉ dẫn tên tài liệu + ngày. Khi có URL công khai thì thêm link và chấm lại G3.
- Chưa có biên bản đo riêng NR5.
- Bản chụp/biên bản đo gốc (thiết bị, ngày, vị trí kính, kính nguyên bản) cho các ảnh máy đo trên trang.
- Văn bản chính sách bảo hành riêng theo từng mã phim tại Việt Nam (trang đang dùng câu "lên đến 10 năm theo chính sách 3M Việt Nam" do chủ trang xác nhận).
- Danh sách chi nhánh có dịch vụ cho mã này (ưu đãi/dịch vụ áp dụng toàn hệ thống 91 chi nhánh đã được chủ trang xác nhận).
- Search Console (URL Inspection, canonical Google chọn), mobile thiết bị thật, PageSpeed, lead thử vào CRM (form POST /api/leads, chỉ báo thành công khi {"success": true}).
