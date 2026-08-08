from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')
CSS = (ROOT / 'mockup.css').read_text(encoding='utf-8')


def test_press_headings_share_one_desktop_grid_row():
    match = re.search(r'<div class="press-columns-head">(.*?)</div>\s*<div class="press-layout">', HTML, re.S)
    assert match, 'press-columns-head row missing before press-layout'
    block = match.group(1)
    assert 'Bài nổi bật' in block
    assert 'Nguồn khác' in block
    assert block.index('Bài nổi bật') < block.index('Nguồn khác')


def test_press_columns_keep_mobile_headings_for_stacked_layout():
    assert 'press-column-heading-mobile">Bài nổi bật</h3>' in HTML
    assert 'press-column-heading-mobile">Nguồn khác</h3>' in HTML
    assert '.press-column-heading-mobile { display: none; }' in CSS


def test_press_small_card_uses_media_flexible_text_compact_grid():
    block = re.search(r'\.press-card-small\s*\{([^}]*)\}', CSS, re.S)
    assert block
    assert 'display: grid;' in block.group(1)
    assert 'grid-template-columns: 1fr;' in block.group(1)
    assert 'grid-template-rows: minmax(0,1fr) auto;' in block.group(1)
    small_body = re.search(r'\.press-small-body\s*\{([^}]*)\}', CSS, re.S)
    assert small_body
    assert 'flex:' not in small_body.group(1)


def test_press_heading_grid_matches_40_60_columns():
    head = re.search(r'\.press-columns-head\s*\{([^}]*)\}', CSS, re.S)
    assert head
    assert 'grid-template-columns: minmax(0,.4fr) minmax(0,.6fr);' in head.group(1)


def test_press_mobile_switches_to_column_owned_headings():
    media = re.search(r'@media \(max-width: 1199px\)\s*\{(.*?)\n\}', CSS, re.S)
    assert media
    text = media.group(1)
    assert '.press-columns-head { display: none; }' in text
    assert re.search(r'\.press-column-heading-mobile\s*\{[^}]*display:\s*flex;', text, re.S)
