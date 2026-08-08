from pathlib import Path
from bs4 import BeautifulSoup
import re

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')
CSS = (ROOT / 'mockup.css').read_text(encoding='utf-8')
JS = (ROOT / 'mockup.js').read_text(encoding='utf-8')
FILTERS = (ROOT / 'filters.js').read_text(encoding='utf-8')
SOUP = BeautifulSoup(HTML, 'html.parser')


def test_video_is_media_only_16x9_with_overlay_title():
    cards = SOUP.select('#video-swiper .video-media-card')
    assert len(cards) == 4
    assert SOUP.select_one('#video-swiper .video-copy') is None
    for card in cards:
        assert card.select_one('img[alt]') is not None
        assert card.select_one('.video-media-overlay strong') is not None
        assert card.select_one('.play-button') is not None
    assert re.search(r'\.video-media-card\s*\{[^}]*aspect-ratio:\s*16\s*/\s*9', CSS, re.S)
    assert 'autoplay: autoplayOptions(7000)' in JS
    assert re.search(r"createSwiper\('videoSwiper'.*?slidesPerView:\s*1", JS, re.S)


def test_press_uses_real_secondary_cards_in_2x2_swiper_without_demo_fillers():
    press = SOUP.select_one('#media-coverage')
    assert press is not None
    cards = press.select('#press-swiper .press-card-small')
    assert len(cards) >= 8
    assert not press.select('[data-demo-press]')
    assert 'Dữ liệu demo' not in press.get_text(' ', strip=True)
    assert 'Production' not in press.get_text(' ', strip=True)
    assert re.search(r"createSwiper\('pressSwiper'.*?1024:\s*\{\s*slidesPerView:\s*2[^}]*grid:\s*\{\s*rows:\s*2", JS, re.S)
    for card in cards:
        assert card.select_one('img[alt]') is not None
        assert card.select_one('.press-source') is not None
        assert card.select_one('time') is not None


def test_branch_locator_uses_three_region_cards_and_no_fake_map_art():
    branch = SOUP.select_one('#branch-discovery')
    assert branch is not None
    assert branch.select_one('.branch-region-grid') is not None
    cards = branch.select('.branch-region-card')
    assert len(cards) == 3
    text = branch.get_text(' ', strip=True)
    for expected in ['Miền Bắc', '41 điểm', 'Miền Trung', '26 điểm', 'Miền Nam', '24 điểm']:
        assert expected in text
    assert branch.select_one('.branch-region-svg') is None
    assert branch.select_one('.branch-map-card') is None
    assert 'Sơ đồ khu vực' not in text
    assert branch.select_one('a[href="https://auto365.vn/chi-nhanh"]') is not None


def test_final_cta_and_filter_state_contracts_are_preserved():
    assert 'const vehicleState' in FILTERS
    assert 'function getGlobalFilters' in FILTERS
    assert 'href="https://auto365.vn/chi-nhanh"' in HTML
    assert 'href="tel:19009365"' in HTML
    assert 'zalo.me' in HTML
    assert 'href="#"' not in HTML


def test_video_press_and_branch_are_responsive_without_horizontal_media_layout():
    assert '.video-media-card' in CSS
    assert '.press-card-small' in CSS
    assert '.branch-region-grid' in CSS
    assert 'grid-template-columns: repeat(3,minmax(0,1fr))' in CSS or 'grid-template-columns: repeat(3, minmax(0,1fr))' in CSS
