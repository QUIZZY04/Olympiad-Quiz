const fs = require('fs');
const path = require('path');

const prose = require('./data-c7e-prose.js');
const poetry = require('./data-c7e-poetry.js');
const alien = require('./data-c7e-alien.js');

const allUnits = [...prose, ...poetry, ...alien];
const rootDir = path.join(__dirname, '..');
const chaptersDir = path.join(rootDir, 'chapters-c7e');

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
        <span>💡 Competency-Based & HOTS Questions (CBSE 2026-27 Pattern)</span>
        <span class="cbq-badge">Analytical Thinking</span>
      </div>
      <div class="cbq-body">
        ${cbqList.map((c, i) => `
          <div class="cbq-card">
            <div class="cbq-type" style="color:#0284c7; font-weight:700;">${c.type || 'HOTS / Case Study'}</div>
            <div class="cbq-question">${c.q}</div>
            <button class="cbq-show-btn" onclick="toggleCBQ(this)">
              <span>Reveal CBSE Model Answer & Breakdown ▼</span>
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
  const isPoem = unit.book === 'poems';
  const badgeText = isPoem ? `P${unit.num}` : (unit.book === 'alien' ? `AH${unit.num}` : `H${unit.num}`);
  const bookLabel = isPoem ? 'Honeycomb (Poem)' : (unit.book === 'alien' ? 'An Alien Hand' : 'Honeycomb (Prose)');
  const authorLine = unit.poet ? `Poet: <strong>${unit.poet}</strong>` : (unit.author ? `Author: <strong>${unit.author}</strong>` : '');

  let poemHtml = '';
  if (isPoem && unit.stanzas) {
    const devicesHtml = unit.poeticDevices ? `
      <div class="poetic-devices-box" style="margin-top:14px; padding-top:12px; border-top:1px dashed #cbd5e1;">
        <strong style="color:#075985; font-size:0.85rem; text-transform:uppercase; letter-spacing:0.04em;">Key Poetic Devices:</strong>
        <ul style="margin:8px 0 0 18px; font-size:0.86rem; color:#334155; line-height:1.6;">
          ${unit.poeticDevices.map(d => `<li><strong>${d.name}:</strong> ${d.detail}</li>`).join('')}
        </ul>
      </div>` : '';

    poemHtml = `
      <div class="poem-box">
        <h3>📜 Complete Poem Text & Stanzas</h3>
        <div class="stanza">${unit.stanzas}</div>
        ${devicesHtml}
      </div>`;
  }

  const summaryHtml = unit.summary ? `
    <div class="concept-card">
      <div class="concept-header">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        <span>Chapter Summary & Core Theme</span>
      </div>
      <div style="font-size:0.9rem; line-height:1.7; color:#334155;">
        ${unit.summary}
      </div>
      ${unit.theme ? `<div style="margin-top:10px; font-size:0.85rem; color:#0369a1; font-weight:600;">🎯 <em>Central Theme:</em> ${unit.theme}</div>` : ''}
    </div>` : '';

  let intextCards = '';
  if (unit.intext && unit.intext.length > 0) {
    intextCards = `
      <div class="ex-div">📖 Intext Comprehension Checks</div>
      ${unit.intext.map(q => renderQuestionCard(q)).join('')}`;
  }

  let exerciseCards = '';
  if (unit.exercises && unit.exercises.length > 0) {
    const exTitle = isPoem ? 'Working with the Poem' : (unit.book === 'alien' ? 'Chapter-End Exercises' : 'Working with the Text');
    exerciseCards = `
      <div class="ex-div">✍️ ${exTitle}</div>
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
          <p>${bookLabel} • ${authorLine} ${unit.subtitle ? `— ${unit.subtitle}` : ''}</p>
        </div>
      </div>

      ${poemHtml}
      ${summaryHtml}
      ${intextCards}
      ${exerciseCards}
      ${cbqHtml}
      ${navButtons}
    </section>`;
}

// 1. Generate individual HTML files in chapters-c7e/
allUnits.forEach((unit, idx) => {
  const prevUnit = idx > 0 ? allUnits[idx - 1] : null;
  const nextUnit = idx < allUnits.length - 1 ? allUnits[idx + 1] : null;
  const content = renderUnitSection(unit, true, prevUnit, nextUnit);
  fs.writeFileSync(path.join(chaptersDir, `${unit.id}.html`), content, 'utf8');
});
console.log(`Generated ${allUnits.length} individual chapter HTML files in chapters-c7e/`);

// 2. Generate chapters-c7e/chapters-data.js
const chaptersDataJs = `window.CHAPTER_DATA = ${JSON.stringify({
  prose: prose.map(p => ({ id: p.id, book: p.book, num: p.num, title: p.title, author: p.author })),
  poems: poetry.map(p => ({ id: p.id, book: p.book, num: p.num, title: p.title, poet: p.poet })),
  alien: alien.map(a => ({ id: a.id, book: a.book, num: a.num, title: a.title, author: a.author }))
}, null, 2)};`;
fs.writeFileSync(path.join(chaptersDir, 'chapters-data.js'), chaptersDataJs, 'utf8');
console.log('Generated chapters-c7e/chapters-data.js');

// 3. Assemble pre-rendered sections for main hub
const allSectionsHtml = allUnits.map((unit, idx) => {
  const prevUnit = idx > 0 ? allUnits[idx - 1] : null;
  const nextUnit = idx < allUnits.length - 1 ? allUnits[idx + 1] : null;
  return renderUnitSection(unit, idx === 0, prevUnit, nextUnit);
}).join('\n\n');

// 4. Build breadcrumb chips by book
const breadcrumbChipsProse = prose.map((p, i) => 
  `<span class="bc-chip${i === 0 ? ' active' : ''}" onclick="showChapter('${p.id}')" data-id="${p.id}" data-book="prose"><span class="bc-n">${p.num}</span>${p.title}</span>`
).join('\n        ');

const breadcrumbChipsPoems = poetry.map(p => 
  `<span class="bc-chip" onclick="showChapter('${p.id}')" data-id="${p.id}" data-book="poems"><span class="bc-n">P${p.num}</span>${p.title}</span>`
).join('\n        ');

const breadcrumbChipsAlien = alien.map(a => 
  `<span class="bc-chip" onclick="showChapter('${a.id}')" data-id="${a.id}" data-book="alien"><span class="bc-n">${a.num}</span>${a.title}</span>`
).join('\n        ');

// 5. Build sidebar nav items
const sidebarNavProse = prose.map((p, i) => 
  `<li><a onclick="showChapter('${p.id}')" data-id="${p.id}" class="${i === 0 ? 'active' : ''}"><span class="ch-num">${p.num}</span><span>${p.title}</span></a></li>`
).join('\n          ');

const sidebarNavPoems = poetry.map(p => 
  `<li><a onclick="showChapter('${p.id}')" data-id="${p.id}"><span class="ch-num">P${p.num}</span><span>${p.title}</span></a></li>`
).join('\n          ');

const sidebarNavAlien = alien.map(a => 
  `<li><a onclick="showChapter('${a.id}')" data-id="${a.id}"><span class="ch-num">${a.num}</span><span>${a.title}</span></a></li>`
).join('\n          ');

// 6. Complete Single-Page Hub HTML
const hubHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions Class 7 English Honeycomb &amp; An Alien Hand | CBSE 2026-27 | All Chapters</title>
  <meta name="description" content="Free 100% complete NCERT Solutions for Class 7 English (2026-27). All 8 Honeycomb prose chapters, 8 poems, and 7 An Alien Hand supplementary chapters with intext questions, chapter-end exercises, CBSE marking schemes, and CBQ.">
  <meta name="keywords" content="NCERT Solutions Class 7 English, Class 7 English NCERT Solutions, Honeycomb Class 7 solutions, An Alien Hand Class 7 solutions, Three Questions, A Gift of Chappals, Gopal and the Hilsa Fish, The Shed, The Rebel, Chivvy, Trees, The Tiny Teacher, Bringing Up Kari, Chandni, CBSE Class 7 English 2026-27">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-7-english.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="NCERT Solutions Class 7 English Honeycomb &amp; An Alien Hand | CBSE 2026-27">
  <meta property="og:description" content="Complete 100% coverage NCERT Solutions for Class 7 English Honeycomb (Prose &amp; Poems) and An Alien Hand with CBSE step-by-step marking schemes and Competency-Based Questions.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-7-english.html">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Schema.org Breadcrumb -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/"},
      {"@type": "ListItem", "position": 2, "name": "NCERT Solutions Hub", "item": "https://olympiadquiz.org/ncert-solutions.html"},
      {"@type": "ListItem", "position": 3, "name": "Class 7 English", "item": "https://olympiadquiz.org/ncert-solutions-class-7-english.html"}
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
        "name": "How many books and chapters are there in Class 7 English NCERT for CBSE 2026-27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Class 7 English comprises two NCERT textbooks: Honeycomb with 8 prose chapters and 8 poems, and An Alien Hand (Supplementary Reader) with 7 chapters, making a total of 23 chapters and poems."
        }
      },
      {
        "@type": "Question",
        "name": "Are these Class 7 English solutions updated for the 2026-27 CBSE marking scheme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all solutions include step-by-step CBSE marking schemes (1M, 2M, 3M, 5M), intext comprehension checks, chapter-end exercises, poetic devices, and Competency-Based / HOTS questions."
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
      --brand:#0284c7;
      --brand-hover:#0369a1;
      --brand-light:#f0f9ff;
      --brand-text:#075985;
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
    .top-progress{position:fixed;top:0;left:0;height:3px;background:var(--brand);z-index:1000;transition:width .1s;}
    
    /* Navbar */
    .navbar{background:#0f172a;border-bottom:1px solid rgba(255,255,255,0.08);position:sticky;top:0;z-index:900;}
    .navbar-inner{max-width:1380px;margin:0 auto;padding:0 24px;height:60px;display:flex;align-items:center;justify-content:space-between;gap:16px;}
    .navbar-logo{display:flex;align-items:center;gap:10px;text-decoration:none;}
    .logo-text{font-size:1.15rem;font-weight:800;color:white;}
    .logo-text span{color:#38bdf8;}
    .navbar-links{display:flex;align-items:center;gap:8px;}
    .nav-link{color:#94a3b8;font-size:0.85rem;font-weight:600;padding:6px 12px;border-radius:8px;text-decoration:none;transition:0.2s;display:flex;align-items:center;gap:4px;}
    .nav-link:hover{color:white;background:rgba(255,255,255,0.06);}
    .nav-dropdown{position:relative;}
    .nav-dropdown:hover .nav-dropdown-content{display:block !important;}
    .nav-dropdown-content{display:none;position:absolute;top:100%;left:0;background:white;border:1px solid #e2e8f0;border-radius:10px;min-width:240px;box-shadow:0 8px 24px rgba(0,0,0,0.12);z-index:1000;padding:6px;}
    .nav-dropdown-content a{display:block;padding:8px 14px;color:#334155;text-decoration:none;font-size:0.85rem;border-radius:6px;transition:0.2s;}
    .nav-dropdown-content a:hover{background:#f1f5f9;color:#0f172a !important;}
    .navbar-actions{display:flex;align-items:center;gap:10px;}
    .btn-login{background:#0284c7;color:white;font-size:0.82rem;font-weight:700;padding:7px 18px;border-radius:8px;text-decoration:none;transition:0.2s;}
    .btn-login:hover{background:#0369a1;}
    .navbar-toggle{display:none;background:none;border:none;cursor:pointer;flex-direction:column;gap:5px;padding:6px;}
    .navbar-toggle span{display:block;width:22px;height:2px;background:white;border-radius:2px;}
    
    /* Hero Banner */
    .hero-banner{background:linear-gradient(135deg,#075985 0%,#0369a1 50%,#0284c7 100%);color:white;padding:36px 24px;text-align:center;border-bottom:3px solid #38bdf8;}
    .hero-banner h1{font-size:1.85rem;font-weight:800;margin-bottom:8px;}
    .hero-banner p{color:#bae6fd;font-size:.95rem;max-width:760px;margin:0 auto 16px;}
    .hero-badges{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;}
    .hero-badge{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);padding:6px 14px;border-radius:20px;font-size:.8rem;font-weight:600;color:#f0f9ff;}
    
    /* Breadcrumb Bar & Book Tabs */
    .breadcrumb-bar{background:white;border-bottom:1px solid var(--border);padding:14px 24px;position:sticky;top:60px;z-index:800;box-shadow:0 2px 8px rgba(0,0,0,.04);}
    .breadcrumb-inner{max-width:1380px;margin:0 auto;}
    .breadcrumb-label{font-size:.72rem;font-weight:700;text-transform:uppercase;color:var(--muted);letter-spacing:.06em;margin-bottom:8px;}
    
    .book-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;}
    .book-tab{padding:6px 16px;border-radius:20px;font-size:0.8rem;font-weight:700;cursor:pointer;border:2px solid var(--border);background:#f8fafc;color:var(--slate);transition:all 0.18s;user-select:none;}
    .book-tab:hover{border-color:var(--brand);color:var(--brand-text);}
    .book-tab.active{background:var(--brand);color:white;border-color:var(--brand);box-shadow:0 2px 8px rgba(2,132,199,0.3);}
    
    .breadcrumb-chips{display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch;}
    .breadcrumb-chips::-webkit-scrollbar{height:4px;}
    .breadcrumb-chips::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:4px;}
    .bc-chip{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:20px;font-size:.78rem;font-weight:600;cursor:pointer;border:1.5px solid var(--border);background:#f8fafc;color:var(--slate);transition:all .18s;user-select:none;white-space:nowrap;flex-shrink:0;}
    .bc-chip:hover{border-color:var(--brand);color:var(--brand-text);background:var(--brand-light);}
    .bc-chip.active{background:var(--brand);color:white;border-color:var(--brand);box-shadow:0 3px 10px rgba(2,132,199,.35);}
    .bc-chip .bc-n{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 4px;background:rgba(0,0,0,.12);border-radius:10px;font-size:.68rem;font-weight:800;}
    .bc-chip.active .bc-n{background:rgba(255,255,255,.25);}
    .bc-chip.hidden{display:none !important;}

    /* Main Layout */
    .main-layout{display:flex;max-width:1380px;margin:0 auto;}
    .sidebar{width:310px;background:white;border-right:1px solid var(--border);padding:20px 16px;position:sticky;top:135px;height:calc(100vh - 135px);overflow-y:auto;flex-shrink:0;}
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

    .chapter-header{display:flex;align-items:center;gap:16px;background:linear-gradient(135deg,#0c4a6e 0%,#082f49 100%);color:white;padding:24px 28px;border-radius:16px;margin-bottom:24px;box-shadow:var(--shadow-hover);border-left:5px solid #38bdf8;}
    .ch-badge{width:46px;height:46px;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.25);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.15rem;font-weight:900;flex-shrink:0;}
    .chapter-header-info h2{font-size:1.35rem;font-weight:800;margin-bottom:4px;letter-spacing:-0.01em;}
    .chapter-header-info p{font-size:.84rem;color:#bae6fd;line-height:1.5;}

    /* Poem Box */
    .poem-box{background:linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 100%);border:2px solid #bae6fd;border-radius:14px;padding:20px 24px;margin-bottom:24px;box-shadow:0 2px 8px rgba(2,132,199,0.06);}
    .poem-box h3{font-size:0.96rem;font-weight:800;color:#0369a1;margin-bottom:12px;display:flex;align-items:center;gap:6px;}
    .poem-box .stanza{font-style:italic;line-height:1.95;color:#0c4a6e;font-size:0.94rem;white-space:pre-line;padding:12px 18px;background:rgba(255,255,255,0.7);border-radius:8px;border-left:3px solid #0284c7;}

    /* Concept & Summary Card */
    .concept-card{background:linear-gradient(135deg,#f8fafc 0%,#f0f9ff 100%);border:1px solid #bae6fd;border-radius:12px;padding:18px 22px;margin-bottom:24px;}
    .concept-header{font-size:0.82rem;font-weight:800;color:var(--brand-text);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;display:flex;align-items:center;gap:6px;}

    /* Question Cards */
    .q-card{background:white;border:1px solid var(--border);border-radius:12px;margin-bottom:18px;box-shadow:var(--shadow);transition:all .2s;overflow:hidden;}
    .q-card:hover{border-color:#7dd3fc;box-shadow:var(--shadow-hover);}
    .q-head{padding:16px 20px;display:flex;align-items:flex-start;gap:14px;cursor:pointer;user-select:none;}
    .q-num{background:var(--brand-light);color:var(--brand-text);font-weight:700;font-size:.78rem;padding:4px 10px;border-radius:6px;flex-shrink:0;margin-top:2px;white-space:nowrap;}
    .q-text{flex:1;font-weight:600;color:var(--navy);font-size:.95rem;line-height:1.55;}
    .q-marks{background:#f1f5f9;color:var(--slate);font-size:.725rem;font-weight:700;padding:4px 10px;border-radius:12px;flex-shrink:0;white-space:nowrap;}
    .q-toggle{color:var(--muted);transition:transform .2s;flex-shrink:0;margin-top:4px;}
    .q-toggle svg{width:20px;height:20px;}
    .q-card.open .q-toggle{transform:rotate(180deg);color:var(--brand);}
    .q-answer{display:none;padding:0 16px 18px;border-top:2px dashed rgba(2,132,199,.15);}
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
    .cbq-section{margin-top:36px;border:2px solid var(--brand);border-radius:12px;overflow:hidden;box-shadow:0 4px 15px rgba(2,132,199,.1);}
    .cbq-header{background:linear-gradient(90deg,#0369a1,#0284c7);color:white;padding:16px 20px;font-weight:800;font-size:1.02rem;display:flex;align-items:center;justify-content:space-between;}
    .cbq-badge{font-size:.75rem;background:rgba(255,255,255,.2);padding:4px 10px;border-radius:12px;}
    .cbq-body{padding:20px;background:linear-gradient(to right,#f0f9ff,#fff);}
    .cbq-card{border:1px solid #bae6fd;background:white;padding:16px;border-radius:8px;margin-bottom:16px;}
    .cbq-type{font-size:.75rem;font-weight:700;text-transform:uppercase;margin-bottom:8px;}
    .cbq-question{font-size:.92rem;color:#334155;margin-bottom:12px;line-height:1.6;}
    .cbq-show-btn{text-align:left;padding:10px 14px;background:#f8fafc;border:1px solid #cbd5e1;border-radius:6px;cursor:pointer;font-size:.88rem;font-family:inherit;width:100%;transition:0.2s;}
    .cbq-show-btn:hover{background:#f0f9ff;border-color:var(--brand);color:var(--brand-text);}
    .cbq-answer{display:none;margin-top:12px;padding:12px;background:#f0f9ff;border:1px solid #bae6fd;border-radius:6px;font-size:.88rem;color:#075985;line-height:1.7;}

    .ex-div{font-size:.82rem;font-weight:700;text-transform:uppercase;color:var(--brand-text);background:var(--brand-light);border:1px solid #bae6fd;border-radius:8px;padding:8px 16px;margin:24px 0 16px;display:inline-block;letter-spacing:.04em;}
    
    /* Nav Buttons */
    .ch-nav-btns{display:flex;justify-content:space-between;margin-top:32px;padding-top:20px;border-top:1px solid var(--border);}
    .ch-nav-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:10px;font-weight:700;font-size:.88rem;cursor:pointer;border:1.5px solid var(--border);background:white;color:var(--slate);transition:all .2s;font-family:inherit;}
    .ch-nav-btn:hover:not(:disabled){background:var(--brand);color:white;border-color:var(--brand);}
    .ch-nav-btn:disabled{opacity:.35;cursor:not-allowed;}
    .ch-nav-btn.next{background:var(--brand);color:white;border-color:var(--brand);}

    /* Mobile Responsive */
    .mob-toggle{display:none;position:fixed;bottom:20px;right:20px;background:var(--brand);color:white;border:none;padding:12px 20px;border-radius:30px;font-weight:700;font-size:.9rem;box-shadow:0 4px 14px rgba(2,132,199,.4);z-index:999;cursor:pointer;}
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
          <a href="ncert-solutions-class-8-english.html">Class 8 English</a>
          <a href="ncert-solutions-class-7-maths.html">Class 7 Mathematics</a>
          <a href="ncert-solutions-class-7-science.html">Class 7 Science</a>
          <a href="ncert-solutions-class-7-english.html" style="font-weight:700;color:#0284c7;background:#f0f9ff;">Class 7 English 📖 (Active)</a>
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
  <h1>NCERT Solutions Class 7 English (2026-27)</h1>
  <p>100% Complete Step-by-Step Solutions for Honeycomb (Prose &amp; Poems) and An Alien Hand with CBSE Marking Schemes, Intext Comprehension Checks, and Competency-Based Questions.</p>
  <div class="hero-badges">
    <div class="hero-badge">🍯 Honeycomb: 8 Prose &amp; 8 Poems</div>
    <div class="hero-badge">📖 An Alien Hand: 7 Chapters</div>
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
      <div class="book-tab active" onclick="switchBookTab('prose')" id="tab-prose">🍯 Honeycomb (Prose)</div>
      <div class="book-tab" onclick="switchBookTab('poems')" id="tab-poems">📝 Poems</div>
      <div class="book-tab" onclick="switchBookTab('alien')" id="tab-alien">📖 An Alien Hand</div>
    </div>
    <div class="breadcrumb-chips" id="chipsContainer">
      ${breadcrumbChipsProse}
      ${breadcrumbChipsPoems}
      ${breadcrumbChipsAlien}
    </div>
  </div>
</div>

<!-- Main Layout -->
<div class="main-layout">
  <!-- Sidebar -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-title">
      <span>Chapter Index</span>
      <span style="font-size:0.75rem;color:var(--brand);font-weight:700;">23 Units</span>
    </div>
    <input type="text" class="search-box" id="chapterSearch" placeholder="Search chapters, poems..." oninput="filterChapters(this.value)">
    
    <div class="sec-group-title">🍯 Honeycomb (Prose)</div>
    <ul class="chapter-nav" id="sidebarProse">
      ${sidebarNavProse}
    </ul>

    <div class="sec-group-title">📝 Honeycomb (Poetry)</div>
    <ul class="chapter-nav" id="sidebarPoems">
      ${sidebarNavPoems}
    </ul>

    <div class="sec-group-title">📖 An Alien Hand</div>
    <ul class="chapter-nav" id="sidebarAlien">
      ${sidebarNavAlien}
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
let currentBook = 'prose';
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
    switchBookTab('prose');
    showChapter('h1');
  }
});
</script>
</body>
</html>`;

fs.writeFileSync(path.join(rootDir, 'ncert-solutions-class-7-english.html'), hubHtml, 'utf8');
console.log('Successfully generated ncert-solutions-class-7-english.html!');
