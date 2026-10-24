const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const scripts = [
  'scripts/build-c6m-hub.js',
  'scripts/build-c6s-hub.js',
  'scripts/build-c6sst-hub.js',
  'scripts/build-c6eng-hub.js',
  'scripts/build-c6h-malhar-hub.js'
];

scripts.forEach(scriptRel => {
  const scriptPath = path.join(ROOT, scriptRel);
  if (!fs.existsSync(scriptPath)) return;
  let code = fs.readFileSync(scriptPath, 'utf8');
  
  // Replace the simple read with section extraction
  const oldPattern1 = /allChapters\[i\]\s*=\s*fs\.readFileSync\(.*?\);/g;
  const oldPattern2 = /allChapters\[i\]\s*=\s*fs\.readFileSync\(filePath,\s*['"]utf8['"]\);/g;

  if (code.includes('allChapters[i] = fs.readFileSync')) {
    code = code.replace(/allChapters\[i\]\s*=\s*fs\.readFileSync\(([\s\S]*?)\);/g, (match, args) => {
      return `const rawContent = fs.readFileSync(${args});\n  const sectionMatch = rawContent.match(/<section[\\s\\S]*?<\\/section>/);\n  allChapters[i] = sectionMatch ? sectionMatch[0] : rawContent;`;
    });
  }

  fs.writeFileSync(scriptPath, code, 'utf8');
  console.log(`Patched extractor in ${scriptRel}`);
});
