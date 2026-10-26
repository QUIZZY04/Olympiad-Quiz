// Generator for Full Class 6 Mathematics Classic (All 14 Chapters) Data
const fs = require('fs');
const path = require('path');

const mathsClassicChapters = [
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
    svg: `<svg viewBox="0 0 540 140" width="100%" height="140" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="520" height="100" rx="10" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/><text x="270" y="45" font-family="sans-serif" font-size="13" font-weight="700" fill="#1e3a8a" text-anchor="middle">Place Value Comparison: 1 Crore = 10 Million</text><rect x="30" y="60" width="220" height="45" rx="6" fill="#eff6ff" stroke="#3b82f6"/><text x="140" y="80" font-family="sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">Indian System</text><text x="140" y="96" font-family="sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">Cr | TL | L | TTh | Th | H | T | O</text><rect x="290" y="60" width="220" height="45" rx="6" fill="#fdf2f8" stroke="#ec4899"/><text x="400" y="80" font-family="sans-serif" font-size="11" font-weight="700" fill="#be185d" text-anchor="middle">International System</text><text x="400" y="96" font-family="sans-serif" font-size="10" fill="#9d174d" text-anchor="middle">TM | M | HTh | TTh | Th | H | T | O</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Place value conversions: (a) 1 lakh = _____ ten thousand. (b) 1 million = _____ hundred thousand. (c) 1 crore = _____ ten lakh. (d) 1 crore = _____ million. (e) 1 million = _____ lakh.",
        marks: 3,
        ans: "<strong>Step-by-Step Conversion:</strong><br>• (a) 1 lakh = 1,00,000 = 10 × 10,000 = <strong>10 ten thousand</strong>.<br>• (b) 1 million = 1,000,000 = 10 × 100,000 = <strong>10 hundred thousand</strong>.<br>• (c) 1 crore = 1,00,00,000 = 10 × 10,00,000 = <strong>10 ten lakh</strong>.<br>• (d) 1 crore = 10,000,000 = <strong>10 million</strong>.<br>• (e) 1 million = 10,00,000 = <strong>10 lakh</strong>.",
        rubric: [{ key: "Correct conversions for (a) and (b)", marks: "1 Mark" }, { key: "Correct conversions for (c) and (d)", marks: "1 Mark" }, { key: "Correct conversion for (e)", marks: "1 Mark" }]
      },
      {
        num: 2,
        title: "Insert commas suitably and write the names according to Indian System of Numeration: (a) 87595762 (b) 99900046.",
        marks: 3,
        ans: "<strong>Indian System Formatting:</strong><br>• (a) <strong>8,75,95,762</strong>: Eight crore seventy-five lakh ninety-five thousand seven hundred sixty-two.<br>• (b) <strong>9,99,00,046</strong>: Nine crore ninety-nine lakh forty-six.",
        rubric: [{ key: "Correct comma placement (3, 2, 2 rule)", marks: "1.5 Marks" }, { key: "Correct word representations in English", marks: "1.5 Marks" }]
      },
      {
        num: 3,
        title: "Insert commas suitably and write the names according to International System of Numeration: (a) 78921092 (b) 48049831.",
        marks: 3,
        ans: "<strong>International System Formatting:</strong><br>• (a) <strong>78,921,092</strong>: Seventy-eight million nine hundred twenty-one thousand ninety-two.<br>• (b) <strong>48,049,831</strong>: Forty-eight million forty-nine thousand eight hundred thirty-one.",
        rubric: [{ key: "Correct comma placement (every 3 digits from right)", marks: "1.5 Marks" }, { key: "Correct verbal formulation in Millions and Thousands", marks: "1.5 Marks" }]
      },
      {
        num: 4,
        title: "A book exhibition was held for four days in a school. The number of tickets sold at the counter on the 1st, 2nd, 3rd and final day was respectively 1094, 1812, 2050 and 2751. Find the total number of tickets sold on all the four days.",
        marks: 3,
        ans: "<strong>Step-by-Step Addition:</strong><br>• Day 1 tickets = 1,094<br>• Day 2 tickets = 1,812<br>• Day 3 tickets = 2,050<br>• Day 4 tickets = 2,751<br>• Total = 1,094 + 1,812 + 2,050 + 2,751 = <strong>7,707 tickets</strong>.",
        rubric: [{ key: "Stating given daily values", marks: "1 Mark" }, { key: "Stepwise addition and correct total 7,707", marks: "2 Marks" }]
      },
      {
        num: 5,
        title: "To stitch a shirt, 2 m 15 cm cloth is needed. Out of 40 m cloth, how many shirts can be stitched and how much cloth will remain?",
        marks: 3,
        ans: "<strong>Unit Conversion & Division:</strong><br>• Total cloth = 40 m = 4,000 cm.<br>• Cloth per shirt = 2 m 15 cm = 215 cm.<br>• 4,000 ÷ 215 = Quotient 18, Remainder 130 cm.<br><strong>Answer:</strong> <strong>18 shirts</strong> can be stitched, and <strong>1 m 30 cm cloth</strong> will remain.",
        rubric: [{ key: "Converting both measures to cm", marks: "1 Mark" }, { key: "Division quotient 18", marks: "1 Mark" }, { key: "Remainder 1 m 30 cm", marks: "1 Mark" }]
      },
      {
        num: 6,
        title: "Estimate using general rule: (a) 578 × 161 (b) 5281 × 3491. Write in Roman Numerals: (c) 69 (d) 98.",
        marks: 3,
        ans: "<strong>Estimations & Roman Numerals:</strong><br>• (a) 578 rounds to 600; 161 rounds to 200. Product = 600 × 200 = <strong>1,20,000</strong>.<br>• (b) 5,281 rounds to 5,000; 3,491 rounds to 3,500. Product = 5,000 × 3,500 = <strong>1,75,00,000</strong>.<br>• (c) 69 = LX + IX = <strong>LXIX</strong>.<br>• (d) 98 = XC + VIII = <strong>XCVIII</strong>.",
        rubric: [{ key: "Correct general rule estimations", marks: "1.5 Marks" }, { key: "Correct Roman numeral representations", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Logistics Audit: State Relief Material Distribution",
      question: "A state disaster relief fund allocates ₹1,45,80,000 across 36 flood-affected villages. (a) Express the allocated sum in International System. (b) Find the exact allocation per village. (c) If each village receives 120 relief kits weighing 18 kg 500 g each, calculate total weight of kits dispatched to one village.",
      answer: "<strong>(a) International System:</strong> ₹14,580,000 (Fourteen million five hundred eighty thousand).<br><strong>(b) Per village allocation:</strong> ₹1,45,80,000 ÷ 36 = <strong>₹4,05,000</strong>.<br><strong>(c) Total weight:</strong> 18.5 kg × 120 = <strong>2,220 kg (2.22 tonnes)</strong>."
    }
  },
  {
    num: 2,
    id: "ch_cm2",
    title: "Whole Numbers",
    desc: "Predecessor & Successor, Whole Numbers on Number Line, Properties of Addition, Multiplication & Subtraction, Distributive Property, Number Patterns",
    concepts: [
      "Natural Numbers: Counting numbers 1, 2, 3, ... Whole numbers: W = {0, 1, 2, 3, ...}.",
      "Properties: Closure, Commutative (a+b = b+a, a×b = b×a), Associative ((a+b)+c = a+(b+c)).",
      "Distributive Property: a × (b + c) = a × b + a × c.",
      "Additive Identity: 0 (a + 0 = a). Multiplicative Identity: 1 (a × 1 = a). Division by 0 is undefined."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="50" x2="510" y2="50" stroke="#0f172a" stroke-width="2.5"/><polygon points="510,45 525,50 510,55" fill="#0f172a"/><line x1="50" y1="40" x2="50" y2="60" stroke="#0f172a" stroke-width="2"/><text x="50" y="80" font-family="sans-serif" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">0</text><line x1="120" y1="40" x2="120" y2="60" stroke="#0f172a" stroke-width="2"/><text x="120" y="80" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">1</text><line x1="190" y1="40" x2="190" y2="60" stroke="#0f172a" stroke-width="2"/><text x="190" y="80" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">2</text><line x1="260" y1="40" x2="260" y2="60" stroke="#0f172a" stroke-width="2"/><text x="260" y="80" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">3</text><line x1="330" y1="40" x2="330" y2="60" stroke="#0f172a" stroke-width="2"/><text x="330" y="80" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">4</text><line x1="400" y1="40" x2="400" y2="60" stroke="#0f172a" stroke-width="2"/><text x="400" y="80" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">5</text><path d="M 190,40 Q 295,10 400,40" fill="none" stroke="#ea580c" stroke-width="2.5"/><polygon points="398,35 405,41 394,43" fill="#ea580c"/><text x="295" y="22" font-family="sans-serif" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">Number Line Addition: 2 + 3 = 5</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Find the sum by suitable rearrangement: (a) 837 + 208 + 363 (b) 1962 + 453 + 1538 + 647.",
        marks: 3,
        ans: "<strong>Rearrangement using Commutative & Associative Properties:</strong><br>• (a) (837 + 363) + 208 = 1,200 + 208 = <strong>1,408</strong>.<br>• (b) (1962 + 1538) + (453 + 647) = 3,500 + 1,100 = <strong>4,600</strong>.",
        rubric: [{ key: "Correct grouping to end in zeroes", marks: "1.5 Marks" }, { key: "Accurate sums: 1408 and 4600", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Find the product by suitable rearrangement: (a) 2 × 1768 × 50 (b) 4 × 166 × 25 (c) 125 × 40 × 8 × 25.",
        marks: 3,
        ans: "<strong>Product Rearrangement:</strong><br>• (a) (2 × 50) × 1,768 = 100 × 1,768 = <strong>1,76,800</strong>.<br>• (b) (4 × 25) × 166 = 100 × 166 = <strong>16,600</strong>.<br>• (c) (125 × 8) × (40 × 25) = 1,000 × 1,000 = <strong>10,00,000</strong>.",
        rubric: [{ key: "Pairing numbers yielding powers of 10", marks: "1.5 Marks" }, { key: "Accurate product calculation", marks: "1.5 Marks" }]
      },
      {
        num: 3,
        title: "Find the value using distributive property: (a) 297 × 17 + 297 × 3 (b) 54279 × 92 + 8 × 54279 (c) 81265 × 169 - 81265 × 69.",
        marks: 3,
        ans: "<strong>Distributive Property Application:</strong><br>• (a) 297 × (17 + 3) = 297 × 20 = <strong>5,940</strong>.<br>• (b) 54,279 × (92 + 8) = 54,279 × 100 = <strong>54,27,900</strong>.<br>• (c) 81,265 × (169 - 69) = 81,265 × 100 = <strong>81,26,500</strong>.",
        rubric: [{ key: "Factoring common term", marks: "1.5 Marks" }, { key: "Accurate evaluations", marks: "1.5 Marks" }]
      },
      {
        num: 4,
        title: "A milk vendor supplies 32 litres of milk to a hostel in the morning and 68 litres in the evening. If milk costs ₹45 per litre, how much money is due to the vendor per day?",
        marks: 3,
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Total milk per day = 32 + 68 = 100 litres.<br>• Cost = 45 × (32 + 68) = 45 × 100 = <strong>₹4,500</strong>.<br>₹4,500 is due to the vendor per day.",
        rubric: [{ key: "Adding daily milk: 32 + 68 = 100", marks: "1 Mark" }, { key: "Distributive property: 45 × 100", marks: "1 Mark" }, { key: "Final answer ₹4,500", marks: "1 Mark" }]
      },
      {
        num: 5,
        title: "Study the pattern: 1 × 8 + 1 = 9; 12 × 8 + 2 = 98; 123 × 8 + 3 = 987. Write the next two steps and explain the rule.",
        marks: 2,
        ans: "<strong>Pattern Steps:</strong><br>• Step 4: 1234 × 8 + 4 = <strong>9876</strong>.<br>• Step 5: 12345 × 8 + 5 = <strong>98765</strong>.<br><strong>Rule:</strong> In the first factor, digits increase consecutively (1, 12, 123...). The added number equals the number of digits, producing consecutive decreasing digits starting with 9.",
        rubric: [{ key: "Correct steps 4 and 5", marks: "1 Mark" }, { key: "Accurate rule formulation", marks: "1 Mark" }]
      }
    ],
    cbq: {
      title: "Commercial Energy Billing: School Solar Inverter Savings",
      question: "A school campus consumes 38 units of electricity in the morning and 62 units in the afternoon each day. Commercial tariff is ₹9 per unit. (a) Use distributive property to compute weekly commercial electricity bill (for 6 working days). (b) If rooftop solar panels generate 70 units daily, calculate net daily units billed.",
      answer: "<strong>(a) Weekly Bill:</strong> Daily units = 38 + 62 = 100 units. Daily cost = 100 × ₹9 = ₹900. Weekly cost (6 days) = 6 × ₹900 = <strong>₹5,400</strong>.<br><strong>(b) Net Units Billed:</strong> 100 - 70 = <strong>30 units daily</strong>."
    }
  },
  {
    num: 3,
    id: "ch_cm3",
    title: "Playing with Numbers",
    desc: "Factors & Multiples, Prime & Composite Numbers, Divisibility Rules (2, 3, 4, 5, 6, 8, 9, 10, 11), Prime Factorization, Highest Common Factor (HCF), Lowest Common Multiple (LCM)",
    concepts: [
      "Factor: An exact divisor of that number. Multiple: Number obtained by multiplying with an integer.",
      "Prime: Exactly 2 factors (1 and itself). 2 is the only even prime number.",
      "Divisibility Rules: 3 & 9 (sum of digits), 4 (last 2 digits), 8 (last 3 digits), 11 (difference of alternating sums is 0 or multiple of 11).",
      "HCF (GCD): Greatest common factor. LCM: Lowest common multiple.",
      "Relationship: Product of two numbers = HCF × LCM."
    ],
    svg: `<svg viewBox="0 0 540 130" width="100%" height="130" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="510" height="100" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="270" y="38" font-family="sans-serif" font-size="13" font-weight="700" fill="#14532d" text-anchor="middle">HCF & LCM Core Identity</text><text x="270" y="65" font-family="sans-serif" font-size="14" font-weight="800" fill="#15803d" text-anchor="middle">Product of Two Numbers = HCF × LCM</text><rect x="60" y="78" width="180" height="26" rx="4" fill="#dcfce7"/><text x="150" y="95" font-family="sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">HCF divides both numbers</text><rect x="300" y="78" width="180" height="26" rx="4" fill="#dcfce7"/><text x="390" y="95" font-family="sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">LCM is divisible by both</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Test the divisibility of the following numbers by 11: (a) 5445 (b) 10824 (c) 7138965.",
        marks: 3,
        ans: "<strong>Divisibility Test by 11:</strong><br>• (a) 5445: Sum of odd digits = 5 + 4 = 9. Sum of even digits = 4 + 5 = 9. Difference = 9 - 9 = 0. Divisible by 11.<br>• (b) 10824: Sum of odd digits = 4 + 8 + 1 = 13. Sum of even digits = 2 + 0 = 2. Difference = 13 - 2 = 11. Divisible by 11.<br>• (c) 7138965: Sum of odd digits = 5 + 9 + 3 + 7 = 24. Sum of even digits = 6 + 8 + 1 = 15. Difference = 24 - 15 = 9 (not 0 or multiple of 11). Not divisible by 11.",
        rubric: [{ key: "Correct test for (a) = Divisible", marks: "1 Mark" }, { key: "Correct test for (b) = Divisible", marks: "1 Mark" }, { key: "Correct test for (c) = Not Divisible", marks: "1 Mark" }]
      },
      {
        num: 2,
        title: "Find the HCF of the following numbers: (a) 18, 48 (b) 30, 42 (c) 70, 105, 175.",
        marks: 3,
        ans: "<strong>Prime Factorization for HCF:</strong><br>• (a) 18 = 2 × 3²; 48 = 2⁴ × 3. HCF = 2 × 3 = <strong>6</strong>.<br>• (b) 30 = 2 × 3 × 5; 42 = 2 × 3 × 7. HCF = 2 × 3 = <strong>6</strong>.<br>• (c) 70 = 2 × 5 × 7; 105 = 3 × 5 × 7; 175 = 5² × 7. HCF = 5 × 7 = <strong>35</strong>.",
        rubric: [{ key: "Prime factors for all sets", marks: "1.5 Marks" }, { key: "Common lowest powers = 6, 6, 35", marks: "1.5 Marks" }]
      },
      {
        num: 3,
        title: "Find the LCM of: (a) 12, 16, 24, 36 (b) 20, 25, 30.",
        marks: 3,
        ans: "<strong>Common Division Method for LCM:</strong><br>• (a) 12, 16, 24, 36: Divide by 2: 6, 8, 12, 18 -> Divide by 2: 3, 4, 6, 9 -> Divide by 2: 3, 2, 3, 9 -> Divide by 3: 1, 2, 1, 3. LCM = 2 × 2 × 2 × 2 × 3 × 3 = <strong>144</strong>.<br>• (b) 20, 25, 30: Divide by 2: 10, 25, 15 -> Divide by 3: 10, 25, 5 -> Divide by 5: 2, 5, 1. LCM = 2 × 3 × 5 × 2 × 5 = <strong>300</strong>.",
        rubric: [{ key: "Correct division grid for (a) = 144", marks: "1.5 Marks" }, { key: "Correct division grid for (b) = 300", marks: "1.5 Marks" }]
      },
      {
        num: 4,
        title: "Three traffic lights at three different road crossings change after every 48 seconds, 72 seconds and 108 seconds respectively. If they change simultaneously at 7 a.m., at what time will they change simultaneously again?",
        marks: 3,
        ans: "<strong>LCM Application in Synchronized Events:</strong><br>• Required interval = LCM(48, 72, 108).<br>• 48 = 2⁴ × 3; 72 = 2³ × 3²; 108 = 2² × 3³.<br>• LCM = 2⁴ × 3³ = 16 × 27 = <strong>432 seconds</strong>.<br>• 432 seconds = 432 ÷ 60 = 7 minutes 12 seconds.<br>• Therefore, the lights will change simultaneously at <strong>7:07:12 a.m.</strong>",
        rubric: [{ key: "Identifying LCM concept", marks: "1 Mark" }, { key: "Calculating LCM = 432 seconds", marks: "1 Mark" }, { key: "Converting to 7 min 12 sec and stating 7:07:12 a.m.", marks: "1 Mark" }]
      },
      {
        num: 5,
        title: "Two tankers contain 850 litres and 680 litres of kerosene oil respectively. Find the maximum capacity of a container which can measure the kerosene oil of both the tankers when used an exact number of times.",
        marks: 3,
        ans: "<strong>HCF Application in Measurement:</strong><br>• Maximum capacity = HCF(850, 680).<br>• 850 = 2 × 5² × 17.<br>• 680 = 2³ × 5 × 17.<br>• Common factors = 2 × 5 × 17 = <strong>170 litres</strong>.<br>The maximum capacity of the container must be <strong>170 litres</strong>.",
        rubric: [{ key: "Stating HCF requirement", marks: "1 Mark" }, { key: "Prime factors 850 and 680", marks: "1 Mark" }, { key: "Final answer 170 litres", marks: "1 Mark" }]
      }
    ],
    cbq: {
      title: "Warehouse Inventory Logistics: Tile Tiling & Packaging",
      question: "A storage warehouse floor measures 360 cm by 240 cm. (a) Find the size of the largest square tile that can pave the floor without cutting. (b) Find the minimum number of such square tiles required.",
      answer: "<strong>(a) Largest Tile Size:</strong> HCF(360, 240) = <strong>120 cm × 120 cm</strong>.<br><strong>(b) Number of Tiles:</strong> Total Area / Area of 1 tile = (360 × 240) / (120 × 120) = 3 × 2 = <strong>6 square tiles</strong>."
    }
  },
  {
    num: 4,
    id: "ch_cm4",
    title: "Basic Geometrical Ideas",
    desc: "Points, Line Segments, Lines, Rays, Intersecting Lines, Parallel Lines, Curves (Open & Closed), Polygons, Angles, Triangles, Quadrilaterals, Circles",
    concepts: [
      "Point: A location in space with no dimensions. Line: Extends infinitely in both directions. Line Segment: Portion of line between two endpoints.",
      "Ray: A portion of a line starting at one point (initial point) and going endlessly in one direction.",
      "Polygon: A simple closed curve made up entirely of line segments.",
      "Circle: Center, Radius (r), Diameter (d = 2r), Chord, Arc, Sector (region between two radii and arc), Segment (region between chord and arc)."
    ],
    svg: `<svg viewBox="0 0 540 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="60" r="45" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><circle cx="100" cy="60" r="3" fill="#1e3a8a"/><line x1="100" y1="60" x2="145" y2="60" stroke="#2563eb" stroke-width="2"/><text x="120" y="55" font-family="sans-serif" font-size="10" fill="#1d4ed8">radius r</text><line x1="55" y1="60" x2="145" y2="60" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><text x="100" y="115" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Circle: d = 2r</text><polygon points="320,30 380,30 410,90 290,90" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="350" y="65" font-family="sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Trapezium (Polygon)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Use the figure to name: (a) Five points (b) A line (c) Four rays (d) Five line segments.",
        marks: 3,
        ans: "<strong>Geometrical Components:</strong><br>• (a) Five points: <strong>O, B, C, D, E</strong>.<br>• (b) A line: $\\overleftrightarrow{BD}$ (or $\\overleftrightarrow{DE}$ or $\\overleftrightarrow{BE}$).<br>• (c) Four rays: $\\vec{OD}, \\vec{OE}, \\vec{OC}, \\vec{OB}$.<br>• (d) Five line segments: $\\overline{DE}, \\overline{EO}, \\overline{OB}, \\overline{OC}, \\overline{OD}$.",
        rubric: [{ key: "Correct points identification", marks: "0.5 Mark" }, { key: "Line identification with double arrow notation", marks: "0.5 Mark" }, { key: "Rays with single directional arrow", marks: "1 Mark" }, { key: "Line segments with bar notation", marks: "1 Mark" }]
      },
      {
        num: 2,
        title: "Draw a rough sketch of a quadrilateral ABCD. State: (a) Two pairs of opposite sides. (b) Two pairs of opposite angles. (c) Two pairs of adjacent sides. (d) Two pairs of adjacent angles.",
        marks: 3,
        ans: "<strong>Quadrilateral Relations:</strong><br>• (a) Opposite sides: (AB, DC) and (AD, BC).<br>• (b) Opposite angles: (∠A, ∠C) and (∠B, ∠D).<br>• (c) Adjacent sides: (AB, BC) and (BC, CD).<br>• (d) Adjacent angles: (∠A, ∠B) and (∠B, ∠C).",
        rubric: [{ key: "Correct opposite sides and angles", marks: "1.5 Marks" }, { key: "Correct adjacent sides and angles", marks: "1.5 Marks" }]
      },
      {
        num: 3,
        title: "From the figure of a circle with center O, identify: (a) its centre (b) three radii (c) a diameter (d) a chord (e) two points in the interior (f) a point in the exterior (g) a sector (h) a segment.",
        marks: 4,
        ans: "<strong>Circle Terminology:</strong><br>• (a) Centre: Point O.<br>• (b) Three radii: $\\overline{OA}, \\overline{OB}, \\overline{OC}$.<br>• (c) Diameter: $\\overline{AC}$.<br>• (d) Chord: $\\overline{ED}$ (and diameter $\\overline{AC}$).<br>• (e) Interior points: O and P.<br>• (f) Exterior point: Q.<br>• (g) Sector: Shaded region OAB (bounded by arc AB and radii OA, OB).<br>• (h) Segment: Shaded region between chord ED and arc ED.",
        rubric: [{ key: "Centre, radii, and diameter", marks: "1.5 Marks" }, { key: "Chord and interior/exterior points", marks: "1 Mark" }, { key: "Distinguishing sector vs segment", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Civil Engineering: Circular Traffic Rotary Design",
      question: "A municipal road junction features a circular roundabout of radius 14 m with a central statue. (a) Find diameter of the roundabout. (b) A straight pedestrian railing is installed across chord AB of length 20 m. Explain whether this railing passes through the center. (c) Distinguish between the floral sector bed and the walkway segment.",
      answer: "<strong>(a) Diameter:</strong> d = 2 × 14 = <strong>28 m</strong>.<br><strong>(b) Central Passage:</strong> No, because the longest chord passing through the center is the diameter (28 m). Since length is 20 m, it does not pass through the center.<br><strong>(c) Sector vs Segment:</strong> A sector is enclosed by two radii and an arc (wedge shape), while a segment is bounded by a chord and an arc."
    }
  },
  {
    num: 5,
    id: "ch_cm5",
    title: "Understanding Elementary Shapes",
    desc: "Measuring Line Segments, Angles (Right, Straight, Acute, Obtuse, Reflex), Clock Revolutions & Directions, Perpendicular Lines, Classification of Triangles, Quadrilaterals, 3D Shapes",
    concepts: [
      "Angles & Revolutions: 1 full turn = 360°, 1/2 turn = 180° (Straight angle), 1/4 turn = 90° (Right angle).",
      "Classification of Triangles by Sides: Scalene (all unequal), Isosceles (2 equal), Equilateral (all 3 equal).",
      "Classification by Angles: Acute-angled (all <90°), Right-angled (one =90°), Obtuse-angled (one >90°).",
      "Quadrilaterals: Parallelogram, Rectangle, Rhombus, Square, Trapezium.",
      "3D Polyhedra: Faces (F), Vertices (V), Edges (E). Euler's Formula: F + V - E = 2."
    ],
    svg: `<svg viewBox="0 0 540 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="60" r="45" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/><text x="100" y="28" font-family="sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">12</text><text x="135" y="64" font-family="sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">3</text><text x="100" y="98" font-family="sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">6</text><text x="65" y="64" font-family="sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">9</text><line x1="100" y1="60" x2="100" y2="32" stroke="#2563eb" stroke-width="2.5"/><line x1="100" y1="60" x2="130" y2="60" stroke="#dc2626" stroke-width="2"/><text x="100" y="115" font-family="sans-serif" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">1/4 Turn = 1 Right Angle (90°)</text><polygon points="320,40 280,100 360,100" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="320" y="115" font-family="sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">Equilateral Triangle</text><rect x="420" y="45" width="80" height="55" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="460" y="115" font-family="sans-serif" font-size="10" font-weight="700" fill="#b91c1c" text-anchor="middle">Rectangle</text></svg>`,
    questions: [
      {
        num: 1,
        title: "What fraction of a clockwise revolution does the hour hand of a clock turn through, when it goes from: (a) 3 to 9 (b) 4 to 7 (c) 7 to 10 (d) 12 to 9?",
        marks: 3,
        ans: "<strong>Clock Revolutions:</strong><br>Total hours on clock face = 12 hours.<br>• (a) 3 to 9: 6 hours -> 6/12 = <strong>1/2 revolution</strong> (2 right angles).<br>• (b) 4 to 7: 3 hours -> 3/12 = <strong>1/4 revolution</strong> (1 right angle).<br>• (c) 7 to 10: 3 hours -> 3/12 = <strong>1/4 revolution</strong> (1 right angle).<br>• (d) 12 to 9: 9 hours -> 9/12 = <strong>3/4 revolution</strong> (3 right angles).",
        rubric: [{ key: "Correct fractions for (a) and (b)", marks: "1.5 Marks" }, { key: "Correct fractions for (c) and (d)", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Name the types of following triangles: (a) Triangle with lengths of sides 7 cm, 8 cm and 9 cm. (b) ΔABC with AB = 8.7 cm, AC = 7 cm and BC = 6 cm. (c) ΔPQR such that PQ = QR = PR = 5 cm. (d) ΔDEF with m∠D = 90°. (e) ΔXYZ with m∠Y = 90° and XY = YZ.",
        marks: 3,
        ans: "<strong>Triangle Classification:</strong><br>• (a) All sides unequal -> <strong>Scalene triangle</strong>.<br>• (b) All sides unequal -> <strong>Scalene triangle</strong>.<br>• (c) All three sides equal -> <strong>Equilateral triangle</strong>.<br>• (d) One angle = 90° -> <strong>Right-angled triangle</strong>.<br>• (e) One right angle and two equal sides -> <strong>Isosceles right-angled triangle</strong>.",
        rubric: [{ key: "Classifying scalene and equilateral triangles", marks: "1.5 Marks" }, { key: "Classifying right-angled and isosceles right-angled", marks: "1.5 Marks" }]
      },
      {
        num: 3,
        title: "Name each polygon: (a) 3 sides (b) 4 sides (c) 5 sides (d) 6 sides (e) 8 sides. Also state number of faces, edges and vertices of a triangular prism.",
        marks: 3,
        ans: "<strong>Polygons & 3D Shapes:</strong><br>• 3 sides: <strong>Triangle</strong>; 4 sides: <strong>Quadrilateral</strong>; 5 sides: <strong>Pentagon</strong>; 6 sides: <strong>Hexagon</strong>; 8 sides: <strong>Octagon</strong>.<br>• <strong>Triangular Prism:</strong><br>&nbsp;&nbsp;Faces (F) = 5 (2 triangular bases + 3 rectangular sides)<br>&nbsp;&nbsp;Edges (E) = 9<br>&nbsp;&nbsp;Vertices (V) = 6.<br>&nbsp;&nbsp;Verification: F + V - E = 5 + 6 - 9 = 2 (Euler's formula verified).",
        rubric: [{ key: "Correct names of polygons", marks: "1.5 Marks" }, { key: "Faces = 5, Edges = 9, Vertices = 6", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Aviation Navigation: Runway Compass Headings",
      question: "An aircraft flying North makes a turn. (a) If it turns clockwise by 2 right angles, what is its new heading? (b) If it turns anti-clockwise through 3/4 of a revolution from East, which direction does it face? (c) Name the angle formed between North-East and North-West.",
      answer: "<strong>(a) Heading:</strong> North + 180° = <strong>South</strong>.<br><strong>(b) Anti-clockwise from East:</strong> 3/4 turn (270°) anti-clockwise from East faces <strong>South</strong>.<br><strong>(c) Angle:</strong> Angle between NE (45°) and NW (315°) is <strong>90° (Right angle)</strong>."
    }
  },
  {
    num: 6,
    id: "ch_cm6",
    title: "Integers",
    desc: "Negative Numbers & Need for Integers, Integers on Number Line, Ordering of Integers, Addition of Integers (Same Sign & Opposite Sign), Subtraction of Integers",
    concepts: [
      "Integers: Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}. Positive integers, negative integers, and zero (neither positive nor negative).",
      "Opposite Situations: Gain vs Loss, Above sea level vs Below sea level, Rise vs Fall in temperature.",
      "Number Line Rule: Moving right indicates addition (+); moving left indicates subtraction (-).",
      "Rules: (+a) + (+b) = +(a+b); (-a) + (-b) = -(a+b); (+a) + (-b) = subtract and take sign of greater absolute value.",
      "Subtraction Rule: a - b = a + (additive inverse of b)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="50" x2="520" y2="50" stroke="#0f172a" stroke-width="2.5"/><polygon points="520,45 535,50 520,55" fill="#0f172a"/><polygon points="20,45 5,50 20,55" fill="#0f172a"/><line x1="270" y1="35" x2="270" y2="65" stroke="#2563eb" stroke-width="2.5"/><text x="270" y="82" font-family="sans-serif" font-size="13" font-weight="800" fill="#2563eb" text-anchor="middle">0</text><text x="340" y="80" font-family="sans-serif" font-size="11" fill="#16a34a" text-anchor="middle">+1</text><text x="410" y="80" font-family="sans-serif" font-size="11" fill="#16a34a" text-anchor="middle">+2</text><text x="480" y="80" font-family="sans-serif" font-size="11" fill="#16a34a" text-anchor="middle">+3</text><text x="200" y="80" font-family="sans-serif" font-size="11" fill="#dc2626" text-anchor="middle">-1</text><text x="130" y="80" font-family="sans-serif" font-size="11" fill="#dc2626" text-anchor="middle">-2</text><text x="60" y="80" font-family="sans-serif" font-size="11" fill="#dc2626" text-anchor="middle">-3</text><text x="410" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">Positive Integers →</text><text x="130" y="25" font-family="sans-serif" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">← Negative Integers</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Write opposites of the following: (a) Increase in weight (b) 30 km north (c) 80 m east (d) Loss of ₹700 (e) 100 m above sea level.",
        marks: 3,
        ans: "<strong>Opposite Quantities:</strong><br>• (a) <strong>Decrease in weight</strong>.<br>• (b) <strong>30 km south</strong>.<br>• (c) <strong>80 m west</strong>.<br>• (d) <strong>Gain of ₹700</strong>.<br>• (e) <strong>100 m below sea level</strong>.",
        rubric: [{ key: "Correct opposites for (a), (b), (c)", marks: "1.5 Marks" }, { key: "Correct opposites for (d) and (e)", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Find the sum of: (a) (-7) + (-9) + 4 + 16 (b) (37) + (-2) + (-65) + (-8) (c) (-312) + 39 + 192.",
        marks: 3,
        ans: "<strong>Integer Addition:</strong><br>• (a) [(-7) + (-9)] + [4 + 16] = (-16) + 20 = <strong>+4</strong>.<br>• (b) 37 + [(-2) + (-65) + (-8)] = 37 + (-75) = <strong>-38</strong>.<br>• (c) (-312) + (39 + 192) = (-312) + 231 = <strong>-81</strong>.",
        rubric: [{ key: "Grouping same sign integers", marks: "1.5 Marks" }, { key: "Final evaluations: +4, -38, -81", marks: "1.5 Marks" }]
      },
      {
        num: 3,
        title: "Find: (a) 35 - (20) (b) 72 - (90) (c) (-15) - (-18) (d) (-20) - (13) (e) 23 - (-12).",
        marks: 3,
        ans: "<strong>Integer Subtraction:</strong><br>• (a) 35 - 20 = <strong>15</strong>.<br>• (b) 72 - 90 = <strong>-18</strong>.<br>• (c) (-15) + 18 = <strong>3</strong>.<br>• (d) (-20) - 13 = <strong>-33</strong>.<br>• (e) 23 + 12 = <strong>35</strong>.",
        rubric: [{ key: "Applying additive inverse rule: a - (-b) = a + b", marks: "1.5 Marks" }, { key: "Correct solutions for all parts", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Cryogenics & Sub-Zero Storage: Lab Temperature Monitoring",
      question: "A biological vaccine storage container is kept at -18°C. During power fluctuation, temperature rises by 7°C. (a) What is the new temperature? (b) Technicians activate a cooling pump that lowers the temperature by 12°C. Find final temperature. (c) Express the total net change from initial -18°C.",
      answer: "<strong>(a) New Temperature:</strong> -18 + 7 = <strong>-11°C</strong>.<br><strong>(b) Final Temperature:</strong> -11 - 12 = <strong>-23°C</strong>.<br><strong>(c) Net Change:</strong> -23 - (-18) = -23 + 18 = <strong>-5°C (fell by 5°C)</strong>."
    }
  },
  {
    num: 7,
    id: "ch_cm7",
    title: "Fractions",
    desc: "Fraction as a Part of Whole, Representation on Number Line, Proper, Improper and Mixed Fractions, Equivalent Fractions, Simplest Form, Comparison of Fractions, Addition & Subtraction",
    concepts: [
      "Fraction = Numerator / Denominator (Denominator ≠ 0).",
      "Proper Fraction: Numerator < Denominator (Value < 1). Improper Fraction: Numerator ≥ Denominator (Value ≥ 1).",
      "Mixed Fraction = Quotient + Remainder/Divisor.",
      "Equivalent Fractions: Multiply or divide numerator and denominator by same non-zero number.",
      "Like Fractions: Same denominator. Unlike Fractions: Different denominators (make like using LCM)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="200" height="40" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><line x1="80" y1="30" x2="80" y2="70" stroke="#2563eb" stroke-width="1.5"/><line x1="130" y1="30" x2="130" y2="70" stroke="#2563eb" stroke-width="1.5"/><line x1="180" y1="30" x2="180" y2="70" stroke="#2563eb" stroke-width="1.5"/><rect x="30" y="30" width="150" height="40" fill="#3b82f6" opacity="0.3"/><text x="130" y="88" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">3 out of 4 Parts = 3/4</text><circle cx="380" cy="50" r="35" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><path d="M 380,50 L 380,15 A 35,35 0 0,1 415,50 Z" fill="#f59e0b"/><text x="380" y="98" font-family="sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">1/4 of Circular Area</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Express as mixed fractions: (a) 20/3 (b) 11/4 (c) 17/7. Express as improper fractions: (d) 7 3/4 (e) 5 6/7.",
        marks: 3,
        ans: "<strong>Fraction Conversions:</strong><br>• (a) 20 ÷ 3 = Quotient 6, Remainder 2 -> <strong>6 2/3</strong>.<br>• (b) 11 ÷ 4 = Quotient 2, Remainder 3 -> <strong>2 3/4</strong>.<br>• (c) 17 ÷ 7 = Quotient 2, Remainder 3 -> <strong>2 3/7</strong>.<br>• (d) 7 3/4 = (7 × 4 + 3)/4 = (28 + 3)/4 = <strong>31/4</strong>.<br>• (e) 5 6/7 = (5 × 7 + 6)/7 = (35 + 6)/7 = <strong>41/7</strong>.",
        rubric: [{ key: "Correct mixed fractions", marks: "1.5 Marks" }, { key: "Correct improper fractions", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Find equivalent fraction of 3/5 having: (a) denominator 20 (b) numerator 9 (c) denominator 30 (d) numerator 27.",
        marks: 3,
        ans: "<strong>Equivalent Fractions:</strong><br>• (a) Denominator 20: 20 ÷ 5 = 4. 3 × 4 / 5 × 4 = <strong>12/20</strong>.<br>• (b) Numerator 9: 9 ÷ 3 = 3. 3 × 3 / 5 × 3 = <strong>9/15</strong>.<br>• (c) Denominator 30: 30 ÷ 5 = 6. 3 × 6 / 5 × 6 = <strong>18/30</strong>.<br>• (d) Numerator 27: 27 ÷ 3 = 9. 3 × 9 / 5 × 9 = <strong>27/45</strong>.",
        rubric: [{ key: "Correct factor identification", marks: "1.5 Marks" }, { key: "Accurate equivalent fractions", marks: "1.5 Marks" }]
      },
      {
        num: 3,
        title: "Solve: (a) 2/3 + 3/4 + 1/2 (b) 4 2/3 - 2 1/5 (c) Sarita bought 2/5 metre of ribbon and Lalita 3/4 metre. What is the total length of the ribbon they bought?",
        marks: 4,
        ans: "<strong>Fraction Arithmetic:</strong><br>• (a) LCM(3, 4, 2) = 12.<br>&nbsp;&nbsp;= (8 + 9 + 6)/12 = 23/12 = <strong>1 11/12</strong>.<br>• (b) 14/3 - 11/5 = (70 - 33)/15 = 37/15 = <strong>2 7/15</strong>.<br>• (c) Total ribbon = 2/5 + 3/4. LCM(5, 4) = 20.<br>&nbsp;&nbsp;= (8 + 15)/20 = <strong>23/20 metre = 1 3/20 m</strong>.",
        rubric: [{ key: "Addition with LCM 12 = 23/12", marks: "1.5 Marks" }, { key: "Subtraction with LCM 15 = 37/15", marks: "1 Mark" }, { key: "Word problem setup and solution = 23/20 m", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Culinary Mathematics: Bakery Recipe Proportioning",
      question: "A baker uses 2 1/2 kg of flour, 3/4 kg of sugar, and 1/3 kg of butter to prepare a wedding cake. (a) Find the total weight of ingredients used. (b) If each serving requires 1/12 kg of cake batter, how many servings can be prepared from this mixture?",
      answer: "<strong>(a) Total Weight:</strong> 5/2 + 3/4 + 1/3. LCM(2, 4, 3) = 12.<br>= (30 + 9 + 4)/12 = <strong>43/12 kg (3 7/12 kg)</strong>.<br><strong>(b) Servings:</strong> (43/12) ÷ (1/12) = 43/12 × 12/1 = <strong>43 servings</strong>."
    }
  },
  {
    num: 8,
    id: "ch_cm8",
    title: "Decimals",
    desc: "Tenths & Hundredths, Place Value Chart for Decimals, Comparing Decimals, Money, Length & Weight Conversions, Addition & Subtraction of Decimals",
    concepts: [
      "Decimals: Fractions with denominators 10, 100, 1000... 1 tenth = 1/10 = 0.1; 1 hundredth = 1/100 = 0.01.",
      "Money: 1 Rupee = 100 paise; 1 paisa = ₹0.01.",
      "Length: 1 m = 100 cm (1 cm = 0.01 m); 1 km = 1000 m (1 m = 0.001 km).",
      "Weight: 1 kg = 1000 g (1 g = 0.001 kg).",
      "Rules for Addition/Subtraction: Align decimal points vertically before operating."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="500" height="60" rx="8" fill="#f8fafc" stroke="#6366f1" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#3730a3" text-anchor="middle">Decimal Place Value Structure</text><text x="70" y="65" font-family="sans-serif" font-size="11" fill="#4338ca">Hundreds (100)</text><text x="170" y="65" font-family="sans-serif" font-size="11" fill="#4338ca">Tens (10)</text><text x="240" y="65" font-family="sans-serif" font-size="11" fill="#4338ca">Ones (1)</text><text x="290" y="65" font-family="sans-serif" font-size="14" font-weight="900" fill="#dc2626">.</text><text x="340" y="65" font-family="sans-serif" font-size="11" fill="#4338ca">Tenths (1/10)</text><text x="440" y="65" font-family="sans-serif" font-size="11" fill="#4338ca">Hundredths (1/100)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Express as rupees using decimals: (a) 5 paise (b) 75 paise (c) 50 rupees 90 paise. Express as metres: (d) 15 cm (e) 2 m 45 cm.",
        marks: 3,
        ans: "<strong>Decimal Conversions:</strong><br>• (a) 5 paise = 5/100 = <strong>₹0.05</strong>.<br>• (b) 75 paise = 75/100 = <strong>₹0.75</strong>.<br>• (c) 50 rupees 90 paise = 50 + 90/100 = <strong>₹50.90</strong>.<br>• (d) 15 cm = 15/100 = <strong>0.15 m</strong>.<br>• (e) 2 m 45 cm = 2 + 45/100 = <strong>2.45 m</strong>.",
        rubric: [{ key: "Correct rupee conversions", marks: "1.5 Marks" }, { key: "Correct metre conversions", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Which is greater: (a) 0.5 or 0.05 (b) 1.23 or 1.2 (c) 0.099 or 0.19? Arrange in ascending order: 0.8, 0.08, 0.88, 0.808.",
        marks: 3,
        ans: "<strong>Decimal Comparison:</strong><br>• (a) 0.50 > 0.05 -> <strong>0.5 is greater</strong>.<br>• (b) 1.23 > 1.20 -> <strong>1.23 is greater</strong>.<br>• (c) 0.099 < 0.190 -> <strong>0.19 is greater</strong>.<br>• <strong>Ascending Order:</strong> 0.08 < 0.808 < 0.8 < 0.88.",
        rubric: [{ key: "Correct comparisons for (a), (b), (c)", marks: "1.5 Marks" }, { key: "Accurate ascending ordering", marks: "1.5 Marks" }]
      },
      {
        num: 3,
        title: "Sunita travelled 15 km 268 m by bus, 7 km 7 m by car and 500 m on foot in order to reach her school. How far is her school from her residence?",
        marks: 3,
        ans: "<strong>Decimal Addition:</strong><br>• By bus = 15.268 km.<br>• By car = 7.007 km.<br>• On foot = 500 m = 0.500 km.<br>• Total distance = 15.268 + 7.007 + 0.500 = <strong>22.775 km</strong>.<br>Her school is <strong>22 km 775 m (22.775 km)</strong> from her residence.",
        rubric: [{ key: "Converting distances to kilometres", marks: "1 Mark" }, { key: "Column vertical decimal alignment", marks: "1 Mark" }, { key: "Final sum 22.775 km", marks: "1 Mark" }]
      }
    ],
    cbq: {
      title: "Grocery Billing & Accounting: Supermarket Audit",
      question: "Raju bought vegetables weighing 10 kg. Out of this, 3 kg 500 g is onions, 2 kg 75 g is tomatoes and the rest is potatoes. (a) Express onion and tomato weights in kg using decimals. (b) Find the weight of potatoes in decimals. (c) If potatoes cost ₹28.50 per kg, calculate total cost of potatoes.",
      answer: "<strong>(a) Decimal Weights:</strong> Onions = 3.500 kg; Tomatoes = 2.075 kg.<br><strong>(b) Potatoes Weight:</strong> Total onions + tomatoes = 3.500 + 2.075 = 5.575 kg. Potatoes = 10.000 - 5.575 = <strong>4.425 kg</strong>.<br><strong>(c) Cost:</strong> 4.425 × ₹28.50 = <strong>₹126.11</strong>."
    }
  },
  {
    num: 9,
    id: "ch_cm9",
    title: "Data Handling",
    desc: "Recording & Organization of Data, Tally Marks, Pictographs & Scale Factors, Bar Graphs (Interpretation & Construction)",
    concepts: [
      "Data: A collection of numbers gathered to give some information.",
      "Tally Marks: Grouping data into bunches of five (|||| with diagonal cross).",
      "Pictograph: Representation of data using pictures of objects with an explicit scale key.",
      "Bar Graph: Representation using uniform width rectangular bars with equal spacing, whose lengths represent values."
    ],
    svg: `<svg viewBox="0 0 540 130" width="100%" height="130" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="100" x2="480" y2="100" stroke="#0f172a" stroke-width="2"/><line x1="60" y1="20" x2="60" y2="100" stroke="#0f172a" stroke-width="2"/><rect x="90" y="40" width="45" height="60" fill="#3b82f6"/><text x="112" y="35" font-family="sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">60</text><text x="112" y="115" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">Maths</text><rect x="170" y="50" width="45" height="50" fill="#10b981"/><text x="192" y="45" font-family="sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">50</text><text x="192" y="115" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">Science</text><rect x="250" y="30" width="45" height="70" fill="#f59e0b"/><text x="272" y="25" font-family="sans-serif" font-size="10" font-weight="700" fill="#b45309" text-anchor="middle">70</text><text x="272" y="115" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">English</text><rect x="330" y="60" width="45" height="40" fill="#8b5cf6"/><text x="352" y="55" font-family="sans-serif" font-size="10" font-weight="700" fill="#6d28d9" text-anchor="middle">40</text><text x="352" y="115" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">Hindi</text></svg>`,
    questions: [
      {
        num: 1,
        title: "In a mathematics test, the following marks were obtained by 40 students. Organize these marks in a table using tally marks: 8, 1, 3, 7, 6, 5, 5, 4, 4, 2, 4, 9, 5, 3, 7, 1, 6, 5, 2, 7, 7, 3, 8, 4, 2, 8, 9, 5, 8, 6, 7, 4, 5, 6, 9, 6, 4, 4, 6, 6. (a) Find how many students obtained marks equal to or more than 7. (b) How many students obtained marks below 4?",
        marks: 4,
        ans: "<strong>Tally Frequency Table:</strong><br>• Marks 1: || (2)<br>• Marks 2: ||| (3)<br>• Marks 3: ||| (3)<br>• Marks 4: |||| | (7)<br>• Marks 5: |||| | (6)<br>• Marks 6: |||| || (7)<br>• Marks 7: |||| (5)<br>• Marks 8: |||| (4)<br>• Marks 9: ||| (3)<br>• (a) Marks ≥ 7: Students getting 7, 8, or 9 = 5 + 4 + 3 = <strong>12 students</strong>.<br>• (b) Marks < 4: Students getting 1, 2, or 3 = 2 + 3 + 3 = <strong>8 students</strong>.",
        rubric: [{ key: "Correct tally groupings for all marks", marks: "2 Marks" }, { key: "Part (a) answer = 12 students", marks: "1 Mark" }, { key: "Part (b) answer = 8 students", marks: "1 Mark" }]
      },
      {
        num: 2,
        title: "A pictograph shows number of tractors in 5 villages. Scale: 1 tractor symbol = 1 tractor. Village A has 6, Village B has 8, Village C has 8, Village D has 3, Village E has 6. (a) Which village has minimum tractors? (b) Which village has maximum tractors? (c) How many more tractors does Village C have than Village D? (d) Find total number of tractors.",
        marks: 3,
        ans: "<strong>Pictograph Interpretation:</strong><br>• (a) Minimum tractors: <strong>Village D</strong> (3 tractors).<br>• (b) Maximum tractors: <strong>Village B and Village C</strong> (8 tractors each).<br>• (c) Difference: 8 - 3 = <strong>5 more tractors</strong>.<br>• (d) Total tractors: 6 + 8 + 8 + 3 + 6 = <strong>31 tractors</strong>.",
        rubric: [{ key: "Accurate answers for (a) and (b)", marks: "1.5 Marks" }, { key: "Accurate answers for (c) and (d)", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "School Library Circulation: Monthly Book Borrows",
      question: "The number of books borrowed from school library across 5 months: July (350), Aug (400), Sept (600), Oct (250), Nov (500). (a) Choose a suitable scale for a bar graph. (b) Find the ratio of books borrowed in September to October. (c) What percentage of total books was borrowed in August?",
      answer: "<strong>(a) Scale:</strong> 1 unit length = <strong>50 books</strong> (or 100 books).<br><strong>(b) Ratio:</strong> 600 : 250 = 60 : 25 = <strong>12 : 5</strong>.<br><strong>(c) Percentage in August:</strong> Total = 350+400+600+250+500 = 2,100 books. August % = (400 / 2100) × 100 = <strong>19.05%</strong>."
    }
  },
  {
    num: 10,
    id: "ch_cm10",
    title: "Mensuration",
    desc: "Perimeter of Rectangle, Square & Regular Polygons, Area of Rectangle & Square, Word Problems on Fencing & Tiling",
    concepts: [
      "Perimeter: Distance covered along the boundary forming a closed figure.",
      "Perimeter of Rectangle = 2 × (Length + Breadth).",
      "Perimeter of Square = 4 × Side. Perimeter of Equilateral Triangle = 3 × Side. Regular Hexagon = 6 × Side.",
      "Area: Region enclosed by closed plane figure.",
      "Area of Rectangle = Length × Breadth. Area of Square = Side × Side."
    ],
    svg: `<svg viewBox="0 0 540 110" width="100%" height="110" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="25" width="180" height="60" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="130" y="20" font-family="sans-serif" font-size="11" fill="#1d4ed8" text-anchor="middle">Length l</text><text x="230" y="60" font-family="sans-serif" font-size="11" fill="#1d4ed8">Breadth b</text><text x="130" y="60" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Area = l × b</text><rect x="330" y="25" width="60" height="60" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="360" y="20" font-family="sans-serif" font-size="11" fill="#b45309" text-anchor="middle">side s</text><text x="360" y="60" font-family="sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">s²</text><text x="360" y="100" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle">Perimeter = 4s</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Find the perimeter of: (a) A rectangle of length 40 cm and breadth 10 cm. (b) A square of side 15 cm. (c) An equilateral triangle of side 9 cm. (d) A regular hexagon of side 8 cm.",
        marks: 3,
        ans: "<strong>Perimeter Formulas:</strong><br>• (a) Rectangle = 2 × (l + b) = 2 × (40 + 10) = 2 × 50 = <strong>100 cm</strong>.<br>• (b) Square = 4 × side = 4 × 15 = <strong>60 cm</strong>.<br>• (c) Equilateral triangle = 3 × side = 3 × 9 = <strong>27 cm</strong>.<br>• (d) Regular hexagon = 6 × side = 6 × 8 = <strong>48 cm</strong>.",
        rubric: [{ key: "Formulas and correct calculation for (a), (b)", marks: "1.5 Marks" }, { key: "Formulas and correct calculation for (c), (d)", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "A piece of string is 30 cm long. What will be the length of each side if the string is used to form: (a) a square? (b) an equilateral triangle? (c) a regular hexagon?",
        marks: 3,
        ans: "<strong>Equating Perimeter to 30 cm:</strong><br>• (a) Square: 4s = 30 -> s = 30/4 = <strong>7.5 cm</strong>.<br>• (b) Equilateral triangle: 3s = 30 -> s = 30/3 = <strong>10 cm</strong>.<br>• (c) Regular hexagon: 6s = 30 -> s = 30/6 = <strong>5 cm</strong>.",
        rubric: [{ key: "Square side = 7.5 cm", marks: "1 Mark" }, { key: "Triangle side = 10 cm", marks: "1 Mark" }, { key: "Hexagon side = 5 cm", marks: "1 Mark" }]
      },
      {
        num: 3,
        title: "How many tiles whose length and breadth are 12 cm and 5 cm respectively will be needed to fit in a rectangular region whose length and breadth are respectively: (a) 100 cm and 144 cm (b) 70 cm and 36 cm?",
        marks: 4,
        ans: "<strong>Tiling Calculation:</strong><br>Area of 1 tile = 12 × 5 = 60 sq cm.<br>• (a) Area of region = 100 × 144 = 14,400 sq cm.<br>&nbsp;&nbsp;Number of tiles = 14,400 ÷ 60 = <strong>240 tiles</strong>.<br>• (b) Area of region = 70 × 36 = 2,520 sq cm.<br>&nbsp;&nbsp;Number of tiles = 2,520 ÷ 60 = <strong>42 tiles</strong>.",
        rubric: [{ key: "Tile area calculation = 60 sq cm", marks: "1 Mark" }, { key: "Region (a) = 240 tiles", marks: "1.5 Marks" }, { key: "Region (b) = 42 tiles", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Public Park Renovation: Fencing & Turf Grassing",
      question: "A municipal rectangular park is 250 m long and 175 m wide. (a) Find cost of fencing park with 3 rows of barbed wire at ₹12 per metre. (b) Find cost of laying Korean turf grass over entire park at ₹45 per square metre.",
      answer: "<strong>(a) Fencing Cost:</strong> Perimeter = 2 × (250 + 175) = 2 × 425 = 850 m. For 3 rounds: 3 × 850 = 2,550 m. Cost = 2,550 × ₹12 = <strong>₹30,600</strong>.<br><strong>(b) Grassing Cost:</strong> Area = 250 × 175 = 43,750 sq m. Cost = 43,750 × ₹45 = <strong>₹19,68,750</strong>."
    }
  },
  {
    num: 11,
    id: "ch_cm11",
    title: "Algebra",
    desc: "Matchstick Patterns, Concept of Variable, Forming Algebraic Expressions, Practical Applications, Equations and Solution by Trial & Error",
    concepts: [
      "Variable: An unknown quantity whose value is not fixed (represented by letters x, y, n, z).",
      "Constant: A quantity having fixed numerical value.",
      "Algebraic Expression: Combination of variables and constants using +, -, ×, ÷.",
      "Equation: A condition on a variable where two expressions are set equal (=). An equation has LHS and RHS."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="50" x2="490" y2="50" stroke="#0f172a" stroke-width="2"/><circle cx="270" cy="50" r="5" fill="#2563eb"/><polygon points="270,55 250,85 290,85" fill="#2563eb"/><rect x="80" y="20" width="120" height="30" rx="4" fill="#eff6ff" stroke="#3b82f6"/><text x="140" y="40" font-family="sans-serif" font-size="12" font-weight="700" fill="#1d4ed8" text-anchor="middle">LHS: 2x + 5</text><text x="270" y="38" font-family="sans-serif" font-size="18" font-weight="900" fill="#0f172a" text-anchor="middle">=</text><rect x="340" y="20" width="120" height="30" rx="4" fill="#fef3c7" stroke="#d97706"/><text x="400" y="40" font-family="sans-serif" font-size="12" font-weight="700" fill="#b45309" text-anchor="middle">RHS: 17</text><text x="270" y="98" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle">Balance Model: 2x + 5 = 17 => x = 6</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Find the rule which gives the number of matchsticks required to make the following matchstick patterns: (a) A pattern of letter T as T (b) A pattern of letter Z as Z (c) A pattern of letter U as U (d) A pattern of letter V as V.",
        marks: 3,
        ans: "<strong>Matchstick General Rules:</strong><br>• (a) Letter T requires 2 matchsticks -> Rule = <strong>2n</strong>.<br>• (b) Letter Z requires 3 matchsticks -> Rule = <strong>3n</strong>.<br>• (c) Letter U requires 3 matchsticks -> Rule = <strong>3n</strong>.<br>• (d) Letter V requires 2 matchsticks -> Rule = <strong>2n</strong>.<br>(where n is the number of letters formed).",
        rubric: [{ key: "Rules for (a) and (b)", marks: "1.5 Marks" }, { key: "Rules for (c) and (d)", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Give expressions for the following cases: (a) 7 added to p (b) 7 subtracted from p (c) p multiplied by 7 (d) p divided by 7 (e) 7 subtracted from -m (f) -p multiplied by 5.",
        marks: 3,
        ans: "<strong>Algebraic Expressions:</strong><br>• (a) <strong>p + 7</strong>.<br>• (b) <strong>p - 7</strong>.<br>• (c) <strong>7p</strong>.<br>• (d) <strong>p/7</strong>.<br>• (e) <strong>-m - 7</strong>.<br>• (f) <strong>-5p</strong>.",
        rubric: [{ key: "Correct expressions for (a), (b), (c)", marks: "1.5 Marks" }, { key: "Correct expressions for (d), (e), (f)", marks: "1.5 Marks" }]
      },
      {
        num: 3,
        title: "Solve the following equations: (a) x + 10 = 30 (b) y - 8 = 12 (c) 5m = 60 (d) p/4 = 7.",
        marks: 3,
        ans: "<strong>Linear Equation Solutions:</strong><br>• (a) x = 30 - 10 = <strong>20</strong>.<br>• (b) y = 12 + 8 = <strong>20</strong>.<br>• (c) m = 60 ÷ 5 = <strong>12</strong>.<br>• (d) p = 7 × 4 = <strong>28</strong>.",
        rubric: [{ key: "Solutions for (a) and (b)", marks: "1.5 Marks" }, { key: "Solutions for (c) and (d)", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Telecommunication Billing: Mobile Postpaid Tariff Model",
      question: "A cellular network charges a fixed monthly fee of ₹199 plus ₹1.50 per gigabyte (GB) of extra high-speed data. (a) Write an algebraic expression for the total monthly bill for using g gigabytes of extra data. (b) Calculate the bill if a customer uses 40 GB of extra data. (c) If a customer's bill is ₹379, find how many extra gigabytes were consumed.",
      answer: "<strong>(a) Algebraic Expression:</strong> Bill = <strong>199 + 1.50g</strong>.<br><strong>(b) Extra 40 GB:</strong> 199 + 1.50(40) = 199 + 60 = <strong>₹259</strong>.<br><strong>(c) For Bill ₹379:</strong> 199 + 1.50g = 379 => 1.50g = 180 => g = 180 / 1.50 = <strong>120 GB</strong>."
    }
  },
  {
    num: 12,
    id: "ch_cm12",
    title: "Ratio and Proportion",
    desc: "Concept of Ratio, Equivalent Ratios, Ratio in Simplest Form, Proportion (Product of Extremes = Product of Means), Unitary Method",
    concepts: [
      "Ratio: Comparison of two quantities of same kind and same units by division. Ratio a : b has no units.",
      "Simplest Form: Divide numerator and denominator by their HCF until co-prime.",
      "Proportion: Equality of two ratios: a : b = c : d (Written as a : b :: c : d). Rule: a × d = b × c (Product of extremes = Product of means).",
      "Unitary Method: Finding the value of one unit first, then multiplying to find value of required units."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#fdf4ff" stroke="#c026d3" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="13" font-weight="700" fill="#701a75" text-anchor="middle">Proportion Rule: a : b :: c : d</text><text x="270" y="65" font-family="sans-serif" font-size="14" font-weight="900" fill="#a21caf" text-anchor="middle">Product of Extremes (a × d) = Product of Means (b × c)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Find the ratio of: (a) 81 to 108 (b) 98 to 63 (c) 33 km to 121 km (d) 30 minutes to 45 minutes.",
        marks: 3,
        ans: "<strong>Simplest Ratios:</strong><br>• (a) 81/108: Divide by 27 = <strong>3 : 4</strong>.<br>• (b) 98/63: Divide by 7 = <strong>14 : 9</strong>.<br>• (c) 33/121: Divide by 11 = <strong>3 : 11</strong>.<br>• (d) 30/45: Divide by 15 = <strong>2 : 3</strong>.",
        rubric: [{ key: "Ratios for (a) and (b)", marks: "1.5 Marks" }, { key: "Ratios for (c) and (d)", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Determine if the following are in proportion: (a) 15, 45, 40, 120 (b) 33, 121, 9, 96 (c) 24, 28, 36, 48.",
        marks: 3,
        ans: "<strong>Proportion Verification:</strong><br>• (a) 15/45 = 1/3; 40/120 = 1/3. Since ratios are equal, <strong>Yes, they are in proportion</strong>.<br>• (b) 33/121 = 3/11; 9/96 = 3/32. 3/11 ≠ 3/32. <strong>No, not in proportion</strong>.<br>• (c) 24/28 = 6/7; 36/48 = 3/4. 6/7 ≠ 3/4. <strong>No, not in proportion</strong>.",
        rubric: [{ key: "Verifying part (a)", marks: "1 Mark" }, { key: "Verifying parts (b) and (c)", marks: "2 Marks" }]
      },
      {
        num: 3,
        title: "Cost of 5 kg of wheat is ₹91.50. (a) What will be the cost of 8 kg of wheat? (b) What quantity of wheat can be purchased in ₹183?",
        marks: 4,
        ans: "<strong>Unitary Method:</strong><br>• Cost of 1 kg of wheat = ₹91.50 ÷ 5 = <strong>₹18.30</strong>.<br>• (a) Cost of 8 kg = 8 × 18.30 = <strong>₹146.40</strong>.<br>• (b) Quantity in ₹183 = 183 ÷ 18.30 = <strong>10 kg of wheat</strong>.",
        rubric: [{ key: "Finding unit price ₹18.30", marks: "1.5 Marks" }, { key: "Cost of 8 kg = ₹146.40", marks: "1.5 Marks" }, { key: "Quantity for ₹183 = 10 kg", marks: "1 Mark" }]
      }
    ],
    cbq: {
      title: "Cartography & Scale Modeling: State Highway Map",
      question: "On a state highway roadmap, 2 cm represents an actual ground distance of 75 km. (a) Find the representative ratio in simplest form. (b) If two cities are 8 cm apart on the map, find their actual distance. (c) If two tourist spots are actually 450 km apart, find their map distance.",
      answer: "<strong>(a) Representative Ratio:</strong> 2 cm to 75 km = 2 cm : 7,500,000 cm = <strong>1 : 3,750,000</strong>.<br><strong>(b) Ground Distance:</strong> 1 cm = 37.5 km. 8 cm = 8 × 37.5 = <strong>300 km</strong>.<br><strong>(c) Map Distance:</strong> 450 ÷ 37.5 = <strong>12 cm</strong>."
    }
  },
  {
    num: 13,
    id: "ch_cm13",
    title: "Symmetry",
    desc: "Line of Symmetry, Figures with Multiple Lines of Symmetry, Reflection and Symmetry, Symmetrical Alphabets & Architectural Applications",
    concepts: [
      "Symmetry: When a figure can be folded along a line such that the two halves coincide exactly.",
      "Line of Symmetry (Axis of Symmetry): The fold line dividing the figure into mirror halves.",
      "Lines in Polygons: Equilateral triangle has 3, Square has 4, Regular pentagon has 5, Regular hexagon has 6, Circle has infinite lines of symmetry.",
      "Reflection Symmetry: Object and image are equidistant from mirror line, with opposite orientation."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="20" width="60" height="60" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><line x1="90" y1="10" x2="90" y2="90" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="50" y1="50" x2="130" y2="50" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="55" y1="15" x2="125" y2="85" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="55" y1="85" x2="125" y2="15" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><text x="90" y="105" font-family="sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Square: 4 Lines</text><polygon points="270,20 230,80 310,80" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><line x1="270" y1="10" x2="270" y2="90" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><text x="270" y="105" font-family="sans-serif" font-size="10" font-weight="700" fill="#b45309" text-anchor="middle">Equilateral Δ: 3 Lines</text><circle cx="430" cy="50" r="35" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><line x1="390" y1="50" x2="470" y2="50" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="430" y1="10" x2="430" y2="90" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><text x="430" y="105" font-family="sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">Circle: Infinite Lines</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Find the number of lines of symmetry for each of the following shapes: (a) An equilateral triangle (b) An isosceles triangle (c) A scalene triangle (d) A square (e) A rectangle (f) A rhombus (g) A regular hexagon (h) A circle.",
        marks: 4,
        ans: "<strong>Lines of Symmetry:</strong><br>• (a) Equilateral triangle: <strong>3</strong>.<br>• (b) Isosceles triangle: <strong>1</strong>.<br>• (c) Scalene triangle: <strong>0</strong>.<br>• (d) Square: <strong>4</strong>.<br>• (e) Rectangle: <strong>2</strong>.<br>• (f) Rhombus: <strong>2</strong>.<br>• (g) Regular hexagon: <strong>6</strong>.<br>• (h) Circle: <strong>Infinitely many</strong>.",
        rubric: [{ key: "Correct counts for triangles and quadrilaterals", marks: "2 Marks" }, { key: "Correct counts for hexagon and circle", marks: "2 Marks" }]
      },
      {
        num: 2,
        title: "Which English letters of the alphabet have reflectional symmetry (i.e., symmetry related to mirror reflection) about: (a) a vertical mirror (b) a horizontal mirror (c) both horizontal and vertical mirrors?",
        marks: 3,
        ans: "<strong>Alphabet Symmetry:</strong><br>• (a) Vertical Mirror: <strong>A, H, I, M, O, T, U, V, W, X, Y</strong>.<br>• (b) Horizontal Mirror: <strong>B, C, D, E, H, I, K, O, X</strong>.<br>• (c) Both Horizontal and Vertical Mirrors: <strong>H, I, O, X</strong>.",
        rubric: [{ key: "Vertical mirror letters", marks: "1 Mark" }, { key: "Horizontal mirror letters", marks: "1 Mark" }, { key: "Both mirrors letters", marks: "1 Mark" }]
      }
    ],
    cbq: {
      title: "Traditional Architecture: Rangoli & Tile Tessellations",
      question: "An artisan creates a square festive rangoli design. (a) State how many lines of symmetry the square canvas possesses. (b) If four identical floral motifs are painted at the corners, explain how symmetry is preserved. (c) If one motif is accidentally replaced with an asymmetrical paisley, what happens to the overall symmetry?",
      answer: "<strong>(a) Canvas Symmetry:</strong> A square has <strong>4 lines of symmetry</strong> (2 along midpoints of sides, 2 along diagonals).<br><strong>(b) Preserving Symmetry:</strong> Since identical motifs are placed symmetrically about both diagonal and horizontal/vertical axes, the 4-fold symmetry is maintained.<br><strong>(c) Disruption:</strong> The overall symmetry is completely broken; zero lines of symmetry remain."
    }
  },
  {
    num: 14,
    id: "ch_cm14",
    title: "Practical Geometry",
    desc: "Construction of Circles with Given Radius, Construction of Line Segments & Perpendicular Bisectors, Construction of Angles (60°, 90°, 120°, 45°, 30°) and Angle Bisectors",
    concepts: [
      "Tools: Ruler (straight edge), Compasses (arcs & circles), Divider, Set Squares, Protractor.",
      "Perpendicular Bisector: A line dividing a segment into two equal halves at 90°.",
      "Standard Angle Construction with Compass: 60° (arc radius = compass opening), 120° (two consecutive 60° arcs), 90° (bisector of 60° and 120°), 45° (bisector of 90°), 30° (bisector of 60°)."
    ],
    svg: `<svg viewBox="0 0 540 110" width="100%" height="110" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="80" x2="240" y2="80" stroke="#0f172a" stroke-width="2"/><circle cx="80" cy="80" r="3" fill="#2563eb"/><circle cx="240" cy="80" r="3" fill="#2563eb"/><text x="75" y="95" font-family="sans-serif" font-size="11" fill="#1e40af">A</text><text x="240" y="95" font-family="sans-serif" font-size="11" fill="#1e40af">B</text><line x1="160" y1="20" x2="160" y2="100" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/><text x="160" y="15" font-family="sans-serif" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">Perpendicular Bisector</text><line x1="330" y1="80" x2="470" y2="80" stroke="#0f172a" stroke-width="2"/><line x1="330" y1="80" x2="400" y2="20" stroke="#2563eb" stroke-width="2"/><path d="M 360,80 A 30,30 0 0,0 350,62" fill="none" stroke="#2563eb" stroke-width="2"/><text x="375" y="65" font-family="sans-serif" font-size="11" font-weight="700" fill="#1d4ed8">60°</text><text x="400" y="100" font-family="sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">Compass Arc Method for 60°</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Draw a circle of radius 3.2 cm. Draw any circle and mark points A, B and C such that: (a) A is on the circle. (b) B is in the interior of the circle. (c) C is in the exterior of the circle.",
        marks: 3,
        ans: "<strong>Circle Construction:</strong><br>1. Open compass to 3.2 cm using a ruler.<br>2. Mark point O as center and rotate compass 360° to draw circle.<br>3. Marking points: Point A on circumference (OA = r), Point B inside (OB < r), Point C outside (OC > r).",
        rubric: [{ key: "Accurate circle of radius 3.2 cm", marks: "1.5 Marks" }, { key: "Proper positioning of points A, B, C", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Draw a line segment AB of length 7.3 cm and find its axis of symmetry (perpendicular bisector). Write steps of construction.",
        marks: 3,
        ans: "<strong>Steps of Construction:</strong><br>1. Draw line segment AB = 7.3 cm using a ruler.<br>2. With center A and radius greater than half of AB (> 3.65 cm), draw arcs above and below AB.<br>3. With center B and the same radius, draw arcs cutting previous arcs at points P and Q.<br>4. Join PQ. Line PQ is the required perpendicular bisector (axis of symmetry) of AB.",
        rubric: [{ key: "Line segment AB = 7.3 cm", marks: "1 Mark" }, { key: "Intersecting compass arcs above and below", marks: "1 Mark" }, { key: "Drawing bisector line PQ", marks: "1 Mark" }]
      },
      {
        num: 3,
        title: "Construct with ruler and compasses, angles of following measures: (a) 60° (b) 90° (c) 45°.",
        marks: 4,
        ans: "<strong>Compass Angle Constructions:</strong><br>• (a) <strong>60°:</strong> Draw ray OA. With center O, draw arc cutting OA at P. With center P and same radius, cut arc at Q. Ray OQ forms ∠AOQ = 60°.<br>• (b) <strong>90°:</strong> Cut another arc at R (120°). Draw intersecting arcs from Q and R to find bisector. The ray forms 90° with OA.<br>• (c) <strong>45°:</strong> Bisect the 90° angle by drawing arcs from ray OA and ray 90°. The bisector ray forms 45°.",
        rubric: [{ key: "Accurate construction of 60°", marks: "1.5 Marks" }, { key: "Accurate construction of 90°", marks: "1.5 Marks" }, { key: "Bisecting 90° to get 45°", marks: "1 Mark" }]
      }
    ],
    cbq: {
      title: "Surveying & Civil Engineering: Road Perpendicular Intersection",
      question: "Civil engineers must lay an underground pipeline perpendicular to highway segment PQ at its midpoint M. (a) Name the geometrical construct required. (b) Explain why an ordinary protractor is insufficient for large-scale field work compared to compass triangulation. (c) If PM = 45 m, what is the length of PQ?",
      answer: "<strong>(a) Construct:</strong> Perpendicular Bisector.<br><strong>(b) Compass Triangulation:</strong> On a physical terrain, laser distance meters and optical compass arcs guarantee millimeter precision over large distances where a plastic protractor's angular error magnifies exponentially.<br><strong>(c) Length of PQ:</strong> Since M is midpoint, PQ = 2 × PM = 2 × 45 = <strong>90 metres</strong>."
    }
  }
];

// Write file
const outPath = path.join(__dirname, '..', 'data-c6-classic', 'mathsClassicData.js');
const fileContent = `// NCERT Class 6 Mathematics Classic (14 Chapters) Data\nmodule.exports = { mathsClassicChapters: ${JSON.stringify(mathsClassicChapters, null, 2)} };\n`;
fs.writeFileSync(outPath, fileContent, 'utf-8');
console.log(`Successfully generated ${mathsClassicChapters.length} Mathematics Classic Chapters in:`, outPath);
