const fs = require('fs');
const html = fs.readFileSync('ncert-solutions-class-8-maths.html', 'utf8');

console.log('Class 8 Title:', (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1]);
console.log('Class 8 H1:', (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]);
console.log('Class 8 Meta Desc:', (html.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i) || [])[1]);

const chMatches = [...html.matchAll(/<section[^>]*class=["']chapter-section[^"']*["'][^>]*id=["']ch(\d+)["'][^>]*>([\s\S]*?)<\/section>/gi)];
console.log('Chapter count in DOM:', chMatches.length);

chMatches.forEach(m => {
  const chNum = m[1];
  const secContent = m[2];
  const h2Match = secContent.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const h2 = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : 'NO H2';
  const exMatches = [...secContent.matchAll(/<div class=["']ex-div["']>([\s\S]*?)<\/div>/gi)].map(x => x[1].replace(/<[^>]+>/g, '').trim());
  const qMatches = [...secContent.matchAll(/<div class=["']q-card["']/gi)];
  console.log(`Ch ${chNum}: ${h2} | Exs: ${exMatches.length} (${exMatches.slice(0, 2).join('; ')}) | Qs: ${qMatches.length}`);
});

const cbseSchemeClaims = [...html.matchAll(/CBSE Marking Scheme/gi)].length;
console.log(`"CBSE Marking Scheme" claims: ${cbseSchemeClaims}`);
