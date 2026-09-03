# Redirect map — Bi gầm cannibalization cleanup

Mục đích: khi hub mới (nội dung của `bi-gam.html` trong preview này) lên live tại
`https://auto365.vn/nang-cap-anh-sang-bi-gam`, các bài "bảng giá" cũ dưới đây đang
cùng target từ khóa "bi gầm ô tô / giá bi gầm" nên cần redirect 301 về hub để dồn
tín hiệu SEO, tránh cannibalization.

**Cách dùng**: đây KHÔNG áp dụng tự động — file `_redirects` trong repo preview này
chỉ có hiệu lực trên domain `preview-365group.pages.dev`, không chạm được vào
`auto365.vn`. Team production cần copy các rule bên dưới vào hệ thống redirect
thật của `auto365.vn` (Cloudflare Page Rules / nginx / CMS redirect manager —
tuỳ hạ tầng đang dùng).

Danh sách dưới đây là 6 URL thật, đã xác minh còn tồn tại (không phải đoán), lấy
qua tìm kiếm `site:auto365.vn "bi gầm" bảng giá` — không gồm các trang "bi LED"
(khác chủ đề, không nên redirect nhầm).

```
/bang-gia-do-den-bi-gam-thang-1-2025                        /nang-cap-anh-sang-bi-gam   301
/bang-gia-bi-gam-thang-2-2025                                /nang-cap-anh-sang-bi-gam   301
/bang-gia-bi-gam-3-mau-thang-4-2025                          /nang-cap-anh-sang-bi-gam   301
/bang-gia-bi-gam-3-nhiet-mau-thang-6                         /nang-cap-anh-sang-bi-gam   301
/bang-gia-den-bi-gam-hot-nhat-thang-8-2024-tai-auto365       /nang-cap-anh-sang-bi-gam   301
/bang-bao-gia-bi-gam-o-to-sieu-re-moi-nhat-tren-thi-truong   /nang-cap-anh-sang-bi-gam   301
```

## Lưu ý trước khi áp dụng

- Đây là danh sách tìm được qua search, **có thể chưa đầy đủ 100%** — team nên tự
  kiểm tra thêm trong CMS/Search Console (query "bi gầm", "bảng giá bi gầm") để
  chắc chắn không sót bài nào.
- Không gồm các bài "Đèn Gầm Dạng Rời" (`/den-gam-dang-roi`) hay "Bi LED"
  (`/bang-gia-do-den-bi-led-o-to-thang-6`, `/bang-bao-gia-bi-led-o-to-sieu-re-moi-nhat-tren-thi-truong`)
  — đây là sản phẩm khác, không nên redirect vào hub bi gầm.
- Trước khi áp dụng, nên kiểm tra các bài này còn traffic/backlink không để cân
  nhắc 301 (giữ nguyên link equity) thay vì chỉ xoá.
