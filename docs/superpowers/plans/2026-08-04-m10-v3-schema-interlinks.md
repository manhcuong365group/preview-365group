# M10 Ultra V3 Schema & Internal Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Chuyển schema M10 Ultra V3 về một sản phẩm và thêm các liên kết nội bộ Auto365 đúng ngữ cảnh mà không thay đổi 10 FAQ.

**Architecture:** Trang là một HTML content block cho CMS, toàn bộ thay đổi nằm trong `auto365/m10-v3/index.html`. Kiểm tra hồi quy dùng script PowerShell đọc nội dung tệp, trích JSON-LD Product và xác nhận các liên kết, FAQ bắt buộc.

**Tech Stack:** HTML, CSS nội tuyến, JSON-LD Schema.org, PowerShell 5+.

## Global Constraints

- Chỉ sửa `auto365/m10-v3/index.html` và kiểm tra mới dành cho M10 V3.
- Giữ nguyên 10 câu hỏi FAQ và phần trả lời hiện có.
- M10 Ultra V3 là đèn gầm dạng rời, đang bán với trạng thái `InStock`.
- Không thêm SKU, `ProductGroup` hoặc `hasVariant` khi chưa có SKU/URL/ảnh riêng.
- Không gắn liên kết cho Huỳnh Minh Tuấn vì chưa có trang hồ sơ được cung cấp.

---

### Task 1: Viết kiểm tra hồi quy nội dung M10 V3

**Files:**
- Create: `auto365/m10-v3/tests/verify-content.ps1`
- Test: `auto365/m10-v3/tests/verify-content.ps1`

**Interfaces:**
- Consumes: `auto365/m10-v3/index.html` dưới dạng UTF-8.
- Produces: mã thoát `0` khi mọi điều kiện đúng; ném lỗi có thông điệp cụ thể khi sai.

- [ ] **Step 1: Viết kiểm tra đang thất bại cho schema và các liên kết cần có**

```powershell
$page = Get-Content -LiteralPath (Join-Path $PSScriptRoot '..\index.html') -Raw -Encoding UTF8
if ($page -notmatch '"@type":"Product"') { throw 'Expected Product JSON-LD.' }
if ($page -match '"@type":"ProductGroup"|"hasVariant"') { throw 'ProductGroup and hasVariant must not remain.' }
if ($page -notmatch 'https://auto365\.vn/den-gam-dang-roi') { throw 'Missing category interlink.' }
if ($page -notmatch 'https://auto365\.vn/den-tro-sang-titan-moto-m10-ultra') { throw 'Missing M10 family interlink.' }
if ($page -notmatch 'https://auto365\.vn/den-tro-sang-m10-ultra-v2') { throw 'Missing M10 V2 interlink.' }
if ($page -notmatch 'https://auto365\.vn/tac-gia/nguyen-quang-dao') { throw 'Missing author profile interlink.' }
if ($page -notmatch 'https://auto365\.vn/den-gam-dang-roi-o-to-gia-bao-nhieu') { throw 'Missing explainer interlink.' }
if (([regex]::Matches($page, '<details><summary>Câu hỏi [0-9]+:')).Count -ne 10) { throw 'FAQ count must remain 10.' }
```

- [ ] **Step 2: Chạy kiểm tra để xác nhận đang thất bại**

Run: `powershell -ExecutionPolicy Bypass -File auto365/m10-v3/tests/verify-content.ps1`

Expected: FAIL với `Expected Product JSON-LD.` hoặc `ProductGroup and hasVariant must not remain.`

- [ ] **Step 3: Commit kiểm tra hồi quy**

```bash
git add auto365/m10-v3/tests/verify-content.ps1
git commit -m "test: cover M10 v3 schema and interlinks"
```

### Task 2: Chuẩn hóa Product JSON-LD

**Files:**
- Modify: `auto365/m10-v3/index.html:272-295`
- Test: `auto365/m10-v3/tests/verify-content.ps1`

**Interfaces:**
- Consumes: Product JSON-LD hiện có giá 2.000.000 VNĐ/cặp, trạng thái `InStock`.
- Produces: Một JSON-LD `Product` hợp lệ; nhiệt màu là `additionalProperty` có giá trị `5500K/5500K hoặc 5500K/3000K`.

- [ ] **Step 1: Giữ kiểm tra Task 1 ở trạng thái thất bại**

Run: `powershell -ExecutionPolicy Bypass -File auto365/m10-v3/tests/verify-content.ps1`

Expected: FAIL do `ProductGroup` hoặc `hasVariant` vẫn có trong JSON-LD.

- [ ] **Step 2: Đổi JSON-LD thành một Product tối thiểu**

```json
{
  "@context":"https://schema.org",
  "@type":"Product",
  "name":"Đèn gầm dạng rời Titan Moto M10 Ultra V3",
  "additionalProperty":[
    {"@type":"PropertyValue","name":"Nhiệt màu","value":"5500K/5500K hoặc 5500K/3000K"}
  ],
  "offers":{"@type":"Offer","priceCurrency":"VND","price":"2000000","availability":"https://schema.org/InStock","url":"https://auto365.vn/den-gam-dang-roi-titan-moto-m10-ultra-v3"}
}
```

Xóa toàn bộ mảng `hasVariant`; giữ các thuộc tính công suất, IP68, điện áp và bảo hành hiện có.

- [ ] **Step 3: Chạy kiểm tra để xác nhận phần schema qua**

Run: `powershell -ExecutionPolicy Bypass -File auto365/m10-v3/tests/verify-content.ps1`

Expected: chỉ còn lỗi liên kết chưa được thêm.

- [ ] **Step 4: Commit schema**

```bash
git add auto365/m10-v3/index.html
git commit -m "fix: model M10 v3 as a single product"
```

### Task 3: Thêm cụm liên kết nội bộ có ngữ cảnh

**Files:**
- Modify: `auto365/m10-v3/index.html:14, sau phần trả lời nhanh và trước phần nguồn`
- Modify: `auto365/m10-v3/index.html:4-10` (CSS cho cụm liên kết)
- Test: `auto365/m10-v3/tests/verify-content.ps1`

**Interfaces:**
- Consumes: Năm URL Auto365 được người dùng xác nhận.
- Produces: Một khu vực “Tìm hiểu thêm” có năm liên kết rõ mục đích và một breadcrumb giữ link danh mục.

- [ ] **Step 1: Giữ kiểm tra Task 1 ở trạng thái thất bại do liên kết thiếu**

Run: `powershell -ExecutionPolicy Bypass -File auto365/m10-v3/tests/verify-content.ps1`

Expected: FAIL với một trong các thông điệp `Missing ... interlink.`

- [ ] **Step 2: Thêm cụm liên kết sau phần trả lời nhanh**

```html
<aside class="related-links" aria-label="Nội dung liên quan">
  <strong>Tìm hiểu thêm</strong>
  <a href="https://auto365.vn/den-gam-dang-roi">Đèn gầm dạng rời</a>
  <a href="https://auto365.vn/den-tro-sang-titan-moto-m10-ultra">Dòng đèn trợ sáng Titan Moto M10 Ultra</a>
  <a href="https://auto365.vn/den-tro-sang-m10-ultra-v2">Tham khảo M10 Ultra V2</a>
  <a href="https://auto365.vn/den-gam-dang-roi-o-to-gia-bao-nhieu">Đèn gầm dạng rời ô tô giá bao nhiêu?</a>
  <a href="https://auto365.vn/tac-gia/nguyen-quang-dao">Thông tin tác giả Nguyễn Quang Đạo</a>
</aside>
```

Thêm CSS gọn cho `.related-links` để các đường dẫn tự xuống dòng ở màn hình nhỏ, không tạo thanh cuộn ngang và không dùng lời khẳng định rằng Nguyễn Quang Đạo là người biên soạn trang này.

- [ ] **Step 3: Chạy kiểm tra hồi quy hoàn chỉnh**

Run: `powershell -ExecutionPolicy Bypass -File auto365/m10-v3/tests/verify-content.ps1`

Expected: PASS.

- [ ] **Step 4: Kiểm tra JSON-LD có thể đọc được**

```powershell
$page = Get-Content -LiteralPath auto365/m10-v3/index.html -Raw -Encoding UTF8
$productBlock = [regex]::Match($page, '<script type="application/ld\+json">\s*(\{[\s\S]*?\})\s*</script>')
$productBlock.Success | Should -BeTrue
$productBlock.Groups[1].Value | ConvertFrom-Json | Out-Null
```

Run đoạn lệnh này trong PowerShell; Expected: không lỗi chuyển đổi JSON.

- [ ] **Step 5: Commit thay đổi nội dung và giao diện**

```bash
git add auto365/m10-v3/index.html auto365/m10-v3/tests/verify-content.ps1
git commit -m "feat: add verified M10 v3 internal links"
```

### Task 4: Xác minh hiển thị và bàn giao

**Files:**
- Verify: `auto365/m10-v3/index.html`
- Verify: `auto365/m10-v3/tests/verify-content.ps1`

**Interfaces:**
- Consumes: bản đã qua kiểm tra tự động.
- Produces: danh sách liên kết đã chèn và các đề xuất cần URL bổ sung.

- [ ] **Step 1: Mở bản xem trước desktop và mobile**

Kiểm tra cụm “Tìm hiểu thêm” không che nội dung, mỗi link dễ bấm và không tạo cuộn ngang trên màn hình 375px.

- [ ] **Step 2: Chạy kiểm tra lần cuối**

Run: `powershell -ExecutionPolicy Bypass -File auto365/m10-v3/tests/verify-content.ps1`

Expected: PASS.

- [ ] **Step 3: Báo cáo liên kết đã chèn**

Liệt kê đủ năm URL Auto365 đã có trong trang và nêu rõ các loại link chỉ nên bổ sung khi có URL chính thức: bảo hành, pháp lý/đăng kiểm, chi nhánh, hồ sơ Huỳnh Minh Tuấn.

- [ ] **Step 4: Commit xác minh nếu có thay đổi cần thiết**

```bash
git status --short
```

Chỉ commit nếu bước xác minh yêu cầu chỉnh sửa `auto365/m10-v3/index.html` hoặc `auto365/m10-v3/tests/verify-content.ps1`.

## Self-review

- Spec coverage: Task 2 xử lý Product schema; Task 3 sử dụng đủ năm URL người dùng cung cấp; Task 1 và 3 bảo vệ đủ 10 FAQ; Task 4 kiểm tra giao diện và bàn giao.
- Placeholder scan: không có chỗ trống cần hoàn thiện hoặc chỉ dẫn bỏ ngỏ.
- Consistency: Mọi kiểm tra đều dùng `auto365/m10-v3/index.html`; các URL được kiểm tra ở Task 1 là các URL được chèn ở Task 3.
