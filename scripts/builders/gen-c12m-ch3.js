// scripts/builders/gen-c12m-ch3.js
// Chapter 3: Matrices (16 Comprehensive Verbatim Questions)
const { createQCard, saveChapter } = require('./c12m-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f5f3ff; border:1px solid #ddd6fe; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#4f46e5; font-size:1.05rem;">📐 Matrix Operations & Symmetry Map</h4>
  <svg viewBox="0 0 880 260" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #c7d2fe;">
    <!-- Operations Card -->
    <rect x="20" y="20" width="260" height="220" rx="10" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
    <text x="150" y="46" font-family="sans-serif" font-size="14" font-weight="bold" fill="#3730a3" text-anchor="middle">Matrix Multiplication</text>
    <line x1="35" y1="56" x2="265" y2="56" stroke="#6366f1" stroke-width="1.5"/>

    <text x="35" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4338ca">Compatibility Rule:</text>
    <text x="35" y="98" font-family="sans-serif" font-size="11" fill="#334155">&bull; $A_{m \\times n} \\times B_{n \\times p} = C_{m \\times p}$</text>
    <text x="35" y="114" font-family="sans-serif" font-size="11" fill="#334155">&bull; Columns of $A$ = Rows of $B$</text>

    <text x="35" y="142" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4338ca">Key Properties:</text>
    <text x="35" y="160" font-family="sans-serif" font-size="11" fill="#dc2626">&bull; Non-commutative: $AB \\neq BA$ (in general)</text>
    <text x="35" y="178" font-family="sans-serif" font-size="11" fill="#334155">&bull; Associative: $(AB)C = A(BC)$</text>
    <text x="35" y="196" font-family="sans-serif" font-size="11" fill="#334155">&bull; Distributive: $A(B + C) = AB + AC$</text>
    <text x="35" y="218" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">&bull; Identity: $AI = IA = A$</text>

    <!-- Transpose & Inversion Card -->
    <rect x="310" y="20" width="260" height="220" rx="10" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="2"/>
    <text x="440" y="46" font-family="sans-serif" font-size="14" font-weight="bold" fill="#5b21b6" text-anchor="middle">Transpose Properties</text>
    <line x1="325" y1="56" x2="555" y2="56" stroke="#8b5cf6" stroke-width="1.5"/>

    <text x="325" y="80" font-family="sans-serif" font-size="11" fill="#334155">&bull; $(A')' = A$</text>
    <text x="325" y="105" font-family="sans-serif" font-size="11" fill="#334155">&bull; $(kA)' = kA'$</text>
    <text x="325" y="130" font-family="sans-serif" font-size="11" fill="#334155">&bull; $(A + B)' = A' + B'$</text>
    <text x="325" y="155" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6d28d9">&bull; Reversal Law:</text>
    <text x="340" y="175" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">$(AB)' = B'A'$</text>
    <text x="325" y="202" font-family="sans-serif" font-size="11" fill="#334155">&bull; $(ABC)' = C'B'A'$</text>

    <!-- Symmetric vs Skew-Symmetric Card -->
    <rect x="600" y="20" width="260" height="220" rx="10" fill="#fdf4ff" stroke="#ec4899" stroke-width="2"/>
    <text x="730" y="46" font-family="sans-serif" font-size="14" font-weight="bold" fill="#9d174d" text-anchor="middle">Symmetric & Skew-Symmetric</text>
    <line x1="615" y1="56" x2="845" y2="56" stroke="#ec4899" stroke-width="1.5"/>

    <text x="615" y="78" font-family="sans-serif" font-size="11" font-weight="bold" fill="#be185d">Symmetric Matrix:</text>
    <text x="615" y="96" font-family="sans-serif" font-size="11" fill="#334155">&bull; $A' = A \\iff a_{ij} = a_{ji}$</text>

    <text x="615" y="124" font-family="sans-serif" font-size="11" font-weight="bold" fill="#be185d">Skew-Symmetric Matrix:</text>
    <text x="615" y="142" font-family="sans-serif" font-size="11" fill="#334155">&bull; $A' = -A \\iff a_{ij} = -a_{ji}$</text>
    <text x="615" y="158" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">&bull; All diagonal elements are ZERO ($a_{ii} = 0$)</text>

    <text x="615" y="186" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4f46e5">Theorem: Any square matrix $A$:</text>
    <text x="615" y="204" font-family="sans-serif" font-size="10.5" fill="#334155">$A = \\frac{1}{2}(A + A') + \\frac{1}{2}(A - A')$</text>
    <text x="615" y="220" font-family="sans-serif" font-size="9.5" fill="#475569">(Symmetric part + Skew-symmetric part)</text>
  </svg>
</div>`;

const questions = [];

// Q1 (Ex 3.1 Q1)
questions.push(createQCard(
  'c12m-ch3-q1',
  'Q1',
  'Exercise 3.1 (Verbatim)',
  `In the matrix $A = \\begin{bmatrix} 2 & 5 & 19 & -7 \\\\ 35 & -2 & \\frac{5}{2} & 12 \\\\ \\sqrt{3} & 1 & -5 & 17 \\end{bmatrix}$, write:
  <br>(i) The order of the matrix,
  <br>(ii) The number of elements,
  <br>(iii) Write the elements $a_{13}, a_{21}, a_{33}, a_{24}, a_{23}$.`,
  `<p><strong>Step-by-Step Solutions:</strong></p>
  <ol>
    <li><strong>(i) The Order of the Matrix:</strong>
      <br>The matrix $A$ has 3 horizontal rows and 4 vertical columns.
      <br>Therefore, the order of matrix $A$ is <strong>$3 \\times 4$</strong>.
    </li>
    <li><strong>(ii) The Number of Elements:</strong>
      <br>Number of elements $= 3 \\times 4 = \\mathbf{12}$.
    </li>
    <li><strong>(iii) Specific Element Positions ($a_{ij}$ denotes element in $i$-th row and $j$-th column):</strong>
      <ul>
        <li>$a_{13}$ (Row 1, Column 3) $= \\mathbf{19}$</li>
        <li>$a_{21}$ (Row 2, Column 1) $= \\mathbf{35}$</li>
        <li>$a_{33}$ (Row 3, Column 3) $= \\mathbf{-5}$</li>
        <li>$a_{24}$ (Row 2, Column 4) $= \\mathbf{12}$</li>
        <li>$a_{23}$ (Row 2, Column 3) $= \\mathbf{\\frac{5}{2}}$</li>
      </ul>
    </li>
  </ol>`,
  '2 Marks',
  [
    ['(i) Order: 3 x 4 and (ii) Number of elements = 12', '1 Mark'],
    ['(iii) Correct values for all five elements a13, a21, a33, a24, a23', '1 Mark']
  ]
));

// Q2 (Ex 3.1 Q4)
questions.push(createQCard(
  'c12m-ch3-q2',
  'Q2',
  'Exercise 3.1 (Verbatim)',
  `Construct a $2 \\times 2$ matrix, $A = [a_{ij}]$, whose elements are given by:
  <br>(i) $a_{ij} = \\frac{(i + j)^2}{2}$
  <br>(ii) $a_{ij} = \\frac{i}{j}$
  <br>(iii) $a_{ij} = \\frac{(i + 2j)^2}{2}$`,
  `<p>A general $2 \\times 2$ matrix is represented as:
  $$A = \\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix}$$</p>

  <p><strong>(i) $a_{ij} = \\frac{(i + j)^2}{2}$:</strong></p>
  <ul>
    <li>$a_{11} = \\frac{(1 + 1)^2}{2} = \\frac{4}{2} = 2$</li>
    <li>$a_{12} = \\frac{(1 + 2)^2}{2} = \\frac{9}{2}$</li>
    <li>$a_{21} = \\frac{(2 + 1)^2}{2} = \\frac{9}{2}$</li>
    <li>$a_{22} = \\frac{(2 + 2)^2}{2} = \\frac{16}{2} = 8$</li>
  </ul>
  $$A = \\begin{bmatrix} 2 & \\frac{9}{2} \\\\[6pt] \\frac{9}{2} & 8 \\end{bmatrix}$$

  <p><strong>(ii) $a_{ij} = \\frac{i}{j}$:</strong></p>
  <ul>
    <li>$a_{11} = \\frac{1}{1} = 1$, &nbsp; $a_{12} = \\frac{1}{2}$</li>
    <li>$a_{21} = \\frac{2}{1} = 2$, &nbsp; $a_{22} = \\frac{2}{2} = 1$</li>
  </ul>
  $$A = \\begin{bmatrix} 1 & \\frac{1}{2} \\\\[6pt] 2 & 1 \\end{bmatrix}$$

  <p><strong>(iii) $a_{ij} = \\frac{(i + 2j)^2}{2}$:</strong></p>
  <ul>
    <li>$a_{11} = \\frac{(1 + 2(1))^2}{2} = \\frac{9}{2}$</li>
    <li>$a_{12} = \\frac{(1 + 2(2))^2}{2} = \\frac{25}{2}$</li>
    <li>$a_{21} = \\frac{(2 + 2(1))^2}{2} = \\frac{16}{2} = 8$</li>
    <li>$a_{22} = \\frac{(2 + 2(2))^2}{2} = \\frac{36}{2} = 18$</li>
  </ul>
  $$A = \\begin{bmatrix} \\frac{9}{2} & \\frac{25}{2} \\\\[6pt] 8 & 18 \\end{bmatrix}$$`,
  '3 Marks',
  [
    ['(i) Calculation of entries and matrix construction', '1 Mark'],
    ['(ii) Calculation of entries and matrix construction', '1 Mark'],
    ['(iii) Calculation of entries and matrix construction', '1 Mark']
  ]
));

// Q3 (Ex 3.1 Q7)
questions.push(createQCard(
  'c12m-ch3-q3',
  'Q3',
  'Exercise 3.1 (Verbatim)',
  `Find the value of $a, b, c$ and $d$ from the equation:
  $$\\begin{bmatrix} a - b & 2a + c \\\\ 2a - b & 3c + d \\end{bmatrix} = \\begin{bmatrix} -1 & 5 \\\\ 0 & 13 \\end{bmatrix}$$`,
  `<p><strong>Solution:</strong></p>
  <p>Two matrices are equal if and only if their corresponding elements are equal. Equating corresponding elements gives four simultaneous equations:</p>
  <ol>
    <li>$a - b = -1$ &nbsp;&nbsp;&hellip; (1)</li>
    <li>$2a + c = 5$ &nbsp;&nbsp;&hellip; (2)</li>
    <li>$2a - b = 0$ &nbsp;&nbsp;&hellip; (3)</li>
    <li>$3c + d = 13$ &nbsp;&nbsp;&hellip; (4)</li>
  </ol>
  <p><strong>Solving for $a$ and $b$:</strong></p>
  <ul>
    <li>From equation (3): $b = 2a$.</li>
    <li>Substitute into equation (1):
      $$a - 2a = -1 \\implies -a = -1 \\implies \\mathbf{a = 1}$$</li>
    <li>Then:
      $$b = 2(1) \\implies \\mathbf{b = 2}$$</li>
  </ul>
  <p><strong>Solving for $c$ and $d$:</strong></p>
  <ul>
    <li>Substitute $a = 1$ into equation (2):
      $$2(1) + c = 5 \\implies 2 + c = 5 \\implies \\mathbf{c = 3}$$</li>
    <li>Substitute $c = 3$ into equation (4):
      $$3(3) + d = 13 \\implies 9 + d = 13 \\implies \\mathbf{d = 4}$$</li>
  </ul>
  <p><strong>Final Answer:</strong> $\\mathbf{a = 1, \\quad b = 2, \\quad c = 3, \\quad d = 4}$.</p>`,
  '3 Marks',
  [
    ['Equating corresponding entries to form 4 linear equations', '1 Mark'],
    ['Solving equations (1) and (3) for a = 1 and b = 2', '1 Mark'],
    ['Solving equations (2) and (4) for c = 3 and d = 4', '1 Mark']
  ]
));

// Q4 (Ex 3.2 Q1)
questions.push(createQCard(
  'c12m-ch3-q4',
  'Q4',
  'Exercise 3.2 (Verbatim)',
  `Let $A = \\begin{bmatrix} 2 & 4 \\\\ 3 & 2 \\end{bmatrix}, B = \\begin{bmatrix} 1 & 3 \\\\ -2 & 5 \\end{bmatrix}, C = \\begin{bmatrix} -2 & 5 \\\\ 3 & 4 \\end{bmatrix}$. Find each of the following:
  <br>(i) $A + B$
  <br>(ii) $A - B$
  <br>(iii) $3A - C$
  <br>(iv) $AB$
  <br>(v) $BA$`,
  `<div style="display:flex; flex-direction:column; gap:12px;">
    <div>
      <strong>(i) $A + B$:</strong>
      $$A + B = \\begin{bmatrix} 2 + 1 & 4 + 3 \\\\ 3 + (-2) & 2 + 5 \\end{bmatrix} = \\mathbf{\\begin{bmatrix} 3 & 7 \\\\ 1 & 7 \\end{bmatrix}}$$
    </div>

    <div>
      <strong>(ii) $A - B$:</strong>
      $$A - B = \\begin{bmatrix} 2 - 1 & 4 - 3 \\\\ 3 - (-2) & 2 - 5 \\end{bmatrix} = \\mathbf{\\begin{bmatrix} 1 & 1 \\\\ 5 & -3 \\end{bmatrix}}$$
    </div>

    <div>
      <strong>(iii) $3A - C$:</strong>
      $$3A = \\begin{bmatrix} 6 & 12 \\\\ 9 & 6 \\end{bmatrix}$$
      $$3A - C = \\begin{bmatrix} 6 - (-2) & 12 - 5 \\\\ 9 - 3 & 6 - 4 \\end{bmatrix} = \\mathbf{\\begin{bmatrix} 8 & 7 \\\\ 6 & 2 \\end{bmatrix}}$$
    </div>

    <div>
      <strong>(iv) $AB$:</strong>
      $$AB = \\begin{bmatrix} 2 & 4 \\\\ 3 & 2 \\end{bmatrix} \\begin{bmatrix} 1 & 3 \\\\ -2 & 5 \\end{bmatrix} = \\begin{bmatrix} (2)(1) + (4)(-2) & (2)(3) + (4)(5) \\\\ (3)(1) + (2)(-2) & (3)(3) + (2)(5) \\end{bmatrix}$$
      $$AB = \\begin{bmatrix} 2 - 8 & 6 + 20 \\\\ 3 - 4 & 9 + 10 \\end{bmatrix} = \\mathbf{\\begin{bmatrix} -6 & 26 \\\\ -1 & 19 \\end{bmatrix}}$$
    </div>

    <div>
      <strong>(v) $BA$:</strong>
      $$BA = \\begin{bmatrix} 1 & 3 \\\\ -2 & 5 \\end{bmatrix} \\begin{bmatrix} 2 & 4 \\\\ 3 & 2 \\end{bmatrix} = \\begin{bmatrix} (1)(2) + (3)(3) & (1)(4) + (3)(2) \\\\ (-2)(2) + (5)(3) & (-2)(4) + (5)(2) \\end{bmatrix}$$
      $$BA = \\begin{bmatrix} 2 + 9 & 4 + 6 \\\\ -4 + 15 & -8 + 10 \\end{bmatrix} = \\mathbf{\\begin{bmatrix} 11 & 10 \\\\ 11 & 2 \\end{bmatrix}}$$
      <p><em>Note:</em> Notice that $AB \\neq BA$, demonstrating that matrix multiplication is generally not commutative.</p>
    </div>
  </div>`,
  '4 Marks',
  [
    ['(i) and (ii) Correct computation of A + B and A - B', '1 Mark'],
    ['(iii) Correct computation of 3A - C', '1 Mark'],
    ['(iv) Correct row-by-column multiplication for AB', '1 Mark'],
    ['(v) Correct multiplication for BA (noting AB != BA)', '1 Mark']
  ]
));

// Q5 (Ex 3.2 Q7)
questions.push(createQCard(
  'c12m-ch3-q5',
  'Q5',
  'Exercise 3.2 (Verbatim)',
  `Find $X$ and $Y$, if:
  <br>(i) $X + Y = \\begin{bmatrix} 7 & 0 \\\\ 2 & 5 \\end{bmatrix}$ and $X - Y = \\begin{bmatrix} 3 & 0 \\\\ 0 & 3 \\end{bmatrix}$
  <br>(ii) $2X + 3Y = \\begin{bmatrix} 2 & 3 \\\\ 4 & 0 \\end{bmatrix}$ and $3X + 2Y = \\begin{bmatrix} 2 & -2 \\\\ -1 & 5 \\end{bmatrix}$`,
  `<div style="display:flex; flex-direction:column; gap:16px;">
    <div>
      <h5 style="color:#4f46e5; margin:0 0 6px 0;">(i) Solving for $X$ and $Y$:</h5>
      <p>Adding the two equations:</p>
      $$(X + Y) + (X - Y) = \\begin{bmatrix} 7 & 0 \\\\ 2 & 5 \\end{bmatrix} + \\begin{bmatrix} 3 & 0 \\\\ 0 & 3 \\end{bmatrix}$$
      $$2X = \\begin{bmatrix} 10 & 0 \\\\ 2 & 8 \\end{bmatrix} \\implies X = \\frac{1}{2}\\begin{bmatrix} 10 & 0 \\\\ 2 & 8 \\end{bmatrix} = \\mathbf{\\begin{bmatrix} 5 & 0 \\\\ 1 & 4 \\end{bmatrix}}$$
      <p>Subtracting the two equations:</p>
      $$(X + Y) - (X - Y) = \\begin{bmatrix} 7 & 0 \\\\ 2 & 5 \\end{bmatrix} - \\begin{bmatrix} 3 & 0 \\\\ 0 & 3 \\end{bmatrix}$$
      $$2Y = \\begin{bmatrix} 4 & 0 \\\\ 2 & 2 \\end{bmatrix} \\implies Y = \\frac{1}{2}\\begin{bmatrix} 4 & 0 \\\\ 2 & 2 \\end{bmatrix} = \\mathbf{\\begin{bmatrix} 2 & 0 \\\\ 1 & 1 \\end{bmatrix}}$$
    </div>

    <div>
      <h5 style="color:#4f46e5; margin:0 0 6px 0;">(ii) Solving $2X + 3Y = A$ and $3X + 2Y = B$:</h5>
      <p>Multiply equation (1) by 3 and equation (2) by 2:</p>
      $$6X + 9Y = 3\\begin{bmatrix} 2 & 3 \\\\ 4 & 0 \\end{bmatrix} = \\begin{bmatrix} 6 & 9 \\\\ 12 & 0 \\end{bmatrix} \\quad \\dots (3)$$
      $$6X + 4Y = 2\\begin{bmatrix} 2 & -2 \\\\ -1 & 5 \\end{bmatrix} = \\begin{bmatrix} 4 & -4 \\\\ -2 & 10 \\end{bmatrix} \\quad \\dots (4)$$
      <p>Subtracting (4) from (3):</p>
      $$5Y = \\begin{bmatrix} 6 - 4 & 9 - (-4) \\\\ 12 - (-2) & 0 - 10 \\end{bmatrix} = \\begin{bmatrix} 2 & 13 \\\\ 14 & -10 \\end{bmatrix}$$
      $$\\mathbf{Y = \\begin{bmatrix} \\frac{2}{5} & \\frac{13}{5} \\\\[6pt] \\frac{14}{5} & -2 \\end{bmatrix}}$$
      <p>Now multiply (1) by 2 and (2) by 3:</p>
      $$4X + 6Y = \\begin{bmatrix} 4 & 6 \\\\ 8 & 0 \\end{bmatrix}, \\quad 9X + 6Y = \\begin{bmatrix} 6 & -6 \\\\ -3 & 15 \\end{bmatrix}$$
      $$5X = \\begin{bmatrix} 6 & -6 \\\\ -3 & 15 \\end{bmatrix} - \\begin{bmatrix} 4 & 6 \\\\ 8 & 0 \\end{bmatrix} = \\begin{bmatrix} 2 & -12 \\\\ -11 & 15 \\end{bmatrix}$$
      $$\\mathbf{X = \\begin{bmatrix} \\frac{2}{5} & -\\frac{12}{5} \\\\[6pt] -\\frac{11}{5} & 3 \\end{bmatrix}}$$
    </div>
  </div>`,
  '4 Marks',
  [
    ['(i) Adding and subtracting to find X and Y accurately', '1.5 Marks'],
    ['(ii) Eliminating X to find Y using scalar multipliers', '1.5 Marks'],
    ['(ii) Solving for X accurately', '1 Mark']
  ]
));

// Q6 (Ex 3.2 Q13)
questions.push(createQCard(
  'c12m-ch3-q6',
  'Q6',
  'Exercise 3.2 (Verbatim)',
  `If $F(x) = \\begin{bmatrix} \\cos x & -\\sin x & 0 \\\\ \\sin x & \\cos x & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$, show that $F(x)F(y) = F(x + y)$.`,
  `<p><strong>Proof:</strong></p>
  <p>Given $F(x) = \\begin{bmatrix} \\cos x & -\\sin x & 0 \\\\ \\sin x & \\cos x & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$, we have:</p>
  $$F(y) = \\begin{bmatrix} \\cos y & -\\sin y & 0 \\\\ \\sin y & \\cos y & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$

  <p>Compute the matrix product $F(x)F(y)$:</p>
  $$F(x)F(y) = \\begin{bmatrix} \\cos x & -\\sin x & 0 \\\\ \\sin x & \\cos x & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} \\cos y & -\\sin y & 0 \\\\ \\sin y & \\cos y & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$

  <p>Performing row-by-column multiplication:</p>
  <p><strong>Row 1:</strong></p>
  <ul>
    <li>$R_1 C_1 = \\cos x \\cos y - \\sin x \\sin y + 0 = \\cos(x + y)$</li>
    <li>$R_1 C_2 = -\\cos x \\sin y - \\sin x \\cos y + 0 = -(\\sin x \\cos y + \\cos x \\sin y) = -\\sin(x + y)$</li>
    <li>$R_1 C_3 = 0 + 0 + 0 = 0$</li>
  </ul>

  <p><strong>Row 2:</strong></p>
  <ul>
    <li>$R_2 C_1 = \\sin x \\cos y + \\cos x \\sin y + 0 = \\sin(x + y)$</li>
    <li>$R_2 C_2 = -\\sin x \\sin y + \\cos x \\cos y + 0 = \\cos x \\cos y - \\sin x \\sin y = \\cos(x + y)$</li>
    <li>$R_2 C_3 = 0 + 0 + 0 = 0$</li>
  </ul>

  <p><strong>Row 3:</strong></p>
  <ul>
    <li>$R_3 C_1 = 0 + 0 + 0 = 0$</li>
    <li>$R_3 C_2 = 0 + 0 + 0 = 0$</li>
    <li>$R_3 C_3 = 0 + 0 + 1 = 1$</li>
  </ul>

  <p>Assembling the resulting matrix:</p>
  $$F(x)F(y) = \\begin{bmatrix} \\cos(x + y) & -\\sin(x + y) & 0 \\\\ \\sin(x + y) & \\cos(x + y) & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} = F(x + y)$$
  <p>Hence Proved.</p>`,
  '3 Marks',
  [
    ['Writing F(y) and setting up 3x3 matrix multiplication', '1 Mark'],
    ['Evaluating individual entries using compound angle formulas cos(x+y) and sin(x+y)', '1.5 Marks'],
    ['Concluding F(x)F(y) = F(x + y)', '0.5 Mark']
  ]
));

// Q7 (Ex 3.2 Q18)
questions.push(createQCard(
  'c12m-ch3-q7',
  'Q7',
  'Exercise 3.2 (Verbatim)',
  `If $A = \\begin{bmatrix} 0 & -\\tan\\frac{\\alpha}{2} \\\\ \\tan\\frac{\\alpha}{2} & 0 \\end{bmatrix}$ and $I$ is the identity matrix of order 2, show that:
  $$I + A = (I - A)\\begin{bmatrix} \\cos\\alpha & -\\sin\\alpha \\\\ \\sin\\alpha & \\cos\\alpha \\end{bmatrix}$$`,
  `<p><strong>Proof:</strong></p>
  <p>Let $t = \\tan\\frac{\\alpha}{2}$. Then:</p>
  $$A = \\begin{bmatrix} 0 & -t \\\\ t & 0 \\end{bmatrix}, \\quad I = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$$

  <p><strong>1. Left Hand Side (LHS):</strong></p>
  $$I + A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} + \\begin{bmatrix} 0 & -t \\\\ t & 0 \\end{bmatrix} = \\begin{bmatrix} 1 & -t \\\\ t & 1 \\end{bmatrix} \\quad \\dots (1)$$

  <p><strong>2. Right Hand Side (RHS):</strong></p>
  $$I - A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} - \\begin{bmatrix} 0 & -t \\\\ t & 0 \\end{bmatrix} = \\begin{bmatrix} 1 & t \\\\ -t & 1 \\end{bmatrix}$$
  <p>Express $\\cos\\alpha$ and $\\sin\\alpha$ in terms of $t = \\tan\\frac{\\alpha}{2}$:</p>
  $$\\cos\\alpha = \\frac{1 - t^2}{1 + t^2}, \\quad \\sin\\alpha = \\frac{2t}{1 + t^2}$$
  <p>Now evaluate the product $(I - A)M$:</p>
  $$(I - A)\\begin{bmatrix} \\cos\\alpha & -\\sin\\alpha \\\\ \\sin\\alpha & \\cos\\alpha \\end{bmatrix} = \\begin{bmatrix} 1 & t \\\\ -t & 1 \\end{bmatrix} \\frac{1}{1 + t^2}\\begin{bmatrix} 1 - t^2 & -2t \\\\ 2t & 1 - t^2 \\end{bmatrix}$$
  $$= \\frac{1}{1 + t^2} \\begin{bmatrix} 1(1 - t^2) + t(2t) & 1(-2t) + t(1 - t^2) \\\\ -t(1 - t^2) + 1(2t) & -t(-2t) + 1(1 - t^2) \\end{bmatrix}$$
  $$= \\frac{1}{1 + t^2} \\begin{bmatrix} 1 - t^2 + 2t^2 & -2t + t - t^3 \\\\ -t + t^3 + 2t & 2t^2 + 1 - t^2 \\end{bmatrix}$$
  $$= \\frac{1}{1 + t^2} \\begin{bmatrix} 1 + t^2 & -t(1 + t^2) \\\\ t(1 + t^2) & 1 + t^2 \\end{bmatrix}$$
  <p>Dividing every element by $(1 + t^2)$:</p>
  $$= \\begin{bmatrix} 1 & -t \\\\ t & 1 \\end{bmatrix} \\quad \\dots (2)$$

  <p>From (1) and (2), $\\mathbf{LHS = RHS}$. Hence Proved.</p>`,
  '4 Marks',
  [
    ['Substitution t = tan(alpha/2) and finding LHS = [[1, -t], [t, 1]]', '1 Mark'],
    ['Writing cos(alpha) and sin(alpha) in terms of t', '1 Mark'],
    ['Multiplication of (I - A) with the trigonometric matrix', '1.5 Marks'],
    ['Simplification leading to LHS = RHS', '0.5 Mark']
  ]
));

// Q8 (Ex 3.3 Q1 & Q2)
questions.push(createQCard(
  'c12m-ch3-q8',
  'Q8',
  'Exercise 3.3 (Verbatim)',
  `If $A = \\begin{bmatrix} -1 & 2 & 3 \\\\ 5 & 7 & 9 \\\\ -2 & 1 & 1 \\end{bmatrix}$ and $B = \\begin{bmatrix} -4 & 1 & -5 \\\\ 1 & 2 & 0 \\\\ 1 & 3 & 1 \\end{bmatrix}$, then verify that:
  <br>(i) $(A + B)' = A' + B'$
  <br>(ii) $(A - B)' = A' - B'$`,
  `<p><strong>Verification:</strong></p>
  <p>We first find the transposes $A'$ and $B'$:</p>
  $$A' = \\begin{bmatrix} -1 & 5 & -2 \\\\ 2 & 7 & 1 \\\\ 3 & 9 & 1 \\end{bmatrix}, \\quad B' = \\begin{bmatrix} -4 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ -5 & 0 & 1 \\end{bmatrix}$$

  <p><strong>(i) Verify $(A + B)' = A' + B'$:</strong></p>
  $$A + B = \\begin{bmatrix} -1-4 & 2+1 & 3-5 \\\\ 5+1 & 7+2 & 9+0 \\\\ -2+1 & 1+3 & 1+1 \\end{bmatrix} = \\begin{bmatrix} -5 & 3 & -2 \\\\ 6 & 9 & 9 \\\\ -1 & 4 & 2 \\end{bmatrix}$$
  $$(A + B)' = \\begin{bmatrix} -5 & 6 & -1 \\\\ 3 & 9 & 4 \\\\ -2 & 9 & 2 \\end{bmatrix}$$
  <p>Now compute $A' + B'$:</p>
  $$A' + B' = \\begin{bmatrix} -1-4 & 5+1 & -2+1 \\\\ 2+1 & 7+2 & 1+3 \\\\ 3-5 & 9+0 & 1+1 \\end{bmatrix} = \\begin{bmatrix} -5 & 6 & -1 \\\\ 3 & 9 & 4 \\\\ -2 & 9 & 2 \\end{bmatrix}$$
  <p>Hence, $(A + B)' = A' + B'$ verified.</p>

  <p><strong>(ii) Verify $(A - B)' = A' - B'$:</strong></p>
  $$A - B = \\begin{bmatrix} -1-(-4) & 2-1 & 3-(-5) \\\\ 5-1 & 7-2 & 9-0 \\\\ -2-1 & 1-3 & 1-1 \\end{bmatrix} = \\begin{bmatrix} 3 & 1 & 8 \\\\ 4 & 5 & 9 \\\\ -3 & -2 & 0 \\end{bmatrix}$$
  $$(A - B)' = \\begin{bmatrix} 3 & 4 & -3 \\\\ 1 & 5 & -2 \\\\ 8 & 9 & 0 \\end{bmatrix}$$
  <p>Now compute $A' - B'$:</p>
  $$A' - B' = \\begin{bmatrix} -1-(-4) & 5-1 & -2-1 \\\\ 2-1 & 7-2 & 1-3 \\\\ 3-(-5) & 9-0 & 1-1 \\end{bmatrix} = \\begin{bmatrix} 3 & 4 & -3 \\\\ 1 & 5 & -2 \\\\ 8 & 9 & 0 \\end{bmatrix}$$
  <p>Hence, $(A - B)' = A' - B'$ verified.</p>`,
  '3 Marks',
  [
    ['Finding transposes A\' and B\' accurately', '1 Mark'],
    ['(i) Calculating (A + B)\' and showing equality with A\' + B\'', '1 Mark'],
    ['(ii) Calculating (A - B)\' and showing equality with A\' - B\'', '1 Mark']
  ]
));

// Q9 (Ex 3.3 Q5)
questions.push(createQCard(
  'c12m-ch3-q9',
  'Q9',
  'Exercise 3.3 (Verbatim)',
  `For the matrices $A$ and $B$, verify that $(AB)' = B'A'$, where:
  <br>(i) $A = \\begin{bmatrix} 1 \\\\ -4 \\\\ 3 \\end{bmatrix}, B = \\begin{bmatrix} -1 & 2 & 1 \\end{bmatrix}$
  <br>(ii) $A = \\begin{bmatrix} 0 \\\\ 1 \\\\ 2 \\end{bmatrix}, B = \\begin{bmatrix} 1 & 5 & 7 \\end{bmatrix}$`,
  `<div style="display:flex; flex-direction:column; gap:16px;">
    <div>
      <h5 style="color:#4f46e5; margin:0 0 6px 0;">(i) $A = \\begin{bmatrix} 1 \\\\ -4 \\\\ 3 \\end{bmatrix}_{3 \\times 1}, \\quad B = \\begin{bmatrix} -1 & 2 & 1 \\end{bmatrix}_{1 \\times 3}$:</h5>
      <p>Compute $AB$ ($3 \\times 3$ matrix):</p>
      $$AB = \\begin{bmatrix} (1)(-1) & (1)(2) & (1)(1) \\\\ (-4)(-1) & (-4)(2) & (-4)(1) \\\\ (3)(-1) & (3)(2) & (3)(1) \\end{bmatrix} = \\begin{bmatrix} -1 & 2 & 1 \\\\ 4 & -8 & -4 \\\\ -3 & 6 & 3 \\end{bmatrix}$$
      $$(AB)' = \\begin{bmatrix} -1 & 4 & -3 \\\\ 2 & -8 & 6 \\\\ 1 & -4 & 3 \\end{bmatrix}$$
      <p>Now compute $B'A'$: Here $B' = \\begin{bmatrix} -1 \\\\ 2 \\\\ 1 \\end{bmatrix}_{3 \\times 1}$ and $A' = \\begin{bmatrix} 1 & -4 & 3 \\end{bmatrix}_{1 \\times 3}$:</p>
      $$B'A' = \\begin{bmatrix} -1 \\\\ 2 \\\\ 1 \\end{bmatrix} \\begin{bmatrix} 1 & -4 & 3 \\end{bmatrix} = \\begin{bmatrix} -1 & 4 & -3 \\\\ 2 & -8 & 6 \\\\ 1 & -4 & 3 \\end{bmatrix}$$
      <p>Hence, $(AB)' = B'A'$ is verified.</p>
    </div>

    <div>
      <h5 style="color:#4f46e5; margin:0 0 6px 0;">(ii) $A = \\begin{bmatrix} 0 \\\\ 1 \\\\ 2 \\end{bmatrix}, \\quad B = \\begin{bmatrix} 1 & 5 & 7 \\end{bmatrix}$:</h5>
      $$AB = \\begin{bmatrix} (0)(1) & (0)(5) & (0)(7) \\\\ (1)(1) & (1)(5) & (1)(7) \\\\ (2)(1) & (2)(5) & (2)(7) \\end{bmatrix} = \\begin{bmatrix} 0 & 0 & 0 \\\\ 1 & 5 & 7 \\\\ 2 & 10 & 14 \\end{bmatrix}$$
      $$(AB)' = \\begin{bmatrix} 0 & 1 & 2 \\\\ 0 & 5 & 10 \\\\ 0 & 7 & 14 \\end{bmatrix}$$
      <p>Now $B' = \\begin{bmatrix} 1 \\\\ 5 \\\\ 7 \\end{bmatrix}$ and $A' = \\begin{bmatrix} 0 & 1 & 2 \\end{bmatrix}$:</p>
      $$B'A' = \\begin{bmatrix} 1 \\\\ 5 \\\\ 7 \\end{bmatrix} \\begin{bmatrix} 0 & 1 & 2 \\end{bmatrix} = \\begin{bmatrix} 0 & 1 & 2 \\\\ 0 & 5 & 10 \\\\ 0 & 7 & 14 \\end{bmatrix}$$
      <p>Hence, $(AB)' = B'A'$ is verified.</p>
    </div>
  </div>`,
  '3 Marks',
  [
    ['(i) Calculating AB and (AB)\'', '1 Mark'],
    ['(i) Calculating B\'A\' and showing (AB)\' = B\'A\'', '1 Mark'],
    ['(ii) Multiplication and transpose verification for second case', '1 Mark']
  ]
));

// Q10 (Ex 3.3 Q10)
questions.push(createQCard(
  'c12m-ch3-q10',
  'Q10',
  'Exercise 3.3 (Verbatim)',
  `Express the following matrices as the sum of a symmetric and a skew symmetric matrix:
  <br>(i) $\\begin{bmatrix} 3 & 5 \\\\ 1 & -1 \\end{bmatrix}$
  <br>(ii) $\\begin{bmatrix} 6 & -2 & 2 \\\\ -2 & 3 & -1 \\\\ 2 & -1 & 3 \\end{bmatrix}$`,
  `<p><strong>Theoretical Basis:</strong></p>
  <p>Any square matrix $A$ can be uniquely expressed as $A = P + Q$, where:
  $$P = \\frac{1}{2}(A + A') \\quad \\text{(Symmetric matrix, since } P' = P)$$
  $$Q = \\frac{1}{2}(A - A') \\quad \\text{(Skew-symmetric matrix, since } Q' = -Q)$$</p>

  <p><strong>(i) Let $A = \\begin{bmatrix} 3 & 5 \\\\ 1 & -1 \\end{bmatrix}$:</strong></p>
  <ul>
    <li>$A' = \\begin{bmatrix} 3 & 1 \\\\ 5 & -1 \\end{bmatrix}$</li>
    <li>$A + A' = \\begin{bmatrix} 6 & 6 \\\\ 6 & -2 \\end{bmatrix} \\implies P = \\frac{1}{2}(A + A') = \\begin{bmatrix} 3 & 3 \\\\ 3 & -1 \\end{bmatrix}$</li>
    <li>Check $P'$: $P' = \\begin{bmatrix} 3 & 3 \\\\ 3 & -1 \\end{bmatrix} = P$. &rarr; <strong>Symmetric</strong>.</li>
    <li>$A - A' = \\begin{bmatrix} 0 & 4 \\\\ -4 & 0 \\end{bmatrix} \\implies Q = \\frac{1}{2}(A - A') = \\begin{bmatrix} 0 & 2 \\\\ -2 & 0 \\end{bmatrix}$</li>
    <li>Check $Q'$: $Q' = \\begin{bmatrix} 0 & -2 \\\\ 2 & 0 \\end{bmatrix} = -Q$. &rarr; <strong>Skew-symmetric</strong>.</li>
    <li>Check sum: $P + Q = \\begin{bmatrix} 3 & 3 \\\\ 3 & -1 \\end{bmatrix} + \\begin{bmatrix} 0 & 2 \\\\ -2 & 0 \\end{bmatrix} = \\begin{bmatrix} 3 & 5 \\\\ 1 & -1 \\end{bmatrix} = A$.</li>
  </ul>
  $$\\mathbf{A = \\begin{bmatrix} 3 & 3 \\\\ 3 & -1 \\end{bmatrix} + \\begin{bmatrix} 0 & 2 \\\\ -2 & 0 \\end{bmatrix}}$$

  <p><strong>(ii) Let $A = \\begin{bmatrix} 6 & -2 & 2 \\\\ -2 & 3 & -1 \\\\ 2 & -1 & 3 \\end{bmatrix}$:</strong></p>
  <ul>
    <li>Observe that $A' = \\begin{bmatrix} 6 & -2 & 2 \\\\ -2 & 3 & -1 \\\\ 2 & -1 & 3 \\end{bmatrix} = A$.</li>
    <li>Since $A' = A$, the matrix $A$ is itself already symmetric!</li>
    <li>$P = \\frac{1}{2}(A + A') = A = \\begin{bmatrix} 6 & -2 & 2 \\\\ -2 & 3 & -1 \\\\ 2 & -1 & 3 \\end{bmatrix}$ (Symmetric).</li>
    <li>$Q = \\frac{1}{2}(A - A') = \\mathbf{0} = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$ (Skew-symmetric).</li>
  </ul>
  $$\\mathbf{A = \\begin{bmatrix} 6 & -2 & 2 \\\\ -2 & 3 & -1 \\\\ 2 & -1 & 3 \\end{bmatrix} + \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}}$$`,
  '4 Marks',
  [
    ['Formula A = 1/2(A + A\') + 1/2(A - A\') stated', '1 Mark'],
    ['(i) Computing P (symmetric) and Q (skew-symmetric) and verifying sum', '1.5 Marks'],
    ['(ii) Identifying symmetric nature and expressing with zero skew-symmetric component', '1.5 Marks']
  ]
));

saveChapter(
  3,
  'Matrices',
  svgDiagram,
  'NCERT Exercises 3.1, 3.2 & 3.3 (10 Verbatim Core Questions)',
  questions,
  'Determinants'
);
