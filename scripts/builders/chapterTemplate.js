// Master Modular Chapter HTML Template for Class 3 NCERT Solutions
// Generates standalone, responsive, high-performance, SEO-optimized HTML pages for each chapter.

function generateChapterPage({
  subjectName,
  subjectSlug,
  bookTitle,
  bookSlug,
  trackName,
  chNum,
  totalChs,
  chId,
  title,
  subtitle,
  concepts,
  svg,
  questions,
  cbq,
  prevLink,
  nextLink,
  sidebarChapters,
  canonicalUrl
}) {
  // Generate Q-Cards
  let qCardsHtml = '';
  questions.forEach((q, idx) => {
    const qId = `${chId}-q${idx + 1}`;
    
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
            <span class="marking-marks">${q.marks || 3} Marks</span>
          </div>
        </div>
      `;
    }

    qCardsHtml += `
      <div class="q-card open" id="${qId}">
        <div class="q-head" onclick="toggleQ('${qId}')">
          <div class="q-badge-wrap">
            <span class="q-num">Q${idx + 1}</span>
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
  let cbqHtml = '';
  if (cbq) {
    const cbqStory = cbq.text || cbq.story || '';
    const cbqQuestion = cbq.question || cbq.q || '';
    const cbqAnswer = cbq.answer || cbq.ans || '';
    const cbqRubric = cbq.rubric || cbq.marking || '1M concept + 1M calculation + 1M answer';

    cbqHtml = `
      <div class="cbq-card">
        <div class="cbq-badge">🌟 NEP 2020 Competency-Based Case Study</div>
        <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">${cbq.title || 'Practical Application Task'}</h3>
        <p style="font-size: 0.95rem; line-height: 1.6; color: #334155; margin-bottom: 14px;">${cbqStory}</p>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; margin-bottom: 14px;">
          <strong style="color: #0f172a;">Analytical Task:</strong> ${cbqQuestion}
        </div>
        <div style="background: #f8fafc; border-left: 4px solid #8b5cf6; padding: 14px; border-radius: 0 8px 8px 0;">
          <div style="font-weight: 700; color: #6d28d9; margin-bottom: 6px;">Evaluation &amp; Model Answer:</div>
          <div style="font-size: 0.95rem; line-height: 1.6; color: #1e293b;">${cbqAnswer}</div>
          <div style="margin-top: 10px; font-size: 0.82rem; font-weight: 600; color: #64748b;">Rubric: ${cbqRubric}</div>
        </div>
      </div>
    `;
  }

  // Schema FAQ entries
  const faqEntities = questions.slice(0, 10).map(q => ({
    "@type": "Question",
    "name": q.q.replace(/<[^>]+>/g, '').substring(0, 150),
    "acceptedAnswer": {
      "@type": "Answer",
      "text": q.ans.replace(/<[^>]+>/g, '').substring(0, 300)
    }
  }));

  // Sidebar Links HTML
  const sidebarLinksHtml = sidebarChapters.map(ch => `
    <li>
      <a href="${ch.filename}" class="${ch.num === chNum ? 'active' : ''}">
        Ch ${ch.num}: ${ch.title}
      </a>
    </li>
  `).join('');

  // Top & Bottom Pagers
  const prevButton = prevLink 
    ? `<a href="${prevLink.filename}" class="btn-pager">⬅️ ${prevLink.label}</a>`
    : `<a href="../ncert-solutions-class-3-${subjectSlug}.html" class="btn-pager">⬅️ ${subjectName} Hub</a>`;
  
  const nextButton = nextLink
    ? `<a href="${nextLink.filename}" class="btn-pager">${nextLink.label} ➡️</a>`
    : `<a href="../ncert-solutions-class-3-${subjectSlug}.html" class="btn-pager">Back to ${subjectName} Hub ➡️</a>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 3 ${subjectName} Chapter ${chNum}: ${title} (${bookTitle}) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% Comprehensive NCERT Solutions for Class 3 ${subjectName} (${bookTitle}) Chapter ${chNum}: ${title}. Complete ${questions.length} textbook exercises, in-text activities, CBSE marking schemes, and NEP 2020 case studies.">
  <meta name="keywords" content="ncert solutions class 3 ${subjectSlug} chapter ${chNum}, ${title.toLowerCase()} class 3, ${bookSlug} chapter ${chNum} solutions, class 3 ${subjectSlug} ncert 2026-27, cbse class 3 ${subjectSlug} tiwari academy">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="icon" type="image/png" href="../favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="NCERT Solutions Class 3 ${subjectName} Chapter ${chNum}: ${title} (100% Full Exercises)">
  <meta property="og:description" content="Complete step-by-step solutions for all ${questions.length} questions of Class 3 ${bookTitle} Chapter ${chNum} with CBSE marking schemes and diagrams.">
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
      { "@type": "ListItem", "position": 4, "name": "Class 3 ${subjectName}", "item": "https://olympiadquiz.org/ncert-solutions-class-3-${subjectSlug}.html" },
      { "@type": "ListItem", "position": 5, "name": "${bookTitle} Chapter ${chNum}", "item": "${canonicalUrl}" }
    ]
  }
  </script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Class 3 ${subjectName} Chapter ${chNum} Solutions - ${title}",
    "description": "Complete solutions for Class 3 ${bookTitle} Chapter ${chNum}: ${title}.",
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
      <a href="../ncert-solutions-class-3-${subjectSlug}.html">${subjectName} Hub</a>
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
      <li><a href="../ncert-solutions-class-3-${subjectSlug}.html">${subjectName}</a></li>
      <li class="bc-sep">/</li>
      <li class="bc-active">${bookTitle} Chapter ${chNum}: ${title}</li>
    </ul>
  </nav>

  <div class="page-layout">
    
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-title">${bookTitle} (${totalChs} Chs)</div>
      <ul class="sidebar-list">
        ${sidebarLinksHtml}
      </ul>
      <div class="sidebar-title" style="margin-top: 24px;">Other Options</div>
      <ul class="sidebar-list">
        <li><a href="../ncert-solutions-class-3-${subjectSlug}.html">← ${subjectName} Main Page</a></li>
        <li><a href="../ncert-solutions-class-3.html">← Class 3 Central Hub</a></li>
      </ul>
    </aside>

    <!-- Content Area -->
    <main class="content-area">

      <!-- Pager Top -->
      <div class="chapter-pager">
        <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">Chapter ${chNum} of ${totalChs}</span>
        <div style="display: flex; gap: 8px;">
          ${prevButton}
          ${nextButton}
        </div>
      </div>

      <!-- Chapter Hero -->
      <header class="chapter-hero">
        <span class="badge-pill">NCERT Class 3 ${subjectName} • ${trackName}</span>
        <h1>Chapter ${chNum}: ${title}</h1>
        <p>${subtitle} | CBSE Session 2026–27</p>
      </header>

      <!-- Key Concepts -->
      <section class="concepts-box">
        <div class="concepts-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
          Core Pedagogical Competencies &amp; Concepts
        </div>
        <ul class="concepts-list">
          ${concepts.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </section>

      <!-- Diagram -->
      <div class="diagram-wrap">
        ${svg}
      </div>

      <!-- Exercises Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin: 32px 0 16px; border-bottom: 2px solid var(--border); padding-bottom: 8px;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: #0f172a;">All Textbook Exercises &amp; In-Text Tasks (${questions.length} Questions)</h2>
        <span style="font-size: 0.85rem; font-weight: 700; color: #15803d; background: #dcfce7; padding: 4px 10px; border-radius: 999px;">100% Complete Ingestion</span>
      </div>

      <!-- Q Cards List -->
      ${qCardsHtml}

      <!-- CBQ Section -->
      ${cbqHtml}

      <!-- Pager Bottom -->
      <div class="chapter-pager" style="margin-top: 36px;">
        ${prevButton}
        ${nextButton}
      </div>

    </main>

  </div>

  <!-- Footer -->
  <footer class="page-footer">
    <div style="margin-bottom: 12px;">
      <a href="../index.html">Home</a> •
      <a href="../ncert-solutions-class-3.html">Class 3 Hub</a> •
      <a href="../ncert-solutions-class-3-${subjectSlug}.html">${subjectName} Solutions</a> •
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
}

module.exports = { generateChapterPage };
