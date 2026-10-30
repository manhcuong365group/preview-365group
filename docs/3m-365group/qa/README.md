# QA phim cách nhiệt 3M — 30/10/2026

- URL: https://preview-365group.pages.dev/3m.365group.com.vn/phim-cach-nhiet-3m/?qa=1030
- Build: commit `237821c5` (origin/main), HTML SHA-256 `9372c69749118b41f2179a2fdabd4b56e07f86511e37a105394d4fbaa640e632` (tính lại từ file, trùng 01/02/03)
- Trình duyệt: Chrome 150 headless (Puppeteer), **giả lập viewport** (isMobile + touch với khổ < 768). Không phải thiết bị thật.
- Thời điểm: 2026-10-30 10:51 UTC (17:51 giờ VN). Người kiểm: Claude (script tự động), số liệu trong `qa-log.json`.

## Kết quả (U1)

| Viewport | Tràn ngang (scrollWidth) | 3 tab, đổi tab | Bảng 12 mã | 6 thẻ gói | Chăm sóc | Popup báo giá | Escape |
|---|---|---|---|---|---|---|---|
| 360×780 | Không (360) | Đạt | Cuộn ngang trong khung | 6 | 1 cột | Mở, chọn sẵn gói, focus ô điện thoại | Đóng |
| 390×844 | Không (390) | Đạt | Cuộn ngang | 6 | 1 cột | Như trên | Đóng |
| 430×932 | Không (430) | Đạt | Cuộn ngang | 6 | 1 cột | Như trên | Đóng |
| 768×1024 | Không (768) | Đạt | Cuộn ngang | 6 | 2 cột | Như trên | Đóng |
| 1024×768 | Không (1024) | Đạt | Vừa khung | 6 | 2 cột | Như trên | Đóng |

Sau khi đóng, DOM chỉ có 1 form lead (`#m3-lead-form`); 2 form còn lại là nút đóng dialog và ô tìm đại lý.

Ảnh: `qa-<khổ>.jpg` (toàn trang: hero, menu, tab, thẻ gói, bảng, chăm sóc), `qa-<khổ>-popup.jpg` (popup).

**Thiết bị thật + bàn phím ảo:** chủ trang báo đã kiểm OK (30/10/2026); biên bản do QA giữ. **CWV, gửi lead thật:** CX, không suy từ bảng này.

## Kiểm link (S3) — `link-audit.csv`

79 URL duy nhất (a, img, link, script, og:image): 29 nội bộ preview, 13 trên 3m.365group.com.vn, 28 bên ngoài, 7 anchor, 1 tel, 1 mailto. Tất cả 200/OK, PDF 260815 trả `application/pdf`. Ba dòng không 200:
- `https://3m.365group.com.vn/phim-cach-nhiet-3m` (canonical) — 404, route production chưa dựng.
- `og-phim-cach-nhiet-3m.jpg` trên production — 404, chưa upload.
- `https://fonts.googleapis.com` — preconnect, không phải link.

Hai dòng production phải kiểm lại sau triển khai (cùng ảnh/PDF đổi từ đường dẫn tương đối sang URL production).
