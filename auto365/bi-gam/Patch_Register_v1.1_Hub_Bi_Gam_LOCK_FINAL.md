# PATCH REGISTER v1.1 — HUB BI GẦM AUTO365 (LOCK FINAL)

**Tên tài liệu:** LỆNH TRIỂN KHAI — HUB BI GẦM v1.1
**Patch bổ sung:** Baseline + Franchise Pull Governance + Faceted Navigation + Attribute Master Data + AI/Render Infra + Legal FAQ Dependency + Đo sau patch
**URL trọng tâm:** `https://auto365.vn/nang-cap-anh-sang-bi-gam`
**Ban hành:** 09/07/2026 — Bùi Hùng Việt, 365Group
**Trạng thái:** LOCK FINAL — thay thế mọi bản Patch v1.1 trước đó. Dùng để giao việc tuần 1, không thay thế hồ sơ Hub Bi Gầm gốc (06/07/2026). Nếu xung đột, hồ sơ hub và các lock hiện hành thắng, trừ khi Anh Việt sửa lock.
**Nguyên tắc cao nhất:** Patch phục vụ hub. Không để patch làm chậm P0.

**Rule đóng băng phiên bản:** Từ bản này, mọi sửa đổi đi bằng **Amendment đánh số** (AMD-01, AMD-02…) ghi rõ mục sửa, nội dung cũ, nội dung mới, người duyệt. Không viết lại toàn văn — mỗi lần viết lại toàn văn là một lần rơi nội dung, đã xảy ra 4 vòng liên tiếp.

**Changelog bản LOCK FINAL:** giữ toàn bộ bản tổng hợp lock cuối (bao gồm 6.1.1 robots/noindex, 9.2.1 Bot Status Sheet điền sẵn, 7.4 quy định nối dữ liệu, 12.1 sheet tracking 5 bảng); khôi phục 5 mục rơi: P0.12, scope Render trong R7, dấu hiệu 7–8 của R8, hai dòng IP/Tản nhiệt trong Dictionary, dòng Local Content Kit trong lệnh giao việc của Trân.

---

## 0. Kỷ luật bằng chứng — áp cho cả tài liệu quản trị

Mọi trạng thái kỹ thuật như sitemap, robots, facet index, HTML render, Bing submit, canonical **chỉ được lock bằng bằng chứng kiểm chứng**.

### 0.1. Quy định

Không ghi trong tài liệu các câu như: "sitemap 404", "sitemap hoạt động", "robots đã đúng", "facet đang index", "Bing đã nhận URL", "AI crawler đã đọc được" — nếu chưa có **Baseline Log** hoặc **Acceptance Evidence** kèm ngày, người kiểm, công cụ kiểm và ảnh/log đối chiếu.

### 0.2. Riêng sitemap

Kết quả kiểm ngày 09/07/2026 (fetch trực tiếp): `auto365.vn/sitemap.xml` redirect về `/sitemap/sitemap.xml`, sitemap index hoạt động, 6 sitemap con, sitemap product có `lastmod` cập nhật 08/07/2026. Kết quả này ghi vào **Baseline Log mục R0.6** làm bằng chứng khởi điểm — không ghi thành lỗi kỹ thuật, không đưa vào P0 sửa. Cường re-check độc lập bằng `curl -I -L` trong R0 để có bằng chứng bằng công cụ thứ hai.

Việc còn lại của Cường sau publish: kiểm sitemap có URL hub, kiểm `lastmod`, submit/check trong Bing Webmaster Tools và Google Search Console.

---

## 1. Quyết định vận hành đã khóa

### 1.1. P0 không chờ Patch

```text
Ngày 1 sáng: Trân chụp baseline hiện trạng (Cường hỗ trợ phần kỹ thuật).
Ngày 1 chiều: Cường chạy P0 hygiene.
Tuần 1: Trân/Cường/Anh Việt soạn và nghiệm thu Patch Register song song.
Hub 14 block: giữ timeline, không lùi vì Patch.
```

P0 là vệ sinh kỹ thuật: title, meta, H1, og:image, badge, rating schema, format thông số, redirect, hotline, phân vai SKU, filter năm tương lai. P0 không đụng kiến trúc franchise nên không được chặn bởi Patch v1.1.

### 1.2. Franchise không xử lý bằng mệnh lệnh SEO

Các domain chi nhánh/franchise/local có thể là sở hữu độc lập hoặc không có ràng buộc hợp đồng nội dung. Không dùng văn phong "bắt buộc gỡ", "phải sửa", "không được viết" nếu chưa có quyền kiểm soát.

```text
Main domain auto365.vn thắng query quốc gia bằng hub mạnh hơn.
Chi nhánh được kéo về hệ thống bằng lợi ích: data feed, outline local, case template, lead sharing, anchor/link pack.
Domain local chỉnh nội dung vì có lợi, không vì bị ra lệnh.
```

### 1.3. Patch chỉ lock trên dữ liệu crawl

Mọi kết luận sau phải đi qua crawl map: chi nhánh nào tranh query quốc gia; URL franchise nào đang rank "bi gầm ô tô", "độ bi gầm", "nâng cấp ánh sáng bi gầm"; facet nào indexable; tổ hợp filter nào có demand riêng; thuộc tính nào lệch giữa filter, card, schema và Master Data; sitemap/robots/canonical/render thực tế ở trạng thái nào. Không dùng giả định trong tài liệu để làm rule.

### 1.4. Bot policy — lock hiện hành

Policy nền đã lock từ nền tảng GEO: **GPTBot, ClaudeBot, PerplexityBot, Google-Extended được phép trong robots.txt**, vì mục tiêu GEO là được trích dẫn làm nguồn tham chiếu ngành. Đây là trạng thái mặc định. R5 kiểm và lập bảng trạng thái theo lock này; muốn thay đổi bất kỳ bot nào là **quyết định lock mới của Anh Việt**, không phải việc bỏ ngỏ cho team tự xử.

---

## 2. Owner register

| Nhóm việc | Owner chính | Người hỗ trợ | Output bắt buộc |
|---|---|---|---|
| R0 — Baseline hiện trạng | Trân | Cường hỗ trợ kỹ thuật | Baseline folder + log trước P0 |
| P0 — Hygiene kỹ thuật ngày 1 | Cường | Trân nghiệm thu | Link live + ảnh/log nghiệm thu |
| R1 — Franchise pull governance | Anh Việt quyết định chính sách | Trân crawl map, Cường hỗ trợ link/canonical nếu có quyền | Cannibalization Map + Local Content Kit |
| R2 — Facet/pagination control | Cường | Trân xác nhận demand SEO | Facet Rule Sheet (tuần 1) + crawl proof sau triển khai (tuần 2) |
| R3 — Attribute Master Data | Trân | Cường nối UI/schema, Anh Việt duyệt data | Attribute Dictionary + Master Data source |
| R4 — Render HTML cho AI/Search | Cường | Trân kiểm HTML content | Fetch/view-source proof |
| R5 — AI crawler + Bing infra | Cường | Trân submit/check, Anh Việt chốt nếu đổi bot policy | Robots diff + Bot Status Sheet + BWT/GSC proof |
| R6 — Legal FAQ dependency | Anh Việt duyệt | Trân lập Citation Log | Citation Log + FAQ hold/pass status |
| R7 — Week 1 gate | Anh Việt | Toàn team | Biên bản pass/fail theo register |
| R8 — Đo sau patch (tháng 2–4) | Trân | Anh Việt nhận báo cáo | Báo cáo so baseline theo 8 dấu hiệu |

---

## 3. R0 — Baseline hiện trạng trước P0

**Mục tiêu:** giữ bằng chứng "trước/sau" để đo tác động. Timebox ngày 1 sáng, không kéo dài sang nhiều ngày.

| ID | Hạng mục baseline | Owner | Cách kiểm | Output |
|---|---|---|---|---|
| R0.1 | SERP Google hiện trạng | Trân | Chụp 15–30 query ở chế độ ẩn danh, location Việt Nam/HCM nếu có. Bộ query quốc gia: `bi gầm ô tô`, `độ bi gầm`, `nâng cấp ánh sáng bi gầm`, `bi gầm vs bi pha`, `nhiệt màu bi gầm`, `đăng kiểm bi gầm`. Bộ query local mẫu: `độ bi gầm TPHCM`, `độ bi gầm Hà Nội`, `độ bi gầm [khu vực]`. R8 đo lại đúng bộ này | Ảnh SERP + file keyword baseline, phân loại main/franchise/đối thủ |
| R0.2 | GSC hiện trạng | Trân | Export 28 ngày và 3 tháng: query, page, clicks, impressions, CTR, position | CSV/XLSX baseline |
| R0.3 | Crawl domain chính | Trân | Screaming Frog/Sitebulb: URL, title, H1, canonical, indexability, status code | Crawl export trước P0 |
| R0.4 | Crawl franchise/local mở rộng | Trân | Crawl/search domain local có liên quan "bi gầm" | Cannibalization draft |
| R0.5 | AI citation check | Trân | 12 câu hỏi FAQ trên ChatGPT/Gemini/Copilot/Perplexity/Claude | AI Citation Sheet |
| R0.6 | Sitemap/robots live proof | Cường | `curl -I -L`, fetch sitemap XML, robots.txt, GSC/BWT nếu có. Ghi kèm kết quả kiểm 09/07 làm bằng chứng khởi điểm | Ảnh/log trạng thái live |
| R0.7 | Render/source snapshot | Cường | View-source/fetch HTML không JS của hub hiện tại | HTML snapshot trước P0 |
| R0.8 | Facet/filter snapshot | Cường | Crawl URL filter, kiểm canonical/meta robots/indexability | Facet snapshot |
| R0.9 | Bing Webmaster status | Cường | Kiểm đã verify domain, sitemap submit, URL submit | Ảnh trạng thái BWT |

**Gate R0 đạt:** có thư mục baseline kèm ngày giờ, người kiểm, công cụ kiểm. Thiếu mục nào ghi "KHÔNG KIỂM TRA ĐƯỢC" hoặc "KHÔNG ĐỦ DỮ LIỆU", không đoán. Thiếu baseline không chặn P0, nhưng bị ghi là mất mốc đo tăng trưởng.

---

## 4. P0 — Chạy ngày 1 chiều, không chờ Patch

P0 giữ theo hồ sơ Hub Bi Gầm gốc. Không thêm rào chặn mới.

| ID | Việc | Owner | Gate |
|---|---|---|---|
| P0.1 | Title ≤ 60 ký tự, có "bi gầm ô tô" | Cường | View-source + SERP snippet test |
| P0.2 | Meta description 140–160 ký tự, không số liệu chưa lock | Cường | View-source |
| P0.3 | H1 duy nhất | Cường | Crawl H1 count = 1 |
| P0.4 | og:image thật 1200×630 | Cường/Tâm | Sharing Debugger hoặc source OG |
| P0.5 | Gỡ "Độc quyền" khỏi template/CMS | Cường | Tìm kiếm chuỗi trong template/CMS = 0 |
| P0.6 | Product card badge mặc định "Sản phẩm chính hãng" | Cường | UI + source/CMS |
| P0.7 | Nhiệt màu format `3000K / 4300K / 5500K` | Cường | Crawl/card sample |
| P0.8 | Không xuất AggregateRating nếu rating mặc định | Cường | Rich Results Test/schema validator |
| P0.9 | Redirect 301 `/g1-tubor-v2/` → `/g1-turbo-v2/` | Cường | Header 301 proof |
| P0.10 | G1 Turbo bản cũ và G1 Turbo V2 phân vai rõ | Cường/Trân | Listing + URL role |
| P0.11 | Hotline đồng bộ theo số Anh Việt chốt | Cường | UI + source |
| P0.12 | Filter năm sản xuất tương lai (2027–2030) không có dữ liệu thật | Cường | Gỡ khỏi UI/filter hoặc chuyển KDDL để xử lý P1 |

**Gate P0 đạt:** Trân nghiệm thu bằng ảnh/log. Không nghiệm thu bằng câu "đã sửa".

---

## 5. R1 — Franchise Pull Governance

### 5.1. Mục tiêu

Không để domain local/franchise chia lực query quốc gia của hub chính, xử lý bằng cơ chế lợi ích và quyền kiểm soát thực tế.

### 5.2. Vai trò domain

| Loại domain | Vai trò đúng | Cách xử lý |
|---|---|---|
| `auto365.vn` | Hub quốc gia: "bi gầm ô tô", "độ bi gầm", "nâng cấp ánh sáng bi gầm", "bi gầm vs bi pha", "nhiệt màu bi gầm", "đăng kiểm bi gầm" (câu pháp lý theo R6) | Dồn lực content, schema, internal link, media, citation |
| Domain local/chi nhánh có hợp tác | Intent địa phương: "độ bi gầm tại [khu vực]", case xe thật tại chi nhánh, ảnh thi công local | Gửi Local Content Kit + data feed + anchor link pack |
| Domain độc lập/không có quyền kiểm soát | Không coi là tài sản điều khiển được | Main hub thắng bằng authority; chỉ outreach nếu có lợi song phương |

### 5.3. Local Content Kit cho chi nhánh (Trân chuẩn bị)

1. Outline bài local: "Độ bi gầm tại [khu vực]: xe thật, nhu cầu thật, quy trình lắp tại chi nhánh".
2. Data block dùng chung từ Master Data, không tự chế thông số.
3. 3 đoạn anchor link về hub chính: `bi gầm ô tô`, `tư vấn nâng cấp ánh sáng bi gầm`, `cách chọn bi gầm theo xe`.
4. Quy định title/meta local: có khu vực trong title/H1; không dùng H1 dạng guide quốc gia nếu không phải hub chính.
5. Case/photo checklist: xe thật, ảnh beam/cut-off, ảnh thi công, ảnh bàn giao.
6. CTA local: tư vấn tại chi nhánh + link tham khảo hub quốc gia trên auto365.vn.

### 5.4. Cannibalization Map bắt buộc

Cột chuẩn: Query | URL auto365.vn | URL local/franchise | Domain | Rank hiện tại | Intent đúng | Control level (Owned / Partner / Independent / No access) | Hành động đề xuất | Lợi ích cho local | Trạng thái.

### 5.5. Gate R1

- Có danh sách URL local/franchise thật, không suy diễn.
- Mỗi URL có control level.
- Mỗi đề xuất sửa có lợi ích cho chi nhánh.
- Không có dòng "bắt buộc gỡ" nếu không có quyền kiểm soát.
- Anh Việt chốt chính sách quan hệ: domain nào có quyền yêu cầu, domain nào chỉ khuyến nghị.

---

## 6. R2 — Faceted Navigation + Pagination Control

### 6.1. Nguyên tắc

Facet có thể là tài sản SEO hoặc rác index. Không xử lý một kiểu cho toàn bộ.

| Loại URL | Ví dụ | Chính sách |
|---|---|---|
| Facet có demand riêng | `?nhiet-mau=3000k`, `?lens=3-0-inch` nếu có search demand và content riêng | Index có kiểm soát, self-canonical, content riêng tối thiểu, nằm trong danh sách trắng |
| Facet tiện ích lọc | Sort, price range, brand combo không demand, năm sản xuất sinh tự động | Canonical về hub hoặc noindex theo rule |
| Pagination | `?page=2`, `/page/2` | Không duplicate full 14 block; self-canonical nếu cần index pagination hoặc canonical về page 1 theo quyết định kỹ thuật |
| Search/internal query | URL tìm kiếm nội bộ | Noindex |
| Năm sản xuất 2027–2030 | Nếu không có dữ liệu thật | Loại khỏi UI/filter hoặc noindex ngay (P0.12) |

### 6.1.1. Ghi chú kỹ thuật về `robots.txt` và `noindex`

`robots.txt` dùng để điều phối crawl, không phải công cụ chắc chắn để gỡ index. Nếu muốn một URL đã/đang có khả năng index biến mất khỏi kết quả tìm kiếm, trang đó phải cho crawler truy cập để đọc được `meta robots noindex` hoặc `X-Robots-Tag: noindex`. Vì vậy:

- URL facet tiện ích cần `noindex` thì không được đồng thời `Disallow` bằng robots.txt theo cách khiến crawler không đọc được `noindex`.
- URL cần tiết kiệm crawl budget nhưng không cần xử lý index có thể dùng robots.txt theo pattern riêng, sau khi Cường và Trân chốt mục tiêu.
- Mỗi pattern phải ghi rõ mục tiêu: **giảm crawl**, **gỡ index**, **canonical hóa**, hay **giữ index có kiểm soát**.

### 6.2. Facet Rule Sheet

Cột chuẩn: Pattern URL | Số URL | Indexable hiện tại? | Demand SEO? | Canonical hiện tại | Meta robots | Quyết định | Owner | Gate. Pattern tối thiểu phải kiểm: `?brand=`, `?nhiet-mau=`, `?lens=`, `?bao-hanh=`, `?nam-san-xuat=`, `?sort=`, `?page=`.

### 6.3. Gate R2 — hai nhịp

**Nhịp 1 (tuần 1):** Facet Rule Sheet hoàn chỉnh + quyết định index/canonical/noindex từng pattern, dựa trên facet snapshot R0.8 và demand data của Trân.

**Nhịp 2 (tuần 2):** triển khai xong + crawl proof sau: không còn URL filter indexable ngoài danh sách trắng; facet tiện ích có canonical/noindex đúng; page 2+ không lặp full nội dung hub; filter năm tương lai đã gỡ hoặc noindex. Có ảnh/log crawl trước và sau.

Không đòi crawl proof sau triển khai trong gate tuần 1 — gate không qua được vật lý sẽ tạo áp lực làm giả bằng chứng.

---

## 7. R3 — Attribute Master Data Dictionary

### 7.1. Nguyên tắc

Master Data là nguồn duy nhất cho: product card, filter UI, bảng so sánh hub, schema, FAQ dữ liệu, internal link module, case page/snippet. Không nhập tay lại theo từng template — sửa ở dictionary, template đọc từ dictionary.

### 7.2. Attribute Dictionary bắt buộc

| Attribute | Format chuẩn | Nguồn | Quy định |
|---|---|---|---|
| Nhiệt màu | `3000K / 4300K / 5500K` | Fact Sheet/Master Data | Không dùng `3000k`, `3 màu`, `vàng/trắng` thay dữ liệu kỹ thuật |
| Bảo hành | Một chuẩn theo tháng: `12 tháng`, `24 tháng`, `36 tháng` | Chính sách bảo hành/SKU | Không dùng song song `2 năm` và `24 tháng` trong cùng hệ |
| Điện áp | `12V`, `12V–16V`, `12V/24V` | Fact Sheet | Không tự suy diễn xe điện/xe tải |
| Lens | `2.0 inch`, `2.5 inch`, `3.0 inch` | Fact Sheet | Không lẫn `2 inch`, `2.0`, `3in` |
| Năm sản xuất | Chỉ năm có dữ liệu thật | CMS/Master Data | Gỡ năm tương lai 2027–2030 nếu không có nguồn |
| Trạng thái SKU | `Active / Deprecated / Redirect / Chờ xác minh` | Anh Việt/Trân lock | SKU chờ xác minh không vào bảng so sánh |
| Brand entity | `X-Light`, `GTR`, `AES Việt Nam` | Entity lock | Không đổi "AES Việt Nam" thành "AES" |
| Giá | Theo Master Data đã duyệt | Bảng giá/Anh Việt | Không đưa giá vào meta nếu dải giá chưa lock |
| IP/chống nước | Theo Fact Sheet | Fact Sheet | Không dùng chung một IP cho mọi SKU |
| Tản nhiệt | Theo Fact Sheet | Fact Sheet | Không tự thêm quạt/tản nhiệt nếu thiếu nguồn |

### 7.3. Gate R3

- Filter UI và product card đọc cùng nguồn hoặc cùng mapping được Cường/Trân xác nhận.
- Không còn nhập tay riêng cho cùng một attribute.
- SKU thiếu Fact Sheet không xuất hiện trong bảng so sánh hub.
- Attribute trong schema không lệch với card.
- Có bản Master Data và ngày verify.

### 7.4. Master Data Sheet tối thiểu — nhắc lại để nối với hồ sơ hub gốc

Master Data Sheet chính vẫn theo hồ sơ Hub Bi Gầm gốc. Patch nhắc lại bộ cột tối thiểu:

`SKU | Brand entity | Model | Phiên bản/năm | Trạng thái SKU | URL SKU | Kích thước lens | Công suất Cos | Công suất Pha | Nhiệt màu | Chân bóng | Điện áp | Chuẩn IP | Tản nhiệt | Giá niêm yết | Trạng thái Fact Sheet | Nguồn | Ngày verify | Người verify`

Quy định nối dữ liệu:

- Attribute Dictionary quy chuẩn cách hiển thị.
- Master Data Sheet lưu giá trị thật theo từng SKU.
- Template chỉ đọc từ hai nguồn này, không nhập tay ở product card, filter, schema hoặc bảng so sánh.

---

## 8. R4 — Render HTML tĩnh cho AI/Search

**Owner:** Cường. **Người kiểm:** Trân. **Deadline:** Tuần 1–2 cho hiện trạng và phương án SSR; chạy lại full khi 14 block lên production.

### 8.1. Yêu cầu

14 block hub phải đọc được bằng HTML nguồn hoặc server-rendered HTML. Không nghiệm thu bằng giao diện browser.

Bắt buộc có trong HTML thật: H1; Quick Answer/định nghĩa answer-first; bảng chọn nhanh; Entity Lock; bảng so sánh nếu dữ liệu pass; breadcrumb; FAQ đã được duyệt; internal link đến spoke/case/SKU; CTA; schema JSON-LD.

### 8.2. Test bắt buộc

| Test | Cách kiểm | Gate |
|---|---|---|
| View-source | Mở view-source hub, tìm H1/Quick Answer/Entity Lock/FAQ | Có text thật |
| Fetch không JS | curl/fetch HTML, không chạy JS | Có 14 block chính hoặc block publish chính |
| Schema | Kiểm JSON-LD trong source | Không phụ thuộc client render |
| FAQ | Tìm câu hỏi FAQ trong source | Chỉ FAQ pass mới xuất hiện |
| Breadcrumb | Tìm breadcrumb HTML + schema | Có trong source |

### 8.3. Gate R4

R4 đạt khi Trân copy được HTML source/fetch và tìm được nội dung chính bằng text search. Chỉ thấy "Đang tải…" hoặc nội dung load client-side JS là không đạt.

Trong gate 7 ngày: nghiệm thu render hiện trạng + phương án SSR cho lớp content. Full proof 14 block nghiệm thu khi hub publish.

---

## 9. R5 — AI Crawler + Bing/Indexing Infrastructure

### 9.1. Bot policy — theo lock hiện hành, taxonomy 4 nhóm để kiểm

Trạng thái mặc định theo lock nền tảng GEO: **GPTBot, ClaudeBot, PerplexityBot, Google-Extended được phép**. Bảng dưới dùng để kiểm và phân loại, không phải để mở lại quyết định:

| Nhóm | Bot/User-agent cần kiểm | Chính sách |
|---|---|---|
| Search visibility/index | Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot | Mở. Không block nhầm — mục tiêu là SEO/AI Search visibility |
| User-triggered/assistant fetch | ChatGPT-User và tương đương | Kiểm log, không dùng thay cho crawler search |
| Training/control | GPTBot, ClaudeBot, Google-Extended | Mở theo lock hiện hành. Muốn đổi bất kỳ bot nào = quyết định lock mới của Anh Việt, ghi văn bản |
| AI answer engine khác | PerplexityBot và tương đương | Mở theo lock hiện hành. Kiểm theo tài liệu hiện hành + log server |

### 9.2. Robots checklist

| Việc | Owner | Output |
|---|---|---|
| Lấy robots.txt hiện tại | Cường | File snapshot trước patch |
| Đối chiếu Googlebot/Bingbot | Cường | Không block hub/sitemap/CSS/JS cần crawl |
| Đối chiếu OAI-SearchBot, Claude-SearchBot | Cường | Không block nếu muốn xuất hiện trong AI Search |
| Đối chiếu GPTBot/ClaudeBot/Google-Extended/PerplexityBot | Cường | Khớp lock hiện hành (mở); lệch thì báo, không tự sửa policy |
| Kiểm sitemap trong robots | Cường | Có khai báo sitemap index đúng nếu team quyết định khai báo |
| Robots diff sau patch | Cường | Ảnh/log diff |

### 9.2.1. Bot Status Sheet bắt buộc

Cường nộp bảng này cùng robots snapshot. Thiếu bảng này thì R5 chưa đạt, dù robots.txt nhìn bằng mắt có vẻ đúng.

| Bot | Nhóm | Mục đích | Robots hiện tại | Quyết định theo lock | Người chốt nếu đổi | Ngày kiểm | Bằng chứng |
|---|---|---|---|---|---|---|---|
| Googlebot | Search/index | Google Search |  | Mở | Anh Việt nếu đổi |  |  |
| Bingbot | Search/index | Bing/Copilot ecosystem |  | Mở | Anh Việt nếu đổi |  |  |
| OAI-SearchBot | Search visibility | ChatGPT Search |  | Mở nếu mục tiêu là AI Search visibility | Anh Việt nếu đổi |  |  |
| Claude-SearchBot | Search visibility | Claude/Search nếu có log/tài liệu hiện hành |  | Mở nếu mục tiêu là AI Search visibility | Anh Việt nếu đổi |  |  |
| ChatGPT-User | User-triggered fetch | Truy cập theo hành động người dùng |  | Không dùng thay crawler search | Anh Việt nếu đổi |  |  |
| GPTBot | Training/control | Crawl có thể phục vụ đào tạo/cải thiện mô hình theo chính sách bot hiện hành |  | Mở theo lock hiện hành | Anh Việt nếu đổi |  |  |
| Google-Extended | Training/control | Control use trong một số sản phẩm AI của Google theo chính sách hiện hành |  | Mở theo lock hiện hành | Anh Việt nếu đổi |  |  |
| ClaudeBot | Training/control | Anthropic crawler |  | Mở theo lock hiện hành | Anh Việt nếu đổi |  |  |
| PerplexityBot | AI answer engine | Perplexity crawl/fetch |  | Mở theo lock hiện hành | Anh Việt nếu đổi |  |  |

### 9.3. Bing Webmaster Tools

| Việc | Owner | Gate |
|---|---|---|
| Verify BWT cho `auto365.vn` | Cường | Ảnh property verified |
| Submit/check sitemap index | Cường | Ảnh submit hoặc trạng thái sitemap |
| Submit URL hub sau P0/hub publish | Cường/Trân | Ảnh URL submission |
| Kiểm crawl/index issue | Cường | Không có lỗi chặn hub |
| Ghi baseline Bing | Trân | Keyword/index baseline nếu có dữ liệu |

### 9.4. Sitemap rule

Không đưa claim trạng thái sitemap vào tài liệu nếu chưa có log. Sau publish hub, Cường kiểm: hub URL có trong sitemap phù hợp; `lastmod` đúng ngày sửa thật; sitemap trả HTTP 200 sau redirect cuối; sitemap không chứa URL facet rác; đã submit trong GSC/BWT nếu có quyền.

### 9.5. Gate R5

- Robots snapshot trước/sau.
- Bot Status Sheet khớp lock hiện hành; mọi thay đổi có văn bản quyết định của Anh Việt.
- BWT verified hoặc lý do chưa verify.
- URL hub/sitemap submit/check proof.
- Không block nhầm bot search visibility.

---

## 10. R6 — Legal FAQ Dependency

### 10.1. Rule khóa

Nếu Block 10 — Đăng kiểm/pháp lý bị hold do KHÔNG ĐỦ DỮ LIỆU, toàn bộ FAQ liên quan đăng kiểm/pháp lý cũng hold. Không dùng kinh nghiệm ngành, lời sale, nhận định gara hoặc "thường là" thay cho văn bản hiện hành.

### 10.2. FAQ chịu dependency

| FAQ | Điều kiện publish |
|---|---|
| Lắp bi gầm có đăng kiểm được không? | Citation Log pass |
| Độ bi gầm có bị phạt không? | Citation Log pass |
| Lắp bi gầm có cần cắt cản không? | Trả lời kỹ thuật được nếu không suy diễn pháp lý |
| Xe điện có lắp bi gầm được không? | Checklist kỹ thuật; không trả lời pháp lý nếu Citation Log chưa pass |

### 10.3. Hidden placeholder nội bộ

Chưa pass Citation Log: CMS giữ placeholder nội bộ, không public. Không publish các câu kiểu: "Có đăng kiểm bình thường", "Không ảnh hưởng đăng kiểm", "Không bị phạt nếu lắp đúng", "Auto365 cam kết đăng kiểm".

### 10.4. Gate R6

- Citation Log có văn bản, ngày kiểm, người kiểm.
- FAQ pháp lý chỉ xuất hiện nếu Block 10 pass.
- Nếu Block 10 hold, source HTML không có FAQ pháp lý.
- Anh Việt duyệt final.

---

## 11. R7 — Week 1 Acceptance Gate

Sau 7 ngày, team nộp thêm các output của Patch Register, không thay thế output hub gốc.

| Nhóm | Output sau 7 ngày | Owner | Verdict |
|---|---|---|---|
| P0 | P0 live pass checklist | Cường/Trân | ĐẠT / KHÔNG ĐẠT |
| Baseline | Baseline folder trước P0 | Trân | ĐẠT / KKTĐ |
| Franchise | Cannibalization Map mở rộng domain local | Trân | ĐẠT / KDDL / KKTĐ |
| Policy | Chính sách franchise pull governance | Anh Việt | ĐẠT / KHÔNG ĐẠT |
| Facet | Facet Rule Sheet + quyết định từng pattern (nhịp 1) | Cường | ĐẠT / KDDL |
| Master Data | Attribute Dictionary + SKU chủ lực locked | Trân/Anh Việt | ĐẠT / KDDL |
| Render | Proof render hiện trạng + phương án SSR (full proof khi hub publish) | Cường/Trân | ĐẠT / KHÔNG ĐẠT |
| AI infra | Robots snapshot + Bot Status Sheet + Bing/sitemap proof | Cường | ĐẠT / KKTĐ |
| Legal | Citation Log + FAQ legal status | Trân/Anh Việt | ĐẠT / KDDL |
| Hub | Outline 14 block + 3 H1 | Trân | ĐẠT / KHÔNG ĐẠT |
| Media | Danh sách media thật còn thiếu | Tâm | ĐẠT / KDDL |

Ghi chú: crawl proof facet sau triển khai (nhịp 2) nghiệm thu cuối tuần 2, không nằm trong gate 7 ngày.

---

## 12. R8 — Đo sau patch (tháng 2–4, so với baseline R0)

**Owner: Trân. Anh Việt nhận báo cáo.**

Dấu hiệu đúng đường:

1. Hub hấp thụ internal link từ 4 cụm: evergreen guide, bài giá, SKU pages, case theo xe.
2. Domain chi nhánh giảm xuất bản guide quốc gia, chuyển sang intent local.
3. Số URL filter indexable giảm về đúng danh sách trắng.
4. Thuộc tính đồng nhất mọi điểm hiển thị — không còn "24 tháng" song song "2 Năm".
5. AI mention tăng so với AI Citation Sheet baseline, Auto365 xuất hiện trong vai trò nguồn tham chiếu.
6. Câu pháp lý chỉ xuất hiện khi Citation Log pass.
7. Hub bắt đầu nhận impression/click từ query head + compare + technical + local modifiers.
8. SKU pages và case pages không tranh H1/query quốc gia với hub.

### 12.1. Sheet tracking sau publish

Dùng cùng baseline R0 để đo 2–4 tháng. Không tạo báo cáo cảm tính.

| Sheet | Nhóm chỉ số | Nguồn | Ghi chú |
|---|---|---|---|
| Keyword Tracking | Query, impression, click, CTR, position, URL đang rank | GSC + SERP snapshot | So hub URL với toàn tuyến bi gầm |
| AI Citation Check | Câu hỏi, nền tảng, nguồn được trích, Auto365 có xuất hiện không | ChatGPT/Gemini/Copilot/Perplexity/Claude | Dùng lại 12 câu FAQ baseline |
| Cannibalization Map | Query, URL main, URL local/franchise, domain, action | Crawl + SERP | Cập nhật theo control level |
| Technical Tracking | Facet indexable, sitemap, robots, render, schema, Bing submit | Crawl/GSC/BWT/log | Có trước/sau, không báo miệng |
| Internal Link Tracking | Hub nhận link từ guide, bài giá, SKU, case theo xe | Crawl/internal link export | Mục tiêu dồn lực về URL hub |

Gate R8: báo cáo đối chiếu từng dấu hiệu với baseline, có số liệu, có ngày. Không có baseline đối chiếu = KHÔNG KIỂM TRA ĐƯỢC.

---

## 13. Lệnh giao việc tuần 1 — bản ban hành

```text
Trân:
- Ngày 1 sáng chụp baseline SERP/GSC/crawl/AI mention trước khi Cường đẩy P0.
- Mở rộng crawl map sang domain franchise/local, không kết luận nếu chưa có dữ liệu.
- Dựng Cannibalization Map theo control level: Owned / Partner / Independent / No access.
- Dựng Local Content Kit cho chi nhánh.
- Dựng Attribute Dictionary và Master Data nhóm SKU chủ lực.
- Nộp outline 14 block + 3 H1, giữ FAQ pháp lý theo Citation Log.

Cường:
- Ngày 1 sáng hỗ trợ baseline kỹ thuật (R0.6–R0.9). Ngày 1 chiều chạy P0 hygiene, không chờ Patch.
- Fix title/meta/H1/og/badge/rating/spec format/redirect/hotline/filter năm tương lai theo checklist.
- Tuần 1 nộp Facet Rule Sheet; tuần 2 triển khai + crawl proof sau.
- Đảm bảo hub render HTML thật, không phụ thuộc client-side JS cho 14 block chính.
- Kiểm robots theo Bot Status Sheet — khớp lock hiện hành (4 bot AI đang mở); lệch thì báo, không tự sửa policy.
- Verify/check Bing Webmaster Tools, sitemap, URL submission sau P0/publish.
- Mọi trạng thái sitemap/robots/Bing phải có log, không báo miệng.

Tâm:
- Chuẩn bị media thật cho beam pattern, cut-off, quy trình lắp, xe thật trước/sau.
- Không dùng render thay ảnh bằng chứng.

Anh Việt:
- Chốt chính sách franchise theo quan hệ thực tế, không để SEO tự ra lệnh cho domain độc lập.
- Duyệt Master Data, Attribute Dictionary, Citation Log và gate final.
- Bot policy giữ lock hiện hành; mọi thay đổi do Anh Việt quyết bằng văn bản.
- FAQ pháp lý chỉ publish khi Block 10 có Citation Log pass.

Nguyên tắc:
- Patch phục vụ hub, không chặn P0.
- Không claim kỹ thuật nếu chưa có bằng chứng live.
- Không dùng giả định thay crawl map.
- Không dùng kinh nghiệm ngành thay văn bản pháp lý.
- Không đặt gate không qua được vật lý.
- Không publish tắt.
- Từ bản LOCK FINAL: sửa đổi bằng Amendment đánh số, không viết lại toàn văn.
```

---

## 13A. Nguồn tham chiếu kỹ thuật ngoài — dùng để đối chiếu, không thay crawl log nội bộ

Các nguồn ngoài này chỉ dùng để Cường/Trân đối chiếu thuật ngữ và nguyên tắc kỹ thuật. Quyết định nghiệm thu vẫn dựa trên log live của Auto365.

| Chủ đề | Nguồn đối chiếu | Cách dùng trong patch |
|---|---|---|
| OpenAI crawlers | OpenAI crawler documentation | Đối chiếu OAI-SearchBot, ChatGPT-User, GPTBot trước khi sửa robots.txt |
| Robots meta / X-Robots-Tag | Google Search Central | Đối chiếu nguyên tắc `noindex` cần crawler truy cập được trang |
| robots.txt | Google Search Central robots.txt documentation | Đối chiếu `Disallow`, sitemap declaration và crawl control |
| Bing Webmaster Tools | Bing Webmaster Tools/GSC log thực tế | Kiểm verify property, sitemap submit, URL submit, crawl/index issue |

Không copy nguyên văn nguồn ngoài vào tài liệu team. Chỉ ghi kết luận đã kiểm và link/bằng chứng vào Acceptance Evidence.

---

## 14. Kết luận khóa

Bản LOCK FINAL: register có owner, output, gate và bằng chứng nghiệm thu, khép vòng từ baseline đến đo sau 2–4 tháng.

```text
Baseline ngày 1 sáng.
P0 ngày 1 chiều.
Patch Register chạy song song trong tuần 1; facet triển khai chốt tuần 2.
Hub 14 block không lùi timeline.
Franchise xử lý bằng pull governance, không bằng mệnh lệnh SEO.
Bot policy theo lock hiện hành; đổi là quyết định mới của Anh Việt bằng văn bản.
Mọi trạng thái kỹ thuật chỉ lock bằng bằng chứng live.
Đo lại so baseline ở tháng 2–4 — tăng trưởng chứng minh bằng số, không bằng cảm giác.
Từ bản này: sửa đổi bằng Amendment đánh số. Không viết lại toàn văn.
```

Hub Bi Gầm thắng khi toàn hệ thống dồn lực về một URL chính. Patch này là cơ chế dồn lực đó.
