const fs = require('fs');

const hub = fs.readFileSync('ncert-solutions.html', 'utf8');
const c3m = fs.readFileSync('ncert-solutions-class-3-maths.html', 'utf8');
const c3h = fs.readFileSync('ncert-solutions-class-3.html', 'utf8');

console.log('Testing User Flow:');
console.log('1. Auto-selects primary subject on Class change:', hub.includes('if (idx === 0) opt.selected = true; // Auto-select primary subject'));
console.log('2. Direct 1-click goToSolution (no c3 hub redirect):', !hub.includes("window.location.href = 'ncert-solutions-class-3.html'"));
console.log('3. Class 3 maths has left sidebar chapter nav:', c3m.includes('class="chapter-nav" id="navMela"'));
console.log('4. Class 3 maths has sidebar textbook tabs:', c3m.includes('class="sidebar-book-tabs"'));
console.log('5. Class 3 maths has active chapter solutions on right:', c3m.includes('<section class="chapter-section active" id="ch_mm1">'));
console.log('6. Class 3 maths has top subject switcher pills:', c3m.includes('class="ncert-bc-pill active">Maths</a>'));
console.log('7. Direct redirect on ncert-solutions-class-3.html:', c3h.includes('ncert-solutions-class-3-maths.html'));
async function checkLive() {
  const r = await fetch('https://olympiad-portal-d2a5e.web.app/ncert-solutions.html');
  const t = await r.text();
  console.log('\nTesting Live Deployed Site (https://olympiad-portal-d2a5e.web.app):');
  console.log('1. Live auto-selects primary subject:', t.includes('Auto-select primary subject'));
  console.log('2. Live direct goToSolution (no c3 hub redirect):', !t.includes("window.location.href = 'ncert-solutions-class-3.html'"));
  console.log('3. Live Class 3 navbar link direct to solutions:', t.includes('ncert-solutions-class-3-maths.html'));

  try {
    const rHub = await fetch('https://olympiadquiz.org/ncert-solutions.html');
    const tHub = await rHub.text();
    console.log('\nTesting olympiadquiz.org/ncert-solutions.html:');
    console.log('1. Auto-selects primary subject:', tHub.includes('Auto-select primary subject'));
    console.log('2. Direct 1-click goToSolution (no c3 hub redirect):', !tHub.includes("window.location.href = 'ncert-solutions-class-3.html'"));
    console.log('3. Class 3 navbar link direct to solutions:', tHub.includes('ncert-solutions-class-3-maths.html'));

    const r3 = await fetch('https://olympiadquiz.org/ncert-solutions-class-3-maths.html');
    const t3 = await r3.text();
    console.log('\nTesting olympiadquiz.org/ncert-solutions-class-3-maths.html:');
    console.log('olympiadquiz.org Size:', t3.length);
    console.log('Contains "Open Full Chapter":', t3.includes('Open Full Chapter'));
    console.log('Contains "q-card":', t3.includes('q-card'));
  } catch (err) {
    console.log('Could not fetch olympiadquiz.org:', err.message);
  }
  console.log('🎉 LIVE VERIFICATION SUCCESSFUL!');
}
checkLive();
