from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')
CSS = (ROOT / 'mockup.css').read_text(encoding='utf-8')
FILTERS = (ROOT / 'filters.js').read_text(encoding='utf-8')
BAT = (ROOT / 'START_LOCAL_PREVIEW.bat').read_text(encoding='utf-8')


def css_block(selector: str) -> str:
    match = re.search(re.escape(selector) + r'\s*\{([^}]*)\}', CSS, re.S)
    assert match, f'Missing CSS selector: {selector}'
    return match.group(1)


def test_all_media_cards_are_vertical_image_above_text():
    for selector in ['.case-card', '.article-card', '.press-card-lead', '.press-card-small']:
        block = css_block(selector)
        assert 'grid-template-columns' not in block, f'{selector} still lays image beside text'
        assert ('flex-direction: column' in block) or ('grid-template-columns: 1fr' in block), selector


def test_vertical_card_images_have_top_media_ratio_not_full_height():
    case_img = css_block('.case-card > img')
    article_img = css_block('.article-card > img')
    assert 'aspect-ratio' in case_img and 'height: 100%' not in case_img
    assert 'aspect-ratio' in article_img and 'height: 100%' not in article_img


def test_global_finder_does_not_mix_vehicle_inventory():
    assert '[...articleCards(), ...caseCards()]' not in FILTERS
    assert 'articleCards().filter((card) => matchesGlobal(card, filters))' in FILTERS
    global_form = re.search(r'<form class="global-filter-grid".*?</form>', HTML, re.S)
    assert global_form
    assert '<option>Xe thực tế</option>' not in global_form.group(0)


def test_vehicle_segment_is_real_filter_state():
    assert "segment: ''" in FILTERS
    assert 'card.dataset.caseSegment === vehicleState.segment' in FILTERS
    assert HTML.count('data-case-segment="Xe điện"') >= 3


def test_article_mock_data_has_no_empty_or_duplicate_cards():
    assert not re.search(r'<article class="article-card"[^>]*>\s*</article>', HTML, re.S)
    indexes = re.findall(r'class="article-card"[^>]*data-index="(\d+)"', HTML)
    assert len(indexes) == 29
    assert len(set(indexes)) == 29
    assert sorted(map(int, indexes)) == list(range(1, 30))


def test_content_type_vehicle_clears_stale_article_type():
    vehicle_branch = re.search(r"if \(type === 'Xe thực tế'.*?return;", FILTERS, re.S)
    assert vehicle_branch
    assert "activeFeedType = '';" in vehicle_branch.group(0)


def test_no_hash_only_links_remain():
    assert 'href="#"' not in HTML


def test_local_preview_starts_server_before_browser():
    server_pos = BAT.find('http.server')
    browser_pos = BAT.find('start "" http://127.0.0.1:8088/')
    assert server_pos >= 0 and browser_pos >= 0
    assert server_pos < browser_pos


def test_vertical_swiper_fallback_matches_three_column_desktop_layout():
    assert '.vehicle-swiper:not(.swiper-initialized) .swiper-wrapper' in CSS
    assert '.article-swiper:not(.swiper-initialized) .swiper-wrapper' in CSS
    assert 'grid-auto-columns: calc((100% - 32px)/3)' in CSS


def test_ev_segment_is_reflected_in_vehicle_active_status():
    assert 'vehicleState.service || vehicleState.segment' in FILTERS
