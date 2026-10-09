// scripts/update-sitemap-english.js
const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
let xml = fs.readFileSync(sitemapPath, 'utf8');

const target = 'https://olympiadquiz.org/ncert-solutions-class-6-social-science.html</loc>';
const addition = `
  <url>
    <loc>https://olympiadquiz.org/ncert-solutions-class-6-english.html</loc>
    <lastmod>2026-10-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://olympiadquiz.org/ncert-solutions-class-6-eng.html</loc>
    <lastmod>2026-10-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;

const idx = xml.indexOf(target);
if (idx !== -1) {
  const closeUrl = xml.indexOf('</url>', idx);
  if (closeUrl !== -1) {
    const insertPos = closeUrl + 6;
    xml = xml.slice(0, insertPos) + addition + xml.slice(insertPos);
    fs.writeFileSync(sitemapPath, xml, 'utf8');
    console.log('Successfully updated sitemap.xml with Class 6 English entries');
  } else {
    console.log('Could not find </url>');
  }
} else {
  console.log('Target loc not found in sitemap.xml');
}
