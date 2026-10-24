// Official NCERT Class 5 Mathematics: "Maths Mela" - Chapters 1 to 5 Authentic Questions
// Fully aligned with NEP 2020 / NCF 2023 Curriculum & CBSE Marking Scheme 2026-27

const melaPart1 = {
  mela1: [
    {
      category: "Indian Numeration • Periods & Commas",
      q: "Read the following numbers, insert commas according to the Indian System of Numeration, and write their number names:<br>(a) 8045<br>(b) 20869<br>(c) 75034<br>(d) 10599",
      ans: `<strong>Indian System Commas & Number Names:</strong><br>
• <strong>(a) 8045:</strong> Comma insertion: <strong>8,045</strong>. Number Name: <strong>Eight thousand forty-five</strong>.<br>
• <strong>(b) 20869:</strong> Comma insertion: <strong>20,869</strong>. Number Name: <strong>Twenty thousand eight hundred sixty-nine</strong>.<br>
• <strong>(c) 75034:</strong> Comma insertion: <strong>75,034</strong>. Number Name: <strong>Seventy-five thousand thirty-four</strong>.<br>
• <strong>(d) 10599:</strong> Comma insertion: <strong>10,599</strong>. Number Name: <strong>Ten thousand five hundred ninety-nine</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 8,045 & Number name", marks: "0.75 M" },
        { key: "Part (b): 20,869 & Number name", marks: "0.75 M" },
        { key: "Part (c): 75,034 & Number name", marks: "0.75 M" },
        { key: "Part (d): 10,599 & Number name", marks: "0.75 M" }
      ]
    },
    {
      category: "Number Sequences • Pattern Finding",
      q: "Find the missing terms in the following number patterns by identifying the sequence rule:<br>(a) 456, 567, 678, _____, _____<br>(b) 10,100, 10,200, 10,300, _____, _____, 10,600<br>(c) 73,005, 72,004, 71,003, _____, _____<br>(d) 2,500, 5,000, 7,500, _____, _____",
      ans: `<strong>Pattern Rules & Solutions:</strong><br>
• <strong>(a) 456, 567, 678:</strong> Rule is add 111 (+111). Next: 678 + 111 = <strong>789</strong>; then 789 + 111 = <strong>900</strong>.<br>
• <strong>(b) 10,100, 10,200, 10,300:</strong> Rule is add 100 (+100). Next: <strong>10,400</strong>, then <strong>10,500</strong>.<br>
• <strong>(c) 73,005, 72,004, 71,003:</strong> Rule is subtract 1,001 (-1,001). Next: <strong>70,002</strong>, then <strong>69,001</strong>.<br>
• <strong>(d) 2,500, 5,000, 7,500:</strong> Rule is add 2,500 (+2,500). Next: <strong>10,000</strong>, then <strong>12,500</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 789, 900", marks: "0.75 M" },
        { key: "Part (b): 10,400, 10,500", marks: "0.75 M" },
        { key: "Part (c): 70,002, 69,001", marks: "0.75 M" },
        { key: "Part (d): 10,000, 12,500", marks: "0.75 M" }
      ]
    },
    {
      category: "Comparing Numbers • Ordering",
      q: "(a) Compare using > or < signs: 68,950 and 68,905.<br>(b) Arrange in ascending order: 23,516; 52,823; 30,512; 30,125; 42,222.<br>(c) Riya took the number 26,053 and swapped two digits to make a new number between 50,000 and 60,000. Which digits did she swap, and what is the new number?",
      ans: `<strong>Step-by-Step Working:</strong><br>
• <strong>(a) Comparison:</strong> In ten-thousands, thousands, and hundreds places, both numbers are equal (6, 8, 9). Looking at tens place, 5 > 0. Therefore: <strong>68,950 > 68,905</strong>.<br>
• <strong>(b) Ascending Order:</strong> Smallest to largest: <strong>23,516 < 30,125 < 30,512 < 42,222 < 52,823</strong>.<br>
• <strong>(c) Digit Swap:</strong> To get a number in the 50,000s, the ten-thousands digit (2) must be replaced by 5. Swapping digits 2 and 5 gives: <strong>56,023</strong> (which lies between 50,000 and 60,000).`,
      marks: 3,
      rubric: [
        { key: "Part (a): 68,950 > 68,905", marks: "1.0 M" },
        { key: "Part (b): Correct ascending order", marks: "1.0 M" },
        { key: "Part (c): Swapped 2 & 5 to get 56,023", marks: "1.0 M" }
      ]
    },
    {
      category: "Travel Arithmetic • Distance & Speed",
      q: "A family travels from New Delhi to Jaipur covering 280 km in 5 hours, then from Jaipur to Udaipur covering 395 km in 7 hours.<br>(a) Find the total distance traveled.<br>(b) Find their average speed during the New Delhi to Jaipur journey.<br>(c) Find the total travel time for the entire journey.",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Total Distance:</strong> 280 km + 395 km = <strong>675 km</strong>.<br>
• <strong>(b) Average Speed (Delhi to Jaipur):</strong> Speed = Distance ÷ Time = 280 ÷ 5 = <strong>56 km/h</strong>.<br>
• <strong>(c) Total Travel Time:</strong> 5 hours + 7 hours = <strong>12 hours</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total distance = 675 km", marks: "1.0 M" },
        { key: "Speed calculation = 56 km/h", marks: "1.0 M" },
        { key: "Total travel time = 12 hours", marks: "1.0 M" }
      ]
    },
    {
      category: "Forming Numbers • Place Value Rules",
      q: "(a) Using the digits 3, 0, 8, 5, 2 only once each, form the greatest 5-digit number and the smallest 5-digit number.<br>(b) Calculate the difference between the greatest and smallest numbers formed.",
      ans: `<strong>Formation & Difference:</strong><br>
• <strong>Greatest 5-digit number:</strong> Arrange digits in descending order: <strong>85,320</strong>.<br>
• <strong>Smallest 5-digit number:</strong> 0 cannot be the leading digit. Smallest non-zero digit is 2, followed by 0, then ascending digits: <strong>20,358</strong>.<br>
• <strong>(b) Difference:</strong> 85,320 - 20,358 = <strong>64,962</strong>.`,
      marks: 3,
      rubric: [
        { key: "Greatest number = 85,320", marks: "1.0 M" },
        { key: "Smallest number = 20,358", marks: "1.0 M" },
        { key: "Difference = 64,962", marks: "1.0 M" }
      ]
    },
    {
      category: "Place Value Expansion • 6-Digit Numbers",
      q: "Write the number 8,45,219 in words according to the Indian Numbering System and show its place value expansion table.",
      ans: `<strong>1. Number in Words:</strong> Eight Lakh Forty-Five Thousand Two Hundred Nineteen.<br><br>
<strong>2. Place Value Expansion Table:</strong><br>
• Lakhs (L): 8 × 1,00,000 = 8,00,000<br>
• Ten Thousands (TTh): 4 × 10,000 = 40,000<br>
• Thousands (Th): 5 × 1,000 = 5,000<br>
• Hundreds (H): 2 × 100 = 200<br>
• Tens (T): 1 × 10 = 10<br>
• Ones (O): 9 × 1 = 9<br>
<strong>Expanded Notation:</strong> 8,00,000 + 40,000 + 5,000 + 200 + 10 + 9.`,
      marks: 3,
      rubric: [
        { key: "Correct word form", marks: "1.5 M" },
        { key: "Accurate place value table and expanded form", marks: "1.5 M" }
      ]
    },
    {
      category: "Place Value Comparison • City Populations",
      q: "The population of City A is 7,85,420 and City B is 7,82,990.<br>(a) Which city has a greater population?<br>(b) By how much is it greater?<br>(c) Round both populations to the nearest thousand.",
      ans: `<strong>Analysis:</strong><br>
• <strong>(a) Comparison:</strong> Lakhs (7) and Ten-Thousands (8) are equal. At Thousands place, City A has 5 and City B has 2. Since 5 > 2, <strong>City A has a greater population (7,85,420 > 7,82,990)</strong>.<br>
• <strong>(b) Difference:</strong> 7,85,420 - 7,82,990 = <strong>2,430 people</strong>.<br>
• <strong>(c) Rounding to Nearest Thousand:</strong><br>
- City A (7,85,420): Hundreds digit is 4 (< 5) → <strong>7,85,000</strong>.<br>
- City B (7,82,990): Hundreds digit is 9 (≥ 5) → <strong>7,83,000</strong>.`,
      marks: 3,
      rubric: [
        { key: "Correct comparison", marks: "1.0 M" },
        { key: "Difference = 2,430", marks: "1.0 M" },
        { key: "Accurate rounding (7,85,000 & 7,83,000)", marks: "1.0 M" }
      ]
    },
    {
      category: "Number Operations • Predecessor & Successor",
      q: "Find the predecessor and successor of the largest 6-digit number. What is their difference?",
      ans: `<strong>Step-by-Step Solution:</strong><br>
1. <strong>Largest 6-digit number:</strong> 9,99,999.<br>
• <strong>Predecessor (Number - 1):</strong> 9,99,999 - 1 = <strong>9,99,998</strong>.<br>
• <strong>Successor (Number + 1):</strong> 9,99,999 + 1 = <strong>10,00,000</strong> (Ten Lakhs, smallest 7-digit number).<br>
2. <strong>Difference:</strong> 10,00,000 - 9,99,998 = <strong>2</strong>.<br>
<em>Mathematical property: The difference between the successor and predecessor of any whole number is always 2.</em>`,
      marks: 3,
      rubric: [
        { key: "Correct predecessor and successor", marks: "2.0 M" },
        { key: "Accurate difference = 2", marks: "1.0 M" }
      ]
    },
    {
      category: "Rounding Off • Real-World Context",
      q: "Round off the following vehicle odometer readings to the nearest hundred and nearest thousand:<br>(a) 43,267 km<br>(b) 89,849 km<br>(c) 15,092 km",
      ans: `<strong>Rounding Calculations:</strong><br>
• <strong>(a) 43,267 km:</strong><br>
- Nearest 100: Tens digit is 6 (≥ 5) → <strong>43,300 km</strong>.<br>
- Nearest 1,000: Hundreds digit is 2 (< 5) → <strong>43,000 km</strong>.<br>
• <strong>(b) 89,849 km:</strong><br>
- Nearest 100: Tens digit is 4 (< 5) → <strong>89,800 km</strong>.<br>
- Nearest 1,000: Hundreds digit is 8 (≥ 5) → <strong>90,000 km</strong>.<br>
• <strong>(c) 15,092 km:</strong><br>
- Nearest 100: Tens digit is 9 (≥ 5) → <strong>15,100 km</strong>.<br>
- Nearest 1,000: Hundreds digit is 0 (< 5) → <strong>15,000 km</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a) rounding", marks: "1.0 M" },
        { key: "Part (b) rounding", marks: "1.0 M" },
        { key: "Part (c) rounding", marks: "1.0 M" }
      ]
    },
    {
      category: "Travel Budget • Railway Timetable",
      q: "The train distance from Delhi to Mumbai is 1,384 km. The Rajdhani Express covers this distance in 16 hours.<br>(a) Find the average speed of the train in km per hour.<br>(b) If a passenger ticket costs ₹2,150, what is the total fare collected from a coach of 54 passengers?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Average Speed:</strong> Speed = Distance ÷ Time = 1,384 ÷ 16 = <strong>86.5 km/h</strong>.<br>
• <strong>(b) Total Fare:</strong> Number of passengers × Fare per ticket = 54 × ₹2,150 = <strong>₹1,16,100</strong>.`,
      marks: 3,
      rubric: [
        { key: "Speed calculation: 1384 ÷ 16 = 86.5 km/h", marks: "1.5 M" },
        { key: "Total fare: 54 × 2150 = ₹1,16,100", marks: "1.5 M" }
      ]
    },
    {
      category: "Number Line • Interval Estimation",
      q: "On a number line marked from 50,000 to 60,000 with major ticks at intervals of 2,000:<br>(a) How many equal subdivisions lie between 50,000 and 60,000?<br>(b) Between which two markings does 57,400 lie?<br>(c) Which major marking is 57,400 closest to?",
      ans: `<strong>Number Line Analysis:</strong><br>
• <strong>(a) Subdivisions:</strong> Total interval = 60,000 - 50,000 = 10,000. Subdivisions = 10,000 ÷ 2,000 = <strong>5 equal intervals</strong> (50,000; 52,000; 54,000; 56,000; 58,000; 60,000).<br>
• <strong>(b) Position:</strong> 57,400 lies between <strong>56,000 and 58,000</strong>.<br>
• <strong>(c) Proximity:</strong> Distance to 56,000 = 57,400 - 56,000 = 1,400. Distance to 58,000 = 58,000 - 57,400 = 600. Since 600 < 1,400, it is closest to <strong>58,000</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 5 intervals identified", marks: "1.0 M" },
        { key: "Part (b): Between 56,000 and 58,000", marks: "1.0 M" },
        { key: "Part (c): Closest to 58,000", marks: "1.0 M" }
      ]
    },
    {
      category: "Mental Arithmetic • Number Puzzles",
      q: "I am a 5-digit number. My ten-thousands digit is 7. My thousands digit is 3 less than ten-thousands digit. My hundreds digit is 0. My tens digit is double my thousands digit, and my ones digit is 1. What number am I?",
      ans: `<strong>Deduction Step-by-Step:</strong><br>
1. Ten-thousands digit = <strong>7</strong>.<br>
2. Thousands digit = 7 - 3 = <strong>4</strong>.<br>
3. Hundreds digit = <strong>0</strong>.<br>
4. Tens digit = 2 × 4 = <strong>8</strong>.<br>
5. Ones digit = <strong>1</strong>.<br>
<strong>The secret number is 74,081</strong> (Seventy-four thousand eighty-one).`,
      marks: 3,
      rubric: [
        { key: "Correct deduction of individual place values", marks: "1.5 M" },
        { key: "Final number: 74,081", marks: "1.5 M" }
      ]
    },
    {
      category: "Distance Comparison • Highway Markers",
      q: "A highway distance stone shows: Chandigarh 145 km, Shimla 260 km, Manali 495 km from Delhi.<br>(a) What is the distance between Chandigarh and Shimla?<br>(b) How much further is Manali from Chandigarh than Shimla is from Chandigarh?<br>(c) If an electric bus travels 45 km per hour, how long will it take to reach Shimla from Chandigarh?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Distance Chandigarh to Shimla:</strong> 260 km - 145 km = <strong>115 km</strong>.<br>
• <strong>(b) Manali to Chandigarh vs Shimla to Chandigarh:</strong><br>
- Manali to Chandigarh = 495 km - 145 km = 350 km.<br>
- Extra distance = 350 km - 115 km = <strong>235 km</strong>.<br>
• <strong>(c) Travel Time:</strong> Time = Distance ÷ Speed = 115 ÷ 45 = 2.55 hours = <strong>2 hours 33 minutes</strong> (approx 2.56 h).`,
      marks: 3,
      rubric: [
        { key: "Part (a): 115 km", marks: "1.0 M" },
        { key: "Part (b): 235 km extra", marks: "1.0 M" },
        { key: "Part (c): Time calculation (approx 2 h 33 min)", marks: "1.0 M" }
      ]
    },
    {
      category: "Word Problem • Flight Fuel & Passengers",
      q: "An airliner carries 180 passengers from New Delhi to Bengaluru (distance 1,740 km).<br>(a) If each ticket is priced at ₹4,500, find the total revenue collected.<br>(b) The flight consumes 4 litres of aviation fuel per kilometre. How many litres of fuel are needed for the one-way flight?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Total Ticket Revenue:</strong> 180 × ₹4,500 = <strong>₹8,10,000</strong>.<br>
• <strong>(b) Fuel Required:</strong> 1,740 km × 4 L/km = <strong>6,960 litres</strong>.`,
      marks: 3,
      rubric: [
        { key: "Ticket revenue: 180 × 4,500 = ₹8,10,000", marks: "1.5 M" },
        { key: "Fuel: 1740 × 4 = 6,960 L", marks: "1.5 M" }
      ]
    },
    {
      category: "Indian vs International System • Comparison",
      q: "Write the number 450320 in:<br>(a) Indian System with commas and number name.<br>(b) International System with commas and number name.<br>(c) How many thousands make 1 Lakh?",
      ans: `<strong>System Comparison:</strong><br>
• <strong>(a) Indian System:</strong> <strong>4,50,320</strong> → Four Lakh Fifty Thousand Three Hundred Twenty.<br>
• <strong>(b) International System:</strong> <strong>450,320</strong> → Four Hundred Fifty Thousand Three Hundred Twenty.<br>
• <strong>(c) Equivalence:</strong> 1 Lakh = 1,00,000 = 100 × 1,000 = <strong>100 thousands</strong>.`,
      marks: 3,
      rubric: [
        { key: "Indian system: 4,50,320 and name", marks: "1.0 M" },
        { key: "International system: 450,320 and name", marks: "1.0 M" },
        { key: "1 Lakh = 100 thousands", marks: "1.0 M" }
      ]
    },
    {
      category: "HOTS • Digit Value Puzzle",
      q: "In the number 5,75,425, what is the sum of the place values of the digit '5' appearing in all three positions?",
      ans: `<strong>Finding Place Values of 5:</strong><br>
• First 5 (Lakhs place): 5 × 1,00,000 = 5,00,000.<br>
• Second 5 (Thousands place): 5 × 1,000 = 5,000.<br>
• Third 5 (Ones place): 5 × 1 = 5.<br>
• <strong>Sum of place values:</strong> 5,00,000 + 5,000 + 5 = <strong>5,05,005</strong>.`,
      marks: 3,
      rubric: [
        { key: "Identifying 500,000; 5,000; and 5", marks: "1.5 M" },
        { key: "Sum = 5,05,005", marks: "1.5 M" }
      ]
    },
    {
      category: "In-Text Activity • Travel Log",
      q: "A family maintained a travel odometer log:<br>• Start at Home: 12,450 km<br>• Lunch stop at Highway Dhaba: 12,680 km<br>• Evening Arrival at Hill Resort: 12,910 km<br>(a) Find distance covered before lunch and after lunch.<br>(b) Was the travel distance split equally before and after lunch?",
      ans: `<strong>Analysis:</strong><br>
• Distance before lunch = 12,680 - 12,450 = <strong>230 km</strong>.<br>
• Distance after lunch = 12,910 - 12,680 = <strong>230 km</strong>.<br>
• <strong>(b) Conclusion:</strong> Yes, both legs of the journey covered exactly <strong>230 km each</strong>, so the travel distance was split perfectly equally.`,
      marks: 3,
      rubric: [
        { key: "Before lunch: 230 km", marks: "1.0 M" },
        { key: "After lunch: 230 km", marks: "1.0 M" },
        { key: "Valid affirmative conclusion", marks: "1.0 M" }
      ]
    },
    {
      category: "Place Value • Digit Interchange",
      q: "A cashier entered ₹45,290 into the computer by mistake instead of ₹42,590.<br>(a) Which two digits were interchanged?<br>(b) How much extra amount was recorded?<br>(c) In which place values did this error occur?",
      ans: `<strong>Error Analysis:</strong><br>
• <strong>(a) Interchanged Digits:</strong> Digits <strong>5 and 2</strong> were interchanged.<br>
• <strong>(b) Excess Amount:</strong> ₹45,290 - ₹42,590 = <strong>₹2,700</strong>.<br>
• <strong>(c) Place Values:</strong> The error occurred between the <strong>Thousands place</strong> and <strong>Hundreds place</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): Digits 5 and 2", marks: "1.0 M" },
        { key: "Part (b): Difference ₹2,700", marks: "1.0 M" },
        { key: "Part (c): Thousands & Hundreds", marks: "1.0 M" }
      ]
    },
    {
      category: "Real-Life Application • Toll Plaza Data",
      q: "At a national highway toll plaza, 3,450 cars passed on Monday, 4,120 cars on Tuesday, and 2,980 cars on Wednesday.<br>(a) Find the total number of cars that passed over the three days.<br>(b) If each car paid ₹85 as toll, calculate the total collection on Tuesday.",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Total Cars:</strong> 3,450 + 4,120 + 2,980 = <strong>10,550 cars</strong>.<br>
• <strong>(b) Tuesday Toll Collection:</strong> 4,120 cars × ₹85 = <strong>₹3,50,200</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total cars = 10,550", marks: "1.5 M" },
        { key: "Tuesday revenue = ₹3,50,200", marks: "1.5 M" }
      ]
    },
    {
      category: "Number Logic • Predecessor Riddle",
      q: "The predecessor of a number $X$ is 99,999. (a) What is the number $X$? (b) How many digits does $X$ have? (c) What is the successor of $X$?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Finding X:</strong> Predecessor = X - 1 = 99,999 → X = 99,999 + 1 = <strong>1,00,000 (One Lakh)</strong>.<br>
• <strong>(b) Number of Digits:</strong> 1,00,000 has <strong>6 digits</strong> (it is the smallest 6-digit number).<br>
• <strong>(c) Successor of X:</strong> 1,00,000 + 1 = <strong>1,00,001</strong> (One Lakh One).`,
      marks: 3,
      rubric: [
        { key: "Part (a): X = 1,00,000", marks: "1.0 M" },
        { key: "Part (b): 6 digits", marks: "1.0 M" },
        { key: "Part (c): Successor = 1,00,001", marks: "1.0 M" }
      ]
    },
    {
      category: "Travel Estimation • Walking vs Cycling",
      q: "Rohan's school is 3,600 metres from his house.<br>(a) Express this distance in kilometres.<br>(b) Rohan walks at 60 metres per minute. How many minutes does he take to walk to school?<br>(c) If he rides his bicycle at 180 metres per minute, how much time does he save?",
      ans: `<strong>Steps & Solutions:</strong><br>
• <strong>(a) In Kilometres:</strong> 3,600 m ÷ 1,000 = <strong>3.6 km</strong>.<br>
• <strong>(b) Walking Time:</strong> 3,600 ÷ 60 = <strong>60 minutes (1 hour)</strong>.<br>
• <strong>(c) Cycling Time & Time Saved:</strong><br>
- Cycling time = 3,600 ÷ 180 = 20 minutes.<br>
- Time saved = 60 min - 20 min = <strong>40 minutes saved</strong>.`,
      marks: 3,
      rubric: [
        { key: "Distance: 3.6 km", marks: "1.0 M" },
        { key: "Walking: 60 minutes", marks: "1.0 M" },
        { key: "Time saved: 40 minutes", marks: "1.0 M" }
      ]
    },
    {
      category: "Mental Math • Quick Multiplications",
      q: "Evaluate using place value breakdown:<br>(a) 250 × 40<br>(b) 1,200 × 5<br>(c) 99 × 35 (using 100 × 35 - 35)",
      ans: `<strong>Mental Math Strategies:</strong><br>
• <strong>(a) 250 × 40:</strong> 25 × 4 = 100, append two zeros → <strong>10,000</strong>.<br>
• <strong>(b) 1,200 × 5:</strong> 12 × 5 = 60, append two zeros → <strong>6,000</strong>.<br>
• <strong>(c) 99 × 35:</strong> (100 - 1) × 35 = (100 × 35) - (1 × 35) = 3,500 - 35 = <strong>3,465</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 10,000", marks: "1.0 M" },
        { key: "Part (b): 6,000", marks: "1.0 M" },
        { key: "Part (c): 3,465 with distributive working", marks: "1.0 M" }
      ]
    },
    {
      category: "Practical Application • Bus Capacity",
      q: "A state transport bus has 52 passenger seats. For an inter-city tour, 380 people register.<br>(a) How many buses are required to seat all passengers comfortably?<br>(b) How many vacant seats will remain in the last bus?",
      ans: `<strong>Division with Remainders:</strong><br>
• 380 ÷ 52: 52 × 7 = 364 passengers.<br>
• Remaining passengers = 380 - 364 = 16 passengers.<br>
• <strong>(a) Buses Required:</strong> Since 16 passengers cannot be left behind, 7 + 1 = <strong>8 buses are needed</strong>.<br>
• <strong>(b) Vacant Seats in 8th Bus:</strong> 52 - 16 = <strong>36 vacant seats</strong>.`,
      marks: 3,
      rubric: [
        { key: "Division: 380 ÷ 52 gives quotient 7, remainder 16", marks: "1.5 M" },
        { key: "Total 8 buses & 36 vacant seats", marks: "1.5 M" }
      ]
    },
    {
      category: "CBSE Revision • Comprehensive Problem",
      q: "A book publisher prints 25,000 copies of a Class 5 textbook.<br>(a) If 18,450 copies are dispatched to government schools and 4,820 copies to private bookstores, how many copies remain in the warehouse?<br>(b) Write the number of remaining copies in words.",
      ans: `<strong>Calculations:</strong><br>
• Total books dispatched = 18,450 + 4,820 = 23,270 copies.<br>
• <strong>(a) Remaining Copies:</strong> 25,000 - 23,270 = <strong>1,730 copies</strong>.<br>
• <strong>(b) In Words:</strong> <strong>One thousand seven hundred thirty</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total dispatched = 23,270", marks: "1.0 M" },
        { key: "Remaining copies = 1,730", marks: "1.0 M" },
        { key: "In words: One thousand seven hundred thirty", marks: "1.0 M" }
      ]
    }
  ],

  mela2: [
    {
      category: "Visual Fractions • Shaded Parts",
      q: "In each of the following figures, identify the fraction represented by the shaded region:<br>(a) A circle divided into 8 equal sectors with 3 shaded.<br>(b) A rectangle divided into 12 equal squares with 7 shaded.<br>(c) A strip of 10 equal parts with 4 unshaded. What fraction is shaded?",
      ans: `<strong>Fraction Identification:</strong><br>
• <strong>(a) Circle:</strong> Total parts = 8, Shaded = 3. Fraction = <strong>3/8 (three-eighths)</strong>.<br>
• <strong>(b) Rectangle:</strong> Total parts = 12, Shaded = 7. Fraction = <strong>7/12 (seven-twelfths)</strong>.<br>
• <strong>(c) Strip:</strong> Total parts = 10. Shaded parts = 10 - 4 = 6. Fraction = 6/10 = <strong>3/5 (three-fifths)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 3/8", marks: "1.0 M" },
        { key: "Part (b): 7/12", marks: "1.0 M" },
        { key: "Part (c): 6/10 or 3/5", marks: "1.0 M" }
      ]
    },
    {
      category: "Equivalent Fractions • Multiplication & Division",
      q: "Find three equivalent fractions for each of the following:<br>(a) 3/4<br>(b) 2/7<br>(c) 18/24 (using division/simplification)",
      ans: `<strong>Finding Equivalent Fractions:</strong><br>
• <strong>(a) 3/4:</strong><br>
- (3 × 2)/(4 × 2) = <strong>6/8</strong><br>
- (3 × 3)/(4 × 3) = <strong>9/12</strong><br>
- (3 × 4)/(4 × 4) = <strong>12/16</strong>.<br>
• <strong>(b) 2/7:</strong><br>
- (2 × 2)/(7 × 2) = <strong>4/14</strong><br>
- (2 × 3)/(7 × 3) = <strong>6/21</strong><br>
- (2 × 5)/(7 × 5) = <strong>10/35</strong>.<br>
• <strong>(c) 18/24:</strong><br>
- Divide by 2: (18 ÷ 2)/(24 ÷ 2) = <strong>9/12</strong><br>
- Divide by 3: (18 ÷ 3)/(24 ÷ 3) = <strong>6/8</strong><br>
- Divide by 6: (18 ÷ 6)/(24 ÷ 6) = <strong>3/4 (simplest form)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a) equivalent fractions", marks: "1.0 M" },
        { key: "Part (b) equivalent fractions", marks: "1.0 M" },
        { key: "Part (c) simplified equivalent fractions", marks: "1.0 M" }
      ]
    },
    {
      category: "Comparing Fractions • Cross Multiplication",
      q: "Compare the following pairs of fractions using > or < signs:<br>(a) 3/5 and 4/7<br>(b) 5/8 and 7/12<br>(c) 2/3 and 8/12",
      ans: `<strong>Comparison by Cross Multiplication:</strong><br>
• <strong>(a) 3/5 vs 4/7:</strong> Cross multiply: 3 × 7 = 21, and 5 × 4 = 20. Since 21 > 20, <strong>3/5 > 4/7</strong>.<br>
• <strong>(b) 5/8 vs 7/12:</strong> Cross multiply: 5 × 12 = 60, and 8 × 7 = 56. Since 60 > 56, <strong>5/8 > 7/12</strong>.<br>
• <strong>(c) 2/3 vs 8/12:</strong> Cross multiply: 2 × 12 = 24, and 3 × 8 = 24. Since 24 = 24, <strong>2/3 = 8/12</strong> (they are equal equivalent fractions).`,
      marks: 3,
      rubric: [
        { key: "Part (a): 3/5 > 4/7", marks: "1.0 M" },
        { key: "Part (b): 5/8 > 7/12", marks: "1.0 M" },
        { key: "Part (c): 2/3 = 8/12", marks: "1.0 M" }
      ]
    },
    {
      category: "Fractions on a Number Line",
      q: "Draw a number line from 0 to 1 and locate the points representing: 1/4, 2/4, 3/4, and 4/4. What is another name for 2/4 and 4/4?",
      ans: `<strong>Number Line Representation:</strong><br>
1. Divide the segment from 0 to 1 into 4 equal segments.<br>
2. Mark points at 1/4, 2/4, 3/4, and 4/4.<br>
• <strong>Another name for 2/4:</strong> Simplifying gives <strong>1/2 (One-Half)</strong>.<br>
• <strong>Another name for 4/4:</strong> 4 ÷ 4 = <strong>1 (One Whole)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Correct subdivision into 4 equal parts", marks: "1.5 M" },
        { key: "Identification of 2/4 = 1/2 and 4/4 = 1", marks: "1.5 M" }
      ]
    },
    {
      category: "Word Problem • Sharing Food",
      q: "Rohan has a chocolate bar with 16 equal pieces. He gives 1/4 of it to his sister, 1/2 of it to his mother, and keeps the rest for himself.<br>(a) How many pieces does his sister get?<br>(b) How many pieces does his mother get?<br>(c) What fraction and how many pieces are left for Rohan?",
      ans: `<strong>Calculations (Total = 16 pieces):</strong><br>
• <strong>(a) Sister's Share:</strong> 1/4 of 16 = 16 ÷ 4 = <strong>4 pieces</strong>.<br>
• <strong>(b) Mother's Share:</strong> 1/2 of 16 = 16 ÷ 2 = <strong>8 pieces</strong>.<br>
• <strong>(c) Rohan's Share:</strong><br>
- Pieces left = 16 - (4 + 8) = 16 - 12 = <strong>4 pieces</strong>.<br>
- Fraction = 4/16 = <strong>1/4 of the chocolate bar</strong>.`,
      marks: 3,
      rubric: [
        { key: "Sister: 4 pieces", marks: "1.0 M" },
        { key: "Mother: 8 pieces", marks: "1.0 M" },
        { key: "Rohan: 4 pieces (1/4)", marks: "1.0 M" }
      ]
    },
    {
      category: "Addition of Like Fractions",
      q: "Solve the following additions and express in simplest form:<br>(a) 2/9 + 4/9<br>(b) 3/10 + 5/10<br>(c) 7/15 + 8/15",
      ans: `<strong>Step-by-Step Addition:</strong><br>
• <strong>(a) 2/9 + 4/9:</strong> (2 + 4)/9 = <strong>6/9 = 2/3</strong>.<br>
• <strong>(b) 3/10 + 5/10:</strong> (3 + 5)/10 = <strong>8/10 = 4/5</strong>.<br>
• <strong>(c) 7/15 + 8/15:</strong> (7 + 8)/15 = <strong>15/15 = 1 (Whole)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 6/9 = 2/3", marks: "1.0 M" },
        { key: "Part (b): 8/10 = 4/5", marks: "1.0 M" },
        { key: "Part (c): 15/15 = 1", marks: "1.0 M" }
      ]
    },
    {
      category: "Subtraction of Like Fractions",
      q: "Solve the following subtractions:<br>(a) 7/8 - 3/8<br>(b) 11/12 - 5/12<br>(c) 1 - 3/5",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) 7/8 - 3/8:</strong> (7 - 3)/8 = 4/8 = <strong>1/2</strong>.<br>
• <strong>(b) 11/12 - 5/12:</strong> (11 - 5)/12 = 6/12 = <strong>1/2</strong>.<br>
• <strong>(c) 1 - 3/5:</strong> Write 1 as 5/5: 5/5 - 3/5 = (5 - 3)/5 = <strong>2/5</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 1/2", marks: "1.0 M" },
        { key: "Part (b): 1/2", marks: "1.0 M" },
        { key: "Part (c): 2/5", marks: "1.0 M" }
      ]
    },
    {
      category: "Fraction of a Set / Collection",
      q: "Calculate:<br>(a) 3/4 of 24 apples<br>(b) 2/5 of 45 students<br>(c) 5/6 of 60 minutes",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) 3/4 of 24:</strong> (24 ÷ 4) × 3 = 6 × 3 = <strong>18 apples</strong>.<br>
• <strong>(b) 2/5 of 45:</strong> (45 ÷ 5) × 2 = 9 × 2 = <strong>18 students</strong>.<br>
• <strong>(c) 5/6 of 60:</strong> (60 ÷ 6) × 5 = 10 × 5 = <strong>50 minutes</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 18 apples", marks: "1.0 M" },
        { key: "Part (b): 18 students", marks: "1.0 M" },
        { key: "Part (c): 50 minutes", marks: "1.0 M" }
      ]
    },
    {
      category: "Mixed Fractions & Improper Fractions",
      q: "(a) Convert the improper fraction 14/3 into a mixed fraction.<br>(b) Convert the mixed fraction $3\\frac{2}{5}$ into an improper fraction.<br>(c) Which is greater: $2\\frac{1}{2}$ or 9/4?",
      ans: `<strong>Conversions & Comparison:</strong><br>
• <strong>(a) 14/3:</strong> 14 ÷ 3 gives quotient 4 with remainder 2 → <strong>$4\\frac{2}{3}$</strong>.<br>
• <strong>(b) $3\\frac{2}{5}$:</strong> (3 × 5 + 2)/5 = (15 + 2)/5 = <strong>17/5</strong>.<br>
• <strong>(c) Comparison:</strong> Convert $2\\frac{1}{2}$ to improper: 5/2 = 10/4. Since 10/4 > 9/4, <strong>$2\\frac{1}{2} > 9/4$</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 4 2/3", marks: "1.0 M" },
        { key: "Part (b): 17/5", marks: "1.0 M" },
        { key: "Part (c): 2 1/2 > 9/4", marks: "1.0 M" }
      ]
    },
    {
      category: "Ramu's Vegetable Field • Comprehensive Fractions",
      q: "A vegetable farmer divides his rectangular plot into 12 equal beds. He plants tomatoes in 4 beds, potatoes in 3 beds, spinach in 2 beds, and carrots in the remaining beds.<br>(a) What fraction of the garden is used for tomatoes (in simplest form)?<br>(b) What fraction of the garden is used for carrots?<br>(c) Do potatoes and spinach together occupy more than half of the field? Explain.",
      ans: `<strong>Analysis (Total = 12 beds):</strong><br>
• <strong>(a) Tomatoes:</strong> 4/12 = <strong>1/3 of the field</strong>.<br>
• <strong>(b) Carrots:</strong> Beds left = 12 - (4 + 3 + 2) = 12 - 9 = 3 beds. Fraction = 3/12 = <strong>1/4 of the field</strong>.<br>
• <strong>(c) Potatoes + Spinach:</strong> 3/12 + 2/12 = 5/12. Half the field is 6/12. Since 5/12 < 6/12, <strong>No, they occupy less than half of the field</strong>.`,
      marks: 3,
      rubric: [
        { key: "Tomatoes = 1/3", marks: "1.0 M" },
        { key: "Carrots = 1/4", marks: "1.0 M" },
        { key: "Comparison: 5/12 < 6/12 (less than half)", marks: "1.0 M" }
      ]
    },
    {
      category: "Practical Application • Fuel Tank Fraction",
      q: "A car fuel tank holds 40 litres when completely full. The fuel gauge needle points to 3/8.<br>(a) How many litres of petrol are currently in the tank?<br>(b) How many litres are needed to fill the tank to capacity?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Current Petrol:</strong> 3/8 of 40 L = (40 ÷ 8) × 3 = 5 × 3 = <strong>15 litres</strong>.<br>
• <strong>(b) Petrol to Fill:</strong> 40 L - 15 L = <strong>25 litres</strong> (or 5/8 of 40 = 25 L).`,
      marks: 3,
      rubric: [
        { key: "Current: 15 litres", marks: "1.5 M" },
        { key: "Needed: 25 litres", marks: "1.5 M" }
      ]
    },
    {
      category: "Ordering Fractions",
      q: "Arrange the following fractions in ascending order (smallest to largest):<br>2/3, 1/6, 3/4, 5/12",
      ans: `<strong>Finding Common Denominator (LCM of 3, 6, 4, 12 is 12):</strong><br>
• 2/3 = (2 × 4)/(3 × 4) = 8/12<br>
• 1/6 = (1 × 2)/(6 × 2) = 2/12<br>
• 3/4 = (3 × 3)/(4 × 3) = 9/12<br>
• 5/12 = 5/12<br>
Comparing numerators: 2 < 5 < 8 < 9.<br>
<strong>Ascending Order: 1/6 < 5/12 < 2/3 < 3/4</strong>.`,
      marks: 3,
      rubric: [
        { key: "Converting to common denominator 12", marks: "1.5 M" },
        { key: "Correct ascending order: 1/6, 5/12, 2/3, 3/4", marks: "1.5 M" }
      ]
    },
    {
      category: "In-Text Activity • Paper Folding Fractions",
      q: "Take a square paper napkin. Fold it in half horizontally, then in half vertically.<br>(a) How many equal parts are created?<br>(b) If you unfold and colour 3 of the squares, what fraction is coloured?<br>(c) If each small square has an area of 9 cm², what is the area of the entire napkin?",
      ans: `<strong>Geometry & Fractions:</strong><br>
• <strong>(a) Equal Parts:</strong> 2 × 2 = <strong>4 equal squares</strong>.<br>
• <strong>(b) Fraction Coloured:</strong> 3 out of 4 = <strong>3/4 (three-fourths)</strong>.<br>
• <strong>(c) Total Area:</strong> 4 × 9 cm² = <strong>36 cm²</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 4 equal parts", marks: "1.0 M" },
        { key: "Part (b): 3/4", marks: "1.0 M" },
        { key: "Part (c): Total area = 36 cm²", marks: "1.0 M" }
      ]
    },
    {
      category: "Unit Fractions • Concept & Property",
      q: "(a) What is a unit fraction? Give two examples.<br>(b) Which unit fraction is larger: 1/7 or 1/9? Explain the rule.",
      ans: `<strong>Unit Fractions Explanation:</strong><br>
• <strong>(a) Definition:</strong> A fraction with a numerator of 1 is called a <strong>unit fraction</strong>. Examples: <strong>1/2, 1/5, 1/10</strong>.<br>
• <strong>(b) Comparison:</strong> <strong>1/7 > 1/9</strong>.<br>
<strong>Rule:</strong> When two fractions have the same numerator (1), the fraction with the <strong>smaller denominator is greater</strong>, because dividing a whole into fewer parts makes each individual part larger.`,
      marks: 3,
      rubric: [
        { key: "Definition and examples", marks: "1.5 M" },
        { key: "1/7 > 1/9 with logical rule explanation", marks: "1.5 M" }
      ]
    },
    {
      category: "Fraction Word Problem • Library Books",
      q: "In a class library of 60 books, 1/3 are science books, 2/5 are storybooks, and the rest are mathematics puzzle books.<br>(a) Find the number of science books.<br>(b) Find the number of storybooks.<br>(c) How many mathematics puzzle books are there?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Science Books:</strong> 1/3 of 60 = 60 ÷ 3 = <strong>20 books</strong>.<br>
• <strong>(b) Storybooks:</strong> 2/5 of 60 = (60 ÷ 5) × 2 = 12 × 2 = <strong>24 books</strong>.<br>
• <strong>(c) Math Puzzle Books:</strong> 60 - (20 + 24) = 60 - 44 = <strong>16 books</strong>.`,
      marks: 3,
      rubric: [
        { key: "Science = 20", marks: "1.0 M" },
        { key: "Story = 24", marks: "1.0 M" },
        { key: "Math = 16", marks: "1.0 M" }
      ]
    },
    {
      category: "Decimal-Fraction Equivalence",
      q: "Express each fraction as a decimal:<br>(a) 3/10<br>(b) 75/100<br>(c) 2/5<br>(d) 1/4",
      ans: `<strong>Conversions:</strong><br>
• <strong>(a) 3/10:</strong> <strong>0.3</strong>.<br>
• <strong>(b) 75/100:</strong> <strong>0.75</strong>.<br>
• <strong>(c) 2/5:</strong> Multiply top and bottom by 2: 4/10 = <strong>0.4</strong>.<br>
• <strong>(d) 1/4:</strong> Multiply top and bottom by 25: 25/100 = <strong>0.25</strong>.`,
      marks: 3,
      rubric: [
        { key: "0.3 and 0.75", marks: "1.5 M" },
        { key: "0.4 and 0.25", marks: "1.5 M" }
      ]
    },
    {
      category: "HOTS • Fraction Riddle",
      q: "A fraction is equivalent to 2/3. The sum of its numerator and denominator is 25. Find the fraction.",
      ans: `<strong>Algebraic Reasoning:</strong><br>
1. Let the fraction be (2 × k) / (3 × k).<br>
2. Sum of numerator and denominator: 2k + 3k = 25.<br>
3. 5k = 25 → k = 5.<br>
4. Numerator = 2 × 5 = 10.<br>
5. Denominator = 3 × 5 = 15.<br>
<strong>The fraction is 10/15</strong> (Check: 10 + 15 = 25 and 10/15 reduces to 2/3).`,
      marks: 3,
      rubric: [
        { key: "Setting up proportion 2k + 3k = 25", marks: "1.5 M" },
        { key: "Final fraction = 10/15", marks: "1.5 M" }
      ]
    },
    {
      category: "Time & Fractions • Hour Portions",
      q: "How many minutes are there in:<br>(a) 1/4 of an hour<br>(b) 2/3 of an hour<br>(c) 1/2 of 1/2 of an hour",
      ans: `<strong>1 Hour = 60 Minutes:</strong><br>
• <strong>(a) 1/4 of 60:</strong> 60 ÷ 4 = <strong>15 minutes</strong>.<br>
• <strong>(b) 2/3 of 60:</strong> (60 ÷ 3) × 2 = 20 × 2 = <strong>40 minutes</strong>.<br>
• <strong>(c) 1/2 of 1/2 of 60:</strong> 1/4 of 60 = <strong>15 minutes</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 15 minutes", marks: "1.0 M" },
        { key: "Part (b): 40 minutes", marks: "1.0 M" },
        { key: "Part (c): 15 minutes", marks: "1.0 M" }
      ]
    },
    {
      category: "Fraction Word Problem • Money Spent",
      q: "Priya had ₹240. She spent 1/3 of her money on a geometry box and 1/4 of her money on sketch pens.<br>(a) How much money did she spend on the geometry box?<br>(b) How much on sketch pens?<br>(c) How much money does she have left?",
      ans: `<strong>Financial Calculations:</strong><br>
• <strong>(a) Geometry Box:</strong> 1/3 of 240 = 240 ÷ 3 = <strong>₹80</strong>.<br>
• <strong>(b) Sketch Pens:</strong> 1/4 of 240 = 240 ÷ 4 = <strong>₹60</strong>.<br>
• <strong>(c) Money Left:</strong> 240 - (80 + 60) = 240 - 140 = <strong>₹100</strong>.`,
      marks: 3,
      rubric: [
        { key: "Geometry box: ₹80", marks: "1.0 M" },
        { key: "Sketch pens: ₹60", marks: "1.0 M" },
        { key: "Remaining: ₹100", marks: "1.0 M" }
      ]
    },
    {
      category: "Simplifying Fractions to Lowest Terms",
      q: "Reduce each fraction to its simplest form by dividing by their HCF:<br>(a) 24/36<br>(b) 15/45<br>(c) 28/70",
      ans: `<strong>Simplification:</strong><br>
• <strong>(a) 24/36:</strong> HCF(24, 36) = 12. (24 ÷ 12)/(36 ÷ 12) = <strong>2/3</strong>.<br>
• <strong>(b) 15/45:</strong> HCF(15, 45) = 15. (15 ÷ 15)/(45 ÷ 15) = <strong>1/3</strong>.<br>
• <strong>(c) 28/70:</strong> HCF(28, 70) = 14. (28 ÷ 14)/(70 ÷ 14) = <strong>2/5</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 2/3", marks: "1.0 M" },
        { key: "Part (b): 1/3", marks: "1.0 M" },
        { key: "Part (c): 2/5", marks: "1.0 M" }
      ]
    },
    {
      category: "Fraction of Weight & Mass",
      q: "A baker uses 1 kg of flour. He uses 3/8 kg for biscuits and 1/2 kg for bread.<br>(a) Express both amounts in grams.<br>(b) How many grams of flour are used in total?<br>(c) How many grams of flour remain unused?",
      ans: `<strong>1 kg = 1,000 g:</strong><br>
• <strong>(a) In grams:</strong><br>
- Biscuits: 3/8 of 1,000 = (1000 ÷ 8) × 3 = 125 × 3 = <strong>375 g</strong>.<br>
- Bread: 1/2 of 1,000 = <strong>500 g</strong>.<br>
• <strong>(b) Total Flour Used:</strong> 375 g + 500 g = <strong>875 g</strong>.<br>
• <strong>(c) Unused Flour:</strong> 1,000 g - 875 g = <strong>125 g</strong> (or 1/8 kg).`,
      marks: 3,
      rubric: [
        { key: "Part (a): 375 g and 500 g", marks: "1.0 M" },
        { key: "Part (b): 875 g", marks: "1.0 M" },
        { key: "Part (c): 125 g", marks: "1.0 M" }
      ]
    },
    {
      category: "Measurement Fractions • Tape Length",
      q: "A tailor has a 2-metre ribbon. He cuts it into 8 equal pieces.<br>(a) What fraction of a metre is each piece?<br>(b) What is the length of each piece in centimetres?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Fraction of a Metre:</strong> Total length = 2 m. Length per piece = 2 ÷ 8 = 2/8 = <strong>1/4 of a metre</strong>.<br>
• <strong>(b) In Centimetres:</strong> 1 m = 100 cm. 1/4 of 100 cm = 100 ÷ 4 = <strong>25 cm</strong>.`,
      marks: 3,
      rubric: [
        { key: "Fraction = 1/4 m", marks: "1.5 M" },
        { key: "Length = 25 cm", marks: "1.5 M" }
      ]
    },
    {
      category: "Critical Thinking • True or False with Reason",
      q: "State whether each statement is True or False. Give a mathematical justification:<br>(a) 2/3 of 12 is greater than 3/4 of 12.<br>(b) Any fraction with numerator equal to denominator equals 1.<br>(c) 4/6 and 6/9 are equivalent fractions.",
      ans: `<strong>Justifications:</strong><br>
• <strong>(a) False:</strong> 2/3 of 12 = 8; 3/4 of 12 = 9. Since 8 < 9, the statement is False.<br>
• <strong>(b) True:</strong> When numerator = denominator (e.g. 5/5, 8/8), dividing a quantity into $n$ parts and taking all $n$ parts equals exactly 1 whole.<br>
• <strong>(c) True:</strong> 4/6 simplifies to 2/3 (divide by 2). 6/9 simplifies to 2/3 (divide by 3). Both equal 2/3, so they are equivalent.`,
      marks: 3,
      rubric: [
        { key: "Part (a): False with calculation", marks: "1.0 M" },
        { key: "Part (b): True with justification", marks: "1.0 M" },
        { key: "Part (c): True with simplification", marks: "1.0 M" }
      ]
    },
    {
      category: "Comprehensive Review • Fraction Story Problem",
      q: "A cricket team played 20 matches in a season. They won 3/5 of their matches, lost 1/4 of their matches, and the rest were tied.<br>(a) How many matches did they win?<br>(b) How many matches did they lose?<br>(c) How many matches were tied, and what fraction of the total is that?",
      ans: `<strong>Working (Total Matches = 20):</strong><br>
• <strong>(a) Matches Won:</strong> 3/5 of 20 = (20 ÷ 5) × 3 = 4 × 3 = <strong>12 matches</strong>.<br>
• <strong>(b) Matches Lost:</strong> 1/4 of 20 = 20 ÷ 4 = <strong>5 matches</strong>.<br>
• <strong>(c) Matches Tied:</strong> 20 - (12 + 5) = 20 - 17 = <strong>3 matches</strong>.<br>
- Fraction tied = <strong>3/20 of the matches</strong>.`,
      marks: 3,
      rubric: [
        { key: "Won: 12 matches", marks: "1.0 M" },
        { key: "Lost: 5 matches", marks: "1.0 M" },
        { key: "Tied: 3 matches (3/20)", marks: "1.0 M" }
      ]
    }
  ]
};

module.exports = { melaPart1 };
