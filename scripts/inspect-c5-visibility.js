const fs = require('fs');
const path = require('path');

function inspectDir(dirName) {
  if (!fs.existsSync(dirName)) {
    console.log('Dir does not exist:', dirName);
    return;
  }
  const files = fs.readdirSync(dirName).filter(f => f.endsWith('.html'));
  console.log(`\n=== Directory: ${dirName} (${files.length} files) ===`);
  files.forEach(f => {
    const content = fs.readFileSync(path.join(dirName, f), 'utf8');
    const qCards = (content.match(/class=["']q-card[^"']*["']/g) || []).length;
    const openCards = (content.match(/class=["']q-card open["']/g) || []).length;
    console.log(`- ${f}: Total Q-Cards: ${qCards} | Open Q-Cards: ${openCards}`);
  });
}

function inspectHub(hubFile) {
  if (!fs.existsSync(hubFile)) {
    console.log('Hub does not exist:', hubFile);
    return;
  }
  const content = fs.readFileSync(hubFile, 'utf8');
  const qCards = (content.match(/class=["']q-card[^"']*["']/g) || []).length;
  const openCards = (content.match(/class=["']q-card open["']/g) || []).length;
  console.log(`\n=== Hub: ${hubFile} ===`);
  console.log(`Total Q-Cards: ${qCards} | Open Q-Cards: ${openCards}`);
  const sectionMatches = content.match(/<section id=["']([^"']+)["']/g) || [];
  console.log(`Sections count: ${sectionMatches.length}`);
}

inspectDir('chapters-c5m');
inspectDir('chapters-c5e');
inspectDir('chapters-c5h');
inspectDir('chapters-c5evs');

inspectHub('ncert-solutions-class-5-maths.html');
inspectHub('ncert-solutions-class-5-english.html');
inspectHub('ncert-solutions-class-5-hindi.html');
inspectHub('ncert-solutions-class-5-evs.html');
