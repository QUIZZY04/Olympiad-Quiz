// scripts/builders/gen-c11m-ch3.js
// Complete, verbatim NCERT generator for Class 11 Mathematics Chapter 3: Trigonometric Functions (All 52 Questions)
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
const ex3_1 = [];
const ex3_2 = [];
const ex3_3 = [];
const misc = [];

// ============================================================================
// EXERCISE 3.1 (Questions 1 to 7)
// ============================================================================

ex3_1.push(createQCard(
  'c11m-ch3-q1', 'Question 1', 'Exercise 3.1',
  'Find the radian measures corresponding to the following degree measures:<br>' +
  '(i) $25^\\circ$<br>' +
  '(ii) $-47^\\circ 30\'$<br>' +
  '(iii) $240^\\circ$<br>' +
  '(iv) $520^\\circ$',
  `<p><strong>Conversion Formula:</strong> Since $180^\\circ = \\pi \\text{ radians}$, we have $1^\\circ = \\dfrac{\\pi}{180} \\text{ radian}$.</p>
  <div class="step">
    • <strong>(i) $25^\\circ$:</strong><br>
    $$\\text{Radian measure} = 25 \\times \\frac{\\pi}{180} = \\mathbf{\\frac{5\\pi}{36} \\text{ rad}}$$<br><br>
    • <strong>(ii) $-47^\\circ 30'$:</strong><br>
    Convert minutes into degrees ($60' = 1^\\circ \\implies 30' = \\frac{30}{60}^\\circ = \\frac{1}{2}^\\circ$):<br>
    $$-47^\\circ 30' = -\\left(47 + \\frac{1}{2}\\right)^\\circ = -\\frac{95^\\circ}{2}$$<br>
    $$\\text{Radian measure} = -\\frac{95}{2} \\times \\frac{\\pi}{180} = -\\frac{19\\pi}{2 \\times 36} = \\mathbf{-\\frac{19\\pi}{72} \\text{ rad}}$$<br><br>
    • <strong>(iii) $240^\\circ$:</strong><br>
    $$\\text{Radian measure} = 240 \\times \\frac{\\pi}{180} = \\mathbf{\\frac{4\\pi}{3} \\text{ rad}}$$<br><br>
    • <strong>(iv) $520^\\circ$:</strong><br>
    $$\\text{Radian measure} = 520 \\times \\frac{\\pi}{180} = \\mathbf{\\frac{26\\pi}{9} \\text{ rad}}$$
  </div>`,
  '3 Marks',
  [['Converting 25° and 240° to radians', '1 Mark'], ['Converting -47°30\' to fractional degrees and radians', '1 Mark'], ['Converting 520° to radians', '1 Mark']]
));

ex3_1.push(createQCard(
  'c11m-ch3-q2', 'Question 2', 'Exercise 3.1',
  'Find the degree measures corresponding to the following radian measures (Use $\\pi = \\dfrac{22}{7}$):<br>' +
  '(i) $\\dfrac{11}{16}$<br>' +
  '(ii) $-4$<br>' +
  '(iii) $\\dfrac{5\\pi}{3}$<br>' +
  '(iv) $\\dfrac{7\\pi}{6}$',
  `<p><strong>Conversion Formula:</strong> $1 \\text{ radian} = \\left(\\dfrac{180}{\\pi}\\right)^\\circ$.</p>
  <div class="step">
    • <strong>(i) $\\dfrac{11}{16}$ rad:</strong><br>
    $$\\text{Degree} = \\frac{11}{16} \\times \\frac{180}{\\pi} = \\frac{11}{16} \\times \\frac{180 \\times 7}{22} = \\frac{315}{8}^\\circ$$<br>
    Dividing: $315 = 8 \\times 39 + 3 \\implies 39^\\circ + \\left(\\frac{3}{8} \\times 60\\right)' = 39^\\circ + \\frac{45'}{2} = 39^\\circ 22' + \\left(\\frac{1}{2} \\times 60\\right)'' = \\mathbf{39^\\circ 22\' 30\'\'}$<br><br>
    • <strong>(ii) $-4$ rad:</strong><br>
    $$\\text{Degree} = -4 \\times \\frac{180}{22/7} = -\\frac{4 \\times 180 \\times 7}{22} = -\\frac{2520}{11}^\\circ$$<br>
    Dividing: $2520 = 11 \\times 229 + 1 \\implies -229^\\circ - \\left(\\frac{1}{11} \\times 60\\right)' = -229^\\circ 5' - \\left(\\frac{5}{11} \\times 60\\right)'' \\approx \\mathbf{-229^\\circ 5\' 27\'\'}$<br><br>
    • <strong>(iii) $\\dfrac{5\\pi}{3}$ rad:</strong><br>
    $$\\text{Degree} = \\frac{5\\pi}{3} \\times \\frac{180^\\circ}{\\pi} = 5 \\times 60^\\circ = \\mathbf{300^\\circ}$$<br><br>
    • <strong>(iv) $\\dfrac{7\\pi}{6}$ rad:</strong><br>
    $$\\text{Degree} = \\frac{7\\pi}{6} \\times \\frac{180^\\circ}{\\pi} = 7 \\times 30^\\circ = \\mathbf{210^\\circ}$$
  </div>`,
  '4 Marks',
  [['Converting 11/16 to 39° 22\' 30\'\'', '1.5 Marks'], ['Converting -4 to -229° 5\' 27\'\'', '1.5 Marks'], ['Converting 5π/3 and 7π/6 to 300° and 210°', '1 Mark']]
));

ex3_1.push(createQCard(
  'c11m-ch3-q3', 'Question 3', 'Exercise 3.1',
  'A wheel makes $360$ revolutions in one minute. Through how many radians does it turn in one second?',
  `<div class="step">
    • Number of revolutions in 1 minute (60 seconds) = 360<br>
    • Number of revolutions in 1 second:<br>
    $$\\text{Revolutions per second} = \\frac{360}{60} = 6$$<br>
    • In one complete revolution, the wheel turns through an angle of $2\\pi$ radians (or $360^\\circ$).<br>
    • Therefore, in 6 revolutions (1 second):<br>
    $$\\text{Angle turned in 1 second} = 6 \\times 2\\pi = \\mathbf{12\\pi \\text{ radians}}$$<br>
    <strong>Final Answer:</strong> The wheel turns through $\\mathbf{12\\pi \\text{ radians}}$ in one second.
  </div>`,
  '2 Marks',
  [['Calculating 6 revolutions per second', '1 Mark'], ['Multiplying by 2π to get 12π radians', '1 Mark']]
));

ex3_1.push(createQCard(
  'c11m-ch3-q4', 'Question 4', 'Exercise 3.1',
  'Find the degree measure of the angle subtended at the centre of a circle of radius $100\\text{ cm}$ by an arc of length $22\\text{ cm}$ (Use $\\pi = \\dfrac{22}{7}$).',
  `<p><strong>Formula:</strong> $\\theta = \\dfrac{l}{r}$ radians, where $l$ is the arc length and $r$ is the radius of the circle.</p>
  <div class="step">
    • Given: $r = 100\\text{ cm}$ and $l = 22\\text{ cm}$<br>
    • Angle in radians:<br>
    $$\\theta = \\frac{l}{r} = \\frac{22}{100} = \\frac{11}{50} \\text{ radian}$$<br>
    • Convert into degrees:<br>
    $$\\text{Degree measure} = \\frac{11}{50} \\times \\frac{180^\\circ}{\\pi} = \\frac{11}{50} \\times \\frac{180 \\times 7}{22} = \\frac{18 \\times 7}{50 \\times 2} \\times 11 = \\frac{126}{10}^\\circ = \\frac{63}{5}^\\circ$$<br>
    • Express in degrees and minutes:<br>
    $$\\frac{63}{5}^\\circ = 12^\\circ + \\left(\\frac{3}{5} \\times 60\\right)' = \\mathbf{12^\\circ 36\'}$$<br>
    <strong>Final Answer:</strong> The central angle is $\\mathbf{12^\\circ 36\'}$.
  </div>`,
  '2 Marks',
  [['Applying θ = l/r = 22/100 radian', '1 Mark'], ['Converting to degrees and obtaining 12° 36\'', '1 Mark']]
));

ex3_1.push(createQCard(
  'c11m-ch3-q5', 'Question 5', 'Exercise 3.1',
  'In a circle of diameter $40\\text{ cm}$, the length of a chord is $20\\text{ cm}$. Find the length of minor arc of the chord.',
  `<div class="step">
    • Diameter of circle $= 40\\text{ cm} \\implies \\text{Radius } r = \\frac{40}{2} = 20\\text{ cm}$<br>
    • Let $AB$ be the chord with length $AB = 20\\text{ cm}$ and $O$ be the centre of the circle.<br>
    • In $\\Delta OAB$:<br>
    $$OA = 20\\text{ cm}, \\quad OB = 20\\text{ cm}, \\quad AB = 20\\text{ cm}$$<br>
    Since all three sides are equal, $\\Delta OAB$ is an <strong>equilateral triangle</strong>.<br>
    $$\\therefore \\angle AOB = \\theta = 60^\\circ = 60 \\times \\frac{\\pi}{180} = \\frac{\\pi}{3} \\text{ radian}$$<br>
    • By formula $l = r\\theta$:<br>
    $$l = 20 \\times \\frac{\\pi}{3} = \\mathbf{\\frac{20\\pi}{3} \\text{ cm}}$$<br>
    (Using $\\pi \\approx 3.1416$, $l \\approx 20.94\\text{ cm}$)<br><br>
    <strong>Final Answer:</strong> The length of the minor arc is $\\mathbf{\\dfrac{20\\pi}{3} \\text{ cm}}$.
  </div>`,
  '3 Marks',
  [['Deducing equilateral triangle OAB with central angle θ = 60° = π/3', '1.5 Marks'], ['Applying l = rθ to get 20π/3 cm', '1.5 Marks']]
));

ex3_1.push(createQCard(
  'c11m-ch3-q6', 'Question 6', 'Exercise 3.1',
  'If in two circles, arcs of the same length subtend angles $60^\\circ$ and $75^\\circ$ at the centre, find the ratio of their radii.',
  `<div class="step">
    • Let the radii of the two circles be $r_1$ and $r_2$, and let the common arc length be $l$.<br><br>
    • <strong>Convert central angles to radians:</strong><br>
    $$\\theta_1 = 60^\\circ = 60 \\times \\frac{\\pi}{180} = \\frac{\\pi}{3} \\text{ rad}$$<br>
    $$\\theta_2 = 75^\\circ = 75 \\times \\frac{\\pi}{180} = \\frac{5\\pi}{12} \\text{ rad}$$<br>
    • <strong>Using formula $l = r\\theta$:</strong><br>
    $$l = r_1 \\theta_1 = r_2 \\theta_2$$<br>
    $$r_1 \\left(\\frac{\\pi}{3}\\right) = r_2 \\left(\\frac{5\\pi}{12}\\right)$$<br>
    • <strong>Finding the ratio $\\dfrac{r_1}{r_2}$:</strong><br>
    $$\\frac{r_1}{r_2} = \\frac{5\\pi/12}{\\pi/3} = \\frac{5}{12} \\times \\frac{3}{1} = \\frac{5}{4}$$<br>
    <strong>Final Answer:</strong> The ratio of their radii is $\\mathbf{5 : 4}$.
  </div>`,
  '3 Marks',
  [['Converting angles 60° and 75° to radians', '1 Mark'], ['Equating arc lengths r1 θ1 = r2 θ2', '1 Mark'], ['Simplifying to ratio 5:4', '1 Mark']]
));

ex3_1.push(createQCard(
  'c11m-ch3-q7', 'Question 7', 'Exercise 3.1',
  'Find the angle in radian through which a pendulum swings if its length is $75\\text{ cm}$ and the tip describes an arc of length:<br>' +
  '(i) $10\\text{ cm}$<br>' +
  '(ii) $15\\text{ cm}$<br>' +
  '(iii) $21\\text{ cm}$',
  `<p><strong>Pendulum Motion:</strong> The length of the pendulum serves as the radius of the circular path: $r = 75\\text{ cm}$. Central angle $\\theta = \\dfrac{l}{r} \\text{ radian}$.</p>
  <div class="step">
    • <strong>(i) Arc length $l = 10\\text{ cm}$:</strong><br>
    $$\\theta = \\frac{l}{r} = \\frac{10}{75} = \\mathbf{\\frac{2}{15} \\text{ radian}}$$<br><br>
    • <strong>(ii) Arc length $l = 15\\text{ cm}$:</strong><br>
    $$\\theta = \\frac{l}{r} = \\frac{15}{75} = \\mathbf{\\frac{1}{5} \\text{ radian}}$$<br><br>
    • <strong>(iii) Arc length $l = 21\\text{ cm}$:</strong><br>
    $$\\theta = \\frac{l}{r} = \\frac{21}{75} = \\mathbf{\\frac{7}{25} \\text{ radian}}$$
  </div>`,
  '3 Marks',
  [['Finding θ = 2/15 radian for l = 10 cm', '1 Mark'], ['Finding θ = 1/5 radian for l = 15 cm', '1 Mark'], ['Finding θ = 7/25 radian for l = 21 cm', '1 Mark']]
));

// ============================================================================
// EXERCISE 3.2 (Questions 1 to 10)
// ============================================================================

ex3_2.push(createQCard(
  'c11m-ch3-q8', 'Question 1', 'Exercise 3.2',
  'Find the values of other $5$ trigonometric functions: $\\cos x = -\\dfrac{1}{2}$, $x$ lies in third quadrant.',
  `<p><strong>ASTC Rule:</strong> In the third quadrant, $\\tan x$ and $\\cot x$ are positive; $\\sin x, \\cos x, \\sec x, \\csc x$ are negative.</p>
  <div class="step">
    • Given: $\\cos x = -\\dfrac{1}{2}$<br>
    • $\\sec x = \\dfrac{1}{\\cos x} = \\mathbf{-2}$<br><br>
    • Using identity $\\sin^2 x + \\cos^2 x = 1$:<br>
    $$\\sin^2 x = 1 - \\cos^2 x = 1 - \\left(-\\frac{1}{2}\\right)^2 = 1 - \\frac{1}{4} = \\frac{3}{4}$$<br>
    Since $x$ is in Quadrant III, $\\sin x < 0$:<br>
    $$\\mathbf{\\sin x = -\\frac{\\sqrt{3}}{2}}$$<br><br>
    • $\\csc x = \\dfrac{1}{\\sin x} = \\mathbf{-\\frac{2}{\\sqrt{3}}}$<br><br>
    • $\\tan x = \\dfrac{\\sin x}{\\cos x} = \\dfrac{-\\sqrt{3}/2}{-1/2} = \\mathbf{\\sqrt{3}}$<br><br>
    • $\\cot x = \\dfrac{1}{\\tan x} = \\mathbf{\\frac{1}{\\sqrt{3}}}$
  </div>`,
  '3 Marks',
  [['Finding sec x = -2 and using Pythagorean identity', '1 Mark'], ['Finding sin x = -√3/2 and csc x = -2/√3 with quadrant sign', '1 Mark'], ['Finding tan x = √3 and cot x = 1/√3', '1 Mark']]
));

ex3_2.push(createQCard(
  'c11m-ch3-q9', 'Question 2', 'Exercise 3.2',
  'Find the values of other $5$ trigonometric functions: $\\sin x = \\dfrac{3}{5}$, $x$ lies in second quadrant.',
  `<p><strong>ASTC Rule:</strong> In the second quadrant, $\\sin x$ and $\\csc x$ are positive; $\\cos x, \\sec x, \\tan x, \\cot x$ are negative.</p>
  <div class="step">
    • Given: $\\sin x = \\dfrac{3}{5}$<br>
    • $\\csc x = \\dfrac{1}{\\sin x} = \\mathbf{\\frac{5}{3}}$<br><br>
    • $\\cos^2 x = 1 - \\sin^2 x = 1 - \\left(\\frac{3}{5}\\right)^2 = 1 - \\frac{9}{25} = \\frac{16}{25}$<br>
    Since $x$ is in Quadrant II, $\\cos x < 0$:<br>
    $$\\mathbf{\\cos x = -\\frac{4}{5}}$$<br><br>
    • $\\sec x = \\dfrac{1}{\\cos x} = \\mathbf{-\\frac{5}{4}}$<br><br>
    • $\\tan x = \\dfrac{\\sin x}{\\cos x} = \\dfrac{3/5}{-4/5} = \\mathbf{-\\frac{3}{4}}$<br><br>
    • $\\cot x = \\dfrac{1}{\\tan x} = \\mathbf{-\\frac{4}{3}}$
  </div>`,
  '3 Marks',
  [['Finding csc x = 5/3', '0.5 Mark'], ['Calculating cos x = -4/5 using quadrant sign', '1 Mark'], ['Finding sec x = -5/4, tan x = -3/4, cot x = -4/3', '1.5 Marks']]
));

ex3_2.push(createQCard(
  'c11m-ch3-q10', 'Question 3', 'Exercise 3.2',
  'Find the values of other $5$ trigonometric functions: $\\cot x = \\dfrac{3}{4}$, $x$ lies in third quadrant.',
  `<div class="step">
    • Given $\\cot x = \\dfrac{3}{4}$ ($x$ in Q III).<br>
    • $\\tan x = \\dfrac{1}{\\cot x} = \\mathbf{\\frac{4}{3}}$<br><br>
    • Using identity $\\sec^2 x = 1 + \\tan^2 x$:<br>
    $$\\sec^2 x = 1 + \\left(\\frac{4}{3}\\right)^2 = 1 + \\frac{16}{9} = \\frac{25}{9}$$<br>
    In Quadrant III, $\\sec x < 0$:<br>
    $$\\mathbf{\\sec x = -\\frac{5}{3}}$$<br><br>
    • $\\cos x = \\dfrac{1}{\\sec x} = \\mathbf{-\\frac{3}{5}}$<br><br>
    • $\\sin x = \\tan x \\times \\cos x = \\left(\\frac{4}{3}\\right) \\left(-\\frac{3}{5}\\right) = \\mathbf{-\\frac{4}{5}}$<br><br>
    • $\\csc x = \\dfrac{1}{\\sin x} = \\mathbf{-\\frac{5}{4}}$
  </div>`,
  '3 Marks',
  [['Finding tan x = 4/3 and sec^2 x = 25/9', '1 Mark'], ['Determining sec x = -5/3 and cos x = -3/5', '1 Mark'], ['Determining sin x = -4/5 and csc x = -5/4', '1 Mark']]
));

ex3_2.push(createQCard(
  'c11m-ch3-q11', 'Question 4', 'Exercise 3.2',
  'Find the values of other $5$ trigonometric functions: $\\sec x = \\dfrac{13}{5}$, $x$ lies in fourth quadrant.',
  `<p><strong>ASTC Rule:</strong> In the fourth quadrant, $\\cos x$ and $\\sec x$ are positive; all other functions are negative.</p>
  <div class="step">
    • Given $\\sec x = \\dfrac{13}{5}$ ($x$ in Q IV).<br>
    • $\\cos x = \\dfrac{1}{\\sec x} = \\mathbf{\\frac{5}{13}}$<br><br>
    • $\\sin^2 x = 1 - \\cos^2 x = 1 - \\left(\\frac{5}{13}\\right)^2 = 1 - \\frac{25}{169} = \\frac{144}{169}$<br>
    In Quadrant IV, $\\sin x < 0$:<br>
    $$\\mathbf{\\sin x = -\\frac{12}{13}}$$<br><br>
    • $\\csc x = \\dfrac{1}{\\sin x} = \\mathbf{-\\frac{13}{12}}$<br><br>
    • $\\tan x = \\dfrac{\\sin x}{\\cos x} = \\dfrac{-12/13}{5/13} = \\mathbf{-\\frac{12}{5}}$<br><br>
    • $\\cot x = \\dfrac{1}{\\tan x} = \\mathbf{-\\frac{5}{12}}$
  </div>`,
  '3 Marks',
  [['Finding cos x = 5/13', '0.5 Mark'], ['Calculating sin x = -12/13 and csc x = -13/12', '1.5 Marks'], ['Calculating tan x = -12/5 and cot x = -5/12', '1 Mark']]
));

ex3_2.push(createQCard(
  'c11m-ch3-q12', 'Question 5', 'Exercise 3.2',
  'Find the values of other $5$ trigonometric functions: $\\tan x = -\\dfrac{5}{12}$, $x$ lies in second quadrant.',
  `<div class="step">
    • Given $\\tan x = -\\dfrac{5}{12}$ ($x$ in Q II).<br>
    • $\\cot x = \\dfrac{1}{\\tan x} = \\mathbf{-\\frac{12}{5}}$<br><br>
    • $\\sec^2 x = 1 + \\tan^2 x = 1 + \\left(-\\frac{5}{12}\\right)^2 = 1 + \\frac{25}{144} = \\frac{169}{144}$<br>
    In Quadrant II, $\\sec x < 0$:<br>
    $$\\mathbf{\\sec x = -\\frac{13}{12}}$$<br><br>
    • $\\cos x = \\dfrac{1}{\\sec x} = \\mathbf{-\\frac{12}{13}}$<br><br>
    • $\\sin x = \\tan x \\times \\cos x = \\left(-\\frac{5}{12}\\right) \\left(-\\frac{12}{13}\\right) = \\mathbf{\\frac{5}{13}}$ (positive in Q II)<br><br>
    • $\\csc x = \\dfrac{1}{\\sin x} = \\mathbf{\\frac{13}{5}}$
  </div>`,
  '3 Marks',
  [['Finding cot x = -12/5 and sec^2 x = 169/144', '1 Mark'], ['Finding sec x = -13/12 and cos x = -12/13', '1 Mark'], ['Finding sin x = 5/13 and csc x = 13/5', '1 Mark']]
));

ex3_2.push(createQCard(
  'c11m-ch3-q13', 'Question 6', 'Exercise 3.2',
  'Find the value of the trigonometric function: $\\sin 765^\\circ$.',
  `<p><strong>Periodicity Property:</strong> $\\sin(2n\\pi + x) = \\sin(n \\times 360^\\circ + x) = \\sin x$, since sine is periodic with period $360^\\circ$ ($2\\pi$).</p>
  <div class="step">
    • Express $765^\\circ$ in multiples of $360^\\circ$:<br>
    $$765^\\circ = 2 \\times 360^\\circ + 45^\\circ = 720^\\circ + 45^\\circ$$<br>
    • Apply periodicity:<br>
    $$\\sin 765^\\circ = \\sin(2 \\times 360^\\circ + 45^\\circ) = \\sin 45^\\circ = \\mathbf{\\frac{1}{\\sqrt{2}}}$$
  </div>`,
  '2 Marks',
  [['Expressing 765° as 2 × 360° + 45°', '1 Mark'], ['Evaluating sin 45° = 1/√2', '1 Mark']]
));

ex3_2.push(createQCard(
  'c11m-ch3-q14', 'Question 7', 'Exercise 3.2',
  'Find the value of the trigonometric function: $\\csc(-1410^\\circ)$.',
  `<div class="step">
    • <strong>Negative Angle Identity:</strong> $\\csc(-\\theta) = -\\csc \\theta$.<br>
    $$\\csc(-1410^\\circ) = -\\csc(1410^\\circ)$$<br>
    • Express $1410^\\circ$ in multiples of $360^\\circ$:<br>
    $$4 \\times 360^\\circ = 1440^\\circ$$<br>
    $$1410^\\circ = 1440^\\circ - 30^\\circ = 4 \\times 360^\\circ - 30^\\circ$$<br>
    • Therefore:<br>
    $$\\csc(1410^\\circ) = \\csc(4 \\times 360^\\circ - 30^\\circ) = \\csc(-30^\\circ) = -\\csc 30^\\circ$$<br>
    • Substitute back:<br>
    $$\\csc(-1410^\\circ) = -(-\\csc 30^\\circ) = \\csc 30^\\circ = \\mathbf{2}$$
  </div>`,
  '2 Marks',
  [['Using csc(-θ) = -csc θ identity', '1 Mark'], ['Expressing 1410° as 4 × 360° - 30° to obtain 2', '1 Mark']]
));

ex3_2.push(createQCard(
  'c11m-ch3-q15', 'Question 8', 'Exercise 3.2',
  'Find the value of the trigonometric function: $\\tan \\dfrac{19\\pi}{3}$.',
  `<p><strong>Periodicity of Tangent:</strong> $\\tan(n\\pi + x) = \\tan x$, since $\\tan$ has period $\\pi$.</p>
  <div class="step">
    • Divide $19$ by $3$: $19 = 6 \\times 3 + 1$:<br>
    $$\\frac{19\\pi}{3} = 6\\pi + \\frac{\\pi}{3}$$<br>
    • Since $6\\pi$ is an even multiple of $\\pi$ (3 full rotations):<br>
    $$\\tan\\left(\\frac{19\\pi}{3}\\right) = \\tan\\left(6\\pi + \\frac{\\pi}{3}\\right) = \\tan\\left(\\frac{\\pi}{3}\\right) = \\mathbf{\\sqrt{3}}$$
  </div>`,
  '2 Marks',
  [['Splitting 19π/3 into 6π + π/3', '1 Mark'], ['Evaluating tan(π/3) = √3', '1 Mark']]
));

ex3_2.push(createQCard(
  'c11m-ch3-q16', 'Question 9', 'Exercise 3.2',
  'Find the value of the trigonometric function: $\\sin\\left(-\\dfrac{11\\pi}{3}\\right)$.',
  `<div class="step">
    • Negative angle identity: $\\sin(-\\theta) = -\\sin\\theta$.<br>
    $$\\sin\\left(-\\frac{11\\pi}{3}\\right) = -\\sin\\left(\\frac{11\\pi}{3}\\right)$$<br>
    • Write $\\dfrac{11\\pi}{3}$ as a multiple of $2\\pi$ ($4\\pi = \\frac{12\\pi}{3}$):<br>
    $$\\frac{11\\pi}{3} = 4\\pi - \\frac{\\pi}{3}$$<br>
    • Apply periodicity $\\sin(4\\pi - x) = \\sin(-x) = -\\sin x$:<br>
    $$\\sin\\left(\\frac{11\\pi}{3}\\right) = \\sin\\left(4\\pi - \\frac{\\pi}{3}\\right) = -\\sin\\left(\\frac{\\pi}{3}\\right)$$<br>
    • Substitute back:<br>
    $$\\sin\\left(-\\frac{11\\pi}{3}\\right) = -\\left(-\\sin\\frac{\\pi}{3}\\right) = \\sin\\frac{\\pi}{3} = \\mathbf{\\frac{\\sqrt{3}}{2}}$$
  </div>`,
  '2 Marks',
  [['Using sin(-x) = -sin x and splitting 11π/3 into 4π - π/3', '1 Mark'], ['Evaluating to √3/2', '1 Mark']]
));

ex3_2.push(createQCard(
  'c11m-ch3-q17', 'Question 10', 'Exercise 3.2',
  'Find the value of the trigonometric function: $\\cot\\left(-\\dfrac{15\\pi}{4}\\right)$.',
  `<div class="step">
    • Negative angle identity: $\\cot(-\\theta) = -\\cot\\theta$.<br>
    $$\\cot\\left(-\\frac{15\\pi}{4}\\right) = -\\cot\\left(\\frac{15\\pi}{4}\\right)$$<br>
    • Write $\\dfrac{15\\pi}{4}$ with respect to $4\\pi$ ($4\\pi = \\frac{16\\pi}{4}$):<br>
    $$\\frac{15\\pi}{4} = 4\\pi - \\frac{\\pi}{4}$$<br>
    • Since $\\cot(4\\pi - x) = \\cot(-x) = -\\cot x$:<br>
    $$\\cot\\left(\\frac{15\\pi}{4}\\right) = -\\cot\\left(\\frac{\\pi}{4}\\right) = -1$$<br>
    • Substitute back:<br>
    $$\\cot\\left(-\\frac{15\\pi}{4}\\right) = -(-1) = \\mathbf{1}$$
  </div>`,
  '2 Marks',
  [['Applying cot(-θ) = -cot θ and 15π/4 = 4π - π/4', '1 Mark'], ['Evaluating result to 1', '1 Mark']]
));

// ============================================================================
// EXERCISE 3.3 (Questions 1 to 25)
// ============================================================================

ex3_3.push(createQCard(
  'c11m-ch3-q18', 'Question 1', 'Exercise 3.3',
  'Prove that: $\\sin^2 \\dfrac{\\pi}{6} + \\cos^2 \\dfrac{\\pi}{3} - \\tan^2 \\dfrac{\\pi}{4} = -\\dfrac{1}{2}$.',
  `<div class="step">
    • Evaluate standard values:<br>
    $$\\sin \\frac{\\pi}{6} = \\frac{1}{2}, \\quad \\cos \\frac{\\pi}{3} = \\frac{1}{2}, \\quad \\tan \\frac{\\pi}{4} = 1$$<br>
    • Substitute into LHS:<br>
    $$\\text{LHS} = \\left(\\frac{1}{2}\\right)^2 + \\left(\\frac{1}{2}\\right)^2 - (1)^2$$<br>
    $$= \\frac{1}{4} + \\frac{1}{4} - 1 = \\frac{2}{4} - 1 = \\frac{1}{2} - 1 = -\\frac{1}{2} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Substituting exact values of sin(π/6), cos(π/3), tan(π/4)', '1 Mark'], ['Simplifying 1/4 + 1/4 - 1 = -1/2', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q19', 'Question 2', 'Exercise 3.3',
  'Prove that: $2\\sin^2 \\dfrac{\\pi}{6} + \\csc^2 \\dfrac{7\\pi}{6} \\cos^2 \\dfrac{\\pi}{3} = \\dfrac{3}{2}$.',
  `<div class="step">
    • Evaluate $\\csc \\dfrac{7\\pi}{6}$:<br>
    $$\\csc \\frac{7\\pi}{6} = \\csc\\left(\\pi + \\frac{\\pi}{6}\\right) = -\\csc \\frac{\\pi}{6} = -2$$<br>
    $$\\implies \\csc^2 \\frac{7\\pi}{6} = (-2)^2 = 4$$<br>
    • Substitute standard values $\\sin \\frac{\\pi}{6} = \\frac{1}{2}, \\cos \\frac{\\pi}{3} = \\frac{1}{2}$:<br>
    $$\\text{LHS} = 2\\left(\\frac{1}{2}\\right)^2 + (4)\\left(\\frac{1}{2}\\right)^2$$<br>
    $$= 2\\left(\\frac{1}{4}\\right) + 4\\left(\\frac{1}{4}\\right) = \\frac{1}{2} + 1 = \\frac{3}{2} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Evaluating csc(7π/6) = -2 and its square as 4', '1 Mark'], ['Evaluating 2(1/4) + 4(1/4) = 3/2', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q20', 'Question 3', 'Exercise 3.3',
  'Prove that: $\\cot^2 \\dfrac{\\pi}{6} + \\csc \\dfrac{5\\pi}{6} + 3\\tan^2 \\dfrac{\\pi}{6} = 6$.',
  `<div class="step">
    • Evaluate standard values:<br>
    $$\\cot \\frac{\\pi}{6} = \\sqrt{3} \\implies \\cot^2 \\frac{\\pi}{6} = (\\sqrt{3})^2 = 3$$<br>
    $$\\csc \\frac{5\\pi}{6} = \\csc\\left(\\pi - \\frac{\\pi}{6}\\right) = \\csc \\frac{\\pi}{6} = 2$$<br>
    $$\\tan \\frac{\\pi}{6} = \\frac{1}{\\sqrt{3}} \\implies \\tan^2 \\frac{\\pi}{6} = \\frac{1}{3}$$<br>
    • Substitute into LHS:<br>
    $$\\text{LHS} = 3 + 2 + 3\\left(\\frac{1}{3}\\right) = 3 + 2 + 1 = 6 = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Evaluating cot(π/6) and csc(5π/6)', '1 Mark'], ['Evaluating 3 + 2 + 1 = 6', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q21', 'Question 4', 'Exercise 3.3',
  'Prove that: $2\\sin^2 \\dfrac{3\\pi}{4} + 2\\cos^2 \\dfrac{\\pi}{4} + 2\\sec^2 \\dfrac{\\pi}{3} = 10$.',
  `<div class="step">
    • Evaluate terms:<br>
    $$\\sin \\frac{3\\pi}{4} = \\sin\\left(\\pi - \\frac{\\pi}{4}\\right) = \\sin \\frac{\\pi}{4} = \\frac{1}{\\sqrt{2}} \\implies \\sin^2 \\frac{3\\pi}{4} = \\frac{1}{2}$$<br>
    $$\\cos \\frac{\\pi}{4} = \\frac{1}{\\sqrt{2}} \\implies \\cos^2 \\frac{\\pi}{4} = \\frac{1}{2}$$<br>
    $$\\sec \\frac{\\pi}{3} = 2 \\implies \\sec^2 \\frac{\\pi}{3} = 4$$<br>
    • Substitute into LHS:<br>
    $$\\text{LHS} = 2\\left(\\frac{1}{2}\\right) + 2\\left(\\frac{1}{2}\\right) + 2(4) = 1 + 1 + 8 = 10 = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Evaluating sin(3π/4) = 1/√2 and sec(π/3) = 2', '1 Mark'], ['Evaluating 1 + 1 + 8 = 10', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q22', 'Question 5', 'Exercise 3.3',
  'Find the value of:<br>' +
  '(i) $\\sin 75^\\circ$<br>' +
  '(ii) $\\tan 15^\\circ$',
  `<div class="step">
    • <strong>(i) Find $\\sin 75^\\circ$:</strong><br>
    Write $75^\\circ = 45^\\circ + 30^\\circ$. Apply $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$:<br>
    $$\\sin 75^\\circ = \\sin(45^\\circ + 30^\\circ) = \\sin 45^\\circ \\cos 30^\\circ + \\cos 45^\\circ \\sin 30^\\circ$$<br>
    $$= \\left(\\frac{1}{\\sqrt{2}}\\right) \\left(\\frac{\\sqrt{3}}{2}\\right) + \\left(\\frac{1}{\\sqrt{2}}\\right) \\left(\\frac{1}{2}\\right) = \\mathbf{\\frac{\\sqrt{3} + 1}{2\\sqrt{2}}}$$<br><br>
    • <strong>(ii) Find $\\tan 15^\\circ$:</strong><br>
    Write $15^\\circ = 45^\\circ - 30^\\circ$. Apply $\\tan(A - B) = \\dfrac{\\tan A - \\tan B}{1 + \\tan A \\tan B}$:<br>
    $$\\tan 15^\\circ = \\frac{\\tan 45^\\circ - \\tan 30^\\circ}{1 + \\tan 45^\\circ \\tan 30^\\circ} = \\frac{1 - 1/\\sqrt{3}}{1 + 1/\\sqrt{3}} = \\frac{\\sqrt{3} - 1}{\\sqrt{3} + 1}$$<br>
    Rationalise denominator by multiplying by $(\\sqrt{3} - 1)$:<br>
    $$\\frac{(\\sqrt{3} - 1)^2}{(\\sqrt{3} + 1)(\\sqrt{3} - 1)} = \\frac{3 + 1 - 2\\sqrt{3}}{3 - 1} = \\frac{4 - 2\\sqrt{3}}{2} = \\mathbf{2 - \\sqrt{3}}$$
  </div>`,
  '4 Marks',
  [['Applying sin(A + B) to find (√3 + 1)/(2√2)', '2 Marks'], ['Applying tan(A - B) and rationalising to find 2 - √3', '2 Marks']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q23', 'Question 6', 'Exercise 3.3',
  'Prove that: $\\cos\\left(\\dfrac{\\pi}{4} - x\\right)\\cos\\left(\\dfrac{\\pi}{4} - y\\right) - \\sin\\left(\\dfrac{\\pi}{4} - x\\right)\\sin\\left(\\dfrac{\\pi}{4} - y\\right) = \\sin(x + y)$.',
  `<div class="step">
    • Recognize the identity $\\cos A \\cos B - \\sin A \\sin B = \\cos(A + B)$.<br>
    • Let $A = \\dfrac{\\pi}{4} - x$ and $B = \\dfrac{\\pi}{4} - y$.<br>
    • Then:<br>
    $$\\text{LHS} = \\cos(A + B) = \\cos\\left[\\left(\\frac{\\pi}{4} - x\\right) + \\left(\\frac{\\pi}{4} - y\\right)\\right]$$<br>
    $$= \\cos\\left(\\frac{\\pi}{2} - (x + y)\\right)$$<br>
    • By the complementary angle formula $\\cos\\left(\\frac{\\pi}{2} - \\theta\\right) = \\sin\\theta$:<br>
    $$= \\mathbf{\\sin(x + y)} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Identifying cos(A + B) formula with A = π/4 - x, B = π/4 - y', '1 Mark'], ['Simplifying cos(π/2 - (x + y)) = sin(x + y)', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q24', 'Question 7', 'Exercise 3.3',
  'Prove that: $\\dfrac{\\tan\\left(\\dfrac{\\pi}{4} + x\\right)}{\\tan\\left(\\dfrac{\\pi}{4} - x\\right)} = \\left(\\dfrac{1 + \\tan x}{1 - \\tan x}\\right)^2$.',
  `<div class="step">
    • Recall $\\tan\\left(\\frac{\\pi}{4} + x\\right) = \\frac{\\tan(\\pi/4) + \\tan x}{1 - \\tan(\\pi/4)\\tan x} = \\frac{1 + \\tan x}{1 - \\tan x}$.<br><br>
    • Recall $\\tan\\left(\\frac{\\pi}{4} - x\\right) = \\frac{\\tan(\\pi/4) - \\tan x}{1 + \\tan(\\pi/4)\\tan x} = \\frac{1 - \\tan x}{1 + \\tan x}$.<br><br>
    • Substitute into LHS:<br>
    $$\\text{LHS} = \\frac{\\frac{1 + \\tan x}{1 - \\tan x}}{\\frac{1 - \\tan x}{1 + \\tan x}} = \\left(\\frac{1 + \\tan x}{1 - \\tan x}\\right) \\times \\left(\\frac{1 + \\tan x}{1 - \\tan x}\\right) = \\mathbf{\\left(\\frac{1 + \\tan x}{1 - \\tan x}\\right)^2} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Expanding tan(π/4 + x) and tan(π/4 - x)', '1 Mark'], ['Dividing fractions to obtain ((1 + tan x)/(1 - tan x))^2', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q25', 'Question 8', 'Exercise 3.3',
  'Prove that: $\\dfrac{\\cos(\\pi + x)\\cos(-x)}{\\sin(\\pi - x)\\cos\\left(\\dfrac{\\pi}{2} + x\\right)} = \\cot^2 x$.',
  `<div class="step">
    • Evaluate each trigonometric factor using reduction formulas:<br>
    1. $\\cos(\\pi + x) = -\\cos x$ (Quadrant III, cos is negative)<br>
    2. $\\cos(-x) = \\cos x$ (Even function property)<br>
    3. $\\sin(\\pi - x) = \\sin x$ (Quadrant II, sin is positive)<br>
    4. $\\cos\\left(\\frac{\\pi}{2} + x\\right) = -\\sin x$ (Quadrant II, cos is negative)<br><br>
    • Substitute into LHS:<br>
    $$\\text{LHS} = \\frac{(-\\cos x)(\\cos x)}{(\\sin x)(-\\sin x)} = \\frac{-\\cos^2 x}{-\\sin^2 x} = \\frac{\\cos^2 x}{\\sin^2 x} = \\mathbf{\\cot^2 x} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '3 Marks',
  [['Applying quadrant reduction formulas for all 4 terms', '2 Marks'], ['Simplifying (-cos^2 x)/(-sin^2 x) = cot^2 x', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q26', 'Question 9', 'Exercise 3.3',
  'Prove that: $\\cos\\left(\\dfrac{3\\pi}{2} + x\\right)\\cos(2\\pi + x)\\left[\\cot\\left(\\dfrac{3\\pi}{2} - x\\right) + \\cot(2\\pi + x)\\right] = 1$.',
  `<div class="step">
    • <strong>Evaluate factors using quadrant identities:</strong><br>
    1. $\\cos\\left(\\frac{3\\pi}{2} + x\\right) = \\sin x$ (Quadrant IV)<br>
    2. $\\cos(2\\pi + x) = \\cos x$ (Quadrant I)<br>
    3. $\\cot\\left(\\frac{3\\pi}{2} - x\\right) = \\tan x$ (Quadrant III)<br>
    4. $\\cot(2\\pi + x) = \\cot x$ (Quadrant I)<br><br>
    • <strong>Substitute into LHS:</strong><br>
    $$\\text{LHS} = \\sin x \\cos x \\left[\\tan x + \\cot x\\right]$$<br>
    • <strong>Convert $\\tan x$ and $\\cot x$ to $\\sin$ and $\\cos$:</strong><br>
    $$= \\sin x \\cos x \\left[\\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\sin x}\\right]$$<br>
    $$= \\sin x \\cos x \\left[\\frac{\\sin^2 x + \\cos^2 x}{\\sin x \\cos x}\\right]$$<br>
    Since $\\sin^2 x + \\cos^2 x = 1$ and terms cancel:<br>
    $$= \\sin x \\cos x \\left[\\frac{1}{\\sin x \\cos x}\\right] = \\mathbf{1} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '3 Marks',
  [['Applying 3π/2 and 2π reduction formulas to all 4 functions', '1.5 Marks'], ['Simplifying sin x cos x (tan x + cot x) to 1', '1.5 Marks']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q27', 'Question 10', 'Exercise 3.3',
  'Prove that: $\\sin(n + 1)x \\sin(n + 2)x + \\cos(n + 1)x \\cos(n + 2)x = \\cos x$.',
  `<div class="step">
    • Recognize formula $\\cos A \\cos B + \\sin A \\sin B = \\cos(A - B)$.<br>
    • Let $A = (n + 2)x$ and $B = (n + 1)x$.<br>
    • Rearranging LHS:<br>
    $$\\text{LHS} = \\cos[(n + 2)x]\\cos[(n + 1)x] + \\sin[(n + 2)x]\\sin[(n + 1)x]$$<br>
    $$= \\cos[(n + 2)x - (n + 1)x]$$<br>
    $$= \\cos[nx + 2x - nx - x] = \\mathbf{\\cos x} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Identifying cos(A - B) identity', '1 Mark'], ['Subtracting angles (n + 2)x - (n + 1)x = x to get cos x', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q28', 'Question 11', 'Exercise 3.3',
  'Prove that: $\\cos\\left(\\dfrac{3\\pi}{4} + x\\right) - \\cos\\left(\\dfrac{3\\pi}{4} - x\\right) = -\\sqrt{2}\\sin x$.',
  `<div class="step">
    • Use identity $\\cos C - \\cos D = -2\\sin\\left(\\dfrac{C + D}{2}\\right)\\sin\\left(\\dfrac{C - D}{2}\\right)$.<br><br>
    • Here $C = \\dfrac{3\\pi}{4} + x$ and $D = \\dfrac{3\\pi}{4} - x$:<br>
    $$\\frac{C + D}{2} = \\frac{6\\pi/4}{2} = \\frac{3\\pi}{4}$$<br>
    $$\\frac{C - D}{2} = \\frac{2x}{2} = x$$<br>
    • Substitute into identity:<br>
    $$\\text{LHS} = -2\\sin\\left(\\frac{3\\pi}{4}\\right)\\sin(x)$$<br>
    • Since $\\sin\\left(\\frac{3\\pi}{4}\\right) = \\sin\\left(\\pi - \\frac{\\pi}{4}\\right) = \\sin\\frac{\\pi}{4} = \\frac{1}{\\sqrt{2}}$:<br>
    $$\\text{LHS} = -2\\left(\\frac{1}{\\sqrt{2}}\\right)\\sin x = -\\frac{2}{\\sqrt{2}}\\sin x = \\mathbf{-\\sqrt{2}\\sin x} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Applying cos C - cos D formula', '1 Mark'], ['Evaluating sin(3π/4) = 1/√2 and simplifying to -√2 sin x', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q29', 'Question 12', 'Exercise 3.3',
  'Prove that: $\\sin^2 6x - \\sin^2 4x = \\sin 2x \\sin 10x$.',
  `<p><strong>Standard Identity:</strong> $\\sin^2 A - \\sin^2 B = \\sin(A + B)\\sin(A - B)$.</p>
  <div class="step">
    • <em>Proof of Identity:</em><br>
    $$\\sin^2 A - \\sin^2 B = \\left(\\frac{1 - \\cos 2A}{2}\\right) - \\left(\\frac{1 - \\cos 2B}{2}\\right) = \\frac{\\cos 2B - \\cos 2A}{2}$$<br>
    $$= \\frac{2\\sin(A + B)\\sin(A - B)}{2} = \\sin(A + B)\\sin(A - B)$$<br><br>
    • Substitute $A = 6x$ and $B = 4x$:<br>
    $$\\text{LHS} = \\sin^2 6x - \\sin^2 4x = \\sin(6x + 4x)\\sin(6x - 4x) = \\sin 10x \\sin 2x = \\mathbf{\\sin 2x \\sin 10x} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Stating or deriving sin^2 A - sin^2 B = sin(A + B) sin(A - B)', '1 Mark'], ['Substituting A = 6x, B = 4x to obtain sin 2x sin 10x', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q30', 'Question 13', 'Exercise 3.3',
  'Prove that: $\\cos^2 2x - \\cos^2 6x = \\sin 4x \\sin 8x$.',
  `<div class="step">
    • Convert cosines into sines using $\\cos^2 \\theta = 1 - \\sin^2 \\theta$:<br>
    $$\\text{LHS} = (1 - \\sin^2 2x) - (1 - \\sin^2 6x) = \\sin^2 6x - \\sin^2 2x$$<br>
    • Apply identity $\\sin^2 A - \\sin^2 B = \\sin(A + B)\\sin(A - B)$ with $A = 6x, B = 2x$:<br>
    $$\\text{LHS} = \\sin(6x + 2x)\\sin(6x - 2x) = \\mathbf{\\sin 8x \\sin 4x} = \\sin 4x \\sin 8x = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Rewriting as sin^2 6x - sin^2 2x', '1 Mark'], ['Applying sin(A + B)sin(A - B) to get sin 4x sin 8x', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q31', 'Question 14', 'Exercise 3.3',
  'Prove that: $\\sin 2x + 2\\sin 4x + \\sin 6x = 4\\cos^2 x \\sin 4x$.',
  `<div class="step">
    • Group the first and third terms on LHS:<br>
    $$\\text{LHS} = (\\sin 6x + \\sin 2x) + 2\\sin 4x$$<br>
    • Apply $\\sin C + \\sin D = 2\\sin\\left(\\frac{C + D}{2}\\right)\\cos\\left(\\frac{C - D}{2}\\right)$ to $(\\sin 6x + \\sin 2x)$:<br>
    $$\\sin 6x + \\sin 2x = 2\\sin\\left(\\frac{6x + 2x}{2}\\right)\\cos\\left(\\frac{6x - 2x}{2}\\right) = 2\\sin 4x \\cos 2x$$<br>
    • Substitute back into LHS:<br>
    $$\\text{LHS} = 2\\sin 4x \\cos 2x + 2\\sin 4x = 2\\sin 4x(\\cos 2x + 1)$$<br>
    • Use double-angle identity $1 + \\cos 2x = 2\\cos^2 x$:<br>
    $$\\text{LHS} = 2\\sin 4x (2\\cos^2 x) = \\mathbf{4\\cos^2 x \\sin 4x} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '3 Marks',
  [['Applying sin C + sin D to sin 6x + sin 2x = 2 sin 4x cos 2x', '1.5 Marks'], ['Factoring 2 sin 4x and applying 1 + cos 2x = 2 cos^2 x', '1.5 Marks']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q32', 'Question 15', 'Exercise 3.3',
  'Prove that: $\\cot 4x (\\sin 5x + \\sin 3x) = \\cot x (\\sin 5x - \\sin 3x)$.',
  `<div class="step">
    • <strong>Evaluate LHS:</strong><br>
    Apply $\\sin C + \\sin D = 2\\sin 4x \\cos x$:<br>
    $$\\text{LHS} = \\cot 4x (2\\sin 4x \\cos x) = \\frac{\\cos 4x}{\\sin 4x} \\times 2\\sin 4x \\cos x = \\mathbf{2\\cos 4x \\cos x}$$<br><br>
    • <strong>Evaluate RHS:</strong><br>
    Apply $\\sin C - \\sin D = 2\\cos\\left(\\frac{C + D}{2}\\right)\\sin\\left(\\frac{C - D}{2}\\right) = 2\\cos 4x \\sin x$:<br>
    $$\\text{RHS} = \\cot x (2\\cos 4x \\sin x) = \\frac{\\cos x}{\\sin x} \\times 2\\cos 4x \\sin x = \\mathbf{2\\cos 4x \\cos x}$$<br><br>
    Since $\\text{LHS} = \\text{RHS} = 2\\cos 4x \\cos x$, <strong>the identity is proved.</strong>
  </div>`,
  '3 Marks',
  [['Simplifying LHS to 2 cos 4x cos x', '1.5 Marks'], ['Simplifying RHS to 2 cos 4x cos x and concluding equality', '1.5 Marks']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q33', 'Question 16', 'Exercise 3.3',
  'Prove that: $\\dfrac{\\cos 9x - \\cos 5x}{\\sin 17x - \\sin 3x} = -\\dfrac{\\sin 2x}{\\cos 10x}$.',
  `<div class="step">
    • <strong>Numerator:</strong> Apply $\\cos C - \\cos D = -2\\sin\\left(\\frac{C + D}{2}\\right)\\sin\\left(\\frac{C - D}{2}\\right)$:<br>
    $$\\cos 9x - \\cos 5x = -2\\sin\\left(\\frac{9x + 5x}{2}\\right)\\sin\\left(\\frac{9x - 5x}{2}\\right) = -2\\sin 7x \\sin 2x$$<br>
    • <strong>Denominator:</strong> Apply $\\sin C - \\sin D = 2\\cos\\left(\\frac{C + D}{2}\\right)\\sin\\left(\\frac{C - D}{2}\\right)$:<br>
    $$\\sin 17x - \\sin 3x = 2\\cos\\left(\\frac{17x + 3x}{2}\\right)\\sin\\left(\\frac{17x - 3x}{2}\\right) = 2\\cos 10x \\sin 7x$$<br>
    • <strong>Substitute into fraction:</strong><br>
    $$\\text{LHS} = \\frac{-2\\sin 7x \\sin 2x}{2\\cos 10x \\sin 7x} = \\mathbf{-\\frac{\\sin 2x}{\\cos 10x}} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Applying transformation formulas to numerator and denominator', '1 Mark'], ['Cancelling common term 2 sin 7x to obtain -sin 2x / cos 10x', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q34', 'Question 17', 'Exercise 3.3',
  'Prove that: $\\dfrac{\\sin 5x + \\sin 3x}{\\cos 5x + \\cos 3x} = \\tan 4x$.',
  `<div class="step">
    • Apply sum-to-product formulas:<br>
    Numerator: $\\sin 5x + \\sin 3x = 2\\sin\\left(\\frac{5x + 3x}{2}\\right)\\cos\\left(\\frac{5x - 3x}{2}\\right) = 2\\sin 4x \\cos x$<br>
    Denominator: $\\cos 5x + \\cos 3x = 2\\cos\\left(\\frac{5x + 3x}{2}\\right)\\cos\\left(\\frac{5x - 3x}{2}\\right) = 2\\cos 4x \\cos x$<br><br>
    • Divide:<br>
    $$\\text{LHS} = \\frac{2\\sin 4x \\cos x}{2\\cos 4x \\cos x} = \\frac{\\sin 4x}{\\cos 4x} = \\mathbf{\\tan 4x} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Applying sin C + sin D and cos C + cos D formulas', '1 Mark'], ['Cancelling 2 cos x to obtain tan 4x', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q35', 'Question 18', 'Exercise 3.3',
  'Prove that: $\\dfrac{\\sin x - \\sin y}{\\cos x + \\cos y} = \\tan\\left(\\dfrac{x - y}{2}\\right)$.',
  `<div class="step">
    • Numerator: $\\sin x - \\sin y = 2\\cos\\left(\\frac{x + y}{2}\\right)\\sin\\left(\\frac{x - y}{2}\\right)$<br>
    • Denominator: $\\cos x + \\cos y = 2\\cos\\left(\\frac{x + y}{2}\\right)\\cos\\left(\\frac{x - y}{2}\\right)$<br><br>
    • Divide:<br>
    $$\\text{LHS} = \\frac{2\\cos\\left(\\frac{x + y}{2}\\right)\\sin\\left(\\frac{x - y}{2}\\right)}{2\\cos\\left(\\frac{x + y}{2}\\right)\\cos\\left(\\frac{x - y}{2}\\right)} = \\frac{\\sin\\left(\\frac{x - y}{2}\\right)}{\\cos\\left(\\frac{x - y}{2}\\right)} = \\mathbf{\\tan\\left(\\frac{x - y}{2}\\right)} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Applying CD formulas to numerator and denominator', '1 Mark'], ['Cancelling 2 cos((x + y)/2) to obtain tan((x - y)/2)', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q36', 'Question 19', 'Exercise 3.3',
  'Prove that: $\\dfrac{\\sin x + \\sin 3x}{\\cos x + \\cos 3x} = \\tan 2x$.',
  `<div class="step">
    • Numerator: $\\sin 3x + \\sin x = 2\\sin\\left(\\frac{3x + x}{2}\\right)\\cos\\left(\\frac{3x - x}{2}\\right) = 2\\sin 2x \\cos x$<br>
    • Denominator: $\\cos 3x + \\cos x = 2\\cos\\left(\\frac{3x + x}{2}\\right)\\cos\\left(\\frac{3x - x}{2}\\right) = 2\\cos 2x \\cos x$<br><br>
    • Divide:<br>
    $$\\text{LHS} = \\frac{2\\sin 2x \\cos x}{2\\cos 2x \\cos x} = \\frac{\\sin 2x}{\\cos 2x} = \\mathbf{\\tan 2x} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Applying sum-to-product formulas', '1 Mark'], ['Simplifying to tan 2x', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q37', 'Question 20', 'Exercise 3.3',
  'Prove that: $\\dfrac{\\sin x - \\sin 3x}{\\sin^2 x - \\cos^2 x} = 2\\sin x$.',
  `<div class="step">
    • Factor out $-1$ in numerator and denominator:<br>
    $$\\text{Numerator} = -(\\sin 3x - \\sin x)$$<br>
    $$\\text{Denominator} = -(\\cos^2 x - \\sin^2 x) = -\\cos 2x$$<br><br>
    • Apply $\\sin 3x - \\sin x = 2\\cos\\left(\\frac{3x + x}{2}\\right)\\sin\\left(\\frac{3x - x}{2}\\right) = 2\\cos 2x \\sin x$:<br>
    $$\\text{LHS} = \\frac{-2\\cos 2x \\sin x}{-\\cos 2x} = \\mathbf{2\\sin x} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Factoring -1 and writing denominator as -cos 2x', '1 Mark'], ['Applying sin 3x - sin x = 2 cos 2x sin x and cancelling cos 2x', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q38', 'Question 21', 'Exercise 3.3',
  'Prove that: $\\dfrac{\\cos 4x + \\cos 3x + \\cos 2x}{\\sin 4x + \\sin 3x + \\sin 2x} = \\cot 3x$.',
  `<div class="step">
    • Group terms with angles $4x$ and $2x$ in both numerator and denominator:<br>
    $$\\text{LHS} = \\frac{(\\cos 4x + \\cos 2x) + \\cos 3x}{(\\sin 4x + \\sin 2x) + \\sin 3x}$$<br>
    • Apply sum-to-product formulas:<br>
    $$\\cos 4x + \\cos 2x = 2\\cos 3x \\cos x$$<br>
    $$\\sin 4x + \\sin 2x = 2\\sin 3x \\cos x$$<br><br>
    • Factor out common terms:<br>
    $$\\text{Numerator} = 2\\cos 3x \\cos x + \\cos 3x = \\cos 3x (2\\cos x + 1)$$<br>
    $$\\text{Denominator} = 2\\sin 3x \\cos x + \\sin 3x = \\sin 3x (2\\cos x + 1)$$<br><br>
    • Divide:<br>
    $$\\text{LHS} = \\frac{\\cos 3x (2\\cos x + 1)}{\\sin 3x (2\\cos x + 1)} = \\frac{\\cos 3x}{\\sin 3x} = \\mathbf{\\cot 3x} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '3 Marks',
  [['Grouping (cos 4x + cos 2x) and (sin 4x + sin 2x)', '1 Mark'], ['Factoring (2 cos x + 1) in both numerator and denominator', '1 Mark'], ['Obtaining cot 3x', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q39', 'Question 22', 'Exercise 3.3',
  'Prove that: $\\cot x \\cot 2x - \\cot 2x \\cot 3x - \\cot 3x \\cot x = 1$.',
  `<div class="step">
    • Write angle $3x$ as $(2x + x)$:<br>
    $$3x = 2x + x$$<br>
    • Apply cotangent of sum formula $\\cot(A + B) = \\dfrac{\\cot A \\cot B - 1}{\\cot A + \\cot B}$:<br>
    $$\\cot 3x = \\cot(2x + x) = \\frac{\\cot 2x \\cot x - 1}{\\cot 2x + \\cot x}$$<br>
    • Cross-multiply both sides:<br>
    $$\\cot 3x (\\cot 2x + \\cot x) = \\cot 2x \\cot x - 1$$<br>
    $$\\cot 2x \\cot 3x + \\cot 3x \\cot x = \\cot x \\cot 2x - 1$$<br>
    • Rearrange terms:<br>
    $$\\mathbf{\\cot x \\cot 2x - \\cot 2x \\cot 3x - \\cot 3x \\cot x = 1}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '3 Marks',
  [['Expressing 3x = 2x + x and writing cot(2x + x) formula', '1.5 Marks'], ['Cross-multiplying and rearranging to achieve identity', '1.5 Marks']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q40', 'Question 23', 'Exercise 3.3',
  'Prove that: $\\tan 4x = \\dfrac{4\\tan x (1 - \\tan^2 x)}{1 - 6\\tan^2 x + \\tan^4 x}$.',
  `<div class="step">
    • Write $4x = 2(2x)$ and use $\\tan 2\\theta = \\dfrac{2\\tan\\theta}{1 - \\tan^2\\theta}$ with $\\theta = 2x$:<br>
    $$\\tan 4x = \\frac{2\\tan 2x}{1 - \\tan^2 2x}$$<br>
    • Substitute $\\tan 2x = \\dfrac{2\\tan x}{1 - \\tan^2 x}$:<br>
    $$\\text{Numerator} = 2\\left(\\frac{2\\tan x}{1 - \\tan^2 x}\\right) = \\frac{4\\tan x}{1 - \\tan^2 x}$$<br>
    $$\\text{Denominator} = 1 - \\left(\\frac{2\\tan x}{1 - \\tan^2 x}\\right)^2 = 1 - \\frac{4\\tan^2 x}{(1 - \\tan^2 x)^2} = \\frac{(1 - \\tan^2 x)^2 - 4\\tan^2 x}{(1 - \\tan^2 x)^2}$$<br>
    • Expand $(1 - \\tan^2 x)^2 = 1 - 2\\tan^2 x + \\tan^4 x$:<br>
    $$\\text{Denominator} = \\frac{1 - 2\\tan^2 x + \\tan^4 x - 4\\tan^2 x}{(1 - \\tan^2 x)^2} = \\frac{1 - 6\\tan^2 x + \\tan^4 x}{(1 - \\tan^2 x)^2}$$<br>
    • Divide numerator by denominator:<br>
    $$\\tan 4x = \\frac{4\\tan x}{1 - \\tan^2 x} \\times \\frac{(1 - \\tan^2 x)^2}{1 - 6\\tan^2 x + \\tan^4 x} = \\mathbf{\\frac{4\\tan x (1 - \\tan^2 x)}{1 - 6\\tan^2 x + \\tan^4 x}} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '4 Marks',
  [['Applying tan 2θ double-angle formula to tan 4x', '1 Mark'], ['Substituting tan 2x formula in numerator and denominator', '1.5 Marks'], ['Simplifying denominator and cancelling (1 - tan^2 x)', '1.5 Marks']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q41', 'Question 24', 'Exercise 3.3',
  'Prove that: $\\cos 4x = 1 - 8\\sin^2 x \\cos^2 x$.',
  `<div class="step">
    • Write $4x = 2(2x)$ and use double-angle identity $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ with $\\theta = 2x$:<br>
    $$\\text{LHS} = \\cos 4x = 1 - 2\\sin^2 2x$$<br>
    • Apply $\\sin 2x = 2\\sin x \\cos x$:<br>
    $$\\sin^2 2x = (2\\sin x \\cos x)^2 = 4\\sin^2 x \\cos^2 x$$<br>
    • Substitute back:<br>
    $$\\text{LHS} = 1 - 2(4\\sin^2 x \\cos^2 x) = \\mathbf{1 - 8\\sin^2 x \\cos^2 x} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '2 Marks',
  [['Using cos 4x = 1 - 2 sin^2 2x', '1 Mark'], ['Substituting sin 2x = 2 sin x cos x to obtain RHS', '1 Mark']]
));

ex3_3.push(createQCard(
  'c11m-ch3-q42', 'Question 25', 'Exercise 3.3',
  'Prove that: $\\cos 6x = 32\\cos^6 x - 48\\cos^4 x + 18\\cos^2 x - 1$.',
  `<div class="step">
    • Write $6x = 3(2x)$ and use triple-angle identity $\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta$ with $\\theta = 2x$:<br>
    $$\\text{LHS} = \\cos 6x = 4\\cos^3 2x - 3\\cos 2x$$<br>
    • Substitute double-angle identity $\\cos 2x = 2\\cos^2 x - 1$:<br>
    $$\\text{LHS} = 4(2\\cos^2 x - 1)^3 - 3(2\\cos^2 x - 1)$$<br>
    • Expand $(2\\cos^2 x - 1)^3$ using $(a - b)^3 = a^3 - 3a^2 b + 3ab^2 - b^3$ where $a = 2\\cos^2 x, b = 1$:<br>
    $$(2\\cos^2 x - 1)^3 = 8\\cos^6 x - 3(4\\cos^4 x)(1) + 3(2\\cos^2 x)(1) - 1 = 8\\cos^6 x - 12\\cos^4 x + 6\\cos^2 x - 1$$<br>
    • Multiply by 4 and expand second term:<br>
    $$4(8\\cos^6 x - 12\\cos^4 x + 6\\cos^2 x - 1) - 3(2\\cos^2 x - 1)$$<br>
    $$= 32\\cos^6 x - 48\\cos^4 x + 24\\cos^2 x - 4 - 6\\cos^2 x + 3$$<br>
    $$= \\mathbf{32\\cos^6 x - 48\\cos^4 x + 18\\cos^2 x - 1} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '4 Marks',
  [['Applying cos 3θ identity with θ = 2x', '1 Mark'], ['Substituting cos 2x = 2 cos^2 x - 1 and expanding cubic', '2 Marks'], ['Combining like terms to obtain RHS', '1 Mark']]
));

// ============================================================================
// MISCELLANEOUS EXERCISE (Questions 1 to 10)
// ============================================================================

misc.push(createQCard(
  'c11m-ch3-q43', 'Question 1', 'Miscellaneous Exercise',
  'Prove that: $2\\cos \\dfrac{\\pi}{13} \\cos \\dfrac{9\\pi}{13} + \\cos \\dfrac{3\\pi}{13} + \\cos \\dfrac{5\\pi}{13} = 0$.',
  `<div class="step">
    • Apply product-to-sum identity $2\\cos A \\cos B = \\cos(A + B) + \\cos(A - B)$ to first term:<br>
    $$2\\cos \\frac{\\pi}{13} \\cos \\frac{9\\pi}{13} = \\cos\\left(\\frac{\\pi + 9\\pi}{13}\\right) + \\cos\\left(\\frac{9\\pi - \\pi}{13}\\right) = \\cos \\frac{10\\pi}{13} + \\cos \\frac{8\\pi}{13}$$<br>
    • Substitute into LHS:<br>
    $$\\text{LHS} = \\cos \\frac{10\\pi}{13} + \\cos \\frac{8\\pi}{13} + \\cos \\frac{3\\pi}{13} + \\cos \\frac{5\\pi}{13}$$<br>
    • Notice supplementary angles in $\\pi$:<br>
    $$\\cos \\frac{10\\pi}{13} = \\cos\\left(\\pi - \\frac{3\\pi}{13}\\right) = -\\cos \\frac{3\\pi}{13}$$<br>
    $$\\cos \\frac{8\\pi}{13} = \\cos\\left(\\pi - \\frac{5\\pi}{13}\\right) = -\\cos \\frac{5\\pi}{13}$$<br>
    • Substitute back:<br>
    $$\\text{LHS} = -\\cos \\frac{3\\pi}{13} - \\cos \\frac{5\\pi}{13} + \\cos \\frac{3\\pi}{13} + \\cos \\frac{5\\pi}{13} = \\mathbf{0} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '3 Marks',
  [['Applying 2 cos A cos B = cos(A + B) + cos(A - B)', '1.5 Marks'], ['Using cos(π - θ) = -cos θ to cancel terms and get 0', '1.5 Marks']]
));

misc.push(createQCard(
  'c11m-ch3-q44', 'Question 2', 'Miscellaneous Exercise',
  'Prove that: $(\\sin 3x + \\sin x)\\sin x + (\\cos 3x - \\cos x)\\cos x = 0$.',
  `<div class="step">
    • <strong>Method: Expand the brackets directly:</strong><br>
    $$\\text{LHS} = \\sin 3x \\sin x + \\sin^2 x + \\cos 3x \\cos x - \\cos^2 x$$<br>
    • Regroup terms:<br>
    $$= (\\cos 3x \\cos x + \\sin 3x \\sin x) - (\\cos^2 x - \\sin^2 x)$$<br>
    • Apply compound angle identity $\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B$ and double-angle identity $\\cos 2x = \\cos^2 x - \\sin^2 x$:<br>
    $$\\cos 3x \\cos x + \\sin 3x \\sin x = \\cos(3x - x) = \\cos 2x$$<br>
    $$\\cos^2 x - \\sin^2 x = \\cos 2x$$<br>
    • Subtracting the two expressions:<br>
    $$\\text{LHS} = \\cos 2x - \\cos 2x = \\mathbf{0} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '3 Marks',
  [['Expanding terms and regrouping (cos 3x cos x + sin 3x sin x)', '1.5 Marks'], ['Recognizing cos 2x - cos 2x = 0', '1.5 Marks']]
));

misc.push(createQCard(
  'c11m-ch3-q45', 'Question 3', 'Miscellaneous Exercise',
  'Prove that: $(\\cos x + \\cos y)^2 + (\\sin x - \\sin y)^2 = 4\\cos^2\\left(\\dfrac{x + y}{2}\\right)$.',
  `<div class="step">
    • Expand both squares on LHS:<br>
    $$(\\cos x + \\cos y)^2 = \\cos^2 x + \\cos^2 y + 2\\cos x \\cos y$$<br>
    $$(\\sin x - \\sin y)^2 = \\sin^2 x + \\sin^2 y - 2\\sin x \\sin y$$<br>
    • Add them together:<br>
    $$\\text{LHS} = (\\cos^2 x + \\sin^2 x) + (\\cos^2 y + \\sin^2 y) + 2(\\cos x \\cos y - \\sin x \\sin y)$$<br>
    • Use Pythagorean identity $\\cos^2 \\theta + \\sin^2 \\theta = 1$ and $\\cos(x + y) = \\cos x \\cos y - \\sin x \\sin y$:<br>
    $$\\text{LHS} = 1 + 1 + 2\\cos(x + y) = 2 + 2\\cos(x + y) = 2[1 + \\cos(x + y)]$$<br>
    • Use half-angle identity $1 + \\cos\\theta = 2\\cos^2\\left(\\frac{\\theta}{2}\\right)$ with $\\theta = x + y$:<br>
    $$\\text{LHS} = 2\\left[2\\cos^2\\left(\\frac{x + y}{2}\\right)\\right] = \\mathbf{4\\cos^2\\left(\\frac{x + y}{2}\\right)} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '3 Marks',
  [['Expanding both binomials and applying Pythagorean identity to get 2 + 2 cos(x + y)', '1.5 Marks'], ['Applying 1 + cos θ = 2 cos^2(θ/2) to achieve RHS', '1.5 Marks']]
));

misc.push(createQCard(
  'c11m-ch3-q46', 'Question 4', 'Miscellaneous Exercise',
  'Prove that: $(\\cos x - \\cos y)^2 + (\\sin x - \\sin y)^2 = 4\\sin^2\\left(\\dfrac{x - y}{2}\\right)$.',
  `<div class="step">
    • Expand both squares on LHS:<br>
    $$(\\cos x - \\cos y)^2 = \\cos^2 x + \\cos^2 y - 2\\cos x \\cos y$$<br>
    $$(\\sin x - \\sin y)^2 = \\sin^2 x + \\sin^2 y - 2\\sin x \\sin y$$<br>
    • Add expressions:<br>
    $$\\text{LHS} = (\\cos^2 x + \\sin^2 x) + (\\cos^2 y + \\sin^2 y) - 2(\\cos x \\cos y + \\sin x \\sin y)$$<br>
    • Use $\\cos(x - y) = \\cos x \\cos y + \\sin x \\sin y$:<br>
    $$\\text{LHS} = 1 + 1 - 2\\cos(x - y) = 2 - 2\\cos(x - y) = 2[1 - \\cos(x - y)]$$<br>
    • Apply half-angle formula $1 - \\cos\\theta = 2\\sin^2\\left(\\frac{\\theta}{2}\\right)$ with $\\theta = x - y$:<br>
    $$\\text{LHS} = 2\\left[2\\sin^2\\left(\\frac{x - y}{2}\\right)\\right] = \\mathbf{4\\sin^2\\left(\\frac{x - y}{2}\\right)} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '3 Marks',
  [['Expanding terms and reducing to 2 - 2 cos(x - y)', '1.5 Marks'], ['Applying 1 - cos θ = 2 sin^2(θ/2) to achieve RHS', '1.5 Marks']]
));

misc.push(createQCard(
  'c11m-ch3-q47', 'Question 5', 'Miscellaneous Exercise',
  'Prove that: $\\sin x + \\sin 3x + \\sin 5x + \\sin 7x = 4\\cos x \\cos 2x \\sin 4x$.',
  `<div class="step">
    • Pair the terms with equal angle sums ($7 + 1 = 8$ and $5 + 3 = 8$):<br>
    $$\\text{LHS} = (\\sin 7x + \\sin x) + (\\sin 5x + \\sin 3x)$$<br>
    • Apply $\\sin C + \\sin D = 2\\sin\\left(\\frac{C + D}{2}\\right)\\cos\\left(\\frac{C - D}{2}\\right)$ to each pair:<br>
    $$\\sin 7x + \\sin x = 2\\sin 4x \\cos 3x$$<br>
    $$\\sin 5x + \\sin 3x = 2\\sin 4x \\cos x$$<br>
    • Factor out $2\\sin 4x$:<br>
    $$\\text{LHS} = 2\\sin 4x (\\cos 3x + \\cos x)$$<br>
    • Apply $\\cos C + \\cos D = 2\\cos\\left(\\frac{C + D}{2}\\right)\\cos\\left(\\frac{C - D}{2}\\right)$ to $(\\cos 3x + \\cos x)$:<br>
    $$\\cos 3x + \\cos x = 2\\cos 2x \\cos x$$<br>
    • Substitute back:<br>
    $$\\text{LHS} = 2\\sin 4x (2\\cos 2x \\cos x) = \\mathbf{4\\cos x \\cos 2x \\sin 4x} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '3 Marks',
  [['Pairing (sin 7x + sin x) and (sin 5x + sin 3x) to factor 2 sin 4x', '1.5 Marks'], ['Applying cos 3x + cos x = 2 cos 2x cos x to obtain RHS', '1.5 Marks']]
));

misc.push(createQCard(
  'c11m-ch3-q48', 'Question 6', 'Miscellaneous Exercise',
  'Prove that: $\\dfrac{(\\sin 7x + \\sin 5x) + (\\sin 9x + \\sin 3x)}{(\\cos 7x + \\cos 5x) + (\\cos 9x + \\cos 3x)} = \\tan 6x$.',
  `<div class="step">
    • <strong>Simplify Numerator:</strong><br>
    $$\\sin 7x + \\sin 5x = 2\\sin 6x \\cos x$$<br>
    $$\\sin 9x + \\sin 3x = 2\\sin 6x \\cos 3x$$<br>
    $$\\text{Numerator} = 2\\sin 6x (\\cos x + \\cos 3x)$$<br><br>
    • <strong>Simplify Denominator:</strong><br>
    $$\\cos 7x + \\cos 5x = 2\\cos 6x \\cos x$$<br>
    $$\\cos 9x + \\cos 3x = 2\\cos 6x \\cos 3x$$<br>
    $$\\text{Denominator} = 2\\cos 6x (\\cos x + \\cos 3x)$$<br><br>
    • <strong>Divide:</strong><br>
    $$\\text{LHS} = \\frac{2\\sin 6x (\\cos x + \\cos 3x)}{2\\cos 6x (\\cos x + \\cos 3x)} = \\frac{\\sin 6x}{\\cos 6x} = \\mathbf{\\tan 6x} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '3 Marks',
  [['Factoring 2 sin 6x from numerator and 2 cos 6x from denominator', '2 Marks'], ['Cancelling common factor 2(cos x + cos 3x) to get tan 6x', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch3-q49', 'Question 7', 'Miscellaneous Exercise',
  'Prove that: $\\sin 3x + \\sin 2x - \\sin x = 4\\sin x \\cos \\dfrac{x}{2} \\cos \\dfrac{3x}{2}$.',
  `<div class="step">
    • Group terms with $3x$ and $x$:<br>
    $$\\text{LHS} = (\\sin 3x - \\sin x) + \\sin 2x$$<br>
    • Apply $\\sin C - \\sin D = 2\\cos\\left(\\frac{C + D}{2}\\right)\\sin\\left(\\frac{C - D}{2}\\right)$:<br>
    $$\\sin 3x - \\sin x = 2\\cos 2x \\sin x$$<br>
    • Use double-angle identity $\\sin 2x = 2\\sin x \\cos x$:<br>
    $$\\text{LHS} = 2\\cos 2x \\sin x + 2\\sin x \\cos x = 2\\sin x (\\cos 2x + \\cos x)$$<br>
    • Apply $\\cos C + \\cos D = 2\\cos\\left(\\frac{C + D}{2}\\right)\\cos\\left(\\frac{C - D}{2}\\right)$ to $(\\cos 2x + \\cos x)$:<br>
    $$\\cos 2x + \\cos x = 2\\cos\\left(\\frac{2x + x}{2}\\right)\\cos\\left(\\frac{2x - x}{2}\\right) = 2\\cos\\left(\\frac{3x}{2}\\right)\\cos\\left(\\frac{x}{2}\\right)$$<br>
    • Substitute back:<br>
    $$\\text{LHS} = 2\\sin x \\left[2\\cos\\left(\\frac{3x}{2}\\right)\\cos\\left(\\frac{x}{2}\\right)\\right] = \\mathbf{4\\sin x \\cos\\left(\\frac{x}{2}\\right)\\cos\\left(\\frac{3x}{2}\\right)} = \\text{RHS}$$<br>
    <strong>Hence proved.</strong>
  </div>`,
  '3 Marks',
  [['Grouping (sin 3x - sin x) and factoring 2 sin x', '1.5 Marks'], ['Applying cos 2x + cos x = 2 cos(3x/2) cos(x/2) to achieve RHS', '1.5 Marks']]
));

misc.push(createQCard(
  'c11m-ch3-q50', 'Question 8', 'Miscellaneous Exercise',
  'Find $\\sin \\dfrac{x}{2}, \\; \\cos \\dfrac{x}{2}$ and $\\tan \\dfrac{x}{2}$: $\\tan x = -\\dfrac{4}{3}$, $x$ in quadrant II.',
  `<p><strong>Quadrant Analysis for Half Angles:</strong> If $x$ lies in Quadrant II, then $\\dfrac{\\pi}{2} < x < \\pi$. Dividing by 2: $\\dfrac{\\pi}{4} < \\dfrac{x}{2} < \\dfrac{\\pi}{2}$. Thus, $\\dfrac{x}{2}$ lies in <strong>Quadrant I</strong>, where all trigonometric functions are <strong>positive</strong>.</p>
  <div class="step">
    • <strong>Step 1: Find $\\cos x$:</strong><br>
    $$\\sec^2 x = 1 + \\tan^2 x = 1 + \\left(-\\frac{4}{3}\\right)^2 = 1 + \\frac{16}{9} = \\frac{25}{9}$$<br>
    Since $x$ is in Quadrant II, $\\cos x < 0$:<br>
    $$\\sec x = -\\frac{5}{3} \\implies \\cos x = -\\frac{3}{5}$$<br><br>
    • <strong>Step 2: Find $\\sin\\left(\\frac{x}{2}\\right)$ using $\\sin\\left(\\frac{x}{2}\\right) = \\sqrt{\\frac{1 - \\cos x}{2}}$:</strong><br>
    $$\\sin\\frac{x}{2} = \\sqrt{\\frac{1 - (-3/5)}{2}} = \\sqrt{\\frac{8/5}{2}} = \\sqrt{\\frac{4}{5}} = \\mathbf{\\frac{2}{\\sqrt{5}} = \\frac{2\\sqrt{5}}{5}}$$<br><br>
    • <strong>Step 3: Find $\\cos\\left(\\frac{x}{2}\\right)$ using $\\cos\\left(\\frac{x}{2}\\right) = \\sqrt{\\frac{1 + \\cos x}{2}}$:</strong><br>
    $$\\cos\\frac{x}{2} = \\sqrt{\\frac{1 + (-3/5)}{2}} = \\sqrt{\\frac{2/5}{2}} = \\sqrt{\\frac{1}{5}} = \\mathbf{\\frac{1}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}}$$<br><br>
    • <strong>Step 4: Find $\\tan\\left(\\frac{x}{2}\\right)$:</strong><br>
    $$\\tan\\frac{x}{2} = \\frac{\\sin(x/2)}{\\cos(x/2)} = \\frac{2/\\sqrt{5}}{1/\\sqrt{5}} = \\mathbf{2}$$
  </div>`,
  '4 Marks',
  [['Finding cos x = -3/5 and establishing x/2 in Quadrant I', '1.5 Marks'], ['Calculating sin(x/2) = 2/√5 and cos(x/2) = 1/√5', '1.5 Marks'], ['Calculating tan(x/2) = 2', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch3-q51', 'Question 9', 'Miscellaneous Exercise',
  'Find $\\sin \\dfrac{x}{2}, \\; \\cos \\dfrac{x}{2}$ and $\\tan \\dfrac{x}{2}$: $\\cos x = -\\dfrac{1}{3}$, $x$ in quadrant III.',
  `<p><strong>Quadrant Analysis:</strong> Since $x$ is in Quadrant III, $\\pi < x < \\dfrac{3\\pi}{2}$. Dividing by 2: $\\dfrac{\\pi}{2} < \\dfrac{x}{2} < \\dfrac{3\\pi}{4}$. Thus, $\\dfrac{x}{2}$ lies in <strong>Quadrant II</strong>. In Q II: $\\sin\\left(\\frac{x}{2}\\right) > 0$, while $\\cos\\left(\\frac{x}{2}\\right) < 0$ and $\\tan\\left(\\frac{x}{2}\\right) < 0$.</p>
  <div class="step">
    • Given $\\cos x = -\\dfrac{1}{3}$.<br><br>
    • <strong>1. Find $\\sin\\left(\\frac{x}{2}\\right)$:</strong><br>
    $$\\sin\\frac{x}{2} = +\\sqrt{\\frac{1 - \\cos x}{2}} = \\sqrt{\\frac{1 - (-1/3)}{2}} = \\sqrt{\\frac{4/3}{2}} = \\sqrt{\\frac{2}{3}} = \\mathbf{\\frac{\\sqrt{6}}{3}}$$<br><br>
    • <strong>2. Find $\\cos\\left(\\frac{x}{2}\\right)$:</strong><br>
    $$\\cos\\frac{x}{2} = -\\sqrt{\\frac{1 + \\cos x}{2}} = -\\sqrt{\\frac{1 + (-1/3)}{2}} = -\\sqrt{\\frac{2/3}{2}} = -\\sqrt{\\frac{1}{3}} = \\mathbf{-\\frac{\\sqrt{3}}{3}}$$<br><br>
    • <strong>3. Find $\\tan\\left(\\frac{x}{2}\\right)$:</strong><br>
    $$\\tan\\frac{x}{2} = \\frac{\\sin(x/2)}{\\cos(x/2)} = \\frac{\\sqrt{2/3}}{-1/\\sqrt{3}} = \\mathbf{-\\sqrt{2}}$$
  </div>`,
  '4 Marks',
  [['Identifying x/2 lies in Quadrant II with appropriate signs', '1 Mark'], ['Calculating sin(x/2) = √6/3', '1 Mark'], ['Calculating cos(x/2) = -√3/3', '1 Mark'], ['Calculating tan(x/2) = -√2', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch3-q52', 'Question 10', 'Miscellaneous Exercise',
  'Find $\\sin \\dfrac{x}{2}, \\; \\cos \\dfrac{x}{2}$ and $\\tan \\dfrac{x}{2}$: $\\sin x = \\dfrac{1}{4}$, $x$ in quadrant II.',
  `<p><strong>Quadrant Analysis:</strong> If $x$ is in Quadrant II, $\\dfrac{\\pi}{2} < x < \\pi \\implies \\dfrac{\\pi}{4} < \\dfrac{x}{2} < \\dfrac{\\pi}{2}$ (Quadrant I). Therefore, all half-angle values are strictly <strong>positive</strong>.</p>
  <div class="step">
    • <strong>Step 1: Find $\\cos x$:</strong><br>
    Since $x$ is in Quadrant II, $\\cos x < 0$:<br>
    $$\\cos x = -\\sqrt{1 - \\sin^2 x} = -\\sqrt{1 - \\left(\\frac{1}{4}\\right)^2} = -\\sqrt{1 - \\frac{1}{16}} = -\\frac{\\sqrt{15}}{4}$$<br><br>
    • <strong>Step 2: Find $\\sin\\left(\\frac{x}{2}\\right)$:</strong><br>
    $$\\sin\\frac{x}{2} = \\sqrt{\\frac{1 - \\cos x}{2}} = \\sqrt{\\frac{1 - (-\\sqrt{15}/4)}{2}} = \\sqrt{\\frac{4 + \\sqrt{15}}{8}} = \\mathbf{\\frac{\\sqrt{8 + 2\\sqrt{15}}}{4}}$$<br><br>
    • <strong>Step 3: Find $\\cos\\left(\\frac{x}{2}\\right)$:</strong><br>
    $$\\cos\\frac{x}{2} = \\sqrt{\\frac{1 + \\cos x}{2}} = \\sqrt{\\frac{1 + (-\\sqrt{15}/4)}{2}} = \\sqrt{\\frac{4 - \\sqrt{15}}{8}} = \\mathbf{\\frac{\\sqrt{8 - 2\\sqrt{15}}}{4}}$$<br><br>
    • <strong>Step 4: Find $\\tan\\left(\\frac{x}{2}\\right)$:</strong><br>
    $$\\tan\\frac{x}{2} = \\frac{\\sin(x/2)}{\\cos(x/2)} = \\sqrt{\\frac{4 + \\sqrt{15}}{4 - \\sqrt{15}}} = \\sqrt{\\frac{(4 + \\sqrt{15})^2}{16 - 15}} = \\mathbf{4 + \\sqrt{15}}$$
  </div>`,
  '4 Marks',
  [['Finding cos x = -√15/4 with quadrant sign', '1.5 Marks'], ['Calculating sin(x/2) and cos(x/2)', '1.5 Marks'], ['Simplifying tan(x/2) to 4 + √15', '1 Mark']]
));

// ============================================================================
// ASSEMBLE FULL CHAPTER 3 HTML
// ============================================================================

const chapterHtml = `
<section class="chapter-section" id="ch3">
  <div class="chapter-header">
    <div class="ch-badge">3</div>
    <div class="chapter-header-info">
      <div class="ch-category">Mathematics • Class 11 CBSE (NCERT Rationalised 2026–27)</div>
      <h2>Chapter 3: Trigonometric Functions</h2>
      <p>Angles, Degree & Radian Measures, Trigonometric Functions, ASTC Quadrant Rules, Sum & Difference of Angles, Multiple & Sub-multiple Angle Identities — Complete 52 Questions Verbatim with Official CBSE Marking Scheme</p>
    </div>
  </div>

  <!-- SVG Visual Diagram for ASTC Quadrants -->
  <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:12px; padding:18px; margin-bottom:24px; text-align:center;">
    <div style="font-size:0.88rem; font-weight:800; color:#1e40af; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.04em;">ASTC Quadrant Rule & Circular Trigonometry Visualization</div>
    <svg width="340" height="220" viewBox="0 0 340 220" style="max-width:100%; height:auto;">
      <!-- Grid axes -->
      <line x1="20" y1="110" x2="320" y2="110" stroke="#94a3b8" stroke-width="2"/>
      <line x1="170" y1="15" x2="170" y2="205" stroke="#94a3b8" stroke-width="2"/>
      <!-- Axis Labels -->
      <text x="325" y="114" font-size="12" fill="#475569" font-weight="bold">X</text>
      <text x="10" y="114" font-size="12" fill="#475569" font-weight="bold">X'</text>
      <text x="170" y="12" font-size="12" fill="#475569" text-anchor="middle" font-weight="bold">Y</text>
      <text x="170" y="218" font-size="12" fill="#475569" text-anchor="middle" font-weight="bold">Y'</text>
      <!-- Unit Circle -->
      <circle cx="170" cy="110" r="75" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,3"/>
      <!-- Quadrant II -->
      <rect x="35" y="25" width="125" height="75" rx="6" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
      <text x="97" y="50" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Quadrant II (S)</text>
      <text x="97" y="70" font-size="11" fill="#1d4ed8" text-anchor="middle">sin x &gt; 0, csc x &gt; 0</text>
      <text x="97" y="85" font-size="10" fill="#64748b" text-anchor="middle">(Others Negative)</text>
      <!-- Quadrant I -->
      <rect x="180" y="25" width="125" height="75" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
      <text x="242" y="50" font-size="13" font-weight="bold" fill="#166534" text-anchor="middle">Quadrant I (A)</text>
      <text x="242" y="70" font-size="11" fill="#15803d" text-anchor="middle">ALL Trig Functions &gt; 0</text>
      <text x="242" y="85" font-size="10" fill="#166534" text-anchor="middle">(0 &lt; x &lt; π/2)</text>
      <!-- Quadrant III -->
      <rect x="35" y="120" width="125" height="75" rx="6" fill="#fefce8" stroke="#fde047" stroke-width="1"/>
      <text x="97" y="145" font-size="13" font-weight="bold" fill="#854d0e" text-anchor="middle">Quadrant III (T)</text>
      <text x="97" y="165" font-size="11" fill="#a16207" text-anchor="middle">tan x &gt; 0, cot x &gt; 0</text>
      <text x="97" y="180" font-size="10" fill="#64748b" text-anchor="middle">(Others Negative)</text>
      <!-- Quadrant IV -->
      <rect x="180" y="120" width="125" height="75" rx="6" fill="#fef2f2" stroke="#fca5a5" stroke-width="1"/>
      <text x="242" y="145" font-size="13" font-weight="bold" fill="#991b1b" text-anchor="middle">Quadrant IV (C)</text>
      <text x="242" y="165" font-size="11" fill="#b91c1c" text-anchor="middle">cos x &gt; 0, sec x &gt; 0</text>
      <text x="242" y="180" font-size="10" fill="#64748b" text-anchor="middle">(Others Negative)</text>
    </svg>
  </div>

  <div class="ex-div">NCERT Exercise 3.1: Angles, Radian &amp; Degree Measures, Arc Length Formula (θ = l / r)</div>
${ex3_1.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Exercise 3.2: Trigonometric Functions, ASTC Quadrants &amp; Periodicity</div>
${ex3_2.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Exercise 3.3: Sum &amp; Difference of Angles, Transformation &amp; Multiple Angle Identities</div>
${ex3_3.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Miscellaneous Exercise on Chapter 3: Advanced Identities &amp; Half-Angle Calculations</div>
${misc.join('\n')}

  <div class="chapter-nav-btns" style="margin-top:40px; display:flex; justify-content:space-between; align-items:center;">
    <button class="ch-nav-btn prev" onclick="showChapter(2)" style="padding:10px 24px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer;">← Previous: Chapter 2 (Relations &amp; Functions)</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})" style="padding:10px 20px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer;">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(4)" style="padding:10px 24px; border-radius:8px; border:none; background:#ff6b00; color:white; font-weight:700; cursor:pointer;">Next: Chapter 4 (Complex Numbers) →</button>
  </div>
</section>
`;

// Write ch3.html
const ch3Path = path.join(outDir, 'ch3.html');
fs.writeFileSync(ch3Path, chapterHtml.trim(), 'utf8');
console.log(`Successfully generated: ${ch3Path} (${chapterHtml.length} bytes)`);

// Update chapters-data.js so chapters load instantly offline/online
const dataJsPath = path.join(outDir, 'chapters-data.js');
let existingData = '';
if (fs.existsSync(dataJsPath)) {
  existingData = fs.readFileSync(dataJsPath, 'utf8');
}

// Append or update window.CHAPTER_DATA[3]
if (!existingData.includes('window.CHAPTER_DATA[3] =')) {
  const ch3Entry = `\nwindow.CHAPTER_DATA[3] = ${JSON.stringify(chapterHtml.trim())};\n`;
  fs.appendFileSync(dataJsPath, ch3Entry, 'utf8');
  console.log(`Appended Chapter 3 to preloaded cache: ${dataJsPath}`);
} else {
  // Replace window.CHAPTER_DATA[3] block
  const regex = /window\.CHAPTER_DATA\[3\]\s*=\s*[\s\S]*?;\n/g;
  const updated = existingData.replace(regex, `window.CHAPTER_DATA[3] = ${JSON.stringify(chapterHtml.trim())};\n`);
  fs.writeFileSync(dataJsPath, updated, 'utf8');
  console.log(`Updated Chapter 3 in preloaded cache: ${dataJsPath}`);
}
