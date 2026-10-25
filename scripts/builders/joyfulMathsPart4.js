// scripts/builders/joyfulMathsPart4.js
// Chapters 9, 10, 11 of Joyful Mathematics (Class 2 NCERT)

const joyfulMathsPart4 = [
  {
    id: "jm9", num: 9, unit: "Unit 5: Time, Money & Data",
    title: "Which Season is It?",
    subtitle: "Days of the Week, 12 Months of the Year, Clock Hours & Seasonal Cycles",
    concepts: [
      "Naming and sequencing the 7 days of the week (Monday to Sunday).",
      "Knowing the 12 months in a solar year and months with 30, 31, or 28 days.",
      "Reading whole-hour clock times (e.g. 3:00, 7:00) and understanding daily routines.",
      "Connecting weather patterns, clothing, and seasonal foods to Indian seasons."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fefce8" rx="10"/><circle cx="80" cy="60" r="32" fill="#ffffff" stroke="#ca8a04" stroke-width="4"/><line x1="80" y1="60" x2="80" y2="38" stroke="#0f172a" stroke-width="3"/><line x1="80" y1="60" x2="98" y2="60" stroke="#0f172a" stroke-width="2"/><circle cx="200" cy="60" r="26" fill="#fef08a"/><path d="M 280,75 Q 310,35 340,75" fill="none" stroke="#0284c7" stroke-width="6"/><circle cx="420" cy="60" r="24" fill="#93c5fd"/><text x="250" y="110" font-family="sans-serif" font-size="11" font-weight="700" fill="#713f12" text-anchor="middle">Clock at 3:00 • Summer Sun • Monsoon Rain • Winter Cold</text></svg>`,
    cbq: {
      title: "School Annual Sports Week Schedule",
      text: "The school sports week starts on Monday, October 12, and runs for 5 continuous school days.",
      question: "On which day of the week will the sports competition conclude? If Saturday and Sunday are holidays, how many total days off do students get that weekend?",
      answer: "1. Day 1 is Monday. Day 2 is Tuesday. Day 3 is Wednesday. Day 4 is Thursday. Day 5 is Friday. The competition concludes on <strong>Friday, October 16</strong>.<br>2. Saturday + Sunday = <strong>2 weekend days off</strong>.",
      rubric: "1.5 M for concluding on Friday + 1.5 M for 2 weekend holidays"
    },
    questions: [
      {
        category: "Days of the Week Sequence",
        q: "Name the 7 days of the week in chronological order starting from Monday.",
        ans: "<strong>Answer:</strong><br>1. <strong>Monday</strong><br>2. <strong>Tuesday</strong><br>3. <strong>Wednesday</strong><br>4. <strong>Thursday</strong><br>5. <strong>Friday</strong><br>6. <strong>Saturday</strong><br>7. <strong>Sunday</strong>.",
        marks: 2,
        rubric: [{ key: "All 7 days in correct order", marks: "2 M" }]
      },
      {
        category: "Days Before and After",
        q: "Answer the following:<br>(a) Which day comes just after Friday?<br>(b) Which day comes just before Tuesday?<br>(c) Which day falls between Wednesday and Friday?",
        ans: "<strong>Answers:</strong><br>(a) Just after Friday is <strong>Saturday</strong>.<br>(b) Just before Tuesday is <strong>Monday</strong>.<br>(c) Between Wednesday and Friday is <strong>Thursday</strong>.",
        marks: 3,
        rubric: [{ key: "All 3 correct (1 M each)", marks: "3 M" }]
      },
      {
        category: "Months of the Year",
        q: "How many months are there in a calendar year? Which is the first month and which is the last month?",
        ans: "<strong>Answer:</strong><br>• There are <strong>12 months</strong> in a calendar year.<br>• The first month is <strong>January</strong>.<br>• The last month is <strong>December</strong>.",
        marks: 2,
        rubric: [{ key: "12 months named", marks: "1 M" }, { key: "January and December identified", marks: "1 M" }]
      },
      {
        category: "Shortest Month",
        q: "Which month of the year has the fewest number of days? How many days does it usually have?",
        ans: "<strong>Answer:</strong><br>• <strong>February</strong> has the fewest days.<br>• It usually has <strong>28 days</strong> (and 29 days in a leap year).",
        marks: 2,
        rubric: [{ key: "February identified", marks: "1 M" }, { key: "28 days (29 in leap year)", marks: "1 M" }]
      },
      {
        category: "Months with 31 Days",
        q: "Name 4 months of the year that have exactly 31 days.",
        ans: "<strong>Answer:</strong><br>Any four of the following:<br>1. <strong>January</strong><br>2. <strong>March</strong><br>3. <strong>May</strong><br>4. <strong>July</strong><br>*(Also: August, October, December)*.",
        marks: 2,
        rubric: [{ key: "Four valid 31-day months named", marks: "2 M" }]
      },
      {
        category: "Months with 30 Days",
        q: "Name the 4 months that have exactly 30 days.",
        ans: "<strong>Answer:</strong><br>The four 30-day months are:<br>1. <strong>April</strong><br>2. <strong>June</strong><br>3. <strong>September</strong><br>4. <strong>November</strong>.",
        marks: 2,
        rubric: [{ key: "All 4 thirty-day months named correctly", marks: "2 M" }]
      },
      {
        category: "Reading Clock Hours",
        q: "On a wall clock, the short hour hand points to 4 and the long minute hand points straight up to 12. What time is it?",
        ans: "<strong>Answer:</strong><br>• Short hand at 4 = Hour 4<br>• Long hand at 12 = 00 minutes<br>• The time is <strong>4:00 o'clock (4 o'clock)</strong>.",
        marks: 2,
        rubric: [{ key: "Hour and minute hand identified", marks: "1 M" }, { key: "Time: 4:00 o'clock", marks: "1 M" }]
      },
      {
        category: "Clock Hands at School Opening",
        q: "If your school morning assembly begins at 8 o'clock in the morning, where should the short hand and long hand be on the clock face?",
        ans: "<strong>Answer:</strong><br>• The short hour hand should point to <strong>8</strong>.<br>• The long minute hand should point to <strong>12</strong>.",
        marks: 2,
        rubric: [{ key: "Short hand at 8", marks: "1 M" }, { key: "Long hand at 12", marks: "1 M" }]
      },
      {
        category: "Seasons and Clothing",
        q: "Match each season with the clothing item we use:<br>(1) Winter — (A) Cotton T-shirt & shorts<br>(2) Monsoon — (B) Woolen muffler and sweater<br>(3) Summer — (C) Raincoat and gumboots",
        ans: "<strong>Correct Matching:</strong><br>1. Winter ➔ <strong>(B) Woolen muffler and sweater</strong><br>2. Monsoon ➔ <strong>(C) Raincoat and gumboots</strong><br>3. Summer ➔ <strong>(A) Cotton T-shirt & shorts</strong>.",
        marks: 3,
        rubric: [{ key: "All 3 matched correctly (1 M each)", marks: "3 M" }]
      },
      {
        category: "Seasonal Fruits",
        q: "In which season do we enjoy juicy sweet mangoes and chilled watermelon in India?",
        ans: "<strong>Answer:</strong><br>We enjoy mangoes and watermelons during the <strong>Summer season</strong> (April, May, June).",
        marks: 1,
        rubric: [{ key: "Summer season identified", marks: "1 M" }]
      },
      {
        category: "National Festivals and Months",
        q: "In which months do we celebrate:<br>(a) Independence Day (15th August)?<br>(b) Republic Day (26th January)?<br>(c) Gandhi Jayanti (2nd October)?",
        ans: "<strong>Answers:</strong><br>(a) Independence Day: <strong>August</strong><br>(b) Republic Day: <strong>January</strong><br>(c) Gandhi Jayanti: <strong>October</strong>.",
        marks: 3,
        rubric: [{ key: "All 3 national festival months correct (1 M each)", marks: "3 M" }]
      },
      {
        category: "Daily Routine Sequencing",
        q: "Put these daily events in chronological order from morning to night:<br>[ Go to sleep, Wake up from bed, Eat dinner, Attend school, Play in the evening ].",
        ans: "<strong>Correct Chronological Order:</strong><br>1. <strong>Wake up from bed</strong> (Morning)<br>2. <strong>Attend school</strong> (Morning to Afternoon)<br>3. <strong>Play in the evening</strong> (Evening)<br>4. <strong>Eat dinner</strong> (Night)<br>5. <strong>Go to sleep</strong> (Bedtime).",
        marks: 2,
        rubric: [{ key: "Proper logical sequence", marks: "2 M" }]
      },
      {
        category: "Calendar Math",
        q: "If today is Tuesday, October 6, what day of the week will it be exactly one week later (October 13)?",
        ans: "<strong>Answer:</strong><br>• A complete cycle of days repeats every 7 days.<br>• Since 6 + 7 = 13, it will be <strong>Tuesday</strong> again.",
        marks: 2,
        rubric: [{ key: "7-day cycle explained", marks: "1 M" }, { key: "Answer: Tuesday", marks: "1 M" }]
      },
      {
        category: "True or False • Time and Calendar",
        q: "Write True or False:<br>(a) There are 24 hours in one full day and night.<br>(b) Sunday is the day after Monday.<br>(c) July and August both have 31 days.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong> (12 hours day + 12 hours night = 24 hours).<br>(b) <strong>False</strong> (Sunday is the day *before* Monday).<br>(c) <strong>True</strong> (July and August are consecutive 31-day months).",
        marks: 3,
        rubric: [{ key: "All 3 correct (1 M each)", marks: "3 M" }]
      },
      {
        category: "Time Riddle",
        q: "I have two hands that always chase each other, but no feet to walk. I tell you when to wake up and when to play. What am I?",
        ans: "<strong>Answer:</strong><br>I am a <strong>Clock</strong> (or Watch).",
        marks: 1,
        rubric: [{ key: "Clock identified", marks: "1 M" }]
      },
      {
        category: "Let Us Think • Sun and Seasons",
        q: "During which season do the days feel short and the nights feel very long and chilly?",
        ans: "<strong>Answer:</strong><br>During the <strong>Winter season</strong>, the sun sets early, making days shorter and nights longer.",
        marks: 1,
        rubric: [{ key: "Winter season identified", marks: "1 M" }]
      }
    ]
  },
  {
    id: "jm10", num: 10, unit: "Unit 5: Time, Money & Data",
    title: "Fun at the Fair",
    subtitle: "Indian Coins & Currency Notes, Value Combinations, Purchasing & Change",
    concepts: [
      "Identifying Indian coins (₹1, ₹2, ₹5, ₹10) and currency notes (₹10, ₹20, ₹50, ₹100).",
      "Making specific amounts using different coin and note combinations.",
      "Solving simple addition and subtraction word problems for buying tickets, toys, and snacks."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="80" cy="60" r="22" fill="#cbd5e1" stroke="#475569" stroke-width="3"/><text x="80" y="66" font-family="sans-serif" font-size="14" font-weight="900" fill="#0f172a" text-anchor="middle">₹5</text><circle cx="140" cy="60" r="24" fill="#fbbf24" stroke="#d97706" stroke-width="3"/><text x="140" y="66" font-family="sans-serif" font-size="14" font-weight="900" fill="#78350f" text-anchor="middle">₹10</text><rect x="200" y="38" width="70" height="44" fill="#fed7aa" stroke="#ea580c" stroke-width="2" rx="4"/><text x="235" y="65" font-family="sans-serif" font-size="14" font-weight="900" fill="#9a3412" text-anchor="middle">₹20</text><rect x="300" y="38" width="80" height="44" fill="#bae6fd" stroke="#0284c7" stroke-width="2" rx="4"/><text x="340" y="65" font-family="sans-serif" font-size="14" font-weight="900" fill="#075985" text-anchor="middle">₹50</text><text x="250" y="110" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">Currency Notes &amp; Coins for Village Fair Shopping</text></svg>`,
    cbq: {
      title: "Village Fair Ride & Snack Budget",
      text: "Karan carries a single ₹50 note to the fair. He rides the giant Ferris wheel for ₹20 and buys an ice-cream cup for ₹15.",
      question: "How much total money did Karan spend? How much change does the shopkeeper return to him?",
      answer: "1. Total spent = ₹20 (Ferris wheel) + ₹15 (Ice-cream) = ₹35.<br>2. Change returned = ₹50 - ₹35 = ₹15.<br>3. The shopkeeper can give him one ₹10 note and one ₹5 coin.",
      rubric: "1.5 M for total spent (₹35) + 1.5 M for change calculation (₹15)"
    },
    questions: [
      {
        category: "Coin Identification and Values",
        q: "Name the 4 common metal coins currently used in India and write their values with the ₹ symbol.",
        ans: "<strong>Answer:</strong><br>1. <strong>₹1 coin</strong> (One Rupee)<br>2. <strong>₹2 coin</strong> (Two Rupees)<br>3. <strong>₹5 coin</strong> (Five Rupees)<br>4. <strong>₹10 coin</strong> (Ten Rupees).",
        marks: 2,
        rubric: [{ key: "All 4 coins named with ₹ symbol", marks: "2 M" }]
      },
      {
        category: "Making ₹5 with Smaller Coins",
        q: "Show two different ways to make ₹5 using smaller coins.",
        ans: "<strong>Ways to make ₹5:</strong><br>• <strong>Way 1:</strong> Two ₹2 coins + One ₹1 coin (2 + 2 + 1 = ₹5).<br>• <strong>Way 2:</strong> Five ₹1 coins (1 + 1 + 1 + 1 + 1 = ₹5).",
        marks: 2,
        rubric: [{ key: "Way 1 correct", marks: "1 M" }, { key: "Way 2 correct", marks: "1 M" }]
      },
      {
        category: "Making ₹10 with Coins",
        q: "How many ₹2 coins are needed to make ₹10? How many ₹5 coins are needed to make ₹10?",
        ans: "<strong>Solution:</strong><br>• For ₹2 coins: 10 ÷ 2 = <strong>5 coins of ₹2</strong> (2, 4, 6, 8, 10).<br>• For ₹5 coins: 10 ÷ 5 = <strong>2 coins of ₹5</strong> (5 + 5 = 10).",
        marks: 2,
        rubric: [{ key: "Five ₹2 coins", marks: "1 M" }, { key: "Two ₹5 coins", marks: "1 M" }]
      },
      {
        category: "Making ₹20 with Notes",
        q: "Which two currency notes can you combine to make exactly ₹20?",
        ans: "<strong>Answer:</strong><br>You can combine <strong>two ₹10 notes</strong> (₹10 + ₹10 = ₹20).",
        marks: 1,
        rubric: [{ key: "Two ₹10 notes identified", marks: "1 M" }]
      },
      {
        category: "Buying at the Stall",
        q: "At the toy stall, a colorful pinwheel costs ₹8. You have only ₹2 coins in your pocket. How many ₹2 coins must you hand over?",
        ans: "<strong>Solution:</strong><br>• Cost of pinwheel = ₹8<br>• Value per coin = ₹2<br>• 8 ÷ 2 = <strong>4 coins of ₹2</strong> (2 + 2 + 2 + 2 = ₹8).",
        marks: 2,
        rubric: [{ key: "Division/addition setup", marks: "1 M" }, { key: "Answer: 4 coins of ₹2", marks: "1 M" }]
      },
      {
        category: "Total Cost Calculation",
        q: "Rani buys a balloon for ₹6 and a whistle for ₹9. How much money must she pay in all?",
        ans: "<strong>Calculation:</strong><br>• Cost of balloon = ₹6<br>• Cost of whistle = ₹9<br>• Total payment = 6 + 9 = <strong>₹15</strong>.",
        marks: 2,
        rubric: [{ key: "6 + 9 addition", marks: "1 M" }, { key: "Answer: ₹15", marks: "1 M" }]
      },
      {
        category: "Calculating Change Return",
        q: "Amit buys a box of crayons costing ₹12. He hands a ₹20 note to the shopkeeper. How much change should he receive back?",
        ans: "<strong>Calculation:</strong><br>• Amount given = ₹20<br>• Cost of crayons = ₹12<br>• Change back = 20 - 12 = <strong>₹8</strong>.",
        marks: 2,
        rubric: [{ key: "Subtraction 20 - 12", marks: "1 M" }, { key: "Answer: ₹8", marks: "1 M" }]
      },
      {
        category: "Comparing Money Amounts",
        q: "Who has more money:<br>• Tarun has three ₹10 notes.<br>• Priya has one ₹50 note.<br>Calculate and compare.",
        ans: "<strong>Calculation:</strong><br>• Tarun's money = 3 × 10 = <strong>₹30</strong>.<br>• Priya's money = 1 × 50 = <strong>₹50</strong>.<br>• Since ₹50 > ₹30, <strong>Priya has more money</strong> (by ₹20).",
        marks: 3,
        rubric: [{ key: "Tarun has ₹30", marks: "1 M" }, { key: "Priya has ₹50", marks: "1 M" }, { key: "Priya has more concluded", marks: "1 M" }]
      },
      {
        category: "Piggy Bank Counting",
        q: "Sneha breaks her piggy bank and finds: four ₹5 coins and three ₹10 coins. How much total money did she save?",
        ans: "<strong>Calculation:</strong><br>• Value of four ₹5 coins = 4 × 5 = <strong>₹20</strong>.<br>• Value of three ₹10 coins = 3 × 10 = <strong>₹30</strong>.<br>• Total savings = 20 + 30 = <strong>₹50</strong>.",
        marks: 3,
        rubric: [{ key: "₹5 coins sum = ₹20", marks: "1 M" }, { key: "₹10 coins sum = ₹30", marks: "1 M" }, { key: "Total = ₹50", marks: "1 M" }]
      },
      {
        category: "Making ₹50 with Multiple Notes",
        q: "How many ₹10 notes make ₹50? Can you make ₹50 using two ₹20 notes and one ₹10 note?",
        ans: "<strong>Answer:</strong><br>1. 50 ÷ 10 = <strong>5 notes of ₹10</strong> make ₹50.<br>2. <strong>Yes</strong>: ₹20 + ₹20 + ₹10 = ₹40 + ₹10 = <strong>₹50</strong>.",
        marks: 2,
        rubric: [{ key: "Five ₹10 notes", marks: "1 M" }, { key: "Yes, 20+20+10 = 50", marks: "1 M" }]
      },
      {
        category: "Insufficient Money Word Problem",
        q: "A wooden toy horse costs ₹28. Rohan has only two ₹10 notes and one ₹5 coin in his pocket. Does he have enough money? If not, how much more does he need?",
        ans: "<strong>Solution:</strong><br>1. Rohan's money = (2 × 10) + 5 = 20 + 5 = <strong>₹25</strong>.<br>2. Cost of toy horse = ₹28.<br>3. <strong>No</strong>, Rohan does not have enough money (₹25 < ₹28).<br>4. He needs 28 - 25 = <strong>₹3 more</strong>.",
        marks: 3,
        rubric: [{ key: "Rohan has ₹25", marks: "1 M" }, { key: "No, not enough", marks: "1 M" }, { key: "Short by ₹3", marks: "1 M" }]
      },
      {
        category: "Price List Multi-Item Math",
        q: "Look at the fair price list:<br>• Popcorn packet: ₹10<br>• Fruit juice: ₹15<br>• Sweet jalebi plate: ₹20<br>How much does it cost to buy 1 popcorn and 1 sweet jalebi plate?",
        ans: "<strong>Calculation:</strong><br>• Popcorn = ₹10<br>• Jalebi = ₹20<br>• Total cost = 10 + 20 = <strong>₹30</strong>.",
        marks: 2,
        rubric: [{ key: "Addition 10 + 20", marks: "1 M" }, { key: "Answer: ₹30", marks: "1 M" }]
      },
      {
        category: "Money Symbol Usage",
        q: "What is the official symbol for the Indian Rupee? Write the amounts 'Forty rupees' and 'Seventy-five rupees' using the official symbol.",
        ans: "<strong>Answer:</strong><br>• The official symbol is <strong>₹</strong>.<br>• Forty rupees = <strong>₹40</strong><br>• Seventy-five rupees = <strong>₹75</strong>.",
        marks: 2,
        rubric: [{ key: "₹ symbol shown", marks: "1 M" }, { key: "₹40 and ₹75 formatted correctly", marks: "1 M" }]
      },
      {
        category: "True or False • Currency Facts",
        q: "Write True or False:<br>(a) Ten ₹1 coins have the exact same value as one ₹10 coin.<br>(b) A ₹50 note has more purchasing power than two ₹20 notes.<br>(c) A ₹10 coin is made of plastic.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong> (Both equal ₹10).<br>(b) <strong>True</strong> (₹50 is more than ₹40).<br>(c) <strong>False</strong> (Indian ₹10 coins are bimetallic metals, not plastic).",
        marks: 3,
        rubric: [{ key: "All 3 statements correct (1 M each)", marks: "3 M" }]
      },
      {
        category: "Money Riddle",
        q: "I am a coin. If you have two of me, you can buy a 10-rupee chocolate without any change. What coin am I?",
        ans: "<strong>Answer:</strong><br>You are a <strong>₹5 coin</strong> (because 5 + 5 = 10).",
        marks: 1,
        rubric: [{ key: "₹5 coin identified", marks: "1 M" }]
      },
      {
        category: "Exact Coins Selection",
        q: "You need to pay exactly ₹17 for a notebook. You have: one ₹10 note, two ₹5 coins, three ₹2 coins, and five ₹1 coins. Write one combination that makes exactly ₹17.",
        ans: "<strong>Answer:</strong><br>One simple combination:<br>• One ₹10 note (₹10)<br>• One ₹5 coin (₹5)<br>• One ₹2 coin (₹2)<br>• Total = 10 + 5 + 2 = <strong>₹17</strong>.",
        marks: 2,
        rubric: [{ key: "Valid combination shown (10+5+2)", marks: "2 M" }]
      },
      {
        category: "Mental Math • Adding Tens",
        q: "Calculate quickly:<br>(a) ₹20 + ₹30 = ______<br>(b) ₹50 + ₹20 = ______<br>(c) ₹100 - ₹50 = ______",
        ans: "<strong>Answers:</strong><br>(a) ₹20 + ₹30 = <strong>₹50</strong><br>(b) ₹50 + ₹20 = <strong>₹70</strong><br>(c) ₹100 - ₹50 = <strong>₹50</strong>.",
        marks: 3,
        rubric: [{ key: "All 3 mental math sums correct (1 M each)", marks: "3 M" }]
      },
      {
        category: "Creative Fair Budgeting",
        q: "You have ₹25 to spend on games at the fair. The ring toss costs ₹10, balloon shooting costs ₹10, and boat ride costs ₹15. Can you play ring toss and boat ride? Explain.",
        ans: "<strong>Calculation:</strong><br>• Ring toss (₹10) + Boat ride (₹15) = 10 + 15 = <strong>₹25</strong>.<br>• <strong>Yes</strong>, you can play both because the total cost exactly equals your ₹25 budget.",
        marks: 2,
        rubric: [{ key: "Sum = ₹25 calculated", marks: "1 M" }, { key: "Yes, exactly within budget explained", marks: "1 M" }]
      }
    ]
  },
  {
    id: "jm11", num: 11, unit: "Unit 5: Time, Money & Data",
    title: "Data Handling",
    subtitle: "Categorizing, Tally Charts, Letter Counting & Pictograph Analysis",
    concepts: [
      "Collecting data through counting and sorting into distinct categories.",
      "Reading simple pictographs and block charts where 1 symbol represents 1 item.",
      "Analyzing name lengths and most/least frequent elements in everyday surveys."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f8fafc" rx="10"/><rect x="60" y="30" width="30" height="60" fill="#3b82f6" rx="4"/><rect x="110" y="50" width="30" height="40" fill="#10b981" rx="4"/><rect x="160" y="20" width="30" height="70" fill="#f59e0b" rx="4"/><rect x="210" y="60" width="30" height="30" fill="#ef4444" rx="4"/><text x="75" y="105" font-family="sans-serif" font-size="10" font-weight="700" fill="#64748b" text-anchor="middle">Car(6)</text><text x="125" y="105" font-family="sans-serif" font-size="10" font-weight="700" fill="#64748b" text-anchor="middle">Bike(4)</text><text x="175" y="105" font-family="sans-serif" font-size="10" font-weight="700" fill="#64748b" text-anchor="middle">Cycle(7)</text><text x="225" y="105" font-family="sans-serif" font-size="10" font-weight="700" fill="#64748b" text-anchor="middle">Bus(3)</text><text x="360" y="65" font-family="sans-serif" font-size="13" font-weight="800" fill="#0f172a">Vehicle Tally Survey</text></svg>`,
    cbq: {
      title: "Class 2 Favorite Fruit Survey",
      text: "The class teacher surveys all 30 students about their single favorite fruit. The findings are: 12 students like Mango, 8 students like Apple, 6 students like Banana, and 4 students like Orange.",
      question: "Which fruit is the most popular in the class? How many more students prefer Mango over Banana?",
      answer: "1. <strong>Mango</strong> is the most popular fruit with 12 votes (highest count).<br>2. Difference between Mango and Banana = 12 - 6 = <strong>6 more students</strong> prefer Mango.",
      rubric: "1.5 M for Mango as most popular + 1.5 M for difference (6)"
    },
    questions: [
      {
        category: "Counting Categories in a Picture",
        q: "In a park picture, children count the animals:<br>• Dogs: 4<br>• Cats: 3<br>• Birds on trees: 8<br>• Squirrels: 5<br>How many total animals were observed in the park?",
        ans: "<strong>Calculation:</strong><br>• Dogs = 4<br>• Cats = 3<br>• Birds = 8<br>• Squirrels = 5<br>• Total = 4 + 3 + 8 + 5 = <strong>20 animals</strong>.",
        marks: 2,
        rubric: [{ key: "Addition sentence (4 + 3 + 8 + 5)", marks: "1 M" }, { key: "Total = 20 animals", marks: "1 M" }]
      },
      {
        category: "Analyzing Name Letter Lengths",
        q: "Count the number of letters in each child's name:<br>(a) AMAN<br>(b) PRIYANKA<br>(c) DEV<br>(d) MEENAKSHI<br>Which name is the longest and which is the shortest?",
        ans: "<strong>Letter Counts:</strong><br>(a) AMAN = 4 letters<br>(b) PRIYANKA = 8 letters<br>(c) DEV = 3 letters<br>(d) MEENAKSHI = 9 letters.<br>• <strong>Longest name:</strong> MEENAKSHI (9 letters).<br>• <strong>Shortest name:</strong> DEV (3 letters).",
        marks: 3,
        rubric: [{ key: "All letter counts correct", marks: "1 M" }, { key: "Longest: MEENAKSHI", marks: "1 M" }, { key: "Shortest: DEV", marks: "1 M" }]
      },
      {
        category: "Letter Frequency in Names",
        q: "In the names: RAM, AMAN, SARITA, TARUN, count how many times the letter 'A' appears in total.",
        ans: "<strong>Count of letter 'A':</strong><br>• RAM ➔ 1 'A'<br>• AMAN ➔ 2 'A's<br>• SARITA ➔ 2 'A's<br>• TARUN ➔ 1 'A'<br>• Total times letter 'A' appears = 1 + 2 + 2 + 1 = <strong>6 times</strong>.",
        marks: 2,
        rubric: [{ key: "Letter counts per name", marks: "1 M" }, { key: "Total: 6 times", marks: "1 M" }]
      },
      {
        category: "Reading a Pictograph",
        q: "In a pictograph where 1 📚 symbol = 1 library book read:<br>• Rohit: 📚📚📚📚 (4)<br>• Simran: 📚📚📚📚📚📚 (6)<br>• Tanu: 📚📚 (2)<br>(a) Who read the most books?<br>(b) How many books did all three read altogether?",
        ans: "<strong>Answers:</strong><br>(a) <strong>Simran</strong> read the most books (6 books).<br>(b) Total books = 4 + 6 + 2 = <strong>12 books</strong>.",
        marks: 2,
        rubric: [{ key: "Simran read most", marks: "1 M" }, { key: "Total = 12 books", marks: "1 M" }]
      },
      {
        category: "Comparing Data Categories",
        q: "Using the pictograph above (Rohit 4, Simran 6, Tanu 2), how many more books did Simran read than Tanu?",
        ans: "<strong>Calculation:</strong><br>• Simran's books = 6<br>• Tanu's books = 2<br>• Difference = 6 - 2 = <strong>4 more books</strong>.",
        marks: 2,
        rubric: [{ key: "Subtraction 6 - 2", marks: "1 M" }, { key: "Answer: 4 more books", marks: "1 M" }]
      },
      {
        category: "Shoe Size Survey",
        q: "A survey of 25 students' shoe sizes shows:<br>• Size 1: 5 students<br>• Size 2: 12 students<br>• Size 3: 8 students<br>(a) Which shoe size is the most common?<br>(b) Which shoe size is the least common?",
        ans: "<strong>Answer:</strong><br>(a) <strong>Size 2</strong> is the most common shoe size (12 students).<br>(b) <strong>Size 1</strong> is the least common shoe size (5 students).",
        marks: 2,
        rubric: [{ key: "Most common: Size 2", marks: "1 M" }, { key: "Least common: Size 1", marks: "1 M" }]
      },
      {
        category: "Vehicle Traffic Tally",
        q: "During 15 minutes of watching from the gate, children recorded vehicles passing:<br>• Bicycles: 10<br>• Motorbikes: 7<br>• Cars: 5<br>• Buses: 2<br>(a) Which vehicle passed the greatest number of times?<br>(b) Did more cars pass or more motorbikes?",
        ans: "<strong>Answer:</strong><br>(a) <strong>Bicycles</strong> passed the greatest number of times (10).<br>(b) <strong>More motorbikes passed</strong> (7 motorbikes > 5 cars).",
        marks: 2,
        rubric: [{ key: "Bicycles greatest count", marks: "1 M" }, { key: "More motorbikes than cars", marks: "1 M" }]
      },
      {
        category: "Monthly Weather Chart",
        q: "In the 30 days of September, the weather was recorded as:<br>• Sunny days: 16<br>• Rainy days: 10<br>• Cloudy days: 4<br>How many days were NOT rainy in September?",
        ans: "<strong>Calculation:</strong><br>• Total days = 30<br>• Rainy days = 10<br>• Days not rainy = Sunny (16) + Cloudy (4) = <strong>20 days</strong> (or 30 - 10 = 20).",
        marks: 2,
        rubric: [{ key: "Calculation method", marks: "1 M" }, { key: "Answer: 20 days", marks: "1 M" }]
      },
      {
        category: "Favorite Sport Survey",
        q: "In a class survey on favorite games:<br>• Cricket: 14 votes<br>• Football: 8 votes<br>• Badminton: 6 votes<br>What is the total number of students who voted?",
        ans: "<strong>Calculation:</strong><br>• Total voters = 14 + 8 + 6 = <strong>28 students</strong>.",
        marks: 2,
        rubric: [{ key: "Sum setup 14 + 8 + 6", marks: "1 M" }, { key: "Answer: 28 students", marks: "1 M" }]
      },
      {
        category: "Tally Chart Making",
        q: "Draw tally marks or write counts for the following fruit collection: 4 apples, 6 bananas, 3 oranges.",
        ans: "<strong>Tally Table:</strong><br>• <strong>Apples:</strong> |||| (Count: 4)<br>• <strong>Bananas:</strong> |||| | (Count: 6)<br>• <strong>Oranges:</strong> ||| (Count: 3).",
        marks: 2,
        rubric: [{ key: "Correct representation for all 3 fruits", marks: "2 M" }]
      },
      {
        category: "Water Glasses Drank Daily",
        q: "Five friends record how many glasses of water they drink each day:<br>• Aarav: 6<br>• Tanya: 8<br>• Kabir: 7<br>• Meera: 8<br>• Vicky: 5<br>(a) Which two friends drank the same number of glasses?<br>(b) Who drank the least water?",
        ans: "<strong>Answer:</strong><br>(a) <strong>Tanya and Meera</strong> drank the exact same amount (8 glasses each).<br>(b) <strong>Vicky</strong> drank the least water (5 glasses).",
        marks: 2,
        rubric: [{ key: "Tanya and Meera identified", marks: "1 M" }, { key: "Vicky drank least", marks: "1 M" }]
      },
      {
        category: "True or False • Data Handling",
        q: "Write True or False:<br>(a) A pictograph uses pictures or symbols to represent data numbers.<br>(b) A tally table helps us organize messy information neatly.<br>(c) In a survey of 10 people, the highest vote can be 12.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong><br>(b) <strong>True</strong><br>(c) <strong>False</strong> (In a survey of 10 people, votes cannot exceed 10).",
        marks: 3,
        rubric: [{ key: "All 3 correct (1 M each)", marks: "3 M" }]
      },
      {
        category: "Difference between Highest and Lowest",
        q: "In an art competition, points scored by 4 house teams were: Blue (24), Red (30), Green (18), Yellow (22). What is the difference between the highest and lowest scores?",
        ans: "<strong>Calculation:</strong><br>• Highest score = 30 (Red House)<br>• Lowest score = 18 (Green House)<br>• Difference = 30 - 18 = <strong>12 points</strong>.",
        marks: 2,
        rubric: [{ key: "Highest (30) and Lowest (18)", marks: "1 M" }, { key: "Difference = 12 points", marks: "1 M" }]
      },
      {
        category: "Data Riddle",
        q: "I show numbers using little pictures of apples, stars, or smiley faces so you can read them at a single glance. What kind of chart am I?",
        ans: "<strong>Answer:</strong><br>You are a <strong>Pictograph</strong>.",
        marks: 1,
        rubric: [{ key: "Identified Pictograph", marks: "1 M" }]
      },
      {
        category: "Missing Data Deduction",
        q: "A basket has 20 total fruits. 8 are mangoes and 7 are apples. The remaining fruits are guavas. How many guavas are in the basket?",
        ans: "<strong>Calculation:</strong><br>• Mangoes + Apples = 8 + 7 = 15 fruits.<br>• Total fruits = 20<br>• Guavas = 20 - 15 = <strong>5 guavas</strong>.",
        marks: 2,
        rubric: [{ key: "8 + 7 = 15", marks: "1 M" }, { key: "20 - 15 = 5 guavas", marks: "1 M" }]
      },
      {
        category: "Let Us Think • Why We Collect Data",
        q: "Why does a school principal count the number of boys and girls in every classroom at the start of the year?",
        ans: "<strong>Answer:</strong><br>• To know how many desks, chairs, textbooks, uniforms, and mid-day meal plates are needed for everyone so no child faces a shortage.",
        marks: 2,
        rubric: [{ key: "Planning resources (desks/books/meals) explained", marks: "2 M" }]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { joyfulMathsPart4 };
}
