from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')
CSS = (ROOT / 'mockup.css').read_text(encoding='utf-8')
FILTERS = (ROOT / 'filters.js').read_text(encoding='utf-8')
MOCKUP = (ROOT / 'mockup.js').read_text(encoding='utf-8')


def test_swiper_cdn_is_pinned_and_has_local_fallback_layout():
    assert 'swiper@14.0.7/swiper-bundle.min.css' in HTML
    assert 'swiper@14.0.7/swiper-bundle.min.js' in HTML
    assert '.swiper:not(.swiper-initialized) .swiper-wrapper' in CSS


def test_topic_taxonomy_uses_inline_svg_icons_and_supporting_images():
    assert HTML.count('class="guide-icon-svg"') == 6
    assert 'opacity: .40' in CSS or 'opacity:.40' in CSS
    assert 'filter:grayscale' in CSS or 'filter: grayscale' in CSS


def test_content_type_is_compact_tabs_not_large_cards():
    assert 'class="content-tabs"' in HTML
    assert HTML.count('class="content-tab') >= 7
    assert 'content-type-swiper' not in HTML
    assert 'type-lane-card' not in HTML


def test_filtering_rebuilds_swiper_wrappers_instead_of_hiding_slides():
    assert 'replaceChildren' in FILTERS
    assert 'allArticleSlides' in FILTERS
    assert 'allVehicleSlides' in FILTERS
    assert 'slide.hidden' not in FILTERS


def test_vehicle_filter_remains_separate_from_global_filter():
    assert 'const vehicleState' in FILTERS
    assert 'getGlobalFilters' in FILTERS
    assert "#vehicle-brand" in FILTERS
    assert "#filter-topic" in FILTERS


def test_local_preview_launcher_exists():
    assert (ROOT / 'START_LOCAL_PREVIEW.bat').exists()


def test_press_block_uses_secondary_swiper_and_compact_visuals():
    assert 'id="press-swiper"' in HTML
    assert '.press-swiper' in CSS
    assert 'press-thumb' in HTML


def test_swiper_init_is_resilient_when_cdn_is_missing():
    assert 'document.documentElement.classList.add(\'swiper-unavailable\')' in MOCKUP
    assert 'if (typeof window.Swiper !== \'function\')' in MOCKUP
