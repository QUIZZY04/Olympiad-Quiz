// scripts/builders/gen-c11m-ch7.js
// Complete, verbatim NCERT generator for Class 11 Mathematics Chapter 7: Binomial Theorem (All 29 Questions)
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
const ex7_1 = [];
const ex7_2 = [];
const misc = [];

// ============================================================================
// EXERCISE 7.1 (Questions 1 to 14)
// ============================================================================

ex7_1.push(createQCard(
  'c11m-ch7-q1', 'Question 1', 'Exercise 7.1',
  'Expand the expression: $(1 - 2x)^5$.',
  `<div class="step">
    • By the Binomial Theorem for positive integer $n$:<br>
    $$(a + b)^n = \\sum_{r=0}^n ^n C_r a^{n-r} b^r$$<br>
    • Here $a = 1, b = -2x$, and $n = 5$:<br>
    $$(1 - 2x)^5 = ^5 C_0 (1)^5 + ^5 C_1 (1)^4 (-2x) + ^5 C_2 (1)^3 (-2x)^2 + ^5 C_3 (1)^2 (-2x)^3 + ^5 C_4 (1)(-2x)^4 + ^5 C_5 (-2x)^5$$<br>
    • Evaluating the binomial coefficients $^5 C_r$ ($1, 5, 10, 10, 5, 1$):<br>
    $$= 1(1) + 5(1)(-2x) + 10(1)(4x^2) + 10(1)(-8x^3) + 5(1)(16x^4) + 1(-32x^5)$$<br>
    $$= \\mathbf{1 - 10x + 40x^2 - 80x^3 + 80x^4 - 32x^5}$$
  </div>`,
  '2 Marks',
  [
    ['Applying Binomial Theorem expansion with correct signs', '1 Mark'],
    ['Evaluating binomial coefficients and simplifying to $1 - 10x + 40x^2 - 80x^3 + 80x^4 - 32x^5$', '1 Mark']
  ]
));

ex7_1.push(createQCard(
  'c11m-ch7-q2', 'Question 2', 'Exercise 7.1',
  'Expand the expression: $\\left(\\dfrac{2}{x} - \\dfrac{x}{2}\\right)^5$.',
  `<div class="step">
    • Using Binomial Theorem with $a = \\frac{2}{x}, b = -\\frac{x}{2}$, and $n = 5$:<br>
    $$\\left(\\frac{2}{x} - \\frac{x}{2}\\right)^5 = ^5 C_0 \\left(\\frac{2}{x}\\right)^5 + ^5 C_1 \\left(\\frac{2}{x}\\right)^4 \\left(-\\frac{x}{2}\\right) + ^5 C_2 \\left(\\frac{2}{x}\\right)^3 \\left(-\\frac{x}{2}\\right)^2$$<br>
    $$+ ^5 C_3 \\left(\\frac{2}{x}\\right)^2 \\left(-\\frac{x}{2}\\right)^3 + ^5 C_4 \\left(\\frac{2}{x}\\right) \\left(-\\frac{x}{2}\\right)^4 + ^5 C_5 \\left(-\\frac{x}{2}\\right)^5$$<br>
    • Substituting coefficients $1, 5, 10, 10, 5, 1$ and simplifying powers:<br>
    $$= 1 \\left(\\frac{32}{x^5}\\right) - 5 \\left(\\frac{16}{x^4}\\right)\\left(\\frac{x}{2}\\right) + 10 \\left(\\frac{8}{x^3}\\right)\\left(\\frac{x^2}{4}\\right) - 10 \\left(\\frac{4}{x^2}\\right)\\left(\\frac{x^3}{8}\\right) + 5 \\left(\\frac{2}{x}\\right)\\left(\\frac{x^4}{16}\\right) - 1 \\left(\\frac{x^5}{32}\\right)$$<br>
    $$= \\mathbf{\\frac{32}{x^5} - \\frac{40}{x^3} + \\frac{20}{x} - 5x + \\frac{5x^3}{8} - \\frac{x^5}{32}}$$
  </div>`,
  '2 Marks',
  [
    ['Setting up binomial expansion terms with alternating signs', '1 Mark'],
    ['Simplifying rational powers to obtain final 6 terms', '1 Mark']
  ]
));

ex7_1.push(createQCard(
  'c11m-ch7-q3', 'Question 3', 'Exercise 7.1',
  'Expand the expression: $(2x - 3)^6$.',
  `<div class="step">
    • Using Binomial Theorem with $a = 2x, b = -3$, and $n = 6$:<br>
    $$(2x - 3)^6 = ^6 C_0 (2x)^6 - ^6 C_1 (2x)^5 (3) + ^6 C_2 (2x)^4 (3^2) - ^6 C_3 (2x)^3 (3^3) + ^6 C_4 (2x)^2 (3^4) - ^6 C_5 (2x)(3^5) + ^6 C_6 (3^6)$$<br>
    • Evaluating $^6 C_r$: $^6 C_0 = 1, ^6 C_1 = 6, ^6 C_2 = 15, ^6 C_3 = 20, ^6 C_4 = 15, ^6 C_5 = 6, ^6 C_6 = 1$:<br>
      - Term 1: $1 \\times 64x^6 = 64x^6$<br>
      - Term 2: $-6 \\times 32x^5 \\times 3 = -576x^5$<br>
      - Term 3: $15 \\times 16x^4 \\times 9 = 2160x^4$<br>
      - Term 4: $-20 \\times 8x^3 \\times 27 = -4320x^3$<br>
      - Term 5: $15 \\times 4x^2 \\times 81 = 4860x^2$<br>
      - Term 6: $-6 \\times 2x \\times 243 = -2916x$<br>
      - Term 7: $1 \\times 729 = 729$<br>
    • Summing the terms:<br>
    $$= \\mathbf{64x^6 - 576x^5 + 2160x^4 - 4320x^3 + 4860x^2 - 2916x + 729}$$
  </div>`,
  '3 Marks',
  [
    ['Binomial expansion setup with $n = 6$', '1 Mark'],
    ['Evaluating individual terms and coefficients', '1 Mark'],
    ['Final polynomial expression', '1 Mark']
  ]
));

ex7_1.push(createQCard(
  'c11m-ch7-q4', 'Question 4', 'Exercise 7.1',
  'Expand the expression: $\\left(\\dfrac{x}{3} + \\dfrac{1}{x}\\right)^5$.',
  `<div class="step">
    • Using Binomial Theorem with $a = \\frac{x}{3}, b = \\frac{1}{x}$, and $n = 5$:<br>
    $$\\left(\\frac{x}{3} + \\frac{1}{x}\\right)^5 = ^5 C_0 \\left(\\frac{x}{3}\\right)^5 + ^5 C_1 \\left(\\frac{x}{3}\\right)^4 \\left(\\frac{1}{x}\\right) + ^5 C_2 \\left(\\frac{x}{3}\\right)^3 \\left(\\frac{1}{x}\\right)^2$$<br>
    $$+ ^5 C_3 \\left(\\frac{x}{3}\\right)^2 \\left(\\frac{1}{x}\\right)^3 + ^5 C_4 \\left(\\frac{x}{3}\\right) \\left(\\frac{1}{x}\\right)^4 + ^5 C_5 \\left(\\frac{1}{x}\\right)^5$$<br>
    • Evaluating coefficients and simplifying each term:<br>
    $$= 1 \\cdot \\frac{x^5}{243} + 5 \\cdot \\frac{x^4}{81} \\cdot \\frac{1}{x} + 10 \\cdot \\frac{x^3}{27} \\cdot \\frac{1}{x^2} + 10 \\cdot \\frac{x^2}{9} \\cdot \\frac{1}{x^3} + 5 \\cdot \\frac{x}{3} \\cdot \\frac{1}{x^4} + 1 \\cdot \\frac{1}{x^5}$$<br>
    $$= \\mathbf{\\frac{x^5}{243} + \\frac{5x^3}{81} + \\frac{10x}{27} + \\frac{10}{9x} + \\frac{5}{3x^3} + \\frac{1}{x^5}}$$
  </div>`,
  '2 Marks',
  [
    ['Applying Binomial expansion formula', '1 Mark'],
    ['Simplifying algebraic coefficients and fractional powers', '1 Mark']
  ]
));

ex7_1.push(createQCard(
  'c11m-ch7-q5', 'Question 5', 'Exercise 7.1',
  'Expand the expression: $\\left(x + \\dfrac{1}{x}\\right)^6$.',
  `<div class="step">
    • Using Binomial Theorem with $a = x, b = \\frac{1}{x}$, and $n = 6$:<br>
    $$\\left(x + \\frac{1}{x}\\right)^6 = ^6 C_0 x^6 + ^6 C_1 x^5 \\left(\\frac{1}{x}\\right) + ^6 C_2 x^4 \\left(\\frac{1}{x^2}\\right) + ^6 C_3 x^3 \\left(\\frac{1}{x^3}\\right)$$<br>
    $$+ ^6 C_4 x^2 \\left(\\frac{1}{x^4}\\right) + ^6 C_5 x \\left(\\frac{1}{x^5}\\right) + ^6 C_6 \\left(\\frac{1}{x^6}\\right)$$<br>
    • Substituting coefficients $1, 6, 15, 20, 15, 6, 1$:<br>
    $$= x^6 + 6x^4 + 15x^2 + 20 + 15\\left(\\frac{1}{x^2}\\right) + 6\\left(\\frac{1}{x^4}\\right) + \\frac{1}{x^6}$$<br>
    $$= \\mathbf{x^6 + 6x^4 + 15x^2 + 20 + \\frac{15}{x^2} + \\frac{6}{x^4} + \\frac{1}{x^6}}$$
  </div>`,
  '2 Marks',
  [
    ['Binomial expansion setup with symmetrical powers', '1 Mark'],
    ['Simplifying to $x^6 + 6x^4 + 15x^2 + 20 + 15/x^2 + 6/x^4 + 1/x^6$', '1 Mark']
  ]
));

ex7_1.push(createQCard(
  'c11m-ch7-q6', 'Question 6', 'Exercise 7.1',
  'Using Binomial Theorem, evaluate: $(96)^3$.',
  `<div class="step">
    • Express $96$ as $(100 - 4)$:<br>
    $$(96)^3 = (100 - 4)^3$$<br>
    • Expanding using Binomial Theorem:<br>
    $$(100 - 4)^3 = ^3 C_0 (100)^3 - ^3 C_1 (100)^2 (4) + ^3 C_2 (100)(4^2) - ^3 C_3 (4^3)$$<br>
    $$= 1(1000000) - 3(10000)(4) + 3(100)(16) - 1(64)$$<br>
    $$= 1000000 - 120000 + 4800 - 64$$<br>
    $$= 880000 + 4736 = \\mathbf{884736}$$
  </div>`,
  '2 Marks',
  [
    ['Expressing $96 = 100 - 4$ and writing binomial expansion', '1 Mark'],
    ['Evaluating terms to obtain 884736', '1 Mark']
  ]
));

ex7_1.push(createQCard(
  'c11m-ch7-q7', 'Question 7', 'Exercise 7.1',
  'Using Binomial Theorem, evaluate: $(102)^5$.',
  `<div class="step">
    • Express $102$ as $(100 + 2)$:<br>
    $$(102)^5 = (100 + 2)^5$$<br>
    • Expanding using Binomial Theorem:<br>
    $$(100 + 2)^5 = ^5 C_0 (100)^5 + ^5 C_1 (100)^4 (2) + ^5 C_2 (100)^3 (2^2) + ^5 C_3 (100)^2 (2^3) + ^5 C_4 (100)(2^4) + ^5 C_5 (2^5)$$<br>
    • Evaluating each term:<br>
      - Term 1: $1 \\times 10^{10} = 10000000000$<br>
      - Term 2: $5 \\times 10^8 \\times 2 = 1000000000$<br>
      - Term 3: $10 \\times 10^6 \\times 4 = 40000000$<br>
      - Term 4: $10 \\times 10^4 \\times 8 = 800000$<br>
      - Term 5: $5 \\times 100 \\times 16 = 8000$<br>
      - Term 6: $1 \\times 32 = 32$<br>
    • Summing all terms:<br>
    $$10000000000 + 1000000000 + 40000000 + 800000 + 8000 + 32 = \\mathbf{11040808032}$$
  </div>`,
  '3 Marks',
  [
    ['Expressing $102 = 100 + 2$ with binomial expansion', '1 Mark'],
    ['Calculating each power of 10 and multiplying by coefficients', '1 Mark'],
    ['Correct sum: 11040808032', '1 Mark']
  ]
));

ex7_1.push(createQCard(
  'c11m-ch7-q8', 'Question 8', 'Exercise 7.1',
  'Using Binomial Theorem, evaluate: $(101)^4$.',
  `<div class="step">
    • Express $101$ as $(100 + 1)$:<br>
    $$(101)^4 = (100 + 1)^4$$<br>
    • Expanding using Binomial Theorem:<br>
    $$(100 + 1)^4 = ^4 C_0 (100)^4 + ^4 C_1 (100)^3 (1) + ^4 C_2 (100)^2 (1^2) + ^4 C_3 (100)(1^3) + ^4 C_4 (1^4)$$<br>
    $$= 1(100000000) + 4(1000000) + 6(10000) + 4(100) + 1$$<br>
    $$= 100000000 + 4000000 + 60000 + 400 + 1$$<br>
    $$= \\mathbf{104060401}$$
  </div>`,
  '2 Marks',
  [
    ['Binomial expansion for $(100 + 1)^4$', '1 Mark'],
    ['Evaluating sum to get 104060401', '1 Mark']
  ]
));

ex7_1.push(createQCard(
  'c11m-ch7-q9', 'Question 9', 'Exercise 7.1',
  'Using Binomial Theorem, evaluate: $(99)^5$.',
  `<div class="step">
    • Express $99$ as $(100 - 1)$:<br>
    $$(99)^5 = (100 - 1)^5$$<br>
    • Expanding using Binomial Theorem:<br>
    $$(100 - 1)^5 = ^5 C_0 (100)^5 - ^5 C_1 (100)^4 (1) + ^5 C_2 (100)^3 (1) - ^5 C_3 (100)^2 (1) + ^5 C_4 (100)(1) - ^5 C_5 (1)$$<br>
    $$= 10000000000 - 5(100000000) + 10(1000000) - 10(10000) + 5(100) - 1$$<br>
    $$= 10000000000 - 500000000 + 10000000 - 100000 + 500 - 1$$<br>
    $$= 9510000500 - 100001 = \\mathbf{9509900499}$$
  </div>`,
  '2 Marks',
  [
    ['Binomial expansion of $(100 - 1)^5$', '1 Mark'],
    ['Accurate arithmetic evaluation to 9509900499', '1 Mark']
  ]
));

ex7_1.push(createQCard(
  'c11m-ch7-q10', 'Question 10', 'Exercise 7.1',
  'Using Binomial Theorem, indicate which number is larger: $(1.1)^{10000}$ or $1000$.',
  `<div class="step">
    • Express $(1.1)^{10000}$ as $(1 + 0.1)^{10000}$.<br>
    • Expanding using Binomial Theorem:<br>
    $$(1 + 0.1)^{10000} = ^{10000}C_0 (1)^{10000} + ^{10000}C_1 (1)^{9999} (0.1) + \\text{other positive terms}$$<br>
    • Evaluating the first two terms:<br>
    $$^{10000}C_0 = 1$$<br>
    $$^{10000}C_1 (0.1) = 10000 \\times 0.1 = 1000$$<br>
    • Therefore:<br>
    $$(1.1)^{10000} = 1 + 1000 + \\text{other positive terms} = 1001 + \\text{other positive terms}$$<br>
    • Since all subsequent terms are positive, $(1.1)^{10000} > 1001 > 1000$.<br>
    • <b>Conclusion:</b> $\\mathbf{(1.1)^{10000}}$ is larger than $1000$.
  </div>`,
  '2 Marks',
  [
    ['Expressing $(1.1)^{10000} = (1 + 0.1)^{10000}$ and writing first two terms', '1 Mark'],
    ['Showing $1 + 1000 + \\text{positive terms} > 1000$ and concluding $(1.1)^{10000}$ is larger', '1 Mark']
  ]
));

ex7_1.push(createQCard(
  'c11m-ch7-q11', 'Question 11', 'Exercise 7.1',
  'Find $(a + b)^4 - (a - b)^4$. Hence, evaluate $(\\sqrt{3} + \\sqrt{2})^4 - (\\sqrt{3} - \\sqrt{2})^4$.',
  `<div class="step">
    • Expanding $(a + b)^4$ and $(a - b)^4$ using Binomial Theorem:<br>
    $$(a + b)^4 = a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4$$<br>
    $$(a - b)^4 = a^4 - 4a^3 b + 6a^2 b^2 - 4ab^3 + b^4$$<br>
    • Subtracting the second equation from the first:<br>
    $$(a + b)^4 - (a - b)^4 = 2[4a^3 b + 4ab^3] = 8ab(a^2 + b^2)$$<br><br>
    • <b>Evaluating $(\\sqrt{3} + \\sqrt{2})^4 - (\\sqrt{3} - \\sqrt{2})^4$:</b><br>
    Substitute $a = \\sqrt{3}$ and $b = \\sqrt{2}$ into the derived identity:<br>
    $$= 8(\\sqrt{3})(\\sqrt{2})[(\\sqrt{3})^2 + (\\sqrt{2})^2]$$<br>
    $$= 8\\sqrt{6}[3 + 2] = 8\\sqrt{6} \\times 5 = \\mathbf{40\\sqrt{6}}$$
  </div>`,
  '3 Marks',
  [
    ['Expanding $(a + b)^4$ and $(a - b)^4$ and subtracting to obtain $8ab(a^2 + b^2)$', '1½ Marks'],
    ['Substituting $a = \\sqrt{3}, b = \\sqrt{2}$ to obtain $40\\sqrt{6}$', '1½ Marks']
  ]
));

ex7_1.push(createQCard(
  'c11m-ch7-q12', 'Question 12', 'Exercise 7.1',
  'Find $(x + 1)^6 + (x - 1)^6$. Hence or otherwise evaluate $(\\sqrt{2} + 1)^6 + (\\sqrt{2} - 1)^6$.',
  `<div class="step">
    • Expanding $(x + 1)^6$ and $(x - 1)^6$ using Binomial Theorem:<br>
    $$(x + 1)^6 = x^6 + 6x^5 + 15x^4 + 20x^3 + 15x^2 + 6x + 1$$<br>
    $$(x - 1)^6 = x^6 - 6x^5 + 15x^4 - 20x^3 + 15x^2 - 6x + 1$$<br>
    • Adding the two expansions:<br>
    $$(x + 1)^6 + (x - 1)^6 = 2[x^6 + 15x^4 + 15x^2 + 1]$$<br><br>
    • <b>Evaluating $(\\sqrt{2} + 1)^6 + (\\sqrt{2} - 1)^6$:</b><br>
    Substitute $x = \\sqrt{2}$ (so $x^2 = 2, x^4 = 4, x^6 = 8$):<br>
    $$= 2[8 + 15(4) + 15(2) + 1]$$<br>
    $$= 2[8 + 60 + 30 + 1]$$<br>
    $$= 2[99] = \\mathbf{198}$$
  </div>`,
  '3 Marks',
  [
    ['Expanding both binomials and adding to get $2(x^6 + 15x^4 + 15x^2 + 1)$', '1½ Marks'],
    ['Substituting $x = \\sqrt{2}$ and evaluating $2 \\times 99 = 198$', '1½ Marks']
  ]
));

ex7_1.push(createQCard(
  'c11m-ch7-q13', 'Question 13', 'Exercise 7.1',
  'Show that $9^{n+1} - 8n - 9$ is divisible by $64$, whenever $n$ is a positive integer.',
  `<div class="step">
    • Express $9$ as $(1 + 8)$:<br>
    $$9^{n+1} = (1 + 8)^{n+1}$$<br>
    • Expanding $(1 + 8)^{n+1}$ using Binomial Theorem:<br>
    $$(1 + 8)^{n+1} = ^{n+1}C_0 + ^{n+1}C_1 (8) + ^{n+1}C_2 (8^2) + ^{n+1}C_3 (8^3) + \\dots + ^{n+1}C_{n+1} (8^{n+1})$$<br>
    • Since $^{n+1}C_0 = 1$ and $^{n+1}C_1 = n + 1$:<br>
    $$9^{n+1} = 1 + (n + 1)(8) + 8^2 [^{n+1}C_2 + ^{n+1}C_3 (8) + \\dots + ^{n+1}C_{n+1} (8^{n-1})]$$<br>
    $$9^{n+1} = 1 + 8n + 8 + 64k \\quad (\\text{where } k \\in \\mathbb{Z})$$<br>
    $$9^{n+1} = 9 + 8n + 64k$$<br>
    • Transposing terms:<br>
    $$9^{n+1} - 8n - 9 = 64k$$<br>
    • Since $k$ is an integer (sum of products of integers), $9^{n+1} - 8n - 9$ is a multiple of $64$.<br>
    • <b>Hence proved:</b> $9^{n+1} - 8n - 9$ is divisible by $64$ for all positive integers $n$.
  </div>`,
  '3 Marks',
  [
    ['Writing $9^{n+1} = (1 + 8)^{n+1}$ and applying Binomial Theorem', '1 Mark'],
    ['Simplifying first two terms to $1 + 8n + 8 = 9 + 8n$', '1 Mark'],
    ['Factoring out $64$ from remaining terms to show divisibility by 64', '1 Mark']
  ]
));

ex7_1.push(createQCard(
  'c11m-ch7-q14', 'Question 14', 'Exercise 7.1',
  'Prove that $\\sum_{r=0}^{n} 3^r \, ^n C_r = 4^n$.',
  `<div class="step">
    • By the Binomial Theorem for any positive integer $n$:<br>
    $$(1 + x)^n = \\sum_{r=0}^n ^n C_r x^r = ^n C_0 + ^n C_1 x + ^n C_2 x^2 + \\dots + ^n C_n x^n$$<br>
    • Putting $x = 3$ in the identity:<br>
    $$(1 + 3)^n = \\sum_{r=0}^n ^n C_r (3)^r$$<br>
    $$4^n = \\sum_{r=0}^n 3^r \, ^n C_r$$<br>
    • Therefore:<br>
    $$\\sum_{r=0}^n 3^r \, ^n C_r = 4^n$$<br>
    • <b>Hence Proved.</b>
  </div>`,
  '2 Marks',
  [
    ['Stating Binomial expansion formula for $(1 + x)^n$', '1 Mark'],
    ['Setting $x = 3$ to achieve $\\sum_{r=0}^n 3^r ^n C_r = 4^n$', '1 Mark']
  ]
));

// ============================================================================
// EXERCISE 7.2 (Questions 1 to 8: General Term & Middle Term)
// ============================================================================

ex7_2.push(createQCard(
  'c11m-ch7-q15', 'Question 1', 'Exercise 7.2',
  'Find the coefficient of $x^5$ in $(x + 3)^8$.',
  `<div class="step">
    • The general term $T_{r+1}$ in the expansion of $(a + b)^n$ is:<br>
    $$T_{r+1} = ^n C_r a^{n-r} b^r$$<br>
    • For $(x + 3)^8$, $a = x, b = 3, n = 8$:<br>
    $$T_{r+1} = ^8 C_r x^{8-r} 3^r$$<br>
    • To find the coefficient of $x^5$, equate the power of $x$ to $5$:<br>
    $$8 - r = 5 \\implies r = 3$$<br>
    • Substituting $r = 3$ into the term:<br>
    $$T_4 = ^8 C_3 x^5 3^3$$<br>
    • Evaluating the coefficient:<br>
    $$^8 C_3 \\times 3^3 = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} \\times 27 = 56 \\times 27 = \\mathbf{1512}$$<br>
    • Thus, the coefficient of $x^5$ is <b>1512</b>.
  </div>`,
  '2 Marks',
  [
    ['Writing general term $T_{r+1} = ^8 C_r x^{8-r} 3^r$ and setting $8 - r = 5 \\implies r = 3$', '1 Mark'],
    ['Evaluating $^8 C_3 \\times 27 = 56 \\times 27 = 1512$', '1 Mark']
  ]
));

ex7_2.push(createQCard(
  'c11m-ch7-q16', 'Question 2', 'Exercise 7.2',
  'Find the coefficient of $a^5 b^7$ in $(a - 2b)^{12}$.',
  `<div class="step">
    • General term $T_{r+1}$ in the expansion of $(a - 2b)^{12}$:<br>
    $$T_{r+1} = ^{12}C_r a^{12-r} (-2b)^r = ^{12}C_r (-2)^r a^{12-r} b^r$$<br>
    • Comparing with $a^5 b^7$, we set $r = 7$ (which gives $12 - r = 12 - 7 = 5$, matching $a^5$):<br>
    $$r = 7$$<br>
    • Evaluating the coefficient:<br>
    $$\\text{Coefficient} = ^{12}C_7 (-2)^7 = ^{12}C_5 (-128)$$<br>
    $$^{12}C_5 = \\frac{12 \\times 11 \\times 10 \\times 9 \\times 8}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 792$$<br>
    $$\\text{Coefficient} = 792 \\times (-128) = \\mathbf{-101376}$$
  </div>`,
  '2 Marks',
  [
    ['Setting up general term and determining $r = 7$', '1 Mark'],
    ['Evaluating $^{12}C_7 (-2)^7 = 792 \\times (-128) = -101376$', '1 Mark']
  ]
));

ex7_2.push(createQCard(
  'c11m-ch7-q17', 'Question 3', 'Exercise 7.2',
  'Write the general term in the expansion of $(x^2 - y)^6$.',
  `<div class="step">
    • The general term $T_{r+1}$ in the expansion of $(a + b)^n$ is $T_{r+1} = ^n C_r a^{n-r} b^r$.<br>
    • Here $a = x^2, b = -y$, and $n = 6$:<br>
    $$T_{r+1} = ^6 C_r (x^2)^{6-r} (-y)^r$$<br>
    $$T_{r+1} = ^6 C_r x^{2(6-r)} (-1)^r y^r$$<br>
    $$T_{r+1} = \\mathbf{(-1)^r \, ^6 C_r x^{12 - 2r} y^r} \\quad (r = 0, 1, 2, \\dots, 6)$$
  </div>`,
  '1 Mark',
  [
    ['Expressing $T_{r+1} = (-1)^r ^6 C_r x^{12 - 2r} y^r$', '1 Mark']
  ]
));

ex7_2.push(createQCard(
  'c11m-ch7-q18', 'Question 4', 'Exercise 7.2',
  'Write the general term in the expansion of $(x^2 - yx)^{12}, x \\ne 0$.',
  `<div class="step">
    • General term $T_{r+1}$ in the expansion of $(a + b)^n$ with $a = x^2, b = -yx$, and $n = 12$:<br>
    $$T_{r+1} = ^{12}C_r (x^2)^{12-r} (-yx)^r$$<br>
    $$T_{r+1} = ^{12}C_r x^{24 - 2r} (-1)^r y^r x^r$$<br>
    • Combining powers of $x$ ($24 - 2r + r = 24 - r$):<br>
    $$T_{r+1} = \\mathbf{(-1)^r \, ^{12}C_r x^{24 - r} y^r} \\quad (r = 0, 1, \\dots, 12)$$
  </div>`,
  '1 Mark',
  [
    ['Combining powers of $x$ to obtain $(-1)^r ^{12}C_r x^{24 - r} y^r$', '1 Mark']
  ]
));

ex7_2.push(createQCard(
  'c11m-ch7-q19', 'Question 5', 'Exercise 7.2',
  'Find the 4th term in the expansion of $(x - 2y)^{12}$.',
  `<div class="step">
    • General term $T_{r+1} = ^{12}C_r x^{12-r} (-2y)^r$.<br>
    • For the 4th term ($T_4$), set $r + 1 = 4 \\implies r = 3$:<br>
    $$T_4 = ^{12}C_3 x^{12-3} (-2y)^3$$<br>
    $$T_4 = ^{12}C_3 x^9 (-8y^3)$$<br>
    • Evaluating $^{12}C_3$:<br>
    $$^{12}C_3 = \\frac{12 \\times 11 \\times 10}{3 \\times 2 \\times 1} = 220$$<br>
    • Multiplying:<br>
    $$T_4 = 220 \\times (-8) x^9 y^3 = \\mathbf{-1760 x^9 y^3}$$
  </div>`,
  '2 Marks',
  [
    ['Identifying $r = 3$ and writing $T_4 = ^{12}C_3 x^9 (-2y)^3$', '1 Mark'],
    ['Evaluating $220 \\times (-8) x^9 y^3 = -1760 x^9 y^3$', '1 Mark']
  ]
));

ex7_2.push(createQCard(
  'c11m-ch7-q20', 'Question 6', 'Exercise 7.2',
  'Find the 13th term in the expansion of $\\left(9x - \\dfrac{1}{3\\sqrt{x}}\\right)^{18}, x \\ne 0$.',
  `<div class="step">
    • For the 13th term ($T_{13}$), $r + 1 = 13 \\implies r = 12$.<br>
    • The general term in the expansion with $n = 18$ is:<br>
    $$T_{13} = ^{18}C_{12} (9x)^{18 - 12} \\left(-\\frac{1}{3\\sqrt{x}}\\right)^{12}$$<br>
    $$T_{13} = ^{18}C_6 (9x)^6 \\left(\\frac{1}{3^{12} (x^{1/2})^{12}}\\right)$$<br>
    • Since $9x = 3^2 x$, we have $(9x)^6 = (3^2)^6 x^6 = 3^{12} x^6$:<br>
    $$T_{13} = ^{18}C_6 \\left(3^{12} x^6\\right) \\left(\\frac{1}{3^{12} x^6}\\right)$$<br>
    • The variable $x$ and base $3$ cancel completely!<br>
    $$T_{13} = ^{18}C_6 = \\frac{18 \\times 17 \\times 16 \\times 15 \\times 14 \\times 13}{6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1} = \\mathbf{18564}$$
  </div>`,
  '3 Marks',
  [
    ['Setting $r = 12$ and substituting into formula', '1 Mark'],
    ['Cancelling $3^{12} x^6$ from numerator and denominator', '1 Mark'],
    ['Evaluating $^{18}C_6 = 18564$', '1 Mark']
  ]
));

ex7_2.push(createQCard(
  'c11m-ch7-q21', 'Question 7', 'Exercise 7.2',
  'Find the middle terms in the expansion of $\\left(3 - \\dfrac{x^3}{6}\\right)^7$.',
  `<div class="step">
    • Here $n = 7$ (an odd number).<br>
    • Therefore, there are two middle terms: the $\\left(\\frac{n+1}{2}\\right)^{\\text{th}}$ and $\\left(\\frac{n+3}{2}\\right)^{\\text{th}}$ terms, i.e., the **4th term** and **5th term**.<br><br>
    • <b>Finding $T_4$ ($r = 3$):</b><br>
    $$T_4 = ^7 C_3 (3)^{7-3} \\left(-\\frac{x^3}{6}\\right)^3 = ^7 C_3 (3^4) \\left(-\\frac{x^9}{216}\\right)$$<br>
    $$^7 C_3 = \\frac{7 \\times 6 \\times 5}{6} = 35$$<br>
    $$T_4 = 35 \\times 81 \\times \\left(-\\frac{x^9}{216}\\right) = 35 \\times 3 \\times \\left(-\\frac{x^9}{8}\\right) = \\mathbf{-\\frac{105}{8} x^9}$$<br><br>
    • <b>Finding $T_5$ ($r = 4$):</b><br>
    $$T_5 = ^7 C_4 (3)^{7-4} \\left(-\\frac{x^3}{6}\\right)^4 = ^7 C_3 (3^3) \\left(\\frac{x^{12}}{1296}\\right)$$<br>
    $$T_5 = 35 \\times 27 \\times \\left(\\frac{x^{12}}{1296}\\right) = 35 \\times \\left(\\frac{x^{12}}{48}\\right) = \\mathbf{\\frac{35}{48} x^{12}}$$
  </div>`,
  '3 Marks',
  [
    ['Identifying 4th and 5th terms as middle terms for $n = 7$', '1 Mark'],
    ['Computing $T_4 = -\\frac{105}{8} x^9$', '1 Mark'],
    ['Computing $T_5 = \\frac{35}{48} x^{12}$', '1 Mark']
  ]
));

ex7_2.push(createQCard(
  'c11m-ch7-q22', 'Question 8', 'Exercise 7.2',
  'Find the middle term in the expansion of $\\left(\\dfrac{x}{3} + 9y\\right)^{10}$.',
  `<div class="step">
    • Here $n = 10$ (an even number).<br>
    • Therefore, there is a single middle term, which is the $\\left(\\frac{n}{2} + 1\\right)^{\\text{th}} = \\left(\\frac{10}{2} + 1\\right)^{\\text{th}} =$ **6th term** ($T_6$).<br>
    • For $T_6$, $r = 5$:<br>
    $$T_6 = ^{10}C_5 \\left(\\frac{x}{3}\\right)^{10 - 5} (9y)^5 = ^{10}C_5 \\left(\\frac{x^5}{3^5}\\right) (9^5 y^5)$$<br>
    • Notice that $9^5 = (3^2)^5 = 3^{10}$:<br>
    $$\\frac{9^5}{3^5} = \\frac{3^{10}}{3^5} = 3^5 = 243$$<br>
    • Evaluating $^{10}C_5$:<br>
    $$^{10}C_5 = \\frac{10 \\times 9 \\times 8 \\times 7 \\times 6}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 252$$<br>
    • Multiplying:<br>
    $$T_6 = 252 \\times 243 \\, x^5 y^5 = \\mathbf{61236 \\, x^5 y^5}$$
  </div>`,
  '3 Marks',
  [
    ['Identifying 6th term as the single middle term for $n = 10$', '1 Mark'],
    ['Simplifying coefficient $^{10}C_5 \\times (9^5 / 3^5) = 252 \\times 243$', '1 Mark'],
    ['Final evaluated term: $61236 x^5 y^5$', '1 Mark']
  ]
));

// ============================================================================
// MISCELLANEOUS EXERCISE ON CHAPTER 7 (Questions 1 to 7)
// ============================================================================

misc.push(createQCard(
  'c11m-ch7-q23', 'Question 1 (Misc)', 'Misc Exercise',
  'If $a$ and $b$ are distinct integers, prove that $a - b$ is a factor of $a^n - b^n$, whenever $n$ is a positive integer.',
  `<div class="step">
    • We can write $a$ as $(a - b) + b$.<br>
    • Taking the $n^{\\text{th}}$ power on both sides:<br>
    $$a^n = [(a - b) + b]^n$$<br>
    • Expanding by the Binomial Theorem:<br>
    $$a^n = ^n C_0 (a - b)^n + ^n C_1 (a - b)^{n-1} b + ^n C_2 (a - b)^{n-2} b^2 + \\dots + ^n C_{n-1} (a - b) b^{n-1} + ^n C_n b^n$$<br>
    • Since $^n C_n = 1$, the last term is simply $b^n$. Subtracting $b^n$ from both sides:<br>
    $$a^n - b^n = ^n C_0 (a - b)^n + ^n C_1 (a - b)^{n-1} b + \\dots + ^n C_{n-1} (a - b) b^{n-1}$$<br>
    • Factoring out $(a - b)$ from every term on the right-hand side:<br>
    $$a^n - b^n = (a - b) \\left[^n C_0 (a - b)^{n-1} + ^n C_1 (a - b)^{n-2} b + \\dots + ^n C_{n-1} b^{n-1}\\right]$$<br>
    $$a^n - b^n = (a - b) k$$<br>
    where $k = \\left[^n C_0 (a - b)^{n-1} + \\dots + ^n C_{n-1} b^{n-1}\\right]$ is an integer since $a, b$ and $n$ are integers.<br>
    • <b>Hence proved:</b> $(a - b)$ is a factor of $a^n - b^n$ for all positive integers $n$.
  </div>`,
  '3 Marks',
  [
    ['Expressing $a = (a - b) + b$ and applying Binomial expansion', '1 Mark'],
    ['Subtracting $b^n$ and factoring out $(a - b)$', '1 Mark'],
    ['Concluding $(a - b)$ is a factor since the bracketed sum is an integer', '1 Mark']
  ]
));

misc.push(createQCard(
  'c11m-ch7-q24', 'Question 2 (Misc)', 'Misc Exercise',
  'Evaluate $(\\sqrt{3} + \\sqrt{2})^6 - (\\sqrt{3} - \\sqrt{2})^6$.',
  `<div class="step">
    • Consider the general difference of sixth powers using Binomial expansions:<br>
    $$(a + b)^6 - (a - b)^6$$<br>
    • $(a + b)^6 = a^6 + 6a^5 b + 15a^4 b^2 + 20a^3 b^3 + 15a^2 b^4 + 6ab^5 + b^6$<br>
    • $(a - b)^6 = a^6 - 6a^5 b + 15a^4 b^2 - 20a^3 b^3 + 15a^2 b^4 - 6ab^5 + b^6$<br>
    • Subtracting the two expressions cancels the even powers of $b$ and doubles the odd powers:<br>
    $$(a + b)^6 - (a - b)^6 = 2[6a^5 b + 20a^3 b^3 + 6ab^5] = 4ab[3a^4 + 10a^2 b^2 + 3b^4]$$<br><br>
    • Now substitute $a = \\sqrt{3}$ and $b = \\sqrt{2}$:<br>
      - $a^2 = 3, b^2 = 2$<br>
      - $a^4 = 9, b^4 = 4$<br>
      - $ab = \\sqrt{6}$<br>
    • Substituting into the simplified formula:<br>
    $$= 4\\sqrt{6} \\left[3(9) + 10(3)(2) + 3(4)\\right]$$<br>
    $$= 4\\sqrt{6} [27 + 60 + 12] = 4\\sqrt{6} [99] = \\mathbf{396\\sqrt{6}}$$
  </div>`,
  '3 Marks',
  [
    ['Expanding both binomials and subtracting to get $4ab(3a^4 + 10a^2 b^2 + 3b^4)$', '1½ Marks'],
    ['Substituting $a = \\sqrt{3}, b = \\sqrt{2}$ and simplifying to $396\\sqrt{6}$', '1½ Marks']
  ]
));

misc.push(createQCard(
  'c11m-ch7-q25', 'Question 3 (Misc)', 'Misc Exercise',
  'Find the value of $\\left(a^2 + \\sqrt{a^2 - 1}\\right)^4 + \\left(a^2 - \\sqrt{a^2 - 1}\\right)^4$.',
  `<div class="step">
    • Let $x = a^2$ and $y = \\sqrt{a^2 - 1}$.<br>
    • The given expression is $(x + y)^4 + (x - y)^4$.<br>
    • Expanding both terms using Binomial Theorem and adding:<br>
    $$(x + y)^4 + (x - y)^4 = 2[x^4 + 6x^2 y^2 + y^4]$$<br>
    • Substituting back $x = a^2$ and $y = \\sqrt{a^2 - 1}$:<br>
      - $x^2 = a^4, \\quad x^4 = a^8$<br>
      - $y^2 = a^2 - 1$<br>
      - $y^4 = (a^2 - 1)^2 = a^4 - 2a^2 + 1$<br>
    • Now simplify the bracketed expression:<br>
    $$x^4 + 6x^2 y^2 + y^4 = a^8 + 6a^4(a^2 - 1) + (a^4 - 2a^2 + 1)$$<br>
    $$= a^8 + 6a^6 - 6a^4 + a^4 - 2a^2 + 1$$<br>
    $$= a^8 + 6a^6 - 5a^4 - 2a^2 + 1$$<br>
    • Multiplying by $2$:<br>
    $$= 2(a^8 + 6a^6 - 5a^4 - 2a^2 + 1) = \\mathbf{2a^8 + 12a^6 - 10a^4 - 4a^2 + 2}$$
  </div>`,
  '3 Marks',
  [
    ['Applying $(x + y)^4 + (x - y)^4 = 2(x^4 + 6x^2 y^2 + y^4)$', '1 Mark'],
    ['Substituting $x = a^2$ and $y = \\sqrt{a^2 - 1}$ and expanding powers', '1 Mark'],
    ['Collecting like terms to get $2a^8 + 12a^6 - 10a^4 - 4a^2 + 2$', '1 Mark']
  ]
));

misc.push(createQCard(
  'c11m-ch7-q26', 'Question 4 (Misc)', 'Misc Exercise',
  'Find an approximation of $(0.99)^5$ using the first three terms of its expansion.',
  `<div class="step">
    • Express $0.99$ as $(1 - 0.01)$:<br>
    $$(0.99)^5 = (1 - 0.01)^5$$<br>
    • Expanding by Binomial Theorem:<br>
    $$(1 - 0.01)^5 = ^5 C_0 (1)^5 - ^5 C_1 (1)^4 (0.01) + ^5 C_2 (1)^3 (0.01)^2 - \\dots$$<br>
    • Taking the first three terms:<br>
    $$^5 C_0 = 1$$<br>
    $$^5 C_1 (0.01) = 5 \\times 0.01 = 0.05$$<br>
    $$^5 C_2 (0.01)^2 = 10 \\times 0.0001 = 0.001$$<br>
    • Evaluating the approximation:<br>
    $$(0.99)^5 \\approx 1 - 0.05 + 0.001 = 0.95 + 0.001 = \\mathbf{0.951}$$
  </div>`,
  '2 Marks',
  [
    ['Writing $(0.99)^5 = (1 - 0.01)^5$ with first three terms', '1 Mark'],
    ['Evaluating $1 - 0.05 + 0.001 = 0.951$', '1 Mark']
  ]
));

misc.push(createQCard(
  'c11m-ch7-q27', 'Question 5 (Misc)', 'Misc Exercise',
  'Find $n$, if the ratio of the fifth term from the beginning to the fifth term from the end in the expansion of $\\left(\\sqrt[4]{2} + \\dfrac{1}{\\sqrt[4]{3}}\\right)^n$ is $\\sqrt{6} : 1$.',
  `<div class="step">
    • <b>5th term from the beginning ($T_5$):</b><br>
    $$T_5 = ^n C_4 (2^{1/4})^{n-4} \\left(3^{-1/4}\\right)^4 = ^n C_4 2^{\\frac{n-4}{4}} \\cdot \\frac{1}{3}$$<br>
    • <b>5th term from the end:</b><br>
    The 5th term from the end in $(a + b)^n$ is the 5th term from the beginning in $(b + a)^n$:<br>
    $$T'_5 = ^n C_4 \\left(3^{-1/4}\\right)^{n-4} (2^{1/4})^4 = ^n C_4 3^{-\\frac{n-4}{4}} \\cdot 2 = ^n C_4 \\frac{2}{3^{\\frac{n-4}{4}}}$$<br>
    • <b>Taking the ratio $\\dfrac{T_5}{T'_5}$ given as $\\dfrac{\\sqrt{6}}{1}$:</b><br>
    $$\\frac{T_5}{T'_5} = \\frac{^n C_4 2^{\\frac{n-4}{4}} \\cdot \\frac{1}{3}}{^n C_4 3^{-\\frac{n-4}{4}} \\cdot 2} = \\frac{2^{\\frac{n-4}{4}} \\cdot 3^{\\frac{n-4}{4}}}{6} = \\frac{6^{\\frac{n-4}{4}}}{6} = 6^{\\frac{n-4}{4} - 1} = 6^{\\frac{n-8}{4}}$$<br>
    • Given $\\frac{T_5}{T'_5} = \\sqrt{6} = 6^{1/2}$:<br>
    $$6^{\\frac{n-8}{4}} = 6^{1/2}$$<br>
    • Equating exponents:<br>
    $$\\frac{n - 8}{4} = \\frac{1}{2} \\implies n - 8 = 2 \\implies \\mathbf{n = 10}$$
  </div>`,
  '4 Marks',
  [
    ['Formulating $T_5$ from beginning and $T\'_5$ from end', '1½ Marks'],
    ['Simplifying the ratio to $6^{\\frac{n-8}{4}}$', '1½ Marks'],
    ['Equating $6^{\\frac{n-8}{4}} = 6^{1/2} \\implies n = 10$', '1 Mark']
  ]
));

misc.push(createQCard(
  'c11m-ch7-q28', 'Question 6 (Misc)', 'Misc Exercise',
  'Expand using Binomial Theorem: $\\left(1 + \\dfrac{x}{2} - \\dfrac{2}{x}\\right)^4, x \\ne 0$.',
  `<div class="step">
    • Group the terms as $\\left[1 + \\left(\\frac{x}{2} - \\frac{2}{x}\\right)\\right]^4$:<br>
    $$\\left[1 + \\left(\\frac{x}{2} - \\frac{2}{x}\\right)\\right]^4 = ^4 C_0 + ^4 C_1 \\left(\\frac{x}{2} - \\frac{2}{x}\\right) + ^4 C_2 \\left(\\frac{x}{2} - \\frac{2}{x}\\right)^2 + ^4 C_3 \\left(\\frac{x}{2} - \\frac{2}{x}\\right)^3 + ^4 C_4 \\left(\\frac{x}{2} - \\frac{2}{x}\\right)^4$$<br>
    • Evaluating each power using Binomial expansion:<br>
      - Term 0: $1$<br>
      - Term 1: $4\\left(\\frac{x}{2} - \\frac{2}{x}\\right) = 2x - \\frac{8}{x}$<br>
      - Term 2: $6\\left(\\frac{x^2}{4} - 2 + \\frac{4}{x^2}\\right) = \\frac{3x^2}{2} - 12 + \\frac{24}{x^2}$<br>
      - Term 3: $4\\left(\\frac{x^3}{8} - \\frac{3x}{2} + \\frac{6}{x} - \\frac{8}{x^3}\\right) = \\frac{x^3}{2} - 6x + \\frac{24}{x} - \\frac{32}{x^3}$<br>
      - Term 4: $\\frac{x^4}{16} - x^2 + 6 - \\frac{16}{x^2} + \\frac{16}{x^4}$<br>
    • Collecting and combining like powers of $x$:<br>
      - Constant term: $1 - 12 + 6 = -5$<br>
      - Powers of $x$: $\\frac{x^4}{16} + \\frac{x^3}{2} + \\left(\\frac{3}{2} - 1\\right)x^2 + (2 - 6)x = \\frac{x^4}{16} + \\frac{x^3}{2} + \\frac{x^2}{2} - 4x$<br>
      - Negative powers of $x$: $(-8 + 24)\\frac{1}{x} + (24 - 16)\\frac{1}{x^2} - \\frac{32}{x^3} + \\frac{16}{x^4} = \\frac{16}{x} + \\frac{8}{x^2} - \\frac{32}{x^3} + \\frac{16}{x^4}$<br>
    • Final combined expansion:<br>
    $$= \\mathbf{\\frac{x^4}{16} + \\frac{x^3}{2} + \\frac{x^2}{2} - 4x - 5 + \\frac{16}{x} + \\frac{8}{x^2} - \\frac{32}{x^3} + \\frac{16}{x^4}}$$
  </div>`,
  '4 Marks',
  [
    ['Grouping as $[1 + (x/2 - 2/x)]^4$ and expanding', '1 Mark'],
    ['Expanding intermediate powers correctly', '2 Marks'],
    ['Combining like powers into final Laurent polynomial', '1 Mark']
  ]
));

misc.push(createQCard(
  'c11m-ch7-q29', 'Question 7 (Misc)', 'Misc Exercise',
  'Find the expansion of $\\left(3x^2 - 2ax + 3a^2\\right)^3$ using binomial theorem.',
  `<div class="step">
    • Group the terms as $\\left[(3x^2 + 3a^2) - 2ax\\right]^3 = \\left[3(x^2 + a^2) - 2ax\\right]^3$.<br>
    • Expanding using the Binomial cubic expansion $(A - B)^3 = A^3 - 3A^2 B + 3A B^2 - B^3$ where $A = 3(x^2 + a^2)$ and $B = 2ax$:<br>
      - $A^3 = 27(x^2 + a^2)^3 = 27(x^6 + 3x^4 a^2 + 3x^2 a^4 + a^6) = 27x^6 + 81x^4 a^2 + 81x^2 a^4 + 27a^6$<br>
      - $-3A^2 B = -3 \\times 9(x^2 + a^2)^2 \\times 2ax = -54ax(x^4 + 2x^2 a^2 + a^4) = -54ax^5 - 108a^3 x^3 - 54a^5 x$<br>
      - $3AB^2 = 3 \\times 3(x^2 + a^2) \\times (4a^2 x^2) = 36a^2 x^2(x^2 + a^2) = 36a^2 x^4 + 36a^4 x^2$<br>
      - $-B^3 = -(2ax)^3 = -8a^3 x^3$<br>
    • Combining and arranging in descending powers of $x$:<br>
      - $x^6$ term: $27x^6$<br>
      - $x^5$ term: $-54ax^5$<br>
      - $x^4$ term: $(81a^2 + 36a^2)x^4 = 117a^2 x^4$<br>
      - $x^3$ term: $(-108a^3 - 8a^3)x^3 = -116a^3 x^3$<br>
      - $x^2$ term: $(81a^4 + 36a^4)x^2 = 117a^4 x^2$<br>
      - $x$ term: $-54a^5 x$<br>
      - Constant in $x$: $27a^6$<br>
    • Final expanded expression:<br>
    $$= \\mathbf{27x^6 - 54ax^5 + 117a^2 x^4 - 116a^3 x^3 + 117a^4 x^2 - 54a^5 x + 27a^6}$$
  </div>`,
  '4 Marks',
  [
    ['Grouping as $[3(x^2 + a^2) - 2ax]^3$ and applying cubic expansion', '1 Mark'],
    ['Expanding $A^3$, $3A^2 B$, $3AB^2$, $B^3$', '2 Marks'],
    ['Combining like powers into ordered polynomial in $x$', '1 Mark']
  ]
));

// Build complete HTML page for Chapter 7
const chapterHtml = `
<section class="chapter-content" id="c11m-ch7">
  <div class="ch-badge" style="display:inline-block; font-size:0.8rem; font-weight:800; background:#fce7f3; color:#be185d; padding:4px 12px; border-radius:20px; text-transform:uppercase; margin-bottom:8px;">NCERT Rationalised 2026–27 • Complete Verbatim Solutions</div>
  <h1 style="font-size:2rem; font-weight:800; color:#0f172a; margin-bottom:12px;">Class 11 Chapter 7: Binomial Theorem (द्विपद प्रमेय)</h1>
  <p style="font-size:1.05rem; color:#475569; line-height:1.6; margin-bottom:24px;">
    Exhaustive, 100% verbatim solutions for all <b>29 questions</b> from NCERT Class 11 Mathematics Chapter 7. Includes Exercise 7.1 (14 questions), Exercise 7.2 (8 questions on General &amp; Middle Terms), and Miscellaneous Exercise (7 questions) covering positive integral expansions, divisibility theorems, rational approximation, and multi-term trinomial powers with step-by-step CBSE marking schemes.
  </p>

  <!-- Formula & Theory Summary Cheatsheet -->
  <div class="theory-box" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:20px; margin-bottom:30px;">
    <h3 style="font-size:1.15rem; font-weight:700; color:#1e293b; margin-top:0; margin-bottom:12px;">📘 Binomial Theorem Axioms &amp; General Term Formulas</h3>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; font-size:0.95rem; color:#334155;">
      <div style="background:white; padding:12px 16px; border-radius:8px; border:1px solid #cbd5e1;">
        <strong>The Binomial Expansion:</strong><br>
        • For any positive integer $n$:<br>
        $$(a + b)^n = \\sum_{r=0}^n ^n C_r a^{n-r} b^r = ^n C_0 a^n + ^n C_1 a^{n-1} b + \\dots + ^n C_n b^n$$<br>
        • Total number of terms in expansion $= n + 1$.<br>
        • Sum of indices of $a$ and $b$ in each term $= (n - r) + r = n$.<br>
        • Coefficients are symmetric: $^n C_r = ^n C_{n-r}$.
      </div>
      <div style="background:white; padding:12px 16px; border-radius:8px; border:1px solid #cbd5e1;">
        <strong>General &amp; Middle Terms:</strong><br>
        • General Term: $T_{r+1} = ^n C_r a^{n-r} b^r$.<br>
        • If $n$ is <b>even</b>: Single middle term at position $\\left(\\dfrac{n}{2} + 1\\right)$.<br>
        • If $n$ is <b>odd</b>: Two middle terms at $\\left(\\dfrac{n+1}{2}\\right)$ and $\\left(\\dfrac{n+3}{2}\\right)$.<br>
        • Term from end: $r^{\\text{th}}$ term from end in $(a + b)^n = (n - r + 2)^{\\text{th}}$ term from beginning.
      </div>
    </div>
  </div>

  <!-- Vector SVG Diagram: Pascal's Triangle & Combinatorial Property -->
  <div class="vector-diagram-container" style="background:linear-gradient(135deg, #fdf2f8 0%, #fff1f2 100%); border:1px solid #fbcfe8; border-radius:12px; padding:20px; text-align:center; margin-bottom:30px;">
    <h4 style="margin:0 0 10px 0; color:#9d174d; font-size:1.1rem; font-weight:700;">📐 Pascal's Triangle &amp; The Addition Identity: ^n C_r + ^n C_{r-1} = ^{n+1}C_r</h4>
    <svg viewBox="0 0 520 220" style="max-width:100%; height:auto; display:inline-block;" xmlns="http://www.w3.org/2000/svg">
      <!-- Row 0: n=0 -->
      <text x="260" y="30" font-size="14" fill="#9d174d" font-weight="bold" text-anchor="middle">1</text>
      <!-- Row 1: n=1 -->
      <text x="235" y="60" font-size="14" fill="#9d174d" font-weight="bold" text-anchor="middle">1</text>
      <text x="285" y="60" font-size="14" fill="#9d174d" font-weight="bold" text-anchor="middle">1</text>
      <!-- Row 2: n=2 -->
      <text x="210" y="90" font-size="14" fill="#9d174d" font-weight="bold" text-anchor="middle">1</text>
      <text x="260" y="90" font-size="14" fill="#be185d" font-weight="bold" text-anchor="middle">2</text>
      <text x="310" y="90" font-size="14" fill="#9d174d" font-weight="bold" text-anchor="middle">1</text>
      <!-- Row 3: n=3 -->
      <text x="185" y="120" font-size="14" fill="#9d174d" font-weight="bold" text-anchor="middle">1</text>
      <text x="235" y="120" font-size="14" fill="#be185d" font-weight="bold" text-anchor="middle">3</text>
      <text x="285" y="120" font-size="14" fill="#be185d" font-weight="bold" text-anchor="middle">3</text>
      <text x="335" y="120" font-size="14" fill="#9d174d" font-weight="bold" text-anchor="middle">1</text>
      <!-- Row 4: n=4 -->
      <text x="160" y="155" font-size="14" fill="#9d174d" font-weight="bold" text-anchor="middle">1</text>
      <text x="210" y="155" font-size="14" fill="#db2777" font-weight="bold" text-anchor="middle">4</text>
      <text x="260" y="155" font-size="16" fill="#be123c" font-weight="bold" text-anchor="middle">6</text>
      <text x="310" y="155" font-size="14" fill="#db2777" font-weight="bold" text-anchor="middle">4</text>
      <text x="360" y="155" font-size="14" fill="#9d174d" font-weight="bold" text-anchor="middle">1</text>

      <!-- Addition arrows illustrating 3 + 3 = 6 -->
      <path d="M 240 128 L 255 145" stroke="#e11d48" stroke-width="2" marker-end="url(#arrow)"/>
      <path d="M 280 128 L 265 145" stroke="#e11d48" stroke-width="2"/>
      <circle cx="260" cy="151" r="14" fill="none" stroke="#be123c" stroke-width="2" stroke-dasharray="3,2"/>

      <!-- Annotations -->
      <text x="440" y="30" font-size="11" fill="#64748b">(a + b)&sup0;</text>
      <text x="440" y="60" font-size="11" fill="#64748b">(a + b)&sup1;</text>
      <text x="440" y="90" font-size="11" fill="#64748b">(a + b)&sup2;</text>
      <text x="440" y="120" font-size="11" fill="#64748b">(a + b)&sup3;</text>
      <text x="440" y="155" font-size="11" fill="#64748b">(a + b)&sup4;</text>

      <text x="260" y="195" font-size="12" fill="#9d174d" font-weight="bold" text-anchor="middle">Pascal's Rule: &sup3;C&sub1; (3) + &sup3;C&sub2; (3) = &sup4;C&sub2; (6)</text>
    </svg>
  </div>

  <div class="ex-div">NCERT Exercise 7.1: Expansions for Positive Integral Indices, Powers of 100 &amp; Divisibility Proofs</div>
${ex7_1.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Exercise 7.2: General Term T_{r+1}, Specific Coefficients &amp; Middle Term Calculations</div>
${ex7_2.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Miscellaneous Exercise on Chapter 7: Factor Divisibility, Approximate Values &amp; Trinomial Expansions</div>
${misc.join('\n')}

  <div class="chapter-nav-btns" style="margin-top:40px; display:flex; justify-content:space-between; align-items:center;">
    <button class="ch-nav-btn prev" onclick="showChapter(6)" style="padding:10px 24px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer;">← Previous: Chapter 6 (Permutations &amp; Combinations)</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})" style="padding:10px 20px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer;">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(8)" style="padding:10px 24px; border-radius:8px; border:none; background:#ff6b00; color:white; font-weight:700; cursor:pointer;">Next: Chapter 8 (Sequences &amp; Series) →</button>
  </div>
</section>
`;

// Write ch7.html
const ch7Path = path.join(outDir, 'ch7.html');
fs.writeFileSync(ch7Path, chapterHtml.trim(), 'utf8');
console.log(`Successfully generated: ${ch7Path} (${chapterHtml.length} bytes)`);

// Update chapters-data.js so chapters load instantly offline/online
const dataJsPath = path.join(outDir, 'chapters-data.js');
let existingData = '';
if (fs.existsSync(dataJsPath)) {
  existingData = fs.readFileSync(dataJsPath, 'utf8');
}

// Append or update window.CHAPTER_DATA[7]
if (!existingData.includes('window.CHAPTER_DATA[7] =')) {
  const ch7Entry = `\nwindow.CHAPTER_DATA[7] = ${JSON.stringify(chapterHtml.trim())};\n`;
  fs.appendFileSync(dataJsPath, ch7Entry, 'utf8');
  console.log(`Appended Chapter 7 to preloaded cache: ${dataJsPath}`);
} else {
  // Replace window.CHAPTER_DATA[7] block
  const regex = /window\.CHAPTER_DATA\[7\]\s*=\s*[\s\S]*?;\n/g;
  const updated = existingData.replace(regex, `window.CHAPTER_DATA[7] = ${JSON.stringify(chapterHtml.trim())};\n`);
  fs.writeFileSync(dataJsPath, updated, 'utf8');
  console.log(`Updated Chapter 7 in preloaded cache: ${dataJsPath}`);
}
