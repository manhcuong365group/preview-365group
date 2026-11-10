# Phiếu duyệt V1.9 — Bi gầm VinFast Herio Green

| Mục | Giá trị |
|---|---|
| Trang | https://preview-365group.pages.dev/bi-gam/vinfast/herio-green/ |
| URL production | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/herio-green (chưa phát hành) |
| SHA-256 index.html | `2abccf470e41096e30e0ac3db459d9881e37d48bd3ce9ecc47306223e6d29233` |
| Ngày | 07/11/2026 (cập nhật 09/11/2026) |
| Tự chấm 10/11/2026 | **96,0/100 — ĐẠT** (S 28,8, G 24,2) |
| Trạng thái | **ĐÃ DUYỆT U1–U3 — chủ quản test máy thật và ký 07/11/2026 (10/11: đã thay 5 ảnh thực tế; còn ảnh vùng sáng Cos là minh họa AI)** |

## 1. Xác nhận nội dung

| Hạng mục | Người xác nhận | Ngày | Ghi chú |
|---|---|---|---|
| 17 mẫu bi gầm lắp được Herio Green (lens 3.0 và 2.0 inch) | anh Nguyễn Quang Đạo | 07/11/2026 | Xem XAC_NHAN_TUONG_THICH_HERIO_GREEN_20261107.md; kỹ thuật viên kiểm pát và điện trên từng xe |
| Giá, bảo hành, chính sách cơ sở | Kế thừa các trang VinFast đã duyệt | — | Không đổi số liệu |
| Ảnh | — | — | 5 ảnh thực tế Herio Green tại Auto365 (10/11/2026); ảnh vùng sáng Cos vẫn minh họa AI |

## 2. Phiếu U1–U3 (tự kiểm 07/11/2026)

Kiểm trên bản local cùng SHA ở trên (http://localhost:8765/bi-gam/vinfast/herio-green/). Không gửi lead thật.

### U1 — Hiển thị, thiết bị: ĐẠT (chủ quản test máy thật 07/11/2026) (có lỗi mở ảnh AI)

| Khổ | Kết quả |
|---|---|
| 360 | Không tràn ngang (scrollWidth = 360); bộ lọc hãng cuộn ngang trong khung riêng |
| 375 | Không tràn (375) |
| 390 | Không tràn (390) |
| 768 | Không tràn |
| 1440 | Không tràn; 0 ảnh lỗi; bảng so sánh hiển thị |

- Mọi ảnh tham chiếu tồn tại và trả về kiểu ảnh.
- Modal báo giá (`dialog.nr-quote`) mở khi bấm nút báo giá.
- Lỗi mở: ảnh vùng sáng Cos còn minh họa AI (HG-01).

### U2 — CTA, lead: ĐẠT (chủ quản test máy thật 07/11/2026) (chưa test gửi thật)

- 3 form đều `action="/api/leads"`.
- Form báo giá: `service = "Báo giá bi gầm VinFast Herio Green"`, `source_page = "Master: VinFast Herio Green"`, `car_model` điền sẵn "VinFast Herio Green", `product`/`product_price`/`product_url` lấy từ nút báo giá từng mẫu (ví dụ "Bi gầm X-Light 301 V2").
- 2 form lead: `service = "Bi gầm VinFast Herio Green"`.
- quote.js kiểm SĐT bằng `/^(0|\+?84)[35789]\d{8}$/` và chỉ báo thành công khi server trả `{success:true, lead_id}`; sự kiện `generate_lead` chỉ bắn khi có `lead_id`.
- CTA ghi "Gửi yêu cầu kiểm tra xe", không hứa lịch đã giữ.
- Chưa làm: gửi lead test và đối soát CRM (HG-06).

### U3 — Hồ sơ, đồng bộ: ĐẠT (chủ quản test máy thật 07/11/2026)

- 02, 03, 04 và bảng xác nhận tương thích cùng SHA index.html ở trên.
- `datePublished`/`dateModified` 2026-11-07; `reviewedBy` Nguyễn Quang Đạo, `lastReviewed` 2026-11-07; dòng "Rà soát kỹ thuật" trên trang khớp.
- JSON-LD parse OK; FAQ hiển thị và FAQ schema cùng nội dung.

## 3. Ký duyệt

| Vai trò | Người | Ngày | Kết quả |
|---|---|---|---|
| Kỹ thuật (mẫu đèn) | Nguyễn Quang Đạo | 07/11/2026 | Đã xác nhận 17 mẫu |
| Chủ quản (U1–U3) | Chủ quản | 07/11/2026 | Chủ quản đã test máy thật và ký 07/11/2026 |
| Media (ảnh) | — | — | Chờ ảnh thật |
| IT (production) | — | — | Chờ |
| 07/11/2026 | Chủ quản test máy thật U1–U3 và ký — ĐÃ DUYỆT U1–U3; còn ảnh AI phải thay trước production |

## Nhật ký

| Ngày | Nội dung |
|---|---|
| 10/11/2026 | Chấm lại theo thang VF5 (không trừ production/CRM): 95,6/100 — ĐẠT ngưỡng V1.9 (xem 03) |
| 10/11/2026 | Thay 5 ảnh thực tế Herio Green; tự chấm 96,0/100 — ĐẠT |
| 09/11/2026 | Vá audit V2.2 R1 (reviewer 08/11, 78/95): F10 New ghi thống nhất "bản 12–16V" ở thẻ, gợi ý, so sánh động, popup/form; công suất 45W Cos/55W Pha; ghi chú bản 24V 4.500.000đ; thêm đèn zin Halogen Projector có nguồn VinFast; sửa lời dẫn form gọi lại; nút Báo giá từng dòng bảng so sánh; dateModified 2026-11-09 |
