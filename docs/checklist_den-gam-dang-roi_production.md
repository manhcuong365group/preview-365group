# Checklist trước khi GO production — Hub Đèn gầm dạng rời

Nguồn: feedback review 15/08/2026 (điểm 8,1/10 — Production HOLD). Các mục dưới đây nằm ngoài phạm vi file `auto365/den-gam-dang-roi/index.html` trong repo preview, cần người phụ trách tương ứng xử lý ở production trước khi bỏ `noindex`.

## 🔴 P0 — Chặn production, phải xong trước

- [ ] **Honeypot form trên trang SKU** — kiểm tra trường "Website" ẩn trong form đặt lịch ở các trang SKU (m10-v3, f30, m30-ultra, m30v2, m40) có bị lộ ra ngoài không (đã kiểm tra riêng: trang Hub này **không** bị lỗi này, dùng đúng kỹ thuật `.sr-only`). Nếu lộ, khách điền vào sẽ khiến form bị JS chặn gửi âm thầm, không báo lỗi → mất lead thật.
- [ ] **Chốt SSOT giá 5 SKU** — Hub hiện ghi 2.000.000–6.500.000đ (14/08/2026). Bài giá nguồn đang ghi 1,2–5,5 triệu ("mức cao nhất hiện là 5,5 triệu"). Cập nhật bài giá khớp Hub, hoặc xác nhận Hub sai và sửa lại.
- [ ] **Chốt tên thương hiệu M40** — Hub ghi "Titan M40 Ultra V2" (brand: Titan), trang SKU M40 ghi brand "Titan Moto". Xác nhận tên chính thức với đội sản phẩm, sửa bên sai.
- [ ] **Nội dung pháp lý trang SKU M40** — đang viết "hoàn toàn không bị xử phạt" (khẳng định tuyệt đối), trái với văn phong có điều kiện của Hub. Viết lại theo hướng có điều kiện.
- [ ] **Ngày rà soát bài pháp lý chuyên sâu** — đang ghi "sẽ rà soát từ 15/08/2026" trong khi Nghị định 238/2026/NĐ-CP đã có hiệu lực đúng ngày đó. Cập nhật nội dung + `dateModified` theo Cổng thông tin Chính phủ.
- [ ] **URL cạnh tranh "Đèn gầm dạng rời là gì?..."** — đang index riêng, tranh intent broad với Hub, chứa các claim rủi ro ("bảo toàn 100% zin", "không để lại dấu vết", IP68 "hoàn toàn không ảnh hưởng"). Khuyến nghị: 301 redirect gộp về Hub. Nếu giữ URL, phải viết lại toàn bộ claim tuyệt đối + thêm contextual link mạnh về Hub.

## 🟠 P1 — Nên xử lý trước khi công bố rộng

- [ ] **Ảnh chưa có srcset/sizes** — 13 ảnh gốc ~2000×2000px chỉ hiển thị ~220–300px trên card. Cần bật resize-on-the-fly ở CDN `auto365.vn/uploads/...` hoặc tạo sẵn bản ảnh nhỏ.
- [ ] **Beam Lab đo thật** — trước khi khẳng định mạnh "M30 phù hợp mưa/sương" hay "M40 tốt cho đèo tối", nên có số đo thực tế cùng điều kiện thay vì chỉ dựa vào thông số hãng.
- [ ] **Backlink nội bộ về Hub** — thêm contextual link từ bài giá, bài pháp lý, các trang SKU và case về lại Hub (`/den-gam-dang-roi`), tránh tình trạng Hub chỉ tự trỏ về chính nó.

## 🚀 Gate deploy production

- [ ] Deploy đè đúng URL `/den-gam-dang-roi` hiện tại, **không tạo URL mới**.
- [ ] Bỏ `noindex,nofollow` khi chính thức lên production (hiện đang đúng cho môi trường preview).
- [ ] Giữ self-canonical, cập nhật `lastmod` trong sitemap.
- [ ] Merge (không dán chồng) schema JSON-LD mà CMS production tự sinh (WebSite, Organization, Breadcrumb, CollectionPage/Product) với schema đã có trong Hub.
- [ ] `robots.txt` production đang chặn `/uploads/` — cần mở để Googlebot-Image thu thập được ảnh.
- [ ] Test E2E thật: API → `lead_id` → CRM, cơ chế chống lead trùng.
- [ ] Test hình ảnh/carousel trên thiết bị mobile vật lý (không chỉ giả lập kích thước màn hình).

---

## ✅ Đã xử lý xong trong trang Hub (index.html)

Tham khảo — không cần làm lại:

- 2 lỗi chặn publish gốc (filter sản phẩm, selector/fitment desync)
- Case list schema 10/10, breadcrumb schema khớp, FAQ HTML/schema đồng bộ
- Khôi phục khối "4 tình huống" tĩnh cho AEO
- Khóa đơn vị + VAT cho cả 5 SKU
- Touch target ≥44px toàn bộ (chip lọc, checkbox so sánh, nút lọc case, catalog card)
- Dòng "Kéo ngang để xem" hiển thị đúng ở mọi kích thước màn hình
- Giá đơn vị hiển thị ngay trên card danh mục
- Gợi ý sản phẩm nâng cấp (upsell card) trong kết quả bộ chọn
- Build marker phục hồi để truy vết release
