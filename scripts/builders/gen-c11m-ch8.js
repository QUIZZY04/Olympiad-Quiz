// scripts/builders/gen-c11m-ch8.js
// Complete, verbatim NCERT generator for Class 11 Mathematics Chapter 8: Sequences and Series (All 78 Questions)
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
const ex8_1 = [];
const ex8_2 = [];
const ex8_3 = [];
const misc = [];

// ============================================================================
// EXERCISE 8.1: Sequences and General Terms (Questions 1 to 14)
// ============================================================================

ex8_1.push(createQCard(
  'c11m-ch8-q1', 'Question 1', 'Exercise 8.1',
  'Write the first five terms of the sequence whose $n^{\\text{th}}$ term is $a_n = n(n + 2)$.',
  `<div class="step">
    • Given $n^{\\text{th}}$ term: $a_n = n(n + 2)$.<br>
    • Substitute $n = 1, 2, 3, 4, 5$:<br>
      - For $n = 1$: $a_1 = 1(1 + 2) = 1(3) = 3$<br>
      - For $n = 2$: $a_2 = 2(2 + 2) = 2(4) = 8$<br>
      - For $n = 3$: $a_3 = 3(3 + 2) = 3(5) = 15$<br>
      - For $n = 4$: $a_4 = 4(4 + 2) = 4(6) = 24$<br>
      - For $n = 5$: $a_5 = 5(5 + 2) = 5(7) = 35$<br>
    • <b>Conclusion:</b> The first five terms are $\\mathbf{3, 8, 15, 24, 35}$.
  </div>`,
  '2 Marks',
  [['Substituting $n = 1, 2, 3, 4, 5$', '1 Mark'], ['Computing values: 3, 8, 15, 24, 35', '1 Mark']]
));

ex8_1.push(createQCard(
  'c11m-ch8-q2', 'Question 2', 'Exercise 8.1',
  'Write the first five terms of the sequence whose $n^{\\text{th}}$ term is $a_n = \\dfrac{n}{n + 1}$.',
  `<div class="step">
    • Given $n^{\\text{th}}$ term: $a_n = \\frac{n}{n + 1}$.<br>
    • Substitute $n = 1, 2, 3, 4, 5$:<br>
      - $a_1 = \\frac{1}{1 + 1} = \\frac{1}{2}$<br>
      - $a_2 = \\frac{2}{2 + 1} = \\frac{2}{3}$<br>
      - $a_3 = \\frac{3}{3 + 1} = \\frac{3}{4}$<br>
      - $a_4 = \\frac{4}{4 + 1} = \\frac{4}{5}$<br>
      - $a_5 = \\frac{5}{5 + 1} = \\frac{5}{6}$<br>
    • <b>Conclusion:</b> The first five terms are $\\mathbf{\\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}, \\frac{4}{5}, \\frac{5}{6}}$.
  </div>`,
  '2 Marks',
  [['Substituting values of $n$', '1 Mark'], ['Stating first five rational terms', '1 Mark']]
));

ex8_1.push(createQCard(
  'c11m-ch8-q3', 'Question 3', 'Exercise 8.1',
  'Write the first five terms of the sequence whose $n^{\\text{th}}$ term is $a_n = 2^n$.',
  `<div class="step">
    • Given $n^{\\text{th}}$ term: $a_n = 2^n$.<br>
    • Substitute $n = 1, 2, 3, 4, 5$:<br>
      - $a_1 = 2^1 = 2$<br>
      - $a_2 = 2^2 = 4$<br>
      - $a_3 = 2^3 = 8$<br>
      - $a_4 = 2^4 = 16$<br>
      - $a_5 = 2^5 = 32$<br>
    • <b>Conclusion:</b> The first five terms are $\\mathbf{2, 4, 8, 16, 32}$.
  </div>`,
  '1 Mark',
  [['Evaluating powers of 2 for $n = 1, 2, 3, 4, 5$', '1 Mark']]
));

ex8_1.push(createQCard(
  'c11m-ch8-q4', 'Question 4', 'Exercise 8.1',
  'Write the first five terms of the sequence whose $n^{\\text{th}}$ term is $a_n = \\dfrac{2n - 3}{6}$.',
  `<div class="step">
    • Given $n^{\\text{th}}$ term: $a_n = \\frac{2n - 3}{6}$.<br>
    • Substitute $n = 1, 2, 3, 4, 5$:<br>
      - $a_1 = \\frac{2(1) - 3}{6} = -\\frac{1}{6}$<br>
      - $a_2 = \\frac{2(2) - 3}{6} = \\frac{1}{6}$<br>
      - $a_3 = \\frac{2(3) - 3}{6} = \\frac{3}{6} = \\frac{1}{2}$<br>
      - $a_4 = \\frac{2(4) - 3}{6} = \\frac{5}{6}$<br>
      - $a_5 = \\frac{2(5) - 3}{6} = \\frac{7}{6}$<br>
    • <b>Conclusion:</b> The first five terms are $\\mathbf{-\\frac{1}{6}, \\frac{1}{6}, \\frac{1}{2}, \\frac{5}{6}, \\frac{7}{6}}$.
  </div>`,
  '2 Marks',
  [['Substituting $n$ and evaluating numerators', '1 Mark'], ['Simplifying fractions to lowest terms', '1 Mark']]
));

ex8_1.push(createQCard(
  'c11m-ch8-q5', 'Question 5', 'Exercise 8.1',
  'Write the first five terms of the sequence whose $n^{\\text{th}}$ term is $a_n = (-1)^{n - 1} 5^{n + 1}$.',
  `<div class="step">
    • Given $n^{\\text{th}}$ term: $a_n = (-1)^{n - 1} 5^{n + 1}$.<br>
    • Substitute $n = 1, 2, 3, 4, 5$:<br>
      - $a_1 = (-1)^0 5^2 = 1 \\times 25 = 25$<br>
      - $a_2 = (-1)^1 5^3 = -1 \\times 125 = -125$<br>
      - $a_3 = (-1)^2 5^4 = 1 \\times 625 = 625$<br>
      - $a_4 = (-1)^3 5^5 = -1 \\times 3125 = -3125$<br>
      - $a_5 = (-1)^4 5^6 = 1 \\times 15625 = 15625$<br>
    • <b>Conclusion:</b> The first five terms are $\\mathbf{25, -125, 625, -3125, 15625}$.
  </div>`,
  '2 Marks',
  [['Determining signs from $(-1)^{n - 1}$', '1 Mark'], ['Evaluating powers of 5 correctly', '1 Mark']]
));

ex8_1.push(createQCard(
  'c11m-ch8-q6', 'Question 6', 'Exercise 8.1',
  'Write the first five terms of the sequence whose $n^{\\text{th}}$ term is $a_n = n \\dfrac{n^2 + 5}{4}$.',
  `<div class="step">
    • Given $n^{\\text{th}}$ term: $a_n = \\frac{n(n^2 + 5)}{4}$.<br>
    • Substitute $n = 1, 2, 3, 4, 5$:<br>
      - $a_1 = \\frac{1(1 + 5)}{4} = \\frac{6}{4} = \\frac{3}{2}$<br>
      - $a_2 = \\frac{2(4 + 5)}{4} = \\frac{18}{4} = \\frac{9}{2}$<br>
      - $a_3 = \\frac{3(9 + 5)}{4} = \\frac{42}{4} = \\frac{21}{2}$<br>
      - $a_4 = \\frac{4(16 + 5)}{4} = 21$<br>
      - $a_5 = \\frac{5(25 + 5)}{4} = \\frac{150}{4} = \\frac{75}{2}$<br>
    • <b>Conclusion:</b> The first five terms are $\\mathbf{\\frac{3}{2}, \\frac{9}{2}, \\frac{21}{2}, 21, \\frac{75}{2}}$.
  </div>`,
  '2 Marks',
  [['Substituting $n = 1, 2, 3, 4, 5$', '1 Mark'], ['Simplifying terms', '1 Mark']]
));

ex8_1.push(createQCard(
  'c11m-ch8-q7', 'Question 7', 'Exercise 8.1',
  'Find the indicated terms in the sequence whose $n^{\\text{th}}$ term is $a_n = 4n - 3$; $a_{17}, a_{24}$.',
  `<div class="step">
    • Given $a_n = 4n - 3$.<br>
    • For $n = 17$:<br>
      $$a_{17} = 4(17) - 3 = 68 - 3 = \\mathbf{65}$$<br>
    • For $n = 24$:<br>
      $$a_{24} = 4(24) - 3 = 96 - 3 = \\mathbf{93}$$
  </div>`,
  '2 Marks',
  [['Finding $a_{17} = 65$', '1 Mark'], ['Finding $a_{24} = 93$', '1 Mark']]
));

ex8_1.push(createQCard(
  'c11m-ch8-q8', 'Question 8', 'Exercise 8.1',
  'Find the indicated term in the sequence whose $n^{\\text{th}}$ term is $a_n = \\dfrac{n^2}{2^n}$; $a_7$.',
  `<div class="step">
    • Given $a_n = \\frac{n^2}{2^n}$.<br>
    • For $n = 7$:<br>
      $$a_7 = \\frac{7^2}{2^7} = \\frac{49}{128}$$<br>
    • <b>Conclusion:</b> $a_7 = \\mathbf{\\dfrac{49}{128}}$.
  </div>`,
  '1 Mark',
  [['Computing $7^2 / 2^7 = 49/128$', '1 Mark']]
));

ex8_1.push(createQCard(
  'c11m-ch8-q9', 'Question 9', 'Exercise 8.1',
  'Find the indicated term in the sequence whose $n^{\\text{th}}$ term is $a_n = (-1)^{n - 1} n^3$; $a_9$.',
  `<div class="step">
    • Given $a_n = (-1)^{n - 1} n^3$.<br>
    • For $n = 9$:<br>
      $$a_9 = (-1)^{9 - 1} (9^3) = (-1)^8 (729) = 1 \\times 729 = \\mathbf{729}$$
  </div>`,
  '1 Mark',
  [['Evaluating $(-1)^8 (9^3) = 729$', '1 Mark']]
));

ex8_1.push(createQCard(
  'c11m-ch8-q10', 'Question 10', 'Exercise 8.1',
  'Find the indicated term in the sequence whose $n^{\\text{th}}$ term is $a_n = \\dfrac{n(n - 2)}{n + 3}$; $a_{20}$.',
  `<div class="step">
    • Given $a_n = \\frac{n(n - 2)}{n + 3}$.<br>
    • For $n = 20$:<br>
      $$a_{20} = \\frac{20(20 - 2)}{20 + 3} = \\frac{20 \\times 18}{23} = \\mathbf{\\frac{360}{23}}$$
  </div>`,
  '1 Mark',
  [['Computing $20(18)/23 = 360/23$', '1 Mark']]
));

ex8_1.push(createQCard(
  'c11m-ch8-q11', 'Question 11', 'Exercise 8.1',
  'Write the first five terms of the sequence and obtain the corresponding series: $a_1 = 3, a_n = 3a_{n - 1} + 2$ for all $n > 1$.',
  `<div class="step">
    • Given recurrence relation: $a_1 = 3$ and $a_n = 3a_{n - 1} + 2$ for $n > 1$.<br>
      - $a_1 = 3$<br>
      - $a_2 = 3a_1 + 2 = 3(3) + 2 = 11$<br>
      - $a_3 = 3a_2 + 2 = 3(11) + 2 = 35$<br>
      - $a_4 = 3a_3 + 2 = 3(35) + 2 = 107$<br>
      - $a_5 = 3a_4 + 2 = 3(107) + 2 = 323$<br>
    • The first five terms are $\\mathbf{3, 11, 35, 107, 323}$.<br>
    • The corresponding series is $\\mathbf{3 + 11 + 35 + 107 + 323 + \\dots}$
  </div>`,
  '2 Marks',
  [['Finding terms $a_2, a_3, a_4, a_5$', '1 Mark'], ['Writing corresponding series sum representation', '1 Mark']]
));

ex8_1.push(createQCard(
  'c11m-ch8-q12', 'Question 12', 'Exercise 8.1',
  'Write the first five terms of the sequence and obtain the corresponding series: $a_1 = -1, a_n = \\dfrac{a_{n - 1}}{n}$ for $n \\ge 2$.',
  `<div class="step">
    • Given: $a_1 = -1$ and $a_n = \\frac{a_{n - 1}}{n}$ for $n \\ge 2$.<br>
      - $a_1 = -1$<br>
      - $a_2 = \\frac{a_1}{2} = -\\frac{1}{2}$<br>
      - $a_3 = \\frac{a_2}{3} = -\\frac{1}{6}$<br>
      - $a_4 = \\frac{a_3}{4} = -\\frac{1}{24}$<br>
      - $a_5 = \\frac{a_4}{5} = -\\frac{1}{120}$<br>
    • First five terms: $\\mathbf{-1, -\\frac{1}{2}, -\\frac{1}{6}, -\\frac{1}{24}, -\\frac{1}{120}}$.<br>
    • Corresponding series: $\\mathbf{-1 + \\left(-\\frac{1}{2}\\right) + \\left(-\\frac{1}{6}\\right) + \\left(-\\frac{1}{24}\\right) + \\left(-\\frac{1}{120}\\right) + \\dots}$
  </div>`,
  '2 Marks',
  [['Iterating recurrence to find 5 terms', '1 Mark'], ['Stating series expression', '1 Mark']]
));

ex8_1.push(createQCard(
  'c11m-ch8-q13', 'Question 13', 'Exercise 8.1',
  'Write the first five terms of the sequence and obtain the corresponding series: $a_1 = a_2 = 2, a_n = a_{n - 1} - 1$ for $n > 2$.',
  `<div class="step">
    • Given: $a_1 = 2, a_2 = 2$ and $a_n = a_{n - 1} - 1$ for $n > 2$.<br>
      - $a_1 = 2$<br>
      - $a_2 = 2$<br>
      - $a_3 = a_2 - 1 = 2 - 1 = 1$<br>
      - $a_4 = a_3 - 1 = 1 - 1 = 0$<br>
      - $a_5 = a_4 - 1 = 0 - 1 = -1$<br>
    • First five terms: $\\mathbf{2, 2, 1, 0, -1}$.<br>
    • Corresponding series: $\\mathbf{2 + 2 + 1 + 0 + (-1) + \\dots}$
  </div>`,
  '2 Marks',
  [['Finding terms: 2, 2, 1, 0, -1', '1 Mark'], ['Writing series sum', '1 Mark']]
));

ex8_1.push(createQCard(
  'c11m-ch8-q14', 'Question 14', 'Exercise 8.1',
  'The Fibonacci sequence is defined by $1 = a_1 = a_2$ and $a_n = a_{n - 1} + a_{n - 2}, n > 2$. Find $\\dfrac{a_{n + 1}}{a_n}$ for $n = 1, 2, 3, 4, 5$.',
  `<div class="step">
    • Generate Fibonacci numbers up to $a_6$:<br>
      - $a_1 = 1$<br>
      - $a_2 = 1$<br>
      - $a_3 = a_2 + a_1 = 1 + 1 = 2$<br>
      - $a_4 = a_3 + a_2 = 2 + 1 = 3$<br>
      - $a_5 = a_4 + a_3 = 3 + 2 = 5$<br>
      - $a_6 = a_5 + a_4 = 5 + 3 = 8$<br>
    • Now compute $\\frac{a_{n + 1}}{a_n}$ for $n = 1, 2, 3, 4, 5$:<br>
      - For $n = 1$: $\\frac{a_2}{a_1} = \\frac{1}{1} = \\mathbf{1}$<br>
      - For $n = 2$: $\\frac{a_3}{a_2} = \\frac{2}{1} = \\mathbf{2}$<br>
      - For $n = 3$: $\\frac{a_4}{a_3} = \\mathbf{\\frac{3}{2}}$<br>
      - For $n = 4$: $\\frac{a_5}{a_4} = \\mathbf{\\frac{5}{3}}$<br>
      - For $n = 5$: $\\frac{a_6}{a_5} = \\mathbf{\\frac{8}{5}}$
  </div>`,
  '3 Marks',
  [['Computing Fibonacci terms $a_1$ through $a_6$', '1 Mark'], ['Evaluating ratios for $n = 1, 2, 3$', '1 Mark'], ['Evaluating ratios for $n = 4, 5$', '1 Mark']]
));

// ============================================================================
// EXERCISE 8.2: Arithmetic Progressions (Questions 15 to 32)
// ============================================================================

ex8_2.push(createQCard(
  'c11m-ch8-q15', 'Question 1', 'Exercise 8.2',
  'Find the sum of odd integers from 1 to 2001.',
  `<div class="step">
    • The odd integers from $1$ to $2001$ form an A.P.:<br>
      $$1, 3, 5, \\dots, 2001$$<br>
    • Here $a = 1, d = 2$, and last term $l = a_n = 2001$.<br>
    • Finding number of terms $n$:<br>
      $$a_n = a + (n - 1)d \\implies 2001 = 1 + (n - 1)2$$<br>
      $$2000 = 2(n - 1) \\implies n - 1 = 1000 \\implies n = 1001$$<br>
    • Using sum formula $S_n = \\frac{n}{2}(a + l)$:<br>
      $$S_{1001} = \\frac{1001}{2}(1 + 2001) = \\frac{1001}{2}(2002) = 1001 \\times 1001 = \\mathbf{1002001}$$
  </div>`,
  '2 Marks',
  [['Finding $n = 1001$', '1 Mark'], ['Computing $S_n = 1001 \\times 1001 = 1002001$', '1 Mark']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q16', 'Question 2', 'Exercise 8.2',
  'Find the sum of all natural numbers lying between 100 and 1000, which are multiples of 5.',
  `<div class="step">
    • The natural numbers lying <b>between</b> $100$ and $1000$ that are multiples of $5$ are:<br>
      $$105, 110, 115, \\dots, 995$$<br>
    • This forms an A.P. with $a = 105, d = 5$, and $a_n = 995$.<br>
    • Finding $n$:<br>
      $$a + (n - 1)d = 995 \\implies 105 + (n - 1)5 = 995$$<br>
      $$5(n - 1) = 890 \\implies n - 1 = 178 \\implies n = 179$$<br>
    • Sum of these $179$ numbers:<br>
      $$S_{179} = \\frac{179}{2}(a + l) = \\frac{179}{2}(105 + 995) = \\frac{179}{2}(1100) = 179 \\times 550 = \\mathbf{98450}$$
  </div>`,
  '2 Marks',
  [['Identifying first term 105 and last term 995, and $n = 179$', '1 Mark'], ['Computing $S_{179} = 179 \\times 550 = 98450$', '1 Mark']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q17', 'Question 3', 'Exercise 8.2',
  'In an A.P., the first term is 2 and the sum of the first five terms is one-fourth of the next five terms. Show that 20th term is -112.',
  `<div class="step">
    • Given first term $a = 2$. Let the common difference be $d$.<br>
    • Sum of first 5 terms:<br>
      $$S_5 = \\frac{5}{2}[2(2) + (5 - 1)d] = \\frac{5}{2}[4 + 4d] = 10 + 10d$$<br>
    • Sum of next 5 terms $= S_{10} - S_5$:<br>
      $$S_{10} = \\frac{10}{2}[2(2) + 9d] = 5(4 + 9d) = 20 + 45d$$<br>
      $$\\text{Next 5 terms} = (20 + 45d) - (10 + 10d) = 10 + 35d$$<br>
    • Given $S_5 = \\frac{1}{4}(\\text{Next 5 terms})$:<br>
      $$10 + 10d = \\frac{1}{4}(10 + 35d)$$<br>
      $$40 + 40d = 10 + 35d \\implies 5d = -30 \\implies d = -6$$<br>
    • Now finding 20th term $a_{20}$:<br>
      $$a_{20} = a + 19d = 2 + 19(-6) = 2 - 114 = \\mathbf{-112}$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '3 Marks',
  [['Setting up $S_5 = \\frac{1}{4}(S_{10} - S_5)$', '1 Mark'], ['Solving for $d = -6$', '1 Mark'], ['Evaluating $a_{20} = 2 + 19(-6) = -112$', '1 Mark']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q18', 'Question 4', 'Exercise 8.2',
  'How many terms of the A.P. $-6, -\\dfrac{11}{2}, -5, \\dots$ are needed to give the sum -25?',
  `<div class="step">
    • Given A.P. with $a = -6$ and common difference $d = -\\frac{11}{2} - (-6) = \\frac{1}{2}$.<br>
    • Given sum $S_n = -25$:<br>
      $$S_n = \\frac{n}{2}[2a + (n - 1)d]$$<br>
      $$-25 = \\frac{n}{2}\\left[2(-6) + (n - 1)\\frac{1}{2}\\right] = \\frac{n}{2}\\left[-12 + \\frac{n - 1}{2}\\right] = \\frac{n}{2}\\left[\\frac{-25 + n}{2}\\right]$$<br>
      $$-100 = n(n - 25) \\implies n^2 - 25n + 100 = 0$$<br>
    • Factoring the quadratic equation:<br>
      $$(n - 5)(n - 20) = 0 \\implies n = 5 \\quad \\text{or} \\quad n = 20$$<br>
    • Both values $n = 5$ and $n = 20$ are positive integers (terms from 6th to 20th sum to 0).<br>
    • <b>Conclusion:</b> $\\mathbf{5\\text{ or } 20\\text{ terms}}$ are needed.
  </div>`,
  '3 Marks',
  [['Setting up equation $\\frac{n}{2}[-12 + (n - 1)/2] = -25$', '1 Mark'], ['Forming quadratic equation $n^2 - 25n + 100 = 0$', '1 Mark'], ['Solving to obtain $n = 5$ or $n = 20$', '1 Mark']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q19', 'Question 5', 'Exercise 8.2',
  'In an A.P., if $p^{\\text{th}}$ term is $\\dfrac{1}{q}$ and $q^{\\text{th}}$ term is $\\dfrac{1}{p}$, prove that the sum of first $pq$ terms is $\\dfrac{1}{2}(pq + 1)$, where $p \\ne q$.',
  `<div class="step">
    • Let first term be $a$ and common difference be $d$.<br>
    • Given:<br>
      $$a_p = a + (p - 1)d = \\frac{1}{q} \\quad \\dots (1)$$<br>
      $$a_q = a + (q - 1)d = \\frac{1}{p} \\quad \\dots (2)$$<br>
    • Subtracting (2) from (1):<br>
      $$(p - q)d = \\frac{1}{q} - \\frac{1}{p} = \\frac{p - q}{pq}$$<br>
      Since $p \\ne q$, we can divide by $(p - q)$ to get $d = \\frac{1}{pq}$.<br>
    • Substituting $d = \\frac{1}{pq}$ into (1):<br>
      $$a + (p - 1)\\frac{1}{pq} = \\frac{1}{q} \\implies a + \\frac{1}{q} - \\frac{1}{pq} = \\frac{1}{q} \\implies a = \\frac{1}{pq}$$<br>
    • Now, the sum of first $pq$ terms is:<br>
      $$S_{pq} = \\frac{pq}{2}[2a + (pq - 1)d] = \\frac{pq}{2}\\left[\\frac{2}{pq} + \\frac{pq - 1}{pq}\\right]$$<br>
      $$= \\frac{pq}{2}\\left[\\frac{pq + 1}{pq}\\right] = \\mathbf{\\frac{1}{2}(pq + 1)}$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '4 Marks',
  [['Setting up equations for $a_p$ and $a_q$', '1 Mark'], ['Solving for $d = \\frac{1}{pq}$ and $a = \\frac{1}{pq}$', '1½ Marks'], ['Evaluating $S_{pq}$ and simplifying to $\\frac{1}{2}(pq + 1)$', '1½ Marks']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q20', 'Question 6', 'Exercise 8.2',
  'If the sum of a certain number of terms of the A.P. $25, 22, 19, \\dots$ is 116. Find the last term.',
  `<div class="step">
    • Given A.P.: $a = 25, d = 22 - 25 = -3$.<br>
    • Given sum $S_n = 116$:<br>
      $$\\frac{n}{2}[2(25) + (n - 1)(-3)] = 116$$<br>
      $$\\frac{n}{2}[50 - 3n + 3] = 116 \\implies n(53 - 3n) = 232$$<br>
      $$3n^2 - 53n + 232 = 0$$<br>
    • Factoring quadratic equation:<br>
      $$3n^2 - 24n - 29n + 232 = 0 \\implies 3n(n - 8) - 29(n - 8) = 0$$<br>
      $$(n - 8)(3n - 29) = 0$$<br>
    • Since $n$ must be a natural number, $n = 8$ (rejecting $n = 29/3$).<br>
    • Last term $l = a_8$:<br>
      $$a_8 = a + 7d = 25 + 7(-3) = 25 - 21 = \\mathbf{4}$$
  </div>`,
  '3 Marks',
  [['Setting up quadratic equation $3n^2 - 53n + 232 = 0$', '1 Mark'], ['Solving to get $n = 8$', '1 Mark'], ['Finding last term $a_8 = 4$', '1 Mark']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q21', 'Question 7', 'Exercise 8.2',
  'Find the sum to $n$ terms of the A.P., whose $k^{\\text{th}}$ term is $5k + 1$.',
  `<div class="step">
    • Given $a_k = 5k + 1$.<br>
    • First term $a = a_1 = 5(1) + 1 = 6$.<br>
    • Last term $l = a_n = 5n + 1$.<br>
    • Using sum formula $S_n = \\frac{n}{2}(a + l)$:<br>
      $$S_n = \\frac{n}{2}[6 + (5n + 1)] = \\frac{n}{2}(5n + 7) = \\mathbf{\\frac{n(5n + 7)}{2}}$$
  </div>`,
  '2 Marks',
  [['Finding $a = 6$ and $l = 5n + 1$', '1 Mark'], ['Evaluating $S_n = \\frac{n(5n + 7)}{2}$', '1 Mark']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q22', 'Question 8', 'Exercise 8.2',
  'If the sum of $n$ terms of an A.P. is $(pn + qn^2)$, where $p$ and $q$ are constants, find the common difference.',
  `<div class="step">
    • Given $S_n = pn + qn^2$.<br>
    • First term $a_1 = S_1 = p(1) + q(1^2) = p + q$.<br>
    • Sum of first two terms $S_2 = p(2) + q(2^2) = 2p + 4q$.<br>
    • Second term $a_2 = S_2 - S_1 = (2p + 4q) - (p + q) = p + 3q$.<br>
    • Common difference $d = a_2 - a_1 = (p + 3q) - (p + q) = \\mathbf{2q}$.
  </div>`,
  '2 Marks',
  [['Finding $S_1 = p + q$ and $S_2 = 2p + 4q$', '1 Mark'], ['Computing $d = a_2 - a_1 = 2q$', '1 Mark']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q23', 'Question 9', 'Exercise 8.2',
  'The sums of $n$ terms of two arithmetic progressions are in the ratio $(5n + 4) : (9n + 6)$. Find the ratio of their 18th terms.',
  `<div class="step">
    • Let first terms be $a_1, a_2$ and common differences be $d_1, d_2$.<br>
    • Given:<br>
      $$\\frac{S_n}{S'_n} = \\frac{\\frac{n}{2}[2a_1 + (n - 1)d_1]}{\\frac{n}{2}[2a_2 + (n - 1)d_2]} = \\frac{2a_1 + (n - 1)d_1}{2a_2 + (n - 1)d_2} = \\frac{5n + 4}{9n + 6}$$<br>
    • We need the ratio of their 18th terms: $\\frac{a_1 + 17d_1}{a_2 + 17d_2} = \\frac{2a_1 + 34d_1}{2a_2 + 34d_2}$.<br>
    • Comparing $n - 1 = 34 \\implies n = 35$.<br>
    • Substituting $n = 35$ into the given ratio:<br>
      $$\\frac{T_{18}}{T'_{18}} = \\frac{5(35) + 4}{9(35) + 6} = \\frac{175 + 4}{315 + 6} = \\frac{179}{321}$$<br>
    • <b>Conclusion:</b> The ratio of their 18th terms is $\\mathbf{\\dfrac{179}{321}}$ (or $179 : 321$).
  </div>`,
  '3 Marks',
  [['Expressing ratio of sums $\\frac{2a_1 + (n - 1)d_1}{2a_2 + (n - 1)d_2}$', '1 Mark'], ['Substituting $n = 2(18) - 1 = 35$', '1 Mark'], ['Evaluating ratio as $179 / 321$', '1 Mark']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q24', 'Question 10', 'Exercise 8.2',
  'If the sum of first $p$ terms of an A.P. is equal to the sum of the first $q$ terms, then find the sum of the first $(p + q)$ terms.',
  `<div class="step">
    • Given $S_p = S_q$ for $p \\ne q$:<br>
      $$\\frac{p}{2}[2a + (p - 1)d] = \\frac{q}{2}[2a + (q - 1)d]$$<br>
      $$2ap + p(p - 1)d = 2aq + q(q - 1)d$$<br>
      $$2a(p - q) + [p^2 - p - (q^2 - q)]d = 0$$<br>
      $$2a(p - q) + [(p^2 - q^2) - (p - q)]d = 0$$<br>
      $$(p - q)[2a + (p + q - 1)d] = 0$$<br>
    • Since $p \\ne q$, we have $2a + (p + q - 1)d = 0$.<br>
    • Now, sum of first $(p + q)$ terms is:<br>
      $$S_{p + q} = \\frac{p + q}{2}[2a + (p + q - 1)d] = \\frac{p + q}{2}(0) = \\mathbf{0}$$
  </div>`,
  '3 Marks',
  [['Expanding $S_p = S_q$ and factoring $(p - q)$', '1½ Marks'], ['Deducing $2a + (p + q - 1)d = 0$', '1 Mark'], ['Concluding $S_{p + q} = 0$', '½ Mark']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q25', 'Question 11', 'Exercise 8.2',
  'Sum of the first $p, q$ and $r$ terms of an A.P. are $a, b$ and $c$, respectively. Prove that $\\dfrac{a}{p}(q - r) + \\dfrac{b}{q}(r - p) + \\dfrac{c}{r}(p - q) = 0$.',
  `<div class="step">
    • Let first term be $A$ and common difference be $D$.<br>
    • Given:<br>
      $$S_p = \\frac{p}{2}[2A + (p - 1)D] = a \\implies \\frac{a}{p} = A + \\frac{1}{2}(p - 1)D$$<br>
      $$S_q = \\frac{q}{2}[2A + (q - 1)D] = b \\implies \\frac{b}{q} = A + \\frac{1}{2}(q - 1)D$$<br>
      $$S_r = \\frac{r}{2}[2A + (r - 1)D] = c \\implies \\frac{c}{r} = A + \\frac{1}{2}(r - 1)D$$<br>
    • Multiply each by $(q - r), (r - p), (p - q)$ respectively and add:<br>
      $$\\text{LHS} = A[(q - r) + (r - p) + (p - q)] + \\frac{D}{2}[(p - 1)(q - r) + (q - 1)(r - p) + (r - 1)(p - q)]$$<br>
      - Notice coefficient of $A = 0$.<br>
      - Sum of bracketed terms with $D/2$:<br>
        $$(pq - pr - q + r) + (qr - qp - r + p) + (rp - rq - p + q) = 0$$<br>
      - Thus, $\\text{LHS} = A(0) + \\frac{D}{2}(0) = \\mathbf{0} = \\text{RHS}$.<br>
    • <b>Hence proved.</b>
  </div>`,
  '4 Marks',
  [['Expressing $a/p, b/q, c/r$ in terms of $A$ and $D$', '1½ Marks'], ['Multiplying by cyclic differences and summing', '1½ Marks'], ['Showing complete algebraic cancellation to 0', '1 Mark']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q26', 'Question 12', 'Exercise 8.2',
  'The ratio of the sums of $m$ and $n$ terms of an A.P. is $m^2 : n^2$. Show that the ratio of $m^{\\text{th}}$ and $n^{\\text{th}}$ term is $(2m - 1) : (2n - 1)$.',
  `<div class="step">
    • Given:<br>
      $$\\frac{S_m}{S_n} = \\frac{\\frac{m}{2}[2a + (m - 1)d]}{\\frac{n}{2}[2a + (n - 1)d]} = \\frac{m^2}{n^2} \\implies \\frac{2a + (m - 1)d}{2a + (n - 1)d} = \\frac{m}{n}$$<br>
      $$n[2a + (m - 1)d] = m[2a + (n - 1)d]$$<br>
      $$2an + mnd - nd = 2am + mnd - md$$<br>
      $$2a(n - m) = d(n - m) \\implies d = 2a$$<br>
    • Now, ratio of $m^{\\text{th}}$ term to $n^{\\text{th}}$ term:<br>
      $$\\frac{T_m}{T_n} = \\frac{a + (m - 1)d}{a + (n - 1)d}$$<br>
    • Substitute $d = 2a$:<br>
      $$\\frac{T_m}{T_n} = \\frac{a + (m - 1)(2a)}{a + (n - 1)(2a)} = \\frac{a[1 + 2m - 2]}{a[1 + 2n - 2]} = \\mathbf{\\frac{2m - 1}{2n - 1}}$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '4 Marks',
  [['Cross multiplying $S_m/S_n = m^2/n^2$ to find $d = 2a$', '2 Marks'], ['Substituting $d = 2a$ into $T_m/T_n$', '1 Mark'], ['Simplifying to $(2m - 1) / (2n - 1)$', '1 Mark']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q27', 'Question 13', 'Exercise 8.2',
  'If the sum of $n$ terms of an A.P. is $3n^2 + 5n$ and its $m^{\\text{th}}$ term is 164, find the value of $m$.',
  `<div class="step">
    • Given $S_n = 3n^2 + 5n$.<br>
    • $a_1 = S_1 = 3(1)^2 + 5(1) = 8$.<br>
    • $S_2 = 3(4) + 5(2) = 12 + 10 = 22 \\implies a_2 = S_2 - S_1 = 22 - 8 = 14$.<br>
    • Common difference $d = a_2 - a_1 = 14 - 8 = 6$.<br>
    • Given $m^{\\text{th}}$ term is $164$:<br>
      $$a_m = a + (m - 1)d = 164$$<br>
      $$8 + (m - 1)6 = 164 \\implies 6(m - 1) = 156 \\implies m - 1 = 26 \\implies \\mathbf{m = 27}$$
  </div>`,
  '2 Marks',
  [['Finding $a = 8, d = 6$', '1 Mark'], ['Solving $8 + 6(m - 1) = 164 \\implies m = 27$', '1 Mark']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q28', 'Question 14', 'Exercise 8.2',
  'Insert five numbers between 8 and 26 such that the resulting sequence is an A.P.',
  `<div class="step">
    • Let the 5 inserted numbers be $A_1, A_2, A_3, A_4, A_5$.<br>
    • The sequence is $8, A_1, A_2, A_3, A_4, A_5, 26$ (total 7 terms).<br>
    • First term $a = 8$, 7th term $a_7 = 26$:<br>
      $$a_7 = a + 6d = 26 \\implies 8 + 6d = 26 \\implies 6d = 18 \\implies d = 3$$<br>
    • Calculating the five numbers:<br>
      - $A_1 = 8 + 3 = 11$<br>
      - $A_2 = 11 + 3 = 14$<br>
      - $A_3 = 14 + 3 = 17$<br>
      - $A_4 = 17 + 3 = 20$<br>
      - $A_5 = 20 + 3 = 23$<br>
    • <b>Conclusion:</b> The five numbers are $\\mathbf{11, 14, 17, 20, 23}$.
  </div>`,
  '3 Marks',
  [['Finding common difference $d = 3$', '1 Mark'], ['Evaluating five inserted terms', '2 Marks']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q29', 'Question 15', 'Exercise 8.2',
  'If $\\dfrac{a^n + b^n}{a^{n - 1} + b^{n - 1}}$ is the A.M. between $a$ and $b$, then find the value of $n$.',
  `<div class="step">
    • The Arithmetic Mean (A.M.) between $a$ and $b$ is $\\frac{a + b}{2}$.<br>
    • Given:<br>
      $$\\frac{a^n + b^n}{a^{n - 1} + b^{n - 1}} = \\frac{a + b}{2}$$<br>
      $$2(a^n + b^n) = (a + b)(a^{n - 1} + b^{n - 1})$$<br>
      $$2a^n + 2b^n = a^n + ab^{n - 1} + ba^{n - 1} + b^n$$<br>
      $$a^n + b^n = ab^{n - 1} + ba^{n - 1}$$<br>
      $$a^n - ba^{n - 1} = ab^{n - 1} - b^n$$<br>
      $$a^{n - 1}(a - b) = b^{n - 1}(a - b)$$<br>
    • Since $a \\ne b$, divide by $(a - b)$:<br>
      $$a^{n - 1} = b^{n - 1} \\implies \\left(\\frac{a}{b}\\right)^{n - 1} = 1 = \\left(\\frac{a}{b}\\right)^0$$<br>
      $$n - 1 = 0 \\implies \\mathbf{n = 1}$$
  </div>`,
  '3 Marks',
  [['Equating expression to $(a + b)/2$ and expanding', '1 Mark'], ['Factoring into $a^{n - 1}(a - b) = b^{n - 1}(a - b)$', '1 Mark'], ['Deducing $(a/b)^{n - 1} = 1 \\implies n = 1$', '1 Mark']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q30', 'Question 16', 'Exercise 8.2',
  'Between 1 and 31, $m$ numbers have been inserted in such a way that the resulting sequence is an A.P. and the ratio of 7th and $(m - 1)^{\\text{th}}$ numbers is $5 : 9$. Find the value of $m$.',
  `<div class="step">
    • Let the $m$ inserted numbers be $A_1, A_2, \\dots, A_m$ between $1$ and $31$.<br>
    • Total terms $= m + 2$. First term $a = 1$, last term $a_{m + 2} = 31$.<br>
      $$a + (m + 2 - 1)d = 31 \\implies 1 + (m + 1)d = 31 \\implies d = \\frac{30}{m + 1}$$<br>
    • The 7th inserted number is $A_7 = a + 7d = 1 + 7\\left(\\frac{30}{m + 1}\\right) = \\frac{m + 1 + 210}{m + 1} = \\frac{m + 211}{m + 1}$.<br>
    • The $(m - 1)^{\\text{th}}$ inserted number is $A_{m - 1} = a + (m - 1)d = 1 + (m - 1)\\left(\\frac{30}{m + 1}\\right) = \\frac{m + 1 + 30m - 30}{m + 1} = \\frac{31m - 29}{m + 1}$.<br>
    • Given $\\frac{A_7}{A_{m - 1}} = \\frac{5}{9}$:<br>
      $$\\frac{m + 211}{31m - 29} = \\frac{5}{9}$$<br>
      $$9(m + 211) = 5(31m - 29)$$<br>
      $$9m + 1899 = 155m - 145$$<br>
      $$155m - 9m = 1899 + 145 \\implies 146m = 2044 \\implies \\mathbf{m = 14}$$
  </div>`,
  '4 Marks',
  [['Finding $d = 30/(m + 1)$', '1 Mark'], ['Expressing $A_7$ and $A_{m - 1}$ in terms of $m$', '1½ Marks'], ['Solving $9(m + 211) = 5(31m - 29) \\implies m = 14$', '1½ Marks']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q31', 'Question 17', 'Exercise 8.2',
  'A man starts repaying a loan as first instalment of Rs. 100. If he increases the instalment by Rs 5 every month, what amount he will pay in the 30th instalment?',
  `<div class="step">
    • The instalments form an A.P.:<br>
      $$100, 105, 110, \\dots$$<br>
    • First instalment $a = 100$, monthly increase $d = 5$.<br>
    • Amount paid in 30th instalment is $a_{30}$:<br>
      $$a_{30} = a + 29d = 100 + 29(5) = 100 + 145 = \\mathbf{Rs.\\; 245}$$
  </div>`,
  '2 Marks',
  [['Identifying A.P. with $a = 100, d = 5$', '1 Mark'], ['Evaluating $a_{30} = 100 + 145 = 245$', '1 Mark']]
));

ex8_2.push(createQCard(
  'c11m-ch8-q32', 'Question 18', 'Exercise 8.2',
  'The difference between any two consecutive interior angles of a polygon is $5^\\circ$. If the smallest angle is $120^\\circ$, find the number of the sides of the polygon.',
  `<div class="step">
    • Let the polygon have $n$ sides. The angles form an A.P. with $a = 120^\\circ$ and $d = 5^\\circ$.<br>
    • Sum of all interior angles of an $n$-sided polygon is $(n - 2) \\times 180^\\circ$.<br>
    • Using A.P. sum formula:<br>
      $$S_n = \\frac{n}{2}[2a + (n - 1)d] = \\frac{n}{2}[240 + 5(n - 1)] = \\frac{n}{2}(5n + 235)$$<br>
    • Equating the two expressions:<br>
      $$\\frac{n(5n + 235)}{2} = (n - 2)180$$<br>
      $$5n^2 + 235n = 360n - 720$$<br>
      $$5n^2 - 125n + 720 = 0 \\implies n^2 - 25n + 144 = 0$$<br>
    • Factoring:<br>
      $$(n - 9)(n - 16) = 0 \\implies n = 9 \\quad \\text{or} \\quad n = 16$$<br>
    • For $n = 16$, the largest angle would be $a_{16} = 120 + 15(5) = 195^\\circ > 180^\\circ$, which is impossible for a convex polygon.<br>
    • <b>Conclusion:</b> The number of sides of the polygon is $\\mathbf{9}$.
  </div>`,
  '3 Marks',
  [['Setting up equation $\\frac{n}{2}(5n + 235) = (n - 2)180$', '1 Mark'], ['Solving quadratic equation $n^2 - 25n + 144 = 0$ for $n = 9, 16$', '1 Mark'], ['Rejecting $n = 16$ (angle > 180°) and stating $n = 9$', '1 Mark']]
));

// ============================================================================
// EXERCISE 8.3: Geometric Progressions (Questions 33 to 64)
// ============================================================================

ex8_3.push(createQCard(
  'c11m-ch8-q33', 'Question 1', 'Exercise 8.3',
  'Find the 20th and $n^{\\text{th}}$ terms of the G.P. $\\dfrac{5}{2}, \\dfrac{5}{4}, \\dfrac{5}{8}, \\dots$',
  `<div class="step">
    • Given G.P.: $a = \\frac{5}{2}$, common ratio $r = \\frac{5/4}{5/2} = \\frac{1}{2}$.<br>
    • The $n^{\\text{th}}$ term of a G.P. is $a_n = a r^{n - 1}$:<br>
      $$a_n = \\frac{5}{2}\\left(\\frac{1}{2}\\right)^{n - 1} = \\mathbf{\\frac{5}{2^n}}$$<br>
    • For the 20th term ($n = 20$):<br>
      $$a_{20} = \\frac{5}{2^{20}} = \\mathbf{\\frac{5}{1048576}}$$
  </div>`,
  '2 Marks',
  [['Finding $a_n = 5 / 2^n$', '1 Mark'], ['Finding $a_{20} = 5 / 2^{20}$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q34', 'Question 2', 'Exercise 8.3',
  'Find the 12th term of a G.P. whose 8th term is 192 and the common ratio is 2.',
  `<div class="step">
    • Given $r = 2$ and $a_8 = 192$.<br>
    • $a_8 = a r^7 = 192 \\implies a(2^7) = 192 \\implies 128a = 192 \\implies a = \\frac{192}{128} = \\frac{3}{2}$.<br>
    • Now, the 12th term is:<br>
      $$a_{12} = a r^{11} = \\frac{3}{2} (2^{11}) = 3 \\times 2^{10} = 3 \\times 1024 = \\mathbf{3072}$$
  </div>`,
  '2 Marks',
  [['Finding $a = 3/2$', '1 Mark'], ['Evaluating $a_{12} = 3 \\times 1024 = 3072$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q35', 'Question 3', 'Exercise 8.3',
  'The 5th, 8th and 11th terms of a G.P. are $p, q$ and $s$, respectively. Show that $q^2 = ps$.',
  `<div class="step">
    • Let first term be $a$ and common ratio be $r$.<br>
    • Given:<br>
      $$a_5 = a r^4 = p$$<br>
      $$a_8 = a r^7 = q$$<br>
      $$a_{11} = a r^{10} = s$$<br>
    • Now, evaluate $q^2$:<br>
      $$q^2 = (a r^7)^2 = a^2 r^{14}$$<br>
    • Evaluate product $ps$:<br>
      $$ps = (a r^4)(a r^{10}) = a^2 r^{14}$$<br>
    • Since $q^2 = a^2 r^{14}$ and $ps = a^2 r^{14}$, we have $\\mathbf{q^2 = ps}$. (Hence proved).
  </div>`,
  '2 Marks',
  [['Expressing $p, q, s$ in terms of $a$ and $r$', '1 Mark'], ['Showing $q^2 = a^2 r^{14} = ps$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q36', 'Question 4', 'Exercise 8.3',
  'The 4th term of a G.P. is square of its second term, and the first term is -3. Determine its 7th term.',
  `<div class="step">
    • Given $a = -3$. Let common ratio be $r$.<br>
    • 4th term $a_4 = a r^3$, 2nd term $a_2 = a r$.<br>
    • Given $a_4 = (a_2)^2$:<br>
      $$a r^3 = (a r)^2 = a^2 r^2$$<br>
      $$r = a \\implies r = -3$$<br>
    • Now, 7th term $a_7$ is:<br>
      $$a_7 = a r^6 = (-3)(-3)^6 = (-3)^7 = \\mathbf{-2187}$$
  </div>`,
  '2 Marks',
  [['Finding $r = a = -3$', '1 Mark'], ['Evaluating $a_7 = (-3)^7 = -2187$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q37', 'Question 5', 'Exercise 8.3',
  'Which term of the following sequences:<br>(a) $2, 2\\sqrt{2}, 4, \\dots$ is 128?<br>(b) $\\sqrt{3}, 3, 3\\sqrt{3}, \\dots$ is 729?<br>(c) $\\dfrac{1}{3}, \\dfrac{1}{9}, \\dfrac{1}{27}, \\dots$ is $\\dfrac{1}{19683}$?',
  `<div class="step">
    • <b>(a) $2, 2\\sqrt{2}, 4, \\dots$ is $128$:</b><br>
      $a = 2, r = \\sqrt{2}$. $a_n = 2(\\sqrt{2})^{n - 1} = 128 \\implies 2^{1 + \\frac{n - 1}{2}} = 2^7 \\implies 1 + \\frac{n - 1}{2} = 7 \\implies n = \\mathbf{13}^{\\text{th}}\\text{ term}$.<br><br>
    • <b>(b) $\\sqrt{3}, 3, 3\\sqrt{3}, \\dots$ is $729$:</b><br>
      $a = \\sqrt{3}, r = \\sqrt{3}$. $a_n = (\\sqrt{3})^n = 729 = 3^6 = (\\sqrt{3})^{12} \\implies n = \\mathbf{12}^{\\text{th}}\\text{ term}$.<br><br>
    • <b>(c) $\\frac{1}{3}, \\frac{1}{9}, \\dots$ is $\\frac{1}{19683}$:</b><br>
      $a = \\frac{1}{3}, r = \\frac{1}{3}$. $a_n = \\left(\\frac{1}{3}\\right)^n = \\frac{1}{19683} = \\left(\\frac{1}{3}\\right)^9 \\implies n = \\mathbf{9}^{\\text{th}}\\text{ term}$.
  </div>`,
  '3 Marks',
  [['Part (a): $n = 13$', '1 Mark'], ['Part (b): $n = 12$', '1 Mark'], ['Part (c): $n = 9$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q38', 'Question 6', 'Exercise 8.3',
  'For what values of $x$, the numbers $-\\dfrac{2}{7}, x, -\\dfrac{7}{2}$ are in G.P.?',
  `<div class="step">
    • For three numbers $a, b, c$ to be in G.P., the common ratio must be equal:<br>
      $$\\frac{b}{a} = \\frac{c}{b} \\implies b^2 = ac$$<br>
    • Here $a = -\\frac{2}{7}, b = x, c = -\\frac{7}{2}$:<br>
      $$x^2 = \\left(-\\frac{2}{7}\\right)\\left(-\\frac{7}{2}\\right) = 1$$<br>
      $$x = \\mathbf{\\pm 1}$$
  </div>`,
  '1 Mark',
  [['Solving $x^2 = 1 \\implies x = \\pm 1$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q39', 'Question 7', 'Exercise 8.3',
  'Find the sum to 20 terms in the geometric progression: $0.15, 0.015, 0.0015, \\dots$',
  `<div class="step">
    • Given G.P.: $a = 0.15$, $r = \\frac{0.015}{0.15} = 0.1 = \\frac{1}{10} < 1$, $n = 20$.<br>
    • Sum formula for $r < 1$:<br>
      $$S_n = \\frac{a(1 - r^n)}{1 - r}$$<br>
      $$S_{20} = \\frac{0.15[1 - (0.1)^{20}]}{1 - 0.1} = \\frac{0.15}{0.9}[1 - (0.1)^{20}] = \\frac{1}{6}[1 - (0.1)^{20}]$$<br>
    • <b>Conclusion:</b> $S_{20} = \\mathbf{\\frac{1}{6}[1 - (0.1)^{20}]}$.
  </div>`,
  '2 Marks',
  [['Identifying $a = 0.15, r = 0.1$', '1 Mark'], ['Evaluating $S_{20} = \\frac{1}{6}[1 - (0.1)^{20}]$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q40', 'Question 8', 'Exercise 8.3',
  'Find the sum to $n$ terms in the geometric progression: $\\sqrt{7}, \\sqrt{21}, 3\\sqrt{7}, \\dots$',
  `<div class="step">
    • Given G.P.: $a = \\sqrt{7}$, $r = \\frac{\\sqrt{21}}{\\sqrt{7}} = \\sqrt{3} > 1$.<br>
    • Sum to $n$ terms:<br>
      $$S_n = \\frac{a(r^n - 1)}{r - 1} = \\frac{\\sqrt{7}[(\\sqrt{3})^n - 1]}{\\sqrt{3} - 1}$$<br>
    • Rationalising denominator by multiplying by $\\sqrt{3} + 1$:<br>
      $$S_n = \\frac{\\sqrt{7}(\\sqrt{3} + 1)[(\\sqrt{3})^n - 1]}{3 - 1} = \\mathbf{\\frac{\\sqrt{7}(\\sqrt{3} + 1)}{2}[(\\sqrt{3})^n - 1]}$$
  </div>`,
  '2 Marks',
  [['Applying G.P. sum formula with $r = \\sqrt{3}$', '1 Mark'], ['Rationalising denominator to obtain final form', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q41', 'Question 9', 'Exercise 8.3',
  'Find the sum to $n$ terms in the geometric progression: $1, -a, a^2, -a^3, \\dots$ (if $a \\ne -1$).',
  `<div class="step">
    • Given G.P.: First term $= 1$, common ratio $r = \\frac{-a}{1} = -a$.<br>
    • Using sum formula:<br>
      $$S_n = \\frac{1[1 - (-a)^n]}{1 - (-a)} = \\mathbf{\\frac{1 - (-a)^n}{1 + a}}$$
  </div>`,
  '1 Mark',
  [['Evaluating $S_n = \\frac{1 - (-a)^n}{1 + a}$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q42', 'Question 10', 'Exercise 8.3',
  'Find the sum to $n$ terms in the geometric progression: $x^3, x^5, x^7, \\dots$ (if $x \\ne \\pm 1$).',
  `<div class="step">
    • First term $a = x^3$, common ratio $r = \\frac{x^5}{x^3} = x^2$.<br>
    • Sum to $n$ terms:<br>
      $$S_n = \\frac{a(1 - r^n)}{1 - r} = \\frac{x^3[1 - (x^2)^n]}{1 - x^2} = \\mathbf{\\frac{x^3(1 - x^{2n})}{1 - x^2}}$$
  </div>`,
  '1 Mark',
  [['Applying $S_n = \\frac{x^3(1 - x^{2n})}{1 - x^2}$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q43', 'Question 11', 'Exercise 8.3',
  'Evaluate $\\sum_{k=1}^{11} (2 + 3^k)$.',
  `<div class="step">
    • Splitting the summation:<br>
      $$\\sum_{k=1}^{11} (2 + 3^k) = \\sum_{k=1}^{11} 2 + \\sum_{k=1}^{11} 3^k$$<br>
    • First sum: $\\sum_{k=1}^{11} 2 = 11 \\times 2 = 22$.<br>
    • Second sum is a G.P. with $a = 3, r = 3, n = 11$:<br>
      $$\\sum_{k=1}^{11} 3^k = \\frac{3(3^{11} - 1)}{3 - 1} = \\frac{3}{2}(177147 - 1) = \\frac{3}{2}(177146) = 3 \\times 88573 = 265719$$<br>
    • Total sum: $22 + 265719 = \\mathbf{265741}$.
  </div>`,
  '2 Marks',
  [['Splitting sum into constant sum and G.P.', '1 Mark'], ['Evaluating $22 + 265719 = 265741$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q44', 'Question 12', 'Exercise 8.3',
  'The sum of first three terms of a G.P. is $\\dfrac{39}{10}$ and their product is 1. Find the common ratio and the terms.',
  `<div class="step">
    • Let the three terms of G.P. be $\\frac{a}{r}, a, ar$.<br>
    • Given product $= 1$:<br>
      $$\\left(\\frac{a}{r}\\right)(a)(ar) = 1 \\implies a^3 = 1 \\implies a = 1$$<br>
    • Given sum $= \\frac{39}{10}$:<br>
      $$\\frac{1}{r} + 1 + r = \\frac{39}{10} \\implies \\frac{1 + r + r^2}{r} = \\frac{39}{10}$$<br>
      $$10 + 10r + 10r^2 = 39r \\implies 10r^2 - 29r + 10 = 0$$<br>
      $$(2r - 5)(5r - 2) = 0 \\implies r = \\frac{5}{2} \\quad \\text{or} \\quad r = \\frac{2}{5}$$<br>
    • <b>The terms are:</b><br>
      - If $r = \\frac{5}{2}$: $\\frac{2}{5}, 1, \\frac{5}{2}$.<br>
      - If $r = \\frac{2}{5}$: $\\frac{5}{2}, 1, \\frac{2}{5}$.<br>
    • <b>Conclusion:</b> Common ratio is $\\mathbf{\\frac{5}{2}\\text{ or }\\frac{2}{5}}$, and terms are $\\mathbf{\\frac{2}{5}, 1, \\frac{5}{2}}$.
  </div>`,
  '3 Marks',
  [['Setting up terms as $a/r, a, ar$ and finding $a = 1$', '1 Mark'], ['Solving $10r^2 - 29r + 10 = 0 \\implies r = 5/2, 2/5$', '1 Mark'], ['Listing the three terms', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q45', 'Question 13', 'Exercise 8.3',
  'How many terms of G.P. $3, 3^2, 3^3, \\dots$ are needed to give the sum 120?',
  `<div class="step">
    • Given G.P.: $a = 3, r = 3, S_n = 120$.<br>
    • Using sum formula:<br>
      $$S_n = \\frac{a(r^n - 1)}{r - 1} = \\frac{3(3^n - 1)}{3 - 1} = 120$$<br>
      $$\\frac{3(3^n - 1)}{2} = 120 \\implies 3(3^n - 1) = 240 \\implies 3^n - 1 = 80$$<br>
      $$3^n = 81 = 3^4 \\implies \\mathbf{n = 4}$$<br>
    • Thus, <b>4 terms</b> are needed.
  </div>`,
  '2 Marks',
  [['Setting up $\\frac{3(3^n - 1)}{2} = 120$', '1 Mark'], ['Solving $3^n = 81 \\implies n = 4$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q46', 'Question 14', 'Exercise 8.3',
  'The sum of first three terms of a G.P. is 16 and the sum of the next three terms is 128. Determine the first term, the common ratio and the sum to $n$ terms of the G.P.',
  `<div class="step">
    • Let the G.P. be $a, ar, ar^2, ar^3, ar^4, ar^5, \\dots$<br>
    • Sum of first 3 terms: $a(1 + r + r^2) = 16 \\quad \\dots (1)$<br>
    • Sum of next 3 terms: $ar^3 + ar^4 + ar^5 = ar^3(1 + r + r^2) = 128 \\quad \\dots (2)$<br>
    • Dividing (2) by (1):<br>
      $$r^3 = \\frac{128}{16} = 8 \\implies \\mathbf{r = 2}$$<br>
    • Substituting $r = 2$ in (1):<br>
      $$a(1 + 2 + 4) = 16 \\implies 7a = 16 \\implies \\mathbf{a = \\frac{16}{7}}$$<br>
    • Sum to $n$ terms:<br>
      $$S_n = \\frac{a(r^n - 1)}{r - 1} = \\frac{\\frac{16}{7}(2^n - 1)}{2 - 1} = \\mathbf{\\frac{16}{7}(2^n - 1)}$$
  </div>`,
  '3 Marks',
  [['Finding common ratio $r = 2$', '1 Mark'], ['Finding first term $a = 16/7$', '1 Mark'], ['Expressing $S_n = \\frac{16}{7}(2^n - 1)$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q47', 'Question 15', 'Exercise 8.3',
  'Given a G.P. with $a = 729$ and 7th term 64, determine $S_7$.',
  `<div class="step">
    • Given $a = 729$ and $a_7 = 64$.<br>
    • $a_7 = a r^6 = 64 \\implies 729 r^6 = 64 \\implies r^6 = \\frac{64}{729} = \\left(\\frac{2}{3}\\right)^6 \\implies r = \\frac{2}{3}$.<br>
    • Since $r < 1$, sum of 7 terms is:<br>
      $$S_7 = \\frac{a(1 - r^7)}{1 - r} = \\frac{729\\left[1 - \\left(\\frac{2}{3}\\right)^7\\right]}{1 - \\frac{2}{3}} = \\frac{729\\left[1 - \\frac{128}{2187}\\right]}{\\frac{1}{3}}$$<br>
      $$= 3 \\times 729 \\times \\frac{2187 - 128}{2187} = 2187 \\times \\frac{2059}{2187} = \\mathbf{2059}$$
  </div>`,
  '3 Marks',
  [['Finding $r = 2/3$', '1 Mark'], ['Setting up $S_7$ formula', '1 Mark'], ['Evaluating $S_7 = 2059$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q48', 'Question 16', 'Exercise 8.3',
  'Find a G.P. for which sum of the first two terms is -4 and the fifth term is 4 times the third term.',
  `<div class="step">
    • Given $S_2 = a + ar = a(1 + r) = -4 \\quad \\dots (1)$.<br>
    • Given $a_5 = 4 a_3 \\implies a r^4 = 4 a r^2 \\implies r^2 = 4 \\implies r = \\pm 2$.<br>
    • Case 1: $r = 2$:<br>
      $$a(1 + 2) = -4 \\implies 3a = -4 \\implies a = -\\frac{4}{3}$$<br>
      The G.P. is $-\\frac{4}{3}, -\\frac{8}{3}, -\\frac{16}{3}, \\dots$<br>
    • Case 2: $r = -2$:<br>
      $$a(1 - 2) = -4 \\implies -a = -4 \\implies a = 4$$<br>
      The G.P. is $4, -8, 16, -32, \\dots$<br>
    • <b>Conclusion:</b> The required G.P. is $\\mathbf{-\\frac{4}{3}, -\\frac{8}{3}, -\\frac{16}{3}, \\dots}$ or $\\mathbf{4, -8, 16, -32, \\dots}$
  </div>`,
  '3 Marks',
  [['Solving $r^2 = 4 \\implies r = \\pm 2$', '1 Mark'], ['Finding $a = -4/3$ for $r = 2$', '1 Mark'], ['Finding $a = 4$ for $r = -2$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q49', 'Question 17', 'Exercise 8.3',
  'If the 4th, 10th and 16th terms of a G.P. are $x, y$ and $z$, respectively. Prove that $x, y, z$ are in G.P.',
  `<div class="step">
    • Let first term be $a$ and common ratio be $r$.<br>
    • $x = a_4 = a r^3$<br>
    • $y = a_{10} = a r^9$<br>
    • $z = a_{16} = a r^{15}$<br>
    • Check ratio $\\frac{y}{x}$:<br>
      $$\\frac{y}{x} = \\frac{a r^9}{a r^3} = r^6$$<br>
    • Check ratio $\\frac{z}{y}$:<br>
      $$\\frac{z}{y} = \\frac{a r^{15}}{a r^9} = r^6$$<br>
    • Since $\\frac{y}{x} = \\frac{z}{y} = r^6$ (or $y^2 = xz = a^2 r^{18}$), $x, y, z$ are in G.P.<br>
    • <b>Hence proved.</b>
  </div>`,
  '2 Marks',
  [['Expressing $x, y, z$ in terms of $a$ and $r$', '1 Mark'], ['Showing $y/x = z/y = r^6$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q50', 'Question 18', 'Exercise 8.3',
  'Find the sum to $n$ terms of the sequence, $8, 88, 888, 8888, \\dots$',
  `<div class="step">
    • Let $S_n = 8 + 88 + 888 + \\dots + \\text{to } n \\text{ terms}$.<br>
    • Factor out $8$ and multiply & divide by $9$:<br>
      $$S_n = \\frac{8}{9}[9 + 99 + 999 + \\dots + \\text{to } n \\text{ terms}]$$<br>
      $$= \\frac{8}{9}[(10 - 1) + (10^2 - 1) + (10^3 - 1) + \\dots + (10^n - 1)]$$<br>
      $$= \\frac{8}{9}[(10 + 10^2 + 10^3 + \\dots + 10^n) - (1 + 1 + \\dots + 1)]$$<br>
    • The terms $10, 10^2, \\dots, 10^n$ form a G.P. with $a = 10, r = 10$:<br>
      $$\\text{Sum} = \\frac{10(10^n - 1)}{10 - 1} = \\frac{10(10^n - 1)}{9}$$<br>
    • Therefore:<br>
      $$S_n = \\frac{8}{9}\\left[\\frac{10(10^n - 1)}{9} - n\\right] = \\mathbf{\\frac{80}{81}(10^n - 1) - \\frac{8n}{9}}$$
  </div>`,
  '3 Marks',
  [['Transforming to $9 + 99 + 999 + \\dots$', '1 Mark'], ['Summing G.P. of powers of 10', '1 Mark'], ['Final closed form $\\frac{80}{81}(10^n - 1) - \\frac{8n}{9}$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q51', 'Question 19', 'Exercise 8.3',
  'Find the sum of the products of the corresponding terms of the sequences $2, 4, 8, 16, 32$ and $128, 32, 8, 2, \\dfrac{1}{2}$.',
  `<div class="step">
    • Multiplying corresponding terms of the two sequences:<br>
      - 1st term: $2 \\times 128 = 256$<br>
      - 2nd term: $4 \\times 32 = 128$<br>
      - 3rd term: $8 \\times 8 = 64$<br>
      - 4th term: $16 \\times 2 = 32$<br>
      - 5th term: $32 \\times \\frac{1}{2} = 16$<br>
    • The resulting sequence is $256, 128, 64, 32, 16$, which is a G.P. with $a = 256, r = \\frac{1}{2}, n = 5$.<br>
    • Sum of these 5 terms:<br>
      $$S_5 = 256 + 128 + 64 + 32 + 16 = \\mathbf{496}$$
  </div>`,
  '2 Marks',
  [['Computing products of corresponding terms', '1 Mark'], ['Evaluating sum = 496', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q52', 'Question 20', 'Exercise 8.3',
  'Show that the products of the corresponding terms of the sequences $a, ar, ar^2, \\dots, ar^{n - 1}$ and $A, AR, AR^2, \\dots, AR^{n - 1}$ form a G.P, and find the common ratio.',
  `<div class="step">
    • The sequence formed by multiplying corresponding terms is:<br>
      $$aA, (ar)(AR), (ar^2)(AR^2), \\dots, (ar^{n-1})(AR^{n-1})$$<br>
      $$= aA, aA(rR), aA(rR)^2, \\dots, aA(rR)^{n-1}$$<br>
    • Ratio of $(k + 1)^{\\text{th}}$ term to $k^{\\text{th}}$ term:<br>
      $$\\frac{aA(rR)^k}{aA(rR)^{k - 1}} = rR$$<br>
    • Since the ratio between any two consecutive terms is a constant $rR$, the sequence forms a Geometric Progression.<br>
    • <b>Common ratio:</b> $\\mathbf{rR}$.
  </div>`,
  '2 Marks',
  [['Forming sequence of products $aA, aA(rR), aA(rR)^2, \\dots$', '1 Mark'], ['Showing constant ratio $rR$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q53', 'Question 21', 'Exercise 8.3',
  'Find four numbers forming a geometric progression in which the third term is greater than the first term by 9, and the second term is greater than the 4th by 18.',
  `<div class="step">
    • Let the four numbers in G.P. be $a, ar, ar^2, ar^3$.<br>
    • Given $a_3 - a_1 = 9 \\implies ar^2 - a = 9 \\implies a(r^2 - 1) = 9 \\quad \\dots (1)$.<br>
    • Given $a_2 - a_4 = 18 \\implies ar - ar^3 = 18 \\implies ar(1 - r^2) = 18 \\implies -ar(r^2 - 1) = 18 \\quad \\dots (2)$.<br>
    • Dividing (2) by (1):<br>
      $$\\frac{-ar(r^2 - 1)}{a(r^2 - 1)} = \\frac{18}{9} \\implies -r = 2 \\implies \\mathbf{r = -2}$$<br>
    • Substituting $r = -2$ into (1):<br>
      $$a((-2)^2 - 1) = 9 \\implies 3a = 9 \\implies \\mathbf{a = 3}$$<br>
    • Finding the four numbers:<br>
      - $a = 3$<br>
      - $ar = 3(-2) = -6$<br>
      - $ar^2 = 3(4) = 12$<br>
      - $ar^3 = 3(-8) = -24$<br>
    • <b>Conclusion:</b> The four numbers are $\\mathbf{3, -6, 12, -24}$.
  </div>`,
  '3 Marks',
  [['Setting up equations $a(r^2 - 1) = 9$ and $-ar(r^2 - 1) = 18$', '1 Mark'], ['Solving for $r = -2$ and $a = 3$', '1 Mark'], ['Listing the four numbers $3, -6, 12, -24$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q54', 'Question 22', 'Exercise 8.3',
  'If the $p^{\\text{th}}, q^{\\text{th}}$ and $r^{\\text{th}}$ terms of a G.P. are $a, b$ and $c$, respectively. Prove that $a^{q - r} b^{r - p} c^{p - q} = 1$.',
  `<div class="step">
    • Let the first term be $A$ and common ratio be $R$.<br>
    • Given:<br>
      $$a = A R^{p - 1}$$<br>
      $$b = A R^{q - 1}$$<br>
      $$c = A R^{r - 1}$$<br>
    • Consider the product $\\text{LHS} = a^{q - r} b^{r - p} c^{p - q}$:<br>
      $$= (A R^{p - 1})^{q - r} (A R^{q - 1})^{r - p} (A R^{r - 1})^{p - q}$$<br>
      $$= A^{(q - r) + (r - p) + (p - q)} \\times R^{(p - 1)(q - r) + (q - 1)(r - p) + (r - 1)(p - q)}$$<br>
      - Power of $A$: $(q - r + r - p + p - q) = 0 \\implies A^0 = 1$.<br>
      - Power of $R$: $(pq - pr - q + r) + (qr - qp - r + p) + (rp - rq - p + q) = 0 \\implies R^0 = 1$.<br>
    • Thus, $\\text{LHS} = 1 \\times 1 = \\mathbf{1} = \\text{RHS}$. (Hence proved).
  </div>`,
  '3 Marks',
  [['Expressing $a, b, c$ using $A$ and $R$', '1 Mark'], ['Showing exponent of $A$ is 0', '1 Mark'], ['Showing exponent of $R$ is 0 to obtain 1', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q55', 'Question 23', 'Exercise 8.3',
  'If the first and the $n^{\\text{th}}$ term of a G.P. are $a$ and $b$, respectively, and if $P$ is the product of $n$ terms, prove that $P^2 = (ab)^n$.',
  `<div class="step">
    • Let the G.P. be $a, ar, ar^2, \\dots, ar^{n - 1}$.<br>
    • First term $= a$, and $n^{\\text{th}}$ term $b = ar^{n - 1}$.<br>
    • The product $P$ of the first $n$ terms is:<br>
      $$P = (a)(ar)(ar^2) \\dots (ar^{n - 1}) = a^n r^{1 + 2 + \\dots + (n - 1)} = a^n r^{\\frac{n(n - 1)}{2}}$$<br>
    • Squaring both sides:<br>
      $$P^2 = \\left(a^n r^{\\frac{n(n - 1)}{2}}\\right)^2 = a^{2n} r^{n(n - 1)} = [a^2 r^{n - 1}]^n = [a \\cdot (ar^{n - 1})]^n$$<br>
    • Since $ar^{n - 1} = b$, we get:<br>
      $$P^2 = (ab)^n$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '3 Marks',
  [['Writing $P = a^n r^{n(n - 1)/2}$', '1 Mark'], ['Squaring to get $P^2 = [a(ar^{n - 1})]^n$', '1 Mark'], ['Substituting $b = ar^{n - 1}$ to obtain $(ab)^n$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q56', 'Question 24', 'Exercise 8.3',
  'Show that the ratio of the sum of first $n$ terms of a G.P. to the sum of terms from $(n + 1)^{\\text{th}}$ to $(2n)^{\\text{th}}$ term is $\\dfrac{1}{r^n}$.',
  `<div class="step">
    • Sum of first $n$ terms: $S_n = \\frac{a(1 - r^n)}{1 - r}$.<br>
    • The terms from $(n + 1)^{\\text{th}}$ to $(2n)^{\\text{th}}$ also form a G.P. with $n$ terms, whose first term is $a_{n + 1} = ar^n$ and common ratio is $r$:<br>
      $$S' = \\frac{a_{n + 1}(1 - r^n)}{1 - r} = \\frac{ar^n(1 - r^n)}{1 - r}$$<br>
    • Taking the ratio:<br>
      $$\\frac{S_n}{S'} = \\frac{\\frac{a(1 - r^n)}{1 - r}}{\\frac{ar^n(1 - r^n)}{1 - r}} = \\frac{a}{ar^n} = \\mathbf{\\frac{1}{r^n}}$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '2 Marks',
  [['Expressing sum from $(n + 1)^{\\text{th}}$ to $(2n)^{\\text{th}}$ terms', '1 Mark'], ['Dividing sums to get $1/r^n$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q57', 'Question 25', 'Exercise 8.3',
  'If $a, b, c$ and $d$ are in G.P. show that $(a^2 + b^2 + c^2)(b^2 + c^2 + d^2) = (ab + bc + cd)^2$.',
  `<div class="step">
    • Since $a, b, c, d$ are in G.P., let $b = ar, c = ar^2, d = ar^3$.<br>
    • <b>LHS:</b><br>
      $$a^2 + b^2 + c^2 = a^2 + a^2 r^2 + a^2 r^4 = a^2(1 + r^2 + r^4)$$<br>
      $$b^2 + c^2 + d^2 = a^2 r^2 + a^2 r^4 + a^2 r^6 = a^2 r^2(1 + r^2 + r^4)$$<br>
      $$\\text{LHS} = [a^2(1 + r^2 + r^4)][a^2 r^2(1 + r^2 + r^4)] = a^4 r^2 (1 + r^2 + r^4)^2$$<br>
    • <b>RHS:</b><br>
      $$ab + bc + cd = a(ar) + (ar)(ar^2) + (ar^2)(ar^3) = a^2 r + a^2 r^3 + a^2 r^5 = a^2 r(1 + r^2 + r^4)$$<br>
      $$\\text{RHS} = (ab + bc + cd)^2 = [a^2 r(1 + r^2 + r^4)]^2 = a^4 r^2 (1 + r^2 + r^4)^2$$<br>
    • Since $\\text{LHS} = \\text{RHS}$, the equality holds. (Hence proved).
  </div>`,
  '3 Marks',
  [['Substituting $b = ar, c = ar^2, d = ar^3$', '1 Mark'], ['Evaluating LHS to $a^4 r^2(1 + r^2 + r^4)^2$', '1 Mark'], ['Evaluating RHS and showing equality', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q58', 'Question 26', 'Exercise 8.3',
  'Insert two numbers between 3 and 81 so that the resulting sequence is G.P.',
  `<div class="step">
    • Let the two inserted numbers be $G_1, G_2$.<br>
    • The sequence is $3, G_1, G_2, 81$ (4 terms in G.P.).<br>
    • First term $a = 3$, 4th term $a_4 = 81$:<br>
      $$a_4 = a r^3 = 81 \\implies 3 r^3 = 81 \\implies r^3 = 27 \\implies r = 3$$<br>
    • Evaluating the two numbers:<br>
      - $G_1 = ar = 3(3) = 9$<br>
      - $G_2 = ar^2 = 3(9) = 27$<br>
    • <b>Conclusion:</b> The two numbers are $\\mathbf{9\\text{ and }27}$.
  </div>`,
  '2 Marks',
  [['Finding $r = 3$', '1 Mark'], ['Evaluating $G_1 = 9$ and $G_2 = 27$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q59', 'Question 27', 'Exercise 8.3',
  'Find the value of $n$ so that $\\dfrac{a^{n + 1} + b^{n + 1}}{a^n + b^n}$ may be the geometric mean between $a$ and $b$.',
  `<div class="step">
    • The Geometric Mean (G.M.) between $a$ and $b$ is $\\sqrt{ab} = a^{1/2} b^{1/2}$.<br>
    • Given:<br>
      $$\\frac{a^{n + 1} + b^{n + 1}}{a^n + b^n} = a^{1/2} b^{1/2}$$<br>
      $$a^{n + 1} + b^{n + 1} = a^{n + 1/2} b^{1/2} + a^{1/2} b^{n + 1/2}$$<br>
      $$a^{n + 1} - a^{n + 1/2} b^{1/2} = a^{1/2} b^{n + 1/2} - b^{n + 1}$$<br>
      $$a^{n + 1/2}(a^{1/2} - b^{1/2}) = b^{n + 1/2}(a^{1/2} - b^{1/2})$$<br>
    • Since $a \\ne b$, divide by $(a^{1/2} - b^{1/2})$:<br>
      $$a^{n + 1/2} = b^{n + 1/2} \\implies \\left(\\frac{a}{b}\\right)^{n + 1/2} = 1 = \\left(\\frac{a}{b}\\right)^0$$<br>
      $$n + \\frac{1}{2} = 0 \\implies \\mathbf{n = -\\frac{1}{2}}$$
  </div>`,
  '3 Marks',
  [['Equating expression to $\\sqrt{ab}$ and expanding', '1 Mark'], ['Factoring to $a^{n + 1/2}(a^{1/2} - b^{1/2}) = b^{n + 1/2}(a^{1/2} - b^{1/2})$', '1 Mark'], ['Solving $n + 1/2 = 0 \\implies n = -1/2$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q60', 'Question 28', 'Exercise 8.3',
  'The sum of two numbers is 6 times their geometric mean, show that numbers are in the ratio $(3 + 2\\sqrt{2}) : (3 - 2\\sqrt{2})$.',
  `<div class="step">
    • Let the two numbers be $a$ and $b$. Given $a + b = 6\\sqrt{ab}$.<br>
    • Divide both sides by $2\\sqrt{ab}$:<br>
      $$\\frac{a + b}{2\\sqrt{ab}} = \\frac{3}{1}$$<br>
    • Applying Componendo and Dividendo:<br>
      $$\\frac{(a + b) + 2\\sqrt{ab}}{(a + b) - 2\\sqrt{ab}} = \\frac{3 + 1}{3 - 1} = \\frac{4}{2} = 2$$<br>
      $$\\frac{(\\sqrt{a} + \\sqrt{b})^2}{(\\sqrt{a} - \\sqrt{b})^2} = 2 \\implies \\frac{\\sqrt{a} + \\sqrt{b}}{\\sqrt{a} - \\sqrt{b}} = \\frac{\\sqrt{2}}{1}$$<br>
    • Applying Componendo and Dividendo once more:<br>
      $$\\frac{(\\sqrt{a} + \\sqrt{b}) + (\\sqrt{a} - \\sqrt{b})}{(\\sqrt{a} + \\sqrt{b}) - (\\sqrt{a} - \\sqrt{b})} = \\frac{\\sqrt{2} + 1}{\\sqrt{2} - 1}$$<br>
      $$\\frac{2\\sqrt{a}}{2\\sqrt{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}} = \\frac{\\sqrt{2} + 1}{\\sqrt{2} - 1}$$<br>
    • Squaring both sides:<br>
      $$\\frac{a}{b} = \\frac{(\\sqrt{2} + 1)^2}{(\\sqrt{2} - 1)^2} = \\frac{2 + 1 + 2\\sqrt{2}}{2 + 1 - 2\\sqrt{2}} = \\mathbf{\\frac{3 + 2\\sqrt{2}}{3 - 2\\sqrt{2}}}$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '4 Marks',
  [['Expressing $\\frac{a + b}{2\\sqrt{ab}} = 3$', '1 Mark'], ['Applying componendo & dividendo to obtain $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\frac{\\sqrt{2} + 1}{\\sqrt{2} - 1}$', '2 Marks'], ['Squaring to get $(3 + 2\\sqrt{2}) : (3 - 2\\sqrt{2})$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q61', 'Question 29', 'Exercise 8.3',
  'If $A$ and $G$ be A.M. and G.M., respectively between two positive numbers, prove that the numbers are $A \\pm \\sqrt{(A + G)(A - G)}$.',
  `<div class="step">
    • Let the two positive numbers be $a$ and $b$.<br>
    • Given $A = \\frac{a + b}{2} \\implies a + b = 2A$, and $G = \\sqrt{ab} \\implies ab = G^2$.<br>
    • A quadratic equation whose roots are $a$ and $b$ is:<br>
      $$x^2 - (a + b)x + ab = 0 \\implies x^2 - 2Ax + G^2 = 0$$<br>
    • Using the quadratic formula to solve for $x$ ($a$ and $b$):<br>
      $$x = \\frac{-(-2A) \\pm \\sqrt{(-2A)^2 - 4(1)(G^2)}}{2} = \\frac{2A \\pm \\sqrt{4A^2 - 4G^2}}{2}$$<br>
      $$x = \\frac{2A \\pm 2\\sqrt{A^2 - G^2}}{2} = A \\pm \\sqrt{A^2 - G^2}$$<br>
    • Since $A^2 - G^2 = (A + G)(A - G)$, the numbers are:<br>
      $$\\mathbf{A \\pm \\sqrt{(A + G)(A - G)}}$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '3 Marks',
  [['Setting up quadratic equation $x^2 - 2Ax + G^2 = 0$', '1 Mark'], ['Solving via quadratic formula', '1 Mark'], ['Factoring radicand as $(A + G)(A - G)$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q62', 'Question 30', 'Exercise 8.3',
  'The number of bacteria in a certain culture doubles every hour. If there were 30 bacteria present in the culture originally, how many bacteria will be present at the end of 2nd hour, 4th hour and $n^{\\text{th}}$ hour?',
  `<div class="step">
    • Initially present bacteria $= 30$. Since it doubles every hour, common ratio $r = 2$.<br>
    • Number of bacteria at the end of each hour forms a G.P.:<br>
      - End of 1st hour: $30 \\times 2 = 60$<br>
      - End of 2nd hour: $30 \\times 2^2 = 30 \\times 4 = \\mathbf{120}$<br>
      - End of 4th hour: $30 \\times 2^4 = 30 \\times 16 = \\mathbf{480}$<br>
      - End of $n^{\\text{th}}$ hour: $\\mathbf{30 \\times 2^n}$
  </div>`,
  '3 Marks',
  [['End of 2nd hour: 120 bacteria', '1 Mark'], ['End of 4th hour: 480 bacteria', '1 Mark'], ['End of $n^{\\text{th}}$ hour: $30 \\times 2^n$ bacteria', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q63', 'Question 31', 'Exercise 8.3',
  'What will Rs 500 amounts to in 10 years after its deposit in a bank which pays annual interest rate of 10% compounded annually?',
  `<div class="step">
    • Principal $P = 500$, rate $R = 10\\%$, time $n = 10\\text{ years}$.<br>
    • Amount after 1 year: $500\\left(1 + \\frac{10}{100}\\right) = 500(1.1)$.<br>
    • Amount after 2 years: $500(1.1)^2$.<br>
    • The amount at the end of successive years forms a G.P.<br>
    • Amount at the end of 10 years:<br>
      $$A_{10} = 500(1 + 0.1)^{10} = \\mathbf{Rs.\\; 500(1.1)^{10}}$$
  </div>`,
  '2 Marks',
  [['Formulating compound growth as G.P. term', '1 Mark'], ['Stating final amount $500(1.1)^{10}$', '1 Mark']]
));

ex8_3.push(createQCard(
  'c11m-ch8-q64', 'Question 32', 'Exercise 8.3',
  'If A.M. and G.M. of roots of a quadratic equation are 8 and 5, respectively, then obtain the quadratic equation.',
  `<div class="step">
    • Let the roots of the quadratic equation be $\\alpha$ and $\\beta$.<br>
    • Given A.M. of roots $= 8$:<br>
      $$\\frac{\\alpha + \\beta}{2} = 8 \\implies \\alpha + \\beta = 16$$<br>
    • Given G.M. of roots $= 5$:<br>
      $$\\sqrt{\\alpha \\beta} = 5 \\implies \\alpha \\beta = 25$$<br>
    • A quadratic equation with roots $\\alpha, \\beta$ is given by:<br>
      $$x^2 - (\\alpha + \\beta)x + \\alpha \\beta = 0$$<br>
      $$x^2 - 16x + 25 = 0$$<br>
    • <b>Conclusion:</b> The required quadratic equation is $\\mathbf{x^2 - 16x + 25 = 0}$.
  </div>`,
  '2 Marks',
  [['Finding sum of roots $\\alpha + \\beta = 16$', '½ Mark'], ['Finding product of roots $\\alpha \\beta = 25$', '½ Mark'], ['Writing quadratic equation $x^2 - 16x + 25 = 0$', '1 Mark']]
));

// ============================================================================
// MISCELLANEOUS EXERCISE (Questions 65 to 78)
// ============================================================================

misc.push(createQCard(
  'c11m-ch8-q65', 'Question 1 (Misc)', 'Misc Exercise',
  'Show that the sum of $(m + n)^{\\text{th}}$ and $(m - n)^{\\text{th}}$ terms of an A.P. is equal to twice the $m^{\\text{th}}$ term.',
  `<div class="step">
    • Let first term be $a$ and common difference be $d$.<br>
    • $(m + n)^{\\text{th}}$ term: $a_{m + n} = a + (m + n - 1)d$<br>
    • $(m - n)^{\\text{th}}$ term: $a_{m - n} = a + (m - n - 1)d$<br>
    • Adding the two terms:<br>
      $$a_{m + n} + a_{m - n} = 2a + (m + n - 1 + m - n - 1)d = 2a + (2m - 2)d$$<br>
      $$= 2[a + (m - 1)d]$$<br>
    • Since $a + (m - 1)d = a_m$ ($m^{\\text{th}}$ term):<br>
      $$a_{m + n} + a_{m - n} = \\mathbf{2 a_m}$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '2 Marks',
  [['Writing expressions for $a_{m + n}$ and $a_{m - n}$', '1 Mark'], ['Adding and factoring 2 to get $2a_m$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch8-q66', 'Question 2 (Misc)', 'Misc Exercise',
  'If the sum of three numbers in A.P., is 24 and their product is 440, find the numbers.',
  `<div class="step">
    • Let the three numbers in A.P. be $a - d, a, a + d$.<br>
    • Given sum $= 24$:<br>
      $$(a - d) + a + (a + d) = 24 \\implies 3a = 24 \\implies a = 8$$<br>
    • Given product $= 440$:<br>
      $$(8 - d)(8)(8 + d) = 440 \\implies 8(64 - d^2) = 440$$<br>
      $$64 - d^2 = 55 \\implies d^2 = 9 \\implies d = \\pm 3$$<br>
    • If $d = 3$, the numbers are $8 - 3, 8, 8 + 3 \\implies \\mathbf{5, 8, 11}$.<br>
    • If $d = -3$, the numbers are $8 - (-3), 8, 8 + (-3) \\implies \\mathbf{11, 8, 5}$.<br>
    • <b>Conclusion:</b> The numbers are $\\mathbf{5, 8, 11}$.
  </div>`,
  '3 Marks',
  [['Setting up numbers as $a - d, a, a + d$ and finding $a = 8$', '1 Mark'], ['Solving for $d = \\pm 3$', '1 Mark'], ['Stating numbers 5, 8, 11', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch8-q67', 'Question 3 (Misc)', 'Misc Exercise',
  'Let the sum of $n, 2n, 3n$ terms of an A.P. be $S_1, S_2$ and $S_3$, respectively, show that $S_3 = 3(S_2 - S_1)$.',
  `<div class="step">
    • Let first term be $a$ and common difference be $d$.<br>
      $$S_1 = \\frac{n}{2}[2a + (n - 1)d]$$<br>
      $$S_2 = \\frac{2n}{2}[2a + (2n - 1)d] = n[2a + (2n - 1)d]$$<br>
      $$S_3 = \\frac{3n}{2}[2a + (3n - 1)d]$$<br>
    • Evaluate $S_2 - S_1$:<br>
      $$S_2 - S_1 = \\frac{n}{2}[2(2a + (2n - 1)d) - (2a + (n - 1)d)]$$<br>
      $$= \\frac{n}{2}[4a + (4n - 2)d - 2a - (n - 1)d] = \\frac{n}{2}[2a + (3n - 1)d]$$<br>
    • Multiplying by $3$:<br>
      $$3(S_2 - S_1) = 3 \\times \\frac{n}{2}[2a + (3n - 1)d] = \\frac{3n}{2}[2a + (3n - 1)d] = \\mathbf{S_3}$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '3 Marks',
  [['Writing expressions for $S_1, S_2, S_3$', '1 Mark'], ['Evaluating $S_2 - S_1 = \\frac{n}{2}[2a + (3n - 1)d]$', '1 Mark'], ['Multiplying by 3 to achieve $S_3$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch8-q68', 'Question 4 (Misc)', 'Misc Exercise',
  'Find the sum of all numbers between 200 and 400 which are divisible by 7.',
  `<div class="step">
    • Numbers between $200$ and $400$ divisible by $7$ form an A.P.:<br>
      - First number $> 200$: $203$ (since $203 = 7 \\times 29$).<br>
      - Last number $< 400$: $399$ (since $399 = 7 \\times 57$).<br>
    • The A.P. is $203, 210, \\dots, 399$ with $a = 203, d = 7, l = 399$.<br>
    • Finding $n$:<br>
      $$203 + (n - 1)7 = 399 \\implies 7(n - 1) = 196 \\implies n - 1 = 28 \\implies n = 29$$<br>
    • Sum:<br>
      $$S_{29} = \\frac{29}{2}(203 + 399) = \\frac{29}{2}(602) = 29 \\times 301 = \\mathbf{8729}$$
  </div>`,
  '3 Marks',
  [['Finding first term 203 and last term 399', '1 Mark'], ['Finding $n = 29$', '1 Mark'], ['Computing sum $S_{29} = 8729$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch8-q69', 'Question 5 (Misc)', 'Misc Exercise',
  'Find the sum of integers from 1 to 100 that are divisible by 2 or 5.',
  `<div class="step">
    • By Inclusion-Exclusion Principle:<br>
      $$\\text{Sum} = \\text{Sum(divisible by 2)} + \\text{Sum(divisible by 5)} - \\text{Sum(divisible by 10)}$$<br>
    • <b>Sum of multiples of 2 from 1 to 100:</b><br>
      $2, 4, \\dots, 100$ ($50$ terms): $S_2 = \\frac{50}{2}(2 + 100) = 25 \\times 102 = 2550$.<br>
    • <b>Sum of multiples of 5 from 1 to 100:</b><br>
      $5, 10, \\dots, 100$ ($20$ terms): $S_5 = \\frac{20}{2}(5 + 100) = 10 \\times 105 = 1050$.<br>
    • <b>Sum of multiples of 10 from 1 to 100:</b><br>
      $10, 20, \\dots, 100$ ($10$ terms): $S_{10} = \\frac{10}{2}(10 + 100) = 5 \\times 110 = 550$.<br>
    • <b>Required sum:</b><br>
      $$\\text{Sum} = 2550 + 1050 - 550 = 3600 - 550 = \\mathbf{3050}$$
  </div>`,
  '3 Marks',
  [['Computing sum of multiples of 2: 2550', '1 Mark'], ['Computing sum of multiples of 5: 1050 and 10: 550', '1 Mark'], ['Applying inclusion-exclusion to get 3050', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch8-q70', 'Question 6 (Misc)', 'Misc Exercise',
  'Find the sum of all two digit numbers which when divided by 4, yields 1 as remainder.',
  `<div class="step">
    • Two digit numbers are from $10$ to $99$.<br>
    • Numbers leaving remainder $1$ when divided by $4$ are of the form $4k + 1$:<br>
      - Smallest two digit: $4(3) + 1 = 13$.<br>
      - Largest two digit: $4(24) + 1 = 97$.<br>
    • Sequence: $13, 17, 21, \\dots, 97$ (an A.P. with $a = 13, d = 4, l = 97$).<br>
    • Finding $n$:<br>
      $$13 + (n - 1)4 = 97 \\implies 4(n - 1) = 84 \\implies n - 1 = 21 \\implies n = 22$$<br>
    • Sum:<br>
      $$S_{22} = \\frac{22}{2}(13 + 97) = 11 \\times 110 = \\mathbf{1210}$$
  </div>`,
  '2 Marks',
  [['Finding first term 13, last term 97, and $n = 22$', '1 Mark'], ['Evaluating sum $S_{22} = 1210$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch8-q71', 'Question 7 (Misc)', 'Misc Exercise',
  'If $f$ is a function satisfying $f(x + y) = f(x) f(y)$ for all $x, y \\in \\mathbb{N}$ such that $f(1) = 3$ and $\\sum_{x=1}^n f(x) = 120$, find the value of $n$.',
  `<div class="step">
    • Given functional equation: $f(x + y) = f(x) f(y)$ with $f(1) = 3$.<br>
      - $f(2) = f(1 + 1) = f(1) f(1) = 3^2 = 9$<br>
      - $f(3) = f(2 + 1) = f(2) f(1) = 3^3 = 27$<br>
      - In general, $f(x) = 3^x$.<br>
    • The summation is a G.P.:<br>
      $$\\sum_{x=1}^n f(x) = 3 + 3^2 + 3^3 + \\dots + 3^n = 120$$<br>
      $$\\frac{3(3^n - 1)}{3 - 1} = 120 \\implies \\frac{3(3^n - 1)}{2} = 120$$<br>
      $$3(3^n - 1) = 240 \\implies 3^n - 1 = 80 \\implies 3^n = 81 = 3^4$$<br>
      $$\\mathbf{n = 4}$$
  </div>`,
  '3 Marks',
  [['Deducing $f(x) = 3^x$', '1 Mark'], ['Setting up G.P. sum formula $\\frac{3(3^n - 1)}{2} = 120$', '1 Mark'], ['Solving for $n = 4$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch8-q72', 'Question 8 (Misc)', 'Misc Exercise',
  'The sum of some terms of G.P. is 315 whose first term and the common ratio are 5 and 2, respectively. Find the last term and the number of terms.',
  `<div class="step">
    • Given $a = 5, r = 2, S_n = 315$.<br>
    • Using sum formula:<br>
      $$S_n = \\frac{a(r^n - 1)}{r - 1} \\implies 315 = \\frac{5(2^n - 1)}{2 - 1} = 5(2^n - 1)$$<br>
      $$2^n - 1 = 63 \\implies 2^n = 64 = 2^6 \\implies \\mathbf{n = 6}$$<br>
    • Last term $l = a_6$:<br>
      $$a_6 = a r^5 = 5(2^5) = 5(32) = \\mathbf{160}$$<br>
    • <b>Conclusion:</b> Number of terms is <b>6</b> and last term is <b>160</b>.
  </div>`,
  '2 Marks',
  [['Finding $n = 6$', '1 Mark'], ['Evaluating last term $a_6 = 160$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch8-q73', 'Question 9 (Misc)', 'Misc Exercise',
  'The first term of a G.P. is 1. The sum of the third term and fifth term is 90. Find the common ratio of G.P.',
  `<div class="step">
    • Given $a = 1$. Let common ratio be $r$.<br>
    • 3rd term $a_3 = a r^2 = r^2$, 5th term $a_5 = a r^4 = r^4$.<br>
    • Given $a_3 + a_5 = 90$:<br>
      $$r^2 + r^4 = 90 \\implies r^4 + r^2 - 90 = 0$$<br>
    • Let $u = r^2$ ($u > 0$):<br>
      $$u^2 + u - 90 = 0 \\implies (u + 10)(u - 9) = 0$$<br>
      $$u = 9 \\quad (\\text{since } u = r^2 \\ge 0, u = -10 \\text{ is rejected})$$<br>
    • Therefore, $r^2 = 9 \\implies \\mathbf{r = \\pm 3}$.
  </div>`,
  '3 Marks',
  [['Setting up equation $r^4 + r^2 - 90 = 0$', '1 Mark'], ['Solving quadratic for $r^2 = 9$', '1 Mark'], ['Finding $r = \\pm 3$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch8-q74', 'Question 10 (Misc)', 'Misc Exercise',
  'The sum of three numbers in G.P. is 56. If we subtract 1, 7, 21 from these numbers in that order, we obtain an arithmetic progression. Find the numbers.',
  `<div class="step">
    • Let the three numbers in G.P. be $a, ar, ar^2$.<br>
    • Given $a + ar + ar^2 = 56 \\implies a(1 + r + r^2) = 56 \\quad \\dots (1)$.<br>
    • After subtraction, the numbers are $a - 1, ar - 7, ar^2 - 21$ in A.P.<br>
      $$2(ar - 7) = (a - 1) + (ar^2 - 21)$$<br>
      $$2ar - 14 = a + ar^2 - 22$$<br>
      $$a - 2ar + ar^2 = 8 \\implies a(1 - 2r + r^2) = 8 \\implies a(r - 1)^2 = 8 \\quad \\dots (2)$$<br>
    • Dividing (1) by (2):<br>
      $$\\frac{a(1 + r + r^2)}{a(r - 1)^2} = \\frac{56}{8} = 7$$<br>
      $$1 + r + r^2 = 7(r^2 - 2r + 1) = 7r^2 - 14r + 7$$<br>
      $$6r^2 - 15r + 6 = 0 \\implies 2r^2 - 5r + 2 = 0$$<br>
      $$(2r - 1)(r - 2) = 0 \\implies r = 2 \\quad \\text{or} \\quad r = \\frac{1}{2}$$<br>
    • For $r = 2$: $a(1 + 2 + 4) = 56 \\implies 7a = 56 \\implies a = 8$.<br>
      Numbers: $8, 8(2), 8(4) = \\mathbf{8, 16, 32}$.<br>
    • For $r = 1/2$: $a(1 + 1/2 + 1/4) = 56 \\implies \\frac{7}{4}a = 56 \\implies a = 32$.<br>
      Numbers: $32, 16, 8$.<br>
    • <b>Conclusion:</b> The numbers are $\\mathbf{8, 16, 32}$.
  </div>`,
  '4 Marks',
  [['Setting up equations (1) and (2)', '1½ Marks'], ['Solving for $r = 2$ or $1/2$', '1½ Marks'], ['Finding the three numbers 8, 16, 32', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch8-q75', 'Question 11 (Misc)', 'Misc Exercise',
  'A G.P. consists of an even number of terms. If the sum of all the terms is 5 times the sum of terms occupying odd places, then find its common ratio.',
  `<div class="step">
    • Let the G.P. have $2n$ terms: $a, ar, ar^2, \\dots, ar^{2n - 1}$.<br>
    • Sum of all $2n$ terms:<br>
      $$S_{2n} = \\frac{a(1 - r^{2n})}{1 - r}$$<br>
    • Terms occupying odd places: $a, ar^2, ar^4, \\dots, ar^{2n - 2}$ ($n$ terms, common ratio $r^2$):<br>
      $$S_{\\text{odd}} = \\frac{a(1 - (r^2)^n)}{1 - r^2} = \\frac{a(1 - r^{2n})}{1 - r^2}$$<br>
    • Given $S_{2n} = 5 S_{\\text{odd}}$:<br>
      $$\\frac{a(1 - r^{2n})}{1 - r} = 5 \\left[\\frac{a(1 - r^{2n})}{1 - r^2}\\right]$$<br>
      $$\\frac{1}{1 - r} = \\frac{5}{(1 - r)(1 + r)}$$<br>
      $$1 + r = 5 \\implies \\mathbf{r = 4}$$
  </div>`,
  '3 Marks',
  [['Expressing total sum $S_{2n}$ and odd terms sum $S_{\\text{odd}}$', '1½ Marks'], ['Equating and cancelling common factors', '1 Mark'], ['Solving for common ratio $r = 4$', '½ Mark']]
));

misc.push(createQCard(
  'c11m-ch8-q76', 'Question 12 (Misc)', 'Misc Exercise',
  'If $\\dfrac{a + bx}{a - bx} = \\dfrac{b + cx}{b - cx} = \\dfrac{c + dx}{c - dx} \\; (x \\ne 0)$, then show that $a, b, c$ and $d$ are in G.P.',
  `<div class="step">
    • Consider the first equality: $\\frac{a + bx}{a - bx} = \\frac{b + cx}{b - cx}$.<br>
    • Applying Componendo and Dividendo:<br>
      $$\\frac{(a + bx) + (a - bx)}{(a + bx) - (a - bx)} = \\frac{(b + cx) + (b - cx)}{(b + cx) - (b - cx)}$$<br>
      $$\\frac{2a}{2bx} = \\frac{2b}{2cx} \\implies \\frac{a}{b} = \\frac{b}{c}$$<br>
    • Consider the second equality: $\\frac{b + cx}{b - cx} = \\frac{c + dx}{c - dx}$.<br>
    • Applying Componendo and Dividendo:<br>
      $$\\frac{2b}{2cx} = \\frac{2c}{2dx} \\implies \\frac{b}{c} = \\frac{c}{d}$$<br>
    • Therefore:<br>
      $$\\frac{a}{b} = \\frac{b}{c} = \\frac{c}{d} = \\frac{1}{r}$$<br>
    • This implies $b^2 = ac$ and $c^2 = bd$, hence $a, b, c, d$ are in Geometric Progression (G.P.).<br>
    • <b>Hence proved.</b>
  </div>`,
  '3 Marks',
  [['Applying componendo & dividendo to first pair to get $a/b = b/c$', '1½ Marks'], ['Applying componendo & dividendo to second pair to get $b/c = c/d$', '1 Mark'], ['Concluding $a, b, c, d$ form a G.P.', '½ Mark']]
));

misc.push(createQCard(
  'c11m-ch8-q77', 'Question 13 (Misc)', 'Misc Exercise',
  'Let $S$ be the sum, $P$ the product and $R$ the sum of reciprocals of $n$ terms in a G.P. Prove that $P^2 R^n = S^n$.',
  `<div class="step">
    • Let the G.P. terms be $a, ar, ar^2, \\dots, ar^{n - 1}$.<br>
    • $S = a + ar + \\dots + ar^{n - 1} = \\frac{a(r^n - 1)}{r - 1}$.<br>
    • $P = a \\cdot ar \\dots ar^{n - 1} = a^n r^{n(n - 1)/2} \\implies P^2 = a^{2n} r^{n(n - 1)}$.<br>
    • $R = \\frac{1}{a} + \\frac{1}{ar} + \\dots + \\frac{1}{ar^{n - 1}} = \\frac{1}{a}\\left[\\frac{1 - (1/r)^n}{1 - (1/r)}\\right] = \\frac{1}{a}\\left[\\frac{r^n - 1}{r^n} \\cdot \\frac{r}{r - 1}\\right] = \\frac{r^n - 1}{a r^{n - 1}(r - 1)}$.<br>
    • Now evaluate $P^2 R^n$:<br>
      $$P^2 R^n = [a^{2n} r^{n(n - 1)}] \\times \\left[\\frac{r^n - 1}{a r^{n - 1}(r - 1)}\\right]^n$$<br>
      $$= [a^{2n} r^{n(n - 1)}] \\times \\frac{(r^n - 1)^n}{a^n r^{n(n - 1)} (r - 1)^n}$$<br>
      $$= a^{2n - n} \\frac{(r^n - 1)^n}{(r - 1)^n} = a^n \\left[\\frac{r^n - 1}{r - 1}\\right]^n = \\left[\\frac{a(r^n - 1)}{r - 1}\\right]^n = \\mathbf{S^n}$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '4 Marks',
  [['Finding $S, P^2$, and $R$', '1½ Marks'], ['Evaluating $P^2 R^n$', '1½ Marks'], ['Simplifying to $S^n$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch8-q78', 'Question 14 (Misc)', 'Misc Exercise',
  'If $a, b, c, d$ are in G.P., prove that $(a^n + b^n), (b^n + c^n), (c^n + d^n)$ are in G.P.',
  `<div class="step">
    • Since $a, b, c, d$ are in G.P., let $b = ar, c = ar^2, d = ar^3$.<br>
    • Evaluate each of the three terms:<br>
      - 1st term: $a^n + b^n = a^n + a^n r^n = a^n(1 + r^n)$<br>
      - 2nd term: $b^n + c^n = a^n r^n + a^n r^{2n} = a^n r^n(1 + r^n)$<br>
      - 3rd term: $c^n + d^n = a^n r^{2n} + a^n r^{3n} = a^n r^{2n}(1 + r^n)$<br>
    • Taking ratios of consecutive terms:<br>
      $$\\frac{b^n + c^n}{a^n + b^n} = \\frac{a^n r^n(1 + r^n)}{a^n(1 + r^n)} = r^n$$<br>
      $$\\frac{c^n + d^n}{b^n + c^n} = \\frac{a^n r^{2n}(1 + r^n)}{a^n r^n(1 + r^n)} = r^n$$<br>
    • Since the ratio between consecutive terms is constant ($r^n$), the terms $(a^n + b^n), (b^n + c^n), (c^n + d^n)$ are in G.P.<br>
    • <b>Hence proved.</b>
  </div>`,
  '3 Marks',
  [['Substituting $b = ar, c = ar^2, d = ar^3$', '1 Mark'], ['Evaluating terms with common factor $(1 + r^n)$', '1 Mark'], ['Showing constant ratio $r^n$', '1 Mark']]
));

// Build complete HTML page for Chapter 8
const chapterHtml = `
<section class="chapter-content" id="c11m-ch8">
  <div class="ch-badge" style="display:inline-block; font-size:0.8rem; font-weight:800; background:#ecfdf5; color:#059669; padding:4px 12px; border-radius:20px; text-transform:uppercase; margin-bottom:8px;">NCERT Rationalised 2026–27 • Complete Verbatim Solutions</div>
  <h1 style="font-size:2rem; font-weight:800; color:#0f172a; margin-bottom:12px;">Class 11 Chapter 8: Sequences and Series (अनुक्रम तथा श्रेणी)</h1>
  <p style="font-size:1.05rem; color:#475569; line-height:1.6; margin-bottom:24px;">
    Exhaustive, 100% verbatim solutions for all <b>78 questions</b> from NCERT Class 11 Mathematics Chapter 8. Includes Exercise 8.1 (14 questions on sequences &amp; recurrence relations), Exercise 8.2 (18 questions on Arithmetic Progressions, A.M., and loan amortization), Exercise 8.3 (32 questions on Geometric Progressions, G.M., and compound growth), and Miscellaneous Exercise (14 questions on multi-step progression proofs) with official step-by-step CBSE marking schemes.
  </p>

  <!-- Formula & Theory Summary Cheatsheet -->
  <div class="theory-box" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:20px; margin-bottom:30px;">
    <h3 style="font-size:1.15rem; font-weight:700; color:#1e293b; margin-top:0; margin-bottom:12px;">📘 Core Formulas &amp; Progression Theorems</h3>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; font-size:0.95rem; color:#334155;">
      <div style="background:white; padding:12px 16px; border-radius:8px; border:1px solid #cbd5e1;">
        <strong>Arithmetic Progression (A.P.):</strong><br>
        • General term: $a_n = a + (n - 1)d$.<br>
        • Sum of $n$ terms: $S_n = \\dfrac{n}{2}[2a + (n - 1)d] = \\dfrac{n}{2}(a + l)$.<br>
        • Arithmetic Mean (A.M.): $A = \\dfrac{a + b}{2}$.<br>
        • Insertion of $n$ A.M.s: $d = \\dfrac{b - a}{n + 1}$.
      </div>
      <div style="background:white; padding:12px 16px; border-radius:8px; border:1px solid #cbd5e1;">
        <strong>Geometric Progression (G.P.):</strong><br>
        • General term: $a_n = a r^{n - 1}$.<br>
        • Sum of $n$ terms: $S_n = \\dfrac{a(1 - r^n)}{1 - r} = \\dfrac{a(r^n - 1)}{r - 1}$ ($r \\ne 1$).<br>
        • Geometric Mean (G.M.): $G = \\sqrt{ab}$.<br>
        • Fundamental Inequality: $A \\ge G$ for any positive real numbers $a, b$.
      </div>
    </div>
  </div>

  <!-- Vector SVG Diagram: A.P. (Linear) vs G.P. (Exponential) Growth Comparison -->
  <div class="vector-diagram-container" style="background:linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%); border:1px solid #a7f3d0; border-radius:12px; padding:20px; text-align:center; margin-bottom:30px;">
    <h4 style="margin:0 0 10px 0; color:#047857; font-size:1.1rem; font-weight:700;">📐 Progression Visualisation: Linear Addition (A.P.) vs Exponential Multiplication (G.P.)</h4>
    <svg viewBox="0 0 520 220" style="max-width:100%; height:auto; display:inline-block;" xmlns="http://www.w3.org/2000/svg">
      <!-- Axes -->
      <line x1="50" y1="180" x2="480" y2="180" stroke="#64748b" stroke-width="2"/>
      <line x1="50" y1="180" x2="50" y2="20" stroke="#64748b" stroke-width="2"/>
      <polygon points="485,180 475,175 475,185" fill="#64748b"/>
      <polygon points="50,15 45,25 55,25" fill="#64748b"/>
      <text x="480" y="200" font-size="11" fill="#475569">Term Index (n)</text>
      <text x="40" y="15" font-size="11" fill="#475569">Value</text>

      <!-- A.P. Curve (Linear constant step d) -->
      <path d="M 50 170 L 130 145 L 210 120 L 290 95 L 370 70 L 450 45" stroke="#2563eb" stroke-width="3" fill="none"/>
      <circle cx="50" cy="170" r="4" fill="#2563eb"/>
      <circle cx="130" cy="145" r="4" fill="#2563eb"/>
      <circle cx="210" cy="120" r="4" fill="#2563eb"/>
      <circle cx="290" cy="95" r="4" fill="#2563eb"/>
      <circle cx="370" cy="70" r="4" fill="#2563eb"/>
      <circle cx="450" cy="45" r="4" fill="#2563eb"/>
      <text x="380" y="38" font-size="12" fill="#2563eb" font-weight="bold">A.P. (a_n = a + (n-1)d)</text>

      <!-- G.P. Curve (Exponential multiplying factor r > 1) -->
      <path d="M 50 175 Q 260 170 380 90 T 450 25" stroke="#059669" stroke-width="3" fill="none"/>
      <circle cx="50" cy="175" r="4" fill="#059669"/>
      <circle cx="150" cy="172" r="4" fill="#059669"/>
      <circle cx="250" cy="160" r="4" fill="#059669"/>
      <circle cx="330" cy="130" r="4" fill="#059669"/>
      <circle cx="390" cy="80" r="4" fill="#059669"/>
      <circle cx="440" cy="30" r="4" fill="#059669"/>
      <text x="320" y="155" font-size="12" fill="#059669" font-weight="bold">G.P. (a_n = a r^{n-1})</text>
    </svg>
  </div>

  <div class="ex-div">NCERT Exercise 8.1: Sequences, General Terms &amp; Recurrence Relations (Fibonacci)</div>
${ex8_1.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Exercise 8.2: Arithmetic Progressions (A.P.), Sum of n Terms &amp; Arithmetic Means (A.M.)</div>
${ex8_2.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Exercise 8.3: Geometric Progressions (G.P.), Infinite Sums &amp; Geometric Means (G.M.)</div>
${ex8_3.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Miscellaneous Exercise on Chapter 8: Combined Progressions, Reciprocal Sums &amp; Function Recurrences</div>
${misc.join('\n')}

  <div class="chapter-nav-btns" style="margin-top:40px; display:flex; justify-content:space-between; align-items:center;">
    <button class="ch-nav-btn prev" onclick="showChapter(7)" style="padding:10px 24px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer;">← Previous: Chapter 7 (Binomial Theorem)</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})" style="padding:10px 20px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer;">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(9)" style="padding:10px 24px; border-radius:8px; border:none; background:#ff6b00; color:white; font-weight:700; cursor:pointer;">Next: Chapter 9 (Straight Lines) →</button>
  </div>
</section>
`;

// Write ch8.html
const ch8Path = path.join(outDir, 'ch8.html');
fs.writeFileSync(ch8Path, chapterHtml.trim(), 'utf8');
console.log(`Successfully generated: ${ch8Path} (${chapterHtml.length} bytes)`);

// Update chapters-data.js so chapters load instantly offline/online
const dataJsPath = path.join(outDir, 'chapters-data.js');
let existingData = '';
if (fs.existsSync(dataJsPath)) {
  existingData = fs.readFileSync(dataJsPath, 'utf8');
}

// Append or update window.CHAPTER_DATA[8]
if (!existingData.includes('window.CHAPTER_DATA[8] =')) {
  const ch8Entry = `\nwindow.CHAPTER_DATA[8] = ${JSON.stringify(chapterHtml.trim())};\n`;
  fs.appendFileSync(dataJsPath, ch8Entry, 'utf8');
  console.log(`Appended Chapter 8 to preloaded cache: ${dataJsPath}`);
} else {
  // Replace window.CHAPTER_DATA[8] block
  const regex = /window\.CHAPTER_DATA\[8\]\s*=\s*[\s\S]*?;\n/g;
  const updated = existingData.replace(regex, `window.CHAPTER_DATA[8] = ${JSON.stringify(chapterHtml.trim())};\n`);
  fs.writeFileSync(dataJsPath, updated, 'utf8');
  console.log(`Updated Chapter 8 in preloaded cache: ${dataJsPath}`);
}
