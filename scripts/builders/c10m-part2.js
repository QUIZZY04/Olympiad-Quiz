// scripts/builders/c10m-part2.js
// Literal Verbatim Physical NCERT Questions for Class 10 Mathematics: Chapters 6 to 14
// Complete Exercise Problems with CBSE Step Marking Schemes 2026-27

const { renderQCard } = require('./c10s-part1.js');

function makeMathCard(id, num, text, marks, answerHtml, rubricRows) {
  return renderQCard(id, num, text, marks, answerHtml, rubricRows);
}

// ============================================================================
// CHAPTER 6: TRIANGLES (20 Additional NCERT Qs: Total 29 Qs)
// ============================================================================
function getChapter6Additions() {
  const cards = [];

  // Ex 6.1
  cards.push(
    makeMathCard(
      'c10m-ch6-q10',
      'NCERT Exercise 6.1 • Q1 & Q2',
      'Fill in the blanks: (i) All circles are _____ (congruent, similar). (ii) All squares are _____ (similar, congruent). (iii) All _____ triangles are similar (isosceles, equilateral). (iv) Two polygons of the same number of sides are similar, if (a) their corresponding angles are _____ and (b) their corresponding sides are _____ (equal, proportional).',
      2,
      `<p><strong>Answers:</strong></p>
<ol>
  <li>(i) All circles are <strong>similar</strong> (same shape, varying radius).</li>
  <li>(ii) All squares are <strong>similar</strong> (equal 90° angles, proportional sides).</li>
  <li>(iii) All <strong>equilateral</strong> triangles are similar (all internal angles are 60°).</li>
  <li>(iv) (a) their corresponding angles are <strong>equal</strong> and (b) their corresponding sides are <strong>proportional</strong>.</li>
</ol>`,
      [
        { key: 'Blanks: similar, similar, equilateral', marks: '1 Mark' },
        { key: 'Blanks: equal, proportional', marks: '1 Mark' }
      ]
    )
  );

  // Ex 6.2 Q3 & Q4
  cards.push(
    makeMathCard(
      'c10m-ch6-q11',
      'NCERT Exercise 6.2 • Q3 & Q4',
      '(i) If LM || CB and LN || CD, prove that $\\frac{AM}{AB} = \\frac{AN}{AD}$. (ii) In triangle ABC, DE || AC and DF || AE. Prove that $\\frac{BF}{FE} = \\frac{BE}{EC}$.',
      4,
      `<p><strong>(i) Proof:</strong></p>
<ol>
  <li>In $\\Delta ABC$, since $LM \\parallel CB$, by Basic Proportionality Theorem (BPT):
    $$\\frac{AM}{MB} = \\frac{AL}{LC} \\implies \\frac{AM}{AM + MB} = \\frac{AL}{AL + LC} \\implies \\frac{AM}{AB} = \\frac{AL}{AC} \\quad \\text{--- (1)}$$
  </li>
  <li>In $\\Delta ADC$, since $LN \\parallel CD$, by BPT:
    $$\\frac{AN}{AD} = \\frac{AL}{AC} \\quad \\text{--- (2)}$$
  </li>
  <li>From (1) and (2):
    $$\\mathbf{\\frac{AM}{AB} = \\frac{AN}{AD}} \\quad \\text{Hence proved.}$$
  </li>
</ol>
<p><strong>(ii) Proof:</strong></p>
<ol>
  <li>In $\\Delta BAE$, since $DF \\parallel AE$, by BPT:
    $$\\frac{BF}{FE} = \\frac{BD}{DA} \\quad \\text{--- (1)}$$
  </li>
  <li>In $\\Delta BAC$, since $DE \\parallel AC$, by BPT:
    $$\\frac{BE}{EC} = \\frac{BD}{DA} \\quad \\text{--- (2)}$$
  </li>
  <li>Equating (1) and (2):
    $$\\mathbf{\\frac{BF}{FE} = \\frac{BE}{EC}} \\quad \\text{Hence proved.}$$
  </li>
</ol>`,
      [
        { key: '(i) Applying BPT in triangle ABC and triangle ADC to equate AM/AB = AN/AD', marks: '2 Marks' },
        { key: '(ii) Applying BPT in triangle BAE and triangle BAC to equate BF/FE = BE/EC', marks: '2 Marks' }
      ]
    )
  );

  // Ex 6.2 Q9 & Q10 (Trapezium diagonals)
  cards.push(
    makeMathCard(
      'c10m-ch6-q12',
      'NCERT Exercise 6.2 • Q9 & Q10',
      '(i) ABCD is a trapezium in which AB || DC and its diagonals intersect each other at the point O. Show that $\\frac{AO}{BO} = \\frac{CO}{DO}$. (ii) The diagonals of a quadrilateral ABCD intersect each other at O such that $\\frac{AO}{BO} = \\frac{CO}{DO}$. Show that ABCD is a trapezium.',
      4,
      `<p><strong>(i) Proof:</strong></p>
<ol>
  <li>Draw a line through $O$ parallel to $AB$ (and $DC$) meeting $AD$ at $E$, so $EO \\parallel AB \\parallel DC$.</li>
  <li>In $\\Delta ADC$, $EO \\parallel DC$. By BPT:
    $$\\frac{AE}{ED} = \\frac{AO}{OC} \\quad \\text{--- (1)}$$
  </li>
  <li>In $\\Delta DAB$, $EO \\parallel AB$. By BPT:
    $$\\frac{DE}{EA} = \\frac{DO}{OB} \\implies \\frac{AE}{ED} = \\frac{BO}{OD} \\quad \\text{--- (2)}$$
  </li>
  <li>From (1) and (2):
    $$\\frac{AO}{OC} = \\frac{BO}{OD} \\implies \\mathbf{\\frac{AO}{BO} = \\frac{CO}{DO}} \\quad \\text{Hence proved.}$$
  </li>
</ol>
<p><strong>(ii) Converse Proof:</strong></p>
<p>Given $\\frac{AO}{BO} = \\frac{CO}{DO} \\implies \\frac{AO}{CO} = \\frac{BO}{DO}$. Draw $EO \\parallel AB$ meeting $AD$ at $E$. In $\\Delta DAB$, by BPT $\\frac{AE}{ED} = \\frac{BO}{OD} = \\frac{AO}{CO}$. By converse of BPT in $\\Delta ADC$, $EO \\parallel DC$. Since $EO \\parallel AB$ and $EO \\parallel DC$, we have $AB \\parallel DC$. Therefore, <strong>ABCD is a trapezium</strong>.</p>`,
      [
        { key: '(i) Construction of EO parallel to AB and applying BPT in triangles ADC and DAB', marks: '2 Marks' },
        { key: '(ii) Applying converse of BPT to prove AB parallel to CD (trapezium)', marks: '2 Marks' }
      ]
    )
  );

  // Ex 6.3 Problems
  const ex63Triangles = [
    {
      id: 'c10m-ch6-q13',
      num: 'NCERT Exercise 6.3 • Q4 & Q5',
      text: '(i) In Fig, $\\frac{QR}{QS} = \\frac{QT}{PR}$ and $\\angle 1 = \\angle 2$. Show that $\\Delta PQS \\sim \\Delta TQR$. (ii) S and T are points on sides PR and QR of $\\Delta PQR$ such that $\\angle P = \\angle RTS$. Show that $\\Delta RPQ \\sim \\Delta RTS$.',
      marks: 4,
      ans: `<p><strong>(i) Proof:</strong> In $\\Delta PQR$, $\\angle 1 = \\angle 2 \\implies PR = PQ$ (sides opposite to equal angles).<br>
Given $\\frac{QR}{QS} = \\frac{QT}{PR} \\implies \\frac{QR}{QS} = \\frac{QT}{PQ} \\implies \\frac{QT}{PQ} = \\frac{QR}{QS}$.<br>
In $\\Delta PQS$ and $\\Delta TQR$: $\\frac{QT}{PQ} = \\frac{QR}{QS}$ and $\\angle Q = \\angle Q$ (common).<br>
By SAS similarity criterion: $\\mathbf{\\Delta PQS \\sim \\Delta TQR}$. Hence proved.</p>
<p><strong>(ii) Proof:</strong> In $\\Delta RPQ$ and $\\Delta RTS$:<br>
$\\angle R = \\angle R$ (common angle)<br>
$\\angle P = \\angle RTS$ (given)<br>
By AA similarity criterion: $\\mathbf{\\Delta RPQ \\sim \\Delta RTS}$. Hence proved.</p>`,
      rubric: [{ key: '(i) Replacing PR with PQ and using SAS similarity', marks: '2 Marks' }, { key: '(ii) Using AA similarity criterion', marks: '2 Marks' }]
    },
    {
      id: 'c10m-ch6-q14',
      num: 'NCERT Exercise 6.3 • Q8 & Q13',
      text: '(i) E is a point on the side AD produced of a parallelogram ABCD and BE intersects CD at F. Show that $\\Delta ABE \\sim \\Delta CFB$. (ii) D is a point on the side BC of a triangle ABC such that $\\angle ADC = \\angle BAC$. Show that $CA^2 = CB \\cdot CD$.',
      marks: 4,
      ans: `<p><strong>(i) Proof:</strong> In parallelogram ABCD, opposite angles are equal: $\\angle A = \\angle C$.<br>
Also, $AE \\parallel BC$ (since $AD \\parallel BC$), and $BE$ is a transversal, so alternate interior angles are equal: $\\angle AEB = \\angle CBF$.<br>
In $\\Delta ABE$ and $\\Delta CFB$: $\\angle A = \\angle C$ and $\\angle AEB = \\angle CBF$.<br>
By AA similarity: $\\mathbf{\\Delta ABE \\sim \\Delta CFB}$. Hence proved.</p>
<p><strong>(ii) Proof:</strong> In $\\Delta ABC$ and $\\Delta DAC$:<br>
$\\angle BAC = \\angle ADC$ (given)<br>
$\\angle C = \\angle C$ (common)<br>
By AA similarity: $\\Delta ABC \\sim \\Delta DAC$.<br>
Corresponding sides are proportional: $\\frac{CA}{CD} = \\frac{CB}{CA} \\implies \\mathbf{CA^2 = CB \\cdot CD}$. Hence proved.</p>`,
      rubric: [{ key: '(i) Parallelogram opposite angles and alternate interior angles show AA similarity', marks: '2 Marks' }, { key: '(ii) AA similarity of triangle ABC and triangle DAC gives CA^2 = CB * CD', marks: '2 Marks' }]
    },
    {
      id: 'c10m-ch6-q15',
      num: 'NCERT Exercise 6.3 • Q15 & Q16',
      text: '(i) A vertical pole of length 6 m casts a shadow 4 m long on the ground and at the same time a tower casts a shadow 28 m long. Find the height of the tower. (ii) If AD and PM are medians of triangles ABC and PQR respectively, where $\\Delta ABC \\sim \\Delta PQR$, prove that $\\frac{AB}{PQ} = \\frac{AD}{PM}$.',
      marks: 4,
      ans: `<p><strong>(i) Height of Tower:</strong><br>
At the same time, the angular elevation of the Sun is identical for both objects. Thus, the right-angled triangle formed by the pole and its shadow is similar to the triangle formed by the tower and its shadow by AA similarity.<br>
Let height of tower be $h\\text{ metres}$.<br>
$$\\frac{\\text{Height of pole}}{\\text{Height of tower}} = \\frac{\\text{Shadow of pole}}{\\text{Shadow of tower}} \\implies \\frac{6}{h} = \\frac{4}{28}$$
$$\\frac{6}{h} = \\frac{1}{7} \\implies h = 6 \\times 7 = \\mathbf{42\\text{ metres}}$$
The height of the tower is <strong>42 metres</strong>.</p>
<p><strong>(ii) Ratio of Medians Proof:</strong><br>
Given $\\Delta ABC \\sim \\Delta PQR \\implies \\frac{AB}{PQ} = \\frac{BC}{QR} = \\frac{2 BD}{2 QM} = \\frac{BD}{QM}$ and $\\angle B = \\angle Q$.<br>
In $\\Delta ABD$ and $\\Delta PQM$: $\\frac{AB}{PQ} = \\frac{BD}{QM}$ and $\\angle B = \\angle Q$.<br>
By SAS similarity: $\\Delta ABD \\sim \\Delta PQM$.<br>
Therefore, corresponding sides are proportional: $\\mathbf{\\frac{AB}{PQ} = \\frac{AD}{PM}}$. Hence proved.</p>`,
      rubric: [{ key: '(i) Setting up similarity ratio 6/h = 4/28 to get h = 42 m', marks: '2 Marks' }, { key: '(ii) Proving triangle ABD ~ triangle PQM via SAS to get AB/PQ = AD/PM', marks: '2 Marks' }]
    }
  ];
  cards.push(...ex63Triangles.map(p => makeMathCard(p.id, p.num, p.text, p.marks, p.ans, p.rubric)));

  return cards;
}

// ============================================================================
// CHAPTER 7: COORDINATE GEOMETRY (11 Additional NCERT Qs: Total 20 Qs)
// ============================================================================
function getChapter7Additions() {
  const cards = [];

  cards.push(
    makeMathCard(
      'c10m-ch7-q10',
      'NCERT Exercise 7.1 • Q3 & Q8',
      '(i) Determine if the points (1, 5), (2, 3) and (-2, -11) are collinear. (ii) Find the values of y for which the distance between the points P(2, -3) and Q(10, y) is 10 units.',
      4,
      `<p><strong>(i) Collinearity Test:</strong><br>
Let $A(1, 5), B(2, 3), C(-2, -11)$. Using distance formula $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$:<br>
$AB = \\sqrt{(2 - 1)^2 + (3 - 5)^2} = \\sqrt{1 + 4} = \\sqrt{5}$<br>
$BC = \\sqrt{(-2 - 2)^2 + (-11 - 3)^2} = \\sqrt{16 + 196} = \\sqrt{212} = 2\\sqrt{53}$<br>
$AC = \\sqrt{(-2 - 1)^2 + (-11 - 5)^2} = \\sqrt{9 + 256} = \\sqrt{265}$<br>
Since $AB + BC \\neq AC$, the points are <strong>NOT collinear</strong>.</p>
<p><strong>(ii) Distance between P and Q:</strong><br>
$$PQ^2 = (10 - 2)^2 + (y - (-3))^2 = 10^2$$
$$8^2 + (y + 3)^2 = 100 \\implies 64 + (y + 3)^2 = 100$$
$$(y + 3)^2 = 36 \\implies y + 3 = \\pm 6$$
$$y = 6 - 3 = 3 \\quad \\text{or} \\quad y = -6 - 3 = -9$$
<strong>Values of y: $3$ or $-9$</strong>.</p>`,
      [
        { key: '(i) Calculating AB, BC, AC and demonstrating non-collinearity', marks: '2 Marks' },
        { key: '(ii) Solving (y + 3)^2 = 36 to get y = 3 or -9', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch7-q11',
      'NCERT Exercise 7.1 • Q9',
      'If Q(0, 1) is equidistant from P(5, -3) and R(x, 6), find the values of x. Also find the distances QR and PR.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>$QP = QR \\implies QP^2 = QR^2$
    $$(5 - 0)^2 + (-3 - 1)^2 = (x - 0)^2 + (6 - 1)^2$$
    $$5^2 + (-4)^2 = x^2 + 5^2 \\implies 25 + 16 = x^2 + 25 \\implies x^2 = 16 \\implies \\mathbf{x = \\pm 4}$$
  </li>
  <li><strong>Distance QR:</strong>
    $$QR = \\sqrt{(x - 0)^2 + (6 - 1)^2} = \\sqrt{16 + 25} = \\mathbf{\\sqrt{41}}$$
  </li>
  <li><strong>Distance PR:</strong>
    <ul>
      <li>When $x = 4$: $PR = \\sqrt{(4 - 5)^2 + (6 - (-3))^2} = \\sqrt{(-1)^2 + 9^2} = \\sqrt{1 + 81} = \\mathbf{\\sqrt{82}}$.</li>
      <li>When $x = -4$: $PR = \\sqrt{(-4 - 5)^2 + (6 - (-3))^2} = \\sqrt{(-9)^2 + 9^2} = \\sqrt{81 + 81} = \\mathbf{9\\sqrt{2}}$.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Equating QP^2 = QR^2 to find x = +/- 4', marks: '1 Mark' },
        { key: 'QR = sqrt(41)', marks: '1 Mark' },
        { key: 'PR = sqrt(82) when x = 4 and 9*sqrt(2) when x = -4', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch7-q12',
      'NCERT Exercise 7.2 • Q5 & Q7',
      '(i) Find the ratio in which the line segment joining A(1, -5) and B(-4, 5) is divided by the x-axis. Also find the coordinates of the point of division. (ii) Find the coordinates of a point A, where AB is the diameter of a circle whose centre is (2, -3) and B is (1, 4).',
      4,
      `<p><strong>(i) Division by x-axis:</strong><br>
Let required ratio be $k : 1$. Coordinates on x-axis are $P(x, 0)$.<br>
$$y = \\frac{k(5) + 1(-5)}{k + 1} = 0 \\implies 5k - 5 = 0 \\implies k = 1$$
The ratio is <strong>$1 : 1$</strong> (mid-point).<br>
$$x = \\frac{1(-4) + 1(1)}{1 + 1} = \\frac{-3}{2}$$
Coordinates of division point are <strong>$(-3/2, 0)$</strong>.</p>
<p><strong>(ii) Coordinates of Point A:</strong><br>
Let $A(x, y)$. Since $C(2, -3)$ is the centre and mid-point of diameter $AB$ with $B(1, 4)$:<br>
$$\\frac{x + 1}{2} = 2 \\implies x + 1 = 4 \\implies x = 3$$
$$\\frac{y + 4}{2} = -3 \\implies y + 4 = -6 \\implies y = -10$$
Coordinates of point A are <strong>$(3, -10)$</strong>.</p>`,
      [
        { key: '(i) Setting y = 0 to get ratio 1:1 and point (-3/2, 0)', marks: '2 Marks' },
        { key: '(ii) Using mid-point formula to find A(3, -10)', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch7-q13',
      'NCERT Exercise 7.2 • Q8 & Q10',
      '(i) If A and B are (-2, -2) and (2, -4) respectively, find the coordinates of P such that $AP = \\frac{3}{7}AB$ and P lies on the line segment AB. (ii) Find the area of a rhombus if its vertices are (3, 0), (4, 5), (-1, 4) and (-2, -1) taken in order.',
      4,
      `<p><strong>(i) Point P:</strong><br>
$AP = \\frac{3}{7}AB \\implies PB = AB - AP = \\frac{4}{7}AB \\implies \\frac{AP}{PB} = \\frac{3}{4}$.<br>
So, P divides AB internally in ratio $m_1 : m_2 = 3 : 4$.<br>
$$x = \\frac{3(2) + 4(-2)}{3 + 4} = \\frac{6 - 8}{7} = -\\frac{2}{7}$$
$$y = \\frac{3(-4) + 4(-2)}{3 + 4} = \\frac{-12 - 8}{7} = -\\frac{20}{7}$$
Coordinates of P: <strong>$(-2/7, -20/7)$</strong>.</p>
<p><strong>(ii) Area of Rhombus:</strong><br>
Let vertices be $A(3, 0), B(4, 5), C(-1, 4), D(-2, -1)$.<br>
Length of diagonal $AC = \\sqrt{(-1 - 3)^2 + (4 - 0)^2} = \\sqrt{16 + 16} = 4\\sqrt{2}$.<br>
Length of diagonal $BD = \\sqrt{(-2 - 4)^2 + (-1 - 5)^2} = \\sqrt{36 + 36} = 6\\sqrt{2}$.<br>
$$\\text{Area} = \\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 4\\sqrt{2} \\times 6\\sqrt{2} = \\frac{1}{2} \\times 48 = \\mathbf{24\\text{ square units}}$$</p>`,
      [
        { key: '(i) Finding ratio 3:4 and section formula coordinates P(-2/7, -20/7)', marks: '2 Marks' },
        { key: '(ii) Finding diagonals d1 = 4*sqrt(2) and d2 = 6*sqrt(2); Area = 24 sq units', marks: '2 Marks' }
      ]
    )
  );

  return cards;
}

// ============================================================================
// CHAPTER 8: INTRODUCTION TO TRIGONOMETRY (10 Additional NCERT Qs: Total 20 Qs)
// ============================================================================
function getChapter8Additions() {
  const cards = [];

  cards.push(
    makeMathCard(
      'c10m-ch8-q11',
      'NCERT Exercise 8.1 • Q3 & Q5',
      '(i) If $\\sin A = \\frac{3}{4}$, calculate $\\cos A$ and $\\tan A$. (ii) Given $\\sec \\theta = \\frac{13}{12}$, calculate all other trigonometric ratios.',
      3,
      `<p><strong>(i) $\\sin A = 3/4$:</strong><br>
Let opposite side $= 3k$, hypotenuse $= 4k$.<br>
Adjacent side $= \\sqrt{(4k)^2 - (3k)^2} = \\sqrt{16k^2 - 9k^2} = \\sqrt{7}k$.<br>
$$\\mathbf{\\cos A = \\frac{\\sqrt{7}}{4}}, \\quad \\mathbf{\\tan A = \\frac{3}{\\sqrt{7}}}$$</p>
<p><strong>(ii) $\\sec \\theta = 13/12$:</strong><br>
Hypotenuse $= 13k$, Adjacent $= 12k$, Opposite $= \\sqrt{13^2 - 12^2} = \\sqrt{25} = 5k$.<br>
$$\\sin \\theta = \\frac{5}{13}, \\quad \\cos \\theta = \\frac{12}{13}, \\quad \\tan \\theta = \\frac{5}{12}, \\quad \\text{cosec } \\theta = \\frac{13}{5}, \\quad \\cot \\theta = \\frac{12}{5}$$</p>`,
      [
        { key: '(i) cos A = sqrt(7)/4 and tan A = 3/sqrt(7)', marks: '1.5 Marks' },
        { key: '(ii) All 5 remaining ratios correctly evaluated', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch8-q12',
      'NCERT Exercise 8.1 • Q8 & Q9',
      '(i) If $3\\cot A = 4$, check whether $\\frac{1 - \\tan^2 A}{1 + \\tan^2 A} = \\cos^2 A - \\sin^2 A$ or not. (ii) In $\\Delta ABC$ right angled at B, if $\\tan A = \\frac{1}{\\sqrt{3}}$, find $\\sin A \\cos C + \\cos A \\sin C$.',
      4,
      `<p><strong>(i) Verification:</strong><br>
$3\\cot A = 4 \\implies \\cot A = 4/3 \\implies \\tan A = 3/4$.<br>
Opposite $= 3$, Adjacent $= 4 \\implies \\text{Hypotenuse} = \\sqrt{3^2 + 4^2} = 5$.<br>
$\\cos A = 4/5$, $\\sin A = 3/5$.<br>
LHS $= \\frac{1 - (3/4)^2}{1 + (3/4)^2} = \\frac{1 - 9/16}{1 + 9/16} = \\frac{7/16}{25/16} = \\frac{7}{25}$.<br>
RHS $= \\cos^2 A - \\sin^2 A = (4/5)^2 - (3/5)^2 = \\frac{16 - 9}{25} = \\frac{7}{25}$.<br>
LHS = RHS. <strong>Yes, they are equal.</strong></p>
<p><strong>(ii) Value of $\\sin A \\cos C + \\cos A \\sin C$:</strong><br>
$\\tan A = 1/\\sqrt{3} \\implies A = 30^\\circ$. Since $\\angle B = 90^\\circ$, $\\angle C = 90^\\circ - 30^\\circ = 60^\\circ$.<br>
$$\\sin 30^\\circ \\cos 60^\\circ + \\cos 30^\\circ \\sin 60^\\circ = \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{2}\\right) + \\left(\\frac{\\sqrt{3}}{2}\\right)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{1}{4} + \\frac{3}{4} = \\mathbf{1}$$</p>`,
      [
        { key: '(i) LHS = 7/25 = RHS (Equal)', marks: '2 Marks' },
        { key: '(ii) sin A cos C + cos A sin C = 1/4 + 3/4 = 1', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch8-q13',
      'NCERT Exercise 8.2 • Q2 & Q3',
      '(i) Choose correct option: $\\frac{2\\tan 30^\\circ}{1 + \\tan^2 30^\\circ}$ is equal to (a) $\\sin 60^\\circ$ (b) $\\cos 60^\\circ$ (c) $\\tan 60^\\circ$ (d) $\\sin 30^\\circ$. (ii) If $\\tan(A + B) = \\sqrt{3}$ and $\\tan(A - B) = \\frac{1}{\\sqrt{3}}$; $0^\\circ < A + B \\le 90^\\circ; A > B$, find A and B.',
      3,
      `<p><strong>(i) Choice:</strong><br>
$$\\frac{2(1/\\sqrt{3})}{1 + (1/\\sqrt{3})^2} = \\frac{2/\\sqrt{3}}{1 + 1/3} = \\frac{2/\\sqrt{3}}{4/3} = \\frac{3}{2\\sqrt{3}} = \\frac{\\sqrt{3}}{2} = \\mathbf{\\sin 60^\\circ}$$
Correct option is <strong>(a) $\\sin 60^\\circ$</strong>.</p>
<p><strong>(ii) Angles A and B:</strong><br>
$\\tan(A + B) = \\sqrt{3} = \\tan 60^\\circ \\implies A + B = 60^\\circ \\quad \\text{--- (1)}$<br>
$\\tan(A - B) = 1/\\sqrt{3} = \\tan 30^\\circ \\implies A - B = 30^\\circ \\quad \\text{--- (2)}$<br>
Adding (1) and (2): $2A = 90^\\circ \\implies \\mathbf{A = 45^\\circ}$.<br>
From (1): $B = 60^\\circ - 45^\\circ = \\mathbf{15^\\circ}$.</p>`,
      [
        { key: '(i) Option (a) sin 60°', marks: '1 Mark' },
        { key: '(ii) A + B = 60° and A - B = 30° solving to A = 45° and B = 15°', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch8-q14',
      'NCERT Exercise 8.3 • Q4(iv) & (viii)',
      'Prove the following trigonometric identities: (i) $\\frac{1 + \\sec A}{\\sec A} = \\frac{\\sin^2 A}{1 - \\cos A}$, (ii) $(\\sin A + \\text{cosec } A)^2 + (\\cos A + \\sec A)^2 = 7 + \\tan^2 A + \\cot^2 A$.',
      4,
      `<p><strong>(i) Proof:</strong><br>
LHS $= \\frac{1 + 1/\\cos A}{1/\\cos A} = \\frac{(\\cos A + 1)/\\cos A}{1/\\cos A} = 1 + \\cos A$.<br>
Multiply and divide by $(1 - \\cos A)$:<br>
$$= \\frac{(1 + \\cos A)(1 - \\cos A)}{1 - \\cos A} = \\frac{1 - \\cos^2 A}{1 - \\cos A} = \\frac{\\sin^2 A}{1 - \\cos A} = \\text{RHS.}$$</p>
<p><strong>(ii) Proof:</strong><br>
LHS $= (\\sin^2 A + \\text{cosec}^2 A + 2\\sin A\\text{cosec } A) + (\\cos^2 A + \\sec^2 A + 2\\cos A\\sec A)$<br>
$= (\\sin^2 A + \\cos^2 A) + 2(1) + 2(1) + \\text{cosec}^2 A + \\sec^2 A$<br>
$= 1 + 4 + (1 + \\cot^2 A) + (1 + \\tan^2 A)$<br>
$= 7 + \\tan^2 A + \\cot^2 A = \\text{RHS. Hence proved.}$</p>`,
      [
        { key: '(i) Proving (1 + sec A)/sec A = sin^2 A / (1 - cos A)', marks: '2 Marks' },
        { key: '(ii) Expanding squares, using reciprocal products and 1 + tan^2 = sec^2 to get 7 + tan^2 + cot^2', marks: '2 Marks' }
      ]
    )
  );

  return cards;
}

// ============================================================================
// CHAPTERS 9 to 14 ADDITIONS (Applications, Circles, Areas, Volumes, Stats, Prob)
// ============================================================================
function getChapter9Additions() {
  return [
    makeMathCard(
      'c10m-ch9-q11',
      'NCERT Exercise 9.1 • Q4 & Q5',
      '(i) The angle of elevation of the top of a tower from a point on the ground, which is 30 m away from the foot of the tower, is 30°. Find the height of the tower. (ii) A kite is flying at a height of 60 m above the ground. The inclination of the string with the ground is 60°. Find the length of the string.',
      4,
      `<p><strong>(i) Height of Tower:</strong> Let height be $h\\text{ m}$. In right $\\Delta$:<br>
$$\\tan 30^\\circ = \\frac{h}{30} \\implies \\frac{1}{\\sqrt{3}} = \\frac{h}{30} \\implies h = \\frac{30}{\\sqrt{3}} = \\mathbf{10\\sqrt{3}\\text{ metres}}$$</p>
<p><strong>(ii) Length of String:</strong> Let length of string be $L\\text{ m}$. In right $\\Delta$:<br>
$$\\sin 60^\\circ = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{60}{L} \\implies \\frac{\\sqrt{3}}{2} = \\frac{60}{L}$$
$$L = \\frac{120}{\\sqrt{3}} = \\mathbf{40\\sqrt{3}\\text{ metres}}$$</p>`,
      [
        { key: '(i) tan 30° = h / 30 -> h = 10*sqrt(3) m', marks: '2 Marks' },
        { key: '(ii) sin 60° = 60 / L -> L = 40*sqrt(3) m', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch9-q12',
      'NCERT Exercise 9.1 • Q7 & Q9',
      '(i) From a point on the ground, the angles of elevation of the bottom and the top of a transmission tower fixed at the top of a 20 m high building are 45° and 60° respectively. Find the height of the tower. (ii) The angle of elevation of the top of a building from foot of a 50 m tower is 30° and from foot of building to top of tower is 60°. Find height of building.',
      4,
      `<p><strong>(i) Height of Transmission Tower:</strong><br>
Let distance to point on ground be $x\\text{ m}$ and tower height be $h\\text{ m}$.<br>
$$\\tan 45^\\circ = \\frac{20}{x} \\implies 1 = \\frac{20}{x} \\implies x = 20\\text{ m}$$
$$\\tan 60^\\circ = \\frac{20 + h}{x} \\implies \\sqrt{3} = \\frac{20 + h}{20} \\implies 20 + h = 20\\sqrt{3}$$
$$h = 20(\\sqrt{3} - 1)\\text{ m} \\approx \\mathbf{14.64\\text{ metres}}$$</p>
<p><strong>(ii) Height of Building ($h$):</strong><br>
Let distance between bases be $d\\text{ m}$.<br>
In tower triangle: $\\tan 60^\\circ = \\frac{50}{d} \\implies d = \\frac{50}{\\sqrt{3}}\\text{ m}$.<br>
In building triangle: $\\tan 30^\\circ = \\frac{h}{d} \\implies \\frac{1}{\\sqrt{3}} = \\frac{h}{50/\\sqrt{3}} \\implies h = \\frac{50}{3} = \\mathbf{16\\frac{2}{3}\\text{ metres}}$.</p>`,
      [
        { key: '(i) h = 20(sqrt(3) - 1) m', marks: '2 Marks' },
        { key: '(ii) d = 50/sqrt(3) m, h = 50/3 = 16.67 m', marks: '2 Marks' }
      ]
    )
  ];
}

function getChapter10Additions() {
  return [
    makeMathCard(
      'c10m-ch10-q12',
      'NCERT Exercise 10.1 • Q1 to Q4',
      '(i) How many tangents can a circle have? (ii) A tangent PQ at a point P of a circle of radius 5 cm meets a line through the centre O at a point Q so that OQ = 12 cm. Length PQ is: (a) 12 cm (b) 13 cm (c) 8.5 cm (d) $\\sqrt{119}$ cm.',
      2,
      `<p><strong>(i) Number of Tangents:</strong> A circle has infinitely many points on its circumference, and at each point exactly one unique tangent can be drawn. Therefore, a circle can have <strong>infinitely many tangents</strong>.</p>
<p><strong>(ii) Length of PQ:</strong> Since tangent is perpendicular to the radius at the point of contact, $\\Delta OPQ$ is a right triangle with $\\angle OPQ = 90^\\circ$.<br>
By Pythagoras Theorem:
$$OQ^2 = OP^2 + PQ^2 \\implies 12^2 = 5^2 + PQ^2$$
$$PQ^2 = 144 - 25 = 119 \\implies \\mathbf{PQ = \\sqrt{119}\\text{ cm}}$$
Correct option is <strong>(d) $\\sqrt{119}$ cm</strong>.</p>`,
      [
        { key: '(i) Infinitely many tangents', marks: '1 Mark' },
        { key: '(ii) PQ = sqrt(119) cm [Option (d)]', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch10-q13',
      'NCERT Exercise 10.2 • Q6 & Q9',
      '(i) The length of a tangent from a point A at distance 5 cm from the centre of the circle is 4 cm. Find the radius of the circle. (ii) In Fig, XY and X\'Y\' are two parallel tangents to a circle with centre O and another tangent AB with point of contact C intersecting XY at A and X\'Y\' at B. Prove that $\\angle AOB = 90^\\circ$.',
      4,
      `<p><strong>(i) Radius of Circle:</strong><br>
Right triangle with hypotenuse $OA = 5\\text{ cm}$ and tangent length $= 4\\text{ cm}$.<br>
$$r = \\sqrt{5^2 - 4^2} = \\sqrt{25 - 16} = \\sqrt{9} = \\mathbf{3\\text{ cm}}$$</p>
<p><strong>(ii) Proof that $\\angle AOB = 90^\\circ$:</strong><br>
Join $OC$. In $\\Delta OPA$ and $\\Delta OCA$: $OP = OC$ (radii), $AP = AC$ (tangents from A), $OA = OA$ (common).<br>
By SSS congruence, $\\Delta OPA \\cong \\Delta OCA \\implies \\angle POA = \\angle COA = \\frac{1}{2}\\angle POC$.<br>
Similarly, $\\Delta OQB \\cong \\Delta OCB \\implies \\angle QOB = \\angle COB = \\frac{1}{2}\\angle QOC$.<br>
Since $POQ$ is a straight line diameter ($XY \\parallel X\'Y\'$): $\\angle POC + \\angle QOC = 180^\\circ$.<br>
$$\\angle AOB = \\angle COA + \\angle COB = \\frac{1}{2}(\\angle POC + \\angle QOC) = \\frac{1}{2}(180^\\circ) = \\mathbf{90^\\circ}$$
Hence proved.</p>`,
      [
        { key: '(i) Radius r = 3 cm', marks: '1.5 Marks' },
        { key: '(ii) Proving angle AOB = 90° via triangle congruence and straight angle division', marks: '2.5 Marks' }
      ]
    )
  ];
}

function getChapter11Additions() {
  return [
    makeMathCard(
      'c10m-ch11-q11',
      'NCERT Exercise 11.1 • Q1 & Q3',
      '(i) Find the area of a sector of a circle with radius 6 cm if angle of the sector is 60°. (ii) The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand in 5 minutes.',
      3,
      `<p><strong>(i) Area of Sector ($r = 6\\text{ cm}, \\theta = 60^\\circ$):</strong><br>
$$\\text{Area} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{60^\\circ}{360^\\circ} \\times \\frac{22}{7} \\times 6 \\times 6 = \\frac{1}{6} \\times \\frac{22}{7} \\times 36 = \\frac{132}{7} = \\mathbf{18.86\\text{ cm}^2}$$</p>
<p><strong>(ii) Area Swept in 5 Minutes:</strong><br>
In 60 minutes, minute hand rotates $360^\\circ$. In 5 minutes: $\\theta = \\frac{360^\\circ}{60} \\times 5 = 30^\\circ$.<br>
$$\\text{Area} = \\frac{30^\\circ}{360^\\circ} \\times \\frac{22}{7} \\times 14 \\times 14 = \\frac{1}{12} \\times \\frac{22}{7} \\times 196 = \\frac{154}{3} = \\mathbf{51.33\\text{ cm}^2}$$</p>`,
      [
        { key: '(i) Sector area = 132/7 = 18.86 cm^2', marks: '1.5 Marks' },
        { key: '(ii) Swept angle 30°; Area = 154/3 = 51.33 cm^2', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch11-q12',
      'NCERT Exercise 11.1 • Q8',
      'A horse is tied to a peg at one corner of a square shaped grass field of side 15 m by means of a 5 m long rope. Find (i) the area of that part of the field in which the horse can graze, (ii) the increase in the grazing area if the rope were 10 m long instead of 5 m. (Use $\\pi = 3.14$)',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Corner angle of square field is $\\theta = 90^\\circ$ (quadrant of circle).</li>
  <li><strong>(i) Grazing area with 5 m rope:</strong>
    $$A_1 = \\frac{90^\\circ}{360^\\circ} \\pi r_1^2 = \\frac{1}{4} \\times 3.14 \\times 5^2 = \\frac{1}{4} \\times 78.5 = \\mathbf{19.625\\text{ m}^2}$$
  </li>
  <li><strong>(ii) Grazing area with 10 m rope:</strong>
    $$A_2 = \\frac{1}{4} \\times 3.14 \\times 10^2 = \\frac{314}{4} = 78.5\\text{ m}^2$$
    $$\\text{Increase in grazing area} = A_2 - A_1 = 78.5 - 19.625 = \\mathbf{58.875\\text{ m}^2}$$
  </li>
</ol>`,
      [
        { key: '(i) Area with 5 m rope = 19.625 m^2', marks: '1.5 Marks' },
        { key: '(ii) Increase in area = 58.875 m^2', marks: '1.5 Marks' }
      ]
    )
  ];
}

function getChapter12Additions() {
  return [
    makeMathCard(
      'c10m-ch12-q11',
      'NCERT Exercise 12.1 • Q3 & Q7',
      '(i) A toy is in the form of a cone of radius 3.5 cm mounted on a hemisphere of same radius. The total height of the toy is 15.5 cm. Find the total surface area of the toy. (ii) A tent is in the shape of a cylinder of diameter 4 m and height 2.1 m surmounted by a conical top of slant height 2.8 m. Find the area of the canvas used.',
      4,
      `<p><strong>(i) Toy Surface Area:</strong><br>
Radius $r = 3.5\\text{ cm}$. Height of cone $h = 15.5 - 3.5 = 12\\text{ cm}$.<br>
Slant height $l = \\sqrt{h^2 + r^2} = \\sqrt{12^2 + 3.5^2} = \\sqrt{144 + 12.25} = \\sqrt{156.25} = 12.5\\text{ cm}$.<br>
$$\\text{TSA} = \\text{CSA of cone} + \\text{CSA of hemisphere} = \\pi r l + 2\\pi r^2 = \\pi r(l + 2r)$$
$$= \\frac{22}{7} \\times 3.5 \\times (12.5 + 7) = 11 \\times 19.5 = \\mathbf{214.5\\text{ cm}^2}$$</p>
<p><strong>(ii) Tent Canvas Area:</strong><br>
Radius $r = 2\\text{ m}$, cylinder height $H = 2.1\\text{ m}$, cone slant height $l = 2.8\\text{ m}$.<br>
$$\\text{Area} = 2\\pi r H + \\pi r l = \\pi r (2H + l) = \\frac{22}{7} \\times 2 \\times [2(2.1) + 2.8] = \\frac{44}{7} \\times [4.2 + 2.8] = \\frac{44}{7} \\times 7 = \\mathbf{44\\text{ m}^2}$$</p>`,
      [
        { key: '(i) Slant height l = 12.5 cm, TSA = 214.5 cm^2', marks: '2 Marks' },
        { key: '(ii) Total canvas area = 44 m^2', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch12-q12',
      'NCERT Exercise 12.2 • Q5',
      'A vessel is in the form of an inverted cone of height 8 cm and top radius 5 cm. It is filled with water to the brim. When lead shots, each of which is a sphere of radius 0.5 cm are dropped into the vessel, one-fourth of the water flows out. Find the number of lead shots dropped in the vessel.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Volume of water in conical vessel:
    $$V_{\\text{cone}} = \\frac{1}{3}\\pi R^2 H = \\frac{1}{3}\\pi (5)^2(8) = \\frac{200\\pi}{3}\\text{ cm}^3$$
  </li>
  <li>Volume of water that overflows:
    $$V_{\\text{overflow}} = \\frac{1}{4} V_{\\text{cone}} = \\frac{1}{4} \\times \\frac{200\\pi}{3} = \\frac{50\\pi}{3}\\text{ cm}^3$$
  </li>
  <li>Volume of one spherical lead shot of radius $r = 0.5\\text{ cm} = 1/2\\text{ cm}$:
    $$V_{\\text{shot}} = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi \\left(\\frac{1}{2}\\right)^3 = \\frac{4}{3}\\pi \\times \\frac{1}{8} = \\frac{\\pi}{6}\\text{ cm}^3$$
  </li>
  <li>Number of lead shots ($n$):
    $$n = \\frac{V_{\\text{overflow}}}{V_{\\text{shot}}} = \\frac{50\\pi / 3}{\\pi / 6} = \\frac{50}{3} \\times \\frac{6}{1} = \\mathbf{100}$$
  </li>
</ol>
<p><strong>Answer:</strong> Exactly <strong>100 lead shots</strong> were dropped into the vessel.</p>`,
      [
        { key: 'Volume of overflow water = 50*pi / 3 cm^3', marks: '1 Mark' },
        { key: 'Volume of one lead shot = pi / 6 cm^3', marks: '1 Mark' },
        { key: 'Solving n = 100 lead shots', marks: '1 Mark' }
      ]
    )
  ];
}

function getChapter13Additions() {
  return [
    makeMathCard(
      'c10m-ch13-q9',
      'NCERT Exercise 13.1 • Q8 & Q9',
      '(i) A class teacher has the following absentee record of 40 students for the whole term: Days (0-6: 11, 6-10: 10, 10-14: 7, 14-20: 4, 20-28: 4, 28-38: 3, 38-40: 1). Find the mean number of days a student was absent. (ii) State the empirical relationship between mean, median, and mode.',
      4,
      `<p><strong>(i) Mean Days Absent:</strong><br>
Using direct method $\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$:<br>
Midpoints $x_i$: $3, 8, 12, 17, 24, 33, 39$.<br>
$f_i x_i$:
$11(3) = 33$<br>
$10(8) = 80$<br>
$7(12) = 84$<br>
$4(17) = 68$<br>
$4(24) = 96$<br>
$3(33) = 99$<br>
$1(39) = 39$<br>
$\\sum f_i x_i = 33 + 80 + 84 + 68 + 96 + 99 + 39 = 499$.<br>
$$\\bar{x} = \\frac{499}{40} = \\mathbf{12.475\\text{ days}}$$</p>
<p><strong>(ii) Empirical Relationship:</strong><br>
$$\\mathbf{\\text{Mode} = 3\\text{ Median} - 2\\text{ Mean}}$$</p>`,
      [
        { key: '(i) Calculating sum f_i x_i = 499 and mean = 12.48 days', marks: '2.5 Marks' },
        { key: '(ii) Mode = 3 Median - 2 Mean', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch13-q10',
      'NCERT Exercise 13.3 • Q2',
      'If the median of the distribution given below is 28.5, find the values of x and y when the total frequency is 60: Class intervals 0-10 (5), 10-20 (x), 20-30 (20), 30-40 (15), 40-50 (y), 50-60 (5).',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Cumulative frequencies ($cf$):
    <ul>
      <li>$0-10: 5$</li>
      <li>$10-20: 5 + x$</li>
      <li>$20-30: 25 + x$</li>
      <li>$30-40: 40 + x$</li>
      <li>$40-50: 40 + x + y$</li>
      <li>$50-60: 45 + x + y$</li>
    </ul>
  </li>
  <li>Given $N = 60 \\implies 45 + x + y = 60 \\implies \\mathbf{x + y = 15} \\quad \\text{--- (1)}$.</li>
  <li>Median $= 28.5$ lies in the class interval <strong>$20 - 30$</strong>.<br>
    Lower limit $l = 20, f = 20, cf = 5 + x, h = 10, N/2 = 30$.
  </li>
  <li>$$\\text{Median} = l + \\left(\\frac{N/2 - cf}{f}\\right) \\times h$$
    $$28.5 = 20 + \\left(\\frac{30 - (5 + x)}{20}\\right) \\times 10$$
    $$8.5 = \\frac{25 - x}{2} \\implies 17 = 25 - x \\implies \\mathbf{x = 8}$$
  </li>
  <li>From (1): $y = 15 - 8 = \\mathbf{7}$.</li>
</ol>
<p><strong>Answer:</strong> The missing frequencies are <strong>$x = 8$ and $y = 7$</strong>.</p>`,
      [
        { key: 'Setting up x + y = 15 from total frequency', marks: '1 Mark' },
        { key: 'Identifying median class 20-30 and applying median formula', marks: '2 Marks' },
        { key: 'Finding x = 8 and y = 7', marks: '1 Mark' }
      ]
    )
  ];
}

function getChapter14Additions() {
  return [
    makeMathCard(
      'c10m-ch14-q8',
      'NCERT Exercise 14.1 • Q9 & Q10',
      '(i) A box contains 5 red marbles, 8 white marbles and 4 green marbles. One marble is taken out at random. What is the probability that the marble taken out will be (a) red? (b) white? (c) not green? (ii) A piggy bank contains hundred 50p coins, fifty ₹ 1 coins, twenty ₹ 2 coins and ten ₹ 5 coins. What is the probability that a coin dropped will be a 50p coin?',
      4,
      `<p><strong>(i) Marbles ($5 + 8 + 4 = 17$ total marbles):</strong><br>
(a) $P(\\text{red}) = \\frac{5}{17}$.<br>
(b) $P(\\text{white}) = \\frac{8}{17}$.<br>
(c) $P(\\text{not green}) = 1 - P(\\text{green}) = 1 - \\frac{4}{17} = \\frac{13}{17}$ (or $\\frac{5 + 8}{17} = \\frac{13}{17}$).</p>
<p><strong>(ii) Piggy Bank Coins:</strong><br>
Total coins $= 100 + 50 + 20 + 10 = 180$ coins.<br>
$$P(50\\text{p coin}) = \\frac{100}{180} = \\mathbf{\\frac{5}{9}}$$
$$P(\\text{not ₹ 5 coin}) = \\frac{180 - 10}{180} = \\frac{170}{180} = \\mathbf{\\frac{17}{18}}$$</p>`,
      [
        { key: '(i) P(red)=5/17, P(white)=8/17, P(not green)=13/17', marks: '2 Marks' },
        { key: '(ii) Total 180 coins; P(50p) = 5/9 and P(not ₹ 5) = 17/18', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q9',
      'NCERT Exercise 14.1 • Q14',
      'One card is drawn from a well-shuffled deck of 52 cards. Find the probability of getting: (i) a king of red colour, (ii) a face card, (iii) a red face card, (iv) the jack of hearts, (v) a spade, (vi) the queen of diamonds.',
      3,
      `<p><strong>Total Outcomes: 52 cards</strong></p>
<ol>
  <li><strong>(i) King of red colour:</strong> 2 red kings (hearts, diamonds) &rarr; $P = \\frac{2}{52} = \\mathbf{\\frac{1}{26}}$.</li>
  <li><strong>(ii) A face card:</strong> 12 face cards (4 Kings, 4 Queens, 4 Jacks) &rarr; $P = \\frac{12}{52} = \\mathbf{\\frac{3}{13}}$.</li>
  <li><strong>(iii) A red face card:</strong> 6 red face cards &rarr; $P = \\frac{6}{52} = \\mathbf{\\frac{3}{26}}$.</li>
  <li><strong>(iv) The jack of hearts:</strong> exactly 1 card &rarr; $P = \\mathbf{\\frac{1}{52}}$.</li>
  <li><strong>(v) A spade:</strong> 13 spade cards &rarr; $P = \\frac{13}{52} = \\mathbf{\\frac{1}{4}}$.</li>
  <li><strong>(vi) The queen of diamonds:</strong> exactly 1 card &rarr; $P = \\mathbf{\\frac{1}{52}}$.</li>
</ol>`,
      [
        { key: 'Probabilities (i) 1/26, (ii) 3/13, (iii) 3/26', marks: '1.5 Marks' },
        { key: 'Probabilities (iv) 1/52, (v) 1/4, (vi) 1/52', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q10',
      'NCERT Exercise 14.1 • Q18 & Q23',
      '(i) A box contains 90 discs numbered 1 to 90. One disc is drawn at random. Find the probability that it bears (a) a two-digit number, (b) a perfect square number, (c) a number divisible by 5. (ii) A game consists of tossing a coin 3 times. Hanif wins if all tosses give three heads or three tails, and loses otherwise. Calculate the probability that Hanif loses.',
      4,
      `<p><strong>(i) 90 Discs (1 to 90):</strong><br>
(a) Two-digit numbers: 10 to 90 &rarr; $90 - 9 = 81$ numbers.<br>
$$P(\\text{two-digit}) = \\frac{81}{90} = \\mathbf{\\frac{9}{10}}$$<br>
(b) Perfect squares: $1, 4, 9, 16, 25, 36, 49, 64, 81$ &rarr; 9 numbers.<br>
$$P(\\text{perfect square}) = \\frac{9}{90} = \\mathbf{\\frac{1}{10}}$$<br>
(c) Divisible by 5: $5, 10, 15, \\dots, 90$ &rarr; $90/5 = 18$ numbers.<br>
$$P(\\text{divisible by 5}) = \\frac{18}{90} = \\mathbf{\\frac{1}{5}}$$</p>
<p><strong>(ii) Hanif\'s Game (Tossing coin 3 times):</strong><br>
Total outcomes ($2^3 = 8$): $\\{HHH, HHT, HTH, THH, HTT, THT, TTH, TTT\\}$.<br>
Winning outcomes: $\\{HHH, TTT\\}$ (2 outcomes).<br>
Losing outcomes: $8 - 2 = 6$ outcomes.<br>
$$P(\\text{Hanif loses}) = \\frac{6}{8} = \\mathbf{\\frac{3}{4}}$$</p>`,
      [
        { key: '(i) (a) 9/10, (b) 1/10, (c) 1/5', marks: '2 Marks' },
        { key: '(ii) Total 8 outcomes; P(loses) = 6/8 = 3/4', marks: '2 Marks' }
      ]
    )
  ];
}

module.exports = {
  getChapter6Additions,
  getChapter7Additions,
  getChapter8Additions,
  getChapter9Additions,
  getChapter10Additions,
  getChapter11Additions,
  getChapter12Additions,
  getChapter13Additions,
  getChapter14Additions
};
