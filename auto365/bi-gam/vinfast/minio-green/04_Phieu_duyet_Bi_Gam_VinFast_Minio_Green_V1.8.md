# Phiếu duyệt — Bi gầm VinFast Minio Green

| Mục | Giá trị |
|---|---|
| Preview | https://preview-365group.pages.dev/bi-gam/vinfast/minio-green/ |
| URL production | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/minio-green |
| SHA-256 index.html | `1584afbe5b9f46d0580efb8fd302fd204fb461bff7391ad8bbc94f515ed0d0a6` |
| Kỹ thuật xác nhận | Anh Nguyễn Quang Đạo — 9 mẫu, 07/11/2026 |
| Tự chấm V1.9 | 88,0/100 — chưa đạt (xem 03) |
| **Trạng thái** | **TỰ KIỂM CHƯA ĐẠT — chờ chủ quản ký**; lỗi mở trước production: ảnh minh họa AI |

## Phiếu U1–U3 (tự kiểm 07/11/2026)

Kiểm trên localhost (bản cùng SHA ở trên), không gửi lead thật.

### U1 — Hiển thị: TỰ KIỂM ĐẠT (có lỗi mở ảnh AI)

| Kiểm | Kết quả |
|---|---|
| 360 / 375 / 390 / 768 / 1440 px | Không tràn ngang (scrollWidth ≤ viewport ở mọi khổ) |
| Ảnh | 8 vị trí ảnh minio-green_01…07 tải đủ (1280px), không ảnh lỗi |
| Thẻ sản phẩm | 9 thẻ; bộ lọc X-Light 5 / GTR 1 / AES 3 |
| Bảng so sánh | 7 dòng, cuộn ngang trên mobile |
| Slider case / thẻ xe khác | Cuộn ngang đúng thiết kế |
| Modal báo giá | Mở từ thẻ sản phẩm, hiển thị đúng |
| Lỗi mở | Toàn bộ ảnh là minh họa AI (MG-01) |

### U2 — CTA / lead: TỰ KIỂM ĐẠT (chưa test backend thật)

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

### U3 — Hồ sơ: TỰ KIỂM ĐẠT

| Kiểm | Kết quả |
|---|---|
| SHA | 02/03/04 cùng SHA index.html hiện tại |
| Ngày | datePublished/dateModified/lastReviewed = 2026-11-07, hiển thị "Cập nhật 07/11/2026" |
| Reviewer | Person Nguyễn Quang Đạo + reviewedBy trong schema; dòng "Rà soát kỹ thuật" link /tac-gia/nguyen-quang-dao |
| Bảng xác nhận | `XAC_NHAN_TUONG_THICH_MINIO_GREEN_20261107.md` — 9 mẫu khớp ItemList |
| JSON-LD | `JSON.parse` OK |
| Lỗi mở | Chưa có chữ ký chủ quản; chưa có phiếu PDF |

## Kết luận

Tự kiểm U1–U3 đạt về chức năng; tổng tự chấm 88,0/100 chưa đạt ngưỡng V1.9. **Không ghi PASS** cho đến khi chủ quản ký. Bắt buộc thay ảnh chụp thực tế trước production.

## Nhật ký

| Ngày | Nội dung |
|---|---|
| 07/11/2026 | Dựng trang; anh Đạo xác nhận 9 mẫu; bộ ảnh minh họa AI |
| 07/11/2026 | Tự kiểm U1–U3, tự chấm 88,0/100 — chờ chủ quản ký |
