# 03 — Phiếu đánh giá V1.8: 3M NR25

- Trang: https://preview-365group.pages.dev/ma-phim/nr25 (bản 06/10/2026, preview, noindex đúng chủ đích)
- Người chấm: Claude, tự đánh giá để chuẩn bị bàn giao. CHƯA thay cho xác nhận của reviewer chuyên môn và thương mại.
- Tiêu chuẩn: Auto365 SEO/GEO/HTML V1.8. Chấm thận trọng: thiếu bằng chứng thì trừ điểm, không chấm giả.

## Điểm (12 tiêu chí)

| Mã | Tối đa | Điểm | Căn cứ / phần thiếu |
|---|---:|---:|---|
| C1 | 10 | 9,5 | Số theo catalog NR (không có URL công khai); giá có VAT |
| C2 | 10 | 9 | Đủ thông số, so sánh, giá 3 vị trí, 6 case; thiếu ảnh đo riêng |
| C3 | 10 | 9,5 | Đã chuyển các câu "dễ nhìn gương" sang điều kiện |
| S1 | 10 | 9,5 | Intent rõ |
| S2 | 10 | 9,5 | Một H1, title 54 ký tự |
| S3 | 10 | 9,5 | Schema đúng @id; chưa kiểm live |
| G1 | 10 | 9,5 | Câu trích đúng chủ thể, có chính sách kính lái rõ |
| G2 | 10 | 9,5 | Có đánh đổi NR25 vs NR15/NR5 |
| G3 | 5 | 3,5 | Catalog NR không có URL công khai; chưa có biên bản đo riêng |
| U1 | 5 | 5 | Không tràn ngang 375/1280 |
| U2 | 5 | 4,5 | Popup/form đạt kiểm thử tự động |
| U3 | 5 | 5 | Bảng đối chiếu khớp |

**Tổng hợp:** C = 28/30 · S = 28,5/30 · G = 22,5/25 · U = 14,5/15 → **93,5/100**. Ngưỡng: tổng ≥ 95, S ≥ 28,5, G ≥ 23,75.

## Kết luận nội dung

**CHƯA ĐỦ BẰNG CHỨNG: chưa đạt ngưỡng tổng 93,5 < 95, GEO 22,5 < 23,75.**

Không có lỗi chặn nội dung trong phạm vi preview. Phần thiếu chủ yếu là bằng chứng bên ngoài (nguồn không có URL công khai, biên bản đo, kiểm live) — các mục CX trong file 02. Khi bổ sung được, chấm lại G3/C1/S3.
Điểm là nhận định biên tập, không phải điểm Google hay xác suất AI đề xuất.

## N1–N5

| Mã | Kết quả |
|---|---|
| N1 dữ kiện có nguồn | Đáp ứng một phần: VLT 29, TSER 59, IRER 63, giảm chói 68 (kính xanh 6 mm nền 73%; Catalog 3M Ceramic NR VN 03/2026); nguồn không có URL công khai ghi rõ ở mục CX |
| N2 trả lời hỗ trợ quyết định | Đáp ứng (so sánh mã, FAQ 7 câu, popup chọn mã có ghi chú quan sát có điều kiện) |
| N3 bằng chứng năng lực | Một phần: case trong trang; biên bản đo gốc chưa có |
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

Phiên bản bàn giao: HTML `auto365/ma-phim/nr25.html`, SHA-256 `212a1c0924802cdb4f0d39a789512304e1325918e0e02aa90681d2e2f3162d37` (kiểm 06/10/2026).

| Dữ kiện | 01 — Bản đăng (HTML) | 02 — Hướng dẫn CMS/SEO | 03 — Phiếu này | Khớp |
|---|---|---|---|---|
| Title | 3M NR25 kính sườn, kính sau: thông số và giá | Auto365 (54 ký tự) | cùng | cùng | Có |
| URL / canonical | https://auto365.vn/phim-cach-nhiet-3m-nr-25 | https://auto365.vn/phim-cach-nhiet-3m-nr-25 | cùng | Có |
| dateModified | 2026-10-06 (không có datePublished) | cùng | cùng | Có |
| Số FAQ | 7 (HTML = JSON-LD) | 7 | 7 | Có |
| Giá | Từ 1.700.000đ / cặp kính sườn; kính lưng 1.900.000đ; cửa sổ trời nhỏ từ 850.000đ; đã gồm VAT. Service tách 3 Offer; minPrice trong schema: [1700000,1900000,850000] | cùng | cùng | Có |
| Thông số | 29%VLT · truyền sáng | 59%TSER · tổng năng lượng | 63%IRER · dải rộng | 68%Giảm chói | VLT 29, TSER 59, IRER 63, giảm chói 68 (kính xanh 6 mm nền 73%; Catalog 3M Ceramic NR VN 03/2026) | cùng | Có |
| Ghi chú nội bộ trong bản đăng | Không có (quét TODO, CX, SSOT, "nội bộ", "mã hồ sơ", lorem) | — | — | Có |

Điểm U3 chỉ áp dụng cho phiên bản này. Khi HTML thay đổi, cập nhật mã băm, ngày và bảng này trong cùng lần sửa.
