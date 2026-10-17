# Bi gầm VinFast VF3 — Phiếu duyệt V1.8

| Trường | Giá trị |
|---|---|
| Bản duyệt | `auto365/bi-gam/vinfast-vf3/index.html` — SHA-256 ghi ở cuối phiếu, đối chiếu với bản trên preview |
| Preview | https://preview-365group.pages.dev/bi-gam/vinfast-vf3/ |
| URL production dự kiến | https://v2.auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf3 (SEO/CMS điền domain production khi đăng) |
| Ngày duyệt | 17/10/2026 (Asia/Saigon) |
| Cách ghi nhận | Xác nhận "anh Đạo duyệt" do người phụ trách nội dung chuyển lại ngày 10/10/2026. Phiếu ghi đúng người và phạm vi được xác nhận, không thay chữ ký gốc nếu quy trình nội bộ yêu cầu |

Đi kèm: 01 = `index.html` (bản trang) · [02 Hướng dẫn CMS/SEO](02_Huong_dan_CMS_SEO_Bi_Gam_VinFast_VF3_V1.8.md) · [03 Phiếu đánh giá V1.8](03_Phieu_danh_gia_Bi_Gam_VinFast_VF3_V1.8.md)

## 1. Kiểm duyệt kỹ thuật — Nguyễn Quang Đạo

Kết quả: **Đã duyệt ngày 10/10/2026.** Trang ghi "Rà soát kỹ thuật: Nguyễn Quang Đạo · Cập nhật 10/10/2026"; schema `reviewedBy` → `https://auto365.vn/tac-gia/nguyen-quang-dao#person`, `lastReviewed` 2026-10-10.

| Phần đã duyệt | Nội dung |
|---|---|
| Thông số | Bảng "So sánh nhanh 9 mẫu bi gầm cho VF3": lens, công suất Cos/Pha mỗi đèn, nhiệt màu, bảo hành — theo trang sản phẩm auto365.vn, đọc 10/10/2026 (quy tắc: PDP là nguồn được chấp nhận) |
| Mức xác minh trên VF3 | GTR G1 Turbo V2 = có video thi công VF3; 8 mẫu còn lại = kỹ thuật xác nhận lắp được trên VF3 (10/10/2026); vẫn kiểm tra pát/điện trên xe trước khi chốt |
| Tư vấn | Trả lời nhanh, khối "Khi nào cần kiểm tra xe", 11 FAQ (FAQPage khớp nội dung), câu đăng kiểm không kết luận pháp lý |
| Bảo hành | Thiết bị theo chính sách từng mã; chất lượng thi công: Auto365 tiếp nhận, kiểm tra nguyên nhân, xử lý theo chính sách dịch vụ/phiếu bàn giao; chi phí ngoài bảo hành thông báo và thống nhất trước (theo chỉ đạo sếp 12/10/2026) |

## 2. Dữ kiện thương mại và hồ sơ

| Dữ kiện | Giá trị | Trạng thái |
|---|---|---|
| Giá thiết bị | 4.500.000–6.000.000đ/bộ đèn, chưa VAT, chưa gồm pát/công/căn chỉnh | Khớp `stg_products` 06/10/2026 — **đã xác nhận 10/10/2026** (người phụ trách nội dung chuyển lại) |
| Hotline | 0365 365 911 | Đã chốt 29/09/2026 |
| Hệ thống | 90+ chi nhánh · 33 tỉnh thành | Số đã dùng ở các trang đã duyệt |
| Video VF3 | 2 video GTR G1 Turbo V2 trên VF3 tại Auto365 | Nguồn đối chiếu trong `data/vf3.json` (06/10/2026) |
| Ảnh thật | VF3 bật đèn trước Auto365 (biển số che); cụm đèn chính RGB ghi rõ hạng mục riêng | Nhận 10/10/2026 — **xe trong ảnh lắp GTR G1 Turbo V2**, xác nhận 10/10/2026; alt + chú thích đã ghi tên mẫu |
| F10 Turbo V2 trên VF3 | Kỹ thuật đã xác nhận tương thích VF3 (khớp `vf3.json`); bảng so sánh ghi "Kỹ thuật xác nhận", FAQ + FAQPage cập nhật | **Đã xác nhận 10/10/2026** |
| 7 mẫu còn lại trên VF3 | X-Light 301 V2, F10 2.0 New, F10 Pro V2, X3 Ultra, AES SV 3.0 Pro, SV 3.0 Max, SV 2.0 Max: kỹ thuật xác nhận lắp được; bảng so sánh đổi "Kiểm tra xe" → "Kỹ thuật xác nhận", FAQ + FAQPage cập nhật | **Đã xác nhận 10/10/2026** |
| Lead → CRM | Test 10/10/2026 trên trang VF3 v2: form tư vấn → `/api/leads` 200 `{"success":true,"lead_id":"30","test":true}`; popup báo giá (GTR G1 Turbo V2) → 200, gộp vào lead #30 (trùng số trong 5 phút). Preview `pages.dev` trả 405 và form báo lỗi đúng (không báo thành công giả) | **Đạt** — CRM đã nhận lead test; lead #30 đã xoá (xác nhận 10/10/2026) |

## 2b. Sửa sau ngày duyệt — Nguyễn Quang Đạo đã xác nhận 10/10/2026

| Ngày | Nội dung | Trạng thái |
|---|---|---|
| 10/10/2026 | Thêm ảnh thật VF3; 2 thẻ Giá / Khi nào cần kiểm tra xe có ảnh, so le đối xứng | Đã xác nhận |
| 10/10/2026 | Hero: bỏ eyebrow và dòng tác giả, H1 nhỏ lại, trả lời nhanh rút gọn (không nhãn), 4 tab nhu cầu lọc lưới sản phẩm theo `nhu_cau` trong `vf3.json` (có ghi chú "gợi ý, kỹ thuật viên xác nhận") | Đã xác nhận |
| 10/10/2026 | Bỏ khung tìm kiếm + popup lọc; sửa form báo giá (thiếu `nr-quote-status`) | Đã xác nhận |
| 10/10/2026 | Lưới sản phẩm 2 hàng, "Xem thêm" sang hub; bảng so sánh thu gọn (accordion) | Đã xác nhận |
| 10/10/2026 | Khối chi nhánh làm lại giao diện, sửa link Google Maps (trước trỏ `#`); bỏ câu "Khả năng tiếp nhận… theo từng cơ sở" | Đã xác nhận |
| 10/10/2026 | Ghi tên mẫu GTR G1 Turbo V2 vào alt/chú thích ảnh thật; F10 Turbo V2 → "Kỹ thuật xác nhận" (bảng so sánh, ghi chú lưới, FAQ "GTR hay X-Light" + FAQPage) | Đã xác nhận (dữ kiện do người phụ trách nội dung chuyển lại) |
| 12/10/2026 | Link "Xem trang video" trong modal trỏ về v2.auto365.vn (trước trỏ nhầm domain preview); câu fitment 9 mẫu ghi rõ "theo hồ sơ kỹ thuật nội bộ (rà soát: Nguyễn Quang Đạo, 10/10/2026)" | Sửa kỹ thuật, không đổi dữ kiện |
| 12/10/2026 | "Hậu mãi sau lắp đặt": thay câu bảo hành theo nội dung phiếu nghiệm thu 10/10, phân biệt bảo hành thiết bị và trách nhiệm thi công | Đã duyệt (chỉ đạo sếp) |
| 12/10/2026 | Bỏ đoạn "Mức độ xác minh trên VinFast VF3…" dưới H2 sản phẩm (mức xác minh vẫn ghi ở bảng so sánh, FAQ) | Theo yêu cầu chủ quản |
| 12/10/2026 | Viết lại 6 thẻ "Lý do chọn" ngắn đều, hướng lợi ích (dữ kiện đã chốt: video VF3, báo giá tách dòng, phiếu bàn giao, bảo hành điện tử, 90+ chi nhánh/33 tỉnh); ý hậu mãi giữ nguyên nghĩa câu sếp duyệt | Theo yêu cầu chủ quản |
| 12/10/2026 | 4 tab nhu cầu ở hero mở popup gợi ý mẫu (Báo giá / Xem chi tiết / Xem cả 9 mẫu), lưới sản phẩm không lọc nữa; sửa câu thẻ "Đã lắp thực tế trên VF3" | Theo yêu cầu chủ quản |
| 12/10/2026 | Bỏ khối "VF3 nâng cấp bi gầm có gì cần biết?" (4 thẻ trùng ý, ảnh minh họa xe khác VF3) | Theo yêu cầu chủ quản |
| 12/10/2026 | Thẻ "Khi nào cần kiểm tra xe": thay ảnh đèn pha RGB bằng ảnh thật cận cảnh bi gầm trong hốc cản VF3, bỏ chú thích "hạng mục riêng" | Theo yêu cầu chủ quản (ảnh do chủ quản gửi) |
| 12/10/2026 | Đổi chỗ 2 ảnh thật giữa thẻ Giá và thẻ Kiểm tra xe; bỏ 2 chú thích ảnh; bỏ dòng "Cấu hình chưa có hồ sơ tương thích xác nhận" (9 mẫu đã xác nhận) | Theo yêu cầu chủ quản |
| 12/10/2026 | Sắp lại 6 thẻ "Lý do chọn" theo hub; thẻ 5 đổi thành "Đại lý chính hãng X-Light, GTR, AES" (chủ quản xác nhận đại lý cả 3 hãng), ảnh chứng nhận X-Light | Theo yêu cầu chủ quản |
| 12/10/2026 | Thay ảnh 5 thẻ "Lý do chọn" bằng ảnh VF3 do chủ quản gửi (chi nhánh, tra cứu bảo hành, lắp đặt, phiếu bàn giao, bảng giá); alt ghi "Ảnh minh họa"; giữ ảnh chứng nhận đại lý | Theo yêu cầu chủ quản |
| 12/10/2026 | Viết lại câu trả lời nhanh ở hero (trả lời thẳng nhu cầu, nêu hãng X-Light/GTR/AES, giá từ 4,5 triệu/bộ chưa VAT) | Theo yêu cầu chủ quản |
| 12/10/2026 | Bảng so sánh: thêm "~" công suất X3 Ultra; cột "Trên VF3" thêm link "Xem case VF3" (GTR) và nút "Kiểm tra cấu hình" mở form báo giá đúng mẫu (8 mẫu còn lại) — theo phiếu nghiệm thu | Theo yêu cầu chủ quản |
| 13/10/2026 | Thêm bài case "VinFast VF3 2025 Plus lắp bi gầm GTR G1 Turbo V2" (auto365.vn) lên đầu khối case, đổi tiêu đề "Xe VinFast đã lắp bi gầm tại Auto365"; bỏ câu ghi chú case VinFast khác | Theo yêu cầu chủ quản |
| 14/10/2026 | Theo phiếu audit 13/10: thẻ "Đã lắp thực tế trên VF3" ghi rõ chỉ GTR G1 Turbo V2 có video; thêm ghi chú case VF3 2025 Plus có tháo cản trước, làm mới mặt dưỡng (đối chiếu bài case gốc) | Sửa nội dung |
| 14/10/2026 | Bảo hành AES SV 3.0 Max: "Xác nhận khi báo giá" → 24 tháng (chủ quản xác nhận) — áp dụng cả trang VF6, VF7 | Theo xác nhận chủ quản |
| 10/10/2026 | Thêm dải logo "Thương hiệu đèn tại Auto365"; FAQ dạng danh sách; bo góc 8px; giảm khoảng cách; tối ưu mobile | Đã xác nhận |

Ngoài dòng F10/GTR ở trên, không đổi nội dung kỹ thuật, giá, bảo hành hay FAQ — chỉ bố cục, ảnh và chức năng. Xác nhận "oke hết" do người phụ trách nội dung chuyển lại ngày 10/10/2026.

## 3. Việc còn lại (không thuộc điểm nội dung)

| Việc | Giai đoạn |
|---|---|
| Xoá khối `#vf3lp-internal-check` khi đăng | Trước khi đăng production (BLOCK_06) |
| Upload ảnh + OG image lên thư viện auto365.vn, đổi URL tuyệt đối | Khi đăng CMS |
| Chốt domain canonical; CMS điền `datePublished` = ngày đăng đầu tiên | Khi đăng production |
| Nghiệm thu Live L1–L8 trên bản CMS mới (form đã test trên v2 ngày 10/10) | Sau khi đăng |

## Đối chiếu bản trang

SHA-256 `index.html` (17/10/2026, bản hiện hành): `af4a34fc279c4b154f5aea69a4e592c1451a102ea5f8768ed084d6ed3f6636b6`

- 15/10/2026: thay bộ FAQ bằng 6 câu viết lại (chọn mẫu theo tiêu chí, tra cứu bảo hành theo biển số/serial + 4 số cuối điện thoại — chủ quản xác nhận); FAQPage khớp.
