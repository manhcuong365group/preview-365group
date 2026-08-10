AUTO365 Newsroom V2.6.11 — Swiper Mobile Containment Fix

Scope:
- Fix mobile/tablet overflow affecting Video and Press Swipers from the shared .swiper-peek rule.
- Remove visible overflow at <=760px; Swiper remains the viewport/clipping boundary.
- Add explicit containment for Topic, Video and Press Swiper containers.
- Keep Video runtime config at 1 slide/view and Press config at 1.08 mobile, 2x2 from 768px.
- No redesign and no filter/data architecture changes.

Preview:
- Run START_LOCAL_PREVIEW.bat on Windows.
- Open http://127.0.0.1:8088/
- Avoid file:// for Swiper/CDN runtime testing.
