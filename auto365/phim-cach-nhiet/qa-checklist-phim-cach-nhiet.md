# QA Checklist: Hub Phim Cách Nhiệt

| Hạng mục QA | Trạng thái | Ghi chú / Chi tiết |
| --- | --- | --- |
| **1. P0-1 (Bảo hành)** | [x] PASS | Đã dùng đúng wording public 10 năm cho dòng 3M được kích hoạt sau thi công. |
| **2. P0-2 (Link rỗng)** | [x] PASS | Đã xóa/làm sạch href="#" và href="", không còn link preview/staging. |
| **3. P0-3 (Bảng mã phim)** | [x] PASS | Chỉ dùng một bảng gợi ý mã phim chính, không có bảng trùng lặp mâu thuẫn. |
| **4. P0-4 (Ảnh/Domain)** | [x] PASS | Toàn bộ src, srcset, schema đã được map về `auto365.vn`. |
| **5. P0-5 (FAQ kính lái)** | [x] PASS | Đã gỡ bỏ mốc VLT cứng 50-60%, thay bằng wording ưu tiên độ truyền sáng cao ban đêm. |
| **6. P0-6 (Mã phim chuẩn)** | [x] PASS | Không còn `mã 05`, `NR 05`. Đã chuẩn hóa thành `NR5`, `NR15`, `NR25`, `NR35`. |
| **7. P0-7 (Ghi chú nội bộ)** | [x] PASS | Đã xóa toàn bộ từ khóa: SSOT, lock, anh Việt, chờ ký, chưa duyệt. |
| **8. 19 FAQ Visible** | [x] PASS | Có đúng 19 câu `<summary>` trong DOM HTML. |
| **9. FAQ Schema Khớp** | [x] PASS | Đã tạo JSON-LD động quét từ DOM, khớp 100% 19 câu FAQ. |
| **10. Không Product Schema** | [x] PASS | Đã gỡ bỏ Product schema và AggregateRating/Review trên Industry Hub. |
| **11. Không Cụm Cấm** | [x] PASS | Đã filter "tốt nhất", "độc quyền", "không cản sóng", "100%", "phòng dán vô trùng"... |
| **12. CIT-COND Block** | [x] PASS | Đã chèn thành công ghi chú kỹ thuật catalog vào Mục 2, sau bảng thông số. |
| **13. FAQ 15 & 16 Update** | [x] PASS | Đã sửa FAQ 15 & 16 theo đúng text yêu cầu và xóa câu "Ngoài 3M...". |
| **14. Case Study Evidence** | [x] PASS | Đã dùng wording chờ nghiệm thu dữ liệu thực tế tại xưởng. |
| **15. View Source SSR** | [x] PASS | Toàn bộ Schema, Table, Internal Link, Heading (H1, H2) đều chuẩn, không bị render sau. |
| **16. Mobile Table** | [x] PASS | CSS có cấu trúc overflow-x cho `.pcn-table-wrap`, không cắt cột trên mobile. |

| **17. Tiêu đề Cluster** | [x] PASS | Đã sửa 5 tiêu đề cluster overclaim về dạng an toàn, trung lập. |
| **18. Entity 3M Pro Shop** | [x] PASS | Dùng đúng "3M Pro Shop & 3M Training Center". |
| **19. Không CEO Bùi Hùng Việt** | [x] PASS | Đã gỡ bỏ tên nội bộ trong public. |
| **20. OfferCatalog Optional** | [x] PASS | Tuân thủ rule không public giá vào schema nếu chưa pass SSOT. |
| **21. Không sameAs Wikipedia** | [x] PASS | Đã gỡ bỏ sameAs chưa xác minh. |
| **22. Không AI/Top 1 Claim** | [x] PASS | Gỡ bỏ các từ ngữ overclaim SEO/AI. |