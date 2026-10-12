# 03 — Phiếu tự kiểm Hub Nâng cấp ánh sáng V1.8

Ngày: 10/10/2026 · cập nhật 12/10/2026 theo tái kiểm tối 10/10 (TK-01/02/03). Phiếu ghi trạng thái xử lý các phát hiện trong hai hồ sơ kiểm duyệt (08/10 và 09–10/10). Đây là tự kiểm của team triển khai, **không phải điểm chấm lại** — reviewer chấm lại trên bản cuối.

## Đã xử lý

| Mã | Phát hiện | Đã làm | Bằng chứng |
| --- | --- | --- | --- |
| AS-01 / A01 | Giá thiếu đơn vị/VAT | 122/122 card có đơn vị + VAT theo ghi chú giá trên PDP | 04_Master_Data (cột "Ghi chú giá trên PDP") |
| AS-02 | Turbo BM 3 nhiệt màu | "Từ 9.000.000đ/cặp" + ghi 2 phiên bản; schema AggregateOffer 9–10 triệu | PDP Turbo BM |
| AS-03 / BLOCK_08 | F-002 "Sắp ra mắt" vs InStock | Bỏ nhãn (đã mở bán — chủ quản xác nhận 09/10); bỏ availability toàn bộ Offer | HTML + JSON-LD |
| AS-04 / BLOCK_01 | Năm Acura | MDX 2008 (năm từ tên xe) | Bài nguồn Acura |
| RW-02 / BLOCK_01 | Chữ năm trên ảnh Fortuner | Media sửa ảnh nguồn thành 2011; hub dùng ảnh mới | Ảnh `…x3-ultra-0-1791619675.webp` |
| RW-01 / BLOCK_02 | VAT F+ Pro Mini banner vs card | Dùng banner không ghi giá (chủ quản chọn 10/10) | `hinh/banner-bi-led-x-light-f-pro-mini-khong-gia.webp` |
| AS-05 / A10 | Pháp lý thiếu ngoại lệ, chưa có văn bản sửa đổi | Ghi ngoại lệ đèn sương mù dạng rời; nêu NĐ 238/2026 sửa đổi NĐ 168; block "Lắp đúng – chiếu đúng – dùng đúng" (Phương án 3): 3 nguyên tắc hiển thị, chi tiết pháp lý + mức phạt tham khảo trong accordion "Xem quy định chi tiết" (có sẵn trong HTML); anh Đạo duyệt 10/10; FAQ + FAQPage đồng bộ | Link chinhphu.vn |
| AS-06 / A06 / N4 | Publisher trộn cơ sở | Organization riêng, AutoPartsStore "Auto365.vn - Trụ Sở Chính"; graph nối bằng @id | 02 mục 3 |
| AS-07 / RW-06 | Câu nói quá / thiếu điều kiện | Sapo, chói, mưa/sương, LED tiêu thụ điện, "cùng kích thước" đều có điều kiện; bỏ mô tả thương hiệu chưa có nguồn; tiêu đề case làm gọn | 01 |
| AS-08 / A09 | Thiếu phương án giữ đèn zin | Khối "Khi nào có thể giữ đèn nguyên bản?" | 01 |
| AS-09 | Nút xem toàn bộ trỏ về chính hub | Trỏ #so-sanh — bảng 7 nhóm, mỗi hàng có link danh mục (khối #nhom đã bỏ ngày 10/10/2026 theo quyết định bố cục) | HTML: `#catLink href="#so-sanh"` |
| AS-10 | Dịch vụ xe máy | Bỏ "Độ đèn xe máy". Giữ "Bi gầm X-Light F10 2.0 inch (xe máy)" theo quyết định chủ quản | — |
| AS-11 / RW-05 | So sánh thiếu trường | Modal: giá/VAT, nhiệt màu, lens, điện áp, vị trí, bảo hành; thiếu → "Xem trên trang sản phẩm"; bóng LED lens → "Không áp dụng" | HTML |
| AS-12 | Ngày case | Nhãn "Đăng dd/mm/yyyy" | HTML |
| RW-04 | Giá bảng 7 nhóm | Giá + đơn vị + tên mẫu làm mốc; Bóng LED không dùng T10 (bóng phụ trợ); ghi chú VAT/công lắp | 01 bảng so sánh |
| RW-07 | Nguồn chưa có link | Luật 36/2024, NĐ 168, NĐ 238, IEC 60529 đều có link gốc | 02 mục 5 |
| A02 | 90+ chi nhánh | Trang /chi-nhanh công bố 91 địa điểm, 33 tỉnh/thành (41/26/24) — khớp "90+" | auto365.vn/chi-nhanh |
| A02 | "Chính hãng" X-Light | Căn cứ: 365Group phân phối chính hãng X-Light, Auto365 thuộc 365Group (chủ quản xác nhận 08/10); ảnh chứng nhận đại lý ghi rõ cơ sở áp dụng | Chứng nhận 01/01/2020 |
| A04 / A11 | DOM nặng | Case từ thứ 25 vào `<template>`; DOM 7.178 → 4.154, ảnh 576 → 232; đo lại trên pages.dev 12/10/2026: LCP lab mobile 1,37 s, CLS 0 (cấu hình và log ở trang kiểm tra nội bộ) | 02 mục 7 |
| U1 | Trang dài | Gộp 4 khối kiến thức (cụm đèn zin, nguồn sáng, đọc thông số, lỗi thường gặp) vào 1 section accordion; giữ id cũ trên từng mục | HTML |
| U2 | Lead test end-to-end | POST /api/leads từ cấu hình form của hub → {"success":true, lead_id 143, test:true}; chủ quản xác nhận đã thấy lead trong CRM (10/10/2026) | lead_id 143 — xoá khỏi CRM sau kiểm tra |
| A05 | Thiếu `<main>` | Một `<main id="main-content">` + skip link | HTML |
| U3 | Bộ bàn giao | 01 Nội dung (xuất tự động, có SHA-256) + 02 CMS/SEO + 03 phiếu này + 04 Master Data cùng phiên bản | docs/nang-cap-anh-sang/ (nội bộ) |
| A01 / RW-05 | Khóa giá/VAT/đơn vị | Chủ quản xác nhận 10/10/2026: giá, VAT, đơn vị như PDP là đúng; 129 dòng Master Data đánh dấu đã xác nhận | 04_Master_Data |
| C1 / N3 | Reviewer | Nguyễn Quang Đạo đã duyệt bản 10/10/2026; schema có lastReviewed | 02 mục 2 |
| A10 | NĐ 238/2026 sửa NĐ 168 | Đã đọc bản gốc: điểm a khoản 3 Điều 13 không bị thay đổi bởi NĐ 238 (đối chiếu Điều 3 và khoản 11 Điều 19 NĐ 238). NĐ 238 có sửa/thay thuật ngữ ở các điểm khác của Điều 13; hub không mô tả các thay đổi đó. Trang, FAQ, FAQPage chỉ ghi "không thay đổi quy định này" cho điểm a khoản 3 | vanban.chinhphu.vn docid 218613 |

## Giữ theo quyết định chủ quản (khác đề xuất hồ sơ)

| Đề xuất | Quyết định |
| --- | --- |
| A07: chỉ 4–6 case | Giữ toàn bộ case, hiển thị 12/lần, lọc theo hạng mục/hãng. Snapshot: 362 case (sáng 10/10/2026) → **370 case** ở bản hiện hành (feed làm mới tối 10/10/2026; 24 card trong DOM + 346 trong `<template id="caseMoreTpl">`) |
| A08: 4 lý do | Giữ 6 thẻ "Vì sao chọn" |
| RW-03: bỏ F10 xe máy | Giữ (đèn dùng được cho cả xe máy) |
| AS-14 / RW-07: link nhảy đầu trang | Không thêm |

## Còn lại (chỉ thực hiện được khi lên production)

| Việc | Người | Ghi chú |
| --- | --- | --- |
| Nghiệm thu production L1–L8 | IT/SEO | Checklist ở 02 mục 6 |
| Đo AI Search T0/+7/+14/+28 | SEO | Sau khi production phát hành |
| Ảnh "Vì sao chọn" | Media | Một số ảnh là ảnh dựng, alt ghi "ảnh minh họa"; thay ảnh thật nếu có |
