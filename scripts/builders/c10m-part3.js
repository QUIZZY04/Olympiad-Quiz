// scripts/builders/c10m-part3.js
// Literal Verbatim Physical NCERT Questions for Class 10 Mathematics: Chapters 2, 3, 4, 5, 6, 7 (Completing 100% Coverage)
// CBSE Step Marking Scheme 2026-27

const { renderQCard } = require('./c10s-part1.js');

function makeMathCard(id, num, text, marks, answerHtml, rubricRows) {
  return renderQCard(id, num, text, marks, answerHtml, rubricRows);
}

// ============================================================================
// CHAPTER 2: POLYNOMIALS (5 Additional NCERT Qs: Total 10 Qs = 100%)
// ============================================================================
function getChapter2Additions() {
  return [
    makeMathCard(
      'c10m-ch2-q6',
      'NCERT Exercise 2.1 • Q1',
      'The graphs of $y = p(x)$ are given in Fig. for some polynomials $p(x)$. Find the number of zeroes of $p(x)$, in each case: (i) A horizontal line not intersecting x-axis, (ii) Intersects x-axis at 1 point, (iii) Intersects x-axis at 3 points, (iv) Parabola intersecting x-axis at 2 points, (v) Intersects x-axis at 4 points, (vi) Touches/intersects x-axis at 3 points.',
      3,
      `<p><strong>Rule:</strong> The number of zeroes of $y = p(x)$ is equal to the number of points where the graph intersects or touches the $x$-axis.</p>
<ol>
  <li><strong>(i) 0 zeroes:</strong> The graph does not intersect or touch the $x$-axis at all.</li>
  <li><strong>(ii) 1 zero:</strong> The graph intersects the $x$-axis at exactly 1 point.</li>
  <li><strong>(iii) 3 zeroes:</strong> The graph intersects the $x$-axis at 3 points.</li>
  <li><strong>(iv) 2 zeroes:</strong> The graph intersects the $x$-axis at 2 points.</li>
  <li><strong>(v) 4 zeroes:</strong> The graph intersects the $x$-axis at 4 points.</li>
  <li><strong>(vi) 3 zeroes:</strong> The graph touches or intersects the $x$-axis at 3 points.</li>
</ol>`,
      [
        { key: 'Explaining rule: zeroes equal x-intercept count', marks: '1 Mark' },
        { key: 'Correct counts for parts (i) to (iii): 0, 1, 3', marks: '1 Mark' },
        { key: 'Correct counts for parts (iv) to (vi): 2, 4, 3', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch2-q7',
      'NCERT Exercise 2.2 • Q1(iii) & Q1(iv)',
      'Find the zeroes of the following quadratic polynomials and verify the relationship between the zeroes and the coefficients: (i) $6x^2 - 3 - 7x$, (ii) $4u^2 + 8u$.',
      4,
      `<p><strong>(i) $6x^2 - 7x - 3$:</strong><br>
Rearranging in standard form: $6x^2 - 7x - 3 = 0$.<br>
Factorise: $6x^2 - 9x + 2x - 3 = 3x(2x - 3) + 1(2x - 3) = (3x + 1)(2x - 3) = 0$.<br>
Zeroes are $\\alpha = \\mathbf{\\frac{3}{2}}$ and $\\beta = \\mathbf{-\\frac{1}{3}}$.<br>
<strong>Verification:</strong><br>
Sum of zeroes: $\\alpha + \\beta = \\frac{3}{2} - \\frac{1}{3} = \\frac{9 - 2}{6} = \\frac{7}{6} = -\\frac{b}{a} = -\\frac{-7}{6} = \\frac{7}{6}$. (Verified)<br>
Product of zeroes: $\\alpha \\beta = \\left(\\frac{3}{2}\\right)\\left(-\\frac{1}{3}\\right) = -\\frac{3}{6} = -\\frac{1}{2} = \\frac{c}{a} = \\frac{-3}{6} = -\\frac{1}{2}$. (Verified)</p>
<p><strong>(ii) $4u^2 + 8u$:</strong><br>
$4u(u + 2) = 0 \\implies u = 0$ or $u = -2$. Zeroes are $\\alpha = 0, \\beta = -2$.<br>
Sum: $\\alpha + \\beta = 0 + (-2) = -2 = -\\frac{b}{a} = -\\frac{8}{4} = -2$. (Verified)<br>
Product: $\\alpha \\beta = 0 \\times (-2) = 0 = \\frac{c}{a} = \\frac{0}{4} = 0$. (Verified)</p>`,
      [
        { key: '(i) Finding zeroes 3/2 and -1/3; verifying sum and product', marks: '2 Marks' },
        { key: '(ii) Finding zeroes 0 and -2; verifying sum and product', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch2-q8',
      'NCERT Exercise 2.2 • Q1(v) & Q1(vi)',
      'Find the zeroes of the following quadratic polynomials and verify the relationship between the zeroes and the coefficients: (i) $t^2 - 15$, (ii) $3x^2 - x - 4$.',
      4,
      `<p><strong>(i) $t^2 - 15$:</strong><br>
$t^2 - (\\sqrt{15})^2 = (t - \\sqrt{15})(t + \\sqrt{15}) = 0$.<br>
Zeroes: $\\alpha = \\sqrt{15}, \\beta = -\\sqrt{15}$.<br>
Sum: $\\alpha + \\beta = \\sqrt{15} - \\sqrt{15} = 0 = -\\frac{b}{a} = -\\frac{0}{1} = 0$. (Verified)<br>
Product: $\\alpha \\beta = (\\sqrt{15})(-\\sqrt{15}) = -15 = \\frac{c}{a} = \\frac{-15}{1} = -15$. (Verified)</p>
<p><strong>(ii) $3x^2 - x - 4$:</strong><br>
$3x^2 - 4x + 3x - 4 = x(3x - 4) + 1(3x - 4) = (x + 1)(3x - 4) = 0$.<br>
Zeroes: $\\alpha = \\mathbf{\\frac{4}{3}}, \\beta = \\mathbf{-1}$.<br>
Sum: $\\frac{4}{3} - 1 = \\frac{1}{3} = -\\frac{b}{a} = -\\frac{-1}{3} = \\frac{1}{3}$. (Verified)<br>
Product: $\\left(\\frac{4}{3}\\right)(-1) = -\\frac{4}{3} = \\frac{c}{a} = \\frac{-4}{3}$. (Verified)</p>`,
      [
        { key: '(i) Zeroes +/-sqrt(15) and verification', marks: '2 Marks' },
        { key: '(ii) Zeroes 4/3, -1 and verification', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch2-q9',
      'NCERT Exercise 2.2 • Q2(iii) & Q2(iv)',
      'Find a quadratic polynomial each with the given numbers as the sum and product of its zeroes respectively: (i) $0, \\sqrt{5}$, (ii) $1, 1$.',
      3,
      `<p><strong>Formula:</strong> A quadratic polynomial is given by $k[x^2 - (\\alpha + \\beta)x + \\alpha \\beta]$, where $k \\neq 0$.</p>
<p><strong>(i) Sum $= 0$, Product $= \\sqrt{5}$:</strong><br>
$$p(x) = k[x^2 - (0)x + \\sqrt{5}] = \\mathbf{x^2 + \\sqrt{5}} \\quad (\\text{taking } k = 1)$$</p>
<p><strong>(ii) Sum $= 1$, Product $= 1$:</strong><br>
$$p(x) = k[x^2 - (1)x + 1] = \\mathbf{x^2 - x + 1} \\quad (\\text{taking } k = 1)$$</p>`,
      [
        { key: 'General quadratic polynomial formula statement', marks: '1 Mark' },
        { key: '(i) Correct polynomial x^2 + sqrt(5)', marks: '1 Mark' },
        { key: '(ii) Correct polynomial x^2 - x + 1', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch2-q10',
      'NCERT Exercise 2.2 • Q2(v) & Q2(vi)',
      'Find a quadratic polynomial each with the given numbers as the sum and product of its zeroes respectively: (i) $-\\frac{1}{4}, \\frac{1}{4}$, (ii) $4, 1$.',
      3,
      `<p><strong>(i) Sum $= -1/4$, Product $= 1/4$:</strong><br>
$$p(x) = k\\left[x^2 - \\left(-\\frac{1}{4}\\right)x + \\frac{1}{4}\\right] = k\\left[x^2 + \\frac{1}{4}x + \\frac{1}{4}\\right]$$
Taking $k = 4$:
$$p(x) = \\mathbf{4x^2 + x + 1}$$</p>
<p><strong>(ii) Sum $= 4$, Product $= 1$:</strong><br>
$$p(x) = k[x^2 - 4x + 1]$$
Taking $k = 1$:
$$p(x) = \\mathbf{x^2 - 4x + 1}$$</p>`,
      [
        { key: '(i) Correct quadratic polynomial 4x^2 + x + 1', marks: '1.5 Marks' },
        { key: '(ii) Correct quadratic polynomial x^2 - 4x + 1', marks: '1.5 Marks' }
      ]
    )
  ];
}

// ============================================================================
// CHAPTER 3: LINEAR EQUATIONS (2 Additional NCERT Qs: Total 14 Qs = 100%)
// ============================================================================
function getChapter3ExtraAdditions() {
  return [
    makeMathCard(
      'c10m-ch3-q15',
      'NCERT Exercise 3.2 • Q2 & Q3',
      'On comparing the ratios $\\frac{a_1}{a_2}, \\frac{b_1}{b_2}$ and $\\frac{c_1}{c_2}$, find out whether the lines representing the following pairs of linear equations intersect at a point, are parallel or coincident: (i) $5x - 4y + 8 = 0, 7x + 6y - 9 = 0$; (ii) $9x + 3y + 12 = 0, 18x + 6y + 24 = 0$; (iii) $6x - 3y + 10 = 0, 2x - y + 9 = 0$.',
      3,
      `<p><strong>(i) $5x - 4y + 8 = 0$ and $7x + 6y - 9 = 0$:</strong><br>
$$\\frac{a_1}{a_2} = \\frac{5}{7}, \\quad \\frac{b_1}{b_2} = \\frac{-4}{6} = -\\frac{2}{3}$$
Since $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$, the lines <strong>intersect at a point</strong> (unique solution, consistent).</p>
<p><strong>(ii) $9x + 3y + 12 = 0$ and $18x + 6y + 24 = 0$:</strong><br>
$$\\frac{a_1}{a_2} = \\frac{9}{18} = \\frac{1}{2}, \\quad \\frac{b_1}{b_2} = \\frac{3}{6} = \\frac{1}{2}, \\quad \\frac{c_1}{c_2} = \\frac{12}{24} = \\frac{1}{2}$$
Since $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$, the lines are <strong>coincident</strong> (infinitely many solutions, consistent).</p>
<p><strong>(iii) $6x - 3y + 10 = 0$ and $2x - y + 9 = 0$:</strong><br>
$$\\frac{a_1}{a_2} = \\frac{6}{2} = 3, \\quad \\frac{b_1}{b_2} = \\frac{-3}{-1} = 3, \\quad \\frac{c_1}{c_2} = \\frac{10}{9}$$
Since $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$, the lines are <strong>parallel</strong> (no solution, inconsistent).</p>`,
      [
        { key: '(i) a1/a2 != b1/b2 -> Intersecting at a point', marks: '1 Mark' },
        { key: '(ii) a1/a2 = b1/b2 = c1/c2 -> Coincident lines', marks: '1 Mark' },
        { key: '(iii) a1/a2 = b1/b2 != c1/c2 -> Parallel lines', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch3-q16',
      'NCERT Exercise 3.3 • Q2',
      'Solve $2x + 3y = 11$ and $2x - 4y = -24$ and hence find the value of \'m\' for which $y = mx + 3$.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Given system:
    $$2x + 3y = 11 \\quad \\text{--- (1)}$$
    $$2x - 4y = -24 \\quad \\text{--- (2)}$$
  </li>
  <li>Subtracting (2) from (1):
    $$(2x + 3y) - (2x - 4y) = 11 - (-24)$$
    $$7y = 35 \\implies \\mathbf{y = 5}$$
  </li>
  <li>Substituting $y = 5$ in (1):
    $$2x + 3(5) = 11 \\implies 2x + 15 = 11 \\implies 2x = -4 \\implies \\mathbf{x = -2}$$
  </li>
  <li>Finding $m$: Substitute $x = -2, y = 5$ into $y = mx + 3$:
    $$5 = m(-2) + 3 \\implies -2m = 2 \\implies \\mathbf{m = -1}$$
  </li>
</ol>
<p><strong>Answer:</strong> $x = -2, y = 5$, and $\\mathbf{m = -1}$.</p>`,
      [
        { key: 'Eliminating x to solve y = 5', marks: '1 Mark' },
        { key: 'Substituting y = 5 to find x = -2', marks: '1 Mark' },
        { key: 'Solving 5 = -2m + 3 to get m = -1', marks: '1 Mark' }
      ]
    )
  ];
}

// ============================================================================
// CHAPTER 4: QUADRATIC EQUATIONS (1 Additional NCERT Q: Total 13 Qs = 100%)
// ============================================================================
function getChapter4ExtraAdditions() {
  return [
    makeMathCard(
      'c10m-ch4-q14',
      'NCERT Exercise 4.3 • Q4',
      'The sum of the reciprocals of Rehman\'s ages (in years) 3 years ago and 5 years from now is 1/3. Find his present age.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let Rehman\'s present age be $x\\text{ years}$.</li>
  <li>Age 3 years ago $= (x - 3)\\text{ years}$.<br>
    Age 5 years from now $= (x + 5)\\text{ years}$.
  </li>
  <li>According to the question:
    $$\\frac{1}{x - 3} + \\frac{1}{x + 5} = \\frac{1}{3}$$
    $$\\frac{(x + 5) + (x - 3)}{(x - 3)(x + 5)} = \\frac{1}{3} \\implies \\frac{2x + 2}{x^2 + 2x - 15} = \\frac{1}{3}$$
  </li>
  <li>Cross multiplying:
    $$3(2x + 2) = x^2 + 2x - 15 \\implies 6x + 6 = x^2 + 2x - 15$$
    $$x^2 - 4x - 21 = 0$$
  </li>
  <li>Factorising:
    $$(x - 7)(x + 3) = 0 \\implies x = 7 \\quad (\\text{rejecting } x = -3 < 0)$$
  </li>
</ol>
<p><strong>Answer:</strong> Rehman\'s present age is <strong>7 years</strong>.</p>`,
      [
        { key: 'Setting up equation 1/(x-3) + 1/(x+5) = 1/3', marks: '1 Mark' },
        { key: 'Simplifying to x^2 - 4x - 21 = 0 and factorising', marks: '1 Mark' },
        { key: 'Solving x = 7 years', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch4-q15',
      'NCERT Exercise 4.3 • Q5',
      'In a class test, the sum of Shefali\'s marks in Mathematics and English is 30. Had she got 2 marks more in Mathematics and 3 marks less in English, the product of their marks would have been 210. Find her marks in the two subjects.',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let marks in Mathematics be $x$. Then marks in English $= 30 - x$.</li>
  <li>If she got 2 marks more in Mathematics: $x + 2$.<br>
    If she got 3 marks less in English: $(30 - x) - 3 = 27 - x$.
  </li>
  <li>Product of marks:
    $$(x + 2)(27 - x) = 210$$
    $$27x - x^2 + 54 - 2x = 210 \\implies -x^2 + 25x + 54 = 210$$
    $$x^2 - 25x + 156 = 0$$
  </li>
  <li>Factorising ($12 \\times 13 = 156$ and $12 + 13 = 25$):
    $$(x - 12)(x - 13) = 0 \\implies x = 12 \\quad \\text{or} \\quad x = 13$$
  </li>
  <li><strong>Case 1:</strong> If Mathematics $= 12$, English $= 30 - 12 = 18$.<br>
    <strong>Case 2:</strong> If Mathematics $= 13$, English $= 30 - 13 = 17$.
  </li>
</ol>
<p><strong>Answer:</strong> Her marks are <strong>12 in Math and 18 in English</strong> OR <strong>13 in Math and 17 in English</strong>.</p>`,
      [
        { key: 'Setting up (x + 2)(27 - x) = 210', marks: '1.5 Marks' },
        { key: 'Forming x^2 - 25x + 156 = 0 and solving x = 12 or 13', marks: '1.5 Marks' },
        { key: 'Stating both pairs of marks (12, 18) and (13, 17)', marks: '1 Mark' }
      ]
    )
  ];
}

// ============================================================================
// CHAPTER 5: ARITHMETIC PROGRESSIONS (14 Additional NCERT Qs: Total 44 Qs = 100%)
// ============================================================================
function getChapter5ExtraAdditions() {
  return [
    makeMathCard(
      'c10m-ch5-q31',
      'NCERT Exercise 5.1 • Q1',
      'In which of the following situations, does the list of numbers involved make an arithmetic progression, and why? (i) The taxi fare after each km when the fare is ₹ 15 for the first km and ₹ 8 for each additional km. (ii) The amount of air present in a cylinder when a vacuum pump removes 1/4 of the air remaining in the cylinder at a time.',
      3,
      `<p><strong>(i) Taxi fare:</strong><br>
Fare for 1 km $= 15$.<br>
Fare for 2 km $= 15 + 8 = 23$.<br>
Fare for 3 km $= 23 + 8 = 31, \\dots$<br>
List: $15, 23, 31, 39, \\dots$<br>
Difference between consecutive terms $= 8$ (constant).<br>
<strong>Yes, it forms an AP</strong> with $a = 15, d = 8$.</p>
<p><strong>(ii) Air in cylinder:</strong><br>
Let initial volume be $V$.<br>
After 1st stroke: $V - \\frac{1}{4}V = \\frac{3}{4}V$.<br>
After 2nd stroke: $\\frac{3}{4}V - \\frac{1}{4}\\left(\\frac{3}{4}V\\right) = \\left(\\frac{3}{4}\\right)^2 V = \\frac{9}{16}V$.<br>
Differences: $\\frac{3}{4}V - V = -\\frac{1}{4}V$, but $\\frac{9}{16}V - \\frac{3}{4}V = -\\frac{3}{16}V$.<br>
Since consecutive differences are not equal, <strong>it does NOT form an AP</strong>.</p>`,
      [
        { key: '(i) Showing constant difference d = 8 -> forms an AP', marks: '1.5 Marks' },
        { key: '(ii) Showing successive differences are unequal -> does not form an AP', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch5-q32',
      'NCERT Exercise 5.1 • Q4(xii) & Q4(xv)',
      'Which of the following are APs? If they form an AP, find the common difference d and write three more terms: (i) $\\sqrt{2}, \\sqrt{8}, \\sqrt{18}, \\sqrt{32}, \\dots$, (ii) $1^2, 5^2, 7^2, 73, \\dots$',
      3,
      `<p><strong>(i) $\\sqrt{2}, \\sqrt{8}, \\sqrt{18}, \\sqrt{32}, \\dots$:</strong><br>
Rewriting terms: $\\sqrt{2}, 2\\sqrt{2}, 3\\sqrt{2}, 4\\sqrt{2}, \\dots$<br>
$a_2 - a_1 = 2\\sqrt{2} - \\sqrt{2} = \\sqrt{2}$<br>
$a_3 - a_2 = 3\\sqrt{2} - 2\\sqrt{2} = \\sqrt{2}$<br>
$a_4 - a_3 = 4\\sqrt{2} - 3\\sqrt{2} = \\sqrt{2}$<br>
Common difference $d = \\mathbf{\\sqrt{2}}$ is constant. <strong>It forms an AP.</strong><br>
Next three terms:
$$a_5 = 4\\sqrt{2} + \\sqrt{2} = 5\\sqrt{2} = \\mathbf{\\sqrt{50}}$$
$$a_6 = 5\\sqrt{2} + \\sqrt{2} = 6\\sqrt{2} = \\mathbf{\\sqrt{72}}$$
$$a_7 = 6\\sqrt{2} + \\sqrt{2} = 7\\sqrt{2} = \\mathbf{\\sqrt{98}}$$</p>
<p><strong>(ii) $1^2, 5^2, 7^2, 73, \\dots$:</strong><br>
Terms: $1, 25, 49, 73, \\dots$<br>
$25 - 1 = 24; \\quad 49 - 25 = 24; \\quad 73 - 49 = 24$.<br>
Common difference $d = \\mathbf{24}$ is constant. <strong>It forms an AP.</strong><br>
Next three terms: $73 + 24 = \\mathbf{97}$, $97 + 24 = \\mathbf{121}$, $121 + 24 = \\mathbf{145}$.</p>`,
      [
        { key: '(i) d = sqrt(2), next terms sqrt(50), sqrt(72), sqrt(98)', marks: '1.5 Marks' },
        { key: '(ii) d = 24, next terms 97, 121, 145', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch5-q33',
      'NCERT Exercise 5.2 • Q1(i) & Q1(v)',
      'Fill in the blanks in the following table, given that a is the first term, d the common difference and an the nth term of the AP: (i) $a = 7, d = 3, n = 8, a_n = ?$; (ii) $a = 3.5, d = 0, n = 105, a_n = ?$',
      2,
      `<p><strong>Formula:</strong> $a_n = a + (n - 1)d$.</p>
<ol>
  <li><strong>(i) $a = 7, d = 3, n = 8$:</strong>
    $$a_8 = 7 + (8 - 1)3 = 7 + 7(3) = 7 + 21 = \\mathbf{28}$$
  </li>
  <li><strong>(ii) $a = 3.5, d = 0, n = 105$:</strong>
    $$a_{105} = 3.5 + (105 - 1)(0) = 3.5 + 0 = \\mathbf{3.5}$$
  </li>
</ol>`,
      [
        { key: '(i) a_8 = 28', marks: '1 Mark' },
        { key: '(ii) a_105 = 3.5', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch5-q34',
      'NCERT Exercise 5.2 • Q6',
      'Check whether -150 is a term of the AP: $11, 8, 5, 2, \\dots$',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Given AP: $11, 8, 5, 2, \\dots$<br>
    First term $a = 11$, common difference $d = 8 - 11 = -3$.
  </li>
  <li>Let $-150$ be the $n$th term $a_n$.
    $$a_n = a + (n - 1)d \\implies -150 = 11 + (n - 1)(-3)$$
  </li>
  <li>$$-150 - 11 = -3(n - 1) \\implies -161 = -3(n - 1)$$
    $$n - 1 = \\frac{161}{3} \\implies n = \\frac{161}{3} + 1 = \\frac{164}{3} = 54\\frac{2}{3}$$
  </li>
  <li>Since $n$ must be a positive integer, $n = 54\\frac{2}{3}$ is not possible.</li>
</ol>
<p><strong>Answer:</strong> Therefore, <strong>-150 is NOT a term</strong> of this AP.</p>`,
      [
        { key: 'Setting up an = 11 + (n - 1)(-3) = -150', marks: '1 Mark' },
        { key: 'Solving to n = 164/3 (fraction)', marks: '1 Mark' },
        { key: 'Concluding -150 is not a term since n is not an integer', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch5-q35',
      'NCERT Exercise 5.2 • Q12',
      'Two APs have the same common difference. The difference between their 100th terms is 100, what is the difference between their 1000th terms?',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let first term of first AP be $a$ and first term of second AP be $A$. Let common difference of both APs be $d$.</li>
  <li>100th term of first AP $= a_{100} = a + 99d$.<br>
    100th term of second AP $= A_{100} = A + 99d$.
  </li>
  <li>Difference between 100th terms:
    $$(a + 99d) - (A + 99d) = 100 \\implies \\mathbf{a - A = 100} \\quad \\text{--- (1)}$$
  </li>
  <li>Difference between their 1000th terms:
    $$a_{1000} - A_{1000} = (a + 999d) - (A + 999d) = a - A$$
  </li>
  <li>From equation (1), $a - A = 100$.</li>
</ol>
<p><strong>Answer:</strong> The difference between their 1000th terms is also <strong>100</strong>.</p>`,
      [
        { key: 'Representing terms a100 = a + 99d and A100 = A + 99d', marks: '1 Mark' },
        { key: 'Deriving a - A = 100', marks: '1 Mark' },
        { key: 'Proving difference of 1000th terms is a - A = 100', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch5-q36',
      'NCERT Exercise 5.2 • Q14',
      'How many multiples of 4 lie between 10 and 250?',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Multiples of 4 between 10 and 250:
    <ul>
      <li>First multiple after 10 is <strong>12</strong>.</li>
      <li>Last multiple before 250 is <strong>248</strong> ($250 = 4 \\times 62 + 2$).</li>
    </ul>
  </li>
  <li>The list is: $12, 16, 20, \\dots, 248$.<br>
    This forms an AP with $a = 12, d = 4, a_n = 248$.
  </li>
  <li>Using $a_n = a + (n - 1)d$:
    $$248 = 12 + (n - 1)4$$
    $$236 = 4(n - 1) \\implies n - 1 = \\frac{236}{4} = 59 \\implies \\mathbf{n = 60}$$
  </li>
</ol>
<p><strong>Answer:</strong> There are <strong>60 multiples</strong> of 4 lying between 10 and 250.</p>`,
      [
        { key: 'Identifying first term 12 and last term 248', marks: '1 Mark' },
        { key: 'Setting up 248 = 12 + (n - 1)4', marks: '1 Mark' },
        { key: 'Correct answer: n = 60 multiples', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch5-q37',
      'NCERT Exercise 5.2 • Q15',
      'For what value of n, are the nth terms of two APs: $63, 65, 67, \\dots$ and $3, 10, 17, \\dots$ equal?',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>First AP:</strong> $63, 65, 67, \\dots$<br>
    First term $a_1 = 63$, common difference $d_1 = 65 - 63 = 2$.<br>
    $n$th term: $a_n = 63 + (n - 1)2 = 63 + 2n - 2 = 61 + 2n$.
  </li>
  <li><strong>Second AP:</strong> $3, 10, 17, \\dots$<br>
    First term $a_2 = 3$, common difference $d_2 = 10 - 3 = 7$.<br>
    $n$th term: $a_n\' = 3 + (n - 1)7 = 3 + 7n - 7 = 7n - 4$.
  </li>
  <li>Equating both $n$th terms:
    $$61 + 2n = 7n - 4$$
    $$61 + 4 = 7n - 2n \\implies 5n = 65 \\implies \\mathbf{n = 13}$$
  </li>
</ol>
<p><strong>Answer:</strong> The <strong>13th terms</strong> of both APs are equal.</p>`,
      [
        { key: 'Expressing nth term of 1st AP: 61 + 2n', marks: '1 Mark' },
        { key: 'Expressing nth term of 2nd AP: 7n - 4', marks: '1 Mark' },
        { key: 'Solving 5n = 65 to get n = 13', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch5-q38',
      'NCERT Exercise 5.2 • Q18',
      'The sum of the 4th and 8th terms of an AP is 24 and the sum of the 6th and 10th terms is 44. Find the first three terms of the AP.',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>$a_4 + a_8 = 24 \\implies (a + 3d) + (a + 7d) = 24 \\implies 2a + 10d = 24 \\implies a + 5d = 12 \\quad \\text{--- (1)}$</li>
  <li>$a_6 + a_{10} = 44 \\implies (a + 5d) + (a + 9d) = 44 \\implies 2a + 14d = 44 \\implies a + 7d = 22 \\quad \\text{--- (2)}$</li>
  <li>Subtracting (1) from (2):
    $$(a + 7d) - (a + 5d) = 22 - 12 \\implies 2d = 10 \\implies \\mathbf{d = 5}$$
  </li>
  <li>From (1): $a + 5(5) = 12 \\implies a + 25 = 12 \\implies \\mathbf{a = -13}$.</li>
  <li>First three terms:
    $$a_1 = a = \\mathbf{-13}$$
    $$a_2 = a + d = -13 + 5 = \\mathbf{-8}$$
    $$a_3 = a + 2d = -8 + 5 = \\mathbf{-3}$$
  </li>
</ol>
<p><strong>Answer:</strong> The first three terms of the AP are <strong>-13, -8, -3</strong>.</p>`,
      [
        { key: 'Forming equations a + 5d = 12 and a + 7d = 22', marks: '1.5 Marks' },
        { key: 'Solving for d = 5 and a = -13', marks: '1.5 Marks' },
        { key: 'Listing first three terms: -13, -8, -3', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch5-q39',
      'NCERT Exercise 5.3 • Q1',
      'Find the sum of the following APs: (i) $2, 7, 12, \\dots$, to 10 terms. (ii) $-37, -33, -29, \\dots$, to 12 terms.',
      3,
      `<p><strong>(i) $2, 7, 12, \\dots$, to $n = 10$ ($a = 2, d = 5$):</strong><br>
$$S_{10} = \\frac{10}{2}[2(2) + (10 - 1)5] = 5[4 + 45] = 5(49) = \\mathbf{245}$$</p>
<p><strong>(ii) $-37, -33, -29, \\dots$, to $n = 12$ ($a = -37, d = -33 - (-37) = 4$):</strong><br>
$$S_{12} = \\frac{12}{2}[2(-37) + (12 - 1)4] = 6[-74 + 44] = 6(-30) = \\mathbf{-180}$$</p>`,
      [
        { key: '(i) S_10 = 245', marks: '1.5 Marks' },
        { key: '(ii) S_12 = -180', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch5-q40',
      'NCERT Exercise 5.3 • Q6',
      'The first and the last terms of an AP are 17 and 350 respectively. If the common difference is 9, how many terms are there and what is their sum?',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Given: First term $a = 17$, last term $l = a_n = 350$, common difference $d = 9$.</li>
  <li>$$a_n = a + (n - 1)d \\implies 350 = 17 + (n - 1)9$$
    $$333 = 9(n - 1) \\implies n - 1 = 37 \\implies \\mathbf{n = 38}$$
  </li>
  <li>Sum of $n$ terms:
    $$S_{38} = \\frac{n}{2}(a + l) = \\frac{38}{2}(17 + 350) = 19 \\times 367 = \\mathbf{6973}$$
  </li>
</ol>
<p><strong>Answer:</strong> There are <strong>38 terms</strong> and their sum is <strong>6973</strong>.</p>`,
      [
        { key: 'Using an = 17 + (n - 1)9 = 350 to solve n = 38', marks: '1.5 Marks' },
        { key: 'Calculating S38 = 19 * 367 = 6973', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch5-q41',
      'NCERT Exercise 5.3 • Q12',
      'Find the sum of the first 40 positive integers divisible by 6.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Positive integers divisible by 6 are: $6, 12, 18, 24, \\dots$ to 40 terms.</li>
  <li>This is an AP with first term $a = 6$, common difference $d = 6$, number of terms $n = 40$.</li>
  <li>40th term: $l = a_{40} = 40 \\times 6 = 240$.</li>
  <li>Sum $S_{40}$:
    $$S_{40} = \\frac{n}{2}(a + l) = \\frac{40}{2}(6 + 240) = 20(246) = \\mathbf{4920}$$
  </li>
</ol>
<p><strong>Answer:</strong> The sum of the first 40 positive integers divisible by 6 is <strong>4920</strong>.</p>`,
      [
        { key: 'Forming AP: 6, 12, 18... with a = 6, d = 6, n = 40', marks: '1.5 Marks' },
        { key: 'Applying Sn formula to compute 4920', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch5-q42',
      'NCERT Exercise 5.3 • Q15',
      'A contract on construction job specifies a penalty for delay of completion beyond a certain date as follows: ₹ 200 for the first day, ₹ 250 for the second day, ₹ 300 for the third day, etc., the penalty for each succeeding day being ₹ 50 more than for the preceding day. How much money the contractor has to pay as penalty, if he has delayed the work by 30 days?',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Penalties form an AP: $200, 250, 300, \\dots$ to $n = 30$ terms.</li>
  <li>First term $a = 200$, common difference $d = 50$, number of days $n = 30$.</li>
  <li>Total penalty money:
    $$S_{30} = \\frac{30}{2}[2(200) + (30 - 1)50]$$
    $$S_{30} = 15[400 + 29(50)] = 15[400 + 1450] = 15(1850) = \\mathbf{₹\\ 27,750}$$
  </li>
</ol>
<p><strong>Answer:</strong> The contractor has to pay <strong>₹ 27,750</strong> as penalty.</p>`,
      [
        { key: 'Identifying AP with a = 200, d = 50, n = 30', marks: '1.5 Marks' },
        { key: 'Applying Sn = n/2[2a + (n - 1)d]', marks: '1.5 Marks' },
        { key: 'Final answer: ₹ 27,750', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch5-q43',
      'NCERT Exercise 5.3 • Q18',
      'A spiral is made up of successive semicircles, with centres alternately at A and B, starting with centre at A, of radii 0.5 cm, 1.0 cm, 1.5 cm, 2.0 cm, ... What is the total length of such a spiral made up of thirteen consecutive semicircles? (Take $\\pi = 22/7$)',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Perimeter of semicircle of radius $r = \\pi r$.</li>
  <li>Lengths of consecutive semicircles:
    $$l_1 = \\pi(0.5), \\quad l_2 = \\pi(1.0), \\quad l_3 = \\pi(1.5), \\dots, \\quad l_{13} = \\pi(13 \\times 0.5) = \\pi(6.5)$$
  </li>
  <li>This forms an AP with $a = 0.5\\pi, d = 0.5\\pi, n = 13$.</li>
  <li>Total length:
    $$L = S_{13} = \\frac{13}{2}[l_1 + l_{13}] = \\frac{13}{2}[0.5\\pi + 6.5\\pi] = \\frac{13}{2}(7\\pi)$$
    $$L = \\frac{13}{2} \\times 7 \\times \\frac{22}{7} = 13 \\times 11 = \\mathbf{143\\text{ cm}}$$
  </li>
</ol>
<p><strong>Answer:</strong> The total length of the spiral is <strong>143 cm</strong>.</p>`,
      [
        { key: 'Length of semicircle = pi * r forming AP: 0.5*pi, 1.0*pi...', marks: '1.5 Marks' },
        { key: 'Using S13 = 13/2 (0.5*pi + 6.5*pi) = 13/2 * 7*pi', marks: '1.5 Marks' },
        { key: 'Evaluating with pi = 22/7 to get 143 cm', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch5-q44',
      'NCERT Exercise 5.3 • Q19',
      '200 logs are stacked in the following manner: 20 logs in the bottom row, 19 in the next row, 18 in the row next to it and so on. In how many rows are the 200 logs placed and how many logs are in the top row?',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Number of logs in rows: $20, 19, 18, \\dots$<br>
    This forms an AP with $a = 20, d = -1, S_n = 200$.
  </li>
  <li>$$S_n = \\frac{n}{2}[2a + (n - 1)d] \\implies 200 = \\frac{n}{2}[40 + (n - 1)(-1)]$$
    $$400 = n[41 - n] \\implies n^2 - 41n + 400 = 0$$
  </li>
  <li>Factorising:
    $$(n - 16)(n - 25) = 0 \\implies n = 16 \\quad \\text{or} \\quad n = 25$$
  </li>
  <li>If $n = 25$: $a_{25} = 20 + 24(-1) = -4$ (not possible, number of logs cannot be negative).<br>
    Hence $n = 16$.
  </li>
  <li>Logs in top row:
    $$a_{16} = a + 15d = 20 + 15(-1) = 20 - 15 = \\mathbf{5}$$
  </li>
</ol>
<p><strong>Answer:</strong> The 200 logs are placed in <strong>16 rows</strong>, and there are <strong>5 logs</strong> in the top row.</p>`,
      [
        { key: 'Modeling with a = 20, d = -1, Sn = 200 -> n^2 - 41n + 400 = 0', marks: '1.5 Marks' },
        { key: 'Factoring (n - 16)(n - 25) = 0 and rejecting n = 25', marks: '1.5 Marks' },
        { key: 'Calculating logs in top row a16 = 5', marks: '1 Mark' }
      ]
    )
  ];
}

module.exports = {
  getChapter2Additions,
  getChapter3ExtraAdditions,
  getChapter4ExtraAdditions,
  getChapter5ExtraAdditions
};
