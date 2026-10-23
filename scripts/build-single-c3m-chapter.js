const fs = require('fs');
const path = require('path');

const { mathsMelaChapters } = require('./data-c3-maths/mathsMelaData.js');
const mathsMelaExtra = require('./data-c3-maths/mathsMelaExtra.js');
const { mathsMelaExpandedPart1 } = require('./data-c3-maths-complete/mathsMelaExpandedPart1.js');

// Ensure output directory exists
const outDir = path.join(__dirname, '..', 'chapters-c3m');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Chapter 1 Data Assembly
const ch1Base = mathsMelaChapters[0];
const ch1Extra = mathsMelaExtra['mm1'] || [];
const ch1Expanded = mathsMelaExpandedPart1['mm1'] || [];
const allQuestions = [...ch1Base.questions, ...ch1Extra, ...ch1Expanded];

console.log(`Building Maths Mela Chapter 1: Total Questions = ${allQuestions.length}`);

// Generate Q-Cards HTML
let qCardsHtml = '';
allQuestions.forEach((q, idx) => {
  const qId = `mm1-q${idx+1}`;
  
  let rubricHtml = '';
  if (q.rubric && Array.isArray(q.rubric)) {
    rubricHtml = `
      <div class="marking-scheme">
        <div class="marking-title">CBSE Step-by-Step Marking Scheme</div>
        ${q.rubric.map(r => `
          <div class="marking-row">
            <span class="marking-key">${r.key}</span>
            <span class="marking-marks">${r.marks}</span>
          </div>
        `).join('')}
      </div>
    `;
  } else if (typeof q.rubric === 'string') {
    rubricHtml = `
      <div class="marking-scheme">
        <div class="marking-title">CBSE Step-by-Step Marking Scheme</div>
        <div class="marking-row">
          <span class="marking-key">${q.rubric}</span>
          <span class="marking-marks">${q.marks} Marks</span>
        </div>
      </div>
    `;
  }

  qCardsHtml += `
    <div class="q-card open" id="${qId}">
      <div class="q-head" onclick="toggleQ('${qId}')">
        <div class="q-badge-wrap">
          <span class="q-num">Q${idx+1}</span>
          <span class="q-category">${q.category || 'Textbook Exercise'}</span>
        </div>
        <div class="q-text">${q.q}</div>
        <span class="q-marks">[${q.marks || 3} Marks]</span>
        <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg></div>
      </div>
      <div class="q-answer">
        <div class="answer-box">
          <div class="answer-label">✅ Step-by-Step Solution &amp; Working</div>
          <div class="answer-text">${q.ans}</div>
          ${rubricHtml}
        </div>
      </div>
    </div>
  `;
});

// CBQ HTML
const cbq = ch1Base.cbq;
const cbqHtml = `
  <div class="cbq-card">
    <div class="cbq-badge">🌟 NEP 2020 Competency-Based Case Study</div>
    <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">${cbq.title}</h3>
    <p style="font-size: 0.95rem; line-height: 1.6; color: #334155; margin-bottom: 14px;">${cbq.text}</p>
    <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; margin-bottom: 14px;">
      <strong style="color: #0f172a;">Analytical Task:</strong> ${cbq.question}
    </div>
    <div style="background: #f8fafc; border-left: 4px solid #8b5cf6; padding: 14px; border-radius: 0 8px 8px 0;">
      <div style="font-weight: 700; color: #6d28d9; margin-bottom: 6px;">Evaluation &amp; Model Answer:</div>
      <div style="font-size: 0.95rem; line-height: 1.6; color: #1e293b;">${cbq.answer}</div>
      <div style="margin-top: 10px; font-size: 0.82rem; font-weight: 600; color: #64748b;">Rubric: ${cbq.rubric}</div>
    </div>
  </div>
`;

// Schema FAQ entries
const faqEntities = allQuestions.slice(0, 10).map(q => ({
  "@type": "Question",
  "name": q.q.replace(/<[^>]+>/g, '').substring(0, 150),
  "acceptedAnswer": {
    "@type": "Answer",
    "text": q.ans.replace(/<[^>]+>/g, '').substring(0, 300)
  }
}));

// Full Standalone HTML
const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 3 Maths Chapter 1: What's in a Name? (Maths Mela) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% Comprehensive NCERT Solutions for Class 3 Mathematics (Maths Mela) Chapter 1: What's in a Name? All ${allQuestions.length} textbook exercises, in-text activities, name length grids, CBSE marking schemes, and NEP 2020 case studies.">
  <meta name="keywords" content="ncert solutions class 3 maths chapter 1, whats in a name class 3 maths, maths mela chapter 1 solutions, class 3 maths ncert 2026-27, letter counting maths mela, cbse class 3 maths solutions tiwari academy">
  <link rel="canonical" href="https://olympiadquiz.org/chapters-c3m/maths-mela-ch1.html">
  <link rel="icon" type="image/png" href="../favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/chapters-c3m/maths-mela-ch1.html">
  <meta property="og:title" content="NCERT Solutions Class 3 Maths Chapter 1: What's in a Name? (100% Full Exercises)">
  <meta property="og:description" content="Complete step-by-step solutions for all ${allQuestions.length} questions of Class 3 Maths Mela Chapter 1 with CBSE marking schemes and diagrams.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/" },
      { "@type": "ListItem", "position": 2, "name": "NCERT Solutions", "item": "https://olympiadquiz.org/ncert-solutions.html" },
      { "@type": "ListItem", "position": 3, "name": "Class 3", "item": "https://olympiadquiz.org/ncert-solutions-class-3.html" },
      { "@type": "ListItem", "position": 4, "name": "Class 3 Mathematics", "item": "https://olympiadquiz.org/ncert-solutions-class-3-maths.html" },
      { "@type": "ListItem", "position": 5, "name": "Maths Mela Chapter 1", "item": "https://olympiadquiz.org/chapters-c3m/maths-mela-ch1.html" }
    ]
  }
  </script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Class 3 Mathematics Chapter 1 Solutions - What's in a Name?",
    "description": "Complete solutions for Class 3 Maths Mela Chapter 1 covering letter counting, name length grids, frequency tables, and comparison problems.",
    "learningResourceType": "Textbook Solutions",
    "educationalLevel": "Grade 3",
    "audience": "Students, Teachers, Parents",
    "inLanguage": "en",
    "isAccessibleForFree": true
  }
  </script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": ${JSON.stringify(faqEntities)}
  }
  </script>

  <style>
    :root {
      --primary: #2563eb;
      --primary-dark: #1d4ed8;
      --primary-light: #eff6ff;
      --accent: #ff6b00;
      --text-main: #0f172a;
      --text-muted: #64748b;
      --bg-page: #f8fafc;
      --bg-card: #ffffff;
      --border: #e2e8f0;
      --radius: 12px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: var(--bg-page);
      color: var(--text-main);
      line-height: 1.6;
    }

    /* Navbar */
    .site-nav {
      position: sticky;
      top: 0;
      z-index: 50;
      background: #0f172a;
      color: #ffffff;
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .site-nav a { color: #ffffff; text-decoration: none; font-weight: 600; font-size: 0.95rem; }
    .site-nav-logo { display: flex; align-items: center; gap: 8px; font-size: 1.15rem; font-weight: 800; }
    .site-nav-links { display: flex; gap: 18px; align-items: center; }
    .site-nav-links a:hover { color: var(--accent); }

    /* Breadcrumbs */
    .bc-nav {
      background: #ffffff;
      border-bottom: 1px solid var(--border);
      padding: 12px 24px;
      font-size: 0.85rem;
      color: var(--text-muted);
    }
    .bc-list { list-style: none; display: flex; flex-wrap: wrap; gap: 8px; align-items: center; max-width: 1200px; margin: 0 auto; }
    .bc-list a { color: var(--primary); text-decoration: none; font-weight: 600; }
    .bc-list a:hover { text-decoration: underline; }
    .bc-sep { color: #cbd5e1; }
    .bc-active { color: var(--text-main); font-weight: 700; }

    /* Main Container Layout */
    .page-layout {
      max-width: 1200px;
      margin: 24px auto;
      padding: 0 16px;
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 28px;
    }

    @media (max-width: 900px) {
      .page-layout { grid-template-columns: 1fr; }
      .sidebar { display: none; }
    }

    /* Sidebar Navigation */
    .sidebar {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 18px;
      height: fit-content;
      position: sticky;
      top: 76px;
    }
    .sidebar-title {
      font-size: 0.9rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin-bottom: 12px;
      border-bottom: 2px solid var(--border);
      padding-bottom: 8px;
    }
    .sidebar-list { list-style: none; display: flex; flex-direction: column; gap: 6px; }
    .sidebar-list a {
      display: block;
      padding: 8px 12px;
      font-size: 0.88rem;
      color: #334155;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      transition: all 0.15s ease;
    }
    .sidebar-list a:hover { background: var(--primary-light); color: var(--primary); }
    .sidebar-list a.active { background: var(--primary); color: #ffffff; font-weight: 700; }

    /* Content Area */
    .content-area {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 32px;
    }

    /* Chapter Header */
    .chapter-hero {
      border-bottom: 2px solid var(--border);
      padding-bottom: 24px;
      margin-bottom: 24px;
    }
    .badge-pill {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      padding: 4px 10px;
      background: #e0f2fe;
      color: #0369a1;
      border-radius: 999px;
      margin-bottom: 10px;
      letter-spacing: 0.04em;
    }
    .chapter-hero h1 {
      font-size: 1.85rem;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 8px;
    }
    .chapter-hero p {
      font-size: 1rem;
      color: var(--text-muted);
    }

    /* Key Concepts */
    .concepts-box {
      background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%);
      border: 1.5px solid #bfdbfe;
      border-radius: var(--radius);
      padding: 20px;
      margin-bottom: 24px;
    }
    .concepts-title {
      font-size: 1rem;
      font-weight: 700;
      color: #1e40af;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .concepts-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
    .concepts-list li {
      font-size: 0.92rem;
      color: #1e293b;
      position: relative;
      padding-left: 20px;
    }
    .concepts-list li::before {
      content: "•";
      position: absolute;
      left: 6px;
      color: var(--primary);
      font-weight: bold;
    }

    /* Diagrams */
    .diagram-wrap {
      background: #ffffff;
      border: 1.5px solid var(--border);
      border-radius: var(--radius);
      padding: 16px;
      margin: 24px 0;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    }

    /* Navigation Pager */
    .chapter-pager {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      margin: 20px 0 28px;
      padding: 14px;
      background: #f1f5f9;
      border-radius: var(--radius);
    }
    .btn-pager {
      padding: 8px 16px;
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--primary-dark);
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      text-decoration: none;
      transition: all 0.15s ease;
    }
    .btn-pager:hover {
      background: var(--primary);
      color: #ffffff;
      border-color: var(--primary);
    }

    /* Q-Cards */
    .q-card {
      background: #ffffff;
      border: 1.5px solid var(--border);
      border-radius: var(--radius);
      margin-bottom: 18px;
      overflow: hidden;
      transition: border-color 0.15s ease;
    }
    .q-card:hover { border-color: #94a3b8; }
    .q-head {
      padding: 16px 20px;
      cursor: pointer;
      display: grid;
      grid-template-columns: auto 1fr auto auto;
      gap: 14px;
      align-items: flex-start;
      background: #f8fafc;
      border-bottom: 1px solid transparent;
      user-select: none;
    }
    .q-card.open .q-head {
      background: #ffffff;
      border-bottom-color: var(--border);
    }
    .q-badge-wrap { display: flex; flex-direction: column; gap: 4px; }
    .q-num {
      font-size: 0.85rem;
      font-weight: 800;
      background: var(--primary-light);
      color: var(--primary-dark);
      padding: 4px 8px;
      border-radius: 6px;
      text-align: center;
    }
    .q-category { font-size: 0.72rem; font-weight: 700; color: #64748b; white-space: nowrap; }
    .q-text { font-size: 0.96rem; font-weight: 600; color: #1e293b; line-height: 1.5; }
    .q-marks { font-size: 0.82rem; font-weight: 700; color: var(--accent); white-space: nowrap; }
    .q-toggle svg {
      width: 18px;
      height: 18px;
      transition: transform 0.2s ease;
      color: #64748b;
    }
    .q-card.open .q-toggle svg { transform: rotate(180deg); }
    .q-answer { display: none; padding: 20px; background: #ffffff; }
    .q-card.open .q-answer { display: block; }
    .answer-box { background: #f8fafc; border-radius: 8px; padding: 18px; border: 1px solid #e2e8f0; }
    .answer-label { font-size: 0.82rem; font-weight: 800; text-transform: uppercase; color: #15803d; letter-spacing: 0.05em; margin-bottom: 10px; }
    .answer-text { font-size: 0.95rem; line-height: 1.7; color: #334155; }
    .answer-text strong { color: #0f172a; }

    /* Marking Scheme */
    .marking-scheme {
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px dashed #cbd5e1;
    }
    .marking-title { font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 0.04em; margin-bottom: 8px; }
    .marking-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      padding: 4px 0;
      color: #475569;
    }
    .marking-key { flex: 1; padding-right: 12px; }
    .marking-marks { font-weight: 700; color: var(--accent); white-space: nowrap; }

    /* CBQ Card */
    .cbq-card {
      background: linear-gradient(135deg, #faf5ff 0%, #fdf4ff 100%);
      border: 1.5px solid #d8b4fe;
      border-radius: var(--radius);
      padding: 24px;
      margin: 32px 0 20px;
    }
    .cbq-badge {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      padding: 4px 12px;
      background: #ede9fe;
      color: #6d28d9;
      border-radius: 999px;
      margin-bottom: 12px;
    }

    /* Footer */
    .page-footer {
      background: #0f172a;
      color: #94a3b8;
      padding: 32px 24px;
      margin-top: 48px;
      text-align: center;
      font-size: 0.88rem;
    }
    .page-footer a { color: #ffffff; text-decoration: none; font-weight: 600; margin: 0 8px; }
    .page-footer a:hover { color: var(--accent); text-decoration: underline; }
  </style>
</head>
<body>

  <!-- Sticky Navbar -->
  <nav class="site-nav">
    <a href="../index.html" class="site-nav-logo">
      <img src="../favicon.png" alt="OlympiadQuiz Logo" width="28" height="28" style="vertical-align: middle;">
      <span>Olympiad<span>Quiz</span></span>
    </a>
    <div class="site-nav-links">
      <a href="../ncert-solutions.html">📚 All NCERT Hub</a>
      <a href="../ncert-solutions-class-3.html">Class 3 Central Hub</a>
      <a href="../ncert-solutions-class-3-maths.html">Maths Hub</a>
    </div>
  </nav>

  <!-- Breadcrumbs -->
  <nav class="bc-nav" aria-label="Breadcrumb">
    <ul class="bc-list">
      <li><a href="../index.html">Home</a></li>
      <li class="bc-sep">/</li>
      <li><a href="../ncert-solutions.html">NCERT Solutions</a></li>
      <li class="bc-sep">/</li>
      <li><a href="../ncert-solutions-class-3.html">Class 3</a></li>
      <li class="bc-sep">/</li>
      <li><a href="../ncert-solutions-class-3-maths.html">Mathematics</a></li>
      <li class="bc-sep">/</li>
      <li class="bc-active">Maths Mela Chapter 1: What's in a Name?</li>
    </ul>
  </nav>

  <div class="page-layout">
    
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-title">Maths Mela (14 Chs)</div>
      <ul class="sidebar-list">
        <li><a href="maths-mela-ch1.html" class="active">Ch 1: What's in a Name?</a></li>
        <li><a href="maths-mela-ch2.html">Ch 2: Toy Joy</a></li>
        <li><a href="maths-mela-ch3.html">Ch 3: Double Century</a></li>
        <li><a href="maths-mela-ch4.html">Ch 4: Vacation with My Nani Maa</a></li>
        <li><a href="maths-mela-ch5.html">Ch 5: Fun with Shapes</a></li>
        <li><a href="maths-mela-ch6.html">Ch 6: House of Hundreds – I</a></li>
        <li><a href="maths-mela-ch7.html">Ch 7: Raksha Bandhan</a></li>
        <li><a href="maths-mela-ch8.html">Ch 8: Fair Share</a></li>
        <li><a href="maths-mela-ch9.html">Ch 9: House of Hundreds – II</a></li>
        <li><a href="maths-mela-ch10.html">Ch 10: Fun at Class Party!</a></li>
        <li><a href="maths-mela-ch11.html">Ch 11: Filling and Lifting</a></li>
        <li><a href="maths-mela-ch12.html">Ch 12: Give and Take</a></li>
        <li><a href="maths-mela-ch13.html">Ch 13: Time Goes On</a></li>
        <li><a href="maths-mela-ch14.html">Ch 14: The Surajkund Fair</a></li>
      </ul>
      <div class="sidebar-title" style="margin-top: 24px;">Classic Track</div>
      <ul class="sidebar-list">
        <li><a href="math-magic-ch1.html">Math-Magic (14 Chapters)</a></li>
      </ul>
    </aside>

    <!-- Content Area -->
    <main class="content-area">

      <!-- Pager Top -->
      <div class="chapter-pager">
        <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">Chapter 1 of 14</span>
        <a href="maths-mela-ch2.html" class="btn-pager">Next Chapter: Toy Joy ➡️</a>
      </div>

      <!-- Chapter Hero -->
      <header class="chapter-hero">
        <span class="badge-pill">NCERT Class 3 Mathematics • New NEP 2020 / NCF 2023</span>
        <h1>Chapter 1: What's in a Name?</h1>
        <p>100% Complete Exercise Solutions, In-Text Activities, Name Length Tables, Letter Counting &amp; Tally Worksheets | CBSE Session 2026–27</p>
      </header>

      <!-- Key Concepts -->
      <section class="concepts-box">
        <div class="concepts-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
          Core Mathematical Competencies &amp; Concepts
        </div>
        <ul class="concepts-list">
          ${ch1Base.concepts.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </section>

      <!-- Diagram -->
      <div class="diagram-wrap">
        ${ch1Base.svg}
      </div>

      <!-- Exercises Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin: 32px 0 16px; border-bottom: 2px solid var(--border); padding-bottom: 8px;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: #0f172a;">All Textbook Exercises &amp; In-Text Tasks (${allQuestions.length} Questions)</h2>
        <span style="font-size: 0.85rem; font-weight: 700; color: #15803d; background: #dcfce7; padding: 4px 10px; border-radius: 999px;">100% Complete Ingestion</span>
      </div>

      <!-- Q Cards List -->
      ${qCardsHtml}

      <!-- CBQ Section -->
      ${cbqHtml}

      <!-- Pager Bottom -->
      <div class="chapter-pager" style="margin-top: 36px;">
        <a href="../ncert-solutions-class-3-maths.html" class="btn-pager">⬅️ Back to Class 3 Maths Hub</a>
        <a href="maths-mela-ch2.html" class="btn-pager">Next: Chapter 2 (Toy Joy) ➡️</a>
      </div>

    </main>

  </div>

  <!-- Footer -->
  <footer class="page-footer">
    <div style="margin-bottom: 12px;">
      <a href="../index.html">Home</a> •
      <a href="../ncert-solutions-class-3.html">Class 3 Hub</a> •
      <a href="../ncert-solutions-class-3-maths.html">Maths Solutions</a> •
      <a href="../ncert-solutions.html">All Classes</a>
    </div>
    <p>© 2026–27 OlympiadQuiz.org — 100% Free Complete NCERT Solutions for CBSE &amp; State Boards.</p>
  </footer>

  <script>
    function toggleQ(id) {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('open');
    }
  </script>

</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'maths-mela-ch1.html'), fullHtml, 'utf8');
console.log(`Saved: chapters-c3m/maths-mela-ch1.html (${fullHtml.length} bytes)`);
