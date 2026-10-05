const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// 1. Update ncert-solutions.html
const hubPath = path.join(rootDir, 'ncert-solutions.html');
let hubHtml = fs.readFileSync(hubPath, 'utf8');

// Update ncertSolutionsMap["10"]
const oldMapTarget = `"10": {
      name: "Class 10",
      subjects: [
        { name: "Mathematics", url: "ncert-solutions-class-10-maths.html" },
        { name: "Science", url: "ncert-solutions-class-10-science.html" },
        { name: "Social Science", url: "ncert-solutions-class-10-social-science.html" },
        { name: "English (Language & Literature - 184)", url: "ncert-solutions-class-10-english.html" },
        { name: "English (Communicative - 101)", url: "ncert-solutions-class-10-english-communicative.html" }
      ]
    }`;

const newMapTarget = `"10": {
      name: "Class 10",
      subjects: [
        { name: "Mathematics", url: "ncert-solutions-class-10-maths.html" },
        { name: "Science", url: "ncert-solutions-class-10-science.html" },
        { name: "Social Science", url: "ncert-solutions-class-10-social-science.html" },
        { name: "Sanskrit (शेमुषी भाग - २)", url: "ncert-solutions-class-10-sanskrit.html" },
        { name: "English (Language & Literature - 184)", url: "ncert-solutions-class-10-english.html" },
        { name: "English (Communicative - 101)", url: "ncert-solutions-class-10-english-communicative.html" }
      ]
    }`;

if (hubHtml.includes(oldMapTarget)) {
  hubHtml = hubHtml.replace(oldMapTarget, newMapTarget);
  console.log('Updated ncertSolutionsMap in ncert-solutions.html');
} else {
  console.warn('oldMapTarget not found in ncert-solutions.html');
}

// Update FAQ 1 text
const oldFaq1 = '<li><strong>Class 10:</strong> Mathematics (Standard &amp; Basic), Science (All 13 Chapters), Social Science (All 4 Books), and English (Both Courses: Language &amp; Literature [Code 184 - 28 Units] and Communicative [Code 101 - 13 Units]).</li>';
const newFaq1 = '<li><strong>Class 10:</strong> Mathematics (Standard &amp; Basic), Science (All 13 Chapters), Social Science (All 4 Books), Sanskrit (शेमुषी भाग-२ [Code 122 - 12 Chapters]), and English (Both Courses: Language &amp; Literature [Code 184 - 28 Units] and Communicative [Code 101 - 13 Units]).</li>';

if (hubHtml.includes(oldFaq1)) {
  hubHtml = hubHtml.replace(oldFaq1, newFaq1);
  console.log('Updated FAQ 1 in ncert-solutions.html');
}

fs.writeFileSync(hubPath, hubHtml, 'utf8');

// 2. Update sitemap.xml
const sitemapPath = path.join(rootDir, 'sitemap.xml');
let sitemapXml = fs.readFileSync(sitemapPath, 'utf8');

const sanskritUrlEntry = `  <url>
    <loc>https://olympiadquiz.org/ncert-solutions-class-10-sanskrit.html</loc>
    <lastmod>2026-10-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>`;

if (!sitemapXml.includes('ncert-solutions-class-10-sanskrit.html')) {
  sitemapXml = sitemapXml.replace(
    '<loc>https://olympiadquiz.org/ncert-solutions-class-10-maths.html</loc>',
    `<loc>https://olympiadquiz.org/ncert-solutions-class-10-maths.html</loc>\n  </url>\n${sanskritUrlEntry}\n  <url>`
  );
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
  console.log('Added Class 10 Sanskrit to sitemap.xml');
} else {
  console.log('Class 10 Sanskrit already in sitemap.xml');
}
