# Phiếu duyệt — Bi gầm VinFast Minio Green

| Mục | Giá trị |
|---|---|
| Preview | https://preview-365group.pages.dev/bi-gam/vinfast/minio-green/ |
| URL production | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/minio-green |
| SHA-256 index.html | `cbb1ba43c84aa92b86aed0a9198a1065a270634fff19fdc50792cb757386ef6f` |
| Kỹ thuật xác nhận | Anh Nguyễn Quang Đạo — 9 mẫu, 07/11/2026 |
| Tự chấm V1.9 | 89,5/100 (chấm lại 09/11) — chưa đạt (xem 03) |
| Tự chấm 10/11/2026 | **95,8/100 — ĐẠT** (S 28,8, G 24,2) |
| **Trạng thái** | **ĐÃ DUYỆT U1–U3 — chủ quản test máy thật và ký 07/11/2026 (ảnh thực tế đã thay 10/11; còn 2 ảnh Cos/Pha mô phỏng AI có nhãn)**; lỗi mở trước production: ảnh minh họa AI |

## Phiếu U1–U3 (tự kiểm 07/11/2026)

Kiểm trên localhost (bản cùng SHA ở trên), không gửi lead thật.

### U1 — Hiển thị: ĐẠT (chủ quản test máy thật 07/11/2026) (có lỗi mở ảnh AI)

| Kiểm | Kết quả |
|---|---|
| 360 / 375 / 390 / 768 / 1440 px | Không tràn ngang (scrollWidth ≤ viewport ở mọi khổ) |
| Ảnh | 8 vị trí ảnh minio-green_01…07 tải đủ (1280px), không ảnh lỗi |
| Thẻ sản phẩm | 9 thẻ; bộ lọc X-Light 5 / GTR 1 / AES 3 |
| Bảng so sánh | 7 dòng, cuộn ngang trên mobile |
| Slider case / thẻ xe khác | Cuộn ngang đúng thiết kế |
| Modal báo giá | Mở từ thẻ sản phẩm, hiển thị đúng |
| Lỗi mở | Còn 2 ảnh Cos/Pha mô phỏng AI có nhãn (MG-01) |

### U2 — CTA / lead: ĐẠT (chủ quản test máy thật 07/11/2026) (chưa test backend thật)

| Kiểm | Kết quả |
|---|---|
| SĐT thiếu số (`0901 23`) | Chặn, báo "Số điện thoại chưa đúng…", không gửi |
| SĐT dạng dãy số giả (`0901234567`) | Cảnh báo, yêu cầu bấm lại, không gửi |
| SĐT hợp lệ + phản hồi `success:false` (mock) | Gửi 1 lần tới `/api/leads`, hiện thông báo lỗi, **không** báo thành công |
| Phản hồi `success:true` + `lead_id` (mock) | Hiện "Đã nhận yêu cầu…" |
| Field gửi đi | `service=Bi gầm VinFast Minio Green`, `source_page=Master: VinFast Minio Green`, `priority=Đèn – Bi gầm`, `source_url` |
| Modal báo giá | `car_model=VinFast Minio Green`, `product`, `product_price` đúng SKU, `request_type=remote_quote` |
| GA4 | `generate_lead` chỉ bắn khi `success===true` và có `lead_id` |
| Lỗi mở | Chưa test /api/leads → CRM thật (MG-04); `product_url` tương đối (MG-05) |

### U3 — Hồ sơ: ĐẠT (chủ quản test máy thật 07/11/2026)

| Kiểm | Kết quả |
|---|---|
| SHA | 02/03/04 cùng SHA index.html hiện tại |
| Ngày | datePublished/dateModified/lastReviewed = 2026-11-07, hiển thị "Cập nhật 07/11/2026" |
| Reviewer | Person Nguyễn Quang Đạo + reviewedBy trong schema; dòng "Rà soát kỹ thuật" link /tac-gia/nguyen-quang-dao |
| Bảng xác nhận | `XAC_NHAN_TUONG_THICH_MINIO_GREEN_20261107.md` — 9 mẫu khớp ItemList |
| JSON-LD | `JSON.parse` OK |
| Lỗi mở | Chưa có phiếu PDF |

## Kết luận

U1–U3 đạt — chủ quản test máy thật và ký 07/11/2026. Tổng tự chấm 89,5/100 (09/11) chưa đạt ngưỡng V1.9. Bắt buộc thay ảnh chụp thực tế trước production.

## Nhật ký

| Ngày | Nội dung |
|---|---|
| 10/11/2026 | Chấm lại theo thang VF5 (không trừ production/CRM): 95,4/100 — ĐẠT ngưỡng V1.9 (xem 03) |
| 10/11/2026 | Thay 5 ảnh thực tế Minio Green tại Auto365 (01 hero 1600×902, 02 mặt trước 1600×1067, 03 đang lắp, 04 cận bi gầm, 07 hoàn thiện); bỏ nhãn AI, sửa ALT/OG/caption; 05/06 Cos/Pha vẫn mô phỏng AI có nhãn; dateModified 2026-11-10; G3 4,0 → 4,4, tổng 95,8 |
| 07/11/2026 | Dựng trang; anh Đạo xác nhận 9 mẫu; bộ ảnh minh họa AI |
| 07/11/2026 | Tự kiểm U1–U3, tự chấm 88,0/100 — chờ chủ quản ký |
| 07/11/2026 | Chủ quản test máy thật U1–U3 và ký — ĐÃ DUYỆT U1–U3; còn ảnh AI phải thay trước production |
| 09/11/2026 | Vá audit content 08/11 (7,2/10): sapo trước Trả lời nhanh (74 từ), meta 160 ký tự nhắc lens 2.0/3.0; dòng phạm vi dưới H2; bảng so sánh đủ 9 mẫu + cột kích thước thân theo trang SP (X3 Ultra, AES SV 2.0 Max xác nhận bằng trang SP); JS so sánh bỏ "Cần xác nhận theo mã"; caption "Ảnh minh họa AI" / "Mô phỏng vùng sáng" trên 8 ảnh; bảng chọn theo nhu cầu + "Khi nào chưa cần nâng cấp" + kết luận; quy trình 7 bước dạng bảng; FAQ 6 câu (bảo hành 72 từ), 3 câu chi nhánh chuyển sang mục tiếp nhận; dateModified 2026-11-09 |
| 09/11/2026 | Chấm lại sau vá 08/11: C2 9,5, G2 9,5, U3 4,5 (chủ quản đã ký 07/11) → 89,5/100, vẫn CHƯA ĐẠT do ảnh AI (S2) và chưa có production (S3); sửa nhãn U3, bỏ lỗi product_url (đã dùng URL tuyệt đối 08/11) |
