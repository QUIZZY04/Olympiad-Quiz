// scripts/builders/expand-c8-maths.js
// Injects the 80 missing physical NCERT textbook questions into chapters-c8m/ch1.html - ch14.html
// Then triggers build-c8m-gp-hub.js to synchronize chapters-data.js and ncert-solutions-class-8-maths.html

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..');
const CH_DIR = path.join(ROOT, 'chapters-c8m');

const MATHS_ADDITIONS = {
  1: [ // Ch 1: A Square and A Cube (Needs 5 Qs: Q6 to Q10)
    {
      num: 6, marks: '3 Marks',
      text: 'Find the square root of 7056 using the prime factorisation method.',
      steps: [
        'Prime factorisation of 7056: 7056 = 2 × 2 × 2 × 2 × 3 × 3 × 7 × 7.',
        'Pairing the factors: (2 × 2) × (2 × 2) × (3 × 3) × (7 × 7).',
        'Taking one prime factor from each pair: √7056 = 2 × 2 × 3 × 7 = <strong>84</strong>.'
      ],
      rubric: [
        ['Prime factorisation of 7056', '1.5 Marks'],
        ['Pairing factors & evaluating √7056 = 84', '1.5 Marks']
      ]
    },
    {
      num: 7, marks: '3 Marks',
      text: 'Find the square root of 72.25 by the long division method.',
      steps: [
        'Place bars over pairs of digits starting from the decimal point: 72 . 25.',
        'Find the largest number whose square is ≤ 72, which is 8 (8² = 64). Remainder = 72 − 64 = 8.',
        'Bring down the next pair 25 after placing a decimal point in quotient (8.). Double divisor: 8 × 2 = 16.',
        'Find digit d such that 16d × d = 825. For d = 5: 165 × 5 = 825. Remainder = 0. Therefore, √72.25 = <strong>8.5</strong>.'
      ],
      rubric: [
        ['Setting up long division with bars', '1 Mark'],
        ['Finding integer part 8 and remainder 8', '1 Mark'],
        ['Determining decimal digit 5 to get √72.25 = 8.5', '1 Mark']
      ]
    },
    {
      num: 8, marks: '3 Marks',
      text: 'Find the smallest square number that is divisible by each of the numbers 4, 9, and 10.',
      steps: [
        'First find LCM of 4, 9, and 10. 4 = 2², 9 = 3², 10 = 2 × 5.',
        'LCM(4, 9, 10) = 2² × 3² × 5 = 4 × 9 × 5 = 180.',
        'Prime factorisation of 180 = 2 × 2 × 3 × 3 × 5. Here prime factor 5 is not paired.',
        'To make it a perfect square, multiply 180 by 5: Smallest square number = 180 × 5 = <strong>900</strong>.'
      ],
      rubric: [
        ['Finding LCM(4, 9, 10) = 180', '1.5 Marks'],
        ['Identifying unpaired factor 5 and multiplying: 900', '1.5 Marks']
      ]
    },
    {
      num: 9, marks: '3 Marks',
      text: 'Is 53240 a perfect cube? If not, find the smallest natural number by which 53240 must be divided so that the quotient is a perfect cube.',
      steps: [
        'Prime factorisation of 53240: 53240 = 2 × 2 × 2 × 11 × 11 × 11 × 5 = 2³ × 11³ × 5.',
        'The prime factor 5 does not appear in a group of three.',
        'Therefore, 53240 is not a perfect cube. To make the quotient a perfect cube, divide by <strong>5</strong>.',
        'Quotient = 53240 ÷ 5 = 10648 = 2³ × 11³ = (2 × 11)³ = 22³, which is a perfect cube.'
      ],
      rubric: [
        ['Prime factorisation showing 2³ × 11³ × 5', '1.5 Marks'],
        ['Concluding smallest divisor is 5 and quotient 10648 = 22³', '1.5 Marks']
      ]
    },
    {
      num: 10, marks: '3 Marks',
      text: 'Find the cube root of 13824 by prime factorisation method.',
      steps: [
        'Prime factorisation of 13824: 13824 = 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 3 × 3 × 3 = 2⁹ × 3³.',
        'Grouping in triplets: (2 × 2 × 2) × (2 × 2 × 2) × (2 × 2 × 2) × (3 × 3 × 3).',
        'Taking one factor from each triplet: ∛13824 = 2 × 2 × 2 × 3 = <strong>24</strong>.'
      ],
      rubric: [
        ['Prime factorisation into triplets: 2³ × 2³ × 2³ × 3³', '1.5 Marks'],
        ['Multiplying 2 × 2 × 2 × 3 = 24', '1.5 Marks']
      ]
    }
  ],

  2: [ // Ch 2: Power Play (Needs 5 Qs: Q4 to Q8)
    {
      num: 4, marks: '3 Marks',
      text: 'Express the following numbers in standard scientific notation:<br>(i) 0.0000000000085<br>(ii) 6020000000000000<br>(iii) 0.000000000942',
      steps: [
        '(i) 0.0000000000085: Moving decimal 12 places to the right gives <strong>8.5 × 10⁻¹²</strong>.',
        '(ii) 6020000000000000: Moving decimal 15 places to the left gives <strong>6.02 × 10¹⁵</strong>.',
        '(iii) 0.000000000942: Moving decimal 10 places to the right gives <strong>9.42 × 10⁻¹⁰</strong>.'
      ],
      rubric: [
        ['Part (i) correctly written as 8.5 × 10⁻¹²', '1 Mark'],
        ['Part (ii) correctly written as 6.02 × 10¹⁵', '1 Mark'],
        ['Part (iii) correctly written as 9.42 × 10⁻¹⁰', '1 Mark']
      ]
    },
    {
      num: 5, marks: '3 Marks',
      text: 'Express the following numbers in usual decimal form:<br>(i) 3.02 × 10⁻⁶<br>(ii) 4.5 × 10⁴<br>(iii) 3 × 10⁻⁸',
      steps: [
        '(i) 3.02 × 10⁻⁶ = <strong>0.00000302</strong> (shift decimal 6 places left).',
        '(ii) 4.5 × 10⁴ = <strong>45,000</strong> (shift decimal 4 places right).',
        '(iii) 3 × 10⁻⁸ = <strong>0.00000003</strong> (shift decimal 8 places left).'
      ],
      rubric: [
        ['Part (i) = 0.00000302', '1 Mark'],
        ['Part (ii) = 45000', '1 Mark'],
        ['Part (iii) = 0.00000003', '1 Mark']
      ]
    },
    {
      num: 6, marks: '2 Marks',
      text: 'Find the value of m for which 5ᵐ ÷ 5⁻³ = 5⁵.',
      steps: [
        'By exponent quotient law: aᵐ ÷ aⁿ = aᵐ⁻ⁿ.',
        '5ᵐ ÷ 5⁻³ = 5ᵐ ⁻ ⁽⁻³⁾ = 5ᵐ ⁺ ³.',
        'Given 5ᵐ ⁺ ³ = 5⁵. Equating bases and comparing exponents: m + 3 = 5 ⟹ m = 5 − 3 = <strong>2</strong>.'
      ],
      rubric: [
        ['Applying quotient law 5^(m+3) = 5^5', '1 Mark'],
        ['Solving linear exponent equation m = 2', '1 Mark']
      ]
    },
    {
      num: 7, marks: '3 Marks',
      text: 'Evaluate:<br>(i) {(1/3)⁻¹ − (1/4)⁻¹}⁻¹<br>(ii) (5/8)⁻⁷ × (8/5)⁻⁴',
      steps: [
        '(i) (1/3)⁻¹ = 3, (1/4)⁻¹ = 4. Thus {3 − 4}⁻¹ = (−1)⁻¹ = 1/(−1) = <strong>−1</strong>.',
        '(ii) (5/8)⁻⁷ × (8/5)⁻⁴ = (8/5)⁷ × (8/5)⁻⁴ = (8/5)⁷ ⁺ ⁽⁻⁴⁾ = (8/5)³ = 512 / 125 = <strong>512/125</strong>.'
      ],
      rubric: [
        ['Evaluating part (i) to −1', '1.5 Marks'],
        ['Evaluating part (ii) to (8/5)³ = 512/125', '1.5 Marks']
      ]
    },
    {
      num: 8, marks: '3 Marks',
      text: 'Simplify: (25 × t⁻⁴) / (5⁻³ × 10 × t⁻⁸) (where t ≠ 0).',
      steps: [
        'Express 25 as 5² and 10 as 2 × 5.',
        'Numerator = 5² × t⁻⁴; Denominator = 5⁻³ × (2 × 5¹) × t⁻⁸ = 2 × 5⁻² × t⁻⁸.',
        'Combining powers: (5² ÷ 5⁻²) × (t⁻⁴ ÷ t⁻⁸) ÷ 2 = (5² ⁻ ⁽⁻²⁾ × t⁻⁴ ⁻ ⁽⁻⁸⁾) / 2 = (5⁴ × t⁴) / 2 = <strong>(625 t⁴) / 2</strong>.'
      ],
      rubric: [
        ['Prime base factorization of 25 and 10', '1 Mark'],
        ['Applying laws of exponents for base 5 and variable t', '1 Mark'],
        ['Final simplified value (625 t⁴)/2', '1 Mark']
      ]
    }
  ],

  3: [ // Ch 3: A Story of Numbers (Needs 4 Qs: Q3 to Q6)
    {
      num: 3, marks: '2 Marks',
      text: 'If 21y5 is a multiple of 9, where y is a single digit, what is the value of y?',
      steps: [
        'A number is divisible by 9 if the sum of its digits is a multiple of 9.',
        'Sum of digits of 21y5 = 2 + 1 + y + 5 = 8 + y.',
        'Since y is a digit (0 to 9), 8 + y must equal 9 or 18. If 8 + y = 9 ⟹ y = <strong>1</strong>. (8 + y = 18 gives y = 10, not a single digit).'
      ],
      rubric: [
        ['Stating divisibility rule for 9', '1 Mark'],
        ['Solving 8 + y = 9 to get y = 1', '1 Mark']
      ]
    },
    {
      num: 4, marks: '2 Marks',
      text: 'If 31z5 is a multiple of 3, where z is a digit, what might be the values of z?',
      steps: [
        'A number is divisible by 3 if the sum of its digits is divisible by 3.',
        'Sum of digits = 3 + 1 + z + 5 = 9 + z.',
        'Since 9 is divisible by 3, z must be a single-digit multiple of 3. Therefore, possible values of z are <strong>0, 3, 6, or 9</strong>.'
      ],
      rubric: [
        ['Sum of digits expression 9 + z', '1 Mark'],
        ['Listing all 4 valid digit solutions: 0, 3, 6, 9', '1 Mark']
      ]
    },
    {
      num: 5, marks: '3 Marks',
      text: 'Check the divisibility of 21436587 by 9 and by 11 using divisibility rules without actual long division.',
      steps: [
        'Divisibility by 9: Sum of digits = 2 + 1 + 4 + 3 + 6 + 5 + 8 + 7 = 36. Since 36 is divisible by 9 (36 ÷ 9 = 4), 21436587 is <strong>divisible by 9</strong>.',
        'Divisibility by 11: Sum of digits in odd places (from right) = 7 + 5 + 3 + 1 = 16. Sum of digits in even places (from right) = 8 + 6 + 4 + 2 = 20.',
        'Difference = 20 − 16 = 4. Since 4 is neither 0 nor a multiple of 11, the number is <strong>not divisible by 11</strong>.'
      ],
      rubric: [
        ['Sum of digits = 36; concluding divisible by 9', '1.5 Marks'],
        ['Alternating sum test difference = 4; concluding not divisible by 11', '1.5 Marks']
      ]
    },
    {
      num: 6, marks: '3 Marks',
      text: 'Find the values of letters in the addition cryptarithm:<br>&nbsp;&nbsp;4 A<br>+ 9 8<br>------<br>C B 3',
      steps: [
        'In units column: A + 8 produces 3. Since A is a digit, A + 8 = 13 ⟹ A = 13 − 8 = <strong>5</strong> with a carry-over of 1.',
        'In tens column: 1 (carry) + 4 + 9 = 14. This gives B = <strong>4</strong> and carry-over of 1 to hundreds column, giving C = <strong>1</strong>.',
        'Verification: 45 + 98 = 143. Thus, <strong>A = 5, B = 4, C = 1</strong>.'
      ],
      rubric: [
        ['Units column deduction: A = 5', '1 Mark'],
        ['Tens and hundreds column deduction: B = 4, C = 1', '1 Mark'],
        ['Complete check 45 + 98 = 143', '1 Mark']
      ]
    }
  ],

  4: [ // Ch 4: Quadrilaterals (Needs 6 Qs: Q3 to Q8)
    {
      num: 3, marks: '3 Marks',
      text: 'Find the measure of each exterior angle of a regular polygon of:<br>(i) 9 sides<br>(ii) 15 sides',
      steps: [
        'The sum of exterior angles of any convex polygon is 360°.',
        '(i) For n = 9 sides: Each exterior angle = 360° / 9 = <strong>40°</strong>.',
        '(ii) For n = 15 sides: Each exterior angle = 360° / 15 = <strong>24°</strong>.'
      ],
      rubric: [
        ['Stating formula 360° / n', '1 Mark'],
        ['(i) 360° / 9 = 40°', '1 Mark'],
        ['(ii) 360° / 15 = 24°', '1 Mark']
      ]
    },
    {
      num: 4, marks: '2 Marks',
      text: 'How many sides does a regular polygon have if each of its interior angles is 165°?',
      steps: [
        'Exterior angle = 180° − Interior angle = 180° − 165° = 15°.',
        'Number of sides n = 360° / (each exterior angle) = 360° / 15° = <strong>24 sides</strong>.'
      ],
      rubric: [
        ['Finding exterior angle = 15°', '1 Mark'],
        ['Calculating n = 360° / 15° = 24 sides', '1 Mark']
      ]
    },
    {
      num: 5, marks: '3 Marks',
      text: 'Two adjacent angles of a parallelogram are in the ratio 3 : 2. Find the measure of each of the angles of the parallelogram.',
      steps: [
        'Adjacent angles in a parallelogram are supplementary (sum = 180°).',
        'Let the angles be 3x and 2x. 3x + 2x = 180° ⟹ 5x = 180° ⟹ x = 36°.',
        'The two adjacent angles are: 3 × 36° = 108° and 2 × 36° = 72°.',
        'Since opposite angles of a parallelogram are equal, all four angles are <strong>108°, 72°, 108°, and 72°</strong>.'
      ],
      rubric: [
        ['Setting up 3x + 2x = 180°', '1 Mark'],
        ['Finding x = 36° and angles 108° and 72°', '1 Mark'],
        ['Stating all four angles: 108°, 72°, 108°, 72°', '1 Mark']
      ]
    },
    {
      num: 6, marks: '3 Marks',
      text: 'The diagonals of a rhombus are 7.5 cm and 12 cm. Find its area and the length of each side.',
      steps: [
        'Area of rhombus = (1/2) × d₁ × d₂ = (1/2) × 7.5 × 12 = 7.5 × 6 = <strong>45 cm²</strong>.',
        'Diagonals of a rhombus bisect each other at right angles: half-diagonals are 7.5/2 = 3.75 cm and 12/2 = 6 cm.',
        'Side² = (3.75)² + (6)² = 14.0625 + 36 = 50.0625. Side = √50.0625 = <strong>7.075 cm</strong> (or √(112.5/2) ≈ 7.08 cm).'
      ],
      rubric: [
        ['Calculating Area = 45 cm²', '1.5 Marks'],
        ['Applying Pythagoras theorem to find side ≈ 7.08 cm', '1.5 Marks']
      ]
    },
    {
      num: 7, marks: '3 Marks',
      text: 'RENT is a rectangle. Its diagonals meet at O. If OR = 2x + 4 and OT = 3x + 1, find the value of x and the length of each diagonal.',
      steps: [
        'The diagonals of a rectangle are equal in length and bisect each other.',
        'Therefore, half-diagonals are equal: OR = OT.',
        '2x + 4 = 3x + 1 ⟹ 3x − 2x = 4 − 1 ⟹ <strong>x = 3</strong>.',
        'Length of OR = 2(3) + 4 = 10. Diagonals bisect at O, so diagonal RT = RN = 2 × OR = 2 × 10 = <strong>20 units</strong>.'
      ],
      rubric: [
        ['Equating OR = OT due to rectangle diagonal property', '1 Mark'],
        ['Solving for x = 3', '1 Mark'],
        ['Finding full diagonal length = 20 units', '1 Mark']
      ]
    },
    {
      num: 8, marks: '2 Marks',
      text: 'Explain why a square is: (i) a quadrilateral (ii) a parallelogram (iii) a rhombus (iv) a rectangle.',
      steps: [
        '(i) <strong>Quadrilateral:</strong> A square has 4 closed sides and 4 vertices.',
        '(ii) <strong>Parallelogram:</strong> Its opposite sides are parallel and equal in length.',
        '(iii) <strong>Rhombus:</strong> All 4 sides are equal in length and its diagonals bisect each other perpendicularly.',
        '(iv) <strong>Rectangle:</strong> All 4 interior angles are right angles (90°) and opposite sides are equal.'
      ],
      rubric: [
        ['(i) and (ii) justified correctly', '1 Mark'],
        ['(iii) and (iv) justified correctly', '1 Mark']
      ]
    }
  ],

  5: [ // Ch 5: Number Play (Needs 4 Qs: Q3 to Q6)
    {
      num: 3, marks: '2 Marks',
      text: 'Explain why any two-digit number "ab" and its reverse "ba" when added together are always divisible by 11.',
      steps: [
        'In generalized place value form: ab = 10a + b and ba = 10b + a.',
        'Sum = (10a + b) + (10b + a) = 11a + 11b = 11(a + b).',
        'Since 11 is a factor of the sum, the sum is <strong>always divisible by 11</strong>, and the quotient is the sum of the digits (a + b).'
      ],
      rubric: [
        ['Writing expanded decimal forms 10a+b and 10b+a', '1 Mark'],
        ['Factoring out 11(a+b) to prove divisibility', '1 Mark']
      ]
    },
    {
      num: 4, marks: '3 Marks',
      text: 'Construct a 3 × 3 magic square using natural numbers from 1 to 9 such that the sum along every row, column, and diagonal is 15.',
      steps: [
        'Sum of 1 to 9 = (9 × 10)/2 = 45. In 3 rows, magic constant M = 45 / 3 = 15.',
        'The central number must be the median: 15 / 3 = 5.',
        'Arrangement (Lo Shu square):<br>Row 1: <strong>8, 1, 6</strong> (sum = 15)<br>Row 2: <strong>3, 5, 7</strong> (sum = 15)<br>Row 3: <strong>4, 9, 2</strong> (sum = 15).',
        'Verification: Columns: 8+3+4=15; 1+5+9=15; 6+7+2=15. Diagonals: 8+5+2=15; 6+5+4=15.'
      ],
      rubric: [
        ['Deducing central value = 5 and magic constant = 15', '1 Mark'],
        ['Correctly placing numbers in 3x3 grid', '1 Mark'],
        ['Verifying all row, column, diagonal sums = 15', '1 Mark']
      ]
    },
    {
      num: 5, marks: '3 Marks',
      text: 'Find the digital root (beejank) of: (i) 87654 (ii) 999999, and explain how digital roots verify the addition: 347 + 586 = 933.',
      steps: [
        '(i) 87654: 8 + 7 + 6 + 5 + 4 = 30 ⟹ 3 + 0 = <strong>3</strong>.',
        '(ii) 999999: Sum of digits = 54 ⟹ 5 + 4 = <strong>9</strong>.',
        'Verification of 347 + 586 = 933:<br>Beejank of 347 = 3+4+7 = 14 ⟹ 5.<br>Beejank of 586 = 5+8+6 = 19 ⟹ 1+0 = 1.<br>Sum of beejanks = 5 + 1 = 6.<br>Beejank of answer 933 = 9+3+3 = 15 ⟹ 1+5 = 6.<br>Since 6 = 6, the calculation is verified.'
      ],
      rubric: [
        ['Finding digital roots 3 and 9', '1 Mark'],
        ['Calculating addends digital roots: 5 and 1 -> 6', '1 Mark'],
        ['Matching answer digital root 6', '1 Mark']
      ]
    },
    {
      num: 6, marks: '2 Marks',
      text: 'Write down the general form of a 3-digit number "abc" and show that (abc − cba) is always a multiple of 99.',
      steps: [
        'General form: abc = 100a + 10b + c, and reversed cba = 100c + 10b + a.',
        'Difference = (100a + 10b + c) − (100c + 10b + a) = (100a − a) + (10b − 10b) + (c − 100c) = 99a − 99c = <strong>99(a − c)</strong>.',
        'Since 99 is a factor, the difference is <strong>always divisible by 99</strong>.'
      ],
      rubric: [
        ['Writing expanded forms 100a+10b+c and 100c+10b+a', '1 Mark'],
        ['Simplifying to 99(a − c) and concluding divisibility', '1 Mark']
      ]
    }
  ],

  6: [ // Ch 6: We Distribute, Yet Things Multiply (Needs 6 Qs: Q3 to Q8)
    {
      num: 3, marks: '2 Marks',
      text: 'Add the algebraic expressions: (ab − bc), (bc − ca), and (ca − ab).',
      steps: [
        'Sum = (ab − bc) + (bc − ca) + (ca − ab).',
        'Grouping like terms: (ab − ab) + (−bc + bc) + (−ca + ca).',
        '= 0 + 0 + 0 = <strong>0</strong>.'
      ],
      rubric: [
        ['Aligning and grouping like terms', '1 Mark'],
        ['Evaluating total sum to 0', '1 Mark']
      ]
    },
    {
      num: 4, marks: '3 Marks',
      text: 'Subtract (4a − 7ab + 3b + 12) from (12a − 9ab + 5b − 3).',
      steps: [
        'Expression = (12a − 9ab + 5b − 3) − (4a − 7ab + 3b + 12).',
        'Distribute negative sign: = 12a − 9ab + 5b − 3 − 4a + 7ab − 3b − 12.',
        'Combining like terms: (12a − 4a) + (−9ab + 7ab) + (5b − 3b) + (−3 − 12) = <strong>8a − 2ab + 2b − 15</strong>.'
      ],
      rubric: [
        ['Correctly reversing signs of subtrahend', '1 Mark'],
        ['Grouping like terms together', '1 Mark'],
        ['Final expression 8a − 2ab + 2b − 15', '1 Mark']
      ]
    },
    {
      num: 5, marks: '2 Marks',
      text: 'Obtain the product of the monomials:<br>(i) 2, 4y, 8y², 16y³<br>(ii) a, 2b, 3c, 6abc',
      steps: [
        '(i) Product = 2 × 4y × 8y² × 16y³ = (2 × 4 × 8 × 16) × (y¹ × y² × y³) = <strong>1024 y⁶</strong>.',
        '(ii) Product = a × 2b × 3c × 6abc = (1 × 2 × 3 × 6) × (a × a) × (b × b) × (c × c) = <strong>36 a²b²c²</strong>.'
      ],
      rubric: [
        ['(i) 1024 y⁶', '1 Mark'],
        ['(ii) 36 a²b²c²', '1 Mark']
      ]
    },
    {
      num: 6, marks: '3 Marks',
      text: 'Simplify 3x(4x − 5) + 3 and find its value for: (i) x = 3, (ii) x = 1/2.',
      steps: [
        'Simplifying: 3x(4x − 5) + 3 = 12x² − 15x + 3.',
        '(i) For x = 3: 12(3)² − 15(3) + 3 = 12(9) − 45 + 3 = 108 − 45 + 3 = <strong>66</strong>.',
        '(ii) For x = 1/2: 12(1/2)² − 15(1/2) + 3 = 12(1/4) − 15/2 + 3 = 3 − 7.5 + 3 = <strong>−1.5 (or −3/2)</strong>.'
      ],
      rubric: [
        ['Expanding to 12x² − 15x + 3', '1 Mark'],
        ['Evaluating for x = 3 gives 66', '1 Mark'],
        ['Evaluating for x = 1/2 gives −3/2', '1 Mark']
      ]
    },
    {
      num: 7, marks: '2 Marks',
      text: 'Multiply the binomials using identities: (2.5l − 0.5m) and (2.5l + 0.5m).',
      steps: [
        'Using identity (a − b)(a + b) = a² − b² where a = 2.5l and b = 0.5m.',
        '(2.5l)² − (0.5m)² = <strong>6.25 l² − 0.25 m²</strong>.'
      ],
      rubric: [
        ['Identifying (a−b)(a+b) = a²−b²', '1 Mark'],
        ['Result 6.25 l² − 0.25 m²', '1 Mark']
      ]
    },
    {
      num: 8, marks: '3 Marks',
      text: 'Use the identity (x + a)(x + b) = x² + (a + b)x + ab to evaluate:<br>(i) 501 × 502<br>(ii) 95 × 103',
      steps: [
        '(i) 501 × 502 = (500 + 1)(500 + 2) = 500² + (1 + 2)(500) + (1 × 2) = 250000 + 1500 + 2 = <strong>251,502</strong>.',
        '(ii) 95 × 103 = (100 − 5)(100 + 3) = 100² + (−5 + 3)(100) + (−5 × 3) = 10000 − 200 − 15 = <strong>9,785</strong>.'
      ],
      rubric: [
        ['(i) (500+1)(500+2) evaluated to 251502', '1.5 Marks'],
        ['(ii) (100−5)(100+3) evaluated to 9785', '1.5 Marks']
      ]
    }
  ],

  7: [ // Ch 7: Proportional Reasoning - 1 (Needs 6 Qs: Q3 to Q8)
    {
      num: 3, marks: '3 Marks',
      text: 'A 5 m 60 cm high vertical pole casts a shadow 3 m 20 cm long. Find at the same time:<br>(i) The length of the shadow cast by another pole 10 m 50 cm high.<br>(ii) The height of a pole which casts a shadow 5 m long.',
      steps: [
        'Height and shadow length are in direct proportion: h₁ / s₁ = h₂ / s₂.',
        'Convert to cm: h₁ = 560 cm, s₁ = 320 cm.',
        '(i) For h₂ = 1050 cm: 560 / 320 = 1050 / s₂ ⟹ s₂ = (1050 × 320) / 560 = <strong>600 cm (6 m)</strong>.',
        '(ii) For s₃ = 500 cm: 560 / 320 = h₃ / 500 ⟹ h₃ = (560 × 500) / 320 = <strong>875 cm (8 m 75 cm)</strong>.'
      ],
      rubric: [
        ['Establishing direct proportion ratio 560/320', '1 Mark'],
        ['(i) Shadow length = 6 m', '1 Mark'],
        ['(ii) Pole height = 8 m 75 cm', '1 Mark']
      ]
    },
    {
      num: 4, marks: '2 Marks',
      text: 'A loaded truck travels 14 km in 25 minutes. If the speed remains constant, how far can it travel in 5 hours?',
      steps: [
        'Distance and time are in direct proportion.',
        'Time t₁ = 25 minutes, d₁ = 14 km. Time t₂ = 5 hours = 5 × 60 = 300 minutes.',
        'd₂ / 300 = 14 / 25 ⟹ d₂ = (14 × 300) / 25 = 14 × 12 = <strong>168 km</strong>.'
      ],
      rubric: [
        ['Converting 5 hours = 300 minutes', '0.5 Mark'],
        ['Direct proportion formula setup', '0.5 Mark'],
        ['Evaluating d₂ = 168 km', '1 Mark']
      ]
    },
    {
      num: 5, marks: '3 Marks',
      text: 'A photograph of a bacteria enlarged 50,000 times attains a length of 5 cm. What is the actual length of the bacteria? If the photograph is enlarged 20,000 times only, what would be its enlarged length?',
      steps: [
        'Actual length = Enlarged length / Magnification = 5 cm / 50,000 = 1 / 10,000 cm = 10⁻⁴ cm = <strong>10⁻⁶ m</strong>.',
        'For 20,000 times magnification: Length and magnification are in direct proportion: 5 / 50000 = L₂ / 20000.',
        'L₂ = (5 × 20000) / 50000 = <strong>2 cm</strong>.'
      ],
      rubric: [
        ['Actual length = 10⁻⁴ cm (or 10⁻⁶ m)', '1.5 Marks'],
        ['Enlarged length at 20,000x = 2 cm', '1.5 Marks']
      ]
    },
    {
      num: 6, marks: '2 Marks',
      text: 'In a model of a ship, the mast is 9 cm high, while the mast of the actual ship is 12 m high. If the length of the actual ship is 28 m, how long is the model ship?',
      steps: [
        'Model dimensions and actual dimensions are in direct proportion.',
        'Mast ratio = 9 cm / 12 m = 9 cm / 1200 cm = 3 / 400.',
        'Length of model ship = 28 m × (3 / 400) = 2800 cm × (3 / 400) = 7 × 3 = <strong>21 cm</strong>.'
      ],
      rubric: [
        ['Scale factor setup 9 / 12 = x / 28', '1 Mark'],
        ['Calculating model ship length = 21 cm', '1 Mark']
      ]
    },
    {
      num: 7, marks: '2 Marks',
      text: 'If the weight of 12 sheets of thick paper is 40 grams, how many sheets of the same paper would weigh 2½ kilograms?',
      steps: [
        'Number of sheets and weight are in direct proportion.',
        '2½ kg = 2.5 × 1000 = 2500 grams.',
        'n / 2500 = 12 / 40 ⟹ n = (12 × 2500) / 40 = 12 × 62.5 = <strong>750 sheets</strong>.'
      ],
      rubric: [
        ['Converting 2.5 kg to 2500 g', '0.5 Mark'],
        ['Direct proportion equation setup', '0.5 Mark'],
        ['Evaluating n = 750 sheets', '1 Mark']
      ]
    },
    {
      num: 8, marks: '2 Marks',
      text: 'A machine in a soft drink factory fills 840 bottles in 6 hours. How many bottles will it fill in 5 hours?',
      steps: [
        'Bottles filled and time taken are in direct proportion.',
        'b / 5 = 840 / 6 ⟹ b = 140 × 5 = <strong>700 bottles</strong>.'
      ],
      rubric: [
        ['Unit rate 840 / 6 = 140 bottles/hour', '1 Mark'],
        ['Evaluating for 5 hours: 700 bottles', '1 Mark']
      ]
    }
  ],

  8: [ // Ch 8: Fractions in Disguise (Needs 6 Qs: Q3 to Q8)
    {
      num: 3, marks: '2 Marks',
      text: '72% of 25 students are interested in mathematics. How many students are NOT interested in mathematics?',
      steps: [
        'Percentage not interested = 100% − 72% = 28%.',
        'Number of students not interested = 28% of 25 = (28 / 100) × 25 = 28 / 4 = <strong>7 students</strong>.'
      ],
      rubric: [
        ['Identifying 28% not interested', '1 Mark'],
        ['Evaluating 28% of 25 = 7 students', '1 Mark']
      ]
    },
    {
      num: 4, marks: '2 Marks',
      text: 'A football team won 10 matches out of the total number of matches they played. If their win percentage was 40%, how many matches did they play in all?',
      steps: [
        'Let the total matches played be x.',
        '40% of x = 10 ⟹ (40 / 100) × x = 10.',
        'x = (10 × 100) / 40 = 1000 / 40 = <strong>25 matches</strong>.'
      ],
      rubric: [
        ['Setting equation (40/100) * x = 10', '1 Mark'],
        ['Solving for x = 25 matches', '1 Mark']
      ]
    },
    {
      num: 5, marks: '2 Marks',
      text: 'An item marked at ₹840 is sold for ₹714. What is the discount amount and discount percentage?',
      steps: [
        'Discount = Marked Price (MP) − Selling Price (SP) = ₹840 − ₹714 = <strong>₹126</strong>.',
        'Discount % = (Discount / MP) × 100 = (126 / 840) × 100 = (126 / 8.4) = <strong>15%</strong>.'
      ],
      rubric: [
        ['Discount = ₹126', '1 Mark'],
        ['Discount % = 15%', '1 Mark']
      ]
    },
    {
      num: 6, marks: '3 Marks',
      text: 'A VCR and TV were bought for ₹8,000 each. The shopkeeper made a loss of 4% on the VCR and a profit of 8% on the TV. Find the overall gain or loss percent on the whole transaction.',
      steps: [
        'Cost Price of each = ₹8,000. Total CP = ₹8,000 + ₹8,000 = ₹16,000.',
        'Loss on VCR = 4% of 8,000 = ₹320 ⟹ SP of VCR = 8,000 − 320 = ₹7,680.',
        'Profit on TV = 8% of 8,000 = ₹640 ⟹ SP of TV = 8,000 + 640 = ₹8,640.',
        'Total SP = ₹7,680 + ₹8,640 = ₹16,320.',
        'Since SP > CP, there is an overall profit = ₹16,320 − ₹16,000 = ₹320. Profit % = (320 / 16,000) × 100 = <strong>2% gain</strong>.'
      ],
      rubric: [
        ['Calculating SP of VCR (₹7680) and TV (₹8640)', '1 Mark'],
        ['Total CP = ₹16000 and Total SP = ₹16320', '1 Mark'],
        ['Net profit = ₹320 and gain % = 2%', '1 Mark']
      ]
    },
    {
      num: 7, marks: '2 Marks',
      text: 'I purchased a hair-dryer for ₹5,400 including 8% VAT. Find the original price before VAT was added.',
      steps: [
        'Let the original price before VAT be ₹P.',
        'P + 8% of P = ₹5,400 ⟹ 1.08 P = 5,400.',
        'P = 5,400 / 1.08 = 540,000 / 108 = <strong>₹5,000</strong>.'
      ],
      rubric: [
        ['Formulating equation 1.08 * P = 5400', '1 Mark'],
        ['Solving P = ₹5,000', '1 Mark']
      ]
    },
    {
      num: 8, marks: '3 Marks',
      text: 'Calculate the total amount and compound interest on ₹10,800 for 3 years at 12½% per annum compounded annually.',
      steps: [
        'Principal P = ₹10,800, Rate R = 12.5% = 25/2 %, Time n = 3 years.',
        'A = P(1 + R/100)ⁿ = 10800 × (1 + 25/200)³ = 10800 × (9/8)³.',
        'A = 10800 × (729 / 512) = <strong>₹15,377.34</strong>.',
        'Compound Interest CI = A − P = ₹15,377.34 − ₹10,800 = <strong>₹4,577.34</strong>.'
      ],
      rubric: [
        ['Applying compound interest formula A = P(1 + R/100)ⁿ', '1 Mark'],
        ['Evaluating Amount = ₹15,377.34', '1 Mark'],
        ['Calculating CI = ₹4,577.34', '1 Mark']
      ]
    }
  ],

  9: [ // Ch 9: The Baudhāyana - Pythagoras Theorem (Needs 6 Qs: Q3 to Q8)
    {
      num: 3, marks: '3 Marks',
      text: 'The hypotenuse of a right-angled triangle is 25 cm and one of the other sides is 7 cm. Find the third side and the area of the triangle.',
      steps: [
        'By Baudhāyana-Pythagoras theorem: Hypotenuse² = Base² + Altitude².',
        '25² = 7² + b² ⟹ 625 = 49 + b² ⟹ b² = 625 − 49 = 576.',
        'Third side b = √576 = <strong>24 cm</strong>.',
        'Area of triangle = (1/2) × base × height = (1/2) × 7 × 24 = <strong>84 cm²</strong>.'
      ],
      rubric: [
        ['Applying Pythagoras theorem to find b² = 576', '1.5 Marks'],
        ['Finding third side = 24 cm and Area = 84 cm²', '1.5 Marks']
      ]
    },
    {
      num: 4, marks: '2 Marks',
      text: 'A 13 m long ladder reaches a window of a building 12 m above the ground. Determine the distance of the foot of the ladder from the base of the wall.',
      steps: [
        'The ladder, wall, and ground form a right-angled triangle with hypotenuse = 13 m and height = 12 m.',
        'Distance d² + 12² = 13² ⟹ d² + 144 = 169 ⟹ d² = 25.',
        'Distance d = √25 = <strong>5 meters</strong>.'
      ],
      rubric: [
        ['Right triangle setup d² + 12² = 13²', '1 Mark'],
        ['Evaluating d = 5 m', '1 Mark']
      ]
    },
    {
      num: 5, marks: '3 Marks',
      text: 'A tree is broken at a height of 5 m from the ground and its top touches the ground at a distance of 12 m from the base of the tree. Find the original total height of the tree.',
      steps: [
        'The standing trunk (5 m), ground distance (12 m), and broken top form a right triangle.',
        'Broken part length² = 5² + 12² = 25 + 144 = 169.',
        'Broken top length = √169 = 13 m.',
        'Original height of tree = standing trunk + broken part = 5 m + 13 m = <strong>18 meters</strong>.'
      ],
      rubric: [
        ['Pythagorean relation for broken part = 13 m', '1.5 Marks'],
        ['Adding 5 m + 13 m = 18 m', '1.5 Marks']
      ]
    },
    {
      num: 6, marks: '3 Marks',
      text: 'Two vertical poles of heights 6 m and 11 m stand on level ground. If the distance between their feet is 12 m, find the distance between their tops.',
      steps: [
        'Difference in pole heights = 11 m − 6 m = 5 m.',
        'Horizontal distance between tops = distance between feet = 12 m.',
        'Distance between tops d forms the hypotenuse of a right triangle with legs 5 m and 12 m.',
        'd² = 5² + 12² = 25 + 144 = 169 ⟹ d = √169 = <strong>13 meters</strong>.'
      ],
      rubric: [
        ['Determining vertical difference = 5 m and base = 12 m', '1 Mark'],
        ['Applying theorem: d² = 5² + 12² = 169', '1 Mark'],
        ['Evaluating distance between tops = 13 m', '1 Mark']
      ]
    },
    {
      num: 7, marks: '2 Marks',
      text: 'The sides of a triangle are 15 cm, 20 cm, and 25 cm. Verify whether it forms a right-angled triangle using the Baudhāyana-Pythagoras converse.',
      steps: [
        'Check if sum of squares of two smaller sides equals square of the longest side.',
        '15² + 20² = 225 + 400 = 625.',
        'Longest side² = 25² = 625.',
        'Since 15² + 20² = 25² (625 = 625), by the converse of Baudhāyana-Pythagoras theorem, this is a <strong>right-angled triangle</strong>.'
      ],
      rubric: [
        ['Calculating 15² + 20² = 625 and 25² = 625', '1 Mark'],
        ['Concluding right-angled triangle by converse', '1 Mark']
      ]
    },
    {
      num: 8, marks: '3 Marks',
      text: 'In right triangle ABC right-angled at B, AB = 6 cm and BC = 8 cm. Find hypotenuse AC. Also find the length of the perpendicular altitude BD drawn from B onto AC.',
      steps: [
        'By Baudhāyana theorem: AC² = AB² + BC² = 6² + 8² = 36 + 64 = 100 ⟹ AC = <strong>10 cm</strong>.',
        'Area of △ABC = (1/2) × AB × BC = (1/2) × 6 × 8 = 24 cm².',
        'Also Area = (1/2) × AC × BD ⟹ 24 = (1/2) × 10 × BD ⟹ 5 × BD = 24.',
        'BD = 24 / 5 = <strong>4.8 cm</strong>.'
      ],
      rubric: [
        ['Evaluating hypotenuse AC = 10 cm', '1.5 Marks'],
        ['Using area equivalence to find BD = 4.8 cm', '1.5 Marks']
      ]
    }
  ],

  10: [ // Ch 10: Proportional Reasoning - 2 (Needs 6 Qs: Q3 to Q8)
    {
      num: 3, marks: '2 Marks',
      text: 'If a box of sweets is divided among 24 children, they get 5 sweets each. How many sweets would each get if the number of children is reduced by 4?',
      steps: [
        'Children and sweets per child are inversely proportional: x₁y₁ = x₂y₂.',
        'Total sweets = 24 × 5 = 120 sweets.',
        'New number of children = 24 − 4 = 20.',
        'Sweets per child = 120 ÷ 20 = <strong>6 sweets each</strong>.'
      ],
      rubric: [
        ['Total sweets = 24 × 5 = 120', '1 Mark'],
        ['Evaluating sweets per child = 120 / 20 = 6', '1 Mark']
      ]
    },
    {
      num: 4, marks: '2 Marks',
      text: 'A farmer has enough food to feed 20 cattle for 6 days. How long would the food last if there were 10 more cattle in his herd?',
      steps: [
        'Cattle count and days of food are in inverse proportion.',
        'Total cattle-days = 20 × 6 = 120 cattle-days.',
        'New cattle count = 20 + 10 = 30.',
        'Number of days = 120 ÷ 30 = <strong>4 days</strong>.'
      ],
      rubric: [
        ['Inverse variation setup 20 × 6 = 30 × d', '1 Mark'],
        ['Solving d = 4 days', '1 Mark']
      ]
    },
    {
      num: 5, marks: '2 Marks',
      text: 'A car takes 2 hours to reach a destination by traveling at 60 km/h. How long will it take when the car travels at 80 km/h?',
      steps: [
        'Speed and travel time are inversely proportional: s₁t₁ = s₂t₂.',
        'Total distance = 60 km/h × 2 h = 120 km.',
        'Time at 80 km/h = 120 km / 80 km/h = 1.5 hours = <strong>1 hour 30 minutes</strong>.'
      ],
      rubric: [
        ['Total distance = 120 km', '1 Mark'],
        ['Time = 120 / 80 = 1.5 hours (1 hr 30 mins)', '1 Mark']
      ]
    },
    {
      num: 6, marks: '3 Marks',
      text: 'Two persons could fit new windows in a house in 3 days.<br>(i) One person fell ill before work started. How long would the job take now?<br>(ii) How many persons are needed to fit windows in 1 day?',
      steps: [
        'Total work = 2 persons × 3 days = 6 person-days.',
        '(i) With 1 person: Time = 6 person-days / 1 person = <strong>6 days</strong>.',
        '(ii) To complete in 1 day: Persons needed = 6 person-days / 1 day = <strong>6 persons</strong>.'
      ],
      rubric: [
        ['Total work = 6 person-days', '1 Mark'],
        ['(i) 6 days', '1 Mark'],
        ['(ii) 6 persons', '1 Mark']
      ]
    },
    {
      num: 7, marks: '2 Marks',
      text: 'A school has 8 periods a day, each of 45 minutes duration. How long would each period be if the school has 9 periods a day, assuming total school hours remain the same?',
      steps: [
        'Total school instructional minutes = 8 × 45 = 360 minutes.',
        'Duration per period for 9 periods = 360 minutes ÷ 9 = <strong>40 minutes</strong>.'
      ],
      rubric: [
        ['Total time = 360 minutes', '1 Mark'],
        ['Each period = 360 / 9 = 40 minutes', '1 Mark']
      ]
    },
    {
      num: 8, marks: '2 Marks',
      text: 'If 15 workers can build a wall in 48 hours, how many workers will be required to do the same work in 30 hours?',
      steps: [
        'Workers and hours are inversely proportional: w₁h₁ = w₂h₂.',
        'Total work = 15 × 48 = 720 worker-hours.',
        'Workers needed w₂ = 720 / 30 = <strong>24 workers</strong>.'
      ],
      rubric: [
        ['Equation 15 × 48 = w₂ × 30', '1 Mark'],
        ['Solving w₂ = 24 workers', '1 Mark']
      ]
    }
  ],

  11: [ // Ch 11: Exploring Some Geometric Themes (Needs 6 Qs: Q3 to Q8)
    {
      num: 3, marks: '2 Marks',
      text: 'For a cuboid, count the number of faces (F), vertices (V), and edges (E), and verify Euler\'s formula F + V − E = 2.',
      steps: [
        'For a cuboid: Faces F = 6, Vertices V = 8, Edges E = 12.',
        'Euler\'s formula verification: F + V − E = 6 + 8 − 12 = 14 − 12 = <strong>2</strong>.',
        'Euler\'s formula holds true.'
      ],
      rubric: [
        ['Stating F=6, V=8, E=12', '1 Mark'],
        ['Substituting into F + V − E = 2', '1 Mark']
      ]
    },
    {
      num: 4, marks: '2 Marks',
      text: 'Can a polyhedron have 10 faces, 20 edges, and 15 vertices? Justify your answer using Euler\'s formula.',
      steps: [
        'Given: F = 10, E = 20, V = 15.',
        'Test Euler\'s formula: F + V − E = 10 + 15 − 20 = 25 − 20 = 5.',
        'Since 5 ≠ 2, such a polyhedron <strong>cannot exist</strong>.'
      ],
      rubric: [
        ['Calculating F + V − E = 10 + 15 − 20 = 5', '1 Mark'],
        ['Concurring it cannot exist since 5 ≠ 2', '1 Mark']
      ]
    },
    {
      num: 5, marks: '3 Marks',
      text: 'Describe the front view, top view, and side view of: (i) A standard building brick (ii) A right circular cylinder resting on its circular base.',
      steps: [
        '(i) <strong>Brick:</strong> Front view is a rectangle (length × height); Side view is a smaller rectangle (breadth × height); Top view is a rectangle (length × breadth).',
        '(ii) <strong>Cylinder:</strong> Front view is a rectangle; Side view is an identical rectangle; Top view is a circle (radius r).'
      ],
      rubric: [
        ['(i) Three orthogonal rectangular views described', '1.5 Marks'],
        ['(ii) Rectangle front/side and circular top view described', '1.5 Marks']
      ]
    },
    {
      num: 6, marks: '3 Marks',
      text: 'Identify the 3D solid that has:<br>(i) 1 curved surface and 2 flat circular faces<br>(ii) 1 flat circular face and 1 apex vertex<br>(iii) 4 triangular faces',
      steps: [
        '(i) 1 curved surface and 2 circular bases = <strong>Cylinder</strong>.',
        '(ii) 1 circular base and 1 vertex = <strong>Cone</strong>.',
        '(iii) 4 triangular faces = <strong>Tetrahedron (Triangular Pyramid)</strong>.'
      ],
      rubric: [
        ['(i) Cylinder', '1 Mark'],
        ['(ii) Cone', '1 Mark'],
        ['(iii) Tetrahedron / Triangular Pyramid', '1 Mark']
      ]
    },
    {
      num: 7, marks: '2 Marks',
      text: 'How are prisms and cylinders alike? How are pyramids and cones alike?',
      steps: [
        'A prism becomes a cylinder as the number of sides of its base polygon increases indefinitely to form a smooth circular boundary.',
        'A pyramid becomes a cone as the number of sides of its base polygon increases indefinitely to form a circular base meeting at an apex.'
      ],
      rubric: [
        ['Explaining prism to cylinder polygon limit', '1 Mark'],
        ['Explaining pyramid to cone polygon limit', '1 Mark']
      ]
    },
    {
      num: 8, marks: '2 Marks',
      text: 'Can a polyhedron have for its faces: (i) 3 triangles? (ii) 4 triangles? (iii) A square and four triangles? Explain.',
      steps: [
        '(i) <strong>No</strong>, at least 4 faces are needed to enclose 3D space.',
        '(ii) <strong>Yes</strong>, 4 triangles form a triangular pyramid (tetrahedron).',
        '(iii) <strong>Yes</strong>, 1 square base with 4 triangular faces forms a square pyramid.'
      ],
      rubric: [
        ['(i) No, min 4 faces needed', '0.5 Mark'],
        ['(ii) Yes, tetrahedron', '0.75 Mark'],
        ['(iii) Yes, square pyramid', '0.75 Mark']
      ]
    }
  ],

  12: [ // Ch 12: Tales by Dots and Lines (Needs 6 Qs: Q3 to Q8)
    {
      num: 3, marks: '2 Marks',
      text: 'Plot points A(4, 0), B(4, 2), C(4, 6), and D(4, 2.5) on a Cartesian grid. Do all these points lie on a single straight line? State the line\'s equation.',
      steps: [
        'Notice that the x-coordinate of all four points is identical: x = 4.',
        'All points lie on a straight vertical line parallel to the y-axis, located 4 units to the right of the origin.',
        '<strong>Yes</strong>, they lie on the straight line whose equation is <strong>x = 4</strong>.'
      ],
      rubric: [
        ['Noting constant x-coordinate = 4', '1 Mark'],
        ['Concluding points form vertical line x = 4', '1 Mark']
      ]
    },
    {
      num: 4, marks: '3 Marks',
      text: 'Draw the line passing through (2, 3) and (3, 2). Find the coordinates of the points at which this line intersects the x-axis and the y-axis.',
      steps: [
        'Notice that for both points, the sum of coordinates is constant: 2 + 3 = 5 and 3 + 2 = 5.',
        'The equation of this line is x + y = 5.',
        'At x-axis (where y = 0): x + 0 = 5 ⟹ x = 5. Coordinates = <strong>(5, 0)</strong>.',
        'At y-axis (where x = 0): 0 + y = 5 ⟹ y = 5. Coordinates = <strong>(0, 5)</strong>.'
      ],
      rubric: [
        ['Finding relationship x + y = 5', '1 Mark'],
        ['x-intercept at (5, 0)', '1 Mark'],
        ['y-intercept at (0, 5)', '1 Mark']
      ]
    },
    {
      num: 5, marks: '2 Marks',
      text: 'Write the coordinates of the four vertices of a square ABCD of side 4 units, having one vertex at the origin O(0, 0) and sides along the positive x- and y-axes.',
      steps: [
        'Vertex A is at the origin: <strong>A(0, 0)</strong>.',
        'Vertex B is 4 units along positive x-axis: <strong>B(4, 0)</strong>.',
        'Vertex C is 4 units right and 4 units up: <strong>C(4, 4)</strong>.',
        'Vertex D is 4 units along positive y-axis: <strong>D(0, 4)</strong>.'
      ],
      rubric: [
        ['Coordinates A(0,0) and B(4,0)', '1 Mark'],
        ['Coordinates C(4,4) and D(0,4)', '1 Mark']
      ]
    },
    {
      num: 6, marks: '3 Marks',
      text: 'A bank offers 10% Simple Interest per annum on deposits. For deposits of ₹1000, ₹2000, ₹3000, ₹4000, and ₹5000:<br>(i) Tabulate interest for 1 year.<br>(ii) Does the graph pass through the origin?<br>(iii) Find the annual interest on a deposit of ₹2500 using the graph.',
      steps: [
        '(i) SI = (P × 10 × 1) / 100 = 0.1P. Deposits vs Interest: (1000, 100), (2000, 200), (3000, 300), (4000, 400), (5000, 500).',
        '(ii) For P = 0, SI = 0. <strong>Yes</strong>, the linear graph passes through the origin (0, 0).',
        '(iii) For deposit P = ₹2500: Reading from the graph line halfway between 2000 and 3000 gives Interest = <strong>₹250</strong>.'
      ],
      rubric: [
        ['Tabulating values (1000,100) to (5000,500)', '1 Mark'],
        ['Verifying passage through origin (0,0)', '1 Mark'],
        ['Determining interest on ₹2500 = ₹250', '1 Mark']
      ]
    },
    {
      num: 7, marks: '3 Marks',
      text: 'A courier rider travels from a town to a suburb. Distance from town: 8 am: 0 km; 9 am: 10 km; 10 am: 16 km; 10:30 am: 16 km; 11:30 am: 22 km.<br>(i) How much total time did the journey take?<br>(ii) How far is the delivery location from town?<br>(iii) Did the rider stop on the way? Explain.',
      steps: [
        '(i) Total travel time: From 8:00 am to 11:30 am = <strong>3 hours 30 minutes</strong>.',
        '(ii) Distance of delivery location = <strong>22 km</strong>.',
        '(iii) <strong>Yes</strong>, the rider stopped between 10:00 am and 10:30 am because the distance remained constant at 16 km for 30 minutes (horizontal line segment on distance-time graph).'
      ],
      rubric: [
        ['Total time = 3.5 hours', '1 Mark'],
        ['Total distance = 22 km', '1 Mark'],
        ['Explaining horizontal plateau = 30-min stop', '1 Mark']
      ]
    },
    {
      num: 8, marks: '2 Marks',
      text: 'The cost of petrol is ₹70 per litre. Tabulate the cost for 1, 2, 3, 4, and 5 litres. Does the relation represent direct proportion? Explain.',
      steps: [
        'Table: 1 L ⟹ ₹70; 2 L ⟹ ₹140; 3 L ⟹ ₹210; 4 L ⟹ ₹280; 5 L ⟹ ₹350.',
        'Cost / Litres = 70 / 1 = 140 / 2 = 210 / 3 = 70 (constant).',
        '<strong>Yes</strong>, it represents direct proportion because the ratio Cost/Volume is constant and the graph is a straight line passing through (0, 0).'
      ],
      rubric: [
        ['Tabulating values correctly', '1 Mark'],
        ['Proving constant ratio k = 70', '1 Mark']
      ]
    }
  ],

  13: [ // Ch 13: Algebra Play (Needs 7 Qs: Q4 to Q10)
    {
      num: 4, marks: '3 Marks',
      text: 'Factorise the following expressions by finding the common monomial factor:<br>(i) 7x − 42<br>(ii) 6p − 12q<br>(iii) 7a² + 14a',
      steps: [
        '(i) 7x − 42: Common factor is 7 ⟹ <strong>7(x − 6)</strong>.',
        '(ii) 6p − 12q: Common factor is 6 ⟹ <strong>6(p − 2q)</strong>.',
        '(iii) 7a² + 14a: Common factor is 7a ⟹ <strong>7a(a + 2)</strong>.'
      ],
      rubric: [
        ['(i) 7(x − 6)', '1 Mark'],
        ['(ii) 6(p − 2q)', '1 Mark'],
        ['(iii) 7a(a + 2)', '1 Mark']
      ]
    },
    {
      num: 5, marks: '3 Marks',
      text: 'Factorise by grouping terms:<br>(i) x² + xy + 8x + 8y<br>(ii) 15xy − 6x + 5y − 2',
      steps: [
        '(i) x(x + y) + 8(x + y) = <strong>(x + y)(x + 8)</strong>.',
        '(ii) 3x(5y − 2) + 1(5y − 2) = <strong>(5y − 2)(3x + 1)</strong>.'
      ],
      rubric: [
        ['(i) (x + y)(x + 8)', '1.5 Marks'],
        ['(ii) (5y − 2)(3x + 1)', '1.5 Marks']
      ]
    },
    {
      num: 6, marks: '3 Marks',
      text: 'Factorise using standard algebraic identities:<br>(i) a² + 8a + 16<br>(ii) 4p² − 9q²<br>(iii) 49y² + 84yz + 36z²',
      steps: [
        '(i) a² + 2(a)(4) + 4² = (a + 4)² = <strong>(a + 4)(a + 4)</strong>.',
        '(ii) (2p)² − (3q)² = <strong>(2p − 3q)(2p + 3q)</strong>.',
        '(iii) (7y)² + 2(7y)(6z) + (6z)² = (7y + 6z)² = <strong>(7y + 6z)(7y + 6z)</strong>.'
      ],
      rubric: [
        ['(i) (a + 4)²', '1 Mark'],
        ['(ii) (2p − 3q)(2p + 3q)', '1 Mark'],
        ['(iii) (7y + 6z)²', '1 Mark']
      ]
    },
    {
      num: 7, marks: '3 Marks',
      text: 'Factorise:<br>(i) 25m² − 49<br>(ii) (l + m)² − (l − m)²<br>(iii) x⁴ − (y + z)⁴',
      steps: [
        '(i) (5m)² − 7² = <strong>(5m − 7)(5m + 7)</strong>.',
        '(ii) Using a² − b² = (a − b)(a + b): [(l + m) + (l − m)][(l + m) − (l − m)] = (2l)(2m) = <strong>4lm</strong>.',
        '(iii) [x² + (y + z)²][x² − (y + z)²] = <strong>[x² + (y + z)²][x + y + z][x − (y + z)]</strong>.'
      ],
      rubric: [
        ['(i) (5m − 7)(5m + 7)', '1 Mark'],
        ['(ii) 4lm', '1 Mark'],
        ['(iii) Complete factorization of fourth degree difference', '1 Mark']
      ]
    },
    {
      num: 8, marks: '2 Marks',
      text: 'Factorise the expression and divide as directed: (y² + 7y + 10) ÷ (y + 5).',
      steps: [
        'Factorise numerator: y² + 7y + 10 = y² + 5y + 2y + 10 = y(y + 5) + 2(y + 5) = (y + 5)(y + 2).',
        'Divide: [(y + 5)(y + 2)] / (y + 5) = <strong>y + 2</strong>.'
      ],
      rubric: [
        ['Splitting middle term to get (y + 5)(y + 2)', '1 Mark'],
        ['Cancelling (y + 5) to yield y + 2', '1 Mark']
      ]
    },
    {
      num: 9, marks: '2 Marks',
      text: 'Divide 44(x⁴ − 5x³ − 24x²) by 11x(x − 8).',
      steps: [
        'Factorise numerator: 44x²(x² − 5x − 24).',
        'x² − 5x − 24 = x² − 8x + 3x − 24 = (x − 8)(x + 3).',
        'Numerator = 44x²(x − 8)(x + 3).',
        'Divide by 11x(x − 8): [44x²(x − 8)(x + 3)] / [11x(x − 8)] = <strong>4x(x + 3)</strong>.'
      ],
      rubric: [
        ['Factorising into 44x²(x − 8)(x + 3)', '1 Mark'],
        ['Cancelling common factors to get 4x(x + 3)', '1 Mark']
      ]
    },
    {
      num: 10, marks: '3 Marks',
      text: 'Solve the linear equation: (3t − 2)/4 − (2t + 3)/3 = 2/3 − t.',
      steps: [
        'LCM of denominators (4, 3) = 12. Multiply both sides by 12:',
        '12 × [(3t − 2)/4] − 12 × [(2t + 3)/3] = 12 × (2/3) − 12 × t.',
        '3(3t − 2) − 4(2t + 3) = 4(2) − 12t.',
        '9t − 6 − 8t − 12 = 8 − 12t ⟹ t − 18 = 8 − 12t.',
        't + 12t = 8 + 18 ⟹ 13t = 26 ⟹ <strong>t = 2</strong>.'
      ],
      rubric: [
        ['Clearing fractions by multiplying by 12', '1 Mark'],
        ['Expanding and combining like terms: 13t = 26', '1 Mark'],
        ['Evaluating t = 2', '1 Mark']
      ]
    }
  ],

  14: [ // Ch 14: Area (Needs 7 Qs: Q4 to Q10)
    {
      num: 4, marks: '3 Marks',
      text: 'The floor of a building consists of 3000 rhombus-shaped tiles. The diagonals of each tile are 45 cm and 30 cm. Find the total cost of polishing the floor, if the cost per m² is ₹4.',
      steps: [
        'Area of 1 tile = (1/2) × d₁ × d₂ = (1/2) × 45 × 30 = 675 cm².',
        'Total area of 3000 tiles = 3000 × 675 = 2,025,000 cm².',
        'Convert to m²: 1 m² = 10,000 cm² ⟹ Total area = 2,025,000 / 10,000 = 202.5 m².',
        'Cost of polishing = 202.5 m² × ₹4/m² = <strong>₹810</strong>.'
      ],
      rubric: [
        ['Area of 1 tile = 675 cm²', '1 Mark'],
        ['Total floor area = 202.5 m²', '1 Mark'],
        ['Total cost = ₹810', '1 Mark']
      ]
    },
    {
      num: 5, marks: '3 Marks',
      text: 'Mohan wants to buy a trapezium-shaped field. Its side along the river is parallel to and twice the side along the road. The perpendicular distance between the two parallel sides is 100 m and the area of the field is 10,500 m². Find the length of the side along the river.',
      steps: [
        'Let the side along the road be x meters. Then the side along the river is 2x meters.',
        'Area of trapezium = (1/2) × (sum of parallel sides) × height.',
        '10500 = (1/2) × (x + 2x) × 100 = (1/2) × 3x × 100 = 150x.',
        'x = 10500 / 150 = 70 m (side along the road).',
        'Side along the river = 2x = 2 × 70 = <strong>140 meters</strong>.'
      ],
      rubric: [
        ['Formulating 10500 = (1/2) * (3x) * 100', '1 Mark'],
        ['Solving x = 70 m', '1 Mark'],
        ['Evaluating side along river = 140 m', '1 Mark']
      ]
    },
    {
      num: 6, marks: '3 Marks',
      text: 'An aquarium is in the form of a cuboid whose external measures are 80 cm × 30 cm × 40 cm. The base, side faces and back face are to be covered with a coloured paper. Find the area of the paper needed.',
      steps: [
        'Dimensions: Length l = 80 cm, breadth b = 30 cm, height h = 40 cm.',
        'Area of base = l × b = 80 × 30 = 2400 cm².',
        'Area of 2 side faces = 2 × (b × h) = 2 × (30 × 40) = 2400 cm².',
        'Area of back face = l × h = 80 × 40 = 3200 cm².',
        'Total paper required = 2400 + 2400 + 3200 = <strong>8,000 cm²</strong>.'
      ],
      rubric: [
        ['Calculating base (2400 cm²) and side faces (2400 cm²)', '1.5 Marks'],
        ['Calculating back face (3200 cm²) and sum = 8000 cm²', '1.5 Marks']
      ]
    },
    {
      num: 7, marks: '3 Marks',
      text: 'A suitcase with measures 80 cm × 48 cm × 24 cm is to be covered with a tarpaulin cloth. How many metres of tarpaulin of width 96 cm is required to cover 100 such suitcases?',
      steps: [
        'Total surface area of 1 suitcase = 2(lb + bh + hl) = 2(80×48 + 48×24 + 24×80) = 2(3840 + 1152 + 1920) = 2(6912) = 13,824 cm².',
        'Total area for 100 suitcases = 100 × 13,824 = 1,382,400 cm².',
        'Width of tarpaulin = 96 cm. Length of cloth required = Total area / width = 1,382,400 / 96 = 14,400 cm.',
        'Convert to metres: 14,400 cm / 100 = <strong>144 metres</strong>.'
      ],
      rubric: [
        ['TSA of 1 suitcase = 13824 cm²', '1 Mark'],
        ['Total area for 100 suitcases = 1382400 cm²', '1 Mark'],
        ['Length = 144 metres', '1 Mark']
      ]
    },
    {
      num: 8, marks: '2 Marks',
      text: 'Find the side of a cube whose surface area is 600 cm².',
      steps: [
        'Surface area of a cube of side a is 6a².',
        '6a² = 600 ⟹ a² = 100.',
        'Side a = √100 = <strong>10 cm</strong>.'
      ],
      rubric: [
        ['Formula 6a² = 600', '1 Mark'],
        ['Side length = 10 cm', '1 Mark']
      ]
    },
    {
      num: 9, marks: '3 Marks',
      text: 'A cylindrical milk tank has radius 1.5 m and height (length) 7 m. Find the quantity of milk in litres that can be stored in the tank. (Use π = 22/7 and 1 m³ = 1000 litres).',
      steps: [
        'Volume of cylinder V = πr²h.',
        'V = (22 / 7) × (1.5)² × 7 = 22 × 2.25 = 49.5 m³.',
        'Convert to litres: Quantity of milk = 49.5 × 1000 = <strong>49,500 litres</strong>.'
      ],
      rubric: [
        ['Volume formula V = πr²h', '1 Mark'],
        ['Calculating V = 49.5 m³', '1 Mark'],
        ['Converting to 49,500 litres', '1 Mark']
      ]
    },
    {
      num: 10, marks: '3 Marks',
      text: 'A road roller takes 750 complete revolutions to move once over to level a road. Find the area of the road if the diameter of the road roller is 84 cm and its width (length) is 1 m.',
      steps: [
        'Diameter d = 84 cm ⟹ radius r = 42 cm = 0.42 m. Width (height) h = 1 m.',
        'Curved surface area (CSA) in 1 revolution = 2πrh = 2 × (22 / 7) × 0.42 × 1 = 2 × 22 × 0.06 = 2.64 m².',
        'Area leveled in 750 revolutions = 750 × 2.64 m² = <strong>1,980 m²</strong>.'
      ],
      rubric: [
        ['CSA per revolution = 2.64 m²', '1.5 Marks'],
        ['Area in 750 revolutions = 1980 m²', '1.5 Marks']
      ]
    }
  ]
};

function formatQCard(chNum, q) {
  const qId = `c8m_ch${chNum}_q${q.num}`;
  const stepsHtml = q.steps.map(s => `          <div class="step">${s}</div>`).join('\n');
  const rubricHtml = q.rubric.map(r => `          <div class="marking-row"><span class="marking-key">${r[0]}</span><span class="marking-marks">${r[1]}</span></div>`).join('\n');

  return `  <div class="q-card" id="${qId}">
    <div class="q-head" onclick="toggleQ('${qId}')">
      <div class="q-num">Q${q.num}</div>
      <div class="q-text">${q.text}</div>
      <div class="q-marks">${q.marks}</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✓ Suggested Step-by-Step Solution</div>
        <div class="answer-text">
${stepsHtml}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">Suggested Marks Distribution</div>
${rubricHtml}
        </div>
      </div>
    </div>
  </div>`;
}

console.log('Injecting 80 questions into Class 8 Maths chapters...');

for (let ch = 1; ch <= 14; ch++) {
  const filePath = path.join(CH_DIR, `ch${ch}.html`);
  let html = fs.readFileSync(filePath, 'utf8');

  const additions = MATHS_ADDITIONS[ch] || [];
  if (additions.length === 0) continue;

  const cardsHtml = additions.map(q => formatQCard(ch, q)).join('\n\n');

  // Insert right before cbq-section or ch-nav-btns
  if (html.includes('<div class="cbq-section">')) {
    html = html.replace('<div class="cbq-section">', `${cardsHtml}\n\n  <div class="cbq-section">`);
  } else if (html.includes('<div class="ch-nav-btns">')) {
    html = html.replace('<div class="ch-nav-btns">', `${cardsHtml}\n\n  <div class="ch-nav-btns">`);
  } else {
    html = html.replace('</section>', `${cardsHtml}\n</section>`);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Ch ${ch}: Successfully injected ${additions.length} questions.`);
}

console.log('\nRunning build-c8m-gp-hub.js to synchronize chapters-data.js and ncert-solutions-class-8-maths.html...');
execSync('node scripts/build-c8m-gp-hub.js', { cwd: ROOT, stdio: 'inherit' });
console.log('Class 8 Maths update complete!');
