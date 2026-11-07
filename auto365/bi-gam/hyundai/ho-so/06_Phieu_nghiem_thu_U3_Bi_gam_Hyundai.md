# 06 — Phiếu nghiệm thu U3: Hub Bi gầm Hyundai

| Trường | Giá trị |
|---|---|
| Trang | https://preview-365group.pages.dev/bi-gam/hyundai/ |
| Bản nghiệm thu | SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_Hyundai.md) |
| Ngày | 07/11/2026 |
| Người lập | Team Content Auto365 (tự nghiệm thu) |
| Reviewer ký | **Chờ ký** |

## U1 — Đa thiết bị

| Hạng mục | 375 px (giả lập) | 1366 px | Kết quả |
|---|---|---|---|
| Không tràn ngang | scrollWidth = viewport | OK | Đạt |
| Ảnh hero, thẻ dòng xe, case, "Vì sao chọn" tải đủ | OK | OK | Đạt |
| Tab nhóm xe | Lọc đúng số thẻ | OK | Đạt |
| Ô tìm dòng xe | Không khớp → hiện thông báo trống | OK | Đạt |
| Lọc case theo dòng xe / hãng đèn, nút Bỏ lọc | Lọc đúng, Bỏ lọc trả đủ 8 case | OK | Đạt |
| Bấm thẻ "Tư vấn cấu hình" → điền sẵn xe vào form | OK | OK | Đạt |
| Nút gọi 0365 365 911 | Có `tel:` | OK | Đạt |
| Điện thoại thật | — | — | Đạt — chủ quản test 07/11/2026 |

## U2 — Lead / CRM

| Hạng mục | Kết quả |
|---|---|
| Lead test | #32 — service "Bi gầm Hyundai", source_page "Bi gầm Hyundai (preview test)", car_model "Hyundai Creta 2022", tên "TEST Claude - Bi gam Hyundai (xoa)", SĐT test |
| Phản hồi API | HTTP 200, `{"success":true,"lead_id":"32","test":true}`; form báo "Đã nhận yêu cầu…" |
| Cách gửi | Form nr-lead chuẩn trên trang production auto365.vn (preview pages.dev không có /api/leads), đặt data-service/source theo trang Hyundai |
| Ghi chú | Form production gửi priority "Bi gầm ô tô"; bản preview hiển thị "Đèn – Bi gầm, Bi LED" (giá trị "Đèn – Bi LED") — IT thống nhất khi đăng. **Lead #32 cần xoá khỏi CRM.** |

## U3 — Bàn giao

| Hạng mục | Kết quả |
|---|---|
| Hồ sơ 01–06 cùng một build (SHA ở 01) | Đạt |
| Bản HTML đọc trực tiếp trên preview (`ho-so/`) | Đạt |
| Nội dung đã duyệt (anh Đạo 07/11) | Đạt |
| Reviewer ký phiếu | Chờ |
