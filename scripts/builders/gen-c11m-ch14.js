// scripts/builders/gen-c11m-ch14.js
// Complete, verbatim NCERT generator for Class 11 Mathematics Chapter 14: Probability (All 36 Questions)
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
const ex14_1 = []; // Sample Spaces (16 Qs)
const ex14_2 = []; // Axiomatic Probability & Addition Rule (20 Qs)

// ============================================================================
// EXERCISE 14.1: Sample Spaces of Random Experiments (Questions 1 to 16)
// ============================================================================

ex14_1.push(createQCard(
  'c11m-ch14-q1', 'Question 1', 'Exercise 14.1',
  'A coin is tossed three times. Find the sample space.',
  `<div class="step">
    • When a coin is tossed once, the possible outcomes are Head ($H$) and Tail ($T$).<br>
    • When tossed three times, each toss has $2$ outcomes. Total outcomes $= 2^3 = 8$.<br>
    • The sample space $S$ is the set of all possible outcomes:<br>
      $$\\mathbf{S = \\{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT\\}}$$
  </div>`,
  '1 Mark',
  [
    ['Determining total outcomes $2^3 = 8$', '0.5 Mark'],
    ['Writing complete sample space set $S$', '0.5 Mark']
  ]
));

ex14_1.push(createQCard(
  'c11m-ch14-q2', 'Question 2', 'Exercise 14.1',
  'A die is thrown two times. Find the sample space.',
  `<div class="step">
    • Each throw of a die produces an outcome from $\\{1, 2, 3, 4, 5, 6\\}$.<br>
    • When thrown two times, total elementary outcomes $= 6 \\times 6 = 36$.<br>
    • An outcome is represented as an ordered pair $(x, y)$, where $x, y \\in \\{1, 2, 3, 4, 5, 6\\}$:<br>
      $$\\mathbf{S = \\{(x, y) : x, y \\in \\{1, 2, 3, 4, 5, 6\\}\\}}$$<br>
      $$S = \\{(1,1), (1,2), \\dots, (1,6), (2,1), \\dots, (2,6), \\dots, (6,1), \\dots, (6,6)\\}$$<br>
    • Total number of elements $n(S) = 36$.
  </div>`,
  '1 Mark',
  [
    ['Specifying ordered pair notation $(x, y)$', '0.5 Mark'],
    ['Writing sample space with total $36$ outcomes', '0.5 Mark']
  ]
));

ex14_1.push(createQCard(
  'c11m-ch14-q3', 'Question 3', 'Exercise 14.1',
  'A coin is tossed four times. Find the sample space.',
  `<div class="step">
    • Total number of outcomes $= 2^4 = 16$.<br>
    • The sample space $S$ consists of all $16$ sequences of length $4$:<br>
      $$\\mathbf{S = \\{HHHH, HHHT, HHTH, HHTT, HTHH, HTHT, HTTH, HTTT,}}$$
      $$\\mathbf{THHH, THHT, THTH, THTT, TTHH, TTHT, TTTH, TTTT\\}}$$
  </div>`,
  '2 Marks',
  [
    ['Determining total outcomes $2^4 = 16$', '0.5 Mark'],
    ['Listing all 16 outcomes exhaustively', '1.5 Marks']
  ]
));

ex14_1.push(createQCard(
  'c11m-ch14-q4', 'Question 4', 'Exercise 14.1',
  'A coin is tossed and a die is thrown. Find the sample space.',
  `<div class="step">
    • A coin outcome is in $\\{H, T\\}$ and a die outcome is in $\\{1, 2, 3, 4, 5, 6\\}$.<br>
    • Total outcomes $= 2 \\times 6 = 12$.<br>
    • The sample space $S$ is:<br>
      $$\\mathbf{S = \\{H1, H2, H3, H4, H5, H6, T1, T2, T3, T4, T5, T6\\}}$$
  </div>`,
  '1 Mark',
  [
    ['Listing all $12$ ordered combinations', '1 Mark']
  ]
));

ex14_1.push(createQCard(
  'c11m-ch14-q5', 'Question 5', 'Exercise 14.1',
  'A coin is tossed and then a die is rolled only in case a head turns up. Find the sample space.',
  `<div class="step">
    • If the coin turns up Tail ($T$), the experiment terminates with outcome $T$.<br>
    • If the coin turns up Head ($H$), a die is rolled, giving outcomes $1, 2, 3, 4, 5, 6$.<br>
    • Therefore, the sample space $S$ is:<br>
      $$\\mathbf{S = \\{T, H1, H2, H3, H4, H5, H6\\}}$$
  </div>`,
  '1 Mark',
  [
    ['Identifying tail terminates and head branches into die numbers', '0.5 Mark'],
    ['Listing $7$ outcomes of the sample space', '0.5 Mark']
  ]
));

ex14_1.push(createQCard(
  'c11m-ch14-q6', 'Question 6', 'Exercise 14.1',
  '2 boys and 2 girls are in Room X, and 1 boy and 3 girls in Room Y. Specify the sample space for the experiment in which a room is selected and then a person.',
  `<div class="step">
    • Let the two rooms be $X$ and $Y$.<br>
    • Persons in Room $X$: 2 boys denoted by $B_1, B_2$ and 2 girls denoted by $G_1, G_2$.<br>
    • Persons in Room $Y$: 1 boy denoted by $B_3$ and 3 girls denoted by $G_3, G_4, G_5$.<br>
    • Experiment: Select a room, then select a person from that room.<br>
    • The sample space $S$ is:<br>
      $$\\mathbf{S = \\{XB_1, XB_2, XG_1, XG_2, YB_3, YG_3, YG_4, YG_5\\}}$$
  </div>`,
  '2 Marks',
  [
    ['Denoting persons in Room X and Room Y clearly', '1 Mark'],
    ['Listing all 8 outcomes in sample space', '1 Mark']
  ]
));

ex14_1.push(createQCard(
  'c11m-ch14-q7', 'Question 7', 'Exercise 14.1',
  'One die of red colour, one of white colour and one of blue colour are placed in a bag. One die is selected at random and rolled, its colour and the number on its uppermost face is noted. Describe the sample space.',
  `<div class="step">
    • Let the colours of the dice be denoted by $R$ (Red), $W$ (White), and $B$ (Blue).<br>
    • When a die is rolled, the uppermost face can be any integer from $\\{1, 2, 3, 4, 5, 6\\}$.<br>
    • Total outcomes $= 3 \\times 6 = 18$.<br>
    • The sample space $S$ is:<br>
      $$\\mathbf{S = \\{R1, R2, R3, R4, R5, R6, W1, W2, W3, W4, W5, W6, B1, B2, B3, B4, B5, B6\\}}$$
  </div>`,
  '2 Marks',
  [
    ['Identifying 3 colors and 6 faces per die', '0.5 Mark'],
    ['Writing complete sample space of 18 outcomes', '1.5 Marks']
  ]
));

ex14_1.push(createQCard(
  'c11m-ch14-q8', 'Question 8', 'Exercise 14.1',
  'An experiment consists of recording boy-girl composition of families with 2 children:<br>(i) What is the sample space if we are interested in knowing whether it is a boy or girl in the order of their births?<br>(ii) What is the sample space if we are interested in the number of girls in the family?',
  `<div class="step">
    • Let $B$ represent a boy and $G$ represent a girl.<br>
    • <b>(i) Sample space by birth order:</b><br>
      First child can be $B$ or $G$, second child can be $B$ or $G$.<br>
      $$\\mathbf{S_1 = \\{BB, BG, GB, GG\\}}$$<br>
    • <b>(ii) Sample space for number of girls in the family:</b><br>
      A 2-child family can have $0$ girls ($BB$), $1$ girl ($BG, GB$), or $2$ girls ($GG$).<br>
      $$\\mathbf{S_2 = \\{0, 1, 2\\}}$$
  </div>`,
  '2 Marks',
  [
    ['Part (i): $S_1 = \\{BB, BG, GB, GG\\}$', '1 Mark'],
    ['Part (ii): $S_2 = \\{0, 1, 2\\}$', '1 Mark']
  ]
));

ex14_1.push(createQCard(
  'c11m-ch14-q9', 'Question 9', 'Exercise 14.1',
  'A box contains 1 red and 3 identical white balls. Two balls are drawn at random in succession without replacement. Write the sample space for this experiment.',
  `<div class="step">
    • Let the red ball be denoted by $R$ and the three identical white balls be denoted by $W$.<br>
    • Two balls are drawn in succession without replacement.<br>
    • Possible outcomes of the sequence of colors drawn:<br>
      1. First is Red, second is White: $(R, W)$<br>
      2. First is White, second is Red: $(W, R)$<br>
      3. First is White, second is White: $(W, W)$<br>
      (Note: Drawing two red balls $(R, R)$ is impossible since there is only 1 red ball).<br>
    • Hence, the sample space is:<br>
      $$\\mathbf{S = \\{RW, WR, WW\\}}$$
  </div>`,
  '2 Marks',
  [
    ['Explaining that $(R, R)$ is impossible', '0.5 Mark'],
    ['Writing sample space $S = \\{RW, WR, WW\\}$', '1.5 Marks']
  ]
));

ex14_1.push(createQCard(
  'c11m-ch14-q10', 'Question 10', 'Exercise 14.1',
  'An experiment consists of tossing a coin and then throwing it second time if a head occurs. If a tail occurs on the first toss, then a die is rolled once. Find the sample space.',
  `<div class="step">
    • On the first toss of the coin:<br>
      - If Head ($H$) occurs: the coin is tossed a second time, resulting in $HH$ or $HT$.<br>
      - If Tail ($T$) occurs: a die is rolled once, resulting in $T1, T2, T3, T4, T5, T6$.<br>
    • Therefore, the sample space $S$ is:<br>
      $$\\mathbf{S = \\{HH, HT, T1, T2, T3, T4, T5, T6\\}}$$
  </div>`,
  '2 Marks',
  [
    ['Branching for Head and Tail cases', '1 Mark'],
    ['Listing all 8 outcomes of sample space', '1 Mark']
  ]
));

ex14_1.push(createQCard(
  'c11m-ch14-q11', 'Question 11', 'Exercise 14.1',
  'Suppose 3 bulbs are selected at random from a lot. Each bulb is tested and classified as defective (D) or non-defective (N). Write the sample space of this experiment.',
  `<div class="step">
    • Each tested bulb has $2$ possible classifications: $D$ (Defective) or $N$ (Non-defective).<br>
    • For 3 bulbs, total outcomes $= 2^3 = 8$.<br>
    • The sample space $S$ is:<br>
      $$\\mathbf{S = \\{DDD, DDN, DND, DNN, NDD, NDN, NND, NNN\\}}$$
  </div>`,
  '2 Marks',
  [
    ['Determining total outcomes $2^3 = 8$', '0.5 Mark'],
    ['Listing all 8 sequences in sample space', '1.5 Marks']
  ]
));

ex14_1.push(createQCard(
  'c11m-ch14-q12', 'Question 12', 'Exercise 14.1',
  'A coin is tossed. If the outcome is a head, a die is thrown. If the die shows up an even number, the die is thrown again. What is the sample space for the experiment?',
  `<div class="step">
    • <b>Case 1:</b> Coin turns up Tail ($T$) $\\rightarrow$ outcome is $\\mathbf{T}$.<br>
    • <b>Case 2:</b> Coin turns up Head ($H$) $\\rightarrow$ a die is thrown (faces $1, 2, 3, 4, 5, 6$):<br>
      - If the die shows an <b>odd number</b> ($1, 3, 5$), the experiment stops: $\\mathbf{H1, H3, H5}$.<br>
      - If the die shows an <b>even number</b> ($2, 4, 6$), the die is thrown again ($1$ to $6$):<br>
        For die showing $2$: $H21, H22, H23, H24, H25, H26$<br>
        For die showing $4$: $H41, H42, H43, H44, H45, H46$<br>
        For die showing $6$: $H61, H62, H63, H64, H65, H66$<br>
    • Total outcomes $= 1 + 3 + 18 = 22$.<br>
    • The sample space $S$ is:<br>
      $$\\mathbf{S = \\{T, H1, H3, H5, H21, H22, H23, H24, H25, H26,}$$
      $$\\mathbf{H41, H42, H43, H44, H45, H46, H61, H62, H63, H64, H65, H66\\}}$$
  </div>`,
  '3 Marks',
  [
    ['Identifying tail and odd-die termination', '1 Mark'],
    ['Branching even-die outcomes to second die roll', '1 Mark'],
    ['Listing all 22 outcomes of the sample space', '1 Mark']
  ]
));

ex14_1.push(createQCard(
  'c11m-ch14-q13', 'Question 13', 'Exercise 14.1',
  'The numbers 1, 2, 3 and 4 are written separately on four slips of paper. The slips are put in a box and mixed thoroughly. A person draws two slips from the box, one after another, without replacement. Describe the sample space for the experiment.',
  `<div class="step">
    • Two slips are drawn without replacement from $\\{1, 2, 3, 4\\}$.<br>
    • The outcome is an ordered pair $(x, y)$ where $x, y \\in \\{1, 2, 3, 4\\}$ and $x \\neq y$.<br>
    • Number of outcomes $= 4 \\times 3 = 12$.<br>
    • The sample space $S$ is:<br>
      $$\\mathbf{S = \\{(1,2), (1,3), (1,4), (2,1), (2,3), (2,4), (3,1), (3,2), (3,4), (4,1), (4,2), (4,3)\\}}$$
  </div>`,
  '2 Marks',
  [
    ['Recognizing without-replacement ordered pairs', '0.5 Mark'],
    ['Listing all 12 pairs in sample space', '1.5 Marks']
  ]
));

ex14_1.push(createQCard(
  'c11m-ch14-q14', 'Question 14', 'Exercise 14.1',
  'An experiment consists of rolling a die and then tossing a coin once if the number on the die is even. If the number on the die is odd, the coin is tossed twice. Write the sample space for this experiment.',
  `<div class="step">
    • A die is rolled, showing a number in $\\{1, 2, 3, 4, 5, 6\\}$.<br>
    • <b>If number is even ($\\{2, 4, 6\\}$):</b> coin is tossed once ($H$ or $T$).<br>
      Outcomes: $2H, 2T, 4H, 4T, 6H, 6T$ (6 outcomes).<br>
    • <b>If number is odd ($\\{1, 3, 5\\}$):</b> coin is tossed twice ($HH, HT, TH, TT$).<br>
      Outcomes:<br>
      $1HH, 1HT, 1TH, 1TT$<br>
      $3HH, 3HT, 3TH, 3TT$<br>
      $5HH, 5HT, 5TH, 5TT$ (12 outcomes).<br>
    • Total outcomes $= 6 + 12 = 18$.<br>
    • Sample space $S$ is:<br>
      $$\\mathbf{S = \\{2H, 2T, 4H, 4T, 6H, 6T, 1HH, 1HT, 1TH, 1TT, 3HH, 3HT, 3TH, 3TT, 5HH, 5HT, 5TH, 5TT\\}}$$
  </div>`,
  '3 Marks',
  [
    ['Even number single-toss outcomes (6)', '1 Mark'],
    ['Odd number double-toss outcomes (12)', '1 Mark'],
    ['Complete sample space of 18 outcomes', '1 Mark']
  ]
));

ex14_1.push(createQCard(
  'c11m-ch14-q15', 'Question 15', 'Exercise 14.1',
  'A coin is tossed. If it shows a tail, we draw a ball from a box which contains 2 red and 3 black balls. If it shows a head, we throw a die. Find the sample space for this experiment.',
  `<div class="step">
    • Let the 2 red balls be $R_1, R_2$ and the 3 black balls be $B_1, B_2, B_3$.<br>
    • When the coin shows <b>Tail ($T$)</b>, a ball is drawn:<br>
      Outcomes: $TR_1, TR_2, TB_1, TB_2, TB_3$.<br>
    • When the coin shows <b>Head ($H$)</b>, a die is thrown (faces $1$ to $6$):<br>
      Outcomes: $H1, H2, H3, H4, H5, H6$.<br>
    • Total outcomes $= 5 + 6 = 11$.<br>
    • The sample space $S$ is:<br>
      $$\\mathbf{S = \\{TR_1, TR_2, TB_1, TB_2, TB_3, H1, H2, H3, H4, H5, H6\\}}$$
  </div>`,
  '2 Marks',
  [
    ['Listing tail outcomes with balls', '1 Mark'],
    ['Listing head outcomes with die and writing sample space of 11 elements', '1 Mark']
  ]
));

ex14_1.push(createQCard(
  'c11m-ch14-q16', 'Question 16', 'Exercise 14.1',
  'A die is thrown repeatedly until a six comes up. What is the sample space for this experiment?',
  `<div class="step">
    • The die is thrown repeatedly until the number $6$ appears for the first time.<br>
    • In each throw, a non-six outcome is any of $\\{1, 2, 3, 4, 5\\}$, which we denote by $N$.<br>
    • Possible scenarios:<br>
      - 6 appears on the 1st throw: $\\mathbf{6}$<br>
      - 6 appears on the 2nd throw: $\\mathbf{(x, 6)}$ where $x \\in \\{1, 2, 3, 4, 5\\}$<br>
      - 6 appears on the 3rd throw: $\\mathbf{(x, y, 6)}$ where $x, y \\in \\{1, 2, 3, 4, 5\\}$<br>
      - And so on, indefinitely.<br>
    • The sample space $S$ is an <b>infinite set</b>:<br>
      $$\\mathbf{S = \\{6, (x, 6), (x, y, 6), (x, y, z, 6), \\dots\\}}$$
      where each coordinate before $6$ belongs to $\\{1, 2, 3, 4, 5\\}$.
  </div>`,
  '2 Marks',
  [
    ['Identifying experiment continues until first 6', '1 Mark'],
    ['Writing infinite sample space description', '1 Mark']
  ]
));

// ============================================================================
// EXERCISE 14.2: Axiomatic Probability & Addition Rules (Questions 17 to 36)
// ============================================================================

ex14_2.push(createQCard(
  'c11m-ch14-q17', 'Question 1', 'Exercise 14.2',
  'Which of the following cannot be valid assignments of probabilities for outcomes of sample space $S = \\{\\omega_1, \\omega_2, \\omega_3, \\omega_4, \\omega_5, \\omega_6, \\omega_7\\}$?<br>(a) $0.1, 0.01, 0.05, 0.03, 0.01, 0.2, 0.6$<br>(b) $\\frac{1}{7}, \\frac{1}{7}, \\frac{1}{7}, \\frac{1}{7}, \\frac{1}{7}, \\frac{1}{7}, \\frac{1}{7}$<br>(c) $0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7$<br>(d) $-0.1, 0.2, 0.3, 0.4, -0.2, 0.1, 0.3$<br>(e) $\\frac{1}{14}, \\frac{2}{14}, \\frac{3}{14}, \\frac{4}{14}, \\frac{5}{14}, \\frac{6}{14}, \\frac{15}{14}$',
  `<div class="step">
    • For a probability assignment to be valid, two axioms must hold:<br>
      1. $0 \\le P(\\omega_i) \\le 1$ for all $i$.<br>
      2. $\\sum_{i=1}^7 P(\\omega_i) = 1$.<br><br>
    • <b>(a)</b> All $P(\\omega_i) \\ge 0$ and $\\sum P = 0.1 + 0.01 + 0.05 + 0.03 + 0.01 + 0.2 + 0.6 = 1$. <b>Valid</b>.<br>
    • <b>(b)</b> Each is $1/7 \\in [0, 1]$ and sum is $7 \\times (1/7) = 1$. <b>Valid</b>.<br>
    • <b>(c)</b> Sum $= 0.1 + 0.2 + 0.3 + 0.4 + 0.5 + 0.6 + 0.7 = 2.8 \\neq 1$. <b>Invalid</b>.<br>
    • <b>(d)</b> $P(\\omega_1) = -0.1 < 0$ and $P(\\omega_5) = -0.2 < 0$ (probabilities cannot be negative). <b>Invalid</b>.<br>
    • <b>(e)</b> $P(\\omega_7) = \\frac{15}{14} > 1$ (probability cannot exceed 1). <b>Invalid</b>.<br><br>
    • <b>Assignments (c), (d), and (e) cannot be valid.</b>
  </div>`,
  '3 Marks',
  [
    ['Stating two fundamental axioms of probability', '1 Mark'],
    ['Checking parts (a) and (b) as valid', '0.5 Mark'],
    ['Identifying (c), (d), (e) as invalid with specific reasons', '1.5 Marks']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q18', 'Question 2', 'Exercise 14.2',
  'A coin is tossed twice, what is the probability that at least one tail occurs?',
  `<div class="step">
    • Sample space $S = \\{HH, HT, TH, TT\\} \\implies n(S) = 4$.<br>
    • Let event $E$: "At least one tail occurs".<br>
    • Favorable outcomes: $E = \\{HT, TH, TT\\} \\implies n(E) = 3$.<br>
    • Probability:<br>
      $$P(E) = \\frac{n(E)}{n(S)} = \\mathbf{\\frac{3}{4}}$$
  </div>`,
  '2 Marks',
  [
    ['Sample space $n(S) = 4$', '0.5 Mark'],
    ['Favorable outcomes $n(E) = 3$', '0.5 Mark'],
    ['$P(E) = 3/4$', '1 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q19', 'Question 3', 'Exercise 14.2',
  'A die is thrown, find the probability of following events:<br>(i) A prime number will appear<br>(ii) A number greater than or equal to 3 will appear<br>(iii) A number less than or equal to 1 will appear<br>(iv) A number more than 6 will appear<br>(v) A number less than 6 will appear.',
  `<div class="step">
    • Sample space $S = \\{1, 2, 3, 4, 5, 6\\} \\implies n(S) = 6$.<br>
    • <b>(i) Prime number:</b> $\\{2, 3, 5\\} \\implies P = \\frac{3}{6} = \\mathbf{\\frac{1}{2}}$<br>
    • <b>(ii) Number $\\ge 3$:</b> $\\{3, 4, 5, 6\\} \\implies P = \\frac{4}{6} = \\mathbf{\\frac{2}{3}}$<br>
    • <b>(iii) Number $\\le 1$:</b> $\\{1\\} \\implies P = \\mathbf{\\frac{1}{6}}$<br>
    • <b>(iv) Number $> 6$:</b> $\\emptyset \\implies P = \\frac{0}{6} = \\mathbf{0}$ (Impossible event)<br>
    • <b>(v) Number $< 6$:</b> $\\{1, 2, 3, 4, 5\\} \\implies P = \\mathbf{\\frac{5}{6}}$
  </div>`,
  '3 Marks',
  [
    ['Parts (i) and (ii): $1/2$ and $2/3$', '1 Mark'],
    ['Parts (iii) and (iv): $1/6$ and $0$', '1 Mark'],
    ['Part (v): $5/6$', '1 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q20', 'Question 4', 'Exercise 14.2',
  'A card is selected from a pack of 52 cards:<br>(i) How many points are there in the sample space?<br>(ii) Calculate the probability that the card is an ace of spades.<br>(iii) Calculate the probability that the card is (a) an ace (b) black card.',
  `<div class="step">
    • <b>(i)</b> Since a standard deck has 52 cards, total points in sample space $\\mathbf{n(S) = 52}$.<br>
    • <b>(ii)</b> There is only $1$ ace of spades in the deck:<br>
      $$P(\\text{Ace of Spades}) = \\mathbf{\\frac{1}{52}}$$<br>
    • <b>(iii)</b><br>
      (a) There are $4$ aces (Spades, Hearts, Diamonds, Clubs):<br>
      $$P(\\text{Ace}) = \\frac{4}{52} = \\mathbf{\\frac{1}{13}}$$<br>
      (b) There are $26$ black cards (13 Spades + 13 Clubs):<br>
      $$P(\\text{Black card}) = \\frac{26}{52} = \\mathbf{\\frac{1}{2}}$$
  </div>`,
  '3 Marks',
  [
    ['Part (i): $n(S) = 52$', '0.5 Mark'],
    ['Part (ii): $P = 1/52$', '0.5 Mark'],
    ['Part (iii)(a): $4/52 = 1/13$', '1 Mark'],
    ['Part (iii)(b): $26/52 = 1/2$', '1 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q21', 'Question 5', 'Exercise 14.2',
  'A fair coin with 1 marked on one face and 6 on other and a fair die are tossed. Find the probability that the sum of numbers that turn up is: (i) 3 (ii) 12.',
  `<div class="step">
    • Coin faces: $\\{1, 6\\}$. Die faces: $\\{1, 2, 3, 4, 5, 6\\}$.<br>
    • Total outcomes in sample space $S$:<br>
      $$S = \\{(1,1), (1,2), (1,3), (1,4), (1,5), (1,6), (6,1), (6,2), (6,3), (6,4), (6,5), (6,6)\\}$$<br>
      $$n(S) = 2 \\times 6 = 12$$<br>
    • <b>(i) Sum of numbers is 3:</b><br>
      Favorable outcome: $(1, 2)$ only ($1 + 2 = 3$).<br>
      $$P(\\text{Sum } 3) = \\mathbf{\\frac{1}{12}}$$<br>
    • <b>(ii) Sum of numbers is 12:</b><br>
      Favorable outcome: $(6, 6)$ only ($6 + 6 = 12$).<br>
      $$P(\\text{Sum } 12) = \\mathbf{\\frac{1}{12}}$$
  </div>`,
  '2 Marks',
  [
    ['Sample space $n(S) = 12$', '0.5 Mark'],
    ['Part (i): $P = 1/12$', '0.75 Mark'],
    ['Part (ii): $P = 1/12$', '0.75 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q22', 'Question 6', 'Exercise 14.2',
  'There are four men and six women on the city council. If one council member is selected for a committee at random, how likely is it that it is a woman?',
  `<div class="step">
    • Total members on council $= 4 + 6 = 10 \\implies n(S) = 10$.<br>
    • Number of women $= 6 \\implies n(W) = 6$.<br>
    • Probability of selecting a woman:<br>
      $$P(W) = \\frac{n(W)}{n(S)} = \\frac{6}{10} = \\frac{3}{5} = \\mathbf{0.6}$$
  </div>`,
  '1 Mark',
  [
    ['Total members $10$ and favorable $6$', '0.5 Mark'],
    ['$P(W) = 3/5 = 0.6$', '0.5 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q23', 'Question 7', 'Exercise 14.2',
  'A fair coin is tossed four times, and a person wins Re 1 for each head and loses Rs 1.50 for each tail. From the sample space, calculate the different amounts of money you can have after four tosses and the probability of having each of these amounts.',
  `<div class="step">
    • Coin is tossed 4 times, $n(S) = 2^4 = 16$.<br>
    • Let $X$ be the number of heads ($0, 1, 2, 3, 4$) and $4 - X$ be tails.<br>
    • Net gain/loss amount $= X(1) - (4 - X)(1.50) = 2.50X - 6.00$.<br><br>
    • <b>Case 1: 4 Heads ($X = 4$):</b> Outcome $\\{HHHH\\}$ (1 outcome).<br>
      Amount $= 4(1) = +\\text{Rs } 4.00$. $P = \\mathbf{\\frac{1}{16}}$.<br>
    • <b>Case 2: 3 Heads, 1 Tail ($X = 3$):</b> $\\binom{4}{3} = 4$ outcomes.<br>
      Amount $= 3(1) - 1(1.50) = +\\text{Rs } 1.50$. $P = \\frac{4}{16} = \\mathbf{\\frac{1}{4}}$.<br>
    • <b>Case 3: 2 Heads, 2 Tails ($X = 2$):</b> $\\binom{4}{2} = 6$ outcomes.<br>
      Amount $= 2(1) - 2(1.50) = 2 - 3 = -\\text{Rs } 1.00$ (Loss of Re 1). $P = \\frac{6}{16} = \\mathbf{\\frac{3}{8}}$.<br>
    • <b>Case 4: 1 Head, 3 Tails ($X = 1$):</b> $\\binom{4}{1} = 4$ outcomes.<br>
      Amount $= 1(1) - 3(1.50) = 1 - 4.50 = -\\text{Rs } 3.50$ (Loss of Rs 3.50). $P = \\frac{4}{16} = \\mathbf{\\frac{1}{4}}$.<br>
    • <b>Case 5: 0 Heads, 4 Tails ($X = 0$):</b> Outcome $\\{TTTT\\}$ (1 outcome).<br>
      Amount $= -4(1.50) = -\\text{Rs } 6.00$ (Loss of Rs 6.00). $P = \\mathbf{\\frac{1}{16}}$.
  </div>`,
  '4 Marks',
  [
    ['Determining all 5 distinct amounts of money', '1.5 Marks'],
    ['Calculating probabilities for each amount', '2 Marks'],
    ['Verifying sum of probabilities equals 1', '0.5 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q24', 'Question 8', 'Exercise 14.2',
  'Three coins are tossed once. Find the probability of getting:<br>(i) 3 heads (ii) 2 heads (iii) at least 2 heads (iv) at most 2 heads (v) no head (vi) 3 tails (vii) exactly two tails (viii) no tail (ix) at most two tails.',
  `<div class="step">
    • $S = \\{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT\\} \\implies n(S) = 8$.<br>
    • <b>(i) 3 heads:</b> $\\{HHH\\} \\implies P = \\mathbf{\\frac{1}{8}}$<br>
    • <b>(ii) 2 heads:</b> $\\{HHT, HTH, THH\\} \\implies P = \\mathbf{\\frac{3}{8}}$<br>
    • <b>(iii) At least 2 heads:</b> $\\{HHT, HTH, THH, HHH\\} \\implies P = \\frac{4}{8} = \\mathbf{\\frac{1}{2}}$<br>
    • <b>(iv) At most 2 heads:</b> All except $HHH \\implies P = \\frac{7}{8}$<br>
    • <b>(v) No head:</b> $\\{TTT\\} \\implies P = \\mathbf{\\frac{1}{8}}$<br>
    • <b>(vi) 3 tails:</b> $\\{TTT\\} \\implies P = \\mathbf{\\frac{1}{8}}$<br>
    • <b>(vii) Exactly 2 tails:</b> $\\{HTT, THT, TTH\\} \\implies P = \\mathbf{\\frac{3}{8}}$<br>
    • <b>(viii) No tail:</b> $\\{HHH\\} \\implies P = \\mathbf{\\frac{1}{8}}$<br>
    • <b>(ix) At most 2 tails:</b> All except $TTT \\implies P = \\mathbf{\\frac{7}{8}}$
  </div>`,
  '5 Marks',
  [
    ['Parts (i) to (iii) evaluated', '1.5 Marks'],
    ['Parts (iv) to (vi) evaluated', '1.5 Marks'],
    ['Parts (vii) to (ix) evaluated', '2 Marks']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q25', 'Question 9', 'Exercise 14.2',
  'If $\\frac{2}{11}$ is the probability of an event, what is the probability of the event \'not A\'?',
  `<div class="step">
    • Given $P(A) = \\frac{2}{11}$.<br>
    • Using complement rule $P(\\text{not } A) = P(A') = 1 - P(A)$:<br>
      $$P(A') = 1 - \\frac{2}{11} = \\frac{11 - 2}{11} = \\mathbf{\\frac{9}{11}}$$
  </div>`,
  '1 Mark',
  [
    ['Applying complement formula $1 - P(A)$', '0.5 Mark'],
    ['Result $9/11$', '0.5 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q26', 'Question 10', 'Exercise 14.2',
  'A letter is chosen at random from the word \'ASSASSINATION\'. Find the probability that letter is: (i) a vowel (ii) a consonant.',
  `<div class="step">
    • Word: 'ASSASSINATION'. Total letters $= 13$.<br>
    • Frequency of each letter:<br>
      $A: 3, \\; S: 4, \\; I: 2, \\; N: 2, \\; T: 1, \\; O: 1$<br>
    • <b>(i) Vowels:</b> $A, I, O$.<br>
      Total vowels $= 3(A) + 2(I) + 1(O) = 6$.<br>
      $$P(\\text{Vowel}) = \\frac{6}{13}$$<br>
    • <b>(ii) Consonants:</b> $S, N, T$.<br>
      Total consonants $= 4(S) + 2(N) + 1(T) = 7$.<br>
      $$P(\\text{Consonant}) = \\frac{7}{13}$$<br>
    • (Notice $P(\\text{Vowel}) + P(\\text{Consonant}) = \\frac{6}{13} + \\frac{7}{13} = 1$).
  </div>`,
  '2 Marks',
  [
    ['Counting total letters $13$ and vowels $6 \\implies P = 6/13$', '1 Mark'],
    ['Counting consonants $7 \\implies P = 7/13$', '1 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q27', 'Question 11', 'Exercise 14.2',
  'In a lottery, a person chooses six different natural numbers at random from 1 to 20, and if these six numbers match with the six numbers already fixed by the lottery committee, he wins the prize. What is the probability of winning the prize in the game?',
  `<div class="step">
    • Six numbers are chosen from $20$ natural numbers without regard to order.<br>
    • Total possible combinations of 6 numbers from 20:<br>
      $$n(S) = \\binom{20}{6} = \\frac{20 \\times 19 \\times 18 \\times 17 \\times 16 \\times 15}{6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1} = 38760$$<br>
    • There is only $1$ winning combination fixed by the lottery committee $\\implies n(E) = 1$.<br>
    • Probability of winning the prize:<br>
      $$P(E) = \\frac{n(E)}{n(S)} = \\mathbf{\\frac{1}{38760}}$$
  </div>`,
  '2 Marks',
  [
    ['Calculating total combinations $\\binom{20}{6} = 38760$', '1 Mark'],
    ['Finding winning probability $1/38760$', '1 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q28', 'Question 12', 'Exercise 14.2',
  'Check whether the following probabilities $P(A)$ and $P(B)$ are consistently defined:<br>(i) $P(A) = 0.5, P(B) = 0.7, P(A \\cap B) = 0.6$<br>(ii) $P(A) = 0.5, P(B) = 0.4, P(A \\cup B) = 0.8$',
  `<div class="step">
    • <b>(i)</b> We know that $A \\cap B \\subseteq A$, which implies $P(A \\cap B) \\le P(A)$.<br>
      Here $P(A \\cap B) = 0.6$ while $P(A) = 0.5$, so $P(A \\cap B) > P(A)$, which is impossible.<br>
      Hence, the probabilities are <b>not consistently defined</b>.<br><br>
    • <b>(ii)</b> Using addition rule $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$:<br>
      $$P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0.5 + 0.4 - 0.8 = 0.1$$<br>
      Here $P(A \\cap B) = 0.1 \\ge 0$, and $0.1 \\le P(A)$ and $0.1 \\le P(B)$.<br>
      All values lie in $[0, 1]$ and satisfy consistency conditions.<br>
      Hence, the probabilities are <b>consistently defined</b>.
  </div>`,
  '2 Marks',
  [
    ['(i) Identifying inconsistency since $P(A \\cap B) > P(A)$', '1 Mark'],
    ['(ii) Calculating $P(A \\cap B) = 0.1$ and verifying consistency', '1 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q29', 'Question 13', 'Exercise 14.2',
  'Fill in the blanks in following table:<br>(i) $P(A) = \\frac{1}{3}, P(B) = \\frac{1}{5}, P(A \\cap B) = \\frac{1}{15}, P(A \\cup B) = \\text{______}$<br>(ii) $P(A) = 0.35, P(B) = \\text{______}, P(A \\cap B) = 0.25, P(A \\cup B) = 0.6$<br>(iii) $P(A) = 0.5, P(B) = 0.35, P(A \\cap B) = \\text{______}, P(A \\cup B) = 0.7$',
  `<div class="step">
    • General addition theorem: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.<br><br>
    • <b>(i) Find $P(A \\cup B)$:</b><br>
      $$P(A \\cup B) = \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{15} = \\frac{5 + 3 - 1}{15} = \\frac{7}{15}$$<br>
    • <b>(ii) Find $P(B)$:</b><br>
      $$0.6 = 0.35 + P(B) - 0.25 \\implies 0.6 = 0.10 + P(B) \\implies P(B) = 0.6 - 0.10 = \\mathbf{0.5}$$<br>
    • <b>(iii) Find $P(A \\cap B)$:</b><br>
      $$0.7 = 0.5 + 0.35 - P(A \\cap B) \\implies P(A \\cap B) = 0.85 - 0.7 = \\mathbf{0.15}$$
  </div>`,
  '3 Marks',
  [
    ['Part (i): $P(A \\cup B) = 7/15$', '1 Mark'],
    ['Part (ii): $P(B) = 0.5$', '1 Mark'],
    ['Part (iii): $P(A \\cap B) = 0.15$', '1 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q30', 'Question 14', 'Exercise 14.2',
  'Given $P(A) = \\frac{3}{5}$ and $P(B) = \\frac{1}{5}$. Find $P(A \\text{ or } B)$, if $A$ and $B$ are mutually exclusive events.',
  `<div class="step">
    • If $A$ and $B$ are mutually exclusive events, then $A \\cap B = \\emptyset$, which means $P(A \\cap B) = 0$.<br>
    • By the addition rule for mutually exclusive events:<br>
      $$P(A \\text{ or } B) = P(A \\cup B) = P(A) + P(B)$$<br>
    • Substituting the given values:<br>
      $$P(A \\cup B) = \\frac{3}{5} + \\frac{1}{5} = \\mathbf{\\frac{4}{5}}$$
  </div>`,
  '1 Mark',
  [
    ['Mutually exclusive condition $P(A \\cup B) = P(A) + P(B)$', '0.5 Mark'],
    ['Evaluating $3/5 + 1/5 = 4/5$', '0.5 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q31', 'Question 15', 'Exercise 14.2',
  'If $E$ and $F$ are events such that $P(E) = \\frac{1}{4}, P(F) = \\frac{1}{2}$ and $P(E \\text{ and } F) = \\frac{1}{8}$, find: (i) $P(E \\text{ or } F)$ (ii) $P(\\text{not } E \\text{ and not } F)$.',
  `<div class="step">
    • <b>(i) Find $P(E \\text{ or } F) = P(E \\cup F)$:</b><br>
      $$P(E \\cup F) = P(E) + P(F) - P(E \\cap F) = \\frac{1}{4} + \\frac{1}{2} - \\frac{1}{8} = \\frac{2 + 4 - 1}{8} = \\mathbf{\\frac{5}{8}}$$
    • <b>(ii) Find $P(\\text{not } E \\text{ and not } F) = P(E' \\cap F')$:</b><br>
      By De Morgan's Law, $E' \\cap F' = (E \\cup F)'$.<br>
      $$P(E' \\cap F') = P((E \\cup F)') = 1 - P(E \\cup F) = 1 - \\frac{5}{8} = \\mathbf{\\frac{3}{8}}$$
  </div>`,
  '2 Marks',
  [
    ['Part (i): $P(E \\cup F) = 5/8$', '1 Mark'],
    ['Part (ii): Applying De Morgan\'s Law $1 - 5/8 = 3/8$', '1 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q32', 'Question 16', 'Exercise 14.2',
  'Events $E$ and $F$ are such that $P(\\text{not } E \\text{ or not } F) = 0.25$. State whether $E$ and $F$ are mutually exclusive.',
  `<div class="step">
    • Given $P(\\text{not } E \\text{ or not } F) = P(E' \\cup F') = 0.25$.<br>
    • By De Morgan's Law, $E' \\cup F' = (E \\cap F)'$.<br>
    • Therefore:<br>
      $$P((E \\cap F)') = 0.25$$<br>
      $$1 - P(E \\cap F) = 0.25 \\implies P(E \\cap F) = 1 - 0.25 = 0.75$$<br>
    • For two events to be mutually exclusive, their intersection must have probability zero: $P(E \\cap F) = 0$.<br>
    • Since $P(E \\cap F) = 0.75 \\neq 0$, the events $E$ and $F$ are <b>not mutually exclusive</b>.
  </div>`,
  '2 Marks',
  [
    ['Applying De Morgan\'s Law to find $P(E \\cap F) = 0.75$', '1 Mark'],
    ['Stating mutually exclusive condition and concluding they are NOT mutually exclusive', '1 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q33', 'Question 17', 'Exercise 14.2',
  '$A$ and $B$ are events such that $P(A) = 0.42, P(B) = 0.48$ and $P(A \\text{ and } B) = 0.16$. Determine: (i) $P(\\text{not } A)$ (ii) $P(\\text{not } B)$ (iii) $P(A \\text{ or } B)$.',
  `<div class="step">
    • <b>(i) $P(\\text{not } A) = P(A')$:</b><br>
      $$P(A') = 1 - P(A) = 1 - 0.42 = \\mathbf{0.58}$$<br>
    • <b>(ii) $P(\\text{not } B) = P(B')$:</b><br>
      $$P(B') = 1 - P(B) = 1 - 0.48 = \\mathbf{0.52}$$<br>
    • <b>(iii) $P(A \\text{ or } B) = P(A \\cup B)$:</b><br>
      $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.42 + 0.48 - 0.16 = 0.90 - 0.16 = \\mathbf{0.74}$$
  </div>`,
  '3 Marks',
  [
    ['(i) $P(A\') = 0.58$', '1 Mark'],
    ['(ii) $P(B\') = 0.52$', '1 Mark'],
    ['(iii) $P(A \\cup B) = 0.74$', '1 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q34', 'Question 18', 'Exercise 14.2',
  'In Class XI of a school $40\\%$ of the students study Mathematics and $30\\%$ study Biology. $10\\%$ of the class study both Mathematics and Biology. If a student is selected at random from the class, find the probability that he will be studying Mathematics or Biology.',
  `<div class="step">
    • Let $M$ and $B$ be the events that the student studies Mathematics and Biology, respectively.<br>
    • Given:<br>
      $$P(M) = 40\\% = \\frac{40}{100} = 0.40$$<br>
      $$P(B) = 30\\% = \\frac{30}{100} = 0.30$$<br>
      $$P(M \\cap B) = 10\\% = \\frac{10}{100} = 0.10$$<br>
    • Probability that the student studies Mathematics or Biology is $P(M \\cup B)$:<br>
      $$P(M \\cup B) = P(M) + P(B) - P(M \\cap B) = 0.40 + 0.30 - 0.10 = \\mathbf{0.60} \\quad (\\text{or } \\frac{3}{5})$$
  </div>`,
  '2 Marks',
  [
    ['Writing probabilities in decimal/fractional form', '0.5 Mark'],
    ['Applying addition rule $P(M \\cup B) = P(M) + P(B) - P(M \\cap B)$', '1 Mark'],
    ['Final answer $0.60$ (or $3/5$)', '0.5 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q35', 'Question 19', 'Exercise 14.2',
  'In an entrance test that is graded on the basis of two examinations, the probability of a randomly chosen student passing the first examination is $0.8$ and the probability of passing the second examination is $0.7$. The probability of passing at least one of them is $0.95$. What is the probability of passing both?',
  `<div class="step">
    • Let $E_1$ = Event of passing first examination $\\implies P(E_1) = 0.8$.<br>
    • Let $E_2$ = Event of passing second examination $\\implies P(E_2) = 0.7$.<br>
    • Passing at least one examination $= E_1 \\cup E_2 \\implies P(E_1 \\cup E_2) = 0.95$.<br>
    • Passing both examinations $= E_1 \\cap E_2$.<br>
    • Using addition theorem:<br>
      $$P(E_1 \\cup E_2) = P(E_1) + P(E_2) - P(E_1 \\cap E_2)$$<br>
      $$0.95 = 0.8 + 0.7 - P(E_1 \\cap E_2)$$<br>
      $$0.95 = 1.5 - P(E_1 \\cap E_2)$$<br>
      $$P(E_1 \\cap E_2) = 1.5 - 0.95 = \\mathbf{0.55}$$<br>
    • Hence, the probability of passing both examinations is $\\mathbf{0.55}$.
  </div>`,
  '2 Marks',
  [
    ['Assigning events and setting $P(E_1 \\cup E_2) = 0.95$', '0.5 Mark'],
    ['Using addition theorem equation', '1 Mark'],
    ['Solving for $P(E_1 \\cap E_2) = 0.55$', '0.5 Mark']
  ]
));

ex14_2.push(createQCard(
  'c11m-ch14-q36', 'Question 20', 'Exercise 14.2',
  'The probability that a student will pass the final examination in both English and Hindi is $0.5$ and the probability of passing neither is $0.1$. If the probability of passing the English examination is $0.75$, what is the probability of passing the Hindi examination?',
  `<div class="step">
    • Let $E$ and $H$ denote the events of passing English and Hindi examinations respectively.<br>
    • Given:<br>
      - $P(E \\cap H) = 0.5$<br>
      - $P(\\text{neither } E \\text{ nor } H) = P(E' \\cap H') = 0.1$<br>
      - $P(E) = 0.75$<br>
    • By De Morgan's Law:<br>
      $$P(E' \\cap H') = P((E \\cup H)') = 1 - P(E \\cup H)$$<br>
      $$0.1 = 1 - P(E \\cup H) \\implies P(E \\cup H) = 1 - 0.1 = 0.9$$<br>
    • Using the Addition Theorem:<br>
      $$P(E \\cup H) = P(E) + P(H) - P(E \\cap H)$$<br>
      $$0.9 = 0.75 + P(H) - 0.5$$<br>
      $$0.9 = 0.25 + P(H)$$<br>
      $$P(H) = 0.9 - 0.25 = \\mathbf{0.65}$$<br>
    • Hence, the probability of passing the Hindi examination is $\\mathbf{0.65}$.
  </div>`,
  '3 Marks',
  [
    ['Finding $P(E \\cup H) = 1 - 0.1 = 0.9$ via De Morgan\'s Law', '1 Mark'],
    ['Setting up addition theorem equation', '1 Mark'],
    ['Solving for $P(H) = 0.65$', '1 Mark']
  ]
));

// ============================================================================
// PROBABILITY VENN DIAGRAM (SVG)
// ============================================================================
const probSvg = `
  <div style="background:white; border:1px solid #e2e8f0; border-radius:12px; padding:20px; margin-bottom:28px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <h3 style="font-size:1.05rem; font-weight:800; color:#0f172a; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
      <span style="display:inline-block; width:10px; height:10px; background:#8b5cf6; border-radius:50%;"></span>
      Axiomatic Probability Theory &bull; Venn Diagram &amp; Addition Rules
    </h3>
    <svg viewBox="0 0 760 250" style="width:100%; height:auto; display:block; font-family:system-ui, -apple-system, sans-serif;">
      <!-- Universal Sample Space S -->
      <rect x="20" y="20" width="410" height="210" rx="10" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
      <text x="35" y="45" font-size="14" font-weight="bold" fill="#0f172a">Sample Space S (P(S) = 1)</text>

      <!-- Event Circle A -->
      <circle cx="160" cy="130" r="70" fill="#3b82f6" fill-opacity="0.3" stroke="#2563eb" stroke-width="2.5"/>
      <text x="125" y="135" font-size="13" font-weight="bold" fill="#1d4ed8">A \ B</text>

      <!-- Event Circle B -->
      <circle cx="270" cy="130" r="70" fill="#ec4899" fill-opacity="0.3" stroke="#db2777" stroke-width="2.5"/>
      <text x="295" y="135" font-size="13" font-weight="bold" fill="#be185d">B \ A</text>

      <!-- Overlap Region A and B -->
      <text x="215" y="135" font-size="12" font-weight="bold" fill="#6d28d9" text-anchor="middle">A &cap; B</text>

      <!-- Outside region (A or B)' -->
      <text x="375" y="210" font-size="11" font-weight="bold" fill="#64748b">(A &cup; B)'</text>

      <!-- Labels above circles -->
      <text x="135" y="75" font-size="13" font-weight="bold" fill="#1e40af">Event A</text>
      <text x="295" y="75" font-size="13" font-weight="bold" fill="#9d174d">Event B</text>

      <!-- Summary panel on Right -->
      <rect x="450" y="20" width="290" height="210" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="465" y="45" font-size="12" font-weight="bold" fill="#1e293b">Core Probability Axioms:</text>

      <text x="465" y="70" font-size="11" font-weight="bold" fill="#2563eb">&bull; Range Axiom: 0 &le; P(E) &le; 1</text>
      <text x="465" y="92" font-size="11" font-weight="bold" fill="#059669">&bull; Certainty: P(S) = 1, P(&empty;) = 0</text>

      <text x="465" y="118" font-size="11" font-weight="bold" fill="#7c3aed">&bull; Addition Rule (Any Events):</text>
      <text x="475" y="136" font-size="10.5" fill="#0f172a">P(A &cup; B) = P(A) + P(B) - P(A &cap; B)</text>

      <text x="465" y="162" font-size="11" font-weight="bold" fill="#ea580c">&bull; Mutually Exclusive (A &cap; B = &empty;):</text>
      <text x="475" y="180" font-size="10.5" fill="#0f172a">P(A &cup; B) = P(A) + P(B)</text>

      <text x="465" y="206" font-size="11" font-weight="bold" fill="#0284c7">&bull; De Morgan's Law:</text>
      <text x="475" y="222" font-size="10.5" fill="#0f172a">P(A' &cap; B') = 1 - P(A &cup; B)</text>
    </svg>
  </div>
`;

// ============================================================================
// ASSEMBLY OF CH14.HTML
// ============================================================================
const chapterHtml = `
<section class="chapter-section" id="c11m-ch14">
  <div class="chapter-header">
    <div class="ch-badge">14</div>
    <div class="chapter-header-info">
      <div class="ch-category">CBSE Class 11 Mathematics &bull; Chapter 14</div>
      <h2>Probability</h2>
      <p>NCERT Rationalised 2026–27 Syllabus &bull; All 36 Verbatim Questions with Official Marking Schemes</p>
    </div>
  </div>

  ${probSvg}

  <div class="ex-div">NCERT Exercise 14.1: Random Experiments, Systematic Sample Spaces &amp; Compound Events</div>
${ex14_1.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Exercise 14.2: Axiomatic Probability, Classical Ratios &amp; General Addition Theorems</div>
${ex14_2.join('\n')}

  <div class="chapter-nav-btns" style="margin-top:40px; display:flex; justify-content:space-between; align-items:center;">
    <button class="ch-nav-btn prev" onclick="showChapter(13)" style="padding:10px 24px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer;">← Previous: Chapter 13 (Statistics)</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})" style="padding:10px 20px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer;">↑ Back to Top</button>
    <button class="ch-nav-btn" onclick="showChapter(1)" style="padding:10px 24px; border-radius:8px; border:none; background:#2563eb; color:white; font-weight:700; cursor:pointer;">↺ Back to Chapter 1 (Sets)</button>
  </div>
</section>
`;

// Write ch14.html
const ch14Path = path.join(outDir, 'ch14.html');
fs.writeFileSync(ch14Path, chapterHtml.trim(), 'utf8');
console.log(`Successfully generated: ${ch14Path} (${chapterHtml.length} bytes)`);

// Update chapters-data.js so chapters load instantly offline/online
const dataJsPath = path.join(outDir, 'chapters-data.js');
let existingData = '';
if (fs.existsSync(dataJsPath)) {
  existingData = fs.readFileSync(dataJsPath, 'utf8');
}

// Append or update window.CHAPTER_DATA[14]
if (!existingData.includes('window.CHAPTER_DATA[14] =')) {
  const ch14Entry = `\nwindow.CHAPTER_DATA[14] = ${JSON.stringify(chapterHtml.trim())};\n`;
  fs.appendFileSync(dataJsPath, ch14Entry, 'utf8');
  console.log(`Appended Chapter 14 to preloaded cache: ${dataJsPath}`);
} else {
  // Replace window.CHAPTER_DATA[14] block
  const regex = /window\.CHAPTER_DATA\[14\]\s*=\s*[\s\S]*?;\n/g;
  const updated = existingData.replace(regex, `window.CHAPTER_DATA[14] = ${JSON.stringify(chapterHtml.trim())};\n`);
  fs.writeFileSync(dataJsPath, updated, 'utf8');
  console.log(`Updated Chapter 14 in preloaded cache: ${dataJsPath}`);
}
