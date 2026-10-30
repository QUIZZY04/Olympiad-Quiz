// scripts/builders/gen-c11m-ch9.js
// Complete, verbatim NCERT generator for Class 11 Mathematics Chapter 9: Straight Lines (All 71 Questions)
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
const ex9_1 = [];
const ex9_2 = [];
const ex9_3 = [];
const misc = [];

// ============================================================================
// EXERCISE 9.1: Slope, Angles, Collinearity (Questions 1 to 14)
// ============================================================================

ex9_1.push(createQCard(
  'c11m-ch9-q1', 'Question 1', 'Exercise 9.1',
  'Draw a quadrilateral in the Cartesian plane, whose vertices are $(-4, 5), (0, 7), (5, -5)$ and $(-4, -2)$. Also, find its area.',
  `<div class="step">
    • Let the vertices of the quadrilateral $ABCD$ be $A(-4, 5), B(0, 7), C(5, -5), D(-4, -2)$.<br>
    • Dividing the quadrilateral into two triangles $\\triangle ABC$ and $\\triangle ACD$ along diagonal $AC$:<br>
    • <b>Area of $\\triangle ABC$:</b><br>
      $$\\text{Area}(\\triangle ABC) = \\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$<br>
      $$= \\frac{1}{2}|-4(7 - (-5)) + 0((-5) - 5) + 5(5 - 7)| = \\frac{1}{2}|-4(12) + 0 + 5(-2)| = \\frac{1}{2}|-48 - 10| = \\frac{58}{2} = 29$$<br>
    • <b>Area of $\\triangle ACD$:</b><br>
      $$\\text{Area}(\\triangle ACD) = \\frac{1}{2}|-4((-5) - (-2)) + 5((-2) - 5) + (-4)(5 - (-5))|$$<br>
      $$= \\frac{1}{2}|-4(-3) + 5(-7) - 4(10)| = \\frac{1}{2}|12 - 35 - 40| = \\frac{1}{2}|-63| = \\frac{63}{2} = 31.5$$<br>
    • <b>Total Area of Quadrilateral $ABCD$:</b><br>
      $$\\text{Area} = 29 + 31.5 = \\mathbf{60.5\\text{ sq. units}}$$
  </div>`,
  '3 Marks',
  [['Dividing quadrilateral into two triangles along diagonal', '1 Mark'], ['Computing Area of $\\triangle ABC = 29$', '1 Mark'], ['Computing Area of $\\triangle ACD = 31.5$ and total = 60.5 sq. units', '1 Mark']]
));

ex9_1.push(createQCard(
  'c11m-ch9-q2', 'Question 2', 'Exercise 9.1',
  'The base of an equilateral triangle with side $2a$ lies along the $y$-axis such that the mid-point of the base is at the origin. Find vertices of the triangle.',
  `<div class="step">
    • The base of length $2a$ lies along the $y$-axis with mid-point at origin $(0, 0)$.<br>
    • Therefore, the base endpoints on $y$-axis are $B(0, a)$ and $C(0, -a)$.<br>
    • Since the triangle is equilateral with side $2a$, the third vertex $A$ lies on the perpendicular bisector of $BC$, which is the $x$-axis.<br>
    • Let $A = (x, 0)$. Using distance formula $AB = 2a$:<br>
      $$(x - 0)^2 + (0 - a)^2 = (2a)^2 \\implies x^2 + a^2 = 4a^2 \\implies x^2 = 3a^2 \\implies x = \\pm \\sqrt{3}a$$<br>
    • <b>Conclusion:</b> The vertices of the equilateral triangle are:<br>
      $$\\mathbf{(\\sqrt{3}a, 0), (0, a), (0, -a)} \\quad \\text{or} \\quad \\mathbf{(-\\sqrt{3}a, 0), (0, a), (0, -a)}$$
  </div>`,
  '3 Marks',
  [['Identifying vertices on $y$-axis as $(0, a)$ and $(0, -a)$', '1 Mark'], ['Finding coordinates of third vertex $x = \\pm \\sqrt{3}a$', '1 Mark'], ['Writing both sets of vertices', '1 Mark']]
));

ex9_1.push(createQCard(
  'c11m-ch9-q3', 'Question 3', 'Exercise 9.1',
  'Find the distance between $P(x_1, y_1)$ and $Q(x_2, y_2)$ when:<br>(i) $PQ$ is parallel to the $y$-axis,<br>(ii) $PQ$ is parallel to the $x$-axis.',
  `<div class="step">
    • Distance formula: $PQ = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.<br><br>
    • <b>(i) When $PQ$ is parallel to the $y$-axis:</b><br>
      The $x$-coordinates are equal, so $x_1 = x_2$.<br>
      $$PQ = \\sqrt{0 + (y_2 - y_1)^2} = \\mathbf{|y_2 - y_1|}$$<br>
    • <b>(ii) When $PQ$ is parallel to the $x$-axis:</b><br>
      The $y$-coordinates are equal, so $y_1 = y_2$.<br>
      $$PQ = \\sqrt{(x_2 - x_1)^2 + 0} = \\mathbf{|x_2 - x_1|}$$
  </div>`,
  '2 Marks',
  [['Part (i): $x_1 = x_2 \\implies PQ = |y_2 - y_1|$', '1 Mark'], ['Part (ii): $y_1 = y_2 \\implies PQ = |x_2 - x_1|$', '1 Mark']]
));

ex9_1.push(createQCard(
  'c11m-ch9-q4', 'Question 4', 'Exercise 9.1',
  'Find a point on the $x$-axis, which is equidistant from the points $(7, 6)$ and $(3, 4)$.',
  `<div class="step">
    • Let the required point on the $x$-axis be $P(x, 0)$.<br>
    • Given $A(7, 6)$ and $B(3, 4)$ are equidistant from $P$, so $PA = PB \\implies PA^2 = PB^2$.<br>
    • Applying distance formula:<br>
      $$(x - 7)^2 + (0 - 6)^2 = (x - 3)^2 + (0 - 4)^2$$<br>
      $$x^2 - 14x + 49 + 36 = x^2 - 6x + 9 + 16$$<br>
      $$-14x + 85 = -6x + 25$$<br>
      $$85 - 25 = 14x - 6x \\implies 60 = 8x \\implies x = \\frac{60}{8} = \\frac{15}{2}$$<br>
    • <b>Conclusion:</b> The required point on the $x$-axis is $\\mathbf{\\left(\\frac{15}{2}, 0\\right)}$.
  </div>`,
  '2 Marks',
  [['Setting up $(x - 7)^2 + 36 = (x - 3)^2 + 16$', '1 Mark'], ['Solving for $x = 15/2$ and stating $(15/2, 0)$', '1 Mark']]
));

ex9_1.push(createQCard(
  'c11m-ch9-q5', 'Question 5', 'Exercise 9.1',
  'Find the slope of a line, which passes through the origin, and the mid-point of the line segment joining the points $P(0, -4)$ and $B(8, 0)$.',
  `<div class="step">
    • Finding mid-point $M$ of segment $PB$ joining $P(0, -4)$ and $B(8, 0)$:<br>
      $$M = \\left(\\frac{0 + 8}{2}, \\frac{-4 + 0}{2}\\right) = (4, -2)$$<br>
    • The line passes through the origin $O(0, 0)$ and $M(4, -2)$.<br>
    • Slope $m$ is given by:<br>
      $$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-2 - 0}{4 - 0} = -\\frac{2}{4} = \\mathbf{-\\frac{1}{2}}$$
  </div>`,
  '2 Marks',
  [['Finding mid-point $M(4, -2)$', '1 Mark'], ['Computing slope $m = -2/4 = -1/2$', '1 Mark']]
));

ex9_1.push(createQCard(
  'c11m-ch9-q6', 'Question 6', 'Exercise 9.1',
  'Without using the Pythagoras theorem, show that the points $(4, 4), (3, 5)$ and $(-1, -1)$ are the vertices of a right angled triangle.',
  `<div class="step">
    • Let the points be $A(4, 4), B(3, 5), C(-1, -1)$.<br>
    • Finding slopes of the sides using $m = \\frac{y_2 - y_1}{x_2 - x_1}$:<br>
      - Slope of $AB$ ($m_1$): $m_1 = \\frac{5 - 4}{3 - 4} = \\frac{1}{-1} = -1$<br>
      - Slope of $BC$ ($m_2$): $m_2 = \\frac{-1 - 5}{-1 - 3} = \\frac{-6}{-4} = \\frac{3}{2}$<br>
      - Slope of $AC$ ($m_3$): $m_3 = \\frac{-1 - 4}{-1 - 4} = \\frac{-5}{-5} = 1$<br>
    • Checking perpendicularity ($m_1 \\times m_3$):<br>
      $$m_1 \\times m_3 = (-1) \\times (1) = -1$$<br>
    • Since $m_1 \\times m_3 = -1$, the sides $AB$ and $AC$ are perpendicular ($AB \\perp AC$).<br>
    • <b>Conclusion:</b> $\\triangle ABC$ is a right-angled triangle at vertex $A$. (Hence proved).
  </div>`,
  '2 Marks',
  [['Calculating slopes of lines $AB, BC, AC$', '1 Mark'], ['Showing $m_1 \\times m_3 = -1$ proving right angle at $A$', '1 Mark']]
));

ex9_1.push(createQCard(
  'c11m-ch9-q7', 'Question 7', 'Exercise 9.1',
  'Find the slope of the line, which makes an angle of $30^\\circ$ with the positive direction of $y$-axis measured anticlockwise.',
  `<div class="step">
    • The positive direction of $y$-axis makes an angle of $90^\\circ$ with the positive direction of $x$-axis.<br>
    • The line makes an angle of $30^\\circ$ with positive $y$-axis measured anticlockwise.<br>
    • Therefore, the angle $\\theta$ made by the line with positive direction of $x$-axis is:<br>
      $$\\theta = 90^\\circ + 30^\\circ = 120^\\circ$$<br>
    • The slope $m$ of the line is:<br>
      $$m = \\tan 120^\\circ = \\tan(180^\\circ - 60^\\circ) = -\\tan 60^\\circ = \\mathbf{-\\sqrt{3}}$$
  </div>`,
  '2 Marks',
  [['Finding inclination with $x$-axis $\\theta = 90^\\circ + 30^\\circ = 120^\\circ$', '1 Mark'], ['Evaluating slope $m = \\tan 120^\\circ = -\\sqrt{3}$', '1 Mark']]
));

ex9_1.push(createQCard(
  'c11m-ch9-q8', 'Question 8', 'Exercise 9.1',
  'Find the value of $x$ for which the points $(x, -1), (2, 1)$ and $(4, 5)$ are collinear.',
  `<div class="step">
    • Let the points be $A(x, -1), B(2, 1), C(4, 5)$.<br>
    • For $A, B, C$ to be collinear, $\\text{Slope of } AB = \\text{Slope of } BC$.<br>
    • $\\text{Slope of } AB = \\frac{1 - (-1)}{2 - x} = \\frac{2}{2 - x}$.<br>
    • $\\text{Slope of } BC = \\frac{5 - 1}{4 - 2} = \\frac{4}{2} = 2$.<br>
    • Equating the slopes:<br>
      $$\\frac{2}{2 - x} = 2 \\implies 2 - x = 1 \\implies \\mathbf{x = 1}$$
  </div>`,
  '2 Marks',
  [['Equating slope of $AB$ and slope of $BC$', '1 Mark'], ['Solving $\\frac{2}{2 - x} = 2 \\implies x = 1$', '1 Mark']]
));

ex9_1.push(createQCard(
  'c11m-ch9-q9', 'Question 9', 'Exercise 9.1',
  'Without using distance formula, show that points $(-2, -1), (4, 0), (3, 3)$ and $(-3, 2)$ are the vertices of a parallelogram.',
  `<div class="step">
    • Let $A(-2, -1), B(4, 0), C(3, 3), D(-3, 2)$.<br>
    • A quadrilateral is a parallelogram if opposite sides are parallel (equal slopes):<br>
      - $\\text{Slope of } AB = \\frac{0 - (-1)}{4 - (-2)} = \\frac{1}{6}$<br>
      - $\\text{Slope of } CD = \\frac{2 - 3}{-3 - 3} = \\frac{-1}{-6} = \\frac{1}{6}$<br>
      Since $\\text{Slope of } AB = \\text{Slope of } CD$, $AB \\parallel CD$.<br><br>
      - $\\text{Slope of } BC = \\frac{3 - 0}{3 - 4} = \\frac{3}{-1} = -3$<br>
      - $\\text{Slope of } DA = \\frac{-1 - 2}{-2 - (-3)} = \\frac{-3}{1} = -3$<br>
      Since $\\text{Slope of } BC = \\text{Slope of } DA$, $BC \\parallel DA$.<br><br>
    • Since both pairs of opposite sides are parallel, $ABCD$ is a parallelogram. (Hence proved).
  </div>`,
  '2 Marks',
  [['Finding slopes of all 4 sides', '1 Mark'], ['Showing $AB \\parallel CD$ and $BC \\parallel DA$', '1 Mark']]
));

ex9_1.push(createQCard(
  'c11m-ch9-q10', 'Question 10', 'Exercise 9.1',
  'Find the angle between the $x$-axis and the line joining the points $(3, -1)$ and $(4, -2)$.',
  `<div class="step">
    • Let $A(3, -1)$ and $B(4, -2)$.<br>
    • Slope $m$ of the line joining $A$ and $B$:<br>
      $$m = \\frac{-2 - (-1)}{4 - 3} = \\frac{-1}{1} = -1$$<br>
    • Since $m = \\tan\\theta = -1$ with $\\theta \\in [0, 180^\\circ)$:<br>
      $$\\tan\\theta = -\\tan 45^\\circ = \\tan(180^\\circ - 45^\\circ) = \\tan 135^\\circ$$<br>
      $$\\theta = \\mathbf{135^\\circ}$$
  </div>`,
  '2 Marks',
  [['Calculating slope $m = -1$', '1 Mark'], ['Finding angle $\\theta = 135^\\circ$', '1 Mark']]
));

ex9_1.push(createQCard(
  'c11m-ch9-q11', 'Question 11', 'Exercise 9.1',
  'The slope of a line is double of the slope of another line. If tangent of the angle between them is $1/3$, find the slopes of the lines.',
  `<div class="step">
    • Let the slopes of the two lines be $m_1 = m$ and $m_2 = 2m$.<br>
    • Angle between two lines with slopes $m_1, m_2$:<br>
      $$\\tan\\theta = \\left|\\frac{m_2 - m_1}{1 + m_1 m_2}\\right| = \\frac{1}{3}$$<br>
      $$\\left|\\frac{2m - m}{1 + 2m^2}\\right| = \\frac{1}{3} \\implies \\left|\\frac{m}{1 + 2m^2}\\right| = \\frac{1}{3}$$<br>
    • Case 1: $\\frac{m}{1 + 2m^2} = \\frac{1}{3}$:<br>
      $$2m^2 - 3m + 1 = 0 \\implies (2m - 1)(m - 1) = 0 \\implies m = 1 \\text{ or } m = \\frac{1}{2}$$<br>
      - If $m = 1$: slopes are $\\mathbf{1\\text{ and }2}$.<br>
      - If $m = 1/2$: slopes are $\\mathbf{1/2\\text{ and }1}$.<br>
    • Case 2: $\\frac{m}{1 + 2m^2} = -\\frac{1}{3}$:<br>
      $$2m^2 + 3m + 1 = 0 \\implies (2m + 1)(m + 1) = 0 \\implies m = -1 \\text{ or } m = -\\frac{1}{2}$$<br>
      - If $m = -1$: slopes are $\\mathbf{-1\\text{ and }-2}$.<br>
      - If $m = -1/2$: slopes are $\\mathbf{-1/2\\text{ and }-1}$.
  </div>`,
  '3 Marks',
  [['Setting up formula $\\tan\\theta = |\\frac{m}{1 + 2m^2}| = 1/3$', '1 Mark'], ['Solving Case 1 for $m = 1, 1/2$', '1 Mark'], ['Solving Case 2 for $m = -1, -1/2$', '1 Mark']]
));

ex9_1.push(createQCard(
  'c11m-ch9-q12', 'Question 12', 'Exercise 9.1',
  'A line passes through $(x_1, y_1)$ and $(h, k)$. If slope of the line is $m$, show that $k - y_1 = m(h - x_1)$.',
  `<div class="step">
    • The slope of a line passing through two points $(x_1, y_1)$ and $(h, k)$ is given by:<br>
      $$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{k - y_1}{h - x_1}$$<br>
    • Cross multiplying both sides by $(h - x_1)$:<br>
      $$k - y_1 = m(h - x_1)$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '1 Mark',
  [['Applying two-point slope definition and cross-multiplying', '1 Mark']]
));

ex9_1.push(createQCard(
  'c11m-ch9-q13', 'Question 13', 'Exercise 9.1',
  'If three points $(h, 0), (a, b)$ and $(0, k)$ lie on a line, show that $\\dfrac{a}{h} + \\dfrac{b}{k} = 1$.',
  `<div class="step">
    • Let $A(h, 0), B(a, b), C(0, k)$ be collinear.<br>
    • $\\text{Slope of } AB = \\text{Slope of } BC$:<br>
      $$\\frac{b - 0}{a - h} = \\frac{k - b}{0 - a} \\implies \\frac{b}{a - h} = \\frac{k - b}{-a}$$<br>
      $$-ab = (a - h)(k - b) = ak - ab - hk + bh$$<br>
      $$0 = ak - hk + bh \\implies ak + bh = hk$$<br>
    • Dividing throughout by $hk$ ($h, k \\ne 0$):<br>
      $$\\frac{ak}{hk} + \\frac{bh}{hk} = \\frac{hk}{hk} \\implies \\mathbf{\\frac{a}{h} + \\frac{b}{k} = 1}$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '3 Marks',
  [['Equating slopes of $AB$ and $BC$', '1 Mark'], ['Expanding to obtain $ak + bh = hk$', '1 Mark'], ['Dividing by $hk$ to get $\\frac{a}{h} + \\frac{b}{k} = 1$', '1 Mark']]
));

ex9_1.push(createQCard(
  'c11m-ch9-q14', 'Question 14', 'Exercise 9.1',
  'Consider the points $A(1985, 92)$ and $B(1995, 97)$ on a population-year graph. Find the slope of the line $AB$ and using it, find what will be the population in the year 2010?',
  `<div class="step">
    • Given points on the line: $A(1985, 92)$ and $B(1995, 97)$.<br>
    • <b>Slope of line $AB$:</b><br>
      $$m = \\frac{97 - 92}{1995 - 1985} = \\frac{5}{10} = \\mathbf{\\frac{1}{2}}$$
    • Let the population in year $2010$ be $y$ crores, so point $C(2010, y)$ lies on the line.<br>
    • Since $A, B, C$ are collinear:<br>
      $$\\text{Slope of } BC = m = \\frac{1}{2} \\implies \\frac{y - 97}{2010 - 1995} = \\frac{1}{2}$$<br>
      $$\\frac{y - 97}{15} = \\frac{1}{2} \\implies y - 97 = 7.5 \\implies y = 104.5$$<br>
    • <b>Conclusion:</b> Slope is $\\mathbf{\\frac{1}{2}}$, and estimated population in 2010 is $\\mathbf{104.5\\text{ crores}}$.
  </div>`,
  '3 Marks',
  [['Calculating slope $m = 5/10 = 1/2$', '1 Mark'], ['Setting up slope with point $(2010, y)$', '1 Mark'], ['Solving for $y = 104.5$ crores', '1 Mark']]
));

// ============================================================================
// EXERCISE 9.2: Equations of Lines (Questions 15 to 34)
// ============================================================================

ex9_2.push(createQCard(
  'c11m-ch9-q15', 'Question 1', 'Exercise 9.2',
  'Find the equations of the lines for the coordinate axes ($x$-axis and $y$-axis).',
  `<div class="step">
    • For any point on the $x$-axis, the $y$-coordinate is always $0$. Therefore, equation of the $x$-axis is $\\mathbf{y = 0}$.<br>
    • For any point on the $y$-axis, the $x$-coordinate is always $0$. Therefore, equation of the $y$-axis is $\\mathbf{x = 0}$.
  </div>`,
  '1 Mark',
  [['Equation of $x$-axis: $y = 0$; Equation of $y$-axis: $x = 0$', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q16', 'Question 2', 'Exercise 9.2',
  'Find the equation of the line passing through the point $(-4, 3)$ with slope $\\dfrac{1}{2}$.',
  `<div class="step">
    • Using point-slope form: $y - y_0 = m(x - x_0)$ with $(x_0, y_0) = (-4, 3)$ and $m = 1/2$:<br>
      $$y - 3 = \\frac{1}{2}(x - (-4))$$<br>
      $$2(y - 3) = x + 4 \\implies 2y - 6 = x + 4$$<br>
      $$\\mathbf{x - 2y + 10 = 0}$$
  </div>`,
  '2 Marks',
  [['Applying point-slope form', '1 Mark'], ['Simplifying to $x - 2y + 10 = 0$', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q17', 'Question 3', 'Exercise 9.2',
  'Find the equation of the line passing through $(0, 0)$ with slope $m$.',
  `<div class="step">
    • Using point-slope form with point $(0, 0)$ and slope $m$:<br>
      $$y - 0 = m(x - 0) \\implies \\mathbf{y = mx} \\quad (\\text{or } mx - y = 0)$$
  </div>`,
  '1 Mark',
  [['Stating equation $y = mx$', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q18', 'Question 4', 'Exercise 9.2',
  'Find the equation of the line passing through $(2, 2\\sqrt{3})$ and inclined with the $x$-axis at an angle of $75^\\circ$.',
  `<div class="step">
    • Given inclination $\\theta = 75^\\circ$.<br>
    • Slope $m = \\tan 75^\\circ = \\tan(45^\\circ + 30^\\circ) = \\frac{\\tan 45^\\circ + \\tan 30^\\circ}{1 - \\tan 45^\\circ \\tan 30^\\circ} = \\frac{1 + 1/\\sqrt{3}}{1 - 1/\\sqrt{3}} = \\frac{\\sqrt{3} + 1}{\\sqrt{3} - 1} = 2 + \\sqrt{3}$.<br>
    • Using point-slope form with $(x_0, y_0) = (2, 2\\sqrt{3})$:<br>
      $$y - 2\\sqrt{3} = (2 + \\sqrt{3})(x - 2)$$<br>
      $$y - 2\\sqrt{3} = (2 + \\sqrt{3})x - 4 - 2\\sqrt{3}$$<br>
      $$(2 + \\sqrt{3})x - y - 4 = 0$$<br>
    • <b>Conclusion:</b> $\\mathbf{(\\sqrt{3} + 2)x - y - 4 = 0}$.
  </div>`,
  '3 Marks',
  [['Finding $m = \\tan 75^\\circ = 2 + \\sqrt{3}$', '1 Mark'], ['Setting up equation $y - 2\\sqrt{3} = (2 + \\sqrt{3})(x - 2)$', '1 Mark'], ['Simplifying to $(\\sqrt{3} + 2)x - y - 4 = 0$', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q19', 'Question 5', 'Exercise 9.2',
  'Find the equation of the line intersecting the $x$-axis at a distance of 3 units to the left of origin with slope $-2$.',
  `<div class="step">
    • Intersecting $x$-axis at 3 units to the left of origin means the point is $(-3, 0)$ (i.e. $d = -3$).<br>
    • Given slope $m = -2$.<br>
    • Using slope-intercept form $y = m(x - d)$:<br>
      $$y = -2(x - (-3)) = -2(x + 3) = -2x - 6$$<br>
      $$\\mathbf{2x + y + 6 = 0}$$
  </div>`,
  '2 Marks',
  [['Identifying point $(-3, 0)$ and slope $m = -2$', '1 Mark'], ['Simplifying to $2x + y + 6 = 0$', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q20', 'Question 6', 'Exercise 9.2',
  'Find the equation of the line intersecting the $y$-axis at a distance of 2 units above the origin and making an angle of $30^\\circ$ with positive direction of the $x$-axis.',
  `<div class="step">
    • $y$-intercept $c = 2$.<br>
    • Inclination $\\theta = 30^\\circ \\implies$ Slope $m = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$.<br>
    • Using slope-intercept form $y = mx + c$:<br>
      $$y = \\frac{1}{\\sqrt{3}}x + 2 \\implies \\sqrt{3}y = x + 2\\sqrt{3}$$<br>
      $$\\mathbf{x - \\sqrt{3}y + 2\\sqrt{3} = 0}$$
  </div>`,
  '2 Marks',
  [['Finding $m = 1/\\sqrt{3}$ and $c = 2$', '1 Mark'], ['Writing equation $x - \\sqrt{3}y + 2\\sqrt{3} = 0$', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q21', 'Question 7', 'Exercise 9.2',
  'Find the equation of the line passing through the points $(-1, 1)$ and $(2, -4)$.',
  `<div class="step">
    • Using two-point form: $y - y_1 = \\frac{y_2 - y_1}{x_2 - x_1}(x - x_1)$ with $(-1, 1)$ and $(2, -4)$:<br>
      $$y - 1 = \\frac{-4 - 1}{2 - (-1)}(x - (-1)) = \\frac{-5}{3}(x + 1)$$<br>
      $$3(y - 1) = -5(x + 1) \\implies 3y - 3 = -5x - 5$$<br>
      $$\\mathbf{5x + 3y + 2 = 0}$$
  </div>`,
  '2 Marks',
  [['Applying two-point form formula', '1 Mark'], ['Simplifying to $5x + 3y + 2 = 0$', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q22', 'Question 8', 'Exercise 9.2',
  'Find the equation of the line whose perpendicular distance from the origin is 5 units and the angle which the normal makes with positive $x$-axis is $30^\\circ$.',
  `<div class="step">
    • Given normal length $p = 5$ and normal angle $\\omega = 30^\\circ$.<br>
    • Normal form of the equation of a line: $x\\cos\\omega + y\\sin\\omega = p$.<br>
      $$x\\cos 30^\\circ + y\\sin 30^\\circ = 5$$<br>
      $$x\\left(\\frac{\\sqrt{3}}{2}\\right) + y\\left(\\frac{1}{2}\\right) = 5$$<br>
      $$\\mathbf{\\sqrt{3}x + y = 10}$$
  </div>`,
  '2 Marks',
  [['Applying normal form $x\\cos\\omega + y\\sin\\omega = p$', '1 Mark'], ['Evaluating $\\cos 30^\\circ, \\sin 30^\\circ$ to get $\\sqrt{3}x + y = 10$', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q23', 'Question 9', 'Exercise 9.2',
  'The vertices of $\\triangle PQR$ are $P(2, 1), Q(-2, 3)$ and $R(4, 5)$. Find equation of the median through the vertex $R$.',
  `<div class="step">
    • The median through $R$ joins vertex $R(4, 5)$ to the mid-point $M$ of side $PQ$.<br>
    • Mid-point $M$ of $P(2, 1)$ and $Q(-2, 3)$:<br>
      $$M = \\left(\\frac{2 + (-2)}{2}, \\frac{1 + 3}{2}\\right) = (0, 2)$$<br>
    • Equation of line joining $R(4, 5)$ and $M(0, 2)$ using two-point form:<br>
      $$y - 2 = \\frac{5 - 2}{4 - 0}(x - 0) = \\frac{3}{4}x$$<br>
      $$4(y - 2) = 3x \\implies 4y - 8 = 3x \\implies \\mathbf{3x - 4y + 8 = 0}$$
  </div>`,
  '3 Marks',
  [['Finding mid-point $M(0, 2)$ of side $PQ$', '1 Mark'], ['Applying two-point form for $R(4, 5)$ and $M(0, 2)$', '1 Mark'], ['Simplifying to $3x - 4y + 8 = 0$', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q24', 'Question 10', 'Exercise 9.2',
  'Find the equation of the line passing through $(-3, 5)$ and perpendicular to the line through the points $(2, 5)$ and $(-3, 6)$.',
  `<div class="step">
    • Slope of the line through $(2, 5)$ and $(-3, 6)$:<br>
      $$m_1 = \\frac{6 - 5}{-3 - 2} = \\frac{1}{-5} = -\\frac{1}{5}$$<br>
    • Since the required line is perpendicular, its slope $m$ satisfies $m \\times m_1 = -1$:<br>
      $$m = -\\frac{1}{m_1} = -\\frac{1}{-1/5} = 5$$<br>
    • Using point-slope form passing through $(-3, 5)$ with slope $m = 5$:<br>
      $$y - 5 = 5(x - (-3)) = 5(x + 3)$$<br>
      $$y - 5 = 5x + 15 \\implies \\mathbf{5x - y + 20 = 0}$$
  </div>`,
  '2 Marks',
  [['Finding slope $m_1 = -1/5$ and perpendicular slope $m = 5$', '1 Mark'], ['Evaluating point-slope equation $5x - y + 20 = 0$', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q25', 'Question 11', 'Exercise 9.2',
  'A line perpendicular to the line segment joining the points $(1, 0)$ and $(2, 3)$ divides it in the ratio $1 : n$. Find the equation of the line.',
  `<div class="step">
    • By section formula, the point $P$ dividing segment joining $A(1, 0)$ and $B(2, 3)$ in ratio $1 : n$ is:<br>
      $$P = \\left(\\frac{1(2) + n(1)}{1 + n}, \\frac{1(3) + n(0)}{1 + n}\\right) = \\left(\\frac{n + 2}{n + 1}, \\frac{3}{n + 1}\\right)$$<br>
    • Slope of segment $AB$:<br>
      $$m_{AB} = \\frac{3 - 0}{2 - 1} = 3$$<br>
    • Slope of perpendicular line $m = -\\frac{1}{3}$.<br>
    • Equation of the line passing through $P$ with slope $-1/3$:<br>
      $$y - \\frac{3}{n + 1} = -\\frac{1}{3}\\left(x - \\frac{n + 2}{n + 1}\\right)$$<br>
      $$3\\left(y - \\frac{3}{n + 1}\\right) = -\\left(x - \\frac{n + 2}{n + 1}\\right)$$<br>
      $$3y - \\frac{9}{n + 1} = -x + \\frac{n + 2}{n + 1}$$<br>
      $$x + 3y = \\frac{n + 2 + 9}{n + 1} = \\frac{n + 11}{n + 1}$$<br>
      $$\\mathbf{(n + 1)x + 3(n + 1)y - (n + 11) = 0}$$
  </div>`,
  '3 Marks',
  [['Finding point of division $P(\\frac{n + 2}{n + 1}, \\frac{3}{n + 1})$', '1 Mark'], ['Finding perpendicular slope $m = -1/3$', '1 Mark'], ['Simplifying to $(n + 1)x + 3(n + 1)y - (n + 11) = 0$', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q26', 'Question 12', 'Exercise 9.2',
  'Find the equation of a line that cuts off equal intercepts on the coordinate axes and passes through the point $(2, 3)$.',
  `<div class="step">
    • Intercept form of a line: $\\frac{x}{a} + \\frac{y}{b} = 1$.<br>
    • Since intercepts are equal, $a = b$:<br>
      $$\\frac{x}{a} + \\frac{y}{a} = 1 \\implies x + y = a$$<br>
    • Since the line passes through $(2, 3)$:<br>
      $$2 + 3 = a \\implies a = 5$$<br>
    • <b>Conclusion:</b> The equation of the line is $\\mathbf{x + y = 5}$ (or $x + y - 5 = 0$).
  </div>`,
  '2 Marks',
  [['Using intercept form with $a = b$', '1 Mark'], ['Substituting $(2, 3)$ to find $a = 5$ and writing $x + y = 5$', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q27', 'Question 13', 'Exercise 9.2',
  'Find equation of the line passing through the point $(2, 2)$ and cutting off intercepts on the axes whose sum is 9.',
  `<div class="step">
    • Intercept form: $\\frac{x}{a} + \\frac{y}{b} = 1$.<br>
    • Given $a + b = 9 \\implies b = 9 - a$.<br>
    • The line passes through $(2, 2)$:<br>
      $$\\frac{2}{a} + \\frac{2}{9 - a} = 1 \\implies 2\\left(\\frac{9 - a + a}{a(9 - a)}\\right) = 1$$<br>
      $$\\frac{18}{9a - a^2} = 1 \\implies 9a - a^2 = 18 \\implies a^2 - 9a + 18 = 0$$<br>
      $$(a - 3)(a - 6) = 0 \\implies a = 3 \\quad \\text{or} \\quad a = 6$$<br>
    • If $a = 3$, then $b = 6$: $\\frac{x}{3} + \\frac{y}{6} = 1 \\implies \\mathbf{2x + y = 6}$.<br>
    • If $a = 6$, then $b = 3$: $\\frac{x}{6} + \\frac{y}{3} = 1 \\implies \\mathbf{x + 2y = 6}$.
  </div>`,
  '3 Marks',
  [['Setting up equation $\\frac{2}{a} + \\frac{2}{9 - a} = 1$', '1 Mark'], ['Solving quadratic equation $a^2 - 9a + 18 = 0$ for $a = 3, 6$', '1 Mark'], ['Writing both equations $2x + y = 6$ and $x + 2y = 6$', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q28', 'Question 14', 'Exercise 9.2',
  'Find equation of the line through the point $(0, 2)$ making an angle $\\dfrac{2\\pi}{3}$ with the positive $x$-axis. Also, find the equation of line parallel to it and crossing the $y$-axis at a distance of 2 units below the origin.',
  `<div class="step">
    • Slope $m = \\tan\\left(\\frac{2\\pi}{3}\\right) = \\tan 120^\\circ = -\\sqrt{3}$.<br>
    • Line passes through $(0, 2)$ (so $y$-intercept $c = 2$):<br>
      $$y = mx + c \\implies y = -\\sqrt{3}x + 2 \\implies \\mathbf{\\sqrt{3}x + y - 2 = 0}$$<br>
    • Parallel line has the same slope $m = -\\sqrt{3}$ and crosses $y$-axis at $2$ units below origin (so $c' = -2$):<br>
      $$y = -\\sqrt{3}x - 2 \\implies \\mathbf{\\sqrt{3}x + y + 2 = 0}$$
  </div>`,
  '3 Marks',
  [['Finding slope $m = -\\sqrt{3}$ and first equation $\\sqrt{3}x + y - 2 = 0$', '1½ Marks'], ['Finding parallel equation $\\sqrt{3}x + y + 2 = 0$', '1½ Marks']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q29', 'Question 15', 'Exercise 9.2',
  'The perpendicular from the origin to a line meets it at the point $(-2, 9)$, find the equation of the line.',
  `<div class="step">
    • The line segment from origin $O(0, 0)$ to $P(-2, 9)$ is perpendicular to the line.<br>
    • Slope of $OP$ ($m_1$):<br>
      $$m_1 = \\frac{9 - 0}{-2 - 0} = -\\frac{9}{2}$$<br>
    • Since the required line is perpendicular to $OP$, its slope $m$ is:<br>
      $$m = -\\frac{1}{m_1} = \\frac{2}{9}$$<br>
    • The line passes through $P(-2, 9)$. Using point-slope form:<br>
      $$y - 9 = \\frac{2}{9}(x - (-2)) = \\frac{2}{9}(x + 2)$$<br>
      $$9(y - 9) = 2(x + 2) \\implies 9y - 81 = 2x + 4$$<br>
      $$\\mathbf{2x - 9y + 85 = 0}$$
  </div>`,
  '2 Marks',
  [['Finding slope of normal $m_1 = -9/2$ and slope of line $m = 2/9$', '1 Mark'], ['Evaluating point-slope form to $2x - 9y + 85 = 0$', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q30', 'Question 16', 'Exercise 9.2',
  'The length $L$ (in centimetres) of a copper rod is a linear function of its Celsius temperature $C$. In an experiment, if $L = 124.942$ when $C = 20$ and $L = 125.134$ when $C = 110$, express $L$ in terms of $C$.',
  `<div class="step">
    • Given two points on the line $(C, L)$: $(20, 124.942)$ and $(110, 125.134)$.<br>
    • Using two-point form equation of a line:<br>
      $$L - L_1 = \\frac{L_2 - L_1}{C_2 - C_1}(C - C_1)$$<br>
      $$L - 124.942 = \\frac{125.134 - 124.942}{110 - 20}(C - 20) = \\frac{0.192}{90}(C - 20)$$<br>
      $$L - 124.942 = \\frac{0.192}{90}(C - 20)$$<br>
    • Simplifying:<br>
      $$L = \\mathbf{\\frac{0.192}{90}(C - 20) + 124.942}$$
  </div>`,
  '2 Marks',
  [['Applying two-point form with variables $L$ and $C$', '1 Mark'], ['Simplifying slope $0.192/90$ and writing linear function', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q31', 'Question 17', 'Exercise 9.2',
  'The owner of a milk store finds that, he can sell 980 litres of milk each week at Rs 14/litre and 1220 litres of milk each week at Rs 16/litre. Assuming a linear relationship between selling price and demand, how many litres could he sell weekly at Rs 17/litre?',
  `<div class="step">
    • Let price per litre be $P$ and weekly demand in litres be $D$.<br>
    • Given points $(P, D)$: $(14, 980)$ and $(16, 1220)$.<br>
    • Slope of the line:<br>
      $$m = \\frac{1220 - 980}{16 - 14} = \\frac{240}{2} = 120$$<br>
    • Equation of linear relationship using point $(14, 980)$:<br>
      $$D - 980 = 120(P - 14)$$<br>
    • When price is $P = 17$ Rs/litre:<br>
      $$D - 980 = 120(17 - 14) = 120(3) = 360$$<br>
      $$D = 980 + 360 = \\mathbf{1340\\text{ litres}}$$
  </div>`,
  '3 Marks',
  [['Finding slope $m = 120$', '1 Mark'], ['Setting up linear equation $D - 980 = 120(P - 14)$', '1 Mark'], ['Evaluating demand for $P = 17$ as 1340 litres', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q32', 'Question 18', 'Exercise 9.2',
  '$P(a, b)$ is the mid-point of a line segment between axes. Show that equation of the line is $\\dfrac{x}{a} + \\dfrac{y}{b} = 2$.',
  `<div class="step">
    • Let the line intersect the coordinate axes at $A(x_1, 0)$ and $B(0, y_1)$.<br>
    • $P(a, b)$ is the mid-point of segment $AB$:<br>
      $$a = \\frac{x_1 + 0}{2} \\implies x_1 = 2a$$<br>
      $$b = \\frac{0 + y_1}{2} \\implies y_1 = 2b$$<br>
    • Using intercept form with $x$-intercept $2a$ and $y$-intercept $2b$:<br>
      $$\\frac{x}{2a} + \\frac{y}{2b} = 1$$<br>
    • Multiplying both sides by $2$:<br>
      $$\\mathbf{\\frac{x}{a} + \\frac{y}{b} = 2}$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '2 Marks',
  [['Finding intercepts $x_1 = 2a$ and $y_1 = 2b$', '1 Mark'], ['Writing intercept form and multiplying by 2', '1 Mark']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q33', 'Question 19', 'Exercise 9.2',
  'Point $R(h, k)$ divides a line segment between the axes in the ratio $1 : 2$. Find equation of the line.',
  `<div class="step">
    • Let the line meet $x$-axis at $A(a, 0)$ and $y$-axis at $B(0, b)$.<br>
    • $R(h, k)$ divides $AB$ in the ratio $1 : 2$ ($m_1 : m_2 = 1 : 2$):<br>
      $$h = \\frac{1(0) + 2(a)}{1 + 2} = \\frac{2a}{3} \\implies a = \\frac{3h}{2}$$<br>
      $$k = \\frac{1(b) + 2(0)}{1 + 2} = \\frac{b}{3} \\implies b = 3k$$<br>
    • Using intercept form $\\frac{x}{a} + \\frac{y}{b} = 1$:<br>
      $$\\frac{x}{\\frac{3h}{2}} + \\frac{y}{3k} = 1 \\implies \\frac{2x}{3h} + \\frac{y}{3k} = 1$$<br>
    • Multiplying throughout by $3hk$:<br>
      $$2kx + hy = 3hk \\implies \\mathbf{2kx + hy = 3hk}$$
  </div>`,
  '3 Marks',
  [['Using section formula to find $a = 3h/2$ and $b = 3k$', '1½ Marks'], ['Substituting into intercept form and clearing denominators to get $2kx + hy = 3hk$', '1½ Marks']]
));

ex9_2.push(createQCard(
  'c11m-ch9-q34', 'Question 20', 'Exercise 9.2',
  'By using the concept of equation of a line, prove that the three points $(3, 0), (-2, -2)$ and $(8, 2)$ are collinear.',
  `<div class="step">
    • Let $A(3, 0)$ and $B(-2, -2)$.<br>
    • Equation of the line passing through $A(3, 0)$ and $B(-2, -2)$ using two-point form:<br>
      $$y - 0 = \\frac{-2 - 0}{-2 - 3}(x - 3) = \\frac{-2}{-5}(x - 3) = \\frac{2}{5}(x - 3)$$<br>
      $$5y = 2x - 6 \\implies 2x - 5y - 6 = 0$$<br>
    • Substitute the third point $C(8, 2)$ into this line equation:<br>
      $$\\text{LHS} = 2(8) - 5(2) - 6 = 16 - 10 - 6 = 0 = \\text{RHS}$$<br>
    • Since point $C(8, 2)$ satisfies the equation of line $AB$, the three points are collinear.<br>
    • <b>Hence proved.</b>
  </div>`,
  '2 Marks',
  [['Finding equation of line $AB$: $2x - 5y - 6 = 0$', '1 Mark'], ['Verifying point $(8, 2)$ satisfies the equation', '1 Mark']]
));

// ============================================================================
// EXERCISE 9.3: General Equation, Distance, Parallel Lines (Questions 35 to 52)
// ============================================================================

ex9_3.push(createQCard(
  'c11m-ch9-q35', 'Question 1', 'Exercise 9.3',
  'Reduce the following equations into slope-intercept form and find their slopes and the $y$-intercepts:<br>(i) $x + 7y = 0$,<br>(ii) $6x + 3y - 5 = 0$,<br>(iii) $y = 0$.',
  `<div class="step">
    • <b>(i) $x + 7y = 0$:</b><br>
      $$7y = -x \\implies y = -\\frac{1}{7}x + 0$$<br>
      $$\\mathbf{\\text{Slope } m = -\\frac{1}{7}, \\; y\\text{-intercept } c = 0}$$<br>
    • <b>(ii) $6x + 3y - 5 = 0$:</b><br>
      $$3y = -6x + 5 \\implies y = -2x + \\frac{5}{3}$$<br>
      $$\\mathbf{\\text{Slope } m = -2, \\; y\\text{-intercept } c = \\frac{5}{3}}$$<br>
    • <b>(iii) $y = 0$:</b><br>
      $$y = 0x + 0$$<br>
      $$\\mathbf{\\text{Slope } m = 0, \\; y\\text{-intercept } c = 0}$$
  </div>`,
  '3 Marks',
  [['Part (i): $m = -1/7, c = 0$', '1 Mark'], ['Part (ii): $m = -2, c = 5/3$', '1 Mark'], ['Part (iii): $m = 0, c = 0$', '1 Mark']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q36', 'Question 2', 'Exercise 9.3',
  'Reduce the following equations into intercept form and find their intercepts on the axes:<br>(i) $3x + 2y - 12 = 0$,<br>(ii) $4x - 3y = 6$,<br>(iii) $3y + 2 = 0$.',
  `<div class="step">
    • <b>(i) $3x + 2y = 12$:</b><br>
      Divide by $12$: $\\frac{3x}{12} + \\frac{2y}{12} = 1 \\implies \\frac{x}{4} + \\frac{y}{6} = 1$.<br>
      $$\\mathbf{x\\text{-intercept } = 4, \\; y\\text{-intercept } = 6}$$<br>
    • <b>(ii) $4x - 3y = 6$:</b><br>
      Divide by $6$: $\\frac{4x}{6} - \\frac{3y}{6} = 1 \\implies \\frac{x}{3/2} + \\frac{y}{-2} = 1$.<br>
      $$\\mathbf{x\\text{-intercept } = \\frac{3}{2}, \\; y\\text{-intercept } = -2}$$<br>
    • <b>(iii) $3y + 2 = 0 \\implies 3y = -2$:</b><br>
      $$\\frac{y}{-2/3} = 1 \\implies \\text{No } x\\text{-intercept (line is parallel to } x\\text{-axis)}, \\; \\mathbf{y\\text{-intercept } = -\\frac{2}{3}}$$
  </div>`,
  '3 Marks',
  [['Part (i): Intercepts 4 and 6', '1 Mark'], ['Part (ii): Intercepts 3/2 and -2', '1 Mark'], ['Part (iii): $y$-intercept $-2/3$, no $x$-intercept', '1 Mark']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q37', 'Question 3', 'Exercise 9.3',
  'Reduce the following equations into normal form. Find their perpendicular distances from the origin and angle between normal and the positive $x$-axis:<br>(i) $x - \\sqrt{3}y + 8 = 0$,<br>(ii) $y - 2 = 0$,<br>(iii) $x - y = 4$.',
  `<div class="step">
    • <b>(i) $x - \\sqrt{3}y + 8 = 0 \\implies -x + \\sqrt{3}y = 8$:</b><br>
      Divide by $\\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$:<br>
      $$-\\frac{1}{2}x + \\frac{\\sqrt{3}}{2}y = 4$$<br>
      $\\cos\\omega = -1/2, \\sin\\omega = \\sqrt{3}/2 \\implies \\omega = 180^\\circ - 60^\\circ = 120^\\circ$.<br>
      $$\\mathbf{x\\cos 120^\\circ + y\\sin 120^\\circ = 4 \\implies p = 4, \\; \\omega = 120^\\circ}$$<br>
    • <b>(ii) $y - 2 = 0 \\implies 0x + 1y = 2$:</b><br>
      $\\cos\\omega = 0, \\sin\\omega = 1 \\implies \\omega = 90^\\circ$.<br>
      $$\\mathbf{x\\cos 90^\\circ + y\\sin 90^\\circ = 2 \\implies p = 2, \\; \\omega = 90^\\circ}$$<br>
    • <b>(iii) $x - y = 4$:</b><br>
      Divide by $\\sqrt{1^2 + (-1)^2} = \\sqrt{2}$:<br>
      $$\\frac{1}{\\sqrt{2}}x - \\frac{1}{\\sqrt{2}}y = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2}$$<br>
      $\\cos\\omega = 1/\\sqrt{2}, \\sin\\omega = -1/\\sqrt{2} \\implies \\omega = 360^\\circ - 45^\\circ = 315^\\circ$.<br>
      $$\\mathbf{x\\cos 315^\\circ + y\\sin 315^\\circ = 2\\sqrt{2} \\implies p = 2\\sqrt{2}, \\; \\omega = 315^\\circ}$$
  </div>`,
  '3 Marks',
  [['Part (i): $p = 4, \\omega = 120^\\circ$', '1 Mark'], ['Part (ii): $p = 2, \\omega = 90^\\circ$', '1 Mark'], ['Part (iii): $p = 2\\sqrt{2}, \\omega = 315^\\circ$', '1 Mark']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q38', 'Question 4', 'Exercise 9.3',
  'Find the distance of the point $(-1, 1)$ from the line $12(x + 6) = 5(y - 2)$.',
  `<div class="step">
    • Simplify equation of line:<br>
      $$12x + 72 = 5y - 10 \\implies 12x - 5y + 82 = 0$$<br>
    • Distance $d$ from $(x_1, y_1) = (-1, 1)$ to $Ax + By + C = 0$ is:<br>
      $$d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}} = \\frac{|12(-1) - 5(1) + 82|}{\\sqrt{12^2 + (-5)^2}}$$<br>
      $$d = \\frac{|-12 - 5 + 82|}{\\sqrt{144 + 25}} = \\frac{|65|}{\\sqrt{169}} = \\frac{65}{13} = \\mathbf{5\\text{ units}}$$
  </div>`,
  '2 Marks',
  [['Rewriting line as $12x - 5y + 82 = 0$', '1 Mark'], ['Evaluating distance $d = 65/13 = 5$', '1 Mark']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q39', 'Question 5', 'Exercise 9.3',
  'Find the points on the $x$-axis, whose distances from the line $\\dfrac{x}{3} + \\dfrac{y}{4} = 1$ are 4 units.',
  `<div class="step">
    • Line equation: $4x + 3y - 12 = 0$.<br>
    • Let the point on the $x$-axis be $(x_0, 0)$.<br>
    • Distance formula with $d = 4$:<br>
      $$\\frac{|4x_0 + 3(0) - 12|}{\\sqrt{4^2 + 3^2}} = 4 \\implies \\frac{|4x_0 - 12|}{5} = 4 \\implies |4x_0 - 12| = 20$$<br>
    • Case 1: $4x_0 - 12 = 20 \\implies 4x_0 = 32 \\implies x_0 = 8$.<br>
    • Case 2: $4x_0 - 12 = -20 \\implies 4x_0 = -8 \\implies x_0 = -2$.<br>
    • <b>Conclusion:</b> The required points are $\\mathbf{(8, 0)\\text{ and }(-2, 0)}$.
  </div>`,
  '3 Marks',
  [['Formulating $|4x_0 - 12| / 5 = 4$', '1 Mark'], ['Solving Case 1: $x_0 = 8$', '1 Mark'], ['Solving Case 2: $x_0 = -2$ and stating points', '1 Mark']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q40', 'Question 6', 'Exercise 9.3',
  'Find the distance between parallel lines:<br>(i) $15x + 8y - 34 = 0$ and $15x + 8y + 31 = 0$,<br>(ii) $l(x + y) + p = 0$ and $l(x + y) - r = 0$.',
  `<div class="step">
    • Formula for distance between parallel lines $Ax + By + C_1 = 0$ and $Ax + By + C_2 = 0$ is $d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$.<br><br>
    • <b>(i) $15x + 8y - 34 = 0$ and $15x + 8y + 31 = 0$:</b><br>
      $$d = \\frac{|-34 - 31|}{\\sqrt{15^2 + 8^2}} = \\frac{|-65|}{\\sqrt{225 + 64}} = \\frac{65}{\\sqrt{289}} = \\frac{65}{17} = \\mathbf{\\frac{65}{17}\\text{ units}}$$<br>
    • <b>(ii) $lx + ly + p = 0$ and $lx + ly - r = 0$:</b><br>
      $$d = \\frac{|p - (-r)|}{\\sqrt{l^2 + l^2}} = \\frac{|p + r|}{\\sqrt{2l^2}} = \\mathbf{\\frac{|p + r|}{\\sqrt{2}|l|}\\text{ units}}$$
  </div>`,
  '3 Marks',
  [['Part (i): $d = 65/17$ units', '1½ Marks'], ['Part (ii): $d = \\frac{|p + r|}{\\sqrt{2}|l|}$ units', '1½ Marks']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q41', 'Question 7', 'Exercise 9.3',
  'Find equation of the line parallel to the line $3x - 4y + 2 = 0$ and passing through the point $(-2, 3)$.',
  `<div class="step">
    • A line parallel to $3x - 4y + 2 = 0$ is of the form $3x - 4y + k = 0$.<br>
    • Since it passes through $(-2, 3)$:<br>
      $$3(-2) - 4(3) + k = 0 \\implies -6 - 12 + k = 0 \\implies k = 18$$<br>
    • <b>Conclusion:</b> The required line is $\\mathbf{3x - 4y + 18 = 0}$.
  </div>`,
  '2 Marks',
  [['Setting line as $3x - 4y + k = 0$', '1 Mark'], ['Substituting $(-2, 3)$ to find $k = 18$', '1 Mark']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q42', 'Question 8', 'Exercise 9.3',
  'Find equation of the line perpendicular to the line $x - 7y + 5 = 0$ and having $x$ intercept 3.',
  `<div class="step">
    • Given line: $x - 7y + 5 = 0 \\implies y = \\frac{1}{7}x + \\frac{5}{7}$, so slope $m_1 = 1/7$.<br>
    • Perpendicular slope $m = -7$.<br>
    • Line has $x$-intercept $d = 3$, meaning it passes through $(3, 0)$.<br>
    • Equation: $y - 0 = -7(x - 3) \\implies y = -7x + 21 \\implies \\mathbf{7x + y - 21 = 0}$.
  </div>`,
  '2 Marks',
  [['Finding perpendicular slope $m = -7$', '1 Mark'], ['Writing equation $7x + y - 21 = 0$', '1 Mark']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q43', 'Question 9', 'Exercise 9.3',
  'Find angles between the lines $\\sqrt{3}x + y = 1$ and $x + \\sqrt{3}y = 1$.',
  `<div class="step">
    • Slope of first line $L_1$: $y = -\\sqrt{3}x + 1 \\implies m_1 = -\\sqrt{3}$.<br>
    • Slope of second line $L_2$: $\\sqrt{3}y = -x + 1 \\implies y = -\\frac{1}{\\sqrt{3}}x + \\frac{1}{\\sqrt{3}} \\implies m_2 = -\\frac{1}{\\sqrt{3}}$.<br>
    • Angle $\\theta$ between them:<br>
      $$\\tan\\theta = \\left|\\frac{m_2 - m_1}{1 + m_1 m_2}\\right| = \\left|\\frac{-\\frac{1}{\\sqrt{3}} - (-\\sqrt{3})}{1 + (-\\sqrt{3})(-\\frac{1}{\\sqrt{3}})}\\right| = \\left|\\frac{\\frac{2}{\\sqrt{3}}}{1 + 1}\\right| = \\frac{1}{\\sqrt{3}}$$
    • Acute angle $\\theta = 30^\\circ$ (and obtuse angle $180^\\circ - 30^\\circ = 150^\\circ$).<br>
    • <b>Conclusion:</b> The angles are $\\mathbf{30^\\circ\\text{ or }150^\\circ}$.
  </div>`,
  '2 Marks',
  [['Finding slopes $m_1 = -\\sqrt{3}, m_2 = -1/\\sqrt{3}$', '1 Mark'], ['Evaluating $\\tan\\theta = 1/\\sqrt{3} \\implies \\theta = 30^\\circ, 150^\\circ$', '1 Mark']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q44', 'Question 10', 'Exercise 9.3',
  'The line through the points $(h, 3)$ and $(4, 1)$ intersects the line $7x - 9y - 19 = 0$ at right angle. Find the value of $h$.',
  `<div class="step">
    • Slope of line through $(h, 3)$ and $(4, 1)$:<br>
      $$m_1 = \\frac{1 - 3}{4 - h} = \\frac{-2}{4 - h} = \\frac{2}{h - 4}$$<br>
    • Slope of line $7x - 9y - 19 = 0$: $9y = 7x - 19 \\implies m_2 = \\frac{7}{9}$.<br>
    • Since lines are perpendicular, $m_1 \\times m_2 = -1$:<br>
      $$\\left(\\frac{2}{h - 4}\\right)\\left(\\frac{7}{9}\\right) = -1 \\implies \\frac{14}{9(h - 4)} = -1$$<br>
      $$14 = -9(h - 4) = -9h + 36 \\implies 9h = 36 - 14 = 22 \\implies \\mathbf{h = \\frac{22}{9}}$$
  </div>`,
  '2 Marks',
  [['Finding slopes $m_1 = 2/(h - 4)$ and $m_2 = 7/9$', '1 Mark'], ['Solving $m_1 m_2 = -1 \\implies h = 22/9$', '1 Mark']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q45', 'Question 11', 'Exercise 9.3',
  'Prove that the line through the point $(x_1, y_1)$ and parallel to the line $Ax + By + C = 0$ is $A(x - x_1) + B(y - y_1) = 0$.',
  `<div class="step">
    • Slope of given line $Ax + By + C = 0$ is $m = -\\frac{A}{B}$.<br>
    • A parallel line has the same slope $m = -\\frac{A}{B}$.<br>
    • Using point-slope form through $(x_1, y_1)$:<br>
      $$y - y_1 = -\\frac{A}{B}(x - x_1)$$<br>
      $$B(y - y_1) = -A(x - x_1) \\implies \\mathbf{A(x - x_1) + B(y - y_1) = 0}$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '2 Marks',
  [['Finding slope $-A/B$', '1 Mark'], ['Writing point-slope equation and rearranging', '1 Mark']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q46', 'Question 12', 'Exercise 9.3',
  'Two lines passing through the point $(2, 3)$ intersects each other at an angle of $60^\\circ$. If slope of one line is 2, find equation of the other line.',
  `<div class="step">
    • Given slope of one line $m_1 = 2$, and angle between them $\\theta = 60^\\circ$.<br>
    • Let the slope of other line be $m$:<br>
      $$\\tan 60^\\circ = \\left|\\frac{m - 2}{1 + 2m}\\right| \\implies \\sqrt{3} = \\pm \\left(\\frac{m - 2}{1 + 2m}\\right)$$<br>
    • Case 1: $\\frac{m - 2}{1 + 2m} = \\sqrt{3} \\implies m - 2 = \\sqrt{3} + 2\\sqrt{3}m \\implies m(1 - 2\\sqrt{3}) = 2 + \\sqrt{3} \\implies m = \\frac{2 + \\sqrt{3}}{1 - 2\\sqrt{3}}$.<br>
      Equation: $y - 3 = \\left(\\frac{2 + \\sqrt{3}}{1 - 2\\sqrt{3}}\\right)(x - 2) \\implies \\mathbf{(\\sqrt{3} - 2)x + (2\\sqrt{3} + 1)y - (1 + 8\\sqrt{3}) = 0}$.<br>
    • Case 2: $\\frac{m - 2}{1 + 2m} = -\\sqrt{3} \\implies m = \\frac{2 - \\sqrt{3}}{1 + 2\\sqrt{3}}$.<br>
      Equation: $\\mathbf{(\\sqrt{3} + 2)x + (2\\sqrt{3} - 1)y - (8\\sqrt{3} - 1) = 0}$.
  </div>`,
  '3 Marks',
  [['Setting up $\\tan 60^\\circ = |(m - 2)/(1 + 2m)|$', '1 Mark'], ['Solving for both values of $m$', '1 Mark'], ['Finding both line equations', '1 Mark']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q47', 'Question 13', 'Exercise 9.3',
  'Find the equation of the right bisector of the line segment joining the points $(3, 4)$ and $(-1, 2)$.',
  `<div class="step">
    • Mid-point of segment joining $(3, 4)$ and $(-1, 2)$:<br>
      $$M = \\left(\\frac{3 - 1}{2}, \\frac{4 + 2}{2}\\right) = (1, 3)$$<br>
    • Slope of segment:<br>
      $$m_1 = \\frac{2 - 4}{-1 - 3} = \\frac{-2}{-4} = \\frac{1}{2}$$<br>
    • Slope of right bisector (perpendicular line): $m = -2$.<br>
    • Equation passing through $M(1, 3)$ with slope $-2$:<br>
      $$y - 3 = -2(x - 1) \\implies y - 3 = -2x + 2 \\implies \\mathbf{2x + y - 5 = 0}$$
  </div>`,
  '2 Marks',
  [['Finding mid-point $(1, 3)$ and slope $m_1 = 1/2$', '1 Mark'], ['Finding perpendicular slope $-2$ and equation $2x + y - 5 = 0$', '1 Mark']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q48', 'Question 14', 'Exercise 9.3',
  'Find the coordinates of the foot of perpendicular from the point $(-1, 3)$ to the line $3x - 4y - 16 = 0$.',
  `<div class="step">
    • Slope of given line $3x - 4y - 16 = 0$ is $m_1 = 3/4$.<br>
    • Slope of perpendicular line through $P(-1, 3)$ is $m = -4/3$.<br>
    • Equation of perpendicular line:<br>
      $$y - 3 = -\\frac{4}{3}(x - (-1)) \\implies 3y - 9 = -4x - 4 \\implies 4x + 3y - 5 = 0$$<br>
    • Solving system: $3x - 4y = 16$ and $4x + 3y = 5$:<br>
      Multiply 1st by 3 and 2nd by 4:<br>
      $$9x - 12y = 48$$<br>
      $$16x + 12y = 20$$<br>
      Adding: $25x = 68 \\implies x = \\frac{68}{25}$.<br>
      Substitute $x$: $3\\left(\\frac{68}{25}\\right) - 4y = 16 \\implies \\frac{204}{25} - 16 = 4y \\implies 4y = -\\frac{196}{25} \\implies y = -\\frac{49}{25}$.<br>
    • <b>Conclusion:</b> Coordinates of foot of perpendicular are $\\mathbf{\\left(\\frac{68}{25}, -\\frac{49}{25}\\right)}$.
  </div>`,
  '3 Marks',
  [['Finding equation of perpendicular line $4x + 3y - 5 = 0$', '1 Mark'], ['Solving linear system of equations', '1 Mark'], ['Stating coordinates $(68/25, -49/25)$', '1 Mark']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q49', 'Question 15', 'Exercise 9.3',
  'The perpendicular from the origin to the line $y = mx + c$ meets it at the point $(-1, 2)$. Find the values of $m$ and $c$.',
  `<div class="step">
    • Slope of segment joining $(0, 0)$ and $(-1, 2)$:<br>
      $$m_{\\perp} = \\frac{2 - 0}{-1 - 0} = -2$$<br>
    • Since line $y = mx + c$ is perpendicular to this segment:<br>
      $$m \\times (-2) = -1 \\implies \\mathbf{m = \\frac{1}{2}}$$<br>
    • Point $(-1, 2)$ lies on the line $y = mx + c$:<br>
      $$2 = \\frac{1}{2}(-1) + c \\implies c = 2 + \\frac{1}{2} = \\mathbf{\\frac{5}{2}}$$
  </div>`,
  '2 Marks',
  [['Finding slope $m = 1/2$', '1 Mark'], ['Finding intercept $c = 5/2$', '1 Mark']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q50', 'Question 16', 'Exercise 9.3',
  'If $p$ and $q$ are the lengths of perpendiculars from the origin to the lines $x\\cos\\theta - y\\sin\\theta = k\\cos 2\\theta$ and $x\\sec\\theta + y\\csc\\theta = k$, respectively, prove that $p^2 + 4q^2 = k^2$.',
  `<div class="step">
    • <b>Length $p$ for line 1: $x\\cos\\theta - y\\sin\\theta - k\\cos 2\\theta = 0$:</b><br>
      $$p = \\frac{|-k\\cos 2\\theta|}{\\sqrt{\\cos^2\\theta + \\sin^2\\theta}} = k|\\cos 2\\theta| \\implies p^2 = k^2 \\cos^2 2\\theta$$<br>
    • <b>Length $q$ for line 2: $\\frac{x}{\\cos\\theta} + \\frac{y}{\\sin\\theta} = k \\implies x\\sin\\theta + y\\cos\\theta - k\\sin\\theta\\cos\\theta = 0$:</b><br>
      $$q = \\frac{|-k\\sin\\theta\\cos\\theta|}{\\sqrt{\\sin^2\\theta + \\cos^2\\theta}} = k|\\sin\\theta\\cos\\theta| = \\frac{k}{2}|\\sin 2\\theta|$$<br>
      $$q^2 = \\frac{k^2}{4}\\sin^2 2\\theta \\implies 4q^2 = k^2 \\sin^2 2\\theta$$<br>
    • <b>Evaluating $p^2 + 4q^2$:</b><br>
      $$p^2 + 4q^2 = k^2 \\cos^2 2\\theta + k^2 \\sin^2 2\\theta = k^2(\\cos^2 2\\theta + \\sin^2 2\\theta) = \\mathbf{k^2}$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '3 Marks',
  [['Evaluating $p^2 = k^2 \\cos^2 2\\theta$', '1 Mark'], ['Evaluating $4q^2 = k^2 \\sin^2 2\\theta$', '1 Mark'], ['Summing to obtain $k^2$', '1 Mark']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q51', 'Question 17', 'Exercise 9.3',
  'In the triangle $ABC$ with vertices $A(2, 3), B(4, -1)$ and $C(1, 2)$, find the equation and length of altitude from the vertex $A$.',
  `<div class="step">
    • Slope of base $BC$: $m_{BC} = \\frac{2 - (-1)}{1 - 4} = \\frac{3}{-3} = -1$.<br>
    • Slope of altitude $AD$ (perpendicular to $BC$): $m = 1$.<br>
    • Equation of altitude $AD$ passing through $A(2, 3)$:<br>
      $$y - 3 = 1(x - 2) \\implies y - 3 = x - 2 \\implies \\mathbf{x - y + 1 = 0}$$<br>
    • Length of altitude is perpendicular distance from $A(2, 3)$ to line $BC$:<br>
      Equation of line $BC$: $y - 2 = -1(x - 1) \\implies x + y - 3 = 0$.<br>
      $$\\text{Length} = \\frac{|2 + 3 - 3|}{\\sqrt{1^2 + 1^2}} = \\frac{2}{\\sqrt{2}} = \\mathbf{\\sqrt{2}\\text{ units}}$$
  </div>`,
  '3 Marks',
  [['Finding equation of altitude $x - y + 1 = 0$', '1½ Marks'], ['Finding length of altitude $\\sqrt{2}$ units', '1½ Marks']]
));

ex9_3.push(createQCard(
  'c11m-ch9-q52', 'Question 18', 'Exercise 9.3',
  'If $p$ is the length of perpendicular from the origin to the line whose intercepts on the axes are $a$ and $b$, then show that $\\dfrac{1}{p^2} = \\dfrac{1}{a^2} + \\dfrac{1}{b^2}$.',
  `<div class="step">
    • Equation of line in intercept form: $\\frac{x}{a} + \\frac{y}{b} = 1 \\implies bx + ay - ab = 0$.<br>
    • Distance $p$ from origin $(0, 0)$:<br>
      $$p = \\frac{|b(0) + a(0) - ab|}{\\sqrt{b^2 + a^2}} = \\frac{ab}{\\sqrt{a^2 + b^2}}$$<br>
    • Squaring both sides:<br>
      $$p^2 = \\frac{a^2 b^2}{a^2 + b^2}$$<br>
    • Taking reciprocal:<br>
      $$\\frac{1}{p^2} = \\frac{a^2 + b^2}{a^2 b^2} = \\frac{a^2}{a^2 b^2} + \\frac{b^2}{a^2 b^2} = \\mathbf{\\frac{1}{a^2} + \\frac{1}{b^2}}$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '2 Marks',
  [['Expressing perpendicular distance $p = \\frac{ab}{\\sqrt{a^2 + b^2}}$', '1 Mark'], ['Squaring and taking reciprocal to get $\\frac{1}{p^2} = \\frac{1}{a^2} + \\frac{1}{b^2}$', '1 Mark']]
));

// ============================================================================
// MISCELLANEOUS EXERCISE ON CHAPTER 9 (Questions 53 to 71)
// ============================================================================

misc.push(createQCard(
  'c11m-ch9-q53', 'Question 1 (Misc)', 'Misc Exercise',
  'Find the values of $k$ for which the line $(k - 3)x - (4 - k^2)y + k^2 - 7k + 6 = 0$ is<br>(a) Parallel to the $x$-axis,<br>(b) Parallel to the $y$-axis,<br>(c) Passing through the origin.',
  `<div class="step">
    • <b>(a) Parallel to $x$-axis:</b> Coefficient of $x = 0 \\implies k - 3 = 0 \\implies \\mathbf{k = 3}$.<br>
    • <b>(b) Parallel to $y$-axis:</b> Coefficient of $y = 0 \\implies -(4 - k^2) = 0 \\implies k^2 = 4 \\implies \\mathbf{k = \\pm 2}$.<br>
    • <b>(c) Passing through the origin:</b> Constant term $= 0 \\implies k^2 - 7k + 6 = 0 \\implies (k - 1)(k - 6) = 0 \\implies \\mathbf{k = 1\\text{ or }6}$.
  </div>`,
  '3 Marks',
  [['(a) $k = 3$', '1 Mark'], ['(b) $k = \\pm 2$', '1 Mark'], ['(c) $k = 1, 6$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch9-q54', 'Question 2 (Misc)', 'Misc Exercise',
  'Find the values of $\\theta$ and $p$, if the equation $x\\cos\\theta + y\\sin\\theta = p$ is the normal form of the line $\\sqrt{3}x + y + 2 = 0$.',
  `<div class="step">
    • Rewrite with positive constant on RHS: $-\\sqrt{3}x - y = 2$.<br>
    • Divide by $\\sqrt{(-\\sqrt{3})^2 + (-1)^2} = \\sqrt{3 + 1} = 2$:<br>
      $$-\\frac{\\sqrt{3}}{2}x - \\frac{1}{2}y = 1$$<br>
    • Comparing with $x\\cos\\theta + y\\sin\\theta = p$:<br>
      $$p = 1, \\quad \\cos\\theta = -\\frac{\\sqrt{3}}{2}, \\quad \\sin\\theta = -\\frac{1}{2}$$<br>
    • Both $\\cos\\theta$ and $\\sin\\theta$ are negative (3rd quadrant):<br>
      $$\\theta = 180^\\circ + 30^\\circ = 210^\\circ \\quad \\left(\\text{or } \\frac{7\\pi}{6}\\right)$$<br>
    • <b>Conclusion:</b> $\\mathbf{\\theta = 210^\\circ\\text{ and } p = 1}$.
  </div>`,
  '3 Marks',
  [['Dividing equation by 2 with positive RHS', '1 Mark'], ['Identifying 3rd quadrant angle $\\theta = 210^\\circ$', '1 Mark'], ['Stating $p = 1$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch9-q55', 'Question 3 (Misc)', 'Misc Exercise',
  'Find the equations of the lines, which cut-off intercepts on the axes whose sum and product are 1 and -6, respectively.',
  `<div class="step">
    • Given intercepts $a$ and $b$ such that $a + b = 1$ and $ab = -6$.<br>
    • Quadratic equation for $a, b$: $t^2 - t - 6 = 0 \\implies (t - 3)(t + 2) = 0$.<br>
    • Case 1: $a = 3, b = -2$:<br>
      $$\\frac{x}{3} + \\frac{y}{-2} = 1 \\implies 2x - 3y = 6 \\implies \\mathbf{2x - 3y - 6 = 0}$$<br>
    • Case 2: $a = -2, b = 3$:<br>
      $$\\frac{x}{-2} + \\frac{y}{3} = 1 \\implies -3x + 2y = 6 \\implies \\mathbf{3x - 2y + 6 = 0}$$
  </div>`,
  '3 Marks',
  [['Finding pairs of intercepts $(3, -2)$ and $(-2, 3)$', '1½ Marks'], ['Writing both equations $2x - 3y - 6 = 0$ and $3x - 2y + 6 = 0$', '1½ Marks']]
));

misc.push(createQCard(
  'c11m-ch9-q56', 'Question 4 (Misc)', 'Misc Exercise',
  'What are the points on the $y$-axis whose distance from the line $\\dfrac{x}{3} + \\dfrac{y}{4} = 1$ is 4 units?',
  `<div class="step">
    • Line: $4x + 3y - 12 = 0$. Let point on $y$-axis be $(0, y_0)$.<br>
    • Distance formula with $d = 4$:<br>
      $$\\frac{|4(0) + 3y_0 - 12|}{\\sqrt{4^2 + 3^2}} = 4 \\implies \\frac{|3y_0 - 12|}{5} = 4 \\implies |3y_0 - 12| = 20$$<br>
    • Case 1: $3y_0 - 12 = 20 \\implies 3y_0 = 32 \\implies y_0 = \\frac{32}{3}$.<br>
    • Case 2: $3y_0 - 12 = -20 \\implies 3y_0 = -8 \\implies y_0 = -\\frac{8}{3}$.<br>
    • <b>Conclusion:</b> The points are $\\mathbf{\\left(0, \\frac{32}{3}\\right)\\text{ and }\\left(0, -\\frac{8}{3}\\right)}$.
  </div>`,
  '3 Marks',
  [['Setting up $|3y_0 - 12| / 5 = 4$', '1 Mark'], ['Finding $y_0 = 32/3$ and $y_0 = -8/3$', '2 Marks']]
));

misc.push(createQCard(
  'c11m-ch9-q57', 'Question 5 (Misc)', 'Misc Exercise',
  'Find perpendicular distance from the origin of the line joining the points $(\\cos\\theta, \\sin\\theta)$ and $(\\cos\\phi, \\sin\\phi)$.',
  `<div class="step">
    • Slope of the line:<br>
      $$m = \\frac{\\sin\\phi - \\sin\\theta}{\\cos\\phi - \\cos\\theta} = \\frac{2\\cos\\left(\\frac{\\phi + \\theta}{2}\\right)\\sin\\left(\\frac{\\phi - \\theta}{2}\\right)}{-2\\sin\\left(\\frac{\\phi + \\theta}{2}\\right)\\sin\\left(\\frac{\\phi - \\theta}{2}\\right)} = -\\cot\\left(\\frac{\\theta + \\phi}{2}\\right) = -\\frac{\\cos\\left(\\frac{\\theta + \\phi}{2}\\right)}{\\sin\\left(\\frac{\\theta + \\phi}{2}\\right)}$$<br>
    • Equation of the line simplifies to:<br>
      $$x\\cos\\left(\\frac{\\theta + \\phi}{2}\\right) + y\\sin\\left(\\frac{\\theta + \\phi}{2}\\right) - \\cos\\left(\\frac{\\theta - \\phi}{2}\\right) = 0$$<br>
    • Perpendicular distance $p$ from origin $(0, 0)$:<br>
      $$p = \\frac{\\left|0 + 0 - \\cos\\left(\\frac{\\theta - \\phi}{2}\\right)\\right|}{\\sqrt{\\cos^2\\left(\\frac{\\theta + \\phi}{2}\\right) + \\sin^2\\left(\\frac{\\theta + \\phi}{2}\\right)}} = \\mathbf{\\left|\\cos\\left(\\frac{\\theta - \\phi}{2}\\right)\\right|}$$
  </div>`,
  '3 Marks',
  [['Finding slope using trigonometric identities', '1 Mark'], ['Formulating line equation in normal-type form', '1 Mark'], ['Evaluating distance as $|\\cos(\\frac{\\theta - \\phi}{2})|$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch9-q58', 'Question 6 (Misc)', 'Misc Exercise',
  'Find the equation of the line parallel to $y$-axis and drawn through the point of intersection of the lines $x - 7y + 5 = 0$ and $3x + y = 0$.',
  `<div class="step">
    • From $3x + y = 0 \\implies y = -3x$.<br>
    • Substitute into $x - 7y + 5 = 0$:<br>
      $$x - 7(-3x) + 5 = 0 \\implies x + 21x + 5 = 0 \\implies 22x = -5 \\implies x = -\\frac{5}{22}$$<br>
    • A line parallel to the $y$-axis has the equation $x = c$.<br>
    • Passing through the intersection point, its equation is:<br>
      $$x = -\\frac{5}{22} \\implies \\mathbf{22x + 5 = 0}$$
  </div>`,
  '2 Marks',
  [['Finding intersection $x$-coordinate $x = -5/22$', '1 Mark'], ['Writing parallel line equation $22x + 5 = 0$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch9-q59', 'Question 7 (Misc)', 'Misc Exercise',
  'Find the equation of a line drawn perpendicular to the line $\\dfrac{x}{4} + \\dfrac{y}{6} = 1$ through the point, where it meets the $y$-axis.',
  `<div class="step">
    • The line $\\frac{x}{4} + \\frac{y}{6} = 1$ meets the $y$-axis at $(0, 6)$.<br>
    • Slope of given line: $\\frac{y}{6} = -\\frac{x}{4} + 1 \\implies y = -\\frac{3}{2}x + 6 \\implies m_1 = -\\frac{3}{2}$.<br>
    • Slope of perpendicular line $m = -\\frac{1}{m_1} = \\frac{2}{3}$.<br>
    • Equation through $(0, 6)$ with slope $2/3$:<br>
      $$y - 6 = \\frac{2}{3}(x - 0) \\implies 3y - 18 = 2x \\implies \\mathbf{2x - 3y + 18 = 0}$$
  </div>`,
  '2 Marks',
  [['Finding point $(0, 6)$ and perpendicular slope $m = 2/3$', '1 Mark'], ['Evaluating line equation $2x - 3y + 18 = 0$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch9-q60', 'Question 8 (Misc)', 'Misc Exercise',
  'Find the area of the triangle formed by the lines $y - x = 0, x + y = 0$ and $x - k = 0$.',
  `<div class="step">
    • Finding intersection of the three lines:<br>
      - Line 1 ($y = x$) and Line 2 ($y = -x$): $(0, 0)$.<br>
      - Line 1 ($y = x$) and Line 3 ($x = k$): $(k, k)$.<br>
      - Line 2 ($y = -x$) and Line 3 ($x = k$): $(k, -k)$.<br>
    • Area of $\\triangle$ with vertices $(0, 0), (k, k), (k, -k)$:<br>
      $$\\text{Area} = \\frac{1}{2}|0 + k(-k - 0) + k(0 - k)| = \\frac{1}{2}|-k^2 - k^2| = \\frac{1}{2}|-2k^2| = \\mathbf{k^2\\text{ sq. units}}$$
  </div>`,
  '2 Marks',
  [['Finding three intersection vertices $(0, 0), (k, k), (k, -k)$', '1 Mark'], ['Computing Area $= k^2$ sq. units', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch9-q61', 'Question 9 (Misc)', 'Misc Exercise',
  'Find the value of $p$ so that the three lines $3x + y - 2 = 0, px + 2y - 3 = 0$ and $2x - y - 3 = 0$ may intersect at one point.',
  `<div class="step">
    • Solve the two known lines $3x + y = 2$ and $2x - y = 3$:<br>
      Adding them: $5x = 5 \\implies x = 1$.<br>
      Substitute $x = 1$: $3(1) + y = 2 \\implies y = -1$.<br>
      The point of intersection is $(1, -1)$.<br>
    • Since all three lines are concurrent, $(1, -1)$ must satisfy $px + 2y - 3 = 0$:<br>
      $$p(1) + 2(-1) - 3 = 0 \\implies p - 2 - 3 = 0 \\implies \\mathbf{p = 5}$$
  </div>`,
  '2 Marks',
  [['Finding intersection $(1, -1)$ of known lines', '1 Mark'], ['Substituting into third line to find $p = 5$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch9-q62', 'Question 10 (Misc)', 'Misc Exercise',
  'If three lines whose equations are $y = m_1 x + c_1, y = m_2 x + c_2$ and $y = m_3 x + c_3$ are concurrent, then show that $m_1(c_2 - c_3) + m_2(c_3 - c_1) + m_3(c_1 - c_2) = 0$.',
  `<div class="step">
    • Solve first two lines $y = m_1 x + c_1$ and $y = m_2 x + c_2$:<br>
      $$(m_1 - m_2)x = c_2 - c_1 \\implies x = \\frac{c_2 - c_1}{m_1 - m_2}$$<br>
      $$y = m_1\\left(\\frac{c_2 - c_1}{m_1 - m_2}\\right) + c_1 = \\frac{m_1 c_2 - m_2 c_1}{m_1 - m_2}$$<br>
    • Since lines are concurrent, $(x, y)$ satisfies the third equation $y = m_3 x + c_3$:<br>
      $$\\frac{m_1 c_2 - m_2 c_1}{m_1 - m_2} = m_3\\left(\\frac{c_2 - c_1}{m_1 - m_2}\\right) + c_3$$<br>
      $$m_1 c_2 - m_2 c_1 = m_3(c_2 - c_1) + c_3(m_1 - m_2)$$<br>
      $$m_1(c_2 - c_3) + m_2(c_3 - c_1) + m_3(c_1 - c_2) = 0$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '3 Marks',
  [['Finding point of intersection of first two lines', '1½ Marks'], ['Substituting into third line and rearranging terms to achieve identity', '1½ Marks']]
));

misc.push(createQCard(
  'c11m-ch9-q63', 'Question 11 (Misc)', 'Misc Exercise',
  'Find the equation of the lines through the point $(3, 2)$ which make an angle of $45^\\circ$ with the line $x - 2y = 3$.',
  `<div class="step">
    • Slope of given line $x - 2y = 3$ is $m_1 = 1/2$.<br>
    • Given $\\theta = 45^\\circ \\implies \\tan 45^\\circ = 1$. Let the required slope be $m$:<br>
      $$\\left|\\frac{m - 1/2}{1 + m/2}\\right| = 1 \\implies \\left|\\frac{2m - 1}{2 + m}\\right| = 1$$<br>
    • Case 1: $\\frac{2m - 1}{2 + m} = 1 \\implies 2m - 1 = 2 + m \\implies m = 3$.<br>
      Equation: $y - 2 = 3(x - 3) \\implies \\mathbf{3x - y - 7 = 0}$.<br>
    • Case 2: $\\frac{2m - 1}{2 + m} = -1 \\implies 2m - 1 = -2 - m \\implies 3m = -1 \\implies m = -\\frac{1}{3}$.<br>
      Equation: $y - 2 = -\\frac{1}{3}(x - 3) \\implies \\mathbf{x + 3y - 9 = 0}$.
  </div>`,
  '3 Marks',
  [['Setting up $|(2m - 1)/(2 + m)| = 1$', '1 Mark'], ['Solving for $m = 3$ and $m = -1/3$', '1 Mark'], ['Writing both equations $3x - y - 7 = 0$ and $x + 3y - 9 = 0$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch9-q64', 'Question 12 (Misc)', 'Misc Exercise',
  'Find the equation of the line passing through the point of intersection of the lines $4x + 7y - 3 = 0$ and $2x - 3y + 1 = 0$ that has equal intercepts on the axes.',
  `<div class="step">
    • Solving intersection of $4x + 7y = 3$ and $2x - 3y = -1$:<br>
      Multiply second equation by 2: $4x - 6y = -2$.<br>
      Subtracting: $13y = 5 \\implies y = \\frac{5}{13}$.<br>
      $2x = 3y - 1 = \\frac{15}{13} - 1 = \\frac{2}{13} \\implies x = \\frac{1}{13}$.<br>
      Intersection point is $\\left(\\frac{1}{13}, \\frac{5}{13}\\right)$.<br>
    • Equal intercepts means $x + y = a$ (or passing through origin $y = mx$ with $m = -1$):<br>
      $$a = \\frac{1}{13} + \\frac{5}{13} = \\frac{6}{13}$$<br>
      $$x + y = \\frac{6}{13} \\implies \\mathbf{13x + 13y - 6 = 0}$$
  </div>`,
  '3 Marks',
  [['Finding intersection point $(1/13, 5/13)$', '1½ Marks'], ['Applying equal intercepts condition to get $13x + 13y - 6 = 0$', '1½ Marks']]
));

misc.push(createQCard(
  'c11m-ch9-q65', 'Question 13 (Misc)', 'Misc Exercise',
  'Show that the equation of the line passing through the origin and making an angle $\\theta$ with the line $y = mx + c$ is $\\dfrac{y}{x} = \\dfrac{m \\pm \\tan\\theta}{1 \\mp m\\tan\\theta}$.',
  `<div class="step">
    • Line passes through origin, so its equation is $y = m' x \\implies \\frac{y}{x} = m'$.<br>
    • The angle between this line (slope $m'$) and $y = mx + c$ (slope $m$) is $\\theta$:<br>
      $$\\tan\\theta = \\pm \\left(\\frac{m' - m}{1 + m' m}\\right)$$<br>
    • Solving for $m'$:<br>
      $$\\pm \\tan\\theta (1 + m' m) = m' - m$$<br>
      $$\\pm \\tan\\theta \\pm m' m \\tan\\theta = m' - m$$<br>
      $$m \\pm \\tan\\theta = m'(1 \\mp m\\tan\\theta)$$<br>
      $$m' = \\frac{m \\pm \\tan\\theta}{1 \\mp m\\tan\\theta}$$<br>
    • Substituting $m' = \\frac{y}{x}$ gives:<br>
      $$\\mathbf{\\frac{y}{x} = \\frac{m \\pm \\tan\\theta}{1 \\mp m\\tan\\theta}}$$<br>
    • <b>Hence proved.</b>
  </div>`,
  '3 Marks',
  [['Writing equation through origin as $y = m\' x$', '1 Mark'], ['Applying angle formula $\\tan\\theta = \\pm \\frac{m\' - m}{1 + m\' m}$', '1 Mark'], ['Solving for $m\' = y/x$ to obtain the identity', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch9-q66', 'Question 14 (Misc)', 'Misc Exercise',
  'In what ratio, the line joining $(-1, 1)$ and $(5, 7)$ is divided by the line $x + y = 4$?',
  `<div class="step">
    • Let the line $x + y = 4$ divide the segment joining $A(-1, 1)$ and $B(5, 7)$ in the ratio $k : 1$.<br>
    • By section formula, the point of division is:<br>
      $$P = \\left(\\frac{5k - 1}{k + 1}, \\frac{7k + 1}{k + 1}\\right)$$<br>
    • Since $P$ lies on $x + y = 4$:<br>
      $$\\frac{5k - 1}{k + 1} + \\frac{7k + 1}{k + 1} = 4 \\implies \\frac{12k}{k + 1} = 4$$<br>
      $$12k = 4(k + 1) = 4k + 4 \\implies 8k = 4 \\implies k = \\frac{1}{2}$$<br>
    • <b>Conclusion:</b> The ratio is $\\mathbf{1 : 2}$ internally.
  </div>`,
  '2 Marks',
  [['Expressing coordinates of division point in terms of $k$', '1 Mark'], ['Solving $\\frac{12k}{k + 1} = 4 \\implies k = 1/2$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch9-q67', 'Question 15 (Misc)', 'Misc Exercise',
  'Find the distance of the line $4x + 7y + 5 = 0$ from the point $(1, 2)$ along the line $2x - y = 0$.',
  `<div class="step">
    • The line $2x - y = 0 \\implies y = 2x$ passes through $(1, 2)$ since $2(1) - 2 = 0$.<br>
    • Find intersection of $y = 2x$ with $4x + 7y + 5 = 0$:<br>
      $$4x + 7(2x) + 5 = 0 \\implies 18x + 5 = 0 \\implies x = -\\frac{5}{18}$$<br>
      $$y = 2\\left(-\\frac{5}{18}\\right) = -\\frac{5}{9}$$<br>
      Intersection point $Q = \\left(-\\frac{5}{18}, -\\frac{5}{9}\\right)$.<br>
    • Distance from $P(1, 2)$ to $Q\\left(-\\frac{5}{18}, -\\frac{5}{9}\\right)$:<br>
      $$d = \\sqrt{\\left(1 - \\left(-\\frac{5}{18}\\right)\\right)^2 + \\left(2 - \\left(-\\frac{5}{9}\\right)\\right)^2} = \\sqrt{\\left(\\frac{23}{18}\\right)^2 + \\left(\\frac{23}{9}\\right)^2}$$<br>
      $$= \\frac{23}{18}\\sqrt{1^2 + 2^2} = \\mathbf{\\frac{23\\sqrt{5}}{18}\\text{ units}}$$
  </div>`,
  '3 Marks',
  [['Finding intersection point $(-5/18, -5/9)$', '1½ Marks'], ['Computing distance $d = \\frac{23\\sqrt{5}}{18}$', '1½ Marks']]
));

misc.push(createQCard(
  'c11m-ch9-q68', 'Question 16 (Misc)', 'Misc Exercise',
  'Find the direction in which a straight line must be drawn through the point $(-1, 2)$ so that its point of intersection with the line $x + y = 4$ may be at a distance of 3 units from this point.',
  `<div class="step">
    • Using parametric form for a line through $(-1, 2)$ at distance $r = 3$ with inclination $\\theta$:<br>
      $$x = -1 + 3\\cos\\theta, \\quad y = 2 + 3\\sin\\theta$$<br>
    • Since this point lies on $x + y = 4$:<br>
      $$(-1 + 3\\cos\\theta) + (2 + 3\\sin\\theta) = 4$$<br>
      $$3(\\cos\\theta + \\sin\\theta) = 3 \\implies \\cos\\theta + \\sin\\theta = 1$$<br>
    • Squaring both sides:<br>
      $$\\cos^2\\theta + \\sin^2\\theta + 2\\sin\\theta\\cos\\theta = 1 \\implies 1 + \\sin 2\\theta = 1 \\implies \\sin 2\\theta = 0$$<br>
      $$2\\theta = 0^\\circ \\text{ or } 180^\\circ \\implies \\theta = 0^\\circ \\text{ or } 90^\\circ$$<br>
    • Check: $\\cos 0^\\circ + \\sin 0^\\circ = 1$ (valid), $\\cos 90^\\circ + \\sin 90^\\circ = 1$ (valid).<br>
    • <b>Conclusion:</b> The line must be drawn horizontally ($\\\\theta = \\mathbf{0^\\circ}$) or vertically ($\\\\theta = \\mathbf{90^\\circ}$).
  </div>`,
  '3 Marks',
  [['Parametric coordinates $(-1 + 3\\cos\\theta, 2 + 3\\sin\\theta)$', '1 Mark'], ['Solving $\\cos\\theta + \\sin\\theta = 1$', '1 Mark'], ['Deducing directions $\\theta = 0^\\circ$ or $90^\\circ$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch9-q69', 'Question 17 (Misc)', 'Misc Exercise',
  'The hypotenuse of a right angled triangle has its ends at the points $(1, 3)$ and $(-4, 1)$. Find an equation of the legs (perpendicular sides) of the triangle which are parallel to the axes.',
  `<div class="step">
    • The hypotenuse endpoints are $A(1, 3)$ and $B(-4, 1)$.<br>
    • The legs are parallel to the axes ($x$-axis and $y$-axis).<br>
    • Therefore, the third vertex $C$ has either coordinates $(1, 1)$ or $(-4, 3)$.<br>
    • <b>Case 1 (Third vertex at $(1, 1)$):</b><br>
      - Vertical leg: passing through $(1, 3)$ and $(1, 1) \\implies \\mathbf{x = 1}$.<br>
      - Horizontal leg: passing through $(-4, 1)$ and $(1, 1) \\implies \\mathbf{y = 1}$.<br>
    • <b>Case 2 (Third vertex at $(-4, 3)$):</b><br>
      - Horizontal leg: passing through $(1, 3)$ and $(-4, 3) \\implies \\mathbf{y = 3}$.<br>
      - Vertical leg: passing through $(-4, 1)$ and $(-4, 3) \\implies \\mathbf{x = -4}$.<br>
    • <b>Conclusion:</b> The equations of the legs are $\\mathbf{x = 1, y = 1}$ or $\\mathbf{x = -4, y = 3}$.
  </div>`,
  '3 Marks',
  [['Identifying possible third vertices $(1, 1)$ and $(-4, 3)$', '1 Mark'], ['Writing equations for Case 1: $x = 1, y = 1$', '1 Mark'], ['Writing equations for Case 2: $x = -4, y = 3$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch9-q70', 'Question 18 (Misc)', 'Misc Exercise',
  'Find the image of the point $(3, 8)$ with respect to the line $x + 3y = 7$ assuming the line to be a plane mirror.',
  `<div class="step">
    • Let $P(3, 8)$ and its image be $Q(x_1, y_1)$.<br>
    • Mid-point $M$ of $PQ$ lies on the mirror line $x + 3y = 7$:<br>
      $$M = \\left(\\frac{x_1 + 3}{2}, \\frac{y_1 + 8}{2}\\right)$$<br>
      $$\\frac{x_1 + 3}{2} + 3\\left(\\frac{y_1 + 8}{2}\\right) = 7 \\implies x_1 + 3 + 3y_1 + 24 = 14 \\implies x_1 + 3y_1 = -13 \\quad \\dots (1)$$<br>
    • $PQ$ is perpendicular to line $x + 3y = 7$ (slope $-1/3$):<br>
      $$\\text{Slope of } PQ = \\frac{y_1 - 8}{x_1 - 3} = 3 \\implies y_1 - 8 = 3(x_1 - 3) = 3x_1 - 9$$<br>
      $$3x_1 - y_1 = 1 \\quad \\dots (2)$$<br>
    • Solving (1) and (2):<br>
      From (2), $y_1 = 3x_1 - 1$. Substitute into (1):<br>
      $$x_1 + 3(3x_1 - 1) = -13 \\implies 10x_1 - 3 = -13 \\implies 10x_1 = -10 \\implies x_1 = -1$$<br>
      $$y_1 = 3(-1) - 1 = -4$$<br>
    • <b>Conclusion:</b> The image of the point is $\\mathbf{(-1, -4)}$.
  </div>`,
  '4 Marks',
  [['Finding mid-point condition $x_1 + 3y_1 = -13$', '1½ Marks'], ['Finding perpendicularity condition $3x_1 - y_1 = 1$', '1½ Marks'], ['Solving system to find image $(-1, -4)$', '1 Mark']]
));

misc.push(createQCard(
  'c11m-ch9-q71', 'Question 19 (Misc)', 'Misc Exercise',
  'If the lines $2x + y - 3 = 0, 5x + ky - 3 = 0$ and $3x - y - 2 = 0$ are concurrent, find the value of $k$.',
  `<div class="step">
    • Solve the two known lines $2x + y = 3$ and $3x - y = 2$:<br>
      Adding them: $5x = 5 \\implies x = 1$.<br>
      Substitute $x = 1$: $2(1) + y = 3 \\implies y = 1$.<br>
      The point of intersection is $(1, 1)$.<br>
    • Since all three lines are concurrent, $(1, 1)$ must satisfy $5x + ky - 3 = 0$:<br>
      $$5(1) + k(1) - 3 = 0 \\implies 5 + k - 3 = 0 \\implies k + 2 = 0 \\implies \\mathbf{k = -2}$$
  </div>`,
  '2 Marks',
  [['Finding intersection point $(1, 1)$', '1 Mark'], ['Substituting $(1, 1)$ into $5x + ky - 3 = 0$ to get $k = -2$', '1 Mark']]
));

// Build complete HTML page for Chapter 9
const chapterHtml = `
<section class="chapter-content" id="c11m-ch9">
  <div class="ch-badge" style="display:inline-block; font-size:0.8rem; font-weight:800; background:#f0fdfa; color:#0d9488; padding:4px 12px; border-radius:20px; text-transform:uppercase; margin-bottom:8px;">NCERT Rationalised 2026–27 • Complete Verbatim Solutions</div>
  <h1 style="font-size:2rem; font-weight:800; color:#0f172a; margin-bottom:12px;">Class 11 Chapter 9: Straight Lines (सरल रेखाएँ)</h1>
  <p style="font-size:1.05rem; color:#475569; line-height:1.6; margin-bottom:24px;">
    Exhaustive, 100% verbatim solutions for all <b>71 questions</b> from NCERT Class 11 Mathematics Chapter 9. Includes Exercise 9.1 (14 questions on slopes, collinearity &amp; angles), Exercise 9.2 (20 questions on point-slope, two-point, intercept &amp; normal forms), Exercise 9.3 (18 questions on general equation, perpendicular distance &amp; parallel lines), and Miscellaneous Exercise (19 questions on concurrency, reflection images &amp; right-angled triangles) with step-by-step CBSE marking schemes.
  </p>

  <!-- Formula & Theory Summary Cheatsheet -->
  <div class="theory-box" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:20px; margin-bottom:30px;">
    <h3 style="font-size:1.15rem; font-weight:700; color:#1e293b; margin-top:0; margin-bottom:12px;">📘 Standard Forms &amp; Distance Theorems</h3>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; font-size:0.95rem; color:#334155;">
      <div style="background:white; padding:12px 16px; border-radius:8px; border:1px solid #cbd5e1;">
        <strong>Forms of Line Equations:</strong><br>
        • Slope-Intercept Form: $y = mx + c$.<br>
        • Point-Slope Form: $y - y_1 = m(x - x_1)$.<br>
        • Two-Point Form: $y - y_1 = \\dfrac{y_2 - y_1}{x_2 - x_1}(x - x_1)$.<br>
        • Intercept Form: $\\dfrac{x}{a} + \\dfrac{y}{b} = 1$.<br>
        • Normal Form: $x\\cos\\omega + y\\sin\\omega = p$.
      </div>
      <div style="background:white; padding:12px 16px; border-radius:8px; border:1px solid #cbd5e1;">
        <strong>Angle &amp; Distance Relations:</strong><br>
        • Angle between lines: $\\tan\\theta = \\left|\\dfrac{m_2 - m_1}{1 + m_1 m_2}\\right|$.<br>
        • Parallel: $m_1 = m_2$; Perpendicular: $m_1 m_2 = -1$.<br>
        • Distance from $(x_1, y_1)$ to $Ax + By + C = 0$: $d = \\dfrac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$.<br>
        • Distance between parallel lines: $d = \\dfrac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$.
      </div>
    </div>
  </div>

  <!-- Vector SVG Diagram: Coordinate Line Geometry & Normal Distance -->
  <div class="vector-diagram-container" style="background:linear-gradient(135deg, #f0fdfa 0%, #f5f3ff 100%); border:1px solid #99f6e4; border-radius:12px; padding:20px; text-align:center; margin-bottom:30px;">
    <h4 style="margin:0 0 10px 0; color:#0f766e; font-size:1.1rem; font-weight:700;">📐 Straight Line Geometry: Normal Vector, Intercepts (a, b) &amp; Perpendicular p</h4>
    <svg viewBox="0 0 520 220" style="max-width:100%; height:auto; display:inline-block;" xmlns="http://www.w3.org/2000/svg">
      <!-- Axes -->
      <line x1="40" y1="180" x2="480" y2="180" stroke="#64748b" stroke-width="2"/>
      <line x1="120" y1="210" x2="120" y2="20" stroke="#64748b" stroke-width="2"/>
      <polygon points="485,180 475,175 475,185" fill="#64748b"/>
      <polygon points="120,15 115,25 125,25" fill="#64748b"/>
      <text x="475" y="198" font-size="11" fill="#475569">x</text>
      <text x="108" y="25" font-size="11" fill="#475569">y</text>
      <text x="108" y="195" font-size="12" fill="#64748b" font-weight="bold">O</text>

      <!-- The Straight Line L -->
      <line x1="60" y1="40" x2="400" y2="210" stroke="#0d9488" stroke-width="3"/>
      <text x="65" y="32" font-size="12" fill="#0d9488" font-weight="bold">Line L: x/a + y/b = 1</text>

      <!-- Intercepts -->
      <circle cx="340" cy="180" r="5" fill="#0d9488"/>
      <text x="340" y="200" font-size="11" fill="#0f766e" font-weight="bold" text-anchor="middle">A(a, 0)</text>

      <circle cx="120" cy="70" r="5" fill="#0d9488"/>
      <text x="95" y="70" font-size="11" fill="#0f766e" font-weight="bold" text-anchor="end">B(0, b)</text>

      <!-- Perpendicular from Origin -->
      <line x1="120" y1="180" x2="200" y2="110" stroke="#e11d48" stroke-width="2" stroke-dasharray="4,3"/>
      <circle cx="200" cy="110" r="4" fill="#e11d48"/>
      <text x="150" y="135" font-size="11" fill="#e11d48" font-weight="bold">p (normal)</text>

      <!-- Right angle marker at foot -->
      <path d="M 194 115 L 189 109 L 195 104" fill="none" stroke="#e11d48" stroke-width="1.5"/>

      <!-- Normal Angle omega arc -->
      <path d="M 150 180 A 30 30 0 0 0 144 159" fill="none" stroke="#7c3aed" stroke-width="2"/>
      <text x="155" y="165" font-size="11" fill="#7c3aed" font-weight="bold">&omega;</text>

      <!-- Formula summary -->
      <rect x="340" y="30" width="160" height="60" rx="8" fill="white" stroke="#cbd5e1" opacity="0.95"/>
      <text x="420" y="52" font-size="11" fill="#1e293b" font-weight="bold" text-anchor="middle">Normal Form:</text>
      <text x="420" y="72" font-size="11" fill="#0f766e" font-weight="bold" text-anchor="middle">x cos&omega; + y sin&omega; = p</text>
    </svg>
  </div>

  <div class="ex-div">NCERT Exercise 9.1: Slope of a Line, Inclination Angles &amp; Coordinate Collinearity</div>
${ex9_1.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Exercise 9.2: Point-Slope, Intercept, Median Altitudes &amp; Demand Functions</div>
${ex9_2.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Exercise 9.3: General Form, Normal Reductions, Foot of Perpendicular &amp; Parallel Distances</div>
${ex9_3.join('\n')}

  <div class="ex-div" style="margin-top:35px;">NCERT Miscellaneous Exercise on Chapter 9: Concurrency Identities, Reflection Mirrors &amp; Triangle Leg Systems</div>
${misc.join('\n')}

  <div class="chapter-nav-btns" style="margin-top:40px; display:flex; justify-content:space-between; align-items:center;">
    <button class="ch-nav-btn prev" onclick="showChapter(8)" style="padding:10px 24px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer;">← Previous: Chapter 8 (Sequences &amp; Series)</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})" style="padding:10px 20px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer;">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(10)" style="padding:10px 24px; border-radius:8px; border:none; background:#ff6b00; color:white; font-weight:700; cursor:pointer;">Next: Chapter 10 (Conic Sections) →</button>
  </div>
</section>
`;

// Write ch9.html
const ch9Path = path.join(outDir, 'ch9.html');
fs.writeFileSync(ch9Path, chapterHtml.trim(), 'utf8');
console.log(`Successfully generated: ${ch9Path} (${chapterHtml.length} bytes)`);

// Update chapters-data.js so chapters load instantly offline/online
const dataJsPath = path.join(outDir, 'chapters-data.js');
let existingData = '';
if (fs.existsSync(dataJsPath)) {
  existingData = fs.readFileSync(dataJsPath, 'utf8');
}

// Append or update window.CHAPTER_DATA[9]
if (!existingData.includes('window.CHAPTER_DATA[9] =')) {
  const ch9Entry = `\nwindow.CHAPTER_DATA[9] = ${JSON.stringify(chapterHtml.trim())};\n`;
  fs.appendFileSync(dataJsPath, ch9Entry, 'utf8');
  console.log(`Appended Chapter 9 to preloaded cache: ${dataJsPath}`);
} else {
  // Replace window.CHAPTER_DATA[9] block
  const regex = /window\.CHAPTER_DATA\[9\]\s*=\s*[\s\S]*?;\n/g;
  const updated = existingData.replace(regex, `window.CHAPTER_DATA[9] = ${JSON.stringify(chapterHtml.trim())};\n`);
  fs.writeFileSync(dataJsPath, updated, 'utf8');
  console.log(`Updated Chapter 9 in preloaded cache: ${dataJsPath}`);
}
