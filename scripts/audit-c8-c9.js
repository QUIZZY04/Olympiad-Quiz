const fs = require('fs');
const path = require('path');

function auditFile(fileName, classNum) {
  const filePath = path.join(__dirname, '..', fileName);
  if (!fs.existsSync(filePath)) {
    console.log(`FILE NOT FOUND: ${fileName}`);
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i);
  const keywordsMatch = html.match(/<meta\s+name=["']keywords["']\s+content=["']([\s\S]*?)["']/i);
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([\s\S]*?)["']/i);

  console.log(`================================================================`);
  console.log(`AUDIT FOR CLASS ${classNum}: ${fileName}`);
  console.log(`================================================================`);
  console.log('Title:          ', titleMatch ? titleMatch[1].trim() : 'NONE');
  console.log('H1:             ', h1Match ? h1Match[1].trim() : 'NONE');
  console.log('Description:    ', descMatch ? descMatch[1].trim() : 'NONE');
  console.log('Keywords:       ', keywordsMatch ? keywordsMatch[1].trim() : 'NONE');
  console.log('Canonical:      ', canonicalMatch ? canonicalMatch[1].trim() : 'NONE');

  // Breadcrumbs
  const bcMatches = [...html.matchAll(/<span[^>]*class=["']bc-chip[^"']*["'][^>]*data-ch=["'](\d+)["'][^>]*>([\s\S]*?)<\/span>/gi)];
  console.log(`Breadcrumb Chips (${bcMatches.length}):`);
  bcMatches.forEach(m => {
    console.log(`   Chip Ch ${m[1]}: ${m[2].replace(/<[^>]+>/g, '').trim()}`);
  });

  // Sidebar links
  const sideMatches = [...html.matchAll(/<a[^>]*onclick=["']showChapter\((\d+)\)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  console.log(`Sidebar Links (${sideMatches.length}):`);
  sideMatches.forEach(m => {
    console.log(`   Nav Ch ${m[1]}: ${m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()}`);
  });

  // Chapter sections in DOM
  const chMatches = [...html.matchAll(/<section[^>]*class=["']chapter-section[^"']*["'][^>]*id=["']ch(\d+)["'][^>]*>([\s\S]*?)<\/section>/gi)];
  console.log(`\nChapter Sections in DOM (${chMatches.length}):`);

  chMatches.forEach(m => {
    const chNum = m[1];
    const secContent = m[2];
    const h2Match = secContent.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const h2 = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : 'NO H2';
    const exMatches = [...secContent.matchAll(/<div class=["']ex-div["']>([\s\S]*?)<\/div>/gi)].map(x => x[1].replace(/<[^>]+>/g, '').trim());
    const qMatches = [...secContent.matchAll(/<div class=["']q-card["']/gi)];
    const cbqMatches = [...secContent.matchAll(/<div class=["']cbq-card["']/gi)];
    const markingSchemes = [...secContent.matchAll(/class=["']marking-scheme["']/gi)];
    const cbseSchemeClaims = [...secContent.matchAll(/CBSE Marking Scheme/gi)];

    console.log(`\n--- Chapter ${chNum}: ${h2} ---`);
    console.log(`    Exercises (${exMatches.length}): ${exMatches.join(' | ')}`);
    console.log(`    Questions (q-card): ${qMatches.length}`);
    console.log(`    CBQs (cbq-card): ${cbqMatches.length}`);
    console.log(`    Marking Scheme boxes: ${markingSchemes.length}`);
    console.log(`    "CBSE Marking Scheme" text mentions: ${cbseSchemeClaims.length}`);

    // Print first 2 questions and their labels
    const qCards = [...secContent.matchAll(/<div class=["']q-card["'][^>]*id=["']([^"']+)["']>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/gi)];
    qCards.slice(0, 3).forEach((qc, idx) => {
      const qNum = (qc[2].match(/<div class=["']q-num["']>([\s\S]*?)<\/div>/i) || [])[1] || '';
      const qText = (qc[2].match(/<div class=["']q-text["']>([\s\S]*?)<\/div>/i) || [])[1] || '';
      console.log(`       [${qc[1]}] ${qNum.trim()}: ${qText.replace(/<[^>]+>/g, '').slice(0, 80)}...`);
    });
  });

  // Check marking scheme claims across whole file
  const totalCbseSchemeClaims = [...html.matchAll(/CBSE Marking Scheme/gi)].length;
  console.log(`\nTotal "CBSE Marking Scheme" claims in file: ${totalCbseSchemeClaims}`);

  // Check spelling of Ganit Manzari vs Ganita Manjari
  const manzariCount = [...html.matchAll(/Manzari/gi)].length;
  const manjariCount = [...html.matchAll(/Manjari/gi)].length;
  const prakashCount = [...html.matchAll(/Prakash/gi)].length;
  console.log(`Spelling Check: 'Manzari': ${manzariCount}, 'Manjari': ${manjariCount}, 'Prakash': ${prakashCount}`);
}

auditFile('ncert-solutions-class-8-maths.html', 8);
console.log('\n\n');
auditFile('ncert-solutions-class-9-maths.html', 9);
