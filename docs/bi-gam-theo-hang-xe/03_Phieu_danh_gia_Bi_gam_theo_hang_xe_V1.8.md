# 03 — Phiếu đánh giá SEO/GEO V1.8: Bi gầm theo hãng xe

| Trường | Giá trị |
|---|---|
| Chuẩn | Auto365 Quy chuẩn SEO/GEO HTML V1.8 — đủ 12 tiêu chí (có U3), thang /100. Ngưỡng: tổng ≥95, SEO ≥28,5/30, GEO ≥23,75/25 |
| Bản chấm | Preview `auto365/bi-gam/theo-hang-xe/index.html` — SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_theo_hang_xe.md) (dateModified 2026-10-19) |
| Ngày chấm | 19/10/2026 (lượt 1: 88,3 · sau sửa sapo/ngày/meta: 89,9 · lượt này sau bộ bàn giao + nguồn hãng) |
| Loại chấm | Tự chấm của team triển khai trên preview — **không phải phiếu nghiệm thu** |
| Kiểm duyệt kỹ thuật | **Chưa có** |

## 1. Điểm theo tiêu chí

| Mã | Tiêu chí | Điểm | Căn cứ | Còn mở |
|---|---|---:|---|---|
| C1 | Chính xác và nhất quán | 9,3/10 | Case, bài tư vấn lấy từ bài đã đăng auto365.vn; giới thiệu hãng có nguồn website chính thức; bỏ câu kiểm duyệt chưa có thật; không ghi giá | Chưa có lượt kiểm duyệt kỹ thuật cho trang này |
| C2 | Đầy đủ theo vai trò | 9,4/10 | 20 hãng / 216 dòng xe, 97 case, 24 bài cẩm nang, giới thiệu hãng, đề xuất đèn, quy trình 7 bước, 6 lý do chọn, chi nhánh, video, 5 FAQ | — |
| C3 | Tự nhiên và hữu ích | 9,3/10 | Sapo bỏ "an toàn nhất" và "đều có pát zin"; thêm dòng cập nhật + nguồn dữ liệu | — |
| **C** | | **28,0/30** | | |
| S1 | Nhu cầu tìm kiếm và vai trò URL | 9,4/10 | Trang con hub bi gầm, phân vai với hub/X-Light/VinFast (02 mục 1) | — |
| S2 | Nội dung SEO trên trang | 9,5/10 | Title 68 ký tự, H1 duy nhất, meta description mới, canonical, 7 khối schema, `dateModified` 2026-10-19, nội dung JS prerender sẵn trong HTML | — |
| S3 | Liên kết và hồ sơ triển khai | 9,5/10 | 142 link auto365.vn kiểm 19/10 không lỗi; hướng dẫn CMS + quy trình sync | Link vào từ hub/VinFast kiểm ở L2 sau đăng |
| **S** | | **28,4/30** | | **Thiếu 0,1 so với ngưỡng 28,5** |
| G1 | Câu trả lời rõ, đủ ngữ cảnh | 9,4/10 | Sapo định nghĩa trang, FAQ 5 câu, mỗi hãng có đoạn giới thiệu + gợi ý ánh sáng | — |
| G2 | Lập luận phục vụ nhu cầu | 9,1/10 | Đề xuất đèn dựa trên số case thực tế theo hãng | "Gợi ý ánh sáng" chỉ đếm case, chưa nêu lý do theo hốc đèn/điện áp từng dòng xe |
| G3 | Nguồn và truy nguyên | 4,7/5 | Mỗi case link bài gốc; nguồn hãng hiển thị + ngày tra cứu; 04 lưu URL từng dòng | Chưa có người duyệt kỹ thuật đứng tên |
| **G** | | **23,2/25** | | **Thiếu 0,55 so với ngưỡng 23,75** |
| U1 | Cấu trúc dễ đọc | 4,6/5 | Chọn hãng → dòng xe → case → lý do → quy trình → chi nhánh → video → cẩm nang → FAQ; 375px không tràn ngang | — |
| U2 | Hành động tiếp theo | 4,7/5 | Popup đề xuất 3 đèn, nút gọi 0365 365 911, Zalo, link sản phẩm; form nr-lead (POST /api/leads qua lead.js production) cuối trang | Chưa gửi lead test end-to-end (CRM chưa xác nhận) |
| U3 | Bộ bàn giao nhất quán | 4,6/5 | 01 + 04 xuất tự động cùng SHA, 02 hướng dẫn CMS, 03 phiếu này | Chưa có 04 phiếu duyệt có chữ ký người duyệt |
| **U** | | **13,9/15** | | |
| **Tổng** | | **93,5/100** | | C 28,0 · S 28,4 · G 23,2 · U 13,9 |

## 2. Kết luận

**CHƯA ĐẠT V1.8.** Tổng 93,5/100 (<95); SEO 28,4/30 (<28,5); GEO 23,2/25 (<23,75).

Việc cần để đạt (theo mức ảnh hưởng):

1. Kiểm duyệt kỹ thuật (anh Nguyễn Quang Đạo hoặc người được giao): duyệt rồi thêm byline + `lastReviewed` → C1, G3.
2. Bổ sung lý do trong "Gợi ý ánh sáng" theo hốc đèn/điện áp của từng dòng xe → G2.
3. Gửi 1 lead test qua form trên production và nhờ CRM xác nhận, sau đó xoá lead test → U2.

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
