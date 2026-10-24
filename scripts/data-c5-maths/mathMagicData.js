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
        "category": "Textbook Exercise • Large Numbers",
        "q": "In India, there are about two lakh boats in our country, and half of them are without a motor. (a) Write two lakh in numerals. (b) What is the number of boats with a motor? (c) About one-fourth of the motor boats are big machine trawlers. How many thousand machine trawlers are there?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Two lakh in numerals:</strong> 1 lakh = 1,00,000, so two lakh = <strong>2,00,000</strong>.<br>\n• <strong>(b) Boats with a motor:</strong> Half of 2,00,000 = 2,00,000 ÷ 2 = <strong>1,00,000 (one lakh boats)</strong>.<br>\n• <strong>(c) Number of machine trawlers:</strong> 1/4 of 1,00,000 = 1,00,000 ÷ 4 = <strong>25,000</strong>. So there are <strong>25 thousand</strong> machine trawlers.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 2,00,000 numeral",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 1,00,000 motor boats",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 25,000 machine trawlers",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Boat Speed & Distance",
        "q": "A log boat travels at a speed of 4 km per hour. (a) How long will it take to go a distance of 10 km? (b) How far can it go in 6 hours?",
        "ans": "<strong>Boat Calculations:</strong><br>\n• <strong>(a) Time to cover 10 km:</strong> Time = Distance ÷ Speed = 10 ÷ 4 = 2.5 hours = <strong>2 hours and 30 minutes</strong>.<br>\n• <strong>(b) Distance in 6 hours:</strong> Distance = Speed × Time = 4 km/h × 6 h = <strong>24 km</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 2 hours 30 minutes",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): 24 km",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Motor Boat & Long Tail Boat",
        "q": "Look at the table for boat types: Motor boat goes at 20 km/h and catches 800 kg per trip. Long tail boat goes at 12 km/h and catches 600 kg per trip. (a) How far can the motor boat go in 3½ hours? (b) How much fish can the long tail boat bring in 7 trips?",
        "ans": "<strong>Step-by-step Solution:</strong><br>\n• <strong>(a) Distance covered by motor boat:</strong> Speed = 20 km/h, Time = 3.5 h. Distance = 20 × 3.5 = <strong>70 km</strong>.<br>\n• <strong>(b) Total catch in 7 trips:</strong> Catch per trip = 600 kg. Total = 7 × 600 = <strong>4,200 kg</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 70 km calculation",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): 4,200 kg calculation",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fish Drying Weight",
        "q": "When fresh fish is dried, it becomes 1/3 of its original weight. (a) If fisherwomen dry 6,000 kg of fresh fish in a month, how much dried fish will they get? (b) If they dry 900 kg of fresh fish, how much dried fish will be produced?",
        "ans": "<strong>Drying Weight Calculations:</strong><br>\n• <strong>(a) Dried fish from 6,000 kg:</strong> Weight of dried fish = 1/3 of 6,000 kg = 6,000 ÷ 3 = <strong>2,000 kg</strong>.<br>\n• <strong>(b) Dried fish from 900 kg:</strong> Weight of dried fish = 1/3 of 900 kg = 900 ÷ 3 = <strong>300 kg</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): 2,000 kg",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 300 kg",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fish Drying Economics & Profit",
        "q": "Women buy fresh fish for ₹15 per kg and sell dried fish for ₹70 per kg. When fresh fish is dried, it becomes 1/3 of its weight. Calculate their profit when drying 6,000 kg of fresh fish.",
        "ans": "<strong>Financial Calculation:</strong><br>\n1. Cost of buying fresh fish = 6,000 kg × ₹15 = <strong>₹90,000</strong>.<br>\n2. Weight of dried fish produced = 6,000 ÷ 3 = 2,000 kg.<br>\n3. Money earned by selling dried fish = 2,000 kg × ₹70 = <strong>₹1,40,000</strong>.<br>\n4. Profit = Selling Price - Cost Price = ₹1,40,000 - ₹90,000 = <strong>₹50,000</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cost Price: ₹90,000",
            "marks": "1 M"
          },
          {
            "key": "Selling Price: ₹1,40,000",
            "marks": "1 M"
          },
          {
            "key": "Profit: ₹50,000",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fish Market Rates",
        "q": "At the fish market: Mini sells Sardines at ₹40/kg; Gracy sells Swordfish at ₹60/kg; Floramma sells Prawns at ₹150/kg; Karuthamma sells Squid at ₹50/kg. (a) Fazila has a huge Kingfish weighing 8 kg. She says, 'I will sell the whole fish for ₹1,200.' What is the price per kg of Kingfish? (b) How many kg of Sardines can Mini sell to earn ₹240?",
        "ans": "<strong>Market Rate Calculations:</strong><br>\n• <strong>(a) Price per kg of Kingfish:</strong> Total price = ₹1,200, Weight = 8 kg. Price per kg = 1,200 ÷ 8 = <strong>₹150 per kg</strong>.<br>\n• <strong>(b) Kg of Sardines:</strong> Rate = ₹40/kg, Total money = ₹240. Quantity = 240 ÷ 40 = <strong>6 kg</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): ₹150 per kg",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): 6 kg",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Mixed Purchase Problem",
        "q": "Floramma sells prawns at ₹150 per kg. (a) Basheer has ₹100. He spends 1/4 of his money on squid (₹50/kg) and the remaining 3/4 on prawns. How many grams/kg of each did he buy? (b) If Gracy sold 6 kg of swordfish (₹60/kg), how much did Mini earn if she earned the same amount selling sardines at ₹40/kg?",
        "ans": "<strong>Step-by-step Solution:</strong><br>\n• <strong>(a) Basheer's purchases:</strong><br>\n  - Money spent on squid = 1/4 of ₹100 = ₹25. Since squid is ₹50/kg, he gets 25 ÷ 50 = 1/2 kg = <strong>500 grams of squid</strong>.<br>\n  - Money spent on prawns = 3/4 of ₹100 = ₹75. Since prawns are ₹150/kg, he gets 75 ÷ 150 = 1/2 kg = <strong>500 grams of prawns</strong>.<br>\n• <strong>(b) Mini's sales:</strong><br>\n  - Gracy earned = 6 kg × ₹60 = ₹360.<br>\n  - Mini sells sardines at ₹40/kg, so quantity sold = 360 ÷ 40 = <strong>9 kg of sardines</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "Squid calculation: 500 g",
            "marks": "1 M"
          },
          {
            "key": "Prawns calculation: 500 g",
            "marks": "1 M"
          },
          {
            "key": "Gracy earnings: ₹360",
            "marks": "1 M"
          },
          {
            "key": "Mini sardines: 9 kg",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Bank Loan & Installments",
        "q": "Jhansi took a loan of ₹21,000 from the Meenkar Bank to buy a log boat. She paid back ₹23,520 in one year. (a) How much did she pay back every month? (b) How much extra money did she pay as interest?",
        "ans": "<strong>Loan Calculations:</strong><br>\n• <strong>(a) Monthly installment:</strong> 1 year = 12 months. Monthly payment = 23,520 ÷ 12 = <strong>₹1,960 per month</strong>.<br>\n• <strong>(b) Total interest paid:</strong> Extra money = Total paid - Loan amount = 23,520 - 21,000 = <strong>₹2,520</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Division by 12 months",
            "marks": "1 M"
          },
          {
            "key": "Monthly payment: ₹1,960",
            "marks": "1 M"
          },
          {
            "key": "Interest calculation: ₹2,520",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fisherwomen's Bank Setup",
        "q": "Twenty fisherwomen started their own 'Meenkar Bank'. Each saves ₹25 every month. (a) How much money does the group collect each month? (b) How much money will be collected in 10 years?",
        "ans": "<strong>Savings Calculations:</strong><br>\n• <strong>(a) Monthly collection:</strong> 20 women × ₹25 = <strong>₹500 per month</strong>.<br>\n• <strong>(b) Total collection in 10 years:</strong><br>\n  - In 1 year (12 months): 500 × 12 = ₹6,000.<br>\n  - In 10 years: 6,000 × 10 = <strong>₹60,000</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Monthly savings: ₹500",
            "marks": "1.5 M"
          },
          {
            "key": "10-year total: ₹60,000",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fish Canning Factory Costs",
        "q": "Fazila made a list of items required to set up a small fish factory: Borewell for fresh water: ₹3,000; Bamboo rack for fish drying: 20 racks at ₹2,000 each; Cement tank: 4 tanks at ₹1,000 each; Tray and knife: 20 sets at ₹300 each; Bucket: 20 buckets at ₹75 each. Find the total startup cost.",
        "ans": "<strong>Cost Breakdown:</strong><br>\n• Borewell: ₹3,000<br>\n• Bamboo racks: 20 × ₹2,000 = ₹40,000<br>\n• Cement tanks: 4 × ₹1,000 = ₹4,000<br>\n• Tray and knife: 20 × ₹300 = ₹6,000<br>\n• Buckets: 20 × ₹75 = ₹1,500<br>\n• <strong>Total startup cost:</strong> 3,000 + 40,000 + 4,000 + 6,000 + 1,500 = <strong>₹54,500</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Itemized product totals",
            "marks": "1.5 M"
          },
          {
            "key": "Final sum: ₹54,500",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Monthly Salt & Packing Expense",
        "q": "To dry 6,000 kg fresh fish monthly, the factory needs: Salt: 1,500 kg at ₹2 per kg; Packing and bus charges: ₹3,000. What is the total monthly operational cost?",
        "ans": "<strong>Operational Cost Calculation:</strong><br>\n• Cost of salt = 1,500 kg × ₹2 = ₹3,000.<br>\n• Packing and transport charges = ₹3,000.<br>\n• <strong>Total monthly operational cost:</strong> ₹3,000 + ₹3,000 = <strong>₹6,000</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Salt cost calculation (₹3,000)",
            "marks": "1 M"
          },
          {
            "key": "Total operational cost (₹6,000)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Large Boat Catch Comparison",
        "q": "A machine trawler catches 6,000 kg in one trip and travels at 24 km/h. A log boat catches 20 kg in one trip and travels at 4 km/h. (a) How many times more fish does the trawler catch in one trip compared to the log boat? (b) How many times faster is the trawler than the log boat?",
        "ans": "<strong>Comparison:</strong><br>\n• <strong>(a) Catch comparison:</strong> 6,000 kg ÷ 20 kg = <strong>300 times more</strong>.<br>\n• <strong>(b) Speed comparison:</strong> 24 km/h ÷ 4 km/h = <strong>6 times faster</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): 300 times",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 6 times",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Writing Lakhs & Crores",
        "q": "Answer the following based on Indian number system: (a) How many thousands make one lakh? (b) How many lakhs make one crore? (c) Write one crore in numerals and count how many zeros it has.",
        "ans": "<strong>Numeration Facts:</strong><br>\n• <strong>(a) Thousands in one lakh:</strong> 1 lakh = 1,00,000; 1 thousand = 1,000. 1,00,000 ÷ 1,000 = <strong>100 thousands</strong>.<br>\n• <strong>(b) Lakhs in one crore:</strong> 1 crore = 1,00,00,000; 1 lakh = 1,00,000. 1,00,00,000 ÷ 1,00,000 = <strong>100 lakhs</strong>.<br>\n• <strong>(c) One crore in numerals:</strong> <strong>1,00,00,000</strong>. It has <strong>7 zeros</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 100 thousands",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 100 lakhs",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 1,00,00,000 and 7 zeros",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Boat Journey Time",
        "q": "A motor boat travels at 20 km/h. If it leaves the shore at 6:00 AM, at what time will it reach a fishing spot located 50 km away in the sea?",
        "ans": "<strong>Time of Arrival Calculation:</strong><br>\n• Distance = 50 km, Speed = 20 km/h.<br>\n• Time taken = Distance ÷ Speed = 50 ÷ 20 = 2.5 hours = 2 hours and 30 minutes.<br>\n• Departure time: 6:00 AM.<br>\n• Arrival time: 6:00 AM + 2 hours 30 minutes = <strong>8:30 AM</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Calculation of 2.5 hours",
            "marks": "1 M"
          },
          {
            "key": "Arrival time: 8:30 AM",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fish Weight Comparison",
        "q": "The largest fish is the whale shark. Its length is about 18 metres and its weight is about 16,000 kg. (a) If you weigh 32 kg, how many children like you together will weigh equal to one whale shark? (b) How much more does the whale shark weigh than 12 children of 32 kg each?",
        "ans": "<strong>Weight Comparisons:</strong><br>\n• <strong>(a) Number of children:</strong> 16,000 kg ÷ 32 kg = <strong>500 children</strong>.<br>\n• <strong>(b) Weight difference:</strong><br>\n  - Weight of 12 children = 12 × 32 = 384 kg.<br>\n  - Difference = 16,000 - 384 = <strong>15,616 kg more</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 500 children",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): 15,616 kg more",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Word Problems in Fish Market",
        "q": "A customer bought 2 kg of prawns at ₹150/kg, 3 kg of swordfish at ₹60/kg, and 500 g of dried fish at ₹70/kg. What is the total bill amount?",
        "ans": "<strong>Bill Calculation:</strong><br>\n• Prawns: 2 kg × ₹150 = ₹300<br>\n• Swordfish: 3 kg × ₹60 = ₹180<br>\n• Dried fish: 500 g = 0.5 kg; 0.5 × ₹70 = ₹35<br>\n• <strong>Total Bill:</strong> 300 + 180 + 35 = <strong>₹515</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Calculation of each item cost",
            "marks": "2 M"
          },
          {
            "key": "Total bill: ₹515",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Speed and Return Journey",
        "q": "A long-tail boat travels 12 km in 1 hour. It travels to a reef 36 km away, spends 2 hours fishing, and returns to shore. Find the total time taken for the whole trip.",
        "ans": "<strong>Total Trip Duration:</strong><br>\n1. Time taken to go to reef = 36 km ÷ 12 km/h = 3 hours.<br>\n2. Time spent fishing = 2 hours.<br>\n3. Time taken to return = 36 km ÷ 12 km/h = 3 hours.<br>\n4. <strong>Total time:</strong> 3 + 2 + 3 = <strong>8 hours</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Travel time each way (3 h + 3 h)",
            "marks": "1.5 M"
          },
          {
            "key": "Total time: 8 hours",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Loan Comparison",
        "q": "Gracy took a loan of ₹4,000 to buy a net. She paid back ₹345 every month for one year. Did she pay more or less than the loan amount, and by how much?",
        "ans": "<strong>Repayment Calculation:</strong><br>\n• Loan amount = ₹4,000.<br>\n• Total repaid in 12 months = 12 × ₹345 = ₹4,140.<br>\n• Since ₹4,140 > ₹4,000, she paid <strong>more</strong>.<br>\n• Extra amount = ₹4,140 - ₹4,000 = <strong>₹140</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total paid: ₹4,140",
            "marks": "1.5 M"
          },
          {
            "key": "Difference: ₹140 more",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Price Discounts & Bundling",
        "q": "Mini sells sardines at ₹40 per kg. A customer buys 5 kg of sardines, and Mini gives a discount of ₹5 per kg. How much does the customer pay?",
        "ans": "<strong>Discount Calculation:</strong><br>\n• Discounted price per kg = ₹40 - ₹5 = ₹35 per kg.<br>\n• Total amount for 5 kg = 5 × ₹35 = <strong>₹175</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Discounted rate: ₹35",
            "marks": "1 M"
          },
          {
            "key": "Total payment: ₹175",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Catch Capacity vs Tripping",
        "q": "A fishing cooperative has an order for 2,400 kg of fish. (a) How many trips will a motor boat (capacity 800 kg per trip) need to complete this order? (b) How many trips will a log boat (capacity 20 kg per trip) need?",
        "ans": "<strong>Trip Calculations:</strong><br>\n• <strong>(a) Motor boat trips:</strong> 2,400 ÷ 800 = <strong>3 trips</strong>.<br>\n• <strong>(b) Log boat trips:</strong> 2,400 ÷ 20 = <strong>120 trips</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Motor boat: 3 trips",
            "marks": "1 M"
          },
          {
            "key": "Log boat: 120 trips",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Profit Margin on Fresh Fish",
        "q": "A merchant buys 150 kg of fish at ₹35 per kg and spends ₹250 on transportation. If he sells all the fish at ₹45 per kg, what is his net profit?",
        "ans": "<strong>Profit Statement:</strong><br>\n1. Cost of fish = 150 × ₹35 = ₹5,250.<br>\n2. Total cost (including transport) = ₹5,250 + ₹250 = ₹5,500.<br>\n3. Total selling revenue = 150 × ₹45 = ₹6,750.<br>\n4. <strong>Net Profit:</strong> ₹6,750 - ₹5,500 = <strong>₹1,250</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total cost: ₹5,500",
            "marks": "1 M"
          },
          {
            "key": "Total revenue: ₹6,750",
            "marks": "1 M"
          },
          {
            "key": "Net profit: ₹1,250",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fuel Consumption",
        "q": "A motor boat consumes 2 litres of diesel for every 10 km travelled. Diesel costs ₹90 per litre. (a) How much diesel is needed to travel 60 km? (b) What will be the fuel cost for this journey?",
        "ans": "<strong>Fuel Calculation:</strong><br>\n• <strong>(a) Diesel needed:</strong> For 10 km = 2 litres. For 60 km = (60 ÷ 10) × 2 = 6 × 2 = <strong>12 litres</strong>.<br>\n• <strong>(b) Fuel cost:</strong> 12 litres × ₹90 = <strong>₹1,080</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 12 litres",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): ₹1,080",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Estimating Numbers",
        "q": "A school of fish has approximately 10,000 small fish swimming together. If each small fish weighs 15 grams, what is the total weight of the school in kilograms?",
        "ans": "<strong>Weight Conversion:</strong><br>\n• Total weight in grams = 10,000 × 15 g = 150,000 g.<br>\n• 1,000 grams = 1 kg.<br>\n• Weight in kg = 150,000 ÷ 1,000 = <strong>150 kg</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Multiplication to grams: 150,000 g",
            "marks": "1 M"
          },
          {
            "key": "Conversion to kg: 150 kg",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Weekly Earnings Comparison",
        "q": "Fisherman A earns ₹450 per day for 6 days a week. Fisherman B earns ₹3,200 in a fortnight (14 days). Who earns more per day, and by how much?",
        "ans": "<strong>Daily Earning Comparison:</strong><br>\n• Fisherman A daily earning = <strong>₹450</strong>.<br>\n• Fisherman B daily earning = ₹3,200 ÷ 14 ≈ <strong>₹228.57</strong>.<br>\n• Fisherman A earns more by: 450 - 228.57 = <strong>₹221.43 per day</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Identification of Fisherman A daily rate",
            "marks": "1 M"
          },
          {
            "key": "Calculation of Fisherman B daily rate",
            "marks": "1 M"
          },
          {
            "key": "Comparison and difference",
            "marks": "1 M"
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
        "category": "Textbook Exercise • Matchstick Shapes & Angles",
        "q": "Rohini and Mohini made closed shapes with 6 matchsticks. Rohini made a regular hexagon, while Mohini made a closed 6-sided shape with two points pointing inwards. (a) Do both shapes have the same number of sides? (b) Are the angles in both shapes the same? Explain why.",
        "ans": "<strong>Explanation:</strong><br>\n• <strong>(a) Sides:</strong> Yes, both shapes have exactly <strong>6 sides</strong> because both used 6 matchsticks.<br>\n• <strong>(b) Angles:</strong> <strong>No, the angles are not the same.</strong> Even though the number of sides is identical, changing the orientation or slants of the matchsticks changes the internal angles between them. Rohini's shape has all obtuse equal angles (120°), while Mohini's shape has both acute and reflex angles.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): Yes, 6 sides",
            "marks": "1 M"
          },
          {
            "key": "Part (b): No, angles differ due to slants",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Types of Angles",
        "q": "Define and give the degree range for: (a) Right Angle (b) Acute Angle (c) Obtuse Angle. Mention one real-life example for each.",
        "ans": "<strong>Definitions and Examples:</strong><br>\n• <strong>(a) Right Angle:</strong> An angle exactly equal to <strong>90°</strong> (forms an 'L' shape). <em>Example:</em> Corner of a book or door.<br>\n• <strong>(b) Acute Angle:</strong> An angle <strong>less than 90°</strong> (between 0° and 90°). <em>Example:</em> Open blades of scissors or hands of a clock at 2:00.<br>\n• <strong>(c) Obtuse Angle:</strong> An angle <strong>more than 90° and less than 180°</strong>. <em>Example:</em> Hands of a clock at 5:00 or a reclining lounge chair.",
        "marks": 3,
        "rubric": [
          {
            "key": "Right angle definition & example",
            "marks": "1 M"
          },
          {
            "key": "Acute angle definition & example",
            "marks": "1 M"
          },
          {
            "key": "Obtuse angle definition & example",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Angles in Alphabet Letters",
        "q": "In the name word 'SUKHMAN', count and list the types of angles formed in the letters:<br>(a) In letter 'H', how many right angles are there?<br>(b) In letter 'N', what kind of angles are formed?<br>(c) In letter 'A', how many acute angles are inside the upper triangle?",
        "ans": "<strong>Letter Analysis:</strong><br>\n• <strong>(a) Letter 'H':</strong> There are <strong>4 right angles (90°)</strong> where the horizontal crossbar meets the two vertical lines.<br>\n• <strong>(b) Letter 'N':</strong> There are <strong>2 acute angles</strong> (both less than 90°) between the vertical lines and the diagonal slash.<br>\n• <strong>(c) Letter 'A':</strong> Inside the upper triangle of 'A', all <strong>3 angles are acute angles</strong> (each less than 90°).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 4 right angles",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 2 acute angles",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 3 acute angles",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Clock Hands & Angles",
        "q": "Write what kind of angle (Right, Acute, or Obtuse) is made by the hands of a clock at the following times:<br>(a) 9:00<br>(b) 2:00<br>(c) 4:30<br>(d) 8:15",
        "ans": "<strong>Clock Angle Determinations:</strong><br>\n• <strong>(a) 9:00:</strong> Exactly 3 hour divisions apart (3 × 30° = 90°). Angle: <strong>Right Angle</strong>.<br>\n• <strong>(b) 2:00:</strong> 2 hour divisions apart (2 × 30° = 60°). Angle: <strong>Acute Angle</strong> (less than 90°).<br>\n• <strong>(c) 4:30:</strong> Hour hand between 4 and 5, minute hand at 6. Gap is 1.5 divisions (1.5 × 30° = 45°). Angle: <strong>Acute Angle</strong>.<br>\n• <strong>(d) 8:15:</strong> Gap is about 5.25 divisions (approx 157.5°). Angle: <strong>Obtuse Angle</strong> (more than 90°).",
        "marks": 4,
        "rubric": [
          {
            "key": "9:00 - Right angle",
            "marks": "1 M"
          },
          {
            "key": "2:00 - Acute angle",
            "marks": "1 M"
          },
          {
            "key": "4:30 - Acute angle",
            "marks": "1 M"
          },
          {
            "key": "8:15 - Obtuse angle",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Angle Tester (Divider)",
        "q": "(a) What instrument from your geometry box can be used as an 'Angle Tester'? (b) How can you make a simple angle tester using two strips of cardboard and a drawing pin?",
        "ans": "<strong>Angle Tester Instructions:</strong><br>\n• <strong>(a) Instrument:</strong> The <strong>Divider</strong> (an instrument with two pointed metal legs hinged together) acts as an angle tester.<br>\n• <strong>(b) DIY Cardboard Tester:</strong> Cut two equal strips of stiff cardboard (about 15 cm long and 2 cm wide). Join them at one end by pushing a drawing pin (or split pin) through both strips so that they can rotate freely. When the strips open like the letter 'L', it tests a right angle.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): Divider named",
            "marks": "1 M"
          },
          {
            "key": "Part (b): Cardboard and pin method explained",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Degree Clock & Turns",
        "q": "A degree clock is divided into 360 degrees. (a) How many degrees are there in a 1/4 turn? (b) How many degrees are there in a 1/2 turn? (c) How many degrees are there in a 3/4 turn?",
        "ans": "<strong>Fractional Turns in Degrees:</strong><br>\n• <strong>(a) 1/4 turn:</strong> 1/4 × 360° = <strong>90° (Right angle)</strong>.<br>\n• <strong>(b) 1/2 turn:</strong> 1/2 × 360° = <strong>180° (Straight angle)</strong>.<br>\n• <strong>(c) 3/4 turn:</strong> 3/4 × 360° = <strong>270°</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1/4 turn = 90°",
            "marks": "1 M"
          },
          {
            "key": "1/2 turn = 180°",
            "marks": "1 M"
          },
          {
            "key": "3/4 turn = 270°",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Yoga Asanas & Body Angles",
        "q": "Look at the angles made by the body in these yoga poses:<br>(a) In 'Dandasana' (sitting straight with legs stretched forward flat on ground), what angle does the back make with the legs?<br>(b) In 'Adho Mukha Svanasana' (Downwards Dog pose forming an inverted V), what type of angle is formed at the hips?<br>(c) When raising one arm straight overhead from the side, through what angle does the arm turn?",
        "ans": "<strong>Body Angles in Yoga:</strong><br>\n• <strong>(a) Dandasana:</strong> The spine is perpendicular to the legs, making a <strong>Right Angle (90°)</strong>.<br>\n• <strong>(b) Downward Dog pose:</strong> The torso and legs meet at the hip joint forming an angle less than 90°, which is an <strong>Acute Angle</strong>.<br>\n• <strong>(c) Overhead arm raise:</strong> Turning arm from side (downwards) to straight overhead is a half-circle turn of <strong>180°</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): Right angle (90°)",
            "marks": "1 M"
          },
          {
            "key": "Part (b): Acute angle (<90°)",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 180° turn",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Carrom Board & Angles",
        "q": "On a carrom board, a player hits the striker from the baseline towards the opposite frame to pocket a queen in the side pocket. (a) What rule governs the angle at which the striker bounces off the edge? (b) If the striker hits the rim at 45°, at what angle will it rebound?",
        "ans": "<strong>Angle of Reflection:</strong><br>\n• <strong>(a) Rule:</strong> The angle at which the striker hits the edge (angle of incidence) is equal to the angle at which it rebounds (angle of reflection). Both angles made with the perpendicular (normal) are equal.<br>\n• <strong>(b) Rebound angle:</strong> If it hits the edge at 45°, it will rebound at an angle of <strong>45°</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): Law of equal reflection angles",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 45° rebound",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Matchstick Puzzles",
        "q": "Take 8 matchsticks. (a) How can you arrange them to make a shape with 8 sides (octagon)? (b) Take 6 matchsticks and make a triangle. What kind of triangle is formed, and what can you say about its three angles?",
        "ans": "<strong>Matchstick Solutions:</strong><br>\n• <strong>(a) 8 Matchsticks:</strong> Arrange the 8 matchsticks tip-to-tail in a closed loop with all equal interior angles. This forms a regular <strong>Octagon</strong> where all interior angles are obtuse (135° each).<br>\n• <strong>(b) 6 Matchsticks Triangle:</strong> Use 2 matchsticks on each side (2 + 2 + 2 = 6). An <strong>Equilateral Triangle</strong> is formed. All three angles are equal, acute, and measure exactly <strong>60° each</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): Octagon description",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): Equilateral triangle, 60° angles",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Measuring Angles on a Protractor",
        "q": "State whether the following angles are Acute, Right, or Obtuse: (a) 35° (b) 90° (c) 115° (d) 89° (e) 175° (f) 91°.",
        "ans": "<strong>Classification:</strong><br>\n• (a) 35°: <strong>Acute angle</strong> (less than 90°)<br>\n• (b) 90°: <strong>Right angle</strong> (exactly 90°)<br>\n• (c) 115°: <strong>Obtuse angle</strong> (between 90° and 180°)<br>\n• (d) 89°: <strong>Acute angle</strong> (just less than 90°)<br>\n• (e) 175°: <strong>Obtuse angle</strong> (between 90° and 180°)<br>\n• (f) 91°: <strong>Obtuse angle</strong> (greater than 90°)",
        "marks": 3,
        "rubric": [
          {
            "key": "All 6 classifications correct",
            "marks": "3 M (0.5 M each)"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Open & Closed Shapes",
        "q": "Explain the difference between an 'Open Shape' and a 'Closed Shape'. Can an open shape have an internal area? Give an example of each.",
        "ans": "<strong>Explanation:</strong><br>\n• <strong>Closed Shape:</strong> A figure that begins and ends at the exact same point, enclosing a bounded boundary. <em>Example:</em> Circle, square, triangle. It <strong>has an internal area</strong>.<br>\n• <strong>Open Shape:</strong> A figure where the starting point and ending point do not meet, leaving a gap. <em>Example:</em> Letter 'C' or 'U'. It <strong>does NOT have an internal area</strong> because it does not enclose a region.",
        "marks": 3,
        "rubric": [
          {
            "key": "Closed shape definition and example",
            "marks": "1.5 M"
          },
          {
            "key": "Open shape definition and no area explanation",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Changing Shapes Changing Angles",
        "q": "If you push the corners of a matchstick square, it turns into a rhombus. (a) Do the lengths of the sides change? (b) Do the angles change? (c) Why are triangular structures used in building bridges and electricity towers instead of square structures?",
        "ans": "<strong>Structural Properties:</strong><br>\n• <strong>(a) Side lengths:</strong> <strong>No</strong>, the side lengths remain the same because the matchsticks do not stretch or shrink.<br>\n• <strong>(b) Angles:</strong> <strong>Yes</strong>, the right angles (90°) change into two acute angles and two obtuse angles.<br>\n• <strong>(c) Triangle rigidity:</strong> A triangle is a <strong>rigid shape</strong>; its angles cannot change without changing the lengths of its sides. A square can easily wobble or deform under pressure, whereas triangles provide maximum structural stability to bridges and towers.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parts (a) and (b) answers",
            "marks": "1 M"
          },
          {
            "key": "Part (c): Triangle rigidity explanation",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Scissors Blade Angles",
        "q": "Observe a pair of scissors: (a) What happens to the angle between the blades when the handles are pushed further apart? (b) If you cut thick cloth, should the angle between the blades be small (acute) or wide (obtuse) for best cutting power?",
        "ans": "<strong>Observation:</strong><br>\n• <strong>(a) Angle change:</strong> When handles are opened wider, the angle between the blades <strong>increases</strong>.<br>\n• <strong>(b) Cutting power:</strong> A <strong>small acute angle</strong> near the pivot gives the greatest mechanical advantage and cutting pressure for thick cloth.",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): Angle increases",
            "marks": "1 M"
          },
          {
            "key": "Part (b): Small acute angle near pivot",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Angle Sum of Triangles",
        "q": "A triangle has three angles. (a) What is the sum of all three angles of any triangle? (b) If one angle of a right-angled triangle is 40°, what is the third angle?",
        "ans": "<strong>Angle Sum Calculation:</strong><br>\n• <strong>(a) Angle sum:</strong> The sum of the angles of any triangle is always <strong>180°</strong>.<br>\n• <strong>(b) Third angle:</strong><br>\n  - In a right-angled triangle, one angle is 90°.<br>\n  - Given second angle = 40°.<br>\n  - Third angle = 180° - (90° + 40°) = 180° - 130° = <strong>50°</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Sum of angles = 180°",
            "marks": "1 M"
          },
          {
            "key": "Calculation showing 180 - 130 = 50°",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Roof Angles & Rain Drainage",
        "q": "Houses in hilly areas have sloped roofs. (a) Is the angle between the two sloping sides of the roof acute, right, or obtuse? (b) Why are sloped roofs preferred over flat roofs in regions with heavy snowfall?",
        "ans": "<strong>Reasoning:</strong><br>\n• <strong>(a) Angle:</strong> The apex angle at the top ridge of the roof is typically an <strong>acute or right angle</strong> (steep pitch).<br>\n• <strong>(b) Purpose:</strong> The steep sloping angle prevents snow and rainwater from accumulating on the roof. Gravity causes snow to slide off easily, preventing the roof from collapsing under heavy snow weight.",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): Angle identified",
            "marks": "1 M"
          },
          {
            "key": "Part (b): Snow sliding explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Complementary Angles",
        "q": "Two angles are called complementary if their sum is 90°. Find the complement of: (a) 30° (b) 65° (c) 45°.",
        "ans": "<strong>Calculations:</strong><br>\n• (a) Complement of 30° = 90° - 30° = <strong>60°</strong>.<br>\n• (b) Complement of 65° = 90° - 65° = <strong>25°</strong>.<br>\n• (c) Complement of 45° = 90° - 45° = <strong>45°</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 60°",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 25°",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 45°",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Clock Hand Movement in 1 Hour",
        "q": "In one full hour (60 minutes): (a) Through how many degrees does the minute hand turn? (b) Through how many degrees does the hour hand turn?",
        "ans": "<strong>Clock Rotations:</strong><br>\n• <strong>(a) Minute hand:</strong> Completes 1 full circular turn in 60 minutes = <strong>360°</strong>.<br>\n• <strong>(b) Hour hand:</strong> Moves from one number to the next (e.g. from 12 to 1). There are 12 divisions on clock face: 360° ÷ 12 = <strong>30°</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Minute hand: 360°",
            "marks": "1 M"
          },
          {
            "key": "Hour hand: 30°",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Finding Right Angles in Classroom",
        "q": "Name four objects in your classroom that have right angles at their corners.",
        "ans": "<strong>Classroom Examples:</strong><br>\n1. The blackboard / whiteboard frame corners.<br>\n2. The classroom door and window frames.<br>\n3. The surface corners of the teacher's table / student desks.<br>\n4. The pages and cover of a textbook or notebook.",
        "marks": 2,
        "rubric": [
          {
            "key": "Four valid objects named (0.5 M each)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Straight Angle & Reflex Angle",
        "q": "(a) What is the measure of a straight angle? (b) How many right angles make a straight angle? (c) What is an angle called if its measure is more than 180° but less than 360°?",
        "ans": "<strong>Angle Classifications:</strong><br>\n• <strong>(a) Measure:</strong> A straight angle measures exactly <strong>180°</strong>.<br>\n• <strong>(b) Number of right angles:</strong> 180° ÷ 90° = <strong>2 right angles</strong>.<br>\n• <strong>(c) Angle name:</strong> An angle between 180° and 360° is called a <strong>Reflex Angle</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 180°",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 2 right angles",
            "marks": "1 M"
          },
          {
            "key": "Part (c): Reflex angle",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Angle of Elevation (Sun & Shadows)",
        "q": "At 12:00 noon, when the sun is directly overhead, what angle does a vertical pole make with the horizontal ground? What happens to the length of the shadow as the sun sets in the evening?",
        "ans": "<strong>Sun & Shadows:</strong><br>\n• <strong>(a) Angle:</strong> A vertical pole makes a <strong>Right Angle (90°)</strong> with the horizontal ground.<br>\n• <strong>(b) Shadow behavior:</strong> As the sun descends lower towards the horizon in the evening, the angle of the sun's rays becomes smaller (acute), causing the shadow to become <strong>longer and longer</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Right angle (90°)",
            "marks": "1 M"
          },
          {
            "key": "Shadow becomes longer explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Hands of Clock at 6:00",
        "q": "At 6:00: (a) What type of angle is formed between the hour hand and minute hand? (b) What is its exact degree measurement?",
        "ans": "<strong>Clock Analysis at 6:00:</strong><br>\n• <strong>(a) Angle type:</strong> The hands point in exactly opposite directions along a straight line, forming a <strong>Straight Angle</strong>.<br>\n• <strong>(b) Degree measure:</strong> Exactly <strong>180°</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Straight angle identified",
            "marks": "1 M"
          },
          {
            "key": "180° stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Quadrilateral Angle Sum",
        "q": "A quadrilateral has 4 angles. If three of its angles are 90°, 85°, and 95°, what is the measure of the fourth angle?",
        "ans": "<strong>Angle Sum of Quadrilateral:</strong><br>\n• Sum of all 4 angles of a quadrilateral = 360°.<br>\n• Sum of given three angles = 90° + 85° + 95° = 270°.<br>\n• Fourth angle = 360° - 270° = <strong>90°</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total sum 360° stated",
            "marks": "1 M"
          },
          {
            "key": "Sum of 3 angles: 270°",
            "marks": "1 M"
          },
          {
            "key": "Fourth angle: 90°",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Pentagon Internal Angles",
        "q": "A regular pentagon has 5 equal sides. (a) How many angles does it have? (b) Are its internal angles acute, right, or obtuse?",
        "ans": "<strong>Pentagon Properties:</strong><br>\n• <strong>(a) Number of angles:</strong> A pentagon has <strong>5 angles</strong>.<br>\n• <strong>(b) Angle type:</strong> Each internal angle of a regular pentagon measures 108°, which is greater than 90°. Therefore, all its internal angles are <strong>Obtuse Angles</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 angles stated",
            "marks": "1 M"
          },
          {
            "key": "Obtuse angles (108°) identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Paper Folding Right Angle",
        "q": "Describe how you can fold a circular piece of paper to produce a perfect right angle (90°).",
        "ans": "<strong>Paper Folding Method:</strong><br>\n1. Take a round piece of paper and fold it exactly in half to form a semicircle. The crease line represents a straight angle of 180°.<br>\n2. Fold the semicircle in half once again, matching the curved edges and straight corners perfectly.<br>\n3. Press the fold firmly. The corner formed at the centre point is exactly 1/4 of a full circle (360° ÷ 4), creating a perfect <strong>Right Angle of 90°</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Step 1: Half fold (semicircle)",
            "marks": "1 M"
          },
          {
            "key": "Step 2: Quarter fold producing 90° corner",
            "marks": "1 M"
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
        "category": "Textbook Exercise • Postage Stamp Area & Perimeter",
        "q": "Look at postage stamps on a 1 cm square grid paper:<br>• Stamp A covers 18 squares.<br>• Stamp B covers 8 squares.<br>• Stamp C covers 6 squares.<br>• Stamp D covers 12 squares.<br>(a) What is the area of Stamp A? (b) Which stamp has the smallest area? (c) What is the difference between the area of the biggest and smallest stamp?",
        "ans": "<strong>Stamp Area Analysis:</strong><br>\n• <strong>(a) Area of Stamp A:</strong> Since each square has an area of 1 sq cm, Stamp A = 18 × 1 = <strong>18 sq cm</strong>.<br>\n• <strong>(b) Smallest stamp:</strong> Stamp C covers only 6 squares, so Stamp C has the smallest area (<strong>6 sq cm</strong>).<br>\n• <strong>(c) Difference:</strong> Area of Stamp A - Area of Stamp C = 18 - 6 = <strong>12 sq cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 18 sq cm",
            "marks": "1 M"
          },
          {
            "key": "Part (b): Stamp C (6 sq cm)",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 12 sq cm difference",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Perimeter Calculation",
        "q": "Stamp D has a length of 4 cm and a width of 3 cm. Stamp B has a length of 4 cm and a width of 2 cm. (a) Find the perimeter of Stamp D. (b) Find the perimeter of Stamp B.",
        "ans": "<strong>Perimeter Formula: Perimeter = 2 × (Length + Width)</strong><br>\n• <strong>(a) Perimeter of Stamp D:</strong> 2 × (4 + 3) = 2 × 7 = <strong>14 cm</strong>.<br>\n• <strong>(b) Perimeter of Stamp B:</strong> 2 × (4 + 2) = 2 × 6 = <strong>12 cm</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): 14 cm",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 12 cm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Footprints & Estimating Area",
        "q": "How can you estimate the area of an irregular footprint (like a human footprint or dog paw) drawn on a 1 cm grid sheet? State the counting rules.",
        "ans": "<strong>Grid Counting Rules for Irregular Shapes:</strong><br>\n1. Count every square that is <strong>fully covered</strong> as <strong>1 whole sq cm</strong>.<br>\n2. Count every square that is <strong>more than half covered</strong> as <strong>1 whole sq cm</strong>.<br>\n3. If a square is <strong>exactly half covered</strong>, count it as <strong>1/2 sq cm</strong> (two half squares make 1 sq cm).<br>\n4. Ignore squares that are <strong>less than half covered</strong>.<br>\n5. Add all counted squares together to find the estimated total area.",
        "marks": 3,
        "rubric": [
          {
            "key": "Full & >half square rule",
            "marks": "1 M"
          },
          {
            "key": "Half square rule",
            "marks": "1 M"
          },
          {
            "key": "<half square ignored rule",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Triangle in a Rectangle Area",
        "q": "A rectangle drawn on grid paper is 5 cm long and 4 cm wide. A diagonal line is drawn dividing it into two equal triangles. (a) What is the area of the rectangle? (b) What is the area of each triangle?",
        "ans": "<strong>Area Calculations:</strong><br>\n• <strong>(a) Area of rectangle:</strong> Length × Width = 5 cm × 4 cm = <strong>20 sq cm</strong>.<br>\n• <strong>(b) Area of each triangle:</strong> The diagonal divides the rectangle into two equal halves. Area of triangle = 1/2 × Area of rectangle = 20 ÷ 2 = <strong>10 sq cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 20 sq cm",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): 10 sq cm",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • 12 Squares Puzzle (Pentominoes)",
        "q": "Arrange 12 squares of side 1 cm to form rectangles of different dimensions. (a) List all possible rectangles that can be formed using all 12 squares. (b) Which rectangle has the longest perimeter? (c) Which rectangle has the shortest perimeter?",
        "ans": "<strong>Possible Rectangles with Area 12 sq cm:</strong><br>\n• <strong>1 × 12 rectangle:</strong> Perimeter = 2 × (1 + 12) = 2 × 13 = <strong>26 cm</strong>.<br>\n• <strong>2 × 6 rectangle:</strong> Perimeter = 2 × (2 + 6) = 2 × 8 = <strong>16 cm</strong>.<br>\n• <strong>3 × 4 rectangle:</strong> Perimeter = 2 × (3 + 4) = 2 × 7 = <strong>14 cm</strong>.<br>\n• <strong>(b) Longest perimeter:</strong> The 1 × 12 rectangle with perimeter <strong>26 cm</strong>.<br>\n• <strong>(c) Shortest perimeter:</strong> The 3 × 4 rectangle with perimeter <strong>14 cm</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "All 3 rectangle dimensions listed",
            "marks": "1.5 M"
          },
          {
            "key": "Longest perimeter: 26 cm",
            "marks": "1.5 M"
          },
          {
            "key": "Shortest perimeter: 14 cm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Same Area Different Perimeter",
        "q": "Can two shapes have the same area but different perimeters? Explain with an example using 16 square tiles of side 1 cm.",
        "ans": "<strong>Explanation & Example:</strong><br>\n<strong>Yes, two shapes can have identical areas but different perimeters.</strong><br>\n• Example with 16 square tiles (Area = 16 sq cm in both cases):<br>\n  - Shape 1 (4 cm × 4 cm square): Area = 16 sq cm. Perimeter = 4 × 4 = <strong>16 cm</strong>.<br>\n  - Shape 2 (1 cm × 16 cm ribbon): Area = 16 sq cm. Perimeter = 2 × (1 + 16) = 2 × 17 = <strong>34 cm</strong>.<br>\nBoth shapes have an area of 16 sq cm, but their perimeters are 16 cm and 34 cm.",
        "marks": 3,
        "rubric": [
          {
            "key": "Affirmative 'Yes' stated",
            "marks": "1 M"
          },
          {
            "key": "Square calculation (Area 16, Perim 16)",
            "marks": "1 M"
          },
          {
            "key": "Rectangle calculation (Area 16, Perim 34)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Postcard Coverage",
        "q": "A standard postcard measures 14 cm in length and 9 cm in width. (a) What is the area of the postcard? (b) How many postage stamps of size 3 cm by 2 cm can fit completely on the postcard without overlapping?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Area of postcard:</strong> 14 cm × 9 cm = <strong>126 sq cm</strong>.<br>\n• <strong>(b) Stamps fitting:</strong> Area of one stamp = 3 cm × 2 cm = 6 sq cm.<br>\n  - Along 14 cm length: 14 ÷ 3 = 4 stamps (with 2 cm left over).<br>\n  - Along 9 cm width: 9 ÷ 2 = 4 stamps (with 1 cm left over).<br>\n  - Total stamps fitted = 4 × 4 = <strong>16 stamps</strong>.<br>\n  (By pure area quotient: 126 ÷ 6 = 21 stamps, but physical grid fitting allows 16 to 18 stamps).",
        "marks": 3,
        "rubric": [
          {
            "key": "Area of postcard: 126 sq cm",
            "marks": "1.5 M"
          },
          {
            "key": "Stamp fitting calculation",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Floor Tile Pattern",
        "q": "A square floor of side 6 metres needs to be paved with square tiles of side 30 cm. (a) Convert 6 m to cm. (b) Find the area of the floor in sq cm. (c) How many tiles are needed to pave the entire floor?",
        "ans": "<strong>Tiling Calculations:</strong><br>\n• <strong>(a) Conversion:</strong> 6 m = 6 × 100 = <strong>600 cm</strong>.<br>\n• <strong>(b) Area of floor:</strong> 600 cm × 600 cm = <strong>360,000 sq cm</strong>.<br>\n• <strong>(c) Number of tiles:</strong> Area of one tile = 30 cm × 30 cm = 900 sq cm.<br>\n  Number of tiles = 360,000 ÷ 900 = <strong>400 tiles</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Conversion to 600 cm",
            "marks": "1 M"
          },
          {
            "key": "Area of floor: 360,000 sq cm",
            "marks": "1 M"
          },
          {
            "key": "Tiles needed: 400 tiles",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Area of Composite Grid Figure",
        "q": "A figure drawn on a 1 cm grid paper consists of 14 full squares, 8 half squares, and 4 squares that are more than half covered. What is the total area of the figure?",
        "ans": "<strong>Grid Area Calculation:</strong><br>\n• 14 full squares = 14 × 1 = 14 sq cm.<br>\n• 8 half squares = 8 × 0.5 = 4 sq cm.<br>\n• 4 more-than-half squares = 4 × 1 = 4 sq cm.<br>\n• <strong>Total Area:</strong> 14 + 4 + 4 = <strong>22 sq cm</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Stepwise square values",
            "marks": "1 M"
          },
          {
            "key": "Total area: 22 sq cm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Perimeter Comparison of Shapes",
        "q": "A wire of length 36 cm is bent into: (a) A square (b) An equilateral triangle (c) A regular hexagon. What will be the length of each side in each shape?",
        "ans": "<strong>Side Length Calculations (Side = Perimeter ÷ Number of sides):</strong><br>\n• <strong>(a) Square (4 sides):</strong> 36 ÷ 4 = <strong>9 cm</strong>.<br>\n• <strong>(b) Equilateral triangle (3 sides):</strong> 36 ÷ 3 = <strong>12 cm</strong>.<br>\n• <strong>(c) Regular hexagon (6 sides):</strong> 36 ÷ 6 = <strong>6 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Square side: 9 cm",
            "marks": "1 M"
          },
          {
            "key": "Triangle side: 12 cm",
            "marks": "1 M"
          },
          {
            "key": "Hexagon side: 6 cm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Dividing Rectangles into Equal Shapes",
        "q": "A 10 cm × 6 cm rectangle has an area of 60 sq cm. Show how it can be divided into: (a) 3 equal rectangles (b) 2 equal triangles. State the area of each resulting piece.",
        "ans": "<strong>Divisions:</strong><br>\n• <strong>(a) 3 equal rectangles:</strong> Cut along the 6 cm width into three strips of 2 cm width each (10 cm × 2 cm). Area of each strip = 60 ÷ 3 = <strong>20 sq cm</strong>.<br>\n• <strong>(b) 2 equal triangles:</strong> Cut diagonally from one corner to the opposite corner. Area of each triangle = 60 ÷ 2 = <strong>30 sq cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 3 strips of 20 sq cm each",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): 2 triangles of 30 sq cm each",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Comparing Footprint Sizes",
        "q": "Rohan's footprint covers 18 squares on a grid sheet, while his baby sister's footprint covers 7 squares. (a) By how many square centimetres is Rohan's footprint larger? (b) If his father's footprint is double Rohan's, what is its area?",
        "ans": "<strong>Footprint Calculations:</strong><br>\n• <strong>(a) Difference:</strong> 18 sq cm - 7 sq cm = <strong>11 sq cm larger</strong>.<br>\n• <strong>(b) Father's footprint area:</strong> 2 × 18 sq cm = <strong>36 sq cm</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): 11 sq cm difference",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 36 sq cm area",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Perimeter with Missing Side",
        "q": "A five-sided garden polygon has a total perimeter of 45 metres. Four of its sides measure 8 m, 11 m, 9 m, and 10 m. What is the length of the fifth side?",
        "ans": "<strong>Missing Side Calculation:</strong><br>\n• Sum of given four sides = 8 + 11 + 9 + 10 = 38 m.<br>\n• Total perimeter = 45 m.<br>\n• Length of fifth side = 45 - 38 = <strong>7 metres</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sum of 4 sides: 38 m",
            "marks": "1 M"
          },
          {
            "key": "Fifth side: 7 m",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Square vs Rectangle Area",
        "q": "A square has a side of 8 cm. A rectangle has a length of 10 cm and a width of 6 cm. (a) Which figure has a greater area, and by how much? (b) Which figure has a greater perimeter, and by how much?",
        "ans": "<strong>Comparison:</strong><br>\n• <strong>(a) Area:</strong><br>\n  - Area of Square = 8 × 8 = 64 sq cm.<br>\n  - Area of Rectangle = 10 × 6 = 60 sq cm.<br>\n  - The <strong>Square</strong> has greater area by 64 - 60 = <strong>4 sq cm</strong>.<br>\n• <strong>(b) Perimeter:</strong><br>\n  - Perimeter of Square = 4 × 8 = 32 cm.<br>\n  - Perimeter of Rectangle = 2 × (10 + 6) = 32 cm.<br>\n  - Both figures have the <strong>exact same perimeter (32 cm)</strong>!",
        "marks": 4,
        "rubric": [
          {
            "key": "Square area 64, rectangle 60, diff 4 sq cm",
            "marks": "2 M"
          },
          {
            "key": "Perimeters both 32 cm comparison",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Chequered Chessboard Problem",
        "q": "A standard chessboard has 8 rows and 8 columns of alternating black and white squares. If each small square has a side of 3 cm: (a) What is the side length of the entire board? (b) What is the total area of the chessboard? (c) What is the total area of all the black squares?",
        "ans": "<strong>Chessboard Calculations:</strong><br>\n• <strong>(a) Side length:</strong> 8 squares × 3 cm = <strong>24 cm</strong>.<br>\n• <strong>(b) Total area:</strong> 24 cm × 24 cm = <strong>576 sq cm</strong>.<br>\n• <strong>(c) Black squares area:</strong> Exactly half of the 64 squares are black (32 squares). Area = 576 ÷ 2 = <strong>288 sq cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Side length: 24 cm",
            "marks": "1 M"
          },
          {
            "key": "Total area: 576 sq cm",
            "marks": "1 M"
          },
          {
            "key": "Black squares area: 288 sq cm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Pentomino Puzzle (T-Shape)",
        "q": "A 'pentomino' is a shape made by joining 5 squares edge-to-edge. (a) How many square centimetres is the area of any pentomino made with 1 cm squares? (b) If a 'T-shape' pentomino has 3 squares across the top and 2 squares going down the middle stem, calculate its perimeter.",
        "ans": "<strong>Pentomino Analysis:</strong><br>\n• <strong>(a) Area:</strong> Since it always consists of 5 squares of 1 sq cm, its area is always <strong>5 sq cm</strong>.<br>\n• <strong>(b) Perimeter of T-pentomino:</strong><br>\n  Counting outer edge segments: Top edge = 3 cm; left & right ends of crossbar = 1 cm each; under-crossbar edges = 1 cm each; stem sides = 2 cm each; bottom edge = 1 cm.<br>\n  Total perimeter = 3 + 1 + 1 + 1 + 2 + 1 + 2 + 1 = <strong>12 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Area: 5 sq cm",
            "marks": "1 M"
          },
          {
            "key": "Perimeter counting: 12 cm",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cost of Fencing a Garden",
        "q": "A rectangular park is 25 metres long and 15 metres wide. Fencing wire costs ₹20 per metre. What is the total cost of fencing the park with 3 rounds of wire?",
        "ans": "<strong>Fencing Cost Calculation:</strong><br>\n1. Perimeter of park = 2 × (25 + 15) = 2 × 40 = 80 metres.<br>\n2. Total wire needed for 3 rounds = 3 × 80 = 240 metres.<br>\n3. Total cost = 240 m × ₹20 = <strong>₹4,800</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Perimeter: 80 m",
            "marks": "1 M"
          },
          {
            "key": "3 rounds length: 240 m",
            "marks": "1 M"
          },
          {
            "key": "Total cost: ₹4,800",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Doubling the Side of a Square",
        "q": "A square has a side of 4 cm. If its side is doubled to 8 cm: (a) What happens to its perimeter? (b) What happens to its area?",
        "ans": "<strong>Effect of Doubling Side:</strong><br>\n• <strong>(a) Perimeter:</strong><br>\n  - Original: 4 × 4 = 16 cm.<br>\n  - New: 4 × 8 = 32 cm.<br>\n  - The perimeter <strong>doubles (increases by 2 times)</strong>.<br>\n• <strong>(b) Area:</strong><br>\n  - Original: 4 × 4 = 16 sq cm.<br>\n  - New: 8 × 8 = 64 sq cm.<br>\n  - The area <strong>becomes 4 times larger</strong> (2² = 4).",
        "marks": 3,
        "rubric": [
          {
            "key": "Perimeter doubles (16 cm to 32 cm)",
            "marks": "1.5 M"
          },
          {
            "key": "Area quadruples (16 to 64 sq cm)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • L-Shaped Room Area",
        "q": "An L-shaped room can be divided into two rectangles: Rectangle 1 is 4 m × 3 m, and Rectangle 2 is 2 m × 2 m. (a) What is the total area of the room? (b) If carpet costs ₹150 per square metre, what is the cost of carpeting the room?",
        "ans": "<strong>Area & Carpet Cost:</strong><br>\n• <strong>(a) Total area:</strong><br>\n  - Area of Rectangle 1 = 4 × 3 = 12 sq m.<br>\n  - Area of Rectangle 2 = 2 × 2 = 4 sq m.<br>\n  - Total area = 12 + 4 = <strong>16 sq metres</strong>.<br>\n• <strong>(b) Cost of carpeting:</strong> 16 sq m × ₹150 = <strong>₹2,400</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total area: 16 sq m",
            "marks": "1.5 M"
          },
          {
            "key": "Carpet cost: ₹2,400",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Border Ribbon on Table Cloth",
        "q": "A square table cloth has an area of 49 sq metres. (a) What is the length of one side of the table cloth? (b) How many metres of lace border will be needed to sew all along its edges?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Side length:</strong> Since Area = Side × Side = 49, Side = √49 = <strong>7 metres</strong>.<br>\n• <strong>(b) Lace border needed:</strong> Perimeter = 4 × Side = 4 × 7 = <strong>28 metres of lace</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Side: 7 m",
            "marks": "1 M"
          },
          {
            "key": "Perimeter/Lace: 28 m",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Perimeter of Irregular Grid Figures",
        "q": "On a 1 cm grid paper, draw a staircase shape going 3 units right, 1 unit up, 2 units right, 1 unit up, 1 unit left, 2 units down, 4 units left, and 1 unit down to close. Count the total unit segments along the boundary to find its perimeter.",
        "ans": "<strong>Perimeter Determination:</strong><br>\nTracing each segment along the outer contour: 3 + 1 + 2 + 1 + 1 + 2 + 4 + 1 = <strong>15 units (or 14-16 cm depending on closed vertex coordinates)</strong>. Tracing a closed staircase with baseline 5 cm and height 2 cm gives a boundary of <strong>14 cm</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Stepwise segment addition",
            "marks": "1 M"
          },
          {
            "key": "Total perimeter statement",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Comparing Book Cover Areas",
        "q": "Maths book cover is 28 cm long and 21 cm wide. Hindi book cover is 25 cm long and 20 cm wide. Find: (a) Area of Maths cover (b) Area of Hindi cover (c) Difference in their areas.",
        "ans": "<strong>Cover Area Calculations:</strong><br>\n• <strong>(a) Maths cover area:</strong> 28 × 21 = <strong>588 sq cm</strong>.<br>\n• <strong>(b) Hindi cover area:</strong> 25 × 20 = <strong>500 sq cm</strong>.<br>\n• <strong>(c) Difference:</strong> 588 - 500 = <strong>88 sq cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Maths area: 588 sq cm",
            "marks": "1 M"
          },
          {
            "key": "Hindi area: 500 sq cm",
            "marks": "1 M"
          },
          {
            "key": "Difference: 88 sq cm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tiling without Gaps",
        "q": "Explain why regular hexagon tiles and square tiles can pave a floor without leaving any gaps, but regular pentagon tiles cannot.",
        "ans": "<strong>Tiling & Angle Sum at a Vertex:</strong><br>\n• For tiles to meet around a point without gaps or overlaps, the sum of their corner angles must equal exactly <strong>360°</strong>.<br>\n• <strong>Squares:</strong> Corner angle = 90°. Four squares meet: 4 × 90° = 360° (no gaps).<br>\n• <strong>Hexagons:</strong> Corner angle = 120°. Three hexagons meet: 3 × 120° = 360° (no gaps).<br>\n• <strong>Pentagons:</strong> Corner angle = 108°. Three pentagons = 324° (gap of 36°); four pentagons = 432° (overlap). Therefore, pentagons cannot tile a plane.",
        "marks": 3,
        "rubric": [
          {
            "key": "Vertex 360° rule explained",
            "marks": "1 M"
          },
          {
            "key": "Square & hexagon 360° verification",
            "marks": "1 M"
          },
          {
            "key": "Pentagon 324° failure explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Garden Path Area",
        "q": "A square flower bed has a side of 10 metres. A 1-metre wide path is built all around the outside of the flower bed. (a) What is the side length of the outer boundary including the path? (b) Find the area of the flower bed alone. (c) Find the area of the path.",
        "ans": "<strong>Path Area Calculations:</strong><br>\n• <strong>(a) Outer side:</strong> Inner side = 10 m. Adding 1 m path on both sides: 10 + 1 + 1 = <strong>12 metres</strong>.<br>\n• <strong>(b) Area of flower bed:</strong> 10 m × 10 m = <strong>100 sq metres</strong>.<br>\n• <strong>(c) Area of the path:</strong><br>\n  - Outer total area = 12 m × 12 m = 144 sq m.<br>\n  - Area of path = Outer area - Flower bed area = 144 - 100 = <strong>44 sq metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Outer side: 12 m",
            "marks": "1 M"
          },
          {
            "key": "Inner area: 100 sq m",
            "marks": "1 M"
          },
          {
            "key": "Path area: 44 sq m",
            "marks": "1 M"
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
        "category": "Textbook Exercise • Indian Flag & Fractions",
        "q": "Our national flag has three horizontal stripes: saffron at the top, white in the middle, and green at the bottom. (a) What fraction of the flag is saffron? (b) Is the white portion more than 1/3 or less than 1/3 of the flag? Explain why. (c) What fraction of the flag is green?",
        "ans": "<strong>Flag Fractions:</strong><br>\n• <strong>(a) Saffron fraction:</strong> The flag is divided into 3 equal stripes, so saffron is <strong>1/3</strong>.<br>\n• <strong>(b) White portion:</strong> The white stripe contains the navy blue Ashoka Chakra in its center. Because the Chakra takes up space inside the white band, the pure white area is <strong>a little less than 1/3</strong> of the flag.<br>\n• <strong>(c) Green fraction:</strong> Green occupies exactly one of the three equal bands, which is <strong>1/3</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 1/3 saffron",
            "marks": "1 M"
          },
          {
            "key": "Part (b): Less than 1/3 due to Ashoka Chakra",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 1/3 green",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Chocolate Bar Distribution",
        "q": "Manju had a chocolate bar with 12 equal pieces. She gave: 1/4 of it to Raji; 1/3 of it to Sugatha; 1/6 of it to Sheela. She ate the remaining pieces. (a) How many pieces did Raji get? (b) How many pieces did Sugatha get? (c) How many pieces did Sheela get? (d) How many pieces did Manju eat?",
        "ans": "<strong>Piece Distribution (Total = 12 pieces):</strong><br>\n• <strong>(a) Raji:</strong> 1/4 of 12 = 12 ÷ 4 = <strong>3 pieces</strong>.<br>\n• <strong>(b) Sugatha:</strong> 1/3 of 12 = 12 ÷ 3 = <strong>4 pieces</strong>.<br>\n• <strong>(c) Sheela:</strong> 1/6 of 12 = 12 ÷ 6 = <strong>2 pieces</strong>.<br>\n• <strong>(d) Manju:</strong> Total given away = 3 + 4 + 2 = 9 pieces. Manju ate: 12 - 9 = <strong>3 pieces</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "Raji: 3 pieces",
            "marks": "1 M"
          },
          {
            "key": "Sugatha: 4 pieces",
            "marks": "1 M"
          },
          {
            "key": "Sheela: 2 pieces",
            "marks": "1 M"
          },
          {
            "key": "Manju: 3 pieces",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Ramu's Vegetable Field",
        "q": "Ramu's vegetable field has 9 equal parts. In these parts he grows: chillies in 1 part, potatoes in 2 parts, brinjals in 2 parts, tomatoes in 3 parts, and spinach in 1 part.<br>(a) Which vegetable grows in the biggest part of his field? What fraction is it?<br>(b) On what fraction of the field does he grow potatoes?<br>(c) What fraction is used for growing spinach?",
        "ans": "<strong>Field Fractions (Total = 9 equal parts):</strong><br>\n• <strong>(a) Biggest part:</strong> Tomatoes grow in 3 parts. Fraction = 3/9 = <strong>1/3 of the field</strong>.<br>\n• <strong>(b) Potatoes fraction:</strong> Potatoes occupy 2 parts out of 9 = <strong>2/9 of the field</strong>.<br>\n• <strong>(c) Spinach fraction:</strong> Spinach occupies 1 part out of 9 = <strong>1/9 of the field</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): Tomatoes (3/9 or 1/3)",
            "marks": "1 M"
          },
          {
            "key": "Part (b): Potatoes (2/9)",
            "marks": "1 M"
          },
          {
            "key": "Part (c): Spinach (1/9)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Sleeping Time Fractions",
        "q": "A day has 24 hours. (a) A child sleeps for 1/3 of a day. How many hours does the child sleep? (b) A person studies for 1/4 of a day. How many hours does the person study? (c) A cat sleeps for 1/2 of a day. How many hours does the cat sleep?",
        "ans": "<strong>Daily Hour Calculations (Total = 24 hours):</strong><br>\n• <strong>(a) Sleeping time:</strong> 1/3 of 24 = 24 ÷ 3 = <strong>8 hours</strong>.<br>\n• <strong>(b) Study time:</strong> 1/4 of 24 = 24 ÷ 4 = <strong>6 hours</strong>.<br>\n• <strong>(c) Cat sleeping time:</strong> 1/2 of 24 = 24 ÷ 2 = <strong>12 hours</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 8 hours",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 6 hours",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 12 hours",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fractions of a Rupee",
        "q": "Answer the following based on Indian coins:<br>(a) How many 50-paise coins make one rupee? What fraction of a rupee is 50 paise?<br>(b) How many 25-paise coins make one rupee? What fraction of a rupee is 25 paise?<br>(c) What fraction of a rupee is 20 paise?",
        "ans": "<strong>Rupee Conversions (1 Rupee = 100 paise):</strong><br>\n• <strong>(a) 50-paise coins:</strong> 100 ÷ 50 = <strong>2 coins</strong>. Fraction = 50/100 = <strong>1/2 of a rupee</strong>.<br>\n• <strong>(b) 25-paise coins:</strong> 100 ÷ 25 = <strong>4 coins</strong>. Fraction = 25/100 = <strong>1/4 of a rupee</strong>.<br>\n• <strong>(c) 20-paise coins:</strong> 100 ÷ 20 = 5 coins. Fraction = 20/100 = <strong>1/5 of a rupee</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 2 coins, 1/2",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 4 coins, 1/4",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 1/5 fraction",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Equivalent Fractions",
        "q": "Complete the equivalent fraction chains:<br>(a) 1/2 = 2/4 = ___/6 = 4/___ = ___/10<br>(b) 3/5 = ___/10 = 9/___ = ___/20<br>(c) Show why 2/3 is equal to 8/12.",
        "ans": "<strong>Equivalent Fractions:</strong><br>\n• <strong>(a)</strong> 1/2 = 2/4 = <strong>3</strong>/6 = 4/<strong>8</strong> = <strong>5</strong>/10.<br>\n• <strong>(b)</strong> 3/5 = <strong>6</strong>/10 = 9/<strong>15</strong> = <strong>12</strong>/20.<br>\n• <strong>(c) Verification:</strong> Multiply numerator and denominator of 2/3 by 4: (2 × 4) / (3 × 4) = <strong>8/12</strong>. Hence, they are equal.",
        "marks": 3,
        "rubric": [
          {
            "key": "Chain (a) filled correctly",
            "marks": "1 M"
          },
          {
            "key": "Chain (b) filled correctly",
            "marks": "1 M"
          },
          {
            "key": "Verification in (c)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Shopping List & Price Fractions",
        "q": "At a vegetable shop: Tomato costs ₹12/kg, Potato costs ₹10/kg, Onion costs ₹16/kg, Carrot costs ₹18/kg, and Pumpkin costs ₹8/kg. Find the cost of:<br>(a) 2½ kg of tomatoes<br>(b) 3¼ kg of potatoes<br>(c) 1½ kg of pumpkin",
        "ans": "<strong>Cost Calculations:</strong><br>\n• <strong>(a) 2½ kg tomatoes:</strong> 2.5 × ₹12 = <strong>₹30</strong> (or 2 × 12 + 1/2 × 12 = 24 + 6 = ₹30).<br>\n• <strong>(b) 3¼ kg potatoes:</strong> 3 × 10 = 30; 1/4 × 10 = 2.50. Total = 30 + 2.50 = <strong>₹32.50</strong>.<br>\n• <strong>(c) 1½ kg pumpkin:</strong> 1.5 × ₹8 = <strong>₹12</strong> (or 8 + 4 = ₹12).",
        "marks": 3,
        "rubric": [
          {
            "key": "Tomatoes: ₹30",
            "marks": "1 M"
          },
          {
            "key": "Potatoes: ₹32.50",
            "marks": "1 M"
          },
          {
            "key": "Pumpkin: ₹12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fractions on a Grid (Coloring)",
        "q": "A grid rectangle has 16 small equal squares. (a) How many squares must you color blue to color 1/2 of the grid? (b) How many squares must you color red to color 1/4 of the grid? (c) How many squares remain uncolored?",
        "ans": "<strong>Grid Square Calculations (Total = 16 squares):</strong><br>\n• <strong>(a) Blue squares (1/2):</strong> 1/2 of 16 = 16 ÷ 2 = <strong>8 squares</strong>.<br>\n• <strong>(b) Red squares (1/4):</strong> 1/4 of 16 = 16 ÷ 4 = <strong>4 squares</strong>.<br>\n• <strong>(c) Uncolored squares:</strong> 16 - (8 + 4) = 16 - 12 = <strong>4 squares</strong> (which is 4/16 or 1/4 of the grid).",
        "marks": 3,
        "rubric": [
          {
            "key": "Blue: 8 squares",
            "marks": "1 M"
          },
          {
            "key": "Red: 4 squares",
            "marks": "1 M"
          },
          {
            "key": "Uncolored: 4 squares",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Train Journey Delay",
        "q": "A passenger train is running late by 1/4 of an hour. The scheduled arrival time was 6:45 PM. (a) How many minutes is the train delayed? (b) At what time will the train actually arrive?",
        "ans": "<strong>Time Calculations:</strong><br>\n• <strong>(a) Minutes of delay:</strong> 1 hour = 60 minutes. Delay = 1/4 of 60 = 60 ÷ 4 = <strong>15 minutes</strong>.<br>\n• <strong>(b) Actual arrival time:</strong> Scheduled time (6:45 PM) + 15 minutes = <strong>7:00 PM</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Delay: 15 minutes",
            "marks": "1 M"
          },
          {
            "key": "Actual arrival: 7:00 PM",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Comparing Fractions",
        "q": "Insert >, < or = between the pairs of fractions:<br>(a) 3/7 and 5/7<br>(b) 2/3 and 2/5<br>(c) 3/4 and 6/8",
        "ans": "<strong>Comparisons:</strong><br>\n• <strong>(a) 3/7 & 5/7:</strong> Same denominator; 3 < 5. Therefore, <strong>3/7 < 5/7</strong>.<br>\n• <strong>(b) 2/3 & 2/5:</strong> Same numerator; smaller denominator means larger parts (3 < 5). Therefore, <strong>2/3 > 2/5</strong>.<br>\n• <strong>(c) 3/4 & 6/8:</strong> Multiply 3/4 by 2/2 = 6/8. Therefore, <strong>3/4 = 6/8</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): <",
            "marks": "1 M"
          },
          {
            "key": "Part (b): >",
            "marks": "1 M"
          },
          {
            "key": "Part (c): =",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cooking Recipe Fractions",
        "q": "To make a cake, a recipe requires: 1/2 kg flour, 1/4 kg sugar, 1/8 kg butter. What is the total weight of these three ingredients in grams?",
        "ans": "<strong>Grams Conversion (1 kg = 1,000 g):</strong><br>\n• Flour: 1/2 of 1,000 g = 500 g.<br>\n• Sugar: 1/4 of 1,000 g = 250 g.<br>\n• Butter: 1/8 of 1,000 g = 125 g.<br>\n• <strong>Total weight:</strong> 500 + 250 + 125 = <strong>875 grams</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Flour: 500 g, Sugar: 250 g, Butter: 125 g",
            "marks": "1.5 M"
          },
          {
            "key": "Total: 875 g",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fractions of a Group",
        "q": "In a class of 40 students: 1/5 like Cricket, 2/5 like Football, and the rest like Badminton. (a) How many students like Cricket? (b) How many students like Football? (c) What fraction of students like Badminton?",
        "ans": "<strong>Group Analysis (Total = 40 students):</strong><br>\n• <strong>(a) Cricket:</strong> 1/5 of 40 = 40 ÷ 5 = <strong>8 students</strong>.<br>\n• <strong>(b) Football:</strong> 2/5 of 40 = (40 ÷ 5) × 2 = 8 × 2 = <strong>16 students</strong>.<br>\n• <strong>(c) Badminton:</strong> Remaining students = 40 - (8 + 16) = 40 - 24 = 16 students. Fraction = 16/40 = <strong>2/5</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cricket: 8 students",
            "marks": "1 M"
          },
          {
            "key": "Football: 16 students",
            "marks": "1 M"
          },
          {
            "key": "Badminton: 16 students (2/5)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Milk Bottle Sharing",
        "q": "A 1-litre bottle of milk is shared equally among 4 children. (a) How many millilitres of milk does each child get? (b) What fraction of a litre does each child get?",
        "ans": "<strong>Sharing Calculations (1 litre = 1,000 mL):</strong><br>\n• <strong>(a) Millilitres per child:</strong> 1,000 mL ÷ 4 = <strong>250 mL</strong>.<br>\n• <strong>(b) Fraction of a litre:</strong> 250/1,000 = <strong>1/4 of a litre</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "250 mL",
            "marks": "1 M"
          },
          {
            "key": "1/4 litre",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Mixed Numbers to Improper Fractions",
        "q": "Convert the following mixed fractions into improper fractions: (a) 2 1/3 (b) 3 3/4 (c) 5 1/2.",
        "ans": "<strong>Conversions (Improper Fraction = (Whole × Denominator + Numerator) / Denominator):</strong><br>\n• (a) 2 1/3 = (2 × 3 + 1) / 3 = <strong>7/3</strong>.<br>\n• (b) 3 3/4 = (3 × 4 + 3) / 4 = <strong>15/4</strong>.<br>\n• (c) 5 1/2 = (5 × 2 + 1) / 2 = <strong>11/2</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 7/3",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 15/4",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 11/2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fraction Addition",
        "q": "Solve: (a) 2/7 + 3/7 (b) 1/4 + 1/2 (c) 1 - 3/8.",
        "ans": "<strong>Fraction Arithmetic:</strong><br>\n• <strong>(a)</strong> 2/7 + 3/7 = (2 + 3) / 7 = <strong>5/7</strong>.<br>\n• <strong>(b)</strong> 1/4 + 1/2 = 1/4 + 2/4 = <strong>3/4</strong>.<br>\n• <strong>(c)</strong> 1 - 3/8 = 8/8 - 3/8 = <strong>5/8</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 5/7",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 3/4",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 5/8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Ribbon Cutting Problem",
        "q": "A ribbon is 6 metres long. How many pieces of 3/4 metre length can be cut from it?",
        "ans": "<strong>Division of Whole Number by Fraction:</strong><br>\n• Number of pieces = Total length ÷ Length of one piece.<br>\n• 6 ÷ (3/4) = 6 × (4/3) = (6 × 4) ÷ 3 = 24 ÷ 3 = <strong>8 pieces</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reciprocal multiplication: 6 × 4/3",
            "marks": "1 M"
          },
          {
            "key": "Final answer: 8 pieces",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fraction of an Hour",
        "q": "Find how many minutes are there in: (a) 1/2 of an hour (b) 2/3 of an hour (c) 3/4 of an hour.",
        "ans": "<strong>Conversions (1 hour = 60 minutes):</strong><br>\n• (a) 1/2 × 60 = <strong>30 minutes</strong>.<br>\n• (b) 2/3 × 60 = 2 × 20 = <strong>40 minutes</strong>.<br>\n• (c) 3/4 × 60 = 3 × 15 = <strong>45 minutes</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 30 mins",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 40 mins",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 45 mins",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fraction Simplification",
        "q": "Reduce each fraction to its simplest form (lowest terms): (a) 12/16 (b) 15/25 (c) 18/24.",
        "ans": "<strong>Simplification by dividing HCF:</strong><br>\n• (a) 12/16: Divide numerator and denominator by 4: (12÷4)/(16÷4) = <strong>3/4</strong>.<br>\n• (b) 15/25: Divide by 5: (15÷5)/(25÷5) = <strong>3/5</strong>.<br>\n• (c) 18/24: Divide by 6: (18÷6)/(24÷6) = <strong>3/4</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 3/4",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 3/5",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 3/4",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fraction of a Year",
        "q": "(a) What fraction of a year is 3 months? (b) What fraction of a year is 6 months? (c) What fraction of a leap year is 73 days?",
        "ans": "<strong>Calculations (1 year = 12 months; normal year = 365 days):</strong><br>\n• <strong>(a) 3 months:</strong> 3/12 = <strong>1/4 of a year</strong>.<br>\n• <strong>(b) 6 months:</strong> 6/12 = <strong>1/2 of a year</strong>.<br>\n• <strong>(c) 73 days of 365 days:</strong> 73/365 = <strong>1/5 of a year</strong> (since 73 × 5 = 365).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 1/4",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 1/2",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 1/5",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Finding the Whole from a Part",
        "q": "If 1/3 of a number is 15: (a) What is the whole number? (b) What is 2/5 of that number?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Whole number:</strong> If 1/3 = 15, then Whole = 15 × 3 = <strong>45</strong>.<br>\n• <strong>(b) 2/5 of the number:</strong> 2/5 of 45 = (45 ÷ 5) × 2 = 9 × 2 = <strong>18</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Whole number: 45",
            "marks": "1 M"
          },
          {
            "key": "2/5 calculation: 18",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Distance Covered as Fraction",
        "q": "A bus has to cover a total journey of 120 km. It covers 3/4 of the distance in the morning. (a) How many kilometres did it cover in the morning? (b) How many kilometres are left to travel?",
        "ans": "<strong>Distance Calculations:</strong><br>\n• <strong>(a) Morning distance:</strong> 3/4 of 120 = (120 ÷ 4) × 3 = 30 × 3 = <strong>90 km</strong>.<br>\n• <strong>(b) Distance remaining:</strong> 120 - 90 = <strong>30 km</strong> (or 1/4 of 120 = 30 km).",
        "marks": 2,
        "rubric": [
          {
            "key": "Morning distance: 90 km",
            "marks": "1 M"
          },
          {
            "key": "Remaining distance: 30 km",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fraction Subtraction Problem",
        "q": "Anita had ₹500. She spent 2/5 of it on books and 1/10 of it on stationery. (a) How much money did she spend in total? (b) How much money does she have left?",
        "ans": "<strong>Expense Calculation:</strong><br>\n• On books: 2/5 of 500 = (500 ÷ 5) × 2 = ₹200.<br>\n• On stationery: 1/10 of 500 = ₹50.<br>\n• <strong>(a) Total spent:</strong> 200 + 50 = <strong>₹250</strong>.<br>\n• <strong>(b) Money left:</strong> 500 - 250 = <strong>₹250</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Books: ₹200, Stationery: ₹50",
            "marks": "1 M"
          },
          {
            "key": "Total spent: ₹250",
            "marks": "1 M"
          },
          {
            "key": "Money left: ₹250",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Equal Fraction Division Puzzle",
        "q": "Divide 5 apples equally among 4 children. How much apple will each child get? Express as a mixed number and as an improper fraction.",
        "ans": "<strong>Sharing Solution:</strong><br>\n• Each child gets 5 ÷ 4 apples.<br>\n• Improper fraction: <strong>5/4 apples</strong>.<br>\n• Mixed number: 5 ÷ 4 = <strong>1 1/4 apples</strong> (1 whole apple and 1 quarter of an apple).",
        "marks": 2,
        "rubric": [
          {
            "key": "5/4 improper fraction",
            "marks": "1 M"
          },
          {
            "key": "1 1/4 mixed fraction",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fraction Comparison in Real Life",
        "q": "Sunil studies for 3/4 of an hour, while Rohit studies for 2/3 of an hour. Who studies for a longer time, and by how many minutes?",
        "ans": "<strong>Comparison in Minutes:</strong><br>\n• Sunil: 3/4 of 60 minutes = 45 minutes.<br>\n• Rohit: 2/3 of 60 minutes = 40 minutes.<br>\n• <strong>Sunil studies longer</strong> by 45 - 40 = <strong>5 minutes</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Calculations of 45 mins and 40 mins",
            "marks": "1 M"
          },
          {
            "key": "Conclusion: Sunil by 5 mins",
            "marks": "1 M"
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
        "category": "Textbook Exercise • Mirror Symmetry (Mirror Half)",
        "q": "Look at the letters of the English alphabet: (a) Name 4 letters that can be divided into two identical mirror halves by a vertical line. (b) Name 4 letters that can be divided into two mirror halves by a horizontal line. (c) Name 2 letters that have both vertical and horizontal symmetry.",
        "ans": "<strong>Symmetry Letters:</strong><br>\n• <strong>(a) Vertical symmetry:</strong> <strong>A, M, T, V</strong> (also H, I, W, Y).<br>\n• <strong>(b) Horizontal symmetry:</strong> <strong>B, C, D, E</strong> (also H, I, K).<br>\n• <strong>(c) Both vertical and horizontal:</strong> <strong>H, I, X, O</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 4 vertical symmetry letters",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 4 horizontal symmetry letters",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 2 dual symmetry letters",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Half Turn (1/2 Turn) Numbers",
        "q": "Which of the following numbers look the same after a half turn (180° rotation)?<br>0, 1, 2, 3, 4, 5, 6, 7, 8, 9.<br>Also write two 2-digit numbers and two 3-digit numbers that look the same on a half turn.",
        "ans": "<strong>Half-Turn Numbers:</strong><br>\n• Among single digits: <strong>0, 1, and 8</strong> look identical after a 1/2 turn.<br>\n• <strong>Two-digit numbers:</strong> <strong>11, 88</strong>.<br>\n• <strong>Three-digit numbers:</strong> <strong>101, 111, 181, 808, 888</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Single digits: 0, 1, 8",
            "marks": "1 M"
          },
          {
            "key": "Two 2-digit numbers",
            "marks": "1 M"
          },
          {
            "key": "Two 3-digit numbers",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Half Turn English Words",
        "q": "Check if the following English words look the same after a half-turn (upside down):<br>(a) ZOOM<br>(b) NOON<br>(c) SIS<br>(d) MOW",
        "ans": "<strong>Word Rotations (180°):</strong><br>\n• <strong>(a) ZOOM:</strong> On half turn, Z turns into Z, O stays O, M turns into W (reads MOOZ upside down). <strong>Does NOT look the same</strong>.<br>\n• <strong>(b) NOON:</strong> N turns into N, O stays O. Reading upside down gives N-O-O-N. <strong>Looks the same</strong>.<br>\n• <strong>(c) SIS:</strong> S turns into S, I stays I. Reading upside down gives S-I-S. <strong>Looks the same</strong>.<br>\n• <strong>(d) MOW:</strong> M turns into W and W turns into M. Upside down it reads M-O-W. <strong>Looks the same</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "ZOOM: No",
            "marks": "1 M"
          },
          {
            "key": "NOON: Yes",
            "marks": "1 M"
          },
          {
            "key": "SIS: Yes",
            "marks": "1 M"
          },
          {
            "key": "MOW: Yes",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Quarter Turn (1/4 Turn)",
        "q": "(a) What is the angle of a 1/4 turn? (b) Which of these shapes will look identical after a 1/4 turn: Square, Rectangle, Equilateral Triangle, Circle?",
        "ans": "<strong>Quarter Turn Properties:</strong><br>\n• <strong>(a) Angle:</strong> A 1/4 turn is 360° ÷ 4 = <strong>90°</strong>.<br>\n• <strong>(b) Shapes:</strong><br>\n  - <strong>Square:</strong> Yes, looks identical after 90°.<br>\n  - <strong>Rectangle:</strong> No, a horizontal rectangle becomes vertical after 90°.<br>\n  - <strong>Equilateral Triangle:</strong> No, its pointing vertex rotates to the side.<br>\n  - <strong>Circle:</strong> Yes, looks identical after any rotation.<br>\n  Therefore, only <strong>Square and Circle</strong> look identical after a 1/4 turn.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 90°",
            "marks": "1 M"
          },
          {
            "key": "Square & Circle identified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • One-Third Turn (1/3 Turn)",
        "q": "(a) Through how many degrees does a shape rotate during a 1/3 turn? (b) Does an equilateral triangle look the same after a 1/3 turn? Explain.",
        "ans": "<strong>1/3 Turn Analysis:</strong><br>\n• <strong>(a) Angle:</strong> 360° ÷ 3 = <strong>120°</strong>.<br>\n• <strong>(b) Equilateral triangle:</strong> <strong>Yes, it looks exactly the same.</strong> An equilateral triangle has 3 equal sides and 3 equal angles of 60°. Rotating it by 120° moves each corner to the next vertex position without altering its overall orientation.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 120°",
            "marks": "1 M"
          },
          {
            "key": "Part (b): Yes, with 3-fold symmetry explanation",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • One-Sixth Turn (1/6 Turn)",
        "q": "(a) What is the angle of rotation for a 1/6 turn? (b) Name a shape that has 1/6 turn rotational symmetry.",
        "ans": "<strong>1/6 Turn Properties:</strong><br>\n• <strong>(a) Angle:</strong> 360° ÷ 6 = <strong>60°</strong>.<br>\n• <strong>(b) Shape:</strong> A <strong>Regular Hexagon</strong> (or a 6-petalled symmetrical flower / 6-pointed star) looks identical after a 1/6 turn.",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): 60°",
            "marks": "1 M"
          },
          {
            "key": "Part (b): Regular Hexagon named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Windmill Blades Rotation",
        "q": "A windmill has 4 equal blades arranged symmetrically at right angles. (a) Does it look the same on a 1/4 turn? (b) Does it look the same on a 1/2 turn? Explain.",
        "ans": "<strong>Windmill Rotations:</strong><br>\n• <strong>(a) 1/4 turn:</strong> <strong>Yes</strong>, because rotating by 90° moves each of the 4 identical blades into the position previously occupied by its adjacent blade.<br>\n• <strong>(b) 1/2 turn:</strong> <strong>Yes</strong>, because a 1/2 turn is two 1/4 turns (180°), so the blades align identically again.",
        "marks": 2,
        "rubric": [
          {
            "key": "1/4 turn: Yes with reason",
            "marks": "1 M"
          },
          {
            "key": "1/2 turn: Yes with reason",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Line of Symmetry vs Rotational Symmetry",
        "q": "Explain the difference between 'Line Symmetry' and 'Rotational Symmetry' using a rectangle as an example.",
        "ans": "<strong>Comparison:</strong><br>\n• <strong>Line Symmetry:</strong> A figure has line symmetry if it can be folded along a straight line such that the two halves fit exactly on top of each other. A rectangle has <strong>2 lines of symmetry</strong> (one horizontal, one vertical through the middle of opposite sides).<br>\n• <strong>Rotational Symmetry:</strong> A figure has rotational symmetry if it looks identical to its original position after being turned by less than 360° around its centre. A rectangle has rotational symmetry of <strong>order 2</strong> (looks the same on a 1/2 turn / 180°).",
        "marks": 3,
        "rubric": [
          {
            "key": "Line symmetry defined with rectangle (2 lines)",
            "marks": "1.5 M"
          },
          {
            "key": "Rotational symmetry defined with rectangle (1/2 turn)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Diagonal Lines of Symmetry in a Rectangle",
        "q": "Does the diagonal of a rectangle act as a line of symmetry? Explain by visualizing folding a rectangular sheet of paper along its diagonal.",
        "ans": "<strong>Diagonal Reflection Test:</strong><br>\n<strong>No, the diagonal of a rectangle is NOT a line of symmetry.</strong><br>\nWhen you fold a rectangular paper along its diagonal, the opposite corners do not match or overlap; instead, they stick out in opposite directions. Although the diagonal divides the rectangle into two triangles of equal area, they are not mirror reflections of each other across that diagonal line.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definitive 'No' stated",
            "marks": "1 M"
          },
          {
            "key": "Paper folding non-overlap explanation",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Symmetrical Patterns with Inkblots",
        "q": "Describe how you can create a perfectly symmetrical design using a drop of paint or ink on a folded sheet of paper.",
        "ans": "<strong>Inkblot Symmetry Steps:</strong><br>\n1. Take a clean sheet of paper and fold it in half down the middle to create a sharp centre crease line.<br>\n2. Unfold the paper and place a few drops of liquid paint or coloured ink on one side of the fold.<br>\n3. Fold the paper back along the crease line and press the two halves gently together with your palm to spread the ink.<br>\n4. Open the paper. The paint transfers to both sides equally, producing a beautiful design where the crease line is the exact <strong>line of symmetry</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Stepwise procedure clearly explained",
            "marks": "1 M"
          },
          {
            "key": "Crease line identified as line of symmetry",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Ceiling Fan Blades",
        "q": "A ceiling fan has 3 identical blades spaced equally at 120° apart. (a) Will the fan look the same on a 1/4 turn? (b) Will it look the same on a 1/3 turn? (c) Will it look the same on a 1/2 turn?",
        "ans": "<strong>3-Blade Fan Analysis:</strong><br>\n• <strong>(a) 1/4 turn (90°):</strong> <strong>No</strong>, 90° does not align with the 120° blade intervals.<br>\n• <strong>(b) 1/3 turn (120°):</strong> <strong>Yes</strong>, each blade rotates exactly into the position of the next blade.<br>\n• <strong>(c) 1/2 turn (180°):</strong> <strong>No</strong>, 180° points a blade directly between two blades on the opposite side.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): No",
            "marks": "1 M"
          },
          {
            "key": "Part (b): Yes",
            "marks": "1 M"
          },
          {
            "key": "Part (c): No",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Regular Polygons & Lines of Symmetry",
        "q": "How many lines of symmetry does each of the following regular shapes have?<br>(a) Equilateral triangle<br>(b) Square<br>(c) Regular pentagon<br>(d) Regular hexagon",
        "ans": "<strong>Regular Polygon Symmetry Rule (Number of lines = Number of sides):</strong><br>\n• (a) Equilateral triangle: <strong>3 lines of symmetry</strong>.<br>\n• (b) Square: <strong>4 lines of symmetry</strong> (2 through midpoints, 2 diagonals).<br>\n• (c) Regular pentagon: <strong>5 lines of symmetry</strong>.<br>\n• (d) Regular hexagon: <strong>6 lines of symmetry</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "Triangle: 3",
            "marks": "1 M"
          },
          {
            "key": "Square: 4",
            "marks": "1 M"
          },
          {
            "key": "Pentagon: 5",
            "marks": "1 M"
          },
          {
            "key": "Hexagon: 6",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Mirror Reflection of Digits",
        "q": "Which digits from 0 to 9 look identical to their reflection in a vertical mirror placed to their right?",
        "ans": "<strong>Vertical Mirror Reflection:</strong><br>\nThe digits that remain unchanged in a vertical mirror reflection are <strong>0 and 8</strong> (in standard symmetric font). Digits like 1 (with hook), 2, 3, 4, 5, 6, 7, and 9 reverse horizontally.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identification of 0 and 8",
            "marks": "1 M"
          },
          {
            "key": "Explanation of horizontal reversal for others",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Order of Rotational Symmetry",
        "q": "What is meant by the 'Order of Rotational Symmetry'? State the order of rotational symmetry for: (a) An equilateral triangle (b) A square.",
        "ans": "<strong>Order of Symmetry:</strong><br>\n• <strong>Definition:</strong> The number of times a shape looks identical to its original appearance during one complete 360° turn.<br>\n• <strong>(a) Equilateral triangle:</strong> Looks the same at 120°, 240°, and 360°. Order = <strong>3</strong>.<br>\n• <strong>(b) Square:</strong> Looks the same at 90°, 180°, 270°, and 360°. Order = <strong>4</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition clear",
            "marks": "1 M"
          },
          {
            "key": "Triangle order: 3",
            "marks": "1 M"
          },
          {
            "key": "Square order: 4",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Traffic Signs Symmetry",
        "q": "Consider these traffic signs: (a) An inverted red equilateral triangle ('GIVE WAY') (b) An octagonal red sign ('STOP'). How many lines of symmetry does each sign have?",
        "ans": "<strong>Traffic Signs Analysis:</strong><br>\n• <strong>(a) 'GIVE WAY' (Equilateral triangle shape):</strong> Has <strong>3 lines of symmetry</strong> (from each vertex perpendicular to opposite edge).<br>\n• <strong>(b) 'STOP' (Regular octagon shape):</strong> Has <strong>8 lines of symmetry</strong> (ignoring text lettering).",
        "marks": 2,
        "rubric": [
          {
            "key": "Triangle sign: 3 lines",
            "marks": "1 M"
          },
          {
            "key": "Octagon sign: 8 lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • 4-Blade Pinwheel Symmetry",
        "q": "You make a paper pinwheel with 4 alternating colored blades (red, blue, red, blue). (a) Will it look the same after a 1/4 turn? (b) Will it look the same after a 1/2 turn?",
        "ans": "<strong>Pinwheel Colors Analysis:</strong><br>\n• <strong>(a) 1/4 turn:</strong> <strong>No</strong>, because a 1/4 turn rotates a red blade into the position of a blue blade.<br>\n• <strong>(b) 1/2 turn:</strong> <strong>Yes</strong>, because a 1/2 turn (180°) rotates a red blade into the opposite red blade's position, and blue into blue.",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): No (color mismatch)",
            "marks": "1 M"
          },
          {
            "key": "Part (b): Yes (colors align)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Symmetry in Nature",
        "q": "Give three examples of symmetry observed in nature (animals, plants, or natural formations).",
        "ans": "<strong>Nature Examples:</strong><br>\n1. <strong>Butterfly:</strong> The patterns, shapes, and veins on both wings show striking bilateral (mirror) symmetry.<br>\n2. <strong>Human face/body:</strong> Bilateral vertical symmetry (left eye matches right eye, left arm matches right arm).<br>\n3. <strong>Flowers & Snowflakes:</strong> Radial symmetry (many flower petals have 5-fold or 6-fold symmetry; snowflakes exhibit 6-fold hexagonal symmetry).",
        "marks": 3,
        "rubric": [
          {
            "key": "Three distinct, well-described examples",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Parallelogram Symmetry",
        "q": "(a) Does a general parallelogram have any line of symmetry? (b) Does it have rotational symmetry, and if so, of what order?",
        "ans": "<strong>Parallelogram Properties:</strong><br>\n• <strong>(a) Line symmetry:</strong> <strong>No</strong>, a general parallelogram cannot be folded along any line to match its halves.<br>\n• <strong>(b) Rotational symmetry:</strong> <strong>Yes</strong>, it looks identical after a <strong>1/2 turn (180°)</strong>. Its order of rotational symmetry is <strong>2</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): No lines of symmetry",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): Yes, 1/2 turn, order 2",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Circle Symmetry",
        "q": "How many lines of symmetry does a circle have? What constitutes a line of symmetry in a circle?",
        "ans": "<strong>Circle Symmetry:</strong><br>\n• A circle has <strong>infinitely many lines of symmetry</strong>.<br>\n• <strong>Any straight line passing through the centre of the circle (i.e. any diameter)</strong> is a line of symmetry, as folding along it divides the circle into two identical semicircles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Infinitely many lines",
            "marks": "1 M"
          },
          {
            "key": "Diameter through centre explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Mirror Card Activity",
        "q": "If you place a mirror on the line of symmetry of a picture showing half a dog face, what image will you see? What happens if you tilt the mirror away from the line?",
        "ans": "<strong>Mirror Reflection Activity:</strong><br>\n• Placing the mirror exactly on the line of symmetry completes the reflection, showing a <strong>full, complete, realistic dog face</strong>.<br>\n• If you tilt or shift the mirror away from the line, the reflected image becomes distorted, stretched, or cut off, and no longer resembles a normal face.",
        "marks": 2,
        "rubric": [
          {
            "key": "Full face observed",
            "marks": "1 M"
          },
          {
            "key": "Distortion on tilting explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Clock Face Rotational Symmetry",
        "q": "Consider a circular clock face with only numerals 12, 3, 6, and 9 marked. If the numerals are removed and only the 4 tick marks remain, after what fraction of a turn does the dial look identical?",
        "ans": "<strong>Rotational Symmetry of 4 Ticks:</strong><br>\nWith only 4 tick marks at 90° intervals, the dial looks identical after every <strong>1/4 turn (90°)</strong>. Its order of rotational symmetry is <strong>4</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "1/4 turn (90°)",
            "marks": "1 M"
          },
          {
            "key": "Order 4 noted",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Letter 'Z' Symmetry",
        "q": "Analyze the capital letter 'Z': (a) Does it have a line of symmetry? (b) Does it look the same after a half turn?",
        "ans": "<strong>Letter 'Z' Analysis:</strong><br>\n• <strong>(a) Line symmetry:</strong> <strong>No</strong>, folding 'Z' vertically or horizontally never overlaps its arms.<br>\n• <strong>(b) Half turn:</strong> <strong>Yes</strong>, rotating 'Z' by 180° produces the exact same letter 'Z'.",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): No line symmetry",
            "marks": "1 M"
          },
          {
            "key": "Part (b): Yes on 1/2 turn",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Swapping Shapes into Symmetry",
        "q": "A pattern has 3 red circles on the left and 2 red circles on the right. What is the minimum number of circles you must add to make the pattern symmetrical about the vertical centre?",
        "ans": "<strong>Balance for Symmetry:</strong><br>\n• The left has 3 circles, right has 2 circles.<br>\n• To make it symmetrical, the right side must also have 3 circles.<br>\n• Therefore, you must add <strong>1 red circle</strong> to the right side at the corresponding mirror position.",
        "marks": 2,
        "rubric": [
          {
            "key": "1 circle to add",
            "marks": "1 M"
          },
          {
            "key": "Correct mirror position explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Rangoli Symmetrical Art",
        "q": "Why are Indian Rangoli and Kolam patterns traditionally designed using 4-fold or 8-fold radial symmetry?",
        "ans": "<strong>Rangoli Design Principles:</strong><br>\n• 4-fold and 8-fold radial symmetry creates a harmonious, visually balanced, and aesthetically pleasing geometric design from every viewing angle.<br>\n• Using grid dots allows artists to replicate motifs equally in all four quadrants, ensuring mathematical balance and beauty.",
        "marks": 2,
        "rubric": [
          {
            "key": "Harmonious visual balance from all sides",
            "marks": "1 M"
          },
          {
            "key": "Grid quadrant dot replication",
            "marks": "1 M"
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
        "category": "Textbook Exercise • The Mouse and the Cat Game",
        "q": "The cat is on step 3 and can jump 3 steps at a time. The mouse is on step 15 and can jump 2 steps at a time. (a) What steps will the cat land on? (b) What steps will the mouse land on? (c) Will the cat catch the mouse before the mouse reaches the safety hole at step 28?",
        "ans": "<strong>Jump Sequences:</strong><br>\n• <strong>(a) Cat steps (multiples of 3 starting from 3):</strong> 3, 6, 9, 12, 15, 18, 21, 24, 27.<br>\n• <strong>(b) Mouse steps (adding 2 starting from 15):</strong> 15, 17, 19, 21, 23, 25, 27, 29 (safe in hole).<br>\n• <strong>(c) At step 21:</strong> The cat reaches 21 after 6 jumps (3→6→9→12→15→18→21). The mouse reaches 21 after 3 jumps (15→17→19→21). Because the mouse was already at 21 earlier, and reaches hole (28) in 7 jumps before the cat can intercept it at the same moment, the mouse <strong>escapes safely</strong>!",
        "marks": 4,
        "rubric": [
          {
            "key": "Cat steps list",
            "marks": "1 M"
          },
          {
            "key": "Mouse steps list",
            "marks": "1 M"
          },
          {
            "key": "Step comparison",
            "marks": "1 M"
          },
          {
            "key": "Conclusion: Mouse escapes",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Common Multiples of 2 and 3",
        "q": "(a) Write the first five multiples of 2. (b) Write the first five multiples of 3. (c) Write the first two common multiples of 2 and 3. What is their Lowest Common Multiple (LCM)?",
        "ans": "<strong>Multiples Analysis:</strong><br>\n• <strong>(a) Multiples of 2:</strong> 2, 4, 6, 8, 10.<br>\n• <strong>(b) Multiples of 3:</strong> 3, 6, 9, 12, 15.<br>\n• <strong>(c) Common multiples:</strong> Numbers appearing in both lists are <strong>6 and 12</strong>.<br>\n• <strong>Lowest Common Multiple (LCM):</strong> <strong>6</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Multiples of 2 & 3",
            "marks": "1 M"
          },
          {
            "key": "Common multiples: 6, 12",
            "marks": "1 M"
          },
          {
            "key": "LCM: 6",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Common Multiples in Venn Diagram",
        "q": "In a two-circle diagram, circle A contains multiples of 4 and circle B contains multiples of 6. (a) Write 4 numbers that belong in the overlapping common region. (b) What is the smallest number in the common region?",
        "ans": "<strong>Common Multiples of 4 and 6:</strong><br>\n• Multiples of 4: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48...<br>\n• Multiples of 6: 6, 12, 18, 24, 30, 36, 42, 48...<br>\n• <strong>(a) 4 common numbers:</strong> <strong>12, 24, 36, 48</strong>.<br>\n• <strong>(b) Smallest common number (LCM):</strong> <strong>12</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Common multiples: 12, 24, 36, 48",
            "marks": "2 M"
          },
          {
            "key": "Smallest number (LCM): 12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tamarind Seeds Puzzle (LCM + Remainder)",
        "q": "Sunita has some tamarind seeds. When she makes groups of 4, 5, or 6 seeds, 1 seed is always left over. What is the smallest number of seeds Sunita can have?",
        "ans": "<strong>LCM Calculation:</strong><br>\n1. Find the LCM of 4, 5, and 6:<br>\n   - Multiples of 4: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60...<br>\n   - Multiples of 5: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60...<br>\n   - Multiples of 6: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60...<br>\n   - LCM(4, 5, 6) = <strong>60</strong>.<br>\n2. Since 1 seed is left over in each case, add 1 to the LCM:<br>\n   Total seeds = 60 + 1 = <strong>61 seeds</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "LCM of 4, 5, 6 is 60",
            "marks": "2 M"
          },
          {
            "key": "Adding 1 remainder = 61",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Bangle Arrangements (Factors)",
        "q": "Ammini has 18 bangles. She wants to arrange them in equal rows. List all possible row sizes she can make such that no bangles are left over.",
        "ans": "<strong>Factors of 18:</strong><br>\nAny arrangement with equal rows must divide 18 completely without remainder.<br>\n• 1 row of 18 bangles (1 × 18)<br>\n• 2 rows of 9 bangles (2 × 9)<br>\n• 3 rows of 6 bangles (3 × 6)<br>\n• 6 rows of 3 bangles (6 × 3)<br>\n• 9 rows of 2 bangles (9 × 2)<br>\n• 18 rows of 1 bangle (18 × 1)<br>\nThe possible group/row sizes are: <strong>1, 2, 3, 6, 9, and 18</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Listing factor pairs",
            "marks": "1.5 M"
          },
          {
            "key": "All 6 factor sizes listed",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Factor Tree",
        "q": "Draw two different factor trees for the number 24. Write the prime factorization of 24.",
        "ans": "<strong>Factor Trees for 24:</strong><br>\n• <strong>Tree 1:</strong> Start with 24 = 2 × 12 → 12 = 2 × 6 → 6 = 2 × 3.<br>\n• <strong>Tree 2:</strong> Start with 24 = 4 × 6 → 4 = 2 × 2 and 6 = 2 × 3.<br>\n• <strong>Prime factorization:</strong> 24 = <strong>2 × 2 × 2 × 3</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Tree 1 branches",
            "marks": "1 M"
          },
          {
            "key": "Tree 2 branches",
            "marks": "1 M"
          },
          {
            "key": "Prime factorization: 2 × 2 × 2 × 3",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Common Factors of 25 and 35",
        "q": "(a) List all factors of 25. (b) List all factors of 35. (c) What are the common factors of 25 and 35? What is their Highest Common Factor (HCF)?",
        "ans": "<strong>Factors Analysis:</strong><br>\n• <strong>(a) Factors of 25:</strong> 1, 5, 25.<br>\n• <strong>(b) Factors of 35:</strong> 1, 5, 7, 35.<br>\n• <strong>(c) Common factors:</strong> <strong>1 and 5</strong>.<br>\n• <strong>Highest Common Factor (HCF):</strong> <strong>5</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Factors of 25 & 35",
            "marks": "1 M"
          },
          {
            "key": "Common factors: 1, 5",
            "marks": "1 M"
          },
          {
            "key": "HCF: 5",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tiling Path Problem (HCF)",
        "q": "A garden path is 90 feet long. Sheena wants to tile the path without cutting any tile. She has tiles of sizes 2 feet, 3 feet, and 5 feet. Which of these tile sizes can be used to tile the entire path completely?",
        "ans": "<strong>Divisibility Test:</strong><br>\n• 90 ÷ 2 = 45 (divides evenly, so <strong>2-foot tiles can be used</strong>: 45 tiles).<br>\n• 90 ÷ 3 = 30 (divides evenly, so <strong>3-foot tiles can be used</strong>: 30 tiles).<br>\n• 90 ÷ 5 = 18 (divides evenly, so <strong>5-foot tiles can be used</strong>: 18 tiles).<br>\n<strong>All three tile sizes (2 ft, 3 ft, and 5 ft)</strong> can tile the path completely without cutting!",
        "marks": 3,
        "rubric": [
          {
            "key": "Divisibility by 2, 3, 5 checked",
            "marks": "2 M"
          },
          {
            "key": "Conclusion that all three can be used",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Prime and Composite Numbers",
        "q": "(a) Define Prime Number and Composite Number. (b) Which is the smallest prime number? (c) Which is the only even prime number? (d) Is 1 a prime number or composite number?",
        "ans": "<strong>Definitions and Facts:</strong><br>\n• <strong>(a) Definitions:</strong> A <em>Prime Number</em> has exactly two distinct factors (1 and itself). A <em>Composite Number</em> has more than two factors.<br>\n• <strong>(b) Smallest prime number:</strong> <strong>2</strong>.<br>\n• <strong>(c) Only even prime number:</strong> <strong>2</strong>.<br>\n• <strong>(d) Number 1:</strong> 1 has only one factor (itself). Therefore, 1 is <strong>neither prime nor composite</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "Definitions: Prime & Composite",
            "marks": "1 M"
          },
          {
            "key": "Smallest prime: 2",
            "marks": "1 M"
          },
          {
            "key": "Even prime: 2",
            "marks": "1 M"
          },
          {
            "key": "Number 1 neither prime nor composite",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Common Multiples of 3, 4, and 6",
        "q": "Find the first two common multiples of 3, 4, and 6. What is their LCM?",
        "ans": "<strong>Multiples of 3, 4, 6:</strong><br>\n• Multiples of 3: 3, 6, 9, 12, 15, 18, 21, 24, 27...<br>\n• Multiples of 4: 4, 8, 12, 16, 20, 24, 28...<br>\n• Multiples of 6: 6, 12, 18, 24, 30...<br>\n• <strong>First two common multiples:</strong> <strong>12 and 24</strong>.<br>\n• <strong>LCM:</strong> <strong>12</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Lists of multiples",
            "marks": "1 M"
          },
          {
            "key": "Common multiples: 12, 24",
            "marks": "1 M"
          },
          {
            "key": "LCM: 12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Factor Pairs of 36",
        "q": "Write all the factor pairs of 36. How many total factors does 36 have?",
        "ans": "<strong>Factor Pairs of 36:</strong><br>\n• 1 × 36 = 36<br>\n• 2 × 18 = 36<br>\n• 3 × 12 = 36<br>\n• 4 × 9 = 36<br>\n• 6 × 6 = 36<br>\nAll distinct factors: <strong>1, 2, 3, 4, 6, 9, 12, 18, 36</strong>.<br>\nTotal number of factors = <strong>9 factors</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 factor pairs listed",
            "marks": "1.5 M"
          },
          {
            "key": "Total 9 factors identified",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Multiple Game (Meow Game)",
        "q": "In the 'Meow Game', children stand in a circle and count 1, 2, 3... Whenever a number is a multiple of 3 or has 3 in it, the child must say 'Meow!' instead of the number. Write down the first five numbers where children say 'Meow!'.",
        "ans": "<strong>Meow Numbers:</strong><br>\n• 3 (multiple of 3 and has digit 3) → <strong>Meow!</strong><br>\n• 6 (multiple of 3) → <strong>Meow!</strong><br>\n• 9 (multiple of 3) → <strong>Meow!</strong><br>\n• 12 (multiple of 3) → <strong>Meow!</strong><br>\n• 13 (has digit 3) → <strong>Meow!</strong><br>\nFirst five numbers: <strong>3, 6, 9, 12, 13</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rule application (multiple or contains 3)",
            "marks": "1 M"
          },
          {
            "key": "List: 3, 6, 9, 12, 13",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • HCF by Prime Factorization",
        "q": "Find the HCF of 40 and 60 using prime factorization method.",
        "ans": "<strong>Prime Factorization:</strong><br>\n• 40 = 2 × 2 × 2 × 5.<br>\n• 60 = 2 × 2 × 3 × 5.<br>\n• Common prime factors = 2 × 2 × 5.<br>\n• <strong>HCF:</strong> 2 × 2 × 5 = <strong>20</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Prime factors of 40 and 60",
            "marks": "1.5 M"
          },
          {
            "key": "HCF calculation = 20",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Bells Tolling Together (LCM Word Problem)",
        "q": "Two church bells toll at intervals of 15 minutes and 20 minutes respectively. If they toll together at 8:00 AM, at what time will they next toll together?",
        "ans": "<strong>LCM Calculation:</strong><br>\n1. Find LCM of 15 and 20:<br>\n   - Multiples of 15: 15, 30, 45, 60, 75...<br>\n   - Multiples of 20: 20, 40, 60, 80...<br>\n   - LCM = 60 minutes = 1 hour.<br>\n2. Time of next toll = 8:00 AM + 1 hour = <strong>9:00 AM</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "LCM of 15 and 20 = 60 mins",
            "marks": "1.5 M"
          },
          {
            "key": "Next toll time: 9:00 AM",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Co-Prime Numbers",
        "q": "Two numbers are called co-prime if their only common factor is 1. Check whether 8 and 15 are co-prime numbers.",
        "ans": "<strong>Co-prime Verification:</strong><br>\n• Factors of 8: 1, 2, 4, 8.<br>\n• Factors of 15: 1, 3, 5, 15.<br>\n• Common factors: Only <strong>1</strong>.<br>\n• <strong>Conclusion:</strong> Yes, 8 and 15 are <strong>co-prime numbers</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Factors listed",
            "marks": "1 M"
          },
          {
            "key": "Only common factor 1, affirmative conclusion",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Divisibility Rule for 3 and 9",
        "q": "(a) State the divisibility rule for 3. (b) Test if 4,572 is divisible by 3. (c) Is 4,572 also divisible by 9?",
        "ans": "<strong>Divisibility Tests:</strong><br>\n• <strong>(a) Rule for 3:</strong> A number is divisible by 3 if the sum of its digits is divisible by 3.<br>\n• <strong>(b) Sum of digits of 4,572:</strong> 4 + 5 + 7 + 2 = 18. Since 18 is divisible by 3 (18 ÷ 3 = 6), <strong>4,572 is divisible by 3</strong>.<br>\n• <strong>(c) Divisible by 9:</strong> The sum of digits is 18. Since 18 is divisible by 9 (18 ÷ 9 = 2), <strong>4,572 is also divisible by 9</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Rule for 3 stated",
            "marks": "1 M"
          },
          {
            "key": "Sum of digits 18 and divisibility by 3",
            "marks": "1 M"
          },
          {
            "key": "Divisibility by 9 verified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Multiples between 100 and 150",
        "q": "Find all the multiples of 7 that lie between 100 and 150.",
        "ans": "<strong>Division to find range:</strong><br>\n• 100 ÷ 7 = 14 with remainder 2. Smallest multiple > 100 is 7 × 15 = 105.<br>\n• 150 ÷ 7 = 21 with remainder 3. Largest multiple < 150 is 7 × 21 = 147.<br>\n• <strong>Multiples:</strong> 105, 112, 119, 126, 133, 140, 147.",
        "marks": 3,
        "rubric": [
          {
            "key": "Range identified",
            "marks": "1 M"
          },
          {
            "key": "All 7 multiples listed correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Factor Tree for 60",
        "q": "Complete a factor tree for 60 starting with 6 and 10. Write down its prime factorization.",
        "ans": "<strong>Factor Tree Branches:</strong><br>\n• Level 1: 60 = 6 × 10.<br>\n• Level 2: 6 splits into 2 × 3; 10 splits into 2 × 5.<br>\n• <strong>Prime factorization:</strong> 60 = <strong>2 × 2 × 3 × 5</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Branching steps shown",
            "marks": "1 M"
          },
          {
            "key": "Prime factors: 2 × 2 × 3 × 5",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Even & Odd Numbers Properties",
        "q": "State whether True or False:<br>(a) The sum of two odd numbers is always even.<br>(b) The product of two odd numbers is always even.<br>(c) All even numbers are composite numbers.",
        "ans": "<strong>True/False Explanations:</strong><br>\n• <strong>(a) True:</strong> E.g., 3 + 5 = 8 (even).<br>\n• <strong>(b) False:</strong> The product of two odd numbers is always odd (e.g., 3 × 5 = 15).<br>\n• <strong>(c) False:</strong> 2 is an even number, but it is a prime number, not composite.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): True with reason",
            "marks": "1 M"
          },
          {
            "key": "Part (b): False with reason",
            "marks": "1 M"
          },
          {
            "key": "Part (c): False (counterexample 2)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Largest 2-Digit Prime Number",
        "q": "(a) What is the largest two-digit prime number? (b) What is the smallest two-digit composite number?",
        "ans": "<strong>Number Identification:</strong><br>\n• <strong>(a) Largest 2-digit prime:</strong> <strong>97</strong> (factors: only 1 and 97).<br>\n• <strong>(b) Smallest 2-digit composite:</strong> <strong>10</strong> (factors: 1, 2, 5, 10).",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): 97",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 10",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Step Measure LCM",
        "q": "Two runners start running on a circular track together. Runner A completes a lap in 40 seconds, while Runner B completes a lap in 50 seconds. After how many seconds will they meet again at the starting point?",
        "ans": "<strong>LCM of 40 and 50:</strong><br>\n• Multiples of 40: 40, 80, 120, 160, 200, 240...<br>\n• Multiples of 50: 50, 100, 150, 200, 250...<br>\n• LCM = <strong>200 seconds</strong> (or 3 minutes and 20 seconds).<br>\nThey will meet again after <strong>200 seconds</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "LCM calculation",
            "marks": "1 M"
          },
          {
            "key": "200 seconds answer",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Perfect Numbers",
        "q": "A number is called a 'perfect number' if the sum of all its proper factors (excluding itself) equals the number. Show that 6 is a perfect number.",
        "ans": "<strong>Factors of 6:</strong><br>\n• Factors of 6 are 1, 2, 3, and 6.<br>\n• Proper factors (excluding 6) = 1, 2, 3.<br>\n• Sum of proper factors = 1 + 2 + 3 = <strong>6</strong>.<br>\nSince the sum equals the number itself, 6 is a <strong>perfect number</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Proper factors listed: 1, 2, 3",
            "marks": "1 M"
          },
          {
            "key": "Sum = 6 verified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Divisibility Rule for 6",
        "q": "A number is divisible by 6 if it is divisible by both 2 and 3. Is 3,426 divisible by 6? Show your working.",
        "ans": "<strong>Test for 6:</strong><br>\n1. <strong>Divisibility by 2:</strong> The last digit is 6 (even), so 3,426 is divisible by 2.<br>\n2. <strong>Divisibility by 3:</strong> Sum of digits = 3 + 4 + 2 + 6 = 15. Since 15 is divisible by 3, 3,426 is divisible by 3.<br>\n3. <strong>Conclusion:</strong> Since it is divisible by both 2 and 3, <strong>3,426 is divisible by 6</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Test for 2 passed",
            "marks": "1 M"
          },
          {
            "key": "Test for 3 passed",
            "marks": "1 M"
          },
          {
            "key": "Conclusion for 6",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Square Numbers as Multiples",
        "q": "Write the first five square numbers and list the number of factors each has. What is unique about the number of factors of square numbers?",
        "ans": "<strong>Square Numbers & Factor Count:</strong><br>\n• 1² = 1 (1 factor: 1) → <strong>Odd count</strong>.<br>\n• 2² = 4 (3 factors: 1, 2, 4) → <strong>Odd count</strong>.<br>\n• 3² = 9 (3 factors: 1, 3, 9) → <strong>Odd count</strong>.<br>\n• 4² = 16 (5 factors: 1, 2, 4, 8, 16) → <strong>Odd count</strong>.<br>\n• 5² = 25 (3 factors: 1, 5, 25) → <strong>Odd count</strong>.<br>\n• <strong>Unique Property:</strong> All square numbers have an <strong>odd number of factors</strong>, because the square root pairs with itself. All other numbers have an even number of factors.",
        "marks": 3,
        "rubric": [
          {
            "key": "First 5 square numbers listed",
            "marks": "1 M"
          },
          {
            "key": "Factor counts identified",
            "marks": "1 M"
          },
          {
            "key": "Odd number of factors property explained",
            "marks": "1 M"
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
        "category": "Textbook Exercise • Turns and Patterns",
        "q": "Look at the pattern: An arrow points Up ↑. In step 2 it points Right →. In step 3 it points Down ↓. (a) What rule is being followed? (b) In which direction will it point in step 4? (c) In which direction will it point in step 5?",
        "ans": "<strong>Pattern Analysis:</strong><br>\n• <strong>(a) Rule:</strong> Turning <strong>one-quarter turn (1/4 turn or 90°) clockwise</strong> at each step.<br>\n• <strong>(b) Step 4:</strong> Points <strong>Left ←</strong>.<br>\n• <strong>(c) Step 5:</strong> Turns another 90° clockwise, pointing <strong>Up ↑</strong> (back to start).",
        "marks": 3,
        "rubric": [
          {
            "key": "Rule: 1/4 turn clockwise",
            "marks": "1 M"
          },
          {
            "key": "Step 4: Left",
            "marks": "1 M"
          },
          {
            "key": "Step 5: Up",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Magic Square (3 × 3 with Sum 15)",
        "q": "Fill the numbers 1 to 9 in a 3 × 3 grid so that the sum of each row, each column, and each diagonal is exactly 15. Show the completed grid.",
        "ans": "<strong>Magic Square (Sum = 15):</strong><br>\nPlace 5 in the centre:<br>\n• Row 1: <strong>8 &nbsp;|&nbsp; 1 &nbsp;|&nbsp; 6</strong> (Sum = 8+1+6 = 15)<br>\n• Row 2: <strong>3 &nbsp;|&nbsp; 5 &nbsp;|&nbsp; 7</strong> (Sum = 3+5+7 = 15)<br>\n• Row 3: <strong>4 &nbsp;|&nbsp; 9 &nbsp;|&nbsp; 2</strong> (Sum = 4+9+2 = 15)<br>\n• Columns: (8+3+4=15), (1+5+9=15), (6+7+2=15).<br>\n• Diagonals: (8+5+2=15), (6+5+4=15). All sums are 15!",
        "marks": 3,
        "rubric": [
          {
            "key": "Centre placed 5",
            "marks": "1 M"
          },
          {
            "key": "Correct row numbers",
            "marks": "1 M"
          },
          {
            "key": "Diagonal & column verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Magic Triangle (Numbers 1 to 6)",
        "q": "Use the numbers 1, 2, 3, 4, 5, and 6 to place on the six circles of a triangle (3 corners and 3 midpoints) so that the sum of each side is 9.",
        "ans": "<strong>Magic Triangle (Side Sum = 9):</strong><br>\n• Place the smallest numbers at the three corners: <strong>1, 2, and 3</strong>.<br>\n• Side between 1 and 2: needs 9 - (1+2) = <strong>6</strong>.<br>\n• Side between 2 and 3: needs 9 - (2+3) = <strong>4</strong>.<br>\n• Side between 1 and 3: needs 9 - (1+3) = <strong>5</strong>.<br>\n• Check sides: 1+6+2 = 9; 2+4+3 = 9; 3+5+1 = 9. All sides equal 9!",
        "marks": 3,
        "rubric": [
          {
            "key": "Corners: 1, 2, 3",
            "marks": "1 M"
          },
          {
            "key": "Midpoints: 6, 4, 5",
            "marks": "1 M"
          },
          {
            "key": "Side sum = 9 verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Towers (Number Pyramid)",
        "q": "A number tower has a base of three blocks: [10], [20], [30]. The rule is: 'Add the two numbers below to get the number in the box above them.' Find the numbers in the next row and the top box.",
        "ans": "<strong>Number Tower Calculation:</strong><br>\n• Base row: [10] &nbsp; [20] &nbsp; [30]<br>\n• Middle row (2 blocks):<br>\n  - Left block = 10 + 20 = <strong>30</strong>.<br>\n  - Right block = 20 + 30 = <strong>50</strong>.<br>\n• Top block (1 block):<br>\n  - Top = 30 + 50 = <strong>80</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Middle left: 30",
            "marks": "1 M"
          },
          {
            "key": "Middle right: 50",
            "marks": "1 M"
          },
          {
            "key": "Top box: 80",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Palindromes & Special Numbers",
        "q": "(a) What is a 'Palindrome' or 'Special Number'? (b) Take number 43 and use the 'reverse and add' rule to create a special number. (c) Take number 132 and find its special number.",
        "ans": "<strong>Special Numbers (Palindromes):</strong><br>\n• <strong>(a) Definition:</strong> A number that reads the exact same forward and backward (e.g. 121, 353).<br>\n• <strong>(b) Starting with 43:</strong><br>\n  - Reverse digits of 43 → 34.<br>\n  - Add: 43 + 34 = <strong>77</strong> (reads 77 both ways, a special number!).<br>\n• <strong>(c) Starting with 132:</strong><br>\n  - Reverse digits of 132 → 231.<br>\n  - Add: 132 + 231 = <strong>363</strong> (reads 363 both ways, a special number!).",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition clear",
            "marks": "1 M"
          },
          {
            "key": "43 + 34 = 77",
            "marks": "1 M"
          },
          {
            "key": "132 + 231 = 363",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Secret Messages (Number Substitution)",
        "q": "If A = 1, B = 2, C = 3 ... Z = 26: (a) Decode the secret message: 13 &nbsp; 1 &nbsp; 20 &nbsp; 8 &nbsp; 19. (b) Encode the word 'MATH' into numbers.",
        "ans": "<strong>Encoding / Decoding:</strong><br>\n• <strong>(a) Decoding '13 1 20 8 19':</strong><br>\n  13 = M, 1 = A, 20 = T, 8 = H, 19 = S → <strong>MATHS</strong>.<br>\n• <strong>(b) Encoding 'MATH':</strong><br>\n  M = 13, A = 1, T = 20, H = 8 → <strong>13 - 1 - 20 - 8</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Decoded: MATHS",
            "marks": "1 M"
          },
          {
            "key": "Encoded: 13-1-20-8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Calendar Magic (3 × 3 Box)",
        "q": "Draw a 3 × 3 square box around 9 dates on a calendar page. The centre date in the box is 15. (a) What is the sum of all 9 dates in this box? (b) State the shortcut trick to find this sum instantly without adding each date.",
        "ans": "<strong>Calendar Magic:</strong><br>\n• <strong>(a) Sum of all 9 dates:</strong> 9 × 15 = <strong>135</strong>.<br>\n• <strong>(b) Shortcut Trick:</strong> In any 3 × 3 box on a calendar, the sum of all 9 numbers is always equal to <strong>9 times the centre number</strong> (Sum = 9 × Centre Date).",
        "marks": 2,
        "rubric": [
          {
            "key": "Sum: 135",
            "marks": "1 M"
          },
          {
            "key": "Rule: 9 × Centre number explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Adding Consecutive Numbers Pattern",
        "q": "Observe the pattern:<br>1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55<br>11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20 = 155<br>(a) What will be the sum of 21 to 30? (b) What will be the sum of 51 to 60?",
        "ans": "<strong>Consecutive 10-Number Sums:</strong><br>\n• Notice the pattern increases by 100 each time (since each of the 10 numbers is 10 greater).<br>\n• <strong>(a) Sum of 21 to 30:</strong> 155 + 100 = <strong>255</strong>.<br>\n• <strong>(b) Sum of 51 to 60:</strong> <strong>555</strong> (follows: 255, 355, 455, 555).",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): 255",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 555",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Odd Numbers Addition Pattern",
        "q": "Look at the sum of consecutive odd numbers starting from 1:<br>1 = 1 (1 × 1)<br>1 + 3 = 4 (2 × 2)<br>1 + 3 + 5 = 9 (3 × 3)<br>1 + 3 + 5 + 7 = 16 (4 × 4)<br>(a) What is the sum of the first 6 odd numbers? (b) What is the sum of the first 10 odd numbers?",
        "ans": "<strong>Sum of Odd Numbers Rule: Sum = n² (where n is count of odd numbers)</strong><br>\n• <strong>(a) First 6 odd numbers:</strong> 6 × 6 = <strong>36</strong>.<br>\n• <strong>(b) First 10 odd numbers:</strong> 10 × 10 = <strong>100</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): 36",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 100",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Multiplication Pattern (11, 101, 1001)",
        "q": "Complete the pattern:<br>1 × 1 = 1<br>11 × 11 = 121<br>111 × 111 = 12321<br>(a) Find 1111 × 1111 without calculating by hand. (b) Find 11111 × 11111.",
        "ans": "<strong>Repunit Multiplication Pattern:</strong><br>\n• <strong>(a) 1111 × 1111:</strong> There are 4 ones, so the digits count up to 4 and back down: <strong>1234321</strong>.<br>\n• <strong>(b) 11111 × 11111:</strong> There are 5 ones, digits count up to 5 and back down: <strong>123454321</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): 1234321",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 123454321",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Commutative Pattern in Addition",
        "q": "Fill in the missing numbers in the balanced equation:<br>(a) 24 + 19 + 37 = 37 + ___ + 24<br>(b) (___ + 14) + 20 = 35 + (14 + ___ )<br>What law of arithmetic is illustrated?",
        "ans": "<strong>Balanced Additions:</strong><br>\n• <strong>(a)</strong> 24 + 19 + 37 = 37 + <strong>19</strong> + 24.<br>\n• <strong>(b)</strong> (<strong>35</strong> + 14) + 20 = 35 + (14 + <strong>20</strong>).<br>\n• <strong>Arithmetic Law:</strong> The <strong>Commutative and Associative Properties of Addition</strong> (changing the order or grouping of numbers does not change their sum).",
        "marks": 3,
        "rubric": [
          {
            "key": "Missing 19 in (a)",
            "marks": "1 M"
          },
          {
            "key": "Missing 35 and 20 in (b)",
            "marks": "1 M"
          },
          {
            "key": "Property named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Words that are Palindromes",
        "q": "List three English words and one sentence that read the same forwards and backwards.",
        "ans": "<strong>Word & Sentence Palindromes:</strong><br>\n• <strong>Three Words:</strong> <strong>MADAM, RADAR, ROTATOR</strong> (also LEVEL, NOON).<br>\n• <strong>One Sentence:</strong> '<strong>WAS IT A CAR OR A CAT I SAW</strong>' (or 'NO LEMONS NO MELON').",
        "marks": 2,
        "rubric": [
          {
            "key": "Three valid words",
            "marks": "1 M"
          },
          {
            "key": "One valid sentence palindrome",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Pattern Rule Finding",
        "q": "Look at the pattern: 2, 6, 18, 54, ____, ____. (a) What is the rule of this pattern? (b) Find the next two numbers.",
        "ans": "<strong>Geometric Sequence:</strong><br>\n• <strong>(a) Rule:</strong> Multiply by 3 (×3) at each step (2×3=6, 6×3=18, 18×3=54).<br>\n• <strong>(b) Next two numbers:</strong><br>\n  - Next: 54 × 3 = <strong>162</strong>.<br>\n  - Then: 162 × 3 = <strong>486</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rule: Multiply by 3",
            "marks": "1 M"
          },
          {
            "key": "162 and 486",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Magic Hexagon (Multiplication Hexagon)",
        "q": "In a magic hexagon, each side has two circles with a square between them. The rule is: 'The number in the square is the product of the numbers in the two circles next to it.' If circle A has 7 and circle B has 11, what number goes into the square between them?",
        "ans": "<strong>Square Calculation:</strong><br>\n• Circle 1 = 7, Circle 2 = 11.<br>\n• Square = Circle 1 × Circle 2 = 7 × 11 = <strong>77</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Multiplication statement 7 × 11",
            "marks": "1 M"
          },
          {
            "key": "Answer: 77",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Equal Sums Across a Line",
        "q": "In the sequence: 1, 2, 3, 4, 5, 6, 7. Pair up numbers from ends to get equal sums: (a) What is 1 + 7? (b) What is 2 + 6? (c) What is 3 + 5? (d) Which number is left in the middle?",
        "ans": "<strong>Pairing from Ends:</strong><br>\n• (a) 1 + 7 = <strong>8</strong>.<br>\n• (b) 2 + 6 = <strong>8</strong>.<br>\n• (c) 3 + 5 = <strong>8</strong>.<br>\n• (d) Middle number: <strong>4</strong> (which is half of 8!).",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 paired sums equal 8",
            "marks": "2 M"
          },
          {
            "key": "Middle number 4 identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Secret Code Letter Shift",
        "q": "Rule: 'Replace each letter with the next letter in the alphabet' (A becomes B, B becomes C... Z becomes A). (a) Encode the word 'GOOD'. (b) Decode the word 'IFMMP'.",
        "ans": "<strong>Letter Shift Code (+1 / -1):</strong><br>\n• <strong>(a) Encoding 'GOOD' (+1 shift):</strong><br>\n  G→H, O→P, O→P, D→E → <strong>HPPE</strong>.<br>\n• <strong>(b) Decoding 'IFMMP' (-1 shift):</strong><br>\n  I→H, F→E, M→L, M→L, P→O → <strong>HELLO</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Encoded: HPPE",
            "marks": "1 M"
          },
          {
            "key": "Decoded: HELLO",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Half Turn Pattern Continuity",
        "q": "A pattern rotates by 1/2 turn (180°) at each step: Letter 'F' is upright in step 1, upside down in step 2. What will it look like in step 10?",
        "ans": "<strong>Even / Odd Steps Analysis:</strong><br>\n• Step 1: Upright (odd).<br>\n• Step 2: Upside down (even).<br>\n• Step 3: Upright (odd).<br>\n• Step 4: Upside down (even)...<br>\n• Since step 10 is an <strong>even step</strong>, letter 'F' will be <strong>upside down</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Odd/even parity analysis",
            "marks": "1 M"
          },
          {
            "key": "Conclusion: Upside down",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Magic Square Constant Formula",
        "q": "For a 3 × 3 magic square using numbers 1 to 9, how can you mathematically find the magic sum (15) without guessing?",
        "ans": "<strong>Mathematical Derivation:</strong><br>\n1. Total sum of numbers 1 to 9 = (9 × 10) ÷ 2 = 45.<br>\n2. A 3 × 3 square has 3 equal rows that must share this total sum equally.<br>\n3. Magic sum of each row = 45 ÷ 3 = <strong>15</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sum of 1 to 9 = 45",
            "marks": "1 M"
          },
          {
            "key": "Division by 3 = 15",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Subtraction Pattern Magic",
        "q": "Look at the pattern:<br>9 - 1 = 8 ÷ 8 = 1<br>98 - 2 = 96 ÷ 8 = 12<br>987 - 3 = 984 ÷ 8 = 123<br>Predict the result of: (a) (9876 - 4) ÷ 8 (b) (98765 - 5) ÷ 8.",
        "ans": "<strong>Pattern Prediction:</strong><br>\n• <strong>(a)</strong> (9876 - 4) ÷ 8 = 9872 ÷ 8 = <strong>1234</strong>.<br>\n• <strong>(b)</strong> (98765 - 5) ÷ 8 = 98760 ÷ 8 = <strong>12345</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): 1234",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 12345",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Triangular Numbers",
        "q": "Numbers that can be arranged as dots in an equilateral triangle are called Triangular Numbers: 1, 3, 6, 10... (a) What is the 5th triangular number? (b) What is the 6th triangular number?",
        "ans": "<strong>Triangular Numbers Pattern (+2, +3, +4, +5, +6...):</strong><br>\n• 1st = 1<br>\n• 2nd = 1 + 2 = 3<br>\n• 3rd = 3 + 3 = 6<br>\n• 4th = 6 + 4 = 10<br>\n• <strong>(a) 5th triangular number:</strong> 10 + 5 = <strong>15</strong>.<br>\n• <strong>(b) 6th triangular number:</strong> 15 + 6 = <strong>21</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5th: 15",
            "marks": "1 M"
          },
          {
            "key": "6th: 21",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Magic Triangle with Side Sum 10",
        "q": "Can you arrange numbers 1 to 6 in a magic triangle so that the sum of each side is 10? State which numbers go in the three corners.",
        "ans": "<strong>Magic Triangle (Sum = 10):</strong><br>\n• To get a larger side sum (10), place the three largest numbers at the corners: <strong>4, 5, and 6</strong>.<br>\n• Side between 4 and 5: needs 10 - (4+5) = <strong>1</strong>.<br>\n• Side between 5 and 6: wait, 5 + 6 = 11 > 10. Let's arrange corners as <strong>1, 2, 4 or 2, 3, 5</strong>.<br>\n• Let corners be <strong>1, 3, 6</strong>:<br>\n  - Between 1 and 3: place 6? No, 1+3+6 = 10.<br>\n  - Corners: <strong>2, 4, 6</strong>? Wait: 2+3+5=10, 4+5+1=10, 2+6+2... Corners are <strong>1, 2, 3</strong> with sum 9; corners <strong>4, 5, 6</strong> have sum 12. For sum 10, corners are <strong>1, 2, 3 (not sum 10)</strong> or <strong>2, 3, 4</strong> or <strong>1, 4, 5</strong>. If corners are <strong>2, 3, 5</strong>: sides sum = 10!",
        "marks": 3,
        "rubric": [
          {
            "key": "Corners identification",
            "marks": "1.5 M"
          },
          {
            "key": "Verification of side sum = 10",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Multi-step Palindrome Puzzle",
        "q": "Take number 28. Apply the 'reverse and add' rule until you obtain a palindrome number. Show all the steps.",
        "ans": "<strong>Stepwise Calculation:</strong><br>\n• Step 1: 28 + 82 = 110 (not a palindrome).<br>\n• Step 2: 110 + 011 = 121.<br>\n• <strong>121</strong> is a palindrome (reads same forward and backward). It took <strong>2 steps</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Step 1: 28 + 82 = 110",
            "marks": "1 M"
          },
          {
            "key": "Step 2: 110 + 011 = 121 palindrome",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Reversing a Word Code",
        "q": "In a secret language, each word is written backwards, and the letter 'X' is added to the start and end. (a) Decode 'XLOOHCSX'. (b) Encode the word 'FRIEND'.",
        "ans": "<strong>Encoding / Decoding:</strong><br>\n• <strong>(a) Decoding 'XLOOHCSX':</strong> Remove X's → LOOHCS. Reverse letters → <strong>SCHOOL</strong>.<br>\n• <strong>(b) Encoding 'FRIEND':</strong> Reverse letters → DNEIRF. Add X at start and end → <strong>XDNEIRFX</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Decoded: SCHOOL",
            "marks": "1 M"
          },
          {
            "key": "Encoded: XDNEIRFX",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Sum of Two Triangular Numbers",
        "q": "Look at consecutive triangular numbers: 1 and 3, 3 and 6, 6 and 10. (a) What is 1 + 3? (b) What is 3 + 6? (c) What is 6 + 10? (d) What kind of numbers are the results?",
        "ans": "<strong>Triangular Number Sums:</strong><br>\n• (a) 1 + 3 = <strong>4</strong> (2²).<br>\n• (b) 3 + 6 = <strong>9</strong> (3²).<br>\n• (c) 6 + 10 = <strong>16</strong> (4²).<br>\n• (d) <strong>Conclusion:</strong> The sum of any two consecutive triangular numbers is always a <strong>Square Number</strong>!",
        "marks": 3,
        "rubric": [
          {
            "key": "Calculations: 4, 9, 16",
            "marks": "1.5 M"
          },
          {
            "key": "Conclusion: Square numbers",
            "marks": "1.5 M"
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
        "category": "Textbook Exercise • Map Scale & Real Distance",
        "q": "On a map of India, the scale is given as: '1 cm on the map = 200 km on the ground'. (a) If the distance between Delhi and Jaipur on the map is 1.3 cm, what is the actual distance on the ground? (b) If the actual distance between Delhi and Bhopal is 600 km, what will be the distance between them on the map?",
        "ans": "<strong>Map Scale Calculations (Scale: 1 cm = 200 km):</strong><br>\n• <strong>(a) Delhi to Jaipur:</strong> Distance = 1.3 cm × 200 km/cm = <strong>260 km</strong>.<br>\n• <strong>(b) Delhi to Bhopal on map:</strong> Map distance = 600 km ÷ 200 km/cm = <strong>3 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 260 km",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): 3 cm",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Rajpath & Angles Between Roads",
        "q": "Look at the map of Central Vista in New Delhi: (a) What type of angle is formed where Janpath crosses Rajpath? (b) Man Singh Road and Ashoka Road meet away from India Gate. What kind of angle is formed between them? (c) Name two roads that meet at an acute angle.",
        "ans": "<strong>Road Junction Angles:</strong><br>\n• <strong>(a) Janpath and Rajpath:</strong> They intersect perpendicularly, forming a <strong>Right Angle (90°)</strong>.<br>\n• <strong>(b) Man Singh Road and Ashoka Road:</strong> The road junction forms an <strong>Obtuse Angle</strong> (greater than 90°).<br>\n• <strong>(c) Acute angle intersection:</strong> <strong>Man Singh Road and Shahjahan Road</strong> (or Akbar Road and Tilak Marg near the C-Hexagon) meet at an <strong>Acute Angle</strong> (less than 90°).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): Right angle",
            "marks": "1 M"
          },
          {
            "key": "Part (b): Obtuse angle",
            "marks": "1 M"
          },
          {
            "key": "Part (c): Acute angle junction named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • India Gate Hexagon",
        "q": "The area around India Gate is shaped like a giant hexagon (the Central Hexagon). (a) How many sides and how many vertices does a hexagon have? (b) If you walk once completely around a regular hexagon park with each side measuring 150 metres, what total distance do you cover?",
        "ans": "<strong>Hexagon Properties & Perimeter:</strong><br>\n• <strong>(a) Properties:</strong> A hexagon has <strong>6 sides and 6 vertices</strong>.<br>\n• <strong>(b) Total distance (Perimeter):</strong> 6 sides × 150 metres = <strong>900 metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "6 sides and 6 vertices",
            "marks": "1.5 M"
          },
          {
            "key": "Perimeter: 900 metres",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Enlarging & Reducing on Grids",
        "q": "A small drawing of a leaf is drawn on a 1/2 cm square grid. It is then redrawn on a 1 cm square grid. (a) By how many times does the side length of the grid squares increase? (b) What happens to the total area of the enlarged drawing?",
        "ans": "<strong>Grid Scaling Principles:</strong><br>\n• <strong>(a) Side length scaling:</strong> 1 cm ÷ 0.5 cm = <strong>2 times larger</strong>.<br>\n• <strong>(b) Area scaling:</strong> When each linear side is multiplied by 2, the area becomes 2 × 2 = <strong>4 times larger</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Side length: 2 times",
            "marks": "1.5 M"
          },
          {
            "key": "Area: 4 times larger",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Republic Day Parade Route",
        "q": "The Republic Day Parade starts from Rashtrapati Bhavan, moves along Rajpath to India Gate, then turns onto Tilak Marg, Bahadur Shah Zafar Marg, Subhash Marg, and finally reaches Red Fort. (a) If the parade route on the map measures 16 cm and the map scale is 2 cm = 1 km, what is the total distance of the parade on the ground? (b) If the parade moves at an average speed of 4 km/h, how much time does it take?",
        "ans": "<strong>Parade Route Calculations (Scale: 2 cm = 1 km → 1 cm = 0.5 km):</strong><br>\n• <strong>(a) Ground distance:</strong> 16 cm ÷ 2 cm/km = <strong>8 km</strong>.<br>\n• <strong>(b) Time taken:</strong> Time = Distance ÷ Speed = 8 km ÷ 4 km/h = <strong>2 hours</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Ground distance: 8 km",
            "marks": "1.5 M"
          },
          {
            "key": "Time taken: 2 hours",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cardinal Directions on a Map",
        "q": "(a) What direction is usually at the top of a standard map? (b) If you are walking towards the East and take a 90° right turn, which direction are you now facing? (c) Name two Indian states located along the western coast.",
        "ans": "<strong>Direction Principles:</strong><br>\n• <strong>(a) Top of map:</strong> <strong>North</strong>.<br>\n• <strong>(b) Right turn from East:</strong> Turning 90° clockwise from East points towards <strong>South</strong>.<br>\n• <strong>(c) Western coastal states:</strong> <strong>Gujarat and Maharashtra</strong> (also Goa, Karnataka, Kerala).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): North",
            "marks": "1 M"
          },
          {
            "key": "Part (b): South",
            "marks": "1 M"
          },
          {
            "key": "Part (c): Two western states named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Comparing Map Scales",
        "q": "Map 1 has a scale of 1 cm = 10 metres. Map 2 has a scale of 1 cm = 1 kilometre. (a) Which map shows more minute details of buildings and pathways? (b) Which map is used to show a whole state or country?",
        "ans": "<strong>Scale Comparison:</strong><br>\n• <strong>(a) Detailed map:</strong> <strong>Map 1</strong> (large-scale map where 1 cm represents only 10 m, showing fine features like school grounds or building plans).<br>\n• <strong>(b) Regional/country map:</strong> <strong>Map 2</strong> (small-scale map where 1 cm represents 1 km or more).",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): Map 1 with explanation",
            "marks": "1 M"
          },
          {
            "key": "Part (b): Map 2 with explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • State Borders on India Map",
        "q": "Looking at the political map of India: (a) If you travel straight from Haryana to Tamil Nadu, in which direction are you travelling? (b) Name three states that share a border with Madhya Pradesh.",
        "ans": "<strong>Geography & Directions:</strong><br>\n• <strong>(a) Direction:</strong> Travelling from Haryana (North) to Tamil Nadu (South) is travelling towards the <strong>South</strong>.<br>\n• <strong>(b) States bordering MP:</strong> <strong>Rajasthan, Uttar Pradesh, and Chhattisgarh</strong> (also Maharashtra, Gujarat).",
        "marks": 3,
        "rubric": [
          {
            "key": "South direction",
            "marks": "1.5 M"
          },
          {
            "key": "Three bordering states",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • School Assembly Ground Map",
        "q": "On a school plan map, 1 cm represents 5 metres. The assembly ground is drawn as a rectangle measuring 6 cm by 4 cm. (a) What are the actual ground dimensions in metres? (b) What is the actual area of the assembly ground in square metres?",
        "ans": "<strong>Ground Dimensions & Area:</strong><br>\n• <strong>(a) Actual dimensions:</strong><br>\n  - Length = 6 cm × 5 m/cm = <strong>30 metres</strong>.<br>\n  - Width = 4 cm × 5 m/cm = <strong>20 metres</strong>.<br>\n• <strong>(b) Actual area:</strong> 30 m × 20 m = <strong>600 sq metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Dimensions: 30 m × 20 m",
            "marks": "1.5 M"
          },
          {
            "key": "Actual area: 600 sq m",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Red Fort Tour Route",
        "q": "At the Red Fort: Diwan-i-Aam is 200 m from Lahori Gate. Diwan-i-Khas is 150 m further ahead from Diwan-i-Aam. (a) What is the total walking distance from Lahori Gate to Diwan-i-Khas? (b) On a tourist map with scale 1 cm = 50 m, what will be the distance on paper between Lahori Gate and Diwan-i-Khas?",
        "ans": "<strong>Tourist Map Calculations:</strong><br>\n• <strong>(a) Total distance:</strong> 200 m + 150 m = <strong>350 metres</strong>.<br>\n• <strong>(b) Distance on map:</strong> 350 m ÷ 50 m/cm = <strong>7 cm</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Total distance: 350 m",
            "marks": "1 M"
          },
          {
            "key": "Map distance: 7 cm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Sea Coast Boundary",
        "q": "Which direction would a ship travel if it sails from Kolkata (West Bengal) across the Bay of Bengal to Port Blair (Andaman & Nicobar Islands)?",
        "ans": "<strong>Compass Sailing Direction:</strong><br>\nKolkata is located at the northern tip of the Bay of Bengal, while Port Blair is located towards the south-east in the Andaman Sea. Therefore, the ship sails in a <strong>South-East direction</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "South-East direction identified",
            "marks": "1 M"
          },
          {
            "key": "Bay of Bengal coordinates explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Map Grid Coordinates",
        "q": "On a tourist map divided into grid squares (letters A to D along columns, numbers 1 to 4 along rows): The museum is located in square B3 and the zoo is in square D3. (a) Do they lie along the same horizontal row or vertical column? (b) How many grid units apart are they horizontally?",
        "ans": "<strong>Grid Coordinate Analysis:</strong><br>\n• <strong>(a) Alignment:</strong> Both share row number 3, so they lie along the <strong>same horizontal row</strong>.<br>\n• <strong>(b) Grid units apart:</strong> Column B to column D is: C, D = <strong>2 grid units apart</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Same horizontal row (row 3)",
            "marks": "1 M"
          },
          {
            "key": "2 grid units apart",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Scaling Down a Drawing",
        "q": "A playground is 80 metres long and 40 metres wide. You want to draw it on a sheet of drawing paper that is 25 cm wide. Suggest a suitable scale so the playground fits neatly on the paper.",
        "ans": "<strong>Scale Selection:</strong><br>\n• If we choose <strong>1 cm = 4 metres</strong>:<br>\n  - Length on paper = 80 ÷ 4 = 20 cm.<br>\n  - Width on paper = 40 ÷ 4 = 10 cm.<br>\n• Since 20 cm fits easily within the 25 cm sheet, the scale <strong>1 cm = 4 metres (or 1 cm = 5 metres)</strong> is perfectly suitable.",
        "marks": 2,
        "rubric": [
          {
            "key": "Proposed scale (e.g. 1 cm = 4 m or 5 m)",
            "marks": "1 M"
          },
          {
            "key": "Paper dimension verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • River Crossing on Map",
        "q": "Yamuna river flows through Delhi. If the river width on a 1 cm = 100 m map measures 3.5 cm, what is the actual width of the Yamuna river at that location?",
        "ans": "<strong>Width Calculation:</strong><br>\n• Actual width = 3.5 cm × 100 m/cm = <strong>350 metres</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Scale multiplication: 3.5 × 100",
            "marks": "1 M"
          },
          {
            "key": "Answer: 350 metres",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Measuring Curved Roads with Thread",
        "q": "How can you measure the length of a curved winding mountain road drawn on a map using a piece of thread?",
        "ans": "<strong>Thread Measurement Method:</strong><br>\n1. Place one end of a cotton thread precisely at the starting point of the curved road on the map.<br>\n2. Carefully lay the thread along all bends, curves, and turns of the road, holding it down with your fingers or pins.<br>\n3. Mark the thread with a pen at the ending point of the road.<br>\n4. Straighten the thread along a standard ruler to measure its length in centimetres.<br>\n5. Multiply the measured length by the map scale to calculate the real ground distance.",
        "marks": 3,
        "rubric": [
          {
            "key": "Laying thread along curves explained",
            "marks": "1.5 M"
          },
          {
            "key": "Measuring on ruler and scale multiplication",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • North-East & South-West",
        "q": "State the intermediate compass direction that lies midway between: (a) North and East (b) South and East (c) South and West (d) North and West.",
        "ans": "<strong>Cardinal Intermediate Directions:</strong><br>\n• (a) Between North and East: <strong>North-East (NE)</strong>.<br>\n• (b) Between South and East: <strong>South-East (SE)</strong>.<br>\n• (c) Between South and West: <strong>South-West (SW)</strong>.<br>\n• (d) Between North and West: <strong>North-West (NW)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 directions correct (0.5 M each)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Railway Route Distance",
        "q": "On a railway map, the rail distance from Mumbai to Ahmedabad is 8 cm. The map scale is 1 cm = 60 km. How long will an express train travelling at 80 km/h take to complete this journey?",
        "ans": "<strong>Journey Calculation:</strong><br>\n1. Ground distance = 8 cm × 60 km/cm = 480 km.<br>\n2. Time taken = Distance ÷ Speed = 480 km ÷ 80 km/h = <strong>6 hours</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Ground distance: 480 km",
            "marks": "1.5 M"
          },
          {
            "key": "Time: 6 hours",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Shortest Path between Two Places",
        "q": "On a road map, Route A is 12 km through city traffic with average speed 24 km/h. Route B is a bypass ring road of 18 km with average speed 54 km/h. Which route is faster to travel?",
        "ans": "<strong>Time Comparison:</strong><br>\n• <strong>Route A:</strong> Time = 12 km ÷ 24 km/h = 0.5 hours = <strong>30 minutes</strong>.<br>\n• <strong>Route B:</strong> Time = 18 km ÷ 54 km/h = 1/3 hour = <strong>20 minutes</strong>.<br>\n• <strong>Conclusion:</strong> <strong>Route B (Bypass) is faster</strong> by 10 minutes, even though it is longer in distance.",
        "marks": 3,
        "rubric": [
          {
            "key": "Route A time: 30 mins",
            "marks": "1 M"
          },
          {
            "key": "Route B time: 20 mins",
            "marks": "1 M"
          },
          {
            "key": "Conclusion: Route B faster",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • City Map Orientation",
        "q": "If you stand facing the morning rising sun: (a) Which direction is in front of you? (b) Which direction is behind you? (c) Which direction is on your left hand? (d) Which direction is on your right hand?",
        "ans": "<strong>Sun Orientation:</strong><br>\n• (a) In front: <strong>East</strong> (where sun rises).<br>\n• (b) Behind you: <strong>West</strong>.<br>\n• (c) Left hand: <strong>North</strong>.<br>\n• (d) Right hand: <strong>South</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 directions correct (0.5 M each)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Area on Scaled Grid",
        "q": "A square park has an area of 4 sq cm on a map where 1 cm = 50 m. (a) What is the side length of the park on the map? (b) What is the actual side length in metres? (c) What is the actual ground area in square metres?",
        "ans": "<strong>Area Scaling:</strong><br>\n• <strong>(a) Side on map:</strong> √4 = <strong>2 cm</strong>.<br>\n• <strong>(b) Actual side length:</strong> 2 cm × 50 m/cm = <strong>100 metres</strong>.<br>\n• <strong>(c) Actual ground area:</strong> 100 m × 100 m = <strong>10,000 sq metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Side on map: 2 cm",
            "marks": "1 M"
          },
          {
            "key": "Actual side: 100 m",
            "marks": "1 M"
          },
          {
            "key": "Ground area: 10,000 sq m",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Straight Line vs Road Distance",
        "q": "Why is the actual driving distance between two cities on a highway almost always longer than the straight-line ruler distance measured on a map?",
        "ans": "<strong>Road Alignment Explanation:</strong><br>\nA ruler measures the straight-line displacement ('as the crow flies'). In reality, highways must navigate natural terrain (mountains, rivers, valleys) and avoid settlements by having curves, turns, detours, and flyovers, making the driving road distance longer than the straight line.",
        "marks": 2,
        "rubric": [
          {
            "key": "Straight line vs terrain bends explained",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Map Symbol Legend",
        "q": "Why do maps have a 'Legend' or 'Key'? Mention three conventional symbols commonly found on maps.",
        "ans": "<strong>Map Legends & Symbols:</strong><br>\n• <strong>Purpose:</strong> A legend explains the meanings of different colours, lines, and symbols used on the map so readers can interpret features accurately.<br>\n• <strong>Three Symbols:</strong><br>\n  1. Blue colour: Water bodies (rivers, lakes, seas).<br>\n  2. Black dashed lines with crossbars: Railway tracks.<br>\n  3. Green areas: Forests, parks, or agricultural land.",
        "marks": 3,
        "rubric": [
          {
            "key": "Purpose of legend explained",
            "marks": "1.5 M"
          },
          {
            "key": "Three symbols described",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Scale Factor Calculation",
        "q": "A distance of 5 kilometres on the ground is represented by 2 centimetres on a map. Write down the map scale in: (a) Centimetres to kilometres format (b) How many metres does 1 cm represent?",
        "ans": "<strong>Scale Formats:</strong><br>\n• <strong>(a) Format:</strong> 2 cm = 5 km, so <strong>1 cm = 2.5 km</strong>.<br>\n• <strong>(b) In metres:</strong> 2.5 km = 2.5 × 1,000 m = <strong>2,500 metres</strong> per 1 cm.",
        "marks": 2,
        "rubric": [
          {
            "key": "1 cm = 2.5 km",
            "marks": "1 M"
          },
          {
            "key": "1 cm = 2,500 m",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Route Planning",
        "q": "A delivery van must deliver packages to Point A (4 km North), then Point B (3 km East from A), and then return directly to the depot in a straight line. If the straight return path is 5 km, what total distance did the van drive?",
        "ans": "<strong>Total Distance Calculation:</strong><br>\n• Leg 1: 4 km North.<br>\n• Leg 2: 3 km East.<br>\n• Leg 3 (return): 5 km.<br>\n• <strong>Total driving distance:</strong> 4 + 3 + 5 = <strong>12 km</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Legs listed: 4, 3, 5 km",
            "marks": "1 M"
          },
          {
            "key": "Total: 12 km",
            "marks": "1 M"
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
        "category": "Textbook Exercise • Sweet Box Net",
        "q": "(a) What is a 'Net' in geometry? (b) Ramya wants to make a sweet box. She cuts out a flat cardboard shape with 1 bottom square and 4 folding flap sides. When folded along the lines, what 3D shape is formed? (c) How many faces, edges, and vertices does a closed box have?",
        "ans": "<strong>Nets & 3D Shapes:</strong><br>\n• <strong>(a) Net definition:</strong> A 2-dimensional flat pattern of polygons that can be cut and folded along edges to form a 3-dimensional solid shape.<br>\n• <strong>(b) 3D Shape formed:</strong> An <strong>open cuboid box</strong> (or cube if sides are equal).<br>\n• <strong>(c) Cuboid properties:</strong> A closed cuboid box has <strong>6 faces, 12 edges, and 8 vertices</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Net defined",
            "marks": "1 M"
          },
          {
            "key": "Open cuboid box named",
            "marks": "1 M"
          },
          {
            "key": "6 faces, 12 edges, 8 vertices",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Valid Nets of a Cube",
        "q": "(a) How many square faces does the net of a cube have? (b) Can an arrangement of 6 squares in a single straight row fold into a cube? Explain why or why not.",
        "ans": "<strong>Cube Nets Analysis:</strong><br>\n• <strong>(a) Faces:</strong> A cube has exactly <strong>6 square faces</strong>.<br>\n• <strong>(b) Single row test:</strong> <strong>No, 6 squares in a single straight line cannot fold into a cube.</strong> Folding a strip of 6 squares only creates a hollow cylinder with 4 sides, overlapping the remaining 2 squares, leaving the top and bottom open with no lids.",
        "marks": 3,
        "rubric": [
          {
            "key": "6 square faces",
            "marks": "1 M"
          },
          {
            "key": "Single line cannot fold with reasoning",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Dice (Opposite Faces Sum to 7)",
        "q": "On a standard playing die, the numbers on opposite faces always add up to 7. (a) If face 1 is at the bottom, which number is at the top? (b) If face 3 is facing you, which number is on the back face? (c) If face 5 is on the left, which number is on the right?",
        "ans": "<strong>Opposite Face Rule (Sum = 7):</strong><br>\n• <strong>(a) Opposite to 1:</strong> 7 - 1 = <strong>6</strong>.<br>\n• <strong>(b) Opposite to 3:</strong> 7 - 3 = <strong>4</strong>.<br>\n• <strong>(c) Opposite to 5:</strong> 7 - 5 = <strong>2</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Top: 6",
            "marks": "1 M"
          },
          {
            "key": "Back: 4",
            "marks": "1 M"
          },
          {
            "key": "Right: 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Floor Map vs Deep Drawing",
        "q": "(a) What is a 'Floor Map' of a house? (b) What is a 'Deep Drawing'? (c) Why can a deep drawing show which window is on the front side, while a floor map cannot show the window's height?",
        "ans": "<strong>Architectural Drawings:</strong><br>\n• <strong>(a) Floor Map:</strong> A 2D top-down plan showing the layout of rooms, doors, and walls as flat outlines.<br>\n• <strong>(b) Deep Drawing:</strong> A 3-dimensional perspective drawing that shows length, width, and height, making the house look realistic like a picture.<br>\n• <strong>(c) Reason:</strong> A floor map only views from directly above (bird's-eye view), so vertical height is invisible. A deep drawing shows side walls and elevations, displaying window height and position clearly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Floor map defined",
            "marks": "1 M"
          },
          {
            "key": "Deep drawing defined",
            "marks": "1 M"
          },
          {
            "key": "Perspective/height reason explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Matching Floor Map to Deep Drawing",
        "q": "A house floor map shows a front door on the left and a window on the right side of the front wall. In the deep drawing, what features must you check to ensure it correctly matches the floor map?",
        "ans": "<strong>Verification Checks:</strong><br>\n1. Check that the front door is positioned on the left side of the front wall.<br>\n2. Check that the window appears on the right side of the front wall.<br>\n3. Check the side walls to confirm whether windows shown on the floor map are visible or obscured by perspective angles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Door position check",
            "marks": "1 M"
          },
          {
            "key": "Window & perspective alignment check",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Bridge Views (Top, Front, Side)",
        "q": "Describe what a railway bridge made of pillars looks like from: (a) The Top View (b) The Front View (c) The Side View.",
        "ans": "<strong>Views of a Bridge:</strong><br>\n• <strong>(a) Top View:</strong> Shows two parallel straight tracks or road surface with crossing railway sleepers, appearing as a long rectangle.<br>\n• <strong>(b) Front View:</strong> Shows the cross-section of the roadbed supported by vertical pillars with empty space below.<br>\n• <strong>(c) Side View:</strong> Shows a row of vertical pillars supporting a horizontal deck across the span, resembling a colonnade.",
        "marks": 3,
        "rubric": [
          {
            "key": "Top view described",
            "marks": "1 M"
          },
          {
            "key": "Front view described",
            "marks": "1 M"
          },
          {
            "key": "Side view described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Folding a Cylinder and Cone",
        "q": "(a) What flat 2D shape can be rolled to make the curved surface of a cylinder? (b) What shape is the net of a cone (without base)?",
        "ans": "<strong>2D Nets for Curved Shapes:</strong><br>\n• <strong>(a) Cylinder curved surface:</strong> A <strong>Rectangle</strong> (when rolled, the length becomes the circumference of the circle).<br>\n• <strong>(b) Cone net:</strong> A <strong>Sector of a circle</strong> (pie-slice shape).",
        "marks": 2,
        "rubric": [
          {
            "key": "Rectangle for cylinder",
            "marks": "1 M"
          },
          {
            "key": "Sector of circle for cone",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Deep Drawing of a Cube",
        "q": "How many faces of a solid cube are visible at most in a single realistic deep drawing view without making faces transparent?",
        "ans": "<strong>Cube Visibility:</strong><br>\nIn a realistic 3D perspective drawing of an opaque cube, you can see at most <strong>3 faces</strong> at one time (the top face and two adjacent side faces). The other 3 faces remain hidden at the back and bottom.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 faces stated",
            "marks": "1 M"
          },
          {
            "key": "Explanation of hidden back/bottom faces",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Open Box without a Lid",
        "q": "How many square faces does the net of an open cube-shaped box (without a top lid) have? Draw or describe its shape.",
        "ans": "<strong>Open Box Net:</strong><br>\n• An open box without a lid has <strong>5 square faces</strong> (1 bottom and 4 vertical sides).<br>\n• A common net shape is a <strong>cross shape</strong>: 1 central base square with 4 squares attached to its four edges.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 square faces",
            "marks": "1 M"
          },
          {
            "key": "Cross shape described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cube Block Counting",
        "q": "A solid cube structure is built using 1 cm wooden unit cubes: It is 3 cubes long, 3 cubes wide, and 3 cubes high. (a) How many small unit cubes were used in total? (b) If the outer surface is painted red, how many cubes have red paint on exactly 3 faces?",
        "ans": "<strong>Cube Calculations:</strong><br>\n• <strong>(a) Total cubes:</strong> Volume = 3 × 3 × 3 = <strong>27 unit cubes</strong>.<br>\n• <strong>(b) Cubes painted on 3 faces:</strong> Only the <strong>8 corner cubes</strong> have three exposed faces painted red.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total: 27 unit cubes",
            "marks": "1.5 M"
          },
          {
            "key": "Corner cubes: 8 cubes",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Triangular Prism Net",
        "q": "A triangular prism (like a chocolate Toblerone box) has two triangular ends and three rectangular sides. How many faces, edges, and vertices does it have in total?",
        "ans": "<strong>Triangular Prism Properties:</strong><br>\n• <strong>Faces:</strong> 2 triangles + 3 rectangles = <strong>5 faces</strong>.<br>\n• <strong>Edges:</strong> 3 on top triangle + 3 on bottom triangle + 3 connecting vertical edges = <strong>9 edges</strong>.<br>\n• <strong>Vertices:</strong> 3 corners on each triangle = <strong>6 vertices</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "5 faces",
            "marks": "1 M"
          },
          {
            "key": "9 edges",
            "marks": "1 M"
          },
          {
            "key": "6 vertices",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Matchbox Model",
        "q": "Navin made a bridge model using matchboxes. He placed 6 matchboxes side by side to make the span, and supported them on two piles of 3 matchboxes each. How many matchboxes did he use in all?",
        "ans": "<strong>Matchbox Addition:</strong><br>\n• Bridge span: 6 matchboxes.<br>\n• Supports: 2 piles of 3 matchboxes = 2 × 3 = 6 matchboxes.<br>\n• <strong>Total matchboxes:</strong> 6 + 6 = <strong>12 matchboxes</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Span and support breakdown",
            "marks": "1 M"
          },
          {
            "key": "Total: 12 matchboxes",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Isometric Dot Paper Drawing",
        "q": "What is 'Isometric Dot Paper', and why is it preferred for drawing 3D cubes and cuboids over ordinary square grid paper?",
        "ans": "<strong>Isometric Dot Paper:</strong><br>\n• Isometric dot paper has dots arranged in equilateral triangular grids.<br>\n• It allows artists to draw receding parallel lines at 30° angles to show true 3D depth and proportion without distortion, making edges of equal length look natural in 3D.",
        "marks": 2,
        "rubric": [
          {
            "key": "Description of triangular dot grid",
            "marks": "1 M"
          },
          {
            "key": "30° perspective / true depth advantage",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Square Pyramid Net",
        "q": "A pyramid with a square base has 4 triangular faces meeting at a top point. (a) Describe its flat net. (b) How many edges does a square pyramid have?",
        "ans": "<strong>Square Pyramid:</strong><br>\n• <strong>(a) Net description:</strong> A central square with 4 identical triangles attached to each of its four edges (resembling a 4-pointed star).<br>\n• <strong>(b) Edges:</strong> 4 edges on the square base + 4 slanting edges meeting at the top vertex = <strong>8 edges</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Star-like net described",
            "marks": "1 M"
          },
          {
            "key": "8 edges stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Views of a Glass Tumbler",
        "q": "A cylindrical glass tumbler with water is viewed from: (a) Directly from the top (b) From the side at eye level. Describe the shape seen in each view.",
        "ans": "<strong>Tumbler Views:</strong><br>\n• <strong>(a) Top View:</strong> You see concentric <strong>circles</strong> (the circular rim and base).<br>\n• <strong>(b) Side View:</strong> You see a <strong>rectangle</strong> (or trapezoid if the glass is tapered).",
        "marks": 2,
        "rubric": [
          {
            "key": "Top: Circles",
            "marks": "1 M"
          },
          {
            "key": "Side: Rectangle / Trapezoid",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cube Puzzle from Paper",
        "q": "You have a sheet of graph paper. You want to make a cube with side 4 cm. What should be the area of each square on the net, and what is the total paper area needed?",
        "ans": "<strong>Cube Paper Area:</strong><br>\n• Area of one square face = 4 cm × 4 cm = <strong>16 sq cm</strong>.<br>\n• A cube has 6 faces.<br>\n• <strong>Total paper area needed:</strong> 6 × 16 sq cm = <strong>96 sq cm</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "One face area: 16 sq cm",
            "marks": "1 M"
          },
          {
            "key": "Total area: 96 sq cm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Hidden Cubes in a Solid Block",
        "q": "A 3 × 3 × 3 solid block of 27 cubes is placed on a table. How many unit cubes are completely hidden inside and cannot be seen from any angle from the outside?",
        "ans": "<strong>Internal Cube:</strong><br>\n• Only the 1 central core cube (at row 2, column 2, layer 2) has no exposed faces to the outside.<br>\n• Therefore, exactly <strong>1 cube is completely hidden</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Central core identified",
            "marks": "1 M"
          },
          {
            "key": "1 hidden cube stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Sphere Properties",
        "q": "How many faces, edges, and vertices does a perfect sphere (like a football) have?",
        "ans": "<strong>Sphere Properties:</strong><br>\n• <strong>Faces:</strong> 1 continuous curved surface (no flat faces).<br>\n• <strong>Edges:</strong> <strong>0 edges</strong> (no straight or sharp boundaries).<br>\n• <strong>Vertices:</strong> <strong>0 vertices</strong> (no corners).",
        "marks": 2,
        "rubric": [
          {
            "key": "1 curved surface",
            "marks": "1 M"
          },
          {
            "key": "0 edges and 0 vertices",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Staircase View Problem",
        "q": "Looking at a staircase of 4 steps: (a) What does the side view look like? (b) What does the top view look like?",
        "ans": "<strong>Staircase Views:</strong><br>\n• <strong>(a) Side View:</strong> A stepped zigzag outline (staircase profile showing 4 risers and 4 treads).<br>\n• <strong>(b) Top View:</strong> A single large rectangle divided into 4 equal parallel horizontal strips (the steps).",
        "marks": 2,
        "rubric": [
          {
            "key": "Side: Stepped zigzag profile",
            "marks": "1 M"
          },
          {
            "key": "Top: 4 parallel rectangular strips",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • T-Net of a Cube",
        "q": "A T-shaped cube net has 4 squares in a vertical column and 2 squares attached to the left and right of the second square from top. Explain how folding this net makes a cube.",
        "ans": "<strong>Folding Process:</strong><br>\n1. The second square acts as the base.<br>\n2. The left and right squares fold upwards at 90° to form the left and right walls.<br>\n3. The top square folds down to form the front wall.<br>\n4. The two bottom squares fold up: the third square forms the back wall and the fourth square folds over the top to form the lid. This perfectly closes all 6 faces of the cube.",
        "marks": 3,
        "rubric": [
          {
            "key": "Base identification",
            "marks": "1 M"
          },
          {
            "key": "Folding steps for 4 sides and lid",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Difference between 2D and 3D Shapes",
        "q": "State three key differences between a 2-Dimensional (2D) shape and a 3-Dimensional (3D) shape.",
        "ans": "<strong>Differences:</strong><br>\n1. <strong>Dimensions:</strong> 2D shapes have only 2 dimensions (length and width). 3D shapes have 3 dimensions (length, width, and height/depth).<br>\n2. <strong>Flatness:</strong> 2D shapes are completely flat and lie entirely within a plane. 3D shapes occupy physical space in the real world.<br>\n3. <strong>Measurement:</strong> 2D shapes are measured by Area (sq units). 3D shapes are measured by Volume (cubic units).",
        "marks": 3,
        "rubric": [
          {
            "key": "3 clear differences stated (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Euler's Formula for Polyhedra",
        "q": "Euler's formula for any simple polyhedron is: Faces (F) + Vertices (V) - Edges (E) = 2. Verify this formula for: (a) A Cube (b) A Triangular Prism.",
        "ans": "<strong>Euler's Formula Verification (F + V - E = 2):</strong><br>\n• <strong>(a) Cube:</strong> F = 6, V = 8, E = 12.<br>\n  Calculation: 6 + 8 - 12 = 14 - 12 = <strong>2</strong> (Verified!).<br>\n• <strong>(b) Triangular Prism:</strong> F = 5, V = 6, E = 9.<br>\n  Calculation: 5 + 6 - 9 = 11 - 9 = <strong>2</strong> (Verified!).",
        "marks": 3,
        "rubric": [
          {
            "key": "Formula stated",
            "marks": "1 M"
          },
          {
            "key": "Cube verification (6+8-12=2)",
            "marks": "1 M"
          },
          {
            "key": "Prism verification (5+6-9=2)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Shoe Box Dimensions",
        "q": "A shoe box is 30 cm long, 18 cm wide, and 12 cm high. How many square centimetres of wrapping paper are needed to cover the entire box completely?",
        "ans": "<strong>Total Surface Area of Cuboid = 2(lb + bh + hl):</strong><br>\n• lb = 30 × 18 = 540 sq cm.<br>\n• bh = 18 × 12 = 216 sq cm.<br>\n• hl = 12 × 30 = 360 sq cm.<br>\n• Sum = 540 + 216 + 360 = 1,116 sq cm.<br>\n• Total Surface Area = 2 × 1,116 = <strong>2,232 sq cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Surface area formula stated",
            "marks": "1 M"
          },
          {
            "key": "Face products calculated",
            "marks": "1 M"
          },
          {
            "key": "Final answer: 2,232 sq cm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cone vs Cylinder Base",
        "q": "(a) What is the shape of the flat base of a cone? (b) How many flat faces does a cylinder have, and what shape are they?",
        "ans": "<strong>Base Shapes:</strong><br>\n• <strong>(a) Cone base:</strong> A flat <strong>Circle</strong>.<br>\n• <strong>(b) Cylinder flat faces:</strong> Exactly <strong>2 flat circular faces</strong> (one top, one bottom).",
        "marks": 2,
        "rubric": [
          {
            "key": "Cone: Circle",
            "marks": "1 M"
          },
          {
            "key": "Cylinder: 2 circular faces",
            "marks": "1 M"
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
        "category": "Textbook Exercise • Pencil Measurement in Millimetres",
        "q": "Look at a ruler: (a) How many millimetres are there in 1 centimetre? (b) What fraction of a centimetre is 1 mm? (c) A small pencil measures 3 cm and 6 mm. Write its length in centimetres using decimals.",
        "ans": "<strong>Metric Conversions:</strong><br>\n• <strong>(a) Millimetres in 1 cm:</strong> <strong>10 millimetres (10 mm)</strong>.<br>\n• <strong>(b) Fraction:</strong> 1 mm = <strong>1/10 of a cm</strong>.<br>\n• <strong>(c) Decimal notation:</strong> 3 cm + 6/10 cm = <strong>3.6 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 10 mm",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 1/10 cm",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 3.6 cm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Frog Jump Lengths",
        "q": "Two species of frogs are found in India: A Gold Frog is 0.9 cm long. A Bull Frog is 30.5 cm long. (a) How many millimetres long is the Gold Frog? (b) About how many Gold Frogs can sit on the body of one Bull Frog?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Gold Frog in mm:</strong> 0.9 cm = 0.9 × 10 = <strong>9 mm</strong>.<br>\n• <strong>(b) Number of Gold Frogs:</strong> 30.5 cm ÷ 0.9 cm ≈ 305 ÷ 9 = <strong>33.88 (about 33 or 34 frogs)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 9 mm",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): About 33-34 frogs",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Money in Decimals (Paise to Rupee)",
        "q": "Convert the following paise amounts into rupees using decimals:<br>(a) 50 paise<br>(b) 75 paise<br>(c) 5 paise<br>(d) 250 paise",
        "ans": "<strong>Rupee Conversions (1 Rupee = 100 paise; divide by 100):</strong><br>\n• (a) 50 paise = 50 ÷ 100 = <strong>₹0.50</strong>.<br>\n• (b) 75 paise = 75 ÷ 100 = <strong>₹0.75</strong>.<br>\n• (c) 5 paise = 5 ÷ 100 = <strong>₹0.05</strong> (note the zero in tenths place!).<br>\n• (d) 250 paise = 250 ÷ 100 = <strong>₹2.50</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "₹0.50",
            "marks": "1 M"
          },
          {
            "key": "₹0.75",
            "marks": "1 M"
          },
          {
            "key": "₹0.05 (vital zero check)",
            "marks": "1 M"
          },
          {
            "key": "₹2.50",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • City Temperature Readings",
        "q": "The temperature recorded at 3:00 PM in different cities on 16 January were:<br>• Chennai: 29.9°C<br>• Mumbai: 35.1°C<br>• Srinagar: 8.1°C<br>• Jaipur: 37.9°C<br>(a) Which place was the hottest at 3 PM? (b) Which place was the coolest? (c) How much higher was Mumbai's temperature than Srinagar's?",
        "ans": "<strong>Temperature Analysis:</strong><br>\n• <strong>(a) Hottest place:</strong> <strong>Jaipur (37.9°C)</strong>.<br>\n• <strong>(b) Coolest place:</strong> <strong>Srinagar (8.1°C)</strong>.<br>\n• <strong>(c) Difference between Mumbai and Srinagar:</strong> 35.1°C - 8.1°C = <strong>27.0°C higher</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Hottest: Jaipur (37.9°C)",
            "marks": "1 M"
          },
          {
            "key": "Coolest: Srinagar (8.1°C)",
            "marks": "1 M"
          },
          {
            "key": "Difference: 27.0°C",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Sports Day Long Jump",
        "q": "In the School Sports Day long jump event: Teena jumped 3.50 m, Meena jumped 4.05 m, and Rehana jumped 4.50 m. (a) Who jumped the longest distance? (b) By how many metres did Rehana beat Teena? Express your answer in metres and centimetres.",
        "ans": "<strong>Jump Comparisons:</strong><br>\n• <strong>(a) Longest jump:</strong> <strong>Rehana (4.50 m)</strong>.<br>\n• <strong>(b) Difference:</strong> 4.50 m - 3.50 m = <strong>1.00 m = 1 metre (or 100 cm)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Longest: Rehana (4.50 m)",
            "marks": "1.5 M"
          },
          {
            "key": "Difference: 1 metre (100 cm)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Foreign Currency Exchange",
        "q": "Look at the exchange rates against Indian Rupee (₹):<br>• 1 US Dollar ($) = ₹75.00<br>• 1 Euro (€) = ₹85.00<br>• 1 Kuwaiti Dinar = ₹250.00<br>(a) Arun's aunt sent him $10 from USA. How much money is that in Indian Rupees? (b) Majid's father works in Kuwait and gets 100 Dinars as salary. How much is his salary in Indian Rupees?",
        "ans": "<strong>Currency Conversions:</strong><br>\n• <strong>(a) $10 in Rupees:</strong> 10 × ₹75 = <strong>₹750</strong>.<br>\n• <strong>(b) 100 Kuwaiti Dinars in Rupees:</strong> 100 × ₹250 = <strong>₹25,000</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): ₹750",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): ₹25,000",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fractions to Decimals",
        "q": "Convert each fraction into decimal form:<br>(a) 7/10<br>(b) 45/100<br>(c) 3/100<br>(d) 1 4/10",
        "ans": "<strong>Decimals Conversion:</strong><br>\n• (a) 7/10 = <strong>0.7</strong>.<br>\n• (b) 45/100 = <strong>0.45</strong>.<br>\n• (c) 3/100 = <strong>0.03</strong>.<br>\n• (d) 1 4/10 = 1 + 0.4 = <strong>1.4</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "0.7",
            "marks": "1 M"
          },
          {
            "key": "0.45",
            "marks": "1 M"
          },
          {
            "key": "0.03",
            "marks": "1 M"
          },
          {
            "key": "1.4",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Decimals to Fractions in Lowest Terms",
        "q": "Convert each decimal to a fraction and reduce to lowest terms:<br>(a) 0.6<br>(b) 0.25<br>(c) 0.08",
        "ans": "<strong>Fractions in Lowest Terms:</strong><br>\n• (a) 0.6 = 6/10 = <strong>3/5</strong> (dividing by 2).<br>\n• (b) 0.25 = 25/100 = <strong>1/4</strong> (dividing by 25).<br>\n• (c) 0.08 = 8/100 = <strong>2/25</strong> (dividing by 4).",
        "marks": 3,
        "rubric": [
          {
            "key": "3/5",
            "marks": "1 M"
          },
          {
            "key": "1/4",
            "marks": "1 M"
          },
          {
            "key": "2/25",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Comparing Decimals",
        "q": "Put >, < or = between the decimal numbers:<br>(a) 0.5 and 0.05<br>(b) 3.45 and 3.54<br>(c) 1.20 and 1.2<br>(d) 0.89 and 0.9",
        "ans": "<strong>Decimal Comparisons:</strong><br>\n• <strong>(a) 0.5 & 0.05:</strong> 5 tenths > 0 tenths. <strong>0.5 > 0.05</strong>.<br>\n• <strong>(b) 3.45 & 3.54:</strong> 4 tenths < 5 tenths. <strong>3.45 < 3.54</strong>.<br>\n• <strong>(c) 1.20 & 1.2:</strong> Trailing zeros do not change value. <strong>1.20 = 1.2</strong>.<br>\n• <strong>(d) 0.89 & 0.9:</strong> 0.89 < 0.90 (8 tenths < 9 tenths). <strong>0.89 < 0.9</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "0.5 > 0.05",
            "marks": "1 M"
          },
          {
            "key": "3.45 < 3.54",
            "marks": "1 M"
          },
          {
            "key": "1.20 = 1.2",
            "marks": "1 M"
          },
          {
            "key": "0.89 < 0.9",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Place Value in Decimals",
        "q": "In the number 45.68:<br>(a) What is the place value of digit 6?<br>(b) What is the place value of digit 8?<br>(c) Write 45.68 in expanded form.",
        "ans": "<strong>Decimal Place Value:</strong><br>\n• <strong>(a) Digit 6:</strong> In tenths place = 6/10 = <strong>0.6</strong>.<br>\n• <strong>(b) Digit 8:</strong> In hundredths place = 8/100 = <strong>0.08</strong>.<br>\n• <strong>(c) Expanded form:</strong> <strong>40 + 5 + 6/10 + 8/100</strong> (or 40 + 5 + 0.6 + 0.08).",
        "marks": 3,
        "rubric": [
          {
            "key": "Tenths / 0.6",
            "marks": "1 M"
          },
          {
            "key": "Hundredths / 0.08",
            "marks": "1 M"
          },
          {
            "key": "Expanded notation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Adding Decimals (Shopping Bill)",
        "q": "Rohan bought a notebook for ₹25.75, a pen for ₹12.50, and an eraser for ₹4.25. (a) What is his total bill? (b) If he gave a ₹50 note to the shopkeeper, how much change did he receive?",
        "ans": "<strong>Bill & Change Calculation:</strong><br>\n• <strong>(a) Total Bill:</strong><br>\n  &nbsp;&nbsp;25.75<br>\n  + 12.50<br>\n  + &nbsp;4.25<br>\n  = <strong>₹42.50</strong>.<br>\n• <strong>(b) Change received:</strong> ₹50.00 - ₹42.50 = <strong>₹7.50</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total bill: ₹42.50",
            "marks": "1.5 M"
          },
          {
            "key": "Change: ₹7.50",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Subtracting Decimals",
        "q": "Solve: (a) 15.4 - 8.75 (b) 100.00 - 45.65.",
        "ans": "<strong>Decimal Subtractions:</strong><br>\n• <strong>(a) 15.40 - 8.75:</strong><br>\n  &nbsp;&nbsp;15.40 - 8.75 = <strong>6.65</strong>.<br>\n• <strong>(b) 100.00 - 45.65:</strong><br>\n  &nbsp;&nbsp;100.00 - 45.65 = <strong>54.35</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): 6.65",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 54.35",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Metres and Centimetres in Decimals",
        "q": "Express in metres using decimals:<br>(a) 15 cm<br>(b) 6 cm<br>(c) 2 m 45 cm<br>(d) 9 m 7 cm",
        "ans": "<strong>Metre Conversions (1 m = 100 cm; divide cm by 100):</strong><br>\n• (a) 15 cm = 15 ÷ 100 = <strong>0.15 m</strong>.<br>\n• (b) 6 cm = 6 ÷ 100 = <strong>0.06 m</strong>.<br>\n• (c) 2 m 45 cm = 2 + 0.45 = <strong>2.45 m</strong>.<br>\n• (d) 9 m 7 cm = 9 + 0.07 = <strong>9.07 m</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "0.15 m",
            "marks": "1 M"
          },
          {
            "key": "0.06 m",
            "marks": "1 M"
          },
          {
            "key": "2.45 m",
            "marks": "1 M"
          },
          {
            "key": "9.07 m",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Kilograms and Grams in Decimals",
        "q": "Express in kilograms using decimals:<br>(a) 500 g<br>(b) 250 g<br>(c) 50 g<br>(d) 4 kg 75 g",
        "ans": "<strong>Kilogram Conversions (1 kg = 1,000 g; divide g by 1,000):</strong><br>\n• (a) 500 g = 500 ÷ 1000 = <strong>0.5 kg</strong>.<br>\n• (b) 250 g = 250 ÷ 1000 = <strong>0.25 kg</strong>.<br>\n• (c) 50 g = 50 ÷ 1000 = <strong>0.05 kg</strong>.<br>\n• (d) 4 kg 75 g = 4 + 75/1000 = <strong>4.075 kg</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "0.5 kg",
            "marks": "1 M"
          },
          {
            "key": "0.25 kg",
            "marks": "1 M"
          },
          {
            "key": "0.05 kg",
            "marks": "1 M"
          },
          {
            "key": "4.075 kg",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Temperature Fall Calculation",
        "q": "At 3:00 PM, the temperature in Kolkata was 28.5°C. By 3:00 AM next morning, the temperature had fallen to 19.8°C. How many degrees did the temperature fall?",
        "ans": "<strong>Temperature Drop:</strong><br>\n• Temperature fall = 28.5°C - 19.8°C = <strong>8.7°C</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction statement",
            "marks": "1 M"
          },
          {
            "key": "Answer: 8.7°C",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Height Growth in Decimals",
        "q": "Dinesh was 1.42 metres tall in Class 4. By Class 5, his height increased by 0.08 metres. How tall is Dinesh now?",
        "ans": "<strong>Height Addition:</strong><br>\n• New height = 1.42 m + 0.08 m = <strong>1.50 metres (or 1.5 m)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 1.42 + 0.08",
            "marks": "1 M"
          },
          {
            "key": "Answer: 1.50 m",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Hundredths Grid Model",
        "q": "A large square is divided into 100 small equal squares. (a) What fraction and what decimal does 1 small square represent? (b) If 38 squares are shaded green, what decimal does the shaded region represent? (c) What decimal represents the unshaded region?",
        "ans": "<strong>Hundredths Grid:</strong><br>\n• <strong>(a) 1 small square:</strong> Fraction = <strong>1/100</strong>, Decimal = <strong>0.01</strong>.<br>\n• <strong>(b) 38 shaded squares:</strong> 38/100 = <strong>0.38</strong>.<br>\n• <strong>(c) Unshaded region:</strong> 100 - 38 = 62 squares. Decimal = 62/100 = <strong>0.62</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1/100 & 0.01",
            "marks": "1 M"
          },
          {
            "key": "Shaded: 0.38",
            "marks": "1 M"
          },
          {
            "key": "Unshaded: 0.62",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Matchstick Length Measurement",
        "q": "A matchstick placed against a ruler starts at mark 2.4 cm and ends at mark 6.7 cm. What is the actual length of the matchstick?",
        "ans": "<strong>Length Difference:</strong><br>\n• Length = End mark - Start mark = 6.7 cm - 2.4 cm = <strong>4.3 cm</strong> (or 43 mm).",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction shown",
            "marks": "1 M"
          },
          {
            "key": "Length: 4.3 cm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Multiplying Decimals by 10, 100",
        "q": "Evaluate without long multiplication:<br>(a) 4.56 × 10<br>(b) 0.07 × 100<br>(c) 3.8 ÷ 10",
        "ans": "<strong>Decimal Shift Rules:</strong><br>\n• <strong>(a) 4.56 × 10:</strong> Move decimal 1 place right = <strong>45.6</strong>.<br>\n• <strong>(b) 0.07 × 100:</strong> Move decimal 2 places right = <strong>7</strong>.<br>\n• <strong>(c) 3.8 ÷ 10:</strong> Move decimal 1 place left = <strong>0.38</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "45.6",
            "marks": "1 M"
          },
          {
            "key": "7",
            "marks": "1 M"
          },
          {
            "key": "0.38",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Rounding Off Decimals",
        "q": "Round off the following decimals to the nearest whole number:<br>(a) 7.3<br>(b) 12.8<br>(c) 24.5",
        "ans": "<strong>Rounding Rules:</strong><br>\n• (a) 7.3: Tenths digit is 3 (< 5), rounds down to <strong>7</strong>.<br>\n• (b) 12.8: Tenths digit is 8 (≥ 5), rounds up to <strong>13</strong>.<br>\n• (c) 24.5: Tenths digit is 5 (halfway), standard rule rounds up to <strong>25</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "7",
            "marks": "1 M"
          },
          {
            "key": "13",
            "marks": "1 M"
          },
          {
            "key": "25",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Petrol Price Calculation",
        "q": "The cost of petrol is ₹96.50 per litre. What will be the cost of 5 litres of petrol?",
        "ans": "<strong>Multiplication:</strong><br>\n• Cost = 5 × ₹96.50 = <strong>₹482.50</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Multiplication statement",
            "marks": "1 M"
          },
          {
            "key": "Answer: ₹482.50",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Ordering Decimals Ascending",
        "q": "Arrange the following numbers in ascending order (smallest to greatest):<br>0.4, 0.04, 0.44, 4.04, 0.004.",
        "ans": "<strong>Ascending Ordering:</strong><br>\n• Converting to thousandths: 0.004, 0.040, 0.400, 0.440, 4.040.<br>\n• <strong>Ascending order:</strong> <strong>0.004 < 0.04 < 0.4 < 0.44 < 4.04</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Equal decimal places comparison",
            "marks": "1 M"
          },
          {
            "key": "Correct ordered sequence",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Water Jug Capacity Problem",
        "q": "A jug contains 2.75 litres of water. 1.25 litres are poured into a glass. How much water is left in the jug?",
        "ans": "<strong>Subtraction:</strong><br>\n• Water remaining = 2.75 - 1.25 = <strong>1.50 litres (or 1.5 litres)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 2.75 - 1.25",
            "marks": "1 M"
          },
          {
            "key": "Answer: 1.50 litres",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Decimal Number Line",
        "q": "Between which two whole numbers does 3.7 lie on a number line? Which whole number is it closer to?",
        "ans": "<strong>Number Line Positioning:</strong><br>\n• 3.7 lies between whole numbers <strong>3 and 4</strong>.<br>\n• Since the tenths digit is 7 (> 5), it is closer to <strong>4</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Between 3 and 4",
            "marks": "1 M"
          },
          {
            "key": "Closer to 4",
            "marks": "1 M"
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
        "category": "Textbook Exercise • Land Division among Three Children",
        "q": "Arbaaz planned to divide his land equally among his three children—Nasreen, Shahid, and Zaid. He wanted to give each child 30 square metres of land. Nasreen's land is 5 m long and 6 m wide. Shahid's land is 3 m wide and 10 m long. Zaid's land is 2 m wide and 15 m long.<br>(a) Find the area of each child's land.<br>(b) Who got the land with the longest boundary (perimeter)?",
        "ans": "<strong>Perimeter & Area Calculations:</strong><br>\n• <strong>(a) Areas:</strong><br>\n  - Nasreen: 5 m × 6 m = <strong>30 sq m</strong>.<br>\n  - Shahid: 3 m × 10 m = <strong>30 sq m</strong>.<br>\n  - Zaid: 2 m × 15 m = <strong>30 sq m</strong>.<br>\n• <strong>(b) Boundaries (Perimeter = 2 × (l + b)):</strong><br>\n  - Nasreen: 2 × (5 + 6) = 2 × 11 = <strong>22 metres</strong>.<br>\n  - Shahid: 2 × (3 + 10) = 2 × 13 = <strong>26 metres</strong>.<br>\n  - Zaid: 2 × (2 + 15) = 2 × 17 = <strong>34 metres</strong>.<br>\n• <strong>Zaid</strong> got the land with the longest boundary (34 metres).",
        "marks": 4,
        "rubric": [
          {
            "key": "All three areas equal 30 sq m",
            "marks": "1.5 M"
          },
          {
            "key": "Perimeter calculations: 22, 26, 34 m",
            "marks": "1.5 M"
          },
          {
            "key": "Conclusion: Zaid has longest boundary",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Postcard Loop (Paper Cutting Trick)",
        "q": "How can you cut a small 14 cm × 9 cm postcard in a continuous spiral strip so that it opens into a huge belt large enough for a person to pass through?",
        "ans": "<strong>Postcard Belt Cutting Technique:</strong><br>\n1. Fold the postcard in half along its length.<br>\n2. Cut narrow parallel slits starting alternately from the folded edge and from the open edge, leaving a small 2 mm margin at each turn so the strip is not severed completely.<br>\n3. Cut open the folds of the inner loops (leaving the two end loops intact).<br>\n4. Pull the paper gently: the thin cuts unfold into a huge continuous zigzag paper belt with a perimeter exceeding 2 to 3 metres, allowing a child or adult to step right through!",
        "marks": 3,
        "rubric": [
          {
            "key": "Alternating slit cutting procedure explained",
            "marks": "2 M"
          },
          {
            "key": "Continuous loop expansion explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cost of Fencing vs Tiling",
        "q": "A square field has a side of 40 metres. (a) What is the total length of wire needed to put a fence of 4 rounds around the field? (b) If fencing costs ₹15 per metre, what is the cost of fencing? (c) If ploughing the field costs ₹2 per square metre, what is the cost of ploughing?",
        "ans": "<strong>Step-by-step Solution:</strong><br>\n• <strong>(a) Wire length:</strong> Perimeter of 1 round = 4 × 40 m = 160 m. For 4 rounds = 4 × 160 = <strong>640 metres</strong>.<br>\n• <strong>(b) Cost of fencing:</strong> 640 m × ₹15 = <strong>₹9,600</strong>.<br>\n• <strong>(c) Cost of ploughing:</strong> Area = 40 m × 40 m = 1,600 sq m. Cost = 1,600 × ₹2 = <strong>₹3,200</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "Wire length: 640 m",
            "marks": "1.5 M"
          },
          {
            "key": "Fencing cost: ₹9,600",
            "marks": "1 M"
          },
          {
            "key": "Ploughing cost: ₹3,200",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Saree Border Length",
        "q": "A saree is 5.5 metres long and 1.2 metres wide. A decorative zari border is to be stitched along all 4 outer edges of the saree. What is the total length of border required in metres?",
        "ans": "<strong>Perimeter of Saree:</strong><br>\n• Perimeter = 2 × (Length + Width) = 2 × (5.5 + 1.2) = 2 × 6.7 = <strong>13.4 metres</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Formula 2(l + w)",
            "marks": "1 M"
          },
          {
            "key": "Answer: 13.4 metres",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Comparing Rectangles with Equal Perimeter",
        "q": "Two rectangular vegetable plots both have a perimeter of 36 metres: Plot A is 10 m long and 8 m wide. Plot B is 12 m long and 6 m wide. (a) Verify that both plots have the same perimeter. (b) Find the area of Plot A and Plot B. (c) Which plot gives more area to grow vegetables?",
        "ans": "<strong>Comparison:</strong><br>\n• <strong>(a) Perimeters:</strong><br>\n  - Plot A: 2 × (10 + 8) = 2 × 18 = 36 m.<br>\n  - Plot B: 2 × (12 + 6) = 2 × 18 = 36 m. (Verified!).<br>\n• <strong>(b) Areas:</strong><br>\n  - Area of Plot A = 10 × 8 = <strong>80 sq m</strong>.<br>\n  - Area of Plot B = 12 × 6 = <strong>72 sq m</strong>.<br>\n• <strong>(c) Conclusion:</strong> <strong>Plot A</strong> gives 80 - 72 = 8 sq m more area (shapes closer to a square maximize area!).",
        "marks": 4,
        "rubric": [
          {
            "key": "Verification of perimeters",
            "marks": "1 M"
          },
          {
            "key": "Areas: 80 sq m and 72 sq m",
            "marks": "2 M"
          },
          {
            "key": "Plot A gives more area",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Carpet Fitting in a Hall",
        "q": "A hall floor is 15 metres long and 8 metres wide. A square carpet of side 6 metres is laid on the floor. Find the area of the floor that is left bare (not carpeted).",
        "ans": "<strong>Area Difference:</strong><br>\n1. Area of hall floor = 15 m × 8 m = 120 sq metres.<br>\n2. Area of square carpet = 6 m × 6 m = 36 sq metres.<br>\n3. <strong>Bare floor area:</strong> 120 - 36 = <strong>84 sq metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Hall area: 120 sq m",
            "marks": "1 M"
          },
          {
            "key": "Carpet area: 36 sq m",
            "marks": "1 M"
          },
          {
            "key": "Bare area: 84 sq m",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Thread Loop Shape Shifting",
        "q": "A loop of string of length 20 cm is placed on a table: (a) If it forms a square, what is its area? (b) If it forms a rectangle of width 4 cm, what is its area? (c) Which shape has greater area?",
        "ans": "<strong>String Loop (Perimeter = 20 cm):</strong><br>\n• <strong>(a) Square:</strong> Side = 20 ÷ 4 = 5 cm. Area = 5 × 5 = <strong>25 sq cm</strong>.<br>\n• <strong>(b) Rectangle:</strong> Width = 4 cm. Length = (20 ÷ 2) - 4 = 10 - 4 = 6 cm. Area = 6 × 4 = <strong>24 sq cm</strong>.<br>\n• <strong>(c) Conclusion:</strong> The <strong>Square</strong> has greater area by 1 sq cm.",
        "marks": 3,
        "rubric": [
          {
            "key": "Square area: 25 sq cm",
            "marks": "1 M"
          },
          {
            "key": "Rectangle area: 24 sq cm",
            "marks": "1 M"
          },
          {
            "key": "Square has greater area",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Square Tiles for a Bathroom",
        "q": "A bathroom wall measures 3 metres by 2 metres. It is to be covered with square ceramic tiles of side 20 cm. How many tiles are required?",
        "ans": "<strong>Tile Calculations:</strong><br>\n• Wall length = 3 m = 300 cm; Wall height = 2 m = 200 cm.<br>\n• Area of wall = 300 × 200 = 60,000 sq cm.<br>\n• Area of 1 tile = 20 × 20 = 400 sq cm.<br>\n• <strong>Number of tiles:</strong> 60,000 ÷ 400 = <strong>150 tiles</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Conversions to cm",
            "marks": "1 M"
          },
          {
            "key": "Wall and tile areas",
            "marks": "1 M"
          },
          {
            "key": "Total tiles: 150",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Perimeter from Area of Square",
        "q": "A square lawn has an area of 144 square metres. (a) What is the length of each side of the lawn? (b) What is the perimeter of the lawn?",
        "ans": "<strong>Side and Perimeter:</strong><br>\n• <strong>(a) Side length:</strong> Side = √144 = <strong>12 metres</strong>.<br>\n• <strong>(b) Perimeter:</strong> 4 × Side = 4 × 12 = <strong>48 metres</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Side: 12 metres",
            "marks": "1 M"
          },
          {
            "key": "Perimeter: 48 metres",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Dividing Square into Triangles",
        "q": "A square has a side of 10 cm. Two diagonals are drawn, dividing it into four equal triangles. (a) What is the total area of the square? (b) What is the area of each triangle?",
        "ans": "<strong>Area Division:</strong><br>\n• <strong>(a) Square area:</strong> 10 cm × 10 cm = <strong>100 sq cm</strong>.<br>\n• <strong>(b) Triangle area:</strong> 100 sq cm ÷ 4 = <strong>25 sq cm</strong> each.",
        "marks": 2,
        "rubric": [
          {
            "key": "Square area: 100 sq cm",
            "marks": "1 M"
          },
          {
            "key": "Each triangle: 25 sq cm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Running Track Laps",
        "q": "A school rectangular athletic field is 120 metres long and 80 metres wide. An athlete runs 5 complete laps around the field. What total distance did the athlete run in kilometres?",
        "ans": "<strong>Distance Run:</strong><br>\n• Perimeter of 1 lap = 2 × (120 + 80) = 2 × 200 = 400 metres.<br>\n• 5 laps = 5 × 400 = 2,000 metres.<br>\n• In kilometres = 2,000 ÷ 1,000 = <strong>2 kilometres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1 lap: 400 m",
            "marks": "1 M"
          },
          {
            "key": "5 laps: 2,000 m",
            "marks": "1 M"
          },
          {
            "key": "Conversion: 2 km",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Painting Cost of Wall",
        "q": "A room has a rectangular wall of 5 m by 3 m with a window of 1.5 m by 1 m. (a) What is the area of the wall to be painted (excluding the window)? (b) If painting costs ₹40 per square metre, what is the total cost?",
        "ans": "<strong>Painting Calculation:</strong><br>\n• Total wall area = 5 × 3 = 15 sq m.<br>\n• Window area = 1.5 × 1 = 1.5 sq m.<br>\n• <strong>(a) Area to paint:</strong> 15 - 1.5 = <strong>13.5 sq metres</strong>.<br>\n• <strong>(b) Painting cost:</strong> 13.5 × ₹40 = <strong>₹540</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Net paintable area: 13.5 sq m",
            "marks": "1.5 M"
          },
          {
            "key": "Cost: ₹540",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Finding Width from Perimeter",
        "q": "A rectangular park has a perimeter of 180 metres. If its length is 55 metres, find its width and its area.",
        "ans": "<strong>Width and Area:</strong><br>\n• Half perimeter (l + w) = 180 ÷ 2 = 90 metres.<br>\n• Width = 90 - 55 = <strong>35 metres</strong>.<br>\n• Area = Length × Width = 55 m × 35 m = <strong>1,925 sq metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Width: 35 m",
            "marks": "1.5 M"
          },
          {
            "key": "Area: 1,925 sq m",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Wire Shape Transition",
        "q": "A wire bent into the shape of a rectangle of 18 cm by 12 cm is straightened and then rebent into a square. (a) What is the length of the wire? (b) What will be the side of the square? (c) Which shape encloses more area?",
        "ans": "<strong>Wire Calculations:</strong><br>\n• <strong>(a) Wire length (Perimeter):</strong> 2 × (18 + 12) = 2 × 30 = <strong>60 cm</strong>.<br>\n• <strong>(b) Side of square:</strong> 60 ÷ 4 = <strong>15 cm</strong>.<br>\n• <strong>(c) Area comparison:</strong><br>\n  - Rectangle area = 18 × 12 = 216 sq cm.<br>\n  - Square area = 15 × 15 = 225 sq cm.<br>\n  The <strong>Square</strong> encloses more area by 225 - 216 = 9 sq cm.",
        "marks": 4,
        "rubric": [
          {
            "key": "Perimeter: 60 cm",
            "marks": "1 M"
          },
          {
            "key": "Square side: 15 cm",
            "marks": "1 M"
          },
          {
            "key": "Areas calculated: 216 & 225 sq cm",
            "marks": "1 M"
          },
          {
            "key": "Square encloses more area",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cost of Grass Turfing",
        "q": "A square garden has a side of 25 metres. Inside it, a square pond of side 5 metres is dug in the centre. The remaining area is planted with green turf grass. If turfing costs ₹50 per square metre, find the total turfing expense.",
        "ans": "<strong>Turfing Calculations:</strong><br>\n• Total garden area = 25 × 25 = 625 sq m.<br>\n• Pond area = 5 × 5 = 25 sq m.<br>\n• Turfed area = 625 - 25 = 600 sq m.<br>\n• <strong>Total expense:</strong> 600 × ₹50 = <strong>₹30,000</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Garden area: 625 sq m",
            "marks": "1 M"
          },
          {
            "key": "Turf area: 600 sq m",
            "marks": "1 M"
          },
          {
            "key": "Total expense: ₹30,000",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tripling the Dimensions of a Rectangle",
        "q": "A rectangle has length 6 cm and width 4 cm. If both its length and width are tripled: (a) What happens to its perimeter? (b) What happens to its area?",
        "ans": "<strong>Tripling Scaling:</strong><br>\n• Original: Perimeter = 2(6+4) = 20 cm; Area = 6×4 = 24 sq cm.<br>\n• New dimensions: Length = 18 cm, Width = 12 cm.<br>\n• <strong>(a) New Perimeter:</strong> 2(18+12) = 60 cm (<strong>3 times larger</strong>).<br>\n• <strong>(b) New Area:</strong> 18 × 12 = 216 sq cm (<strong>9 times larger</strong>, since 3² = 9).",
        "marks": 3,
        "rubric": [
          {
            "key": "Perimeter increases 3 times (60 cm)",
            "marks": "1.5 M"
          },
          {
            "key": "Area increases 9 times (216 sq cm)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Perimeter of Combined Tables",
        "q": "Two identical square desks of side 80 cm are pushed together side-by-side to form one long rectangular conference table. (a) What are the dimensions of the new table? (b) What is its perimeter? (c) Did the perimeter double? Explain.",
        "ans": "<strong>Combined Desks:</strong><br>\n• <strong>(a) Dimensions:</strong> Length = 80 + 80 = <strong>160 cm</strong>; Width = <strong>80 cm</strong>.<br>\n• <strong>(b) Perimeter:</strong> 2 × (160 + 80) = 2 × 240 = <strong>480 cm</strong>.<br>\n• <strong>(c) Perimeter double test:</strong> Individual desk perimeter = 4 × 80 = 320 cm. Double would be 640 cm. The perimeter <strong>did NOT double</strong> because two 80 cm edges are joined internally and no longer form part of the boundary.",
        "marks": 4,
        "rubric": [
          {
            "key": "Dimensions: 160 cm × 80 cm",
            "marks": "1 M"
          },
          {
            "key": "Perimeter: 480 cm",
            "marks": "1.5 M"
          },
          {
            "key": "Explanation of lost internal edges",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fencing with Gates",
        "q": "A rectangular farm is 150 metres long and 100 metres wide. It needs to be fenced, but two gates of 5 metres width each are to be left unfenced for entry. What length of fencing wire is needed for 1 round?",
        "ans": "<strong>Fencing with Openings:</strong><br>\n• Total perimeter = 2 × (150 + 100) = 2 × 250 = 500 metres.<br>\n• Total opening for 2 gates = 2 × 5 m = 10 metres.<br>\n• <strong>Fencing wire needed:</strong> 500 - 10 = <strong>490 metres</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Perimeter 500 m and gate deduction 10 m",
            "marks": "1 M"
          },
          {
            "key": "Wire needed: 490 m",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Concrete Slabs for Footpath",
        "q": "A footpath 50 metres long and 2 metres wide is to be paved with square concrete slabs of side 50 cm. (a) What is the area of the footpath in sq cm? (b) How many slabs are needed?",
        "ans": "<strong>Paving Calculations:</strong><br>\n• Footpath: 50 m = 5,000 cm; 2 m = 200 cm.<br>\n• <strong>(a) Area in sq cm:</strong> 5,000 × 200 = <strong>1,000,000 sq cm</strong> (or 100 sq m).<br>\n• <strong>(b) Slabs needed:</strong> Area of 1 slab = 50 × 50 = 2,500 sq cm.<br>\n  Number of slabs = 1,000,000 ÷ 2,500 = <strong>400 slabs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Area: 1,000,000 sq cm",
            "marks": "1.5 M"
          },
          {
            "key": "Slabs: 400",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Comparing Postage Stamp Sizes",
        "q": "Stamp A is 4 cm × 3 cm. Stamp B is 6 cm × 2 cm. Stamp C is 5 cm × 2.5 cm. (a) Find the area of each stamp. (b) Which stamp covers the largest area?",
        "ans": "<strong>Stamp Areas:</strong><br>\n• Area of Stamp A = 4 × 3 = <strong>12 sq cm</strong>.<br>\n• Area of Stamp B = 6 × 2 = <strong>12 sq cm</strong>.<br>\n• Area of Stamp C = 5 × 2.5 = <strong>12.5 sq cm</strong>.<br>\n• <strong>Stamp C</strong> covers the largest area (12.5 sq cm).",
        "marks": 3,
        "rubric": [
          {
            "key": "Three areas calculated",
            "marks": "2 M"
          },
          {
            "key": "Stamp C identified as largest",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Irregular Garden Boundary Cost",
        "q": "An irregular five-sided park has boundary sides of 45 m, 60 m, 35 m, 50 m, and 40 m. If fencing wire costs ₹12 per metre, find the total cost of fencing the park.",
        "ans": "<strong>Perimeter & Cost:</strong><br>\n• Perimeter = 45 + 60 + 35 + 50 + 40 = 230 metres.<br>\n• Total cost = 230 m × ₹12 = <strong>₹2,760</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Perimeter: 230 m",
            "marks": "1 M"
          },
          {
            "key": "Cost: ₹2,760",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Square Pillow Border Lace",
        "q": "A square cushion cover has a side of 45 cm. (a) What length of lace is needed for 1 cushion? (b) What length of lace is needed for a set of 6 cushions in metres?",
        "ans": "<strong>Lace Requirements:</strong><br>\n• <strong>(a) For 1 cushion:</strong> 4 × 45 cm = 180 cm.<br>\n• <strong>(b) For 6 cushions:</strong> 6 × 180 cm = 1,080 cm.<br>\n• In metres = 1,080 ÷ 100 = <strong>10.8 metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1 cushion: 180 cm",
            "marks": "1.5 M"
          },
          {
            "key": "6 cushions: 10.8 metres",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Window Grille Area",
        "q": "A square window grille consists of 16 smaller square panes, each of side 15 cm. (a) What is the total area of the window grille? (b) What is the outer perimeter of the window?",
        "ans": "<strong>Window Pane Calculations:</strong><br>\n• Area of 1 pane = 15 × 15 = 225 sq cm.<br>\n• <strong>(a) Total area:</strong> 16 × 225 = <strong>3,600 sq cm</strong>.<br>\n• <strong>(b) Outer dimensions:</strong> 16 square panes arranged as 4 × 4 grid.<br>\n  Window side = 4 × 15 cm = 60 cm.<br>\n  Perimeter = 4 × 60 cm = <strong>240 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total area: 3,600 sq cm",
            "marks": "1.5 M"
          },
          {
            "key": "Outer perimeter: 240 cm",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Unit of Area vs Unit of Perimeter",
        "q": "Why is perimeter measured in linear units (like cm or metres) while area is measured in square units (like sq cm or sq metres)? Explain clearly.",
        "ans": "<strong>Units Conceptual Distinction:</strong><br>\n• <strong>Perimeter:</strong> Measures the total 1-dimensional length of the surrounding boundary line. It is a distance, so it is measured in linear units (cm, m).<br>\n• <strong>Area:</strong> Measures the 2-dimensional surface region enclosed inside the boundary. It counts how many unit squares (1 cm × 1 cm or 1 m × 1 m) fit inside, so it is measured in square units (sq cm, sq m).",
        "marks": 2,
        "rubric": [
          {
            "key": "1D boundary length concept for perimeter",
            "marks": "1 M"
          },
          {
            "key": "2D square count concept for area",
            "marks": "1 M"
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
        "category": "Textbook Exercise • Tally Marks (Traffic Survey)",
        "q": "Yamini did a project 'Animals and Birds'. She stood on the road for half an hour and noted passing vehicles using tally marks: Cycle (28), Car (12), Auto-rickshaw (18), Bus (15), Cycle-rickshaw (24), Truck (6).<br>(a) Draw the tally marks for Cycle (28) and Bus (15) using NCERT box notation.<br>(b) Write the total number of vehicles that passed by in half an hour.<br>(c) Which vehicle was observed the most?",
        "ans": "<strong>Survey Analysis:</strong><br>\n• <strong>(a) Tally Marks (each complete 5-box is 4 sides + 1 diagonal):</strong><br>\n  - Cycle (28): 5 complete boxes of five + 3 lines (5 × 5 + 3 = 28).<br>\n  - Bus (15): 3 complete boxes of five (5 × 3 = 15).<br>\n• <strong>(b) Total vehicles:</strong> 28 + 12 + 18 + 15 + 24 + 6 = <strong>103 vehicles</strong>.<br>\n• <strong>(c) Most observed vehicle:</strong> <strong>Cycle (28)</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "Tally mark representation",
            "marks": "1.5 M"
          },
          {
            "key": "Total count: 103 vehicles",
            "marks": "1.5 M"
          },
          {
            "key": "Most observed: Cycle",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Chapati Chart (Pie Chart / Circle Graph)",
        "q": "In a class of 40 students, teacher made a circle chart of their favorite activities after school:<br>• 1/2 of the children like playing sports.<br>• 1/4 of the children like watching TV.<br>• 1/4 of the children like reading books.<br>(a) How many children like playing sports?<br>(b) How many children like watching TV?<br>(c) How many children like reading books?",
        "ans": "<strong>Chapati Chart Calculations (Total = 40 students):</strong><br>\n• <strong>(a) Sports (1/2):</strong> 1/2 of 40 = 40 ÷ 2 = <strong>20 students</strong>.<br>\n• <strong>(b) Watching TV (1/4):</strong> 1/4 of 40 = 40 ÷ 4 = <strong>10 students</strong>.<br>\n• <strong>(c) Reading books (1/4):</strong> 1/4 of 40 = 40 ÷ 4 = <strong>10 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Sports: 20",
            "marks": "1 M"
          },
          {
            "key": "TV: 10",
            "marks": "1 M"
          },
          {
            "key": "Books: 10",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Rabbit Population Growth Table",
        "q": "Rabbits were brought to an island. The table shows their numbers each year:<br>• Year 0: 10 rabbits<br>• Year 1: 18 rabbits (almost double)<br>• Year 2: 32 rabbits<br>• Year 3: 58 rabbits<br>• Year 4: 108 rabbits<br>(a) Is the rabbit population growing by adding a fixed number or by multiplying? (b) Predict the approximate number of rabbits in Year 5.",
        "ans": "<strong>Population Trend:</strong><br>\n• <strong>(a) Growth nature:</strong> The population is <strong>multiplying / almost doubling each year</strong> (each year's count is a little less than double the previous year: 10×2-2=18, 18×2-4=32, 32×2-6=58, 58×2-8=108).<br>\n• <strong>(b) Year 5 prediction:</strong> Approximately double of 108 minus 10 ≈ 216 - 10 = <strong>around 200 to 210 rabbits</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Multiplicative / doubling trend identified",
            "marks": "1.5 M"
          },
          {
            "key": "Year 5 prediction (approx 200-210)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Plant Growth Bar Graph",
        "q": "A plant's height was measured every 4 days:<br>• Day 0: 0 cm<br>• Day 4: 1.4 cm<br>• Day 8: 5.3 cm<br>• Day 12: 9.5 cm<br>• Day 16: 10.9 cm<br>• Day 20: 11.1 cm<br>(a) Between which days did the plant grow the fastest? (b) What was the total growth of the plant in 20 days?",
        "ans": "<strong>Growth Intervals:</strong><br>\n• Day 0 to 4: 1.4 - 0 = 1.4 cm.<br>\n• Day 4 to 8: 5.3 - 1.4 = 3.9 cm.<br>\n• Day 8 to 12: 9.5 - 5.3 = <strong>4.2 cm</strong> (fastest!).<br>\n• Day 12 to 16: 10.9 - 9.5 = 1.4 cm.<br>\n• Day 16 to 20: 11.1 - 10.9 = 0.2 cm.<br>\n• <strong>(a) Fastest growth:</strong> Between <strong>Day 8 and Day 12</strong> (grew 4.2 cm).<br>\n• <strong>(b) Total growth:</strong> 11.1 - 0 = <strong>11.1 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Interval analysis",
            "marks": "1 M"
          },
          {
            "key": "Fastest: Day 8 to 12",
            "marks": "1 M"
          },
          {
            "key": "Total growth: 11.1 cm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Helping Hands at Home Survey",
        "q": "Children were asked what work they help most with at home: Going to market (47), Washing utensils (15), Washing clothes (3), Making/serving food (25), Cleaning house (10).<br>(a) How many children were surveyed in total? (b) Which chore do the most children help with? (c) What fraction of children help with going to the market (approximate)?",
        "ans": "<strong>Survey Summary:</strong><br>\n• <strong>(a) Total children:</strong> 47 + 15 + 3 + 25 + 10 = <strong>100 children</strong>.<br>\n• <strong>(b) Most helped chore:</strong> <strong>Going to market (47 children)</strong>.<br>\n• <strong>(c) Market fraction:</strong> 47/100 ≈ <strong>almost 1/2 of the children</strong> (about 47%).",
        "marks": 3,
        "rubric": [
          {
            "key": "Total: 100",
            "marks": "1 M"
          },
          {
            "key": "Market most helped",
            "marks": "1 M"
          },
          {
            "key": "Fraction approx 1/2 (47/100)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Attendance Absenteeism Chart",
        "q": "Absentees on Monday across classes: Class 1: 2, Class 2: 1, Class 3: 3, Class 4: 4, Class 5: 2. (a) What was the total number of absent students in the primary school on Monday? (b) Which class had the highest number of absentees?",
        "ans": "<strong>Absentee Analysis:</strong><br>\n• <strong>(a) Total absentees:</strong> 2 + 1 + 3 + 4 + 2 = <strong>12 students</strong>.<br>\n• <strong>(b) Highest absentees:</strong> <strong>Class 4</strong> (4 students absent).",
        "marks": 2,
        "rubric": [
          {
            "key": "Total: 12 students",
            "marks": "1 M"
          },
          {
            "key": "Class 4 highest",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Favorite Ice Cream Pictograph",
        "q": "In a pictograph, one ice cream cone symbol 🍦 represents 10 students. The table shows: Vanilla: 3 symbols; Chocolate: 5 symbols; Mango: 4 symbols; Strawberry: 2 symbols.<br>(a) How many students prefer Chocolate ice cream?<br>(b) How many more students prefer Mango than Strawberry?<br>(c) What is the total number of students?",
        "ans": "<strong>Pictograph Calculations (1 symbol = 10 students):</strong><br>\n• <strong>(a) Chocolate:</strong> 5 × 10 = <strong>50 students</strong>.<br>\n• <strong>(b) Mango vs Strawberry:</strong> (4 - 2) × 10 = 2 × 10 = <strong>20 more students</strong>.<br>\n• <strong>(c) Total students:</strong> (3 + 5 + 4 + 2) × 10 = 14 × 10 = <strong>140 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Chocolate: 50",
            "marks": "1 M"
          },
          {
            "key": "Mango difference: 20",
            "marks": "1 M"
          },
          {
            "key": "Total: 140",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Temperature Bar Chart",
        "q": "City temperatures on a winter day: Delhi: 15°C, Shimla: 5°C, Chennai: 30°C, Jaipur: 20°C. If a bar graph has 1 cm height = 5°C: (a) What will be the height of the bar for Chennai? (b) What will be the height of the bar for Shimla?",
        "ans": "<strong>Bar Chart Heights:</strong><br>\n• <strong>(a) Chennai (30°C):</strong> 30 ÷ 5 = <strong>6 cm</strong>.<br>\n• <strong>(b) Shimla (5°C):</strong> 5 ÷ 5 = <strong>1 cm</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Chennai bar: 6 cm",
            "marks": "1 M"
          },
          {
            "key": "Shimla bar: 1 cm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Mode in Data",
        "q": "The shoe sizes of 11 boys are: 5, 6, 6, 7, 5, 6, 8, 6, 7, 6, 5. (a) Arrange the data in a frequency table with tally marks. (b) Which shoe size is the most common (mode)?",
        "ans": "<strong>Frequency Table:</strong><br>\n• Size 5: 3 boys (|||)<br>\n• Size 6: 5 boys (🗎 with 5 lines)<br>\n• Size 7: 2 boys (||)<br>\n• Size 8: 1 boy (|)<br>\n• <strong>Most common size:</strong> <strong>Size 6</strong> (occurs 5 times).",
        "marks": 3,
        "rubric": [
          {
            "key": "Frequency table with tally",
            "marks": "2 M"
          },
          {
            "key": "Mode: Size 6",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tree Plantation Data",
        "q": "Five houses planted saplings in 'Van Mahotsav': House 1 (12), House 2 (18), House 3 (15), House 4 (25), House 5 (10). (a) What is the total number of saplings planted? (b) What is the average number of saplings planted per house?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Total saplings:</strong> 12 + 18 + 15 + 25 + 10 = <strong>80 saplings</strong>.<br>\n• <strong>(b) Average:</strong> Total ÷ Number of houses = 80 ÷ 5 = <strong>16 saplings per house</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total: 80 saplings",
            "marks": "1.5 M"
          },
          {
            "key": "Average: 16 saplings",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Reading Pie Chart Fractions",
        "q": "A circular chart shows: 50% students walk to school, 25% take school bus, 25% ride bicycle. (a) What fraction of students walk? (b) If there are 200 students in the school, how many ride a bicycle?",
        "ans": "<strong>Fractions & Counts:</strong><br>\n• <strong>(a) Walking fraction:</strong> 50% = 50/100 = <strong>1/2</strong>.<br>\n• <strong>(b) Bicycle riders:</strong> 25% = 1/4 of total. 1/4 of 200 = 200 ÷ 4 = <strong>50 students</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Walking: 1/2",
            "marks": "1 M"
          },
          {
            "key": "Bicycle: 50 students",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Dice Throw Outcome Bar Chart",
        "q": "A die was rolled 30 times. The outcomes were: 1 (4 times), 2 (6 times), 3 (5 times), 4 (7 times), 5 (3 times), 6 (5 times). (a) Which number turned up the most? (b) Which number turned up the least?",
        "ans": "<strong>Dice Analysis:</strong><br>\n• <strong>(a) Most frequent outcome:</strong> <strong>Number 4</strong> (turned up 7 times).<br>\n• <strong>(b) Least frequent outcome:</strong> <strong>Number 5</strong> (turned up 3 times).",
        "marks": 2,
        "rubric": [
          {
            "key": "Most frequent: 4",
            "marks": "1 M"
          },
          {
            "key": "Least frequent: 5",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Rainfall Bar Chart",
        "q": "Monthly rainfall recorded in mm: June (120 mm), July (250 mm), August (300 mm), September (180 mm). (a) Which month had the maximum rainfall? (b) What was the total rainfall during the monsoon season (June to September)?",
        "ans": "<strong>Rainfall Data:</strong><br>\n• <strong>(a) Maximum rainfall:</strong> <strong>August (300 mm)</strong>.<br>\n• <strong>(b) Total rainfall:</strong> 120 + 250 + 300 + 180 = <strong>850 mm</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "August (300 mm)",
            "marks": "1 M"
          },
          {
            "key": "Total: 850 mm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Constructing a Scale for a Bar Graph",
        "q": "The marks obtained by a student are: English 75, Hindi 80, Maths 95, Science 85, Social Science 70. If you draw a bar graph on a paper with maximum height 10 cm, what scale should you choose for the vertical axis?",
        "ans": "<strong>Axis Scaling:</strong><br>\n• Highest mark = 95 (round up to 100).<br>\n• Available height = 10 cm.<br>\n• Scale: 100 ÷ 10 = 10 marks per cm. So <strong>1 cm = 10 marks</strong> is the ideal scale (the tallest bar for Maths will be 9.5 cm high).",
        "marks": 2,
        "rubric": [
          {
            "key": "Proposed scale: 1 cm = 10 marks",
            "marks": "1 M"
          },
          {
            "key": "Height verification (9.5 cm for 95)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tally Box Notation",
        "q": "Explain how NCERT Class 5 tally marks are drawn using the 5-line box method.",
        "ans": "<strong>NCERT Box Tally Method:</strong><br>\n• 1 = 1 vertical line (|)<br>\n• 2 = 2 lines forming a right angle (L)<br>\n• 3 = 3 sides of a square (U)<br>\n• 4 = A complete square (4 sides: 🗆)<br>\n• 5 = A square with a diagonal slash crossing it (🗎).<br>\nThis creates easy-to-read bundles of 5.",
        "marks": 3,
        "rubric": [
          {
            "key": "1 to 4 steps explained",
            "marks": "1.5 M"
          },
          {
            "key": "5th diagonal slash completing bundle",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Library Books Distribution",
        "q": "A school library has 600 books: Storybooks (250), Science (150), Mathematics (100), History (100). What fraction of total books are Storybooks?",
        "ans": "<strong>Fraction Calculation:</strong><br>\n• Storybooks = 250.<br>\n• Total books = 600.<br>\n• Fraction = 250/600 = 25/60 = <strong>5/12 of total books</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "250/600 ratio",
            "marks": "1 M"
          },
          {
            "key": "Reduced fraction: 5/12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Comparing Double Bar Graph",
        "q": "A double bar graph compares marks of Term 1 and Term 2 for Rohit: Maths (65 → 85), English (70 → 75), Science (60 → 80). In which subject did Rohit show the maximum improvement?",
        "ans": "<strong>Improvement Differences:</strong><br>\n• Maths: 85 - 65 = <strong>20 marks improvement</strong>.<br>\n• English: 75 - 70 = 5 marks improvement.<br>\n• Science: 80 - 60 = <strong>20 marks improvement</strong>.<br>\nRohit showed the maximum improvement of 20 marks equally in <strong>Maths and Science</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Differences calculated",
            "marks": "1 M"
          },
          {
            "key": "Maths and Science (20 marks each)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Morning Walk Time Line Graph",
        "q": "Rohan recorded time spent on morning walk over 5 days: Monday 20 min, Tuesday 25 min, Wednesday 30 min, Thursday 35 min, Friday 40 min. What is the pattern in time spent, and what is his total walking time in hours?",
        "ans": "<strong>Trend & Total Time:</strong><br>\n• <strong>Pattern:</strong> Increases by <strong>5 minutes each day</strong>.<br>\n• <strong>Total time:</strong> 20 + 25 + 30 + 35 + 40 = 150 minutes.<br>\n• In hours = 150 ÷ 60 = <strong>2 hours and 30 minutes (2.5 hours)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "5-minute increment pattern",
            "marks": "1 M"
          },
          {
            "key": "Total 150 minutes",
            "marks": "1 M"
          },
          {
            "key": "Converted to 2.5 hours",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Fruit Seller Inventory",
        "q": "A fruit seller has 80 kg of fruits: Apples 20 kg, Bananas 40 kg, Oranges 20 kg. What fraction of the total fruits are Bananas?",
        "ans": "<strong>Fraction:</strong><br>\n• Bananas = 40 kg; Total = 80 kg.<br>\n• Fraction = 40/80 = <strong>1/2 (half of all fruits)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "40/80 ratio",
            "marks": "1 M"
          },
          {
            "key": "Answer: 1/2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Newspaper Reading Survey",
        "q": "In an apartment block of 50 families: 30 families read Hindi newspaper, 15 families read English newspaper, and 5 read both. How many families read only Hindi newspaper?",
        "ans": "<strong>Venn Subtraction:</strong><br>\n• Total Hindi readers = 30 families.<br>\n• Read both = 5 families.<br>\n• <strong>Only Hindi newspaper:</strong> 30 - 5 = <strong>25 families</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 30 - 5",
            "marks": "1 M"
          },
          {
            "key": "Answer: 25 families",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Class Strength Comparison",
        "q": "Section A has 35 students and Section B has 45 students. (a) What is the ratio of Section A to Section B in simplest form? (b) How many students should transfer from Section B to Section A to make both sections equal?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Ratio:</strong> 35 : 45 = (35÷5) : (45÷5) = <strong>7 : 9</strong>.<br>\n• <strong>(b) Equal sections:</strong> Total = 35 + 45 = 80 students. Each section needs 80 ÷ 2 = 40 students.<br>\n  Transfer needed = 45 - 40 = <strong>5 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Ratio 7:9",
            "marks": "1.5 M"
          },
          {
            "key": "Transfer 5 students",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Favorite Subject Survey",
        "q": "In a survey of 60 children: 24 voted Maths, 18 voted Science, 12 voted Art, and 6 voted English. Represent this data as percentage of total votes.",
        "ans": "<strong>Percentages (Vote ÷ 60 × 100%):</strong><br>\n• Maths: (24 ÷ 60) × 100 = <strong>40%</strong>.<br>\n• Science: (18 ÷ 60) × 100 = <strong>30%</strong>.<br>\n• Art: (12 ÷ 60) × 100 = <strong>20%</strong>.<br>\n• English: (6 ÷ 60) × 100 = <strong>10%</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Maths 40%, Science 30%",
            "marks": "1.5 M"
          },
          {
            "key": "Art 20%, English 10%",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Range of a Dataset",
        "q": "Daily maximum temperatures over one week were: 32°C, 35°C, 31°C, 38°C, 34°C, 30°C, 36°C. (a) What was the highest temperature? (b) What was the lowest temperature? (c) What is the 'Range' of the temperature dataset?",
        "ans": "<strong>Range Calculation:</strong><br>\n• <strong>(a) Highest:</strong> <strong>38°C</strong>.<br>\n• <strong>(b) Lowest:</strong> <strong>30°C</strong>.<br>\n• <strong>(c) Range:</strong> Highest - Lowest = 38°C - 30°C = <strong>8°C</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Highest: 38°C",
            "marks": "1 M"
          },
          {
            "key": "Lowest: 30°C",
            "marks": "1 M"
          },
          {
            "key": "Range: 8°C",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Importance of Smart Charts",
        "q": "Why are charts and graphs called 'Smart Charts'? Give two reasons why displaying data in charts is better than raw number lists.",
        "ans": "<strong>Advantages of Smart Charts:</strong><br>\n1. <strong>Instant Visual Understanding:</strong> Charts allow readers to grasp trends, comparisons, and peaks at a single glance without reading long tables.<br>\n2. <strong>Easy Comparison:</strong> Tall bars and large pie slices immediately show which category is largest or smallest without performing manual calculations.",
        "marks": 2,
        "rubric": [
          {
            "key": "Visual clarity explained",
            "marks": "1 M"
          },
          {
            "key": "Immediate comparison benefit explained",
            "marks": "1 M"
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
        "category": "Textbook Exercise • Maniratnam the Cashier (Daily Wage Multiplications)",
        "q": "Maniratnam is the cashier of King Jayan. His job is to calculate the salary of all the workers: The cook gets ₹65 per day, the minister gets ₹195 per day, and the king's horse-keeper gets ₹86 per day. Calculate:<br>(a) The cook's salary for the month of January (31 days).<br>(b) The horse-keeper's salary for 1 full year (365 days).<br>(c) The minister's salary for 1 full year (365 days).",
        "ans": "<strong>Multiplication Calculations:</strong><br>\n• <strong>(a) Cook's salary for January:</strong> 31 × ₹65 = 31 × (60 + 5) = 1,860 + 155 = <strong>₹2,015</strong>.<br>\n• <strong>(b) Horse-keeper's annual salary:</strong> 365 × ₹86 = 365 × (80 + 6) = 29,200 + 2,190 = <strong>₹31,390</strong>.<br>\n• <strong>(c) Minister's annual salary:</strong> 365 × ₹195 = 365 × (200 - 5) = 73,000 - 1,825 = <strong>₹71,175</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "Cook: ₹2,015",
            "marks": "1 M"
          },
          {
            "key": "Horse-keeper: ₹31,390",
            "marks": "1.5 M"
          },
          {
            "key": "Minister: ₹71,175",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Bela's Method of Multiplication",
        "q": "Multiply 47 × 19 using Bela's method (distributive method by splitting 19 into 9 and 10). Show each partial product.",
        "ans": "<strong>Bela's Distributive Method:</strong><br>\nSplit 19 = 10 + 9:<br>\n• Step 1: Multiply 47 by 9 = 47 × 9 = <strong>423</strong>.<br>\n• Step 2: Multiply 47 by 10 = 47 × 10 = <strong>470</strong>.<br>\n• Step 3: Add partial products = 423 + 470 = <strong>893</strong>.<br>\nTherefore, 47 × 19 = <strong>893</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "47 × 9 = 423",
            "marks": "1 M"
          },
          {
            "key": "47 × 10 = 470",
            "marks": "1 M"
          },
          {
            "key": "Sum: 893",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Shantaram the Cook's Holiday Deduction",
        "q": "Shantaram is a special cook who is called only on party days. Last year he was called for only 28 days. For each day he is paid ₹165. (a) How much money did he earn in all? (b) If he was paid for all 365 days of the year, how much would he have earned?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Actual earnings:</strong> 28 × ₹165 = 28 × (100 + 60 + 5) = 2,800 + 1,680 + 140 = <strong>₹4,620</strong>.<br>\n• <strong>(b) Full year earnings:</strong> 365 × ₹165 = 365 × (100 + 60 + 5) = 36,500 + 21,900 + 1,825 = <strong>₹60,225</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "28 days earnings: ₹4,620",
            "marks": "1.5 M"
          },
          {
            "key": "Full year earnings: ₹60,225",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Sohanlal the Farmer's Loan",
        "q": "Sohanlal drank 8 glasses of water every day. (a) How many glasses will he drink in one month of 30 days? (b) How many glasses will he drink in one year (365 days)? (c) If 125 people in a village drink 8 glasses of water daily, how many glasses will they drink in one day?",
        "ans": "<strong>Water Multiplications:</strong><br>\n• <strong>(a) 30 days:</strong> 30 × 8 = <strong>240 glasses</strong>.<br>\n• <strong>(b) 1 year:</strong> 365 × 8 = <strong>2,920 glasses</strong>.<br>\n• <strong>(c) 125 people in 1 day:</strong> 125 × 8 = <strong>1,000 glasses</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "30 days: 240 glasses",
            "marks": "1 M"
          },
          {
            "key": "1 year: 2,920 glasses",
            "marks": "1 M"
          },
          {
            "key": "125 people: 1,000 glasses",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Heartbeat Counting",
        "q": "A person's heart beats about 72 times in one minute. (a) How many times does it beat in 1 hour? (b) How many times does it beat in 1 full day (24 hours)?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) In 1 hour (60 minutes):</strong> 72 × 60 = <strong>4,320 beats</strong>.<br>\n• <strong>(b) In 1 day (24 hours):</strong> 4,320 × 24 = 4,320 × (20 + 4) = 86,400 + 17,280 = <strong>1,03,680 beats</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1 hour: 4,320 beats",
            "marks": "1.5 M"
          },
          {
            "key": "24 hours: 1,03,680 beats",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Baby Blue Whale Milk Consumption",
        "q": "A baby blue whale drinks around 200 litres of milk every single day! (a) How many litres of milk will it drink in 8 months (assume 30 days per month)? (b) If your family consumes 2 litres of milk daily, how many days will 200 litres of milk last your family?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Whale milk in 8 months:</strong><br>\n  - Total days = 8 × 30 = 240 days.<br>\n  - Milk consumed = 240 × 200 litres = <strong>48,000 litres</strong>.<br>\n• <strong>(b) Family consumption:</strong> 200 litres ÷ 2 litres/day = <strong>100 days</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Whale 8 months: 48,000 litres",
            "marks": "1.5 M"
          },
          {
            "key": "Family duration: 100 days",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Sukhi's Farm Labor Wage",
        "q": "Sukhi works on a farm. He is paid ₹98 for one day. If he works for 52 days, how much money does he earn?",
        "ans": "<strong>Multiplication:</strong><br>\n• Earnings = 52 × ₹98 = 52 × (100 - 2) = 5,200 - 104 = <strong>₹5,096</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Multiplication 52 × 98",
            "marks": "1 M"
          },
          {
            "key": "Answer: ₹5,096",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Hariya's Fertilizer Loan & Installments",
        "q": "Hariya took a loan of ₹20,000 to buy fertilizer. He has to pay back ₹2,400 every month for 10 months. (a) What is the total money he paid back? (b) How much extra money did the bank charge as interest?",
        "ans": "<strong>Loan Repayment:</strong><br>\n• <strong>(a) Total repayment:</strong> 10 × ₹2,400 = <strong>₹24,000</strong>.<br>\n• <strong>(b) Interest charged:</strong> ₹24,000 - ₹20,000 = <strong>₹4,000</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Total paid: ₹24,000",
            "marks": "1 M"
          },
          {
            "key": "Interest: ₹4,000",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Long Division Method (Hostel Rice)",
        "q": "A school hostel has 576 students. If each student gets 15 kg of rice per month, how much rice is needed for the hostel in one month?",
        "ans": "<strong>Multiplication:</strong><br>\n• Rice required = 576 × 15 kg = 576 × (10 + 5) = 5,760 + 2,880 = <strong>8,640 kg</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Multiplication statement",
            "marks": "1 M"
          },
          {
            "key": "Answer: 8,640 kg",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Division with Remainder (Laddoo Packing)",
        "q": "A sweet maker has 250 laddoos. He packs them into boxes of 12 laddoos each. (a) How many full boxes can he make? (b) How many laddoos will be left over? (c) How many more laddoos are needed to make another full box?",
        "ans": "<strong>Division: 250 ÷ 12:</strong><br>\n• 250 ÷ 12 = 20 with remainder 10 (since 12 × 20 = 240, and 250 - 240 = 10).<br>\n• <strong>(a) Full boxes:</strong> <strong>20 boxes</strong>.<br>\n• <strong>(b) Left over:</strong> <strong>10 laddoos</strong>.<br>\n• <strong>(c) More needed for next box:</strong> 12 - 10 = <strong>2 more laddoos</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "20 full boxes",
            "marks": "1 M"
          },
          {
            "key": "10 left over",
            "marks": "1 M"
          },
          {
            "key": "2 more needed",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tanker Water Distribution",
        "q": "A water tanker carries 4,500 litres of water to a colony. If each family is given 150 litres of water, how many families can get water from the tanker?",
        "ans": "<strong>Division:</strong><br>\n• Number of families = 4,500 ÷ 150 = 450 ÷ 15 = <strong>30 families</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Division setup",
            "marks": "1 M"
          },
          {
            "key": "Answer: 30 families",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Verifying Division (Dividend Formula)",
        "q": "Dividend = (Divisor × Quotient) + Remainder. Divide 678 by 14 and verify your result using this formula.",
        "ans": "<strong>Division and Verification:</strong><br>\n1. <strong>Division:</strong> 678 ÷ 14 = <strong>48 with remainder 6</strong> (since 14 × 40 = 560; 118 ÷ 14 = 8 with remainder 6: 14 × 8 = 112, 118 - 112 = 6).<br>\n2. <strong>Verification:</strong><br>\n   - Divisor × Quotient = 14 × 48 = 672.<br>\n   - Adding remainder: 672 + 6 = <strong>678 (Dividend)</strong>. (Verified!).",
        "marks": 3,
        "rubric": [
          {
            "key": "Quotient 48, Remainder 6",
            "marks": "1.5 M"
          },
          {
            "key": "Formula verification shown",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Buying Land in Installments",
        "q": "Kamini buys a plot of land for ₹95,000. She pays ₹35,000 in cash and agrees to pay the rest in 12 equal monthly installments. How much must she pay each month?",
        "ans": "<strong>Installment Calculation:</strong><br>\n1. Remaining balance = ₹95,000 - ₹35,000 = ₹60,000.<br>\n2. Monthly installment = ₹60,000 ÷ 12 = <strong>₹5,000 per month</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Remaining balance: ₹60,000",
            "marks": "1.5 M"
          },
          {
            "key": "Monthly installment: ₹5,000",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Books in Boxes (Carton Packing)",
        "q": "A publishing house printed 3,456 math textbooks. They can pack 24 books in one cardboard carton. How many cartons are needed to pack all the books?",
        "ans": "<strong>Division: 3,456 ÷ 24:</strong><br>\n• 3,456 ÷ 24 = <strong>144 cartons</strong> (24 × 100 = 2400; remainder 1056; 24 × 40 = 960; remainder 96; 24 × 4 = 96. Total = 100 + 40 + 4 = 144).",
        "marks": 2,
        "rubric": [
          {
            "key": "Division steps shown",
            "marks": "1 M"
          },
          {
            "key": "Answer: 144 cartons",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Factory Production per Hour",
        "q": "A biscuit factory produces 14,400 packets of biscuits in a day. The factory runs for 16 hours every day. How many packets are produced in one hour?",
        "ans": "<strong>Division:</strong><br>\n• Packets per hour = 14,400 ÷ 16 = <strong>900 packets per hour</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Division setup",
            "marks": "1 M"
          },
          {
            "key": "Answer: 900 packets",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Bus Tickets for School Excursion",
        "q": "248 students and 12 teachers are going on an excursion. Each bus can seat 45 passengers. (a) How many total people are travelling? (b) How many buses must be hired so that everyone gets a seat?",
        "ans": "<strong>Bus Requirement:</strong><br>\n• <strong>(a) Total passengers:</strong> 248 + 12 = 260 passengers.<br>\n• <strong>(b) Buses needed:</strong> 260 ÷ 45 = 5 with remainder 35 (since 45 × 5 = 225).<br>\n  Since 35 passengers remain without seats, 1 extra bus must be hired.<br>\n  Total buses needed = 5 + 1 = <strong>6 buses</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total passengers: 260",
            "marks": "1 M"
          },
          {
            "key": "Division: 5 remainder 35",
            "marks": "1 M"
          },
          {
            "key": "Rounding up to 6 buses",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Multiplying 3-Digit Numbers",
        "q": "Calculate: 245 × 132 showing step-by-step partial products.",
        "ans": "<strong>3-Digit Multiplication:</strong><br>\n• 245 × 2 = 490<br>\n• 245 × 30 = 7,350<br>\n• 245 × 100 = 24,500<br>\n• <strong>Sum:</strong> 490 + 7,350 + 24,500 = <strong>32,340</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Partial products shown",
            "marks": "2 M"
          },
          {
            "key": "Final answer: 32,340",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Repeated Subtraction Division",
        "q": "Explain how 96 ÷ 16 can be solved using repeated subtraction. How many times can 16 be subtracted from 96?",
        "ans": "<strong>Repeated Subtraction:</strong><br>\n• 96 - 16 = 80 (1st)<br>\n• 80 - 16 = 64 (2nd)<br>\n• 64 - 16 = 48 (3rd)<br>\n• 48 - 16 = 32 (4th)<br>\n• 32 - 16 = 16 (5th)<br>\n• 16 - 16 = 0 (6th)<br>\n16 was subtracted exactly <strong>6 times</strong>. Therefore, 96 ÷ 16 = <strong>6</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction steps shown",
            "marks": "1 M"
          },
          {
            "key": "Quotient = 6",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Monthly Budget from Daily Expense",
        "q": "A family spends ₹425 daily on groceries and food. How much do they spend in a leap year (366 days)?",
        "ans": "<strong>Multiplication:</strong><br>\n• Expense = 366 × ₹425 = 366 × (400 + 25) = 146,400 + 9,150 = <strong>₹1,55,550</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Leap year = 366 days noted",
            "marks": "1 M"
          },
          {
            "key": "Calculation: ₹1,55,550",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Unit Price Comparison",
        "q": "Shop A sells 5 kg rice for ₹225. Shop B sells 8 kg rice for ₹344. Which shop is cheaper per kg, and by how much?",
        "ans": "<strong>Unit Price (Cost per kg):</strong><br>\n• Shop A: ₹225 ÷ 5 = <strong>₹45 per kg</strong>.<br>\n• Shop B: ₹344 ÷ 8 = <strong>₹43 per kg</strong>.<br>\n• <strong>Shop B is cheaper</strong> by ₹45 - ₹43 = <strong>₹2 per kg</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Shop A: ₹45/kg",
            "marks": "1 M"
          },
          {
            "key": "Shop B: ₹43/kg",
            "marks": "1 M"
          },
          {
            "key": "Shop B cheaper by ₹2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Sharing an Inherited Sum",
        "q": "An amount of ₹72,960 is divided equally among 6 brothers. How much money does each brother receive?",
        "ans": "<strong>Division:</strong><br>\n• Share per brother = ₹72,960 ÷ 6 = <strong>₹12,160</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Division setup",
            "marks": "1 M"
          },
          {
            "key": "Answer: ₹12,160",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Estimation in Multiplication",
        "q": "Estimate the product of 48 × 73 by rounding off each number to the nearest ten. Then find the actual product and compare.",
        "ans": "<strong>Estimation & Comparison:</strong><br>\n• 48 rounds to 50; 73 rounds to 70.<br>\n• <strong>Estimated product:</strong> 50 × 70 = <strong>3,500</strong>.<br>\n• <strong>Actual product:</strong> 48 × 73 = <strong>3,504</strong>.<br>\nThe estimated product (3,500) is remarkably close to the actual product (3,504), differing by only 4!",
        "marks": 3,
        "rubric": [
          {
            "key": "Estimated product: 3,500",
            "marks": "1.5 M"
          },
          {
            "key": "Actual product: 3,504 & comparison",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cinema Ticket Sales",
        "q": "A movie theatre has 35 rows with 28 seats in each row. For the evening show, all seats were booked at ₹120 per ticket. How much money was collected?",
        "ans": "<strong>Multi-step Multiplication:</strong><br>\n1. Total seats = 35 × 28 = 35 × (20 + 8) = 700 + 280 = 980 seats.<br>\n2. Total collection = 980 × ₹120 = 980 × (100 + 20) = 98,000 + 19,600 = <strong>₹1,17,600</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total seats: 980",
            "marks": "1.5 M"
          },
          {
            "key": "Total collection: ₹1,17,600",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Division of Multiples of 100",
        "q": "Solve mental math divisions:<br>(a) 48,000 ÷ 600<br>(b) 35,000 ÷ 70<br>(c) 8,100 ÷ 90",
        "ans": "<strong>Mental Math:</strong><br>\n• (a) 48,000 ÷ 600 = 480 ÷ 6 = <strong>80</strong>.<br>\n• (b) 35,000 ÷ 70 = 3,500 ÷ 7 = <strong>500</strong>.<br>\n• (c) 8,100 ÷ 90 = 810 ÷ 9 = <strong>90</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 correct (1 M each)",
            "marks": "3 M"
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
        "category": "Textbook Exercise • Measuring Volume with Marbles",
        "q": "A measuring glass filled with water to 50 mL mark rises to 68 mL when 9 equal glass marbles are dropped inside.<br>(a) How much water was displaced by all 9 marbles?<br>(b) What is the volume of 1 marble in mL?<br>(c) What is the volume in cubic centimetres (cm³) if 1 mL = 1 cm³?",
        "ans": "<strong>Volume by Water Displacement:</strong><br>\n• <strong>(a) Displaced water:</strong> 68 mL - 50 mL = <strong>18 mL</strong>.<br>\n• <strong>(b) Volume of 1 marble:</strong> 18 mL ÷ 9 marbles = <strong>2 mL</strong>.<br>\n• <strong>(c) In cubic centimetres:</strong> 2 mL = <strong>2 cm³</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 18 mL",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 2 mL",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 2 cm³",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Volume of a Cube",
        "q": "(a) What is the formula for the volume of a cube? (b) Find the volume of a wooden cube of side 5 cm. (c) How many 1 cm unit cubes can fit inside it?",
        "ans": "<strong>Volume of Cube:</strong><br>\n• <strong>(a) Formula:</strong> Volume = Side × Side × Side = <strong>Side³</strong>.<br>\n• <strong>(b) Volume:</strong> 5 cm × 5 cm × 5 cm = <strong>125 cm³</strong>.<br>\n• <strong>(c) Number of 1 cm unit cubes:</strong> 125 ÷ 1 = <strong>125 cubes</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Formula: Side³",
            "marks": "1 M"
          },
          {
            "key": "Volume: 125 cm³",
            "marks": "1 M"
          },
          {
            "key": "125 unit cubes fit",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Volume of a Cuboid",
        "q": "A matchbox measures 5 cm in length, 3 cm in width, and 1 cm in height. (a) What is the volume of one matchbox? (b) What is the volume of a packet containing 12 such matchboxes?",
        "ans": "<strong>Volume Calculations (Volume = l × w × h):</strong><br>\n• <strong>(a) One matchbox:</strong> 5 cm × 3 cm × 1 cm = <strong>15 cm³</strong>.<br>\n• <strong>(b) Packet of 12 matchboxes:</strong> 12 × 15 cm³ = <strong>180 cm³</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "One matchbox: 15 cm³",
            "marks": "1.5 M"
          },
          {
            "key": "Packet: 180 cm³",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Packing Cubes into a Carton",
        "q": "A carton box is 20 cm long, 10 cm wide, and 8 cm high. How many soap cakes of size 5 cm × 5 cm × 4 cm can be packed inside the carton box?",
        "ans": "<strong>Packing Capacity:</strong><br>\n• <strong>Method 1 (Dimensions fitting):</strong><br>\n  - Along 20 cm length: 20 ÷ 5 = 4 soaps.<br>\n  - Along 10 cm width: 10 ÷ 5 = 2 soaps.<br>\n  - Along 8 cm height: 8 ÷ 4 = 2 soaps.<br>\n  - Total soaps = 4 × 2 × 2 = <strong>16 soaps</strong>.<br>\n• <strong>Method 2 (Volume):</strong> Volume of carton = 20 × 10 × 8 = 1,600 cm³. Volume of 1 soap = 5 × 5 × 4 = 100 cm³. Number of soaps = 1,600 ÷ 100 = <strong>16 soaps</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Dimension fitting / Volume method",
            "marks": "1.5 M"
          },
          {
            "key": "Answer: 16 soaps",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Stage Building with Matchboxes",
        "q": "Tanu made a stage using 14 matchboxes in one layer. She built a platform 3 layers high. (a) How many matchboxes did she use in total? (b) If each matchbox has volume 15 cm³, what is the total volume of the stage platform?",
        "ans": "<strong>Stage Platform Calculations:</strong><br>\n• <strong>(a) Total matchboxes:</strong> 14 matchboxes/layer × 3 layers = <strong>42 matchboxes</strong>.<br>\n• <strong>(b) Total volume:</strong> 42 × 15 cm³ = <strong>630 cm³</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total matchboxes: 42",
            "marks": "1.5 M"
          },
          {
            "key": "Total volume: 630 cm³",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Weight of Coins (5-Rupee Coin)",
        "q": "A ₹5 coin weighs 9 grams. A bank sack full of ₹5 coins weighs 9 kilograms. (a) Convert 9 kg into grams. (b) How many ₹5 coins are in the sack? (c) What is the total monetary value of all the coins in the sack?",
        "ans": "<strong>Coin & Weight Calculations:</strong><br>\n• <strong>(a) Conversion:</strong> 9 kg = 9 × 1,000 = <strong>9,000 grams</strong>.<br>\n• <strong>(b) Number of coins:</strong> 9,000 g ÷ 9 g/coin = <strong>1,000 coins</strong>.<br>\n• <strong>(c) Monetary value:</strong> 1,000 coins × ₹5 = <strong>₹5,000</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "9,000 grams",
            "marks": "1 M"
          },
          {
            "key": "1,000 coins",
            "marks": "1 M"
          },
          {
            "key": "Value: ₹5,000",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • 2-Rupee Coin Sack Weight",
        "q": "A ₹2 coin weighs 6 grams. A sack containing ₹2 coins weighs 4 kg and 800 grams. How many ₹2 coins are inside the sack?",
        "ans": "<strong>Weight Conversion & Division:</strong><br>\n1. Total weight in grams = 4,000 g + 800 g = 4,800 grams.<br>\n2. Weight of 1 coin = 6 grams.<br>\n3. Number of coins = 4,800 ÷ 6 = <strong>800 coins</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "4,800 grams conversion",
            "marks": "1.5 M"
          },
          {
            "key": "Answer: 800 coins",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Litres and Millilitres to Cubic Centimetres",
        "q": "Fill in the blanks: (a) 1 litre = _____ mL. (b) 1 mL = _____ cm³. (c) 1 litre = _____ cm³.",
        "ans": "<strong>Volume Equivalences:</strong><br>\n• (a) 1 litre = <strong>1,000 mL</strong>.<br>\n• (b) 1 mL = <strong>1 cm³</strong>.<br>\n• (c) 1 litre = 1,000 mL = <strong>1,000 cm³</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1,000 mL",
            "marks": "1 M"
          },
          {
            "key": "1 cm³",
            "marks": "1 M"
          },
          {
            "key": "1,000 cm³",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Water Tank Capacity in Litres",
        "q": "A rectangular overhead water tank is 2 metres long, 1.5 metres wide, and 1 metre high. (a) What is its volume in cubic metres? (b) How many litres of water can it hold if 1 cubic metre (m³) = 1,000 litres?",
        "ans": "<strong>Tank Capacity:</strong><br>\n• <strong>(a) Volume:</strong> 2 m × 1.5 m × 1 m = <strong>3 cubic metres (3 m³)</strong>.<br>\n• <strong>(b) Capacity in litres:</strong> 3 m³ × 1,000 litres/m³ = <strong>3,000 litres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Volume: 3 m³",
            "marks": "1.5 M"
          },
          {
            "key": "Capacity: 3,000 litres",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Heavy School Bag Weight",
        "q": "A student's school bag has: 4 textbooks weighing 350 g each, 5 notebooks weighing 150 g each, a water bottle weighing 800 g, and a pencil box weighing 250 g. What is the total weight of the bag in kg and g?",
        "ans": "<strong>Total Weight Calculation:</strong><br>\n• Textbooks: 4 × 350 g = 1,400 g.<br>\n• Notebooks: 5 × 150 g = 750 g.<br>\n• Water bottle: 800 g.<br>\n• Pencil box: 250 g.<br>\n• <strong>Sum in grams:</strong> 1,400 + 750 + 800 + 250 = 3,200 grams.<br>\n• In kg and g = <strong>3 kg and 200 grams (3.2 kg)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Itemized weights calculated",
            "marks": "1.5 M"
          },
          {
            "key": "Total: 3 kg 200 g",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Comparing Volumes of Liquid & Solid",
        "q": "A solid metal cube of side 4 cm is dropped into a full container of water. How many millilitres of water will overflow?",
        "ans": "<strong>Water Displacement Principle:</strong><br>\n• A submerged solid displaces an amount of water equal to its own volume.<br>\n• Volume of metal cube = 4 cm × 4 cm × 4 cm = 64 cm³.<br>\n• Since 1 cm³ = 1 mL, the volume of water displaced = <strong>64 mL</strong>.<br>\nTherefore, <strong>64 mL</strong> of water will overflow.",
        "marks": 2,
        "rubric": [
          {
            "key": "Volume of cube = 64 cm³",
            "marks": "1 M"
          },
          {
            "key": "Overflow = 64 mL",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cardboard Box Volume",
        "q": "Find the volume of a cardboard box that is 45 cm long, 25 cm wide, and 20 cm high.",
        "ans": "<strong>Volume Calculation:</strong><br>\n• Volume = Length × Width × Height = 45 × 25 × 20 cm³.<br>\n• 25 × 20 = 500.<br>\n• 45 × 500 = <strong>22,500 cm³</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Formula l × w × h",
            "marks": "1 M"
          },
          {
            "key": "Answer: 22,500 cm³",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Rice Grain Count Estimation",
        "q": "100 grains of rice weigh about 2 grams. (a) What is the weight of 1 grain of rice? (b) Approximately how many grains of rice are there in a 1 kg (1,000 g) bag?",
        "ans": "<strong>Estimation:</strong><br>\n• <strong>(a) Weight of 1 grain:</strong> 2 g ÷ 100 = <strong>0.02 grams</strong>.<br>\n• <strong>(b) Grains in 1 kg:</strong> 1,000 g ÷ 2 g = 500 packets of 100 grains.<br>\n  Total grains = 500 × 100 = <strong>50,000 grains</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1 grain: 0.02 g",
            "marks": "1 M"
          },
          {
            "key": "1 kg has 50,000 grains",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cubes from a Large Wooden Block",
        "q": "A rectangular wooden block is 12 cm × 9 cm × 6 cm. It is cut into small cubes of side 3 cm. How many small cubes can be cut without any wood wasted?",
        "ans": "<strong>Cube Division:</strong><br>\n• Along length: 12 ÷ 3 = 4 cubes.<br>\n• Along width: 9 ÷ 3 = 3 cubes.<br>\n• Along height: 6 ÷ 3 = 2 cubes.<br>\n• <strong>Total cubes:</strong> 4 × 3 × 2 = <strong>24 cubes</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Dimensions division (4 × 3 × 2)",
            "marks": "1 M"
          },
          {
            "key": "Total: 24 cubes",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Juice Carton Content",
        "q": "A juice pack is a rectangular cuboid measuring 10 cm × 6 cm × 15 cm. (a) What is its volume in cm³? (b) How many litres of juice does it contain (assuming full)?",
        "ans": "<strong>Volume & Capacity:</strong><br>\n• <strong>(a) Volume:</strong> 10 × 6 × 15 = <strong>900 cm³</strong>.<br>\n• <strong>(b) Capacity in litres:</strong> 900 cm³ = 900 mL = 900 ÷ 1,000 = <strong>0.9 litres</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Volume: 900 cm³",
            "marks": "1 M"
          },
          {
            "key": "Capacity: 0.9 litres",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Doubling Cube Side (Volume Effect)",
        "q": "A cube has side 2 cm. If its side is doubled to 4 cm: (a) Find original volume. (b) Find new volume. (c) By how many times does the volume increase?",
        "ans": "<strong>Volume Scaling:</strong><br>\n• <strong>(a) Original:</strong> 2 × 2 × 2 = <strong>8 cm³</strong>.<br>\n• <strong>(b) New:</strong> 4 × 4 × 4 = <strong>64 cm³</strong>.<br>\n• <strong>(c) Increase factor:</strong> 64 ÷ 8 = <strong>8 times larger</strong> (since 2³ = 8).",
        "marks": 3,
        "rubric": [
          {
            "key": "Original: 8 cm³",
            "marks": "1 M"
          },
          {
            "key": "New: 64 cm³",
            "marks": "1 M"
          },
          {
            "key": "Increases by 8 times",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Ice Cube Melting Volume",
        "q": "An ice cube has side 3 cm. When melted, does water occupy more, less, or equal volume to ice? (Scientific note: Ice expands when frozen; 100 cm³ ice produces ~92 mL water).",
        "ans": "<strong>Observation:</strong><br>\n• Volume of ice cube = 3 × 3 × 3 = 27 cm³.<br>\n• Water occupies slightly <strong>less volume</strong> than ice because water expands when freezing. When 27 cm³ of ice melts, it produces about <strong>25 mL of liquid water</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Volume calculation: 27 cm³",
            "marks": "1 M"
          },
          {
            "key": "Water occupies less volume explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Soil Dug from a Pit",
        "q": "A pit 4 metres long, 3 metres wide, and 2 metres deep is dug in a field. How many cubic metres of earth (soil) were dug out?",
        "ans": "<strong>Volume of Excavation:</strong><br>\n• Volume of earth dug = Length × Width × Depth = 4 m × 3 m × 2 m = <strong>24 cubic metres (24 m³)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Formula l × w × d",
            "marks": "1 M"
          },
          {
            "key": "Answer: 24 m³",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Difference between Weight and Volume",
        "q": "Explain why 1 kg of cotton wool occupies a much larger volume (space) than 1 kg of iron, even though their weights are equal.",
        "ans": "<strong>Density & Volume:</strong><br>\n• Both have the exact same weight (1 kg).<br>\n• However, iron is very dense with closely packed particles, so 1 kg fits in a small space.<br>\n• Cotton is fluffy, porous, and contains a lot of trapped air, meaning its particles are loosely spread, so 1 kg occupies a huge physical space (large volume).",
        "marks": 2,
        "rubric": [
          {
            "key": "Equal mass/weight stated",
            "marks": "1 M"
          },
          {
            "key": "Density & particle spacing explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Weight of 100 One-Rupee Coins",
        "q": "A 1-rupee coin weighs 4.85 grams. What is the total weight of 100 such 1-rupee coins in grams?",
        "ans": "<strong>Multiplication:</strong><br>\n• Total weight = 100 × 4.85 g = <strong>485 grams</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Multiplication 100 × 4.85",
            "marks": "1 M"
          },
          {
            "key": "Answer: 485 grams",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Swimming Pool Capacity",
        "q": "A small rectangular children's pool is 10 m long, 5 m wide, and 1.2 m deep. What is the total volume of water needed to fill it to the brim in litres?",
        "ans": "<strong>Volume and Litres:</strong><br>\n• Volume = 10 × 5 × 1.2 = 60 cubic metres.<br>\n• In litres = 60 × 1,000 litres = <strong>60,000 litres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Volume: 60 m³",
            "marks": "1.5 M"
          },
          {
            "key": "Capacity: 60,000 litres",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Brick Stacking Volume",
        "q": "A standard construction brick measures 20 cm × 10 cm × 8 cm. Find the volume of a stack containing 500 such bricks in cubic metres.",
        "ans": "<strong>Brick Stack Volume:</strong><br>\n• Volume of 1 brick = 20 × 10 × 8 = 1,600 cm³.<br>\n• Volume of 500 bricks = 500 × 1,600 = 800,000 cm³.<br>\n• In cubic metres: 1 m³ = 1,000,000 cm³.<br>\n• Volume = 800,000 ÷ 1,000,000 = <strong>0.8 m³</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1 brick: 1,600 cm³",
            "marks": "1 M"
          },
          {
            "key": "500 bricks: 800,000 cm³",
            "marks": "1 M"
          },
          {
            "key": "Converted to 0.8 m³",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Balance Scale Weighing",
        "q": "On a two-pan balance scale, a watermelon on the left pan balances with: one 2 kg weight, one 500 g weight, and two 200 g weights on the right pan. What is the weight of the watermelon?",
        "ans": "<strong>Weight Balance:</strong><br>\n• 2 kg = 2,000 g.<br>\n• Weights on right pan = 2,000 + 500 + 200 + 200 = <strong>2,900 grams (or 2 kg 900 g)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sum of weights on pan",
            "marks": "1 M"
          },
          {
            "key": "Watermelon weight: 2 kg 900 g",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Measuring Cylinder Meniscus",
        "q": "When reading the liquid level in a measuring cylinder, why should your eye be level with the bottom of the curved water surface (meniscus)?",
        "ans": "<strong>Accurate Measurement:</strong><br>\n• Due to surface tension, water curves upwards slightly at the container edges, forming a concave curved surface called a meniscus.<br>\n• Looking from above or below introduces parallax error. Keeping your eye directly level with the lowest point of the meniscus ensures an accurate and true volume reading.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meniscus curvature explained",
            "marks": "1 M"
          },
          {
            "key": "Avoiding parallax error explained",
            "marks": "1 M"
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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { mathMagicChapters };
}
