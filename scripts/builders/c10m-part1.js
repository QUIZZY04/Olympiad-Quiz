// scripts/builders/c10m-part1.js
// Literal Verbatim Physical NCERT Questions for Class 10 Mathematics: Chapters 3 to 7
// Complete Exercise Problems with CBSE Step Marking Schemes 2026-27

const { renderQCard } = require('./c10s-part1.js');

// Helper to wrap question cards
function makeMathCard(id, num, text, marks, answerHtml, rubricRows) {
  return renderQCard(id, num, text, marks, answerHtml, rubricRows);
}

// ============================================================================
// CHAPTER 3: PAIR OF LINEAR EQUATIONS IN TWO VARIABLES (4 Additional NCERT Qs)
// ============================================================================
function getChapter3Additions() {
  return [
    makeMathCard(
      'c10m-ch3-q11',
      'NCERT Exercise 3.1 • Q1',
      'Aftab tells his daughter, "Seven years ago, I was seven times as old as you were then. Also, three years from now, I shall be three times as old as you will be." Represent this situation algebraically and graphically.',
      4,
      `<p><strong>Algebraic Representation:</strong></p>
<ol>
  <li>Let present age of Aftab be $x$ years and daughter\'s age be $y$ years.</li>
  <li><strong>Condition 1 (Seven years ago):</strong>
    $$(x - 7) = 7(y - 7) \\implies x - 7 = 7y - 49 \\implies \\mathbf{x - 7y = -42}$$
  </li>
  <li><strong>Condition 2 (Three years from now):</strong>
    $$(x + 3) = 3(y + 3) \\implies x + 3 = 3y + 9 \\implies \\mathbf{x - 3y = 6}$$
  </li>
</ol>
<p><strong>Table of Solutions for Graphing:</strong></p>
<ul>
  <li>For $x - 7y = -42$: When $x = 0, y = 6$; when $x = 7, y = 7$; when $x = 14, y = 8$.</li>
  <li>For $x - 3y = 6$: When $x = 0, y = -2$; when $x = 6, y = 0$; when $x = 12, y = 2$.</li>
</ul>
<p><strong>Graphical Intersection:</strong> The two straight lines intersect at $(42, 12)$. Therefore, Aftab\'s present age is <strong>42 years</strong> and his daughter\'s present age is <strong>12 years</strong>.</p>`,
      [
        { key: 'Formulating x - 7y = -42 from condition 7 years ago', marks: '1 Mark' },
        { key: 'Formulating x - 3y = 6 from condition 3 years hence', marks: '1 Mark' },
        { key: 'Finding correct solution tables for both linear equations', marks: '1 Mark' },
        { key: 'Graphical solution identifying intersection at (42, 12)', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch3-q12',
      'NCERT Exercise 3.2 • Q5',
      'Half the perimeter of a rectangular garden, whose length is 4 m more than its width, is 36 m. Find the dimensions of the garden.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let the width (breadth) of the garden be $x$ metres and length be $y$ metres.</li>
  <li>According to the question:
    $$y = x + 4 \\implies y - x = 4 \\quad \\text{--- (1)}$$
  </li>
  <li>Perimeter of rectangle $= 2(x + y)$. Half perimeter $= x + y = 36 \\quad \\text{--- (2)}$.</li>
  <li>Adding equations (1) and (2):
    $$(y - x) + (x + y) = 4 + 36 \\implies 2y = 40 \\implies y = 20\\text{ m}$$
  </li>
  <li>Substituting $y = 20$ in (1):
    $$x = y - 4 = 20 - 4 = 16\\text{ m}$$
  </li>
</ol>
<p><strong>Answer:</strong> The length of the garden is <strong>$20\\text{ metres}$</strong> and its width is <strong>$16\\text{ metres}$</strong>.</p>`,
      [
        { key: 'Setting up equations y - x = 4 and x + y = 36', marks: '1 Mark' },
        { key: 'Solving system by elimination/substitution to find y = 20 m', marks: '1 Mark' },
        { key: 'Finding width x = 16 m and stating dimensions with units', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch3-q13',
      'NCERT Exercise 3.3 • Q3(iii)',
      'The coach of a cricket team buys 7 bats and 6 balls for ₹ 3800. Later, she buys 3 bats and 5 balls for ₹ 1750. Find the cost of each bat and each ball.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let cost of one bat be $₹\\ x$ and cost of one ball be $₹\\ y$.</li>
  <li>From the given conditions:
    $$7x + 6y = 3800 \\quad \\text{--- (1)}$$
    $$3x + 5y = 1750 \\quad \\text{--- (2)}$$
  </li>
  <li>From equation (2), express $x$ in terms of $y$:
    $$3x = 1750 - 5y \\implies x = \\frac{1750 - 5y}{3} \\quad \\text{--- (3)}$$
  </li>
  <li>Substitute (3) into equation (1):
    $$7\\left(\\frac{1750 - 5y}{3}\\right) + 6y = 3800$$
    $$12250 - 35y + 18y = 11400 \\implies -17y = 11400 - 12250 = -850$$
    $$y = \\frac{-850}{-17} = 50$$
  </li>
  <li>Substitute $y = 50$ into (3):
    $$x = \\frac{1750 - 5(50)}{3} = \\frac{1750 - 250}{3} = \\frac{1500}{3} = 500$$
  </li>
</ol>
<p><strong>Answer:</strong> Cost of each bat is <strong>₹ 500</strong> and cost of each ball is <strong>₹ 50</strong>.</p>`,
      [
        { key: 'Setting up equations 7x + 6y = 3800 and 3x + 5y = 1750', marks: '1 Mark' },
        { key: 'Substitution method solving for y = 50', marks: '1 Mark' },
        { key: 'Calculating x = 500 and stating final costs with rupee symbol', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch3-q14',
      'NCERT Exercise 3.3 • Q3(iv)',
      'The taxi charges in a city consist of a fixed charge together with the charge for the distance covered. For a distance of 10 km, the charge paid is ₹ 105 and for a journey of 15 km, the charge paid is ₹ 155. What are the fixed charges and the charge per km? How much does a person have to pay for travelling a distance of 25 km?',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let fixed charge be $₹\\ x$ and rate per kilometre be $₹\\ y$.</li>
  <li>From the given conditions:
    $$x + 10y = 105 \\quad \\text{--- (1)}$$
    $$x + 15y = 155 \\quad \\text{--- (2)}$$
  </li>
  <li>Subtracting (1) from (2):
    $$(x + 15y) - (x + 10y) = 155 - 105 \\implies 5y = 50 \\implies y = 10$$
    Rate per km is <strong>₹ 10/km</strong>.
  </li>
  <li>Substituting $y = 10$ in (1):
    $$x + 10(10) = 105 \\implies x + 100 = 105 \\implies x = 5$$
    Fixed charge is <strong>₹ 5</strong>.
  </li>
  <li><strong>Fare for 25 km:</strong>
    $$\\text{Fare} = x + 25y = 5 + 25(10) = 5 + 250 = \\mathbf{₹\\ 255}$$
  </li>
</ol>`,
      [
        { key: 'Setting up system: x + 10y = 105 and x + 15y = 155', marks: '1 Mark' },
        { key: 'Solving for rate per km y = ₹ 10', marks: '1 Mark' },
        { key: 'Solving for fixed charge x = ₹ 5', marks: '1 Mark' },
        { key: 'Calculating total charge for 25 km: ₹ 255', marks: '1 Mark' }
      ]
    )
  ];
}

// ============================================================================
// CHAPTER 4: QUADRATIC EQUATIONS (3 Additional NCERT Qs)
// ============================================================================
function getChapter4Additions() {
  return [
    makeMathCard(
      'c10m-ch4-q11',
      'NCERT Exercise 4.1 • Q2(ii)',
      'The product of two consecutive positive integers is 306. Find the integers by formulating and solving a quadratic equation.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let the two consecutive positive integers be $x$ and $x + 1$.</li>
  <li>According to the question:
    $$x(x + 1) = 306 \\implies x^2 + x - 306 = 0$$
  </li>
  <li>Factorise by splitting the middle term ($18 \\times (-17) = -306$ and $18 - 17 = 1$):
    $$x^2 + 18x - 17x - 306 = 0$$
    $$x(x + 18) - 17(x + 18) = 0$$
    $$(x + 18)(x - 17) = 0$$
  </li>
  <li>Since $x$ is a positive integer, $x \\neq -18$.
    $$x = 17$$
  </li>
  <li>Consecutive integer: $x + 1 = 17 + 1 = 18$.</li>
</ol>
<p><strong>Answer:</strong> The two consecutive positive integers are <strong>17 and 18</strong>.</p>`,
      [
        { key: 'Formulating quadratic equation: x^2 + x - 306 = 0', marks: '1 Mark' },
        { key: 'Factorising (x + 18)(x - 17) = 0 and rejecting negative root', marks: '1 Mark' },
        { key: 'Concluding integers are 17 and 18', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch4-q12',
      'NCERT Exercise 4.2 • Q5',
      'The altitude of a right triangle is 7 cm less than its base. If the hypotenuse is 13 cm, find the other two sides.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let base of right triangle be $x\\text{ cm}$. Altitude $= (x - 7)\\text{ cm}$. Hypotenuse $= 13\\text{ cm}$.</li>
  <li>By Pythagoras Theorem:
    $$\\text{Base}^2 + \\text{Altitude}^2 = \\text{Hypotenuse}^2$$
    $$x^2 + (x - 7)^2 = 13^2$$
    $$x^2 + x^2 - 14x + 49 = 169$$
    $$2x^2 - 14x - 120 = 0 \\implies x^2 - 7x - 60 = 0$$
  </li>
  <li>Factorising ($12 \\times (-5) = -60$ and $-12 + 5 = -7$):
    $$(x - 12)(x + 5) = 0 \\implies x = 12 \\quad (\\text{rejecting } x = -5 < 0)$$
  </li>
  <li>Base $= 12\\text{ cm}$, Altitude $= 12 - 7 = 5\\text{ cm}$.</li>
</ol>
<p><strong>Answer:</strong> The other two sides are <strong>$12\\text{ cm}$ and $5\\text{ cm}$</strong>.</p>`,
      [
        { key: 'Applying Pythagoras theorem: x^2 + (x - 7)^2 = 169', marks: '1 Mark' },
        { key: 'Simplifying to x^2 - 7x - 60 = 0 and factorising', marks: '1 Mark' },
        { key: 'Finding base = 12 cm and altitude = 5 cm', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch4-q13',
      'NCERT Exercise 4.3 • Q3',
      'Is it possible to design a rectangular mango grove whose length is twice its breadth, and the area is $800\\text{ m}^2$? If so, find its length and breadth.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let the breadth of the rectangular grove be $x\\text{ m}$. Length $= 2x\\text{ m}$.</li>
  <li>Area $= \\text{Length} \\times \\text{Breadth} = (2x)(x) = 2x^2$.</li>
  <li>According to the question:
    $$2x^2 = 800 \\implies x^2 = 400 \\implies x^2 - 400 = 0$$
  </li>
  <li>Discriminant $D = b^2 - 4ac = 0^2 - 4(1)(-400) = 1600 > 0$.
    Since $D > 0$, real solutions exist. <strong>Yes, it is possible.</strong>
  </li>
  <li>Solving for $x$:
    $$x = \\sqrt{400} = 20\\text{ m} \\quad (\\text{taking positive square root for length})$$
    $$\\text{Breadth} = 20\\text{ m}, \\quad \\text{Length} = 2(20) = 40\\text{ m}$$
  </li>
</ol>
<p><strong>Answer:</strong> Yes, it is possible. The grove has length <strong>$40\\text{ m}$</strong> and breadth <strong>$20\\text{ m}$</strong>.</p>`,
      [
        { key: 'Setting up 2x^2 = 800 and testing discriminant D = 1600 > 0', marks: '1 Mark' },
        { key: 'Affirming possibility of rectangular grove', marks: '1 Mark' },
        { key: 'Finding breadth = 20 m and length = 40 m', marks: '1 Mark' }
      ]
    )
  ];
}

// ============================================================================
// CHAPTER 5: ARITHMETIC PROGRESSIONS (35 Additional NCERT Qs: Total 44 Qs)
// ============================================================================
function getChapter5Additions() {
  const cards = [];

  // Ex 5.1 Q1
  cards.push(
    makeMathCard(
      'c10m-ch5-q10',
      'NCERT Exercise 5.1 • Q1',
      'In which of the following situations, does the list of numbers involved make an arithmetic progression, and why? (i) The taxi fare after each km when the fare is ₹ 15 for the first km and ₹ 8 for each additional km. (ii) The amount of air present in a cylinder when a vacuum pump removes 1/4 of the air remaining in the cylinder at a time.',
      3,
      `<p><strong>Analysis:</strong></p>
<ol>
  <li><strong>(i) Taxi Fare:</strong><br>
    Fare for 1st km $= ₹\\ 15$.<br>
    Fare for 2 km $= 15 + 8 = ₹\\ 23$.<br>
    Fare for 3 km $= 23 + 8 = ₹\\ 31$.<br>
    List of fares: $15, 23, 31, 39, \\dots$<br>
    Since the difference between successive terms is constant ($d = 8$), <strong>this situation forms an AP</strong>.
  </li>
  <li><strong>(ii) Air in Cylinder:</strong><br>
    Let initial air volume be $V$.<br>
    Air remaining after 1st stroke $= V - \\frac{1}{4}V = \\frac{3}{4}V$.<br>
    After 2nd stroke $= \\frac{3}{4}V - \\frac{1}{4}\\left(\\frac{3}{4}V\\right) = \\left(\\frac{3}{4}\\right)^2 V = \\frac{9}{16}V$.<br>
    Common differences: $\\frac{3}{4}V - V = -\\frac{V}{4}$, but $\\frac{9}{16}V - \\frac{3}{4}V = -\\frac{3V}{16}$.<br>
    Since common difference is not constant, <strong>this situation does NOT form an AP</strong> (it forms a Geometric Progression).
  </li>
</ol>`,
      [
        { key: '(i) Forms AP because difference between consecutive terms is constant (d = 8)', marks: '1.5 Marks' },
        { key: '(ii) Does not form AP because remaining air terms have variable differences', marks: '1.5 Marks' }
      ]
    )
  );

  // Ex 5.1 Q3 & Q4
  cards.push(
    makeMathCard(
      'c10m-ch5-q11',
      'NCERT Exercise 5.1 • Q3 & Q4',
      'For the following APs, write the first term and the common difference: (i) $3, 1, -1, -3, \\dots$, (ii) $-5, -1, 3, 7, \\dots$ Also check whether $\\sqrt{2}, \\sqrt{8}, \\sqrt{18}, \\sqrt{32}, \\dots$ is an AP.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>(i) For AP $3, 1, -1, -3, \\dots$:</strong><br>
    First term: $\\mathbf{a = 3}$.<br>
    Common difference: $d = a_2 - a_1 = 1 - 3 = \\mathbf{-2}$.
  </li>
  <li><strong>(ii) For AP $-5, -1, 3, 7, \\dots$:</strong><br>
    First term: $\\mathbf{a = -5}$.<br>
    Common difference: $d = -1 - (-5) = -1 + 5 = \\mathbf{4}$.
  </li>
  <li><strong>(iii) Checking $\\sqrt{2}, \\sqrt{8}, \\sqrt{18}, \\sqrt{32}, \\dots$:</strong><br>
    Simplify terms: $\\sqrt{2}, \\; 2\\sqrt{2}, \\; 3\\sqrt{2}, \\; 4\\sqrt{2}, \\dots$<br>
    $a_2 - a_1 = 2\\sqrt{2} - \\sqrt{2} = \\sqrt{2}$<br>
    $a_3 - a_2 = 3\\sqrt{2} - 2\\sqrt{2} = \\sqrt{2}$<br>
    $a_4 - a_3 = 4\\sqrt{2} - 3\\sqrt{2} = \\sqrt{2}$<br>
    Since $d = \\sqrt{2}$ is constant, <strong>it IS an AP</strong> with next term $a_5 = 5\\sqrt{2} = \\sqrt{50}$.
  </li>
</ol>`,
      [
        { key: '(i) a = 3, d = -2', marks: '1 Mark' },
        { key: '(ii) a = -5, d = 4', marks: '1 Mark' },
        { key: '(iii) Simplifying roots to show constant difference d = sqrt(2); confirms AP', marks: '1 Mark' }
      ]
    )
  );

  // Ex 5.2 Q1 table
  cards.push(
    makeMathCard(
      'c10m-ch5-q12',
      'NCERT Exercise 5.2 • Q1',
      'Fill in the blanks in the following table, given that $a$ is the first term, $d$ the common difference and $a_n$ the $n$th term of the AP: (i) $a = 7, d = 3, n = 8, a_n = ?$, (ii) $a = -18, n = 10, a_n = 0, d = ?$, (iii) $d = -3, n = 18, a_n = -5, a = ?$',
      3,
      `<p><strong>Formula: $a_n = a + (n - 1)d$</strong></p>
<ol>
  <li><strong>(i) Given $a = 7, d = 3, n = 8$:</strong><br>
    $$a_8 = 7 + (8 - 1)3 = 7 + 7(3) = 7 + 21 = \\mathbf{28}$$
  </li>
  <li><strong>(ii) Given $a = -18, n = 10, a_{10} = 0$:</strong><br>
    $$0 = -18 + (10 - 1)d \\implies 9d = 18 \\implies \\mathbf{d = 2}$$
  </li>
  <li><strong>(iii) Given $d = -3, n = 18, a_{18} = -5$:</strong><br>
    $$-5 = a + (18 - 1)(-3) = a + 17(-3) = a - 51$$
    $$a = -5 + 51 = \\mathbf{46}$$
  </li>
</ol>`,
      [
        { key: '(i) a_n = 28', marks: '1 Mark' },
        { key: '(ii) d = 2', marks: '1 Mark' },
        { key: '(iii) a = 46', marks: '1 Mark' }
      ]
    )
  );

  // Ex 5.2 Q5, Q6, Q8, Q9, Q10, Q11, Q14, Q15, Q16, Q17, Q18, Q19, Q20
  const ex52Problems = [
    {
      id: 'c10m-ch5-q13',
      num: 'NCERT Exercise 5.2 • Q5',
      text: 'Find the number of terms in each of the following APs: (i) $7, 13, 19, \\dots, 205$, (ii) $18, 15\\frac{1}{2}, 13, \\dots, -47$.',
      marks: 3,
      ans: `<p><strong>(i) AP: $7, 13, 19, \\dots, 205$:</strong><br>
Here $a = 7, d = 13 - 7 = 6, a_n = 205$.<br>
$$a_n = a + (n - 1)d \\implies 205 = 7 + (n - 1)6$$
$$198 = 6(n - 1) \\implies n - 1 = 33 \\implies \\mathbf{n = 34}$$</p>
<p><strong>(ii) AP: $18, 15.5, 13, \\dots, -47$:</strong><br>
Here $a = 18, d = 15.5 - 18 = -2.5 = -5/2, a_n = -47$.<br>
$$-47 = 18 + (n - 1)(-5/2) \\implies -65 = -(5/2)(n - 1)$$
$$n - 1 = 65 \\times \\frac{2}{5} = 26 \\implies \\mathbf{n = 27}$$</p>`,
      rubric: [{ key: '(i) n = 34 terms', marks: '1.5 Marks' }, { key: '(ii) n = 27 terms', marks: '1.5 Marks' }]
    },
    {
      id: 'c10m-ch5-q14',
      num: 'NCERT Exercise 5.2 • Q6',
      text: 'Check whether -150 is a term of the AP: $11, 8, 5, 2, \\dots$',
      marks: 2,
      ans: `<p>For the AP $11, 8, 5, 2, \\dots$, $a = 11, d = 8 - 11 = -3$.<br>
Let $a_n = -150$.<br>
$$a + (n - 1)d = -150 \\implies 11 + (n - 1)(-3) = -150$$
$$-3(n - 1) = -161 \\implies n - 1 = \\frac{161}{3} \\implies n = \\frac{164}{3} = 54\\frac{2}{3}$$
Since $n$ must be a natural number ($n \\in \\mathbb{N}$), $n$ cannot be a fraction.<br>
Therefore, <strong>-150 is NOT a term of this AP</strong>.</p>`,
      rubric: [{ key: 'Formulating 11 + (n - 1)(-3) = -150', marks: '1 Mark' }, { key: 'Solving n = 164/3 and concluding not a natural number, hence not a term', marks: '1 Mark' }]
    },
    {
      id: 'c10m-ch5-q15',
      num: 'NCERT Exercise 5.2 • Q8',
      text: 'An AP consists of 50 terms of which 3rd term is 12 and the last term is 106. Find the 29th term.',
      marks: 3,
      ans: `<p>Given: Total terms $n = 50$, $a_3 = 12$, $a_{50} = 106$.<br>
$$a + 2d = 12 \\quad \\text{--- (1)}$$
$$a + 49d = 106 \\quad \\text{--- (2)}$$
Subtracting (1) from (2): $47d = 94 \\implies \\mathbf{d = 2}$.<br>
Substitute $d = 2$ in (1): $a + 2(2) = 12 \\implies \\mathbf{a = 8}$.<br>
29th term: $a_{29} = a + 28d = 8 + 28(2) = 8 + 56 = \\mathbf{64}$.</p>`,
      rubric: [{ key: 'Setting up system a + 2d = 12 and a + 49d = 106', marks: '1 Mark' }, { key: 'Finding d = 2 and a = 8', marks: '1 Mark' }, { key: 'Calculating a_29 = 64', marks: '1 Mark' }]
    },
    {
      id: 'c10m-ch5-q16',
      num: 'NCERT Exercise 5.2 • Q9',
      text: 'If the 3rd and the 9th terms of an AP are 4 and -8 respectively, which term of this AP is zero?',
      marks: 3,
      ans: `<p>Given: $a_3 = 4 \\implies a + 2d = 4 \\quad \\text{--- (1)}$<br>
$a_9 = -8 \\implies a + 8d = -8 \\quad \\text{--- (2)}$<br>
Subtracting (1) from (2): $6d = -12 \\implies \\mathbf{d = -2}$.<br>
Substitute $d = -2$ in (1): $a + 2(-2) = 4 \\implies \\mathbf{a = 8}$.<br>
Let $n$th term be zero ($a_n = 0$):<br>
$$a + (n - 1)d = 0 \\implies 8 + (n - 1)(-2) = 0 \\implies 2(n - 1) = 8 \\implies n - 1 = 4 \\implies \\mathbf{n = 5}$$
Therefore, the <strong>5th term</strong> of this AP is zero.</p>`,
      rubric: [{ key: 'Solving system for d = -2 and a = 8', marks: '1.5 Marks' }, { key: 'Setting a_n = 0 to find n = 5th term', marks: '1.5 Marks' }]
    },
    {
      id: 'c10m-ch5-q17',
      num: 'NCERT Exercise 5.2 • Q10 & Q11',
      text: '(i) The 17th term of an AP exceeds its 10th term by 7. Find the common difference. (ii) Which term of the AP: $3, 15, 27, 39, \\dots$ will be 132 more than its 54th term?',
      marks: 4,
      ans: `<p><strong>(i) Common difference:</strong><br>
$a_{17} - a_{10} = 7 \\implies (a + 16d) - (a + 9d) = 7 \\implies 7d = 7 \\implies \\mathbf{d = 1}$.</p>
<p><strong>(ii) Term 132 more than 54th term:</strong><br>
For AP $3, 15, 27, \\dots$, $a = 3, d = 15 - 3 = 12$.<br>
$$a_{54} = a + 53d = 3 + 53(12) = 3 + 636 = 639$$
Let required term be $a_n = a_{54} + 132 = 639 + 132 = 771$.<br>
$$a + (n - 1)d = 771 \\implies 3 + (n - 1)12 = 771$$
$$12(n - 1) = 768 \\implies n - 1 = 64 \\implies \\mathbf{n = 65}$$
The <strong>65th term</strong> is 132 more than the 54th term.</p>`,
      rubric: [{ key: '(i) 7d = 7 -> d = 1', marks: '1.5 Marks' }, { key: '(ii) a_54 = 639, a_n = 771 -> n = 65th term', marks: '2.5 Marks' }]
    },
    {
      id: 'c10m-ch5-q18',
      num: 'NCERT Exercise 5.2 • Q14 & Q15',
      text: '(i) How many multiples of 4 lie between 10 and 250? (ii) For what value of n, are the nth terms of two APs: $63, 65, 67, \\dots$ and $3, 10, 17, \\dots$ equal?',
      marks: 4,
      ans: `<p><strong>(i) Multiples of 4 between 10 and 250:</strong><br>
First multiple after 10 is 12; last multiple before 250 is 248.<br>
List: $12, 16, 20, \\dots, 248$. Here $a = 12, d = 4, a_n = 248$.<br>
$$248 = 12 + (n - 1)4 \\implies 236 = 4(n - 1) \\implies n - 1 = 59 \\implies \\mathbf{n = 60}$$
There are <strong>60 multiples of 4</strong>.</p>
<p><strong>(ii) Value of n for equal nth terms:</strong><br>
For AP 1: $a_1 = 63, d_1 = 2 \\implies a_n = 63 + (n - 1)2 = 2n + 61$.<br>
For AP 2: $a_2 = 3, d_2 = 7 \\implies a_n\' = 3 + (n - 1)7 = 7n - 4$.<br>
Equating both: $2n + 61 = 7n - 4 \\implies 5n = 65 \\implies \\mathbf{n = 13}$.<br>
The <strong>13th terms</strong> of both APs are equal.</p>`,
      rubric: [{ key: '(i) Multiples of 4: n = 60', marks: '2 Marks' }, { key: '(ii) Equating 2n + 61 = 7n - 4 to find n = 13', marks: '2 Marks' }]
    },
    {
      id: 'c10m-ch5-q19',
      num: 'NCERT Exercise 5.2 • Q16 & Q17',
      text: '(i) Determine the AP whose 3rd term is 16 and the 7th term exceeds the 5th term by 12. (ii) Find the 20th term from the last term of the AP: $3, 8, 13, \\dots, 253$.',
      marks: 4,
      ans: `<p><strong>(i) Determine AP:</strong><br>
$a_7 - a_5 = 12 \\implies (a + 6d) - (a + 4d) = 12 \\implies 2d = 12 \\implies \\mathbf{d = 6}$.<br>
Given $a_3 = 16 \\implies a + 2(6) = 16 \\implies \\mathbf{a = 4}$.<br>
The AP is: <strong>$4, 10, 16, 22, 28, \\dots$</strong></p>
<p><strong>(ii) 20th term from the last term of $3, 8, 13, \\dots, 253$:</strong><br>
Reversing the AP: First term $l = 253$, common difference $d\' = -5$.<br>
$$a_{20}\\text{ from end} = l + (20 - 1)d\' = 253 + 19(-5) = 253 - 95 = \\mathbf{158}$$
The 20th term from the last term is <strong>158</strong>.</p>`,
      rubric: [{ key: '(i) d = 6, a = 4; AP is 4, 10, 16, 22...', marks: '2 Marks' }, { key: '(ii) Reversing AP or formula l - (n - 1)d = 253 - 95 = 158', marks: '2 Marks' }]
    },
    {
      id: 'c10m-ch5-q20',
      num: 'NCERT Exercise 5.2 • Q18, Q19 & Q20',
      text: '(i) The sum of the 4th and 8th terms of an AP is 24 and the sum of the 6th and 10th terms is 44. Find the first three terms. (ii) Subba Rao started work in 1995 at an annual salary of ₹ 5000 and received an increment of ₹ 200 each year. In which year did his income reach ₹ 7000?',
      marks: 4,
      ans: `<p><strong>(i) Sum of terms:</strong><br>
$a_4 + a_8 = 24 \\implies (a + 3d) + (a + 7d) = 24 \\implies 2a + 10d = 24 \\implies a + 5d = 12 \\quad \\text{--- (1)}$<br>
$a_6 + a_{10} = 44 \\implies (a + 5d) + (a + 9d) = 44 \\implies 2a + 14d = 44 \\implies a + 7d = 22 \\quad \\text{--- (2)}$<br>
Subtracting (1) from (2): $2d = 10 \\implies \\mathbf{d = 5}$.<br>
From (1): $a + 5(5) = 12 \\implies a = 12 - 25 = \\mathbf{-13}$.<br>
First three terms: <strong>-13, -8, -3</strong>.</p>
<p><strong>(ii) Subba Rao\'s Salary:</strong><br>
AP: $5000, 5200, 5400, \\dots, 7000$ with $a = 5000, d = 200, a_n = 7000$.<br>
$$7000 = 5000 + (n - 1)200 \\implies 200(n - 1) = 2000 \\implies n - 1 = 10 \\implies n = 11$$
Year: $1995 + (11 - 1) = 1995 + 10 = \\mathbf{2005}$. In <strong>2005</strong>, his income reached ₹ 7000.</p>`,
      rubric: [{ key: '(i) d = 5, a = -13; terms: -13, -8, -3', marks: '2 Marks' }, { key: '(ii) n = 11; year 2005', marks: '2 Marks' }]
    }
  ];
  cards.push(...ex52Problems.map(p => makeMathCard(p.id, p.num, p.text, p.marks, p.ans, p.rubric)));

  // Ex 5.3 missing problems
  const ex53Problems = [
    {
      id: 'c10m-ch5-q21',
      num: 'NCERT Exercise 5.3 • Q2',
      text: 'Find the sums given below: (i) $7 + 10\\frac{1}{2} + 14 + \\dots + 84$, (ii) $34 + 32 + 30 + \\dots + 10$.',
      marks: 3,
      ans: `<p><strong>(i) $7 + 10.5 + 14 + \\dots + 84$:</strong><br>
Here $a = 7, d = 3.5 = 7/2, a_n = l = 84$.<br>
$$84 = 7 + (n - 1)(7/2) \\implies 77 = (n - 1)(7/2) \\implies n - 1 = 22 \\implies n = 23$$
$$S_{23} = \\frac{23}{2}(a + l) = \\frac{23}{2}(7 + 84) = \\frac{23 \\times 91}{2} = \\frac{2093}{2} = \\mathbf{1046\\frac{1}{2}}$$</p>
<p><strong>(ii) $34 + 32 + 30 + \\dots + 10$:</strong><br>
Here $a = 34, d = -2, a_n = 10$.<br>
$$10 = 34 + (n - 1)(-2) \\implies -24 = -2(n - 1) \\implies n = 13$$
$$S_{13} = \\frac{13}{2}(34 + 10) = \\frac{13}{2}(44) = 13 \\times 22 = \\mathbf{286}$$</p>`,
      rubric: [{ key: '(i) n = 23, S_23 = 1046.5', marks: '1.5 Marks' }, { key: '(ii) n = 13, S_13 = 286', marks: '1.5 Marks' }]
    },
    {
      id: 'c10m-ch5-q22',
      num: 'NCERT Exercise 5.3 • Q3',
      text: 'In an AP: (i) given $a = 5, d = 3, a_n = 50$, find $n$ and $S_n$. (ii) given $a = 7, a_{13} = 35$, find $d$ and $S_{13}$.',
      marks: 3,
      ans: `<p><strong>(i) Given $a = 5, d = 3, a_n = 50$:</strong><br>
$$50 = 5 + (n - 1)3 \\implies 45 = 3(n - 1) \\implies n - 1 = 15 \\implies \\mathbf{n = 16}$$
$$S_{16} = \\frac{16}{2}(a + l) = 8(5 + 50) = 8(55) = \\mathbf{440}$$</p>
<p><strong>(ii) Given $a = 7, a_{13} = 35$:</strong><br>
$$a + 12d = 35 \\implies 7 + 12d = 35 \\implies 12d = 28 \\implies \\mathbf{d = \\frac{7}{3}}$$
$$S_{13} = \\frac{13}{2}(7 + 35) = \\frac{13}{2}(42) = 13 \\times 21 = \\mathbf{273}$$</p>`,
      rubric: [{ key: '(i) n = 16, S_16 = 440', marks: '1.5 Marks' }, { key: '(ii) d = 7/3, S_13 = 273', marks: '1.5 Marks' }]
    },
    {
      id: 'c10m-ch5-q23',
      num: 'NCERT Exercise 5.3 • Q4 & Q5',
      text: '(i) How many terms of the AP: $9, 17, 25, \\dots$ must be taken to give a sum of 636? (ii) The first term of an AP is 5, the last term is 45 and the sum is 400. Find the number of terms and the common difference.',
      marks: 4,
      ans: `<p><strong>(i) Terms for sum 636:</strong><br>
$a = 9, d = 8, S_n = 636$.<br>
$$S_n = \\frac{n}{2}[2a + (n - 1)d] \\implies 636 = \\frac{n}{2}[18 + (n - 1)8] = n[9 + 4n - 4] = n(4n + 5)$$
$$4n^2 + 5n - 636 = 0$$
Using quadratic formula: $D = 5^2 - 4(4)(-636) = 25 + 10176 = 10201 = 101^2$.<br>
$$n = \\frac{-5 + 101}{8} = \\frac{96}{8} = \\mathbf{12} \\quad (\\text{rejecting negative root})$$
<strong>12 terms</strong> must be taken.</p>
<p><strong>(ii) $a = 5, l = 45, S_n = 400$:</strong><br>
$$S_n = \\frac{n}{2}(a + l) \\implies 400 = \\frac{n}{2}(5 + 45) = 25n \\implies \\mathbf{n = 16}$$
$$l = a + (n - 1)d \\implies 45 = 5 + 15d \\implies 15d = 40 \\implies \\mathbf{d = \\frac{8}{3}}$$</p>`,
      rubric: [{ key: '(i) Solving 4n^2 + 5n - 636 = 0 -> n = 12', marks: '2 Marks' }, { key: '(ii) n = 16, d = 8/3', marks: '2 Marks' }]
    },
    {
      id: 'c10m-ch5-q24',
      num: 'NCERT Exercise 5.3 • Q7 & Q8',
      text: '(i) Find the sum of first 22 terms of an AP in which $d = 7$ and 22nd term is 149. (ii) Find the sum of first 51 terms of an AP whose second and third terms are 14 and 18 respectively.',
      marks: 4,
      ans: `<p><strong>(i) Sum of 22 terms:</strong><br>
$a_{22} = a + 21(7) = 149 \\implies a + 147 = 149 \\implies \\mathbf{a = 2}$.<br>
$$S_{22} = \\frac{22}{2}(a + a_{22}) = 11(2 + 149) = 11(151) = \\mathbf{1661}$$</p>
<p><strong>(ii) Sum of 51 terms:</strong><br>
$a_2 = 14, a_3 = 18 \\implies d = 18 - 14 = \\mathbf{4}$.<br>
$a = a_2 - d = 14 - 4 = \\mathbf{10}$.<br>
$$S_{51} = \\frac{51}{2}[2(10) + (51 - 1)4] = \\frac{51}{2}[20 + 200] = \\frac{51}{2}(220) = 51 \\times 110 = \\mathbf{5610}$$</p>`,
      rubric: [{ key: '(i) a = 2, S_22 = 1661', marks: '2 Marks' }, { key: '(ii) a = 10, d = 4, S_51 = 5610', marks: '2 Marks' }]
    },
    {
      id: 'c10m-ch5-q25',
      num: 'NCERT Exercise 5.3 • Q9 & Q10',
      text: '(i) If the sum of first 7 terms of an AP is 49 and that of 17 terms is 289, find the sum of first n terms. (ii) Show that $a_n = 3 + 4n$ forms an AP and find $S_{15}$.',
      marks: 4,
      ans: `<p><strong>(i) Sum of first n terms:</strong><br>
$S_7 = \\frac{7}{2}[2a + 6d] = 49 \\implies 7(a + 3d) = 49 \\implies a + 3d = 7 \\quad \\text{--- (1)}$<br>
$S_{17} = \\frac{17}{2}[2a + 16d] = 289 \\implies 17(a + 8d) = 289 \\implies a + 8d = 17 \\quad \\text{--- (2)}$<br>
Subtracting (1) from (2): $5d = 10 \\implies \\mathbf{d = 2}$, $a = 7 - 3(2) = \\mathbf{1}$.<br>
$$S_n = \\frac{n}{2}[2(1) + (n - 1)2] = \\frac{n}{2}[2 + 2n - 2] = \\frac{n}{2}(2n) = \\mathbf{n^2}$$
Sum of first $n$ terms is $\\mathbf{n^2}$.</p>
<p><strong>(ii) $a_n = 3 + 4n$:</strong><br>
$a_1 = 3 + 4 = 7$, $a_2 = 3 + 8 = 11$, $a_3 = 3 + 12 = 15$.<br>
$a_2 - a_1 = 4, a_3 - a_2 = 4 \\implies d = 4$ is constant, hence it forms an AP with $a = 7, d = 4$.<br>
$$S_{15} = \\frac{15}{2}[2(7) + (14)(4)] = \\frac{15}{2}[14 + 56] = \\frac{15}{2}(70) = 15 \\times 35 = \\mathbf{525}$$</p>`,
      rubric: [{ key: '(i) a = 1, d = 2, S_n = n^2', marks: '2 Marks' }, { key: '(ii) Showing constant difference d = 4 and S_15 = 525', marks: '2 Marks' }]
    },
    {
      id: 'c10m-ch5-q26',
      num: 'NCERT Exercise 5.3 • Q11',
      text: 'If the sum of the first n terms of an AP is $4n - n^2$, what is the first term? What is the sum of first two terms? What is the second term? Similarly, find the 3rd, the 10th and the nth terms.',
      marks: 4,
      ans: `<p>Given: $S_n = 4n - n^2$.</p>
<ol>
  <li>First term: $a = S_1 = 4(1) - 1^2 = 4 - 1 = \\mathbf{3}$.</li>
  <li>Sum of first two terms: $S_2 = 4(2) - 2^2 = 8 - 4 = \\mathbf{4}$.</li>
  <li>Second term: $a_2 = S_2 - S_1 = 4 - 3 = \\mathbf{1}$.<br>
    Common difference: $d = a_2 - a_1 = 1 - 3 = -2$.
  </li>
  <li>Third term: $a_3 = a + 2d = 3 + 2(-2) = 3 - 4 = \\mathbf{-1}$.</li>
  <li>Tenth term: $a_{10} = a + 9d = 3 + 9(-2) = 3 - 18 = \\mathbf{-15}$.</li>
  <li>$n$th term:
    $$a_n = S_n - S_{n-1} = (4n - n^2) - [4(n-1) - (n-1)^2]$$
    $$a_n = a + (n - 1)d = 3 + (n - 1)(-2) = 3 - 2n + 2 = \\mathbf{5 - 2n}$$
  </li>
</ol>`,
      rubric: [
        { key: 'First term a = S1 = 3 and S2 = 4', marks: '1 Mark' },
        { key: 'Second term a2 = 1 and a3 = -1', marks: '1 Mark' },
        { key: '10th term a10 = -15', marks: '1 Mark' },
        { key: 'nth term an = 5 - 2n', marks: '1 Mark' }
      ]
    },
    {
      id: 'c10m-ch5-q27',
      num: 'NCERT Exercise 5.3 • Q13 & Q14',
      text: '(i) Find the sum of the first 15 multiples of 8. (ii) Find the sum of the odd numbers between 0 and 50.',
      marks: 3,
      ans: `<p><strong>(i) Sum of first 15 multiples of 8:</strong><br>
Multiples of 8: $8, 16, 24, \\dots$ to 15 terms ($a = 8, d = 8, n = 15$).<br>
$$S_{15} = \\frac{15}{2}[2(8) + (15 - 1)8] = \\frac{15}{2}[16 + 112] = \\frac{15}{2}(128) = 15 \\times 64 = \\mathbf{960}$$</p>
<p><strong>(ii) Sum of odd numbers between 0 and 50:</strong><br>
List: $1, 3, 5, \\dots, 49$ ($a = 1, d = 2, l = 49$).<br>
$$49 = 1 + (n - 1)2 \\implies 48 = 2(n - 1) \\implies n = 25$$
$$S_{25} = \\frac{25}{2}(a + l) = \\frac{25}{2}(1 + 49) = \\frac{25}{2}(50) = 25 \\times 25 = \\mathbf{625}$$</p>`,
      rubric: [{ key: '(i) S_15 = 960', marks: '1.5 Marks' }, { key: '(ii) n = 25, S_25 = 625', marks: '1.5 Marks' }]
    },
    {
      id: 'c10m-ch5-q28',
      num: 'NCERT Exercise 5.3 • Q16',
      text: 'A sum of ₹ 700 is to be used to give seven cash prizes to students of a school for their overall academic performance. If each prize is ₹ 20 less than its preceding prize, find the value of each of the prizes.',
      marks: 3,
      ans: `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let the first prize be $₹\\ a$.</li>
  <li>Since each prize is ₹ 20 less than preceding, common difference $d = -20$.</li>
  <li>Number of prizes $n = 7$, Total prize money $S_7 = ₹\\ 700$.</li>
  <li>$$S_n = \\frac{n}{2}[2a + (n - 1)d] \\implies 700 = \\frac{7}{2}[2a + 6(-20)]$$
    $$700 = \\frac{7}{2}[2a - 120] = 7(a - 60)$$
    $$a - 60 = 100 \\implies a = 160$$
  </li>
  <li>Prizes:
    <ul>
      <li>1st prize: ₹ 160</li>
      <li>2nd prize: ₹ 140</li>
      <li>3rd prize: ₹ 120</li>
      <li>4th prize: ₹ 100</li>
      <li>5th prize: ₹ 80</li>
      <li>6th prize: ₹ 60</li>
      <li>7th prize: ₹ 40</li>
    </ul>
  </li>
</ol>`,
      rubric: [{ key: 'Modeling with n = 7, d = -20, S7 = 700', marks: '1 Mark' }, { key: 'Solving a = 160', marks: '1 Mark' }, { key: 'Listing all 7 prize values: 160, 140, 120, 100, 80, 60, 40', marks: '1 Mark' }]
    },
    {
      id: 'c10m-ch5-q29',
      num: 'NCERT Exercise 5.3 • Q17',
      text: 'In a school, students thought of planting trees in and around the school to reduce air pollution. It was decided that the number of trees that each section of each class will plant will be the same as the class in which they are studying (e.g., section of Class I will plant 1 tree, Class II will plant 2 trees, and so on till Class XII). There are three sections of each class. How many trees will be planted by the students?',
      marks: 3,
      ans: `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>There are 3 sections for each class from Class I to Class XII.</li>
  <li>Number of trees planted by Class 1 $= 3 \\times 1 = 3$.<br>
    Class 2 $= 3 \\times 2 = 6$.<br>
    Class 3 $= 3 \\times 3 = 9, \\dots$<br>
    Class 12 $= 3 \\times 12 = 36$.
  </li>
  <li>This forms an AP: $3, 6, 9, 12, \\dots, 36$.<br>
    First term $a = 3$, difference $d = 3$, number of terms $n = 12$, last term $l = 36$.
  </li>
  <li>Total trees:
    $$S_{12} = \\frac{12}{2}(a + l) = 6(3 + 36) = 6 \\times 39 = \\mathbf{234}$$
  </li>
</ol>
<p><strong>Answer:</strong> A total of <strong>234 trees</strong> will be planted by the students.</p>`,
      rubric: [{ key: 'Forming AP: 3, 6, 9... 36 with n = 12 classes', marks: '1 Mark' }, { key: 'Using Sn = n/2(a + l) = 6 x 39', marks: '1 Mark' }, { key: 'Correct answer: 234 trees', marks: '1 Mark' }]
    },
    {
      id: 'c10m-ch5-q30',
      num: 'NCERT Exercise 5.3 • Q20',
      text: 'In a potato race, a bucket is placed at the starting point, which is 5 m from the first potato, and the other potatoes are placed 3 m apart in a straight line. There are ten potatoes in the line. A competitor starts from the bucket, picks up the nearest potato, runs back with it, drops it into the bucket, runs back to pick up the next potato, runs to the bucket to drop it in, and she continues in the same way until all the potatoes are in the bucket. What is the total distance the competitor has to run?',
      marks: 4,
      ans: `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Distance run to pick and drop 1st potato $= 2 \\times 5 = 10\\text{ m}$.</li>
  <li>Distance for 2nd potato $= 2 \\times (5 + 3) = 2 \\times 8 = 16\\text{ m}$.</li>
  <li>Distance for 3rd potato $= 2 \\times (5 + 3 + 3) = 2 \\times 11 = 22\\text{ m}$.</li>
  <li>This forms an AP: $10, 16, 22, 28, \\dots$ to $n = 10$ terms.<br>
    First term $a = 10$, common difference $d = 16 - 10 = 6$, $n = 10$.
  </li>
  <li>Total distance run:
    $$S_{10} = \\frac{10}{2}[2a + (10 - 1)d] = 5[2(10) + 9(6)] = 5[20 + 54] = 5 \\times 74 = \\mathbf{370\\text{ metres}}$$
  </li>
</ol>
<p><strong>Answer:</strong> The competitor has to run a total distance of <strong>370 metres</strong>.</p>`,
      rubric: [{ key: 'Identifying distances run: 10, 16, 22... forming AP', marks: '1.5 Marks' }, { key: 'Identifying a = 10, d = 6, n = 10', marks: '1 Mark' }, { key: 'Applying Sn formula to get 370 m', marks: '1.5 Marks' }]
    }
  ];
  cards.push(...ex53Problems.map(p => makeMathCard(p.id, p.num, p.text, p.marks, p.ans, p.rubric)));

  return cards;
}

module.exports = {
  getChapter3Additions,
  getChapter4Additions,
  getChapter5Additions
};
