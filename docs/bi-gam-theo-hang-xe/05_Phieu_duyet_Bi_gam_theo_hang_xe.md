# 05 — Phiếu duyệt: Bi gầm theo hãng xe

| Trường | Giá trị |
|---|---|
| Trang | `auto365/bi-gam/theo-hang-xe` → canonical `https://auto365.vn/nang-cap-anh-sang-bi-gam/theo-hang-xe` |
| Bản duyệt | SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_theo_hang_xe.md) |
| Người duyệt kỹ thuật | Nguyễn Quang Đạo — Kiểm duyệt kỹ thuật đèn ô tô |
| Ngày duyệt | 19/10/2026 |
| Căn cứ ghi nhận | Chủ quản xác nhận trong phiên làm việc 19/10/2026: anh Đạo đã duyệt trang, câu lý do hốc đèn/12V trong "Gợi ý ánh sáng" và phiếu duyệt này |

## Phạm vi đã duyệt (19/10/2026)

| Mục | Kết quả |
|---|---|
| Sapo, dòng cập nhật, byline | Duyệt |
| Giới thiệu 20 hãng + nguồn website chính thức | Duyệt |
| "Gợi ý ánh sáng" gồm lý do theo kiểu xe (hốc 3.0/2.0 inch, pát/mặt dưỡng) và điện 12V | Duyệt |
| 6 thẻ "Vì sao chọn", quy trình 7 bước, FAQ 5 câu | Duyệt |
| Form tư vấn (nr-lead → `/api/leads`) | Lead test 205 ngày 19/10/2026 → `{"success":true}`; CRM xác nhận đã nhận |

## Thêm sau lượt duyệt — chờ duyệt bổ sung

| Mục | Nội dung |
|---|---|
| Dòng đầu popup đề xuất đèn theo dòng xe | Câu theo phân khúc của dòng xe (bán tải / SUV, MPV / sedan / xe hạng A–B), ví dụ Ranger: "hốc đèn gầm thường đủ chỗ cho bi 3.0 inch; cản trước to, cần pát chắc để đèn không rung khi đi đường xấu" |

## Việc khác

- Xoá lead test 205 khỏi CRM: CRM đã xác nhận nhận lead, chưa ghi nhận việc xoá.

## Sửa ngày 20/10/2026 theo tái kiểm reviewer — chờ duyệt bổ sung

Các câu "lý do theo kiểu xe/phân khúc" và "xe du lịch dùng điện 12V" (đã duyệt 19/10) bị **bỏ** theo yêu cầu F05-R2 của reviewer. Câu mới cần duyệt: sapo (phân biệt "Đã lắp thực tế" / "chưa có hồ sơ"), "Gợi ý ánh sáng" (thống kê bài thư viện), câu đầu popup cho xe chưa có hồ sơ và xe có hồ sơ, FAQ "Khi nào chưa cần nâng cấp bi gầm?".
Bổ sung đợt 2 (20/10/2026) cần duyệt: popup xe chưa có hồ sơ (4 mục cần kiểm, không đề xuất mẫu), giới thiệu Jeep, nhãn Cẩm nang theo loại bài.
Đợt 3 (20/10/2026, theo yêu cầu chủ quản): popup xe chưa có hồ sơ hiện lại tối đa 3 mẫu tham khảo đã lắp trên xe cùng hãng (hãng chưa có bài: 3 mẫu lắp nhiều nhất thư viện), giữ câu "chưa có hồ sơ" + các mục cần kiểm ở đầu popup — cần duyệt.
Đợt 4 (21/10/2026, theo R3): câu mở đầu popup theo nguồn thực tế (cùng hãng / trộn / hãng khác / không có nguồn); F10 New không ghi năm chỉ tính là 2025 khi bài link sản phẩm 2025; ô Dòng xe trong form; lightTip cho hãng có bài nhưng chưa rõ phiên bản — cần duyệt.

## Lượt duyệt 21/10/2026

Chủ quản xác nhận 21/10/2026: anh Nguyễn Quang Đạo đã duyệt toàn bộ phần sửa 20–21/10 (sapo 2 câu, "Gợi ý ánh sáng" dạng thống kê thư viện, popup xe có/chưa có hồ sơ với câu mở đầu theo nguồn, bảng phiên bản F10 New theo link sản phẩm, FAQ "Khi nào chưa cần nâng cấp", giới thiệu Jeep, nhãn Cẩm nang, ô Dòng xe trong form). `lastReviewed` = 2026-10-21.
Đợt 5 (21/10/2026, chủ quản chọn): khôi phục sapo bản 19/10 (đã duyệt lượt 19/10).
Đợt 6 (21/10/2026): mô tả case hiển thị bỏ từ quảng cáo (bài gốc giữ nguyên); Limo Green tính F10 New 2025 theo mô tả bài gốc; khối Kiểm tra nội bộ (chỉ preview).
Đợt 7 (21/10/2026, chủ quản chọn): sapo đổi "giải pháp tra cứu cấu hình đèn tương thích…" thành "trang tra cứu mẫu đèn đã lắp thực tế trên từng dòng xe" (theo góp ý F05 R2); tạm bỏ link VF7 (production 404) — cần duyệt.

## Trạng thái hiện hành (22/10/2026)

Đã duyệt kỹ thuật tới đợt 6 (lượt 21/10/2026). **Đợt 7 (sapo "trang tra cứu mẫu đèn đã lắp thực tế…", tạm bỏ link VF7) chưa có xác nhận duyệt.** Bản vá 22/10 (F08-R4 Schema, F04-R4 export) chỉ sửa script/dữ liệu xuất, không đổi nội dung hiển thị.

## Lượt duyệt 22/10/2026

Chủ quản xác nhận 22/10/2026: anh Nguyễn Quang Đạo đã duyệt đợt 7 (sapo "trang tra cứu mẫu đèn đã lắp thực tế trên từng dòng xe", tạm bỏ link VF7). `lastReviewed` = 2026-10-22. Không còn mục nội dung chờ duyệt.

QA 22/10/2026: lead test POST https://auto365.vn/api/leads kèm car_model="Lexus RX", service="Bi gầm theo hãng xe - Lexus RX" → {"success":true, lead_id 223, test:true}. Chờ CRM xác nhận thấy dòng xe trong lead 223 rồi xoá lead 223 (và 205).
CRM xác nhận 22/10/2026 (chủ quản): đã nhận lead 223. Còn: xác nhận lead có hiện dòng xe "Lexus RX"; xoá lead test 223 và 205.
