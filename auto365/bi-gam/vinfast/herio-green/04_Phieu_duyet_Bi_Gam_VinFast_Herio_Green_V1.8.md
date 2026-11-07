# Phiếu duyệt — Bi gầm VinFast Herio Green

| Mục | Giá trị |
|---|---|
| Trang | https://preview-365group.pages.dev/bi-gam/vinfast/herio-green/ |
| URL production | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/herio-green (chưa phát hành) |
| SHA-256 index.html | `364a841f8fbd4a467474d3151d384a1fe9ca625ae77e31161014fa42d3aff9b4` |
| Ngày | 07/11/2026 |
| Trạng thái | **ĐÃ DUYỆT U1–U3 — chủ quản test máy thật và ký 07/11/2026 (lỗi mở trước production: ảnh minh họa AI)** (tự chấm 89,0/100; ảnh minh họa AI là lỗi mở trước production) |

## 1. Xác nhận nội dung

| Hạng mục | Người xác nhận | Ngày | Ghi chú |
|---|---|---|---|
| 17 mẫu bi gầm lắp được Herio Green (lens 3.0 và 2.0 inch) | anh Nguyễn Quang Đạo | 07/11/2026 | Xem XAC_NHAN_TUONG_THICH_HERIO_GREEN_20261107.md; kỹ thuật viên kiểm pát và điện trên từng xe |
| Giá, bảo hành, chính sách cơ sở | Kế thừa các trang VinFast đã duyệt | — | Không đổi số liệu |
| Ảnh | — | — | Bộ minh họa AI 07/11/2026, **chưa duyệt cho production** |

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
- Lỗi mở: ảnh là minh họa AI (HG-01).

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
| Chủ quản (U1–U3) | — | — | Chờ ký |
| Media (ảnh) | — | — | Chờ ảnh thật |
| IT (production) | — | — | Chờ |
| 07/11/2026 | Chủ quản test máy thật U1–U3 và ký — ĐÃ DUYỆT U1–U3; còn ảnh AI phải thay trước production |
