// scripts/build-c6h-malhar-hub.js
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6h');

const allChapters = {};
for (let i = 1; i <= 13; i++) {
  const filePath = path.join(dir, `ch${i}.html`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing chapter file: ${filePath}`);
  }
  const rawContent = fs.readFileSync(filePath, 'utf8');
  const sectionMatch = rawContent.match(/<section[\s\S]*?<\/section>/);
  allChapters[i] = sectionMatch ? sectionMatch[0] : rawContent;
}

const chapters = [
  { num: 1, title: 'मातृभूमि', short: 'मातृभूमि', genre: 'कविता', desc: 'राष्ट्रकवि सोहनलाल द्विवेदी — देशप्रेम, प्राकृतिक छटा व नगाधिराज हिमालय' },
  { num: 2, title: 'गोल', short: 'गोल', genre: 'संस्मरण', desc: 'हॉकी के जादूगर मेजर ध्यानचंद — खेल भावना, अभ्यास, अनुशासन व लगन' },
  { num: 3, title: 'हार की जीत', short: 'हार की जीत', genre: 'कहानी', desc: 'पं. सुदर्शन — बाबा भारती, खड्गसिंह व सुलतान: मानवता की नैतिक विजय' },
  { num: 4, title: 'बचपन', short: 'बचपन', genre: 'संस्मरण', desc: 'कृष्णा सोबती — अतीत की मीठी यादें, पहनावा, स्वाद व बदलती जीवनशैली' },
  { num: 5, title: 'रहीम के दोहे', short: 'रहीम के दोहे', genre: 'काव्य', desc: 'कविवर रहीम — नीति, परोपकार, सज्जनता, वाणी की मिठास व जीवन मूल्य' },
  { num: 6, title: 'मेरी माँ', short: 'मेरी माँ', genre: 'आत्मकथा', desc: 'क्रांतिकारी रामप्रसाद "बिस्मिल" — माँ का असीम त्याग, प्रेरणा व देशभक्ति' },
  { num: 7, title: 'जल ही जीवन है', short: 'जल ही जीवन है', genre: 'निबंध', desc: 'पर्यावरण चेतना — जल संरक्षण, वर्षा जल संचयन व प्राकृतिक संतुलन' },
  { num: 8, title: 'ईदगाह', short: 'ईदगाह', genre: 'कहानी', desc: 'मुंशी प्रेमचंद — हामिद का चिमटा, बाल मनोविज्ञान व दादी अमीना का वात्सल्य' },
  { num: 9, title: 'अनोखा यज्ञ', short: 'अनोखा यज्ञ', genre: 'बोध कथा', desc: 'सेठ जी व महायज्ञ — भूखे श्वान को रोटियाँ खिलाना व सच्चा निस्वार्थ त्याग' },
  { num: 10, title: 'सूरदास के पद', short: 'सूरदास के पद', genre: 'काव्य', desc: 'महाकवि सूरदास — श्रीकृष्ण की बाललीला, माखन चोरी व यशोदा मैया से संवाद' },
  { num: 11, title: 'चेतक की वीरता', short: 'चेतक की वीरता', genre: 'कविता', desc: 'श्याम नारायण पाण्डेय — हल्दीघाटी का युद्ध, महाराणा प्रताप व स्वामीभक्त अश्व' },
  { num: 12, title: 'बोध', short: 'बोध', genre: 'कहानी', desc: 'मुंशी प्रेमचंद — पंडित चंद्रधर, आत्मग्लानि व शिक्षक के सम्मान का सच्चा बोध' },
  { num: 13, title: 'नीति के दोहे', short: 'नीति के दोहे', genre: 'काव्य', desc: 'संत कबीरदास व गोस्वामी तुलसीदास — मधुर वाणी, सत्य, सत्संगति व विनय' }
];

// Generate chips HTML
const chipsHtml = chapters.map(ch => 
  `    <span class="bc-chip${ch.num === 1 ? ' active' : ''}" onclick="showChapter(${ch.num})" data-ch="${ch.num}"><span class="bc-n">${ch.num}</span>${ch.short}</span>`
).join('\n');

// Generate sidebar HTML
const sidebarHtml = chapters.map(ch => 
  `      <li><a href="javascript:void(0)" onclick="showChapter(${ch.num})" data-ch="${ch.num}" ${ch.num === 1 ? 'class="active"' : ''}><span class="ch-num">${ch.num}</span><div class="ch-info"><strong>पाठ ${ch.num}: ${ch.title}</strong><small style="display:block;font-size:0.75rem;color:#64748b;">${ch.desc}</small></div></a></li>`
).join('\n');

const html = `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 6 Hindi (मल्हार - Malhar) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% Free NCERT Solutions for Class 6 Hindi (मल्हार - Malhar NEP 2020) CBSE 2026-27. Complete all 13 chapters with meaning, NCERT solutions, CBSE marking schemes & CBQs.">
  <meta name="keywords" content="ncert solutions class 6 hindi malhar, class 6 hindi malhar solutions, ncert malhar hindi class 6 2026-27, matribhoomi class 6 hindi, gol major dhyan chand class 6, haar ki jeet class 6, bachpan krishna sobti class 6, rahim ke dohe class 6, idgah hamid class 6">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-6-hindi-malhar.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph Meta Tags -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-6-hindi-malhar.html">
  <meta property="og:title" content="NCERT Solutions for Class 6 Hindi (मल्हार - Malhar) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="Complete 100% chapter-wise NCERT solutions for Class 6 Hindi (मल्हार) with bhavarth, shabdarth, grammar, CBSE marking rubrics and competency questions.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 6 Hindi (मल्हार - Malhar) CBSE 2026-27">
  <meta name="twitter:description" content="Complete 100% chapter-wise NCERT solutions for Class 6 Hindi covering all 13 chapters of Malhar (NEP 2020).">
  <meta name="twitter:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Structured Data JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "NCERT Solutions for Class 6 Hindi (मल्हार - Malhar)",
    "description": "Exhaustive NCERT Solutions for Class 6 Hindi (Malhar) covering all 13 chapters based on latest NEP 2020 CBSE syllabus 2026-27.",
    "provider": {
      "@type": "Organization",
      "name": "OlympiadQuiz",
      "url": "https://olympiadquiz.org"
    },
    "educationalLevel": "Class 6",
    "inLanguage": "hi",
    "learningResourceType": "Textbook Solutions"
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/" },
      { "@type": "ListItem", "position": 2, "name": "NCERT Solutions", "item": "https://olympiadquiz.org/ncert-solutions.html" },
      { "@type": "ListItem", "position": 3, "name": "Class 6", "item": "https://olympiadquiz.org/ncert-solutions-class-6.html" },
      { "@type": "ListItem", "position": 4, "name": "Hindi (मल्हार - Malhar)", "item": "https://olympiadquiz.org/ncert-solutions-class-6-hindi-malhar.html" }
    ]
  }
  </script>

  <style>
    :root {
      --primary: #ea580c;
      --primary-dark: #c2410c;
      --primary-light: #fff7ed;
      --primary-border: #fed7aa;
      --navy: #0f172a;
      --slate: #334155;
      --muted: #64748b;
      --light-bg: #f8fafc;
      --border: #e2e8f0;
      --card-bg: #ffffff;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
      --shadow: 0 4px 14px rgba(0,0,0,0.08);
      --font-hindi: 'Noto Sans Devanagari', system-ui, -apple-system, sans-serif;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: var(--font-hindi);
      background-color: var(--light-bg);
      color: var(--slate);
      line-height: 1.65;
    }

    /* Reading Progress Bar */
    .top-progress {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, #ea580c, #f97316, #fb923c);
      width: 0%;
      z-index: 2000;
      transition: width 0.1s ease;
    }

    /* Navbar */
    .navbar {
      background: var(--navy);
      padding: 12px 24px;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    }
    .navbar-inner {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .navbar-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: white;
      font-weight: 800;
      font-size: 1.25rem;
      font-family: system-ui, sans-serif;
    }
    .logo-text span { color: #f97316; }
    .navbar-links {
      display: flex;
      align-items: center;
      gap: 24px;
      font-family: system-ui, sans-serif;
    }
    .nav-link {
      color: #94a3b8;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.92rem;
      transition: color 0.2s;
    }
    .nav-link:hover { color: white; }
    .nav-dropdown { position: relative; }
    .nav-dropdown-content {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
      min-width: 260px;
      padding: 8px 0;
      z-index: 100;
      border: 1px solid #e2e8f0;
    }
    .nav-dropdown:hover .nav-dropdown-content { display: block; }
    .nav-dropdown-content a {
      display: block;
      padding: 8px 16px;
      color: #1e293b;
      text-decoration: none;
      font-size: 0.88rem;
    }
    .nav-dropdown-content a:hover { background: #fff7ed; color: #ea580c; }
    .btn-login {
      background: #ea580c;
      color: white;
      padding: 7px 18px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.88rem;
      font-family: system-ui, sans-serif;
    }

    /* Sub-bar / Breadcrumbs */
    .ncert-breadcrumb-nav {
      background: #ffffff;
      border-bottom: 1px solid #e2e8f0;
      padding: 10px 24px;
      position: relative;
      z-index: 100;
      box-shadow: 0 1px 3px rgba(0,0,0,0.03);
    }
    .ncert-bc-container {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
    }
    .ncert-bc-list {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      font-size: 0.85rem;
      color: #64748b;
      flex-wrap: wrap;
    }
    .ncert-bc-list a { color: #0f172a; text-decoration: none; font-weight: 600; }
    .ncert-bc-list a:hover { color: #ea580c; text-decoration: underline; }
    .ncert-bc-sep { color: #cbd5e1; font-size: 0.75rem; }
    .ncert-bc-current { color: #ea580c; font-weight: 700; }
    .ncert-bc-switch { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
    .ncert-bc-switch-label { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: #94a3b8; }
    .ncert-bc-pill {
      font-size: 0.78rem;
      font-weight: 700;
      padding: 5px 12px;
      border-radius: 999px;
      text-decoration: none;
      background: #f1f5f9;
      color: #334155;
      border: 1px solid #e2e8f0;
      transition: all 0.18s;
    }
    .ncert-bc-pill:hover, .ncert-bc-pill.active { background: #ea580c; color: white; border-color: #ea580c; }

    /* Chapter Quick-Select Chips Bar */
    .ncert-bc-chips {
      background: #fafaf9;
      border-bottom: 1px solid #e2e8f0;
      padding: 8px 24px;
      position: sticky;
      top: 56px;
      z-index: 90;
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }
    .ncert-bc-chips-inner {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 8px;
      overflow-x: auto;
      scrollbar-width: thin;
      padding: 2px 0;
    }
    .ncert-bc-chips-label {
      font-size: 0.72rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #94a3b8;
      white-space: nowrap;
      margin-right: 4px;
    }
    .bc-chip {
      font-size: 0.76rem;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 6px;
      background: #ffffff;
      color: #475569;
      border: 1px solid #cbd5e1;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      transition: all 0.15s ease;
    }
    .bc-chip:hover {
      background: #ffedd5;
      color: #9a3412;
      border-color: #ea580c;
    }
    .bc-chip.active {
      background: #ea580c;
      color: #ffffff;
      border-color: #ea580c;
      font-weight: 700;
    }
    .bc-chip .bc-n {
      display: inline-block;
      width: 16px;
      height: 16px;
      line-height: 16px;
      background: rgba(0,0,0,0.07);
      border-radius: 50%;
      text-align: center;
      font-size: 0.68rem;
      font-weight: 800;
    }
    .bc-chip.active .bc-n {
      background: rgba(255,255,255,0.25);
      color: #ffffff;
    }

    /* Hero Banner */
    .hero-banner {
      background: linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #ea580c 100%);
      color: white;
      padding: 44px 24px 38px;
      text-align: center;
      box-shadow: inset 0 -1px 0 rgba(255,255,255,0.1);
    }
    .hero-banner h1 {
      font-size: 2.1rem;
      font-weight: 800;
      margin-bottom: 12px;
      letter-spacing: -0.01em;
    }
    .hero-banner p {
      font-size: 1.05rem;
      color: #fed7aa;
      max-width: 860px;
      margin: 0 auto 20px;
      line-height: 1.7;
    }
    .hero-badges {
      display: flex;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
    }
    .hero-badge {
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(8px);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.84rem;
      font-weight: 600;
      border: 1px solid rgba(255,255,255,0.2);
    }

    /* Textbook Switcher Callout Banner */
    .track-callout-wrap {
      max-width: 1400px;
      margin: 20px auto 0;
      padding: 0 24px;
    }
    .track-callout {
      background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
      border: 1.5px solid #fed7aa;
      border-radius: 16px;
      padding: 16px 22px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 14px;
      box-shadow: 0 4px 12px rgba(234,88,12,0.06);
    }
    .track-info-side { display: flex; align-items: center; gap: 12px; }
    .track-info-side .icon { font-size: 1.8rem; }
    .track-title { font-weight: 800; color: #9a3412; font-size: 1rem; }
    .track-sub { font-size: 0.84rem; color: #7c2d12; }
    .track-btns { display: flex; gap: 10px; flex-wrap: wrap; }
    .btn-track {
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 0.84rem;
      font-weight: 700;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .btn-track-active { background: #ea580c; color: white; box-shadow: 0 2px 6px rgba(234,88,12,0.25); }
    .btn-track-outline { background: white; color: #ea580c; border: 1.5px solid #ea580c; }
    .btn-track-outline:hover { background: #fff7ed; }

    /* Layout */
    .main-layout {
      max-width: 1400px;
      margin: 24px auto 60px;
      padding: 0 24px;
      display: grid;
      grid-template-columns: 310px 1fr;
      gap: 32px;
      align-items: start;
    }

    /* Sidebar */
    .sidebar {
      background: white;
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 20px;
      position: sticky;
      top: 110px;
      max-height: calc(100vh - 130px);
      overflow-y: auto;
      box-shadow: var(--shadow-sm);
    }
    .sidebar-title {
      font-size: 0.95rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--navy);
      margin-bottom: 16px;
      padding-bottom: 10px;
      border-bottom: 2px solid #fed7aa;
    }
    .chapter-nav { list-style: none; }
    .chapter-nav li { margin-bottom: 6px; }
    .chapter-nav a {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 14px;
      border-radius: 10px;
      text-decoration: none;
      color: var(--slate);
      font-size: 0.88rem;
      transition: all 0.2s;
      border: 1px solid transparent;
    }
    .chapter-nav a:hover {
      background: var(--primary-light);
      color: var(--primary);
    }
    .chapter-nav a.active {
      background: var(--primary);
      color: white;
      font-weight: 700;
      box-shadow: 0 4px 10px rgba(234,88,12,0.25);
    }
    .chapter-nav a.active .ch-num {
      background: rgba(255,255,255,0.25);
      color: white;
    }
    .chapter-nav a.active small {
      color: #fed7aa !important;
    }
    .ch-num {
      width: 28px;
      height: 28px;
      background: #f1f5f9;
      color: var(--slate);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.82rem;
      flex-shrink: 0;
    }

    /* Chapter Content */
    .main-content { min-width: 0; }
    .chapter-section { display: none; }
    .chapter-section.active { display: block; animation: fadeIn 0.25s ease-in-out; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .chapter-header {
      background: white;
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 26px 30px;
      margin-bottom: 24px;
      box-shadow: var(--shadow-sm);
      display: flex;
      align-items: center;
      gap: 20px;
      border-left: 6px solid var(--primary);
    }
    .ch-badge {
      width: 56px;
      height: 56px;
      background: var(--primary-light);
      color: var(--primary);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      font-weight: 800;
      flex-shrink: 0;
      border: 1.5px solid var(--primary-border);
    }
    .chapter-header-info h2 {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--navy);
      margin-bottom: 4px;
    }
    .chapter-header-info p {
      font-size: 0.92rem;
      color: var(--muted);
      line-height: 1.5;
    }

    /* Concept & Notes Card */
    .concept-card {
      background: #fff7ed;
      border: 1px solid #fed7aa;
      border-radius: 14px;
      padding: 20px 24px;
      margin-bottom: 24px;
    }
    .concept-header {
      font-size: 1rem;
      font-weight: 800;
      color: #9a3412;
      margin-bottom: 12px;
    }
    .concept-list {
      padding-left: 20px;
      font-size: 0.93rem;
      color: #7c2d12;
      line-height: 1.8;
    }
    .concept-list li { margin-bottom: 8px; }

    /* Exercise Separator */
    .ex-div {
      background: #f1f5f9;
      color: var(--navy);
      font-weight: 800;
      font-size: 0.95rem;
      padding: 12px 18px;
      border-radius: 10px;
      margin: 32px 0 18px;
      border-left: 4px solid var(--primary);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* Question Cards */
    .q-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: 14px;
      margin-bottom: 16px;
      box-shadow: var(--shadow-sm);
      overflow: hidden;
      transition: all 0.2s;
    }
    .q-card:hover {
      box-shadow: var(--shadow);
      border-color: #cbd5e1;
    }
    .q-head {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 18px 22px;
      cursor: pointer;
      user-select: none;
    }
    .q-num {
      min-width: 44px;
      height: 36px;
      background: var(--primary);
      color: white;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 0.88rem;
      flex-shrink: 0;
    }
    .q-text {
      flex: 1;
      font-size: 1rem;
      font-weight: 700;
      color: var(--navy);
      line-height: 1.6;
    }
    .q-marks {
      font-size: 0.78rem;
      font-weight: 700;
      color: #9a3412;
      background: var(--primary-light);
      padding: 4px 10px;
      border-radius: 999px;
      white-space: nowrap;
      border: 1px solid var(--primary-border);
    }
    .q-toggle {
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--muted);
      transition: transform 0.2s;
    }
    .q-card.open .q-toggle svg { transform: rotate(180deg); }
    .q-answer {
      display: none;
      border-top: 1px solid var(--border);
      background: #fafaf9;
    }
    .q-card.open .q-answer { display: block; }
    .answer-box { padding: 22px 26px; }
    .answer-label {
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #9a3412;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .answer-text {
      font-size: 0.95rem;
      line-height: 1.85;
      color: var(--slate);
    }
    .answer-text p { margin-bottom: 10px; }
    .answer-text ul, .answer-text ol { padding-left: 24px; margin-bottom: 10px; }
    .answer-text li { margin-bottom: 6px; }
    .step {
      background: white;
      border-left: 3px solid var(--primary);
      padding: 12px 18px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 12px;
      border: 1px solid #f1f5f9;
      border-left-width: 3px;
    }

    /* Marking Scheme */
    .marking-scheme {
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px dashed #cbd5e1;
      background: #f8fafc;
      padding: 14px 16px;
      border-radius: 8px;
    }
    .marking-title {
      font-size: 0.76rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--muted);
      margin-bottom: 10px;
    }
    .marking-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.84rem;
      padding: 5px 0;
      border-bottom: 1px solid #f1f5f9;
    }
    .marking-row:last-child { border-bottom: none; }
    .marking-key { color: var(--slate); font-weight: 500; }
    .marking-marks { font-weight: 700; color: #9a3412; }

    /* Competency Box */
    .cbq-box {
      background: #fff7ed;
      border: 1.5px solid #fed7aa;
      border-radius: 14px;
      padding: 24px;
      margin: 32px 0 20px;
    }
    .cbq-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #ea580c;
      color: white;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 14px;
    }
    .cbq-case {
      background: white;
      padding: 14px 18px;
      border-radius: 8px;
      border-left: 3px solid #ea580c;
      font-size: 0.92rem;
      line-height: 1.7;
      color: #7c2d12;
      margin-bottom: 14px;
    }
    .cbq-question {
      font-size: 0.95rem;
      line-height: 1.75;
      color: var(--navy);
      font-weight: 700;
      margin-bottom: 14px;
    }
    .cbq-show-btn {
      background: #9a3412;
      color: white;
      border: none;
      padding: 7px 16px;
      border-radius: 8px;
      font-size: 0.82rem;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.2s;
    }
    .cbq-show-btn:hover { background: #7c2d12; }
    .cbq-answer {
      display: none;
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px dashed #fed7aa;
      font-size: 0.93rem;
      line-height: 1.8;
      color: #431407;
    }
    .cbq-answer.show { display: block; }

    /* Footer */
    .footer {
      background: var(--navy);
      color: #94a3b8;
      padding: 40px 24px;
      text-align: center;
      font-size: 0.88rem;
      margin-top: 80px;
      border-top: 1px solid #1e293b;
    }
    .footer a { color: #fed7aa; text-decoration: none; font-weight: 600; }
    .footer a:hover { text-decoration: underline; }

    @media (max-width: 1024px) {
      .main-layout { grid-template-columns: 1fr; }
      .sidebar { display: none; }
    }
    @media (max-width: 768px) {
      .navbar-links { display: none; }
      .hero-banner { padding: 36px 16px; }
      .hero-banner h1 { font-size: 1.6rem; }
      .track-callout { flex-direction: column; align-items: flex-start; }
    }
  </style>
</head>
<body>

  <div class="top-progress" id="progressBar"></div>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <img src="favicon.png" alt="OlympiadQuiz Logo" width="32" height="32" style="height:32px;width:auto;">
        <span class="logo-text">Olympiad<span>Quiz</span></span>
      </a>
      <div class="navbar-links">
        <a href="index.html" class="nav-link">Home</a>
        <div class="nav-dropdown">
          <a href="ncert-solutions.html" class="nav-link" style="color:white;font-weight:700;">NCERT Solutions ▾</a>
          <div class="nav-dropdown-content">
            <a href="ncert-solutions.html" style="font-weight:700;color:#ea580c;">📚 All NCERT Hub (2026-27)</a>
            <a href="ncert-solutions-class-6.html" style="font-weight:700;color:#1e40af;">🎓 Class 6 Portal (All Subjects)</a>
            <a href="ncert-solutions-class-6-maths.html">Class 6 Maths 📐</a>
            <a href="ncert-solutions-class-6-science.html">Class 6 Science 🔬</a>
            <a href="ncert-solutions-class-6-sst.html">Class 6 Social Science 🌍</a>
            <a href="ncert-solutions-class-6-english.html">Class 6 English 📖</a>
            <a href="ncert-solutions-class-6-hindi-malhar.html" style="font-weight:700;color:#ea580c;background:#fff7ed;">Class 6 Hindi (मल्हार - Active)</a>
            <a href="ncert-solutions-class-6-hindi.html">Class 6 Hindi (वसन्त भाग-1)</a>
            <a href="ncert-solutions-class-6-sanskrit.html">Class 6 Sanskrit 🕉️</a>
          </div>
        </div>
        <a href="blog.html" class="nav-link">Guides &amp; Blog</a>
      </div>
      <div class="navbar-actions">
        <a href="login.html" class="btn-login">Login</a>
      </div>
    </div>
  </nav>

  <!-- Breadcrumb Sub-bar with Subject Switcher -->
  <nav class="ncert-breadcrumb-nav" aria-label="Breadcrumb">
    <div class="ncert-bc-container">
      <ol class="ncert-bc-list">
        <li><a href="index.html">Home</a></li>
        <li class="ncert-bc-sep">/</li>
        <li><a href="ncert-solutions.html">NCERT Solutions</a></li>
        <li class="ncert-bc-sep">/</li>
        <li><a href="ncert-solutions-class-6.html">Class 6</a></li>
        <li class="ncert-bc-sep">/</li>
        <li class="ncert-bc-current">Hindi (मल्हार - Malhar)</li>
      </ol>
      <div class="ncert-bc-switch">
        <span class="ncert-bc-switch-label">Switch Subject:</span>
        <a href="ncert-solutions-class-6-maths.html" class="ncert-bc-pill">Maths</a>
        <a href="ncert-solutions-class-6-science.html" class="ncert-bc-pill">Science</a>
        <a href="ncert-solutions-class-6-sst.html" class="ncert-bc-pill">Social Science</a>
        <a href="ncert-solutions-class-6-english.html" class="ncert-bc-pill">English</a>
        <a href="ncert-solutions-class-6-hindi-malhar.html" class="ncert-bc-pill active">Hindi (Malhar)</a>
        <a href="ncert-solutions-class-6-hindi.html" class="ncert-bc-pill">Hindi (Vasant)</a>
        <a href="ncert-solutions-class-6-sanskrit.html" class="ncert-bc-pill">Sanskrit</a>
        <a href="ncert-solutions-class-6.html" class="ncert-bc-pill">All Class 6 Hub</a>
      </div>
    </div>
  </nav>

  <!-- Chapter Quick-Select Chips Bar -->
  <div class="ncert-bc-chips">
    <div class="ncert-bc-chips-inner">
      <span class="ncert-bc-chips-label">पाठ (Chapters):</span>
${chipsHtml}
    </div>
  </div>

  <!-- Hero Banner -->
  <header class="hero-banner">
    <h1>कक्षा 6 हिंदी — मल्हार (NCERT समाधान 2026-27)</h1>
    <p>राष्ट्रीय शिक्षा नीति (NEP 2020) के नए पाठ्यक्रम पर आधारित <strong>संपूर्ण 13 अध्यायों</strong> के आधिकारिक पाठ्यपुस्तक प्रश्नोत्तर, काव्यांश भावार्थ, शब्द-सामर्थ्य, भाषा की बात (व्याकरण), CBSE स्टेप-मार्किंग स्कीम एवं योग्यता-आधारित प्रश्न (CBQs)।</p>
    <div class="hero-badges">
      <span class="hero-badge">📘 मल्हार (Malhar) NEP 2020</span>
      <span class="hero-badge">📖 संपूर्ण 13 अध्याय</span>
      <span class="hero-badge">🎯 100% NCERT अभ्यास कवरेज</span>
      <span class="hero-badge">📊 CBSE मार्किंग रूब्रिक्स 2026-27</span>
      <span class="hero-badge">⚡ योग्यता-आधारित प्रश्न (CBQs)</span>
    </div>
  </header>

  <!-- Track Selector Callout -->
  <div class="track-callout-wrap">
    <div class="track-callout">
      <div class="track-info-side">
        <span class="icon">📚</span>
        <div>
          <div class="track-title">कक्षा 6 हिंदी पाठ्यपुस्तक चयन (Choose Hindi Track)</div>
          <div class="track-sub">वर्तमान में आप <strong>मल्हार (NEP 2020 नया पाठ्यक्रम)</strong> देख रहे हैं। वसन्त भाग-1 का समाधान भी उपलब्ध है।</div>
        </div>
      </div>
      <div class="track-btns">
        <a href="ncert-solutions-class-6-hindi-malhar.html" class="btn-track btn-track-active">📘 मल्हार (13 पाठ - सक्रिय)</a>
        <a href="ncert-solutions-class-6-hindi.html" class="btn-track btn-track-outline">📗 वसन्त भाग-1 (17 पाठ देखें) →</a>
      </div>
    </div>
  </div>

  <!-- Main Content Layout -->
  <div class="main-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-title">मल्हार — 13 अध्याय</div>
      <ul class="chapter-nav">
${sidebarHtml}
      </ul>
    </aside>

    <!-- Main Content Area -->
    <main class="main-content">
${Object.values(allChapters).join('\n\n')}
    </main>
  </div>

  <!-- Footer -->
  <footer class="footer">
    <p>© 2026-27 OlympiadQuiz. Official CBSE/NCERT Class 6 Solutions Portal.</p>
    <p style="margin-top: 8px;">
      <a href="ncert-solutions-class-6.html">Class 6 All Subjects</a> • 
      <a href="ncert-solutions-class-6-maths.html">Maths</a> • 
      <a href="ncert-solutions-class-6-science.html">Science</a> • 
      <a href="ncert-solutions-class-6-sst.html">Social Science</a> • 
      <a href="ncert-solutions-class-6-english.html">English</a> • 
      <a href="ncert-solutions-class-6-hindi.html">Hindi (Vasant)</a> • 
      <a href="ncert-solutions-class-6-sanskrit.html">Sanskrit</a>
    </p>
  </footer>

  <script>
    // Chapter Switching Logic
    function showChapter(chNum) {
      document.querySelectorAll('.chapter-section').forEach(sec => sec.classList.remove('active'));
      const targetSec = document.getElementById('ch' + chNum);
      if (targetSec) {
        targetSec.classList.add('active');
        window.scrollTo({ top: targetSec.offsetTop - 120, behavior: 'smooth' });
      }

      document.querySelectorAll('.sidebar .chapter-nav a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('data-ch') == chNum);
      });
      document.querySelectorAll('.ncert-bc-chips .bc-chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-ch') == chNum);
      });
    }

    // Toggle Individual Question Accordions
    function toggleQ(qId) {
      const q = document.getElementById(qId);
      if (q) q.classList.toggle('open');
    }

    // Toggle CBQ Answer
    function toggleCbq(cbqId) {
      const ans = document.getElementById(cbqId);
      if (ans) ans.classList.toggle('show');
    }

    // Reading Progress Bar
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('progressBar').style.width = scrolled + '%';
    });

    // Default activate Chapter 1
    document.addEventListener('DOMContentLoaded', () => {
      showChapter(1);
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '..', 'ncert-solutions-class-6-hindi-malhar.html'), html, 'utf8');
console.log('Successfully generated ncert-solutions-class-6-hindi-malhar.html with all 13 chapters of Malhar!');
