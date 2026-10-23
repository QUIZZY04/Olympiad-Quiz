// Comprehensive NCERT Class 5 Mathematics Question Bank
// Covering All 29 Chapters across Maths Mela (15 Chs) and Math-Magic (14 Chs)
// Aligned with NCERT Textbooks, CBSE Step Marking Rubrics & Tiwari Academy Standards

const mathMagicExtra = {
  // Chapter 1: The Fish Tale
  1: [
    {
      q: "A log boat travels at a speed of 4 km per hour. (a) How far will it go in 6 hours? (b) How long will it take to travel a distance of 10 km?",
      marks: 3,
      ans: `<div>
        <p><strong>Given:</strong> Speed of log boat = 4 km/h.</p>
        <p><strong>(a) Distance in 6 hours:</strong><br>
        $\\text{Distance} = \\text{Speed} \\times \\text{Time} = 4 \\text{ km/h} \\times 6 \\text{ h} = \\mathbf{24\\text{ km}}$.</p>
        <p><strong>(b) Time to travel 10 km:</strong><br>
        $\\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}} = \\frac{10}{4} = 2.5 \\text{ hours} = \\mathbf{2\\text{ hours and } 30\\text{ minutes}}$.</p>
      </div>`,
      rubric: [
        { key: "Formula: Distance = Speed × Time & calculation of 24 km", marks: "1.5 Marks" },
        { key: "Formula: Time = Distance / Speed & calculation of 2.5 hours (2 hrs 30 min)", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Gracy took a bank loan of ₹4,000 to buy a fishing net. She paid back ₹345 every month for one year. How much total money did she pay back to the bank, and how much interest did she pay?",
      marks: 4,
      ans: `<div>
        <ol>
          <li><strong>Principal Loan Amount:</strong> $P = ₹4,000$.</li>
          <li><strong>Monthly Installment:</strong> ₹345 per month.</li>
          <li><strong>Number of months in 1 year:</strong> 12 months.</li>
          <li><strong>Total Amount Paid Back:</strong><br>
          $\\text{Total Repaid} = ₹345 \\times 12 = \\mathbf{₹4,140}$.</li>
          <li><strong>Interest Paid to Bank:</strong><br>
          $\\text{Interest} = \\text{Total Repaid} - \\text{Principal Loan} = ₹4,140 - ₹4,000 = \\mathbf{₹140}$.</li>
        </ol>
        <p><strong>Conclusion:</strong> Gracy paid a total of <strong>₹4,140</strong> to the bank, which includes <strong>₹140</strong> as interest.</p>
      </div>`,
      rubric: [
        { key: "Calculation of total monthly repayments: 345 × 12 = ₹4,140", marks: "2 Marks" },
        { key: "Subtraction of principal loan to find interest: ₹4,140 - ₹4,000 = ₹140", marks: "2 Marks" }
      ]
    },
    {
      q: "When fresh fish is dried, it becomes 1/3 of its weight. Floramma wants to dry 6,000 kg of fresh fish. She bought fresh fish at ₹15 per kg and sells dried fish at ₹70 per kg. Calculate: (a) Weight of dried fish obtained, (b) Cost of fresh fish, (c) Money earned by selling dried fish, (d) Net profit earned.",
      marks: 5,
      ans: `<div>
        <ol>
          <li><strong>(a) Weight of dried fish:</strong><br>
          $\\text{Weight} = 6,000 \\times \\frac{1}{3} = \\mathbf{2,000\\text{ kg}}$.</li>
          <li><strong>(b) Total buying cost of 6,000 kg fresh fish:</strong><br>
          $\\text{Cost} = 6,000 \\times ₹15 = \\mathbf{₹90,000}$.</li>
          <li><strong>(c) Money earned by selling 2,000 kg dried fish:</strong><br>
          $\\text{Selling Price} = 2,000 \\times ₹70 = \\mathbf{₹1,40,000}$.</li>
          <li><strong>(d) Net Profit:</strong><br>
          $\\text{Profit} = \\text{Selling Price} - \\text{Cost Price} = ₹1,40,000 - ₹90,000 = \\mathbf{₹50,000}$.</li>
        </ol>
        <p><strong>Final Answer:</strong> Floramma earns a net profit of <strong>₹50,000</strong>.</p>
      </div>`,
      rubric: [
        { key: "Part (a): 6000 × 1/3 = 2000 kg dried fish", marks: "1 Mark" },
        { key: "Part (b): 6000 × ₹15 = ₹90,000 buying cost", marks: "1 Mark" },
        { key: "Part (c): 2000 × ₹70 = ₹1,40,000 selling amount", marks: "1.5 Marks" },
        { key: "Part (d): Profit = ₹1,40,000 - ₹90,000 = ₹50,000", marks: "1.5 Marks" }
      ]
    }
  ],

  // Chapter 2: Shapes and Angles
  2: [
    {
      q: "Look at the hands of the clock at the following times and write what kind of angle is formed (Right angle, Less than a right angle, or More than a right angle): (a) 9:00, (b) 3:30, (c) 7:15, (d) 2:00, (e) 6:00.",
      marks: 5,
      ans: `<div>
        <ul>
          <li><strong>(a) 9:00:</strong> The hour hand is at 9 and the minute hand is at 12. Angle = $3 \\times 30^\\circ = 90^\\circ$ &rarr; <strong>Right Angle</strong>.</li>
          <li><strong>(b) 3:30:</strong> The hour hand is halfway between 3 and 4, and minute hand is at 6. Angle = $75^\\circ$ &rarr; <strong>Less than a right angle (Acute Angle)</strong>.</li>
          <li><strong>(c) 7:15:</strong> The hour hand is just past 7 and minute hand is at 3. Angle = approx $127.5^\\circ$ &rarr; <strong>More than a right angle (Obtuse Angle)</strong>.</li>
          <li><strong>(d) 2:00:</strong> The hour hand is at 2 and minute hand is at 12. Angle = $2 \\times 30^\\circ = 60^\\circ$ &rarr; <strong>Less than a right angle (Acute Angle)</strong>.</li>
          <li><strong>(e) 6:00:</strong> The hour hand is at 6 and minute hand is at 12. Angle = $180^\\circ$ &rarr; <strong>More than a right angle (Straight Angle)</strong>.</li>
        </ul>
      </div>`,
      rubric: [
        { key: "Accurate classification of parts (a), (b), (c)", marks: "3 Marks" },
        { key: "Accurate classification of parts (d), (e)", marks: "2 Marks" }
      ]
    },
    {
      q: "In the name 'MEENA', count the total number of: (a) Right angles, (b) Angles less than a right angle, (c) Angles more than a right angle.",
      marks: 3,
      ans: `<div>
        <p>Analyzing straight line segment angles in uppercase printed letters:</p>
        <ul>
          <li><strong>M:</strong> 3 angles (all 3 acute, less than right angle).</li>
          <li><strong>E:</strong> 4 right angles (at the top, middle top, middle bottom, bottom intersections).</li>
          <li><strong>E:</strong> 4 right angles.</li>
          <li><strong>N:</strong> 2 angles (both acute, less than right angle).</li>
          <li><strong>A:</strong> 3 acute angles (at the apex and crossbar) + 2 obtuse angles (below crossbar).</li>
        </ul>
        <p><strong>Total Counts:</strong><br>
        (a) Right angles = $4 + 4 = \\mathbf{8\\text{ Right angles}}$.<br>
        (b) Angles less than right angle = $3 + 2 + 3 = \\mathbf{8\\text{ Acute angles}}$.<br>
        (c) Angles more than right angle = $\\mathbf{2\\text{ Obtuse angles}}$ (in A).</p>
      </div>`,
      rubric: [
        { key: "8 right angles in letters E and E", marks: "1 Mark" },
        { key: "8 acute angles in M, N, and A", marks: "1 Mark" },
        { key: "2 obtuse angles in letter A", marks: "1 Mark" }
      ]
    }
  ],

  // Chapter 3: How Many Squares?
  3: [
    {
      q: "A rectangular postage stamp has length 4 cm and width 3 cm. (a) What is the area of this stamp? (b) How many such stamps are needed to completely cover a sheet of paper measuring 24 cm in length and 18 cm in width?",
      marks: 4,
      ans: `<div>
        <ol>
          <li><strong>(a) Area of the stamp:</strong><br>
          $\\text{Area} = \\text{Length} \\times \\text{Width} = 4\\text{ cm} \\times 3\\text{ cm} = \\mathbf{12\\text{ cm}^2}$.</li>
          <li><strong>(b) Area of the paper sheet:</strong><br>
          $\\text{Sheet Area} = 24\\text{ cm} \\times 18\\text{ cm} = \\mathbf{432\\text{ cm}^2}$.</li>
          <li><strong>Number of stamps required:</strong><br>
          $\\text{Number of stamps} = \\frac{\\text{Sheet Area}}{\\text{Stamp Area}} = \\frac{432}{12} = \\mathbf{36\\text{ stamps}}$.</li>
        </ol>
        <p><em>Alternative grid check:</em> Along the length: $24 \\div 4 = 6$ stamps. Along width: $18 \\div 3 = 6$ stamps. Total $= 6 \\times 6 = 36$ stamps.</p>
      </div>`,
      rubric: [
        { key: "Stamp area = 4 × 3 = 12 cm²", marks: "1.5 Marks" },
        { key: "Sheet area = 24 × 18 = 432 cm² and division 432 / 12 = 36 stamps", marks: "2.5 Marks" }
      ]
    },
    {
      q: "A rectangle has a perimeter of 24 cm. If its width is 4 cm, find its: (a) Length, (b) Area.",
      marks: 3,
      ans: `<div>
        <ol>
          <li><strong>Given:</strong> $\\text{Perimeter} = 24\\text{ cm}$, $\\text{Width} (w) = 4\\text{ cm}$.</li>
          <li><strong>Formula:</strong> $\\text{Perimeter} = 2 \\times (l + w)$.<br>
          $24 = 2 \\times (l + 4) \\implies l + 4 = 12 \\implies l = 12 - 4 = \\mathbf{8\\text{ cm}}$.</li>
          <li><strong>Area:</strong><br>
          $\\text{Area} = l \\times w = 8\\text{ cm} \\times 4\\text{ cm} = \\mathbf{32\\text{ cm}^2}$.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Finding length = 12 - 4 = 8 cm", marks: "1.5 Marks" },
        { key: "Finding area = 8 × 4 = 32 cm²", marks: "1.5 Marks" }
      ]
    }
  ],

  // Chapter 4: Parts and Wholes
  4: [
    {
      q: "Ramu's field has 9 equal parts. In these parts he grows vegetables: 3 parts potatoes, 2 parts brinjals, 1 part spinach, and 3 parts tomatoes. (a) What fraction of the field is used for growing tomatoes? (b) What vegetable occupies the smallest part of the field? (c) What fraction is used for potatoes and brinjals combined?",
      marks: 4,
      ans: `<div>
        <ol>
          <li><strong>Total equal parts:</strong> 9.</li>
          <li><strong>(a) Fraction for tomatoes:</strong><br>
          $\\text{Fraction} = \\frac{3}{9} = \\mathbf{\\frac{1}{3}}$.</li>
          <li><strong>(b) Smallest vegetable part:</strong><br>
          Spinach occupies 1 part out of 9 ($\\frac{1}{9}$), which is the <strong>smallest fraction</strong>.</li>
          <li><strong>(c) Fraction for potatoes and brinjals combined:</strong><br>
          $\\text{Combined Fraction} = \\frac{3}{9} + \\frac{2}{9} = \\mathbf{\\frac{5}{9}}$.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Part (a): 3/9 = 1/3 for tomatoes", marks: "1.5 Marks" },
        { key: "Part (b): Spinach (1/9) is the smallest part", marks: "1 Mark" },
        { key: "Part (c): 3/9 + 2/9 = 5/9 combined fraction", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Manju had a chocolate bar with 12 equal pieces. She gave one-fourth (1/4) of it to Raji, one-third (1/3) to Sugatha, and one-sixth (1/6) to Sheela. How many pieces did each friend get, and how many pieces were left for Manju? What fraction was left for Manju?",
      marks: 4,
      ans: `<div>
        <ol>
          <li><strong>Total pieces of chocolate:</strong> 12.</li>
          <li><strong>Raji's share:</strong> $\\frac{1}{4} \\times 12 = \\mathbf{3\\text{ pieces}}$.</li>
          <li><strong>Sugatha's share:</strong> $\\frac{1}{3} \\times 12 = \\mathbf{4\\text{ pieces}}$.</li>
          <li><strong>Sheela's share:</strong> $\\frac{1}{6} \\times 12 = \\mathbf{2\\text{ pieces}}$.</li>
          <li><strong>Total pieces given away:</strong> $3 + 4 + 2 = 9\\text{ pieces}$.</li>
          <li><strong>Pieces left for Manju:</strong> $12 - 9 = \\mathbf{3\\text{ pieces}}$.</li>
          <li><strong>Fraction left for Manju:</strong> $\\frac{3}{12} = \\mathbf{\\frac{1}{4}}$.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Calculations of Raji (3), Sugatha (4), Sheela (2)", marks: "2 Marks" },
        { key: "Calculation of remainder for Manju = 3 pieces and fraction = 1/4", marks: "2 Marks" }
      ]
    }
  ],

  // Chapter 5: Does it Look the Same?
  5: [
    {
      q: "Which of the following capital English letters look exactly the same after a half-turn (180° rotation): A, H, I, M, N, O, S, T, X, Z?",
      marks: 4,
      ans: `<div>
        <p>A letter looks identical after a half-turn (1/2 turn or 180° rotation) if it possesses <strong>point symmetry (order-2 rotational symmetry)</strong> about its center.</p>
        <ul>
          <li><strong>H:</strong> Turns upside down to form <strong>H</strong> (Yes).</li>
          <li><strong>I:</strong> Turns upside down to form <strong>I</strong> (Yes).</li>
          <li><strong>N:</strong> Turns upside down to form <strong>N</strong> (Yes).</li>
          <li><strong>O:</strong> Turns upside down to form <strong>O</strong> (Yes).</li>
          <li><strong>S:</strong> Turns upside down to form <strong>S</strong> (Yes).</li>
          <li><strong>X:</strong> Turns upside down to form <strong>X</strong> (Yes).</li>
          <li><strong>Z:</strong> Turns upside down to form <strong>Z</strong> (Yes).</li>
        </ul>
        <p><em>Letters that do NOT look the same:</em> A (becomes upside down &forall;), M (becomes W), T (becomes &bot;).</p>
        <p><strong>Final Answer:</strong> The letters are <strong>H, I, N, O, S, X, and Z</strong>.</p>
      </div>`,
      rubric: [
        { key: "Identifying symmetric letters: H, I, N, O, S, X, Z", marks: "3 Marks" },
        { key: "Explaining rotational symmetry rule", marks: "1 Mark" }
      ]
    }
  ],

  // Chapter 6: Be My Multiple, I'll be Your Factor
  6: [
    {
      q: "Draw the factor tree for the number 60 in two different ways, and write down its prime factorization.",
      marks: 4,
      ans: `<div>
        <p><strong>Prime Factorization of 60:</strong></p>
        <p><strong>Method 1 (Starting with 6 × 10):</strong><br>
        60 &rarr; $6 \\times 10$<br>
        $6 &rarr; 2 \\times 3$<br>
        $10 &rarr; 2 \\times 5$<br>
        Prime factors: $\\mathbf{2 \\times 2 \\times 3 \\times 5}$.</p>

        <p><strong>Method 2 (Starting with 4 × 15):</strong><br>
        60 &rarr; $4 \\times 15$<br>
        $4 &rarr; 2 \\times 2$<br>
        $15 &rarr; 3 \\times 5$<br>
        Prime factors: $\\mathbf{2 \\times 2 \\times 3 \\times 5}$.</p>
        <p><strong>Conclusion:</strong> Both trees resolve to the unique prime factorization: $\\mathbf{2^2 \\times 3 \\times 5}$.</p>
      </div>`,
      rubric: [
        { key: "Correct branch structure of Method 1", marks: "1.5 Marks" },
        { key: "Correct branch structure of Method 2", marks: "1.5 Marks" },
        { key: "Final prime factorization: 2 × 2 × 3 × 5", marks: "1 Mark" }
      ]
    },
    {
      q: "Find the smallest common multiple (LCM) of 4, 6, and 8. Explain how you arrived at the answer.",
      marks: 3,
      ans: `<div>
        <ol>
          <li>Multiples of 4: 4, 8, 12, 16, 20, <strong>24</strong>, 28, 32...</li>
          <li>Multiples of 6: 6, 12, 18, <strong>24</strong>, 30, 36...</li>
          <li>Multiples of 8: 8, 16, <strong>24</strong>, 32, 40...</li>
        </ol>
        <p>The smallest number appearing in all three lists is <strong>24</strong>.<br>
        Therefore, $\\mathbf{\\text{LCM}(4, 6, 8) = 24}$.</p>
      </div>`,
      rubric: [
        { key: "Listing multiples of 4, 6, and 8 correctly", marks: "2 Marks" },
        { key: "Identifying smallest common multiple = 24", marks: "1 Mark" }
      ]
    }
  ],

  // Chapter 7: Can You See the Pattern?
  7: [
    {
      q: "Fill the numbers from 46 to 54 in a 3×3 Magic Square grid such that the sum of the numbers in every row, column, and diagonal equals 150.",
      marks: 4,
      ans: `<div>
        <p><strong>Center Number Rule:</strong> The middle cell is the average of the 9 numbers: $\\frac{46 + 54}{2} = \\mathbf{50}$.</p>
        <p><strong>Completed Magic Square Grid:</strong></p>
        <table style="border-collapse:collapse;margin:10px auto;text-align:center;font-weight:700;">
          <tr>
            <td style="border:2px solid #334155;padding:12px 18px;background:#e0e7ff;">53</td>
            <td style="border:2px solid #334155;padding:12px 18px;background:#f8fafc;">46</td>
            <td style="border:2px solid #334155;padding:12px 18px;background:#e0e7ff;">51</td>
          </tr>
          <tr>
            <td style="border:2px solid #334155;padding:12px 18px;background:#f8fafc;">48</td>
            <td style="border:2px solid #334155;padding:12px 18px;background:#fef08a;">50</td>
            <td style="border:2px solid #334155;padding:12px 18px;background:#f8fafc;">52</td>
          </tr>
          <tr>
            <td style="border:2px solid #334155;padding:12px 18px;background:#e0e7ff;">49</td>
            <td style="border:2px solid #334155;padding:12px 18px;background:#f8fafc;">54</td>
            <td style="border:2px solid #334155;padding:12px 18px;background:#e0e7ff;">47</td>
          </tr>
        </table>
        <p><strong>Check Sums:</strong><br>
        Row 1: $53 + 46 + 51 = 150$.<br>
        Row 2: $48 + 50 + 52 = 150$.<br>
        Row 3: $49 + 54 + 47 = 150$.<br>
        Diagonals: $53 + 50 + 47 = 150$, $51 + 50 + 49 = 150$.</p>
      </div>`,
      rubric: [
        { key: "Center number identification = 50", marks: "1 Mark" },
        { key: "Correct cell placements satisfying row, column, diagonal sums = 150", marks: "3 Marks" }
      ]
    }
  ],

  // Chapter 8: Mapping Your Way
  8: [
    {
      q: "On a school tour map, the scale is given as: 1 cm on the map = 200 km on the ground. (a) If the distance between two cities on the map is 3.5 cm, what is the actual ground distance? (b) If two hill stations are 500 km apart on the ground, how far apart will they be on the map?",
      marks: 4,
      ans: `<div>
        <ol>
          <li><strong>Given Scale:</strong> $1\\text{ cm} = 200\\text{ km}$.</li>
          <li><strong>(a) Actual distance for 3.5 cm:</strong><br>
          $\\text{Ground Distance} = 3.5 \\times 200\\text{ km} = \\mathbf{700\\text{ km}}$.</li>
          <li><strong>(b) Map distance for 500 km:</strong><br>
          $\\text{Map Distance} = \\frac{500}{200} = \\mathbf{2.5\\text{ cm}}$.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Part (a): 3.5 × 200 = 700 km", marks: "2 Marks" },
        { key: "Part (b): 500 / 200 = 2.5 cm", marks: "2 Marks" }
      ]
    }
  ],

  // Chapter 9: Boxes and Sketches
  9: [
    {
      q: "The numbers on opposite faces of a standard playing die always add up to 7. (a) If the top face shows 3, what number is on the bottom face? (b) If the front face shows 1, what number is on the back face? (c) Can a flat net with opposite faces showing 4 and 2 fold into a standard playing die? Explain.",
      marks: 3,
      ans: `<div>
        <ol>
          <li><strong>(a) Bottom face:</strong> Opposite to 3 is $7 - 3 = \\mathbf{4}$.</li>
          <li><strong>(b) Back face:</strong> Opposite to 1 is $7 - 1 = \\mathbf{6}$.</li>
          <li><strong>(c) Folding validity:</strong> <strong>No</strong>, because on a standard die opposite faces must sum to 7. Here $4 + 2 = 6 \\neq 7$. Opposite to 4 must be 3, and opposite to 2 must be 5.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Part (a): 7 - 3 = 4", marks: "1 Mark" },
        { key: "Part (b): 7 - 1 = 6", marks: "1 Mark" },
        { key: "Part (c): No, because 4 + 2 = 6 != 7 rule", marks: "1 Mark" }
      ]
    }
  ],

  // Chapter 10: Tenths and Hundredths
  10: [
    {
      q: "Convert the following measurements into decimals: (a) 4 cm 8 mm into centimeters, (b) 75 paise into rupees, (c) 3 meters 45 centimeters into meters, (d) 5 mm into centimeters.",
      marks: 4,
      ans: `<div>
        <ul>
          <li><strong>(a) 4 cm 8 mm:</strong> Since $1\\text{ mm} = 0.1\\text{ cm}$, $8\\text{ mm} = 0.8\\text{ cm}$. Total = $4 + 0.8 = \\mathbf{4.8\\text{ cm}}$.</li>
          <li><strong>(b) 75 paise:</strong> Since $100\\text{ paise} = ₹1$, $75\\text{ paise} = \\frac{75}{100} = \\mathbf{₹0.75}$.</li>
          <li><strong>(c) 3 m 45 cm:</strong> Since $100\\text{ cm} = 1\\text{ m}$, $45\\text{ cm} = 0.45\\text{ m}$. Total = $3 + 0.45 = \\mathbf{3.45\\text{ m}}$.</li>
          <li><strong>(d) 5 mm:</strong> $\\frac{5}{10} = \\mathbf{0.5\\text{ cm}}$.</li>
        </ul>
      </div>`,
      rubric: [
        { key: "Part (a): 4.8 cm", marks: "1 Mark" },
        { key: "Part (b): ₹0.75", marks: "1 Mark" },
        { key: "Part (c): 3.45 m", marks: "1 Mark" },
        { key: "Part (d): 0.5 cm", marks: "1 Mark" }
      ]
    },
    {
      q: "On a winter afternoon at 3:00 PM, temperatures recorded were: Srinagar 8.1°C, Jaipur 24.3°C, Mumbai 35.1°C, and Chennai 29.8°C. (a) Which place was the hottest and which was the coldest? (b) What was the difference in temperature between Mumbai and Srinagar?",
      marks: 3,
      ans: `<div>
        <ol>
          <li><strong>(a) Hottest & Coldest:</strong><br>
          Hottest city: <strong>Mumbai (35.1°C)</strong>.<br>
          Coldest city: <strong>Srinagar (8.1°C)</strong>.</li>
          <li><strong>(b) Temperature difference:</strong><br>
          $\\text{Difference} = 35.1^\\circ\\text{C} - 8.1^\\circ\\text{C} = \\mathbf{27.0^\\circ\\text{C}}$.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Hottest = Mumbai, Coldest = Srinagar", marks: "1.5 Marks" },
        { key: "Difference = 35.1 - 8.1 = 27.0°C", marks: "1.5 Marks" }
      ]
    }
  ],

  // Chapter 11: Area and its Boundary
  11: [
    {
      q: "Arbaz plans to tile his kitchen floor with green square tiles of size 10 cm × 10 cm. The length of the floor is 200 cm and the width is 150 cm. (a) What is the area of the kitchen floor? (b) What is the area of one tile? (c) How many tiles will he need?",
      marks: 4,
      ans: `<div>
        <ol>
          <li><strong>(a) Area of the floor:</strong><br>
          $\\text{Floor Area} = 200\\text{ cm} \\times 150\\text{ cm} = \\mathbf{30,000\\text{ cm}^2}$.</li>
          <li><strong>(b) Area of one tile:</strong><br>
          $\\text{Tile Area} = 10\\text{ cm} \\times 10\\text{ cm} = \\mathbf{100\\text{ cm}^2}$.</li>
          <li><strong>(c) Number of tiles needed:</strong><br>
          $\\text{Number of tiles} = \\frac{\\text{Floor Area}}{\\text{Tile Area}} = \\frac{30,000}{100} = \\mathbf{300\\text{ tiles}}$.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Floor Area = 200 × 150 = 30,000 cm²", marks: "1.5 Marks" },
        { key: "Tile Area = 100 cm²", marks: "1 Mark" },
        { key: "Total tiles = 30,000 / 100 = 300 tiles", marks: "1.5 Marks" }
      ]
    },
    {
      q: "A square has a side of 10 cm. A small square of side 1 cm is cut out from one corner. Does the boundary (perimeter) increase, decrease, or remain the same? What happens to the area?",
      marks: 3,
      ans: `<div>
        <ol>
          <li><strong>Original Square:</strong><br>
          $\\text{Perimeter} = 4 \\times 10 = 40\\text{ cm}$.<br>
          $\\text{Area} = 10 \\times 10 = 100\\text{ cm}^2$.</li>
          <li><strong>After cutting 1 cm square from corner:</strong><br>
          The two cut edges inside the corner measure $1\\text{ cm} + 1\\text{ cm} = 2\\text{ cm}$, which replace the two outer 1 cm segments removed.<br>
          Therefore, the boundary (perimeter) <strong>remains exactly the same (40 cm)</strong>.</li>
          <li><strong>Area:</strong><br>
          Area decreases by $1\\text{ cm}^2$: $\\text{New Area} = 100 - 1 = \\mathbf{99\\text{ cm}^2}$ (Decreases).</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Explanation that perimeter remains unchanged at 40 cm", marks: "1.5 Marks" },
        { key: "Explanation that area decreases to 99 cm²", marks: "1.5 Marks" }
      ]
    }
  ],

  // Chapter 12: Smart Charts
  12: [
    {
      q: "In a class of 40 students, a Chapati Chart (Pie Chart) shows their favorite sports: 1/2 of the students like Cricket, 1/4 like Football, and 1/4 like Badminton. (a) How many students like Cricket? (b) How many like Football? (c) How many like Badminton?",
      marks: 3,
      ans: `<div>
        <ol>
          <li><strong>Total students:</strong> 40.</li>
          <li><strong>(a) Cricket:</strong> $\\frac{1}{2} \\times 40 = \\mathbf{20\\text{ students}}$.</li>
          <li><strong>(b) Football:</strong> $\\frac{1}{4} \\times 40 = \\mathbf{10\\text{ students}}$.</li>
          <li><strong>(c) Badminton:</strong> $\\frac{1}{4} \\times 40 = \\mathbf{10\\text{ students}}$.</li>
        </ol>
        <p><em>Check:</em> $20 + 10 + 10 = 40$ students.</p>
      </div>`,
      rubric: [
        { key: "Cricket: 1/2 × 40 = 20", marks: "1 Mark" },
        { key: "Football: 1/4 × 40 = 10", marks: "1 Mark" },
        { key: "Badminton: 1/4 × 40 = 10", marks: "1 Mark" }
      ]
    }
  ],

  // Chapter 13: Ways to Multiply and Divide
  13: [
    {
      q: "Sohanlal drinks 8 glasses of water every day. (a) How many glasses of water will he drink in one non-leap year (365 days)? (b) If 125 people living in a residential colony drink 8 glasses each day, how many glasses will they drink altogether in one month of 30 days?",
      marks: 4,
      ans: `<div>
        <ol>
          <li><strong>(a) Glasses in 365 days:</strong><br>
          $\\text{Total glasses} = 365 \\times 8 = \\mathbf{2,920\\text{ glasses}}$.</li>
          <li><strong>(b) Glasses by 125 people in 30 days:</strong><br>
          Glasses drunk by colony in 1 day = $125 \\times 8 = 1,000\\text{ glasses}$.<br>
          Glasses in 30 days = $1,000 \\times 30 = \\mathbf{30,000\\text{ glasses}}$.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Part (a): 365 × 8 = 2,920 glasses", marks: "2 Marks" },
        { key: "Part (b): 125 × 8 × 30 = 30,000 glasses", marks: "2 Marks" }
      ]
    },
    {
      q: "A school ordered 576 notebooks to be packed equally into 18 boxes. How many notebooks were packed in each box? Check your answer using multiplication.",
      marks: 3,
      ans: `<div>
        <ol>
          <li><strong>Total notebooks:</strong> 576.</li>
          <li><strong>Total boxes:</strong> 18.</li>
          <li><strong>Notebooks per box:</strong><br>
          $576 \\div 18 = \\mathbf{32\\text{ notebooks}}$.</li>
          <li><strong>Verification Check:</strong><br>
          $\\text{Quotient} \\times \\text{Divisor} = 32 \\times 18 = 32 \\times (10 + 8) = 320 + 256 = 576$ (Correct).</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Division: 576 / 18 = 32 notebooks", marks: "2 Marks" },
        { key: "Multiplication verification: 32 × 18 = 576", marks: "1 Mark" }
      ]
    }
  ],

  // Chapter 14: How Big? How Heavy?
  14: [
    {
      q: "A measuring glass is filled with water. Dropping 6 identical glass marbles into the water raises the water level by 12 ml. (a) What is the volume of 1 marble in ml? (b) How many ml of water will be displaced if 25 marbles are dropped?",
      marks: 3,
      ans: `<div>
        <ol>
          <li><strong>Given:</strong> Volume displaced by 6 marbles = 12 ml.</li>
          <li><strong>(a) Volume of 1 marble:</strong><br>
          $\\text{Volume} = \\frac{12}{6} = \\mathbf{2\\text{ ml}}$.</li>
          <li><strong>(b) Volume displaced by 25 marbles:</strong><br>
          $\\text{Volume} = 25 \\times 2\\text{ ml} = \\mathbf{50\\text{ ml}}$.</li>
        </ol>
      </div>`,
      rubric: [
        { key: "Part (a): 12 / 6 = 2 ml", marks: "1.5 Marks" },
        { key: "Part (b): 25 × 2 = 50 ml", marks: "1.5 Marks" }
      ]
    },
    {
      q: "A big cardboard carton has internal dimensions: length = 30 cm, width = 20 cm, and height = 10 cm. How many small cubic blocks of side 2 cm can be completely packed inside this carton?",
      marks: 4,
      ans: `<div>
        <ol>
          <li><strong>Volume of the cardboard carton:</strong><br>
          $\\text{Carton Volume} = 30 \\times 20 \\times 10 = \\mathbf{6,000\\text{ cm}^3}$.</li>
          <li><strong>Volume of one cubic block:</strong><br>
          $\\text{Block Volume} = 2 \\times 2 \\times 2 = \\mathbf{8\\text{ cm}^3}$.</li>
          <li><strong>Number of blocks packed:</strong><br>
          $\\text{Number} = \\frac{\\text{Carton Volume}}{\\text{Block Volume}} = \\frac{6,000}{8} = \\mathbf{750\\text{ blocks}}$.</li>
        </ol>
        <p><em>Grid Check:</em> Along length: $30 \\div 2 = 15$. Along width: $20 \\div 2 = 10$. Along height: $10 \\div 2 = 5$. Total $= 15 \\times 10 \\times 5 = 750$ blocks.</p>
      </div>`,
      rubric: [
        { key: "Carton volume = 30 × 20 × 10 = 6,000 cm³", marks: "1.5 Marks" },
        { key: "Block volume = 2³ = 8 cm³", marks: "1 Mark" },
        { key: "Total blocks = 6000 / 8 = 750 blocks", marks: "1.5 Marks" }
      ]
    }
  ]
};

module.exports = { mathMagicExtra };
