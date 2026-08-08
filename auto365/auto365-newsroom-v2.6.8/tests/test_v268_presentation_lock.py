from pathlib import Path
from bs4 import BeautifulSoup
import re

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')
CSS = (ROOT / 'mockup.css').read_text(encoding='utf-8')
FILTERS = (ROOT / 'filters.js').read_text(encoding='utf-8')
MOCKUP = (ROOT / 'mockup.js').read_text(encoding='utf-8')
SOUP = BeautifulSoup(HTML, 'html.parser')


def test_presentation_metadata_has_no_mockup_or_stale_version_copy():
    title = SOUP.title.get_text(' ', strip=True)
    description = SOUP.select_one('meta[name="description"]')['content']
    assert title == 'Tin tức Auto365 | Cẩm nang & hồ sơ xe thực tế'
    assert 'Mockup' not in description
    assert 'V2.6.' not in description
    assert SOUP.html.get('data-build') == 'AUTO365-NEWSROOM-V2.6.8'


def test_visible_ui_has_no_internal_demo_or_prototype_jargon():
    body_text = SOUP.body.get_text(' ', strip=True)
    forbidden = [
        'NEWSROOM MOCKUP',
        'Điều hướng demo',
        'Dữ liệu minh hoạ',
        'prototype V2.2',
        'Prototype visual',
        'bài mẫu',
        'hồ sơ mẫu',
    ]
    for phrase in forbidden:
        assert phrase not in body_text
    assert SOUP.select_one('.brand small').get_text(strip=True) == 'NEWSROOM'
    assert SOUP.select_one('.desktop-nav')['aria-label'] == 'Điều hướng Tin tức'


def test_global_finder_is_explicit_submit_not_live_filter():
    assert "#global-filter-form')?.addEventListener('submit'" in FILTERS
    assert 'scheduleGlobalFilter' not in FILTERS
    assert 'queryTimer' not in FILTERS
    assert "#global-query')?.addEventListener('input'" not in FILTERS
    assert "['#filter-type', '#filter-topic', '#filter-need']" not in FILTERS


def test_taxonomy_header_link_points_to_topic_finder_not_content_feed():
    section = SOUP.select_one('#service-guides .section-head')
    link = section.select_one('a')
    assert link.get_text(' ', strip=True) == 'Tìm theo chủ đề →'
    assert link.get('href') == '#global-finder'


def test_filter_status_copy_is_user_facing_not_mock_data_language():
    assert 'bài mẫu' not in FILTERS
    assert 'hồ sơ mẫu' not in FILTERS
    assert 'prototype' not in FILTERS.lower()
    assert 'mockup' not in FILTERS.lower()


def test_source_comments_no_longer_stack_release_versions():
    assert 'V2.6.' not in CSS
    assert 'V2.6.' not in FILTERS
    assert 'V2.6.' not in MOCKUP


def test_press_css_has_one_canonical_base_definition_per_core_component():
    # Responsive overrides may repeat layout/swiper selectors, but base component
    # definitions should not be stacked across release generations.
    assert len(re.findall(r'(?m)^\.press-library \{', CSS)) == 1
    assert CSS.count('.press-card-small {') == 1
    assert CSS.count('.press-small-body {') == 1
    assert CSS.count('.press-card-small h3 {') == 1
    assert '.press-columns-head' not in CSS
    assert '.press-other-heading' not in CSS
    assert 'Press library — canonical' in CSS


def test_no_duplicate_render_call_regression_in_content_type_reset():
    fn = re.search(r'function clearContentTypeFilter\(\)\s*\{(.*?)\n\s*\}', FILTERS, re.S)
    assert fn is not None
    assert fn.group(1).count('renderArticlePage') == 1
