# Yêu cầu CMS/SEO — Bi LED (14/10/2026)

**Người gửi:** Team Content Auto365 · **Liên quan:** hub [Bi LED ô tô](https://auto365.vn/nang-cap-anh-sang-bi-led) (bản preview: https://preview-365group.pages.dev/nang-cap-anh-sang-bi-led/)
**Người nhận:** CMS / SEO · **Ưu tiên:** trước khi đưa hub Bi LED mới lên production · **Trạng thái:** đã xong cả 2 việc (17/10/2026)

---

## Việc 1 — Chuẩn hoá tên sản phẩm bi LED ✅ ĐÃ XONG (14/10/2026)

CMS đã đổi tên trên trang sản phẩm; đối chiếu danh mục auto365.vn ngày 14/10/2026 không còn tên viết HOA toàn bộ. Hub Bi LED đã đồng bộ 96 tên (card, alt, so sánh, bảng thông số, schema, Master Data 04).

---

## Việc 2 — Xử lý 3 bài blog bảng giá bi LED cũ (trùng từ khoá với hub) ✅ ĐÃ XONG (17/10/2026) — cả 3 URL trả 301 → /nang-cap-anh-sang-bi-led (200), kiểm tra bằng curl 17/10

**Vì sao:** 3 bài dưới cùng nhắm "giá độ đèn bi LED", giá đã cũ theo tháng. Hub Bi LED đã có giá hiện hành của 106 mẫu, phân khúc giá và chi phí lắp. Để song song thì Google/AI phải chọn giữa 4 trang cho cùng một câu hỏi và có thể dẫn khách tới giá sai.

| URL cũ | Thời điểm giá | Đề xuất | URL đích |
| --- | --- | --- | --- |
| https://auto365.vn/bang-gia-do-den-bi-led | 11/2024 | 301 | https://auto365.vn/nang-cap-anh-sang-bi-led |
| https://auto365.vn/bang-gia-do-den-bi-led-o-to-thang-6 | 6/2025 | 301 | https://auto365.vn/nang-cap-anh-sang-bi-led |
| https://auto365.vn/bang-gia-do-den-xe-bi-led-o-to-thang-1-2026 | 1/2026 | 301 | https://auto365.vn/nang-cap-anh-sang-bi-led |

**Các bước:**
1. **Kiểm trước (SEO):** trên Search Console xem 3 URL có lượt nhấp/hiển thị đáng kể hoặc backlink không. Nếu bài nào có nội dung riêng hub chưa có (ảnh xe, ví dụ báo giá trọn gói…), gửi Team Content để đưa phần đó vào hub trước.
2. **Đặt redirect 301** cho 3 URL → hub Bi LED (không dùng 302, không trỏ về trang chủ).
3. **Sửa link nội bộ** đang trỏ tới 3 URL (bài viết, menu, footer, sidebar "Bài viết liên quan") → trỏ thẳng hub Bi LED, tránh đi qua redirect.
4. **Gỡ 3 URL khỏi sitemap**; giữ hub trong sitemap.
5. **Không tạo thêm** bài "bảng giá tháng X" mới — cập nhật giá trên hub.
6. **Kiểm sau:** 3 URL trả 301 một bước về hub (không chuỗi redirect); hub trả 200; URL Inspection trên Search Console cho hub.

**Phương án thay thế** (nếu team muốn giữ 1 bài blog giá để đăng tin): giữ bài 1/2026, đổi thành bài không gắn tháng, đoạn đầu dẫn "xem giá hiện hành tại hub Bi LED"; 2 bài còn lại vẫn 301. Cách này vẫn trùng từ khoá một phần — khuyến nghị 301 cả 3.

---

## Xác nhận hoàn thành

| Việc | Người làm | Ngày | Ghi chú |
| --- | --- | --- | --- |
| 1. Đổi tên sản phẩm | CMS | 14/10/2026 | Đã xong, hub đã đồng bộ |
| 2a. Kiểm GSC/backlink 3 bài | | | |
| 2b. Redirect 301 + sửa link nội bộ + sitemap | | | |
