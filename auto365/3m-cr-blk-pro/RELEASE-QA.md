# CR BLK Pro — release QA

Trạng thái: không được chuyển production cho đến khi toàn bộ mục P0 có bằng chứng nghiệm thu.

## Đã khóa trong mã preview

- Định nghĩa CR BLK Pro là gói phối mã/dịch vụ của Auto365, không phải SKU hay dòng phim riêng của 3M.
- Sáu case dùng đúng cấu hình đã được chốt trong phản hồi: VF7 40/15/15; Peugeot 40/35/15; Volvo 40/15/15 + panorama 15; Fortuner, CR-V và HR-V 40/15/15.
- Money page chỉ dùng WebPage, Service, BreadcrumbList và FAQPage; không có Product, LocalBusiness hay Offer giá cố định.
- TDS nêu Revision E, May 2024, Table B; tách bạch IRER và IRR; khuyến nghị 40/35/15 được ghi là tư vấn Auto365.
- Claim bảo hành nêu điều kiện và liên kết trực tiếp tới 3M Việt Nam.

## P0 cần Ops/CMS nghiệm thu trước live

1. Giá: xác nhận phạm vi áp dụng từng nhóm xe, đã/chưa VAT, hạng mục bao gồm, panorama/phim cũ và ngày hết hiệu lực. Chỉ sau đó mới bật Offer schema có `availability` và `priceValidUntil`.
2. Asset production: upload và kiểm tra HTTP 200 cho `13-1.jpg`, `16.webp`, `2.webp`, `8.webp`, `bang-gia.webp`, `case-vinfast-vf7.jpg`, `phim-cach-nhiet-6.webp`, `phim-cach-nhiet-7.webp`, `phim-cach-nhiet-9.webp`, `phim-cach-nhiet-10.webp`, `xe-honda-civic.webp`, `xe-honda-crv.webp`, `xe-honda-hrv.webp`, `xe-toyota-fortuner.webp`, `xe-vinfast-vf8.webp` và OG image.
3. CMS: tắt Product/SKU graph cũ trên canonical, không chèn thêm LocalBusiness vào money page.
4. Index: bỏ cả meta và header `noindex,nofollow` ở production; preview tiếp tục noindex.
5. Entity/NAP: xác nhận dữ liệu LocalBusiness ở trang chi nhánh riêng, bao gồm quan hệ Auto365, 3M Pro Shop/Training Center, số điện thoại, địa chỉ, Google Business Profile và bản đồ.
6. CRM/Analytics: kiểm thử gửi lead, UTM, consent, dataLayer/GA4, thông báo lỗi và retry theo môi trường production.

## QA trước phát hành

- Chrome Console không lỗi; FilmMatch, chọn gói, mở/đóng modal, lọc case, Escape, submit form và sticky mobile hoạt động.
- Kiểm tra keyboard/focus, `aria-pressed` filter, tương phản caption và ảnh chứng nhận không bị cắt thông tin.
- Xác nhận các trang case liên kết ngược về canonical money page và các link CR BLK 60/50/40/35/15 dùng canonical trực tiếp.
- Chạy Rich Results Test, schema validator, Lighthouse mobile và desktop trên URL production.
- Kiểm tra Googlebot và OAI-SearchBot có thể truy cập sau khi live; gửi URL vào Search Console.
