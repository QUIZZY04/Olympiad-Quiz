const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6m');

function fixContent(text, ch) {
  let s = text;

  // 1. Clean broken bold-wrapped fractions: <strong>\x0crac{A</strong>{B}} or <strong>\frac{A</strong>{B}}
  s = s.replace(/<strong>[\x0c\\]?r?a?c?\{([^}]+)<\/strong>\{([^}]+)\}/g, '<strong>$1/$2</strong>');
  s = s.replace(/<strong>[\x0c\\]?frac\{([^}]+)<\/strong>\{([^}]+)\}/g, '<strong>$1/$2</strong>');

  // 2. Clean general \x0crac{A}{B} or rac{A}{B} or \frac{A}{B}
  s = s.replace(/[\x0c\\]?r?a?c?\{([^}]+)\}\{([^}]+)\}/g, '$1/$2');
  s = s.replace(/[\x0c\\]?frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2');

  // 3. Clean any remaining control char 0xc
  s = s.replace(/\x0c/g, '');

  // 4. Clean "t ×" that came from "times"
  s = s.replace(/\bt ×\b/g, 'times');
  s = s.replace(/6 t × her age/g, '6 times her age');
  s = s.replace(/3 t × y/g, '3 times y');
  s = s.replace(/exact number of t ×/g, 'exact number of times');

  // 5. Clean Chapter 7 specific fraction patterns
  s = s.replace(/1(3\/20)/g, '1 $1');
  s = s.replace(/2(1\/5)/g, '2 $1');
  s = s.replace(/3(1\/2)/g, '3 $1');
  s = s.replace(/5(7\/10)/g, '5 $1');
  s = s.replace(/1(3\/4)/g, '1 $1');
  s = s.replace(/Numerator ge Denominator/g, 'Numerator ≥ Denominator');
  s = s.replace(/Value ge 1/g, 'Value ≥ 1');
  s = s.replace(/\(b\s*\n?\s*<li>/g, '(b ≠ 0).</li>\n<li>');

  // 6. Clean Chapter 8 & 9 specifics
  s = s.replace(/overline\{AB\}/g, 'AB');
  s = s.replace(/at an ∠of 60°/g, 'at an angle of 60°');

  // 7. Clean Chapter 10 temperature inequality
  s = s.replace(/-4°\s*ext\{C &lt; -2°C &lt; \+12°C\}/g, '-4°C &lt; -2°C &lt; +12°C');
  s = s.replace(/-4°\s*C &lt; -2°C &lt; \+12°C\}/g, '-4°C &lt; -2°C &lt; +12°C');

  // 8. Clean Chapter 11 specifics
  s = s.replace(/\bdiv\b/g, '÷');
  s = s.replace(/<strong>x\/5 \+ 3y\}/g, '<strong>x/5 + 3y</strong>');
  s = s.replace(/\{3y - 5\}\/2/g, '(3y - 5) / 2');

  // 9. Clean Chapter 12 specifics
  s = s.replace(/iff a × d = b × c quad/g, 'if a × d = b × c');
  s = s.replace(/₹,35/g, '₹35');
  s = s.replace(/₹,/g, '₹');

  // 10. General cleanups
  s = s.replace(/T_6/g, 'T₆');
  s = s.replace(/T_n/g, 'Tₙ');
  s = s.replace(/a_n/g, 'aₙ');
  s = s.replace(/S_n/g, 'Sₙ');
  s = s.replace(/\{Z\}/g, 'Z');
  s = s.replace(/\{([0-9a-zA-Z\s\+\-\*]+)\}/g, '$1');

  // Clean double spaces
  s = s.replace(/  +/g, ' ');

  return s;
}

for (let ch = 1; ch <= 12; ch++) {
  const filePath = path.join(dir, `ch${ch}.html`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const cleaned = fixContent(raw, ch);
  fs.writeFileSync(filePath, cleaned, 'utf8');
  console.log(`Applied precision math fix to ch${ch}.html`);
}

console.log('All 12 chapters fixed!');
