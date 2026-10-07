const fs = require('fs');
const path = require('path');

const chDir = path.join(__dirname, '..', 'chapters-c8m');
const hubFile = path.join(__dirname, '..', 'ncert-solutions-class-8-maths.html');

const chapters = [
  // CH 1
  {
    n: 1,
    title: 'A Square and A Cube',
    part: 'Part 1',
    subtitle: 'Square Numbers, The 100-Locker Exploration, Sum of Odd Numbers, Cube Numbers & Pythagorean Triplets',
    concepts: `
      <li><strong>Square Numbers:</strong> A natural number <em>n</em> is a square number if <em>n = m²</em> for some natural number <em>m</em>. Square numbers end only in <strong>0, 1, 4, 5, 6, or 9</strong>.</li>
      <li><strong>The 100-Locker / Door Exploration:</strong> A locker visited by every student <em>k</em> (where <em>k</em> divides the locker number) ends up open if and only if it has an <strong>odd number of factors</strong>. Factors naturally pair up (d, n/d); only <strong>perfect squares</strong> have an odd number of factors because √n × √n = n pairs with itself.</li>
      <li><strong>Sum of Consecutive Odds:</strong> The sum of the first <em>n</em> consecutive odd natural numbers is always <em>n²</em>: <code>1 + 3 + 5 + ... + (2n − 1) = n²</code>.</li>
      <li><strong>Non-Squares Between Consecutive Squares:</strong> There are exactly <strong>2n non-square numbers</strong> strictly between <em>n²</em> and <em>(n + 1)²</em>.</li>
      <li><strong>Cube Numbers:</strong> A number <em>n</em> is a perfect cube if <em>n = m³</em>. In prime factorisation, every factor must appear in triplets.</li>
      <li><strong>Pythagorean Triplets:</strong> For any natural number <em>m &gt; 1</em>: <code>(2m)² + (m² − 1)² = (m² + 1)²</code>.</li>`,
    questions: [
      {
        id: 'c8m_ch1_q1',
        num: 'Q1',
        text: 'In the classic 100-locker exploration, 100 closed lockers are lined up in a school hallway. Student 1 opens every locker. Student 2 toggles every 2nd locker (2, 4, 6...). Student 3 toggles every 3rd locker (3, 6, 9...), and this continues up to Student 100.<br>(a) Which lockers remain OPEN at the end?<br>(b) Why do only these specific lockers remain open?<br>(c) How many total lockers remain open out of the 100?',
        marks: '4 Marks',
        steps: [
          '<strong>(a) Lockers remaining OPEN:</strong> Lockers numbered <strong>1, 4, 9, 16, 25, 36, 49, 64, 81, and 100</strong>.',
          '<strong>(b) Mathematical Reason:</strong> Locker number <em>L</em> is toggled once for every divisor it has. A closed locker ends up OPEN if and only if it is toggled an <strong>odd number of times</strong> (has an odd number of divisors). Divisors of an integer come in distinct pairs (d, L/d), except when d = L/d (i.e. d² = L). Therefore, only <strong>perfect square numbers</strong> have an odd number of divisors.',
          '<strong>(c) Total count:</strong> The perfect squares up to 100 are 1², 2², 3², ..., 10². Exactly <strong>10 lockers</strong> remain open.'
        ],
        scheme: [
          { key: 'Listing open lockers (1, 4, 9, ..., 100)', marks: '1 Mark' },
          { key: 'Explaining factor pairs and odd factor count of squares', marks: '2 Marks' },
          { key: 'Total count = 10 lockers', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch1_q2',
        num: 'Q2',
        text: 'Using the property that the sum of consecutive odd numbers equals a perfect square:<br>(a) Express 64 as the sum of 8 odd numbers.<br>(b) Express 121 as the sum of 11 odd numbers.<br>(c) Without adding, evaluate: 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19 + 21 + 23.',
        marks: '3 Marks',
        steps: [
          '<strong>(a) 64 = 8²:</strong> Sum of first 8 odd numbers = <span class="math">1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 = 64</span>.',
          '<strong>(b) 121 = 11²:</strong> Sum of first 11 odd numbers = <span class="math">1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19 + 21 = 121</span>.',
          '<strong>(c) Sum evaluation:</strong> The sequence 1, 3, ..., 23 has <em>n = 12</em> consecutive odd numbers. Sum = 12² = <span class="math">144</span>.'
        ],
        scheme: [
          { key: 'Part (a) written correctly', marks: '1 Mark' },
          { key: 'Part (b) written correctly', marks: '1 Mark' },
          { key: 'Part (c) evaluated as 12² = 144', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch1_q3',
        num: 'Q3',
        text: 'How many non-square natural numbers lie strictly between the squares of:<br>(a) 12² and 13²<br>(b) 25² and 26²<br>(c) 99² and 100²',
        marks: '3 Marks',
        steps: [
          '<strong>Property:</strong> The number of non-square natural numbers strictly between <em>n²</em> and <em>(n + 1)²</em> is exactly <strong>2n</strong>: ((n + 1)² − n² − 1 = 2n).',
          '<strong>(a) Between 12² and 13²:</strong> n = 12 ⟹ Count = 2(12) = <span class="math">24 non-square numbers</span>.',
          '<strong>(b) Between 25² and 26²:</strong> n = 25 ⟹ Count = 2(25) = <span class="math">50 non-square numbers</span>.',
          '<strong>(c) Between 99² and 100²:</strong> n = 99 ⟹ Count = 2(99) = <span class="math">198 non-square numbers</span>.'
        ],
        scheme: [
          { key: 'Formula 2n stated', marks: '½ Mark' },
          { key: 'Calculations for (a), (b), (c)', marks: '2½ Marks' }
        ]
      },
      {
        id: 'c8m_ch1_q4',
        num: 'Q4',
        text: 'Find a Pythagorean triplet whose smallest member is:<br>(a) 6<br>(b) 14<br>(c) 16',
        marks: '3 Marks',
        steps: [
          '<strong>General Formula:</strong> 2m, m² − 1, m² + 1 form a Pythagorean triplet for integer m &gt; 1.',
          '<strong>(a) Smallest = 6:</strong> 2m = 6 ⟹ m = 3. m² − 1 = 8, m² + 1 = 10. Triplet: <span class="math">(6, 8, 10)</span>. (6² + 8² = 36 + 64 = 100 = 10²).',
          '<strong>(b) Smallest = 14:</strong> 2m = 14 ⟹ m = 7. m² − 1 = 48, m² + 1 = 50. Triplet: <span class="math">(14, 48, 50)</span>.',
          '<strong>(c) Smallest = 16:</strong> 2m = 16 ⟹ m = 8. m² − 1 = 63, m² + 1 = 65. Triplet: <span class="math">(16, 63, 65)</span>.'
        ],
        scheme: [
          { key: 'Triplet (6, 8, 10) for m = 3', marks: '1 Mark' },
          { key: 'Triplet (14, 48, 50) for m = 7', marks: '1 Mark' },
          { key: 'Triplet (16, 63, 65) for m = 8', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch1_q5',
        num: 'Q5',
        text: 'Find the smallest number by which 675 must be multiplied to obtain a perfect cube. Also calculate the cube root of the product.',
        marks: '3 Marks',
        steps: [
          '<strong>Prime factorisation of 675:</strong> 675 = 3 × 3 × 3 × 5 × 5 = <span class="math">3³ × 5²</span>.',
          'Factor 3 appears as a complete triplet (3³). Factor 5 appears only twice (5²).',
          'To make a complete triplet of 5, we must multiply by one more 5.',
          '<strong>Smallest multiplier:</strong> <span class="math">5</span>.',
          '<strong>Product and cube root:</strong> 675 × 5 = 3375 = (3 × 5)³ = 15³. Cube root = <span class="math">∛3375 = 15</span>.'
        ],
        scheme: [
          { key: 'Prime factorisation 3³ × 5²', marks: '1 Mark' },
          { key: 'Multiplier = 5', marks: '1 Mark' },
          { key: 'Cube root = 15', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Architectural Tessellation & Square Tiles',
      text: 'A community hall of dimensions 18 meters by 12 meters needs to be paved with the largest possible identical square tiles without cutting any tile.<br>(a) Find the side of the largest square tile that can be used.<br>(b) Calculate the total number of square tiles needed.<br>(c) If each tile has area side², verify that the total area of all tiles equals the hall area.',
      ans: '<strong>(a)</strong> The side of the largest square tile is HCF(18, 12) = <strong>6 meters</strong>.<br><strong>(b)</strong> Number of tiles = (18 × 12) / (6 × 6) = 216 / 36 = <strong>6 tiles</strong>.<br><strong>(c)</strong> Total area = 6 × 36 = 216 m², which equals 18 × 12 = 216 m².'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> The square of any odd integer is always of the form 8k + 1 for some integer k.<br><strong>Reason (R):</strong> Any odd integer can be written as 2m + 1, and its square is 4m(m + 1) + 1, where m(m + 1) is always even.<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation of A. (b) Both A and R are true, but R is not correct explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation of A.</strong><br><em>Explanation:</em> Since one of m or m + 1 is always even, m(m + 1) = 2k. Hence (2m + 1)² = 4(2k) + 1 = 8k + 1.'
    }
  },

  // CH 2
  {
    n: 2,
    title: 'Power Play',
    part: 'Part 1',
    subtitle: 'Exponents, Paper-Folding Doubling Model, Laws of Indices, Scientific Notation & Unit Digit Cyclicity',
    concepts: `
      <li><strong>Powers and Exponents:</strong> In <em>aⁿ</em>, <em>a</em> is the <strong>base</strong> and <em>n</em> is the <strong>exponent</strong>, representing repeated multiplication.</li>
      <li><strong>Paper-Folding Model:</strong> Repeatedly folding a sheet doubles its layers: 1 fold = 2¹ = 2; 2 folds = 2² = 4; <em>n</em> folds = 2ⁿ layers. Exponential growth rapidly surpasses linear increments.</li>
      <li><strong>Laws of Indices:</strong> <code>aᵐ × aⁿ = aᵐ⁺ⁿ</code>, <code>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</code>, <code>(aᵐ)ⁿ = aᵐⁿ</code>, <code>a⁰ = 1</code>, <code>a⁻ⁿ = 1/aⁿ</code>.</li>
      <li><strong>Scientific Notation:</strong> Writing numbers as <code>k × 10ᵐ</code> where 1 ≤ k &lt; 10.</li>
      <li><strong>Cyclicity of Digits:</strong> Powers of 2, 3, 7, 8 have cyclicity 4; powers of 4 and 9 have cyclicity 2.</li>`,
    questions: [
      {
        id: 'c8m_ch2_q1',
        num: 'Q1',
        text: 'A sheet of paper of thickness 0.1 mm is folded in half repeatedly.<br>(a) Write an exponential expression for the thickness after n folds.<br>(b) Calculate the thickness (in mm and cm) after 10 folds.<br>(c) How many folds are required for thickness to exceed 1 meter (1000 mm)?',
        marks: '3 Marks',
        steps: [
          '<strong>(a) Formula:</strong> After <em>n</em> folds, layers = 2ⁿ. Thickness = <span class="math">T(n) = 0.1 × 2ⁿ mm</span>.',
          '<strong>(b) For n = 10:</strong> 2¹⁰ = 1024. Thickness = 0.1 × 1024 = <span class="math">102.4 mm = 10.24 cm</span>.',
          '<strong>(c) Exceeding 1 meter:</strong> 0.1 × 2ⁿ &gt; 1000 ⟹ 2ⁿ &gt; 10,000. Since 2¹³ = 8192 and 2¹⁴ = 16384, at least <span class="math">14 folds</span> are required.'
        ],
        scheme: [
          { key: 'Expression T(n) = 0.1 × 2ⁿ', marks: '1 Mark' },
          { key: 'Evaluating n = 10 as 10.24 cm', marks: '1 Mark' },
          { key: 'Finding n = 14 folds', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch2_q2',
        num: 'Q2',
        text: 'Simplify using laws of exponents:<br>(a) (2⁻³ × 5⁻³) ÷ 10⁻⁵<br>(b) [(1/3)⁻² − (1/2)⁻³] ÷ (1/4)⁻²<br>(c) (3⁻⁷ ÷ 3⁻¹⁰) × 3⁻⁵',
        marks: '3 Marks',
        steps: [
          '<strong>(a):</strong> 2⁻³ × 5⁻³ = (2 × 5)⁻³ = 10⁻³. 10⁻³ ÷ 10⁻⁵ = 10⁻³ ⁺ ⁵ = 10² = <span class="math">100</span>.',
          '<strong>(b):</strong> (1/3)⁻² = 9, (1/2)⁻³ = 8. (9 − 8) = 1. Divisor: (1/4)⁻² = 16. Result = 1 ÷ 16 = <span class="math">1/16</span>.',
          '<strong>(c):</strong> 3⁻⁷ ÷ 3⁻¹⁰ = 3⁻⁷ ⁺ ¹⁰ = 3³. 3³ × 3⁻⁵ = 3⁻² = <span class="math">1/9</span>.'
        ],
        scheme: [
          { key: 'Part (a) = 100', marks: '1 Mark' },
          { key: 'Part (b) = 1/16', marks: '1 Mark' },
          { key: 'Part (c) = 1/9', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch2_q3',
        num: 'Q3',
        text: 'Find the unit digit of: (a) 3⁶⁵ (b) 7⁸² (c) 2¹⁰⁰',
        marks: '3 Marks',
        steps: [
          '<strong>(a) 3⁶⁵:</strong> Cyclicity 4. 65 ÷ 4 = 16 R 1. Unit digit = 3¹ = <span class="math">3</span>.',
          '<strong>(b) 7⁸²:</strong> Cyclicity 4. 82 ÷ 4 = 20 R 2. Unit digit = 7² = 49 ⟹ <span class="math">9</span>.',
          '<strong>(c) 2¹⁰⁰:</strong> Cyclicity 4. 100 ÷ 4 = 25 R 0 (4th position). Unit digit = 2⁴ = 16 ⟹ <span class="math">6</span>.'
        ],
        scheme: [
          { key: 'Part (a) unit digit 3', marks: '1 Mark' },
          { key: 'Part (b) unit digit 9', marks: '1 Mark' },
          { key: 'Part (c) unit digit 6', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Digital Data Storage Growth (Powers of 2)',
      text: '1 KB = 2¹⁰ bytes, 1 MB = 2²⁰ bytes, 1 GB = 2³⁰ bytes.<br>(a) Express 1 GB in bytes as a power of 2.<br>(b) How many KB are in a 4 GB flash drive?<br>(c) If an image takes 2¹⁶ bytes, how many fit in 1 MB?',
      ans: '<strong>(a)</strong> 1 GB = <strong>2³⁰ bytes</strong>.<br><strong>(b)</strong> 4 GB = 2² × 2³⁰ = 2³² bytes. In KB: 2³² / 2¹⁰ = 2²² = <strong>4,194,304 KB</strong>.<br><strong>(c)</strong> 1 MB / 2¹⁶ = 2²⁰ / 2¹⁶ = 2⁴ = <strong>16 images</strong>.'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> (a/b)⁻ᵐ × (b/a)⁻ᵐ = 1 for all non-zero a, b and integer m.<br><strong>Reason (R):</strong> (a/b)⁻ᵐ = (b/a)ᵐ, and (b/a)ᵐ × (b/a)⁻ᵐ = (b/a)⁰ = 1.<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation. (b) Both A and R are true but R is not explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation of A.</strong>'
    }
  },

  // CH 3
  {
    n: 3,
    title: 'A Story of Numbers',
    part: 'Part 1',
    subtitle: 'Evolution of Counting, Tally Marks, Ancient Numeral Systems, Place Value & Base Conversions',
    concepts: `
      <li><strong>Evolution of Numbers:</strong> Early humans tallied marks. Additive systems (Egyptian, Roman) gave way to the Indian decimal place-value system.</li>
      <li><strong>Indian Decimal System:</strong> The concept of zero (Shunya) as both placeholder and number allowed infinite values with only 10 symbols (0–9).</li>
      <li><strong>Base Systems:</strong> A base-<em>b</em> system uses digits 0 to <em>b − 1</em>. A number (dₖ...d₀)ᵦ = dₖ·bᵏ + ... + d₀·b⁰.</li>`,
    questions: [
      {
        id: 'c8m_ch3_q1',
        num: 'Q1',
        text: 'Convert decimal 45 into: (a) Binary (Base 2) (b) Quinary (Base 5) (c) Octal (Base 8).',
        marks: '3 Marks',
        steps: [
          '<strong>(a) Binary:</strong> 45 ÷ 2 repeatedly gives remainders 1, 0, 1, 1, 0, 1. Read bottom to top: <span class="math">101101₂</span>.',
          '<strong>(b) Quinary (Base 5):</strong> 45 ÷ 5 = 9 R 0; 9 ÷ 5 = 1 R 4; 1 ÷ 5 = 0 R 1 ⟹ <span class="math">140₅</span>.',
          '<strong>(c) Octal (Base 8):</strong> 45 ÷ 8 = 5 R 5; 5 ÷ 8 = 0 R 5 ⟹ <span class="math">55₈</span>.'
        ],
        scheme: [
          { key: 'Binary 101101₂', marks: '1 Mark' },
          { key: 'Base 5: 140₅', marks: '1 Mark' },
          { key: 'Base 8: 55₈', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch3_q2',
        num: 'Q2',
        text: 'Convert to decimal (Base 10): (a) (11010)₂ (b) (234)₅ (c) (127)₈.',
        marks: '3 Marks',
        steps: [
          '<strong>(a) (11010)₂:</strong> 16 + 8 + 0 + 2 + 0 = <span class="math">26₁₀</span>.',
          '<strong>(b) (234)₅:</strong> 2(25) + 3(5) + 4(1) = 50 + 15 + 4 = <span class="math">69₁₀</span>.',
          '<strong>(c) (127)₈:</strong> 1(64) + 2(8) + 7(1) = 64 + 16 + 7 = <span class="math">87₁₀</span>.'
        ],
        scheme: [
          { key: '26₁₀', marks: '1 Mark' },
          { key: '69₁₀', marks: '1 Mark' },
          { key: '87₁₀', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Barcode Encoding (Base 2)',
      text: 'Barcodes use 1 for dark bars and 0 for spaces.<br>(a) What decimal value is 1001₂?<br>(b) How many values can a 4-bit binary code hold?<br>(c) Convert decimal 15 to binary.',
      ans: '<strong>(a)</strong> 1001₂ = 8 + 1 = <strong>9</strong>.<br><strong>(b)</strong> 2⁴ = <strong>16 values</strong> (0 to 15).<br><strong>(c)</strong> 15 = <strong>1111₂</strong>.'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> (10101)₂ in binary is an odd decimal number.<br><strong>Reason (R):</strong> In binary, every power of 2 except 2⁰ is even; parity depends solely on the units digit.<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation. (b) Both A and R are true but R is not explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong>'
    }
  },

  // CH 4
  {
    n: 4,
    title: 'Quadrilaterals',
    part: 'Part 1',
    subtitle: 'Properties of Four-Sided Figures, Angle Sum Property, Parallelograms, Rhombuses & Tiling',
    concepts: `
      <li><strong>Angle Sum:</strong> Sum of interior angles of a quadrilateral is always <strong>360°</strong>.</li>
      <li><strong>Parallelograms:</strong> Opposite sides and angles are equal; consecutive angles are supplementary; diagonals bisect each other.</li>
      <li><strong>Rhombus & Rectangle:</strong> A rhombus has perpendicular bisecting diagonals. A rectangle has equal bisecting diagonals. A square has both.</li>
      <li><strong>Tiling:</strong> Any quadrilateral can tile the plane because 4 angles around each vertex sum to 360°.</li>`,
    questions: [
      {
        id: 'c8m_ch4_q1',
        num: 'Q1',
        text: 'Three angles of a quadrilateral are 75°, 90°, and 110°. Find the fourth angle.',
        marks: '2 Marks',
        steps: [
          'Angle sum = 360°: 75° + 90° + 110° + x = 360°',
          '275° + x = 360° ⟹ x = <span class="math">85°</span>.'
        ],
        scheme: [
          { key: 'Angle sum 360° stated', marks: '1 Mark' },
          { key: 'x = 85°', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch4_q2',
        num: 'Q2',
        text: 'In parallelogram ABCD, ∠A = (3x − 20)° and ∠C = (x + 40)°. Find x and all four angles.',
        marks: '3 Marks',
        steps: [
          'Opposite angles equal: 3x − 20 = x + 40 ⟹ 2x = 60 ⟹ <span class="math">x = 30</span>.',
          '∠A = ∠C = 3(30) − 20 = 70°.',
          'Consecutive angles supplementary: ∠B = ∠D = 180° − 70° = 110°.',
          '<strong>Angles:</strong> 70°, 110°, 70°, 110°.'
        ],
        scheme: [
          { key: 'x = 30', marks: '1 Mark' },
          { key: '∠A = ∠C = 70°', marks: '1 Mark' },
          { key: '∠B = ∠D = 110°', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Tiling in Floor Paving',
      text: 'Four tiles with angles 60°, 100°, 120°, and 80° meet at a vertex.<br>(a) Show that they meet seamlessly without gaps.<br>(b) Why can any quadrilateral tile the plane?',
      ans: '<strong>(a)</strong> Sum = 60° + 100° + 120° + 80° = <strong>360°</strong>, matching the full turn around a point.<br><strong>(b)</strong> Interior angle sum of any 4-gon is always 360°, guaranteeing complete vertex coverage.'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> Every square is a rhombus and a rectangle, but a rectangle is not necessarily a square.<br><strong>Reason (R):</strong> A square combines equal sides (rhombus) with 90° angles (rectangle).<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation. (b) Both A and R are true but R is not explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong>'
    }
  },

  // CH 5
  {
    n: 5,
    title: 'Number Play',
    part: 'Part 1',
    subtitle: 'Generalized Form, Algebraic Proofs of Divisibility Rules, Digit Reversals & Cryptarithms',
    concepts: `
      <li><strong>Generalized Form:</strong> A 2-digit number is <code>10a + b</code>; a 3-digit number is <code>100a + 10b + c</code>.</li>
      <li><strong>Digit Reversals:</strong> Sum of a number and its reverse: <code>(10a+b)+(10b+a) = 11(a+b)</code> (multiple of 11). Difference: <code>(10a+b)−(10b+a) = 9(a−b)</code> (multiple of 9).</li>
      <li><strong>Divisibility Proofs:</strong> <code>100a + 10b + c = 9(11a+b) + (a+b+c)</code> proves divisibility by 9 depends only on the digit sum.</li>`,
    questions: [
      {
        id: 'c8m_ch5_q1',
        num: 'Q1',
        text: 'Prove algebraically that the difference between any 3-digit number and the number with reversed digits is always divisible by 99.',
        marks: '3 Marks',
        steps: [
          'Let N = 100a + 10b + c, and reverse N′ = 100c + 10b + a.',
          'N − N′ = (100a + 10b + c) − (100c + 10b + a) = 99a − 99c = <span class="math">99(a − c)</span>.',
          'Since (a − c) is an integer, the difference is always a multiple of 99.'
        ],
        scheme: [
          { key: 'General form setup', marks: '1 Mark' },
          { key: 'Subtraction showing 99(a − c)', marks: '1 Mark' },
          { key: 'Divisibility conclusion', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch5_q2',
        num: 'Q2',
        text: 'Solve the cryptarithm: 3A + 25 = B2 (find digits A and B).',
        marks: '2 Marks',
        steps: [
          'Units column: A + 5 ends in 2 ⟹ A + 5 = 12 ⟹ <span class="math">A = 7</span> (carry 1).',
          'Tens column: 3 + 2 + 1 = B ⟹ <span class="math">B = 6</span>.',
          'Check: 37 + 25 = 62.'
        ],
        scheme: [
          { key: 'A = 7', marks: '1 Mark' },
          { key: 'B = 6', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Checksum Digit Verification',
      text: 'Test whether 56784 is divisible by 11 using the alternating digit sum test.',
      ans: 'Odd places from right: 4 + 7 + 5 = 16. Even places: 8 + 6 = 14. Difference = 16 − 14 = 2. Since 2 is not divisible by 11, <strong>56784 is not divisible by 11</strong>.'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> A number is divisible by 3 if its digit sum is divisible by 3.<br><strong>Reason (R):</strong> 10ⁿ = (99...9) + 1, so every power of 10 leaves remainder 1 on division by 3.<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation. (b) Both A and R are true but R is not explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong>'
    }
  },

  // CH 6
  {
    n: 6,
    title: 'We Distribute, Yet Things Multiply',
    part: 'Part 1',
    subtitle: 'The Distributive Law, Geometric Area Models, Multiplying Binomials & Algebraic Identities',
    concepts: `
      <li><strong>Distributive Property:</strong> <code>a(b + c) = ab + ac</code>. Geometrically, a rectangle of width <em>a</em> and length <em>(b + c)</em> splits into two smaller rectangles of areas <em>ab</em> and <em>ac</em>.</li>
      <li><strong>Binomial Multiplication:</strong> <code>(a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd</code>. Visualized as a 2×2 grid of rectangle partitions.</li>
      <li><strong>Standard Identities:</strong>
        <ul>
          <li><code>(a + b)² = a² + 2ab + b²</code></li>
          <li><code>(a − b)² = a² − 2ab + b²</code></li>
          <li><code>(a + b)(a − b) = a² − b²</code></li>
        </ul>
      </li>`,
    questions: [
      {
        id: 'c8m_ch6_q1',
        num: 'Q1',
        text: 'Multiply using the distributive law:<br>(a) 4p(q + r)<br>(b) (2x + 5)(4x − 3)<br>(c) (a² + 5)(b³ + 3) + 5',
        marks: '3 Marks',
        steps: [
          '<strong>(a):</strong> 4p(q + r) = <span class="math">4pq + 4pr</span>.',
          '<strong>(b):</strong> 2x(4x − 3) + 5(4x − 3) = 8x² − 6x + 20x − 15 = <span class="math">8x² + 14x − 15</span>.',
          '<strong>(c):</strong> a²(b³ + 3) + 5(b³ + 3) + 5 = a²b³ + 3a² + 5b³ + 15 + 5 = <span class="math">a²b³ + 3a² + 5b³ + 20</span>.'
        ],
        scheme: [
          { key: 'Part (a) = 4pq + 4pr', marks: '1 Mark' },
          { key: 'Part (b) = 8x² + 14x − 15', marks: '1 Mark' },
          { key: 'Part (c) = a²b³ + 3a² + 5b³ + 20', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch6_q2',
        num: 'Q2',
        text: 'Use identities to evaluate without long multiplication:<br>(a) 103 × 104<br>(b) 95 × 96<br>(c) 105 × 95',
        marks: '3 Marks',
        steps: [
          '<strong>(a) 103 × 104:</strong> (100 + 3)(100 + 4) = 100² + (3 + 4)(100) + 3 × 4 = 10,000 + 700 + 12 = <span class="math">10,712</span>.',
          '<strong>(b) 95 × 96:</strong> (100 − 5)(100 − 4) = 100² − (5 + 4)(100) + (−5)(−4) = 10,000 − 900 + 20 = <span class="math">9,120</span>.',
          '<strong>(c) 105 × 95:</strong> (100 + 5)(100 − 5) = 100² − 5² = 10,000 − 25 = <span class="math">9,975</span>.'
        ],
        scheme: [
          { key: 'Part (a) = 10,712', marks: '1 Mark' },
          { key: 'Part (b) = 9,120', marks: '1 Mark' },
          { key: 'Part (c) = 9,975', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Modular Construction Area Expansion',
      text: 'A park of square dimension x meters is expanded by adding 3 meters to its length and 2 meters to its width.<br>(a) Write an algebraic expression for the new area.<br>(b) If x = 20 meters, find the additional area gained.',
      ans: '<strong>(a)</strong> New Area = (x + 3)(x + 2) = <strong>x² + 5x + 6 m²</strong>.<br><strong>(b)</strong> Old area = 20² = 400 m². New area = (23)(22) = 506 m². Additional area = 506 − 400 = <strong>106 m²</strong> (or 5(20) + 6 = 106 m²).'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> (x + y)² − (x − y)² = 4xy.<br><strong>Reason (R):</strong> Expanding both gives (x² + 2xy + y²) − (x² − 2xy + y²) = 2xy − (−2xy) = 4xy.<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation. (b) Both A and R are true but R is not explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong>'
    }
  },

  // CH 7
  {
    n: 7,
    title: 'Proportional Reasoning - 1',
    part: 'Part 1',
    subtitle: 'Ratios, Unitary Method, Direct Proportion, Map Scales & Representative Fractions',
    concepts: `
      <li><strong>Direct Proportion:</strong> Two quantities <em>x</em> and <em>y</em> are directly proportional if their ratio remains constant: <code>x / y = k</code> (constant). If <em>x</em> increases, <em>y</em> increases in the same proportion.</li>
      <li><strong>Scale Drawings &amp; Representative Fraction (RF):</strong> Ratio of distance on map to actual ground distance: <code>RF = Map Distance / Actual Distance</code> (both in identical units).</li>
      <li><strong>Unitary Method:</strong> Finding the value of one unit first, then multiplying to find the required quantity.</li>`,
    questions: [
      {
        id: 'c8m_ch7_q1',
        num: 'Q1',
        text: 'A car consumes 4 litres of petrol to cover 60 km.<br>(a) How much petrol is needed to cover 180 km?<br>(b) How far can the car travel on 15 litres of petrol?',
        marks: '3 Marks',
        steps: [
          'Distance and petrol are in direct proportion: x / y = constant.',
          '<strong>(a) Petrol for 180 km:</strong> 4 / 60 = P / 180 ⟹ P = (4 × 180) / 60 = <span class="math">12 litres</span>.',
          '<strong>(b) Distance for 15 litres:</strong> 60 / 4 = D / 15 ⟹ D = 15 × 15 = <span class="math">225 km</span>.'
        ],
        scheme: [
          { key: 'Direct proportion principle stated', marks: '1 Mark' },
          { key: 'Part (a) = 12 litres', marks: '1 Mark' },
          { key: 'Part (b) = 225 km', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch7_q2',
        num: 'Q2',
        text: 'A map has a scale of 1 : 250,000 (RF = 1/250000). Two towns are 4 cm apart on the map. Find the actual distance between them in kilometers.',
        marks: '2 Marks',
        steps: [
          'Actual distance = 4 cm × 250,000 = 1,000,000 cm.',
          'Converting to km: 100 cm = 1 m, 1000 m = 1 km ⟹ divide by 100,000.<br>Actual distance = 1,000,000 / 100,000 = <span class="math">10 km</span>.'
        ],
        scheme: [
          { key: 'Multiplying by scale factor = 1,000,000 cm', marks: '1 Mark' },
          { key: 'Converting to 10 km', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Architectural Blueprint Scaling',
      text: 'A building of height 45 meters is drawn with height 9 cm on an architectural blueprint.<br>(a) Find the Representative Fraction (RF) of the drawing.<br>(b) If a doorway is 2 meters high in reality, what is its height on the blueprint?',
      ans: '<strong>(a)</strong> RF = 9 cm / 4500 cm = <strong>1 : 500 (or 1/500)</strong>.<br><strong>(b)</strong> Blueprint height = 200 cm / 500 = <strong>0.4 cm = 4 mm</strong>.'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> If y is directly proportional to x, then the graph of y versus x is a straight line passing through the origin (0, 0).<br><strong>Reason (R):</strong> Direct proportion satisfies the linear equation y = kx with y-intercept equal to 0.<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation. (b) Both A and R are true but R is not explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong>'
    }
  },

  // CH 8
  {
    n: 8,
    title: 'Fractions in Disguise',
    part: 'Part 2',
    subtitle: 'Fractions as Percentages, Recurring Decimals, Conversions & Financial Mathematics',
    concepts: `
      <li><strong>Fractions as Decimals &amp; Percentages:</strong> A fraction <em>p/q</em> can be expressed as a decimal by division, or as a percentage by multiplying by 100%: <code>1/2 = 0.5 = 50%</code>, <code>1/4 = 0.25 = 25%</code>, <code>1/8 = 0.125 = 12.5%</code>.</li>
      <li><strong>Terminating vs Recurring Decimals:</strong> A fraction in lowest terms terminates if denominator has only prime factors 2 and 5. Otherwise it produces a periodic recurring decimal (e.g. 1/3 = 0.3̄).</li>
      <li><strong>Percentage Change:</strong> <code>Percentage Change = (Change / Original Value) × 100%</code>.</li>`,
    questions: [
      {
        id: 'c8m_ch8_q1',
        num: 'Q1',
        text: 'Express the recurring decimal 0.47̄ (i.e. 0.4777...) as a fraction in simplest p/q form.',
        marks: '3 Marks',
        steps: [
          'Let x = 0.4777... (1)',
          'Multiply by 10: 10x = 4.777... (2)',
          'Multiply by 100: 100x = 47.777... (3)',
          'Subtract (2) from (3): 100x − 10x = 47.777... − 4.777... ⟹ 90x = 43 ⟹ <span class="math">x = 43/90</span>.'
        ],
        scheme: [
          { key: 'Setting up 10x and 100x equations', marks: '1½ Marks' },
          { key: 'Subtraction giving 90x = 43', marks: '1 Mark' },
          { key: 'Final answer 43/90', marks: '½ Mark' }
        ]
      },
      {
        id: 'c8m_ch8_q2',
        num: 'Q2',
        text: 'A shirt marked at ₹800 is sold for ₹680. Find the discount and discount percentage.',
        marks: '2 Marks',
        steps: [
          'Discount = Marked Price − Selling Price = 800 − 680 = <span class="math">₹120</span>.',
          'Discount % = (Discount / Marked Price) × 100 = (120 / 800) × 100 = <span class="math">15%</span>.'
        ],
        scheme: [
          { key: 'Discount = ₹120', marks: '1 Mark' },
          { key: 'Discount % = 15%', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Compound Retail Discounts',
      text: 'A store offers successive discounts of 20% and 10% on a jacket marked at ₹2,000.<br>(a) Find the final price paid by the customer.<br>(b) Is the effective discount equal to 30%? Find the single equivalent discount percentage.',
      ans: '<strong>(a)</strong> After 20% discount: 2000 − 400 = ₹1,600. After additional 10%: 1600 − 160 = <strong>₹1,440</strong>.<br><strong>(b)</strong> Total discount = 2000 − 1440 = ₹560. Equivalent single discount = (560/2000) × 100 = <strong>28%</strong> (not 30%).'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> 1/7 produces a repeating block of at most 6 digits.<br><strong>Reason (R):</strong> The possible non-zero remainders on division by 7 are 1, 2, 3, 4, 5, 6, which must repeat in at most 7 − 1 = 6 steps.<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation. (b) Both A and R are true but R is not explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong>'
    }
  },

  // CH 9
  {
    n: 9,
    title: 'The Baudhāyana - Pythagoras Theorem',
    part: 'Part 2',
    subtitle: 'Baudhāyana Shulba Sutra Theorem, Geometric Dissections, Hypotenuse Properties & Applications',
    concepts: `
      <li><strong>Historical Context:</strong> Baudhāyana in the <em>Shulba Sutras</em> (c. 800 BCE) stated: <em>"The diagonal of a rectangle produces both areas which its length and breadth produce separately."</em> This is the geometric equivalent of Pythagoras' theorem.</li>
      <li><strong>Theorem Statement:</strong> In any right-angled triangle, the area of the square on the hypotenuse equals the sum of the areas of the squares on the other two legs: <code>c² = a² + b²</code>.</li>
      <li><strong>Geometric Dissection Proofs:</strong> Four identical right triangles of legs <em>a</em> and <em>b</em> arranged inside a square of side <em>(a + b)</em> leave an inner square of side <em>c</em>: <code>(a + b)² = 4(½ ab) + c² ⟹ c² = a² + b²</code>.</li>`,
    questions: [
      {
        id: 'c8m_ch9_q1',
        num: 'Q1',
        text: 'A ladder of length 15 m reaches a window 12 m above the ground when placed against a wall. How far is the foot of the ladder from the wall?',
        marks: '3 Marks',
        steps: [
          'In right triangle: Hypotenuse (ladder) c = 15 m, Vertical height a = 12 m, Distance from wall = b.',
          'By Baudhāyana-Pythagoras theorem: a² + b² = c² ⟹ 12² + b² = 15²',
          '144 + b² = 225 ⟹ b² = 225 − 144 = 81 ⟹ b = √81 = <span class="math">9 m</span>.',
          '<strong>Answer:</strong> The foot of the ladder is <strong>9 meters</strong> from the wall.'
        ],
        scheme: [
          { key: 'Setting up formula 12² + b² = 15²', marks: '1 Mark' },
          { key: 'b² = 81 evaluated', marks: '1 Mark' },
          { key: 'b = 9 m', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch9_q2',
        num: 'Q2',
        text: 'A person walks 24 meters Due East and then 10 meters Due North. What is the shortest distance from the starting point?',
        marks: '2 Marks',
        steps: [
          'East and North directions form a right angle (90°).',
          'Shortest distance d = √(24² + 10²) = √(576 + 100) = √676 = <span class="math">26 meters</span>.'
        ],
        scheme: [
          { key: 'Right angle identification and formula', marks: '1 Mark' },
          { key: 'd = 26 m', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Diagonal Bracing in Construction',
      text: 'A rectangular gate of width 2.4 meters and height 1.8 meters needs a diagonal metal support strut to prevent sagging.<br>(a) Find the required length of the diagonal strut.<br>(b) If metal struts cost ₹450 per meter, find the cost of the strut.',
      ans: '<strong>(a)</strong> Diagonal = √(2.4² + 1.8²) = √(5.76 + 3.24) = √9.0 = <strong>3.0 meters</strong>.<br><strong>(b)</strong> Cost = 3.0 × ₹450 = <strong>₹1,350</strong>.'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> A triangle with sides 7 cm, 24 cm, and 25 cm is a right-angled triangle.<br><strong>Reason (R):</strong> By the converse of Baudhāyana-Pythagoras theorem, if a² + b² = c², the angle opposite to side c is 90°.<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation. (b) Both A and R are true but R is not explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> 7² + 24² = 49 + 576 = 625 = 25².'
    }
  },

  // CH 10
  {
    n: 10,
    title: 'Proportional Reasoning - 2',
    part: 'Part 2',
    subtitle: 'Inverse Proportion, Compound Rates, Speed-Time Relationships & Work Problems',
    concepts: `
      <li><strong>Inverse Proportion:</strong> Two quantities <em>x</em> and <em>y</em> vary inversely if their product is constant: <code>x · y = k</code>. When <em>x</em> increases, <em>y</em> decreases proportionally: <code>x₁ y₁ = x₂ y₂</code>.</li>
      <li><strong>Work and Time:</strong> If a person completes a job in <em>d</em> days, their work rate per day is <code>1/d</code>. More workers require inversely fewer days.</li>
      <li><strong>Speed and Time:</strong> For a fixed distance, speed and time are inversely proportional: <code>Speed × Time = Distance</code>.</li>`,
    questions: [
      {
        id: 'c8m_ch10_q1',
        num: 'Q1',
        text: 'A team of 15 workers can construct a boundary wall in 48 hours. How many workers would be needed to complete the same job in 30 hours?',
        marks: '3 Marks',
        steps: [
          'Workers (w) and time (t) are in inverse proportion: w₁ × t₁ = w₂ × t₂.',
          '15 × 48 = w₂ × 30 ⟹ 720 = 30 w₂ ⟹ w₂ = 720 / 30 = <span class="math">24 workers</span>.',
          '<strong>Answer:</strong> <strong>24 workers</strong> are needed.'
        ],
        scheme: [
          { key: 'Inverse variation principle stated', marks: '1 Mark' },
          { key: '15 × 48 = 30 × w₂ set up', marks: '1 Mark' },
          { key: 'w₂ = 24 workers', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch10_q2',
        num: 'Q2',
        text: 'A car traveling at 60 km/h takes 2 hours to reach its destination. How fast must it travel to reach the destination in 1.5 hours (1 hour 30 min)?',
        marks: '2 Marks',
        steps: [
          'Speed × Time = Distance (constant) ⟹ s₁ × t₁ = s₂ × t₂.',
          '60 × 2 = s₂ × 1.5 ⟹ 120 = 1.5 s₂ ⟹ s₂ = 120 / 1.5 = <span class="math">80 km/h</span>.'
        ],
        scheme: [
          { key: 'Formula s₁ t₁ = s₂ t₂', marks: '1 Mark' },
          { key: 'Speed = 80 km/h', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Hostel Ration Supplies',
      text: 'A school hostel has food provisions sufficient for 120 students for 25 days. If 30 new students join the hostel, how many days will the provisions last?',
      ans: 'Students and days are inversely proportional: S₁ × D₁ = S₂ × D₂.<br>Total students S₂ = 120 + 30 = 150.<br>120 × 25 = 150 × D₂ ⟹ 3000 = 150 D₂ ⟹ D₂ = 3000 / 150 = <strong>20 days</strong>.'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> The graph of inverse proportion y = k/x is a rectangular hyperbola that never touches the axes.<br><strong>Reason (R):</strong> Neither x nor y can be zero because their product xy = k is a non-zero constant.<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation. (b) Both A and R are true but R is not explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong>'
    }
  },

  // CH 11
  {
    n: 11,
    title: 'Exploring Some Geometric Themes',
    part: 'Part 2',
    subtitle: 'Symmetry, Geometric Constructions, Polyhedra & Euler\'s Formula for 3D Solids',
    concepts: `
      <li><strong>Line &amp; Rotational Symmetry:</strong> A figure has rotational symmetry of order <em>n</em> if it coincides with itself <em>n</em> times in a full 360° turn. Angle of rotation = <code>360° / n</code>.</li>
      <li><strong>Polyhedra:</strong> Solid shapes bounded by flat polygonal faces, straight edges, and vertices. Convex polyhedra satisfy <strong>Euler's Formula</strong>: <code>Faces (F) + Vertices (V) − Edges (E) = 2</code>.</li>
      <li><strong>Platonic Solids:</strong> Exactly five regular convex polyhedra exist: Tetrahedron (4 faces), Cube (6), Octahedron (8), Dodecahedron (12), Icosahedron (20).</li>`,
    questions: [
      {
        id: 'c8m_ch11_q1',
        num: 'Q1',
        text: 'Verify Euler\'s formula (F + V − E = 2) for:<br>(a) A triangular prism<br>(b) A square pyramid<br>(c) A cuboid',
        marks: '3 Marks',
        steps: [
          '<strong>(a) Triangular Prism:</strong> Faces F = 5 (2 triangles + 3 rectangles), Vertices V = 6, Edges E = 9.<br>F + V − E = 5 + 6 − 9 = <span class="math">2 ✓</span>.',
          '<strong>(b) Square Pyramid:</strong> Faces F = 5 (1 square + 4 triangles), Vertices V = 5, Edges E = 8.<br>F + V − E = 5 + 5 − 8 = <span class="math">2 ✓</span>.',
          '<strong>(c) Cuboid:</strong> Faces F = 6, Vertices V = 8, Edges E = 12.<br>F + V − E = 6 + 8 − 12 = <span class="math">2 ✓</span>.'
        ],
        scheme: [
          { key: 'Triangular prism verified', marks: '1 Mark' },
          { key: 'Square pyramid verified', marks: '1 Mark' },
          { key: 'Cuboid verified', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch11_q2',
        num: 'Q2',
        text: 'A polyhedron has 20 vertices and 30 edges. Find the number of faces it has.',
        marks: '2 Marks',
        steps: [
          'By Euler\'s formula: F + V − E = 2.',
          'F + 20 − 30 = 2 ⟹ F − 10 = 2 ⟹ F = <span class="math">12 faces</span> (This is a dodecahedron).'
        ],
        scheme: [
          { key: 'Euler\'s formula substitution', marks: '1 Mark' },
          { key: 'F = 12 faces', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Geodesic Domes & Polyhedra',
      text: 'A soccer ball (truncated icosahedron) is constructed using 12 regular pentagons and 20 regular hexagons.<br>(a) Find the total number of faces F.<br>(b) If each vertex connects 3 faces, verify Euler\'s formula.',
      ans: '<strong>(a)</strong> F = 12 + 20 = <strong>32 faces</strong>.<br><strong>(b)</strong> Total sides = 12(5) + 20(6) = 60 + 120 = 180. Each edge is shared by 2 faces ⟹ E = 180 / 2 = 90 edges. Vertices V = 180 / 3 = 60 vertices.<br>F + V − E = 32 + 60 − 90 = <strong>2</strong> (Euler\'s formula verified).'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> No polyhedron can have 10 faces, 20 edges, and 15 vertices.<br><strong>Reason (R):</strong> Any convex polyhedron must strictly satisfy Euler\'s formula F + V − E = 2.<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation. (b) Both A and R are true but R is not explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> F + V − E = 10 + 15 − 20 = 5 ≠ 2. Such a polyhedron is topologically impossible.'
    }
  },

  // CH 12
  {
    n: 12,
    title: 'Tales by Dots and Lines',
    part: 'Part 2',
    subtitle: 'Coordinate Geometry, Ordered Pairs, Plotting Points, Reading Graphs & Linear Trends',
    concepts: `
      <li><strong>Cartesian Plane:</strong> Two perpendicular axes: horizontal x-axis and vertical y-axis meeting at origin O(0, 0).</li>
      <li><strong>Coordinates:</strong> A point P(x, y) has abscissa (x-coordinate, distance from y-axis) and ordinate (y-coordinate, distance from x-axis).</li>
      <li><strong>Linear Graphs:</strong> Points satisfying a linear equation lie on a straight line. Line graphs display trends across time.</li>`,
    questions: [
      {
        id: 'c8m_ch12_q1',
        num: 'Q1',
        text: 'State the quadrant or axis for each point: (i) (3, 5) (ii) (−2, 4) (iii) (−4, −3) (iv) (5, −2) (v) (0, −6) (vi) (4, 0).',
        marks: '3 Marks',
        steps: [
          '<strong>(i) (3, 5):</strong> Both positive ⟹ <strong>Quadrant I</strong>.',
          '<strong>(ii) (−2, 4):</strong> x negative, y positive ⟹ <strong>Quadrant II</strong>.',
          '<strong>(iii) (−4, −3):</strong> Both negative ⟹ <strong>Quadrant III</strong>.',
          '<strong>(iv) (5, −2):</strong> x positive, y negative ⟹ <strong>Quadrant IV</strong>.',
          '<strong>(v) (0, −6):</strong> x = 0 ⟹ <strong>negative y-axis</strong>.',
          '<strong>(vi) (4, 0):</strong> y = 0 ⟹ <strong>positive x-axis</strong>.'
        ],
        scheme: [
          { key: 'Each correct quadrant/axis (½ Mark each)', marks: '3 Marks' }
        ]
      },
      {
        id: 'c8m_ch12_q2',
        num: 'Q2',
        text: 'The perimeter of an equilateral triangle of side s is P = 3s. Draw up a table of values for s = 1, 2, 3, 4, 5 and state whether the graph of P versus s is a straight line.',
        marks: '3 Marks',
        steps: [
          'Table of values: (1, 3), (2, 6), (3, 9), (4, 12), (5, 15).',
          'Notice ratio P/s = 3 (constant rate of change).',
          'Plotting points and connecting them yields a continuous ray starting from origin (0, 0).',
          '<strong>Conclusion:</strong> Yes, it is a <strong>straight line passing through the origin</strong>.'
        ],
        scheme: [
          { key: 'Table of ordered pairs created', marks: '1 Mark' },
          { key: 'Constant slope noted', marks: '1 Mark' },
          { key: 'Straight line conclusion', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Fitness Tracking Distance-Time Graph',
      text: 'A runner jogs at constant speed. In 10 min they cover 1.5 km, in 20 min 3 km, in 30 min 4.5 km.<br>(a) Find the speed in km/h.<br>(b) Predict distance after 50 minutes.',
      ans: '<strong>(a)</strong> Speed = 1.5 km / (10/60 h) = 1.5 × 6 = <strong>9 km/h</strong>.<br><strong>(b)</strong> In 50 min: Distance = 9 × (50/60) = <strong>7.5 km</strong>.'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> The equation y = 2x + 1 represents a straight line that does not pass through the origin.<br><strong>Reason (R):</strong> When x = 0, y = 1 ≠ 0, so the line has a y-intercept at (0, 1).<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation. (b) Both A and R are true but R is not explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong>'
    }
  },

  // CH 13
  {
    n: 13,
    title: 'Algebra Play',
    part: 'Part 2',
    subtitle: 'Linear Equations in One Variable, Balance Model, Transposition & Word Problem Modeling',
    concepts: `
      <li><strong>Linear Equation in One Variable:</strong> An algebraic equation of the form <code>ax + b = 0</code> (where a ≠ 0). Highest power of variable is 1.</li>
      <li><strong>Balance Model:</strong> An equation is like a balanced weighing scale: performing identical operations (adding, subtracting, multiplying, dividing by non-zero) on both sides preserves balance.</li>
      <li><strong>Transposition:</strong> Shifting a term across the equality sign changes its sign (+ to −, × to ÷).</li>`,
    questions: [
      {
        id: 'c8m_ch13_q1',
        num: 'Q1',
        text: 'Solve the equation: 5x + 9 = 5 + 3x, and verify the solution.',
        marks: '2 Marks',
        steps: [
          'Transpose variable terms to LHS and constants to RHS:<br>5x − 3x = 5 − 9 ⟹ 2x = −4 ⟹ <span class="math">x = −2</span>.',
          '<strong>Verification:</strong><br>LHS = 5(−2) + 9 = −10 + 9 = −1.<br>RHS = 5 + 3(−2) = 5 − 6 = −1.<br>LHS = RHS. Verified ✓.'
        ],
        scheme: [
          { key: 'x = −2 found', marks: '1 Mark' },
          { key: 'LHS = RHS verified', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch13_q2',
        num: 'Q2',
        text: 'Solve: (x + 1) / (2x + 3) = 3 / 8.',
        marks: '2 Marks',
        steps: [
          'Cross-multiplying: 8(x + 1) = 3(2x + 3)',
          '8x + 8 = 6x + 9 ⟹ 8x − 6x = 9 − 8 ⟹ 2x = 1 ⟹ <span class="math">x = 1/2</span>.'
        ],
        scheme: [
          { key: 'Cross-multiplication set up', marks: '1 Mark' },
          { key: 'x = 1/2', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch13_q3',
        num: 'Q3',
        text: 'The sum of three consecutive multiples of 8 is 888. Find the multiples.',
        marks: '3 Marks',
        steps: [
          'Let the three consecutive multiples of 8 be 8x, 8(x + 1), and 8(x + 2).',
          'Sum = 8x + 8x + 8 + 8x + 16 = 888 ⟹ 24x + 24 = 888',
          '24x = 864 ⟹ x = 864 / 24 = 36.',
          'Multiples: 8(36) = <span class="math">288</span>, 8(37) = <span class="math">296</span>, 8(38) = <span class="math">304</span>.<br>Check: 288 + 296 + 304 = 888.'
        ],
        scheme: [
          { key: 'Setting up equation 24x + 24 = 888', marks: '1 Mark' },
          { key: 'x = 36 solved', marks: '1 Mark' },
          { key: 'Multiples: 288, 296, 304', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Age Problem Puzzle',
      text: 'A father is 3 times as old as his son. Fifteen years ago, the father was 9 times as old as his son.<br>(a) Set up a linear equation in one variable.<br>(b) Find their present ages.',
      ans: '<strong>(a)</strong> Let son\'s present age = x. Father\'s age = 3x. 15 years ago: (3x − 15) = 9(x − 15).<br><strong>(b)</strong> 3x − 15 = 9x − 135 ⟹ 6x = 120 ⟹ x = 20. Son is <strong>20 years</strong>, Father is <strong>60 years</strong>.'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> The equation 2(x + 3) = 2x + 6 is an identity with infinitely many solutions.<br><strong>Reason (R):</strong> Expanding LHS yields 2x + 6 = 2x + 6, which is true for all real numbers x.<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation. (b) Both A and R are true but R is not explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong>'
    }
  },

  // CH 14
  {
    n: 14,
    title: 'Area',
    part: 'Part 2',
    subtitle: 'Measurement of Enclosed Space, Trapeziums, Rhombuses, General Polygons & Decompositions',
    concepts: `
      <li><strong>Area of Trapezium:</strong> <code>Area = ½ × (Sum of Parallel Sides) × Height = ½(a + b)h</code>.</li>
      <li><strong>Area of Rhombus:</strong> <code>Area = ½ × d₁ × d₂</code> (half the product of its diagonals).</li>
      <li><strong>Area of General Quadrilateral:</strong> Split into two triangles along a diagonal <em>d</em> with offset heights <em>h₁</em> and <em>h₂</em>: <code>Area = ½ d (h₁ + h₂)</code>.</li>
      <li><strong>Decomposition Method:</strong> Any irregular polygon can be divided into non-overlapping triangles and trapeziums to calculate its total area.</li>`,
    questions: [
      {
        id: 'c8m_ch14_q1',
        num: 'Q1',
        text: 'The parallel sides of a trapezium are 12 cm and 20 cm, and the perpendicular distance between them is 8 cm. Find its area.',
        marks: '2 Marks',
        steps: [
          'Area of trapezium = ½(a + b)h = ½(12 + 20) × 8 = ½(32) × 8 = 16 × 8 = <span class="math">128 cm²</span>.'
        ],
        scheme: [
          { key: 'Trapezium area formula', marks: '1 Mark' },
          { key: 'Area = 128 cm²', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch14_q2',
        num: 'Q2',
        text: 'The area of a trapezium is 34 cm² and one parallel side is 10 cm. If its height is 4 cm, find the length of the other parallel side.',
        marks: '3 Marks',
        steps: [
          'Area = ½(a + b)h ⟹ 34 = ½(10 + b) × 4 ⟹ 34 = 2(10 + b)',
          '17 = 10 + b ⟹ b = 17 − 10 = <span class="math">7 cm</span>.',
          '<strong>Answer:</strong> The other parallel side is <strong>7 cm</strong>.'
        ],
        scheme: [
          { key: 'Equation set up 34 = ½(10 + b)(4)', marks: '1 Mark' },
          { key: '10 + b = 17', marks: '1 Mark' },
          { key: 'b = 7 cm', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch14_q3',
        num: 'Q3',
        text: 'The diagonal of a quadrilateral field is 24 m and perpendicular offsets from the opposite vertices are 8 m and 13 m. Find the total area of the field.',
        marks: '3 Marks',
        steps: [
          'Area of general quadrilateral = ½ × d × (h₁ + h₂).',
          'Area = ½ × 24 × (8 + 13) = 12 × 21 = <span class="math">252 m²</span>.'
        ],
        scheme: [
          { key: 'Formula Area = ½ d (h₁ + h₂)', marks: '1 Mark' },
          { key: 'Substitution ½ × 24 × 21', marks: '1 Mark' },
          { key: 'Area = 252 m²', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Surveying an Irregular Field by Triangulation',
      text: 'A surveyor plots a field by drawing a baseline AD = 100 m. Triangles are formed on either side with perpendicular offsets: to point B (height 30 m at distance 40 m from A) and to point C (height 40 m at distance 60 m from A).<br>(a) Explain how decomposition simplifies measuring irregular plots.<br>(b) Calculate the total field area.',
      ans: '<strong>(a)</strong> Dividing the land into right triangles and trapeziums allows simple standard formulas to measure complex boundaries.<br><strong>(b)</strong> Total Area = Area(ΔABD) + Area(ΔACD) = ½(100 × 30) + ½(100 × 40) = 1500 + 2000 = <strong>3,500 m²</strong>.'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> The area of a rhombus is equal to half the product of its diagonals.<br><strong>Reason (R):</strong> The diagonals of a rhombus bisect each other perpendicularly, splitting it into four congruent right triangles.<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation. (b) Both A and R are true but R is not explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> 4 × (½ × (d₁/2) × (d₂/2)) = 4 × (d₁d₂ / 8) = ½ d₁ d₂.'
    }
  }
];

// Helper to render HTML
function renderChapterHtml(ch, idx) {
  const qHtml = ch.questions.map(q => `
  <div class="q-card" id="${q.id}">
    <div class="q-head" onclick="toggleQ('${q.id}')">
      <div class="q-num">${q.num}</div>
      <div class="q-text">${q.text}</div>
      <div class="q-marks">${q.marks}</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✓ Suggested Step-by-Step Solution</div>
        <div class="answer-text">
${q.steps.map(s => `          <div class="step">${s}</div>`).join('\n')}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">Suggested Marks Distribution</div>
${q.scheme.map(r => `          <div class="marking-row"><span class="marking-key">${r.key}</span><span class="marking-marks">${r.marks}</span></div>`).join('\n')}
        </div>
      </div>
    </div>
  </div>`).join('\n');

  const cbqHtml = `
  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency-Based Practice Questions — Chapter ${ch.n}</span><span class="cbq-badge">NCF-SE / OlympiadQuiz</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #4f46e5;">
        <div class="cbq-type" style="color:#4f46e5;">📝 Case Study &amp; Conceptual Modeling</div>
        <div class="cbq-question"><strong>${ch.cbq.title}:</strong> ${ch.cbq.text}</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">${ch.cbq.ans}</div>
      </div>
      <div class="cbq-card" style="border-left:4px solid #f59e0b;">
        <div class="cbq-type" style="color:#f59e0b;">🧠 HOTS Practice Questions (Assertion-Reasoning)</div>
        <div class="cbq-question">${ch.hots.text}</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">${ch.hots.ans}</div>
      </div>
    </div>
  </div>`;

  let prevBtn = idx === 0 
    ? `<button class="ch-nav-btn" disabled style="opacity:.35;">← Previous</button>`
    : `<button class="ch-nav-btn" onclick="showChapter(${chapters[idx - 1].n})">← Chapter ${chapters[idx - 1].n}: ${chapters[idx - 1].title}</button>`;

  let nextBtn = idx === chapters.length - 1
    ? `<button class="ch-nav-btn next" onclick="showChapter(1)" style="background:#10b981;border-color:#10b981;">⌂ Back to Chapter 1</button>`
    : `<button class="ch-nav-btn next" onclick="showChapter(${chapters[idx + 1].n})">Chapter ${chapters[idx + 1].n}: ${chapters[idx + 1].title} →</button>`;

  const navHtml = `
  <div class="ch-nav-btns">
    ${prevBtn}
    ${nextBtn}
  </div>`;

  return `<section class="chapter-section" id="ch${ch.n}">
  <div class="chapter-header">
    <div class="ch-badge">${ch.n}</div>
    <div class="chapter-header-info">
      <h2>Chapter ${ch.n}: ${ch.title}</h2>
      <p>NCERT Ganita Prakash (${ch.part}) — ${ch.subtitle}</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Concepts &amp; Mathematical Foundations</div>
    <ul class="concept-list">
${ch.concepts}
    </ul>
  </div>

  <div class="ex-div">OlympiadQuiz Chapter Practice Questions &amp; Concept Applications</div>
${qHtml}

${cbqHtml}
${navHtml}
</section>`;
}

console.log('Writing all 14 Class 8 chapters to chapters-c8m...');
const chapterContents = {};

chapters.forEach((ch, idx) => {
  const filePath = path.join(chDir, `ch${ch.n}.html`);
  const html = renderChapterHtml(ch, idx);
  fs.writeFileSync(filePath, html, 'utf8');
  chapterContents[ch.n] = html;
  console.log(`Saved Ch ${ch.n}: ${ch.title} (${html.length} bytes)`);
});

// Generate chapters-data.js
console.log('Generating chapters-c8m/chapters-data.js...');
const dataJs = `// Class 8 Maths (Ganita Prakash) Preloaded Chapter Data for offline/file:// protocol fallback\nwindow.CHAPTER_DATA = ${JSON.stringify(chapterContents)};\n`;
fs.writeFileSync(path.join(chDir, 'chapters-data.js'), dataJs, 'utf8');

// Build ncert-solutions-class-8-maths.html
console.log('Building ncert-solutions-class-8-maths.html...');
let hubHtml = fs.readFileSync(hubFile, 'utf8');

// Breadcrumb chips
const chipsHtml = chapters.map(ch => {
  const activeClass = ch.n === 1 ? ' active' : '';
  return `      <span class="bc-chip${activeClass}" onclick="showChapter(${ch.n})" data-ch="${ch.n}"><span class="bc-n">${ch.n}</span>${ch.title}</span>`;
}).join('\n');

// Sidebar nav
const sidebarNavHtml = chapters.map(ch => {
  const activeClass = ch.n === 1 ? ' active' : '';
  return `      <li><a onclick="showChapter(${ch.n})" data-ch="${ch.n}" class="${activeClass}"><span class="ch-num">${ch.n}</span><span>${ch.title}</span></a></li>`;
}).join('\n');

// Sections
const sectionsHtml = chapters.map(ch => {
  let content = chapterContents[ch.n];
  if (ch.n !== 1) {
    content = content.replace(/<section class="chapter-section"/i, '<section class="chapter-section hidden"');
  }
  return content;
}).join('\n\n');

// SEO Title
hubHtml = hubHtml.replace(
  /<title>[\s\S]*?<\/title>/i,
  `<title>NCERT Solutions Class 8 Maths Ganita Prakash 2026-27 | Chapter-wise Solutions</title>`
);

// Meta Description
hubHtml = hubHtml.replace(
  /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']/i,
  `<meta name="description" content="Complete NCERT Solutions for Class 8 Mathematics based on the latest NCERT textbook Ganita Prakash (Part 1 &amp; Part 2) for CBSE 2026-27. Comprehensive concept explanations, step-by-step solutions, and competency-based questions for all 14 chapters.">`
);

// Meta Keywords
hubHtml = hubHtml.replace(
  /<meta\s+name=["']keywords["']\s+content=["'][\s\S]*?["']/i,
  `<meta name="keywords" content="NCERT Solutions Class 8 Maths Ganita Prakash, Class 8 Ganita Prakash Solutions, CBSE Class 8 Maths 2026-27, A Square and A Cube, Power Play, A Story of Numbers, Quadrilaterals, Number Play, We Distribute Yet Things Multiply, Proportional Reasoning, Fractions in Disguise, Baudhayana Pythagoras Theorem, Exploring Some Geometric Themes, Tales by Dots and Lines, Algebra Play, Area, NEP 2020 NCF-SE">`
);

// Open Graph & Twitter
hubHtml = hubHtml.replace(
  /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']/i,
  `<meta property="og:title" content="NCERT Solutions Class 8 Maths Ganita Prakash 2026-27 | Chapter-wise Solutions">`
);
hubHtml = hubHtml.replace(
  /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']/i,
  `<meta property="og:description" content="Complete NCERT solutions and practice questions for Class 8 Mathematics Ganita Prakash (Part 1 &amp; Part 2) with step-by-step guidance, formulas, and competency-based questions.">`
);
hubHtml = hubHtml.replace(
  /<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']/i,
  `<meta name="twitter:title" content="NCERT Solutions Class 8 Maths Ganita Prakash 2026-27 | Chapter-wise Solutions">`
);
hubHtml = hubHtml.replace(
  /<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']/i,
  `<meta name="twitter:description" content="Complete NCERT solutions and practice questions for Class 8 Mathematics Ganita Prakash (Part 1 &amp; Part 2) with step-by-step guidance, formulas, and competency-based questions.">`
);

// Schema Breadcrumbs
hubHtml = hubHtml.replace(
  /<script type="application\/ld\+json">\s*\{\s*"@context":\s*"https:\/\/schema\.org",\s*"@type":\s*"BreadcrumbList"[\s\S]*?<\/script>/i,
  `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://olympiadquiz.org/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "NCERT Solutions",
        "item": "https://olympiadquiz.org/ncert-solutions.html"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Class 8",
        "item": "https://olympiadquiz.org/ncert-solutions.html#class8"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Maths",
        "item": "https://olympiadquiz.org/ncert-solutions-class-8-maths.html"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Ganita Prakash",
        "item": "https://olympiadquiz.org/ncert-solutions-class-8-maths.html"
      }
    ]
  }
  </script>`
);

// Schema LearningResource
hubHtml = hubHtml.replace(
  /<script type="application\/ld\+json">\s*\{\s*"@context":\s*"https:\/\/schema\.org",\s*"@type":\s*"LearningResource"[\s\S]*?<\/script>/i,
  `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions Class 8 Maths Ganita Prakash 2026-27 | Chapter-wise Solutions",
    "description": "Complete NCERT solutions and conceptual practice questions for Class 8 Mathematics based on the official textbook Ganita Prakash (Part 1 & Part 2) for CBSE 2026-27.",
    "educationalLevel": "CBSE Class 8",
    "learningResourceType": "Textbook Solutions",
    "inLanguage": "en",
    "publisher": {
      "@type": "Organization",
      "name": "OlympiadQuiz",
      "url": "https://olympiadquiz.org/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://olympiadquiz.org/favicon.png"
      }
    }
  }
  </script>`
);

// Schema FAQPage
hubHtml = hubHtml.replace(
  /<script type="application\/ld\+json">\s*\{\s*"@context":\s*"https:\/\/schema\.org",\s*"@type":\s*"FAQPage"[\s\S]*?<\/script>/i,
  `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the official NCERT Class 8 Mathematics textbook for 2026-27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The official NCERT textbook for Class 8 Mathematics is Ganita Prakash, published in two parts (Part 1 and Part 2) comprising 14 chapters under NEP 2020 and NCF-SE 2023."
        }
      },
      {
        "@type": "Question",
        "name": "How many chapters are in Class 8 Maths Ganita Prakash?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ganita Prakash consists of 14 chapters: Chapter 1: A Square and A Cube, Chapter 2: Power Play, Chapter 3: A Story of Numbers, Chapter 4: Quadrilaterals, Chapter 5: Number Play, Chapter 6: We Distribute, Yet Things Multiply, Chapter 7: Proportional Reasoning - 1, Chapter 8: Fractions in Disguise, Chapter 9: The Baudhāyana - Pythagoras Theorem, Chapter 10: Proportional Reasoning - 2, Chapter 11: Exploring Some Geometric Themes, Chapter 12: Tales by Dots and Lines, Chapter 13: Algebra Play, and Chapter 14: Area."
        }
      },
      {
        "@type": "Question",
        "name": "Does OlympiadQuiz provide step-by-step solutions and competency-based questions for Ganita Prakash?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, OlympiadQuiz provides clear step-by-step solutions, concept summaries, suggested marks distributions, and competency-based case studies across all 14 chapters of Ganita Prakash."
        }
      }
    ]
  }
  </script>`
);

// Subject Breadcrumbs Bar
hubHtml = hubHtml.replace(
  /<ol class="ncert-bc-list">[\s\S]*?<\/ol>/i,
  `<ol class="ncert-bc-list">
      <li><a href="index.html">Home</a></li>
      <li class="ncert-bc-sep">/</li>
      <li><a href="ncert-solutions.html">NCERT Solutions</a></li>
      <li class="ncert-bc-sep">/</li>
      <li><a href="ncert-solutions.html#class8">Class 8</a></li>
      <li class="ncert-bc-sep">/</li>
      <li><a href="ncert-solutions-class-8-maths.html">Maths</a></li>
      <li class="ncert-bc-sep">/</li>
      <li class="ncert-bc-current">Ganita Prakash</li>
    </ol>`
);

// H1 in Hero Banner
hubHtml = hubHtml.replace(
  /<header class="hero-banner">[\s\S]*?<\/header>/i,
  `<header class="hero-banner">
  <h1>NCERT Solutions for Class 8 Maths – Ganita Prakash</h1>
  <p>Comprehensive chapter-wise solutions and conceptual practice questions for all <strong>14 chapters</strong> of NCERT Class 8 Mathematics <em>Ganita Prakash</em> (Part 1 &amp; Part 2 | 2026-27). Designed with step-by-step explanations, suggested marks distribution, and Competency-Based Questions (CBQs).</p>
  <div class="hero-badges">
    <span class="hero-badge">📘 Ganita Prakash (Part 1 &amp; 2)</span>
    <span class="hero-badge">✅ All 14 Chapters</span>
    <span class="hero-badge">📐 NEP 2020 &amp; NCF-SE 2023</span>
    <span class="hero-badge">🔢 Step-by-Step Solutions</span>
    <span class="hero-badge">🎯 Competency-Based Questions</span>
  </div>
</header>`
);

// Breadcrumb chips container
hubHtml = hubHtml.replace(
  /<div class="breadcrumb-chips" id="breadcrumbChips">[\s\S]*?<\/div>/i,
  `<div class="breadcrumb-chips" id="breadcrumbChips">\n${chipsHtml}\n    </div>`
);

// Sidebar title and chapter nav
hubHtml = hubHtml.replace(
  /<div class="sidebar-title">[\s\S]*?<\/div>/i,
  `<div class="sidebar-title">
      <span>14 Chapters (Ganita Prakash)</span>
      <span style="font-size:0.75rem;background:#eef2ff;color:#3730a3;padding:2px 8px;border-radius:10px;">Full Coverage</span>
    </div>`
);

hubHtml = hubHtml.replace(
  /<ul class="chapter-nav" id="chapterNav">[\s\S]*?<\/ul>/i,
  `<ul class="chapter-nav" id="chapterNav">\n${sidebarNavHtml}\n    </ul>`
);

// Content area
hubHtml = hubHtml.replace(
  /<div id="chapter-content-area">[\s\S]*?<\/div>\s*<\/main>/i,
  `<div id="chapter-content-area">\n${sectionsHtml}\n    </div>\n  </main>`
);

// Remove any remaining false claims of CBSE Marking Scheme
hubHtml = hubHtml.replace(/CBSE Marking Scheme 2026-27/g, 'Suggested Marks Distribution');
hubHtml = hubHtml.replace(/CBSE Marking Scheme/g, 'Suggested Marks Distribution');
hubHtml = hubHtml.replace(/CBSE Standard Step-by-Step Solution/g, 'Suggested Step-by-Step Solution');
hubHtml = hubHtml.replace(/CBSE Standard Answer/g, 'Suggested Step-by-Step Solution');

// Ensure proper book spelling Ganita Prakash
hubHtml = hubHtml.replace(/Ganit Prakash/g, 'Ganita Prakash');

fs.writeFileSync(hubFile, hubHtml, 'utf8');
console.log('ncert-solutions-class-8-maths.html successfully updated with authentic Ganita Prakash content!');
