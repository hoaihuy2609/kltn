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
// Ô trích dẫn văn bản: ảnh xem trước + nhãn; HTML chạm để phóng to, PowerPoint bấm để tới slide căn cứ (không ghi chữ hướng dẫn trên slide).
const cite = (x, y, w, h, src, label, target, o = {}) => ({ t: 'cite', x, y, w, h, src, label, target, ...o });

// 1. Bìa
slides.push({ layout: 'cover', id: 'bia', els: [
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

// 2. Tính cần thiết
{
  const rows = [
    ['01', 'Yêu cầu đổi mới kiểm tra, đánh giá', 'Đánh giá căn cứ vào yêu cầu cần đạt (YCCĐ); đề kiểm tra định kì bằng điểm số dựa trên ma trận và bản đặc tả [2].'],
    ['02', 'Quy trình thủ công dễ sai lệch', 'Thay câu hỏi cần đối chiếu, cập nhật các tài liệu liên quan; câu “Đúng – Sai” phải đối chiếu từng ý.'],
    ['03', 'Nhu cầu liên kết câu hỏi với YCCĐ', 'Chọn câu theo YCCĐ, dạng và mức độ; xuất ma trận, bản đặc tả theo mẫu Công văn 7991 [3].'],
    ['→', 'Một nguồn dữ liệu cho ba tài liệu', 'Website hỗ trợ lập đồng bộ ma trận, bản đặc tả và đề kiểm tra học kì II Vật lí 10, bộ Kết nối tri thức với cuộc sống [4].'],
  ];
  const rh = 112, gap = (H - 4 * rh) / 3, els = [];
  rows.forEach(([k, h, p], i) => {
    const y = TOP + i * (rh + gap), dark = i === 3;
    els.push(card(L, y, W, rh, dark ? { fill: C.dark } : {}),
      text(L + 30, y, 72, rh, k, { size: 38, weight: 800, color: dark ? C.gold : C.amber, valign: 'middle' }),
      text(L + 112, y + 12, W - 144, 34, h, { size: 24, bold: true, color: dark ? C.white : C.text, align: 'left' }),
      text(L + 112, y + 50, W - 144, 58, p, { size: 20, color: dark ? C.darkMuted : C.muted, lh: 1.35 }));
  });
  content('01 — TÍNH CẦN THIẾT CỦA ĐỀ TÀI', 'Vì sao cần một website hỗ trợ biên soạn đề?', els);
}

// 3. Căn cứ pháp lí
{
  const cw = (W - 24) / 2, els = [];
  const col = (x, kicker, name, points, images) => {
    els.push(card(x, TOP, cw, H),
      text(x + 26, TOP + 22, cw - 52, 22, kicker, { size: 15, bold: true, color: C.brown, spacing: 1.5 }),
      text(x + 26, TOP + 46, cw - 52, 34, name, { size: 26, weight: 800, align: 'left' }));
    let y = TOP + 96;
    points.forEach(p => {
      els.push(circle(x + 28, y + 10, 10, C.amber), text(x + 48, y, cw - 74, 58, p, { size: 20, lh: 1.35, color: C.text }));
      y += 66;
    });
    const avail = TOP + H - 18 - y, iw = Math.min(cw - 52, ...[avail / images.reduce((a, [, r]) => a + r, 0) - 8]);
    let iy = y + 4;
    images.forEach(([src, r]) => { const ih = Math.round(iw * r); els.push(img(x + (cw - iw) / 2, iy, iw, ih, src, { zoom: true, frame: true })); iy += ih + 8; });
  };
  col(L, 'THÔNG TƯ (20/7/2021)', '22/2021/TT-BGDĐT', [
    'Đánh giá căn cứ vào YCCĐ của chương trình (khoản 1 Điều 4).',
    'Đề kiểm tra định kì bằng điểm số dựa trên ma trận, đặc tả (khoản 1 Điều 7).'],
    [['tt22-dieu3-4-nho', 385 / 1467], ['tt22-dieu7-nho', 401 / 1467]]);
  col(L + cw + 24, 'CÔNG VĂN (17/12/2024)', '7991/BGDĐT-GDTrH', [
    'Hướng dẫn xây dựng ma trận, bản đặc tả, đề kiểm tra định kì từ học kì II (2024 – 2025).',
    'Phụ lục: 3 dạng × 3 mức; ví dụ tỉ lệ Biết – Hiểu – Vận dụng 40 – 30 – 30.'],
    [['cv7991-ma-tran-nho', 834 / 1323]]);
  content('01 — TÍNH CẦN THIẾT CỦA ĐỀ TÀI · CĂN CỨ PHÁP LÍ', 'Thông tư 22/2021 và Công văn 7991', [...els,
    { t: 'note', text: 'Trích nguyên văn [2], [3] · Phần tô đỏ do người báo cáo đánh dấu' }]);
}

// 4. Tổng quan
{
  const cw = (W - 20) / 2, ch = 182, els = [];
  [['2.1', 'Đánh giá theo YCCĐ', 'Đánh giá phát huy tác dụng khi gắn với mục tiêu học tập [5]; Thông tư 22 quy định đánh giá căn cứ vào YCCĐ [2] → mỗi câu hỏi gắn một dòng YCCĐ.'],
   ['2.2', 'Ma trận và bản đặc tả', 'Bảng đặc tả đối chiếu nội dung với mức độ, bảo đảm độ giá trị nội dung [6]; lập trước khi viết đề để đề không lệch nội dung, mức độ [7].'],
   ['2.3', 'Phân loại mức độ [8], [9]', 'Biết: nhắc lại định nghĩa, công thức. Hiểu: định tính, so sánh, suy tỉ lệ không thay số. Vận dụng: thay số để tính; trả lời ngắn luôn ở mức Vận dụng.'],
   ['2.4 – 2.5', 'Câu hỏi và đánh giá công cụ', 'Phương án nhiễu phải hợp lí [10]. Website được đánh giá theo tính hữu ích, dễ sử dụng [11] và tính khả dụng: SUS [12], Nielsen [13].']].forEach(([tag, h, p], i) => {
    const x = L + (i % 2) * (cw + 20), y = TOP + Math.floor(i / 2) * (ch + 16);
    const tw = tag.length > 4 ? 96 : 60;
    els.push(card(x, y, cw, ch), rect(x + 24, y + 20, tw, 30, { fill: C.tint, radius: 15 }),
      text(x + 24, y + 20, tw, 30, tag, { size: 15, bold: true, color: C.brown, align: 'center', valign: 'middle' }),
      text(x + tw + 38, y + 18, cw - tw - 62, 34, h, { size: 22, bold: true, align: 'left' }),
      text(x + 24, y + 64, cw - 48, 112, p, { size: 19, color: C.muted, lh: 1.4 }));
  });
  const by = TOP + 2 * (ch + 16);
  els.push(card(L, by, W, BOTTOM - by, { fill: C.dark }),
    text(L + 28, by, 60, BOTTOM - by, '→', { size: 34, weight: 800, color: C.gold, valign: 'middle' }),
    text(L + 96, by + 14, W - 124, BOTTOM - by - 28, 'Khoảng trống: chưa có công cụ cho Vật lí 10 mà ma trận, bản đặc tả và đề sinh ra từ cùng một nguồn dữ liệu (câu hỏi đã gắn YCCĐ, mức độ), xuất theo mẫu Công văn 7991.',
      { size: 20, color: C.white, lh: 1.4, valign: 'middle' }));
  content('02 — TỔNG QUAN VẤN ĐỀ NGHIÊN CỨU', 'Cơ sở lí luận của đề tài', [...els, { t: 'note', text: 'Số trong ngoặc vuông là tài liệu tham khảo, theo danh mục trong đề cương' }]);
}

// 5. Mục tiêu và câu hỏi nghiên cứu
{
  const els = [card(L, TOP, W, 116, { fill: C.dark }),
    text(L + 28, TOP + 16, 400, 22, 'MỤC TIÊU TỔNG QUÁT', { size: 15, bold: true, color: C.gold, spacing: 1.5 }),
    text(L + 28, TOP + 42, W - 56, 64, 'Xây dựng và đánh giá website hỗ trợ giáo viên Vật lí lập ma trận, bản đặc tả và biên soạn đề kiểm tra định kì theo Công văn 7991 cho học kì II Vật lí 10 (Kết nối tri thức với cuộc sống).',
      { size: 20, color: C.white, lh: 1.35 }),
    text(L, TOP + 130, 400, 22, 'MỤC TIÊU CỤ THỂ', { size: 15, bold: true, color: C.brown, spacing: 1.5 })];
  const goals = ['Hệ thống hóa cơ sở lí luận', 'Xây dựng bộ YCCĐ theo bài, ba mức', 'Xây dựng ngân hàng câu hỏi gắn YCCĐ', 'Xây dựng website theo quy trình 7991', 'Thử nghiệm, đánh giá với giáo viên'];
  const gw = (W - 4 * 14) / 5, gy = TOP + 158;
  goals.forEach((g, i) => {
    const x = L + i * (gw + 14);
    els.push(card(x, gy, gw, 92), ...badge(x + 16, gy + 26, i + 1),
      text(x + 66, gy + 8, gw - 78, 76, g, { size: 17, bold: true, lh: 1.3, valign: 'middle', align: 'left' }));
  });
  els.push(text(L, TOP + 264, 400, 22, 'CÂU HỎI NGHIÊN CỨU', { size: 15, bold: true, color: C.brown, spacing: 1.5 }));
  ['YCCĐ học kì II cần tổ chức thế nào (theo bài, theo mức) để làm căn cứ chọn câu hỏi và lập bản đặc tả?',
   'Quy trình, chức năng nào giúp ma trận, bản đặc tả và đề kiểm tra khớp nhau theo mẫu Công văn 7991?',
   'Website có khả dụng, hữu ích và rút ngắn thời gian soạn đề của giáo viên hay không?'].forEach((q, i) => {
    const y = TOP + 292 + i * 66;
    els.push(card(L, y, W, 58), text(L + 22, y, 70, 58, 'CH' + (i + 1), { size: 22, weight: 800, color: C.amber, valign: 'middle' }),
      text(L + 96, y, W - 120, 58, q, { size: 20, valign: 'middle', align: 'left' }));
  });
  content('03 — MỤC TIÊU NGHIÊN CỨU · 04 — CÂU HỎI NGHIÊN CỨU', 'Đề tài làm gì và trả lời câu hỏi nào?', els);
}

// 6. Đối tượng và phạm vi
{
  const lw = 452, rx = L + lw + 28, rw = R - rx, els = [];
  [['Đối tượng nghiên cứu', 'Quy trình lập ma trận, bản đặc tả, biên soạn đề kiểm tra định kì học kì II Vật lí 10 theo Công văn 7991; website hỗ trợ quy trình này.'],
   ['Đối tượng khảo sát, thử nghiệm', 'Giáo viên dạy Vật lí cấp trung học phổ thông; có thể mở rộng tới sinh viên năm cuối ngành Sư phạm Vật lí.']].forEach(([h, p], i) => {
    const y = TOP + i * 166;
    els.push(card(L, y, lw, 150), text(L + 26, y + 20, lw - 52, 30, h, { size: 20, bold: true, color: C.brown }),
      text(L + 26, y + 52, lw - 52, 96, p, { size: 18, color: C.muted, lh: 1.35 }));
  });
  els.push(text(rx, TOP, rw, 26, 'Phạm vi nội dung: học kì II Vật lí 10 (Kết nối tri thức với cuộc sống)', { size: 18, bold: true, color: C.muted }));
  const topics = [['Năng lượng, công, công suất', 'Bài 23 – 27', 'Giai đoạn 1'], ['Động lượng', 'Bài 28 – 30', 'Giai đoạn 2'],
    ['Chuyển động tròn', 'Bài 31 – 32', 'Giai đoạn 2'], ['Biến dạng của vật rắn. Áp suất chất lỏng', 'Bài 33 – 34', 'Giai đoạn 2']];
  const tw = (rw - 16) / 2, th = 134;
  topics.forEach(([n, b, g], i) => {
    const x = rx + (i % 2) * (tw + 16), y = TOP + 40 + Math.floor(i / 2) * (th + 16), first = i === 0;
    els.push(card(x, y, tw, th, first ? { fill: C.brown } : {}),
      text(x + 22, y + 16, tw - 44, 60, n, { size: 21, bold: true, color: first ? C.white : C.text, lh: 1.35 }),
      text(x + 22, y + 92, 130, 24, b, { size: 17, bold: true, color: first ? C.tint : C.soft }),
      rect(x + tw - 132, y + 88, 110, 30, { fill: first ? C.gold : C.track, radius: 15 }),
      text(x + tw - 132, y + 88, 110, 30, g, { size: 14, bold: true, color: first ? C.dark : C.muted, align: 'center', valign: 'middle' }));
  });
  const fy = TOP + 348, fw = (W - 32) / 3;
  [['Dạng câu hỏi', 'Nhiều lựa chọn, “Đúng – Sai”, trả lời ngắn; chưa gồm tự luận'],
   ['Không gian', 'Trường Đại học An Giang, một số trường THPT vùng đồng bằng sông Cửu Long'],
   ['Thời gian', 'Năm học 2026 – 2027, từ tháng 9/2026 đến tháng 4/2027']].forEach(([h, p], i) => {
    const x = L + i * (fw + 16);
    els.push(card(x, fy, fw, H - 348), text(x + 22, fy + 18, fw - 44, 26, h, { size: 15, bold: true, color: C.amber, spacing: 1 }),
      text(x + 22, fy + 46, fw - 44, 90, p, { size: 18, color: C.text, lh: 1.35 }));
  });
  content('05 — ĐỐI TƯỢNG VÀ PHẠM VI NGHIÊN CỨU', 'Nghiên cứu cái gì, ở đâu, khi nào', els);
}

// 7. Phương pháp
{
  const steps = [
    ['6.1', 'Nghiên cứu tài liệu', 'Chương trình 2018 [1], Thông tư 22 [2], Công văn 7991 [3], sách giáo khoa, sách giáo viên [4], [15].'],
    ['6.2', 'Xây dựng bộ YCCĐ', 'Mỗi bài có các dòng YCCĐ ở ba mức; lấy nguyên văn mục tiêu trong sách giáo viên.'],
    ['6.3', 'Xây dựng ngân hàng câu', 'Mỗi câu (mỗi ý “Đúng – Sai”) gắn một dòng YCCĐ và một mức độ.'],
    ['6.4', 'Phát triển website', 'Phát triển lặp, lấy ý kiến giảng viên hướng dẫn và giáo viên; kiểm thử tự động.'],
    ['6.5', 'Khảo sát, thử nghiệm', 'Thử nghiệm hai giai đoạn với giáo viên; thang SUS [12], câu hỏi theo TAM [11], phỏng vấn.'],
    ['6.6', 'Phân tích dữ liệu', 'Thống kê mô tả; điểm SUS quy về thang 0 – 100; mã hóa ý kiến theo chủ đề.'],
  ];
  const cw = (W - 40) / 3, ch = (H - 20) / 2, els = [];
  steps.forEach(([n, h, p], i) => {
    const x = L + (i % 3) * (cw + 20), y = TOP + Math.floor(i / 3) * (ch + 20);
    els.push(card(x, y, cw, ch, i === 3 ? { fill: C.dark } : {}),
      rect(x + 24, y + 22, 60, 30, { fill: i === 3 ? C.gold : C.tint, radius: 15 }),
      text(x + 24, y + 22, 60, 30, n, { size: 15, bold: true, color: i === 3 ? C.dark : C.brown, align: 'center', valign: 'middle' }),
      text(x + 24, y + 64, cw - 48, 34, h, { size: 23, bold: true, color: i === 3 ? C.white : C.text, align: 'left' }),
      text(x + 24, y + 104, cw - 48, ch - 116, p, { size: 19, color: i === 3 ? C.darkMuted : C.muted, lh: 1.4 }));
  });
  content('06 — PHƯƠNG PHÁP NGHIÊN CỨU', 'Sáu bước thực hiện đề tài', els);
}

// 8. Website
{
  const lw = 470, els = [];
  [['Lập ma trận', 'Số câu theo bài × dạng × mức; tự chia điểm, giáo viên sửa được.'],
   ['Chọn câu theo YCCĐ', '“Gợi ý chọn câu” chọn đủ số câu, ưu tiên phủ nhiều dòng YCCĐ.'],
   ['Rà soát và xuất', 'Ma trận, bản đặc tả theo mẫu 7991 cạnh đề bài; in hoặc lưu PDF.'],
   ['Biên soạn đề', 'Trộn nhiều mã đề; xuất PDF, LaTeX kèm bảng đáp án.']].forEach(([h, p], i) => {
    const y = TOP + i * 110;
    els.push(card(L, y, lw, 100), ...badge(L + 20, y + 30, i + 1),
      text(L + 76, y + 10, lw - 96, 30, h, { size: 22, bold: true, align: 'left' }), text(L + 76, y + 42, lw - 96, 54, p, { size: 18, color: C.muted, lh: 1.35 }));
  });
  const sx = L + lw + 32, sw = R - sx, sh = Math.round(sw * 900 / 1440);
  els.push(img(sx, TOP, sw, sh, 'export', { radius: 14, shadow: true }),
    text(sx, TOP + sh + 14, sw, 24, 'Màn hình rà soát và xuất ma trận, bản đặc tả theo mẫu Công văn 7991', { size: 16, color: C.soft }),
    text(L, TOP + 448, lw, 40, 'kholuutru.vercel.app · không cần tài khoản', { size: 19, bold: true, color: C.brown, valign: 'middle' }));
  content('07 — KẾT QUẢ BƯỚC ĐẦU (GIAI ĐOẠN 1)', 'Website: bốn bước soạn đề', els);
}

// 9. Ngân hàng câu theo bài
{
  const sw = (W - 40) / 3, els = [];
  [['409', 'câu hỏi · 5 bài', true], ['274 · 97 · 38', 'câu theo ba dạng câu hỏi'], ['407/409', 'câu đã gắn YCCĐ và mức độ']].forEach(([v, l, dark], i) => {
    const x = L + i * (sw + 20);
    els.push(card(x, TOP, sw, 140, dark ? { fill: C.brown } : {}),
      text(x + 26, TOP + 14, sw - 52, 78, v, { size: i === 1 ? 44 : 58, weight: 800, color: dark ? C.white : C.text, valign: 'middle', lh: 1.1 }),
      text(x + 26, TOP + 94, sw - 52, 30, l, { size: 18, bold: true, color: dark ? C.tint : C.soft }));
  });
  [['Bài 23. Năng lượng. Công cơ học', 125], ['Bài 24. Công suất', 66], ['Bài 25. Động năng, thế năng', 86], ['Bài 26. Cơ năng, định luật bảo toàn cơ năng', 78], ['Bài 27. Hiệu suất', 52]].forEach(([n, v], i) => {
    const y = TOP + 178 + i * 60, bx = L + 470, bw = W - 470 - 70;
    els.push(text(L, y, 460, 30, n, { size: 20, bold: true, valign: 'middle', align: 'left' }),
      rect(bx, y + 5, bw, 20, { fill: C.track, radius: 10 }), rect(bx, y + 5, bw * v / 125, 20, { fill: C.amber, radius: 10, grow: true }),
      text(R - 60, y, 60, 30, String(v), { size: 20, bold: true, color: C.muted, align: 'right', valign: 'middle' }));
  });
  content('07 — KẾT QUẢ BƯỚC ĐẦU (GIAI ĐOẠN 1)', 'Ngân hàng câu hỏi chủ đề Năng lượng', [...els,
    { t: 'note', text: 'Nguồn: Bảng 2 trong đề cương (số liệu ngày 22/11/2026; 2 câu chưa gắn YCCĐ không thuộc bài nào)' }]);
}

// 10. Phân bố mức độ, bộ YCCĐ, AI
{
  const els = [{ t: 'table', x: L, y: TOP, w: 680, colW: [230, 105, 105, 140, 100], rowH: 66,
    rows: [['Dạng câu hỏi', 'Biết', 'Hiểu', 'Vận dụng', 'Tổng'], ['Nhiều lựa chọn (câu)', '97', '99', '78', '274'],
      ['“Đúng – Sai” (ý)', '30', '137', '221', '388'], ['Trả lời ngắn (câu)', '0', '0', '38', '38']] }];
  els.push(card(L, TOP + 288, 680, H - 288),
    text(L + 26, TOP + 306, 628, 160, 'Đủ để lập đề theo cấu trúc phổ biến: 18 câu nhiều lựa chọn, 4 câu “Đúng – Sai”, 6 câu trả lời ngắn. 407/409 câu đã gắn YCCĐ; 2 câu vượt yêu cầu chương trình không đưa vào đề.',
      { size: 20, color: C.text, lh: 1.45 }));
  const rx = L + 704, rw = R - rx, ch = (H - 16) / 2;
  els.push(card(rx, TOP, rw, ch),
    text(rx + 24, TOP + 18, rw - 48, 22, 'BỘ YCCĐ', { size: 15, bold: true, color: C.brown, spacing: 1.5 }),
    text(rx + 24, TOP + 40, 120, 70, '40', { size: 56, weight: 800, color: C.brown, lh: 1.15 }),
    text(rx + 130, TOP + 48, rw - 154, 56, 'dòng cho 5 bài (Bài 23 – 27)', { size: 19, bold: true, color: C.muted, lh: 1.3, align: 'left' }),
    text(rx + 24, TOP + 116, rw - 48, 104, '20 từ sách giáo viên, 6 từ chương trình 2018, 8 YCCĐ kiến thức nền, 6 tự đề xuất.', { size: 18, color: C.text, lh: 1.4 }),
    card(rx, TOP + ch + 16, rw, ch, { fill: C.dark }),
    text(rx + 24, TOP + ch + 34, rw - 48, 22, 'SỬ DỤNG AI', { size: 15, bold: true, color: C.gold, spacing: 1.5 }),
    text(rx + 24, TOP + ch + 62, rw - 48, ch - 72, 'Website không tích hợp AI. Claude [16] hỗ trợ soạn 91 câu (22,2%), gợi ý gắn YCCĐ; tất cả đã được rà soát và ghi chú.', { size: 18, color: C.white, lh: 1.4 }));
  content('07 — KẾT QUẢ BƯỚC ĐẦU (GIAI ĐOẠN 1)', 'Mức độ câu hỏi, bộ YCCĐ và việc dùng AI', [...els, { t: 'note', text: 'Nguồn: Bảng 3 và mục 6.2 – 6.3 trong đề cương' }]);
}

// 11. Cấu trúc và đóng góp
{
  const lw = 560, rx = L + lw + 28, rw = R - rx, ih = 84, gap = (H - 5 * ih) / 4, els = [];
  [['Giới thiệu', 'Tính cần thiết, mục tiêu, đối tượng, đóng góp'], ['Tổng quan vấn đề nghiên cứu', 'YCCĐ, ma trận, bản đặc tả, phân mức, công cụ hiện có'],
   ['Phương pháp nghiên cứu', 'Bộ YCCĐ, ngân hàng câu, website, thử nghiệm'], ['Kết quả và thảo luận', 'Sản phẩm, dữ liệu, kết quả hai giai đoạn thử nghiệm'],
   ['Kết luận và khuyến nghị', '']].forEach(([h, p], i) => {
    const y = TOP + i * (ih + gap);
    els.push(card(L, y, lw, ih), text(L + 22, y, 110, ih, 'Chương ' + (i + 1), { size: 16, bold: true, color: C.amber, valign: 'middle' }),
      text(L + 128, y + (p ? 10 : 0), lw - 150, p ? 32 : ih, h, { size: 21, bold: true, valign: p ? 'top' : 'middle', align: 'left' }),
      ...(p ? [text(L + 128, y + 42, lw - 150, 34, p, { size: 15, color: C.muted, align: 'left' })] : []));
  });
  els.push(card(rx, TOP, rw, H, { fill: C.dark }), text(rx + 30, TOP + 28, rw - 60, 24, 'ĐÓNG GÓP DỰ KIẾN', { size: 15, bold: true, color: C.gold, spacing: 1.5 }));
  ['Bộ YCCĐ theo bài, theo ba mức cho học kì II và quy tắc phân mức cho câu hỏi Vật lí.',
   'Ngân hàng câu hỏi ba dạng đã gắn YCCĐ, mức độ; hiện có 409 câu cho chủ đề “Năng lượng, công, công suất”.',
   'Website giúp ma trận, bản đặc tả và đề luôn khớp nhau, xuất theo mẫu 7991; quy trình áp dụng được cho học kì I và các khối lớp khác.'].forEach((t, i) => {
    const y = TOP + 76 + i * 132;
    els.push(...badge(rx + 30, y, i + 1, { fill: C.gold, color: C.dark }), text(rx + 88, y - 2, rw - 118, 116, t, { size: 19, color: C.white, lh: 1.4 }));
  });
  content('08 — CẤU TRÚC DỰ KIẾN CỦA KHÓA LUẬN · 09 — ĐÓNG GÓP DỰ KIẾN', 'Khóa luận dự kiến gồm năm chương', els);
}

// 12. Kế hoạch
{
  const rows = [
    ['9 – 11/2026', 'Nghiên cứu tài liệu, viết đề cương', true],
    ['9 – 11/2026', 'Giai đoạn 1: website, bộ YCCĐ, ngân hàng câu hỏi chủ đề Năng lượng', true],
    ['12/2026', 'Khảo sát nhu cầu giáo viên; hoàn thiện công cụ đánh giá'],
    ['12/2026 – 1/2027', 'Thử nghiệm giai đoạn 1 với giáo viên; điều chỉnh website'],
    ['12/2026 – 2/2027', 'Giai đoạn 2: bộ YCCĐ, gắn YCCĐ, bổ sung câu cho ba chủ đề còn lại'],
    ['2 – 3/2027', 'Thử nghiệm giai đoạn 2; phân tích dữ liệu'],
    ['3 – 4/2027', 'Viết khóa luận; nộp và bảo vệ'],
  ];
  const rh = 60, gap = (H - 7 * rh) / 6, els = [];
  rows.forEach(([d, t, done], i) => {
    const y = TOP + i * (rh + gap);
    els.push(card(L, y, W, rh, { radius: 12, fill: done ? C.greenTint : C.white }),
      text(L + 22, y, 200, rh, d, { size: 19, bold: true, color: done ? C.green : C.amber, valign: 'middle' }),
      text(L + 230, y, W - 370, rh, t, { size: 19, valign: 'middle', align: 'left', lh: 1.25 }),
      ...(done ? [text(R - 130, y, 110, rh, '✓ Đã làm', { size: 15, bold: true, color: C.green, align: 'right', valign: 'middle' })] : []));
  });
  content('10 — KẾ HOẠCH THỰC HIỆN', 'Kế hoạch thực hiện đề tài', els);
}

// 13. Cảm ơn
slides.push({ layout: 'cover', id: 'cam-on', els: [
  rect(0, 0, 16, 720, { fill: C.band, radius: 0 }),
  circle(88, 64, 60, C.white), img(90, 66, 56, 56, 'truong', { round: true }), circle(160, 64, 60, C.white), img(162, 66, 56, 56, 'khoa', { round: true }),
  text(88, 250, 1000, 70, 'Cảm ơn quý thầy cô đã lắng nghe', { size: 54, weight: 800, color: C.white }),
  text(88, 340, 1000, 36, 'Rất mong nhận được góp ý của hội đồng để đề tài hoàn thiện hơn.', { size: 22, color: C.darkMuted }),
  text(88, 584, 700, 30, 'kholuutru.vercel.app', { size: 20, bold: true, color: C.gold }),
  text(908, 584, 300, 30, 'Nguyễn Trần Hoài Huy', { size: 16, bold: true, color: C.faint, align: 'right' }),
] });

const ids = Object.fromEntries(slides.map((sl, i) => [sl.id, i + 1]).filter(([id]) => id));
for (const sl of slides) for (const e of sl.els) if (e.t === 'cite' && e.target) {
  if (!ids[e.target]) throw new Error('Không có slide căn cứ: ' + e.target);
  e.slide = ids[e.target];
}
const NOTES = require('./notes.cjs');
for (const sl of slides) {
  sl.notes = NOTES[sl.id] || NOTES[sl.title];
  if (!sl.notes) throw new Error('Thiếu ghi chú cho slide: ' + (sl.title || sl.id));
}
module.exports = { slides, C, FOOTER: 'Báo cáo đề cương khóa luận · Nguyễn Trần Hoài Huy' };
