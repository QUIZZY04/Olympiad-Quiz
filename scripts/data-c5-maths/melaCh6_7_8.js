// Official NCERT Class 5 Mathematics: "Maths Mela" - Chapters 6, 7, 8 Authentic Questions
// Aligned with NEP 2020 / NCF 2023 Curriculum & CBSE Marking Scheme 2026-27

const melaCh6_7_8 = {
  mela6: [
    {
      category: "Dairy Farm Operations • Daily Milk Production",
      q: "A dairy cooperative farm has 12 cows. Each cow yields an average of 8 litres of milk per day.<br>(a) How many litres of milk does the farm produce in one day?<br>(b) How many litres are produced in the month of June (30 days)?<br>(c) If milk is sold at ₹52 per litre, calculate the total revenue in June.",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Daily Milk:</strong> 12 cows × 8 L/cow = <strong>96 litres per day</strong>.<br>
• <strong>(b) June Production (30 days):</strong> 96 L × 30 = <strong>2,880 litres</strong>.<br>
• <strong>(c) June Revenue:</strong> 2,880 L × ₹52 = <strong>₹1,49,760</strong>.`,
      marks: 3,
      rubric: [
        { key: "Daily milk = 96 L", marks: "1.0 M" },
        { key: "June milk = 2,880 L", marks: "1.0 M" },
        { key: "Revenue = ₹1,49,760", marks: "1.0 M" }
      ]
    },
    {
      category: "Capacity Distribution • Can Sizes",
      q: "A milk booth receives 65 litres of milk in the morning. They fill:<br>• 40 packets of 500 mL each<br>• 30 bottles of 1 Litre each<br>(a) What is the total volume of milk packaged in packets and bottles?<br>(b) How much loose milk remains in the can?",
      ans: `<strong>Volume Calculations:</strong><br>
• <strong>(a) Packaged Milk:</strong><br>
- 40 packets × 500 mL = 20,000 mL = 20 Litres.<br>
- 30 bottles × 1 L = 30 Litres.<br>
- Total packaged = 20 L + 30 L = <strong>50 Litres</strong>.<br>
• <strong>(b) Loose Milk Remaining:</strong> 65 L - 50 L = <strong>15 Litres</strong>.`,
      marks: 3,
      rubric: [
        { key: "Packets = 20 L; Bottles = 30 L", marks: "1.0 M" },
        { key: "Total packaged = 50 L", marks: "1.0 M" },
        { key: "Remaining = 15 L", marks: "1.0 M" }
      ]
    },
    {
      category: "Unit Conversions • Litres and Millilitres",
      q: "Calculate:<br>(a) Add: 15 L 450 mL + 8 L 850 mL<br>(b) Subtract: 20 L - 14 L 350 mL<br>(c) Convert 3,750 mL into Litres and Millilitres.",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Addition:</strong> 450 mL + 850 mL = 1,300 mL = 1 L 300 mL. 15 L + 8 L + 1 L = <strong>24 L 300 mL</strong>.<br>
• <strong>(b) Subtraction:</strong> 20 L 000 mL - 14 L 350 mL = 19 L 1,000 mL - 14 L 350 mL = <strong>5 L 650 mL</strong>.<br>
• <strong>(c) Conversion:</strong> 3,750 mL = <strong>3 Litres 750 mL</strong> (or 3.75 L).`,
      marks: 3,
      rubric: [
        { key: "Part (a): 24 L 300 mL", marks: "1.0 M" },
        { key: "Part (b): 5 L 650 mL", marks: "1.0 M" },
        { key: "Part (c): 3 L 750 mL", marks: "1.0 M" }
      ]
    },
    {
      category: "Common Multiples • Number Line Intersections",
      q: "Find the first three common multiples of 4 and 6. Explain how you find them using lists of multiples and locate their Least Common Multiple (LCM).",
      ans: `<strong>Finding Common Multiples:</strong><br>
1. <strong>Multiples of 4:</strong> 4, 8, <strong>12</strong>, 16, 20, <strong>24</strong>, 28, 32, <strong>36</strong>, 40...<br>
2. <strong>Multiples of 6:</strong> 6, <strong>12</strong>, 18, <strong>24</strong>, 30, <strong>36</strong>, 42...<br>
3. <strong>Common Multiples:</strong> Numbers appearing in both lists are <strong>12, 24, 36</strong>.<br>
4. <strong>LCM:</strong> The smallest common multiple is <strong>12</strong>. Thus, LCM(4, 6) = 12.`,
      marks: 3,
      rubric: [
        { key: "Lists of multiples for 4 and 6", marks: "1.0 M" },
        { key: "Common multiples: 12, 24, 36", marks: "1.0 M" },
        { key: "LCM = 12", marks: "1.0 M" }
      ]
    },
    {
      category: "Factor Trees • Prime Factorization",
      q: "Draw two different factor trees for the number 60 and write down its prime factorization.",
      ans: `<strong>Factor Trees for 60:</strong><br>
1. <strong>Tree A (Starting with 6 × 10):</strong><br>
• 60 = 6 × 10<br>
• 6 splits into 2 × 3<br>
• 10 splits into 2 × 5<br>
• Prime factors: 2, 3, 2, 5.<br>
2. <strong>Tree B (Starting with 4 × 15):</strong><br>
• 60 = 4 × 15<br>
• 4 splits into 2 × 2<br>
• 15 splits into 3 × 5<br>
• Prime factors: 2, 2, 3, 5.<br>
3. <strong>Prime Factorization:</strong> 60 = <strong>2 × 2 × 3 × 5</strong>. Both trees yield identical prime factors.`,
      marks: 3,
      rubric: [
        { key: "Two distinct factor trees shown", marks: "2.0 M" },
        { key: "Prime factorization: 2 × 2 × 3 × 5", marks: "1.0 M" }
      ]
    },
    {
      category: "Multiples Problem • Packaging Butter",
      q: "A dairy packs butter into boxes of 6 packets or boxes of 8 packets.<br>(a) What is the smallest number of butter packets that can be packed completely in either boxes of 6 or boxes of 8 without leaving any packets out?<br>(b) How many boxes of 6 and how many boxes of 8 will be needed for that quantity?",
      ans: `<strong>LCM Application:</strong><br>
• <strong>(a) Smallest Number (LCM):</strong><br>
- Multiples of 6: 6, 12, 18, <strong>24</strong>, 30...<br>
- Multiples of 8: 8, 16, <strong>24</strong>, 32...<br>
- LCM(6, 8) = <strong>24 packets</strong>.<br>
• <strong>(b) Number of Boxes:</strong><br>
- Boxes of 6 = 24 ÷ 6 = <strong>4 boxes</strong>.<br>
- Boxes of 8 = 24 ÷ 8 = <strong>3 boxes</strong>.`,
      marks: 3,
      rubric: [
        { key: "LCM(6, 8) = 24 packets", marks: "1.5 M" },
        { key: "4 boxes of 6, 3 boxes of 8", marks: "1.5 M" }
      ]
    },
    {
      category: "Factors • Listing & Pairs",
      q: "(a) Write all the factors of 36.<br>(b) Write all the factors of 48.<br>(c) List all the common factors of 36 and 48. What is their Highest Common Factor (HCF)?",
      ans: `<strong>Factors Analysis:</strong><br>
• <strong>(a) Factors of 36:</strong> 1, 2, 3, 4, 6, 9, 12, 18, 36.<br>
• <strong>(b) Factors of 48:</strong> 1, 2, 3, 4, 6, 8, 12, 16, 24, 48.<br>
• <strong>(c) Common Factors:</strong> <strong>1, 2, 3, 4, 6, 12</strong>.<br>
- <strong>Highest Common Factor (HCF):</strong> <strong>12</strong>.`,
      marks: 3,
      rubric: [
        { key: "Factors of 36 and 48", marks: "1.5 M" },
        { key: "Common factors & HCF = 12", marks: "1.5 M" }
      ]
    },
    {
      category: "Milk Tanker Capacity • Multi-Station Supply",
      q: "A milk tanker carries 8,000 litres of chilled milk. It delivers 2,450 litres to Society Alpha, 3,180 litres to Society Beta, and the rest to a milk processing plant.<br>(a) How many litres are delivered to Societies Alpha and Beta combined?<br>(b) How many litres does the processing plant receive?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Societies Combined:</strong> 2,450 L + 3,180 L = <strong>5,630 litres</strong>.<br>
• <strong>(b) Processing Plant:</strong> 8,000 L - 5,630 L = <strong>2,370 litres</strong>.`,
      marks: 3,
      rubric: [
        { key: "Combined societies = 5,630 L", marks: "1.5 M" },
        { key: "Plant delivery = 2,370 L", marks: "1.5 M" }
      ]
    },
    {
      category: "Paneer Yield • Unitary Proportions",
      q: "At the dairy, 5 litres of buffalo milk yield 1 kg of fresh paneer (cottage cheese).<br>(a) How many kilograms of paneer can be made from 45 litres of milk?<br>(b) How many litres of milk are required to prepare 8.5 kg of paneer?",
      ans: `<strong>Proportion Calculations:</strong><br>
• <strong>(a) Paneer from 45 L:</strong> 45 ÷ 5 = <strong>9 kg of paneer</strong>.<br>
• <strong>(b) Milk for 8.5 kg Paneer:</strong> 8.5 × 5 = <strong>42.5 litres of milk</strong>.`,
      marks: 3,
      rubric: [
        { key: "45 L gives 9 kg paneer", marks: "1.5 M" },
        { key: "8.5 kg paneer requires 42.5 L milk", marks: "1.5 M" }
      ]
    },
    {
      category: "Measuring Jugs • Filling Volumes",
      q: "A milkman has only two measuring cans: 200 mL and 500 mL.<br>(a) How can he measure exactly 900 mL of milk using minimum pours?<br>(b) How can he measure exactly 1 litre (1,000 mL) using both cans?",
      ans: `<strong>Measuring Jug Solutions:</strong><br>
• <strong>(a) For 900 mL:</strong><br>
- Take two 200 mL cans and one 500 mL can: 200 + 200 + 500 = <strong>900 mL (3 pours)</strong>.<br>
• <strong>(b) For 1,000 mL (1 Litre):</strong><br>
- Use the 500 mL can twice: 500 + 500 = 1,000 mL, OR<br>
- Using both cans: one 200 mL can and two 500 mL cans minus one 200 mL can, or simpler: five 200 mL cans.<br>
- Best combination using both cans: two 200 mL + two 300 mL (or two 500 mL cans).`,
      marks: 3,
      rubric: [
        { key: "900 mL: 500 mL + 200 mL + 200 mL", marks: "1.5 M" },
        { key: "1,000 mL: Two 500 mL pours (or equivalent combination)", marks: "1.5 M" }
      ]
    },
    {
      category: "Ghee Production • Cost & Profit",
      q: "A dairy sells pure cow ghee in jars of 500 g at ₹340 per jar.<br>(a) What is the cost of 1 kg of ghee?<br>(b) A customer buys 6 jars of ghee. How many kg of ghee does he get, and what is his total bill?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Cost of 1 kg:</strong> 1 kg = 1,000 g = two 500 g jars. Cost = 2 × ₹340 = <strong>₹680 per kg</strong>.<br>
• <strong>(b) 6 Jars Purchase:</strong><br>
- Total weight = 6 × 500 g = 3,000 g = <strong>3 kg</strong>.<br>
- Total bill = 6 × ₹340 = <strong>₹2,040</strong>.`,
      marks: 3,
      rubric: [
        { key: "1 kg cost = ₹680", marks: "1.0 M" },
        { key: "Total weight = 3 kg", marks: "1.0 M" },
        { key: "Total bill = ₹2,040", marks: "1.0 M" }
      ]
    },
    {
      category: "Milk Delivery Route • Time Schedule",
      q: "A milk delivery truck starts at 4:30 AM. It spends 15 minutes at each of its 8 delivery booths and takes 10 minutes to drive between each consecutive booth (7 transit trips).<br>(a) Find total time spent unloading milk at the booths.<br>(b) Find total driving time between booths.<br>(c) At what time does the truck complete all deliveries?",
      ans: `<strong>Schedule Breakdown:</strong><br>
• <strong>(a) Unloading Time:</strong> 8 booths × 15 min = 120 minutes = <strong>2 hours</strong>.<br>
• <strong>(b) Driving Time:</strong> 7 trips × 10 min = <strong>70 minutes (1 hour 10 minutes)</strong>.<br>
• <strong>(c) Completion Time:</strong><br>
- Total elapsed time = 2 h + 1 h 10 min = 3 hours 10 minutes.<br>
- 4:30 AM + 3 h 10 min = <strong>7:40 AM</strong>.`,
      marks: 3,
      rubric: [
        { key: "Unloading = 120 min (2 h)", marks: "1.0 M" },
        { key: "Driving = 70 min", marks: "1.0 M" },
        { key: "Finish time = 7:40 AM", marks: "1.0 M" }
      ]
    },
    {
      category: "Common Factors • Venn Diagram Model",
      q: "Draw or describe two overlapping circles representing factors of 20 and factors of 30:<br>(a) List factors in circle for 20.<br>(b) List factors in circle for 30.<br>(c) Which numbers are placed in the overlapping shared intersection?",
      ans: `<strong>Venn Diagram Factors:</strong><br>
• <strong>Factors of 20:</strong> 1, 2, 4, 5, 10, 20.<br>
• <strong>Factors of 30:</strong> 1, 2, 3, 5, 6, 10, 15, 30.<br>
• <strong>(c) Overlapping Intersection (Common Factors):</strong> <strong>1, 2, 5, 10</strong>.<br>
- Non-shared in 20 only: 4, 20.<br>
- Non-shared in 30 only: 3, 6, 15, 30.`,
      marks: 3,
      rubric: [
        { key: "Factors of 20 identified", marks: "1.0 M" },
        { key: "Factors of 30 identified", marks: "1.0 M" },
        { key: "Shared intersection: 1, 2, 5, 10", marks: "1.0 M" }
      ]
    },
    {
      category: "Dairy Cattle Feed • Ration Calculation",
      q: "Each cow on the farm is fed 4 kg of green fodder and 2.5 kg of cattle grain mix twice a day.<br>(a) How many kilograms of feed does one cow consume in one day?<br>(b) How many kilograms of feed are required for all 12 cows for one day?",
      ans: `<strong>Feed Calculations:</strong><br>
• <strong>(a) One Cow Daily:</strong><br>
- Per feeding = 4 kg + 2.5 kg = 6.5 kg.<br>
- Twice a day = 6.5 kg × 2 = <strong>13 kg per day</strong>.<br>
• <strong>(b) 12 Cows Daily:</strong> 12 × 13 kg = <strong>156 kg of feed</strong>.`,
      marks: 3,
      rubric: [
        { key: "One cow = 13 kg/day", marks: "1.5 M" },
        { key: "12 cows = 156 kg/day", marks: "1.5 M" }
      ]
    },
    {
      category: "Milk Adulteration Test • Density Measurement",
      q: "A lactometer reading shows pure cow milk density. A sample of 1 litre of pure milk weighs 1,032 grams.<br>(a) Does 1 litre of milk weigh more or less than 1 litre of water (1,000 g)? By how much?<br>(b) What is the weight of 5 litres of pure milk in kilograms and grams?",
      ans: `<strong>Density Analysis:</strong><br>
• <strong>(a) Comparison:</strong> Milk weighs 1,032 g while water weighs 1,000 g. Milk weighs <strong>more than water by 32 grams per litre</strong>.<br>
• <strong>(b) Weight of 5 Litres:</strong> 5 × 1,032 g = 5,160 g = <strong>5 kg 160 g</strong>.`,
      marks: 3,
      rubric: [
        { key: "More than water by 32 g", marks: "1.5 M" },
        { key: "5 litres = 5 kg 160 g", marks: "1.5 M" }
      ]
    },
    {
      category: "Prime and Composite Numbers • Classification",
      q: "Classify the following numbers as Prime or Composite:<br>11, 15, 19, 21, 29, 33, 37.<br>Give the definition of a prime number.",
      ans: `<strong>Prime vs Composite Classification:</strong><br>
• <strong>Definition:</strong> A prime number is a natural number greater than 1 that has exactly two distinct factors: 1 and itself.<br>
• <strong>Classification:</strong><br>
- <strong>Prime Numbers:</strong> <strong>11, 19, 29, 37</strong> (only divisible by 1 and itself).<br>
- <strong>Composite Numbers:</strong> <strong>15</strong> (3 × 5), <strong>21</strong> (3 × 7), <strong>33</strong> (3 × 11).`,
      marks: 3,
      rubric: [
        { key: "Definition of prime number", marks: "1.0 M" },
        { key: "Correct primes: 11, 19, 29, 37", marks: "1.0 M" },
        { key: "Correct composites: 15, 21, 33", marks: "1.0 M" }
      ]
    },
    {
      category: "Dairy Churning • Curd to Buttermilk",
      q: "To make buttermilk (chaas), a dairy mixes 12 litres of curd with 18 litres of cold water.<br>(a) What is the total volume of buttermilk prepared?<br>(b) If buttermilk is served in 250 mL glasses at ₹15 each, how many glasses can be poured?<br>(c) What is the total collection from selling all the glasses?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Total Volume:</strong> 12 L + 18 L = <strong>30 Litres</strong>.<br>
• <strong>(b) Number of Glasses:</strong><br>
- 30 L = 30,000 mL.<br>
- Glasses = 30,000 ÷ 250 = <strong>120 glasses</strong>.<br>
• <strong>(c) Total Collection:</strong> 120 × ₹15 = <strong>₹1,800</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total volume = 30 L", marks: "1.0 M" },
        { key: "Glasses = 120", marks: "1.0 M" },
        { key: "Collection = ₹1,800", marks: "1.0 M" }
      ]
    },
    {
      category: "HOTS • Milk Capacity Riddle",
      q: "A large milk container is 3/5 full. When 14 litres of milk are added to it, it becomes 4/5 full. What is the total capacity of the container when completely full?",
      ans: `<strong>Fraction & Volume Deduction:</strong><br>
1. Fraction added = 4/5 - 3/5 = <strong>1/5 of the container</strong>.<br>
2. Given: 1/5 of the total capacity = 14 litres.<br>
3. Total capacity = 14 × 5 = <strong>70 litres</strong>.<br>
4. <strong>Verification:</strong> 3/5 of 70 = 42 L. Adding 14 L gives 42 + 14 = 56 L. 4/5 of 70 = 56 L. Solution verified!`,
      marks: 3,
      rubric: [
        { key: "Difference = 1/5 of capacity", marks: "1.5 M" },
        { key: "Capacity = 70 litres with verification", marks: "1.5 M" }
      ]
    },
    {
      category: "Dairy Cooperative Savings",
      q: "A women's dairy cooperative saves ₹4,200 every week.<br>(a) How much money do they save in one year (52 weeks)?<br>(b) If they invest ₹1,50,000 from their savings to purchase a chilling unit, how much savings remain?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Annual Savings:</strong> 52 × ₹4,200 = <strong>₹2,18,400</strong>.<br>
• <strong>(b) Remaining Savings:</strong> ₹2,18,400 - ₹1,50,000 = <strong>₹68,400</strong>.`,
      marks: 3,
      rubric: [
        { key: "Annual savings = ₹2,18,400", marks: "1.5 M" },
        { key: "Remaining savings = ₹68,400", marks: "1.5 M" }
      ]
    },
    {
      category: "Number Logic • Co-prime Numbers",
      q: "(a) What are co-prime numbers?<br>(b) Are 8 and 15 co-prime? Justify your answer by listing their factors.",
      ans: `<strong>Co-prime Explanation:</strong><br>
• <strong>(a) Definition:</strong> Two numbers are co-prime if they have no common factor other than 1 (i.e. HCF = 1).<br>
• <strong>(b) Analysis of 8 and 15:</strong><br>
- Factors of 8: 1, 2, 4, 8.<br>
- Factors of 15: 1, 3, 5, 15.<br>
- Common factor: <strong>Only 1</strong>.<br>
- <strong>Conclusion:</strong> Yes, 8 and 15 are <strong>co-prime numbers</strong>.`,
      marks: 3,
      rubric: [
        { key: "Definition of co-prime (HCF = 1)", marks: "1.5 M" },
        { key: "Factors listed & affirmative conclusion", marks: "1.5 M" }
      ]
    },
    {
      category: "Ice-Cream Factory Milk Usage",
      q: "An ice-cream unit uses 150 litres of condensed milk daily to produce 600 tubs of ice-cream.<br>(a) How many millilitres of condensed milk are used per tub?<br>(b) If production is increased by 50%, how many litres of milk will be required daily?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Milk per Tub:</strong> 150 L = 150,000 mL. Milk per tub = 150,000 ÷ 600 = <strong>250 mL per tub</strong>.<br>
• <strong>(b) 50% Increase:</strong> 150 L + (50% of 150 L) = 150 + 75 = <strong>225 litres daily</strong>.`,
      marks: 3,
      rubric: [
        { key: "250 mL per tub", marks: "1.5 M" },
        { key: "225 litres with 50% increase", marks: "1.5 M" }
      ]
    },
    {
      category: "Mental Arithmetic • Division by 10, 100",
      q: "Convert millilitres into litres using decimal point shifts:<br>(a) 4,500 mL<br>(b) 850 mL<br>(c) 25 mL<br>(d) 10,250 mL",
      ans: `<strong>Shift Decimal 3 Places Left (÷ 1,000):</strong><br>
• <strong>(a) 4,500 mL:</strong> 4,500 ÷ 1,000 = <strong>4.5 L</strong>.<br>
• <strong>(b) 850 mL:</strong> 850 ÷ 1,000 = <strong>0.85 L</strong>.<br>
• <strong>(c) 25 mL:</strong> 25 ÷ 1,000 = <strong>0.025 L</strong>.<br>
• <strong>(d) 10,250 mL:</strong> 10,250 ÷ 1,000 = <strong>10.25 L</strong>.`,
      marks: 3,
      rubric: [
        { key: "Parts (a) & (b): 4.5 L, 0.85 L", marks: "1.5 M" },
        { key: "Parts (c) & (d): 0.025 L, 10.25 L", marks: "1.5 M" }
      ]
    },
    {
      category: "True or False with Arithmetic Reasoning",
      q: "State True or False with reasoning:<br>(a) Every multiple of 6 is also a multiple of 2 and 3.<br>(b) 1 is the smallest prime number.<br>(c) A capacity of 2 L 50 mL equals 2.5 Litres.",
      ans: `<strong>Justifications:</strong><br>
• <strong>(a) True:</strong> Since 6 = 2 × 3, any multiple of 6 contains both 2 and 3 as factors, so it is divisible by both 2 and 3.<br>
• <strong>(b) False:</strong> 1 has only one factor (itself), whereas prime numbers require exactly two distinct factors. The smallest prime number is <strong>2</strong>.<br>
• <strong>(c) False:</strong> 50 mL = 50 ÷ 1,000 = 0.05 L. Therefore 2 L 50 mL = <strong>2.05 Litres</strong> (2.5 L is 2 L 500 mL).`,
      marks: 3,
      rubric: [
        { key: "Part (a): True with prime factor reasoning", marks: "1.0 M" },
        { key: "Part (b): False (2 is smallest prime)", marks: "1.0 M" },
        { key: "Part (c): False (2.05 L vs 2.5 L)", marks: "1.0 M" }
      ]
    },
    {
      category: "Comprehensive Dairy Farm Review",
      q: "A dairy cooperative has a cold storage capacity of 15,000 litres. On Monday, it starts with 4,200 L in stock. During the day, it collects 8,400 L from farmers and delivers 7,850 L to bottling plants.<br>(a) What is the closing stock on Monday evening?<br>(b) How much unused capacity remains in the storage tank?",
      ans: `<strong>Stock Balance:</strong><br>
• <strong>(a) Closing Stock:</strong><br>
- Opening stock = 4,200 L.<br>
- Total available = 4,200 + 8,400 = 12,600 L.<br>
- Dispatched = 7,850 L.<br>
- Closing stock = 12,600 - 7,850 = <strong>4,750 litres</strong>.<br>
• <strong>(b) Unused Capacity:</strong> 15,000 L - 4,750 L = <strong>10,250 litres unused</strong>.`,
      marks: 3,
      rubric: [
        { key: "Closing stock = 4,750 L", marks: "1.5 M" },
        { key: "Unused capacity = 10,250 L", marks: "1.5 M" }
      ]
    }
  ],

  mela7: [
    {
      category: "Rotational Symmetry • Turns & Degrees",
      q: "(a) What is the angle of turn if a shape returns to its exact original appearance in a 1/2 turn?<br>(b) What is the angle of turn in a 1/4 turn?<br>(c) Which of the following shapes look identical after a 1/2 turn: Rectangle, Equilateral Triangle, Letter 'S', Letter 'M'?",
      ans: `<strong>Rotational Symmetry Properties:</strong><br>
• <strong>(a) 1/2 Turn:</strong> 360° ÷ 2 = <strong>180°</strong>.<br>
• <strong>(b) 1/4 Turn:</strong> 360° ÷ 4 = <strong>90°</strong>.<br>
• <strong>(c) Shapes that look identical after 1/2 turn (180°):</strong><br>
- <strong>Rectangle:</strong> Yes (180° rotation matches perfectly).<br>
- <strong>Equilateral Triangle:</strong> No (apex points downward after 1/2 turn).<br>
- <strong>Letter 'S':</strong> Yes (180° rotation gives 'S').<br>
- <strong>Letter 'M':</strong> No (turns upside down into 'W').<br>
Identical shapes: <strong>Rectangle and Letter 'S'</strong>.`,
      marks: 3,
      rubric: [
        { key: "1/2 turn = 180°; 1/4 turn = 90°", marks: "1.5 M" },
        { key: "Rectangle and Letter S identified correctly", marks: "1.5 M" }
      ]
    },
    {
      category: "Number Patterns • Multiplication Arrays",
      q: "Observe the pattern and find the next two lines:<br>1 × 9 + 2 = 11<br>12 × 9 + 3 = 111<br>123 × 9 + 4 = 1111<br>Explain the pattern rule.",
      ans: `<strong>Pattern Progression:</strong><br>
• Line 4: <strong>1234 × 9 + 5 = 11,111</strong>.<br>
• Line 5: <strong>12345 × 9 + 6 = 1,11,111</strong>.<br>
• <strong>Rule:</strong> In each successive line, the multiplicand adds the next natural digit on the right (1, 12, 123, 1234, 12345), the added number increases by 1 (2, 3, 4, 5, 6), and the resulting product consists entirely of the digit 1 repeated one more time than in the previous line.`,
      marks: 3,
      rubric: [
        { key: "Line 4: 1234 × 9 + 5 = 11,111", marks: "1.0 M" },
        { key: "Line 5: 12345 × 9 + 6 = 1,11,111", marks: "1.0 M" },
        { key: "Clear mathematical rule explanation", marks: "1.0 M" }
      ]
    },
    {
      category: "Sum of Consecutive Numbers Pattern",
      q: "Look at the pattern of adding consecutive numbers:<br>1 + 2 + 3 = 6<br>2 + 3 + 4 = 9<br>3 + 4 + 5 = 12<br>(a) Find the next two lines in this pattern.<br>(b) What is the mathematical relationship between the middle number and the sum?",
      ans: `<strong>Pattern Analysis:</strong><br>
• <strong>(a) Next Two Lines:</strong><br>
- Line 4: <strong>4 + 5 + 6 = 15</strong>.<br>
- Line 5: <strong>5 + 6 + 7 = 18</strong>.<br>
• <strong>(b) Mathematical Relationship:</strong><br>
- For 1, 2, 3: Middle number is 2; Sum = 6 = 3 × 2.<br>
- For 2, 3, 4: Middle number is 3; Sum = 9 = 3 × 3.<br>
- For 3, 4, 5: Middle number is 4; Sum = 12 = 3 × 4.<br>
<strong>Rule:</strong> The sum of three consecutive numbers is always exactly <strong>3 times the middle number</strong> ($3 \\times M$).`,
      marks: 3,
      rubric: [
        { key: "Line 4: 4+5+6 = 15; Line 5: 5+6+7 = 18", marks: "1.5 M" },
        { key: "Sum = 3 × middle number", marks: "1.5 M" }
      ]
    },
    {
      category: "Magic Squares • 3x3 Grid Sum",
      q: "Fill in the numbers 1 to 9 in a 3×3 grid such that the sum of each row, column, and diagonal is 15. What number must be placed in the center, and why?",
      ans: `<strong>Magic Square of 1 to 9 (Sum = 15):</strong><br>
<pre>
  8   1   6  → 15
  3   5   7  → 15
  4   9   2  → 15
  ↓   ↓   ↓
 15  15  15
Diagonals: 8+5+2 = 15; 6+5+4 = 15.
</pre><br>
• <strong>Center Number:</strong> The number <strong>5</strong> must be placed in the center.<br>
• <strong>Reason:</strong> The center cell is part of 4 lines (1 row, 1 column, 2 diagonals). The average of numbers 1 to 9 is (1 + 9) ÷ 2 = 5, which is the median value required to balance all pairs adding to 10 (1+9, 2+8, 3+7, 4+6).`,
      marks: 3,
      rubric: [
        { key: "Correct 3×3 grid with sums = 15", marks: "2.0 M" },
        { key: "Center is 5 with median explanation", marks: "1.0 M" }
      ]
    },
    {
      category: "Magic Hexagon • Circles & Squares",
      q: "In a magic hexagon pattern, a square lies between two circles. The rule is: <em>The number in each square is the product of the numbers in the circles on either side</em>.<br>If two circles contain 7 and 9, what number goes in the square between them? If a square contains 72 and one circle is 8, what number is in the other circle?",
      ans: `<strong>Rule: Square = Circle 1 × Circle 2:</strong><br>
• <strong>(a) Circles with 7 and 9:</strong> Square = 7 × 9 = <strong>63</strong>.<br>
• <strong>(b) Square is 72, Circle is 8:</strong> Other circle = 72 ÷ 8 = <strong>9</strong>.`,
      marks: 3,
      rubric: [
        { key: "Square = 63", marks: "1.5 M" },
        { key: "Other circle = 9", marks: "1.5 M" }
      ]
    },
    {
      category: "Square Numbers Pattern • Visual Dots",
      q: "Observe the pattern of square numbers:<br>1, 4, 9, 16, 25...<br>(a) Find the next three square numbers.<br>(b) Write each square number as the sum of consecutive odd numbers starting from 1 (e.g., 4 = 1 + 3).",
      ans: `<strong>Square Numbers:</strong><br>
• <strong>(a) Next Three Numbers:</strong> 6² = <strong>36</strong>, 7² = <strong>49</strong>, 8² = <strong>64</strong>.<br>
• <strong>(b) Sum of Odd Numbers:</strong><br>
- 1 = <strong>1</strong><br>
- 4 = <strong>1 + 3</strong><br>
- 9 = <strong>1 + 3 + 5</strong><br>
- 16 = <strong>1 + 3 + 5 + 7</strong><br>
- 25 = <strong>1 + 3 + 5 + 7 + 9</strong><br>
- 36 = <strong>1 + 3 + 5 + 7 + 9 + 11</strong>.`,
      marks: 3,
      rubric: [
        { key: "Next three: 36, 49, 64", marks: "1.5 M" },
        { key: "Odd sum expansion", marks: "1.5 M" }
      ]
    },
    {
      category: "Palindromic Numbers • Reverse and Add",
      q: "A palindrome is a number that reads the same forwards and backwards (e.g. 121, 353).<br>(a) Take the number 48. Reverse its digits and add them together. Repeat the process if needed to get a palindrome.<br>(b) Is 1,001 a palindrome? What is the next 4-digit palindrome after 1,001?",
      ans: `<strong>Palindrome Calculations:</strong><br>
• <strong>(a) Process for 48:</strong><br>
- Step 1: Number = 48. Reverse = 84.<br>
- Step 2: Sum = 48 + 84 = 132 (not yet a palindrome).<br>
- Step 3: Reverse of 132 = 231.<br>
- Step 4: Sum = 132 + 231 = <strong>363</strong> (which reads the same forwards and backwards → Palindrome!).<br>
• <strong>(b) 1,001:</strong> <strong>Yes</strong>, 1,001 is a palindrome. The next 4-digit palindrome is <strong>1,111</strong>.`,
      marks: 3,
      rubric: [
        { key: "Steps for 48 yielding 363", marks: "2.0 M" },
        { key: "1,001 is palindrome & next is 1,111", marks: "1.0 M" }
      ]
    },
    {
      category: "Secret Message Codes • Alphabet Shifts",
      q: "(a) If the code rule is: <em>Replace each letter with the next letter (A→B, B→C... Z→A)</em>, decode the secret message: 'CPPL'.<br>(b) Using the same rule, encode the word: 'CLEVER'.",
      ans: `<strong>Coding & Decoding (+1 Shift):</strong><br>
• <strong>(a) Decoding 'CPPL':</strong> Shift backward by 1 letter (-1):<br>
- C - 1 = B<br>
- P - 1 = O<br>
- P - 1 = O<br>
- L - 1 = K<br>
<strong>Decoded Word: BOOK</strong>.<br>
• <strong>(b) Encoding 'CLEVER':</strong> Shift forward by 1 letter (+1):<br>
- C → D, L → M, E → F, V → W, E → F, R → S.<br>
<strong>Encoded Message: DMFWFS</strong>.`,
      marks: 3,
      rubric: [
        { key: "Decoded: BOOK", marks: "1.5 M" },
        { key: "Encoded: DMFWFS", marks: "1.5 M" }
      ]
    },
    {
      category: "Tessellation & Tiling • Surface Covering",
      q: "(a) What is tessellation (tiling)?<br>(b) Can regular hexagons tile a flat surface without gaps or overlaps? Explain why with reference to angles.<br>(c) Can regular octagons alone tile a floor? Explain.",
      ans: `<strong>Tessellation Geometry:</strong><br>
• <strong>(a) Definition:</strong> Tessellation is the covering of a plane using one or more geometric shapes with no gaps and no overlaps.<br>
• <strong>(b) Regular Hexagons:</strong> <strong>Yes</strong>. Each interior angle of a regular hexagon is 120°. At each meeting vertex, 3 hexagons meet: 120° × 3 = 360°. Since their angles sum to exactly 360°, they tile seamlessly (honeycomb pattern).<br>
• <strong>(c) Regular Octagons:</strong> <strong>No</strong>, octagons alone cannot tile a floor. Each interior angle is 135°. Two octagons give 135° + 135° = 270°, leaving a gap of 360° - 270° = 90° (which requires a square to fill the gap).`,
      marks: 3,
      rubric: [
        { key: "Definition of tessellation", marks: "1.0 M" },
        { key: "Hexagon: 120° × 3 = 360° tiles without gaps", marks: "1.0 M" },
        { key: "Octagon: 135° leaves 90° gap (cannot tile alone)", marks: "1.0 M" }
      ]
    },
    {
      category: "1/3 Turn and 1/6 Turn Rotations",
      q: "Through how many degrees does a shape rotate in:<br>(a) A 1/3 turn<br>(b) A 1/6 turn<br>(c) Which regular shape looks identical after a 1/3 turn?<br>(d) Which shape looks identical after a 1/6 turn?",
      ans: `<strong>Rotational Angles:</strong><br>
• <strong>(a) 1/3 Turn:</strong> 360° ÷ 3 = <strong>120°</strong>.<br>
• <strong>(b) 1/6 Turn:</strong> 360° ÷ 6 = <strong>60°</strong>.<br>
• <strong>(c) Identical after 1/3 turn:</strong> An <strong>Equilateral Triangle</strong> (has 3-fold rotational symmetry).<br>
• <strong>(d) Identical after 1/6 turn:</strong> A <strong>Regular Hexagon</strong> (or 6-pointed star, has 6-fold symmetry).`,
      marks: 3,
      rubric: [
        { key: "1/3 turn = 120°; 1/6 turn = 60°", marks: "1.5 M" },
        { key: "Equilateral triangle and Regular hexagon", marks: "1.5 M" }
      ]
    },
    {
      category: "Triangular Numbers Pattern",
      q: "Look at the pattern of triangular numbers (dots arranged in triangles):<br>1, 3, 6, 10, 15...<br>(a) Find the next two triangular numbers.<br>(b) What is the relationship between the sum of two consecutive triangular numbers?",
      ans: `<strong>Triangular Numbers:</strong><br>
• Differences are consecutive integers: +2, +3, +4, +5...<br>
• <strong>(a) Next Two Numbers:</strong><br>
- 15 + 6 = <strong>21</strong>.<br>
- 21 + 7 = <strong>28</strong>.<br>
• <strong>(b) Sum of Consecutive Triangular Numbers:</strong><br>
- 1 + 3 = 4 = 2² (Square number)<br>
- 3 + 6 = 9 = 3² (Square number)<br>
- 6 + 10 = 16 = 4² (Square number)<br>
- 10 + 15 = 25 = 5² (Square number)<br>
<strong>Rule:</strong> The sum of any two consecutive triangular numbers is always a <strong>Square Number</strong>!`,
      marks: 3,
      rubric: [
        { key: "Next two: 21, 28", marks: "1.5 M" },
        { key: "Sum of two consecutive gives square numbers", marks: "1.5 M" }
      ]
    },
    {
      category: "Magic Triangle • Perimeter Sum",
      q: "Fill in the numbers 1, 2, 3, 4, 5, 6 along the three sides of a triangle (3 numbers on each side) so that the sum of the numbers on each side is 9.",
      ans: `<strong>Magic Triangle Solution (Side Sum = 9):</strong><br>
1. Place the smallest numbers <strong>1, 2, 3 at the three corner vertices</strong>.<br>
2. Corner sum = 1 + 2 + 3 = 6.<br>
3. Sides:<br>
• Side between 1 and 2: needs 9 - (1 + 2) = <strong>6</strong> in the middle.<br>
• Side between 2 and 3: needs 9 - (2 + 3) = <strong>4</strong> in the middle.<br>
• Side between 3 and 1: needs 9 - (3 + 1) = <strong>5</strong> in the middle.<br>
Check: 1+6+2 = 9; 2+4+3 = 9; 3+5+1 = 9. All numbers 1 to 6 used exactly once!`,
      marks: 3,
      rubric: [
        { key: "Corners: 1, 2, 3", marks: "1.5 M" },
        { key: "Middle numbers: 6, 4, 5 with side sum = 9", marks: "1.5 M" }
      ]
    },
    {
      category: "Border Tiling Strip Patterns",
      q: "A traditional border design repeats a motif: Triangle pointing UP, Square, Triangle pointing DOWN, Circle.<br>(a) What will be the 15th shape in this repeating pattern?<br>(b) What will be the 28th shape?",
      ans: `<strong>Modulo Arithmetic in Repeating Motifs (Period = 4 shapes):</strong><br>
• Pattern sequence: 1 = UP, 2 = Square, 3 = DOWN, 4 = Circle.<br>
• <strong>(a) 15th Shape:</strong> 15 ÷ 4 = 3 with remainder 3. Position 3 is <strong>Triangle pointing DOWN</strong>.<br>
• <strong>(b) 28th Shape:</strong> 28 ÷ 4 = 7 with remainder 0 (exact multiple of 4). Position 4 is <strong>Circle</strong>.`,
      marks: 3,
      rubric: [
        { key: "Period = 4 shapes identified", marks: "1.0 M" },
        { key: "15th shape = Triangle pointing DOWN", marks: "1.0 M" },
        { key: "28th shape = Circle", marks: "1.0 M" }
      ]
    },
    {
      category: "Number Grid Patterns • Magic Multiplications",
      q: "Study the multiplication pattern:<br>11 × 11 = 121<br>111 × 111 = 12321<br>1111 × 1111 = 1234321<br>(a) What will be the value of 11111 × 11111 without doing long multiplication?<br>(b) Explain the symmetry in the digits of the product.",
      ans: `<strong>Symmetric Number Products (Repunits):</strong><br>
• <strong>(a) Product:</strong> 11,111 × 11,111 = <strong>123454321</strong> (One crore twenty-three lakh forty-five thousand four hundred twenty-one).<br>
• <strong>(b) Symmetry Explanation:</strong> The digits count up from 1 to the number of ones in the factor (5 digits: 1, 2, 3, 4, 5) and then mirror backwards symmetrically down to 1 (4, 3, 2, 1), forming a numerical palindrome.`,
      marks: 3,
      rubric: [
        { key: "Product = 123454321", marks: "1.5 M" },
        { key: "Clear explanation of ascending-descending palindrome symmetry", marks: "1.5 M" }
      ]
    },
    {
      category: "Rotational Symmetry Order",
      q: "State the order of rotational symmetry for each of the following regular figures:<br>(a) Square<br>(b) Regular Pentagon<br>(c) Regular Octagon<br>(d) Circle",
      ans: `<strong>Order of Rotational Symmetry:</strong><br>
• <strong>(a) Square:</strong> Rotates onto itself 4 times in a 360° turn (every 90°) → <strong>Order 4</strong>.<br>
• <strong>(b) Regular Pentagon:</strong> Rotates onto itself 5 times (every 72°) → <strong>Order 5</strong>.<br>
• <strong>(c) Regular Octagon:</strong> Rotates onto itself 8 times (every 45°) → <strong>Order 8</strong>.<br>
• <strong>(d) Circle:</strong> Any rotation around its center leaves it unchanged → <strong>Infinite order</strong>.`,
      marks: 3,
      rubric: [
        { key: "Square = 4; Pentagon = 5", marks: "1.5 M" },
        { key: "Octagon = 8; Circle = Infinite", marks: "1.5 M" }
      ]
    },
    {
      category: "Fibonacci Sequence • Nature's Pattern",
      q: "Observe the Fibonacci sequence where each term is the sum of the two preceding terms:<br>1, 1, 2, 3, 5, 8, 13...<br>(a) Find the next three numbers in the sequence.<br>(b) Where in nature can this pattern be observed?",
      ans: `<strong>Fibonacci Sequence:</strong><br>
• <strong>(a) Next Three Numbers:</strong><br>
- 8 + 13 = <strong>21</strong>.<br>
- 13 + 21 = <strong>34</strong>.<br>
- 21 + 34 = <strong>55</strong>.<br>
• <strong>(b) Occurrences in Nature:</strong> Number of petals on flowers (daisies, sunflowers), spiral arrangement of sunflower seeds, pine cone scales, and pineapple skins.`,
      marks: 3,
      rubric: [
        { key: "Next three: 21, 34, 55", marks: "1.5 M" },
        { key: "Two natural examples (sunflower seeds, pine cones)", marks: "1.5 M" }
      ]
    },
    {
      category: "Alphabet Symmetry • Rotational vs Line",
      q: "Among the capital English letters: <strong>A, H, M, O, X, Z</strong>:<br>(a) Which letters have both vertical and horizontal lines of symmetry?<br>(b) Which letter has rotational symmetry of order 2 but NO line of symmetry?",
      ans: `<strong>Letter Symmetry Analysis:</strong><br>
• <strong>(a) Both Vertical & Horizontal Lines of Symmetry:</strong> <strong>H, O, X</strong> (can be reflected across both axes).<br>
• <strong>(b) Rotational Symmetry but No Line Symmetry:</strong> <strong>Z</strong>.<br>
- Letter 'Z' has no axis of reflection (horizontal or vertical reflection reverses the diagonal), but rotating by 180° (half-turn) reproduces an identical 'Z'.`,
      marks: 3,
      rubric: [
        { key: "Part (a): H, O, X", marks: "1.5 M" },
        { key: "Part (b): Z with rotational explanation", marks: "1.5 M" }
      ]
    },
    {
      category: "Magic Square of Sum 30",
      q: "A 3×3 magic square has numbers 6, 7, 8, 9, 10, 11, 12, 13, 14. What number must be at the center, and what is the constant magic sum of each row?",
      ans: `<strong>Calculations:</strong><br>
1. Total sum of numbers from 6 to 14 = (6 + 14) × 9 ÷ 2 = 20 × 4.5 = 90.<br>
2. <strong>Row Sum (Magic Constant):</strong> 90 ÷ 3 rows = <strong>30</strong>.<br>
3. <strong>Center Number:</strong> Median value = (6 + 14) ÷ 2 = <strong>10</strong>.<br>
Check: 3 × Center number = 3 × 10 = 30 = Magic constant.`,
      marks: 3,
      rubric: [
        { key: "Magic sum = 30", marks: "1.5 M" },
        { key: "Center number = 10 with median proof", marks: "1.5 M" }
      ]
    },
    {
      category: "HOTS • Number Pattern Puzzle",
      q: "Find the missing number in the sequence: 2, 6, 12, 20, 30, _____, 56. Explain the mathematical rule.",
      ans: `<strong>Pattern Analysis:</strong><br>
• Difference sequence: 6 - 2 = 4, 12 - 6 = 6, 20 - 12 = 8, 30 - 20 = 10.<br>
• The difference increases by +2 each time (consecutive even numbers: 4, 6, 8, 10, 12, 14).<br>
• Next difference must be +12: 30 + 12 = <strong>42</strong>.<br>
• Verification: 42 + 14 = 56. Correct!<br>
<em>Alternative Rule: $n \\times (n + 1)$: 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, <strong>6×7=42</strong>, 7×8=56.</em>`,
      marks: 3,
      rubric: [
        { key: "Missing number = 42", marks: "1.5 M" },
        { key: "Clear mathematical rule (difference sequence or n(n+1))", marks: "1.5 M" }
      ]
    },
    {
      category: "Windmill Blade Rotations",
      q: "A windmill has 4 identical blades arranged symmetrically.<br>(a) What fraction of a turn brings each blade to the position of the next blade?<br>(b) How many degrees of rotation is that?<br>(c) Does the windmill look identical after a 1/4 turn, 1/2 turn, and 3/4 turn?",
      ans: `<strong>Rotational Geometry of 4-Blade Windmill:</strong><br>
• <strong>(a) Fraction of a Turn:</strong> 4 blades = <strong>1/4 turn</strong>.<br>
• <strong>(b) Degrees:</strong> 360° ÷ 4 = <strong>90°</strong>.<br>
• <strong>(c) Symmetry:</strong> <strong>Yes</strong>, it has 4-fold rotational symmetry and looks identical after a 1/4 turn (90°), 1/2 turn (180°), and 3/4 turn (270°).`,
      marks: 3,
      rubric: [
        { key: "Fraction = 1/4 turn", marks: "1.0 M" },
        { key: "Degrees = 90°", marks: "1.0 M" },
        { key: "Identical at 90°, 180°, 270°", marks: "1.0 M" }
      ]
    },
    {
      category: "Rangoli Geometric Tessellation",
      q: "In an Indian rangoli pattern, equilateral triangles and rhombuses are combined to form a star.<br>(a) How many equilateral triangles are required to make a regular hexagon?<br>(b) What is the sum of angles around the central meeting point?",
      ans: `<strong>Geometric Properties:</strong><br>
• <strong>(a) Number of Triangles:</strong> Exactly <strong>6 equilateral triangles</strong> meet at a central vertex to form a regular hexagon.<br>
• <strong>(b) Sum of Angles:</strong> Each equilateral triangle has an angle of 60°. 6 × 60° = <strong>360° (a complete circle)</strong>.`,
      marks: 3,
      rubric: [
        { key: "6 equilateral triangles", marks: "1.5 M" },
        { key: "Sum of angles = 360°", marks: "1.5 M" }
      ]
    },
    {
      category: "Calendar Number Patterns",
      q: "Look at any 3×3 square of dates on a monthly calendar (e.g. dates 1 to 3, 8 to 10, 15 to 17).<br>(a) How can you instantly find the sum of all 9 dates using only the center number?<br>(b) If the center date is 14, what is the sum of all 9 numbers in that 3×3 square?",
      ans: `<strong>Calendar Math Trick:</strong><br>
• <strong>(a) Rule:</strong> Because calendar numbers are symmetrically distributed horizontally (±1) and vertically (±7), the sum of all 9 numbers is always exactly <strong>9 times the center number</strong> ($9 \\times C$).<br>
• <strong>(b) Calculation for Center = 14:</strong> Sum = 9 × 14 = <strong>126</strong>.`,
      marks: 3,
      rubric: [
        { key: "Rule: Sum = 9 × center number", marks: "1.5 M" },
        { key: "Sum = 9 × 14 = 126", marks: "1.5 M" }
      ]
    },
    {
      category: "True or False with Pattern Reasoning",
      q: "State True or False with reasoning:<br>(a) An equilateral triangle looks identical after a 1/2 turn.<br>(b) Any number multiplied by 9 has the sum of its digits equal to 9 or a multiple of 9.<br>(c) A circle has only 4 lines of symmetry.",
      ans: `<strong>Justifications:</strong><br>
• <strong>(a) False:</strong> In a 1/2 turn (180°), an equilateral triangle flips upside down with its base at the top and apex at the bottom.<br>
• <strong>(b) True:</strong> By the divisibility rule for 9, the digital sum of any multiple of 9 is always 9, 18, 27... (a multiple of 9).<br>
• <strong>(c) False:</strong> A circle has <strong>infinite lines of symmetry</strong> (any diameter passing through the center is a line of symmetry).`,
      marks: 3,
      rubric: [
        { key: "Part (a): False with upside-down reason", marks: "1.0 M" },
        { key: "Part (b): True with divisibility rule", marks: "1.0 M" },
        { key: "Part (c): False (infinite lines of symmetry)", marks: "1.0 M" }
      ]
    },
    {
      category: "Comprehensive Pattern Review",
      q: "A student creates a spiral pattern of squares starting with side 1 cm, then 2 cm, then 3 cm, then 5 cm, then 8 cm.<br>(a) What will be the side of the next two squares?<br>(b) What is this famous series called, and what are the areas of the first four squares?",
      ans: `<strong>Fibonacci Square Spirals:</strong><br>
• <strong>(a) Next Sides:</strong> Sum of previous two sides: 5 + 8 = <strong>13 cm</strong>, then 8 + 13 = <strong>21 cm</strong>.<br>
• <strong>(b) Series & Areas:</strong><br>
- Name: <strong>Fibonacci Sequence</strong>.<br>
- Area of 1 cm square: 1 × 1 = <strong>1 cm²</strong>.<br>
- Area of 2 cm square: 2 × 2 = <strong>4 cm²</strong>.<br>
- Area of 3 cm square: 3 × 3 = <strong>9 cm²</strong>.<br>
- Area of 5 cm square: 5 × 5 = <strong>25 cm²</strong>.`,
      marks: 3,
      rubric: [
        { key: "Sides: 13 cm, 21 cm", marks: "1.5 M" },
        { key: "Fibonacci sequence & areas: 1, 4, 9, 25 cm²", marks: "1.5 M" }
      ]
    }
  ],

  mela8: [
    {
      category: "Standard Weights • Balancing Beam Balance",
      q: "(a) How many 200 g weights are needed to balance a 1 kg block of sugar?<br>(b) How many 250 g weights balance a 2 kg weight?<br>(c) A grocer has weights of 500 g, 200 g, and 100 g only. How can he weigh exactly 800 g of dal using minimum weights?",
      ans: `<strong>Weight Balancing (1 kg = 1,000 g):</strong><br>
• <strong>(a) For 1 kg (1,000 g):</strong> 1,000 ÷ 200 = <strong>5 weights of 200 g</strong>.<br>
• <strong>(b) For 2 kg (2,000 g):</strong> 2,000 ÷ 250 = <strong>8 weights of 250 g</strong>.<br>
• <strong>(c) Weighing 800 g:</strong> Combine one 500 g weight, one 200 g weight, and one 100 g weight: 500 + 200 + 100 = <strong>800 g (3 weights total)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 5 weights", marks: "1.0 M" },
        { key: "Part (b): 8 weights", marks: "1.0 M" },
        { key: "Part (c): 500 g + 200 g + 100 g", marks: "1.0 M" }
      ]
    },
    {
      category: "Vegetable Shopping • Multi-Item Bill",
      q: "Mrs. Sharma buys:<br>• 2.5 kg onions at ₹36 per kg<br>• 1.5 kg tomatoes at ₹40 per kg<br>• 750 g ginger at ₹120 per kg<br>(a) Find the cost of each item.<br>(b) Calculate her total bill.<br>(c) If she pays with a ₹500 note, how much change is refunded?",
      ans: `<strong>Cost Calculations:</strong><br>
• <strong>(a) Individual Costs:</strong><br>
- Onions: 2.5 × ₹36 = <strong>₹90</strong>.<br>
- Tomatoes: 1.5 × ₹40 = <strong>₹60</strong>.<br>
- Ginger: 750 g = 0.75 kg. Cost = 0.75 × ₹120 = <strong>₹90</strong>.<br>
• <strong>(b) Total Bill:</strong> ₹90 + ₹60 + ₹90 = <strong>₹240</strong>.<br>
• <strong>(c) Change:</strong> ₹500 - ₹240 = <strong>₹260</strong>.`,
      marks: 3,
      rubric: [
        { key: "Onions ₹90, Tomatoes ₹60, Ginger ₹90", marks: "1.5 M" },
        { key: "Total bill = ₹240", marks: "0.75 M" },
        { key: "Change = ₹260", marks: "0.75 M" }
      ]
    },
    {
      category: "Pan Balance • Subtraction Weighing Trick",
      q: "A grocer has weights of 5 kg and 2 kg only. Explain how he can weigh exactly 3 kg of rice using a two-pan balance in a single measurement.",
      ans: `<strong>Pan Balance Subtraction Principle:</strong><br>
1. Place the <strong>5 kg weight on the left pan</strong>.<br>
2. Place the <strong>2 kg weight on the right pan</strong>.<br>
3. Pour rice into the right pan (alongside the 2 kg weight) until both pans balance perfectly.<br>
4. Since Left Pan = Right Pan:<br>
5 kg = 2 kg + Rice Weight → Rice Weight = 5 kg - 2 kg = <strong>3 kg of rice</strong>.`,
      marks: 3,
      rubric: [
        { key: "5 kg on one pan, 2 kg on other pan", marks: "1.5 M" },
        { key: "5 - 2 = 3 kg balance equation", marks: "1.5 M" }
      ]
    },
    {
      category: "Unit Conversions • Kilograms & Grams",
      q: "Convert:<br>(a) 4 kg 350 g into grams<br>(b) 8,075 g into kilograms and grams<br>(c) 3/4 kg into grams<br>(d) 2.25 kg into grams",
      ans: `<strong>Conversions (1 kg = 1,000 g):</strong><br>
• <strong>(a) 4 kg 350 g:</strong> (4 × 1,000) + 350 = <strong>4,350 g</strong>.<br>
• <strong>(b) 8,075 g:</strong> 8,000 g + 75 g = <strong>8 kg 75 g</strong>.<br>
• <strong>(c) 3/4 kg:</strong> 3/4 of 1,000 = 1,000 × 3 ÷ 4 = <strong>750 g</strong>.<br>
• <strong>(d) 2.25 kg:</strong> 2.25 × 1,000 = <strong>2,250 g</strong>.`,
      marks: 3,
      rubric: [
        { key: "Parts (a) & (b): 4,350 g, 8 kg 75 g", marks: "1.5 M" },
        { key: "Parts (c) & (d): 750 g, 2,250 g", marks: "1.5 M" }
      ]
    },
    {
      category: "Water Tank Capacity • In-Text Problem",
      q: "An overhead rooftop water tank has a capacity of 1,200 litres.<br>(a) A family uses 350 litres for washing, 180 litres for cooking, and 420 litres for bathing daily. How many litres are consumed in total?<br>(b) How many litres of water remain in the tank?",
      ans: `<strong>Water Consumption:</strong><br>
• <strong>(a) Total Used:</strong> 350 L + 180 L + 420 L = <strong>950 litres</strong>.<br>
• <strong>(b) Remaining Water:</strong> 1,200 L - 950 L = <strong>250 litres</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total used = 950 L", marks: "1.5 M" },
        { key: "Remaining = 250 L", marks: "1.5 M" }
      ]
    },
    {
      category: "Grain Bag Packaging • Division",
      q: "A farmer harvests 6 quintals of wheat (1 quintal = 100 kg). He packs the wheat into smaller sacks of 25 kg each.<br>(a) Find the total weight of wheat in kilograms.<br>(b) How many 25 kg sacks does he fill completely?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Total Kilograms:</strong> 6 quintals × 100 kg/quintal = <strong>600 kg</strong>.<br>
• <strong>(b) Number of Sacks:</strong> 600 kg ÷ 25 kg/sack = <strong>24 sacks</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total = 600 kg", marks: "1.5 M" },
        { key: "Sacks = 24", marks: "1.5 M" }
      ]
    },
    {
      category: "Medicine Dropper • Dosage Calculations",
      q: "A doctor prescribes 5 mL of cough syrup 3 times a day for a child for 5 days.<br>(a) How many mL does the child take in one day?<br>(b) What is the total volume of cough syrup needed for the 5-day course?<br>(c) Will a 100 mL bottle be sufficient? How much syrup will remain in the bottle?",
      ans: `<strong>Dosage Calculations:</strong><br>
• <strong>(a) Daily Dose:</strong> 3 times × 5 mL = <strong>15 mL per day</strong>.<br>
• <strong>(b) Total for 5 Days:</strong> 5 days × 15 mL = <strong>75 mL</strong>.<br>
• <strong>(c) Bottle Sufficiency:</strong> <strong>Yes</strong>, 75 mL < 100 mL, so a 100 mL bottle is sufficient.<br>
- Remaining syrup = 100 mL - 75 mL = <strong>25 mL remaining</strong>.`,
      marks: 3,
      rubric: [
        { key: "Daily dose = 15 mL", marks: "1.0 M" },
        { key: "Total 5-day dose = 75 mL", marks: "1.0 M" },
        { key: "Sufficient with 25 mL left", marks: "1.0 M" }
      ]
    },
    {
      category: "School Mid-Day Meal • Ration Accounting",
      q: "In a primary school with 140 students, each student receives 100 g of rice and 30 g of dal daily under the Mid-Day Meal scheme.<br>(a) How many kilograms of rice are cooked daily?<br>(b) How many kilograms of dal are cooked daily?<br>(c) Calculate the total monthly requirement of rice for 22 school working days.",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Daily Rice:</strong> 140 × 100 g = 14,000 g = <strong>14 kg of rice</strong>.<br>
• <strong>(b) Daily Dal:</strong> 140 × 30 g = 4,200 g = <strong>4.2 kg (4 kg 200 g) of dal</strong>.<br>
• <strong>(c) Monthly Rice (22 days):</strong> 22 × 14 kg = <strong>308 kg of rice</strong>.`,
      marks: 3,
      rubric: [
        { key: "Daily rice = 14 kg", marks: "1.0 M" },
        { key: "Daily dal = 4.2 kg", marks: "1.0 M" },
        { key: "Monthly rice = 308 kg", marks: "1.0 M" }
      ]
    },
    {
      category: "Weight of Money • Coin Stacks",
      q: "A new 5-rupee coin weighs 9 grams.<br>(a) What is the weight of a sack containing 1,000 such 5-rupee coins in kilograms?<br>(b) If a bag of 5-rupee coins weighs 4 kg 500 g, how many coins are in the bag?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Weight of 1,000 Coins:</strong> 1,000 × 9 g = 9,000 g = <strong>9 kg</strong>.<br>
• <strong>(b) Number of Coins:</strong><br>
- Total weight = 4 kg 500 g = 4,500 grams.<br>
- Number of coins = 4,500 ÷ 9 g = <strong>500 coins</strong>.`,
      marks: 3,
      rubric: [
        { key: "Weight of 1,000 coins = 9 kg", marks: "1.5 M" },
        { key: "Number of coins = 500", marks: "1.5 M" }
      ]
    },
    {
      category: "Bucket and Mug Problem",
      q: "A bathing bucket has a capacity of 15 litres. A plastic mug holds 300 mL.<br>(a) How many full mugs of water are needed to fill the bucket completely?<br>(b) If 12 mugs of water are taken out of a full bucket, how many litres remain?",
      ans: `<strong>Capacity Calculations (15 L = 15,000 mL):</strong><br>
• <strong>(a) Mugs to Fill:</strong> 15,000 mL ÷ 300 mL = <strong>50 mugs</strong>.<br>
• <strong>(b) Remaining Volume:</strong><br>
- Water removed = 12 × 300 mL = 3,600 mL = 3.6 L.<br>
- Water left = 15 L - 3.6 L = <strong>11.4 litres (11 L 400 mL)</strong>.`,
      marks: 3,
      rubric: [
        { key: "50 mugs to fill", marks: "1.5 M" },
        { key: "Water left = 11.4 L", marks: "1.5 M" }
      ]
    },
    {
      category: "Comparing Heaviness • Metric Units",
      q: "Arrange the following weights from heaviest to lightest:<br>2.8 kg, 2,750 g, 3 kg 50 g, 2,890 g, 3,000 g",
      ans: `<strong>Converting all to Grams:</strong><br>
• 2.8 kg = 2,800 g<br>
• 2,750 g = 2,750 g<br>
• 3 kg 50 g = 3,050 g<br>
• 2,890 g = 2,890 g<br>
• 3,000 g = 3,000 g<br>
Ordering from largest to smallest: 3,050 g > 3,000 g > 2,890 g > 2,800 g > 2,750 g.<br>
<strong>Descending Order: 3 kg 50 g > 3,000 g > 2,890 g > 2.8 kg > 2,750 g</strong>.`,
      marks: 3,
      rubric: [
        { key: "All converted to grams", marks: "1.5 M" },
        { key: "Correct descending order", marks: "1.5 M" }
      ]
    },
    {
      category: "Liquid Medicine Ampoule • Millilitres",
      q: "A nurse has a 50 mL vial of vaccine. Each injection requires a dose of 0.5 mL.<br>(a) How many patients can be vaccinated from one vial?<br>(b) For a vaccination camp of 400 children, how many such vials must be opened?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Doses per Vial:</strong> 50 mL ÷ 0.5 mL = <strong>100 doses (100 patients)</strong>.<br>
• <strong>(b) Vials Needed:</strong> 400 children ÷ 100 doses/vial = <strong>4 vials</strong>.`,
      marks: 3,
      rubric: [
        { key: "100 patients per vial", marks: "1.5 M" },
        { key: "4 vials needed", marks: "1.5 M" }
      ]
    },
    {
      category: "Elephant Weight vs Children Weight",
      q: "A baby elephant weighs 240 kg. A Class 5 child has an average weight of 30 kg.<br>(a) How many children together weigh the same as the baby elephant?<br>(b) If an adult elephant weighs 3,600 kg, how many baby elephants equal the weight of one adult elephant?",
      ans: `<strong>Comparison:</strong><br>
• <strong>(a) Children Equivalent:</strong> 240 kg ÷ 30 kg = <strong>8 children</strong>.<br>
• <strong>(b) Adult vs Baby Elephant:</strong> 3,600 kg ÷ 240 kg = <strong>15 baby elephants</strong>.`,
      marks: 3,
      rubric: [
        { key: "8 children", marks: "1.5 M" },
        { key: "15 baby elephants", marks: "1.5 M" }
      ]
    },
    {
      category: "Teaspoon and Tablespoon Volumes",
      q: "In household cooking: 1 teaspoon holds 5 mL, and 1 tablespoon holds 15 mL.<br>(a) How many teaspoons equal 1 tablespoon?<br>(b) A recipe requires 60 mL of olive oil. How many tablespoons is that?<br>(c) How many teaspoons of vanilla essence are needed to measure 25 mL?",
      ans: `<strong>Kitchen Measurements:</strong><br>
• <strong>(a) Teaspoons in a Tablespoon:</strong> 15 mL ÷ 5 mL = <strong>3 teaspoons</strong>.<br>
• <strong>(b) 60 mL Olive Oil:</strong> 60 ÷ 15 = <strong>4 tablespoons</strong>.<br>
• <strong>(c) 25 mL Vanilla:</strong> 25 ÷ 5 = <strong>5 teaspoons</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 3 teaspoons", marks: "1.0 M" },
        { key: "Part (b): 4 tablespoons", marks: "1.0 M" },
        { key: "Part (c): 5 teaspoons", marks: "1.0 M" }
      ]
    },
    {
      category: "Postal Parcel Weight Tariff",
      q: "India Post parcel charges are: ₹20 for the first 50 grams, and ₹10 for every additional 50 grams (or fraction thereof).<br>(a) Find the postal charge for a book parcel weighing 180 grams.<br>(b) Find the postal charge for a parcel weighing 320 grams.",
      ans: `<strong>Postal Step Tariff:</strong><br>
• <strong>(a) 180 g Parcel:</strong><br>
- First 50 g: ₹20.<br>
- Remaining weight = 180 - 50 = 130 g.<br>
- Additional 50 g slabs = 130 ÷ 50 = 2.6 → 3 slabs.<br>
- Surcharge = 3 × ₹10 = ₹30.<br>
- Total postage = ₹20 + ₹30 = <strong>₹50</strong>.<br>
• <strong>(b) 320 g Parcel:</strong><br>
- First 50 g: ₹20.<br>
- Remaining = 320 - 50 = 270 g.<br>
- Additional slabs = 270 ÷ 50 = 5.4 → 6 slabs.<br>
- Surcharge = 6 × ₹10 = ₹60.<br>
- Total postage = ₹20 + ₹60 = <strong>₹80</strong>.`,
      marks: 3,
      rubric: [
        { key: "180 g parcel = ₹50", marks: "1.5 M" },
        { key: "320 g parcel = ₹80", marks: "1.5 M" }
      ]
    },
    {
      category: "Dripping Tap Water Waste",
      q: "A leaking tap drips 20 mL of water every minute.<br>(a) How many mL of water are wasted in 1 hour?<br>(b) How many litres of water are wasted in a 24-hour day?<br>(c) If water is valued at ₹5 per 1,000 litres, what is the cost of water lost in a month of 30 days?",
      ans: `<strong>Water Wastage Calculations:</strong><br>
• <strong>(a) In 1 Hour (60 min):</strong> 20 mL × 60 = <strong>1,200 mL (1.2 Litres)</strong>.<br>
• <strong>(b) In 1 Day (24 hours):</strong> 1.2 L × 24 = <strong>28.8 litres wasted daily</strong>.<br>
• <strong>(c) In 30 Days:</strong> 28.8 L × 30 = 864 litres.<br>
- Financial loss = (864 ÷ 1,000) × ₹5 = <strong>₹4.32</strong>.`,
      marks: 3,
      rubric: [
        { key: "1 hour = 1.2 L", marks: "1.0 M" },
        { key: "1 day = 28.8 L", marks: "1.0 M" },
        { key: "Monthly wastage = 864 L", marks: "1.0 M" }
      ]
    },
    {
      category: "Weight of Liquids • Water vs Honey",
      q: "A glass jar holds 500 mL of liquid. When filled with pure water, the liquid weighs 500 g. When filled with pure bee honey, the liquid weighs 710 g.<br>(a) Which liquid is denser/heavier for the same volume?<br>(b) By how many grams does 1 litre of honey weigh more than 1 litre of water?",
      ans: `<strong>Density Analysis:</strong><br>
• <strong>(a) Heavier Liquid:</strong> For 500 mL, honey weighs 710 g while water weighs 500 g. Therefore, <strong>honey is denser and heavier</strong>.<br>
• <strong>(b) Difference per Litre (1,000 mL):</strong><br>
- Weight of 1 L water = 2 × 500 g = 1,000 g.<br>
- Weight of 1 L honey = 2 × 710 g = 1,420 g.<br>
- Difference = 1,420 g - 1,000 g = <strong>420 grams heavier per litre</strong>.`,
      marks: 3,
      rubric: [
        { key: "Honey is heavier", marks: "1.5 M" },
        { key: "1 L honey is 420 g heavier than water", marks: "1.5 M" }
      ]
    },
    {
      category: "Flour Mill Packing • Sacks and Bags",
      q: "A flour mill processes 1,500 kg of wheat into atta. 5% weight is lost as bran during husk separation.<br>(a) Find the weight of atta produced.<br>(b) If the atta is packed into bags of 10 kg each, how many bags are packed?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Atta Produced:</strong><br>
- Loss = 5% of 1,500 kg = 75 kg.<br>
- Net atta = 1,500 kg - 75 kg = <strong>1,425 kg</strong>.<br>
• <strong>(b) Bags Packed:</strong> 1,425 kg ÷ 10 kg/bag = <strong>142 full bags (with 5 kg remaining)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Net atta = 1,425 kg", marks: "1.5 M" },
        { key: "142 bags with 5 kg remainder", marks: "1.5 M" }
      ]
    },
    {
      category: "HOTS • Weight Riddle",
      q: "A brick balances with 3/4 of a brick plus 3/4 of a kilogram on a beam balance. How much does the brick weigh in kilograms?",
      ans: `<strong>Algebraic Derivation:</strong><br>
1. Let the weight of 1 whole brick be $W$ kg.<br>
2. Given balance condition: $W = \\frac{3}{4}W + \\frac{3}{4}\\text{ kg}$.<br>
3. Subtract $\\frac{3}{4}W$ from both sides:<br>
$W - \\frac{3}{4}W = \\frac{3}{4}\\text{ kg} \\rightarrow \\frac{1}{4}W = \\frac{3}{4}\\text{ kg}$.<br>
4. Multiply both sides by 4: $W = 4 \\times \\frac{3}{4} = \\mathbf{3\\text{ kg}}$.<br>
5. <strong>Verification:</strong> 3/4 of 3 kg = 2.25 kg. 2.25 kg + 0.75 kg = 3.0 kg. Balanced!`,
      marks: 3,
      rubric: [
        { key: "Equation: W = (3/4)W + 0.75", marks: "1.5 M" },
        { key: "W = 3 kg with verification", marks: "1.5 M" }
      ]
    },
    {
      category: "Juice Dispenser Refill",
      q: "A school sports day beverage cooler holds 25 litres of fresh lemon squash. The school serves the drink in 200 mL paper cups.<br>(a) How many students can be served from one full cooler?<br>(b) If 160 cups are consumed, how many litres of lemon squash remain in the cooler?",
      ans: `<strong>Calculations (25 L = 25,000 mL):</strong><br>
• <strong>(a) Total Cups:</strong> 25,000 mL ÷ 200 mL = <strong>125 cups</strong>.<br>
• <strong>(b) Consumption Analysis:</strong> Since 1 cooler holds only 125 cups, serving 160 cups requires more than 1 cooler (32 litres total). For 125 cups from 1 cooler, all 25 L are used. If 160 cups were served from a larger reservoir, 160 × 200 mL = 32 L were used.`,
      marks: 3,
      rubric: [
        { key: "125 cups per 25 L cooler", marks: "1.5 M" },
        { key: "160 cups requires 32 L (or 0 left with refill noted)", marks: "1.5 M" }
      ]
    },
    {
      category: "Fuel Weight in Airplanes",
      q: "Aviation turbine fuel has a density such that 1 litre weighs approximately 800 grams (0.8 kg).<br>(a) Find the weight in kg of 500 litres of aviation fuel.<br>(b) A plane takes on 4,000 kg of fuel. How many litres were pumped into its wings?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Weight of 500 L:</strong> 500 L × 0.8 kg/L = <strong>400 kg</strong>.<br>
• <strong>(b) Litres for 4,000 kg:</strong> 4,000 kg ÷ 0.8 kg/L = <strong>5,000 litres</strong>.`,
      marks: 3,
      rubric: [
        { key: "500 L weighs 400 kg", marks: "1.5 M" },
        { key: "4,000 kg equals 5,000 L", marks: "1.5 M" }
      ]
    },
    {
      category: "Mental Math • Capacity Halving and Doubling",
      q: "Calculate quickly:<br>(a) Half of 1.5 Litres in millilitres<br>(b) Double of 750 mL in Litres<br>(c) 1/4 of 1 Litre in millilitres",
      ans: `<strong>Mental Calculations:</strong><br>
• <strong>(a) Half of 1.5 L:</strong> 1,500 mL ÷ 2 = <strong>750 mL</strong>.<br>
• <strong>(b) Double of 750 mL:</strong> 750 × 2 = 1,500 mL = <strong>1.5 Litres</strong>.<br>
• <strong>(c) 1/4 of 1 L:</strong> 1,000 mL ÷ 4 = <strong>250 mL</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 750 mL", marks: "1.0 M" },
        { key: "Part (b): 1.5 L", marks: "1.0 M" },
        { key: "Part (c): 250 mL", marks: "1.0 M" }
      ]
    },
    {
      category: "True or False with Measurement Reason",
      q: "State True or False with reasoning:<br>(a) 1,500 grams is heavier than 1.45 kilograms.<br>(b) 1 millilitre equals 1 cubic centimetre (1 cm³).<br>(c) A standard 200 mL glass holds more than 1/4 litre of water.",
      ans: `<strong>Justifications:</strong><br>
• <strong>(a) True:</strong> 1.45 kg = 1,450 g. Since 1,500 g > 1,450 g, it is heavier.<br>
• <strong>(b) True:</strong> By scientific and metric definition, 1 mL is exactly the volume of a cube with 1 cm sides (1 cm × 1 cm × 1 cm = 1 cm³).<br>
• <strong>(c) False:</strong> 1/4 Litre = 1,000 ÷ 4 = 250 mL. Since 200 mL < 250 mL, it holds less than 1/4 litre.`,
      marks: 3,
      rubric: [
        { key: "Part (a): True with gram comparison", marks: "1.0 M" },
        { key: "Part (b): True with 1 cm³ definition", marks: "1.0 M" },
        { key: "Part (c): False (200 mL < 250 mL)", marks: "1.0 M" }
      ]
    },
    {
      category: "Comprehensive Chapter Review",
      q: "A relief camp receives a consignment of provisions:<br>• 1.2 tonnes of rice (1 tonne = 1,000 kg)<br>• 450 kg of pulses<br>• 200 cans of cooking oil of 5 Litres each<br>(a) Find the total weight of food grains (rice + pulses) in kilograms.<br>(b) Find the total volume of cooking oil in Litres.<br>(c) If 500 families share the provisions equally, how much rice and oil does each family receive?",
      ans: `<strong>Relief Camp Provision Distribution:</strong><br>
• <strong>(a) Food Grains Weight:</strong><br>
- Rice = 1.2 × 1,000 kg = 1,200 kg.<br>
- Total grains = 1,200 kg + 450 kg = <strong>1,650 kg</strong>.<br>
• <strong>(b) Total Oil:</strong> 200 cans × 5 L = <strong>1,000 Litres</strong>.<br>
• <strong>(c) Per Family Share (500 Families):</strong><br>
- Rice = 1,200 kg ÷ 500 = <strong>2.4 kg of rice per family</strong>.<br>
- Oil = 1,000 L ÷ 500 = <strong>2 Litres of oil per family</strong>.`,
      marks: 3,
      rubric: [
        { key: "Grains = 1,650 kg", marks: "1.0 M" },
        { key: "Oil = 1,000 L", marks: "1.0 M" },
        { key: "Per family: 2.4 kg rice, 2 L oil", marks: "1.0 M" }
      ]
    }
  ]
};

module.exports = { melaCh6_7_8 };
