# 06 — Phiếu nghiệm thu U3 hub Bi gầm Land Rover

Kiểm 24/11/2026 trên https://preview-365group.pages.dev/bi-gam/land-rover/ (Chrome, khung 390px; tràn ngang kiểm thêm 375/1366px). SHA-256 HTML: `59100763043532d53abc792ad8d49c2d377dfebe1b04cd354fe891bc4d3fe237`. Không gửi lead thật: fetch được giả lập trong trình duyệt.

| Mục | Kết quả | Đạt |
|---|---|---|
| U1 · Không tràn ngang | 375px và 1366px: chiều rộng trang khớp màn hình | ✓ |
| U1 · Ảnh | Ảnh đầu trang + ảnh case tải được, 0 ảnh lỗi; ảnh thẻ dòng xe chưa có (hiện tên xe) | ✓ (chờ ảnh) |
| S2 · Cấu trúc | 1 H1, 0 ID trùng | ✓ |
| U2 · Tìm dòng xe | Từ khoá không có → hiện trạng thái rỗng; "Xoá tìm kiếm" trả đủ 11 dòng | ✓ |
| U2 · Tab nhóm xe | Discovery/Defender/Freelander (7) → 7 | ✓ |
| U2 · Lọc case | LR2 S → 1 | ✓ |
| U2 · Thẻ dòng xe → form | Bấm thẻ "Tư vấn cấu hình" điền sẵn "Land Rover Freelander" | ✓ |
| U2 · Tìm chi nhánh | Gõ "Đồng Nai" → mở danh sách (aria-expanded=true); ArrowDown đặt aria-activedescendant; Escape đóng | ✓ |
| U2 · Chặn số sai | "12345" → 0 request, báo "Số điện thoại chưa đúng, ví dụ 0365 365 365." | ✓ |
| U2 · Lỗi server | 500/503 → "Chưa gửi được. Vui lòng gọi 0365 365 911 hoặc thử lại.", không báo thành công giả | ✓ |
| U2 · Thành công | 200 + {"success":true,"lead_id"} → "Đã nhận yêu cầu. Auto365 sẽ gọi lại…" | ✓ |

Ghi chú: server trả {"success":false} (không kèm lỗi) thì form dùng chung báo "Số … có vẻ chưa đúng" — hành vi chung của form lead, không riêng trang này.

## Còn mở (chỉ nghiệm thu được trên URL chính thức)
Lead → CRM, sự kiện generate_lead, GET/header production, điện thoại thật (chủ quản).

Build 24/11/2026 sau duyệt (chỉ thêm dòng rà soát kỹ thuật + lastReviewed, không đổi chức năng): SHA-256 `4675685dd0c88450301af249edf16d8b9cd8c36e75d061162d11ede6bdd88382`.
