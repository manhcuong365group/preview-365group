# 02 — Hướng dẫn CMS/SEO: 3M NR25 (V1.8)

- Bản nguồn: `auto365/ma-phim/nr25.html` (preview https://preview-365group.pages.dev/ma-phim/nr25)
- URL production giữ nguyên: https://auto365.vn/phim-cach-nhiet-3m-nr-25 (cập nhật URL hiện có, không tạo URL mới)
- Loại trang: Mã phim kính sườn/kính sau/cửa sổ trời dòng Ceramic NR; kính lái dùng NR35. Câu hỏi chính: NR25 giá, hợp sườn trước không.
- Phiên bản bàn giao: HTML SHA-256 `248730bc5129f7496294d1aafc40cd995df029fc8bbcc64e34fae31ab5393075` (08/10/2026); phần 01 = file HTML này; phần 03 = `03_Phieu_danh_gia_NR25_V1.8.md`
- Cập nhật 06/10/2026 (nguồn: Bảng giá chính thức 3M AutoFilm (chủ trang xác nhận 06/10/2026)): kính lưng NR25/NR15/NR5 cùng 1.900.000đ/kính; NR5 nay được dùng cho kính lưng (quy tắc cũ "NR5 không dùng kính lưng" đã thu hồi). Quy tắc kính lưng NR đã đồng bộ ở dữ liệu gợi ý mã, thẻ gói, FAQ (HTML + JSON-LD). NR35 chỉ kính lái; NR25/NR5 không dùng kính lái.
- dateModified: 2026-10-08; byline "Cập nhật nội dung 06/10/2026". Không có datePublished (chưa có dữ liệu); không tự thêm.

## 1. Bối cảnh các sửa đổi

Sếp duyệt preview lúc khoảng 18:00 ngày 05/10/2026 và yêu cầu chỉnh. Quy tắc cũ "không nhấn mạnh tối/đi đêm" chỉ nới ở các câu nhắc quan sát có điều kiện, ngắn, trung tính, không hứa hẹn (popup và FAQ liên quan). Mọi giá đã gồm VAT; hotline 0365 365 365; ưu đãi/dịch vụ áp dụng toàn hệ thống 91 chi nhánh; bảo hành ghi "lên đến 10 năm theo chính sách 3M Việt Nam".

**Nội dung trang này đã sửa**

- Tóm tắt nhanh: thêm dòng chính sách kính lái ("NR25 được cân nhắc cho sườn, lưng, cửa sổ trời; kính lái dùng NR35").
- Thẻ so sánh NR25 viết lại; thẻ sườn trước/sườn sau và FAQ sườn trước chuyển sang giọng điều kiện (bỏ "dễ nhìn gương" khẳng định).
- Service.offers tách 3 Offer (cặp sườn, kính lưng, cửa sổ trời nhỏ); popup nhãn cửa sổ trời có VAT và "panorama từ 2.600.000đ, báo giá theo kích thước kính".

**Sửa dùng chung (cả 9 trang mã phim)**: popup ghi chú quan sát theo vị trí + link "So với …" (CR BLK 15/IR15/NR15 ở sườn trước); nhãn giá có "đã gồm VAT"; nguồn thông số theo mã (trường SRC); nhãn ưu tiên "Kín hơn (độ truyền sáng thấp)" kèm dòng giải thích xếp theo VLT; form lead (trả focus về nút mở popup, khóa Tab trong hộp thoại, xóa trạng thái cũ mỗi lần mở, sau gửi thành công nhãn "Bạn đang quan tâm" luôn bằng gói ẩn, tùy chọn nhu cầu theo gói); tên điểm "Auto365.vn - Trụ Sở Chính" (gạch ngang thường); "điểm phần trăm" thay cho "điểm".

## 2. Đã kiểm trên production (06/10/2026)

| Hạng mục | Kết quả |
|---|---|
| HTTP, canonical | 200; canonical tự trỏ đúng URL |
| Robots | `index, follow, max-image-preview:large…`, không noindex. Preview có noindex qua `_headers` (đúng chủ đích); không mang header này sang production. |
| Nội dung live cũ 1 | Live: canonical đúng, index/follow. Live vẫn có kính lái 2.600.000đ trong bảng giá và câu "NR25 dán kính lái đi đêm hoặc trời mưa… vẫn giữ tầm nhìn tương đối", "kính lái phù hợp khi chấp nhận cabin đằm hơn NR35" → mâu thuẫn chính sách "kính lái dùng NR35"; cần gỡ. |

## 3. Việc IT/CMS

1. Thay nội dung trang hiện có bằng bản mới; giữ một H1 và title/meta của bản mới (title 54 ký tự: "3M NR25 kính sườn, kính sau: thông số và giá | Auto365").
2. Ảnh trong `assets/` upload lên CMS, đổi `src` sang URL CMS thật; đường dẫn `assets/…` chỉ dùng cho preview.
3. JSON-LD: hợp nhất với graph CMS tự sinh, không để hai Product/WebPage mâu thuẫn. Giữ Organization, AutoRepair `#tru-so-chinh`, WebPage (author, reviewedBy, citation, dateModified), Product, Service (offers theo vị trí: giá hiện có [1700000,1900000,850000] VND), BreadcrumbList, FAQPage (7 câu, khớp HTML). Không thêm InStock, priceValidUntil, rating.
4. Form `/api/leads`: kiểm bằng lead thử do team tạo (đánh dấu TEST): hero → NR25; thẻ gói → gói + "Nhiều vị trí"; popup gợi ý mã + vị trí → đúng mã + vị trí. Chỉ coi là thành công khi phản hồi {"success": true}. Lưu ý: /api/leads không validate phone/consent phía server.
5. Preview giữ noindex; production kiểm lại header và meta robots sau khi ghép.

## 4. Việc team (trang/bài khác trên site live — không sửa trong đợt này)

- Gỡ dòng giá kính lái và mục FAQ kính lái trên trang live NR25; thay bằng câu chính sách kính lái ở mục Tóm tắt của bản mới.
- Hub Ceramic NR: đồng bộ chính sách kính lái.

## 5. Nguồn

- Thông số trang: VLT 29, TSER 59, IRER 63, giảm chói 68 (kính xanh 6 mm nền 73%; Catalog 3M Ceramic NR VN 03/2026).
- Bảo hành (3M Việt Nam, lên tới 10 năm): https://www.3m.com.vn/3M/vi_VN/car-personalization-vn/products/automotive-window-tint/
- Crystalline TDS Rev F 08/2025: https://multimedia.3m.com/mws/media/2628835O/cystalline-technical-data-sheet.pdf ; Ceramic IR TDS Rev B 07/2021: https://multimedia.3m.com/mws/media/1919598O/3m-automotive-window-film-ceramic-ir-series-tech-data-sheet.pdf

- 06/10/2026: catalog 3M Ceramic NR (3M Việt Nam, 03/2026) đã có link PDF công khai trên preview (`assets/3m-ceramic-nr-catalog-viet-nam-03-2026.pdf`, chủ trang đồng ý công bố). Khi lên CMS production phải thay bằng URL production của file PDF và đặt vào `citation.url` của WebPage trong JSON-LD (hiện CỐ Ý không có `url` trong citation vì đường dẫn tương đối không hợp lệ theo schema.org). Ảnh máy đo, giấy chứng nhận, ảnh case trên trang đã được chủ trang duyệt (xác nhận của chủ trang 06/10/2026, không phải kiểm định độc lập của phòng thí nghiệm).

## 6. Còn chờ dữ liệu (CX)

- (Đã xử lý 06/10/2026) Catalog 3M Ceramic NR VN 03/2026: đã có link PDF trên preview. Việc còn lại khi lên CMS: thay bằng URL production và điền `citation.url` trong JSON-LD (xem mục 5).
- Biên bản đo riêng NR25: trang không tuyên bố số đo riêng; mục case đã ghi đúng 2 hồ sơ NR25 và 4 hồ sơ cùng dòng nên không trừ theo số case.
- Ảnh máy đo/chứng nhận trên trang: chủ trang đã duyệt 06/10/2026 (xác nhận của chủ trang, không phải kiểm định độc lập). Biên bản đo gốc (thiết bị, ngày, kính nguyên bản) vẫn chưa có file riêng.
- Văn bản chính sách bảo hành riêng theo từng mã phim tại Việt Nam (trang đang dùng câu "lên đến 10 năm theo chính sách 3M Việt Nam" do chủ trang xác nhận).
- Danh sách chi nhánh có dịch vụ cho mã này (ưu đãi/dịch vụ áp dụng toàn hệ thống 91 chi nhánh đã được chủ trang xác nhận).
- Search Console (URL Inspection, canonical Google chọn), mobile thiết bị thật, PageSpeed, lead thử vào CRM (form POST /api/leads, chỉ báo thành công khi {"success": true}).

> Cập nhật 06/10/2026: nguồn bảo hành là cổng eWarranty 3M (https://ews2.3m.com/ews/pub/vnaf/searchWarranty) — chủ trang xác nhận đây là link chuẩn; đã mở được bằng trình duyệt. Đã bỏ link trang 3M Việt Nam (phim ô tô) khỏi các trang.
