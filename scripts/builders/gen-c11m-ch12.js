// scripts/builders/gen-c11m-ch12.js
// Complete, verbatim NCERT generator for Class 11 Mathematics Chapter 12: Limits and Derivatives (All 44 Questions)
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', '..', 'chapters-c11m');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function createQCard(id, num, exercise, qText, answerHtml, marks, rubricRows) {
  const rubricHtml = rubricRows.map(r => `
          <div class="marking-row"><span class="marking-key">${r[0]}</span><span class="marking-marks">${r[1]}</span></div>`).join('');

  return `
  <!-- ${id} (${exercise}) -->
  <div class="q-card" id="${id}">
    <div class="q-head" onclick="toggleQ('${id}')">
      <div class="q-num">${num}</div>
      <div class="q-text">
        <span style="display:inline-block; font-size:0.75rem; font-weight:800; text-transform:uppercase; background:#eff6ff; color:#1d4ed8; padding:2px 8px; border-radius:4px; margin-bottom:4px;">${exercise}</span><br>
        ${qText}
      </div>
      <div class="q-marks">[${marks}]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Step-by-Step Solution</div>
        <div class="answer-text">
          ${answerHtml}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme Rubric (Session 2026–27)</div>
          ${rubricHtml}
        </div>
      </div>
    </div>
  </div>`;
}

// Store questions grouped by exercise
const ex12_1 = []; // Limits (32 Qs)
const ex12_2 = []; // Derivatives (11 Qs)
const misc = [];   // Misc First Principles (1 Q with 4 parts)

// ============================================================================
// EXERCISE 12.1: Limits of Algebraic, Rational & Trig Functions (Q1 to Q32)
// ============================================================================

ex12_1.push(createQCard(
  'c11m-ch12-q1', 'Question 1', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to 3} (x + 3)$',
  `<div class="step">
    • By direct substitution method, since $(x + 3)$ is a polynomial and defined at $x = 3$:<br>
      $$\\lim_{x \\to 3} (x + 3) = 3 + 3 = \\mathbf{6}$$
  </div>`,
  '1 Mark',
  [
    ['Applying direct substitution $x = 3$', '0.5 Mark'],
    ['Evaluating final limit $= 6$', '0.5 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q2', 'Question 2', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to \\pi} \\left(x - \\frac{22}{7}\\right)$',
  `<div class="step">
    • Applying direct substitution at $x = \\pi$:<br>
      $$\\lim_{x \\to \\pi} \\left(x - \\frac{22}{7}\\right) = \\mathbf{\\pi - \\frac{22}{7}}$$
  </div>`,
  '1 Mark',
  [
    ['Direct substitution of $x = \\pi$', '0.5 Mark'],
    ['Final evaluated answer $\\pi - 22/7$', '0.5 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q3', 'Question 3', 'Exercise 12.1',
  'Evaluate: $\\lim_{r \\to 1} \\pi r^2$',
  `<div class="step">
    • By direct substitution of $r = 1$:<br>
      $$\\lim_{r \\to 1} \\pi r^2 = \\pi (1)^2 = \\mathbf{\\pi}$$
  </div>`,
  '1 Mark',
  [
    ['Substituting $r = 1$', '0.5 Mark'],
    ['Obtaining final limit $\\pi$', '0.5 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q4', 'Question 4', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to 4} \\frac{4x + 3}{x - 2}$',
  `<div class="step">
    • At $x = 4$, denominator $x - 2 = 4 - 2 = 2 \\neq 0$.<br>
    • Hence direct substitution can be applied:<br>
      $$\\lim_{x \\to 4} \\frac{4x + 3}{x - 2} = \\frac{4(4) + 3}{4 - 2} = \\frac{16 + 3}{2} = \\mathbf{\\frac{19}{2}}$$
  </div>`,
  '1 Mark',
  [
    ['Checking denominator non-zero and substituting $x = 4$', '0.5 Mark'],
    ['Final value $19/2$', '0.5 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q5', 'Question 5', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to -1} \\frac{x^{10} + x^5 + 1}{x - 1}$',
  `<div class="step">
    • Denominator at $x = -1$ is $-1 - 1 = -2 \\neq 0$.<br>
    • By direct substitution:<br>
      $$\\lim_{x \\to -1} \\frac{x^{10} + x^5 + 1}{x - 1} = \\frac{(-1)^{10} + (-1)^5 + 1}{-1 - 1} = \\frac{1 - 1 + 1}{-2} = -\\frac{1}{2}$$<br>
    • Hence the limit is $\\mathbf{-\\frac{1}{2}}$.
  </div>`,
  '1 Mark',
  [
    ['Direct substitution of $x = -1$', '0.5 Mark'],
    ['Evaluating numerator $= 1$, denominator $= -2 \\implies -1/2$', '0.5 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q6', 'Question 6', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to 0} \\frac{(x + 1)^5 - 1}{x}$',
  `<div class="step">
    • Let $y = x + 1$. As $x \\to 0$, $y \\to 1$.<br>
    • Also $x = y - 1$. Rewriting the limit:<br>
      $$\\lim_{y \\to 1} \\frac{y^5 - 1^5}{y - 1}$$<br>
    • Using standard limit identity $\\lim_{z \\to a} \\frac{z^n - a^n}{z - a} = n a^{n-1}$:<br>
      $$\\lim_{y \\to 1} \\frac{y^5 - 1^5}{y - 1} = 5(1)^{5 - 1} = 5(1)^4 = \\mathbf{5}$$
  </div>`,
  '2 Marks',
  [
    ['Substitution $y = x + 1$ with $y \\to 1$', '1 Mark'],
    ['Applying $\\lim \\frac{y^n - a^n}{y - a} = n a^{n-1}$ to get $5$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q7', 'Question 7', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to 2} \\frac{3x^2 - x - 10}{x^2 - 4}$',
  `<div class="step">
    • Direct substitution gives $\\frac{3(4) - 2 - 10}{4 - 4} = \\frac{0}{0}$, an indeterminate form.<br>
    • Factorizing numerator and denominator:<br>
      - Numerator: $3x^2 - x - 10 = 3x^2 - 6x + 5x - 10 = 3x(x - 2) + 5(x - 2) = (x - 2)(3x + 5)$<br>
      - Denominator: $x^2 - 4 = (x - 2)(x + 2)$<br>
    • Since $x \\to 2 \\implies x \\neq 2$, cancel the common factor $(x - 2)$:<br>
      $$\\lim_{x \\to 2} \\frac{(x - 2)(3x + 5)}{(x - 2)(x + 2)} = \\lim_{x \\to 2} \\frac{3x + 5}{x + 2}$$<br>
    • Evaluating the limit:<br>
      $$\\frac{3(2) + 5}{2 + 2} = \\frac{6 + 5}{4} = \\mathbf{\\frac{11}{4}}$$
  </div>`,
  '2 Marks',
  [
    ['Factorizing numerator and denominator', '1 Mark'],
    ['Canceling $(x - 2)$ and evaluating $11/4$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q8', 'Question 8', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to 3} \\frac{x^4 - 81}{2x^2 - 5x - 3}$',
  `<div class="step">
    • At $x = 3$, $\\frac{81 - 81}{18 - 15 - 3} = \\frac{0}{0}$ (indeterminate form).<br>
    • Factorizing:<br>
      - Numerator: $x^4 - 81 = (x^2 - 9)(x^2 + 9) = (x - 3)(x + 3)(x^2 + 9)$<br>
      - Denominator: $2x^2 - 5x - 3 = 2x^2 - 6x + x - 3 = 2x(x - 3) + 1(x - 3) = (x - 3)(2x + 1)$<br>
    • Canceling common factor $(x - 3)$ ($x \\neq 3$):<br>
      $$\\lim_{x \\to 3} \\frac{(x + 3)(x^2 + 9)}{2x + 1}$$<br>
    • Substituting $x = 3$:<br>
      $$\\frac{(3 + 3)(3^2 + 9)}{2(3) + 1} = \\frac{6(9 + 9)}{6 + 1} = \\frac{6(18)}{7} = \\mathbf{\\frac{108}{7}}$$
  </div>`,
  '2 Marks',
  [
    ['Factoring numerator and denominator to extract $(x - 3)$', '1 Mark'],
    ['Evaluating limit $6(18)/7 = 108/7$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q9', 'Question 9', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to 0} \\frac{ax + b}{cx + 1}$',
  `<div class="step">
    • By direct substitution at $x = 0$ (denominator $c(0) + 1 = 1 \\neq 0$):<br>
      $$\\lim_{x \\to 0} \\frac{ax + b}{cx + 1} = \\frac{a(0) + b}{c(0) + 1} = \\frac{b}{1} = \\mathbf{b}$$
  </div>`,
  '1 Mark',
  [
    ['Direct substitution of $x = 0$', '0.5 Mark'],
    ['Obtaining final limit $b$', '0.5 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q10', 'Question 10', 'Exercise 12.1',
  'Evaluate: $\\lim_{z \\to 1} \\frac{z^{1/3} - 1}{z^{1/6} - 1}$',
  `<div class="step">
    • Direct substitution gives $\\frac{0}{0}$.<br>
    • Divide numerator and denominator by $(z - 1)$:<br>
      $$\\lim_{z \\to 1} \\frac{\\frac{z^{1/3} - 1^{1/3}}{z - 1}}{\\frac{z^{1/6} - 1^{1/6}}{z - 1}}$$
    • Applying standard identity $\\lim_{z \\to 1} \\frac{z^n - 1^n}{z - 1} = n(1)^{n-1} = n$:<br>
      - Numerator limit $= \\frac{1}{3}(1)^{\\frac{1}{3} - 1} = \\frac{1}{3}$<br>
      - Denominator limit $= \\frac{1}{6}(1)^{\\frac{1}{6} - 1} = \\frac{1}{6}$<br>
    • Thus:<br>
      $$\\text{Limit} = \\frac{1/3}{1/6} = \\frac{1}{3} \\times \\frac{6}{1} = \\mathbf{2}$$
  </div>`,
  '2 Marks',
  [
    ['Dividing by $(z - 1)$ and applying standard limit identity', '1 Mark'],
    ['Evaluating $(1/3) / (1/6) = 2$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q11', 'Question 11', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to 1} \\frac{ax^2 + bx + c}{cx^2 + bx + a}, \\quad a + b + c \\neq 0$',
  `<div class="step">
    • By direct substitution of $x = 1$:<br>
      $$\\lim_{x \\to 1} \\frac{ax^2 + bx + c}{cx^2 + bx + a} = \\frac{a(1)^2 + b(1) + c}{c(1)^2 + b(1) + a} = \\frac{a + b + c}{c + b + a}$$<br>
    • Since $a + b + c \\neq 0$, the numerator and denominator cancel:<br>
      $$= \\mathbf{1}$$
  </div>`,
  '1 Mark',
  [
    ['Direct substitution of $x = 1$', '0.5 Mark'],
    ['Using condition $a+b+c \\neq 0$ to get $1$', '0.5 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q12', 'Question 12', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to -2} \\frac{\\frac{1}{x} + \\frac{1}{2}}{x + 2}$',
  `<div class="step">
    • Direct substitution gives $\\frac{-1/2 + 1/2}{-2 + 2} = \\frac{0}{0}$.<br>
    • Simplifying the numerator:<br>
      $$\\frac{1}{x} + \\frac{1}{2} = \\frac{2 + x}{2x} = \\frac{x + 2}{2x}$$<br>
    • Substituting into the limit:<br>
      $$\\lim_{x \\to -2} \\frac{\\frac{x + 2}{2x}}{x + 2} = \\lim_{x \\to -2} \\frac{x + 2}{2x(x + 2)}$$<br>
    • Canceling common factor $(x + 2)$ ($x \\neq -2$):<br>
      $$\\lim_{x \\to -2} \\frac{1}{2x} = \\frac{1}{2(-2)} = \\mathbf{-\\frac{1}{4}}$$
  </div>`,
  '2 Marks',
  [
    ['Simplifying rational numerator to $(x+2)/2x$', '1 Mark'],
    ['Canceling $(x+2)$ and evaluating $-1/4$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q13', 'Question 13', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to 0} \\frac{\\sin ax}{bx}$',
  `<div class="step">
    • Rewriting expression to use $\\lim_{\\theta \\to 0} \\frac{\\sin \\theta}{\\theta} = 1$:<br>
      $$\\frac{\\sin ax}{bx} = \\frac{\\sin ax}{ax} \\cdot \\frac{ax}{bx} = \\frac{a}{b} \\left(\\frac{\\sin ax}{ax}\\right)$$<br>
    • As $x \\to 0$, $ax \\to 0$.<br>
    • Therefore:<br>
      $$\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b} \\lim_{ax \\to 0} \\left(\\frac{\\sin ax}{ax}\\right) = \\frac{a}{b} (1) = \\mathbf{\\frac{a}{b}}$$
  </div>`,
  '2 Marks',
  [
    ['Multiplying and dividing by $a$', '1 Mark'],
    ['Applying $\\lim_{\\theta \\to 0} \\frac{\\sin \\theta}{\\theta} = 1$ to get $a/b$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q14', 'Question 14', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to 0} \\frac{\\sin ax}{\\sin bx}, \\quad a, b \\neq 0$',
  `<div class="step">
    • Dividing numerator and denominator by $x$:<br>
      $$\\frac{\\sin ax}{\\sin bx} = \\frac{\\frac{\\sin ax}{x}}{\\frac{\\sin bx}{x}} = \\frac{a \\left(\\frac{\\sin ax}{ax}\\right)}{b \\left(\\frac{\\sin bx}{bx}\\right)}$$<br>
    • Taking limits as $x \\to 0$ ($ax \\to 0$ and $bx \\to 0$):<br>
      $$\\lim_{x \\to 0} \\frac{\\sin ax}{\\sin bx} = \\frac{a \\cdot 1}{b \\cdot 1} = \\mathbf{\\frac{a}{b}}$$
  </div>`,
  '2 Marks',
  [
    ['Expressing as ratio of standard trigonometric limits', '1 Mark'],
    ['Evaluating limits to get $a/b$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q15', 'Question 15', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to \\pi} \\frac{\\sin(\\pi - x)}{\\pi(\\pi - x)}$',
  `<div class="step">
    • Let $y = \\pi - x$. As $x \\to \\pi$, $y \\to 0$.<br>
    • Substituting $y$ into the limit:<br>
      $$\\lim_{y \\to 0} \\frac{\\sin y}{\\pi y} = \\frac{1}{\\pi} \\lim_{y \\to 0} \\left(\\frac{\\sin y}{y}\\right)$$<br>
    • Using standard limit $\\lim_{y \\to 0} \\frac{\\sin y}{y} = 1$:<br>
      $$= \\frac{1}{\\pi} (1) = \\mathbf{\\frac{1}{\\pi}}$$
  </div>`,
  '2 Marks',
  [
    ['Substitution $y = \\pi - x$ with $y \\to 0$', '1 Mark'],
    ['Applying $\\lim \\sin y / y = 1$ to get $1/\\pi$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q16', 'Question 16', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to 0} \\frac{\\cos x}{\\pi - x}$',
  `<div class="step">
    • By direct substitution of $x = 0$:<br>
      $$\\lim_{x \\to 0} \\frac{\\cos x}{\\pi - x} = \\frac{\\cos 0}{\\pi - 0} = \\frac{1}{\\pi}$$<br>
    • Hence the limit is $\\mathbf{\\frac{1}{\\pi}}$.
  </div>`,
  '1 Mark',
  [
    ['Direct substitution of $x = 0$', '0.5 Mark'],
    ['Evaluating $\\cos 0 = 1$ to get $1/\\pi$', '0.5 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q17', 'Question 17', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to 0} \\frac{\\cos 2x - 1}{\\cos x - 1}$',
  `<div class="step">
    • Direct substitution gives $\\frac{0}{0}$.<br>
    • Using trigonometric half-angle identities:<br>
      $$1 - \\cos 2x = 2\\sin^2 x \\implies \\cos 2x - 1 = -2\\sin^2 x$$<br>
      $$1 - \\cos x = 2\\sin^2 \\left(\\frac{x}{2}\\right) \\implies \\cos x - 1 = -2\\sin^2 \\left(\\frac{x}{2}\\right)$$<br>
    • Substituting into the limit:<br>
      $$\\lim_{x \\to 0} \\frac{-2\\sin^2 x}{-2\\sin^2(x/2)} = \\lim_{x \\to 0} \\frac{\\sin^2 x}{\\sin^2(x/2)}$$<br>
    • Dividing and multiplying by $x^2$ and $(x/2)^2$:<br>
      $$= \\lim_{x \\to 0} \\frac{\\left(\\frac{\\sin x}{x}\\right)^2 \\cdot x^2}{\\left(\\frac{\\sin(x/2)}{x/2}\\right)^2 \\cdot \\frac{x^2}{4}} = \\frac{(1)^2}{\\frac{1}{4} (1)^2} = \\mathbf{4}$$
  </div>`,
  '2 Marks',
  [
    ['Applying half-angle identities $1 - \\cos 2\\theta = 2\\sin^2 \\theta$', '1 Mark'],
    ['Evaluating limit to obtain $4$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q18', 'Question 18', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to 0} \\frac{ax + x\\cos x}{b\\sin x}$',
  `<div class="step">
    • Factor $x$ in the numerator:<br>
      $$\\lim_{x \\to 0} \\frac{x(a + \\cos x)}{b\\sin x} = \\lim_{x \\to 0} \\frac{a + \\cos x}{b \\left(\\frac{\\sin x}{x}\\right)}$$<br>
    • Evaluating the limits as $x \\to 0$:<br>
      - Numerator: $\\lim_{x \\to 0} (a + \\cos x) = a + \\cos 0 = a + 1$<br>
      - Denominator: $\\lim_{x \\to 0} b\\left(\\frac{\\sin x}{x}\\right) = b(1) = b$<br>
    • Therefore:<br>
      $$\\text{Limit} = \\mathbf{\\frac{a + 1}{b}}$$
  </div>`,
  '2 Marks',
  [
    ['Factoring $x$ and regrouping with $\\sin x / x$', '1 Mark'],
    ['Evaluating limits to get $(a + 1)/b$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q19', 'Question 19', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to 0} x \\sec x$',
  `<div class="step">
    • Rewriting $\\sec x = \\frac{1}{\\cos x}$:<br>
      $$\\lim_{x \\to 0} x \\sec x = \\lim_{x \\to 0} \\frac{x}{\\cos x}$$<br>
    • Direct substitution of $x = 0$ gives:<br>
      $$\\frac{0}{\\cos 0} = \\frac{0}{1} = \\mathbf{0}$$
  </div>`,
  '1 Mark',
  [
    ['Expressing in terms of cosine $x / \\cos x$', '0.5 Mark'],
    ['Direct substitution giving $0/1 = 0$', '0.5 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q20', 'Question 20', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to 0} \\frac{\\sin ax + bx}{ax + \\sin bx}, \\quad a, b, a+b \\neq 0$',
  `<div class="step">
    • Divide numerator and denominator by $x$ ($x \\neq 0$):<br>
      $$\\frac{\\frac{\\sin ax}{x} + b}{a + \\frac{\\sin bx}{x}} = \\frac{a \\left(\\frac{\\sin ax}{ax}\\right) + b}{a + b \\left(\\frac{\\sin bx}{bx}\\right)}$$<br>
    • Taking limit as $x \\to 0$:<br>
      $$= \\frac{a(1) + b}{a + b(1)} = \\frac{a + b}{a + b} = \\mathbf{1} \\quad (\\text{since } a + b \\neq 0)$$
  </div>`,
  '2 Marks',
  [
    ['Dividing throughout by $x$', '1 Mark'],
    ['Evaluating standard limits and canceling $(a+b)$ to get $1$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q21', 'Question 21', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to 0} (\\csc x - \\cot x)$',
  `<div class="step">
    • Express in terms of sine and cosine:<br>
      $$\\csc x - \\cot x = \\frac{1}{\\sin x} - \\frac{\\cos x}{\\sin x} = \\frac{1 - \\cos x}{\\sin x}$$<br>
    • Using half-angle identities $1 - \\cos x = 2\\sin^2(x/2)$ and $\\sin x = 2\\sin(x/2)\\cos(x/2)$:<br>
      $$\\frac{1 - \\cos x}{\\sin x} = \\frac{2\\sin^2(x/2)}{2\\sin(x/2)\\cos(x/2)} = \\frac{\\sin(x/2)}{\\cos(x/2)} = \\tan\\left(\\frac{x}{2}\\right)$$<br>
    • As $x \\to 0$:<br>
      $$\\lim_{x \\to 0} \\tan\\left(\\frac{x}{2}\\right) = \\tan 0 = \\mathbf{0}$$
  </div>`,
  '2 Marks',
  [
    ['Converting to $(1 - \\cos x)/\\sin x$', '1 Mark'],
    ['Simplifying to $\\tan(x/2)$ and evaluating limit $= 0$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q22', 'Question 22', 'Exercise 12.1',
  'Evaluate: $\\lim_{x \\to \\pi/2} \\frac{\\tan 2x}{x - \\pi/2}$',
  `<div class="step">
    • Let $y = x - \\frac{\\pi}{2}$. As $x \\to \\frac{\\pi}{2}$, $y \\to 0$.<br>
    • Then $x = y + \\frac{\\pi}{2}$, so $2x = 2y + \\pi = \\pi + 2y$.<br>
    • Using $\\tan(\\pi + 2y) = \\tan 2y$:<br>
      $$\\lim_{y \\to 0} \\frac{\\tan 2y}{y}$$<br>
    • Rewriting:<br>
      $$\\lim_{y \\to 0} 2 \\left(\\frac{\\tan 2y}{2y}\\right) = 2 \\lim_{2y \\to 0} \\left(\\frac{\\tan 2y}{2y}\\right) = 2(1) = \\mathbf{2}$$
  </div>`,
  '2 Marks',
  [
    ['Substitution $y = x - \\pi/2$ with $y \\to 0$', '1 Mark'],
    ['Using $\\tan(\\pi + 2y) = \\tan 2y$ and evaluating limit $= 2$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q23', 'Question 23', 'Exercise 12.1',
  'Find $\\lim_{x \\to 0} f(x)$ and $\\lim_{x \\to 1} f(x)$, where $f(x) = \\begin{cases} 2x + 3, & x \\le 0 \\\\ 3(x + 1), & x > 0 \\end{cases}$',
  `<div class="step">
    • <b>Part 1: At $x = 0$:</b><br>
      - Left hand limit (LHL): $\\lim_{x \\to 0^-} f(x) = \\lim_{x \\to 0^-} (2x + 3) = 2(0) + 3 = 3$<br>
      - Right hand limit (RHL): $\\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^+} 3(x + 1) = 3(0 + 1) = 3$<br>
      Since $\\text{LHL} = \\text{RHL} = 3$, $\\mathbf{\\lim_{x \\to 0} f(x) = 3}$.<br><br>
    • <b>Part 2: At $x = 1$:</b><br>
      Since $x = 1 > 0$, in an open neighborhood around $x = 1$, $f(x) = 3(x + 1)$:<br>
      $$\\lim_{x \\to 1} f(x) = \\lim_{x \\to 1} 3(x + 1) = 3(1 + 1) = \\mathbf{6}$$
  </div>`,
  '3 Marks',
  [
    ['Evaluating LHL and RHL at $x = 0$ to get limit $3$', '1.5 Marks'],
    ['Evaluating limit at $x = 1$ to get $6$', '1.5 Marks']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q24', 'Question 24', 'Exercise 12.1',
  'Find $\\lim_{x \\to 1} f(x)$, where $f(x) = \\begin{cases} x^2 - 1, & x \\le 1 \\\\ -x^2 - 1, & x > 1 \\end{cases}$',
  `<div class="step">
    • <b>Left Hand Limit (LHL):</b><br>
      $$\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^-} (x^2 - 1) = 1^2 - 1 = 0$$<br>
    • <b>Right Hand Limit (RHL):</b><br>
      $$\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^+} (-x^2 - 1) = -1^2 - 1 = -1 - 1 = -2$$<br>
    • Since $\\text{LHL} \\neq \\text{RHL}$ ($0 \\neq -2$), the limit <b>does not exist</b> at $x = 1$.
  </div>`,
  '2 Marks',
  [
    ['Calculating LHL $= 0$ and RHL $= -2$', '1 Mark'],
    ['Concluding that limit does not exist', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q25', 'Question 25', 'Exercise 12.1',
  'Evaluate $\\lim_{x \\to 0} f(x)$, where $f(x) = \\begin{cases} \\frac{|x|}{x}, & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$',
  `<div class="step">
    • By definition of absolute value $|x|$:<br>
      $$|x| = \\begin{cases} -x, & x < 0 \\\\ x, & x > 0 \\end{cases}$$<br>
    • <b>Left Hand Limit:</b><br>
      $$\\lim_{x \\to 0^-} f(x) = \\lim_{x \\to 0^-} \\frac{-x}{x} = \\lim_{x \\to 0^-} (-1) = -1$$<br>
    • <b>Right Hand Limit:</b><br>
      $$\\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^+} \\frac{x}{x} = \\lim_{x \\to 0^+} (1) = 1$$<br>
    • Since $\\text{LHL} \\neq \\text{RHL}$ ($-1 \\neq 1$), $\\mathbf{\\lim_{x \\to 0} f(x)}$ <b>does not exist</b>.
  </div>`,
  '2 Marks',
  [
    ['Evaluating LHL $= -1$ using $|x| = -x$ for $x < 0$', '1 Mark'],
    ['Evaluating RHL $= 1$ and concluding limit does not exist', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q26', 'Question 26', 'Exercise 12.1',
  'Find $\\lim_{x \\to 0} f(x)$, where $f(x) = \\begin{cases} \\frac{x}{|x|}, & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$',
  `<div class="step">
    • <b>Left Hand Limit (LHL):</b><br>
      For $x < 0$, $|x| = -x$, so $f(x) = \\frac{x}{-x} = -1$.<br>
      $$\\lim_{x \\to 0^-} f(x) = -1$$<br>
    • <b>Right Hand Limit (RHL):</b><br>
      For $x > 0$, $|x| = x$, so $f(x) = \\frac{x}{x} = 1$.<br>
      $$\\lim_{x \\to 0^+} f(x) = 1$$<br>
    • Since $\\text{LHL} \\neq \\text{RHL}$, $\\lim_{x \\to 0} f(x)$ <b>does not exist</b>.
  </div>`,
  '2 Marks',
  [
    ['LHL $= -1$', '0.5 Mark'],
    ['RHL $= 1$', '0.5 Mark'],
    ['Conclusion: limit does not exist', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q27', 'Question 27', 'Exercise 12.1',
  'Find $\\lim_{x \\to 5} f(x)$, where $f(x) = |x| - 5$.',
  `<div class="step">
    • In an open interval around $x = 5$ (e.g., $(4, 6)$), $x > 0$, so $|x| = x$.<br>
    • Therefore, $f(x) = x - 5$ for all $x$ near $5$.<br>
    • Evaluating the limit:<br>
      $$\\lim_{x \\to 5} f(x) = \\lim_{x \\to 5} (x - 5) = 5 - 5 = \\mathbf{0}$$
  </div>`,
  '1 Mark',
  [
    ['Using $|x| = x$ for $x > 0$', '0.5 Mark'],
    ['Evaluating limit $= 5 - 5 = 0$', '0.5 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q28', 'Question 28', 'Exercise 12.1',
  'Suppose $f(x) = \\begin{cases} a + bx, & x < 1 \\\\ 4, & x = 1 \\\\ b - ax, & x > 1 \\end{cases}$ and if $\\lim_{x \\to 1} f(x) = f(1)$, what are possible values of $a$ and $b$?',
  `<div class="step">
    • Given $f(1) = 4$.<br>
    • For $\\lim_{x \\to 1} f(x) = f(1)$, we must have $\\text{LHL} = \\text{RHL} = f(1) = 4$.<br>
    • <b>Left Hand Limit (LHL):</b><br>
      $$\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^-} (a + bx) = a + b(1) = a + b$$<br>
      So $a + b = 4 \\quad \\dots (1)$<br>
    • <b>Right Hand Limit (RHL):</b><br>
      $$\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^+} (b - ax) = b - a(1) = b - a$$<br>
      So $b - a = 4 \\quad \\dots (2)$<br>
    • Adding equations $(1)$ and $(2)$:<br>
      $$(a + b) + (b - a) = 4 + 4 \\implies 2b = 8 \\implies \\mathbf{b = 4}$$<br>
    • Substituting $b = 4$ into $(1)$:<br>
      $$a + 4 = 4 \\implies \\mathbf{a = 0}$$<br>
    • Therefore, the values are $\\mathbf{a = 0}$ and $\\mathbf{b = 4}$.
  </div>`,
  '3 Marks',
  [
    ['Equating LHL to $4 \\implies a + b = 4$', '1 Mark'],
    ['Equating RHL to $4 \\implies b - a = 4$', '1 Mark'],
    ['Solving linear system for $a = 0, b = 4$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q29', 'Question 29', 'Exercise 12.1',
  'Let $a_1, a_2, \\dots, a_n$ be fixed real numbers and define a function $f(x) = (x - a_1)(x - a_2)\\dots(x - a_n)$. What is $\\lim_{x \\to a_1} f(x)$? For some $a \\neq a_1, a_2, \\dots, a_n$, compute $\\lim_{x \\to a} f(x)$.',
  `<div class="step">
    • The given function $f(x) = (x - a_1)(x - a_2)\\dots(x - a_n)$ is a polynomial function, hence continuous everywhere.<br>
    • <b>Part 1: Evaluate $\\lim_{x \\to a_1} f(x)$:</b><br>
      $$\\lim_{x \\to a_1} f(x) = (a_1 - a_1)(a_1 - a_2)\\dots(a_1 - a_n) = 0 \\cdot (a_1 - a_2)\\dots(a_1 - a_n) = \\mathbf{0}$$<br>
    • <b>Part 2: Evaluate $\\lim_{x \\to a} f(x)$ for $a \\neq a_1, a_2, \\dots, a_n$:</b><br>
      By direct substitution of $x = a$:<br>
      $$\\lim_{x \\to a} f(x) = \\mathbf{(a - a_1)(a - a_2)\\dots(a - a_n)}$$
  </div>`,
  '2 Marks',
  [
    ['Evaluating $\\lim_{x \\to a_1} f(x) = 0$', '1 Mark'],
    ['Evaluating $\\lim_{x \\to a} f(x) = (a - a_1)(a - a_2)\\dots(a - a_n)$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q30', 'Question 30', 'Exercise 12.1',
  'If $f(x) = \\begin{cases} |x| + 1, & x < 0 \\\\ 0, & x = 0 \\\\ |x| - 1, & x > 0 \\end{cases}$. For what value(s) of $a$ does $\\lim_{x \\to a} f(x)$ exist?',
  `<div class="step">
    • We analyze the limit for three cases: $a = 0$, $a < 0$, and $a > 0$.<br>
    • <b>Case 1: $a = 0$:</b><br>
      - LHL: $\\lim_{x \\to 0^-} f(x) = \\lim_{x \\to 0^-} (|x| + 1) = \\lim_{x \\to 0^-} (-x + 1) = 0 + 1 = 1$<br>
      - RHL: $\\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^+} (|x| - 1) = \\lim_{x \\to 0^+} (x - 1) = 0 - 1 = -1$<br>
      Since $\\text{LHL} \\neq \\text{RHL}$, $\\lim_{x \\to 0} f(x)$ <b>does not exist</b>.<br><br>
    • <b>Case 2: $a < 0$:</b><br>
      In a neighborhood of $a$, $x < 0$, so $f(x) = -x + 1$, which is a polynomial. Thus $\\lim_{x \\to a} f(x) = -a + 1$, which exists.<br><br>
    • <b>Case 3: $a > 0$:</b><br>
      In a neighborhood of $a$, $x > 0$, so $f(x) = x - 1$, which is a polynomial. Thus $\\lim_{x \\to a} f(x) = a - 1$, which exists.<br><br>
    • <b>Conclusion:</b> $\\lim_{x \\to a} f(x)$ exists for <b>all real numbers $a \\neq 0$</b>.
  </div>`,
  '3 Marks',
  [
    ['Showing limit does not exist at $a = 0$ since LHL $\\neq$ RHL', '1.5 Marks'],
    ['Proving existence for $a < 0$ and $a > 0$', '1 Mark'],
    ['Concluding limit exists for all $a \\neq 0$', '0.5 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q31', 'Question 31', 'Exercise 12.1',
  'If the function $f(x)$ satisfies $\\lim_{x \\to 1} \\frac{f(x) - 2}{x^2 - 1} = \\pi$, evaluate $\\lim_{x \\to 1} f(x)$.',
  `<div class="step">
    • Given $\\lim_{x \\to 1} \\frac{f(x) - 2}{x^2 - 1} = \\pi$.<br>
    • As $x \\to 1$, the denominator $x^2 - 1 \\to 1^2 - 1 = 0$.<br>
    • For the quotient limit to exist and be finite (equal to $\\pi$), the numerator limit must also approach $0$:<br>
      $$\\lim_{x \\to 1} [f(x) - 2] = \\lim_{x \\to 1} \\left[\\frac{f(x) - 2}{x^2 - 1} \\cdot (x^2 - 1)\\right]$$<br>
      $$= \\left(\\lim_{x \\to 1} \\frac{f(x) - 2}{x^2 - 1}\\right) \\cdot \\left(\\lim_{x \\to 1} (x^2 - 1)\\right) = \\pi \\cdot 0 = 0$$<br>
    • Therefore:<br>
      $$\\lim_{x \\to 1} [f(x) - 2] = 0 \\implies \\lim_{x \\to 1} f(x) - 2 = 0 \\implies \\mathbf{\\lim_{x \\to 1} f(x) = 2}$$
  </div>`,
  '2 Marks',
  [
    ['Multiplying by $\\lim (x^2 - 1) = 0$', '1 Mark'],
    ['Evaluating $\\lim_{x \\to 1} f(x) = 2$', '1 Mark']
  ]
));

ex12_1.push(createQCard(
  'c11m-ch12-q32', 'Question 32', 'Exercise 12.1',
  'If $f(x) = \\begin{cases} mx^2 + n, & x < 0 \\\\ nx + m, & 0 \\le x \\le 1 \\\\ nx^3 + m, & x > 1 \\end{cases}$. For what integers $m$ and $n$ does both $\\lim_{x \\to 0} f(x)$ and $\\lim_{x \\to 1} f(x)$ exist?',
  `<div class="step">
    • <b>Condition 1: For $\\lim_{x \\to 0} f(x)$ to exist:</b><br>
      - LHL at $x = 0$: $\\lim_{x \\to 0^-} (mx^2 + n) = m(0) + n = n$<br>
      - RHL at $x = 0$: $\\lim_{x \\to 0^+} (nx + m) = n(0) + m = m$<br>
      For the limit to exist: $\\text{LHL} = \\text{RHL} \\implies \\mathbf{m = n}$.<br><br>
    • <b>Condition 2: For $\\lim_{x \\to 1} f(x)$ to exist:</b><br>
      - LHL at $x = 1$: $\\lim_{x \\to 1^-} (nx + m) = n(1) + m = m + n$<br>
      - RHL at $x = 1$: $\\lim_{x \\to 1^+} (nx^3 + m) = n(1)^3 + m = m + n$<br>
      Here $\\text{LHL} = \\text{RHL} = m + n$ for <i>all</i> values of $m$ and $n$.<br><br>
    • <b>Conclusion:</b> $\\lim_{x \\to 1} f(x)$ exists for all integral values of $m$ and $n$. Both limits exist when $\\mathbf{m = n}$ (for any integer $m$).
  </div>`,
  '3 Marks',
  [
    ['Equating LHL and RHL at $x = 0$ to get $m = n$', '1.5 Marks'],
    ['Showing LHL = RHL at $x = 1$ identically for all $m, n$', '1 Mark'],
    ['Concluding both limits exist if and only if $m = n$', '0.5 Mark']
  ]
));

// ============================================================================
// EXERCISE 12.2: Derivatives (Questions 33 to 43)
// ============================================================================

ex12_2.push(createQCard(
  'c11m-ch12-q33', 'Question 1', 'Exercise 12.2',
  'Find the derivative of $x^2 - 2$ at $x = 10$.',
  `<div class="step">
    • Let $f(x) = x^2 - 2$.<br>
    • Using derivative definition or power rule:<br>
      $$f'(x) = \\frac{d}{dx}(x^2 - 2) = 2x - 0 = 2x$$<br>
    • Evaluating at $x = 10$:<br>
      $$f'(10) = 2(10) = \\mathbf{20}$$
  </div>`,
  '2 Marks',
  [
    ['Finding derivative $f\'(x) = 2x$', '1 Mark'],
    ['Evaluating at $x = 10$ to get $20$', '1 Mark']
  ]
));

ex12_2.push(createQCard(
  'c11m-ch12-q34', 'Question 2', 'Exercise 12.2',
  'Find the derivative of $x$ at $x = 1$.',
  `<div class="step">
    • Let $f(x) = x$.<br>
    • The derivative is:<br>
      $$f'(x) = \\frac{d}{dx}(x) = 1$$<br>
    • At $x = 1$:<br>
      $$f'(1) = \\mathbf{1}$$
  </div>`,
  '1 Mark',
  [
    ['Derivative of $x$ is $1$', '0.5 Mark'],
    ['Evaluating at $x = 1$ to get $1$', '0.5 Mark']
  ]
));

ex12_2.push(createQCard(
  'c11m-ch12-q35', 'Question 3', 'Exercise 12.2',
  'Find the derivative of $99x$ at $x = 100$.',
  `<div class="step">
    • Let $f(x) = 99x$.<br>
    • Differentiating with respect to $x$:<br>
      $$f'(x) = 99 \\frac{d}{dx}(x) = 99(1) = 99$$<br>
    • At $x = 100$:<br>
      $$f'(100) = \\mathbf{99}$$
  </div>`,
  '1 Mark',
  [
    ['Finding $f\'(x) = 99$', '0.5 Mark'],
    ['Evaluating at $x = 100$ to get $99$', '0.5 Mark']
  ]
));

ex12_2.push(createQCard(
  'c11m-ch12-q36', 'Question 4', 'Exercise 12.2',
  'Find the derivative of the following functions from first principle:<br>(i) $x^3 - 27$<br>(ii) $(x - 1)(x - 2)$<br>(iii) $\\frac{1}{x^2}$<br>(iv) $\\frac{x + 1}{x - 1}$',
  `<div class="step">
    • By First Principle of Derivatives:<br>
      $$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$$<br>
    • <b>(i) $f(x) = x^3 - 27$:</b><br>
      $$f'(x) = \\lim_{h \\to 0} \\frac{((x+h)^3 - 27) - (x^3 - 27)}{h} = \\lim_{h \\to 0} \\frac{x^3 + 3x^2 h + 3xh^2 + h^3 - x^3}{h}$$<br>
      $$= \\lim_{h \\to 0} (3x^2 + 3xh + h^2) = \\mathbf{3x^2}$$<br>
    • <b>(ii) $f(x) = (x - 1)(x - 2) = x^2 - 3x + 2$:</b><br>
      $$f'(x) = \\lim_{h \\to 0} \\frac{((x+h)^2 - 3(x+h) + 2) - (x^2 - 3x + 2)}{h}$$<br>
      $$= \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - 3x - 3h + 2 - x^2 + 3x - 2}{h} = \\lim_{h \\to 0} \\frac{2xh + h^2 - 3h}{h} = \\lim_{h \\to 0} (2x + h - 3) = \\mathbf{2x - 3}$$<br>
    • <b>(iii) $f(x) = \\frac{1}{x^2}$:</b><br>
      $$f'(x) = \\lim_{h \\to 0} \\frac{\\frac{1}{(x+h)^2} - \\frac{1}{x^2}}{h} = \\lim_{h \\to 0} \\frac{x^2 - (x+h)^2}{h x^2 (x+h)^2} = \\lim_{h \\to 0} \\frac{-2xh - h^2}{h x^2 (x+h)^2} = \\lim_{h \\to 0} \\frac{-2x - h}{x^2 (x+h)^2} = \\mathbf{-\\frac{2}{x^3}}$$<br>
    • <b>(iv) $f(x) = \\frac{x + 1}{x - 1}$:</b><br>
      $$f'(x) = \\lim_{h \\to 0} \\frac{\\frac{x+h+1}{x+h-1} - \\frac{x+1}{x-1}}{h} = \\lim_{h \\to 0} \\frac{(x+h+1)(x-1) - (x+1)(x+h-1)}{h(x+h-1)(x-1)}$$<br>
      $$= \\lim_{h \\to 0} \\frac{-2h}{h(x+h-1)(x-1)} = \\lim_{h \\to 0} \\frac{-2}{(x+h-1)(x-1)} = \\mathbf{-\\frac{2}{(x - 1)^2}}$$
  </div>`,
  '4 Marks',
  [
    ['(i) First principle derivative $= 3x^2$', '1 Mark'],
    ['(ii) First principle derivative $= 2x - 3$', '1 Mark'],
    ['(iii) First principle derivative $= -2/x^3$', '1 Mark'],
    ['(iv) First principle derivative $= -2/(x-1)^2$', '1 Mark']
  ]
));

ex12_2.push(createQCard(
  'c11m-ch12-q37', 'Question 5', 'Exercise 12.2',
  'For the function $f(x) = \\frac{x^{100}}{100} + \\frac{x^{99}}{99} + \\dots + \\frac{x^2}{2} + x + 1$, prove that $f\'(1) = 100 f\'(0)$.',
  `<div class="step">
    • Differentiating each term of $f(x)$ with respect to $x$ using $\\frac{d}{dx}(x^n) = n x^{n-1}$:<br>
      $$f'(x) = \\frac{100 x^{99}}{100} + \\frac{99 x^{98}}{99} + \\dots + \\frac{2x}{2} + 1 + 0$$<br>
      $$f'(x) = x^{99} + x^{98} + \\dots + x + 1$$<br>
    • <b>Evaluating $f'(1)$:</b><br>
      $$f'(1) = 1^{99} + 1^{98} + \\dots + 1 + 1$$<br>
      This is a sum of $1$ repeated $100$ times (powers $x^1$ to $x^{99}$ plus the constant $1$):<br>
      $$f'(1) = 100$$<br>
    • <b>Evaluating $f'(0)$:</b><br>
      $$f'(0) = 0^{99} + 0^{98} + \\dots + 0 + 1 = 1$$<br>
    • Comparing the two values:<br>
      $$f'(1) = 100 = 100(1) = 100 f'(0)$$<br>
    • Hence, $\\mathbf{f\'(1) = 100 f\'(0)}$. (Hence Proved).
  </div>`,
  '3 Marks',
  [
    ['Finding $f\'(x) = x^{99} + x^{98} + \\dots + x + 1$', '1 Mark'],
    ['Calculating $f\'(1) = 100$ and $f\'(0) = 1$', '1 Mark'],
    ['Stating conclusion $f\'(1) = 100 f\'(0)$', '1 Mark']
  ]
));

ex12_2.push(createQCard(
  'c11m-ch12-q38', 'Question 6', 'Exercise 12.2',
  'Find the derivative of $f(x) = x^n + a x^{n-1} + a^2 x^{n-2} + \\dots + a^{n-1} x + a^n$ for some fixed real number $a$.',
  `<div class="step">
    • Differentiating each term with respect to $x$ using $\\frac{d}{dx}(c x^k) = c k x^{k-1}$ and noting $a$ is constant:<br>
      $$f'(x) = \\frac{d}{dx}(x^n) + a\\frac{d}{dx}(x^{n-1}) + a^2\\frac{d}{dx}(x^{n-2}) + \\dots + a^{n-1}\\frac{d}{dx}(x) + \\frac{d}{dx}(a^n)$$<br>
      $$f'(x) = n x^{n-1} + a(n-1)x^{n-2} + a^2(n-2)x^{n-3} + \\dots + a^{n-1}(1) + 0$$<br>
    • Hence, the derivative is:<br>
      $$\\mathbf{n x^{n-1} + a(n-1)x^{n-2} + a^2(n-2)x^{n-3} + \\dots + a^{n-1}}$$
  </div>`,
  '2 Marks',
  [
    ['Applying linearity and power rule', '1 Mark'],
    ['Final polynomial derivative expression', '1 Mark']
  ]
));

ex12_2.push(createQCard(
  'c11m-ch12-q39', 'Question 7', 'Exercise 12.2',
  'For some constants $a$ and $b$, find the derivative of:<br>(i) $(x - a)(x - b)$<br>(ii) $(ax^2 + b)^2$<br>(iii) $\\frac{x - a}{x - b}$',
  `<div class="step">
    • <b>(i) $f(x) = (x - a)(x - b) = x^2 - (a + b)x + ab$:</b><br>
      $$f'(x) = 2x - (a + b) + 0 = \\mathbf{2x - a - b}$$<br>
    • <b>(ii) $f(x) = (ax^2 + b)^2 = a^2 x^4 + 2ab x^2 + b^2$:</b><br>
      $$f'(x) = 4a^2 x^3 + 4ab x = \\mathbf{4ax(ax^2 + b)}$$<br>
    • <b>(iii) $f(x) = \\frac{x - a}{x - b}$:</b><br>
      Using the Quotient Rule $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$:<br>
      $$f'(x) = \\frac{1(x - b) - (x - a)(1)}{(x - b)^2} = \\frac{x - b - x + a}{(x - b)^2} = \\mathbf{\\frac{a - b}{(x - b)^2}}$$
  </div>`,
  '3 Marks',
  [
    ['Part (i): $2x - a - b$', '1 Mark'],
    ['Part (ii): $4ax(ax^2 + b)$', '1 Mark'],
    ['Part (iii): Quotient rule giving $(a - b)/(x - b)^2$', '1 Mark']
  ]
));

ex12_2.push(createQCard(
  'c11m-ch12-q40', 'Question 8', 'Exercise 12.2',
  'Find the derivative of $\\frac{x^n - a^n}{x - a}$ for some constant $a$.',
  `<div class="step">
    • Let $f(x) = \\frac{x^n - a^n}{x - a}$.<br>
    • Using the Quotient Rule $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$:<br>
      - $u = x^n - a^n \\implies u' = n x^{n-1}$<br>
      - $v = x - a \\implies v' = 1$<br>
    • Substituting into quotient formula:<br>
      $$f'(x) = \\frac{n x^{n-1}(x - a) - (x^n - a^n)(1)}{(x - a)^2}$$<br>
      $$= \\frac{n x^n - n a x^{n-1} - x^n + a^n}{(x - a)^2}$$<br>
      $$= \\mathbf{\\frac{(n - 1)x^n - n a x^{n-1} + a^n}{(x - a)^2}}$$
  </div>`,
  '2 Marks',
  [
    ['Applying Quotient Rule formula', '1 Mark'],
    ['Simplifying to $\\frac{(n-1)x^n - na x^{n-1} + a^n}{(x-a)^2}$', '1 Mark']
  ]
));

ex12_2.push(createQCard(
  'c11m-ch12-q41', 'Question 9', 'Exercise 12.2',
  'Find the derivative of:<br>(i) $2x - \\frac{3}{4}$<br>(ii) $(5x^3 + 3x - 1)(x - 1)$<br>(iii) $x^{-3}(5 + 3x)$<br>(iv) $x^5(3 - 6x^{-9})$<br>(v) $x^{-4}(3 - 4x^{-5})$<br>(vi) $\\frac{2}{x + 1} - \\frac{x^2}{3x - 1}$',
  `<div class="step">
    • <b>(i) $f(x) = 2x - \\frac{3}{4}$:</b><br>
      $$f'(x) = \\mathbf{2}$$<br>
    • <b>(ii) $f(x) = (5x^3 + 3x - 1)(x - 1) = 5x^4 - 5x^3 + 3x^2 - 4x + 1$:</b><br>
      $$f'(x) = \\mathbf{20x^3 - 15x^2 + 6x - 4}$$<br>
    • <b>(iii) $f(x) = x^{-3}(5 + 3x) = 5x^{-3} + 3x^{-2}$:</b><br>
      $$f'(x) = 5(-3x^{-4}) + 3(-2x^{-3}) = -15x^{-4} - 6x^{-3} = \\mathbf{-\\frac{15}{x^4} - \\frac{6}{x^3}}$$<br>
    • <b>(iv) $f(x) = x^5(3 - 6x^{-9}) = 3x^5 - 6x^{-4}$:</b><br>
      $$f'(x) = 15x^4 - 6(-4x^{-5}) = \\mathbf{15x^4 + \\frac{24}{x^5}}$$<br>
    • <b>(v) $f(x) = x^{-4}(3 - 4x^{-5}) = 3x^{-4} - 4x^{-9}$:</b><br>
      $$f'(x) = 3(-4x^{-5}) - 4(-9x^{-10}) = -12x^{-5} + 36x^{-10} = \\mathbf{-\\frac{12}{x^5} + \\frac{36}{x^{10}}}$$<br>
    • <b>(vi) $f(x) = \\frac{2}{x + 1} - \\frac{x^2}{3x - 1}$:</b><br>
      - $\\frac{d}{dx}\\left(\\frac{2}{x+1}\\right) = -\\frac{2}{(x+1)^2}$<br>
      - $\\frac{d}{dx}\\left(\\frac{x^2}{3x-1}\\right) = \\frac{2x(3x-1) - x^2(3)}{(3x-1)^2} = \\frac{6x^2 - 2x - 3x^2}{(3x-1)^2} = \\frac{3x^2 - 2x}{(3x-1)^2}$<br>
      $$f'(x) = \\mathbf{-\\frac{2}{(x + 1)^2} - \\frac{3x^2 - 2x}{(3x - 1)^2}}$$
  </div>`,
  '4 Marks',
  [
    ['Parts (i) and (ii) derivatives', '1 Mark'],
    ['Parts (iii) and (iv) derivatives', '1 Mark'],
    ['Part (v) derivative', '1 Mark'],
    ['Part (vi) derivative with quotient rule', '1 Mark']
  ]
));

ex12_2.push(createQCard(
  'c11m-ch12-q42', 'Question 10', 'Exercise 12.2',
  'Find the derivative of $\\cos x$ from first principle.',
  `<div class="step">
    • Let $f(x) = \\cos x$.<br>
    • By First Principle of derivative:<br>
      $$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h} = \\lim_{h \\to 0} \\frac{\\cos(x + h) - \\cos x}{h}$$<br>
    • Using identity $\\cos C - \\cos D = -2\\sin\\left(\\frac{C + D}{2}\\right)\\sin\\left(\\frac{C - D}{2}\\right)$:<br>
      $$\\cos(x + h) - \\cos x = -2\\sin\\left(x + \\frac{h}{2}\\right)\\sin\\left(\\frac{h}{2}\\right)$$<br>
    • Substituting into the limit:<br>
      $$f'(x) = \\lim_{h \\to 0} \\frac{-2\\sin\\left(x + \\frac{h}{2}\\right)\\sin\\left(\\frac{h}{2}\\right)}{h}$$<br>
      $$= -\\lim_{h \\to 0} \\sin\\left(x + \\frac{h}{2}\\right) \\cdot \\lim_{h/2 \\to 0} \\left(\\frac{\\sin(h/2)}{h/2}\\right)$$<br>
    • Since $\\lim_{h \\to 0} \\sin(x + h/2) = \\sin x$ and $\\lim_{h/2 \\to 0} \\frac{\\sin(h/2)}{h/2} = 1$:<br>
      $$f'(x) = -\\sin x \\cdot 1 = \\mathbf{-\\sin x}$$<br>
    • Hence, $\\frac{d}{dx}(\\cos x) = -\\sin x$.
  </div>`,
  '3 Marks',
  [
    ['First principle definition formulation', '1 Mark'],
    ['Applying $\\cos C - \\cos D$ identity', '1 Mark'],
    ['Splitting limit and evaluating to $-\\sin x$', '1 Mark']
  ]
));

ex12_2.push(createQCard(
  'c11m-ch12-q43', 'Question 11', 'Exercise 12.2',
  'Find the derivative of the following functions:<br>(i) $\\sin x \\cos x$<br>(ii) $\\sec x$<br>(iii) $5\\sec x + 4\\cos x$<br>(iv) $\\csc x$<br>(v) $3\\cot x + 5\\csc x$<br>(vi) $5\\sin x - 6\\cos x + 7$<br>(vii) $2\\tan x - 7\\sec x$',
  `<div class="step">
    • <b>(i) $f(x) = \\sin x \\cos x = \\frac{1}{2}\\sin 2x$:</b><br>
      $$f'(x) = \\cos x \\cos x + \\sin x(-\\sin x) = \\cos^2 x - \\sin^2 x = \\mathbf{\\cos 2x}$$<br>
    • <b>(ii) $f(x) = \\sec x$:</b><br>
      $$f'(x) = \\mathbf{\\sec x \\tan x}$$<br>
    • <b>(iii) $f(x) = 5\\sec x + 4\\cos x$:</b><br>
      $$f'(x) = \\mathbf{5\\sec x \\tan x - 4\\sin x}$$<br>
    • <b>(iv) $f(x) = \\csc x$:</b><br>
      $$f'(x) = \\mathbf{-\\csc x \\cot x}$$<br>
    • <b>(v) $f(x) = 3\\cot x + 5\\csc x$:</b><br>
      $$f'(x) = 3(-\\csc^2 x) + 5(-\\csc x \\cot x) = \\mathbf{-3\\csc^2 x - 5\\csc x \\cot x}$$<br>
    • <b>(vi) $f(x) = 5\\sin x - 6\\cos x + 7$:</b><br>
      $$f'(x) = 5\\cos x - 6(-\\sin x) + 0 = \\mathbf{5\\cos x + 6\\sin x}$$<br>
    • <b>(vii) $f(x) = 2\\tan x - 7\\sec x$:</b><br>
      $$f'(x) = \\mathbf{2\\sec^2 x - 7\\sec x \\tan x}$$
  </div>`,
  '4 Marks',
  [
    ['(i) and (ii) derivatives correctly calculated', '1 Mark'],
    ['(iii) and (iv) derivatives correctly calculated', '1 Mark'],
    ['(v) and (vi) derivatives correctly calculated', '1 Mark'],
    ['(vii) derivative correctly calculated', '1 Mark']
  ]
));

// ============================================================================
// MISCELLANEOUS EXERCISE ON CHAPTER 12 (Question 44: First Principles)
// ============================================================================

misc.push(createQCard(
  'c11m-ch12-q44', 'Question 1', 'Misc Exercise',
  'Find the derivative of the following functions from first principle:<br>(i) $-x$<br>(ii) $(-x)^{-1}$<br>(iii) $\\sin(x + 1)$<br>(iv) $\\cos\\left(x - \\frac{\\pi}{8}\\right)$',
  `<div class="step">
    • Formula from first principle: $f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$.<br><br>
    • <b>(i) $f(x) = -x$:</b><br>
      $$f'(x) = \\lim_{h \\to 0} \\frac{-(x + h) - (-x)}{h} = \\lim_{h \\to 0} \\frac{-x - h + x}{h} = \\lim_{h \\to 0} \\frac{-h}{h} = \\mathbf{-1}$$<br>
    • <b>(ii) $f(x) = (-x)^{-1} = -\\frac{1}{x}$:</b><br>
      $$f'(x) = \\lim_{h \\to 0} \\frac{-\\frac{1}{x+h} - \\left(-\\frac{1}{x}\\right)}{h} = \\lim_{h \\to 0} \\frac{\\frac{1}{x} - \\frac{1}{x+h}}{h} = \\lim_{h \\to 0} \\frac{x+h - x}{h x(x+h)} = \\lim_{h \\to 0} \\frac{h}{h x(x+h)} = \\mathbf{\\frac{1}{x^2}}$$<br>
    • <b>(iii) $f(x) = \\sin(x + 1)$:</b><br>
      $$f'(x) = \\lim_{h \\to 0} \\frac{\\sin(x + h + 1) - \\sin(x + 1)}{h}$$<br>
      Using $\\sin C - \\sin D = 2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)$:<br>
      $$= \\lim_{h \\to 0} \\frac{2\\cos\\left(x + 1 + \\frac{h}{2}\\right)\\sin\\left(\\frac{h}{2}\\right)}{h} = \\lim_{h \\to 0} \\cos\\left(x + 1 + \\frac{h}{2}\\right) \\cdot \\lim_{h/2 \\to 0} \\frac{\\sin(h/2)}{h/2} = \\mathbf{\\cos(x + 1)}$$<br>
    • <b>(iv) $f(x) = \\cos\\left(x - \\frac{\\pi}{8}\\right)$:</b><br>
      $$f'(x) = \\lim_{h \\to 0} \\frac{\\cos\\left(x + h - \\frac{\\pi}{8}\\right) - \\cos\\left(x - \\frac{\\pi}{8}\\right)}{h}$$<br>
      Using $\\cos C - \\cos D = -2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)$:<br>
      $$= \\lim_{h \\to 0} \\frac{-2\\sin\\left(x - \\frac{\\pi}{8} + \\frac{h}{2}\\right)\\sin\\left(\\frac{h}{2}\\right)}{h} = -\\lim_{h \\to 0} \\sin\\left(x - \\frac{\\pi}{8} + \\frac{h}{2}\\right) \\cdot 1 = \\mathbf{-\\sin\\left(x - \\frac{\\pi}{8}\\right)}$$
  </div>`,
  '4 Marks',
  [
    ['(i) Derivative of $-x$ from first principle is $-1$', '1 Mark'],
    ['(ii) Derivative of $(-x)^{-1}$ from first principle is $1/x^2$', '1 Mark'],
    ['(iii) Derivative of $\\sin(x+1)$ is $\\cos(x+1)$', '1 Mark'],
    ['(iv) Derivative of $\\cos(x - \\pi/8)$ is $-\\sin(x - \\pi/8)$', '1 Mark']
  ]
));

// ============================================================================
// LIMITS & DERIVATIVES VECTOR DIAGRAM (SVG)
// ============================================================================
const limitsSvg = `
  <div style="background:white; border:1px solid #e2e8f0; border-radius:12px; padding:20px; margin-bottom:28px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <h3 style="font-size:1.05rem; font-weight:800; color:#0f172a; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
      <span style="display:inline-block; width:10px; height:10px; background:#0284c7; border-radius:50%;"></span>
      Geometric Definition of Derivative &bull; Tangent as Limiting Secant Line
    </h3>
    <svg viewBox="0 0 760 250" style="width:100%; height:auto; display:block; font-family:system-ui, -apple-system, sans-serif;">
      <!-- Axes -->
      <line x1="40" y1="210" x2="420" y2="210" stroke="#0f172a" stroke-width="2"/>
      <polygon points="425,210 415,206 415,214" fill="#0f172a"/>
      <text x="415" y="228" font-size="12" font-weight="bold" fill="#0f172a">x</text>

      <line x1="60" y1="230" x2="60" y2="20" stroke="#0f172a" stroke-width="2"/>
      <polygon points="60,15 56,25 64,25" fill="#0f172a"/>
      <text x="45" y="25" font-size="12" font-weight="bold" fill="#0f172a">y</text>

      <!-- Curve y = f(x) -->
      <path d="M 80 180 Q 200 160 360 40" fill="none" stroke="#2563eb" stroke-width="3"/>
      <text x="365" y="48" font-size="12" font-weight="bold" fill="#2563eb">y = f(x)</text>

      <!-- Points P and Q -->
      <!-- Point P(x, f(x)) at (160, 150) -->
      <circle cx="160" cy="150" r="4.5" fill="#0f172a"/>
      <text x="145" y="140" font-size="11" font-weight="bold" fill="#0f172a">P(x, f(x))</text>
      <line x1="160" y1="150" x2="160" y2="210" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <text x="156" y="225" font-size="11" fill="#475569">x</text>

      <!-- Point Q(x+h, f(x+h)) at (280, 88) -->
      <circle cx="280" cy="88" r="4.5" fill="#0f172a"/>
      <text x="285" y="82" font-size="11" font-weight="bold" fill="#0f172a">Q(x+h, f(x+h))</text>
      <line x1="280" y1="88" x2="280" y2="210" stroke="#94a3b8" stroke-dasharray="3,3"/>
      <text x="268" y="225" font-size="11" fill="#475569">x + h</text>

      <!-- Distance h on x-axis -->
      <line x1="160" y1="216" x2="280" y2="216" stroke="#0284c7" stroke-width="1.5"/>
      <text x="215" y="238" font-size="11" font-weight="bold" fill="#0284c7">&Delta;x = h</text>

      <!-- Secant line PQ -->
      <line x1="100" y1="181" x2="340" y2="57" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,4"/>
      <text x="310" y="70" font-size="10" fill="#64748b">Secant Line</text>

      <!-- Tangent line at P -->
      <line x1="70" y1="185" x2="310" y2="92" stroke="#e11d48" stroke-width="2.5"/>
      <text x="220" y="112" font-size="11" font-weight="bold" fill="#e11d48">Tangent at P (Slope = f'(x))</text>

      <!-- Reference Formulas on Right -->
      <rect x="440" y="25" width="300" height="205" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="455" y="50" font-size="12" font-weight="bold" fill="#1e293b">Core Calculus Theorems:</text>

      <text x="455" y="75" font-size="11" font-weight="bold" fill="#2563eb">&bull; First Principle Definition:</text>
      <text x="465" y="93" font-size="10.5" fill="#0f172a">f'(x) = lim_{h&rarr;0} [f(x+h) - f(x)] / h</text>

      <text x="455" y="120" font-size="11" font-weight="bold" fill="#0284c7">&bull; Standard Trig Limit:</text>
      <text x="465" y="138" font-size="10.5" fill="#0f172a">lim_{x&rarr;0} (sin x / x) = 1, lim_{x&rarr;0} (tan x / x) = 1</text>

      <text x="455" y="165" font-size="11" font-weight="bold" fill="#059669">&bull; Product Rule: (uv)' = u'v + uv'</text>
      <text x="455" y="185" font-size="11" font-weight="bold" fill="#d97706">&bull; Quotient Rule: (u/v)' = (u'v - uv') / v&sup2;</text>
      <text x="455" y="205" font-size="11" font-weight="bold" fill="#7c3aed">&bull; Power Rule: d/dx (x&#8319;) = n x&#8319;&#713;&sup1;</text>
    </svg>
  </div>
`;

// ============================================================================
// ASSEMBLY OF CH12.HTML
// ============================================================================
const chapterHtml = `
<section class="chapter-section" id="c11m-ch12">
  <div class="chapter-header">
    <div class="ch-badge">12</div>
    <div class="chapter-header-info">
      <div class="ch-category">CBSE Class 11 Mathematics &bull; Chapter 12</div>
      <h2>Limits and Derivatives</h2>
      <p>NCERT Rationalised 2026–27 Syllabus &bull; All 44 Verbatim Questions with Official Marking Schemes</p>
    </div>
  </div>

  ${limitsSvg}

  <div class="ex-div">NCERT Exercise 12.1: Algebraic, Rational, Piecewise &amp; Trigonometric Limits</div>
${ex12_1.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Exercise 12.2: First Principles, Polynomial Derivatives, Product &amp; Quotient Rules</div>
${ex12_2.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Miscellaneous Exercise on Chapter 12: Trigonometric &amp; Inverse Power First Principles</div>
${misc.join('\n')}

  <div class="chapter-nav-btns" style="margin-top:40px; display:flex; justify-content:space-between; align-items:center;">
    <button class="ch-nav-btn prev" onclick="showChapter(11)" style="padding:10px 24px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer;">← Previous: Chapter 11 (3D Geometry)</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})" style="padding:10px 20px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer;">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(13)" style="padding:10px 24px; border-radius:8px; border:none; background:#ff6b00; color:white; font-weight:700; cursor:pointer;">Next: Chapter 13 (Statistics) →</button>
  </div>
</section>
`;

// Write ch12.html
const ch12Path = path.join(outDir, 'ch12.html');
fs.writeFileSync(ch12Path, chapterHtml.trim(), 'utf8');
console.log(`Successfully generated: ${ch12Path} (${chapterHtml.length} bytes)`);

// Update chapters-data.js so chapters load instantly offline/online
const dataJsPath = path.join(outDir, 'chapters-data.js');
let existingData = '';
if (fs.existsSync(dataJsPath)) {
  existingData = fs.readFileSync(dataJsPath, 'utf8');
}

// Append or update window.CHAPTER_DATA[12]
if (!existingData.includes('window.CHAPTER_DATA[12] =')) {
  const ch12Entry = `\nwindow.CHAPTER_DATA[12] = ${JSON.stringify(chapterHtml.trim())};\n`;
  fs.appendFileSync(dataJsPath, ch12Entry, 'utf8');
  console.log(`Appended Chapter 12 to preloaded cache: ${dataJsPath}`);
} else {
  // Replace window.CHAPTER_DATA[12] block
  const regex = /window\.CHAPTER_DATA\[12\]\s*=\s*[\s\S]*?;\n/g;
  const updated = existingData.replace(regex, `window.CHAPTER_DATA[12] = ${JSON.stringify(chapterHtml.trim())};\n`);
  fs.writeFileSync(dataJsPath, updated, 'utf8');
  console.log(`Updated Chapter 12 in preloaded cache: ${dataJsPath}`);
}
