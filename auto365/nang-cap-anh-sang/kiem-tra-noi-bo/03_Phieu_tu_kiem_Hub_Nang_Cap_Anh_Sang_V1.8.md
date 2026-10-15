# 03 — Phiếu tự kiểm Hub Nâng cấp ánh sáng V1.8

Ngày: 10/10/2026 · cập nhật 12/10/2026 theo tái kiểm tối 10/10 (TK-01/02/03) và 15/10/2026 theo tái kiểm 14/10 (AS14). Phiếu ghi trạng thái xử lý các phát hiện trong hai hồ sơ kiểm duyệt (08/10 và 09–10/10). Đây là tự kiểm của team triển khai, **không phải điểm chấm lại** — reviewer chấm lại trên bản cuối.

## Đã xử lý

| Mã | Phát hiện | Đã làm | Bằng chứng |
| --- | --- | --- | --- |
| AS-01 / A01 | Giá thiếu đơn vị/VAT | 122/122 card có đơn vị + VAT theo ghi chú giá trên PDP | 04_Master_Data (cột "Ghi chú giá trên PDP") |
| AS-02 | Turbo BM 3 nhiệt màu | "Từ 9.000.000đ/cặp" + ghi 2 phiên bản; schema AggregateOffer 9–10 triệu | PDP Turbo BM |
| AS-03 / BLOCK_08 | F-002 "Sắp ra mắt" vs InStock | Bỏ nhãn (đã mở bán — chủ quản xác nhận 09/10); bỏ availability toàn bộ Offer | HTML + JSON-LD |
| AS-04 / BLOCK_01 | Năm Acura | MDX 2008 (năm từ tên xe) | Bài nguồn Acura |
| RW-02 / BLOCK_01 | Chữ năm trên ảnh Fortuner | Media sửa ảnh nguồn thành 2011; hub dùng ảnh mới | Ảnh `…x3-ultra-0-1791619675.webp` |
| RW-01 / BLOCK_02 | VAT F+ Pro Mini banner vs card | Dùng banner không ghi giá (chủ quản chọn 10/10) | `hinh/banner-bi-led-x-light-f-pro-mini-khong-gia.webp` |
| AS-05 / A10 | Pháp lý thiếu ngoại lệ, chưa có văn bản sửa đổi | Ghi ngoại lệ đèn sương mù dạng rời; nêu NĐ 238/2026 sửa đổi NĐ 168; block "Lắp đúng – chiếu đúng – dùng đúng" (Phương án 3): 3 nguyên tắc hiển thị, chi tiết pháp lý trong accordion "Xem quy định chi tiết" (có sẵn trong HTML); 13/10/2026 bỏ con số mức phạt theo chủ quản (nhạy cảm), giữ điểm a khoản 3 Điều 13 + ngoại lệ + NĐ 238; anh Đạo duyệt 10/10; FAQ + FAQPage đồng bộ | Link chinhphu.vn |
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
| A04 / A11 | DOM nặng | Case từ thứ 25 vào `<template>`; DOM 7.178 → 4.431, ảnh 576 → 244; đo lại trên pages.dev 15/10/2026: LCP lab mobile 1,30 s, CLS 0,044 (cấu hình và log ở trang kiểm tra nội bộ) | 02 mục 7 |
| U1 | Trang dài | Gộp 4 khối kiến thức (cụm đèn zin, nguồn sáng, đọc thông số, lỗi thường gặp) vào 1 section accordion; giữ id cũ trên từng mục | HTML |
| U2 | Lead test end-to-end | POST /api/leads từ cấu hình form của hub → {"success":true, lead_id 143, test:true}; chủ quản xác nhận đã thấy lead trong CRM (10/10/2026) | lead_id 143 — xoá khỏi CRM sau kiểm tra |
| AS-07 (bổ sung 12/10) | Câu chữ claim | Bỏ "nổi bật", "toàn quốc", "chuyên gia", "sắc nét", "tốt"; 7 tiêu đề case có "siêu khủng/cực đỉnh/đỉnh cao/đầu tiên tại Việt Nam/lên đến 100 triệu" đổi về tiêu đề trung tính theo xe + hạng mục; tiêu đề cẩm nang bỏ "triệt để/trình làng/siêu phẩm"; jobTitle reviewer = "Kiểm duyệt kỹ thuật đèn ô tô" (khớp hiển thị) | HTML + JSON-LD |
| V2-11 / A04 (14/10) | Quy trình chỉ có tên bước; mẫu tạo mốc chưa có nguồn | Tên mẫu tạo mốc link tới PDP; 7 bước có đầu ra từng bước; dòng "Trước khi chọn nhóm nào cũng cần kiểm" dưới bảng | HTML |
| AS14-01 (15/10) | "Xem tất cả mẫu khớp" giữ từ khoá cũ → 0 kết quả | Nút xoá ô tìm kiếm và các bộ lọc finder không dùng trước khi áp nhóm/giá/hệ điện. Tái hiện: tìm "F+ Pro 5500" → finder Đi phố/Bi LED/6–10 triệu/12V → bấm xem tất cả → 7/7 mẫu, ô tìm rỗng | Test puppeteer 15/10 |
| AS14-02 (15/10) | Chỉ mục nhiệt màu thiếu 5200/5800/6500K (24 dòng) | Bộ lọc thêm 5200K (2), 5800K (21), 6500K (1); `data-k` lấy mọi giá trị trong trường nhiệt màu (Titan Black 2026 = 5200 + 3000; F30 Ultra có 6500) | HTML |
| AS14-03 (15/10) | Ngày sửa/hồ sơ lệch | Trang + schema `dateModified` 2026-10-15; `lastReviewed` giữ 2026-10-12 (ngày anh Đạo rà soát), dòng byline ghi "(12/10/2026)"; 01 ghi ngày xuất thực tế; 02 sửa ngày, thứ tự H2, bảng Title, câu NĐ 238 | HTML + 01/02 |
| AS14-04 (15/10) | Lens "AR" nằm chung hàng kích thước | Modal tách "Kích thước lens" (inch) và "Đặc tính lens" (AR); 7 dòng AR hiện "Chưa có dữ liệu kích thước — xem trang sản phẩm"; AR không vào bộ lọc kích thước | HTML |
| AS14-05 (15/10) | 4 nhãn "Độc quyền" chưa có căn cứ trong hồ sơ | Giữ nhãn: chủ quản xác nhận 14/10/2026 đây là sản phẩm độc quyền tại Auto365 (theo PDP). Ghi ở cột "Ghi chú Commercial" của 04 cho 4 dòng | 04 |
| AS14-06 (15/10) | 22 bóng LED ghi "VAT xác nhận theo báo giá" trong khi PDP ghi chưa VAT | Đổi thành "Chưa gồm VAT" theo ghi chú giá PDP (chủ quản xác nhận giá/VAT theo PDP 10/10) — card, modal, 04 đồng bộ | HTML + 04 |
| AS14-08/09 (15/10) | Bi cầu/projector; "Cos ~55W Cos/bi"; chữ VAT nhỏ | Câu ngắn dưới bảng nhóm: bi cầu = projector có thấu kính, Bi LED/Mini/Laser thuộc dạng này; spec card "Cos ~55W/bi", "Pha ~90W/bi"; chữ VAT 12,5px | HTML |
| A05 | Thiếu `<main>` | Một `<main id="main-content">` + skip link | HTML |
| U3 | Bộ bàn giao | 01 Nội dung (xuất tự động, có SHA-256) + 02 CMS/SEO + 03 phiếu này + 04 Master Data cùng phiên bản | docs/nang-cap-anh-sang/ (nội bộ) |
| A01 / RW-05 | Khóa giá/VAT/đơn vị | Chủ quản xác nhận 10/10/2026: giá, VAT, đơn vị như PDP là đúng; 129 dòng Master Data đánh dấu đã xác nhận | 04_Master_Data |
| C1 / N3 | Reviewer | Nguyễn Quang Đạo duyệt bản cuối 12/10/2026 (lượt trước 10/10/2026); schema lastReviewed/dateModified = 2026-10-12, khớp dòng "Cập nhật nội dung 12/10/2026" trên trang | 02 mục 2 |
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
