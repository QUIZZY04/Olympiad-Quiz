const fs = require('fs');
const path = require('path');

const history = require('./data-c7sst-history.js');
const geography = require('./data-c7sst-geography.js');
const civics = require('./data-c7sst-civics.js');

const allUnits = [...history, ...geography, ...civics];
const rootDir = path.join(__dirname, '..');
const chaptersDir = path.join(rootDir, 'chapters-c7sst');

if (!fs.existsSync(chaptersDir)) {
  fs.mkdirSync(chaptersDir, { recursive: true });
}

// Helper: render single question card
function renderQuestionCard(q, prefix = '') {
  const schemeHtml = q.scheme && q.scheme.length > 0 ? `
    <div class="marking-scheme">
      <div class="marking-title">CBSE Step-by-Step Marking Scheme</div>
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
        <span class="q-marks">${q.marks || '2 Marks'}</span>
        <div class="q-toggle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>
      <div class="q-answer">
        <div class="answer-box">
          <div class="answer-label">Detailed Solution</div>
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
        <span>💡 Competency-Based Case Study &amp; HOTS (CBSE 2026-27 Pattern)</span>
        <span class="cbq-badge">Applied Social Science</span>
      </div>
      <div class="cbq-body">
        ${cbqList.map((c, i) => `
          <div class="cbq-card">
            <div class="cbq-type" style="color:#0d9488; font-weight:700;">${c.type || 'HOTS / Case Study'}</div>
            <div class="cbq-question">${c.q}</div>
            <button class="cbq-show-btn" onclick="toggleCBQ(this)">
              <span>Reveal CBSE Model Answer &amp; Breakdown ▼</span>
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
  const badgeText = unit.book === 'history' ? `H${unit.num}` : (unit.book === 'geography' ? `G${unit.num}` : `C${unit.num}`);
  const bookIcon = unit.book === 'history' ? '📜' : (unit.book === 'geography' ? '🌍' : '⚖️');
  const bookLabel = `${bookIcon} ${unit.bookName} (Chapter ${unit.num})`;

  const summaryHtml = unit.summary ? `
    <div class="concept-card">
      <div class="concept-header">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        <span>Chapter Summary &amp; Key Historical/Geographical Concepts</span>
      </div>
      <div style="font-size:0.9rem; line-height:1.75; color:#334155;">
        ${unit.summary}
      </div>
      ${unit.theme ? `<div style="margin-top:12px; font-size:0.85rem; color:#0f766e; font-weight:600;">🎯 <em>Central Theme:</em> ${unit.theme}</div>` : ''}
    </div>` : '';

  let intextCards = '';
  if (unit.intext && unit.intext.length > 0) {
    intextCards = `
      <div class="ex-div">📖 Intext Questions &amp; Activities</div>
      ${unit.intext.map(q => renderQuestionCard(q)).join('')}`;
  }

  let exerciseCards = '';
  if (unit.exercises && unit.exercises.length > 0) {
    exerciseCards = `
      <div class="ex-div">✍️ Chapter-End Exercises (Let's Recall, Discuss &amp; Do)</div>
      ${unit.exercises.map(q => renderQuestionCard(q)).join('')}`;
  }

  const cbqHtml = renderCBQSection(unit.cbq);

  const prevBtn = prevUnit 
    ? `<button class="ch-nav-btn" onclick="showChapter('${prevUnit.id}')">← ${prevUnit.title}</button>` 
    : `<button class="ch-nav-btn" disabled>← Previous</button>`;
  
  const nextBtn = nextUnit 
    ? `<button class="ch-nav-btn next" onclick="showChapter('${nextUnit.id}')">${nextUnit.title} →</button>` 
    : `<button class="ch-nav-btn" disabled>Next →</button>`;

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

      ${summaryHtml}
      ${intextCards}
      ${exerciseCards}
      ${cbqHtml}
      ${navButtons}
    </section>`;
}

// 1. Generate individual HTML files in chapters-c7sst/
allUnits.forEach((unit, idx) => {
  const prevUnit = idx > 0 ? allUnits[idx - 1] : null;
  const nextUnit = idx < allUnits.length - 1 ? allUnits[idx + 1] : null;
  const content = renderUnitSection(unit, true, prevUnit, nextUnit);
  fs.writeFileSync(path.join(chaptersDir, `${unit.id}.html`), content, 'utf8');
});
console.log(`Generated ${allUnits.length} individual chapter HTML files in chapters-c7sst/`);

// 2. Generate chapters-c7sst/chapters-data.js
const chaptersDataJs = `window.CHAPTER_DATA = ${JSON.stringify({
  history: history.map(h => ({ id: h.id, book: h.book, num: h.num, title: h.title, bookName: h.bookName })),
  geography: geography.map(g => ({ id: g.id, book: g.book, num: g.num, title: g.title, bookName: g.bookName })),
  civics: civics.map(c => ({ id: c.id, book: c.book, num: c.num, title: c.title, bookName: c.bookName }))
}, null, 2)};`;
fs.writeFileSync(path.join(chaptersDir, 'chapters-data.js'), chaptersDataJs, 'utf8');
console.log('Generated chapters-c7sst/chapters-data.js');

// 3. Assemble pre-rendered sections for main hub
const allSectionsHtml = allUnits.map((unit, idx) => {
  const prevUnit = idx > 0 ? allUnits[idx - 1] : null;
  const nextUnit = idx < allUnits.length - 1 ? allUnits[idx + 1] : null;
  return renderUnitSection(unit, idx === 0, prevUnit, nextUnit);
}).join('\n\n');

// 4. Build breadcrumb chips by book
const breadcrumbChipsHistory = history.map((h, i) => 
  `<span class="bc-chip${i === 0 ? ' active' : ''}" onclick="showChapter('${h.id}')" data-id="${h.id}" data-book="history"><span class="bc-n">${h.num}</span>${h.title}</span>`
).join('\n        ');

const breadcrumbChipsGeography = geography.map(g => 
  `<span class="bc-chip" onclick="showChapter('${g.id}')" data-id="${g.id}" data-book="geography"><span class="bc-n">G${g.num}</span>${g.title}</span>`
).join('\n        ');

const breadcrumbChipsCivics = civics.map(c => 
  `<span class="bc-chip" onclick="showChapter('${c.id}')" data-id="${c.id}" data-book="civics"><span class="bc-n">C${c.num}</span>${c.title}</span>`
).join('\n        ');

// 5. Build sidebar nav items
const sidebarNavHistory = history.map((h, i) => 
  `<li><a onclick="showChapter('${h.id}')" data-id="${h.id}" class="${i === 0 ? 'active' : ''}"><span class="ch-num">${h.num}</span><span>${h.title}</span></a></li>`
).join('\n          ');

const sidebarNavGeography = geography.map(g => 
  `<li><a onclick="showChapter('${g.id}')" data-id="${g.id}"><span class="ch-num">G${g.num}</span><span>${g.title}</span></a></li>`
).join('\n          ');

const sidebarNavCivics = civics.map(c => 
  `<li><a onclick="showChapter('${c.id}')" data-id="${c.id}"><span class="ch-num">C${c.num}</span><span>${c.title}</span></a></li>`
).join('\n          ');

// 6. Complete Single-Page Hub HTML
const hubHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions Class 7 Social Science (SST) — History, Geography &amp; Civics | CBSE 2026-27</title>
  <meta name="description" content="Free 100% complete NCERT Solutions for Class 7 Social Science (SST) for 2026-27. All 23 chapters across History (Our Pasts - II), Geography (Our Environment), and Civics (Social and Political Life - II) with CBSE marking schemes and CBQs.">
  <meta name="keywords" content="NCERT Solutions Class 7 Social Science, Class 7 SST NCERT Solutions, Class 7 History Our Pasts II, Class 7 Geography Our Environment, Class 7 Civics Social and Political Life II, CBSE Class 7 Social Science 2026-27, Delhi Sultans, Mughals, Inside Our Earth, Air, Water, On Equality, Role of Government in Health">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-7-sst.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="NCERT Solutions Class 7 Social Science (SST) | All 23 Chapters | CBSE 2026-27">
  <meta property="og:description" content="Complete 100% question coverage NCERT solutions for Class 7 Social Science: History, Geography, and Civics with CBSE step-by-step marking schemes and Competency-Based Questions.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-7-sst.html">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Schema.org Breadcrumb -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/"},
      {"@type": "ListItem", "position": 2, "name": "NCERT Solutions Hub", "item": "https://olympiadquiz.org/ncert-solutions.html"},
      {"@type": "ListItem", "position": 3, "name": "Class 7 Social Science", "item": "https://olympiadquiz.org/ncert-solutions-class-7-sst.html"}
    ]
  }
  </script>

  <!-- Schema.org FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many chapters are there in Class 7 Social Science NCERT for CBSE 2026-27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Class 7 Social Science has 23 chapters across three books: 8 chapters in History (Our Pasts - II), 7 chapters in Geography (Our Environment), and 8 chapters in Civics (Social and Political Life - II)."
        }
      },
      {
        "@type": "Question",
        "name": "Are these Class 7 SST solutions updated for the latest rationalized NCERT curriculum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all solutions strictly follow the rationalized NCERT syllabus for 2026-27 with step-by-step CBSE marking schemes (1M, 2M, 3M, 5M), intext questions, 'Give Reasons', map points, and Competency-Based / HOTS questions."
        }
      }
    ]
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    :root{
      --brand:#0d9488;
      --brand-hover:#0f766e;
      --brand-light:#f0fdfa;
      --brand-text:#115e59;
      --accent:#14b8a6;
      --navy:#0f172a;
      --slate:#334155;
      --muted:#64748b;
      --light-bg:#f8fafc;
      --border:#e2e8f0;
      --shadow:0 4px 6px -1px rgba(0,0,0,0.05);
      --shadow-hover:0 10px 15px -3px rgba(0,0,0,0.1);
    }
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'Inter',sans-serif;background:var(--light-bg);color:var(--slate);line-height:1.6;}
    .top-progress{position:fixed;top:0;left:0;height:3.5px;background:linear-gradient(90deg, #0d9488, #14b8a6, #38bdf8);z-index:1000;transition:width .1s;}
    
    /* Navbar */
    .navbar{background:#0f172a;border-bottom:1px solid rgba(255,255,255,0.08);position:sticky;top:0;z-index:900;}
    .navbar-inner{max-width:1380px;margin:0 auto;padding:0 24px;height:60px;display:flex;align-items:center;justify-content:space-between;gap:16px;}
    .navbar-logo{display:flex;align-items:center;gap:10px;text-decoration:none;}
    .logo-text{font-size:1.15rem;font-weight:800;color:white;}
    .logo-text span{color:#2dd4bf;}
    .navbar-links{display:flex;align-items:center;gap:8px;}
    .nav-link{color:#94a3b8;font-size:0.85rem;font-weight:600;padding:6px 12px;border-radius:8px;text-decoration:none;transition:0.2s;display:flex;align-items:center;gap:4px;}
    .nav-link:hover{color:white;background:rgba(255,255,255,0.06);}
    .nav-dropdown{position:relative;}
    .nav-dropdown:hover .nav-dropdown-content{display:block !important;}
    .nav-dropdown-content{display:none;position:absolute;top:100%;left:0;background:white;border:1px solid #e2e8f0;border-radius:10px;min-width:240px;box-shadow:0 8px 24px rgba(0,0,0,0.12);z-index:1000;padding:6px;}
    .nav-dropdown-content a{display:block;padding:8px 14px;color:#334155;text-decoration:none;font-size:0.85rem;border-radius:6px;transition:0.2s;}
    .nav-dropdown-content a:hover{background:#f1f5f9;color:#0f172a !important;}
    .navbar-actions{display:flex;align-items:center;gap:10px;}
    .btn-login{background:#0d9488;color:white;font-size:0.82rem;font-weight:700;padding:7px 18px;border-radius:8px;text-decoration:none;transition:0.2s;}
    .btn-login:hover{background:#0f766e;}
    .navbar-toggle{display:none;background:none;border:none;cursor:pointer;flex-direction:column;gap:5px;padding:6px;}
    .navbar-toggle span{display:block;width:22px;height:2px;background:white;border-radius:2px;}
    
    /* Hero Banner */
    .hero-banner{background:linear-gradient(135deg,#134e4a 0%,#0f766e 50%,#0d9488 100%);color:white;padding:36px 24px;text-align:center;border-bottom:3px solid #2dd4bf;}
    .hero-banner h1{font-size:1.85rem;font-weight:800;margin-bottom:8px;}
    .hero-banner p{color:#ccfbf1;font-size:.95rem;max-width:780px;margin:0 auto 16px;}
    .hero-badges{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;}
    .hero-badge{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);padding:6px 14px;border-radius:20px;font-size:.8rem;font-weight:600;color:#f0fdfa;}
    
    /* Breadcrumb Bar & Book Tabs */
    .breadcrumb-bar{background:white;border-bottom:1px solid var(--border);padding:14px 24px;position:sticky;top:60px;z-index:800;box-shadow:0 2px 8px rgba(0,0,0,.04);}
    .breadcrumb-inner{max-width:1380px;margin:0 auto;}
    .breadcrumb-label{font-size:.72rem;font-weight:700;text-transform:uppercase;color:var(--muted);letter-spacing:.06em;margin-bottom:8px;}
    
    .book-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;}
    .book-tab{padding:6px 16px;border-radius:20px;font-size:0.8rem;font-weight:700;cursor:pointer;border:2px solid var(--border);background:#f8fafc;color:var(--slate);transition:all 0.18s;user-select:none;}
    .book-tab:hover{border-color:var(--brand);color:var(--brand-text);}
    .book-tab.active{background:var(--brand);color:white;border-color:var(--brand);box-shadow:0 2px 8px rgba(13,148,136,0.3);}
    
    .breadcrumb-chips{display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch;}
    .breadcrumb-chips::-webkit-scrollbar{height:4px;}
    .breadcrumb-chips::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:4px;}
    .bc-chip{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:20px;font-size:.78rem;font-weight:600;cursor:pointer;border:1.5px solid var(--border);background:#f8fafc;color:var(--slate);transition:all .18s;user-select:none;white-space:nowrap;flex-shrink:0;}
    .bc-chip:hover{border-color:var(--brand);color:var(--brand-text);background:var(--brand-light);}
    .bc-chip.active{background:var(--brand);color:white;border-color:var(--brand);box-shadow:0 3px 10px rgba(13,148,136,.35);}
    .bc-chip .bc-n{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 4px;background:rgba(0,0,0,.12);border-radius:10px;font-size:.68rem;font-weight:800;}
    .bc-chip.active .bc-n{background:rgba(255,255,255,.25);}
    .bc-chip.hidden{display:none !important;}

    /* Main Layout */
    .main-layout{display:flex;max-width:1380px;margin:0 auto;}
    .sidebar{width:320px;background:white;border-right:1px solid var(--border);padding:20px 16px;position:sticky;top:135px;height:calc(100vh - 135px);overflow-y:auto;flex-shrink:0;}
    .sidebar-title{font-size:.85rem;font-weight:700;text-transform:uppercase;color:var(--muted);letter-spacing:.05em;margin-bottom:12px;}
    .search-box{width:100%;padding:10px 14px;border:1px solid var(--border);border-radius:8px;font-size:.85rem;margin-bottom:14px;font-family:inherit;}
    .search-box:focus{outline:none;border-color:var(--brand);}
    .sec-group-title{font-size:.75rem;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--brand);margin:14px 0 6px 8px;display:flex;align-items:center;gap:6px;}
    .chapter-nav{list-style:none;}
    .chapter-nav li{margin-bottom:4px;}
    .chapter-nav li a{display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px;color:var(--slate);text-decoration:none;font-size:.84rem;font-weight:500;transition:all .15s;cursor:pointer;}
    .chapter-nav li a:hover{background:var(--brand-light);color:var(--brand-text);}
    .chapter-nav li a.active{background:var(--brand);color:white;font-weight:600;}
    .ch-num{min-width:24px;height:22px;padding:0 5px;background:rgba(0,0,0,.06);border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:800;flex-shrink:0;}
    .chapter-nav li a.active .ch-num{background:rgba(255,255,255,.25);color:white;}
    .main-content{flex:1;padding:0 36px 36px;min-width:0;max-width:1050px;}

    /* Chapter Section */
    .chapter-section{margin-bottom:48px;scroll-margin-top:135px;padding-top:28px;}
    .chapter-section.hidden{display:none !important;}

    .chapter-header{display:flex;align-items:center;gap:16px;background:linear-gradient(135deg,#134e4a 0%,#0f766e 100%);color:white;padding:24px 28px;border-radius:16px;margin-bottom:24px;box-shadow:var(--shadow-hover);border-left:5px solid #2dd4bf;}
    .ch-badge{width:46px;height:46px;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.25);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.15rem;font-weight:900;flex-shrink:0;}
    .chapter-header-info h2{font-size:1.35rem;font-weight:800;margin-bottom:4px;letter-spacing:-0.01em;}
    .chapter-header-info p{font-size:.84rem;color:#ccfbf1;line-height:1.5;}

    /* Concept & Summary Card */
    .concept-card{background:linear-gradient(135deg,#f8fafc 0%,#f0fdfa 100%);border:1px solid #99f6e4;border-radius:12px;padding:18px 22px;margin-bottom:24px;}
    .concept-header{font-size:0.82rem;font-weight:800;color:var(--brand-text);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;display:flex;align-items:center;gap:6px;}

    /* Question Cards */
    .q-card{background:white;border:1px solid var(--border);border-radius:12px;margin-bottom:18px;box-shadow:var(--shadow);transition:all .2s;overflow:hidden;}
    .q-card:hover{border-color:#5eead4;box-shadow:var(--shadow-hover);}
    .q-head{padding:16px 20px;display:flex;align-items:flex-start;gap:14px;cursor:pointer;user-select:none;}
    .q-num{background:var(--brand-light);color:var(--brand-text);font-weight:700;font-size:.78rem;padding:4px 10px;border-radius:6px;flex-shrink:0;margin-top:2px;white-space:nowrap;}
    .q-text{flex:1;font-weight:600;color:var(--navy);font-size:.95rem;line-height:1.55;}
    .q-marks{background:#f1f5f9;color:var(--slate);font-size:.725rem;font-weight:700;padding:4px 10px;border-radius:12px;flex-shrink:0;white-space:nowrap;}
    .q-toggle{color:var(--muted);transition:transform .2s;flex-shrink:0;margin-top:4px;}
    .q-toggle svg{width:20px;height:20px;}
    .q-card.open .q-toggle{transform:rotate(180deg);color:var(--brand);}
    .q-answer{display:none;padding:0 16px 18px;border-top:2px dashed rgba(13,148,136,.18);}
    .q-card.open .q-answer{display:block;}
    .answer-box{border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:18px;margin-top:14px;background:rgba(255,255,255,.95);}
    .answer-label{font-size:.75rem;font-weight:700;text-transform:uppercase;color:var(--brand);letter-spacing:.04em;margin-bottom:10px;}
    .answer-text{font-size:.9rem;color:#1e293b;line-height:1.75;}
    .answer-text p{margin-bottom:10px;}
    .answer-text p:last-child{margin-bottom:0;}
    .answer-text ul,.answer-text ol{margin-left:22px;margin-bottom:10px;}
    .answer-text li{margin-bottom:6px;}
    .step{display:block;background:#f8fafc;border-left:3px solid var(--brand);padding:8px 12px;margin:6px 0;border-radius:0 6px 6px 0;font-size:.88rem;}
    
    .marking-scheme{margin-top:14px;background:#f8fafc;border:1px solid rgba(0,0,0,.07);border-radius:8px;padding:12px 14px;font-size:.8rem;}
    .marking-title{font-weight:700;color:var(--navy);margin-bottom:6px;}
    .marking-row{display:flex;justify-content:space-between;border-bottom:1px solid #edf2f7;padding:4px 0;}
    .marking-row:last-child{border-bottom:none;}
    .marking-key{color:var(--slate);}
    .marking-marks{font-weight:700;color:var(--brand-text);}

    .pure-table{width:100%;border-collapse:collapse;margin:12px 0;font-size:.88rem;}
    .pure-table th,.pure-table td{border:1px solid #cbd5e1;padding:8px 12px;text-align:left;}
    .pure-table th{background:#f1f5f9;color:var(--navy);font-weight:700;}

    /* CBQ Section */
    .cbq-section{margin-top:36px;border:2px solid var(--brand);border-radius:12px;overflow:hidden;box-shadow:0 4px 15px rgba(13,148,136,.12);}
    .cbq-header{background:linear-gradient(90deg,#0f766e,#0d9488);color:white;padding:16px 20px;font-weight:800;font-size:1.02rem;display:flex;align-items:center;justify-content:space-between;}
    .cbq-badge{font-size:.75rem;background:rgba(255,255,255,.2);padding:4px 10px;border-radius:12px;}
    .cbq-body{padding:20px;background:linear-gradient(to right,#f0fdfa,#fff);}
    .cbq-card{border:1px solid #99f6e4;background:white;padding:16px;border-radius:8px;margin-bottom:16px;}
    .cbq-type{font-size:.75rem;font-weight:700;text-transform:uppercase;margin-bottom:8px;}
    .cbq-question{font-size:.92rem;color:#334155;margin-bottom:12px;line-height:1.6;}
    .cbq-show-btn{text-align:left;padding:10px 14px;background:#f8fafc;border:1px solid #cbd5e1;border-radius:6px;cursor:pointer;font-size:.88rem;font-family:inherit;width:100%;transition:0.2s;}
    .cbq-show-btn:hover{background:#f0fdfa;border-color:var(--brand);color:var(--brand-text);}
    .cbq-answer{display:none;margin-top:12px;padding:12px;background:#f0fdfa;border:1px solid #99f6e4;border-radius:6px;font-size:.88rem;color:#115e59;line-height:1.7;}

    .ex-div{font-size:.82rem;font-weight:700;text-transform:uppercase;color:var(--brand-text);background:var(--brand-light);border:1px solid #99f6e4;border-radius:8px;padding:8px 16px;margin:24px 0 16px;display:inline-block;letter-spacing:.04em;}
    
    /* Nav Buttons */
    .ch-nav-btns{display:flex;justify-content:space-between;margin-top:32px;padding-top:20px;border-top:1px solid var(--border);}
    .ch-nav-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:10px;font-weight:700;font-size:.88rem;cursor:pointer;border:1.5px solid var(--border);background:white;color:var(--slate);transition:all .2s;font-family:inherit;}
    .ch-nav-btn:hover:not(:disabled){background:var(--brand);color:white;border-color:var(--brand);}
    .ch-nav-btn:disabled{opacity:.35;cursor:not-allowed;}
    .ch-nav-btn.next{background:var(--brand);color:white;border-color:var(--brand);}

    /* Mobile Responsive */
    .mob-toggle{display:none;position:fixed;bottom:20px;right:20px;background:var(--brand);color:white;border:none;padding:12px 20px;border-radius:30px;font-weight:700;font-size:.9rem;box-shadow:0 4px 14px rgba(13,148,136,.4);z-index:999;cursor:pointer;}
    .sidebar-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:950;}

    @media(max-width:960px){
      .main-layout{flex-direction:column;}
      .sidebar{position:fixed;left:-330px;top:0;height:100vh;z-index:960;transition:left .3s;}
      .sidebar.open{left:0;}
      .sidebar-overlay.show{display:block;}
      .mob-toggle{display:block;}
      .main-content{padding:0 16px 28px;}
      .breadcrumb-bar{padding:12px 16px;top:57px;}
    }
  </style>
</head>
<body>
<div class="top-progress" id="progressBar"></div>

<!-- Top Navbar -->
<nav class="navbar">
  <div class="navbar-inner">
    <a href="index.html" class="navbar-logo">
      <img src="favicon.png" alt="OlympiadQuiz Logo" width="32" height="32" style="height:32px;width:auto;" loading="lazy">
      <span class="logo-text">Olympiad<span>Quiz</span></span>
    </a>
    <div class="navbar-links" id="navLinks">
      <a href="index.html" class="nav-link">Home</a>
      <div class="nav-dropdown">
        <a href="ncert-solutions.html" class="nav-link" style="color:white;">NCERT Solutions <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top:2px;"><path d="m6 9 6 6 6-6"/></svg></a>
        <div class="nav-dropdown-content">
          <a href="ncert-solutions.html" style="font-weight:700;color:#c2410c;">📚 All NCERT Hub (2026-27)</a>
          <a href="ncert-solutions-class-10-maths.html">Class 10 Mathematics</a>
          <a href="ncert-solutions-class-10-social-science.html">Class 10 Social Science</a>
          <a href="ncert-solutions-class-9-maths.html">Class 9 Mathematics</a>
          <a href="ncert-solutions-class-9-science.html">Class 9 Science</a>
          <a href="ncert-solutions-class-8-maths.html">Class 8 Mathematics</a>
          <a href="ncert-solutions-class-8-sst.html">Class 8 Social Science</a>
          <a href="ncert-solutions-class-7-maths.html">Class 7 Mathematics</a>
          <a href="ncert-solutions-class-7-science.html">Class 7 Science</a>
          <a href="ncert-solutions-class-7-english.html">Class 7 English</a>
          <a href="ncert-solutions-class-7-sst.html" style="font-weight:700;color:#0d9488;background:#f0fdfa;">Class 7 Social Science 🌍 (Active)</a>
        </div>
      </div>
      <a href="study.html" class="nav-link">Study Material</a>
      <a href="chapterwise.html" class="nav-link">Chapterwise Test</a>
      <a href="mock.html" class="nav-link">Mock Test</a>
      <a href="blog.html" class="nav-link">Guides &amp; Blog</a>
    </div>
    <div class="navbar-actions">
      <a href="login.html" class="btn-login">Login</a>
      <button class="navbar-toggle" id="mobileMenuToggle" aria-label="Toggle Navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<!-- Hero Banner -->
<header class="hero-banner">
  <h1>NCERT Solutions Class 7 Social Science (SST) 2026-27</h1>
  <p>Complete 100% Coverage for History (Our Pasts - II), Geography (Our Environment) and Civics (Social &amp; Political Life - II) with Step-by-Step CBSE Marking Schemes, Give Reasons, and Competency-Based Case Studies.</p>
  <div class="hero-badges">
    <div class="hero-badge">📜 History: 8 Chapters</div>
    <div class="hero-badge">🌍 Geography: 7 Chapters</div>
    <div class="hero-badge">⚖️ Civics: 8 Chapters</div>
    <div class="hero-badge">✍️ 100% Intext &amp; Chapter-End Exercises</div>
    <div class="hero-badge">📐 CBSE Marking Scheme 2026-27</div>
    <div class="hero-badge">💡 Competency-Based / HOTS Included</div>
  </div>
</header>

<!-- Sticky Breadcrumb Bar with Book Tabs -->
<div class="breadcrumb-bar">
  <div class="breadcrumb-inner">
    <div class="breadcrumb-label">Select Book &amp; Chapter:</div>
    <div class="book-tabs">
      <div class="book-tab active" onclick="switchBookTab('history')" id="tab-history">📜 History (Our Pasts – II)</div>
      <div class="book-tab" onclick="switchBookTab('geography')" id="tab-geography">🌍 Geography (Our Environment)</div>
      <div class="book-tab" onclick="switchBookTab('civics')" id="tab-civics">⚖️ Civics (Social &amp; Political Life – II)</div>
    </div>
    <div class="breadcrumb-chips" id="chipsContainer">
      ${breadcrumbChipsHistory}
      ${breadcrumbChipsGeography}
      ${breadcrumbChipsCivics}
    </div>
  </div>
</div>

<!-- Main Layout -->
<div class="main-layout">
  <!-- Sidebar -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-title">
      <span>Chapter Index</span>
      <span style="font-size:0.75rem;color:var(--brand);font-weight:700;">23 Chapters</span>
    </div>
    <input type="text" class="search-box" id="chapterSearch" placeholder="Search history, geography, civics..." oninput="filterChapters(this.value)">
    
    <div class="sec-group-title">📜 History: Our Pasts – II</div>
    <ul class="chapter-nav" id="sidebarHistory">
      ${sidebarNavHistory}
    </ul>

    <div class="sec-group-title">🌍 Geography: Our Environment</div>
    <ul class="chapter-nav" id="sidebarGeography">
      ${sidebarNavGeography}
    </ul>

    <div class="sec-group-title">⚖️ Civics: Social &amp; Political Life – II</div>
    <ul class="chapter-nav" id="sidebarCivics">
      ${sidebarNavCivics}
    </ul>
  </aside>

  <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>
  <button class="mob-toggle" onclick="toggleSidebar()">☰ All Chapters</button>

  <!-- Main Content Area with Pre-Rendered Sections -->
  <main class="main-content" id="chapterContentArea">
    ${allSectionsHtml}
  </main>
</div>

<!-- Scripts -->
<script>
let currentBook = 'history';
let currentChapter = 'h1';

function showChapter(id) {
  currentChapter = id;
  
  // Hide all sections, reveal selected
  document.querySelectorAll('.chapter-section').forEach(s => s.classList.add('hidden'));
  const sec = document.getElementById('ch-' + id);
  if (sec) {
    sec.classList.remove('hidden');
    currentBook = sec.getAttribute('data-book');
    syncBookTab(currentBook);
  }

  // Update sidebar active link
  document.querySelectorAll('.chapter-nav li a').forEach(a => a.classList.remove('active'));
  const activeLink = document.querySelector(\`.chapter-nav li a[data-id="\${id}"]\`);
  if (activeLink) activeLink.classList.add('active');

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

  // Also filter chips
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
    ? 'Reveal CBSE Model Answer & Breakdown ▼' 
    : 'Hide CBSE Model Answer ▲';
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

// On initial load: Check hash or default to h1
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById('ch-' + hash)) {
    showChapter(hash);
  } else {
    switchBookTab('history');
    showChapter('h1');
  }
});
</script>
</body>
</html>`;

fs.writeFileSync(path.join(rootDir, 'ncert-solutions-class-7-sst.html'), hubHtml, 'utf8');
console.log('Successfully generated ncert-solutions-class-7-sst.html!');

// 7. Generate alias / redirect: ncert-solutions-class-7-social-science.html
const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=ncert-solutions-class-7-sst.html">
  <title>NCERT Solutions Class 7 Social Science</title>
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-7-sst.html">
</head>
<body>
  <p>Redirecting to <a href="ncert-solutions-class-7-sst.html">NCERT Solutions Class 7 Social Science (SST)</a>...</p>
</body>
</html>
`;
fs.writeFileSync(path.join(rootDir, 'ncert-solutions-class-7-social-science.html'), redirectHtml, 'utf8');
console.log('Successfully generated ncert-solutions-class-7-social-science.html (redirect)!');
