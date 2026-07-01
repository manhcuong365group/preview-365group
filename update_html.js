const fs = require('fs');
let html = fs.readFileSync('auto365/bao-chi-noi-ve-auto365-365group-3m-pro-shop/index.html', 'utf8');

// 1. Cập nhật lần cuối: 06/2026.
html = html.replace(/Cập nhật lần cuối:\s*06\/2026\./g, '');

// 2. hơn 90 trung tâm -> hơn 90 điểm trên toàn quốc
html = html.replace(/hơn 90(\s+)trung tâm/g, 'hơn 90 điểm trên toàn quốc');

// 3. toàn quốc quốc -> toàn quốc
html = html.replace(/toàn quốc\s+quốc/g, 'toàn quốc');

// 4. bảo vệ tối đa khoang nội thất -> hỗ trợ bảo vệ nội thất
html = html.replace(/bảo vệ tối đa khoang nội thất/g, 'hỗ trợ bảo vệ nội thất');

// 5. Entity Table Format
html = html.replace(
  /<th scope="col">Đối tượng đề cập<\/th>\s*<th scope="col">Vai trò vận hành<\/th>\s*<th scope="col">Chi tiết vai trò<\/th>/g,
  '<th scope="col">Entity ID</th>\n\t\t\t\t\t\t\t\t<th scope="col">Thực thể</th>\n\t\t\t\t\t\t\t\t<th scope="col">Schema Type</th>\n\t\t\t\t\t\t\t\t<th scope="col">Vai trò</th>\n\t\t\t\t\t\t\t\t<th scope="col">Canonical URL</th>'
);

// 365Group Row
html = html.replace(
  /<tr>\s*<th scope="row">365Group<\/th>\s*<td>Tổ chức vận hành chiến lược<\/td>\s*<td>Đơn vị chủ quản, chịu trách nhiệm quản trị chiến lược thượng tầng cho toàn hệ thống.\s*<\/td>\s*<\/tr>/g,
  `<tr>
								<th scope="row">#365group</th>
								<td>365Group</td>
								<td>Organization</td>
								<td>Tổ chức vận hành chiến lược - Đơn vị chủ quản, chịu trách nhiệm quản trị chiến lược thượng tầng cho toàn hệ thống.</td>
								<td><a href="https://365group.vn/" target="_blank" rel="nofollow">https://365group.vn/</a></td>
							</tr>`
);

// Auto365 Row
html = html.replace(
  /<tr>\s*<th scope="row">Auto365<\/th>\s*<td>Chuỗi trung tâm nâng cấp ô tô<\/td>\s*<td>Mạng lưới trung tâm nâng cấp xe quy mô lớn với hơn 90 điểm trên toàn quốc thuộc hệ\s*sinh thái của 365Group.<\/td>\s*<\/tr>/g,
  `<tr>
								<th scope="row">#auto365</th>
								<td>Auto365</td>
								<td>Organization</td>
								<td>Chuỗi trung tâm nâng cấp ô tô - Mạng lưới trung tâm nâng cấp xe quy mô lớn với hơn 90 điểm trên toàn quốc thuộc hệ sinh thái của 365Group.</td>
								<td><a href="https://auto365.vn/" target="_blank" rel="nofollow">https://auto365.vn/</a></td>
							</tr>`
);

// 3M Pro Shop Row
html = html.replace(
  /<tr>\s*<th scope="row">3M Pro Shop &amp; Training Center<\/th>\s*<td>Dịch vụ chuyên sâu và đào tạo chuẩn 3M<\/td>\s*<td>Mô hình kỹ thuật chuyên sâu nằm trong hệ sinh thái vận hành, hỗ trợ chuẩn hóa tay\s*nghề cho chuỗi.<\/td>\s*<\/tr>/g,
  `<tr>
								<th scope="row">#3mproshop</th>
								<td>3M Pro Shop &amp; Training Center</td>
								<td>LocalBusiness</td>
								<td>Dịch vụ chuyên sâu và đào tạo chuẩn 3M - Mô hình kỹ thuật chuyên sâu nằm trong hệ sinh thái vận hành, hỗ trợ chuẩn hóa tay nghề cho chuỗi.</td>
								<td><a href="https://auto365.vn/3m-pro-shop" target="_blank" rel="nofollow">https://auto365.vn/3m-pro-shop</a></td>
							</tr>`
);

// 3M Ceramic NR Row
html = html.replace(
  /<tr>\s*<th scope="row">3M Ceramic NR<\/th>\s*<td>Dòng sản phẩm chính hãng<\/td>\s*<td>Giải pháp phim cách nhiệt công nghệ nano-gốm được nhắc đến trong các bài viết đánh\s*giá kỹ thuật.<\/td>\s*<\/tr>/g,
  `<tr>
								<th scope="row">#3mceramicnr</th>
								<td>3M Ceramic NR</td>
								<td>Product</td>
								<td>Dòng sản phẩm chính hãng - Giải pháp phim cách nhiệt công nghệ nano-gốm được nhắc đến trong các bài viết đánh giá kỹ thuật.</td>
								<td><a href="https://auto365.vn/phim-cach-nhiet-3m-ceramic-nr" target="_blank" rel="nofollow">https://auto365.vn/phim-cach-nhiet-3m-ceramic-nr</a></td>
							</tr>`
);

// 6. Evidence Context
const blocks = html.split('<div class="a365-card a365-press-card">');
for (let i = 1; i < blocks.length; i++) {
  let block = blocks[i];
  const tagMatch = block.match(/<span class="a365-tag[^>]*>(.*?)<\/span>/);
  const tag = tagMatch ? tagMatch[1] : 'Thông tin tham chiếu';
  
  block = block.replace(
    /<div class="a365-press-claim"><strong>Ghi nhận:<\/strong>\s*([\s\S]*?)<\/div>/g,
    `<div class="a365-press-claim">
										<strong>Chủ đề:</strong> ${tag}<br>
										<strong>Nội dung chứng thực:</strong> $1<br>
										<strong>Thực thể liên quan:</strong> Auto365, 365Group, 3M Pro Shop
									</div>`
  );
  blocks[i] = block;
}

html = blocks.join('<div class="a365-card a365-press-card">');

fs.writeFileSync('auto365/bao-chi-noi-ve-auto365-365group-3m-pro-shop/index.html', html, 'utf8');
console.log("Done");
