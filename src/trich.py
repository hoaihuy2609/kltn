"""Cắt đoạn trích từ PDF gốc (Thông tư 22/2021, Công văn 7991) và tô đỏ đúng các chữ cần nhấn.

Chữ được định vị bằng toạ độ thật trong PDF (pdfplumber), nên phần tô đỏ trùng khít nguyên văn.
"""
import sys, subprocess, tempfile, os, unicodedata
import pdfplumber
from PIL import Image, ImageDraw

TT = '/root/.claude/uploads/6b1f06c1-7651-543a-96d2-5b092d4f49e8/3d27df11-thong-tu-22-2021-tt-bgddt_195202315.pdf'
CV = '/root/.claude/uploads/6b1f06c1-7651-543a-96d2-5b092d4f49e8/60f899d6-cong-van-7991-huong-dan-ktdgdk.pdf'
OUT = sys.argv[1]
DPI = 220
S = DPI / 72
RED = (220, 38, 38)

_pages = {}
def render(pdf, page):
    key = (pdf, page)
    if key not in _pages:
        tmp = tempfile.mkdtemp()
        subprocess.run(['pdftoppm', '-r', str(DPI), '-f', str(page), '-l', str(page), '-png', pdf, os.path.join(tmp, 'p')], check=True)
        f = [x for x in os.listdir(tmp) if x.endswith('.png')][0]
        _pages[key] = Image.open(os.path.join(tmp, f)).convert('RGB')
    return _pages[key]

def norm(t):
    return unicodedata.normalize('NFC', t).strip('“”"().,;:').lower()

def words(pdf, page):
    with pdfplumber.open(pdf) as d:
        ws = d.pages[page - 1].extract_words()
    return sorted(ws, key=lambda w: (round(w['top']), w['x0']))

def find(pdf, page, phrase, after=0):
    """Hộp bao (theo từng dòng) của cụm từ phrase, tìm từ toạ độ y >= after."""
    ws = [w for w in words(pdf, page) if w['top'] >= after]
    target = [norm(t) for t in phrase.split()]
    toks = [norm(w['text']) for w in ws]
    for i in range(len(toks) - len(target) + 1):
        if all(toks[i + k].startswith(target[k]) for k in range(len(target))):
            hit = ws[i:i + len(target)]
            lines = {}
            for w in hit:
                key = round(w['top'])
                b = lines.setdefault(key, [w['x0'], w['top'], w['x1'], w['bottom']])
                b[0] = min(b[0], w['x0']); b[1] = min(b[1], w['top']); b[2] = max(b[2], w['x1']); b[3] = max(b[3], w['bottom'])
            return list(lines.values())
    raise SystemExit(f'không tìm thấy: {phrase!r} trang {page}')

def piece(pdf, page, box, marks=()):
    """Cắt vùng box (pt) và tô đỏ các hộp marks (pt)."""
    x0, y0, x1, y1 = box
    img = render(pdf, page).copy()
    over = Image.new('RGBA', img.size, (0, 0, 0, 0))
    dr = ImageDraw.Draw(over)
    for (a, b, c, d) in marks:
        r = [(a - 2) * S, (b - 2) * S, (c + 2) * S, (d + 2) * S]
        dr.rounded_rectangle(r, radius=int(3 * S), fill=(*RED, 46), outline=(*RED, 255), width=int(1.3 * S))
    img = Image.alpha_composite(img.convert('RGBA'), over).convert('RGB')
    return img.crop((int(x0 * S), int(y0 * S), int(x1 * S), int(y1 * S)))

def stack(parts, gap=46):
    """Ghép các mảnh theo chiều dọc, giữa các mảnh có dải '⋯' cho biết đã lược bớt."""
    w = max(p.width for p in parts)
    h = sum(p.height for p in parts) + gap * (len(parts) - 1)
    out = Image.new('RGB', (w, h), 'white')
    y = 0
    for i, p in enumerate(parts):
        out.paste(p, (0, y)); y += p.height
        if i < len(parts) - 1:
            d = ImageDraw.Draw(out)
            cy = y + gap // 2
            for k in (-28, 0, 28):
                d.ellipse([w // 2 + k - 6, cy - 6, w // 2 + k + 6, cy + 6], fill=(168, 162, 158))
            y += gap
    return out

def save(img, name, pad=26):
    out = Image.new('RGB', (img.width + 2 * pad, img.height + 2 * pad), 'white')
    out.paste(img, (pad, pad))
    out.save(os.path.join(OUT, name + '.png'), optimize=True)
    print(name, out.size)

def marks(pdf, page, *phrases, after=0):
    out = []
    for p in phrases: out += find(pdf, page, p, after)
    return out

# ---- Thông tư 22/2021 ----
tt_head = piece(TT, 1, (66, 64, 529, 170))
tt_d3 = piece(TT, 1, (66, 662, 529, 771), marks(TT, 1,
    'cung cấp thông tin chính xác, kịp thời để học sinh điều chỉnh hoạt động rèn luyện và học tập, cán bộ quản lý giáo dục và giáo viên điều chỉnh hoạt động dạy học.', after=660))
tt_d41 = piece(TT, 1, (66, 748, 529, 771), marks(TT, 1, 'Đánh giá căn cứ vào yêu cầu cần đạt được quy định trong Chương trình giáo dục phổ thông.', after=740))
tt_d7a = piece(TT, 3, (66, 160, 529, 218))
tt_d7b = piece(TT, 3, (66, 270, 529, 311), marks(TT, 3,
    'đề kiểm tra được xây dựng dựa trên ma trận, đặc tả của đề kiểm tra, đáp ứng theo yêu cầu cần đạt của môn học được quy định trong Chương trình giáo dục phổ thông.', after=270))
# Điều 3 + Điều 4 khoản 1 (cùng vùng; tô cả hai)
tt_d34 = piece(TT, 1, (66, 662, 529, 771), marks(TT, 1,
    'cung cấp thông tin chính xác, kịp thời để học sinh điều chỉnh hoạt động rèn luyện và học tập, cán bộ quản lý giáo dục và giáo viên điều chỉnh hoạt động dạy học.', after=660)
    + marks(TT, 1, 'Đánh giá căn cứ vào yêu cầu cần đạt được quy định trong Chương trình giáo dục phổ thông.', after=740))
save(stack([tt_head, tt_d34]), 'tt22-dieu3-4')
save(stack([tt_head, tt_d7a, tt_d7b]), 'tt22-dieu7')
save(tt_d41, 'tt22-dieu4-nho')
save(tt_d34, 'tt22-dieu3-4-nho')
save(stack([tt_d7a, tt_d7b]), 'tt22-dieu7-nho')

# ---- Công văn 7991 ----
cv_head = piece(CV, 1, (64, 52, 545, 140))
cv_body = piece(CV, 1, (64, 304, 545, 389), marks(CV, 1,
    'xây dựng ma trận, bản đặc tả, đề kiểm tra và hướng dẫn chấm đề kiểm tra định kì', 'trong năm học 2024-2025 triển khai thực hiện từ học kì 2.', after=300))
save(stack([cv_head, cv_body]), 'cv7991-noi-dung')
save(cv_body, 'cv7991-noi-dung-nho')

ws2 = words(CV, 2)
def box_of(texts, top_lo, top_hi):
    hit = [w for w in ws2 if top_lo <= w['top'] <= top_hi and norm(w['text']) in texts]
    return [min(w['x0'] for w in hit), min(w['top'] for w in hit), max(w['x1'] for w in hit), max(w['bottom'] for w in hit)]
types = box_of({norm(t) for t in ['Nhiều', 'lựa', 'chọn', '“Đúng', '–', 'Sai”2', 'Trả', 'lời', 'ngắn3']}, 214, 222)
ratio = [w for w in ws2 if 405 <= w['top'] <= 412 and w['x0'] > 620]
ratio = [min(w['x0'] for w in ratio), min(w['top'] for w in ratio), max(w['x1'] for w in ratio), max(w['bottom'] for w in ratio)]
levels = [w for w in ws2 if 230 <= w['top'] <= 250 and w['x0'] > 620]
levels = [min(w['x0'] for w in levels), min(w['top'] for w in levels), max(w['x1'] for w in levels), max(w['bottom'] for w in levels)]
save(piece(CV, 2, (76, 80, 776, 424), [types, levels, ratio]), 'cv7991-ma-tran')
save(piece(CV, 2, (360, 168, 776, 424), [types, levels, ratio]), 'cv7991-ma-tran-nho')

ws3 = words(CV, 3)
ycd = [w for w in ws3 if 130 <= w['top'] <= 140 and 240 <= w['x0'] <= 345]
ycd = [min(w['x0'] for w in ycd), min(w['top'] for w in ycd), max(w['x1'] for w in ycd), max(w['bottom'] for w in ycd)]
lv = [w for w in ws3 if 180 <= w['top'] <= 245 and 240 <= w['x0'] <= 300]
lv = [min(w['x0'] for w in lv), min(w['top'] for w in lv), max(w['x1'] for w in lv), max(w['bottom'] for w in lv)]
save(piece(CV, 3, (70, 50, 776, 262), [ycd, lv]), 'cv7991-dac-ta')
save(piece(CV, 3, (70, 50, 540, 262), [ycd, lv]), 'cv7991-dac-ta-nho')

# ---- Chương trình môn Vật lí 2018 (ban hành kèm Thông tư 32/2018) ----
CT = '/root/.claude/uploads/6b1f06c1-7651-543a-96d2-5b092d4f49e8/ed6b8ba4-12-ctvat-li-16202320.pdf'
ct_h1 = piece(CT, 1, (180, 50, 690, 80))
ct_h2 = piece(CT, 1, (180, 214, 690, 332))
ws13 = words(CT, 13)
def wbox(cond):
    hit = [w for w in ws13 if cond(w)]
    return [min(w['x0'] for w in hit), min(w['top'] for w in hit), max(w['x1'] for w in hit), max(w['bottom'] for w in hit)]
head = wbox(lambda w: 58 <= w['top'] <= 70 and w['x0'] > 300)
sect = wbox(lambda w: 120 <= w['top'] <= 132)
ex = marks(CT, 13, 'Nêu được biểu thức tính công bằng tích của lực tác dụng và độ dịch chuyển theo phương của lực, nêu được đơn vị đo công là đơn vị đo năng lượng (với 1 J = 1 Nm); Tính được công trong một số trường hợp đơn giản.', after=220)
ct_body = piece(CT, 13, (78, 54, 792, 268), [head, sect] + ex)
save(stack([ct_h1, ct_h2]), 'ct-vatli-bia')
save(ct_body, 'ct-vatli-nang-luong-nho')
save(stack([ct_h1, ct_h2, piece(CT, 13, (78, 54, 792, 527), [head, sect] + ex)]), 'ct-vatli-nang-luong')
