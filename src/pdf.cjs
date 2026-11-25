const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto(`file://${require('path').join(__dirname, '..', 'index.html')}`); await p.waitForTimeout(800);
  await p.pdf({ path: require('path').join(__dirname, '..', 'tai-ve', 'Bao_cao_de_cuong.pdf'), width: '1280px', height: '720px', printBackground: true, preferCSSPageSize: true });
  await b.close();
})();
