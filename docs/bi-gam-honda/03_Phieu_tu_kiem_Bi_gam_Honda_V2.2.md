# 03 — Phiếu tự kiểm V2.2: Hub Bi gầm Honda

| Trường | Giá trị |
|---|---|
| Trang | https://preview-365group.pages.dev/bi-gam/honda/ |
| Bản kiểm | SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_Honda.md) |
| Ngày tự kiểm | 07/11/2026 (chấm lại sau duyệt, test lead, QA mobile) |
| Chuẩn | V2.2 — ngưỡng tổng ≥95, SEO ≥28,5/30, GEO ≥23,75/25 |
| Trạng thái | **ĐÃ DUYỆT nội dung 07/11/2026** — anh Nguyễn Quang Đạo (chủ quản xác nhận), gồm phần bổ sung GEO; test điện thoại thật OK 07/11; lead test #35 vào CRM OK; phiếu U3 tự nghiệm thu: [06](06_Phieu_nghiem_thu_U3_Bi_gam_Honda.md) |

## 1. Tự chấm (trên preview)

| Mã | Tiêu chí | Điểm | Căn cứ |
|---|---|---:|---|
| C1 | Chính xác và nhất quán | 9,3/10 | 15 case + bài tư vấn từ bài đã đăng auto365.vn; nội dung kỹ thuật anh Đạo duyệt 07/11; mỗi bài case là một xe khác nhau (chủ quản xác nhận 07/11); còn một số bài không ghi đời xe |
| C2 | Đầy đủ theo vai trò | 9,2/10 | 8 dòng xe, 15 case, 2 bài tư vấn (City, CR-V); Accord, Civic Type R chưa có case |
| C3 | Tự nhiên và hữu ích | 9,5/10 | Giọng trung tính, có điều kiện kiểm xe; thẻ dòng xe đồng bộ ảnh tách nền, hero ảnh thi công thật |
| | **Content** | **28,0/30** | |
| S1 | Intent và URL | 9,6/10 | Trang hãng giữa hub bi gầm và bài dòng xe |
| S2 | On-page | 9,5/10 | 1 H1, canonical, 6 khối schema sinh từ HTML, nội dung render sẵn |
| S3 | Liên kết, triển khai | 9,4/10 | Link auto365.vn trong nội dung kiểm HTTP 200 ngày 07/11; hồ sơ 01–06 |
| | **SEO** | **28,5/30** | Qua ngưỡng 28,5 |
| G1 | Trả lời rõ | 9,4/10 | Box lưu ý; FAQ dòng có hồ sơ/2.0 hay 3.0 inch/đời cũ/HCM/tỉnh khác/chi phí/bảo hành; bảng tra "Xe  đã lắp mẫu bi gầm nào?" ( dòng: xe, đời/phiên bản, mẫu đèn, lens, link bài) |
| G2 | Lập luận, giới hạn | 9,4/10 | 3 nhóm nhu cầu kèm khi nào chưa cần lắp; FAQ 2.0/3.0 inch dẫn đúng xe đã lắp, nêu giới hạn (khác đời phải đo hốc) |
| G3 | Nguồn, truy nguyên | 5/5 | Anh Đạo duyệt 07/11: tên + ngày trên trang và schema (`reviewedBy`, `lastReviewed`); case link bài gốc |
| | **GEO** | **23,8/25** | Qua ngưỡng 23,75 — phần bổ sung GEO 07/11 anh Đạo đã duyệt |
| U1 | Đa thiết bị | 5/5 | 375 px giả lập + 1366 px đạt; chủ quản test điện thoại thật OK 07/11/2026 |
| U2 | Tương tác, lead | 5/5 | Lead test #35 (service "Bi gầm Honda", xe Honda City RS 2022) gửi /api/leads → `success:true`, `test:true` ngày 07/11 |
| U3 | Bàn giao | 5/5 | 01–06 cùng build; phiếu U3 R2 PASS · ĐÃ DUYỆT 07/11/2026 — [PDF](PHIEU_U3_HUB_BI_GAM_HONDA_PREVIEW_PASS_DA_DUYET_R2_20261107.pdf) |
| | **Tổng** | **≈95,3/100** | Tự chấm 07/11 (qua 3 ngưỡng). **Tái kiểm độc lập 08/11 chưa đạt** — xem mục 3; đã vá 09/11, anh Đạo đã duyệt phần vá 09/11/2026 (lastReviewed 2026-11-09); chờ reviewer tái chấm |

## 2. Còn thiếu

Phần production (IT): URL trả 200, robots/canonical, OG, liên kết từ trang theo hãng + sitemap, gỡ khối nội bộ, xoá lead test; thống nhất giá trị `priority` với CRM.

## 3. Tái kiểm độc lập 08/11/2026 — xử lý 09/11/2026

Reviewer chấm 78,1/85 (Content 27,5 · SEO 27,7 · GEO 22,9): lens trống 15/15, mô tả SEO nêu AES, tìm "CRV"/"Honda CR-V" rỗng, nhóm Sedan có Civic Type R, nút xem case, bộ tìm chi nhánh.

| Mục | Đã vá trên preview 09/11 |
|---|---|
| Lens | Điền theo bài case (ưu tiên) hoặc thông số trang sản phẩm của đúng mẫu (F10 Hyper 2.0 = 2.0 inch; X3 Ultra, F10 Pro, F10 New 2025, 301 V2, Titan 301, GTR G1 Turbo = 3.0 inch; AES SV theo tên mẫu). Dòng không có căn cứ ghi "Chưa xác nhận". Nguồn từng dòng ở 02 |
| FAQ lens | Một ví dụ 2.0 inch và một ví dụ 3.0 inch lấy từ bảng tra (không có ca 2.0 thì ghi rõ chưa có) |
| FAQ dòng xe | Sinh lại theo dữ liệu: dòng có hồ sơ, dòng có bài tư vấn, đủ danh sách "Tư vấn cấu hình" |
| Meta/OG/CollectionPage | Mô tả nêu đúng hãng đèn có trong hồ sơ; tên ItemList dòng xe theo đúng nội dung |
| Tìm dòng xe | Bỏ tiền tố hãng, dấu gạch, khoảng trắng khi so khớp; thông báo rỗng có nút "Xoá tìm kiếm" |
| Điều hướng | Nút "Xem N hồ sơ lắp bi gầm" mở bảng `#bang-tra`; nút giá → `/nang-cap-anh-sang-bi-gam#san-pham` kèm ghi chú công lắp/phụ kiện báo theo xe; nút "Chọn dòng xe" ngay sau sapo; bù thanh đầu trang cố định (`scroll-margin-top`) |
| Bảng tra mobile | Mỗi hồ sơ hiển thị thành thẻ (xe, mẫu đèn, lens, link), không cần vuốt ngang |
| Nội dung | Đoạn "Khi nào chưa cần nâng cấp"; FAQ bảo hành thêm đối chiếu số seri, kích hoạt bảo hành điện tử; câu chốt tham khảo kỹ thuật theo mẫu chuẩn |
| Hồ sơ 01 | Ký tự `|` trong title được thoát, không tách cột |
| Nhóm xe | Tab "Sedan" đổi thành "Sedan/Hatchback" (Civic Type R) |
| Ngoài phạm vi trang | Bộ tìm chi nhánh (truy vấn "Hồ Chí Minh" khớp địa chỉ "Đường mòn Hồ Chí Minh") là script dùng chung của website — DEV danh bạ. Font Remix Icon/JS 404 trên preview do shell — kiểm khi tích hợp |
