# Page architecture v2 — Bi gầm Auto365

1. Global header
2. Commerce hero
3. Product Finder theo xe / nhu cầu / ngân sách
4. Quick intent filters
5. Product catalog + sidebar filters + sort
6. Answer-first summary
7. Use-case navigation
8. Compare shortlist / matrix
9. Buying guide
10. Real vehicle cases
11. E-E-A-T evidence — reviewer, methodology, beam pattern, source disclosure
12. SEO / GEO / AI Search knowledge hub
13. Entity graph + internal links
14. AI Answer FAQ
15. Conversion: gửi ảnh xe / chi nhánh
16. Sticky compare bar

## Intent separation
- `/nang-cap-anh-sang-bi-gam`: commercial category hub cho bi gầm.
- `/den-gam-dang-roi`: solution hub cho đèn gầm dạng rời; liên kết như giải pháp kế cận, không copy layout/intent.

## Authority rule
Case chỉ dùng dữ liệu có trong hồ sơ bài nguồn; không mở rộng kết luận sang mọi xe cùng dòng. Pháp lý/đăng kiểm không dùng câu cam kết tuyệt đối.
