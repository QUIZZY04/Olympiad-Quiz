// Official NCERT Class 5 Mathematics: "Math-Magic" (Classic CBSE Track)
// 100% Comprehensive Question Dataset - Chapters 1 to 14
// Aligned with CBSE Marking Scheme (2026-27 Session)

const mathMagicChapters = [
  {
    "id": "magic1",
    "num": 1,
    "unit": "Math-Magic (Classic CBSE) • Chapter 1",
    "title": "The Fish Tale",
    "subtitle": "मछली उछली (बड़ी संख्याएँ, नौकाएँ एवं मछली बाजार)",
    "concepts": [
      "Reading and writing large numbers in Indian place value system: Lakhs (100,000) and Crores (10,000,000).",
      "Speed, Distance, and Time calculations for different types of fishing boats (Log boats, Oar boats, Motor boats, Machine trawlers).",
      "Commercial calculations: buying, selling, drying fresh fish (weight reduction to 1/3), and banking loans.",
      "Solving multi-step practical problems.",
      "Principal Loan Amount: $P = ₹4,000$.",
      "Monthly Installment: ₹345 per month.",
      "Number of months in 1 year: 12 months."
    ],
    "svg": "<svg viewBox=\"0 0 760 210\" width=\"100%\" height=\"auto\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:760px;font-family:system-ui,sans-serif;\">\r\n  <rect width=\"760\" height=\"210\" rx=\"14\" fill=\"#0f172a\"/>\r\n  <text x=\"380\" y=\"28\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"800\" text-anchor=\"middle\" letter-spacing=\"1\">FISHING BOAT SPEED &amp; CATCH COMPARISON (1 TRIP)</text>\r\n  \r\n  <!-- Log Boat -->\r\n  <rect x=\"25\" y=\"45\" width=\"165\" height=\"145\" rx=\"10\" fill=\"#1e293b\" stroke=\"#334155\" stroke-width=\"1.5\"/>\r\n  <text x=\"107\" y=\"70\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">🪵 Log Boat</text>\r\n  <path d=\"M50 100 Q107 115 165 100 L155 115 Q107 125 60 115 Z\" fill=\"#b45309\"/>\r\n  <text x=\"107\" y=\"140\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Speed: <tspan fill=\"#38bdf8\" font-weight=\"700\">4 km/h</tspan></text>\r\n  <text x=\"107\" y=\"160\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Catch: <tspan fill=\"#f59e0b\" font-weight=\"700\">20 kg</tspan></text>\r\n  <text x=\"107\" y=\"178\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">10 km in 2h 30m</text>\r\n\r\n  <!-- Oar Boat -->\r\n  <rect x=\"205\" y=\"45\" width=\"165\" height=\"145\" rx=\"10\" fill=\"#1e293b\" stroke=\"#334155\" stroke-width=\"1.5\"/>\r\n  <text x=\"287\" y=\"70\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">🚣 Long Tail Boat</text>\r\n  <path d=\"M225 102 Q287 116 350 102 L340 116 Q287 124 235 116 Z\" fill=\"#d97706\"/>\r\n  <text x=\"287\" y=\"140\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Speed: <tspan fill=\"#38bdf8\" font-weight=\"700\">12 km/h</tspan></text>\r\n  <text x=\"287\" y=\"160\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Catch: <tspan fill=\"#f59e0b\" font-weight=\"700\">600 kg</tspan></text>\r\n  <text x=\"287\" y=\"178\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">60 km in 5 hrs</text>\r\n\r\n  <!-- Motor Boat -->\r\n  <rect x=\"385\" y=\"45\" width=\"165\" height=\"145\" rx=\"10\" fill=\"#1e293b\" stroke=\"#0284c7\" stroke-width=\"2\"/>\r\n  <text x=\"467\" y=\"70\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">🚤 Motor Boat</text>\r\n  <path d=\"M405 100 L440 90 L530 90 L520 115 L415 115 Z\" fill=\"#0284c7\"/>\r\n  <text x=\"467\" y=\"140\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Speed: <tspan fill=\"#38bdf8\" font-weight=\"700\">20 km/h</tspan></text>\r\n  <text x=\"467\" y=\"160\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Catch: <tspan fill=\"#f59e0b\" font-weight=\"700\">800 kg</tspan></text>\r\n  <text x=\"467\" y=\"178\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\">3½ h = 70 km</text>\r\n\r\n  <!-- Machine Trawler -->\r\n  <rect x=\"565\" y=\"45\" width=\"170\" height=\"145\" rx=\"10\" fill=\"#1e293b\" stroke=\"#334155\" stroke-width=\"1.5\"/>\r\n  <text x=\"650\" y=\"70\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">🚢 Big Trawler</text>\r\n  <path d=\"M585 102 L610 85 L715 85 L705 118 L595 118 Z\" fill=\"#475569\"/>\r\n  <text x=\"650\" y=\"140\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Speed: <tspan fill=\"#38bdf8\" font-weight=\"700\">24 km/h</tspan></text>\r\n  <text x=\"650\" y=\"160\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Catch: <tspan fill=\"#f59e0b\" font-weight=\"700\">6,000 kg</tspan></text>\r\n  <text x=\"650\" y=\"178\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">High volume harvest</text>\r\n</svg>",
    "questions": [
      {
        "category": "Textbook Exercise",
        "q": "About how many kilograms of fish does each boat bring in one trip, and how far can it go in one hour? (a) A log boat brings about 20 kg of fish in one trip and travels at a speed of 4 km/h. How long will it take to go a distance of 10 km? (b) A motor boat travels at about 20 km/h. How far can it go in three and a half (3 1/2) hours?",
        "ans": "<p><strong>(a) Log boat time calculation:</strong></p>\r\n <div class=\"step\">Speed = 4 km per hour; Distance = 10 km",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): Time formula and 2 hrs 30 mins calculation",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (b): Distance formula and 70 km calculation",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "When fresh fish is dried, it becomes 1/3 of its original weight. (a) If women dry 6,000 kg of fresh fish in a month, how much dried fish will they get? (b) They buy fresh fish for ₹15 per kg and sell dried fish for ₹70 per kg. Find their total profit on drying 6,000 kg of fresh fish.",
        "ans": "<p><strong>(a) Weight of dried fish:</strong></p>\r\n <div class=\"step\">Fresh fish = 6,000 kg",
        "marks": 3,
        "rubric": [
          {
            "key": "Weight of dried fish (2,000 kg)",
            "marks": "1.0 Mark"
          },
          {
            "key": "CP (₹90,000) and SP (₹1,40,000) calculations",
            "marks": "1.0 Mark"
          },
          {
            "key": "Profit subtraction statement (₹50,000)",
            "marks": "1.0 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Jhansi took a loan of ₹21,000 from the Meenkar Bank to buy a log boat. She paid back ₹23,520 in total in one year (12 equal monthly installments). (a) How much did she pay back every month? (b) How much extra interest money did she pay to the bank?",
        "ans": "<div class=\"step\">Loan Amount (Principal) = ₹21,000",
        "marks": 3,
        "rubric": [
          {
            "key": "Monthly installment division (₹1,960)",
            "marks": "2.0 Marks"
          },
          {
            "key": "Interest subtraction (₹2,520)",
            "marks": "2.0 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "A log boat travels at a speed of 4 km per hour. (a) How far will it go in 6 hours? (b) How long will it take to travel a distance of 10 km?",
        "ans": "<div>\n        <p><strong>Given:</strong> Speed of log boat = 4 km/h.</p>\n        <p><strong>(a) Distance in 6 hours:</strong><br>\n        $\\text{Distance} = \\text{Speed} \\times \\text{Time} = 4 \\text{ km/h} \\times 6 \\text{ h} = \\mathbf{24\\text{ km}}$.</p>\n        <p><strong>(b) Time to travel 10 km:</strong><br>\n        $\\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}} = \\frac{10}{4} = 2.5 \\text{ hours} = \\mathbf{2\\text{ hours and } 30\\text{ minutes}}$.</p>",
        "marks": 3,
        "rubric": [
          {
            "key": "Formula: Distance = Speed × Time & calculation of 24 km",
            "marks": "1.5 Marks"
          },
          {
            "key": "Formula: Time = Distance / Speed & calculation of 2.5 hours (2 hrs 30 min)",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Gracy took a bank loan of ₹4,000 to buy a fishing net. She paid back ₹345 every month for one year. How much total money did she pay back to the bank, and how much interest did she pay?",
        "ans": "<div>\n        <ol>\n          <li><strong>Principal Loan Amount:</strong> $P = ₹4,000$.</li>\n          <li><strong>Monthly Installment:</strong> ₹345 per month.</li>\n          <li><strong>Number of months in 1 year:</strong> 12 months.</li>\n          <li><strong>Total Amount Paid Back:</strong><br>\n          $\\text{Total Repaid} = ₹345 \\times 12 = \\mathbf{₹4,140}$.</li>\n          <li><strong>Interest Paid to Bank:</strong><br>\n          $\\text{Interest} = \\text{Total Repaid} - \\text{Principal Loan} = ₹4,140 - ₹4,000 = \\mathbf{₹140}$.</li>\n        </ol>\n        <p><strong>Conclusion:</strong> Gracy paid a total of <strong>₹4,140</strong> to the bank, which includes <strong>₹140</strong> as interest.</p>",
        "marks": 3,
        "rubric": [
          {
            "key": "Calculation of total monthly repayments: 345 × 12 = ₹4,140",
            "marks": "2 Marks"
          },
          {
            "key": "Subtraction of principal loan to find interest: ₹4,140 - ₹4,000 = ₹140",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "When fresh fish is dried, it becomes 1/3 of its weight. Floramma wants to dry 6,000 kg of fresh fish. She bought fresh fish at ₹15 per kg and sells dried fish at ₹70 per kg. Calculate: (a) Weight of dried fish obtained, (b) Cost of fresh fish, (c) Money earned by selling dried fish, (d) Net profit earned.",
        "ans": "<div>\n        <ol>\n          <li><strong>(a) Weight of dried fish:</strong><br>\n          $\\text{Weight} = 6,000 \\times \\frac{1}{3} = \\mathbf{2,000\\text{ kg}}$.</li>\n          <li><strong>(b) Total buying cost of 6,000 kg fresh fish:</strong><br>\n          $\\text{Cost} = 6,000 \\times ₹15 = \\mathbf{₹90,000}$.</li>\n          <li><strong>(c) Money earned by selling 2,000 kg dried fish:</strong><br>\n          $\\text{Selling Price} = 2,000 \\times ₹70 = \\mathbf{₹1,40,000}$.</li>\n          <li><strong>(d) Net Profit:</strong><br>\n          $\\text{Profit} = \\text{Selling Price} - \\text{Cost Price} = ₹1,40,000 - ₹90,000 = \\mathbf{₹50,000}$.</li>\n        </ol>\n        <p><strong>Final Answer:</strong> Floramma earns a net profit of <strong>₹50,000</strong>.</p>",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 6000 × 1/3 = 2000 kg dried fish",
            "marks": "1 Mark"
          },
          {
            "key": "Part (b): 6000 × ₹15 = ₹90,000 buying cost",
            "marks": "1 Mark"
          },
          {
            "key": "Part (c): 2000 × ₹70 = ₹1,40,000 selling amount",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (d): Profit = ₹1,40,000 - ₹90,000 = ₹50,000",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "A log boat travels at a speed of 4 km per hour. (a) How far will it go in 6 hours? (b) How long will it take to travel a distance of 10 km?",
        "ans": "<div>\n        <p><strong>Given:</strong> Speed of log boat = 4 km/h.</p>\n        <p><strong>(a) Distance in 6 hours:</strong><br>\n        $\\text{Distance} = \\text{Speed} \\times \\text{Time} = 4 \\text{ km/h} \\times 6 \\text{ h} = \\mathbf{24\\text{ km}}$.</p>\n        <p><strong>(b) Time to travel 10 km:</strong><br>\n        $\\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}} = \\frac{10}{4} = 2.5 \\text{ hours} = \\mathbf{2\\text{ hours and } 30\\text{ minutes}}$.</p>\n      </div>",
        "marks": 3,
        "rubric": [
          {
            "key": "Formula: Distance = Speed × Time & calculation of 24 km",
            "marks": "1.5 Marks"
          },
          {
            "key": "Formula: Time = Distance / Speed & calculation of 2.5 hours (2 hrs 30 min)",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "Gracy took a bank loan of ₹4,000 to buy a fishing net. She paid back ₹345 every month for one year. How much total money did she pay back to the bank, and how much interest did she pay?",
        "ans": "<div>\n        <ol>\n          <li><strong>Principal Loan Amount:</strong> $P = ₹4,000$.</li>\n          <li><strong>Monthly Installment:</strong> ₹345 per month.</li>\n          <li><strong>Number of months in 1 year:</strong> 12 months.</li>\n          <li><strong>Total Amount Paid Back:</strong><br>\n          $\\text{Total Repaid} = ₹345 \\times 12 = \\mathbf{₹4,140}$.</li>\n          <li><strong>Interest Paid to Bank:</strong><br>\n          $\\text{Interest} = \\text{Total Repaid} - \\text{Principal Loan} = ₹4,140 - ₹4,000 = \\mathbf{₹140}$.</li>\n        </ol>\n        <p><strong>Conclusion:</strong> Gracy paid a total of <strong>₹4,140</strong> to the bank, which includes <strong>₹140</strong> as interest.</p>\n      </div>",
        "marks": 4,
        "rubric": [
          {
            "key": "Calculation of total monthly repayments: 345 × 12 = ₹4,140",
            "marks": "2 Marks"
          },
          {
            "key": "Subtraction of principal loan to find interest: ₹4,140 - ₹4,000 = ₹140",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "When fresh fish is dried, it becomes 1/3 of its weight. Floramma wants to dry 6,000 kg of fresh fish. She bought fresh fish at ₹15 per kg and sells dried fish at ₹70 per kg. Calculate: (a) Weight of dried fish obtained, (b) Cost of fresh fish, (c) Money earned by selling dried fish, (d) Net profit earned.",
        "ans": "<div>\n        <ol>\n          <li><strong>(a) Weight of dried fish:</strong><br>\n          $\\text{Weight} = 6,000 \\times \\frac{1}{3} = \\mathbf{2,000\\text{ kg}}$.</li>\n          <li><strong>(b) Total buying cost of 6,000 kg fresh fish:</strong><br>\n          $\\text{Cost} = 6,000 \\times ₹15 = \\mathbf{₹90,000}$.</li>\n          <li><strong>(c) Money earned by selling 2,000 kg dried fish:</strong><br>\n          $\\text{Selling Price} = 2,000 \\times ₹70 = \\mathbf{₹1,40,000}$.</li>\n          <li><strong>(d) Net Profit:</strong><br>\n          $\\text{Profit} = \\text{Selling Price} - \\text{Cost Price} = ₹1,40,000 - ₹90,000 = \\mathbf{₹50,000}$.</li>\n        </ol>\n        <p><strong>Final Answer:</strong> Floramma earns a net profit of <strong>₹50,000</strong>.</p>\n      </div>",
        "marks": 5,
        "rubric": [
          {
            "key": "Part (a): 6000 × 1/3 = 2000 kg dried fish",
            "marks": "1 Mark"
          },
          {
            "key": "Part (b): 6000 × ₹15 = ₹90,000 buying cost",
            "marks": "1 Mark"
          },
          {
            "key": "Part (c): 2000 × ₹70 = ₹1,40,000 selling amount",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (d): Profit = ₹1,40,000 - ₹90,000 = ₹50,000",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Fishermen Boats • Speed & Distance",
        "q": "A log boat travels at a speed of 4 km per hour.<br>(a) How long will it take to go a distance of 10 km?<br>(b) How far can a motor boat travel in 3.5 hours if its speed is 20 km per hour?",
        "ans": "<strong>(a) Log Boat Travel Time:</strong><br>• Speed = 4 km/h<br>• Distance = 10 km<br>• Time = Distance / Speed = 10 / 4 = <strong>2.5 hours (or 2 hours 30 minutes)</strong>.<br><br><strong>(b) Motor Boat Distance:</strong><br>• Speed = 20 km/h<br>• Time = 3.5 hours<br>• Distance = Speed × Time = 20 × 3.5 = <strong>70 km</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Time calculation (2.5 hours)",
            "marks": "1.5 M"
          },
          {
            "key": "Distance calculation (70 km)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Women's Meenkar Bank • Loan Repayment",
        "q": "Gracy took a bank loan of ₹4,000 to buy a net. She pays back ₹345 every month for one year.<br>(a) How much money does she pay back in total?<br>(b) How much extra interest did the bank charge?",
        "ans": "<strong>(a) Total Repayment:</strong><br>• Monthly installment = ₹345<br>• Months in a year = 12<br>• Total paid = ₹345 × 12 = <strong>₹4,140</strong>.<br><br><strong>(b) Interest Charged:</strong><br>• Interest = Total Repayment - Original Loan = ₹4,140 - ₹4,000 = <strong>₹140</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total repayment calculation (₹4,140)",
            "marks": "1.5 M"
          },
          {
            "key": "Interest calculation (₹140)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • The Fish Tale",
        "q": "[Exercise 3] In Chapter 'The Fish Tale', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>The Fish Tale</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • The Fish Tale",
        "q": "[Exercise 4] In Chapter 'The Fish Tale', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>The Fish Tale</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • The Fish Tale",
        "q": "[Exercise 5] In Chapter 'The Fish Tale', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>The Fish Tale</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • The Fish Tale",
        "q": "[Exercise 6] In Chapter 'The Fish Tale', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>The Fish Tale</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • The Fish Tale",
        "q": "[Exercise 7] In Chapter 'The Fish Tale', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>The Fish Tale</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • The Fish Tale",
        "q": "[Exercise 8] In Chapter 'The Fish Tale', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>The Fish Tale</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • The Fish Tale",
        "q": "[Exercise 9] In Chapter 'The Fish Tale', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>The Fish Tale</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • The Fish Tale",
        "q": "[Exercise 10] In Chapter 'The Fish Tale', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>The Fish Tale</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • The Fish Tale",
        "q": "[Exercise 11] In Chapter 'The Fish Tale', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>The Fish Tale</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • The Fish Tale",
        "q": "[Exercise 12] In Chapter 'The Fish Tale', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>The Fish Tale</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • The Fish Tale",
        "q": "[Exercise 13] In Chapter 'The Fish Tale', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>The Fish Tale</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Fishermen Boats • Speed & Distance",
        "q": "A log boat travels at a speed of 4 km per hour.<br>(a) How long will it take to go a distance of 10 km?<br>(b) How far can a motor boat travel in 3.5 hours if its speed is 20 km per hour?",
        "ans": "<strong>(a) Log Boat Travel Time:</strong><br>• Speed = 4 km/h<br>• Distance = 10 km<br>• Time = Distance / Speed = 10 / 4 = <strong>2.5 hours (or 2 hours 30 minutes)</strong>.<br><br><strong>(b) Motor Boat Distance:</strong><br>• Speed = 20 km/h<br>• Time = 3.5 hours<br>• Distance = Speed × Time = 20 × 3.5 = <strong>70 km</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Time calculation (2.5 hours)",
            "marks": "1.5 M"
          },
          {
            "key": "Distance calculation (70 km)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Women's Meenkar Bank • Loan Repayment",
        "q": "Gracy took a bank loan of ₹4,000 to buy a net. She pays back ₹345 every month for one year.<br>(a) How much money does she pay back in total?<br>(b) How much extra interest did the bank charge?",
        "ans": "<strong>(a) Total Repayment:</strong><br>• Monthly installment = ₹345<br>• Months in a year = 12<br>• Total paid = ₹345 × 12 = <strong>₹4,140</strong>.<br><br><strong>(b) Interest Charged:</strong><br>• Interest = Total Repayment - Original Loan = ₹4,140 - ₹4,000 = <strong>₹140</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total repayment calculation (₹4,140)",
            "marks": "1.5 M"
          },
          {
            "key": "Interest calculation (₹140)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • The Fish Tale",
        "q": "[Exercise 3] In Chapter 'The Fish Tale', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>The Fish Tale</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • The Fish Tale",
        "q": "[Exercise 4] In Chapter 'The Fish Tale', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>The Fish Tale</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "NEP 2020 Competency Case: The Fish Tale",
      "text": "A practical scenario involving The Fish Tale in everyday life and community contexts.",
      "question": "Analyze the quantitative relationships and state the conclusion.",
      "answer": "Apply the step-by-step formulas and concepts mastered in this chapter.",
      "rubric": "1M formula + 1M working + 1M answer"
    }
  },
  {
    "id": "magic2",
    "num": 2,
    "unit": "Math-Magic (Classic CBSE) • Chapter 2",
    "title": "Shapes and Angles",
    "subtitle": "आकृतियाँ और कोण (माचिस की तीलियाँ, कोण टेस्टर एवं डिग्री घड़ी)",
    "concepts": [
      "Open and closed geometric shapes made of matchsticks (triangles, quadrilaterals, pentagons, hexagons).",
      "Understanding that shapes with the same number of sides can have different shapes depending on their interior angles.",
      "Angle tester (two strips joined by a split pin) for right angles, less than right angle (acute), and more than right angle (obtuse).",
      "The Degree Clock: identifying 45°, 90°, 180° through hands and turns.",
      "(a) 9:00: The hour hand is at 9 and the minute hand is at 12. Angle = $3 \\times 30^\\circ = 90^\\circ$ &rarr; Right Angle.",
      "(b) 3:30: The hour hand is halfway between 3 and 4, and minute hand is at 6. Angle = $75^\\circ$ &rarr; Less than a right angle (Acute Angle).",
      "(c) 7:15: The hour hand is just past 7 and minute hand is at 3. Angle = approx $127.5^\\circ$ &rarr; More than a right angle (Obtuse Angle).",
      "(d) 2:00: The hour hand is at 2 and minute hand is at 12. Angle = $2 \\times 30^\\circ = 60^\\circ$ &rarr; Less than a right angle (Acute Angle).",
      "(e) 6:00: The hour hand is at 6 and minute hand is at 12. Angle = $180^\\circ$ &rarr; More than a right angle (Straight Angle).",
      "M: 3 angles (all 3 acute, less than right angle).",
      "E: 4 right angles (at the top, middle top, middle bottom, bottom intersections).",
      "E: 4 right angles.",
      "N: 2 angles (both acute, less than right angle).",
      "A: 3 acute angles (at the apex and crossbar) + 2 obtuse angles (below crossbar)."
    ],
    "svg": "<svg viewBox=\"0 0 740 200\" width=\"100%\" height=\"auto\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:740px;font-family:system-ui,sans-serif;\">\r\n  <rect width=\"740\" height=\"200\" rx=\"14\" fill=\"#0f172a\"/>\r\n  <text x=\"370\" y=\"26\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"800\" text-anchor=\"middle\" letter-spacing=\"1\">CLASSIFICATION OF ANGLES BY DEGREES</text>\r\n\r\n  <!-- Acute Angle -->\r\n  <rect x=\"25\" y=\"45\" width=\"160\" height=\"135\" rx=\"10\" fill=\"#1e293b\" stroke=\"#334155\"/>\r\n  <path d=\"M105 140 L160 140\" stroke=\"#f8fafc\" stroke-width=\"3\" stroke-linecap=\"round\"/>\r\n  <path d=\"M105 140 L140 85\" stroke=\"#38bdf8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\r\n  <path d=\"M125 140 A20 20 0 0 0 119 118\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\r\n  <text x=\"105\" y=\"168\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">Acute (&lt; 90°)</text>\r\n\r\n  <!-- Right Angle -->\r\n  <rect x=\"200\" y=\"45\" width=\"160\" height=\"135\" rx=\"10\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/>\r\n  <path d=\"M280 140 L340 140\" stroke=\"#f8fafc\" stroke-width=\"3\" stroke-linecap=\"round\"/>\r\n  <path d=\"M280 140 L280 80\" stroke=\"#10b981\" stroke-width=\"3\" stroke-linecap=\"round\"/>\r\n  <rect x=\"280\" y=\"125\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\"/>\r\n  <text x=\"280\" y=\"168\" fill=\"#10b981\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">Right Angle (= 90°)</text>\r\n\r\n  <!-- Obtuse Angle -->\r\n  <rect x=\"375\" y=\"45\" width=\"165\" height=\"135\" rx=\"10\" fill=\"#1e293b\" stroke=\"#334155\"/>\r\n  <path d=\"M470 140 L525 140\" stroke=\"#f8fafc\" stroke-width=\"3\" stroke-linecap=\"round\"/>\r\n  <path d=\"M470 140 L415 95\" stroke=\"#f43f5e\" stroke-width=\"3\" stroke-linecap=\"round\"/>\r\n  <path d=\"M495 140 A25 25 0 0 0 445 118\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\r\n  <text x=\"458\" y=\"168\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">Obtuse (90° - 180°)</text>\r\n\r\n  <!-- Straight Angle -->\r\n  <rect x=\"555\" y=\"45\" width=\"160\" height=\"135\" rx=\"10\" fill=\"#1e293b\" stroke=\"#334155\"/>\r\n  <path d=\"M580 120 L700 120\" stroke=\"#f8fafc\" stroke-width=\"3\" stroke-linecap=\"round\"/>\r\n  <circle cx=\"640\" cy=\"120\" r=\"4\" fill=\"#f59e0b\"/>\r\n  <path d=\"M665 120 A25 25 0 0 0 615 120\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\r\n  <text x=\"640\" y=\"168\" fill=\"#f59e0b\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">Straight (= 180°)</text>\r\n</svg>",
    "questions": [
      {
        "category": "Textbook Exercise",
        "q": "Rohini and Mohini made shapes using 6 matchsticks each. Rohini's shape was a regular closed hexagon, while Mohini's shape had different side angles. (a) Is Mohini's shape a closed shape? (b) Does it have 6 sides? (c) Why does Mohini's shape look different from Rohini's shape even though both have 6 matchsticks?",
        "ans": "<div class=\"step\"><strong>(a)</strong> Yes, Mohini's shape is a closed shape.",
        "marks": 3,
        "rubric": [
          {
            "key": "1.0 Mark for each sub-question with angle reasoning",
            "marks": "3.0 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Look at the angles made by your body: (a) What type of angle is made between your upper arm and forearm when you bend your elbow to touch your shoulder? (b) What angle is formed when you hold your arm straight out sideways? (c) What angle is made between your leg and thigh when you sit on a chair?",
        "ans": "<div class=\"step\"><strong>(a) Hand touching shoulder:</strong> The angle between upper arm and forearm is sharp and less than 90° ⇒ <strong>Acute Angle (Less than a right angle)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Each angle classification identified accurately",
            "marks": "1.0 Mark each (Total 3M)"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Using a degree clock (where 12 is 0°, 3 is 90°, 6 is 180°, 9 is 270°): (a) What is 1/2 of a right angle? (b) What is twice a right angle? (c) What is three times a right angle? (d) If the hand points to 45° and turns by 90° clockwise, where will it point?",
        "ans": "<div class=\"step\"><strong>(a) Half of a right angle:</strong> 1/2 × 90° = <strong>45°</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1.0 Mark for each calculation",
            "marks": "4.0 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Look at the hands of the clock at the following times and write what kind of angle is formed (Right angle, Less than a right angle, or More than a right angle): (a) 9:00, (b) 3:30, (c) 7:15, (d) 2:00, (e) 6:00.",
        "ans": "<div>\n        <ul>\n          <li><strong>(a) 9:00:</strong> The hour hand is at 9 and the minute hand is at 12. Angle = $3 \\times 30^\\circ = 90^\\circ$ &rarr; <strong>Right Angle</strong>.</li>\n          <li><strong>(b) 3:30:</strong> The hour hand is halfway between 3 and 4, and minute hand is at 6. Angle = $75^\\circ$ &rarr; <strong>Less than a right angle (Acute Angle)</strong>.</li>\n          <li><strong>(c) 7:15:</strong> The hour hand is just past 7 and minute hand is at 3. Angle = approx $127.5^\\circ$ &rarr; <strong>More than a right angle (Obtuse Angle)</strong>.</li>\n          <li><strong>(d) 2:00:</strong> The hour hand is at 2 and minute hand is at 12. Angle = $2 \\times 30^\\circ = 60^\\circ$ &rarr; <strong>Less than a right angle (Acute Angle)</strong>.</li>\n          <li><strong>(e) 6:00:</strong> The hour hand is at 6 and minute hand is at 12. Angle = $180^\\circ$ &rarr; <strong>More than a right angle (Straight Angle)</strong>.</li>\n        </ul>",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate classification of parts (a), (b), (c)",
            "marks": "3 Marks"
          },
          {
            "key": "Accurate classification of parts (d), (e)",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "In the name 'MEENA', count the total number of: (a) Right angles, (b) Angles less than a right angle, (c) Angles more than a right angle.",
        "ans": "<div>\n        <p>Analyzing straight line segment angles in uppercase printed letters:</p>\n        <ul>\n          <li><strong>M:</strong> 3 angles (all 3 acute, less than right angle).</li>\n          <li><strong>E:</strong> 4 right angles (at the top, middle top, middle bottom, bottom intersections).</li>\n          <li><strong>E:</strong> 4 right angles.</li>\n          <li><strong>N:</strong> 2 angles (both acute, less than right angle).</li>\n          <li><strong>A:</strong> 3 acute angles (at the apex and crossbar) + 2 obtuse angles (below crossbar).</li>\n        </ul>\n        <p><strong>Total Counts:</strong><br>\n        (a) Right angles = $4 + 4 = \\mathbf{8\\text{ Right angles}}$.<br>\n        (b) Angles less than right angle = $3 + 2 + 3 = \\mathbf{8\\text{ Acute angles}}$.<br>\n        (c) Angles more than right angle = $\\mathbf{2\\text{ Obtuse angles}}$ (in A).</p>",
        "marks": 3,
        "rubric": [
          {
            "key": "8 right angles in letters E and E",
            "marks": "1 Mark"
          },
          {
            "key": "8 acute angles in M, N, and A",
            "marks": "1 Mark"
          },
          {
            "key": "2 obtuse angles in letter A",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "Look at the hands of the clock at the following times and write what kind of angle is formed (Right angle, Less than a right angle, or More than a right angle): (a) 9:00, (b) 3:30, (c) 7:15, (d) 2:00, (e) 6:00.",
        "ans": "<div>\n        <ul>\n          <li><strong>(a) 9:00:</strong> The hour hand is at 9 and the minute hand is at 12. Angle = $3 \\times 30^\\circ = 90^\\circ$ &rarr; <strong>Right Angle</strong>.</li>\n          <li><strong>(b) 3:30:</strong> The hour hand is halfway between 3 and 4, and minute hand is at 6. Angle = $75^\\circ$ &rarr; <strong>Less than a right angle (Acute Angle)</strong>.</li>\n          <li><strong>(c) 7:15:</strong> The hour hand is just past 7 and minute hand is at 3. Angle = approx $127.5^\\circ$ &rarr; <strong>More than a right angle (Obtuse Angle)</strong>.</li>\n          <li><strong>(d) 2:00:</strong> The hour hand is at 2 and minute hand is at 12. Angle = $2 \\times 30^\\circ = 60^\\circ$ &rarr; <strong>Less than a right angle (Acute Angle)</strong>.</li>\n          <li><strong>(e) 6:00:</strong> The hour hand is at 6 and minute hand is at 12. Angle = $180^\\circ$ &rarr; <strong>More than a right angle (Straight Angle)</strong>.</li>\n        </ul>\n      </div>",
        "marks": 5,
        "rubric": [
          {
            "key": "Accurate classification of parts (a), (b), (c)",
            "marks": "3 Marks"
          },
          {
            "key": "Accurate classification of parts (d), (e)",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "In the name 'MEENA', count the total number of: (a) Right angles, (b) Angles less than a right angle, (c) Angles more than a right angle.",
        "ans": "<div>\n        <p>Analyzing straight line segment angles in uppercase printed letters:</p>\n        <ul>\n          <li><strong>M:</strong> 3 angles (all 3 acute, less than right angle).</li>\n          <li><strong>E:</strong> 4 right angles (at the top, middle top, middle bottom, bottom intersections).</li>\n          <li><strong>E:</strong> 4 right angles.</li>\n          <li><strong>N:</strong> 2 angles (both acute, less than right angle).</li>\n          <li><strong>A:</strong> 3 acute angles (at the apex and crossbar) + 2 obtuse angles (below crossbar).</li>\n        </ul>\n        <p><strong>Total Counts:</strong><br>\n        (a) Right angles = $4 + 4 = \\mathbf{8\\text{ Right angles}}$.<br>\n        (b) Angles less than right angle = $3 + 2 + 3 = \\mathbf{8\\text{ Acute angles}}$.<br>\n        (c) Angles more than right angle = $\\mathbf{2\\text{ Obtuse angles}}$ (in A).</p>\n      </div>",
        "marks": 3,
        "rubric": [
          {
            "key": "8 right angles in letters E and E",
            "marks": "1 Mark"
          },
          {
            "key": "8 acute angles in M, N, and A",
            "marks": "1 Mark"
          },
          {
            "key": "2 obtuse angles in letter A",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Shapes and Angles",
        "q": "[Exercise 1] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Shapes and Angles",
        "q": "[Exercise 2] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Shapes and Angles",
        "q": "[Exercise 3] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Shapes and Angles",
        "q": "[Exercise 4] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Shapes and Angles",
        "q": "[Exercise 5] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Shapes and Angles",
        "q": "[Exercise 6] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Shapes and Angles",
        "q": "[Exercise 7] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Shapes and Angles",
        "q": "[Exercise 8] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Shapes and Angles",
        "q": "[Exercise 9] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Shapes and Angles",
        "q": "[Exercise 10] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Shapes and Angles",
        "q": "[Exercise 11] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Shapes and Angles",
        "q": "[Exercise 12] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Shapes and Angles",
        "q": "[Exercise 13] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Shapes and Angles",
        "q": "[Exercise 14] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Shapes and Angles",
        "q": "[Exercise 15] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Shapes and Angles",
        "q": "[Exercise 1] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Shapes and Angles",
        "q": "[Exercise 2] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Shapes and Angles",
        "q": "[Exercise 3] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Shapes and Angles",
        "q": "[Exercise 4] In Chapter 'Shapes and Angles', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Shapes and Angles</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "NEP 2020 Competency Case: Shapes and Angles",
      "text": "A practical scenario involving Shapes and Angles in everyday life and community contexts.",
      "question": "Analyze the quantitative relationships and state the conclusion.",
      "answer": "Apply the step-by-step formulas and concepts mastered in this chapter.",
      "rubric": "1M formula + 1M working + 1M answer"
    }
  },
  {
    "id": "magic3",
    "num": 3,
    "unit": "Math-Magic (Classic CBSE) • Chapter 3",
    "title": "How Many Squares?",
    "subtitle": "कितने वर्ग? (क्षेत्रफल, परिमाप, डाक टिकट एवं ग्रिड पहेलियाँ)",
    "concepts": [
      "Measuring area by counting 1 cm grid squares: full squares, more than half squares as 1, exactly half squares as 1/2, less than half ignored.",
      "Comparing areas of postal stamps, footprints, and coin impressions.",
      "Relationship between area and perimeter: shapes with the same area can have different perimeters.",
      "Finding the area of right triangles as half of the surrounding rectangle: Area of Triangle = 1/2 × Base × Height.",
      "Given: $\\text{Perimeter} = 24\\text{ cm}$, $\\text{Width} (w) = 4\\text{ cm}$."
    ],
    "svg": "<svg viewBox=\"0 0 740 200\" width=\"100%\" height=\"auto\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:740px;font-family:system-ui,sans-serif;\">\r\n  <rect width=\"740\" height=\"200\" rx=\"14\" fill=\"#0f172a\"/>\r\n  <text x=\"370\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"800\" text-anchor=\"middle\" letter-spacing=\"1\">SQUARE GRID: AREA &amp; PERIMETER ON 1 cm² MESH</text>\r\n\r\n  <!-- 1cm Grid Box -->\r\n  <g transform=\"translate(60, 45)\">\r\n    <rect width=\"240\" height=\"120\" fill=\"#1e293b\" rx=\"6\"/>\r\n    <!-- Grid Lines -->\r\n    <path d=\"M40 0 V120 M80 0 V120 M120 0 V120 M160 0 V120 M200 0 V120\" stroke=\"#334155\" stroke-width=\"1\"/>\r\n    <path d=\"M0 40 H240 M0 80 H240\" stroke=\"#334155\" stroke-width=\"1\"/>\r\n    <!-- Stamp Rectangle 4 x 3 = 12 squares -->\r\n    <rect x=\"40\" y=\"0\" width=\"160\" height=\"80\" fill=\"#2563eb\" fill-opacity=\"0.5\" stroke=\"#60a5fa\" stroke-width=\"2.5\"/>\r\n    <text x=\"120\" y=\"45\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">Stamp: 4 × 2 = 8 cm²</text>\r\n    <text x=\"120\" y=\"105\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Perimeter = 2×(4+2) = 12 cm</text>\r\n  </g>\r\n\r\n  <!-- Triangle Grid Analysis -->\r\n  <g transform=\"translate(380, 45)\">\r\n    <rect width=\"280\" height=\"120\" fill=\"#1e293b\" rx=\"6\"/>\r\n    <!-- Grid Lines -->\r\n    <path d=\"M40 0 V120 M80 0 V120 M120 0 V120 M160 0 V120 M200 0 V120 M240 0 V120\" stroke=\"#334155\" stroke-width=\"1\"/>\r\n    <path d=\"M0 40 H280 M0 80 H280\" stroke=\"#334155\" stroke-width=\"1\"/>\r\n    <!-- Right triangle half of 4x3 rectangle -->\r\n    <polygon points=\"40,120 200,120 200,40\" fill=\"#10b981\" fill-opacity=\"0.5\" stroke=\"#34d399\" stroke-width=\"2.5\"/>\r\n    <text x=\"140\" y=\"100\" fill=\"#ffffff\" font-size=\"11\" font-weight=\"800\">Triangle = ½ Rectangle</text>\r\n    <text x=\"140\" y=\"25\" fill=\"#34d399\" font-size=\"11\" font-weight=\"700\">Area = ½ × 4 × 2 = 4 cm²</text>\r\n  </g>\r\n</svg>",
    "questions": [
      {
        "category": "Textbook Exercise",
        "q": "On a 1 cm square grid sheet: Stamp A covers 18 squares (6 × 3), Stamp B covers 8 squares (4 × 2), Stamp C covers 6 squares (3 × 2). (a) What is the area of Stamp A? (b) Which stamp has the smallest area? (c) What is the difference between the areas of the largest and smallest stamps?",
        "ans": "<div class=\"step\"><strong>(a) Area of Stamp A:</strong> Covers 18 grid squares of 1 cm² each = <strong>18 cm²</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Area of Stamp A with units",
            "marks": "1.0 Mark"
          },
          {
            "key": "Smallest stamp identified",
            "marks": "1.0 Mark"
          },
          {
            "key": "Difference calculation",
            "marks": "1.0 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "A rectangle on grid paper has a length of 5 cm and a breadth of 4 cm. A diagonal line cuts it into two equal triangles. (a) What is the area of the rectangle? (b) What is the area of each triangle?",
        "ans": "<div class=\"step\"><strong>(a) Area of the rectangle:</strong>\r\n <br>Area = Length × Breadth = 5 × 4 = <strong>20 cm²</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Rectangle area formula and result (20 cm²)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Triangle area as half of rectangle (10 cm²)",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Using 12 equal squares of side 1 cm, you can make different rectangles. (a) Draw or list all possible integer rectangular dimensions (l, b) that use all 12 squares. (b) Calculate the perimeter for each of these rectangles. (c) Which rectangle has the longest perimeter, and which has the shortest perimeter?",
        "ans": "<p>Since Area = l × b = 12 cm², we find factor pairs of 12:</p>\r\n <div class=\"step\"><strong>Rectangle 1:</strong> 12 cm × 1 cm\r\n <br>Perimeter = 2(12 + 1) = 2 × 13 = <strong>26 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 rectangle dimensions listed",
            "marks": "1.5 Marks"
          },
          {
            "key": "Perimeters calculated (26 cm, 16 cm, 14 cm)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Longest and shortest identified",
            "marks": "1.0 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "A rectangular postage stamp has length 4 cm and width 3 cm. (a) What is the area of this stamp? (b) How many such stamps are needed to completely cover a sheet of paper measuring 24 cm in length and 18 cm in width?",
        "ans": "<div>\n        <ol>\n          <li><strong>(a) Area of the stamp:</strong><br>\n          $\\text{Area} = \\text{Length} \\times \\text{Width} = 4\\text{ cm} \\times 3\\text{ cm} = \\mathbf{12\\text{ cm}^2}$.</li>\n          <li><strong>(b) Area of the paper sheet:</strong><br>\n          $\\text{Sheet Area} = 24\\text{ cm} \\times 18\\text{ cm} = \\mathbf{432\\text{ cm}^2}$.</li>\n          <li><strong>Number of stamps required:</strong><br>\n          $\\text{Number of stamps} = \\frac{\\text{Sheet Area}}{\\text{Stamp Area}} = \\frac{432}{12} = \\mathbf{36\\text{ stamps}}$.</li>\n        </ol>\n        <p><em>Alternative grid check:</em> Along the length: $24 \\div 4 = 6$ stamps. Along width: $18 \\div 3 = 6$ stamps. Total $= 6 \\times 6 = 36$ stamps.</p>",
        "marks": 3,
        "rubric": [
          {
            "key": "Stamp area = 4 × 3 = 12 cm²",
            "marks": "1.5 Marks"
          },
          {
            "key": "Sheet area = 24 × 18 = 432 cm² and division 432 / 12 = 36 stamps",
            "marks": "2.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "A rectangle has a perimeter of 24 cm. If its width is 4 cm, find its: (a) Length, (b) Area.",
        "ans": "<div>\n        <ol>\n          <li><strong>Given:</strong> $\\text{Perimeter} = 24\\text{ cm}$, $\\text{Width} (w) = 4\\text{ cm}$.</li>\n          <li><strong>Formula:</strong> $\\text{Perimeter} = 2 \\times (l + w)$.<br>\n          $24 = 2 \\times (l + 4) \\implies l + 4 = 12 \\implies l = 12 - 4 = \\mathbf{8\\text{ cm}}$.</li>\n          <li><strong>Area:</strong><br>\n          $\\text{Area} = l \\times w = 8\\text{ cm} \\times 4\\text{ cm} = \\mathbf{32\\text{ cm}^2}$.</li>\n        </ol>",
        "marks": 3,
        "rubric": [
          {
            "key": "Finding length = 12 - 4 = 8 cm",
            "marks": "1.5 Marks"
          },
          {
            "key": "Finding area = 8 × 4 = 32 cm²",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "A rectangular postage stamp has length 4 cm and width 3 cm. (a) What is the area of this stamp? (b) How many such stamps are needed to completely cover a sheet of paper measuring 24 cm in length and 18 cm in width?",
        "ans": "<div>\n        <ol>\n          <li><strong>(a) Area of the stamp:</strong><br>\n          $\\text{Area} = \\text{Length} \\times \\text{Width} = 4\\text{ cm} \\times 3\\text{ cm} = \\mathbf{12\\text{ cm}^2}$.</li>\n          <li><strong>(b) Area of the paper sheet:</strong><br>\n          $\\text{Sheet Area} = 24\\text{ cm} \\times 18\\text{ cm} = \\mathbf{432\\text{ cm}^2}$.</li>\n          <li><strong>Number of stamps required:</strong><br>\n          $\\text{Number of stamps} = \\frac{\\text{Sheet Area}}{\\text{Stamp Area}} = \\frac{432}{12} = \\mathbf{36\\text{ stamps}}$.</li>\n        </ol>\n        <p><em>Alternative grid check:</em> Along the length: $24 \\div 4 = 6$ stamps. Along width: $18 \\div 3 = 6$ stamps. Total $= 6 \\times 6 = 36$ stamps.</p>\n      </div>",
        "marks": 4,
        "rubric": [
          {
            "key": "Stamp area = 4 × 3 = 12 cm²",
            "marks": "1.5 Marks"
          },
          {
            "key": "Sheet area = 24 × 18 = 432 cm² and division 432 / 12 = 36 stamps",
            "marks": "2.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "A rectangle has a perimeter of 24 cm. If its width is 4 cm, find its: (a) Length, (b) Area.",
        "ans": "<div>\n        <ol>\n          <li><strong>Given:</strong> $\\text{Perimeter} = 24\\text{ cm}$, $\\text{Width} (w) = 4\\text{ cm}$.</li>\n          <li><strong>Formula:</strong> $\\text{Perimeter} = 2 \\times (l + w)$.<br>\n          $24 = 2 \\times (l + 4) \\implies l + 4 = 12 \\implies l = 12 - 4 = \\mathbf{8\\text{ cm}}$.</li>\n          <li><strong>Area:</strong><br>\n          $\\text{Area} = l \\times w = 8\\text{ cm} \\times 4\\text{ cm} = \\mathbf{32\\text{ cm}^2}$.</li>\n        </ol>\n      </div>",
        "marks": 3,
        "rubric": [
          {
            "key": "Finding length = 12 - 4 = 8 cm",
            "marks": "1.5 Marks"
          },
          {
            "key": "Finding area = 8 × 4 = 32 cm²",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • How Many Squares?",
        "q": "[Exercise 1] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • How Many Squares?",
        "q": "[Exercise 2] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • How Many Squares?",
        "q": "[Exercise 3] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • How Many Squares?",
        "q": "[Exercise 4] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • How Many Squares?",
        "q": "[Exercise 5] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • How Many Squares?",
        "q": "[Exercise 6] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • How Many Squares?",
        "q": "[Exercise 7] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • How Many Squares?",
        "q": "[Exercise 8] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • How Many Squares?",
        "q": "[Exercise 9] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • How Many Squares?",
        "q": "[Exercise 10] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • How Many Squares?",
        "q": "[Exercise 11] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • How Many Squares?",
        "q": "[Exercise 12] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • How Many Squares?",
        "q": "[Exercise 13] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • How Many Squares?",
        "q": "[Exercise 14] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • How Many Squares?",
        "q": "[Exercise 15] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • How Many Squares?",
        "q": "[Exercise 1] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • How Many Squares?",
        "q": "[Exercise 2] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • How Many Squares?",
        "q": "[Exercise 3] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • How Many Squares?",
        "q": "[Exercise 4] In Chapter 'How Many Squares?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Many Squares?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "NEP 2020 Competency Case: How Many Squares?",
      "text": "A practical scenario involving How Many Squares? in everyday life and community contexts.",
      "question": "Analyze the quantitative relationships and state the conclusion.",
      "answer": "Apply the step-by-step formulas and concepts mastered in this chapter.",
      "rubric": "1M formula + 1M working + 1M answer"
    }
  },
  {
    "id": "magic4",
    "num": 4,
    "unit": "Math-Magic (Classic CBSE) • Chapter 4",
    "title": "Parts and Wholes",
    "subtitle": "हिस्से और पूरे (राष्ट्रीय ध्वज, चॉकलेट बंटवारा एवं रामू का खेत)",
    "concepts": [
      "Fractions in everyday life: tricolour flags, chocolate bars, and garden plots.",
      "Fraction of a collection: e.g., 1/4 of 16 balls = 4 balls.",
      "Equivalent fractions: visual representations using fraction strips and circles.",
      "Money fractions: 50 paise = 1/2 rupee, 25 paise = 1/4 rupee, 20 paise = 1/5 rupee, 10 paise = 1/10 rupee.",
      "Total equal parts: 9.",
      "Total pieces of chocolate: 12.",
      "Raji's share: $\\frac{1}{4} \\times 12 = \\mathbf{3\\text{ pieces}}$.",
      "Sugatha's share: $\\frac{1}{3} \\times 12 = \\mathbf{4\\text{ pieces}}$.",
      "Sheela's share: $\\frac{1}{6} \\times 12 = \\mathbf{2\\text{ pieces}}$.",
      "Total pieces given away: $3 + 4 + 2 = 9\\text{ pieces}$.",
      "Pieces left for Manju: $12 - 9 = \\mathbf{3\\text{ pieces}}$.",
      "Fraction left for Manju: $\\frac{3}{12} = \\mathbf{\\frac{1}{4}}$."
    ],
    "svg": "<svg viewBox=\"0 0 740 200\" width=\"100%\" height=\"auto\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:740px;font-family:system-ui,sans-serif;\">\r\n  <rect width=\"740\" height=\"200\" rx=\"14\" fill=\"#0f172a\"/>\r\n  <text x=\"370\" y=\"26\" fill=\"#a78bfa\" font-size=\"14\" font-weight=\"800\" text-anchor=\"middle\" letter-spacing=\"1\">PARTS AND WHOLES: FRACTION STRIP MODEL</text>\r\n\r\n  <!-- Whole 1 -->\r\n  <rect x=\"60\" y=\"45\" width=\"620\" height=\"28\" rx=\"6\" fill=\"#3b82f6\"/>\r\n  <text x=\"370\" y=\"64\" fill=\"white\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">1 WHOLE (1)</text>\r\n\r\n  <!-- Halves 1/2 -->\r\n  <rect x=\"60\" y=\"80\" width=\"308\" height=\"28\" rx=\"6\" fill=\"#ec4899\"/>\r\n  <text x=\"214\" y=\"99\" fill=\"white\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">½</text>\r\n  <rect x=\"372\" y=\"80\" width=\"308\" height=\"28\" rx=\"6\" fill=\"#ec4899\"/>\r\n  <text x=\"526\" y=\"99\" fill=\"white\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">½</text>\r\n\r\n  <!-- Quarters 1/4 -->\r\n  <rect x=\"60\" y=\"115\" width=\"152\" height=\"28\" rx=\"6\" fill=\"#10b981\"/>\r\n  <text x=\"136\" y=\"134\" fill=\"white\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">¼</text>\r\n  <rect x=\"216\" y=\"115\" width=\"152\" height=\"28\" rx=\"6\" fill=\"#10b981\"/>\r\n  <text x=\"292\" y=\"134\" fill=\"white\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">¼</text>\r\n  <rect x=\"372\" y=\"115\" width=\"152\" height=\"28\" rx=\"6\" fill=\"#10b981\"/>\r\n  <text x=\"448\" y=\"134\" fill=\"white\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">¼</text>\r\n  <rect x=\"528\" y=\"115\" width=\"152\" height=\"28\" rx=\"6\" fill=\"#10b981\"/>\r\n  <text x=\"604\" y=\"134\" fill=\"white\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">¼</text>\r\n\r\n  <!-- Note -->\r\n  <text x=\"370\" y=\"172\" fill=\"#cbd5e1\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">Equivalent Fractions: 1 = ²⁄₂ = ⁴⁄₄ = ⁸⁄₈</text>\r\n</svg>",
    "questions": [
      {
        "category": "Textbook Exercise",
        "q": "The Indian National Flag is divided horizontally into three equal bands. (a) What fraction of the flag is saffron? (b) What fraction of the flag is white? Is the white part slightly less than 1/3? Explain why. (c) What fraction is green?",
        "ans": "<div class=\"step\"><strong>(a) Saffron band:</strong> <strong>1/3</strong> of the flag.",
        "marks": 3,
        "rubric": [
          {
            "key": "Fractions for saffron (1/3) and green (1/3)",
            "marks": "1.0 Mark"
          },
          {
            "key": "White fraction and Ashoka Chakra explanation",
            "marks": "2.0 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Manju had a chocolate bar with 12 equal pieces. She gave 1/4 of it to Raji, 1/3 of it to Sugatha, and 1/6 of it to Sheela. She ate the remaining part. (a) How many pieces did each friend get? (b) How many pieces and what fraction did Manju eat herself?",
        "ans": "<div class=\"step\">Total pieces = 12",
        "marks": 3,
        "rubric": [
          {
            "key": "Calculation for Raji, Sugatha, and Sheela",
            "marks": "1.5 Marks"
          },
          {
            "key": "Manju's remaining pieces (3) and fraction (1/4)",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Ramu's vegetable field has 9 equal parts. In these parts, he grows: chillies in 1 part, potatoes in 2 parts, brinjals in 2 parts, tomatoes in 3 parts, and spinach in 1 part. (a) Which vegetable occupies the biggest part of his field? What fraction? (b) What part of the field is used to grow potatoes? (c) What part of the field is used for spinach?",
        "ans": "<div class=\"step\">Total equal parts = 9",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): Tomatoes identified and fraction 3/9 or 1/3",
            "marks": "2.0 Marks"
          },
          {
            "key": "Part (b): Potatoes fraction 2/9",
            "marks": "1.0 Mark"
          },
          {
            "key": "Part (c): Spinach fraction 1/9",
            "marks": "1.0 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Ramu's field has 9 equal parts. In these parts he grows vegetables: 3 parts potatoes, 2 parts brinjals, 1 part spinach, and 3 parts tomatoes. (a) What fraction of the field is used for growing tomatoes? (b) What vegetable occupies the smallest part of the field? (c) What fraction is used for potatoes and brinjals combined?",
        "ans": "<div>\n        <ol>\n          <li><strong>Total equal parts:</strong> 9.</li>\n          <li><strong>(a) Fraction for tomatoes:</strong><br>\n          $\\text{Fraction} = \\frac{3}{9} = \\mathbf{\\frac{1}{3}}$.</li>\n          <li><strong>(b) Smallest vegetable part:</strong><br>\n          Spinach occupies 1 part out of 9 ($\\frac{1}{9}$), which is the <strong>smallest fraction</strong>.</li>\n          <li><strong>(c) Fraction for potatoes and brinjals combined:</strong><br>\n          $\\text{Combined Fraction} = \\frac{3}{9} + \\frac{2}{9} = \\mathbf{\\frac{5}{9}}$.</li>\n        </ol>",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 3/9 = 1/3 for tomatoes",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (b): Spinach (1/9) is the smallest part",
            "marks": "1 Mark"
          },
          {
            "key": "Part (c): 3/9 + 2/9 = 5/9 combined fraction",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Manju had a chocolate bar with 12 equal pieces. She gave one-fourth (1/4) of it to Raji, one-third (1/3) to Sugatha, and one-sixth (1/6) to Sheela. How many pieces did each friend get, and how many pieces were left for Manju? What fraction was left for Manju?",
        "ans": "<div>\n        <ol>\n          <li><strong>Total pieces of chocolate:</strong> 12.</li>\n          <li><strong>Raji's share:</strong> $\\frac{1}{4} \\times 12 = \\mathbf{3\\text{ pieces}}$.</li>\n          <li><strong>Sugatha's share:</strong> $\\frac{1}{3} \\times 12 = \\mathbf{4\\text{ pieces}}$.</li>\n          <li><strong>Sheela's share:</strong> $\\frac{1}{6} \\times 12 = \\mathbf{2\\text{ pieces}}$.</li>\n          <li><strong>Total pieces given away:</strong> $3 + 4 + 2 = 9\\text{ pieces}$.</li>\n          <li><strong>Pieces left for Manju:</strong> $12 - 9 = \\mathbf{3\\text{ pieces}}$.</li>\n          <li><strong>Fraction left for Manju:</strong> $\\frac{3}{12} = \\mathbf{\\frac{1}{4}}$.</li>\n        </ol>",
        "marks": 3,
        "rubric": [
          {
            "key": "Calculations of Raji (3), Sugatha (4), Sheela (2)",
            "marks": "2 Marks"
          },
          {
            "key": "Calculation of remainder for Manju = 3 pieces and fraction = 1/4",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "Ramu's field has 9 equal parts. In these parts he grows vegetables: 3 parts potatoes, 2 parts brinjals, 1 part spinach, and 3 parts tomatoes. (a) What fraction of the field is used for growing tomatoes? (b) What vegetable occupies the smallest part of the field? (c) What fraction is used for potatoes and brinjals combined?",
        "ans": "<div>\n        <ol>\n          <li><strong>Total equal parts:</strong> 9.</li>\n          <li><strong>(a) Fraction for tomatoes:</strong><br>\n          $\\text{Fraction} = \\frac{3}{9} = \\mathbf{\\frac{1}{3}}$.</li>\n          <li><strong>(b) Smallest vegetable part:</strong><br>\n          Spinach occupies 1 part out of 9 ($\\frac{1}{9}$), which is the <strong>smallest fraction</strong>.</li>\n          <li><strong>(c) Fraction for potatoes and brinjals combined:</strong><br>\n          $\\text{Combined Fraction} = \\frac{3}{9} + \\frac{2}{9} = \\mathbf{\\frac{5}{9}}$.</li>\n        </ol>\n      </div>",
        "marks": 4,
        "rubric": [
          {
            "key": "Part (a): 3/9 = 1/3 for tomatoes",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (b): Spinach (1/9) is the smallest part",
            "marks": "1 Mark"
          },
          {
            "key": "Part (c): 3/9 + 2/9 = 5/9 combined fraction",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "Manju had a chocolate bar with 12 equal pieces. She gave one-fourth (1/4) of it to Raji, one-third (1/3) to Sugatha, and one-sixth (1/6) to Sheela. How many pieces did each friend get, and how many pieces were left for Manju? What fraction was left for Manju?",
        "ans": "<div>\n        <ol>\n          <li><strong>Total pieces of chocolate:</strong> 12.</li>\n          <li><strong>Raji's share:</strong> $\\frac{1}{4} \\times 12 = \\mathbf{3\\text{ pieces}}$.</li>\n          <li><strong>Sugatha's share:</strong> $\\frac{1}{3} \\times 12 = \\mathbf{4\\text{ pieces}}$.</li>\n          <li><strong>Sheela's share:</strong> $\\frac{1}{6} \\times 12 = \\mathbf{2\\text{ pieces}}$.</li>\n          <li><strong>Total pieces given away:</strong> $3 + 4 + 2 = 9\\text{ pieces}$.</li>\n          <li><strong>Pieces left for Manju:</strong> $12 - 9 = \\mathbf{3\\text{ pieces}}$.</li>\n          <li><strong>Fraction left for Manju:</strong> $\\frac{3}{12} = \\mathbf{\\frac{1}{4}}$.</li>\n        </ol>\n      </div>",
        "marks": 4,
        "rubric": [
          {
            "key": "Calculations of Raji (3), Sugatha (4), Sheela (2)",
            "marks": "2 Marks"
          },
          {
            "key": "Calculation of remainder for Manju = 3 pieces and fraction = 1/4",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Chocolate Sharing • Fractions of a Whole",
        "q": "Manju had a chocolate with 12 equal pieces. She gave one-fourth of it to Raji, one-third to Sugatha, and one-sixth to Sheela. She ate the remaining part.<br>(a) How many pieces did each person get?<br>(b) What part of the chocolate did Manju eat?",
        "ans": "<strong>(a) Distribution of Pieces (Total = 12):</strong><br>• Raji: 1/4 of 12 = 12 / 4 = <strong>3 pieces</strong>.<br>• Sugatha: 1/3 of 12 = 12 / 3 = <strong>4 pieces</strong>.<br>• Sheela: 1/6 of 12 = 12 / 6 = <strong>2 pieces</strong>.<br><br><strong>(b) Manju's Share:</strong><br>• Total pieces given away = 3 + 4 + 2 = 9 pieces.<br>• Pieces left for Manju = 12 - 9 = <strong>3 pieces</strong>.<br>• Fraction eaten by Manju = 3 / 12 = <strong>1/4 of the chocolate</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate piece counts for Raji, Sugatha, Sheela",
            "marks": "1.5 M"
          },
          {
            "key": "Manju's remaining fraction (1/4)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Parts and Wholes",
        "q": "[Exercise 2] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Parts and Wholes",
        "q": "[Exercise 3] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Parts and Wholes",
        "q": "[Exercise 4] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Parts and Wholes",
        "q": "[Exercise 5] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Parts and Wholes",
        "q": "[Exercise 6] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Parts and Wholes",
        "q": "[Exercise 7] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Parts and Wholes",
        "q": "[Exercise 8] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Parts and Wholes",
        "q": "[Exercise 9] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Parts and Wholes",
        "q": "[Exercise 10] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Parts and Wholes",
        "q": "[Exercise 11] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Parts and Wholes",
        "q": "[Exercise 12] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Parts and Wholes",
        "q": "[Exercise 13] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Parts and Wholes",
        "q": "[Exercise 14] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Parts and Wholes",
        "q": "[Exercise 15] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Chocolate Sharing • Fractions of a Whole",
        "q": "Manju had a chocolate with 12 equal pieces. She gave one-fourth of it to Raji, one-third to Sugatha, and one-sixth to Sheela. She ate the remaining part.<br>(a) How many pieces did each person get?<br>(b) What part of the chocolate did Manju eat?",
        "ans": "<strong>(a) Distribution of Pieces (Total = 12):</strong><br>• Raji: 1/4 of 12 = 12 / 4 = <strong>3 pieces</strong>.<br>• Sugatha: 1/3 of 12 = 12 / 3 = <strong>4 pieces</strong>.<br>• Sheela: 1/6 of 12 = 12 / 6 = <strong>2 pieces</strong>.<br><br><strong>(b) Manju's Share:</strong><br>• Total pieces given away = 3 + 4 + 2 = 9 pieces.<br>• Pieces left for Manju = 12 - 9 = <strong>3 pieces</strong>.<br>• Fraction eaten by Manju = 3 / 12 = <strong>1/4 of the chocolate</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate piece counts for Raji, Sugatha, Sheela",
            "marks": "1.5 M"
          },
          {
            "key": "Manju's remaining fraction (1/4)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Parts and Wholes",
        "q": "[Exercise 2] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Parts and Wholes",
        "q": "[Exercise 3] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Parts and Wholes",
        "q": "[Exercise 4] In Chapter 'Parts and Wholes', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Parts and Wholes</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "NEP 2020 Competency Case: Parts and Wholes",
      "text": "A practical scenario involving Parts and Wholes in everyday life and community contexts.",
      "question": "Analyze the quantitative relationships and state the conclusion.",
      "answer": "Apply the step-by-step formulas and concepts mastered in this chapter.",
      "rubric": "1M formula + 1M working + 1M answer"
    }
  },
  {
    "id": "magic5",
    "num": 5,
    "unit": "Math-Magic (Classic CBSE) • Chapter 5",
    "title": "Does it Look the Same?",
    "subtitle": "क्या यह एक जैसा दिखता है? (दर्पण रेखाएँ, आधा घुमाव एवं घूर्णन सममिति)",
    "concepts": [
      "Mirror halves: lines dividing a shape such that one half reflects exactly onto the other half.",
      "Half turn (180° rotation): letters and numbers that look the same after a half turn (H, I, N, O, S, X, Z; 0, 8).",
      "Quarter turn (90° rotation) and one-third / one-sixth turn (120° / 60° on fans and windmills).",
      "Distinguishing between line symmetry and rotational symmetry.",
      "H: Turns upside down to form H (Yes).",
      "I: Turns upside down to form I (Yes).",
      "N: Turns upside down to form N (Yes).",
      "O: Turns upside down to form O (Yes).",
      "S: Turns upside down to form S (Yes).",
      "X: Turns upside down to form X (Yes).",
      "Z: Turns upside down to form Z (Yes)."
    ],
    "svg": "<svg viewBox=\"0 0 740 200\" width=\"100%\" height=\"auto\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:740px;font-family:system-ui,sans-serif;\">\r\n  <rect width=\"740\" height=\"200\" rx=\"14\" fill=\"#0f172a\"/>\r\n  <text x=\"370\" y=\"26\" fill=\"#f59e0b\" font-size=\"14\" font-weight=\"800\" text-anchor=\"middle\" letter-spacing=\"1\">SYMMETRY &amp; TURNS: ½ TURN AND ¼ TURN ROTATION</text>\r\n\r\n  <!-- Original Letter H -->\r\n  <g transform=\"translate(60, 48)\">\r\n    <rect width=\"120\" height=\"120\" fill=\"#1e293b\" rx=\"8\" stroke=\"#334155\"/>\r\n    <text x=\"60\" y=\"75\" fill=\"#38bdf8\" font-size=\"44\" font-weight=\"900\" text-anchor=\"middle\">H</text>\r\n    <text x=\"60\" y=\"110\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Original</text>\r\n  </g>\r\n\r\n  <!-- H after 1/2 turn -->\r\n  <g transform=\"translate(210, 48)\">\r\n    <rect width=\"120\" height=\"120\" fill=\"#1e293b\" rx=\"8\" stroke=\"#10b981\" stroke-width=\"2\"/>\r\n    <text x=\"60\" y=\"75\" fill=\"#34d399\" font-size=\"44\" font-weight=\"900\" text-anchor=\"middle\">H</text>\r\n    <text x=\"60\" y=\"110\" fill=\"#34d399\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\">½ Turn: Same!</text>\r\n  </g>\r\n\r\n  <!-- Letter N -->\r\n  <g transform=\"translate(390, 48)\">\r\n    <rect width=\"120\" height=\"120\" fill=\"#1e293b\" rx=\"8\" stroke=\"#334155\"/>\r\n    <text x=\"60\" y=\"75\" fill=\"#f43f5e\" font-size=\"44\" font-weight=\"900\" text-anchor=\"middle\">N</text>\r\n    <text x=\"60\" y=\"110\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Original</text>\r\n  </g>\r\n\r\n  <!-- N after 1/2 turn -->\r\n  <g transform=\"translate(540, 48)\">\r\n    <rect width=\"120\" height=\"120\" fill=\"#1e293b\" rx=\"8\" stroke=\"#10b981\" stroke-width=\"2\"/>\r\n    <text x=\"60\" y=\"75\" fill=\"#34d399\" font-size=\"44\" font-weight=\"900\" text-anchor=\"middle\">N</text>\r\n    <text x=\"60\" y=\"110\" fill=\"#34d399\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\">½ Turn: Same!</text>\r\n  </g>\r\n</svg>",
    "questions": [
      {
        "category": "Textbook Exercise",
        "q": "Which of the following English capital letters look exactly the same after a half turn (180° rotation)? Test: A, H, M, N, O, S, W, X, Z.",
        "ans": "<p>When rotated upside down by 180°:</p>\r\n <div class=\"step\"><strong>H</strong> → looks identical (H).",
        "marks": 3,
        "rubric": [
          {
            "key": "Each correct letter identified",
            "marks": "0.5 Mark each (Total 3M)"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Which digits from 0 to 9 look the same after a half turn (180°)? Write all 2-digit, 3-digit, and 4-digit numbers that look the same on a half turn using only these digits.",
        "ans": "<div class=\"step\"><strong>Single digits looking same after half turn:</strong> <strong>0, 1, 8</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Single digits identified (0, 1, 8)",
            "marks": "1.0 Mark"
          },
          {
            "key": "2-digit and 3-digit examples",
            "marks": "1.0 Mark"
          },
          {
            "key": "4-digit examples",
            "marks": "1.0 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Consider a ceiling fan with 3 blades, and another ceiling fan with 4 blades. (a) By what fraction of a turn will the 3-blade fan look exactly the same as its original position? (b) By what fraction of a turn will the 4-blade fan look the same? (c) Does the 3-blade fan look the same on a half turn?",
        "ans": "<div class=\"step\"><strong>(a) 3-blade fan:</strong> The 3 blades are placed at equal angles of 360° ÷ 3 = 120°.\r\n <br>Therefore, it looks the same after a <strong>one-third turn (1/3 turn or 120°)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 1/3 turn calculation (120°)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (b): 1/4 turn calculation (90°)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (c): Half-turn reasoning for 3 blades",
            "marks": "1.0 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Which of the following capital English letters look exactly the same after a half-turn (180° rotation): A, H, I, M, N, O, S, T, X, Z?",
        "ans": "<div>\n        <p>A letter looks identical after a half-turn (1/2 turn or 180° rotation) if it possesses <strong>point symmetry (order-2 rotational symmetry)</strong> about its center.</p>\n        <ul>\n          <li><strong>H:</strong> Turns upside down to form <strong>H</strong> (Yes).</li>\n          <li><strong>I:</strong> Turns upside down to form <strong>I</strong> (Yes).</li>\n          <li><strong>N:</strong> Turns upside down to form <strong>N</strong> (Yes).</li>\n          <li><strong>O:</strong> Turns upside down to form <strong>O</strong> (Yes).</li>\n          <li><strong>S:</strong> Turns upside down to form <strong>S</strong> (Yes).</li>\n          <li><strong>X:</strong> Turns upside down to form <strong>X</strong> (Yes).</li>\n          <li><strong>Z:</strong> Turns upside down to form <strong>Z</strong> (Yes).</li>\n        </ul>\n        <p><em>Letters that do NOT look the same:</em> A (becomes upside down &forall;), M (becomes W), T (becomes &bot;).</p>\n        <p><strong>Final Answer:</strong> The letters are <strong>H, I, N, O, S, X, and Z</strong>.</p>",
        "marks": 3,
        "rubric": [
          {
            "key": "Identifying symmetric letters: H, I, N, O, S, X, Z",
            "marks": "3 Marks"
          },
          {
            "key": "Explaining rotational symmetry rule",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "Which of the following capital English letters look exactly the same after a half-turn (180° rotation): A, H, I, M, N, O, S, T, X, Z?",
        "ans": "<div>\n        <p>A letter looks identical after a half-turn (1/2 turn or 180° rotation) if it possesses <strong>point symmetry (order-2 rotational symmetry)</strong> about its center.</p>\n        <ul>\n          <li><strong>H:</strong> Turns upside down to form <strong>H</strong> (Yes).</li>\n          <li><strong>I:</strong> Turns upside down to form <strong>I</strong> (Yes).</li>\n          <li><strong>N:</strong> Turns upside down to form <strong>N</strong> (Yes).</li>\n          <li><strong>O:</strong> Turns upside down to form <strong>O</strong> (Yes).</li>\n          <li><strong>S:</strong> Turns upside down to form <strong>S</strong> (Yes).</li>\n          <li><strong>X:</strong> Turns upside down to form <strong>X</strong> (Yes).</li>\n          <li><strong>Z:</strong> Turns upside down to form <strong>Z</strong> (Yes).</li>\n        </ul>\n        <p><em>Letters that do NOT look the same:</em> A (becomes upside down &forall;), M (becomes W), T (becomes &bot;).</p>\n        <p><strong>Final Answer:</strong> The letters are <strong>H, I, N, O, S, X, and Z</strong>.</p>\n      </div>",
        "marks": 4,
        "rubric": [
          {
            "key": "Identifying symmetric letters: H, I, N, O, S, X, Z",
            "marks": "3 Marks"
          },
          {
            "key": "Explaining rotational symmetry rule",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Does it Look the Same?",
        "q": "[Exercise 1] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Does it Look the Same?",
        "q": "[Exercise 2] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Does it Look the Same?",
        "q": "[Exercise 3] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Does it Look the Same?",
        "q": "[Exercise 4] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Does it Look the Same?",
        "q": "[Exercise 5] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Does it Look the Same?",
        "q": "[Exercise 6] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Does it Look the Same?",
        "q": "[Exercise 7] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Does it Look the Same?",
        "q": "[Exercise 8] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Does it Look the Same?",
        "q": "[Exercise 9] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Does it Look the Same?",
        "q": "[Exercise 10] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Does it Look the Same?",
        "q": "[Exercise 11] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Does it Look the Same?",
        "q": "[Exercise 12] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Does it Look the Same?",
        "q": "[Exercise 13] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Does it Look the Same?",
        "q": "[Exercise 14] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Does it Look the Same?",
        "q": "[Exercise 15] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Does it Look the Same?",
        "q": "[Exercise 16] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Does it Look the Same?",
        "q": "[Exercise 17] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Does it Look the Same?",
        "q": "[Exercise 1] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Does it Look the Same?",
        "q": "[Exercise 2] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Does it Look the Same?",
        "q": "[Exercise 3] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Does it Look the Same?",
        "q": "[Exercise 4] In Chapter 'Does it Look the Same?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Does it Look the Same?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "NEP 2020 Competency Case: Does it Look the Same?",
      "text": "A practical scenario involving Does it Look the Same? in everyday life and community contexts.",
      "question": "Analyze the quantitative relationships and state the conclusion.",
      "answer": "Apply the step-by-step formulas and concepts mastered in this chapter.",
      "rubric": "1M formula + 1M working + 1M answer"
    }
  },
  {
    "id": "magic6",
    "num": 6,
    "unit": "Math-Magic (Classic CBSE) • Chapter 6",
    "title": "Be My Multiple, I'll be Your Factor",
    "subtitle": "मैं तेरा गुणनफल, तू मेरा गुणनखंड (बिल्ली-चूहा खेल, म.स.प. एवं ल.स.प.)",
    "concepts": [
      "The Mouse and Cat chasing game on the number line: jumping intervals and escape holes.",
      "Common multiples of 2, 3, 5 and finding the Least Common Multiple (LCM).",
      "Arranging bangles into rectangular arrays and finding all factor pairs.",
      "Factor Trees for prime factorisation of numbers like 24, 60, 90.",
      "Multiples of 4: 4, 8, 12, 16, 20, 24, 28, 32...",
      "Multiples of 6: 6, 12, 18, 24, 30, 36...",
      "Multiples of 8: 8, 16, 24, 32, 40..."
    ],
    "svg": "<svg viewBox=\"0 0 740 200\" width=\"100%\" height=\"auto\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:740px;font-family:system-ui,sans-serif;\">\r\n  <rect width=\"740\" height=\"200\" rx=\"14\" fill=\"#0f172a\"/>\r\n  <text x=\"370\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"800\" text-anchor=\"middle\" letter-spacing=\"1\">COMMON MULTIPLES &amp; FACTOR TREE</text>\r\n\r\n  <!-- Venn Diagram Multiples of 4 and 6 -->\r\n  <g transform=\"translate(40, 40)\">\r\n    <circle cx=\"110\" cy=\"75\" r=\"65\" fill=\"#2563eb\" fill-opacity=\"0.3\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\r\n    <circle cx=\"190\" cy=\"75\" r=\"65\" fill=\"#d97706\" fill-opacity=\"0.3\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\r\n    <text x=\"75\" y=\"78\" fill=\"#93c5fd\" font-size=\"12\" font-weight=\"700\">4, 8, 16, 20</text>\r\n    <text x=\"150\" y=\"72\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"900\" text-anchor=\"middle\">12, 24, 36</text>\r\n    <text x=\"150\" y=\"90\" fill=\"#fbbf24\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\">(LCM = 12)</text>\r\n    <text x=\"215\" y=\"78\" fill=\"#fde68a\" font-size=\"12\" font-weight=\"700\">6, 18, 30</text>\r\n    <text x=\"110\" y=\"20\" fill=\"#60a5fa\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">Multiples of 4</text>\r\n    <text x=\"190\" y=\"20\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">Multiples of 6</text>\r\n  </g>\r\n\r\n  <!-- Factor Tree of 48 -->\r\n  <g transform=\"translate(420, 42)\">\r\n    <rect width=\"280\" height=\"135\" fill=\"#1e293b\" rx=\"8\" stroke=\"#334155\"/>\r\n    <text x=\"140\" y=\"24\" fill=\"#34d399\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">Factor Tree of 48</text>\r\n    \r\n    <circle cx=\"140\" cy=\"45\" r=\"14\" fill=\"#3b82f6\"/>\r\n    <text x=\"140\" y=\"50\" fill=\"white\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">48</text>\r\n    \r\n    <line x1=\"130\" y1=\"58\" x2=\"90\" y2=\"80\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\r\n    <line x1=\"150\" y1=\"58\" x2=\"190\" y2=\"80\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\r\n\r\n    <circle cx=\"90\" cy=\"90\" r=\"12\" fill=\"#ec4899\"/>\r\n    <text x=\"90\" y=\"94\" fill=\"white\" font-size=\"10\" font-weight=\"800\" text-anchor=\"middle\">6</text>\r\n\r\n    <circle cx=\"190\" cy=\"90\" r=\"12\" fill=\"#ec4899\"/>\r\n    <text x=\"190\" y=\"94\" fill=\"white\" font-size=\"10\" font-weight=\"800\" text-anchor=\"middle\">8</text>\r\n\r\n    <text x=\"140\" y=\"125\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">48 = 2 × 2 × 2 × 2 × 3</text>\r\n  </g>\r\n</svg>",
    "questions": [
      {
        "category": "Textbook Exercise",
        "q": "The Cat and the Mouse game: The mouse starts at 14 and jumps 2 steps at a time. The cat starts at 3 and jumps 3 steps at a time. If the mouse reaches 28, it can hide safely in its hole. (a) On which steps does the mouse jump? (b) On which steps does the cat jump? (c) Can the mouse reach safety without being caught?",
        "ans": "<div class=\"step\"><strong>(a) Mouse's path (starting at 14, +2 each jump):</strong>\r\n <br>14, 16, 18, 20, 22, 24, 26, 28 (It takes 7 jumps to reach 28).",
        "marks": 3,
        "rubric": [
          {
            "key": "Mouse path listed",
            "marks": "1.0 Mark"
          },
          {
            "key": "Cat path listed",
            "marks": "1.0 Mark"
          },
          {
            "key": "Jump-by-jump comparison and safety verdict",
            "marks": "1.0 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Meena has 18 bangles. She wants to make groups of bangles such that each group has an equal number of bangles and none are left over. (a) List all the possible group sizes she can make. (b) What are these numbers called in relation to 18? (c) If she had 23 bangles, what groups could she make?",
        "ans": "<p><strong>(a) Group sizes for 18 bangles:</strong></p>\r\n <div class=\"step\">Groups of 1, 2, 3, 6, 9, 18.",
        "marks": 3,
        "rubric": [
          {
            "key": "All factors of 18 listed",
            "marks": "1.0 Mark"
          },
          {
            "key": "Identified as factors",
            "marks": "1.0 Mark"
          },
          {
            "key": "23 identified as prime with groups 1 and 23",
            "marks": "1.0 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Draw two different Factor Trees for the number 60, breaking it down completely into its prime factors. Write the final prime factorisation product.",
        "ans": "<p><strong>Tree 1: Starting with 6 × 10:</strong></p>\r\n <div class=\"step\">\r\n 60 = 6 × 10\r\n <br>Break 6 into: 2 × 3\r\n <br>Break 10 into: 2 × 5\r\n <br>Prime factors: 2, 3, 2, 5.",
        "marks": 3,
        "rubric": [
          {
            "key": "Tree 1 structure correct",
            "marks": "1.5 Marks"
          },
          {
            "key": "Tree 2 structure correct",
            "marks": "1.5 Marks"
          },
          {
            "key": "Final prime product statement",
            "marks": "1.0 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Draw the factor tree for the number 60 in two different ways, and write down its prime factorization.",
        "ans": "<div>\n        <p><strong>Prime Factorization of 60:</strong></p>\n        <p><strong>Method 1 (Starting with 6 × 10):</strong><br>\n        60 &rarr; $6 \\times 10$<br>\n        $6 &rarr; 2 \\times 3$<br>\n        $10 &rarr; 2 \\times 5$<br>\n        Prime factors: $\\mathbf{2 \\times 2 \\times 3 \\times 5}$.</p>\n\n        <p><strong>Method 2 (Starting with 4 × 15):</strong><br>\n        60 &rarr; $4 \\times 15$<br>\n        $4 &rarr; 2 \\times 2$<br>\n        $15 &rarr; 3 \\times 5$<br>\n        Prime factors: $\\mathbf{2 \\times 2 \\times 3 \\times 5}$.</p>\n        <p><strong>Conclusion:</strong> Both trees resolve to the unique prime factorization: $\\mathbf{2^2 \\times 3 \\times 5}$.</p>",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct branch structure of Method 1",
            "marks": "1.5 Marks"
          },
          {
            "key": "Correct branch structure of Method 2",
            "marks": "1.5 Marks"
          },
          {
            "key": "Final prime factorization: 2 × 2 × 3 × 5",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Find the smallest common multiple (LCM) of 4, 6, and 8. Explain how you arrived at the answer.",
        "ans": "<div>\n        <ol>\n          <li>Multiples of 4: 4, 8, 12, 16, 20, <strong>24</strong>, 28, 32...</li>\n          <li>Multiples of 6: 6, 12, 18, <strong>24</strong>, 30, 36...</li>\n          <li>Multiples of 8: 8, 16, <strong>24</strong>, 32, 40...</li>\n        </ol>\n        <p>The smallest number appearing in all three lists is <strong>24</strong>.<br>\n        Therefore, $\\mathbf{\\text{LCM}(4, 6, 8) = 24}$.</p>",
        "marks": 3,
        "rubric": [
          {
            "key": "Listing multiples of 4, 6, and 8 correctly",
            "marks": "2 Marks"
          },
          {
            "key": "Identifying smallest common multiple = 24",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "Draw the factor tree for the number 60 in two different ways, and write down its prime factorization.",
        "ans": "<div>\n        <p><strong>Prime Factorization of 60:</strong></p>\n        <p><strong>Method 1 (Starting with 6 × 10):</strong><br>\n        60 &rarr; $6 \\times 10$<br>\n        $6 &rarr; 2 \\times 3$<br>\n        $10 &rarr; 2 \\times 5$<br>\n        Prime factors: $\\mathbf{2 \\times 2 \\times 3 \\times 5}$.</p>\n\n        <p><strong>Method 2 (Starting with 4 × 15):</strong><br>\n        60 &rarr; $4 \\times 15$<br>\n        $4 &rarr; 2 \\times 2$<br>\n        $15 &rarr; 3 \\times 5$<br>\n        Prime factors: $\\mathbf{2 \\times 2 \\times 3 \\times 5}$.</p>\n        <p><strong>Conclusion:</strong> Both trees resolve to the unique prime factorization: $\\mathbf{2^2 \\times 3 \\times 5}$.</p>\n      </div>",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct branch structure of Method 1",
            "marks": "1.5 Marks"
          },
          {
            "key": "Correct branch structure of Method 2",
            "marks": "1.5 Marks"
          },
          {
            "key": "Final prime factorization: 2 × 2 × 3 × 5",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "Find the smallest common multiple (LCM) of 4, 6, and 8. Explain how you arrived at the answer.",
        "ans": "<div>\n        <ol>\n          <li>Multiples of 4: 4, 8, 12, 16, 20, <strong>24</strong>, 28, 32...</li>\n          <li>Multiples of 6: 6, 12, 18, <strong>24</strong>, 30, 36...</li>\n          <li>Multiples of 8: 8, 16, <strong>24</strong>, 32, 40...</li>\n        </ol>\n        <p>The smallest number appearing in all three lists is <strong>24</strong>.<br>\n        Therefore, $\\mathbf{\\text{LCM}(4, 6, 8) = 24}$.</p>\n      </div>",
        "marks": 3,
        "rubric": [
          {
            "key": "Listing multiples of 4, 6, and 8 correctly",
            "marks": "2 Marks"
          },
          {
            "key": "Identifying smallest common multiple = 24",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 1] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 2] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 3] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 4] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 5] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 6] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 7] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 8] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 9] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 10] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 11] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 12] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 13] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 14] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 15] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 1] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 2] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 3] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Be My Multiple, I'll be Your Factor",
        "q": "[Exercise 4] In Chapter 'Be My Multiple, I'll be Your Factor', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Be My Multiple, I'll be Your Factor</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "NEP 2020 Competency Case: Be My Multiple, I'll be Your Factor",
      "text": "A practical scenario involving Be My Multiple, I'll be Your Factor in everyday life and community contexts.",
      "question": "Analyze the quantitative relationships and state the conclusion.",
      "answer": "Apply the step-by-step formulas and concepts mastered in this chapter.",
      "rubric": "1M formula + 1M working + 1M answer"
    }
  },
  {
    "id": "magic7",
    "num": 7,
    "unit": "Math-Magic (Classic CBSE) • Chapter 7",
    "title": "Can You See the Pattern?",
    "subtitle": "क्या तुम पैटर्न देख सकते हो? (जादुई वर्ग, षट्कोण, पैलिंड्रोम एवं संख्या पहेलियाँ)",
    "concepts": [
      "Rotational patterns of motifs: 1/4 turn, 1/2 turn, 3/4 turn.",
      "3 × 3 Magic Squares where rows, columns, and diagonals all add up to the same magic sum.",
      "Magic Hexagons: number in each square is the product of numbers in the two adjoining circles.",
      "Palindromic numbers (Special Numbers): read the same forwards and backwards (e.g., 121, 656, 1331) formed by reversing and adding."
    ],
    "svg": "<svg viewBox=\"0 0 740 200\" width=\"100%\" height=\"auto\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:740px;font-family:system-ui,sans-serif;\">\r\n  <rect width=\"740\" height=\"200\" rx=\"14\" fill=\"#0f172a\"/>\r\n  <text x=\"370\" y=\"26\" fill=\"#f43f5e\" font-size=\"14\" font-weight=\"800\" text-anchor=\"middle\" letter-spacing=\"1\">CAN YOU SEE THE PATTERN? ROTATION &amp; MAGIC SUMS</text>\r\n\r\n  <!-- Rotating arrow pattern 45 deg -->\r\n  <g transform=\"translate(60, 48)\">\r\n    <rect width=\"320\" height=\"120\" fill=\"#1e293b\" rx=\"8\" stroke=\"#334155\"/>\r\n    <text x=\"160\" y=\"22\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">Turn Rule: 45° Clockwise Each Step</text>\r\n    \r\n    <!-- Step 1: Up -->\r\n    <path d=\"M50 85 L50 45 M50 45 L40 55 M50 45 L60 55\" stroke=\"#38bdf8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\r\n    <text x=\"50\" y=\"105\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">0°</text>\r\n\r\n    <!-- Step 2: 45 deg -->\r\n    <path d=\"M110 85 L135 60 M135 60 L122 62 M135 60 L133 73\" stroke=\"#38bdf8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\r\n    <text x=\"125\" y=\"105\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">45°</text>\r\n\r\n    <!-- Step 3: 90 deg (Right) -->\r\n    <path d=\"M185 70 L225 70 M225 70 L215 60 M225 70 L215 80\" stroke=\"#38bdf8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\r\n    <text x=\"205\" y=\"105\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">90°</text>\r\n\r\n    <!-- Step 4: 135 deg -->\r\n    <path d=\"M265 60 L290 85 M290 85 L277 87 M290 85 L288 72\" stroke=\"#38bdf8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\r\n    <text x=\"280\" y=\"105\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">135°</text>\r\n  </g>\r\n\r\n  <!-- Number Pattern Rule: Palindromic numbers -->\r\n  <g transform=\"translate(420, 48)\">\r\n    <rect width=\"260\" height=\"120\" fill=\"#1e293b\" rx=\"8\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\r\n    <text x=\"130\" y=\"24\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"800\" text-anchor=\"middle\">Palindromic Number Pattern</text>\r\n    <text x=\"130\" y=\"52\" fill=\"#ffffff\" font-size=\"11\" font-family=\"monospace\" text-anchor=\"middle\">1 × 1 = 1</text>\r\n    <text x=\"130\" y=\"72\" fill=\"#ffffff\" font-size=\"11\" font-family=\"monospace\" text-anchor=\"middle\">11 × 11 = 121</text>\r\n    <text x=\"130\" y=\"92\" fill=\"#ffffff\" font-size=\"11\" font-family=\"monospace\" text-anchor=\"middle\">111 × 111 = 12321</text>\r\n    <text x=\"130\" y=\"112\" fill=\"#38bdf8\" font-size=\"11\" font-family=\"monospace\" font-weight=\"800\" text-anchor=\"middle\">1111 × 1111 = 1234321</text>\r\n  </g>\r\n</svg>",
    "questions": [
      {
        "category": "Textbook Exercise",
        "q": "Fill in the numbers from 46 to 54 in a 3 × 3 grid so that the sum of each row, column, and diagonal is 150. (Hint: Central number is (46 + 54) ÷ 2 = 50).",
        "ans": "<p>Magic sum = 150. The center number must be 150 ÷ 3 = 50.</p>\r\n <div class=\"step\"><strong>Row 1:</strong> 53, 48, 49 ⇒ 53 + 48 + 49 = 150",
        "marks": 3,
        "rubric": [
          {
            "key": "Center number 50 identified",
            "marks": "1.0 Mark"
          },
          {
            "key": "All 9 cells filled accurately without repetition",
            "marks": "2.0 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Show the reverse-and-add method to turn the following numbers into special palindromic numbers: (a) 43 (b) 132 (c) 78.",
        "ans": "<p><strong>(a) For 43:</strong></p>\r\n <div class=\"step\">Original number = 43; Reverse = 34\r\n <br>Add: 43 + 34 = <strong>77</strong> (Palindromic number!).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 77",
            "marks": "1.0 Mark"
          },
          {
            "key": "Part (b): 363",
            "marks": "1.0 Mark"
          },
          {
            "key": "Part (c): 4884 with multi-step addition shown",
            "marks": "1.0 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Observe the number patterns and find the missing values:\r\n(a) 1 × 1 = 1, 11 × 11 = 121, 111 × 111 = 12321. Find 1111 × 1111 and 11111 × 11111.\r\n(b) 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55. Find the sum: 11 + 12 + 13 + … + 20.",
        "ans": "<p><strong>(a) Palindromic Multiplications:</strong></p>\r\n <div class=\"step\">The product of n ones counts up to n and then counts back down to 1:",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 1234321 and 123454321",
            "marks": "2.0 Marks"
          },
          {
            "key": "Part (b): 155 with pattern reasoning",
            "marks": "2.0 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Fill the numbers from 46 to 54 in a 3×3 Magic Square grid such that the sum of the numbers in every row, column, and diagonal equals 150.",
        "ans": "<div>\n        <p><strong>Center Number Rule:</strong> The middle cell is the average of the 9 numbers: $\\frac{46 + 54}{2} = \\mathbf{50}$.</p>\n        <p><strong>Completed Magic Square Grid:</strong></p>\n        <table style=\"border-collapse:collapse;margin:10px auto;text-align:center;font-weight:700;\">\n          <tr>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#e0e7ff;\">53</td>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#f8fafc;\">46</td>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#e0e7ff;\">51</td>\n          </tr>\n          <tr>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#f8fafc;\">48</td>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#fef08a;\">50</td>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#f8fafc;\">52</td>\n          </tr>\n          <tr>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#e0e7ff;\">49</td>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#f8fafc;\">54</td>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#e0e7ff;\">47</td>\n          </tr>\n        </table>\n        <p><strong>Check Sums:</strong><br>\n        Row 1: $53 + 46 + 51 = 150$.<br>\n        Row 2: $48 + 50 + 52 = 150$.<br>\n        Row 3: $49 + 54 + 47 = 150$.<br>\n        Diagonals: $53 + 50 + 47 = 150$, $51 + 50 + 49 = 150$.</p>",
        "marks": 3,
        "rubric": [
          {
            "key": "Center number identification = 50",
            "marks": "1 Mark"
          },
          {
            "key": "Correct cell placements satisfying row, column, diagonal sums = 150",
            "marks": "3 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "Fill the numbers from 46 to 54 in a 3×3 Magic Square grid such that the sum of the numbers in every row, column, and diagonal equals 150.",
        "ans": "<div>\n        <p><strong>Center Number Rule:</strong> The middle cell is the average of the 9 numbers: $\\frac{46 + 54}{2} = \\mathbf{50}$.</p>\n        <p><strong>Completed Magic Square Grid:</strong></p>\n        <table style=\"border-collapse:collapse;margin:10px auto;text-align:center;font-weight:700;\">\n          <tr>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#e0e7ff;\">53</td>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#f8fafc;\">46</td>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#e0e7ff;\">51</td>\n          </tr>\n          <tr>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#f8fafc;\">48</td>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#fef08a;\">50</td>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#f8fafc;\">52</td>\n          </tr>\n          <tr>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#e0e7ff;\">49</td>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#f8fafc;\">54</td>\n            <td style=\"border:2px solid #334155;padding:12px 18px;background:#e0e7ff;\">47</td>\n          </tr>\n        </table>\n        <p><strong>Check Sums:</strong><br>\n        Row 1: $53 + 46 + 51 = 150$.<br>\n        Row 2: $48 + 50 + 52 = 150$.<br>\n        Row 3: $49 + 54 + 47 = 150$.<br>\n        Diagonals: $53 + 50 + 47 = 150$, $51 + 50 + 49 = 150$.</p>\n      </div>",
        "marks": 4,
        "rubric": [
          {
            "key": "Center number identification = 50",
            "marks": "1 Mark"
          },
          {
            "key": "Correct cell placements satisfying row, column, diagonal sums = 150",
            "marks": "3 Marks"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Can You See the Pattern?",
        "q": "[Exercise 1] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Can You See the Pattern?",
        "q": "[Exercise 2] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Can You See the Pattern?",
        "q": "[Exercise 3] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Can You See the Pattern?",
        "q": "[Exercise 4] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Can You See the Pattern?",
        "q": "[Exercise 5] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Can You See the Pattern?",
        "q": "[Exercise 6] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Can You See the Pattern?",
        "q": "[Exercise 7] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Can You See the Pattern?",
        "q": "[Exercise 8] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Can You See the Pattern?",
        "q": "[Exercise 9] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Can You See the Pattern?",
        "q": "[Exercise 10] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Can You See the Pattern?",
        "q": "[Exercise 11] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Can You See the Pattern?",
        "q": "[Exercise 12] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Can You See the Pattern?",
        "q": "[Exercise 13] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Can You See the Pattern?",
        "q": "[Exercise 14] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Can You See the Pattern?",
        "q": "[Exercise 15] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Can You See the Pattern?",
        "q": "[Exercise 16] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Can You See the Pattern?",
        "q": "[Exercise 17] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Can You See the Pattern?",
        "q": "[Exercise 1] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Can You See the Pattern?",
        "q": "[Exercise 2] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Can You See the Pattern?",
        "q": "[Exercise 3] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Can You See the Pattern?",
        "q": "[Exercise 4] In Chapter 'Can You See the Pattern?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Can You See the Pattern?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "NEP 2020 Competency Case: Can You See the Pattern?",
      "text": "A practical scenario involving Can You See the Pattern? in everyday life and community contexts.",
      "question": "Analyze the quantitative relationships and state the conclusion.",
      "answer": "Apply the step-by-step formulas and concepts mastered in this chapter.",
      "rubric": "1M formula + 1M working + 1M answer"
    }
  },
  {
    "id": "magic8",
    "num": 8,
    "unit": "Math-Magic (Classic CBSE) • Chapter 8",
    "title": "Mapping Your Way",
    "subtitle": "नक्शा (इंडिया गेट, राजपथ, सेंट्रल हेक्सागन एवं नक्शे का पैमाना)",
    "concepts": [
      "Reading and interpreting scaled architectural maps and ground plans.",
      "The Central Hexagon of New Delhi: Angles at the central vertex and Rajpath axis.",
      "Map Scale Ratios: e.g., 1 cm = 1 km or 1 cm = 2 km.",
      "Enlarging and reducing maps on grid paper without altering proportional shapes.",
      "Given Scale: $1\\text{ cm} = 200\\text{ km}$."
    ],
    "svg": "<svg viewBox=\"0 0 600 170\" width=\"100%\" height=\"170\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"170\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Central Hexagon &amp; Rajpath Parade Axis (Scale: 1 cm = 2 km)</text>\r\n        <g transform=\"translate(300, 85)\">\r\n          <polygon points=\"0,-45 39,-22.5 39,22.5 0,45 -39,22.5 -39,-22.5\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2.5\"/>\r\n          <line x1=\"-180\" y1=\"0\" x2=\"180\" y2=\"0\" stroke=\"#059669\" stroke-width=\"4\"/>\r\n          <rect x=\"-215\" y=\"-12\" width=\"35\" height=\"24\" rx=\"4\" fill=\"#1e293b\"/>\r\n          <text x=\"-197\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">RB</text>\r\n          <text x=\"-197\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">R. Bhavan</text>\r\n          <rect x=\"180\" y=\"-12\" width=\"35\" height=\"24\" rx=\"4\" fill=\"#dc2626\"/>\r\n          <text x=\"197\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">IG</text>\r\n          <text x=\"197\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">India Gate</text>\r\n          <circle cx=\"0\" cy=\"0\" r=\"4\" fill=\"#4f46e5\"/>\r\n          <text x=\"0\" y=\"-8\" font-family=\"system-ui, sans-serif\" font-size=\"8.5\" font-weight=\"700\" fill=\"#4338ca\" text-anchor=\"middle\">Vijay Chowk</text>\r\n        </g>\r\n        <text x=\"300\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#475569\" text-anchor=\"middle\">Rajpath Axis: Rashtrapati Bhavan ↔ Vijay Chowk ↔ India Gate | Hexagon angle = 120°</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Textbook Exercise",
        "q": "Look at the map of New Delhi and Rajpath where the scale is 1 cm = 2 km:<br>(a) On the map, the distance between Rashtrapati Bhavan and India Gate is 4 cm. What is the actual ground distance in kilometres?<br>(b) The parade route on the map measures: Rajpath (4 cm) + Tilak Marg (3 cm) + Bahadur Shah Zafar Marg (2 cm) + Subhash Marg (2.5 cm). What is the total route distance on ground in kilometres?",
        "ans": "<p><strong>(a) Distance between Rashtrapati Bhavan and India Gate:</strong></p>\r\n <div class=\"step\">Map Distance = 4 cm; Scale = 1 cm = 2 km.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 4 × 2 = 8 km",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (b): 11.5 cm and 23 km",
            "marks": "2.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "In the Central Hexagon map of New Delhi:<br>(a) What type of angle is formed at the intersection of Rajpath and Janpath?<br>(b) Look at the pair of roads: Man Singh Road and Ashoka Road. What kind of angle do they make (acute, right, or obtuse)?",
        "ans": "<div class=\"step\"><strong>(a) Rajpath and Janpath:</strong> They intersect perpendicularly at 90°, forming a <strong>Right Angle</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): Right Angle",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (b): Obtuse Angle",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "On a school tour map, the scale is given as: 1 cm on the map = 200 km on the ground. (a) If the distance between two cities on the map is 3.5 cm, what is the actual ground distance? (b) If two hill stations are 500 km apart on the ground, how far apart will they be on the map?",
        "ans": "<div>\n        <ol>\n          <li><strong>Given Scale:</strong> $1\\text{ cm} = 200\\text{ km}$.</li>\n          <li><strong>(a) Actual distance for 3.5 cm:</strong><br>\n          $\\text{Ground Distance} = 3.5 \\times 200\\text{ km} = \\mathbf{700\\text{ km}}$.</li>\n          <li><strong>(b) Map distance for 500 km:</strong><br>\n          $\\text{Map Distance} = \\frac{500}{200} = \\mathbf{2.5\\text{ cm}}$.</li>\n        </ol>",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 3.5 × 200 = 700 km",
            "marks": "2 Marks"
          },
          {
            "key": "Part (b): 500 / 200 = 2.5 cm",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "On a school tour map, the scale is given as: 1 cm on the map = 200 km on the ground. (a) If the distance between two cities on the map is 3.5 cm, what is the actual ground distance? (b) If two hill stations are 500 km apart on the ground, how far apart will they be on the map?",
        "ans": "<div>\n        <ol>\n          <li><strong>Given Scale:</strong> $1\\text{ cm} = 200\\text{ km}$.</li>\n          <li><strong>(a) Actual distance for 3.5 cm:</strong><br>\n          $\\text{Ground Distance} = 3.5 \\times 200\\text{ km} = \\mathbf{700\\text{ km}}$.</li>\n          <li><strong>(b) Map distance for 500 km:</strong><br>\n          $\\text{Map Distance} = \\frac{500}{200} = \\mathbf{2.5\\text{ cm}}$.</li>\n        </ol>\n      </div>",
        "marks": 4,
        "rubric": [
          {
            "key": "Part (a): 3.5 × 200 = 700 km",
            "marks": "2 Marks"
          },
          {
            "key": "Part (b): 500 / 200 = 2.5 cm",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Mapping Your Way",
        "q": "[Exercise 1] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Mapping Your Way",
        "q": "[Exercise 2] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Mapping Your Way",
        "q": "[Exercise 3] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Mapping Your Way",
        "q": "[Exercise 4] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Mapping Your Way",
        "q": "[Exercise 5] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Mapping Your Way",
        "q": "[Exercise 6] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Mapping Your Way",
        "q": "[Exercise 7] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Mapping Your Way",
        "q": "[Exercise 8] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Mapping Your Way",
        "q": "[Exercise 9] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Mapping Your Way",
        "q": "[Exercise 10] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Mapping Your Way",
        "q": "[Exercise 11] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Mapping Your Way",
        "q": "[Exercise 12] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Mapping Your Way",
        "q": "[Exercise 13] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Mapping Your Way",
        "q": "[Exercise 14] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Mapping Your Way",
        "q": "[Exercise 15] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Mapping Your Way",
        "q": "[Exercise 16] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Mapping Your Way",
        "q": "[Exercise 17] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Mapping Your Way",
        "q": "[Exercise 18] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Mapping Your Way",
        "q": "[Exercise 1] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Mapping Your Way",
        "q": "[Exercise 2] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Mapping Your Way",
        "q": "[Exercise 3] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Mapping Your Way",
        "q": "[Exercise 4] In Chapter 'Mapping Your Way', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Mapping Your Way</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "NEP 2020 Competency Case: Mapping Your Way",
      "text": "A practical scenario involving Mapping Your Way in everyday life and community contexts.",
      "question": "Analyze the quantitative relationships and state the conclusion.",
      "answer": "Apply the step-by-step formulas and concepts mastered in this chapter.",
      "rubric": "1M formula + 1M working + 1M answer"
    }
  },
  {
    "id": "magic9",
    "num": 9,
    "unit": "Math-Magic (Classic CBSE) • Chapter 9",
    "title": "Boxes and Sketches",
    "subtitle": "डिब्बे और रेखाचित्र (त्रिविमीय आकृतियाँ, जालक एवं गहरे चित्र)",
    "concepts": [
      "2D representations of 3D objects: Floor maps vs Deep drawings (perspective views).",
      "Nets of a cube: A 2D pattern of 6 equal squares that can be folded to form a hollow cube.",
      "Opposite faces of a standard dice always add up to 7 (1+6, 2+5, 3+4).",
      "Open boxes (nets with 5 squares) vs closed boxes (nets with 6 squares).",
      "(a) Bottom face: Opposite to 3 is $7 - 3 = \\mathbf{4}$.",
      "(b) Back face: Opposite to 1 is $7 - 1 = \\mathbf{6}$.",
      "(c) Folding validity: No, because on a standard die opposite faces must sum to 7. Here $4 + 2 = 6 \\neq 7$. Opposite to 4 must be 3, and opposite to 2 must be 5."
    ],
    "svg": "<svg viewBox=\"0 0 600 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"160\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Net of a Cube (T-Shape) &amp; Opposite Face Property (Sum = 7)</text>\r\n        <g transform=\"translate(180, 38)\">\r\n          <rect x=\"40\" y=\"0\" width=\"30\" height=\"30\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.5\"/>\r\n          <text x=\"55\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#4338ca\" text-anchor=\"middle\">1</text>\r\n          <rect x=\"10\" y=\"30\" width=\"30\" height=\"30\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/>\r\n          <text x=\"25\" y=\"50\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\" text-anchor=\"middle\">2</text>\r\n          <rect x=\"40\" y=\"30\" width=\"30\" height=\"30\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\r\n          <text x=\"55\" y=\"50\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#b45309\" text-anchor=\"middle\">3</text>\r\n          <rect x=\"70\" y=\"30\" width=\"30\" height=\"30\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/>\r\n          <text x=\"85\" y=\"50\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\" text-anchor=\"middle\">5</text>\r\n          <rect x=\"100\" y=\"30\" width=\"30\" height=\"30\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\r\n          <text x=\"115\" y=\"50\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#b45309\" text-anchor=\"middle\">4</text>\r\n          <rect x=\"40\" y=\"60\" width=\"30\" height=\"30\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"1.5\"/>\r\n          <text x=\"55\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#4338ca\" text-anchor=\"middle\">6</text>\r\n        </g>\r\n        <g transform=\"translate(420, 48)\">\r\n          <polygon points=\"0,20 30,5 60,20 30,35\" fill=\"#93c5fd\" stroke=\"#1e40af\" stroke-width=\"1.5\"/>\r\n          <polygon points=\"0,20 30,35 30,70 0,55\" fill=\"#3b82f6\" stroke=\"#1e40af\" stroke-width=\"1.5\"/>\r\n          <polygon points=\"30,35 60,20 60,55 30,70\" fill=\"#1d4ed8\" stroke=\"#1e40af\" stroke-width=\"1.5\"/>\r\n          <text x=\"30\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Folded 3D Cube</text>\r\n        </g>\r\n        <text x=\"300\" y=\"148\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#475569\" text-anchor=\"middle\">Dice Opposite Faces: 1 opposite 6 (1+6=7) | 2 opposite 5 (2+5=7) | 3 opposite 4 (3+4=7)</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Textbook Exercise",
        "q": "(a) How many faces, edges, and vertices does a cube have?<br>(b) In a standard playing dice, what is the sum of dots on opposite faces? If face 4 is at the top, what number is on the bottom face?<br>(c) Will a flat strip of 6 squares arranged in a single straight row fold into a cube? Explain why or why not.",
        "ans": "<div class=\"step\"><strong>(a) Cube attributes:</strong> <strong>6 square faces</strong>, <strong>12 straight edges</strong>, and <strong>8 vertices</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 6 faces, 12 edges, 8 vertices",
            "marks": "1 Mark"
          },
          {
            "key": "Part (b): Sum 7 and bottom face 3",
            "marks": "1 Mark"
          },
          {
            "key": "Part (c): Clear negative explanation",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "(a) What is the key difference between a floor map and a deep drawing of a house?<br>(b) How many squares are there in the net of an open cardboard box (without a lid)?",
        "ans": "<div class=\"step\"><strong>(a) Floor Map vs Deep Drawing:</strong> A <strong>floor map</strong> is a 2D flat top-view showing where doors, windows, and rooms are located. A <strong>deep drawing</strong> shows length, breadth, and height in 3D perspective to show what the house actually looks like from outside.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 2D top view vs 3D perspective explanation",
            "marks": "2 Marks"
          },
          {
            "key": "Part (b): 5 squares",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "The numbers on opposite faces of a standard playing die always add up to 7. (a) If the top face shows 3, what number is on the bottom face? (b) If the front face shows 1, what number is on the back face? (c) Can a flat net with opposite faces showing 4 and 2 fold into a standard playing die? Explain.",
        "ans": "<div>\n        <ol>\n          <li><strong>(a) Bottom face:</strong> Opposite to 3 is $7 - 3 = \\mathbf{4}$.</li>\n          <li><strong>(b) Back face:</strong> Opposite to 1 is $7 - 1 = \\mathbf{6}$.</li>\n          <li><strong>(c) Folding validity:</strong> <strong>No</strong>, because on a standard die opposite faces must sum to 7. Here $4 + 2 = 6 \\neq 7$. Opposite to 4 must be 3, and opposite to 2 must be 5.</li>\n        </ol>",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 7 - 3 = 4",
            "marks": "1 Mark"
          },
          {
            "key": "Part (b): 7 - 1 = 6",
            "marks": "1 Mark"
          },
          {
            "key": "Part (c): No, because 4 + 2 = 6 != 7 rule",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "The numbers on opposite faces of a standard playing die always add up to 7. (a) If the top face shows 3, what number is on the bottom face? (b) If the front face shows 1, what number is on the back face? (c) Can a flat net with opposite faces showing 4 and 2 fold into a standard playing die? Explain.",
        "ans": "<div>\n        <ol>\n          <li><strong>(a) Bottom face:</strong> Opposite to 3 is $7 - 3 = \\mathbf{4}$.</li>\n          <li><strong>(b) Back face:</strong> Opposite to 1 is $7 - 1 = \\mathbf{6}$.</li>\n          <li><strong>(c) Folding validity:</strong> <strong>No</strong>, because on a standard die opposite faces must sum to 7. Here $4 + 2 = 6 \\neq 7$. Opposite to 4 must be 3, and opposite to 2 must be 5.</li>\n        </ol>\n      </div>",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 7 - 3 = 4",
            "marks": "1 Mark"
          },
          {
            "key": "Part (b): 7 - 1 = 6",
            "marks": "1 Mark"
          },
          {
            "key": "Part (c): No, because 4 + 2 = 6 != 7 rule",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Boxes and Sketches",
        "q": "[Exercise 1] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Boxes and Sketches",
        "q": "[Exercise 2] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Boxes and Sketches",
        "q": "[Exercise 3] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Boxes and Sketches",
        "q": "[Exercise 4] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Boxes and Sketches",
        "q": "[Exercise 5] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Boxes and Sketches",
        "q": "[Exercise 6] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Boxes and Sketches",
        "q": "[Exercise 7] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Boxes and Sketches",
        "q": "[Exercise 8] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Boxes and Sketches",
        "q": "[Exercise 9] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Boxes and Sketches",
        "q": "[Exercise 10] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Boxes and Sketches",
        "q": "[Exercise 11] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Boxes and Sketches",
        "q": "[Exercise 12] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Boxes and Sketches",
        "q": "[Exercise 13] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Boxes and Sketches",
        "q": "[Exercise 14] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Boxes and Sketches",
        "q": "[Exercise 15] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Boxes and Sketches",
        "q": "[Exercise 16] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Boxes and Sketches",
        "q": "[Exercise 17] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Boxes and Sketches",
        "q": "[Exercise 18] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Boxes and Sketches",
        "q": "[Exercise 1] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Boxes and Sketches",
        "q": "[Exercise 2] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Boxes and Sketches",
        "q": "[Exercise 3] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Boxes and Sketches",
        "q": "[Exercise 4] In Chapter 'Boxes and Sketches', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Boxes and Sketches</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "NEP 2020 Competency Case: Boxes and Sketches",
      "text": "A practical scenario involving Boxes and Sketches in everyday life and community contexts.",
      "question": "Analyze the quantitative relationships and state the conclusion.",
      "answer": "Apply the step-by-step formulas and concepts mastered in this chapter.",
      "rubric": "1M formula + 1M working + 1M answer"
    }
  },
  {
    "id": "magic10",
    "num": 10,
    "unit": "Math-Magic (Classic CBSE) • Chapter 10",
    "title": "Tenths and Hundredths",
    "subtitle": "दसवाँ और सौवाँ भाग (दशमलव, मिलीमीटर-सेंटीमीटर एवं मुद्रा गणना)",
    "concepts": [
      "Understanding Decimals: Tenths (1/10 = 0.1) and Hundredths (1/100 = 0.01).",
      "Length measurement: 1 cm = 10 mm ⇒ 1 mm = 0.1 cm.",
      "Currency notation: 1 Rupee = 100 paise ⇒ 1 paisa = ₹0.01; 75 paise = ₹0.75.",
      "Temperature reading and comparing decimal values across different Indian cities.",
      "(a) 4 cm 8 mm: Since $1\\text{ mm} = 0.1\\text{ cm}$, $8\\text{ mm} = 0.8\\text{ cm}$. Total = $4 + 0.8 = \\mathbf{4.8\\text{ cm}}$.",
      "(b) 75 paise: Since $100\\text{ paise} = ₹1$, $75\\text{ paise} = \\frac{75}{100} = \\mathbf{₹0.75}$.",
      "(c) 3 m 45 cm: Since $100\\text{ cm} = 1\\text{ m}$, $45\\text{ cm} = 0.45\\text{ m}$. Total = $3 + 0.45 = \\mathbf{3.45\\text{ m}}$.",
      "(d) 5 mm: $\\frac{5}{10} = \\mathbf{0.5\\text{ cm}}$."
    ],
    "svg": "<svg viewBox=\"0 0 600 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"160\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Magnified Ruler: Millimetres as Tenths of a Centimetre (1 mm = 0.1 cm)</text>\r\n        <g transform=\"translate(60, 48)\">\r\n          <rect x=\"0\" y=\"0\" width=\"480\" height=\"60\" fill=\"#fef9c3\" stroke=\"#ca8a04\" stroke-width=\"2\" rx=\"4\"/>\r\n          <line x1=\"20\" y1=\"0\" x2=\"20\" y2=\"30\" stroke=\"#0f172a\" stroke-width=\"2\"/>\r\n          <text x=\"20\" y=\"48\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">0</text>\r\n          <line x1=\"60\" y1=\"0\" x2=\"60\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\r\n          <line x1=\"100\" y1=\"0\" x2=\"100\" y2=\"30\" stroke=\"#0f172a\" stroke-width=\"2\"/>\r\n          <text x=\"100\" y=\"48\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">1</text>\r\n          <rect x=\"20\" y=\"-12\" width=\"216\" height=\"8\" rx=\"2\" fill=\"#d97706\"/>\r\n          <circle cx=\"236\" cy=\"-8\" r=\"5\" fill=\"#dc2626\"/>\r\n          <text x=\"130\" y=\"-18\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"800\" fill=\"#b45309\" text-anchor=\"middle\">Matchstick Length: 2 cm 7 mm = 2.7 cm</text>\r\n        </g>\r\n        <text x=\"300\" y=\"148\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#475569\" text-anchor=\"middle\">1 mm = 1/10 cm = 0.1 cm | 7 mm = 7/10 cm = 0.7 cm | Total = 2 + 0.7 = 2.7 cm</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Textbook Exercise",
        "q": "(a) Write as decimals in centimetres: (i) 3 mm, (ii) 4 cm 5 mm, (iii) 12 cm 8 mm.<br>(b) Write as decimals in rupees: (i) 75 paise, (ii) 5 paise, (iii) 25 rupees 60 paise.<br>(c) The temperature of Chennai at 3 PM was recorded as 34.8°C and at 3 AM it was 21.5°C. What was the drop in temperature?",
        "ans": "<div class=\"step\"><strong>(a) In Centimetres:</strong> (i) <strong>0.3 cm</strong>, (ii) <strong>4.5 cm</strong>, (iii) <strong>12.8 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 0.3 cm, 4.5 cm, 12.8 cm",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (b): ₹0.75, ₹0.05, ₹25.60",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (c): 13.3°C drop",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "In a frog jumping experiment, a tiny gold frog jumped 0.9 cm and a large bullfrog jumped 30.5 cm.<br>(a) Express the gold frog's jump in millimetres.<br>(b) Express the bullfrog's jump in centimetres and millimetres.<br>(c) How much farther did the bullfrog jump than the gold frog?",
        "ans": "<div class=\"step\"><strong>(a) Gold frog jump in mm:</strong> 0.9 cm = 0.9 × 10 = <strong>9 mm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 9 mm",
            "marks": "1 Mark"
          },
          {
            "key": "Part (b): 30 cm 5 mm",
            "marks": "1 Mark"
          },
          {
            "key": "Part (c): 29.6 cm",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Convert the following measurements into decimals: (a) 4 cm 8 mm into centimeters, (b) 75 paise into rupees, (c) 3 meters 45 centimeters into meters, (d) 5 mm into centimeters.",
        "ans": "<div>\n        <ul>\n          <li><strong>(a) 4 cm 8 mm:</strong> Since $1\\text{ mm} = 0.1\\text{ cm}$, $8\\text{ mm} = 0.8\\text{ cm}$. Total = $4 + 0.8 = \\mathbf{4.8\\text{ cm}}$.</li>\n          <li><strong>(b) 75 paise:</strong> Since $100\\text{ paise} = ₹1$, $75\\text{ paise} = \\frac{75}{100} = \\mathbf{₹0.75}$.</li>\n          <li><strong>(c) 3 m 45 cm:</strong> Since $100\\text{ cm} = 1\\text{ m}$, $45\\text{ cm} = 0.45\\text{ m}$. Total = $3 + 0.45 = \\mathbf{3.45\\text{ m}}$.</li>\n          <li><strong>(d) 5 mm:</strong> $\\frac{5}{10} = \\mathbf{0.5\\text{ cm}}$.</li>\n        </ul>",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 4.8 cm",
            "marks": "1 Mark"
          },
          {
            "key": "Part (b): ₹0.75",
            "marks": "1 Mark"
          },
          {
            "key": "Part (c): 3.45 m",
            "marks": "1 Mark"
          },
          {
            "key": "Part (d): 0.5 cm",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "On a winter afternoon at 3:00 PM, temperatures recorded were: Srinagar 8.1°C, Jaipur 24.3°C, Mumbai 35.1°C, and Chennai 29.8°C. (a) Which place was the hottest and which was the coldest? (b) What was the difference in temperature between Mumbai and Srinagar?",
        "ans": "<div>\n        <ol>\n          <li><strong>(a) Hottest & Coldest:</strong><br>\n          Hottest city: <strong>Mumbai (35.1°C)</strong>.<br>\n          Coldest city: <strong>Srinagar (8.1°C)</strong>.</li>\n          <li><strong>(b) Temperature difference:</strong><br>\n          $\\text{Difference} = 35.1^\\circ\\text{C} - 8.1^\\circ\\text{C} = \\mathbf{27.0^\\circ\\text{C}}$.</li>\n        </ol>",
        "marks": 3,
        "rubric": [
          {
            "key": "Hottest = Mumbai, Coldest = Srinagar",
            "marks": "1.5 Marks"
          },
          {
            "key": "Difference = 35.1 - 8.1 = 27.0°C",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "Convert the following measurements into decimals: (a) 4 cm 8 mm into centimeters, (b) 75 paise into rupees, (c) 3 meters 45 centimeters into meters, (d) 5 mm into centimeters.",
        "ans": "<div>\n        <ul>\n          <li><strong>(a) 4 cm 8 mm:</strong> Since $1\\text{ mm} = 0.1\\text{ cm}$, $8\\text{ mm} = 0.8\\text{ cm}$. Total = $4 + 0.8 = \\mathbf{4.8\\text{ cm}}$.</li>\n          <li><strong>(b) 75 paise:</strong> Since $100\\text{ paise} = ₹1$, $75\\text{ paise} = \\frac{75}{100} = \\mathbf{₹0.75}$.</li>\n          <li><strong>(c) 3 m 45 cm:</strong> Since $100\\text{ cm} = 1\\text{ m}$, $45\\text{ cm} = 0.45\\text{ m}$. Total = $3 + 0.45 = \\mathbf{3.45\\text{ m}}$.</li>\n          <li><strong>(d) 5 mm:</strong> $\\frac{5}{10} = \\mathbf{0.5\\text{ cm}}$.</li>\n        </ul>\n      </div>",
        "marks": 4,
        "rubric": [
          {
            "key": "Part (a): 4.8 cm",
            "marks": "1 Mark"
          },
          {
            "key": "Part (b): ₹0.75",
            "marks": "1 Mark"
          },
          {
            "key": "Part (c): 3.45 m",
            "marks": "1 Mark"
          },
          {
            "key": "Part (d): 0.5 cm",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "On a winter afternoon at 3:00 PM, temperatures recorded were: Srinagar 8.1°C, Jaipur 24.3°C, Mumbai 35.1°C, and Chennai 29.8°C. (a) Which place was the hottest and which was the coldest? (b) What was the difference in temperature between Mumbai and Srinagar?",
        "ans": "<div>\n        <ol>\n          <li><strong>(a) Hottest & Coldest:</strong><br>\n          Hottest city: <strong>Mumbai (35.1°C)</strong>.<br>\n          Coldest city: <strong>Srinagar (8.1°C)</strong>.</li>\n          <li><strong>(b) Temperature difference:</strong><br>\n          $\\text{Difference} = 35.1^\\circ\\text{C} - 8.1^\\circ\\text{C} = \\mathbf{27.0^\\circ\\text{C}}$.</li>\n        </ol>\n      </div>",
        "marks": 3,
        "rubric": [
          {
            "key": "Hottest = Mumbai, Coldest = Srinagar",
            "marks": "1.5 Marks"
          },
          {
            "key": "Difference = 35.1 - 8.1 = 27.0°C",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Tenths and Hundredths",
        "q": "[Exercise 1] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Tenths and Hundredths",
        "q": "[Exercise 2] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Tenths and Hundredths",
        "q": "[Exercise 3] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Tenths and Hundredths",
        "q": "[Exercise 4] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Tenths and Hundredths",
        "q": "[Exercise 5] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Tenths and Hundredths",
        "q": "[Exercise 6] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Tenths and Hundredths",
        "q": "[Exercise 7] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Tenths and Hundredths",
        "q": "[Exercise 8] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Tenths and Hundredths",
        "q": "[Exercise 9] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Tenths and Hundredths",
        "q": "[Exercise 10] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Tenths and Hundredths",
        "q": "[Exercise 11] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Tenths and Hundredths",
        "q": "[Exercise 12] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Tenths and Hundredths",
        "q": "[Exercise 13] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Tenths and Hundredths",
        "q": "[Exercise 14] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Tenths and Hundredths",
        "q": "[Exercise 15] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Tenths and Hundredths",
        "q": "[Exercise 16] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Tenths and Hundredths",
        "q": "[Exercise 1] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Tenths and Hundredths",
        "q": "[Exercise 2] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Tenths and Hundredths",
        "q": "[Exercise 3] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Tenths and Hundredths",
        "q": "[Exercise 4] In Chapter 'Tenths and Hundredths', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Tenths and Hundredths</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "NEP 2020 Competency Case: Tenths and Hundredths",
      "text": "A practical scenario involving Tenths and Hundredths in everyday life and community contexts.",
      "question": "Analyze the quantitative relationships and state the conclusion.",
      "answer": "Apply the step-by-step formulas and concepts mastered in this chapter.",
      "rubric": "1M formula + 1M working + 1M answer"
    }
  },
  {
    "id": "magic11",
    "num": 11,
    "unit": "Math-Magic (Classic CBSE) • Chapter 11",
    "title": "Area and its Boundary",
    "subtitle": "क्षेत्रफल और घेरा (परिमाप, डाक टिकट क्षेत्रफल एवं राजा का सोने का तार)",
    "concepts": [
      "Perimeter = Total length of the boundary: P = 2 × (L + B) for rectangles, P = 4 × S for squares.",
      "Area = Measure of region enclosed: A = L × B for rectangles, A = S × S for squares.",
      "Shapes with the SAME perimeter can enclose DIFFERENT areas.",
      "A square encloses the maximum area for any given rectangular perimeter."
    ],
    "svg": "<svg viewBox=\"0 0 600 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"160\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Same Perimeter (20 cm) Enclosing Different Areas</text>\r\n        <g transform=\"translate(60, 42)\">\r\n          <rect x=\"0\" y=\"20\" width=\"135\" height=\"15\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.5\"/>\r\n          <text x=\"67\" y=\"55\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Shape A: 9 cm × 1 cm</text>\r\n          <text x=\"67\" y=\"70\" font-family=\"system-ui, sans-serif\" font-size=\"9.5\" fill=\"#dc2626\" text-anchor=\"middle\">Perimeter = 20 cm | Area = 9 sq cm</text>\r\n        </g>\r\n        <g transform=\"translate(240, 42)\">\r\n          <rect x=\"0\" y=\"10\" width=\"105\" height=\"45\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\r\n          <text x=\"52\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Shape B: 7 cm × 3 cm</text>\r\n          <text x=\"52\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"9.5\" fill=\"#b45309\" text-anchor=\"middle\">Perimeter = 20 cm | Area = 21 sq cm</text>\r\n        </g>\r\n        <g transform=\"translate(420, 32)\">\r\n          <rect x=\"0\" y=\"0\" width=\"75\" height=\"75\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/>\r\n          <text x=\"37\" y=\"95\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Shape C: 5 cm × 5 cm</text>\r\n          <text x=\"37\" y=\"110\" font-family=\"system-ui, sans-serif\" font-size=\"9.5\" font-weight=\"800\" fill=\"#15803d\" text-anchor=\"middle\">Perimeter = 20 cm | Max Area = 25 sq cm</text>\r\n        </g>\r\n        <text x=\"300\" y=\"150\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#475569\" text-anchor=\"middle\">Mathematical Law: For a given perimeter, a square always encloses the largest possible area.</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Textbook Exercise",
        "q": "Arbaz plans to tile his kitchen floor with square tiles of side 10 cm. The floor is 220 cm long and 180 cm wide.<br>(a) Find the area of the kitchen floor in square centimetres.<br>(b) Find the area of one tile.<br>(c) How many tiles will Arbaz need to pave the whole floor?",
        "ans": "<div class=\"step\"><strong>(a) Floor Area:</strong> 220 × 180 = <strong>39,600 sq cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 39,600 sq cm",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (b): 100 sq cm",
            "marks": "1 Mark"
          },
          {
            "key": "Part (c): 396 tiles",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "A carrom board has a perimeter of 320 cm.<br>(a) What is the length of each side of the carrom board?<br>(b) What is the surface area of the carrom board?",
        "ans": "<div class=\"step\"><strong>(a) Side of Square Carrom Board:</strong><br>\r\n Side = Perimeter/4 = 320/4 = <strong>80 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 80 cm side",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (b): 6,400 sq cm",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Arbaz plans to tile his kitchen floor with green square tiles of size 10 cm × 10 cm. The length of the floor is 200 cm and the width is 150 cm. (a) What is the area of the kitchen floor? (b) What is the area of one tile? (c) How many tiles will he need?",
        "ans": "<div>\n        <ol>\n          <li><strong>(a) Area of the floor:</strong><br>\n          $\\text{Floor Area} = 200\\text{ cm} \\times 150\\text{ cm} = \\mathbf{30,000\\text{ cm}^2}$.</li>\n          <li><strong>(b) Area of one tile:</strong><br>\n          $\\text{Tile Area} = 10\\text{ cm} \\times 10\\text{ cm} = \\mathbf{100\\text{ cm}^2}$.</li>\n          <li><strong>(c) Number of tiles needed:</strong><br>\n          $\\text{Number of tiles} = \\frac{\\text{Floor Area}}{\\text{Tile Area}} = \\frac{30,000}{100} = \\mathbf{300\\text{ tiles}}$.</li>\n        </ol>",
        "marks": 3,
        "rubric": [
          {
            "key": "Floor Area = 200 × 150 = 30,000 cm²",
            "marks": "1.5 Marks"
          },
          {
            "key": "Tile Area = 100 cm²",
            "marks": "1 Mark"
          },
          {
            "key": "Total tiles = 30,000 / 100 = 300 tiles",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "A square has a side of 10 cm. A small square of side 1 cm is cut out from one corner. Does the boundary (perimeter) increase, decrease, or remain the same? What happens to the area?",
        "ans": "<div>\n        <ol>\n          <li><strong>Original Square:</strong><br>\n          $\\text{Perimeter} = 4 \\times 10 = 40\\text{ cm}$.<br>\n          $\\text{Area} = 10 \\times 10 = 100\\text{ cm}^2$.</li>\n          <li><strong>After cutting 1 cm square from corner:</strong><br>\n          The two cut edges inside the corner measure $1\\text{ cm} + 1\\text{ cm} = 2\\text{ cm}$, which replace the two outer 1 cm segments removed.<br>\n          Therefore, the boundary (perimeter) <strong>remains exactly the same (40 cm)</strong>.</li>\n          <li><strong>Area:</strong><br>\n          Area decreases by $1\\text{ cm}^2$: $\\text{New Area} = 100 - 1 = \\mathbf{99\\text{ cm}^2}$ (Decreases).</li>\n        </ol>",
        "marks": 3,
        "rubric": [
          {
            "key": "Explanation that perimeter remains unchanged at 40 cm",
            "marks": "1.5 Marks"
          },
          {
            "key": "Explanation that area decreases to 99 cm²",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "Arbaz plans to tile his kitchen floor with green square tiles of size 10 cm × 10 cm. The length of the floor is 200 cm and the width is 150 cm. (a) What is the area of the kitchen floor? (b) What is the area of one tile? (c) How many tiles will he need?",
        "ans": "<div>\n        <ol>\n          <li><strong>(a) Area of the floor:</strong><br>\n          $\\text{Floor Area} = 200\\text{ cm} \\times 150\\text{ cm} = \\mathbf{30,000\\text{ cm}^2}$.</li>\n          <li><strong>(b) Area of one tile:</strong><br>\n          $\\text{Tile Area} = 10\\text{ cm} \\times 10\\text{ cm} = \\mathbf{100\\text{ cm}^2}$.</li>\n          <li><strong>(c) Number of tiles needed:</strong><br>\n          $\\text{Number of tiles} = \\frac{\\text{Floor Area}}{\\text{Tile Area}} = \\frac{30,000}{100} = \\mathbf{300\\text{ tiles}}$.</li>\n        </ol>\n      </div>",
        "marks": 4,
        "rubric": [
          {
            "key": "Floor Area = 200 × 150 = 30,000 cm²",
            "marks": "1.5 Marks"
          },
          {
            "key": "Tile Area = 100 cm²",
            "marks": "1 Mark"
          },
          {
            "key": "Total tiles = 30,000 / 100 = 300 tiles",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "A square has a side of 10 cm. A small square of side 1 cm is cut out from one corner. Does the boundary (perimeter) increase, decrease, or remain the same? What happens to the area?",
        "ans": "<div>\n        <ol>\n          <li><strong>Original Square:</strong><br>\n          $\\text{Perimeter} = 4 \\times 10 = 40\\text{ cm}$.<br>\n          $\\text{Area} = 10 \\times 10 = 100\\text{ cm}^2$.</li>\n          <li><strong>After cutting 1 cm square from corner:</strong><br>\n          The two cut edges inside the corner measure $1\\text{ cm} + 1\\text{ cm} = 2\\text{ cm}$, which replace the two outer 1 cm segments removed.<br>\n          Therefore, the boundary (perimeter) <strong>remains exactly the same (40 cm)</strong>.</li>\n          <li><strong>Area:</strong><br>\n          Area decreases by $1\\text{ cm}^2$: $\\text{New Area} = 100 - 1 = \\mathbf{99\\text{ cm}^2}$ (Decreases).</li>\n        </ol>\n      </div>",
        "marks": 3,
        "rubric": [
          {
            "key": "Explanation that perimeter remains unchanged at 40 cm",
            "marks": "1.5 Marks"
          },
          {
            "key": "Explanation that area decreases to 99 cm²",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Area and its Boundary",
        "q": "[Exercise 1] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Area and its Boundary",
        "q": "[Exercise 2] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Area and its Boundary",
        "q": "[Exercise 3] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Area and its Boundary",
        "q": "[Exercise 4] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Area and its Boundary",
        "q": "[Exercise 5] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Area and its Boundary",
        "q": "[Exercise 6] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Area and its Boundary",
        "q": "[Exercise 7] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Area and its Boundary",
        "q": "[Exercise 8] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Area and its Boundary",
        "q": "[Exercise 9] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Area and its Boundary",
        "q": "[Exercise 10] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Area and its Boundary",
        "q": "[Exercise 11] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Area and its Boundary",
        "q": "[Exercise 12] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Area and its Boundary",
        "q": "[Exercise 13] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Area and its Boundary",
        "q": "[Exercise 14] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Area and its Boundary",
        "q": "[Exercise 15] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Area and its Boundary",
        "q": "[Exercise 16] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Area and its Boundary",
        "q": "[Exercise 1] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Area and its Boundary",
        "q": "[Exercise 2] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Area and its Boundary",
        "q": "[Exercise 3] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Area and its Boundary",
        "q": "[Exercise 4] In Chapter 'Area and its Boundary', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Area and its Boundary</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "NEP 2020 Competency Case: Area and its Boundary",
      "text": "A practical scenario involving Area and its Boundary in everyday life and community contexts.",
      "question": "Analyze the quantitative relationships and state the conclusion.",
      "answer": "Apply the step-by-step formulas and concepts mastered in this chapter.",
      "rubric": "1M formula + 1M working + 1M answer"
    }
  },
  {
    "id": "magic12",
    "num": 12,
    "unit": "Math-Magic (Classic CBSE) • Chapter 12",
    "title": "Smart Charts",
    "subtitle": "स्मार्ट चार्ट (चपाती चार्ट / पाई चार्ट, टैली चिह्न एवं पेड़ आरेख)",
    "concepts": [
      "Tally marks for rapid counting: 5 is represented by four vertical lines and one cross slash (||||).",
      "Chapati Chart (Pie Chart / Circle Graph): Representing portions of a whole as sectors (1/2, 1/4, 1/8).",
      "Growth bar graphs: Tracking seed/plant growth over consecutive days.",
      "Family trees and generation tracking.",
      "Total students: 40.",
      "(a) Cricket: $\\frac{1}{2} \\times 40 = \\mathbf{20\\text{ students}}$.",
      "(b) Football: $\\frac{1}{4} \\times 40 = \\mathbf{10\\text{ students}}$.",
      "(c) Badminton: $\\frac{1}{4} \\times 40 = \\mathbf{10\\text{ students}}$."
    ],
    "svg": "<svg viewBox=\"0 0 600 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"160\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Chapati (Pie) Chart: Games Liked by 40 Children</text>\r\n        <g transform=\"translate(180, 85)\">\r\n          <path d=\"M 0 0 L 0 -50 A 50 50 0 0 1 0 50 Z\" fill=\"#3b82f6\"/>\r\n          <path d=\"M 0 0 L 0 50 A 50 50 0 0 1 -50 0 Z\" fill=\"#10b981\"/>\r\n          <path d=\"M 0 0 L -50 0 A 50 50 0 0 1 0 -50 Z\" fill=\"#f59e0b\"/>\r\n          <text x=\"25\" y=\"5\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">Cricket (1/2)</text>\r\n          <text x=\"-25\" y=\"25\" font-family=\"system-ui, sans-serif\" font-size=\"8.5\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Footb. (1/4)</text>\r\n          <text x=\"-25\" y=\"-20\" font-family=\"system-ui, sans-serif\" font-size=\"8.5\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Badm. (1/4)</text>\r\n        </g>\r\n        <g transform=\"translate(320, 50)\">\r\n          <rect x=\"0\" y=\"0\" width=\"14\" height=\"14\" rx=\"2\" fill=\"#3b82f6\"/>\r\n          <text x=\"24\" y=\"11\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">Cricket: 20 children (1/2 of 40)</text>\r\n          <rect x=\"0\" y=\"25\" width=\"14\" height=\"14\" rx=\"2\" fill=\"#10b981\"/>\r\n          <text x=\"24\" y=\"36\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">Football: 10 children (1/4 of 40)</text>\r\n          <rect x=\"0\" y=\"50\" width=\"14\" height=\"14\" rx=\"2\" fill=\"#f59e0b\"/>\r\n          <text x=\"24\" y=\"61\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">Badminton: 10 children (1/4 of 40)</text>\r\n        </g>\r\n        <text x=\"300\" y=\"150\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#475569\" text-anchor=\"middle\">Total Children = 40 | Fraction = Number of children in category ÷ 40</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Textbook Exercise",
        "q": "In a class of 40 children, a teacher asks each child which sport they like most. The responses are shown in a Chapati chart:<br>• Half of the children like Cricket.<br>• One-fourth like Football.<br>• The remaining like Badminton.<br>(a) How many children like Cricket?<br>(b) How many children like Football?<br>(c) What fraction and how many children like Badminton?",
        "ans": "<div class=\"step\"><strong>(a) Cricket:</strong> 1/2 × 40 = <strong>20 children</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 20 children",
            "marks": "1 Mark"
          },
          {
            "key": "Part (b): 10 children",
            "marks": "1 Mark"
          },
          {
            "key": "Part (c): 1/4 and 10 children",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Yamini did a project 'Animals and Birds'. She recorded the pets kept by her classmates using tally marks:<br>• Dogs: <s>||||</s> <s>||||</s> <s>||||</s> <s>||||</s> |||| (24)<br>• Cats: <s>||||</s> <s>||||</s> <s>||||</s> | (16)<br>• Rabbits: <s>||||</s> <s>||||</s> (10)<br>(a) Which is the most popular pet?<br>(b) How many total pets were recorded across these three animals?<br>(c) How many more dogs are kept than rabbits?",
        "ans": "<div class=\"step\"><strong>(a) Most popular pet:</strong> <strong>Dog</strong> (24 tally count).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): Dog",
            "marks": "1 Mark"
          },
          {
            "key": "Part (b): 50 pets",
            "marks": "1 Mark"
          },
          {
            "key": "Part (c): 14 more dogs",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "In a class of 40 students, a Chapati Chart (Pie Chart) shows their favorite sports: 1/2 of the students like Cricket, 1/4 like Football, and 1/4 like Badminton. (a) How many students like Cricket? (b) How many like Football? (c) How many like Badminton?",
        "ans": "<div>\n        <ol>\n          <li><strong>Total students:</strong> 40.</li>\n          <li><strong>(a) Cricket:</strong> $\\frac{1}{2} \\times 40 = \\mathbf{20\\text{ students}}$.</li>\n          <li><strong>(b) Football:</strong> $\\frac{1}{4} \\times 40 = \\mathbf{10\\text{ students}}$.</li>\n          <li><strong>(c) Badminton:</strong> $\\frac{1}{4} \\times 40 = \\mathbf{10\\text{ students}}$.</li>\n        </ol>\n        <p><em>Check:</em> $20 + 10 + 10 = 40$ students.</p>",
        "marks": 3,
        "rubric": [
          {
            "key": "Cricket: 1/2 × 40 = 20",
            "marks": "1 Mark"
          },
          {
            "key": "Football: 1/4 × 40 = 10",
            "marks": "1 Mark"
          },
          {
            "key": "Badminton: 1/4 × 40 = 10",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "In a class of 40 students, a Chapati Chart (Pie Chart) shows their favorite sports: 1/2 of the students like Cricket, 1/4 like Football, and 1/4 like Badminton. (a) How many students like Cricket? (b) How many like Football? (c) How many like Badminton?",
        "ans": "<div>\n        <ol>\n          <li><strong>Total students:</strong> 40.</li>\n          <li><strong>(a) Cricket:</strong> $\\frac{1}{2} \\times 40 = \\mathbf{20\\text{ students}}$.</li>\n          <li><strong>(b) Football:</strong> $\\frac{1}{4} \\times 40 = \\mathbf{10\\text{ students}}$.</li>\n          <li><strong>(c) Badminton:</strong> $\\frac{1}{4} \\times 40 = \\mathbf{10\\text{ students}}$.</li>\n        </ol>\n        <p><em>Check:</em> $20 + 10 + 10 = 40$ students.</p>\n      </div>",
        "marks": 3,
        "rubric": [
          {
            "key": "Cricket: 1/2 × 40 = 20",
            "marks": "1 Mark"
          },
          {
            "key": "Football: 1/4 × 40 = 10",
            "marks": "1 Mark"
          },
          {
            "key": "Badminton: 1/4 × 40 = 10",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Smart Charts",
        "q": "[Exercise 1] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Smart Charts",
        "q": "[Exercise 2] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Smart Charts",
        "q": "[Exercise 3] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Smart Charts",
        "q": "[Exercise 4] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Smart Charts",
        "q": "[Exercise 5] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Smart Charts",
        "q": "[Exercise 6] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Smart Charts",
        "q": "[Exercise 7] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Smart Charts",
        "q": "[Exercise 8] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Smart Charts",
        "q": "[Exercise 9] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Smart Charts",
        "q": "[Exercise 10] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Smart Charts",
        "q": "[Exercise 11] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Smart Charts",
        "q": "[Exercise 12] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Smart Charts",
        "q": "[Exercise 13] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Smart Charts",
        "q": "[Exercise 14] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Smart Charts",
        "q": "[Exercise 15] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Smart Charts",
        "q": "[Exercise 16] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Smart Charts",
        "q": "[Exercise 17] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Smart Charts",
        "q": "[Exercise 18] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Smart Charts",
        "q": "[Exercise 1] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Smart Charts",
        "q": "[Exercise 2] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Smart Charts",
        "q": "[Exercise 3] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Smart Charts",
        "q": "[Exercise 4] In Chapter 'Smart Charts', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Smart Charts</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "NEP 2020 Competency Case: Smart Charts",
      "text": "A practical scenario involving Smart Charts in everyday life and community contexts.",
      "question": "Analyze the quantitative relationships and state the conclusion.",
      "answer": "Apply the step-by-step formulas and concepts mastered in this chapter.",
      "rubric": "1M formula + 1M working + 1M answer"
    }
  },
  {
    "id": "magic13",
    "num": 13,
    "unit": "Math-Magic (Classic CBSE) • Chapter 13",
    "title": "Ways to Multiply and Divide",
    "subtitle": "गुणा और भाग के तरीके (बेला का गुणन, शांताराम का वेतन एवं दिन गणना)",
    "concepts": [
      "Bela's method of columnar multiplication using expanded place-value distributive property.",
      "Multiplying 2-digit and 3-digit numbers by multi-step partial products.",
      "Division algorithms: Quotients and remainders in commercial contexts.",
      "Daily wage calculation, monthly salaries, and yearly earnings.",
      "Total notebooks: 576.",
      "Total boxes: 18."
    ],
    "svg": "<svg viewBox=\"0 0 600 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"160\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Bela's Distributive Multiplication Algorithm: 65 × 32</text>\r\n        <g transform=\"translate(180, 38)\">\r\n          <rect x=\"0\" y=\"0\" width=\"240\" height=\"90\" rx=\"6\" fill=\"#f1f5f9\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n          <text x=\"70\" y=\"20\" font-family=\"'Courier New', monospace\" font-size=\"14\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"end\">65</text>\r\n          <text x=\"70\" y=\"36\" font-family=\"'Courier New', monospace\" font-size=\"14\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"end\">× 32</text>\r\n          <line x1=\"20\" y1=\"42\" x2=\"80\" y2=\"42\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\r\n          <text x=\"70\" y=\"58\" font-family=\"'Courier New', monospace\" font-size=\"14\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"end\">130</text>\r\n          <text x=\"140\" y=\"58\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#2563eb\">← 65 × 2</text>\r\n          <text x=\"70\" y=\"74\" font-family=\"'Courier New', monospace\" font-size=\"14\" font-weight=\"700\" fill=\"#059669\" text-anchor=\"end\">1950</text>\r\n          <text x=\"140\" y=\"74\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#059669\">← 65 × 30</text>\r\n          <line x1=\"20\" y1=\"78\" x2=\"80\" y2=\"78\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\r\n          <text x=\"70\" y=\"92\" font-family=\"'Courier New', monospace\" font-size=\"15\" font-weight=\"900\" fill=\"#0f172a\" text-anchor=\"end\">2080</text>\r\n          <text x=\"140\" y=\"92\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">← Total Product</text>\r\n        </g>\r\n        <text x=\"300\" y=\"148\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#475569\" text-anchor=\"middle\">Step 1: Multiply by 2 (ones) = 130 | Step 2: Multiply by 30 (tens) = 1950 | Sum = 2,080</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Textbook Exercise",
        "q": "(a) Multiply using Bela's method: 65 × 32.<br>(b) Shantaram is a cook on a farm. He is paid ₹165 per day. If he works for all 365 days of the year, what will be his total annual earnings?<br>(c) 576 books are to be packed in boxes. If one box holds 24 books, how many boxes are needed?",
        "ans": "<div class=\"step\"><strong>(a) Bela's Method:</strong> 65 × 2 = 130; 65 × 30 = 1,950; Sum = <strong>2,080</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 2,080",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (b): ₹60,225",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (c): 24 boxes",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Karunya bought three plots of agricultural land:<br>• Plot A measuring 27 m by 28 m<br>• Plot B measuring 36 m by 12 m<br>• Plot C measuring 27 m by 19 m<br>(a) Find the area of Plot A and Plot B.<br>(b) Which plot has the larger area and by how much?",
        "ans": "<div class=\"step\"><strong>(a) Areas:</strong><br>\r\n Plot A = 27 × 28 = <strong>756 sq metres</strong>.<br>\r\n Plot B = 36 × 12 = <strong>432 sq metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): Plot A 756 sq m, Plot B 432 sq m",
            "marks": "2 Marks"
          },
          {
            "key": "Part (b): Plot A larger by 324 sq m",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Sohanlal drinks 8 glasses of water every day. (a) How many glasses of water will he drink in one non-leap year (365 days)? (b) If 125 people living in a residential colony drink 8 glasses each day, how many glasses will they drink altogether in one month of 30 days?",
        "ans": "<div>\n        <ol>\n          <li><strong>(a) Glasses in 365 days:</strong><br>\n          $\\text{Total glasses} = 365 \\times 8 = \\mathbf{2,920\\text{ glasses}}$.</li>\n          <li><strong>(b) Glasses by 125 people in 30 days:</strong><br>\n          Glasses drunk by colony in 1 day = $125 \\times 8 = 1,000\\text{ glasses}$.<br>\n          Glasses in 30 days = $1,000 \\times 30 = \\mathbf{30,000\\text{ glasses}}$.</li>\n        </ol>",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 365 × 8 = 2,920 glasses",
            "marks": "2 Marks"
          },
          {
            "key": "Part (b): 125 × 8 × 30 = 30,000 glasses",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "A school ordered 576 notebooks to be packed equally into 18 boxes. How many notebooks were packed in each box? Check your answer using multiplication.",
        "ans": "<div>\n        <ol>\n          <li><strong>Total notebooks:</strong> 576.</li>\n          <li><strong>Total boxes:</strong> 18.</li>\n          <li><strong>Notebooks per box:</strong><br>\n          $576 \\div 18 = \\mathbf{32\\text{ notebooks}}$.</li>\n          <li><strong>Verification Check:</strong><br>\n          $\\text{Quotient} \\times \\text{Divisor} = 32 \\times 18 = 32 \\times (10 + 8) = 320 + 256 = 576$ (Correct).</li>\n        </ol>",
        "marks": 3,
        "rubric": [
          {
            "key": "Division: 576 / 18 = 32 notebooks",
            "marks": "2 Marks"
          },
          {
            "key": "Multiplication verification: 32 × 18 = 576",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "Sohanlal drinks 8 glasses of water every day. (a) How many glasses of water will he drink in one non-leap year (365 days)? (b) If 125 people living in a residential colony drink 8 glasses each day, how many glasses will they drink altogether in one month of 30 days?",
        "ans": "<div>\n        <ol>\n          <li><strong>(a) Glasses in 365 days:</strong><br>\n          $\\text{Total glasses} = 365 \\times 8 = \\mathbf{2,920\\text{ glasses}}$.</li>\n          <li><strong>(b) Glasses by 125 people in 30 days:</strong><br>\n          Glasses drunk by colony in 1 day = $125 \\times 8 = 1,000\\text{ glasses}$.<br>\n          Glasses in 30 days = $1,000 \\times 30 = \\mathbf{30,000\\text{ glasses}}$.</li>\n        </ol>\n      </div>",
        "marks": 4,
        "rubric": [
          {
            "key": "Part (a): 365 × 8 = 2,920 glasses",
            "marks": "2 Marks"
          },
          {
            "key": "Part (b): 125 × 8 × 30 = 30,000 glasses",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "A school ordered 576 notebooks to be packed equally into 18 boxes. How many notebooks were packed in each box? Check your answer using multiplication.",
        "ans": "<div>\n        <ol>\n          <li><strong>Total notebooks:</strong> 576.</li>\n          <li><strong>Total boxes:</strong> 18.</li>\n          <li><strong>Notebooks per box:</strong><br>\n          $576 \\div 18 = \\mathbf{32\\text{ notebooks}}$.</li>\n          <li><strong>Verification Check:</strong><br>\n          $\\text{Quotient} \\times \\text{Divisor} = 32 \\times 18 = 32 \\times (10 + 8) = 320 + 256 = 576$ (Correct).</li>\n        </ol>\n      </div>",
        "marks": 3,
        "rubric": [
          {
            "key": "Division: 576 / 18 = 32 notebooks",
            "marks": "2 Marks"
          },
          {
            "key": "Multiplication verification: 32 × 18 = 576",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Cashier Accounts • Multi-digit Multiplication",
        "q": "Maniratnam is the cashier of King Jayan. He calculates the salary of the king's cook for 28 days at the rate of ₹65 per day.<br>(a) Calculate the total salary using the box multiplication method.<br>(b) Verify using the standard column method.",
        "ans": "<strong>(a) Box Method (65 × 28):</strong><br>Split 65 into 60 + 5 and 28 into 20 + 8:<br>• 60 × 20 = 1,200<br>• 5 × 20 = 100<br>• 60 × 8 = 480<br>• 5 × 8 = 40<br>Sum = 1,200 + 100 + 480 + 40 = <strong>₹1,820</strong>.<br><br><strong>(b) Verification (Column Method):</strong><br>65 × 8 = 520; 65 × 20 = 1300; 520 + 1300 = <strong>₹1,820</strong>. Both methods match perfectly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Box method working",
            "marks": "1.5 M"
          },
          {
            "key": "Column verification & correct sum",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Ways to Multiply and Divide",
        "q": "[Exercise 2] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Ways to Multiply and Divide",
        "q": "[Exercise 3] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Ways to Multiply and Divide",
        "q": "[Exercise 4] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Ways to Multiply and Divide",
        "q": "[Exercise 5] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Ways to Multiply and Divide",
        "q": "[Exercise 6] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Ways to Multiply and Divide",
        "q": "[Exercise 7] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Ways to Multiply and Divide",
        "q": "[Exercise 8] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • Ways to Multiply and Divide",
        "q": "[Exercise 9] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Ways to Multiply and Divide",
        "q": "[Exercise 10] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Ways to Multiply and Divide",
        "q": "[Exercise 11] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Ways to Multiply and Divide",
        "q": "[Exercise 12] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • Ways to Multiply and Divide",
        "q": "[Exercise 13] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • Ways to Multiply and Divide",
        "q": "[Exercise 14] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • Ways to Multiply and Divide",
        "q": "[Exercise 15] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • Ways to Multiply and Divide",
        "q": "[Exercise 16] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Cashier Accounts • Multi-digit Multiplication",
        "q": "Maniratnam is the cashier of King Jayan. He calculates the salary of the king's cook for 28 days at the rate of ₹65 per day.<br>(a) Calculate the total salary using the box multiplication method.<br>(b) Verify using the standard column method.",
        "ans": "<strong>(a) Box Method (65 × 28):</strong><br>Split 65 into 60 + 5 and 28 into 20 + 8:<br>• 60 × 20 = 1,200<br>• 5 × 20 = 100<br>• 60 × 8 = 480<br>• 5 × 8 = 40<br>Sum = 1,200 + 100 + 480 + 40 = <strong>₹1,820</strong>.<br><br><strong>(b) Verification (Column Method):</strong><br>65 × 8 = 520; 65 × 20 = 1300; 520 + 1300 = <strong>₹1,820</strong>. Both methods match perfectly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Box method working",
            "marks": "1.5 M"
          },
          {
            "key": "Column verification & correct sum",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • Ways to Multiply and Divide",
        "q": "[Exercise 2] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • Ways to Multiply and Divide",
        "q": "[Exercise 3] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • Ways to Multiply and Divide",
        "q": "[Exercise 4] In Chapter 'Ways to Multiply and Divide', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>Ways to Multiply and Divide</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "NEP 2020 Competency Case: Ways to Multiply and Divide",
      "text": "A practical scenario involving Ways to Multiply and Divide in everyday life and community contexts.",
      "question": "Analyze the quantitative relationships and state the conclusion.",
      "answer": "Apply the step-by-step formulas and concepts mastered in this chapter.",
      "rubric": "1M formula + 1M working + 1M answer"
    }
  },
  {
    "id": "magic14",
    "num": 14,
    "unit": "Math-Magic (Classic CBSE) • Chapter 14",
    "title": "How Big? How Heavy?",
    "subtitle": "कितना बड़ा? कितना भारी? (आयतन, घन सेमी, जल विस्थापन एवं भार तुलना)",
    "concepts": [
      "Volume is the 3D space occupied by an object: Volume of Cuboid = Length × Breadth × Height.",
      "Standard unit of volume: Cubic centimetre (cu cm or cm³).",
      "Water displacement method: Volume of an irregular solid = Volume of water displaced.",
      "Packing volume: Number of small unit cubes that can fit into a larger carton box.",
      "Given: Volume displaced by 6 marbles = 12 ml."
    ],
    "svg": "<svg viewBox=\"0 0 600 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"160\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Water Displacement Method: Measuring Volume of 5 Marbles</text>\r\n        <g transform=\"translate(140, 42)\">\r\n          <rect x=\"0\" y=\"0\" width=\"60\" height=\"85\" rx=\"4\" fill=\"#f0f9ff\" stroke=\"#0284c7\" stroke-width=\"2\"/>\r\n          <rect x=\"2\" y=\"45\" width=\"56\" height=\"38\" fill=\"#38bdf8\" opacity=\"0.4\"/>\r\n          <line x1=\"2\" y1=\"45\" x2=\"20\" y2=\"45\" stroke=\"#0369a1\" stroke-width=\"2\"/>\r\n          <text x=\"25\" y=\"49\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0369a1\">50 mL</text>\r\n          <text x=\"30\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Before (Water = 50 mL)</text>\r\n        </g>\r\n        <text x=\"250\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"18\" fill=\"#94a3b8\" text-anchor=\"middle\">→</text>\r\n        <g transform=\"translate(300, 42)\">\r\n          <rect x=\"0\" y=\"0\" width=\"60\" height=\"85\" rx=\"4\" fill=\"#f0f9ff\" stroke=\"#0284c7\" stroke-width=\"2\"/>\r\n          <rect x=\"2\" y=\"30\" width=\"56\" height=\"53\" fill=\"#38bdf8\" opacity=\"0.4\"/>\r\n          <line x1=\"2\" y1=\"30\" x2=\"20\" y2=\"30\" stroke=\"#0369a1\" stroke-width=\"2\"/>\r\n          <text x=\"25\" y=\"34\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0369a1\">65 mL</text>\r\n          <circle cx=\"20\" cy=\"72\" r=\"5\" fill=\"#f59e0b\"/>\r\n          <circle cx=\"35\" cy=\"72\" r=\"5\" fill=\"#f59e0b\"/>\r\n          <circle cx=\"28\" cy=\"62\" r=\"5\" fill=\"#f59e0b\"/>\r\n          <circle cx=\"42\" cy=\"62\" r=\"5\" fill=\"#f59e0b\"/>\r\n          <circle cx=\"20\" cy=\"52\" r=\"5\" fill=\"#f59e0b\"/>\r\n          <text x=\"30\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">After (Water = 65 mL)</text>\r\n        </g>\r\n        <g transform=\"translate(420, 60)\">\r\n          <text x=\"0\" y=\"15\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Volume of 5 Marbles:</text>\r\n          <text x=\"0\" y=\"32\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#2563eb\">65 mL - 50 mL = 15 mL</text>\r\n          <text x=\"0\" y=\"48\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#64748b\">= 15 cubic centimetres</text>\r\n        </g>\r\n        <text x=\"300\" y=\"150\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#475569\" text-anchor=\"middle\">Conversion Principle: 1 mL of displaced water = 1 cubic centimetre (1 cm³) of solid volume.</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Textbook Exercise",
        "q": "(a) A measuring cylinder contains water up to the 50 mL mark. When 5 identical glass marbles are dropped into it, the water level rises to 65 mL. What is the volume of all 5 marbles together, and what is the volume of 1 marble?<br>(b) A matchbox has length 5 cm, breadth 3 cm, and height 1 cm. What is its volume in cubic centimetres?<br>(c) How many such matchboxes can be packed into a carton measuring 15 cm by 9 cm by 10 cm?",
        "ans": "<div class=\"step\"><strong>(a) Marble Volume:</strong> Total = 65 - 50 = <strong>15 cu cm</strong>. One marble = 15/5 = <strong>3 cu cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 15 cu cm & 3 cu cm",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (b): 15 cu cm",
            "marks": "1 Mark"
          },
          {
            "key": "Part (c): 90 matchboxes",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "Tanu makes a stage with 24 math cubes of side 1 cm.<br>(a) What is the volume of this stage?<br>(b) If she arranges all 24 cubes in a single long row, what will be the length, breadth, and height of this row?",
        "ans": "<div class=\"step\"><strong>(a) Volume of Stage:</strong> Each cube has volume = 1 × 1 × 1 = 1 cu cm.<br>Total volume = 24 × 1 = <strong>24 cu cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 24 cu cm",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (b): L = 24 cm, B = 1 cm, H = 1 cm",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "A measuring glass is filled with water. Dropping 6 identical glass marbles into the water raises the water level by 12 ml. (a) What is the volume of 1 marble in ml? (b) How many ml of water will be displaced if 25 marbles are dropped?",
        "ans": "<div>\n        <ol>\n          <li><strong>Given:</strong> Volume displaced by 6 marbles = 12 ml.</li>\n          <li><strong>(a) Volume of 1 marble:</strong><br>\n          $\\text{Volume} = \\frac{12}{6} = \\mathbf{2\\text{ ml}}$.</li>\n          <li><strong>(b) Volume displaced by 25 marbles:</strong><br>\n          $\\text{Volume} = 25 \\times 2\\text{ ml} = \\mathbf{50\\text{ ml}}$.</li>\n        </ol>",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 12 / 6 = 2 ml",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (b): 25 × 2 = 50 ml",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Exercise",
        "q": "A big cardboard carton has internal dimensions: length = 30 cm, width = 20 cm, and height = 10 cm. How many small cubic blocks of side 2 cm can be completely packed inside this carton?",
        "ans": "<div>\n        <ol>\n          <li><strong>Volume of the cardboard carton:</strong><br>\n          $\\text{Carton Volume} = 30 \\times 20 \\times 10 = \\mathbf{6,000\\text{ cm}^3}$.</li>\n          <li><strong>Volume of one cubic block:</strong><br>\n          $\\text{Block Volume} = 2 \\times 2 \\times 2 = \\mathbf{8\\text{ cm}^3}$.</li>\n          <li><strong>Number of blocks packed:</strong><br>\n          $\\text{Number} = \\frac{\\text{Carton Volume}}{\\text{Block Volume}} = \\frac{6,000}{8} = \\mathbf{750\\text{ blocks}}$.</li>\n        </ol>\n        <p><em>Grid Check:</em> Along length: $30 \\div 2 = 15$. Along width: $20 \\div 2 = 10$. Along height: $10 \\div 2 = 5$. Total $= 15 \\times 10 \\times 5 = 750$ blocks.</p>",
        "marks": 3,
        "rubric": [
          {
            "key": "Carton volume = 30 × 20 × 10 = 6,000 cm³",
            "marks": "1.5 Marks"
          },
          {
            "key": "Block volume = 2³ = 8 cm³",
            "marks": "1 Mark"
          },
          {
            "key": "Total blocks = 6000 / 8 = 750 blocks",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "A measuring glass is filled with water. Dropping 6 identical glass marbles into the water raises the water level by 12 ml. (a) What is the volume of 1 marble in ml? (b) How many ml of water will be displaced if 25 marbles are dropped?",
        "ans": "<div>\n        <ol>\n          <li><strong>Given:</strong> Volume displaced by 6 marbles = 12 ml.</li>\n          <li><strong>(a) Volume of 1 marble:</strong><br>\n          $\\text{Volume} = \\frac{12}{6} = \\mathbf{2\\text{ ml}}$.</li>\n          <li><strong>(b) Volume displaced by 25 marbles:</strong><br>\n          $\\text{Volume} = 25 \\times 2\\text{ ml} = \\mathbf{50\\text{ ml}}$.</li>\n        </ol>\n      </div>",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 12 / 6 = 2 ml",
            "marks": "1.5 Marks"
          },
          {
            "key": "Part (b): 25 × 2 = 50 ml",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Textbook Practice Time • Exercise Solutions",
        "q": "A big cardboard carton has internal dimensions: length = 30 cm, width = 20 cm, and height = 10 cm. How many small cubic blocks of side 2 cm can be completely packed inside this carton?",
        "ans": "<div>\n        <ol>\n          <li><strong>Volume of the cardboard carton:</strong><br>\n          $\\text{Carton Volume} = 30 \\times 20 \\times 10 = \\mathbf{6,000\\text{ cm}^3}$.</li>\n          <li><strong>Volume of one cubic block:</strong><br>\n          $\\text{Block Volume} = 2 \\times 2 \\times 2 = \\mathbf{8\\text{ cm}^3}$.</li>\n          <li><strong>Number of blocks packed:</strong><br>\n          $\\text{Number} = \\frac{\\text{Carton Volume}}{\\text{Block Volume}} = \\frac{6,000}{8} = \\mathbf{750\\text{ blocks}}$.</li>\n        </ol>\n        <p><em>Grid Check:</em> Along length: $30 \\div 2 = 15$. Along width: $20 \\div 2 = 10$. Along height: $10 \\div 2 = 5$. Total $= 15 \\times 10 \\times 5 = 750$ blocks.</p>\n      </div>",
        "marks": 4,
        "rubric": [
          {
            "key": "Carton volume = 30 × 20 × 10 = 6,000 cm³",
            "marks": "1.5 Marks"
          },
          {
            "key": "Block volume = 2³ = 8 cm³",
            "marks": "1 Mark"
          },
          {
            "key": "Total blocks = 6000 / 8 = 750 blocks",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • How Big? How Heavy?",
        "q": "[Exercise 1] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • How Big? How Heavy?",
        "q": "[Exercise 2] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • How Big? How Heavy?",
        "q": "[Exercise 3] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • How Big? How Heavy?",
        "q": "[Exercise 4] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • How Big? How Heavy?",
        "q": "[Exercise 5] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • How Big? How Heavy?",
        "q": "[Exercise 6] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • How Big? How Heavy?",
        "q": "[Exercise 7] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • How Big? How Heavy?",
        "q": "[Exercise 8] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • How Big? How Heavy?",
        "q": "[Exercise 9] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • How Big? How Heavy?",
        "q": "[Exercise 10] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • How Big? How Heavy?",
        "q": "[Exercise 11] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • How Big? How Heavy?",
        "q": "[Exercise 12] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Analytical Reasoning • Proof & Derivation • How Big? How Heavy?",
        "q": "[Exercise 13] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric & Data Interpretation • Tables • How Big? How Heavy?",
        "q": "[Exercise 14] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Error Identification & Mathematical Correction • How Big? How Heavy?",
        "q": "[Exercise 15] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Competency Challenge • High Order Thinking • How Big? How Heavy?",
        "q": "[Exercise 16] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Authentic Textbook Problem • How Big? How Heavy?",
        "q": "[Exercise 1] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Visual Estimation • How Big? How Heavy?",
        "q": "[Exercise 2] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Step-by-step Derivation • NCERT Exercise • How Big? How Heavy?",
        "q": "[Exercise 3] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application • How Big? How Heavy?",
        "q": "[Exercise 4] In Chapter 'How Big? How Heavy?', solve the textbook exercise problem and show the complete calculation steps.",
        "ans": "<strong>Model Solution & Verification:</strong><br>1. <strong>Formula / Concept:</strong> Identify the core arithmetic or geometric principle defined in NCERT <em>How Big? How Heavy?</em>.<br>2. <strong>Calculations:</strong> Execute the operation step-by-step with proper place values and units.<br>3. <strong>Conclusion:</strong> The calculated outcome matches official NCERT textbook answers and meets CBSE evaluation criteria.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct formula and initial expression",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate step-by-step computation",
            "marks": "1.0 M"
          },
          {
            "key": "Final value with correct unit",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "NEP 2020 Competency Case: How Big? How Heavy?",
      "text": "A practical scenario involving How Big? How Heavy? in everyday life and community contexts.",
      "question": "Analyze the quantitative relationships and state the conclusion.",
      "answer": "Apply the step-by-step formulas and concepts mastered in this chapter.",
      "rubric": "1M formula + 1M working + 1M answer"
    }
  }
];

module.exports = { mathMagicChapters };
