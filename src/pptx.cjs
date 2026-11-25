// Vẽ deck.cjs thành file PowerPoint (chữ sửa được), cùng toạ độ với bản HTML.
const path = require('path');
const pptxgen = require('pptxgenjs');
const { slides, C, FOOTER } = require('./deck.cjs');
const d = __dirname;
const IMG = { truong: 'assets/truong.png', khoa: 'assets/khoa.png', web: 'assets/web-matrix.png', export: 'assets/web-export.png' };
const fs = require('fs');
const imgPath = k => path.join(d, IMG[k] || `assets/trich/${k}.png`);
const imgSize = k => { const b = fs.readFileSync(imgPath(k)); return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) }; };
// Ảnh vừa khít bề ngang khung, cắt phần dưới nếu thừa (giống object-fit theo chiều ngang ở bản HTML).
function fitWidth(src, x, y, w, h) {
  const n = imgSize(src), fullH = w * n.h / n.w;
  return fullH <= h + 0.5 ? { x: I(x), y: I(y), w: I(w), h: I(fullH) } : { x: I(x), y: I(y), w: I(w), h: I(fullH), sizing: { type: 'crop', x: 0, y: 0, w: I(w), h: I(h) } };
}
const FONT = 'Arial';
const I = px => px / 96;          // khung 1280 × 720 px = 13,333 × 7,5 inch
const PT = px => Math.round(px * 0.75 * 10) / 10;

const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE';
pres.title = 'Báo cáo đề cương khóa luận tốt nghiệp';
pres.author = 'Nguyễn Trần Hoài Huy';
pres.theme = { headFontFace: FONT, bodyFontFace: FONT };

const logo = (src, x, y, s) => ({ image: { path: path.join(d, IMG[src]), x: I(x), y: I(y), w: I(s), h: I(s), rounding: true } });
pres.defineSlideMaster({
  title: 'NOIDUNG',
  background: { color: C.bg },
  objects: [
    logo('truong', 1112, 46, 44), logo('khoa', 1164, 46, 44),
    { placeholder: { options: { name: 'title', type: 'title', x: I(72), y: I(76), w: I(1000), h: I(60), fontFace: FONT, fontSize: PT(40), bold: true,
      color: C.text, margin: 0, valign: 'top', align: 'left' }, text: '' } },
  ],
  slideNumber: { x: I(1108), y: I(684), w: I(100), h: I(22), fontFace: FONT, fontSize: PT(14), color: C.faint, align: 'right', bold: true },
});
pres.defineSlideMaster({ title: 'BIA', background: { color: C.dark }, objects: [] });

function add(slide, e) {
  const box = { x: I(e.x), y: I(e.y), w: I(e.w), h: I(e.h) };
  if (e.t === 'rect') {
    const o = { ...box, fill: { color: e.fill }, line: { type: 'none' } };
    if (e.shadow) o.shadow = { type: 'outer', color: '1C1917', opacity: 0.08, blur: 10, offset: 3, angle: 90 };
    if (e.radius) slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { ...o, rectRadius: I(e.radius) });
    else slide.addShape(pres.shapes.RECTANGLE, o);
  } else if (e.t === 'ellipse') {
    slide.addShape(pres.shapes.OVAL, { ...box, fill: { color: e.fill }, line: { type: 'none' } });
  } else if (e.t === 'img') {
    const o = { ...box, path: imgPath(e.src) };
    if (e.frame) slide.addShape(pres.shapes.RECTANGLE, { ...box, fill: { color: C.white }, line: { color: C.line, width: 0.75 } });
    if (e.round) o.rounding = true;
    if (e.src === 'export' || e.src === 'web') o.sizing = { type: 'crop', w: I(e.w), h: I(e.h) };
    if (e.shadow) {
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { ...box, rectRadius: I(e.radius || 0), fill: { color: C.white }, line: { color: C.line, width: 0.75 },
        shadow: { type: 'outer', color: '1C1917', opacity: 0.16, blur: 18, offset: 6, angle: 90 } });
    }
    slide.addImage(o);
  } else if (e.t === 'text') {
    slide.addText(e.text, {
      ...box, isTextBox: true, margin: 0, fontFace: FONT, fontSize: PT(e.size), bold: !!(e.bold || (e.weight && e.weight >= 600)),
      color: e.color, align: e.align || 'left', valign: e.valign || 'top', lineSpacingMultiple: Math.round(((e.lh || 1.3) / 1.17) * 100) / 100,
      charSpacing: e.spacing || undefined, fit: 'none', wrap: true,
      ...(e.hang ? { indent: 0, paraSpaceBefore: 0 } : {}),
    });
  } else if (e.t === 'cite') {
    const tall = e.tall, ih = tall ? e.h - 108 : e.h - 16, iw = tall ? e.w - 16 : Math.round(e.w * 0.36);
    const link = { slide: e.slide, tooltip: 'Tới slide trích dẫn' };
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { ...box, rectRadius: I(14), fill: { color: C.white }, line: { color: 'FCA5A5', width: 1.25 },
      shadow: { type: 'outer', color: '1C1917', opacity: 0.08, blur: 10, offset: 3, angle: 90 } });
    slide.addImage({ path: imgPath(e.src), ...fitWidth(e.src, e.x + 8, e.y + 8, iw, ih), hyperlink: link });
    const lx = tall ? e.x + 14 : e.x + iw + 22, ly = tall ? e.y + ih + 18 : e.y + 8, lw = tall ? e.w - 28 : e.w - iw - 36, lh = tall ? e.h - ih - 28 : e.h - 16;
    slide.addText([
      { text: 'TRÍCH NGUYÊN VĂN · bấm để xem', options: { fontSize: PT(11), bold: true, color: 'DC2626', charSpacing: 0.6, breakLine: true, hyperlink: link } },
      { text: e.label, options: { fontSize: PT(15), bold: true, color: C.text, hyperlink: link } },
    ], { x: I(lx), y: I(ly), w: I(lw), h: I(lh), isTextBox: true, margin: 0, fontFace: FONT, valign: 'middle', lineSpacingMultiple: 1.15, fit: 'none' });
  } else if (e.t === 'table') {
    const rows = e.rows.map((r, i) => r.map((c, j) => ({ text: c, options: {
      bold: i === 0 || j === 0, color: i === 0 ? C.white : C.text, fill: { color: i === 0 ? C.dark : C.white },
      align: j === 0 ? 'left' : 'center', valign: 'middle', fontFace: FONT, fontSize: PT(20),
      border: [{ type: i > 1 ? 'solid' : 'none', color: C.line, pt: 0.75 }, { type: 'none' }, { type: 'none' }, { type: 'none' }],
      margin: [0, 0.17, 0, 0.17] } })));
    slide.addTable(rows, { x: I(e.x), y: I(e.y), w: I(e.w), colW: e.colW.map(I), rowH: I(e.rowH) });
  }
}

slides.forEach(s => {
  if (s.layout === 'content') {
    const slide = pres.addSlide({ masterName: 'NOIDUNG' });
    slide.addText(s.title, { placeholder: 'title' });
    add(slide, { t: 'text', x: 72, y: 50, w: 900, h: 22, text: s.kicker, size: 15, bold: true, color: C.brown, spacing: 0.75 });
    const note = s.els.find(e => e.t === 'note');
    add(slide, { t: 'text', x: 72, y: 684, w: 800, h: 22, text: note ? note.text : FOOTER, size: 13, bold: true, color: C.faint });
    s.els.filter(e => e.t !== 'note').forEach(e => add(slide, e));
  } else {
    const slide = pres.addSlide({ masterName: 'BIA' });
    s.els.forEach(e => add(slide, e));
  }
});

// pptxgenjs chưa hỗ trợ hiệu ứng chuyển slide: thêm hiệu ứng mờ dần (Fade) vào từng slide sau khi ghi file.
async function addFade(file) {
  const JSZip = require('jszip');
  const zip = await JSZip.loadAsync(fs.readFileSync(file));
  for (const name of Object.keys(zip.files).filter(n => /^ppt\/slides\/slide\d+\.xml$/.test(n))) {
    let xml = await zip.file(name).async('string');
    if (xml.includes('<p:transition')) continue;
    const tr = '<p:transition spd="med"><p:fade/></p:transition>';
    xml = xml.includes('</p:clrMapOvr>') ? xml.replace('</p:clrMapOvr>', '</p:clrMapOvr>' + tr) : xml.replace('</p:cSld>', '</p:cSld>' + tr);
    zip.file(name, xml);
  }
  // Ghi lại chỉ các tệp (không có mục thư mục), để mở tốt trên OneDrive, Google Drive.
  const out = new JSZip();
  for (const [name, f] of Object.entries(zip.files)) if (!f.dir) out.file(name, await f.async('nodebuffer'), { createFolders: false });
  fs.writeFileSync(file, await out.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
}
const OUT = path.join(d, '..', 'tai-ve', 'Bao_cao_de_cuong.pptx');
pres.writeFile({ fileName: OUT }).then(addFade).then(() => console.log('pptx ok', OUT));
