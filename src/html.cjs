// Vẽ deck.cjs thành một file HTML trình chiếu (chạy không cần mạng, in ra PDF đúng khổ slide).
const fs = require('fs');
const path = require('path');
const { slides, C, FOOTER } = require('./deck.cjs');
const d = __dirname;
const b64 = p => fs.readFileSync(path.join(d, p)).toString('base64');
const OUT = path.join(d, '..');
const IMG = { truong: 'assets/truong.png', khoa: 'assets/khoa.png', web: 'assets/web-matrix.png', export: 'assets/web-export.png' };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function fonts() {
  const out = [];
  const subsets = [['vietnamese', 'U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB'],
    ['latin', 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+FEFF,U+FFFD']];
  for (const w of [400, 600, 700, 800]) for (const [sub, range] of subsets) {
    out.push(`@font-face{font-family:'Be Vietnam Pro';font-weight:${w};font-display:block;src:url(data:font/woff2;base64,${b64(`fonts/be-vietnam-pro-${sub}-${w}-normal.woff2`)}) format('woff2');unicode-range:${range};}`);
  }
  return out.join('\n');
}

const css = (o) => Object.entries(o).filter(([, v]) => v !== undefined && v !== null && v !== '').map(([k, v]) => `${k}:${v}`).join(';');
const box = e => ({ left: e.x + 'px', top: e.y + 'px', width: e.w + 'px', height: e.h + 'px' });
const shadow = '0 1px 0 #e7e5e4, 0 8px 24px rgba(28,25,23,.06)';

function el(e, images) {
  if (e.t === 'rect') return `<div class="r" style="${css({ ...box(e), background: '#' + e.fill, 'border-radius': e.radius + 'px', 'box-shadow': e.shadow ? shadow : undefined })}"></div>`;
  if (e.t === 'ellipse') return `<div class="r" style="${css({ ...box(e), background: '#' + e.fill, 'border-radius': '50%' })}"></div>`;
  if (e.t === 'img') return `<img class="r" alt="" src="${images[e.src]}" style="${css({ ...box(e), 'border-radius': e.round ? '50%' : (e.radius || 0) + 'px', 'box-shadow': e.shadow ? '0 18px 44px rgba(28,25,23,.18)' : undefined, 'object-fit': 'cover', 'object-position': 'left top' })}">`;
  if (e.t === 'text') {
    const style = css({ ...box(e), 'font-size': e.size + 'px', 'font-weight': e.weight || (e.bold ? 700 : 400), color: '#' + e.color,
      'text-align': e.align || 'left', 'justify-content': e.valign === 'middle' ? 'center' : e.valign === 'bottom' ? 'flex-end' : 'flex-start',
      'line-height': e.lh || 1.3, 'letter-spacing': e.spacing ? (e.spacing * 1.333).toFixed(2) + 'px' : undefined,
      'padding-left': e.hang ? '22px' : undefined, 'text-indent': e.hang ? '-22px' : undefined });
    return `<div class="t" style="${style}"><span>${esc(e.text).replace(/\n/g, '<br>')}</span></div>`;
  }
  if (e.t === 'table') {
    const rows = e.rows.map((r, i) => `<tr style="height:${e.rowH}px">${r.map((c, j) => `<${i ? 'td' : 'th'} style="width:${e.colW[j]}px">${esc(c)}</${i ? 'td' : 'th'}>`).join('')}</tr>`).join('');
    return `<table class="r tb" style="${css({ left: e.x + 'px', top: e.y + 'px', width: e.w + 'px' })}">${rows}</table>`;
  }
  return '';
}

function render() {
  const images = Object.fromEntries(Object.entries(IMG).map(([k, f]) => [k, 'data:image/png;base64,' + b64(f)]));
  const total = slides.length;
  const body = slides.map((s, i) => {
    const n = i + 1;
    let frame = '';
    if (s.layout === 'content') {
      frame = `<div class="t" style="${css({ left: '72px', top: '50px', width: '900px', height: '22px', 'font-size': '15px', 'font-weight': 700, color: '#' + C.brown, 'letter-spacing': '1px' })}"><span>${esc(s.kicker)}</span></div>
        <div class="t title" style="${css({ left: '72px', top: '76px', width: '1000px', height: '60px', 'font-size': '40px', 'font-weight': 800, color: '#' + C.text, 'letter-spacing': '-0.5px', 'line-height': 1.2 })}"><span>${esc(s.title)}</span></div>
        <img class="r" alt="" src="${images.truong}" style="left:1112px;top:46px;width:44px;height:44px;border-radius:50%">
        <img class="r" alt="" src="${images.khoa}" style="left:1164px;top:46px;width:44px;height:44px;border-radius:50%">
        <div class="t" style="left:72px;top:686px;width:800px;height:20px;font-size:13px;font-weight:600;color:#${C.faint}"><span>${esc((s.els.find(e => e.t === 'note') || {}).text || FOOTER)}</span></div>
        <div class="t" style="left:1108px;top:686px;width:100px;height:20px;font-size:14px;font-weight:600;color:#${C.faint};text-align:right"><span>${n}</span></div>`;
    }
    const bg = s.layout === 'cover' ? C.dark : C.bg;
    return `<section class="slide" data-n="${n}" style="background:#${bg}">${frame}${s.els.map(e => el(e, images)).join('')}</section>`;
  }).join('\n');

  return `<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Báo cáo đề cương khóa luận</title>
<style>
${fonts()}
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%;background:#0c0a09;overflow:hidden}
body{font-family:'Be Vietnam Pro',Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#${C.text}}
.slide{position:absolute;left:50%;top:50%;width:1280px;height:720px;overflow:hidden;transform-origin:center;display:none}
.slide.on{display:block}
.r,.t{position:absolute}
.t{display:flex;flex-direction:column;white-space:normal;overflow:hidden}
.tb{border-collapse:separate;border-spacing:0;border-radius:16px;overflow:hidden;background:#fff;box-shadow:${shadow};font-size:20px}
.tb th{background:#${C.dark};color:#fff;font-weight:700;text-align:center;padding:0 16px}
.tb td{text-align:center;padding:0 16px;border-top:1px solid #${C.line};font-variant-numeric:tabular-nums}
.tb th:first-child,.tb td:first-child{text-align:left;font-weight:600}
.hud{position:fixed;right:14px;bottom:10px;color:#78716c;font:600 12px 'Be Vietnam Pro',sans-serif;opacity:0;transition:opacity .3s}
body:hover .hud{opacity:1}
@media print{
  @page{size:1280px 720px;margin:0}
  html,body{height:auto;overflow:visible;background:none}
  .slide{display:block!important;position:relative;left:0;top:0;transform:none!important;page-break-after:always;break-after:page}
  .hud{display:none}
}
</style></head>
<body>
${body}
<div class="hud" id="hud"></div>
<script>
(function(){
  var slides=[].slice.call(document.querySelectorAll('.slide')),i=0,hud=document.getElementById('hud');
  var m=location.hash.match(/(\\d+)/); if(m) i=Math.min(Math.max(+m[1]-1,0),slides.length-1);
  function fit(){var s=Math.min(innerWidth/1280,innerHeight/720);slides.forEach(function(e){e.style.transform='translate(-50%,-50%) scale('+s+')';});}
  function show(){slides.forEach(function(e,k){e.classList.toggle('on',k===i);});hud.textContent=(i+1)+' / '+slides.length+'  ·  ← → chuyển slide  ·  F toàn màn hình  ·  Ctrl+P lưu PDF';history.replaceState(null,'','#'+(i+1));}
  function go(d){i=Math.min(Math.max(i+d,0),slides.length-1);show();}
  addEventListener('keydown',function(e){
    if(['ArrowRight','ArrowDown','PageDown',' ','Enter'].indexOf(e.key)>=0){go(1);e.preventDefault();}
    else if(['ArrowLeft','ArrowUp','PageUp','Backspace'].indexOf(e.key)>=0){go(-1);e.preventDefault();}
    else if(e.key==='Home'){i=0;show();} else if(e.key==='End'){i=slides.length-1;show();}
    else if(e.key==='f'||e.key==='F'){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();}
  });
  var tx=null;
  addEventListener('touchstart',function(e){tx=e.touches[0].clientX;},{passive:true});
  addEventListener('touchend',function(e){if(tx===null)return;var dx=e.changedTouches[0].clientX-tx;tx=null;if(Math.abs(dx)>40){go(dx<0?1:-1);e.preventDefault();}},{passive:false});
  addEventListener('click',function(e){go(e.clientX>innerWidth/2?1:-1);});
  addEventListener('resize',fit); fit(); show();
})();
</script>
</body></html>`;
}

fs.writeFileSync(path.join(OUT, 'index.html'), render());
console.log('html ok', slides.length, 'slides');
