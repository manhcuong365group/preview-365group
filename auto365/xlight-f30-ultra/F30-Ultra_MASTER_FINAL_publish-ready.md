# X-Light F30 Ultra — MASTER FINAL (15 FAQ · đèn gầm dạng rời · 🟡 READY FOR DATA INJECTION · DÙNG BẢN NÀY)

**Sản phẩm:** Đèn gầm dạng rời X-Light F30 Ultra (khối nội dung CKEditor)
**Trạng thái:** 🟡 READY FOR DATA INJECTION — chưa publish. Khóa đủ 6 điểm dữ liệu thật + pass 5 gate mới chuyển 🟢 APPROVED TO PUBLISH.

> **Bản này thay MASTER FINAL (11 câu) — nâng FAQ lên 15 câu.** Team chỉ inject từ file này.
> **Chốt lượt này:** gộp 15 FAQ đã lọc claim · sửa câu 4 (bỏ chỉ dẫn nội bộ lẫn vào câu trả lời) · dựng lại FAQPage schema 15 câu khớp 100% · cập nhật GATE 3 thành 15/15.

> **Entity:** F30 Ultra = đèn gầm dạng rời (lắp cản trước / hốc gió / vị trí thấp đầu xe, dạng rời bổ trợ — KHÔNG thay cụm đèn zin).
> **Cảnh báo taxonomy:** "đèn gầm dạng rời bổ trợ" ≠ "Bi Gầm thay zin". KHÔNG xếp F30 vào danh mục Bi Gầm.

> **6 điểm dữ liệu thật phải khóa (GATE 1):** 1) URL ảnh · 2) offers.url · 3) Breadcrumb item vị trí 3 (=#2) · 4) URL danh mục vị trí 2 (taxonomy thật, không phải Bi Gầm) · 5) URL logo · 6) số trung tâm thật.
>
> **Công suất:** ✅ R&D chốt Cos 75W, Pha 95W.
> **Cấu hình chip LED:** ✅ R&D chốt — Cos 6+6+3 chip LED (2 nguồn Cos chính 6+6 + bù Cos 3), Pha 3 chip LED. Tổng 18 chip. Đã điền vào Product schema + bảng spec.

---

## PHẦN 1 — CHECKLIST TEXT (Content Lead)

### Ưu tiên 1 — Lỗi niềm tin (sửa ngay)
- [ ] **Số trung tâm — mục 8:** `hơn 100 trung tâm` → `[VERIFY: số thật, đang nắm ~90] trung tâm tại Hồ Chí Minh, Hà Nội, Đà Nẵng và nhiều tỉnh thành.`
- [ ] **Góc chiếu cộng dồn — mục 3:** `góc chiếu tổng thể đạt khoảng 42°` → `khi lắp một cặp, vùng phủ sáng hai bên được mở rộng nếu căn chỉnh đúng.`
  - Lý do: 21° × 2 không cộng thẳng thành 42° vùng phủ. (PDF nguồn vẫn còn lỗi 42° + "phủ 3-4 làn" — KHÔNG bê lên web.)

### Ưu tiên 2 — Anchor entity & đồng bộ thuật ngữ
- [ ] **Kicker đầu hero:** `Đèn gầm dạng rời, hạn chế can thiệp đèn nguyên bản`
- [ ] **H1:** `X-Light F30 Ultra – Đèn gầm dạng rời cho ô tô` (không "hiệu năng cao")
- [ ] **FAQ (15 câu):** dán đúng text Phần 1.5, không tự diễn đạt lại.
- [ ] **Bỏ chữ "path" — thống nhất "chân gá / pát":**
  - Mục 7: `Cố định chân gá chắc chắn. Pát sắt/chân gá lắp cần phù hợp vị trí xe, chịu rung tốt và không bị xê dịch khi đi đường xấu.`
  - Mục 8: `...lắp đặt bằng pát bắt chuyên dụng, đi dây gọn gàng và căn chỉnh góc chiếu chuẩn kỹ thuật.`

### Ưu tiên 3 — Bảng thông số (GEO block) + Evidence Layer
- [ ] Dựng bảng thông số dạng text (máy đọc được, tốt cho GEO/AI):

| Hạng mục | Thông số |
|---|---|
| Loại sản phẩm | Đèn gầm dạng rời cho ô tô |
| Công suất Cos | 75W (công nghệ Bù Cos) |
| Công suất Pha | 95W |
| Chống nước, chống bụi | IP68 |
| Tản nhiệt | 2 quạt + rãnh tản nhiệt hợp kim nhôm |
| Nhiệt màu | 6500K \| 5500K/3000K \| 3000K |
| Cấu hình chip LED | Cos 6+6+3, Pha 3 chip LED (tổng 18) |
| Bảo hành | 2 năm chính hãng (bảo hành điện tử) |
| Giá niêm yết | 4.800.000đ (chưa VAT) |

  - Đã điền cấu hình chip (R&D chốt: Cos 6+6+3, Pha 3).
- [ ] `<section class="f30-section">` cho evidence: ảnh beam pattern + Cos/Pha ban đêm thật. alt chuẩn: `alt="anh-cos-thuc-te-den-gam-dang-roi-x-light-f30-ultra-ban-dem"`. Link review hub `/danh-gia-x-light-f30-ultra` khi đủ tư liệu.
- [ ] **Anchor ID mỗi câu FAQ** để jump-link (vd `id="faq-f30-dang-kiem"`), kiểm tra click nhảy đúng câu.

---

## PHẦN 1.5 — 15 FAQ CHUẨN AEO (nguồn dùng chung cho trang + schema)

> Bản chốt 15 câu. Content dán lên trang, Dev nhúng FAQPage schema — **cùng một text, khớp từng dấu câu**.

1. **X-Light F30 Ultra là gì?**
   X-Light F30 Ultra là đèn gầm dạng rời dành cho ô tô, được thiết kế để lắp bổ sung tại vị trí cản trước hoặc hốc gió nhằm hỗ trợ cải thiện khả năng chiếu sáng mà không cần thay thế cụm đèn nguyên bản. Sản phẩm sử dụng cấu hình 2 Cos kết hợp công nghệ Bù Cos.

2. **Đèn gầm dạng rời F30 Ultra giá bao nhiêu?**
   Đèn gầm dạng rời X-Light F30 Ultra có giá niêm yết 4.800.000 VNĐ/bộ, chưa bao gồm VAT. Mức giá áp dụng cho các phiên bản nhiệt màu, theo thông tin công bố tại thời điểm cập nhật nội dung.

3. **F30 Ultra bảo hành mấy năm?**
   X-Light F30 Ultra được bảo hành chính hãng 2 năm. Sau khi lắp đặt, khách hàng nên yêu cầu kích hoạt và kiểm tra thông tin bảo hành điện tử bằng số seri để đảm bảo quyền lợi trong quá trình sử dụng.

4. **Công suất của F30 Ultra là bao nhiêu?**
   Theo thông số công bố từ nhà sản xuất, X-Light F30 Ultra có công suất Cos 75W và công suất Pha 95W.

5. **Công nghệ Bù Cos của F30 Ultra là gì?**
   Bù Cos là công nghệ bổ sung thêm một nguồn sáng ở lens trung tâm sử dụng 3 chip LED, hoạt động cùng hai nguồn Cos chính. Thiết kế này tạo thêm vùng sáng ở khu vực gần phía trước đầu xe, hỗ trợ cải thiện tầm nhìn khi di chuyển trong điều kiện thiếu sáng.

6. **Nên chọn nhiệt màu nào khi lắp F30 Ultra?**
   X-Light F30 Ultra có 3 phiên bản nhiệt màu. Bản 6500K phù hợp điều kiện đường khô ráo và di chuyển đô thị; bản 5500K/3000K phù hợp nhu cầu sử dụng đa dạng; bản 3000K thường được lựa chọn khi xe hay di chuyển trong điều kiện mưa hoặc sương mù.

7. **Đèn F30 Ultra lắp ở vị trí nào trên xe?**
   X-Light F30 Ultra là dòng đèn gầm dạng rời, thường được lắp cố định tại các vị trí thấp phía trước đầu xe như cản trước, hốc gió hoặc khu vực hốc biển số. Vị trí cụ thể phụ thuộc vào kết cấu kỹ thuật và thiết kế của từng dòng xe.

8. **Lắp F30 Ultra có ảnh hưởng đèn zin không?**
   X-Light F30 Ultra được thiết kế như một hệ thống chiếu sáng bổ sung độc lập. Khi thi công đúng quy trình kỹ thuật, sản phẩm không yêu cầu thay thế cụm đèn chính và giúp hạn chế việc can thiệp vào hệ thống đèn nguyên bản của xe.

9. **F30 Ultra có chống nước và chống bụi không?**
   Có. Đèn gầm dạng rời X-Light F30 Ultra đạt tiêu chuẩn chống nước và chống bụi IP68. Thân đèn có cấu trúc khép kín bằng hợp kim nhôm kết hợp gioăng cao su chuyên dụng, giúp hạn chế bụi bẩn và nước xâm nhập trong quá trình vận hành.

10. **Đèn công suất 75W/95W có nhanh nóng không?**
    X-Light F30 Ultra được trang bị hệ thống tản nhiệt gồm hai quạt làm mát kết hợp các rãnh tản nhiệt trên thân hợp kim nhôm. Thiết kế này hỗ trợ thoát nhiệt trong quá trình đèn hoạt động, đặc biệt khi xe di chuyển và có luồng gió tự nhiên đi qua khu vực đầu xe. Nhiệt độ thực tế còn phụ thuộc điều kiện môi trường và thời gian sử dụng.

11. **Lắp F30 Ultra có gây chói xe đối diện không?**
    Nếu được lắp đúng vị trí và căn chỉnh góc chiếu phù hợp, khả năng gây chói cho phương tiện đối diện sẽ được hạn chế. Chủ xe không nên tự ý nâng cao góc chiếu hoặc sử dụng chế độ Pha sai quy định khi tham gia giao thông đô thị.

12. **F30 Ultra khác Bi Gầm thay zin như thế nào?**
    F30 Ultra là dòng đèn gầm dạng rời lắp bổ sung bên ngoài cụm đèn chính bằng pát sắt hoặc chân gá chuyên dụng. Trong khi đó, Bi Gầm thay zin thường thay thế trực tiếp vào vị trí cụm đèn gầm có sẵn của xe. Hai giải pháp này phục vụ các nhu cầu nâng cấp và kết cấu xe khác nhau.

13. **F30 Ultra có phù hợp xe điện không?**
    Khả năng tương thích phụ thuộc vào từng dòng xe điện và cấu hình nguồn điện cụ thể của xe. Chủ xe nên để kỹ thuật viên kiểm tra hệ thống điện, vị trí lắp và phương án đi dây trước khi thi công để hạn chế rủi ro kỹ thuật.

14. **F30 Ultra có ảnh hưởng đến ắc quy không?**
    Khi được lắp đặt đúng kỹ thuật với dây dẫn, rơ-le và cầu chì phù hợp, X-Light F30 Ultra sẽ hoạt động theo phương án đấu nối được kiểm tra trên từng xe. Chủ xe nên thi công tại đơn vị chuyên về nâng cấp ánh sáng ô tô để hạn chế nguy cơ quá tải hoặc ảnh hưởng đến hệ thống điện.

15. **Lắp đèn gầm dạng rời X-Light F30 Ultra có đăng kiểm được không?**
    Quy định đăng kiểm đối với các hạng mục nâng cấp, bổ sung hệ thống ánh sáng có thể thay đổi theo từng thời điểm. Chủ xe nên tham khảo thông tin từ cơ quan đăng kiểm hoặc đơn vị có thẩm quyền trước khi thực hiện để đảm bảo tuân thủ đúng quy định hiện hành.

---

## PHẦN 2 — SCHEMA JSON-LD INLINE (Dev Lead)

> **Luật cứng:**
> 1. KHÔNG `aggregateRating` khi chưa có review thật.
> 2. Công suất số xác định: Cos `75W`, Pha `95W`. Cấu hình chip LED: Cos 6+6+3, Pha 3 chip LED (R&D chốt).
> 3. `offers.url` (Product) và `item` vị trí 3 (Breadcrumb) trùng URL trang đích thật.
> 4. Breadcrumb vị trí 2: rà CMS thật. Nếu danh mục thật là "Đèn trợ sáng" → đổi cả `name` lẫn `item`. **Tuyệt đối không trỏ Bi Gầm.**
> 5. Nhúng inline cuối khối CKEditor, không bọc `<head>`.
> 6. FAQPage dưới đây = đúng 15 câu Phần 1.5, khớp từng dấu câu.

```html
<!-- SCHEMA X-LIGHT F30 ULTRA - INLINE -->

<!-- 1. Product -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "X-Light F30 Ultra",
  "alternateName": "Đèn gầm dạng rời X-Light F30 Ultra",
  "category": "Đèn gầm dạng rời ô tô",
  "brand": { "@type": "Brand", "name": "X-Light" },
  "sku": "X-LIGHT-F30-ULTRA",
  "mpn": "F30 Ultra",
  "description": "Đèn gầm dạng rời cho ô tô, cấu hình 2 Cos kết hợp công nghệ Bù Cos, công suất Cos 75W, Pha 95W, chuẩn chống nước IP68, tản nhiệt 2 quạt, 3 phiên bản nhiệt màu.",
  "image": [ "[VERIFY: URL ảnh sản phẩm thật tuyệt đối, dạng https://...]" ],
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Kiểu loại thực thể", "value": "Đèn gầm dạng rời" },
    { "@type": "PropertyValue", "name": "Công suất Cos", "value": "75W" },
    { "@type": "PropertyValue", "name": "Công suất Pha", "value": "95W" },
    { "@type": "PropertyValue", "name": "Cấu hình chip LED", "value": "Cos 6+6+3, Pha 3 chip LED" },
    { "@type": "PropertyValue", "name": "Tiêu chuẩn chống nước chống bụi", "value": "IP68" },
    { "@type": "PropertyValue", "name": "Hệ thống tản nhiệt", "value": "2 quạt + rãnh tản nhiệt hợp kim nhôm" },
    { "@type": "PropertyValue", "name": "Các phiên bản nhiệt màu", "value": "6500K/6500K, 5500K/3000K, 3000K/3000K" },
    { "@type": "PropertyValue", "name": "Thời hạn bảo hành chính hãng", "value": "2 năm" }
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "VND",
    "price": "4800000",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "4800000",
      "priceCurrency": "VND",
      "valueAddedTaxIncluded": false
    },
    "availability": "https://schema.org/InStock",
    "url": "[VERIFY: URL trang đích tuyệt đối của sản phẩm F30]",
    "seller": { "@type": "Organization", "name": "Auto365" }
  }
}
</script>

<!-- 2. FAQPage - 15 câu, khớp 100% Phần 1.5 -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "X-Light F30 Ultra là gì?", "acceptedAnswer": { "@type": "Answer", "text": "X-Light F30 Ultra là đèn gầm dạng rời dành cho ô tô, được thiết kế để lắp bổ sung tại vị trí cản trước hoặc hốc gió nhằm hỗ trợ cải thiện khả năng chiếu sáng mà không cần thay thế cụm đèn nguyên bản. Sản phẩm sử dụng cấu hình 2 Cos kết hợp công nghệ Bù Cos." } },
    { "@type": "Question", "name": "Đèn gầm dạng rời F30 Ultra giá bao nhiêu?", "acceptedAnswer": { "@type": "Answer", "text": "Đèn gầm dạng rời X-Light F30 Ultra có giá niêm yết 4.800.000 VNĐ/bộ, chưa bao gồm VAT. Mức giá áp dụng cho các phiên bản nhiệt màu, theo thông tin công bố tại thời điểm cập nhật nội dung." } },
    { "@type": "Question", "name": "F30 Ultra bảo hành mấy năm?", "acceptedAnswer": { "@type": "Answer", "text": "X-Light F30 Ultra được bảo hành chính hãng 2 năm. Sau khi lắp đặt, khách hàng nên yêu cầu kích hoạt và kiểm tra thông tin bảo hành điện tử bằng số seri để đảm bảo quyền lợi trong quá trình sử dụng." } },
    { "@type": "Question", "name": "Công suất của F30 Ultra là bao nhiêu?", "acceptedAnswer": { "@type": "Answer", "text": "Theo thông số công bố từ nhà sản xuất, X-Light F30 Ultra có công suất Cos 75W và công suất Pha 95W." } },
    { "@type": "Question", "name": "Công nghệ Bù Cos của F30 Ultra là gì?", "acceptedAnswer": { "@type": "Answer", "text": "Bù Cos là công nghệ bổ sung thêm một nguồn sáng ở lens trung tâm sử dụng 3 chip LED, hoạt động cùng hai nguồn Cos chính. Thiết kế này tạo thêm vùng sáng ở khu vực gần phía trước đầu xe, hỗ trợ cải thiện tầm nhìn khi di chuyển trong điều kiện thiếu sáng." } },
    { "@type": "Question", "name": "Nên chọn nhiệt màu nào khi lắp F30 Ultra?", "acceptedAnswer": { "@type": "Answer", "text": "X-Light F30 Ultra có 3 phiên bản nhiệt màu. Bản 6500K phù hợp điều kiện đường khô ráo và di chuyển đô thị; bản 5500K/3000K phù hợp nhu cầu sử dụng đa dạng; bản 3000K thường được lựa chọn khi xe hay di chuyển trong điều kiện mưa hoặc sương mù." } },
    { "@type": "Question", "name": "Đèn F30 Ultra lắp ở vị trí nào trên xe?", "acceptedAnswer": { "@type": "Answer", "text": "X-Light F30 Ultra là dòng đèn gầm dạng rời, thường được lắp cố định tại các vị trí thấp phía trước đầu xe như cản trước, hốc gió hoặc khu vực hốc biển số. Vị trí cụ thể phụ thuộc vào kết cấu kỹ thuật và thiết kế của từng dòng xe." } },
    { "@type": "Question", "name": "Lắp F30 Ultra có ảnh hưởng đèn zin không?", "acceptedAnswer": { "@type": "Answer", "text": "X-Light F30 Ultra được thiết kế như một hệ thống chiếu sáng bổ sung độc lập. Khi thi công đúng quy trình kỹ thuật, sản phẩm không yêu cầu thay thế cụm đèn chính và giúp hạn chế việc can thiệp vào hệ thống đèn nguyên bản của xe." } },
    { "@type": "Question", "name": "F30 Ultra có chống nước và chống bụi không?", "acceptedAnswer": { "@type": "Answer", "text": "Có. Đèn gầm dạng rời X-Light F30 Ultra đạt tiêu chuẩn chống nước và chống bụi IP68. Thân đèn có cấu trúc khép kín bằng hợp kim nhôm kết hợp gioăng cao su chuyên dụng, giúp hạn chế bụi bẩn và nước xâm nhập trong quá trình vận hành." } },
    { "@type": "Question", "name": "Đèn công suất 75W/95W có nhanh nóng không?", "acceptedAnswer": { "@type": "Answer", "text": "X-Light F30 Ultra được trang bị hệ thống tản nhiệt gồm hai quạt làm mát kết hợp các rãnh tản nhiệt trên thân hợp kim nhôm. Thiết kế này hỗ trợ thoát nhiệt trong quá trình đèn hoạt động, đặc biệt khi xe di chuyển và có luồng gió tự nhiên đi qua khu vực đầu xe. Nhiệt độ thực tế còn phụ thuộc điều kiện môi trường và thời gian sử dụng." } },
    { "@type": "Question", "name": "Lắp F30 Ultra có gây chói xe đối diện không?", "acceptedAnswer": { "@type": "Answer", "text": "Nếu được lắp đúng vị trí và căn chỉnh góc chiếu phù hợp, khả năng gây chói cho phương tiện đối diện sẽ được hạn chế. Chủ xe không nên tự ý nâng cao góc chiếu hoặc sử dụng chế độ Pha sai quy định khi tham gia giao thông đô thị." } },
    { "@type": "Question", "name": "F30 Ultra khác Bi Gầm thay zin như thế nào?", "acceptedAnswer": { "@type": "Answer", "text": "F30 Ultra là dòng đèn gầm dạng rời lắp bổ sung bên ngoài cụm đèn chính bằng pát sắt hoặc chân gá chuyên dụng. Trong khi đó, Bi Gầm thay zin thường thay thế trực tiếp vào vị trí cụm đèn gầm có sẵn của xe. Hai giải pháp này phục vụ các nhu cầu nâng cấp và kết cấu xe khác nhau." } },
    { "@type": "Question", "name": "F30 Ultra có phù hợp xe điện không?", "acceptedAnswer": { "@type": "Answer", "text": "Khả năng tương thích phụ thuộc vào từng dòng xe điện và cấu hình nguồn điện cụ thể của xe. Chủ xe nên để kỹ thuật viên kiểm tra hệ thống điện, vị trí lắp và phương án đi dây trước khi thi công để hạn chế rủi ro kỹ thuật." } },
    { "@type": "Question", "name": "F30 Ultra có ảnh hưởng đến ắc quy không?", "acceptedAnswer": { "@type": "Answer", "text": "Khi được lắp đặt đúng kỹ thuật với dây dẫn, rơ-le và cầu chì phù hợp, X-Light F30 Ultra sẽ hoạt động theo phương án đấu nối được kiểm tra trên từng xe. Chủ xe nên thi công tại đơn vị chuyên về nâng cấp ánh sáng ô tô để hạn chế nguy cơ quá tải hoặc ảnh hưởng đến hệ thống điện." } },
    { "@type": "Question", "name": "Lắp đèn gầm dạng rời X-Light F30 Ultra có đăng kiểm được không?", "acceptedAnswer": { "@type": "Answer", "text": "Quy định đăng kiểm đối với các hạng mục nâng cấp, bổ sung hệ thống ánh sáng có thể thay đổi theo từng thời điểm. Chủ xe nên tham khảo thông tin từ cơ quan đăng kiểm hoặc đơn vị có thẩm quyền trước khi thực hiện để đảm bảo tuân thủ đúng quy định hiện hành." } }
  ]
}
</script>

<!-- 3. BreadcrumbList - vị trí 2 = taxonomy THẬT; KHÔNG trỏ Bi Gầm -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Trang chủ", "item": "https://auto365.vn/" },
    { "@type": "ListItem", "position": 2, "name": "Đèn ô tô", "item": "[VERIFY: URL danh mục thật trên CMS — nếu danh mục thật là 'Đèn trợ sáng' thì đổi cả name; tuyệt đối không Bi Gầm]" },
    { "@type": "ListItem", "position": 3, "name": "X-Light F30 Ultra", "item": "[VERIFY: URL trang đích — GIỐNG offers.url ở Product]" }
  ]
}
</script>

<!-- 4. Organization -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Auto365",
  "url": "https://auto365.vn/",
  "logo": "[VERIFY: URL logo tuyệt đối, dạng https://...]",
  "description": "Hệ thống trung tâm chăm sóc và nâng cấp ô tô Auto365 — trực thuộc 365Group.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+84-1900-9365",
    "contactType": "customer service"
  }
}
</script>
```

> Giá 4.800.000đ **chưa VAT** — cờ `valueAddedTaxIncluded: false`. Đổi giá thì đổi cả cờ.
> Không gắn claim "nhà phân phối ủy quyền 3M" vào trang X-Light — sai ngữ cảnh.

---

## PHẦN 3 — ĐÓNG BĂNG, CHỜ VERIFY (cấm đưa vào Giai đoạn 1)

1. **Gọi tên xe điện (VF8, VF9, BYD, MG4, AION) và xe dịch vụ.** Hệ điện mỗi dòng EV khác nhau — chờ tài liệu tương thích từ kỹ thuật. (FAQ 13 chỉ trả lời ở mức "tùy xe, để kỹ thuật kiểm tra" — đúng mức an toàn.)
2. **Số mạnh từ PDF nguồn (42°, phủ 3-4 làn, 30.000 giờ).** Không đưa lên web cho tới khi có số đo/ảnh thật từ xưởng.
3. **So sánh hãng ngoài: BỎ HẲN.** Chỉ đối chiếu nội bộ với Titan M30 Ultra V2 ở Giai đoạn 2.

---

## PHẦN 4 — CỔNG PUBLISH: pass đủ 5 gate mới đẩy Live

- [ ] **GATE 1 — URL & số liệu thật (6 biến số):** Không còn `[VERIFY]`. (1) URL ảnh · (2) offers.url · (3) item Breadcrumb vị trí 3 = #2 · (4) URL danh mục vị trí 2 (taxonomy thật, đổi `name` nếu cần, không Bi Gầm) · (5) URL logo · (6) số trung tâm thật. *(Cấu hình chip đã chốt: Cos 6+6+3, Pha 3 — đã điền vào Product schema.)*
- [ ] **GATE 2 — Giá/VAT.** Giữ `valueAddedTaxIncluded: false` khớp giá 4.800.000đ chưa VAT trên trang.
- [ ] **GATE 3 — FAQ khớp hiển thị.** Đủ **15/15** câu hai nơi, đúng text Phần 1.5, khớp từng dấu câu. Không câu nào chỉ nằm trong schema. Cấm tóm tắt/diễn đạt lại khác nội dung.
- [ ] **GATE 4 — Validate.** Product + BreadcrumbList + Organization → Rich Results Test phải Valid. FAQPage → validator.schema.org (hợp lệ cú pháp). **Google bỏ FAQ rich result từ 7/5/2026** → giữ FAQPage để AI/AEO trích, không chặn publish vì lý do này.
- [ ] **GATE 5 — Không spam.** Tuyệt đối không `aggregateRating` giả lập.
- [x] **Công suất & chip:** R&D chốt Cos 75W / Pha 95W; cấu hình Cos 6+6+3, Pha 3 — đã vào Product schema.

---

## PHẦN 5 — CỤM VỆ TINH (GEO Cluster — chỉ đối chiếu nội bộ, không hãng ngoài)

1. **Định danh:** X-Light F30 Ultra là gì? Đèn gầm dạng rời lắp bổ sung cho ô tô.
2. **Pillar phân khúc:** Đèn gầm dạng rời là gì? Hướng nâng cấp ánh sáng độc lập, hạn chế can thiệp cụm đèn nguyên bản.
3. **Đối chiếu nội bộ (chỉ khi đủ dữ liệu thật):** So sánh X-Light F30 Ultra và Titan M30 Ultra V2 — cấu hình quang học và phương án lắp đặt.
4. **Phân tách chống nhiễu (quan trọng):** Đèn gầm dạng rời bổ trợ khác Bi gầm thay zin thế nào? — tách F30 khỏi danh mục Bi Gầm, chống cannibalize.
5. **Cá nhân hóa kết cấu:** X-Light F30 Ultra hợp kết cấu xe nào? Lưu ý pát bắt khi thi công.
6. **Thực tế (chỉ khi đủ ảnh/video test):** Hiệu quả chiếu sáng của F30 Ultra khi đi mưa và sương mù.

---

**Còn chờ để chuyển 🟢 publish:** số trung tâm thật (~90) · URL danh mục CMS (không Bi Gầm) · URL ảnh + URL trang đích · Evidence Layer (ảnh beam pattern / Cos-Pha / video đo sáng thật — đây là phần tạo phần lớn sức mạnh GEO/AEO).
**Thay đổi lượt này:** chốt cấu hình chip (Cos 6+6+3, Pha 3 — gỡ hết [VERIFY R&D]) · thêm sku/mpn vào Product schema · câu 2 chống lỗi thời giá · câu 10 thêm điều kiện thực tế · giữ "3 chip LED" ở câu 5 (dữ kiện hai bản PDF đều thống nhất, không xóa) · sửa nhãn về đúng 🟡 READY FOR DATA INJECTION (còn [VERIFY] nên chưa 🟢).
