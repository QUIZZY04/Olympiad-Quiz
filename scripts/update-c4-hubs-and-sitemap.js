const fs = require('fs');
const path = require('path');

// 1. Update sitemap.xml with all 114 Chapter URLs for Class 4
const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const c4mDir = path.join(__dirname, '..', 'chapters-c4m');
const c4eDir = path.join(__dirname, '..', 'chapters-c4e');
const c4hDir = path.join(__dirname, '..', 'chapters-c4h');
const c4evsDir = path.join(__dirname, '..', 'chapters-c4evs');

const mFiles = fs.readdirSync(c4mDir).filter(f => f.endsWith('.html')).map(f => `chapters-c4m/${f}`);
const eFiles = fs.readdirSync(c4eDir).filter(f => f.endsWith('.html')).map(f => `chapters-c4e/${f}`);
const hFiles = fs.readdirSync(c4hDir).filter(f => f.endsWith('.html')).map(f => `chapters-c4h/${f}`);
const evsFiles = fs.readdirSync(c4evsDir).filter(f => f.endsWith('.html')).map(f => `chapters-c4evs/${f}`);

const all114 = [...mFiles, ...eFiles, ...hFiles, ...evsFiles];
console.log(`Found ${all114.length} total chapter files for Class 4.`);

// Also add subject hub pages if missing
const subjectPages = [
  'ncert-solutions-class-4.html',
  'ncert-solutions-class-4-maths.html',
  'ncert-solutions-class-4-english.html',
  'ncert-solutions-class-4-hindi.html',
  'ncert-solutions-class-4-evs.html'
];

let addedUrls = 0;
let newSitemapEntries = '\n  <!-- Class 4 Subject Hubs & Modular Chapters (100% Coverage) -->\n';

[...subjectPages, ...all114].forEach(rel => {
  const url = `https://olympiadquiz.org/${rel}`;
  if (!sitemapContent.includes(`<loc>${url}</loc>`)) {
    const priority = rel.startsWith('ncert-solutions-class-4') ? '0.95' : '0.90';
    newSitemapEntries += `  <url>\n    <loc>${url}</loc>\n    <lastmod>2026-10-23</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
    addedUrls++;
  }
});

if (addedUrls > 0) {
  sitemapContent = sitemapContent.replace('</urlset>', `${newSitemapEntries}</urlset>`);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`sitemap.xml updated with ${addedUrls} new URLs.`);
} else {
  console.log('All Class 4 URLs already in sitemap.xml');
}

// 2. Build Chapter Directory Section for ncert-solutions-class-4.html (for SEO bots)
const hubPath = path.join(__dirname, '..', 'ncert-solutions-class-4.html');
let hubHtml = fs.readFileSync(hubPath, 'utf8');

// Generate Links List for Maths Mela (14)
const mmLinks = Array.from({ length: 14 }, (_, i) => `<a href="chapters-c4m/maths-mela-ch${i+1}.html" class="ch-dir-pill">Ch ${i+1}</a>`).join('');
// Math-Magic (14)
const mmgLinks = Array.from({ length: 14 }, (_, i) => `<a href="chapters-c4m/math-magic-ch${i+1}.html" class="ch-dir-pill">Ch ${i+1}</a>`).join('');
// Santoor (12)
const stLinks = Array.from({ length: 12 }, (_, i) => `<a href="chapters-c4e/santoor-ch${i+1}.html" class="ch-dir-pill">Ch ${i+1}</a>`).join('');
// Marigold (10)
const mgLinks = Array.from({ length: 10 }, (_, i) => `<a href="chapters-c4e/marigold-unit${i+1}.html" class="ch-dir-pill">Unit ${i+1}</a>`).join('');
// Veena (13)
const vnLinks = Array.from({ length: 13 }, (_, i) => `<a href="chapters-c4h/veena-ch${i+1}.html" class="ch-dir-pill">पाठ ${i+1}</a>`).join('');
// Rimjhim (14)
const rjLinks = Array.from({ length: 14 }, (_, i) => `<a href="chapters-c4h/rimjhim-ch${i+1}.html" class="ch-dir-pill">पाठ ${i+1}</a>`).join('');
// Our Wondrous World (10)
const owwLinks = Array.from({ length: 10 }, (_, i) => `<a href="chapters-c4evs/our-wondrous-world-ch${i+1}.html" class="ch-dir-pill">Ch ${i+1}</a>`).join('');
// Looking Around (27)
const laLinks = Array.from({ length: 27 }, (_, i) => `<a href="chapters-c4evs/looking-around-ch${i+1}.html" class="ch-dir-pill">Ch ${i+1}</a>`).join('');

const dirSectionHtml = `
    <!-- Chapterwise Modular Directory (100% Comprehensive Coverage) -->
    <section class="sec-head" style="margin-top: 50px;">
      <h2>Official Chapterwise Modular Directories (114 Standalone Chapters)</h2>
      <p>Direct access to complete, individual chapter pages with vector diagrams, exercises, and CBSE step-by-step marking schemes.</p>
    </section>

    <div style="background: white; border: 1.5px solid var(--border); border-radius: 16px; padding: 28px; margin-bottom: 48px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 1.15rem; color: #1e3a8a; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <span>📐</span> Class 4 Mathematics Solutions (28 Chapters)
        </h3>
        <div style="margin-bottom: 12px;">
          <strong style="font-size: 0.85rem; color: #475569;">📘 Maths Mela (New NCF 2023):</strong>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;">${mmLinks}</div>
        </div>
        <div>
          <strong style="font-size: 0.85rem; color: #475569;">📙 Math-Magic (Classic CBSE):</strong>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;">${mmgLinks}</div>
        </div>
      </div>

      <div style="margin-bottom: 24px; padding-top: 18px; border-top: 1px dashed #e2e8f0;">
        <h3 style="font-size: 1.15rem; color: #0369a1; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <span>📖</span> Class 4 English Solutions (22 Chapters)
        </h3>
        <div style="margin-bottom: 12px;">
          <strong style="font-size: 0.85rem; color: #475569;">📘 Santoor (New NCF 2023):</strong>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;">${stLinks}</div>
        </div>
        <div>
          <strong style="font-size: 0.85rem; color: #475569;">📙 Marigold (Classic CBSE):</strong>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;">${mgLinks}</div>
        </div>
      </div>

      <div style="margin-bottom: 24px; padding-top: 18px; border-top: 1px dashed #e2e8f0;">
        <h3 style="font-size: 1.15rem; color: #b45309; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <span>📜</span> Class 4 Hindi Solutions (27 Chapters)
        </h3>
        <div style="margin-bottom: 12px;">
          <strong style="font-size: 0.85rem; color: #475569;">📘 Veena - वीणा (New NCF 2023):</strong>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;">${vnLinks}</div>
        </div>
        <div>
          <strong style="font-size: 0.85rem; color: #475569;">📙 Rimjhim - रिमझिम (Classic CBSE):</strong>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;">${rjLinks}</div>
        </div>
      </div>

      <div style="padding-top: 18px; border-top: 1px dashed #e2e8f0;">
        <h3 style="font-size: 1.15rem; color: #047857; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <span>🌿</span> Class 4 EVS / The World Around Us (37 Chapters)
        </h3>
        <div style="margin-bottom: 12px;">
          <strong style="font-size: 0.85rem; color: #475569;">📘 Our Wondrous World (New NCF 2023):</strong>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;">${owwLinks}</div>
        </div>
        <div>
          <strong style="font-size: 0.85rem; color: #475569;">📙 Looking Around (Classic CBSE):</strong>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;">${laLinks}</div>
        </div>
      </div>
    </div>
`;

if (!hubHtml.includes('ch-dir-pill')) {
  // Inject style for ch-dir-pill
  const pillStyle = `
    .ch-dir-pill { display: inline-flex; align-items: center; justify-content: center; padding: 5px 12px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.78rem; font-weight: 700; color: #1e293b; text-decoration: none; transition: all 0.15s ease; }
    .ch-dir-pill:hover { background: #2563eb; color: #ffffff; border-color: #2563eb; transform: translateY(-1px); }
  </style>`;
  hubHtml = hubHtml.replace('</style>', pillStyle);
  hubHtml = hubHtml.replace('<!-- SUBJECT CARDS GRID -->', `${dirSectionHtml}\n    <!-- SUBJECT CARDS GRID -->`);
  fs.writeFileSync(hubPath, hubHtml, 'utf8');
  console.log('ncert-solutions-class-4.html updated with complete 114 chapter directory for SEO indexing.');
} else {
  console.log('Directory already exists in ncert-solutions-class-4.html');
}
