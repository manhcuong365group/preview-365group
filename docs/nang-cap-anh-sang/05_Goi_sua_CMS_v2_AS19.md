# 05 — Gói sửa CMS v2 hub Nâng cấp ánh sáng

## Bản R3 — theo tái kiểm 22/10/2026 (hiện hành)

Ngày lập: 22/10/2026. Snapshot v2: 343 thẻ, ItemList 333, dateModified 2026-10-19T14:48:56+07:00, canonical `https://v2.auto365.vn/nang-cap-anh-sang`. Reviewer R3: SEO 28,8/30, GEO 23,8/25 (qua ngưỡng); **C1 và U3 còn CX** → kết luận "chưa đủ bằng chứng". Các lỗi AS19-01…06 (finder, Black, nhiệt màu, anchor, VAT) reviewer đã xác nhận đóng.

| Snapshot | Số |
| --- | ---: |
| Thẻ / URL riêng | 343 |
| Ngừng kinh doanh (loại khỏi ItemList — đúng) | 10 |
| ItemList | 333 |
| Thẻ đang bán thiếu trong ItemList | 0 |
| Thẻ có giá số | 224 |
| Theo nhóm | bi-led 113 · bi-led-mini 14 · bi-laser 50 · den-tro-sang 22 · bi-gam 31 · bong-led 106 · den-gam-dang-roi 7 |

### R3-01 — Lens AES SV Turbo S 2026 (C1)

v2 đang ghi `data-lens="1.8"` và modal "1.8 inch". PDP Auto365 của SV Turbo S **không có trường kích thước lens** (chỉ ghi "Body khoảng 94 mm"); số 1,8 inch trên PDP thuộc đoạn so sánh với X-Light F+ Pro V2. Preview đang để trống lens cho mẫu này.

**Sửa:** bỏ `data-lens` của SV Turbo S (modal hiện "Chưa có dữ liệu kích thước — xem trang sản phẩm") cho tới khi Kinh doanh/hãng xác nhận số đúng SKU. Rà bộ nạp dữ liệu: chỉ lấy thông số của chính SKU, không lấy số trong đoạn so sánh/sản phẩm liên quan.

Các thẻ có `data-lens` khác với lens nguồn trong 04 (chỉ xét thẻ trùng URL với preview): `/bi-led-aes-sv-turbo-s-2026` (v2 1.8 / nguồn "trống"); `/bi-led-aes-sv-turbo` (v2 3.0 / nguồn "trống"); `/module-bi-led-x-light-f-pro-mini` (v2 1.5 / nguồn "trống"); `/bi-led-xlight-x5-ultra` (v2 3.0 / nguồn "trống"); `/bi-led-titan-moto-cb150-pro-square` (v2 3.0 / nguồn "trống"); `/bi-led-aes-ev2-square` (v2 2.0 / nguồn "trống"); `/module-bi-led-mini-henvvei-h2-pro` (v2 1.7 / nguồn "trống"); `/module-bi-led-mini-henvvei-h1-pro` (v2 1.7 / nguồn "trống"); `/module-bi-led-mini-x-light-f-pro-special-5000k` (v2 1.8 / nguồn "trống"); `/module-bi-led-mini-x-light-f-max` (v2 1.8 / nguồn "trống"); `/module-bi-led-mini-x-light-f-pro-nhiet-mau-5000k` (v2 1.8 / nguồn "AR"); `/module-bi-led-mini-x-light-f-pro` (v2 1.8 / nguồn "trống"); `/bi-laser-henvvei-l91-pro-2024` (v2 3.0 / nguồn "trống"); `/henvvei-l92-pro-2020` (v2 2.5 / nguồn "trống"); `/bi-laser-henvvei-l92-pro-new-2024` (v2 3.0 / nguồn "AR"); `/bi-laser-x-light-v20l-new-2024` (v2 3.0 / nguồn "AR"); `/bi-laser-x-light-f-ultra-mini` (v2 1.8 / nguồn "trống"); `/bi-laser-x-light-x6-pro` (v2 3.0 / nguồn "trống"); `/bi-laser-x-light-v20l-2023` (v2 3.0 / nguồn "AR"); `/bi-laser-red-turbo-9` (v2 3.0 / nguồn "AR"); `/bi-laser-fogway-gen-9` (v2 3.0 / nguồn "AR"); `/bi-laser-henvvei-l95-pro` (v2 2.5 / nguồn "trống"); `/bi-laser-titan-platinum-plus-nhiet-mau-5000k` (v2 3.0 / nguồn "trống"); `/bi-laser-titan-platinum-6-3-2022` (v2 3.0 / nguồn "AR"); `/bi-gam-gtr-g1-turbo` (v2 3.0 / nguồn "trống").

### R3-02 — Câu "giá thấp nhất" và 3 mẫu "lẻ" (C1)

Ghi chú dưới bảng nhóm trên v2 vẫn nói mốc giá là "mẫu có giá niêm yết thấp nhất trong từng nhóm", trong khi v2 có 3 mẫu Bi LED mang chữ "lẻ" rẻ hơn mốc 3,6 triệu:
- Bi LED Titan Moto Black Mini 2.0 Square (lẻ) — 1.700.000đ/bộ
- Bi LED Titan Moto Black Mini 2.0 inch (lẻ) — 1.700.000đ/bộ
- Bi LED Titan Black Mini 1.8 inch (lẻ) — 2.000.000đ/bộ

**Sửa:**
1. Ghi chú bảng đổi thành: *"Giá tham chiếu là giá niêm yết của mẫu được dẫn ở từng nhóm (theo trang sản phẩm), chưa gồm VAT, pát, dây và công lắp…"* — preview đã đổi câu này ngày 22/10/2026.
2. **Chủ quản xác nhận 22/10/2026: 3 mẫu "lẻ" là giá 1 đèn (lẻ).** Sửa đơn vị trên thẻ, modal và PDP từ `/bộ` thành **`/đèn`** (giá giữ nguyên 1.700.000đ / 1.700.000đ / 2.000.000đ). Không dùng 3 mẫu này làm mốc giá nhóm Bi LED (mốc nhóm tính theo bộ/cặp).
3. Nếu là mẫu dành cho xe máy (PDP mô tả xe máy): gắn cờ ứng dụng hoặc đưa ra nhóm riêng, không để chung mốc giá Bi LED ô tô.

### R3-03 — Canonical staging (triển khai)

v2 noindex nhưng canonical tự trỏ v2. Quy ước: **staging giữ noindex, canonical về production** `https://auto365.vn/nang-cap-anh-sang` (preview đang làm đúng). Đồng bộ cả @id/url trong graph và breadcrumb.

### R3-04 — Hồ sơ cùng bản 343/333 (U3)

`06_Doi_chieu_CMS_v2_voi_Master.csv` đã xuất lại theo đúng snapshot 343 thẻ: nhóm, thương hiệu, lens, điện áp, nhiệt màu, giá/đơn vị/VAT, cờ ngừng kinh doanh, có trong ItemList hay không, và cột "Cần xử lý". Cột "Thương hiệu/Lens 04" chỉ có giá trị với 125 thẻ trùng tập preview; các thẻ mới của v2 cần Kinh doanh/kỹ thuật xác nhận theo PDP.

**Người duyệt kỹ thuật tập đèn (343 thẻ): anh Nguyễn Quang Đạo** — chủ quản xác nhận 22/10/2026. Còn thiếu để đóng hẳn U3: xác nhận thương mại (giá/đơn vị/VAT) cho các thẻ mới ngoài 129 mẫu đã duyệt 10/10, và bảng lý do thay đổi so với tập 752 (19/10).

### Gợi ý nhỏ (không chặn)

- Hero: đặt điều kiện kiểm chóa/giắc/điện cạnh gợi ý thay bóng LED; tách bi gầm (mưa/sương) khỏi trợ sáng.
- Modal: tách "Điện áp hoạt động" (vd 12–16V) khỏi "Hệ điện xe phù hợp" (12V/24V).

---

## Bản AS19 — theo tái kiểm 19/10/2026 (lịch sử, reviewer đã xác nhận đóng ngày 22/10)



Ngày lập: 19/10/2026. Nguồn: DOM/JSON-LD của https://v2.auto365.vn/nang-cap-anh-sang (dateModified 2026-10-17T20:45:48+07:00, 125 thẻ, ItemList 123) và script trang `/page-asset/5585.js`. Bản preview (bản nguồn đã sửa đủ) để đối chiếu: https://preview-365group.pages.dev/nang-cap-anh-sang/.

Mỗi mục ghi: vị trí trên v2 → sửa cụ thể → cách kiểm đóng. Bảng dữ liệu chi tiết theo từng thẻ: `06_Doi_chieu_CMS_v2_voi_Master.csv`.

## AS19-01 — Finder → danh mục ra 0/0 (P1)

**Vị trí:** `/page-asset/5585.js`, handler `#recoAll`. Hiện tại handler chỉ đặt nhóm/giá/điện, không xoá ô `#q` và các bộ lọc `.pf-brand`, `.pf-lens`, `.pf-color`.

**Sửa:** thay dòng handler bằng:

```js
$('#recoAll').addEventListener('click', function(){
  closeDlg($('#recoDlg'));
  $('#q').value = '';
  $$('.pf-brand, .pf-lens, .pf-color, input[name=cat], input[name=volt]').forEach(function(i){ i.checked = false; });
  setCats(window.__recoCats || []);
  setPrice(window.__recoPrice || '');
  var v = $('#f-volt').value;
  $$('input[name=volt]').forEach(function(i){ i.checked = !!v && i.value === v; });
  reset();      // reset() phải đọc lại filter và đặt lại giới hạn hiển thị
  goCatalog();
});
```

**Kiểm đóng:** nhập "F+ Pro 5500" + chọn X-Light + 5500K → finder Đi phố / Bi LED / 6–10 triệu / 12V → "Xem tất cả" phải ra đúng tập khớp của bản v2 (hiện 6 mẫu), ô tìm rỗng. Thử thêm từ trạng thái sạch và một tổ hợp không có mẫu.

## AS19-02 — Bi LED Titan Black 2026: thương hiệu và nhiệt màu (P1)

**Vị trí:** dữ liệu sản phẩm (product_meta) của `/bi-led-titan-black-2026` → thẻ `article.product-card` (`data-brand`, `data-color`) và bảng so sánh.

**Sửa:**
- Thương hiệu: **X-Light** (chủ quản chốt 14/10/2026; PDP ghi X-Light). Giữ tên "Titan Black 2026".
- `data-color`: **"5200K,3000K"** (Cos 5200K, tâm Pha 3000K).
- Bảng so sánh: hàng Nhiệt màu hiển thị **"5200K / tâm Pha 3000K"** — lấy từ trường mô tả đầy đủ, không ghép từ `data-color`.

**Kiểm đóng:** thẻ, bộ lọc thương hiệu, bộ lọc 5200K và 3000K, modal so sánh, PDP đều khớp.

## AS19-03 — Chỉ mục nhiệt màu thiếu (P1)

**Vị trí:** sidebar nhiệt màu (`.pf-color`) và `data-color` của từng thẻ.

**Sửa:**
1. Sinh danh sách lựa chọn nhiệt màu từ dữ liệu thực; hiện thiếu **4500K, 5200K, 5800K, 6500K**. Đặt nhãn nhóm "Nhiệt màu (Cos hoặc tâm Pha)".
2. Bổ sung `data-color` cho **26 thẻ** có nhiệt màu trong nội dung/nguồn nhưng thiếu chỉ mục:

| URL | Tên | data-color hiện tại | Cần thêm |
| --- | --- | --- | --- |
| `/bi-led-titan-black-2026` | Bi LED Titan Black 2026 | 3000K | 5200K |
| `/bi-laser-henvvei-l92-pro-new-2024` | Bi Laser Henvvei L92 Pro (New 2024) | (rỗng) | 5200K |
| `/bi-gam-led-gtr-g1-pro` | BI GẦM LED GTR G1 PRO | (rỗng) | 3000K, 5500K |
| `/bi-gam-gtr-special-edition-150-plus` | BI GẦM GTR SPECIAL EDITION 150 PLUS | (rỗng) | 3000K |
| `/bong-led-x-light-v12-hyper-360` | Bóng LED X-Light V12 Hyper 360 | (rỗng) | 5800K |
| `/bong-led-naoevo-s9-pro-chan-9005` | Bóng LED X-Light S9 Pro chân 9005 | (rỗng) | 5800K |
| `/bong-led-naoevo-s9-pro-chan-h11` | Bóng LED X-Light S9 Pro chân H11 | (rỗng) | 5800K |
| `/bong-led-naoevo-s9-pro-chan-h7` | Bóng LED X-Light S9 Pro chân H7 | (rỗng) | 5800K |
| `/bong-led-naoevo-s9-pro-chan-h4` | Bóng LED X-Light S9 Pro chân H4 | (rỗng) | 5800K |
| `/bong-led-naoevo-s8-pro-chan-9005` | Bóng LED X-Light S8 Pro chân 9005 | (rỗng) | 5800K |
| `/bong-led-naoevo-s8-pro-chan-h11` | Bóng LED X-Light S8 Pro chân H11 | (rỗng) | 5800K |
| `/bong-led-naoevo-s8-pro-chan-h7` | Bóng LED X-Light S8 Pro chân H7 | (rỗng) | 5800K |
| `/bong-led-naoevo-s8-pro-chan-h4` | Bóng LED X-Light S8 Pro chân H4 | (rỗng) | 5800K |
| `/bong-led-naoevo-s6-pro-chan-9005` | Bóng LED X-Light S6 Pro chân 9005 | (rỗng) | 5800K |
| `/bong-led-naoevo-s6-pro-chan-h11` | Bóng LED X-Light S6 Pro chân H11 | (rỗng) | 5800K |
| `/bong-led-naoevo-s6-pro-chan-h7` | Bóng LED X-Light S6 Pro chân H7 | (rỗng) | 5800K |
| `/bong-led-naoevo-s6-pro-chan-h4` | Bóng LED X-Light S6 Pro chân H4 | (rỗng) | 5800K |
| `/bong-led-naoevo-s3-pro-chan-9005` | Bóng LED X-Light S3 Pro chân 9005 | (rỗng) | 5800K |
| `/bong-led-naoevo-s9-pro-chan-h1` | Bóng LED X-Light S9 Pro chân H1 | (rỗng) | 5800K |
| `/bong-led-naoevo-s8-pro-chan-h1` | Bóng LED X-Light S8 Pro chân H1 | (rỗng) | 5800K |
| `/bong-led-naoevo-s3-pro-chan-h11` | Bóng LED X-Light S3 Pro chân H11 | (rỗng) | 5800K |
| `/bong-led-naoevo-s3-pro-chan-h7` | Bóng LED X-Light S3 Pro chân H7 | (rỗng) | 5800K |
| `/bong-led-naoevo-s3-pro-chan-h4` | Bóng LED X-Light S3 Pro chân H4 | (rỗng) | 5800K |
| `/bong-led-naoevo-s3-pro-chan-h1` | Bóng LED X-Light S3 Pro chân H1 | (rỗng) | 5800K |
| `/bong-led-naoevo-s6-pro-chan-h1` | Bóng LED X-Light S6 Pro chân H1 | (rỗng) | 5800K |
| `/x-light-f30-ultra` | Đèn gầm dạng rời X-Light F30 Ultra | 5500K,3000K | 6500K |

**Kiểm đóng:** lọc 5200K / 5800K / 6500K ra đúng các mẫu trên; không còn thẻ có nhiệt màu nguồn mà thiếu chỉ mục (cột "Thiếu trong data-color" của 06 rỗng).

## AS19-04 — ItemList 123 / 125 thẻ (P2)

**Vị trí:** JSON-LD CollectionPage.mainEntity.

**Sửa:** sinh ItemList từ đúng tập thẻ hiển thị. Hiện thiếu 2 URL:
- `/bong-led-naoevo-s6-pro-chan-h1` — Bóng LED X-Light S6 Pro chân H1
- `/bong-led-s8-pro-4300k` — Bóng LED X-Light S8 Pro - nhiệt màu 4300K

`numberOfItems` = số phần tử thực (125, hoặc 129 nếu khôi phục 4 mẫu ở mục AS19-07).

## AS19-05 — Điểm neo (P2)

- Nút hero "Xem xe thực tế đã lắp": `href="#cases"` → **`href="#vehicle-cases"`** (id thực của khu case). Kiểm tiêu đề khu case không bị header cố định che (`scroll-margin-top`).
- Có **2 phần tử `id="cam-nang"`** (wrapper + section). Giữ một, đổi phần còn lại (vd `cam-nang-inner`).

## AS19-06 — Nhãn VAT khó đọc (P2)

**Vị trí:** `.product-vat` (hiện 10px, #999).

**Sửa:** `.product-vat{font-size:12.5px;color:#5f6368}` (preview đang dùng 12.5px). Kiểm desktop/mobile.

## AS19-07 — Hồ sơ cùng bản v2 (U3)

- Tập sản phẩm: v2 có **125** thẻ, preview/04 có **129**. Thiếu trên v2 (4):
  - `/bi-led-aes-f002-plus` — Bi LED AES F-002 Plus (Bi LED)
  - `/bi-led-aes-turbo-bm` — Bi LED AES Turbo BM (Bi LED)
  - `/bi-led-mini-titan-moto-f15-v2` — Bi LED Mini Titan Moto F-15 V2 (Bi LED Mini)
  - `/bi-gam-x-light-f10-hyper-20` — Bi gầm X-Light F10 Hyper 2.0 (Bi gầm)
- Không có thẻ nào chỉ có trên v2.
- Lệch thương hiệu so với 04: Bi LED Titan Black 2026 (v2: Titan, 04: X-Light).
- Lệch giá so với 04: không.
- **Quyết định cần chủ quản chốt:** khôi phục 4 mẫu cho bằng preview (129), hoặc ghi lý do bỏ và dùng 06 làm Master cho bản v2.
- Bảng đối chiếu từng thẻ: `06_Doi_chieu_CMS_v2_voi_Master.csv` (125 dòng v2 + 4 dòng thiếu).

## Cách nhanh nhất

Dựng lại hub v2 từ HTML preview mới nhất (đã sửa đủ AS19-01…06, 129 mẫu, ItemList 129, VAT 12.5px). Nếu sửa tay theo các mục trên, sau khi xong: cập nhật `dateModified` = ngày phát hành, giữ `lastReviewed` 2026-10-12, rồi gửi reviewer chấm lại trên v2.
