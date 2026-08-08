from pathlib import Path
import re
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')
CSS = (ROOT / 'mockup.css').read_text(encoding='utf-8')
SOUP = BeautifulSoup(HTML, 'html.parser')


def test_press_uses_40_60_columns_on_desktop():
    assert re.search(
        r'\.press-layout\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*\.4fr\)\s+minmax\(0,\s*\.6fr\)',
        CSS,
        re.S,
    )


def test_press_stage_is_compact_and_balanced():
    matches = re.findall(r'--press-stage-height:\s*(\d+)px', CSS)
    assert matches
    height = int(matches[-1])
    assert 360 <= height <= 420
    assert re.search(r'\.press-card-lead\s*\{[^}]*height:\s*var\(--press-stage-height\)', CSS, re.S)
    assert re.search(r'\.press-swiper\s*\{[^}]*height:\s*var\(--press-stage-height\)', CSS, re.S)


def test_press_secondary_titles_stay_compact():
    assert re.search(r'\.press-card-small h3\s*\{[^}]*-webkit-line-clamp:\s*2', CSS, re.S)
    assert re.search(r'\.press-card-small h3\s*\{[^}]*font-size:\s*(14|15)px', CSS, re.S)
