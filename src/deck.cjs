// Nội dung và bố cục bộ slide báo cáo đề cương (mẫu B · Hiện đại).
// Mỗi slide là danh sách phần tử với toạ độ px trên khung 1280 × 720;
// html.cjs và pptx.cjs vẽ cùng danh sách này nên hai bản khớp nhau.

const C = {
  bg: 'FAF8F4', dark: '1C1917', brown: '92400E', amber: 'D97706', gold: 'FBBF24', band: 'B45309',
  text: '1C1917', muted: '57534E', soft: '78716C', faint: 'A8A29E', white: 'FFFFFF', track: 'EEE7DC',
  line: 'E7E5E4', darkMuted: 'D6D3D1', tint: 'FEF3C7', green: '166534', greenTint: 'DCFCE7',
};

const L = 72, R = 1208, W = R - L, TOP = 176, BOTTOM = 664, H = BOTTOM - TOP;

const text = (x, y, w, h, t, o = {}) => ({ t: 'text', x, y, w, h, text: t, size: 18, color: C.text, ...o });
const rect = (x, y, w, h, o = {}) => ({ t: 'rect', x, y, w, h, fill: C.white, radius: 16, ...o });
const card = (x, y, w, h, o = {}) => rect(x, y, w, h, { shadow: true, ...o });
const img = (x, y, w, h, src, o = {}) => ({ t: 'img', x, y, w, h, src, ...o });
const circle = (x, y, d, fill) => ({ t: 'ellipse', x, y, w: d, h: d, fill });
const badge = (x, y, n, o = {}) => [rect(x, y, 40, 40, { fill: o.fill || C.brown, radius: 12 }),
  text(x, y, 40, 40, String(n), { size: o.size || 18, bold: true, color: o.color || C.white, align: 'center', valign: 'middle' })];

const slides = [];
const content = (kicker, title, els, id) => slides.push({ layout: 'content', kicker, title, els, id });
// Ô trích dẫn văn bản: ảnh xem trước + nhãn; HTML chạm để phóng to, PowerPoint bấm để tới slide căn cứ.
const cite = (x, y, w, h, src, label, target, o = {}) => ({ t: 'cite', x, y, w, h, src, label, target, ...o });

// 1. Bìa
slides.push({ layout: 'cover', els: [
  rect(0, 0, 16, 720, { fill: C.band, radius: 0 }),
  circle(88, 64, 60, C.white), img(90, 66, 56, 56, 'truong', { round: true }),
  circle(160, 64, 60, C.white), img(162, 66, 56, 56, 'khoa', { round: true }),
  text(236, 70, 500, 48, 'TRƯỜNG ĐẠI HỌC AN GIANG\nKHOA SƯ PHẠM', { size: 15, bold: true, color: C.darkMuted, lh: 1.45, spacing: 0.6 }),
  text(88, 200, 900, 24, 'BÁO CÁO ĐỀ CƯƠNG KHÓA LUẬN TỐT NGHIỆP', { size: 16, bold: true, color: C.gold, spacing: 3 }),
  text(88, 238, 1060, 190, 'Xây dựng website hỗ trợ giáo viên trong việc biên soạn đề kiểm tra Vật lí 10 nhằm đánh giá năng lực học sinh ở học kì II',
    { size: 46, weight: 800, color: C.white, lh: 1.2 }),
  text(88, 560, 260, 20, 'SINH VIÊN THỰC HIỆN', { size: 13, bold: true, color: C.faint, spacing: 1.3 }),
  text(88, 584, 300, 30, 'Nguyễn Trần Hoài Huy', { size: 20, color: C.white }),
  text(390, 560, 300, 20, 'GIẢNG VIÊN HƯỚNG DẪN', { size: 13, bold: true, color: C.faint, spacing: 1.3 }),
  text(390, 584, 320, 30, 'TS. Trần Quốc Duyệt', { size: 20, color: C.white }),
  text(908, 584, 300, 30, 'An Giang, tháng 11/2026', { size: 16, bold: true, color: C.faint, align: 'right' }),
] });

// 2. Nội dung trình bày
{
  const items = ['Tính cần thiết của đề tài', 'Tổng quan vấn đề nghiên cứu', 'Mục tiêu nghiên cứu', 'Câu hỏi nghiên cứu', 'Đối tượng và phạm vi nghiên cứu',
    'Phương pháp nghiên cứu', 'Kết quả bước đầu (giai đoạn 1)', 'Nội dung và cấu trúc dự kiến của khóa luận', 'Những đóng góp dự kiến của đề tài', 'Kế hoạch thực hiện'];
  const els = [];
  const cw = (W - 32) / 2, gap = 14, ch = (H - 4 * gap) / 5;
  items.forEach((label, i) => {
    const x = L + (i < 5 ? 0 : cw + 32), y = TOP + (i % 5) * (ch + gap), hl = i === 6;
    els.push(card(x, y, cw, ch, hl ? { fill: C.dark } : {}),
      text(x + 26, y, 70, ch, String(i + 1).padStart(2, '0'), { size: 30, weight: 800, color: hl ? C.gold : C.amber, valign: 'middle' }),
      text(x + 96, y, cw - 120, ch, label, { size: 21, bold: true, color: hl ? C.white : C.text, valign: 'middle' }));
  });
  content('NỘI DUNG TRÌNH BÀY', 'Báo cáo gồm mười phần, theo đề cương', els);
}

// 3. Tính cần thiết
{
  const rows = [
    ['01', 'Công văn 7991 đặt ra nhiều ràng buộc cùng lúc', 'Số câu theo dạng và mức độ, tỉ lệ điểm, phủ kín YCCĐ; ma trận, bản đặc tả và đề phải khớp nhau.'],
    ['02', 'Làm thủ công dễ sai lệch', 'Thay một câu hỏi phải sửa cả ma trận, bản đặc tả và đề; câu “Đúng – Sai” có 4 ý thuộc nhiều mức khác nhau.'],
    ['03', 'Công cụ hiện có chưa đáp ứng', 'Chủ yếu lưu câu hỏi, sinh đề ngẫu nhiên; ít gắn câu hỏi với YCCĐ, chưa xuất ma trận, bản đặc tả theo mẫu 7991.'],
    ['→', 'Giải pháp: một nguồn dữ liệu cho cả ba tài liệu', 'Website lập ma trận, bản đặc tả và đề theo Công văn 7991; mỗi câu hỏi gắn một dòng YCCĐ và một mức độ.'],
  ];
  const rh = 106, gap = (H - 4 * rh) / 3, els = [], rw = W - 316;
  rows.forEach(([k, h, p], i) => {
    const y = TOP + i * (rh + gap), dark = i === 3;
    els.push(card(L, y, rw, rh, dark ? { fill: C.dark } : {}),
      text(L + 26, y, 70, rh, k, { size: 34, weight: 800, color: dark ? C.gold : C.amber, valign: 'middle' }),
      text(L + 96, y + 14, rw - 120, 30, h, { size: 21, bold: true, color: dark ? C.white : C.text }),
      text(L + 96, y + 46, rw - 120, 50, p, { size: 16, color: dark ? C.darkMuted : C.muted, lh: 1.4 }));
  });
  const cx = L + rw + 24, cwid = R - cx, chh = (H - 20) / 2;
  els.push(cite(cx, TOP, cwid, chh, 'cv7991-noi-dung-nho', 'Công văn 7991: xây dựng ma trận, bản đặc tả, đề kiểm tra định kì', 'cv7991', { tall: true }),
    cite(cx, TOP + chh + 20, cwid, chh, 'tt22-dieu7-nho', 'Thông tư 22/2021, Điều 7: đề kiểm tra dựa trên ma trận, đặc tả', 'tt22', { tall: true }));
  content('01 — TÍNH CẦN THIẾT CỦA ĐỀ TÀI', 'Vì sao cần một website soạn đề?', els);
}

// 3b. Căn cứ pháp lí: Thông tư 22/2021
function docCard(x, y, w, h, kicker, name, lines, points) {
  const els = [card(x, y, w, h, { fill: C.dark }),
    text(x + 26, y + 26, w - 52, 22, kicker, { size: 14, bold: true, color: C.gold, spacing: 1.5 }),
    text(x + 26, y + 54, w - 52, 64, name, { size: 22, weight: 800, color: C.white, lh: 1.25 }),
    text(x + 26, y + 124, w - 52, 120, lines, { size: 15, color: C.darkMuted, lh: 1.45 })];
  points.forEach((t, i) => {
    const py = y + 262 + i * 98;
    els.push(circle(x + 28, py + 8, 10, C.gold), text(x + 50, py, w - 76, 90, t, { size: 16, bold: true, color: C.white, lh: 1.4 }));
  });
  return els;
}
function excerptCard(x, y, w, h, src, label, ratio) {
  const ih = h - 58, iw = Math.min(w - 32, Math.round(ih * ratio));
  return [card(x, y, w, h), text(x + 18, y + 14, w - 36, 24, label, { size: 15, bold: true, color: C.brown }),
    img(x + 16, y + 44, iw, ih, src, { zoom: true, frame: true })];
}
{
  const lw = 284, rx = L + lw + 24, rw = R - rx, ch = (H - 16) / 2;
  content('01 — TÍNH CẦN THIẾT CỦA ĐỀ TÀI · CĂN CỨ PHÁP LÍ', 'Thông tư 22/2021/TT-BGDĐT', [
    ...docCard(L, TOP, lw, H, 'THÔNG TƯ SỐ', '22/2021/TT-BGDĐT', 'Bộ Giáo dục và Đào tạo, ngày 20/7/2021. Quy định về đánh giá học sinh trung học cơ sở và học sinh trung học phổ thông.',
      ['Đánh giá căn cứ vào yêu cầu cần đạt (Điều 4)', 'Đề kiểm tra định kì dựa trên ma trận, đặc tả (Điều 7)']),
    ...excerptCard(rx, TOP, rw, ch, 'tt22-dieu3-4-nho', 'Điều 3. Mục đích đánh giá · Điều 4. Yêu cầu đánh giá (khoản 1)', 1467 / 385),
    ...excerptCard(rx, TOP + ch + 16, rw, ch, 'tt22-dieu7-nho', 'Điều 7. Đánh giá định kì (khoản 1)', 1467 / 401),
    { t: 'note', text: 'Trích nguyên văn · phần tô đỏ do người báo cáo đánh dấu' },
  ], 'tt22');
}

// 3c. Căn cứ pháp lí: Công văn 7991
{
  const lw = 284, rx = L + lw + 24, rw = R - rx, h1 = 218, h2 = H - h1 - 16, bw = (rw - 16) / 2;
  content('01 — TÍNH CẦN THIẾT CỦA ĐỀ TÀI · CĂN CỨ PHÁP LÍ', 'Công văn 7991/BGDĐT-GDTrH', [
    ...docCard(L, TOP, lw, H, 'CÔNG VĂN SỐ', '7991/BGDĐT-GDTrH', 'Bộ Giáo dục và Đào tạo, ngày 17/12/2024. V/v thực hiện kiểm tra, đánh giá đối với cấp THCS, THPT.',
      ['Xây dựng ma trận, bản đặc tả, đề kiểm tra định kì; áp dụng từ học kì 2 năm học 2024 – 2025', 'Phụ lục: mẫu ma trận và bản đặc tả']),
    ...excerptCard(rx, TOP, rw, h1, 'cv7991-noi-dung-nho', 'Nội dung công văn', 1522 / 312),
    ...excerptCard(rx, TOP + h1 + 16, bw, h2, 'cv7991-ma-tran-nho', 'Phụ lục 1: mẫu ma trận đề kiểm tra', 1323 / 834),
    ...excerptCard(rx + bw + 16, TOP + h1 + 16, bw, h2, 'cv7991-dac-ta-nho', 'Phụ lục 2: mẫu bản đặc tả', 1489 / 700),
    { t: 'note', text: 'Trích nguyên văn · phần tô đỏ do người báo cáo đánh dấu' },
  ], 'cv7991');
}

// helper: thẻ có nhãn, tiêu đề, các ý
function pointCard(x, y, w, h, tag, title, points, o = {}) {
  const dark = o.dark, els = [card(x, y, w, h, dark ? { fill: C.dark } : {})];
  els.push(rect(x + 28, y + 26, 60, 30, { fill: dark ? C.gold : C.tint, radius: 15 }),
    text(x + 28, y + 26, 60, 30, tag, { size: 15, bold: true, color: dark ? C.dark : C.brown, align: 'center', valign: 'middle' }),
    text(x + 28, y + 70, w - 56, 34, title, { size: 23, bold: true, color: dark ? C.white : C.text }));
  let py = y + 120;
  points.forEach(([p, ph]) => {
    els.push(circle(x + 30, py + 9, 9, dark ? C.gold : C.amber),
      text(x + 52, py, w - 82, ph, p, { size: 18, color: dark ? C.darkMuted : C.muted, lh: 1.45 }));
    py += ph + 16;
  });
  return els;
}

// 4. Tổng quan: YCCĐ, ma trận và bản đặc tả
{
  const cw = (W - 32) / 2;
  content('02 — TỔNG QUAN VẤN ĐỀ NGHIÊN CỨU · 2.1 – 2.2', 'Đánh giá theo YCCĐ và bản đặc tả', [
    ...pointCard(L, TOP, cw, H, '2.1', 'Kiểm tra, đánh giá theo YCCĐ', [
      ['Đánh giá trên lớp phát huy tác dụng khi gắn với mục tiêu học tập và cung cấp thông tin để điều chỉnh dạy học (Black & Wiliam, 1998).', 104],
      ['Chương trình 2018 cụ thể hóa mục tiêu thành YCCĐ; Thông tư 22/2021 quy định đánh giá căn cứ vào YCCĐ.', 78],
      ['Mỗi câu hỏi kiểm tra cần truy vết được tới một dòng YCCĐ cụ thể.', 52],
    ]),
    ...pointCard(L + cw + 32, TOP, cw, H, '2.2', 'Ma trận và bản đặc tả đề kiểm tra', [
      ['Bảng đặc tả đối chiếu nội dung với mức độ nhận thức, bảo đảm độ giá trị nội dung (Miller, Linn, & Gronlund, 2009).', 78],
      ['Lập bảng đặc tả trước khi viết đề giúp tránh dồn câu vào một nội dung, một mức độ (Fives & DiDonato-Barnes, 2013).', 78],
      ['Mẫu Công văn 7991 tách ma trận và bản đặc tả; ví dụ minh họa phân bổ điểm Biết – Hiểu – Vận dụng: 40% – 30% – 30%.', 78],
    ]),
    cite(L + 24, BOTTOM - 96, cw - 48, 76, 'tt22-dieu3-4-nho', 'Thông tư 22/2021, Điều 3 – 4: đánh giá căn cứ YCCĐ', 'tt22'),
    cite(L + cw + 32 + 24, BOTTOM - 96, cw - 48, 76, 'cv7991-ma-tran-nho', 'Phụ lục Công văn 7991: mẫu ma trận, tỉ lệ 40 – 30 – 30', 'cv7991'),
  ]);
}

// 5. Phân mức độ
{
  const cols = [
    ['Biết', 'Nhắc lại định nghĩa, công thức, đơn vị.', C.gold, C.dark],
    ['Hiểu', 'Định tính, giải thích hiện tượng, so sánh; biến đổi công thức để suy ra tỉ lệ mà không thay số.', C.amber, C.white],
    ['Vận dụng', 'Thay số vào công thức để tính ra giá trị.', C.brown, C.white],
  ];
  const cw = (W - 2 * 24) / 3, els = [
    text(L, TOP, W, 30, 'Cơ sở: Bloom (1956); Anderson và Krathwohl (2001). Công văn 7991 dùng ba mức Biết – Hiểu – Vận dụng.', { size: 19, color: C.muted }),
  ];
  cols.forEach(([name, rule, fill, fg], i) => {
    const x = L + i * (cw + 24), y = TOP + 50;
    els.push(card(x, y, cw, 222), ...badge(x + 28, y + 24, i + 1, { fill, color: fg }),
      text(x + 28, y + 76, cw - 56, 40, name, { size: 30, weight: 800 }),
      text(x + 28, y + 122, cw - 56, 90, rule, { size: 18, color: C.muted, lh: 1.4 }));
  });
  els.push(cite(L, TOP + 288, W, 70, 'cv7991-ma-tran-nho', 'Phụ lục Công văn 7991: ma trận và bản đặc tả chia theo ba mức Biết – Hiểu – Vận dụng', 'cv7991'));
  els.push(card(L, TOP + 374, W, 114, { fill: C.dark }),
    text(L + 30, TOP + 374, 60, 114, '→', { size: 36, weight: 800, color: C.gold, valign: 'middle' }),
    text(L + 100, TOP + 394, W - 130, 32, 'Trả lời ngắn là bài tập tính toán nên luôn xếp mức Vận dụng', { size: 22, bold: true, color: C.white }),
    text(L + 100, TOP + 430, W - 130, 30, 'Câu “Đúng – Sai”: xếp mức riêng cho từng ý a, b, c, d · Quy tắc do giảng viên hướng dẫn thống nhất', { size: 17, color: C.darkMuted }));
  content('02 — TỔNG QUAN VẤN ĐỀ NGHIÊN CỨU · 2.3', 'Quy tắc phân loại mức độ câu hỏi', els);
}

// 6. Câu trắc nghiệm, công cụ và khoảng trống
{
  const cw = (W - 32) / 2;
  content('02 — TỔNG QUAN VẤN ĐỀ NGHIÊN CỨU · 2.4 – 2.5', 'Chất lượng câu hỏi, đánh giá công cụ', [
    ...pointCard(L, TOP, cw, 330, '2.4', 'Yêu cầu đối với câu trắc nghiệm', [
      ['Phương án nhiễu phải hợp lí; hạn chế “tất cả các phương án trên” (Haladyna, Downing, & Rodriguez, 2002).', 78],
      ['Áp dụng khi rà soát ngân hàng và khi trộn đề: phương án nhắc tới phương án khác được giữ nguyên thứ tự.', 78],
    ]),
    ...pointCard(L + cw + 32, TOP, cw, 330, '2.5', 'Đánh giá công cụ hỗ trợ dạy học', [
      ['Tính hữu ích và tính dễ sử dụng quyết định việc chấp nhận công nghệ (Davis, 1989).', 52],
      ['Tính khả dụng: thang SUS 10 mục (Brooke, 1996); dễ học, hiệu quả, dễ nhớ, ít lỗi, hài lòng (Nielsen, 1993).', 78],
    ]),
    card(L, TOP + 354, W, 134, { fill: C.dark }),
    text(L + 30, TOP + 354, 60, 134, '→', { size: 36, weight: 800, color: C.gold, valign: 'middle' }),
    text(L + 100, TOP + 376, W - 130, 32, 'Khoảng trống nghiên cứu', { size: 22, bold: true, color: C.gold }),
    text(L + 100, TOP + 412, W - 130, 60, 'Một công cụ chuyên cho Vật lí 10, trong đó ma trận, bản đặc tả và đề sinh ra từ cùng một nguồn dữ liệu (câu hỏi đã gắn YCCĐ và mức độ), luôn khớp nhau và xuất theo mẫu Công văn 7991.',
      { size: 18, color: C.white, lh: 1.45 }),
  ]);
}

// 7. Mục tiêu
{
  const items = [
    'Hệ thống hóa cơ sở lí luận về kiểm tra, đánh giá theo YCCĐ, ma trận, bản đặc tả và phân loại mức độ nhận thức.',
    'Xây dựng bộ YCCĐ theo bài và theo ba mức cho học kì II; hoàn thành trước cho Bài 23 – 27.',
    'Xây dựng ngân hàng câu hỏi ba dạng; mỗi câu (mỗi ý) được gắn YCCĐ và mức độ.',
    'Xây dựng website: lập ma trận → chọn câu theo YCCĐ → xuất ma trận, bản đặc tả → biên soạn, trộn, xuất đề.',
    'Thử nghiệm với giáo viên Vật lí; đánh giá tính khả dụng, tính hữu ích và mức độ phù hợp với Công văn 7991.',
  ];
  const lw = 404, rx = L + lw + 28, rw = R - rx, ih = 84, gap = (H - 5 * ih) / 4;
  const els = [card(L, TOP, lw, H, { fill: C.dark }),
    text(L + 32, TOP + 32, lw - 64, 24, 'MỤC TIÊU TỔNG QUÁT', { size: 15, bold: true, color: C.gold, spacing: 1.5 }),
    text(L + 32, TOP + 72, lw - 64, 380, 'Xây dựng và đánh giá một website hỗ trợ giáo viên Vật lí lập ma trận, bản đặc tả và biên soạn đề kiểm tra định kì theo Công văn 7991 cho học kì II môn Vật lí 10 (Kết nối tri thức với cuộc sống); thử nghiệm trước với chủ đề “Năng lượng, công, công suất”.',
      { size: 21, color: C.white, lh: 1.5 })];
  items.forEach((t, i) => {
    const y = TOP + i * (ih + gap);
    els.push(card(rx, y, rw, ih), ...badge(rx + 22, y + 22, i + 1),
      text(rx + 82, y, rw - 106, ih, t, { size: 18, color: C.text, valign: 'middle', lh: 1.4 }));
  });
  content('03 — MỤC TIÊU NGHIÊN CỨU', 'Mục tiêu tổng quát và mục tiêu cụ thể', els);
}

// 8. Câu hỏi nghiên cứu
{
  const qs = [
    ['Hệ thống YCCĐ của các chủ đề học kì II cần được tổ chức như thế nào (theo bài, theo mức độ) để làm căn cứ chọn câu hỏi và lập bản đặc tả?', 'Trả lời qua: xây dựng bộ YCCĐ theo bài và theo mức (mục 6.2)'],
    ['Quy trình và chức năng nào giúp giáo viên lập được ma trận, bản đặc tả và đề kiểm tra khớp nhau theo mẫu của Công văn 7991?', 'Trả lời qua: thiết kế và phát triển website (mục 6.4)'],
    ['Website có đáp ứng yêu cầu về tính khả dụng, tính hữu ích và có rút ngắn thời gian soạn đề của giáo viên hay không?', 'Trả lời qua: khảo sát, thử nghiệm với giáo viên (mục 6.5 – 6.6)'],
  ];
  const rh = 148, gap = (H - 3 * rh) / 2, els = [];
  qs.forEach(([q, a], i) => {
    const y = TOP + i * (rh + gap);
    els.push(card(L, y, W, rh), text(L + 30, y, 90, rh, 'CH' + (i + 1), { size: 30, weight: 800, color: C.amber, valign: 'middle' }),
      text(L + 130, y + 24, W - 170, 64, q, { size: 21, bold: true, lh: 1.4 }),
      text(L + 130, y + 98, W - 170, 28, a, { size: 17, color: C.brown, bold: true }));
  });
  content('04 — CÂU HỎI NGHIÊN CỨU', 'Ba câu hỏi đề tài cần trả lời', els);
}

// 9. Đối tượng và phạm vi
{
  const lw = 452, rx = L + lw + 28, rw = R - rx, els = [];
  [['Đối tượng nghiên cứu', 'Quy trình lập ma trận, bản đặc tả và biên soạn đề kiểm tra định kì học kì II môn Vật lí 10 theo Công văn 7991; website hỗ trợ quy trình này.'],
   ['Đối tượng khảo sát, thử nghiệm', 'Giáo viên dạy Vật lí cấp trung học phổ thông; có thể mở rộng tới sinh viên năm cuối ngành Sư phạm Vật lí.']].forEach(([h, p], i) => {
    const y = TOP + i * 166;
    els.push(card(L, y, lw, 150), text(L + 26, y + 20, lw - 52, 30, h, { size: 20, bold: true, color: C.brown }),
      text(L + 26, y + 56, lw - 52, 84, p, { size: 17, color: C.muted, lh: 1.45 }));
  });
  els.push(text(rx, TOP, rw, 26, 'Phạm vi nội dung: Vật lí 10 (Kết nối tri thức với cuộc sống), học kì II', { size: 17, bold: true, color: C.muted }));
  const topics = [['Năng lượng, công, công suất', 'Bài 23 – 27', 'Giai đoạn 1'], ['Động lượng', 'Bài 28 – 30', 'Giai đoạn 2'],
    ['Chuyển động tròn', 'Bài 31 – 32', 'Giai đoạn 2'], ['Biến dạng của vật rắn. Áp suất chất lỏng', 'Bài 33 – 34', 'Giai đoạn 2']];
  const tw = (rw - 16) / 2, th = 134;
  topics.forEach(([n, b, g], i) => {
    const x = rx + (i % 2) * (tw + 16), y = TOP + 40 + Math.floor(i / 2) * (th + 16), first = i === 0;
    els.push(card(x, y, tw, th, first ? { fill: C.brown } : {}),
      text(x + 22, y + 18, tw - 44, 56, n, { size: 19, bold: true, color: first ? C.white : C.text, lh: 1.35 }),
      text(x + 22, y + 92, 130, 24, b, { size: 16, bold: true, color: first ? C.tint : C.soft }),
      rect(x + tw - 132, y + 88, 110, 30, { fill: first ? C.gold : C.track, radius: 15 }),
      text(x + tw - 132, y + 88, 110, 30, g, { size: 14, bold: true, color: first ? C.dark : C.muted, align: 'center', valign: 'middle' }));
  });
  const fy = TOP + 348, fw = (W - 32) / 3;
  [['Dạng câu hỏi', 'Nhiều lựa chọn, “Đúng – Sai”, trả lời ngắn; chưa gồm tự luận'],
   ['Không gian', 'Trường Đại học An Giang, một số trường trung học phổ thông vùng đồng bằng sông Cửu Long'],
   ['Thời gian', 'Năm học 2026 – 2027, từ tháng 9/2026 đến tháng 4/2027']].forEach(([h, p], i) => {
    const x = L + i * (fw + 16);
    els.push(card(x, fy, fw, H - 348), text(x + 22, fy + 18, fw - 44, 26, h, { size: 15, bold: true, color: C.amber, spacing: 1 }),
      text(x + 22, fy + 50, fw - 44, 76, p, { size: 17, color: C.text, lh: 1.4 }));
  });
  content('05 — ĐỐI TƯỢNG VÀ PHẠM VI NGHIÊN CỨU', 'Nghiên cứu cái gì, ở đâu, khi nào', els);
}

// 10. Phương pháp
{
  const steps = [
    ['6.1', 'Nghiên cứu tài liệu', 'Chương trình 2018, Thông tư 22/2021, Công văn 7991, sách giáo khoa và sách giáo viên Vật lí 10.'],
    ['6.2', 'Xây dựng bộ YCCĐ', 'Mỗi bài gồm các dòng YCCĐ ở ba mức; lấy nguyên văn mục tiêu bài học trong sách giáo viên.'],
    ['6.3', 'Xây dựng ngân hàng câu', 'Bổ sung câu cho dòng YCCĐ còn thiếu; mỗi câu, mỗi ý “Đúng – Sai” gắn YCCĐ và mức độ.'],
    ['6.4', 'Phát triển website', 'Phát triển lặp với React, TypeScript, Vite, Supabase, KaTeX; kiểm thử tự động phần tính toán.'],
    ['6.5', 'Khảo sát, thử nghiệm', 'Khảo sát nhu cầu; thử nghiệm hai giai đoạn với giáo viên; thang SUS, câu hỏi theo TAM, phỏng vấn.'],
    ['6.6', 'Phân tích dữ liệu', 'Thống kê mô tả; điểm SUS quy về thang 0 – 100; mã hóa ý kiến định tính theo chủ đề.'],
  ];
  const cw = (W - 48) / 3, ch = (H - 24) / 2, els = [];
  steps.forEach(([n, h, p], i) => {
    const x = L + (i % 3) * (cw + 24), y = TOP + Math.floor(i / 3) * (ch + 24);
    els.push(card(x, y, cw, ch, i === 3 ? { fill: C.dark } : {}),
      rect(x + 24, y + 24, 60, 30, { fill: i === 3 ? C.gold : C.tint, radius: 15 }),
      text(x + 24, y + 24, 60, 30, n, { size: 15, bold: true, color: i === 3 ? C.dark : C.brown, align: 'center', valign: 'middle' }),
      text(x + 24, y + 70, cw - 48, 32, h, { size: 22, bold: true, color: i === 3 ? C.white : C.text }),
      text(x + 24, y + 112, cw - 48, 100, p, { size: 17, color: i === 3 ? C.darkMuted : C.muted, lh: 1.45 }));
  });
  content('06 — PHƯƠNG PHÁP NGHIÊN CỨU', 'Sáu bước thực hiện đề tài', els);
}

// 11. Bộ YCCĐ và AI
{
  const lw = 560, rx = L + lw + 28, rw = R - rx, els = [card(L, TOP, lw, H),
    text(L + 30, TOP + 24, 200, 86, '40', { size: 72, weight: 800, color: C.brown, lh: 1.1 }),
    text(L + 170, TOP + 40, lw - 200, 60, 'dòng YCCĐ cho năm bài của chủ đề “Năng lượng, công, công suất”', { size: 18, bold: true, color: C.muted, lh: 1.4 })];
  [['Sách giáo viên (nguyên văn)', 20], ['YCCĐ chủ đề trước (kiến thức nền)', 8], ['Chương trình 2018', 6], ['Tự đề xuất', 6]].forEach(([n, v], i) => {
    const y = TOP + 150 + i * 76;
    els.push(text(L + 30, y, lw - 120, 26, n, { size: 18, bold: true }), text(L + lw - 90, y, 60, 26, String(v), { size: 18, bold: true, color: C.muted, align: 'right' }),
      rect(L + 30, y + 36, lw - 60, 16, { fill: C.track, radius: 8 }), rect(L + 30, y + 36, (lw - 60) * v / 20, 16, { fill: C.amber, radius: 8, grow: true }));
  });
  els.push(card(rx, TOP, rw, H, { fill: C.dark }),
    text(rx + 30, TOP + 28, rw - 60, 24, 'SỬ DỤNG TRÍ TUỆ NHÂN TẠO (AI)', { size: 15, bold: true, color: C.gold, spacing: 1.5 }));
  [['Website không tích hợp AI', 'Không tự sinh nội dung đề khi giáo viên sử dụng.'],
   ['Claude hỗ trợ khi xây dựng', 'Soạn 91 câu bổ sung (22,2% ngân hàng chủ đề Năng lượng); đề xuất gắn YCCĐ, mức độ; hỗ trợ lập trình.'],
   ['Rà soát và ghi chú', 'Mọi câu hỏi, mọi kết quả phân loại đều được rà soát; câu do AI hỗ trợ được ghi chú rõ.']].forEach(([h, p], i) => {
    const y = TOP + 76 + i * 134;
    els.push(circle(rx + 32, y + 8, 12, C.gold), text(rx + 58, y, rw - 88, 30, h, { size: 20, bold: true, color: C.white }),
      text(rx + 58, y + 34, rw - 88, 84, p, { size: 17, color: C.darkMuted, lh: 1.45 }));
  });
  content('06 — PHƯƠNG PHÁP NGHIÊN CỨU · 6.2 – 6.3', 'Bộ YCCĐ và việc sử dụng AI', els);
}

// 12. Khảo sát và đánh giá
{
  const lw = 540, rx = L + lw + 28, rw = R - rx, els = [];
  els.push(text(L, TOP, lw, 26, 'Tiến trình', { size: 17, bold: true, color: C.muted }));
  [['12/2026', 'Khảo sát nhu cầu', 'Bảng hỏi về khó khăn khi lập ma trận, bản đặc tả theo Công văn 7991.'],
   ['12/2026 – 1/2027', 'Thử nghiệm giai đoạn 1', 'Giáo viên lập ma trận, đề cho chủ đề Năng lượng; ghi nhận thời gian và lỗi; điều chỉnh website.'],
   ['2 – 3/2027', 'Thử nghiệm giai đoạn 2', 'Lặp lại với đề gồm nhiều chủ đề học kì II khi dữ liệu đã hoàn thiện.']].forEach(([d, h, p], i) => {
    const y = TOP + 38 + i * 152;
    els.push(card(L, y, lw, 136), text(L + 24, y + 20, 240, 22, d, { size: 15, bold: true, color: C.amber }),
      text(L + 24, y + 44, lw - 48, 30, h, { size: 20, bold: true }), text(L + 24, y + 78, lw - 48, 52, p, { size: 16, color: C.muted, lh: 1.4 }));
  });
  els.push(text(rx, TOP, rw, 26, 'Công cụ đánh giá', { size: 17, bold: true, color: C.muted }));
  [['SUS', 'Thang SUS (Brooke, 1996)', 'Tính khả dụng: 10 mục, quy đổi điểm về thang 0 – 100.'],
   ['TAM', 'Câu hỏi theo mô hình TAM (Davis, 1989)', 'Tính hữu ích và tính dễ sử dụng của website.'],
   ['PV', 'Phỏng vấn ngắn', 'Mức độ phù hợp của ma trận, bản đặc tả, đề với Công văn 7991.']].forEach(([k, h, p], i) => {
    const y = TOP + 38 + i * 152;
    els.push(card(rx, y, rw, 136, i === 0 ? { fill: C.dark } : {}),
      rect(rx + 22, y + 26, 76, 76, { fill: i === 0 ? C.gold : C.tint, radius: 18 }),
      text(rx + 22, y + 26, 76, 76, k, { size: 22, weight: 800, color: i === 0 ? C.dark : C.brown, align: 'center', valign: 'middle' }),
      text(rx + 118, y + 26, rw - 140, 30, h, { size: 19, bold: true, color: i === 0 ? C.white : C.text }),
      text(rx + 118, y + 60, rw - 140, 56, p, { size: 16, color: i === 0 ? C.darkMuted : C.muted, lh: 1.4 }));
  });
  content('06 — PHƯƠNG PHÁP NGHIÊN CỨU · 6.5 – 6.6', 'Khảo sát, thử nghiệm và đánh giá', els);
}

// 13. Website
{
  const lw = 470, els = [];
  [['Lập ma trận', 'Số câu theo bài × dạng × mức; tự chia điểm, giáo viên sửa được.'],
   ['Chọn câu theo YCCĐ', '“Gợi ý chọn câu” chọn đủ số câu, ưu tiên phủ nhiều dòng YCCĐ.'],
   ['Rà soát và xuất', 'Ma trận, bản đặc tả theo mẫu 7991 cạnh đề bài; in hoặc lưu PDF.'],
   ['Biên soạn đề', 'Trộn nhiều mã đề; xuất PDF, LaTeX kèm bảng đáp án.']].forEach(([h, p], i) => {
    const y = TOP + i * 112;
    els.push(card(L, y, lw, 96), ...badge(L + 22, y + 28, i + 1),
      text(L + 82, y + 16, lw - 104, 28, h, { size: 20, bold: true }), text(L + 82, y + 46, lw - 104, 44, p, { size: 15, color: C.muted, lh: 1.4 }));
  });
  const sx = L + lw + 32, sw = R - sx, sh = Math.round(sw * 900 / 1440);
  els.push(img(sx, TOP, sw, sh, 'export', { radius: 14, shadow: true }),
    text(sx, TOP + sh + 14, sw, 24, 'Màn hình rà soát và xuất ma trận, bản đặc tả theo mẫu Công văn 7991', { size: 15, color: C.soft }),
    text(L, TOP + 452, lw, 36, 'kholuutru.vercel.app · không cần tài khoản', { size: 17, bold: true, color: C.brown, valign: 'middle' }));
  content('07 — KẾT QUẢ BƯỚC ĐẦU (GIAI ĐOẠN 1)', 'Website: bốn bước soạn đề', els);
}

// 14. Ngân hàng câu theo bài
{
  const sw = (W - 40) / 3, els = [];
  [['409', 'câu hỏi · 5 bài', true], ['274 · 97 · 38', 'câu theo ba dạng câu hỏi'], ['407/409', 'câu đã gắn YCCĐ và mức độ']].forEach(([v, l, dark], i) => {
    const x = L + i * (sw + 20);
    els.push(card(x, TOP, sw, 140, dark ? { fill: C.brown } : {}),
      text(x + 26, TOP + 14, sw - 52, 78, v, { size: i === 1 ? 44 : 58, weight: 800, color: dark ? C.white : C.text, valign: 'middle', lh: 1.1 }),
      text(x + 26, TOP + 94, sw - 52, 30, l, { size: 16, bold: true, color: dark ? C.tint : C.soft }));
  });
  [['Bài 23. Năng lượng. Công cơ học', 125], ['Bài 24. Công suất', 66], ['Bài 25. Động năng, thế năng', 86], ['Bài 26. Cơ năng và định luật bảo toàn cơ năng', 78], ['Bài 27. Hiệu suất', 52]].forEach(([n, v], i) => {
    const y = TOP + 178 + i * 60, bx = L + 470, bw = W - 470 - 70;
    els.push(text(L, y, 450, 30, n, { size: 18, bold: true, valign: 'middle' }),
      rect(bx, y + 5, bw, 20, { fill: C.track, radius: 10 }), rect(bx, y + 5, bw * v / 125, 20, { fill: C.amber, radius: 10, grow: true }),
      text(R - 60, y, 60, 30, String(v), { size: 18, bold: true, color: C.muted, align: 'right', valign: 'middle' }));
  });
  content('07 — KẾT QUẢ BƯỚC ĐẦU (GIAI ĐOẠN 1)', 'Ngân hàng câu hỏi chủ đề Năng lượng', [...els,
    { t: 'note', text: 'Nguồn: Bảng 2 trong đề cương (số liệu ngày 22/11/2026; 2 câu chưa gắn YCCĐ không thuộc bài nào)' }]);
}

// 15. Phân bố mức độ
{
  const els = [{ t: 'table', x: L, y: TOP, w: 700, colW: [240, 110, 110, 140, 100], rowH: 66,
    rows: [['Dạng câu hỏi', 'Biết', 'Hiểu', 'Vận dụng', 'Tổng'], ['Nhiều lựa chọn (câu)', '97', '99', '78', '274'],
      ['“Đúng – Sai” (ý)', '30', '137', '221', '388'], ['Trả lời ngắn (câu)', '0', '0', '38', '38']] }];
  const rx = L + 740, rw = R - rx;
  els.push(card(rx, TOP, rw, 230, { fill: C.dark }),
    text(rx + 28, TOP + 26, rw - 56, 24, 'ĐỦ ĐỂ LẬP ĐỀ', { size: 15, bold: true, color: C.gold, spacing: 1.5 }),
    text(rx + 28, TOP + 60, rw - 56, 150, 'Ngân hàng đủ để lập đề theo cấu trúc phổ biến: 18 câu nhiều lựa chọn, 4 câu “Đúng – Sai”, 6 câu trả lời ngắn.', { size: 20, color: C.white, lh: 1.45 }),
    card(rx, TOP + 254, rw, 234),
    text(rx + 28, TOP + 280, rw - 56, 24, 'ĐÃ GẮN YCCĐ', { size: 15, bold: true, color: C.amber, spacing: 1.5 }),
    text(rx + 28, TOP + 314, rw - 56, 160, '407/409 câu đã gắn YCCĐ; 2 câu có nội dung vượt yêu cầu chương trình nên không đưa vào đề.', { size: 20, color: C.text, lh: 1.45 }),
    text(L, TOP + 300, 700, 120, 'Mỗi câu “Đúng – Sai” gồm 4 ý, mức độ được xếp cho từng ý; 358/388 ý thuộc mức Hiểu và Vận dụng.', { size: 18, color: C.muted, lh: 1.45 }));
  content('07 — KẾT QUẢ BƯỚC ĐẦU (GIAI ĐOẠN 1)', 'Phân bố mức độ trong ngân hàng', [...els, { t: 'note', text: 'Nguồn: Bảng 3 trong đề cương' }]);
}

// 16. Cấu trúc và đóng góp
{
  const lw = 560, rx = L + lw + 28, rw = R - rx, ih = 84, gap = (H - 5 * ih) / 4, els = [];
  [['Giới thiệu', 'Tính cần thiết, mục tiêu, đối tượng, đóng góp'], ['Tổng quan vấn đề nghiên cứu', 'YCCĐ, ma trận, bản đặc tả, phân mức, công cụ hiện có'],
   ['Phương pháp nghiên cứu', 'Bộ YCCĐ, ngân hàng câu, website, thử nghiệm'], ['Kết quả và thảo luận', 'Sản phẩm, dữ liệu, kết quả hai giai đoạn thử nghiệm'],
   ['Kết luận và khuyến nghị', '']].forEach(([h, p], i) => {
    const y = TOP + i * (ih + gap);
    els.push(card(L, y, lw, ih), text(L + 22, y, 110, ih, 'Chương ' + (i + 1), { size: 15, bold: true, color: C.amber, valign: 'middle' }),
      text(L + 128, y + (p ? 14 : 0), lw - 150, p ? 30 : ih, h, { size: 19, bold: true, valign: p ? 'top' : 'middle' }),
      ...(p ? [text(L + 128, y + 46, lw - 150, 26, p, { size: 15, color: C.muted })] : []));
  });
  els.push(card(rx, TOP, rw, H, { fill: C.dark }), text(rx + 30, TOP + 28, rw - 60, 24, 'ĐÓNG GÓP DỰ KIẾN', { size: 15, bold: true, color: C.gold, spacing: 1.5 }));
  ['Bộ YCCĐ theo bài, theo ba mức cho học kì II và quy tắc phân mức cho câu hỏi Vật lí.',
   'Ngân hàng câu hỏi ba dạng đã gắn YCCĐ, mức độ; hiện có 409 câu cho chủ đề “Năng lượng, công, công suất”.',
   'Website giúp ma trận, bản đặc tả và đề luôn khớp nhau, xuất theo mẫu 7991; quy trình áp dụng được cho học kì I và các khối lớp khác.'].forEach((t, i) => {
    const y = TOP + 76 + i * 132;
    els.push(...badge(rx + 30, y, i + 1, { fill: C.gold, color: C.dark }), text(rx + 88, y - 2, rw - 118, 116, t, { size: 18, color: C.white, lh: 1.45 }));
  });
  content('08 — NỘI DUNG VÀ CẤU TRÚC DỰ KIẾN CỦA KHÓA LUẬN · 09 — NHỮNG ĐÓNG GÓP DỰ KIẾN', 'Khóa luận dự kiến gồm năm chương', els);
}

// 17. Kế hoạch
{
  const rows = [
    ['9 – 11/2026', 'Nghiên cứu tài liệu, viết đề cương', true],
    ['9 – 11/2026', 'Giai đoạn 1: website, bộ YCCĐ, ngân hàng câu hỏi chủ đề Năng lượng (đã hoàn thành phần chính)', true],
    ['12/2026', 'Khảo sát nhu cầu giáo viên; hoàn thiện công cụ đánh giá'],
    ['12/2026 – 1/2027', 'Thử nghiệm giai đoạn 1 với giáo viên; điều chỉnh website'],
    ['12/2026 – 2/2027', 'Giai đoạn 2: YCCĐ, gắn YCCĐ, bổ sung câu cho Động lượng, Chuyển động tròn, Biến dạng của vật rắn'],
    ['2 – 3/2027', 'Thử nghiệm giai đoạn 2; phân tích dữ liệu'],
    ['3 – 4/2027', 'Viết khóa luận; nộp và bảo vệ'],
  ];
  const rh = 60, gap = (H - 7 * rh) / 6, els = [];
  rows.forEach(([d, t, done], i) => {
    const y = TOP + i * (rh + gap);
    els.push(card(L, y, W, rh, { radius: 12, fill: done ? C.greenTint : C.white }),
      text(L + 22, y, 200, rh, d, { size: 17, bold: true, color: done ? C.green : C.amber, valign: 'middle' }),
      text(L + 230, y, W - 360, rh, t, { size: 17, valign: 'middle' }),
      ...(done ? [text(R - 130, y, 110, rh, '✓ Đã làm', { size: 15, bold: true, color: C.green, align: 'right', valign: 'middle' })] : []));
  });
  content('10 — KẾ HOẠCH THỰC HIỆN', 'Kế hoạch thực hiện đề tài', els);
}

// 18. Tài liệu tham khảo chính
{
  const refs = [
    'Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). A taxonomy for learning, teaching, and assessing: A revision of Bloom’s taxonomy of educational objectives. New York, NY: Longman.',
    'Black, P., & Wiliam, D. (1998). Assessment and classroom learning. Assessment in Education: Principles, Policy & Practice, 5(1), 7–74.',
    'Bloom, B. S. (Ed.). (1956). Taxonomy of educational objectives: The classification of educational goals. Handbook I: Cognitive domain. New York, NY: David McKay.',
    'Bộ Giáo dục và Đào tạo. (2018). Thông tư số 32/2018/TT-BGDĐT ngày 26/12/2018 ban hành Chương trình giáo dục phổ thông. Hà Nội: Tác giả.',
    'Bộ Giáo dục và Đào tạo. (2021). Thông tư số 22/2021/TT-BGDĐT ngày 20/7/2021 quy định về đánh giá học sinh trung học cơ sở và học sinh trung học phổ thông. Hà Nội: Tác giả.',
    'Bộ Giáo dục và Đào tạo. (2024). Công văn số 7991/BGDĐT-GDTrH ngày 17/12/2024 về việc thực hiện kiểm tra, đánh giá đối với cấp trung học cơ sở, trung học phổ thông. Hà Nội: Tác giả.',
    'Brooke, J. (1996). SUS: A “quick and dirty” usability scale. In P. W. Jordan, B. Thomas, B. A. Weerdmeester, & I. L. McClelland (Eds.), Usability evaluation in industry (pp. 189–194). London: Taylor & Francis.',
    'Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. MIS Quarterly, 13(3), 319–340.',
    'Fives, H., & DiDonato-Barnes, N. (2013). Classroom test construction: The power of a table of specifications. Practical Assessment, Research & Evaluation, 18(3), 1–7.',
    'Haladyna, T. M., Downing, S. M., & Rodriguez, M. C. (2002). A review of multiple-choice item-writing guidelines for classroom assessment. Applied Measurement in Education, 15(3), 309–333.',
    'Miller, M. D., Linn, R. L., & Gronlund, N. E. (2009). Measurement and assessment in teaching (10th ed.). Upper Saddle River, NJ: Pearson.',
    'Nielsen, J. (1993). Usability engineering. Boston, MA: Academic Press.',
  ];
  const cw = (W - 40) / 2, els = [];
  refs.forEach((r, i) => {
    const x = L + (i < 6 ? 0 : cw + 40), y = TOP - 6 + (i % 6) * 84;
    els.push(text(x, y, cw, 80, r, { size: 14, color: C.muted, lh: 1.38, hang: true }));
  });
  content('TÀI LIỆU THAM KHẢO', 'Tài liệu tham khảo chính', [...els, { t: 'note', text: 'Danh mục đầy đủ (20 tài liệu) trong đề cương' }]);
}

// 19. Cảm ơn
slides.push({ layout: 'cover', els: [
  rect(0, 0, 16, 720, { fill: C.band, radius: 0 }),
  circle(88, 64, 60, C.white), img(90, 66, 56, 56, 'truong', { round: true }), circle(160, 64, 60, C.white), img(162, 66, 56, 56, 'khoa', { round: true }),
  text(88, 250, 1000, 70, 'Cảm ơn quý thầy cô đã lắng nghe', { size: 54, weight: 800, color: C.white }),
  text(88, 340, 1000, 36, 'Rất mong nhận được góp ý của hội đồng để đề tài hoàn thiện hơn.', { size: 22, color: C.darkMuted }),
  text(88, 584, 700, 30, 'kholuutru.vercel.app', { size: 20, bold: true, color: C.gold }),
  text(908, 584, 300, 30, 'Nguyễn Trần Hoài Huy', { size: 16, bold: true, color: C.faint, align: 'right' }),
] });

const ids = Object.fromEntries(slides.map((sl, i) => [sl.id, i + 1]).filter(([id]) => id));
for (const sl of slides) for (const e of sl.els) if (e.t === 'cite') {
  if (!ids[e.target]) throw new Error('Không có slide căn cứ: ' + e.target);
  e.slide = ids[e.target];
}
module.exports = { slides, C, FOOTER: 'Báo cáo đề cương khóa luận · Nguyễn Trần Hoài Huy' };
