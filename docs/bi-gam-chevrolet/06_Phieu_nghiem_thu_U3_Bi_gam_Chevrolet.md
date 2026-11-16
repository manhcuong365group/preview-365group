# 06 — Phiếu nghiệm thu U3 hub Bi gầm Chevrolet

Kiểm trên preview (bản local cùng build), 16/11/2026. Không gửi lead thật: lệnh gửi form bị chặn trong trình duyệt để đọc nội dung gửi đi.

| Mục | Kết quả | Đạt |
|---|---|---|
| U1 · Không tràn ngang | 1366 / 1024 / 768 / 390 / 375px: chiều rộng trang khớp màn hình | ✓ |
| U1 · Ảnh | 11 thẻ dòng xe, 5 thẻ case, ảnh đầu trang: không ảnh lỗi | ✓ |
| U1 · Console | Không lỗi | ✓ |
| U1 · Bộ lọc | Tìm "LACÉTTI" (có dấu, viết hoa) ra Lacetti; tìm sai hiện thông báo trống; tab Bán tải ra Colorado; lọc hãng đèn GTR ra Trailblazer + Orlando; "Bỏ lọc" trả đủ 5 case | ✓ |
| U2 · Thẻ "Tư vấn cấu hình" | Bấm thẻ Trax → cuộn tới form, ô Dòng xe = "Chevrolet Trax" | ✓ |
| U2 · Chặn số sai | Nhập "12345" → không gửi, báo "Số điện thoại chưa đúng, ví dụ 0365 365 365.", ô số đánh dấu lỗi | ✓ |
| U2 · Nội dung gửi | POST `/api/leads`: phone, fullname, car_model, priority, province, form-honey, service = "Bi gầm Chevrolet", source_page = "Bi gầm Chevrolet", source_url, referrer | ✓ |
| U2 · Lỗi server | Server trả lỗi → báo "Chưa gửi được. Vui lòng gọi 0365 365 911 hoặc thử lại.", không báo thành công giả | ✓ |
| U2 · Hotline | `tel:0365365911` | ✓ |
| U3 · Link | 20 link sang auto365.vn (5 bài case, 8 bài cẩm nang, chi nhánh, bảo hành, tác giả, hub bi gầm) đều trả 200; anchor nội trang đủ đích | ✓ |
| U3 · Schema | CollectionPage, BreadcrumbList, Organization, ItemList ×2, FAQPage — đọc được, không lỗi | ✓ |
| U3 · SEO preview | robots noindex/nofollow (preview), canonical `https://auto365.vn/nang-cap-anh-sang-bi-gam/chevrolet` | ✓ |
| U3 · Bàn giao | Hồ sơ 01–06 cùng một lần xuất; 11 dòng xe, 5 hồ sơ | ✓ |

## Còn mở (chỉ nghiệm thu được trên URL chính thức)
- Preview không có `/api/leads` (trả 405), giống các hub hãng xe khác — gửi lead thật vào CRM (`priority`) và sự kiện `generate_lead` một lần/lượt gửi chỉ kiểm được khi IT đăng trang lên auto365.vn.
- Chủ quản test trên điện thoại thật.
