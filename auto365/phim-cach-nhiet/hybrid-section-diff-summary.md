# Hybrid Section Diff Summary

Báo cáo chi tiết quá trình tách biệt 2 phiên bản Trust Block cho trang Hub và trang Money Page.

### 1. Phân tích trạng thái

- **File đã bị sửa:** `phim-cach-nhiet-o-to-3m-ceramic-hybrid/index.html`
- **Section bị sửa:** H2 "Bảo hành, địa chỉ dán phim cách nhiệt 3M Ceramic NR và quy trình thi công tại Auto365".
- **Tình trạng:** Việc tách biệt đã tạo ra 2 version cụ thể để phục vụ đúng Intent của từng loại trang.

### 2. Hai phiên bản đã tạo

**A. Version dùng cho trang Hub (`phim-cach-nhiet/trust-block-hub-version.html`)**
- H2 đổi thành diện rộng: "Quy trình dán phim cách nhiệt, bảo hành và địa chỉ thi công tại Auto365".
- H3 địa chỉ là: "Hệ thống địa chỉ thi công tại Auto365".
- Không có wording quá riêng rẽ về Ceramic NR. Phù hợp để nhúng vào Hub `/phim-cach-nhiet`.
- Bảng quy trình: Caption và nội dung đã chuyển sang chung cho ô tô.

**B. Version dùng cho trang Money Page (`phim-cach-nhiet/trust-block-3m-ceramic-nr-version.html`)**
- H2 bảo toàn intent Money Page: "Bảo hành, địa chỉ dán phim cách nhiệt 3M Ceramic NR và quy trình thi công tại Auto365".
- Bảng quy trình giữ nguyên việc phân tích các mã NR.
- Wording bảo hành đã được cập nhật thành cấu trúc an toàn nhưng vẫn bám sát sản phẩm.
- Không còn cụm claim cấm.

### 3. Đánh giá tác động lên trang Ceramic Hybrid
- H1 còn chứa intent 3M Ceramic Hybrid / Ceramic NR.
- H2 section bảo hành vẫn phù hợp Money Page, không quá generic.
- Bảng quy trình còn đủ 8 bước.
- Không còn cụm claim cấm.
- Schema, internal link và H1/H2 chính của trang bán hàng chưa bị chủ động thay đổi trong phạm vi refactor section này. Cần kiểm tra lại bằng diff và staging trước khi publish.

### KẾT LUẬN
**PASS FOR REVIEW / READY FOR STAGING TEST**
(Chưa publish production. Không báo READY PRODUCTION nếu chưa test trên URL staging thật).
