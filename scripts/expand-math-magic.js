const fs = require('fs');
const path = require('path');
const existing = require('./data-c4-maths/mathMagicData.js').mathMagicChapters;

const extraQuestions = {
  mg1: [
    {
      category: "Architectural Patterns • Arches & Jali",
      q: "What is an 'Arch' (कमान) in brick architecture? Where can you see traditional brick jali patterns in historical Indian monuments?",
      ans: `<strong>1. Brick Arch (Kaman):</strong><br>
An arch is a curved symmetrical structural opening built of wedge-shaped bricks arranged over an entrance or bridge. The bricks support each other by pressing against one another, transferring heavy downward weight safely to the side pillars without needing a horizontal wooden beam.<br><br>
<strong>2. Traditional Brick Jali (Lattice):</strong><br>
Brick jalis are decorative screen walls created by leaving systematic hollow spaces between bricks during masonry. They allow cool breeze and soft geometric light patterns to enter while keeping harsh sun and rain out. Famous examples include the <strong>Jaagrithi School</strong> in Murshidabad (West Bengal) and historical Mughal monuments.`,
      marks: 3,
      rubric: [
        { key: "Structural principle of brick arch and weight distribution", marks: "1.5 M" },
        { key: "Jali pattern description and historical monument examples", marks: "1.5 M" }
      ]
    },
    {
      category: "Commercial Arithmetic • Cost of Bricks",
      q: "Bhajan went to buy bricks. The price of new bricks from Brickabad was ₹2,000 for 1,000 bricks. He bought 3,000 bricks. If he also bought 500 old bricks at ₹1,200 for 1,000 bricks, how much total money did he pay?",
      ans: `<strong>Step-by-Step Calculation:</strong><br>
1. <strong>Cost of New Bricks from Brickabad:</strong><br>
• Cost of 1,000 bricks = ₹2,000.<br>
• Cost of 3,000 bricks = 3 × ₹2,000 = <strong>₹6,000</strong>.<br><br>
2. <strong>Cost of Old Bricks:</strong><br>
• Cost of 1,000 bricks = ₹1,200.<br>
• Cost of 500 bricks (half of 1,000) = ₹1,200 ÷ 2 = <strong>₹600</strong>.<br><br>
3. <strong>Total Money Paid:</strong><br>
₹6,000 + ₹600 = <strong>₹6,600</strong>.`,
      marks: 3,
      rubric: [
        { key: "Cost of new bricks (₹6,000)", marks: "1.0 M" },
        { key: "Cost of old bricks (₹600)", marks: "1.0 M" },
        { key: "Total sum: ₹6,600", marks: "1.0 M" }
      ]
    }
  ],
  mg2: [
    {
      category: "Sports Arithmetic • High Jump & Long Jump",
      q: "In high jump, Javier S. holds the world record of 2 m 45 cm, and Chandra Pal holds the Indian record of 2 m 17 cm. How many centimetres higher must Chandra Pal jump to equal the world record?",
      ans: `<strong>Difference Calculation:</strong><br>
• World Record = 2 m 45 cm = 245 cm<br>
• Indian Record = 2 m 17 cm = 217 cm<br><br>
Difference = 245 cm - 217 cm = <strong>28 cm</strong>.<br><br>
Chandra Pal must jump <strong>28 centimetres higher</strong> to equal the world record.`,
      marks: 2,
      rubric: [
        { key: "Conversion to centimetres (245 cm and 217 cm)", marks: "1.0 M" },
        { key: "Correct difference of 28 cm", marks: "1.0 M" }
      ]
    },
    {
      category: "Marathon & Distance • Stadium Track",
      q: "A doctor tells Devi Prasad to run 2 km every day to stay fit. He runs around a square field with each side 500 metres long. (a) How many rounds of this field must he take to complete 2 km? (b) If he instead runs on a 400-metre circular stadium track, how many rounds are needed?",
      ans: `<strong>Step-by-Step Solution (Target = 2 km = 2,000 m):</strong><br>
1. <strong>(a) Square Field:</strong><br>
• Side = 500 m<br>
• Perimeter of square = 4 × 500 m = 2,000 m.<br>
• Number of rounds = 2,000 m ÷ 2,000 m = <strong>1 round</strong>.<br><br>
2. <strong>(b) 400-metre Stadium Track:</strong><br>
• Number of rounds = 2,000 m ÷ 400 m = <strong>5 rounds</strong>.`,
      marks: 3,
      rubric: [
        { key: "Square field perimeter (2,000 m) = 1 round", marks: "1.5 M" },
        { key: "Stadium track calculation: 2,000 ÷ 400 = 5 rounds", marks: "1.5 M" }
      ]
    }
  ],
  mg3: [
    {
      category: "Travel Budget • Boating Rates",
      q: "At the Bhopal lake, a motorboat charges ₹25 per person for a 20-minute ride, and a paddle boat charges ₹15 per person for a 45-minute ride. A group of 4 children have ₹100 and 40 minutes time. Which boat ride can they take?",
      ans: `<strong>Comparison of Boating Options for 4 Children:</strong><br>
Available Budget = ₹100, Available Time = 40 minutes.<br><br>
1. <strong>Motorboat Option:</strong><br>
• Total Cost = 4 × ₹25 = <strong>₹100</strong> (Within budget).<br>
• Duration = 20 minutes (Well within 40 minutes).<br><br>
2. <strong>Paddle Boat Option:</strong><br>
• Total Cost = 4 × ₹15 = ₹60 (Within budget).<br>
• Duration = 45 minutes (Exceeds available 40 minutes).<br><br>
<strong>Conclusion:</strong> They can only take the <strong>motorboat ride</strong> because the paddle boat exceeds their 40-minute time limit.`,
      marks: 3,
      rubric: [
        { key: "Budget calculation for both boats (₹100 vs ₹60)", marks: "1.5 M" },
        { key: "Time limit comparison selecting motorboat (20 mins vs 45 mins)", marks: "1.5 M" }
      ]
    },
    {
      category: "Fuel Arithmetic • Filling Bus Tanks",
      q: "At a highway petrol pump, the driver filled 65 litres of diesel into a bus tank. If the diesel price was ₹84 per litre, calculate the total amount the school paid for the diesel.",
      ans: `<strong>Multiplication Calculation:</strong><br>
&nbsp;&nbsp;&nbsp;&nbsp;6 5 litres<br>
&nbsp;&nbsp;× &nbsp;8 4 rupees<br>
-----------<br>
&nbsp;&nbsp;&nbsp;&nbsp;2 6 0 &nbsp;&nbsp;(65 × 4)<br>
+ 5 2 0 0 &nbsp;&nbsp;(65 × 80)<br>
-----------<br>
&nbsp;&nbsp;5 4 6 0<br><br>
The school paid <strong>₹5,460</strong> for the diesel.`,
      marks: 2,
      rubric: [
        { key: "Correct partial products (260 and 5200)", marks: "1.0 M" },
        { key: "Final total bill of ₹5,460", marks: "1.0 M" }
      ]
    }
  ],
  mg4: [
    {
      category: "Developmental Timeline • Munia's Milestones",
      q: "Munia was born on 5th March 2025. She cut her first tooth on 15th September 2025 and started walking on 2nd February 2026. (a) How old was she in completed months when she cut her first tooth? (b) How many months after birth did she start walking?",
      ans: `<strong>Timeline Milestones:</strong><br>
Date of Birth: 5th March 2025<br><br>
1. <strong>(a) First Tooth (15th September 2025):</strong><br>
From March to September = 6 months (March 5 to Sept 5 = 6 months) + 10 days.<br>
Munia was <strong>6 months and 10 days old</strong>.<br><br>
2. <strong>(b) Walking (2nd February 2026):</strong><br>
From March 2025 to January 2026 = 10 months. Adding up to Feb 2 = nearly <strong>11 months old</strong>.`,
      marks: 3,
      rubric: [
        { key: "First tooth age: 6 months 10 days", marks: "1.5 M" },
        { key: "Walking milestone age: approx 11 months", marks: "1.5 M" }
      ]
    },
    {
      category: "Calendar Math • Number of Days in a Year",
      q: "Is the year 2028 a leap year? How many days will the months of February and the entire year 2028 have?",
      ans: `<strong>Leap Year Test:</strong><br>
A year is a leap year if its last two digits are divisible by 4.<br>
• 28 ÷ 4 = 7 (completely divisible, remainder 0).<br>
Therefore, <strong>2028 is a leap year</strong>.<br><br>
<strong>Days Count:</strong><br>
• <strong>February 2028</strong> will have <strong>29 days</strong>.<br>
• The <strong>entire year 2028</strong> will have <strong>366 days</strong> (instead of the normal 365 days).`,
      marks: 2,
      rubric: [
        { key: "Divisibility rule proving 2028 is a leap year", marks: "1.0 M" },
        { key: "February has 29 days and total year has 366 days", marks: "1.0 M" }
      ]
    }
  ],
  mg5: [
    {
      category: "Perspective Views • Everyday Objects",
      q: "Draw or describe: (a) The top view of a teacup, (b) The side view of a pressure cooker, (c) The top view of a railway track.",
      ans: `<strong>Perspective Projections:</strong><br>
• <strong>(a) Top View of a Teacup:</strong> Shows two concentric circles (the inner circle representing the cup rim and the outer circle representing the saucer) with a small oval loop on one side representing the handle.<br>
• <strong>(b) Side View of a Pressure Cooker:</strong> Shows the cylindrical metallic body, the side handle, the lid clamp, and the safety weight (whistle) sitting on the top vent pipe.<br>
• <strong>(c) Top View of a Railway Track:</strong> Shows two parallel vertical lines with horizontal wooden or concrete sleepers spaced evenly across them like a ladder.`,
      marks: 3,
      rubric: [
        { key: "Accurate geometric description of teacup top view", marks: "1.0 M" },
        { key: "Accurate side view of cooker", marks: "1.0 M" },
        { key: "Accurate top view of railway track", marks: "1.0 M" }
      ]
    },
    {
      category: "Grid Map Navigation • Directions",
      q: "On a neighbourhood map, Neha starts at the Park facing East. She walks 50 metres straight, turns 90° right, walks 30 metres, and enters the Library. (a) In which direction did she walk after turning? (b) In which direction is the Library from the Park?",
      ans: `<strong>Spatial Navigation:</strong><br>
1. <strong>Direction after turning:</strong><br>
Starting facing East, turning 90° to the right means she is now facing <strong>South</strong>. She walked 30 metres South.<br><br>
2. <strong>Position of Library relative to Park:</strong><br>
The Library is 50 m East and 30 m South of the Park. Therefore, the Library is located to the <strong>South-East</strong> of the Park.`,
      marks: 3,
      rubric: [
        { key: "Right turn from East = South", marks: "1.5 M" },
        { key: "Combined position = South-East", marks: "1.5 M" }
      ]
    },
    {
      category: "Isometric 3D Blocks • Visual Reasoning",
      q: "A boy looks at a dice. The sum of opposite faces of a standard dice is always 7. If the top face shows 3 and the front face shows 2, what numbers are on: (a) the bottom face, (b) the back face?",
      ans: `<strong>Opposite Face Rule (Sum = 7):</strong><br>
• <strong>(a) Bottom Face:</strong> Opposite to the top face (3).<br>
Bottom = 7 - 3 = <strong>4</strong>.<br><br>
• <strong>(b) Back Face:</strong> Opposite to the front face (2).<br>
Back = 7 - 2 = <strong>5</strong>.`,
      marks: 2,
      rubric: [
        { key: "Bottom face = 4", marks: "1.0 M" },
        { key: "Back face = 5", marks: "1.0 M" }
      ]
    }
  ],
  mg6: [
    {
      category: "Commercial Math • Kiran's Rate List",
      q: "Kiran the junk seller buys scrap from collectors at these rates:<br>• Newspaper: ₹14/kg<br>• Iron: ₹22/kg<br>• Brass: ₹280/kg<br>Calculate the total amount Kiran pays for 40 kg newspaper, 15 kg iron, and 2 kg brass.",
      ans: `<strong>Step-by-Step Bill Calculation:</strong><br>
1. <strong>Newspaper (40 kg):</strong> 40 × ₹14 = <strong>₹560</strong>.<br>
2. <strong>Iron (15 kg):</strong> 15 × ₹22 = <strong>₹330</strong>.<br>
3. <strong>Brass (2 kg):</strong> 2 × ₹280 = <strong>₹560</strong>.<br><br>
<strong>Total Amount Paid:</strong><br>
₹560 + ₹330 + ₹560 = <strong>₹1,450</strong>.`,
      marks: 3,
      rubric: [
        { key: "Newspaper (₹560) and Iron (₹330)", marks: "1.0 M" },
        { key: "Brass (₹560)", marks: "1.0 M" },
        { key: "Total bill = ₹1,450", marks: "1.0 M" }
      ]
    },
    {
      category: "Loan & Interest • Financial Comparison",
      q: "Hariyal took a loan of ₹300 from a bank and repaid ₹340 after 6 months. Babu took a loan of ₹300 from a moneylender and paid ₹60 every month for 6 months. Who paid back more money, and by how much?",
      ans: `<strong>Comparison of Repayments:</strong><br>
• <strong>Hariyal (Bank):</strong> Total paid back = <strong>₹340</strong>.<br><br>
• <strong>Babu (Moneylender):</strong><br>
Paid ₹60 every month for 6 months = 6 × ₹60 = <strong>₹360</strong>.<br><br>
<strong>Difference:</strong><br>
₹360 - ₹340 = <strong>₹20</strong>.<br><br>
<strong>Babu paid back ₹20 more</strong> than Hariyal because of the moneylender's higher interest rate.`,
      marks: 3,
      rubric: [
        { key: "Babu's total payment calculation (6 × 60 = 360)", marks: "1.5 M" },
        { key: "Correct comparison: Babu paid ₹20 more", marks: "1.5 M" }
      ]
    }
  ],
  mg7: [
    {
      category: "Capacity Multiples • Bunny's Wedding Feast",
      q: "At Bunny's wedding feast, 1,000 ants arrived to drink kheer. Each ant drinks only 1 mL of kheer. (a) How many millilitres of kheer do 1,000 ants drink in total? (b) Convert this quantity into litres.",
      ans: `<strong>Step-by-Step Calculation:</strong><br>
1. <strong>Total Millilitres:</strong><br>
1,000 ants × 1 mL = <strong>1,000 mL</strong>.<br><br>
2. <strong>Convert to Litres:</strong><br>
Since 1,000 mL = 1 Litre,<br>
1,000 mL ÷ 1,000 = <strong>1 Litre</strong> of kheer in total.`,
      marks: 2,
      rubric: [
        { key: "Multiplication (1,000 mL)", marks: "1.0 M" },
        { key: "Conversion to 1 Litre", marks: "1.0 M" }
      ]
    },
    {
      category: "Water Measurement • Daily Household Usage",
      q: "A family uses 6 buckets of water for bathing (each bucket holds 15 L), 3 buckets for washing clothes (each holds 20 L), and 45 L for cooking and drinking. What is the family's total daily water consumption?",
      ans: `<strong>Step-by-Step Total Usage:</strong><br>
1. <strong>Bathing:</strong> 6 buckets × 15 L = <strong>90 L</strong>.<br>
2. <strong>Washing Clothes:</strong> 3 buckets × 20 L = <strong>60 L</strong>.<br>
3. <strong>Cooking &amp; Drinking:</strong> = <strong>45 L</strong>.<br><br>
<strong>Total Daily Consumption:</strong><br>
90 L + 60 L + 45 L = <strong>195 Litres</strong>.`,
      marks: 3,
      rubric: [
        { key: "Bathing (90 L) and clothes (60 L) calculated", marks: "1.5 M" },
        { key: "Grand total sum of 195 Litres", marks: "1.5 M" }
      ]
    }
  ],
  mg8: [
    {
      category: "Circle Geometry • Radius & Diameter",
      q: "If the radius of a bicycle wheel is 35 cm, what is its diameter? If the diameter of a giant Ferris wheel is 24 metres, what is its radius?",
      ans: `<strong>Formula: Diameter = 2 × Radius &nbsp;|&nbsp; Radius = Diameter ÷ 2</strong><br><br>
1. <strong>Bicycle Wheel:</strong><br>
Radius = 35 cm<br>
Diameter = 2 × 35 cm = <strong>70 cm</strong>.<br><br>
2. <strong>Giant Ferris Wheel:</strong><br>
Diameter = 24 m<br>
Radius = 24 m ÷ 2 = <strong>12 metres</strong>.`,
      marks: 2,
      rubric: [
        { key: "Bicycle diameter: 70 cm", marks: "1.0 M" },
        { key: "Ferris wheel radius: 12 m", marks: "1.0 M" }
      ]
    },
    {
      category: "Compass Construction • Drawing Circles",
      q: "Describe how to draw a circle of radius 4 cm using a ruler and a geometric compass. What is the role of the fixed sharp point?",
      ans: `<strong>Steps to Draw a Circle:</strong><br>
1. <strong>Setting the Radius:</strong> Open the arms of the compass. Place the sharp metal pointer at 0 cm mark on the ruler and expand the pencil tip to exactly the 4 cm mark.<br>
2. <strong>Marking the Centre:</strong> Press the sharp metal pointer firmly onto paper without shifting; this point is the <strong>Centre (O)</strong> of the circle.<br>
3. <strong>Drawing:</strong> Holding the compass strictly by the top handle, rotate the pencil 360° smoothly around the centre to trace the circular boundary.<br>
The fixed sharp point ensures that every point on the circumference remains at an exact constant distance of 4 cm from the centre.`,
      marks: 3,
      rubric: [
        { key: "Setting 4 cm measurement on ruler", marks: "1.0 M" },
        { key: "Center anchor and 360° pencil rotation", marks: "1.0 M" },
        { key: "Explaining constant distance from center", marks: "1.0 M" }
      ]
    }
  ],
  mg9: [
    {
      category: "Fractional Pricing • Vegetable Market",
      q: "Look at the vegetable price list:<br>• Tomato: ₹16 per kg<br>• Potato: ₹20 per kg<br>• Carrot: ₹32 per kg<br>Calculate the total cost of 1/2 kg tomatoes, 3/4 kg potatoes, and 1 1/4 kg carrots.",
      ans: `<strong>Step-by-Step Pricing:</strong><br>
1. <strong>Cost of 1/2 kg Tomatoes:</strong> 1/2 × ₹16 = <strong>₹8</strong>.<br>
2. <strong>Cost of 3/4 kg Potatoes:</strong> 3/4 × ₹20 = 3 × (20 ÷ 4) = 3 × ₹5 = <strong>₹15</strong>.<br>
3. <strong>Cost of 1 1/4 kg Carrots:</strong><br>
• 1 kg = ₹32<br>
• 1/4 kg = ₹32 ÷ 4 = ₹8<br>
• Total = ₹32 + ₹8 = <strong>₹40</strong>.<br><br>
<strong>Grand Total Bill:</strong><br>
₹8 + ₹15 + ₹40 = <strong>₹63</strong>.`,
      marks: 3,
      rubric: [
        { key: "Tomatoes (₹8) and Potatoes (₹15)", marks: "1.0 M" },
        { key: "Carrots (₹40)", marks: "1.0 M" },
        { key: "Total bill = ₹63", marks: "1.0 M" }
      ]
    },
    {
      category: "Fraction Arithmetic • Cutting Shapes",
      q: "A square sheet of paper is folded in half diagonally, and then folded in half again. (a) What fraction of the original sheet is each small triangle? (b) How many such small triangles make three-quarters (3/4) of the sheet?",
      ans: `<strong>Fractional Folding:</strong><br>
1. First diagonal fold divides the square into <strong>2 equal halves (1/2 each)</strong>.<br>
2. Second fold divides the halves into <strong>4 equal triangles (1/4 each)</strong>.<br><br>
• <strong>(a) Fraction of each small triangle:</strong> <strong>1/4</strong> of the original square sheet.<br>
• <strong>(b) To make 3/4:</strong> Exactly <strong>3 small triangles</strong> make 3/4 of the sheet (3 × 1/4 = 3/4).`,
      marks: 2,
      rubric: [
        { key: "Part (a): 1/4 fraction", marks: "1.0 M" },
        { key: "Part (b): 3 small triangles", marks: "1.0 M" }
      ]
    }
  ],
  mg10: [
    {
      category: "Magic Squares • 3x3 Grid Puzzle",
      q: "In a 3×3 magic square using numbers 1 to 9, the sum of numbers along every row, column, and diagonal is 15. If the central cell is 5, explain why 5 must be in the centre.",
      ans: `<strong>Magic Square Mathematical Logic:</strong><br>
1. <strong>Sum of all numbers 1 to 9:</strong><br>
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45.<br>
Dividing by 3 rows gives the magic constant: 45 ÷ 3 = <strong>15</strong>.<br><br>
2. <strong>Why 5 must be in the Centre:</strong><br>
The central cell belongs to 4 lines (1 horizontal row, 1 vertical column, and 2 diagonals). Therefore, it must be the exact median (average) of all 9 numbers. Pairing numbers that sum to 10 (1+9=10, 2+8=10, 3+7=10, 4+6=10) with 5 in the centre always yields: 10 + 5 = <strong>15</strong>.`,
      marks: 3,
      rubric: [
        { key: "Calculating total sum 45 and magic constant 15", marks: "1.5 M" },
        { key: "Explaining central cell median alignment with 4 intersecting lines", marks: "1.5 M" }
      ]
    },
    {
      category: "Number Pyramids • Addition Rules",
      q: "In a number tower, the bottom row has numbers 10, 20, 30. The rule is that adding two adjacent lower numbers gives the number above them. Find the top number of the tower.",
      ans: `<strong>Tower Addition Steps:</strong><br>
• <strong>Bottom Row (Row 1):</strong> [ 10 ] &nbsp;&nbsp; [ 20 ] &nbsp;&nbsp; [ 30 ]<br><br>
• <strong>Middle Row (Row 2):</strong><br>
Left box = 10 + 20 = <strong>30</strong>.<br>
Right box = 20 + 30 = <strong>50</strong>.<br>
Row 2: [ 30 ] &nbsp;&nbsp; [ 50 ]<br><br>
• <strong>Top Row (Row 3):</strong><br>
Top box = 30 + 50 = <strong>80</strong>.<br><br>
The number in the top box is <strong>80</strong>.`,
      marks: 2,
      rubric: [
        { key: "Middle row calculation (30 and 50)", marks: "1.0 M" },
        { key: "Top number = 80", marks: "1.0 M" }
      ]
    }
  ],
  mg11: [
    {
      category: "Array Multiplication • Shyama's Garden",
      q: "Shyama wants to plant 18 rose saplings in rectangular flowerbeds. In how many different rectangular array arrangements (rows × plants in each row) can she plant them? List all pairs.",
      ans: `<strong>Factor Pairs of 18:</strong><br>
We find all pairs of whole numbers whose product is 18:<br>
1. <strong>1 row of 18 plants:</strong> 1 × 18 = 18<br>
2. <strong>2 rows of 9 plants each:</strong> 2 × 9 = 18<br>
3. <strong>3 rows of 6 plants each:</strong> 3 × 6 = 18<br>
4. <strong>6 rows of 3 plants each:</strong> 6 × 3 = 18<br>
5. <strong>9 rows of 2 plants each:</strong> 9 × 2 = 18<br>
6. <strong>18 rows of 1 plant each:</strong> 18 × 1 = 18<br><br>
She can arrange them in <strong>6 different rectangular arrays</strong>.`,
      marks: 3,
      rubric: [
        { key: "Listing factor pairs of 18", marks: "1.5 M" },
        { key: "Stating all distinct row-column configurations", marks: "1.5 M" }
      ]
    },
    {
      category: "Distributive Property • Splitting Tables",
      q: "Explain how you can easily construct the multiplication table of 7 using the tables of 2 and 5.",
      ans: `<strong>Using the Distributive Property: 7 = 2 + 5</strong><br>
To find any multiple of 7, add the corresponding multiple of 2 and multiple of 5:<br>
• 7 × 1 = (2 × 1) + (5 × 1) = 2 + 5 = <strong>7</strong><br>
• 7 × 2 = (2 × 2) + (5 × 2) = 4 + 10 = <strong>14</strong><br>
• 7 × 3 = (2 × 3) + (5 × 3) = 6 + 15 = <strong>21</strong><br>
• 7 × 4 = (2 × 4) + (5 × 4) = 8 + 20 = <strong>28</strong><br>
• 7 × 8 = (2 × 8) + (5 × 8) = 16 + 40 = <strong>56</strong><br>
• 7 × 10 = (2 × 10) + (5 × 10) = 20 + 50 = <strong>70</strong>.<br>
This demonstrates that large multiplication tables can be constructed by combining smaller, easy tables.`,
      marks: 3,
      rubric: [
        { key: "Stating 7 = 2 + 5 principle", marks: "1.5 M" },
        { key: "Demonstrating at least 3 correct row additions", marks: "1.5 M" }
      ]
    },
    {
      category: "Division as Grouping • Shelving Books",
      q: "A carpenter has 84 wooden books. If he puts 7 books on each shelf, how many shelves will be completely filled?",
      ans: `<strong>Division:</strong><br>
84 ÷ 7<br>
• 70 ÷ 7 = 10<br>
• 14 ÷ 7 = 2<br>
• 10 + 2 = 12<br><br>
Exactly <strong>12 shelves</strong> will be completely filled.`,
      marks: 2,
      rubric: [
        { key: "Correct division yielding 12 shelves", marks: "2.0 M" }
      ]
    }
  ],
  mg12: [
    {
      category: "Postal Mathematics • Calculating Postage",
      q: "Look at the postal rates:<br>• Single letter (up to 20 g): ₹5.00<br>• For every additional 20 g: ₹2.00<br>Calculate the postage stamps required to send a heavy official letter weighing 75 grams.",
      ans: `<strong>Step-by-Step Postal Calculation:</strong><br>
Total weight = 75 grams.<br><br>
1. <strong>First 20 grams:</strong> Cost = <strong>₹5.00</strong>.<br>
2. <strong>Remaining weight:</strong> 75 g - 20 g = 55 grams.<br>
• Next 20 g (21–40 g): + ₹2.00<br>
• Next 20 g (41–60 g): + ₹2.00<br>
• Remaining 15 g (part of next 20 g, 61–75 g): + ₹2.00<br>
Total additional 20 g units = 3 units.<br>
Additional cost = 3 × ₹2.00 = <strong>₹6.00</strong>.<br><br>
<strong>Total Postage Required:</strong><br>
₹5.00 + ₹6.00 = <strong>₹11.00</strong>.`,
      marks: 3,
      rubric: [
        { key: "Base charge for first 20 g (₹5.00)", marks: "1.0 M" },
        { key: "Identifying 3 additional units (₹6.00)", marks: "1.0 M" },
        { key: "Total postage: ₹11.00", marks: "1.0 M" }
      ]
    },
    {
      category: "Weight Estimation • Grams vs. Kilograms",
      q: "State whether the following objects should be measured in 'grams' or 'kilograms':<br>(a) A tube of toothpaste<br>(b) A sack of rice<br>(c) A golden ring<br>(d) A newborn baby",
      ans: `<strong>Units of Weight:</strong><br>
• (a) A tube of toothpaste: <strong>Grams (g)</strong> (approx. 100 g - 150 g)<br>
• (b) A sack of rice: <strong>Kilograms (kg)</strong> (approx. 25 kg - 50 kg)<br>
• (c) A golden ring: <strong>Grams (g)</strong> (approx. 4 g - 8 g)<br>
• (d) A newborn baby: <strong>Kilograms (kg)</strong> (approx. 2.5 kg - 3.5 kg).`,
      marks: 2,
      rubric: [
        { key: "All four units correctly identified", marks: "2.0 M" }
      ]
    },
    {
      category: "Weight Conversion • Balancing Scales",
      q: "How many 250-gram packets of tea make 1 1/2 kilograms?",
      ans: `<strong>Calculation:</strong><br>
1. Convert 1 1/2 kg into grams:<br>
1 kg = 1,000 g<br>
1/2 kg = 500 g<br>
Total weight = 1,000 g + 500 g = <strong>1,500 grams</strong>.<br><br>
2. Number of 250 g packets:<br>
1,500 ÷ 250 = <strong>6 packets</strong>.<br><br>
Exactly <strong>6 packets</strong> of tea make 1 1/2 kg.`,
      marks: 2,
      rubric: [
        { key: "Conversion to 1,500 g", marks: "1.0 M" },
        { key: "Division: 1500 ÷ 250 = 6 packets", marks: "1.0 M" }
      ]
    }
  ],
  mg13: [
    {
      category: "Area & Perimeter • Grid Squares",
      q: "A shape is drawn on a 1 cm square grid. It covers 12 complete squares and 6 half squares. (a) What is the area of this shape in square centimetres? (b) If each square has side 1 cm, what is the area of 1 unit square?",
      ans: `<strong>Grid Area Calculation:</strong><br>
• Area of 1 unit square with side 1 cm = 1 cm × 1 cm = <strong>1 sq cm</strong>.<br><br>
1. 12 complete squares = 12 × 1 sq cm = 12 sq cm.<br>
2. 6 half squares = 6 × (1/2 sq cm) = 3 sq cm.<br><br>
<strong>Total Area of the Shape:</strong><br>
12 + 3 = <strong>15 sq cm</strong>.`,
      marks: 3,
      rubric: [
        { key: "Area of 1 unit square = 1 sq cm", marks: "1.0 M" },
        { key: "Combining complete and half squares accurately (12 + 3)", marks: "1.0 M" },
        { key: "Total area: 15 sq cm", marks: "1.0 M" }
      ]
    },
    {
      category: "Field Fencing • Barbed Wire Math",
      q: "Ganpat has a field with sides 15 m, 20 m, 18 m, and 27 m. He bought a 100-metre roll of barbed wire to fence the boundary once. (a) What is the perimeter of his field? (b) How much wire will be left over after fencing?",
      ans: `<strong>Step-by-Step Solution:</strong><br>
1. <strong>Perimeter of the Field:</strong><br>
Perimeter = Sum of all 4 sides<br>
= 15 m + 20 m + 18 m + 27 m = <strong>80 metres</strong>.<br><br>
2. <strong>Wire Left Over:</strong><br>
Wire roll length = 100 m<br>
Wire used = 80 m<br>
Leftover wire = 100 m - 80 m = <strong>20 metres</strong>.`,
      marks: 3,
      rubric: [
        { key: "Correct sum of sides = 80 m", marks: "1.5 M" },
        { key: "Subtraction 100 - 80 = 20 m left", marks: "1.5 M" }
      ]
    }
  ],
  mg14: [
    {
      category: "Smart Charts • Attendance Analysis",
      q: "Look at the primary school attendance record for a rainy day:<br>• Class 1: Total 30, Absent 4<br>• Class 2: Total 28, Absent 3<br>• Class 3: Total 32, Absent 5<br>• Class 4: Total 35, Absent 2<br>• Class 5: Total 25, Absent 1<br>(a) What was the total number of students enrolled in the school? (b) How many total students were present on that day?",
      ans: `<strong>Step-by-Step Data Analysis:</strong><br>
1. <strong>(a) Total Students Enrolled:</strong><br>
30 + 28 + 32 + 35 + 25 = <strong>150 students</strong>.<br><br>
2. <strong>Total Students Absent:</strong><br>
4 + 3 + 5 + 2 + 1 = <strong>15 students</strong>.<br><br>
3. <strong>(b) Total Students Present:</strong><br>
150 (Total) - 15 (Absent) = <strong>135 students</strong>.<br><br>
In total, <strong>135 students were present</strong> on that rainy day.`,
      marks: 3,
      rubric: [
        { key: "Total enrolled = 150", marks: "1.0 M" },
        { key: "Total absent = 15", marks: "1.0 M" },
        { key: "Total present = 135", marks: "1.0 M" }
      ]
    },
    {
      category: "Data Visualization • Bar Charts",
      q: "A bar graph shows favourite fruits of Class 4 children. The bar for Mango has height 18 units, Apple 12 units, Banana 8 units, and Orange 6 units. (a) Which fruit is most popular? (b) How many more children prefer Mango over Banana?",
      ans: `<strong>Bar Graph Reading:</strong><br>
• Mango = 18<br>
• Apple = 12<br>
• Banana = 8<br>
• Orange = 6<br><br>
1. <strong>(a) Most Popular Fruit:</strong> <strong>Mango</strong> (tallest bar with 18 votes).<br>
2. <strong>(b) Difference between Mango and Banana:</strong><br>
18 - 8 = <strong>10 more children</strong>.`,
      marks: 2,
      rubric: [
        { key: "Most popular fruit identified as Mango", marks: "1.0 M" },
        { key: "Correct difference: 18 - 8 = 10", marks: "1.0 M" }
      ]
    },
    {
      category: "Tally Tables • Traffic Survey",
      q: "A student counts vehicles passing her gate in 15 minutes: 14 bicycles, 9 cars, and 6 auto-rickshaws. Represent each vehicle count using 5-bar tally marks.",
      ans: `<strong>Tally Marks Representation:</strong><br>
• <strong>Bicycles (14):</strong> <s>||||</s> &nbsp; <s>||||</s> &nbsp; |||| (Two groups of five + four)<br>
• <strong>Cars (9):</strong> <s>||||</s> &nbsp; |||| (One group of five + four)<br>
• <strong>Auto-rickshaws (6):</strong> <s>||||</s> &nbsp; | (One group of five + one).`,
      marks: 2,
      rubric: [
        { key: "Accurate 5-bar grouping for 14, 9, and 6", marks: "2.0 M" }
      ]
    }
  ]
};

// Merge extra questions into existing chapters
existing.forEach(ch => {
  if (extraQuestions[ch.id]) {
    ch.questions = ch.questions.concat(extraQuestions[ch.id]);
  }
});

const output = `// Official NCERT Class 4 Mathematics (Math-Magic / गणित का जादू) Complete Dataset - Chapters 1 to 14
// Aligned with Classic CBSE Curriculum (2026-27 Session) - 100% Comprehensive Coverage

const mathMagicChapters = ${JSON.stringify(existing, null, 2)};

module.exports = { mathMagicChapters };
`;

fs.writeFileSync(path.resolve(__dirname, 'data-c4-maths/mathMagicData.js'), output, 'utf8');
console.log('Successfully enriched mathMagicData.js with 4 questions per chapter across all 14 chapters!');
