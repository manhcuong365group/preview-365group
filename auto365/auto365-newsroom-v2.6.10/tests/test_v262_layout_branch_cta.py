from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')
CSS = (ROOT / 'mockup.css').read_text(encoding='utf-8')
MOCKUP = (ROOT / 'mockup.js').read_text(encoding='utf-8')


def test_taxonomy_art_is_supporting_visual_not_too_faint():
    blocks = re.findall(r'\.guide-art\s*\{([^}]*)\}', CSS, re.S)
    assert blocks
    css = blocks[-1]
    assert re.search(r'opacity:\s*\.5[5-9]', css), css


def test_vehicle_and_article_swipers_are_three_cards_by_two_rows_on_desktop():
    assert 'grid-auto-columns: calc((100% - 32px)/3)' in CSS
    # Both vehicle and article use the same three-card two-row option on desktop.
    assert "1024: { slidesPerView: 3, spaceBetween: 16, grid: { rows: 2, fill: 'row' } }" in MOCKUP
    assert "createSwiper('vehicleSwiper'" in MOCKUP
    assert "createSwiper('articleSwiper'" in MOCKUP


def test_video_is_equal_card_swiper_not_lead_side_layout():
    assert 'id="video-swiper"' in HTML
    assert HTML.count('class="video-media-card"') >= 4
    assert 'video-card-lead' not in HTML
    assert 'video-side-list' not in HTML
    assert "createSwiper('videoSwiper', '#video-swiper'" in MOCKUP
    assert '.video-media-card' in CSS


def test_press_keeps_lead_and_right_side_horizontal_swiper():
    assert 'class="press-card press-card-lead"' in HTML
    assert 'id="press-swiper"' in HTML
    assert 'press-nav' in HTML
    # V2.6.3 upgrades the right rail to 2 rows x 2 columns on desktop.
    assert "createSwiper('pressSwiper', '#press-swiper'" in MOCKUP
    assert "grid: { rows: 2, fill: 'row' }" in MOCKUP
    assert "1200: { slidesPerView: 2" in MOCKUP


def test_branch_discovery_block_and_real_ctas_exist():
    assert 'id="branch-discovery"' in HTML
    assert '91 điểm' in HTML
    assert '33 tỉnh/thành' in HTML
    assert 'href="https://auto365.vn/chi-nhanh"' in HTML
    assert 'href="https://zalo.me/3622666363345050913"' in HTML
    assert 'href="tel:19009365"' in HTML
    assert '1900 9365' in HTML


def test_branch_block_sits_before_final_cta():
    branch_pos = HTML.find('id="branch-discovery"')
    cta_pos = HTML.find('id="newsroom-cta"')
    assert branch_pos >= 0 and cta_pos >= 0 and branch_pos < cta_pos


def test_no_hash_only_links_and_no_horizontal_media_card_regression():
    assert 'href="#"' not in HTML
    for selector in ['.case-card', '.article-card', '.press-card-small']:
        match = re.search(re.escape(selector) + r'\s*\{([^}]*)\}', CSS, re.S)
        assert match, selector
        block = match.group(1)
        if 'grid-template-columns' in block:
            assert 'grid-template-columns: 1fr' in block, selector
        assert 'flex-direction: column' in block or 'display: block' in block or 'grid-template-columns: 1fr' in block, selector
