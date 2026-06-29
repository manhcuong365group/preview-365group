# LOCK & REPAIR — DANH SÁCH LỖI BẮT BUỘC FIX TRÊN LIVE

| | |
|---|---|
| **Trang** | https://auto365.vn/bao-chi-noi-ve-auto365-365group-3m-pro-shop |
| **Mã** | EH-AUTO365-2026 — Production Repair |
| **Ngày** | 25/06/2026 |
| **Trạng thái** | 🔴 **NOT APPROVED FOR PUBLIC GO-LIVE (pending verification) — LOCK & REPAIR** |
| **Điều kiện gỡ khóa** | Sửa sạch danh sách dưới đây + nộp bằng chứng mã ẩn (source HTML + Rich Results) → QC ký lượt cuối. |

> File này gộp toàn bộ lỗi còn mở trên bản live, thay cho các ghi chú rời. Team thực thi trực tiếp theo thứ tự bên dưới, không bỏ bước, không tự ý đổi thứ tự.

---

## 0. VIỆC SỐ 0 — KIỂM TRA TRẠNG THÁI INDEX THEO TÌNH HUỐNG PHÁT HÀNH

Bản fetch (một lần chụp) cho thấy `meta-robots: index, follow`. Dev xác nhận lại trạng thái thật, rồi xử theo tình huống:

- [ ] **Nếu trang CHƯA được phê duyệt go-live / đang giai đoạn QA:** chuyển tạm sang `noindex, nofollow` cho tới khi QC ký. Lý do: chừng nào còn mở index, Google có thể cào và cache đúng bản đang lỗi (gồm meta "uy tín/xác thực").
- [ ] **Nếu trang ĐÃ phát hành chính thức:** cân nhắc sửa trực tiếp, đánh giá rủi ro trước khi đổi robots (chuyển `noindex` giữa chừng có thể gián đoạn quá trình index đang chạy).
- [ ] Dù chọn hướng nào, ghi rõ quyết định và lý do vào báo cáo gate để QC đối chiếu.

---

## 1. 🔴 HAI BLOCKER HIỂN THỊ — DIỆT NGAY

### Blocker 1 — Band thống kê số 2 còn cụm "URL nghiệm thu"
- **Vị trí:** khối "15+ Bài báo & Phóng sự" (band thứ hai dưới Hero).
- **Lỗi:** còn sót cụm nội bộ *"đã có URL nghiệm thu"* + *"bổ trợ"* (Hero trên cùng đã sửa, band này bị sót — lỗi "sửa một sót hai").
- **Lệnh sửa (Content):** thay nguyên câu thành:
  > "Tổng hợp tư liệu từ báo chí, trang tin và diễn đàn chuyên ngành có nguồn tham chiếu công khai, kèm tư liệu video sự kiện phục vụ minh họa."

### Blocker 2 — Author link thiếu `/tac-gia/` (cả 3 vị trí)
- **Vị trí:** (1) tên tác giả, (2) nút "Xem hồ sơ chuyên môn", (3) link trong khối "Mọi người cùng tìm kiếm".
- **Lỗi:** cả 3 đang trỏ `auto365.vn/dang-minh-hoang` — thiếu `/tac-gia/`, đứt cross-link với schema `author.@id`.
- **Lệnh sửa (Dev):** sửa trực tiếp `href` cả 3 về Canonical sạch, trỏ thẳng (không qua redirect):
  > `https://auto365.vn/tac-gia/dang-minh-hoang`

---

## 2. 🔴 LỚP META CÔNG KHAI — GỌT CLAIM

Đây là dòng Google + Facebook đọc khi hiển thị/preview. Bản fetch cho thấy thẻ mô tả đang mang claim tự phong — Dev xác nhận lại trên source thật, nếu đúng thì gọt:

- [ ] **Kiểm tra và bỏ "uy tín"** khỏi `meta-description`, `og:description`, `twitter:description` (bản fetch ghi "…thông tin minh bạch, uy tín về hệ thống Auto365").
- [ ] **Kiểm tra và đổi "được xác thực bởi chuyên gia Đặng Minh Hoàng" → "được tổng hợp bởi…"** ở cả meta và schema, cho khớp vai thật ghi trên trang ("Người tổng hợp dữ liệu"). Không để meta nói mạnh hơn visible.

---

## 3. 🟡 BỐN LỖI MÂU THUẪN DỮ LIỆU — ĐỒNG BỘ THỰC THỂ

3. **2sao (bài 13) — sai chính tả tiêu đề.** Sửa "Người **mê** chăm chút" → "Người **mẹ** chăm chút" (khớp bài gốc + khớp schema, triệt lệch Parity visible ≠ schema).
4. **Nút "Tìm hiểu 3M Pro Shop"** đang trỏ trần về homepage `auto365.vn`. Đổi trỏ đúng URL trang chuyên đề 3M Pro Shop.
5. **Gom một đích phim cách nhiệt.** Đoạn "Vì sao Auto365…" đang trỏ generic `/phim-cach-nhiet`. Xóa link generic; gom toàn bộ text + CTA mảng phim cách nhiệt về một đích duy nhất: `/phim-cach-nhiet-o-to-3m-ceramic-hybrid` (theo Hướng 2 đã chốt).
6. **Thống nhất "hơn 90".** Trang đang có 2 biến thể: "hơn 90 điểm" và "hơn 90 trung tâm". Đưa hết về một câu chữ duy nhất: **"hơn 90 điểm trên toàn quốc"** (Intro, bảng thực thể, Evidence Matrix, FAQ A2). Lưu ý: số 90 phải khớp số liệu nội bộ đã chốt trước khi gỡ khóa.

---

## 4. 🔒 KIỂM TOÁN MÃ ẨN — DEV BẮT BUỘC NỘP BẰNG CHỨNG

Không nghiệm thu mù lớp header/JSON-LD ẩn. Dev chạy trên đúng URL live và chụp bằng chứng (source HTML bôi dòng code + ảnh Rich Results):

- [ ] **Meta Robots:** xác nhận đã chuyển sang **`noindex`** trong thời gian repair (KHÔNG để index khi chưa ký).
- [ ] **Meta/OG/Twitter:** đã gọt sạch "uy tín", "hàng đầu" và mọi từ tự phong khỏi thẻ mô tả.
- [ ] **Rich Results (báo xanh):** chụp màn hình chứng minh:
  - `Product.@id` → trỏ về **URL tồn tại**: `https://auto365.vn/phim-cach-nhiet-o-to-3m-ceramic-hybrid/#product` (KHÔNG để `…ceramic-nr` vì slug NR không tồn tại trên site → broken reference). Dùng `@id`, không phải `id`.
  - `author.@id` → `https://auto365.vn/tac-gia/dang-minh-hoang/#person`, khớp đúng href visible đã sửa ở Blocker 2.
  - Node bài số 3 (Tinh Tế) là `CreativeWork`, không phải `NewsArticle`.

---

## 5. CHẠY LẠI 7 GATE + KÝ LƯỢT CUỐI

Sau khi sửa sạch mục 0–4, chạy lại đủ **7 Hard Gates** trên URL live, gửi báo cáo kèm bằng chứng về QC.

**Hai dòng QC soi đầu tiên — thiếu là chưa ký:**
1. `meta-robots` đã đóng đúng trạng thái (`noindex` khi repair / chỉ `index` sau khi ký).
2. `Product.@id` trỏ vào URL **tồn tại** (hybrid), không phải URL NR ảo.

Kèm Gate 1: xác nhận link sống thật cho 15 báo (đặc biệt Kinh tế & Đời sống đã hết `sm-pro-shop`), và tiêu đề Tintuconline đối chiếu bài gốc.

---

### 🚨 PHÁN QUYẾT
🔴 **NOT APPROVED FOR PUBLIC GO-LIVE (pending verification).** Một số mục còn là giả thuyết cần Dev xác minh bằng source HTML / Rich Results (meta-robots, `Product.@id`, `author.@id`) — chưa chứng minh được chỉ từ nội dung hiển thị. Hệ thống ở trạng thái LOCK & REPAIR. Cổng Indexing và mọi chiến dịch truyền thông không được kích hoạt cho đến khi danh sách trên sạch và có ảnh Rich Results hợp lệ đặt lên bàn nghiệm thu.
