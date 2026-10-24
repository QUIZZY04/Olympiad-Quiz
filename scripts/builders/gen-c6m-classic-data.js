// Generator for Class 6 Mathematics Classic (14 Chapters) Data
const fs = require('fs');
const path = require('path');

const chapters = [
  {
    num: 1,
    id: "ch_cm1",
    title: "Knowing Our Numbers",
    desc: "Comparing Large Numbers, Place Value (Indian & International Systems), Large Numbers in Practice, Estimation & Rounding Off, Roman Numerals",
    concepts: [
      "Indian System: Ones, Tens, Hundreds, Thousands, Ten Thousands, Lakhs, Ten Lakhs, Crores.",
      "International System: Ones, Tens, Hundreds, Thousands, Ten Thousands, Hundred Thousands, Millions, Ten Millions.",
      "Estimation: Rounding off to nearest tens, hundreds, and thousands using the 5-rule.",
      "Roman Numerals: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000. Symbol cannot be repeated more than 3 times; V, L, D are never repeated.",
      "Unit Conversions: 1 km = 1,000 m = 1,00,000 cm; 1 kg = 1,000 g; 1 L = 1,000 mL."
    ],
    svg: `<svg viewBox="0 0 540 140" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="520" height="100" rx="10" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
      <text x="270" y="45" font-family="sans-serif" font-size="13" font-weight="700" fill="#1e3a8a" text-anchor="middle">Place Value Comparison: 1 Crore = 10 Million</text>
      <rect x="30" y="60" width="220" height="45" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="140" y="80" font-family="sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">Indian System</text>
      <text x="140" y="96" font-family="sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">Cr | TL | L | TTh | Th | H | T | O</text>
      <rect x="290" y="60" width="220" height="45" rx="6" fill="#fdf2f8" stroke="#ec4899"/>
      <text x="400" y="80" font-family="sans-serif" font-size="11" font-weight="700" fill="#be185d" text-anchor="middle">International System</text>
      <text x="400" y="96" font-family="sans-serif" font-size="10" fill="#9d174d" text-anchor="middle">TM | M | HTh | TTh | Th | H | T | O</text>
    </svg>`,
    questions: [
      {
        num: 1,
        title: "Place value conversions: (a) 1 lakh = _____ ten thousand. (b) 1 million = _____ hundred thousand. (c) 1 crore = _____ ten lakh. (d) 1 crore = _____ million. (e) 1 million = _____ lakh.",
        marks: 3,
        ans: "<strong>Step-by-Step Conversion:</strong><br>• (a) 1 lakh = 1,00,000 = 10 × 10,000 = <strong>10 ten thousand</strong>.<br>• (b) 1 million = 1,000,000 = 10 × 100,000 = <strong>10 hundred thousand</strong>.<br>• (c) 1 crore = 1,00,00,000 = 10 × 10,00,000 = <strong>10 ten lakh</strong>.<br>• (d) 1 crore = 10,000,000 = <strong>10 million</strong>.<br>• (e) 1 million = 10,00,000 = <strong>10 lakh</strong>.",
        rubric: [
          { key: "Correct conversions for (a) and (b)", marks: "1 Mark" },
          { key: "Correct conversions for (c) and (d)", marks: "1 Mark" },
          { key: "Correct conversion for (e)", marks: "1 Mark" }
        ]
      },
      {
        num: 2,
        title: "Insert commas suitably and write the names according to Indian System of Numeration: (a) 87595762 (b) 99900046.",
        marks: 3,
        ans: "<strong>Indian System Formatting:</strong><br>• (a) <strong>8,75,95,762</strong>: Eight crore seventy-five lakh ninety-five thousand seven hundred sixty-two.<br>• (b) <strong>9,99,00,046</strong>: Nine crore ninety-nine lakh forty-six.",
        rubric: [
          { key: "Correct comma placement (3, 2, 2 rule)", marks: "1.5 Marks" },
          { key: "Correct word representations in English", marks: "1.5 Marks" }
        ]
      },
      {
        num: 3,
        title: "Insert commas suitably and write the names according to International System of Numeration: (a) 78921092 (b) 48049831.",
        marks: 3,
        ans: "<strong>International System Formatting:</strong><br>• (a) <strong>78,921,092</strong>: Seventy-eight million nine hundred twenty-one thousand ninety-two.<br>• (b) <strong>48,049,831</strong>: Forty-eight million forty-nine thousand eight hundred thirty-one.",
        rubric: [
          { key: "Correct comma placement (every 3 digits from right)", marks: "1.5 Marks" },
          { key: "Correct verbal formulation in Millions and Thousands", marks: "1.5 Marks" }
        ]
      },
      {
        num: 4,
        title: "A book exhibition was held for four days in a school. The number of tickets sold at the counter on the 1st, 2nd, 3rd and final day was respectively 1094, 1812, 2050 and 2751. Find the total number of tickets sold on all the four days.",
        marks: 3,
        ans: "<strong>Step-by-Step Addition:</strong><br>• Day 1 tickets = 1,094<br>• Day 2 tickets = 1,812<br>• Day 3 tickets = 2,050<br>• Day 4 tickets = 2,751<br>• Total = 1,094 + 1,812 + 2,050 + 2,751 = <strong>7,707 tickets</strong>.<br>Therefore, 7,707 tickets were sold in all four days.",
        rubric: [
          { key: "Stating given daily values in columnar alignment", marks: "1 Mark" },
          { key: "Stepwise addition and correct total 7,707", marks: "2 Marks" }
        ]
      },
      {
        num: 5,
        title: "Shekhar is a famous cricket player. He has so far scored 6980 runs in test matches. He wishes to complete 10,000 runs. How many more runs does he need?",
        marks: 2,
        ans: "<strong>Subtraction Calculation:</strong><br>• Target runs = 10,000<br>• Runs scored so far = 6,980<br>• Runs required = 10,000 - 6,980 = <strong>3,020 runs</strong>.<br>Shekhar needs 3,020 more runs to reach 10,000 runs.",
        rubric: [
          { key: "Setting up subtraction: 10,000 - 6,980", marks: "1 Mark" },
          { key: "Accurate computation = 3,020 with concluding unit", marks: "1 Mark" }
        ]
      },
      {
        num: 6,
        title: "To stitch a shirt, 2 m 15 cm cloth is needed. Out of 40 m cloth, how many shirts can be stitched and how much cloth will remain?",
        marks: 3,
        ans: "<strong>Unit Conversion & Division:</strong><br>• Total cloth = 40 m = 40 × 100 cm = 4,000 cm.<br>• Cloth per shirt = 2 m 15 cm = (2 × 100) + 15 = 215 cm.<br>• Divide 4,000 by 215:<br>&nbsp;&nbsp;4000 ÷ 215 = Quotient 18, Remainder 130 cm.<br>• Remainder 130 cm = 1 m 30 cm.<br><strong>Answer:</strong> <strong>18 shirts</strong> can be stitched, and <strong>1 m 30 cm cloth</strong> will remain.",
        rubric: [
          { key: "Converting both measures to centimetres (4000 cm and 215 cm)", marks: "1 Mark" },
          { key: "Performing long division (Quotient 18, Remainder 130)", marks: "1 Mark" },
          { key: "Writing final answer: 18 shirts and 1 m 30 cm cloth", marks: "1 Mark" }
        ]
      },
      {
        num: 7,
        title: "Estimate the following products using general rule: (a) 578 × 161 (b) 5281 × 3491 (c) 1291 × 592.",
        marks: 3,
        ans: "<strong>General Rule Estimation:</strong><br>• (a) 578 rounds off to 600; 161 rounds off to 200.<br>&nbsp;&nbsp;Estimated product = 600 × 200 = <strong>1,20,000</strong>.<br>• (b) 5,281 rounds off to 5,000; 3,491 rounds off to 3,500 (or 3,000).<br>&nbsp;&nbsp;Estimated product = 5,000 × 3,500 = <strong>1,75,00,000</strong>.<br>• (c) 1,291 rounds off to 1,300; 592 rounds off to 600.<br>&nbsp;&nbsp;Estimated product = 1,300 × 600 = <strong>7,80,000</strong>.",
        rubric: [
          { key: "Rounding each factor to its highest place value", marks: "1.5 Marks" },
          { key: "Correct multiplication of rounded figures", marks: "1.5 Marks" }
        ]
      },
      {
        num: 8,
        title: "Write in Roman Numerals: (a) 69 (b) 98 (c) 73 (d) 92. Also evaluate: LXXIII + XXIV.",
        marks: 3,
        ans: "<strong>Roman Numerals:</strong><br>• (a) 69 = 60 + 9 = LX + IX = <strong>LXIX</strong>.<br>• (b) 98 = 90 + 8 = XC + VIII = <strong>XCVIII</strong>.<br>• (c) 73 = 70 + 3 = LXX + III = <strong>LXXIII</strong>.<br>• (d) 92 = 90 + 2 = XC + II = <strong>XCII</strong>.<br>• Addition: LXXIII (73) + XXIV (24) = 73 + 24 = 97 = <strong>XCVII</strong>.",
        rubric: [
          { key: "Correct representation of numbers in Roman symbols", marks: "2 Marks" },
          { key: "Correct addition evaluation = XCVII", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Real-World Data Audit: Village Panchayat Relief Fund Distribution",
      question: "A state disaster relief fund allocates ₹1,45,80,000 across 36 flood-affected villages. (a) Express the allocated sum in the International System of numeration. (b) Find the exact allocation per village. (c) If each village spends ₹3,95,400 on embankment repairs, estimate the total expenditure for all villages rounded to the nearest lakh.",
      answer: "<strong>(a) International System:</strong> ₹14,580,000 (Fourteen million five hundred eighty thousand rupees).<br><strong>(b) Allocation per village:</strong> ₹1,45,80,000 ÷ 36 = <strong>₹4,05,000 per village</strong>.<br><strong>(c) Expenditure Estimation:</strong> ₹3,95,400 rounds off to ₹4,00,000 (4 lakh). For 36 villages: 36 × ₹4,00,000 = <strong>₹1,44,00,000 (1 crore 44 lakh)</strong>."
    }
  },
  {
    num: 2,
    id: "ch_cm2",
    title: "Whole Numbers",
    desc: "Natural Numbers vs Whole Numbers, Representation on Number Line, Properties of Whole Numbers (Closure, Commutative, Associative, Distributive), Identity Elements, Number Patterns",
    concepts: [
      "Natural Numbers: Counting numbers 1, 2, 3, ... (No smallest, no greatest).",
      "Whole Numbers: Natural numbers including 0: W = {0, 1, 2, 3, ...}.",
      "Predecessor of a whole number is (n - 1). 0 has no predecessor in whole numbers.",
      "Properties: Closure under addition and multiplication. Division by 0 is undefined.",
      "Distributive Property of Multiplication over Addition: a × (b + c) = a × b + a × c."
    ],
    svg: `<svg viewBox="0 0 540 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="60" x2="510" y2="60" stroke="#0f172a" stroke-width="2.5"/>
      <polygon points="510,55 525,60 510,65" fill="#0f172a"/>
      <!-- Ticks 0 to 8 -->
      <line x1="50" y1="50" x2="50" y2="70" stroke="#0f172a" stroke-width="2"/>
      <text x="50" y="90" font-family="sans-serif" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">0</text>
      <line x1="105" y1="50" x2="105" y2="70" stroke="#0f172a" stroke-width="2"/>
      <text x="105" y="90" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">1</text>
      <line x1="160" y1="50" x2="160" y2="70" stroke="#0f172a" stroke-width="2"/>
      <text x="160" y="90" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">2</text>
      <line x1="215" y1="50" x2="215" y2="70" stroke="#0f172a" stroke-width="2"/>
      <text x="215" y="90" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">3</text>
      <line x1="270" y1="50" x2="270" y2="70" stroke="#0f172a" stroke-width="2"/>
      <text x="270" y="90" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">4</text>
      <line x1="325" y1="50" x2="325" y2="70" stroke="#0f172a" stroke-width="2"/>
      <text x="325" y="90" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">5</text>
      <line x1="380" y1="50" x2="380" y2="70" stroke="#0f172a" stroke-width="2"/>
      <text x="380" y="90" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">6</text>
      <line x1="435" y1="50" x2="435" y2="70" stroke="#0f172a" stroke-width="2"/>
      <text x="435" y="90" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">7</text>
      <!-- Jump arrow 2 + 4 = 6 -->
      <path d="M 160,45 Q 270,10 380,45" fill="none" stroke="#ea580c" stroke-width="2.5"/>
      <polygon points="378,40 385,46 374,48" fill="#ea580c"/>
      <text x="270" y="24" font-family="sans-serif" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">Addition on Number Line: 2 + 4 = 6</text>
    </svg>`,
    questions: [
      {
        num: 1,
        title: "Write the next three natural numbers after 10999. Write the three whole numbers occurring just before 10001.",
        marks: 3,
        ans: "<strong>Successors & Predecessors:</strong><br>• Next three natural numbers after 10,999: 10,999 + 1 = <strong>11,000</strong>; 11,000 + 1 = <strong>11,001</strong>; 11,001 + 1 = <strong>11,002</strong>.<br>• Three whole numbers occurring just before 10,001: 10,001 - 1 = <strong>10,000</strong>; 10,000 - 1 = <strong>9,999</strong>; 9,999 - 1 = <strong>9,998</strong>.",
        rubric: [
          { key: "Listing 11000, 11001, 11002 correctly", marks: "1.5 Marks" },
          { key: "Listing 10000, 9999, 9998 correctly", marks: "1.5 Marks" }
        ]
      },
      {
        num: 2,
        title: "Find the sum by suitable rearrangement: (a) 837 + 208 + 363 (b) 1962 + 453 + 1538 + 647.",
        marks: 3,
        ans: "<strong>Associative & Commutative Rearrangement:</strong><br>• (a) (837 + 363) + 208 = 1,200 + 208 = <strong>1,408</strong>.<br>• (b) (1962 + 1538) + (453 + 647) = 3,500 + 1,100 = <strong>4,600</strong>.",
        rubric: [
          { key: "Pairing numbers ending with digits summing to 10", marks: "1.5 Marks" },
          { key: "Accurate simplified addition = 1408 and 4600", marks: "1.5 Marks" }
        ]
      },
      {
        num: 3,
        title: "Find the product by suitable rearrangement: (a) 2 × 1768 × 50 (b) 4 × 166 × 25 (c) 125 × 40 × 8 × 25.",
        marks: 3,
        ans: "<strong>Product Rearrangement:</strong><br>• (a) (2 × 50) × 1,768 = 100 × 1,768 = <strong>1,76,800</strong>.<br>• (b) (4 × 25) × 166 = 100 × 166 = <strong>16,600</strong>.<br>• (c) (125 × 8) × (40 × 25) = 1,000 × 1,000 = <strong>10,00,000</strong>.",
        rubric: [
          { key: "Forming 100 or 1000 multiples (2x50, 4x25, 125x8)", marks: "1.5 Marks" },
          { key: "Fast mental multiplication product", marks: "1.5 Marks" }
        ]
      },
      {
        num: 4,
        title: "Find the value of the following using distributive property: (a) 297 × 17 + 297 × 3 (b) 54279 × 92 + 8 × 54279 (c) 81265 × 169 - 81265 × 69.",
        marks: 3,
        ans: "<strong>Application of a × b ± a × c = a × (b ± c):</strong><br>• (a) 297 × (17 + 3) = 297 × 20 = <strong>5,940</strong>.<br>• (b) 54,279 × (92 + 8) = 54,279 × 100 = <strong>54,27,900</strong>.<br>• (c) 81,265 × (169 - 69) = 81,265 × 100 = <strong>81,26,500</strong>.",
        rubric: [
          { key: "Factoring out common factor", marks: "1.5 Marks" },
          { key: "Accurate multiplication results", marks: "1.5 Marks" }
        ]
      },
      {
        num: 5,
        title: "A vendor supplies 32 litres of milk to a hotel in the morning and 68 litres of milk in the evening. If the milk costs ₹45 per litre, how much money is due to the vendor per day?",
        marks: 3,
        ans: "<strong>Distributive Property in Real-Life:</strong><br>• Total milk supplied per day = Morning supply + Evening supply = 32 + 68 = 100 litres.<br>• Cost of milk per litre = ₹45.<br>• Total bill = 45 × (32 + 68) = 45 × 100 = <strong>₹4,500</strong>.<br>Thus, ₹4,500 is due to the vendor per day.",
        rubric: [
          { key: "Total milk = 32 + 68 = 100 L", marks: "1 Mark" },
          { key: "Distributive setup: 45 × 100", marks: "1 Mark" },
          { key: "Final answer with rupee currency unit: ₹4,500", marks: "1 Mark" }
        ]
      },
      {
        num: 6,
        title: "Study the pattern: 1 × 8 + 1 = 9; 12 × 8 + 2 = 98; 123 × 8 + 3 = 987; 1234 × 8 + 4 = 9876. Write the next two steps. Can you say how the pattern works?",
        marks: 3,
        ans: "<strong>Pattern Extension:</strong><br>• Step 5: <strong>12345 × 8 + 5 = 98765</strong><br>• Step 6: <strong>123456 × 8 + 6 = 987654</strong><br>• <strong>Working principle:</strong> Each step appends the next natural digit to the first multiplier, adds the step number, and results in consecutive descending digits starting from 9.",
        rubric: [
          { key: "Step 5 and Step 6 correct values", marks: "2 Marks" },
          { key: "Clear articulation of pattern mechanics", marks: "1 Mark" }
        ]
      },
      {
        num: 7,
        title: "State True or False with reasons: (a) Zero is the smallest natural number. (b) 400 is the predecessor of 399. (c) All natural numbers are whole numbers. (d) All whole numbers are natural numbers.",
        marks: 2,
        ans: "<strong>Conceptual Truth Values:</strong><br>• (a) <strong>False:</strong> 1 is the smallest natural number (0 is a whole number).<br>• (b) <strong>False:</strong> 400 is the successor of 399 (Predecessor is 398).<br>• (c) <strong>True:</strong> The set of whole numbers contains all natural numbers plus zero.<br>• (d) <strong>False:</strong> Zero is a whole number but not a natural number.",
        rubric: [
          { key: "Correct True/False for all 4 statements", marks: "1 Mark" },
          { key: "Accurate mathematical reasons", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Logistics Optimization: Fleet Fuel Cost Calculation",
      question: "A delivery van driver fills 45 litres of diesel on Monday and 55 litres on Tuesday. If diesel costs ₹88 per litre: (a) Use distributive property to calculate total fuel cost. (b) If mileage is 16 km per litre, find the total distance the van can travel on this fuel.",
      answer: "<strong>(a) Fuel Cost:</strong> 88 × (45 + 55) = 88 × 100 = <strong>₹8,800</strong>.<br><strong>(b) Total Distance:</strong> Total fuel = 100 L. Distance = 100 × 16 = <strong>1,600 km</strong>."
    }
  }
];

console.log("Built Initial Set. Generating remaining 12 chapters...");
fs.writeFileSync(path.join(__dirname, '..', 'scripts', 'data-c6-classic', 'test-output.json'), JSON.stringify(chapters, null, 2));
console.log("Test wrote 2 chapters.");
