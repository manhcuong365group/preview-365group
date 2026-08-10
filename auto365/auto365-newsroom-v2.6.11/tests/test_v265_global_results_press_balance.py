from pathlib import Path
from bs4 import BeautifulSoup
import re

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')
CSS = (ROOT / 'mockup.css').read_text(encoding='utf-8')
FILTERS = (ROOT / 'filters.js').read_text(encoding='utf-8')
SOUP = BeautifulSoup(HTML, 'html.parser')


def test_global_finder_has_dedicated_result_surface_below_form():
    finder = SOUP.select_one('#global-finder')
    assert finder is not None
    result = finder.select_one('#global-search-results')
    assert result is not None
    assert result.select_one('#global-result-grid') is not None
    assert result.select_one('#global-load-more') is not None
    assert result.select_one('#global-result-message') is not None
    assert 'Mockup hiện có 29 bài viết minh hoạ để thử Global Finder.' not in finder.get_text(' ', strip=True)


def test_global_filter_is_decoupled_from_content_swiper():
    assert 'function renderGlobalResults' in FILTERS
    assert 'const GLOBAL_RESULT_PAGE_SIZE = 6' in FILTERS
    assert re.search(r'function applyGlobalFilters\([^)]*\)\s*\{.*?renderGlobalResults', FILTERS, re.S)
    apply_global = re.search(r'function applyGlobalFilters\([^)]*\)\s*\{(.*?)\n\s*\}', FILTERS, re.S)
    assert apply_global is not None
    assert 'renderArticlePage' not in apply_global.group(1)
    article_matches = re.search(r'function getArticleMatches\(\)\s*\{(.*?)\n\s*\}', FILTERS, re.S)
    assert article_matches is not None
    assert 'getGlobalFilters' not in article_matches.group(1)
    assert 'activeFeedType' in article_matches.group(1)


def test_global_results_are_grid_not_swiper_and_paginate_by_six():
    assert re.search(r'\.global-result-grid\s*\{[^}]*grid-template-columns:\s*repeat\(3', CSS, re.S)
    assert 'GLOBAL_RESULT_PAGE_SIZE = 6' in FILTERS
    assert 'globalVisibleLimit += GLOBAL_RESULT_PAGE_SIZE' in FILTERS
    assert '#global-result-grid' in FILTERS
    assert '#global-load-more' in FILTERS


def test_content_type_reset_does_not_reset_global_form():
    clear_content = re.search(r'function clearContentTypeFilter\(\)\s*\{(.*?)\n\s*\}', FILTERS, re.S)
    assert clear_content is not None
    assert 'global-filter-form' not in clear_content.group(1)
    clear_global = re.search(r'function clearGlobalFilters\(\)\s*\{(.*?)\n\s*\}', FILTERS, re.S)
    assert clear_global is not None
    assert 'activeFeedType' not in clear_global.group(1)


def test_press_lead_and_secondary_share_balanced_desktop_height():
    assert '--press-stage-height:' in CSS
    assert re.search(r'\.press-card-lead\s*\{[^}]*height:\s*var\(--press-stage-height\)', CSS, re.S)
    assert re.search(r'\.press-swiper\s*\{[^}]*height:\s*var\(--press-stage-height\)', CSS, re.S)
    assert re.search(r'\.press-card-small h3\s*\{[^}]*-webkit-line-clamp:\s*2', CSS, re.S)


def test_global_filter_chips_do_not_inject_user_input_via_innerhtml():
    render_chips = re.search(r'function renderGlobalFilterChips\(\)\s*\{(.*?)\n\s*\}', FILTERS, re.S)
    assert render_chips is not None
    assert 'chips.innerHTML' not in render_chips.group(1)
    assert 'document.createElement' in render_chips.group(1)
