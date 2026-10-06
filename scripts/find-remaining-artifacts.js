const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6m');

const issues = [];

for (let ch = 1; ch <= 12; ch++) {
  const file = `ch${ch}.html`;
  const content = fs.readFileSync(path.join(dir, file), 'utf8');

  // Check control chars other than \r, \n, \t
  for (let i = 0; i < content.length; i++) {
    const code = content.charCodeAt(i);
    if (code < 32 && code !== 9 && code !== 10 && code !== 13) {
      const snippet = content.substring(Math.max(0, i - 15), Math.min(content.length, i + 25)).replace(/[\r\n]+/g, ' ');
      issues.push({ ch, type: `Control char 0x${code.toString(16)}`, snippet });
    }
  }

  // Check backslashes
  const bslashMatches = content.match(/\\+[a-zA-Z]+/g);
  if (bslashMatches) {
    issues.push({ ch, type: 'Backslash word', matches: Array.from(new Set(bslashMatches)) });
  }

  // Check remaining $
  if (content.includes('$')) {
    issues.push({ ch, type: 'Dollar sign', count: content.split('$').length - 1 });
  }

  // Check braces artifacts like {something} in text
  const braceMatches = content.match(/\{[0-9a-zA-Z\s\+\-\/\*]+\}/g);
  if (braceMatches) {
    // filter out style or svg
    const mathBraces = braceMatches.filter(b => !b.includes('font') && !b.includes('margin'));
    if (mathBraces.length > 0) {
      issues.push({ ch, type: 'Math braces', matches: mathBraces });
    }
  }

  // Check words like rac or mathbf or text
  const rawWords = content.match(/\b(rac|mathbf|ext)\b/g);
  if (rawWords) {
    issues.push({ ch, type: 'Raw LaTeX words', matches: rawWords });
  }
}

console.log('Artifacts analysis results:');
console.log(JSON.stringify(issues, null, 2));
