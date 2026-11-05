const fs = require('fs');

const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
const files = fs.readdirSync('.').filter(f => f.startsWith('ncert-solutions') && f.endsWith('.html'));

let nonStubs = [];
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.length > 500 && !content.includes('http-equiv="refresh"')) {
    nonStubs.push(f);
  }
});

console.log('Total non-stub NCERT files:', nonStubs.length);

let missingInSitemap = [];
nonStubs.forEach(f => {
  if (!sitemap.includes(`/${f}</loc>`)) {
    missingInSitemap.push(f);
  }
});

console.log('Missing in sitemap:', missingInSitemap);

// Check lastmod dates
let updatedSitemap = sitemap;
nonStubs.forEach(f => {
  const urlBlockRegex = new RegExp(`(<url>[\\s\\S]*?<loc>https:\\/\\/olympiadquiz\\.org\\/${f}<\\/loc>[\\s\\S]*?<lastmod>)([^<]+)(<\\/lastmod>)`, 'i');
  if (urlBlockRegex.test(updatedSitemap)) {
    updatedSitemap = updatedSitemap.replace(urlBlockRegex, `$12026-10-28$3`);
  }
});

fs.writeFileSync('sitemap.xml', updatedSitemap, 'utf8');
console.log('sitemap.xml lastmod dates refreshed to 2026-10-28 for all NCERT solution pages!');
