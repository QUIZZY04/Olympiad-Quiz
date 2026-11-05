// scripts/builders/gen-c12m-ch8.js
// Chapter 8: Application of Integrals (10 Questions with Detailed CBSE Geometric SVGs)
const { createQCard, saveChapter } = require('./c12m-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f5f3ff; border:1px solid #ddd6fe; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#4f46e5; font-size:1.05rem;">📐 Master Reference: Area Under Simple Standard Curves</h4>
  <svg viewBox="0 0 880 260" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #c7d2fe;">
    <!-- Panel 1: Vertical vs Horizontal Strips -->
    <rect x="20" y="20" width="260" height="220" rx="10" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
    <text x="150" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#3730a3" text-anchor="middle">Integration Strips</text>
    <line x1="35" y1="56" x2="265" y2="56" stroke="#6366f1" stroke-width="1.5"/>
    <text x="35" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Vertical Strip (dx):</text>
    <text x="35" y="100" font-family="sans-serif" font-size="11" fill="#334155">$A = \\int_a^b y \\, dx = \\int_a^b f(x) \\, dx$</text>
    <text x="35" y="135" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Horizontal Strip (dy):</text>
    <text x="35" y="155" font-family="sans-serif" font-size="11" fill="#334155">$A = \\int_c^d x \\, dy = \\int_c^d g(y) \\, dy$</text>
    <text x="35" y="190" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#047857">&bull; Use symmetry where curves are</text>
    <text x="35" y="210" font-family="sans-serif" font-size="10.5" fill="#334155">symmetric about coordinate axes</text>

    <!-- Panel 2: Circle & Ellipse Standard Areas -->
    <rect x="310" y="20" width="260" height="220" rx="10" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="2"/>
    <text x="440" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#5b21b6" text-anchor="middle">Standard Closed Curves</text>
    <line x1="325" y1="56" x2="555" y2="56" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="325" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Circle $x^2 + y^2 = a^2$:</text>
    <text x="325" y="100" font-family="sans-serif" font-size="11" fill="#334155">$A = 4 \\int_0^a \\sqrt{a^2 - x^2} \\, dx = \\pi a^2$</text>
    <text x="325" y="135" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$:</text>
    <text x="325" y="155" font-family="sans-serif" font-size="11" fill="#334155">$A = 4 \\cdot \\frac{b}{a} \\int_0^a \\sqrt{a^2 - x^2} \\, dx$</text>
    <text x="325" y="180" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Total Ellipse Area $= \\pi a b$</text>
    <text x="325" y="210" font-family="sans-serif" font-size="10" fill="#64748b">Key Integral: $\\int \\sqrt{a^2 - x^2} dx$</text>

    <!-- Panel 3: Master Formula -->
    <rect x="600" y="20" width="260" height="220" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="730" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">Master Integral Formula</text>
    <line x1="615" y1="56" x2="845" y2="56" stroke="#10b981" stroke-width="1.5"/>
    <text x="615" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">The Must-Know Integral:</text>
    <text x="615" y="105" font-family="sans-serif" font-size="10.5" fill="#334155">$\\int \\sqrt{a^2 - x^2} \\, dx =$</text>
    <text x="615" y="130" font-family="sans-serif" font-size="10.5" fill="#1e293b">$\\frac{x}{2}\\sqrt{a^2 - x^2} + \\frac{a^2}{2}\\sin^{-1}\\left(\\frac{x}{a}\\right)$</text>
    <text x="615" y="165" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Definite Boundary at $[0, a]$:</text>
    <text x="615" y="185" font-family="sans-serif" font-size="11" fill="#334155">$\\left[ \\dots \\right]_0^a = 0 + \\frac{a^2}{2}\\left(\\frac{\\pi}{2}\\right) = \\frac{\\pi a^2}{4}$</text>
    <text x="615" y="210" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#b91c1c">Always draw rough sketch first!</text>
  </svg>
</div>`;

const questions = [];

// Q1 (Ex 8.1 Q1 - Parabola Area)
questions.push(createQCard(
  'c12m-ch8-q1',
  'Q1',
  'Exercise 8.1 (Verbatim)',
  `Find the area of the region bounded by the curve $y^2 = x$ and the lines $x = 1, \\; x = 4$ and the x-axis in the first quadrant.`,
  `<p><strong>Step 1: Curve Analysis & Geometric Sketch:</strong></p>
  <ul>
    <li>The curve $y^2 = x$ is a rightward-opening parabola with vertex at the origin $(0, 0)$, symmetric about the x-axis.</li>
    <li>In the first quadrant, $y = +\\sqrt{x}$.</li>
    <li>The region is bounded by the vertical lines $x = 1$ and $x = 4$, the curve $y = \\sqrt{x}$, and the x-axis ($y = 0$).</li>
  </ul>

  <!-- Inline Geometric SVG Diagram -->
  <div style="text-align:center; margin:16px 0;">
    <svg viewBox="0 0 340 220" style="max-width:340px; width:100%; height:auto; background:#ffffff; border:1px solid #c7d2fe; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.04);">
      <!-- Axes -->
      <line x1="30" y1="180" x2="310" y2="180" stroke="#64748b" stroke-width="1.5"/>
      <line x1="50" y1="20" x2="50" y2="200" stroke="#64748b" stroke-width="1.5"/>
      <polygon points="310,177 316,180 310,183" fill="#64748b"/>
      <polygon points="47,20 50,14 53,20" fill="#64748b"/>
      <text x="315" y="184" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">X</text>
      <text x="50" y="12" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">Y</text>
      <text x="38" y="195" font-family="sans-serif" font-size="11" fill="#64748b">O</text>
      <!-- Shaded Region under y = √x from x=1 to x=4 -->
      <path d="M 110 180 L 110 142 Q 180 120 260 100 L 260 180 Z" fill="#c7d2fe" fill-opacity="0.75" stroke="#4f46e5" stroke-width="1"/>
      <!-- Parabola Curve y^2 = x -->
      <path d="M 50 180 Q 130 130 290 90" stroke="#4f46e5" stroke-width="2.5" fill="none"/>
      <path d="M 50 180 Q 130 230 290 270" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" fill="none"/>
      <text x="210" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4f46e5">y² = x (y = √x)</text>
      <!-- Boundary lines -->
      <line x1="110" y1="35" x2="110" y2="185" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="96" y="200" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">x = 1</text>
      <line x1="260" y1="35" x2="260" y2="185" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="246" y="200" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">x = 4</text>
      <text x="150" y="155" font-family="sans-serif" font-size="11" font-weight="bold" fill="#312e81">Shaded Area</text>
    </svg>
    <div style="font-size:0.8rem; color:#64748b; margin-top:4px;">Figure 8.1: Region bounded by parabola $y^2 = x$, lines $x=1, x=4$, and x-axis</div>
  </div>

  <p><strong>Step 2: Integral Formulation:</strong></p>
  Taking a vertical approximating strip of width $dx$ and height $y$:
  $$\\text{Area } A = \\int_1^4 y \\, dx = \\int_1^4 \\sqrt{x} \\, dx = \\int_1^4 x^{1/2} \\, dx$$

  <p><strong>Step 3: Integration & Limits:</strong></p>
  $$A = \\left[ \\frac{x^{3/2}}{3/2} \\right]_1^4 = \\frac{2}{3} \\left[ x^{3/2} \\right]_1^4$$
  $$A = \\frac{2}{3} \\left[ 4^{3/2} - 1^{3/2} \\right] = \\frac{2}{3} \\left[ (2^2)^{3/2} - 1 \\right] = \\frac{2}{3} [2^3 - 1] = \\frac{2}{3} [8 - 1] = \\frac{2}{3} (7) = \\mathbf{\\frac{14}{3}\\text{ sq. units}}$$`,
  '3 Marks',
  [
    ['Rough sketch of parabola y² = x and identifying bounded region in 1st quadrant', '1 Mark'],
    ['Setting up definite integral: int_1^4 √x dx', '1 Mark'],
    ['Integration [2/3 x^(3/2)] and evaluation: 14/3 sq units', '1 Mark']
  ]
));

// Q2 (Ex 8.1 Q2, Q3 - Parabola along X-axis & Y-axis)
questions.push(createQCard(
  'c12m-ch8-q2',
  'Q2',
  'Exercise 8.1 (Verbatim)',
  `(i) Find the area of the region bounded by $y^2 = 9x, \\; x = 2, \\; x = 4$ and the x-axis in the first quadrant.<br>
  (ii) Find the area of the region bounded by $x^2 = 4y, \\; y = 2, \\; y = 4$ and the y-axis in the first quadrant.`,
  `<p><strong>(i) $y^2 = 9x$ between $x = 2$ and $x = 4$:</strong></p>
  In the first quadrant, $y = \\sqrt{9x} = 3\\sqrt{x}$.
  $$A = \\int_2^4 3\\sqrt{x} \\, dx = 3 \\left[ \\frac{x^{3/2}}{3/2} \\right]_2^4 = 3 \\cdot \\frac{2}{3} \\left[ x^{3/2} \\right]_2^4 = 2 [4^{3/2} - 2^{3/2}]$$
  Since $4^{3/2} = 8$ and $2^{3/2} = 2\\sqrt{2}$:
  $$\\mathbf{A = 2(8 - 2\\sqrt{2}) = (16 - 4\\sqrt{2})\\text{ sq. units}}$$

  <p><strong>(ii) $x^2 = 4y$ between $y = 2$ and $y = 4$ along y-axis:</strong></p>
  Here it is most convenient to take horizontal approximating strips of thickness $dy$.
  <br>In the first quadrant, $x = \\sqrt{4y} = 2\\sqrt{y}$.
  $$A = \\int_2^4 x \\, dy = \\int_2^4 2\\sqrt{y} \\, dy = 2 \\left[ \\frac{y^{3/2}}{3/2} \\right]_2^4 = 2 \\cdot \\frac{2}{3} \\left[ y^{3/2} \\right]_2^4$$
  $$A = \\frac{4}{3} [4^{3/2} - 2^{3/2}] = \\frac{4}{3} (8 - 2\\sqrt{2}) = \\mathbf{\\frac{32 - 8\\sqrt{2}}{3}\\text{ sq. units}}$$`,
  '4 Marks',
  [
    ['(i) Integral setup with vertical strip: int_2^4 3√x dx', '1 Mark'],
    ['(i) Evaluation giving (16 - 4√2) sq units', '1 Mark'],
    ['(ii) Horizontal strip setup: int_2^4 2√y dy', '1 Mark'],
    ['(ii) Evaluation giving (32 - 8√2)/3 sq units', '1 Mark']
  ]
));

// Q3 (Ex 8.1 Q4, Q5 - Standard Ellipse Area with Diagram)
questions.push(createQCard(
  'c12m-ch8-q3',
  'Q3',
  'Exercise 8.1 (Verbatim)',
  `Find the area of the region bounded by the ellipse:
  $$\\frac{x^2}{16} + \\frac{y^2}{9} = 1$$
  Also find the area of the region bounded by the ellipse $\\frac{x^2}{4} + \\frac{y^2}{9} = 1$.`,
  `<p><strong>Part 1: Area of $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$:</strong></p>
  <ol>
    <li>The ellipse is symmetric about both the x-axis and y-axis.
      <br>Semi-major axis $a = \\sqrt{16} = 4$, semi-minor axis $b = \\sqrt{9} = 3$.
      <br>Total Area $= 4 \\times (\\text{Area in first quadrant})$.
    </li>
  </ol>

  <!-- Inline Geometric SVG Diagram for Ellipse -->
  <div style="text-align:center; margin:16px 0;">
    <svg viewBox="0 0 340 220" style="max-width:340px; width:100%; height:auto; background:#ffffff; border:1px solid #c7d2fe; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.04);">
      <!-- Axes -->
      <line x1="20" y1="110" x2="320" y2="110" stroke="#64748b" stroke-width="1.5"/>
      <line x1="170" y1="15" x2="170" y2="205" stroke="#64748b" stroke-width="1.5"/>
      <polygon points="320,107 326,110 320,113" fill="#64748b"/>
      <polygon points="167,15 170,9 173,15" fill="#64748b"/>
      <text x="325" y="114" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">X</text>
      <text x="170" y="8" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">Y</text>
      <text x="156" y="125" font-family="sans-serif" font-size="11" fill="#64748b">O</text>
      <!-- Ellipse Full -->
      <ellipse cx="170" cy="110" rx="110" ry="70" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="2"/>
      <!-- Quadrant 1 Shaded -->
      <path d="M 170 110 L 280 110 A 110 70 0 0 0 170 40 Z" fill="#c7d2fe" fill-opacity="0.85" stroke="#4f46e5" stroke-width="2"/>
      <!-- Vertices -->
      <text x="282" y="125" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4f46e5">(4, 0)</text>
      <text x="40" y="125" font-family="sans-serif" font-size="11" fill="#64748b">(-4, 0)</text>
      <text x="175" y="38" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4f46e5">(0, 3)</text>
      <text x="175" y="195" font-family="sans-serif" font-size="11" fill="#64748b">(0, -3)</text>
      <text x="205" y="85" font-family="sans-serif" font-size="11" font-weight="bold" fill="#312e81">Area in Q1</text>
      <text x="170" y="215" font-family="sans-serif" font-size="10" font-weight="bold" fill="#4338ca" text-anchor="middle">Total Area = 4 × Area(Quadrant I)</text>
    </svg>
    <div style="font-size:0.8rem; color:#64748b; margin-top:4px;">Figure 8.2: Ellipse $\frac{x^2}{16} + \frac{y^2}{9} = 1$ with 4 symmetric quadrants</div>
  </div>

  <ol start="2">
    <li>In the first quadrant:
      $$\\frac{y^2}{9} = 1 - \\frac{x^2}{16} = \\frac{16 - x^2}{16} \\implies y = \\frac{3}{4}\\sqrt{16 - x^2}$$
    </li>
    <li>Total Area:
      $$A = 4 \\int_0^4 y \\, dx = 4 \\int_0^4 \\frac{3}{4}\\sqrt{16 - x^2} \\, dx = 3 \\int_0^4 \\sqrt{4^2 - x^2} \\, dx$$
    </li>
    <li>Using standard formula $\\int \\sqrt{a^2 - x^2} \\, dx = \\frac{x}{2}\\sqrt{a^2 - x^2} + \\frac{a^2}{2}\\sin^{-1}\\left(\\frac{x}{a}\\right)$:
      $$A = 3 \\left[ \\frac{x}{2}\\sqrt{16 - x^2} + \\frac{16}{2}\\sin^{-1}\\left(\\frac{x}{4}\\right) \\right]_0^4$$
      $$= 3 \\left[ \\left(0 + 8\\sin^{-1}(1)\\right) - \\left(0 + 8\\sin^{-1}(0)\\right) \\right] = 3 \\left[ 8 \\left(\\frac{\\pi}{2}\\right) - 0 \\right] = 3(4\\pi) = \\mathbf{12\\pi\\text{ sq. units}}$$
    </li>
  </ol>
  <p><em>(Check with formula $\\pi a b = \\pi(4)(3) = 12\\pi\\text{ sq. units}$. Verified.)</em></p>

  <p><strong>Part 2: Area of $\\frac{x^2}{4} + \\frac{y^2}{9} = 1$:</strong></p>
  Here $a = 2, b = 3$. In the first quadrant, $y = \\frac{3}{2}\\sqrt{4 - x^2}$.
  $$A = 4 \\int_0^2 \\frac{3}{2}\\sqrt{2^2 - x^2} \\, dx = 6 \\left[ \\frac{x}{2}\\sqrt{4 - x^2} + \\frac{4}{2}\\sin^{-1}\\left(\\frac{x}{2}\\right) \\right]_0^2$$
  $$= 6 \\left[ 0 + 2\\sin^{-1}(1) - 0 \\right] = 6 \\left[ 2\\left(\\frac{\\pi}{2}\\right) \\right] = 6\\pi = \\mathbf{6\\pi\\text{ sq. units}}$$
  <p><em>(Check: $\\pi a b = \\pi(2)(3) = 6\\pi\\text{ sq. units}$. Verified.)</em></p>`,
  '4 Marks',
  [
    ['Rough sketch of ellipse showing 4 symmetrical quadrants', '1 Mark'],
    ['Setting up 4 * int_0^4 (3/4)√(16-x²) dx', '1 Mark'],
    ['Applying standard integration formula and evaluating limits: 12π sq units', '1 Mark'],
    ['Calculating area for second ellipse: 6π sq units', '1 Mark']
  ]
));

// Q4 (Ex 8.1 Q6 - Circle Enclosed by Line x = √3 y with Diagram)
questions.push(createQCard(
  'c12m-ch8-q4',
  'Q4',
  'Exercise 8.1 (Verbatim)',
  `Find the area of the region in the first quadrant enclosed by x-axis, line $x = \\sqrt{3}y$ and the circle $x^2 + y^2 = 4$.`,
  `<p><strong>Step 1: Point of Intersection & Geometric Partition:</strong></p>
  Substitute $x = \\sqrt{3}y$ into $x^2 + y^2 = 4$:
  $$(\\sqrt{3}y)^2 + y^2 = 4 \\implies 3y^2 + y^2 = 4 \\implies 4y^2 = 4 \\implies y^2 = 1$$
  Since we are in the first quadrant, $y = 1$.
  <br>Then $x = \\sqrt{3}(1) = \\sqrt{3}$.
  <br>The line intersects the circle at $P(\\sqrt{3}, 1)$.

  <!-- Inline Geometric SVG Diagram -->
  <div style="text-align:center; margin:16px 0;">
    <svg viewBox="0 0 340 220" style="max-width:340px; width:100%; height:auto; background:#ffffff; border:1px solid #c7d2fe; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.04);">
      <!-- Axes -->
      <line x1="30" y1="180" x2="310" y2="180" stroke="#64748b" stroke-width="1.5"/>
      <line x1="50" y1="20" x2="50" y2="200" stroke="#64748b" stroke-width="1.5"/>
      <polygon points="310,177 316,180 310,183" fill="#64748b"/>
      <polygon points="47,20 50,14 53,20" fill="#64748b"/>
      <text x="315" y="184" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">X</text>
      <text x="50" y="12" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">Y</text>
      <text x="38" y="195" font-family="sans-serif" font-size="11" fill="#64748b">O(0,0)</text>
      <!-- Sub-region 1: Under line (0 to √3) -->
      <polygon points="50,180 200,93 200,180" fill="#c7d2fe" fill-opacity="0.8"/>
      <!-- Sub-region 2: Under circle (√3 to 2) -->
      <path d="M 200 180 L 200 93 A 173 173 0 0 1 223 180 Z" fill="#a5b4fc" fill-opacity="0.8"/>
      <!-- Circle Arc -->
      <path d="M 50 7 A 173 173 0 0 1 223 180" stroke="#4f46e5" stroke-width="2" fill="none"/>
      <!-- Line x = √3 y (y = x/√3) -->
      <line x1="50" y1="180" x2="250" y2="65" stroke="#dc2626" stroke-width="2"/>
      <text x="235" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">x = √3 y</text>
      <!-- Intersection Marker -->
      <circle cx="200" cy="93" r="4" fill="#dc2626"/>
      <text x="180" y="85" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1e293b">P(√3, 1)</text>
      <!-- Vertical Dividing Line at x = √3 -->
      <line x1="200" y1="93" x2="200" y2="180" stroke="#64748b" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="185" y="195" font-family="sans-serif" font-size="10" font-weight="bold" fill="#475569">x = √3</text>
      <!-- Circle intercept at x = 2 -->
      <text x="215" y="195" font-family="sans-serif" font-size="10" font-weight="bold" fill="#4f46e5">(2, 0)</text>
      <text x="120" y="160" font-family="sans-serif" font-size="10" font-weight="bold" fill="#312e81">A₁ (Line)</text>
      <text x="203" y="160" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#1e1b4b">A₂ (Circle)</text>
    </svg>
    <div style="font-size:0.8rem; color:#64748b; margin-top:4px;">Figure 8.3: Partition into triangle $A_1$ (under line) and circular region $A_2$ (under circle)</div>
  </div>

  <p><strong>Step 2: Region Partition:</strong></p>
  The area consists of two parts along the x-axis:
  <ol>
    <li>From $x = 0$ to $x = \\sqrt{3}$: under the line $y = \\frac{x}{\\sqrt{3}}$.</li>
    <li>From $x = \\sqrt{3}$ to $x = 2$ (the radius of the circle): under the circle $y = \\sqrt{4 - x^2}$.</li>
  </ol>
  $$\\text{Total Area } A = \\int_0^{\\sqrt{3}} \\frac{x}{\\sqrt{3}} \\, dx + \\int_{\\sqrt{3}}^2 \\sqrt{4 - x^2} \\, dx = A_1 + A_2$$

  <p><strong>Step 3: Evaluate Integrals:</strong></p>
  <ol>
    <li>$$A_1 = \\frac{1}{\\sqrt{3}} \\left[ \\frac{x^2}{2} \\right]_0^{\\sqrt{3}} = \\frac{1}{\\sqrt{3}} \\left( \\frac{3}{2} - 0 \\right) = \\frac{\\sqrt{3}}{2}$$</li>
    <li>$$A_2 = \\left[ \\frac{x}{2}\\sqrt{4 - x^2} + \\frac{4}{2}\\sin^{-1}\\left(\\frac{x}{2}\\right) \\right]_{\\sqrt{3}}^2$$
      $$= \\left[ 0 + 2\\sin^{-1}(1) \\right] - \\left[ \\frac{\\sqrt{3}}{2}\\sqrt{4 - 3} + 2\\sin^{-1}\\left(\\frac{\\sqrt{3}}{2}\\right) \\right]$$
      $$= 2\\left(\\frac{\\pi}{2}\\right) - \\left[ \\frac{\\sqrt{3}}{2}(1) + 2\\left(\\frac{\\pi}{3}\\right) \\right] = \\pi - \\frac{\\sqrt{3}}{2} - \\frac{2\\pi}{3} = \\frac{\\pi}{3} - \\frac{\\sqrt{3}}{2}$$
    </li>
  </ol>
  <p><strong>Step 4: Combine:</strong></p>
  $$A = A_1 + A_2 = \\frac{\\sqrt{3}}{2} + \\left( \\frac{\\pi}{3} - \\frac{\\sqrt{3}}{2} \\right) = \\mathbf{\\frac{\\pi}{3}\\text{ sq. units}}$$`,
  '4 Marks',
  [
    ['Finding intersection point (√3, 1) and drawing sketch', '1 Mark'],
    ['Splitting area into triangular part A1 (under line) and circular part A2 (under circle)', '1 Mark'],
    ['Integrating line: A1 = √3/2', '0.5 Mark'],
    ['Integrating circle: A2 = π/3 - √3/2 and adding to obtain π/3 sq units', '1.5 Marks']
  ]
));

// Q5 (Ex 8.1 Q7 - Smaller Part of Circle Cut Off by Line x = a/√2 with Diagram)
questions.push(createQCard(
  'c12m-ch8-q5',
  'Q5',
  'Exercise 8.1 (Verbatim)',
  `Find the area of the smaller part of the circle $x^2 + y^2 = a^2$ cut off by the line $x = \\frac{a}{\\sqrt{2}}$.`,
  `<p><strong>Step 1: Sketch & Symmetry:</strong></p>
  The circle $x^2 + y^2 = a^2$ has radius $a$. The vertical line $x = \\frac{a}{\\sqrt{2}}$ cuts the circle into a larger piece (to the left) and a smaller piece (to the right, from $x = \\frac{a}{\\sqrt{2}}$ to $x = a$).
  <br>The region is symmetric about the x-axis.

  <!-- Inline Geometric SVG Diagram -->
  <div style="text-align:center; margin:16px 0;">
    <svg viewBox="0 0 340 220" style="max-width:340px; width:100%; height:auto; background:#ffffff; border:1px solid #c7d2fe; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.04);">
      <!-- Axes -->
      <line x1="20" y1="110" x2="320" y2="110" stroke="#64748b" stroke-width="1.5"/>
      <line x1="170" y1="15" x2="170" y2="205" stroke="#64748b" stroke-width="1.5"/>
      <polygon points="320,107 326,110 320,113" fill="#64748b"/>
      <polygon points="167,15 170,9 173,15" fill="#64748b"/>
      <text x="325" y="114" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">X</text>
      <text x="170" y="8" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">Y</text>
      <text x="156" y="125" font-family="sans-serif" font-size="11" fill="#64748b">O</text>
      <!-- Circle Full -->
      <circle cx="170" cy="110" r="85" fill="#f8fafc" stroke="#6366f1" stroke-width="2"/>
      <!-- Vertical Line x = a/√2 (170 + 85*0.707 = 230) -->
      <!-- Smaller part shaded -->
      <path d="M 230 50 A 85 85 0 0 1 255 110 A 85 85 0 0 1 230 170 Z" fill="#c7d2fe" fill-opacity="0.85" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="230" y1="20" x2="230" y2="200" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="210" y="15" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">x = a/√2</text>
      <text x="258" y="125" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4f46e5">x = a</text>
      <text x="245" y="90" font-family="sans-serif" font-size="10" font-weight="bold" fill="#312e81">Smaller</text>
      <text x="245" y="103" font-family="sans-serif" font-size="10" font-weight="bold" fill="#312e81">Segment</text>
    </svg>
    <div style="font-size:0.8rem; color:#64748b; margin-top:4px;">Figure 8.4: Circle $x^2 + y^2 = a^2$ cut by line $x = a/\sqrt{2}$ (smaller circular segment shaded)</div>
  </div>

  <p><strong>Step 2: Integration:</strong></p>
  $$\\text{Total Area } A = 2 \\int_{a/\\sqrt{2}}^a y \\, dx = 2 \\int_{a/\\sqrt{2}}^a \\sqrt{a^2 - x^2} \\, dx$$
  $$A = 2 \\left[ \\frac{x}{2}\\sqrt{a^2 - x^2} + \\frac{a^2}{2}\\sin^{-1}\\left(\\frac{x}{a}\\right) \\right]_{a/\\sqrt{2}}^a$$
  Substitute upper limit $x = a$:
  $$\\text{Upper} = 0 + \\frac{a^2}{2}\\sin^{-1}(1) = \\frac{a^2}{2}\\left(\\frac{\\pi}{2}\\right) = \\frac{\\pi a^2}{4}$$
  Substitute lower limit $x = \\frac{a}{\\sqrt{2}}$:
  $$\\text{Lower} = \\frac{a}{2\\sqrt{2}}\\sqrt{a^2 - \\frac{a^2}{2}} + \\frac{a^2}{2}\\sin^{-1}\\left(\\frac{1}{\\sqrt{2}}\\right) = \\frac{a}{2\\sqrt{2}}\\left(\\frac{a}{\\sqrt{2}}\\right) + \\frac{a^2}{2}\\left(\\frac{\\pi}{4}\\right) = \\frac{a^2}{4} + \\frac{\\pi a^2}{8}$$

  <p><strong>Step 3: Difference:</strong></p>
  $$A = 2 \\left[ \\frac{\\pi a^2}{4} - \\left(\\frac{a^2}{4} + \\frac{\\pi a^2}{8}\\right) \\right] = 2 \\left[ \\frac{\\pi a^2}{8} - \\frac{a^2}{4} \\right] = \\mathbf{\\frac{a^2}{2}\\left(\\frac{\\pi}{2} - 1\\right)\\text{ sq. units}}$$`,
  '4 Marks',
  [
    ['Rough sketch showing symmetry and limits from a/√2 to a', '1 Mark'],
    ['Setting up 2 * int_(a/√2)^a √(a² - x²) dx', '1 Mark'],
    ['Careful evaluation of upper and lower limits', '1 Mark'],
    ['Simplifying to (a²/2)(π/2 - 1) sq units', '1 Mark']
  ]
));

// Q6 (Ex 8.1 Q8 - Bisection of Area by Line x = a)
questions.push(createQCard(
  'c12m-ch8-q6',
  'Q6',
  'Exercise 8.1 (Verbatim)',
  `The area between $x = y^2$ and $x = 4$ is divided into two equal parts by the line $x = a$, find the value of $a$.`,
  `<p>The curve $x = y^2$ is symmetric about the x-axis. The total area from $x = 0$ to $x = 4$ is:</p>
  $$A_{\\text{total}} = 2 \\int_0^4 \\sqrt{x} \\, dx = 2 \\left[ \\frac{2}{3} x^{3/2} \\right]_0^4 = \\frac{4}{3} [4^{3/2} - 0] = \\frac{4}{3} (8) = \\frac{32}{3}$$
  <p>The line $x = a$ ($0 < a < 4$) divides this area into two equal parts, so the area from $x = 0$ to $x = a$ must equal half of the total area:</p>
  $$A_1 = 2 \\int_0^a \\sqrt{x} \\, dx = \\frac{1}{2} A_{\\text{total}} = \\frac{16}{3}$$
  $$2 \\left[ \\frac{2}{3} x^{3/2} \\right]_0^a = \\frac{16}{3}$$
  $$\\frac{4}{3} a^{3/2} = \\frac{16}{3}$$
  $$a^{3/2} = \\frac{16}{4} = 4$$
  $$a = 4^{2/3} = (2^2)^{2/3} = \\mathbf{4^{2/3} = 2^{4/3} = 2\\sqrt[3]{2}}$$`,
  '3 Marks',
  [
    ['Calculating total area between x = y² and x = 4 as 32/3', '1 Mark'],
    ['Setting area from 0 to a equal to 16/3: (4/3) a^(3/2) = 16/3', '1 Mark'],
    ['Solving for a = 4^(2/3) or 2^(4/3)', '1 Mark']
  ]
));

// Q7 (Ex 8.1 Q9 - Parabola y = x^2 and Line y = |x| with Diagram)
questions.push(createQCard(
  'c12m-ch8-q7',
  'Q7',
  'Exercise 8.1 (Verbatim)',
  `Find the area of the region bounded by the parabola $y = x^2$ and $y = |x|$.`,
  `<p><strong>Step 1: Symmetry & Intersection:</strong></p>
  Both $y = x^2$ and $y = |x|$ are symmetric about the y-axis.
  <br>In the first quadrant ($x \\ge 0$), $y = x$.
  <br>Intersection points: $x^2 = x \\implies x(x - 1) = 0 \\implies x = 0, \\; x = 1$.
  <br>For $x \\in [0, 1]$, the line $y = x$ lies above the parabola $y = x^2$.

  <!-- Inline Geometric SVG Diagram -->
  <div style="text-align:center; margin:16px 0;">
    <svg viewBox="0 0 340 220" style="max-width:340px; width:100%; height:auto; background:#ffffff; border:1px solid #c7d2fe; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.04);">
      <!-- Axes -->
      <line x1="20" y1="180" x2="320" y2="180" stroke="#64748b" stroke-width="1.5"/>
      <line x1="170" y1="20" x2="170" y2="200" stroke="#64748b" stroke-width="1.5"/>
      <polygon points="320,177 326,180 320,183" fill="#64748b"/>
      <polygon points="167,20 170,14 173,20" fill="#64748b"/>
      <text x="325" y="184" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">X</text>
      <text x="170" y="12" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">Y</text>
      <text x="158" y="195" font-family="sans-serif" font-size="11" fill="#64748b">O(0,0)</text>
      <!-- Shaded Regions: Left (-1 to 0) and Right (0 to 1) -->
      <path d="M 170 180 Q 200 180 240 110 L 170 180 Z" fill="#c7d2fe" fill-opacity="0.8"/>
      <path d="M 170 180 Q 140 180 100 110 L 170 180 Z" fill="#c7d2fe" fill-opacity="0.8"/>
      <!-- Parabola y = x^2 -->
      <path d="M 80 80 Q 170 210 260 80" stroke="#4f46e5" stroke-width="2.5" fill="none"/>
      <text x="265" y="85" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4f46e5">y = x²</text>
      <!-- Lines y = |x| -->
      <line x1="170" y1="180" x2="270" y2="80" stroke="#dc2626" stroke-width="2"/>
      <line x1="170" y1="180" x2="70" y2="80" stroke="#dc2626" stroke-width="2"/>
      <text x="240" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">y = x</text>
      <text x="60" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">y = -x</text>
      <!-- Intersection markers -->
      <circle cx="240" cy="110" r="3.5" fill="#dc2626"/>
      <text x="245" y="115" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1e293b">(1, 1)</text>
      <circle cx="100" cy="110" r="3.5" fill="#dc2626"/>
      <text x="60" y="115" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1e293b">(-1, 1)</text>
    </svg>
    <div style="font-size:0.8rem; color:#64748b; margin-top:4px;">Figure 8.5: Parabola $y = x^2$ enclosed by two wings of $y = |x|$</div>
  </div>

  <p><strong>Step 2: Total Area by Symmetry:</strong></p>
  $$\\text{Total Area } A = 2 \\int_0^1 (y_{\\text{upper}} - y_{\\text{lower}}) \\, dx = 2 \\int_0^1 (x - x^2) \\, dx$$

  <p><strong>Step 3: Integration:</strong></p>
  $$A = 2 \\left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_0^1 = 2 \\left[ \\frac{1}{2} - \\frac{1}{3} \\right] = 2 \\left( \\frac{1}{6} \\right) = \\mathbf{\\frac{1}{3}\\text{ sq. units}}$$`,
  '3 Marks',
  [
    ['Sketch showing symmetry about y-axis and intersection at (1, 1)', '1 Mark'],
    ['Formulating integral 2 * int_0^1 (x - x²) dx', '1 Mark'],
    ['Evaluation to 1/3 sq units', '1 Mark']
  ]
));

// Q8 (Ex 8.1 Q10 - Parabola x^2 = 4y and Line x = 4y - 2 with Diagram)
questions.push(createQCard(
  'c12m-ch8-q8',
  'Q8',
  'Exercise 8.1 (Verbatim)',
  `Find the area bounded by the curve $x^2 = 4y$ and the line $x = 4y - 2$.`,
  `<p><strong>Step 1: Points of Intersection:</strong></p>
  From the line, $4y = x + 2$. Substitute into parabola equation:
  $$x^2 = x + 2 \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0$$
  $$x = -1, \\quad x = 2$$
  The line and curve intersect at $x = -1$ and $x = 2$.
  <br>Corresponding y-values:
  <ul>
    <li>At $x = -1$: $y = \\frac{-1 + 2}{4} = \\frac{1}{4}$</li>
    <li>At $x = 2$: $y = \\frac{2 + 2}{4} = 1$</li>
  </ul>

  <!-- Inline Geometric SVG Diagram -->
  <div style="text-align:center; margin:16px 0;">
    <svg viewBox="0 0 340 220" style="max-width:340px; width:100%; height:auto; background:#ffffff; border:1px solid #c7d2fe; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.04);">
      <!-- Axes -->
      <line x1="20" y1="180" x2="320" y2="180" stroke="#64748b" stroke-width="1.5"/>
      <line x1="170" y1="20" x2="170" y2="200" stroke="#64748b" stroke-width="1.5"/>
      <polygon points="320,177 326,180 320,183" fill="#64748b"/>
      <polygon points="167,20 170,14 173,20" fill="#64748b"/>
      <text x="325" y="184" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">X</text>
      <text x="170" y="12" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">Y</text>
      <!-- Parabola x^2 = 4y -->
      <path d="M 80 70 Q 170 210 260 70" stroke="#4f46e5" stroke-width="2" fill="none"/>
      <!-- Line x = 4y - 2 -->
      <line x1="70" y1="170" x2="270" y2="70" stroke="#dc2626" stroke-width="2"/>
      <text x="275" y="70" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#dc2626">x = 4y - 2</text>
      <!-- Shaded area between line and parabola -->
      <path d="M 125 155 Q 170 185 240 85 L 125 155 Z" fill="#c7d2fe" fill-opacity="0.8"/>
      <!-- Intersection points -->
      <circle cx="240" cy="85" r="4" fill="#dc2626"/>
      <text x="245" y="90" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1e293b">(2, 1)</text>
      <circle cx="125" cy="155" r="4" fill="#dc2626"/>
      <text x="75" y="150" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1e293b">(-1, 1/4)</text>
    </svg>
    <div style="font-size:0.8rem; color:#64748b; margin-top:4px;">Figure 8.6: Region between line $x = 4y - 2$ and parabola $x^2 = 4y$</div>
  </div>

  <p><strong>Step 2: Upper and Lower Curves:</strong></p>
  In the interval $[-1, 2]$, the line lies above the parabola:
  $$y_{\\text{upper}} = \\frac{x + 2}{4}, \\quad y_{\\text{lower}} = \\frac{x^2}{4}$$

  <p><strong>Step 3: Area Integral:</strong></p>
  $$A = \\int_{-1}^2 (y_{\\text{upper}} - y_{\\text{lower}}) \\, dx = \\frac{1}{4} \\int_{-1}^2 (x + 2 - x^2) \\, dx$$
  $$A = \\frac{1}{4} \\left[ \\frac{x^2}{2} + 2x - \\frac{x^3}{3} \\right]_{-1}^2$$
  Evaluate at $x = 2$:
  $$\\text{Upper} = \\frac{4}{2} + 4 - \\frac{8}{3} = 6 - \\frac{8}{3} = \\frac{10}{3}$$
  Evaluate at $x = -1$:
  $$\\text{Lower} = \\frac{1}{2} - 2 - \\left(-\\frac{1}{3}\\right) = -\\frac{3}{2} + \\frac{1}{3} = -\\frac{7}{6}$$
  Difference:
  $$A = \\frac{1}{4} \\left[ \\frac{10}{3} - \\left(-\\frac{7}{6}\\right) \\right] = \\frac{1}{4} \\left[ \\frac{20 + 7}{6} \\right] = \\frac{1}{4} \\left(\\frac{27}{6}\\right) = \\frac{1}{4} \\left(\\frac{9}{2}\\right) = \\mathbf{\\frac{9}{8}\\text{ sq. units}}$$`,
  '4 Marks',
  [
    ['Finding intersection points x = -1 and x = 2', '1 Mark'],
    ['Setting up integral: 1/4 int_{-1}^2 (x + 2 - x²) dx', '1.5 Marks'],
    ['Evaluating limits accurately: 9/8 sq units', '1.5 Marks']
  ]
));

// Q9 (Ex 8.1 Q11 - Parabola y^2 = 4x and Line x = 3)
questions.push(createQCard(
  'c12m-ch8-q9',
  'Q9',
  'Exercise 8.1 (Verbatim)',
  `Find the area of the region bounded by the curve $y^2 = 4x$ and the line $x = 3$.`,
  `<p><strong>Step 1: Geometric Symmetry:</strong></p>
  The parabola $y^2 = 4x$ is symmetric about the x-axis.
  <br>The vertical line $x = 3$ bounds the region from $x = 0$ to $x = 3$.
  <br>The region spans both above and below the x-axis:
  $$\\text{Total Area } A = 2 \\int_0^3 y \\, dx = 2 \\int_0^3 2\\sqrt{x} \\, dx = 4 \\int_0^3 x^{1/2} \\, dx$$

  <p><strong>Step 2: Integration:</strong></p>
  $$A = 4 \\left[ \\frac{x^{3/2}}{3/2} \\right]_0^3 = 4 \\cdot \\frac{2}{3} \\left[ x^{3/2} \\right]_0^3 = \\frac{8}{3} [3^{3/2} - 0]$$
  Since $3^{3/2} = 3\\sqrt{3}$:
  $$A = \\frac{8}{3} (3\\sqrt{3}) = \\mathbf{8\\sqrt{3}\\text{ sq. units}}$$`,
  '3 Marks',
  [
    ['Sketch of parabola and vertical line showing 2 symmetrical halves', '1 Mark'],
    ['Formulation: 2 * int_0^3 2√x dx', '1 Mark'],
    ['Evaluation yielding 8√3 sq units', '1 Mark']
  ]
));

// Q10 (Ex 8.1 Q12, Q13 - Objective Board Questions on Standard Regions)
questions.push(createQCard(
  'c12m-ch8-q10',
  'Q10',
  'Exercise 8.1 (Verbatim)',
  `(i) Area lying in the first quadrant and bounded by the circle $x^2 + y^2 = 4$ and the lines $x = 0$ and $x = 2$ is:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;(A) $\\pi$ &nbsp;&nbsp;&nbsp;&nbsp; (B) $\\frac{\\pi}{2}$ &nbsp;&nbsp;&nbsp;&nbsp; (C) $\\frac{\\pi}{3}$ &nbsp;&nbsp;&nbsp;&nbsp; (D) $\\frac{\\pi}{4}$<br><br>
  (ii) Area of the region bounded by the curve $y^2 = 4x$, y-axis and the line $y = 3$ is:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;(A) $2$ &nbsp;&nbsp;&nbsp;&nbsp; (B) $\\frac{9}{4}$ &nbsp;&nbsp;&nbsp;&nbsp; (C) $\\frac{9}{3}$ &nbsp;&nbsp;&nbsp;&nbsp; (D) $\\frac{9}{2}$`,
  `<p><strong>(i) Circle $x^2 + y^2 = 4$ in first quadrant:</strong></p>
  The lines $x = 0$ (y-axis) and $x = 2$ (the right endpoint of the circle) bound exactly one quadrant of the circle.
  $$A = \\frac{1}{4}(\\text{Area of circle of radius } 2) = \\frac{1}{4}(\\pi \\cdot 2^2) = \\frac{4}{4}\\pi = \\mathbf{\\pi}$$
  By integration:
  $$A = \\int_0^2 \\sqrt{4 - x^2} \\, dx = \\left[ \\frac{x}{2}\\sqrt{4 - x^2} + 2\\sin^{-1}\\left(\\frac{x}{2}\\right) \\right]_0^2 = 2\\sin^{-1}(1) = 2\\left(\\frac{\\pi}{2}\\right) = \\pi$$
  <strong>Correct Option: (A) $\\pi$</strong>

  <p><strong>(ii) Curve $y^2 = 4x$, y-axis and $y = 3$:</strong></p>
  Express $x$ as a function of $y$:
  $$x = \\frac{y^2}{4}$$
  Using horizontal strips from $y = 0$ to $y = 3$:
  $$A = \\int_0^3 x \\, dy = \\int_0^3 \\frac{y^2}{4} \\, dy = \\frac{1}{4} \\left[ \\frac{y^3}{3} \\right]_0^3 = \\frac{1}{12} [3^3 - 0] = \\frac{27}{12} = \\mathbf{\\frac{9}{4}}$$
  <strong>Correct Option: (B) $\\frac{9}{4}$</strong>`,
  '2 Marks',
  [
    ['(i) Selection of option (A) π with calculation', '1 Mark'],
    ['(ii) Horizontal strip integration yielding 9/4 and option (B)', '1 Mark']
  ]
));

saveChapter(
  8,
  'Application of Integrals',
  svgDiagram,
  'NCERT Exercises 8.1 (10 Verbatim Core Questions)',
  questions,
  'Differential Equations'
);
