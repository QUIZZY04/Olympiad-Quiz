const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// 1. Update ncert-solutions-class-10-english.html
const litPath = path.join(rootDir, 'ncert-solutions-class-10-english.html');
if (fs.existsSync(litPath)) {
  let content = fs.readFileSync(litPath, 'utf8');

  // Add CSS for course switcher if not present
  if (!content.includes('.course-switcher-bar')) {
    const cssToAdd = `
    /* ── COURSE SWITCHER BAR ── */
    .course-switcher-bar {
      background: #0c4a6e;
      color: white;
      padding: 8px 24px;
      font-size: 0.82rem;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
    }
    .course-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 14px;
      border-radius: 999px;
      font-weight: 700;
      text-decoration: none;
      font-size: 0.78rem;
      transition: all 0.2s;
    }
    .course-pill.active {
      background: #0284c7;
      color: white;
      box-shadow: 0 2px 8px rgba(2,132,199,0.4);
    }
    .course-pill.inactive {
      background: rgba(255,255,255,0.12);
      color: #bae6fd;
      border: 1px solid rgba(255,255,255,0.2);
    }
    .course-pill.inactive:hover {
      background: rgba(255,255,255,0.22);
      color: white;
    }
`;
    content = content.replace('</style>', `${cssToAdd}\n  </style>`);
  }

  // Insert Course Switcher Banner after navbar
  if (!content.includes('class="course-switcher-bar"')) {
    const bannerHTML = `
<!-- COURSE SWITCHER BANNER -->
<div class="course-switcher-bar">
  <span>📌 CBSE Class 10 English Papers:</span>
  <span class="course-pill active">📘 English Language &amp; Literature (Code 184) • Active</span>
  <a href="ncert-solutions-class-10-english-communicative.html" class="course-pill inactive">📗 Switch to English Communicative (Code 101) →</a>
</div>
`;
    content = content.replace('</nav>\n\n<!-- NCERT SUBJECT BREADCRUMB -->', `</nav>\n${bannerHTML}\n<!-- NCERT SUBJECT BREADCRUMB -->`);
  }

  // Add Communicative to subject switcher pill list
  if (!content.includes('ncert-solutions-class-10-english-communicative.html')) {
    content = content.replace(
      '<a href="ncert-solutions-class-10-english.html" class="ncert-bc-pill active">English</a>',
      '<a href="ncert-solutions-class-10-english.html" class="ncert-bc-pill active">English (184)</a>\n      <a href="ncert-solutions-class-10-english-communicative.html" class="ncert-bc-pill">Communicative (101)</a>'
    );
  }

  fs.writeFileSync(litPath, content, 'utf8');
  console.log('Updated ncert-solutions-class-10-english.html with Course Switcher!');
}

// 2. Update ncert-solutions.html
const hubPath = path.join(rootDir, 'ncert-solutions.html');
if (fs.existsSync(hubPath)) {
  let content = fs.readFileSync(hubPath, 'utf8');
  if (!content.includes('ncert-solutions-class-10-english-communicative.html')) {
    content = content.replace(
      '{ name: "English", url: "ncert-solutions-class-10-english.html" }',
      '{ name: "English (Language & Literature - 184)", url: "ncert-solutions-class-10-english.html" },\n        { name: "English (Communicative - 101)", url: "ncert-solutions-class-10-english-communicative.html" }'
    );
    content = content.replace(
      'and English (First Flight &amp; Footprints without Feet — All 28 Units).',
      'and English (Both Courses: Language &amp; Literature [Code 184 - 28 Units] and Communicative [Code 101 - 13 Units]).'
    );
    fs.writeFileSync(hubPath, content, 'utf8');
    console.log('Updated ncert-solutions.html with both English courses!');
  }
}

// 3. Update sitemap.xml
const sitemapPath = path.join(rootDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let content = fs.readFileSync(sitemapPath, 'utf8');
  if (!content.includes('ncert-solutions-class-10-english-communicative.html')) {
    const entry = `  <url>\n    <loc>https://olympiadquiz.org/ncert-solutions-class-10-english-communicative.html</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
    content = content.replace('</urlset>', `${entry}</urlset>`);
    fs.writeFileSync(sitemapPath, content, 'utf8');
    console.log('Updated sitemap.xml with Communicative URL!');
  }
}
