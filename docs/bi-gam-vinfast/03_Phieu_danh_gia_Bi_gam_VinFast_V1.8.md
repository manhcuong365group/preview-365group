# 03 — Phiếu đánh giá SEO/GEO V1.8: Hub Bi gầm VinFast

| Trường | Giá trị |
|---|---|
| Chuẩn | Auto365 Quy chuẩn SEO/GEO HTML V1.8 — đủ 12 tiêu chí (có U3), thang /100. Ngưỡng: tổng ≥95, SEO ≥28,5/30, GEO ≥23,75/25 |
| Bản chấm | Preview `auto365/bi-gam/vinfast/index.html` — SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_VinFast.md) (dateModified 2026-10-22) |
| Ngày chấm | 22/10/2026 (lượt 1) |
| Loại chấm | Tự chấm của team triển khai trên preview — **không phải phiếu nghiệm thu** |
| Kiểm duyệt kỹ thuật | **Chưa có** |

## 1. Điểm theo tiêu chí

| Mã | Tiêu chí | Điểm | Căn cứ | Còn mở |
|---|---|---:|---|---|
| C1 | Chính xác và nhất quán | 9,0/10 | Case, cẩm nang lấy từ bài đã đăng auto365.vn; không ghi giá; đại lý X-Light/GTR/AES, 90+ chi nhánh, hotline 911 theo dữ kiện đã chốt; title, H1, schema, FAQ khớp nhau | Chưa có người duyệt kỹ thuật cho box "lưu ý" (2.0/2.5/3.0 inch, nguồn xe điện) và FAQ |
| C2 | Đầy đủ theo vai trò | 9,0/10 | 18 dòng xe chia 3 nhóm, 6 dòng có trang riêng, 11 case lọc theo dòng xe, box lưu ý, 4 lý do, chi nhánh, 8 cẩm nang, 4 FAQ, form | Cẩm nang là bài bi gầm chung (hãng khác), chưa có bài riêng VinFast; chưa có khối video |
| C3 | Tự nhiên và hữu ích | 9,2/10 | Giọng trung tính ("kỹ thuật viên", "chủ xe"), không "nhất/tuyệt đối"; thẻ dòng xe chưa có hồ sơ dẫn về form, tự điền dòng xe | — |
| **C** | | **27,2/30** | | |
| S1 | Nhu cầu tìm kiếm và vai trò URL | 9,2/10 | Trang hãng giữa hub bi gầm và trang dòng xe; phân vai trong 02 mục 1 | — |
| S2 | Nội dung SEO trên trang | 9,4/10 | Title 72 ký tự, meta 146, 1 H1 (đã sửa dính chữ khi đọc text), canonical, 6 khối schema sinh từ HTML; thẻ dòng xe/case/cẩm nang render sẵn trong HTML | Thiếu `reviewedBy`/`lastReviewed` (chờ duyệt) |
| S3 | Liên kết và hồ sơ triển khai | 9,0/10 | 25 link auto365.vn kiểm 22/10 = 200; sửa link 404 `/xe-thuc-te`; liên kết xuống 6 trang dòng xe | 3 trang con production còn 404 (không trừ điểm theo quy ước chấm preview, ghi để CMS xử lý) |
| **S** | | **27,6/30** | | Dưới ngưỡng 28,5 |
| G1 | Câu trả lời rõ, đủ ngữ cảnh | 9,2/10 | Box "Xe VinFast lắp bi gầm cần lưu ý gì?" trả lời thẳng; FAQ xe điện, đăng kiểm, thời gian | — |
| G2 | Lập luận phục vụ nhu cầu | 8,8/10 | Lý do chọn theo hốc đèn, nguồn điện, đường cắt cos; chia dòng xe theo nhu cầu (xe điện / dịch vụ / đời trước) | Chưa có gợi ý theo nhu cầu sử dụng (đi phố, chạy dịch vụ đêm, đi tỉnh) cho từng nhóm |
| G3 | Nguồn và truy nguyên | 4,4/5 | Mỗi case link bài gốc có ngày; nguồn ảnh ghi trong 02; 04 lưu URL từng dòng | Chưa có người duyệt đứng tên + ngày trên trang |
| **G** | | **22,4/25** | | Dưới ngưỡng 23,75 |
| U1 | Cấu trúc dễ đọc | 4,6/5 | Hero → dòng xe → case → lưu ý → lý do → chi nhánh → cẩm nang → FAQ → CTA → form; mobile 375px không tràn ngang, lưới dòng xe 2 hàng vuốt ngang | — |
| U2 | Hành động tiếp theo | 4,4/5 | Form nr-lead (`data-service="Bi gầm VinFast"`), gọi 0365 365 911, Zalo; thẻ dòng xe chưa có hồ sơ tự điền dòng xe vào form | Chưa gửi lead test trên trang này |
| U3 | Bộ bàn giao nhất quán | 4,8/5 | 01 + 04 xuất tự động từ index.html cùng SHA; 02 hướng dẫn CMS; 03 phiếu này; khối kiểm tra nội bộ cuối trang (chỉ hiện trên preview) | Chưa có 05 phiếu duyệt (chưa có người duyệt) |
| **U** | | **13,8/15** | | |
| **Tổng** | | **91,0/100** | | C 27,2 · S 27,6 · G 22,4 · U 13,8 |

## 2. Kết luận

**CHƯA ĐẠT** (91,0 < 95; SEO và GEO dưới ngưỡng). Đây là tự chấm, cần reviewer chấm lại.

## 3. Việc cần làm để đạt

| Ưu tiên | Việc | Ảnh hưởng | Ai |
|---|---|---|---|
| 1 | Kiểm duyệt kỹ thuật box lưu ý + FAQ; thêm byline + `reviewedBy`/`lastReviewed`; lập 05 phiếu duyệt | C1, S2, G3, U3 | Anh Đạo |
| 2 | Gửi lead test, xác nhận CRM nhận đúng dịch vụ | U2 | Team + vận hành |
| 3 | Thêm gợi ý theo nhu cầu cho 3 nhóm xe (phố / dịch vụ / đời trước) | G2, C2 | Team, sau đó duyệt |
| 4 | Thay hoặc bổ sung cẩm nang bằng bài riêng VinFast khi có | C2, S1 | Content |
| 5 | Đăng 3 trang con Fadil / Limo Green / Lux SA2.0 trên production | S3 (L2 sau đăng) | CMS |

## 4. Đã sửa trong lượt chấm này (22/10/2026)

| Mục | Đã sửa |
|---|---|
| Link | "Xem tất cả case" `/xe-thuc-te` (404) → `/tin-tuc?q=VinFast` |
| H1 | Thêm khoảng trắng giữa "VinFast" và "theo từng dòng xe" (text bot đọc bị dính chữ) |
| VF 7 | Trang production đã 200 → thẻ VF 7 link sang trang dòng xe, vào ItemList |
| FAQ | Câu dòng có hồ sơ khớp 6 trang dòng xe |
| U3 | Bộ 01–04 + script xuất tự động + khối kiểm tra nội bộ cuối trang |
