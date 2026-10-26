// Official NCERT Class 5 Mathematics: "Maths Mela" - Chapters 9, 10, 11 Authentic Questions
// Aligned with NEP 2020 / NCF 2023 Curriculum & CBSE Marking Scheme 2026-27

const melaCh9_10_11 = {
  mela9: [
    {
      category: "Coconut Orchard Planting • Multiplication Grid",
      q: "A coconut grove has 24 rows of trees, with 18 trees in each row.<br>(a) Find the total number of coconut trees in the orchard using the box/grid multiplication method.<br>(b) Verify using the standard column multiplication algorithm.",
      ans: `<strong>Multiplication Working (24 × 18):</strong><br>
• <strong>(a) Box Method:</strong> Split 24 into 20 + 4, and 18 into 10 + 8:<br>
- 20 × 10 = 200<br>
- 4 × 10 = 40<br>
- 20 × 8 = 160<br>
- 4 × 8 = 32<br>
- Sum = 200 + 40 + 160 + 32 = <strong>432 trees</strong>.<br>
• <strong>(b) Column Method:</strong> 24 × 8 = 192; 24 × 10 = 240; 192 + 240 = <strong>432 trees</strong>. Both methods match!`,
      marks: 3,
      rubric: [
        { key: "Box method working", marks: "1.5 M" },
        { key: "Column verification = 432 trees", marks: "1.5 M" }
      ]
    },
    {
      category: "Harvest Yield • Coconut Packing in Sacks",
      q: "A farmer plucks 2,160 coconuts. He packs them into sacks of 45 coconuts each.<br>(a) How many full sacks are packed?<br>(b) If each sack is sold for ₹1,125, what is his total earnings from selling all the sacks?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Sacks Packed:</strong> 2,160 ÷ 45 = <strong>48 sacks</strong>.<br>
• <strong>(b) Total Earnings:</strong> 48 sacks × ₹1,125 = <strong>₹54,000</strong>.`,
      marks: 3,
      rubric: [
        { key: "Sacks packed = 48", marks: "1.5 M" },
        { key: "Total revenue = ₹54,000", marks: "1.5 M" }
      ]
    },
    {
      category: "Coconut Water Stalls • Daily Earnings",
      q: "A roadside tender coconut vendor buys coconuts from the farm at ₹28 each and sells fresh coconut water at ₹45 each.<br>(a) What is his profit on 1 coconut?<br>(b) If he sells 65 coconuts on Sunday, calculate his total sales revenue and net profit.",
      ans: `<strong>Profit & Revenue Calculations:</strong><br>
• <strong>(a) Profit per Coconut:</strong> ₹45 - ₹28 = <strong>₹17 profit per coconut</strong>.<br>
• <strong>(b) Sunday Sales (65 Coconuts):</strong><br>
- Total revenue = 65 × ₹45 = <strong>₹2,925</strong>.<br>
- Cost price = 65 × ₹28 = ₹1,820.<br>
- Net profit = 65 × ₹17 = <strong>₹1,105</strong>.`,
      marks: 3,
      rubric: [
        { key: "Profit per coconut = ₹17", marks: "1.0 M" },
        { key: "Total revenue = ₹2,925", marks: "1.0 M" },
        { key: "Net profit = ₹1,105", marks: "1.0 M" }
      ]
    },
    {
      category: "Sapling Nursery • Planting in Beds",
      q: "A school gardener receives 576 plant saplings. He wants to plant them in 18 equal rows.<br>(a) How many saplings will be planted in each row?<br>(b) If he had 600 saplings instead, how many saplings would be in each row and how many would be left over?",
      ans: `<strong>Division with and without Remainder:</strong><br>
• <strong>(a) 576 Saplings in 18 Rows:</strong> 576 ÷ 18 = <strong>32 saplings per row</strong>.<br>
• <strong>(b) 600 Saplings in 18 Rows:</strong><br>
- 600 ÷ 18 gives quotient 33 with remainder 6 (18 × 33 = 594; 600 - 594 = 6).<br>
- <strong>33 saplings per row with 6 saplings left over</strong>.`,
      marks: 3,
      rubric: [
        { key: "576 ÷ 18 = 32 saplings", marks: "1.5 M" },
        { key: "600 ÷ 18 = 33 per row with remainder 6", marks: "1.5 M" }
      ]
    },
    {
      category: "Coconut Oil Mill • Extraction Proportions",
      q: "A copra oil mill extracts 1 litre of pure coconut oil from every 15 dry coconuts.<br>(a) How many litres of oil are produced from 1,800 coconuts?<br>(b) If 1 litre of coconut oil sells for ₹240, what is the value of the oil produced?",
      ans: `<strong>Proportion Calculations:</strong><br>
• <strong>(a) Oil Extracted:</strong> 1,800 ÷ 15 = <strong>120 litres of oil</strong>.<br>
• <strong>(b) Market Value:</strong> 120 L × ₹240 = <strong>₹28,800</strong>.`,
      marks: 3,
      rubric: [
        { key: "Oil produced = 120 L", marks: "1.5 M" },
        { key: "Market value = ₹28,800", marks: "1.5 M" }
      ]
    },
    {
      category: "Multi-digit Multiplication • Distributive Property",
      q: "Evaluate using the distributive property: $48 \\times 25$. Show how you can compute this quickly by thinking of 25 as 100 ÷ 4.",
      ans: `<strong>Mental Arithmetic Strategies:</strong><br>
• Method 1 (Distributive): 48 × (20 + 5) = (48 × 20) + (48 × 5) = 960 + 240 = <strong>1,200</strong>.<br>
• Method 2 (Quarter of 100): 25 = 100 ÷ 4.<br>
48 × 25 = (48 × 100) ÷ 4 = 4,800 ÷ 4 = <strong>1,200</strong>.`,
      marks: 3,
      rubric: [
        { key: "Distributive method steps", marks: "1.5 M" },
        { key: "Quarter-hundred method = 1,200", marks: "1.5 M" }
      ]
    },
    {
      category: "Worker Wages • Daily and Weekly Share",
      q: "A coconut grove employs 8 workers for harvesting. The owner pays each worker ₹450 per day.<br>(a) What is the total wage bill for all 8 workers for one day?<br>(b) If the harvest work lasts for 6 days, what is the total amount paid in wages?",
      ans: `<strong>Wage Calculations:</strong><br>
• <strong>(a) Daily Total for 8 Workers:</strong> 8 × ₹450 = <strong>₹3,600 per day</strong>.<br>
• <strong>(b) 6-Day Wage Bill:</strong> 6 × ₹3,600 = <strong>₹21,600</strong>.`,
      marks: 3,
      rubric: [
        { key: "Daily wages = ₹3,600", marks: "1.5 M" },
        { key: "6-day wages = ₹21,600", marks: "1.5 M" }
      ]
    },
    {
      category: "Truck Loading Capacity • Gross Weight",
      q: "A small tempo truck can carry a maximum payload of 1,500 kg. A bag of 50 coconuts weighs 30 kg.<br>(a) What is the maximum number of such bags the truck can safely transport in one trip?<br>(b) How many total coconuts are transported in that full truck load?",
      ans: `<strong>Payload Calculations:</strong><br>
• <strong>(a) Maximum Bags:</strong> 1,500 kg ÷ 30 kg/bag = <strong>50 bags</strong>.<br>
• <strong>(b) Total Coconuts:</strong> 50 bags × 50 coconuts/bag = <strong>2,500 coconuts</strong>.`,
      marks: 3,
      rubric: [
        { key: "Max bags = 50", marks: "1.5 M" },
        { key: "Total coconuts = 2,500", marks: "1.5 M" }
      ]
    },
    {
      category: "Irrigation Drip System • Water Flow",
      q: "An automated drip irrigation pipe delivers 2.5 litres of water per hour to each coconut tree. The grove has 160 trees and the pump runs for 4 hours daily.<br>(a) How many litres of water does one tree receive in 4 hours?<br>(b) How many litres of water are supplied to the entire grove daily?",
      ans: `<strong>Water Delivery Calculations:</strong><br>
• <strong>(a) Water per Tree:</strong> 4 hours × 2.5 L/h = <strong>10 litres per tree</strong>.<br>
• <strong>(b) Total Daily Water for 160 Trees:</strong> 160 × 10 L = <strong>1,600 litres</strong>.`,
      marks: 3,
      rubric: [
        { key: "One tree = 10 L", marks: "1.5 M" },
        { key: "Total grove = 1,600 L", marks: "1.5 M" }
      ]
    },
    {
      category: "Division Verification Algorithm",
      q: "Divide 1,485 by 12. State the quotient and the remainder, and verify your answer using the formula: $\\text{Dividend} = (\\text{Divisor} \\times \\text{Quotient}) + \\text{Remainder}$.",
      ans: `<strong>Division & Proof:</strong><br>
1. 1,485 ÷ 12:<br>
• 12 × 100 = 1,200 (Remainder 285)<br>
• 12 × 20 = 240 (Remainder 45)<br>
• 12 × 3 = 36 (Remainder 9)<br>
<strong>Quotient = 123</strong>, <strong>Remainder = 9</strong>.<br>
2. <strong>Verification:</strong><br>
(12 × 123) + 9 = 1,476 + 9 = <strong>1,485</strong>. The division is verified!`,
      marks: 3,
      rubric: [
        { key: "Quotient = 123, Remainder = 9", marks: "1.5 M" },
        { key: "Verification formula step-by-step", marks: "1.5 M" }
      ]
    },
    {
      category: "Coir Rope Production • Unitary Conversion",
      q: "Coconut husks are processed into coir rope. From 100 coconut husks, 8 kg of coir fibre is obtained.<br>(a) How many kilograms of coir fibre can be made from 1,500 husks?<br>(b) If 1 kg of coir fibre makes 15 metres of rope, how many metres of rope can be produced?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Coir Fibre:</strong> (1,500 ÷ 100) × 8 kg = 15 × 8 = <strong>120 kg of coir fibre</strong>.<br>
• <strong>(b) Rope Length:</strong> 120 kg × 15 m/kg = <strong>1,800 metres of rope</strong>.`,
      marks: 3,
      rubric: [
        { key: "Coir fibre = 120 kg", marks: "1.5 M" },
        { key: "Rope length = 1,800 m", marks: "1.5 M" }
      ]
    },
    {
      category: "Plantation Layout • Area and Spacing",
      q: "Coconut trees are planted in a square grid with a spacing of 7 metres between trees.<br>(a) How many trees are in a row of length 84 metres (including trees at both ends)?<br>(b) If the orchard is a square of 84 m × 84 m, what is the total number of trees planted?",
      ans: `<strong>Grid Spacing:</strong><br>
• <strong>(a) Trees per Row:</strong> Number of 7-metre intervals = 84 ÷ 7 = 12 intervals.<br>
- Trees per row = Intervals + 1 (posts and spaces rule) = 12 + 1 = <strong>13 trees</strong>.<br>
• <strong>(b) Total Trees in Square Orchard:</strong> 13 rows × 13 trees/row = <strong>169 trees</strong>.`,
      marks: 3,
      rubric: [
        { key: "12 intervals + 1 = 13 trees per row", marks: "1.5 M" },
        { key: "Total trees = 13 × 13 = 169", marks: "1.5 M" }
      ]
    },
    {
      category: "Coconut Tree Growth • Time Progression",
      q: "A high-yielding dwarf coconut tree begins fruiting in 4 years and produces fruit for 35 years.<br>(a) For how many years does the tree yield coconuts?<br>(b) If it produces an average of 140 coconuts annually, how many coconuts will one tree yield over its entire bearing life?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Bearing Period:</strong> <strong>35 years</strong>.<br>
• <strong>(b) Lifetime Yield:</strong> 35 years × 140 coconuts/year = <strong>4,900 coconuts</strong>.`,
      marks: 3,
      rubric: [
        { key: "Bearing period = 35 years", marks: "1.0 M" },
        { key: "Lifetime yield: 35 × 140 = 4,900", marks: "2.0 M" }
      ]
    },
    {
      category: "Harvest Cost Breakdown • Net Income",
      q: "A farmer sells 4,500 coconuts at ₹22 each. His expenses were:<br>• Tree climber charges: ₹3 per coconut<br>• Cartage to market: ₹1,500<br>• Market cess/tax: ₹1,200<br>(a) Find gross revenue.<br>(b) Find total expenses.<br>(c) Find his net profit.",
      ans: `<strong>Financial Calculations:</strong><br>
• <strong>(a) Gross Revenue:</strong> 4,500 × ₹22 = <strong>₹99,000</strong>.<br>
• <strong>(b) Total Expenses:</strong><br>
- Climber charges: 4,500 × ₹3 = ₹13,500.<br>
- Cartage = ₹1,500.<br>
- Market cess = ₹1,200.<br>
- Total expenses = ₹13,500 + ₹1,500 + ₹1,200 = <strong>₹16,200</strong>.<br>
• <strong>(c) Net Profit:</strong> ₹99,000 - ₹16,200 = <strong>₹82,800</strong>.`,
      marks: 3,
      rubric: [
        { key: "Gross revenue = ₹99,000", marks: "1.0 M" },
        { key: "Total expenses = ₹16,200", marks: "1.0 M" },
        { key: "Net profit = ₹82,800", marks: "1.0 M" }
      ]
    },
    {
      category: "Mental Math • Multiplications by 11 and 12",
      q: "Calculate mentally using shortcuts:<br>(a) 63 × 11<br>(b) 45 × 12<br>(c) 250 × 16",
      ans: `<strong>Shortcuts:</strong><br>
• <strong>(a) 63 × 11:</strong> Sum of digits = 6 + 3 = 9. Place between: <strong>693</strong>.<br>
• <strong>(b) 45 × 12:</strong> (45 × 10) + (45 × 2) = 450 + 90 = <strong>540</strong>.<br>
• <strong>(c) 250 × 16:</strong> 250 × 4 × 4 = 1,000 × 4 = <strong>4,000</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 693", marks: "1.0 M" },
        { key: "Part (b): 540", marks: "1.0 M" },
        { key: "Part (c): 4,000", marks: "1.0 M" }
      ]
    },
    {
      category: "Coconut Shell Crafts • Artisanal Production",
      q: "A craftsman makes decorative bowls from coconut shells. He can craft 6 bowls in a day. He receives an order for 150 bowls.<br>(a) How many working days will he take to complete the order?<br>(b) If he sells each bowl for ₹85, how much will he earn from the entire order?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Days Required:</strong> 150 ÷ 6 = <strong>25 working days</strong>.<br>
• <strong>(b) Total Earnings:</strong> 150 × ₹85 = <strong>₹12,750</strong>.`,
      marks: 3,
      rubric: [
        { key: "Days = 25", marks: "1.5 M" },
        { key: "Earnings = ₹12,750", marks: "1.5 M" }
      ]
    },
    {
      category: "Division with Zero in Quotient",
      q: "Solve: $4,208 \\div 4$. Show your long division clearly and explain why zero must be written in the hundreds/tens place.",
      ans: `<strong>Long Division Steps:</strong><br>
• Divide thousands: 4 ÷ 4 = 1 (Remainder 0).<br>
• Bring down 2: 2 cannot be divided by 4 (2 < 4). <strong>We must write 0 in the quotient</strong>.<br>
• Bring down 0 to make 20: 20 ÷ 4 = 5 (Remainder 0).<br>
• Bring down 8: 8 ÷ 4 = 2 (Remainder 0).<br>
<strong>Quotient = 1,052</strong>, Remainder = 0.<br>
<em>Explanation: Whenever the brought-down digit is smaller than the divisor, a 0 is placed in that place value of the quotient before bringing down the next digit.</em>`,
      marks: 3,
      rubric: [
        { key: "Correct quotient = 1,052", marks: "1.5 M" },
        { key: "Clear explanation for placing 0", marks: "1.5 M" }
      ]
    },
    {
      category: "Coconut Jaggery (Palm Sugar) Yield",
      q: "From 8 litres of sweet palm sap (neera), 1 kg of palm jaggery is prepared.<br>(a) How many kilograms of jaggery can be made from 120 litres of sap?<br>(b) If palm jaggery sells at ₹180 per kg, find the total sales value.",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Jaggery Yield:</strong> 120 L ÷ 8 L/kg = <strong>15 kg of jaggery</strong>.<br>
• <strong>(b) Sales Value:</strong> 15 kg × ₹180 = <strong>₹2,700</strong>.`,
      marks: 3,
      rubric: [
        { key: "Jaggery = 15 kg", marks: "1.5 M" },
        { key: "Sales value = ₹2,700", marks: "1.5 M" }
      ]
    },
    {
      category: "HOTS • Coconut Division Riddle",
      q: "A farmer divided a heap of coconuts equally among his 4 sons, and 2 coconuts were left over. When he divided the same heap among 5 neighbours, 2 coconuts were still left over. What is the smallest possible number of coconuts in the heap (greater than 10)?",
      ans: `<strong>LCM and Remainder Principle:</strong><br>
1. The number leaves a remainder of 2 when divided by both 4 and 5.<br>
2. LCM of 4 and 5 = 4 × 5 = <strong>20</strong>.<br>
3. The number must be of the form: $\\text{LCM}(4, 5) \\times k + 2 = 20k + 2$.<br>
4. For $k = 1$: Number = 20 + 2 = <strong>22 coconuts</strong>.<br>
5. <strong>Verification:</strong><br>
- 22 ÷ 4 = 5 with remainder 2.<br>
- 22 ÷ 5 = 4 with remainder 2.<br>
The smallest possible number of coconuts is <strong>22</strong>.`,
      marks: 3,
      rubric: [
        { key: "LCM(4, 5) = 20", marks: "1.5 M" },
        { key: "Smallest number = 22 with verification", marks: "1.5 M" }
      ]
    },
    {
      category: "Water Reservoir for Plantation",
      q: "An irrigation farm pond has a capacity of 48,000 litres. A solar pump fills the pond at the rate of 1,600 litres per hour.<br>(a) How many hours will the pump take to fill the empty pond completely?<br>(b) If the pump runs for 6 hours daily, how many days are required?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Total Pumping Hours:</strong> 48,000 ÷ 1,600 = <strong>30 hours</strong>.<br>
• <strong>(b) Days Required:</strong> 30 hours ÷ 6 hours/day = <strong>5 days</strong>.`,
      marks: 3,
      rubric: [
        { key: "30 hours to fill", marks: "1.5 M" },
        { key: "5 days at 6 hours/day", marks: "1.5 M" }
      ]
    },
    {
      category: "Coconut Tree Shade • Geometric Area",
      q: "The fronds of an adult coconut palm cast a circular shadow of radius 3 metres when the sun is overhead.<br>(a) Approximate the area of shade cast by one tree (take $\\pi \\approx 3.14$).<br>(b) If 50 trees cast non-overlapping shade, what is the combined area of shaded ground?",
      ans: `<strong>Circular Area Calculations ($A = \\pi r^2$):</strong><br>
• <strong>(a) Shade per Tree:</strong> Area = $3.14 \\times 3 \\times 3 = 3.14 \\times 9 = \\mathbf{28.26\\text{ sq m}}$.<br>
• <strong>(b) 50 Trees:</strong> 50 × 28.26 = <strong>1,413 square metres</strong>.`,
      marks: 3,
      rubric: [
        { key: "One tree area = 28.26 sq m", marks: "1.5 M" },
        { key: "50 trees = 1,413 sq m", marks: "1.5 M" }
      ]
    },
    {
      category: "Mental Arithmetic • Estimation of Products",
      q: "Estimate the product by rounding each factor to the nearest ten:<br>(a) 38 × 52<br>(b) 69 × 21<br>(c) 87 × 44",
      ans: `<strong>Estimation Steps:</strong><br>
• <strong>(a) 38 × 52:</strong> Round 38 → 40; 52 → 50. Estimate = 40 × 50 = <strong>2,000</strong> (Exact = 1,976).<br>
• <strong>(b) 69 × 21:</strong> Round 69 → 70; 21 → 20. Estimate = 70 × 20 = <strong>1,400</strong> (Exact = 1,449).<br>
• <strong>(c) 87 × 44:</strong> Round 87 → 90; 44 → 40. Estimate = 90 × 40 = <strong>3,600</strong> (Exact = 3,828).`,
      marks: 3,
      rubric: [
        { key: "Part (a): 2,000", marks: "1.0 M" },
        { key: "Part (b): 1,400", marks: "1.0 M" },
        { key: "Part (c): 3,600", marks: "1.0 M" }
      ]
    },
    {
      category: "True or False with Arithmetic Reason",
      q: "State True or False with reasoning:<br>(a) If a number is divisible by 10, its ones digit must be 0.<br>(b) $25 \\times 48$ is the same as $100 \\times 12$.<br>(c) The remainder in any division problem can be equal to or greater than the divisor.",
      ans: `<strong>Justifications:</strong><br>
• <strong>(a) True:</strong> All multiples of 10 end with the digit 0.<br>
• <strong>(b) True:</strong> $25 \\times 48 = 25 \\times (4 \\times 12) = (25 \\times 4) \\times 12 = 100 \\times 12 = 1,200$. Both equal 1,200.<br>
• <strong>(c) False:</strong> The remainder must strictly be <strong>less than the divisor</strong>. If it were equal or greater, another division step could be carried out.`,
      marks: 3,
      rubric: [
        { key: "Part (a): True with place value reason", marks: "1.0 M" },
        { key: "Part (b): True with associative property", marks: "1.0 M" },
        { key: "Part (c): False (remainder must be < divisor)", marks: "1.0 M" }
      ]
    },
    {
      category: "Comprehensive Orchard Harvest Review",
      q: "Over a 3-month harvest season, a farm records coconut production:<br>Month 1: 3,450; Month 2: 4,120; Month 3: 3,830.<br>(a) Find total coconuts harvested.<br>(b) If 10% of coconuts are kept for domestic consumption and seed, how many are sold in the market?<br>(c) At ₹20 per coconut, calculate the gross revenue from sales.",
      ans: `<strong>Comprehensive Harvest Accounting:</strong><br>
• <strong>(a) Total Harvest:</strong> 3,450 + 4,120 + 3,830 = <strong>11,400 coconuts</strong>.<br>
• <strong>(b) Market Sale:</strong><br>
- Domestic share = 10% of 11,400 = 1,140 coconuts.<br>
- Coconuts sold = 11,400 - 1,140 = <strong>10,260 coconuts</strong>.<br>
• <strong>(c) Gross Revenue:</strong> 10,260 × ₹20 = <strong>₹2,05,200</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total = 11,400 coconuts", marks: "1.0 M" },
        { key: "Coconuts sold = 10,260", marks: "1.0 M" },
        { key: "Gross revenue = ₹2,05,200", marks: "1.0 M" }
      ]
    }
  ],

  mela10: [
    {
      category: "Lines of Symmetry • Regular Polygons",
      q: "State the number of lines of symmetry for each of the following geometric figures:<br>(a) Equilateral Triangle<br>(b) Square<br>(c) Regular Pentagon<br>(d) Regular Hexagon<br>(e) Circle",
      ans: `<strong>Lines of Symmetry:</strong><br>
• <strong>(a) Equilateral Triangle:</strong> <strong>3 lines of symmetry</strong> (from each vertex to the midpoint of the opposite side).<br>
• <strong>(b) Square:</strong> <strong>4 lines of symmetry</strong> (2 through opposite midpoints + 2 along diagonals).<br>
• <strong>(c) Regular Pentagon:</strong> <strong>5 lines of symmetry</strong>.<br>
• <strong>(d) Regular Hexagon:</strong> <strong>6 lines of symmetry</strong>.<br>
• <strong>(e) Circle:</strong> <strong>Infinite lines of symmetry</strong> (any diameter line through the center).`,
      marks: 3,
      rubric: [
        { key: "Triangle (3), Square (4)", marks: "1.0 M" },
        { key: "Pentagon (5), Hexagon (6)", marks: "1.0 M" },
        { key: "Circle (Infinite)", marks: "1.0 M" }
      ]
    },
    {
      category: "Mirror Halves • Reflection Symmetry",
      q: "Explain what happens when a mirror is placed on the dotted line of a symmetrical drawing. If only the left half of an insect is drawn on paper, how does the mirror complete the full insect?",
      ans: `<strong>Mirror Reflection Principle:</strong><br>
1. <strong>Mirror Halves:</strong> A mirror placed along the line of symmetry reflects the drawn half so that the real drawing and its virtual reflection together look exactly like the complete object.<br>
2. <strong>Insect Completion:</strong> The line of symmetry runs down the middle of the insect from head to tail. The mirror reflects the single antenna, 3 legs, and 1 wing on the left side to create the corresponding right antenna, 3 legs, and 1 wing, perfectly completing a realistic 6-legged insect.`,
      marks: 3,
      rubric: [
        { key: "Mirror reflection creates identical opposite image", marks: "1.5 M" },
        { key: "Line of symmetry acts as reflection axis completing body", marks: "1.5 M" }
      ]
    },
    {
      category: "English Alphabet Symmetry",
      q: "Identify which capital English letters have:<br>(a) Vertical line of symmetry only (e.g. A)<br>(b) Horizontal line of symmetry only (e.g. B)<br>(c) Both vertical and horizontal lines of symmetry<br>(d) No line of symmetry",
      ans: `<strong>Alphabet Symmetry Classification:</strong><br>
• <strong>(a) Vertical Line Only:</strong> <strong>A, M, T, U, V, W, Y</strong>.<br>
• <strong>(b) Horizontal Line Only:</strong> <strong>B, C, D, E, K</strong>.<br>
• <strong>(c) Both Vertical and Horizontal:</strong> <strong>H, I, O, X</strong>.<br>
• <strong>(d) No Line of Symmetry:</strong> <strong>F, G, J, L, P, Q, R, S, Z</strong>.`,
      marks: 3,
      rubric: [
        { key: "Vertical: A, M, T, etc.", marks: "0.75 M" },
        { key: "Horizontal: B, C, D, etc.", marks: "0.75 M" },
        { key: "Both: H, I, O, X", marks: "0.75 M" },
        { key: "None: F, G, J, etc.", marks: "0.75 M" }
      ]
    },
    {
      category: "Paper Folding & Paper Cutting (Kirigami)",
      q: "A student folds a square piece of paper in half to make a rectangle, folds it in half again to make a smaller square, and punches a round hole through the folded corner.<br>(a) When the paper is unfolded completely, how many holes will appear?<br>(b) How are the holes arranged relative to the center?",
      ans: `<strong>Fold and Punch Symmetry:</strong><br>
• <strong>(a) Number of Holes:</strong> The paper has 4 layers (2 folds: 2 × 2 = 4). Unfolding gives <strong>4 holes</strong>.<br>
• <strong>(b) Arrangement:</strong> The 4 holes are arranged symmetrically around the center of the square, forming the 4 corners of a smaller square around the center point.`,
      marks: 3,
      rubric: [
        { key: "4 holes appear", marks: "1.5 M" },
        { key: "Symmetrical arrangement around center", marks: "1.5 M" }
      ]
    },
    {
      category: "Symmetry in Indian Monuments & Architecture",
      q: "The Taj Mahal in Agra is renowned worldwide for its bilateral architectural symmetry.<br>(a) Explain where the main line of symmetry runs when viewing the monument from the front garden pool.<br>(b) Name three architectural elements that are mirrored on either side.",
      ans: `<strong>Architectural Symmetry:</strong><br>
• <strong>(a) Axis of Symmetry:</strong> The vertical line of symmetry runs directly through the pinnacle of the central dome, down through the apex of the central archway (iwan), and continues along the centerline of the reflecting pool.<br>
• <strong>(b) Mirrored Elements:</strong><br>
1. The <strong>four minarets</strong> (2 on the left, 2 on the right).<br>
2. The <strong>side kiosks (chhatris)</strong> and secondary arches.<br>
3. The <strong>flanking red sandstone buildings</strong> (the Mosque on the west and the Jawab / guest house on the east).`,
      marks: 3,
      rubric: [
        { key: "Central vertical axis identified", marks: "1.5 M" },
        { key: "Three mirrored elements (minarets, arches, side buildings)", marks: "1.5 M" }
      ]
    },
    {
      category: "Digits Symmetry • 0 to 9",
      q: "Examine the digits <strong>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</strong>.<br>(a) Which digits have at least one line of symmetry?<br>(b) Which digit has both horizontal and vertical lines of symmetry?",
      ans: `<strong>Numerical Symmetry:</strong><br>
• <strong>(a) Digits with Line Symmetry:</strong><br>
- <strong>0:</strong> Both vertical and horizontal lines of symmetry.<br>
- <strong>3:</strong> Horizontal line of symmetry.<br>
- <strong>8:</strong> Both vertical and horizontal lines of symmetry.<br>
- (Note: 1 written as a simple vertical bar has symmetry).<br>
• <strong>(b) Both Axes:</strong> Digits <strong>0 and 8</strong> have both vertical and horizontal symmetry.`,
      marks: 3,
      rubric: [
        { key: "Digits 0, 3, 8 identified", marks: "1.5 M" },
        { key: "Both axes: 0 and 8", marks: "1.5 M" }
      ]
    },
    {
      category: "Rotational Symmetry vs Reflection Symmetry",
      q: "Can a shape have rotational symmetry but NO line of symmetry? Explain with two examples (consider letter 'S' and a pinwheel / swastika).",
      ans: `<strong>Analysis:</strong><br>
• <strong>Yes</strong>, a shape can have rotational symmetry without any line of reflection.<br>
• <strong>Example 1 (Letter 'S'):</strong> If you reflect 'S' across a vertical or horizontal line, it turns backwards and does not match. But if you rotate 'S' by 180° (half turn), it looks identical.<br>
• <strong>Example 2 (4-arm Pinwheel):</strong> When spun by 90°, each curved blade moves into the next position identically (order 4). However, reflecting across any line reverses the direction of the blade curves, so it has 0 lines of symmetry.`,
      marks: 3,
      rubric: [
        { key: "Yes with clear conceptual distinction", marks: "1.0 M" },
        { key: "Letter S analysis", marks: "1.0 M" },
        { key: "Pinwheel analysis", marks: "1.0 M" }
      ]
    },
    {
      category: "Rangoli Mirror Patterns • 4-Fold Symmetry",
      q: "A rangoli grid has 4 quadrants. A decorative diya motif is drawn in the top-left quadrant.<br>(a) If reflected across the vertical axis and horizontal axis, how many diyas will be in the finished rangoli?<br>(b) What is the total rotational symmetry order of this design?",
      ans: `<strong>4-Quadrant Symmetry:</strong><br>
• <strong>(a) Finished Diyas:</strong> 1 diya in each of the 4 quadrants = <strong>4 diyas</strong>.<br>
• <strong>(b) Rotational Symmetry:</strong> Because the motif is mirrored identically across both perpendicular axes, rotating by 90°, 180°, and 270° maps each quadrant onto another. Total order = <strong>Order 4</strong>.`,
      marks: 3,
      rubric: [
        { key: "4 diyas in total", marks: "1.5 M" },
        { key: "Rotational symmetry order 4", marks: "1.5 M" }
      ]
    },
    {
      category: "Geometric Word Symmetry • COD, MOM, NOON",
      q: "Look at the words:<br><strong>MOM, DAD, NOON, CHECK</strong>.<br>(a) Which word has a vertical line of symmetry when written horizontally?<br>(b) Which word looks identical when rotated 180° upside down?<br>(c) Which word has a horizontal line of symmetry when reflected in water?",
      ans: `<strong>Word Symmetry:</strong><br>
• <strong>(a) Vertical Symmetry:</strong> <strong>MOM</strong> (M, O, M are all vertically symmetric, and letters mirror across the center O).<br>
• <strong>(b) 180° Rotation:</strong> <strong>NOON</strong> (N rotates to N, O rotates to O, so upside down it still reads NOON).<br>
• <strong>(c) Horizontal (Water Reflection):</strong> <strong>CHECK</strong> (C, H, E, C, K all have horizontal symmetry axes).`,
      marks: 3,
      rubric: [
        { key: "Vertical: MOM", marks: "1.0 M" },
        { key: "180° Rotation: NOON", marks: "1.0 M" },
        { key: "Horizontal reflection: CHECK", marks: "1.0 M" }
      ]
    },
    {
      category: "Asymmetric Shapes • Concept",
      q: "(a) What is an asymmetric figure? Give two examples from everyday life.<br>(b) Is a scalene triangle symmetric? Explain why.",
      ans: `<strong>Asymmetry:</strong><br>
• <strong>(a) Definition:</strong> A figure that cannot be divided into two identical halves by any straight line and has no rotational symmetry (other than 360°) is called <strong>asymmetric</strong>. Examples: An outline of a human foot, a jagged coastline, the letter 'F'.<br>
• <strong>(b) Scalene Triangle:</strong> <strong>No</strong>, a scalene triangle has three unequal side lengths and three unequal angles. No fold line can match two sides together, so it has <strong>0 lines of symmetry</strong>.`,
      marks: 3,
      rubric: [
        { key: "Definition and examples of asymmetry", marks: "1.5 M" },
        { key: "Scalene triangle has 0 lines of symmetry", marks: "1.5 M" }
      ]
    },
    {
      category: "Mirror Halves Puzzle • Clock Face",
      q: "A line of symmetry is drawn through 12 and 6 on an analog clock face.<br>(a) Which number is the mirror half of 1?<br>(b) Which number is the mirror half of 2?<br>(c) Which number is the mirror half of 9?",
      ans: `<strong>Clock Face Reflections (Axis 12 to 6):</strong><br>
• <strong>(a) Mirror half of 1:</strong> <strong>11</strong>.<br>
• <strong>(b) Mirror half of 2:</strong> <strong>10</strong>.<br>
• <strong>(c) Mirror half of 9:</strong> <strong>3</strong>.<br>
<em>(General rule: Any number $N$ on the right mirrors to $12 - N$ on the left).</em>`,
      marks: 3,
      rubric: [
        { key: "1 mirrors to 11", marks: "1.0 M" },
        { key: "2 mirrors to 10", marks: "1.0 M" },
        { key: "9 mirrors to 3", marks: "1.0 M" }
      ]
    },
    {
      category: "Parallelogram Symmetry Analysis",
      q: "A student believes that a general parallelogram has 2 lines of symmetry along its diagonals. Is he correct? Prove with reasons.",
      ans: `<strong>Parallelogram Symmetry Proof:</strong><br>
• <strong>The student is Incorrect</strong>.<br>
• <strong>Reason:</strong> If you fold a general (non-rhombus) parallelogram along its diagonal, the opposite vertices do not coincide; they stick out in different directions.<br>
• A general parallelogram has <strong>0 lines of symmetry</strong>.<br>
• (However, it does have <strong>rotational symmetry of order 2</strong> around the intersection of its diagonals).`,
      marks: 3,
      rubric: [
        { key: "Incorrect conclusion stated", marks: "1.0 M" },
        { key: "Folding along diagonal fails to coincide", marks: "1.0 M" },
        { key: "Has 0 reflection lines but order 2 rotation", marks: "1.0 M" }
      ]
    },
    {
      category: "Rhombus vs Rectangle Symmetry",
      q: "Both a rhombus and a rectangle have 4 sides and 2 lines of symmetry.<br>(a) Where do the lines of symmetry lie in a rectangle?<br>(b) Where do the lines of symmetry lie in a rhombus?",
      ans: `<strong>Comparative Symmetry:</strong><br>
• <strong>(a) Rectangle:</strong> The 2 lines of symmetry connect the <strong>midpoints of opposite sides</strong> (horizontal and vertical bisectors). Diagonals are NOT lines of symmetry.<br>
• <strong>(b) Rhombus:</strong> The 2 lines of symmetry lie <strong>along its diagonals</strong>. Lines through side midpoints are NOT lines of symmetry.`,
      marks: 3,
      rubric: [
        { key: "Rectangle: midpoints of opposite sides", marks: "1.5 M" },
        { key: "Rhombus: along diagonals", marks: "1.5 M" }
      ]
    },
    {
      category: "Nature's Bilateral Symmetry • Biology & Math",
      q: "Bilateral symmetry is widespread in living organisms.<br>(a) Name three animals or plants that display bilateral symmetry.<br>(b) Which marine animal exhibits radial (5-fold) symmetry?",
      ans: `<strong>Biological Symmetry:</strong><br>
• <strong>(a) Bilateral Symmetry (1 vertical line of symmetry):</strong><br>
1. <strong>Butterfly</strong> (wings and antennae mirror left and right).<br>
2. <strong>Human face/body</strong>.<br>
3. <strong>Banyan or Peepal leaf</strong>.<br>
• <strong>(b) Radial 5-fold Symmetry:</strong> A <strong>Starfish</strong> (Sea star) has 5 symmetrical arms radiating from a central disk.`,
      marks: 3,
      rubric: [
        { key: "Three bilateral examples", marks: "1.5 M" },
        { key: "Starfish radial symmetry", marks: "1.5 M" }
      ]
    },
    {
      category: "Creating Symmetrical Patterns on Grids",
      q: "On a 10×10 square grid with a vertical mirror line running down the centre:<br>If coordinates (2, 3), (3, 5), and (4, 2) are shaded on the left side of line $x = 5$, what are their corresponding mirrored coordinates on the right side?",
      ans: `<strong>Grid Reflection across $x = 5$:</strong><br>
• Distance of Point $(X, Y)$ from mirror line $x = 5$ is $5 - X$.<br>
• Reflected X coordinate is $5 + (5 - X) = 10 - X$. Y remains unchanged.<br>
1. (2, 3) mirrors to $(10 - 2, 3) = \\mathbf{(8, 3)}$.<br>
2. (3, 5) mirrors to $(10 - 3, 5) = \\mathbf{(7, 5)}$.<br>
3. (4, 2) mirrors to $(10 - 4, 2) = \\mathbf{(6, 2)}$.`,
      marks: 3,
      rubric: [
        { key: "(2, 3) → (8, 3)", marks: "1.0 M" },
        { key: "(3, 5) → (7, 5)", marks: "1.0 M" },
        { key: "(4, 2) → (6, 2)", marks: "1.0 M" }
      ]
    },
    {
      category: "Symmetry of Traffic Signs",
      q: "Identify the lines of symmetry in the following traffic signs:<br>(a) 'STOP' sign (Regular Octagon)<br>(b) 'GIVE WAY' sign (Inverted Equilateral Triangle)<br>(c) 'SPEED LIMIT' sign (Circle with number)",
      ans: `<strong>Traffic Sign Symmetry:</strong><br>
• <strong>(a) Regular Octagon Blank:</strong> Has <strong>8 lines of symmetry</strong> (though text 'STOP' breaks it, the geometric board shape has 8 lines).<br>
• <strong>(b) Inverted Equilateral Triangle:</strong> Has <strong>3 lines of symmetry</strong> (1 vertical through the bottom apex + 2 through side corners).<br>
• <strong>(c) Plain Circular Board:</strong> Has <strong>infinite lines of symmetry</strong>.`,
      marks: 3,
      rubric: [
        { key: "Octagon: 8 lines", marks: "1.0 M" },
        { key: "Triangle: 3 lines", marks: "1.0 M" },
        { key: "Circle: Infinite lines", marks: "1.0 M" }
      ]
    },
    {
      category: "Kite Shape Symmetry",
      q: "(a) How many lines of symmetry does a geometric kite have?<br>(b) Where does the line of symmetry lie?<br>(c) Does a kite have rotational symmetry of order 2?",
      ans: `<strong>Kite Geometry:</strong><br>
• <strong>(a) Lines of Symmetry:</strong> A kite has exactly <strong>1 line of symmetry</strong>.<br>
• <strong>(b) Position:</strong> It runs along the <strong>main vertical diagonal</strong> connecting the vertices between pairs of equal adjacent sides.<br>
• <strong>(c) Rotational Symmetry:</strong> <strong>No</strong>, a kite looks different when rotated 180° (top and bottom vertices have different angles), so it has only order 1 (360°).`,
      marks: 3,
      rubric: [
        { key: "1 line of symmetry", marks: "1.0 M" },
        { key: "Main diagonal axis", marks: "1.0 M" },
        { key: "No rotational symmetry (order 1)", marks: "1.0 M" }
      ]
    },
    {
      category: "Symmetry in Playing Cards",
      q: "Examine a standard playing card:<br>(a) Do the King, Queen, and Jack court cards have line symmetry? Explain.<br>(b) What type of symmetry do standard double-headed face cards have?",
      ans: `<strong>Playing Card Symmetry:</strong><br>
• <strong>(a) Line Symmetry:</strong> <strong>No</strong>. Face cards have no line of reflection because one head is right-side up and the other is upside down; folding horizontally or vertically will not match.<br>
• <strong>(b) Symmetry Type:</strong> They possess <strong>Rotational Symmetry of Order 2 (180° point symmetry)</strong>. If you turn the card upside down, it looks identical.`,
      marks: 3,
      rubric: [
        { key: "No line reflection symmetry", marks: "1.5 M" },
        { key: "Order 2 rotational (point) symmetry", marks: "1.5 M" }
      ]
    },
    {
      category: "HOTS • Geometric Symmetry Riddle",
      q: "I am a quadrilateral. All my 4 sides are equal, but my 4 angles are not all 90°. How many lines of symmetry do I have, and what is my shape?",
      ans: `<strong>Deduction:</strong><br>
1. A quadrilateral with 4 equal sides is either a square or a rhombus.<br>
2. Since its angles are not all 90°, it is a <strong>Rhombus</strong>.<br>
3. A rhombus has exactly <strong>2 lines of symmetry</strong> (along its two diagonals).`,
      marks: 3,
      rubric: [
        { key: "Shape identified as Rhombus", marks: "1.5 M" },
        { key: "Has 2 lines of symmetry along diagonals", marks: "1.5 M" }
      ]
    },
    {
      category: "Snowflake Hexagonal Symmetry",
      q: "Every natural snowflake exhibits 6-fold radial symmetry.<br>(a) How many lines of symmetry does an ideal snowflake have?<br>(b) Through what minimum angle must a snowflake be turned to look unchanged?",
      ans: `<strong>Snowflake Geometry:</strong><br>
• <strong>(a) Lines of Symmetry:</strong> Like a regular hexagon, an ideal snowflake has <strong>6 lines of symmetry</strong> (3 through opposite arm pairs + 3 through gaps between arms).<br>
• <strong>(b) Minimum Turn:</strong> 360° ÷ 6 = <strong>60° turn</strong>.`,
      marks: 3,
      rubric: [
        { key: "6 lines of symmetry", marks: "1.5 M" },
        { key: "60° minimum turn", marks: "1.5 M" }
      ]
    },
    {
      category: "Symmetry of 3D Objects • Planes of Symmetry",
      q: "For 3D geometric solids, symmetry is across a flat 2D plane (plane of symmetry).<br>(a) How many planes of symmetry does a cube have?<br>(b) How many planes of symmetry does a sphere have?",
      ans: `<strong>3D Planes of Symmetry:</strong><br>
• <strong>(a) Cube:</strong> A cube has <strong>9 planes of symmetry</strong> (3 parallel to opposite faces + 6 diagonal planes passing through opposite edges).<br>
• <strong>(b) Sphere:</strong> A sphere has <strong>infinite planes of symmetry</strong> (any flat plane passing through its center point).`,
      marks: 3,
      rubric: [
        { key: "Cube = 9 planes", marks: "1.5 M" },
        { key: "Sphere = Infinite planes", marks: "1.5 M" }
      ]
    },
    {
      category: "Mirror Image Clock Time",
      q: "A clock without numbers shows the time as 3:00. If you look at this clock in a flat wall mirror, what time will it appear to show?",
      ans: `<strong>Mirror Reflection of Clock Hands:</strong><br>
1. At 3:00, the minute hand points straight up at 12, and the hour hand points right at 3.<br>
2. In the mirror, the vertical minute hand remains straight up at 12.<br>
3. The horizontal hour hand pointing right (at 3) reflects to point left (at 9).<br>
4. Therefore, the mirror image shows the hands at 12 and 9, which reads as <strong>9:00</strong>.`,
      marks: 3,
      rubric: [
        { key: "Minute hand remains at 12", marks: "1.0 M" },
        { key: "Hour hand mirrors from 3 to 9", marks: "1.0 M" },
        { key: "Apparent time = 9:00", marks: "1.0 M" }
      ]
    },
    {
      category: "True or False with Symmetry Reason",
      q: "State True or False with reasoning:<br>(a) An isosceles triangle has 3 lines of symmetry.<br>(b) The letter 'N' has rotational symmetry of order 2.<br>(c) A circle has more lines of symmetry than any polygon.",
      ans: `<strong>Justifications:</strong><br>
• <strong>(a) False:</strong> An isosceles triangle has only 2 equal sides, so it has only <strong>1 line of symmetry</strong> (from apex to base midpoint).<br>
• <strong>(b) True:</strong> Rotating 'N' by 180° reproduces an identical 'N'.<br>
• <strong>(c) True:</strong> Any polygon has a finite number of lines of symmetry (an $n$-gon has at most $n$ lines), whereas a circle has <strong>infinitely many lines</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): False (1 line)", marks: "1.0 M" },
        { key: "Part (b): True with 180° rotation", marks: "1.0 M" },
        { key: "Part (c): True (infinite vs finite)", marks: "1.0 M" }
      ]
    },
    {
      category: "Comprehensive Design Review • Logo Symmetry",
      q: "A school designs a circular emblem with 3 identical stylized swans arranged around a central flame at angles of 120°.<br>(a) What type of symmetry does the emblem possess?<br>(b) Does it have line symmetry? Explain.",
      ans: `<strong>Emblem Symmetry Analysis:</strong><br>
• <strong>(a) Symmetry Type:</strong> The emblem has <strong>Rotational Symmetry of Order 3</strong> (turns of 120°, 240°, and 360° leave the design unchanged).<br>
• <strong>(b) Line Symmetry:</strong> <strong>No</strong>, because the swans are facing in a circular chasing direction (clockwise or anticlockwise). A mirror reflection reverses the swimming direction of the swans, so it possesses 0 lines of reflection symmetry.`,
      marks: 3,
      rubric: [
        { key: "Order 3 rotational symmetry (120°)", marks: "1.5 M" },
        { key: "No line symmetry due to directional chasing", marks: "1.5 M" }
      ]
    }
  ],

  mela11: [
    {
      category: "Patchwork Quilt Dimensions • Perimeter & Area",
      q: "Grandmother stitches a rectangular patchwork quilt measuring 240 cm in length and 150 cm in width.<br>(a) Calculate the total perimeter of the quilt to find how much decorative ribbon border she needs.<br>(b) Calculate the total area of the quilt in square centimetres and square metres.",
      ans: `<strong>Perimeter & Area Formulas:</strong><br>
• <strong>(a) Perimeter:</strong> $P = 2 \\times (L + B) = 2 \\times (240 + 150) = 2 \\times 390 = \\mathbf{780\\text{ cm}}$ (or 7.8 metres of ribbon).<br>
• <strong>(b) Area:</strong><br>
- In cm²: $A = L \\times B = 240 \\times 150 = \\mathbf{36,000\\text{ sq cm}}$.<br>
- In m²: $36,000 ÷ 10,000 = \\mathbf{3.6\\text{ sq metres}}$ ($1\\text{ m}^2 = 10,000\\text{ cm}^2$).`,
      marks: 3,
      rubric: [
        { key: "Perimeter = 780 cm (7.8 m)", marks: "1.5 M" },
        { key: "Area = 36,000 cm² = 3.6 m²", marks: "1.5 M" }
      ]
    },
    {
      category: "Square vs Rectangular Patches • Comparison",
      q: "Grandmother compares two cloth patches:<br>• Patch 1: Square with side 20 cm.<br>• Patch 2: Rectangle measuring 25 cm by 16 cm.<br>(a) Find the perimeter of both patches.<br>(b) Find the area of both patches.<br>(c) What do you observe about their areas and perimeters?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Perimeters:</strong><br>
- Square: $4 \\times 20 = \\mathbf{80\\text{ cm}}$.<br>
- Rectangle: $2 \\times (25 + 16) = 2 \\times 41 = \\mathbf{82\\text{ cm}}$.<br>
• <strong>(b) Areas:</strong><br>
- Square: $20 \\times 20 = \\mathbf{400\\text{ sq cm}}$.<br>
- Rectangle: $25 \\times 16 = \\mathbf{400\\text{ sq cm}}$.<br>
• <strong>(c) Observation:</strong> Both patches have the <strong>exact same area (400 cm²)</strong>, but the rectangular patch has a <strong>larger perimeter (82 cm > 80 cm)</strong>. For a given area, a square always has the minimum perimeter.`,
      marks: 3,
      rubric: [
        { key: "Perimeters: 80 cm and 82 cm", marks: "1.0 M" },
        { key: "Areas: 400 cm² each", marks: "1.0 M" },
        { key: "Valid geometric observation", marks: "1.0 M" }
      ]
    },
    {
      category: "Tiling Quilt with Small Unit Squares",
      q: "The quilt measures 200 cm by 120 cm. Grandmother wants to cover the entire quilt using square fabric patches of side 10 cm.<br>(a) How many patches fit along the length?<br>(b) How many patches fit along the width?<br>(c) How many total fabric patches are required?",
      ans: `<strong>Grid Tiling:</strong><br>
• <strong>(a) Along Length:</strong> 200 ÷ 10 = <strong>20 patches</strong>.<br>
• <strong>(b) Along Width:</strong> 120 ÷ 10 = <strong>12 patches</strong>.<br>
• <strong>(c) Total Patches:</strong> 20 × 12 = <strong>240 patches</strong>.<br>
<em>(Check: Total area = 24,000 cm². Patch area = 100 cm². 24,000 ÷ 100 = 240).</em>`,
      marks: 3,
      rubric: [
        { key: "20 along length, 12 along width", marks: "1.5 M" },
        { key: "Total = 240 patches", marks: "1.5 M" }
      ]
    },
    {
      category: "Park Fencing & Turfing Cost",
      q: "A rectangular community park is 45 m long and 30 m wide.<br>(a) Find the length of wire required to fence it with 3 rounds of barbed wire.<br>(b) If turfing the lawn costs ₹20 per square metre, calculate the total cost of planting grass across the entire park.",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Barbed Wire (Perimeter):</strong><br>
- Perimeter = 2 × (45 + 30) = 2 × 75 = 150 metres.<br>
- 3 rounds of wire = 3 × 150 = <strong>450 metres of wire</strong>.<br>
• <strong>(b) Turfing Cost (Area):</strong><br>
- Area = 45 m × 30 m = 1,350 sq m.<br>
- Cost = 1,350 × ₹20 = <strong>₹27,000</strong>.`,
      marks: 3,
      rubric: [
        { key: "Perimeter = 150 m; 3 rounds = 450 m", marks: "1.5 M" },
        { key: "Area = 1,350 m²; Cost = ₹27,000", marks: "1.5 M" }
      ]
    },
    {
      category: "Square Field • Missing Side from Perimeter",
      q: "The perimeter of a square vegetable garden is 64 metres.<br>(a) What is the length of each side of the garden?<br>(b) What is the total area of the garden in square metres?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Side Length:</strong> Perimeter of square = $4 \\times \\text{Side}$.<br>
- Side = Perimeter ÷ 4 = 64 ÷ 4 = <strong>16 metres</strong>.<br>
• <strong>(b) Area:</strong> Area = Side × Side = 16 × 16 = <strong>256 square metres</strong>.`,
      marks: 3,
      rubric: [
        { key: "Side = 16 m", marks: "1.5 M" },
        { key: "Area = 256 sq m", marks: "1.5 M" }
      ]
    },
    {
      category: "Missing Dimension from Area",
      q: "A rectangular quilt has an area of 4,800 sq cm and a width of 60 cm.<br>(a) Find the length of the quilt.<br>(b) Find its perimeter.",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Length:</strong> Area = Length × Width → Length = Area ÷ Width.<br>
- Length = 4,800 ÷ 60 = <strong>80 cm</strong>.<br>
• <strong>(b) Perimeter:</strong> $P = 2 \\times (L + B) = 2 \\times (80 + 60) = 2 \\times 140 = \\mathbf{280\\text{ cm}}$.`,
      marks: 3,
      rubric: [
        { key: "Length = 80 cm", marks: "1.5 M" },
        { key: "Perimeter = 280 cm", marks: "1.5 M" }
      ]
    },
    {
      category: "L-Shaped Composite Figure Area & Perimeter",
      q: "An L-shaped cloth piece has horizontal base 12 cm, left vertical height 10 cm, top horizontal width 4 cm, interior vertical drop 6 cm, interior horizontal shelf 8 cm, and right vertical edge 4 cm.<br>(a) Find the perimeter of the figure by adding all outer sides.<br>(b) Find its area by splitting it into two rectangles.",
      ans: `<strong>Composite Figure Geometry:</strong><br>
• <strong>(a) Perimeter:</strong> Sum of 6 sides = 12 + 10 + 4 + 6 + 8 + 4 = <strong>44 cm</strong>.<br>
• <strong>(b) Area by Splitting:</strong><br>
- Rectangle 1 (Left vertical column): 4 cm wide × 10 cm high = 40 cm².<br>
- Rectangle 2 (Right base shelf): 8 cm long × 4 cm high = 32 cm².<br>
- Total Area = 40 + 32 = <strong>72 square cm</strong>.`,
      marks: 3,
      rubric: [
        { key: "Perimeter = 44 cm", marks: "1.5 M" },
        { key: "Area = 40 + 32 = 72 cm²", marks: "1.5 M" }
      ]
    },
    {
      category: "Same Perimeter, Different Areas",
      q: "Two rectangular frames both have a perimeter of 36 cm.<br>• Frame A has length 10 cm and width 8 cm.<br>• Frame B has length 14 cm and width 4 cm.<br>(a) Verify that both perimeters are 36 cm.<br>(b) Calculate the area of Frame A and Frame B.<br>(c) Which frame encloses more space and by how much?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Perimeter Verification:</strong><br>
- Frame A: 2 × (10 + 8) = 2 × 18 = 36 cm.<br>
- Frame B: 2 × (14 + 4) = 2 × 18 = 36 cm. Both equal 36 cm!<br>
• <strong>(b) Areas:</strong><br>
- Frame A: 10 × 8 = <strong>80 sq cm</strong>.<br>
- Frame B: 14 × 4 = <strong>56 sq cm</strong>.<br>
• <strong>(c) Comparison:</strong> Frame A encloses more area by: 80 - 56 = <strong>24 sq cm more</strong>. (Shapes closer to a square maximize area).`,
      marks: 3,
      rubric: [
        { key: "Perimeter verified = 36 cm", marks: "1.0 M" },
        { key: "Areas: 80 cm² and 56 cm²", marks: "1.0 M" },
        { key: "Frame A encloses 24 cm² more", marks: "1.0 M" }
      ]
    },
    {
      category: "Lace Border Cost • Currency Calculation",
      q: "Grandmother buys golden lace to border 4 identical square pillow covers of side 45 cm.<br>(a) How many metres of lace does she need for all 4 pillow covers?<br>(b) If the lace costs ₹18 per metre, what is her total expenditure?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Lace Needed:</strong><br>
- Perimeter of 1 cover = 4 × 45 cm = 180 cm = 1.8 metres.<br>
- 4 pillow covers = 4 × 1.8 m = <strong>7.2 metres of lace</strong>.<br>
• <strong>(b) Total Cost:</strong> 7.2 m × ₹18 = <strong>₹129.60</strong>.`,
      marks: 3,
      rubric: [
        { key: "Lace = 7.2 m", marks: "1.5 M" },
        { key: "Cost = ₹129.60", marks: "1.5 M" }
      ]
    },
    {
      category: "Floor Tiling • Tile Count Problem",
      q: "A bedroom floor is 5 m long and 4 m wide. The homeowner wants to tile it using square ceramic tiles of side 50 cm (0.5 m).<br>(a) What is the floor area in square metres?<br>(b) What is the area of 1 tile in square metres?<br>(c) How many tiles are needed to pave the floor?",
      ans: `<strong>Tiling Calculations:</strong><br>
• <strong>(a) Floor Area:</strong> 5 m × 4 m = <strong>20 sq metres</strong>.<br>
• <strong>(b) Tile Area:</strong> 0.5 m × 0.5 m = <strong>0.25 sq metres</strong>.<br>
• <strong>(c) Number of Tiles:</strong> 20 ÷ 0.25 = <strong>80 tiles</strong>.<br>
<em>(Check: 10 tiles along length × 8 tiles along width = 80 tiles).</em>`,
      marks: 3,
      rubric: [
        { key: "Floor area = 20 m²", marks: "1.0 M" },
        { key: "Tile area = 0.25 m²", marks: "1.0 M" },
        { key: "Number of tiles = 80", marks: "1.0 M" }
      ]
    },
    {
      category: "Grid Stamp Area • Irregular Shapes",
      q: "On a 1 cm square grid, a postal stamp covers 6 complete squares, 4 half squares, and 2 squares that are more than half covered.<br>(a) Estimate the area of the stamp using NCERT grid estimation rules.<br>(b) What is the perimeter if the stamp is a 4 cm × 2 cm rectangle?",
      ans: `<strong>Grid Area Counting Rules:</strong><br>
1. Complete squares: 6 × 1 = 6 sq cm.<br>
2. Half squares: 4 × 0.5 = 2 sq cm.<br>
3. More than half squares count as 1: 2 × 1 = 2 sq cm.<br>
• <strong>(a) Estimated Area:</strong> 6 + 2 + 2 = <strong>10 square cm</strong>.<br>
• <strong>(b) Rectangle Perimeter:</strong> $2 \\times (4 + 2) = 2 \\times 6 = \\mathbf{12\\text{ cm}}$.`,
      marks: 3,
      rubric: [
        { key: "Grid counting rules applied", marks: "1.5 M" },
        { key: "Estimated area = 10 cm²; Perimeter = 12 cm", marks: "1.5 M" }
      ]
    },
    {
      category: "Square Cutouts from Rectangle",
      q: "A rectangular cardboard sheet is 30 cm long and 20 cm wide.<br>(a) How many small squares of side 5 cm can be cut from it without wasting any paper?<br>(b) What is the total area of the cardboard sheet?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Squares Cut:</strong><br>
- Along length: 30 ÷ 5 = 6 squares.<br>
- Along width: 20 ÷ 5 = 4 squares.<br>
- Total squares = 6 × 4 = <strong>24 squares</strong>.<br>
• <strong>(b) Sheet Area:</strong> 30 × 20 = <strong>600 square cm</strong> (Check: 24 × 25 cm² = 600 cm²).`,
      marks: 3,
      rubric: [
        { key: "24 squares", marks: "1.5 M" },
        { key: "Sheet area = 600 cm²", marks: "1.5 M" }
      ]
    },
    {
      category: "Changing Dimensions • Effect on Area",
      q: "(a) If the length of a rectangle is doubled while its width remains the same, how does its area change?<br>(b) If both the length and width of a rectangle are doubled, by how many times does its area increase?",
      ans: `<strong>Area Scaling Factor:</strong><br>
• <strong>(a) Doubling Length Only:</strong> Original area = $L \\times B$. New area = $(2L) \\times B = 2 \\times (L \\times B)$. The area <strong>doubles (2 times)</strong>.<br>
• <strong>(b) Doubling Both Length and Width:</strong> New area = $(2L) \\times (2B) = 4 \\times (L \\times B)$. The area <strong>quadruples (4 times larger)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): Doubles (2 times)", marks: "1.5 M" },
        { key: "Part (b): Quadruples (4 times)", marks: "1.5 M" }
      ]
    },
    {
      category: "Triangular Patch Area inside Rectangle",
      q: "A triangular patchwork piece is made by cutting a 10 cm × 6 cm rectangular cloth diagonally into two equal halves.<br>(a) What is the area of the original rectangle?<br>(b) What is the area of each triangular patch?",
      ans: `<strong>Diagonal Division of Rectangle:</strong><br>
• <strong>(a) Rectangle Area:</strong> $L \\times B = 10 \\times 6 = \\mathbf{60\\text{ sq cm}}$.<br>
• <strong>(b) Triangular Patch Area:</strong> The diagonal divides the rectangle into two identical triangles.<br>
- Area of triangle = Half of rectangle area = 60 ÷ 2 = <strong>30 square cm</strong>.`,
      marks: 3,
      rubric: [
        { key: "Rectangle area = 60 cm²", marks: "1.5 M" },
        { key: "Triangle area = 30 cm²", marks: "1.5 M" }
      ]
    },
    {
      category: "Walkway Pathway around a Lawn",
      q: "A square lawn of side 20 metres is surrounded on the outside by a 2-metre-wide concrete walking path.<br>(a) Find the side length of the outer square including the path.<br>(b) Calculate the total area of the concrete walking path.",
      ans: `<strong>Concentric Squares Area:</strong><br>
• <strong>(a) Outer Square Side:</strong> 20 m + 2 m (left) + 2 m (right) = <strong>24 metres</strong>.<br>
• <strong>(b) Pathway Area:</strong><br>
- Outer square area = 24 × 24 = 576 sq m.<br>
- Inner lawn area = 20 × 20 = 400 sq m.<br>
- Path area = Outer area - Inner area = 576 - 400 = <strong>176 square metres</strong>.`,
      marks: 3,
      rubric: [
        { key: "Outer side = 24 m", marks: "1.0 M" },
        { key: "Outer area = 576, Inner area = 400", marks: "1.0 M" },
        { key: "Path area = 176 sq m", marks: "1.0 M" }
      ]
    },
    {
      category: "Perimeter of Regular Shapes",
      q: "Find the perimeter of:<br>(a) An equilateral triangle of side 14 cm<br>(b) A regular pentagon of side 9 cm<br>(c) A regular octagon of side 6 cm",
      ans: `<strong>Perimeter Formulas:</strong><br>
• <strong>(a) Equilateral Triangle (3 sides):</strong> 3 × 14 = <strong>42 cm</strong>.<br>
• <strong>(b) Regular Pentagon (5 sides):</strong> 5 × 9 = <strong>45 cm</strong>.<br>
• <strong>(c) Regular Octagon (8 sides):</strong> 8 × 6 = <strong>48 cm</strong>.`,
      marks: 3,
      rubric: [
        { key: "Triangle = 42 cm", marks: "1.0 M" },
        { key: "Pentagon = 45 cm", marks: "1.0 M" },
        { key: "Octagon = 48 cm", marks: "1.0 M" }
      ]
    },
    {
      category: "Comparing Ribbon Perimeter to String Length",
      q: "A girl has a 60 cm piece of string. She bends it to form:<br>(a) An equilateral triangle<br>(b) A square<br>(c) A regular hexagon<br>Find the length of each side for each shape.",
      ans: `<strong>Side Lengths from Fixed Perimeter (P = 60 cm):</strong><br>
• <strong>(a) Equilateral Triangle (3 sides):</strong> 60 ÷ 3 = <strong>20 cm</strong>.<br>
• <strong>(b) Square (4 sides):</strong> 60 ÷ 4 = <strong>15 cm</strong>.<br>
• <strong>(c) Regular Hexagon (6 sides):</strong> 60 ÷ 6 = <strong>10 cm</strong>.`,
      marks: 3,
      rubric: [
        { key: "Triangle side = 20 cm", marks: "1.0 M" },
        { key: "Square side = 15 cm", marks: "1.0 M" },
        { key: "Hexagon side = 10 cm", marks: "1.0 M" }
      ]
    },
    {
      category: "Cost of Fabric per Square Metre",
      q: "A tailor makes 5 curtains, each measuring 2 metres by 1.5 metres.<br>(a) Find the area of one curtain.<br>(b) Find the total cloth area required for all 5 curtains.<br>(c) If the curtain cloth costs ₹160 per square metre, what is the total cost of fabric?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) One Curtain Area:</strong> 2 m × 1.5 m = <strong>3 sq metres</strong>.<br>
• <strong>(b) Total Fabric Area:</strong> 5 × 3 sq m = <strong>15 sq metres</strong>.<br>
• <strong>(c) Fabric Cost:</strong> 15 sq m × ₹160 = <strong>₹2,400</strong>.`,
      marks: 3,
      rubric: [
        { key: "One curtain = 3 m²", marks: "1.0 M" },
        { key: "Total cloth = 15 m²", marks: "1.0 M" },
        { key: "Total cost = ₹2,400", marks: "1.0 M" }
      ]
    },
    {
      category: "HOTS • Area & Perimeter Puzzle",
      q: "A wire bent in the shape of a rectangle of 18 cm × 12 cm is straightened and then bent into the shape of a square. Which shape has a larger area, and by how much?",
      ans: `<strong>Isoperimetric Problem:</strong><br>
1. <strong>Wire Length (Perimeter):</strong> 2 × (18 + 12) = 2 × 30 = <strong>60 cm</strong>.<br>
2. <strong>Square Side:</strong> 60 ÷ 4 = <strong>15 cm</strong>.<br>
3. <strong>Areas:</strong><br>
• Rectangle Area = 18 × 12 = <strong>216 sq cm</strong>.<br>
• Square Area = 15 × 15 = <strong>225 sq cm</strong>.<br>
4. <strong>Comparison:</strong> The <strong>Square has a larger area</strong> by: 225 - 216 = <strong>9 sq cm</strong>.`,
      marks: 3,
      rubric: [
        { key: "Perimeter = 60 cm, Square side = 15 cm", marks: "1.0 M" },
        { key: "Areas: 216 cm² and 225 cm²", marks: "1.0 M" },
        { key: "Square is larger by 9 cm²", marks: "1.0 M" }
      ]
    },
    {
      category: "Table Top Varnish • Rate per Unit",
      q: "A rectangular dining table top measures 2.2 m by 1.1 m.<br>(a) Find the area of the table top.<br>(b) If polishing the surface costs ₹150 per square metre, calculate the total cost of polishing.",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Table Area:</strong> 2.2 m × 1.1 m = <strong>2.42 sq metres</strong>.<br>
• <strong>(b) Polishing Cost:</strong> 2.42 × ₹150 = <strong>₹363</strong>.`,
      marks: 3,
      rubric: [
        { key: "Area = 2.42 m²", marks: "1.5 M" },
        { key: "Polishing cost = ₹363", marks: "1.5 M" }
      ]
    },
    {
      category: "Square Tile Border Framing",
      q: "A picture measuring 24 cm by 18 cm is pasted on a sheet of cardboard such that there is a margin of 2 cm along each side.<br>(a) Find the total length and breadth of the cardboard.<br>(b) Find the area of the margin.",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Cardboard Dimensions:</strong><br>
- Length = 24 + 2 + 2 = <strong>28 cm</strong>.<br>
- Breadth = 18 + 2 + 2 = <strong>22 cm</strong>.<br>
• <strong>(b) Margin Area:</strong><br>
- Cardboard area = 28 × 22 = 616 sq cm.<br>
- Picture area = 24 × 18 = 432 sq cm.<br>
- Margin area = 616 - 432 = <strong>184 square cm</strong>.`,
      marks: 3,
      rubric: [
        { key: "Cardboard: 28 cm × 22 cm", marks: "1.5 M" },
        { key: "Margin area = 184 cm²", marks: "1.5 M" }
      ]
    },
    {
      category: "Mental Arithmetic • Perimeter Shortcuts",
      q: "Find the perimeter of:<br>(a) A square of side 25 cm<br>(b) A rectangle of 35 m by 15 m<br>(c) A rhombus of side 12.5 cm",
      ans: `<strong>Shortcuts:</strong><br>
• <strong>(a) Square:</strong> 4 × 25 = <strong>100 cm (1 metre)</strong>.<br>
• <strong>(b) Rectangle:</strong> 2 × (35 + 15) = 2 × 50 = <strong>100 metres</strong>.<br>
• <strong>(c) Rhombus:</strong> 4 × 12.5 = <strong>50 cm</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 100 cm", marks: "1.0 M" },
        { key: "Part (b): 100 m", marks: "1.0 M" },
        { key: "Part (c): 50 cm", marks: "1.0 M" }
      ]
    },
    {
      category: "True or False with Geometric Reasoning",
      q: "State True or False with reasoning:<br>(a) Two shapes with the same perimeter must have the same area.<br>(b) The perimeter of any rectangle is always greater than its area.<br>(c) A 1 cm² square fits inside a 1 cm² circle.",
      ans: `<strong>Justifications:</strong><br>
• <strong>(a) False:</strong> For example, rectangles with dimensions 5×1 (P=12, A=5) and 3×3 (P=12, A=9) have the same perimeter but different areas.<br>
• <strong>(b) False:</strong> Perimeter and area have different units (cm vs cm²) and cannot be directly compared; moreover, a rectangle of 100×100 has area 10,000 cm² and perimeter only 400 cm.<br>
• <strong>(c) False:</strong> A 1 cm² circle has diameter ≈ 1.13 cm, while a 1 cm² square has a diagonal of $\\sqrt{2} \\approx 1.41\\text{ cm}$ which exceeds the diameter of the circle.`,
      marks: 3,
      rubric: [
        { key: "Part (a): False with counter-example", marks: "1.0 M" },
        { key: "Part (b): False with dimension explanation", marks: "1.0 M" },
        { key: "Part (c): False with diagonal reasoning", marks: "1.0 M" }
      ]
    },
    {
      category: "Comprehensive Quilt Masterpiece Problem",
      q: "Grandmother designs a royal quilt of 2.5 m × 2.0 m.<br>• Central medallion: 1.5 m × 1.0 m silk brocade.<br>• Surrounding border: Printed cotton patchwork.<br>(a) Find the total area of the quilt in square metres.<br>(b) What is the area of the silk central medallion?<br>(c) What is the area of the patchwork border?<br>(d) If satin lace costs ₹25 per metre, how much will it cost to border the outer edge of the quilt?",
      ans: `<strong>Comprehensive Geometry of Quilt:</strong><br>
• <strong>(a) Total Quilt Area:</strong> 2.5 m × 2.0 m = <strong>5.0 sq metres</strong>.<br>
• <strong>(b) Central Medallion Area:</strong> 1.5 m × 1.0 m = <strong>1.5 sq metres</strong>.<br>
• <strong>(c) Patchwork Border Area:</strong> Total area - Medallion area = 5.0 - 1.5 = <strong>3.5 sq metres</strong>.<br>
• <strong>(d) Outer Lace Cost:</strong><br>
- Perimeter = 2 × (2.5 + 2.0) = 2 × 4.5 = 9.0 metres.<br>
- Cost = 9.0 m × ₹25 = <strong>₹225</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total area = 5.0 m²", marks: "0.75 M" },
        { key: "Medallion = 1.5 m²", marks: "0.75 M" },
        { key: "Border area = 3.5 m²", marks: "0.75 M" },
        { key: "Lace cost = ₹225", marks: "0.75 M" }
      ]
    }
  ]
};

module.exports = { melaCh9_10_11 };
