from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
CSS = (ROOT / 'mockup.css').read_text(encoding='utf-8')
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')
JS = (ROOT / 'mockup.js').read_text(encoding='utf-8')


def test_mobile_does_not_make_swiper_peek_overflow_visible():
    mobile_blocks = re.findall(r'@media \(max-width: 760px\)\s*\{(.*?)\n\}', CSS, re.S)
    assert mobile_blocks, 'mobile breakpoint block missing'
    mobile_css = '\n'.join(mobile_blocks)
    assert '.swiper-peek {overflow: visible;}' not in mobile_css
    assert '.swiper-peek { overflow: visible; }' not in mobile_css


def test_topic_video_press_are_explicitly_clipped_as_swiper_viewports():
    compact = re.sub(r'\s+', ' ', CSS)
    assert '.topic-swiper, .video-swiper, .press-swiper {' in compact
    block = re.search(r'\.topic-swiper, \.video-swiper, \.press-swiper \{([^}]*)\}', compact)
    assert block, 'shared Swiper viewport containment rule missing'
    declarations = block.group(1)
    assert 'max-width: 100%' in declarations
    assert 'min-width: 0' in declarations
    assert 'overflow: hidden' in declarations


def test_video_and_press_swiper_runtime_configs_remain_responsive_safe():
    assert "createSwiper('videoSwiper', '#video-swiper'" in JS
    video = re.search(r"createSwiper\('videoSwiper', '#video-swiper', \{(.*?)\n\s*\}\);", JS, re.S)
    assert video
    assert 'slidesPerView: 1' in video.group(1)

    press = re.search(r"createSwiper\('pressSwiper', '#press-swiper', \{(.*?)\n\s*\}\);", JS, re.S)
    assert press
    config = press.group(1)
    assert 'slidesPerView: 1.08' in config
    assert '768:' in config
    assert '1200:' in config


def test_build_marker_advances_to_2611():
    assert 'AUTO365-NEWSROOM-V2.6.11' in HTML
