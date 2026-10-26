// Official NCERT Class 5 Mathematics: "Maths Mela" - Chapters 3, 4, 5 Authentic Questions
// Aligned with NEP 2020 / NCF 2023 Curriculum & CBSE Marking Scheme 2026-27

const melaCh3_4_5 = {
  mela3: [
    {
      category: "Clock Angles • Concept & Types",
      q: "What type of angle (Acute, Right, Obtuse, or Straight) is formed between the hour hand and minute hand of a clock at the following times?<br>(a) 3:00<br>(b) 6:00<br>(c) 9:30<br>(d) 1:15",
      ans: `<strong>Clock Hand Angle Analysis:</strong> (Each hour mark = 360° ÷ 12 = 30°)<br>
• <strong>(a) 3:00:</strong> Hour at 3, minute at 12. Separation = 3 hours = 3 × 30° = <strong>90° (Right Angle)</strong>.<br>
• <strong>(b) 6:00:</strong> Hour at 6, minute at 12. Separation = 6 hours = 6 × 30° = <strong>180° (Straight Angle)</strong>.<br>
• <strong>(c) 9:30:</strong> Minute hand at 6, hour hand halfway between 9 and 10 (at 9.5). Distance = 3.5 marks = 3.5 × 30° = <strong>105° (Obtuse Angle)</strong>.<br>
• <strong>(d) 1:15:</strong> Minute hand at 3, hour hand slightly past 1. Distance ≈ 1.75 marks ≈ <strong>52.5° (Acute Angle)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 90° (Right angle)", marks: "0.75 M" },
        { key: "Part (b): 180° (Straight angle)", marks: "0.75 M" },
        { key: "Part (c): 105° (Obtuse angle)", marks: "0.75 M" },
        { key: "Part (d): 52.5° (Acute angle)", marks: "0.75 M" }
      ]
    },
    {
      category: "Turns & Directions • Compass Navigation",
      q: "A girl stands facing North.<br>(a) If she takes a 1/4 turn clockwise, which direction will she face?<br>(b) If she takes a 1/2 turn from North, which direction will she face?<br>(c) If she takes a 3/4 turn anticlockwise from North, which direction will she face?",
      ans: `<strong>Direction Analysis:</strong><br>
• <strong>(a) 1/4 Turn Clockwise:</strong> 90° turn to the right from North → <strong>East</strong>.<br>
• <strong>(b) 1/2 Turn:</strong> 180° turn (opposite direction) from North → <strong>South</strong>.<br>
• <strong>(c) 3/4 Turn Anticlockwise:</strong> 270° counter-clockwise: North → West (90°) → South (180°) → <strong>East (270°)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): East", marks: "1.0 M" },
        { key: "Part (b): South", marks: "1.0 M" },
        { key: "Part (c): East", marks: "1.0 M" }
      ]
    },
    {
      category: "Angles in Letters of the Alphabet",
      q: "Identify the type and count of angles formed by straight lines in the capital letter <strong>'H'</strong> and letter <strong>'E'</strong>.<br>(a) How many right angles are in 'H'?<br>(b) How many right angles are in 'E'?",
      ans: `<strong>Geometric Angle Count in Letters:</strong><br>
• <strong>(a) Letter 'H':</strong> The horizontal bar meets the two vertical uprights creating 2 interior right angles on the left and 2 on the right = <strong>4 right angles (all 90°)</strong>.<br>
• <strong>(b) Letter 'E':</strong> Three horizontal bars meet the vertical spine: top bar (1 right angle), middle bar (2 right angles above and below), bottom bar (1 right angle) = <strong>4 right angles (all 90°)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Letter H: 4 right angles", marks: "1.5 M" },
        { key: "Letter E: 4 right angles", marks: "1.5 M" }
      ]
    },
    {
      category: "Angle Tester • In-Text Activity",
      q: "Explain how you can make a simple 'Angle Tester' using two strips of cardboard and a drawing pin. How do you test whether the corner of a textbook is a right angle?",
      ans: `<strong>Cardboard Angle Tester:</strong><br>
1. <strong>Construction:</strong> Cut two equal strips of stiff cardboard (about 15 cm long). Fasten them together at one end using a drawing pin or split paper pin so they can pivot freely.<br>
2. <strong>Testing a Textbook Corner:</strong><br>
• Open the two arms so that one arm lies along the bottom edge and the other arm lies along the side edge of the textbook.<br>
• If the arms open to form an 'L' shape matching the corner perfectly without any gap or overlap, the corner is exactly a <strong>Right Angle (90°)</strong>.<br>
• If the corner opens less than the 'L' shape, it is an <strong>Acute Angle</strong>. If more, it is an <strong>Obtuse Angle</strong>.`,
      marks: 3,
      rubric: [
        { key: "Correct steps of construction with pivot pin", marks: "1.5 M" },
        { key: "Clear testing procedure matching 'L' shape (90°)", marks: "1.5 M" }
      ]
    },
    {
      category: "Angles in Yoga Asanas • Real-Life Geometry",
      q: "In various yoga postures (asanas), the body forms different angles:<br>(a) In 'Dandasana' (Staff Pose), where a person sits upright on the floor with legs extended forward, what angle is formed between the spine and the legs?<br>(b) In 'Bhujangasana' (Cobra Pose), what type of angle does the backward-curving upper torso make relative to the floor?<br>(c) When touching toes in 'Uttanasana', what type of angle is formed at the hips?",
      ans: `<strong>Yoga Asana Angle Identification:</strong><br>
• <strong>(a) Dandasana:</strong> The spine is vertical (90°) to the horizontal legs lying flat on the mat. Angle = <strong>Right Angle (90°)</strong>.<br>
• <strong>(b) Bhujangasana:</strong> The chest and head lift upward and backward away from the floor, opening past 90°. Angle = <strong>Obtuse Angle (greater than 90°)</strong>.<br>
• <strong>(c) Uttanasana:</strong> The upper body folds deeply forward against the legs. The angle at the hip joint is significantly less than 90°. Angle = <strong>Acute Angle (less than 90°)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Dandasana: Right Angle (90°)", marks: "1.0 M" },
        { key: "Bhujangasana: Obtuse Angle", marks: "1.0 M" },
        { key: "Uttanasana: Acute Angle", marks: "1.0 M" }
      ]
    },
    {
      category: "Degrees & Fractions of a Turn",
      q: "A full turn around a complete circle is 360°.<br>(a) How many degrees are in a 1/4 turn?<br>(b) How many degrees are in a 1/2 turn?<br>(c) How many degrees are in a 3/4 turn?<br>(d) How many degrees are in a 1/8 turn?",
      ans: `<strong>Degree Computations (Full Turn = 360°):</strong><br>
• <strong>(a) 1/4 Turn:</strong> 360° ÷ 4 = <strong>90° (Right angle)</strong>.<br>
• <strong>(b) 1/2 Turn:</strong> 360° ÷ 2 = <strong>180° (Straight angle)</strong>.<br>
• <strong>(c) 3/4 Turn:</strong> (360° ÷ 4) × 3 = 90° × 3 = <strong>270° (Reflex angle)</strong>.<br>
• <strong>(d) 1/8 Turn:</strong> 360° ÷ 8 = <strong>45° (Half of a right angle)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 90°", marks: "0.75 M" },
        { key: "Part (b): 180°", marks: "0.75 M" },
        { key: "Part (c): 270°", marks: "0.75 M" },
        { key: "Part (d): 45°", marks: "0.75 M" }
      ]
    },
    {
      category: "Angles in Names • Comprehensive Count",
      q: "Write the name <strong>'RAMAN'</strong> in straight capital block letters. Count:<br>(a) The total number of right angles.<br>(b) The total number of acute angles (less than 90°).<br>(c) The total number of obtuse angles (greater than 90°).",
      ans: `<strong>Analyzing Letters in 'RAMAN':</strong><br>
• <strong>R:</strong> Upright and top loop has 2 right angles.<br>
• <strong>A:</strong> 3 acute angles (1 apex + 2 at crossbar base), 2 obtuse angles (inside crossbar junction).<br>
• <strong>M:</strong> 3 acute angles (1 central valley + 2 outer peaks).<br>
• <strong>A:</strong> 3 acute angles, 2 obtuse angles.<br>
• <strong>N:</strong> 2 acute angles (top and bottom corners).<br>
<strong>Summary Count:</strong><br>
• <strong>(a) Right Angles:</strong> <strong>2</strong>.<br>
• <strong>(b) Acute Angles:</strong> 3 + 3 + 3 + 2 = <strong>11</strong>.<br>
• <strong>(c) Obtuse Angles:</strong> 2 + 2 = <strong>4</strong>.`,
      marks: 3,
      rubric: [
        { key: "Right angles = 2", marks: "1.0 M" },
        { key: "Acute angles = 11", marks: "1.0 M" },
        { key: "Obtuse angles = 4", marks: "1.0 M" }
      ]
    },
    {
      category: "Protractor Reading • Measuring Angles",
      q: "Explain how to place a protractor on a drawn angle $\\angle ABC$ with vertex at $B$ to measure its size accurately. Mention the baseline and centre point.",
      ans: `<strong>Protractor Alignment Steps:</strong><br>
1. Place the <strong>centre point (cross-mark)</strong> of the protractor directly over the vertex point $B$ of the angle.<br>
2. Align the <strong>baseline</strong> of the protractor precisely along ray $BC$ so that the $0^\\circ$ mark lies directly on line $BC$.<br>
3. Look at the second ray $BA$. Follow the scale starting from $0^\\circ$ on the baseline to where ray $BA$ passes through the curved scale.<br>
4. Read the degree value on that scale. That number gives the exact measurement of $\\angle ABC$ in degrees.`,
      marks: 3,
      rubric: [
        { key: "Centre point on vertex B", marks: "1.0 M" },
        { key: "Baseline aligned with ray BC at 0°", marks: "1.0 M" },
        { key: "Reading scale along ray BA", marks: "1.0 M" }
      ]
    },
    {
      category: "Acute, Right, Obtuse Classification",
      q: "Classify each of the following angle measurements as Acute, Right, Obtuse, or Straight:<br>(a) 35°<br>(b) 90°<br>(c) 128°<br>(d) 89°<br>(e) 180°<br>(f) 92°",
      ans: `<strong>Classification:</strong><br>
• <strong>(a) 35°:</strong> Less than 90° → <strong>Acute Angle</strong>.<br>
• <strong>(b) 90°:</strong> Exactly 90° → <strong>Right Angle</strong>.<br>
• <strong>(c) 128°:</strong> Between 90° and 180° → <strong>Obtuse Angle</strong>.<br>
• <strong>(d) 89°:</strong> Less than 90° → <strong>Acute Angle</strong>.<br>
• <strong>(e) 180°:</strong> Exactly 180° → <strong>Straight Angle</strong>.<br>
• <strong>(f) 92°:</strong> Greater than 90° → <strong>Obtuse Angle</strong>.`,
      marks: 3,
      rubric: [
        { key: "Parts (a), (b), (c)", marks: "1.5 M" },
        { key: "Parts (d), (e), (f)", marks: "1.5 M" }
      ]
    },
    {
      category: "Carrom Board Angles • Rebound Trajectory",
      q: "When playing carrom, a striker hits the cushion board at an angle of 45° with the border edge.<br>(a) What type of angle is 45°?<br>(b) At what angle will the striker rebound off the cushion (assuming ideal bounce)?<br>(c) What is the total angle of deviation between the incoming path and outgoing path?",
      ans: `<strong>Billiards / Carrom Angle Geometry:</strong><br>
• <strong>(a) Angle Type:</strong> 45° is less than 90°, so it is an <strong>Acute Angle</strong> (half of a right angle).<br>
• <strong>(b) Rebound Angle:</strong> By the law of reflection, angle of reflection equals angle of incidence: Rebound angle = <strong>45° with the cushion border</strong>.<br>
• <strong>(c) Angle of Deviation:</strong> The straight line path (180°) minus the sum of two cushion angles (45° + 45° = 90°) gives a deflection of 180° - 90° = <strong>90° (a right-angle turn)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): Acute angle", marks: "1.0 M" },
        { key: "Part (b): 45° rebound", marks: "1.0 M" },
        { key: "Part (c): 90° right-angle turn", marks: "1.0 M" }
      ]
    },
    {
      category: "Angles in Everyday Tools • Scissors & Compass",
      q: "(a) What happens to the angle between the two blades of a pair of scissors when you open them wider? Does it increase or decrease?<br>(b) A pair of scissors is opened to an angle of 30°. If it is opened by another 60°, what type of angle is formed?",
      ans: `<strong>Angle Variation in Hinged Tools:</strong><br>
• <strong>(a) Blade Opening:</strong> When scissors are opened wider, the angle between the blades <strong>increases</strong> in degree measure.<br>
• <strong>(b) Combined Angle:</strong> Initial angle = 30°. Additional opening = 60°. Total angle = 30° + 60° = <strong>90°</strong>. This forms an exact <strong>Right Angle</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): Angle increases", marks: "1.5 M" },
        { key: "Part (b): 30° + 60° = 90° (Right angle)", marks: "1.5 M" }
      ]
    },
    {
      category: "Complementary Angles • In-Text Practice",
      q: "Two angles are complementary if their sum is 90°.<br>(a) Find the complement of 35°.<br>(b) Find the complement of 60°.<br>(c) Can two obtuse angles ever be complementary? Explain.",
      ans: `<strong>Complementary Angle Calculations:</strong><br>
• <strong>(a) Complement of 35°:</strong> 90° - 35° = <strong>55°</strong>.<br>
• <strong>(b) Complement of 60°:</strong> 90° - 60° = <strong>30°</strong>.<br>
• <strong>(c) Two Obtuse Angles:</strong> <strong>No</strong>. An obtuse angle is greater than 90°. The sum of two obtuse angles will always exceed 180°, so their sum can never be 90°.`,
      marks: 3,
      rubric: [
        { key: "Complement of 35° = 55°", marks: "1.0 M" },
        { key: "Complement of 60° = 30°", marks: "1.0 M" },
        { key: "Logical explanation for obtuse angles", marks: "1.0 M" }
      ]
    },
    {
      category: "Supplementary Angles • Straight Line",
      q: "Angles on a straight line add up to 180° (supplementary angles).<br>(a) If one angle is 115°, find the measure of the adjacent angle on the straight line.<br>(b) If two supplementary angles are equal, find the measure of each angle.",
      ans: `<strong>Supplementary Calculations:</strong><br>
• <strong>(a) Adjacent Angle:</strong> 180° - 115° = <strong>65°</strong>.<br>
• <strong>(b) Two Equal Angles:</strong> Let each angle be $x$. Then $x + x = 180° \\rightarrow 2x = 180° \\rightarrow x = 180° ÷ 2 = \\mathbf{90°}$ (both are Right Angles).`,
      marks: 3,
      rubric: [
        { key: "Part (a): 65°", marks: "1.5 M" },
        { key: "Part (b): 90° each", marks: "1.5 M" }
      ]
    },
    {
      category: "Angles in Regular Polygons • Shape Analysis",
      q: "(a) What is the measure of each interior angle in an equilateral triangle?<br>(b) What is the measure of each interior angle in a square?<br>(c) Are all angles in a regular hexagon acute or obtuse? Explain.",
      ans: `<strong>Interior Angles of Polygons:</strong><br>
• <strong>(a) Equilateral Triangle:</strong> Sum of 3 angles = 180°. Each angle = 180° ÷ 3 = <strong>60° (Acute)</strong>.<br>
• <strong>(b) Square:</strong> Sum of 4 angles = 360°. Each angle = 360° ÷ 4 = <strong>90° (Right angle)</strong>.<br>
• <strong>(c) Regular Hexagon:</strong> Each interior angle = <strong>120°</strong>. Since 120° > 90°, all angles in a regular hexagon are <strong>Obtuse Angles</strong>.`,
      marks: 3,
      rubric: [
        { key: "Equilateral triangle = 60°", marks: "1.0 M" },
        { key: "Square = 90°", marks: "1.0 M" },
        { key: "Hexagon = 120° (Obtuse)", marks: "1.0 M" }
      ]
    },
    {
      category: "Clock Problem • Minute Hand Rotation",
      q: "Through how many degrees does the minute hand of a clock rotate in:<br>(a) 15 minutes<br>(b) 30 minutes<br>(c) 45 minutes<br>(d) 10 minutes",
      ans: `<strong>Minute Hand Speed:</strong> 60 minutes = 360°, so 1 minute = 360° ÷ 60 = 6° per minute.<br>
• <strong>(a) 15 Minutes:</strong> 15 × 6° = <strong>90° (1/4 turn)</strong>.<br>
• <strong>(b) 30 Minutes:</strong> 30 × 6° = <strong>180° (1/2 turn)</strong>.<br>
• <strong>(c) 45 Minutes:</strong> 45 × 6° = <strong>270° (3/4 turn)</strong>.<br>
• <strong>(d) 10 Minutes:</strong> 10 × 6° = <strong>60° (1/6 turn)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Rate: 6° per minute", marks: "1.0 M" },
        { key: "15 min (90°), 30 min (180°)", marks: "1.0 M" },
        { key: "45 min (270°), 10 min (60°)", marks: "1.0 M" }
      ]
    },
    {
      category: "Angles in Open vs Closed Shapes",
      q: "Explain why three straight line segments can only form a closed shape if they form 3 interior angles adding to 180°. Can you make a closed polygon with only 2 straight sticks? Explain.",
      ans: `<strong>Polygon Properties:</strong><br>
1. <strong>Triangle Closure:</strong> Three line segments meet at 3 vertices to enclose a 2D space. The sum of the 3 interior angles formed must strictly equal 180° for the triangle to close.<br>
2. <strong>Two Sticks:</strong> <strong>No</strong>, it is impossible to create a closed polygon with only two straight sticks. Two line segments meeting at an angle leave an open mouth between their other endpoints; a minimum of 3 sides (a triangle) is mathematically required to enclose an area on a plane.`,
      marks: 3,
      rubric: [
        { key: "Triangle interior sum = 180°", marks: "1.5 M" },
        { key: "Cannot enclose space with 2 line segments (minimum 3 sides)", marks: "1.5 M" }
      ]
    },
    {
      category: "Degree Clock • Activity",
      q: "In an activity, students create a circular 'Degree Clock' with markings at 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°, and 360°.<br>(a) How many equal sectors is the circle divided into?<br>(b) What is the angle between any two adjacent markings?",
      ans: `<strong>Degree Clock Geometry:</strong><br>
• <strong>(a) Number of Sectors:</strong> 360° ÷ 45° = <strong>8 equal sectors</strong>.<br>
• <strong>(b) Angle between Markings:</strong> Each step from one mark to the next is exactly <strong>45°</strong>.`,
      marks: 3,
      rubric: [
        { key: "8 equal sectors", marks: "1.5 M" },
        { key: "Angle = 45°", marks: "1.5 M" }
      ]
    },
    {
      category: "Angles in Architectural Bridges",
      q: "Why do railway steel bridges and construction cranes use triangular frameworks (trusses) with acute angles rather than rectangular frameworks? Give a mathematical reason.",
      ans: `<strong>Geometric Rigidity of Triangles:</strong><br>
• In a quadrilateral or rectangle, the 4 sides can deform or shift into a parallelogram under heavy load without changing the lengths of the sides because angles can change freely.<br>
• In contrast, a <strong>triangle is a rigid shape</strong>: once the lengths of the 3 sides are fixed, the 3 angles cannot change unless a side bends or breaks.<br>
• Therefore, triangular structures with strong acute angles distribute heavy loads safely and do not deform under stress.`,
      marks: 3,
      rubric: [
        { key: "Quadrilaterals deform easily under load", marks: "1.5 M" },
        { key: "Triangles have rigid, unchanging angles providing structural stability", marks: "1.5 M" }
      ]
    },
    {
      category: "HOTS • Angle Riddle",
      q: "I am an angle. If you add 25° to me, I become a right angle. What angle am I? What type of angle am I?",
      ans: `<strong>Working:</strong><br>
1. Let the angle be $A$.<br>
2. Condition: $A + 25° = 90°$ (Right angle).<br>
3. $A = 90° - 25° = \\mathbf{65°}$.<br>
4. Since 65° is less than 90°, it is an <strong>Acute Angle</strong>.`,
      marks: 3,
      rubric: [
        { key: "Equation: A + 25° = 90°", marks: "1.5 M" },
        { key: "A = 65° (Acute Angle)", marks: "1.5 M" }
      ]
    },
    {
      category: "Hour Hand Rotation Problem",
      q: "Through how many degrees does the hour hand of a clock move between 2:00 PM and 5:00 PM?",
      ans: `<strong>Hour Hand Movement:</strong><br>
• Time elapsed = 5:00 - 2:00 = 3 hours.<br>
• In 12 hours, the hour hand moves 360°, so in 1 hour it moves 360° ÷ 12 = 30°.<br>
• In 3 hours: 3 × 30° = <strong>90° (a quarter turn / Right Angle)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Elapsed time = 3 hours", marks: "1.0 M" },
        { key: "Rate: 30° per hour", marks: "1.0 M" },
        { key: "Total rotation = 90°", marks: "1.0 M" }
      ]
    },
    {
      category: "Angles in Paper Folding • Origami",
      q: "Fold a square piece of paper along its diagonal corner to corner.<br>(a) What two shapes are formed?<br>(b) What are the angles of the triangles formed?",
      ans: `<strong>Origami Geometry:</strong><br>
• <strong>(a) Shapes Formed:</strong> Folding along the diagonal divides the square into <strong>two identical right-angled isosceles triangles</strong>.<br>
• <strong>(b) Angles of the Triangles:</strong><br>
- The original corner of the square remains a <strong>90° right angle</strong>.<br>
- The diagonal bisects the two other 90° corners into two equal halves: 90° ÷ 2 = <strong>45° each</strong>.<br>
- Therefore, the angles of each triangle are <strong>45°, 45°, and 90°</strong>.`,
      marks: 3,
      rubric: [
        { key: "Two right-angled isosceles triangles", marks: "1.5 M" },
        { key: "Angles: 45°, 45°, 90°", marks: "1.5 M" }
      ]
    },
    {
      category: "Reflex Angles • Introduction",
      q: "(a) What is a reflex angle?<br>(b) If the interior angle of a corner is 70°, what is the measure of the reflex angle on the exterior?<br>(c) What time on a clock shows an angle of 240° between the hands?",
      ans: `<strong>Reflex Angles:</strong><br>
• <strong>(a) Definition:</strong> An angle that is <strong>greater than 180° but less than 360°</strong> is called a reflex angle.<br>
• <strong>(b) Exterior Reflex Angle:</strong> Complete circle = 360°. Reflex angle = 360° - 70° = <strong>290°</strong>.<br>
• <strong>(c) Clock Hands:</strong> 240° = 8 hour divisions (8 × 30° = 240°). At <strong>8:00</strong>, the angle measured clockwise from the hour hand (at 8) to the minute hand (at 12) is 4 × 30° = 120°, and the major angle on the other side is 360° - 120° = <strong>240°</strong>.`,
      marks: 3,
      rubric: [
        { key: "Definition: between 180° and 360°", marks: "1.0 M" },
        { key: "Exterior reflex = 290°", marks: "1.0 M" },
        { key: "8:00 clock example", marks: "1.0 M" }
      ]
    },
    {
      category: "True or False with Geometric Reason",
      q: "State True or False with reasoning:<br>(a) An angle measuring 90.5° is an acute angle.<br>(b) Two acute angles added together can sometimes form an obtuse angle.<br>(c) A straight line always represents an angle of 180°.",
      ans: `<strong>Justifications:</strong><br>
• <strong>(a) False:</strong> 90.5° is greater than 90°, so it is an <strong>Obtuse Angle</strong>, not acute.<br>
• <strong>(b) True:</strong> For example, 50° + 60° = 110°. Since 110° > 90°, the sum of two acute angles can indeed be obtuse.<br>
• <strong>(c) True:</strong> A straight angle formed by two opposite rays is defined as exactly <strong>180°</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): False with explanation", marks: "1.0 M" },
        { key: "Part (b): True with counter-example (e.g. 50+60=110)", marks: "1.0 M" },
        { key: "Part (c): True with 180° definition", marks: "1.0 M" }
      ]
    },
    {
      category: "Comprehensive Review • Chapter Mastery",
      q: "A student stands on a circular turntable facing East. He rotates 45° clockwise, then 180° anticlockwise, and finally 90° clockwise. Which direction is he facing now? Show your angle calculations.",
      ans: `<strong>Net Angle Calculation:</strong><br>
1. Start direction = <strong>East (90° from North)</strong>.<br>
2. Turn 1 (Clockwise): +45° → Position = South-East.<br>
3. Turn 2 (Anticlockwise): -180° → Position = North-West.<br>
4. Turn 3 (Clockwise): +90° → Position = North-East.<br>
<strong>Mathematical Check:</strong><br>
Net turn = +45° - 180° + 90° = -45° (i.e. 45° anticlockwise from East).<br>
45° anticlockwise from East points directly to <strong>North-East</strong>.`,
      marks: 3,
      rubric: [
        { key: "Tracking individual turns (+45, -180, +90)", marks: "1.5 M" },
        { key: "Net result = 45° anticlockwise from East → North-East", marks: "1.5 M" }
      ]
    }
  ],

  mela4: [
    {
      category: "Travel Budget • Hotel Package Comparison",
      q: "A hotel offers two package options for a 3-night stay for a family of 4:<br>• Package A: Flat rate of ₹2,800 per night including breakfast.<br>• Package B: Room rent of ₹2,200 per night plus ₹250 per person per day for breakfast.<br>(a) Calculate the total cost for Package A.<br>(b) Calculate the total cost for Package B.<br>(c) Which package is more economical, and by how much?",
      ans: `<strong>Calculations (Duration = 3 nights, 4 persons):</strong><br>
• <strong>(a) Package A Total:</strong> 3 nights × ₹2,800 = <strong>₹8,400</strong>.<br>
• <strong>(b) Package B Total:</strong><br>
- Room rent: 3 × ₹2,200 = ₹6,600.<br>
- Breakfast cost: 4 persons × ₹250 × 3 days = ₹3,000.<br>
- Total = ₹6,600 + ₹3,000 = <strong>₹9,600</strong>.<br>
• <strong>(c) Comparison:</strong> Package A is cheaper. Difference = ₹9,600 - ₹8,400 = <strong>₹1,200</strong>. <strong>Package A saves ₹1,200</strong>.`,
      marks: 3,
      rubric: [
        { key: "Package A = ₹8,400", marks: "1.0 M" },
        { key: "Package B = ₹9,600", marks: "1.0 M" },
        { key: "Package A saves ₹1,200", marks: "1.0 M" }
      ]
    },
    {
      category: "Excursion Expenses • Per-Student Share",
      q: "A school excursion of 45 students incurs expenses:<br>• Bus rental: ₹14,500<br>• Entry tickets: ₹90 per student<br>• Packed meals: ₹150 per student<br>• Guide charges: ₹1,500<br>(a) Find the grand total expenditure for the trip.<br>(b) Calculate the contribution amount required from each student to cover all costs exactly.",
      ans: `<strong>Expense Calculations (45 Students):</strong><br>
• Bus rental = ₹14,500<br>
• Entry tickets = 45 × ₹90 = ₹4,050<br>
• Packed meals = 45 × ₹150 = ₹6,750<br>
• Guide charges = ₹1,500<br>
• <strong>(a) Grand Total:</strong> ₹14,500 + ₹4,050 + ₹6,750 + ₹1,500 = <strong>₹26,800</strong>.<br>
• <strong>(b) Per Student Share:</strong> ₹26,800 ÷ 45 = ₹595.55 ≈ <strong>₹596 per student</strong>.`,
      marks: 3,
      rubric: [
        { key: "Itemized totals (Tickets ₹4,050, Meals ₹6,750)", marks: "1.0 M" },
        { key: "Grand total = ₹26,800", marks: "1.0 M" },
        { key: "Per student share = ₹596", marks: "1.0 M" }
      ]
    },
    {
      category: "Fuel Consumption & Cost",
      q: "A family car consumes 1 litre of petrol for every 15 km traveled. They plan a road trip of 1,080 km.<br>(a) How many litres of petrol are required for the round trip?<br>(b) If petrol costs ₹96 per litre, what is their total expenditure on fuel?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Petrol Needed:</strong> Total distance ÷ Mileage = 1,080 ÷ 15 = <strong>72 litres</strong>.<br>
• <strong>(b) Fuel Cost:</strong> 72 litres × ₹96 = <strong>₹6,912</strong>.`,
      marks: 3,
      rubric: [
        { key: "Petrol needed = 72 L", marks: "1.5 M" },
        { key: "Total fuel cost = ₹6,912", marks: "1.5 M" }
      ]
    },
    {
      category: "Bus vs Train Travel Cost",
      q: "A tour group of 28 persons travels from Delhi to Agra (240 km).<br>• Option 1: AC Bus charter costs a flat ₹11,200.<br>• Option 2: Train tickets cost ₹385 per person.<br>(a) Calculate the cost for all 28 people traveling by train.<br>(b) Which option is more cost-effective and by how much?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Train Cost:</strong> 28 × ₹385 = <strong>₹10,780</strong>.<br>
• <strong>(b) Comparison:</strong><br>
- Bus = ₹11,200<br>
- Train = ₹10,780<br>
- Difference = ₹11,200 - ₹10,780 = <strong>₹420</strong>.<br>
<strong>Traveling by train is more economical by ₹420</strong>.`,
      marks: 3,
      rubric: [
        { key: "Train cost = ₹10,780", marks: "1.5 M" },
        { key: "Train is cheaper by ₹420", marks: "1.5 M" }
      ]
    },
    {
      category: "Unitary Method • Meal Charges",
      q: "A highway restaurant charges ₹480 for 4 thalis.<br>(a) What is the cost of 1 thali?<br>(b) What will be the total bill for 9 thalis?<br>(c) How many thalis can be purchased for ₹1,200?",
      ans: `<strong>Unitary Method Steps:</strong><br>
• <strong>(a) Cost of 1 Thali:</strong> ₹480 ÷ 4 = <strong>₹120</strong>.<br>
• <strong>(b) Cost of 9 Thalis:</strong> 9 × ₹120 = <strong>₹1,080</strong>.<br>
• <strong>(c) Thalis for ₹1,200:</strong> ₹1,200 ÷ ₹120 = <strong>10 thalis</strong>.`,
      marks: 3,
      rubric: [
        { key: "Cost of 1 thali = ₹120", marks: "1.0 M" },
        { key: "Cost of 9 thalis = ₹1,080", marks: "1.0 M" },
        { key: "10 thalis for ₹1,200", marks: "1.0 M" }
      ]
    },
    {
      category: "Time-Speed-Distance • Multi-Stop Journey",
      q: "A luxury bus leaves Jaipur at 6:00 AM. It travels at 60 km/h for 3 hours, stops for 45 minutes for breakfast, and then travels the remaining 140 km at 70 km/h.<br>(a) What is the total distance of the trip?<br>(b) What was the travel time spent driving?<br>(c) At what time does the bus reach its destination?",
      ans: `<strong>Step-by-Step Schedule:</strong><br>
• <strong>(a) Distance:</strong> First leg = 3 h × 60 km/h = 180 km. Second leg = 140 km. Total distance = 180 + 140 = <strong>320 km</strong>.<br>
• <strong>(b) Driving Time:</strong> First leg = 3 hours. Second leg = 140 ÷ 70 = 2 hours. Total driving time = 3 + 2 = <strong>5 hours</strong>.<br>
• <strong>(c) Arrival Time:</strong><br>
- Total elapsed time = 5 hours driving + 45 min breakfast = 5 hours 45 minutes.<br>
- 6:00 AM + 5 h 45 min = <strong>11:45 AM</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total distance = 320 km", marks: "1.0 M" },
        { key: "Driving time = 5 hours", marks: "1.0 M" },
        { key: "Arrival time = 11:45 AM", marks: "1.0 M" }
      ]
    },
    {
      category: "Group Travel Billing • GST Calculation",
      q: "A travel agency bills ₹35,000 for a houseboat package in Kashmir. A government Goods and Services Tax (GST) of 5% is added to the bill.<br>(a) Find the GST amount in Rupees.<br>(b) What is the final total payable amount?",
      ans: `<strong>Percentage Calculation:</strong><br>
• <strong>(a) GST Amount:</strong> 5% of ₹35,000 = (5 ÷ 100) × 35,000 = 5 × 350 = <strong>₹1,750</strong>.<br>
• <strong>(b) Final Total:</strong> ₹35,000 + ₹1,750 = <strong>₹36,750</strong>.`,
      marks: 3,
      rubric: [
        { key: "GST = ₹1,750", marks: "1.5 M" },
        { key: "Final bill = ₹36,750", marks: "1.5 M" }
      ]
    },
    {
      category: "Souvenir Shopping • Currency Exchange",
      q: "A foreign tourist changes 150 US Dollars at an exchange counter. The exchange rate is 1 USD = ₹82.<br>(a) How many Indian Rupees does the tourist receive?<br>(b) He buys 3 wooden handicrafts costing ₹2,400 each and 2 silk shawls costing ₹1,800 each. How much money does he spend?<br>(c) How many Indian Rupees does he have left?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Rupees Received:</strong> 150 × ₹82 = <strong>₹12,300</strong>.<br>
• <strong>(b) Total Spent:</strong><br>
- 3 handicrafts: 3 × ₹2,400 = ₹7,200.<br>
- 2 shawls: 2 × ₹1,800 = ₹3,600.<br>
- Total spent = ₹7,200 + ₹3,600 = <strong>₹10,800</strong>.<br>
• <strong>(c) Balance:</strong> ₹12,300 - ₹10,800 = <strong>₹1,500</strong>.`,
      marks: 3,
      rubric: [
        { key: "Converted rupees = ₹12,300", marks: "1.0 M" },
        { key: "Total expenditure = ₹10,800", marks: "1.0 M" },
        { key: "Balance = ₹1,500", marks: "1.0 M" }
      ]
    },
    {
      category: "Luggage Allowance • Excess Baggage",
      q: "An airline allows each passenger 15 kg of free check-in luggage. Extra baggage is charged at ₹350 per kg.<br>(a) Mr. Verma's suitcase weighs 22 kg. How many kg is he overweight?<br>(b) How much extra baggage fee must he pay?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Excess Weight:</strong> 22 kg - 15 kg = <strong>7 kg excess</strong>.<br>
• <strong>(b) Excess Fee:</strong> 7 kg × ₹350 = <strong>₹2,450</strong>.`,
      marks: 3,
      rubric: [
        { key: "Excess weight = 7 kg", marks: "1.5 M" },
        { key: "Extra fee = ₹2,450", marks: "1.5 M" }
      ]
    },
    {
      category: "Multiplication by Multiples of 10",
      q: "Calculate quickly using mental math rules:<br>(a) 45 × 200<br>(b) 60 × 700<br>(c) 1,500 × 40",
      ans: `<strong>Mental Calculations:</strong><br>
• <strong>(a) 45 × 200:</strong> 45 × 2 = 90, append two zeros → <strong>9,000</strong>.<br>
• <strong>(b) 60 × 700:</strong> 6 × 7 = 42, append three zeros → <strong>42,000</strong>.<br>
• <strong>(c) 1,500 × 40:</strong> 15 × 4 = 60, append three zeros → <strong>60,000</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 9,000", marks: "1.0 M" },
        { key: "Part (b): 42,000", marks: "1.0 M" },
        { key: "Part (c): 60,000", marks: "1.0 M" }
      ]
    },
    {
      category: "Ropeway Cable Car Fare • Adult & Child",
      q: "A mountain ropeway charges ₹220 for an adult round trip and ₹140 for a child under 12 years.<br>(a) What is the total ropeway cost for a family of 3 adults and 2 children?<br>(b) If they pay with a ₹2,000 note, how much change is returned?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Total Cost:</strong><br>
- Adults: 3 × ₹220 = ₹660.<br>
- Children: 2 × ₹140 = ₹280.<br>
- Total = ₹660 + ₹280 = <strong>₹940</strong>.<br>
• <strong>(b) Change:</strong> ₹2,000 - ₹940 = <strong>₹1,060</strong>.`,
      marks: 3,
      rubric: [
        { key: "Adults ₹660, Children ₹280", marks: "1.0 M" },
        { key: "Total ₹940", marks: "1.0 M" },
        { key: "Change ₹1,060", marks: "1.0 M" }
      ]
    },
    {
      category: "Estimation of Travel Expenses",
      q: "Estimate the total cost by rounding each item to the nearest hundred:<br>• Petrol: ₹3,240<br>• Food: ₹1,890<br>• Toll tax: ₹460<br>• Sightseeing tickets: ₹1,120",
      ans: `<strong>Rounding to Nearest 100:</strong><br>
• Petrol: ₹3,240 rounds to <strong>₹3,200</strong>.<br>
• Food: ₹1,890 rounds to <strong>₹1,900</strong>.<br>
• Toll tax: ₹460 rounds to <strong>₹500</strong>.<br>
• Sightseeing tickets: ₹1,120 rounds to <strong>₹1,100</strong>.<br>
• <strong>Estimated Total:</strong> ₹3,200 + ₹1,900 + ₹500 + ₹1,100 = <strong>₹6,700</strong>.<br>
<em>(Exact sum = ₹6,710; difference is only ₹10).</em>`,
      marks: 3,
      rubric: [
        { key: "Correct individual rounding", marks: "1.5 M" },
        { key: "Estimated sum = ₹6,700", marks: "1.5 M" }
      ]
    },
    {
      category: "Speed & Time Variation • Traffic Delay",
      q: "Normally, a taxi takes 2 hours to travel 120 km from the airport to the city centre. Due to heavy rain and traffic, the speed drops to 40 km/h.<br>(a) What was the normal speed of the taxi?<br>(b) How long does the journey take in the rain?<br>(c) How much extra time was lost in traffic?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Normal Speed:</strong> 120 km ÷ 2 h = <strong>60 km/h</strong>.<br>
• <strong>(b) Rainy Journey Time:</strong> 120 km ÷ 40 km/h = <strong>3 hours</strong>.<br>
• <strong>(c) Extra Time Lost:</strong> 3 hours - 2 hours = <strong>1 hour (60 minutes)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Normal speed = 60 km/h", marks: "1.0 M" },
        { key: "Rainy time = 3 hours", marks: "1.0 M" },
        { key: "Time lost = 1 hour", marks: "1.0 M" }
      ]
    },
    {
      category: "Multi-Family Travel Split",
      q: "Three families rent a vacation villa for 4 days at ₹6,500 per day. They share the accommodation cost equally.<br>(a) Find the total rent of the villa for 4 days.<br>(b) What is the share of each family?<br>(c) If Family 1 checks out one day early (staying 3 days), how should the total bill be divided fairly among the 3 families based on room-days?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Total Rent:</strong> 4 days × ₹6,500 = <strong>₹26,000</strong>.<br>
• <strong>(b) Equal Share (All 4 days):</strong> ₹26,000 ÷ 3 = <strong>₹8,666.67 per family</strong>.<br>
• <strong>(c) Fair Room-Days Division:</strong><br>
- Total family-days = 3 + 4 + 4 = 11 family-days.<br>
- Cost per family-day = ₹26,000 ÷ 11 = ₹2,363.64.<br>
- Family 1 (3 days) pays: 3 × ₹2,363.64 = <strong>₹7,091</strong>.<br>
- Family 2 & 3 (4 days each) pay: 4 × ₹2,363.64 = <strong>₹9,454.50 each</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total rent = ₹26,000", marks: "1.0 M" },
        { key: "Equal share = ₹8,667", marks: "1.0 M" },
        { key: "Weighted room-days split", marks: "1.0 M" }
      ]
    },
    {
      category: "Train Berth Allotment • Logic",
      q: "In an Indian Railways sleeper coach, berths are numbered 1 to 72. Lower berths are 1, 4, 9, 12, 17, 20... (numbers leaving remainders 1 or 4 when divided by 8).<br>(a) What type of berth is Berth 25?<br>(b) What type of berth is Berth 32?",
      ans: `<strong>Berth Pattern in 8-berth Compartment:</strong><br>
• 1: Lower, 2: Middle, 3: Upper, 4: Lower, 5: Middle, 6: Upper, 7: Side Lower, 8: Side Upper.<br>
• <strong>(a) Berth 25:</strong> 25 ÷ 8 gives remainder 1. Remainder 1 corresponds to a <strong>Lower Berth</strong>.<br>
• <strong>(b) Berth 32:</strong> 32 ÷ 8 gives remainder 0 (exact multiple of 8). This corresponds to a <strong>Side Upper Berth (SU)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Berth pattern rule stated (modulo 8)", marks: "1.5 M" },
        { key: "Berth 25 is Lower; Berth 32 is Side Upper", marks: "1.5 M" }
      ]
    },
    {
      category: "Fuel Tank Capacity • Kilometer Range",
      q: "An SUV has a 65-litre fuel tank. Its highway mileage is 14 km/litre.<br>(a) What is the maximum driving range of the vehicle on a full tank?<br>(b) The driver sees a warning that 12 litres of petrol remain. Can the SUV reach a petrol station 180 km away without refueling?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Maximum Range:</strong> 65 L × 14 km/L = <strong>910 km</strong>.<br>
• <strong>(b) Remaining Range:</strong> 12 L × 14 km/L = <strong>168 km</strong>.<br>
- Since 168 km < 180 km, <strong>No, the SUV cannot reach the station 180 km away without refueling</strong> (it will run out of fuel 12 km before reaching).`,
      marks: 3,
      rubric: [
        { key: "Max range = 910 km", marks: "1.5 M" },
        { key: "Remaining range = 168 km with negative conclusion", marks: "1.5 M" }
      ]
    },
    {
      category: "Group Dining Bill • Split Evenly",
      q: "Six friends dine at a restaurant during their trip. The food bill is ₹2,850 and service charge is ₹150.<br>(a) What is the total bill?<br>(b) If they split the cost equally among the 6 friends, how much does each person contribute?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Total Bill:</strong> ₹2,850 + ₹150 = <strong>₹3,000</strong>.<br>
• <strong>(b) Individual Share:</strong> ₹3,000 ÷ 6 = <strong>₹500 per person</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total bill = ₹3,000", marks: "1.5 M" },
        { key: "Per person = ₹500", marks: "1.5 M" }
      ]
    },
    {
      category: "Sightseeing Boat Hire • Hourly Rate",
      q: "A pedal boat costs ₹180 for 30 minutes, while a motor boat costs ₹450 for 20 minutes.<br>(a) Find the cost per minute for the pedal boat.<br>(b) Find the cost per minute for the motor boat.<br>(c) Which boat has a higher per-minute rate and by how much?",
      ans: `<strong>Rate Calculations:</strong><br>
• <strong>(a) Pedal Boat Rate:</strong> ₹180 ÷ 30 min = <strong>₹6 per minute</strong>.<br>
• <strong>(b) Motor Boat Rate:</strong> ₹450 ÷ 20 min = <strong>₹22.50 per minute</strong>.<br>
• <strong>(c) Difference:</strong> ₹22.50 - ₹6.00 = <strong>₹16.50 per minute higher for the motor boat</strong>.`,
      marks: 3,
      rubric: [
        { key: "Pedal boat = ₹6/min", marks: "1.0 M" },
        { key: "Motor boat = ₹22.50/min", marks: "1.0 M" },
        { key: "Difference = ₹16.50/min", marks: "1.0 M" }
      ]
    },
    {
      category: "HOTS • Travel Riddle",
      q: "A train leaves City A and City B at the same time, traveling toward each other along parallel tracks. Train 1 travels at 60 km/h and Train 2 travels at 80 km/h. If the cities are 420 km apart, after how many hours will the trains meet?",
      ans: `<strong>Relative Speed Concept:</strong><br>
1. Since the trains are moving toward each other, their combined speed is: 60 km/h + 80 km/h = <strong>140 km/h</strong>.<br>
2. Total distance to cover = 420 km.<br>
3. Time taken to meet = Distance ÷ Relative Speed = 420 ÷ 140 = <strong>3 hours</strong>.<br>
4. <strong>Verification:</strong> In 3 hours, Train 1 covers 3 × 60 = 180 km; Train 2 covers 3 × 80 = 240 km. Total = 180 + 240 = 420 km. Verified!`,
      marks: 3,
      rubric: [
        { key: "Combined speed = 140 km/h", marks: "1.5 M" },
        { key: "Meeting time = 3 hours with verification", marks: "1.5 M" }
      ]
    },
    {
      category: "Airfare Surge Pricing • Mental Math",
      q: "A base air ticket is ₹3,500. During festival season, the airline applies a surge increase of 40%.<br>(a) What is the surge price increase in Rupees?<br>(b) What is the new ticket price?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Surge Amount:</strong> 40% of ₹3,500 = (40 ÷ 100) × 3,500 = 40 × 35 = <strong>₹1,400</strong>.<br>
• <strong>(b) New Price:</strong> ₹3,500 + ₹1,400 = <strong>₹4,900</strong>.`,
      marks: 3,
      rubric: [
        { key: "Surge increase = ₹1,400", marks: "1.5 M" },
        { key: "New price = ₹4,900", marks: "1.5 M" }
      ]
    },
    {
      category: "Bus Ticket Booking Agent Commission",
      q: "A booking agent earns a commission of ₹45 on every bus ticket booked. In one week, he books 160 tickets.<br>(a) Find his total earnings for the week.<br>(b) If his weekly target was ₹8,000, by how much did he fall short or exceed his target?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Total Earnings:</strong> 160 × ₹45 = <strong>₹7,200</strong>.<br>
• <strong>(b) Target Difference:</strong> ₹8,000 - ₹7,200 = <strong>₹800 short of target</strong>.`,
      marks: 3,
      rubric: [
        { key: "Earnings = ₹7,200", marks: "1.5 M" },
        { key: "Short by ₹800", marks: "1.5 M" }
      ]
    },
    {
      category: "Multi-Day Mileage Log Analysis",
      q: "A touring taxi records its daily kilometres:<br>Day 1: 345 km, Day 2: 412 km, Day 3: 288 km, Day 4: 355 km.<br>(a) Find the total distance traveled over the 4 days.<br>(b) Find the average daily distance traveled.",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Total Distance:</strong> 345 + 412 + 288 + 355 = <strong>1,400 km</strong>.<br>
• <strong>(b) Average Daily Distance:</strong> Total distance ÷ 4 days = 1,400 ÷ 4 = <strong>350 km per day</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total = 1,400 km", marks: "1.5 M" },
        { key: "Average = 350 km/day", marks: "1.5 M" }
      ]
    },
    {
      category: "Currency Denominations • Cash Settlement",
      q: "To settle a hotel bill of ₹7,850, a traveler gives four ₹2,000 notes.<br>(a) What is the total cash tendered?<br>(b) How much change should the cashier return?<br>(c) What is the minimum number of currency notes (using ₹500, ₹100, and ₹50 notes) that can make up this change?",
      ans: `<strong>Cash Calculations:</strong><br>
• <strong>(a) Cash Tendered:</strong> 4 × ₹2,000 = <strong>₹8,000</strong>.<br>
• <strong>(b) Change:</strong> ₹8,000 - ₹7,850 = <strong>₹150</strong>.<br>
• <strong>(c) Minimum Notes for ₹150:</strong> One ₹100 note + One ₹50 note = <strong>2 notes</strong>.`,
      marks: 3,
      rubric: [
        { key: "Cash tendered = ₹8,000", marks: "1.0 M" },
        { key: "Change = ₹150", marks: "1.0 M" },
        { key: "Minimum notes = 2 (₹100 + ₹50)", marks: "1.0 M" }
      ]
    },
    {
      category: "Comprehensive Travel Review",
      q: "A family sets aside a vacation budget of ₹50,000. Their actual expenses are: Travel ₹18,600, Hotel ₹16,400, Food ₹8,500, Shopping ₹4,750.<br>(a) What is the total money spent?<br>(b) Did they stay within their budget? How much money remains or by how much did they exceed?",
      ans: `<strong>Financial Review:</strong><br>
• <strong>(a) Total Expenses:</strong> ₹18,600 + ₹16,400 + ₹8,500 + ₹4,750 = <strong>₹48,250</strong>.<br>
• <strong>(b) Budget Comparison:</strong> Budget = ₹50,000. Difference = ₹50,000 - ₹48,250 = <strong>₹1,750</strong>.<br>
<strong>Yes, they stayed within budget, saving ₹1,750</strong>.`,
      marks: 3,
      rubric: [
        { key: "Total expenses = ₹48,250", marks: "1.5 M" },
        { key: "Stayed within budget with ₹1,750 left", marks: "1.5 M" }
      ]
    }
  ],

  mela5: [
    {
      category: "Scale Conversion • Map to Ground",
      q: "On a city tourist map, the scale is given as: <strong>1 cm on map = 250 metres on ground</strong>.<br>(a) If the distance between the Museum and the Zoo on the map is 6 cm, find the actual distance on the ground in metres and kilometres.<br>(b) If two temples are actually 2,000 metres apart, how many centimetres apart will they appear on the map?",
      ans: `<strong>Scale Conversions (Scale: 1 cm = 250 m):</strong><br>
• <strong>(a) Map Distance = 6 cm:</strong><br>
- Actual distance = 6 × 250 m = <strong>1,500 metres</strong>.<br>
- In kilometres = 1,500 ÷ 1,000 = <strong>1.5 km</strong>.<br>
• <strong>(b) Actual Distance = 2,000 m:</strong><br>
- Map distance = 2,000 ÷ 250 = <strong>8 cm on the map</strong>.`,
      marks: 3,
      rubric: [
        { key: "Ground distance = 1,500 m = 1.5 km", marks: "1.5 M" },
        { key: "Map distance = 8 cm", marks: "1.5 M" }
      ]
    },
    {
      category: "Multi-Leg Journey on Map Scale",
      q: "Rahul travels from home to school. On his neighbourhood map (scale 1 cm = 100 m):<br>• House to Bus stop is 3.5 cm.<br>• Bus stop to School is 8.5 cm.<br>(a) Find the total map distance.<br>(b) Calculate the total real walking distance in metres.<br>(c) Express the total distance in kilometres.",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Total Map Distance:</strong> 3.5 cm + 8.5 cm = <strong>12 cm</strong>.<br>
• <strong>(b) Real Ground Distance:</strong> 12 cm × 100 m = <strong>1,200 metres</strong>.<br>
• <strong>(c) In Kilometres:</strong> 1,200 ÷ 1,000 = <strong>1.2 km</strong>.`,
      marks: 3,
      rubric: [
        { key: "Map distance = 12 cm", marks: "1.0 M" },
        { key: "Ground distance = 1,200 m", marks: "1.0 M" },
        { key: "In km = 1.2 km", marks: "1.0 M" }
      ]
    },
    {
      category: "State Highway Map • Large Scale",
      q: "On a state highway map with a scale of <strong>1 cm = 60 km</strong>, City P and City Q are 7.5 cm apart.<br>(a) What is the actual distance between the two cities?<br>(b) If an express train covers this distance in 5 hours, what is its average speed?",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Actual Distance:</strong> 7.5 cm × 60 km = <strong>450 km</strong>.<br>
• <strong>(b) Average Speed:</strong> Speed = Distance ÷ Time = 450 km ÷ 5 h = <strong>90 km/h</strong>.`,
      marks: 3,
      rubric: [
        { key: "Distance = 450 km", marks: "1.5 M" },
        { key: "Speed = 90 km/h", marks: "1.5 M" }
      ]
    },
    {
      category: "Compass Directions & Navigation",
      q: "Look at the standard compass rose (North at top):<br>(a) What direction is directly opposite to North-West?<br>(b) If you walk 4 km South and then 3 km East, in which general direction are you from your starting point?<br>(c) What is the angle between East and South?",
      ans: `<strong>Compass Directions:</strong><br>
• <strong>(a) Opposite to North-West:</strong> Directly opposite (180°) is <strong>South-East</strong>.<br>
• <strong>(b) Position:</strong> Moving South then East places you in the <strong>South-East</strong> direction from the starting point.<br>
• <strong>(c) Angle East to South:</strong> East is 90° and South is 180°, so the angle is 180° - 90° = <strong>90° (Right angle)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): South-East", marks: "1.0 M" },
        { key: "Part (b): South-East", marks: "1.0 M" },
        { key: "Part (c): 90° Right angle", marks: "1.0 M" }
      ]
    },
    {
      category: "Grid Coordinate Navigation",
      q: "A school campus grid map has columns labeled A to F and rows 1 to 6. Each grid square is 50 m × 50 m.<br>• Library is at (B, 2)<br>• Canteen is at (E, 2)<br>(a) How many grid units apart are the Library and Canteen?<br>(b) What is the real walking distance along the corridor between them?",
      ans: `<strong>Grid Calculations:</strong><br>
• <strong>(a) Grid Units:</strong> Both are in Row 2. Difference in columns from B to E: C, D, E = <strong>3 grid units</strong>.<br>
• <strong>(b) Ground Distance:</strong> 3 grid units × 50 m = <strong>150 metres</strong>.`,
      marks: 3,
      rubric: [
        { key: "Grid units = 3", marks: "1.5 M" },
        { key: "Real distance = 150 m", marks: "1.5 M" }
      ]
    },
    {
      category: "Perspective Views • Aerial vs Side View",
      q: "Explain how an aerial view (top view) of a town differs from a side view. Why are geographical maps always drawn from the top view?",
      ans: `<strong>Perspective Comparison:</strong><br>
1. <strong>Top View (Aerial View):</strong> Shows objects as viewed from directly overhead. Heights of buildings cannot be seen; only flat boundaries, roofs, streets, and footprints are visible.<br>
2. <strong>Side View:</strong> Shows vertical height and facade of structures, but objects in front hide objects behind them.<br>
3. <strong>Why Maps Use Top View:</strong> A top view allows accurate 2D geometric scaling, uninterrupted representation of every road, plot, and landmark without foreground objects blocking background buildings.`,
      marks: 3,
      rubric: [
        { key: "Top view shows footprint without vertical blocking", marks: "1.5 M" },
        { key: "Maps require uniform 2D coordinate scaling without obstruction", marks: "1.5 M" }
      ]
    },
    {
      category: "Curved Paths • Thread Measurement",
      q: "How can you measure the length of a winding, curved river shown on a map using a piece of cotton thread and a ruler?",
      ans: `<strong>Thread Measurement Technique:</strong><br>
1. Take a piece of flexible cotton thread and tie a knot at one end.<br>
2. Place the knot at the starting point of the river on the map.<br>
3. Carefully trace the thread along all bends, curves, and meanders of the river until reaching the endpoint.<br>
4. Mark the endpoint on the thread with a pen or pinch it with fingers.<br>
5. Stretch the thread straight along a calibrated centimetre ruler to measure its length.<br>
6. Multiply the thread length in centimetres by the map scale factor to find the real ground length of the river.`,
      marks: 3,
      rubric: [
        { key: "Correct procedure tracing bends with flexible thread", marks: "1.5 M" },
        { key: "Measuring straight thread on ruler & applying scale factor", marks: "1.5 M" }
      ]
    },
    {
      category: "Shortest Path • Route Planning",
      q: "On a road map, there are two routes from Town A to Town B:<br>• Route 1 (Highway): 14 cm on map.<br>• Route 2 (Bypass): 11 cm on map.<br>The map scale is 1 cm = 15 km.<br>(a) Find the actual distance of both routes.<br>(b) How many kilometres shorter is Route 2?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Real Distances:</strong><br>
- Route 1: 14 × 15 km = <strong>210 km</strong>.<br>
- Route 2: 11 × 15 km = <strong>165 km</strong>.<br>
• <strong>(b) Difference:</strong> 210 km - 165 km = <strong>45 km shorter</strong>.`,
      marks: 3,
      rubric: [
        { key: "Route 1 = 210 km; Route 2 = 165 km", marks: "2.0 M" },
        { key: "Difference = 45 km", marks: "1.0 M" }
      ]
    },
    {
      category: "Map Area Scale • Square Grid",
      q: "A botanical garden occupies a square region of 4 cm × 4 cm on a map. The map scale is 1 cm = 50 metres.<br>(a) What are the real length and width of the garden?<br>(b) Find the actual ground area of the garden in square metres.",
      ans: `<strong>Area Scaling Calculations:</strong><br>
• <strong>(a) Real Dimensions:</strong><br>
- Length = 4 cm × 50 m = <strong>200 metres</strong>.<br>
- Width = 4 cm × 50 m = <strong>200 metres</strong>.<br>
• <strong>(b) Ground Area:</strong> Side × Side = 200 m × 200 m = <strong>40,000 sq m</strong>.`,
      marks: 3,
      rubric: [
        { key: "Dimensions: 200 m × 200 m", marks: "1.5 M" },
        { key: "Area = 40,000 sq m", marks: "1.5 M" }
      ]
    },
    {
      category: "Floor Plan Interpretation",
      q: "A house floor plan has scale 1 cm = 1 metre. The living room measures 6 cm by 4.5 cm on the blueprint.<br>(a) What are the actual dimensions of the living room?<br>(b) What is its floor area in square metres?<br>(c) If flooring costs ₹120 per sq m, find the total cost of tiling the room.",
      ans: `<strong>Calculations:</strong><br>
• <strong>(a) Dimensions:</strong> Length = 6 m, Breadth = <strong>4.5 m</strong>.<br>
• <strong>(b) Floor Area:</strong> 6 m × 4.5 m = <strong>27 sq m</strong>.<br>
• <strong>(c) Tiling Cost:</strong> 27 sq m × ₹120 = <strong>₹3,240</strong>.`,
      marks: 3,
      rubric: [
        { key: "Dimensions: 6 m by 4.5 m", marks: "1.0 M" },
        { key: "Area = 27 sq m", marks: "1.0 M" },
        { key: "Cost = ₹3,240", marks: "1.0 M" }
      ]
    },
    {
      category: "Map Enlargement & Reduction",
      q: "A square park has side 2 cm on Map 1 (scale 1 cm = 100 m). If the same park is redrawn on Map 2 with scale 1 cm = 50 m:<br>(a) What will be the side length of the park on Map 2?<br>(b) How many times larger will the area of the drawing appear on Map 2?",
      ans: `<strong>Scale Analysis:</strong><br>
• Real side of park = 2 cm × 100 m = 200 metres.<br>
• <strong>(a) Side on Map 2:</strong> 200 m ÷ 50 m = <strong>4 cm</strong>.<br>
• <strong>(b) Area Comparison on Paper:</strong><br>
- Map 1 area = 2 cm × 2 cm = 4 cm².<br>
- Map 2 area = 4 cm × 4 cm = 16 cm².<br>
- Ratio = 16 ÷ 4 = <strong>4 times larger</strong>.`,
      marks: 3,
      rubric: [
        { key: "Side on Map 2 = 4 cm", marks: "1.5 M" },
        { key: "Area is 4 times larger on paper", marks: "1.5 M" }
      ]
    },
    {
      category: "India Map • Border State Directions",
      q: "Refer to an outline map of India:<br>(a) In which direction from New Delhi is Kerala located?<br>(b) In which direction from New Delhi is Assam located?<br>(c) Which sea lies to the West of India?",
      ans: `<strong>Geographical Directions:</strong><br>
• <strong>(a) Kerala from Delhi:</strong> Kerala lies directly towards the <strong>South</strong>.<br>
• <strong>(b) Assam from Delhi:</strong> Assam lies towards the <strong>East</strong> (North-East).<br>
• <strong>(c) Sea to the West:</strong> The <strong>Arabian Sea</strong> lies to the West of the Indian peninsula.`,
      marks: 3,
      rubric: [
        { key: "Kerala: South", marks: "1.0 M" },
        { key: "Assam: East / North-East", marks: "1.0 M" },
        { key: "Arabian Sea", marks: "1.0 M" }
      ]
    },
    {
      category: "Speed-Distance-Scale Problem",
      q: "A cyclist travels along a straight highway at 15 km/h. On his roadmap, the highway has a scale of 1 cm = 5 km.<br>(a) How many kilometres does he cycle in 2 hours?<br>(b) How many centimetres of map distance does his 2-hour ride represent?",
      ans: `<strong>Working:</strong><br>
• <strong>(a) Distance Covered:</strong> 15 km/h × 2 h = <strong>30 km</strong>.<br>
• <strong>(b) Map Distance:</strong> 30 km ÷ 5 km/cm = <strong>6 cm on the map</strong>.`,
      marks: 3,
      rubric: [
        { key: "Distance = 30 km", marks: "1.5 M" },
        { key: "Map distance = 6 cm", marks: "1.5 M" }
      ]
    },
    {
      category: "Perimeter on a Grid Map",
      q: "A jogging track on a park grid map follows the boundary: 6 grid units North, 8 grid units East, 6 grid units South, and 8 grid units West.<br>(a) What shape is the jogging track?<br>(b) If 1 grid unit = 25 metres, find the total perimeter of the track in metres.",
      ans: `<strong>Geometry & Scale:</strong><br>
• <strong>(a) Shape:</strong> Opposite sides are equal (6 and 8 units) and meet at right angles → <strong>Rectangle</strong>.<br>
• <strong>(b) Perimeter:</strong><br>
- Total grid units = 6 + 8 + 6 + 8 = 28 units.<br>
- Real perimeter = 28 × 25 m = <strong>700 metres</strong>.`,
      marks: 3,
      rubric: [
        { key: "Shape = Rectangle", marks: "1.0 M" },
        { key: "Total units = 28", marks: "1.0 M" },
        { key: "Perimeter = 700 metres", marks: "1.0 M" }
      ]
    },
    {
      category: "Reading a Legend / Key on a Map",
      q: "What is a 'Legend' or 'Key' on a geographical map? List three common symbols typically used on school or city maps.",
      ans: `<strong>Map Legend:</strong><br>
1. <strong>Definition:</strong> A map legend (or key) is an explanatory box that explains the meaning of various colours, signs, and symbols used on the map.<br>
2. <strong>Common Symbols:</strong><br>
• <strong>Blue lines/areas:</strong> Rivers, canals, or water bodies.<br>
• <strong>Black parallel lines with cross-ties:</strong> Railway tracks.<br>
• <strong>Red cross (+):</strong> Hospital or clinic.<br>
• <strong>Small flag or building:</strong> School.`,
      marks: 3,
      rubric: [
        { key: "Clear definition of map legend", marks: "1.5 M" },
        { key: "Three accurate symbol examples", marks: "1.5 M" }
      ]
    },
    {
      category: "Compass Angles • Half Cardinal Directions",
      q: "Between North and East lies North-East.<br>(a) What angle does North-East make with North?<br>(b) What angle does North-East make with East?<br>(c) What is the angle between North-East and South-West?",
      ans: `<strong>Angle Calculations:</strong><br>
• <strong>(a) North to North-East:</strong> 90° ÷ 2 = <strong>45°</strong>.<br>
• <strong>(b) North-East to East:</strong> 90° ÷ 2 = <strong>45°</strong>.<br>
• <strong>(c) North-East to South-West:</strong> They are directly opposite directions along a straight line = <strong>180° (Straight angle)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Part (a): 45°", marks: "1.0 M" },
        { key: "Part (b): 45°", marks: "1.0 M" },
        { key: "Part (c): 180°", marks: "1.0 M" }
      ]
    },
    {
      category: "River Bridge Crossing • Scale Calculation",
      q: "A major river bridge measures 2.4 cm on a satellite map (scale 1 cm = 500 m).<br>(a) What is the actual length of the bridge in metres?<br>(b) Express this length in kilometres.<br>(c) A car crosses this bridge at 60 km/h. How many seconds does it take to cross?",
      ans: `<strong>Step-by-Step Working:</strong><br>
• <strong>(a) Actual Length:</strong> 2.4 cm × 500 m = <strong>1,200 metres</strong>.<br>
• <strong>(b) In Kilometres:</strong> 1,200 ÷ 1,000 = <strong>1.2 km</strong>.<br>
• <strong>(c) Crossing Time:</strong><br>
- Speed = 60 km/h = (60 × 1,000) ÷ 3,600 = 16.67 m/s.<br>
- Time = Distance ÷ Speed = 1,200 m ÷ 16.67 m/s = <strong>72 seconds (1 minute 12 seconds)</strong>.`,
      marks: 3,
      rubric: [
        { key: "Length = 1,200 m = 1.2 km", marks: "1.5 M" },
        { key: "Crossing time = 72 seconds", marks: "1.5 M" }
      ]
    },
    {
      category: "Grid Coordinate Distance • Manhattan Distance",
      q: "On a city grid where roads only run along North-South and East-West grid lines:<br>Point A is at (1, 1) and Point B is at (5, 4). Each grid unit is 200 metres.<br>(a) How many units East must one travel?<br>(b) How many units North must one travel?<br>(c) What is the total real travel distance along the streets?",
      ans: `<strong>Grid Street Distance:</strong><br>
• <strong>(a) East Units:</strong> 5 - 1 = <strong>4 units East</strong>.<br>
• <strong>(b) North Units:</strong> 4 - 1 = <strong>3 units North</strong>.<br>
• <strong>(c) Total Travel Distance:</strong><br>
- Total grid units = 4 + 3 = 7 units.<br>
- Real distance = 7 × 200 m = <strong>1,400 metres (1.4 km)</strong>.`,
      marks: 3,
      rubric: [
        { key: "4 units East, 3 units North", marks: "1.5 M" },
        { key: "Total real distance = 1,400 m", marks: "1.5 M" }
      ]
    },
    {
      category: "HOTS • Map Scale Riddle",
      q: "On Map X, two cities are 8 cm apart. On Map Y, the same two cities are 4 cm apart. The scale of Map X is 1 cm = 20 km. What is the scale of Map Y?",
      ans: `<strong>Deduction:</strong><br>
1. <strong>Actual Ground Distance:</strong> From Map X: 8 cm × 20 km = <strong>160 km</strong>.<br>
2. <strong>Scale of Map Y:</strong> On Map Y, 4 cm represents 160 km.<br>
3. Therefore, 1 cm on Map Y represents: 160 km ÷ 4 = <strong>40 km</strong>.<br>
<strong>Scale of Map Y: 1 cm = 40 km</strong>.`,
      marks: 3,
      rubric: [
        { key: "Ground distance = 160 km", marks: "1.5 M" },
        { key: "Scale of Map Y = 1 cm = 40 km", marks: "1.5 M" }
      ]
    },
    {
      category: "Aerial Map Scale Comparison",
      q: "A circular stadium has diameter 150 metres on the ground.<br>(a) What diameter will it have on a blueprint with scale 1 cm = 25 m?<br>(b) What diameter will it have on a city map with scale 1 cm = 50 m?",
      ans: `<strong>Scaling:</strong><br>
• <strong>(a) Blueprint (1 cm = 25 m):</strong> 150 ÷ 25 = <strong>6 cm</strong>.<br>
• <strong>(b) City Map (1 cm = 50 m):</strong> 150 ÷ 50 = <strong>3 cm</strong>.`,
      marks: 3,
      rubric: [
        { key: "Blueprint = 6 cm", marks: "1.5 M" },
        { key: "City map = 3 cm", marks: "1.5 M" }
      ]
    },
    {
      category: "Scale Factor • Mathematical Definition",
      q: "(a) What is meant by the 'scale of a map'?<br>(b) If a map scale says '1:100,000', what does 1 cm on the map represent in kilometres on the ground?",
      ans: `<strong>Scale Concepts:</strong><br>
• <strong>(a) Definition:</strong> The scale of a map is the constant ratio between the distance measured on the map and the corresponding actual distance measured on the ground.<br>
• <strong>(b) Ratio 1:100,000:</strong><br>
- 1 cm on map = 100,000 cm on ground.<br>
- 100,000 cm ÷ 100 = 1,000 metres.<br>
- 1,000 m = <strong>1 kilometre</strong>.<br>
- So 1 cm on the map represents exactly <strong>1 km on the ground</strong>.`,
      marks: 3,
      rubric: [
        { key: "Definition of scale", marks: "1.5 M" },
        { key: "100,000 cm = 1 km", marks: "1.5 M" }
      ]
    },
    {
      category: "Elevation Contours & Topography",
      q: "On a topographical relief map, contour lines indicate height above sea level.<br>(a) What does it mean when contour lines are drawn very close to each other?<br>(b) What does it mean when contour lines are far apart?",
      ans: `<strong>Contour Line Principles:</strong><br>
• <strong>(a) Close Contour Lines:</strong> Indicate a <strong>steep slope or cliff</strong>, where the elevation changes rapidly over a very short horizontal ground distance.<br>
• <strong>(b) Far Apart Contour Lines:</strong> Indicate a <strong>gentle slope or flat plain</strong>, where elevation changes very gradually over a long distance.`,
      marks: 3,
      rubric: [
        { key: "Close lines = Steep slope", marks: "1.5 M" },
        { key: "Far lines = Gentle slope / Flat terrain", marks: "1.5 M" }
      ]
    },
    {
      category: "True or False with Map Reasoning",
      q: "State True or False with reasoning:<br>(a) A map scale of 1 cm = 10 km represents a larger area than a scale of 1 cm = 100 m on the same size sheet of paper.<br>(b) East is always 180° clockwise from North.<br>(c) The top of every official map is always oriented toward North.",
      ans: `<strong>Justifications:</strong><br>
• <strong>(a) True:</strong> At 1 cm = 10 km, each centimetre covers 10,000 metres of ground, so the same paper sheet covers a vastly larger geographic territory (small-scale map).<br>
• <strong>(b) False:</strong> East is <strong>90° clockwise</strong> from North (180° clockwise is South).<br>
• <strong>(c) True:</strong> By international cartographic standard convention, the top edge of a map points toward true <strong>North</strong> (unless explicitly indicated otherwise by a north arrow).`,
      marks: 3,
      rubric: [
        { key: "Part (a): True with explanation", marks: "1.0 M" },
        { key: "Part (b): False (East is 90°)", marks: "1.0 M" },
        { key: "Part (c): True with standard convention", marks: "1.0 M" }
      ]
    },
    {
      category: "Comprehensive Map Review • Town Tour",
      q: "A delivery van starts at Central Depot (0, 0). It travels 4 km North to Station 1, then 3 km East to Station 2, then 4 km South to Station 3.<br>(a) Plot or describe the coordinates of Station 1, Station 2, and Station 3.<br>(b) In which direction and at what distance is Station 3 from the Central Depot?<br>(c) What shape is formed by the complete delivery path if the van returns directly from Station 3 to the Central Depot?",
      ans: `<strong>Comprehensive Route Analysis:</strong><br>
• <strong>(a) Coordinates:</strong><br>
- Depot: (0, 0)<br>
- Station 1: 4 km North → (0, 4)<br>
- Station 2: 3 km East → (3, 4)<br>
- Station 3: 4 km South → (3, 0).<br>
• <strong>(b) Relative Position of Station 3:</strong> Station 3 is at (3, 0), which is exactly <strong>3 km East of Central Depot</strong>.<br>
• <strong>(c) Path Shape:</strong> The path goes North (4 km), East (3 km), South (4 km), and West back to depot (3 km). This forms a perfect <strong>Rectangle (4 km × 3 km)</strong> with perimeter = 4 + 3 + 4 + 3 = 14 km.`,
      marks: 3,
      rubric: [
        { key: "Correct coordinates: (0,4), (3,4), (3,0)", marks: "1.0 M" },
        { key: "Station 3 is 3 km East of Depot", marks: "1.0 M" },
        { key: "Shape is Rectangle (4 km × 3 km)", marks: "1.0 M" }
      ]
    }
  ]
};

module.exports = { melaCh3_4_5 };
