# 03 — Phiếu tự kiểm V1.9: Hub Bi gầm Toyota

| Trường | Giá trị |
|---|---|
| Trang | https://preview-365group.pages.dev/bi-gam/toyota/ |
| Bản kiểm | SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_Toyota.md) |
| Ngày tự kiểm | 03/11/2026 |
| Chuẩn | V1.9 — 12 tiêu chí C1–C3, S1–S3, G1–G3, U1–U3; ngưỡng tổng ≥95, SEO ≥28,5/30, GEO ≥23,75/25 |
| Trạng thái | **Bản dựng đầu — chưa có rà soát kỹ thuật, chưa có reviewer chấm** |

## 1. Tự chấm (trên preview)

| Mã | Tiêu chí | Điểm | Căn cứ | Còn mở |
|---|---|---:|---|---|
| C1 | Chính xác và nhất quán | 9,0/10 | 22 case + 7 bài cẩm nang đèn lấy từ bài đã đăng auto365.vn; không ghi giá; title, H1, schema, FAQ khớp nhau | Box lưu ý, khối nhu cầu, FAQ hybrid chưa được rà soát kỹ thuật |
| C2 | Đầy đủ theo vai trò | 9,4/10 | 20 dòng xe 4 nhóm, 22 case lọc theo dòng xe + hãng đèn, box lưu ý, 3 nhóm nhu cầu, 6 lý do, chi nhánh 33 tỉnh, 7 bài cẩm nang đèn, 8 FAQ, form | 5 dòng chưa có ảnh xe |
| C3 | Tự nhiên và hữu ích | 9,3/10 | Giọng trung tính ("kỹ thuật viên", "chủ xe"), không dùng từ tuyệt đối | — |
| S1 | Nhu cầu tìm kiếm và vai trò URL | 9,5/10 | Trang hãng giữa hub bi gầm và bài tư vấn dòng xe (02 mục 1) | — |
| S2 | Nội dung SEO trên trang | 9,5/10 | Title 72, meta 148 ký tự, 1 H1, canonical, 6 khối schema sinh từ HTML, nội dung render sẵn trong HTML | — |
| S3 | Liên kết và hồ sơ triển khai | 9,4/10 | 38 link auto365.vn (22 case, 7 cẩm nang đèn, 9 thẻ dòng xe) kiểm 200 ngày 03/11; hồ sơ 01–05 | Chưa có trang dòng xe riêng như VinFast |
| G1 | Câu trả lời rõ, đủ ngữ cảnh | 9,4/10 | Box "Xe Toyota lắp bi gầm cần lưu ý gì?" trả lời thẳng; FAQ hybrid, xe đời cũ, nơi lắp, chi phí | — |
| G2 | Lập luận phục vụ nhu cầu | 9,4/10 | 3 nhóm nhu cầu kèm "khi nào chưa cần lắp" và case đã lắp | — |
| G3 | Nguồn và truy nguyên | 4,0/5 | Mỗi case link bài gốc có ngày; 04 lưu URL từng dòng | Chưa có người rà soát kỹ thuật đứng tên (`reviewedBy`) |
| U1 | Cấu trúc dễ đọc | 4,5/5 | Thứ tự giống hub VinFast đã duyệt; mobile 375px không tràn ngang (kiểm 03/11) | Chưa test máy thật |
| U2 | Hành động tiếp theo | 4,8/5 | Form `/api/leads` (`data-service="Bi gầm Toyota"`), gọi 0365 365 911, thẻ chưa có hồ sơ tự điền dòng xe | Chưa gửi lead test |
| U3 | Bàn giao | 4,5/5 | Hồ sơ 01–05 cùng build, bản HTML + SHA | Chưa có phiếu duyệt |
| | **Tổng** | **≈91,7/100** | SEO 28,4/30 · GEO 22,8/25 | **Chưa đạt** |

## 2. Việc cần để đạt

1. Anh Nguyễn Quang Đạo rà soát kỹ thuật: nhóm dòng xe, box lưu ý (hốc 2.0/3.0 inch, xe đời cũ, hybrid), khối nhu cầu, FAQ → thêm byline rà soát + `lastReviewed` (G3, C1).
2. Test máy thật và gửi 1 lead test (U1, U2).
3. Ghi phiếu duyệt 05 (U3).

## 3. Biên bản QA 03/11/2026

| Phép thử | Kết quả |
|---|---|
| Desktop 1280px: hero, lưới 20 dòng xe, 22 case, vì sao chọn, cẩm nang đèn 7 bài, FAQ | Hiển thị đúng |
| Mobile 375px | Không tràn ngang (scrollWidth = 375) |
| Lọc case Hilux → 2 bài; thêm hãng Titan → báo trống; "Bỏ lọc" → 22 bài, focus về "Tất cả" | Đạt |
| Schema | CollectionPage, BreadcrumbList, Organization, ItemList (9), ItemList (22), FAQPage |
| Console | Chỉ còn lỗi CORS font remixicon của shell (giống hub VinFast) |
