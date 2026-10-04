const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// 1. Update Class 10 Maths
const mathsPath = path.join(rootDir, 'ncert-solutions-class-10-maths.html');
if (fs.existsSync(mathsPath)) {
  let content = fs.readFileSync(mathsPath, 'utf8');
  if (!content.includes('ncert-solutions-class-10-english.html')) {
    content = content.replace(
      '<a href="ncert-solutions-class-10-sst.html">Class 10 Social Science</a>',
      '<a href="ncert-solutions-class-10-sst.html">Class 10 Social Science</a>\n          <a href="ncert-solutions-class-10-english.html">Class 10 English 📖</a>'
    );
    content = content.replace(
      '<a href="ncert-solutions-class-10-social-science.html" class="ncert-bc-pill">Social Science</a>',
      '<a href="ncert-solutions-class-10-social-science.html" class="ncert-bc-pill">Social Science</a>\n      <a href="ncert-solutions-class-10-english.html" class="ncert-bc-pill">English</a>'
    );
    fs.writeFileSync(mathsPath, content, 'utf8');
    console.log('Updated ncert-solutions-class-10-maths.html');
  }
}

// 2. Update Class 10 Science
const sciencePath = path.join(rootDir, 'ncert-solutions-class-10-science.html');
if (fs.existsSync(sciencePath)) {
  let content = fs.readFileSync(sciencePath, 'utf8');
  if (!content.includes('ncert-solutions-class-10-english.html')) {
    content = content.replace(
      '<a href="ncert-solutions-class-10-sst.html">Class 10 Social Science</a>',
      '<a href="ncert-solutions-class-10-sst.html">Class 10 Social Science</a>\n          <a href="ncert-solutions-class-10-english.html">Class 10 English 📖</a>'
    );
    content = content.replace(
      '<a href="ncert-solutions-class-10-social-science.html" class="ncert-bc-pill">Social Science</a>',
      '<a href="ncert-solutions-class-10-social-science.html" class="ncert-bc-pill">Social Science</a>\n      <a href="ncert-solutions-class-10-english.html" class="ncert-bc-pill">English</a>'
    );
    fs.writeFileSync(sciencePath, content, 'utf8');
    console.log('Updated ncert-solutions-class-10-science.html');
  }
}

// 3. Update Class 10 SST & Social Science
const sstFiles = ['ncert-solutions-class-10-sst.html', 'ncert-solutions-class-10-social-science.html'];
sstFiles.forEach(f => {
  const filePath = path.join(rootDir, f);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('ncert-solutions-class-10-english.html')) {
      content = content.replace(
        '<a href="ncert-solutions-class-10-science.html">Class 10 Science</a>',
        '<a href="ncert-solutions-class-10-science.html">Class 10 Science</a>\n          <a href="ncert-solutions-class-10-english.html">Class 10 English 📖</a>'
      );
      content = content.replace(
        '<a href="ncert-solutions-class-10-social-science.html" class="ncert-bc-pill active">Social Science</a>',
        '<a href="ncert-solutions-class-10-social-science.html" class="ncert-bc-pill active">Social Science</a>\n      <a href="ncert-solutions-class-10-english.html" class="ncert-bc-pill">English</a>'
      );
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${f}`);
    }
  }
});

// 4. Update sitemap.xml
const sitemapPath = path.join(rootDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let content = fs.readFileSync(sitemapPath, 'utf8');
  if (!content.includes('ncert-solutions-class-10-english.html')) {
    const entry = `  <url>\n    <loc>https://olympiadquiz.org/ncert-solutions-class-10-english.html</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
    content = content.replace('</urlset>', `${entry}</urlset>`);
    fs.writeFileSync(sitemapPath, content, 'utf8');
    console.log('Updated sitemap.xml');
  }
}
