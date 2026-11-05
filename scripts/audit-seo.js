const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.startsWith('ncert-solutions') && f.endsWith('.html'));
const sitemap = fs.readFileSync('sitemap.xml', 'utf8');

const results = [];

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  if (content.length < 500 && content.includes('http-equiv="refresh"')) {
    continue; // redirect stub
  }

  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i);
  const desc = descMatch ? descMatch[1].trim() : '';

  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([\s\S]*?)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';

  const robotsMatch = content.match(/<meta\s+name=["']robots["']\s+content=["']([\s\S]*?)["']/i);
  const robots = robotsMatch ? robotsMatch[1].trim() : '';

  const ogTitleMatch = content.match(/<meta\s+property=["']og:title["']/i);
  const ogDescMatch = content.match(/<meta\s+property=["']og:description["']/i);
  const ogImageMatch = content.match(/<meta\s+property=["']og:image["']/i);

  const twitterMatch = content.match(/<meta\s+name=["']twitter:card["']/i);

  const hasBreadcrumb = content.includes('"@type": "BreadcrumbList"') || content.includes('"@type":"BreadcrumbList"');
  const hasLearningResource = content.includes('LearningResource') || content.includes('Course');
  const hasFAQ = content.includes('"@type": "FAQPage"') || content.includes('"@type":"FAQPage"');

  const h1Match = content.match(/<h1[\s>]([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';

  const inSitemap = sitemap.includes(f);

  results.push({
    file: f,
    size: content.length,
    title,
    titleLen: title.length,
    descLen: desc.length,
    hasCanonical: !!canonical,
    canonical,
    hasRobots: !!robots,
    hasOg: !!(ogTitleMatch && ogDescMatch && ogImageMatch),
    hasTwitter: !!twitterMatch,
    hasBreadcrumb,
    hasLearningResource,
    hasFAQ,
    hasH1: !!h1,
    h1,
    inSitemap
  });
}

const auditOutput = {
  totalChecked: results.length,
  missingTitle: results.filter(r => !r.title).map(r => r.file),
  missingDesc: results.filter(r => r.descLen === 0).map(r => r.file),
  shortDesc: results.filter(r => r.descLen > 0 && r.descLen < 60).map(r => `${r.file} (${r.descLen} chars)`),
  missingCanonical: results.filter(r => !r.hasCanonical).map(r => r.file),
  missingRobots: results.filter(r => !r.hasRobots).map(r => r.file),
  missingOg: results.filter(r => !r.hasOg).map(r => r.file),
  missingTwitter: results.filter(r => !r.hasTwitter).map(r => r.file),
  missingBreadcrumb: results.filter(r => !r.hasBreadcrumb).map(r => r.file),
  missingLearningResource: results.filter(r => !r.hasLearningResource).map(r => r.file),
  missingFAQ: results.filter(r => !r.hasFAQ).map(r => r.file),
  missingH1: results.filter(r => !r.hasH1).map(r => r.file),
  notInSitemap: results.filter(r => !r.inSitemap).map(r => r.file),
  allFiles: results
};

fs.writeFileSync('scripts/seo-audit-results.json', JSON.stringify(auditOutput, null, 2), 'utf8');
console.log('AUDIT COMPLETED: total files:', results.length);
console.log('Missing Canonical:', auditOutput.missingCanonical.length);
console.log('Missing Description:', auditOutput.missingDesc.length);
console.log('Missing Robots:', auditOutput.missingRobots.length);
console.log('Missing OG:', auditOutput.missingOg.length);
console.log('Missing Twitter:', auditOutput.missingTwitter.length);
console.log('Missing Breadcrumb:', auditOutput.missingBreadcrumb.length);
console.log('Missing LearningResource:', auditOutput.missingLearningResource.length);
console.log('Missing FAQPage Schema:', auditOutput.missingFAQ.length);
console.log('Missing H1:', auditOutput.missingH1.length);
console.log('Not in Sitemap:', auditOutput.notInSitemap.length);
