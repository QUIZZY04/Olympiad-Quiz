const fs = require('fs');
const path = require('path');

// 1. Update sitemap.xml with all 118 Chapter URLs
const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const c3mDir = path.join(__dirname, '..', 'chapters-c3m');
const c3eDir = path.join(__dirname, '..', 'chapters-c3e');
const c3hDir = path.join(__dirname, '..', 'chapters-c3h');
const c3evsDir = path.join(__dirname, '..', 'chapters-c3evs');

const mFiles = fs.readdirSync(c3mDir).filter(f => f.endsWith('.html')).map(f => `chapters-c3m/${f}`);
const eFiles = fs.readdirSync(c3eDir).filter(f => f.endsWith('.html')).map(f => `chapters-c3e/${f}`);
const hFiles = fs.readdirSync(c3hDir).filter(f => f.endsWith('.html')).map(f => `chapters-c3h/${f}`);
const evsFiles = fs.readdirSync(c3evsDir).filter(f => f.endsWith('.html')).map(f => `chapters-c3evs/${f}`);

const all118 = [...mFiles, ...eFiles, ...hFiles, ...evsFiles];
console.log(`Found ${all118.length} total chapter files for Class 3.`);

let newSitemapEntries = '\n  <!-- Class 3 Modular Chapters (100% Coverage) -->\n';
all118.forEach(rel => {
  const url = `https://olympiadquiz.org/${rel}`;
  if (!sitemapContent.includes(`<loc>${url}</loc>`)) {
    newSitemapEntries += `  <url>\n    <loc>${url}</loc>\n    <lastmod>2026-10-23</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.90</priority>\n  </url>\n`;
  }
});

if (newSitemapEntries.trim() !== '') {
  sitemapContent = sitemapContent.replace('</urlset>', `${newSitemapEntries}</urlset>`);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`sitemap.xml updated with ${all118.length} chapter URLs.`);
} else {
  console.log('All chapter URLs already in sitemap.xml');
}

// 2. Build Chapter Directory Section for ncert-solutions-class-3.html
const hubPath = path.join(__dirname, '..', 'ncert-solutions-class-3.html');
let hubHtml = fs.readFileSync(hubPath, 'utf8');

// Generate Links List for Maths Mela (14)
const mmLinks = Array.from({ length: 14 }, (_, i) => `<a href="chapters-c3m/maths-mela-ch${i+1}.html" class="ch-dir-pill">Ch ${i+1}</a>`).join('');
// Math-Magic (14)
const mmgLinks = Array.from({ length: 14 }, (_, i) => `<a href="chapters-c3m/math-magic-ch${i+1}.html" class="ch-dir-pill">Ch ${i+1}</a>`).join('');
// Santoor (12)
const stLinks = Array.from({ length: 12 }, (_, i) => `<a href="chapters-c3e/santoor-ch${i+1}.html" class="ch-dir-pill">Ch ${i+1}</a>`).join('');
// Marigold (10)
const mgLinks = Array.from({ length: 10 }, (_, i) => `<a href="chapters-c3e/marigold-unit${i+1}.html" class="ch-dir-pill">Unit ${i+1}</a>`).join('');
// Veena (18)
const vnLinks = Array.from({ length: 18 }, (_, i) => `<a href="chapters-c3h/veena-ch${i+1}.html" class="ch-dir-pill">पाठ ${i+1}</a>`).join('');
// Rimjhim (14)
const rjLinks = Array.from({ length: 14 }, (_, i) => `<a href="chapters-c3h/rimjhim-ch${i+1}.html" class="ch-dir-pill">पाठ ${i+1}</a>`).join('');
// Our Wondrous World (12)
const wwLinks = Array.from({ length: 12 }, (_, i) => `<a href="chapters-c3evs/wondrous-world-ch${i+1}.html" class="ch-dir-pill">Ch ${i+1}</a>`).join('');
// Looking Around (24)
const laLinks = Array.from({ length: 24 }, (_, i) => `<a href="chapters-c3evs/looking-around-ch${i+1}.html" class="ch-dir-pill">Ch ${i+1}</a>`).join('');

const dirSectionHtml = `
    <!-- Chapterwise Modular Directory (100% Comprehensive Coverage) -->
    <section class="sec-head" style="margin-top: 50px;">
      <span class="sec-badge" style="background:#dcfce7;color:#15803d;">🚀 Modular Chapter-Wise Pages (100% Coverage)</span>
      <h2 class="sec-title">Quick Direct Chapter Directory (All 118 Chapters)</h2>
      <p class="sec-sub">Access dedicated, standalone chapter pages with every single exercise, in-text activity, and CBSE marking rubric from NCERT &amp; Tiwari Academy.</p>
    </section>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 40px;">
      
      <!-- Maths Card -->
      <div style="background:#ffffff; border:1.5px solid #bfdbfe; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(37,99,235,0.06);">
        <h4 style="color:#1d4ed8; font-size:1.05rem; font-weight:800; margin-bottom:10px;">📐 Mathematics (28 Chapters)</h4>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">📘 Maths Mela (14 Chs):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px;">${mmLinks}</div>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">📙 Math-Magic (14 Chs):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">${mmgLinks}</div>
      </div>

      <!-- English Card -->
      <div style="background:#ffffff; border:1.5px solid #bae6fd; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(2,132,199,0.06);">
        <h4 style="color:#0284c7; font-size:1.05rem; font-weight:800; margin-bottom:10px;">📖 English (22 Chapters)</h4>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">📘 Santoor (12 Chs):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px;">${stLinks}</div>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">📙 Marigold (10 Units):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">${mgLinks}</div>
      </div>

      <!-- Hindi Card -->
      <div style="background:#ffffff; border:1.5px solid #fed7aa; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(217,119,6,0.06);">
        <h4 style="color:#d97706; font-size:1.05rem; font-weight:800; margin-bottom:10px;">🇮🇳 हिंदी (Hindi) (32 Chapters)</h4>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">📕 वीणा भाग 1 (18 पाठ):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px;">${vnLinks}</div>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">📙 रिमझिम भाग 3 (14 पाठ):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">${rjLinks}</div>
      </div>

      <!-- EVS Card -->
      <div style="background:#ffffff; border:1.5px solid #a7f3d0; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(5,150,105,0.06);">
        <h4 style="color:#059669; font-size:1.05rem; font-weight:800; margin-bottom:10px;">🌿 Environmental Studies (36 Chs)</h4>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">🌿 Our Wondrous World (12 Chs):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px;">${wwLinks}</div>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">🌍 Looking Around (24 Chs):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">${laLinks}</div>
      </div>

    </div>
`;

// Insert style for ch-dir-pill if not present
if (!hubHtml.includes('.ch-dir-pill')) {
  const customCss = `
    .ch-dir-pill {
      font-size: 0.76rem;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 4px;
      background: #f1f5f9;
      color: #1e293b;
      text-decoration: none;
      border: 1px solid #cbd5e1;
      transition: all 0.15s ease;
    }
    .ch-dir-pill:hover {
      background: #2563eb;
      color: #ffffff;
      border-color: #2563eb;
    }
  </style>`;
  hubHtml = hubHtml.replace('</style>', customCss);
}

// Insert directory section before Curriculum Comparison Table
if (!hubHtml.includes('Quick Direct Chapter Directory')) {
  hubHtml = hubHtml.replace('<!-- Curriculum Comparison Table -->', `${dirSectionHtml}\n    <!-- Curriculum Comparison Table -->`);
  fs.writeFileSync(hubPath, hubHtml, 'utf8');
  console.log('ncert-solutions-class-3.html updated with direct chapter directory!');
} else {
  console.log('Quick Direct Chapter Directory already present in Class 3 hub.');
}
