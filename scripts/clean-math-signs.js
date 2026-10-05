const fs = require('fs');
const path = require('path');

const supMap = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
  'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ',
  'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ',
  'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ',
  'p': 'ᵖ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ',
  'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ'
};

const subMap = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎',
  'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ',
  'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ',
  'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ',
  'v': 'ᵥ', 'x': 'ₓ'
};

function formatFractionPart(term) {
  let t = term.trim();
  // Already in enclosing parentheses or brackets
  if ((t.startsWith('(') && t.endsWith(')')) || (t.startsWith('[') && t.endsWith(']')) || (t.startsWith('{') && t.endsWith('}'))) {
    return t;
  }
  // Parenthesized power like (-4)³ or (-3)⁴ or (-2/3)⁻²
  if (/^\([^\(\)]+\)[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻ]+$/.test(t)) {
    return t;
  }
  // Simple atomic tokens like x, y, 2, 10, -5, 27, 540°, aᵐ, bᵐ, 10ⁿ, 2³, x₁, y₂
  if (!/[+\-−×÷=/]/.test(t)) {
    return t;
  }
  // Numbers with just a leading minus/plus sign like -5 or −7
  if (/^[+\-−]?[0-9a-zA-Z.]+$/.test(t)) {
    return t;
  }
  return '(' + t + ')';
}

function cleanMath(text) {
  let s = text;

  // 1. Convert math less-than to HTML entity &lt; when followed by a number or space to avoid HTML tag conflicts
  s = s.replace(/<(\s*\d+)/g, '&lt;$1');
  s = s.replace(/<(\s*=\s*\d+)/g, '&lt;$1');

  // 2. Mixed fractions spacing: e.g. 66\frac{2}{3} -> 66 \frac{2}{3}
  s = s.replace(/(\d+)\\frac\{/g, '$1 \\frac{');

  // 3. Brackets and grouping (CRITICAL: MUST run before \le to avoid \left being corrupted to ≤ft)
  s = s.replace(/\\left\\\{/g, '{').replace(/\\right\\\}/g, '}');
  s = s.replace(/\\left\{/g, '{').replace(/\\right\}/g, '}');
  s = s.replace(/\\left\(/g, '(').replace(/\\right\)/g, ')');
  s = s.replace(/\\left\[/g, '[').replace(/\\right\]/g, ']');
  s = s.replace(/\\left\./g, '').replace(/\\right\./g, '');
  s = s.replace(/\\\{/g, '{').replace(/\\\}/g, '}');

  // 4. Percentages & escaped symbols
  s = s.replace(/\\%/g, '%');

  // 5. Text & formatting wrappers (unwrap up to 3 layers)
  for (let k = 0; k < 3; k++) {
    s = s.replace(/\\(text|mathbf|mathrm|mathit|textbf|textit)\{([^{}]+)\}/g, '$2');
  }

  // 6. Math sets & special symbols
  s = s.replace(/\\mathbb\{Z\}/g, 'ℤ');
  s = s.replace(/\\mathbb\{R\}/g, 'ℝ');
  s = s.replace(/\\mathbb\{N\}/g, 'ℕ');
  s = s.replace(/\\mathbb\{Q\}/g, 'ℚ');
  s = s.replace(/\\mathbb\{([A-Za-z])\}/g, '$1');

  // 7. Overline (digit grouping in long division square roots)
  s = s.replace(/\\overline\{([^}]+)\}/g, '<span style="text-decoration:overline">$1</span>');

  // 8. Roots
  s = s.replace(/\\sqrt\[3\]\{([^}]+)\}/g, (m, p) => {
    const t = p.trim();
    return /^[0-9a-zA-Z]+$/.test(t) ? '∛' + t : '∛(' + t + ')';
  });
  s = s.replace(/\\sqrt\{([^}]+)\}/g, (m, p) => {
    const t = p.trim();
    return /^[0-9a-zA-Z]+$/.test(t) ? '√' + t : '√(' + t + ')';
  });

  // 9. Basic operators and arrows
  s = s.replace(/\\times/g, '×');
  s = s.replace(/\\div/g, '÷');
  s = s.replace(/\\pm/g, '±');
  s = s.replace(/\\implies/g, ' ⇒ ');
  s = s.replace(/\\iff/g, ' ⇔ ');
  s = s.replace(/\\to\b/g, ' → ');
  s = s.replace(/\\neq/g, '≠');
  s = s.replace(/\\le\b/g, '≤');
  s = s.replace(/\\ge\b/g, '≥');
  s = s.replace(/\\in\b/g, '∈');
  s = s.replace(/\\notin\b/g, '∉');
  s = s.replace(/\\setminus\s*\\?\{0\\?\}/g, '≠ 0');
  s = s.replace(/\\setminus\s*\{0\}/g, '≠ 0');
  s = s.replace(/\\setminus/g, ' \\ ');
  s = s.replace(/\\parallel/g, '∥');
  s = s.replace(/\\perp/g, '⊥');
  s = s.replace(/\\angle\s*/g, '∠');
  s = s.replace(/\\pi/g, 'π');
  s = s.replace(/\\approx/g, '≈');
  s = s.replace(/\\dots/g, '...');
  s = s.replace(/\\leftrightarrow/g, ' ↔ ');
  s = s.replace(/\\quad/g, ' ');
  s = s.replace(/\\qquad/g, ' ');
  s = s.replace(/\\;/g, ' ');
  s = s.replace(/\\,/g, ' ');

  // 10. Degrees
  s = s.replace(/\^\\circ/g, '°');
  s = s.replace(/\^°/g, '°');
  s = s.replace(/\\circ\b/g, '°');
  s = s.replace(/\\degree\b/g, '°');

  // 11. Superscript powers (before fractions so exponents in numerators/denominators become clean)
  // Braced exponents: ^{...}
  s = s.replace(/\^\{([^}]+)\}/g, (m, p) => {
    const cleanP = p.replace(/\s+/g, '');
    let res = '';
    let allMapped = true;
    for (const c of cleanP) {
      if (supMap[c]) {
        res += supMap[c];
      } else {
        allMapped = false;
        break;
      }
    }
    return allMapped ? res : '^(' + p.trim() + ')';
  });

  // Single char exponents: ^2, ^3, ^m, ^n, etc.
  s = s.replace(/\^([0-9a-z+\-])/gi, (m, c) => supMap[c.toLowerCase()] || ('^' + c));

  // 12. Subscripts: ONLY when preceded by a variable letter (e.g. x_1, y_2, C_1, P_0, d_1, h_1)
  // Never affects HTML attributes like id="q2_2_2" or toggleQ('q2_2_2') because they are preceded by digits!
  s = s.replace(/\b([a-zA-Z])_([0-9a-z])\b/g, (m, v, c) => v + (subMap[c.toLowerCase()] || ('_' + c)));
  s = s.replace(/\b([a-zA-Z])_\{([0-9a-z]+)\}/g, (m, v, p) => {
    let res = '';
    let allMapped = true;
    for (const c of p) {
      if (subMap[c.toLowerCase()]) res += subMap[c.toLowerCase()];
      else { allMapped = false; break; }
    }
    return allMapped ? v + res : m;
  });
  s = s.replace(/Population_\{2005\}/g, 'Population₂₀₀₅');
  s = s.replace(/TSA_([AB])/g, 'TSA($1)');

  // 13. Fractions iteratively from inside out
  while (/\\frac\{[^{}]+\}\{[^{}]+\}/.test(s)) {
    s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, (match, a, b) => {
      const cleanA = formatFractionPart(a);
      const cleanB = formatFractionPart(b);
      return cleanA + '/' + cleanB;
    });
  }

  // 14. Minus sign normalization in math context
  s = s.replace(/ - /g, ' − ');
  s = s.replace(/\(-([0-9a-zA-Z])/g, '(−$1');

  // 15. Stray backslashes
  s = s.replace(/\\([a-zA-Z]+)/g, '$1');
  s = s.replace(/\\\\/g, '\\');

  // 16. Normalize spaces
  s = s.replace(/[ \t]{2,}/g, ' ');

  return s;
}

// Audit & Transform all chapters
const dir = path.join(__dirname, '..', 'chapters-c8m');
let grandTotalBackslashesBefore = 0;
let grandTotalBackslashesAfter = 0;

console.log('=== CLEANING MATH SIGNS ACROSS ALL CHAPTERS ===\n');

for (let i = 1; i <= 13; i++) {
  const filePath = path.join(dir, `ch${i}.html`);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const countBefore = (content.match(/\\/g) || []).length;
  grandTotalBackslashesBefore += countBefore;

  const cleaned = cleanMath(content);
  const countAfter = (cleaned.match(/\\/g) || []).length;
  grandTotalBackslashesAfter += countAfter;

  fs.writeFileSync(filePath, cleaned, 'utf8');
  console.log(`Ch ${i.toString().padStart(2, ' ')}: cleaned ${countBefore} -> ${countAfter} backslashes.`);
  if (countAfter > 0) {
    const remaining = cleaned.match(/.{0,25}\\.{0,25}/g);
    console.log(`    Remaining snippets:`, remaining);
  }
}

console.log(`\nGrand Total Backslashes Before: ${grandTotalBackslashesBefore}`);
console.log(`Grand Total Backslashes After:  ${grandTotalBackslashesAfter}`);

if (grandTotalBackslashesAfter === 0) {
  console.log('\n🎉 ALL RAW LATEX CONVERTED TO CLEAN NATURAL MATH SIGNS! (0 BACKSLASHES REMAIN)');
} else {
  console.warn(`\n⚠️ ${grandTotalBackslashesAfter} backslashes remain.`);
}

module.exports = { cleanMath };
