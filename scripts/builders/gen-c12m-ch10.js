// scripts/builders/gen-c12m-ch10.js
// Chapter 10: Vector Algebra (12 Questions with Precision Inline Vector SVGs)
const { createQCard, saveChapter } = require('./c12m-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f5f3ff; border:1px solid #ddd6fe; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#4f46e5; font-size:1.05rem;">📐 Master Reference: Vector Operations, Dot Product & Cross Product</h4>
  <svg viewBox="0 0 880 260" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #c7d2fe;">
    <!-- Panel 1: Vector Fundamentals & Section Formula -->
    <rect x="20" y="20" width="260" height="220" rx="10" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
    <text x="150" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#3730a3" text-anchor="middle">Components & Unit Vectors</text>
    <line x1="35" y1="56" x2="265" y2="56" stroke="#6366f1" stroke-width="1.5"/>
    <text x="35" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Magnitude & Unit Vector:</text>
    <text x="35" y="98" font-family="sans-serif" font-size="10.5" fill="#334155">$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}, \\quad \\hat{a} = \\frac{\\vec{a}}{|\\vec{a}|}$</text>
    <text x="35" y="125" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Direction Cosines:</text>
    <text x="35" y="145" font-family="sans-serif" font-size="10.5" fill="#334155">$l = \\frac{a_1}{|\\vec{a}|}, \\; m = \\frac{a_2}{|\\vec{a}|}, \\; n = \\frac{a_3}{|\\vec{a}|}$</text>
    <text x="35" y="165" font-family="sans-serif" font-size="10.5" fill="#1e293b">$l^2 + m^2 + n^2 = 1$</text>
    <text x="35" y="195" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Section Formula (Internal):</text>
    <text x="35" y="215" font-family="sans-serif" font-size="10.5" fill="#334155">$\\vec{r} = \\frac{m\\vec{b} + n\\vec{a}}{m + n}$</text>

    <!-- Panel 2: Scalar (Dot) Product -->
    <rect x="310" y="20" width="260" height="220" rx="10" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="2"/>
    <text x="440" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#5b21b6" text-anchor="middle">Scalar (Dot) Product</text>
    <line x1="325" y1="56" x2="555" y2="56" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="325" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Definition:</text>
    <text x="325" y="98" font-family="sans-serif" font-size="10.5" fill="#334155">$\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}| \\cos\\theta = a_1 b_1 + a_2 b_2 + a_3 b_3$</text>
    <text x="325" y="125" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Perpendicularity Test:</text>
    <text x="325" y="145" font-family="sans-serif" font-size="10.5" fill="#b91c1c">$\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0$</text>
    <text x="325" y="175" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Projection of $\\vec{a}$ on $\\vec{b}$:</text>
    <text x="325" y="195" font-family="sans-serif" font-size="10.5" fill="#1e293b">$\\text{Proj}_{\\vec{b}}(\\vec{a}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = \\vec{a} \\cdot \\hat{b}$</text>
    <text x="325" y="218" font-family="sans-serif" font-size="10" fill="#475569">Scalar value (length with sign)</text>

    <!-- Panel 3: Vector (Cross) Product -->
    <rect x="600" y="20" width="260" height="220" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="730" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">Vector (Cross) Product</text>
    <line x1="615" y1="56" x2="845" y2="56" stroke="#10b981" stroke-width="1.5"/>
    <text x="615" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Determinant Form:</text>
    <text x="615" y="98" font-family="sans-serif" font-size="10.5" fill="#334155">$\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix}$</text>
    <text x="615" y="130" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Collinearity / Parallelism:</text>
    <text x="615" y="150" font-family="sans-serif" font-size="10.5" fill="#334155">$\\vec{a} \\parallel \\vec{b} \\iff \\vec{a} \\times \\vec{b} = \\vec{0}$</text>
    <text x="615" y="175" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Areas of Geometrical Figures:</text>
    <text x="615" y="195" font-family="sans-serif" font-size="10.5" fill="#1e293b">&bull; Parallelogram: $|\\vec{a} \\times \\vec{b}|$</text>
    <text x="615" y="215" font-family="sans-serif" font-size="10.5" fill="#1e293b">&bull; Triangle: $\\frac{1}{2}|\\vec{a} \\times \\vec{b}|$</text>
  </svg>
</div>`;

const questions = [];

// Q1 (Ex 10.1 Q1-4 - Classifying Quantities & Vector Types)
questions.push(createQCard(
  'c12m-ch10-q1',
  'Q1',
  'Exercise 10.1 (Verbatim)',
  `(i) Represent graphically a displacement of $40\\text{ km}$, $30^\\circ$ east of north.<br>
  (ii) Classify the following measures as scalars and vectors:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;(a) $10\\text{ kg}$ &nbsp;&nbsp;&nbsp;&nbsp; (b) $2\\text{ meters north-west}$ &nbsp;&nbsp;&nbsp;&nbsp; (c) $40^\\circ$ &nbsp;&nbsp;&nbsp;&nbsp; (d) $40\\text{ Watt}$ &nbsp;&nbsp;&nbsp;&nbsp; (e) $10^{-19}\\text{ Coulomb}$ &nbsp;&nbsp;&nbsp;&nbsp; (f) $20\\text{ m/s}^2$<br>
  (iii) In a square with vectors $\\vec{a}, \\vec{b}, \\vec{c}, \\vec{d}$, identify: (a) Co-initial vectors, (b) Equal vectors, (c) Collinear but not equal vectors.`,
  `<div style="display:flex; flex-wrap:wrap; gap:16px; justify-content:center; margin:14px 0;">
    <!-- Sub-figure 1: Displacement 40km, 30 deg East of North -->
    <div style="flex:1 1 280px; max-width:320px; padding:10px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; text-align:center;">
      <div style="font-weight:600; color:#334155; margin-bottom:6px; font-size:0.9rem;">Figure 10.1(a): Displacement $40\\text{ km}$, $30^\\circ$ E of N</div>
      <svg viewBox="0 0 240 220" style="width:100%; height:auto; display:inline-block; background:white; border-radius:6px; border:1px solid #cbd5e1;">
        <!-- Axes -->
        <line x1="120" y1="20" x2="120" y2="200" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="20" y1="120" x2="220" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- Labels -->
        <text x="120" y="16" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">N (North)</text>
        <text x="120" y="214" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">S (South)</text>
        <text x="225" y="124" font-size="11" font-weight="bold" fill="#1e293b">E (East)</text>
        <text x="15" y="124" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="end">W (West)</text>
        <text x="110" y="132" font-size="10" fill="#64748b">O</text>
        <!-- 30 deg East of North: vector angle from +x is 60 deg, length = 80px -->
        <!-- dx = 80 * sin(30) = 40, dy = -80 * cos(30) = -69.28 -> (120+40, 120-69) = (160, 51) -->
        <line x1="120" y1="120" x2="160" y2="51" stroke="#2563eb" stroke-width="2.5"/>
        <polygon points="163,45 152,51 159,57" fill="#2563eb"/>
        <!-- Arc from N axis to vector -->
        <path d="M 120 75 A 45 45 0 0 1 142.5 81" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        <text x="133" y="68" font-size="10" fill="#dc2626" font-weight="bold">30&deg;</text>
        <!-- Vector Label -->
        <text x="165" y="65" font-size="10.5" fill="#1d4ed8" font-weight="bold">P(40 km)</text>
        <circle cx="120" cy="120" r="3" fill="#1e293b"/>
      </svg>
    </div>

    <!-- Sub-figure 2: Square Vectors -->
    <div style="flex:1 1 280px; max-width:320px; padding:10px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; text-align:center;">
      <div style="font-weight:600; color:#334155; margin-bottom:6px; font-size:0.9rem;">Figure 10.1(b): Square with Vectors $\\vec{a}, \\vec{b}, \\vec{c}, \\vec{d}$</div>
      <svg viewBox="0 0 240 220" style="width:100%; height:auto; display:inline-block; background:white; border-radius:6px; border:1px solid #cbd5e1;">
        <!-- Square vertices: Top-Left (50, 40), Top-Right (170, 40), Bottom-Right (170, 160), Bottom-Left (50, 160) -->
        <!-- Vector a: Top-Left to Top-Right -->
        <line x1="50" y1="40" x2="170" y2="40" stroke="#4f46e5" stroke-width="2"/>
        <polygon points="172,40 162,36 162,44" fill="#4f46e5"/>
        <text x="110" y="32" font-size="11" fill="#4f46e5" font-weight="bold" text-anchor="middle">&rarr; a</text>
        <!-- Vector b: Top-Right to Bottom-Right -->
        <line x1="170" y1="40" x2="170" y2="160" stroke="#059669" stroke-width="2"/>
        <polygon points="170,162 166,152 174,152" fill="#059669"/>
        <text x="185" y="105" font-size="11" fill="#059669" font-weight="bold">&darr; b</text>
        <!-- Vector c: Bottom-Right to Bottom-Left -->
        <line x1="170" y1="160" x2="50" y2="160" stroke="#dc2626" stroke-width="2"/>
        <polygon points="48,160 58,156 58,164" fill="#dc2626"/>
        <text x="110" y="178" font-size="11" fill="#dc2626" font-weight="bold" text-anchor="middle">&larr; c</text>
        <!-- Vector d: Top-Left to Bottom-Left -->
        <line x1="50" y1="40" x2="50" y2="160" stroke="#059669" stroke-width="2"/>
        <polygon points="50,162 46,152 54,152" fill="#059669"/>
        <text x="32" y="105" font-size="11" fill="#059669" font-weight="bold">&darr; d</text>
        <!-- Vertex dots -->
        <circle cx="50" cy="40" r="4" fill="#3730a3"/>
        <text x="42" y="34" font-size="10" fill="#3730a3">A</text>
        <circle cx="170" cy="40" r="3" fill="#64748b"/>
        <circle cx="170" cy="160" r="3" fill="#64748b"/>
        <circle cx="50" cy="160" r="3" fill="#64748b"/>
      </svg>
    </div>
  </div>

  <p><strong>(i) Graphical Representation:</strong></p>
  <ul>
    <li>Choose a suitable scale: Let $1\\text{ cm} = 10\\text{ km}$, so a vector of length $4\\text{ cm}$ represents $40\\text{ km}$.</li>
    <li>From the origin $O$, draw a directed ray making an angle of $30^\\circ$ with the positive North axis towards the East axis.</li>
    <li>The terminal point $P$ at distance $4\\text{ cm}$ from $O$ represents $\\vec{OP}$, which is a displacement of $40\\text{ km}, 30^\\circ$ East of North.</li>
  </ul>

  <p><strong>(ii) Classification of Measures:</strong></p>
  <ul>
    <li>(a) $10\\text{ kg}$: <strong>Scalar</strong> (mass has only magnitude).</li>
    <li>(b) $2\\text{ meters north-west}$: <strong>Vector</strong> (displacement has both magnitude and specific direction).</li>
    <li>(c) $40^\\circ$: <strong>Scalar</strong> (angle has only magnitude).</li>
    <li>(d) $40\\text{ Watt}$: <strong>Scalar</strong> (power has no directional aspect).</li>
    <li>(e) $10^{-19}\\text{ Coulomb}$: <strong>Scalar</strong> (electric charge is an algebraic quantity).</li>
    <li>(f) $20\\text{ m/s}^2$: <strong>Vector</strong> (acceleration has direction).</li>
  </ul>

  <p><strong>(iii) Square Vector Identification:</strong></p>
  <ul>
    <li>(a) <strong>Co-initial vectors:</strong> $\\vec{a}$ and $\\vec{d}$ originate from the common starting vertex $A$.</li>
    <li>(b) <strong>Equal vectors:</strong> $\\vec{b}$ and $\\vec{d}$ share identical downward direction and equal square side lengths ($|\\vec{b}| = |\\vec{d}|$).</li>
    <li>(c) <strong>Collinear but not equal:</strong> $\\vec{a}$ and $\\vec{c}$ are parallel horizontal vectors pointing in opposite directions ($\\vec{a} = -\\vec{c}$).</li>
  </ul>`,
  '4 Marks',
  [
    ['(i) Graph description with scale and 30° angle east of north', '1 Mark'],
    ['(ii) Accurate classification of all 6 physical quantities', '1.5 Marks'],
    ['(iii) Correct definitions and examples of co-initial, equal, and collinear vectors', '1.5 Marks']
  ]
));

// Q2 (Ex 10.2 Q1, Q4, Q6 - Vector Magnitudes & Addition)
questions.push(createQCard(
  'c12m-ch10-q2',
  'Q2',
  'Exercise 10.2 (Verbatim)',
  `(i) Compute the magnitude of the following vectors:<br>
  $$\\vec{a} = \\hat{i} + \\hat{j} + \\hat{k}, \\quad \\vec{b} = 2\\hat{i} - 7\\hat{j} - 3\\hat{k}, \\quad \\vec{c} = \\frac{1}{\\sqrt{3}}\\hat{i} + \\frac{1}{\\sqrt{3}}\\hat{j} - \\frac{1}{\\sqrt{3}}\\hat{k}$$
  (ii) Find the values of $x$ and $y$ so that the vectors $2\\hat{i} + 3\\hat{j}$ and $x\\hat{i} + y\\hat{j}$ are equal.<br>
  (iii) Find the sum of the vectors $\\vec{a} = \\hat{i} - 2\\hat{j} + \\hat{k}$, $\\vec{b} = -2\\hat{i} + 4\\hat{j} + 5\\hat{k}$ and $\\vec{c} = \\hat{i} - 6\\hat{j} - 7\\hat{k}$.`,
  `<p><strong>(i) Magnitudes:</strong></p>
  <ul>
    <li>$|\\vec{a}| = \\sqrt{1^2 + 1^2 + 1^2} = \\mathbf{\\sqrt{3}}$</li>
    <li>$|\\vec{b}| = \\sqrt{2^2 + (-7)^2 + (-3)^2} = \\sqrt{4 + 49 + 9} = \\mathbf{\\sqrt{62}}$</li>
    <li>$|\\vec{c}| = \\sqrt{\\left(\\frac{1}{\\sqrt{3}}\\right)^2 + \\left(\\frac{1}{\\sqrt{3}}\\right)^2 + \\left(-\\frac{1}{\\sqrt{3}}\\right)^2} = \\sqrt{\\frac{1}{3} + \\frac{1}{3} + \\frac{1}{3}} = \\sqrt{1} = \\mathbf{1}$ (Unit vector)</li>
  </ul>

  <p><strong>(ii) Equality of Vectors:</strong></p>
  Two vectors are equal if and only if their corresponding components are equal:
  $$2\\hat{i} + 3\\hat{j} = x\\hat{i} + y\\hat{j} \\implies \\mathbf{x = 2, \\quad y = 3}$$

  <p><strong>(iii) Sum of Vectors:</strong></p>
  $$\\vec{a} + \\vec{b} + \\vec{c} = (1 - 2 + 1)\\hat{i} + (-2 + 4 - 6)\\hat{j} + (1 + 5 - 7)\\hat{k}$$
  $$= 0\\hat{i} - 4\\hat{j} - 1\\hat{k} = \\mathbf{-4\\hat{j} - \\hat{k}}$$`,
  '3 Marks',
  [
    ['(i) Calculating magnitudes: √3, √62, and 1', '1 Mark'],
    ['(ii) Component equating: x = 2, y = 3', '1 Mark'],
    ['(iii) Vector addition giving -4j - k', '1 Mark']
  ]
));

// Q3 (Ex 10.2 Q7, Q8, Q9 - Unit Vector & Direction Ratios)
questions.push(createQCard(
  'c12m-ch10-q3',
  'Q3',
  'Exercise 10.2 (Verbatim)',
  `(i) Find the unit vector in the direction of the vector $\\vec{a} = \\hat{i} + \\hat{j} + 2\\hat{k}$.<br>
  (ii) Find the unit vector in the direction of vector $\\vec{PQ}$, where $P$ and $Q$ are the points $(1, 2, 3)$ and $(4, 5, 6)$, respectively.<br>
  (iii) For given vectors, $\\vec{a} = 2\\hat{i} - \\hat{j} + 2\\hat{k}$ and $\\vec{b} = -\\hat{i} + \\hat{j} - \\hat{k}$, find the unit vector in the direction of the vector $\\vec{a} + \\vec{b}$.`,
  `<p><strong>(i) Unit Vector $\\hat{a}$:</strong></p>
  $|\\vec{a}| = \\sqrt{1^2 + 1^2 + 2^2} = \\sqrt{1 + 1 + 4} = \\sqrt{6}$.
  $$\\mathbf{\\hat{a} = \\frac{\\vec{a}}{|\\vec{a}|} = \\frac{\\hat{i} + \\hat{j} + 2\\hat{k}}{\\sqrt{6}} = \\frac{1}{\\sqrt{6}}\\hat{i} + \\frac{1}{\\sqrt{6}}\\hat{j} + \\frac{2}{\\sqrt{6}}\\hat{k}}$$

  <p><strong>(ii) Vector $\\vec{PQ}$ and its Unit Vector:</strong></p>
  $$\\vec{PQ} = (x_2 - x_1)\\hat{i} + (y_2 - y_1)\\hat{j} + (z_2 - z_1)\\hat{k}$$
  $$= (4 - 1)\\hat{i} + (5 - 2)\\hat{j} + (6 - 3)\\hat{k} = 3\\hat{i} + 3\\hat{j} + 3\\hat{k}$$
  $|\\vec{PQ}| = \\sqrt{3^2 + 3^2 + 3^2} = \\sqrt{27} = 3\\sqrt{3}$.
  $$\\mathbf{\\widehat{PQ} = \\frac{3\\hat{i} + 3\\hat{j} + 3\\hat{k}}{3\\sqrt{3}} = \\frac{1}{\\sqrt{3}}\\hat{i} + \\frac{1}{\\sqrt{3}}\\hat{j} + \\frac{1}{\\sqrt{3}}\\hat{k}}$$

  <p><strong>(iii) Unit Vector of $\\vec{a} + \\vec{b}$:</strong></p>
  $$\\vec{c} = \\vec{a} + \\vec{b} = (2 - 1)\\hat{i} + (-1 + 1)\\hat{j} + (2 - 1)\\hat{k} = \\hat{i} + 0\\hat{j} + \\hat{k} = \\hat{i} + \\hat{k}$$
  $|\\vec{c}| = \\sqrt{1^2 + 0^2 + 1^2} = \\sqrt{2}$.
  $$\\mathbf{\\hat{c} = \\frac{\\hat{i} + \\hat{k}}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}}\\hat{i} + \\frac{1}{\\sqrt{2}}\\hat{k}}$$`,
  '4 Marks',
  [
    ['(i) Unit vector: (i + j + 2k)/√6', '1 Mark'],
    ['(ii) Vector PQ = 3i + 3j + 3k and unit vector: (i + j + k)/√3', '1.5 Marks'],
    ['(iii) Vector sum a + b = i + k and unit vector: (i + k)/√2', '1.5 Marks']
  ]
));

// Q4 (Ex 10.2 Q11, Q15 - Collinearity & Section Formula)
questions.push(createQCard(
  'c12m-ch10-q4',
  'Q4',
  'Exercise 10.2 (Verbatim)',
  `(i) Show that the vectors $2\\hat{i} - 3\\hat{j} + 4\\hat{k}$ and $-4\\hat{i} + 6\\hat{j} - 8\\hat{k}$ are collinear.<br>
  (ii) Find the position vector of a point $R$ which divides the line joining two points $P$ and $Q$ whose position vectors are $\\hat{i} + 2\\hat{j} - \\hat{k}$ and $-\\hat{i} + \\hat{j} + \\hat{k}$ respectively, in the ratio $2 : 1$:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;(a) internally<br>
  &nbsp;&nbsp;&nbsp;&nbsp;(b) externally`,
  `<div style="margin:14px 0; padding:12px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; text-align:center;">
    <div style="font-weight:600; color:#334155; margin-bottom:8px; font-size:0.95rem;">Figure 10.2: Section Formula Division of Segment $PQ$ by $R$ in ratio $m : n = 2 : 1$</div>
    <svg viewBox="0 0 380 180" style="max-width:380px; width:100%; height:auto; display:inline-block; background:white; border-radius:6px; border:1px solid #cbd5e1;">
      <!-- Origin O -->
      <circle cx="60" cy="140" r="4" fill="#1e293b"/>
      <text x="50" y="155" font-size="11" fill="#1e293b" font-weight="bold">O</text>
      <!-- Line Segment PQ -->
      <line x1="120" y1="40" x2="340" y2="40" stroke="#334155" stroke-width="2.5"/>
      <!-- Point P -->
      <circle cx="120" cy="40" r="4.5" fill="#2563eb"/>
      <text x="110" y="30" font-size="11" fill="#2563eb" font-weight="bold">P(p&rarr;)</text>
      <!-- Point Q -->
      <circle cx="340" cy="40" r="4.5" fill="#2563eb"/>
      <text x="340" y="30" font-size="11" fill="#2563eb" font-weight="bold">Q(q&rarr;)</text>
      <!-- Point R (dividing 2:1 -> at 2/3 of segment: 120 + 220*2/3 = 267) -->
      <circle cx="267" cy="40" r="5" fill="#16a34a"/>
      <text x="267" y="28" font-size="11" fill="#16a34a" font-weight="bold" text-anchor="middle">R(r&rarr;)</text>
      <!-- Position vectors rays from O -->
      <line x1="60" y1="140" x2="118" y2="44" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="75" y="85" font-size="10" fill="#64748b">p&rarr;</text>
      <line x1="60" y1="140" x2="265" y2="44" stroke="#16a34a" stroke-width="2"/>
      <text x="160" y="95" font-size="10.5" fill="#16a34a" font-weight="bold">r&rarr; = (2q&rarr; + p&rarr;)/3</text>
      <line x1="60" y1="140" x2="338" y2="44" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="235" y="115" font-size="10" fill="#64748b">q&rarr;</text>
      <!-- Ratio labels -->
      <text x="190" y="55" font-size="10" fill="#4338ca" font-weight="bold">Ratio: 2</text>
      <text x="300" y="55" font-size="10" fill="#4338ca" font-weight="bold">1</text>
    </svg>
  </div>

  <p><strong>(i) Collinearity Test:</strong></p>
  Let $\\vec{a} = 2\\hat{i} - 3\\hat{j} + 4\\hat{k}$ and $\\vec{b} = -4\\hat{i} + 6\\hat{j} - 8\\hat{k}$.
  <br>Notice that:
  $$\\vec{b} = -2(2\\hat{i} - 3\\hat{j} + 4\\hat{k}) = -2\\vec{a}$$
  Since $\\vec{b} = \\lambda\\vec{a}$ with scalar $\\lambda = -2$, the vectors $\\vec{a}$ and $\\vec{b}$ are <strong>collinear</strong> (they are anti-parallel).
  <br><em>(Alternatively, the ratios of corresponding components are equal: $\\frac{-4}{2} = \\frac{6}{-3} = \\frac{-8}{4} = -2$).</em>

  <p><strong>(ii) Section Formula:</strong></p>
  Let $\\vec{p} = \\hat{i} + 2\\hat{j} - \\hat{k}$ and $\\vec{q} = -\\hat{i} + \\hat{j} + \\hat{k}$. The ratio is $m : n = 2 : 1$.
  <ol>
    <li><strong>(a) Internally:</strong>
      $$\\vec{r} = \\frac{m\\vec{q} + n\\vec{p}}{m + n} = \\frac{2(-\\hat{i} + \\hat{j} + \\hat{k}) + 1(\\hat{i} + 2\\hat{j} - \\hat{k})}{2 + 1}$$
      $$= \\frac{-2\\hat{i} + 2\\hat{j} + 2\\hat{k} + \\hat{i} + 2\\hat{j} - \\hat{k}}{3} = \\frac{-\\hat{i} + 4\\hat{j} + \\hat{k}}{3} = \\mathbf{-\\frac{1}{3}\\hat{i} + \\frac{4}{3}\\hat{j} + \\frac{1}{3}\\hat{k}}$$
    </li>
    <li><strong>(b) Externally:</strong>
      $$\\vec{r} = \\frac{m\\vec{q} - n\\vec{p}}{m - n} = \\frac{2(-\\hat{i} + \\hat{j} + \\hat{k}) - 1(\\hat{i} + 2\\hat{j} - \\hat{k})}{2 - 1}$$
      $$= \\frac{-2\\hat{i} + 2\\hat{j} + 2\\hat{k} - \\hat{i} - 2\\hat{j} + \\hat{k}}{1} = \\mathbf{-3\\hat{i} + 3\\hat{k}}$$
    </li>
  </ol>`,
  '4 Marks',
  [
    ['(i) Establishing b = -2a to prove collinearity', '1 Mark'],
    ['(ii)(a) Internal division formula yielding (-i + 4j + k)/3', '1.5 Marks'],
    ['(ii)(b) External division formula yielding -3i + 3k', '1.5 Marks']
  ]
));

// Q5 (Ex 10.3 Q1, Q2, Q4 - Dot Product & Projections)
questions.push(createQCard(
  'c12m-ch10-q5',
  'Q5',
  'Exercise 10.3 (Verbatim)',
  `(i) Find the angle between two vectors $\\vec{a}$ and $\\vec{b}$ with magnitudes $\\sqrt{3}$ and $2$, respectively, having $\\vec{a} \\cdot \\vec{b} = \\sqrt{6}$.<br>
  (ii) Find the angle between the vectors $\\hat{i} - 2\\hat{j} + 3\\hat{k}$ and $3\\hat{i} - 2\\hat{j} + \\hat{k}$.<br>
  (iii) Find the projection of the vector $\\vec{a} = \\hat{i} + 3\\hat{j} + 7\\hat{k}$ on the vector $\\vec{b} = 7\\hat{i} - \\hat{j} + 8\\hat{k}$.`,
  `<p><strong>(i) Angle between $\\vec{a}$ and $\\vec{b}$:</strong></p>
  $$\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta$$
  $$\\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}||\\vec{b}|} = \\frac{\\sqrt{6}}{(\\sqrt{3})(2)} = \\frac{\\sqrt{3}\\sqrt{2}}{2\\sqrt{3}} = \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}$$
  $$\\mathbf{\\theta = \\frac{\\pi}{4} = 45^\\circ}$$

  <p><strong>(ii) Angle between $\\vec{a} = \\hat{i} - 2\\hat{j} + 3\\hat{k}$ and $\\vec{b} = 3\\hat{i} - 2\\hat{j} + \\hat{k}$:</strong></p>
  <ul>
    <li>$\\vec{a} \\cdot \\vec{b} = (1)(3) + (-2)(-2) + (3)(1) = 3 + 4 + 3 = 10$.</li>
    <li>$|\\vec{a}| = \\sqrt{1^2 + (-2)^2 + 3^2} = \\sqrt{1 + 4 + 9} = \\sqrt{14}$.</li>
    <li>$|\\vec{b}| = \\sqrt{3^2 + (-2)^2 + 1^2} = \\sqrt{9 + 4 + 1} = \\sqrt{14}$.</li>
  </ul>
  $$\\cos\\theta = \\frac{10}{\\sqrt{14}\\sqrt{14}} = \\frac{10}{14} = \\frac{5}{7}$$
  $$\\mathbf{\\theta = \\cos^{-1}\\left(\\frac{5}{7}\\right)}$$

  <p><strong>(iii) Projection of $\\vec{a}$ on $\\vec{b}$:</strong></p>
  $$\\text{Projection of } \\vec{a} \\text{ on } \\vec{b} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$$
  <ul>
    <li>$\\vec{a} \\cdot \\vec{b} = (1)(7) + (3)(-1) + (7)(8) = 7 - 3 + 56 = 60$.</li>
    <li>$|\\vec{b}| = \\sqrt{7^2 + (-1)^2 + 8^2} = \\sqrt{49 + 1 + 64} = \\sqrt{114}$.</li>
  </ul>
  $$\\text{Projection} = \\mathbf{\\frac{60}{\\sqrt{114}}}$$`,
  '4 Marks',
  [
    ['(i) Evaluating cos θ = 1/√2 yielding θ = π/4', '1 Mark'],
    ['(ii) Evaluating dot product = 10 and magnitudes √14 to obtain cos⁻¹(5/7)', '1.5 Marks'],
    ['(iii) Projection formula application yielding 60/√114', '1.5 Marks']
  ]
));

// Q6 (Ex 10.3 Q6, Q7 - Vector Equations & Distribution)
questions.push(createQCard(
  'c12m-ch10-q6',
  'Q6',
  'Exercise 10.3 (Verbatim)',
  `(i) Find $|\\vec{a}|$ and $|\\vec{b}|$, if $(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = 8$ and $|\\vec{a}| = 8|\\vec{b}|$.<br>
  (ii) Evaluate the product $(3\\vec{a} - 5\\vec{b}) \\cdot (2\\vec{a} + 7\\vec{b})$.`,
  `<p><strong>(i) Finding $|\\vec{a}|$ and $|\\vec{b}|$:</strong></p>
  Expanding the dot product using the distributive property:
  $$(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = \\vec{a} \\cdot \\vec{a} - \\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{a} - \\vec{b} \\cdot \\vec{b}$$
  Since the dot product is commutative ($\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{a}$) and $\\vec{u} \\cdot \\vec{u} = |\\vec{u}|^2$:
  $$(\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = |\\vec{a}|^2 - |\\vec{b}|^2$$
  Given: $|\\vec{a}|^2 - |\\vec{b}|^2 = 8$.
  <br>Substitute $|\\vec{a}| = 8|\\vec{b}|$:
  $$(8|\\vec{b}|)^2 - |\\vec{b}|^2 = 8$$
  $$64|\\vec{b}|^2 - |\\vec{b}|^2 = 8 \\implies 63|\\vec{b}|^2 = 8$$
  $$|\\vec{b}|^2 = \\frac{8}{63} \\implies |\\vec{b}| = \\sqrt{\\frac{8}{63}} = \\frac{2\\sqrt{2}}{3\\sqrt{7}} = \\mathbf{\\frac{2\\sqrt{14}}{21}}$$
  Now compute $|\\vec{a}|$:
  $$|\\vec{a}| = 8|\\vec{b}| = 8 \\left( \\frac{2\\sqrt{2}}{3\\sqrt{7}} \\right) = \\frac{16\\sqrt{2}}{3\\sqrt{7}} = \\mathbf{\\frac{16\\sqrt{14}}{21}}$$

  <p><strong>(ii) Expanding $(3\\vec{a} - 5\\vec{b}) \\cdot (2\\vec{a} + 7\\vec{b})$:</strong></p>
  $$= 3\\vec{a} \\cdot (2\\vec{a} + 7\\vec{b}) - 5\\vec{b} \\cdot (2\\vec{a} + 7\\vec{b})$$
  $$= 6(\\vec{a} \\cdot \\vec{a}) + 21(\\vec{a} \\cdot \\vec{b}) - 10(\\vec{b} \\cdot \\vec{a}) - 35(\\vec{b} \\cdot \\vec{b})$$
  $$= \\mathbf{6|\\vec{a}|^2 + 11(\\vec{a} \\cdot \\vec{b}) - 35|\\vec{b}|^2}$$`,
  '4 Marks',
  [
    ['(i) Expanding to |a|² - |b|² = 8', '1.5 Marks'],
    ['(i) Substituting |a| = 8|b| and solving for both magnitudes', '1.5 Marks'],
    ['(ii) Accurate distribution yielding 6|a|² + 11(a.b) - 35|b|²', '1 Mark']
  ]
));

// Q7 (Ex 10.3 Q13 - Sum of Unit Vectors Equals Zero)
questions.push(createQCard(
  'c12m-ch10-q7',
  'Q7',
  'Exercise 10.3 (Verbatim)',
  `If $\\vec{a}, \\vec{b}, \\vec{c}$ are unit vectors such that $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$, find the value of $\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}$.`,
  `<p>Given: $|\\vec{a}| = 1, \\; |\\vec{b}| = 1, \\; |\\vec{c}| = 1$ and $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$.</p>
  <p>Take the dot product of $\\vec{a} + \\vec{b} + \\vec{c}$ with itself:</p>
  $$(\\vec{a} + \\vec{b} + \\vec{c}) \\cdot (\\vec{a} + \\vec{b} + \\vec{c}) = |\\vec{a} + \\vec{b} + \\vec{c}|^2 = |\\vec{0}|^2 = 0$$
  <p>Expanding the LHS:</p>
  $$|\\vec{a}|^2 + |\\vec{b}|^2 + |\\vec{c}|^2 + 2(\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}) = 0$$
  Substitute $|\\vec{a}| = 1, |\\vec{b}| = 1, |\\vec{c}| = 1$:
  $$1^2 + 1^2 + 1^2 + 2(\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}) = 0$$
  $$3 + 2(\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}) = 0$$
  $$2(\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}) = -3$$
  $$\\mathbf{\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a} = -\\frac{3}{2}}$$`,
  '3 Marks',
  [
    ['Setting |a + b + c|² = 0', '1 Mark'],
    ['Expanding dot product expansion into |a|² + |b|² + |c|² + 2(sum of products)', '1 Mark'],
    ['Substituting unit magnitudes and solving for -3/2', '1 Mark']
  ]
));

// Q8 (Ex 10.4 Q1, Q2 - Cross Product & Unit Perpendicular Vector)
questions.push(createQCard(
  'c12m-ch10-q8',
  'Q8',
  'Exercise 10.4 (Verbatim)',
  `(i) Find $|\\vec{a} \\times \\vec{b}|$, if $\\vec{a} = \\hat{i} - 7\\hat{j} + 7\\hat{k}$ and $\\vec{b} = 3\\hat{i} - 2\\hat{j} + 2\\hat{k}$.<br>
  (ii) Find a unit vector perpendicular to each of the vector $\\vec{a} + \\vec{b}$ and $\\vec{a} - \\vec{b}$, where $\\vec{a} = 3\\hat{i} + 2\\hat{j} + 2\\hat{k}$ and $\\vec{b} = \\hat{i} + 2\\hat{j} - 2\\hat{k}$.`,
  `<div style="margin:14px 0; padding:12px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; text-align:center;">
    <div style="font-weight:600; color:#334155; margin-bottom:8px; font-size:0.95rem;">Figure 10.3: Normal Vector $\\vec{w} = \\vec{u} \\times \\vec{v}$ perpendicular to both $\\vec{u}$ and $\\vec{v}$</div>
    <svg viewBox="0 0 380 220" style="max-width:380px; width:100%; height:auto; display:inline-block; background:white; border-radius:6px; border:1px solid #cbd5e1;">
      <!-- Base Parallelogram Plane -->
      <polygon points="60,170 190,170 290,120 160,120" fill="#e0e7ff" fill-opacity="0.5" stroke="#a5b4fc" stroke-width="1.5"/>
      <!-- Origin O -->
      <circle cx="160" cy="150" r="3.5" fill="#1e293b"/>
      <!-- Vector u = a + b -->
      <line x1="160" y1="150" x2="250" y2="150" stroke="#4f46e5" stroke-width="2.5"/>
      <polygon points="255,150 245,146 245,154" fill="#4f46e5"/>
      <text x="260" y="154" font-size="11" fill="#4f46e5" font-weight="bold">u&rarr; = a&rarr; + b&rarr;</text>
      <!-- Vector v = a - b -->
      <line x1="160" y1="150" x2="210" y2="125" stroke="#059669" stroke-width="2.5"/>
      <polygon points="214,123 203,123 207,130" fill="#059669"/>
      <text x="220" y="122" font-size="11" fill="#059669" font-weight="bold">v&rarr; = a&rarr; - b&rarr;</text>
      <!-- Perpendicular normal vector w = u x v pointing vertically -->
      <line x1="160" y1="150" x2="160" y2="35" stroke="#dc2626" stroke-width="3"/>
      <polygon points="160,30 155,42 165,42" fill="#dc2626"/>
      <text x="170" y="45" font-size="11.5" fill="#dc2626" font-weight="bold">n&#770; &perp; Plane (u&rarr; &times; v&rarr;)</text>
      <!-- Right angle markers -->
      <polyline points="160,135 175,135 175,150" fill="none" stroke="#dc2626" stroke-width="1.2"/>
    </svg>
  </div>

  <p><strong>(i) $|\\vec{a} \\times \\vec{b}|$:</strong></p>
  $$\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & -7 & 7 \\\\ 3 & -2 & 2 \\end{vmatrix}$$
  $$= \\hat{i}[(-7)(2) - (7)(-2)] - \\hat{j}[(1)(2) - (7)(3)] + \\hat{k}[(1)(-2) - (-7)(3)]$$
  $$= \\hat{i}[-14 + 14] - \\hat{j}[2 - 21] + \\hat{k}[-2 + 21] = 0\\hat{i} + 19\\hat{j} + 19\\hat{k} = 19(\\hat{j} + \\hat{k})$$
  $$|\\vec{a} \\times \\vec{b}| = \\sqrt{0^2 + 19^2 + 19^2} = \\sqrt{19^2(1 + 1)} = \\mathbf{19\\sqrt{2}}$$

  <p><strong>(ii) Unit vector perpendicular to $(\\vec{a} + \\vec{b})$ and $(\\vec{a} - \\vec{b})$:</strong></p>
  <ol>
    <li>$\\vec{u} = \\vec{a} + \\vec{b} = (3 + 1)\\hat{i} + (2 + 2)\\hat{j} + (2 - 2)\\hat{k} = 4\\hat{i} + 4\\hat{j} + 0\\hat{k}$.</li>
    <li>$\\vec{v} = \\vec{a} - \\vec{b} = (3 - 1)\\hat{i} + (2 - 2)\\hat{j} + (2 - (-2))\\hat{k} = 2\\hat{i} + 0\\hat{j} + 4\\hat{k}$.</li>
    <li>A vector perpendicular to both $\\vec{u}$ and $\\vec{v}$ is given by their cross product:
      $$\\vec{w} = \\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 4 & 4 & 0 \\\\ 2 & 0 & 4 \\end{vmatrix}$$
      $$= \\hat{i}(16 - 0) - \\hat{j}(16 - 0) + \\hat{k}(0 - 8) = 16\\hat{i} - 16\\hat{j} - 8\\hat{k} = 8(2\\hat{i} - 2\\hat{j} - \\hat{k})$$
    </li>
    <li>Magnitude:
      $$|\\vec{w}| = 8\\sqrt{2^2 + (-2)^2 + (-1)^2} = 8\\sqrt{4 + 4 + 1} = 8\\sqrt{9} = 8 \\times 3 = 24$$
    </li>
    <li>Required unit vector:
      $$\\mathbf{\\hat{n} = \\pm \\frac{\\vec{w}}{|\\vec{w}|} = \\pm \\frac{16\\hat{i} - 16\\hat{j} - 8\\hat{k}}{24} = \\pm \\left(\\frac{2}{3}\\hat{i} - \\frac{2}{3}\\hat{j} - \\frac{1}{3}\\hat{k}\\right)}$$
    </li>
  </ol>`,
  '4 Marks',
  [
    ['(i) Cross product calculation yielding 19j + 19k and magnitude 19√2', '1.5 Marks'],
    ['(ii) Computing u = a+b = 4i+4j and v = a-b = 2i+4k', '1 Mark'],
    ['(ii) Evaluating cross product and unit vector: ±(2/3 i - 2/3 j - 1/3 k)', '1.5 Marks']
  ]
));

// Q9 (Ex 10.4 Q6, Q9 - Lagrange's Identity & Area of Triangle)
questions.push(createQCard(
  'c12m-ch10-q9',
  'Q9',
  'Exercise 10.4 (Verbatim)',
  `(i) Given that $\\vec{a} \\cdot \\vec{b} = 0$ and $\\vec{a} \\times \\vec{b} = \\vec{0}$. What can you conclude about the vectors $\\vec{a}$ and $\\vec{b}$?<br>
  (ii) Find the area of the triangle with vertices $A(1, 1, 2)$, $B(2, 3, 5)$ and $C(1, 5, 5)$.`,
  `<div style="margin:14px 0; padding:12px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; text-align:center;">
    <div style="font-weight:600; color:#334155; margin-bottom:8px; font-size:0.95rem;">Figure 10.4: Triangle $ABC$ with adjacent edge vectors $\\vec{AB}$ and $\\vec{AC}$</div>
    <svg viewBox="0 0 340 180" style="max-width:340px; width:100%; height:auto; display:inline-block; background:white; border-radius:6px; border:1px solid #cbd5e1;">
      <!-- Shaded Triangle ABC -->
      <polygon points="60,140 260,120 180,40" fill="#fef3c7" fill-opacity="0.6" stroke="#d97706" stroke-width="1.8"/>
      <!-- Vectors AB and AC -->
      <line x1="60" y1="140" x2="260" y2="120" stroke="#d97706" stroke-width="2.2"/>
      <polygon points="263,120 252,116 254,124" fill="#d97706"/>
      <text x="160" y="145" font-size="10.5" fill="#b45309" font-weight="bold">AB&rarr; = i&#770; + 2j&#770; + 3k&#770;</text>
      <line x1="60" y1="140" x2="180" y2="40" stroke="#2563eb" stroke-width="2.2"/>
      <polygon points="183,38 174,45 180,51" fill="#2563eb"/>
      <text x="95" y="75" font-size="10.5" fill="#1d4ed8" font-weight="bold">AC&rarr; = 4j&#770; + 3k&#770;</text>
      <!-- Vertices -->
      <circle cx="60" cy="140" r="4.5" fill="#1e293b"/>
      <text x="45" y="155" font-size="11" fill="#1e293b" font-weight="bold">A(1,1,2)</text>
      <circle cx="260" cy="120" r="4.5" fill="#1e293b"/>
      <text x="265" y="125" font-size="11" fill="#1e293b" font-weight="bold">B(2,3,5)</text>
      <circle cx="180" cy="40" r="4.5" fill="#1e293b"/>
      <text x="180" y="30" font-size="11" fill="#1e293b" font-weight="bold" text-anchor="middle">C(1,5,5)</text>
      <!-- Area label -->
      <text x="170" y="100" font-size="11" fill="#b45309" font-weight="bold">Area = &frac12;|AB&rarr; &times; AC&rarr;| = &radic;61 / 2</text>
    </svg>
  </div>

  <p><strong>(i) Deduction from $\\vec{a} \\cdot \\vec{b} = 0$ and $\\vec{a} \\times \\vec{b} = \\vec{0}$:</strong></p>
  <ul>
    <li>$\\vec{a} \\cdot \\vec{b} = 0 \\implies |\\vec{a}| = 0$ or $|\\vec{b}| = 0$ or $\\vec{a} \\perp \\vec{b}$.</li>
    <li>$\\vec{a} \\times \\vec{b} = \\vec{0} \\implies |\\vec{a}| = 0$ or $|\\vec{b}| = 0$ or $\\vec{a} \\parallel \\vec{b}$.</li>
  </ul>
  Since two non-zero vectors cannot be simultaneously perpendicular and parallel (an angle cannot be both $90^\\circ$ and $0^\\circ$ or $180^\\circ$), the only possibility is:
  $$\\mathbf{|\\vec{a}| = 0 \\quad \\text{or} \\quad |\\vec{b}| = 0 \\quad (\\text{i.e. } \\vec{a} = \\vec{0} \\text{ or } \\vec{b} = \\vec{0})}$$

  <p><strong>(ii) Area of Triangle $ABC$:</strong></p>
  Form adjacent edge vectors from vertex $A$:
  $$\\vec{AB} = (2 - 1)\\hat{i} + (3 - 1)\\hat{j} + (5 - 2)\\hat{k} = \\hat{i} + 2\\hat{j} + 3\\hat{k}$$
  $$\\vec{AC} = (1 - 1)\\hat{i} + (5 - 1)\\hat{j} + (5 - 2)\\hat{k} = 0\\hat{i} + 4\\hat{j} + 3\\hat{k}$$
  Compute cross product $\\vec{AB} \\times \\vec{AC}$:
  $$\\vec{AB} \\times \\vec{AC} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 2 & 3 \\\\ 0 & 4 & 3 \\end{vmatrix}$$
  $$= \\hat{i}(6 - 12) - \\hat{j}(3 - 0) + \\hat{k}(4 - 0) = -6\\hat{i} - 3\\hat{j} + 4\\hat{k}$$
  Magnitude:
  $$|\\vec{AB} \\times \\vec{AC}| = \\sqrt{(-6)^2 + (-3)^2 + 4^2} = \\sqrt{36 + 9 + 16} = \\sqrt{61}$$
  Area of triangle:
  $$\\text{Area} = \\frac{1}{2} |\\vec{AB} \\times \\vec{AC}| = \\mathbf{\\frac{\\sqrt{61}}{2}\\text{ sq. units}}$$`,
  '4 Marks',
  [
    ['(i) Rigorous logical conclusion: a = 0 or b = 0', '1.5 Marks'],
    ['(ii) Vectors AB and AC computed correctly', '1 Mark'],
    ['(ii) Cross product -6i - 3j + 4k and area = √61 / 2 sq units', '1.5 Marks']
  ]
));

// Q10 (Ex 10.4 Q10, Q11 - Area of Parallelogram & Angle from Cross Product)
questions.push(createQCard(
  'c12m-ch10-q10',
  'Q10',
  'Exercise 10.4 (Verbatim)',
  `(i) Find the area of the parallelogram whose adjacent sides are determined by the vectors $\\vec{a} = \\hat{i} - \\hat{j} + 3\\hat{k}$ and $\\vec{b} = 2\\hat{i} - 7\\hat{j} + \\hat{k}$.<br>
  (ii) Let the vectors $\\vec{a}$ and $\\vec{b}$ be such that $|\\vec{a}| = 3$ and $|\\vec{b}| = \\frac{\\sqrt{2}}{3}$, then $\\vec{a} \\times \\vec{b}$ is a unit vector, if the angle between $\\vec{a}$ and $\\vec{b}$ is:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;(A) $\\frac{\\pi}{6}$ &nbsp;&nbsp;&nbsp;&nbsp; (B) $\\frac{\\pi}{4}$ &nbsp;&nbsp;&nbsp;&nbsp; (C) $\\frac{\\pi}{3}$ &nbsp;&nbsp;&nbsp;&nbsp; (D) $\\frac{\\pi}{2}$`,
  `<div style="margin:14px 0; padding:12px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; text-align:center;">
    <div style="font-weight:600; color:#334155; margin-bottom:8px; font-size:0.95rem;">Figure 10.5: Parallelogram with adjacent side vectors $\\vec{a}$ and $\\vec{b}$</div>
    <svg viewBox="0 0 360 160" style="max-width:360px; width:100%; height:auto; display:inline-block; background:white; border-radius:6px; border:1px solid #cbd5e1;">
      <!-- Parallelogram -->
      <polygon points="50,120 220,120 290,40 120,40" fill="#f0fdf4" fill-opacity="0.6" stroke="#16a34a" stroke-width="1.8"/>
      <!-- Side a -->
      <line x1="50" y1="120" x2="220" y2="120" stroke="#16a34a" stroke-width="2.5"/>
      <polygon points="224,120 214,116 214,124" fill="#16a34a"/>
      <text x="135" y="138" font-size="11" fill="#15803d" font-weight="bold">a&rarr; = i&#770; - j&#770; + 3k&#770;</text>
      <!-- Side b -->
      <line x1="50" y1="120" x2="120" y2="40" stroke="#2563eb" stroke-width="2.5"/>
      <polygon points="123,37 114,44 120,49" fill="#2563eb"/>
      <text x="55" y="70" font-size="11" fill="#1d4ed8" font-weight="bold">b&rarr; = 2i&#770; - 7j&#770; + k&#770;</text>
      <!-- Interior Area Label -->
      <text x="180" y="85" font-size="11.5" fill="#166534" font-weight="bold">Area = |a&rarr; &times; b&rarr;| = 15&radic;2 sq. units</text>
    </svg>
  </div>

  <p><strong>(i) Area of Parallelogram:</strong></p>
  $$\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & -1 & 3 \\\\ 2 & -7 & 1 \\end{vmatrix}$$
  $$= \\hat{i}[(-1)(1) - (3)(-7)] - \\hat{j}[(1)(1) - (3)(2)] + \\hat{k}[(1)(-7) - (-1)(2)]$$
  $$= \\hat{i}[-1 + 21] - \\hat{j}[1 - 6] + \\hat{k}[-7 + 2] = 20\\hat{i} + 5\\hat{j} - 5\\hat{k}$$
  $$\\text{Area } = |\\vec{a} \\times \\vec{b}| = \\sqrt{20^2 + 5^2 + (-5)^2} = \\sqrt{400 + 25 + 25} = \\sqrt{450} = \\sqrt{225 \\times 2} = \\mathbf{15\\sqrt{2}\\text{ sq. units}}$$

  <p><strong>(ii) Angle between $\\vec{a}$ and $\\vec{b}$:</strong></p>
  Given: $|\\vec{a} \\times \\vec{b}| = 1$.
  <br>We know that $|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta$.
  $$1 = (3) \\left(\\frac{\\sqrt{2}}{3}\\right) \\sin\\theta = \\sqrt{2}\\sin\\theta$$
  $$\\sin\\theta = \\frac{1}{\\sqrt{2}} \\implies \\mathbf{\\theta = \\frac{\\pi}{4}}$$
  <strong>Correct Option: (B) $\\frac{\\pi}{4}$</strong>`,
  '3 Marks',
  [
    ['(i) Cross product 20i + 5j - 5k and magnitude: 15√2 sq units', '2 Marks'],
    ['(ii) Applying |a x b| = |a||b|sin θ = 1 to find θ = π/4 and option (B)', '1 Mark']
  ]
));

// Q11 (Ex 10.4 Q5 - Unknown Parameters with Cross Product Equal to Zero)
questions.push(createQCard(
  'c12m-ch10-q11',
  'Q11',
  'Exercise 10.4 (Verbatim)',
  `Find $\\lambda$ and $\\mu$ if:
  $$(2\\hat{i} + 6\\hat{j} + 27\\hat{k}) \\times (\\hat{i} + \\lambda\\hat{j} + \\mu\\hat{k}) = \\vec{0}$$`,
  `<p>Let $\\vec{a} = 2\\hat{i} + 6\\hat{j} + 27\\hat{k}$ and $\\vec{b} = \\hat{i} + \\lambda\\hat{j} + \\mu\\hat{k}$.</p>
  <p>Compute cross product $\\vec{a} \\times \\vec{b}$:</p>
  $$\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 2 & 6 & 27 \\\\ 1 & \\lambda & \\mu \\end{vmatrix}$$
  $$= \\hat{i}(6\\mu - 27\\lambda) - \\hat{j}(2\\mu - 27) + \\hat{k}(2\\lambda - 6)$$
  Given that $\\vec{a} \\times \\vec{b} = \\vec{0} = 0\\hat{i} + 0\\hat{j} + 0\\hat{k}$, each component must be zero:
  <ol>
    <li>From $\\hat{k}$ component:
      $$2\\lambda - 6 = 0 \\implies 2\\lambda = 6 \\implies \\mathbf{\\lambda = 3}$$
    </li>
    <li>From $\\hat{j}$ component:
      $$-(2\\mu - 27) = 0 \\implies 2\\mu = 27 \\implies \\mathbf{\\mu = \\frac{27}{2}}$$
    </li>
    <li>Check consistency with $\\hat{i}$ component:
      $$6\\mu - 27\\lambda = 6\\left(\\frac{27}{2}\\right) - 27(3) = 3(27) - 81 = 81 - 81 = 0 \\quad (\\text{Consistent})$$
    </li>
  </ol>
  <p><strong>Final Answer:</strong> $\\mathbf{\\lambda = 3, \\quad \\mu = \\frac{27}{2}}$.</p>`,
  '3 Marks',
  [
    ['Determinant formulation of cross product', '1 Mark'],
    ['Equating j and k components to 0 and solving for λ = 3 and μ = 27/2', '1.5 Marks'],
    ['Checking consistency with i component', '0.5 Mark']
  ]
));

// Q12 (Ex 10.3 / Ex 10.4 Composite - Lagrange's Identity & Parallelogram Diagonals)
questions.push(createQCard(
  'c12m-ch10-q12',
  'Q12',
  'Exercise 10.4 & Board Special',
  `(i) For any two vectors $\\vec{a}$ and $\\vec{b}$, prove Lagrange's Identity:
  $$|\\vec{a} \\times \\vec{b}|^2 = |\\vec{a}|^2 |\\vec{b}|^2 - (\\vec{a} \\cdot \\vec{b})^2$$
  (ii) If diagonals of a parallelogram are given by $\\vec{d_1} = 3\\hat{i} + \\hat{j} - 2\\hat{k}$ and $\\vec{d_2} = \\hat{i} - 3\\hat{j} + 4\\hat{k}$, find the area of the parallelogram.`,
  `<p><strong>(i) Proof of Lagrange's Identity:</strong></p>
  Let $\\theta$ be the angle between $\\vec{a}$ and $\\vec{b}$.
  <br>We know that:
  $$|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta \\implies |\\vec{a} \\times \\vec{b}|^2 = |\\vec{a}|^2 |\\vec{b}|^2 \\sin^2\\theta$$
  Using $\\sin^2\\theta = 1 - \\cos^2\\theta$:
  $$|\\vec{a} \\times \\vec{b}|^2 = |\\vec{a}|^2 |\\vec{b}|^2 (1 - \\cos^2\\theta) = |\\vec{a}|^2 |\\vec{b}|^2 - |\\vec{a}|^2 |\\vec{b}|^2 \\cos^2\\theta$$
  Since $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta$:
  $$(|\\vec{a}||\\vec{b}|\\cos\\theta)^2 = (\\vec{a} \\cdot \\vec{b})^2$$
  Therefore:
  $$\\mathbf{|\\vec{a} \\times \\vec{b}|^2 = |\\vec{a}|^2 |\\vec{b}|^2 - (\\vec{a} \\cdot \\vec{b})^2}$$
  Hence proved.

  <p><strong>(ii) Area of Parallelogram with Diagonals $\\vec{d_1}, \\vec{d_2}$:</strong></p>
  Formula: $\\text{Area} = \\frac{1}{2} |\\vec{d_1} \\times \\vec{d_2}|$.
  $$\\vec{d_1} \\times \\vec{d_2} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & 1 & -2 \\\\ 1 & -3 & 4 \\end{vmatrix}$$
  $$= \\hat{i}(4 - 6) - \\hat{j}(12 - (-2)) + \\hat{k}(-9 - 1) = -2\\hat{i} - 14\\hat{j} - 10\\hat{k}$$
  Magnitude:
  $$|\\vec{d_1} \\times \\vec{d_2}| = \\sqrt{(-2)^2 + (-14)^2 + (-10)^2} = \\sqrt{4 + 196 + 100} = \\sqrt{300} = 10\\sqrt{3}$$
  Area:
  $$\\text{Area} = \\frac{1}{2}(10\\sqrt{3}) = \\mathbf{5\\sqrt{3}\\text{ sq. units}}$$`,
  '4 Marks',
  [
    ['(i) Proof of Lagrange\'s identity using sin²θ = 1 - cos²θ', '2 Marks'],
    ['(ii) Diagonals cross product d1 x d2 = -2i - 14j - 10k', '1 Mark'],
    ['(ii) Evaluating area = 1/2 |d1 x d2| = 5√3 sq units', '1 Mark']
  ]
));

saveChapter(
  10,
  'Vector Algebra',
  svgDiagram,
  'NCERT Exercises 10.1 to 10.4 (12 Verbatim Core Questions)',
  questions,
  'Three Dimensional Geometry'
);
