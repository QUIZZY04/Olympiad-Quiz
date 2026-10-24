const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function patchFile(fileRel, updater) {
  const filePath = path.join(ROOT, fileRel);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${fileRel}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  content = updater(content);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Patched: ${fileRel}`);
}

// 1. Patch build-c6m-hub.js
patchFile('scripts/build-c6m-hub.js', (txt) => {
  txt = txt.replace(/https:\/\/olympiadquiz\.org\/ncert-solutions\.html#class6/g, 'https://olympiadquiz.org/ncert-solutions-class-6.html');
  txt = txt.replace(/<a href="ncert-solutions\.html#class6">Class 6<\/a>/g, '<a href="ncert-solutions-class-6.html">Class 6</a>');
  
  const oldSwitch = `<div class="ncert-bc-switch">
        <span class="ncert-bc-switch-label">Switch Subject:</span>
        <a href="ncert-solutions-class-6-maths.html" class="ncert-bc-pill active">Maths</a>
        <a href="ncert-solutions-class-6-science.html" class="ncert-bc-pill">Science</a>
        <a href="ncert-solutions.html#class6" class="ncert-bc-pill">All Class 6 Subjects</a>
      </div>`;
  const newSwitch = `<div class="ncert-bc-switch">
        <span class="ncert-bc-switch-label">Switch Subject:</span>
        <a href="ncert-solutions-class-6-maths.html" class="ncert-bc-pill active">Maths</a>
        <a href="ncert-solutions-class-6-science.html" class="ncert-bc-pill">Science</a>
        <a href="ncert-solutions-class-6-sst.html" class="ncert-bc-pill">Social Science</a>
        <a href="ncert-solutions-class-6-english.html" class="ncert-bc-pill">English</a>
        <a href="ncert-solutions-class-6-hindi-malhar.html" class="ncert-bc-pill">Hindi (Malhar)</a>
        <a href="ncert-solutions-class-6-hindi.html" class="ncert-bc-pill">Hindi (Vasant)</a>
        <a href="ncert-solutions-class-6-sanskrit.html" class="ncert-bc-pill">Sanskrit</a>
        <a href="ncert-solutions-class-6.html" class="ncert-bc-pill">All Class 6 Hub</a>
      </div>`;
  if (txt.includes(oldSwitch)) {
    txt = txt.replace(oldSwitch, newSwitch);
  }
  return txt;
});

// 2. Patch build-c6s-hub.js
patchFile('scripts/build-c6s-hub.js', (txt) => {
  txt = txt.replace(/https:\/\/olympiadquiz\.org\/ncert-solutions\.html#class6/g, 'https://olympiadquiz.org/ncert-solutions-class-6.html');
  txt = txt.replace(/<a href="ncert-solutions\.html#class6">Class 6<\/a>/g, '<a href="ncert-solutions-class-6.html">Class 6</a>');
  
  const oldSwitch = `<div class="ncert-bc-switch">
        <span class="ncert-bc-switch-label">Switch Subject:</span>
        <a href="ncert-solutions-class-6-science.html" class="ncert-bc-pill active">Science</a>
        <a href="ncert-solutions-class-6-maths.html" class="ncert-bc-pill">Maths</a>
        <a href="ncert-solutions.html#class6" class="ncert-bc-pill">All Class 6 Subjects</a>
      </div>`;
  const newSwitch = `<div class="ncert-bc-switch">
        <span class="ncert-bc-switch-label">Switch Subject:</span>
        <a href="ncert-solutions-class-6-maths.html" class="ncert-bc-pill">Maths</a>
        <a href="ncert-solutions-class-6-science.html" class="ncert-bc-pill active">Science</a>
        <a href="ncert-solutions-class-6-sst.html" class="ncert-bc-pill">Social Science</a>
        <a href="ncert-solutions-class-6-english.html" class="ncert-bc-pill">English</a>
        <a href="ncert-solutions-class-6-hindi-malhar.html" class="ncert-bc-pill">Hindi (Malhar)</a>
        <a href="ncert-solutions-class-6-hindi.html" class="ncert-bc-pill">Hindi (Vasant)</a>
        <a href="ncert-solutions-class-6-sanskrit.html" class="ncert-bc-pill">Sanskrit</a>
        <a href="ncert-solutions-class-6.html" class="ncert-bc-pill">All Class 6 Hub</a>
      </div>`;
  if (txt.includes(oldSwitch)) {
    txt = txt.replace(oldSwitch, newSwitch);
  }
  return txt;
});

// 3. Patch build-c6sst-hub.js
patchFile('scripts/build-c6sst-hub.js', (txt) => {
  txt = txt.replace(/https:\/\/olympiadquiz\.org\/ncert-solutions\.html#class6/g, 'https://olympiadquiz.org/ncert-solutions-class-6.html');
  txt = txt.replace(/<a href="ncert-solutions\.html#class6">Class 6<\/a>/g, '<a href="ncert-solutions-class-6.html">Class 6</a>');
  
  const oldSwitchRegex = /<div class="ncert-bc-switch">[\s\S]*?<\/div>/;
  const newSwitch = `<div class="ncert-bc-switch">
        <span class="ncert-bc-switch-label">Switch Subject:</span>
        <a href="ncert-solutions-class-6-maths.html" class="ncert-bc-pill">Maths</a>
        <a href="ncert-solutions-class-6-science.html" class="ncert-bc-pill">Science</a>
        <a href="ncert-solutions-class-6-sst.html" class="ncert-bc-pill active">Social Science</a>
        <a href="ncert-solutions-class-6-english.html" class="ncert-bc-pill">English</a>
        <a href="ncert-solutions-class-6-hindi-malhar.html" class="ncert-bc-pill">Hindi (Malhar)</a>
        <a href="ncert-solutions-class-6-hindi.html" class="ncert-bc-pill">Hindi (Vasant)</a>
        <a href="ncert-solutions-class-6-sanskrit.html" class="ncert-bc-pill">Sanskrit</a>
        <a href="ncert-solutions-class-6.html" class="ncert-bc-pill">All Class 6 Hub</a>
      </div>`;
  txt = txt.replace(oldSwitchRegex, newSwitch);
  return txt;
});

// 4. Patch build-c6eng-hub.js
patchFile('scripts/build-c6eng-hub.js', (txt) => {
  txt = txt.replace(/https:\/\/olympiadquiz\.org\/ncert-solutions\.html#class6/g, 'https://olympiadquiz.org/ncert-solutions-class-6.html');
  txt = txt.replace(/<a href="ncert-solutions\.html#class6">Class 6<\/a>/g, '<a href="ncert-solutions-class-6.html">Class 6</a>');
  
  const oldSwitchRegex = /<div class="ncert-bc-switch">[\s\S]*?<\/div>/;
  const newSwitch = `<div class="ncert-bc-switch">
        <span class="ncert-bc-switch-label">Switch Subject:</span>
        <a href="ncert-solutions-class-6-maths.html" class="ncert-bc-pill">Maths</a>
        <a href="ncert-solutions-class-6-science.html" class="ncert-bc-pill">Science</a>
        <a href="ncert-solutions-class-6-sst.html" class="ncert-bc-pill">Social Science</a>
        <a href="ncert-solutions-class-6-english.html" class="ncert-bc-pill active">English</a>
        <a href="ncert-solutions-class-6-hindi-malhar.html" class="ncert-bc-pill">Hindi (Malhar)</a>
        <a href="ncert-solutions-class-6-hindi.html" class="ncert-bc-pill">Hindi (Vasant)</a>
        <a href="ncert-solutions-class-6-sanskrit.html" class="ncert-bc-pill">Sanskrit</a>
        <a href="ncert-solutions-class-6.html" class="ncert-bc-pill">All Class 6 Hub</a>
      </div>`;
  txt = txt.replace(oldSwitchRegex, newSwitch);
  return txt;
});

console.log('All Class 6 builder scripts patched successfully!');
