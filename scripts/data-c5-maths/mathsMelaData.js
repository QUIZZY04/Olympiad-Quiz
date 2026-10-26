// Official NCERT Class 5 Mathematics: "Maths Mela" (New NEP 2020 / NCF 2023)
// 100% Comprehensive Question Dataset - Chapters 1 to 15
// Aligned with CBSE Marking Scheme (2026-27 Session)

const mathsMelaChapters = [
  {
    "id": "mela1",
    "num": 1,
    "unit": "Chapter 1 • Number Sense, Place Value & Large Numbers",
    "title": "We the Travellers – I",
    "subtitle": "हम यात्री – १ (बड़ी संख्याएँ एवं यात्रा गणना)",
    "concepts": [
      "Reading, writing and representing 4-digit, 5-digit, and 6-digit numbers using the Indian Place Value System.",
      "Indian Numbering System comma placement: Ones, Tens, Hundreds, Thousands (Th, T-Th), Lakhs (L, T-L).",
      "Place Value and Face Value: Place value of a digit = Face value × Value of place position.",
      "Expanded notation: e.g., 58,406 = 50,000 + 8,000 + 400 + 0 + 6.",
      "Forming smallest and greatest numbers from given digits and solving digit-swap puzzles.",
      "Travel arithmetic: Distance, Speed, Time relationship: Distance = Speed × Time."
    ],
    "svg": "<svg viewBox=\"0 0 600 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"160\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Indian Place Value System &amp; Comma Placement Model</text>\r\n        <g transform=\"translate(30, 40)\">\r\n          <rect x=\"0\" y=\"0\" width=\"540\" height=\"30\" fill=\"#4f46e5\" rx=\"6\"/>\r\n          <text x=\"45\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Ten-Lakhs</text>\r\n          <text x=\"135\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Lakhs</text>\r\n          <text x=\"225\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Ten-Thous.</text>\r\n          <text x=\"315\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Thousands</text>\r\n          <text x=\"405\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Hundreds</text>\r\n          <text x=\"470\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Tens</text>\r\n          <text x=\"515\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Ones</text>\r\n        </g>\r\n        <g transform=\"translate(30, 75)\">\r\n          <rect x=\"0\" y=\"0\" width=\"540\" height=\"32\" fill=\"#e0e7ff\" rx=\"4\" stroke=\"#c7d2fe\"/>\r\n          <text x=\"45\" y=\"21\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#94a3b8\" text-anchor=\"middle\">—</text>\r\n          <text x=\"135\" y=\"21\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#94a3b8\" text-anchor=\"middle\">—</text>\r\n          <text x=\"225\" y=\"21\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#4338ca\" text-anchor=\"middle\">8</text>\r\n          <text x=\"315\" y=\"21\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#4338ca\" text-anchor=\"middle\">4</text>\r\n          <text x=\"405\" y=\"21\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#4338ca\" text-anchor=\"middle\">5</text>\r\n          <text x=\"470\" y=\"21\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#4338ca\" text-anchor=\"middle\">2</text>\r\n          <text x=\"515\" y=\"21\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#4338ca\" text-anchor=\"middle\">0</text>\r\n        </g>\r\n        <text x=\"300\" y=\"132\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Numeral: 84,520 → Eighty-four thousand five hundred twenty</text>\r\n        <text x=\"300\" y=\"148\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#64748b\" text-anchor=\"middle\">Rule: First comma after hundreds (3 digits from right), then every 2 digits (thousands, lakhs)</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Indian Numeration • Periods & Commas",
        "q": "Read the following numbers, insert commas according to the Indian System of Numeration, and write their number names:<br>(a) 8045<br>(b) 20869<br>(c) 75034<br>(d) 10599",
        "ans": "<strong>Indian System Commas & Number Names:</strong><br>\n• <strong>(a) 8045:</strong> Comma insertion: <strong>8,045</strong>. Number Name: <strong>Eight thousand forty-five</strong>.<br>\n• <strong>(b) 20869:</strong> Comma insertion: <strong>20,869</strong>. Number Name: <strong>Twenty thousand eight hundred sixty-nine</strong>.<br>\n• <strong>(c) 75034:</strong> Comma insertion: <strong>75,034</strong>. Number Name: <strong>Seventy-five thousand thirty-four</strong>.<br>\n• <strong>(d) 10599:</strong> Comma insertion: <strong>10,599</strong>. Number Name: <strong>Ten thousand five hundred ninety-nine</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 8,045 & Number name",
            "marks": "0.75 M"
          },
          {
            "key": "Part (b): 20,869 & Number name",
            "marks": "0.75 M"
          },
          {
            "key": "Part (c): 75,034 & Number name",
            "marks": "0.75 M"
          },
          {
            "key": "Part (d): 10,599 & Number name",
            "marks": "0.75 M"
          }
        ]
      },
      {
        "category": "Number Sequences • Pattern Finding",
        "q": "Find the missing terms in the following number patterns by identifying the sequence rule:<br>(a) 456, 567, 678, _____, _____<br>(b) 10,100, 10,200, 10,300, _____, _____, 10,600<br>(c) 73,005, 72,004, 71,003, _____, _____<br>(d) 2,500, 5,000, 7,500, _____, _____",
        "ans": "<strong>Pattern Rules & Solutions:</strong><br>\n• <strong>(a) 456, 567, 678:</strong> Rule is add 111 (+111). Next: 678 + 111 = <strong>789</strong>; then 789 + 111 = <strong>900</strong>.<br>\n• <strong>(b) 10,100, 10,200, 10,300:</strong> Rule is add 100 (+100). Next: <strong>10,400</strong>, then <strong>10,500</strong>.<br>\n• <strong>(c) 73,005, 72,004, 71,003:</strong> Rule is subtract 1,001 (-1,001). Next: <strong>70,002</strong>, then <strong>69,001</strong>.<br>\n• <strong>(d) 2,500, 5,000, 7,500:</strong> Rule is add 2,500 (+2,500). Next: <strong>10,000</strong>, then <strong>12,500</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 789, 900",
            "marks": "0.75 M"
          },
          {
            "key": "Part (b): 10,400, 10,500",
            "marks": "0.75 M"
          },
          {
            "key": "Part (c): 70,002, 69,001",
            "marks": "0.75 M"
          },
          {
            "key": "Part (d): 10,000, 12,500",
            "marks": "0.75 M"
          }
        ]
      },
      {
        "category": "Comparing Numbers • Ordering",
        "q": "(a) Compare using > or < signs: 68,950 and 68,905.<br>(b) Arrange in ascending order: 23,516; 52,823; 30,512; 30,125; 42,222.<br>(c) Riya took the number 26,053 and swapped two digits to make a new number between 50,000 and 60,000. Which digits did she swap, and what is the new number?",
        "ans": "<strong>Step-by-Step Working:</strong><br>\n• <strong>(a) Comparison:</strong> In ten-thousands, thousands, and hundreds places, both numbers are equal (6, 8, 9). Looking at tens place, 5 > 0. Therefore: <strong>68,950 > 68,905</strong>.<br>\n• <strong>(b) Ascending Order:</strong> Smallest to largest: <strong>23,516 < 30,125 < 30,512 < 42,222 < 52,823</strong>.<br>\n• <strong>(c) Digit Swap:</strong> To get a number in the 50,000s, the ten-thousands digit (2) must be replaced by 5. Swapping digits 2 and 5 gives: <strong>56,023</strong> (which lies between 50,000 and 60,000).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 68,950 > 68,905",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): Correct ascending order",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): Swapped 2 & 5 to get 56,023",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Travel Arithmetic • Distance & Speed",
        "q": "A family travels from New Delhi to Jaipur covering 280 km in 5 hours, then from Jaipur to Udaipur covering 395 km in 7 hours.<br>(a) Find the total distance traveled.<br>(b) Find their average speed during the New Delhi to Jaipur journey.<br>(c) Find the total travel time for the entire journey.",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Total Distance:</strong> 280 km + 395 km = <strong>675 km</strong>.<br>\n• <strong>(b) Average Speed (Delhi to Jaipur):</strong> Speed = Distance ÷ Time = 280 ÷ 5 = <strong>56 km/h</strong>.<br>\n• <strong>(c) Total Travel Time:</strong> 5 hours + 7 hours = <strong>12 hours</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total distance = 675 km",
            "marks": "1.0 M"
          },
          {
            "key": "Speed calculation = 56 km/h",
            "marks": "1.0 M"
          },
          {
            "key": "Total travel time = 12 hours",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Forming Numbers • Place Value Rules",
        "q": "(a) Using the digits 3, 0, 8, 5, 2 only once each, form the greatest 5-digit number and the smallest 5-digit number.<br>(b) Calculate the difference between the greatest and smallest numbers formed.",
        "ans": "<strong>Formation & Difference:</strong><br>\n• <strong>Greatest 5-digit number:</strong> Arrange digits in descending order: <strong>85,320</strong>.<br>\n• <strong>Smallest 5-digit number:</strong> 0 cannot be the leading digit. Smallest non-zero digit is 2, followed by 0, then ascending digits: <strong>20,358</strong>.<br>\n• <strong>(b) Difference:</strong> 85,320 - 20,358 = <strong>64,962</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Greatest number = 85,320",
            "marks": "1.0 M"
          },
          {
            "key": "Smallest number = 20,358",
            "marks": "1.0 M"
          },
          {
            "key": "Difference = 64,962",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Place Value Expansion • 6-Digit Numbers",
        "q": "Write the number 8,45,219 in words according to the Indian Numbering System and show its place value expansion table.",
        "ans": "<strong>1. Number in Words:</strong> Eight Lakh Forty-Five Thousand Two Hundred Nineteen.<br><br>\n<strong>2. Place Value Expansion Table:</strong><br>\n• Lakhs (L): 8 × 1,00,000 = 8,00,000<br>\n• Ten Thousands (TTh): 4 × 10,000 = 40,000<br>\n• Thousands (Th): 5 × 1,000 = 5,000<br>\n• Hundreds (H): 2 × 100 = 200<br>\n• Tens (T): 1 × 10 = 10<br>\n• Ones (O): 9 × 1 = 9<br>\n<strong>Expanded Notation:</strong> 8,00,000 + 40,000 + 5,000 + 200 + 10 + 9.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct word form",
            "marks": "1.5 M"
          },
          {
            "key": "Accurate place value table and expanded form",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Place Value Comparison • City Populations",
        "q": "The population of City A is 7,85,420 and City B is 7,82,990.<br>(a) Which city has a greater population?<br>(b) By how much is it greater?<br>(c) Round both populations to the nearest thousand.",
        "ans": "<strong>Analysis:</strong><br>\n• <strong>(a) Comparison:</strong> Lakhs (7) and Ten-Thousands (8) are equal. At Thousands place, City A has 5 and City B has 2. Since 5 > 2, <strong>City A has a greater population (7,85,420 > 7,82,990)</strong>.<br>\n• <strong>(b) Difference:</strong> 7,85,420 - 7,82,990 = <strong>2,430 people</strong>.<br>\n• <strong>(c) Rounding to Nearest Thousand:</strong><br>\n- City A (7,85,420): Hundreds digit is 4 (< 5) → <strong>7,85,000</strong>.<br>\n- City B (7,82,990): Hundreds digit is 9 (≥ 5) → <strong>7,83,000</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct comparison",
            "marks": "1.0 M"
          },
          {
            "key": "Difference = 2,430",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate rounding (7,85,000 & 7,83,000)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Number Operations • Predecessor & Successor",
        "q": "Find the predecessor and successor of the largest 6-digit number. What is their difference?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>\n1. <strong>Largest 6-digit number:</strong> 9,99,999.<br>\n• <strong>Predecessor (Number - 1):</strong> 9,99,999 - 1 = <strong>9,99,998</strong>.<br>\n• <strong>Successor (Number + 1):</strong> 9,99,999 + 1 = <strong>10,00,000</strong> (Ten Lakhs, smallest 7-digit number).<br>\n2. <strong>Difference:</strong> 10,00,000 - 9,99,998 = <strong>2</strong>.<br>\n<em>Mathematical property: The difference between the successor and predecessor of any whole number is always 2.</em>",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct predecessor and successor",
            "marks": "2.0 M"
          },
          {
            "key": "Accurate difference = 2",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Rounding Off • Real-World Context",
        "q": "Round off the following vehicle odometer readings to the nearest hundred and nearest thousand:<br>(a) 43,267 km<br>(b) 89,849 km<br>(c) 15,092 km",
        "ans": "<strong>Rounding Calculations:</strong><br>\n• <strong>(a) 43,267 km:</strong><br>\n- Nearest 100: Tens digit is 6 (≥ 5) → <strong>43,300 km</strong>.<br>\n- Nearest 1,000: Hundreds digit is 2 (< 5) → <strong>43,000 km</strong>.<br>\n• <strong>(b) 89,849 km:</strong><br>\n- Nearest 100: Tens digit is 4 (< 5) → <strong>89,800 km</strong>.<br>\n- Nearest 1,000: Hundreds digit is 8 (≥ 5) → <strong>90,000 km</strong>.<br>\n• <strong>(c) 15,092 km:</strong><br>\n- Nearest 100: Tens digit is 9 (≥ 5) → <strong>15,100 km</strong>.<br>\n- Nearest 1,000: Hundreds digit is 0 (< 5) → <strong>15,000 km</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a) rounding",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b) rounding",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c) rounding",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Travel Budget • Railway Timetable",
        "q": "The train distance from Delhi to Mumbai is 1,384 km. The Rajdhani Express covers this distance in 16 hours.<br>(a) Find the average speed of the train in km per hour.<br>(b) If a passenger ticket costs ₹2,150, what is the total fare collected from a coach of 54 passengers?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Average Speed:</strong> Speed = Distance ÷ Time = 1,384 ÷ 16 = <strong>86.5 km/h</strong>.<br>\n• <strong>(b) Total Fare:</strong> Number of passengers × Fare per ticket = 54 × ₹2,150 = <strong>₹1,16,100</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Speed calculation: 1384 ÷ 16 = 86.5 km/h",
            "marks": "1.5 M"
          },
          {
            "key": "Total fare: 54 × 2150 = ₹1,16,100",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Number Line • Interval Estimation",
        "q": "On a number line marked from 50,000 to 60,000 with major ticks at intervals of 2,000:<br>(a) How many equal subdivisions lie between 50,000 and 60,000?<br>(b) Between which two markings does 57,400 lie?<br>(c) Which major marking is 57,400 closest to?",
        "ans": "<strong>Number Line Analysis:</strong><br>\n• <strong>(a) Subdivisions:</strong> Total interval = 60,000 - 50,000 = 10,000. Subdivisions = 10,000 ÷ 2,000 = <strong>5 equal intervals</strong> (50,000; 52,000; 54,000; 56,000; 58,000; 60,000).<br>\n• <strong>(b) Position:</strong> 57,400 lies between <strong>56,000 and 58,000</strong>.<br>\n• <strong>(c) Proximity:</strong> Distance to 56,000 = 57,400 - 56,000 = 1,400. Distance to 58,000 = 58,000 - 57,400 = 600. Since 600 < 1,400, it is closest to <strong>58,000</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 5 intervals identified",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): Between 56,000 and 58,000",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): Closest to 58,000",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Number Puzzles",
        "q": "I am a 5-digit number. My ten-thousands digit is 7. My thousands digit is 3 less than ten-thousands digit. My hundreds digit is 0. My tens digit is double my thousands digit, and my ones digit is 1. What number am I?",
        "ans": "<strong>Deduction Step-by-Step:</strong><br>\n1. Ten-thousands digit = <strong>7</strong>.<br>\n2. Thousands digit = 7 - 3 = <strong>4</strong>.<br>\n3. Hundreds digit = <strong>0</strong>.<br>\n4. Tens digit = 2 × 4 = <strong>8</strong>.<br>\n5. Ones digit = <strong>1</strong>.<br>\n<strong>The secret number is 74,081</strong> (Seventy-four thousand eighty-one).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct deduction of individual place values",
            "marks": "1.5 M"
          },
          {
            "key": "Final number: 74,081",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Distance Comparison • Highway Markers",
        "q": "A highway distance stone shows: Chandigarh 145 km, Shimla 260 km, Manali 495 km from Delhi.<br>(a) What is the distance between Chandigarh and Shimla?<br>(b) How much further is Manali from Chandigarh than Shimla is from Chandigarh?<br>(c) If an electric bus travels 45 km per hour, how long will it take to reach Shimla from Chandigarh?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Distance Chandigarh to Shimla:</strong> 260 km - 145 km = <strong>115 km</strong>.<br>\n• <strong>(b) Manali to Chandigarh vs Shimla to Chandigarh:</strong><br>\n- Manali to Chandigarh = 495 km - 145 km = 350 km.<br>\n- Extra distance = 350 km - 115 km = <strong>235 km</strong>.<br>\n• <strong>(c) Travel Time:</strong> Time = Distance ÷ Speed = 115 ÷ 45 = 2.55 hours = <strong>2 hours 33 minutes</strong> (approx 2.56 h).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 115 km",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 235 km extra",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): Time calculation (approx 2 h 33 min)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Flight Fuel & Passengers",
        "q": "An airliner carries 180 passengers from New Delhi to Bengaluru (distance 1,740 km).<br>(a) If each ticket is priced at ₹4,500, find the total revenue collected.<br>(b) The flight consumes 4 litres of aviation fuel per kilometre. How many litres of fuel are needed for the one-way flight?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Total Ticket Revenue:</strong> 180 × ₹4,500 = <strong>₹8,10,000</strong>.<br>\n• <strong>(b) Fuel Required:</strong> 1,740 km × 4 L/km = <strong>6,960 litres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Ticket revenue: 180 × 4,500 = ₹8,10,000",
            "marks": "1.5 M"
          },
          {
            "key": "Fuel: 1740 × 4 = 6,960 L",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Indian vs International System • Comparison",
        "q": "Write the number 450320 in:<br>(a) Indian System with commas and number name.<br>(b) International System with commas and number name.<br>(c) How many thousands make 1 Lakh?",
        "ans": "<strong>System Comparison:</strong><br>\n• <strong>(a) Indian System:</strong> <strong>4,50,320</strong> → Four Lakh Fifty Thousand Three Hundred Twenty.<br>\n• <strong>(b) International System:</strong> <strong>450,320</strong> → Four Hundred Fifty Thousand Three Hundred Twenty.<br>\n• <strong>(c) Equivalence:</strong> 1 Lakh = 1,00,000 = 100 × 1,000 = <strong>100 thousands</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Indian system: 4,50,320 and name",
            "marks": "1.0 M"
          },
          {
            "key": "International system: 450,320 and name",
            "marks": "1.0 M"
          },
          {
            "key": "1 Lakh = 100 thousands",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "HOTS • Digit Value Puzzle",
        "q": "In the number 5,75,425, what is the sum of the place values of the digit '5' appearing in all three positions?",
        "ans": "<strong>Finding Place Values of 5:</strong><br>\n• First 5 (Lakhs place): 5 × 1,00,000 = 5,00,000.<br>\n• Second 5 (Thousands place): 5 × 1,000 = 5,000.<br>\n• Third 5 (Ones place): 5 × 1 = 5.<br>\n• <strong>Sum of place values:</strong> 5,00,000 + 5,000 + 5 = <strong>5,05,005</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Identifying 500,000; 5,000; and 5",
            "marks": "1.5 M"
          },
          {
            "key": "Sum = 5,05,005",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Travel Log",
        "q": "A family maintained a travel odometer log:<br>• Start at Home: 12,450 km<br>• Lunch stop at Highway Dhaba: 12,680 km<br>• Evening Arrival at Hill Resort: 12,910 km<br>(a) Find distance covered before lunch and after lunch.<br>(b) Was the travel distance split equally before and after lunch?",
        "ans": "<strong>Analysis:</strong><br>\n• Distance before lunch = 12,680 - 12,450 = <strong>230 km</strong>.<br>\n• Distance after lunch = 12,910 - 12,680 = <strong>230 km</strong>.<br>\n• <strong>(b) Conclusion:</strong> Yes, both legs of the journey covered exactly <strong>230 km each</strong>, so the travel distance was split perfectly equally.",
        "marks": 3,
        "rubric": [
          {
            "key": "Before lunch: 230 km",
            "marks": "1.0 M"
          },
          {
            "key": "After lunch: 230 km",
            "marks": "1.0 M"
          },
          {
            "key": "Valid affirmative conclusion",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Place Value • Digit Interchange",
        "q": "A cashier entered ₹45,290 into the computer by mistake instead of ₹42,590.<br>(a) Which two digits were interchanged?<br>(b) How much extra amount was recorded?<br>(c) In which place values did this error occur?",
        "ans": "<strong>Error Analysis:</strong><br>\n• <strong>(a) Interchanged Digits:</strong> Digits <strong>5 and 2</strong> were interchanged.<br>\n• <strong>(b) Excess Amount:</strong> ₹45,290 - ₹42,590 = <strong>₹2,700</strong>.<br>\n• <strong>(c) Place Values:</strong> The error occurred between the <strong>Thousands place</strong> and <strong>Hundreds place</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): Digits 5 and 2",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): Difference ₹2,700",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): Thousands & Hundreds",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Real-Life Application • Toll Plaza Data",
        "q": "At a national highway toll plaza, 3,450 cars passed on Monday, 4,120 cars on Tuesday, and 2,980 cars on Wednesday.<br>(a) Find the total number of cars that passed over the three days.<br>(b) If each car paid ₹85 as toll, calculate the total collection on Tuesday.",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Total Cars:</strong> 3,450 + 4,120 + 2,980 = <strong>10,550 cars</strong>.<br>\n• <strong>(b) Tuesday Toll Collection:</strong> 4,120 cars × ₹85 = <strong>₹3,50,200</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total cars = 10,550",
            "marks": "1.5 M"
          },
          {
            "key": "Tuesday revenue = ₹3,50,200",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Number Logic • Predecessor Riddle",
        "q": "The predecessor of a number $X$ is 99,999. (a) What is the number $X$? (b) How many digits does $X$ have? (c) What is the successor of $X$?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Finding X:</strong> Predecessor = X - 1 = 99,999 → X = 99,999 + 1 = <strong>1,00,000 (One Lakh)</strong>.<br>\n• <strong>(b) Number of Digits:</strong> 1,00,000 has <strong>6 digits</strong> (it is the smallest 6-digit number).<br>\n• <strong>(c) Successor of X:</strong> 1,00,000 + 1 = <strong>1,00,001</strong> (One Lakh One).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): X = 1,00,000",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 6 digits",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): Successor = 1,00,001",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Travel Estimation • Walking vs Cycling",
        "q": "Rohan's school is 3,600 metres from his house.<br>(a) Express this distance in kilometres.<br>(b) Rohan walks at 60 metres per minute. How many minutes does he take to walk to school?<br>(c) If he rides his bicycle at 180 metres per minute, how much time does he save?",
        "ans": "<strong>Steps & Solutions:</strong><br>\n• <strong>(a) In Kilometres:</strong> 3,600 m ÷ 1,000 = <strong>3.6 km</strong>.<br>\n• <strong>(b) Walking Time:</strong> 3,600 ÷ 60 = <strong>60 minutes (1 hour)</strong>.<br>\n• <strong>(c) Cycling Time & Time Saved:</strong><br>\n- Cycling time = 3,600 ÷ 180 = 20 minutes.<br>\n- Time saved = 60 min - 20 min = <strong>40 minutes saved</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Distance: 3.6 km",
            "marks": "1.0 M"
          },
          {
            "key": "Walking: 60 minutes",
            "marks": "1.0 M"
          },
          {
            "key": "Time saved: 40 minutes",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Math • Quick Multiplications",
        "q": "Evaluate using place value breakdown:<br>(a) 250 × 40<br>(b) 1,200 × 5<br>(c) 99 × 35 (using 100 × 35 - 35)",
        "ans": "<strong>Mental Math Strategies:</strong><br>\n• <strong>(a) 250 × 40:</strong> 25 × 4 = 100, append two zeros → <strong>10,000</strong>.<br>\n• <strong>(b) 1,200 × 5:</strong> 12 × 5 = 60, append two zeros → <strong>6,000</strong>.<br>\n• <strong>(c) 99 × 35:</strong> (100 - 1) × 35 = (100 × 35) - (1 × 35) = 3,500 - 35 = <strong>3,465</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 10,000",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 6,000",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 3,465 with distributive working",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practical Application • Bus Capacity",
        "q": "A state transport bus has 52 passenger seats. For an inter-city tour, 380 people register.<br>(a) How many buses are required to seat all passengers comfortably?<br>(b) How many vacant seats will remain in the last bus?",
        "ans": "<strong>Division with Remainders:</strong><br>\n• 380 ÷ 52: 52 × 7 = 364 passengers.<br>\n• Remaining passengers = 380 - 364 = 16 passengers.<br>\n• <strong>(a) Buses Required:</strong> Since 16 passengers cannot be left behind, 7 + 1 = <strong>8 buses are needed</strong>.<br>\n• <strong>(b) Vacant Seats in 8th Bus:</strong> 52 - 16 = <strong>36 vacant seats</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Division: 380 ÷ 52 gives quotient 7, remainder 16",
            "marks": "1.5 M"
          },
          {
            "key": "Total 8 buses & 36 vacant seats",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "CBSE Revision • Comprehensive Problem",
        "q": "A book publisher prints 25,000 copies of a Class 5 textbook.<br>(a) If 18,450 copies are dispatched to government schools and 4,820 copies to private bookstores, how many copies remain in the warehouse?<br>(b) Write the number of remaining copies in words.",
        "ans": "<strong>Calculations:</strong><br>\n• Total books dispatched = 18,450 + 4,820 = 23,270 copies.<br>\n• <strong>(a) Remaining Copies:</strong> 25,000 - 23,270 = <strong>1,730 copies</strong>.<br>\n• <strong>(b) In Words:</strong> <strong>One thousand seven hundred thirty</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total dispatched = 23,270",
            "marks": "1.0 M"
          },
          {
            "key": "Remaining copies = 1,730",
            "marks": "1.0 M"
          },
          {
            "key": "In words: One thousand seven hundred thirty",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Competency-Based Question: Highway Toll & Fuel Economy",
      "text": "A tour bus travels across 3 states covering 1,840 km in 4 days. The bus has a fuel tank of 150 litres and gives an average mileage of 8 km per litre of diesel. Diesel costs ₹90 per litre.",
      "question": "(a) How many litres of diesel were consumed during the 1,840 km trip?<br>(b) What was the total cost of diesel consumed?<br>(c) If 40 tourists shared the diesel expense equally, how much did each passenger pay?",
      "answer": "<div class=\"cbq-sol-label\">Suggested Model Solution:</div>\r\n          \r\n <div class=\"step\"><strong>(a) Diesel Consumption:</strong> 1840/8 = <strong>230 litres</strong>.</div>\r\n <div class=\"step\"><strong>(b) Total Fuel Cost:</strong> 230 × ₹90 = <strong>₹20,700</strong>.</div>\r\n <div class=\"step\"><strong>(c) Share per Passenger:</strong> ₹20,700/40 = <strong>₹517.50</strong>.",
      "rubric": "1M concept identification + 1M step execution + 1M conclusion"
    }
  },
  {
    "id": "mela2",
    "num": 2,
    "unit": "Chapter 2 • Fractions & Parts of a Whole",
    "title": "Fractions",
    "subtitle": "भिन्न (अंश, हर, तुल्य भिन्न एवं भिन्नों की तुलना)",
    "concepts": [
      "Fraction as part of a whole: Fraction = Numerator (parts taken)/Denominator (total equal parts).",
      "Fraction Kits: Combining unit fractions: two 1/6 pieces make 1/3, two 1/4 pieces make 1/2.",
      "Equivalent Fractions: Fractions that have the same value: a/b = a × k/b × k.",
      "Cross-multiplication rule for comparing fractions: a/b vs c/d ⇒ compare a × d and b × c.",
      "Addition and subtraction of fractions with common denominators."
    ],
    "svg": "<svg viewBox=\"0 0 600 170\" width=\"100%\" height=\"170\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"170\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Equivalent Fractions &amp; Fraction Strip Wall</text>\r\n        <g transform=\"translate(50, 40)\">\r\n          <rect x=\"0\" y=\"0\" width=\"500\" height=\"24\" fill=\"#6366f1\" rx=\"4\"/>\r\n          <text x=\"250\" y=\"16\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">1 Whole (1 / 1)</text>\r\n        </g>\r\n        <g transform=\"translate(50, 68)\">\r\n          <rect x=\"0\" y=\"0\" width=\"248\" height=\"24\" fill=\"#3b82f6\" rx=\"4\"/>\r\n          <text x=\"124\" y=\"16\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">1/2</text>\r\n          <rect x=\"252\" y=\"0\" width=\"248\" height=\"24\" fill=\"#3b82f6\" rx=\"4\"/>\r\n          <text x=\"376\" y=\"16\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">1/2</text>\r\n        </g>\r\n        <g transform=\"translate(50, 96)\">\r\n          <rect x=\"0\" y=\"0\" width=\"122\" height=\"24\" fill=\"#06b6d4\" rx=\"4\"/>\r\n          <text x=\"61\" y=\"16\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">1/4</text>\r\n          <rect x=\"126\" y=\"0\" width=\"122\" height=\"24\" fill=\"#06b6d4\" rx=\"4\"/>\r\n          <text x=\"187\" y=\"16\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">1/4</text>\r\n          <rect x=\"252\" y=\"0\" width=\"122\" height=\"24\" fill=\"#06b6d4\" rx=\"4\"/>\r\n          <text x=\"313\" y=\"16\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">1/4</text>\r\n          <rect x=\"378\" y=\"0\" width=\"122\" height=\"24\" fill=\"#06b6d4\" rx=\"4\"/>\r\n          <text x=\"439\" y=\"16\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">1/4</text>\r\n        </g>\r\n        <text x=\"300\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Visual Insight: 1/2 = 2/4 = 4/8 | Two 1/4 strips exactly equal One 1/2 strip</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Visual Fractions • Shaded Parts",
        "q": "In each of the following figures, identify the fraction represented by the shaded region:<br>(a) A circle divided into 8 equal sectors with 3 shaded.<br>(b) A rectangle divided into 12 equal squares with 7 shaded.<br>(c) A strip of 10 equal parts with 4 unshaded. What fraction is shaded?",
        "ans": "<strong>Fraction Identification:</strong><br>\n• <strong>(a) Circle:</strong> Total parts = 8, Shaded = 3. Fraction = <strong>3/8 (three-eighths)</strong>.<br>\n• <strong>(b) Rectangle:</strong> Total parts = 12, Shaded = 7. Fraction = <strong>7/12 (seven-twelfths)</strong>.<br>\n• <strong>(c) Strip:</strong> Total parts = 10. Shaded parts = 10 - 4 = 6. Fraction = 6/10 = <strong>3/5 (three-fifths)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 3/8",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 7/12",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 6/10 or 3/5",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Equivalent Fractions • Multiplication & Division",
        "q": "Find three equivalent fractions for each of the following:<br>(a) 3/4<br>(b) 2/7<br>(c) 18/24 (using division/simplification)",
        "ans": "<strong>Finding Equivalent Fractions:</strong><br>\n• <strong>(a) 3/4:</strong><br>\n- (3 × 2)/(4 × 2) = <strong>6/8</strong><br>\n- (3 × 3)/(4 × 3) = <strong>9/12</strong><br>\n- (3 × 4)/(4 × 4) = <strong>12/16</strong>.<br>\n• <strong>(b) 2/7:</strong><br>\n- (2 × 2)/(7 × 2) = <strong>4/14</strong><br>\n- (2 × 3)/(7 × 3) = <strong>6/21</strong><br>\n- (2 × 5)/(7 × 5) = <strong>10/35</strong>.<br>\n• <strong>(c) 18/24:</strong><br>\n- Divide by 2: (18 ÷ 2)/(24 ÷ 2) = <strong>9/12</strong><br>\n- Divide by 3: (18 ÷ 3)/(24 ÷ 3) = <strong>6/8</strong><br>\n- Divide by 6: (18 ÷ 6)/(24 ÷ 6) = <strong>3/4 (simplest form)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a) equivalent fractions",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b) equivalent fractions",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c) simplified equivalent fractions",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comparing Fractions • Cross Multiplication",
        "q": "Compare the following pairs of fractions using > or < signs:<br>(a) 3/5 and 4/7<br>(b) 5/8 and 7/12<br>(c) 2/3 and 8/12",
        "ans": "<strong>Comparison by Cross Multiplication:</strong><br>\n• <strong>(a) 3/5 vs 4/7:</strong> Cross multiply: 3 × 7 = 21, and 5 × 4 = 20. Since 21 > 20, <strong>3/5 > 4/7</strong>.<br>\n• <strong>(b) 5/8 vs 7/12:</strong> Cross multiply: 5 × 12 = 60, and 8 × 7 = 56. Since 60 > 56, <strong>5/8 > 7/12</strong>.<br>\n• <strong>(c) 2/3 vs 8/12:</strong> Cross multiply: 2 × 12 = 24, and 3 × 8 = 24. Since 24 = 24, <strong>2/3 = 8/12</strong> (they are equal equivalent fractions).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 3/5 > 4/7",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 5/8 > 7/12",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 2/3 = 8/12",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Fractions on a Number Line",
        "q": "Draw a number line from 0 to 1 and locate the points representing: 1/4, 2/4, 3/4, and 4/4. What is another name for 2/4 and 4/4?",
        "ans": "<strong>Number Line Representation:</strong><br>\n1. Divide the segment from 0 to 1 into 4 equal segments.<br>\n2. Mark points at 1/4, 2/4, 3/4, and 4/4.<br>\n• <strong>Another name for 2/4:</strong> Simplifying gives <strong>1/2 (One-Half)</strong>.<br>\n• <strong>Another name for 4/4:</strong> 4 ÷ 4 = <strong>1 (One Whole)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct subdivision into 4 equal parts",
            "marks": "1.5 M"
          },
          {
            "key": "Identification of 2/4 = 1/2 and 4/4 = 1",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Word Problem • Sharing Food",
        "q": "Rohan has a chocolate bar with 16 equal pieces. He gives 1/4 of it to his sister, 1/2 of it to his mother, and keeps the rest for himself.<br>(a) How many pieces does his sister get?<br>(b) How many pieces does his mother get?<br>(c) What fraction and how many pieces are left for Rohan?",
        "ans": "<strong>Calculations (Total = 16 pieces):</strong><br>\n• <strong>(a) Sister's Share:</strong> 1/4 of 16 = 16 ÷ 4 = <strong>4 pieces</strong>.<br>\n• <strong>(b) Mother's Share:</strong> 1/2 of 16 = 16 ÷ 2 = <strong>8 pieces</strong>.<br>\n• <strong>(c) Rohan's Share:</strong><br>\n- Pieces left = 16 - (4 + 8) = 16 - 12 = <strong>4 pieces</strong>.<br>\n- Fraction = 4/16 = <strong>1/4 of the chocolate bar</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Sister: 4 pieces",
            "marks": "1.0 M"
          },
          {
            "key": "Mother: 8 pieces",
            "marks": "1.0 M"
          },
          {
            "key": "Rohan: 4 pieces (1/4)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Addition of Like Fractions",
        "q": "Solve the following additions and express in simplest form:<br>(a) 2/9 + 4/9<br>(b) 3/10 + 5/10<br>(c) 7/15 + 8/15",
        "ans": "<strong>Step-by-Step Addition:</strong><br>\n• <strong>(a) 2/9 + 4/9:</strong> (2 + 4)/9 = <strong>6/9 = 2/3</strong>.<br>\n• <strong>(b) 3/10 + 5/10:</strong> (3 + 5)/10 = <strong>8/10 = 4/5</strong>.<br>\n• <strong>(c) 7/15 + 8/15:</strong> (7 + 8)/15 = <strong>15/15 = 1 (Whole)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 6/9 = 2/3",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 8/10 = 4/5",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 15/15 = 1",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Subtraction of Like Fractions",
        "q": "Solve the following subtractions:<br>(a) 7/8 - 3/8<br>(b) 11/12 - 5/12<br>(c) 1 - 3/5",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) 7/8 - 3/8:</strong> (7 - 3)/8 = 4/8 = <strong>1/2</strong>.<br>\n• <strong>(b) 11/12 - 5/12:</strong> (11 - 5)/12 = 6/12 = <strong>1/2</strong>.<br>\n• <strong>(c) 1 - 3/5:</strong> Write 1 as 5/5: 5/5 - 3/5 = (5 - 3)/5 = <strong>2/5</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 1/2",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 1/2",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 2/5",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Fraction of a Set / Collection",
        "q": "Calculate:<br>(a) 3/4 of 24 apples<br>(b) 2/5 of 45 students<br>(c) 5/6 of 60 minutes",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) 3/4 of 24:</strong> (24 ÷ 4) × 3 = 6 × 3 = <strong>18 apples</strong>.<br>\n• <strong>(b) 2/5 of 45:</strong> (45 ÷ 5) × 2 = 9 × 2 = <strong>18 students</strong>.<br>\n• <strong>(c) 5/6 of 60:</strong> (60 ÷ 6) × 5 = 10 × 5 = <strong>50 minutes</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 18 apples",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 18 students",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 50 minutes",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mixed Fractions & Improper Fractions",
        "q": "(a) Convert the improper fraction 14/3 into a mixed fraction.<br>(b) Convert the mixed fraction $3\\frac{2}{5}$ into an improper fraction.<br>(c) Which is greater: $2\\frac{1}{2}$ or 9/4?",
        "ans": "<strong>Conversions & Comparison:</strong><br>\n• <strong>(a) 14/3:</strong> 14 ÷ 3 gives quotient 4 with remainder 2 → <strong>$4\\frac{2}{3}$</strong>.<br>\n• <strong>(b) $3\\frac{2}{5}$:</strong> (3 × 5 + 2)/5 = (15 + 2)/5 = <strong>17/5</strong>.<br>\n• <strong>(c) Comparison:</strong> Convert $2\\frac{1}{2}$ to improper: 5/2 = 10/4. Since 10/4 > 9/4, <strong>$2\\frac{1}{2} > 9/4$</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 4 2/3",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 17/5",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 2 1/2 > 9/4",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Ramu's Vegetable Field • Comprehensive Fractions",
        "q": "A vegetable farmer divides his rectangular plot into 12 equal beds. He plants tomatoes in 4 beds, potatoes in 3 beds, spinach in 2 beds, and carrots in the remaining beds.<br>(a) What fraction of the garden is used for tomatoes (in simplest form)?<br>(b) What fraction of the garden is used for carrots?<br>(c) Do potatoes and spinach together occupy more than half of the field? Explain.",
        "ans": "<strong>Analysis (Total = 12 beds):</strong><br>\n• <strong>(a) Tomatoes:</strong> 4/12 = <strong>1/3 of the field</strong>.<br>\n• <strong>(b) Carrots:</strong> Beds left = 12 - (4 + 3 + 2) = 12 - 9 = 3 beds. Fraction = 3/12 = <strong>1/4 of the field</strong>.<br>\n• <strong>(c) Potatoes + Spinach:</strong> 3/12 + 2/12 = 5/12. Half the field is 6/12. Since 5/12 < 6/12, <strong>No, they occupy less than half of the field</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Tomatoes = 1/3",
            "marks": "1.0 M"
          },
          {
            "key": "Carrots = 1/4",
            "marks": "1.0 M"
          },
          {
            "key": "Comparison: 5/12 < 6/12 (less than half)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practical Application • Fuel Tank Fraction",
        "q": "A car fuel tank holds 40 litres when completely full. The fuel gauge needle points to 3/8.<br>(a) How many litres of petrol are currently in the tank?<br>(b) How many litres are needed to fill the tank to capacity?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Current Petrol:</strong> 3/8 of 40 L = (40 ÷ 8) × 3 = 5 × 3 = <strong>15 litres</strong>.<br>\n• <strong>(b) Petrol to Fill:</strong> 40 L - 15 L = <strong>25 litres</strong> (or 5/8 of 40 = 25 L).",
        "marks": 3,
        "rubric": [
          {
            "key": "Current: 15 litres",
            "marks": "1.5 M"
          },
          {
            "key": "Needed: 25 litres",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Ordering Fractions",
        "q": "Arrange the following fractions in ascending order (smallest to largest):<br>2/3, 1/6, 3/4, 5/12",
        "ans": "<strong>Finding Common Denominator (LCM of 3, 6, 4, 12 is 12):</strong><br>\n• 2/3 = (2 × 4)/(3 × 4) = 8/12<br>\n• 1/6 = (1 × 2)/(6 × 2) = 2/12<br>\n• 3/4 = (3 × 3)/(4 × 3) = 9/12<br>\n• 5/12 = 5/12<br>\nComparing numerators: 2 < 5 < 8 < 9.<br>\n<strong>Ascending Order: 1/6 < 5/12 < 2/3 < 3/4</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Converting to common denominator 12",
            "marks": "1.5 M"
          },
          {
            "key": "Correct ascending order: 1/6, 5/12, 2/3, 3/4",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Paper Folding Fractions",
        "q": "Take a square paper napkin. Fold it in half horizontally, then in half vertically.<br>(a) How many equal parts are created?<br>(b) If you unfold and colour 3 of the squares, what fraction is coloured?<br>(c) If each small square has an area of 9 cm², what is the area of the entire napkin?",
        "ans": "<strong>Geometry & Fractions:</strong><br>\n• <strong>(a) Equal Parts:</strong> 2 × 2 = <strong>4 equal squares</strong>.<br>\n• <strong>(b) Fraction Coloured:</strong> 3 out of 4 = <strong>3/4 (three-fourths)</strong>.<br>\n• <strong>(c) Total Area:</strong> 4 × 9 cm² = <strong>36 cm²</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 4 equal parts",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 3/4",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): Total area = 36 cm²",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Unit Fractions • Concept & Property",
        "q": "(a) What is a unit fraction? Give two examples.<br>(b) Which unit fraction is larger: 1/7 or 1/9? Explain the rule.",
        "ans": "<strong>Unit Fractions Explanation:</strong><br>\n• <strong>(a) Definition:</strong> A fraction with a numerator of 1 is called a <strong>unit fraction</strong>. Examples: <strong>1/2, 1/5, 1/10</strong>.<br>\n• <strong>(b) Comparison:</strong> <strong>1/7 > 1/9</strong>.<br>\n<strong>Rule:</strong> When two fractions have the same numerator (1), the fraction with the <strong>smaller denominator is greater</strong>, because dividing a whole into fewer parts makes each individual part larger.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition and examples",
            "marks": "1.5 M"
          },
          {
            "key": "1/7 > 1/9 with logical rule explanation",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Fraction Word Problem • Library Books",
        "q": "In a class library of 60 books, 1/3 are science books, 2/5 are storybooks, and the rest are mathematics puzzle books.<br>(a) Find the number of science books.<br>(b) Find the number of storybooks.<br>(c) How many mathematics puzzle books are there?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Science Books:</strong> 1/3 of 60 = 60 ÷ 3 = <strong>20 books</strong>.<br>\n• <strong>(b) Storybooks:</strong> 2/5 of 60 = (60 ÷ 5) × 2 = 12 × 2 = <strong>24 books</strong>.<br>\n• <strong>(c) Math Puzzle Books:</strong> 60 - (20 + 24) = 60 - 44 = <strong>16 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Science = 20",
            "marks": "1.0 M"
          },
          {
            "key": "Story = 24",
            "marks": "1.0 M"
          },
          {
            "key": "Math = 16",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Decimal-Fraction Equivalence",
        "q": "Express each fraction as a decimal:<br>(a) 3/10<br>(b) 75/100<br>(c) 2/5<br>(d) 1/4",
        "ans": "<strong>Conversions:</strong><br>\n• <strong>(a) 3/10:</strong> <strong>0.3</strong>.<br>\n• <strong>(b) 75/100:</strong> <strong>0.75</strong>.<br>\n• <strong>(c) 2/5:</strong> Multiply top and bottom by 2: 4/10 = <strong>0.4</strong>.<br>\n• <strong>(d) 1/4:</strong> Multiply top and bottom by 25: 25/100 = <strong>0.25</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "0.3 and 0.75",
            "marks": "1.5 M"
          },
          {
            "key": "0.4 and 0.25",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "HOTS • Fraction Riddle",
        "q": "A fraction is equivalent to 2/3. The sum of its numerator and denominator is 25. Find the fraction.",
        "ans": "<strong>Algebraic Reasoning:</strong><br>\n1. Let the fraction be (2 × k) / (3 × k).<br>\n2. Sum of numerator and denominator: 2k + 3k = 25.<br>\n3. 5k = 25 → k = 5.<br>\n4. Numerator = 2 × 5 = 10.<br>\n5. Denominator = 3 × 5 = 15.<br>\n<strong>The fraction is 10/15</strong> (Check: 10 + 15 = 25 and 10/15 reduces to 2/3).",
        "marks": 3,
        "rubric": [
          {
            "key": "Setting up proportion 2k + 3k = 25",
            "marks": "1.5 M"
          },
          {
            "key": "Final fraction = 10/15",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Time & Fractions • Hour Portions",
        "q": "How many minutes are there in:<br>(a) 1/4 of an hour<br>(b) 2/3 of an hour<br>(c) 1/2 of 1/2 of an hour",
        "ans": "<strong>1 Hour = 60 Minutes:</strong><br>\n• <strong>(a) 1/4 of 60:</strong> 60 ÷ 4 = <strong>15 minutes</strong>.<br>\n• <strong>(b) 2/3 of 60:</strong> (60 ÷ 3) × 2 = 20 × 2 = <strong>40 minutes</strong>.<br>\n• <strong>(c) 1/2 of 1/2 of 60:</strong> 1/4 of 60 = <strong>15 minutes</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 15 minutes",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 40 minutes",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 15 minutes",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Fraction Word Problem • Money Spent",
        "q": "Priya had ₹240. She spent 1/3 of her money on a geometry box and 1/4 of her money on sketch pens.<br>(a) How much money did she spend on the geometry box?<br>(b) How much on sketch pens?<br>(c) How much money does she have left?",
        "ans": "<strong>Financial Calculations:</strong><br>\n• <strong>(a) Geometry Box:</strong> 1/3 of 240 = 240 ÷ 3 = <strong>₹80</strong>.<br>\n• <strong>(b) Sketch Pens:</strong> 1/4 of 240 = 240 ÷ 4 = <strong>₹60</strong>.<br>\n• <strong>(c) Money Left:</strong> 240 - (80 + 60) = 240 - 140 = <strong>₹100</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Geometry box: ₹80",
            "marks": "1.0 M"
          },
          {
            "key": "Sketch pens: ₹60",
            "marks": "1.0 M"
          },
          {
            "key": "Remaining: ₹100",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Simplifying Fractions to Lowest Terms",
        "q": "Reduce each fraction to its simplest form by dividing by their HCF:<br>(a) 24/36<br>(b) 15/45<br>(c) 28/70",
        "ans": "<strong>Simplification:</strong><br>\n• <strong>(a) 24/36:</strong> HCF(24, 36) = 12. (24 ÷ 12)/(36 ÷ 12) = <strong>2/3</strong>.<br>\n• <strong>(b) 15/45:</strong> HCF(15, 45) = 15. (15 ÷ 15)/(45 ÷ 15) = <strong>1/3</strong>.<br>\n• <strong>(c) 28/70:</strong> HCF(28, 70) = 14. (28 ÷ 14)/(70 ÷ 14) = <strong>2/5</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 2/3",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 1/3",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 2/5",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Fraction of Weight & Mass",
        "q": "A baker uses 1 kg of flour. He uses 3/8 kg for biscuits and 1/2 kg for bread.<br>(a) Express both amounts in grams.<br>(b) How many grams of flour are used in total?<br>(c) How many grams of flour remain unused?",
        "ans": "<strong>1 kg = 1,000 g:</strong><br>\n• <strong>(a) In grams:</strong><br>\n- Biscuits: 3/8 of 1,000 = (1000 ÷ 8) × 3 = 125 × 3 = <strong>375 g</strong>.<br>\n- Bread: 1/2 of 1,000 = <strong>500 g</strong>.<br>\n• <strong>(b) Total Flour Used:</strong> 375 g + 500 g = <strong>875 g</strong>.<br>\n• <strong>(c) Unused Flour:</strong> 1,000 g - 875 g = <strong>125 g</strong> (or 1/8 kg).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 375 g and 500 g",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 875 g",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 125 g",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Measurement Fractions • Tape Length",
        "q": "A tailor has a 2-metre ribbon. He cuts it into 8 equal pieces.<br>(a) What fraction of a metre is each piece?<br>(b) What is the length of each piece in centimetres?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Fraction of a Metre:</strong> Total length = 2 m. Length per piece = 2 ÷ 8 = 2/8 = <strong>1/4 of a metre</strong>.<br>\n• <strong>(b) In Centimetres:</strong> 1 m = 100 cm. 1/4 of 100 cm = 100 ÷ 4 = <strong>25 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Fraction = 1/4 m",
            "marks": "1.5 M"
          },
          {
            "key": "Length = 25 cm",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Critical Thinking • True or False with Reason",
        "q": "State whether each statement is True or False. Give a mathematical justification:<br>(a) 2/3 of 12 is greater than 3/4 of 12.<br>(b) Any fraction with numerator equal to denominator equals 1.<br>(c) 4/6 and 6/9 are equivalent fractions.",
        "ans": "<strong>Justifications:</strong><br>\n• <strong>(a) False:</strong> 2/3 of 12 = 8; 3/4 of 12 = 9. Since 8 < 9, the statement is False.<br>\n• <strong>(b) True:</strong> When numerator = denominator (e.g. 5/5, 8/8), dividing a quantity into $n$ parts and taking all $n$ parts equals exactly 1 whole.<br>\n• <strong>(c) True:</strong> 4/6 simplifies to 2/3 (divide by 2). 6/9 simplifies to 2/3 (divide by 3). Both equal 2/3, so they are equivalent.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): False with calculation",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): True with justification",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): True with simplification",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comprehensive Review • Fraction Story Problem",
        "q": "A cricket team played 20 matches in a season. They won 3/5 of their matches, lost 1/4 of their matches, and the rest were tied.<br>(a) How many matches did they win?<br>(b) How many matches did they lose?<br>(c) How many matches were tied, and what fraction of the total is that?",
        "ans": "<strong>Working (Total Matches = 20):</strong><br>\n• <strong>(a) Matches Won:</strong> 3/5 of 20 = (20 ÷ 5) × 3 = 4 × 3 = <strong>12 matches</strong>.<br>\n• <strong>(b) Matches Lost:</strong> 1/4 of 20 = 20 ÷ 4 = <strong>5 matches</strong>.<br>\n• <strong>(c) Matches Tied:</strong> 20 - (12 + 5) = 20 - 17 = <strong>3 matches</strong>.<br>\n- Fraction tied = <strong>3/20 of the matches</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Won: 12 matches",
            "marks": "1.0 M"
          },
          {
            "key": "Lost: 5 matches",
            "marks": "1.0 M"
          },
          {
            "key": "Tied: 3 matches (3/20)",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Competency Question: Farmer Sohan's Crop Field Partition",
      "text": "Farmer Sohan has a square field measuring 24 acres. He cultivates wheat on 1/3 of the land, tomatoes on 1/4 of the land, and mustard on 1/6 of the land. The remaining land is kept as grazing meadow for cattle.",
      "question": "(a) How many acres are used for each of the three crops?<br>(b) How many acres remain for cattle grazing?<br>(c) What fraction of the total field is left for cattle?",
      "answer": "<div class=\"cbq-sol-label\">Suggested Model Solution:</div>\r\n          \r\n <div class=\"step\"><strong>(a) Acres for each crop:</strong><br>\r\n - Wheat: 1/3 × 24 = <strong>8 acres</strong>.<br>\r\n - Tomatoes: 1/4 × 24 = <strong>6 acres</strong>.<br>\r\n - Mustard: 1/6 × 24 = <strong>4 acres</strong>.</div>\r\n <div class=\"step\"><strong>(b) Acres for Cattle Grazing:</strong><br>\r\n Remaining area = 24 - (8 + 6 + 4) = 24 - 18 = <strong>6 acres</strong>.</div>\r\n <div class=\"step\"><strong>(c) Fraction for Cattle:</strong> 6/24 = <strong>1/4</strong>.",
      "rubric": "1M concept identification + 1M step execution + 1M conclusion"
    }
  },
  {
    "id": "mela3",
    "num": 3,
    "unit": "Chapter 3 • Geometry, Angles & Turns",
    "title": "Angles as Turns",
    "subtitle": "कोण और घुमाव (समकोण, न्यूनकोण, अधिककोण एवं घूर्णन)",
    "concepts": [
      "Angle definition: Formed when two rays or line segments meet at a common vertex point.",
      "Types of Angles: Right Angle = 90° (L-shape); Acute Angle &lt; 90°; Obtuse Angle between 90° and 180°; Straight Angle = 180°.",
      "Angles as Turns: 1/4 turn = 90° (one right angle); 1/2 turn = 180° (two right angles); 3/4 turn = 270°; 1 full turn = 360°.",
      "Clock Angles: Clock dial is 360° divided into 12 hours. Angle between consecutive numbers = 30°."
    ],
    "svg": "<svg viewBox=\"0 0 600 170\" width=\"100%\" height=\"170\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"170\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Classification of Angles &amp; Rotational Turns</text>\r\n        <g transform=\"translate(40, 45)\">\r\n          <path d=\"M 10 70 L 80 70 L 60 25\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\"/>\r\n          <path d=\"M 40 70 A 30 30 0 0 0 35 48\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\r\n          <text x=\"45\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Acute Angle</text>\r\n          <text x=\"45\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"middle\">&lt; 90° (Sharp)</text>\r\n        </g>\r\n        <g transform=\"translate(180, 45)\">\r\n          <path d=\"M 10 70 L 70 70 M 70 70 L 70 10\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"3\"/>\r\n          <rect x=\"56\" y=\"56\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"1.5\"/>\r\n          <text x=\"45\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Right Angle</text>\r\n          <text x=\"45\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"middle\">= 90° (1/4 Turn)</text>\r\n        </g>\r\n        <g transform=\"translate(320, 45)\">\r\n          <path d=\"M 10 70 L 80 70 L 15 25\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\r\n          <path d=\"M 50 70 A 30 30 0 0 0 45 42\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\r\n          <text x=\"45\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Obtuse Angle</text>\r\n          <text x=\"45\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"middle\">&gt; 90° &amp; &lt; 180°</text>\r\n        </g>\r\n        <g transform=\"translate(460, 45)\">\r\n          <path d=\"M 10 70 L 90 70\" fill=\"none\" stroke=\"#9333ea\" stroke-width=\"3\"/>\r\n          <circle cx=\"50\" cy=\"70\" r=\"4\" fill=\"#9333ea\"/>\r\n          <path d=\"M 30 70 A 20 20 0 0 1 70 70\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\r\n          <text x=\"50\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Straight Line</text>\r\n          <text x=\"50\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"middle\">= 180° (1/2 Turn)</text>\r\n        </g>\r\n        <text x=\"300\" y=\"150\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#475569\" text-anchor=\"middle\">Key Rule: 1 Full Turn = 360° | 1/2 Turn = 180° | 1/4 Turn = 90° | 1/8 Turn = 45°</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Clock Angles • Concept & Types",
        "q": "What type of angle (Acute, Right, Obtuse, or Straight) is formed between the hour hand and minute hand of a clock at the following times?<br>(a) 3:00<br>(b) 6:00<br>(c) 9:30<br>(d) 1:15",
        "ans": "<strong>Clock Hand Angle Analysis:</strong> (Each hour mark = 360° ÷ 12 = 30°)<br>\n• <strong>(a) 3:00:</strong> Hour at 3, minute at 12. Separation = 3 hours = 3 × 30° = <strong>90° (Right Angle)</strong>.<br>\n• <strong>(b) 6:00:</strong> Hour at 6, minute at 12. Separation = 6 hours = 6 × 30° = <strong>180° (Straight Angle)</strong>.<br>\n• <strong>(c) 9:30:</strong> Minute hand at 6, hour hand halfway between 9 and 10 (at 9.5). Distance = 3.5 marks = 3.5 × 30° = <strong>105° (Obtuse Angle)</strong>.<br>\n• <strong>(d) 1:15:</strong> Minute hand at 3, hour hand slightly past 1. Distance ≈ 1.75 marks ≈ <strong>52.5° (Acute Angle)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 90° (Right angle)",
            "marks": "0.75 M"
          },
          {
            "key": "Part (b): 180° (Straight angle)",
            "marks": "0.75 M"
          },
          {
            "key": "Part (c): 105° (Obtuse angle)",
            "marks": "0.75 M"
          },
          {
            "key": "Part (d): 52.5° (Acute angle)",
            "marks": "0.75 M"
          }
        ]
      },
      {
        "category": "Turns & Directions • Compass Navigation",
        "q": "A girl stands facing North.<br>(a) If she takes a 1/4 turn clockwise, which direction will she face?<br>(b) If she takes a 1/2 turn from North, which direction will she face?<br>(c) If she takes a 3/4 turn anticlockwise from North, which direction will she face?",
        "ans": "<strong>Direction Analysis:</strong><br>\n• <strong>(a) 1/4 Turn Clockwise:</strong> 90° turn to the right from North → <strong>East</strong>.<br>\n• <strong>(b) 1/2 Turn:</strong> 180° turn (opposite direction) from North → <strong>South</strong>.<br>\n• <strong>(c) 3/4 Turn Anticlockwise:</strong> 270° counter-clockwise: North → West (90°) → South (180°) → <strong>East (270°)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): East",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): South",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): East",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Angles in Letters of the Alphabet",
        "q": "Identify the type and count of angles formed by straight lines in the capital letter <strong>'H'</strong> and letter <strong>'E'</strong>.<br>(a) How many right angles are in 'H'?<br>(b) How many right angles are in 'E'?",
        "ans": "<strong>Geometric Angle Count in Letters:</strong><br>\n• <strong>(a) Letter 'H':</strong> The horizontal bar meets the two vertical uprights creating 2 interior right angles on the left and 2 on the right = <strong>4 right angles (all 90°)</strong>.<br>\n• <strong>(b) Letter 'E':</strong> Three horizontal bars meet the vertical spine: top bar (1 right angle), middle bar (2 right angles above and below), bottom bar (1 right angle) = <strong>4 right angles (all 90°)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Letter H: 4 right angles",
            "marks": "1.5 M"
          },
          {
            "key": "Letter E: 4 right angles",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Angle Tester • In-Text Activity",
        "q": "Explain how you can make a simple 'Angle Tester' using two strips of cardboard and a drawing pin. How do you test whether the corner of a textbook is a right angle?",
        "ans": "<strong>Cardboard Angle Tester:</strong><br>\n1. <strong>Construction:</strong> Cut two equal strips of stiff cardboard (about 15 cm long). Fasten them together at one end using a drawing pin or split paper pin so they can pivot freely.<br>\n2. <strong>Testing a Textbook Corner:</strong><br>\n• Open the two arms so that one arm lies along the bottom edge and the other arm lies along the side edge of the textbook.<br>\n• If the arms open to form an 'L' shape matching the corner perfectly without any gap or overlap, the corner is exactly a <strong>Right Angle (90°)</strong>.<br>\n• If the corner opens less than the 'L' shape, it is an <strong>Acute Angle</strong>. If more, it is an <strong>Obtuse Angle</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct steps of construction with pivot pin",
            "marks": "1.5 M"
          },
          {
            "key": "Clear testing procedure matching 'L' shape (90°)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Angles in Yoga Asanas • Real-Life Geometry",
        "q": "In various yoga postures (asanas), the body forms different angles:<br>(a) In 'Dandasana' (Staff Pose), where a person sits upright on the floor with legs extended forward, what angle is formed between the spine and the legs?<br>(b) In 'Bhujangasana' (Cobra Pose), what type of angle does the backward-curving upper torso make relative to the floor?<br>(c) When touching toes in 'Uttanasana', what type of angle is formed at the hips?",
        "ans": "<strong>Yoga Asana Angle Identification:</strong><br>\n• <strong>(a) Dandasana:</strong> The spine is vertical (90°) to the horizontal legs lying flat on the mat. Angle = <strong>Right Angle (90°)</strong>.<br>\n• <strong>(b) Bhujangasana:</strong> The chest and head lift upward and backward away from the floor, opening past 90°. Angle = <strong>Obtuse Angle (greater than 90°)</strong>.<br>\n• <strong>(c) Uttanasana:</strong> The upper body folds deeply forward against the legs. The angle at the hip joint is significantly less than 90°. Angle = <strong>Acute Angle (less than 90°)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Dandasana: Right Angle (90°)",
            "marks": "1.0 M"
          },
          {
            "key": "Bhujangasana: Obtuse Angle",
            "marks": "1.0 M"
          },
          {
            "key": "Uttanasana: Acute Angle",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Degrees & Fractions of a Turn",
        "q": "A full turn around a complete circle is 360°.<br>(a) How many degrees are in a 1/4 turn?<br>(b) How many degrees are in a 1/2 turn?<br>(c) How many degrees are in a 3/4 turn?<br>(d) How many degrees are in a 1/8 turn?",
        "ans": "<strong>Degree Computations (Full Turn = 360°):</strong><br>\n• <strong>(a) 1/4 Turn:</strong> 360° ÷ 4 = <strong>90° (Right angle)</strong>.<br>\n• <strong>(b) 1/2 Turn:</strong> 360° ÷ 2 = <strong>180° (Straight angle)</strong>.<br>\n• <strong>(c) 3/4 Turn:</strong> (360° ÷ 4) × 3 = 90° × 3 = <strong>270° (Reflex angle)</strong>.<br>\n• <strong>(d) 1/8 Turn:</strong> 360° ÷ 8 = <strong>45° (Half of a right angle)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 90°",
            "marks": "0.75 M"
          },
          {
            "key": "Part (b): 180°",
            "marks": "0.75 M"
          },
          {
            "key": "Part (c): 270°",
            "marks": "0.75 M"
          },
          {
            "key": "Part (d): 45°",
            "marks": "0.75 M"
          }
        ]
      },
      {
        "category": "Angles in Names • Comprehensive Count",
        "q": "Write the name <strong>'RAMAN'</strong> in straight capital block letters. Count:<br>(a) The total number of right angles.<br>(b) The total number of acute angles (less than 90°).<br>(c) The total number of obtuse angles (greater than 90°).",
        "ans": "<strong>Analyzing Letters in 'RAMAN':</strong><br>\n• <strong>R:</strong> Upright and top loop has 2 right angles.<br>\n• <strong>A:</strong> 3 acute angles (1 apex + 2 at crossbar base), 2 obtuse angles (inside crossbar junction).<br>\n• <strong>M:</strong> 3 acute angles (1 central valley + 2 outer peaks).<br>\n• <strong>A:</strong> 3 acute angles, 2 obtuse angles.<br>\n• <strong>N:</strong> 2 acute angles (top and bottom corners).<br>\n<strong>Summary Count:</strong><br>\n• <strong>(a) Right Angles:</strong> <strong>2</strong>.<br>\n• <strong>(b) Acute Angles:</strong> 3 + 3 + 3 + 2 = <strong>11</strong>.<br>\n• <strong>(c) Obtuse Angles:</strong> 2 + 2 = <strong>4</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Right angles = 2",
            "marks": "1.0 M"
          },
          {
            "key": "Acute angles = 11",
            "marks": "1.0 M"
          },
          {
            "key": "Obtuse angles = 4",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Protractor Reading • Measuring Angles",
        "q": "Explain how to place a protractor on a drawn angle $\\angle ABC$ with vertex at $B$ to measure its size accurately. Mention the baseline and centre point.",
        "ans": "<strong>Protractor Alignment Steps:</strong><br>\n1. Place the <strong>centre point (cross-mark)</strong> of the protractor directly over the vertex point $B$ of the angle.<br>\n2. Align the <strong>baseline</strong> of the protractor precisely along ray $BC$ so that the $0^\\circ$ mark lies directly on line $BC$.<br>\n3. Look at the second ray $BA$. Follow the scale starting from $0^\\circ$ on the baseline to where ray $BA$ passes through the curved scale.<br>\n4. Read the degree value on that scale. That number gives the exact measurement of $\\angle ABC$ in degrees.",
        "marks": 3,
        "rubric": [
          {
            "key": "Centre point on vertex B",
            "marks": "1.0 M"
          },
          {
            "key": "Baseline aligned with ray BC at 0°",
            "marks": "1.0 M"
          },
          {
            "key": "Reading scale along ray BA",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Acute, Right, Obtuse Classification",
        "q": "Classify each of the following angle measurements as Acute, Right, Obtuse, or Straight:<br>(a) 35°<br>(b) 90°<br>(c) 128°<br>(d) 89°<br>(e) 180°<br>(f) 92°",
        "ans": "<strong>Classification:</strong><br>\n• <strong>(a) 35°:</strong> Less than 90° → <strong>Acute Angle</strong>.<br>\n• <strong>(b) 90°:</strong> Exactly 90° → <strong>Right Angle</strong>.<br>\n• <strong>(c) 128°:</strong> Between 90° and 180° → <strong>Obtuse Angle</strong>.<br>\n• <strong>(d) 89°:</strong> Less than 90° → <strong>Acute Angle</strong>.<br>\n• <strong>(e) 180°:</strong> Exactly 180° → <strong>Straight Angle</strong>.<br>\n• <strong>(f) 92°:</strong> Greater than 90° → <strong>Obtuse Angle</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parts (a), (b), (c)",
            "marks": "1.5 M"
          },
          {
            "key": "Parts (d), (e), (f)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Carrom Board Angles • Rebound Trajectory",
        "q": "When playing carrom, a striker hits the cushion board at an angle of 45° with the border edge.<br>(a) What type of angle is 45°?<br>(b) At what angle will the striker rebound off the cushion (assuming ideal bounce)?<br>(c) What is the total angle of deviation between the incoming path and outgoing path?",
        "ans": "<strong>Billiards / Carrom Angle Geometry:</strong><br>\n• <strong>(a) Angle Type:</strong> 45° is less than 90°, so it is an <strong>Acute Angle</strong> (half of a right angle).<br>\n• <strong>(b) Rebound Angle:</strong> By the law of reflection, angle of reflection equals angle of incidence: Rebound angle = <strong>45° with the cushion border</strong>.<br>\n• <strong>(c) Angle of Deviation:</strong> The straight line path (180°) minus the sum of two cushion angles (45° + 45° = 90°) gives a deflection of 180° - 90° = <strong>90° (a right-angle turn)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): Acute angle",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 45° rebound",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 90° right-angle turn",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Angles in Everyday Tools • Scissors & Compass",
        "q": "(a) What happens to the angle between the two blades of a pair of scissors when you open them wider? Does it increase or decrease?<br>(b) A pair of scissors is opened to an angle of 30°. If it is opened by another 60°, what type of angle is formed?",
        "ans": "<strong>Angle Variation in Hinged Tools:</strong><br>\n• <strong>(a) Blade Opening:</strong> When scissors are opened wider, the angle between the blades <strong>increases</strong> in degree measure.<br>\n• <strong>(b) Combined Angle:</strong> Initial angle = 30°. Additional opening = 60°. Total angle = 30° + 60° = <strong>90°</strong>. This forms an exact <strong>Right Angle</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): Angle increases",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): 30° + 60° = 90° (Right angle)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Complementary Angles • In-Text Practice",
        "q": "Two angles are complementary if their sum is 90°.<br>(a) Find the complement of 35°.<br>(b) Find the complement of 60°.<br>(c) Can two obtuse angles ever be complementary? Explain.",
        "ans": "<strong>Complementary Angle Calculations:</strong><br>\n• <strong>(a) Complement of 35°:</strong> 90° - 35° = <strong>55°</strong>.<br>\n• <strong>(b) Complement of 60°:</strong> 90° - 60° = <strong>30°</strong>.<br>\n• <strong>(c) Two Obtuse Angles:</strong> <strong>No</strong>. An obtuse angle is greater than 90°. The sum of two obtuse angles will always exceed 180°, so their sum can never be 90°.",
        "marks": 3,
        "rubric": [
          {
            "key": "Complement of 35° = 55°",
            "marks": "1.0 M"
          },
          {
            "key": "Complement of 60° = 30°",
            "marks": "1.0 M"
          },
          {
            "key": "Logical explanation for obtuse angles",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Supplementary Angles • Straight Line",
        "q": "Angles on a straight line add up to 180° (supplementary angles).<br>(a) If one angle is 115°, find the measure of the adjacent angle on the straight line.<br>(b) If two supplementary angles are equal, find the measure of each angle.",
        "ans": "<strong>Supplementary Calculations:</strong><br>\n• <strong>(a) Adjacent Angle:</strong> 180° - 115° = <strong>65°</strong>.<br>\n• <strong>(b) Two Equal Angles:</strong> Let each angle be $x$. Then $x + x = 180° \\rightarrow 2x = 180° \\rightarrow x = 180° ÷ 2 = \\mathbf{90°}$ (both are Right Angles).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 65°",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): 90° each",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Angles in Regular Polygons • Shape Analysis",
        "q": "(a) What is the measure of each interior angle in an equilateral triangle?<br>(b) What is the measure of each interior angle in a square?<br>(c) Are all angles in a regular hexagon acute or obtuse? Explain.",
        "ans": "<strong>Interior Angles of Polygons:</strong><br>\n• <strong>(a) Equilateral Triangle:</strong> Sum of 3 angles = 180°. Each angle = 180° ÷ 3 = <strong>60° (Acute)</strong>.<br>\n• <strong>(b) Square:</strong> Sum of 4 angles = 360°. Each angle = 360° ÷ 4 = <strong>90° (Right angle)</strong>.<br>\n• <strong>(c) Regular Hexagon:</strong> Each interior angle = <strong>120°</strong>. Since 120° > 90°, all angles in a regular hexagon are <strong>Obtuse Angles</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Equilateral triangle = 60°",
            "marks": "1.0 M"
          },
          {
            "key": "Square = 90°",
            "marks": "1.0 M"
          },
          {
            "key": "Hexagon = 120° (Obtuse)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Clock Problem • Minute Hand Rotation",
        "q": "Through how many degrees does the minute hand of a clock rotate in:<br>(a) 15 minutes<br>(b) 30 minutes<br>(c) 45 minutes<br>(d) 10 minutes",
        "ans": "<strong>Minute Hand Speed:</strong> 60 minutes = 360°, so 1 minute = 360° ÷ 60 = 6° per minute.<br>\n• <strong>(a) 15 Minutes:</strong> 15 × 6° = <strong>90° (1/4 turn)</strong>.<br>\n• <strong>(b) 30 Minutes:</strong> 30 × 6° = <strong>180° (1/2 turn)</strong>.<br>\n• <strong>(c) 45 Minutes:</strong> 45 × 6° = <strong>270° (3/4 turn)</strong>.<br>\n• <strong>(d) 10 Minutes:</strong> 10 × 6° = <strong>60° (1/6 turn)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Rate: 6° per minute",
            "marks": "1.0 M"
          },
          {
            "key": "15 min (90°), 30 min (180°)",
            "marks": "1.0 M"
          },
          {
            "key": "45 min (270°), 10 min (60°)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Angles in Open vs Closed Shapes",
        "q": "Explain why three straight line segments can only form a closed shape if they form 3 interior angles adding to 180°. Can you make a closed polygon with only 2 straight sticks? Explain.",
        "ans": "<strong>Polygon Properties:</strong><br>\n1. <strong>Triangle Closure:</strong> Three line segments meet at 3 vertices to enclose a 2D space. The sum of the 3 interior angles formed must strictly equal 180° for the triangle to close.<br>\n2. <strong>Two Sticks:</strong> <strong>No</strong>, it is impossible to create a closed polygon with only two straight sticks. Two line segments meeting at an angle leave an open mouth between their other endpoints; a minimum of 3 sides (a triangle) is mathematically required to enclose an area on a plane.",
        "marks": 3,
        "rubric": [
          {
            "key": "Triangle interior sum = 180°",
            "marks": "1.5 M"
          },
          {
            "key": "Cannot enclose space with 2 line segments (minimum 3 sides)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Degree Clock • Activity",
        "q": "In an activity, students create a circular 'Degree Clock' with markings at 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°, and 360°.<br>(a) How many equal sectors is the circle divided into?<br>(b) What is the angle between any two adjacent markings?",
        "ans": "<strong>Degree Clock Geometry:</strong><br>\n• <strong>(a) Number of Sectors:</strong> 360° ÷ 45° = <strong>8 equal sectors</strong>.<br>\n• <strong>(b) Angle between Markings:</strong> Each step from one mark to the next is exactly <strong>45°</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "8 equal sectors",
            "marks": "1.5 M"
          },
          {
            "key": "Angle = 45°",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Angles in Architectural Bridges",
        "q": "Why do railway steel bridges and construction cranes use triangular frameworks (trusses) with acute angles rather than rectangular frameworks? Give a mathematical reason.",
        "ans": "<strong>Geometric Rigidity of Triangles:</strong><br>\n• In a quadrilateral or rectangle, the 4 sides can deform or shift into a parallelogram under heavy load without changing the lengths of the sides because angles can change freely.<br>\n• In contrast, a <strong>triangle is a rigid shape</strong>: once the lengths of the 3 sides are fixed, the 3 angles cannot change unless a side bends or breaks.<br>\n• Therefore, triangular structures with strong acute angles distribute heavy loads safely and do not deform under stress.",
        "marks": 3,
        "rubric": [
          {
            "key": "Quadrilaterals deform easily under load",
            "marks": "1.5 M"
          },
          {
            "key": "Triangles have rigid, unchanging angles providing structural stability",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "HOTS • Angle Riddle",
        "q": "I am an angle. If you add 25° to me, I become a right angle. What angle am I? What type of angle am I?",
        "ans": "<strong>Working:</strong><br>\n1. Let the angle be $A$.<br>\n2. Condition: $A + 25° = 90°$ (Right angle).<br>\n3. $A = 90° - 25° = \\mathbf{65°}$.<br>\n4. Since 65° is less than 90°, it is an <strong>Acute Angle</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Equation: A + 25° = 90°",
            "marks": "1.5 M"
          },
          {
            "key": "A = 65° (Acute Angle)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Hour Hand Rotation Problem",
        "q": "Through how many degrees does the hour hand of a clock move between 2:00 PM and 5:00 PM?",
        "ans": "<strong>Hour Hand Movement:</strong><br>\n• Time elapsed = 5:00 - 2:00 = 3 hours.<br>\n• In 12 hours, the hour hand moves 360°, so in 1 hour it moves 360° ÷ 12 = 30°.<br>\n• In 3 hours: 3 × 30° = <strong>90° (a quarter turn / Right Angle)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Elapsed time = 3 hours",
            "marks": "1.0 M"
          },
          {
            "key": "Rate: 30° per hour",
            "marks": "1.0 M"
          },
          {
            "key": "Total rotation = 90°",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Angles in Paper Folding • Origami",
        "q": "Fold a square piece of paper along its diagonal corner to corner.<br>(a) What two shapes are formed?<br>(b) What are the angles of the triangles formed?",
        "ans": "<strong>Origami Geometry:</strong><br>\n• <strong>(a) Shapes Formed:</strong> Folding along the diagonal divides the square into <strong>two identical right-angled isosceles triangles</strong>.<br>\n• <strong>(b) Angles of the Triangles:</strong><br>\n- The original corner of the square remains a <strong>90° right angle</strong>.<br>\n- The diagonal bisects the two other 90° corners into two equal halves: 90° ÷ 2 = <strong>45° each</strong>.<br>\n- Therefore, the angles of each triangle are <strong>45°, 45°, and 90°</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Two right-angled isosceles triangles",
            "marks": "1.5 M"
          },
          {
            "key": "Angles: 45°, 45°, 90°",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Reflex Angles • Introduction",
        "q": "(a) What is a reflex angle?<br>(b) If the interior angle of a corner is 70°, what is the measure of the reflex angle on the exterior?<br>(c) What time on a clock shows an angle of 240° between the hands?",
        "ans": "<strong>Reflex Angles:</strong><br>\n• <strong>(a) Definition:</strong> An angle that is <strong>greater than 180° but less than 360°</strong> is called a reflex angle.<br>\n• <strong>(b) Exterior Reflex Angle:</strong> Complete circle = 360°. Reflex angle = 360° - 70° = <strong>290°</strong>.<br>\n• <strong>(c) Clock Hands:</strong> 240° = 8 hour divisions (8 × 30° = 240°). At <strong>8:00</strong>, the angle measured clockwise from the hour hand (at 8) to the minute hand (at 12) is 4 × 30° = 120°, and the major angle on the other side is 360° - 120° = <strong>240°</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition: between 180° and 360°",
            "marks": "1.0 M"
          },
          {
            "key": "Exterior reflex = 290°",
            "marks": "1.0 M"
          },
          {
            "key": "8:00 clock example",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "True or False with Geometric Reason",
        "q": "State True or False with reasoning:<br>(a) An angle measuring 90.5° is an acute angle.<br>(b) Two acute angles added together can sometimes form an obtuse angle.<br>(c) A straight line always represents an angle of 180°.",
        "ans": "<strong>Justifications:</strong><br>\n• <strong>(a) False:</strong> 90.5° is greater than 90°, so it is an <strong>Obtuse Angle</strong>, not acute.<br>\n• <strong>(b) True:</strong> For example, 50° + 60° = 110°. Since 110° > 90°, the sum of two acute angles can indeed be obtuse.<br>\n• <strong>(c) True:</strong> A straight angle formed by two opposite rays is defined as exactly <strong>180°</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): False with explanation",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): True with counter-example (e.g. 50+60=110)",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): True with 180° definition",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comprehensive Review • Chapter Mastery",
        "q": "A student stands on a circular turntable facing East. He rotates 45° clockwise, then 180° anticlockwise, and finally 90° clockwise. Which direction is he facing now? Show your angle calculations.",
        "ans": "<strong>Net Angle Calculation:</strong><br>\n1. Start direction = <strong>East (90° from North)</strong>.<br>\n2. Turn 1 (Clockwise): +45° → Position = South-East.<br>\n3. Turn 2 (Anticlockwise): -180° → Position = North-West.<br>\n4. Turn 3 (Clockwise): +90° → Position = North-East.<br>\n<strong>Mathematical Check:</strong><br>\nNet turn = +45° - 180° + 90° = -45° (i.e. 45° anticlockwise from East).<br>\n45° anticlockwise from East points directly to <strong>North-East</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Tracking individual turns (+45, -180, +90)",
            "marks": "1.5 M"
          },
          {
            "key": "Net result = 45° anticlockwise from East → North-East",
            "marks": "1.5 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Competency Question: Yoga Asana Angle Identification",
      "text": "During morning physical training, students perform various yoga postures: Trikonasana (Triangle pose), Bhujangasana (Cobra pose), and Dandasana (Staff pose).",
      "question": "Identify the angles formed by the body in each case:<br>(a) In Staff pose, what angle is made between the torso and legs?<br>(b) In Triangle pose, what kind of angles are made between legs and floor?<br>(c) In a deep backbend, what type of angle is formed?",
      "answer": "<div class=\"cbq-sol-label\">Suggested Model Solution:</div>\r\n          \r\n <div class=\"step\"><strong>(a) Staff Pose:</strong> Torso vertical, legs horizontal ⇒ <strong>Right Angle (90°)</strong>.</div>\r\n <div class=\"step\"><strong>(b) Triangle Pose:</strong> Sharp angles at feet ⇒ <strong>Acute Angles (&lt; 90°)</strong>.</div>\r\n <div class=\"step\"><strong>(c) Backbend:</strong> Opening greater than 90° ⇒ <strong>Obtuse Angle</strong>.",
      "rubric": "1M concept identification + 1M step execution + 1M conclusion"
    }
  },
  {
    "id": "mela4",
    "num": 4,
    "unit": "Chapter 4 • Arithmetic Operations & Real-life Financial Planning",
    "title": "We the Travellers – II",
    "subtitle": "हम यात्री – २ (यात्रा व्यय, होटल पैकेज एवं दैनिक बजट)",
    "concepts": [
      "Multi-digit addition and subtraction applied to travel logistics and ticket reservations.",
      "Comparing hotel packages: Flat rate vs Room-plus-meal split pricing.",
      "Taxi fare calculations with minimum distance billing criteria.",
      "Fuel economy, distance per litre, and total trip expenditure."
    ],
    "svg": "<svg viewBox=\"0 0 600 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"160\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Trip Expense Component Breakdown (Total Budget: ₹30,375)</text>\r\n        <g transform=\"translate(50, 45)\">\r\n          <rect x=\"0\" y=\"0\" width=\"304\" height=\"40\" fill=\"#4f46e5\" rx=\"4\"/>\r\n          <text x=\"152\" y=\"25\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Bus Transport: ₹18,450</text>\r\n          <rect x=\"306\" y=\"0\" width=\"163\" height=\"40\" fill=\"#059669\" rx=\"4\"/>\r\n          <text x=\"387\" y=\"25\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Food: ₹9,900</text>\r\n          <rect x=\"471\" y=\"0\" width=\"29\" height=\"40\" fill=\"#d97706\" rx=\"4\"/>\r\n        </g>\r\n        <g transform=\"translate(60, 110)\">\r\n          <rect x=\"0\" y=\"0\" width=\"12\" height=\"12\" fill=\"#4f46e5\" rx=\"2\"/>\r\n          <text x=\"20\" y=\"10\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"#334155\">Transport: ₹18,450</text>\r\n          <rect x=\"170\" y=\"0\" width=\"12\" height=\"12\" fill=\"#059669\" rx=\"2\"/>\r\n          <text x=\"190\" y=\"10\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"#334155\">Food &amp; Meals: ₹9,900</text>\r\n          <rect x=\"350\" y=\"0\" width=\"12\" height=\"12\" fill=\"#d97706\" rx=\"2\"/>\r\n          <text x=\"370\" y=\"10\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"#334155\">Entry Tickets: ₹2,025</text>\r\n        </g>\r\n        <text x=\"300\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">Per Student Share (45 students): ₹30,375 ÷ 45 = ₹675</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Travel Budget • Hotel Package Comparison",
        "q": "A hotel offers two package options for a 3-night stay for a family of 4:<br>• Package A: Flat rate of ₹2,800 per night including breakfast.<br>• Package B: Room rent of ₹2,200 per night plus ₹250 per person per day for breakfast.<br>(a) Calculate the total cost for Package A.<br>(b) Calculate the total cost for Package B.<br>(c) Which package is more economical, and by how much?",
        "ans": "<strong>Calculations (Duration = 3 nights, 4 persons):</strong><br>\n• <strong>(a) Package A Total:</strong> 3 nights × ₹2,800 = <strong>₹8,400</strong>.<br>\n• <strong>(b) Package B Total:</strong><br>\n- Room rent: 3 × ₹2,200 = ₹6,600.<br>\n- Breakfast cost: 4 persons × ₹250 × 3 days = ₹3,000.<br>\n- Total = ₹6,600 + ₹3,000 = <strong>₹9,600</strong>.<br>\n• <strong>(c) Comparison:</strong> Package A is cheaper. Difference = ₹9,600 - ₹8,400 = <strong>₹1,200</strong>. <strong>Package A saves ₹1,200</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Package A = ₹8,400",
            "marks": "1.0 M"
          },
          {
            "key": "Package B = ₹9,600",
            "marks": "1.0 M"
          },
          {
            "key": "Package A saves ₹1,200",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Excursion Expenses • Per-Student Share",
        "q": "A school excursion of 45 students incurs expenses:<br>• Bus rental: ₹14,500<br>• Entry tickets: ₹90 per student<br>• Packed meals: ₹150 per student<br>• Guide charges: ₹1,500<br>(a) Find the grand total expenditure for the trip.<br>(b) Calculate the contribution amount required from each student to cover all costs exactly.",
        "ans": "<strong>Expense Calculations (45 Students):</strong><br>\n• Bus rental = ₹14,500<br>\n• Entry tickets = 45 × ₹90 = ₹4,050<br>\n• Packed meals = 45 × ₹150 = ₹6,750<br>\n• Guide charges = ₹1,500<br>\n• <strong>(a) Grand Total:</strong> ₹14,500 + ₹4,050 + ₹6,750 + ₹1,500 = <strong>₹26,800</strong>.<br>\n• <strong>(b) Per Student Share:</strong> ₹26,800 ÷ 45 = ₹595.55 ≈ <strong>₹596 per student</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Itemized totals (Tickets ₹4,050, Meals ₹6,750)",
            "marks": "1.0 M"
          },
          {
            "key": "Grand total = ₹26,800",
            "marks": "1.0 M"
          },
          {
            "key": "Per student share = ₹596",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Fuel Consumption & Cost",
        "q": "A family car consumes 1 litre of petrol for every 15 km traveled. They plan a road trip of 1,080 km.<br>(a) How many litres of petrol are required for the round trip?<br>(b) If petrol costs ₹96 per litre, what is their total expenditure on fuel?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Petrol Needed:</strong> Total distance ÷ Mileage = 1,080 ÷ 15 = <strong>72 litres</strong>.<br>\n• <strong>(b) Fuel Cost:</strong> 72 litres × ₹96 = <strong>₹6,912</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Petrol needed = 72 L",
            "marks": "1.5 M"
          },
          {
            "key": "Total fuel cost = ₹6,912",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Bus vs Train Travel Cost",
        "q": "A tour group of 28 persons travels from Delhi to Agra (240 km).<br>• Option 1: AC Bus charter costs a flat ₹11,200.<br>• Option 2: Train tickets cost ₹385 per person.<br>(a) Calculate the cost for all 28 people traveling by train.<br>(b) Which option is more cost-effective and by how much?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Train Cost:</strong> 28 × ₹385 = <strong>₹10,780</strong>.<br>\n• <strong>(b) Comparison:</strong><br>\n- Bus = ₹11,200<br>\n- Train = ₹10,780<br>\n- Difference = ₹11,200 - ₹10,780 = <strong>₹420</strong>.<br>\n<strong>Traveling by train is more economical by ₹420</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Train cost = ₹10,780",
            "marks": "1.5 M"
          },
          {
            "key": "Train is cheaper by ₹420",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Unitary Method • Meal Charges",
        "q": "A highway restaurant charges ₹480 for 4 thalis.<br>(a) What is the cost of 1 thali?<br>(b) What will be the total bill for 9 thalis?<br>(c) How many thalis can be purchased for ₹1,200?",
        "ans": "<strong>Unitary Method Steps:</strong><br>\n• <strong>(a) Cost of 1 Thali:</strong> ₹480 ÷ 4 = <strong>₹120</strong>.<br>\n• <strong>(b) Cost of 9 Thalis:</strong> 9 × ₹120 = <strong>₹1,080</strong>.<br>\n• <strong>(c) Thalis for ₹1,200:</strong> ₹1,200 ÷ ₹120 = <strong>10 thalis</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cost of 1 thali = ₹120",
            "marks": "1.0 M"
          },
          {
            "key": "Cost of 9 thalis = ₹1,080",
            "marks": "1.0 M"
          },
          {
            "key": "10 thalis for ₹1,200",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Time-Speed-Distance • Multi-Stop Journey",
        "q": "A luxury bus leaves Jaipur at 6:00 AM. It travels at 60 km/h for 3 hours, stops for 45 minutes for breakfast, and then travels the remaining 140 km at 70 km/h.<br>(a) What is the total distance of the trip?<br>(b) What was the travel time spent driving?<br>(c) At what time does the bus reach its destination?",
        "ans": "<strong>Step-by-Step Schedule:</strong><br>\n• <strong>(a) Distance:</strong> First leg = 3 h × 60 km/h = 180 km. Second leg = 140 km. Total distance = 180 + 140 = <strong>320 km</strong>.<br>\n• <strong>(b) Driving Time:</strong> First leg = 3 hours. Second leg = 140 ÷ 70 = 2 hours. Total driving time = 3 + 2 = <strong>5 hours</strong>.<br>\n• <strong>(c) Arrival Time:</strong><br>\n- Total elapsed time = 5 hours driving + 45 min breakfast = 5 hours 45 minutes.<br>\n- 6:00 AM + 5 h 45 min = <strong>11:45 AM</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total distance = 320 km",
            "marks": "1.0 M"
          },
          {
            "key": "Driving time = 5 hours",
            "marks": "1.0 M"
          },
          {
            "key": "Arrival time = 11:45 AM",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Group Travel Billing • GST Calculation",
        "q": "A travel agency bills ₹35,000 for a houseboat package in Kashmir. A government Goods and Services Tax (GST) of 5% is added to the bill.<br>(a) Find the GST amount in Rupees.<br>(b) What is the final total payable amount?",
        "ans": "<strong>Percentage Calculation:</strong><br>\n• <strong>(a) GST Amount:</strong> 5% of ₹35,000 = (5 ÷ 100) × 35,000 = 5 × 350 = <strong>₹1,750</strong>.<br>\n• <strong>(b) Final Total:</strong> ₹35,000 + ₹1,750 = <strong>₹36,750</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "GST = ₹1,750",
            "marks": "1.5 M"
          },
          {
            "key": "Final bill = ₹36,750",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Souvenir Shopping • Currency Exchange",
        "q": "A foreign tourist changes 150 US Dollars at an exchange counter. The exchange rate is 1 USD = ₹82.<br>(a) How many Indian Rupees does the tourist receive?<br>(b) He buys 3 wooden handicrafts costing ₹2,400 each and 2 silk shawls costing ₹1,800 each. How much money does he spend?<br>(c) How many Indian Rupees does he have left?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Rupees Received:</strong> 150 × ₹82 = <strong>₹12,300</strong>.<br>\n• <strong>(b) Total Spent:</strong><br>\n- 3 handicrafts: 3 × ₹2,400 = ₹7,200.<br>\n- 2 shawls: 2 × ₹1,800 = ₹3,600.<br>\n- Total spent = ₹7,200 + ₹3,600 = <strong>₹10,800</strong>.<br>\n• <strong>(c) Balance:</strong> ₹12,300 - ₹10,800 = <strong>₹1,500</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Converted rupees = ₹12,300",
            "marks": "1.0 M"
          },
          {
            "key": "Total expenditure = ₹10,800",
            "marks": "1.0 M"
          },
          {
            "key": "Balance = ₹1,500",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Luggage Allowance • Excess Baggage",
        "q": "An airline allows each passenger 15 kg of free check-in luggage. Extra baggage is charged at ₹350 per kg.<br>(a) Mr. Verma's suitcase weighs 22 kg. How many kg is he overweight?<br>(b) How much extra baggage fee must he pay?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Excess Weight:</strong> 22 kg - 15 kg = <strong>7 kg excess</strong>.<br>\n• <strong>(b) Excess Fee:</strong> 7 kg × ₹350 = <strong>₹2,450</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Excess weight = 7 kg",
            "marks": "1.5 M"
          },
          {
            "key": "Extra fee = ₹2,450",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Multiplication by Multiples of 10",
        "q": "Calculate quickly using mental math rules:<br>(a) 45 × 200<br>(b) 60 × 700<br>(c) 1,500 × 40",
        "ans": "<strong>Mental Calculations:</strong><br>\n• <strong>(a) 45 × 200:</strong> 45 × 2 = 90, append two zeros → <strong>9,000</strong>.<br>\n• <strong>(b) 60 × 700:</strong> 6 × 7 = 42, append three zeros → <strong>42,000</strong>.<br>\n• <strong>(c) 1,500 × 40:</strong> 15 × 4 = 60, append three zeros → <strong>60,000</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 9,000",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 42,000",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 60,000",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Ropeway Cable Car Fare • Adult & Child",
        "q": "A mountain ropeway charges ₹220 for an adult round trip and ₹140 for a child under 12 years.<br>(a) What is the total ropeway cost for a family of 3 adults and 2 children?<br>(b) If they pay with a ₹2,000 note, how much change is returned?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Total Cost:</strong><br>\n- Adults: 3 × ₹220 = ₹660.<br>\n- Children: 2 × ₹140 = ₹280.<br>\n- Total = ₹660 + ₹280 = <strong>₹940</strong>.<br>\n• <strong>(b) Change:</strong> ₹2,000 - ₹940 = <strong>₹1,060</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Adults ₹660, Children ₹280",
            "marks": "1.0 M"
          },
          {
            "key": "Total ₹940",
            "marks": "1.0 M"
          },
          {
            "key": "Change ₹1,060",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Estimation of Travel Expenses",
        "q": "Estimate the total cost by rounding each item to the nearest hundred:<br>• Petrol: ₹3,240<br>• Food: ₹1,890<br>• Toll tax: ₹460<br>• Sightseeing tickets: ₹1,120",
        "ans": "<strong>Rounding to Nearest 100:</strong><br>\n• Petrol: ₹3,240 rounds to <strong>₹3,200</strong>.<br>\n• Food: ₹1,890 rounds to <strong>₹1,900</strong>.<br>\n• Toll tax: ₹460 rounds to <strong>₹500</strong>.<br>\n• Sightseeing tickets: ₹1,120 rounds to <strong>₹1,100</strong>.<br>\n• <strong>Estimated Total:</strong> ₹3,200 + ₹1,900 + ₹500 + ₹1,100 = <strong>₹6,700</strong>.<br>\n<em>(Exact sum = ₹6,710; difference is only ₹10).</em>",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct individual rounding",
            "marks": "1.5 M"
          },
          {
            "key": "Estimated sum = ₹6,700",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Speed & Time Variation • Traffic Delay",
        "q": "Normally, a taxi takes 2 hours to travel 120 km from the airport to the city centre. Due to heavy rain and traffic, the speed drops to 40 km/h.<br>(a) What was the normal speed of the taxi?<br>(b) How long does the journey take in the rain?<br>(c) How much extra time was lost in traffic?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Normal Speed:</strong> 120 km ÷ 2 h = <strong>60 km/h</strong>.<br>\n• <strong>(b) Rainy Journey Time:</strong> 120 km ÷ 40 km/h = <strong>3 hours</strong>.<br>\n• <strong>(c) Extra Time Lost:</strong> 3 hours - 2 hours = <strong>1 hour (60 minutes)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Normal speed = 60 km/h",
            "marks": "1.0 M"
          },
          {
            "key": "Rainy time = 3 hours",
            "marks": "1.0 M"
          },
          {
            "key": "Time lost = 1 hour",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Multi-Family Travel Split",
        "q": "Three families rent a vacation villa for 4 days at ₹6,500 per day. They share the accommodation cost equally.<br>(a) Find the total rent of the villa for 4 days.<br>(b) What is the share of each family?<br>(c) If Family 1 checks out one day early (staying 3 days), how should the total bill be divided fairly among the 3 families based on room-days?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Total Rent:</strong> 4 days × ₹6,500 = <strong>₹26,000</strong>.<br>\n• <strong>(b) Equal Share (All 4 days):</strong> ₹26,000 ÷ 3 = <strong>₹8,666.67 per family</strong>.<br>\n• <strong>(c) Fair Room-Days Division:</strong><br>\n- Total family-days = 3 + 4 + 4 = 11 family-days.<br>\n- Cost per family-day = ₹26,000 ÷ 11 = ₹2,363.64.<br>\n- Family 1 (3 days) pays: 3 × ₹2,363.64 = <strong>₹7,091</strong>.<br>\n- Family 2 & 3 (4 days each) pay: 4 × ₹2,363.64 = <strong>₹9,454.50 each</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total rent = ₹26,000",
            "marks": "1.0 M"
          },
          {
            "key": "Equal share = ₹8,667",
            "marks": "1.0 M"
          },
          {
            "key": "Weighted room-days split",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Train Berth Allotment • Logic",
        "q": "In an Indian Railways sleeper coach, berths are numbered 1 to 72. Lower berths are 1, 4, 9, 12, 17, 20... (numbers leaving remainders 1 or 4 when divided by 8).<br>(a) What type of berth is Berth 25?<br>(b) What type of berth is Berth 32?",
        "ans": "<strong>Berth Pattern in 8-berth Compartment:</strong><br>\n• 1: Lower, 2: Middle, 3: Upper, 4: Lower, 5: Middle, 6: Upper, 7: Side Lower, 8: Side Upper.<br>\n• <strong>(a) Berth 25:</strong> 25 ÷ 8 gives remainder 1. Remainder 1 corresponds to a <strong>Lower Berth</strong>.<br>\n• <strong>(b) Berth 32:</strong> 32 ÷ 8 gives remainder 0 (exact multiple of 8). This corresponds to a <strong>Side Upper Berth (SU)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Berth pattern rule stated (modulo 8)",
            "marks": "1.5 M"
          },
          {
            "key": "Berth 25 is Lower; Berth 32 is Side Upper",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Fuel Tank Capacity • Kilometer Range",
        "q": "An SUV has a 65-litre fuel tank. Its highway mileage is 14 km/litre.<br>(a) What is the maximum driving range of the vehicle on a full tank?<br>(b) The driver sees a warning that 12 litres of petrol remain. Can the SUV reach a petrol station 180 km away without refueling?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Maximum Range:</strong> 65 L × 14 km/L = <strong>910 km</strong>.<br>\n• <strong>(b) Remaining Range:</strong> 12 L × 14 km/L = <strong>168 km</strong>.<br>\n- Since 168 km < 180 km, <strong>No, the SUV cannot reach the station 180 km away without refueling</strong> (it will run out of fuel 12 km before reaching).",
        "marks": 3,
        "rubric": [
          {
            "key": "Max range = 910 km",
            "marks": "1.5 M"
          },
          {
            "key": "Remaining range = 168 km with negative conclusion",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Group Dining Bill • Split Evenly",
        "q": "Six friends dine at a restaurant during their trip. The food bill is ₹2,850 and service charge is ₹150.<br>(a) What is the total bill?<br>(b) If they split the cost equally among the 6 friends, how much does each person contribute?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Total Bill:</strong> ₹2,850 + ₹150 = <strong>₹3,000</strong>.<br>\n• <strong>(b) Individual Share:</strong> ₹3,000 ÷ 6 = <strong>₹500 per person</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total bill = ₹3,000",
            "marks": "1.5 M"
          },
          {
            "key": "Per person = ₹500",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Sightseeing Boat Hire • Hourly Rate",
        "q": "A pedal boat costs ₹180 for 30 minutes, while a motor boat costs ₹450 for 20 minutes.<br>(a) Find the cost per minute for the pedal boat.<br>(b) Find the cost per minute for the motor boat.<br>(c) Which boat has a higher per-minute rate and by how much?",
        "ans": "<strong>Rate Calculations:</strong><br>\n• <strong>(a) Pedal Boat Rate:</strong> ₹180 ÷ 30 min = <strong>₹6 per minute</strong>.<br>\n• <strong>(b) Motor Boat Rate:</strong> ₹450 ÷ 20 min = <strong>₹22.50 per minute</strong>.<br>\n• <strong>(c) Difference:</strong> ₹22.50 - ₹6.00 = <strong>₹16.50 per minute higher for the motor boat</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Pedal boat = ₹6/min",
            "marks": "1.0 M"
          },
          {
            "key": "Motor boat = ₹22.50/min",
            "marks": "1.0 M"
          },
          {
            "key": "Difference = ₹16.50/min",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "HOTS • Travel Riddle",
        "q": "A train leaves City A and City B at the same time, traveling toward each other along parallel tracks. Train 1 travels at 60 km/h and Train 2 travels at 80 km/h. If the cities are 420 km apart, after how many hours will the trains meet?",
        "ans": "<strong>Relative Speed Concept:</strong><br>\n1. Since the trains are moving toward each other, their combined speed is: 60 km/h + 80 km/h = <strong>140 km/h</strong>.<br>\n2. Total distance to cover = 420 km.<br>\n3. Time taken to meet = Distance ÷ Relative Speed = 420 ÷ 140 = <strong>3 hours</strong>.<br>\n4. <strong>Verification:</strong> In 3 hours, Train 1 covers 3 × 60 = 180 km; Train 2 covers 3 × 80 = 240 km. Total = 180 + 240 = 420 km. Verified!",
        "marks": 3,
        "rubric": [
          {
            "key": "Combined speed = 140 km/h",
            "marks": "1.5 M"
          },
          {
            "key": "Meeting time = 3 hours with verification",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Airfare Surge Pricing • Mental Math",
        "q": "A base air ticket is ₹3,500. During festival season, the airline applies a surge increase of 40%.<br>(a) What is the surge price increase in Rupees?<br>(b) What is the new ticket price?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Surge Amount:</strong> 40% of ₹3,500 = (40 ÷ 100) × 3,500 = 40 × 35 = <strong>₹1,400</strong>.<br>\n• <strong>(b) New Price:</strong> ₹3,500 + ₹1,400 = <strong>₹4,900</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Surge increase = ₹1,400",
            "marks": "1.5 M"
          },
          {
            "key": "New price = ₹4,900",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Bus Ticket Booking Agent Commission",
        "q": "A booking agent earns a commission of ₹45 on every bus ticket booked. In one week, he books 160 tickets.<br>(a) Find his total earnings for the week.<br>(b) If his weekly target was ₹8,000, by how much did he fall short or exceed his target?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Total Earnings:</strong> 160 × ₹45 = <strong>₹7,200</strong>.<br>\n• <strong>(b) Target Difference:</strong> ₹8,000 - ₹7,200 = <strong>₹800 short of target</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Earnings = ₹7,200",
            "marks": "1.5 M"
          },
          {
            "key": "Short by ₹800",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Multi-Day Mileage Log Analysis",
        "q": "A touring taxi records its daily kilometres:<br>Day 1: 345 km, Day 2: 412 km, Day 3: 288 km, Day 4: 355 km.<br>(a) Find the total distance traveled over the 4 days.<br>(b) Find the average daily distance traveled.",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Total Distance:</strong> 345 + 412 + 288 + 355 = <strong>1,400 km</strong>.<br>\n• <strong>(b) Average Daily Distance:</strong> Total distance ÷ 4 days = 1,400 ÷ 4 = <strong>350 km per day</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total = 1,400 km",
            "marks": "1.5 M"
          },
          {
            "key": "Average = 350 km/day",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Currency Denominations • Cash Settlement",
        "q": "To settle a hotel bill of ₹7,850, a traveler gives four ₹2,000 notes.<br>(a) What is the total cash tendered?<br>(b) How much change should the cashier return?<br>(c) What is the minimum number of currency notes (using ₹500, ₹100, and ₹50 notes) that can make up this change?",
        "ans": "<strong>Cash Calculations:</strong><br>\n• <strong>(a) Cash Tendered:</strong> 4 × ₹2,000 = <strong>₹8,000</strong>.<br>\n• <strong>(b) Change:</strong> ₹8,000 - ₹7,850 = <strong>₹150</strong>.<br>\n• <strong>(c) Minimum Notes for ₹150:</strong> One ₹100 note + One ₹50 note = <strong>2 notes</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cash tendered = ₹8,000",
            "marks": "1.0 M"
          },
          {
            "key": "Change = ₹150",
            "marks": "1.0 M"
          },
          {
            "key": "Minimum notes = 2 (₹100 + ₹50)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comprehensive Travel Review",
        "q": "A family sets aside a vacation budget of ₹50,000. Their actual expenses are: Travel ₹18,600, Hotel ₹16,400, Food ₹8,500, Shopping ₹4,750.<br>(a) What is the total money spent?<br>(b) Did they stay within their budget? How much money remains or by how much did they exceed?",
        "ans": "<strong>Financial Review:</strong><br>\n• <strong>(a) Total Expenses:</strong> ₹18,600 + ₹16,400 + ₹8,500 + ₹4,750 = <strong>₹48,250</strong>.<br>\n• <strong>(b) Budget Comparison:</strong> Budget = ₹50,000. Difference = ₹50,000 - ₹48,250 = <strong>₹1,750</strong>.<br>\n<strong>Yes, they stayed within budget, saving ₹1,750</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total expenses = ₹48,250",
            "marks": "1.5 M"
          },
          {
            "key": "Stayed within budget with ₹1,750 left",
            "marks": "1.5 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Competency Question: Taxi Billing with Minimum Distance Threshold",
      "text": "A taxi operator charges a flat hire of ₹2,500 per day covering up to 250 km. Any extra distance above 250 km in a day is billed at ₹12 per km. On a 3-day tour, the odometer readings showed: Day 1: 240 km; Day 2: 290 km; Day 3: 275 km.",
      "question": "Calculate the total billing for each of the 3 days and the overall bill for the trip.",
      "answer": "<div class=\"cbq-sol-label\">Suggested Model Solution:</div>\r\n          \r\n <div class=\"step\"><strong>Day 1 (240 km):</strong> &lt; 250 km ⇒ Flat rate = <strong>₹2,500</strong>.</div>\r\n <div class=\"step\"><strong>Day 2 (290 km):</strong> Extra = 40 km ⇒ ₹2,500 + (40 × 12) = <strong>₹2,980</strong>.</div>\r\n <div class=\"step\"><strong>Day 3 (275 km):</strong> Extra = 25 km ⇒ ₹2,500 + (25 × 12) = <strong>₹2,800</strong>.</div>\r\n <div class=\"step\"><strong>Grand Total:</strong> 2,500 + 2,980 + 2,800 = <strong>₹8,280</strong>.",
      "rubric": "1M concept identification + 1M step execution + 1M conclusion"
    }
  },
  {
    "id": "mela5",
    "num": 5,
    "unit": "Chapter 5 • Map Reading, Scale & Metric Measurements",
    "title": "Far and Near",
    "subtitle": "दूर और पास (मानचित्र पैमाना, दूरियाँ एवं दिशा ज्ञान)",
    "concepts": [
      "Map Scale: A ratio relating distance on a drawing/map to actual ground distance (e.g., 1 cm = 200 m).",
      "Converting map measurements: Actual Distance = Map Distance in cm × Scale Value.",
      "Metric length conversions: 1 km = 1,000 m; 1 m = 100 cm.",
      "Shortest straight path (aerial distance) vs route distance along road turns."
    ],
    "svg": "<svg viewBox=\"0 0 600 170\" width=\"100%\" height=\"170\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"170\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Town Route Map &amp; Map Scale Ratio (Scale: 1 cm = 200 m)</text>\r\n        <g transform=\"translate(60, 45)\">\r\n          <circle cx=\"30\" cy=\"50\" r=\"14\" fill=\"#3b82f6\"/>\r\n          <text x=\"30\" y=\"55\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">S</text>\r\n          <text x=\"30\" y=\"78\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">School</text>\r\n          <line x1=\"44\" y1=\"50\" x2=\"196\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"4\" stroke-dasharray=\"6 3\"/>\r\n          <text x=\"120\" y=\"42\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#2563eb\" text-anchor=\"middle\">4 cm (800 m)</text>\r\n          <circle cx=\"210\" cy=\"50\" r=\"14\" fill=\"#10b981\"/>\r\n          <text x=\"210\" y=\"55\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">M</text>\r\n          <text x=\"210\" y=\"78\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Market</text>\r\n          <line x1=\"210\" y1=\"36\" x2=\"210\" y2=\"-10\" stroke=\"#94a3b8\" stroke-width=\"4\" stroke-dasharray=\"6 3\"/>\r\n          <line x1=\"210\" y1=\"-10\" x2=\"380\" y2=\"-10\" stroke=\"#94a3b8\" stroke-width=\"4\" stroke-dasharray=\"6 3\"/>\r\n          <text x=\"295\" y=\"-18\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#059669\" text-anchor=\"middle\">3.5 cm (700 m)</text>\r\n          <circle cx=\"394\" cy=\"-10\" r=\"14\" fill=\"#ef4444\"/>\r\n          <text x=\"394\" y=\"-5\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">H</text>\r\n          <text x=\"394\" y=\"18\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Hospital</text>\r\n        </g>\r\n        <g transform=\"translate(520, 75)\">\r\n          <line x1=\"0\" y1=\"-30\" x2=\"0\" y2=\"30\" stroke=\"#0f172a\" stroke-width=\"2\"/>\r\n          <line x1=\"-30\" y1=\"0\" x2=\"30\" y2=\"0\" stroke=\"#0f172a\" stroke-width=\"2\"/>\r\n          <polygon points=\"0,-32 -5,-20 5,-20\" fill=\"#dc2626\"/>\r\n          <text x=\"0\" y=\"-36\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">N</text>\r\n          <text x=\"0\" y=\"44\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">S</text>\r\n          <text x=\"38\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">E</text>\r\n          <text x=\"-38\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">W</text>\r\n        </g>\r\n        <text x=\"300\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"#475569\" text-anchor=\"middle\">Scale: 1 cm on Map = 200 metres on Ground | Ground Distance = Map Distance (cm) × 200 m</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Scale Conversion • Map to Ground",
        "q": "On a city tourist map, the scale is given as: <strong>1 cm on map = 250 metres on ground</strong>.<br>(a) If the distance between the Museum and the Zoo on the map is 6 cm, find the actual distance on the ground in metres and kilometres.<br>(b) If two temples are actually 2,000 metres apart, how many centimetres apart will they appear on the map?",
        "ans": "<strong>Scale Conversions (Scale: 1 cm = 250 m):</strong><br>\n• <strong>(a) Map Distance = 6 cm:</strong><br>\n- Actual distance = 6 × 250 m = <strong>1,500 metres</strong>.<br>\n- In kilometres = 1,500 ÷ 1,000 = <strong>1.5 km</strong>.<br>\n• <strong>(b) Actual Distance = 2,000 m:</strong><br>\n- Map distance = 2,000 ÷ 250 = <strong>8 cm on the map</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Ground distance = 1,500 m = 1.5 km",
            "marks": "1.5 M"
          },
          {
            "key": "Map distance = 8 cm",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Multi-Leg Journey on Map Scale",
        "q": "Rahul travels from home to school. On his neighbourhood map (scale 1 cm = 100 m):<br>• House to Bus stop is 3.5 cm.<br>• Bus stop to School is 8.5 cm.<br>(a) Find the total map distance.<br>(b) Calculate the total real walking distance in metres.<br>(c) Express the total distance in kilometres.",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Total Map Distance:</strong> 3.5 cm + 8.5 cm = <strong>12 cm</strong>.<br>\n• <strong>(b) Real Ground Distance:</strong> 12 cm × 100 m = <strong>1,200 metres</strong>.<br>\n• <strong>(c) In Kilometres:</strong> 1,200 ÷ 1,000 = <strong>1.2 km</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Map distance = 12 cm",
            "marks": "1.0 M"
          },
          {
            "key": "Ground distance = 1,200 m",
            "marks": "1.0 M"
          },
          {
            "key": "In km = 1.2 km",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "State Highway Map • Large Scale",
        "q": "On a state highway map with a scale of <strong>1 cm = 60 km</strong>, City P and City Q are 7.5 cm apart.<br>(a) What is the actual distance between the two cities?<br>(b) If an express train covers this distance in 5 hours, what is its average speed?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Actual Distance:</strong> 7.5 cm × 60 km = <strong>450 km</strong>.<br>\n• <strong>(b) Average Speed:</strong> Speed = Distance ÷ Time = 450 km ÷ 5 h = <strong>90 km/h</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Distance = 450 km",
            "marks": "1.5 M"
          },
          {
            "key": "Speed = 90 km/h",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Compass Directions & Navigation",
        "q": "Look at the standard compass rose (North at top):<br>(a) What direction is directly opposite to North-West?<br>(b) If you walk 4 km South and then 3 km East, in which general direction are you from your starting point?<br>(c) What is the angle between East and South?",
        "ans": "<strong>Compass Directions:</strong><br>\n• <strong>(a) Opposite to North-West:</strong> Directly opposite (180°) is <strong>South-East</strong>.<br>\n• <strong>(b) Position:</strong> Moving South then East places you in the <strong>South-East</strong> direction from the starting point.<br>\n• <strong>(c) Angle East to South:</strong> East is 90° and South is 180°, so the angle is 180° - 90° = <strong>90° (Right angle)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): South-East",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): South-East",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 90° Right angle",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Grid Coordinate Navigation",
        "q": "A school campus grid map has columns labeled A to F and rows 1 to 6. Each grid square is 50 m × 50 m.<br>• Library is at (B, 2)<br>• Canteen is at (E, 2)<br>(a) How many grid units apart are the Library and Canteen?<br>(b) What is the real walking distance along the corridor between them?",
        "ans": "<strong>Grid Calculations:</strong><br>\n• <strong>(a) Grid Units:</strong> Both are in Row 2. Difference in columns from B to E: C, D, E = <strong>3 grid units</strong>.<br>\n• <strong>(b) Ground Distance:</strong> 3 grid units × 50 m = <strong>150 metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Grid units = 3",
            "marks": "1.5 M"
          },
          {
            "key": "Real distance = 150 m",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Perspective Views • Aerial vs Side View",
        "q": "Explain how an aerial view (top view) of a town differs from a side view. Why are geographical maps always drawn from the top view?",
        "ans": "<strong>Perspective Comparison:</strong><br>\n1. <strong>Top View (Aerial View):</strong> Shows objects as viewed from directly overhead. Heights of buildings cannot be seen; only flat boundaries, roofs, streets, and footprints are visible.<br>\n2. <strong>Side View:</strong> Shows vertical height and facade of structures, but objects in front hide objects behind them.<br>\n3. <strong>Why Maps Use Top View:</strong> A top view allows accurate 2D geometric scaling, uninterrupted representation of every road, plot, and landmark without foreground objects blocking background buildings.",
        "marks": 3,
        "rubric": [
          {
            "key": "Top view shows footprint without vertical blocking",
            "marks": "1.5 M"
          },
          {
            "key": "Maps require uniform 2D coordinate scaling without obstruction",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Curved Paths • Thread Measurement",
        "q": "How can you measure the length of a winding, curved river shown on a map using a piece of cotton thread and a ruler?",
        "ans": "<strong>Thread Measurement Technique:</strong><br>\n1. Take a piece of flexible cotton thread and tie a knot at one end.<br>\n2. Place the knot at the starting point of the river on the map.<br>\n3. Carefully trace the thread along all bends, curves, and meanders of the river until reaching the endpoint.<br>\n4. Mark the endpoint on the thread with a pen or pinch it with fingers.<br>\n5. Stretch the thread straight along a calibrated centimetre ruler to measure its length.<br>\n6. Multiply the thread length in centimetres by the map scale factor to find the real ground length of the river.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct procedure tracing bends with flexible thread",
            "marks": "1.5 M"
          },
          {
            "key": "Measuring straight thread on ruler & applying scale factor",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Shortest Path • Route Planning",
        "q": "On a road map, there are two routes from Town A to Town B:<br>• Route 1 (Highway): 14 cm on map.<br>• Route 2 (Bypass): 11 cm on map.<br>The map scale is 1 cm = 15 km.<br>(a) Find the actual distance of both routes.<br>(b) How many kilometres shorter is Route 2?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Real Distances:</strong><br>\n- Route 1: 14 × 15 km = <strong>210 km</strong>.<br>\n- Route 2: 11 × 15 km = <strong>165 km</strong>.<br>\n• <strong>(b) Difference:</strong> 210 km - 165 km = <strong>45 km shorter</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Route 1 = 210 km; Route 2 = 165 km",
            "marks": "2.0 M"
          },
          {
            "key": "Difference = 45 km",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Map Area Scale • Square Grid",
        "q": "A botanical garden occupies a square region of 4 cm × 4 cm on a map. The map scale is 1 cm = 50 metres.<br>(a) What are the real length and width of the garden?<br>(b) Find the actual ground area of the garden in square metres.",
        "ans": "<strong>Area Scaling Calculations:</strong><br>\n• <strong>(a) Real Dimensions:</strong><br>\n- Length = 4 cm × 50 m = <strong>200 metres</strong>.<br>\n- Width = 4 cm × 50 m = <strong>200 metres</strong>.<br>\n• <strong>(b) Ground Area:</strong> Side × Side = 200 m × 200 m = <strong>40,000 sq m</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Dimensions: 200 m × 200 m",
            "marks": "1.5 M"
          },
          {
            "key": "Area = 40,000 sq m",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Floor Plan Interpretation",
        "q": "A house floor plan has scale 1 cm = 1 metre. The living room measures 6 cm by 4.5 cm on the blueprint.<br>(a) What are the actual dimensions of the living room?<br>(b) What is its floor area in square metres?<br>(c) If flooring costs ₹120 per sq m, find the total cost of tiling the room.",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Dimensions:</strong> Length = 6 m, Breadth = <strong>4.5 m</strong>.<br>\n• <strong>(b) Floor Area:</strong> 6 m × 4.5 m = <strong>27 sq m</strong>.<br>\n• <strong>(c) Tiling Cost:</strong> 27 sq m × ₹120 = <strong>₹3,240</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Dimensions: 6 m by 4.5 m",
            "marks": "1.0 M"
          },
          {
            "key": "Area = 27 sq m",
            "marks": "1.0 M"
          },
          {
            "key": "Cost = ₹3,240",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Map Enlargement & Reduction",
        "q": "A square park has side 2 cm on Map 1 (scale 1 cm = 100 m). If the same park is redrawn on Map 2 with scale 1 cm = 50 m:<br>(a) What will be the side length of the park on Map 2?<br>(b) How many times larger will the area of the drawing appear on Map 2?",
        "ans": "<strong>Scale Analysis:</strong><br>\n• Real side of park = 2 cm × 100 m = 200 metres.<br>\n• <strong>(a) Side on Map 2:</strong> 200 m ÷ 50 m = <strong>4 cm</strong>.<br>\n• <strong>(b) Area Comparison on Paper:</strong><br>\n- Map 1 area = 2 cm × 2 cm = 4 cm².<br>\n- Map 2 area = 4 cm × 4 cm = 16 cm².<br>\n- Ratio = 16 ÷ 4 = <strong>4 times larger</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Side on Map 2 = 4 cm",
            "marks": "1.5 M"
          },
          {
            "key": "Area is 4 times larger on paper",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "India Map • Border State Directions",
        "q": "Refer to an outline map of India:<br>(a) In which direction from New Delhi is Kerala located?<br>(b) In which direction from New Delhi is Assam located?<br>(c) Which sea lies to the West of India?",
        "ans": "<strong>Geographical Directions:</strong><br>\n• <strong>(a) Kerala from Delhi:</strong> Kerala lies directly towards the <strong>South</strong>.<br>\n• <strong>(b) Assam from Delhi:</strong> Assam lies towards the <strong>East</strong> (North-East).<br>\n• <strong>(c) Sea to the West:</strong> The <strong>Arabian Sea</strong> lies to the West of the Indian peninsula.",
        "marks": 3,
        "rubric": [
          {
            "key": "Kerala: South",
            "marks": "1.0 M"
          },
          {
            "key": "Assam: East / North-East",
            "marks": "1.0 M"
          },
          {
            "key": "Arabian Sea",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Speed-Distance-Scale Problem",
        "q": "A cyclist travels along a straight highway at 15 km/h. On his roadmap, the highway has a scale of 1 cm = 5 km.<br>(a) How many kilometres does he cycle in 2 hours?<br>(b) How many centimetres of map distance does his 2-hour ride represent?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Distance Covered:</strong> 15 km/h × 2 h = <strong>30 km</strong>.<br>\n• <strong>(b) Map Distance:</strong> 30 km ÷ 5 km/cm = <strong>6 cm on the map</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Distance = 30 km",
            "marks": "1.5 M"
          },
          {
            "key": "Map distance = 6 cm",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Perimeter on a Grid Map",
        "q": "A jogging track on a park grid map follows the boundary: 6 grid units North, 8 grid units East, 6 grid units South, and 8 grid units West.<br>(a) What shape is the jogging track?<br>(b) If 1 grid unit = 25 metres, find the total perimeter of the track in metres.",
        "ans": "<strong>Geometry & Scale:</strong><br>\n• <strong>(a) Shape:</strong> Opposite sides are equal (6 and 8 units) and meet at right angles → <strong>Rectangle</strong>.<br>\n• <strong>(b) Perimeter:</strong><br>\n- Total grid units = 6 + 8 + 6 + 8 = 28 units.<br>\n- Real perimeter = 28 × 25 m = <strong>700 metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Shape = Rectangle",
            "marks": "1.0 M"
          },
          {
            "key": "Total units = 28",
            "marks": "1.0 M"
          },
          {
            "key": "Perimeter = 700 metres",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Reading a Legend / Key on a Map",
        "q": "What is a 'Legend' or 'Key' on a geographical map? List three common symbols typically used on school or city maps.",
        "ans": "<strong>Map Legend:</strong><br>\n1. <strong>Definition:</strong> A map legend (or key) is an explanatory box that explains the meaning of various colours, signs, and symbols used on the map.<br>\n2. <strong>Common Symbols:</strong><br>\n• <strong>Blue lines/areas:</strong> Rivers, canals, or water bodies.<br>\n• <strong>Black parallel lines with cross-ties:</strong> Railway tracks.<br>\n• <strong>Red cross (+):</strong> Hospital or clinic.<br>\n• <strong>Small flag or building:</strong> School.",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear definition of map legend",
            "marks": "1.5 M"
          },
          {
            "key": "Three accurate symbol examples",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Compass Angles • Half Cardinal Directions",
        "q": "Between North and East lies North-East.<br>(a) What angle does North-East make with North?<br>(b) What angle does North-East make with East?<br>(c) What is the angle between North-East and South-West?",
        "ans": "<strong>Angle Calculations:</strong><br>\n• <strong>(a) North to North-East:</strong> 90° ÷ 2 = <strong>45°</strong>.<br>\n• <strong>(b) North-East to East:</strong> 90° ÷ 2 = <strong>45°</strong>.<br>\n• <strong>(c) North-East to South-West:</strong> They are directly opposite directions along a straight line = <strong>180° (Straight angle)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 45°",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 45°",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 180°",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "River Bridge Crossing • Scale Calculation",
        "q": "A major river bridge measures 2.4 cm on a satellite map (scale 1 cm = 500 m).<br>(a) What is the actual length of the bridge in metres?<br>(b) Express this length in kilometres.<br>(c) A car crosses this bridge at 60 km/h. How many seconds does it take to cross?",
        "ans": "<strong>Step-by-Step Working:</strong><br>\n• <strong>(a) Actual Length:</strong> 2.4 cm × 500 m = <strong>1,200 metres</strong>.<br>\n• <strong>(b) In Kilometres:</strong> 1,200 ÷ 1,000 = <strong>1.2 km</strong>.<br>\n• <strong>(c) Crossing Time:</strong><br>\n- Speed = 60 km/h = (60 × 1,000) ÷ 3,600 = 16.67 m/s.<br>\n- Time = Distance ÷ Speed = 1,200 m ÷ 16.67 m/s = <strong>72 seconds (1 minute 12 seconds)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Length = 1,200 m = 1.2 km",
            "marks": "1.5 M"
          },
          {
            "key": "Crossing time = 72 seconds",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Grid Coordinate Distance • Manhattan Distance",
        "q": "On a city grid where roads only run along North-South and East-West grid lines:<br>Point A is at (1, 1) and Point B is at (5, 4). Each grid unit is 200 metres.<br>(a) How many units East must one travel?<br>(b) How many units North must one travel?<br>(c) What is the total real travel distance along the streets?",
        "ans": "<strong>Grid Street Distance:</strong><br>\n• <strong>(a) East Units:</strong> 5 - 1 = <strong>4 units East</strong>.<br>\n• <strong>(b) North Units:</strong> 4 - 1 = <strong>3 units North</strong>.<br>\n• <strong>(c) Total Travel Distance:</strong><br>\n- Total grid units = 4 + 3 = 7 units.<br>\n- Real distance = 7 × 200 m = <strong>1,400 metres (1.4 km)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "4 units East, 3 units North",
            "marks": "1.5 M"
          },
          {
            "key": "Total real distance = 1,400 m",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "HOTS • Map Scale Riddle",
        "q": "On Map X, two cities are 8 cm apart. On Map Y, the same two cities are 4 cm apart. The scale of Map X is 1 cm = 20 km. What is the scale of Map Y?",
        "ans": "<strong>Deduction:</strong><br>\n1. <strong>Actual Ground Distance:</strong> From Map X: 8 cm × 20 km = <strong>160 km</strong>.<br>\n2. <strong>Scale of Map Y:</strong> On Map Y, 4 cm represents 160 km.<br>\n3. Therefore, 1 cm on Map Y represents: 160 km ÷ 4 = <strong>40 km</strong>.<br>\n<strong>Scale of Map Y: 1 cm = 40 km</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Ground distance = 160 km",
            "marks": "1.5 M"
          },
          {
            "key": "Scale of Map Y = 1 cm = 40 km",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Aerial Map Scale Comparison",
        "q": "A circular stadium has diameter 150 metres on the ground.<br>(a) What diameter will it have on a blueprint with scale 1 cm = 25 m?<br>(b) What diameter will it have on a city map with scale 1 cm = 50 m?",
        "ans": "<strong>Scaling:</strong><br>\n• <strong>(a) Blueprint (1 cm = 25 m):</strong> 150 ÷ 25 = <strong>6 cm</strong>.<br>\n• <strong>(b) City Map (1 cm = 50 m):</strong> 150 ÷ 50 = <strong>3 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Blueprint = 6 cm",
            "marks": "1.5 M"
          },
          {
            "key": "City map = 3 cm",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Scale Factor • Mathematical Definition",
        "q": "(a) What is meant by the 'scale of a map'?<br>(b) If a map scale says '1:100,000', what does 1 cm on the map represent in kilometres on the ground?",
        "ans": "<strong>Scale Concepts:</strong><br>\n• <strong>(a) Definition:</strong> The scale of a map is the constant ratio between the distance measured on the map and the corresponding actual distance measured on the ground.<br>\n• <strong>(b) Ratio 1:100,000:</strong><br>\n- 1 cm on map = 100,000 cm on ground.<br>\n- 100,000 cm ÷ 100 = 1,000 metres.<br>\n- 1,000 m = <strong>1 kilometre</strong>.<br>\n- So 1 cm on the map represents exactly <strong>1 km on the ground</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of scale",
            "marks": "1.5 M"
          },
          {
            "key": "100,000 cm = 1 km",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Elevation Contours & Topography",
        "q": "On a topographical relief map, contour lines indicate height above sea level.<br>(a) What does it mean when contour lines are drawn very close to each other?<br>(b) What does it mean when contour lines are far apart?",
        "ans": "<strong>Contour Line Principles:</strong><br>\n• <strong>(a) Close Contour Lines:</strong> Indicate a <strong>steep slope or cliff</strong>, where the elevation changes rapidly over a very short horizontal ground distance.<br>\n• <strong>(b) Far Apart Contour Lines:</strong> Indicate a <strong>gentle slope or flat plain</strong>, where elevation changes very gradually over a long distance.",
        "marks": 3,
        "rubric": [
          {
            "key": "Close lines = Steep slope",
            "marks": "1.5 M"
          },
          {
            "key": "Far lines = Gentle slope / Flat terrain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "True or False with Map Reasoning",
        "q": "State True or False with reasoning:<br>(a) A map scale of 1 cm = 10 km represents a larger area than a scale of 1 cm = 100 m on the same size sheet of paper.<br>(b) East is always 180° clockwise from North.<br>(c) The top of every official map is always oriented toward North.",
        "ans": "<strong>Justifications:</strong><br>\n• <strong>(a) True:</strong> At 1 cm = 10 km, each centimetre covers 10,000 metres of ground, so the same paper sheet covers a vastly larger geographic territory (small-scale map).<br>\n• <strong>(b) False:</strong> East is <strong>90° clockwise</strong> from North (180° clockwise is South).<br>\n• <strong>(c) True:</strong> By international cartographic standard convention, the top edge of a map points toward true <strong>North</strong> (unless explicitly indicated otherwise by a north arrow).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): True with explanation",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): False (East is 90°)",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): True with standard convention",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comprehensive Map Review • Town Tour",
        "q": "A delivery van starts at Central Depot (0, 0). It travels 4 km North to Station 1, then 3 km East to Station 2, then 4 km South to Station 3.<br>(a) Plot or describe the coordinates of Station 1, Station 2, and Station 3.<br>(b) In which direction and at what distance is Station 3 from the Central Depot?<br>(c) What shape is formed by the complete delivery path if the van returns directly from Station 3 to the Central Depot?",
        "ans": "<strong>Comprehensive Route Analysis:</strong><br>\n• <strong>(a) Coordinates:</strong><br>\n- Depot: (0, 0)<br>\n- Station 1: 4 km North → (0, 4)<br>\n- Station 2: 3 km East → (3, 4)<br>\n- Station 3: 4 km South → (3, 0).<br>\n• <strong>(b) Relative Position of Station 3:</strong> Station 3 is at (3, 0), which is exactly <strong>3 km East of Central Depot</strong>.<br>\n• <strong>(c) Path Shape:</strong> The path goes North (4 km), East (3 km), South (4 km), and West back to depot (3 km). This forms a perfect <strong>Rectangle (4 km × 3 km)</strong> with perimeter = 4 + 3 + 4 + 3 = 14 km.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct coordinates: (0,4), (3,4), (3,0)",
            "marks": "1.0 M"
          },
          {
            "key": "Station 3 is 3 km East of Depot",
            "marks": "1.0 M"
          },
          {
            "key": "Shape is Rectangle (4 km × 3 km)",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Competency Question: Hiking Trail Map Interpretation",
      "text": "On a hiking map of a nature sanctuary, 1 cm = 400 metres. The trek comprises three sections: Valley Trail = 3.5 cm; Ridge Walk = 4.2 cm; Lake Loop = 2.8 cm.",
      "question": "(a) Find the total length of the trek on the ground in kilometres.<br>(b) If a hiker walks at an average speed of 3.5 km/h, how long will the entire hike take?",
      "answer": "<div class=\"cbq-sol-label\">Suggested Model Solution:</div>\r\n          \r\n <div class=\"step\"><strong>(a) Total Distance:</strong> Total map = 3.5 + 4.2 + 2.8 = 10.5 cm.<br>\r\n Actual = 10.5 × 400 m = 4,200 m = <strong>4.2 km</strong>.</div>\r\n <div class=\"step\"><strong>(b) Hike Duration:</strong> 4.2/3.5 = 1.2 hours = <strong>1 hour 12 minutes</strong>.",
      "rubric": "1M concept identification + 1M step execution + 1M conclusion"
    }
  },
  {
    "id": "mela6",
    "num": 6,
    "unit": "Chapter 6 • Capacity, Volume & Commercial Arithmetic",
    "title": "The Dairy Farm",
    "subtitle": "दुग्धशाला (धारिता, लीटर-मिलीलीटर एवं व्यापारिक गणना)",
    "concepts": [
      "Standard units of liquid volume: 1 Litre (L) = 1,000 millilitres (mL).",
      "Common fractional benchmarks: 1/2 L = 500 mL, 1/4 L = 250 mL, 3/4 L = 750 mL.",
      "Adding and subtracting compound units of Litres and Millilitres.",
      "Packaging milk into pouches and cartons; commercial billing at given rates per litre.",
      "(a) True: Since $6 = 2 \\times 3$, any number divisible by 6 is divisible by both of its factors (2 and 3).",
      "(b) False: 1 has only one factor (itself). A prime number must have exactly two distinct factors (1 and the number itself).",
      "(c) True: 1 is a factor of every integer, hence it is always the smallest common factor."
    ],
    "svg": "<svg viewBox=\"0 0 600 170\" width=\"100%\" height=\"170\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"170\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Liquid Capacity Standards: Litres and Millilitres (1 L = 1,000 mL)</text>\r\n        <g transform=\"translate(60, 42)\">\r\n          <rect x=\"0\" y=\"0\" width=\"70\" height=\"95\" rx=\"4\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/>\r\n          <rect x=\"2\" y=\"15\" width=\"66\" height=\"78\" fill=\"#38bdf8\" opacity=\"0.4\"/>\r\n          <line x1=\"2\" y1=\"20\" x2=\"20\" y2=\"20\" stroke=\"#0369a1\" stroke-width=\"1.5\"/>\r\n          <text x=\"25\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0369a1\">1000 mL</text>\r\n          <line x1=\"2\" y1=\"55\" x2=\"16\" y2=\"55\" stroke=\"#0369a1\" stroke-width=\"1.5\"/>\r\n          <text x=\"22\" y=\"59\" font-family=\"system-ui, sans-serif\" font-size=\"8\" fill=\"#0369a1\">500 mL</text>\r\n          <text x=\"35\" y=\"112\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0369a1\" text-anchor=\"middle\">1 Litre</text>\r\n        </g>\r\n        <g transform=\"translate(180, 52)\">\r\n          <rect x=\"0\" y=\"0\" width=\"60\" height=\"85\" rx=\"4\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/>\r\n          <rect x=\"2\" y=\"15\" width=\"56\" height=\"68\" fill=\"#38bdf8\" opacity=\"0.4\"/>\r\n          <line x1=\"2\" y1=\"20\" x2=\"16\" y2=\"20\" stroke=\"#0369a1\" stroke-width=\"1.5\"/>\r\n          <text x=\"22\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"8.5\" font-weight=\"700\" fill=\"#0369a1\">500 mL</text>\r\n          <text x=\"30\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0369a1\" text-anchor=\"middle\">1/2 Litre</text>\r\n        </g>\r\n        <g transform=\"translate(290, 64)\">\r\n          <rect x=\"0\" y=\"0\" width=\"50\" height=\"73\" rx=\"4\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/>\r\n          <rect x=\"2\" y=\"15\" width=\"46\" height=\"56\" fill=\"#38bdf8\" opacity=\"0.4\"/>\r\n          <line x1=\"2\" y1=\"20\" x2=\"14\" y2=\"20\" stroke=\"#0369a1\" stroke-width=\"1.5\"/>\r\n          <text x=\"18\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#0369a1\">250 mL</text>\r\n          <text x=\"25\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"800\" fill=\"#0369a1\" text-anchor=\"middle\">1/4 Litre</text>\r\n        </g>\r\n        <g transform=\"translate(390, 72)\">\r\n          <rect x=\"0\" y=\"0\" width=\"45\" height=\"65\" rx=\"4\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\r\n          <text x=\"22\" y=\"36\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">200 mL</text>\r\n          <text x=\"22\" y=\"82\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Pouch</text>\r\n        </g>\r\n        <g transform=\"translate(480, 80)\">\r\n          <rect x=\"0\" y=\"0\" width=\"40\" height=\"57\" rx=\"4\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\r\n          <text x=\"20\" y=\"32\" font-family=\"system-ui, sans-serif\" font-size=\"8.5\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">100 mL</text>\r\n          <text x=\"20\" y=\"74\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Cup</text>\r\n        </g>\r\n        <text x=\"300\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#475569\" text-anchor=\"middle\">Equivalences: 1,000 mL = 2 × 500 mL = 4 × 250 mL = 5 × 200 mL = 10 × 100 mL</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Dairy Farm Operations • Daily Milk Production",
        "q": "A dairy cooperative farm has 12 cows. Each cow yields an average of 8 litres of milk per day.<br>(a) How many litres of milk does the farm produce in one day?<br>(b) How many litres are produced in the month of June (30 days)?<br>(c) If milk is sold at ₹52 per litre, calculate the total revenue in June.",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Daily Milk:</strong> 12 cows × 8 L/cow = <strong>96 litres per day</strong>.<br>\n• <strong>(b) June Production (30 days):</strong> 96 L × 30 = <strong>2,880 litres</strong>.<br>\n• <strong>(c) June Revenue:</strong> 2,880 L × ₹52 = <strong>₹1,49,760</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Daily milk = 96 L",
            "marks": "1.0 M"
          },
          {
            "key": "June milk = 2,880 L",
            "marks": "1.0 M"
          },
          {
            "key": "Revenue = ₹1,49,760",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Capacity Distribution • Can Sizes",
        "q": "A milk booth receives 65 litres of milk in the morning. They fill:<br>• 40 packets of 500 mL each<br>• 30 bottles of 1 Litre each<br>(a) What is the total volume of milk packaged in packets and bottles?<br>(b) How much loose milk remains in the can?",
        "ans": "<strong>Volume Calculations:</strong><br>\n• <strong>(a) Packaged Milk:</strong><br>\n- 40 packets × 500 mL = 20,000 mL = 20 Litres.<br>\n- 30 bottles × 1 L = 30 Litres.<br>\n- Total packaged = 20 L + 30 L = <strong>50 Litres</strong>.<br>\n• <strong>(b) Loose Milk Remaining:</strong> 65 L - 50 L = <strong>15 Litres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Packets = 20 L; Bottles = 30 L",
            "marks": "1.0 M"
          },
          {
            "key": "Total packaged = 50 L",
            "marks": "1.0 M"
          },
          {
            "key": "Remaining = 15 L",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Unit Conversions • Litres and Millilitres",
        "q": "Calculate:<br>(a) Add: 15 L 450 mL + 8 L 850 mL<br>(b) Subtract: 20 L - 14 L 350 mL<br>(c) Convert 3,750 mL into Litres and Millilitres.",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Addition:</strong> 450 mL + 850 mL = 1,300 mL = 1 L 300 mL. 15 L + 8 L + 1 L = <strong>24 L 300 mL</strong>.<br>\n• <strong>(b) Subtraction:</strong> 20 L 000 mL - 14 L 350 mL = 19 L 1,000 mL - 14 L 350 mL = <strong>5 L 650 mL</strong>.<br>\n• <strong>(c) Conversion:</strong> 3,750 mL = <strong>3 Litres 750 mL</strong> (or 3.75 L).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 24 L 300 mL",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 5 L 650 mL",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 3 L 750 mL",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Common Multiples • Number Line Intersections",
        "q": "Find the first three common multiples of 4 and 6. Explain how you find them using lists of multiples and locate their Least Common Multiple (LCM).",
        "ans": "<strong>Finding Common Multiples:</strong><br>\n1. <strong>Multiples of 4:</strong> 4, 8, <strong>12</strong>, 16, 20, <strong>24</strong>, 28, 32, <strong>36</strong>, 40...<br>\n2. <strong>Multiples of 6:</strong> 6, <strong>12</strong>, 18, <strong>24</strong>, 30, <strong>36</strong>, 42...<br>\n3. <strong>Common Multiples:</strong> Numbers appearing in both lists are <strong>12, 24, 36</strong>.<br>\n4. <strong>LCM:</strong> The smallest common multiple is <strong>12</strong>. Thus, LCM(4, 6) = 12.",
        "marks": 3,
        "rubric": [
          {
            "key": "Lists of multiples for 4 and 6",
            "marks": "1.0 M"
          },
          {
            "key": "Common multiples: 12, 24, 36",
            "marks": "1.0 M"
          },
          {
            "key": "LCM = 12",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Factor Trees • Prime Factorization",
        "q": "Draw two different factor trees for the number 60 and write down its prime factorization.",
        "ans": "<strong>Factor Trees for 60:</strong><br>\n1. <strong>Tree A (Starting with 6 × 10):</strong><br>\n• 60 = 6 × 10<br>\n• 6 splits into 2 × 3<br>\n• 10 splits into 2 × 5<br>\n• Prime factors: 2, 3, 2, 5.<br>\n2. <strong>Tree B (Starting with 4 × 15):</strong><br>\n• 60 = 4 × 15<br>\n• 4 splits into 2 × 2<br>\n• 15 splits into 3 × 5<br>\n• Prime factors: 2, 2, 3, 5.<br>\n3. <strong>Prime Factorization:</strong> 60 = <strong>2 × 2 × 3 × 5</strong>. Both trees yield identical prime factors.",
        "marks": 3,
        "rubric": [
          {
            "key": "Two distinct factor trees shown",
            "marks": "2.0 M"
          },
          {
            "key": "Prime factorization: 2 × 2 × 3 × 5",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Multiples Problem • Packaging Butter",
        "q": "A dairy packs butter into boxes of 6 packets or boxes of 8 packets.<br>(a) What is the smallest number of butter packets that can be packed completely in either boxes of 6 or boxes of 8 without leaving any packets out?<br>(b) How many boxes of 6 and how many boxes of 8 will be needed for that quantity?",
        "ans": "<strong>LCM Application:</strong><br>\n• <strong>(a) Smallest Number (LCM):</strong><br>\n- Multiples of 6: 6, 12, 18, <strong>24</strong>, 30...<br>\n- Multiples of 8: 8, 16, <strong>24</strong>, 32...<br>\n- LCM(6, 8) = <strong>24 packets</strong>.<br>\n• <strong>(b) Number of Boxes:</strong><br>\n- Boxes of 6 = 24 ÷ 6 = <strong>4 boxes</strong>.<br>\n- Boxes of 8 = 24 ÷ 8 = <strong>3 boxes</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "LCM(6, 8) = 24 packets",
            "marks": "1.5 M"
          },
          {
            "key": "4 boxes of 6, 3 boxes of 8",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Factors • Listing & Pairs",
        "q": "(a) Write all the factors of 36.<br>(b) Write all the factors of 48.<br>(c) List all the common factors of 36 and 48. What is their Highest Common Factor (HCF)?",
        "ans": "<strong>Factors Analysis:</strong><br>\n• <strong>(a) Factors of 36:</strong> 1, 2, 3, 4, 6, 9, 12, 18, 36.<br>\n• <strong>(b) Factors of 48:</strong> 1, 2, 3, 4, 6, 8, 12, 16, 24, 48.<br>\n• <strong>(c) Common Factors:</strong> <strong>1, 2, 3, 4, 6, 12</strong>.<br>\n- <strong>Highest Common Factor (HCF):</strong> <strong>12</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Factors of 36 and 48",
            "marks": "1.5 M"
          },
          {
            "key": "Common factors & HCF = 12",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Milk Tanker Capacity • Multi-Station Supply",
        "q": "A milk tanker carries 8,000 litres of chilled milk. It delivers 2,450 litres to Society Alpha, 3,180 litres to Society Beta, and the rest to a milk processing plant.<br>(a) How many litres are delivered to Societies Alpha and Beta combined?<br>(b) How many litres does the processing plant receive?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Societies Combined:</strong> 2,450 L + 3,180 L = <strong>5,630 litres</strong>.<br>\n• <strong>(b) Processing Plant:</strong> 8,000 L - 5,630 L = <strong>2,370 litres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Combined societies = 5,630 L",
            "marks": "1.5 M"
          },
          {
            "key": "Plant delivery = 2,370 L",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Paneer Yield • Unitary Proportions",
        "q": "At the dairy, 5 litres of buffalo milk yield 1 kg of fresh paneer (cottage cheese).<br>(a) How many kilograms of paneer can be made from 45 litres of milk?<br>(b) How many litres of milk are required to prepare 8.5 kg of paneer?",
        "ans": "<strong>Proportion Calculations:</strong><br>\n• <strong>(a) Paneer from 45 L:</strong> 45 ÷ 5 = <strong>9 kg of paneer</strong>.<br>\n• <strong>(b) Milk for 8.5 kg Paneer:</strong> 8.5 × 5 = <strong>42.5 litres of milk</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "45 L gives 9 kg paneer",
            "marks": "1.5 M"
          },
          {
            "key": "8.5 kg paneer requires 42.5 L milk",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Measuring Jugs • Filling Volumes",
        "q": "A milkman has only two measuring cans: 200 mL and 500 mL.<br>(a) How can he measure exactly 900 mL of milk using minimum pours?<br>(b) How can he measure exactly 1 litre (1,000 mL) using both cans?",
        "ans": "<strong>Measuring Jug Solutions:</strong><br>\n• <strong>(a) For 900 mL:</strong><br>\n- Take two 200 mL cans and one 500 mL can: 200 + 200 + 500 = <strong>900 mL (3 pours)</strong>.<br>\n• <strong>(b) For 1,000 mL (1 Litre):</strong><br>\n- Use the 500 mL can twice: 500 + 500 = 1,000 mL, OR<br>\n- Using both cans: one 200 mL can and two 500 mL cans minus one 200 mL can, or simpler: five 200 mL cans.<br>\n- Best combination using both cans: two 200 mL + two 300 mL (or two 500 mL cans).",
        "marks": 3,
        "rubric": [
          {
            "key": "900 mL: 500 mL + 200 mL + 200 mL",
            "marks": "1.5 M"
          },
          {
            "key": "1,000 mL: Two 500 mL pours (or equivalent combination)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Ghee Production • Cost & Profit",
        "q": "A dairy sells pure cow ghee in jars of 500 g at ₹340 per jar.<br>(a) What is the cost of 1 kg of ghee?<br>(b) A customer buys 6 jars of ghee. How many kg of ghee does he get, and what is his total bill?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Cost of 1 kg:</strong> 1 kg = 1,000 g = two 500 g jars. Cost = 2 × ₹340 = <strong>₹680 per kg</strong>.<br>\n• <strong>(b) 6 Jars Purchase:</strong><br>\n- Total weight = 6 × 500 g = 3,000 g = <strong>3 kg</strong>.<br>\n- Total bill = 6 × ₹340 = <strong>₹2,040</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1 kg cost = ₹680",
            "marks": "1.0 M"
          },
          {
            "key": "Total weight = 3 kg",
            "marks": "1.0 M"
          },
          {
            "key": "Total bill = ₹2,040",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Milk Delivery Route • Time Schedule",
        "q": "A milk delivery truck starts at 4:30 AM. It spends 15 minutes at each of its 8 delivery booths and takes 10 minutes to drive between each consecutive booth (7 transit trips).<br>(a) Find total time spent unloading milk at the booths.<br>(b) Find total driving time between booths.<br>(c) At what time does the truck complete all deliveries?",
        "ans": "<strong>Schedule Breakdown:</strong><br>\n• <strong>(a) Unloading Time:</strong> 8 booths × 15 min = 120 minutes = <strong>2 hours</strong>.<br>\n• <strong>(b) Driving Time:</strong> 7 trips × 10 min = <strong>70 minutes (1 hour 10 minutes)</strong>.<br>\n• <strong>(c) Completion Time:</strong><br>\n- Total elapsed time = 2 h + 1 h 10 min = 3 hours 10 minutes.<br>\n- 4:30 AM + 3 h 10 min = <strong>7:40 AM</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Unloading = 120 min (2 h)",
            "marks": "1.0 M"
          },
          {
            "key": "Driving = 70 min",
            "marks": "1.0 M"
          },
          {
            "key": "Finish time = 7:40 AM",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Common Factors • Venn Diagram Model",
        "q": "Draw or describe two overlapping circles representing factors of 20 and factors of 30:<br>(a) List factors in circle for 20.<br>(b) List factors in circle for 30.<br>(c) Which numbers are placed in the overlapping shared intersection?",
        "ans": "<strong>Venn Diagram Factors:</strong><br>\n• <strong>Factors of 20:</strong> 1, 2, 4, 5, 10, 20.<br>\n• <strong>Factors of 30:</strong> 1, 2, 3, 5, 6, 10, 15, 30.<br>\n• <strong>(c) Overlapping Intersection (Common Factors):</strong> <strong>1, 2, 5, 10</strong>.<br>\n- Non-shared in 20 only: 4, 20.<br>\n- Non-shared in 30 only: 3, 6, 15, 30.",
        "marks": 3,
        "rubric": [
          {
            "key": "Factors of 20 identified",
            "marks": "1.0 M"
          },
          {
            "key": "Factors of 30 identified",
            "marks": "1.0 M"
          },
          {
            "key": "Shared intersection: 1, 2, 5, 10",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Dairy Cattle Feed • Ration Calculation",
        "q": "Each cow on the farm is fed 4 kg of green fodder and 2.5 kg of cattle grain mix twice a day.<br>(a) How many kilograms of feed does one cow consume in one day?<br>(b) How many kilograms of feed are required for all 12 cows for one day?",
        "ans": "<strong>Feed Calculations:</strong><br>\n• <strong>(a) One Cow Daily:</strong><br>\n- Per feeding = 4 kg + 2.5 kg = 6.5 kg.<br>\n- Twice a day = 6.5 kg × 2 = <strong>13 kg per day</strong>.<br>\n• <strong>(b) 12 Cows Daily:</strong> 12 × 13 kg = <strong>156 kg of feed</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "One cow = 13 kg/day",
            "marks": "1.5 M"
          },
          {
            "key": "12 cows = 156 kg/day",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Milk Adulteration Test • Density Measurement",
        "q": "A lactometer reading shows pure cow milk density. A sample of 1 litre of pure milk weighs 1,032 grams.<br>(a) Does 1 litre of milk weigh more or less than 1 litre of water (1,000 g)? By how much?<br>(b) What is the weight of 5 litres of pure milk in kilograms and grams?",
        "ans": "<strong>Density Analysis:</strong><br>\n• <strong>(a) Comparison:</strong> Milk weighs 1,032 g while water weighs 1,000 g. Milk weighs <strong>more than water by 32 grams per litre</strong>.<br>\n• <strong>(b) Weight of 5 Litres:</strong> 5 × 1,032 g = 5,160 g = <strong>5 kg 160 g</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "More than water by 32 g",
            "marks": "1.5 M"
          },
          {
            "key": "5 litres = 5 kg 160 g",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Prime and Composite Numbers • Classification",
        "q": "Classify the following numbers as Prime or Composite:<br>11, 15, 19, 21, 29, 33, 37.<br>Give the definition of a prime number.",
        "ans": "<strong>Prime vs Composite Classification:</strong><br>\n• <strong>Definition:</strong> A prime number is a natural number greater than 1 that has exactly two distinct factors: 1 and itself.<br>\n• <strong>Classification:</strong><br>\n- <strong>Prime Numbers:</strong> <strong>11, 19, 29, 37</strong> (only divisible by 1 and itself).<br>\n- <strong>Composite Numbers:</strong> <strong>15</strong> (3 × 5), <strong>21</strong> (3 × 7), <strong>33</strong> (3 × 11).",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of prime number",
            "marks": "1.0 M"
          },
          {
            "key": "Correct primes: 11, 19, 29, 37",
            "marks": "1.0 M"
          },
          {
            "key": "Correct composites: 15, 21, 33",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Dairy Churning • Curd to Buttermilk",
        "q": "To make buttermilk (chaas), a dairy mixes 12 litres of curd with 18 litres of cold water.<br>(a) What is the total volume of buttermilk prepared?<br>(b) If buttermilk is served in 250 mL glasses at ₹15 each, how many glasses can be poured?<br>(c) What is the total collection from selling all the glasses?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Total Volume:</strong> 12 L + 18 L = <strong>30 Litres</strong>.<br>\n• <strong>(b) Number of Glasses:</strong><br>\n- 30 L = 30,000 mL.<br>\n- Glasses = 30,000 ÷ 250 = <strong>120 glasses</strong>.<br>\n• <strong>(c) Total Collection:</strong> 120 × ₹15 = <strong>₹1,800</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total volume = 30 L",
            "marks": "1.0 M"
          },
          {
            "key": "Glasses = 120",
            "marks": "1.0 M"
          },
          {
            "key": "Collection = ₹1,800",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "HOTS • Milk Capacity Riddle",
        "q": "A large milk container is 3/5 full. When 14 litres of milk are added to it, it becomes 4/5 full. What is the total capacity of the container when completely full?",
        "ans": "<strong>Fraction & Volume Deduction:</strong><br>\n1. Fraction added = 4/5 - 3/5 = <strong>1/5 of the container</strong>.<br>\n2. Given: 1/5 of the total capacity = 14 litres.<br>\n3. Total capacity = 14 × 5 = <strong>70 litres</strong>.<br>\n4. <strong>Verification:</strong> 3/5 of 70 = 42 L. Adding 14 L gives 42 + 14 = 56 L. 4/5 of 70 = 56 L. Solution verified!",
        "marks": 3,
        "rubric": [
          {
            "key": "Difference = 1/5 of capacity",
            "marks": "1.5 M"
          },
          {
            "key": "Capacity = 70 litres with verification",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Dairy Cooperative Savings",
        "q": "A women's dairy cooperative saves ₹4,200 every week.<br>(a) How much money do they save in one year (52 weeks)?<br>(b) If they invest ₹1,50,000 from their savings to purchase a chilling unit, how much savings remain?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Annual Savings:</strong> 52 × ₹4,200 = <strong>₹2,18,400</strong>.<br>\n• <strong>(b) Remaining Savings:</strong> ₹2,18,400 - ₹1,50,000 = <strong>₹68,400</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Annual savings = ₹2,18,400",
            "marks": "1.5 M"
          },
          {
            "key": "Remaining savings = ₹68,400",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Number Logic • Co-prime Numbers",
        "q": "(a) What are co-prime numbers?<br>(b) Are 8 and 15 co-prime? Justify your answer by listing their factors.",
        "ans": "<strong>Co-prime Explanation:</strong><br>\n• <strong>(a) Definition:</strong> Two numbers are co-prime if they have no common factor other than 1 (i.e. HCF = 1).<br>\n• <strong>(b) Analysis of 8 and 15:</strong><br>\n- Factors of 8: 1, 2, 4, 8.<br>\n- Factors of 15: 1, 3, 5, 15.<br>\n- Common factor: <strong>Only 1</strong>.<br>\n- <strong>Conclusion:</strong> Yes, 8 and 15 are <strong>co-prime numbers</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of co-prime (HCF = 1)",
            "marks": "1.5 M"
          },
          {
            "key": "Factors listed & affirmative conclusion",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Ice-Cream Factory Milk Usage",
        "q": "An ice-cream unit uses 150 litres of condensed milk daily to produce 600 tubs of ice-cream.<br>(a) How many millilitres of condensed milk are used per tub?<br>(b) If production is increased by 50%, how many litres of milk will be required daily?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Milk per Tub:</strong> 150 L = 150,000 mL. Milk per tub = 150,000 ÷ 600 = <strong>250 mL per tub</strong>.<br>\n• <strong>(b) 50% Increase:</strong> 150 L + (50% of 150 L) = 150 + 75 = <strong>225 litres daily</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "250 mL per tub",
            "marks": "1.5 M"
          },
          {
            "key": "225 litres with 50% increase",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Division by 10, 100",
        "q": "Convert millilitres into litres using decimal point shifts:<br>(a) 4,500 mL<br>(b) 850 mL<br>(c) 25 mL<br>(d) 10,250 mL",
        "ans": "<strong>Shift Decimal 3 Places Left (÷ 1,000):</strong><br>\n• <strong>(a) 4,500 mL:</strong> 4,500 ÷ 1,000 = <strong>4.5 L</strong>.<br>\n• <strong>(b) 850 mL:</strong> 850 ÷ 1,000 = <strong>0.85 L</strong>.<br>\n• <strong>(c) 25 mL:</strong> 25 ÷ 1,000 = <strong>0.025 L</strong>.<br>\n• <strong>(d) 10,250 mL:</strong> 10,250 ÷ 1,000 = <strong>10.25 L</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parts (a) & (b): 4.5 L, 0.85 L",
            "marks": "1.5 M"
          },
          {
            "key": "Parts (c) & (d): 0.025 L, 10.25 L",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "True or False with Arithmetic Reasoning",
        "q": "State True or False with reasoning:<br>(a) Every multiple of 6 is also a multiple of 2 and 3.<br>(b) 1 is the smallest prime number.<br>(c) A capacity of 2 L 50 mL equals 2.5 Litres.",
        "ans": "<strong>Justifications:</strong><br>\n• <strong>(a) True:</strong> Since 6 = 2 × 3, any multiple of 6 contains both 2 and 3 as factors, so it is divisible by both 2 and 3.<br>\n• <strong>(b) False:</strong> 1 has only one factor (itself), whereas prime numbers require exactly two distinct factors. The smallest prime number is <strong>2</strong>.<br>\n• <strong>(c) False:</strong> 50 mL = 50 ÷ 1,000 = 0.05 L. Therefore 2 L 50 mL = <strong>2.05 Litres</strong> (2.5 L is 2 L 500 mL).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): True with prime factor reasoning",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): False (2 is smallest prime)",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): False (2.05 L vs 2.5 L)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comprehensive Dairy Farm Review",
        "q": "A dairy cooperative has a cold storage capacity of 15,000 litres. On Monday, it starts with 4,200 L in stock. During the day, it collects 8,400 L from farmers and delivers 7,850 L to bottling plants.<br>(a) What is the closing stock on Monday evening?<br>(b) How much unused capacity remains in the storage tank?",
        "ans": "<strong>Stock Balance:</strong><br>\n• <strong>(a) Closing Stock:</strong><br>\n- Opening stock = 4,200 L.<br>\n- Total available = 4,200 + 8,400 = 12,600 L.<br>\n- Dispatched = 7,850 L.<br>\n- Closing stock = 12,600 - 7,850 = <strong>4,750 litres</strong>.<br>\n• <strong>(b) Unused Capacity:</strong> 15,000 L - 4,750 L = <strong>10,250 litres unused</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Closing stock = 4,750 L",
            "marks": "1.5 M"
          },
          {
            "key": "Unused capacity = 10,250 L",
            "marks": "1.5 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Competency Question: Community Milk Tea Stall Procurement",
      "text": "A tea vendor makes 1 cup of special masala chai using 75 mL of milk. On Sunday, he prepares 400 cups of tea. Milk is bought in 1-litre bottles costing ₹62 each.",
      "question": "(a) How much milk in litres is needed for 400 cups?<br>(b) How many whole 1-litre bottles must he buy, and how much will he spend?",
      "answer": "<div class=\"cbq-sol-label\">Suggested Model Solution:</div>\r\n          \r\n <div class=\"step\"><strong>(a) Total Milk:</strong> 400 × 75 mL = 30,000 mL = <strong>30 Litres</strong>.</div>\r\n <div class=\"step\"><strong>(b) Bottles and Cost:</strong> 30 bottles needed ⇒ 30 × ₹62 = <strong>₹1,860</strong>.",
      "rubric": "1M concept identification + 1M step execution + 1M conclusion"
    }
  },
  {
    "id": "mela7",
    "num": 7,
    "unit": "Chapter 7 • Patterns, Rotations & Tessellations",
    "title": "Shapes and Patterns",
    "subtitle": "आकृतियाँ और पैटर्न (ज्यामितीय आकृतियाँ, घूर्णन एवं टाइलिंग)",
    "concepts": [
      "2D geometric shapes: Triangles, Quadrilaterals, Pentagons, Hexagons and their properties.",
      "Rotational patterns: Rotating a motif by 1/4 turn (90°), 1/2 turn (180°), or 1/6 turn (60°).",
      "Tessellations (Tiling): Covering a flat surface completely with geometric tiles without any gaps or overlapping.",
      "Number and shape sequences following progressive mathematical rules.",
      "(a) 1, 4, 9, 16, 25: Rule: Square of consecutive natural numbers ($1^2, 2^2, 3^2, 4^2, 5^2$). Next terms: $6^2 = \\mathbf{36}$, $7^2 = \\mathbf{49}$.",
      "(b) 3, 6, 12, 24: Rule: Multiply by 2. Next terms: $24 \\times 2 = \\mathbf{48}$, $48 \\times 2 = \\mathbf{96}$.",
      "(c) 100, 95, 85, 70: Rule: Subtract consecutive multiples of 5 ($-5, -10, -15$). Next terms: $70 - 20 = \\mathbf{50}$, $50 - 25 = \\mathbf{25}$."
    ],
    "svg": "<svg viewBox=\"0 0 600 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"160\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Rotational Pattern Transformation: 1/4 Turn (90°) Progressive Sequence</text>\r\n        <g transform=\"translate(60, 45)\">\r\n          <rect x=\"0\" y=\"0\" width=\"80\" height=\"80\" rx=\"8\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n          <polygon points=\"40,15 20,60 60,60\" fill=\"#4f46e5\"/>\r\n          <text x=\"40\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Original</text>\r\n        </g>\r\n        <text x=\"165\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"18\" fill=\"#94a3b8\" text-anchor=\"middle\">→</text>\r\n        <g transform=\"translate(190, 45)\">\r\n          <rect x=\"0\" y=\"0\" width=\"80\" height=\"80\" rx=\"8\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n          <polygon points=\"65,40 20,20 20,60\" fill=\"#059669\"/>\r\n          <text x=\"40\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">1/4 Turn</text>\r\n        </g>\r\n        <text x=\"295\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"18\" fill=\"#94a3b8\" text-anchor=\"middle\">→</text>\r\n        <g transform=\"translate(320, 45)\">\r\n          <rect x=\"0\" y=\"0\" width=\"80\" height=\"80\" rx=\"8\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n          <polygon points=\"40,65 20,20 60,20\" fill=\"#d97706\"/>\r\n          <text x=\"40\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">1/2 Turn</text>\r\n        </g>\r\n        <text x=\"425\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"18\" fill=\"#94a3b8\" text-anchor=\"middle\">→</text>\r\n        <g transform=\"translate(450, 45)\">\r\n          <rect x=\"0\" y=\"0\" width=\"80\" height=\"80\" rx=\"8\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n          <polygon points=\"15,40 60,20 60,60\" fill=\"#dc2626\"/>\r\n          <text x=\"40\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">3/4 Turn</text>\r\n        </g>\r\n        <text x=\"300\" y=\"150\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#64748b\" text-anchor=\"middle\">Rule: 4 quarter turns (4 × 90° = 360°) return the shape back to its original orientation.</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Rotational Symmetry • Turns & Degrees",
        "q": "(a) What is the angle of turn if a shape returns to its exact original appearance in a 1/2 turn?<br>(b) What is the angle of turn in a 1/4 turn?<br>(c) Which of the following shapes look identical after a 1/2 turn: Rectangle, Equilateral Triangle, Letter 'S', Letter 'M'?",
        "ans": "<strong>Rotational Symmetry Properties:</strong><br>\n• <strong>(a) 1/2 Turn:</strong> 360° ÷ 2 = <strong>180°</strong>.<br>\n• <strong>(b) 1/4 Turn:</strong> 360° ÷ 4 = <strong>90°</strong>.<br>\n• <strong>(c) Shapes that look identical after 1/2 turn (180°):</strong><br>\n- <strong>Rectangle:</strong> Yes (180° rotation matches perfectly).<br>\n- <strong>Equilateral Triangle:</strong> No (apex points downward after 1/2 turn).<br>\n- <strong>Letter 'S':</strong> Yes (180° rotation gives 'S').<br>\n- <strong>Letter 'M':</strong> No (turns upside down into 'W').<br>\nIdentical shapes: <strong>Rectangle and Letter 'S'</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1/2 turn = 180°; 1/4 turn = 90°",
            "marks": "1.5 M"
          },
          {
            "key": "Rectangle and Letter S identified correctly",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Number Patterns • Multiplication Arrays",
        "q": "Observe the pattern and find the next two lines:<br>1 × 9 + 2 = 11<br>12 × 9 + 3 = 111<br>123 × 9 + 4 = 1111<br>Explain the pattern rule.",
        "ans": "<strong>Pattern Progression:</strong><br>\n• Line 4: <strong>1234 × 9 + 5 = 11,111</strong>.<br>\n• Line 5: <strong>12345 × 9 + 6 = 1,11,111</strong>.<br>\n• <strong>Rule:</strong> In each successive line, the multiplicand adds the next natural digit on the right (1, 12, 123, 1234, 12345), the added number increases by 1 (2, 3, 4, 5, 6), and the resulting product consists entirely of the digit 1 repeated one more time than in the previous line.",
        "marks": 3,
        "rubric": [
          {
            "key": "Line 4: 1234 × 9 + 5 = 11,111",
            "marks": "1.0 M"
          },
          {
            "key": "Line 5: 12345 × 9 + 6 = 1,11,111",
            "marks": "1.0 M"
          },
          {
            "key": "Clear mathematical rule explanation",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Sum of Consecutive Numbers Pattern",
        "q": "Look at the pattern of adding consecutive numbers:<br>1 + 2 + 3 = 6<br>2 + 3 + 4 = 9<br>3 + 4 + 5 = 12<br>(a) Find the next two lines in this pattern.<br>(b) What is the mathematical relationship between the middle number and the sum?",
        "ans": "<strong>Pattern Analysis:</strong><br>\n• <strong>(a) Next Two Lines:</strong><br>\n- Line 4: <strong>4 + 5 + 6 = 15</strong>.<br>\n- Line 5: <strong>5 + 6 + 7 = 18</strong>.<br>\n• <strong>(b) Mathematical Relationship:</strong><br>\n- For 1, 2, 3: Middle number is 2; Sum = 6 = 3 × 2.<br>\n- For 2, 3, 4: Middle number is 3; Sum = 9 = 3 × 3.<br>\n- For 3, 4, 5: Middle number is 4; Sum = 12 = 3 × 4.<br>\n<strong>Rule:</strong> The sum of three consecutive numbers is always exactly <strong>3 times the middle number</strong> ($3 \\times M$).",
        "marks": 3,
        "rubric": [
          {
            "key": "Line 4: 4+5+6 = 15; Line 5: 5+6+7 = 18",
            "marks": "1.5 M"
          },
          {
            "key": "Sum = 3 × middle number",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Magic Squares • 3x3 Grid Sum",
        "q": "Fill in the numbers 1 to 9 in a 3×3 grid such that the sum of each row, column, and diagonal is 15. What number must be placed in the center, and why?",
        "ans": "<strong>Magic Square of 1 to 9 (Sum = 15):</strong><br>\n<pre>\n  8   1   6  → 15\n  3   5   7  → 15\n  4   9   2  → 15\n  ↓   ↓   ↓\n 15  15  15\nDiagonals: 8+5+2 = 15; 6+5+4 = 15.\n</pre><br>\n• <strong>Center Number:</strong> The number <strong>5</strong> must be placed in the center.<br>\n• <strong>Reason:</strong> The center cell is part of 4 lines (1 row, 1 column, 2 diagonals). The average of numbers 1 to 9 is (1 + 9) ÷ 2 = 5, which is the median value required to balance all pairs adding to 10 (1+9, 2+8, 3+7, 4+6).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct 3×3 grid with sums = 15",
            "marks": "2.0 M"
          },
          {
            "key": "Center is 5 with median explanation",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Magic Hexagon • Circles & Squares",
        "q": "In a magic hexagon pattern, a square lies between two circles. The rule is: <em>The number in each square is the product of the numbers in the circles on either side</em>.<br>If two circles contain 7 and 9, what number goes in the square between them? If a square contains 72 and one circle is 8, what number is in the other circle?",
        "ans": "<strong>Rule: Square = Circle 1 × Circle 2:</strong><br>\n• <strong>(a) Circles with 7 and 9:</strong> Square = 7 × 9 = <strong>63</strong>.<br>\n• <strong>(b) Square is 72, Circle is 8:</strong> Other circle = 72 ÷ 8 = <strong>9</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Square = 63",
            "marks": "1.5 M"
          },
          {
            "key": "Other circle = 9",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Square Numbers Pattern • Visual Dots",
        "q": "Observe the pattern of square numbers:<br>1, 4, 9, 16, 25...<br>(a) Find the next three square numbers.<br>(b) Write each square number as the sum of consecutive odd numbers starting from 1 (e.g., 4 = 1 + 3).",
        "ans": "<strong>Square Numbers:</strong><br>\n• <strong>(a) Next Three Numbers:</strong> 6² = <strong>36</strong>, 7² = <strong>49</strong>, 8² = <strong>64</strong>.<br>\n• <strong>(b) Sum of Odd Numbers:</strong><br>\n- 1 = <strong>1</strong><br>\n- 4 = <strong>1 + 3</strong><br>\n- 9 = <strong>1 + 3 + 5</strong><br>\n- 16 = <strong>1 + 3 + 5 + 7</strong><br>\n- 25 = <strong>1 + 3 + 5 + 7 + 9</strong><br>\n- 36 = <strong>1 + 3 + 5 + 7 + 9 + 11</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Next three: 36, 49, 64",
            "marks": "1.5 M"
          },
          {
            "key": "Odd sum expansion",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Palindromic Numbers • Reverse and Add",
        "q": "A palindrome is a number that reads the same forwards and backwards (e.g. 121, 353).<br>(a) Take the number 48. Reverse its digits and add them together. Repeat the process if needed to get a palindrome.<br>(b) Is 1,001 a palindrome? What is the next 4-digit palindrome after 1,001?",
        "ans": "<strong>Palindrome Calculations:</strong><br>\n• <strong>(a) Process for 48:</strong><br>\n- Step 1: Number = 48. Reverse = 84.<br>\n- Step 2: Sum = 48 + 84 = 132 (not yet a palindrome).<br>\n- Step 3: Reverse of 132 = 231.<br>\n- Step 4: Sum = 132 + 231 = <strong>363</strong> (which reads the same forwards and backwards → Palindrome!).<br>\n• <strong>(b) 1,001:</strong> <strong>Yes</strong>, 1,001 is a palindrome. The next 4-digit palindrome is <strong>1,111</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Steps for 48 yielding 363",
            "marks": "2.0 M"
          },
          {
            "key": "1,001 is palindrome & next is 1,111",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Secret Message Codes • Alphabet Shifts",
        "q": "(a) If the code rule is: <em>Replace each letter with the next letter (A→B, B→C... Z→A)</em>, decode the secret message: 'CPPL'.<br>(b) Using the same rule, encode the word: 'CLEVER'.",
        "ans": "<strong>Coding & Decoding (+1 Shift):</strong><br>\n• <strong>(a) Decoding 'CPPL':</strong> Shift backward by 1 letter (-1):<br>\n- C - 1 = B<br>\n- P - 1 = O<br>\n- P - 1 = O<br>\n- L - 1 = K<br>\n<strong>Decoded Word: BOOK</strong>.<br>\n• <strong>(b) Encoding 'CLEVER':</strong> Shift forward by 1 letter (+1):<br>\n- C → D, L → M, E → F, V → W, E → F, R → S.<br>\n<strong>Encoded Message: DMFWFS</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Decoded: BOOK",
            "marks": "1.5 M"
          },
          {
            "key": "Encoded: DMFWFS",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Tessellation & Tiling • Surface Covering",
        "q": "(a) What is tessellation (tiling)?<br>(b) Can regular hexagons tile a flat surface without gaps or overlaps? Explain why with reference to angles.<br>(c) Can regular octagons alone tile a floor? Explain.",
        "ans": "<strong>Tessellation Geometry:</strong><br>\n• <strong>(a) Definition:</strong> Tessellation is the covering of a plane using one or more geometric shapes with no gaps and no overlaps.<br>\n• <strong>(b) Regular Hexagons:</strong> <strong>Yes</strong>. Each interior angle of a regular hexagon is 120°. At each meeting vertex, 3 hexagons meet: 120° × 3 = 360°. Since their angles sum to exactly 360°, they tile seamlessly (honeycomb pattern).<br>\n• <strong>(c) Regular Octagons:</strong> <strong>No</strong>, octagons alone cannot tile a floor. Each interior angle is 135°. Two octagons give 135° + 135° = 270°, leaving a gap of 360° - 270° = 90° (which requires a square to fill the gap).",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of tessellation",
            "marks": "1.0 M"
          },
          {
            "key": "Hexagon: 120° × 3 = 360° tiles without gaps",
            "marks": "1.0 M"
          },
          {
            "key": "Octagon: 135° leaves 90° gap (cannot tile alone)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "1/3 Turn and 1/6 Turn Rotations",
        "q": "Through how many degrees does a shape rotate in:<br>(a) A 1/3 turn<br>(b) A 1/6 turn<br>(c) Which regular shape looks identical after a 1/3 turn?<br>(d) Which shape looks identical after a 1/6 turn?",
        "ans": "<strong>Rotational Angles:</strong><br>\n• <strong>(a) 1/3 Turn:</strong> 360° ÷ 3 = <strong>120°</strong>.<br>\n• <strong>(b) 1/6 Turn:</strong> 360° ÷ 6 = <strong>60°</strong>.<br>\n• <strong>(c) Identical after 1/3 turn:</strong> An <strong>Equilateral Triangle</strong> (has 3-fold rotational symmetry).<br>\n• <strong>(d) Identical after 1/6 turn:</strong> A <strong>Regular Hexagon</strong> (or 6-pointed star, has 6-fold symmetry).",
        "marks": 3,
        "rubric": [
          {
            "key": "1/3 turn = 120°; 1/6 turn = 60°",
            "marks": "1.5 M"
          },
          {
            "key": "Equilateral triangle and Regular hexagon",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Triangular Numbers Pattern",
        "q": "Look at the pattern of triangular numbers (dots arranged in triangles):<br>1, 3, 6, 10, 15...<br>(a) Find the next two triangular numbers.<br>(b) What is the relationship between the sum of two consecutive triangular numbers?",
        "ans": "<strong>Triangular Numbers:</strong><br>\n• Differences are consecutive integers: +2, +3, +4, +5...<br>\n• <strong>(a) Next Two Numbers:</strong><br>\n- 15 + 6 = <strong>21</strong>.<br>\n- 21 + 7 = <strong>28</strong>.<br>\n• <strong>(b) Sum of Consecutive Triangular Numbers:</strong><br>\n- 1 + 3 = 4 = 2² (Square number)<br>\n- 3 + 6 = 9 = 3² (Square number)<br>\n- 6 + 10 = 16 = 4² (Square number)<br>\n- 10 + 15 = 25 = 5² (Square number)<br>\n<strong>Rule:</strong> The sum of any two consecutive triangular numbers is always a <strong>Square Number</strong>!",
        "marks": 3,
        "rubric": [
          {
            "key": "Next two: 21, 28",
            "marks": "1.5 M"
          },
          {
            "key": "Sum of two consecutive gives square numbers",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Magic Triangle • Perimeter Sum",
        "q": "Fill in the numbers 1, 2, 3, 4, 5, 6 along the three sides of a triangle (3 numbers on each side) so that the sum of the numbers on each side is 9.",
        "ans": "<strong>Magic Triangle Solution (Side Sum = 9):</strong><br>\n1. Place the smallest numbers <strong>1, 2, 3 at the three corner vertices</strong>.<br>\n2. Corner sum = 1 + 2 + 3 = 6.<br>\n3. Sides:<br>\n• Side between 1 and 2: needs 9 - (1 + 2) = <strong>6</strong> in the middle.<br>\n• Side between 2 and 3: needs 9 - (2 + 3) = <strong>4</strong> in the middle.<br>\n• Side between 3 and 1: needs 9 - (3 + 1) = <strong>5</strong> in the middle.<br>\nCheck: 1+6+2 = 9; 2+4+3 = 9; 3+5+1 = 9. All numbers 1 to 6 used exactly once!",
        "marks": 3,
        "rubric": [
          {
            "key": "Corners: 1, 2, 3",
            "marks": "1.5 M"
          },
          {
            "key": "Middle numbers: 6, 4, 5 with side sum = 9",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Border Tiling Strip Patterns",
        "q": "A traditional border design repeats a motif: Triangle pointing UP, Square, Triangle pointing DOWN, Circle.<br>(a) What will be the 15th shape in this repeating pattern?<br>(b) What will be the 28th shape?",
        "ans": "<strong>Modulo Arithmetic in Repeating Motifs (Period = 4 shapes):</strong><br>\n• Pattern sequence: 1 = UP, 2 = Square, 3 = DOWN, 4 = Circle.<br>\n• <strong>(a) 15th Shape:</strong> 15 ÷ 4 = 3 with remainder 3. Position 3 is <strong>Triangle pointing DOWN</strong>.<br>\n• <strong>(b) 28th Shape:</strong> 28 ÷ 4 = 7 with remainder 0 (exact multiple of 4). Position 4 is <strong>Circle</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Period = 4 shapes identified",
            "marks": "1.0 M"
          },
          {
            "key": "15th shape = Triangle pointing DOWN",
            "marks": "1.0 M"
          },
          {
            "key": "28th shape = Circle",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Number Grid Patterns • Magic Multiplications",
        "q": "Study the multiplication pattern:<br>11 × 11 = 121<br>111 × 111 = 12321<br>1111 × 1111 = 1234321<br>(a) What will be the value of 11111 × 11111 without doing long multiplication?<br>(b) Explain the symmetry in the digits of the product.",
        "ans": "<strong>Symmetric Number Products (Repunits):</strong><br>\n• <strong>(a) Product:</strong> 11,111 × 11,111 = <strong>123454321</strong> (One crore twenty-three lakh forty-five thousand four hundred twenty-one).<br>\n• <strong>(b) Symmetry Explanation:</strong> The digits count up from 1 to the number of ones in the factor (5 digits: 1, 2, 3, 4, 5) and then mirror backwards symmetrically down to 1 (4, 3, 2, 1), forming a numerical palindrome.",
        "marks": 3,
        "rubric": [
          {
            "key": "Product = 123454321",
            "marks": "1.5 M"
          },
          {
            "key": "Clear explanation of ascending-descending palindrome symmetry",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Rotational Symmetry Order",
        "q": "State the order of rotational symmetry for each of the following regular figures:<br>(a) Square<br>(b) Regular Pentagon<br>(c) Regular Octagon<br>(d) Circle",
        "ans": "<strong>Order of Rotational Symmetry:</strong><br>\n• <strong>(a) Square:</strong> Rotates onto itself 4 times in a 360° turn (every 90°) → <strong>Order 4</strong>.<br>\n• <strong>(b) Regular Pentagon:</strong> Rotates onto itself 5 times (every 72°) → <strong>Order 5</strong>.<br>\n• <strong>(c) Regular Octagon:</strong> Rotates onto itself 8 times (every 45°) → <strong>Order 8</strong>.<br>\n• <strong>(d) Circle:</strong> Any rotation around its center leaves it unchanged → <strong>Infinite order</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Square = 4; Pentagon = 5",
            "marks": "1.5 M"
          },
          {
            "key": "Octagon = 8; Circle = Infinite",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Fibonacci Sequence • Nature's Pattern",
        "q": "Observe the Fibonacci sequence where each term is the sum of the two preceding terms:<br>1, 1, 2, 3, 5, 8, 13...<br>(a) Find the next three numbers in the sequence.<br>(b) Where in nature can this pattern be observed?",
        "ans": "<strong>Fibonacci Sequence:</strong><br>\n• <strong>(a) Next Three Numbers:</strong><br>\n- 8 + 13 = <strong>21</strong>.<br>\n- 13 + 21 = <strong>34</strong>.<br>\n- 21 + 34 = <strong>55</strong>.<br>\n• <strong>(b) Occurrences in Nature:</strong> Number of petals on flowers (daisies, sunflowers), spiral arrangement of sunflower seeds, pine cone scales, and pineapple skins.",
        "marks": 3,
        "rubric": [
          {
            "key": "Next three: 21, 34, 55",
            "marks": "1.5 M"
          },
          {
            "key": "Two natural examples (sunflower seeds, pine cones)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Alphabet Symmetry • Rotational vs Line",
        "q": "Among the capital English letters: <strong>A, H, M, O, X, Z</strong>:<br>(a) Which letters have both vertical and horizontal lines of symmetry?<br>(b) Which letter has rotational symmetry of order 2 but NO line of symmetry?",
        "ans": "<strong>Letter Symmetry Analysis:</strong><br>\n• <strong>(a) Both Vertical & Horizontal Lines of Symmetry:</strong> <strong>H, O, X</strong> (can be reflected across both axes).<br>\n• <strong>(b) Rotational Symmetry but No Line Symmetry:</strong> <strong>Z</strong>.<br>\n- Letter 'Z' has no axis of reflection (horizontal or vertical reflection reverses the diagonal), but rotating by 180° (half-turn) reproduces an identical 'Z'.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): H, O, X",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): Z with rotational explanation",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Magic Square of Sum 30",
        "q": "A 3×3 magic square has numbers 6, 7, 8, 9, 10, 11, 12, 13, 14. What number must be at the center, and what is the constant magic sum of each row?",
        "ans": "<strong>Calculations:</strong><br>\n1. Total sum of numbers from 6 to 14 = (6 + 14) × 9 ÷ 2 = 20 × 4.5 = 90.<br>\n2. <strong>Row Sum (Magic Constant):</strong> 90 ÷ 3 rows = <strong>30</strong>.<br>\n3. <strong>Center Number:</strong> Median value = (6 + 14) ÷ 2 = <strong>10</strong>.<br>\nCheck: 3 × Center number = 3 × 10 = 30 = Magic constant.",
        "marks": 3,
        "rubric": [
          {
            "key": "Magic sum = 30",
            "marks": "1.5 M"
          },
          {
            "key": "Center number = 10 with median proof",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "HOTS • Number Pattern Puzzle",
        "q": "Find the missing number in the sequence: 2, 6, 12, 20, 30, _____, 56. Explain the mathematical rule.",
        "ans": "<strong>Pattern Analysis:</strong><br>\n• Difference sequence: 6 - 2 = 4, 12 - 6 = 6, 20 - 12 = 8, 30 - 20 = 10.<br>\n• The difference increases by +2 each time (consecutive even numbers: 4, 6, 8, 10, 12, 14).<br>\n• Next difference must be +12: 30 + 12 = <strong>42</strong>.<br>\n• Verification: 42 + 14 = 56. Correct!<br>\n<em>Alternative Rule: $n \\times (n + 1)$: 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, <strong>6×7=42</strong>, 7×8=56.</em>",
        "marks": 3,
        "rubric": [
          {
            "key": "Missing number = 42",
            "marks": "1.5 M"
          },
          {
            "key": "Clear mathematical rule (difference sequence or n(n+1))",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Windmill Blade Rotations",
        "q": "A windmill has 4 identical blades arranged symmetrically.<br>(a) What fraction of a turn brings each blade to the position of the next blade?<br>(b) How many degrees of rotation is that?<br>(c) Does the windmill look identical after a 1/4 turn, 1/2 turn, and 3/4 turn?",
        "ans": "<strong>Rotational Geometry of 4-Blade Windmill:</strong><br>\n• <strong>(a) Fraction of a Turn:</strong> 4 blades = <strong>1/4 turn</strong>.<br>\n• <strong>(b) Degrees:</strong> 360° ÷ 4 = <strong>90°</strong>.<br>\n• <strong>(c) Symmetry:</strong> <strong>Yes</strong>, it has 4-fold rotational symmetry and looks identical after a 1/4 turn (90°), 1/2 turn (180°), and 3/4 turn (270°).",
        "marks": 3,
        "rubric": [
          {
            "key": "Fraction = 1/4 turn",
            "marks": "1.0 M"
          },
          {
            "key": "Degrees = 90°",
            "marks": "1.0 M"
          },
          {
            "key": "Identical at 90°, 180°, 270°",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Rangoli Geometric Tessellation",
        "q": "In an Indian rangoli pattern, equilateral triangles and rhombuses are combined to form a star.<br>(a) How many equilateral triangles are required to make a regular hexagon?<br>(b) What is the sum of angles around the central meeting point?",
        "ans": "<strong>Geometric Properties:</strong><br>\n• <strong>(a) Number of Triangles:</strong> Exactly <strong>6 equilateral triangles</strong> meet at a central vertex to form a regular hexagon.<br>\n• <strong>(b) Sum of Angles:</strong> Each equilateral triangle has an angle of 60°. 6 × 60° = <strong>360° (a complete circle)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "6 equilateral triangles",
            "marks": "1.5 M"
          },
          {
            "key": "Sum of angles = 360°",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Calendar Number Patterns",
        "q": "Look at any 3×3 square of dates on a monthly calendar (e.g. dates 1 to 3, 8 to 10, 15 to 17).<br>(a) How can you instantly find the sum of all 9 dates using only the center number?<br>(b) If the center date is 14, what is the sum of all 9 numbers in that 3×3 square?",
        "ans": "<strong>Calendar Math Trick:</strong><br>\n• <strong>(a) Rule:</strong> Because calendar numbers are symmetrically distributed horizontally (±1) and vertically (±7), the sum of all 9 numbers is always exactly <strong>9 times the center number</strong> ($9 \\times C$).<br>\n• <strong>(b) Calculation for Center = 14:</strong> Sum = 9 × 14 = <strong>126</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Rule: Sum = 9 × center number",
            "marks": "1.5 M"
          },
          {
            "key": "Sum = 9 × 14 = 126",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "True or False with Pattern Reasoning",
        "q": "State True or False with reasoning:<br>(a) An equilateral triangle looks identical after a 1/2 turn.<br>(b) Any number multiplied by 9 has the sum of its digits equal to 9 or a multiple of 9.<br>(c) A circle has only 4 lines of symmetry.",
        "ans": "<strong>Justifications:</strong><br>\n• <strong>(a) False:</strong> In a 1/2 turn (180°), an equilateral triangle flips upside down with its base at the top and apex at the bottom.<br>\n• <strong>(b) True:</strong> By the divisibility rule for 9, the digital sum of any multiple of 9 is always 9, 18, 27... (a multiple of 9).<br>\n• <strong>(c) False:</strong> A circle has <strong>infinite lines of symmetry</strong> (any diameter passing through the center is a line of symmetry).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): False with upside-down reason",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): True with divisibility rule",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): False (infinite lines of symmetry)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comprehensive Pattern Review",
        "q": "A student creates a spiral pattern of squares starting with side 1 cm, then 2 cm, then 3 cm, then 5 cm, then 8 cm.<br>(a) What will be the side of the next two squares?<br>(b) What is this famous series called, and what are the areas of the first four squares?",
        "ans": "<strong>Fibonacci Square Spirals:</strong><br>\n• <strong>(a) Next Sides:</strong> Sum of previous two sides: 5 + 8 = <strong>13 cm</strong>, then 8 + 13 = <strong>21 cm</strong>.<br>\n• <strong>(b) Series & Areas:</strong><br>\n- Name: <strong>Fibonacci Sequence</strong>.<br>\n- Area of 1 cm square: 1 × 1 = <strong>1 cm²</strong>.<br>\n- Area of 2 cm square: 2 × 2 = <strong>4 cm²</strong>.<br>\n- Area of 3 cm square: 3 × 3 = <strong>9 cm²</strong>.<br>\n- Area of 5 cm square: 5 × 5 = <strong>25 cm²</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Sides: 13 cm, 21 cm",
            "marks": "1.5 M"
          },
          {
            "key": "Fibonacci sequence & areas: 1, 4, 9, 25 cm²",
            "marks": "1.5 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Competency Question: Heritage Haveli Flooring Tile Design",
      "text": "An architect designs a courtyard floor measuring 12 metres by 8 metres using rectangular tiles of size 40 cm by 20 cm.",
      "question": "(a) What is the area of the courtyard in square centimetres?<br>(b) What is the area of one tile?<br>(c) How many tiles are needed to pave the entire floor without gaps?",
      "answer": "<div class=\"cbq-sol-label\">Suggested Model Solution:</div>\r\n          \r\n <div class=\"step\"><strong>(a) Courtyard Area:</strong> 1,200 × 800 = <strong>9,60,000 sq cm</strong>.</div>\r\n <div class=\"step\"><strong>(b) Tile Area:</strong> 40 × 20 = <strong>800 sq cm</strong>.</div>\r\n <div class=\"step\"><strong>(c) Number of Tiles:</strong> 960,000/800 = <strong>1,200 tiles</strong>.",
      "rubric": "1M concept identification + 1M step execution + 1M conclusion"
    }
  },
  {
    "id": "mela8",
    "num": 8,
    "unit": "Chapter 8 • Measurement of Mass & Weight Comparison",
    "title": "Weight and Capacity",
    "subtitle": "भार और धारिता (किलोग्राम-ग्राम, बाट संतुलन एवं तराजू)",
    "concepts": [
      "Units of mass: 1 Kilogram (kg) = 1,000 grams (g).",
      "Benchmark weights: 1/2 kg = 500 g, 1/4 kg = 250 g, 3/4 kg = 750 g.",
      "Balancing two-pan scales: Left Pan Weight = Right Pan Weight.",
      "Solving multi-step grocery word problems involving weights and prices per kg."
    ],
    "svg": "<svg viewBox=\"0 0 600 170\" width=\"100%\" height=\"170\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"170\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Two-Pan Balance Scale in Perfect Equilibrium (1 kg = 1,000 g)</text>\r\n        <g transform=\"translate(300, 45)\">\r\n          <line x1=\"-160\" y1=\"20\" x2=\"160\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"4\"/>\r\n          <polygon points=\"0,20 -12,70 12,70\" fill=\"#64748b\"/>\r\n          <circle cx=\"0\" cy=\"20\" r=\"5\" fill=\"#f59e0b\"/>\r\n          <rect x=\"-30\" y=\"70\" width=\"60\" height=\"10\" rx=\"3\" fill=\"#334155\"/>\r\n          <line x1=\"-140\" y1=\"20\" x2=\"-160\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\r\n          <line x1=\"-140\" y1=\"20\" x2=\"-120\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\r\n          <path d=\"M -170 60 Q -140 78 -110 60\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"2\"/>\r\n          <rect x=\"-155\" y=\"38\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#d97706\"/>\r\n          <text x=\"-140\" y=\"52\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">1 kg</text>\r\n          <line x1=\"140\" y1=\"20\" x2=\"120\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\r\n          <line x1=\"140\" y1=\"20\" x2=\"160\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\r\n          <path d=\"M 110 60 Q 140 78 170 60\" fill=\"#e2e8f0\" stroke=\"#0f172a\" stroke-width=\"2\"/>\r\n          <rect x=\"116\" y=\"44\" width=\"22\" height=\"16\" rx=\"2\" fill=\"#2563eb\"/>\r\n          <text x=\"127\" y=\"56\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">500g</text>\r\n          <rect x=\"142\" y=\"44\" width=\"22\" height=\"16\" rx=\"2\" fill=\"#2563eb\"/>\r\n          <text x=\"153\" y=\"56\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">500g</text>\r\n        </g>\r\n        <text x=\"300\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">Equilibrium: Left Pan (1 kg = 1,000 g) = Right Pan (500 g + 500 g = 1,000 g)</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Standard Weights • Balancing Beam Balance",
        "q": "(a) How many 200 g weights are needed to balance a 1 kg block of sugar?<br>(b) How many 250 g weights balance a 2 kg weight?<br>(c) A grocer has weights of 500 g, 200 g, and 100 g only. How can he weigh exactly 800 g of dal using minimum weights?",
        "ans": "<strong>Weight Balancing (1 kg = 1,000 g):</strong><br>\n• <strong>(a) For 1 kg (1,000 g):</strong> 1,000 ÷ 200 = <strong>5 weights of 200 g</strong>.<br>\n• <strong>(b) For 2 kg (2,000 g):</strong> 2,000 ÷ 250 = <strong>8 weights of 250 g</strong>.<br>\n• <strong>(c) Weighing 800 g:</strong> Combine one 500 g weight, one 200 g weight, and one 100 g weight: 500 + 200 + 100 = <strong>800 g (3 weights total)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 5 weights",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 8 weights",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 500 g + 200 g + 100 g",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Vegetable Shopping • Multi-Item Bill",
        "q": "Mrs. Sharma buys:<br>• 2.5 kg onions at ₹36 per kg<br>• 1.5 kg tomatoes at ₹40 per kg<br>• 750 g ginger at ₹120 per kg<br>(a) Find the cost of each item.<br>(b) Calculate her total bill.<br>(c) If she pays with a ₹500 note, how much change is refunded?",
        "ans": "<strong>Cost Calculations:</strong><br>\n• <strong>(a) Individual Costs:</strong><br>\n- Onions: 2.5 × ₹36 = <strong>₹90</strong>.<br>\n- Tomatoes: 1.5 × ₹40 = <strong>₹60</strong>.<br>\n- Ginger: 750 g = 0.75 kg. Cost = 0.75 × ₹120 = <strong>₹90</strong>.<br>\n• <strong>(b) Total Bill:</strong> ₹90 + ₹60 + ₹90 = <strong>₹240</strong>.<br>\n• <strong>(c) Change:</strong> ₹500 - ₹240 = <strong>₹260</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Onions ₹90, Tomatoes ₹60, Ginger ₹90",
            "marks": "1.5 M"
          },
          {
            "key": "Total bill = ₹240",
            "marks": "0.75 M"
          },
          {
            "key": "Change = ₹260",
            "marks": "0.75 M"
          }
        ]
      },
      {
        "category": "Pan Balance • Subtraction Weighing Trick",
        "q": "A grocer has weights of 5 kg and 2 kg only. Explain how he can weigh exactly 3 kg of rice using a two-pan balance in a single measurement.",
        "ans": "<strong>Pan Balance Subtraction Principle:</strong><br>\n1. Place the <strong>5 kg weight on the left pan</strong>.<br>\n2. Place the <strong>2 kg weight on the right pan</strong>.<br>\n3. Pour rice into the right pan (alongside the 2 kg weight) until both pans balance perfectly.<br>\n4. Since Left Pan = Right Pan:<br>\n5 kg = 2 kg + Rice Weight → Rice Weight = 5 kg - 2 kg = <strong>3 kg of rice</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "5 kg on one pan, 2 kg on other pan",
            "marks": "1.5 M"
          },
          {
            "key": "5 - 2 = 3 kg balance equation",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Unit Conversions • Kilograms & Grams",
        "q": "Convert:<br>(a) 4 kg 350 g into grams<br>(b) 8,075 g into kilograms and grams<br>(c) 3/4 kg into grams<br>(d) 2.25 kg into grams",
        "ans": "<strong>Conversions (1 kg = 1,000 g):</strong><br>\n• <strong>(a) 4 kg 350 g:</strong> (4 × 1,000) + 350 = <strong>4,350 g</strong>.<br>\n• <strong>(b) 8,075 g:</strong> 8,000 g + 75 g = <strong>8 kg 75 g</strong>.<br>\n• <strong>(c) 3/4 kg:</strong> 3/4 of 1,000 = 1,000 × 3 ÷ 4 = <strong>750 g</strong>.<br>\n• <strong>(d) 2.25 kg:</strong> 2.25 × 1,000 = <strong>2,250 g</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parts (a) & (b): 4,350 g, 8 kg 75 g",
            "marks": "1.5 M"
          },
          {
            "key": "Parts (c) & (d): 750 g, 2,250 g",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Water Tank Capacity • In-Text Problem",
        "q": "An overhead rooftop water tank has a capacity of 1,200 litres.<br>(a) A family uses 350 litres for washing, 180 litres for cooking, and 420 litres for bathing daily. How many litres are consumed in total?<br>(b) How many litres of water remain in the tank?",
        "ans": "<strong>Water Consumption:</strong><br>\n• <strong>(a) Total Used:</strong> 350 L + 180 L + 420 L = <strong>950 litres</strong>.<br>\n• <strong>(b) Remaining Water:</strong> 1,200 L - 950 L = <strong>250 litres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total used = 950 L",
            "marks": "1.5 M"
          },
          {
            "key": "Remaining = 250 L",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Grain Bag Packaging • Division",
        "q": "A farmer harvests 6 quintals of wheat (1 quintal = 100 kg). He packs the wheat into smaller sacks of 25 kg each.<br>(a) Find the total weight of wheat in kilograms.<br>(b) How many 25 kg sacks does he fill completely?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Total Kilograms:</strong> 6 quintals × 100 kg/quintal = <strong>600 kg</strong>.<br>\n• <strong>(b) Number of Sacks:</strong> 600 kg ÷ 25 kg/sack = <strong>24 sacks</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total = 600 kg",
            "marks": "1.5 M"
          },
          {
            "key": "Sacks = 24",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Medicine Dropper • Dosage Calculations",
        "q": "A doctor prescribes 5 mL of cough syrup 3 times a day for a child for 5 days.<br>(a) How many mL does the child take in one day?<br>(b) What is the total volume of cough syrup needed for the 5-day course?<br>(c) Will a 100 mL bottle be sufficient? How much syrup will remain in the bottle?",
        "ans": "<strong>Dosage Calculations:</strong><br>\n• <strong>(a) Daily Dose:</strong> 3 times × 5 mL = <strong>15 mL per day</strong>.<br>\n• <strong>(b) Total for 5 Days:</strong> 5 days × 15 mL = <strong>75 mL</strong>.<br>\n• <strong>(c) Bottle Sufficiency:</strong> <strong>Yes</strong>, 75 mL < 100 mL, so a 100 mL bottle is sufficient.<br>\n- Remaining syrup = 100 mL - 75 mL = <strong>25 mL remaining</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Daily dose = 15 mL",
            "marks": "1.0 M"
          },
          {
            "key": "Total 5-day dose = 75 mL",
            "marks": "1.0 M"
          },
          {
            "key": "Sufficient with 25 mL left",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "School Mid-Day Meal • Ration Accounting",
        "q": "In a primary school with 140 students, each student receives 100 g of rice and 30 g of dal daily under the Mid-Day Meal scheme.<br>(a) How many kilograms of rice are cooked daily?<br>(b) How many kilograms of dal are cooked daily?<br>(c) Calculate the total monthly requirement of rice for 22 school working days.",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Daily Rice:</strong> 140 × 100 g = 14,000 g = <strong>14 kg of rice</strong>.<br>\n• <strong>(b) Daily Dal:</strong> 140 × 30 g = 4,200 g = <strong>4.2 kg (4 kg 200 g) of dal</strong>.<br>\n• <strong>(c) Monthly Rice (22 days):</strong> 22 × 14 kg = <strong>308 kg of rice</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Daily rice = 14 kg",
            "marks": "1.0 M"
          },
          {
            "key": "Daily dal = 4.2 kg",
            "marks": "1.0 M"
          },
          {
            "key": "Monthly rice = 308 kg",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Weight of Money • Coin Stacks",
        "q": "A new 5-rupee coin weighs 9 grams.<br>(a) What is the weight of a sack containing 1,000 such 5-rupee coins in kilograms?<br>(b) If a bag of 5-rupee coins weighs 4 kg 500 g, how many coins are in the bag?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Weight of 1,000 Coins:</strong> 1,000 × 9 g = 9,000 g = <strong>9 kg</strong>.<br>\n• <strong>(b) Number of Coins:</strong><br>\n- Total weight = 4 kg 500 g = 4,500 grams.<br>\n- Number of coins = 4,500 ÷ 9 g = <strong>500 coins</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Weight of 1,000 coins = 9 kg",
            "marks": "1.5 M"
          },
          {
            "key": "Number of coins = 500",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Bucket and Mug Problem",
        "q": "A bathing bucket has a capacity of 15 litres. A plastic mug holds 300 mL.<br>(a) How many full mugs of water are needed to fill the bucket completely?<br>(b) If 12 mugs of water are taken out of a full bucket, how many litres remain?",
        "ans": "<strong>Capacity Calculations (15 L = 15,000 mL):</strong><br>\n• <strong>(a) Mugs to Fill:</strong> 15,000 mL ÷ 300 mL = <strong>50 mugs</strong>.<br>\n• <strong>(b) Remaining Volume:</strong><br>\n- Water removed = 12 × 300 mL = 3,600 mL = 3.6 L.<br>\n- Water left = 15 L - 3.6 L = <strong>11.4 litres (11 L 400 mL)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "50 mugs to fill",
            "marks": "1.5 M"
          },
          {
            "key": "Water left = 11.4 L",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Comparing Heaviness • Metric Units",
        "q": "Arrange the following weights from heaviest to lightest:<br>2.8 kg, 2,750 g, 3 kg 50 g, 2,890 g, 3,000 g",
        "ans": "<strong>Converting all to Grams:</strong><br>\n• 2.8 kg = 2,800 g<br>\n• 2,750 g = 2,750 g<br>\n• 3 kg 50 g = 3,050 g<br>\n• 2,890 g = 2,890 g<br>\n• 3,000 g = 3,000 g<br>\nOrdering from largest to smallest: 3,050 g > 3,000 g > 2,890 g > 2,800 g > 2,750 g.<br>\n<strong>Descending Order: 3 kg 50 g > 3,000 g > 2,890 g > 2.8 kg > 2,750 g</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "All converted to grams",
            "marks": "1.5 M"
          },
          {
            "key": "Correct descending order",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Liquid Medicine Ampoule • Millilitres",
        "q": "A nurse has a 50 mL vial of vaccine. Each injection requires a dose of 0.5 mL.<br>(a) How many patients can be vaccinated from one vial?<br>(b) For a vaccination camp of 400 children, how many such vials must be opened?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Doses per Vial:</strong> 50 mL ÷ 0.5 mL = <strong>100 doses (100 patients)</strong>.<br>\n• <strong>(b) Vials Needed:</strong> 400 children ÷ 100 doses/vial = <strong>4 vials</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "100 patients per vial",
            "marks": "1.5 M"
          },
          {
            "key": "4 vials needed",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Elephant Weight vs Children Weight",
        "q": "A baby elephant weighs 240 kg. A Class 5 child has an average weight of 30 kg.<br>(a) How many children together weigh the same as the baby elephant?<br>(b) If an adult elephant weighs 3,600 kg, how many baby elephants equal the weight of one adult elephant?",
        "ans": "<strong>Comparison:</strong><br>\n• <strong>(a) Children Equivalent:</strong> 240 kg ÷ 30 kg = <strong>8 children</strong>.<br>\n• <strong>(b) Adult vs Baby Elephant:</strong> 3,600 kg ÷ 240 kg = <strong>15 baby elephants</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "8 children",
            "marks": "1.5 M"
          },
          {
            "key": "15 baby elephants",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Teaspoon and Tablespoon Volumes",
        "q": "In household cooking: 1 teaspoon holds 5 mL, and 1 tablespoon holds 15 mL.<br>(a) How many teaspoons equal 1 tablespoon?<br>(b) A recipe requires 60 mL of olive oil. How many tablespoons is that?<br>(c) How many teaspoons of vanilla essence are needed to measure 25 mL?",
        "ans": "<strong>Kitchen Measurements:</strong><br>\n• <strong>(a) Teaspoons in a Tablespoon:</strong> 15 mL ÷ 5 mL = <strong>3 teaspoons</strong>.<br>\n• <strong>(b) 60 mL Olive Oil:</strong> 60 ÷ 15 = <strong>4 tablespoons</strong>.<br>\n• <strong>(c) 25 mL Vanilla:</strong> 25 ÷ 5 = <strong>5 teaspoons</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 3 teaspoons",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 4 tablespoons",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 5 teaspoons",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Postal Parcel Weight Tariff",
        "q": "India Post parcel charges are: ₹20 for the first 50 grams, and ₹10 for every additional 50 grams (or fraction thereof).<br>(a) Find the postal charge for a book parcel weighing 180 grams.<br>(b) Find the postal charge for a parcel weighing 320 grams.",
        "ans": "<strong>Postal Step Tariff:</strong><br>\n• <strong>(a) 180 g Parcel:</strong><br>\n- First 50 g: ₹20.<br>\n- Remaining weight = 180 - 50 = 130 g.<br>\n- Additional 50 g slabs = 130 ÷ 50 = 2.6 → 3 slabs.<br>\n- Surcharge = 3 × ₹10 = ₹30.<br>\n- Total postage = ₹20 + ₹30 = <strong>₹50</strong>.<br>\n• <strong>(b) 320 g Parcel:</strong><br>\n- First 50 g: ₹20.<br>\n- Remaining = 320 - 50 = 270 g.<br>\n- Additional slabs = 270 ÷ 50 = 5.4 → 6 slabs.<br>\n- Surcharge = 6 × ₹10 = ₹60.<br>\n- Total postage = ₹20 + ₹60 = <strong>₹80</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "180 g parcel = ₹50",
            "marks": "1.5 M"
          },
          {
            "key": "320 g parcel = ₹80",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Dripping Tap Water Waste",
        "q": "A leaking tap drips 20 mL of water every minute.<br>(a) How many mL of water are wasted in 1 hour?<br>(b) How many litres of water are wasted in a 24-hour day?<br>(c) If water is valued at ₹5 per 1,000 litres, what is the cost of water lost in a month of 30 days?",
        "ans": "<strong>Water Wastage Calculations:</strong><br>\n• <strong>(a) In 1 Hour (60 min):</strong> 20 mL × 60 = <strong>1,200 mL (1.2 Litres)</strong>.<br>\n• <strong>(b) In 1 Day (24 hours):</strong> 1.2 L × 24 = <strong>28.8 litres wasted daily</strong>.<br>\n• <strong>(c) In 30 Days:</strong> 28.8 L × 30 = 864 litres.<br>\n- Financial loss = (864 ÷ 1,000) × ₹5 = <strong>₹4.32</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1 hour = 1.2 L",
            "marks": "1.0 M"
          },
          {
            "key": "1 day = 28.8 L",
            "marks": "1.0 M"
          },
          {
            "key": "Monthly wastage = 864 L",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Weight of Liquids • Water vs Honey",
        "q": "A glass jar holds 500 mL of liquid. When filled with pure water, the liquid weighs 500 g. When filled with pure bee honey, the liquid weighs 710 g.<br>(a) Which liquid is denser/heavier for the same volume?<br>(b) By how many grams does 1 litre of honey weigh more than 1 litre of water?",
        "ans": "<strong>Density Analysis:</strong><br>\n• <strong>(a) Heavier Liquid:</strong> For 500 mL, honey weighs 710 g while water weighs 500 g. Therefore, <strong>honey is denser and heavier</strong>.<br>\n• <strong>(b) Difference per Litre (1,000 mL):</strong><br>\n- Weight of 1 L water = 2 × 500 g = 1,000 g.<br>\n- Weight of 1 L honey = 2 × 710 g = 1,420 g.<br>\n- Difference = 1,420 g - 1,000 g = <strong>420 grams heavier per litre</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Honey is heavier",
            "marks": "1.5 M"
          },
          {
            "key": "1 L honey is 420 g heavier than water",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Flour Mill Packing • Sacks and Bags",
        "q": "A flour mill processes 1,500 kg of wheat into atta. 5% weight is lost as bran during husk separation.<br>(a) Find the weight of atta produced.<br>(b) If the atta is packed into bags of 10 kg each, how many bags are packed?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Atta Produced:</strong><br>\n- Loss = 5% of 1,500 kg = 75 kg.<br>\n- Net atta = 1,500 kg - 75 kg = <strong>1,425 kg</strong>.<br>\n• <strong>(b) Bags Packed:</strong> 1,425 kg ÷ 10 kg/bag = <strong>142 full bags (with 5 kg remaining)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Net atta = 1,425 kg",
            "marks": "1.5 M"
          },
          {
            "key": "142 bags with 5 kg remainder",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "HOTS • Weight Riddle",
        "q": "A brick balances with 3/4 of a brick plus 3/4 of a kilogram on a beam balance. How much does the brick weigh in kilograms?",
        "ans": "<strong>Algebraic Derivation:</strong><br>\n1. Let the weight of 1 whole brick be $W$ kg.<br>\n2. Given balance condition: $W = \\frac{3}{4}W + \\frac{3}{4}\\text{ kg}$.<br>\n3. Subtract $\\frac{3}{4}W$ from both sides:<br>\n$W - \\frac{3}{4}W = \\frac{3}{4}\\text{ kg} \\rightarrow \\frac{1}{4}W = \\frac{3}{4}\\text{ kg}$.<br>\n4. Multiply both sides by 4: $W = 4 \\times \\frac{3}{4} = \\mathbf{3\\text{ kg}}$.<br>\n5. <strong>Verification:</strong> 3/4 of 3 kg = 2.25 kg. 2.25 kg + 0.75 kg = 3.0 kg. Balanced!",
        "marks": 3,
        "rubric": [
          {
            "key": "Equation: W = (3/4)W + 0.75",
            "marks": "1.5 M"
          },
          {
            "key": "W = 3 kg with verification",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Juice Dispenser Refill",
        "q": "A school sports day beverage cooler holds 25 litres of fresh lemon squash. The school serves the drink in 200 mL paper cups.<br>(a) How many students can be served from one full cooler?<br>(b) If 160 cups are consumed, how many litres of lemon squash remain in the cooler?",
        "ans": "<strong>Calculations (25 L = 25,000 mL):</strong><br>\n• <strong>(a) Total Cups:</strong> 25,000 mL ÷ 200 mL = <strong>125 cups</strong>.<br>\n• <strong>(b) Consumption Analysis:</strong> Since 1 cooler holds only 125 cups, serving 160 cups requires more than 1 cooler (32 litres total). For 125 cups from 1 cooler, all 25 L are used. If 160 cups were served from a larger reservoir, 160 × 200 mL = 32 L were used.",
        "marks": 3,
        "rubric": [
          {
            "key": "125 cups per 25 L cooler",
            "marks": "1.5 M"
          },
          {
            "key": "160 cups requires 32 L (or 0 left with refill noted)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Fuel Weight in Airplanes",
        "q": "Aviation turbine fuel has a density such that 1 litre weighs approximately 800 grams (0.8 kg).<br>(a) Find the weight in kg of 500 litres of aviation fuel.<br>(b) A plane takes on 4,000 kg of fuel. How many litres were pumped into its wings?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Weight of 500 L:</strong> 500 L × 0.8 kg/L = <strong>400 kg</strong>.<br>\n• <strong>(b) Litres for 4,000 kg:</strong> 4,000 kg ÷ 0.8 kg/L = <strong>5,000 litres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "500 L weighs 400 kg",
            "marks": "1.5 M"
          },
          {
            "key": "4,000 kg equals 5,000 L",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Math • Capacity Halving and Doubling",
        "q": "Calculate quickly:<br>(a) Half of 1.5 Litres in millilitres<br>(b) Double of 750 mL in Litres<br>(c) 1/4 of 1 Litre in millilitres",
        "ans": "<strong>Mental Calculations:</strong><br>\n• <strong>(a) Half of 1.5 L:</strong> 1,500 mL ÷ 2 = <strong>750 mL</strong>.<br>\n• <strong>(b) Double of 750 mL:</strong> 750 × 2 = 1,500 mL = <strong>1.5 Litres</strong>.<br>\n• <strong>(c) 1/4 of 1 L:</strong> 1,000 mL ÷ 4 = <strong>250 mL</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 750 mL",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 1.5 L",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 250 mL",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "True or False with Measurement Reason",
        "q": "State True or False with reasoning:<br>(a) 1,500 grams is heavier than 1.45 kilograms.<br>(b) 1 millilitre equals 1 cubic centimetre (1 cm³).<br>(c) A standard 200 mL glass holds more than 1/4 litre of water.",
        "ans": "<strong>Justifications:</strong><br>\n• <strong>(a) True:</strong> 1.45 kg = 1,450 g. Since 1,500 g > 1,450 g, it is heavier.<br>\n• <strong>(b) True:</strong> By scientific and metric definition, 1 mL is exactly the volume of a cube with 1 cm sides (1 cm × 1 cm × 1 cm = 1 cm³).<br>\n• <strong>(c) False:</strong> 1/4 Litre = 1,000 ÷ 4 = 250 mL. Since 200 mL < 250 mL, it holds less than 1/4 litre.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): True with gram comparison",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): True with 1 cm³ definition",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): False (200 mL < 250 mL)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comprehensive Chapter Review",
        "q": "A relief camp receives a consignment of provisions:<br>• 1.2 tonnes of rice (1 tonne = 1,000 kg)<br>• 450 kg of pulses<br>• 200 cans of cooking oil of 5 Litres each<br>(a) Find the total weight of food grains (rice + pulses) in kilograms.<br>(b) Find the total volume of cooking oil in Litres.<br>(c) If 500 families share the provisions equally, how much rice and oil does each family receive?",
        "ans": "<strong>Relief Camp Provision Distribution:</strong><br>\n• <strong>(a) Food Grains Weight:</strong><br>\n- Rice = 1.2 × 1,000 kg = 1,200 kg.<br>\n- Total grains = 1,200 kg + 450 kg = <strong>1,650 kg</strong>.<br>\n• <strong>(b) Total Oil:</strong> 200 cans × 5 L = <strong>1,000 Litres</strong>.<br>\n• <strong>(c) Per Family Share (500 Families):</strong><br>\n- Rice = 1,200 kg ÷ 500 = <strong>2.4 kg of rice per family</strong>.<br>\n- Oil = 1,000 L ÷ 500 = <strong>2 Litres of oil per family</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Grains = 1,650 kg",
            "marks": "1.0 M"
          },
          {
            "key": "Oil = 1,000 L",
            "marks": "1.0 M"
          },
          {
            "key": "Per family: 2.4 kg rice, 2 L oil",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Competency Question: Post Office Parcel Weighing Slab",
      "text": "A post office charges ₹20 for a parcel weighing up to 50 g, and ₹10 for every additional 50 g or fraction thereof.",
      "question": "How much postage stamp value must be affixed to send a book parcel weighing 380 grams?",
      "answer": "<div class=\"cbq-sol-label\">Suggested Model Solution:</div>\r\n          \r\n <div class=\"step\">First 50 g = ₹20. Remaining = 380 - 50 = 330 g.<br>\r\n Additional slabs = 330/50 = 6.6 ⇒ 7 slabs.<br>\r\n Cost = ₹20 + (7 × ₹10) = <strong>₹90</strong>.",
      "rubric": "1M concept identification + 1M step execution + 1M conclusion"
    }
  },
  {
    "id": "mela9",
    "num": 9,
    "unit": "Chapter 9 • Multiplication Arrays, Factor Trees & Division",
    "title": "Coconut Farm",
    "subtitle": "नारियल का बाग (गुणन व्यूह, गुणनखंड वृक्ष एवं विभाजन)",
    "concepts": [
      "Rectangular arrays: Visualizing multiplication as Rows × Columns.",
      "Box/Grid Multiplication Method: Breaking two-digit numbers by expanded form.",
      "Factor Trees: Finding prime factorizations and factor pairs of composite numbers.",
      "Division with remainder: Dividend = Divisor × Quotient + Remainder.",
      "(a) Number of faces: An open box without a top lid has 1 base + 4 side walls = 5 square faces.",
      "(b) Area of 1 face: $5\\text{ cm} \\times 5\\text{ cm} = 25\\text{ cm}^2$.",
      "Total surface area: $5 \\times 25\\text{ cm}^2 = \\mathbf{125\\text{ cm}^2}$."
    ],
    "svg": "<svg viewBox=\"0 0 600 170\" width=\"100%\" height=\"170\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"170\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Factor Tree of 60 &amp; Rectangular Array Model</text>\r\n        <g transform=\"translate(60, 35)\">\r\n          <circle cx=\"90\" cy=\"15\" r=\"16\" fill=\"#4f46e5\"/>\r\n          <text x=\"90\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">60</text>\r\n          <line x1=\"80\" y1=\"30\" x2=\"45\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\r\n          <line x1=\"100\" y1=\"30\" x2=\"135\" y2=\"55\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\r\n          <circle cx=\"45\" cy=\"65\" r=\"14\" fill=\"#059669\"/>\r\n          <text x=\"45\" y=\"70\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">6</text>\r\n          <circle cx=\"135\" cy=\"65\" r=\"14\" fill=\"#059669\"/>\r\n          <text x=\"135\" y=\"70\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">10</text>\r\n          <line x1=\"38\" y1=\"78\" x2=\"20\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\r\n          <line x1=\"52\" y1=\"78\" x2=\"70\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\r\n          <circle cx=\"20\" cy=\"110\" r=\"12\" fill=\"#d97706\"/>\r\n          <text x=\"20\" y=\"114\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">2</text>\r\n          <circle cx=\"70\" cy=\"110\" r=\"12\" fill=\"#d97706\"/>\r\n          <text x=\"70\" y=\"114\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">3</text>\r\n          <line x1=\"128\" y1=\"78\" x2=\"110\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\r\n          <line x1=\"142\" y1=\"78\" x2=\"160\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\r\n          <circle cx=\"110\" cy=\"110\" r=\"12\" fill=\"#d97706\"/>\r\n          <text x=\"110\" y=\"114\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">2</text>\r\n          <circle cx=\"160\" cy=\"110\" r=\"12\" fill=\"#d97706\"/>\r\n          <text x=\"160\" y=\"114\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">5</text>\r\n        </g>\r\n        <g transform=\"translate(320, 48)\">\r\n          <rect x=\"0\" y=\"0\" width=\"160\" height=\"75\" fill=\"#f1f5f9\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\r\n          <line x1=\"100\" y1=\"0\" x2=\"100\" y2=\"75\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\r\n          <line x1=\"0\" y1=\"45\" x2=\"160\" y2=\"45\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\r\n          <text x=\"50\" y=\"28\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#4f46e5\" text-anchor=\"middle\">20 × 10 = 200</text>\r\n          <text x=\"130\" y=\"28\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#059669\" text-anchor=\"middle\">4 × 10 = 40</text>\r\n          <text x=\"50\" y=\"64\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#d97706\" text-anchor=\"middle\">20 × 5 = 100</text>\r\n          <text x=\"130\" y=\"64\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">4 × 5 = 20</text>\r\n          <text x=\"210\" y=\"42\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">= 360</text>\r\n        </g>\r\n        <text x=\"300\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#475569\" text-anchor=\"middle\">Prime Factors of 60: 2 × 2 × 3 × 5 | Grid Multiplication: 24 × 15 = 200 + 40 + 100 + 20 = 360</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Coconut Orchard Planting • Multiplication Grid",
        "q": "A coconut grove has 24 rows of trees, with 18 trees in each row.<br>(a) Find the total number of coconut trees in the orchard using the box/grid multiplication method.<br>(b) Verify using the standard column multiplication algorithm.",
        "ans": "<strong>Multiplication Working (24 × 18):</strong><br>\n• <strong>(a) Box Method:</strong> Split 24 into 20 + 4, and 18 into 10 + 8:<br>\n- 20 × 10 = 200<br>\n- 4 × 10 = 40<br>\n- 20 × 8 = 160<br>\n- 4 × 8 = 32<br>\n- Sum = 200 + 40 + 160 + 32 = <strong>432 trees</strong>.<br>\n• <strong>(b) Column Method:</strong> 24 × 8 = 192; 24 × 10 = 240; 192 + 240 = <strong>432 trees</strong>. Both methods match!",
        "marks": 3,
        "rubric": [
          {
            "key": "Box method working",
            "marks": "1.5 M"
          },
          {
            "key": "Column verification = 432 trees",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Harvest Yield • Coconut Packing in Sacks",
        "q": "A farmer plucks 2,160 coconuts. He packs them into sacks of 45 coconuts each.<br>(a) How many full sacks are packed?<br>(b) If each sack is sold for ₹1,125, what is his total earnings from selling all the sacks?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Sacks Packed:</strong> 2,160 ÷ 45 = <strong>48 sacks</strong>.<br>\n• <strong>(b) Total Earnings:</strong> 48 sacks × ₹1,125 = <strong>₹54,000</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Sacks packed = 48",
            "marks": "1.5 M"
          },
          {
            "key": "Total revenue = ₹54,000",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Coconut Water Stalls • Daily Earnings",
        "q": "A roadside tender coconut vendor buys coconuts from the farm at ₹28 each and sells fresh coconut water at ₹45 each.<br>(a) What is his profit on 1 coconut?<br>(b) If he sells 65 coconuts on Sunday, calculate his total sales revenue and net profit.",
        "ans": "<strong>Profit & Revenue Calculations:</strong><br>\n• <strong>(a) Profit per Coconut:</strong> ₹45 - ₹28 = <strong>₹17 profit per coconut</strong>.<br>\n• <strong>(b) Sunday Sales (65 Coconuts):</strong><br>\n- Total revenue = 65 × ₹45 = <strong>₹2,925</strong>.<br>\n- Cost price = 65 × ₹28 = ₹1,820.<br>\n- Net profit = 65 × ₹17 = <strong>₹1,105</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Profit per coconut = ₹17",
            "marks": "1.0 M"
          },
          {
            "key": "Total revenue = ₹2,925",
            "marks": "1.0 M"
          },
          {
            "key": "Net profit = ₹1,105",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Sapling Nursery • Planting in Beds",
        "q": "A school gardener receives 576 plant saplings. He wants to plant them in 18 equal rows.<br>(a) How many saplings will be planted in each row?<br>(b) If he had 600 saplings instead, how many saplings would be in each row and how many would be left over?",
        "ans": "<strong>Division with and without Remainder:</strong><br>\n• <strong>(a) 576 Saplings in 18 Rows:</strong> 576 ÷ 18 = <strong>32 saplings per row</strong>.<br>\n• <strong>(b) 600 Saplings in 18 Rows:</strong><br>\n- 600 ÷ 18 gives quotient 33 with remainder 6 (18 × 33 = 594; 600 - 594 = 6).<br>\n- <strong>33 saplings per row with 6 saplings left over</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "576 ÷ 18 = 32 saplings",
            "marks": "1.5 M"
          },
          {
            "key": "600 ÷ 18 = 33 per row with remainder 6",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Coconut Oil Mill • Extraction Proportions",
        "q": "A copra oil mill extracts 1 litre of pure coconut oil from every 15 dry coconuts.<br>(a) How many litres of oil are produced from 1,800 coconuts?<br>(b) If 1 litre of coconut oil sells for ₹240, what is the value of the oil produced?",
        "ans": "<strong>Proportion Calculations:</strong><br>\n• <strong>(a) Oil Extracted:</strong> 1,800 ÷ 15 = <strong>120 litres of oil</strong>.<br>\n• <strong>(b) Market Value:</strong> 120 L × ₹240 = <strong>₹28,800</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Oil produced = 120 L",
            "marks": "1.5 M"
          },
          {
            "key": "Market value = ₹28,800",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Multi-digit Multiplication • Distributive Property",
        "q": "Evaluate using the distributive property: $48 \\times 25$. Show how you can compute this quickly by thinking of 25 as 100 ÷ 4.",
        "ans": "<strong>Mental Arithmetic Strategies:</strong><br>\n• Method 1 (Distributive): 48 × (20 + 5) = (48 × 20) + (48 × 5) = 960 + 240 = <strong>1,200</strong>.<br>\n• Method 2 (Quarter of 100): 25 = 100 ÷ 4.<br>\n48 × 25 = (48 × 100) ÷ 4 = 4,800 ÷ 4 = <strong>1,200</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Distributive method steps",
            "marks": "1.5 M"
          },
          {
            "key": "Quarter-hundred method = 1,200",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Worker Wages • Daily and Weekly Share",
        "q": "A coconut grove employs 8 workers for harvesting. The owner pays each worker ₹450 per day.<br>(a) What is the total wage bill for all 8 workers for one day?<br>(b) If the harvest work lasts for 6 days, what is the total amount paid in wages?",
        "ans": "<strong>Wage Calculations:</strong><br>\n• <strong>(a) Daily Total for 8 Workers:</strong> 8 × ₹450 = <strong>₹3,600 per day</strong>.<br>\n• <strong>(b) 6-Day Wage Bill:</strong> 6 × ₹3,600 = <strong>₹21,600</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Daily wages = ₹3,600",
            "marks": "1.5 M"
          },
          {
            "key": "6-day wages = ₹21,600",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Truck Loading Capacity • Gross Weight",
        "q": "A small tempo truck can carry a maximum payload of 1,500 kg. A bag of 50 coconuts weighs 30 kg.<br>(a) What is the maximum number of such bags the truck can safely transport in one trip?<br>(b) How many total coconuts are transported in that full truck load?",
        "ans": "<strong>Payload Calculations:</strong><br>\n• <strong>(a) Maximum Bags:</strong> 1,500 kg ÷ 30 kg/bag = <strong>50 bags</strong>.<br>\n• <strong>(b) Total Coconuts:</strong> 50 bags × 50 coconuts/bag = <strong>2,500 coconuts</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Max bags = 50",
            "marks": "1.5 M"
          },
          {
            "key": "Total coconuts = 2,500",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Irrigation Drip System • Water Flow",
        "q": "An automated drip irrigation pipe delivers 2.5 litres of water per hour to each coconut tree. The grove has 160 trees and the pump runs for 4 hours daily.<br>(a) How many litres of water does one tree receive in 4 hours?<br>(b) How many litres of water are supplied to the entire grove daily?",
        "ans": "<strong>Water Delivery Calculations:</strong><br>\n• <strong>(a) Water per Tree:</strong> 4 hours × 2.5 L/h = <strong>10 litres per tree</strong>.<br>\n• <strong>(b) Total Daily Water for 160 Trees:</strong> 160 × 10 L = <strong>1,600 litres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "One tree = 10 L",
            "marks": "1.5 M"
          },
          {
            "key": "Total grove = 1,600 L",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Division Verification Algorithm",
        "q": "Divide 1,485 by 12. State the quotient and the remainder, and verify your answer using the formula: $\\text{Dividend} = (\\text{Divisor} \\times \\text{Quotient}) + \\text{Remainder}$.",
        "ans": "<strong>Division & Proof:</strong><br>\n1. 1,485 ÷ 12:<br>\n• 12 × 100 = 1,200 (Remainder 285)<br>\n• 12 × 20 = 240 (Remainder 45)<br>\n• 12 × 3 = 36 (Remainder 9)<br>\n<strong>Quotient = 123</strong>, <strong>Remainder = 9</strong>.<br>\n2. <strong>Verification:</strong><br>\n(12 × 123) + 9 = 1,476 + 9 = <strong>1,485</strong>. The division is verified!",
        "marks": 3,
        "rubric": [
          {
            "key": "Quotient = 123, Remainder = 9",
            "marks": "1.5 M"
          },
          {
            "key": "Verification formula step-by-step",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Coir Rope Production • Unitary Conversion",
        "q": "Coconut husks are processed into coir rope. From 100 coconut husks, 8 kg of coir fibre is obtained.<br>(a) How many kilograms of coir fibre can be made from 1,500 husks?<br>(b) If 1 kg of coir fibre makes 15 metres of rope, how many metres of rope can be produced?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Coir Fibre:</strong> (1,500 ÷ 100) × 8 kg = 15 × 8 = <strong>120 kg of coir fibre</strong>.<br>\n• <strong>(b) Rope Length:</strong> 120 kg × 15 m/kg = <strong>1,800 metres of rope</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Coir fibre = 120 kg",
            "marks": "1.5 M"
          },
          {
            "key": "Rope length = 1,800 m",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Plantation Layout • Area and Spacing",
        "q": "Coconut trees are planted in a square grid with a spacing of 7 metres between trees.<br>(a) How many trees are in a row of length 84 metres (including trees at both ends)?<br>(b) If the orchard is a square of 84 m × 84 m, what is the total number of trees planted?",
        "ans": "<strong>Grid Spacing:</strong><br>\n• <strong>(a) Trees per Row:</strong> Number of 7-metre intervals = 84 ÷ 7 = 12 intervals.<br>\n- Trees per row = Intervals + 1 (posts and spaces rule) = 12 + 1 = <strong>13 trees</strong>.<br>\n• <strong>(b) Total Trees in Square Orchard:</strong> 13 rows × 13 trees/row = <strong>169 trees</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "12 intervals + 1 = 13 trees per row",
            "marks": "1.5 M"
          },
          {
            "key": "Total trees = 13 × 13 = 169",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Coconut Tree Growth • Time Progression",
        "q": "A high-yielding dwarf coconut tree begins fruiting in 4 years and produces fruit for 35 years.<br>(a) For how many years does the tree yield coconuts?<br>(b) If it produces an average of 140 coconuts annually, how many coconuts will one tree yield over its entire bearing life?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Bearing Period:</strong> <strong>35 years</strong>.<br>\n• <strong>(b) Lifetime Yield:</strong> 35 years × 140 coconuts/year = <strong>4,900 coconuts</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Bearing period = 35 years",
            "marks": "1.0 M"
          },
          {
            "key": "Lifetime yield: 35 × 140 = 4,900",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Harvest Cost Breakdown • Net Income",
        "q": "A farmer sells 4,500 coconuts at ₹22 each. His expenses were:<br>• Tree climber charges: ₹3 per coconut<br>• Cartage to market: ₹1,500<br>• Market cess/tax: ₹1,200<br>(a) Find gross revenue.<br>(b) Find total expenses.<br>(c) Find his net profit.",
        "ans": "<strong>Financial Calculations:</strong><br>\n• <strong>(a) Gross Revenue:</strong> 4,500 × ₹22 = <strong>₹99,000</strong>.<br>\n• <strong>(b) Total Expenses:</strong><br>\n- Climber charges: 4,500 × ₹3 = ₹13,500.<br>\n- Cartage = ₹1,500.<br>\n- Market cess = ₹1,200.<br>\n- Total expenses = ₹13,500 + ₹1,500 + ₹1,200 = <strong>₹16,200</strong>.<br>\n• <strong>(c) Net Profit:</strong> ₹99,000 - ₹16,200 = <strong>₹82,800</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Gross revenue = ₹99,000",
            "marks": "1.0 M"
          },
          {
            "key": "Total expenses = ₹16,200",
            "marks": "1.0 M"
          },
          {
            "key": "Net profit = ₹82,800",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Math • Multiplications by 11 and 12",
        "q": "Calculate mentally using shortcuts:<br>(a) 63 × 11<br>(b) 45 × 12<br>(c) 250 × 16",
        "ans": "<strong>Shortcuts:</strong><br>\n• <strong>(a) 63 × 11:</strong> Sum of digits = 6 + 3 = 9. Place between: <strong>693</strong>.<br>\n• <strong>(b) 45 × 12:</strong> (45 × 10) + (45 × 2) = 450 + 90 = <strong>540</strong>.<br>\n• <strong>(c) 250 × 16:</strong> 250 × 4 × 4 = 1,000 × 4 = <strong>4,000</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 693",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 540",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 4,000",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Coconut Shell Crafts • Artisanal Production",
        "q": "A craftsman makes decorative bowls from coconut shells. He can craft 6 bowls in a day. He receives an order for 150 bowls.<br>(a) How many working days will he take to complete the order?<br>(b) If he sells each bowl for ₹85, how much will he earn from the entire order?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Days Required:</strong> 150 ÷ 6 = <strong>25 working days</strong>.<br>\n• <strong>(b) Total Earnings:</strong> 150 × ₹85 = <strong>₹12,750</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Days = 25",
            "marks": "1.5 M"
          },
          {
            "key": "Earnings = ₹12,750",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Division with Zero in Quotient",
        "q": "Solve: $4,208 \\div 4$. Show your long division clearly and explain why zero must be written in the hundreds/tens place.",
        "ans": "<strong>Long Division Steps:</strong><br>\n• Divide thousands: 4 ÷ 4 = 1 (Remainder 0).<br>\n• Bring down 2: 2 cannot be divided by 4 (2 < 4). <strong>We must write 0 in the quotient</strong>.<br>\n• Bring down 0 to make 20: 20 ÷ 4 = 5 (Remainder 0).<br>\n• Bring down 8: 8 ÷ 4 = 2 (Remainder 0).<br>\n<strong>Quotient = 1,052</strong>, Remainder = 0.<br>\n<em>Explanation: Whenever the brought-down digit is smaller than the divisor, a 0 is placed in that place value of the quotient before bringing down the next digit.</em>",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct quotient = 1,052",
            "marks": "1.5 M"
          },
          {
            "key": "Clear explanation for placing 0",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Coconut Jaggery (Palm Sugar) Yield",
        "q": "From 8 litres of sweet palm sap (neera), 1 kg of palm jaggery is prepared.<br>(a) How many kilograms of jaggery can be made from 120 litres of sap?<br>(b) If palm jaggery sells at ₹180 per kg, find the total sales value.",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Jaggery Yield:</strong> 120 L ÷ 8 L/kg = <strong>15 kg of jaggery</strong>.<br>\n• <strong>(b) Sales Value:</strong> 15 kg × ₹180 = <strong>₹2,700</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Jaggery = 15 kg",
            "marks": "1.5 M"
          },
          {
            "key": "Sales value = ₹2,700",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "HOTS • Coconut Division Riddle",
        "q": "A farmer divided a heap of coconuts equally among his 4 sons, and 2 coconuts were left over. When he divided the same heap among 5 neighbours, 2 coconuts were still left over. What is the smallest possible number of coconuts in the heap (greater than 10)?",
        "ans": "<strong>LCM and Remainder Principle:</strong><br>\n1. The number leaves a remainder of 2 when divided by both 4 and 5.<br>\n2. LCM of 4 and 5 = 4 × 5 = <strong>20</strong>.<br>\n3. The number must be of the form: $\\text{LCM}(4, 5) \\times k + 2 = 20k + 2$.<br>\n4. For $k = 1$: Number = 20 + 2 = <strong>22 coconuts</strong>.<br>\n5. <strong>Verification:</strong><br>\n- 22 ÷ 4 = 5 with remainder 2.<br>\n- 22 ÷ 5 = 4 with remainder 2.<br>\nThe smallest possible number of coconuts is <strong>22</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "LCM(4, 5) = 20",
            "marks": "1.5 M"
          },
          {
            "key": "Smallest number = 22 with verification",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Water Reservoir for Plantation",
        "q": "An irrigation farm pond has a capacity of 48,000 litres. A solar pump fills the pond at the rate of 1,600 litres per hour.<br>(a) How many hours will the pump take to fill the empty pond completely?<br>(b) If the pump runs for 6 hours daily, how many days are required?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Total Pumping Hours:</strong> 48,000 ÷ 1,600 = <strong>30 hours</strong>.<br>\n• <strong>(b) Days Required:</strong> 30 hours ÷ 6 hours/day = <strong>5 days</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "30 hours to fill",
            "marks": "1.5 M"
          },
          {
            "key": "5 days at 6 hours/day",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Coconut Tree Shade • Geometric Area",
        "q": "The fronds of an adult coconut palm cast a circular shadow of radius 3 metres when the sun is overhead.<br>(a) Approximate the area of shade cast by one tree (take $\\pi \\approx 3.14$).<br>(b) If 50 trees cast non-overlapping shade, what is the combined area of shaded ground?",
        "ans": "<strong>Circular Area Calculations ($A = \\pi r^2$):</strong><br>\n• <strong>(a) Shade per Tree:</strong> Area = $3.14 \\times 3 \\times 3 = 3.14 \\times 9 = \\mathbf{28.26\\text{ sq m}}$.<br>\n• <strong>(b) 50 Trees:</strong> 50 × 28.26 = <strong>1,413 square metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "One tree area = 28.26 sq m",
            "marks": "1.5 M"
          },
          {
            "key": "50 trees = 1,413 sq m",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Estimation of Products",
        "q": "Estimate the product by rounding each factor to the nearest ten:<br>(a) 38 × 52<br>(b) 69 × 21<br>(c) 87 × 44",
        "ans": "<strong>Estimation Steps:</strong><br>\n• <strong>(a) 38 × 52:</strong> Round 38 → 40; 52 → 50. Estimate = 40 × 50 = <strong>2,000</strong> (Exact = 1,976).<br>\n• <strong>(b) 69 × 21:</strong> Round 69 → 70; 21 → 20. Estimate = 70 × 20 = <strong>1,400</strong> (Exact = 1,449).<br>\n• <strong>(c) 87 × 44:</strong> Round 87 → 90; 44 → 40. Estimate = 90 × 40 = <strong>3,600</strong> (Exact = 3,828).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 2,000",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 1,400",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 3,600",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "True or False with Arithmetic Reason",
        "q": "State True or False with reasoning:<br>(a) If a number is divisible by 10, its ones digit must be 0.<br>(b) $25 \\times 48$ is the same as $100 \\times 12$.<br>(c) The remainder in any division problem can be equal to or greater than the divisor.",
        "ans": "<strong>Justifications:</strong><br>\n• <strong>(a) True:</strong> All multiples of 10 end with the digit 0.<br>\n• <strong>(b) True:</strong> $25 \\times 48 = 25 \\times (4 \\times 12) = (25 \\times 4) \\times 12 = 100 \\times 12 = 1,200$. Both equal 1,200.<br>\n• <strong>(c) False:</strong> The remainder must strictly be <strong>less than the divisor</strong>. If it were equal or greater, another division step could be carried out.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): True with place value reason",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): True with associative property",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): False (remainder must be < divisor)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comprehensive Orchard Harvest Review",
        "q": "Over a 3-month harvest season, a farm records coconut production:<br>Month 1: 3,450; Month 2: 4,120; Month 3: 3,830.<br>(a) Find total coconuts harvested.<br>(b) If 10% of coconuts are kept for domestic consumption and seed, how many are sold in the market?<br>(c) At ₹20 per coconut, calculate the gross revenue from sales.",
        "ans": "<strong>Comprehensive Harvest Accounting:</strong><br>\n• <strong>(a) Total Harvest:</strong> 3,450 + 4,120 + 3,830 = <strong>11,400 coconuts</strong>.<br>\n• <strong>(b) Market Sale:</strong><br>\n- Domestic share = 10% of 11,400 = 1,140 coconuts.<br>\n- Coconuts sold = 11,400 - 1,140 = <strong>10,260 coconuts</strong>.<br>\n• <strong>(c) Gross Revenue:</strong> 10,260 × ₹20 = <strong>₹2,05,200</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total = 11,400 coconuts",
            "marks": "1.0 M"
          },
          {
            "key": "Coconuts sold = 10,260",
            "marks": "1.0 M"
          },
          {
            "key": "Gross revenue = ₹2,05,200",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Competency Question: Coconut Water Cooperative Dispatch",
      "text": "A cooperative dispatches 2,400 tender coconuts to market. 35% are sold directly to street stalls, and the remainder are supplied to juice bottling plants in crates of 24 coconuts each.",
      "question": "(a) How many coconuts are sold to street stalls?<br>(b) How many crates are supplied to the bottling plant?",
      "answer": "<div class=\"cbq-sol-label\">Suggested Model Solution:</div>\r\n          \r\n <div class=\"step\"><strong>(a) Street stalls:</strong> 35/100 × 2400 = <strong>840 coconuts</strong>.</div>\r\n <div class=\"step\"><strong>(b) Bottling crates:</strong> 2400 - 840/24 = 1560/24 = <strong>65 crates</strong>.",
      "rubric": "1M concept identification + 1M step execution + 1M conclusion"
    }
  },
  {
    "id": "mela10",
    "num": 10,
    "unit": "Chapter 10 • Symmetry, Reflection & Geometric Art",
    "title": "Symmetrical Designs",
    "subtitle": "सममितीय डिज़ाइन (सममिति रेखाएँ, परावर्तन एवं रंगोली)",
    "concepts": [
      "Line of Symmetry (Mirror Line): An imaginary line dividing a figure into two identical mirror halves.",
      "Vertical, Horizontal, and Diagonal lines of symmetry.",
      "Number of lines of symmetry in regular polygons: Equilateral triangle (3), Square (4), Regular hexagon (6).",
      "Rotational symmetry of order 2 (half turn), order 4 (quarter turn), order 6."
    ],
    "svg": "<svg viewBox=\"0 0 600 170\" width=\"100%\" height=\"170\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"170\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Lines of Symmetry in Common Geometric Shapes</text>\r\n        <g transform=\"translate(60, 45)\">\r\n          <rect x=\"0\" y=\"0\" width=\"70\" height=\"70\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/>\r\n          <line x1=\"35\" y1=\"-8\" x2=\"35\" y2=\"78\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4 2\"/>\r\n          <line x1=\"-8\" y1=\"35\" x2=\"78\" y2=\"35\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4 2\"/>\r\n          <line x1=\"-5\" y1=\"-5\" x2=\"75\" y2=\"75\" stroke=\"#059669\" stroke-width=\"1.5\" stroke-dasharray=\"4 2\"/>\r\n          <line x1=\"75\" y1=\"-5\" x2=\"-5\" y2=\"75\" stroke=\"#059669\" stroke-width=\"1.5\" stroke-dasharray=\"4 2\"/>\r\n          <text x=\"35\" y=\"96\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Square</text>\r\n          <text x=\"35\" y=\"110\" font-family=\"system-ui, sans-serif\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">4 Lines</text>\r\n        </g>\r\n        <g transform=\"translate(200, 45)\">\r\n          <rect x=\"0\" y=\"10\" width=\"90\" height=\"50\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/>\r\n          <line x1=\"45\" y1=\"0\" x2=\"45\" y2=\"70\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4 2\"/>\r\n          <line x1=\"-8\" y1=\"35\" x2=\"98\" y2=\"35\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4 2\"/>\r\n          <text x=\"45\" y=\"96\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Rectangle</text>\r\n          <text x=\"45\" y=\"110\" font-family=\"system-ui, sans-serif\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">2 Lines</text>\r\n        </g>\r\n        <g transform=\"translate(350, 45)\">\r\n          <polygon points=\"40,5 5,68 75,68\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/>\r\n          <line x1=\"40\" y1=\"-2\" x2=\"40\" y2=\"75\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4 2\"/>\r\n          <text x=\"40\" y=\"96\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Equilateral Δ</text>\r\n          <text x=\"40\" y=\"110\" font-family=\"system-ui, sans-serif\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">3 Lines</text>\r\n        </g>\r\n        <g transform=\"translate(480, 45)\">\r\n          <circle cx=\"35\" cy=\"35\" r=\"35\" fill=\"#f1f5f9\" stroke=\"#0284c7\" stroke-width=\"2\"/>\r\n          <line x1=\"35\" y1=\"-5\" x2=\"35\" y2=\"75\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4 2\"/>\r\n          <line x1=\"-5\" y1=\"35\" x2=\"75\" y2=\"35\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4 2\"/>\r\n          <line x1=\"5\" y1=\"5\" x2=\"65\" y2=\"65\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4 2\"/>\r\n          <text x=\"35\" y=\"96\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Circle</text>\r\n          <text x=\"35\" y=\"110\" font-family=\"system-ui, sans-serif\" font-size=\"9.5\" fill=\"#64748b\" text-anchor=\"middle\">Infinite Lines</text>\r\n        </g>\r\n        <text x=\"300\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#475569\" text-anchor=\"middle\">Note: Diagonals are NOT lines of symmetry in a non-square rectangle!</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Lines of Symmetry • Regular Polygons",
        "q": "State the number of lines of symmetry for each of the following geometric figures:<br>(a) Equilateral Triangle<br>(b) Square<br>(c) Regular Pentagon<br>(d) Regular Hexagon<br>(e) Circle",
        "ans": "<strong>Lines of Symmetry:</strong><br>\n• <strong>(a) Equilateral Triangle:</strong> <strong>3 lines of symmetry</strong> (from each vertex to the midpoint of the opposite side).<br>\n• <strong>(b) Square:</strong> <strong>4 lines of symmetry</strong> (2 through opposite midpoints + 2 along diagonals).<br>\n• <strong>(c) Regular Pentagon:</strong> <strong>5 lines of symmetry</strong>.<br>\n• <strong>(d) Regular Hexagon:</strong> <strong>6 lines of symmetry</strong>.<br>\n• <strong>(e) Circle:</strong> <strong>Infinite lines of symmetry</strong> (any diameter line through the center).",
        "marks": 3,
        "rubric": [
          {
            "key": "Triangle (3), Square (4)",
            "marks": "1.0 M"
          },
          {
            "key": "Pentagon (5), Hexagon (6)",
            "marks": "1.0 M"
          },
          {
            "key": "Circle (Infinite)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mirror Halves • Reflection Symmetry",
        "q": "Explain what happens when a mirror is placed on the dotted line of a symmetrical drawing. If only the left half of an insect is drawn on paper, how does the mirror complete the full insect?",
        "ans": "<strong>Mirror Reflection Principle:</strong><br>\n1. <strong>Mirror Halves:</strong> A mirror placed along the line of symmetry reflects the drawn half so that the real drawing and its virtual reflection together look exactly like the complete object.<br>\n2. <strong>Insect Completion:</strong> The line of symmetry runs down the middle of the insect from head to tail. The mirror reflects the single antenna, 3 legs, and 1 wing on the left side to create the corresponding right antenna, 3 legs, and 1 wing, perfectly completing a realistic 6-legged insect.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mirror reflection creates identical opposite image",
            "marks": "1.5 M"
          },
          {
            "key": "Line of symmetry acts as reflection axis completing body",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "English Alphabet Symmetry",
        "q": "Identify which capital English letters have:<br>(a) Vertical line of symmetry only (e.g. A)<br>(b) Horizontal line of symmetry only (e.g. B)<br>(c) Both vertical and horizontal lines of symmetry<br>(d) No line of symmetry",
        "ans": "<strong>Alphabet Symmetry Classification:</strong><br>\n• <strong>(a) Vertical Line Only:</strong> <strong>A, M, T, U, V, W, Y</strong>.<br>\n• <strong>(b) Horizontal Line Only:</strong> <strong>B, C, D, E, K</strong>.<br>\n• <strong>(c) Both Vertical and Horizontal:</strong> <strong>H, I, O, X</strong>.<br>\n• <strong>(d) No Line of Symmetry:</strong> <strong>F, G, J, L, P, Q, R, S, Z</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Vertical: A, M, T, etc.",
            "marks": "0.75 M"
          },
          {
            "key": "Horizontal: B, C, D, etc.",
            "marks": "0.75 M"
          },
          {
            "key": "Both: H, I, O, X",
            "marks": "0.75 M"
          },
          {
            "key": "None: F, G, J, etc.",
            "marks": "0.75 M"
          }
        ]
      },
      {
        "category": "Paper Folding & Paper Cutting (Kirigami)",
        "q": "A student folds a square piece of paper in half to make a rectangle, folds it in half again to make a smaller square, and punches a round hole through the folded corner.<br>(a) When the paper is unfolded completely, how many holes will appear?<br>(b) How are the holes arranged relative to the center?",
        "ans": "<strong>Fold and Punch Symmetry:</strong><br>\n• <strong>(a) Number of Holes:</strong> The paper has 4 layers (2 folds: 2 × 2 = 4). Unfolding gives <strong>4 holes</strong>.<br>\n• <strong>(b) Arrangement:</strong> The 4 holes are arranged symmetrically around the center of the square, forming the 4 corners of a smaller square around the center point.",
        "marks": 3,
        "rubric": [
          {
            "key": "4 holes appear",
            "marks": "1.5 M"
          },
          {
            "key": "Symmetrical arrangement around center",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Symmetry in Indian Monuments & Architecture",
        "q": "The Taj Mahal in Agra is renowned worldwide for its bilateral architectural symmetry.<br>(a) Explain where the main line of symmetry runs when viewing the monument from the front garden pool.<br>(b) Name three architectural elements that are mirrored on either side.",
        "ans": "<strong>Architectural Symmetry:</strong><br>\n• <strong>(a) Axis of Symmetry:</strong> The vertical line of symmetry runs directly through the pinnacle of the central dome, down through the apex of the central archway (iwan), and continues along the centerline of the reflecting pool.<br>\n• <strong>(b) Mirrored Elements:</strong><br>\n1. The <strong>four minarets</strong> (2 on the left, 2 on the right).<br>\n2. The <strong>side kiosks (chhatris)</strong> and secondary arches.<br>\n3. The <strong>flanking red sandstone buildings</strong> (the Mosque on the west and the Jawab / guest house on the east).",
        "marks": 3,
        "rubric": [
          {
            "key": "Central vertical axis identified",
            "marks": "1.5 M"
          },
          {
            "key": "Three mirrored elements (minarets, arches, side buildings)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Digits Symmetry • 0 to 9",
        "q": "Examine the digits <strong>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</strong>.<br>(a) Which digits have at least one line of symmetry?<br>(b) Which digit has both horizontal and vertical lines of symmetry?",
        "ans": "<strong>Numerical Symmetry:</strong><br>\n• <strong>(a) Digits with Line Symmetry:</strong><br>\n- <strong>0:</strong> Both vertical and horizontal lines of symmetry.<br>\n- <strong>3:</strong> Horizontal line of symmetry.<br>\n- <strong>8:</strong> Both vertical and horizontal lines of symmetry.<br>\n- (Note: 1 written as a simple vertical bar has symmetry).<br>\n• <strong>(b) Both Axes:</strong> Digits <strong>0 and 8</strong> have both vertical and horizontal symmetry.",
        "marks": 3,
        "rubric": [
          {
            "key": "Digits 0, 3, 8 identified",
            "marks": "1.5 M"
          },
          {
            "key": "Both axes: 0 and 8",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Rotational Symmetry vs Reflection Symmetry",
        "q": "Can a shape have rotational symmetry but NO line of symmetry? Explain with two examples (consider letter 'S' and a pinwheel / swastika).",
        "ans": "<strong>Analysis:</strong><br>\n• <strong>Yes</strong>, a shape can have rotational symmetry without any line of reflection.<br>\n• <strong>Example 1 (Letter 'S'):</strong> If you reflect 'S' across a vertical or horizontal line, it turns backwards and does not match. But if you rotate 'S' by 180° (half turn), it looks identical.<br>\n• <strong>Example 2 (4-arm Pinwheel):</strong> When spun by 90°, each curved blade moves into the next position identically (order 4). However, reflecting across any line reverses the direction of the blade curves, so it has 0 lines of symmetry.",
        "marks": 3,
        "rubric": [
          {
            "key": "Yes with clear conceptual distinction",
            "marks": "1.0 M"
          },
          {
            "key": "Letter S analysis",
            "marks": "1.0 M"
          },
          {
            "key": "Pinwheel analysis",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Rangoli Mirror Patterns • 4-Fold Symmetry",
        "q": "A rangoli grid has 4 quadrants. A decorative diya motif is drawn in the top-left quadrant.<br>(a) If reflected across the vertical axis and horizontal axis, how many diyas will be in the finished rangoli?<br>(b) What is the total rotational symmetry order of this design?",
        "ans": "<strong>4-Quadrant Symmetry:</strong><br>\n• <strong>(a) Finished Diyas:</strong> 1 diya in each of the 4 quadrants = <strong>4 diyas</strong>.<br>\n• <strong>(b) Rotational Symmetry:</strong> Because the motif is mirrored identically across both perpendicular axes, rotating by 90°, 180°, and 270° maps each quadrant onto another. Total order = <strong>Order 4</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "4 diyas in total",
            "marks": "1.5 M"
          },
          {
            "key": "Rotational symmetry order 4",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Geometric Word Symmetry • COD, MOM, NOON",
        "q": "Look at the words:<br><strong>MOM, DAD, NOON, CHECK</strong>.<br>(a) Which word has a vertical line of symmetry when written horizontally?<br>(b) Which word looks identical when rotated 180° upside down?<br>(c) Which word has a horizontal line of symmetry when reflected in water?",
        "ans": "<strong>Word Symmetry:</strong><br>\n• <strong>(a) Vertical Symmetry:</strong> <strong>MOM</strong> (M, O, M are all vertically symmetric, and letters mirror across the center O).<br>\n• <strong>(b) 180° Rotation:</strong> <strong>NOON</strong> (N rotates to N, O rotates to O, so upside down it still reads NOON).<br>\n• <strong>(c) Horizontal (Water Reflection):</strong> <strong>CHECK</strong> (C, H, E, C, K all have horizontal symmetry axes).",
        "marks": 3,
        "rubric": [
          {
            "key": "Vertical: MOM",
            "marks": "1.0 M"
          },
          {
            "key": "180° Rotation: NOON",
            "marks": "1.0 M"
          },
          {
            "key": "Horizontal reflection: CHECK",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Asymmetric Shapes • Concept",
        "q": "(a) What is an asymmetric figure? Give two examples from everyday life.<br>(b) Is a scalene triangle symmetric? Explain why.",
        "ans": "<strong>Asymmetry:</strong><br>\n• <strong>(a) Definition:</strong> A figure that cannot be divided into two identical halves by any straight line and has no rotational symmetry (other than 360°) is called <strong>asymmetric</strong>. Examples: An outline of a human foot, a jagged coastline, the letter 'F'.<br>\n• <strong>(b) Scalene Triangle:</strong> <strong>No</strong>, a scalene triangle has three unequal side lengths and three unequal angles. No fold line can match two sides together, so it has <strong>0 lines of symmetry</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition and examples of asymmetry",
            "marks": "1.5 M"
          },
          {
            "key": "Scalene triangle has 0 lines of symmetry",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mirror Halves Puzzle • Clock Face",
        "q": "A line of symmetry is drawn through 12 and 6 on an analog clock face.<br>(a) Which number is the mirror half of 1?<br>(b) Which number is the mirror half of 2?<br>(c) Which number is the mirror half of 9?",
        "ans": "<strong>Clock Face Reflections (Axis 12 to 6):</strong><br>\n• <strong>(a) Mirror half of 1:</strong> <strong>11</strong>.<br>\n• <strong>(b) Mirror half of 2:</strong> <strong>10</strong>.<br>\n• <strong>(c) Mirror half of 9:</strong> <strong>3</strong>.<br>\n<em>(General rule: Any number $N$ on the right mirrors to $12 - N$ on the left).</em>",
        "marks": 3,
        "rubric": [
          {
            "key": "1 mirrors to 11",
            "marks": "1.0 M"
          },
          {
            "key": "2 mirrors to 10",
            "marks": "1.0 M"
          },
          {
            "key": "9 mirrors to 3",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Parallelogram Symmetry Analysis",
        "q": "A student believes that a general parallelogram has 2 lines of symmetry along its diagonals. Is he correct? Prove with reasons.",
        "ans": "<strong>Parallelogram Symmetry Proof:</strong><br>\n• <strong>The student is Incorrect</strong>.<br>\n• <strong>Reason:</strong> If you fold a general (non-rhombus) parallelogram along its diagonal, the opposite vertices do not coincide; they stick out in different directions.<br>\n• A general parallelogram has <strong>0 lines of symmetry</strong>.<br>\n• (However, it does have <strong>rotational symmetry of order 2</strong> around the intersection of its diagonals).",
        "marks": 3,
        "rubric": [
          {
            "key": "Incorrect conclusion stated",
            "marks": "1.0 M"
          },
          {
            "key": "Folding along diagonal fails to coincide",
            "marks": "1.0 M"
          },
          {
            "key": "Has 0 reflection lines but order 2 rotation",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Rhombus vs Rectangle Symmetry",
        "q": "Both a rhombus and a rectangle have 4 sides and 2 lines of symmetry.<br>(a) Where do the lines of symmetry lie in a rectangle?<br>(b) Where do the lines of symmetry lie in a rhombus?",
        "ans": "<strong>Comparative Symmetry:</strong><br>\n• <strong>(a) Rectangle:</strong> The 2 lines of symmetry connect the <strong>midpoints of opposite sides</strong> (horizontal and vertical bisectors). Diagonals are NOT lines of symmetry.<br>\n• <strong>(b) Rhombus:</strong> The 2 lines of symmetry lie <strong>along its diagonals</strong>. Lines through side midpoints are NOT lines of symmetry.",
        "marks": 3,
        "rubric": [
          {
            "key": "Rectangle: midpoints of opposite sides",
            "marks": "1.5 M"
          },
          {
            "key": "Rhombus: along diagonals",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Nature's Bilateral Symmetry • Biology & Math",
        "q": "Bilateral symmetry is widespread in living organisms.<br>(a) Name three animals or plants that display bilateral symmetry.<br>(b) Which marine animal exhibits radial (5-fold) symmetry?",
        "ans": "<strong>Biological Symmetry:</strong><br>\n• <strong>(a) Bilateral Symmetry (1 vertical line of symmetry):</strong><br>\n1. <strong>Butterfly</strong> (wings and antennae mirror left and right).<br>\n2. <strong>Human face/body</strong>.<br>\n3. <strong>Banyan or Peepal leaf</strong>.<br>\n• <strong>(b) Radial 5-fold Symmetry:</strong> A <strong>Starfish</strong> (Sea star) has 5 symmetrical arms radiating from a central disk.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three bilateral examples",
            "marks": "1.5 M"
          },
          {
            "key": "Starfish radial symmetry",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Creating Symmetrical Patterns on Grids",
        "q": "On a 10×10 square grid with a vertical mirror line running down the centre:<br>If coordinates (2, 3), (3, 5), and (4, 2) are shaded on the left side of line $x = 5$, what are their corresponding mirrored coordinates on the right side?",
        "ans": "<strong>Grid Reflection across $x = 5$:</strong><br>\n• Distance of Point $(X, Y)$ from mirror line $x = 5$ is $5 - X$.<br>\n• Reflected X coordinate is $5 + (5 - X) = 10 - X$. Y remains unchanged.<br>\n1. (2, 3) mirrors to $(10 - 2, 3) = \\mathbf{(8, 3)}$.<br>\n2. (3, 5) mirrors to $(10 - 3, 5) = \\mathbf{(7, 5)}$.<br>\n3. (4, 2) mirrors to $(10 - 4, 2) = \\mathbf{(6, 2)}$.",
        "marks": 3,
        "rubric": [
          {
            "key": "(2, 3) → (8, 3)",
            "marks": "1.0 M"
          },
          {
            "key": "(3, 5) → (7, 5)",
            "marks": "1.0 M"
          },
          {
            "key": "(4, 2) → (6, 2)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Symmetry of Traffic Signs",
        "q": "Identify the lines of symmetry in the following traffic signs:<br>(a) 'STOP' sign (Regular Octagon)<br>(b) 'GIVE WAY' sign (Inverted Equilateral Triangle)<br>(c) 'SPEED LIMIT' sign (Circle with number)",
        "ans": "<strong>Traffic Sign Symmetry:</strong><br>\n• <strong>(a) Regular Octagon Blank:</strong> Has <strong>8 lines of symmetry</strong> (though text 'STOP' breaks it, the geometric board shape has 8 lines).<br>\n• <strong>(b) Inverted Equilateral Triangle:</strong> Has <strong>3 lines of symmetry</strong> (1 vertical through the bottom apex + 2 through side corners).<br>\n• <strong>(c) Plain Circular Board:</strong> Has <strong>infinite lines of symmetry</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Octagon: 8 lines",
            "marks": "1.0 M"
          },
          {
            "key": "Triangle: 3 lines",
            "marks": "1.0 M"
          },
          {
            "key": "Circle: Infinite lines",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Kite Shape Symmetry",
        "q": "(a) How many lines of symmetry does a geometric kite have?<br>(b) Where does the line of symmetry lie?<br>(c) Does a kite have rotational symmetry of order 2?",
        "ans": "<strong>Kite Geometry:</strong><br>\n• <strong>(a) Lines of Symmetry:</strong> A kite has exactly <strong>1 line of symmetry</strong>.<br>\n• <strong>(b) Position:</strong> It runs along the <strong>main vertical diagonal</strong> connecting the vertices between pairs of equal adjacent sides.<br>\n• <strong>(c) Rotational Symmetry:</strong> <strong>No</strong>, a kite looks different when rotated 180° (top and bottom vertices have different angles), so it has only order 1 (360°).",
        "marks": 3,
        "rubric": [
          {
            "key": "1 line of symmetry",
            "marks": "1.0 M"
          },
          {
            "key": "Main diagonal axis",
            "marks": "1.0 M"
          },
          {
            "key": "No rotational symmetry (order 1)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Symmetry in Playing Cards",
        "q": "Examine a standard playing card:<br>(a) Do the King, Queen, and Jack court cards have line symmetry? Explain.<br>(b) What type of symmetry do standard double-headed face cards have?",
        "ans": "<strong>Playing Card Symmetry:</strong><br>\n• <strong>(a) Line Symmetry:</strong> <strong>No</strong>. Face cards have no line of reflection because one head is right-side up and the other is upside down; folding horizontally or vertically will not match.<br>\n• <strong>(b) Symmetry Type:</strong> They possess <strong>Rotational Symmetry of Order 2 (180° point symmetry)</strong>. If you turn the card upside down, it looks identical.",
        "marks": 3,
        "rubric": [
          {
            "key": "No line reflection symmetry",
            "marks": "1.5 M"
          },
          {
            "key": "Order 2 rotational (point) symmetry",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "HOTS • Geometric Symmetry Riddle",
        "q": "I am a quadrilateral. All my 4 sides are equal, but my 4 angles are not all 90°. How many lines of symmetry do I have, and what is my shape?",
        "ans": "<strong>Deduction:</strong><br>\n1. A quadrilateral with 4 equal sides is either a square or a rhombus.<br>\n2. Since its angles are not all 90°, it is a <strong>Rhombus</strong>.<br>\n3. A rhombus has exactly <strong>2 lines of symmetry</strong> (along its two diagonals).",
        "marks": 3,
        "rubric": [
          {
            "key": "Shape identified as Rhombus",
            "marks": "1.5 M"
          },
          {
            "key": "Has 2 lines of symmetry along diagonals",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Snowflake Hexagonal Symmetry",
        "q": "Every natural snowflake exhibits 6-fold radial symmetry.<br>(a) How many lines of symmetry does an ideal snowflake have?<br>(b) Through what minimum angle must a snowflake be turned to look unchanged?",
        "ans": "<strong>Snowflake Geometry:</strong><br>\n• <strong>(a) Lines of Symmetry:</strong> Like a regular hexagon, an ideal snowflake has <strong>6 lines of symmetry</strong> (3 through opposite arm pairs + 3 through gaps between arms).<br>\n• <strong>(b) Minimum Turn:</strong> 360° ÷ 6 = <strong>60° turn</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "6 lines of symmetry",
            "marks": "1.5 M"
          },
          {
            "key": "60° minimum turn",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Symmetry of 3D Objects • Planes of Symmetry",
        "q": "For 3D geometric solids, symmetry is across a flat 2D plane (plane of symmetry).<br>(a) How many planes of symmetry does a cube have?<br>(b) How many planes of symmetry does a sphere have?",
        "ans": "<strong>3D Planes of Symmetry:</strong><br>\n• <strong>(a) Cube:</strong> A cube has <strong>9 planes of symmetry</strong> (3 parallel to opposite faces + 6 diagonal planes passing through opposite edges).<br>\n• <strong>(b) Sphere:</strong> A sphere has <strong>infinite planes of symmetry</strong> (any flat plane passing through its center point).",
        "marks": 3,
        "rubric": [
          {
            "key": "Cube = 9 planes",
            "marks": "1.5 M"
          },
          {
            "key": "Sphere = Infinite planes",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mirror Image Clock Time",
        "q": "A clock without numbers shows the time as 3:00. If you look at this clock in a flat wall mirror, what time will it appear to show?",
        "ans": "<strong>Mirror Reflection of Clock Hands:</strong><br>\n1. At 3:00, the minute hand points straight up at 12, and the hour hand points right at 3.<br>\n2. In the mirror, the vertical minute hand remains straight up at 12.<br>\n3. The horizontal hour hand pointing right (at 3) reflects to point left (at 9).<br>\n4. Therefore, the mirror image shows the hands at 12 and 9, which reads as <strong>9:00</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Minute hand remains at 12",
            "marks": "1.0 M"
          },
          {
            "key": "Hour hand mirrors from 3 to 9",
            "marks": "1.0 M"
          },
          {
            "key": "Apparent time = 9:00",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "True or False with Symmetry Reason",
        "q": "State True or False with reasoning:<br>(a) An isosceles triangle has 3 lines of symmetry.<br>(b) The letter 'N' has rotational symmetry of order 2.<br>(c) A circle has more lines of symmetry than any polygon.",
        "ans": "<strong>Justifications:</strong><br>\n• <strong>(a) False:</strong> An isosceles triangle has only 2 equal sides, so it has only <strong>1 line of symmetry</strong> (from apex to base midpoint).<br>\n• <strong>(b) True:</strong> Rotating 'N' by 180° reproduces an identical 'N'.<br>\n• <strong>(c) True:</strong> Any polygon has a finite number of lines of symmetry (an $n$-gon has at most $n$ lines), whereas a circle has <strong>infinitely many lines</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): False (1 line)",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): True with 180° rotation",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): True (infinite vs finite)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comprehensive Design Review • Logo Symmetry",
        "q": "A school designs a circular emblem with 3 identical stylized swans arranged around a central flame at angles of 120°.<br>(a) What type of symmetry does the emblem possess?<br>(b) Does it have line symmetry? Explain.",
        "ans": "<strong>Emblem Symmetry Analysis:</strong><br>\n• <strong>(a) Symmetry Type:</strong> The emblem has <strong>Rotational Symmetry of Order 3</strong> (turns of 120°, 240°, and 360° leave the design unchanged).<br>\n• <strong>(b) Line Symmetry:</strong> <strong>No</strong>, because the swans are facing in a circular chasing direction (clockwise or anticlockwise). A mirror reflection reverses the swimming direction of the swans, so it possesses 0 lines of reflection symmetry.",
        "marks": 3,
        "rubric": [
          {
            "key": "Order 3 rotational symmetry (120°)",
            "marks": "1.5 M"
          },
          {
            "key": "No line symmetry due to directional chasing",
            "marks": "1.5 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Competency Question: Traditional Diwali Rangoli Design Symmetry",
      "text": "A Rangoli artist creates an 8-pointed star mandala inside a circle. The motif repeated in each sector is reflected alternately.",
      "question": "(a) What is the order of rotational symmetry of an 8-pointed star?<br>(b) By what smallest angle must the mandala be rotated to match itself exactly?",
      "answer": "<div class=\"cbq-sol-label\">Suggested Model Solution:</div>\r\n          \r\n <div class=\"step\"><strong>(a) Order of Rotational Symmetry:</strong> <strong>8</strong>.</div>\r\n <div class=\"step\"><strong>(b) Smallest Angle:</strong> 360°/8 = <strong>45°</strong>.",
      "rubric": "1M concept identification + 1M step execution + 1M conclusion"
    }
  },
  {
    "id": "mela11",
    "num": 11,
    "unit": "Chapter 11 • Area, Perimeter & Grid Measurement",
    "title": "Grandmother's Quilt",
    "subtitle": "दादी की रजाई (क्षेत्रफल, परिमाप एवं वर्ग ग्रिड)",
    "concepts": [
      "Difference between Perimeter (length of outer boundary) and Area (measure of flat surface enclosed).",
      "Formulas: Perimeter of Rectangle = 2 × (Length + Breadth); Area of Rectangle = Length × Breadth.",
      "Formulas for Squares: Perimeter = 4 × Side; Area = Side × Side.",
      "Counting 1 cm grid squares to estimate areas of irregular shapes and quilt patches.",
      "Definition: Tessellation is the tiling of a flat two-dimensional plane using one or more geometric shapes with zero gaps and zero overlaps."
    ],
    "svg": "<svg viewBox=\"0 0 600 170\" width=\"100%\" height=\"170\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"170\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Patchwork Quilt on 1 cm Grid: Area vs Perimeter Comparison</text>\r\n        <g transform=\"translate(60, 42)\">\r\n          <rect x=\"0\" y=\"0\" width=\"180\" height=\"90\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/>\r\n          <line x1=\"30\" y1=\"0\" x2=\"30\" y2=\"90\" stroke=\"#c7d2fe\"/>\r\n          <line x1=\"60\" y1=\"0\" x2=\"60\" y2=\"90\" stroke=\"#c7d2fe\"/>\r\n          <line x1=\"90\" y1=\"0\" x2=\"90\" y2=\"90\" stroke=\"#c7d2fe\"/>\r\n          <line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"90\" stroke=\"#c7d2fe\"/>\r\n          <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"90\" stroke=\"#c7d2fe\"/>\r\n          <line x1=\"0\" y1=\"30\" x2=\"180\" y2=\"30\" stroke=\"#c7d2fe\"/>\r\n          <line x1=\"0\" y1=\"60\" x2=\"180\" y2=\"60\" stroke=\"#c7d2fe\"/>\r\n          <text x=\"90\" y=\"48\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#4338ca\" text-anchor=\"middle\">Patch A (6 × 3)</text>\r\n          <text x=\"90\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Area = 18 sq cm | Perimeter = 18 cm</text>\r\n        </g>\r\n        <g transform=\"translate(340, 32)\">\r\n          <rect x=\"0\" y=\"0\" width=\"120\" height=\"120\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/>\r\n          <line x1=\"30\" y1=\"0\" x2=\"30\" y2=\"120\" stroke=\"#bbf7d0\"/>\r\n          <line x1=\"60\" y1=\"0\" x2=\"60\" y2=\"120\" stroke=\"#bbf7d0\"/>\r\n          <line x1=\"90\" y1=\"0\" x2=\"90\" y2=\"120\" stroke=\"#bbf7d0\"/>\r\n          <line x1=\"0\" y1=\"30\" x2=\"120\" y2=\"30\" stroke=\"#bbf7d0\"/>\r\n          <line x1=\"0\" y1=\"60\" x2=\"120\" y2=\"60\" stroke=\"#bbf7d0\"/>\r\n          <line x1=\"0\" y1=\"90\" x2=\"120\" y2=\"90\" stroke=\"#bbf7d0\"/>\r\n          <text x=\"60\" y=\"64\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\" text-anchor=\"middle\">Patch B (4 × 4)</text>\r\n          <text x=\"60\" y=\"136\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Area = 16 sq cm | Perimeter = 16 cm</text>\r\n        </g>\r\n        <text x=\"300\" y=\"160\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\">Each grid square = 1 cm × 1 cm = 1 sq cm | Area = Total unit squares inside | Perimeter = Total outer boundary units</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Patchwork Quilt Dimensions • Perimeter & Area",
        "q": "Grandmother stitches a rectangular patchwork quilt measuring 240 cm in length and 150 cm in width.<br>(a) Calculate the total perimeter of the quilt to find how much decorative ribbon border she needs.<br>(b) Calculate the total area of the quilt in square centimetres and square metres.",
        "ans": "<strong>Perimeter & Area Formulas:</strong><br>\n• <strong>(a) Perimeter:</strong> $P = 2 \\times (L + B) = 2 \\times (240 + 150) = 2 \\times 390 = \\mathbf{780\\text{ cm}}$ (or 7.8 metres of ribbon).<br>\n• <strong>(b) Area:</strong><br>\n- In cm²: $A = L \\times B = 240 \\times 150 = \\mathbf{36,000\\text{ sq cm}}$.<br>\n- In m²: $36,000 ÷ 10,000 = \\mathbf{3.6\\text{ sq metres}}$ ($1\\text{ m}^2 = 10,000\\text{ cm}^2$).",
        "marks": 3,
        "rubric": [
          {
            "key": "Perimeter = 780 cm (7.8 m)",
            "marks": "1.5 M"
          },
          {
            "key": "Area = 36,000 cm² = 3.6 m²",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Square vs Rectangular Patches • Comparison",
        "q": "Grandmother compares two cloth patches:<br>• Patch 1: Square with side 20 cm.<br>• Patch 2: Rectangle measuring 25 cm by 16 cm.<br>(a) Find the perimeter of both patches.<br>(b) Find the area of both patches.<br>(c) What do you observe about their areas and perimeters?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Perimeters:</strong><br>\n- Square: $4 \\times 20 = \\mathbf{80\\text{ cm}}$.<br>\n- Rectangle: $2 \\times (25 + 16) = 2 \\times 41 = \\mathbf{82\\text{ cm}}$.<br>\n• <strong>(b) Areas:</strong><br>\n- Square: $20 \\times 20 = \\mathbf{400\\text{ sq cm}}$.<br>\n- Rectangle: $25 \\times 16 = \\mathbf{400\\text{ sq cm}}$.<br>\n• <strong>(c) Observation:</strong> Both patches have the <strong>exact same area (400 cm²)</strong>, but the rectangular patch has a <strong>larger perimeter (82 cm > 80 cm)</strong>. For a given area, a square always has the minimum perimeter.",
        "marks": 3,
        "rubric": [
          {
            "key": "Perimeters: 80 cm and 82 cm",
            "marks": "1.0 M"
          },
          {
            "key": "Areas: 400 cm² each",
            "marks": "1.0 M"
          },
          {
            "key": "Valid geometric observation",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Tiling Quilt with Small Unit Squares",
        "q": "The quilt measures 200 cm by 120 cm. Grandmother wants to cover the entire quilt using square fabric patches of side 10 cm.<br>(a) How many patches fit along the length?<br>(b) How many patches fit along the width?<br>(c) How many total fabric patches are required?",
        "ans": "<strong>Grid Tiling:</strong><br>\n• <strong>(a) Along Length:</strong> 200 ÷ 10 = <strong>20 patches</strong>.<br>\n• <strong>(b) Along Width:</strong> 120 ÷ 10 = <strong>12 patches</strong>.<br>\n• <strong>(c) Total Patches:</strong> 20 × 12 = <strong>240 patches</strong>.<br>\n<em>(Check: Total area = 24,000 cm². Patch area = 100 cm². 24,000 ÷ 100 = 240).</em>",
        "marks": 3,
        "rubric": [
          {
            "key": "20 along length, 12 along width",
            "marks": "1.5 M"
          },
          {
            "key": "Total = 240 patches",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Park Fencing & Turfing Cost",
        "q": "A rectangular community park is 45 m long and 30 m wide.<br>(a) Find the length of wire required to fence it with 3 rounds of barbed wire.<br>(b) If turfing the lawn costs ₹20 per square metre, calculate the total cost of planting grass across the entire park.",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Barbed Wire (Perimeter):</strong><br>\n- Perimeter = 2 × (45 + 30) = 2 × 75 = 150 metres.<br>\n- 3 rounds of wire = 3 × 150 = <strong>450 metres of wire</strong>.<br>\n• <strong>(b) Turfing Cost (Area):</strong><br>\n- Area = 45 m × 30 m = 1,350 sq m.<br>\n- Cost = 1,350 × ₹20 = <strong>₹27,000</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Perimeter = 150 m; 3 rounds = 450 m",
            "marks": "1.5 M"
          },
          {
            "key": "Area = 1,350 m²; Cost = ₹27,000",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Square Field • Missing Side from Perimeter",
        "q": "The perimeter of a square vegetable garden is 64 metres.<br>(a) What is the length of each side of the garden?<br>(b) What is the total area of the garden in square metres?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Side Length:</strong> Perimeter of square = $4 \\times \\text{Side}$.<br>\n- Side = Perimeter ÷ 4 = 64 ÷ 4 = <strong>16 metres</strong>.<br>\n• <strong>(b) Area:</strong> Area = Side × Side = 16 × 16 = <strong>256 square metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Side = 16 m",
            "marks": "1.5 M"
          },
          {
            "key": "Area = 256 sq m",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Missing Dimension from Area",
        "q": "A rectangular quilt has an area of 4,800 sq cm and a width of 60 cm.<br>(a) Find the length of the quilt.<br>(b) Find its perimeter.",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Length:</strong> Area = Length × Width → Length = Area ÷ Width.<br>\n- Length = 4,800 ÷ 60 = <strong>80 cm</strong>.<br>\n• <strong>(b) Perimeter:</strong> $P = 2 \\times (L + B) = 2 \\times (80 + 60) = 2 \\times 140 = \\mathbf{280\\text{ cm}}$.",
        "marks": 3,
        "rubric": [
          {
            "key": "Length = 80 cm",
            "marks": "1.5 M"
          },
          {
            "key": "Perimeter = 280 cm",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "L-Shaped Composite Figure Area & Perimeter",
        "q": "An L-shaped cloth piece has horizontal base 12 cm, left vertical height 10 cm, top horizontal width 4 cm, interior vertical drop 6 cm, interior horizontal shelf 8 cm, and right vertical edge 4 cm.<br>(a) Find the perimeter of the figure by adding all outer sides.<br>(b) Find its area by splitting it into two rectangles.",
        "ans": "<strong>Composite Figure Geometry:</strong><br>\n• <strong>(a) Perimeter:</strong> Sum of 6 sides = 12 + 10 + 4 + 6 + 8 + 4 = <strong>44 cm</strong>.<br>\n• <strong>(b) Area by Splitting:</strong><br>\n- Rectangle 1 (Left vertical column): 4 cm wide × 10 cm high = 40 cm².<br>\n- Rectangle 2 (Right base shelf): 8 cm long × 4 cm high = 32 cm².<br>\n- Total Area = 40 + 32 = <strong>72 square cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Perimeter = 44 cm",
            "marks": "1.5 M"
          },
          {
            "key": "Area = 40 + 32 = 72 cm²",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Same Perimeter, Different Areas",
        "q": "Two rectangular frames both have a perimeter of 36 cm.<br>• Frame A has length 10 cm and width 8 cm.<br>• Frame B has length 14 cm and width 4 cm.<br>(a) Verify that both perimeters are 36 cm.<br>(b) Calculate the area of Frame A and Frame B.<br>(c) Which frame encloses more space and by how much?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Perimeter Verification:</strong><br>\n- Frame A: 2 × (10 + 8) = 2 × 18 = 36 cm.<br>\n- Frame B: 2 × (14 + 4) = 2 × 18 = 36 cm. Both equal 36 cm!<br>\n• <strong>(b) Areas:</strong><br>\n- Frame A: 10 × 8 = <strong>80 sq cm</strong>.<br>\n- Frame B: 14 × 4 = <strong>56 sq cm</strong>.<br>\n• <strong>(c) Comparison:</strong> Frame A encloses more area by: 80 - 56 = <strong>24 sq cm more</strong>. (Shapes closer to a square maximize area).",
        "marks": 3,
        "rubric": [
          {
            "key": "Perimeter verified = 36 cm",
            "marks": "1.0 M"
          },
          {
            "key": "Areas: 80 cm² and 56 cm²",
            "marks": "1.0 M"
          },
          {
            "key": "Frame A encloses 24 cm² more",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Lace Border Cost • Currency Calculation",
        "q": "Grandmother buys golden lace to border 4 identical square pillow covers of side 45 cm.<br>(a) How many metres of lace does she need for all 4 pillow covers?<br>(b) If the lace costs ₹18 per metre, what is her total expenditure?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Lace Needed:</strong><br>\n- Perimeter of 1 cover = 4 × 45 cm = 180 cm = 1.8 metres.<br>\n- 4 pillow covers = 4 × 1.8 m = <strong>7.2 metres of lace</strong>.<br>\n• <strong>(b) Total Cost:</strong> 7.2 m × ₹18 = <strong>₹129.60</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Lace = 7.2 m",
            "marks": "1.5 M"
          },
          {
            "key": "Cost = ₹129.60",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Floor Tiling • Tile Count Problem",
        "q": "A bedroom floor is 5 m long and 4 m wide. The homeowner wants to tile it using square ceramic tiles of side 50 cm (0.5 m).<br>(a) What is the floor area in square metres?<br>(b) What is the area of 1 tile in square metres?<br>(c) How many tiles are needed to pave the floor?",
        "ans": "<strong>Tiling Calculations:</strong><br>\n• <strong>(a) Floor Area:</strong> 5 m × 4 m = <strong>20 sq metres</strong>.<br>\n• <strong>(b) Tile Area:</strong> 0.5 m × 0.5 m = <strong>0.25 sq metres</strong>.<br>\n• <strong>(c) Number of Tiles:</strong> 20 ÷ 0.25 = <strong>80 tiles</strong>.<br>\n<em>(Check: 10 tiles along length × 8 tiles along width = 80 tiles).</em>",
        "marks": 3,
        "rubric": [
          {
            "key": "Floor area = 20 m²",
            "marks": "1.0 M"
          },
          {
            "key": "Tile area = 0.25 m²",
            "marks": "1.0 M"
          },
          {
            "key": "Number of tiles = 80",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Grid Stamp Area • Irregular Shapes",
        "q": "On a 1 cm square grid, a postal stamp covers 6 complete squares, 4 half squares, and 2 squares that are more than half covered.<br>(a) Estimate the area of the stamp using NCERT grid estimation rules.<br>(b) What is the perimeter if the stamp is a 4 cm × 2 cm rectangle?",
        "ans": "<strong>Grid Area Counting Rules:</strong><br>\n1. Complete squares: 6 × 1 = 6 sq cm.<br>\n2. Half squares: 4 × 0.5 = 2 sq cm.<br>\n3. More than half squares count as 1: 2 × 1 = 2 sq cm.<br>\n• <strong>(a) Estimated Area:</strong> 6 + 2 + 2 = <strong>10 square cm</strong>.<br>\n• <strong>(b) Rectangle Perimeter:</strong> $2 \\times (4 + 2) = 2 \\times 6 = \\mathbf{12\\text{ cm}}$.",
        "marks": 3,
        "rubric": [
          {
            "key": "Grid counting rules applied",
            "marks": "1.5 M"
          },
          {
            "key": "Estimated area = 10 cm²; Perimeter = 12 cm",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Square Cutouts from Rectangle",
        "q": "A rectangular cardboard sheet is 30 cm long and 20 cm wide.<br>(a) How many small squares of side 5 cm can be cut from it without wasting any paper?<br>(b) What is the total area of the cardboard sheet?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Squares Cut:</strong><br>\n- Along length: 30 ÷ 5 = 6 squares.<br>\n- Along width: 20 ÷ 5 = 4 squares.<br>\n- Total squares = 6 × 4 = <strong>24 squares</strong>.<br>\n• <strong>(b) Sheet Area:</strong> 30 × 20 = <strong>600 square cm</strong> (Check: 24 × 25 cm² = 600 cm²).",
        "marks": 3,
        "rubric": [
          {
            "key": "24 squares",
            "marks": "1.5 M"
          },
          {
            "key": "Sheet area = 600 cm²",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Changing Dimensions • Effect on Area",
        "q": "(a) If the length of a rectangle is doubled while its width remains the same, how does its area change?<br>(b) If both the length and width of a rectangle are doubled, by how many times does its area increase?",
        "ans": "<strong>Area Scaling Factor:</strong><br>\n• <strong>(a) Doubling Length Only:</strong> Original area = $L \\times B$. New area = $(2L) \\times B = 2 \\times (L \\times B)$. The area <strong>doubles (2 times)</strong>.<br>\n• <strong>(b) Doubling Both Length and Width:</strong> New area = $(2L) \\times (2B) = 4 \\times (L \\times B)$. The area <strong>quadruples (4 times larger)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): Doubles (2 times)",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): Quadruples (4 times)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Triangular Patch Area inside Rectangle",
        "q": "A triangular patchwork piece is made by cutting a 10 cm × 6 cm rectangular cloth diagonally into two equal halves.<br>(a) What is the area of the original rectangle?<br>(b) What is the area of each triangular patch?",
        "ans": "<strong>Diagonal Division of Rectangle:</strong><br>\n• <strong>(a) Rectangle Area:</strong> $L \\times B = 10 \\times 6 = \\mathbf{60\\text{ sq cm}}$.<br>\n• <strong>(b) Triangular Patch Area:</strong> The diagonal divides the rectangle into two identical triangles.<br>\n- Area of triangle = Half of rectangle area = 60 ÷ 2 = <strong>30 square cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Rectangle area = 60 cm²",
            "marks": "1.5 M"
          },
          {
            "key": "Triangle area = 30 cm²",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Walkway Pathway around a Lawn",
        "q": "A square lawn of side 20 metres is surrounded on the outside by a 2-metre-wide concrete walking path.<br>(a) Find the side length of the outer square including the path.<br>(b) Calculate the total area of the concrete walking path.",
        "ans": "<strong>Concentric Squares Area:</strong><br>\n• <strong>(a) Outer Square Side:</strong> 20 m + 2 m (left) + 2 m (right) = <strong>24 metres</strong>.<br>\n• <strong>(b) Pathway Area:</strong><br>\n- Outer square area = 24 × 24 = 576 sq m.<br>\n- Inner lawn area = 20 × 20 = 400 sq m.<br>\n- Path area = Outer area - Inner area = 576 - 400 = <strong>176 square metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Outer side = 24 m",
            "marks": "1.0 M"
          },
          {
            "key": "Outer area = 576, Inner area = 400",
            "marks": "1.0 M"
          },
          {
            "key": "Path area = 176 sq m",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Perimeter of Regular Shapes",
        "q": "Find the perimeter of:<br>(a) An equilateral triangle of side 14 cm<br>(b) A regular pentagon of side 9 cm<br>(c) A regular octagon of side 6 cm",
        "ans": "<strong>Perimeter Formulas:</strong><br>\n• <strong>(a) Equilateral Triangle (3 sides):</strong> 3 × 14 = <strong>42 cm</strong>.<br>\n• <strong>(b) Regular Pentagon (5 sides):</strong> 5 × 9 = <strong>45 cm</strong>.<br>\n• <strong>(c) Regular Octagon (8 sides):</strong> 8 × 6 = <strong>48 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Triangle = 42 cm",
            "marks": "1.0 M"
          },
          {
            "key": "Pentagon = 45 cm",
            "marks": "1.0 M"
          },
          {
            "key": "Octagon = 48 cm",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comparing Ribbon Perimeter to String Length",
        "q": "A girl has a 60 cm piece of string. She bends it to form:<br>(a) An equilateral triangle<br>(b) A square<br>(c) A regular hexagon<br>Find the length of each side for each shape.",
        "ans": "<strong>Side Lengths from Fixed Perimeter (P = 60 cm):</strong><br>\n• <strong>(a) Equilateral Triangle (3 sides):</strong> 60 ÷ 3 = <strong>20 cm</strong>.<br>\n• <strong>(b) Square (4 sides):</strong> 60 ÷ 4 = <strong>15 cm</strong>.<br>\n• <strong>(c) Regular Hexagon (6 sides):</strong> 60 ÷ 6 = <strong>10 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Triangle side = 20 cm",
            "marks": "1.0 M"
          },
          {
            "key": "Square side = 15 cm",
            "marks": "1.0 M"
          },
          {
            "key": "Hexagon side = 10 cm",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Cost of Fabric per Square Metre",
        "q": "A tailor makes 5 curtains, each measuring 2 metres by 1.5 metres.<br>(a) Find the area of one curtain.<br>(b) Find the total cloth area required for all 5 curtains.<br>(c) If the curtain cloth costs ₹160 per square metre, what is the total cost of fabric?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) One Curtain Area:</strong> 2 m × 1.5 m = <strong>3 sq metres</strong>.<br>\n• <strong>(b) Total Fabric Area:</strong> 5 × 3 sq m = <strong>15 sq metres</strong>.<br>\n• <strong>(c) Fabric Cost:</strong> 15 sq m × ₹160 = <strong>₹2,400</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "One curtain = 3 m²",
            "marks": "1.0 M"
          },
          {
            "key": "Total cloth = 15 m²",
            "marks": "1.0 M"
          },
          {
            "key": "Total cost = ₹2,400",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "HOTS • Area & Perimeter Puzzle",
        "q": "A wire bent in the shape of a rectangle of 18 cm × 12 cm is straightened and then bent into the shape of a square. Which shape has a larger area, and by how much?",
        "ans": "<strong>Isoperimetric Problem:</strong><br>\n1. <strong>Wire Length (Perimeter):</strong> 2 × (18 + 12) = 2 × 30 = <strong>60 cm</strong>.<br>\n2. <strong>Square Side:</strong> 60 ÷ 4 = <strong>15 cm</strong>.<br>\n3. <strong>Areas:</strong><br>\n• Rectangle Area = 18 × 12 = <strong>216 sq cm</strong>.<br>\n• Square Area = 15 × 15 = <strong>225 sq cm</strong>.<br>\n4. <strong>Comparison:</strong> The <strong>Square has a larger area</strong> by: 225 - 216 = <strong>9 sq cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Perimeter = 60 cm, Square side = 15 cm",
            "marks": "1.0 M"
          },
          {
            "key": "Areas: 216 cm² and 225 cm²",
            "marks": "1.0 M"
          },
          {
            "key": "Square is larger by 9 cm²",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Table Top Varnish • Rate per Unit",
        "q": "A rectangular dining table top measures 2.2 m by 1.1 m.<br>(a) Find the area of the table top.<br>(b) If polishing the surface costs ₹150 per square metre, calculate the total cost of polishing.",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Table Area:</strong> 2.2 m × 1.1 m = <strong>2.42 sq metres</strong>.<br>\n• <strong>(b) Polishing Cost:</strong> 2.42 × ₹150 = <strong>₹363</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Area = 2.42 m²",
            "marks": "1.5 M"
          },
          {
            "key": "Polishing cost = ₹363",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Square Tile Border Framing",
        "q": "A picture measuring 24 cm by 18 cm is pasted on a sheet of cardboard such that there is a margin of 2 cm along each side.<br>(a) Find the total length and breadth of the cardboard.<br>(b) Find the area of the margin.",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Cardboard Dimensions:</strong><br>\n- Length = 24 + 2 + 2 = <strong>28 cm</strong>.<br>\n- Breadth = 18 + 2 + 2 = <strong>22 cm</strong>.<br>\n• <strong>(b) Margin Area:</strong><br>\n- Cardboard area = 28 × 22 = 616 sq cm.<br>\n- Picture area = 24 × 18 = 432 sq cm.<br>\n- Margin area = 616 - 432 = <strong>184 square cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cardboard: 28 cm × 22 cm",
            "marks": "1.5 M"
          },
          {
            "key": "Margin area = 184 cm²",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Perimeter Shortcuts",
        "q": "Find the perimeter of:<br>(a) A square of side 25 cm<br>(b) A rectangle of 35 m by 15 m<br>(c) A rhombus of side 12.5 cm",
        "ans": "<strong>Shortcuts:</strong><br>\n• <strong>(a) Square:</strong> 4 × 25 = <strong>100 cm (1 metre)</strong>.<br>\n• <strong>(b) Rectangle:</strong> 2 × (35 + 15) = 2 × 50 = <strong>100 metres</strong>.<br>\n• <strong>(c) Rhombus:</strong> 4 × 12.5 = <strong>50 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 100 cm",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 100 m",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 50 cm",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "True or False with Geometric Reasoning",
        "q": "State True or False with reasoning:<br>(a) Two shapes with the same perimeter must have the same area.<br>(b) The perimeter of any rectangle is always greater than its area.<br>(c) A 1 cm² square fits inside a 1 cm² circle.",
        "ans": "<strong>Justifications:</strong><br>\n• <strong>(a) False:</strong> For example, rectangles with dimensions 5×1 (P=12, A=5) and 3×3 (P=12, A=9) have the same perimeter but different areas.<br>\n• <strong>(b) False:</strong> Perimeter and area have different units (cm vs cm²) and cannot be directly compared; moreover, a rectangle of 100×100 has area 10,000 cm² and perimeter only 400 cm.<br>\n• <strong>(c) False:</strong> A 1 cm² circle has diameter ≈ 1.13 cm, while a 1 cm² square has a diagonal of $\\sqrt{2} \\approx 1.41\\text{ cm}$ which exceeds the diameter of the circle.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): False with counter-example",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): False with dimension explanation",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): False with diagonal reasoning",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comprehensive Quilt Masterpiece Problem",
        "q": "Grandmother designs a royal quilt of 2.5 m × 2.0 m.<br>• Central medallion: 1.5 m × 1.0 m silk brocade.<br>• Surrounding border: Printed cotton patchwork.<br>(a) Find the total area of the quilt in square metres.<br>(b) What is the area of the silk central medallion?<br>(c) What is the area of the patchwork border?<br>(d) If satin lace costs ₹25 per metre, how much will it cost to border the outer edge of the quilt?",
        "ans": "<strong>Comprehensive Geometry of Quilt:</strong><br>\n• <strong>(a) Total Quilt Area:</strong> 2.5 m × 2.0 m = <strong>5.0 sq metres</strong>.<br>\n• <strong>(b) Central Medallion Area:</strong> 1.5 m × 1.0 m = <strong>1.5 sq metres</strong>.<br>\n• <strong>(c) Patchwork Border Area:</strong> Total area - Medallion area = 5.0 - 1.5 = <strong>3.5 sq metres</strong>.<br>\n• <strong>(d) Outer Lace Cost:</strong><br>\n- Perimeter = 2 × (2.5 + 2.0) = 2 × 4.5 = 9.0 metres.<br>\n- Cost = 9.0 m × ₹25 = <strong>₹225</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total area = 5.0 m²",
            "marks": "0.75 M"
          },
          {
            "key": "Medallion = 1.5 m²",
            "marks": "0.75 M"
          },
          {
            "key": "Border area = 3.5 m²",
            "marks": "0.75 M"
          },
          {
            "key": "Lace cost = ₹225",
            "marks": "0.75 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Competency Question: School Garden Lawn Turfing",
      "text": "A school garden has a square lawn of side 15 metres. Grass turf tiles of size 50 cm by 50 cm cost ₹40 each.",
      "question": "(a) What is the area of the lawn in square metres?<br>(b) How many turf tiles are needed to cover the entire lawn?<br>(c) What is the total cost of turfing?",
      "answer": "<div class=\"cbq-sol-label\">Suggested Model Solution:</div>\r\n          \r\n <div class=\"step\"><strong>(a) Lawn Area:</strong> 15 × 15 = <strong>225 sq metres</strong>.</div>\r\n <div class=\"step\"><strong>(b) Number of tiles:</strong> Tile = 0.25 sq m ⇒ 225/0.25 = <strong>900 tiles</strong>.</div>\r\n <div class=\"step\"><strong>(c) Total Cost:</strong> 900 × ₹40 = <strong>₹36,000</strong>.",
      "rubric": "1M concept identification + 1M step execution + 1M conclusion"
    }
  },
  {
    "id": "mela12",
    "num": 12,
    "unit": "Chapter 12 • Time Measurement, Elapsed Time & Clocks",
    "title": "Racing Seconds",
    "subtitle": "दौड़ते सेकंड (समय, सेकंड-मिनट-घंटे, डिजिटल स्टॉपवॉच एवं 24-घंटे घड़ी)",
    "concepts": [
      "Units of time: 1 hour = 60 minutes; 1 minute = 60 seconds; 1 hour = 3,600 seconds.",
      "Elapsed Time: Elapsed Time = Finish Time - Start Time.",
      "24-Hour Railway Clock: 1:00 PM = 13:00, 4:30 PM = 16:30, 11:45 PM = 23:45.",
      "Precision timekeeping with stopwatches (seconds and fractions of seconds)."
    ],
    "svg": "<svg viewBox=\"0 0 600 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"160\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Time Formats: 12-Hour AM/PM vs 24-Hour Railway Time</text>\r\n        <g transform=\"translate(60, 45)\">\r\n          <rect x=\"0\" y=\"0\" width=\"200\" height=\"65\" rx=\"8\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"2\"/>\r\n          <text x=\"100\" y=\"42\" font-family=\"'Courier New', monospace\" font-size=\"28\" font-weight=\"900\" fill=\"#10b981\" text-anchor=\"middle\">04:45 PM</text>\r\n          <text x=\"100\" y=\"58\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#94a3b8\" text-anchor=\"middle\">12-Hour Clock Format</text>\r\n          <text x=\"100\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Standard Evening Time</text>\r\n        </g>\r\n        <text x=\"300\" y=\"82\" font-family=\"system-ui, sans-serif\" font-size=\"20\" font-weight=\"900\" fill=\"#4f46e5\" text-anchor=\"middle\">⟺</text>\r\n        <g transform=\"translate(340, 45)\">\r\n          <rect x=\"0\" y=\"0\" width=\"200\" height=\"65\" rx=\"8\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"2\"/>\r\n          <text x=\"100\" y=\"42\" font-family=\"'Courier New', monospace\" font-size=\"28\" font-weight=\"900\" fill=\"#38bdf8\" text-anchor=\"middle\">16:45 Hrs</text>\r\n          <text x=\"100\" y=\"58\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#94a3b8\" text-anchor=\"middle\">24-Hour Railway Format</text>\r\n          <text x=\"100\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Formula: 4:45 + 12:00 = 16:45</text>\r\n        </g>\r\n        <text x=\"300\" y=\"148\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#475569\" text-anchor=\"middle\">Key Rule: To convert PM time to 24-hour time, add 12 hours to the hour value.</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Time Unit Conversions • Hours & Minutes",
        "q": "Convert:<br>(a) 3 hours 25 minutes into minutes.<br>(b) 280 minutes into hours and minutes.<br>(c) 4 minutes 45 seconds into seconds.<br>(d) 350 seconds into minutes and seconds.",
        "ans": "<strong>Conversions:</strong><br>\n• <strong>(a) 3 h 25 min:</strong> (3 × 60) + 25 = 180 + 25 = <strong>205 minutes</strong>.<br>\n• <strong>(b) 280 min:</strong> 280 ÷ 60 gives quotient 4 with remainder 40 → <strong>4 hours 40 minutes</strong>.<br>\n• <strong>(c) 4 min 45 s:</strong> (4 × 60) + 45 = 240 + 45 = <strong>285 seconds</strong>.<br>\n• <strong>(d) 350 s:</strong> 350 ÷ 60 gives quotient 5 with remainder 50 → <strong>5 minutes 50 seconds</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 205 minutes",
            "marks": "0.75 M"
          },
          {
            "key": "Part (b): 4 h 40 min",
            "marks": "0.75 M"
          },
          {
            "key": "Part (c): 285 seconds",
            "marks": "0.75 M"
          },
          {
            "key": "Part (d): 5 min 50 s",
            "marks": "0.75 M"
          }
        ]
      },
      {
        "category": "Stopwatch Timing • 100-Metre Sprint",
        "q": "A school sports day 100-metre race started at 10:42:15 AM and finished at 10:42:29 AM.<br>(a) What was the race duration recorded on the electronic timer?<br>(b) If the second runner finished in 15.6 seconds, by how many seconds did the winner win?",
        "ans": "<strong>Timing Calculations:</strong><br>\n• <strong>(a) Winner's Time:</strong> 10:42:29 - 10:42:15 = <strong>14 seconds</strong>.<br>\n• <strong>(b) Winning Margin:</strong> 15.6 s - 14.0 s = <strong>1.6 seconds</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Winner's time = 14 seconds",
            "marks": "1.5 M"
          },
          {
            "key": "Margin = 1.6 seconds",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Elapsed Time • Film Show Duration",
        "q": "A family film screening at a multiplex begins at 3:15 PM and ends at 5:50 PM. There is a 15-minute intermission in between.<br>(a) Find the total elapsed time from start to end.<br>(b) What was the actual playing time of the movie without intermission?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Total Duration:</strong> 3:15 PM to 5:15 PM is 2 hours; 5:15 PM to 5:50 PM is 35 minutes. Total = <strong>2 hours 35 minutes (155 minutes)</strong>.<br>\n• <strong>(b) Movie Playing Time:</strong> 155 min - 15 min intermission = 140 minutes = <strong>2 hours 20 minutes</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total duration = 2 h 35 min",
            "marks": "1.5 M"
          },
          {
            "key": "Movie runtime = 2 h 20 min",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "12-Hour vs 24-Hour Railway Time",
        "q": "Convert between 12-hour AM/PM and 24-hour Railway Time:<br>(a) 8:20 AM<br>(b) 7:45 PM<br>(c) 14:15 hours<br>(d) 23:50 hours",
        "ans": "<strong>Time Format Conversions:</strong><br>\n• <strong>(a) 8:20 AM:</strong> <strong>08:20 hours</strong>.<br>\n• <strong>(b) 7:45 PM:</strong> 7:45 + 12:00 = <strong>19:45 hours</strong>.<br>\n• <strong>(c) 14:15 hours:</strong> 14:15 - 12:00 = <strong>2:15 PM</strong>.<br>\n• <strong>(d) 23:50 hours:</strong> 23:50 - 12:00 = <strong>11:50 PM</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parts (a) & (b): 08:20, 19:45",
            "marks": "1.5 M"
          },
          {
            "key": "Parts (c) & (d): 2:15 PM, 11:50 PM",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Railway Timetable Duration Analysis",
        "q": "The Vande Bharat Express departs from New Delhi at 06:00 hours and arrives in Varanasi at 14:00 hours.<br>(a) How many hours does the journey take?<br>(b) If the distance is 760 km, what is the train's average speed?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Journey Time:</strong> 14:00 - 06:00 = <strong>8 hours</strong>.<br>\n• <strong>(b) Average Speed:</strong> Speed = Distance ÷ Time = 760 km ÷ 8 h = <strong>95 km/h</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Journey time = 8 hours",
            "marks": "1.5 M"
          },
          {
            "key": "Speed = 95 km/h",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Heartbeat Count • Pulse Measurement",
        "q": "A healthy 10-year-old child's heart beats 75 times per minute at rest.<br>(a) How many times does the heart beat in 1 hour?<br>(b) How many times does it beat in a full day of 24 hours?",
        "ans": "<strong>Heartbeat Calculations:</strong><br>\n• <strong>(a) In 1 Hour (60 min):</strong> 75 × 60 = <strong>4,500 beats per hour</strong>.<br>\n• <strong>(b) In 24 Hours:</strong> 4,500 × 24 = <strong>1,08,000 beats per day</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1 hour = 4,500 beats",
            "marks": "1.5 M"
          },
          {
            "key": "24 hours = 1,08,000 beats",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Adding Time Intervals",
        "q": "Add the following time periods:<br>(a) 2 hours 45 minutes + 3 hours 35 minutes<br>(b) 1 hour 50 minutes 40 seconds + 2 hours 25 minutes 35 seconds",
        "ans": "<strong>Addition with Regrouping:</strong><br>\n• <strong>(a) Hours and Minutes:</strong><br>\n- Minutes: 45 + 35 = 80 min = 1 h 20 min.<br>\n- Hours: 2 + 3 + 1 = 6 hours.<br>\n- Total = <strong>6 hours 20 minutes</strong>.<br>\n• <strong>(b) Hours, Minutes, Seconds:</strong><br>\n- Seconds: 40 + 35 = 75 s = 1 min 15 s.<br>\n- Minutes: 50 + 25 + 1 = 76 min = 1 h 16 min.<br>\n- Hours: 1 + 2 + 1 = 4 hours.<br>\n- Total = <strong>4 hours 16 minutes 15 seconds</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 6 h 20 min",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): 4 h 16 min 15 s",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Subtracting Time Intervals",
        "q": "Subtract:<br>(a) 5 hours 20 minutes - 2 hours 45 minutes<br>(b) 8 hours 15 minutes - 4 hours 50 minutes",
        "ans": "<strong>Subtraction with Borrowing (1 Hour = 60 Minutes):</strong><br>\n• <strong>(a) 5 h 20 min - 2 h 45 min:</strong><br>\n- Borrow 1 h (60 min): 20 + 60 = 80 min.<br>\n- 80 - 45 = 35 minutes.<br>\n- Hours: 4 - 2 = 2 hours.<br>\n- Result = <strong>2 hours 35 minutes</strong>.<br>\n• <strong>(b) 8 h 15 min - 4 h 50 min:</strong><br>\n- Borrow 1 h: 15 + 60 = 75 min.<br>\n- 75 - 50 = 25 minutes.<br>\n- Hours: 7 - 4 = 3 hours.<br>\n- Result = <strong>3 hours 25 minutes</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 2 h 35 min",
            "marks": "1.5 M"
          },
          {
            "key": "Part (b): 3 h 25 min",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "School Daily Timetable • Period Duration",
        "q": "A school day runs from 8:00 AM to 2:00 PM. It has morning assembly (20 minutes), two breaks of 15 minutes and 25 minutes, and 8 equal study periods.<br>(a) What is the total duration of the school day?<br>(b) What is the total non-instructional time (assembly + breaks)?<br>(c) How many minutes long is each study period?",
        "ans": "<strong>Timetable Analysis:</strong><br>\n• <strong>(a) Total School Duration:</strong> 8:00 AM to 2:00 PM = 6 hours = <strong>360 minutes</strong>.<br>\n• <strong>(b) Non-Instructional Time:</strong> 20 min + 15 min + 25 min = <strong>60 minutes (1 hour)</strong>.<br>\n• <strong>(c) Study Period Duration:</strong><br>\n- Instructional time = 360 - 60 = 300 minutes.<br>\n- 8 periods: 300 ÷ 8 = <strong>37.5 minutes (37 minutes 30 seconds per period)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total time = 360 min",
            "marks": "1.0 M"
          },
          {
            "key": "Non-instructional = 60 min",
            "marks": "1.0 M"
          },
          {
            "key": "Each period = 37.5 min",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Second Pendulum • Frequency & Beats",
        "q": "A grandfather clock pendulum takes 1 second to swing from one side to the other (half period), making one complete back-and-forth oscillation every 2 seconds.<br>(a) How many full oscillations does the pendulum complete in 1 minute?<br>(b) How many full oscillations does it complete in 1 hour?",
        "ans": "<strong>Pendulum Physics & Math:</strong><br>\n• <strong>(a) In 1 Minute (60 seconds):</strong> Period = 2 seconds. Oscillations = 60 ÷ 2 = <strong>30 oscillations per minute</strong>.<br>\n• <strong>(b) In 1 Hour (3,600 seconds):</strong> 3,600 ÷ 2 = <strong>1,800 oscillations per hour</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1 minute = 30 oscillations",
            "marks": "1.5 M"
          },
          {
            "key": "1 hour = 1,800 oscillations",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Flight Travel across Time Zones",
        "q": "A flight takes off from Delhi (IST) at 2:30 PM and lands in Dubai at 4:45 PM local time. Dubai time is 1 hour 30 minutes behind Indian Standard Time.<br>(a) What was the departure time in Dubai local time?<br>(b) What was the actual flight duration in hours and minutes?",
        "ans": "<strong>Time Zone Navigation:</strong><br>\n• <strong>(a) Departure in Dubai Time:</strong> 2:30 PM IST - 1 h 30 min = <strong>1:00 PM Dubai time</strong>.<br>\n• <strong>(b) Actual Flight Duration:</strong><br>\n- Both in Dubai time: 1:00 PM to 4:45 PM = <strong>3 hours 45 minutes</strong>.<br>\n<em>(Check in IST: Lands at 4:45 PM + 1:30 = 6:15 PM IST. 2:30 PM to 6:15 PM = 3 h 45 min).</em>",
        "marks": 3,
        "rubric": [
          {
            "key": "Departure in Dubai time = 1:00 PM",
            "marks": "1.5 M"
          },
          {
            "key": "Flight duration = 3 h 45 min",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Countdown Timer • Fireworks Launch",
        "q": "A New Year celebration countdown clock reads 00:08:45 (8 minutes 45 seconds to midnight).<br>(a) Express the countdown time entirely in seconds.<br>(b) What will the timer display after 250 seconds have elapsed?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) In Seconds:</strong> (8 × 60) + 45 = 480 + 45 = <strong>525 seconds</strong>.<br>\n• <strong>(b) Time Remaining:</strong><br>\n- 525 s - 250 s = 275 seconds.<br>\n- 275 ÷ 60 = 4 minutes with remainder 35 seconds.<br>\n- Timer will read: <strong>00:04:35 (4 minutes 35 seconds)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "525 seconds total",
            "marks": "1.5 M"
          },
          {
            "key": "Remaining: 4 min 35 s",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Speed Calculation • Sprinter Rate",
        "q": "A world-class sprinter runs 200 metres in 20 seconds.<br>(a) What is his speed in metres per second?<br>(b) Convert this speed into kilometres per hour ($1\\text{ m/s} = 3.6\\text{ km/h}$).",
        "ans": "<strong>Speed Conversions:</strong><br>\n• <strong>(a) Speed in m/s:</strong> Distance ÷ Time = 200 m ÷ 20 s = <strong>10 m/s</strong>.<br>\n• <strong>(b) Speed in km/h:</strong> 10 m/s × 3.6 = <strong>36 km/h</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Speed = 10 m/s",
            "marks": "1.5 M"
          },
          {
            "key": "Speed = 36 km/h",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Swimming Lap Times • Decimal Comparison",
        "q": "In a 50-metre freestyle swimming competition, four swimmers clock:<br>Swimmer A: 26.45 s, Swimmer B: 25.82 s, Swimmer C: 26.05 s, Swimmer D: 25.90 s.<br>(a) Who won the race?<br>(b) Arrange the swimmers in order of finish (1st to 4th).<br>(c) What was the winning margin between 1st place and 2nd place?",
        "ans": "<strong>Analysis (Fastest = Smallest Time):</strong><br>\n• <strong>(a) Winner:</strong> <strong>Swimmer B</strong> with 25.82 seconds.<br>\n• <strong>(b) Order of Finish:</strong><br>\n1st: Swimmer B (25.82 s)<br>\n2nd: Swimmer D (25.90 s)<br>\n3rd: Swimmer C (26.05 s)<br>\n4th: Swimmer A (26.45 s).<br>\n• <strong>(c) Winning Margin:</strong> 25.90 - 25.82 = <strong>0.08 seconds (8 hundredths of a second)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Winner: Swimmer B",
            "marks": "1.0 M"
          },
          {
            "key": "Finish order: B, D, C, A",
            "marks": "1.0 M"
          },
          {
            "key": "Winning margin = 0.08 s",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Leap Year & Century Math",
        "q": "(a) How many days are in a normal year and in a leap year?<br>(b) How many seconds are in one normal 24-hour day?<br>(c) Is the year 2024 a leap year? What about the year 2026?",
        "ans": "<strong>Calendar Science & Math:</strong><br>\n• <strong>(a) Days:</strong> Normal year = <strong>365 days</strong>; Leap year = <strong>366 days</strong>.<br>\n• <strong>(b) Seconds in a Day:</strong> 24 hours × 60 min × 60 s = 24 × 3,600 = <strong>86,400 seconds</strong>.<br>\n• <strong>(c) Leap Years:</strong><br>\n- 2024 is divisible by 4 (2024 ÷ 4 = 506) → <strong>2024 is a Leap Year</strong>.<br>\n- 2026 ÷ 4 leaves remainder 2 → <strong>2026 is NOT a leap year</strong> (normal year of 365 days).",
        "marks": 3,
        "rubric": [
          {
            "key": "365 and 366 days",
            "marks": "1.0 M"
          },
          {
            "key": "86,400 seconds in a day",
            "marks": "1.0 M"
          },
          {
            "key": "2024 is leap year, 2026 is not",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Baking Oven Timer • Cooking Schedule",
        "q": "A cake recipe requires baking for 45 minutes at 180°C. If the baker preheats the oven for 10 minutes and puts the cake in at 4:40 PM:<br>(a) At what time should the cake be taken out of the oven?<br>(b) If the cake needs 20 minutes to cool before icing, at what time can icing begin?",
        "ans": "<strong>Timeline Working:</strong><br>\n• <strong>(a) Cake Ready:</strong> Baking starts at 4:40 PM. 4:40 PM + 45 min = <strong>5:25 PM</strong>.<br>\n• <strong>(b) Icing Time:</strong> 5:25 PM + 20 min cooling = <strong>5:45 PM</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Out of oven = 5:25 PM",
            "marks": "1.5 M"
          },
          {
            "key": "Icing start = 5:45 PM",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Speed of Sound • Lightning & Thunder",
        "q": "Sound travels through air at approximately 340 metres per second. During a monsoon storm, Rohan sees a lightning flash and hears the thunder 5 seconds later.<br>(a) How far away was the lightning strike in metres?<br>(b) Express the distance in kilometres.",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Distance in Metres:</strong> Distance = Speed × Time = 340 m/s × 5 s = <strong>1,700 metres</strong>.<br>\n• <strong>(b) In Kilometres:</strong> 1,700 ÷ 1,000 = <strong>1.7 km</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Distance = 1,700 m",
            "marks": "1.5 M"
          },
          {
            "key": "In km = 1.7 km",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Seconds in Multiples of Minutes",
        "q": "Calculate quickly:<br>(a) Number of seconds in 12 minutes<br>(b) Number of seconds in 1.5 hours<br>(c) Number of minutes in 1 day",
        "ans": "<strong>Mental Calculations:</strong><br>\n• <strong>(a) 12 Minutes:</strong> 12 × 60 = <strong>720 seconds</strong>.<br>\n• <strong>(b) 1.5 Hours:</strong> 1.5 × 3,600 = <strong>5,400 seconds</strong>.<br>\n• <strong>(c) 1 Day (24 Hours):</strong> 24 × 60 = <strong>1,440 minutes</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 720 s",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 5,400 s",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 1,440 min",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "HOTS • Clock Face Mirror Riddle",
        "q": "A boy looks at an analog clock in a mirror. The reflection appears to show 7:20. What is the real actual time on the clock?",
        "ans": "<strong>Mirror Time Formula (Subtract from 11:60 or 12:00):</strong><br>\n1. Real time = 11:60 - Mirror time.<br>\n2. Real time = 11:60 - 7:20 = <strong>4:40</strong>.<br>\n3. <strong>Verification:</strong> At 4:40, the hour hand is between 4 and 5, minute hand is at 8. In the mirror, the hand at 8 reflects to 4 (20 minutes past), and the hand between 4 and 5 reflects to between 7 and 8 (hour 7). Verified: Real time is <strong>4:40</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mirror time formula (11:60 - time)",
            "marks": "1.5 M"
          },
          {
            "key": "Real time = 4:40 with verification",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Slow & Fast Clocks • Error Rate",
        "q": "A wall clock gains 2 minutes every day. It is set correctly at 12:00 noon on Monday.<br>(a) What time will the clock display at 12:00 noon on Saturday (5 days later)?<br>(b) How many days will it take for the clock to be fast by exactly 1 hour?",
        "ans": "<strong>Error Calculations:</strong><br>\n• <strong>(a) Saturday Reading:</strong><br>\n- Days elapsed = 5 days.<br>\n- Total gain = 5 × 2 min = 10 minutes.<br>\n- Clock will display: <strong>12:10 PM</strong>.<br>\n• <strong>(b) Days to Gain 1 Hour (60 min):</strong> 60 ÷ 2 min/day = <strong>30 days</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Saturday display = 12:10 PM",
            "marks": "1.5 M"
          },
          {
            "key": "30 days to gain 1 hour",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Earth Rotation Speed • Astronomy Math",
        "q": "The Earth completes one full rotation of 360° on its axis in 24 hours.<br>(a) Through how many degrees does the Earth rotate in 1 hour?<br>(b) How many minutes does the Earth take to rotate through 1 degree?",
        "ans": "<strong>Planetary Rotation Math:</strong><br>\n• <strong>(a) Degrees per Hour:</strong> 360° ÷ 24 h = <strong>15° per hour</strong>.<br>\n• <strong>(b) Time per Degree:</strong> 1 hour = 60 minutes. Time for 1° = 60 min ÷ 15° = <strong>4 minutes per degree</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "15° per hour",
            "marks": "1.5 M"
          },
          {
            "key": "4 minutes per degree",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Heartbeat vs Breath Ratio",
        "q": "A sleeping child takes 20 breaths per minute, while her heart beats 80 times per minute.<br>(a) Find the ratio of heartbeats to breaths in simplest form.<br>(b) How many heartbeats occur during 1 single breath?",
        "ans": "<strong>Ratio & Unit Rate:</strong><br>\n• <strong>(a) Ratio:</strong> Heartbeats : Breaths = 80 : 20 = <strong>4 : 1</strong>.<br>\n• <strong>(b) Heartbeats per Breath:</strong> 80 ÷ 20 = <strong>4 heartbeats per breath</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Ratio = 4 : 1",
            "marks": "1.5 M"
          },
          {
            "key": "4 heartbeats per breath",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "True or False with Time Reasoning",
        "q": "State True or False with reasoning:<br>(a) 2.5 hours means 2 hours 50 minutes.<br>(b) Midnight in 24-hour time can be written as 00:00 or 24:00.<br>(c) A leap century year like 2000 is divisible by 400.",
        "ans": "<strong>Justifications:</strong><br>\n• <strong>(a) False:</strong> 0.5 hour = half of 60 minutes = 30 minutes. Therefore 2.5 hours is <strong>2 hours 30 minutes</strong>, not 2 hours 50 minutes.<br>\n• <strong>(b) True:</strong> 00:00 represents the beginning of the day, and 24:00 represents the conclusion of the day.<br>\n• <strong>(c) True:</strong> For century years ending in '00', a year is only a leap year if it is divisible by 400 (e.g. 2000 was a leap year, but 1900 was not).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): False (2.5 h = 2 h 30 min)",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): True with 24-hour explanation",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): True with century leap rule",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comprehensive Time Mastery Review",
        "q": "An astronaut on the International Space Station orbits the Earth once every 90 minutes.<br>(a) How many orbits does the space station complete in one 24-hour day?<br>(b) How many sunrises and sunsets do the astronauts experience in a day?",
        "ans": "<strong>Orbital Time Calculations:</strong><br>\n• <strong>(a) Orbits in 24 Hours:</strong><br>\n- 24 hours = 24 × 60 = 1,440 minutes.<br>\n- Orbits = 1,440 ÷ 90 = <strong>16 orbits per day</strong>.<br>\n• <strong>(b) Sunrises & Sunsets:</strong> Each orbit brings 1 sunrise and 1 sunset. In 16 orbits, the astronauts witness <strong>16 sunrises and 16 sunsets</strong> every single day!",
        "marks": 3,
        "rubric": [
          {
            "key": "Total day = 1,440 minutes",
            "marks": "1.0 M"
          },
          {
            "key": "Orbits = 16",
            "marks": "1.0 M"
          },
          {
            "key": "16 sunrises and 16 sunsets",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Competency Question: Intercity Vande Bharat Express Timetable",
      "text": "The Vande Bharat Express departs New Delhi station at 06:00 hours and arrives at Varanasi Junction at 14:00 hours, covering a rail distance of 759 km.",
      "question": "(a) What is the total travel duration of the train in hours?<br>(b) What is the average speed of the train in km/h?",
      "answer": "<div class=\"cbq-sol-label\">Suggested Model Solution:</div>\r\n          \r\n <div class=\"step\"><strong>(a) Duration:</strong> 14:00 - 06:00 = <strong>8 hours</strong>.</div>\r\n <div class=\"step\"><strong>(b) Average Speed:</strong> 759/8 = <strong>94.875 km/h</strong>.",
      "rubric": "1M concept identification + 1M step execution + 1M conclusion"
    }
  },
  {
    "id": "mela13",
    "num": 13,
    "unit": "Chapter 13 • Multiples, Common Multiples & Lowest Common Multiple",
    "title": "Animal Jumps",
    "subtitle": "जानवरों की छलाँग (गुणज, सार्व गुणज एवं लघुत्तम समापवर्त्य - LCM)",
    "concepts": [
      "Multiples of a number: The numbers obtained by multiplying it by natural numbers (1, 2, 3, …).",
      "Common Multiples: Numbers that appear in the multiple lists of two or more given numbers.",
      "Lowest Common Multiple (LCM): The smallest non-zero common multiple of given numbers.",
      "Step/jump word problems on a number line representing periodic cycles.",
      "Frog lands on multiples of 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48...",
      "Rabbit lands on multiples of 7: 7, 14, 21, 28, 35, 42, 49...",
      "(a) Common steps under 50: 21 and 42.",
      "(b) First common step: $\\text{LCM}(3, 7) = \\mathbf{21}$."
    ],
    "svg": "<svg viewBox=\"0 0 600 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"160\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Number Line Jumps: Frog (Steps of 3) vs Rabbit (Steps of 5) → LCM = 15</text>\r\n        <g transform=\"translate(40, 95)\">\r\n          <line x1=\"0\" y1=\"0\" x2=\"520\" y2=\"0\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\r\n        </g>\r\n        <g transform=\"translate(40, 95)\">\r\n          <path d=\"M 0,0 Q 43,-35 86,0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\r\n          <path d=\"M 86,0 Q 129,-35 172,0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\r\n          <path d=\"M 172,0 Q 215,-35 258,0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\r\n          <path d=\"M 258,0 Q 301,-35 344,0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\r\n          <path d=\"M 344,0 Q 387,-35 430,0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\r\n          <path d=\"M 0,0 Q 71,-55 143,0\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2.5\" stroke-dasharray=\"5 3\"/>\r\n          <path d=\"M 143,0 Q 214,-55 286,0\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2.5\" stroke-dasharray=\"5 3\"/>\r\n          <path d=\"M 286,0 Q 358,-55 430,0\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2.5\" stroke-dasharray=\"5 3\"/>\r\n          <circle cx=\"430\" cy=\"0\" r=\"7\" fill=\"#dc2626\"/>\r\n          <text x=\"430\" y=\"-14\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"800\" fill=\"#dc2626\" text-anchor=\"middle\">LCM: 15</text>\r\n          <text x=\"0\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">0</text>\r\n          <text x=\"86\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#2563eb\" text-anchor=\"middle\">3</text>\r\n          <text x=\"143\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#16a34a\" text-anchor=\"middle\">5</text>\r\n          <text x=\"172\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#2563eb\" text-anchor=\"middle\">6</text>\r\n          <text x=\"258\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#2563eb\" text-anchor=\"middle\">9</text>\r\n          <text x=\"286\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#16a34a\" text-anchor=\"middle\">10</text>\r\n          <text x=\"344\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#2563eb\" text-anchor=\"middle\">12</text>\r\n          <text x=\"430\" y=\"20\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"900\" fill=\"#dc2626\" text-anchor=\"middle\">15</text>\r\n        </g>\r\n        <text x=\"300\" y=\"150\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#475569\" text-anchor=\"middle\">Blue solid curve = Multiples of 3 (Frog) | Green dashed curve = Multiples of 5 (Rabbit) | First common landing = 15</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Number Line Jumps • Multiples",
        "q": "A frog jumps 3 steps at a time, and a rabbit jumps 5 steps at a time. Both start jumping from step 0.<br>(a) List the first 6 steps where the frog lands.<br>(b) List the first 6 steps where the rabbit lands.<br>(c) At which step will they both land on the same number for the first time? What is this number called?",
        "ans": "<strong>Multiples on Number Line:</strong><br>\n• <strong>(a) Frog's Landing Steps:</strong> Multiples of 3: <strong>3, 6, 9, 12, 15, 18</strong>.<br>\n• <strong>(b) Rabbit's Landing Steps:</strong> Multiples of 5: <strong>5, 10, 15, 20, 25, 30</strong>.<br>\n• <strong>(c) First Common Landing:</strong> Both land on step <strong>15</strong>.<br>\nThis number is called the <strong>Lowest Common Multiple (LCM)</strong> of 3 and 5.",
        "marks": 3,
        "rubric": [
          {
            "key": "Frog: 3, 6, 9, 12, 15, 18",
            "marks": "1.0 M"
          },
          {
            "key": "Rabbit: 5, 10, 15, 20, 25, 30",
            "marks": "1.0 M"
          },
          {
            "key": "First common = 15 (LCM)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Finding LCM • Common Multiples",
        "q": "Find the Lowest Common Multiple (LCM) of:<br>(a) 4 and 6<br>(b) 6 and 8<br>(c) 5 and 10",
        "ans": "<strong>LCM Computations:</strong><br>\n• <strong>(a) LCM(4, 6):</strong><br>\n- Multiples of 4: 4, 8, <strong>12</strong>, 16...<br>\n- Multiples of 6: 6, <strong>12</strong>, 18...<br>\n- LCM = <strong>12</strong>.<br>\n• <strong>(b) LCM(6, 8):</strong><br>\n- Multiples of 6: 6, 12, 18, <strong>24</strong>, 30...<br>\n- Multiples of 8: 8, 16, <strong>24</strong>, 32...<br>\n- LCM = <strong>24</strong>.<br>\n• <strong>(c) LCM(5, 10):</strong> Since 10 is a multiple of 5, LCM = <strong>10</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "LCM(4, 6) = 12",
            "marks": "1.0 M"
          },
          {
            "key": "LCM(6, 8) = 24",
            "marks": "1.0 M"
          },
          {
            "key": "LCM(5, 10) = 10",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Factors & Common Factors • HCF",
        "q": "(a) Write all factors of 18.<br>(b) Write all factors of 24.<br>(c) What are their common factors? What is their Highest Common Factor (HCF)?",
        "ans": "<strong>Factors & HCF:</strong><br>\n• <strong>(a) Factors of 18:</strong> 1, 2, 3, 6, 9, 18.<br>\n• <strong>(b) Factors of 24:</strong> 1, 2, 3, 4, 6, 8, 12, 24.<br>\n• <strong>(c) Common Factors:</strong> <strong>1, 2, 3, 6</strong>.<br>\n- <strong>Highest Common Factor (HCF):</strong> <strong>6</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Factors of 18 and 24",
            "marks": "1.5 M"
          },
          {
            "key": "Common factors: 1, 2, 3, 6 & HCF = 6",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Church Bells Ringing • LCM Word Problem",
        "q": "Three school bells ring at intervals of 15, 20, and 30 minutes respectively. If they all ring together at 8:00 AM:<br>(a) After how many minutes will they all ring together again?<br>(b) At what clock time will they next toll together?",
        "ans": "<strong>LCM of 15, 20, 30:</strong><br>\n• Multiples of 15: 15, 30, 45, <strong>60</strong>, 75...<br>\n• Multiples of 20: 20, 40, <strong>60</strong>, 80...<br>\n• Multiples of 30: 30, <strong>60</strong>, 90...<br>\n• <strong>(a) LCM:</strong> <strong>60 minutes (1 hour)</strong>.<br>\n• <strong>(b) Clock Time:</strong> 8:00 AM + 1 hour = <strong>9:00 AM</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "LCM = 60 minutes",
            "marks": "1.5 M"
          },
          {
            "key": "Time = 9:00 AM",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Tamarind Seeds Arrangement • Factor Rectangles",
        "q": "Sunita has 12 tamarind seeds (imli seeds). She arranges them in rectangular grids.<br>(a) List all the different rectangular arrays she can form (e.g. 1 × 12).<br>(b) How do these arrays relate to the factors of 12?",
        "ans": "<strong>Factor Rectangles:</strong><br>\n• <strong>(a) Possible Arrays:</strong><br>\n- 1 row of 12 (1 × 12)<br>\n- 2 rows of 6 (2 × 6)<br>\n- 3 rows of 4 (3 × 4)<br>\n- 4 rows of 3 (4 × 3)<br>\n- 6 rows of 2 (6 × 2)<br>\n- 12 rows of 1 (12 × 1).<br>\n• <strong>(b) Relation to Factors:</strong> The dimensions of the rectangles represent the <strong>factor pairs</strong> of 12: (1, 12), (2, 6), (3, 4). The complete set of factors is {1, 2, 3, 4, 6, 12}.",
        "marks": 3,
        "rubric": [
          {
            "key": "All rectangular arrays listed",
            "marks": "1.5 M"
          },
          {
            "key": "Clear connection to factor pairs of 12",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Circular Track Racers • Meeting Time",
        "q": "Two runners, Aman and Baman, start together at the starting line of a circular track. Aman completes a lap in 60 seconds, and Baman in 90 seconds.<br>(a) After how many seconds will they next cross the starting line together?<br>(b) How many laps will each runner have completed at that moment?",
        "ans": "<strong>LCM of 60 and 90:</strong><br>\n• 60 = 30 × 2; 90 = 30 × 3.<br>\n• <strong>(a) Meeting Time:</strong> LCM(60, 90) = 30 × 2 × 3 = <strong>180 seconds (3 minutes)</strong>.<br>\n• <strong>(b) Laps Completed:</strong><br>\n- Aman: 180 ÷ 60 = <strong>3 laps</strong>.<br>\n- Baman: 180 ÷ 90 = <strong>2 laps</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "LCM = 180 seconds (3 min)",
            "marks": "1.5 M"
          },
          {
            "key": "Aman: 3 laps; Baman: 2 laps",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Prime Factorization using Factor Trees",
        "q": "Draw or describe factor trees to find the prime factors of:<br>(a) 24<br>(b) 36<br>(c) 72",
        "ans": "<strong>Prime Factorizations:</strong><br>\n• <strong>(a) 24:</strong> 24 = 2 × 12 = 2 × 2 × 6 = <strong>2 × 2 × 2 × 3 (or 2³ × 3)</strong>.<br>\n• <strong>(b) 36:</strong> 36 = 6 × 6 = (2 × 3) × (2 × 3) = <strong>2 × 2 × 3 × 3 (or 2² × 3²)</strong>.<br>\n• <strong>(c) 72:</strong> 72 = 8 × 9 = (2 × 2 × 2) × (3 × 3) = <strong>2 × 2 × 2 × 3 × 3 (or 2³ × 3²)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "24 = 2 × 2 × 2 × 3",
            "marks": "1.0 M"
          },
          {
            "key": "36 = 2 × 2 × 3 × 3",
            "marks": "1.0 M"
          },
          {
            "key": "72 = 2 × 2 × 2 × 3 × 3",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Bangles Grouping Activity",
        "q": "Meena has 18 bangles. She tries to make groups of equal size:<br>(a) What different size groups can she make without any bangles left over?<br>(b) How many groups can she make if she has a prime number of bangles, say 13?",
        "ans": "<strong>Grouping & Factorization:</strong><br>\n• <strong>(a) Groups for 18 Bangles:</strong> Group sizes correspond to factors of 18:<br>\n- Groups of <strong>1, 2, 3, 6, 9, or 18</strong> bangles.<br>\n• <strong>(b) For 13 Bangles (Prime):</strong> 13 has only two factors (1 and 13).<br>\n- She can only make <strong>13 groups of 1 bangle</strong> each, or <strong>1 group of 13 bangles</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Groups of 1, 2, 3, 6, 9, 18",
            "marks": "1.5 M"
          },
          {
            "key": "Prime 13: only groups of 1 or 13",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Venn Diagram of Multiples",
        "q": "In a diagram with two overlapping circles labeled 'Multiples of 3' and 'Multiples of 5':<br>(a) List the numbers from 1 to 30 that go in the common middle section.<br>(b) What is the smallest number in the common section?",
        "ans": "<strong>Common Multiples (1 to 30):</strong><br>\n• Multiples of 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30.<br>\n• Multiples of 5: 5, 10, 15, 20, 25, 30.<br>\n• <strong>(a) Common Section:</strong> <strong>15, 30</strong>.<br>\n• <strong>(b) Smallest Common:</strong> <strong>15</strong> (which is LCM of 3 and 5).",
        "marks": 3,
        "rubric": [
          {
            "key": "Common section: 15, 30",
            "marks": "1.5 M"
          },
          {
            "key": "Smallest number = 15",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cat and Mouse Game • Escape Steps",
        "q": "In the NCERT Cat and Mouse game: The mouse is on step 14 and can jump 2 steps at a time. The cat is on step 3 and can jump 3 steps at a time. There is a mouse hole at step 28.<br>(a) Can the mouse reach the safety hole before the cat catches it?<br>(b) Show the steps for both to prove your answer.",
        "ans": "<strong>Step Tracking:</strong><br>\n• <strong>Mouse (Starts at 14, jumps 2):</strong><br>\n- Jumps: 14 → 16 → 18 → 20 → 22 → 24 → 26 → <strong>28 (Safety hole reached in 7 jumps)</strong>.<br>\n• <strong>Cat (Starts at 3, jumps 3):</strong><br>\n- Jumps: 3 → 6 → 9 → 12 → 15 → 18 → 21 → 24.<br>\n• <strong>(a) Conclusion:</strong> In jump 7, the mouse reaches 28 while the cat is only at 24. <strong>The mouse reaches the hole safely and escapes!</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "Mouse steps to 28 (7 jumps)",
            "marks": "1.5 M"
          },
          {
            "key": "Cat steps to 24 & positive escape proof",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Tile Paving • HCF Room Problem",
        "q": "A courtyard floor is 18 metres long and 12 metres wide. The owner wants to pave it with the largest possible identical square tiles without cutting any tile.<br>(a) What is the side length of the largest square tile (HCF)?<br>(b) How many such tiles will be needed to cover the entire floor?",
        "ans": "<strong>HCF Application:</strong><br>\n• <strong>(a) Largest Tile Side:</strong> HCF(18, 12):<br>\n- Factors of 18: 1, 2, 3, 6, 9, 18.<br>\n- Factors of 12: 1, 2, 3, 4, 6, 12.<br>\n- HCF = <strong>6 metres</strong>.<br>\n• <strong>(b) Number of Tiles:</strong><br>\n- Along length: 18 ÷ 6 = 3 tiles.<br>\n- Along width: 12 ÷ 6 = 2 tiles.<br>\n- Total tiles = 3 × 2 = <strong>6 square tiles</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Largest side = HCF = 6 m",
            "marks": "1.5 M"
          },
          {
            "key": "Tile count = 6 tiles",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Ribbon Cutting • Equal Pieces (HCF)",
        "q": "A craft teacher has two rolls of ribbon: red ribbon of 36 cm and blue ribbon of 48 cm. She wants to cut both ribbons into pieces of equal length with nothing left over.<br>(a) What is the greatest possible length of each piece?<br>(b) How many pieces of red ribbon and blue ribbon will she get?",
        "ans": "<strong>HCF of 36 and 48:</strong><br>\n• <strong>(a) Greatest Length:</strong> HCF(36, 48) = <strong>12 cm</strong>.<br>\n• <strong>(b) Number of Pieces:</strong><br>\n- Red ribbon: 36 ÷ 12 = <strong>3 pieces</strong>.<br>\n- Blue ribbon: 48 ÷ 12 = <strong>4 pieces</strong>.<br>\n- Total pieces = 3 + 4 = 7 pieces.",
        "marks": 3,
        "rubric": [
          {
            "key": "Greatest length = 12 cm",
            "marks": "1.5 M"
          },
          {
            "key": "Red: 3 pieces, Blue: 4 pieces",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Even and Odd Multiples",
        "q": "(a) What is the only even prime number?<br>(b) Is the product of two odd numbers always odd or even? Give an example.<br>(c) Is the sum of two odd numbers always odd or even? Give an example.",
        "ans": "<strong>Properties:</strong><br>\n• <strong>(a) Even Prime:</strong> <strong>2</strong> is the only even prime number (all other even numbers are divisible by 2).<br>\n• <strong>(b) Product of Two Odds:</strong> Always <strong>Odd</strong>. Example: 3 × 5 = 15.<br>\n• <strong>(c) Sum of Two Odds:</strong> Always <strong>Even</strong>. Example: 3 + 5 = 8.",
        "marks": 3,
        "rubric": [
          {
            "key": "2 is only even prime",
            "marks": "1.0 M"
          },
          {
            "key": "Product of odds = Odd",
            "marks": "1.0 M"
          },
          {
            "key": "Sum of odds = Even",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Divisibility Rules • 2, 3, 5, 10",
        "q": "Test the number <strong>4,260</strong> for divisibility by:<br>(a) 2<br>(b) 3<br>(c) 5<br>(d) 10<br>State the rule used for each.",
        "ans": "<strong>Divisibility Rules for 4,260:</strong><br>\n• <strong>(a) By 2:</strong> Ones digit is 0 (even) → <strong>Divisible by 2</strong>.<br>\n• <strong>(b) By 3:</strong> Sum of digits = 4 + 2 + 6 + 0 = 12. Since 12 is divisible by 3 → <strong>Divisible by 3</strong>.<br>\n• <strong>(c) By 5:</strong> Ones digit is 0 → <strong>Divisible by 5</strong>.<br>\n• <strong>(d) By 10:</strong> Ones digit is 0 → <strong>Divisible by 10</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Divisible by 2 and 3 with rules",
            "marks": "1.5 M"
          },
          {
            "key": "Divisible by 5 and 10 with rules",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Kangaroo, Frog, and Hare Multi-Jump",
        "q": "A frog jumps 2 steps, a hare jumps 3 steps, and a kangaroo jumps 7 steps. All start from 0.<br>(a) At which step will all three animals land together for the first time?<br>(b) How many jumps will the kangaroo have made to reach that step?",
        "ans": "<strong>LCM of 2, 3, 7 (All Prime Numbers):</strong><br>\n• <strong>(a) Meeting Step:</strong> Since 2, 3, 7 have no common factors, LCM = 2 × 3 × 7 = <strong>42</strong>.<br>\n• <strong>(b) Kangaroo Jumps:</strong> 42 ÷ 7 = <strong>6 jumps</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "LCM(2, 3, 7) = 42",
            "marks": "1.5 M"
          },
          {
            "key": "Kangaroo jumps = 6",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Common Multiple Word Problem • Egg Packaging",
        "q": "A poultry farm packages eggs. When packed into cartons of 6, none are left over. When packed into cartons of 10, none are left over. If there are between 50 and 80 eggs:<br>(a) What is the exact number of eggs?<br>(b) How many cartons of 6 and cartons of 10 would be filled?",
        "ans": "<strong>Working:</strong><br>\n• Multiples of 6: 6, 12, 18, 24, 30, 36, 42, 48, 54, <strong>60</strong>, 66, 72, 78.<br>\n• Multiples of 10: 10, 20, 30, 40, 50, <strong>60</strong>, 70, 80.<br>\n• <strong>(a) Exact Count:</strong> The only common multiple between 50 and 80 is <strong>60 eggs</strong>.<br>\n• <strong>(b) Cartons:</strong><br>\n- Cartons of 6 = 60 ÷ 6 = <strong>10 cartons</strong>.<br>\n- Cartons of 10 = 60 ÷ 10 = <strong>6 cartons</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Exact count = 60 eggs",
            "marks": "1.5 M"
          },
          {
            "key": "10 cartons of 6; 6 cartons of 10",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • LCM & HCF Shortcuts",
        "q": "State the LCM and HCF of the following pairs by inspection:<br>(a) 7 and 14<br>(b) 8 and 9<br>(c) 15 and 30",
        "ans": "<strong>Inspection Shortcuts:</strong><br>\n• <strong>(a) 7 and 14:</strong> Since 14 is a multiple of 7:<br>\n- <strong>HCF = 7</strong>, <strong>LCM = 14</strong>.<br>\n• <strong>(b) 8 and 9 (Consecutive numbers / Co-prime):</strong><br>\n- <strong>HCF = 1</strong>, <strong>LCM = 8 × 9 = 72</strong>.<br>\n• <strong>(c) 15 and 30:</strong> Since 30 is a multiple of 15:<br>\n- <strong>HCF = 15</strong>, <strong>LCM = 30</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): HCF=7, LCM=14",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): HCF=1, LCM=72",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): HCF=15, LCM=30",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Planting Trees along Boundary (HCF)",
        "q": "A rectangular park of 75 m by 45 m is to have ornamental trees planted at equal intervals all along its boundary and at the corners.<br>(a) What is the maximum distance between two consecutive trees?<br>(b) What is the total number of trees needed?",
        "ans": "<strong>HCF & Perimeter Grid:</strong><br>\n• <strong>(a) Maximum Distance:</strong> HCF(75, 45) = <strong>15 metres</strong>.<br>\n• <strong>(b) Number of Trees:</strong><br>\n- Perimeter = 2 × (75 + 45) = 2 × 120 = 240 metres.<br>\n- Trees = 240 m ÷ 15 m = <strong>16 trees</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Max distance = HCF = 15 m",
            "marks": "1.5 M"
          },
          {
            "key": "Trees = 16",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "HOTS • Remainder with Multiple Jumpers",
        "q": "A number leaves a remainder of 1 when divided by 2, a remainder of 1 when divided by 3, and a remainder of 1 when divided by 4. What is the smallest such number greater than 1?",
        "ans": "<strong>LCM and Remainder Deduction:</strong><br>\n1. The number is of the form: $\\text{LCM}(2, 3, 4) + 1$.<br>\n2. LCM of 2, 3, 4:<br>\n• Multiples of 4: 4, 8, <strong>12</strong>... (12 is divisible by both 2 and 3).<br>\n• LCM(2, 3, 4) = 12.<br>\n3. The number = 12 + 1 = <strong>13</strong>.<br>\n4. <strong>Verification:</strong><br>\n- 13 ÷ 2 = 6 with remainder 1.<br>\n- 13 ÷ 3 = 4 with remainder 1.<br>\n- 13 ÷ 4 = 3 with remainder 1. Solution verified!",
        "marks": 3,
        "rubric": [
          {
            "key": "LCM(2, 3, 4) = 12",
            "marks": "1.5 M"
          },
          {
            "key": "Number = 13 with verification",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Traffic Light Synchronization",
        "q": "Three traffic signals turn green every 40 seconds, 60 seconds, and 80 seconds.<br>(a) After how many seconds will all three turn green simultaneously?<br>(b) Express this duration in minutes.",
        "ans": "<strong>LCM of 40, 60, 80:</strong><br>\n• Prime factorizations:<br>\n- 40 = 2³ × 5<br>\n- 60 = 2² × 3 × 5<br>\n- 80 = 2⁴ × 5<br>\n• LCM = 2⁴ × 3 × 5 = 16 × 15 = <strong>240 seconds</strong>.<br>\n• <strong>(b) In Minutes:</strong> 240 ÷ 60 = <strong>4 minutes</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "LCM = 240 seconds",
            "marks": "1.5 M"
          },
          {
            "key": "Duration = 4 minutes",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Factor Pairs • Table Formulation",
        "q": "Formulate all factor pairs for 40 and 50. Use them to prove whether 40 and 50 have more than two common factors.",
        "ans": "<strong>Factor Pairs:</strong><br>\n• <strong>For 40:</strong> 1 × 40, 2 × 20, 4 × 10, 5 × 8. Factors = {1, 2, 4, 5, 8, 10, 20, 40}.<br>\n• <strong>For 50:</strong> 1 × 50, 2 × 25, 5 × 10. Factors = {1, 2, 5, 10, 25, 50}.<br>\n• <strong>Common Factors:</strong> <strong>1, 2, 5, 10 (4 common factors)</strong>.<br>\n• <strong>Conclusion:</strong> Yes, they have 4 common factors, which is more than two.",
        "marks": 3,
        "rubric": [
          {
            "key": "Factor pairs of 40 and 50",
            "marks": "1.5 M"
          },
          {
            "key": "Common factors: 1, 2, 5, 10 (4 factors)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Multiples of 100 • Zero Tracking",
        "q": "(a) What is the LCM of 25 and 100?<br>(b) What is the LCM of 20 and 50?<br>(c) What is the HCF of 100 and 150?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) LCM(25, 100):</strong> 100 is a multiple of 25 → <strong>100</strong>.<br>\n• <strong>(b) LCM(20, 50):</strong> Multiples of 50: 50, <strong>100</strong>... (100 ÷ 20 = 5) → <strong>100</strong>.<br>\n• <strong>(c) HCF(100, 150):</strong> 150 - 100 = 50. Both 100 and 150 are divisible by 50 → <strong>50</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 100",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 100",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 50",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "True or False with Factor/Multiple Reason",
        "q": "State True or False with reasoning:<br>(a) Every number is both a factor and a multiple of itself.<br>(b) The HCF of two numbers is always greater than their LCM.<br>(c) A number that has more than two factors is called a composite number.",
        "ans": "<strong>Justifications:</strong><br>\n• <strong>(a) True:</strong> For any number $n$, $n \\times 1 = n$ (so $n$ divides itself, making it a factor), and $n = 1 \\times n$ (so it is in its own table of multiples).<br>\n• <strong>(b) False:</strong> HCF is a divisor (less than or equal to the numbers), while LCM is a multiple (greater than or equal to the numbers). HCF is always <strong>less than or equal to LCM</strong>.<br>\n• <strong>(c) True:</strong> By definition, numbers with 3 or more factors are composite.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): True with self-factor reasoning",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): False (HCF ≤ LCM)",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): True with definition",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comprehensive Chapter Review • Step Challenge",
        "q": "Three children, Anita (step length 40 cm), Bablu (step length 50 cm), and Chintu (step length 60 cm), take part in a walkathon from the same starting line.<br>(a) At what minimum distance from the start will their steps align exactly again?<br>(b) How many steps will each child have taken at that distance?",
        "ans": "<strong>LCM of 40, 50, 60:</strong><br>\n• Prime factorizations:<br>\n- 40 = 2³ × 5<br>\n- 50 = 2 × 5²<br>\n- 60 = 2² × 3 × 5<br>\n• <strong>(a) Minimum Distance:</strong> LCM = 2³ × 3 × 5² = 8 × 3 × 25 = <strong>600 cm (6 metres)</strong>.<br>\n• <strong>(b) Steps Taken:</strong><br>\n- Anita: 600 ÷ 40 = <strong>15 steps</strong>.<br>\n- Bablu: 600 ÷ 50 = <strong>12 steps</strong>.<br>\n- Chintu: 600 ÷ 60 = <strong>10 steps</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "LCM = 600 cm = 6 m",
            "marks": "1.5 M"
          },
          {
            "key": "Anita: 15, Bablu: 12, Chintu: 10 steps",
            "marks": "1.5 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Competency Question: Traffic Light Synchronization",
      "text": "Three traffic signals at a busy junction change their lights after every 40 seconds, 60 seconds, and 75 seconds respectively. If they all change simultaneously at 8:00 AM, when will they change together next?",
      "question": "Find the time at which all three traffic lights will change together again.",
      "answer": "<div class=\"cbq-sol-label\">Suggested Model Solution:</div>\r\n          \r\n <div class=\"step\">LCM(40, 60, 75) = 600 seconds = <strong>10 minutes</strong>.<br>\r\n Next change time = 8:00 AM + 10 min = <strong>8:10 AM</strong>.",
      "rubric": "1M concept identification + 1M step execution + 1M conclusion"
    }
  },
  {
    "id": "mela14",
    "num": 14,
    "unit": "Chapter 14 • Coordinate Grids, Navigation & Spatial Relations",
    "title": "Maps and Locations",
    "subtitle": "मानचित्र और स्थितियाँ (निर्देशांक ग्रिड, दिशाएँ एवं स्थल पहचान)",
    "concepts": [
      "Grid coordinates: Identifying positions using Column-Row coordinate pairs (e.g., (C, 3)).",
      "Horizontal axis (Columns A, B, C, D, E) and Vertical axis (Rows 1, 2, 3, 4, 5).",
      "Navigating grid paths: Counting steps North, South, East, and West.",
      "Shortest path on a Manhattan grid (taxicab distance)."
    ],
    "svg": "<svg viewBox=\"0 0 600 170\" width=\"100%\" height=\"170\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"170\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">5×5 Alphanumeric Town Navigation Grid</text>\r\n        <g transform=\"translate(180, 38)\">\r\n          <rect x=\"0\" y=\"0\" width=\"225\" height=\"100\" fill=\"#ffffff\" stroke=\"#0f172a\" stroke-width=\"1.5\"/>\r\n          <line x1=\"45\" y1=\"0\" x2=\"45\" y2=\"100\" stroke=\"#cbd5e1\"/>\r\n          <line x1=\"90\" y1=\"0\" x2=\"90\" y2=\"100\" stroke=\"#cbd5e1\"/>\r\n          <line x1=\"135\" y1=\"0\" x2=\"135\" y2=\"100\" stroke=\"#cbd5e1\"/>\r\n          <line x1=\"180\" y1=\"0\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\"/>\r\n          <line x1=\"0\" y1=\"25\" x2=\"225\" y2=\"25\" stroke=\"#cbd5e1\"/>\r\n          <line x1=\"0\" y1=\"50\" x2=\"225\" y2=\"50\" stroke=\"#cbd5e1\"/>\r\n          <line x1=\"0\" y1=\"75\" x2=\"225\" y2=\"75\" stroke=\"#cbd5e1\"/>\r\n          <text x=\"22.5\" y=\"-6\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#4f46e5\" text-anchor=\"middle\">A</text>\r\n          <text x=\"67.5\" y=\"-6\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#4f46e5\" text-anchor=\"middle\">B</text>\r\n          <text x=\"112.5\" y=\"-6\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#4f46e5\" text-anchor=\"middle\">C</text>\r\n          <text x=\"157.5\" y=\"-6\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#4f46e5\" text-anchor=\"middle\">D</text>\r\n          <text x=\"202.5\" y=\"-6\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#4f46e5\" text-anchor=\"middle\">E</text>\r\n          <text x=\"-10\" y=\"16\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#4f46e5\">4</text>\r\n          <text x=\"-10\" y=\"41\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#4f46e5\">3</text>\r\n          <text x=\"-10\" y=\"66\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#4f46e5\">2</text>\r\n          <text x=\"-10\" y=\"91\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#4f46e5\">1</text>\r\n          <rect x=\"5\" y=\"80\" width=\"35\" height=\"16\" rx=\"2\" fill=\"#3b82f6\"/>\r\n          <text x=\"22.5\" y=\"92\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">School</text>\r\n          <rect x=\"95\" y=\"30\" width=\"35\" height=\"16\" rx=\"2\" fill=\"#10b981\"/>\r\n          <text x=\"112.5\" y=\"42\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Park</text>\r\n          <rect x=\"185\" y=\"5\" width=\"35\" height=\"16\" rx=\"2\" fill=\"#ef4444\"/>\r\n          <text x=\"202.5\" y=\"17\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Hosp.</text>\r\n        </g>\r\n        <text x=\"300\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#475569\" text-anchor=\"middle\">Coordinates: School is at (A, 1) | Central Park is at (C, 3) | Hospital is at (E, 4)</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Grid Coordinate System • Town Map",
        "q": "On a town grid map, columns are numbered 1 to 6 (West to East) and rows are lettered A to F (South to North).<br>• Town Hall is at (2, B)<br>• Railway Station is at (5, B)<br>• Public Hospital is at (2, E)<br>(a) In which compass direction is the Hospital from the Town Hall?<br>(b) In which compass direction is the Railway Station from the Town Hall?<br>(c) If 1 grid square represents 200 m, find the straight-line ground distance between Town Hall and Railway Station.",
        "ans": "<strong>Grid Coordinate Analysis:</strong><br>\n• <strong>(a) Hospital from Town Hall:</strong> Town Hall is at row B; Hospital is at row E in the same column (2). Moving from B to E is moving upward → <strong>North</strong>.<br>\n• <strong>(b) Railway Station from Town Hall:</strong> Both are in row B. Column moves from 2 to 5 (to the right) → <strong>East</strong>.<br>\n• <strong>(c) Ground Distance:</strong> 5 - 2 = 3 grid units. Real distance = 3 × 200 m = <strong>600 metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): North",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): East",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 600 metres",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Floor Map vs Deep Drawing • House Plan",
        "q": "Explain the difference between a 'Floor Map' (2D layout) and a 'Deep Drawing' (3D perspective sketch) of a house. Why can't windows on the back wall be seen in a front deep drawing?",
        "ans": "<strong>Architectural Representations:</strong><br>\n1. <strong>Floor Map:</strong> A 2D top-down diagram showing the layout of rooms, doorways, and window positions on walls as seen from above.<br>\n2. <strong>Deep Drawing:</strong> A 3D realistic perspective drawing showing height, depth, and realistic appearance as seen by an observer from a specific angle.<br>\n3. <strong>Back Wall Windows:</strong> In a front deep drawing, the solid front and interior walls obstruct the line of sight, so windows located on the rear exterior wall are hidden from view.",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear 2D floor map definition",
            "marks": "1.0 M"
          },
          {
            "key": "Clear 3D deep drawing definition",
            "marks": "1.0 M"
          },
          {
            "key": "Occlusion explanation for rear windows",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "3D Block Towers • Top, Front, Side Views",
        "q": "A student builds a block structure using 5 unit cubes: 3 cubes placed in a row on the table, and 2 cubes stacked on top of the first and second cubes.<br>(a) Describe the Front View.<br>(b) Describe the Side View.<br>(c) Describe the Top View.",
        "ans": "<strong>Multi-View Orthographic Projections:</strong><br>\n• <strong>(a) Front View:</strong> Shows two columns of height 2 and one column of height 1 side by side → A shape consisting of <strong>5 square faces arranged in an L-like stepped block (height 2 on left, height 1 on right)</strong>.<br>\n• <strong>(b) Side View:</strong> Looking from the left end, the depth of 3 cubes collapses into a single column 2 cubes high → A vertical rectangle of <strong>2 squares</strong>.<br>\n• <strong>(c) Top View:</strong> Looking from directly above, only the base footprint is visible → A horizontal strip of <strong>3 squares</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Front view: stepped block of 5 squares",
            "marks": "1.0 M"
          },
          {
            "key": "Side view: column of 2 squares",
            "marks": "1.0 M"
          },
          {
            "key": "Top view: row of 3 squares",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Nets of a Cube • Valid vs Invalid",
        "q": "A cube has 6 square faces.<br>(a) Draw or describe two different valid 6-square nets that can be folded to form a cube.<br>(b) Can 6 squares arranged in a single straight row (1 × 6) fold into a cube? Explain why.",
        "ans": "<strong>Cube Nets:</strong><br>\n• <strong>(a) Valid Nets:</strong><br>\n1. <strong>Latin Cross net (T-shape):</strong> 4 squares in a vertical column with 1 square attached to the left and 1 to the right of the second square.<br>\n2. <strong>Step/Stair net:</strong> 3 squares in top row, 3 squares in bottom row shifted by one square.<br>\n• <strong>(b) 1 × 6 Strip:</strong> <strong>No</strong>. When folded at 90° along edges, the squares wrap around into an open hollow tube of 4 walls, while the 5th and 6th squares overlap the existing walls, leaving the top and bottom faces completely open.",
        "marks": 3,
        "rubric": [
          {
            "key": "Two valid cube nets described",
            "marks": "1.5 M"
          },
          {
            "key": "1 × 6 strip cannot form cube (overlaps & missing bases)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Route Navigation • Grid Steps",
        "q": "On a school campus grid map, an athlete runs from Pavilion (1, 1) to Flagpost (4, 5).<br>(a) How many units East and how many units North must he run?<br>(b) If each grid square is 40 m × 40 m, find the total distance run along the grid lines.",
        "ans": "<strong>Grid Steps:</strong><br>\n• <strong>(a) Movements:</strong><br>\n- East = 4 - 1 = <strong>3 units East</strong>.<br>\n- North = 5 - 1 = <strong>4 units North</strong>.<br>\n• <strong>(b) Ground Distance:</strong><br>\n- Total grid units = 3 + 4 = 7 units.<br>\n- Real distance = 7 × 40 m = <strong>280 metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "3 units East, 4 units North",
            "marks": "1.5 M"
          },
          {
            "key": "Total distance = 280 m",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Open Box Net • Foldable Shapes",
        "q": "An open box without a top lid has 5 square faces.<br>(a) Describe the plus-sign (+) shaped net of an open box.<br>(b) If each square face of the net has side 6 cm, find the total surface area of the open box.",
        "ans": "<strong>Open Box Geometry:</strong><br>\n• <strong>(a) Plus-sign Net:</strong> Consists of 1 central base square with 4 identical square flaps attached to its four sides. Folding the 4 outer flaps upward at 90° forms the 4 vertical walls.<br>\n• <strong>(b) Surface Area:</strong><br>\n- Area of 1 square face = 6 cm × 6 cm = 36 cm².<br>\n- Total area of 5 faces = 5 × 36 cm² = <strong>180 square cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Plus net description (1 base + 4 walls)",
            "marks": "1.5 M"
          },
          {
            "key": "Surface area = 180 cm²",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Die Faces • Opposite Sides Sum to 7",
        "q": "On a standard playing die, the numbers on opposite faces always add up to 7.<br>(a) What number is on the face opposite to 2?<br>(b) What number is opposite to 4?<br>(c) What number is opposite to 6?",
        "ans": "<strong>Opposite Face Rule (Sum = 7):</strong><br>\n• <strong>(a) Opposite to 2:</strong> 7 - 2 = <strong>5</strong>.<br>\n• <strong>(b) Opposite to 4:</strong> 7 - 4 = <strong>3</strong>.<br>\n• <strong>(c) Opposite to 6:</strong> 7 - 6 = <strong>1</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Opposite to 2 is 5",
            "marks": "1.0 M"
          },
          {
            "key": "Opposite to 4 is 3",
            "marks": "1.0 M"
          },
          {
            "key": "Opposite to 6 is 1",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Isometric Dot Paper Sketching",
        "q": "What is isometric dot paper used for in mathematics? How do the triangular grids of isometric dots help in drawing 3D cubes accurately?",
        "ans": "<strong>Isometric Drawing:</strong><br>\n1. <strong>Purpose:</strong> Isometric dot paper is used to draw 3D objects on a flat 2D sheet such that all three spatial dimensions (length, breadth, and height) are shown proportionally without distortion.<br>\n2. <strong>Triangular Grid Aid:</strong> The dots form equilateral triangles with axes tilted at 30° to the horizontal. This allows vertical edges to be drawn straight up, while receding horizontal edges are drawn along the 30° dot lines, making all equal 3D edges measure identical lengths on paper.",
        "marks": 3,
        "rubric": [
          {
            "key": "Purpose: representing 3D solids accurately on 2D",
            "marks": "1.5 M"
          },
          {
            "key": "30° tilt maintains equal proportional edge lengths",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Matchbox Bridge • Structural Projection",
        "q": "Students build a bridge model using matchboxes: 2 pillars on either side (each 3 matchboxes high) and a horizontal deck of 4 matchboxes across the top.<br>(a) What will the front view look like?<br>(b) What will the top view look like?",
        "ans": "<strong>Bridge Views:</strong><br>\n• <strong>(a) Front View:</strong> Shows the full arch opening: two vertical columns of 3 matchboxes connected across the top by a horizontal span of 4 matchboxes forming a portal frame.<br>\n• <strong>(b) Top View:</strong> Looking from directly overhead, only the horizontal roadway deck is visible → A long continuous rectangular strip of <strong>4 matchboxes</strong> (the pillars beneath are hidden).",
        "marks": 3,
        "rubric": [
          {
            "key": "Front view: portal arch of pillars & deck",
            "marks": "1.5 M"
          },
          {
            "key": "Top view: rectangle of 4 matchboxes",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Floor Plan Window & Door Symbols",
        "q": "On an architectural floor map, doors and windows have standardized representations.<br>(a) How is a door typically represented?<br>(b) How is a window represented on a wall?",
        "ans": "<strong>Architectural Symbols:</strong><br>\n• <strong>(a) Door Symbol:</strong> Represented as an opening in the wall with a <strong>straight line for the door leaf and a curved 90° arc</strong> showing the swing path of the door.<br>\n• <strong>(b) Window Symbol:</strong> Represented as a <strong>gap in the thick wall line filled with parallel thin lines</strong> representing the window frame and glass pane.",
        "marks": 3,
        "rubric": [
          {
            "key": "Door: opening with swing arc",
            "marks": "1.5 M"
          },
          {
            "key": "Window: parallel thin lines inside wall gap",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cube Net with Cutout Corners",
        "q": "A square sheet of metal measuring 20 cm × 20 cm has four 4 cm × 4 cm squares cut out from its four corners. The four flaps are then folded upward to make an open rectangular tray.<br>(a) What is the length and width of the base of the tray?<br>(b) What is the height of the tray?<br>(c) Find the volume of the tray in cubic centimetres ($V = L \\times W \\times H$).",
        "ans": "<strong>Box from Cutout Corners:</strong><br>\n• <strong>(a) Base Dimensions:</strong><br>\n- Length = 20 - 4 - 4 = <strong>12 cm</strong>.<br>\n- Width = 20 - 4 - 4 = <strong>12 cm</strong>.<br>\n• <strong>(b) Height:</strong> The height equals the cutout corner = <strong>4 cm</strong>.<br>\n• <strong>(c) Volume:</strong> $V = 12 \\times 12 \\times 4 = 144 \\times 4 = \\mathbf{576\\text{ cubic cm}}$.",
        "marks": 3,
        "rubric": [
          {
            "key": "Base = 12 cm × 12 cm",
            "marks": "1.0 M"
          },
          {
            "key": "Height = 4 cm",
            "marks": "1.0 M"
          },
          {
            "key": "Volume = 576 cm³",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Map Route with Compass Directions",
        "q": "Follow the route instructions: Start at Depot (0, 0). Walk 3 units East, 4 units North, 2 units West, and 1 unit South.<br>(a) What are the coordinates of the destination?<br>(b) In which compass quadrant from the Depot is the destination?",
        "ans": "<strong>Tracking Steps:</strong><br>\n• X-coordinate: 0 + 3 (East) - 2 (West) = <strong>1</strong>.<br>\n• Y-coordinate: 0 + 4 (North) - 1 (South) = <strong>3</strong>.<br>\n• <strong>(a) Destination Coordinates:</strong> <strong>(1, 3)</strong>.<br>\n• <strong>(b) Compass Direction:</strong> Since both X and Y are positive, it lies in the <strong>North-East quadrant</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Calculations: X = 1, Y = 3",
            "marks": "1.5 M"
          },
          {
            "key": "Coordinates (1, 3) in North-East",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Net of a Cylinder & Cone",
        "q": "(a) What 2D shapes make up the net of a closed cylinder?<br>(b) What 2D shapes make up the net of a cone?",
        "ans": "<strong>2D Nets of Curved Solids:</strong><br>\n• <strong>(a) Closed Cylinder:</strong> Consists of <strong>1 rectangle</strong> (which curves into the side wall) and <strong>2 identical circles</strong> (top and bottom flat circular bases).<br>\n• <strong>(b) Cone:</strong> Consists of <strong>1 circular sector</strong> (pie-slice shape for the conical slope) and <strong>1 circle</strong> (the flat circular base).",
        "marks": 3,
        "rubric": [
          {
            "key": "Cylinder: 1 rectangle + 2 circles",
            "marks": "1.5 M"
          },
          {
            "key": "Cone: 1 sector + 1 circle",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Counting Cubes in Multi-layer Block Model",
        "q": "A solid rectangular block is built using unit cubes: it is 4 cubes long, 3 cubes wide, and 2 cubes high.<br>(a) How many unit cubes are used in total?<br>(b) How many cubes are on the bottom layer?<br>(c) If all outside faces are painted red, how many cubes have paint on exactly 3 faces (corner cubes)?",
        "ans": "<strong>Block Model Geometry:</strong><br>\n• <strong>(a) Total Cubes:</strong> Length × Width × Height = 4 × 3 × 2 = <strong>24 unit cubes</strong>.<br>\n• <strong>(b) Bottom Layer:</strong> 4 × 3 = <strong>12 cubes</strong>.<br>\n• <strong>(c) 3-Face Painted (Corner Cubes):</strong> A cuboid has exactly <strong>8 corners</strong>. Each corner cube has 3 exposed painted faces = <strong>8 cubes</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total = 24 cubes",
            "marks": "1.0 M"
          },
          {
            "key": "Bottom layer = 12 cubes",
            "marks": "1.0 M"
          },
          {
            "key": "Corner cubes with 3 faces painted = 8",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Town Grid Area Occupied",
        "q": "A sports ground on a town map occupies grid blocks from Column 2 to 5 and Row C to F.<br>(a) How many grid units long and wide is the ground?<br>(b) How many square grid blocks does it cover?<br>(c) If 1 block is 100 m × 100 m, find its actual area in square metres.",
        "ans": "<strong>Grid Area Analysis:</strong><br>\n• <strong>(a) Dimensions:</strong><br>\n- Length (Columns 2 to 5): 5 - 2 = <strong>3 units</strong>.<br>\n- Width (Rows C to F): F - C = <strong>3 units</strong>.<br>\n• <strong>(b) Grid Blocks:</strong> 3 × 3 = <strong>9 square blocks</strong>.<br>\n• <strong>(c) Actual Area:</strong> Each block = 100 m × 100 m = 10,000 sq m. Total area = 9 × 10,000 = <strong>90,000 square metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Dimensions = 3 × 3 units",
            "marks": "1.0 M"
          },
          {
            "key": "9 square blocks",
            "marks": "1.0 M"
          },
          {
            "key": "Ground area = 90,000 sq m",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Deep Perspective vs Flat Blueprint",
        "q": "Why do architects draw both a 2D floor blueprint and a 3D isometric perspective drawing before constructing a building?",
        "ans": "<strong>Complementary Purposes:</strong><br>\n1. <strong>2D Floor Blueprint:</strong> Provides precise geometric measurements, wall thicknesses, exact door/window placements, and plumbing lines necessary for builders and masons during construction.<br>\n2. <strong>3D Perspective Drawing:</strong> Helps clients, engineers, and builders visualize the realistic appearance, height proportions, aesthetics, and depth of the finished building in its real-world environment.",
        "marks": 3,
        "rubric": [
          {
            "key": "2D blueprint: exact measurements for construction",
            "marks": "1.5 M"
          },
          {
            "key": "3D perspective: visual appearance and depth",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Number of Faces, Edges, Vertices",
        "q": "State the number of Faces ($F$), Edges ($E$), and Vertices ($V$) for:<br>(a) A triangular prism<br>(b) A square pyramid<br>Verify Euler's formula: $F - E + V = 2$ for both.",
        "ans": "<strong>Polyhedra Formulas ($F - E + V = 2$):</strong><br>\n• <strong>(a) Triangular Prism:</strong><br>\n- Faces: 2 triangular bases + 3 rectangular sides = <strong>5 faces</strong>.<br>\n- Edges: <strong>9 edges</strong>.<br>\n- Vertices: <strong>6 vertices</strong>.<br>\n- Check: 5 - 9 + 6 = 2. Verified!<br>\n• <strong>(b) Square Pyramid:</strong><br>\n- Faces: 1 square base + 4 triangular sides = <strong>5 faces</strong>.<br>\n- Edges: 4 base edges + 4 slant edges = <strong>8 edges</strong>.<br>\n- Vertices: 4 base corners + 1 top apex = <strong>5 vertices</strong>.<br>\n- Check: 5 - 8 + 5 = 2. Verified!",
        "marks": 3,
        "rubric": [
          {
            "key": "Prism: F=5, E=9, V=6 with Euler check",
            "marks": "1.5 M"
          },
          {
            "key": "Pyramid: F=5, E=8, V=5 with Euler check",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Top-Down Drone Survey • Map Formation",
        "q": "A survey drone flies overhead taking continuous vertical photographs.<br>(a) How are the drone photos stitched together to create a digital cadastral map?<br>(b) What mathematical scale factor links pixels on screen to ground metres?",
        "ans": "<strong>Photogrammetry & Mapping:</strong><br>\n• <strong>(a) Photo Stitching:</strong> Overlapping photos are matched using shared ground landmarks (ground control points) so that geometric coordinates align continuously into an orthomosaic aerial map.<br>\n• <strong>(b) Scale Factor:</strong> Ground Sampling Distance (GSD), where 1 pixel represents a calibrated real-world length (e.g. 1 pixel = 5 cm on ground), establishing a precise linear ratio.",
        "marks": 3,
        "rubric": [
          {
            "key": "Orthomosaic alignment using control points",
            "marks": "1.5 M"
          },
          {
            "key": "Ground resolution ratio linking pixels to metres",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "HOTS • Unfolding Cube Riddle",
        "q": "A cube has letters A, B, C, D, E, F on its 6 faces. When unfolded into a T-shaped net, A is on the top square, B is in the center, C is below B, D is to the left of B, E is to the right of B, and F is at the bottom. Which face is opposite to Face B?",
        "ans": "<strong>Net Folding Deduction:</strong><br>\n1. In a cross net, alternating squares fold to become opposite faces.<br>\n2. Along the horizontal row: D (left) and E (right) fold up to face each other (D is opposite to E).<br>\n3. Along the vertical column: A (top) and C (bottom) fold up to face each other.<br>\n4. Square F (at the very bottom of the tail) folds across to become the top cap, lying directly parallel and opposite to the central base square B.<br>\n<strong>Face F is opposite to Face B</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Analysis of alternating folds in net",
            "marks": "1.5 M"
          },
          {
            "key": "Face F is opposite to Face B",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Room Blueprint Door Clearance",
        "q": "A door on a floor plan has width 90 cm and swings through a 90° arc.<br>(a) What shape of floor space must be kept completely clear of furniture?<br>(b) Find the area of this clearance quadrant in square metres (take $\\pi \\approx 3.14$, $A = \\frac{1}{4} \\pi r^2$).",
        "ans": "<strong>Clearance Quadrant:</strong><br>\n• <strong>(a) Shape:</strong> A <strong>quarter circle (quadrant)</strong> of radius 90 cm.<br>\n• <strong>(b) Clearance Area:</strong> Radius = 0.9 metres.<br>\n- Area = $\\frac{1}{4} \\times 3.14 \\times (0.9)^2 = 0.785 \\times 0.81 = \\mathbf{0.636\\text{ sq metres}}$.",
        "marks": 3,
        "rubric": [
          {
            "key": "Quarter circle of radius 90 cm",
            "marks": "1.5 M"
          },
          {
            "key": "Area ≈ 0.64 sq m",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Compass Directions along Grid Axes",
        "q": "On a standard Cartesian coordinate grid with origin (0, 0) at center:<br>(a) Positive X-axis points in which compass direction?<br>(b) Positive Y-axis points in which compass direction?<br>(c) Point (-3, -3) lies in which compass direction from the origin?",
        "ans": "<strong>Coordinate & Compass Equivalence:</strong><br>\n• <strong>(a) Positive X-axis:</strong> Points <strong>East</strong>.<br>\n• <strong>(b) Positive Y-axis:</strong> Points <strong>North</strong>.<br>\n• <strong>(c) Point (-3, -3):</strong> Negative X is West; Negative Y is South → <strong>South-West</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Positive X: East",
            "marks": "1.0 M"
          },
          {
            "key": "Positive Y: North",
            "marks": "1.0 M"
          },
          {
            "key": "(-3, -3): South-West",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Shadow Casting • Time of Day",
        "q": "At 8:00 AM, a vertical flagpole casts a long shadow on the ground.<br>(a) In which compass direction does the shadow point in the morning?<br>(b) In which direction does the shadow point at 4:00 PM in the evening?<br>(c) At what time of day is the shadow shortest?",
        "ans": "<strong>Shadow Geometry:</strong><br>\n• <strong>(a) Morning Shadow (8:00 AM):</strong> Sun is in the East, so the shadow is cast towards the <strong>West</strong>.<br>\n• <strong>(b) Evening Shadow (4:00 PM):</strong> Sun is in the West, so the shadow is cast towards the <strong>East</strong>.<br>\n• <strong>(c) Shortest Shadow:</strong> At <strong>12:00 Solar Noon</strong>, when the sun reaches its highest elevation directly overhead.",
        "marks": 3,
        "rubric": [
          {
            "key": "Morning: West",
            "marks": "1.0 M"
          },
          {
            "key": "Evening: East",
            "marks": "1.0 M"
          },
          {
            "key": "Shortest at Solar Noon",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "True or False with Spatial Reason",
        "q": "State True or False with reasoning:<br>(a) A cylinder has 2 flat faces and 1 curved face.<br>(b) A 2D floor map shows how tall a house is.<br>(c) Isometric drawings make parallel lines appear to meet at a point.",
        "ans": "<strong>Justifications:</strong><br>\n• <strong>(a) True:</strong> The top and bottom are 2 flat circular faces, and the side wall is 1 curved surface (3 faces total).<br>\n• <strong>(b) False:</strong> A floor map is a 2D top-down projection and shows no vertical heights.<br>\n• <strong>(c) False:</strong> In isometric projection, parallel lines <strong>remain strictly parallel</strong>. (Perspective drawings make parallel lines converge at vanishing points, not isometric drawings).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): True with cylinder anatomy",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): False (2D top view has no height)",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): False (isometric lines remain parallel)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comprehensive Mapping Project",
        "q": "A student draws a model map of his school ground with scale 1 cm = 20 m. The football field measures 5 cm by 3 cm on the map.<br>(a) Find the actual dimensions of the football field.<br>(b) What is its actual ground area in square metres?<br>(c) If an athlete runs 4 complete laps around the perimeter of the field, how many metres does he run?",
        "ans": "<strong>Comprehensive Scale & Geometry:</strong><br>\n• <strong>(a) Real Dimensions:</strong><br>\n- Length = 5 cm × 20 m = <strong>100 metres</strong>.<br>\n- Width = 3 cm × 20 m = <strong>60 metres</strong>.<br>\n• <strong>(b) Ground Area:</strong> 100 m × 60 m = <strong>6,000 square metres</strong>.<br>\n• <strong>(c) 4 Laps Perimeter:</strong><br>\n- 1 Lap (Perimeter) = 2 × (100 + 60) = 2 × 160 = 320 metres.<br>\n- 4 Laps = 4 × 320 m = <strong>1,280 metres (1.28 km)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Dimensions: 100 m × 60 m",
            "marks": "1.0 M"
          },
          {
            "key": "Area = 6,000 sq m",
            "marks": "1.0 M"
          },
          {
            "key": "4 laps = 1,280 m",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Competency Question: Emergency Ambulance Route Optimization",
      "text": "Each grid block in the town layout represents a distance of 300 metres along street avenues. An emergency ambulance departs from Community Clinic at (B, 1) to reach an accident site at (E, 4).",
      "question": "(a) What is the total road distance traveled by the ambulance?<br>(b) If the ambulance drives at an average speed of 36 km/h, how many minutes will the drive take?",
      "answer": "<div class=\"cbq-sol-label\">Suggested Model Solution:</div>\r\n          \r\n <div class=\"step\"><strong>(a) Road Distance:</strong> 3 + 3 = 6 blocks = 6 × 300 m = 1,800 m = <strong>1.8 km</strong>.</div>\r\n <div class=\"step\"><strong>(b) Travel Time:</strong> 1.8 km/36 km/h = 0.05 hours = 0.05 × 60 = <strong>3 minutes</strong>.",
      "rubric": "1M concept identification + 1M step execution + 1M conclusion"
    }
  },
  {
    "id": "mela15",
    "num": 15,
    "unit": "Chapter 15 • Data Handling, Pictographs & Bar Graphs",
    "title": "Data Through Pictures",
    "subtitle": "चित्रों से आँकड़े (चित्रालेख, टैली मार्क्स एवं दण्ड आलेख)",
    "concepts": [
      "Pictographs: Visual representation of data using pictures/icons where 1 icon represents a fixed key value.",
      "Tally marks grouping: Groups of five (|||| with a diagonal strike through).",
      "Bar Graphs: Graphical displays using rectangular bars of uniform width whose heights represent quantities.",
      "Interpreting trends, identifying maximum/minimum values, and computing totals from charts.",
      "Scale: $1\\text{ symbol} = 25\\text{ books}$.",
      "(a) Storybooks: $5 \\times 25 = \\mathbf{125\\text{ books}}$."
    ],
    "svg": "<svg viewBox=\"0 0 600 170\" width=\"100%\" height=\"170\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <rect width=\"600\" height=\"170\" rx=\"12\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\r\n        <text x=\"300\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Data Representation: Books Read by Students in Reading Club</text>\r\n        <g transform=\"translate(60, 40)\">\r\n          <line x1=\"40\" y1=\"10\" x2=\"40\" y2=\"90\" stroke=\"#0f172a\" stroke-width=\"2\"/>\r\n          <line x1=\"40\" y1=\"90\" x2=\"460\" y2=\"90\" stroke=\"#0f172a\" stroke-width=\"2\"/>\r\n          <text x=\"30\" y=\"94\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"end\">0</text>\r\n          <text x=\"30\" y=\"74\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"end\">10</text>\r\n          <line x1=\"38\" y1=\"70\" x2=\"460\" y2=\"70\" stroke=\"#e2e8f0\" stroke-dasharray=\"2 2\"/>\r\n          <text x=\"30\" y=\"54\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"end\">20</text>\r\n          <line x1=\"38\" y1=\"50\" x2=\"460\" y2=\"50\" stroke=\"#e2e8f0\" stroke-dasharray=\"2 2\"/>\r\n          <text x=\"30\" y=\"34\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"end\">30</text>\r\n          <line x1=\"38\" y1=\"30\" x2=\"460\" y2=\"30\" stroke=\"#e2e8f0\" stroke-dasharray=\"2 2\"/>\r\n          <text x=\"30\" y=\"14\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"end\">40</text>\r\n          <line x1=\"38\" y1=\"10\" x2=\"460\" y2=\"10\" stroke=\"#e2e8f0\" stroke-dasharray=\"2 2\"/>\r\n          <rect x=\"70\" y=\"50\" width=\"50\" height=\"40\" rx=\"3\" fill=\"#6366f1\"/>\r\n          <text x=\"95\" y=\"44\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#4338ca\" text-anchor=\"middle\">20</text>\r\n          <text x=\"95\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Grade 3</text>\r\n          <rect x=\"170\" y=\"20\" width=\"50\" height=\"70\" rx=\"3\" fill=\"#06b6d4\"/>\r\n          <text x=\"195\" y=\"14\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0891b2\" text-anchor=\"middle\">35</text>\r\n          <text x=\"195\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Grade 4</text>\r\n          <rect x=\"270\" y=\"10\" width=\"50\" height=\"80\" rx=\"3\" fill=\"#10b981\"/>\r\n          <text x=\"295\" y=\"6\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#047857\" text-anchor=\"middle\">40</text>\r\n          <text x=\"295\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Grade 5</text>\r\n          <rect x=\"370\" y=\"40\" width=\"50\" height=\"50\" rx=\"3\" fill=\"#f59e0b\"/>\r\n          <text x=\"395\" y=\"34\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">25</text>\r\n          <text x=\"395\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Grade 6</text>\r\n        </g>\r\n        <text x=\"300\" y=\"155\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" fill=\"#475569\" text-anchor=\"middle\">Total Books Read = 20 + 35 + 40 + 25 = 120 books | Highest = Grade 5 (40 books)</text>\r\n      </svg>",
    "questions": [
      {
        "category": "Library Books Pictograph • Reading Data",
        "q": "A school library records books borrowed by students: Grade 3 (20 books), Grade 4 (35 books), Grade 5 (45 books).<br>(a) If a symbol 📖 represents 5 books, how many book symbols will represent Grade 3, Grade 4, and Grade 5?<br>(b) Which class borrowed the maximum number of books?<br>(c) What is the total number of books borrowed by all three classes?",
        "ans": "<strong>Pictograph Calculations (1 📖 = 5 Books):</strong><br>\n• <strong>(a) Symbol Counts:</strong><br>\n- Grade 3: 20 ÷ 5 = <strong>4 symbols (📖📖📖📖)</strong>.<br>\n- Grade 4: 35 ÷ 5 = <strong>7 symbols</strong>.<br>\n- Grade 5: 45 ÷ 5 = <strong>9 symbols</strong>.<br>\n• <strong>(b) Maximum Class:</strong> <strong>Grade 5</strong> borrowed the maximum (45 books).<br>\n• <strong>(c) Grand Total:</strong> 20 + 35 + 45 = <strong>100 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Symbols: 4, 7, 9",
            "marks": "1.5 M"
          },
          {
            "key": "Maximum = Grade 5",
            "marks": "0.75 M"
          },
          {
            "key": "Total = 100 books",
            "marks": "0.75 M"
          }
        ]
      },
      {
        "category": "Favorite Fruits Survey • Tally Marks",
        "q": "In a class of 30 students, the favorite fruits are: Mango (12), Apple (8), Banana (6), Orange (4).<br>(a) Draw a frequency table using tally marks in bundles of five (<s>||||</s>).<br>(b) What fraction of students chose Mango as their favorite fruit?",
        "ans": "<strong>Tally Table:</strong><br>\n• <strong>Mango (12):</strong> <s>||||</s> <s>||||</s> || (12)<br>\n• <strong>Apple (8):</strong> <s>||||</s> ||| (8)<br>\n• <strong>Banana (6):</strong> <s>||||</s> | (6)<br>\n• <strong>Orange (4):</strong> |||| (4)<br>\n• <strong>Total:</strong> 12 + 8 + 6 + 4 = 30 students.<br>\n• <strong>(b) Mango Fraction:</strong> 12/30 = <strong>2/5 of the class</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate tally representation for all 4 fruits",
            "marks": "2.0 M"
          },
          {
            "key": "Fraction = 12/30 = 2/5",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "School Attendance Bar Chart",
        "q": "A bar graph shows student attendance in Grade 5 over one week:<br>Monday: 42, Tuesday: 45, Wednesday: 40, Thursday: 44, Friday: 38 (Class strength = 45).<br>(a) On which day was attendance 100% full?<br>(b) On which day was attendance lowest, and how many students were absent?<br>(c) What was the average daily attendance for the week?",
        "ans": "<strong>Data Interpretation:</strong><br>\n• <strong>(a) 100% Attendance:</strong> <strong>Tuesday (45 students present)</strong>.<br>\n• <strong>(b) Lowest Day:</strong> <strong>Friday (38 students)</strong>.<br>\n- Absentees = 45 - 38 = <strong>7 students absent</strong>.<br>\n• <strong>(c) Average Daily Attendance:</strong><br>\n- Total attendance = 42 + 45 + 40 + 44 + 38 = 209 students.<br>\n- Average = 209 ÷ 5 = <strong>41.8 students per day</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Full attendance = Tuesday",
            "marks": "1.0 M"
          },
          {
            "key": "Lowest = Friday with 7 absentees",
            "marks": "1.0 M"
          },
          {
            "key": "Average = 41.8 students",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traffic Survey at Intersection",
        "q": "Students counted vehicles passing a school gate in 30 minutes: Two-wheelers (60), Cars (35), Auto-rickshaws (25), Buses (10).<br>(a) What was the total number of vehicles counted?<br>(b) Which vehicle type was most common, and what percentage of total traffic did it represent?<br>(c) What is the ratio of Buses to Cars?",
        "ans": "<strong>Survey Analysis:</strong><br>\n• <strong>(a) Total Vehicles:</strong> 60 + 35 + 25 + 10 = <strong>130 vehicles</strong>.<br>\n• <strong>(b) Most Common Vehicle:</strong> <strong>Two-wheelers (60)</strong>.<br>\n- Percentage = (60 ÷ 130) × 100 ≈ <strong>46.15%</strong>.<br>\n• <strong>(c) Ratio of Buses to Cars:</strong> 10 : 35 = <strong>2 : 7</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total = 130 vehicles",
            "marks": "1.0 M"
          },
          {
            "key": "Most common = Two-wheelers (~46.2%)",
            "marks": "1.0 M"
          },
          {
            "key": "Ratio = 2 : 7",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Chapati Chart (Pie Chart) • Fractional Sectors",
        "q": "A circular Chapati Chart represents how 40 children travel to school: 1/2 walk on foot, 1/4 ride bicycles, 1/8 take the school bus, and 1/8 come by car.<br>(a) How many children walk on foot?<br>(b) How many children ride bicycles?<br>(c) How many children travel by school bus or car?",
        "ans": "<strong>Fractional Calculations (Total = 40):</strong><br>\n• <strong>(a) Walk on Foot:</strong> 1/2 of 40 = <strong>20 children</strong>.<br>\n• <strong>(b) Bicycles:</strong> 1/4 of 40 = <strong>10 children</strong>.<br>\n• <strong>(c) Bus or Car:</strong> 1/8 + 1/8 = 2/8 = 1/4.<br>\n- 1/4 of 40 = <strong>10 children</strong> (5 by bus + 5 by car).",
        "marks": 3,
        "rubric": [
          {
            "key": "Walk: 20 children",
            "marks": "1.0 M"
          },
          {
            "key": "Bicycle: 10 children",
            "marks": "1.0 M"
          },
          {
            "key": "Bus or Car: 10 children",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Family Electricity Consumption Graph",
        "q": "A family's electricity bill shows units consumed over 4 months: January: 180 units, February: 160 units, March: 240 units, April: 320 units.<br>(a) In which month was consumption highest? Why did it increase in March and April?<br>(b) What was the total units consumed over the 4 months?<br>(c) If electricity costs ₹7 per unit, find the total bill amount for April.",
        "ans": "<strong>Energy Consumption Analysis:</strong><br>\n• <strong>(a) Highest Month:</strong> <strong>April (320 units)</strong>.<br>\n- Increase reason: Onset of summer season leading to extensive usage of fans, air coolers, and refrigerators.<br>\n• <strong>(b) Total Units:</strong> 180 + 160 + 240 + 320 = <strong>900 units</strong>.<br>\n• <strong>(c) April Bill:</strong> 320 units × ₹7 = <strong>₹2,240</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Highest = April (summer explanation)",
            "marks": "1.0 M"
          },
          {
            "key": "Total = 900 units",
            "marks": "1.0 M"
          },
          {
            "key": "April bill = ₹2,240",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Choosing an Appropriate Pictograph Scale",
        "q": "A village dairy records daily milk collection in litres: Monday (240 L), Tuesday (360 L), Wednesday (300 L), Thursday (180 L).<br>(a) What would be a convenient scale for a milk can symbol 🛢️ (e.g. 1 symbol = ? litres)?<br>(b) How many symbols will be drawn for each day using that scale?",
        "ans": "<strong>Scale Selection:</strong><br>\n• <strong>(a) Convenient Scale:</strong> The numbers (240, 360, 300, 180) have HCF = 60. A scale of <strong>1 symbol 🛢️ = 60 Litres</strong> is ideal.<br>\n• <strong>(b) Symbol Count:</strong><br>\n- Monday: 240 ÷ 60 = <strong>4 symbols</strong>.<br>\n- Tuesday: 360 ÷ 60 = <strong>6 symbols</strong>.<br>\n- Wednesday: 300 ÷ 60 = <strong>5 symbols</strong>.<br>\n- Thursday: 180 ÷ 60 = <strong>3 symbols</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Scale: 1 symbol = 60 L",
            "marks": "1.5 M"
          },
          {
            "key": "Counts: 4, 6, 5, 3 symbols",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Temperature Bar Graph • Coldest and Hottest",
        "q": "Maximum temperatures recorded in 4 Indian cities on a May afternoon: Delhi (42°C), Mumbai (34°C), Srinagar (22°C), Chennai (38°C).<br>(a) Which city recorded the highest temperature?<br>(b) Which city recorded the lowest temperature?<br>(c) What is the difference in temperature between Delhi and Srinagar?",
        "ans": "<strong>Temperature Analysis:</strong><br>\n• <strong>(a) Highest Temperature:</strong> <strong>Delhi (42°C)</strong>.<br>\n• <strong>(b) Lowest Temperature:</strong> <strong>Srinagar (22°C)</strong>.<br>\n• <strong>(c) Difference:</strong> 42°C - 22°C = <strong>20°C difference</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Highest: Delhi (42°C)",
            "marks": "1.0 M"
          },
          {
            "key": "Lowest: Srinagar (22°C)",
            "marks": "1.0 M"
          },
          {
            "key": "Difference = 20°C",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Tree Plantation Drive • Pictograph",
        "q": "In an environmental drive, five student clubs plant trees:<br>Club A (25), Club B (40), Club C (35), Club D (50), Club E (30).<br>(a) If 🌲 represents 10 trees, draw/write the number of full and half trees for each club.<br>(b) Which club planted the most trees?",
        "ans": "<strong>Scale 1 🌲 = 10 Trees (Half 🌲 = 5 Trees):</strong><br>\n• <strong>(a) Representation:</strong><br>\n- Club A (25): 2 full + 1 half symbol (🌲🌲🪓).<br>\n- Club B (40): 4 full symbols (🌲🌲🌲🌲).<br>\n- Club C (35): 3 full + 1 half symbol.<br>\n- Club D (50): 5 full symbols.<br>\n- Club E (30): 3 full symbols.<br>\n• <strong>(b) Highest Club:</strong> <strong>Club D</strong> with 50 trees.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct full and half symbols",
            "marks": "2.0 M"
          },
          {
            "key": "Club D highest",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Sports Preference • Double Bar Graph",
        "q": "A survey of boys and girls in Grade 5 shows their preferred sport:<br>• Football: Boys 18, Girls 8<br>• Badminton: Boys 10, Girls 16<br>• Cricket: Boys 20, Girls 6<br>(a) Which sport is most popular among boys?<br>(b) Which sport is most popular among girls?<br>(c) What is the total number of students surveyed?",
        "ans": "<strong>Comparative Data:</strong><br>\n• <strong>(a) Most Popular for Boys:</strong> <strong>Cricket (20 boys)</strong>.<br>\n• <strong>(b) Most Popular for Girls:</strong> <strong>Badminton (16 girls)</strong>.<br>\n• <strong>(c) Grand Total:</strong><br>\n- Total boys = 18 + 10 + 20 = 48.<br>\n- Total girls = 8 + 16 + 6 = 30.<br>\n- Combined students = 48 + 30 = <strong>78 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Boys: Cricket",
            "marks": "1.0 M"
          },
          {
            "key": "Girls: Badminton",
            "marks": "1.0 M"
          },
          {
            "key": "Total students = 78",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mid-Term Exam Marks Distribution",
        "q": "Marks obtained by 5 friends in Mathematics (out of 50):<br>Aarav: 48, Divya: 42, Farhan: 45, Gurpreet: 39, Tanya: 46.<br>(a) Find the range of marks (Highest mark - Lowest mark).<br>(b) Calculate the mean (average) mark of the 5 students.",
        "ans": "<strong>Statistical Analysis:</strong><br>\n• <strong>(a) Range:</strong><br>\n- Highest = 48 (Aarav).<br>\n- Lowest = 39 (Gurpreet).<br>\n- Range = 48 - 39 = <strong>9 marks</strong>.<br>\n• <strong>(b) Mean (Average):</strong><br>\n- Sum = 48 + 42 + 45 + 39 + 46 = 220 marks.<br>\n- Average = 220 ÷ 5 = <strong>44 marks out of 50</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Range = 9 marks",
            "marks": "1.5 M"
          },
          {
            "key": "Average = 44 marks",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Rainfall Recording • Monthly Chart",
        "q": "A weather station records monthly monsoon rainfall in millimetres:<br>June: 120 mm, July: 280 mm, August: 340 mm, September: 160 mm.<br>(a) In which month was rainfall heaviest?<br>(b) What was the total seasonal rainfall recorded?<br>(c) What fraction of total rainfall fell in August?",
        "ans": "<strong>Rainfall Data:</strong><br>\n• <strong>(a) Heaviest Month:</strong> <strong>August (340 mm)</strong>.<br>\n• <strong>(b) Total Monsoon Rainfall:</strong> 120 + 280 + 340 + 160 = <strong>900 mm</strong>.<br>\n• <strong>(c) August Fraction:</strong> 340 / 900 = 34/90 = <strong>17/45 of the total rainfall</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Heaviest: August",
            "marks": "1.0 M"
          },
          {
            "key": "Total = 900 mm",
            "marks": "1.0 M"
          },
          {
            "key": "Fraction = 17/45",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "School Canteen Snack Sales",
        "q": "On Monday, a school canteen sold: Samosas (75), Sandwiches (45), Fruit Juice packs (60), Biscuits (30).<br>(a) What was the ratio of Samosas sold to Biscuits sold?<br>(b) If each sandwich costs ₹20, find the total revenue from sandwiches.<br>(c) Which item contributed to exactly half the number of samosa sales?",
        "ans": "<strong>Canteen Data:</strong><br>\n• <strong>(a) Ratio Samosas : Biscuits:</strong> 75 : 30 = Divide by 15 = <strong>5 : 2</strong>.<br>\n• <strong>(b) Sandwich Revenue:</strong> 45 × ₹20 = <strong>₹900</strong>.<br>\n• <strong>(c) Half of Samosas:</strong> Samosas = 75; half is 37.5. (Or comparing to Biscuits: 30 is close to half). Looking at Fruit juice (60) vs others: Biscuits is 30.",
        "marks": 3,
        "rubric": [
          {
            "key": "Ratio = 5 : 2",
            "marks": "1.5 M"
          },
          {
            "key": "Sandwich revenue = ₹900",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Pet Animal Survey • Mode of Data",
        "q": "Students reported their household pets: Dog (15), Cat (9), Fish (6), Bird (4), Rabbit (2).<br>(a) What is the 'mode' (most frequent observation) of this data set?<br>(b) How many more students have dogs than cats?<br>(c) How many total pets are owned?",
        "ans": "<strong>Statistical Properties:</strong><br>\n• <strong>(a) Mode:</strong> <strong>Dog</strong> (with highest frequency of 15).<br>\n• <strong>(b) Dog vs Cat Difference:</strong> 15 - 9 = <strong>6 more students have dogs</strong>.<br>\n• <strong>(c) Total Pets:</strong> 15 + 9 + 6 + 4 + 2 = <strong>36 pets</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mode = Dog",
            "marks": "1.0 M"
          },
          {
            "key": "Difference = 6",
            "marks": "1.0 M"
          },
          {
            "key": "Total = 36 pets",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Bicycle Ride Distances • Bar Graph Interpretation",
        "q": "Five friends track their weekly cycling distance: Kabir (24 km), Leo (32 km), Maya (18 km), Nina (28 km), Omar (30 km).<br>(a) Who cycled the greatest distance?<br>(b) What was the average cycling distance of the group?",
        "ans": "<strong>Working:</strong><br>\n• <strong>(a) Greatest Distance:</strong> <strong>Leo (32 km)</strong>.<br>\n• <strong>(b) Group Average:</strong><br>\n- Sum = 24 + 32 + 18 + 28 + 30 = 132 km.<br>\n- Average = 132 ÷ 5 = <strong>26.4 km</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Greatest = Leo (32 km)",
            "marks": "1.5 M"
          },
          {
            "key": "Average = 26.4 km",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Television Screen Time Survey",
        "q": "A survey recorded daily hours spent watching TV by 50 students:<br>Less than 1 hour: 12 students<br>1 to 2 hours: 22 students<br>More than 2 hours: 16 students<br>(a) What percentage of students watch between 1 and 2 hours daily?<br>(b) What fraction of students watch more than 2 hours daily?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) 1 to 2 Hours Percentage:</strong> (22 ÷ 50) × 100 = <strong>44%</strong>.<br>\n• <strong>(b) More than 2 Hours Fraction:</strong> 16/50 = <strong>8/25 of the students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Percentage = 44%",
            "marks": "1.5 M"
          },
          {
            "key": "Fraction = 8/25",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Interpreting Pictograph Symbols",
        "q": "On a pictograph where 1 🚗 represents 25 cars:<br>(a) How many cars are represented by 6 symbols?<br>(b) How many symbols will represent 200 cars?<br>(c) How many cars are represented by 3.5 symbols?",
        "ans": "<strong>Mental Calculations (1 🚗 = 25 cars):</strong><br>\n• <strong>(a) 6 Symbols:</strong> 6 × 25 = <strong>150 cars</strong>.<br>\n• <strong>(b) 200 Cars:</strong> 200 ÷ 25 = <strong>8 symbols</strong>.<br>\n• <strong>(c) 3.5 Symbols:</strong> 3.5 × 25 = 75 + 12.5 = <strong>87.5 cars (or 3 full + 1 half symbol = 75 + 12 = 87 cars)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 150 cars",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 8 symbols",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 87.5 cars",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "School Bus Seating Capacity Data",
        "q": "A fleet of 4 school buses has capacities and current loads:<br>Bus 1: Capacity 50, Load 46<br>Bus 2: Capacity 40, Load 38<br>Bus 3: Capacity 50, Load 49<br>Bus 4: Capacity 60, Load 55<br>(a) What is the total carrying capacity of the fleet?<br>(b) How many total students are currently traveling?<br>(c) How many vacant seats are there across all 4 buses?",
        "ans": "<strong>Data Aggregation:</strong><br>\n• <strong>(a) Total Capacity:</strong> 50 + 40 + 50 + 60 = <strong>200 seats</strong>.<br>\n• <strong>(b) Total Students Traveling:</strong> 46 + 38 + 49 + 55 = <strong>188 students</strong>.<br>\n• <strong>(c) Vacant Seats:</strong> 200 - 188 = <strong>12 vacant seats</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Capacity = 200 seats",
            "marks": "1.0 M"
          },
          {
            "key": "Students = 188",
            "marks": "1.0 M"
          },
          {
            "key": "Vacant = 12 seats",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "HOTS • Data Inference Riddle",
        "q": "In a class of 28 students, all students play either Chess or Carrom or both. 18 students play Chess, and 16 students play Carrom. How many students play both Chess and Carrom?",
        "ans": "<strong>Set Principle Formula ($N(A \\cup B) = N(A) + N(B) - N(A \\cap B)$):</strong><br>\n1. Total unique students = 28.<br>\n2. Sum of individual players = 18 (Chess) + 16 (Carrom) = 34.<br>\n3. Excess count due to double-counting students who play both games = 34 - 28 = <strong>6 students</strong>.<br>\n4. Therefore, exactly <strong>6 students play both Chess and Carrom</strong>.<br>\n<em>(Check: Chess only = 12, Carrom only = 10, Both = 6. 12 + 10 + 6 = 28. Verified!)</em>",
        "marks": 3,
        "rubric": [
          {
            "key": "Sum of sets = 18 + 16 = 34",
            "marks": "1.5 M"
          },
          {
            "key": "Students playing both = 6 with proof",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Music Instrument Classes Enrollment",
        "q": "A music academy has student enrollment: Guitar (32), Keyboard (28), Drums (16), Flute (24).<br>(a) What is the ratio of Flute students to Guitar students?<br>(b) Express the Drums enrollment as a percentage of total music students.",
        "ans": "<strong>Working:</strong><br>\n• Total students = 32 + 28 + 16 + 24 = 100 students.<br>\n• <strong>(a) Ratio Flute : Guitar:</strong> 24 : 32 = Divide by 8 = <strong>3 : 4</strong>.<br>\n• <strong>(b) Drums Percentage:</strong> (16 ÷ 100) × 100 = <strong>16%</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total = 100 students",
            "marks": "1.0 M"
          },
          {
            "key": "Ratio = 3 : 4",
            "marks": "1.0 M"
          },
          {
            "key": "Drums = 16%",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Rainfall Days in a Year",
        "q": "A coastal city recorded rainy days over 4 seasons: Monsoon (65 days), Winter (12 days), Summer (8 days), Post-Monsoon (15 days).<br>(a) What was the total number of rainy days in the year?<br>(b) What fraction of rainy days occurred during the Monsoon?",
        "ans": "<strong>Calculations:</strong><br>\n• <strong>(a) Total Rainy Days:</strong> 65 + 12 + 8 + 15 = <strong>100 days</strong>.<br>\n• <strong>(b) Monsoon Fraction:</strong> 65/100 = <strong>13/20 (or 65%)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total = 100 days",
            "marks": "1.5 M"
          },
          {
            "key": "Monsoon fraction = 13/20",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Tally Count Extraction",
        "q": "Identify the numeric value of each tally group:<br>(a) <s>||||</s> <s>||||</s> <s>||||</s> |||<br>(b) <s>||||</s> <s>||||</s> |<br>(c) <s>||||</s> <s>||||</s> <s>||||</s> <s>||||</s>",
        "ans": "<strong>Tally Bundle Values (Each bundle = 5):</strong><br>\n• <strong>(a) 3 bundles + 3:</strong> (3 × 5) + 3 = 15 + 3 = <strong>18</strong>.<br>\n• <strong>(b) 2 bundles + 1:</strong> (2 × 5) + 1 = 10 + 1 = <strong>11</strong>.<br>\n• <strong>(c) 4 bundles:</strong> 4 × 5 = <strong>20</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 18",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 11",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): 20",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "True or False with Statistics Reason",
        "q": "State True or False with reasoning:<br>(a) A bar graph must always have equal spacing between its bars.<br>(b) The scale of a bar graph must always start from zero.<br>(c) A pictograph can only display whole numbers and cannot represent fractions.",
        "ans": "<strong>Justifications:</strong><br>\n• <strong>(a) True:</strong> Equal uniform spacing between bars prevents visual distortion and maintains aesthetic and statistical consistency.<br>\n• <strong>(b) True:</strong> Starting bar graphs at zero prevents exaggerating differences between categories.<br>\n• <strong>(c) False:</strong> A pictograph can represent fractional quantities using half or partial symbols (e.g. half a symbol represents half the scale value).",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): True with spacing reason",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): True with baseline reason",
            "marks": "1.0 M"
          },
          {
            "key": "Part (c): False with half-symbol proof",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Comprehensive Data Handling Project",
        "q": "A class conducted an energy conservation survey recording daily hours of classroom fan usage over 5 weekdays: Mon (6 h), Tue (5 h), Wed (7 h), Thu (4 h), Fri (6 h).<br>(a) Construct a frequency table and find total fan hours.<br>(b) If each ceiling fan consumes 0.08 kWh per hour, how many kWh of energy were used in total?<br>(c) At ₹6 per kWh, find the electricity cost for the week.",
        "ans": "<strong>Comprehensive Project Working:</strong><br>\n• <strong>(a) Total Hours:</strong> 6 + 5 + 7 + 4 + 6 = <strong>28 hours</strong>.<br>\n• <strong>(b) Energy Consumed:</strong> 28 hours × 0.08 kWh = <strong>2.24 kWh</strong>.<br>\n• <strong>(c) Total Electricity Cost:</strong> 2.24 kWh × ₹6 = <strong>₹13.44</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total fan hours = 28 h",
            "marks": "1.0 M"
          },
          {
            "key": "Energy = 2.24 kWh",
            "marks": "1.0 M"
          },
          {
            "key": "Cost = ₹13.44",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Competency Question: Van Mahotsav Sapling Planting Audit",
      "text": "During the annual Van Mahotsav tree plantation drive, four houses of a school planted neem, peepal, and gulmohar saplings. Red House planted 85, Blue House planted 110, Green House planted 125, and Yellow House planted 80 saplings.",
      "question": "(a) What is the total count of saplings planted by all four houses?<br>(b) By what percentage did Green House exceed Yellow House in saplings planted?",
      "answer": "<div class=\"cbq-sol-label\">Suggested Model Solution:</div>\r\n          \r\n <div class=\"step\"><strong>(a) Total Saplings:</strong> 85 + 110 + 125 + 80 = <strong>400 saplings</strong>.</div>\r\n <div class=\"step\"><strong>(b) Percentage Difference:</strong> 125 - 80/80 × 100 = 45/80 × 100 = <strong>56.25%</strong>.",
      "rubric": "1M concept identification + 1M step execution + 1M conclusion"
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { mathsMelaChapters };
}
