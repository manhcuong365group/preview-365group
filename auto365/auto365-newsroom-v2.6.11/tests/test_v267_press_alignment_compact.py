from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')
CSS = (ROOT / 'mockup.css').read_text(encoding='utf-8')


def test_press_each_column_owns_its_heading():
    assert 'class="press-featured"' in HTML
    featured = re.search(r'<div class="press-featured">(.*?)<a class="press-card press-card-lead"', HTML, re.S)
    assert featured, 'featured column wrapper/heading missing'
    assert 'Bài nổi bật</h3>' in featured.group(1)

    secondary = re.search(r'<div class="press-secondary">(.*?)<div class="press-slider-stage">', HTML, re.S)
    assert secondary, 'secondary column heading missing'
    assert 'Nguồn khác</h3>' in secondary.group(1)
    assert 'press-columns-head' in HTML


def test_press_compact_stage_height():
    assert '--press-stage-height: 396px' in CSS


def test_press_small_body_does_not_stretch_to_fill_card():
    assert 'grid-template-rows: minmax(0,1fr) auto;' in CSS
    small_body = re.search(r'\.press-small-body\s*\{([^}]*)\}', CSS, re.S)
    assert small_body and 'flex:' not in small_body.group(1)


def test_press_column_headings_share_one_style():
    assert '.press-column-heading {' in CSS
    assert 'min-height: 24px;' in CSS
