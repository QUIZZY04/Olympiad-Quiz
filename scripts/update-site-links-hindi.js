const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

const filesToUpdate = [
  'ncert-solutions-class-10-maths.html',
  'ncert-solutions-class-10-mathematics.html',
  'ncert-solutions-class-10-science.html',
  'ncert-solutions-class-10-sst.html',
  'ncert-solutions-class-10-social-science.html',
  'ncert-solutions-class-10-english.html',
  'ncert-solutions-class-10-english-communicative.html',
  'ncert-solutions-class-10-sanskrit.html'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. In navbar dropdown, ensure Class 10 Hindi is present
  if (!content.includes('ncert-solutions-class-10-hindi.html')) {
    if (content.includes('ncert-solutions-class-10-sanskrit.html')) {
      content = content.replace(
        '<a href="ncert-solutions-class-10-sanskrit.html"',
        '<a href="ncert-solutions-class-10-hindi.html">Class 10 Hindi 🇮🇳</a>\n          <a href="ncert-solutions-class-10-sanskrit.html"'
      );
      changed = true;
    } else if (content.includes('ncert-solutions-class-10-maths.html')) {
      content = content.replace(
        '<a href="ncert-solutions-class-10-maths.html"',
        '<a href="ncert-solutions-class-10-hindi.html">Class 10 Hindi 🇮🇳</a>\n          <a href="ncert-solutions-class-10-maths.html"'
      );
      changed = true;
    }
  }

  // 2. In ncert-bc-switch pills, ensure Hindi is included
  const bcSwitchRegex = /<div class="ncert-bc-switch">([\s\S]*?)<\/div>/;
  const match = content.match(bcSwitchRegex);
  if (match) {
    let switchHtml = match[1];
    if (!switchHtml.includes('ncert-solutions-class-10-hindi.html')) {
      // Add Hindi pill
      switchHtml += '\n      <a href="ncert-solutions-class-10-hindi.html" class="ncert-bc-pill">Hindi</a>';
      if (!switchHtml.includes('ncert-solutions-class-10-sanskrit.html')) {
        switchHtml += '\n      <a href="ncert-solutions-class-10-sanskrit.html" class="ncert-bc-pill">Sanskrit</a>';
      }
      content = content.replace(bcSwitchRegex, `<div class="ncert-bc-switch">${switchHtml}</div>`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file} with Class 10 Hindi links`);
  } else {
    console.log(`No changes needed in ${file}`);
  }
});
