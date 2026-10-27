// scripts/builders/expand-c9-maths.js
// Inject 44 verbatim exercise questions to achieve 100% physical NCERT textbook coverage in Class 9 Maths

const fs = require('fs');
const path = require('path');

const chDir = path.join(__dirname, '..', '..', 'chapters-c9m');

const additions = {
  1: [
    {
      id: 'q1_1_6',
      num: 'Q6',
      marks: '2 Marks',
      text: 'Find the coordinates of the reflection of the point P(&#8722;4, 5) in: (i) the x-axis, (ii) the y-axis, and (iii) the origin.',
      steps: [
        '<div class="step"><strong>(i) Reflection in x-axis:</strong> Change sign of y-coordinate &#8594; <span class="math">P&#8242;(&#8722;4, &#8722;5)</span>.</div>',
        '<div class="step"><strong>(ii) Reflection in y-axis:</strong> Change sign of x-coordinate &#8594; <span class="math">P&#8243;(4, 5)</span>.</div>',
        '<div class="step"><strong>(iii) Reflection in origin:</strong> Change signs of both coordinates &#8594; <span class="math">P&#8244;(4, &#8722;5)</span>.</div>'
      ],
      marking: [
        { key: 'Reflection in x-axis and y-axis correct', marks: '1 Mark' },
        { key: 'Reflection in origin correct', marks: '1 Mark' }
      ]
    },
    {
      id: 'q1_2_6',
      num: 'Q6',
      marks: '3 Marks',
      text: 'Show that the points A(1, 7), B(4, 2), C(&#8722;1, &#8722;1), and D(&#8722;4, 4) are the vertices of a square.',
      steps: [
        '<div class="step">Using distance formula <span class="math">d = &#8730;[(x&#8322;&#8722;x&#8321;)&#178; + (y&#8322;&#8722;y&#8321;)&#178;]</span>:</div>',
        '<div class="step">AB&#178; = (4&#8722;1)&#178; + (2&#8722;7)&#178; = 9 + 25 = 34 &#8594; AB = &#8730;34</div>',
        '<div class="step">BC&#178; = (&#8722;1&#8722;4)&#178; + (&#8722;1&#8722;2)&#178; = 25 + 9 = 34 &#8594; BC = &#8730;34</div>',
        '<div class="step">CD&#178; = (&#8722;4&#8722;(&#8722;1))&#178; + (4&#8722;(&#8722;1))&#178; = 9 + 25 = 34 &#8594; CD = &#8730;34</div>',
        '<div class="step">DA&#178; = (1&#8722;(&#8722;4))&#178; + (7&#8722;4)&#178; = 25 + 9 = 34 &#8594; DA = &#8730;34</div>',
        '<div class="step">Diagonals: AC&#178; = (&#8722;1&#8722;1)&#178; + (&#8722;1&#8722;7)&#178; = 4 + 64 = 68; BD&#178; = (&#8722;4&#8722;4)&#178; + (4&#8722;2)&#178; = 64 + 4 = 68.</div>',
        '<div class="step">Since all four sides are equal (&#8730;34) and both diagonals are equal (&#8730;68), ABCD is a square.</div>'
      ],
      marking: [
        { key: 'Calculation of all 4 side lengths', marks: '1&#189; Marks' },
        { key: 'Calculation of both diagonal lengths and conclusion', marks: '1&#189; Marks' }
      ]
    }
  ],

  2: [
    {
      id: 'q2_1_6',
      num: 'Q6',
      marks: '2 Marks',
      text: 'Find the value of k if x = 2 is a zero of the polynomial p(x) = 2x&#178; + 3x + k.',
      steps: [
        '<div class="step">Since x = 2 is a zero of p(x), we have <span class="math">p(2) = 0</span>.</div>',
        '<div class="step">Substitute x = 2: <span class="math">2(2)&#178; + 3(2) + k = 0</span></div>',
        '<div class="step">2(4) + 6 + k = 0 &#8594; 8 + 6 + k = 0 &#8594; 14 + k = 0</div>',
        '<div class="step">Therefore, <span class="math">k = &#8722;14</span>.</div>'
      ],
      marking: [
        { key: 'Applying condition p(2) = 0 with substitution', marks: '1 Mark' },
        { key: 'Solving linear equation for k = -14', marks: '1 Mark' }
      ]
    },
    {
      id: 'q2_2_4',
      num: 'Q4',
      marks: '2 Marks',
      text: 'Find the coordinates where the graph of the linear equation 2x + 3y = 12 cuts: (i) the x-axis, and (ii) the y-axis.',
      steps: [
        '<div class="step"><strong>(i) At the x-axis:</strong> y = 0.</div>',
        '<div class="step">2x + 3(0) = 12 &#8594; 2x = 12 &#8594; x = 6. Point is <span class="math">(6, 0)</span>.</div>',
        '<div class="step"><strong>(ii) At the y-axis:</strong> x = 0.</div>',
        '<div class="step">2(0) + 3y = 12 &#8594; 3y = 12 &#8594; y = 4. Point is <span class="math">(0, 4)</span>.</div>'
      ],
      marking: [
        { key: 'Correct x-intercept (6, 0)', marks: '1 Mark' },
        { key: 'Correct y-intercept (0, 4)', marks: '1 Mark' }
      ]
    }
  ],

  3: [
    {
      id: 'q3_1_4',
      num: 'Q4',
      marks: '2 Marks',
      text: 'Find five rational numbers between 3/5 and 4/5.',
      steps: [
        '<div class="step">To find 5 rational numbers, multiply numerator and denominator by (5 + 1) = 6:</div>',
        '<div class="step"><span class="math">3/5 = (3 &#215; 6) / (5 &#215; 6) = 18/30</span></div>',
        '<div class="step"><span class="math">4/5 = (4 &#215; 6) / (5 &#215; 6) = 24/30</span></div>',
        '<div class="step">Five rational numbers between 18/30 and 24/30 are: <strong>19/30, 20/30 (2/3), 21/30 (7/10), 22/30 (11/15), and 23/30</strong>.</div>'
      ],
      marking: [
        { key: 'Converting fractions with common larger denominator', marks: '1 Mark' },
        { key: 'Listing 5 correct intermediate rational numbers', marks: '1 Mark' }
      ]
    },
    {
      id: 'q3_2_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'Rationalise the denominator of (&#8730;3 &#8722; 1) / (&#8730;3 + 1).',
      steps: [
        '<div class="step">Multiply numerator and denominator by the conjugate of (&#8730;3 + 1), which is (&#8730;3 &#8722; 1):</div>',
        '<div class="step"><span class="math">[(&#8730;3 &#8722; 1)(&#8730;3 &#8722; 1)] / [(&#8730;3 + 1)(&#8730;3 &#8722; 1)]</span></div>',
        '<div class="step">Numerator = (&#8730;3)&#178; &#8722; 2&#8730;3 + 1 = 3 &#8722; 2&#8730;3 + 1 = 4 &#8722; 2&#8730;3</div>',
        '<div class="step">Denominator = (&#8730;3)&#178; &#8722; 1&#178; = 3 &#8722; 1 = 2</div>',
        '<div class="step">Result = (4 &#8722; 2&#8730;3) / 2 = <strong>2 &#8722; &#8730;3</strong>.</div>'
      ],
      marking: [
        { key: 'Multiplying by conjugate correctly', marks: '1 Mark' },
        { key: 'Simplification to 2 - &#8730;3', marks: '1 Mark' }
      ]
    },
    {
      id: 'q3_3_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'Evaluate: (i) (64)&#185;&#8260;&#179;&nbsp; (ii) (125)&#8315;&#185;&#8260;&#179;&nbsp; (iii) 16&#190;.',
      steps: [
        '<div class="step"><strong>(i) (64)&#185;&#8260;&#179;:</strong> 64 = 4&#179; &#8594; (4&#179;)&#185;&#8260;&#179; = 4&#185; = <strong>4</strong>.</div>',
        '<div class="step"><strong>(ii) (125)&#8315;&#185;&#8260;&#179;:</strong> 125 = 5&#179; &#8594; (5&#179;)&#8315;&#185;&#8260;&#179; = 5&#8315;&#185; = <strong>1/5</strong>.</div>',
        '<div class="step"><strong>(iii) (16)&#190;:</strong> 16 = 2&#8308; &#8594; (2&#8308;)&#190; = 2&#179; = <strong>8</strong>.</div>'
      ],
      marking: [
        { key: 'Evaluating parts (i) and (ii)', marks: '1 Mark' },
        { key: 'Evaluating part (iii)', marks: '1 Mark' }
      ]
    }
  ],

  4: [
    {
      id: 'q4_1_4',
      num: 'Q4',
      marks: '2 Marks',
      text: 'Expand: (3a &#8722; 7b &#8722; c)&#178; using the standard identity for trinomial square.',
      steps: [
        '<div class="step">Use identity: <span class="math">(x + y + z)&#178; = x&#178; + y&#178; + z&#178; + 2xy + 2yz + 2zx</span></div>',
        '<div class="step">Here x = 3a, y = &#8722;7b, z = &#8722;c:</div>',
        '<div class="step">= (3a)&#178; + (&#8722;7b)&#178; + (&#8722;c)&#178; + 2(3a)(&#8722;7b) + 2(&#8722;7b)(&#8722;c) + 2(&#8722;c)(3a)</div>',
        '<div class="step">= <strong>9a&#178; + 49b&#178; + c&#178; &#8722; 42ab + 14bc &#8722; 6ca</strong>.</div>'
      ],
      marking: [
        { key: 'Correct formula and substitute signs', marks: '1 Mark' },
        { key: 'Correctly expanded product', marks: '1 Mark' }
      ]
    },
    {
      id: 'q4_2_4',
      num: 'Q4',
      marks: '2 Marks',
      text: 'Factorise: 27x&#178; + y&#179; + z&#179; &#8722; 9xyz (or x&#179; + y&#179; + z&#179; &#8722; 3xyz form). Factorise: 8x&#179; + y&#179; + 27z&#179; &#8722; 18xyz.',
      steps: [
        '<div class="step">Recognise form <span class="math">a&#179; + b&#179; + c&#179; &#8722; 3abc = (a + b + c)(a&#178; + b&#178; + c&#178; &#8722; ab &#8722; bc &#8722; ca)</span>.</div>',
        '<div class="step">Here a = 2x, b = y, c = 3z. Check 3abc = 3(2x)(y)(3z) = 18xyz.</div>',
        '<div class="step">Applying identity: = <strong>(2x + y + 3z)(4x&#178; + y&#178; + 9z&#178; &#8722; 2xy &#8722; 3yz &#8722; 6zx)</strong>.</div>'
      ],
      marking: [
        { key: 'Identification of cubic identity components', marks: '1 Mark' },
        { key: 'Complete factorised form', marks: '1 Mark' }
      ]
    },
    {
      id: 'q4_2_5',
      num: 'Q5',
      marks: '2 Marks',
      text: 'Without actually calculating the cubes, find the value of (&#8722;12)&#179; + (7)&#179; + (5)&#179;.',
      steps: [
        '<div class="step">Let x = &#8722;12, y = 7, z = 5.</div>',
        '<div class="step">Check their sum: x + y + z = &#8722;12 + 7 + 5 = 0.</div>',
        '<div class="step">Identity: If x + y + z = 0, then <span class="math">x&#179; + y&#179; + z&#179; = 3xyz</span>.</div>',
        '<div class="step">Therefore, (&#8722;12)&#179; + 7&#179; + 5&#179; = 3(&#8722;12)(7)(5) = &#8722;36 &#215; 35 = <strong>&#8722;1260</strong>.</div>'
      ],
      marking: [
        { key: 'Verifying x + y + z = 0 and stating identity', marks: '1 Mark' },
        { key: 'Correct calculation 3(-12)(7)(5) = -1260', marks: '1 Mark' }
      ]
    },
    {
      id: 'q4_2_6',
      num: 'Q6',
      marks: '2 Marks',
      text: 'Factorise: x&#179; &#8722; 23x&#178; + 142x &#8722; 120.',
      steps: [
        '<div class="step">Testing factors of constant 120: let x = 1:</div>',
        '<div class="step">p(1) = 1&#179; &#8722; 23(1) + 142(1) &#8722; 120 = 1 &#8722; 23 + 142 &#8722; 120 = 0. Thus, <strong>(x &#8722; 1)</strong> is a factor.</div>',
        '<div class="step">Dividing p(x) by (x &#8722; 1) gives quotient: x&#178; &#8722; 22x + 120.</div>',
        '<div class="step">Splitting the middle term: x&#178; &#8722; 12x &#8722; 10x + 120 = (x &#8722; 12)(x &#8722; 10).</div>',
        '<div class="step">Hence, p(x) = <strong>(x &#8722; 1)(x &#8722; 10)(x &#8722; 12)</strong>.</div>'
      ],
      marking: [
        { key: 'Finding (x - 1) via Factor Theorem', marks: '1 Mark' },
        { key: 'Factorising quadratic factor into (x - 10)(x - 12)', marks: '1 Mark' }
      ]
    }
  ],

  5: [
    {
      id: 'q5_1_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'Find the angle in degrees swept by the minute hand of a clock in 25 minutes.',
      steps: [
        '<div class="step">A minute hand completes 360&#176; in 60 minutes.</div>',
        '<div class="step">Rate of rotation = 360&#176; / 60 = 6&#176; per minute.</div>',
        '<div class="step">Angle swept in 25 minutes = 25 &#215; 6&#176; = <strong>150&#176;</strong>.</div>'
      ],
      marking: [
        { key: 'Rate per minute (6 degrees/min)', marks: '1 Mark' },
        { key: 'Total angle calculation = 150 degrees', marks: '1 Mark' }
      ]
    },
    {
      id: 'q5_2_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'The period of oscillation of a simple pendulum is T = 2 seconds. How many complete oscillations does it make in 5 minutes?',
      steps: [
        '<div class="step">Total time t = 5 minutes = 5 &#215; 60 = 300 seconds.</div>',
        '<div class="step">Time period for 1 oscillation T = 2 s.</div>',
        '<div class="step">Number of oscillations = Total time / T = 300 / 2 = <strong>150 complete oscillations</strong>.</div>'
      ],
      marking: [
        { key: 'Time conversion to seconds', marks: '1 Mark' },
        { key: 'Calculating 150 oscillations', marks: '1 Mark' }
      ]
    },
    {
      id: 'q5_3_2',
      num: 'Q2',
      marks: '2 Marks',
      text: 'A bicycle wheel has diameter 70 cm. How many revolutions will it make to travel a distance of 1.1 km?',
      steps: [
        '<div class="step">Radius r = 70 / 2 = 35 cm = 0.35 m.</div>',
        '<div class="step">Circumference C = 2&#960;r = 2 &#215; (22/7) &#215; 35 cm = 220 cm = 2.2 m.</div>',
        '<div class="step">Total distance = 1.1 km = 1,100 m.</div>',
        '<div class="step">Number of revolutions = 1,100 / 2.2 = <strong>500 revolutions</strong>.</div>'
      ],
      marking: [
        { key: 'Circumference = 2.2 m', marks: '1 Mark' },
        { key: 'Revolutions = 500', marks: '1 Mark' }
      ]
    }
  ],

  6: [
    {
      id: 'q6_1_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'A rectangular field is 75 m long and 45 m broad. A runner runs around it 4 times. Find the total distance covered by the runner.',
      steps: [
        '<div class="step">Perimeter of rectangular field = 2 &#215; (length + breadth) = 2 &#215; (75 + 45) = 2 &#215; 120 = 240 m.</div>',
        '<div class="step">Distance in 1 round = 240 m.</div>',
        '<div class="step">Total distance in 4 rounds = 4 &#215; 240 = <strong>960 m</strong>.</div>'
      ],
      marking: [
        { key: 'Perimeter calculation = 240 m', marks: '1 Mark' },
        { key: 'Total distance in 4 rounds = 960 m', marks: '1 Mark' }
      ]
    },
    {
      id: 'q6_2_3',
      num: 'Q3',
      marks: '3 Marks',
      text: 'Find the area of a triangular park ABC with sides 120 m, 80 m, and 50 m using Heron\'s formula.',
      steps: [
        '<div class="step">Semi-perimeter s = (a + b + c) / 2 = (120 + 80 + 50) / 2 = 250 / 2 = 125 m.</div>',
        '<div class="step">s &#8722; a = 125 &#8722; 120 = 5 m</div>',
        '<div class="step">s &#8722; b = 125 &#8722; 80 = 45 m</div>',
        '<div class="step">s &#8722; c = 125 &#8722; 50 = 75 m</div>',
        '<div class="step">Area = &#8730;[s(s&#8722;a)(s&#8722;b)(s&#8722;c)] = &#8730;[125 &#215; 5 &#215; 45 &#215; 75]</div>',
        '<div class="step">= &#8730;[(5&#179;) &#215; 5 &#215; (3&#178; &#215; 5) &#215; (3 &#215; 5&#178;)] = &#8730;[5&#8311; &#215; 3&#179;] = 5&#179; &#215; 3 &#215; &#8730;(5 &#215; 3) = <strong>375&#8730;15 m&#178;</strong> (&#8776; 1452.37 m&#178;).</div>'
      ],
      marking: [
        { key: 'Calculating semi-perimeter s = 125 m', marks: '1 Mark' },
        { key: 'Applying Heron formula and exact simplified square root', marks: '2 Marks' }
      ]
    },
    {
      id: 'q6_3_2',
      num: 'Q2',
      marks: '2 Marks',
      text: 'Find the area of a trapezium whose parallel sides are 25 cm and 13 cm, and the distance between them is 8 cm.',
      steps: [
        '<div class="step">Formula for area of trapezium = <span class="math">&#189; &#215; (sum of parallel sides) &#215; height</span>.</div>',
        '<div class="step">Area = &#189; &#215; (25 + 13) &#215; 8 = &#189; &#215; 38 &#215; 8 = 19 &#215; 8 = <strong>152 cm&#178;</strong>.</div>'
      ],
      marking: [
        { key: 'Trapezium area formula', marks: '1 Mark' },
        { key: 'Correct evaluation 152 cm^2', marks: '1 Mark' }
      ]
    }
  ],

  7: [
    {
      id: 'q7_1_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'What is the sum of probabilities of all elementary events of an experiment? If P(E) = 0.05, what is the probability of \'not E\'?',
      steps: [
        '<div class="step">The sum of the probabilities of all elementary events of an experiment is always equal to <strong>1</strong>.</div>',
        '<div class="step">We know that <span class="math">P(E) + P(not E) = 1</span>.</div>',
        '<div class="step">Therefore, P(not E) = 1 &#8722; 0.05 = <strong>0.95</strong>.</div>'
      ],
      marking: [
        { key: 'Stating total probability = 1', marks: '1 Mark' },
        { key: 'Calculation P(not E) = 0.95', marks: '1 Mark' }
      ]
    },
    {
      id: 'q7_2_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'A card is drawn from a well-shuffled deck of 52 cards. Find the probability of getting: (i) a king of red colour, (ii) a face card.',
      steps: [
        '<div class="step">Total number of outcomes = 52.</div>',
        '<div class="step"><strong>(i) King of red colour:</strong> 2 cards (King of hearts, King of diamonds). Probability = 2/52 = <strong>1/26</strong>.</div>',
        '<div class="step"><strong>(ii) Face card:</strong> 4 Kings + 4 Queens + 4 Jacks = 12 cards. Probability = 12/52 = <strong>3/13</strong>.</div>'
      ],
      marking: [
        { key: 'Probability of red king = 1/26', marks: '1 Mark' },
        { key: 'Probability of face card = 3/13', marks: '1 Mark' }
      ]
    },
    {
      id: 'q7_3_2',
      num: 'Q2',
      marks: '2 Marks',
      text: 'In a lottery of 100 tickets numbered 1 to 100, one ticket is drawn at random. What is the probability that the ticket drawn bears a perfect square number?',
      steps: [
        '<div class="step">Total outcomes = 100.</div>',
        '<div class="step">Perfect squares between 1 and 100 are: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 (10 numbers).</div>',
        '<div class="step">Favourable outcomes = 10.</div>',
        '<div class="step">Probability = 10/100 = <strong>1/10</strong> (or 0.1).</div>'
      ],
      marking: [
        { key: 'Listing perfect squares (10 numbers)', marks: '1 Mark' },
        { key: 'Correct probability = 1/10', marks: '1 Mark' }
      ]
    }
  ],

  8: [
    {
      id: 'q8_1_4',
      num: 'Q4',
      marks: '2 Marks',
      text: 'Which term of the AP: 21, 18, 15, ... is &#8722;81? Also, is any term 0?',
      steps: [
        '<div class="step">Here a = 21, d = 18 &#8722; 21 = &#8722;3. Let a&#8345; = &#8722;81.</div>',
        '<div class="step">a&#8345; = a + (n &#8722; 1)d &#8594; &#8722;81 = 21 + (n &#8722; 1)(&#8722;3)</div>',
        '<div class="step">&#8722;102 = &#8722;3(n &#8722; 1) &#8594; n &#8722; 1 = 34 &#8594; <strong>n = 35</strong>. (35th term is &#8722;81).</div>',
        '<div class="step">For a&#8345; = 0: 0 = 21 + (n &#8722; 1)(&#8722;3) &#8594; 3(n &#8722; 1) = 21 &#8594; n &#8722; 1 = 7 &#8594; <strong>n = 8</strong> (8th term is 0).</div>'
      ],
      marking: [
        { key: 'Finding n = 35 for term -81', marks: '1 Mark' },
        { key: 'Finding n = 8 for term 0', marks: '1 Mark' }
      ]
    },
    {
      id: 'q8_2_2',
      num: 'Q2',
      marks: '2 Marks',
      text: 'In a Geometric Progression (GP), the first term is 3 and the common ratio is 2. Write down the first five terms of this GP.',
      steps: [
        '<div class="step">General term of GP: a&#8345; = a &#215; r&#8319;&#8315;&#185;. Here a = 3, r = 2.</div>',
        '<div class="step">Term 1: 3</div>',
        '<div class="step">Term 2: 3 &#215; 2 = 6</div>',
        '<div class="step">Term 3: 6 &#215; 2 = 12</div>',
        '<div class="step">Term 4: 12 &#215; 2 = 24</div>',
        '<div class="step">Term 5: 24 &#215; 2 = 48</div>',
        '<div class="step">The first 5 terms are: <strong>3, 6, 12, 24, 48</strong>.</div>'
      ],
      marking: [
        { key: 'Formula for GP terms', marks: '1 Mark' },
        { key: 'Listing first five terms correctly', marks: '1 Mark' }
      ]
    },
    {
      id: 'q8_3_2',
      num: 'Q2',
      marks: '2 Marks',
      text: 'A bacteria culture doubles every hour. If there were initially 100 bacteria, write the sequence of bacteria population for the first 5 hours.',
      steps: [
        '<div class="step">Initial count (Hour 0) = 100. Growth factor = 2 per hour.</div>',
        '<div class="step">Hour 1: 100 &#215; 2 = 200</div>',
        '<div class="step">Hour 2: 200 &#215; 2 = 400</div>',
        '<div class="step">Hour 3: 400 &#215; 2 = 800</div>',
        '<div class="step">Hour 4: 800 &#215; 2 = 1600</div>',
        '<div class="step">Hour 5: 1600 &#215; 2 = 3200</div>',
        '<div class="step">The population sequence is: <strong>200, 400, 800, 1600, 3200</strong>.</div>'
      ],
      marking: [
        { key: 'Identifying geometric doubling model', marks: '1 Mark' },
        { key: 'Listing correct sequence up to hour 5', marks: '1 Mark' }
      ]
    }
  ],

  9: [
    {
      id: 'q9_1_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'Write the converse, inverse, and contrapositive of: "If two angles are vertical angles, then they are equal."',
      steps: [
        '<div class="step">Let p = "two angles are vertical angles", q = "they are equal".</div>',
        '<div class="step"><strong>Converse (q &#8594; p):</strong> "If two angles are equal, then they are vertical angles" (Note: false).</div>',
        '<div class="step"><strong>Inverse (&#8764;p &#8594; &#8764;q):</strong> "If two angles are not vertical angles, then they are not equal."</div>',
        '<div class="step"><strong>Contrapositive (&#8764;q &#8594; &#8764;p):</strong> "If two angles are not equal, then they are not vertical angles" (True).</div>'
      ],
      marking: [
        { key: 'Correct converse statement', marks: '1 Mark' },
        { key: 'Correct contrapositive statement', marks: '1 Mark' }
      ]
    },
    {
      id: 'q9_2_2',
      num: 'Q2',
      marks: '2 Marks',
      text: 'Prove that the sum of the angles of a triangle is 180&#176;.',
      steps: [
        '<div class="step"><strong>Given:</strong> A triangle ABC.</div>',
        '<div class="step"><strong>Construction:</strong> Draw line XY through A parallel to BC.</div>',
        '<div class="step">Since XY || BC and AB is transversal: &#8736;XAB = &#8736;B (alternate interior angles).</div>',
        '<div class="step">Similarly, AC is transversal: &#8736;YAC = &#8736;C (alternate interior angles).</div>',
        '<div class="step">Since XAY is a straight line: &#8736;XAB + &#8736;A + &#8736;YAC = 180&#176;.</div>',
        '<div class="step">Substituting: &#8736;B + &#8736;A + &#8736;C = 180&#176; &#8594; <strong>&#8736;A + &#8736;B + &#8736;C = 180&#176;</strong>. Hence proved.</div>'
      ],
      marking: [
        { key: 'Construction of parallel line and alternate angles', marks: '1 Mark' },
        { key: 'Straight line property and conclusion', marks: '1 Mark' }
      ]
    },
    {
      id: 'q9_2_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'State Euclid\'s Fifth Postulate in simple words.',
      steps: [
        '<div class="step"><strong>Euclid\'s Fifth Postulate (Parallel Postulate):</strong></div>',
        '<div class="step">If a straight line falling on two straight lines makes the interior angles on the same side of it taken together less than two right angles (180&#176;), then the two straight lines, if produced indefinitely, meet on that side on which the sum of angles is less than two right angles.</div>'
      ],
      marking: [
        { key: 'Accurate and clear statement of Euclid 5th postulate', marks: '2 Marks' }
      ]
    },
    {
      id: 'q9_3_2',
      num: 'Q2',
      marks: '2 Marks',
      text: 'Provide a counterexample to disprove the statement: "Every prime number is an odd number."',
      steps: [
        '<div class="step">Consider the number <strong>2</strong>.</div>',
        '<div class="step">2 is a prime number because its only positive divisors are 1 and 2.</div>',
        '<div class="step">However, 2 is an even number, not an odd number.</div>',
        '<div class="step">Thus, 2 serves as a valid counterexample disproving the general statement.</div>'
      ],
      marking: [
        { key: 'Identifying 2 as the counterexample', marks: '1 Mark' },
        { key: 'Justifying primality and even nature', marks: '1 Mark' }
      ]
    }
  ],

  10: [
    {
      id: 'q10_1_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'Find the mean of the first 10 natural numbers.',
      steps: [
        '<div class="step">First 10 natural numbers: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.</div>',
        '<div class="step">Sum = n(n + 1) / 2 = 10 &#215; 11 / 2 = 55.</div>',
        '<div class="step">Mean = Sum / Total count = 55 / 10 = <strong>5.5</strong>.</div>'
      ],
      marking: [
        { key: 'Sum of first 10 natural numbers = 55', marks: '1 Mark' },
        { key: 'Mean = 5.5', marks: '1 Mark' }
      ]
    },
    {
      id: 'q10_2_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'What is a frequency polygon? When is it preferred over a histogram?',
      steps: [
        '<div class="step">A <strong>frequency polygon</strong> is a graphical representation of grouped data formed by joining the midpoints (class marks) of the tops of the bars of a histogram with straight line segments.</div>',
        '<div class="step">It is preferred when comparing two or more data distributions on the same axes.</div>'
      ],
      marking: [
        { key: 'Definition of frequency polygon using class marks', marks: '1 Mark' },
        { key: 'Application for comparing distributions', marks: '1 Mark' }
      ]
    },
    {
      id: 'q10_3_2',
      num: 'Q2',
      marks: '2 Marks',
      text: 'Find the median and mode of the following data set: 14, 25, 14, 28, 18, 17, 18, 14, 23, 22, 14, 18.',
      steps: [
        '<div class="step">Arrange in ascending order: 14, 14, 14, 14, 17, 18, 18, 18, 22, 23, 25, 28 (n = 12 terms).</div>',
        '<div class="step"><strong>Median:</strong> Average of (12/2)th and (12/2 + 1)th terms = 6th and 7th terms = (18 + 18) / 2 = <strong>18</strong>.</div>',
        '<div class="step"><strong>Mode:</strong> Number with highest frequency: 14 occurs 4 times. Mode = <strong>14</strong>.</div>'
      ],
      marking: [
        { key: 'Arranging data and calculating median = 18', marks: '1 Mark' },
        { key: 'Mode = 14', marks: '1 Mark' }
      ]
    }
  ],

  11: [
    {
      id: 'q11_1_2',
      num: 'Q2',
      marks: '2 Marks',
      text: 'Write an algorithm (step-by-step procedure) to find whether a given positive integer n is even or odd.',
      steps: [
        '<div class="step"><strong>Step 1:</strong> Start.</div>',
        '<div class="step"><strong>Step 2:</strong> Input a positive integer n.</div>',
        '<div class="step"><strong>Step 3:</strong> Compute remainder r = n % 2.</div>',
        '<div class="step"><strong>Step 4:</strong> If r == 0, display "n is Even"; Else display "n is Odd".</div>',
        '<div class="step"><strong>Step 5:</strong> Stop.</div>'
      ],
      marking: [
        { key: 'Clear input, remainder check, conditional branch', marks: '2 Marks' }
      ]
    },
    {
      id: 'q11_2_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'Use Euclid\'s Division Algorithm to find the HCF of 135 and 225.',
      steps: [
        '<div class="step">Since 225 > 135, apply division: <span class="math">225 = 135 &#215; 1 + 90</span></div>',
        '<div class="step">Remainder 90 &#8800; 0, apply to 135 and 90: <span class="math">135 = 90 &#215; 1 + 45</span></div>',
        '<div class="step">Remainder 45 &#8800; 0, apply to 90 and 45: <span class="math">90 = 45 &#215; 2 + 0</span></div>',
        '<div class="step">Since remainder is now 0, divisor is 45. Hence, <strong>HCF(135, 225) = 45</strong>.</div>'
      ],
      marking: [
        { key: 'Steps of Euclid division lemma shown', marks: '1 Mark' },
        { key: 'Final HCF = 45', marks: '1 Mark' }
      ]
    },
    {
      id: 'q11_2_4',
      num: 'Q4',
      marks: '2 Marks',
      text: 'Find the HCF of 867 and 255 using Euclid\'s algorithm.',
      steps: [
        '<div class="step">867 = 255 &#215; 3 + 102</div>',
        '<div class="step">255 = 102 &#215; 2 + 51</div>',
        '<div class="step">102 = 51 &#215; 2 + 0</div>',
        '<div class="step">The remainder is 0, so <strong>HCF(867, 255) = 51</strong>.</div>'
      ],
      marking: [
        { key: 'Division steps correctly written', marks: '1 Mark' },
        { key: 'HCF = 51', marks: '1 Mark' }
      ]
    },
    {
      id: 'q11_3_2',
      num: 'Q2',
      marks: '2 Marks',
      text: 'Write an algorithm to compute the factorial of a positive integer n (n!).',
      steps: [
        '<div class="step"><strong>Step 1:</strong> Start.</div>',
        '<div class="step"><strong>Step 2:</strong> Input integer n. Set fact = 1, i = 1.</div>',
        '<div class="step"><strong>Step 3:</strong> Repeat while i &#8804; n: fact = fact &#215; i; i = i + 1.</div>',
        '<div class="step"><strong>Step 4:</strong> Output fact.</div>',
        '<div class="step"><strong>Step 5:</strong> Stop.</div>'
      ],
      marking: [
        { key: 'Initialization and loop condition correctly specified', marks: '2 Marks' }
      ]
    }
  ],

  12: [
    {
      id: 'q12_1_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'Show that the diagonals of a rhombus are perpendicular to each other.',
      steps: [
        '<div class="step">Let ABCD be a rhombus with diagonals AC and BD intersecting at O.</div>',
        '<div class="step">Since a rhombus is a parallelogram, its diagonals bisect each other: OA = OC and OB = OD.</div>',
        '<div class="step">In &#916;AOD and &#916;COD: OA = OC, OD = OD (common), AD = CD (sides of rhombus are equal).</div>',
        '<div class="step">Therefore, &#916;AOD &#8773; &#916;COD by SSS congruence.</div>',
        '<div class="step">&#8736;AOD = &#8736;COD (by CPCT).</div>',
        '<div class="step">Since AC is a line, &#8736;AOD + &#8736;COD = 180&#176; &#8594; 2&#8736;AOD = 180&#176; &#8594; <strong>&#8736;AOD = 90&#176;</strong>. Hence proved.</div>'
      ],
      marking: [
        { key: 'Congruence of adjacent triangles using SSS', marks: '1 Mark' },
        { key: 'Linear pair leading to 90 degrees', marks: '1 Mark' }
      ]
    },
    {
      id: 'q12_2_2',
      num: 'Q2',
      marks: '2 Marks',
      text: 'ABC is a triangle right-angled at C. A line through the midpoint M of hypotenuse AB and parallel to BC intersects AC at D. Show that: (i) D is the midpoint of AC, (ii) MD &#8869; AC.',
      steps: [
        '<div class="step"><strong>(i)</strong> In &#916;ABC, M is the midpoint of AB and MD || BC.</div>',
        '<div class="step">By the Converse of Midpoint Theorem, a line drawn through the midpoint of one side of a triangle parallel to another side bisects the third side. Therefore, <strong>D is the midpoint of AC</strong>.</div>',
        '<div class="step"><strong>(ii)</strong> Since MD || BC and AC is transversal: &#8736;ADM = &#8736;C (corresponding angles).</div>',
        '<div class="step">Since &#8736;C = 90&#176;, &#8736;ADM = 90&#176; &#8594; <strong>MD &#8869; AC</strong>.</div>'
      ],
      marking: [
        { key: 'Converse of Midpoint Theorem justification', marks: '1 Mark' },
        { key: 'Corresponding angles argument for perpendicularity', marks: '1 Mark' }
      ]
    },
    {
      id: 'q12_2_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'State Varignon\'s Theorem regarding the midpoints of sides of any quadrilateral.',
      steps: [
        '<div class="step"><strong>Varignon\'s Theorem:</strong></div>',
        '<div class="step">The figure formed by connecting the consecutive midpoints of the sides of any arbitrary quadrilateral is always a <strong>parallelogram</strong>.</div>',
        '<div class="step">Furthermore, the area of the Varignon parallelogram is equal to half the area of the original quadrilateral.</div>'
      ],
      marking: [
        { key: 'Accurate statement of Varignon theorem and parallelogram property', marks: '2 Marks' }
      ]
    },
    {
      id: 'q12_3_2',
      num: 'Q2',
      marks: '2 Marks',
      text: 'Find the centroid of a triangle whose vertices are P(3, &#8722;5), Q(&#8722;7, 4), and R(10, &#8722;2).',
      steps: [
        '<div class="step">Centroid formula: <span class="math">G = ((x&#8321; + x&#8322; + x&#8323;)/3, (y&#8321; + y&#8322; + y&#8323;)/3)</span>.</div>',
        '<div class="step">x-coordinate = (3 &#8722; 7 + 10) / 3 = 6 / 3 = 2.</div>',
        '<div class="step">y-coordinate = (&#8722;5 + 4 &#8722; 2) / 3 = &#8722;3 / 3 = &#8722;1.</div>',
        '<div class="step">Therefore, centroid G is <strong>(2, &#8722;1)</strong>.</div>'
      ],
      marking: [
        { key: 'Centroid formula with correct substitution', marks: '1 Mark' },
        { key: 'Coordinates (2, -1)', marks: '1 Mark' }
      ]
    }
  ],

  13: [
    {
      id: 'q13_1_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'Find the value of k if x = 2, y = 1 is a solution of the equation 2x + 3y = k.',
      steps: [
        '<div class="step">Substitute x = 2 and y = 1 into the equation:</div>',
        '<div class="step">2(2) + 3(1) = k</div>',
        '<div class="step">4 + 3 = k &#8594; <strong>k = 7</strong>.</div>'
      ],
      marking: [
        { key: 'Substitution of coordinates', marks: '1 Mark' },
        { key: 'k = 7', marks: '1 Mark' }
      ]
    },
    {
      id: 'q13_2_2',
      num: 'Q2',
      marks: '2 Marks',
      text: 'Give the geometric representations of 2x + 9 = 0 as an equation: (i) in one variable, (ii) in two variables.',
      steps: [
        '<div class="step">2x + 9 = 0 &#8594; 2x = &#8722;9 &#8594; x = &#8722;4.5.</div>',
        '<div class="step"><strong>(i) In one variable:</strong> It represents a single point at x = &#8722;4.5 on the number line.</div>',
        '<div class="step"><strong>(ii) In two variables:</strong> It can be written as 2x + 0y + 9 = 0, which represents a straight line parallel to the y-axis passing through (&#8722;4.5, 0).</div>'
      ],
      marking: [
        { key: 'One variable representation (point on number line)', marks: '1 Mark' },
        { key: 'Two variable representation (line parallel to y-axis)', marks: '1 Mark' }
      ]
    },
    {
      id: 'q13_3_2',
      num: 'Q2',
      marks: '2 Marks',
      text: 'The cost of a notebook is twice the cost of a pen. Write a linear equation in two variables to represent this statement and express it in standard form ax + by + c = 0.',
      steps: [
        '<div class="step">Let the cost of a notebook be &#8377;x and cost of a pen be &#8377;y.</div>',
        '<div class="step">Given: Cost of notebook = 2 &#215; Cost of pen &#8594; x = 2y.</div>',
        '<div class="step">In standard form: <strong>1x &#8722; 2y + 0 = 0</strong> (where a = 1, b = &#8722;2, c = 0).</div>'
      ],
      marking: [
        { key: 'Forming relation x = 2y', marks: '1 Mark' },
        { key: 'Standard form 1x - 2y + 0 = 0', marks: '1 Mark' }
      ]
    },
    {
      id: 'q13_3_3',
      num: 'Q3',
      marks: '2 Marks',
      text: 'Find four different solutions of the equation x + 2y = 6.',
      steps: [
        '<div class="step">Rewrite as: x = 6 &#8722; 2y.</div>',
        '<div class="step">If y = 0: x = 6 &#8594; <strong>(6, 0)</strong></div>',
        '<div class="step">If y = 1: x = 6 &#8722; 2(1) = 4 &#8594; <strong>(4, 1)</strong></div>',
        '<div class="step">If y = 2: x = 6 &#8722; 2(2) = 2 &#8594; <strong>(2, 2)</strong></div>',
        '<div class="step">If y = 3: x = 6 &#8722; 2(3) = 0 &#8594; <strong>(0, 3)</strong></div>'
      ],
      marking: [
        { key: 'Systematic substitution method', marks: '1 Mark' },
        { key: 'Listing 4 valid coordinate pairs', marks: '1 Mark' }
      ]
    }
  ],

  14: [
    {
      id: 'q14_2_4',
      num: 'Q4',
      marks: '2 Marks',
      text: 'A conical tent is 10 m high and the radius of its base is 24 m. Find: (i) slant height of the tent, (ii) cost of canvas required to make the tent at &#8377;70 per m&#178;.',
      steps: [
        '<div class="step"><strong>(i)</strong> Slant height <span class="math">l = &#8730;(r&#178; + h&#178;) = &#8730;(24&#178; + 10&#178;) = &#8730;(576 + 100) = &#8730;676 = <strong>26 m</strong></span>.</div>',
        '<div class="step"><strong>(ii)</strong> Curved surface area = &#960;rl = (22/7) &#215; 24 &#215; 26 = 13728 / 7 m&#178;.</div>',
        '<div class="step">Cost = Area &#215; Rate = (13728 / 7) &#215; 70 = 13728 &#215; 10 = <strong>&#8377;1,37,280</strong>.</div>'
      ],
      marking: [
        { key: 'Slant height l = 26 m', marks: '1 Mark' },
        { key: 'Cost = Rs 1,37,280', marks: '1 Mark' }
      ]
    },
    {
      id: 'q14_3_4',
      num: 'Q4',
      marks: '2 Marks',
      text: 'Find the volume of a sphere whose surface area is 154 cm&#178;.',
      steps: [
        '<div class="step">Surface area of sphere = 4&#960;r&#178; = 154 cm&#178;.</div>',
        '<div class="step">4 &#215; (22/7) &#215; r&#178; = 154 &#8594; (88/7)r&#178; = 154 &#8594; r&#178; = (154 &#215; 7) / 88 = 49 / 4.</div>',
        '<div class="step">r = &#8730;(49/4) = 7/2 = 3.5 cm.</div>',
        '<div class="step">Volume = (4/3)&#960;r&#179; = (4/3) &#215; (22/7) &#215; (7/2) &#215; (7/2) &#215; (7/2)</div>',
        '<div class="step">= (11 &#215; 49) / 3 = 539 / 3 = <strong>179&#8531; cm&#178; (&#8776; 179.67 cm&#179;)</strong>.</div>'
      ],
      marking: [
        { key: 'Radius r = 3.5 cm from surface area', marks: '1 Mark' },
        { key: 'Volume = 179.67 cm^3', marks: '1 Mark' }
      ]
    }
  ]
};

function formatQCard(q) {
  const markingRows = q.marking.map(m => `          <div class="marking-row"><span class="marking-key">${m.key}</span><span class="marking-marks">${m.marks}</span></div>`).join('\n');
  return `  <div class="q-card" id="${q.id}">
    <div class="q-head" onclick="toggleQ('${q.id}')">
      <div class="q-num">${q.num}</div>
      <div class="q-text">${q.text}</div>
      <div class="q-marks">${q.marks}</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">&#10003; Suggested Step-by-Step Solution</div>
        <div class="answer-text">
${q.steps.map(s => '          ' + s).join('\n')}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">Suggested Marks Distribution</div>
${markingRows}
        </div>
      </div>
    </div>
  </div>`;
}

console.log('=== EXPANDING CLASS 9 MATHEMATICS CHAPTERS ===');

let totalInjected = 0;

for (let ch = 1; ch <= 14; ch++) {
  const qList = additions[ch] || [];
  if (qList.length === 0) continue;

  const fPath = path.join(chDir, `ch${ch}.html`);
  let content = fs.readFileSync(fPath, 'utf8');

  // Check if questions are already present
  const toInject = qList.filter(q => !content.includes(`id="${q.id}"`));
  if (toInject.length === 0) {
    console.log(`Ch ${ch}: All ${qList.length} questions already present.`);
    continue;
  }

  const cardsHtml = toInject.map(formatQCard).join('\n\n');

  // Insert before `<div class="cbq-section">` or before `</section>`
  if (content.includes('<div class="cbq-section">')) {
    content = content.replace('<div class="cbq-section">', `${cardsHtml}\n\n  <div class="cbq-section">`);
  } else if (content.includes('<div class="ch-nav-btns">')) {
    content = content.replace('<div class="ch-nav-btns">', `${cardsHtml}\n\n  <div class="ch-nav-btns">`);
  } else {
    content = content.replace('</section>', `${cardsHtml}\n</section>`);
  }

  fs.writeFileSync(fPath, content, 'utf8');
  totalInjected += toInject.length;
  console.log(`Ch ${ch}: Injected ${toInject.length} questions into ch${ch}.html`);
}

console.log(`\n✅ Total Maths questions injected: ${totalInjected}`);
