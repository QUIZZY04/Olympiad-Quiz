// Official NCERT Class 3 Mathematics (Maths Mela / आनन्दमय गणित) Complete Dataset - Chapters 1 to 14
// Aligned with New NEP 2020 & NCF-FS / NCF-SE 2023 Curriculum (CBSE 2026-27 Session) - 100% Comprehensive Coverage

const mathsMelaChapters = [
  {
    id: "mm1",
    num: 1,
    unit: "Unit 1: Numbers & Everyday Math",
    title: "What's in a Name?",
    subtitle: "Letter Counting, Name Grids, Number Names & Comparing Quantities",
    concepts: [
      "Counting letters in names and organizing data into frequency tables.",
      "Comparing lengths of names: identifying longest and shortest names.",
      "Finding names starting or ending with the same letter.",
      "Representing quantities using tally marks and bar-like grid representations."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Name Length &amp; Letter Frequency Grid</text>
      <rect x="50" y="50" width="120" height="35" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="110" y="72" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">A M I T (4)</text>
      <rect x="190" y="50" width="160" height="35" rx="6" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
      <text x="270" y="72" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#9a3412" text-anchor="middle">P R I Y A N K A (8)</text>
      <rect x="370" y="50" width="150" height="35" rx="6" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>
      <text x="445" y="72" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#14532d" text-anchor="middle">S A R I T A (6)</text>
      <text x="290" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#334155" text-anchor="middle">Longest Name: Priyanka (8 letters) • Shortest: Amit (4 letters) • Difference: 8 - 4 = 4 letters</text>
    </svg>`,
    questions: [
      {
        category: "Textbook Exercise • Letter Counting",
        q: "Write down the names of four of your classmates. Count the number of letters in each name. Which name is the longest, which is the shortest, and what is the difference between the two?",
        ans: "<strong>Step-by-Step Solution:</strong><br>1. Suppose we choose 4 classmates: <em>Ravi</em>, <em>Ananya</em>, <em>Aarav</em>, and <em>Dharmendra</em>.<br>2. Counting letters in each:<br>• Ravi: R-A-V-I = <strong>4 letters</strong><br>• Ananya: A-N-A-N-Y-A = <strong>6 letters</strong><br>• Aarav: A-A-R-A-V = <strong>5 letters</strong><br>• Dharmendra: D-H-A-R-M-E-N-D-R-A = <strong>10 letters</strong><br>3. <strong>Longest name:</strong> Dharmendra (10 letters)<br>4. <strong>Shortest name:</strong> Ravi (4 letters)<br>5. <strong>Difference:</strong> 10 - 4 = <strong>6 letters</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct letter count for all 4 names", marks: "1.5 M" },
          { key: "Identifying longest, shortest, and difference", marks: "1.5 M" }
        ]
      },
      {
        category: "Classroom Activity • Alphabet Hunt",
        q: "In a class of 20 children, 5 names start with the letter 'A', 3 with 'R', 4 with 'S', and 8 with other letters. How many names start with 'A', 'R', or 'S' altogether? What fraction of names start with 'A'?",
        ans: "<strong>Given:</strong><br>• Total children = 20<br>• Names starting with 'A' = 5<br>• Names starting with 'R' = 3<br>• Names starting with 'S' = 4<br><br><strong>Calculation:</strong><br>• Total names starting with 'A', 'R', or 'S' = 5 + 3 + 4 = <strong>12 names</strong>.<br>• Fraction of names starting with 'A' = 5 out of 20 = 5/20 = <strong>1/4 (one-fourth)</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct addition of name categories (5+3+4 = 12)", marks: "1.5 M" },
          { key: "Correct fraction identification (5/20 = 1/4)", marks: "1.5 M" }
        ]
      },
      {
        category: "Hands-on Project • Name Tally Chart",
        q: "How can you organize all the students' names in your class by the number of letters (3 letters, 4 letters, 5 letters, 6+ letters) using a tally chart? Create a sample tally chart for 15 students.",
        ans: "<strong>Sample Tally Chart for 15 Students:</strong><br><table style='width:100%;border-collapse:collapse;margin-top:8px;'><thead><tr style='background:#f1f5f9;border-bottom:2px solid #cbd5e1;'><th style='padding:6px;border:1px solid #cbd5e1;'>Name Length</th><th style='padding:6px;border:1px solid #cbd5e1;'>Tally Marks</th><th style='padding:6px;border:1px solid #cbd5e1;'>Number of Children</th></tr></thead><tbody><tr><td style='padding:6px;border:1px solid #cbd5e1;'>3 letters (e.g., Ali, Uma)</td><td style='padding:6px;border:1px solid #cbd5e1;'>||</td><td style='padding:6px;border:1px solid #cbd5e1;'>2</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>4 letters (e.g., Riya, John)</td><td style='padding:6px;border:1px solid #cbd5e1;'>||||</td><td style='padding:6px;border:1px solid #cbd5e1;'>4</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>5 letters (e.g., Mohan, Priya)</td><td style='padding:6px;border:1px solid #cbd5e1;'><s>||||</s> |</td><td style='padding:6px;border:1px solid #cbd5e1;'>6</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>6+ letters (e.g., Deepak, Sunita)</td><td style='padding:6px;border:1px solid #cbd5e1;'>|||</td><td style='padding:6px;border:1px solid #cbd5e1;'>3</td></tr><tr style='font-weight:700;background:#f8fafc;'><td style='padding:6px;border:1px solid #cbd5e1;'>Total</td><td style='padding:6px;border:1px solid #cbd5e1;'>—</td><td style='padding:6px;border:1px solid #cbd5e1;'>15</td></tr></tbody></table>",
        marks: 4,
        rubric: [
          { key: "Correct layout and categories in table", marks: "2.0 M" },
          { key: "Correct tally mark grouping (bundles of 5)", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Library Badge Code Challenge",
      text: "The school librarian gives each child a library code based on their name: 10 points for each letter in the first name plus 5 points for each vowel (A, E, I, O, U).",
      question: "Calculate the total library badge score for 'KAVITA'. How many vowels are in her name, and what is her final code value?",
      answer: "1. Name: K-A-V-I-T-A contains 6 letters.<br>2. Letter points = 6 × 10 = 60 points.<br>3. Vowels in KAVITA: A, I, A = 3 vowels.<br>4. Vowel bonus points = 3 × 5 = 15 points.<br>5. <strong>Total library badge score</strong> = 60 + 15 = <strong>75 points</strong>.",
      rubric: "1M letter points + 1M vowel identification + 1M final calculation."
    }
  },
  {
    id: "mm2",
    num: 2,
    unit: "Unit 1: Numbers & Everyday Math",
    title: "Toy Joy",
    subtitle: "Counting, Grouping, Place Value (Tens & Ones) & Price Tag Calculations",
    concepts: [
      "Grouping objects in tens and ones: building base-10 understanding.",
      "Forming 2-digit numbers using bundles of 10 sticks and loose 1s.",
      "Reading price tags on toys and combining coins/notes to pay exact amounts.",
      "Comparing toy prices: finding which costs more and which costs less."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">Toy Joy — Tens &amp; Ones Place Value Model</text>
      <!-- 4 Tens -->
      <rect x="70" y="45" width="22" height="60" rx="4" fill="#fdba74" stroke="#ea580c" stroke-width="1.5"/>
      <rect x="100" y="45" width="22" height="60" rx="4" fill="#fdba74" stroke="#ea580c" stroke-width="1.5"/>
      <rect x="130" y="45" width="22" height="60" rx="4" fill="#fdba74" stroke="#ea580c" stroke-width="1.5"/>
      <rect x="160" y="45" width="22" height="60" rx="4" fill="#fdba74" stroke="#ea580c" stroke-width="1.5"/>
      <text x="125" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#c2410c" text-anchor="middle">4 Tens = 40</text>
      <text x="225" y="80" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#ea580c" text-anchor="middle">+</text>
      <!-- 6 Ones -->
      <circle cx="280" cy="60" r="10" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
      <circle cx="310" cy="60" r="10" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
      <circle cx="340" cy="60" r="10" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
      <circle cx="280" cy="90" r="10" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
      <circle cx="310" cy="90" r="10" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
      <circle cx="340" cy="90" r="10" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
      <text x="310" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#c2410c" text-anchor="middle">6 Ones = 6</text>
      <!-- Equal Box -->
      <text x="400" y="80" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#ea580c" text-anchor="middle">=</text>
      <rect x="430" y="48" width="100" height="55" rx="8" fill="#ea580c"/>
      <text x="480" y="85" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#ffffff" text-anchor="middle">46</text>
      <text x="480" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#9a3412" text-anchor="middle">Toy Car Price: ₹46</text>
    </svg>`,
    questions: [
      {
        category: "Textbook Exercise • Tens & Ones",
        q: "A toy shop owner has 64 marbles. How many packets of 10 marbles can she make, and how many loose marbles will be left over? Write 64 in expanded form.",
        ans: "<strong>Solution:</strong><br>• Total marbles = 64<br>• Number of tens in 64 = <strong>6 packets of 10</strong> (6 × 10 = 60)<br>• Loose marbles left over = <strong>4 marbles</strong><br>• <strong>Expanded Form:</strong> 64 = 60 + 4 = 6 Tens + 4 Ones.",
        marks: 2,
        rubric: [
          { key: "Correct number of packets (6) and loose (4)", marks: "1.0 M" },
          { key: "Correct expanded form representation (60 + 4)", marks: "1.0 M" }
        ]
      },
      {
        category: "Textbook Exercise • Money & Pricing",
        q: "Rani buys a teddy bear for ₹38 and a spinning top for ₹24. (a) What is the total cost? (b) If she gives a ₹100 note to the shopkeeper, how much change should she receive?",
        ans: "<strong>Step-by-step Solution:</strong><br><strong>(a) Total Cost:</strong><br>Cost of teddy bear = ₹38<br>Cost of spinning top = ₹24<br>Total = ₹38 + ₹24 = ₹(30 + 20 + 8 + 4) = ₹50 + ₹12 = <strong>₹62</strong>.<br><br><strong>(b) Change Received:</strong><br>Amount given = ₹100<br>Total spent = ₹62<br>Change = ₹100 - ₹62 = <strong>₹38</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct addition for total cost (₹62)", marks: "1.5 M" },
          { key: "Correct subtraction for balance change (₹38)", marks: "1.5 M" }
        ]
      },
      {
        category: "Logical Puzzle • Number Riddle",
        q: "I have 5 in my tens place. The digit in my ones place is 3 more than the digit in my tens place. What number am I? Is this number even or odd?",
        ans: "<strong>Deduction:</strong><br>1. Digit in tens place = 5<br>2. Digit in ones place = 5 + 3 = 8<br>3. The number is <strong>58</strong>.<br>4. Since the ones digit is 8 (divisible by 2), the number 58 is an <strong>EVEN number</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct calculation of ones digit and number 58", marks: "1.0 M" },
          { key: "Correct classification as Even", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Toy Store Clearance Sale",
      text: "During Diwali sale, the shop offers a 'Buy 2 Get ₹10 Off' coupon on toy purchases above ₹50.",
      question: "Arjun selects a toy drum for ₹35 and a toy car for ₹42. Does he qualify for the discount? What is his final bill amount?",
      answer: "1. Total cost before discount = ₹35 + ₹42 = ₹77.<br>2. Since ₹77 is greater than ₹50 and he bought 2 toys, Arjun qualifies for the discount.<br>3. Discount = ₹10.<br>4. <strong>Final bill amount</strong> = ₹77 - ₹10 = <strong>₹67</strong>.",
      rubric: "1M qualification logic + 1M addition + 1M discount subtraction."
    }
  },
  {
    id: "mm3",
    num: 3,
    unit: "Unit 1: Numbers & Everyday Math",
    title: "Double Century",
    subtitle: "3-Digit Numbers, Place Value up to 200, Century & Number Line Jumps",
    concepts: [
      "Understanding 'Century' (100) and 'Double Century' (200).",
      "Counting beyond 100 up to 200 in 1s, 2s, 5s, and 10s.",
      "Cricket scores and running between wickets: practical applications of centuries.",
      "Number line representation and skip counting forward and backward."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">Cricket Scoreboard — Journey to Double Century (200)</text>
      <!-- Batting Scoreboard -->
      <rect x="60" y="45" width="460" height="70" rx="8" fill="#14532d"/>
      <text x="90" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#86efac">VIRAT: 96</text>
      <text x="90" y="98" font-family="system-ui, sans-serif" font-size="10" fill="#bbf7d0">Needs: 100 - 96 = 4 runs for Century</text>
      <line x1="280" y1="52" x2="280" y2="108" stroke="#16a34a" stroke-width="1.5"/>
      <text x="310" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#fde047">ROHIT: 178</text>
      <text x="310" y="98" font-family="system-ui, sans-serif" font-size="10" fill="#fef08a">Needs: 200 - 178 = 22 runs for Double Century</text>
      <text x="290" y="142" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">1 Century = 100 Runs • 1 Half-Century = 50 Runs • 1 Double Century = 200 Runs</text>
    </svg>`,
    questions: [
      {
        category: "Cricket Match Math • Centuries",
        q: "In an ODI cricket match, Dhoni was batting on 93. A six was hit on the next ball. (a) Did he complete his century? (b) How many runs did he score in total?",
        ans: "<strong>Solution:</strong><br>• Initial score = 93 runs<br>• Runs from six = 6 runs<br>• Total score = 93 + 6 = <strong>99 runs</strong>.<br>• <strong>(a)</strong> A century is exactly 100 runs. Since 99 is 1 less than 100, he did <strong>not</strong> complete his century (missed by 1 run).<br>• <strong>(b)</strong> Total score = <strong>99 runs</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct addition (93 + 6 = 99)", marks: "1.5 M" },
          { key: "Accurate century determination (100 runs needed)", marks: "1.5 M" }
        ]
      },
      {
        category: "Textbook Exercise • Number Patterns",
        q: "Write the next four numbers for each sequence: (a) 102, 104, 106, __, __, __, __ (Jump 2 steps). (b) 150, 160, 170, __, __, __, __ (Jump 10 steps).",
        ans: "<strong>Answers:</strong><br><strong>(a) Skip counting by 2:</strong><br>102, 104, 106, <strong>108, 110, 112, 114</strong>.<br><br><strong>(b) Skip counting by 10:</strong><br>150, 160, 170, <strong>180, 190, 200, 210</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct skip counting by 2", marks: "1.0 M" },
          { key: "Correct skip counting by 10 reaching 200", marks: "1.0 M" }
        ]
      },
      {
        category: "Place Value Exploration • Expanded Form",
        q: "Write the number name and expanded form for: (1) 147, (2) 199, (3) 200.",
        ans: "<strong>Table of Values:</strong><br>• <strong>147:</strong> One hundred forty-seven = <strong>100 + 40 + 7</strong> (1 Hundred, 4 Tens, 7 Ones)<br>• <strong>199:</strong> One hundred ninety-nine = <strong>100 + 90 + 9</strong> (1 Hundred, 9 Tens, 9 Ones)<br>• <strong>200:</strong> Two hundred = <strong>200 + 0 + 0</strong> (2 Hundreds, 0 Tens, 0 Ones).",
        marks: 3,
        rubric: [
          { key: "Correct number names", marks: "1.5 M" },
          { key: "Correct 3-digit place value breakdowns", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Inter-School Cricket Championship",
      text: "Four batsmen in a school match scored: Aman (128), Kabir (164), Jaspreet (98), and Tenzing (185).",
      question: "Who scored the highest? How many more runs did Kabir need to reach a double century?",
      answer: "1. Comparing scores: 185 > 164 > 128 > 98.<br>• <strong>Highest scorer:</strong> Tenzing with 185 runs.<br>2. A double century = 200 runs.<br>• Runs needed by Kabir = 200 - 164 = <strong>36 runs</strong>.",
      rubric: "1.5M comparison and identification + 1.5M subtraction from 200."
    }
  },
  {
    id: "mm4",
    num: 4,
    unit: "Unit 2: Measurement & Everyday Life",
    title: "Vacation with My Nani Maa",
    subtitle: "Calendar Reading, Dates, Weeks, Days & Travel Time Calculation",
    concepts: [
      "Reading calendar pages: identifying days, weeks, months, and dates.",
      "Calculating duration between two dates: start date to end date.",
      "Understanding leap years and standard 30/31-day month patterns.",
      "Estimating time taken for everyday journeys and household routines."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fdf4ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#86198f" text-anchor="middle">May Calendar — Nani Maa's Vacation Timeline</text>
      <!-- Mini Calendar Grid -->
      <rect x="70" y="45" width="200" height="95" rx="6" fill="#ffffff" stroke="#c084fc" stroke-width="1.5"/>
      <rect x="70" y="45" width="200" height="22" fill="#c084fc"/>
      <text x="170" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">MAY 2026</text>
      <text x="80" y="82" font-family="system-ui, sans-serif" font-size="9" fill="#64748b">S  M  T  W  T  F  S</text>
      <text x="80" y="100" font-family="system-ui, sans-serif" font-size="9" fill="#1e293b">      1  2  3  4  5</text>
      <rect x="135" y="90" width="16" height="13" fill="#fbcfe8" rx="2"/>
      <text x="80" y="118" font-family="system-ui, sans-serif" font-size="9" fill="#1e293b"> 6  7  8  9 10 11 12</text>
      <text x="80" y="134" font-family="system-ui, sans-serif" font-size="9" fill="#1e293b">13 14 15 16 17 18 19</text>
      <!-- Vacation Span Info -->
      <rect x="300" y="45" width="220" height="95" rx="6" fill="#fae8ff" stroke="#d946ef" stroke-width="1.5"/>
      <text x="315" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#701a75">Trip Duration:</text>
      <text x="315" y="90" font-family="system-ui, sans-serif" font-size="10" fill="#4a044e">Depart: 10 May • Return: 25 May</text>
      <text x="315" y="110" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#c026d3">Days at Nani's = 25 - 10 = 15 Days</text>
      <text x="315" y="128" font-family="system-ui, sans-serif" font-size="10" fill="#701a75">Total = 2 Weeks &amp; 1 Day</text>
    </svg>`,
    questions: [
      {
        category: "Calendar Reading • Vacation Calculation",
        q: "Aarav went to his Nani Maa's village on 15 May and returned home on 30 May. How many days did he spend at his grandmother's house? How many weeks and days is that?",
        ans: "<strong>Solution:</strong><br>• Departure date = 15 May<br>• Return date = 30 May<br>• Days spent = 30 - 15 = <strong>15 days</strong>.<br>• Since 1 week = 7 days:<br>15 ÷ 7 = <strong>2 weeks with 1 day remaining</strong> (2 × 7 + 1 = 15 days).",
        marks: 2,
        rubric: [
          { key: "Correct subtraction of dates (15 days)", marks: "1.0 M" },
          { key: "Conversion to weeks and remaining days (2 weeks 1 day)", marks: "1.0 M" }
        ]
      },
      {
        category: "Textbook Exercise • Date Formats",
        q: "Look at the manufacturing date stamped on a jar of mango pickle: '05/26'. It is best before 6 months from the date of packing. (a) What month and year was it packed? (b) Till which month is it safe to eat?",
        ans: "<strong>Analysis:</strong><br><strong>(a) Packed Date:</strong> '05/26' indicates the <strong>5th month (May) of the year 2026</strong>.<br><strong>(b) Expiry Calculation:</strong><br>6 months from May 2026:<br>• 1 month: June<br>• 2 months: July<br>• 3 months: August<br>• 4 months: September<br>• 5 months: October<br>• 6 months: November 2026.<br>Therefore, it is safe to eat till <strong>November 2026</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct interpretation of 05/26 (May 2026)", marks: "1.5 M" },
          { key: "Correct month addition (+6 months = November 2026)", marks: "1.5 M" }
        ]
      },
      {
        category: "Days in Months • Finger Knuckle Method",
        q: "How many days are there in the months of: (a) July, (b) August, (c) September, (d) February in a non-leap year? Explain how knuckles help remember 30- and 31-day months.",
        ans: "<strong>Days in Months:</strong><br>• (a) July = <strong>31 days</strong><br>• (b) August = <strong>31 days</strong><br>• (c) September = <strong>30 days</strong><br>• (d) February (ordinary year) = <strong>28 days</strong>.<br><br><strong>Knuckle Method:</strong> Months landing on knuckle bumps have 31 days (Jan, Mar, May, Jul, Aug, Oct, Dec). Months landing in the valleys between knuckles have 30 days (Apr, Jun, Sep, Nov), except February which has 28 or 29 days.",
        marks: 3,
        rubric: [
          { key: "Correct days for all 4 months", marks: "2.0 M" },
          { key: "Accurate explanation of knuckle rule", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Train Journey Schedule Analysis",
      text: "The Shatabdi Express leaves New Delhi station at 06:00 AM and arrives in Amritsar at 12:30 PM on the same day.",
      question: "How long is the train journey in hours and minutes? If the train is delayed by 45 minutes, at what time will it reach?",
      answer: "1. From 06:00 AM to 12:00 Noon = 6 hours.<br>2. From 12:00 Noon to 12:30 PM = 30 minutes.<br>• <strong>Scheduled journey time</strong> = <strong>6 hours and 30 minutes</strong>.<br>3. With a 45-minute delay: 12:30 PM + 45 minutes = 12:30 + 30 min (1:00 PM) + 15 min = <strong>01:15 PM</strong>.",
      rubric: "1.5M journey duration calculation + 1.5M delayed arrival time."
    }
  },
  {
    id: "mm5",
    num: 5,
    unit: "Unit 2: Measurement & Everyday Life",
    title: "Fun with Shapes",
    subtitle: "Edges, Corners, Flat & Curved Surfaces, 2D Patterns & Tangram Creations",
    concepts: [
      "Identifying 2D shapes: rectangles, squares, triangles, and circles.",
      "Properties of shapes: counting straight sides, curved sides, and corners (vertices).",
      "Special properties: opposite sides equal in rectangles, all 4 sides equal in squares.",
      "Creating pictures with basic shapes and exploring tiling patterns."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Fun with 2D Geometric Shapes &amp; Attributes</text>
      <!-- Triangle -->
      <polygon points="80,50 40,110 120,110" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
      <text x="80" y="130" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Triangle</text>
      <text x="80" y="145" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">3 Sides, 3 Corners</text>
      <!-- Square -->
      <rect x="180" y="55" width="55" height="55" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
      <text x="207" y="130" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">Square</text>
      <text x="207" y="145" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">4 Equal Sides, 4 Corners</text>
      <!-- Rectangle -->
      <rect x="300" y="60" width="90" height="50" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
      <text x="345" y="130" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">Rectangle</text>
      <text x="345" y="145" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">Opposite Sides Equal</text>
      <!-- Circle -->
      <circle cx="480" cy="85" r="28" fill="#e9d5ff" stroke="#9333ea" stroke-width="2"/>
      <text x="480" y="130" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#581c87" text-anchor="middle">Circle</text>
      <text x="480" y="145" font-family="system-ui, sans-serif" font-size="9" fill="#7e22ce" text-anchor="middle">1 Curved Edge, 0 Corners</text>
    </svg>`,
    questions: [
      {
        category: "Textbook Exercise • Shape Attributes",
        q: "Look at the following objects: A postcard, a round plate, a triangular birthday cap, and a chessboard. State the shape, number of edges, and number of corners for each.",
        ans: "<strong>Shape Breakdown:</strong><br>• <strong>Postcard:</strong> Rectangle → 4 straight edges, 4 corners.<br>• <strong>Round Plate:</strong> Circle → 1 curved edge, 0 corners.<br>• <strong>Birthday Cap face:</strong> Triangle → 3 straight edges, 3 corners.<br>• <strong>Chessboard:</strong> Square → 4 equal straight edges, 4 corners.",
        marks: 3,
        rubric: [
          { key: "Correct shape identification for all 4 items", marks: "1.5 M" },
          { key: "Correct counts of edges and corners", marks: "1.5 M" }
        ]
      },
      {
        category: "Tangram Investigation • Problem Solving",
        q: "How many pieces are in a 5-piece tangram? Which pieces are triangles, and can you combine two small triangles to make a square? Show the working.",
        ans: "<strong>Explanation:</strong><br>1. A 5-piece tangram has <strong>5 pieces</strong>: 3 triangles, 1 square, and 1 parallelogram.<br>2. <strong>Making a square:</strong> Yes, by placing the longest sides (hypotenuses) of two identical small right-angled triangles together, their right angles become two opposite corners of a new <strong>square</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct composition of 5-piece tangram", marks: "1.0 M" },
          { key: "Accurate geometric explanation of forming a square", marks: "1.0 M" }
        ]
      },
      {
        category: "Practical Application • Tiling & Tessellation",
        q: "Why can square and rectangular floor tiles cover a room completely without any gaps, but circular coins leave gaps when placed next to each other?",
        ans: "<strong>Geometric Reason:</strong><br>• Squares and rectangles have straight edges and 90° corner angles. When placed side by side, their edges align flush against each other, filling all 360° around every point with zero empty space.<br>• Circles have curved boundaries. When round items touch, circular arcs curve away from each other, leaving open gaps between them. Hence, circles cannot tessellate.",
        marks: 3,
        rubric: [
          { key: "Explanation of straight edges and corners fitting flush", marks: "1.5 M" },
          { key: "Explanation of curved arc gaps in circles", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Classroom Floor Tiling Project",
      text: "The school is laying square tiles of side 1 metre in an activity hall that is 6 metres long and 4 metres wide.",
      question: "How many 1-metre square tiles are needed to pave the entire floor? If each tile costs ₹50, find the total cost of tiles.",
      answer: "1. Area of floor = Length × Width = 6 m × 4 m = 24 square metres.<br>2. Area of 1 tile = 1 m × 1 m = 1 square metre.<br>3. <strong>Number of tiles needed</strong> = 24 ÷ 1 = <strong>24 tiles</strong>.<br>4. <strong>Total cost</strong> = 24 × ₹50 = <strong>₹1,200</strong>.",
      rubric: "1.5M tile count calculation + 1.5M total cost multiplication."
    }
  },
  {
    id: "mm6",
    num: 6,
    unit: "Unit 3: Expanding Place Value & Operations",
    title: "House of Hundreds – I",
    subtitle: "Place Value (Hundreds, Tens, Ones), 3-Digit Numbers, Abacus & Expansion",
    concepts: [
      "Building 3-digit numbers using 100-flats, 10-rods, and 1-units (Dienes blocks).",
      "Reading and representing numbers up to 500 on a 3-spike abacus.",
      "Writing standard form, expanded form, and number words up to 500.",
      "Ordering and comparing 3-digit numbers using greater than (>) and less than (<)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#b45309" text-anchor="middle">House of Hundreds — Base-10 Model for 346</text>
      <!-- 3 Hundreds (Large Squares) -->
      <rect x="50" y="45" width="50" height="50" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
      <rect x="70" y="55" width="50" height="50" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
      <rect x="90" y="65" width="50" height="50" fill="#fcd34d" stroke="#d97706" stroke-width="2"/>
      <text x="115" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle">3 Hundreds = 300</text>
      <!-- 4 Tens (Rods) -->
      <rect x="230" y="50" width="8" height="65" fill="#fdba74" stroke="#ea580c" stroke-width="1"/>
      <rect x="245" y="50" width="8" height="65" fill="#fdba74" stroke="#ea580c" stroke-width="1"/>
      <rect x="260" y="50" width="8" height="65" fill="#fdba74" stroke="#ea580c" stroke-width="1"/>
      <rect x="275" y="50" width="8" height="65" fill="#fdba74" stroke="#ea580c" stroke-width="1"/>
      <text x="260" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#c2410c" text-anchor="middle">4 Tens = 40</text>
      <!-- 6 Ones (Units) -->
      <rect x="360" y="60" width="10" height="10" fill="#a7f3d0" stroke="#059669" stroke-width="1"/>
      <rect x="375" y="60" width="10" height="10" fill="#a7f3d0" stroke="#059669" stroke-width="1"/>
      <rect x="390" y="60" width="10" height="10" fill="#a7f3d0" stroke="#059669" stroke-width="1"/>
      <rect x="360" y="75" width="10" height="10" fill="#a7f3d0" stroke="#059669" stroke-width="1"/>
      <rect x="375" y="75" width="10" height="10" fill="#a7f3d0" stroke="#059669" stroke-width="1"/>
      <rect x="390" y="75" width="10" height="10" fill="#a7f3d0" stroke="#059669" stroke-width="1"/>
      <text x="380" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#047857" text-anchor="middle">6 Ones = 6</text>
      <!-- Result -->
      <rect x="445" y="55" width="100" height="55" rx="8" fill="#d97706"/>
      <text x="495" y="92" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#ffffff" text-anchor="middle">346</text>
    </svg>`,
    questions: [
      {
        category: "Place Value Exploration • 3-Digit Numbers",
        q: "What is the place value and face value of the underlined digit in each: (a) 4<u>7</u>2, (b) <u>3</u>09, (c) 25<u>8</u>?",
        ans: "<strong>Values:</strong><br>• <strong>(a) 4<u>7</u>2:</strong> The digit 7 is in the Tens place.<br>Face Value = <strong>7</strong>, Place Value = 7 × 10 = <strong>70</strong>.<br><br>• <strong>(b) <u>3</u>09:</strong> The digit 3 is in the Hundreds place.<br>Face Value = <strong>3</strong>, Place Value = 3 × 100 = <strong>300</strong>.<br><br>• <strong>(c) 25<u>8</u>:</strong> The digit 8 is in the Ones place.<br>Face Value = <strong>8</strong>, Place Value = 8 × 1 = <strong>8</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct face values for all three digits", marks: "1.5 M" },
          { key: "Correct place values according to positional weight", marks: "1.5 M" }
        ]
      },
      {
        category: "Number Ordering • Ascending & Descending",
        q: "Arrange the following numbers in: (a) Ascending order (smallest to largest), (b) Descending order (largest to smallest): 345, 289, 412, 198, 305.",
        ans: "<strong>Solution:</strong><br><strong>(a) Ascending Order:</strong><br>198 &lt; 289 &lt; 305 &lt; 345 &lt; 412<br>Order: <strong>198, 289, 305, 345, 412</strong>.<br><br><strong>(b) Descending Order:</strong><br>412 &gt; 345 &gt; 305 &gt; 289 &gt; 198<br>Order: <strong>412, 345, 305, 289, 198</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct ascending arrangement", marks: "1.0 M" },
          { key: "Correct descending arrangement", marks: "1.0 M" }
        ]
      },
      {
        category: "Forming Numbers • Greatest & Smallest",
        q: "Using the digits 4, 0, and 7 without repeating any digit: (a) Write the greatest 3-digit number. (b) Write the smallest 3-digit number. Explain why 0 cannot be in the hundreds place.",
        ans: "<strong>Analysis:</strong><br>• <strong>(a) Greatest 3-digit number:</strong> Arrange digits in descending order → <strong>740</strong>.<br>• <strong>(b) Smallest 3-digit number:</strong> We cannot put 0 at the start because 047 is only a 2-digit number (47). The smallest non-zero digit is 4, followed by 0, then 7 → <strong>407</strong>.<br>• <strong>Explanation:</strong> Placing 0 in the hundreds place means there are zero hundreds, reducing the number to tens and ones (a 2-digit number).",
        marks: 3,
        rubric: [
          { key: "Correct greatest number (740)", marks: "1.0 M" },
          { key: "Correct smallest number (407)", marks: "1.0 M" },
          { key: "Valid mathematical reason regarding leading zero", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "School Tree Plantation Drive",
      text: "During Van Mahotsav, Class 3 students planted saplings: Section A planted 148 saplings, Section B planted 175 saplings, and Section C planted 126 saplings.",
      question: "How many saplings did the three sections plant altogether? If the school target was 500 saplings, how many more are needed?",
      answer: "1. Total saplings planted = 148 + 175 + 126.<br>• 148 + 175 = 323.<br>• 323 + 126 = 449 saplings.<br>2. <strong>Total planted</strong> = <strong>449 saplings</strong>.<br>3. Target = 500 saplings.<br>• Shortfall = 500 - 449 = <strong>51 saplings</strong>.",
      rubric: "1.5M addition of 3 numbers + 1.5M subtraction from 500 target."
    }
  },
  {
    id: "mm7",
    num: 7,
    unit: "Unit 3: Expanding Place Value & Operations",
    title: "Raksha Bandhan",
    subtitle: "Addition & Subtraction Strategies, Word Problems & Mental Math",
    concepts: [
      "Mental addition using split-and-combine (tens and ones separately).",
      "Subtraction with regrouping (borrowing from tens).",
      "Estimating sums and differences to the nearest ten.",
      "Solving 2-step real-world word problems related to gifting and savings."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff1f2" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#be123c" text-anchor="middle">Mental Math Addition Strategy — Split by Place Value</text>
      <!-- Equation Box -->
      <rect x="70" y="45" width="440" height="75" rx="8" fill="#ffe4e6" stroke="#f43f5e" stroke-width="1.5"/>
      <text x="120" y="75" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#9f1239">47 + 36 = ?</text>
      <text x="120" y="100" font-family="system-ui, sans-serif" font-size="12" fill="#881337">Split into Tens &amp; Ones:</text>
      <line x1="250" y1="52" x2="250" y2="112" stroke="#fda4af" stroke-width="1.5"/>
      <text x="270" y="72" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#be123c">Step 1: Tens → 40 + 30 = 70</text>
      <text x="270" y="90" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#be123c">Step 2: Ones → 7 + 6 = 13</text>
      <text x="270" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#9f1239">Step 3: Total → 70 + 13 = 83</text>
      <text x="290" y="142" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#9f1239" text-anchor="middle">Quick mental calculation without pencil-paper regrouping errors</text>
    </svg>`,
    questions: [
      {
        category: "Mental Addition • Split Strategy",
        q: "Solve using the mental split-by-tens strategy: (a) 54 + 28, (b) 63 + 35. Write out each intermediate step.",
        ans: "<strong>Step-by-Step Solutions:</strong><br><strong>(a) 54 + 28:</strong><br>• Split: (50 + 4) + (20 + 8)<br>• Add tens: 50 + 20 = 70<br>• Add ones: 4 + 8 = 12<br>• Combine: 70 + 12 = <strong>82</strong>.<br><br><strong>(b) 63 + 35:</strong><br>• Split: (60 + 3) + (30 + 5)<br>• Add tens: 60 + 30 = 90<br>• Add ones: 3 + 5 = 8<br>• Combine: 90 + 8 = <strong>98</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct split and step-by-step addition for (a)", marks: "1.5 M" },
          { key: "Correct split and step-by-step addition for (b)", marks: "1.5 M" }
        ]
      },
      {
        category: "Subtraction with Regrouping • Word Problem",
        q: "A sweet shop made 245 kaju katli sweets for Raksha Bandhan. By afternoon, 188 sweets were sold. How many sweets were left in the shop?",
        ans: "<strong>Solution:</strong><br>• Total sweets made = 245<br>• Sweets sold = 188<br>• Sweets left = 245 - 188<br><br><strong>Working:</strong><br>• Ones: 5 - 8 cannot be done. Borrow 1 Ten from 4 Tens (leaving 3 Tens). 15 - 8 = <strong>7</strong>.<br>• Tens: 3 - 8 cannot be done. Borrow 1 Hundred from 2 Hundreds (leaving 1 Hundred). 13 - 8 = <strong>5</strong>.<br>• Hundreds: 1 - 1 = <strong>0</strong>.<br>• Answer: <strong>57 sweets were left</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct setting up of subtraction with borrowing", marks: "1.5 M" },
          { key: "Correct final remainder (57 sweets)", marks: "1.5 M" }
        ]
      },
      {
        category: "Estimation • Rounding to Nearest 10",
        q: "Estimate the sum of 68 + 43 by rounding each number to the nearest ten. Then find the exact sum and check how close your estimate was.",
        ans: "<strong>Calculation:</strong><br>1. <strong>Rounding to nearest 10:</strong><br>• 68 rounds to <strong>70</strong> (since ones digit 8 ≥ 5)<br>• 43 rounds to <strong>40</strong> (since ones digit 3 &lt; 5)<br>• <strong>Estimated Sum:</strong> 70 + 40 = <strong>110</strong>.<br>2. <strong>Exact Sum:</strong> 68 + 43 = <strong>111</strong>.<br>3. <strong>Comparison:</strong> The estimate 110 differs from the exact answer 111 by only 1. It is extremely close.",
        marks: 2,
        rubric: [
          { key: "Correct rounding and estimated sum (110)", marks: "1.0 M" },
          { key: "Correct exact sum (111) and difference check", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Rakhi Gift Hamper Budgeting",
      text: "Simran has ₹250 savings. She wants to buy a rakhi for ₹45, a box of chocolates for ₹120, and a greeting card for ₹35 for her brother.",
      question: "Can Simran afford all three items with her savings? How much money will be left with her or how much more will she need?",
      answer: "1. Total cost of gifts = ₹45 + ₹120 + ₹35 = ₹(45 + 35 + 120) = ₹80 + ₹120 = <strong>₹200</strong>.<br>2. Simran's savings = ₹250.<br>3. Since ₹250 > ₹200, <strong>she can easily afford all three items</strong>.<br>4. Remaining money = ₹250 - ₹200 = <strong>₹50 left</strong>.",
      rubric: "1.5M addition of 3 gift items + 1.5M comparison with savings and balance."
    }
  },
  {
    id: "mm8",
    num: 8,
    unit: "Unit 3: Expanding Place Value & Operations",
    title: "Fair Share",
    subtitle: "Concept of Equal Sharing, Grouping, Introduction to Division & Fractions",
    concepts: [
      "Equal sharing: dividing a collection of items equally among a number of people.",
      "Equal grouping: finding how many groups of a given size can be formed.",
      "Division as repeated subtraction.",
      "Understanding halves (1/2) and quarters (1/4) of a whole collection."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfdf5" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#047857" text-anchor="middle">Fair Share — Sharing 12 Laddoos Equally Among 3 Children</text>
      <!-- Child 1 Plate -->
      <circle cx="110" cy="85" r="36" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
      <circle cx="100" cy="75" r="7" fill="#f59e0b"/>
      <circle cx="120" cy="75" r="7" fill="#f59e0b"/>
      <circle cx="100" cy="95" r="7" fill="#f59e0b"/>
      <circle cx="120" cy="95" r="7" fill="#f59e0b"/>
      <text x="110" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#065f46" text-anchor="middle">Rohan (4)</text>
      <!-- Child 2 Plate -->
      <circle cx="290" cy="85" r="36" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
      <circle cx="280" cy="75" r="7" fill="#f59e0b"/>
      <circle cx="300" cy="75" r="7" fill="#f59e0b"/>
      <circle cx="280" cy="95" r="7" fill="#f59e0b"/>
      <circle cx="300" cy="95" r="7" fill="#f59e0b"/>
      <text x="290" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#065f46" text-anchor="middle">Priya (4)</text>
      <!-- Child 3 Plate -->
      <circle cx="470" cy="85" r="36" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
      <circle cx="460" cy="75" r="7" fill="#f59e0b"/>
      <circle cx="480" cy="75" r="7" fill="#f59e0b"/>
      <circle cx="460" cy="95" r="7" fill="#f59e0b"/>
      <circle cx="480" cy="95" r="7" fill="#f59e0b"/>
      <text x="470" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#065f46" text-anchor="middle">Ali (4)</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#047857" text-anchor="middle">12 ÷ 3 = 4 Laddoos per Child</text>
    </svg>`,
    questions: [
      {
        category: "Equal Sharing • Division Basics",
        q: "Mother has 20 biscuits. She shares them equally among her 4 children. (a) How many biscuits does each child get? (b) Write the division sentence and repeated subtraction steps.",
        ans: "<strong>Solution:</strong><br>• Total biscuits = 20<br>• Number of children = 4<br><strong>(a)</strong> Each child gets = 20 ÷ 4 = <strong>5 biscuits</strong>.<br><br><strong>(b) Repeated Subtraction:</strong><br>1. 20 - 4 = 16 (1st biscuit each)<br>2. 16 - 4 = 12 (2nd biscuit each)<br>3. 12 - 4 = 8 (3rd biscuit each)<br>4. 8 - 4 = 4 (4th biscuit each)<br>5. 4 - 4 = 0 (5th biscuit each)<br>• Division sentence: <strong>20 ÷ 4 = 5</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct calculation of each child's share (5)", marks: "1.5 M" },
          { key: "Correct repeated subtraction sequence and division statement", marks: "1.5 M" }
        ]
      },
      {
        category: "Equal Grouping • Practical Word Problem",
        q: "There are 24 pencils in a box. If teacher puts 6 pencils in each pencil pouch, how many pouches can be filled? Are any pencils left over?",
        ans: "<strong>Solution:</strong><br>• Total pencils = 24<br>• Pencils per pouch = 6<br>• Number of pouches = 24 ÷ 6 = <strong>4 pouches</strong>.<br>• Remainder = 0, so <strong>no pencils are left over</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct division calculation (4 pouches)", marks: "1.0 M" },
          { key: "Correct statement regarding zero remainder", marks: "1.0 M" }
        ]
      },
      {
        category: "Fractions of a Collection • Halves & Quarters",
        q: "In a box of 16 apples: (a) Find half (1/2) of the apples. (b) Find one-fourth (1/4) of the apples. Explain what happens if you add half and one-fourth together.",
        ans: "<strong>Calculations:</strong><br>• <strong>(a) Half (1/2):</strong> 16 ÷ 2 = <strong>8 apples</strong>.<br>• <strong>(b) One-fourth (1/4):</strong> 16 ÷ 4 = <strong>4 apples</strong>.<br>• <strong>Combined:</strong> 8 + 4 = <strong>12 apples</strong> (which represents 3/4 or three-quarters of the collection, leaving 4 apples).",
        marks: 3,
        rubric: [
          { key: "Correct calculation of 1/2 of 16 (8)", marks: "1.0 M" },
          { key: "Correct calculation of 1/4 of 16 (4)", marks: "1.0 M" },
          { key: "Accurate combination explanation (12 apples)", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Picnic Fruit Distribution",
      text: "During a picnic, 30 bananas and 18 oranges are to be packed into 6 picnic baskets so that every basket gets an equal number of each fruit.",
      question: "How many bananas and how many oranges will go into each basket? How many total fruits are in each basket?",
      answer: "1. Bananas per basket = 30 ÷ 6 = 5 bananas.<br>2. Oranges per basket = 18 ÷ 6 = 3 oranges.<br>3. <strong>Total fruits per basket</strong> = 5 + 3 = <strong>8 fruits</strong>.",
      rubric: "1M bananas division + 1M oranges division + 1M total per basket."
    }
  },
  {
    id: "mm9",
    num: 9,
    unit: "Unit 3: Expanding Place Value & Operations",
    title: "House of Hundreds – II",
    subtitle: "3-Digit Numbers from 500 to 999, Comparison, Estimation & 1000",
    concepts: [
      "Extending place value from 500 up to 999.",
      "The transition to 4-digit numbers: 999 + 1 = 1000 (One Thousand).",
      "Representing 3-digit numbers using expanded notation and place value charts.",
      "Comparing 3-digit numbers by looking at hundreds, tens, and ones in order."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Reaching the Milestone of 1,000 (One Thousand)</text>
      <!-- Stepping stones -->
      <rect x="50" y="55" width="80" height="45" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="90" y="82" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e3a8a" text-anchor="middle">997</text>
      <rect x="150" y="55" width="80" height="45" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="190" y="82" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e3a8a" text-anchor="middle">998</text>
      <rect x="250" y="55" width="80" height="45" rx="6" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
      <text x="290" y="82" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#854d0e" text-anchor="middle">999</text>
      <text x="350" y="80" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#2563eb" text-anchor="middle">+ 1</text>
      <!-- Big 1000 -->
      <rect x="380" y="48" width="150" height="60" rx="8" fill="#1e40af"/>
      <text x="455" y="86" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#ffffff" text-anchor="middle">1,000</text>
      <text x="290" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">999 is the Greatest 3-Digit Number • 1,000 is the Smallest 4-Digit Number</text>
    </svg>`,
    questions: [
      {
        category: "Number Sequence & Transition • Milestones",
        q: "What is: (a) The greatest 3-digit number? (b) The smallest 3-digit number? (c) What number do you get if you add 1 to the greatest 3-digit number?",
        ans: "<strong>Answers:</strong><br>• <strong>(a) Greatest 3-digit number:</strong> <strong>999</strong><br>• <strong>(b) Smallest 3-digit number:</strong> <strong>100</strong><br>• <strong>(c) Adding 1:</strong> 999 + 1 = <strong>1,000 (One Thousand)</strong>, which is the smallest 4-digit number.",
        marks: 3,
        rubric: [
          { key: "Correct greatest 3-digit number (999)", marks: "1.0 M" },
          { key: "Correct smallest 3-digit number (100)", marks: "1.0 M" },
          { key: "Correct sum and explanation of 1,000", marks: "1.0 M" }
        ]
      },
      {
        category: "Place Value Table • Hundreds, Tens, Ones",
        q: "Write the numbers for: (a) 7 Hundreds + 0 Tens + 9 Ones, (b) 8 Hundreds + 6 Tens + 0 Ones, (c) 9 Hundreds + 9 Tens + 5 Ones. Write each in standard form and words.",
        ans: "<strong>Values:</strong><br>• <strong>(a)</strong> 700 + 0 + 9 = <strong>709</strong> (Seven hundred nine)<br>• <strong>(b)</strong> 800 + 60 + 0 = <strong>860</strong> (Eight hundred sixty)<br>• <strong>(c)</strong> 900 + 90 + 5 = <strong>995</strong> (Nine hundred ninety-five).",
        marks: 3,
        rubric: [
          { key: "Correct standard numerical form for all three", marks: "1.5 M" },
          { key: "Correct number words for all three", marks: "1.5 M" }
        ]
      },
      {
        category: "Comparison Rules • 3-Digit Numbers",
        q: "Compare the pairs using &gt;, &lt;, or =: (1) 845 ___ 854, (2) 699 ___ 701, (3) 930 ___ 903. State the rule for comparing two numbers that have the same hundreds digit.",
        ans: "<strong>Comparisons:</strong><br>1. 845 <strong>&lt;</strong> 854 (both have 8 hundreds, but 4 tens &lt; 5 tens)<br>2. 699 <strong>&lt;</strong> 701 (6 hundreds &lt; 7 hundreds)<br>3. 930 <strong>&gt;</strong> 903 (both have 9 hundreds, but 3 tens &gt; 0 tens)<br><br><strong>Comparison Rule:</strong> When the hundreds digits are equal, compare the digits in the tens place. The number with the greater tens digit is larger. If the tens are also equal, compare the ones digit.",
        marks: 3,
        rubric: [
          { key: "Correct symbols for all 3 pairs", marks: "1.5 M" },
          { key: "Clear mathematical rule explaining tens comparison", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Marathon Bib Number Allocation",
      text: "In a city mini-marathon for children, runner bibs were numbered from 750 to 850 consecutively.",
      question: "How many total runners participated? If Rahul wore bib 789 and Sanya wore bib 814, how many runners were between them?",
      answer: "1. Total runners = (Last bib - First bib) + 1 = (850 - 750) + 1 = 100 + 1 = <strong>101 runners</strong>.<br>2. Runners between 789 and 814 = 814 - 789 - 1 = 25 - 1 = <strong>24 runners</strong>.",
      rubric: "1.5M inclusive count calculation + 1.5M runners between calculation."
    }
  },
  {
    id: "mm10",
    num: 10,
    unit: "Unit 4: Multiplication, Measurement & Data",
    title: "Fun at Class Party!",
    subtitle: "Repeated Addition, Arrays, Multiplication Tables (2, 3, 4, 5, 10) & Party Budgets",
    concepts: [
      "Multiplication as repeated addition of equal groups.",
      "Arranging objects in rows and columns: understanding arrays (e.g., 4 rows of 5).",
      "Building multiplication tables for 2, 3, 4, 5, and 10 using patterns.",
      "Calculating costs for party food items using unit rates."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#faf5ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#6b21a8" text-anchor="middle">Multiplication as an Array — 4 Rows of 6 Cupcakes</text>
      <!-- 4 rows x 6 columns grid of cupcakes -->
      <g fill="#c084fc" stroke="#7e22ce" stroke-width="1.5">
        <!-- Row 1 -->
        <circle cx="160" cy="50" r="8"/><circle cx="190" cy="50" r="8"/><circle cx="220" cy="50" r="8"/><circle cx="250" cy="50" r="8"/><circle cx="280" cy="50" r="8"/><circle cx="310" cy="50" r="8"/>
        <!-- Row 2 -->
        <circle cx="160" cy="72" r="8"/><circle cx="190" cy="72" r="8"/><circle cx="220" cy="72" r="8"/><circle cx="250" cy="72" r="8"/><circle cx="280" cy="72" r="8"/><circle cx="310" cy="72" r="8"/>
        <!-- Row 3 -->
        <circle cx="160" cy="94" r="8"/><circle cx="190" cy="94" r="8"/><circle cx="220" cy="94" r="8"/><circle cx="250" cy="94" r="8"/><circle cx="280" cy="94" r="8"/><circle cx="310" cy="94" r="8"/>
        <!-- Row 4 -->
        <circle cx="160" cy="116" r="8"/><circle cx="190" cy="116" r="8"/><circle cx="220" cy="116" r="8"/><circle cx="250" cy="116" r="8"/><circle cx="280" cy="116" r="8"/><circle cx="310" cy="116" r="8"/>
      </g>
      <text x="80" y="88" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#581c87">4 Rows</text>
      <text x="235" y="142" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#6b21a8" text-anchor="middle">4 × 6 = 24 Cupcakes</text>
      <rect x="380" y="55" width="150" height="70" rx="8" fill="#e9d5ff" stroke="#a855f7" stroke-width="1.5"/>
      <text x="455" y="78" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#581c87" text-anchor="middle">Repeated Addition:</text>
      <text x="455" y="100" font-family="system-ui, sans-serif" font-size="11" fill="#3b0764" text-anchor="middle">6 + 6 + 6 + 6 = 24</text>
    </svg>`,
    questions: [
      {
        category: "Array Model • Multiplication Sentence",
        q: "In the classroom party, chairs are placed in 5 rows with 8 chairs in each row. (a) Write the repeated addition fact. (b) Write the multiplication fact. (c) How many total chairs are there?",
        ans: "<strong>Solution:</strong><br>• Number of rows = 5<br>• Chairs in each row = 8<br><strong>(a) Repeated Addition:</strong> 8 + 8 + 8 + 8 + 8 = <strong>40</strong>.<br><strong>(b) Multiplication Fact:</strong> 5 × 8 = <strong>40</strong>.<br><strong>(c) Total Chairs:</strong> <strong>40 chairs</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct repeated addition statement", marks: "1.0 M" },
          { key: "Correct multiplication statement", marks: "1.0 M" },
          { key: "Correct total chair count", marks: "1.0 M" }
        ]
      },
      {
        category: "Multiplication Tables • Patterns",
        q: "Look at the 5 times table: 5, 10, 15, 20, 25, 30... (a) What pattern do you notice in the ones digit? (b) Can any number ending in 7 be in the 5 times table? Why or why not?",
        ans: "<strong>Analysis:</strong><br><strong>(a) Ones Digit Pattern:</strong> The ones digit alternates continuously between <strong>5 and 0</strong>.<br><strong>(b) Ending in 7:</strong> <strong>No</strong>, because every multiple of 5 must end in either 0 or 5. A number ending in 7 will always leave a remainder of 2 when divided by 5.",
        marks: 2,
        rubric: [
          { key: "Identification of alternating 5 and 0 pattern", marks: "1.0 M" },
          { key: "Correct justification regarding remainder 2", marks: "1.0 M" }
        ]
      },
      {
        category: "Unit Costing • Real-Life Math",
        q: "For a class party, the teacher bought: 6 packs of juice at ₹10 each, 4 packets of paper cups at ₹15 each, and 5 bags of popcorn at ₹20 each. Calculate the total expenditure.",
        ans: "<strong>Step-by-step Calculation:</strong><br>1. Cost of juice = 6 × ₹10 = ₹60<br>2. Cost of paper cups = 4 × ₹15 = ₹60<br>3. Cost of popcorn = 5 × ₹20 = ₹100<br>4. <strong>Total Expenditure</strong> = ₹60 + ₹60 + ₹100 = <strong>₹220</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct multiplication for each item type", marks: "1.5 M" },
          { key: "Correct summation of total bill (₹220)", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Party Gift Return Bags",
      text: "The class teacher prepares 25 return gift pouches for students. In each pouch, she places 3 crayons and 2 stickers.",
      question: "How many crayons and how many stickers will she need in total? What is the total count of all gift items?",
      answer: "1. Total crayons needed = 25 × 3 = 75 crayons.<br>2. Total stickers needed = 25 × 2 = 50 stickers.<br>3. <strong>Total gift items</strong> = 75 + 50 = <strong>125 items</strong> (or 25 × 5 = 125 items).",
      rubric: "1M crayons multiplication + 1M stickers multiplication + 1M total sum."
    }
  },
  {
    id: "mm11",
    num: 11,
    unit: "Unit 4: Multiplication, Measurement & Data",
    title: "Filling and Lifting",
    subtitle: "Capacity (Litres & Millilitres), Weight (Kilograms & Grams) & Comparison",
    concepts: [
      "Understanding capacity: Litre (L) for large liquids and Millilitre (mL) for small amounts.",
      "1 Litre = 1000 Millilitres (1 L = 1000 mL).",
      "Understanding weight: Kilogram (kg) for heavy items and Gram (g) for light items.",
      "1 Kilogram = 1000 Grams (1 kg = 1000 g).",
      "Using non-standard and standard balance scales to compare weights."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfeff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0e7490" text-anchor="middle">Standard Units of Capacity &amp; Weight</text>
      <!-- 1 Litre Bottle -->
      <rect x="70" y="45" width="40" height="70" rx="4" fill="#a5f3fc" stroke="#0891b2" stroke-width="1.5"/>
      <rect x="80" y="38" width="20" height="8" rx="2" fill="#0891b2"/>
      <text x="90" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0e7490" text-anchor="middle">1 L</text>
      <text x="90" y="132" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#155e75" text-anchor="middle">1 Litre</text>
      <text x="90" y="146" font-family="system-ui, sans-serif" font-size="9" fill="#0e7490" text-anchor="middle">= 1000 mL</text>
      <text x="180" y="85" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#0891b2" text-anchor="middle">=</text>
      <!-- 500 mL + 500 mL -->
      <rect x="220" y="60" width="30" height="55" rx="3" fill="#cffafe" stroke="#0891b2" stroke-width="1.2"/>
      <text x="235" y="92" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0e7490" text-anchor="middle">500</text>
      <text x="265" y="88" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0891b2" text-anchor="middle">+</text>
      <rect x="280" y="60" width="30" height="55" rx="3" fill="#cffafe" stroke="#0891b2" stroke-width="1.2"/>
      <text x="295" y="92" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0e7490" text-anchor="middle">500</text>
      <text x="265" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#155e75" text-anchor="middle">Two 500 mL Mugs</text>
      <!-- Weight Balance -->
      <line x1="390" y1="85" x2="510" y2="85" stroke="#334155" stroke-width="3"/>
      <polygon points="450,85 440,115 460,115" fill="#64748b"/>
      <rect x="400" y="60" width="30" height="25" fill="#fbcfe8" stroke="#db2777" stroke-width="1.5"/>
      <text x="415" y="77" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#9d174d" text-anchor="middle">1 kg</text>
      <circle cx="500" cy="72" r="12" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
      <text x="500" y="76" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#9a3412" text-anchor="middle">1 kg</text>
      <text x="450" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155" text-anchor="middle">1 kg Balance = 1000 g</text>
    </svg>`,
    questions: [
      {
        category: "Capacity Unit Selection • Real-World Items",
        q: "State whether you would measure the capacity of the following in 'Litres (L)' or 'Millilitres (mL)': (a) A medicine dropper, (b) Water in a swimming pool, (c) A cup of tea, (d) Petrol in a car tank.",
        ans: "<strong>Units:</strong><br>• <strong>(a) Medicine dropper:</strong> <strong>Millilitres (mL)</strong> (very small liquid volume)<br>• <strong>(b) Water in swimming pool:</strong> <strong>Litres (L)</strong> (huge liquid volume)<br>• <strong>(c) A cup of tea:</strong> <strong>Millilitres (mL)</strong> (approx 150-200 mL)<br>• <strong>(d) Petrol in a car tank:</strong> <strong>Litres (L)</strong> (approx 35-50 L).",
        marks: 2,
        rubric: [
          { key: "Correct unit for dropper and tea (mL)", marks: "1.0 M" },
          { key: "Correct unit for pool and car petrol (L)", marks: "1.0 M" }
        ]
      },
      {
        category: "Capacity Conversion & Arithmetic",
        q: "A bucket holds 10 litres of water. (a) How many 500 mL mugs of water are needed to fill this bucket completely? (b) How many 1-litre bottles can be filled from this bucket?",
        ans: "<strong>Solution:</strong><br><strong>(a) Mugs of 500 mL:</strong><br>• We know that 1 Litre = 2 mugs of 500 mL (500 mL + 500 mL = 1000 mL = 1 L).<br>• For 10 Litres = 10 × 2 = <strong>20 mugs</strong>.<br><br><strong>(b) 1-Litre bottles:</strong><br>• 10 Litres ÷ 1 Litre = <strong>10 bottles</strong>.",
        marks: 3,
        rubric: [
          { key: "Clear conversion statement (1 L = 2 × 500 mL)", marks: "1.5 M" },
          { key: "Correct answer for mugs (20) and bottles (10)", marks: "1.5 M" }
        ]
      },
      {
        category: "Weight Units & Balancing",
        q: "A vegetable seller has standard weights of 1 kg, 500 g, 200 g, and 100 g. How can she weigh: (a) 1 kg 700 g of potatoes? (b) 800 g of tomatoes using the least number of weights?",
        ans: "<strong>Combinations:</strong><br>• <strong>(a) 1 kg 700 g potatoes:</strong><br>1 kg + 500 g + 200 g = <strong>1 kg 700 g</strong> (3 weights).<br><br>• <strong>(b) 800 g tomatoes:</strong><br>500 g + 200 g + 100 g = <strong>800 g</strong> (3 weights).",
        marks: 3,
        rubric: [
          { key: "Correct weight combination for 1 kg 700 g", marks: "1.5 M" },
          { key: "Correct weight combination for 800 g", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Community Kitchen Lemonade Preparation",
      text: "To make lemonade for 50 people at a sports day, students use 8 litres of water, 1 litre of lemon juice, and 500 mL of sugar syrup.",
      question: "What is the total volume of lemonade prepared in millilitres? If each glass holds 200 mL, can they serve 45 glasses?",
      answer: "1. Convert all volumes to millilitres (mL):<br>• Water = 8 L = 8,000 mL<br>• Lemon juice = 1 L = 1,000 mL<br>• Sugar syrup = 500 mL<br>• <strong>Total volume</strong> = 8,000 + 1,000 + 500 = <strong>9,500 mL</strong>.<br>2. Volume needed for 45 glasses of 200 mL each = 45 × 200 mL = 9,000 mL.<br>3. Since 9,500 mL > 9,000 mL, <strong>yes, they can easily serve 45 glasses</strong> (with 500 mL left over).",
      rubric: "1.5M litre to millilitre conversion and summation + 1.5M capacity comparison."
    }
  },
  {
    id: "mm12",
    num: 12,
    unit: "Unit 4: Multiplication, Measurement & Data",
    title: "Give and Take",
    subtitle: "2-Step Word Problems, Flow of Money, Addition with Regrouping & Verification",
    concepts: [
      "Translating word problems into numerical addition and subtraction sentences.",
      "Checking addition by subtraction (inverse operation check).",
      "Handling word problems involving 'more than', 'less than', and 'difference'.",
      "Solving 2-step financial transaction problems."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#a16207" text-anchor="middle">Inverse Operations — Checking Addition with Subtraction</text>
      <!-- Forward Arrow -->
      <rect x="70" y="55" width="120" height="40" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="130" y="80" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#854d0e" text-anchor="middle">145 + 85 = 230</text>
      <path d="M210,75 L280,75" stroke="#ca8a04" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Check Arrow -->
      <rect x="300" y="55" width="200" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="400" y="80" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#15803d" text-anchor="middle">Check: 230 - 85 = 145 ✓</text>
      <text x="290" y="130" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#713f12" text-anchor="middle">Addition and Subtraction are inverse operations: Any sum can be verified by subtracting.</text>
    </svg>`,
    questions: [
      {
        category: "Inverse Operations • Checking Work",
        q: "Solve: 356 + 178. Then use subtraction to check whether your answer is correct.",
        ans: "<strong>Solution & Verification:</strong><br>1. <strong>Addition:</strong><br>&nbsp;&nbsp;356<br>+ 178<br>-------<br>&nbsp;&nbsp;<strong>534</strong> (6+8=14, 1 carry; 5+7+1=13, 1 carry; 3+1+1=5)<br><br>2. <strong>Verification via Subtraction:</strong><br>&nbsp;&nbsp;534<br>- 178<br>-------<br>&nbsp;&nbsp;<strong>356</strong><br>Since 534 - 178 = 356, the addition is <strong>100% verified correct</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct addition with carry (534)", marks: "1.5 M" },
          { key: "Correct inverse subtraction verification", marks: "1.5 M" }
        ]
      },
      {
        category: "2-Step Financial Word Problem",
        q: "Kiran had ₹500. She bought school books for ₹275 and stationery for ₹145. How much money did she spend altogether, and how much money was left with her?",
        ans: "<strong>Step-by-step Solution:</strong><br><strong>Step 1: Total money spent</strong><br>Cost of books = ₹275<br>Cost of stationery = ₹145<br>Total spent = ₹275 + ₹145 = <strong>₹420</strong>.<br><br><strong>Step 2: Money left</strong><br>Total money initially = ₹500<br>Total spent = ₹420<br>Money left = ₹500 - ₹420 = <strong>₹80</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct addition for total spending (₹420)", marks: "1.5 M" },
          { key: "Correct subtraction for remaining balance (₹80)", marks: "1.5 M" }
        ]
      },
      {
        category: "Number Puzzle • Magic Triangle",
        q: "Arrange the numbers 1, 2, 3, 4, 5, 6 along the three sides of a triangle such that the sum of the numbers along each side is 9.",
        ans: "<strong>Solution:</strong><br>Place the smaller numbers at the corners to keep side sums low:<br>• <strong>Corners:</strong> 1, 2, 3.<br>• <strong>Between 1 and 2:</strong> place 6 → 1 + 6 + 2 = <strong>9</strong>.<br>• <strong>Between 2 and 3:</strong> place 4 → 2 + 4 + 3 = <strong>9</strong>.<br>• <strong>Between 3 and 1:</strong> place 5 → 3 + 5 + 1 = <strong>9</strong>.<br>All three sides sum to exactly 9.",
        marks: 3,
        rubric: [
          { key: "Correct corner placement (1, 2, 3)", marks: "1.5 M" },
          { key: "Correct edge placements (6, 4, 5) ensuring sum = 9", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Children's Book Fair Stall",
      text: "At the school book fair, the storybook counter started with 450 books in the morning. They received a fresh delivery of 120 books at noon, and sold 380 books by evening.",
      question: "How many books were left at the storybook counter at the end of the day?",
      answer: "1. Books after morning delivery = 450 + 120 = 570 books.<br>2. Books sold = 380.<br>3. <strong>Books left at end of day</strong> = 570 - 380 = <strong>190 books</strong>.",
      rubric: "1.5M addition of delivered books + 1.5M subtraction of sold books."
    }
  },
  {
    id: "mm13",
    num: 13,
    unit: "Unit 4: Multiplication, Measurement & Data",
    title: "Time Goes On",
    subtitle: "Clocks, Reading Time (Hours & Minutes), AM/PM & Daily Activity Schedules",
    concepts: [
      "Understanding clock hands: hour hand (short) and minute hand (long).",
      "Reading time to the hour, half past (30 min), quarter past (15 min), and quarter to (45 min).",
      "Difference between AM (midnight to noon) and PM (noon to midnight).",
      "Calculating elapsed time between start and end of daily activities."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Analog Clock — Quarter Past, Half Past &amp; Quarter To</text>
      <!-- Clock 1: Half Past 4 (4:30) -->
      <circle cx="120" cy="85" r="35" fill="#ffffff" stroke="#334155" stroke-width="2"/>
      <circle cx="120" cy="85" r="3" fill="#0f172a"/>
      <line x1="120" y1="85" x2="135" y2="95" stroke="#dc2626" stroke-width="2.5"/><!-- Hour hand -->
      <line x1="120" y1="85" x2="120" y2="115" stroke="#2563eb" stroke-width="2"/><!-- Minute hand -->
      <text x="120" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">Half Past 4 (04:30)</text>
      <!-- Clock 2: Quarter Past 7 (7:15) -->
      <circle cx="290" cy="85" r="35" fill="#ffffff" stroke="#334155" stroke-width="2"/>
      <circle cx="290" cy="85" r="3" fill="#0f172a"/>
      <line x1="290" y1="85" x2="275" y2="92" stroke="#dc2626" stroke-width="2.5"/>
      <line x1="290" y1="85" x2="320" y2="85" stroke="#2563eb" stroke-width="2"/>
      <text x="290" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">Quarter Past 7 (07:15)</text>
      <!-- Clock 3: Quarter to 10 (9:45) -->
      <circle cx="460" cy="85" r="35" fill="#ffffff" stroke="#334155" stroke-width="2"/>
      <circle cx="460" cy="85" r="3" fill="#0f172a"/>
      <line x1="460" y1="85" x2="445" y2="75" stroke="#dc2626" stroke-width="2.5"/>
      <line x1="460" y1="85" x2="430" y2="85" stroke="#2563eb" stroke-width="2"/>
      <text x="460" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">Quarter to 10 (09:45)</text>
    </svg>`,
    questions: [
      {
        category: "Clock Reading • Quarter & Half Hours",
        q: "What time is shown when: (a) The hour hand is between 3 and 4, and the minute hand points to 6? (b) The hour hand is just past 8, and the minute hand points to 3? (c) The hour hand is near 12, and the minute hand points to 9?",
        ans: "<strong>Clock Readings:</strong><br>• <strong>(a)</strong> Minute hand at 6 = 30 minutes. Time = <strong>03:30 (Half past 3)</strong>.<br>• <strong>(b)</strong> Minute hand at 3 = 15 minutes. Time = <strong>08:15 (Quarter past 8)</strong>.<br>• <strong>(c)</strong> Minute hand at 9 = 45 minutes (15 minutes to 12). Time = <strong>11:45 (Quarter to 12)</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct reading for half past 3", marks: "1.0 M" },
          { key: "Correct reading for quarter past 8", marks: "1.0 M" },
          { key: "Correct reading for quarter to 12", marks: "1.0 M" }
        ]
      },
      {
        category: "Elapsed Time Calculation • Daily Routines",
        q: "Meera started doing her math homework at 05:15 PM and finished at 06:05 PM. How many minutes did she spend on her homework?",
        ans: "<strong>Calculation:</strong><br>• Start time = 05:15 PM<br>• End time = 06:05 PM<br>1. From 05:15 PM to 06:00 PM = 60 - 15 = 45 minutes.<br>2. From 06:00 PM to 06:05 PM = 5 minutes.<br>• <strong>Total duration</strong> = 45 + 5 = <strong>50 minutes</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct breakdown to the nearest hour", marks: "1.0 M" },
          { key: "Correct total elapsed time (50 minutes)", marks: "1.0 M" }
        ]
      },
      {
        category: "AM vs PM • Classification",
        q: "Write AM or PM for each activity: (a) Eating breakfast at 7:30 ___, (b) Playing in the park at 5:00 ___, (c) Sleeping at midnight 12:00 ___, (d) Lunch recess at school at 12:45 ___.",
        ans: "<strong>Answers:</strong><br>• (a) Breakfast at 7:30 <strong>AM</strong> (morning)<br>• (b) Playing in park at 5:00 <strong>PM</strong> (evening)<br>• (c) Sleeping at midnight 12:00 <strong>AM</strong> (start of day)<br>• (d) Lunch recess at 12:45 <strong>PM</strong> (afternoon).",
        marks: 2,
        rubric: [
          { key: "Correct AM/PM classification for all 4 events", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "School Annual Sports Day Schedule",
      text: "The 100m sprint race began at 10:20 AM and took 25 minutes. There was a 15-minute prize ceremony immediately following.",
      question: "At what time did the prize ceremony conclude? How many total minutes elapsed from the race start to the end of the ceremony?",
      answer: "1. Race start = 10:20 AM.<br>2. Race finish = 10:20 AM + 25 min = 10:45 AM.<br>3. Ceremony finish = 10:45 AM + 15 min = <strong>11:00 AM</strong>.<br>4. <strong>Total elapsed time</strong> = 25 + 15 = <strong>40 minutes</strong>.",
      rubric: "1.5M chronological addition of times + 1.5M total duration calculation."
    }
  },
  {
    id: "mm14",
    num: 14,
    unit: "Unit 4: Multiplication, Measurement & Data",
    title: "The Surajkund Fair",
    subtitle: "Pictographs, Bar Data, Money Transactions & Comprehensive Revision",
    concepts: [
      "Representing data using pictographs with a scale (e.g., 1 icon = 5 items).",
      "Reading and interpreting frequency bar graphs from a community craft fair.",
      "Calculating shopping totals and change with Indian currency notes and coins.",
      "Multi-concept review: combining addition, multiplication, and data skills."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">Surajkund Craft Fair — Stalls Visited Pictograph</text>
      <!-- Scale note -->
      <rect x="420" y="8" width="140" height="25" rx="4" fill="#ffedd5" stroke="#ea580c" stroke-width="1"/>
      <text x="490" y="24" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#c2410c" text-anchor="middle">Scale: 🏺 = 5 Pots</text>
      <!-- Row 1: Clay Pots -->
      <text x="50" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">Clay Pots:</text>
      <text x="140" y="55" font-size="16">🏺 🏺 🏺 🏺</text>
      <text x="250" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#9a3412">4 × 5 = 20 Pots</text>
      <!-- Row 2: Wooden Toys -->
      <text x="50" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">Wooden Toys:</text>
      <text x="140" y="85" font-size="16">🏺 🏺 🏺 🏺 🏺 🏺</text>
      <text x="290" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#9a3412">6 × 5 = 30 Toys</text>
      <!-- Row 3: Handloom Bags -->
      <text x="50" y="115" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">Handloom Bags:</text>
      <text x="140" y="115" font-size="16">🏺 🏺 🏺</text>
      <text x="220" y="115" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#9a3412">3 × 5 = 15 Bags</text>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#c2410c" text-anchor="middle">Total items sold = 20 + 30 + 15 = 65 Craft Items</text>
    </svg>`,
    questions: [
      {
        category: "Pictograph Interpretation • Scaled Data",
        q: "Look at the pictograph above where 1 symbol represents 5 craft items. (a) How many wooden toys were sold? (b) How many more wooden toys were sold than handloom bags? (c) What was the total number of items sold across all three stalls?",
        ans: "<strong>Analysis using Scale (1 symbol = 5 items):</strong><br>• <strong>(a) Wooden toys:</strong> 6 symbols × 5 = <strong>30 wooden toys</strong>.<br>• <strong>(b) Handloom bags:</strong> 3 symbols × 5 = 15 bags.<br>Difference = 30 - 15 = <strong>15 more wooden toys</strong>.<br>• <strong>(c) Total craft items:</strong> (4 + 6 + 3) symbols = 13 symbols × 5 = <strong>65 items</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct wooden toy count (30)", marks: "1.0 M" },
          { key: "Correct difference calculation (15)", marks: "1.0 M" },
          { key: "Correct total items calculation (65)", marks: "1.0 M" }
        ]
      },
      {
        category: "Shopping Bill & Money Exchange",
        q: "At the fair, Priya bought 2 wooden whistles at ₹25 each, 1 embroidered purse for ₹120, and 3 handmade bookmarks at ₹15 each. (a) What was her total bill? (b) If she paid with a ₹500 note, how much change did she receive?",
        ans: "<strong>Step-by-step Solution:</strong><br><strong>(a) Bill Calculation:</strong><br>• 2 whistles = 2 × ₹25 = ₹50<br>• 1 purse = ₹120<br>• 3 bookmarks = 3 × ₹15 = ₹45<br>• Total bill = ₹50 + ₹120 + ₹45 = <strong>₹215</strong>.<br><br><strong>(b) Change:</strong><br>• Amount given = ₹500<br>• Change received = ₹500 - ₹215 = <strong>₹285</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct itemised multiplication and sum (₹215)", marks: "1.5 M" },
          { key: "Correct subtraction from ₹500 note (₹285)", marks: "1.5 M" }
        ]
      },
      {
        category: "Bar Graph Reading • Ticket Sales",
        q: "On Saturday, 350 tickets were sold for the puppet show and 425 tickets for the magic show. On Sunday, 480 tickets were sold for the puppet show and 390 for the magic show. Which show had higher total weekend sales and by how many tickets?",
        ans: "<strong>Calculations:</strong><br>1. <strong>Puppet Show Total:</strong> 350 (Sat) + 480 (Sun) = <strong>830 tickets</strong>.<br>2. <strong>Magic Show Total:</strong> 425 (Sat) + 390 (Sun) = <strong>815 tickets</strong>.<br>3. <strong>Comparison:</strong> 830 > 815. The <strong>Puppet Show</strong> had higher sales.<br>4. <strong>Difference:</strong> 830 - 815 = <strong>15 tickets</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct weekend totals for puppet (830) and magic (815)", marks: "1.5 M" },
          { key: "Correct comparison and difference (15 tickets)", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Handicrafts Stall Revenue Summary",
      text: "A pottery artisan brought 80 clay diyas to the fair. He sold 55 diyas on Day 1 for ₹10 each. On Day 2, he reduced the price to ₹8 each and sold all remaining diyas.",
      question: "How many diyas were sold on Day 2? What was the total revenue earned by the artisan from selling all 80 diyas?",
      answer: "1. Diyas sold on Day 2 = Total - Day 1 = 80 - 55 = <strong>25 diyas</strong>.<br>2. Day 1 revenue = 55 × ₹10 = ₹550.<br>3. Day 2 revenue = 25 × ₹8 = ₹200.<br>4. <strong>Total revenue</strong> = ₹550 + ₹200 = <strong>₹750</strong>.",
      rubric: "1M Day 2 count + 1M Day 1 & Day 2 revenues + 1M total revenue sum."
    }
  }
];

module.exports = { mathsMelaChapters };
