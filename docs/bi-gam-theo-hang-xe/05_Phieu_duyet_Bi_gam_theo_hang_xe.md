# 05 — Phiếu duyệt: Bi gầm theo hãng xe

| Trường | Giá trị |
|---|---|
| Trang | `auto365/bi-gam/theo-hang-xe` → canonical `https://auto365.vn/nang-cap-anh-sang-bi-gam/theo-hang-xe` |
| Bản duyệt | SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_theo_hang_xe.md) |
| Người duyệt kỹ thuật | Nguyễn Quang Đạo — Kiểm duyệt kỹ thuật đèn ô tô |
| Các lượt duyệt | 19/10 · 21/10 · 22/10 · 23/10 · 24/10/2026 |
| `lastReviewed` hiện hành | 2026-10-24 |
| Căn cứ ghi nhận | Chủ quản xác nhận từng lượt trong phiên làm việc cùng ngày |

## Trạng thái hiện hành (24/10/2026)

**Đã duyệt toàn bộ đợt 1–13. Không còn mục nội dung chờ duyệt.**

Kết quả tái kiểm gần nhất: R6 (23/10/2026) 94,6/100, chưa đạt — các lỗi R6 đã vá ở đợt 12–13, chờ reviewer chấm lại (chi tiết ở [03](03_Phieu_danh_gia_Bi_gam_theo_hang_xe_V1.8.md)).

## Các đợt sửa và lượt duyệt

| Đợt | Ngày | Nội dung | Duyệt |
|---|---|---|---|
| — | 19/10 | Bản đầu: sapo, byline, giới thiệu 20 hãng + nguồn website chính thức, Gợi ý ánh sáng, 6 thẻ Vì sao chọn, quy trình 7 bước, FAQ, form tư vấn | 19/10 |
| 1 | 20/10 | Theo R2 (F05): bỏ câu suy hốc đèn theo phân khúc và câu "xe du lịch dùng điện 12V" (đã duyệt 19/10); sapo phân biệt "Đã lắp thực tế" / "chưa có hồ sơ"; Gợi ý ánh sáng dạng thống kê thư viện; câu đầu popup; FAQ "Khi nào chưa cần nâng cấp bi gầm?" | 21/10 |
| 2 | 20/10 | Popup xe chưa có hồ sơ (4 mục cần kiểm); giới thiệu Jeep; nhãn Cẩm nang theo loại bài | 21/10 |
| 3 | 20/10 | Popup xe chưa có hồ sơ hiện lại tối đa 3 mẫu tham khảo (theo chủ quản), giữ câu "chưa có hồ sơ" và các mục cần kiểm | 21/10 |
| 4 | 21/10 | Theo R3: câu mở đầu popup theo nguồn thực tế; F10 New không ghi năm chỉ tính 2025 khi bài link sản phẩm 2025; ô Dòng xe trong form; Gợi ý ánh sáng cho hãng có bài nhưng chưa rõ phiên bản | 21/10 |
| 5 | 21/10 | Khôi phục sapo bản 19/10 (theo chủ quản) | 19/10 (bản cũ) |
| 6 | 21/10 | Mô tả case hiển thị bỏ từ quảng cáo (bài gốc giữ nguyên); Limo Green tính F10 New 2025; khối Kiểm tra nội bộ (chỉ preview) | 21/10 |
| 7 | 21/10 | Sapo "trang tra cứu mẫu đèn đã lắp thực tế trên từng dòng xe"; tạm bỏ link VF7 (khi đó production 404) | 22/10 |
| 8 | 22/10 | VF7 production đã đăng → thêm lại link VF7; link VF3/VF6/VF7 dùng URL production | Chỉ đổi link |
| 9 | 23/10 | Hãng có trang bi gầm riêng (VinFast): 1 câu giới thiệu + nút "Xem trang bi gầm VinFast: giá, mẫu lắp, case →" | 23/10 |
| 10 | 23/10 | Dải logo "Thương hiệu đèn tại Auto365" (8 hãng); bộ lọc "Hãng đèn" (X-Light, GTR, Titan, AES) ở Xe thực tế | 24/10 |
| 11 | 23/10 | Đồng bộ auto365.vn: thêm 3 case (Xpander Cross 2025, Sportage 2022, Santa Fe 2020) và 15 bài tư vấn dòng xe vào Cẩm nang | 24/10 |
| 12 | 24/10 | Theo R6: bộ lọc Titan khớp nguyên từ (không nhận "Titanium"); đổi hãng/dòng xe tự bỏ hãng đèn không còn bài; tách thông báo "không khớp bộ lọc" và "chưa có bài"; thẻ Mazda6 dẫn bài dòng xe `bi-gam-mazda-6` | 24/10 |
| 13 | 24/10 | Góp ý nhỏ R6: giới thiệu 20 hãng rút gọn còn dải xe + phân khúc; hãng đèn 100 case đối chiếu link sản phẩm bài gốc (69/69 khớp, Outlander camera → Titan); phiên bản Xpander Cross 2025 = F10 Hyper 2.0, Santa Fe 2020 = F10 2.0 New, Raptor = F10 New (đời trước) | 24/10 |

Bản vá R4 (22/10: URL Schema case, export SKU) chỉ sửa script và dữ liệu xuất, không đổi nội dung hiển thị.

## QA form và CRM

| Ngày | Kiểm | Kết quả |
|---|---|---|
| 19/10 | Lead test 205 qua `/api/leads` | `{"success":true}`; CRM xác nhận đã nhận |
| 22/10 | Lead test 223 kèm `car_model="Lexus RX"`, service "Bi gầm theo hãng xe - Lexus RX" | `{"success":true, lead_id 223}`; CRM xác nhận nhận lead và hiện dòng xe "Lexus RX" |

## Việc còn lại (ngoài nội dung trang)

- Xoá lead test 205 và 223 khỏi CRM.
- Đăng HUB lên production (canonical hiện 404); xoá hẳn khối Kiểm tra nội bộ, bỏ noindex, đổi đường dẫn ảnh/og:image theo hướng dẫn ở [02](02_Huong_dan_CMS_SEO_Bi_gam_theo_hang_xe_V1.8.md) mục 9–10.
- QA bản production trên thiết bị thật.
