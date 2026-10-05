// Generator script for master hub: ncert-solutions-class-10-sanskrit.html
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const ch1Path = path.join(rootDir, 'chapters-c10sk', 'ch1.html');
const ch1Html = fs.readFileSync(ch1Path, 'utf8');

const { PART1_CHAPTERS } = require('./data-c10sk-part1');
const { PART2_CHAPTERS } = require('./data-c10sk-part2');
const ALL_CHAPTERS = { ...PART1_CHAPTERS, ...PART2_CHAPTERS };

const chaptersList = [
  { num: 1, title: "शुचिपर्यावरणम्", sub: "प्रथमः पाठः • पद्यभागः (लसलल्लतिका)", cat: "poetry", badge: "१" },
  { num: 2, title: "बुद्धिर्बलवती सदा", sub: "द्वितीयः पाठः • गद्यभागः (शुकसप्ततिः)", cat: "prose", badge: "२" },
  { num: 3, title: "व्यायामः सर्वदा पथ्यः", sub: "तृतीयः पाठः • पद्यभागः (सुश्रुतसंहिता)", cat: "poetry", badge: "३" },
  { num: 4, title: "शिशुलालनम्", sub: "चतुर्थः पाठः • नाटकम् (कुन्दमाला)", cat: "drama", badge: "४" },
  { num: 5, title: "जननी तुल्यवत्सला", sub: "पञ्चमः पाठः • गद्यभागः (महाभारतम्)", cat: "prose", badge: "५" },
  { num: 6, title: "सुभाषितानि", sub: "षष्ठः पाठः • पद्यभागः (नीतिश्लोकाः)", cat: "poetry", badge: "६" },
  { num: 7, title: "सौहार्दं प्रकृतेः शोभा", sub: "सप्तमः पाठः • नाटकम् (संवादः)", cat: "drama", badge: "७" },
  { num: 8, title: "विचित्रः साक्षी", sub: "अष्टमः पाठः • गद्यभागः (कथा)", cat: "prose", badge: "८" },
  { num: 9, title: "सूक्तयः", sub: "नवमः पाठः • पद्यभागः (तिरुक्कुरल्)", cat: "poetry", badge: "९" },
  { num: 10, title: "भूकम्पविभीषिका", sub: "दशमः पाठः • गद्यभागः (निबन्धः)", cat: "prose", badge: "१०" },
  { num: 11, title: "प्राणेभ्योऽपि प्रियः सुहृद्", sub: "एकादशः पाठः • नाटकम् (मुद्राराक्षसम्)", cat: "drama", badge: "११" },
  { num: 12, title: "अन्योक्तयः", sub: "द्वादशः पाठः • पद्यभागः (भामिनीविलासः)", cat: "poetry", badge: "१२" }
];

let navItemsHtml = '';
let bcChipsHtml = '';

chaptersList.forEach((ch, idx) => {
  const activeClass = ch.num === 1 ? ' active' : '';
  navItemsHtml += `        <li data-cat="${ch.cat}"><a href="#ch${ch.num}" class="nav-ch-link${activeClass}" onclick="showChapter(${ch.num}); return false;"><span class="ch-num">${ch.badge}</span><div class="nav-ch-info"><span class="nav-ch-title">${ch.title}</span><span class="nav-ch-sub">${ch.sub}</span></div></a></li>\n`;
  bcChipsHtml += `      <div class="bc-chip${activeClass}" data-ch="${ch.num}" data-cat="${ch.cat}" onclick="showChapter(${ch.num})"><span class="bc-n">${ch.badge}</span> ${ch.title}</div>\n`;
});

const hubHtml = `<!DOCTYPE html>
<html lang="sa" dir="ltr">
<head>
  <title>NCERT Solutions for Class 10 Sanskrit (शेमुषी भाग-२) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="Complete NCERT Solutions for Class 10 Sanskrit Shemushi Bhag-2 (Code 122). 100% textbook exercises, CBSE word limits, step-by-step marking rubrics, and competency questions.">
  <meta name="keywords" content="ncert solutions class 10 sanskrit, shemushi bhag 2 solutions, cbse class 10 sanskrit question answers, class 10 sanskrit marking scheme, ncert sanskrit class 10 2026-27">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-10-sanskrit.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph / Social Sharing -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-10-sanskrit.html">
  <meta property="og:title" content="NCERT Solutions for Class 10 Sanskrit (शेमुषी भाग-२) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="Complete NCERT Solutions for Class 10 Sanskrit Shemushi Bhag-2 (Code 122). 100% textbook exercises, CBSE word limits, step-by-step marking rubrics, and competency questions.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 10 Sanskrit (शेमुषी भाग-२) CBSE 2026-27 | OlympiadQuiz">
  <meta name="twitter:description" content="Complete NCERT Solutions for Class 10 Sanskrit Shemushi Bhag-2 (Code 122). 100% textbook exercises, CBSE word limits, step-by-step marking rubrics, and competency questions.">
  <meta name="twitter:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Search Engine Crawling -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

  <!-- Schema.org BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://olympiadquiz.org/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "NCERT Solutions",
        "item": "https://olympiadquiz.org/ncert-solutions.html"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Class 10",
        "item": "https://olympiadquiz.org/ncert-solutions.html#class10"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Sanskrit (शेमुषी भाग - २)",
        "item": "https://olympiadquiz.org/ncert-solutions-class-10-sanskrit.html"
      }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 10 Sanskrit (शेमुषी भाग-२) CBSE 2026-27 | OlympiadQuiz",
    "description": "Comprehensive Class 10 Sanskrit NCERT Solutions for Shemushi Bhag-2 (Code 122). 100% textbook exercises, step-by-step CBSE marking schemes & competency questions with word limits.",
    "educationalLevel": "CBSE Class 10",
    "learningResourceType": "Textbook Solutions",
    "inLanguage": ["sa", "hi"],
    "publisher": {
      "@type": "Organization",
      "name": "OlympiadQuiz",
      "url": "https://olympiadquiz.org/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://olympiadquiz.org/favicon.png"
      }
    }
  }
  </script>

  <!-- Schema.org FAQPage for Google Rich Snippets -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are these Class 10 Sanskrit solutions strictly aligned with the CBSE 2026-27 Board Exam syllabus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all 12 chapters of Shemushi Dwitiyo Bhagah (शेमुषी भाग-२) strictly follow the latest CBSE Class 10 Sanskrit (Subject Code 122) curriculum and NCERT rationalized guidelines for the 2026-27 board exams."
        }
      },
      {
        "@type": "Question",
        "name": "Do these solutions specify word limits as per the official CBSE Sanskrit marking scheme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every question explicitly details the prescribed CBSE word limits: 'एकपदेन उत्तरत' (1-2 words), 'पूर्णवाक्येन उत्तरत' (10-20 words), 'प्रश्ननिर्माणम्' (replacing underlined words with correct Kim pronouns and '?'), and 'अन्वय-भावार्थ' completion."
        }
      },
      {
        "@type": "Question",
        "name": "Are Hindi translations and step-by-step mark allocations provided for every question?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, each question contains model Sanskrit answers along with clear Hindi translations (सरलार्थ) and itemized CBSE step marking rubrics showing marks for correct vibhakti, sentence concord, and spelling."
        }
      },
      {
        "@type": "Question",
        "name": "Are Competency-Based Questions (CBQs) and HOTS included for Class 10 Sanskrit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, each chapter features competency-based analytical problems, ethical value-based dilemmas, and critical thinking questions aligned with NEP 2020."
        }
      },
      {
        "@type": "Question",
        "name": "Is registration or subscription required to access these Class 10 Sanskrit solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, all solutions on OlympiadQuiz are 100% free with instant access and no login or subscription required."
        }
      }
    ]
  }
  </script>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --brand: #7c3aed;
      --brand-hover: #6d28d9;
      --brand-light: #f5f3ff;
      --brand-text: #5b21b6;
      --brand-gold: #d97706;
      --gold-light: #fef3c7;
      --navy: #0f172a;
      --slate: #334155;
      --muted: #64748b;
      --light-bg: #f8fafc;
      --border: #e2e8f0;
      --shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      --shadow-hover: 0 10px 15px -3px rgba(0,0,0,0.1);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', 'Noto Sans Devanagari', sans-serif; background: var(--light-bg); color: var(--slate); line-height: 1.6; }
    .devanagari { font-family: 'Noto Sans Devanagari', sans-serif; }
    .top-progress { position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, #7c3aed, #d97706); z-index: 1000; transition: width .1s; }

    /* NAVBAR */
    .navbar { background: #0f172a; border-bottom: 1px solid rgba(255,255,255,0.08); position: sticky; top: 0; z-index: 900; }
    .navbar-inner { max-width: 1380px; margin: 0 auto; padding: 0 24px; height: 60px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .navbar-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
    .logo-text { font-size: 1.15rem; font-weight: 800; color: white; }
    .logo-text span { color: #a78bfa; }
    .navbar-links { display: flex; align-items: center; gap: 8px; }
    .nav-link { color: #94a3b8; font-size: 0.85rem; font-weight: 600; padding: 6px 12px; border-radius: 8px; text-decoration: none; transition: 0.2s; display: flex; align-items: center; gap: 4px; }
    .nav-link:hover, .nav-link.active { color: white; background: rgba(255,255,255,0.06); }
    .nav-dropdown { position: relative; }
    .nav-dropdown:hover .nav-dropdown-content { display: block !important; }
    .nav-dropdown-content { display: none; position: absolute; top: 100%; left: 0; background: #0f172a; border: 1px solid #1e293b; border-radius: 12px; min-width: 220px; box-shadow: 0 16px 36px rgba(0,0,0,0.3); z-index: 1000; padding: 8px 0; }
    .nav-dropdown-content a { display: block; padding: 10px 18px; color: #e2e8f0; text-decoration: none; font-size: 0.85rem; font-weight: 600; transition: 0.2s; }
    .nav-dropdown-content a:hover { background: rgba(124,58,237,0.15); color: #c4b5fd; }
    .btn-dashboard-nav { background: #7c3aed; color: white; font-size: 0.82rem; font-weight: 700; padding: 8px 18px; border-radius: 8px; text-decoration: none; transition: 0.2s; display: inline-flex; }
    .btn-dashboard-nav:hover { background: #6d28d9; }
    .navbar-toggle { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
    .navbar-toggle span { display: block; width: 22px; height: 2px; background: #cbd5e1; border-radius: 2px; }

    /* HERO */
    .hero-banner { background: linear-gradient(135deg, #0f172a 0%, #3b0764 55%, #581c87 100%); color: white; padding: 44px 24px 36px; text-align: center; border-bottom: 3px solid #7c3aed; position: relative; }
    .hero-badge-pill { display: inline-flex; align-items: center; gap: 8px; background: rgba(124,58,237,0.25); border: 1px solid rgba(196,181,253,0.35); padding: 5px 16px; border-radius: 999px; font-size: 0.8rem; font-weight: 700; color: #e9d5ff; margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.05em; }
    .pulse-dot { width: 8px; height: 8px; border-radius: 50%; background: #34d399; box-shadow: 0 0 0 0 rgba(52,211,153,0.7); animation: pulse 2s infinite; }
    @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(52,211,153,0.7); } 70% { box-shadow: 0 0 0 8px rgba(52,211,153,0); } 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0); } }
    .hero-banner h1 { font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 800; margin-bottom: 10px; font-family: 'Noto Sans Devanagari', 'Inter', sans-serif; letter-spacing: -0.02em; }
    .hero-banner h1 span { color: #facc15; }
    .hero-banner p { color: #e9d5ff; font-size: 0.96rem; max-width: 780px; margin: 0 auto 20px; line-height: 1.6; }
    .hero-stats { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; margin-top: 14px; }
    .hero-stat-chip { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); padding: 6px 14px; border-radius: 20px; font-size: 0.82rem; font-weight: 600; color: #f1f5f9; display: flex; align-items: center; gap: 6px; }

    /* WORD LIMIT GUIDE BANNER */
    .word-limit-card { max-width: 1380px; margin: -20px auto 24px; padding: 0 24px; }
    .word-limit-inner { background: white; border: 1.5px solid #e9d5ff; border-radius: 16px; padding: 18px 24px; box-shadow: 0 8px 20px rgba(124,58,237,0.08); display: flex; flex-direction: column; gap: 12px; }
    .wlc-header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px; }
    .wlc-title { font-size: 0.95rem; font-weight: 800; color: #5b21b6; display: flex; align-items: center; gap: 8px; font-family: 'Noto Sans Devanagari', sans-serif; }
    .wlc-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 12px; }
    .wlc-item { background: #faf5ff; border: 1px solid #ede9fe; border-radius: 10px; padding: 10px 14px; }
    .wlc-item-type { font-size: 0.8rem; font-weight: 700; color: #6b21a8; font-family: 'Noto Sans Devanagari', sans-serif; }
    .wlc-item-limit { font-size: 0.85rem; font-weight: 800; color: #d97706; margin-top: 2px; }
    .wlc-item-rubric { font-size: 0.75rem; color: #64748b; margin-top: 3px; }

    /* BREADCRUMB CHIPS BAR */
    .breadcrumb-bar { background: white; border-bottom: 1px solid var(--border); padding: 12px 24px; position: sticky; top: 60px; z-index: 800; box-shadow: 0 2px 8px rgba(0,0,0,0.04); overflow-x: auto; }
    .breadcrumb-inner { max-width: 1380px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
    .filter-pills { display: flex; gap: 6px; }
    .filter-tab { padding: 5px 12px; border-radius: 8px; font-size: 0.78rem; font-weight: 700; border: 1.5px solid var(--border); background: #f8fafc; color: var(--slate); cursor: pointer; transition: 0.2s; font-family: 'Noto Sans Devanagari', sans-serif; }
    .filter-tab:hover { border-color: var(--brand); color: var(--brand-text); }
    .filter-tab.active { background: var(--brand); color: white; border-color: var(--brand); }
    .breadcrumb-chips { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 2px; }
    .bc-chip { display: inline-flex; align-items: center; gap: 6px; padding: 4px 11px; border-radius: 20px; font-size: 0.78rem; font-weight: 600; cursor: pointer; border: 1.5px solid var(--border); background: #f8fafc; color: var(--slate); transition: 0.18s; white-space: nowrap; font-family: 'Noto Sans Devanagari', sans-serif; }
    .bc-chip:hover { border-color: var(--brand); color: var(--brand-text); background: var(--brand-light); transform: translateY(-1px); }
    .bc-chip.active { background: var(--brand); color: white; border-color: var(--brand); box-shadow: 0 3px 8px rgba(124,58,237,0.3); }
    .bc-chip .bc-n { display: inline-flex; align-items: center; justify-content: center; width: 17px; height: 17px; background: rgba(0,0,0,0.12); border-radius: 50%; font-size: 0.68rem; font-weight: 800; }
    .bc-chip.active .bc-n { background: rgba(255,255,255,0.25); }

    /* LAYOUT */
    .main-layout { display: flex; max-width: 1380px; margin: 0 auto; min-height: calc(100vh - 180px); }
    .sidebar { width: 320px; background: white; border-right: 1px solid var(--border); padding: 20px 16px; position: sticky; top: 122px; height: calc(100vh - 122px); overflow-y: auto; flex-shrink: 0; }
    .sidebar-header { margin-bottom: 14px; }
    .sidebar-title { font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: var(--muted); letter-spacing: 0.06em; margin-bottom: 10px; }
    .search-box { width: 100%; padding: 9px 12px; border: 1px solid var(--border); border-radius: 8px; font-size: 0.82rem; font-family: inherit; margin-bottom: 12px; }
    .search-box:focus { outline: none; border-color: var(--brand); box-shadow: 0 0 0 3px rgba(124,58,237,0.12); }
    .chapter-nav { list-style: none; display: flex; flex-direction: column; gap: 4px; }
    .chapter-nav li a { display: flex; align-items: center; gap: 10px; padding: 9px 12px; border-radius: 8px; color: var(--slate); text-decoration: none; font-size: 0.82rem; font-weight: 600; transition: 0.15s; cursor: pointer; }
    .chapter-nav li a:hover { background: var(--brand-light); color: var(--brand-text); }
    .chapter-nav li a.active { background: var(--brand); color: white; }
    .ch-num { width: 24px; height: 24px; background: rgba(0,0,0,0.06); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 800; flex-shrink: 0; }
    .chapter-nav li a.active .ch-num { background: rgba(255,255,255,0.25); color: white; }
    .nav-ch-info { display: flex; flex-direction: column; min-width: 0; }
    .nav-ch-title { font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-family: 'Noto Sans Devanagari', sans-serif; }
    .nav-ch-sub { font-size: 0.7rem; color: var(--muted); font-weight: 500; }
    .chapter-nav li a.active .nav-ch-sub { color: #e9d5ff; }

    /* MAIN CONTENT */
    .main-content { flex: 1; padding: 24px 32px 48px; min-width: 0; }
    .chapter-section { margin-bottom: 40px; }
    .chapter-header { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 22px; padding-bottom: 18px; border-bottom: 2px solid var(--border); }
    .ch-badge { width: 50px; height: 50px; background: linear-gradient(135deg, #7c3aed, #5b21b6); color: white; border-radius: 14px; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(124,58,237,0.25); font-family: 'Noto Sans Devanagari', sans-serif; }
    .chapter-header-info h2 { font-size: 1.45rem; font-weight: 800; color: var(--navy); font-family: 'Noto Sans Devanagari', sans-serif; }
    .ch-category { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--brand); letter-spacing: 0.05em; margin-bottom: 4px; }
    .ch-author { font-size: 0.85rem; color: var(--muted); margin-top: 3px; }

    /* THEME CARD */
    .theme-card { background: white; border: 1.5px solid #ede9fe; border-radius: 14px; margin-bottom: 22px; overflow: hidden; box-shadow: var(--shadow); }
    .theme-header { background: #f5f3ff; padding: 12px 18px; display: flex; align-items: center; gap: 8px; font-size: 0.85rem; font-weight: 800; color: #5b21b6; border-bottom: 1px solid #ede9fe; font-family: 'Noto Sans Devanagari', sans-serif; }
    .theme-body { padding: 16px 20px; font-size: 0.92rem; line-height: 1.7; color: var(--slate); font-family: 'Noto Sans Devanagari', 'Inter', sans-serif; }

    /* EXERCISE DIVIDER */
    .ex-div { background: linear-gradient(90deg, #faf5ff, #ffffff); border-left: 4px solid var(--brand); padding: 10px 16px; border-radius: 0 8px 8px 0; font-size: 0.88rem; font-weight: 800; color: var(--navy); margin: 26px 0 16px; font-family: 'Noto Sans Devanagari', sans-serif; }

    /* Q CARDS */
    .q-card { background: white; border: 1px solid var(--border); border-radius: 14px; margin-bottom: 18px; box-shadow: var(--shadow); transition: all 0.2s; overflow: hidden; }
    .q-card:hover { border-color: #c4b5fd; box-shadow: var(--shadow-hover); }
    .q-head { padding: 16px 20px; display: flex; align-items: flex-start; gap: 14px; cursor: pointer; user-select: none; background: white; }
    .q-head-left { display: flex; flex-direction: column; gap: 4px; flex-shrink: 0; }
    .q-num { background: var(--brand-light); color: var(--brand-text); font-weight: 800; font-size: 0.78rem; padding: 4px 10px; border-radius: 6px; font-family: 'Noto Sans Devanagari', sans-serif; }
    .word-limit-pill { background: #fef3c7; color: #92400e; font-size: 0.68rem; font-weight: 700; padding: 2px 7px; border-radius: 4px; border: 1px solid #fde68a; }
    .q-text { flex: 1; font-weight: 600; color: var(--navy); font-size: 0.94rem; line-height: 1.6; font-family: 'Noto Sans Devanagari', 'Inter', sans-serif; }
    .q-marks { background: #f1f5f9; color: #475569; font-size: 0.74rem; font-weight: 700; padding: 4px 10px; border-radius: 12px; flex-shrink: 0; white-space: nowrap; }
    .q-toggle { color: var(--muted); transition: transform 0.2s; flex-shrink: 0; margin-top: 4px; }
    .q-toggle svg { width: 18px; height: 18px; }
    .q-card.open .q-toggle { transform: rotate(45deg); color: var(--brand); }
    .q-answer { display: none; padding: 0 18px 20px; border-top: 1.5px dashed #ede9fe; }
    .q-card.open .q-answer { display: block; }
    .answer-box { border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 20px; margin-top: 14px; background: #fafafa; }
    .answer-label { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: #059669; letter-spacing: 0.04em; margin-bottom: 12px; display: flex; align-items: center; gap: 6px; font-family: 'Noto Sans Devanagari', sans-serif; }
    .answer-text { font-size: 0.93rem; color: #1e293b; line-height: 1.75; font-family: 'Noto Sans Devanagari', 'Inter', sans-serif; }
    .ans-highlight { color: #5b21b6; font-weight: 800; background: #f5f3ff; padding: 1px 6px; border-radius: 4px; }
    .hi-trans { margin-top: 12px; padding: 10px 14px; background: #f8fafc; border-left: 3px solid #0284c7; border-radius: 0 8px 8px 0; font-size: 0.88rem; color: #334155; }

    /* MARKING SCHEME */
    .marking-scheme { margin-top: 16px; border-top: 1px solid #e2e8f0; padding-top: 12px; }
    .marking-title { font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: #7c3aed; letter-spacing: 0.04em; margin-bottom: 8px; font-family: 'Noto Sans Devanagari', sans-serif; }
    .marking-row { display: flex; justify-content: space-between; align-items: center; padding: 5px 0; font-size: 0.8rem; border-bottom: 1px dashed #f1f5f9; }
    .marking-row:last-child { border-bottom: none; }
    .marking-key { color: #475569; font-weight: 500; font-family: 'Noto Sans Devanagari', sans-serif; }
    .marking-marks { font-weight: 700; color: #059669; background: #ecfdf5; padding: 2px 7px; border-radius: 4px; }

    /* CBQ SECTION */
    .cbq-section { margin-top: 24px; border: 1.5px solid #ede9fe; border-radius: 14px; overflow: hidden; background: white; margin-bottom: 24px; box-shadow: var(--shadow); }
    .cbq-header { background: #f5f3ff; padding: 12px 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #ede9fe; font-size: 0.86rem; font-weight: 800; color: #5b21b6; font-family: 'Noto Sans Devanagari', sans-serif; }
    .cbq-badge { background: #7c3aed; color: white; font-size: 0.7rem; font-weight: 700; padding: 3px 8px; border-radius: 6px; }
    .cbq-body { padding: 16px 20px; display: flex; flex-direction: column; gap: 14px; }
    .cbq-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 16px; }
    .cbq-type { font-size: 0.76rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 6px; }
    .cbq-question { font-size: 0.9rem; font-weight: 600; color: var(--navy); line-height: 1.6; margin-bottom: 10px; font-family: 'Noto Sans Devanagari', 'Inter', sans-serif; }
    .cbq-show-btn { background: white; border: 1.5px solid #cbd5e1; border-radius: 6px; padding: 5px 12px; font-size: 0.78rem; font-weight: 700; color: var(--slate); cursor: pointer; transition: 0.15s; font-family: inherit; }
    .cbq-show-btn:hover { background: #f1f5f9; border-color: var(--brand); color: var(--brand); }
    .cbq-answer { display: none; margin-top: 10px; padding-top: 10px; border-top: 1px dashed #cbd5e1; font-size: 0.88rem; color: #334155; line-height: 1.7; font-family: 'Noto Sans Devanagari', 'Inter', sans-serif; }
    .cbq-answer.open { display: block; }

    /* CHAPTER NAV BUTTONS */
    .chapter-nav-btns { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 36px; padding-top: 20px; border-top: 2px solid var(--border); }
    .ch-nav-btn { background: white; border: 1.5px solid var(--border); padding: 10px 18px; border-radius: 10px; font-size: 0.85rem; font-weight: 700; color: var(--slate); cursor: pointer; transition: 0.2s; font-family: 'Noto Sans Devanagari', sans-serif; }
    .ch-nav-btn:hover { border-color: var(--brand); color: var(--brand-text); background: var(--brand-light); }
    .ch-nav-btn.next { background: var(--brand); color: white; border-color: var(--brand); }
    .ch-nav-btn.next:hover { background: var(--brand-hover); }

    /* RESPONSIVE & MOBILE */
    .mobile-nav-trigger { display: none; position: fixed; bottom: 20px; right: 20px; background: var(--brand); color: white; border: none; border-radius: 50%; width: 52px; height: 52px; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(124,58,237,0.4); z-index: 950; cursor: pointer; }
    .sidebar-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 920; }
    .sidebar-overlay.show { display: block; }

    @media (max-width: 900px) {
      .sidebar { position: fixed; top: 0; left: 0; bottom: 0; width: 300px; height: 100vh; z-index: 930; transform: translateX(-100%); transition: transform 0.25s ease; box-shadow: 4px 0 24px rgba(0,0,0,0.15); }
      .sidebar.open { transform: translateX(0); }
      .mobile-nav-trigger { display: flex; }
      .main-content { padding: 20px 16px 40px; }
      .navbar-links { display: none; }
      .navbar-toggle { display: flex; }
      .hero-banner h1 { font-size: 1.5rem; }
    }
  </style>
</head>
<body>

<div class="top-progress" id="progressBar"></div>

<!-- NAVBAR -->
<nav class="navbar">
  <div class="navbar-inner">
    <a href="index.html" class="navbar-logo">
      <img src="favicon.png" alt="OlympiadQuiz Logo" width="30" height="30" style="height:30px;width:auto;" loading="lazy">
      <span class="logo-text">Olympiad<span>Quiz</span></span>
    </a>
    <div class="navbar-links" id="navLinks">
      <a href="index.html" class="nav-link">Home</a>
      <div class="nav-dropdown">
        <a href="ncert-solutions.html" class="nav-link active">NCERT Solutions <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></a>
        <div class="nav-dropdown-content">
          <a href="ncert-solutions.html" style="font-weight:700;color:#a78bfa;">📚 All NCERT Hub</a>
          <a href="ncert-solutions.html#class7">Class 7 Solutions</a>
          <a href="ncert-solutions.html#class8">Class 8 Solutions</a>
          <a href="ncert-solutions.html#class9">Class 9 Solutions</a>
          <a href="ncert-solutions.html#class10">Class 10 Solutions</a>
          <a href="ncert-solutions-class-10-sanskrit.html" style="color:#d97706;font-weight:700;">🕉️ Class 10 Sanskrit</a>
          <a href="ncert-solutions-class-10-english.html">Class 10 English (184)</a>
          <a href="ncert-solutions-class-10-english-communicative.html">Class 10 English (101)</a>
          <a href="ncert-solutions-class-10-maths.html">Class 10 Mathematics</a>
          <a href="ncert-solutions-class-10-science.html">Class 10 Science</a>
          <a href="ncert-solutions-class-10-social-science.html">Class 10 Social Science</a>
        </div>
      </div>
      <a href="mock.html" class="nav-link">Mock Tests</a>
      <a href="dashboard.html" class="nav-link">Dashboard</a>
    </div>
    <div class="navbar-actions">
      <a href="dashboard.html" class="btn-dashboard-nav">Dashboard</a>
      <button class="navbar-toggle" id="mobile-menu-toggle" aria-label="Toggle Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<!-- HERO -->
<header class="hero-banner">
  <div class="hero-badge-pill">
    <span class="pulse-dot"></span>
    सीबीएसई बोर्ड परीक्षा 2026-27 • 100% सटीक समाधान
  </div>
  <h1>कक्षा 10 संस्कृत <span>(शेमुषी भाग - २)</span> NCERT Solutions</h1>
  <p>सीबीएसई पाठ्यक्रम (विषय कोड: 122) आधारित सभी 12 पाठों के 100% अभ्यास प्रश्नोत्तर, शब्द-सीमा दिशानिर्देश, चरणबद्ध अंक-योजना एवं योग्यता-आधारित प्रश्न।</p>
  <div class="hero-stats">
    <div class="hero-stat-chip">📚 12 / 12 पाठाः (100% Coverage)</div>
    <div class="hero-stat-chip">✍️ एकपदेन एवं पूर्णवाक्येन शब्द-सीमा</div>
    <div class="hero-stat-chip">📋 CBSE Step-Marking Rubrics</div>
    <div class="hero-stat-chip">🎯 NEP 2020 Competency Qs</div>
  </div>
</header>

<!-- WORD LIMIT & BLUEPRINT GUIDE CARD -->
<div class="word-limit-card">
  <div class="word-limit-inner">
    <div class="wlc-header">
      <div class="wlc-title">
        <span>📝</span> सीबीएसई बोर्ड परीक्षा 2026-27 शब्द-सीमा एवं अंक-विभाजन निर्देशिका (CBSE Marking Rubrics)
      </div>
      <span style="font-size:0.75rem;font-weight:700;color:#6b21a8;background:#f3e8ff;padding:3px 10px;border-radius:999px;">Code: 122 संस्कृतम्</span>
    </div>
    <div class="wlc-grid">
      <div class="wlc-item">
        <div class="wlc-item-type">एकपदेन उत्तरत (अतिलघुत्तरात्मक)</div>
        <div class="wlc-item-limit">शब्द-सीमा: १ - २ शब्दाः</div>
        <div class="wlc-item-rubric">सटीक पदम् एवं शुद्ध विभक्ति-प्रयोगः (अंक: १/२ - १)</div>
      </div>
      <div class="wlc-item">
        <div class="wlc-item-type">पूर्णवाक्येन उत्तरत (लघुत्तरात्मक)</div>
        <div class="wlc-item-limit">शब्द-सीमा: १० - २० शब्दाः</div>
        <div class="wlc-item-rubric">शुद्ध-कर्तृ-कर्म-क्रिया-अन्वयः (अंक: १ - २)</div>
      </div>
      <div class="wlc-item">
        <div class="wlc-item-type">प्रश्ननिर्माणम् (वाक्यरचना)</div>
        <div class="wlc-item-limit">किम्-सर्वनाम + '?' चिह्नम्</div>
        <div class="wlc-item-rubric">लिंग-विभक्ति-वचनानुसारं पदचयनम् (अंक: १ प्रतिपदम्)</div>
      </div>
      <div class="wlc-item">
        <div class="wlc-item-type">अन्वय-भावार्थ-पूर्तिः</div>
        <div class="wlc-item-limit">मञ्जूषातः रिक्तस्थानपूर्तिः</div>
        <div class="wlc-item-rubric">पद्यानां गद्यान्वयक्रमः (अंक: १/२ प्रतिरिक्तस्थानम्)</div>
      </div>
    </div>
  </div>
</div>

<!-- BREADCRUMB & FILTER BAR -->
<div class="breadcrumb-bar">
  <div class="breadcrumb-inner">
    <div class="filter-pills">
      <button class="filter-tab active" onclick="filterCategory('all', this)">सर्वे पाठाः (12)</button>
      <button class="filter-tab" onclick="filterCategory('prose', this)">गद्यभागः (4)</button>
      <button class="filter-tab" onclick="filterCategory('poetry', this)">पद्यभागः (5)</button>
      <button class="filter-tab" onclick="filterCategory('drama', this)">नाटकम् (3)</button>
    </div>
    <div class="breadcrumb-chips">
${bcChipsHtml}    </div>
  </div>
</div>

<!-- MAIN LAYOUT -->
<div class="main-layout">
  <!-- SIDEBAR -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-header">
      <div class="sidebar-title">शेमुषी पाठावली (Chapters)</div>
      <input type="text" class="search-box" placeholder="पाठं वा शीर्षकम् अन्विष..." oninput="filterChapters(this.value)">
    </div>
    <ul class="chapter-nav" id="chapterNav">
${navItemsHtml}    </ul>
  </aside>

  <!-- MAIN CHAPTER CONTENT AREA -->
  <main class="main-content" id="chapter-content-area">
${ch1Html}
  </main>
</div>

<!-- MOBILE DRAWER TRIGGER & OVERLAY -->
<div class="sidebar-overlay" id="sidebarOverlay"></div>
<button class="mobile-nav-trigger" id="mobileNavTrigger" aria-label="Open Chapters Menu" onclick="toggleSidebar()">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
</button>

<!-- SCRIPTS -->
<script src="chapters-c10sk/chapters-data.js"></script>
<script>
  let currentCh = 1;
  const chaptersCache = window.PRELOADED_CHAPTERS_C10SK || {};

  function toggleQ(id) {
    const card = document.getElementById(id);
    if (card) {
      card.classList.toggle('open');
    }
  }

  function toggleCBQ(btn) {
    const ans = btn.nextElementSibling;
    if (ans) {
      ans.classList.toggle('open');
      btn.textContent = ans.classList.contains('open') ? '▼ उत्तरं गोपायतु (Hide Answer)' : '▶ उत्तरं पश्यतु (Show Answer)';
    }
  }

  async function showChapter(num, scroll = true) {
    if (num < 1 || num > 12) return;
    currentCh = num;

    document.querySelectorAll('#chapterNav li a').forEach((a, idx) => {
      a.classList.toggle('active', (idx + 1) === num);
    });

    document.querySelectorAll('.bc-chip').forEach(c => {
      c.classList.toggle('active', parseInt(c.getAttribute('data-ch')) === num);
    });

    const area = document.getElementById('chapter-content-area');
    if (chaptersCache[num]) {
      area.innerHTML = chaptersCache[num];
    } else {
      try {
        const res = await fetch(\`chapters-c10sk/ch\${num}.html\`);
        if (res.ok) {
          const html = await res.text();
          chaptersCache[num] = html;
          area.innerHTML = html;
        }
      } catch (err) {
        console.warn('Fetch error:', err);
      }
    }

    history.replaceState(null, '', \`#ch\${num}\`);

    if (scroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
      toggleSidebar();
    }
  }

  function filterCategory(cat, btn) {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    if (btn) btn.classList.add('active');

    document.querySelectorAll('.bc-chip').forEach(c => {
      if (cat === 'all' || c.getAttribute('data-cat') === cat) {
        c.style.display = 'inline-flex';
      } else {
        c.style.display = 'none';
      }
    });

    document.querySelectorAll('#chapterNav li').forEach(li => {
      if (cat === 'all' || li.getAttribute('data-cat') === cat) {
        li.style.display = '';
      } else {
        li.style.display = 'none';
      }
    });
  }

  function filterChapters(val) {
    const q = val.toLowerCase().trim();
    document.querySelectorAll('#chapterNav li').forEach(li => {
      li.style.display = li.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  }

  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('show');
  }

  document.getElementById('sidebarOverlay').addEventListener('click', toggleSidebar);

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
  });

  window.addEventListener('DOMContentLoaded', () => {
    const match = window.location.hash.match(/^#ch(\\d+)$/);
    if (match) {
      const ch = parseInt(match[1]);
      if (ch >= 1 && ch <= 12) {
        showChapter(ch, false);
      }
    }
  });

  window.addEventListener('hashchange', () => {
    const match = window.location.hash.match(/^#ch(\\d+)$/);
    if (match) {
      const ch = parseInt(match[1]);
      if (ch >= 1 && ch <= 12 && ch !== currentCh) {
        showChapter(ch, false);
      }
    }
  });

  const mobToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('navLinks');
  if (mobToggle && navLinks) {
    mobToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobToggle.classList.toggle('active');
    });
  }
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(rootDir, 'ncert-solutions-class-10-sanskrit.html'), hubHtml, 'utf8');
console.log('Successfully created ncert-solutions-class-10-sanskrit.html!');
