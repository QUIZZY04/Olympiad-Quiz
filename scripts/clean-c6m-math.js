const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6m');

function transformMath(content) {
  let s = content;

  // 1. Specific known corrupted / control-char LaTeX sequences
  // \x0crac or \frac or frac
  s = s.replace(/[\x0c\\]?frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)');
  // Clean up excessive outer parens for simple numbers like (88 / 4) -> 88/4
  s = s.replace(/\(([0-9a-zA-Z]+)\s*\/\s*([0-9a-zA-Z]+)\)/g, '$1/$2');
  s = s.replace(/\(([n0-9a-zA-Z\s\+\-]+)\s*\/\s*([0-9]+)\)/g, '$1 / $2');

  // \times or \t imes or imes in formulas
  s = s.replace(/\\times/g, ' × ');
  s = s.replace(/\t?imes/g, ' × ');

  // \theta or \t heta
  s = s.replace(/\\theta/g, 'θ');
  s = s.replace(/\t?heta/g, 'θ');

  // \vec or \u000bec
  s = s.replace(/\\vec\{([^}]+)\}/g, 'ray $1');
  s = s.replace(/\u000bec\{([^}]+)\}/g, 'ray $1');
  s = s.replace(/\\overleftrightarrow\{([^}]+)\}/g, 'line $1');
  s = s.replace(/\\overline\{([^}]+)\}/g, 'segment $1');

  // \text{...} or \t ext{...} or text{...}
  s = s.replace(/\\?mathbf\{([^}]+)\}/g, '<strong>$1</strong>');
  s = s.replace(/[\t\\]?ext\{([^}]+)\}/g, '$1');

  // Degrees
  s = s.replace(/\^\{\\?circ\}/g, '°');
  s = s.replace(/\^\\?circ/g, '°');

  // Ordinals in superscripts
  s = s.replace(/\^\{\s*th\s*\}/gi, 'ᵗʰ');
  s = s.replace(/\^\{\s*st\s*\}/gi, 'ˢᵗ');
  s = s.replace(/\^\{\s*nd\s*\}/gi, 'ⁿᵈ');
  s = s.replace(/\^\{\s*rd\s*\}/gi, 'ʳᵈ');

  // Powers
  s = s.replace(/\^2\b/g, '²');
  s = s.replace(/\^3\b/g, '³');
  s = s.replace(/\^4\b/g, '⁴');
  s = s.replace(/\^1\b/g, '¹');
  s = s.replace(/\^n\b/g, 'ⁿ');
  s = s.replace(/\^\{2\}/g, '²');
  s = s.replace(/\^\{3\}/g, '³');

  // Subscripts
  s = s.replace(/_\{20\}/g, '₂₀');
  s = s.replace(/_\{10\}/g, '₁₀');
  s = s.replace(/_\{n-1\}/g, 'ₙ₋₁');
  s = s.replace(/_\{n\}/g, 'ₙ');
  s = s.replace(/_\{1\}/g, '₁');
  s = s.replace(/_\{2\}/g, '₂');
  s = s.replace(/_\{3\}/g, '₃');
  s = s.replace(/_\{4\}/g, '₄');
  s = s.replace(/_n\b/g, 'ₙ');
  s = s.replace(/_1\b/g, '₁');
  s = s.replace(/_2\b/g, '₂');
  s = s.replace(/_3\b/g, '₃');
  s = s.replace(/_4\b/g, '₄');
  s = s.replace(/_5\b/g, '₅');

  // Math symbols
  s = s.replace(/\\dots/g, '...');
  s = s.replace(/\bdots\b/g, '...');
  s = s.replace(/\\cdot/g, ' × ');
  s = s.replace(/\\implies/g, ' ⇒ ');
  s = s.replace(/\bimplies\b/g, ' ⇒ ');
  s = s.replace(/\\angle\s*([A-Za-z0-9]+)/g, '∠$1');
  s = s.replace(/\bangle\s*([A-Za-z0-9]+)/g, '∠$1');
  s = s.replace(/\\perp/g, ' ⊥ ');
  s = s.replace(/\\approx/g, ' ≈ ');
  s = s.replace(/\\bigstar/g, '★');
  s = s.replace(/\\ne\b/g, '≠');
  s = s.replace(/\\neq\b/g, '≠');
  s = s.replace(/\\pm\b/g, '±');
  s = s.replace(/\\pi\b/g, 'π');
  s = s.replace(/\\le\b/g, '≤');
  s = s.replace(/\\leq\b/g, '≤');
  s = s.replace(/\\ge\b/g, '≥');
  s = s.replace(/\\geq\b/g, '≥');

  // Remove $$ and $ delimiters
  s = s.replace(/\$\$/g, '');
  s = s.replace(/\$/g, '');

  // Clean double spaces in equations
  s = s.replace(/  +/g, ' ');

  // Clean specific artifacts like "<strong><strong>"
  s = s.replace(/<strong><strong>/g, '<strong>');
  s = s.replace(/<\/strong><\/strong>/g, '</strong>');

  return s;
}

// Process all chapters
for (let ch = 1; ch <= 12; ch++) {
  const filePath = path.join(dir, `ch${ch}.html`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const cleaned = transformMath(raw);
  fs.writeFileSync(filePath, cleaned, 'utf8');
  console.log(`Cleaned ch${ch}.html`);
}

console.log('All 12 chapter files successfully cleaned of raw LaTeX!');
