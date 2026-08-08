from pathlib import Path
from bs4 import BeautifulSoup
import re

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')
CSS = (ROOT / 'mockup.css').read_text(encoding='utf-8')
JS = (ROOT / 'mockup.js').read_text(encoding='utf-8')
FILTERS = (ROOT / 'filters.js').read_text(encoding='utf-8')
SOUP = BeautifulSoup(HTML, 'html.parser')


def test_hero_replaces_media_with_stats_2x2():
    hero = SOUP.select_one('#top .hero-grid')
    assert hero is not None
    assert hero.select_one('.hero-visual') is None
    stats = hero.select_one('.hero-stats-grid')
    assert stats is not None
    assert len(stats.select('.newsroom-stat')) == 4
    assert SOUP.select_one('section#newsroom-stats') is None
    assert re.search(r'\.hero-stats-grid\s*\{[^}]*grid-template-columns:\s*repeat\(2', CSS, re.S)


def test_taxonomy_uses_clear_supporting_images():
    assert len(SOUP.select('#topic-swiper .guide-card')) == 6
    assert re.search(r'\.guide-art\s*\{[^}]*opacity:\s*\.5[5-9]', CSS, re.S)
    assert '.guide-card::after' in CSS


def test_all_primary_swipers_use_edge_controls():
    for stage_selector in ['.topic-slider-stage', '#case-grid', '#article-grid', '.video-slider-stage', '.press-slider-stage']:
        stage = SOUP.select_one(stage_selector)
        assert stage is not None
        nav = stage.select_one('.swiper-edge-nav')
        assert nav is not None
        assert len(nav.select('.swiper-nav-btn')) == 2
    assert "navigation: { nextEl: '.topic-next', prevEl: '.topic-prev' }" in JS
    assert '.swiper-edge-nav' in CSS
    assert 'left: -18px' in CSS or 'left:-18px' in CSS
    assert 'right: -18px' in CSS or 'right:-18px' in CSS


def test_article_swiper_has_no_load_more_and_autoplays():
    assert SOUP.select_one('#load-more-articles') is None
    assert "createSwiper('articleSwiper'" in JS
    assert 'autoplay: autoplayOptions(6000)' in JS
    assert 'articleVisibleLimit' not in FILTERS
    assert 'ARTICLE_PAGE_SIZE' not in FILTERS


def test_video_is_single_slide_autoplay_with_edge_navigation():
    stage = SOUP.select_one('.video-slider-stage')
    assert stage is not None
    assert stage.select_one('#video-swiper') is not None
    assert stage.select_one('.swiper-edge-nav') is not None
    assert "createSwiper('videoSwiper'" in JS
    assert re.search(r"createSwiper\('videoSwiper'.*?slidesPerView:\s*1", JS, re.S)
    assert 'autoplay: autoplayOptions(7000)' in JS


def test_press_secondary_is_2x2_swiper_at_desktop():
    press = SOUP.select_one('#media-coverage')
    assert press is not None
    stage = press.select_one('.press-slider-stage')
    assert stage is not None
    assert stage.select_one('.swiper-edge-nav') is not None
    assert "createSwiper('pressSwiper'" in JS
    assert re.search(r"1024:\s*\{\s*slidesPerView:\s*2[^}]*grid:\s*\{\s*rows:\s*2", JS, re.S)
    assert len(press.select('#press-swiper .swiper-slide')) >= 5


def test_branch_locator_preview_has_regions_and_no_embedded_live_map():
    branch = SOUP.select_one('#branch-discovery')
    assert branch is not None
    assert branch.select_one('.branch-region-panel') is not None
    text = branch.get_text(' ', strip=True)
    for expected in ['Miền Bắc', '41', 'Miền Trung', '26', 'Miền Nam', '24']:
        assert expected in text
    assert branch.select_one('iframe') is None
    assert 'maps.google' not in HTML.lower()
    assert branch.select_one('a[href="https://auto365.vn/chi-nhanh"]') is not None


def test_global_and_vehicle_filter_states_remain_separate():
    assert 'const vehicleState' in FILTERS
    assert 'function getGlobalFilters' in FILTERS
    assert 'Global Finder does not mutate this section' in FILTERS
