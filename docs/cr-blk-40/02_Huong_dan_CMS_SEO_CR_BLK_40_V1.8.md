# 02 — Hướng dẫn CMS/SEO: 3M CR BLK 40 (V1.8)

- Bản nguồn: `auto365/ma-phim/cr-blk-40.html` (preview https://preview-365group.pages.dev/ma-phim/cr-blk-40)
- URL production giữ nguyên: https://auto365.vn/phim-cach-nhiet-3m-cr-blk-40 (cập nhật URL hiện có, không tạo URL mới)
- Loại trang: trang sản phẩm/mã phim. Câu hỏi chính: CR BLK 40 dùng cho kính lái ra bao nhiêu %, giá, có nên chọn không.
- Phiên bản bàn giao: HTML SHA-256 `25a8f849269bf7165a607e0ac147bc0580976d5a38c8c7d70a556e13daf2042d` (08/10/2026); phần 01 = file HTML này; phần 03 = `03_Phieu_danh_gia_CR_BLK_40_V1.8.md`
- Cập nhật 06/10/2026 (nguồn: Bảng giá chính thức 3M AutoFilm (chủ trang xác nhận 06/10/2026)): kính lưng NR25/NR15/NR5 cùng 1.900.000đ/kính; NR5 nay được dùng cho kính lưng (quy tắc cũ "NR5 không dùng kính lưng" đã thu hồi). Quy tắc kính lưng NR đã đồng bộ ở dữ liệu gợi ý mã, thẻ gói, FAQ (HTML + JSON-LD) của trang này (chỉ dữ liệu gợi ý dùng chung). NR35 chỉ kính lái; NR25/NR5 không dùng kính lái.
- datePublished: 2026-10-06 · dateModified: 2026-10-08 (chỉ đổi dateModified khi sửa nội dung thật)

## 1. Đã kiểm trên production (06/10/2026)

| Hạng mục | Kết quả |
|---|---|
| HTTP, canonical | 200; canonical tự trỏ đúng URL |
| Robots | `index, follow, max-image-preview:large…`, KHÔNG có noindex. Preview mới có noindex (đúng chủ đích). Khi ghép bản mới, không mang header noindex của preview sang. |
| Nội dung live cũ | Còn tư vấn "kính lái hoặc kính sườn trước" ở mô tả, thẻ phù hợp và bảng thông số → thay bằng bản mới |
| Hub Crystalline | Còn "tông màu tối hơn… cách nhiệt tốt hơn", "chống nóng hiệu quả, giảm chói tốt", CR BLK 40 ở kính sườn trước → xem mục 4 |
| Chi nhánh | `/chi-nhanh` ghi 91 điểm (khớp trang mới); chưa xác minh từng điểm có dịch vụ CR BLK 40 |

## 2. Việc IT/CMS

1. Thay nội dung trang CR BLK 40 hiện có bằng bản mới; giữ một H1, title/meta của bản mới (title 59 ký tự).
2. Ảnh trong `assets/` (BMW 330i, đo kính lái, chứng nhận WebP…) upload lên CMS, đổi `src` sang URL CMS thật; đường dẫn `assets/…` chỉ dùng cho preview.
3. JSON-LD: hợp nhất với graph CMS tự sinh, không để hai Product/WebPage mâu thuẫn. Giữ: Organization, AutoRepair `#tru-so-chinh`, Team Content, WebPage (author, reviewedBy, citation, datePublished, dateModified), Product (brand/manufacturer 3M), Service (provider/seller = Trụ Sở Chính, minPrice 6.500.000 VND), BreadcrumbList, FAQPage (8 câu, khớp HTML).
4. Product chưa có offers/review/aggregateRating nên chưa đủ điều kiện Product snippet; đây không phải lỗi. Không thêm rating hoặc giá giả.
5. Form `/api/leads`: kiểm bằng lead thử do team tạo (đánh dấu TEST): hero → CR BLK 40; thẻ Hybrid Pro → gói Hybrid Pro + "Nhiều vị trí"; popup CR BLK 15 + kính lưng → CR BLK 15 + kính lưng.
6. Preview giữ noindex; production kiểm lại header và meta robots sau khi ghép.

## 3. Nguồn

- 3M Crystalline TDS Revision F, 08/2025 (CR BLK 40/50/60/35): https://multimedia.3m.com/mws/media/2628835O/cystalline-technical-data-sheet.pdf
- Brochure 3M Crystalline CR BLK Việt Nam ©2025: https://multimedia.3m.com/mws/media/2625471O/cbtd-personal-auto-2025.pdf (CR BLK 15 trong popup)
- 3M Ceramic IR TDS Revision B, 07/2021 (IR50/25/15 trong popup)
- 3M Việt Nam, phim ô tô (bảo hành lên tới 10 năm): https://www.3m.com.vn/3M/vi_VN/car-personalization-vn/products/automotive-window-tint/

## 4. Bản thay thế cho trang live (dán vào CMS)

**Hub Crystalline: thay các câu sau**

- "Kính lái CR BLK 40: Tông màu tối hơn, tăng tính riêng tư và khả năng cách nhiệt tốt hơn…" → "Kính lái CR BLK 40: VLT 41%, TSER 58%, giảm chói 44% trên kính Auto 75; phù hợp khi ưu tiên giảm chói và dịu mắt khi nắng gắt."
- "…giữ cảm giác quan sát tốt, đồng thời tăng cường khả năng chống nóng hiệu quả và giảm chói tốt…" → "Ba mã CR BLK 60, 50 và 40 khác nhau ở độ truyền sáng và mức giảm chói (VLT 57%, 48%, 41% trên kính Auto 75). Nên xem mẫu trên xe để chọn theo thói quen lái; nếu thường đi đêm, gặp mưa hoặc đường thiếu sáng, đối chiếu CR BLK 50/60 trước."
- Bảng vị trí: bỏ CR BLK 40 khỏi hàng kính sườn trước; ghi "Tại Auto365, CR BLK 40 được tư vấn cho kính lái; kính sườn và kính lưng phối CR BLK 35 hoặc CR BLK 15."

**Trang CR BLK 40 live:** thay cụm "kính lái hoặc kính sườn trước" bằng "kính lái" ở mô tả, mục "CR BLK 40 phù hợp ai?" và bảng thông số.

## 5. Còn chờ dữ liệu (CX)

- Hồ sơ/chính sách bảo hành riêng CR BLK 40 tại Việt Nam (trang đang dùng câu điều kiện: 3M Việt Nam công bố lên tới 10 năm, thời hạn cụ thể ghi trên hồ sơ bàn giao).
- Danh sách chi nhánh có dịch vụ CR BLK 40. Ưu đãi áp dụng toàn hệ thống đã được xác nhận.
- Ảnh máy đo/case trên trang đã được chủ trang duyệt 06/10/2026 (xác nhận của chủ trang, không phải kiểm định độc lập; điểm không đổi). Còn chờ: biên bản đo gốc dạng file của case Sportage; Search Console (URL Inspection, canonical Google chọn); mobile thiết bị thật; PageSpeed; lead thử vào CRM.

> Cập nhật 06/10/2026: nguồn bảo hành là cổng eWarranty 3M (https://ews2.3m.com/ews/pub/vnaf/searchWarranty) — chủ trang xác nhận đây là link chuẩn; đã mở được bằng trình duyệt. Đã bỏ link trang 3M Việt Nam (phim ô tô) khỏi các trang.
