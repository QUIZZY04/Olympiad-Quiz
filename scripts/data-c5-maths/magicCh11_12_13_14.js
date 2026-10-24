// scripts/data-c5-maths/magicCh11_12_13_14.js
// Official NCERT Class 5 Mathematics: "Math-Magic" - Chapters 11, 12, 13, 14 Authentic Questions
// Fully aligned with NCERT Textbook & CBSE Marking Scheme 2026-27

const magicCh11_12_13_14 = {
  magic11: [
    {
      category: "Textbook Exercise • Land Division among Three Children",
      q: "Arbaaz planned to divide his land equally among his three children—Nasreen, Shahid, and Zaid. He wanted to give each child 30 square metres of land. Nasreen's land is 5 m long and 6 m wide. Shahid's land is 3 m wide and 10 m long. Zaid's land is 2 m wide and 15 m long.<br>(a) Find the area of each child's land.<br>(b) Who got the land with the longest boundary (perimeter)?",
      ans: `<strong>Perimeter & Area Calculations:</strong><br>
• <strong>(a) Areas:</strong><br>
  - Nasreen: 5 m × 6 m = <strong>30 sq m</strong>.<br>
  - Shahid: 3 m × 10 m = <strong>30 sq m</strong>.<br>
  - Zaid: 2 m × 15 m = <strong>30 sq m</strong>.<br>
• <strong>(b) Boundaries (Perimeter = 2 × (l + b)):</strong><br>
  - Nasreen: 2 × (5 + 6) = 2 × 11 = <strong>22 metres</strong>.<br>
  - Shahid: 2 × (3 + 10) = 2 × 13 = <strong>26 metres</strong>.<br>
  - Zaid: 2 × (2 + 15) = 2 × 17 = <strong>34 metres</strong>.<br>
• <strong>Zaid</strong> got the land with the longest boundary (34 metres).`,
      marks: 4,
      rubric: [
        { key: "All three areas equal 30 sq m", marks: "1.5 M" },
        { key: "Perimeter calculations: 22, 26, 34 m", marks: "1.5 M" },
        { key: "Conclusion: Zaid has longest boundary", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Postcard Loop (Paper Cutting Trick)",
      q: "How can you cut a small 14 cm × 9 cm postcard in a continuous spiral strip so that it opens into a huge belt large enough for a person to pass through?",
      ans: `<strong>Postcard Belt Cutting Technique:</strong><br>
1. Fold the postcard in half along its length.<br>
2. Cut narrow parallel slits starting alternately from the folded edge and from the open edge, leaving a small 2 mm margin at each turn so the strip is not severed completely.<br>
3. Cut open the folds of the inner loops (leaving the two end loops intact).<br>
4. Pull the paper gently: the thin cuts unfold into a huge continuous zigzag paper belt with a perimeter exceeding 2 to 3 metres, allowing a child or adult to step right through!`,
      marks: 3,
      rubric: [
        { key: "Alternating slit cutting procedure explained", marks: "2 M" },
        { key: "Continuous loop expansion explained", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Cost of Fencing vs Tiling",
      q: "A square field has a side of 40 metres. (a) What is the total length of wire needed to put a fence of 4 rounds around the field? (b) If fencing costs ₹15 per metre, what is the cost of fencing? (c) If ploughing the field costs ₹2 per square metre, what is the cost of ploughing?",
      ans: `<strong>Step-by-step Solution:</strong><br>
• <strong>(a) Wire length:</strong> Perimeter of 1 round = 4 × 40 m = 160 m. For 4 rounds = 4 × 160 = <strong>640 metres</strong>.<br>
• <strong>(b) Cost of fencing:</strong> 640 m × ₹15 = <strong>₹9,600</strong>.<br>
• <strong>(c) Cost of ploughing:</strong> Area = 40 m × 40 m = 1,600 sq m. Cost = 1,600 × ₹2 = <strong>₹3,200</strong>.`,
      marks: 4,
      rubric: [
        { key: "Wire length: 640 m", marks: "1.5 M" },
        { key: "Fencing cost: ₹9,600", marks: "1 M" },
        { key: "Ploughing cost: ₹3,200", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Saree Border Length",
      q: "A saree is 5.5 metres long and 1.2 metres wide. A decorative zari border is to be stitched along all 4 outer edges of the saree. What is the total length of border required in metres?",
      ans: `<strong>Perimeter of Saree:</strong><br>
• Perimeter = 2 × (Length + Width) = 2 × (5.5 + 1.2) = 2 × 6.7 = <strong>13.4 metres</strong>.`,
      marks: 2,
      rubric: [
        { key: "Formula 2(l + w)", marks: "1 M" },
        { key: "Answer: 13.4 metres", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Comparing Rectangles with Equal Perimeter",
      q: "Two rectangular vegetable plots both have a perimeter of 36 metres: Plot A is 10 m long and 8 m wide. Plot B is 12 m long and 6 m wide. (a) Verify that both plots have the same perimeter. (b) Find the area of Plot A and Plot B. (c) Which plot gives more area to grow vegetables?",
      ans: `<strong>Comparison:</strong><br>
• <strong>(a) Perimeters:</strong><br>
  - Plot A: 2 × (10 + 8) = 2 × 18 = 36 m.<br>
  - Plot B: 2 × (12 + 6) = 2 × 18 = 36 m. (Verified!).<br>
• <strong>(b) Areas:</strong><br>
  - Area of Plot A = 10 × 8 = <strong>80 sq m</strong>.<br>
  - Area of Plot B = 12 × 6 = <strong>72 sq m</strong>.<br>
• <strong>(c) Conclusion:</strong> <strong>Plot A</strong> gives 80 - 72 = 8 sq m more area (shapes closer to a square maximize area!).`,
      marks: 4,
      rubric: [
        { key: "Verification of perimeters", marks: "1 M" },
        { key: "Areas: 80 sq m and 72 sq m", marks: "2 M" },
        { key: "Plot A gives more area", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Carpet Fitting in a Hall",
      q: "A hall floor is 15 metres long and 8 metres wide. A square carpet of side 6 metres is laid on the floor. Find the area of the floor that is left bare (not carpeted).",
      ans: `<strong>Area Difference:</strong><br>
1. Area of hall floor = 15 m × 8 m = 120 sq metres.<br>
2. Area of square carpet = 6 m × 6 m = 36 sq metres.<br>
3. <strong>Bare floor area:</strong> 120 - 36 = <strong>84 sq metres</strong>.`,
      marks: 3,
      rubric: [
        { key: "Hall area: 120 sq m", marks: "1 M" },
        { key: "Carpet area: 36 sq m", marks: "1 M" },
        { key: "Bare area: 84 sq m", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Thread Loop Shape Shifting",
      q: "A loop of string of length 20 cm is placed on a table: (a) If it forms a square, what is its area? (b) If it forms a rectangle of width 4 cm, what is its area? (c) Which shape has greater area?",
      ans: `<strong>String Loop (Perimeter = 20 cm):</strong><br>
• <strong>(a) Square:</strong> Side = 20 ÷ 4 = 5 cm. Area = 5 × 5 = <strong>25 sq cm</strong>.<br>
• <strong>(b) Rectangle:</strong> Width = 4 cm. Length = (20 ÷ 2) - 4 = 10 - 4 = 6 cm. Area = 6 × 4 = <strong>24 sq cm</strong>.<br>
• <strong>(c) Conclusion:</strong> The <strong>Square</strong> has greater area by 1 sq cm.`,
      marks: 3,
      rubric: [
        { key: "Square area: 25 sq cm", marks: "1 M" },
        { key: "Rectangle area: 24 sq cm", marks: "1 M" },
        { key: "Square has greater area", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Square Tiles for a Bathroom",
      q: "A bathroom wall measures 3 metres by 2 metres. It is to be covered with square ceramic tiles of side 20 cm. How many tiles are required?",
      ans: `<strong>Tile Calculations:</strong><br>
• Wall length = 3 m = 300 cm; Wall height = 2 m = 200 cm.<br>
• Area of wall = 300 × 200 = 60,000 sq cm.<br>
• Area of 1 tile = 20 × 20 = 400 sq cm.<br>
• <strong>Number of tiles:</strong> 60,000 ÷ 400 = <strong>150 tiles</strong>.`,
      marks: 3,
      rubric: [
        { key: "Conversions to cm", marks: "1 M" },
        { key: "Wall and tile areas", marks: "1 M" },
        { key: "Total tiles: 150", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Perimeter from Area of Square",
      q: "A square lawn has an area of 144 square metres. (a) What is the length of each side of the lawn? (b) What is the perimeter of the lawn?",
      ans: `<strong>Side and Perimeter:</strong><br>
• <strong>(a) Side length:</strong> Side = √144 = <strong>12 metres</strong>.<br>
• <strong>(b) Perimeter:</strong> 4 × Side = 4 × 12 = <strong>48 metres</strong>.`,
      marks: 2,
      rubric: [
        { key: "Side: 12 metres", marks: "1 M" },
        { key: "Perimeter: 48 metres", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Dividing Square into Triangles",
      q: "A square has a side of 10 cm. Two diagonals are drawn, dividing it into four equal triangles. (a) What is the total area of the square? (b) What is the area of each triangle?",
      ans: `<strong>Area Division:</strong><br>
• <strong>(a) Square area:</strong> 10 cm × 10 cm = <strong>100 sq cm</strong>.<br>
• <strong>(b) Triangle area:</strong> 100 sq cm ÷ 4 = <strong>25 sq cm</strong> each.`,
      marks: 2,
      rubric: [
        { key: "Square area: 100 sq cm", marks: "1 M" },
        { key: "Each triangle: 25 sq cm", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Running Track Laps",
      q: "A school rectangular athletic field is 120 metres long and 80 metres wide. An athlete runs 5 complete laps around the field. What total distance did the athlete run in kilometres?",
      ans: `<strong>Distance Run:</strong><br>
• Perimeter of 1 lap = 2 × (120 + 80) = 2 × 200 = 400 metres.<br>
• 5 laps = 5 × 400 = 2,000 metres.<br>
• In kilometres = 2,000 ÷ 1,000 = <strong>2 kilometres</strong>.`,
      marks: 3,
      rubric: [
        { key: "1 lap: 400 m", marks: "1 M" },
        { key: "5 laps: 2,000 m", marks: "1 M" },
        { key: "Conversion: 2 km", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Painting Cost of Wall",
      q: "A room has a rectangular wall of 5 m by 3 m with a window of 1.5 m by 1 m. (a) What is the area of the wall to be painted (excluding the window)? (b) If painting costs ₹40 per square metre, what is the total cost?",
      ans: `<strong>Painting Calculation:</strong><br>
• Total wall area = 5 × 3 = 15 sq m.<br>
• Window area = 1.5 × 1 = 1.5 sq m.<br>
• <strong>(a) Area to paint:</strong> 15 - 1.5 = <strong>13.5 sq metres</strong>.<br>
• <strong>(b) Painting cost:</strong> 13.5 × ₹40 = <strong>₹540</strong>.`,
      marks: 3,
      rubric: [
        { key: "Net paintable area: 13.5 sq m", marks: "1.5 M" },
        { key: "Cost: ₹540", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Finding Width from Perimeter",
      q: "A rectangular park has a perimeter of 180 metres. If its length is 55 metres, find its width and its area.",
      ans: `<strong>Width and Area:</strong><br>
• Half perimeter (l + w) = 180 ÷ 2 = 90 metres.<br>
• Width = 90 - 55 = <strong>35 metres</strong>.<br>
• Area = Length × Width = 55 m × 35 m = <strong>1,925 sq metres</strong>.`,
      marks: 3,
      rubric: [
        { key: "Width: 35 m", marks: "1.5 M" },
        { key: "Area: 1,925 sq m", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Wire Shape Transition",
      q: "A wire bent into the shape of a rectangle of 18 cm by 12 cm is straightened and then rebent into a square. (a) What is the length of the wire? (b) What will be the side of the square? (c) Which shape encloses more area?",
      ans: `<strong>Wire Calculations:</strong><br>
• <strong>(a) Wire length (Perimeter):</strong> 2 × (18 + 12) = 2 × 30 = <strong>60 cm</strong>.<br>
• <strong>(b) Side of square:</strong> 60 ÷ 4 = <strong>15 cm</strong>.<br>
• <strong>(c) Area comparison:</strong><br>
  - Rectangle area = 18 × 12 = 216 sq cm.<br>
  - Square area = 15 × 15 = 225 sq cm.<br>
  The <strong>Square</strong> encloses more area by 225 - 216 = 9 sq cm.`,
      marks: 4,
      rubric: [
        { key: "Perimeter: 60 cm", marks: "1 M" },
        { key: "Square side: 15 cm", marks: "1 M" },
        { key: "Areas calculated: 216 & 225 sq cm", marks: "1 M" },
        { key: "Square encloses more area", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Cost of Grass Turfing",
      q: "A square garden has a side of 25 metres. Inside it, a square pond of side 5 metres is dug in the centre. The remaining area is planted with green turf grass. If turfing costs ₹50 per square metre, find the total turfing expense.",
      ans: `<strong>Turfing Calculations:</strong><br>
• Total garden area = 25 × 25 = 625 sq m.<br>
• Pond area = 5 × 5 = 25 sq m.<br>
• Turfed area = 625 - 25 = 600 sq m.<br>
• <strong>Total expense:</strong> 600 × ₹50 = <strong>₹30,000</strong>.`,
      marks: 3,
      rubric: [
        { key: "Garden area: 625 sq m", marks: "1 M" },
        { key: "Turf area: 600 sq m", marks: "1 M" },
        { key: "Total expense: ₹30,000", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Tripling the Dimensions of a Rectangle",
      q: "A rectangle has length 6 cm and width 4 cm. If both its length and width are tripled: (a) What happens to its perimeter? (b) What happens to its area?",
      ans: `<strong>Tripling Scaling:</strong><br>
• Original: Perimeter = 2(6+4) = 20 cm; Area = 6×4 = 24 sq cm.<br>
• New dimensions: Length = 18 cm, Width = 12 cm.<br>
• <strong>(a) New Perimeter:</strong> 2(18+12) = 60 cm (<strong>3 times larger</strong>).<br>
• <strong>(b) New Area:</strong> 18 × 12 = 216 sq cm (<strong>9 times larger</strong>, since 3² = 9).`,
      marks: 3,
      rubric: [
        { key: "Perimeter increases 3 times (60 cm)", marks: "1.5 M" },
        { key: "Area increases 9 times (216 sq cm)", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Perimeter of Combined Tables",
      q: "Two identical square desks of side 80 cm are pushed together side-by-side to form one long rectangular conference table. (a) What are the dimensions of the new table? (b) What is its perimeter? (c) Did the perimeter double? Explain.",
      ans: `<strong>Combined Desks:</strong><br>
• <strong>(a) Dimensions:</strong> Length = 80 + 80 = <strong>160 cm</strong>; Width = <strong>80 cm</strong>.<br>
• <strong>(b) Perimeter:</strong> 2 × (160 + 80) = 2 × 240 = <strong>480 cm</strong>.<br>
• <strong>(c) Perimeter double test:</strong> Individual desk perimeter = 4 × 80 = 320 cm. Double would be 640 cm. The perimeter <strong>did NOT double</strong> because two 80 cm edges are joined internally and no longer form part of the boundary.`,
      marks: 4,
      rubric: [
        { key: "Dimensions: 160 cm × 80 cm", marks: "1 M" },
        { key: "Perimeter: 480 cm", marks: "1.5 M" },
        { key: "Explanation of lost internal edges", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Fencing with Gates",
      q: "A rectangular farm is 150 metres long and 100 metres wide. It needs to be fenced, but two gates of 5 metres width each are to be left unfenced for entry. What length of fencing wire is needed for 1 round?",
      ans: `<strong>Fencing with Openings:</strong><br>
• Total perimeter = 2 × (150 + 100) = 2 × 250 = 500 metres.<br>
• Total opening for 2 gates = 2 × 5 m = 10 metres.<br>
• <strong>Fencing wire needed:</strong> 500 - 10 = <strong>490 metres</strong>.`,
      marks: 2,
      rubric: [
        { key: "Perimeter 500 m and gate deduction 10 m", marks: "1 M" },
        { key: "Wire needed: 490 m", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Concrete Slabs for Footpath",
      q: "A footpath 50 metres long and 2 metres wide is to be paved with square concrete slabs of side 50 cm. (a) What is the area of the footpath in sq cm? (b) How many slabs are needed?",
      ans: `<strong>Paving Calculations:</strong><br>
• Footpath: 50 m = 5,000 cm; 2 m = 200 cm.<br>
• <strong>(a) Area in sq cm:</strong> 5,000 × 200 = <strong>1,000,000 sq cm</strong> (or 100 sq m).<br>
• <strong>(b) Slabs needed:</strong> Area of 1 slab = 50 × 50 = 2,500 sq cm.<br>
  Number of slabs = 1,000,000 ÷ 2,500 = <strong>400 slabs</strong>.`,
      marks: 3,
      rubric: [
        { key: "Area: 1,000,000 sq cm", marks: "1.5 M" },
        { key: "Slabs: 400", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Comparing Postage Stamp Sizes",
      q: "Stamp A is 4 cm × 3 cm. Stamp B is 6 cm × 2 cm. Stamp C is 5 cm × 2.5 cm. (a) Find the area of each stamp. (b) Which stamp covers the largest area?",
      ans: `<strong>Stamp Areas:</strong><br>
• Area of Stamp A = 4 × 3 = <strong>12 sq cm</strong>.<br>
• Area of Stamp B = 6 × 2 = <strong>12 sq cm</strong>.<br>
• Area of Stamp C = 5 × 2.5 = <strong>12.5 sq cm</strong>.<br>
• <strong>Stamp C</strong> covers the largest area (12.5 sq cm).`,
      marks: 3,
      rubric: [
        { key: "Three areas calculated", marks: "2 M" },
        { key: "Stamp C identified as largest", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Irregular Garden Boundary Cost",
      q: "An irregular five-sided park has boundary sides of 45 m, 60 m, 35 m, 50 m, and 40 m. If fencing wire costs ₹12 per metre, find the total cost of fencing the park.",
      ans: `<strong>Perimeter & Cost:</strong><br>
• Perimeter = 45 + 60 + 35 + 50 + 40 = 230 metres.<br>
• Total cost = 230 m × ₹12 = <strong>₹2,760</strong>.`,
      marks: 2,
      rubric: [
        { key: "Perimeter: 230 m", marks: "1 M" },
        { key: "Cost: ₹2,760", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Square Pillow Border Lace",
      q: "A square cushion cover has a side of 45 cm. (a) What length of lace is needed for 1 cushion? (b) What length of lace is needed for a set of 6 cushions in metres?",
      ans: `<strong>Lace Requirements:</strong><br>
• <strong>(a) For 1 cushion:</strong> 4 × 45 cm = 180 cm.<br>
• <strong>(b) For 6 cushions:</strong> 6 × 180 cm = 1,080 cm.<br>
• In metres = 1,080 ÷ 100 = <strong>10.8 metres</strong>.`,
      marks: 3,
      rubric: [
        { key: "1 cushion: 180 cm", marks: "1.5 M" },
        { key: "6 cushions: 10.8 metres", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Window Grille Area",
      q: "A square window grille consists of 16 smaller square panes, each of side 15 cm. (a) What is the total area of the window grille? (b) What is the outer perimeter of the window?",
      ans: `<strong>Window Pane Calculations:</strong><br>
• Area of 1 pane = 15 × 15 = 225 sq cm.<br>
• <strong>(a) Total area:</strong> 16 × 225 = <strong>3,600 sq cm</strong>.<br>
• <strong>(b) Outer dimensions:</strong> 16 square panes arranged as 4 × 4 grid.<br>
  Window side = 4 × 15 cm = 60 cm.<br>
  Perimeter = 4 × 60 cm = <strong>240 cm</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total area: 3,600 sq cm", marks: "1.5 M" },
        { key: "Outer perimeter: 240 cm", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Unit of Area vs Unit of Perimeter",
      q: "Why is perimeter measured in linear units (like cm or metres) while area is measured in square units (like sq cm or sq metres)? Explain clearly.",
      ans: `<strong>Units Conceptual Distinction:</strong><br>
• <strong>Perimeter:</strong> Measures the total 1-dimensional length of the surrounding boundary line. It is a distance, so it is measured in linear units (cm, m).<br>
• <strong>Area:</strong> Measures the 2-dimensional surface region enclosed inside the boundary. It counts how many unit squares (1 cm × 1 cm or 1 m × 1 m) fit inside, so it is measured in square units (sq cm, sq m).`,
      marks: 2,
      rubric: [
        { key: "1D boundary length concept for perimeter", marks: "1 M" },
        { key: "2D square count concept for area", marks: "1 M" }
      ]
    }
  ],
  magic12: [
    {
      category: "Textbook Exercise • Tally Marks (Traffic Survey)",
      q: "Yamini did a project 'Animals and Birds'. She stood on the road for half an hour and noted passing vehicles using tally marks: Cycle (28), Car (12), Auto-rickshaw (18), Bus (15), Cycle-rickshaw (24), Truck (6).<br>(a) Draw the tally marks for Cycle (28) and Bus (15) using NCERT box notation.<br>(b) Write the total number of vehicles that passed by in half an hour.<br>(c) Which vehicle was observed the most?",
      ans: `<strong>Survey Analysis:</strong><br>
• <strong>(a) Tally Marks (each complete 5-box is 4 sides + 1 diagonal):</strong><br>
  - Cycle (28): 5 complete boxes of five + 3 lines (5 × 5 + 3 = 28).<br>
  - Bus (15): 3 complete boxes of five (5 × 3 = 15).<br>
• <strong>(b) Total vehicles:</strong> 28 + 12 + 18 + 15 + 24 + 6 = <strong>103 vehicles</strong>.<br>
• <strong>(c) Most observed vehicle:</strong> <strong>Cycle (28)</strong>.`,
      marks: 4,
      rubric: [
        { key: "Tally mark representation", marks: "1.5 M" },
        { key: "Total count: 103 vehicles", marks: "1.5 M" },
        { key: "Most observed: Cycle", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Chapati Chart (Pie Chart / Circle Graph)",
      q: "In a class of 40 students, teacher made a circle chart of their favorite activities after school:<br>• 1/2 of the children like playing sports.<br>• 1/4 of the children like watching TV.<br>• 1/4 of the children like reading books.<br>(a) How many children like playing sports?<br>(b) How many children like watching TV?<br>(c) How many children like reading books?",
      ans: `<strong>Chapati Chart Calculations (Total = 40 students):</strong><br>
• <strong>(a) Sports (1/2):</strong> 1/2 of 40 = 40 ÷ 2 = <strong>20 students</strong>.<br>
• <strong>(b) Watching TV (1/4):</strong> 1/4 of 40 = 40 ÷ 4 = <strong>10 students</strong>.<br>
• <strong>(c) Reading books (1/4):</strong> 1/4 of 40 = 40 ÷ 4 = <strong>10 students</strong>.`,
      marks: 3,
      rubric: [
        { key: "Sports: 20", marks: "1 M" },
        { key: "TV: 10", marks: "1 M" },
        { key: "Books: 10", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Rabbit Population Growth Table",
      q: "Rabbits were brought to an island. The table shows their numbers each year:<br>• Year 0: 10 rabbits<br>• Year 1: 18 rabbits (almost double)<br>• Year 2: 32 rabbits<br>• Year 3: 58 rabbits<br>• Year 4: 108 rabbits<br>(a) Is the rabbit population growing by adding a fixed number or by multiplying? (b) Predict the approximate number of rabbits in Year 5.",
      ans: `<strong>Population Trend:</strong><br>
• <strong>(a) Growth nature:</strong> The population is <strong>multiplying / almost doubling each year</strong> (each year's count is a little less than double the previous year: 10×2-2=18, 18×2-4=32, 32×2-6=58, 58×2-8=108).<br>
• <strong>(b) Year 5 prediction:</strong> Approximately double of 108 minus 10 ≈ 216 - 10 = <strong>around 200 to 210 rabbits</strong>.`,
      marks: 3,
      rubric: [
        { key: "Multiplicative / doubling trend identified", marks: "1.5 M" },
        { key: "Year 5 prediction (approx 200-210)", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Plant Growth Bar Graph",
      q: "A plant's height was measured every 4 days:<br>• Day 0: 0 cm<br>• Day 4: 1.4 cm<br>• Day 8: 5.3 cm<br>• Day 12: 9.5 cm<br>• Day 16: 10.9 cm<br>• Day 20: 11.1 cm<br>(a) Between which days did the plant grow the fastest? (b) What was the total growth of the plant in 20 days?",
      ans: `<strong>Growth Intervals:</strong><br>
• Day 0 to 4: 1.4 - 0 = 1.4 cm.<br>
• Day 4 to 8: 5.3 - 1.4 = 3.9 cm.<br>
• Day 8 to 12: 9.5 - 5.3 = <strong>4.2 cm</strong> (fastest!).<br>
• Day 12 to 16: 10.9 - 9.5 = 1.4 cm.<br>
• Day 16 to 20: 11.1 - 10.9 = 0.2 cm.<br>
• <strong>(a) Fastest growth:</strong> Between <strong>Day 8 and Day 12</strong> (grew 4.2 cm).<br>
• <strong>(b) Total growth:</strong> 11.1 - 0 = <strong>11.1 cm</strong>.`,
      marks: 3,
      rubric: [
        { key: "Interval analysis", marks: "1 M" },
        { key: "Fastest: Day 8 to 12", marks: "1 M" },
        { key: "Total growth: 11.1 cm", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Helping Hands at Home Survey",
      q: "Children were asked what work they help most with at home: Going to market (47), Washing utensils (15), Washing clothes (3), Making/serving food (25), Cleaning house (10).<br>(a) How many children were surveyed in total? (b) Which chore do the most children help with? (c) What fraction of children help with going to the market (approximate)?",
      ans: `<strong>Survey Summary:</strong><br>
• <strong>(a) Total children:</strong> 47 + 15 + 3 + 25 + 10 = <strong>100 children</strong>.<br>
• <strong>(b) Most helped chore:</strong> <strong>Going to market (47 children)</strong>.<br>
• <strong>(c) Market fraction:</strong> 47/100 ≈ <strong>almost 1/2 of the children</strong> (about 47%).`,
      marks: 3,
      rubric: [
        { key: "Total: 100", marks: "1 M" },
        { key: "Market most helped", marks: "1 M" },
        { key: "Fraction approx 1/2 (47/100)", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Attendance Absenteeism Chart",
      q: "Absentees on Monday across classes: Class 1: 2, Class 2: 1, Class 3: 3, Class 4: 4, Class 5: 2. (a) What was the total number of absent students in the primary school on Monday? (b) Which class had the highest number of absentees?",
      ans: `<strong>Absentee Analysis:</strong><br>
• <strong>(a) Total absentees:</strong> 2 + 1 + 3 + 4 + 2 = <strong>12 students</strong>.<br>
• <strong>(b) Highest absentees:</strong> <strong>Class 4</strong> (4 students absent).`,
      marks: 2,
      rubric: [
        { key: "Total: 12 students", marks: "1 M" },
        { key: "Class 4 highest", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Favorite Ice Cream Pictograph",
      q: "In a pictograph, one ice cream cone symbol 🍦 represents 10 students. The table shows: Vanilla: 3 symbols; Chocolate: 5 symbols; Mango: 4 symbols; Strawberry: 2 symbols.<br>(a) How many students prefer Chocolate ice cream?<br>(b) How many more students prefer Mango than Strawberry?<br>(c) What is the total number of students?",
      ans: `<strong>Pictograph Calculations (1 symbol = 10 students):</strong><br>
• <strong>(a) Chocolate:</strong> 5 × 10 = <strong>50 students</strong>.<br>
• <strong>(b) Mango vs Strawberry:</strong> (4 - 2) × 10 = 2 × 10 = <strong>20 more students</strong>.<br>
• <strong>(c) Total students:</strong> (3 + 5 + 4 + 2) × 10 = 14 × 10 = <strong>140 students</strong>.`,
      marks: 3,
      rubric: [
        { key: "Chocolate: 50", marks: "1 M" },
        { key: "Mango difference: 20", marks: "1 M" },
        { key: "Total: 140", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Temperature Bar Chart",
      q: "City temperatures on a winter day: Delhi: 15°C, Shimla: 5°C, Chennai: 30°C, Jaipur: 20°C. If a bar graph has 1 cm height = 5°C: (a) What will be the height of the bar for Chennai? (b) What will be the height of the bar for Shimla?",
      ans: `<strong>Bar Chart Heights:</strong><br>
• <strong>(a) Chennai (30°C):</strong> 30 ÷ 5 = <strong>6 cm</strong>.<br>
• <strong>(b) Shimla (5°C):</strong> 5 ÷ 5 = <strong>1 cm</strong>.`,
      marks: 2,
      rubric: [
        { key: "Chennai bar: 6 cm", marks: "1 M" },
        { key: "Shimla bar: 1 cm", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Mode in Data",
      q: "The shoe sizes of 11 boys are: 5, 6, 6, 7, 5, 6, 8, 6, 7, 6, 5. (a) Arrange the data in a frequency table with tally marks. (b) Which shoe size is the most common (mode)?",
      ans: `<strong>Frequency Table:</strong><br>
• Size 5: 3 boys (|||)<br>
• Size 6: 5 boys (🗎 with 5 lines)<br>
• Size 7: 2 boys (||)<br>
• Size 8: 1 boy (|)<br>
• <strong>Most common size:</strong> <strong>Size 6</strong> (occurs 5 times).`,
      marks: 3,
      rubric: [
        { key: "Frequency table with tally", marks: "2 M" },
        { key: "Mode: Size 6", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Tree Plantation Data",
      q: "Five houses planted saplings in 'Van Mahotsav': House 1 (12), House 2 (18), House 3 (15), House 4 (25), House 5 (10). (a) What is the total number of saplings planted? (b) What is the average number of saplings planted per house?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Total saplings:</strong> 12 + 18 + 15 + 25 + 10 = <strong>80 saplings</strong>.<br>
• <strong>(b) Average:</strong> Total ÷ Number of houses = 80 ÷ 5 = <strong>16 saplings per house</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total: 80 saplings", marks: "1.5 M" },
        { key: "Average: 16 saplings", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Reading Pie Chart Fractions",
      q: "A circular chart shows: 50% students walk to school, 25% take school bus, 25% ride bicycle. (a) What fraction of students walk? (b) If there are 200 students in the school, how many ride a bicycle?",
      ans: `<strong>Fractions & Counts:</strong><br>
• <strong>(a) Walking fraction:</strong> 50% = 50/100 = <strong>1/2</strong>.<br>
• <strong>(b) Bicycle riders:</strong> 25% = 1/4 of total. 1/4 of 200 = 200 ÷ 4 = <strong>50 students</strong>.`,
      marks: 2,
      rubric: [
        { key: "Walking: 1/2", marks: "1 M" },
        { key: "Bicycle: 50 students", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Dice Throw Outcome Bar Chart",
      q: "A die was rolled 30 times. The outcomes were: 1 (4 times), 2 (6 times), 3 (5 times), 4 (7 times), 5 (3 times), 6 (5 times). (a) Which number turned up the most? (b) Which number turned up the least?",
      ans: `<strong>Dice Analysis:</strong><br>
• <strong>(a) Most frequent outcome:</strong> <strong>Number 4</strong> (turned up 7 times).<br>
• <strong>(b) Least frequent outcome:</strong> <strong>Number 5</strong> (turned up 3 times).`,
      marks: 2,
      rubric: [
        { key: "Most frequent: 4", marks: "1 M" },
        { key: "Least frequent: 5", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Rainfall Bar Chart",
      q: "Monthly rainfall recorded in mm: June (120 mm), July (250 mm), August (300 mm), September (180 mm). (a) Which month had the maximum rainfall? (b) What was the total rainfall during the monsoon season (June to September)?",
      ans: `<strong>Rainfall Data:</strong><br>
• <strong>(a) Maximum rainfall:</strong> <strong>August (300 mm)</strong>.<br>
• <strong>(b) Total rainfall:</strong> 120 + 250 + 300 + 180 = <strong>850 mm</strong>.`,
      marks: 2,
      rubric: [
        { key: "August (300 mm)", marks: "1 M" },
        { key: "Total: 850 mm", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Constructing a Scale for a Bar Graph",
      q: "The marks obtained by a student are: English 75, Hindi 80, Maths 95, Science 85, Social Science 70. If you draw a bar graph on a paper with maximum height 10 cm, what scale should you choose for the vertical axis?",
      ans: `<strong>Axis Scaling:</strong><br>
• Highest mark = 95 (round up to 100).<br>
• Available height = 10 cm.<br>
• Scale: 100 ÷ 10 = 10 marks per cm. So <strong>1 cm = 10 marks</strong> is the ideal scale (the tallest bar for Maths will be 9.5 cm high).`,
      marks: 2,
      rubric: [
        { key: "Proposed scale: 1 cm = 10 marks", marks: "1 M" },
        { key: "Height verification (9.5 cm for 95)", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Tally Box Notation",
      q: "Explain how NCERT Class 5 tally marks are drawn using the 5-line box method.",
      ans: `<strong>NCERT Box Tally Method:</strong><br>
• 1 = 1 vertical line (|)<br>
• 2 = 2 lines forming a right angle (L)<br>
• 3 = 3 sides of a square (U)<br>
• 4 = A complete square (4 sides: 🗆)<br>
• 5 = A square with a diagonal slash crossing it (🗎).<br>
This creates easy-to-read bundles of 5.`,
      marks: 3,
      rubric: [
        { key: "1 to 4 steps explained", marks: "1.5 M" },
        { key: "5th diagonal slash completing bundle", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Library Books Distribution",
      q: "A school library has 600 books: Storybooks (250), Science (150), Mathematics (100), History (100). What fraction of total books are Storybooks?",
      ans: `<strong>Fraction Calculation:</strong><br>
• Storybooks = 250.<br>
• Total books = 600.<br>
• Fraction = 250/600 = 25/60 = <strong>5/12 of total books</strong>.`,
      marks: 2,
      rubric: [
        { key: "250/600 ratio", marks: "1 M" },
        { key: "Reduced fraction: 5/12", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Comparing Double Bar Graph",
      q: "A double bar graph compares marks of Term 1 and Term 2 for Rohit: Maths (65 → 85), English (70 → 75), Science (60 → 80). In which subject did Rohit show the maximum improvement?",
      ans: `<strong>Improvement Differences:</strong><br>
• Maths: 85 - 65 = <strong>20 marks improvement</strong>.<br>
• English: 75 - 70 = 5 marks improvement.<br>
• Science: 80 - 60 = <strong>20 marks improvement</strong>.<br>
Rohit showed the maximum improvement of 20 marks equally in <strong>Maths and Science</strong>.`,
      marks: 2,
      rubric: [
        { key: "Differences calculated", marks: "1 M" },
        { key: "Maths and Science (20 marks each)", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Morning Walk Time Line Graph",
      q: "Rohan recorded time spent on morning walk over 5 days: Monday 20 min, Tuesday 25 min, Wednesday 30 min, Thursday 35 min, Friday 40 min. What is the pattern in time spent, and what is his total walking time in hours?",
      ans: `<strong>Trend & Total Time:</strong><br>
• <strong>Pattern:</strong> Increases by <strong>5 minutes each day</strong>.<br>
• <strong>Total time:</strong> 20 + 25 + 30 + 35 + 40 = 150 minutes.<br>
• In hours = 150 ÷ 60 = <strong>2 hours and 30 minutes (2.5 hours)</strong>.`,
      marks: 3,
      rubric: [
        { key: "5-minute increment pattern", marks: "1 M" },
        { key: "Total 150 minutes", marks: "1 M" },
        { key: "Converted to 2.5 hours", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Fruit Seller Inventory",
      q: "A fruit seller has 80 kg of fruits: Apples 20 kg, Bananas 40 kg, Oranges 20 kg. What fraction of the total fruits are Bananas?",
      ans: `<strong>Fraction:</strong><br>
• Bananas = 40 kg; Total = 80 kg.<br>
• Fraction = 40/80 = <strong>1/2 (half of all fruits)</strong>.`,
      marks: 2,
      rubric: [
        { key: "40/80 ratio", marks: "1 M" },
        { key: "Answer: 1/2", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Newspaper Reading Survey",
      q: "In an apartment block of 50 families: 30 families read Hindi newspaper, 15 families read English newspaper, and 5 read both. How many families read only Hindi newspaper?",
      ans: `<strong>Venn Subtraction:</strong><br>
• Total Hindi readers = 30 families.<br>
• Read both = 5 families.<br>
• <strong>Only Hindi newspaper:</strong> 30 - 5 = <strong>25 families</strong>.`,
      marks: 2,
      rubric: [
        { key: "Subtraction 30 - 5", marks: "1 M" },
        { key: "Answer: 25 families", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Class Strength Comparison",
      q: "Section A has 35 students and Section B has 45 students. (a) What is the ratio of Section A to Section B in simplest form? (b) How many students should transfer from Section B to Section A to make both sections equal?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Ratio:</strong> 35 : 45 = (35÷5) : (45÷5) = <strong>7 : 9</strong>.<br>
• <strong>(b) Equal sections:</strong> Total = 35 + 45 = 80 students. Each section needs 80 ÷ 2 = 40 students.<br>
  Transfer needed = 45 - 40 = <strong>5 students</strong>.`,
      marks: 3,
      rubric: [
        { key: "Ratio 7:9", marks: "1.5 M" },
        { key: "Transfer 5 students", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Favorite Subject Survey",
      q: "In a survey of 60 children: 24 voted Maths, 18 voted Science, 12 voted Art, and 6 voted English. Represent this data as percentage of total votes.",
      ans: `<strong>Percentages (Vote ÷ 60 × 100%):</strong><br>
• Maths: (24 ÷ 60) × 100 = <strong>40%</strong>.<br>
• Science: (18 ÷ 60) × 100 = <strong>30%</strong>.<br>
• Art: (12 ÷ 60) × 100 = <strong>20%</strong>.<br>
• English: (6 ÷ 60) × 100 = <strong>10%</strong>.`,
      marks: 3,
      rubric: [
        { key: "Maths 40%, Science 30%", marks: "1.5 M" },
        { key: "Art 20%, English 10%", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Range of a Dataset",
      q: "Daily maximum temperatures over one week were: 32°C, 35°C, 31°C, 38°C, 34°C, 30°C, 36°C. (a) What was the highest temperature? (b) What was the lowest temperature? (c) What is the 'Range' of the temperature dataset?",
      ans: `<strong>Range Calculation:</strong><br>
• <strong>(a) Highest:</strong> <strong>38°C</strong>.<br>
• <strong>(b) Lowest:</strong> <strong>30°C</strong>.<br>
• <strong>(c) Range:</strong> Highest - Lowest = 38°C - 30°C = <strong>8°C</strong>.`,
      marks: 3,
      rubric: [
        { key: "Highest: 38°C", marks: "1 M" },
        { key: "Lowest: 30°C", marks: "1 M" },
        { key: "Range: 8°C", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Importance of Smart Charts",
      q: "Why are charts and graphs called 'Smart Charts'? Give two reasons why displaying data in charts is better than raw number lists.",
      ans: `<strong>Advantages of Smart Charts:</strong><br>
1. <strong>Instant Visual Understanding:</strong> Charts allow readers to grasp trends, comparisons, and peaks at a single glance without reading long tables.<br>
2. <strong>Easy Comparison:</strong> Tall bars and large pie slices immediately show which category is largest or smallest without performing manual calculations.`,
      marks: 2,
      rubric: [
        { key: "Visual clarity explained", marks: "1 M" },
        { key: "Immediate comparison benefit explained", marks: "1 M" }
      ]
    }
  ],
  magic13: [
    {
      category: "Textbook Exercise • Maniratnam the Cashier (Daily Wage Multiplications)",
      q: "Maniratnam is the cashier of King Jayan. His job is to calculate the salary of all the workers: The cook gets ₹65 per day, the minister gets ₹195 per day, and the king's horse-keeper gets ₹86 per day. Calculate:<br>(a) The cook's salary for the month of January (31 days).<br>(b) The horse-keeper's salary for 1 full year (365 days).<br>(c) The minister's salary for 1 full year (365 days).",
      ans: `<strong>Multiplication Calculations:</strong><br>
• <strong>(a) Cook's salary for January:</strong> 31 × ₹65 = 31 × (60 + 5) = 1,860 + 155 = <strong>₹2,015</strong>.<br>
• <strong>(b) Horse-keeper's annual salary:</strong> 365 × ₹86 = 365 × (80 + 6) = 29,200 + 2,190 = <strong>₹31,390</strong>.<br>
• <strong>(c) Minister's annual salary:</strong> 365 × ₹195 = 365 × (200 - 5) = 73,000 - 1,825 = <strong>₹71,175</strong>.`,
      marks: 4,
      rubric: [
        { key: "Cook: ₹2,015", marks: "1 M" },
        { key: "Horse-keeper: ₹31,390", marks: "1.5 M" },
        { key: "Minister: ₹71,175", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Bela's Method of Multiplication",
      q: "Multiply 47 × 19 using Bela's method (distributive method by splitting 19 into 9 and 10). Show each partial product.",
      ans: `<strong>Bela's Distributive Method:</strong><br>
Split 19 = 10 + 9:<br>
• Step 1: Multiply 47 by 9 = 47 × 9 = <strong>423</strong>.<br>
• Step 2: Multiply 47 by 10 = 47 × 10 = <strong>470</strong>.<br>
• Step 3: Add partial products = 423 + 470 = <strong>893</strong>.<br>
Therefore, 47 × 19 = <strong>893</strong>.`,
      marks: 3,
      rubric: [
        { key: "47 × 9 = 423", marks: "1 M" },
        { key: "47 × 10 = 470", marks: "1 M" },
        { key: "Sum: 893", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Shantaram the Cook's Holiday Deduction",
      q: "Shantaram is a special cook who is called only on party days. Last year he was called for only 28 days. For each day he is paid ₹165. (a) How much money did he earn in all? (b) If he was paid for all 365 days of the year, how much would he have earned?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Actual earnings:</strong> 28 × ₹165 = 28 × (100 + 60 + 5) = 2,800 + 1,680 + 140 = <strong>₹4,620</strong>.<br>
• <strong>(b) Full year earnings:</strong> 365 × ₹165 = 365 × (100 + 60 + 5) = 36,500 + 21,900 + 1,825 = <strong>₹60,225</strong>.`,
      marks: 3,
      rubric: [
        { key: "28 days earnings: ₹4,620", marks: "1.5 M" },
        { key: "Full year earnings: ₹60,225", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Sohanlal the Farmer's Loan",
      q: "Sohanlal drank 8 glasses of water every day. (a) How many glasses will he drink in one month of 30 days? (b) How many glasses will he drink in one year (365 days)? (c) If 125 people in a village drink 8 glasses of water daily, how many glasses will they drink in one day?",
      ans: `<strong>Water Multiplications:</strong><br>
• <strong>(a) 30 days:</strong> 30 × 8 = <strong>240 glasses</strong>.<br>
• <strong>(b) 1 year:</strong> 365 × 8 = <strong>2,920 glasses</strong>.<br>
• <strong>(c) 125 people in 1 day:</strong> 125 × 8 = <strong>1,000 glasses</strong>.`,
      marks: 3,
      rubric: [
        { key: "30 days: 240 glasses", marks: "1 M" },
        { key: "1 year: 2,920 glasses", marks: "1 M" },
        { key: "125 people: 1,000 glasses", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Heartbeat Counting",
      q: "A person's heart beats about 72 times in one minute. (a) How many times does it beat in 1 hour? (b) How many times does it beat in 1 full day (24 hours)?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) In 1 hour (60 minutes):</strong> 72 × 60 = <strong>4,320 beats</strong>.<br>
• <strong>(b) In 1 day (24 hours):</strong> 4,320 × 24 = 4,320 × (20 + 4) = 86,400 + 17,280 = <strong>1,03,680 beats</strong>.`,
      marks: 3,
      rubric: [
        { key: "1 hour: 4,320 beats", marks: "1.5 M" },
        { key: "24 hours: 1,03,680 beats", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Baby Blue Whale Milk Consumption",
      q: "A baby blue whale drinks around 200 litres of milk every single day! (a) How many litres of milk will it drink in 8 months (assume 30 days per month)? (b) If your family consumes 2 litres of milk daily, how many days will 200 litres of milk last your family?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Whale milk in 8 months:</strong><br>
  - Total days = 8 × 30 = 240 days.<br>
  - Milk consumed = 240 × 200 litres = <strong>48,000 litres</strong>.<br>
• <strong>(b) Family consumption:</strong> 200 litres ÷ 2 litres/day = <strong>100 days</strong>.`,
      marks: 3,
      rubric: [
        { key: "Whale 8 months: 48,000 litres", marks: "1.5 M" },
        { key: "Family duration: 100 days", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Sukhi's Farm Labor Wage",
      q: "Sukhi works on a farm. He is paid ₹98 for one day. If he works for 52 days, how much money does he earn?",
      ans: `<strong>Multiplication:</strong><br>
• Earnings = 52 × ₹98 = 52 × (100 - 2) = 5,200 - 104 = <strong>₹5,096</strong>.`,
      marks: 2,
      rubric: [
        { key: "Multiplication 52 × 98", marks: "1 M" },
        { key: "Answer: ₹5,096", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Hariya's Fertilizer Loan & Installments",
      q: "Hariya took a loan of ₹20,000 to buy fertilizer. He has to pay back ₹2,400 every month for 10 months. (a) What is the total money he paid back? (b) How much extra money did the bank charge as interest?",
      ans: `<strong>Loan Repayment:</strong><br>
• <strong>(a) Total repayment:</strong> 10 × ₹2,400 = <strong>₹24,000</strong>.<br>
• <strong>(b) Interest charged:</strong> ₹24,000 - ₹20,000 = <strong>₹4,000</strong>.`,
      marks: 2,
      rubric: [
        { key: "Total paid: ₹24,000", marks: "1 M" },
        { key: "Interest: ₹4,000", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Long Division Method (Hostel Rice)",
      q: "A school hostel has 576 students. If each student gets 15 kg of rice per month, how much rice is needed for the hostel in one month?",
      ans: `<strong>Multiplication:</strong><br>
• Rice required = 576 × 15 kg = 576 × (10 + 5) = 5,760 + 2,880 = <strong>8,640 kg</strong>.`,
      marks: 2,
      rubric: [
        { key: "Multiplication statement", marks: "1 M" },
        { key: "Answer: 8,640 kg", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Division with Remainder (Laddoo Packing)",
      q: "A sweet maker has 250 laddoos. He packs them into boxes of 12 laddoos each. (a) How many full boxes can he make? (b) How many laddoos will be left over? (c) How many more laddoos are needed to make another full box?",
      ans: `<strong>Division: 250 ÷ 12:</strong><br>
• 250 ÷ 12 = 20 with remainder 10 (since 12 × 20 = 240, and 250 - 240 = 10).<br>
• <strong>(a) Full boxes:</strong> <strong>20 boxes</strong>.<br>
• <strong>(b) Left over:</strong> <strong>10 laddoos</strong>.<br>
• <strong>(c) More needed for next box:</strong> 12 - 10 = <strong>2 more laddoos</strong>.`,
      marks: 3,
      rubric: [
        { key: "20 full boxes", marks: "1 M" },
        { key: "10 left over", marks: "1 M" },
        { key: "2 more needed", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Tanker Water Distribution",
      q: "A water tanker carries 4,500 litres of water to a colony. If each family is given 150 litres of water, how many families can get water from the tanker?",
      ans: `<strong>Division:</strong><br>
• Number of families = 4,500 ÷ 150 = 450 ÷ 15 = <strong>30 families</strong>.`,
      marks: 2,
      rubric: [
        { key: "Division setup", marks: "1 M" },
        { key: "Answer: 30 families", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Verifying Division (Dividend Formula)",
      q: "Dividend = (Divisor × Quotient) + Remainder. Divide 678 by 14 and verify your result using this formula.",
      ans: `<strong>Division and Verification:</strong><br>
1. <strong>Division:</strong> 678 ÷ 14 = <strong>48 with remainder 6</strong> (since 14 × 40 = 560; 118 ÷ 14 = 8 with remainder 6: 14 × 8 = 112, 118 - 112 = 6).<br>
2. <strong>Verification:</strong><br>
   - Divisor × Quotient = 14 × 48 = 672.<br>
   - Adding remainder: 672 + 6 = <strong>678 (Dividend)</strong>. (Verified!).`,
      marks: 3,
      rubric: [
        { key: "Quotient 48, Remainder 6", marks: "1.5 M" },
        { key: "Formula verification shown", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Buying Land in Installments",
      q: "Kamini buys a plot of land for ₹95,000. She pays ₹35,000 in cash and agrees to pay the rest in 12 equal monthly installments. How much must she pay each month?",
      ans: `<strong>Installment Calculation:</strong><br>
1. Remaining balance = ₹95,000 - ₹35,000 = ₹60,000.<br>
2. Monthly installment = ₹60,000 ÷ 12 = <strong>₹5,000 per month</strong>.`,
      marks: 3,
      rubric: [
        { key: "Remaining balance: ₹60,000", marks: "1.5 M" },
        { key: "Monthly installment: ₹5,000", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Books in Boxes (Carton Packing)",
      q: "A publishing house printed 3,456 math textbooks. They can pack 24 books in one cardboard carton. How many cartons are needed to pack all the books?",
      ans: `<strong>Division: 3,456 ÷ 24:</strong><br>
• 3,456 ÷ 24 = <strong>144 cartons</strong> (24 × 100 = 2400; remainder 1056; 24 × 40 = 960; remainder 96; 24 × 4 = 96. Total = 100 + 40 + 4 = 144).`,
      marks: 2,
      rubric: [
        { key: "Division steps shown", marks: "1 M" },
        { key: "Answer: 144 cartons", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Factory Production per Hour",
      q: "A biscuit factory produces 14,400 packets of biscuits in a day. The factory runs for 16 hours every day. How many packets are produced in one hour?",
      ans: `<strong>Division:</strong><br>
• Packets per hour = 14,400 ÷ 16 = <strong>900 packets per hour</strong>.`,
      marks: 2,
      rubric: [
        { key: "Division setup", marks: "1 M" },
        { key: "Answer: 900 packets", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Bus Tickets for School Excursion",
      q: "248 students and 12 teachers are going on an excursion. Each bus can seat 45 passengers. (a) How many total people are travelling? (b) How many buses must be hired so that everyone gets a seat?",
      ans: `<strong>Bus Requirement:</strong><br>
• <strong>(a) Total passengers:</strong> 248 + 12 = 260 passengers.<br>
• <strong>(b) Buses needed:</strong> 260 ÷ 45 = 5 with remainder 35 (since 45 × 5 = 225).<br>
  Since 35 passengers remain without seats, 1 extra bus must be hired.<br>
  Total buses needed = 5 + 1 = <strong>6 buses</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total passengers: 260", marks: "1 M" },
        { key: "Division: 5 remainder 35", marks: "1 M" },
        { key: "Rounding up to 6 buses", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Multiplying 3-Digit Numbers",
      q: "Calculate: 245 × 132 showing step-by-step partial products.",
      ans: `<strong>3-Digit Multiplication:</strong><br>
• 245 × 2 = 490<br>
• 245 × 30 = 7,350<br>
• 245 × 100 = 24,500<br>
• <strong>Sum:</strong> 490 + 7,350 + 24,500 = <strong>32,340</strong>.`,
      marks: 3,
      rubric: [
        { key: "Partial products shown", marks: "2 M" },
        { key: "Final answer: 32,340", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Repeated Subtraction Division",
      q: "Explain how 96 ÷ 16 can be solved using repeated subtraction. How many times can 16 be subtracted from 96?",
      ans: `<strong>Repeated Subtraction:</strong><br>
• 96 - 16 = 80 (1st)<br>
• 80 - 16 = 64 (2nd)<br>
• 64 - 16 = 48 (3rd)<br>
• 48 - 16 = 32 (4th)<br>
• 32 - 16 = 16 (5th)<br>
• 16 - 16 = 0 (6th)<br>
16 was subtracted exactly <strong>6 times</strong>. Therefore, 96 ÷ 16 = <strong>6</strong>.`,
      marks: 2,
      rubric: [
        { key: "Subtraction steps shown", marks: "1 M" },
        { key: "Quotient = 6", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Monthly Budget from Daily Expense",
      q: "A family spends ₹425 daily on groceries and food. How much do they spend in a leap year (366 days)?",
      ans: `<strong>Multiplication:</strong><br>
• Expense = 366 × ₹425 = 366 × (400 + 25) = 146,400 + 9,150 = <strong>₹1,55,550</strong>.`,
      marks: 3,
      rubric: [
        { key: "Leap year = 366 days noted", marks: "1 M" },
        { key: "Calculation: ₹1,55,550", marks: "2 M" }
      ]
    },
    {
      category: "Textbook Exercise • Unit Price Comparison",
      q: "Shop A sells 5 kg rice for ₹225. Shop B sells 8 kg rice for ₹344. Which shop is cheaper per kg, and by how much?",
      ans: `<strong>Unit Price (Cost per kg):</strong><br>
• Shop A: ₹225 ÷ 5 = <strong>₹45 per kg</strong>.<br>
• Shop B: ₹344 ÷ 8 = <strong>₹43 per kg</strong>.<br>
• <strong>Shop B is cheaper</strong> by ₹45 - ₹43 = <strong>₹2 per kg</strong>.`,
      marks: 3,
      rubric: [
        { key: "Shop A: ₹45/kg", marks: "1 M" },
        { key: "Shop B: ₹43/kg", marks: "1 M" },
        { key: "Shop B cheaper by ₹2", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Sharing an Inherited Sum",
      q: "An amount of ₹72,960 is divided equally among 6 brothers. How much money does each brother receive?",
      ans: `<strong>Division:</strong><br>
• Share per brother = ₹72,960 ÷ 6 = <strong>₹12,160</strong>.`,
      marks: 2,
      rubric: [
        { key: "Division setup", marks: "1 M" },
        { key: "Answer: ₹12,160", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Estimation in Multiplication",
      q: "Estimate the product of 48 × 73 by rounding off each number to the nearest ten. Then find the actual product and compare.",
      ans: `<strong>Estimation & Comparison:</strong><br>
• 48 rounds to 50; 73 rounds to 70.<br>
• <strong>Estimated product:</strong> 50 × 70 = <strong>3,500</strong>.<br>
• <strong>Actual product:</strong> 48 × 73 = <strong>3,504</strong>.<br>
The estimated product (3,500) is remarkably close to the actual product (3,504), differing by only 4!`,
      marks: 3,
      rubric: [
        { key: "Estimated product: 3,500", marks: "1.5 M" },
        { key: "Actual product: 3,504 & comparison", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Cinema Ticket Sales",
      q: "A movie theatre has 35 rows with 28 seats in each row. For the evening show, all seats were booked at ₹120 per ticket. How much money was collected?",
      ans: `<strong>Multi-step Multiplication:</strong><br>
1. Total seats = 35 × 28 = 35 × (20 + 8) = 700 + 280 = 980 seats.<br>
2. Total collection = 980 × ₹120 = 980 × (100 + 20) = 98,000 + 19,600 = <strong>₹1,17,600</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total seats: 980", marks: "1.5 M" },
        { key: "Total collection: ₹1,17,600", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Division of Multiples of 100",
      q: "Solve mental math divisions:<br>(a) 48,000 ÷ 600<br>(b) 35,000 ÷ 70<br>(c) 8,100 ÷ 90",
      ans: `<strong>Mental Math:</strong><br>
• (a) 48,000 ÷ 600 = 480 ÷ 6 = <strong>80</strong>.<br>
• (b) 35,000 ÷ 70 = 3,500 ÷ 7 = <strong>500</strong>.<br>
• (c) 8,100 ÷ 90 = 810 ÷ 9 = <strong>90</strong>.`,
      marks: 3,
      rubric: [
        { key: "All 3 correct (1 M each)", marks: "3 M" }
      ]
    }
  ],
  magic14: [
    {
      category: "Textbook Exercise • Measuring Volume with Marbles",
      q: "A measuring glass filled with water to 50 mL mark rises to 68 mL when 9 equal glass marbles are dropped inside.<br>(a) How much water was displaced by all 9 marbles?<br>(b) What is the volume of 1 marble in mL?<br>(c) What is the volume in cubic centimetres (cm³) if 1 mL = 1 cm³?",
      ans: `<strong>Volume by Water Displacement:</strong><br>
• <strong>(a) Displaced water:</strong> 68 mL - 50 mL = <strong>18 mL</strong>.<br>
• <strong>(b) Volume of 1 marble:</strong> 18 mL ÷ 9 marbles = <strong>2 mL</strong>.<br>
• <strong>(c) In cubic centimetres:</strong> 2 mL = <strong>2 cm³</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 18 mL", marks: "1 M" },
        { key: "Part (b): 2 mL", marks: "1 M" },
        { key: "Part (c): 2 cm³", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Volume of a Cube",
      q: "(a) What is the formula for the volume of a cube? (b) Find the volume of a wooden cube of side 5 cm. (c) How many 1 cm unit cubes can fit inside it?",
      ans: `<strong>Volume of Cube:</strong><br>
• <strong>(a) Formula:</strong> Volume = Side × Side × Side = <strong>Side³</strong>.<br>
• <strong>(b) Volume:</strong> 5 cm × 5 cm × 5 cm = <strong>125 cm³</strong>.<br>
• <strong>(c) Number of 1 cm unit cubes:</strong> 125 ÷ 1 = <strong>125 cubes</strong>.`,
      marks: 3,
      rubric: [
        { key: "Formula: Side³", marks: "1 M" },
        { key: "Volume: 125 cm³", marks: "1 M" },
        { key: "125 unit cubes fit", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Volume of a Cuboid",
      q: "A matchbox measures 5 cm in length, 3 cm in width, and 1 cm in height. (a) What is the volume of one matchbox? (b) What is the volume of a packet containing 12 such matchboxes?",
      ans: `<strong>Volume Calculations (Volume = l × w × h):</strong><br>
• <strong>(a) One matchbox:</strong> 5 cm × 3 cm × 1 cm = <strong>15 cm³</strong>.<br>
• <strong>(b) Packet of 12 matchboxes:</strong> 12 × 15 cm³ = <strong>180 cm³</strong>.`,
      marks: 3,
      rubric: [
        { key: "One matchbox: 15 cm³", marks: "1.5 M" },
        { key: "Packet: 180 cm³", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Packing Cubes into a Carton",
      q: "A carton box is 20 cm long, 10 cm wide, and 8 cm high. How many soap cakes of size 5 cm × 5 cm × 4 cm can be packed inside the carton box?",
      ans: `<strong>Packing Capacity:</strong><br>
• <strong>Method 1 (Dimensions fitting):</strong><br>
  - Along 20 cm length: 20 ÷ 5 = 4 soaps.<br>
  - Along 10 cm width: 10 ÷ 5 = 2 soaps.<br>
  - Along 8 cm height: 8 ÷ 4 = 2 soaps.<br>
  - Total soaps = 4 × 2 × 2 = <strong>16 soaps</strong>.<br>
• <strong>Method 2 (Volume):</strong> Volume of carton = 20 × 10 × 8 = 1,600 cm³. Volume of 1 soap = 5 × 5 × 4 = 100 cm³. Number of soaps = 1,600 ÷ 100 = <strong>16 soaps</strong>.`,
      marks: 3,
      rubric: [
        { key: "Dimension fitting / Volume method", marks: "1.5 M" },
        { key: "Answer: 16 soaps", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Stage Building with Matchboxes",
      q: "Tanu made a stage using 14 matchboxes in one layer. She built a platform 3 layers high. (a) How many matchboxes did she use in total? (b) If each matchbox has volume 15 cm³, what is the total volume of the stage platform?",
      ans: `<strong>Stage Platform Calculations:</strong><br>
• <strong>(a) Total matchboxes:</strong> 14 matchboxes/layer × 3 layers = <strong>42 matchboxes</strong>.<br>
• <strong>(b) Total volume:</strong> 42 × 15 cm³ = <strong>630 cm³</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total matchboxes: 42", marks: "1.5 M" },
        { key: "Total volume: 630 cm³", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Weight of Coins (5-Rupee Coin)",
      q: "A ₹5 coin weighs 9 grams. A bank sack full of ₹5 coins weighs 9 kilograms. (a) Convert 9 kg into grams. (b) How many ₹5 coins are in the sack? (c) What is the total monetary value of all the coins in the sack?",
      ans: `<strong>Coin & Weight Calculations:</strong><br>
• <strong>(a) Conversion:</strong> 9 kg = 9 × 1,000 = <strong>9,000 grams</strong>.<br>
• <strong>(b) Number of coins:</strong> 9,000 g ÷ 9 g/coin = <strong>1,000 coins</strong>.<br>
• <strong>(c) Monetary value:</strong> 1,000 coins × ₹5 = <strong>₹5,000</strong>.`,
      marks: 3,
      rubric: [
        { key: "9,000 grams", marks: "1 M" },
        { key: "1,000 coins", marks: "1 M" },
        { key: "Value: ₹5,000", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • 2-Rupee Coin Sack Weight",
      q: "A ₹2 coin weighs 6 grams. A sack containing ₹2 coins weighs 4 kg and 800 grams. How many ₹2 coins are inside the sack?",
      ans: `<strong>Weight Conversion & Division:</strong><br>
1. Total weight in grams = 4,000 g + 800 g = 4,800 grams.<br>
2. Weight of 1 coin = 6 grams.<br>
3. Number of coins = 4,800 ÷ 6 = <strong>800 coins</strong>.`,
      marks: 3,
      rubric: [
        { key: "4,800 grams conversion", marks: "1.5 M" },
        { key: "Answer: 800 coins", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Litres and Millilitres to Cubic Centimetres",
      q: "Fill in the blanks: (a) 1 litre = _____ mL. (b) 1 mL = _____ cm³. (c) 1 litre = _____ cm³.",
      ans: `<strong>Volume Equivalences:</strong><br>
• (a) 1 litre = <strong>1,000 mL</strong>.<br>
• (b) 1 mL = <strong>1 cm³</strong>.<br>
• (c) 1 litre = 1,000 mL = <strong>1,000 cm³</strong>.`,
      marks: 3,
      rubric: [
        { key: "1,000 mL", marks: "1 M" },
        { key: "1 cm³", marks: "1 M" },
        { key: "1,000 cm³", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Water Tank Capacity in Litres",
      q: "A rectangular overhead water tank is 2 metres long, 1.5 metres wide, and 1 metre high. (a) What is its volume in cubic metres? (b) How many litres of water can it hold if 1 cubic metre (m³) = 1,000 litres?",
      ans: `<strong>Tank Capacity:</strong><br>
• <strong>(a) Volume:</strong> 2 m × 1.5 m × 1 m = <strong>3 cubic metres (3 m³)</strong>.<br>
• <strong>(b) Capacity in litres:</strong> 3 m³ × 1,000 litres/m³ = <strong>3,000 litres</strong>.`,
      marks: 3,
      rubric: [
        { key: "Volume: 3 m³", marks: "1.5 M" },
        { key: "Capacity: 3,000 litres", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Heavy School Bag Weight",
      q: "A student's school bag has: 4 textbooks weighing 350 g each, 5 notebooks weighing 150 g each, a water bottle weighing 800 g, and a pencil box weighing 250 g. What is the total weight of the bag in kg and g?",
      ans: `<strong>Total Weight Calculation:</strong><br>
• Textbooks: 4 × 350 g = 1,400 g.<br>
• Notebooks: 5 × 150 g = 750 g.<br>
• Water bottle: 800 g.<br>
• Pencil box: 250 g.<br>
• <strong>Sum in grams:</strong> 1,400 + 750 + 800 + 250 = 3,200 grams.<br>
• In kg and g = <strong>3 kg and 200 grams (3.2 kg)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Itemized weights calculated", marks: "1.5 M" },
        { key: "Total: 3 kg 200 g", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Comparing Volumes of Liquid & Solid",
      q: "A solid metal cube of side 4 cm is dropped into a full container of water. How many millilitres of water will overflow?",
      ans: `<strong>Water Displacement Principle:</strong><br>
• A submerged solid displaces an amount of water equal to its own volume.<br>
• Volume of metal cube = 4 cm × 4 cm × 4 cm = 64 cm³.<br>
• Since 1 cm³ = 1 mL, the volume of water displaced = <strong>64 mL</strong>.<br>
Therefore, <strong>64 mL</strong> of water will overflow.`,
      marks: 2,
      rubric: [
        { key: "Volume of cube = 64 cm³", marks: "1 M" },
        { key: "Overflow = 64 mL", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Cardboard Box Volume",
      q: "Find the volume of a cardboard box that is 45 cm long, 25 cm wide, and 20 cm high.",
      ans: `<strong>Volume Calculation:</strong><br>
• Volume = Length × Width × Height = 45 × 25 × 20 cm³.<br>
• 25 × 20 = 500.<br>
• 45 × 500 = <strong>22,500 cm³</strong>.`,
      marks: 2,
      rubric: [
        { key: "Formula l × w × h", marks: "1 M" },
        { key: "Answer: 22,500 cm³", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Rice Grain Count Estimation",
      q: "100 grains of rice weigh about 2 grams. (a) What is the weight of 1 grain of rice? (b) Approximately how many grains of rice are there in a 1 kg (1,000 g) bag?",
      ans: `<strong>Estimation:</strong><br>
• <strong>(a) Weight of 1 grain:</strong> 2 g ÷ 100 = <strong>0.02 grams</strong>.<br>
• <strong>(b) Grains in 1 kg:</strong> 1,000 g ÷ 2 g = 500 packets of 100 grains.<br>
  Total grains = 500 × 100 = <strong>50,000 grains</strong>.`,
      marks: 3,
      rubric: [
        { key: "1 grain: 0.02 g", marks: "1 M" },
        { key: "1 kg has 50,000 grains", marks: "2 M" }
      ]
    },
    {
      category: "Textbook Exercise • Cubes from a Large Wooden Block",
      q: "A rectangular wooden block is 12 cm × 9 cm × 6 cm. It is cut into small cubes of side 3 cm. How many small cubes can be cut without any wood wasted?",
      ans: `<strong>Cube Division:</strong><br>
• Along length: 12 ÷ 3 = 4 cubes.<br>
• Along width: 9 ÷ 3 = 3 cubes.<br>
• Along height: 6 ÷ 3 = 2 cubes.<br>
• <strong>Total cubes:</strong> 4 × 3 × 2 = <strong>24 cubes</strong>.`,
      marks: 2,
      rubric: [
        { key: "Dimensions division (4 × 3 × 2)", marks: "1 M" },
        { key: "Total: 24 cubes", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Juice Carton Content",
      q: "A juice pack is a rectangular cuboid measuring 10 cm × 6 cm × 15 cm. (a) What is its volume in cm³? (b) How many litres of juice does it contain (assuming full)?",
      ans: `<strong>Volume & Capacity:</strong><br>
• <strong>(a) Volume:</strong> 10 × 6 × 15 = <strong>900 cm³</strong>.<br>
• <strong>(b) Capacity in litres:</strong> 900 cm³ = 900 mL = 900 ÷ 1,000 = <strong>0.9 litres</strong>.`,
      marks: 2,
      rubric: [
        { key: "Volume: 900 cm³", marks: "1 M" },
        { key: "Capacity: 0.9 litres", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Doubling Cube Side (Volume Effect)",
      q: "A cube has side 2 cm. If its side is doubled to 4 cm: (a) Find original volume. (b) Find new volume. (c) By how many times does the volume increase?",
      ans: `<strong>Volume Scaling:</strong><br>
• <strong>(a) Original:</strong> 2 × 2 × 2 = <strong>8 cm³</strong>.<br>
• <strong>(b) New:</strong> 4 × 4 × 4 = <strong>64 cm³</strong>.<br>
• <strong>(c) Increase factor:</strong> 64 ÷ 8 = <strong>8 times larger</strong> (since 2³ = 8).`,
      marks: 3,
      rubric: [
        { key: "Original: 8 cm³", marks: "1 M" },
        { key: "New: 64 cm³", marks: "1 M" },
        { key: "Increases by 8 times", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Ice Cube Melting Volume",
      q: "An ice cube has side 3 cm. When melted, does water occupy more, less, or equal volume to ice? (Scientific note: Ice expands when frozen; 100 cm³ ice produces ~92 mL water).",
      ans: `<strong>Observation:</strong><br>
• Volume of ice cube = 3 × 3 × 3 = 27 cm³.<br>
• Water occupies slightly <strong>less volume</strong> than ice because water expands when freezing. When 27 cm³ of ice melts, it produces about <strong>25 mL of liquid water</strong>.`,
      marks: 2,
      rubric: [
        { key: "Volume calculation: 27 cm³", marks: "1 M" },
        { key: "Water occupies less volume explained", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Soil Dug from a Pit",
      q: "A pit 4 metres long, 3 metres wide, and 2 metres deep is dug in a field. How many cubic metres of earth (soil) were dug out?",
      ans: `<strong>Volume of Excavation:</strong><br>
• Volume of earth dug = Length × Width × Depth = 4 m × 3 m × 2 m = <strong>24 cubic metres (24 m³)</strong>.`,
      marks: 2,
      rubric: [
        { key: "Formula l × w × d", marks: "1 M" },
        { key: "Answer: 24 m³", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Difference between Weight and Volume",
      q: "Explain why 1 kg of cotton wool occupies a much larger volume (space) than 1 kg of iron, even though their weights are equal.",
      ans: `<strong>Density & Volume:</strong><br>
• Both have the exact same weight (1 kg).<br>
• However, iron is very dense with closely packed particles, so 1 kg fits in a small space.<br>
• Cotton is fluffy, porous, and contains a lot of trapped air, meaning its particles are loosely spread, so 1 kg occupies a huge physical space (large volume).`,
      marks: 2,
      rubric: [
        { key: "Equal mass/weight stated", marks: "1 M" },
        { key: "Density & particle spacing explained", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Weight of 100 One-Rupee Coins",
      q: "A 1-rupee coin weighs 4.85 grams. What is the total weight of 100 such 1-rupee coins in grams?",
      ans: `<strong>Multiplication:</strong><br>
• Total weight = 100 × 4.85 g = <strong>485 grams</strong>.`,
      marks: 2,
      rubric: [
        { key: "Multiplication 100 × 4.85", marks: "1 M" },
        { key: "Answer: 485 grams", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Swimming Pool Capacity",
      q: "A small rectangular children's pool is 10 m long, 5 m wide, and 1.2 m deep. What is the total volume of water needed to fill it to the brim in litres?",
      ans: `<strong>Volume and Litres:</strong><br>
• Volume = 10 × 5 × 1.2 = 60 cubic metres.<br>
• In litres = 60 × 1,000 litres = <strong>60,000 litres</strong>.`,
      marks: 3,
      rubric: [
        { key: "Volume: 60 m³", marks: "1.5 M" },
        { key: "Capacity: 60,000 litres", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Exercise • Brick Stacking Volume",
      q: "A standard construction brick measures 20 cm × 10 cm × 8 cm. Find the volume of a stack containing 500 such bricks in cubic metres.",
      ans: `<strong>Brick Stack Volume:</strong><br>
• Volume of 1 brick = 20 × 10 × 8 = 1,600 cm³.<br>
• Volume of 500 bricks = 500 × 1,600 = 800,000 cm³.<br>
• In cubic metres: 1 m³ = 1,000,000 cm³.<br>
• Volume = 800,000 ÷ 1,000,000 = <strong>0.8 m³</strong>.`,
      marks: 3,
      rubric: [
        { key: "1 brick: 1,600 cm³", marks: "1 M" },
        { key: "500 bricks: 800,000 cm³", marks: "1 M" },
        { key: "Converted to 0.8 m³", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Balance Scale Weighing",
      q: "On a two-pan balance scale, a watermelon on the left pan balances with: one 2 kg weight, one 500 g weight, and two 200 g weights on the right pan. What is the weight of the watermelon?",
      ans: `<strong>Weight Balance:</strong><br>
• 2 kg = 2,000 g.<br>
• Weights on right pan = 2,000 + 500 + 200 + 200 = <strong>2,900 grams (or 2 kg 900 g)</strong>.`,
      marks: 2,
      rubric: [
        { key: "Sum of weights on pan", marks: "1 M" },
        { key: "Watermelon weight: 2 kg 900 g", marks: "1 M" }
      ]
    },
    {
      category: "Textbook Exercise • Measuring Cylinder Meniscus",
      q: "When reading the liquid level in a measuring cylinder, why should your eye be level with the bottom of the curved water surface (meniscus)?",
      ans: `<strong>Accurate Measurement:</strong><br>
• Due to surface tension, water curves upwards slightly at the container edges, forming a concave curved surface called a meniscus.<br>
• Looking from above or below introduces parallax error. Keeping your eye directly level with the lowest point of the meniscus ensures an accurate and true volume reading.`,
      marks: 2,
      rubric: [
        { key: "Meniscus curvature explained", marks: "1 M" },
        { key: "Avoiding parallax error explained", marks: "1 M" }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { magicCh11_12_13_14 };
}
