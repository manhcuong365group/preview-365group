# 03 — Phiếu đánh giá SEO/GEO V1.8: Bi gầm theo hãng xe

| Trường | Giá trị |
|---|---|
| Chuẩn | Auto365 Quy chuẩn SEO/GEO HTML V1.8 — đủ 12 tiêu chí (có U3), thang /100. Ngưỡng: tổng ≥95, SEO ≥28,5/30, GEO ≥23,75/25 |
| Bản chấm | Preview `auto365/bi-gam/theo-hang-xe/index.html` — SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_theo_hang_xe.md) (dateModified 2026-10-19) |
| Ngày chấm | 19/10/2026 (lượt 1: 88,3 · sau sửa sapo/ngày/meta: 89,9 · sau bộ bàn giao + nguồn hãng: 93,3 · sau form: 93,5 · lượt này sau duyệt kỹ thuật, lý do hốc/12V, lead test) |
| Loại chấm | Tự chấm của team triển khai trên preview — **không phải phiếu nghiệm thu** |
| Kiểm duyệt kỹ thuật | Nguyễn Quang Đạo — duyệt 19/10/2026 (user xác nhận); `lastReviewed` 2026-10-19. Câu lý do hốc đèn/12V trong "Gợi ý ánh sáng" thêm sau lượt duyệt, chờ anh Đạo duyệt bổ sung |

## 1. Điểm theo tiêu chí

| Mã | Tiêu chí | Điểm | Căn cứ | Còn mở |
|---|---|---:|---|---|
| C1 | Chính xác và nhất quán | 9,6/10 | Case, bài tư vấn lấy từ bài đã đăng auto365.vn; giới thiệu hãng có nguồn website chính thức; không ghi giá; anh Đạo duyệt 19/10/2026 | — |
| C2 | Đầy đủ theo vai trò | 9,4/10 | 20 hãng / 216 dòng xe, 97 case, 24 bài cẩm nang, giới thiệu hãng, đề xuất đèn, quy trình 7 bước, 6 lý do chọn, chi nhánh, video, 5 FAQ | — |
| C3 | Tự nhiên và hữu ích | 9,3/10 | Sapo bỏ "an toàn nhất" và "đều có pát zin"; thêm dòng cập nhật + nguồn dữ liệu | — |
| **C** | | **28,3/30** | | |
| S1 | Nhu cầu tìm kiếm và vai trò URL | 9,4/10 | Trang con hub bi gầm, phân vai với hub/X-Light/VinFast (02 mục 1) | — |
| S2 | Nội dung SEO trên trang | 9,6/10 | Title 68 ký tự, H1 duy nhất, meta description, canonical, 7 khối schema; CollectionPage có `dateModified`, `lastReviewed`, `reviewedBy` khớp byline hiển thị; nội dung JS prerender sẵn | — |
| S3 | Liên kết và hồ sơ triển khai | 9,5/10 | 142 link auto365.vn kiểm 19/10 không lỗi; hướng dẫn CMS + quy trình sync | Link vào từ hub/VinFast kiểm ở L2 sau đăng |
| **S** | | **28,5/30** | | Đạt ngưỡng 28,5 (vừa đủ) |
| G1 | Câu trả lời rõ, đủ ngữ cảnh | 9,5/10 | Sapo định nghĩa trang, FAQ 5 câu, mỗi hãng có giới thiệu + gợi ý ánh sáng kèm điều kiện lắp | — |
| G2 | Lập luận phục vụ nhu cầu | 9,4/10 | "Gợi ý ánh sáng": mẫu lắp nhiều theo case + lý do theo kiểu xe (gầm cao/bán tải: hốc đủ bi 3.0 inch; sedan, xe nhỏ: 2.0 inch hoặc pát/mặt dưỡng) + 12V, kiểm hốc/giắc/nguồn trước khi chốt | Lý do suy theo phân khúc, chưa theo từng dòng xe; chờ anh Đạo duyệt câu mới |
| G3 | Nguồn và truy nguyên | 4,9/5 | Mỗi case link bài gốc; nguồn hãng + ngày tra cứu; người duyệt đứng tên + ngày; 04 lưu URL từng dòng | — |
| **G** | | **23,8/25** | | Đạt ngưỡng 23,75 |
| U1 | Cấu trúc dễ đọc | 4,6/5 | Chọn hãng → dòng xe → case → lý do → quy trình → chi nhánh → video → cẩm nang → FAQ; 375px không tràn ngang | — |
| U2 | Hành động tiếp theo | 4,8/5 | Popup đề xuất 3 đèn, gọi 0365 365 911, Zalo, form nr-lead; lead test POST https://auto365.vn/api/leads 19/10/2026 → `{"success":true}`, lead_id 205 | CRM chưa xác nhận thấy lead và chưa xoá lead 205 |
| U3 | Bộ bàn giao nhất quán | 4,7/5 | 01 + 04 xuất tự động cùng SHA, 02 hướng dẫn CMS, 03 phiếu này ghi người duyệt + ngày | Chưa có biên bản duyệt ký tên |
| **U** | | **14,1/15** | | |
| **Tổng** | | **94,7/100** | | C 28,3 · S 28,5 · G 23,8 · U 14,1 |

## 2. Kết luận

**CHƯA ĐẠT V1.8 — thiếu 0,3 điểm tổng.** Tổng 94,7/100 (<95); SEO 28,5/30 (đạt, vừa đủ); GEO 23,8/25 (đạt).

Việc còn lại:

1. CRM xác nhận thấy lead 205 rồi xoá → U2.
2. Anh Đạo duyệt câu lý do hốc đèn/12V mới trong "Gợi ý ánh sáng" → G2.
3. Biên bản duyệt có ký tên (04) → U3.

## 3. Đã sửa ngày 19/10/2026

| Mục | Đã sửa |
|---|---|
| Sapo | Bỏ "an toàn nhất", "Mỗi hồ sơ đều đi kèm … pát zin"; ghi dẫn về bài gốc |
| Thẻ "Tư vấn đúng theo từng xe" | Bỏ câu "do kỹ thuật viên Nguyễn Quang Đạo kiểm duyệt" (trang này chưa được duyệt) |
| Ngày | Dòng "Cập nhật 19/10/2026" + `dateModified` trong CollectionPage |
| Meta description | Viết lại theo nội dung thật của trang |
| Nguồn giới thiệu hãng | Link website chính thức tại Việt Nam cho 18 hãng; Chevrolet/Daewoo ghi "mẫu từng phân phối chính hãng tại Việt Nam" |
| Bộ bàn giao | 01, 02, 03, 04 trong `docs/bi-gam-theo-hang-xe/` |
| Form tư vấn | Khối nr-lead (giống trang VF6) thay CTA cuối trang: số điện thoại, họ tên, nhu cầu, khu vực; `data-service="Bi gầm theo hãng xe"` |
| Thứ tự dòng xe | Trong từng hãng, dòng xe có bài lắp thực tế đứng trước |
| Duyệt kỹ thuật | Byline "Rà soát kỹ thuật: Nguyễn Quang Đạo (19/10/2026)" + `reviewedBy`/`lastReviewed`; khôi phục câu kiểm duyệt ở thẻ "Tư vấn đúng theo từng xe" |
| Gợi ý ánh sáng | Thêm lý do theo kiểu xe (hốc gầm 3.0/2.0 inch, pát/mặt dưỡng) và điện 12V |
| Lead test | POST /api/leads → success, lead_id 205 (19/10/2026) |
