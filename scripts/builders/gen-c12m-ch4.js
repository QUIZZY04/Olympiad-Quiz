// scripts/builders/gen-c12m-ch4.js
// Chapter 4: Determinants (12 Questions)
const { createQCard, saveChapter } = require('./c12m-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f5f3ff; border:1px solid #ddd6fe; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#4f46e5; font-size:1.05rem;">📐 Mathematical Reference: Determinants, Adjoint, Inverse & Matrix Method</h4>
  <svg viewBox="0 0 880 260" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #c7d2fe;">
    <!-- Panel 1: Evaluation & Area -->
    <rect x="20" y="20" width="260" height="220" rx="10" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
    <text x="150" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#3730a3" text-anchor="middle">Evaluation & Area of Triangle</text>
    <line x1="35" y1="56" x2="265" y2="56" stroke="#6366f1" stroke-width="1.5"/>
    <text x="35" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">2x2 Determinant:</text>
    <text x="35" y="98" font-family="sans-serif" font-size="11" fill="#334155">$\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$</text>
    <text x="35" y="130" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Area of Triangle:</text>
    <text x="35" y="150" font-family="sans-serif" font-size="11" fill="#334155">$\\Delta = \\frac{1}{2} \\left| \\begin{matrix} x_1 & y_1 & 1 \\\\ x_2 & y_2 & 1 \\\\ x_3 & y_3 & 1 \\end{matrix} \\right|$</text>
    <text x="35" y="185" font-family="sans-serif" font-size="10.5" fill="#1e293b">&bull; Area is always positive</text>
    <text x="35" y="205" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#b91c1c">&bull; Collinear Points $\\implies \\Delta = 0$</text>

    <!-- Panel 2: Minors, Cofactors & Adjoint -->
    <rect x="310" y="20" width="260" height="220" rx="10" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="2"/>
    <text x="440" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#5b21b6" text-anchor="middle">Minors, Cofactors & Adjoint</text>
    <line x1="325" y1="56" x2="555" y2="56" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="325" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Cofactor Definition:</text>
    <text x="325" y="98" font-family="sans-serif" font-size="11" fill="#334155">$A_{ij} = (-1)^{i+j} M_{ij}$</text>
    <text x="325" y="125" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Adjoint Matrix:</text>
    <text x="325" y="145" font-family="sans-serif" font-size="11" fill="#334155">$\\operatorname{adj}(A) = [A_{ij}]^T$ (Transpose of cofactors)</text>
    <text x="325" y="175" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Key Theorem:</text>
    <text x="325" y="195" font-family="sans-serif" font-size="11" fill="#1e293b">$A(\\operatorname{adj} A) = (\\operatorname{adj} A)A = |A|I_n$</text>
    <text x="325" y="215" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">$|\\operatorname{adj} A| = |A|^{n-1}$</text>

    <!-- Panel 3: Invertibility & Matrix Method -->
    <rect x="600" y="20" width="260" height="220" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="730" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">Inverse & Matrix Method</text>
    <line x1="615" y1="56" x2="845" y2="56" stroke="#10b981" stroke-width="1.5"/>
    <text x="615" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Invertibility Criterion:</text>
    <text x="615" y="98" font-family="sans-serif" font-size="11" fill="#334155">$A^{-1}$ exists $\\iff |A| \\neq 0$ (Non-singular)</text>
    <text x="615" y="125" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Formula for Inverse:</text>
    <text x="615" y="145" font-family="sans-serif" font-size="11" fill="#334155">$A^{-1} = \\frac{1}{|A|} \\operatorname{adj}(A)$</text>
    <text x="615" y="175" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Linear System $AX = B$:</text>
    <text x="615" y="195" font-family="sans-serif" font-size="11" fill="#1e293b">If $|A| \\neq 0 \\implies X = A^{-1}B$ (Unique)</text>
    <text x="615" y="215" font-family="sans-serif" font-size="10.5" fill="#334155">If $|A|=0$: consistent/inconsistent test</text>
  </svg>
</div>`;

const questions = [];

// Q1 (Ex 4.1 Q1 & Q2)
questions.push(createQCard(
  'c12m-ch4-q1',
  'Q1',
  'Exercise 4.1 (Verbatim)',
  `Evaluate the determinants:<br>
  (i) $\\begin{vmatrix} 2 & 4 \\\\ -5 & -1 \\end{vmatrix}$<br>
  (ii) $\\begin{vmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{vmatrix}$<br>
  (iii) $\\begin{vmatrix} x^2 - x + 1 & x - 1 \\\\ x + 1 & x + 1 \\end{vmatrix}$`,
  `<p><strong>(i) $\\begin{vmatrix} 2 & 4 \\\\ -5 & -1 \\end{vmatrix}$:</strong></p>
  $$\\Delta = (2)(-1) - (4)(-5) = -2 - (-20) = -2 + 20 = 18$$

  <p><strong>(ii) $\\begin{vmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{vmatrix}$:</strong></p>
  $$\\Delta = (\\cos\\theta)(\\cos\\theta) - (-\\sin\\theta)(\\sin\\theta) = \\cos^2\\theta + \\sin^2\\theta = 1$$

  <p><strong>(iii) $\\begin{vmatrix} x^2 - x + 1 & x - 1 \\\\ x + 1 & x + 1 \\end{vmatrix}$:</strong></p>
  $$\\Delta = (x^2 - x + 1)(x + 1) - (x - 1)(x + 1)$$
  Using the standard identity $(x + 1)(x^2 - x + 1) = x^3 + 1$ and $(x - 1)(x + 1) = x^2 - 1$:
  $$\\Delta = (x^3 + 1) - (x^2 - 1) = x^3 - x^2 + 2$$`,
  '3 Marks',
  [
    ['(i) Correct evaluation of 2x2 determinant yielding 18', '1 Mark'],
    ['(ii) Applying cos²θ + sin²θ = 1 to obtain 1', '1 Mark'],
    ['(iii) Factoring or expanding algebraic expressions to obtain x³ - x² + 2', '1 Mark']
  ]
));

// Q2 (Ex 4.1 Q3 & Q4)
questions.push(createQCard(
  'c12m-ch4-q2',
  'Q2',
  'Exercise 4.1 (Verbatim)',
  `If $A = \\begin{bmatrix} 1 & 2 \\\\ 4 & 2 \\end{bmatrix}$, then show that $|2A| = 4|A|$.<br>
  Also, if $A = \\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 4 \\end{bmatrix}$, show that $|3A| = 27|A|$.`,
  `<p><strong>Part 1: Matrix $A = \\begin{bmatrix} 1 & 2 \\\\ 4 & 2 \\end{bmatrix}$:</strong></p>
  <ol>
    <li>$|A| = (1)(2) - (2)(4) = 2 - 8 = -6$.
      <br>Hence, $4|A| = 4(-6) = -24$.
    </li>
    <li>Now, $2A = 2\\begin{bmatrix} 1 & 2 \\\\ 4 & 2 \\end{bmatrix} = \\begin{bmatrix} 2 & 4 \\\\ 8 & 4 \\end{bmatrix}$.</li>
    <li>$|2A| = (2)(4) - (4)(8) = 8 - 32 = -24$.</li>
  </ol>
  <p>Thus, $|2A| = 4|A| = -24$. (Verified, in accordance with the general rule $|kA| = k^n|A|$ where $n=2$).</p>

  <p><strong>Part 2: Matrix $A = \\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 4 \\end{bmatrix}$:</strong></p>
  <ol>
    <li>Expanding $|A|$ along $C_1$:
      $$|A| = 1 \\cdot \\begin{vmatrix} 1 & 2 \\\\ 0 & 4 \\end{vmatrix} - 0 + 0 = 1(4 - 0) = 4$$
      Thus, $27|A| = 27 \\times 4 = 108$.
    </li>
    <li>Now scalar multiple $3A$:
      $$3A = \\begin{bmatrix} 3 & 0 & 3 \\\\ 0 & 3 & 6 \\\\ 0 & 0 & 12 \\end{bmatrix}$$
    </li>
    <li>Expanding $|3A|$ along $C_1$:
      $$|3A| = 3 \\cdot \\begin{vmatrix} 3 & 6 \\\\ 0 & 12 \\end{vmatrix} = 3(36 - 0) = 3 \\times 36 = 108$$
    </li>
  </ol>
  <p>Thus, $|3A| = 27|A| = 108$. (Verified since for order $n=3$, $|kA| = k^3|A| = 3^3|A| = 27|A|$).</p>`,
  '4 Marks',
  [
    ['Calculation of |A| and |2A| for 2x2 matrix proving |2A| = 4|A|', '2 Marks'],
    ['Calculation of |A| and |3A| for 3x3 matrix proving |3A| = 27|A|', '2 Marks']
  ]
));

// Q3 (Ex 4.1 Q7 & Q8)
questions.push(createQCard(
  'c12m-ch4-q3',
  'Q3',
  'Exercise 4.1 (Verbatim)',
  `Find values of $x$, if:<br>
  (i) $\\begin{vmatrix} 2 & 4 \\\\ 5 & 1 \\end{vmatrix} = \\begin{vmatrix} 2x & 4 \\\\ 6 & x \\end{vmatrix}$<br>
  (ii) $\\begin{vmatrix} 2 & 3 \\\\ 4 & 5 \\end{vmatrix} = \\begin{vmatrix} x & 3 \\\\ 2x & 5 \\end{vmatrix}$<br>
  (iii) If $\\begin{vmatrix} x & 2 \\\\ 18 & x \\end{vmatrix} = \\begin{vmatrix} 6 & 2 \\\\ 18 & 6 \\end{vmatrix}$, then find $x$.`,
  `<p><em>Crucial Note:</em> A determinant is a single scalar value, NOT a matrix. Elements cannot be equated directly; we must evaluate each determinant.</p>

  <p><strong>(i) $\\begin{vmatrix} 2 & 4 \\\\ 5 & 1 \\end{vmatrix} = \\begin{vmatrix} 2x & 4 \\\\ 6 & x \\end{vmatrix}$:</strong></p>
  $$\\text{LHS} = (2)(1) - (4)(5) = 2 - 20 = -18$$
  $$\\text{RHS} = (2x)(x) - (4)(6) = 2x^2 - 24$$
  $$2x^2 - 24 = -18 \\implies 2x^2 = 6 \\implies x^2 = 3 \\implies x = \\pm \\sqrt{3}$$

  <p><strong>(ii) $\\begin{vmatrix} 2 & 3 \\\\ 4 & 5 \\end{vmatrix} = \\begin{vmatrix} x & 3 \\\\ 2x & 5 \\end{vmatrix}$:</strong></p>
  $$\\text{LHS} = (2)(5) - (3)(4) = 10 - 12 = -2$$
  $$\\text{RHS} = (x)(5) - (3)(2x) = 5x - 6x = -x$$
  $$-x = -2 \\implies x = 2$$

  <p><strong>(iii) $\\begin{vmatrix} x & 2 \\\\ 18 & x \\end{vmatrix} = \\begin{vmatrix} 6 & 2 \\\\ 18 & 6 \\end{vmatrix}$:</strong></p>
  $$x^2 - 36 = 36 - 36 = 0$$
  $$x^2 = 36 \\implies x = \\pm 6$$`,
  '3 Marks',
  [
    ['(i) Expanding both determinants and solving 2x² = 6 => x = ±√3', '1 Mark'],
    ['(ii) Expanding determinants and solving -x = -2 => x = 2', '1 Mark'],
    ['(iii) Expanding determinants: x² - 36 = 0 => x = ±6', '1 Mark']
  ]
));

// Q4 (Ex 4.2 Q1 & Q2 - Area of Triangle)
questions.push(createQCard(
  'c12m-ch4-q4',
  'Q4',
  'Exercise 4.2 (Verbatim)',
  `(i) Find the area of the triangle whose vertices are $(1, 0)$, $(6, 0)$, and $(4, 3)$.<br>
  (ii) Show that points $A(a, b+c)$, $B(b, c+a)$, and $C(c, a+b)$ are collinear.<br>
  (iii) Find values of $k$ if area of triangle is $4\\text{ sq. units}$ and vertices are $(k, 0)$, $(4, 0)$, $(0, 2)$.`,
  `<p><strong>(i) Area of triangle with vertices $(1, 0), (6, 0), (4, 3)$:</strong></p>
  $$\\Delta = \\frac{1}{2} \\begin{vmatrix} x_1 & y_1 & 1 \\\\ x_2 & y_2 & 1 \\\\ x_3 & y_3 & 1 \\end{vmatrix} = \\frac{1}{2} \\begin{vmatrix} 1 & 0 & 1 \\\\ 6 & 0 & 1 \\\\ 4 & 3 & 1 \\end{vmatrix}$$
  Expanding along $C_2$ (which has two zeros):
  $$\\Delta = \\frac{1}{2} \\left[ -3(1 - 6) \\right] = \\frac{1}{2} [-3(-5)] = \\frac{15}{2} = 7.5\\text{ sq. units}$$

  <p><strong>(ii) Points $A(a, b+c)$, $B(b, c+a)$, $C(c, a+b)$ are collinear:</strong></p>
  $$\\Delta = \\frac{1}{2} \\begin{vmatrix} a & b+c & 1 \\\\ b & c+a & 1 \\\\ c & a+b & 1 \\end{vmatrix}$$
  Applying column operation $C_2 \\to C_2 + C_1$:
  $$\\Delta = \\frac{1}{2} \\begin{vmatrix} a & a+b+c & 1 \\\\ b & a+b+c & 1 \\\\ c & a+b+c & 1 \\end{vmatrix}$$
  Taking $(a+b+c)$ common from $C_2$:
  $$\\Delta = \\frac{a+b+c}{2} \\begin{vmatrix} a & 1 & 1 \\\\ b & 1 & 1 \\\\ c & 1 & 1 \\end{vmatrix}$$
  Since columns $C_2$ and $C_3$ are identical, the value of the determinant is $0$:
  $$\\Delta = \\frac{a+b+c}{2} \\times 0 = 0$$
  Since the area of $\\Delta ABC = 0$, the points $A, B, C$ are <strong>collinear</strong>.

  <p><strong>(iii) Vertices $(k, 0), (4, 0), (0, 2)$ with Area $= 4$:</strong></p>
  $$\\frac{1}{2} \\begin{vmatrix} k & 0 & 1 \\\\ 4 & 0 & 1 \\\\ 0 & 2 & 1 \\end{vmatrix} = \\pm 4$$
  Expanding along $C_2$:
  $$\\frac{1}{2} \\left[ -2(k - 4) \\right] = \\pm 4 \\implies -(k - 4) = \\pm 4$$
  <ul>
    <li>Case 1: $-(k - 4) = 4 \\implies k - 4 = -4 \\implies k = 0$</li>
    <li>Case 2: $-(k - 4) = -4 \\implies k - 4 = 4 \\implies k = 8$</li>
  </ul>
  Thus, $k = 0$ or $k = 8$.`,
  '4 Marks',
  [
    ['(i) Determinant formula setup and evaluation: 15/2 sq units', '1 Mark'],
    ['(ii) Determinant setup and showing value is 0 (collinearity proved)', '1.5 Marks'],
    ['(iii) Considering both positive and negative values ±4 to find k = 0, 8', '1.5 Marks']
  ]
));

// Q5 (Ex 4.3 Q1 & Q2 - Minors and Cofactors)
questions.push(createQCard(
  'c12m-ch4-q5',
  'Q5',
  'Exercise 4.3 (Verbatim)',
  `Write Minors and Cofactors of the elements of the following determinants:<br>
  (i) $\\begin{vmatrix} 2 & -4 \\\\ 0 & 3 \\end{vmatrix}$<br>
  (ii) $\\begin{vmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{vmatrix}$<br>
  (iii) Using Cofactors of elements of second row, evaluate $\\Delta = \\begin{vmatrix} 5 & 3 & 8 \\\\ 2 & 0 & 1 \\\\ 1 & 2 & 3 \\end{vmatrix}$.`,
  `<p><strong>(i) $\\begin{vmatrix} 2 & -4 \\\\ 0 & 3 \\end{vmatrix}$:</strong></p>
  <ul>
    <li>$M_{11} = 3 \\implies A_{11} = (-1)^{1+1}(3) = 3$</li>
    <li>$M_{12} = 0 \\implies A_{12} = (-1)^{1+2}(0) = 0$</li>
    <li>$M_{21} = -4 \\implies A_{21} = (-1)^{2+1}(-4) = 4$</li>
    <li>$M_{22} = 2 \\implies A_{22} = (-1)^{2+2}(2) = 2$</li>
  </ul>

  <p><strong>(ii) Identity matrix determinant:</strong></p>
  <ul>
    <li>$M_{11} = 1(1) - 0 = 1 \\implies A_{11} = 1$</li>
    <li>$M_{12} = 0 \\implies A_{12} = 0$</li>
    <li>$M_{13} = 0 \\implies A_{13} = 0$</li>
    <li>Similarly, $M_{22} = 1, A_{22} = 1$ and $M_{33} = 1, A_{33} = 1$. All other minors and cofactors are $0$.</li>
  </ul>

  <p><strong>(iii) Using Cofactors of elements of second row:</strong></p>
  $$\\Delta = a_{21} A_{21} + a_{22} A_{22} + a_{23} A_{23}$$
  Here, the second row elements are $a_{21} = 2, a_{22} = 0, a_{23} = 1$.
  <br>Calculate cofactors:
  <ul>
    <li>$A_{21} = (-1)^{2+1} M_{21} = -\\begin{vmatrix} 3 & 8 \\\\ 2 & 3 \\end{vmatrix} = -(9 - 16) = -(-7) = 7$</li>
    <li>$A_{22} = (-1)^{2+2} M_{22} = +\\begin{vmatrix} 5 & 8 \\\\ 1 & 3 \\end{vmatrix} = +(15 - 8) = 7$</li>
    <li>$A_{23} = (-1)^{2+3} M_{23} = -\\begin{vmatrix} 5 & 3 \\\\ 1 & 2 \\end{vmatrix} = -(10 - 3) = -7$</li>
  </ul>
  Now evaluate $\\Delta$:
  $$\\Delta = 2(7) + 0(7) + 1(-7) = 14 + 0 - 7 = 7$$`,
  '3 Marks',
  [
    ['(i) Correct minors and cofactors for 2x2 determinant', '1 Mark'],
    ['(ii) Minors and cofactors for 3x3 identity matrix', '1 Mark'],
    ['(iii) Second row cofactors A21=7, A22=7, A23=-7 and evaluation: Δ = 7', '1 Mark']
  ]
));

// Q6 (Ex 4.4 Q1 & Q2 - Adjoint of Matrix)
questions.push(createQCard(
  'c12m-ch4-q6',
  'Q6',
  'Exercise 4.4 (Verbatim)',
  `Find adjoint of each of the matrices:<br>
  (i) $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$<br>
  (ii) $A = \\begin{bmatrix} 1 & -1 & 2 \\\\ 2 & 3 & 5 \\\\ -2 & 0 & 1 \\end{bmatrix}$<br>
  (iii) Verify $A(\\operatorname{adj} A) = (\\operatorname{adj} A)A = |A|I$ for $A = \\begin{bmatrix} 2 & 3 \\\\ -4 & -6 \\end{bmatrix}$.`,
  `<p><strong>(i) $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$:</strong></p>
  Cofactors:
  <ul>
    <li>$A_{11} = 4, \\quad A_{12} = -3$</li>
    <li>$A_{21} = -2, \\quad A_{22} = 1$</li>
  </ul>
  $$\\operatorname{adj} A = \\begin{bmatrix} A_{11} & A_{21} \\\\ A_{12} & A_{22} \\end{bmatrix} = \\begin{bmatrix} 4 & -2 \\\\ -3 & 1 \\end{bmatrix}$$
  <em>Shortcut for 2x2:</em> Interchange diagonal elements ($1 \\leftrightarrow 4$) and change signs of off-diagonal elements ($2 \\to -2, 3 \\to -3$).

  <p><strong>(ii) $A = \\begin{bmatrix} 1 & -1 & 2 \\\\ 2 & 3 & 5 \\\\ -2 & 0 & 1 \\end{bmatrix}$:</strong></p>
  Calculate cofactors:
  <ul>
    <li>$A_{11} = +(3(1) - 0) = 3$</li>
    <li>$A_{12} = -(2(1) - (-10)) = -12$</li>
    <li>$A_{13} = +(0 - (-6)) = 6$</li>
    <li>$A_{21} = -((-1)(1) - 0) = 1$</li>
    <li>$A_{22} = +(1(1) - (-4)) = 5$</li>
    <li>$A_{23} = -(0 - 2) = 2$</li>
    <li>$A_{31} = +((-5) - 6) = -11$</li>
    <li>$A_{32} = -(5 - 4) = -1$</li>
    <li>$A_{33} = +(3 - (-2)) = 5$</li>
  </ul>
  Transpose of cofactor matrix:
  $$\\operatorname{adj} A = \\begin{bmatrix} A_{11} & A_{21} & A_{31} \\\\ A_{12} & A_{22} & A_{32} \\\\ A_{13} & A_{23} & A_{33} \\end{bmatrix} = \\begin{bmatrix} 3 & 1 & -11 \\\\ -12 & 5 & -1 \\\\ 6 & 2 & 5 \\end{bmatrix}$$

  <p><strong>(iii) Verification for $A = \\begin{bmatrix} 2 & 3 \\\\ -4 & -6 \\end{bmatrix}$:</strong></p>
  <ol>
    <li>$|A| = (2)(-6) - (3)(-4) = -12 + 12 = 0$.
      <br>Thus, $|A|I = 0 \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix} = O$.
    </li>
    <li>$\\operatorname{adj} A = \\begin{bmatrix} -6 & -3 \\\\ 4 & 2 \\end{bmatrix}$.</li>
    <li>Product $A(\\operatorname{adj} A)$:
      $$A(\\operatorname{adj} A) = \\begin{bmatrix} 2 & 3 \\\\ -4 & -6 \\end{bmatrix} \\begin{bmatrix} -6 & -3 \\\\ 4 & 2 \\end{bmatrix} = \\begin{bmatrix} -12 + 12 & -6 + 6 \\\\ 24 - 24 & 12 - 12 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$$
    </li>
    <li>Product $(\\operatorname{adj} A)A$:
      $$(\\operatorname{adj} A)A = \\begin{bmatrix} -6 & -3 \\\\ 4 & 2 \\end{bmatrix} \\begin{bmatrix} 2 & 3 \\\\ -4 & -6 \\end{bmatrix} = \\begin{bmatrix} -12 + 12 & -18 + 18 \\\\ 8 - 8 & 12 - 12 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$$
    </li>
  </ol>
  Hence, $A(\\operatorname{adj} A) = (\\operatorname{adj} A)A = |A|I = O$ is verified.`,
  '4 Marks',
  [
    ['(i) Adjoint of 2x2 matrix', '1 Mark'],
    ['(ii) Systematic cofactors and transpose for 3x3 matrix', '1.5 Marks'],
    ['(iii) Complete verification showing both matrix multiplications equal |A|I = O', '1.5 Marks']
  ]
));

// Q7 (Ex 4.4 Q5 & Q7 - Matrix Inverses)
questions.push(createQCard(
  'c12m-ch4-q7',
  'Q7',
  'Exercise 4.4 (Verbatim)',
  `Find the inverse of each of the matrices (if it exists):<br>
  (i) $A = \\begin{bmatrix} 2 & -2 \\\\ 4 & 3 \\end{bmatrix}$<br>
  (ii) $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 2 & 4 \\\\ 0 & 0 & 5 \\end{bmatrix}$`,
  `<p><strong>(i) $A = \\begin{bmatrix} 2 & -2 \\\\ 4 & 3 \\end{bmatrix}$:</strong></p>
  <ol>
    <li>$|A| = (2)(3) - (-2)(4) = 6 + 8 = 14 \\neq 0$.
      <br>Since $|A| \\neq 0$, $A^{-1}$ exists.
    </li>
    <li>$\\operatorname{adj} A = \\begin{bmatrix} 3 & 2 \\\\ -4 & 2 \\end{bmatrix}$.</li>
    <li>$A^{-1} = \\frac{1}{|A|} \\operatorname{adj} A = \\frac{1}{14} \\begin{bmatrix} 3 & 2 \\\\ -4 & 2 \\end{bmatrix}$.</li>
  </ol>

  <p><strong>(ii) $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 2 & 4 \\\\ 0 & 0 & 5 \\end{bmatrix}$:</strong></p>
  <ol>
    <li>Since $A$ is an upper triangular matrix, its determinant is the product of diagonal elements:
      $$|A| = 1 \\times 2 \\times 5 = 10 \\neq 0$$
      Since $|A| \\neq 0$, $A^{-1}$ exists.
    </li>
    <li>Calculate all 9 cofactors:
      <ul>
        <li>$A_{11} = +(10 - 0) = 10$</li>
        <li>$A_{12} = -(0 - 0) = 0$</li>
        <li>$A_{13} = +(0 - 0) = 0$</li>
        <li>$A_{21} = -(10 - 0) = -10$</li>
        <li>$A_{22} = +(5 - 0) = 5$</li>
        <li>$A_{23} = -(0 - 0) = 0$</li>
        <li>$A_{31} = +(8 - 6) = 2$</li>
        <li>$A_{32} = -(4 - 0) = -4$</li>
        <li>$A_{33} = +(2 - 0) = 2$</li>
      </ul>
    </li>
    <li>Transpose of cofactor matrix:
      $$\\operatorname{adj} A = \\begin{bmatrix} 10 & -10 & 2 \\\\ 0 & 5 & -4 \\\\ 0 & 0 & 2 \\end{bmatrix}$$
    </li>
    <li>Inverse matrix:
      $$A^{-1} = \\frac{1}{|A|} \\operatorname{adj} A = \\frac{1}{10} \\begin{bmatrix} 10 & -10 & 2 \\\\ 0 & 5 & -4 \\\\ 0 & 0 & 2 \\end{bmatrix} = \\begin{bmatrix} 1 & -1 & \\frac{1}{5} \\\\[6pt] 0 & \\frac{1}{2} & -\\frac{2}{5} \\\\[6pt] 0 & 0 & \\frac{1}{5} \\end{bmatrix}$$
    </li>
  </ol>`,
  '4 Marks',
  [
    ['(i) Determinant calculation |A| = 14 and inverse: 1/14 [[3,2],[-4,2]]', '1.5 Marks'],
    ['(ii) Determinant |A| = 10, all 9 cofactors computed accurately', '1.5 Marks'],
    ['(ii) Final inverse matrix expression with 1/10 scalar', '1 Mark']
  ]
));

// Q8 (Ex 4.4 Q12 - Reversal Law)
questions.push(createQCard(
  'c12m-ch4-q8',
  'Q8',
  'Exercise 4.4 (Verbatim)',
  `Let $A = \\begin{bmatrix} 3 & 7 \\\\ 2 & 5 \\end{bmatrix}$ and $B = \\begin{bmatrix} 6 & 8 \\\\ 7 & 9 \\end{bmatrix}$. Verify that $(AB)^{-1} = B^{-1} A^{-1}$.`,
  `<p><strong>Step 1: Compute product $AB$ and its inverse $(AB)^{-1}$:</strong></p>
  $$AB = \\begin{bmatrix} 3 & 7 \\\\ 2 & 5 \\end{bmatrix} \\begin{bmatrix} 6 & 8 \\\\ 7 & 9 \\end{bmatrix} = \\begin{bmatrix} 18 + 49 & 24 + 63 \\\\ 12 + 35 & 16 + 45 \\end{bmatrix} = \\begin{bmatrix} 67 & 87 \\\\ 47 & 61 \\end{bmatrix}$$
  <br>Determinant of $AB$:
  $$|AB| = (67)(61) - (87)(47) = 4087 - 4089 = -2 \\neq 0$$
  <br>Adjoint of $AB$:
  $$\\operatorname{adj}(AB) = \\begin{bmatrix} 61 & -87 \\\\ -47 & 67 \\end{bmatrix}$$
  $$(AB)^{-1} = \\frac{1}{|AB|} \\operatorname{adj}(AB) = -\\frac{1}{2} \\begin{bmatrix} 61 & -87 \\\\ -47 & 67 \\end{bmatrix} = \\begin{bmatrix} -\\frac{61}{2} & \\frac{87}{2} \\\\[6pt] \\frac{47}{2} & -\\frac{67}{2} \\end{bmatrix}$$

  <p><strong>Step 2: Compute $B^{-1}$ and $A^{-1}$:</strong></p>
  <ul>
    <li>For $A$: $|A| = 15 - 14 = 1$.
      <br>$\\operatorname{adj} A = \\begin{bmatrix} 5 & -7 \\\\ -2 & 3 \\end{bmatrix} \\implies A^{-1} = \\begin{bmatrix} 5 & -7 \\\\ -2 & 3 \\end{bmatrix}$.
    </li>
    <li>For $B$: $|B| = 54 - 56 = -2$.
      <br>$\\operatorname{adj} B = \\begin{bmatrix} 9 & -8 \\\\ -7 & 6 \\end{bmatrix} \\implies B^{-1} = -\\frac{1}{2} \\begin{bmatrix} 9 & -8 \\\\ -7 & 6 \\end{bmatrix}$.
    </li>
  </ul>

  <p><strong>Step 3: Compute product $B^{-1} A^{-1}$:</strong></p>
  $$B^{-1} A^{-1} = -\\frac{1}{2} \\begin{bmatrix} 9 & -8 \\\\ -7 & 6 \\end{bmatrix} \\begin{bmatrix} 5 & -7 \\\\ -2 & 3 \\end{bmatrix}$$
  $$= -\\frac{1}{2} \\begin{bmatrix} 45 + 16 & -63 - 24 \\\\ -35 - 12 & 49 + 18 \\end{bmatrix} = -\\frac{1}{2} \\begin{bmatrix} 61 & -87 \\\\ -47 & 67 \\end{bmatrix}$$

  <p>Comparing Step 1 and Step 3, we see:
  $$(AB)^{-1} = B^{-1} A^{-1}$$
  Hence, verified.</p>`,
  '4 Marks',
  [
    ['Multiplication AB and determinant |AB| = -2 with (AB)⁻¹ calculated', '2 Marks'],
    ['Computation of individual inverses A⁻¹ and B⁻¹', '1 Mark'],
    ['Product B⁻¹A⁻¹ computed and shown equal to (AB)⁻¹', '1 Mark']
  ]
));

// Q9 (Ex 4.4 Q13 - Matrix Polynomial Equation)
questions.push(createQCard(
  'c12m-ch4-q9',
  'Q9',
  'Exercise 4.4 (Verbatim)',
  `If $A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix}$, show that $A^2 - 5A + 7I = O$. Hence find $A^{-1}$.`,
  `<p><strong>Part 1: Verification of $A^2 - 5A + 7I = O$:</strong></p>
  <ol>
    <li>$A^2 = A \\cdot A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix} \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix} = \\begin{bmatrix} 9 - 1 & 3 + 2 \\\\ -3 - 2 & -1 + 4 \\end{bmatrix} = \\begin{bmatrix} 8 & 5 \\\\ -5 & 3 \\end{bmatrix}$.</li>
    <li>$5A = 5\\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix} = \\begin{bmatrix} 15 & 5 \\\\ -5 & 10 \\end{bmatrix}$.</li>
    <li>$7I = 7\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 7 & 0 \\\\ 0 & 7 \\end{bmatrix}$.</li>
    <li>Evaluate LHS:
      $$A^2 - 5A + 7I = \\begin{bmatrix} 8 & 5 \\\\ -5 & 3 \\end{bmatrix} - \\begin{bmatrix} 15 & 5 \\\\ -5 & 10 \\end{bmatrix} + \\begin{bmatrix} 7 & 0 \\\\ 0 & 7 \\end{bmatrix}$$
      $$= \\begin{bmatrix} 8 - 15 + 7 & 5 - 5 + 0 \\\\ -5 - (-5) + 0 & 3 - 10 + 7 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix} = O$$
    </li>
  </ol>
  <p>Hence, $A^2 - 5A + 7I = O$ is proven.</p>

  <p><strong>Part 2: Finding $A^{-1}$ using the matrix equation:</strong></p>
  <p><em>(CBSE Rule: Marks will be deducted if student uses direct adjoint method when the question says "Hence find $A^{-1}$")</em></p>
  $$A^2 - 5A + 7I = O$$
  Post-multiplying both sides by $A^{-1}$:
  $$(A^2) A^{-1} - 5(A) A^{-1} + 7(I) A^{-1} = O \\cdot A^{-1}$$
  $$A(A A^{-1}) - 5I + 7A^{-1} = O$$
  $$A(I) - 5I + 7A^{-1} = O$$
  $$A - 5I + 7A^{-1} = O$$
  $$7A^{-1} = 5I - A$$
  $$A^{-1} = \\frac{1}{7} (5I - A)$$
  Now substitute $I$ and $A$:
  $$5I - A = \\begin{bmatrix} 5 & 0 \\\\ 0 & 5 \\end{bmatrix} - \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\end{bmatrix} = \\begin{bmatrix} 2 & -1 \\\\ 1 & 3 \\end{bmatrix}$$
  $$A^{-1} = \\frac{1}{7} \\begin{bmatrix} 2 & -1 \\\\ 1 & 3 \\end{bmatrix}$$`,
  '4 Marks',
  [
    ['Calculation of A² and proving A² - 5A + 7I = O', '2 Marks'],
    ['Multiplying equation by A⁻¹ to derive A⁻¹ = (5I - A)/7', '1 Mark'],
    ['Accurate substitution yielding A⁻¹ = 1/7 [[2, -1], [1, 3]]', '1 Mark']
  ]
));

// Q10 (Ex 4.4 Q17 & Q18 - Properties of Adjoint and Inverses)
questions.push(createQCard(
  'c12m-ch4-q10',
  'Q10',
  'Exercise 4.4 (Verbatim)',
  `(i) Let $A$ be a non-singular square matrix of order $3 \\times 3$. Then $|\\operatorname{adj} A|$ is equal to:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;(A) $|A|$ &nbsp;&nbsp;&nbsp;&nbsp; (B) $|A|^2$ &nbsp;&nbsp;&nbsp;&nbsp; (C) $|A|^3$ &nbsp;&nbsp;&nbsp;&nbsp; (D) $3|A|$<br><br>
  (ii) If $A$ is an invertible matrix of order $2$, then $\\det(A^{-1})$ is equal to:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;(A) $\\det(A)$ &nbsp;&nbsp;&nbsp;&nbsp; (B) $\\frac{1}{\\det(A)}$ &nbsp;&nbsp;&nbsp;&nbsp; (C) $1$ &nbsp;&nbsp;&nbsp;&nbsp; (D) $0$<br><br>
  (iii) If $A$ is a square matrix of order $3$ with $|A| = 5$, find $|2\\operatorname{adj} A|$.`,
  `<p><strong>(i) Value of $|\\operatorname{adj} A|$:</strong></p>
  We know from the fundamental theorem of adjoint matrices:
  $$A(\\operatorname{adj} A) = |A|I_n$$
  Taking determinant on both sides:
  $$|A(\\operatorname{adj} A)| = ||A|I_n|$$
  $$|A| \\cdot |\\operatorname{adj} A| = (|A|)^n |I_n| = |A|^n (1) = |A|^n$$
  Dividing both sides by $|A|$ (since $A$ is non-singular, $|A| \\neq 0$):
  $$|\\operatorname{adj} A| = |A|^{n-1}$$
  For order $n = 3$:
  $$|\\operatorname{adj} A| = |A|^{3-1} = |A|^2$$
  <strong>Correct Option: (B) $|A|^2$</strong>

  <p><strong>(ii) Value of $\\det(A^{-1})$:</strong></p>
  By definition of inverse:
  $$A \\cdot A^{-1} = I$$
  Taking determinant on both sides:
  $$\\det(A \\cdot A^{-1}) = \\det(I)$$
  $$\\det(A) \\cdot \\det(A^{-1}) = 1$$
  $$\\det(A^{-1}) = \\frac{1}{\\det(A)}$$
  <strong>Correct Option: (B) $\\frac{1}{\\det(A)}$</strong>

  <p><strong>(iii) Value of $|2\\operatorname{adj} A|$ for order $n=3$, $|A| = 5$:</strong></p>
  Using property of scalar multiplication $|kB| = k^n |B|$ where $B = \\operatorname{adj} A$ (order $3 \\times 3$):
  $$|2\\operatorname{adj} A| = 2^3 |\\operatorname{adj} A| = 8 |\\operatorname{adj} A|$$
  Since $|\\operatorname{adj} A| = |A|^{3-1} = |A|^2$:
  $$|2\\operatorname{adj} A| = 8 |A|^2 = 8(5^2) = 8 \\times 25 = 200$$`,
  '3 Marks',
  [
    ['(i) Proof and selection of correct option (B) |A|²', '1 Mark'],
    ['(ii) Derivation and selection of correct option (B) 1/det(A)', '1 Mark'],
    ['(iii) Correct application of scalar and adjoint rules yielding 200', '1 Mark']
  ]
));

// Q11 (Ex 4.5 Q11 & Q12 - Solving 2x2 System of Equations)
questions.push(createQCard(
  'c12m-ch4-q11',
  'Q11',
  'Exercise 4.5 (Verbatim)',
  `Solve system of linear equations using matrix method:<br>
  $$\\begin{aligned}
  2x + 5y &= 1 \\\\
  3x + 2y &= 7
  \\end{aligned}$$
  Also examine the consistency of the system:<br>
  $$\\begin{aligned}
  x + 3y &= 5 \\\\
  2x + 6y &= 8
  \\end{aligned}$$`,
  `<p><strong>Part 1: Solving $2x + 5y = 1$ and $3x + 2y = 7$ by Matrix Method:</strong></p>
  <p>The system can be written in matrix form $AX = B$ where:</p>
  $$A = \\begin{bmatrix} 2 & 5 \\\\ 3 & 2 \\end{bmatrix}, \\quad X = \\begin{bmatrix} x \\\\ y \\end{bmatrix}, \\quad B = \\begin{bmatrix} 1 \\\\ 7 \\end{bmatrix}$$
  <ol>
    <li>Determinant of coefficient matrix:
      $$|A| = (2)(2) - (5)(3) = 4 - 15 = -11 \\neq 0$$
      Since $|A| \\neq 0$, $A$ is non-singular and the system has a <strong>unique solution</strong> given by:
      $$X = A^{-1} B$$
    </li>
    <li>Adjoint of $A$:
      $$\\operatorname{adj} A = \\begin{bmatrix} 2 & -5 \\\\ -3 & 2 \\end{bmatrix}$$
      $$A^{-1} = \\frac{1}{|A|} \\operatorname{adj} A = -\\frac{1}{11} \\begin{bmatrix} 2 & -5 \\\\ -3 & 2 \\end{bmatrix}$$
    </li>
    <li>Calculate $X = A^{-1} B$:
      $$X = -\\frac{1}{11} \\begin{bmatrix} 2 & -5 \\\\ -3 & 2 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 7 \\end{bmatrix} = -\\frac{1}{11} \\begin{bmatrix} 2(1) - 5(7) \\\\ -3(1) + 2(7) \\end{bmatrix}$$
      $$= -\\frac{1}{11} \\begin{bmatrix} 2 - 35 \\\\ -3 + 14 \\end{bmatrix} = -\\frac{1}{11} \\begin{bmatrix} -33 \\\\ 11 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix}$$
    </li>
  </ol>
  <p>Therefore, $\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix} \\implies \\mathbf{x = 3, \\; y = -1}$.</p>
  <p><em>Check:</em> $2(3) + 5(-1) = 6 - 5 = 1$ (Correct); $3(3) + 2(-1) = 9 - 2 = 7$ (Correct).</p>

  <p><strong>Part 2: Consistency of $x + 3y = 5$ and $2x + 6y = 8$:</strong></p>
  $$A = \\begin{bmatrix} 1 & 3 \\\\ 2 & 6 \\end{bmatrix}, \\quad B = \\begin{bmatrix} 5 \\\\ 8 \\end{bmatrix}$$
  $$|A| = (1)(6) - (3)(2) = 6 - 6 = 0$$
  Since $|A| = 0$, we evaluate $(\\operatorname{adj} A) B$:
  $$\\operatorname{adj} A = \\begin{bmatrix} 6 & -3 \\\\ -2 & 1 \\end{bmatrix}$$
  $$(\\operatorname{adj} A) B = \\begin{bmatrix} 6 & -3 \\\\ -2 & 1 \\end{bmatrix} \\begin{bmatrix} 5 \\\\ 8 \\end{bmatrix} = \\begin{bmatrix} 30 - 24 \\\\ -10 + 8 \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ -2 \\end{bmatrix} \\neq O$$
  Since $|A| = 0$ and $(\\operatorname{adj} A) B \\neq O$, the system is <strong>inconsistent</strong> and has <strong>no solution</strong>.`,
  '4 Marks',
  [
    ['Matrix equation setup AX = B and calculating |A| = -11', '1 Mark'],
    ['Finding A⁻¹ and multiplying with B to get x = 3, y = -1', '1.5 Marks'],
    ['Consistency check showing |A| = 0 and (adj A)B ≠ O => Inconsistent', '1.5 Marks']
  ]
));

// Q12 (Ex 4.5 Q15 & Q16 - Comprehensive 3x3 Matrix System / Word Problem)
questions.push(createQCard(
  'c12m-ch4-q12',
  'Q12',
  'Exercise 4.5 (Verbatim)',
  `Solve the following system of equations by matrix method:<br>
  $$\\begin{aligned}
  x - y + 2z &= 7 \\\\
  3x + 4y - 5z &= -5 \\\\
  2x - y + 3z &= 12
  \\end{aligned}$$
  Also, the cost of $4\\text{ kg}$ onion, $3\\text{ kg}$ wheat and $2\\text{ kg}$ rice is ₹$60$. The cost of $2\\text{ kg}$ onion, $4\\text{ kg}$ wheat and $6\\text{ kg}$ rice is ₹$90$. The cost of $6\\text{ kg}$ onion, $2\\text{ kg}$ wheat and $3\\text{ kg}$ rice is ₹$70$. Find cost of each item per kg by matrix method.`,
  `<p><strong>Part 1: 3x3 System of Equations:</strong></p>
  $$\\begin{bmatrix} 1 & -1 & 2 \\\\ 3 & 4 & -5 \\\\ 2 & -1 & 3 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} = \\begin{bmatrix} 7 \\\\ -5 \\\\ 12 \\end{bmatrix} \\implies AX = B$$
  
  <p><strong>Step 1: Compute $|A|$:</strong></p>
  $$|A| = 1(12 - 5) - (-1)(9 - (-10)) + 2(-3 - 8)$$
  $$= 1(7) + 1(19) + 2(-11) = 7 + 19 - 22 = 4 \\neq 0$$
  Since $|A| \\neq 0$, the system has a unique solution $X = A^{-1} B$.

  <p><strong>Step 2: Cofactors of $A$:</strong></p>
  <ul>
    <li>$A_{11} = +(12 - 5) = 7$</li>
    <li>$A_{12} = -(9 - (-10)) = -19$</li>
    <li>$A_{13} = +(-3 - 8) = -11$</li>
    <li>$A_{21} = -(-3 - (-2)) = -(-1) = 1$</li>
    <li>$A_{22} = +(3 - 4) = -1$</li>
    <li>$A_{23} = -(-1 - (-2)) = -(1) = -1$</li>
    <li>$A_{31} = +(5 - 8) = -3$</li>
    <li>$A_{32} = -(-5 - 6) = 11$</li>
    <li>$A_{33} = +(4 - (-3)) = 7$</li>
  </ul>
  $$\\operatorname{adj} A = \\begin{bmatrix} 7 & 1 & -3 \\\\ -19 & -1 & 11 \\\\ -11 & -1 & 7 \\end{bmatrix}$$
  $$A^{-1} = \\frac{1}{4} \\begin{bmatrix} 7 & 1 & -3 \\\\ -19 & -1 & 11 \\\\ -11 & -1 & 7 \\end{bmatrix}$$

  <p><strong>Step 3: Compute $X = A^{-1} B$:</strong></p>
  $$X = \\frac{1}{4} \\begin{bmatrix} 7 & 1 & -3 \\\\ -19 & -1 & 11 \\\\ -11 & -1 & 7 \\end{bmatrix} \\begin{bmatrix} 7 \\\\ -5 \\\\ 12 \\end{bmatrix}$$
  $$\\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} = \\frac{1}{4} \\begin{bmatrix} 7(7) + 1(-5) - 3(12) \\\\ -19(7) - 1(-5) + 11(12) \\\\ -11(7) - 1(-5) + 7(12) \\end{bmatrix} = \\frac{1}{4} \\begin{bmatrix} 49 - 5 - 36 \\\\ -133 + 5 + 132 \\\\ -77 + 5 + 84 \\end{bmatrix} = \\frac{1}{4} \\begin{bmatrix} 8 \\\\ 4 \\\\ 12 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 1 \\\\ 3 \\end{bmatrix}$$
  <p>Therefore, $\\mathbf{x = 2, \\; y = 1, \\; z = 3}$.</p>

  <p><strong>Part 2: Real-World Commercial Word Problem (Ex 4.5 Q16):</strong></p>
  Let the cost per kg of onion, wheat, and rice be ₹$x$, ₹$y$, and ₹$z$ respectively.
  $$\\begin{aligned}
  4x + 3y + 2z &= 60 \\\\
  2x + 4y + 6z &= 90 \\\\
  6x + 2y + 3z &= 70
  \\end{aligned}$$
  Matrix representation $AX = B$:
  $$A = \\begin{bmatrix} 4 & 3 & 2 \\\\ 2 & 4 & 6 \\\\ 6 & 2 & 3 \\end{bmatrix}, \\quad X = \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}, \\quad B = \\begin{bmatrix} 60 \\\\ 90 \\\\ 70 \\end{bmatrix}$$
  $$|A| = 4(12 - 12) - 3(6 - 36) + 2(4 - 24) = 4(0) - 3(-30) + 2(-20) = 90 - 40 = 50 \\neq 0$$
  Computing cofactors:
  $$\\operatorname{adj} A = \\begin{bmatrix} 0 & -5 & 10 \\\\ 30 & 0 & -20 \\\\ -20 & 10 & 10 \\end{bmatrix}$$
  $$X = \\frac{1}{50} \\begin{bmatrix} 0 & -5 & 10 \\\\ 30 & 0 & -20 \\\\ -20 & 10 & 10 \\end{bmatrix} \\begin{bmatrix} 60 \\\\ 90 \\\\ 70 \\end{bmatrix} = \\frac{1}{50} \\begin{bmatrix} 0 - 450 + 700 \\\\ 1800 + 0 - 1400 \\\\ -1200 + 900 + 700 \\end{bmatrix} = \\frac{1}{50} \\begin{bmatrix} 250 \\\\ 400 \\\\ 400 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 8 \\\\ 8 \\end{bmatrix}$$
  <p><strong>Final Answer:</strong>
  <br>Cost of Onion = <strong>₹5 per kg</strong>
  <br>Cost of Wheat = <strong>₹8 per kg</strong>
  <br>Cost of Rice = <strong>₹8 per kg</strong></p>`,
  '6 Marks',
  [
    ['Determinant |A| = 4 and all cofactors of 3x3 matrix computed', '2 Marks'],
    ['Accurate product X = A⁻¹B yielding x = 2, y = 1, z = 3', '2 Marks'],
    ['Formulation and matrix method solution of word problem: Onion = ₹5/kg, Wheat = ₹8/kg, Rice = ₹8/kg', '2 Marks']
  ]
));

saveChapter(
  4,
  'Determinants',
  svgDiagram,
  'NCERT Exercises 4.1 to 4.5 (12 Verbatim Core Questions)',
  questions,
  'Continuity and Differentiability'
);
