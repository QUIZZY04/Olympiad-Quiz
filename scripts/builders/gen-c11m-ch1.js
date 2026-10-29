// scripts/builders/gen-c11m-ch1.js
// Complete, verbatim NCERT generator for Class 11 Mathematics Chapter 1: Sets (All 56 Questions)
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
const ex1_1 = [];
const ex1_2 = [];
const ex1_3 = [];
const ex1_4 = [];
const ex1_5 = [];
const misc = [];

// ============================================================================
// EXERCISE 1.1 (Questions 1 to 6)
// ============================================================================
ex1_1.push(createQCard(
  'c11m-ch1-q1', 'Question 1', 'Exercise 1.1',
  'Which of the following are sets? Justify your answer.<br>' +
  '(i) The collection of all the months of a year beginning with the letter J.<br>' +
  '(ii) The collection of ten most talented writers of India.<br>' +
  '(iii) A team of eleven best-cricket batsmen of the world.<br>' +
  '(iv) The collection of all boys in your class.<br>' +
  '(v) The collection of all natural numbers less than 100.<br>' +
  '(vi) A collection of novels written by the writer Munshi Prem Chand.<br>' +
  '(vii) The collection of all even integers.<br>' +
  '(viii) The collection of questions in this Chapter.<br>' +
  '(ix) A collection of most dangerous animals of the world.',
  `<p><strong>Concept Definition:</strong> A <em>set</em> is a well-defined collection of distinct objects. That means there must exist an unambiguous, universal rule to determine whether any given object belongs to the collection or not.</p>
  <div class="step">
    • <strong>(i) Months of a year beginning with 'J':</strong> {January, June, July}. The collection is well-defined and identical for everyone. <strong>It is a set.</strong><br><br>
    • <strong>(ii) Ten most talented writers of India:</strong> The criterion "most talented" is subjective, vague, and varies from person to person. <strong>It is not a set.</strong><br><br>
    • <strong>(iii) Team of eleven best-cricket batsmen of the world:</strong> The definition of "best batsmen" is subjective and non-measurable. <strong>It is not a set.</strong><br><br>
    • <strong>(iv) Collection of all boys in your class:</strong> The membership is clearly defined, identifiable, and verifiable. <strong>It is a set.</strong><br><br>
    • <strong>(v) Collection of all natural numbers less than 100:</strong> {1, 2, 3, ..., 99} is precisely determined. <strong>It is a set.</strong><br><br>
    • <strong>(vi) Collection of novels written by Munshi Prem Chand:</strong> The exact bibliographic list of novels by Prem Chand is definite and historical. <strong>It is a set.</strong><br><br>
    • <strong>(vii) Collection of all even integers:</strong> {..., −4, −2, 0, 2, 4, ...} is mathematically well-defined. <strong>It is a set.</strong><br><br>
    • <strong>(viii) Collection of questions in this Chapter:</strong> Finite, numbered, and fixed in the textbook. <strong>It is a set.</strong><br><br>
    • <strong>(ix) Collection of most dangerous animals of the world:</strong> "Dangerous" is subjective and depends on individual perspectives. <strong>It is not a set.</strong>
  </div>`,
  '3 Marks',
  [['Definition of well-defined set stated', '1 Mark'], ['Correct justification for items (i) to (v)', '1 Mark'], ['Correct justification for items (vi) to (ix)', '1 Mark']]
));

ex1_1.push(createQCard(
  'c11m-ch1-q2', 'Question 2', 'Exercise 1.1',
  'Let A = {1, 2, 3, 4, 5, 6}. Insert the appropriate symbol ∈ or ∉ in the blank spaces:<br>' +
  '(i) 5 ___ A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (ii) 8 ___ A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iii) 0 ___ A<br>' +
  '(iv) 4 ___ A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (v) 2 ___ A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (vi) 10 ___ A',
  `<p><strong>Notation Rule:</strong> The symbol <strong>∈</strong> signifies 'belongs to' (an element of the set), and <strong>∉</strong> signifies 'does not belong to'.</p>
  <div class="step">
    • (i) 5 <strong>∈</strong> A &nbsp;(5 is present in set A)<br>
    • (ii) 8 <strong>∉</strong> A &nbsp;(8 is not in set A)<br>
    • (iii) 0 <strong>∉</strong> A &nbsp;(0 is not an element of A)<br>
    • (iv) 4 <strong>∈</strong> A &nbsp;(4 is an element of A)<br>
    • (v) 2 <strong>∈</strong> A &nbsp;(2 is an element of A)<br>
    • (vi) 10 <strong>∉</strong> A &nbsp;(10 is not in set A)
  </div>`,
  '2 Marks',
  [['Correctly identifying belonging elements (i, iv, v)', '1 Mark'], ['Correctly identifying non-belonging elements (ii, iii, vi)', '1 Mark']]
));

ex1_1.push(createQCard(
  'c11m-ch1-q3', 'Question 3', 'Exercise 1.1',
  'Write the following sets in roster form:<br>' +
  '(i) A = {x : x is an integer and −3 ≤ x &lt; 7}<br>' +
  '(ii) B = {x : x is a natural number less than 6}<br>' +
  '(iii) C = {x : x is a two-digit natural number such that the sum of its digits is 8}<br>' +
  '(iv) D = {x : x is a prime number which is divisor of 60}<br>' +
  '(v) E = The set of all letters in the word TRIGONOMETRY<br>' +
  '(vi) F = The set of all letters in the word BETTER',
  `<p><strong>Roster Form Rule:</strong> In roster form, all elements of the set are listed, separated by commas, and enclosed within braces { }. Elements are not repeated.</p>
  <div class="step">
    • <strong>(i) A:</strong> Integers $x$ satisfying $-3 \\le x < 7$:<br>
    $$\\mathbf{A = \\{-3, -2, -1, 0, 1, 2, 3, 4, 5, 6\\}}$$<br>
    • <strong>(ii) B:</strong> Natural numbers less than 6 ($1, 2, 3, 4, 5$):<br>
    $$\\mathbf{B = \\{1, 2, 3, 4, 5\\}}$$<br>
    • <strong>(iii) C:</strong> Two-digit numbers whose digits add up to 8 ($1+7, 2+6, 3+5, 4+4, 5+3, 6+2, 7+1, 8+0$):<br>
    $$\\mathbf{C = \\{17, 26, 35, 44, 53, 62, 71, 80\\}}$$<br>
    • <strong>(iv) D:</strong> Prime divisors of 60. Prime factorisation of $60 = 2^2 \\times 3 \\times 5$:<br>
    $$\\mathbf{D = \\{2, 3, 5\\}}$$<br>
    • <strong>(v) E:</strong> Unique letters in 'TRIGONOMETRY':<br>
    $$\\mathbf{E = \\{T, R, I, G, O, N, M, E, Y\\}}$$<br>
    • <strong>(vi) F:</strong> Unique letters in 'BETTER':<br>
    $$\\mathbf{F = \\{B, E, T, R\\}}$$
  </div>`,
  '3 Marks',
  [['Roster form of integer and natural number sets (i, ii)', '1 Mark'], ['Digit sum and prime factorisation sets (iii, iv)', '1 Mark'], ['Eliminating duplicate letters in words (v, vi)', '1 Mark']]
));

ex1_1.push(createQCard(
  'c11m-ch1-q4', 'Question 4', 'Exercise 1.1',
  'Write the following sets in the set-builder form:<br>' +
  '(i) {3, 6, 9, 12}<br>' +
  '(ii) {2, 4, 8, 16, 32}<br>' +
  '(iii) {5, 25, 125, 625}<br>' +
  '(iv) {2, 4, 6, ...}<br>' +
  '(v) {1, 4, 9, ..., 100}',
  `<p><strong>Set-Builder Form:</strong> Characterising the common property satisfied by all elements in the set.</p>
  <div class="step">
    • <strong>(i) {3, 6, 9, 12}:</strong> Multiples of 3 up to $3 \\times 4$:<br>
    $$\\mathbf{\\{x : x = 3n, \\, n \\in \\mathbb{N} \\text{ and } 1 \\le n \\le 4\\}}$$<br>
    • <strong>(ii) {2, 4, 8, 16, 32}:</strong> Powers of 2 from $2^1$ to $2^5$:<br>
    $$\\mathbf{\\{x : x = 2^n, \\, n \\in \\mathbb{N} \\text{ and } 1 \\le n \\le 5\\}}$$<br>
    • <strong>(iii) {5, 25, 125, 625}:</strong> Powers of 5 from $5^1$ to $5^4$:<br>
    $$\\mathbf{\\{x : x = 5^n, \\, n \\in \\mathbb{N} \\text{ and } 1 \\le n \\le 4\\}}$$<br>
    • <strong>(iv) {2, 4, 6, ...}:</strong> Set of even natural numbers:<br>
    $$\\mathbf{\\{x : x \\text{ is an even natural number}\\} \\quad \\text{or} \\quad \\{x : x = 2n, \\, n \\in \\mathbb{N}\\}}$$<br>
    • <strong>(v) {1, 4, 9, ..., 100}:</strong> Squares of natural numbers up to $10^2$ ($1^2, 2^2, ..., 10^2$):<br>
    $$\\mathbf{\\{x : x = n^2, \\, n \\in \\mathbb{N} \\text{ and } 1 \\le n \\le 10\\}}$$
  </div>`,
  '3 Marks',
  [['Correct formulas for linear multiple & exponential powers (i, ii, iii)', '1.5 Marks'], ['Correct formulations for infinite even & bounded square sets (iv, v)', '1.5 Marks']]
));

ex1_1.push(createQCard(
  'c11m-ch1-q5', 'Question 5', 'Exercise 1.1',
  'List all the elements of the following sets:<br>' +
  '(i) A = {x : x is an odd natural number}<br>' +
  '(ii) B = {x : x is an integer, −1/2 &lt; x &lt; 9/2}<br>' +
  '(iii) C = {x : x is an integer, x² ≤ 4}<br>' +
  '(iv) D = {x : x is a letter in the word "LOYAL"}<br>' +
  '(v) E = {x : x is a month of a year not having 31 days}<br>' +
  '(vi) F = {x : x is a consonant in the English alphabet which precedes k}',
  `<div class="step">
    • <strong>(i) A:</strong> Odd natural numbers:<br>
    $$\\mathbf{A = \\{1, 3, 5, 7, 9, ...\\}}$$<br>
    • <strong>(ii) B:</strong> Integers strictly between $-0.5$ and $4.5$ ($0, 1, 2, 3, 4$):<br>
    $$\\mathbf{B = \\{0, 1, 2, 3, 4\\}}$$<br>
    • <strong>(iii) C:</strong> Integers whose square is $\\le 4$, i.e. $x \\in \\{-2, -1, 0, 1, 2\\}$:<br>
    $$\\mathbf{C = \\{-2, -1, 0, 1, 2\\}}$$<br>
    • <strong>(iv) D:</strong> Unique letters in 'LOYAL' (L appears twice, write once):<br>
    $$\\mathbf{D = \\{L, O, Y, A\\}}$$<br>
    • <strong>(v) E:</strong> Calendar months with fewer than 31 days:<br>
    $$\\mathbf{E = \\{\\text{February, April, June, September, November}\\}}$$<br>
    • <strong>(vi) F:</strong> Consonants before 'k' (letters before 'k': a, b, c, d, e, f, g, h, i, j; vowels are a, e, i):<br>
    $$\\mathbf{F = \\{b, c, d, f, g, h, j\\}}$$
  </div>`,
  '3 Marks',
  [['Identifying numerical sets (i, ii, iii)', '1.5 Marks'], ['Identifying word, calendar, and phonetic sets (iv, v, vi)', '1.5 Marks']]
));

ex1_1.push(createQCard(
  'c11m-ch1-q6', 'Question 6', 'Exercise 1.1',
  'Match each of the set on the left in the roster form with the same set on the right described in set-builder form:<br>' +
  '(i) {1, 2, 3, 6} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (a) {x : x is a prime number and a divisor of 6}<br>' +
  '(ii) {2, 3} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (b) {x : x is an odd natural number less than 10}<br>' +
  '(iii) {M, A, T, H, E, I, C, S} &nbsp;&nbsp; (c) {x : x is a natural number and a divisor of 6}<br>' +
  '(iv) {1, 3, 5, 7, 9} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (d) {x : x is a letter of the word MATHEMATICS}',
  `<div class="step">
    • <strong>(i) {1, 2, 3, 6}:</strong> All natural divisors of 6. Matches with <strong>(c)</strong>.<br>
    • <strong>(ii) {2, 3}:</strong> Prime numbers that divide 6. Matches with <strong>(a)</strong>.<br>
    • <strong>(iii) {M, A, T, H, E, I, C, S}:</strong> Distinct letters in 'MATHEMATICS'. Matches with <strong>(d)</strong>.<br>
    • <strong>(iv) {1, 3, 5, 7, 9}:</strong> Odd natural numbers less than 10. Matches with <strong>(b)</strong>.<br><br>
    <strong>Summary of Matches:</strong><br>
    <strong>(i) $\\leftrightarrow$ (c), &nbsp; (ii) $\\leftrightarrow$ (a), &nbsp; (iii) $\\leftrightarrow$ (d), &nbsp; (iv) $\\leftrightarrow$ (b)</strong>
  </div>`,
  '2 Marks',
  [['Matching divisors and prime factors (i, ii)', '1 Mark'], ['Matching word letters and odd numbers (iii, iv)', '1 Mark']]
));

// ============================================================================
// EXERCISE 1.2 (Questions 7 to 12)
// ============================================================================
ex1_2.push(createQCard(
  'c11m-ch1-q7', 'Question 1', 'Exercise 1.2',
  'Which of the following are examples of the null set?<br>' +
  '(i) Set of odd natural numbers divisible by 2.<br>' +
  '(ii) Set of even prime numbers.<br>' +
  '(iii) {x : x is a natural number, x &lt; 5 and x &gt; 7}.<br>' +
  '(iv) {y : y is a point common to any two parallel lines}.',
  `<p><strong>Definition:</strong> A set containing no elements is called the <em>empty set</em>, <em>null set</em>, or <em>void set</em>, denoted by $\\phi$ or $\\{\\}$.</p>
  <div class="step">
    • <strong>(i) Odd natural numbers divisible by 2:</strong> By definition, no odd number is divisible by 2. The set contains no elements.<br>
    <strong>Hence, it is a null set.</strong><br><br>
    • <strong>(ii) Set of even prime numbers:</strong> The number $2$ is an even prime number. So the set is $\\{2\\} \\ne \\phi$.<br>
    <strong>Hence, it is not a null set.</strong><br><br>
    • <strong>(iii) {x : x ∈ N, x &lt; 5 and x &gt; 7}:</strong> No natural number can simultaneously be less than 5 and greater than 7.<br>
    <strong>Hence, it is a null set.</strong><br><br>
    • <strong>(iv) Points common to two parallel lines:</strong> Parallel lines never intersect by definition; they have no points in common.<br>
    <strong>Hence, it is a null set.</strong>
  </div>`,
  '2 Marks',
  [['Definition of null set', '0.5 Mark'], ['Correct analysis of parts (i), (iii), (iv) as null sets', '1 Mark'], ['Correct analysis of part (ii) as non-empty set {2}', '0.5 Mark']]
));

ex1_2.push(createQCard(
  'c11m-ch1-q8', 'Question 2', 'Exercise 1.2',
  'Which of the following sets are finite or infinite?<br>' +
  '(i) The set of months of a year.<br>' +
  '(ii) {1, 2, 3, ...}<br>' +
  '(iii) {1, 2, 3, ..., 99, 100}<br>' +
  '(iv) The set of positive integers greater than 100.<br>' +
  '(v) The set of prime numbers less than 99.',
  `<p><strong>Definitions:</strong> A set is <em>finite</em> if it contains a definite count of elements (or is empty). Otherwise, it is <em>infinite</em>.</p>
  <div class="step">
    • <strong>(i) Set of months of a year:</strong> Exactly 12 months. Definite count $\\rightarrow$ <strong>Finite set.</strong><br>
    • <strong>(ii) {1, 2, 3, ...}:</strong> Natural numbers continue indefinitely without bound $\\rightarrow$ <strong>Infinite set.</strong><br>
    • <strong>(iii) {1, 2, 3, ..., 99, 100}:</strong> Exactly 100 elements $\\rightarrow$ <strong>Finite set.</strong><br>
    • <strong>(iv) Positive integers greater than 100:</strong> {101, 102, 103, ...} has no upper bound $\\rightarrow$ <strong>Infinite set.</strong><br>
    • <strong>(v) Prime numbers less than 99:</strong> Primes {2, 3, 5, 7, ..., 97} is a definite count (25 primes) $\\rightarrow$ <strong>Finite set.</strong>
  </div>`,
  '2.5 Marks',
  [['Identifying finite sets (i, iii, v)', '1.5 Marks'], ['Identifying infinite unbounded sets (ii, iv)', '1 Mark']]
));

ex1_2.push(createQCard(
  'c11m-ch1-q9', 'Question 3', 'Exercise 1.2',
  'State whether each of the following set is finite or infinite:<br>' +
  '(i) The set of lines which are parallel to the x-axis.<br>' +
  '(ii) The set of letters in the English alphabet.<br>' +
  '(iii) The set of numbers which are multiple of 5.<br>' +
  '(iv) The set of animals living on the earth.<br>' +
  '(v) The set of circles passing through the origin (0,0).',
  `<div class="step">
    • <strong>(i) Lines parallel to the x-axis:</strong> In the Cartesian plane, infinitely many horizontal lines $y = c$ (for every real $c$) can be drawn. $\\rightarrow$ <strong>Infinite set.</strong><br><br>
    • <strong>(ii) Letters in the English alphabet:</strong> Exactly 26 letters (A to Z). $\\rightarrow$ <strong>Finite set.</strong><br><br>
    • <strong>(iii) Numbers which are multiples of 5:</strong> {..., −15, −10, −5, 0, 5, 10, 15, ...} has no beginning or end. $\\rightarrow$ <strong>Infinite set.</strong><br><br>
    • <strong>(iv) Animals living on the earth:</strong> Although the number is extremely large, the count of living animals at any given instant is a finite whole number. $\\rightarrow$ <strong>Finite set.</strong><br><br>
    • <strong>(v) Circles passing through origin (0, 0):</strong> Circles with center $(h, k)$ and radius $r = \\sqrt{h^2+k^2}$ can be drawn for any choice of center $(h, k) \\in \\mathbb{R}^2$. There are infinitely many such circles. $\\rightarrow$ <strong>Infinite set.</strong>
  </div>`,
  '2.5 Marks',
  [['Geometric infinite sets (lines & circles)', '1 Mark'], ['English alphabet & biological finite counts', '1 Mark'], ['Arithmetic multiples infinite set', '0.5 Mark']]
));

ex1_2.push(createQCard(
  'c11m-ch1-q10', 'Question 4', 'Exercise 1.2',
  'In the following, state whether A = B or not:<br>' +
  '(i) A = {a, b, c, d}, B = {d, c, b, a}<br>' +
  '(ii) A = {4, 8, 12, 16}, B = {8, 4, 16, 18}<br>' +
  '(iii) A = {2, 4, 6, 8, 10}, B = {x : x is positive even integer and x ≤ 10}<br>' +
  '(iv) A = {x : x is a multiple of 10}, B = {10, 15, 20, 25, 30, ...}',
  `<p><strong>Rule of Equality:</strong> Two sets $A$ and $B$ are equal ($A = B$) if and only if every element of $A$ is in $B$ and every element of $B$ is in $A$. Order of elements does not matter.</p>
  <div class="step">
    • <strong>(i) A = {a, b, c, d}, B = {d, c, b, a}:</strong> Both sets contain exactly the same four elements. <strong>Yes, A = B.</strong><br><br>
    • <strong>(ii) A = {4, 8, 12, 16}, B = {8, 4, 16, 18}:</strong> $12 \\in A$ but $12 \\notin B$, and $18 \\in B$ but $18 \\notin A$. <strong>No, A ≠ B.</strong><br><br>
    • <strong>(iii) A = {2, 4, 6, 8, 10}, B = {x : x is positive even integer and x ≤ 10}:</strong> The positive even integers $\\le 10$ are $\\{2, 4, 6, 8, 10\\}$. Exactly identical. <strong>Yes, A = B.</strong><br><br>
    • <strong>(iv) A = {10, 20, 30, 40, ...}, B = {10, 15, 20, 25, ...}:</strong> $15 \\in B$ but $15 \\notin A$ (since 15 is not a multiple of 10). <strong>No, A ≠ B.</strong>
  </div>`,
  '2 Marks',
  [['Equal sets verification (i, iii)', '1 Mark'], ['Non-equal counterexample justification (ii, iv)', '1 Mark']]
));

ex1_2.push(createQCard(
  'c11m-ch1-q11', 'Question 5', 'Exercise 1.2',
  'Are the following pair of sets equal? Give reasons.<br>' +
  '(i) A = {2, 3}, B = {x : x is solution of x² + 5x + 6 = 0}<br>' +
  '(ii) A = {x : x is a letter in the word FOLLOW}, B = {y : y is a letter in the word WOLF}',
  `<div class="step">
    • <strong>(i) Pair A = {2, 3} and B:</strong><br>
    Solve quadratic equation: $x^2 + 5x + 6 = 0$<br>
    $\\implies (x + 2)(x + 3) = 0 \\implies x = -2 \\text{ or } x = -3$.<br>
    Thus, $B = \\{-2, -3\\}$.<br>
    Since $2 \\in A$ but $2 \\notin B$, and $-2 \\in B$ but $-2 \\notin A$, <strong>A ≠ B</strong>.<br><br>
    • <strong>(ii) Pair A and B:</strong><br>
    Letters in 'FOLLOW': $A = \\{F, O, L, W\\}$.<br>
    Letters in 'WOLF': $B = \\{W, O, L, F\\}$.<br>
    Since both sets contain precisely the same four elements $\{F, O, L, W\}$, <strong>A = B</strong>.
  </div>`,
  '2 Marks',
  [['Solving quadratic equation with roots -2, -3 and concluding A ≠ B', '1 Mark'], ['Listing distinct letters of FOLLOW and WOLF and concluding A = B', '1 Mark']]
));

ex1_2.push(createQCard(
  'c11m-ch1-q12', 'Question 6', 'Exercise 1.2',
  'From the sets given below, select equal sets:<br>' +
  'A = {2, 4, 8, 12}, &nbsp; B = {1, 2, 3, 4}, &nbsp; C = {4, 8, 12, 14}, &nbsp; D = {3, 1, 4, 2},<br>' +
  'E = {−1, 1}, &nbsp; F = {0, a}, &nbsp; G = {1, −1}, &nbsp; H = {0, 1}',
  `<div class="step">
    Compare each set pair:
    <ul>
      <li>$B = \\{1, 2, 3, 4\\}$ and $D = \\{3, 1, 4, 2\\}$: They contain exactly the same elements. Hence, <strong>B = D</strong>.</li>
      <li>$E = \\{-1, 1\\}$ and $G = \\{1, -1\\}$: Both contain elements $-1$ and $1$. Hence, <strong>E = G</strong>.</li>
      <li>$A = \\{2, 4, 8, 12\\}$: No other set has this exact combination ($C$ has 14 instead of 2).</li>
      <li>$F = \\{0, a\\}$ and $H = \\{0, 1\\}$: Elements differ ($a \\ne 1$).</li>
    </ul>
    <strong>Conclusion:</strong> The only equal sets are <strong>B = D</strong> and <strong>E = G</strong>.
  </div>`,
  '2 Marks',
  [['Identifying B = D', '1 Mark'], ['Identifying E = G', '1 Mark']]
));

// ============================================================================
// EXERCISE 1.3 (Questions 13 to 21)
// ============================================================================
ex1_3.push(createQCard(
  'c11m-ch1-q13', 'Question 1', 'Exercise 1.3',
  'Make correct statements by filling in the symbols ⊂ or ⊄ in the blank spaces:<br>' +
  '(i) {2, 3, 4} ___ {1, 2, 3, 4, 5}<br>' +
  '(ii) {a, b, c} ___ {b, c, d}<br>' +
  '(iii) {x : x is a student of Class XI of your school} ___ {x : x is student of your school}<br>' +
  '(iv) {x : x is a circle in the plane} ___ {x : x is a circle in the same plane with radius 1 unit}<br>' +
  '(v) {x : x is a triangle in a plane} ___ {x : x is a rectangle in the plane}<br>' +
  '(vi) {x : x is an equilateral triangle in a plane} ___ {x : x is a triangle in the same plane}<br>' +
  '(vii) {x : x is an even natural number} ___ {x : x is an integer}',
  `<p><strong>Subset Condition:</strong> $A \\subset B$ if every element of $A$ is also an element of $B$. If at least one element of $A$ is not in $B$, then $A \\not\\subset B$.</p>
  <div class="step">
    • (i) {2, 3, 4} <strong>⊂</strong> {1, 2, 3, 4, 5} &nbsp;(all elements 2, 3, 4 belong to the RHS)<br>
    • (ii) {a, b, c} <strong>⊄</strong> {b, c, d} &nbsp;(element $a$ does not belong to RHS)<br>
    • (iii) {Student of Class XI} <strong>⊂</strong> {Student of your school} &nbsp;(every Class XI student is a school student)<br>
    • (iv) {Circle in plane} <strong>⊄</strong> {Circle with radius 1 unit} &nbsp;(a circle can have radius 2, 3, etc., not in RHS)<br>
    • (v) {Triangle in plane} <strong>⊄</strong> {Rectangle in plane} &nbsp;(triangles are 3-sided, rectangles are 4-sided)<br>
    • (vi) {Equilateral triangle in plane} <strong>⊂</strong> {Triangle in same plane} &nbsp;(every equilateral triangle is a triangle)<br>
    • (vii) {Even natural numbers} <strong>⊂</strong> {Integers} &nbsp;({2, 4, 6, ...} is a subset of {..., -2, -1, 0, 1, 2, ...})
  </div>`,
  '3 Marks',
  [['Correctly identifying numerical subsets (i, vii)', '1 Mark'], ['Correctly identifying geometric relations (iv, v, vi)', '1 Mark'], ['Correctly identifying linguistic/school relations (ii, iii)', '1 Mark']]
));

ex1_3.push(createQCard(
  'c11m-ch1-q14', 'Question 2', 'Exercise 1.3',
  'Examine whether the following statements are true or false:<br>' +
  '(i) {a, b} ⊄ {b, c, a}<br>' +
  '(ii) {a, e} ⊂ {x : x is a vowel in English alphabet}<br>' +
  '(iii) {1, 2, 3} ⊂ {1, 3, 5}<br>' +
  '(iv) {a} ⊂ {a, b, c}<br>' +
  '(v) {a} ∈ {a, b, c}<br>' +
  '(vi) {x : x is an even natural number less than 6} ⊂ {x : x is a natural number which divides 36}',
  `<div class="step">
    • <strong>(i) {a, b} ⊄ {b, c, a}:</strong> Both $a, b$ belong to $\{b, c, a\}$, so $\{a, b\} \\subset \\{b, c, a\\}$. Hence, statement is <strong>False</strong>.<br><br>
    • <strong>(ii) {a, e} ⊂ {vowels}:</strong> English vowels are $\{a, e, i, o, u\}$. Since $a, e$ are vowels, the statement is <strong>True</strong>.<br><br>
    • <strong>(iii) {1, 2, 3} ⊂ {1, 3, 5}:</strong> The element $2 \\in \\{1, 2, 3\\}$ but $2 \\notin \\{1, 3, 5\\}$. Hence, statement is <strong>False</strong>.<br><br>
    • <strong>(iv) {a} ⊂ {a, b, c}:</strong> Element $a$ belongs to $\{a, b, c\}$. Hence, subset relation is <strong>True</strong>.<br><br>
    • <strong>(v) {a} ∈ {a, b, c}:</strong> The elements of $\{a, b, c\}$ are letters $a, b, c$, not the set $\{a\}$. Hence, statement is <strong>False</strong> ($a \\in \\{a, b, c\\}$, but $\\{a\\} \\notin \\{a, b, c\\}$).<br><br>
    • <strong>(vi) LHS:</strong> Even natural numbers less than 6 = $\{2, 4\}$.<br>
    <strong>RHS:</strong> Natural numbers dividing 36 = $\{1, 2, 3, 4, 6, 9, 12, 18, 36\}$.<br>
    Since $2 \\in \\text{RHS}$ and $4 \\in \\text{RHS}$, $\{2, 4\} \\subset \\text{RHS}$. Statement is <strong>True</strong>.
  </div>`,
  '3 Marks',
  [['Analysis of set vs element membership (iv, v)', '1 Mark'], ['Divisibility and vowel conditions (ii, vi)', '1 Mark'], ['Counterexample justifications for false statements (i, iii)', '1 Mark']]
));

ex1_3.push(createQCard(
  'c11m-ch1-q15', 'Question 3', 'Exercise 1.3',
  'Let A = {1, 2, {3, 4}, 5}. Which of the following statements are incorrect and why?<br>' +
  '(i) {3, 4} ⊂ A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (ii) {3, 4} ∈ A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iii) {{3, 4}} ⊂ A<br>' +
  '(iv) 1 ∈ A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (v) 1 ⊂ A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (vi) {1, 2, 5} ⊂ A<br>' +
  '(vii) {1, 2, 5} ∈ A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (viii) {1, 2, 3} ⊂ A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (ix) Φ ∈ A<br>' +
  '(x) Φ ⊂ A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (xi) {Φ} ⊂ A',
  `<p><strong>Key Concept:</strong> The elements of set $A$ are: $1$, $2$, the set $\{3, 4\}$, and $5$.</p>
  <div class="step">
    • <strong>(i) {3, 4} ⊂ A:</strong> <strong>Incorrect.</strong> $\{3, 4\}$ is an element of $A$, so $\{3, 4\} \\in A$. For it to be a subset, its members 3 and 4 must belong to $A$, but $3 \\notin A$ and $4 \\notin A$.<br><br>
    • <strong>(ii) {3, 4} ∈ A:</strong> <strong>Correct.</strong> $\{3, 4\}$ is directly an element of $A$.<br><br>
    • <strong>(iii) {{3, 4}} ⊂ A:</strong> <strong>Correct.</strong> The element of this singleton set is $\{3, 4\}$, which is in $A$.<br><br>
    • <strong>(iv) 1 ∈ A:</strong> <strong>Correct.</strong> 1 is an element of $A$.<br><br>
    • <strong>(v) 1 ⊂ A:</strong> <strong>Incorrect.</strong> An element cannot be a subset; only a set enclosed in braces like $\{1\} \\subset A$.<br><br>
    • <strong>(vi) {1, 2, 5} ⊂ A:</strong> <strong>Correct.</strong> Since $1, 2, 5 \\in A$.<br><br>
    • <strong>(vii) {1, 2, 5} ∈ A:</strong> <strong>Incorrect.</strong> $\{1, 2, 5\}$ is a subset, not an element of $A$.<br><br>
    • <strong>(viii) {1, 2, 3} ⊂ A:</strong> <strong>Incorrect.</strong> $3$ is not an element of $A$ (it is inside $\{3, 4\}$).<br><br>
    • <strong>(ix) Φ ∈ A:</strong> <strong>Incorrect.</strong> $\\phi$ is not an element listed inside $A$.<br><br>
    • <strong>(x) Φ ⊂ A:</strong> <strong>Correct.</strong> The empty set $\\phi$ is a subset of every set.<br><br>
    • <strong>(xi) {Φ} ⊂ A:</strong> <strong>Incorrect.</strong> For $\{\\phi\} \\subset A$, we must have $\\phi \\in A$, which is false.
  </div>`,
  '4 Marks',
  [['Distinguishing element vs subset for nested set {3, 4} (i, ii, iii)', '1.5 Marks'], ['Distinguishing element vs set for 1 and {1, 2, 5} (iv, v, vi, vii, viii)', '1.5 Marks'], ['Properties of empty set Φ as element vs subset (ix, x, xi)', '1 Mark']]
));

ex1_3.push(createQCard(
  'c11m-ch1-q16', 'Question 4', 'Exercise 1.3',
  'Write down all the subsets of the following sets:<br>' +
  '(i) {a}<br>' +
  '(ii) {a, b}<br>' +
  '(iii) {1, 2, 3}<br>' +
  '(iv) Φ',
  `<p><strong>Theorem:</strong> A set containing $n$ elements has exactly $2^n$ subsets.</p>
  <div class="step">
    • <strong>(i) {a}:</strong> $n = 1 \\implies 2^1 = 2$ subsets:<br>
    <strong>Φ, {a}</strong><br><br>
    • <strong>(ii) {a, b}:</strong> $n = 2 \\implies 2^2 = 4$ subsets:<br>
    <strong>Φ, {a}, {b}, {a, b}</strong><br><br>
    • <strong>(iii) {1, 2, 3}:</strong> $n = 3 \\implies 2^3 = 8$ subsets:<br>
    <strong>Φ, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}</strong><br><br>
    • <strong>(iv) Φ:</strong> $n = 0 \\implies 2^0 = 1$ subset:<br>
    <strong>Φ</strong>
  </div>`,
  '2 Marks',
  [['Listing subsets of 1-element and 2-element sets', '1 Mark'], ['Listing all 8 subsets of 3-element set and Φ', '1 Mark']]
));

ex1_3.push(createQCard(
  'c11m-ch1-q17', 'Question 5', 'Exercise 1.3',
  'How many elements has P(A), if A = Φ?',
  `<div class="step">
    Given $A = \\phi$, the number of elements in $A$ is $n(A) = 0$.<br>
    The power set $P(A)$ is the collection of all subsets of $A$.<br>
    Number of elements in $P(A) = 2^{n(A)} = 2^0 = 1$.<br>
    Explicitly: $P(A) = \\{\\phi\\}$.<br>
    <strong>Answer: P(A) has 1 element.</strong>
  </div>`,
  '1 Mark',
  [['Formula $2^n$ applied for $n=0$ with final answer 1', '1 Mark']]
));

ex1_3.push(createQCard(
  'c11m-ch1-q18', 'Question 6', 'Exercise 1.3',
  'Write the following as intervals:<br>' +
  '(i) {x : x ∈ R, −4 &lt; x ≤ 6}<br>' +
  '(ii) {x : x ∈ R, −12 &lt; x &lt; −10}<br>' +
  '(iii) {x : x ∈ R, 0 ≤ x &lt; 7}<br>' +
  '(iv) {x : x ∈ R, 3 ≤ x ≤ 4}',
  `<p><strong>Interval Notation:</strong> Strict inequality ($<$ or $>$) uses open parenthesis $($ or $)$. Inclusive inequality ($\le$ or $\ge$) uses square bracket $[$ or $]$.</p>
  <div class="step">
    • (i) $-4 < x \\le 6 \\implies$ <strong>(−4, 6]</strong> &nbsp;(Open at -4, closed at 6)<br>
    • (ii) $-12 < x < -10 \\implies$ <strong>(−12, −10)</strong> &nbsp;(Open at both ends)<br>
    • (iii) $0 \\le x < 7 \\implies$ <strong>[0, 7)</strong> &nbsp;(Closed at 0, open at 7)<br>
    • (iv) $3 \\le x \\le 4 \\implies$ <strong>[3, 4]</strong> &nbsp;(Closed at both ends)
  </div>`,
  '2 Marks',
  [['Semi-open intervals (i, iii)', '1 Mark'], ['Open and closed intervals (ii, iv)', '1 Mark']]
));

ex1_3.push(createQCard(
  'c11m-ch1-q19', 'Question 7', 'Exercise 1.3',
  'Write the following intervals in set-builder form:<br>' +
  '(i) (−3, 0)<br>' +
  '(ii) [6, 12]<br>' +
  '(iii) (6, 12]<br>' +
  '(iv) [−23, 5)',
  `<div class="step">
    • (i) (−3, 0) = <strong>{x : x ∈ R, −3 &lt; x &lt; 0}</strong><br>
    • (ii) [6, 12] = <strong>{x : x ∈ R, 6 ≤ x ≤ 12}</strong><br>
    • (iii) (6, 12] = <strong>{x : x ∈ R, 6 &lt; x ≤ 12}</strong><br>
    • (iv) [−23, 5) = <strong>{x : x ∈ R, −23 ≤ x &lt; 5}</strong>
  </div>`,
  '2 Marks',
  [['Converting parenthesis and brackets into strict and inclusive inequalities', '2 Marks']]
));

ex1_3.push(createQCard(
  'c11m-ch1-q20', 'Question 8', 'Exercise 1.3',
  'What universal set(s) would you propose for each of the following:<br>' +
  '(i) The set of right triangles.<br>' +
  '(ii) The set of isosceles triangles.',
  `<div class="step">
    A universal set $U$ must contain every element under consideration.<br>
    • <strong>(i) For right triangles:</strong> We can propose <strong>U = The set of all triangles in the plane</strong> (or the set of all polygons).<br>
    • <strong>(ii) For isosceles triangles:</strong> We can propose <strong>U = The set of all triangles in the plane</strong> (or the set of all 2D geometric shapes).
  </div>`,
  '1 Mark',
  [['Proposing the set of all triangles in the plane for both (i) and (ii)', '1 Mark']]
));

ex1_3.push(createQCard(
  'c11m-ch1-q21', 'Question 9', 'Exercise 1.3',
  'Given the sets A = {1, 3, 5}, B = {2, 4, 6} and C = {0, 2, 4, 6, 8}, which of the following may be considered as universal set (s) for all the three sets A, B and C:<br>' +
  '(i) {0, 1, 2, 3, 4, 5, 6}<br>' +
  '(ii) Φ<br>' +
  '(iii) {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}<br>' +
  '(iv) {1, 2, 3, 4, 5, 6, 7, 8}',
  `<div class="step">
    To be a universal set for $A, B, C$, the proposed set must contain all elements from $A \\cup B \\cup C$.<br>
    $A \\cup B \\cup C = \\{0, 1, 2, 3, 4, 5, 6, 8\\}$.<br>
    • (i) Missing 8 $\\implies$ Cannot be universal set.<br>
    • (ii) $\\phi$ contains no elements $\\implies$ Cannot be universal set.<br>
    • (iii) {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10} contains every element $\{0, 1, 2, 3, 4, 5, 6, 8\}$. $\\implies$ <strong>Valid Universal Set.</strong><br>
    • (iv) Missing 0 $\\implies$ Cannot be universal set.<br><br>
    <strong>Answer: (iii) is the correct option.</strong>
  </div>`,
  '1 Mark',
  [['Finding union of A, B, C and concluding option (iii)', '1 Mark']]
));

// ============================================================================
// EXERCISE 1.4 (Questions 22 to 33)
// ============================================================================
ex1_4.push(createQCard(
  'c11m-ch1-q22', 'Question 1', 'Exercise 1.4',
  'Find the union of each of the following pairs of sets:<br>' +
  '(i) X = {1, 3, 5}, &nbsp; Y = {1, 2, 3}<br>' +
  '(ii) A = {a, e, i, o, u}, &nbsp; B = {a, b, c}<br>' +
  '(iii) A = {x : x is a natural number and multiple of 3}, &nbsp; B = {x : x is a natural number less than 6}<br>' +
  '(iv) A = {x : x is a natural number and 1 &lt; x ≤ 6}, &nbsp; B = {x : x is a natural number and 6 &lt; x &lt; 10}<br>' +
  '(v) A = {1, 2, 3}, &nbsp; B = Φ',
  `<p><strong>Union Definition:</strong> $A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}$.</p>
  <div class="step">
    • <strong>(i) X ∪ Y:</strong> Elements in $X$ or $Y$:<br>
    $$\\mathbf{X \\cup Y = \\{1, 2, 3, 5\\}}$$<br>
    • <strong>(ii) A ∪ B:</strong><br>
    $$\\mathbf{A \\cup B = \\{a, b, c, e, i, o, u\\}}$$<br>
    • <strong>(iii) A ∪ B:</strong><br>
    $A = \\{3, 6, 9, 12, ...\\}$, $B = \\{1, 2, 3, 4, 5\\}$:<br>
    $$\\mathbf{A \\cup B = \\{1, 2, 4, 5, 3, 6, 9, 12, ...\\} = \\{x : x = 1, 2, 4, 5 \\text{ or a multiple of } 3\\}}$$<br>
    • <strong>(iv) A ∪ B:</strong><br>
    $A = \\{2, 3, 4, 5, 6\\}$, $B = \\{7, 8, 9\\}$:<br>
    $$\\mathbf{A \\cup B = \\{2, 3, 4, 5, 6, 7, 8, 9\\} = \\{x : x \\in \\mathbb{N} \\text{ and } 1 < x < 10\\}}$$<br>
    • <strong>(v) A ∪ B:</strong><br>
    $A \\cup \\phi = A$:<br>
    $$\\mathbf{A \\cup B = \\{1, 2, 3\\}}$$
  </div>`,
  '2.5 Marks',
  [['Computing discrete unions (i, ii, v)', '1.5 Marks'], ['Computing set-builder/infinite unions (iii, iv)', '1 Mark']]
));

ex1_4.push(createQCard(
  'c11m-ch1-q23', 'Question 2', 'Exercise 1.4',
  'Let A = {a, b}, B = {a, b, c}. Is A ⊂ B ? What is A ∪ B ?',
  `<div class="step">
    • Check subset condition: Elements of $A$ are $a$ and $b$. Both $a \\in B$ and $b \\in B$.<br>
    <strong>Yes, A ⊂ B.</strong><br><br>
    • Compute $A \\cup B$:<br>
    $A \\cup B = \\{a, b\\} \\cup \\{a, b, c\\} = \\{a, b, c\\} = B$.<br>
    <strong>A ∪ B = {a, b, c} = B.</strong>
  </div>`,
  '1.5 Marks',
  [['Verifying subset condition A ⊂ B', '0.5 Mark'], ['Finding union equal to B', '1 Mark']]
));

ex1_4.push(createQCard(
  'c11m-ch1-q24', 'Question 3', 'Exercise 1.4',
  'If A and B are two sets such that A ⊂ B, then what is A ∪ B ?',
  `<div class="step">
    Given $A \\subset B$, every element of $A$ already belongs to $B$.<br>
    Therefore, combining all elements of $A$ with $B$ adds no new elements beyond $B$.<br>
    $$A \\cup B = B$$<br>
    <strong>Answer: A ∪ B = B.</strong>
  </div>`,
  '1 Mark',
  [['General deduction that A ⊂ B implies A ∪ B = B', '1 Mark']]
));

ex1_4.push(createQCard(
  'c11m-ch1-q25', 'Question 4', 'Exercise 1.4',
  'If A = {1, 2, 3, 4}, B = {3, 4, 5, 6}, C = {5, 6, 7, 8} and D = {7, 8, 9, 10}; find:<br>' +
  '(i) A ∪ B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (ii) A ∪ C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iii) B ∪ C<br>' +
  '(iv) B ∪ D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (v) A ∪ B ∪ C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (vi) A ∪ B ∪ D<br>' +
  '(vii) B ∪ C ∪ D',
  `<div class="step">
    • <strong>(i) A ∪ B:</strong> {1, 2, 3, 4} ∪ {3, 4, 5, 6} = <strong>{1, 2, 3, 4, 5, 6}</strong><br>
    • <strong>(ii) A ∪ C:</strong> {1, 2, 3, 4} ∪ {5, 6, 7, 8} = <strong>{1, 2, 3, 4, 5, 6, 7, 8}</strong><br>
    • <strong>(iii) B ∪ C:</strong> {3, 4, 5, 6} ∪ {5, 6, 7, 8} = <strong>{3, 4, 5, 6, 7, 8}</strong><br>
    • <strong>(iv) B ∪ D:</strong> {3, 4, 5, 6} ∪ {7, 8, 9, 10} = <strong>{3, 4, 5, 6, 7, 8, 9, 10}</strong><br>
    • <strong>(v) A ∪ B ∪ C:</strong> (A ∪ B) ∪ C = {1, 2, 3, 4, 5, 6} ∪ {5, 6, 7, 8} = <strong>{1, 2, 3, 4, 5, 6, 7, 8}</strong><br>
    • <strong>(vi) A ∪ B ∪ D:</strong> (A ∪ B) ∪ D = {1, 2, 3, 4, 5, 6} ∪ {7, 8, 9, 10} = <strong>{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}</strong><br>
    • <strong>(vii) B ∪ C ∪ D:</strong> (B ∪ C) ∪ D = {3, 4, 5, 6, 7, 8} ∪ {7, 8, 9, 10} = <strong>{3, 4, 5, 6, 7, 8, 9, 10}</strong>
  </div>`,
  '3.5 Marks',
  [['Two-set unions (i-iv)', '2 Marks'], ['Three-set associative unions (v-vii)', '1.5 Marks']]
));

ex1_4.push(createQCard(
  'c11m-ch1-q26', 'Question 5', 'Exercise 1.4',
  'Find the intersection of each pair of sets of question 1 above.',
  `<p><strong>Intersection Definition:</strong> $A \\cap B = \\{x : x \\in A \\text{ and } x \\in B\\}$.</p>
  <div class="step">
    • <strong>(i) X ∩ Y:</strong> $X = \\{1, 3, 5\\}, Y = \\{1, 2, 3\\}$:<br>
    $$\\mathbf{X \\cap Y = \\{1, 3\\}}$$<br>
    • <strong>(ii) A ∩ B:</strong> $A = \\{a, e, i, o, u\\}, B = \\{a, b, c\\}$:<br>
    $$\\mathbf{A \\cap B = \\{a\\}}$$<br>
    • <strong>(iii) A ∩ B:</strong> $A = \\{3, 6, 9, 12, ...\\}, B = \\{1, 2, 3, 4, 5\\}$:<br>
    $$\\mathbf{A \\cap B = \\{3\\}}$$<br>
    • <strong>(iv) A ∩ B:</strong> $A = \\{2, 3, 4, 5, 6\\}, B = \\{7, 8, 9\\}$:<br>
    No elements in common:<br>
    $$\\mathbf{A \\cap B = \\phi}$$<br>
    • <strong>(v) A ∩ B:</strong> $A = \\{1, 2, 3\\}, B = \\phi$:<br>
    $$\\mathbf{A \\cap \\phi = \\phi}$$
  </div>`,
  '2.5 Marks',
  [['Intersections (i, ii, iii)', '1.5 Marks'], ['Disjoint and null set intersections (iv, v)', '1 Mark']]
));

ex1_4.push(createQCard(
  'c11m-ch1-q27', 'Question 6', 'Exercise 1.4',
  'If A = {3, 5, 7, 9, 11}, B = {7, 9, 11, 13}, C = {11, 13, 15} and D = {15, 17}; find:<br>' +
  '(i) A ∩ B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (ii) B ∩ C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iii) A ∩ C ∩ D<br>' +
  '(iv) A ∩ C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (v) B ∩ D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (vi) A ∩ (B ∪ C)<br>' +
  '(vii) A ∩ D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (viii) A ∩ (B ∪ D) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (ix) (A ∩ B) ∩ (B ∪ C)<br>' +
  '(x) (A ∪ D) ∩ (B ∪ C)',
  `<div class="step">
    • <strong>(i) A ∩ B:</strong> {3, 5, 7, 9, 11} ∩ {7, 9, 11, 13} = <strong>{7, 9, 11}</strong><br>
    • <strong>(ii) B ∩ C:</strong> {7, 9, 11, 13} ∩ {11, 13, 15} = <strong>{11, 13}</strong><br>
    • <strong>(iii) A ∩ C ∩ D:</strong> (A ∩ C) ∩ D = {11} ∩ {15, 17} = <strong>Φ</strong><br>
    • <strong>(iv) A ∩ C:</strong> {3, 5, 7, 9, 11} ∩ {11, 13, 15} = <strong>{11}</strong><br>
    • <strong>(v) B ∩ D:</strong> {7, 9, 11, 13} ∩ {15, 17} = <strong>Φ</strong><br>
    • <strong>(vi) A ∩ (B ∪ C):</strong> B ∪ C = {7, 9, 11, 13, 15}. Then A ∩ {7, 9, 11, 13, 15} = <strong>{7, 9, 11}</strong><br>
    • <strong>(vii) A ∩ D:</strong> {3, 5, 7, 9, 11} ∩ {15, 17} = <strong>Φ</strong><br>
    • <strong>(viii) A ∩ (B ∪ D):</strong> B ∪ D = {7, 9, 11, 13, 15, 17}. Then A ∩ {7, 9, 11, 13, 15, 17} = <strong>{7, 9, 11}</strong><br>
    • <strong>(ix) (A ∩ B) ∩ (B ∪ C):</strong> {7, 9, 11} ∩ {7, 9, 11, 13, 15} = <strong>{7, 9, 11}</strong><br>
    • <strong>(x) (A ∪ D) ∩ (B ∪ C):</strong> A ∪ D = {3, 5, 7, 9, 11, 15, 17}, B ∪ C = {7, 9, 11, 13, 15}.<br>
    Intersection = <strong>{7, 9, 11, 15}</strong>
  </div>`,
  '4 Marks',
  [['Basic two-set intersections (i, ii, iv, v, vii)', '2 Marks'], ['Compound distributive & bracket operations (iii, vi, viii, ix, x)', '2 Marks']]
));

ex1_4.push(createQCard(
  'c11m-ch1-q28', 'Question 7', 'Exercise 1.4',
  'If A = {x : x is a natural number}, B = {x : x is an even natural number}, C = {x : x is an odd natural number} and D = {x : x is a prime number}, find:<br>' +
  '(i) A ∩ B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (ii) A ∩ C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iii) A ∩ D<br>' +
  '(iv) B ∩ C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (v) B ∩ D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (vi) C ∩ D',
  `<p>Sets given: $A = \\mathbb{N}$, $B = \\{2, 4, 6, ...\\}$, $C = \\{1, 3, 5, ...\\}$, $D = \\{2, 3, 5, 7, 11, ...\\}$.</p>
  <div class="step">
    • <strong>(i) A ∩ B:</strong> $\\mathbb{N} \\cap \\{\\text{even naturals}\\} = \\mathbf{B}$ = <strong>{x : x is an even natural number}</strong><br><br>
    • <strong>(ii) A ∩ C:</strong> $\\mathbb{N} \\cap \\{\\text{odd naturals}\\} = \\mathbf{C}$ = <strong>{x : x is an odd natural number}</strong><br><br>
    • <strong>(iii) A ∩ D:</strong> $\\mathbb{N} \\cap \\{\\text{prime numbers}\\} = \\mathbf{D}$ = <strong>{x : x is a prime number}</strong><br><br>
    • <strong>(iv) B ∩ C:</strong> An even natural number is never odd $\\implies$ <strong>Φ</strong><br><br>
    • <strong>(v) B ∩ D:</strong> The only even prime number is 2 $\\implies$ <strong>{2}</strong><br><br>
    • <strong>(vi) C ∩ D:</strong> All prime numbers except the even prime 2 are odd $\\implies$ <strong>{x : x is an odd prime number}</strong>
  </div>`,
  '3 Marks',
  [['Subsets of natural numbers (i, ii, iii)', '1.5 Marks'], ['Even-odd-prime intersections (iv, v, vi)', '1.5 Marks']]
));

ex1_4.push(createQCard(
  'c11m-ch1-q29', 'Question 8', 'Exercise 1.4',
  'Which of the following pairs of sets are disjoint:<br>' +
  '(i) {1, 2, 3, 4} and {x : x is a natural number and 4 ≤ x ≤ 6}<br>' +
  '(ii) {a, e, i, o, u} and {c, d, e, f}<br>' +
  '(iii) {x : x is an even integer} and {x : x is an odd integer}',
  `<p><strong>Disjoint Condition:</strong> Two sets $A$ and $B$ are <em>disjoint</em> if their intersection is empty, i.e., $A \\cap B = \\phi$.</p>
  <div class="step">
    • <strong>(i) {1, 2, 3, 4} and {4, 5, 6}:</strong><br>
    Intersection = $\\{4\\} \\ne \\phi$.<br>
    <strong>Not disjoint.</strong><br><br>
    • <strong>(ii) {a, e, i, o, u} and {c, d, e, f}:</strong><br>
    Both sets share the letter 'e': Intersection = $\\{e\\} \\ne \\phi$.<br>
    <strong>Not disjoint.</strong><br><br>
    • <strong>(iii) {Even integers} and {Odd integers}:</strong><br>
    No integer can be both even and odd simultaneously. Intersection = $\\phi$.<br>
    <strong>Disjoint sets.</strong>
  </div>`,
  '1.5 Marks',
  [['Testing non-empty intersections (i, ii)', '1 Mark'], ['Even and odd integers disjoint deduction (iii)', '0.5 Mark']]
));

ex1_4.push(createQCard(
  'c11m-ch1-q30', 'Question 9', 'Exercise 1.4',
  'If A = {3, 6, 9, 12, 15, 18, 21}, B = {4, 8, 12, 16, 20}, C = {2, 4, 6, 8, 10, 12, 14, 16}, D = {5, 10, 15, 20}; find:<br>' +
  '(i) A − B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (ii) A − C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iii) A − D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iv) B − A<br>' +
  '(v) C − A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (vi) D − A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (vii) B − C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (viii) B − D<br>' +
  '(ix) C − B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (x) D − B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (xi) C − D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (xii) D − C',
  `<p><strong>Difference of Sets:</strong> $X - Y$ is the set of elements that belong to $X$ but not to $Y$.</p>
  <div class="step">
    • <strong>(i) A − B:</strong> Remove 12 from A $\\implies$ <strong>{3, 6, 9, 15, 18, 21}</strong><br>
    • <strong>(ii) A − C:</strong> Remove 6, 12 from A $\\implies$ <strong>{3, 9, 15, 18, 21}</strong><br>
    • <strong>(iii) A − D:</strong> Remove 15 from A $\\implies$ <strong>{3, 6, 9, 12, 18, 21}</strong><br>
    • <strong>(iv) B − A:</strong> Remove 12 from B $\\implies$ <strong>{4, 8, 16, 20}</strong><br>
    • <strong>(v) C − A:</strong> Remove 6, 12 from C $\\implies$ <strong>{2, 4, 8, 10, 14, 16}</strong><br>
    • <strong>(vi) D − A:</strong> Remove 15 from D $\\implies$ <strong>{5, 10, 20}</strong><br>
    • <strong>(vii) B − C:</strong> Remove 4, 8, 16 from B $\\implies$ <strong>{12, 20}</strong><br>
    • <strong>(viii) B − D:</strong> Remove 20 from B $\\implies$ <strong>{4, 8, 12, 16}</strong><br>
    • <strong>(ix) C − B:</strong> Remove 4, 8, 12, 16 from C $\\implies$ <strong>{2, 6, 10, 14}</strong><br>
    • <strong>(x) D − B:</strong> Remove 20 from D $\\implies$ <strong>{5, 10, 15}</strong><br>
    • <strong>(xi) C − D:</strong> Remove 10 from C $\\implies$ <strong>{2, 4, 6, 8, 12, 14, 16}</strong><br>
    • <strong>(xii) D − C:</strong> Remove 10 from D $\\implies$ <strong>{5, 15, 20}</strong>
  </div>`,
  '4 Marks',
  [['Differences from set A (i-vi)', '2 Marks'], ['Differences among B, C, D (vii-xii)', '2 Marks']]
));

ex1_4.push(createQCard(
  'c11m-ch1-q31', 'Question 10', 'Exercise 1.4',
  'If X = {a, b, c, d} and Y = {f, b, d, g}, find:<br>' +
  '(i) X − Y &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (ii) Y − X &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iii) X ∩ Y',
  `<div class="step">
    • <strong>(i) X − Y:</strong> Elements in $X$ that are not in $Y$ (remove $b, d$ from $X$):<br>
    $$\\mathbf{X - Y = \\{a, c\\}}$$<br>
    • <strong>(ii) Y − X:</strong> Elements in $Y$ that are not in $X$ (remove $b, d$ from $Y$):<br>
    $$\\mathbf{Y - X = \\{f, g\\}}$$<br>
    • <strong>(iii) X ∩ Y:</strong> Common elements of $X$ and $Y$:<br>
    $$\\mathbf{X \\cap Y = \\{b, d\\}}$$
  </div>`,
  '1.5 Marks',
  [['Difference X - Y and Y - X', '1 Mark'], ['Intersection X ∩ Y', '0.5 Mark']]
));

ex1_4.push(createQCard(
  'c11m-ch1-q32', 'Question 11', 'Exercise 1.4',
  'If R is the set of real numbers and Q is the set of rational numbers, then what is R − Q ?',
  `<div class="step">
    The real numbers $\\mathbb{R}$ consist of all rational numbers $\\mathbb{Q}$ and all irrational numbers.<br>
    By removing all rational numbers from the real number system, only irrational numbers remain.<br>
    $$\\mathbb{R} - \\mathbb{Q} = \\mathbf{T} = \\text{Set of irrational numbers}$$<br>
    <strong>Answer: R − Q is the set of irrational numbers.</strong>
  </div>`,
  '1 Mark',
  [['Definition of real numbers as union of rationals and irrationals', '0.5 Mark'], ['Stating set of irrational numbers', '0.5 Mark']]
));

ex1_4.push(createQCard(
  'c11m-ch1-q33', 'Question 12', 'Exercise 1.4',
  'State whether each of the following statement is true or false. Justify your answer.<br>' +
  '(i) {2, 3, 4, 5} and {3, 6} are disjoint sets.<br>' +
  '(ii) {a, e, i, o, u} and {a, b, c, d} are disjoint sets.<br>' +
  '(iii) {2, 6, 10, 14} and {3, 7, 11, 15} are disjoint sets.<br>' +
  '(iv) {2, 6, 10} and {3, 7, 11} are disjoint sets.',
  `<div class="step">
    • <strong>(i) {2, 3, 4, 5} and {3, 6}:</strong><br>
    Intersection = $\\{3\\} \\ne \\phi$. The sets share the element 3.<br>
    <strong>False.</strong><br><br>
    • <strong>(ii) {a, e, i, o, u} and {a, b, c, d}:</strong><br>
    Intersection = $\\{a\\} \\ne \\phi$. The sets share the element 'a'.<br>
    <strong>False.</strong><br><br>
    • <strong>(iii) {2, 6, 10, 14} and {3, 7, 11, 15}:</strong><br>
    First set has even numbers, second has odd numbers. Intersection = $\\phi$.<br>
    <strong>True.</strong><br><br>
    • <strong>(iv) {2, 6, 10} and {3, 7, 11}:</strong><br>
    No elements in common: $\\{2, 6, 10\\} \\cap \\{3, 7, 11\\} = \\phi$.<br>
    <strong>True.</strong>
  </div>`,
  '2 Marks',
  [['Justifying False for intersecting sets (i, ii)', '1 Mark'], ['Justifying True for empty intersections (iii, iv)', '1 Mark']]
));

// ============================================================================
// EXERCISE 1.5 (Questions 34 to 40)
// ============================================================================
ex1_5.push(createQCard(
  'c11m-ch1-q34', 'Question 1', 'Exercise 1.5',
  'Let U = {1, 2, 3, 4, 5, 6, 7, 8, 9}, A = {1, 2, 3, 4}, B = {2, 4, 6, 8} and C = {3, 4, 5, 6}. Find:<br>' +
  '(i) A′ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (ii) B′ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iii) (A ∪ C)′<br>' +
  '(iv) (A ∪ B)′ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (v) (A′)′ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (vi) (B − C)′',
  `<p><strong>Complement:</strong> $A' = U - A = \\{x \\in U : x \\notin A\\}$.</p>
  <div class="step">
    • <strong>(i) A′:</strong> U − A = {1, ..., 9} − {1, 2, 3, 4} = <strong>{5, 6, 7, 8, 9}</strong><br>
    • <strong>(ii) B′:</strong> U − B = {1, ..., 9} − {2, 4, 6, 8} = <strong>{1, 3, 5, 7, 9}</strong><br>
    • <strong>(iii) (A ∪ C)′:</strong> A ∪ C = {1, 2, 3, 4, 5, 6}.<br>
    (A ∪ C)′ = U − {1, 2, 3, 4, 5, 6} = <strong>{7, 8, 9}</strong><br>
    • <strong>(iv) (A ∪ B)′:</strong> A ∪ B = {1, 2, 3, 4, 6, 8}.<br>
    (A ∪ B)′ = U − {1, 2, 3, 4, 6, 8} = <strong>{5, 7, 9}</strong><br>
    • <strong>(v) (A′)′:</strong> Law of double complementation: (A′)′ = A = <strong>{1, 2, 3, 4}</strong><br>
    • <strong>(vi) (B − C)′:</strong> B − C = {2, 4, 6, 8} − {3, 4, 5, 6} = {2, 8}.<br>
    (B − C)′ = U − {2, 8} = <strong>{1, 3, 4, 5, 6, 7, 9}</strong>
  </div>`,
  '3 Marks',
  [['Single complements (i, ii)', '1 Mark'], ['Compound union complements (iii, iv)', '1 Mark'], ['Double complement and difference complement (v, vi)', '1 Mark']]
));

ex1_5.push(createQCard(
  'c11m-ch1-q35', 'Question 2', 'Exercise 1.5',
  'If U = {a, b, c, d, e, f, g, h}, find the complements of the following sets:<br>' +
  '(i) A = {a, b, c}<br>' +
  '(ii) B = {d, e, f, g}<br>' +
  '(iii) C = {a, c, e, g}<br>' +
  '(iv) D = {f, g, h, a}',
  `<div class="step">
    • <strong>(i) A′:</strong> U − {a, b, c} = <strong>{d, e, f, g, h}</strong><br>
    • <strong>(ii) B′:</strong> U − {d, e, f, g} = <strong>{a, b, c, h}</strong><br>
    • <strong>(iii) C′:</strong> U − {a, c, e, g} = <strong>{b, d, f, h}</strong><br>
    • <strong>(iv) D′:</strong> U − {f, g, h, a} = <strong>{b, c, d, e}</strong>
  </div>`,
  '2 Marks',
  [['Complements computed by subtracting from universal set U', '2 Marks']]
));

ex1_5.push(createQCard(
  'c11m-ch1-q36', 'Question 3', 'Exercise 1.5',
  'Taking the set of natural numbers as the universal set, write down the complements of the following sets:<br>' +
  '(i) {x : x is an even natural number}<br>' +
  '(ii) {x : x is an odd natural number}<br>' +
  '(iii) {x : x is a positive multiple of 3}<br>' +
  '(iv) {x : x is a prime number}<br>' +
  '(v) {x : x is a natural number divisible by 3 and 5}<br>' +
  '(vi) {x : x is a perfect square}<br>' +
  '(vii) {x : x is a perfect cube}<br>' +
  '(viii) {x : x + 5 = 8}<br>' +
  '(ix) {x : 2x + 5 = 9}<br>' +
  '(x) {x : x ≥ 7}<br>' +
  '(xi) {x : x ∈ N and 2x + 1 &gt; 10}',
  `<div class="step">
    Universal set $U = \\mathbb{N} = \\{1, 2, 3, 4, ...\\}$.
    <ul>
      <li>• <strong>(i):</strong> <strong>{x : x is an odd natural number}</strong></li>
      <li>• <strong>(ii):</strong> <strong>{x : x is an even natural number}</strong></li>
      <li>• <strong>(iii):</strong> <strong>{x : x ∈ N and x is not a positive multiple of 3}</strong></li>
      <li>• <strong>(iv):</strong> Primes complement in $\\mathbb{N}$ includes 1 and composite numbers:<br>
      <strong>{x : x ∈ N, x = 1 or x is a positive composite number}</strong></li>
      <li>• <strong>(v):</strong> Divisible by 3 and 5 means divisible by 15. Complement:<br>
      <strong>{x : x ∈ N and x is not divisible by 15}</strong> (or not divisible by 3 or not divisible by 5)</li>
      <li>• <strong>(vi):</strong> <strong>{x : x ∈ N and x is not a perfect square}</strong></li>
      <li>• <strong>(vii):</strong> <strong>{x : x ∈ N and x is not a perfect cube}</strong></li>
      <li>• <strong>(viii):</strong> $x + 5 = 8 \\implies x = 3$. Complement:<br>
      <strong>{x : x ∈ N and x ≠ 3}</strong> = $\\mathbb{N} - \\{3\\}$</li>
      <li>• <strong>(ix):</strong> $2x + 5 = 9 \\implies 2x = 4 \\implies x = 2$. Complement:<br>
      <strong>{x : x ∈ N and x ≠ 2}</strong> = $\\mathbb{N} - \\{2\\}$</li>
      <li>• <strong>(x):</strong> Complement of $x \\ge 7$:<br>
      <strong>{x : x ∈ N and x &lt; 7} = {1, 2, 3, 4, 5, 6}</strong></li>
      <li>• <strong>(xi):</strong> $2x + 1 > 10 \\implies 2x > 9 \\implies x > 4.5$. Complement in $\\mathbb{N}$:<br>
      <strong>{x : x ∈ N and x ≤ 4} = {1, 2, 3, 4}</strong></li>
    </ul>
  </div>`,
  '4 Marks',
  [['Parity & prime complement (i-iv)', '1.5 Marks'], ['Divisibility & algebraic powers (v-vii)', '1 Mark'], ['Linear equations and inequality intervals in N (viii-xi)', '1.5 Marks']]
));

ex1_5.push(createQCard(
  'c11m-ch1-q37', 'Question 4', 'Exercise 1.5',
  'If U = {1, 2, 3, 4, 5, 6, 7, 8, 9}, A = {2, 4, 6, 8} and B = {2, 3, 5, 7}. Verify that:<br>' +
  '(i) (A ∪ B)′ = A′ ∩ B′<br>' +
  '(ii) (A ∩ B)′ = A′ ∪ B′',
  `<p><strong>De Morgan's Laws:</strong> The complement of the union is the intersection of the complements, and the complement of the intersection is the union of the complements.</p>
  <div class="step">
    First compute $A'$ and $B'$:
    $$A' = U - A = \\{1, 3, 5, 7, 9\\}$$
    $$B' = U - B = \\{1, 4, 6, 8, 9\\}$$

    <strong>(i) Verification of (A ∪ B)′ = A′ ∩ B′:</strong><br>
    • LHS: $A \\cup B = \\{2, 3, 4, 5, 6, 7, 8\\}$.<br>
    $(A \\cup B)' = U - \\{2, 3, 4, 5, 6, 7, 8\\} = \\mathbf{\\{1, 9\\}}$.<br>
    • RHS: $A' \\cap B' = \\{1, 3, 5, 7, 9\\} \\cap \\{1, 4, 6, 8, 9\\} = \\mathbf{\\{1, 9\\}}$.<br>
    Since $\\text{LHS} = \\text{RHS} = \\{1, 9\\}$, the identity is <strong>Verified</strong>.<br><br>

    <strong>(ii) Verification of (A ∩ B)′ = A′ ∪ B′:</strong><br>
    • LHS: $A \\cap B = \\{2\\}$.<br>
    $(A \\cap B)' = U - \\{2\\} = \\mathbf{\\{1, 3, 4, 5, 6, 7, 8, 9\\}}$.<br>
    • RHS: $A' \\cup B' = \\{1, 3, 5, 7, 9\\} \\cup \\{1, 4, 6, 8, 9\\} = \\mathbf{\\{1, 3, 4, 5, 6, 7, 8, 9\\}}$.<br>
    Since $\\text{LHS} = \\text{RHS}$, the identity is <strong>Verified</strong>.
  </div>`,
  '3 Marks',
  [['Computing A\' and B\' correctly', '1 Mark'], ['Verification of De Morgan First Law (A ∪ B)′ = A′ ∩ B′', '1 Mark'], ['Verification of De Morgan Second Law (A ∩ B)′ = A′ ∪ B′', '1 Mark']]
));

ex1_5.push(createQCard(
  'c11m-ch1-q38', 'Question 5', 'Exercise 1.5',
  'Draw appropriate Venn diagram for each of the following:<br>' +
  '(i) (A ∪ B)′<br>' +
  '(ii) A′ ∩ B′<br>' +
  '(iii) (A ∩ B)′<br>' +
  '(iv) A′ ∪ B′',
  `<div class="step">
    <p>Below are official geometric Venn diagram representations showing shaded regions corresponding to each set identity:</p>
    
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:20px; margin:20px 0;">
      <!-- Diagram (i) & (ii) -->
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:16px; text-align:center;">
        <div style="font-weight:700; color:#1e293b; margin-bottom:10px;">(i) (A ∪ B)′ &amp; (ii) A′ ∩ B′</div>
        <svg viewBox="0 0 260 170" width="100%" height="150" style="background:#ffffff; border-radius:8px; border:1px solid #cbd5e1;">
          <defs>
            <mask id="mask1">
              <rect width="260" height="170" fill="white" />
              <circle cx="95" cy="85" r="45" fill="black" />
              <circle cx="165" cy="85" r="45" fill="black" />
            </mask>
          </defs>
          <!-- Shaded region outside A and B -->
          <rect width="260" height="170" fill="#fed7aa" mask="url(#mask1)" />
          <!-- Rect boundary for Universal Set U -->
          <rect x="5" y="5" width="250" height="160" fill="none" stroke="#334155" stroke-width="2"/>
          <text x="15" y="24" font-size="14" font-weight="bold" fill="#0f172a">U</text>
          <!-- Circles for Sets A and B -->
          <circle cx="95" cy="85" r="45" fill="none" stroke="#2563eb" stroke-width="2"/>
          <circle cx="165" cy="85" r="45" fill="none" stroke="#16a34a" stroke-width="2"/>
          <text x="75" y="88" font-size="14" font-weight="bold" fill="#1e40af">A</text>
          <text x="175" y="88" font-size="14" font-weight="bold" fill="#15803d">B</text>
        </svg>
        <p style="font-size:0.85rem; color:#64748b; margin-top:8px;">Region outside both circles A and B is shaded orange. Confirms $(A \\cup B)' = A' \\cap B'$.</p>
      </div>

      <!-- Diagram (iii) & (iv) -->
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:16px; text-align:center;">
        <div style="font-weight:700; color:#1e293b; margin-bottom:10px;">(iii) (A ∩ B)′ &amp; (iv) A′ ∪ B′</div>
        <svg viewBox="0 0 260 170" width="100%" height="150" style="background:#ffffff; border-radius:8px; border:1px solid #cbd5e1;">
          <defs>
            <!-- Intersection of A and B (centers 95 and 165, r=45) -->
            <clipPath id="clipA"><circle cx="95" cy="85" r="45" /></clipPath>
            <mask id="maskIntersection">
              <rect width="260" height="170" fill="white" />
              <circle cx="165" cy="85" r="45" clip-path="url(#clipA)" fill="black" />
            </mask>
          </defs>
          <!-- Shaded everywhere except intersection -->
          <rect width="260" height="170" fill="#bfdbfe" mask="url(#maskIntersection)" />
          <!-- Rect boundary for Universal Set U -->
          <rect x="5" y="5" width="250" height="160" fill="none" stroke="#334155" stroke-width="2"/>
          <text x="15" y="24" font-size="14" font-weight="bold" fill="#0f172a">U</text>
          <!-- Circles for Sets A and B -->
          <circle cx="95" cy="85" r="45" fill="none" stroke="#2563eb" stroke-width="2"/>
          <circle cx="165" cy="85" r="45" fill="none" stroke="#16a34a" stroke-width="2"/>
          <text x="75" y="88" font-size="14" font-weight="bold" fill="#1e40af">A</text>
          <text x="175" y="88" font-size="14" font-weight="bold" fill="#15803d">B</text>
        </svg>
        <p style="font-size:0.85rem; color:#64748b; margin-top:8px;">Everything shaded light blue except the mutual overlap of A and B. Confirms $(A \\cap B)' = A' \\cup B'$.</p>
      </div>
    </div>
  </div>`,
  '4 Marks',
  [['Accurate rectangle and circle layout for universal set and subsets', '1 Mark'], ['Correct shaded region for (A ∪ B)′ and A′ ∩ B′', '1.5 Marks'], ['Correct shaded region for (A ∩ B)′ and A′ ∪ B′', '1.5 Marks']]
));

ex1_5.push(createQCard(
  'c11m-ch1-q39', 'Question 6', 'Exercise 1.5',
  'Let U be the set of all triangles in a plane. If A is the set of all triangles with at least one angle different from 60°, what is A′?',
  `<div class="step">
    • $U =$ Set of all triangles in a plane.<br>
    • $A =$ Set of triangles that have <em>at least one</em> angle $\\ne 60^\\circ$.<br>
    • Complement $A' = U - A$ is the set of triangles that do NOT have any angle different from $60^\\circ$.<br>
    This means all three angles of the triangle must equal $60^\\circ$ ($60^\\circ + 60^\\circ + 60^\\circ = 180^\\circ$).<br>
    A triangle whose all three internal angles are $60^\\circ$ is an <strong>equilateral triangle</strong>.<br><br>
    <strong>Answer: A′ is the set of all equilateral triangles.</strong>
  </div>`,
  '1.5 Marks',
  [['Negation of "at least one angle ≠ 60°" to "all angles = 60°"', '1 Mark'], ['Identification as set of all equilateral triangles', '0.5 Mark']]
));

ex1_5.push(createQCard(
  'c11m-ch1-q40', 'Question 7', 'Exercise 1.5',
  'Fill in the blanks to make each of the following a true statement:<br>' +
  '(i) A ∪ A′ = ___<br>' +
  '(ii) Φ′ ∩ A = ___<br>' +
  '(iii) A ∩ A′ = ___<br>' +
  '(iv) U′ ∩ A = ___',
  `<p><strong>Complement Laws and Identity Properties:</strong></p>
  <div class="step">
    • <strong>(i) A ∪ A′:</strong> Union of a set with its complement covers the entire universal set $\\implies$ <strong>U</strong><br><br>
    • <strong>(ii) Φ′ ∩ A:</strong> Since $\\phi' = U$, we have $U \\cap A = \\mathbf{A}$<br><br>
    • <strong>(iii) A ∩ A′:</strong> A set and its complement have no elements in common $\\implies$ <strong>Φ</strong><br><br>
    • <strong>(iv) U′ ∩ A:</strong> Since $U' = \\phi$, we have $\\phi \\cap A = \\mathbf{Φ}$
  </div>`,
  '2 Marks',
  [['A ∪ A\' = U and A ∩ A\' = Φ', '1 Mark'], ['Φ\' ∩ A = A and U\' ∩ A = Φ', '1 Mark']]
));

// ============================================================================
// MISCELLANEOUS EXERCISE ON CHAPTER 1 (Questions 41 to 56)
// ============================================================================
misc.push(createQCard(
  'c11m-ch1-q41', 'Question 1', 'Miscellaneous',
  'Decide, among the following sets, which sets are subsets of one and another:<br>' +
  'A = {x : x ∈ R and x satisfy x² − 8x + 12 = 0},<br>' +
  'B = {2, 4, 6}, &nbsp; C = {2, 4, 6, 8, ...}, &nbsp; D = {6}.',
  `<div class="step">
    First write set A in roster form by solving $x^2 - 8x + 12 = 0$:<br>
    $$(x - 2)(x - 6) = 0 \\implies x = 2 \\text{ or } x = 6$$
    So, $A = \\{2, 6\\}$.<br>
    The sets are:
    $$A = \\{2, 6\\}, \\quad B = \\{2, 4, 6\\}, \\quad C = \\{2, 4, 6, 8, ...\\}, \\quad D = \\{6\\}$$
    Now inspect subset relations:
    <ul>
      <li>$D = \\{6\\}$: $6 \\in A, 6 \\in B, 6 \\in C$.<br>
      $\\implies \\mathbf{D \\subset A, \\, D \\subset B, \\, D \\subset C}$</li>
      <li>$A = \\{2, 6\\}$: $2, 6 \\in B$ and $2, 6 \\in C$.<br>
      $\\implies \\mathbf{A \\subset B, \\, A \\subset C}$</li>
      <li>$B = \\{2, 4, 6\\}$: $2, 4, 6 \\in C$.<br>
      $\\implies \\mathbf{B \\subset C}$</li>
    </ul>
    <strong>Summary:</strong> $D \\subset A \\subset B \\subset C$.
  </div>`,
  '3 Marks',
  [['Finding roots of quadratic equation to get A = {2, 6}', '1 Mark'], ['Deductions for D as subset of A, B, C', '1 Mark'], ['Deductions for A ⊂ B, A ⊂ C, and B ⊂ C', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch1-q42', 'Question 2', 'Miscellaneous',
  'In each of the following, determine whether the statement is true or false. If it is true, prove it. If it is false, give an example.<br>' +
  '(i) If x ∈ A and A ∈ B, then x ∈ B.<br>' +
  '(ii) If A ⊂ B and B ∈ C, then A ∈ C.<br>' +
  '(iii) If A ⊂ B and B ⊂ C, then A ⊂ C.<br>' +
  '(iv) If A ⊄ B and B ⊄ C, then A ⊄ C.<br>' +
  '(v) If x ∈ A and A ⊄ B, then x ∈ B.<br>' +
  '(vi) If A ⊂ B and x ∉ B, then x ∉ A.',
  `<div class="step">
    • <strong>(i) False:</strong><br>
    Let $A = \\{1\\}$ and $B = \\{\\{1\\}, 2\\}$.<br>
    Here $1 \\in A$ and $A \\in B$, but $1 \\notin B$ (the element in $B$ is the set $\\{1\\}$, not the number $1$).<br><br>
    • <strong>(ii) False:</strong><br>
    Let $A = \\{1\\}$, $B = \\{1, 2\\}$, and $C = \\{\\{1, 2\\}, 3\\}$.<br>
    Here $A \\subset B$ and $B \\in C$, but $A = \\{1\\} \\notin C$ (the element in $C$ is $\\{1, 2\\}$).<br><br>
    • <strong>(iii) True (Proof):</strong><br>
    Let $x \\in A$.<br>
    Since $A \\subset B$, $x \\in B$.<br>
    Since $B \\subset C$, $x \\in C$.<br>
    Thus, every $x \\in A \\implies x \\in C$. Hence, <strong>A ⊂ C</strong>.<br><br>
    • <strong>(iv) False:</strong><br>
    Let $A = \\{1, 2\\}$, $B = \\{0, 3\\}$, $C = \\{1, 2, 4\\}$.<br>
    Here $A \\not\\subset B$ and $B \\not\\subset C$, but $A \\subset C$.<br><br>
    • <strong>(v) False:</strong><br>
    Let $A = \\{1, 2, 3\\}$, $B = \\{2, 3, 4\\}$. Here $A \\not\\subset B$.<br>
    Choose $x = 1 \\in A$. Clearly $1 \\notin B$.<br><br>
    • <strong>(vi) True (Proof by Contraposition):</strong><br>
    Given $A \\subset B$. Suppose $x \\in A$.<br>
    Then by definition of subset, $x \\in B$.<br>
    This contradicts the premise $x \\notin B$.<br>
    Therefore, our assumption was false, and we must have <strong>x ∉ A</strong>.
  </div>`,
  '4 Marks',
  [['Counterexamples for element-set misconceptions (i, ii)', '1.5 Marks'], ['Transitive subset proof for (iii)', '1 Mark'], ['Counterexamples for non-subset implications (iv, v)', '1 Mark'], ['Contrapositive proof for (vi)', '0.5 Mark']]
));

misc.push(createQCard(
  'c11m-ch1-q43', 'Question 3', 'Miscellaneous',
  'Let A, B, and C be the sets such that A ∪ B = A ∪ C and A ∩ B = A ∩ C. Show that B = C.',
  `<div class="step">
    <strong>To Prove:</strong> $B = C$, which is equivalent to proving $B \\subset C$ and $C \\subset B$.<br><br>
    <strong>Step 1: Express B using Distributive Law:</strong><br>
    $$B = B \\cap (A \\cup B)$$
    Given $A \\cup B = A \\cup C$, substitute it:
    $$B = B \\cap (A \\cup C)$$
    Apply distributive law:
    $$B = (B \\cap A) \\cup (B \\cap C) = (A \\cap B) \\cup (B \\cap C)$$
    Given $A \\cap B = A \\cap C$, substitute:
    $$B = (A \\cap C) \\cup (B \\cap C) \\quad \\text{--- (1)}$$<br>
    
    <strong>Step 2: Express C using Distributive Law:</strong><br>
    $$C = C \\cap (A \\cup C)$$
    Since $A \\cup C = A \\cup B$:
    $$C = C \\cap (A \\cup B) = (C \\cap A) \\cup (C \\cap B) = (A \\cap C) \\cup (B \\cap C) \\quad \\text{--- (2)}$$<br>

    <strong>Step 3: Comparison:</strong><br>
    From (1) and (2), the right-hand sides are identical:
    $$(A \\cap C) \\cup (B \\cap C) = (A \\cap C) \\cup (B \\cap C)$$
    $$\\implies \\mathbf{B = C}$$
    <strong>Hence proved.</strong>
  </div>`,
  '3 Marks',
  [['Applying absorption identity B = B ∩ (A ∪ B)', '1 Mark'], ['Applying distributive law and substitutions', '1 Mark'], ['Equating right hand sides to establish B = C', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch1-q44', 'Question 4', 'Miscellaneous',
  'Show that the following four conditions are equivalent:<br>' +
  '(i) A ⊂ B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (ii) A − B = Φ<br>' +
  '(iii) A ∪ B = B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iv) A ∩ B = A',
  `<div class="step">
    To show equivalence, we show $(i) \\implies (ii) \\implies (iii) \\implies (iv) \\implies (i)$:<br><br>
    • <strong>(i) $\\implies$ (ii):</strong> Let $A \\subset B$. Then every element of $A$ is in $B$. Thus, there is no element in $A$ which is not in $B$. Hence, $A - B = \\phi$.<br><br>
    • <strong>(ii) $\\implies$ (iii):</strong> Let $A - B = \\phi$. This means $A$ has no elements outside $B$, so $A \\subset B$. Therefore, the union of all elements in $A$ and $B$ equals $B$, i.e., $A \\cup B = B$.<br><br>
    • <strong>(iii) $\\implies$ (iv):</strong> Let $A \\cup B = B$. Then $A \\subset B$. The common elements between $A$ and $B$ must be all of $A$. Hence, $A \\cap B = A$.<br><br>
    • <strong>(iv) $\\implies$ (i):</strong> Let $A \\cap B = A$. This means every element of $A$ belongs to $B$. Hence, $A \\subset B$.<br><br>
    Therefore, all four statements are completely equivalent.
  </div>`,
  '3 Marks',
  [['Proving cyclic chain (i) => (ii) => (iii)', '1.5 Marks'], ['Proving (iii) => (iv) => (i)', '1.5 Marks']]
));

misc.push(createQCard(
  'c11m-ch1-q45', 'Question 5', 'Miscellaneous',
  'Show that if A ⊂ B, then C − B ⊂ C − A.',
  `<div class="step">
    <strong>Given:</strong> $A \\subset B$.<br>
    <strong>To Prove:</strong> $(C - B) \\subset (C - A)$.<br><br>
    Let $x \\in (C - B)$.<br>
    $\\implies x \\in C \\text{ and } x \\notin B$.<br>
    Since $A \\subset B$, if $x$ were in $A$, it would have to be in $B$.<br>
    Therefore, $x \\notin B \\implies x \\notin A$.<br>
    So we have $x \\in C \\text{ and } x \\notin A$.<br>
    $\\implies x \\in (C - A)$.<br><br>
    Since every element $x \\in (C - B)$ also belongs to $(C - A)$:
    $$\\mathbf{(C - B) \\subset (C - A)}$$
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Setting x in C - B and unfolding definition', '1 Mark'], ['Deducing x not in A from A ⊂ B and concluding subset', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch1-q46', 'Question 6', 'Miscellaneous',
  'Assume that P(A) = P(B). Show that A = B.',
  `<div class="step">
    <strong>Given:</strong> $P(A) = P(B)$, where $P(X)$ denotes the power set of $X$.<br>
    <strong>To Prove:</strong> $A = B$.<br><br>
    <strong>Part 1: Prove A ⊂ B:</strong><br>
    Let $x \\in A$.<br>
    Then the singleton set $\{x\}$ is a subset of $A$, i.e., $\{x\} \\subset A$.<br>
    By definition of power set, $\{x\} \\in P(A)$.<br>
    Since $P(A) = P(B)$, $\{x\} \\in P(B)$.<br>
    $\\implies \{x\} \\subset B \\implies x \\in B$.<br>
    Since every $x \\in A$ belongs to $B$, we have <strong>A ⊂ B</strong> &nbsp;--- (1)<br><br>

    <strong>Part 2: Prove B ⊂ A:</strong><br>
    Let $y \\in B \\implies \{y\} \\subset B \\implies \{y\} \\in P(B)$.<br>
    Since $P(B) = P(A)$, $\{y\} \\in P(A)$.<br>
    $\\implies \{y\} \\subset A \\implies y \\in A$.<br>
    Thus, <strong>B ⊂ A</strong> &nbsp;--- (2)<br><br>

    From (1) and (2), $A \\subset B$ and $B \\subset A \\implies \\mathbf{A = B}$.<br>
    <strong>Hence proved.</strong>
  </div>`,
  '3 Marks',
  [['Showing A ⊂ B using singleton subset {x} ∈ P(A)', '1.5 Marks'], ['Showing B ⊂ A similarly and concluding A = B', '1.5 Marks']]
));

misc.push(createQCard(
  'c11m-ch1-q47', 'Question 7', 'Miscellaneous',
  'Is it true that for any sets A and B, P(A) ∪ P(B) = P(A ∪ B)? Justify your answer.',
  `<div class="step">
    <strong>Answer: No, it is not true.</strong><br><br>
    <strong>Counterexample:</strong><br>
    Let $A = \\{1\\}$ and $B = \\{2\\}$.<br>
    • $P(A) = \\{\\phi, \\{1\\}\\}$<br>
    • $P(B) = \\{\\phi, \\{2\\}\\}$<br>
    • LHS: $P(A) \\cup P(B) = \\{\\phi, \\{1\\}, \\{2\\}\\}$<br><br>
    Now find RHS:<br>
    $A \\cup B = \\{1, 2\\}$.<br>
    • RHS: $P(A \\cup B) = \\{\\phi, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}$.<br><br>
    Observe that $\\{1, 2\\} \\in P(A \\cup B)$, but $\\{1, 2\\} \\notin P(A) \\cup P(B)$.<br>
    Hence, $\\text{LHS} \\ne \\text{RHS}$. In general, $P(A) \\cup P(B) \\subset P(A \\cup B)$, but equality does not hold.
  </div>`,
  '2 Marks',
  [['Clear statement that the claim is False', '0.5 Mark'], ['Concrete counterexample with calculations showing inequality', '1.5 Marks']]
));

misc.push(createQCard(
  'c11m-ch1-q48', 'Question 8', 'Miscellaneous',
  'Show that for any sets A and B,<br>' +
  'A = (A ∩ B) ∪ (A − B) and A ∪ (B − A) = (A ∪ B)',
  `<div class="step">
    <strong>Part 1: Prove A = (A ∩ B) ∪ (A − B):</strong><br>
    RHS = $(A \\cap B) \\cup (A \\cap B')$ &nbsp;&nbsp;[since $A - B = A \\cap B'$]<br>
    Apply distributive property of $\\cap$ over $\\cup$:<br>
    RHS = $A \\cap (B \\cup B')$<br>
    Since $B \\cup B' = U$ (universal set):<br>
    RHS = $A \\cap U = A = \\text{LHS}$.<br>
    <strong>Hence, A = (A ∩ B) ∪ (A − B).</strong><br><br>

    <strong>Part 2: Prove A ∪ (B − A) = (A ∪ B):</strong><br>
    LHS = $A \\cup (B \\cap A')$<br>
    Apply distributive property of $\\cup$ over $\\cap$:<br>
    LHS = $(A \\cup B) \\cap (A \\cup A')$<br>
    Since $A \\cup A' = U$:<br>
    LHS = $(A \\cup B) \\cap U = A \\cup B = \\text{RHS}$.<br>
    <strong>Hence, A ∪ (B − A) = A ∪ B.</strong>
  </div>`,
  '3 Marks',
  [['Proof of Part 1 using B ∪ B\' = U', '1.5 Marks'], ['Proof of Part 2 using distributive law and A ∪ A\' = U', '1.5 Marks']]
));

misc.push(createQCard(
  'c11m-ch1-q49', 'Question 9', 'Miscellaneous',
  'Using properties of sets, show that<br>' +
  '(i) A ∪ (A ∩ B) = A<br>' +
  '(ii) A ∩ (A ∪ B) = A',
  `<div class="step">
    <strong>(i) Show A ∪ (A ∩ B) = A (Absorption Law):</strong><br>
    LHS = $(A \\cap U) \\cup (A \\cap B)$ &nbsp;&nbsp;[since $A = A \\cap U$]<br>
    $= A \\cap (U \\cup B)$ &nbsp;&nbsp;[by distributive law]<br>
    Since $U \\cup B = U$:<br>
    $= A \\cap U = A = \\text{RHS}$.<br>
    <strong>Hence proved.</strong><br><br>

    <strong>(ii) Show A ∩ (A ∪ B) = A:</strong><br>
    LHS = $(A \\cup \\phi) \\cap (A \\cup B)$ &nbsp;&nbsp;[since $A = A \\cup \\phi$]<br>
    $= A \\cup (\\phi \\cap B)$ &nbsp;&nbsp;[by distributive law]<br>
    Since $\\phi \\cap B = \\phi$:<br>
    $= A \\cup \\phi = A = \\text{RHS}$.<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Proof of absorption law (i) using distributive property', '1 Mark'], ['Proof of absorption law (ii) using empty set identity', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch1-q50', 'Question 10', 'Miscellaneous',
  'Show that A ∩ B = A ∩ C need not imply B = C.',
  `<div class="step">
    To prove this, we construct a counterexample where $A \\cap B = A \\cap C$ but $B \\ne C$.<br><br>
    Let:
    $$A = \\{0, 1\\}, \\quad B = \\{1, 2\\}, \\quad C = \\{1, 3\\}$$
    Now calculate the intersections:
    $$A \\cap B = \\{0, 1\\} \\cap \\{1, 2\\} = \\{1\\}$$
    $$A \\cap C = \\{0, 1\\} \\cap \\{1, 3\\} = \\{1\\}$$
    Here, $A \\cap B = A \\cap C = \\{1\\}$.<br>
    However:
    $$B = \\{1, 2\\} \\ne \\{1, 3\\} = C$$
    <strong>Thus, A ∩ B = A ∩ C does NOT imply B = C.</strong>
  </div>`,
  '2 Marks',
  [['Providing valid sets A, B, C', '1 Mark'], ['Computing intersections and showing B ≠ C', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch1-q51', 'Question 11', 'Miscellaneous',
  'Let A and B be sets. If A ∩ X = B ∩ X = Φ and A ∪ X = B ∪ X for some set X, show that A = B.<br>' +
  '(Hints: A = A ∩ (A ∪ X), B = B ∩ (B ∪ X) and use Distributive law)',
  `<div class="step">
    <strong>Given:</strong> $A \\cap X = B \\cap X = \\phi$ and $A \\cup X = B \\cup X$.<br>
    <strong>To Prove:</strong> $A = B$.<br><br>
    Start with $A$:
    $$A = A \\cap (A \\cup X)$$
    Since $A \\cup X = B \\cup X$, substitute:
    $$A = A \\cap (B \\cup X)$$
    Apply the Distributive Law of $\\cap$ over $\\cup$:
    $$A = (A \\cap B) \\cup (A \\cap X)$$
    Since given $A \\cap X = \\phi$:
    $$A = (A \\cap B) \\cup \\phi = A \\cap B \\quad \\text{--- (1)}$$<br>
    
    Now start with $B$:
    $$B = B \\cap (B \\cup X)$$
    Since $B \\cup X = A \\cup X$:
    $$B = B \\cap (A \\cup X) = (B \\cap A) \\cup (B \\cap X)$$
    Since given $B \\cap X = \\phi$:
    $$B = (B \\cap A) \\cup \\phi = B \\cap A = A \\cap B \\quad \\text{--- (2)}$$<br>

    Comparing (1) and (2):
    $$A = A \\cap B \\quad \\text{and} \\quad B = A \\cap B \\implies \\mathbf{A = B}$$
    <strong>Hence proved.</strong>
  </div>`,
  '3 Marks',
  [['Expressing A = A ∩ (B ∪ X) and expanding with distributive law', '1.5 Marks'], ['Expressing B = B ∩ (A ∪ X) and concluding A = B', '1.5 Marks']]
));

misc.push(createQCard(
  'c11m-ch1-q52', 'Question 12', 'Miscellaneous',
  'Find sets A, B and C such that A ∩ B, B ∩ C and A ∩ C are non-empty sets and A ∩ B ∩ C = Φ.',
  `<div class="step">
    We need pairwise intersections to be non-empty, but all three sets cannot have any single element in common.<br><br>
    Let:
    $$A = \\{1, 2\\}$$
    $$B = \\{2, 3\\}$$
    $$C = \\{1, 3\\}$$
    Now verify each condition:
    <ul>
      <li>$A \\cap B = \\{1, 2\\} \\cap \\{2, 3\\} = \\{2\\} \\ne \\phi$</li>
      <li>$B \\cap C = \\{2, 3\\} \\cap \\{1, 3\\} = \\{3\\} \\ne \\phi$</li>
      <li>$A \\cap C = \\{1, 2\\} \\cap \\{1, 3\\} = \\{1\\} \\ne \\phi$</li>
    </ul>
    Now calculate the triple intersection:
    $$A \\cap B \\cap C = (A \\cap B) \\cap C = \\{2\\} \\cap \\{1, 3\\} = \\mathbf{\\phi}$$
    Hence, the sets $A = \\{1, 2\\}, B = \\{2, 3\\}, C = \\{1, 3\\}$ completely satisfy all required conditions.
  </div>`,
  '2 Marks',
  [['Defining sets A, B, C correctly', '1 Mark'], ['Verifying pairwise non-empty and triple empty intersection', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch1-q53', 'Question 13', 'Miscellaneous',
  'In a survey of 600 students in a school, 150 students were found to be taking tea and 225 taking coffee, 100 were taking both tea and coffee. Find how many students were taking neither tea nor coffee?',
  `<div class="step">
    Let $U$ be the universal set of all students surveyed, $T$ be the set of students taking tea, and $C$ be the set of students taking coffee.<br><br>
    <strong>Given:</strong><br>
    • Total students surveyed $n(U) = 600$<br>
    • Students taking tea $n(T) = 150$<br>
    • Students taking coffee $n(C) = 225$<br>
    • Students taking both $n(T \\cap C) = 100$<br><br>

    <strong>Step 1: Find students taking either tea or coffee $n(T \\cup C)$:</strong><br>
    $$n(T \\cup C) = n(T) + n(C) - n(T \\cap C)$$
    $$n(T \\cup C) = 150 + 225 - 100 = 375 - 100 = 275$$<br>

    <strong>Step 2: Find students taking neither tea nor coffee:</strong><br>
    By De Morgan's Law, neither tea nor coffee is $(T \\cup C)'$:
    $$n(T' \\cap C') = n(T \\cup C)' = n(U) - n(T \\cup C)$$
    $$n(T \\cup C)' = 600 - 275 = \\mathbf{325}$$<br>
    <strong>Answer: 325 students were taking neither tea nor coffee.</strong>
  </div>`,
  '3 Marks',
  [['Applying union formula n(T ∪ C) = n(T) + n(C) - n(T ∩ C)', '1.5 Marks'], ['Calculating complement n(U) - n(T ∪ C) = 325', '1.5 Marks']]
));

misc.push(createQCard(
  'c11m-ch1-q54', 'Question 14', 'Miscellaneous',
  'In a group of 100 students, 100 know Hindi, 50 know English and 25 know both. Each of the students knows either Hindi or English. How many students know Hindi only?',
  `<div class="step">
    Let $H$ be the set of students knowing Hindi and $E$ be the set of students knowing English.<br><br>
    <strong>Given:</strong><br>
    • Total students $n(H \\cup E) = 100$ (or in group)<br>
    • Students who know Hindi $n(H) = 100$<br>
    • Students who know English $n(E) = 50$<br>
    • Students who know both $n(H \\cap E) = 25$<br><br>

    <strong>To Find:</strong> Number of students who know Hindi only, which is $n(H - E)$.<br><br>
    <strong>Formula:</strong><br>
    $$n(H - E) = n(H) - n(H \\cap E)$$
    $$n(H - E) = 100 - 25 = \\mathbf{75}$$<br>
    <strong>Answer: 75 students know Hindi only.</strong>
  </div>`,
  '2 Marks',
  [['Formula n(H - E) = n(H) - n(H ∩ E)', '1 Mark'], ['Correct calculation yielding 75', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch1-q55', 'Question 15', 'Miscellaneous',
  'In a survey of 60 people, it was found that 25 people read newspaper H, 26 read newspaper T, 26 read newspaper I, 9 read both H and I, 11 read both H and T, 8 read both T and I, 3 read all three newspapers. Find:<br>' +
  '(i) the number of people who read at least one of the newspapers.<br>' +
  '(ii) the number of people who read exactly one newspaper.',
  `<div class="step">
    Let $H, T, I$ denote the sets of people reading newspapers H, T, and I respectively.<br><br>
    <strong>Given data:</strong>
    $$n(U) = 60$$
    $$n(H) = 25, \\quad n(T) = 26, \\quad n(I) = 26$$
    $$n(H \\cap T) = 11, \\quad n(H \\cap I) = 9, \\quad n(T \\cap I) = 8$$
    $$n(H \\cap T \\cap I) = 3$$

    <div style="background:#f1f5f9; border:1px solid #cbd5e1; border-radius:12px; padding:16px; margin:16px 0; text-align:center;">
      <div style="font-weight:700; color:#0f172a; margin-bottom:8px;">Venn Diagram for 3 Newspapers (H, T, I)</div>
      <svg viewBox="0 0 320 230" width="100%" height="210" style="max-width:340px; background:#ffffff; border-radius:8px; border:1px solid #94a3b8;">
        <!-- Circle H (top-left) -->
        <circle cx="120" cy="95" r="60" fill="#fee2e2" fill-opacity="0.6" stroke="#ef4444" stroke-width="2"/>
        <!-- Circle T (top-right) -->
        <circle cx="200" cy="95" r="60" fill="#e0e7ff" fill-opacity="0.6" stroke="#6366f1" stroke-width="2"/>
        <!-- Circle I (bottom) -->
        <circle cx="160" cy="145" r="60" fill="#dcfce7" fill-opacity="0.6" stroke="#22c55e" stroke-width="2"/>
        <!-- Labels for sets -->
        <text x="75" y="55" font-size="13" font-weight="bold" fill="#b91c1c">H (25)</text>
        <text x="215" y="55" font-size="13" font-weight="bold" fill="#4338ca">T (26)</text>
        <text x="160" y="220" font-size="13" font-weight="bold" fill="#15803d" text-anchor="middle">I (26)</text>
        <!-- Region numbers -->
        <text x="160" y="125" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">3</text>
        <text x="160" y="80" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">8</text>
        <text x="130" y="130" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">6</text>
        <text x="190" y="130" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">5</text>
        <text x="95" y="95" font-size="12" font-weight="bold" fill="#991b1b">8</text>
        <text x="225" y="95" font-size="12" font-weight="bold" fill="#3730a3">10</text>
        <text x="160" y="175" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">12</text>
      </svg>
    </div>

    <strong>(i) People who read at least one newspaper $n(H \\cup T \\cup I)$:</strong><br>
    By the 3-Set Inclusion-Exclusion Principle:
    $$n(H \\cup T \\cup I) = n(H) + n(T) + n(I) - n(H \\cap T) - n(H \\cap I) - n(T \\cap I) + n(H \\cap T \\cap I)$$
    $$n(H \\cup T \\cup I) = 25 + 26 + 26 - 11 - 9 - 8 + 3$$
    $$n(H \\cup T \\cup I) = 77 - 28 + 3 = 49 + 3 = \\mathbf{52}$$<br>

    <strong>(ii) Number of people who read exactly one newspaper:</strong><br>
    Break down each region:
    <ul>
      <li>Read all 3 = $3$</li>
      <li>Read only H and T = $11 - 3 = 8$</li>
      <li>Read only H and I = $9 - 3 = 6$</li>
      <li>Read only T and I = $8 - 3 = 5$</li>
      <li>Read H only = $25 - (8 + 3 + 6) = 25 - 17 = 8$</li>
      <li>Read T only = $26 - (8 + 3 + 5) = 26 - 16 = 10$</li>
      <li>Read I only = $26 - (6 + 3 + 5) = 26 - 14 = 12$</li>
    </ul>
    Total reading exactly one newspaper:
    $$\\text{Exactly one} = 8 + 10 + 12 = \\mathbf{30}$$<br>
    <strong>Answers: (i) 52 people read at least one newspaper; &nbsp; (ii) 30 people read exactly one newspaper.</strong>
  </div>`,
  '5 Marks',
  [['Formula and substitution for 3-set union n(H ∪ T ∪ I) = 52', '2.5 Marks'], ['Region-by-region Venn breakdown and summing 8 + 10 + 12 = 30', '2.5 Marks']]
));

misc.push(createQCard(
  'c11m-ch1-q56', 'Question 16', 'Miscellaneous',
  'In a survey it was found that 21 people liked product A, 26 liked product B and 29 liked product C. If 14 people liked products A and B, 12 people liked products C and A, 14 people liked products B and C and 8 liked all the three products. Find how many liked product C only.',
  `<div class="step">
    Let $A, B, C$ represent the sets of people who liked products A, B, and C respectively.<br><br>
    <strong>Given:</strong><br>
    • $n(A) = 21$<br>
    • $n(B) = 26$<br>
    • $n(C) = 29$<br>
    • $n(A \\cap B) = 14$<br>
    • $n(C \\cap A) = 12$<br>
    • $n(B \\cap C) = 14$<br>
    • $n(A \\cap B \\cap C) = 8$<br><br>

    <strong>To Find:</strong> Number of people who liked product C only, denoted by $n(C \\text{ only})$.<br><br>
    <strong>Step-by-step Region Breakdown:</strong>
    <ul>
      <li>People who liked all three products = $n(A \\cap B \\cap C) = 8$</li>
      <li>People who liked C and A only = $n(C \\cap A) - n(A \\cap B \\cap C) = 12 - 8 = 4$</li>
      <li>People who liked C and B only = $n(B \\cap C) - n(A \\cap B \\cap C) = 14 - 8 = 6$</li>
    </ul>
    Now subtract these intersection portions from the total who liked C ($n(C) = 29$):<br>
    $$n(C \\text{ only}) = n(C) - [\\text{liked C and A only}] - [\\text{liked C and B only}] - [\\text{liked all three}]$$
    $$n(C \\text{ only}) = 29 - 4 - 6 - 8 = 29 - 18 = \\mathbf{11}$$<br>
    <strong>Answer: 11 people liked product C only.</strong>
  </div>`,
  '3 Marks',
  [['Identifying 2-set unique intersections with C (4 and 6)', '1.5 Marks'], ['Subtracting from total n(C) = 29 to obtain 11', '1.5 Marks']]
));

// Assemble Chapter 1 HTML
const allQuestions = [...ex1_1, ...ex1_2, ...ex1_3, ...ex1_4, ...ex1_5, ...misc];
console.log(`Total questions compiled: ${allQuestions.length}`);

const chapterHtml = `
<section class="chapter-section" id="ch1">
  <div class="chapter-header">
    <div class="ch-badge">1</div>
    <div class="chapter-header-info">
      <div class="ch-category">Mathematics • Class 11 CBSE (NCERT Rationalised 2026–27)</div>
      <h2>Chapter 1: Sets</h2>
      <p>Empty Sets, Finite & Infinite Sets, Subsets, Power Sets, Universal Sets, Venn Diagrams, Union, Intersection, Difference & Practical Applications — Complete 56 Questions Verbatim with Official CBSE Marking Scheme</p>
    </div>
  </div>

  <div class="ex-div">NCERT Exercise 1.1: Sets Definition, Belongs to Symbol, Roster & Set-Builder Forms</div>
${ex1_1.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Exercise 1.2: Empty Set, Finite & Infinite Sets, Equal Sets</div>
${ex1_2.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Exercise 1.3: Subsets, Proper Subsets, Power Sets, Intervals of Real Numbers, Universal Sets</div>
${ex1_3.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Exercise 1.4: Union, Intersection, Disjoint Sets, Difference of Sets</div>
${ex1_4.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Exercise 1.5: Complement of Sets, De Morgan's Laws & Venn Diagrams</div>
${ex1_5.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Miscellaneous Exercise on Chapter 1: Comprehensive Proofs, Algebraic Identities & 3-Set Surveys</div>
${misc.join('\n')}

  <div class="chapter-nav-btns" style="margin-top:40px; display:flex; justify-content:space-between; align-items:center;">
    <div></div>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})" style="padding:10px 20px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer;">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(2)" style="padding:10px 24px; border-radius:8px; border:none; background:#ff6b00; color:white; font-weight:700; cursor:pointer;">Next: Chapter 2 (Relations & Functions) →</button>
  </div>
</section>
`;

// Write ch1.html
const ch1Path = path.join(outDir, 'ch1.html');
fs.writeFileSync(ch1Path, chapterHtml.trim(), 'utf8');
console.log(`Successfully generated: ${ch1Path} (${chapterHtml.length} bytes)`);

// Write chapters-data.js so chapters load instantly offline/online
const dataJsPath = path.join(outDir, 'chapters-data.js');
const dataJsContent = `// Preloaded Chapter Data for Class 11 Mathematics
window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA[1] = ${JSON.stringify(chapterHtml.trim())};
`;
fs.writeFileSync(dataJsPath, dataJsContent, 'utf8');
console.log(`Successfully generated preloaded cache: ${dataJsPath}`);
