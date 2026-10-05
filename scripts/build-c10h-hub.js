const fs = require('fs');
const path = require('path');

const ch1Html = fs.readFileSync(path.join(__dirname, '..', 'chapters-c10h', 'ch1.html'), 'utf8');

const chapters = [
  // Course A - Kshitij Gadh
  { num: 1, title: 'नेताजी का चश्मा', author: 'स्वयं प्रकाश', book: 'kshitij-gadh', short: 'K1', desc: 'गद्य — पाठ 1' },
  { num: 2, title: 'बालगोबिन भगत', author: 'रामवृक्ष बेनीपुरी', book: 'kshitij-gadh', short: 'K2', desc: 'गद्य — पाठ 2' },
  { num: 3, title: 'लखनवी अंदाज़', author: 'यशपाल', book: 'kshitij-gadh', short: 'K3', desc: 'गद्य — पाठ 3' },
  { num: 4, title: 'एक कहानी यह भी', author: 'मन्नू भंडारी', book: 'kshitij-gadh', short: 'K4', desc: 'गद्य — पाठ 4' },
  { num: 5, title: 'नौबतखाने में इबादत', author: 'यतींद्र मिश्र', book: 'kshitij-gadh', short: 'K5', desc: 'गद्य — पाठ 5' },
  { num: 6, title: 'संस्कृति', author: 'भदंत आनंद कौसल्यायन', book: 'kshitij-gadh', short: 'K6', desc: 'गद्य — पाठ 6' },

  // Course A - Kshitij Kavya
  { num: 7, title: 'पद', author: 'सूरदास', book: 'kshitij-kavya', short: 'KP7', desc: 'काव्य — पाठ 1' },
  { num: 8, title: 'राम-लक्ष्मण-परशुराम संवाद', author: 'तुलसीदास', book: 'kshitij-kavya', short: 'KP8', desc: 'काव्य — पाठ 2' },
  { num: 9, title: 'आत्मकथ्य', author: 'जयशंकर प्रसाद', book: 'kshitij-kavya', short: 'KP9', desc: 'काव्य — पाठ 3' },
  { num: 10, title: 'उत्साह और अट नहीं रही है', author: 'सूर्यकांत त्रिपाठी निराला', book: 'kshitij-kavya', short: 'KP10', desc: 'काव्य — पाठ 4' },
  { num: 11, title: 'यह दंतुरित मुस्कान और फसल', author: 'नागार्जुन', book: 'kshitij-kavya', short: 'KP11', desc: 'काव्य — पाठ 5' },
  { num: 12, title: 'संगतकार', author: 'मंगलेश डबराल', book: 'kshitij-kavya', short: 'KP12', desc: 'काव्य — पाठ 6' },

  // Course A - Kritika
  { num: 13, title: 'माता का आँचल', author: 'शिवपूजन सहाय', book: 'kritika', short: 'KR13', desc: 'पूरक — पाठ 1' },
  { num: 14, title: 'साना-साना हाथ जोड़ि...', author: 'मधु कांकरिया', book: 'kritika', short: 'KR14', desc: 'पूरक — पाठ 2' },
  { num: 15, title: 'मैं क्यों लिखता हूँ?', author: 'अज्ञेय', book: 'kritika', short: 'KR15', desc: 'पूरक — पाठ 3' },

  // Course B - Sparsh Gadh
  { num: 16, title: 'बड़े भाई साहब', author: 'प्रेमचंद', book: 'sparsh-gadh', short: 'S16', desc: 'गद्य — पाठ 1' },
  { num: 17, title: 'डायरी का एक पन्ना', author: 'सीताराम सेकसरिया', book: 'sparsh-gadh', short: 'S17', desc: 'गद्य — पाठ 2' },
  { num: 18, title: 'तताँरा-वामीरो कथा', author: 'लीलाधर मंडलोई', book: 'sparsh-gadh', short: 'S18', desc: 'गद्य — पाठ 3' },
  { num: 19, title: 'तीसरी कसम के शिल्पकार शैलेन्द्र', author: 'प्रहलाद अग्रवाल', book: 'sparsh-gadh', short: 'S19', desc: 'गद्य — पाठ 4' },
  { num: 20, title: 'अब कहाँ दूसरे के दुख से दुखी होने वाले', author: 'निदा फ़ाज़ली', book: 'sparsh-gadh', short: 'S20', desc: 'गद्य — पाठ 5' },
  { num: 21, title: 'पतझर में टूटी पत्तियाँ', author: 'रवींद्र केलेकर', book: 'sparsh-gadh', short: 'S21', desc: 'गद्य — पाठ 6' },
  { num: 22, title: 'कारतूस', author: 'हबीब तनवीर', book: 'sparsh-gadh', short: 'S22', desc: 'गद्य — पाठ 7' },

  // Course B - Sparsh Kavya
  { num: 23, title: 'साखी', author: 'कबीरदास', book: 'sparsh-kavya', short: 'SP23', desc: 'काव्य — पाठ 1' },
  { num: 24, title: 'पद', author: 'मीराबाई', book: 'sparsh-kavya', short: 'SP24', desc: 'काव्य — पाठ 2' },
  { num: 25, title: 'मनुष्यता', author: 'मैथिलीशरण गुप्त', book: 'sparsh-kavya', short: 'SP25', desc: 'काव्य — पाठ 3' },
  { num: 26, title: 'पर्वत प्रदेश में पावस', author: 'सुमित्रानंदन पंत', book: 'sparsh-kavya', short: 'SP26', desc: 'काव्य — पाठ 4' },
  { num: 27, title: 'तोप', author: 'वीरेन डंगवाल', book: 'sparsh-kavya', short: 'SP27', desc: 'काव्य — पाठ 5' },
  { num: 28, title: 'कर चले हम फ़िदा', author: 'कैफ़ी आज़मी', book: 'sparsh-kavya', short: 'SP28', desc: 'काव्य — पाठ 6' },
  { num: 29, title: 'आत्मत्राण', author: 'रवींद्रनाथ ठाकुर', book: 'sparsh-kavya', short: 'SP29', desc: 'काव्य — पाठ 7' },

  // Course B - Sanchayan
  { num: 30, title: 'हरिहर काका', author: 'मिथिलेश्वर', book: 'sanchayan', short: 'SN30', desc: 'पूरक — पाठ 1' },
  { num: 31, title: 'सपनों के-से दिन', author: 'गुरदयाल सिंह', book: 'sanchayan', short: 'SN31', desc: 'पूरक — पाठ 2' },
  { num: 32, title: 'टोपी शुक्ला', author: 'राही मासूम रज़ा', book: 'sanchayan', short: 'SN32', desc: 'पूरक — पाठ 3' }
];

// Generate chips HTML
const chipsHtml = chapters.map(ch => 
  `    <span class="bc-chip${ch.num === 1 ? ' active' : ''}" onclick="showChapter(${ch.num})" data-ch="${ch.num}" data-book="${ch.book}"><span class="bc-n">${ch.short}</span>${ch.title}</span>`
).join('\n');

// Generate sidebar HTML
function renderSidebarGroup(bookKey) {
  return chapters.filter(c => c.book === bookKey).map(ch => 
    `      <li><a href="javascript:void(0)" onclick="showChapter(${ch.num})" ${ch.num === 1 ? 'class="active"' : ''}><span class="ch-badge">${ch.num}</span><div class="ch-title">${ch.title} <small>(${ch.author})</small></div></a></li>`
  ).join('\n');
}

const html = `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 10 Hindi (क्षितिज, कृतिका, स्पर्श & संचयन) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="कक्षा 10 हिंदी कोर्स-ए व कोर्स-बी (क्षितिज भाग-2, कृतिका भाग-2, स्पर्श भाग-2, संचयन भाग-2) के सभी 32 अध्यायों के 100% संपूर्ण NCERT समाधान। CBSE मार्किंग स्कीम एवं योग्यता-आधारित प्रश्न (CBQs)।">
  <meta name="keywords" content="ncert solutions class 10 hindi, class 10 hindi kshitij solutions, class 10 hindi sparsh solutions, kritika class 10, sanchayan class 10 cbse 2026-27, class 10 hindi marking scheme">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-10-hindi.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph / Social Sharing -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-10-hindi.html">
  <meta property="og:title" content="NCERT Solutions for Class 10 Hindi (क्षितिज, कृतिका, स्पर्श & संचयन) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="कक्षा 10 हिंदी कोर्स-ए व कोर्स-बी (क्षितिज भाग-2, कृतिका भाग-2, स्पर्श भाग-2, संचयन भाग-2) के सभी 32 अध्यायों के 100% संपूर्ण NCERT समाधान। CBSE मार्किंग स्कीम एवं योग्यता-आधारित प्रश्न (CBQs)।">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 10 Hindi (क्षितिज, कृतिका, स्पर्श & संचयन) CBSE 2026-27 | OlympiadQuiz">
  <meta name="twitter:description" content="कक्षा 10 हिंदी कोर्स-ए व कोर्स-बी (क्षितिज भाग-2, कृतिका भाग-2, स्पर्श भाग-2, संचयन भाग-2) के सभी 32 अध्यायों के 100% संपूर्ण NCERT समाधान। CBSE मार्किंग स्कीम एवं योग्यता-आधारित प्रश्न (CBQs)।">
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
        "name": "Hindi",
        "item": "https://olympiadquiz.org/ncert-solutions-class-10-hindi.html"
      }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 10 Hindi (क्षितिज, कृतिका, स्पर्श & संचयन) CBSE 2026-27 | OlympiadQuiz",
    "description": "कक्षा 10 हिंदी कोर्स-ए व कोर्स-बी (क्षितिज भाग-2, कृतिका भाग-2, स्पर्श भाग-2, संचयन भाग-2) के सभी 32 अध्यायों के 100% संपूर्ण NCERT समाधान। CBSE मार्किंग स्कीम एवं योग्यता-आधारित प्रश्न (CBQs)।",
    "educationalLevel": "CBSE Class 10",
    "learningResourceType": "Textbook Solutions",
    "inLanguage": "hi",
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
        "name": "क्या ये कक्षा 10 हिंदी NCERT समाधान सीबीएसई बोर्ड परीक्षा 2026-27 के अनुसार अद्यतन हैं?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "हाँ, ये समाधान सीबीएसई 2026-27 के नवीनतम युक्तिसंगत (rationalized) पाठ्यक्रम एवं बोर्ड परीक्षा मार्किंग स्कीम के 100% अनुरूप तैयार किए गए हैं।"
        }
      },
      {
        "@type": "Question",
        "name": "क्या इसमें हिंदी कोर्स-ए (क्षितिज, कृतिका) और कोर्स-बी (स्पर्श, संचयन) दोनों शामिल हैं?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "हाँ, इसमें कोर्स-ए के सभी 15 पाठ और कोर्स-बी के सभी 17 पाठ (कुल 32 पाठ) विस्तृत प्रश्नोत्तर, व्याख्या और शब्द-सीमा के साथ शामिल हैं।"
        }
      },
      {
        "@type": "Question",
        "name": "क्या प्रत्येक अध्याय में योग्यता-आधारित प्रश्न (CBQs) उपलब्ध हैं?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "हाँ, प्रत्येक पाठ में नई राष्ट्रीय शिक्षा नीति (NEP 2020) पर आधारित अभिकथन-कारण (Assertion-Reason) और केस-आधारित प्रश्न शामिल हैं।"
        }
      }
    ]
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --primary: #c2410c;
      --primary-dark: #9a3412;
      --primary-light: #fff7ed;
      --accent: #ea580c;
      --text: #1e293b;
      --muted: #64748b;
      --border: #fed7aa;
      --surface: #ffffff;
      --bg: #fffbf5;
      --header-bg: #fffaf0;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', 'Noto Sans Devanagari', sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.65;
    }
    a { text-decoration: none; color: inherit; }

    /* Top progress */
    .top-progress {
      position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, #ea580c, #f97316);
      width: 0%; z-index: 1000; transition: width 0.1s;
    }

    /* Navbar */
    .navbar {
      background: #0f172a; color: white; padding: 12px 24px; position: sticky; top: 0; z-index: 99;
      box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    }
    .navbar-inner {
      max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between;
    }
    .navbar-logo { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 1.25rem; color: #fff; }
    .navbar-logo span span { color: #f97316; }
    .navbar-links { display: flex; align-items: center; gap: 20px; font-size: 0.92rem; }
    .nav-link { color: #cbd5e1; transition: color 0.2s; font-weight: 500; }
    .nav-link:hover { color: #fff; }
    .nav-dropdown { position: relative; }
    .nav-dropdown-content {
      display: none; position: absolute; top: 100%; left: 0; background: #1e293b; min-width: 250px;
      border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.25); padding: 8px 0; z-index: 100;
    }
    .nav-dropdown:hover .nav-dropdown-content { display: block; }
    .nav-dropdown-content a {
      display: block; padding: 8px 16px; color: #e2e8f0; font-size: 0.85rem; transition: background 0.15s;
    }
    .nav-dropdown-content a:hover { background: #334155; color: #ffedd5; }
    .navbar-actions { display: flex; align-items: center; gap: 12px; }
    .btn-login {
      background: #ea580c; color: white; padding: 6px 16px; border-radius: 6px; font-weight: 600;
      font-size: 0.88rem; transition: background 0.2s;
    }
    .btn-login:hover { background: #c2410c; }
    .navbar-toggle { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 4px; }
    .navbar-toggle span { display: block; width: 22px; height: 2px; background: white; }

    /* Breadcrumbs */
    .ncert-breadcrumb-nav { background: #f8fafc; border-bottom: 1px solid #e2e8f0; padding: 10px 24px; font-size: 0.85rem; }
    .ncert-bc-container { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
    .ncert-bc-list { display: flex; align-items: center; gap: 8px; list-style: none; }
    .ncert-bc-sep { color: #94a3b8; }
    .ncert-bc-current { font-weight: 700; color: #ea580c; }
    .ncert-bc-switch { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .ncert-bc-switch-label { font-size: 0.8rem; color: #64748b; font-weight: 600; }
    .ncert-bc-pill {
      font-size: 0.78rem; font-weight: 600; padding: 4px 10px; border-radius: 999px; background: #fff;
      color: #475569; border: 1px solid #cbd5e1; transition: all 0.15s;
    }
    .ncert-bc-pill:hover { background: #fff7ed; color: #ea580c; border-color: #fed7aa; }
    .ncert-bc-pill.active { background: #ea580c; color: #fff; border-color: #ea580c; box-shadow: 0 2px 6px rgba(234,88,12,0.3); }

    /* Hero Banner */
    .hero-banner {
      background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%);
      border-bottom: 2px solid #fdba74; padding: 40px 24px; text-align: center;
    }
    .hero-banner h1 {
      font-size: 2.2rem; font-weight: 800; color: #9a3412; margin-bottom: 12px;
    }
    .hero-banner p {
      max-width: 900px; margin: 0 auto 20px; font-size: 1rem; color: #7c2d12;
    }
    .hero-badges {
      display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; max-width: 1000px; margin: 0 auto;
    }
    .hero-badge {
      background: #ffffff; color: #c2410c; padding: 6px 14px; border-radius: 999px;
      font-size: 0.82rem; font-weight: 700; border: 1px solid #fdba74; box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }

    /* Tabs & Breadcrumb Chips */
    .breadcrumb-bar {
      background: #ffffff; border-bottom: 1px solid #fed7aa; padding: 14px 24px; position: sticky; top: 56px; z-index: 90;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }
    .breadcrumb-controls { max-width: 1400px; margin: 0 auto 10px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .breadcrumb-label { font-weight: 700; color: #9a3412; font-size: 0.88rem; }
    .book-tabs { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
    .book-tab {
      cursor: pointer; padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;
      background: #fff7ed; color: #9a3412; border: 1px solid #fdba74; transition: all 0.15s;
    }
    .book-tab:hover { background: #fed7aa; }
    .book-tab.active { background: #ea580c; color: #ffffff; border-color: #ea580c; }
    .breadcrumb-chips {
      max-width: 1400px; margin: 0 auto; display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px;
      scrollbar-width: thin;
    }
    .bc-chip {
      flex-shrink: 0; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
      padding: 5px 12px; border-radius: 999px; background: #f8fafc; color: #475569;
      font-size: 0.8rem; font-weight: 600; border: 1px solid #e2e8f0; transition: all 0.15s;
    }
    .bc-chip:hover { background: #fff7ed; color: #ea580c; border-color: #fed7aa; }
    .bc-chip.active { background: #ea580c; color: #ffffff; border-color: #ea580c; }
    .bc-chip .bc-n { font-weight: 800; font-size: 0.72rem; opacity: 0.85; background: rgba(0,0,0,0.08); padding: 2px 6px; border-radius: 4px; }
    .bc-chip.active .bc-n { background: rgba(255,255,255,0.25); }

    /* Layout */
    .layout-container {
      max-width: 1400px; margin: 24px auto; padding: 0 24px; display: grid;
      grid-template-columns: 320px 1fr; gap: 28px; align-items: start;
    }

    /* Sidebar */
    .sidebar {
      background: #ffffff; border: 1px solid #fed7aa; border-radius: 12px; padding: 18px;
      position: sticky; top: 160px; max-height: calc(100vh - 180px); overflow-y: auto;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03); scrollbar-width: thin;
    }
    .search-box {
      width: 100%; padding: 8px 12px; border: 1px solid #fed7aa; border-radius: 6px;
      font-size: 0.85rem; margin-bottom: 16px; outline: none; transition: border-color 0.2s;
    }
    .search-box:focus { border-color: #ea580c; }
    .sidebar-section-title {
      font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;
      color: #9a3412; margin: 14px 0 6px; padding-bottom: 4px; border-bottom: 1px solid #ffedd5;
      display: flex; align-items: center; justify-content: space-between;
    }
    .chapter-nav { list-style: none; margin-bottom: 8px; }
    .chapter-nav li a {
      display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 6px;
      font-size: 0.85rem; color: #334155; font-weight: 500; transition: all 0.15s; margin-bottom: 2px;
    }
    .chapter-nav li a:hover { background: #fff7ed; color: #ea580c; }
    .chapter-nav li a.active { background: #ea580c; color: #ffffff; font-weight: 700; }
    .chapter-nav li a .ch-badge {
      width: 22px; height: 22px; border-radius: 50%; background: #ffedd5; color: #c2410c;
      font-size: 0.72rem; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .chapter-nav li a.active .ch-badge { background: #ffffff; color: #ea580c; }
    .chapter-nav li a .ch-title { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .chapter-nav li a .ch-title small { font-size: 0.72rem; opacity: 0.75; }

    /* Content Area */
    .content-area { min-width: 0; }
    .chapter-section {
      background: #ffffff; border: 1px solid #fed7aa; border-radius: 12px; padding: 28px;
      margin-bottom: 28px; box-shadow: 0 4px 16px rgba(0,0,0,0.03);
    }
    .chapter-header {
      display: flex; align-items: flex-start; gap: 16px; padding-bottom: 18px; margin-bottom: 20px;
      border-bottom: 2px solid #ffedd5;
    }
    .chapter-header .ch-badge {
      width: 44px; height: 44px; border-radius: 10px; background: linear-gradient(135deg, #ea580c, #c2410c);
      color: #ffffff; font-size: 1.3rem; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .chapter-header-info .ch-category { font-size: 0.8rem; font-weight: 700; color: #ea580c; text-transform: uppercase; }
    .chapter-header-info h2 { font-size: 1.6rem; font-weight: 800; color: #1e293b; margin: 4px 0 6px; }
    .chapter-header-info p { font-size: 0.92rem; color: #64748b; line-height: 1.5; }
    .ex-div {
      background: #fff7ed; color: #c2410c; font-weight: 700; font-size: 0.88rem;
      padding: 8px 14px; border-radius: 6px; margin: 18px 0 14px; border-left: 4px solid #ea580c;
    }

    /* Q Card */
    .q-card {
      background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 16px;
      overflow: hidden; transition: border-color 0.2s, box-shadow 0.2s;
    }
    .q-card:hover { border-color: #fdba74; box-shadow: 0 4px 12px rgba(234,88,12,0.06); }
    .q-head {
      display: flex; align-items: center; gap: 12px; padding: 14px 18px; cursor: pointer;
      background: #ffffff; user-select: none;
    }
    .q-head:hover { background: #fffbf5; }
    .q-num {
      background: #ffedd5; color: #c2410c; font-weight: 800; font-size: 0.78rem; padding: 4px 10px;
      border-radius: 4px; flex-shrink: 0;
    }
    .q-text { flex: 1; font-weight: 600; font-size: 0.95rem; color: #1e293b; }
    .q-marks { font-size: 0.76rem; font-weight: 700; color: #ea580c; background: #fff7ed; padding: 3px 8px; border-radius: 4px; flex-shrink: 0; }
    .q-toggle svg { width: 18px; height: 18px; color: #94a3b8; transition: transform 0.2s; flex-shrink: 0; }
    .q-answer { display: none; padding: 0 18px 18px; border-top: 1px solid #f1f5f9; }
    .q-answer.open { display: block; }
    .q-card.open .q-toggle svg { transform: rotate(45deg); color: #ea580c; }
    .answer-box { margin-top: 14px; }
    .answer-label { font-size: 0.8rem; font-weight: 700; color: #15803d; margin-bottom: 8px; }
    .answer-text { font-size: 0.93rem; color: #334155; line-height: 1.7; }
    .answer-text p { margin-bottom: 10px; }
    .answer-text ul, .answer-text ol { margin-left: 20px; margin-bottom: 10px; }
    .answer-text li { margin-bottom: 6px; }

    /* Marking scheme */
    .marking-scheme {
      background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 6px; padding: 10px 14px;
      margin-top: 14px; font-size: 0.82rem;
    }
    .marking-title { font-weight: 700; color: #475569; margin-bottom: 6px; display: flex; align-items: center; gap: 6px; }
    .marking-row { display: flex; justify-content: space-between; padding: 3px 0; border-bottom: 1px dotted #e2e8f0; color: #64748b; }
    .marking-row:last-child { border-bottom: none; }
    .marking-key { flex: 1; }
    .marking-marks { font-weight: 700; color: #ea580c; }

    /* CBQ Section */
    .cbq-section {
      background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 10px; padding: 20px; margin-top: 24px;
    }
    .cbq-header { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
    .cbq-badge { background: #ea580c; color: white; font-weight: 800; font-size: 0.72rem; padding: 3px 8px; border-radius: 4px; }
    .cbq-header h3 { font-size: 1.05rem; font-weight: 700; color: #1c1917; }
    .cbq-card { background: #ffffff; border: 1px solid #fed7aa; border-radius: 8px; padding: 14px; margin-bottom: 12px; }
    .cbq-type { font-size: 0.75rem; font-weight: 800; color: #ea580c; text-transform: uppercase; margin-bottom: 6px; }
    .cbq-question { font-size: 0.9rem; font-weight: 600; color: #1e293b; line-height: 1.6; margin-bottom: 10px; }
    .cbq-show-btn {
      background: #fff7ed; color: #c2410c; border: 1px solid #fdba74; padding: 5px 12px;
      border-radius: 6px; font-size: 0.78rem; font-weight: 700; cursor: pointer; transition: all 0.15s;
    }
    .cbq-show-btn:hover { background: #ea580c; color: white; }
    .cbq-answer { display: none; margin-top: 10px; padding: 10px 14px; background: #f8fafc; border-radius: 6px; font-size: 0.88rem; color: #334155; line-height: 1.6; }
    .cbq-answer.open { display: block; }

    /* FAQ Section */
    .faq-container {
      background: #ffffff; border: 1px solid #fed7aa; border-radius: 12px; padding: 28px; margin-top: 36px;
    }
    .faq-container h2 { font-size: 1.4rem; color: #9a3412; margin-bottom: 16px; font-weight: 800; }
    .faq-item { border-bottom: 1px solid #ffedd5; padding: 12px 0; }
    .faq-item:last-child { border-bottom: none; }
    .faq-q { font-weight: 700; color: #1e293b; font-size: 0.95rem; margin-bottom: 6px; }
    .faq-a { color: #64748b; font-size: 0.88rem; line-height: 1.6; }

    /* Floating mobile button */
    .mob-sidebar-toggle {
      display: none; position: fixed; bottom: 20px; right: 20px; background: #ea580c; color: white;
      border: none; border-radius: 999px; padding: 12px 22px; font-weight: 700; font-size: 0.92rem;
      box-shadow: 0 4px 16px rgba(234,88,12,0.4); z-index: 95; cursor: pointer;
    }
    .sidebar-overlay {
      display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 94;
    }
    .sidebar-overlay.show { display: block; }

    @media (max-width: 992px) {
      .layout-container { grid-template-columns: 1fr; }
      .sidebar {
        position: fixed; top: 0; left: -340px; width: 300px; height: 100vh; max-height: 100vh;
        z-index: 99; transition: left 0.25s ease; border-radius: 0;
      }
      .sidebar.open { left: 0; }
      .mob-sidebar-toggle { display: flex; align-items: center; gap: 8px; }
      .breadcrumb-controls { flex-direction: column; align-items: flex-start; }
    }
    @media (max-width: 768px) {
      .hero-banner h1 { font-size: 1.6rem; }
      .chapter-section { padding: 18px; }
      .q-head { flex-wrap: wrap; }
      .q-marks { margin-left: auto; }
    }
  </style>
</head>
<body>
<div class="top-progress" id="progressBar"></div>

<nav class="navbar">
  <div class="navbar-inner">
    <a href="index.html" class="navbar-logo">
      <img src="favicon.png" alt="OlympiadQuiz Logo" width="32" height="32" style="height:32px;width:auto;" loading="lazy">
      <span class="logo-text">Olympiad<span>Quiz</span></span>
    </a>
    <div class="navbar-links" id="navLinks">
      <a href="index.html" class="nav-link">Home</a>
      <div class="nav-dropdown">
        <a href="ncert-solutions.html" class="nav-link" style="color:white;font-weight:700;">NCERT Solutions <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top:2px;"><path d="m6 9 6 6 6-6"/></svg></a>
        <div class="nav-dropdown-content">
          <a href="ncert-solutions.html" style="font-weight:700;color:#c2410c;">📚 All NCERT Hub (2026-27)</a>
          <a href="ncert-solutions-class-10-hindi.html" style="font-weight:700;color:#ea580c;background:#fff7ed;">Class 10 Hindi 🇮🇳 (Active)</a>
          <a href="ncert-solutions-class-10-maths.html">Class 10 Maths 📐</a>
          <a href="ncert-solutions-class-10-science.html">Class 10 Science 🔬</a>
          <a href="ncert-solutions-class-10-sst.html">Class 10 Social Science 🌍</a>
          <a href="ncert-solutions-class-10-english.html">Class 10 English 📖</a>
          <a href="ncert-solutions-class-10-sanskrit.html">Class 10 Sanskrit 🕉️</a>
          <a href="ncert-solutions-class-9-hindi.html">Class 9 Hindi</a>
          <a href="ncert-solutions-class-8-hindi.html">Class 8 Hindi</a>
        </div>
      </div>
      <a href="blog.html" class="nav-link">Guides &amp; Blog</a>
    </div>
    <div class="navbar-actions">
      <a href="login.html" class="btn-login">Login</a>
      <button class="navbar-toggle" id="mobile-menu-toggle" aria-label="Toggle Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<!-- NCERT SUBJECT BREADCRUMB -->
<nav class="ncert-breadcrumb-nav" aria-label="Breadcrumb">
  <div class="ncert-bc-container">
    <ol class="ncert-bc-list">
      <li><a href="index.html">Home</a></li>
      <li class="ncert-bc-sep">/</li>
      <li><a href="ncert-solutions.html">NCERT Solutions</a></li>
      <li class="ncert-bc-sep">/</li>
      <li><a href="ncert-solutions.html#class10">Class 10</a></li>
      <li class="ncert-bc-sep">/</li>
      <li class="ncert-bc-current">Hindi</li>
    </ol>
    <div class="ncert-bc-switch">
      <span class="ncert-bc-switch-label">Switch Subject:</span>
      <a href="ncert-solutions-class-10-maths.html" class="ncert-bc-pill">Maths</a>
      <a href="ncert-solutions-class-10-science.html" class="ncert-bc-pill">Science</a>
      <a href="ncert-solutions-class-10-sst.html" class="ncert-bc-pill">Social Science</a>
      <a href="ncert-solutions-class-10-english.html" class="ncert-bc-pill">English</a>
      <a href="ncert-solutions-class-10-sanskrit.html" class="ncert-bc-pill">Sanskrit</a>
      <a href="ncert-solutions-class-10-hindi.html" class="ncert-bc-pill active">Hindi</a>
    </div>
  </div>
</nav>

<header class="hero-banner">
  <h1>कक्षा 10 हिंदी — सम्पूर्ण NCERT समाधान</h1>
  <p>CBSE बोर्ड परीक्षा सत्र 2026-27 के <strong>100% संपूर्ण पाठ्यक्रम</strong> का प्रामाणिक समाधान। <strong>सभी 32 पाठ</strong>: कोर्स-ए (क्षितिज भाग-2 गद्य व काव्य खंड, कृतिका भाग-2) एवं कोर्स-बी (स्पर्श भाग-2 गद्य व काव्य खंड, संचयन भाग-2)। CBSE अंक योजना (Marking Scheme) और योग्यता-आधारित प्रश्न (CBQs)।</p>
  <div class="hero-badges">
    <span class="hero-badge">📚 कोर्स-ए: क्षितिज भाग-2 (12 पाठ)</span>
    <span class="hero-badge">📖 कोर्स-ए: कृतिका भाग-2 (3 पाठ)</span>
    <span class="hero-badge">📙 कोर्स-बी: स्पर्श भाग-2 (14 पाठ)</span>
    <span class="hero-badge">📗 कोर्स-बी: संचयन भाग-2 (3 पाठ)</span>
    <span class="hero-badge">🎯 CBSE Board Marking Scheme 2026-27</span>
    <span class="hero-badge">⚡ योग्यता एवं मूल्य आधारित प्रश्न (CBQs)</span>
  </div>
</header>

<div class="breadcrumb-bar">
  <div class="breadcrumb-controls">
    <div class="breadcrumb-label">📖 कक्षा 10 हिंदी — पुस्तक के अनुसार देखें:</div>
    <div class="book-tabs">
      <span class="book-tab active" onclick="filterBook('all')">🌟 सभी 32 पाठ</span>
      <span class="book-tab" onclick="filterBook('kshitij-gadh')">📚 क्षितिज - गद्य (6)</span>
      <span class="book-tab" onclick="filterBook('kshitij-kavya')">📝 क्षितिज - काव्य (6)</span>
      <span class="book-tab" onclick="filterBook('kritika')">📖 कृतिका (3)</span>
      <span class="book-tab" onclick="filterBook('sparsh-gadh')">📙 स्पर्श - गद्य (7)</span>
      <span class="book-tab" onclick="filterBook('sparsh-kavya')">🖋️ स्पर्श - काव्य (7)</span>
      <span class="book-tab" onclick="filterBook('sanchayan')">📗 संचयन (3)</span>
    </div>
  </div>
  <div class="breadcrumb-chips" id="breadcrumbChips">
${chipsHtml}
  </div>
</div>

<div class="sidebar-overlay" id="sidebarOverlay" onclick="closeSidebarMobile()"></div>

<div class="layout-container">
  <aside class="sidebar" id="sidebar">
    <input type="text" class="search-box" id="chapterSearch" placeholder="🔍 पाठ या लेखक खोजें..." onkeyup="filterChapters(this.value)">

    <!-- KSHITIJ GADH -->
    <div class="sidebar-section-title" id="titleKshitijGadh">📚 क्षितिज - गद्य खंड (कोर्स-ए)</div>
    <ul class="chapter-nav" id="navKshitijGadh">
${renderSidebarGroup('kshitij-gadh')}
    </ul>

    <!-- KSHITIJ KAVYA -->
    <div class="sidebar-section-title" id="titleKshitijKavya">📝 क्षितिज - काव्य खंड (कोर्स-ए)</div>
    <ul class="chapter-nav" id="navKshitijKavya">
${renderSidebarGroup('kshitij-kavya')}
    </ul>

    <!-- KRITIKA -->
    <div class="sidebar-section-title" id="titleKritika">📖 कृतिका भाग-2 (कोर्स-ए)</div>
    <ul class="chapter-nav" id="navKritika">
${renderSidebarGroup('kritika')}
    </ul>

    <!-- SPARSH GADH -->
    <div class="sidebar-section-title" id="titleSparshGadh">📙 स्पर्श - गद्य खंड (कोर्स-बी)</div>
    <ul class="chapter-nav" id="navSparshGadh">
${renderSidebarGroup('sparsh-gadh')}
    </ul>

    <!-- SPARSH KAVYA -->
    <div class="sidebar-section-title" id="titleSparshKavya">🖋️ स्पर्श - काव्य खंड (कोर्स-बी)</div>
    <ul class="chapter-nav" id="navSparshKavya">
${renderSidebarGroup('sparsh-kavya')}
    </ul>

    <!-- SANCHAYAN -->
    <div class="sidebar-section-title" id="titleSanchayan">📗 संचयन भाग-2 (कोर्स-बी)</div>
    <ul class="chapter-nav" id="navSanchayan">
${renderSidebarGroup('sanchayan')}
    </ul>
  </aside>

  <main class="content-area">
    <div id="chapter-content-area">
${ch1Html}
    </div>

    <!-- FAQ SECTION -->
    <section class="faq-container">
      <h2>अक्सर पूछे जाने वाले प्रश्न (FAQ — Class 10 Hindi NCERT Solutions)</h2>
      <div class="faq-item">
        <div class="faq-q">प्र. 1: क्या यह समाधान सीबीएसई बोर्ड परीक्षा 2026-27 के नवीनतम पैटर्न पर आधारित हैं?</div>
        <div class="faq-a">उत्तर: हाँ, यह पूर्णतया सीबीएसई द्वारा निर्धारित नवीनतम युक्तिसंगत (rationalized) पाठ्यक्रम एवं बोर्ड परीक्षा अंक योजना (Marking Scheme) 2026-27 के अनुसार तैयार किया गया है।</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">प्र. 2: क्या इसमें कोर्स-ए और कोर्स-बी दोनों की पाठ्यपुस्तकें शामिल हैं?</div>
        <div class="faq-a">उत्तर: जी हाँ! इसमें कोर्स-ए की 'क्षितिज भाग-2' व 'कृतिका भाग-2' (15 पाठ) तथा कोर्स-बी की 'स्पर्श भाग-2' व 'संचयन भाग-2' (17 पाठ)—कुल 32 अध्यायों का प्रामाणिक समाधान उपलब्ध है।</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">प्र. 3: क्या इसमें योग्यता-आधारित प्रश्न (CBQs) भी दिए गए हैं?</div>
        <div class="faq-a">उत्तर: हाँ, सीबीएसई के 50% योग्यता-आधारित प्रश्नों (Competency-Based Questions) के अधिभार को ध्यान में रखते हुए प्रत्येक पाठ में अभिकथन-कारण (Assertion-Reason), केस-आधारित एवं मूल्यपरक प्रश्न शामिल किए गए हैं।</div>
      </div>
    </section>
  </main>
</div>

<button class="mob-sidebar-toggle" onclick="toggleSidebar()">📖 पाठ सूची</button>

<script src="chapters-c10h/chapters-data.js"></script>
<script>
  let currentCh = 1;

  function toggleQ(qid) {
    const el = document.getElementById(qid);
    if (!el) return;
    const ans = el.querySelector('.q-answer');
    if (!ans) return;
    ans.classList.toggle('open');
    el.classList.toggle('open');
  }

  function toggleCBQ(btn) {
    const card = btn.closest('.cbq-card');
    if (!card) return;
    const ans = card.querySelector('.cbq-answer');
    if (!ans) return;
    if (ans.classList.contains('open')) {
      ans.classList.remove('open');
      btn.textContent = '▶ उत्तर देखें';
    } else {
      ans.classList.add('open');
      btn.textContent = '▼ उत्तर छुपाएँ';
    }
  }

  function showChapter(num) {
    currentCh = num;
    const area = document.getElementById('chapter-content-area');
    
    // Check preloaded bundle
    if (window.CHAPTER_DATA && window.CHAPTER_DATA[num]) {
      area.innerHTML = window.CHAPTER_DATA[num];
      postChapterLoad(num);
    } else {
      // Fallback to fetch
      area.innerHTML = '<div style="text-align:center;padding:40px;color:var(--muted);">लोड हो रहा है... / Loading...</div>';
      fetch('chapters-c10h/ch' + num + '.html')
        .then(res => {
          if (!res.ok) throw new Error('File not found');
          return res.text();
        })
        .then(html => {
          area.innerHTML = html;
          postChapterLoad(num);
        })
        .catch(err => {
          console.error(err);
          area.innerHTML = '<div style="text-align:center;padding:40px;color:#dc2626;">पाठ लोड करने में त्रुटि। कृपया पुनः प्रयास करें।</div>';
        });
    }
  }

  function postChapterLoad(num) {
    // Update active nav in sidebar
    document.querySelectorAll('.chapter-nav li a').forEach(a => {
      const href = a.getAttribute('onclick') || '';
      if (href.includes('showChapter(' + num + ')')) {
        a.classList.add('active');
        a.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        a.classList.remove('active');
      }
    });
    
    // Update active chip in breadcrumb
    document.querySelectorAll('.bc-chip').forEach(chip => {
      const chNum = parseInt(chip.getAttribute('data-ch'));
      if (chNum === num) {
        chip.classList.add('active');
        chip.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
      } else {
        chip.classList.remove('active');
      }
    });

    // Open first 2 questions automatically
    const firstTwo = document.querySelectorAll('#chapter-content-area .q-card');
    if (firstTwo.length > 0) {
      firstTwo[0].classList.add('open');
      const a = firstTwo[0].querySelector('.q-answer');
      if (a) a.classList.add('open');
    }
    if (firstTwo.length > 1) {
      firstTwo[1].classList.add('open');
      const a = firstTwo[1].querySelector('.q-answer');
      if (a) a.classList.add('open');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeSidebarMobile();
  }

  function filterBook(bookKey) {
    document.querySelectorAll('.book-tab').forEach(t => t.classList.remove('active'));
    if (event && event.currentTarget) {
      event.currentTarget.classList.add('active');
    }
    
    // Filter chips
    document.querySelectorAll('.bc-chip').forEach(chip => {
      const b = chip.getAttribute('data-book');
      if (bookKey === 'all' || b === bookKey) {
        chip.style.display = 'inline-flex';
      } else {
        chip.style.display = 'none';
      }
    });
    
    // Filter sidebar
    const groups = [
      { id: 'navKshitijGadh', title: 'titleKshitijGadh', key: 'kshitij-gadh' },
      { id: 'navKshitijKavya', title: 'titleKshitijKavya', key: 'kshitij-kavya' },
      { id: 'navKritika', title: 'titleKritika', key: 'kritika' },
      { id: 'navSparshGadh', title: 'titleSparshGadh', key: 'sparsh-gadh' },
      { id: 'navSparshKavya', title: 'titleSparshKavya', key: 'sparsh-kavya' },
      { id: 'navSanchayan', title: 'titleSanchayan', key: 'sanchayan' }
    ];
    
    groups.forEach(g => {
      const list = document.getElementById(g.id);
      const title = document.getElementById(g.title);
      if (bookKey === 'all' || g.key === bookKey) {
        if (list) list.style.display = 'block';
        if (title) title.style.display = 'flex';
      } else {
        if (list) list.style.display = 'none';
        if (title) title.style.display = 'none';
      }
    });
  }

  function filterChapters(q) {
    q = q.toLowerCase().trim();
    document.querySelectorAll('.chapter-nav li').forEach(li => {
      const txt = li.textContent.toLowerCase();
      if (txt.includes(q)) {
        li.style.display = 'block';
      } else {
        li.style.display = 'none';
      }
    });
  }

  function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sb.classList.toggle('open');
    overlay.classList.toggle('show');
  }

  function closeSidebarMobile() {
    const sb = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sb) sb.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
  }

  // Scroll progress
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const bar = document.getElementById('progressBar');
    if (bar) bar.style.width = scrolled + '%';
  });

  // Mobile menu toggle in navbar
  document.getElementById('mobile-menu-toggle')?.addEventListener('click', () => {
    const links = document.getElementById('navLinks');
    if (links) {
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    }
  });

  // Initial setup: Open first two questions in ch1
  document.addEventListener('DOMContentLoaded', () => {
    const firstTwo = document.querySelectorAll('#chapter-content-area .q-card');
    if (firstTwo.length > 0) {
      firstTwo[0].classList.add('open');
      const a = firstTwo[0].querySelector('.q-answer');
      if (a) a.classList.add('open');
    }
    if (firstTwo.length > 1) {
      firstTwo[1].classList.add('open');
      const a = firstTwo[1].querySelector('.q-answer');
      if (a) a.classList.add('open');
    }
  });
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '..', 'ncert-solutions-class-10-hindi.html'), html, 'utf8');
console.log('Successfully generated ncert-solutions-class-10-hindi.html');
