const fs = require('fs');
const path = require('path');

const vasant = require('./data-c7h-vasant.js');
const mahabharat = require('./data-c7h-mahabharat.js');
const durva = require('./data-c7h-durva.js');

const allUnits = [...vasant, ...mahabharat, ...durva];
const rootDir = path.join(__dirname, '..');
const chaptersDir = path.join(rootDir, 'chapters-c7h');

if (!fs.existsSync(chaptersDir)) {
  fs.mkdirSync(chaptersDir, { recursive: true });
}

// Helper: render single question card
function renderQuestionCard(q, prefix = '') {
  const schemeHtml = q.scheme && q.scheme.length > 0 ? `
    <div class="marking-scheme">
      <div class="marking-title">📋 CBSE अंक विभाजन (Step-by-Step Marking Scheme 2026-27)</div>
      ${q.scheme.map(s => `
        <div class="marking-row">
          <span class="marking-key">${s.key}</span>
          <span class="marking-marks">${s.marks}</span>
        </div>
      `).join('')}
    </div>` : '';

  return `
    <div class="q-card open" id="${q.id}">
      <div class="q-head" onclick="toggleQ('${q.id}')">
        <span class="q-num">${q.num || prefix}</span>
        <div class="q-text">${q.text}</div>
        <span class="q-marks">${q.marks || '2 अंक'}</span>
        <div class="q-toggle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>
      <div class="q-answer">
        <div class="answer-box">
          <div class="answer-label">💡 सम्पूर्ण आदर्श उत्तर (Model Solution)</div>
          <div class="answer-text">
            ${q.ans}
          </div>
          ${schemeHtml}
        </div>
      </div>
    </div>`;
}

// Helper: render CBQ section
function renderCBQSection(cbqList) {
  if (!cbqList || cbqList.length === 0) return '';
  return `
    <div class="cbq-section">
      <div class="cbq-header">
        <span>💡 योग्यता-आधारित प्रश्न एवं मूल्यपरक विश्लेषण (CBSE Competency-Based / HOTS 2026-27)</span>
        <span class="cbq-badge">Applied Hindi</span>
      </div>
      <div class="cbq-body">
        ${cbqList.map((c, i) => `
          <div class="cbq-card">
            <div class="cbq-type" style="color:#ea580c; font-weight:700;">${c.type || 'HOTS / Case Study'}</div>
            <div class="cbq-question">${c.q}</div>
            <button class="cbq-show-btn" onclick="toggleCBQ(this)">
              <span>आदर्श उत्तर एवं अंक विभाजन देखें ▼</span>
            </button>
            <div class="cbq-answer">
              ${c.ans}
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
}

// Helper: render unit section content
function renderUnitSection(unit, isFirst = false, prevUnit = null, nextUnit = null) {
  const badgeText = unit.book === 'vasant' ? `V${unit.num}` : (unit.book === 'mahabharat' ? `M${unit.num}` : `D${unit.num}`);
  const bookIcon = unit.book === 'vasant' ? '📖' : (unit.book === 'mahabharat' ? '🏹' : '📜');
  const bookLabel = `${bookIcon} ${unit.bookName} (${unit.book === 'mahabharat' ? `अध्याय ${unit.num}` : `पाठ ${unit.num}`})`;

  const poemHtml = unit.poemText ? `
    <div class="poem-display-box">
      <div class="poem-body">${unit.poemText}</div>
      ${unit.author ? `<div class="poet-name">— ${unit.author}</div>` : ''}
    </div>` : '';

  const summaryHtml = unit.summary ? `
    <div class="concept-card">
      <div class="concept-header">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        <span>पाठ का सार एवं केंद्रीय भाव (Summary &amp; Core Themes)</span>
      </div>
      <div style="font-size:0.92rem; line-height:1.8; color:#334155;">
        ${unit.summary}
      </div>
      ${unit.theme ? `<div style="margin-top:12px; font-size:0.88rem; color:#9a3412; font-weight:700;">🎯 <em>केंद्रीय भाव व जीवन-मूल्य:</em> ${unit.theme}</div>` : ''}
    </div>` : '';

  let exerciseCards = '';
  if (unit.exercises && unit.exercises.length > 0) {
    exerciseCards = `
      <div class="ex-div">✍️ पाठ्यपुस्तक अभ्यास प्रश्न-उत्तर एवं भाषा की बात (व्याकरण)</div>
      ${unit.exercises.map(q => renderQuestionCard(q)).join('')}`;
  }

  const cbqHtml = renderCBQSection(unit.cbq);

  const prevBtn = prevUnit 
    ? `<button class="ch-nav-btn" onclick="showChapter('${prevUnit.id}')">← पिछला: ${prevUnit.title}</button>` 
    : `<button class="ch-nav-btn" disabled>← पिछला पाठ</button>`;
  
  const nextBtn = nextUnit 
    ? `<button class="ch-nav-btn next" onclick="showChapter('${nextUnit.id}')">अगला: ${nextUnit.title} →</button>` 
    : `<button class="ch-nav-btn" disabled>अगला पाठ →</button>`;

  const navButtons = `
    <div class="ch-nav-btns">
      ${prevBtn}
      ${nextBtn}
    </div>`;

  return `
    <section class="chapter-section${isFirst ? '' : ' hidden'}" id="ch-${unit.id}" data-id="${unit.id}" data-book="${unit.book}">
      <div class="chapter-header">
        <div class="ch-badge">${badgeText}</div>
        <div class="chapter-header-info">
          <h2>${unit.title}</h2>
          <p>${bookLabel} ${unit.subtitle ? `— ${unit.subtitle}` : ''}</p>
        </div>
      </div>

      ${poemHtml}
      ${summaryHtml}
      ${exerciseCards}
      ${cbqHtml}
      ${navButtons}
    </section>`;
}

// 1. Generate chapters-data.js for standalone use
const dataJsContent = `// NCERT Solutions Class 7 Hindi — Chapters Data Metadata
window.C7H_CHAPTERS = ${JSON.stringify(allUnits.map(u => ({
  id: u.id,
  book: u.book,
  bookName: u.bookName,
  num: u.num,
  title: u.title,
  subtitle: u.subtitle,
  author: u.author,
  genre: u.genre
})), null, 2)};
`;
fs.writeFileSync(path.join(chaptersDir, 'chapters-data.js'), dataJsContent, 'utf8');
console.log('Successfully generated chapters-c7h/chapters-data.js!');

// 2. Generate individual chapter HTML files in chapters-c7h/
allUnits.forEach((unit, idx) => {
  const prevUnit = idx > 0 ? allUnits[idx - 1] : null;
  const nextUnit = idx < allUnits.length - 1 ? allUnits[idx + 1] : null;
  const unitHtml = renderUnitSection(unit, true, prevUnit, nextUnit);
  
  const standalonePage = `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${unit.title} — NCERT Solutions Class 7 Hindi | CBSE 2026-27</title>
  <meta name="description" content="Free NCERT Solutions for Class 7 Hindi: ${unit.title} (${unit.bookName}). Complete Q&amp;A, Grammar (भाषा की बात), Marking Scheme &amp; CBQ.">
  <link rel="canonical" href="https://olympiadquiz.org/chapters-c7h/${unit.id}.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --brand: #ea580c; --brand-hover: #c2410c; --brand-light: #fff7ed; --brand-text: #9a3412;
      --navy: #0f172a; --slate: #334155; --muted: #64748b; --border: #e2e8f0;
      --shadow: 0 4px 6px -1px rgba(0,0,0,0.05); --shadow-hover: 0 10px 15px -3px rgba(0,0,0,0.1);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', 'Noto Sans Devanagari', sans-serif; background: #f8fafc; color: var(--slate); line-height: 1.75; padding: 24px 16px; }
    .page-container { max-width: 900px; margin: 0 auto; background: white; border-radius: 16px; padding: 32px 28px; box-shadow: var(--shadow); border: 1px solid var(--border); }
    .back-nav { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 24px; color: var(--brand); text-decoration: none; font-weight: 700; font-size: 0.9rem; }
    .back-nav:hover { text-decoration: underline; color: var(--brand-hover); }
    .chapter-header { display: flex; align-items: center; gap: 20px; background: linear-gradient(135deg, #7c2d12, #0f172a); color: white; padding: 24px 28px; border-radius: 16px; margin-bottom: 24px; border-left: 5px solid var(--brand); }
    .ch-badge { width: 50px; height: 50px; background: rgba(255,255,255,0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.35rem; font-weight: 900; flex-shrink: 0; font-family: 'Inter', sans-serif; }
    .chapter-header-info h2 { font-size: 1.35rem; font-weight: 800; margin-bottom: 4px; font-family: 'Noto Sans Devanagari', sans-serif; }
    .chapter-header-info p { font-size: 0.85rem; color: #fed7aa; line-height: 1.4; }
    .poem-display-box { background: linear-gradient(135deg, #fff7ed, #ffedd5); border: 2px solid #fed7aa; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px; }
    .poem-body { font-family: 'Noto Sans Devanagari', serif; font-size: 0.96rem; line-height: 2.0; color: #7c2d12; white-space: pre-line; }
    .poet-name { text-align: right; font-weight: 800; color: #9a3412; margin-top: 10px; font-size: 0.9rem; }
    .concept-card { background: #fff7ed; border-left: 4px solid var(--brand); padding: 18px 22px; border-radius: 10px; margin-bottom: 24px; }
    .concept-header { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 0.92rem; color: var(--brand-text); margin-bottom: 10px; }
    .ex-div { background: #f1f5f9; color: var(--navy); font-weight: 800; font-size: 0.92rem; padding: 10px 16px; border-radius: 8px; margin: 28px 0 16px; border-left: 4px solid var(--brand); }
    .q-card { background: white; border: 1px solid var(--border); border-radius: 12px; margin-bottom: 16px; box-shadow: var(--shadow); overflow: hidden; }
    .q-head { display: flex; align-items: flex-start; gap: 12px; padding: 16px 20px; cursor: pointer; user-select: none; }
    .q-num { min-width: 36px; height: 36px; background: var(--brand); color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 800; flex-shrink: 0; font-family: 'Inter', sans-serif; }
    .q-text { flex: 1; font-size: 0.94rem; font-weight: 600; color: var(--slate); line-height: 1.6; font-family: 'Noto Sans Devanagari', sans-serif; }
    .q-marks { font-size: 0.75rem; font-weight: 700; color: var(--brand-text); background: var(--brand-light); padding: 4px 10px; border-radius: 999px; white-space: nowrap; }
    .q-toggle { width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; color: var(--muted); }
    .q-toggle svg { width: 18px; height: 18px; }
    .q-answer { border-top: 1px solid var(--border); }
    .answer-box { padding: 20px 24px; }
    .answer-label { font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--brand-text); margin-bottom: 12px; }
    .answer-text { font-size: 0.94rem; line-height: 1.85; color: var(--slate); font-family: 'Noto Sans Devanagari', sans-serif; }
    .answer-text p { margin-bottom: 10px; }
    .answer-text ul, .answer-text ol { padding-left: 22px; margin-bottom: 10px; }
    .answer-text li { margin-bottom: 6px; }
    .marking-scheme { margin-top: 16px; padding-top: 14px; border-top: 1px dashed var(--border); }
    .marking-title { font-size: 0.76rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--muted); margin-bottom: 8px; }
    .marking-row { display: flex; justify-content: space-between; align-items: center; padding: 5px 0; border-bottom: 1px solid #f8fafc; font-size: 0.84rem; }
    .marking-key { color: var(--slate); font-weight: 500; }
    .marking-marks { font-weight: 700; color: var(--brand-text); background: var(--brand-light); padding: 2px 8px; border-radius: 4px; font-size: 0.78rem; }
    .cbq-section { background: linear-gradient(135deg, #fff7ed, #ffedd5); border: 2px solid #fed7aa; border-radius: 14px; padding: 20px; margin-top: 28px; }
    .cbq-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px; }
    .cbq-header span:first-child { font-size: 0.88rem; font-weight: 800; color: #7c2d12; }
    .cbq-badge { background: var(--brand); color: white; padding: 4px 12px; border-radius: 999px; font-size: 0.75rem; font-weight: 700; }
    .cbq-card { background: white; border-radius: 10px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
    .cbq-question { font-size: 0.92rem; font-weight: 600; color: var(--navy); margin-bottom: 14px; line-height: 1.7; font-family: 'Noto Sans Devanagari', sans-serif; }
    .cbq-show-btn { background: var(--brand); color: white; border: none; padding: 8px 18px; border-radius: 8px; font-size: 0.82rem; font-weight: 700; cursor: pointer; transition: background 0.2s; }
    .cbq-show-btn:hover { background: var(--brand-hover); }
    .cbq-answer { display: none; margin-top: 14px; font-size: 0.92rem; line-height: 1.85; color: var(--slate); font-family: 'Noto Sans Devanagari', sans-serif; }
    .ch-nav-btns { display: flex; justify-content: space-between; gap: 12px; margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--border); flex-wrap: wrap; }
    .ch-nav-btn { padding: 10px 18px; border-radius: 10px; font-size: 0.85rem; font-weight: 700; cursor: pointer; border: 1.5px solid var(--border); background: white; color: var(--slate); transition: all 0.2s; text-decoration: none; display: inline-flex; align-items: center; }
    .ch-nav-btn:hover:not([disabled]) { border-color: var(--brand); color: var(--brand); background: var(--brand-light); }
    .ch-nav-btn.next { background: var(--brand); color: white; border-color: var(--brand); }
    .ch-nav-btn.next:hover { background: var(--brand-hover); }
    .ch-nav-btn[disabled] { opacity: 0.4; cursor: not-allowed; }
  </style>
</head>
<body>
  <div class="page-container">
    <a href="../ncert-solutions-class-7-hindi.html#${unit.id}" class="back-nav">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m15 18-6-6 6-6"/></svg>
      <span>← कक्षा 7 हिंदी मुख्य हब पर लौटें (All Chapters Hub)</span>
    </a>
    ${unitHtml}
  </div>
  <script>
    function toggleQ(id) {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('open');
    }
    function toggleCBQ(btn) {
      const ans = btn.nextElementSibling;
      if (!ans) return;
      const isOpen = ans.style.display === 'block';
      ans.style.display = isOpen ? 'none' : 'block';
      btn.querySelector('span').textContent = isOpen 
        ? 'आदर्श उत्तर एवं अंक विभाजन देखें ▼' 
        : 'उत्तर छिपाएँ ▲';
    }
    function showChapter(id) {
      window.location.href = '../ncert-solutions-class-7-hindi.html#' + id;
    }
  </script>
</body>
</html>`;

  fs.writeFileSync(path.join(chaptersDir, `${unit.id}.html`), standalonePage, 'utf8');
});
console.log(`Successfully generated ${allUnits.length} chapter files in chapters-c7h/!`);

// 3. Generate Single-Page Interactive In-DOM Pre-rendered Hub: ncert-solutions-class-7-hindi.html
const breadcrumbChipsHtml = allUnits.map((u, i) => {
  const numBadge = u.book === 'vasant' ? u.num : (u.book === 'mahabharat' ? `M${u.num}` : `D${u.num}`);
  return `
    <div class="bc-chip${i === 0 ? ' active' : ''}" data-id="${u.id}" data-book="${u.book}" onclick="showChapter('${u.id}')">
      <span class="bc-n">${numBadge}</span>
      <span>${u.title.replace('पाठ ', '').replace('अध्याय ', '')}</span>
    </div>`;
}).join('');

const sidebarVasantNav = vasant.map(u => `
  <li>
    <a data-id="${u.id}" onclick="showChapter('${u.id}')" class="${u.id === 'v1' ? 'active' : ''}">
      <span class="ch-num">${u.num}</span>
      <div class="ch-txt">
        <div>${u.title}</div>
        <small style="font-size:0.72rem; color:#64748b;">${u.author ? u.author : ''}</small>
      </div>
    </a>
  </li>
`).join('');

const sidebarMahabharatNav = mahabharat.map(u => `
  <li>
    <a data-id="${u.id}" onclick="showChapter('${u.id}')">
      <span class="ch-num">M${u.num}</span>
      <div class="ch-txt">
        <div>${u.title}</div>
        <small style="font-size:0.72rem; color:#64748b;">बाल महाभारत कथा</small>
      </div>
    </a>
  </li>
`).join('');

const sidebarDurvaNav = durva.map(u => `
  <li>
    <a data-id="${u.id}" onclick="showChapter('${u.id}')">
      <span class="ch-num">D${u.num}</span>
      <div class="ch-txt">
        <div>${u.title}</div>
        <small style="font-size:0.72rem; color:#64748b;">${u.author ? u.author : 'दूर्वा भाग - 2'}</small>
      </div>
    </a>
  </li>
`).join('');

const renderedSections = allUnits.map((unit, idx) => {
  const isFirst = idx === 0;
  const prevUnit = idx > 0 ? allUnits[idx - 1] : null;
  const nextUnit = idx < allUnits.length - 1 ? allUnits[idx + 1] : null;
  return renderUnitSection(unit, isFirst, prevUnit, nextUnit);
}).join('\n');

const hubHtml = `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions Class 7 Hindi — Vasant, Bal Mahabharat &amp; Durva | CBSE 2026-27</title>
  <meta name="description" content="Free NCERT Solutions for Class 7 Hindi — Vasant Bhag-2 (20 Chapters), Bal Mahabharat Katha (10 Episodes) &amp; Durva Bhag-2 (18 Chapters). 100% question coverage with step-by-step CBSE marking schemes 2026-27, grammar (भाषा की बात) &amp; HOTS.">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-7-hindi.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --brand: #ea580c;
      --brand-hover: #c2410c;
      --brand-light: #fff7ed;
      --brand-text: #9a3412;
      --navy: #0f172a;
      --slate: #334155;
      --muted: #64748b;
      --light-bg: #f8fafc;
      --border: #e2e8f0;
      --shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      --shadow-hover: 0 10px 15px -3px rgba(0,0,0,0.1);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', 'Noto Sans Devanagari', sans-serif; background: var(--light-bg); color: var(--slate); line-height: 1.75; }
    .top-progress { position: fixed; top: 0; left: 0; height: 3.5px; background: linear-gradient(90deg, #ea580c, #f59e0b); z-index: 1000; transition: width .1s; }
    
    /* Navbar */
    .navbar { background: #0f172a; border-bottom: 1px solid rgba(255,255,255,0.08); position: sticky; top: 0; z-index: 900; }
    .navbar-inner { max-width: 1380px; margin: 0 auto; padding: 0 24px; height: 60px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .navbar-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
    .logo-text { font-size: 1.15rem; font-weight: 800; color: white; }
    .logo-text span { color: #fb923c; }
    .navbar-links { display: flex; align-items: center; gap: 8px; }
    .nav-link { color: #94a3b8; font-size: 0.85rem; font-weight: 600; padding: 6px 12px; border-radius: 8px; text-decoration: none; transition: 0.2s; display: flex; align-items: center; gap: 4px; }
    .nav-link:hover { color: white; background: rgba(255,255,255,0.06); }
    .nav-dropdown { position: relative; }
    .nav-dropdown:hover .nav-dropdown-content { display: block !important; }
    .nav-dropdown-content { display: none; position: absolute; top: 100%; left: 0; background: white; border: 1px solid #e2e8f0; border-radius: 10px; min-width: 250px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); z-index: 1000; padding: 6px; }
    .nav-dropdown-content a { display: block; padding: 8px 14px; color: #334155; text-decoration: none; font-size: 0.85rem; border-radius: 6px; transition: 0.2s; }
    .nav-dropdown-content a:hover { background: #fff7ed; color: #ea580c !important; }
    .navbar-actions { display: flex; align-items: center; gap: 10px; }
    .btn-login { background: #ea580c; color: white; font-size: 0.82rem; font-weight: 700; padding: 7px 18px; border-radius: 8px; text-decoration: none; transition: 0.2s; }
    .btn-login:hover { background: #c2410c; }
    .navbar-toggle { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 6px; }
    .navbar-toggle span { display: block; width: 22px; height: 2px; background: white; border-radius: 2px; }

    /* Hero Banner */
    .hero-banner { background: linear-gradient(135deg, #7c2d12 0%, #0f172a 100%); color: white; padding: 36px 24px; text-align: center; border-bottom: 3.5px solid var(--brand); }
    .hero-banner h1 { font-size: 1.85rem; font-weight: 800; margin-bottom: 8px; font-family: 'Noto Sans Devanagari', sans-serif; }
    .hero-banner p { color: #fed7aa; font-size: .95rem; max-width: 840px; margin: 0 auto 16px; line-height: 1.6; }
    .hero-badges { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }
    .hero-badge { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.18); padding: 5px 14px; border-radius: 20px; font-size: .78rem; font-weight: 600; color: #ffedd5; }

    /* Breadcrumb Bar */
    .breadcrumb-bar { background: white; border-bottom: 1px solid var(--border); padding: 14px 36px; position: sticky; top: 60px; z-index: 800; box-shadow: 0 2px 8px rgba(0,0,0,.04); }
    .breadcrumb-controls { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 10px; }
    .breadcrumb-label { font-size: .72rem; font-weight: 800; text-transform: uppercase; color: var(--muted); letter-spacing: .06em; }
    .book-tabs { display: flex; gap: 6px; flex-wrap: wrap; }
    .book-tab { padding: 6px 16px; border-radius: 20px; font-size: 0.78rem; font-weight: 700; cursor: pointer; border: 1.5px solid var(--border); background: #f8fafc; color: var(--slate); transition: all 0.18s; }
    .book-tab:hover { border-color: var(--brand); color: var(--brand-text); background: var(--brand-light); }
    .book-tab.active { background: var(--brand); color: white; border-color: var(--brand); box-shadow: 0 2px 8px rgba(234,88,12,0.3); }

    .breadcrumb-chips { display: flex; gap: 6px; flex-wrap: wrap; max-height: 88px; overflow-y: auto; }
    .bc-chip { display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px; border-radius: 20px; font-size: .75rem; font-weight: 600; cursor: pointer; border: 1.5px solid var(--border); background: #f8fafc; color: var(--slate); transition: all .18s; user-select: none; }
    .bc-chip:hover { border-color: var(--brand); color: var(--brand-text); background: var(--brand-light); }
    .bc-chip.active { background: var(--brand); color: white; border-color: var(--brand); box-shadow: 0 3px 10px rgba(234,88,12,.35); }
    .bc-chip .bc-n { display: inline-flex; align-items: center; justify-content: center; min-width: 18px; height: 18px; padding: 0 4px; background: rgba(0,0,0,.12); border-radius: 999px; font-size: .65rem; font-weight: 800; }
    .bc-chip.active .bc-n { background: rgba(255,255,255,.25); }
    .bc-chip.hidden { display: none !important; }

    /* Main Layout */
    .main-layout { display: flex; max-width: 1380px; margin: 0 auto; min-height: calc(100vh - 180px); }
    .sidebar { width: 330px; background: white; border-right: 1px solid var(--border); padding: 20px 16px; position: sticky; top: 156px; height: calc(100vh - 156px); overflow-y: auto; flex-shrink: 0; }
    .sidebar-title { font-size: .82rem; font-weight: 800; text-transform: uppercase; color: var(--muted); letter-spacing: .05em; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; }
    .search-box { width: 100%; padding: 10px 14px; border: 1px solid var(--border); border-radius: 8px; font-size: .85rem; margin-bottom: 16px; font-family: inherit; }
    .search-box:focus { outline: none; border-color: var(--brand); box-shadow: 0 0 0 3px rgba(234,88,12,0.15); }
    .sidebar-group-title { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--brand); letter-spacing: 0.05em; margin: 16px 0 6px 6px; display: flex; align-items: center; gap: 6px; }
    .chapter-nav { list-style: none; margin-bottom: 14px; }
    .chapter-nav li { margin-bottom: 3px; }
    .chapter-nav li a { display: flex; align-items: flex-start; gap: 8px; padding: 8px 10px; border-radius: 8px; color: var(--slate); text-decoration: none; font-size: .82rem; font-weight: 500; transition: all .15s; cursor: pointer; }
    .chapter-nav li a:hover { background: var(--brand-light); color: var(--brand-text); }
    .chapter-nav li a.active { background: var(--brand); color: white; }
    .chapter-nav li a.active small { color: rgba(255,255,255,0.85) !important; }
    .ch-num { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; background: rgba(0,0,0,.1); border-radius: 50%; font-size: .68rem; font-weight: 800; flex-shrink: 0; margin-top: 2px; }
    .chapter-nav li a.active .ch-num { background: rgba(255,255,255,.25); }
    .ch-txt { flex: 1; line-height: 1.35; }

    /* Main Content */
    .main-content { flex: 1; padding: 28px 36px 60px; max-width: 920px; }
    .chapter-section { display: block; }
    .chapter-section.hidden { display: none !important; }
    .chapter-header { background: linear-gradient(135deg, #7c2d12, #0f172a); color: white; padding: 24px 28px; border-radius: 16px; margin-bottom: 24px; box-shadow: var(--shadow-hover); display: flex; align-items: center; gap: 20px; border-left: 5px solid var(--brand); }
    .ch-badge { width: 50px; height: 50px; background: rgba(255,255,255,.15); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; font-weight: 900; flex-shrink: 0; font-family: 'Inter', sans-serif; }
    .chapter-header-info h2 { font-size: 1.35rem; font-weight: 800; margin-bottom: 4px; font-family: 'Noto Sans Devanagari', sans-serif; }
    .chapter-header-info p { font-size: .85rem; color: #fed7aa; line-height: 1.4; }

    .poem-display-box { background: linear-gradient(135deg, #fff7ed, #ffedd5); border: 2px solid #fed7aa; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px; box-shadow: var(--shadow); }
    .poem-body { font-family: 'Noto Sans Devanagari', serif; font-size: 0.96rem; line-height: 2.0; color: #7c2d12; white-space: pre-line; }
    .poet-name { text-align: right; font-weight: 800; color: #9a3412; margin-top: 10px; font-size: 0.9rem; }

    .concept-card { background: #fff7ed; border-left: 4px solid var(--brand); padding: 18px 22px; border-radius: 10px; margin-bottom: 24px; box-shadow: var(--shadow); }
    .concept-header { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 0.92rem; color: var(--brand-text); margin-bottom: 10px; }

    .ex-div { background: #f1f5f9; color: var(--navy); font-weight: 800; font-size: .88rem; padding: 10px 16px; border-radius: 8px; margin: 28px 0 16px; border-left: 4px solid var(--brand); }
    .q-card { background: white; border: 1px solid var(--border); border-radius: 12px; margin-bottom: 14px; box-shadow: var(--shadow); transition: box-shadow .2s; overflow: hidden; }
    .q-card:hover { box-shadow: var(--shadow-hover); }
    .q-head { display: flex; align-items: flex-start; gap: 12px; padding: 16px 20px; cursor: pointer; user-select: none; }
    .q-num { min-width: 36px; height: 36px; background: var(--brand); color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: .78rem; font-weight: 800; flex-shrink: 0; font-family: 'Inter', sans-serif; }
    .q-text { flex: 1; font-size: .94rem; font-weight: 600; color: var(--slate); line-height: 1.6; font-family: 'Noto Sans Devanagari', sans-serif; }
    .q-marks { font-size: .75rem; font-weight: 700; color: var(--brand-text); background: var(--brand-light); padding: 4px 10px; border-radius: 999px; white-space: nowrap; }
    .q-toggle { width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; color: var(--muted); }
    .q-toggle svg { width: 18px; height: 18px; transition: transform .2s; }
    .q-card.open .q-toggle svg { transform: rotate(180deg); }
    .q-answer { display: none; border-top: 1px solid var(--border); }
    .q-card.open .q-answer { display: block; }
    .answer-box { padding: 20px 24px; }
    .answer-label { font-size: .78rem; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--brand-text); margin-bottom: 12px; }
    .answer-text { font-size: .94rem; line-height: 1.85; color: var(--slate); font-family: 'Noto Sans Devanagari', sans-serif; }
    .answer-text p { margin-bottom: 10px; }
    .answer-text ul, .answer-text ol { padding-left: 22px; margin-bottom: 10px; }
    .answer-text li { margin-bottom: 6px; }

    .marking-scheme { margin-top: 16px; padding-top: 14px; border-top: 1px dashed var(--border); }
    .marking-title { font-size: .76rem; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--muted); margin-bottom: 8px; }
    .marking-row { display: flex; justify-content: space-between; align-items: center; padding: 5px 0; border-bottom: 1px solid #f8fafc; font-size: .84rem; }
    .marking-key { color: var(--slate); font-weight: 500; }
    .marking-marks { font-weight: 700; color: var(--brand-text); background: var(--brand-light); padding: 2px 8px; border-radius: 4px; font-size: .78rem; }

    .cbq-section { background: linear-gradient(135deg, #fff7ed, #ffedd5); border: 2px solid #fed7aa; border-radius: 14px; padding: 20px; margin-top: 28px; }
    .cbq-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px; }
    .cbq-header span:first-child { font-size: .88rem; font-weight: 800; color: #7c2d12; }
    .cbq-badge { background: var(--brand); color: white; padding: 4px 12px; border-radius: 999px; font-size: .75rem; font-weight: 700; }
    .cbq-card { background: white; border-radius: 10px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
    .cbq-question { font-size: .92rem; font-weight: 600; color: var(--navy); margin-bottom: 14px; line-height: 1.7; font-family: 'Noto Sans Devanagari', sans-serif; }
    .cbq-show-btn { background: var(--brand); color: white; border: none; padding: 8px 18px; border-radius: 8px; font-size: .82rem; font-weight: 700; cursor: pointer; transition: background .2s; }
    .cbq-show-btn:hover { background: var(--brand-hover); }
    .cbq-answer { display: none; margin-top: 14px; font-size: .92rem; line-height: 1.85; color: var(--slate); font-family: 'Noto Sans Devanagari', sans-serif; }

    .ch-nav-btns { display: flex; justify-content: space-between; gap: 12px; margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--border); flex-wrap: wrap; }
    .ch-nav-btn { padding: 10px 18px; border-radius: 10px; font-size: .85rem; font-weight: 700; cursor: pointer; border: 1.5px solid var(--border); background: white; color: var(--slate); transition: all .2s; display: inline-flex; align-items: center; }
    .ch-nav-btn:hover:not([disabled]) { border-color: var(--brand); color: var(--brand); background: var(--brand-light); }
    .ch-nav-btn.next { background: var(--brand); color: white; border-color: var(--brand); }
    .ch-nav-btn.next:hover { background: var(--brand-hover); }
    .ch-nav-btn[disabled] { opacity: .4; cursor: not-allowed; }

    .mob-sidebar-toggle { display: none; }
    .sidebar-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 950; }

    @media (max-width: 992px) {
      .sidebar { position: fixed; left: -340px; top: 0; height: 100vh; z-index: 960; transition: left .3s ease; box-shadow: 4px 0 20px rgba(0,0,0,.15); }
      .sidebar.open { left: 0; }
      .sidebar-overlay.show { display: block; }
      .mob-sidebar-toggle { display: flex; align-items: center; gap: 8px; position: fixed; bottom: 20px; left: 20px; z-index: 940; background: var(--brand); color: white; border: none; padding: 12px 20px; border-radius: 999px; font-size: .88rem; font-weight: 700; cursor: pointer; box-shadow: 0 4px 16px rgba(234,88,12,0.4); }
      .main-content { padding: 20px 16px 40px; }
      .breadcrumb-bar { padding: 12px 16px; top: 57px; }
      .navbar-links { display: none; }
      .navbar-toggle { display: flex; }
    }
  </style>
</head>
<body>
<div class="top-progress" id="progressBar"></div>

<!-- NAVBAR -->
<nav class="navbar">
  <div class="navbar-inner">
    <a href="index.html" class="navbar-logo">
      <img src="favicon.png" alt="OlympiadQuiz Logo" width="32" height="32" style="height:32px;width:auto;" loading="lazy">
      <span class="logo-text">Olympiad<span>Quiz</span></span>
    </a>
    <div class="navbar-links" id="navLinks">
      <a href="index.html" class="nav-link">Home</a>
      <div class="nav-dropdown">
        <a href="ncert-solutions.html" class="nav-link active">NCERT Solutions <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top:2px;"><path d="m6 9 6 6 6-6"/></svg></a>
        <div class="nav-dropdown-content">
          <a href="ncert-solutions.html" style="font-weight:700;color:#ea580c;">📚 All NCERT Hub (2026-27)</a>
          <a href="ncert-solutions-class-10-maths.html">Class 10 Maths</a>
          <a href="ncert-solutions-class-10-social-science.html">Class 10 Social Science</a>
          <a href="ncert-solutions-class-9-hindi.html">Class 9 Hindi</a>
          <a href="ncert-solutions-class-8-hindi.html">Class 8 Hindi</a>
          <a href="ncert-solutions-class-7-maths.html">Class 7 Maths</a>
          <a href="ncert-solutions-class-7-science.html">Class 7 Science</a>
          <a href="ncert-solutions-class-7-english.html">Class 7 English</a>
          <a href="ncert-solutions-class-7-sst.html">Class 7 Social Science</a>
          <a href="ncert-solutions-class-7-hindi.html" style="font-weight:700;color:#ea580c;background:#fff7ed;">Class 7 Hindi 🇮🇳</a>
        </div>
      </div>
      <a href="study.html" class="nav-link">Study Material</a>
      <a href="chapterwise.html" class="nav-link">Chapterwise Test</a>
      <a href="mock.html" class="nav-link">Mock Test</a>
      <a href="blog.html" class="nav-link">Guides &amp; Blog</a>
    </div>
    <div class="navbar-actions">
      <a href="login.html" class="btn-login">Login</a>
      <button class="navbar-toggle" id="mobileMenuToggle" aria-label="Toggle Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<!-- HERO BANNER -->
<header class="hero-banner">
  <h1>Class 7 Hindi — NCERT Solutions</h1>
  <p>वसंत भाग - 2 (20 पाठ), बाल महाभारत कथा (10 प्रसंग) और दूर्वा भाग - 2 (18 पाठ) के समस्त प्रश्न-उत्तर, भाषा की बात (व्याकरण), अंक विभाजन एवं योग्यता-आधारित प्रश्न (CBSE 2026-27)।</p>
  <div class="hero-badges">
    <span class="hero-badge">📖 Vasant Bhag-2 (20 Chapters)</span>
    <span class="hero-badge">🏹 Bal Mahabharat Katha (10 Episodes)</span>
    <span class="hero-badge">📜 Durva Bhag-2 (18 Chapters)</span>
    <span class="hero-badge">🎯 100% CBSE Marking Scheme</span>
    <span class="hero-badge">💡 Competency &amp; HOTS</span>
  </div>
</header>

<!-- STICKY BREADCRUMB & BOOK TABS BAR -->
<div class="breadcrumb-bar">
  <div class="breadcrumb-controls">
    <div class="breadcrumb-label">पुस्तक और पाठ चुनें:</div>
    <div class="book-tabs">
      <span class="book-tab active" id="tab-vasant" onclick="switchBookTab('vasant')">📖 वसंत भाग - 2 (20)</span>
      <span class="book-tab" id="tab-mahabharat" onclick="switchBookTab('mahabharat')">🏹 बाल महाभारत कथा (10)</span>
      <span class="book-tab" id="tab-durva" onclick="switchBookTab('durva')">📜 दूर्वा भाग - 2 (18)</span>
    </div>
  </div>
  <div class="breadcrumb-chips" id="breadcrumbChips">
    ${breadcrumbChipsHtml}
  </div>
</div>

<button class="mob-sidebar-toggle" onclick="toggleSidebar()">
  <span>📖</span>
  <span>पाठ सूची खोलें</span>
</button>
<div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>

<!-- MAIN LAYOUT -->
<div class="main-layout">
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-title">
      <span>सभी 48 पाठ एवं अध्याय</span>
    </div>
    <input type="text" class="search-box" id="chapterSearch" placeholder="पाठ खोजें (उदा. हम पंछी, दादी माँ, भीष्म)..." oninput="filterChapters(this.value)">

    <div class="sidebar-group-title">📖 वसंत भाग - 2 (पाठ 1 - 20)</div>
    <ul class="chapter-nav" id="navVasant">
      ${sidebarVasantNav}
    </ul>

    <div class="sidebar-group-title">🏹 बाल महाभारत कथा (अध्याय 1 - 10)</div>
    <ul class="chapter-nav" id="navMahabharat">
      ${sidebarMahabharatNav}
    </ul>

    <div class="sidebar-group-title">📜 दूर्वा भाग - 2 (पाठ 1 - 18)</div>
    <ul class="chapter-nav" id="navDurva">
      ${sidebarDurvaNav}
    </ul>
  </aside>

  <main class="main-content" id="mainContentArea">
    ${renderedSections}
  </main>
</div>

<!-- CLIENT SCRIPTS -->
<script>
let currentBook = 'vasant';
let currentChapter = 'v1';

function showChapter(id) {
  currentChapter = id;

  // Determine book
  let book = 'vasant';
  if (id.startsWith('m')) book = 'mahabharat';
  else if (id.startsWith('d')) book = 'durva';

  if (book !== currentBook) {
    switchBookTab(book);
  }

  // Update section visibility
  document.querySelectorAll('.chapter-section').forEach(s => s.classList.add('hidden'));
  const target = document.getElementById('ch-' + id);
  if (target) {
    target.classList.remove('hidden');
  }

  // Update sidebar active
  document.querySelectorAll('.chapter-nav li a').forEach(a => a.classList.remove('active'));
  const activeLink = document.querySelector(\`.chapter-nav li a[data-id="\${id}"]\`);
  if (activeLink) {
    activeLink.classList.add('active');
    activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Update breadcrumb chips active
  document.querySelectorAll('.bc-chip').forEach(c => c.classList.remove('active'));
  const activeChip = document.querySelector(\`.bc-chip[data-id="\${id}"]\`);
  if (activeChip) {
    activeChip.classList.add('active');
    activeChip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }

  // Update URL hash
  if (history.replaceState) {
    history.replaceState(null, null, '#' + id);
  } else {
    window.location.hash = id;
  }

  // Close mobile sidebar if open
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  }

  window.scrollTo({ top: 120, behavior: 'smooth' });
}

function switchBookTab(bookKey) {
  currentBook = bookKey;
  syncBookTab(bookKey);

  // Filter chips in breadcrumb
  document.querySelectorAll('.bc-chip').forEach(c => {
    if (c.getAttribute('data-book') === bookKey) {
      c.classList.remove('hidden');
    } else {
      c.classList.add('hidden');
    }
  });

  // Switch to first chapter of this book if current chapter is not in it
  const activeSec = document.getElementById('ch-' + currentChapter);
  if (!activeSec || activeSec.getAttribute('data-book') !== bookKey) {
    const firstInBook = document.querySelector(\`.chapter-section[data-book="\${bookKey}"]\`);
    if (firstInBook) {
      showChapter(firstInBook.getAttribute('data-id'));
    }
  }
}

function syncBookTab(bookKey) {
  document.querySelectorAll('.book-tab').forEach(t => t.classList.remove('active'));
  const tab = document.getElementById('tab-' + bookKey);
  if (tab) tab.classList.add('active');

  document.querySelectorAll('.bc-chip').forEach(c => {
    if (c.getAttribute('data-book') === bookKey) {
      c.classList.remove('hidden');
    } else {
      c.classList.add('hidden');
    }
  });
}

function toggleQ(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('open');
}

function toggleCBQ(btn) {
  const ans = btn.nextElementSibling;
  if (!ans) return;
  const isOpen = ans.style.display === 'block';
  ans.style.display = isOpen ? 'none' : 'block';
  btn.querySelector('span').textContent = isOpen 
    ? 'आदर्श उत्तर एवं अंक विभाजन देखें ▼' 
    : 'उत्तर छिपाएँ ▲';
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('show');
}

function filterChapters(q) {
  const query = q.toLowerCase();
  document.querySelectorAll('.chapter-nav li').forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(query) ? '' : 'none';
  });
}

// Progress bar
window.addEventListener('scroll', () => {
  const pb = document.getElementById('progressBar');
  const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollTotal > 0 && pb) {
    pb.style.width = ((window.scrollY / scrollTotal) * 100) + '%';
  }
});

// Mobile navbar toggle
const navToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
}

// On initial load: Check hash or default to v1
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById('ch-' + hash)) {
    showChapter(hash);
  } else {
    switchBookTab('vasant');
    showChapter('v1');
  }
});
</script>
</body>
</html>`;

fs.writeFileSync(path.join(rootDir, 'ncert-solutions-class-7-hindi.html'), hubHtml, 'utf8');
console.log('Successfully generated ncert-solutions-class-7-hindi.html!');
