# 03 — Phiếu đánh giá V1.8: 3M NR5

- Trang: https://preview-365group.pages.dev/ma-phim/nr5 (bản 06/10/2026, preview, noindex đúng chủ đích)
- Người chấm: Claude, tự đánh giá để chuẩn bị bàn giao. CHƯA thay cho xác nhận của reviewer chuyên môn và thương mại.
- Tiêu chuẩn: Auto365 SEO/GEO/HTML V1.8. Chấm thận trọng: thiếu bằng chứng thì trừ điểm, không chấm giả.

## Điểm (12 tiêu chí)

| Mã | Tối đa | Điểm | Căn cứ / phần thiếu |
|---|---:|---:|---|
| C1 | 10 | 9,5 | Số theo catalog NR (catalog có link PDF preview; URL production chờ CMS, nên chưa nâng); giá có VAT |
| C2 | 10 | 9 | Đủ thông số, so sánh NR5/NR15, giá, 6 case, quy trình 8 bước có đầu ra; thiếu ảnh đo riêng |
| C3 | 10 | 9,5 | FAQ riêng tư giọng trung tính, có điều kiện |
| S1 | 10 | 9,5 | Intent rõ |
| S2 | 10 | 9,5 | Một H1, title 60 ký tự |
| S3 | 10 | 9,5 | Schema đúng @id; chưa kiểm live |
| G1 | 10 | 9,5 | Câu trích đúng chủ thể |
| G2 | 10 | 9,5 | Có đánh đổi NR5 vs NR15/NR25 |
| G3 | 5 | 4 | Catalog NR đã có link PDF; ảnh trên trang chủ trang đã duyệt; còn thiếu số đo riêng NR5 và chỉ 1 case ghi NR5 (các case khác là NR15 cùng dòng) |
| U1 | 5 | 5 | Không tràn ngang 375/1280 |
| U2 | 5 | 4,5 | Popup/form đạt kiểm thử tự động |
| U3 | 5 | 5 | Bảng đối chiếu khớp |

**Tổng hợp:** C = 28/30 · S = 28,5/30 · G = 23/25 · U = 14,5/15 → **94,0/100**. Ngưỡng: tổng ≥ 95, S ≥ 28,5, G ≥ 23,75.

## Kết luận nội dung

**CHƯA ĐỦ BẰNG CHỨNG: chưa đạt ngưỡng tổng 94,0 < 95, GEO 23 < 23,75 (G3 = 4: chỉ 1 case NR5, chưa có số đo riêng NR5).**

Không có lỗi chặn nội dung trong phạm vi preview. Phần thiếu còn lại: URL production của catalog (CMS), biên bản đo gốc dạng file, kiểm live — các mục CX trong file 02. Khi bổ sung được, chấm lại G3/C1/S3.
Điểm là nhận định biên tập, không phải điểm Google hay xác suất AI đề xuất.

## N1–N5

| Mã | Kết quả |
|---|---|
| N1 dữ kiện có nguồn | Đáp ứng một phần: VLT 7, TSER 69, IRER 68, giảm chói 93 (kính xanh 6 mm nền 73%; Catalog 3M Ceramic NR VN 03/2026); catalog NR có link PDF preview, URL production chờ CMS (mục CX) |
| N2 trả lời hỗ trợ quyết định | Đáp ứng (so sánh mã, FAQ 7 câu, popup chọn mã có ghi chú quan sát có điều kiện) |
| N3 bằng chứng năng lực | Một phần: case trong trang; ảnh máy đo/chứng nhận đã được chủ trang duyệt 06/10/2026 (xác nhận của chủ trang, không phải kiểm định độc lập); biên bản đo gốc dạng file chưa có |
| N4 thực thể | Đáp ứng: publisher Organization, provider AutoRepair "Auto365.vn - Trụ Sở Chính", brand 3M, Product/Service |
| N5 vai trò trang và liên kết | Đáp ứng trên preview; production còn lệch (xem file 02 mục 2 và 4) |

## Blockers

Không phát hiện blocker nội dung trong preview. Production hiện index, follow, canonical đúng; nội dung live cũ mâu thuẫn bản mới ở các điểm nêu trong file 02 (xử lý khi ghép CMS).

## Live L1–L8 (06/10/2026)

| Mã | Trạng thái | Ghi chú |
|---|---|---|
| L1 | CX | Production chưa thay bằng bản mới |
| L2 | Pass (production hiện tại) | 200, canonical tự trỏ, không noindex; WAF/robots.txt: CX |
| L3 | CX | Cần Search Console |
| L4 | Pass (preview) | JSON-LD đọc được, 7/7 FAQ khớp HTML (puppeteer); validator ngoài: CX |
| L5 | CX | Giả lập 375/1280 không tràn ngang; chưa thiết bị thật |
| L6 | CX | Chưa đo PageSpeed |
| L7 | CX | Form/CRM chưa kiểm bằng lead thử; popup/form đạt kiểm thử tự động với fetch giả lập |
| L8 | Pass (preview) | Nội dung, bảng, FAQ có trong HTML |

Kết luận Live: CÁC MỤC ĐÃ KIỂM TRA ĐẠT; CÒN CX Ở L1, L3, L5, L6, L7 — chưa nghiệm thu đầy đủ.

## Bảng đối chiếu phiên bản (U3)

Phiên bản bàn giao: HTML `auto365/ma-phim/nr5.html`, SHA-256 `eb1281af414f1abde43a4579c3c1dce45c0d432c2b0635e8e3dd73bfef9012d9` (kiểm 06/10/2026).

Cập nhật 06/10/2026: thêm link PDF catalog NR (HTML đã đổi, mã băm mới). 

| Dữ kiện | 01 — Bản đăng (HTML) | 02 — Hướng dẫn CMS/SEO | 03 — Phiếu này | Khớp |
|---|---|---|---|---|
| Title | 3M NR5 kính sườn sau, cửa sổ trời: thông số và giá | Auto365 (60 ký tự) | cùng | cùng | Có |
| URL / canonical | https://auto365.vn/phim-cach-nhiet-3m-nr-5 | https://auto365.vn/phim-cach-nhiet-3m-nr-5 | cùng | Có |
| dateModified | 2026-10-06 (không có datePublished) | cùng | cùng | Có |
| Số FAQ | 7 (HTML = JSON-LD) | 7 | 7 | Có |
| Giá | Giá NR5 cho cặp kính sườn sau từ 1.700.000đ; cửa sổ trời nhỏ từ 850.000đ; đã gồm VAT. Service tách 2 Offer; minPrice trong schema: [1700000,850000] | cùng | cùng | Có |
| Thông số | 7%VLT · truyền sáng | 69%TSER · tổng năng lượng | 68%IRER · dải rộng | 93%Giảm chói | VLT 7, TSER 69, IRER 68, giảm chói 93 (kính xanh 6 mm nền 73%; Catalog 3M Ceramic NR VN 03/2026) | cùng | Có |
| Ghi chú nội bộ trong bản đăng | Không có (quét TODO, CX, SSOT, "nội bộ", "mã hồ sơ", lorem) | — | — | Có |

Điểm U3 chỉ áp dụng cho phiên bản này. Khi HTML thay đổi, cập nhật mã băm, ngày và bảng này trong cùng lần sửa.
