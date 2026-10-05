const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const hubPath = path.join(rootDir, 'ncert-solutions.html');
let html = fs.readFileSync(hubPath, 'utf8');

// New Head SEO Block
const oldHeadStart = `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 7, 8, 9 &amp; 10 (CBSE 2026-27) — All Subjects Free | OlympiadQuiz</title>
  <meta name="description" content="Free chapter-wise NCERT Solutions for Class 7, 8, 9 &amp; 10 across Maths, Science, Social Science, English, Hindi &amp; Sanskrit. 100% question coverage with official CBSE 2026-27 marking schemes &amp; step-by-step answers.">
  <meta name="keywords" content="ncert solutions, ncert solutions class 10, ncert solutions class 9, ncert solutions class 8, ncert solutions class 7, cbse solutions 2026-27, ncert solutions maths science english sst hindi sanskrit">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph / Social Sharing -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions.html">
  <meta property="og:title" content="NCERT Solutions for Class 7, 8, 9 &amp; 10 (CBSE 2026-27) — All Subjects">
  <meta property="og:description" content="Free chapter-wise NCERT Solutions for Class 7, 8, 9 &amp; 10 across Maths, Science, SST, English, Hindi &amp; Sanskrit. Step-by-step CBSE marking schemes.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 7, 8, 9 &amp; 10 (CBSE 2026-27)">
  <meta name="twitter:description" content="Free chapter-wise NCERT Solutions for Class 7, 8, 9 &amp; 10 with official CBSE marking schemes.">
  <meta name="twitter:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Search Engine Crawling -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">`;

const newHeadStart = `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions Class 7, 8, 9 &amp; 10 (CBSE) | OlympiadQuiz</title>
  <meta name="description" content="Free NCERT Solutions for Class 7, 8, 9 &amp; 10 (CBSE 2026-27). Step-by-step answers for Maths, Science, SST, English &amp; Sanskrit with official marking schemes.">
  <meta name="keywords" content="ncert solutions, ncert solutions class 10, ncert solutions class 9, ncert solutions class 8, ncert solutions class 7, cbse class 10 ncert solutions, ncert maths class 10, ncert science class 10, cbse marking scheme 2026-27, class 10 sanskrit solutions, class 10 english ncert, free ncert solutions">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Search Engine Crawling & Robots -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="author" content="OlympiadQuiz">
  <meta name="publisher" content="OlympiadQuiz">
  <meta name="theme-color" content="#ff6b00">
  <meta name="application-name" content="OlympiadQuiz NCERT Hub">
  <meta name="apple-mobile-web-app-title" content="NCERT Solutions">
  <meta name="mobile-web-app-capable" content="yes">

  <!-- Open Graph / Social Sharing (WhatsApp, Facebook, LinkedIn) -->
  <meta property="og:locale" content="en_IN">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions.html">
  <meta property="og:title" content="NCERT Solutions for Class 7, 8, 9 &amp; 10 (CBSE 2026-27)">
  <meta property="og:description" content="Free step-by-step NCERT textbook solutions for Maths, Science, SST, English, Hindi &amp; Sanskrit with official CBSE marking schemes.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="OlympiadQuiz Free NCERT Solutions Hub">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions Class 7, 8, 9 &amp; 10 (CBSE 2026-27)">
  <meta name="twitter:description" content="Free step-by-step NCERT textbook solutions for Maths, Science, SST, English &amp; Sanskrit with CBSE rubrics.">
  <meta name="twitter:image" content="https://olympiadquiz.org/favicon.png">`;

if (html.includes(oldHeadStart)) {
  html = html.replace(oldHeadStart, newHeadStart);
  console.log('Successfully updated Head SEO tags in ncert-solutions.html');
} else {
  console.error('Could not find oldHeadStart in ncert-solutions.html');
}

// Add LearningResource Schema right after BreadcrumbList
const oldBreadcrumb = `  <!-- Schema.org Breadcrumb -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/"},
      {"@type": "ListItem", "position": 2, "name": "NCERT Solutions", "item": "https://olympiadquiz.org/ncert-solutions.html"}
    ]
  }
  </script>`;

const newBreadcrumbWithLearningResource = `  <!-- Schema.org Breadcrumb -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/"},
      {"@type": "ListItem", "position": 2, "name": "NCERT Solutions", "item": "https://olympiadquiz.org/ncert-solutions.html"}
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 7, 8, 9 and 10 (CBSE 2026-27)",
    "description": "Comprehensive, 100% free chapter-wise textbook solutions for CBSE Class 7 to 10 across Mathematics, Science, Social Science, English, Hindi, and Sanskrit with official step marking schemes.",
    "educationalLevel": ["CBSE Class 7", "CBSE Class 8", "CBSE Class 9", "CBSE Class 10"],
    "learningResourceType": "Textbook Solutions",
    "inLanguage": ["en", "hi", "sa"],
    "isAccessibleForFree": true,
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
  </script>`;

if (html.includes(oldBreadcrumb)) {
  html = html.replace(oldBreadcrumb, newBreadcrumbWithLearningResource);
  console.log('Successfully added LearningResource schema');
}

// Fix button typo "Go to NCERT SOlution"
html = html.replace('<span>Go to NCERT SOlution</span>', '<span>Go to NCERT Solutions</span>');
html = html.replace('Click <strong>"Go to NCERT SOlution"</strong>', 'Click <strong>"Go to NCERT Solutions"</strong>');

fs.writeFileSync(hubPath, html, 'utf8');
console.log('Updated ncert-solutions.html with verified SEO and permissible limits.');
