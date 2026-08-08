from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
CSS = (ROOT / 'mockup.css').read_text(encoding='utf-8')
JS = (ROOT / 'mockup.js').read_text(encoding='utf-8')
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')


def _press_config():
    match = re.search(r"createSwiper\('pressSwiper', '#press-swiper', \{(.*?)\n\s*\}\);", JS, re.S)
    assert match, 'press Swiper config missing'
    return match.group(1)


def test_press_js_uses_same_responsive_contract_as_css():
    config = _press_config()
    assert '768:' in config
    assert '1200:' in config
    assert '640:' not in config
    assert '1024:' not in config


def test_press_css_stacks_below_1200_and_mobile_below_768():
    assert '@media (max-width: 1199px)' in CSS
    assert '@media (max-width: 767px)' in CSS
    tablet = re.search(r'@media \(max-width: 1199px\)\s*\{(.*?)\n\}', CSS, re.S)
    assert tablet
    text = tablet.group(1)
    assert '.press-columns-head { display: none; }' in text
    assert '.press-layout { grid-template-columns: 1fr; }' in text
    assert '.press-column-heading-mobile { display: flex;' in text


def test_press_nav_moves_inside_rail_below_desktop():
    tablet = re.search(r'@media \(max-width: 1199px\)\s*\{(.*?)\n\}', CSS, re.S)
    assert tablet
    text = tablet.group(1)
    assert '.press-nav .swiper-nav-btn:first-child { left: 8px; }' in text
    assert '.press-nav .swiper-nav-btn:last-child { right: 8px; }' in text


def test_press_uses_one_stage_height_variable_per_breakpoint():
    # Keep a single component variable as the size source of truth instead of
    # separate hard-coded heights on stage, swiper and slide selectors.
    assert '--press-stage-height: 396px;' in CSS
    assert '--press-slide-height: 193px;' in CSS
    assert '--press-stage-height: 430px;' in CSS
    assert '--press-slide-height: 210px;' in CSS
    assert '--press-stage-height: 400px;' in CSS
    assert '--press-slide-height: 195px;' in CSS
    assert 'height: var(--press-stage-height);' in CSS
    assert 'height: var(--press-slide-height) !important;' in CSS
    assert '.press-slider-stage, .press-swiper { height: 430px; }' not in CSS
    assert '.press-swiper .swiper-slide { height: 210px !important; }' not in CSS
    assert '.press-slider-stage, .press-swiper { height: 400px; }' not in CSS
    assert '.press-swiper .swiper-slide { height: 195px !important; }' not in CSS


def test_press_build_marker_advances_to_2610():
    assert 'AUTO365-NEWSROOM-V2.6.10' in HTML
