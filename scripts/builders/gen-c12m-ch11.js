// scripts/builders/gen-c12m-ch11.js
// Chapter 11: Three Dimensional Geometry (12 Questions with Precision Inline 3D SVGs)
const { createQCard, saveChapter } = require('./c12m-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f5f3ff; border:1px solid #ddd6fe; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#4f46e5; font-size:1.05rem;">📐 Master Reference: Lines in 3D Space & Shortest Distance Between Skew Lines</h4>
  <svg viewBox="0 0 880 260" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #c7d2fe;">
    <!-- Panel 1: Direction Cosines & Line Equations -->
    <rect x="20" y="20" width="260" height="220" rx="10" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
    <text x="150" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#3730a3" text-anchor="middle">Direction Cosines & Line Form</text>
    <line x1="35" y1="56" x2="265" y2="56" stroke="#6366f1" stroke-width="1.5"/>
    <text x="35" y="78" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Direction Cosines $(l, m, n)$:</text>
    <text x="35" y="96" font-family="sans-serif" font-size="10.5" fill="#334155">$l = \\cos\\alpha, \\; m = \\cos\\beta, \\; n = \\cos\\gamma$</text>
    <text x="35" y="114" font-family="sans-serif" font-size="10.5" fill="#1e293b">$l^2 + m^2 + n^2 = 1$</text>
    <text x="35" y="140" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Vector Equation of Line:</text>
    <text x="35" y="158" font-family="sans-serif" font-size="10.5" fill="#334155">$\\vec{r} = \\vec{a} + \\lambda \\vec{b}$</text>
    <text x="35" y="185" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Cartesian Equation:</text>
    <text x="35" y="205" font-family="sans-serif" font-size="10.5" fill="#334155">$\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c}$</text>
    <text x="35" y="224" font-family="sans-serif" font-size="9.5" fill="#475569">where $(a, b, c)$ are direction ratios</text>

    <!-- Panel 2: Angle Between Lines -->
    <rect x="310" y="20" width="260" height="220" rx="10" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="2"/>
    <text x="440" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#5b21b6" text-anchor="middle">Angle Between Two Lines</text>
    <line x1="325" y1="56" x2="555" y2="56" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="325" y="78" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Vector Angle Formula:</text>
    <text x="325" y="98" font-family="sans-serif" font-size="10.5" fill="#334155">$\\cos\\theta = \\frac{|\\vec{b}_1 \\cdot \\vec{b}_2|}{|\\vec{b}_1||\\vec{b}_2|}$</text>
    <text x="325" y="125" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Cartesian Formula:</text>
    <text x="325" y="145" font-family="sans-serif" font-size="10" fill="#334155">$\\cos\\theta = \\frac{|a_1 a_2 + b_1 b_2 + c_1 c_2|}{\\sqrt{a_1^2+b_1^2+c_1^2}\\sqrt{a_2^2+b_2^2+c_2^2}}$</text>
    <text x="325" y="175" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">Perpendicularity Test:</text>
    <text x="325" y="195" font-family="sans-serif" font-size="10.5" fill="#b91c1c">$a_1 a_2 + b_1 b_2 + c_1 c_2 = 0$</text>
    <text x="325" y="218" font-family="sans-serif" font-size="10" fill="#047857">Parallel: $a_1/a_2 = b_1/b_2 = c_1/c_2$</text>

    <!-- Panel 3: Shortest Distance -->
    <rect x="600" y="20" width="260" height="220" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="730" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">Shortest Distance</text>
    <line x1="615" y1="56" x2="845" y2="56" stroke="#10b981" stroke-width="1.5"/>
    <text x="615" y="78" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Skew Lines Distance:</text>
    <text x="615" y="98" font-family="sans-serif" font-size="10.5" fill="#1e293b">$d = \\left| \\frac{(\\vec{b}_1 \\times \\vec{b}_2) \\cdot (\\vec{a}_2 - \\vec{a}_1)}{|\\vec{b}_1 \\times \\vec{b}_2|} \\right|$</text>
    <text x="615" y="135" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Parallel Lines Distance:</text>
    <text x="615" y="155" font-family="sans-serif" font-size="10.5" fill="#1e293b">$d = \\left| \\frac{\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1)}{|\\vec{b}|} \\right|$</text>
    <text x="615" y="190" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#b91c1c">Lines Intersect $\\iff d = 0$</text>
    <text x="615" y="210" font-family="sans-serif" font-size="10" fill="#334155">$(\\vec{b}_1 \\times \\vec{b}_2) \\cdot (\\vec{a}_2 - \\vec{a}_1) = 0$</text>
  </svg>
</div>`;

const questions = [];

// Q1 (Ex 11.1 Q1-3 - Direction Cosines from Angles & Ratios)
questions.push(createQCard(
  'c12m-ch11-q1',
  'Q1',
  'Exercise 11.1 (Verbatim)',
  `(i) If a line makes angles $90^\\circ, 135^\\circ, 45^\\circ$ with the x, y and z-axes respectively, find its direction cosines.<br>
  (ii) Find the direction cosines of a line which makes equal angles with the coordinate axes.<br>
  (iii) If a line has direction ratios $-18, 12, -4$, then what are its direction cosines?`,
  `<p><strong>(i) Line with angles $90^\\circ, 135^\\circ, 45^\\circ$:</strong></p>
  Direction cosines are:
  <ul>
    <li>$l = \\cos 90^\\circ = 0$</li>
    <li>$m = \\cos 135^\\circ = \\cos(180^\\circ - 45^\\circ) = -\\cos 45^\\circ = -\\frac{1}{\\sqrt{2}}$</li>
    <li>$n = \\cos 45^\\circ = \\frac{1}{\\sqrt{2}}$</li>
  </ul>
  Check: $l^2 + m^2 + n^2 = 0^2 + \\left(-\\frac{1}{\\sqrt{2}}\\right)^2 + \\left(\\frac{1}{\\sqrt{2}}\\right)^2 = 0 + \\frac{1}{2} + \\frac{1}{2} = 1$.
  <br><strong>Answer:</strong> The direction cosines are <strong>$\\left(0, -\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}\\right)$</strong>.

  <p><strong>(ii) Line making equal angles with coordinate axes:</strong></p>
  Let $\\alpha = \\beta = \\gamma$.
  <br>Then $l = m = n = \\cos\\alpha$.
  <br>We know that $l^2 + m^2 + n^2 = 1$:
  $$\\cos^2\\alpha + \\cos^2\\alpha + \\cos^2\\alpha = 1 \\implies 3\\cos^2\\alpha = 1 \\implies \\cos\\alpha = \\pm \\frac{1}{\\sqrt{3}}$$
  <strong>Answer:</strong> The direction cosines are <strong>$\\pm \\frac{1}{\\sqrt{3}}, \\pm \\frac{1}{\\sqrt{3}}, \\pm \\frac{1}{\\sqrt{3}}$</strong>.

  <p><strong>(iii) Direction ratios $a = -18, b = 12, c = -4$:</strong></p>
  $$\\sqrt{a^2 + b^2 + c^2} = \\sqrt{(-18)^2 + 12^2 + (-4)^2} = \\sqrt{324 + 144 + 16} = \\sqrt{484} = 22$$
  Direction cosines are:
  $$l = \\frac{a}{\\sqrt{a^2+b^2+c^2}} = \\frac{-18}{22} = -\\frac{9}{11}$$
  $$m = \\frac{b}{\\sqrt{a^2+b^2+c^2}} = \\frac{12}{22} = \\frac{6}{11}$$
  $$n = \\frac{c}{\\sqrt{a^2+b^2+c^2}} = \\frac{-4}{22} = -\\frac{2}{11}$$
  <strong>Answer:</strong> The direction cosines are <strong>$-\\frac{9}{11}, \\frac{6}{11}, -\\frac{2}{11}$</strong>.`,
  '3 Marks',
  [
    ['(i) Calculating l=0, m=-1/√2, n=1/√2', '1 Mark'],
    ['(ii) Applying 3cos²α = 1 to get ±1/√3', '1 Mark'],
    ['(iii) Computing magnitude 22 and d.c.s (-9/11, 6/11, -2/11)', '1 Mark']
  ]
));

// Q2 (Ex 11.1 Q4, Q5 - Collinearity of Points in 3D Space)
questions.push(createQCard(
  'c12m-ch11-q2',
  'Q2',
  'Exercise 11.1 (Verbatim)',
  `(i) Show that the points $(2, 3, 4)$, $(-1, -2, 1)$, and $(5, 8, 7)$ are collinear.<br>
  (ii) Find the direction cosines of the sides of the triangle whose vertices are $(3, 5, -4)$, $(-1, 1, 2)$ and $(-5, -5, -2)$.`,
  `<p><strong>(i) Collinearity of Points $A(2, 3, 4)$, $B(-1, -2, 1)$, $C(5, 8, 7)$:</strong></p>
  <ol>
    <li>Direction ratios of line segment $AB$:
      $$a_1 = -1 - 2 = -3, \\quad b_1 = -2 - 3 = -5, \\quad c_1 = 1 - 4 = -3$$
      Thus, DRs of $AB$ are $(-3, -5, -3)$ or $(3, 5, 3)$.
    </li>
    <li>Direction ratios of line segment $BC$:
      $$a_2 = 5 - (-1) = 6, \\quad b_2 = 8 - (-2) = 10, \\quad c_2 = 7 - 1 = 6$$
      Thus, DRs of $BC$ are $(6, 10, 6)$ or $(3, 5, 3)$.
    </li>
    <li>Check proportionality:
      $$\\frac{a_2}{a_1} = \\frac{6}{-3} = -2, \\quad \\frac{b_2}{b_1} = \\frac{10}{-5} = -2, \\quad \\frac{c_2}{c_1} = \\frac{6}{-3} = -2$$
      Since the direction ratios of $AB$ and $BC$ are proportional, $AB$ is parallel to $BC$.
    </li>
    <li>Because both segments share the common point $B$, the points $A, B$, and $C$ must lie on the same straight line.
      <br>Hence, $A, B, C$ are <strong>collinear</strong>.
    </li>
  </ol>

  <p><strong>(ii) Direction cosines of triangle sides $A(3, 5, -4), B(-1, 1, 2), C(-5, -5, -2)$:</strong></p>
  <ul>
    <li>Side $AB$:
      <br>DRs: $(-1 - 3, 1 - 5, 2 - (-4)) = (-4, -4, 6)$.
      <br>Distance $AB = \\sqrt{(-4)^2 + (-4)^2 + 6^2} = \\sqrt{16 + 16 + 36} = \\sqrt{68} = 2\\sqrt{17}$.
      <br>DCs: $\\mathbf{\\left(-\\frac{2}{\\sqrt{17}}, -\\frac{2}{\\sqrt{17}}, \\frac{3}{\\sqrt{17}}\\right)}$.
    </li>
    <li>Side $BC$:
      <br>DRs: $(-5 - (-1), -5 - 1, -2 - 2) = (-4, -6, -4)$.
      <br>Distance $BC = \\sqrt{(-4)^2 + (-6)^2 + (-4)^2} = \\sqrt{16 + 36 + 16} = \\sqrt{68} = 2\\sqrt{17}$.
      <br>DCs: $\\mathbf{\\left(-\\frac{2}{\\sqrt{17}}, -\\frac{3}{\\sqrt{17}}, -\\frac{2}{\\sqrt{17}}\\right)}$.
    </li>
    <li>Side $CA$:
      <br>DRs: $(3 - (-5), 5 - (-5), -4 - (-2)) = (8, 10, -2)$.
      <br>Distance $CA = \\sqrt{8^2 + 10^2 + (-2)^2} = \\sqrt{64 + 100 + 4} = \\sqrt{168} = 2\\sqrt{42}$.
      <br>DCs: $\\mathbf{\\left(\\frac{4}{\\sqrt{42}}, \\frac{5}{\\sqrt{42}}, -\\frac{1}{\\sqrt{42}}\\right)}$.
    </li>
  </ul>`,
  '4 Marks',
  [
    ['(i) Computing DRs of AB and BC and establishing proportionality with common point B', '2 Marks'],
    ['(ii) Determining lengths and DCs of all 3 triangle edges', '2 Marks']
  ]
));

// Q3 (Ex 11.2 Q1-3 - Perpendicularity & Parallelism Tests via Direction Cosines)
questions.push(createQCard(
  'c12m-ch11-q3',
  'Q3',
  'Exercise 11.2 (Verbatim)',
  `(i) Show that the three lines with direction cosines:
  $$\\left(\\frac{12}{13}, -\\frac{3}{13}, -\\frac{4}{13}\\right), \\quad \\left(\\frac{4}{13}, \\frac{12}{13}, \\frac{3}{13}\\right), \\quad \\left(\\frac{3}{13}, -\\frac{4}{13}, \\frac{12}{13}\\right)$$
  are mutually perpendicular.<br>
  (ii) Show that the line through the points $(1, -1, 2), (3, 4, -2)$ is perpendicular to the line through the points $(0, 3, 2)$ and $(3, 5, 6)$.`,
  `<p><strong>(i) Mutually Perpendicular Lines:</strong></p>
  Two lines with direction cosines $(l_1, m_1, n_1)$ and $(l_2, m_2, n_2)$ are perpendicular if:
  $$l_1 l_2 + m_1 m_2 + n_1 n_2 = 0$$
  <ol>
    <li>For Line 1 and Line 2:
      $$l_1 l_2 + m_1 m_2 + n_1 n_2 = \\left(\\frac{12}{13}\\right)\\left(\\frac{4}{13}\\right) + \\left(-\\frac{3}{13}\\right)\\left(\\frac{12}{13}\\right) + \\left(-\\frac{4}{13}\\right)\\left(\\frac{3}{13}\\right)$$
      $$= \\frac{48 - 36 - 12}{169} = \\frac{0}{169} = 0 \\implies L_1 \\perp L_2$$
    </li>
    <li>For Line 2 and Line 3:
      $$l_2 l_3 + m_2 m_3 + n_2 n_3 = \\left(\\frac{4}{13}\\right)\\left(\\frac{3}{13}\\right) + \\left(\\frac{12}{13}\\right)\\left(-\\frac{4}{13}\\right) + \\left(\\frac{3}{13}\\right)\\left(\\frac{12}{13}\\right)$$
      $$= \\frac{12 - 48 + 36}{169} = \\frac{0}{169} = 0 \\implies L_2 \\perp L_3$$
    </li>
    <li>For Line 3 and Line 1:
      $$l_3 l_1 + m_3 m_1 + n_3 n_1 = \\left(\\frac{3}{13}\\right)\\left(\\frac{12}{13}\\right) + \\left(-\\frac{4}{13}\\right)\\left(-\\frac{3}{13}\\right) + \\left(\\frac{12}{13}\\right)\\left(-\\frac{4}{13}\\right)$$
      $$= \\frac{36 + 12 - 48}{169} = \\frac{0}{169} = 0 \\implies L_3 \\perp L_1$$
    </li>
  </ol>
  Hence, the three lines are <strong>mutually perpendicular</strong>.

  <p><strong>(ii) Line through $A(1, -1, 2), B(3, 4, -2)$ and Line through $C(0, 3, 2), D(3, 5, 6)$:</strong></p>
  <ul>
    <li>Direction ratios of line $AB$:
      $$a_1 = 3 - 1 = 2, \\quad b_1 = 4 - (-1) = 5, \\quad c_1 = -2 - 2 = -4$$
    </li>
    <li>Direction ratios of line $CD$:
      $$a_2 = 3 - 0 = 3, \\quad b_2 = 5 - 3 = 2, \\quad c_2 = 6 - 2 = 4$$
    </li>
  </ul>
  Compute $a_1 a_2 + b_1 b_2 + c_1 c_2$:
  $$a_1 a_2 + b_1 b_2 + c_1 c_2 = (2)(3) + (5)(2) + (-4)(4) = 6 + 10 - 16 = 0$$
  Since the sum of the products of their direction ratios is $0$, line $AB$ is <strong>perpendicular</strong> to line $CD$.`,
  '4 Marks',
  [
    ['(i) Pairwise product evaluations showing 0 for (L1,L2), (L2,L3), and (L3,L1)', '2 Marks'],
    ['(ii) Direction ratios of AB = (2, 5, -4) and CD = (3, 2, 4)', '1 Mark'],
    ['(ii) Dot product evaluation 6 + 10 - 16 = 0 proving orthogonality', '1 Mark']
  ]
));

// Q4 (Ex 11.2 Q4, Q6 - Vector and Cartesian Equations of a Line)
questions.push(createQCard(
  'c12m-ch11-q4',
  'Q4',
  'Exercise 11.2 (Verbatim)',
  `(i) Find the vector and the Cartesian equations of the line that passes through the point $(5, 2, -4)$ and is parallel to the vector $3\\hat{i} + 2\\hat{j} - 8\\hat{k}$.<br>
  (ii) Find the Cartesian equation of the line which passes through the point $(-2, 4, -5)$ and parallel to the line given by $\\frac{x + 3}{3} = \\frac{y - 4}{5} = \\frac{z + 8}{6}$.`,
  `<p><strong>(i) Line through $(5, 2, -4)$ parallel to $3\\hat{i} + 2\\hat{j} - 8\\hat{k}$:</strong></p>
  <ul>
    <li>Point vector $\\vec{a} = 5\\hat{i} + 2\\hat{j} - 4\\hat{k}$</li>
    <li>Direction vector $\\vec{b} = 3\\hat{i} + 2\\hat{j} - 8\\hat{k}$</li>
  </ul>
  Vector equation: $\\vec{r} = \\vec{a} + \\lambda \\vec{b}$
  $$\\mathbf{\\vec{r} = (5\\hat{i} + 2\\hat{j} - 4\\hat{k}) + \\lambda(3\\hat{i} + 2\\hat{j} - 8\\hat{k})}$$
  Cartesian equation: $\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c}$
  $$\\mathbf{\\frac{x - 5}{3} = \\frac{y - 2}{2} = \\frac{z + 4}{-8}}$$

  <p><strong>(ii) Line through $(-2, 4, -5)$ parallel to given line:</strong></p>
  <ul>
    <li>The given line has direction ratios $(a, b, c) = (3, 5, 6)$.</li>
    <li>Since parallel lines have proportional direction ratios, the required line also has direction ratios $(3, 5, 6)$.</li>
    <li>Point on line: $(x_1, y_1, z_1) = (-2, 4, -5)$.</li>
  </ul>
  Cartesian equation:
  $$\\frac{x - (-2)}{3} = \\frac{y - 4}{5} = \\frac{z - (-5)}{6}$$
  $$\\mathbf{\\frac{x + 2}{3} = \\frac{y - 4}{5} = \\frac{z + 5}{6}}$$`,
  '3 Marks',
  [
    ['(i) Identifying point vector a and direction vector b and writing vector equation', '1.5 Marks'],
    ['(ii) Identifying direction ratios (3, 5, 6) and writing Cartesian equation', '1.5 Marks']
  ]
));

// Q5 (Ex 11.2 Q10, Q11 - Angle between Two Lines)
questions.push(createQCard(
  'c12m-ch11-q5',
  'Q5',
  'Exercise 11.2 (Verbatim)',
  `Find the angle between the following pairs of lines:<br>
  (i) $\\vec{r} = 2\\hat{i} - 5\\hat{j} + \\hat{k} + \\lambda(3\\hat{i} + 2\\hat{j} + 6\\hat{k})$ and $\\vec{r} = 7\\hat{i} - 6\\hat{k} + \\mu(\\hat{i} + 2\\hat{j} + 2\\hat{k})$<br>
  (ii) $\\frac{x - 2}{2} = \\frac{y - 1}{5} = \\frac{z + 3}{-3}$ and $\\frac{x + 2}{-1} = \\frac{y - 4}{8} = \\frac{z - 5}{4}$`,
  `<p><strong>(i) Angle between vector lines:</strong></p>
  Direction vectors are:
  $$\\vec{b}_1 = 3\\hat{i} + 2\\hat{j} + 6\\hat{k} \\quad \\text{and} \\quad \\vec{b}_2 = \\hat{i} + 2\\hat{j} + 2\\hat{k}$$
  <ol>
    <li>$\\vec{b}_1 \\cdot \\vec{b}_2 = (3)(1) + (2)(2) + (6)(2) = 3 + 4 + 12 = 19$.</li>
    <li>$|\\vec{b}_1| = \\sqrt{3^2 + 2^2 + 6^2} = \\sqrt{9 + 4 + 36} = \\sqrt{49} = 7$.</li>
    <li>$|\\vec{b}_2| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$.</li>
    <li>$$\\cos\\theta = \\frac{|\\vec{b}_1 \\cdot \\vec{b}_2|}{|\\vec{b}_1||\\vec{b}_2|} = \\frac{19}{(7)(3)} = \\frac{19}{21}$$
      $$\\mathbf{\\theta = \\cos^{-1}\\left(\\frac{19}{21}\\right)}$$
    </li>
  </ol>

  <p><strong>(ii) Angle between Cartesian lines:</strong></p>
  Direction ratios are $(a_1, b_1, c_1) = (2, 5, -3)$ and $(a_2, b_2, c_2) = (-1, 8, 4)$.
  <ol>
    <li>$a_1 a_2 + b_1 b_2 + c_1 c_2 = (2)(-1) + (5)(8) + (-3)(4) = -2 + 40 - 12 = 26$.</li>
    <li>$\\sqrt{a_1^2 + b_1^2 + c_1^2} = \\sqrt{4 + 25 + 9} = \\sqrt{38}$.</li>
    <li>$\\sqrt{a_2^2 + b_2^2 + c_2^2} = \\sqrt{1 + 64 + 16} = \\sqrt{81} = 9$.</li>
    <li>$$\\cos\\theta = \\frac{26}{9\\sqrt{38}} \\implies \\mathbf{\\theta = \\cos^{-1}\\left(\\frac{26}{9\\sqrt{38}}\\right)}$$</li>
  </ol>`,
  '4 Marks',
  [
    ['(i) Extracting direction vectors, dot product = 19, magnitudes 7 and 3', '1 Mark'],
    ['(i) Evaluating angle cos⁻¹(19/21)', '1 Mark'],
    ['(ii) Applying Cartesian angle formula with dot product 26', '1 Mark'],
    ['(ii) Evaluating angle cos⁻¹(26 / (9√38))', '1 Mark']
  ]
));

// Q6 (Ex 11.2 Q12 - Finding Parameter p for Perpendicular Lines)
questions.push(createQCard(
  'c12m-ch11-q6',
  'Q6',
  'Exercise 11.2 (Verbatim)',
  `Find the values of $p$ so that the lines:
  $$L_1 : \\frac{1 - x}{3} = \\frac{7y - 14}{2p} = \\frac{z - 3}{2} \\quad \\text{and} \\quad L_2 : \\frac{7 - 7x}{3p} = \\frac{y - 5}{1} = \\frac{6 - z}{5}$$
  are at right angles.`,
  `<p><em>Crucial Step:</em> Lines must first be rewritten into <strong>standard form</strong> where the coefficients of $x, y, z$ in the numerators are $+1$!</p>

  <p><strong>Step 1: Standardize Line $L_1$:</strong></p>
  <ul>
    <li>$\\frac{1 - x}{3} = \\frac{-(x - 1)}{3} = \\frac{x - 1}{-3}$</li>
    <li>$\\frac{7y - 14}{2p} = \\frac{7(y - 2)}{2p} = \\frac{y - 2}{2p/7}$</li>
    <li>$\\frac{z - 3}{2}$ is already standard.</li>
  </ul>
  $$L_1 : \\frac{x - 1}{-3} = \\frac{y - 2}{2p/7} = \\frac{z - 3}{2}$$
  Direction ratios of $L_1$: $a_1 = -3, \\; b_1 = \\frac{2p}{7}, \\; c_1 = 2$.

  <p><strong>Step 2: Standardize Line $L_2$:</strong></p>
  <ul>
    <li>$\\frac{7 - 7x}{3p} = \\frac{-7(x - 1)}{3p} = \\frac{x - 1}{-3p/7}$</li>
    <li>$\\frac{y - 5}{1}$ is standard.</li>
    <li>$\\frac{6 - z}{5} = \\frac{-(z - 6)}{5} = \\frac{z - 6}{-5}$</li>
  </ul>
  $$L_2 : \\frac{x - 1}{-3p/7} = \\frac{y - 5}{1} = \\frac{z - 6}{-5}$$
  Direction ratios of $L_2$: $a_2 = -\\frac{3p}{7}, \\; b_2 = 1, \\; c_2 = -5$.

  <p><strong>Step 3: Condition for Perpendicularity ($a_1 a_2 + b_1 b_2 + c_1 c_2 = 0$):</strong></p>
  $$(-3)\\left(-\\frac{3p}{7}\\right) + \\left(\\frac{2p}{7}\\right)(1) + (2)(-5) = 0$$
  $$\\frac{9p}{7} + \\frac{2p}{7} - 10 = 0$$
  $$\\frac{11p}{7} = 10$$
  $$11p = 70 \\implies \\mathbf{p = \\frac{70}{11}}$$`,
  '4 Marks',
  [
    ['Standardizing L1 to obtain DRs: (-3, 2p/7, 2)', '1.5 Marks'],
    ['Standardizing L2 to obtain DRs: (-3p/7, 1, -5)', '1.5 Marks'],
    ['Applying orthogonality condition a1 a2 + b1 b2 + c1 c2 = 0 to find p = 70/11', '1 Mark']
  ]
));

// Q7 (Ex 11.2 Q14 - Shortest Distance between Skew Lines in Vector Form)
questions.push(createQCard(
  'c12m-ch11-q7',
  'Q7',
  'Exercise 11.2 (Verbatim)',
  `Find the shortest distance between the lines:
  $$\\vec{r} = (\\hat{i} + 2\\hat{j} + \\hat{k}) + \\lambda(\\hat{i} - \\hat{j} + \\hat{k}) \\quad \\text{and} \\quad \\vec{r} = (2\\hat{i} - \\hat{j} - \\hat{k}) + \\mu(2\\hat{i} + \\hat{j} + 2\\hat{k})$$`,
  `<div style="margin:14px 0; padding:12px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; text-align:center;">
    <div style="font-weight:600; color:#334155; margin-bottom:8px; font-size:0.95rem;">Figure 11.1: 3D Skew Lines $L_1, L_2$ and Common Perpendicular Shortest Distance Segment $PQ$</div>
    <svg viewBox="0 0 420 220" style="max-width:420px; width:100%; height:auto; display:inline-block; background:white; border-radius:6px; border:1px solid #cbd5e1;">
      <!-- Upper Plane Line L1 -->
      <line x1="40" y1="60" x2="360" y2="40" stroke="#2563eb" stroke-width="2.2"/>
      <text x="365" y="44" font-size="11" fill="#1d4ed8" font-weight="bold">L&sub1; (along b&#8407;&sub1;)</text>
      <circle cx="120" cy="55" r="4" fill="#2563eb"/>
      <text x="110" y="45" font-size="10" fill="#2563eb" font-weight="bold">A&sub1;(a&#8407;&sub1;)</text>
      <!-- Lower Plane Line L2 (Skew, tilted) -->
      <line x1="60" y1="180" x2="340" y2="140" stroke="#059669" stroke-width="2.2"/>
      <text x="345" y="145" font-size="11" fill="#047857" font-weight="bold">L&sub2; (along b&#8407;&sub2;)</text>
      <circle cx="100" cy="174" r="4" fill="#059669"/>
      <text x="90" y="195" font-size="10" fill="#047857" font-weight="bold">A&sub2;(a&#8407;&sub2;)</text>
      <!-- Connecting Vector A2 - A1 -->
      <line x1="120" y1="55" x2="100" y2="174" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="85" y="115" font-size="9.5" fill="#64748b">a&#8407;&sub2; - a&#8407;&sub1;</text>
      <!-- Common Perpendicular Segment PQ along b1 x b2 -->
      <line x1="230" y1="48" x2="230" y2="156" stroke="#dc2626" stroke-width="3"/>
      <circle cx="230" cy="48" r="4.5" fill="#dc2626"/>
      <text x="238" y="48" font-size="11" fill="#dc2626" font-weight="bold">P</text>
      <circle cx="230" cy="156" r="4.5" fill="#dc2626"/>
      <text x="238" y="165" font-size="11" fill="#dc2626" font-weight="bold">Q</text>
      <!-- Right Angle markers at P and Q -->
      <polyline points="230,58 240,58 240,48" fill="none" stroke="#dc2626" stroke-width="1.2"/>
      <polyline points="230,146 240,146 240,156" fill="none" stroke="#dc2626" stroke-width="1.2"/>
      <!-- Normal vector indicator -->
      <line x1="230" y1="48" x2="230" y2="20" stroke="#dc2626" stroke-width="2"/>
      <polygon points="230,16 226,24 234,24" fill="#dc2626"/>
      <text x="240" y="24" font-size="10" fill="#dc2626" font-weight="bold">n&#770; = (b&#8407;&sub1; &times; b&#8407;&sub2;) / |b&#8407;&sub1; &times; b&#8407;&sub2;|</text>
      <!-- Shortest distance label -->
      <text x="245" y="105" font-size="11" fill="#b91c1c" font-weight="bold">Shortest Distance d = 3/&radic;2</text>
    </svg>
  </div>

  <p><strong>Step 1: Identify Vectors:</strong></p>
  <ul>
    <li>$\\vec{a}_1 = \\hat{i} + 2\\hat{j} + \\hat{k}, \\quad \\vec{b}_1 = \\hat{i} - \\hat{j} + \\hat{k}$</li>
    <li>$\\vec{a}_2 = 2\\hat{i} - \\hat{j} - \\hat{k}, \\quad \\vec{b}_2 = 2\\hat{i} + \\hat{j} + 2\\hat{k}$</li>
  </ul>

  <p><strong>Step 2: Compute $\\vec{a}_2 - \\vec{a}_1$:</strong></p>
  $$\\vec{a}_2 - \\vec{a}_1 = (2 - 1)\\hat{i} + (-1 - 2)\\hat{j} + (-1 - 1)\\hat{k} = \\hat{i} - 3\\hat{j} - 2\\hat{k}$$

  <p><strong>Step 3: Compute $\\vec{b}_1 \\times \\vec{b}_2$:</strong></p>
  $$\\vec{b}_1 \\times \\vec{b}_2 = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & -1 & 1 \\\\ 2 & 1 & 2 \\end{vmatrix}$$
  $$= \\hat{i}[(-1)(2) - (1)(1)] - \\hat{j}[(1)(2) - (1)(2)] + \\hat{k}[(1)(1) - (-1)(2)]$$
  $$= \\hat{i}[-2 - 1] - \\hat{j}[2 - 2] + \\hat{k}[1 + 2] = -3\\hat{i} + 0\\hat{j} + 3\\hat{k} = -3\\hat{i} + 3\\hat{k}$$
  Magnitude:
  $$|\\vec{b}_1 \\times \\vec{b}_2| = \\sqrt{(-3)^2 + 0^2 + 3^2} = \\sqrt{9 + 9} = \\sqrt{18} = 3\\sqrt{2}$$

  <p><strong>Step 4: Compute Dot Product $(\\vec{b}_1 \\times \\vec{b}_2) \\cdot (\\vec{a}_2 - \\vec{a}_1)$:</strong></p>
  $$(-3\\hat{i} + 3\\hat{k}) \\cdot (\\hat{i} - 3\\hat{j} - 2\\hat{k}) = (-3)(1) + (0)(-3) + (3)(-2) = -3 + 0 - 6 = -9$$

  <p><strong>Step 5: Apply Shortest Distance Formula:</strong></p>
  $$d = \\left| \\frac{(\\vec{b}_1 \\times \\vec{b}_2) \\cdot (\\vec{a}_2 - \\vec{a}_1)}{|\\vec{b}_1 \\times \\vec{b}_2|} \\right| = \\left| \\frac{-9}{3\\sqrt{2}} \\right| = \\frac{9}{3\\sqrt{2}} = \\frac{3}{\\sqrt{2}} = \\mathbf{\\frac{3\\sqrt{2}}{2}\\text{ units}}$$`,
  '4 Marks',
  [
    ['Extracting a1, b1, a2, b2 and calculating a2 - a1 = i - 3j - 2k', '1 Mark'],
    ['Computing cross product b1 x b2 = -3i + 3k and magnitude 3√2', '1.5 Marks'],
    ['Evaluating dot product = -9 and shortest distance d = 3/√2 units', '1.5 Marks']
  ]
));

// Q8 (Ex 11.2 Q15 - Shortest Distance between Cartesian Lines)
questions.push(createQCard(
  'c12m-ch11-q8',
  'Q8',
  'Exercise 11.2 (Verbatim)',
  `Find the shortest distance between the lines:
  $$\\frac{x + 1}{7} = \\frac{y + 1}{-6} = \\frac{z + 1}{1} \\quad \\text{and} \\quad \\frac{x - 3}{1} = \\frac{y - 5}{-2} = \\frac{z - 7}{1}$$`,
  `<p><strong>Step 1: Extract Points and Direction Vectors:</strong></p>
  <ul>
    <li>Line 1 passes through $A(-1, -1, -1) \\implies \\vec{a}_1 = -\\hat{i} - \\hat{j} - \\hat{k}$.
      <br>Direction ratios: $\\vec{b}_1 = 7\\hat{i} - 6\\hat{j} + \\hat{k}$.
    </li>
    <li>Line 2 passes through $B(3, 5, 7) \\implies \\vec{a}_2 = 3\\hat{i} + 5\\hat{j} + 7\\hat{k}$.
      <br>Direction ratios: $\\vec{b}_2 = \\hat{i} - 2\\hat{j} + \\hat{k}$.
    </li>
  </ul>

  <p><strong>Step 2: Vectors $\\vec{a}_2 - \\vec{a}_1$ and $\\vec{b}_1 \\times \\vec{b}_2$:</strong></p>
  $$\\vec{a}_2 - \\vec{a}_1 = [3 - (-1)]\\hat{i} + [5 - (-1)]\\hat{j} + [7 - (-1)]\\hat{k} = 4\\hat{i} + 6\\hat{j} + 8\\hat{k}$$
  $$\\vec{b}_1 \\times \\vec{b}_2 = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 7 & -6 & 1 \\\\ 1 & -2 & 1 \\end{vmatrix}$$
  $$= \\hat{i}[(-6)(1) - (1)(-2)] - \\hat{j}[(7)(1) - (1)(1)] + \\hat{k}[(7)(-2) - (-6)(1)]$$
  $$= \\hat{i}[-6 + 2] - \\hat{j}[7 - 1] + \\hat{k}[-14 + 6] = -4\\hat{i} - 6\\hat{j} - 8\\hat{k}$$
  Magnitude:
  $$|\\vec{b}_1 \\times \\vec{b}_2| = \\sqrt{(-4)^2 + (-6)^2 + (-8)^2} = \\sqrt{16 + 36 + 64} = \\sqrt{116} = 2\\sqrt{29}$$

  <p><strong>Step 3: Compute Dot Product:</strong></p>
  $$(\\vec{b}_1 \\times \\vec{b}_2) \\cdot (\\vec{a}_2 - \\vec{a}_1) = (-4)(4) + (-6)(6) + (-8)(8) = -16 - 36 - 64 = -116$$

  <p><strong>Step 4: Shortest Distance:</strong></p>
  $$d = \\left| \\frac{-116}{2\\sqrt{29}} \\right| = \\frac{116}{2\\sqrt{29}} = \\frac{58}{\\sqrt{29}} = \\frac{2 \\times 29}{\\sqrt{29}} = \\mathbf{2\\sqrt{29}\\text{ units}}$$`,
  '4 Marks',
  [
    ['Extracting points A(-1,-1,-1), B(3,5,7) and DRs (7,-6,1), (1,-2,1)', '1 Mark'],
    ['Evaluating cross product b1 x b2 = -4i - 6j - 8k and magnitude 2√29', '1.5 Marks'],
    ['Evaluating dot product -116 and distance d = 2√29 units', '1.5 Marks']
  ]
));

// Q9 (Ex 11.2 Q17 - Skew Lines with Parameter Expressions)
questions.push(createQCard(
  'c12m-ch11-q9',
  'Q9',
  'Exercise 11.2 (Verbatim)',
  `Find the shortest distance between the lines whose vector equations are:
  $$\\vec{r} = (1 - t)\\hat{i} + (t - 2)\\hat{j} + (3 - 2t)\\hat{k} \\quad \\text{and} \\quad \\vec{r} = (s + 1)\\hat{i} + (2s - 1)\\hat{j} - (2s + 1)\\hat{k}$$`,
  `<p><strong>Step 1: Separate into standard $\\vec{r} = \\vec{a} + \\lambda\\vec{b}$ form:</strong></p>
  <ol>
    <li>For Line 1:
      $$\\vec{r} = (\\hat{i} - 2\\hat{j} + 3\\hat{k}) + t(-\\hat{i} + \\hat{j} - 2\\hat{k})$$
      Thus: $\\vec{a}_1 = \\hat{i} - 2\\hat{j} + 3\\hat{k}, \\quad \\vec{b}_1 = -\\hat{i} + \\hat{j} - 2\\hat{k}$.
    </li>
    <li>For Line 2:
      $$\\vec{r} = (\\hat{i} - \\hat{j} - \\hat{k}) + s(\\hat{i} + 2\\hat{j} - 2\\hat{k})$$
      Thus: $\\vec{a}_2 = \\hat{i} - \\hat{j} - \\hat{k}, \\quad \\vec{b}_2 = \\hat{i} + 2\\hat{j} - 2\\hat{k}$.
    </li>
  </ol>

  <p><strong>Step 2: Vectors $\\vec{a}_2 - \\vec{a}_1$ and $\\vec{b}_1 \\times \\vec{b}_2$:</strong></p>
  $$\\vec{a}_2 - \\vec{a}_1 = (1 - 1)\\hat{i} + (-1 - (-2))\\hat{j} + (-1 - 3)\\hat{k} = 0\\hat{i} + \\hat{j} - 4\\hat{k}$$
  $$\\vec{b}_1 \\times \\vec{b}_2 = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ -1 & 1 & -2 \\\\ 1 & 2 & -2 \\end{vmatrix}$$
  $$= \\hat{i}[-2 - (-4)] - \\hat{j}[2 - (-2)] + \\hat{k}[-2 - 1] = 2\\hat{i} - 4\\hat{j} - 3\\hat{k}$$
  Magnitude:
  $$|\\vec{b}_1 \\times \\vec{b}_2| = \\sqrt{2^2 + (-4)^2 + (-3)^2} = \\sqrt{4 + 16 + 9} = \\sqrt{29}$$

  <p><strong>Step 3: Compute Dot Product:</strong></p>
  $$(\\vec{b}_1 \\times \\vec{b}_2) \\cdot (\\vec{a}_2 - \\vec{a}_1) = (2)(0) + (-4)(1) + (-3)(-4) = 0 - 4 + 12 = 8$$

  <p><strong>Step 4: Shortest Distance:</strong></p>
  $$d = \\left| \\frac{8}{\\sqrt{29}} \\right| = \\mathbf{\\frac{8}{\\sqrt{29}}\\text{ units}}$$`,
  '4 Marks',
  [
    ['Rewriting vector parametric forms into a1, b1 and a2, b2', '1.5 Marks'],
    ['Evaluating cross product 2i - 4j - 3k and magnitude √29', '1 Mark'],
    ['Evaluating dot product = 8 and shortest distance = 8/√29 units', '1.5 Marks']
  ]
));

// Q10 (Ex 11.2 Q16 - Shortest Distance between Parallel Lines)
questions.push(createQCard(
  'c12m-ch11-q10',
  'Q10',
  'Exercise 11.2 (Verbatim)',
  `Find the shortest distance between the lines:
  $$\\vec{r} = (\\hat{i} + 2\\hat{j} + 3\\hat{k}) + \\lambda(2\\hat{i} + 3\\hat{j} + 4\\hat{k}) \\quad \\text{and} \\quad \\vec{r} = (2\\hat{i} + 4\\hat{j} + 5\\hat{k}) + \\mu(4\\hat{i} + 6\\hat{j} + 8\\hat{k})$$`,
  `<p><strong>Step 1: Check if Lines are Parallel:</strong></p>
  The direction vectors are $\\vec{b}_1 = 2\\hat{i} + 3\\hat{j} + 4\\hat{k}$ and $\\vec{b}_2 = 4\\hat{i} + 6\\hat{j} + 8\\hat{k} = 2(2\\hat{i} + 3\\hat{j} + 4\\hat{k}) = 2\\vec{b}_1$.
  <br>Since $\\vec{b}_2$ is a scalar multiple of $\\vec{b}_1$, the two lines are <strong>parallel</strong> with common direction vector $\\vec{b} = 2\\hat{i} + 3\\hat{j} + 4\\hat{k}$.
  <br>Points on the lines: $\\vec{a}_1 = \\hat{i} + 2\\hat{j} + 3\\hat{k}$ and $\\vec{a}_2 = 2\\hat{i} + 4\\hat{j} + 5\\hat{k}$.

  <p><strong>Step 2: Compute $\\vec{a}_2 - \\vec{a}_1$:</strong></p>
  $$\\vec{a}_2 - \\vec{a}_1 = (2 - 1)\\hat{i} + (4 - 2)\\hat{j} + (5 - 3)\\hat{k} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$$

  <p><strong>Step 3: Compute Cross Product $\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1)$:</strong></p>
  $$\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1) = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 2 & 3 & 4 \\\\ 1 & 2 & 2 \\end{vmatrix}$$
  $$= \\hat{i}(6 - 8) - \\hat{j}(4 - 4) + \\hat{k}(4 - 3) = -2\\hat{i} - 0\\hat{j} + \\hat{k} = -2\\hat{i} + \\hat{k}$$
  Magnitude:
  $$|\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1)| = \\sqrt{(-2)^2 + 0^2 + 1^2} = \\sqrt{4 + 1} = \\sqrt{5}$$
  Magnitude of $\\vec{b}$:
  $$|\\vec{b}| = \\sqrt{2^2 + 3^2 + 4^2} = \\sqrt{4 + 9 + 16} = \\sqrt{29}$$

  <p><strong>Step 4: Shortest Distance Formula for Parallel Lines:</strong></p>
  $$d = \\frac{|\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1)|}{|\\vec{b}|} = \\frac{\\sqrt{5}}{\\sqrt{29}} = \\mathbf{\\sqrt{\\frac{5}{29}}\\text{ units}}$$`,
  '4 Marks',
  [
    ['Identifying parallel nature of lines with common b = 2i + 3j + 4k', '1 Mark'],
    ['Computing a2 - a1 = i + 2j + 2k', '1 Mark'],
    ['Evaluating cross product b x (a2 - a1) = -2i + k and magnitude √5', '1 Mark'],
    ['Applying parallel distance formula yielding √(5/29) units', '1 Mark']
  ]
));

// Q11 (Intersection of Two Lines)
questions.push(createQCard(
  'c12m-ch11-q11',
  'Q11',
  'Exercise 11.2 & Board Exam Classic',
  `Show that the lines:
  $$\\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{4} \\quad \\text{and} \\quad \\frac{x - 4}{5} = \\frac{y - 1}{2} = z$$
  intersect. Also find their point of intersection.`,
  `<div style="margin:14px 0; padding:12px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; text-align:center;">
    <div style="font-weight:600; color:#334155; margin-bottom:8px; font-size:0.95rem;">Figure 11.2: Intersection of 3D lines at unique point $P(-1, -1, -1)$</div>
    <svg viewBox="0 0 380 180" style="max-width:380px; width:100%; height:auto; display:inline-block; background:white; border-radius:6px; border:1px solid #cbd5e1;">
      <!-- Line 1 -->
      <line x1="40" y1="140" x2="340" y2="40" stroke="#2563eb" stroke-width="2.2"/>
      <text x="310" y="32" font-size="10" fill="#1d4ed8" font-weight="bold">Line 1 (DRs: 2, 3, 4)</text>
      <!-- Line 2 -->
      <line x1="40" y1="40" x2="340" y2="140" stroke="#059669" stroke-width="2.2"/>
      <text x="310" y="158" font-size="10" fill="#047857" font-weight="bold">Line 2 (DRs: 5, 2, 1)</text>
      <!-- Intersection Point P at (190, 90) -->
      <circle cx="190" cy="90" r="5.5" fill="#dc2626"/>
      <circle cx="190" cy="90" r="10" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="2,2"/>
      <text x="190" y="75" font-size="11.5" fill="#dc2626" font-weight="bold" text-anchor="middle">Intersection Point P(-1, -1, -1)</text>
      <text x="190" y="112" font-size="10" fill="#475569" text-anchor="middle">(&lambda; = -1, &mu; = -1 satisfies all 3 coordinate equations)</text>
    </svg>
  </div>

  <p><strong>Step 1: General Coordinates of Points on Each Line:</strong></p>
  <ul>
    <li>For Line 1: $\\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{4} = \\lambda$
      $$P(\\lambda) = (2\\lambda + 1, \\; 3\\lambda + 2, \\; 4\\lambda + 3)$$
    </li>
    <li>For Line 2: $\\frac{x - 4}{5} = \\frac{y - 1}{2} = \\frac{z - 0}{1} = \\mu$
      $$Q(\\mu) = (5\\mu + 4, \\; 2\\mu + 1, \\; \\mu)$$
    </li>
  </ul>

  <p><strong>Step 2: Equating Coordinates:</strong></p>
  If the lines intersect, there exist unique values of $\\lambda$ and $\\mu$ such that $P = Q$:
  $$\\begin{aligned}
  2\\lambda + 1 &= 5\\mu + 4 \\implies 2\\lambda - 5\\mu = 3 \\quad \\dots (1) \\\\
  3\\lambda + 2 &= 2\\mu + 1 \\implies 3\\lambda - 2\\mu = -1 \\quad \\dots (2) \\\\
  4\\lambda + 3 &= \\mu \\implies 4\\lambda - \\mu = -3 \\quad \\dots (3)
  \\end{aligned}$$

  <p><strong>Step 3: Solve (1) and (2):</strong></p>
  Multiply (1) by 2 and (2) by 5:
  $$4\\lambda - 10\\mu = 6$$
  $$15\\lambda - 10\\mu = -5$$
  Subtracting:
  $$-11\\lambda = 11 \\implies \\lambda = -1$$
  Substitute $\\lambda = -1$ into (1):
  $$2(-1) - 5\\mu = 3 \\implies -2 - 5\\mu = 3 \\implies -5\\mu = 5 \\implies \\mu = -1$$

  <p><strong>Step 4: Verify Consistency with Equation (3):</strong></p>
  $$\\text{LHS} = 4\\lambda - \\mu = 4(-1) - (-1) = -4 + 1 = -3 = \\text{RHS}$$
  Since the values $\\lambda = -1, \\mu = -1$ satisfy all three equations, the lines <strong>intersect</strong>.

  <p><strong>Step 5: Point of Intersection:</strong></p>
  Substitute $\\lambda = -1$ into $P$:
  $$x = 2(-1) + 1 = -1$$
  $$y = 3(-1) + 2 = -1$$
  $$z = 4(-1) + 3 = -1$$
  <p><strong>Answer:</strong> The lines intersect at the point <strong>$(-1, -1, -1)$</strong>.</p>`,
  '4 Marks',
  [
    ['Parametric general points on both lines in terms of λ and μ', '1 Mark'],
    ['System of three linear equations in λ and μ', '1 Mark'],
    ['Solving two equations to get λ = -1, μ = -1 and verifying in third equation', '1 Mark'],
    ['Coordinates of intersection point (-1, -1, -1)', '1 Mark']
  ]
));

// Q12 (Ex 11.2 Q13 - Perpendicular Foot and Image of a Point with respect to a Line)
questions.push(createQCard(
  'c12m-ch11-q12',
  'Q12',
  'Exercise 11.2 Board Favorite',
  `Find the coordinates of the foot of the perpendicular and the length of perpendicular drawn from the point $P(1, 2, 3)$ to the line $\\frac{x - 6}{3} = \\frac{y - 7}{2} = \\frac{z - 7}{-2}$. Also find the image of the point in the line.`,
  `<div style="margin:14px 0; padding:12px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; text-align:center;">
    <div style="font-weight:600; color:#334155; margin-bottom:8px; font-size:0.95rem;">Figure 11.3: Foot of Perpendicular $N(3, 5, 9)$ and Reflected Image $Q(5, 8, 15)$</div>
    <svg viewBox="0 0 420 220" style="max-width:420px; width:100%; height:auto; display:inline-block; background:white; border-radius:6px; border:1px solid #cbd5e1;">
      <!-- Given Line L -->
      <line x1="30" y1="110" x2="390" y2="110" stroke="#4f46e5" stroke-width="2.5"/>
      <text x="320" y="100" font-size="10.5" fill="#4338ca" font-weight="bold">Line L (DRs: 3, 2, -2)</text>
      <!-- Point P above -->
      <circle cx="210" cy="35" r="5" fill="#2563eb"/>
      <text x="220" y="38" font-size="11.5" fill="#1d4ed8" font-weight="bold">P(1, 2, 3)</text>
      <!-- Foot N on line -->
      <circle cx="210" cy="110" r="5" fill="#16a34a"/>
      <text x="220" y="125" font-size="11" fill="#15803d" font-weight="bold">Foot N(3, 5, 9)</text>
      <!-- Perpendicular segment PN -->
      <line x1="210" y1="35" x2="210" y2="110" stroke="#dc2626" stroke-width="2.2"/>
      <!-- Perpendicular box at N -->
      <polyline points="210,98 222,98 222,110" fill="none" stroke="#dc2626" stroke-width="1.2"/>
      <text x="140" y="75" font-size="10.5" fill="#dc2626" font-weight="bold">Length = 7 units</text>
      <!-- Reflected Image Q below -->
      <line x1="210" y1="110" x2="210" y2="185" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
      <circle cx="210" cy="185" r="5" fill="#7c3aed"/>
      <text x="220" y="190" font-size="11.5" fill="#6d28d9" font-weight="bold">Image Q(5, 8, 15)</text>
      <text x="140" y="150" font-size="10.5" fill="#6d28d9">Equal: 7 units</text>
      <!-- Tick marks for equal distance -->
      <line x1="205" y1="70" x2="215" y2="70" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="205" y1="145" x2="215" y2="145" stroke="#7c3aed" stroke-width="1.5"/>
    </svg>
  </div>

  <p>Let $L$ be the given line: $\\frac{x - 6}{3} = \\frac{y - 7}{2} = \\frac{z - 7}{-2} = \\lambda$.</p>
  <p>Any arbitrary point $N$ on the line has coordinates:</p>
  $$N(3\\lambda + 6, \\; 2\\lambda + 7, \\; -2\\lambda + 7)$$
  <p>If $N$ is the foot of the perpendicular from $P(1, 2, 3)$ to the line, then vector $\\vec{PN}$ is perpendicular to the line.</p>

  <p><strong>Step 1: Direction Ratios of $PN$:</strong></p>
  $$a_1 = (3\\lambda + 6) - 1 = 3\\lambda + 5$$
  $$b_1 = (2\\lambda + 7) - 2 = 2\\lambda + 5$$
  $$c_1 = (-2\\lambda + 7) - 3 = -2\\lambda + 4$$
  Direction ratios of the line are $a_2 = 3, \\; b_2 = 2, \\; c_2 = -2$.

  <p><strong>Step 2: Orthogonality Condition $a_1 a_2 + b_1 b_2 + c_1 c_2 = 0$:</strong></p>
  $$3(3\\lambda + 5) + 2(2\\lambda + 5) - 2(-2\\lambda + 4) = 0$$
  $$(9\\lambda + 15) + (4\\lambda + 10) + (4\\lambda - 8) = 0$$
  $$17\\lambda + 17 = 0 \\implies 17\\lambda = -17 \\implies \\mathbf{\\lambda = -1}$$

  <p><strong>Step 3: Foot of Perpendicular $N$:</strong></p>
  $$x = 3(-1) + 6 = 3, \\quad y = 2(-1) + 7 = 5, \\quad z = -2(-1) + 7 = 9$$
  $$\\mathbf{N = (3, 5, 9)}$$

  <p><strong>Step 4: Length of Perpendicular $PN$:</strong></p>
  $$PN = \\sqrt{(3 - 1)^2 + (5 - 2)^2 + (9 - 3)^2} = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = \\mathbf{7\\text{ units}}$$

  <p><strong>Step 5: Image $Q(x_2, y_2, z_2)$ of Point $P$:</strong></p>
  Since $N$ is the midpoint of segment $PQ$:
  $$\\frac{1 + x_2}{2} = 3 \\implies x_2 = 6 - 1 = 5$$
  $$\\frac{2 + y_2}{2} = 5 \\implies y_2 = 10 - 2 = 8$$
  $$\\frac{3 + z_2}{2} = 9 \\implies z_2 = 18 - 3 = 15$$
  $$\\mathbf{\\text{Image Point } Q = (5, 8, 15)}$$`,
  '5 Marks',
  [
    ['General point on line N in terms of parameter λ', '1 Mark'],
    ['Applying orthogonality condition PN . b = 0 to get λ = -1', '1.5 Marks'],
    ['Coordinates of foot N(3, 5, 9)', '1 Mark'],
    ['Perpendicular length PN = 7 units and Image Q(5, 8, 15)', '1.5 Marks']
  ]
));

saveChapter(
  11,
  'Three Dimensional Geometry',
  svgDiagram,
  'NCERT Exercises 11.1 & 11.2 (12 Verbatim Core Questions)',
  questions,
  'Linear Programming'
);
