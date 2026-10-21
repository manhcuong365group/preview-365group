# Yêu cầu IT/CMS — đồng bộ hub Bi LED production với bản preview đã đạt

**Ngày:** 21/10/2026 · **Trang:** https://auto365.vn/nang-cap-anh-sang-bi-led
**Bản chuẩn:** https://preview-365group.pages.dev/nang-cap-anh-sang-bi-led/ (tái kiểm 19/10/2026: 95,6/100 — đạt V1.8)
**Tái kiểm production 21/10/2026:** 93,8/100 — chưa đạt, có BLOCK_02 (LIVE01).

Production đang chạy bản cũ hơn preview (trước các sửa 16–19/10). Mọi mục dưới đây **đã đúng trên preview**; chỉ cần đưa đúng nội dung/dữ liệu preview lên CMS.

| Mã | Lỗi trên production | Sửa theo preview |
| --- | --- | --- |
| LIVE01 (BLOCK_02) | Khối thương hiệu "Titan": 1.700.000đ – 9.900.000đ ghi đơn vị bộ/cặp, nhưng 1,7 triệu là giá bi lẻ /chiếc. PDP Titan Black Mini 2.0 Square (lẻ) còn nhãn "Giá bộ đèn tham khảo". | Tên hãng **Titan Moto**; dòng giá: "30 mẫu · 2.000.000đ – 9.900.000đ (giá sản phẩm, chưa VAT, đơn vị bộ/cặp theo từng mẫu) · bi lẻ từ 1.700.000đ/chiếc". Nếu khối này CMS tự tính: tính khoảng bộ/cặp riêng, bỏ mẫu "(lẻ)". Sửa nhãn giá trên PDP mẫu lẻ thành giá /chiếc. |
| LIVE02 | Bộ lọc lens 3.0 ghi 61 nhưng lọc ra 64; bảng thông số để "—" lens của AES Turbo BM, Henvvei L83 Pro, X-Light X5 Pro; công suất CB750 trống. | Đếm lens tính từ dữ liệu: 1.5=3, 1.8=6, 2.0=8, 2.5=2, 3.0=64. Bảng: 3 mẫu trên = 3.0 inch; CB750 = Cos ~45W / Pha ~55W (theo PDP). |
| LIVE03 | Bảng tình huống, dòng "đường tỉnh/đường tối": "Bi lens 3.0 inch có vùng Cos rộng, Pha xa hơn…" | Thay bằng: "Mẫu có vùng Cos/Pha và trợ Pha phù hợp nhu cầu — xem qua case cùng dòng xe và thông số theo PDP; kích thước lens chọn theo hốc đèn, không tự quyết định vùng sáng." (giữ link ví dụ Innova). |
| LIVE04 | Mục "Xe nào lắp được bi LED" thiếu dòng "Hướng dẫn theo dòng xe" (6 link). | Thêm dưới các chip dòng xe, đúng 6 URL như preview: Santa Fe V20 Square, Ranger Wildtrak V30 Ultra, Accent V30 Ultra, VF8 V20 Square, VF8 V20L Quantum, CX-5 V30 Ultra. |
| LIVE05 | Card case Acura MDX ghi năm 2025. | Năm xe **2008** ("Acura MDX · 2008"); 2025 là năm sản phẩm V20 Base. |
| LIVE06 | Cẩm nang có lại bài X5 Ultra "tầm chiếu xa hàng trăm mét" và 2 bài bảng giá tháng 2, tháng 4/2026. | Dùng đúng 8 bài như preview (không có bài X5 Ultra). 2 bài bảng giá mới: SEO quyết định giữ/gộp riêng, không đặt trong cẩm nang hub. |
| LIVE07 | Schema live chỉ có WebSite/Organization/CollectionPage/Person/Breadcrumb; thiếu ItemList/Product/Offer/FAQPage như hồ sơ. | Dùng JSON-LD của preview (ItemList 106 Product, Offer/AggregateOffer, FAQPage 10 câu), hoặc ghi rõ trong 02 nếu cố ý bỏ. Phải khớp giá/đơn vị đang hiển thị. |
| LIVE08 | Title/H1 live: "Đèn bi LED chính hãng cho ô tô, xe máy". | Chủ quản chốt phạm vi. Bản duyệt: title "Bi LED ô tô (đèn bi cầu LED) chính hãng: giá, cách chọn \| Auto365", H1 "Bi LED ô tô (đèn bi cầu LED) chính hãng tại Auto365" (105/106 mẫu chỉ cho ô tô). |

**Khi đăng:** bỏ khối `#internal-check` + script; không đăng thư mục `kiem-tra-noi-bo/`; robots cho index; canonical tự trỏ. Sau khi đăng báo lại để kiểm lại L1–L8 và tính hash trên đúng tệp production.
