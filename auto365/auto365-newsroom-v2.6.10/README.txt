AUTO365 Newsroom V2.6.10 — Press Responsive Lock

Scope:
- Fix responsive contract only for block "Báo chí nói về Auto365".
- CSS and Swiper JS now share breakpoints: desktop >=1200, tablet 768-1199, mobile <768.
- Tablet/mobile stack lead + source rail, while the source rail keeps 2-row horizontal Swiper behavior.
- Press arrows move inside the rail below desktop to avoid overlapping the lead/gutter.
- Press stage/slide heights use component variables instead of separate hard-coded selector values.
- Other Finder/Vehicle/Content/Video behavior remains unchanged.

Preview:
- Run START_LOCAL_PREVIEW.bat on Windows.
- Open http://127.0.0.1:8088/
- Avoid file:// for Swiper/CDN runtime testing.
