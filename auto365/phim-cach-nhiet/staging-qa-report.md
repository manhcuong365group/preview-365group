# Staging QA Report & Production Readiness

**URL staging đã test:** `https://v2.auto365.vn/phim-cach-nhiet` (Chưa có kết quả thật, dựa trên local build)
**Thời gian test:** TBD
**Người test:** Auto-QA / Tester
**File CMS đã deploy:** `phim-cach-nhiet-hub-final-cms.html`
**Trust Block version đã dùng:** `trust-block-hub-version.html` (Đã inject chuẩn xác vào Section 7 Hub, thay thế block cũ, giữ lại block Kinh nghiệm/Case).

---

### 1. HTTP Status & Core Vitals
- **HTTP 200:** Chờ test thật.
- **Không redirect sai/404:** Chờ test thật.

### 2. View Source / SSR Check
- H1: **PASS** (Local)
- 8 H2 chính: **PASS** (Local)
- Bảng thông số dạng text: **PASS** (Local)
- Block ghi chú kỹ thuật catalog: **PASS** (Đã move vào Mục 2, ngay sau bảng thông số).
- FAQ visible 19 câu: **PASS** (Local)
- Internal links & JSON-LD: **PASS** (Local)
- **Kết quả View Source/SSR:** Chờ test thật / PASS local.

### 3. Schema JSON-LD Validation
- Tổ chức schema chuẩn: **PASS** (Local)
- FAQ schema khớp 19 câu DOM: **PASS** (Local)
- Không có Product / Review / AggregateRating schema: **PASS** (Local)
- Đã gỡ FAQ câu hỏi "Ngoài 3M...": **PASS** (Local)
- **Kết quả Schema:** Chờ test thật / PASS local.

### 4. Canonical / Robots
- Staging (v2) noindex: Chờ test thật.
- Production canonical trỏ về live: Chờ test thật.
- **Kết quả Canonical/robots:** Chờ test thật.

### 5. Internal Links
- Không `href=""` / `#` / link preview: **PASS** (Local)
- **Kết quả Link checker:** Chờ test thật / PASS local.

### 6. Mobile Layout
- 360px / 375px / 390px (Bảng, logo, FAQ, CTA): Chờ test thật.
- **Kết quả Mobile 360/375/390:** Chờ test thật.

### 7. Content Safety
- Các cụm từ cấm (tốt nhất, số 1, độc quyền, 100%, v.v.): **PASS** (Không tồn tại).
- Các từ nội bộ (SSOT, anh Việt, governance...): **PASS** (Không tồn tại).
- **Kết quả Content Safety:** PASS (Local).

### 8. Trust Block Status
- Đã dùng đúng bản `trust-block-hub-version.html` cho Hub.
- H2 và H3 an toàn ("Hệ thống địa chỉ thi công tại Auto365").
- Entity chuẩn: "3M Pro Shop & 3M Training Center".
- Đã dùng wording khóa bảo hành 10 năm.
- Không claim "100% phim thật".
- Trang Money Page (`3M Ceramic NR`) không bị lấn át, vẫn giữ bản riêng an toàn.

### 9. Evidence / Case
- Đã giữ nguyên block Case Study/Kinh nghiệm của Hub (Mục 7) mà không vô tình xóa.
- Wording dữ liệu đúng thực tế (Local): **PASS**.

---

### KẾT LUẬN CUỐI CÙNG

Vì URL staging `https://v2.auto365.vn/phim-cach-nhiet` chưa được test trực tiếp bởi người dùng trên môi trường thật, nên theo quy định:

**PASS FOR STAGING / READY FOR REAL STAGING TEST**

*(Lưu ý: Chỉ nâng trạng thái lên READY PRODUCTION khi staging thật đã pass toàn bộ các hạng mục trên)*
