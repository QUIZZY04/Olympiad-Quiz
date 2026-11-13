// Official NCERT Class 4 Mathematics (Maths Mela / आनन्दमय गणित) Complete Dataset - Chapters 1 to 14
// Aligned with New NEP 2020 & NCF-SE 2023 Curriculum (CBSE 2026-27 Session) - 100% Comprehensive Coverage

const mathsMelaChapters = [
  {
    "id": "mm1",
    "num": 1,
    "unit": "Unit 1: Geometry & Spatial Understanding",
    "title": "Shapes Around Us",
    "subtitle": "Exploring 2D & 3D Shapes, Faces, Edges, Vertices, Tangrams & Tessellations",
    "concepts": [
      "Distinction between 2D flat shapes (squares, rectangles, circles, triangles) and 3D solid shapes (cubes, cuboids, cylinders, cones, spheres).",
      "Counting flat faces, curved faces, straight edges, curved edges, and vertices on everyday objects.",
      "Understanding rolling vs. sliding properties based on curved and flat surfaces.",
      "Creating pictures and figures using the 7-piece Tangram puzzle.",
      "Tessellation: Tiling patterns that cover a plane completely without any gaps or overlaps."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Shapes Around Us — 2D vs. 3D Geometric Characteristics</text>\n      <!-- Cube -->\n      <rect x=\"50\" y=\"55\" width=\"50\" height=\"50\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n      <polygon points=\"50,55 70,40 120,40 100,55\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n      <polygon points=\"100,55 120,40 120,90 100,105\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n      <text x=\"85\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Cube (6 Faces)</text>\n      <text x=\"85\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#2563eb\" text-anchor=\"middle\">12 Edges, 8 Vertices</text>\n      <!-- Cylinder -->\n      <ellipse cx=\"230\" cy=\"55\" rx=\"25\" ry=\"10\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"2\"/>\n      <rect x=\"205\" y=\"55\" width=\"50\" height=\"50\" fill=\"#ffedd5\" stroke=\"#c2410c\" stroke-width=\"2\"/>\n      <ellipse cx=\"230\" cy=\"105\" rx=\"25\" ry=\"10\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"2\"/>\n      <text x=\"230\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Cylinder (3 Faces)</text>\n      <text x=\"230\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#ea580c\" text-anchor=\"middle\">2 Flat, 1 Curved</text>\n      <!-- Cone -->\n      <polygon points=\"370,45 345,105 395,105\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n      <ellipse cx=\"370\" cy=\"105\" rx=\"25\" ry=\"8\" fill=\"#fef9c3\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n      <text x=\"370\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Cone (2 Faces)</text>\n      <text x=\"370\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#a16207\" text-anchor=\"middle\">1 Apex, 1 Curved Edge</text>\n      <!-- Sphere -->\n      <circle cx=\"500\" cy=\"78\" r=\"28\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"2\"/>\n      <ellipse cx=\"500\" cy=\"78\" rx=\"26\" ry=\"9\" fill=\"none\" stroke=\"#16a34a\" stroke-dasharray=\"3,3\" stroke-width=\"1.5\"/>\n      <text x=\"500\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">Sphere (1 Face)</text>\n      <text x=\"500\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#15803d\" text-anchor=\"middle\">Curved only, 0 Edges</text>\n    </svg>",
    "questions": [
      {
        "category": "Textbook Exercise • 3D Properties",
        "q": "Look around your classroom and home. Name two objects each that: (a) Only roll, (b) Only slide, (c) Both roll and slide. Explain the geometric reason for each behavior.",
        "ans": "<strong>(a) Objects that only roll:</strong><br>\n• Examples: A cricket ball, a marble, an orange.<br>\n• Reason: These objects have only a continuous curved surface and no flat faces or straight edges, so they rotate smoothly over surfaces.<br><br>\n<strong>(b) Objects that only slide:</strong><br>\n• Examples: A textbook, a rectangular pencil box, an eraser.<br>\n• Reason: These objects have only flat planar faces and straight edges. When pushed, a flat face stays in contact with the table and slides without rolling.<br><br>\n<strong>(c) Objects that both roll and slide:</strong><br>\n• Examples: A one-rupee coin, a water bottle, a round cylindrical marker pen.<br>\n• Reason: These objects possess both flat faces and a curved surface. When placed on their flat circular base, they slide; when placed on their curved lateral side, they roll.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct examples for all 3 categories",
            "marks": "1.5 M"
          },
          {
            "key": "Scientific explanation relating flat/curved faces to rolling/sliding",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Geometric Attributes",
        "q": "Complete the table by counting the number of faces, edges, and corners (vertices) for: (1) A chalk box (Cube), (2) A matchbox (Cuboid), (3) A new unsharpened pencil (Hexagonal Prism / Cylinder), (4) A football (Sphere).",
        "ans": "<table style=\"width:100%;border-collapse:collapse;margin-top:8px;font-size:0.9rem;\">\n          <tr style=\"background:#f1f5f9;border-bottom:2px solid #cbd5e1;text-align:left;\">\n            <th style=\"padding:8px;border:1px solid #cbd5e1;\">Shape / Object</th>\n            <th style=\"padding:8px;border:1px solid #cbd5e1;\">Flat Faces</th>\n            <th style=\"padding:8px;border:1px solid #cbd5e1;\">Curved Faces</th>\n            <th style=\"padding:8px;border:1px solid #cbd5e1;\">Total Edges</th>\n            <th style=\"padding:8px;border:1px solid #cbd5e1;\">Corners (Vertices)</th>\n          </tr>\n          <tr>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\"><strong>1. Chalk box (Cube)</strong></td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">6 square faces</td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">0</td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">12 straight edges</td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">8 corners</td>\n          </tr>\n          <tr style=\"background:#f8fafc;\">\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\"><strong>2. Matchbox (Cuboid)</strong></td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">6 rectangular faces</td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">0</td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">12 straight edges</td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">8 corners</td>\n          </tr>\n          <tr>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\"><strong>3. Cylinder (Can/Pencil)</strong></td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">2 circular faces</td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">1 curved face</td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">2 curved edges</td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">0 corners</td>\n          </tr>\n          <tr style=\"background:#f8fafc;\">\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\"><strong>4. Football (Sphere)</strong></td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">0</td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">1 curved face</td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">0 edges</td>\n            <td style=\"padding:8px;border:1px solid #cbd5e1;\">0 corners</td>\n          </tr>\n        </table>",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct counts for Cube & Cuboid",
            "marks": "2.0 M"
          },
          {
            "key": "Correct counts for Cylinder & Sphere",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Tangram & Tessellation Investigation",
        "q": "What is a Tangram? How many pieces does a standard Chinese tangram have, and which geometric shapes are present in it? Can a circle tessellate on a floor? Why or why not?",
        "ans": "<strong>1. Tangram Definition & Composition:</strong><br>\nA Tangram is a traditional geometric dissection puzzle consisting of a square cut into <strong>7 flat pieces</strong> called 'tans':<br>\n• <strong>5 Triangles:</strong> 2 large right-angled isosceles triangles, 1 medium right-angled triangle, and 2 small right-angled triangles.<br>\n• <strong>1 Square:</strong> Formed using 2 small triangles.<br>\n• <strong>1 Parallelogram:</strong> Formed with opposite sides equal and parallel.<br><br>\n<strong>2. Can Circles Tessellate?</strong><br>\n• <strong>Answer:</strong> <em>No, circles cannot tessellate.</em><br>\n• <strong>Mathematical Reason:</strong> Tessellation requires shapes to fit together leaving zero gaps and zero overlaps. When round circular coins or tiles are placed side by side, empty curved spaces (interstices) are always left between them. Therefore, circles cannot tile a flat surface completely.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct description of 7 tangram pieces",
            "marks": "1.5 M"
          },
          {
            "key": "Logical reason why circles leave gaps and cannot tessellate",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "3D Shapes • Nets & Vertices",
        "q": "How many faces, edges, and vertices does a cuboid have? Draw or describe the net of an open rectangular box.",
        "ans": "<strong>1. Properties of a Cuboid:</strong><br>\n• <strong>Faces:</strong> 6 flat rectangular faces (opposite faces are identical in size).<br>\n• <strong>Edges:</strong> 12 straight edges where two faces meet.<br>\n• <strong>Vertices (Corners):</strong> 8 vertices where three edges meet.<br><br>\n<strong>2. Net of an Open Box (without lid):</strong><br>\nAn open box has 5 faces (1 base + 4 side walls). Its net consists of a central rectangular base surrounded by four rectangular flaps attached to its four sides, forming a cross shape (+). When the four flaps are folded upward at 90°, they form the four walls of the open box.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct counts: 6 faces, 12 edges, 8 vertices",
            "marks": "1.5 M"
          },
          {
            "key": "Accurate structural description of 5-face cross net",
            "marks": "1.5 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Floor Tiling Design for the School Assembly Hall",
      "text": "The school headmaster wants to tile the newly renovated assembly floor. The mason proposes two tile options: Hexagonal tiles and Pentagonal tiles. Rahul observes that honeycombs in nature use hexagons without any gaps.",
      "question": "Which of the two shapes (regular hexagon or regular pentagon) will successfully tile the floor without leaving empty gaps? State the geometric reason.",
      "answer": "<strong>Selected Shape: Regular Hexagon.</strong><br><strong>Reason:</strong> The interior angle of a regular hexagon is 120°. When three hexagons meet at a single vertex point, their angles sum to exactly 120° + 120° + 120° = 360°, which forms a complete flat turn leaving zero gaps. In contrast, regular pentagons have interior angles of 108°; three pentagons sum to 324° (leaving a 36° gap) and four pentagons sum to 432° (overlapping). Hence, between the two proposed options, only the regular hexagon can tile the floor. (Note: In plane geometry, the only regular polygons that can tile a flat surface without gaps are equilateral triangles, squares, and regular hexagons; regular pentagons cannot).",
      "rubric": "1 Mark for choosing hexagon; 1 Mark for explaining angle sum of 360° at vertex."
    }
  },
  {
    "id": "mm2",
    "num": 2,
    "unit": "Unit 1: Spatial Perspectives & Mapping",
    "title": "Hide and Seek",
    "subtitle": "Top View, Front View, Side View, Grid Directions & Spatial Mapping",
    "concepts": [
      "Understanding that 3D objects look different when viewed from different angles: Top View (Plan), Front View (Elevation), and Side View.",
      "Connecting 2D perspective drawings with actual 3D objects like tables, cars, houses, and shoe boxes.",
      "Navigating simple grid maps using cardinal directions: North, South, East, West, Left, and Right.",
      "Solving bird's-eye view problems and matching aerial views with ground elevations."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">Hide and Seek — Perspective Views of a Dining Table</text>\n      <!-- Top View -->\n      <rect x=\"70\" y=\"55\" width=\"80\" height=\"50\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\" rx=\"4\"/>\n      <text x=\"110\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Rectangle</text>\n      <text x=\"110\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#166534\" text-anchor=\"middle\">Top View</text>\n      <text x=\"110\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#15803d\" text-anchor=\"middle\">(Only flat top seen)</text>\n      <!-- Front View -->\n      <line x1=\"240\" y1=\"65\" x2=\"340\" y2=\"65\" stroke=\"#2563eb\" stroke-width=\"6\"/>\n      <line x1=\"245\" y1=\"68\" x2=\"245\" y2=\"108\" stroke=\"#1e40af\" stroke-width=\"4\"/>\n      <line x1=\"335\" y1=\"68\" x2=\"335\" y2=\"108\" stroke=\"#1e40af\" stroke-width=\"4\"/>\n      <text x=\"290\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#1e40af\" text-anchor=\"middle\">Front View</text>\n      <text x=\"290\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#2563eb\" text-anchor=\"middle\">(Top edge + 2 legs)</text>\n      <!-- Side View -->\n      <line x1=\"430\" y1=\"65\" x2=\"490\" y2=\"65\" stroke=\"#d97706\" stroke-width=\"6\"/>\n      <line x1=\"435\" y1=\"68\" x2=\"435\" y2=\"108\" stroke=\"#b45309\" stroke-width=\"4\"/>\n      <line x1=\"485\" y1=\"68\" x2=\"485\" y2=\"108\" stroke=\"#b45309\" stroke-width=\"4\"/>\n      <text x=\"460\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#92400e\" text-anchor=\"middle\">Side View</text>\n      <text x=\"460\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#b45309\" text-anchor=\"middle\">(Shorter width edge)</text>\n    </svg>",
    "questions": [
      {
        "category": "Perspective Identification",
        "q": "Draw or describe what the following objects look like from the TOP and from the SIDE: (a) A tea cup, (b) A railway track, (c) A pressure cooker, (d) A staircase.",
        "ans": "<strong>(a) A Tea Cup:</strong><br>\n• <em>Top View:</em> A circular rim with a smaller concentric circle inside (the base), and the handle sticking out on one side like a small loop.<br>\n• <em>Side View:</em> A curved cylindrical or tapered profile with the full vertical handle visible.<br><br>\n<strong>(b) A Railway Track:</strong><br>\n• <em>Top View:</em> Two parallel straight lines connected by equidistant perpendicular wooden or concrete rectangular sleepers.<br>\n• <em>Side View / Front Perspective:</em> The two tracks appear wide near your feet and converge toward a point in the distance.<br><br>\n<strong>(c) A Pressure Cooker:</strong><br>\n• <em>Top View:</em> A round circle with a long black handle extending outwards and a central weight (whistle).<br>\n• <em>Side View:</em> The body height, curved metal base, safety valve, and side handle profile.<br><br>\n<strong>(d) A Staircase:</strong><br>\n• <em>Top View:</em> A series of adjacent rectangles of identical width.<br>\n• <em>Side View:</em> A zig-zag step pattern (up and across) resembling a stepped right-angled triangle.",
        "marks": 4,
        "rubric": [
          {
            "key": "Accurate description of top views for all 4 items",
            "marks": "2.0 M"
          },
          {
            "key": "Accurate description of side views for all 4 items",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Grid Map & Navigation",
        "q": "Meera is standing at position (2, 1) on a square grid. She walks 3 steps North and then 4 steps East. (a) What are her new grid coordinates? (b) What is the shortest direct path in total steps along the grid lines back to her starting point?",
        "ans": "<strong>Step 1: Finding New Coordinates:</strong><br>\n• Starting position: (X = 2, Y = 1).<br>\n• Walking 3 steps North increases the Y-coordinate by 3: New Y = 1 + 3 = <strong>4</strong>.<br>\n• Walking 4 steps East increases the X-coordinate by 4: New X = 2 + 4 = <strong>6</strong>.<br>\n• <strong>Final Coordinates: (6, 4).</strong><br><br>\n<strong>Step 2: Shortest path along grid lines back to starting point:</strong><br>\n• To return to (2, 1) from (6, 4):<br>\n  - She must walk 4 steps West (6 - 2 = 4 steps).<br>\n  - She must walk 3 steps South (4 - 1 = 3 steps).<br>\n• Total steps along grid lines = 4 + 3 = <strong>7 steps</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct final coordinate (6, 4) with working",
            "marks": "1.5 M"
          },
          {
            "key": "Correct calculation of return steps (7 steps)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Spatial Perspectives • 3D Block Towers",
        "q": "A boy builds a tower using 8 identical unit cubes. If viewed from the front, it looks 4 cubes high and 2 cubes wide. How does the view change when observed from directly above (top view)?",
        "ans": "<strong>Top View Analysis:</strong><br>\nThe top view shows only the arrangement of cubes on the floor grid (the footprint), regardless of their height. If the tower is 2 cubes wide and built against a straight base, the top view shows <strong>2 square faces</strong> side by side (a 2 × 1 rectangle). Looking from directly above, the height of 4 cubes cannot be seen; only the roof surface is visible.",
        "marks": 2,
        "rubric": [
          {
            "key": "Top view shows footprint independent of vertical height",
            "marks": "1.0 M"
          },
          {
            "key": "Correct geometric representation (2 side-by-side squares)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Coordinate Grids • Route Mapping",
        "q": "On a map grid, a school is at (2, 3) and a playground is at (6, 7). How many units East and how many units North must a child walk to reach the playground from the school?",
        "ans": "<strong>Grid Movement Calculation:</strong><br>\n• Initial Position (School): X = 2, Y = 3<br>\n• Destination (Playground): X = 6, Y = 7<br><br>\n1. <strong>Movement East (along X-axis):</strong><br>\n6 - 2 = <strong>4 units East</strong>.<br><br>\n2. <strong>Movement North (along Y-axis):</strong><br>\n7 - 3 = <strong>4 units North</strong>.<br><br>\nTotal distance walked along grid lines = 4 + 4 = <strong>8 units</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Horizontal calculation (4 units East)",
            "marks": "1.0 M"
          },
          {
            "key": "Vertical calculation (4 units North)",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Drone Photography of the School Sports Ground",
      "text": "A drone flies directly above the sports field and takes an aerial snapshot. The football goalpost, which looks like a tall upside-down U-shaped white frame from the ground, looks like a single thin white horizontal line from the sky.",
      "question": "Why does the goalpost look like a single thin straight line from above? What happens to the two vertical posts?",
      "answer": "<strong>Explanation:</strong> From directly above (bird's-eye view), the vertical posts align straight downward beneath the crossbar along the camera's line of sight. Therefore, the upright posts appear as tiny dots, while the horizontal crossbar spans across the top, making the entire goalpost look like a single straight line from the air.",
      "rubric": "1 Mark for explaining line of sight; 1 Mark for vertical post alignment."
    }
  },
  {
    "id": "mm3",
    "num": 3,
    "unit": "Unit 2: Patterns, Symmetry & Number Rules",
    "title": "Patterns Around Us",
    "subtitle": "Growing Patterns, Repeating Patterns, Rotational Turns & Symmetrical Borders",
    "concepts": [
      "Identifying repeating units (motifs) and generating geometric patterns.",
      "Understanding rotational turns: Half Turn (180°), Quarter Turn (90°), and Three-Quarter Turn (270°).",
      "Analyzing growing number sequences involving addition, multiplication, and geometric growth.",
      "Recognizing patterns in border designs, rangolis, and fabrics."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Patterns Around Us — 1/4 Turn Clockwise Rule</text>\n      <!-- Step 1: Up -->\n      <g transform=\"translate(80, 80)\">\n        <polygon points=\"0,-25 15,15 -15,15\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/>\n        <text x=\"0\" y=\"35\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#78350f\" text-anchor=\"middle\">Start (Up)</text>\n      </g>\n      <text x=\"145\" y=\"80\" font-size=\"18\" fill=\"#d97706\">➔</text>\n      <!-- Step 2: Right -->\n      <g transform=\"translate(210, 80)\">\n        <polygon points=\"25,0 -15,15 -15,-15\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/>\n        <text x=\"0\" y=\"35\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#78350f\" text-anchor=\"middle\">1/4 Turn (Right)</text>\n      </g>\n      <text x=\"275\" y=\"80\" font-size=\"18\" fill=\"#d97706\">➔</text>\n      <!-- Step 3: Down -->\n      <g transform=\"translate(340, 80)\">\n        <polygon points=\"0,25 15,-15 -15,-15\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/>\n        <text x=\"0\" y=\"35\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#78350f\" text-anchor=\"middle\">1/2 Turn (Down)</text>\n      </g>\n      <text x=\"405\" y=\"80\" font-size=\"18\" fill=\"#d97706\">➔</text>\n      <!-- Step 4: Left -->\n      <g transform=\"translate(470, 80)\">\n        <polygon points=\"-25,0 15,15 15,-15\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/>\n        <text x=\"0\" y=\"35\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#78350f\" text-anchor=\"middle\">3/4 Turn (Left)</text>\n      </g>\n    </svg>",
    "questions": [
      {
        "category": "Number Sequence Pattern Rules",
        "q": "Find the rule and write the next three terms for each pattern: (a) 7, 14, 21, 28, __, __, __; (b) 2, 4, 8, 16, __, __, __; (c) 1, 4, 9, 16, 25, __, __, __; (d) 100, 92, 84, 76, __, __, __.",
        "ans": "<strong>(a) 7, 14, 21, 28, ...</strong><br>\n• <em>Rule:</em> Add 7 to each term (Multiples of 7).<br>\n• Next three terms: 28 + 7 = <strong>35</strong>, 35 + 7 = <strong>42</strong>, 42 + 7 = <strong>49</strong>.<br><br>\n<strong>(b) 2, 4, 8, 16, ...</strong><br>\n• <em>Rule:</em> Multiply each term by 2 (Doubling rule).<br>\n• Next three terms: 16 × 2 = <strong>32</strong>, 32 × 2 = <strong>64</strong>, 64 × 2 = <strong>128</strong>.<br><br>\n<strong>(c) 1, 4, 9, 16, 25, ...</strong><br>\n• <em>Rule:</em> Square numbers (1×1, 2×2, 3×3, 4×4, 5×5) or consecutive odd addition (+3, +5, +7, +9, +11...).<br>\n• Next three terms: 6×6 = <strong>36</strong>, 7×7 = <strong>49</strong>, 8×8 = <strong>64</strong>.<br><br>\n<strong>(d) 100, 92, 84, 76, ...</strong><br>\n• <em>Rule:</em> Subtract 8 from each term.<br>\n• Next three terms: 76 - 8 = <strong>68</strong>, 68 - 8 = <strong>60</strong>, 60 - 8 = <strong>52</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct rule and terms for (a) & (b)",
            "marks": "2.0 M"
          },
          {
            "key": "Correct rule and terms for (c) & (d)",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Rotational Symmetry & Letter Turns",
        "q": "Which English capital letters look exactly the same after a HALF TURN (180° rotation)? Test the letters: A, H, I, M, N, O, S, X, Z.",
        "ans": "Let us test each letter by rotating it upside down by 180°:<br>\n• <strong>H</strong>: Rotates to <strong>H</strong> (Same) ✅<br>\n• <strong>I</strong>: Rotates to <strong>I</strong> (Same) ✅<br>\n• <strong>N</strong>: Rotates to <strong>N</strong> (Same) ✅<br>\n• <strong>O</strong>: Rotates to <strong>O</strong> (Same) ✅<br>\n• <strong>S</strong>: Rotates to <strong>S</strong> (Same) ✅<br>\n• <strong>X</strong>: Rotates to <strong>X</strong> (Same) ✅<br>\n• <strong>Z</strong>: Rotates to <strong>Z</strong> (Same) ✅<br><br>\n<em>Letters that change:</em><br>\n• <strong>A</strong> becomes upside down (∀) ❌<br>\n• <strong>M</strong> rotates to <strong>W</strong> ❌<br><br>\n<strong>Conclusion:</strong> The letters that look identical after a half turn are <strong>H, I, N, O, S, X, and Z</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correctly identifies all 7 valid letters",
            "marks": "2.0 M"
          },
          {
            "key": "Explains why A and M fail",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Number Patterns • Square Numbers",
        "q": "Observe the pattern of dot arrays: 1, 4, 9, 16... What are the next two numbers in this sequence? Explain the rule.",
        "ans": "<strong>Rule and Next Terms:</strong><br>\n1. <strong>Rule:</strong> These are <strong>Square Numbers</strong>, formed by multiplying a whole number by itself (or by arranging dots in perfect squares):<br>\n• 1 × 1 = 1<br>\n• 2 × 2 = 4 (difference +3)<br>\n• 3 × 3 = 9 (difference +5)<br>\n• 4 × 4 = 16 (difference +7)<br><br>\n2. <strong>Next Two Numbers:</strong><br>\n• 5 × 5 = <strong>25</strong> (16 + 9)<br>\n• 6 × 6 = <strong>36</strong> (25 + 11)<br><br>\nThe next two numbers in the sequence are <strong>25</strong> and <strong>36</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Stating the multiplication rule or consecutive odd additions",
            "marks": "1.5 M"
          },
          {
            "key": "Correctly identifying 25 and 36",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Secret Codes • Decoding Patterns",
        "q": "If the word 'MATH' is coded as 'N B U I' by shifting each letter forward by one alphabet (A→B, B→C), what is the secret word coded as 'C B M M'?",
        "ans": "<strong>Decoding the Message:</strong><br>\nThe encoding rule adds +1 letter. To decode, we reverse the rule by shifting each letter <strong>backward by one alphabet (-1)</strong>:<br>\n• C - 1 = <strong>B</strong><br>\n• B - 1 = <strong>A</strong><br>\n• M - 1 = <strong>L</strong><br>\n• M - 1 = <strong>L</strong><br><br>\nThe original secret word is <strong>BALL</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reversing the +1 rule to -1 letter shift",
            "marks": "1.0 M"
          },
          {
            "key": "Accurately decoding to 'BALL'",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Secret Spy Code Pattern",
      "text": "Rohan receives an encrypted message: 'GDKKN VNQKC'. The encryption rule shifts every English letter 1 position backward in the alphabet (e.g., B becomes A, C becomes B).",
      "question": "Decrypt Rohan's secret message using the reverse pattern rule.",
      "answer": "<strong>Decrypted Message: 'HELLO WORLD'.</strong><br><strong>Working:</strong> To reverse the encryption, we shift each letter 1 step forward in the alphabet:<br>• G ➔ H, D ➔ E, K ➔ L, K ➔ L, N ➔ O (HELLO)<br>• V ➔ W, N ➔ O, Q ➔ R, K ➔ L, C ➔ D (WORLD).",
      "rubric": "1 Mark for reverse shift rule; 1 Mark for correct decrypted phrase."
    }
  },
  {
    "id": "mm4",
    "num": 4,
    "unit": "Unit 2: Numbers up to 10,000",
    "title": "Thousands Around Us",
    "subtitle": "Place Value, Face Value, Expanded Form, Number Names & Abacus",
    "concepts": [
      "Extending 3-digit place value to 4-digit numbers: Thousands (Th), Hundreds (H), Tens (T), Ones (O).",
      "Smallest 4-digit number is 1,000; largest 4-digit number is 9,999.",
      "Place Value vs. Face Value of digits in a 4-digit number.",
      "Writing numbers in expanded form and standard form.",
      "Ordering 4-digit numbers on a number line and comparing using >, <, and =."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Place Value Chart for 4,752</text>\n      <!-- Table Header -->\n      <rect x=\"60\" y=\"45\" width=\"460\" height=\"30\" fill=\"#bbf7d0\" stroke=\"#16a34a\" stroke-width=\"1.5\"/>\n      <text x=\"117\" y=\"65\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">Thousands (Th)</text>\n      <text x=\"232\" y=\"65\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">Hundreds (H)</text>\n      <text x=\"347\" y=\"65\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">Tens (T)</text>\n      <text x=\"462\" y=\"65\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">Ones (O)</text>\n      <!-- Digits -->\n      <rect x=\"60\" y=\"75\" width=\"460\" height=\"35\" fill=\"#ffffff\" stroke=\"#16a34a\" stroke-width=\"1.5\"/>\n      <text x=\"117\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"18\" font-weight=\"900\" fill=\"#15803d\" text-anchor=\"middle\">4</text>\n      <text x=\"232\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"18\" font-weight=\"900\" fill=\"#15803d\" text-anchor=\"middle\">7</text>\n      <text x=\"347\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"18\" font-weight=\"900\" fill=\"#15803d\" text-anchor=\"middle\">5</text>\n      <text x=\"462\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"18\" font-weight=\"900\" fill=\"#15803d\" text-anchor=\"middle\">2</text>\n      <!-- Expanded Values -->\n      <rect x=\"60\" y=\"110\" width=\"460\" height=\"30\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/>\n      <text x=\"117\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">4,000</text>\n      <text x=\"232\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">700</text>\n      <text x=\"347\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">50</text>\n      <text x=\"462\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">2</text>\n    </svg>",
    "questions": [
      {
        "category": "Place Value vs. Face Value",
        "q": "In the numeral 6,835: (a) What is the place value and face value of 8? (b) What is the place value and face value of 6? (c) Write 6,835 in expanded notation and word form.",
        "ans": "<strong>(a) For digit 8:</strong><br>\n• <em>Face Value</em> = <strong>8</strong> (the digit itself).<br>\n• <em>Place Value</em> = 8 × 100 = <strong>800</strong> (Eight Hundred).<br><br>\n<strong>(b) For digit 6:</strong><br>\n• <em>Face Value</em> = <strong>6</strong>.<br>\n• <em>Place Value</em> = 6 × 1,000 = <strong>6,000</strong> (Six Thousand).<br><br>\n<strong>(c) Expanded Notation & Word Form:</strong><br>\n• <em>Expanded Form:</em> 6,000 + 800 + 30 + 5<br>\n• <em>Number Name:</em> Six thousand eight hundred thirty-five.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct place and face value for 8 & 6",
            "marks": "1.5 M"
          },
          {
            "key": "Correct expanded form and word name",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Number Formation & Comparison",
        "q": "Using the digits 3, 0, 7, and 9 only once: (a) Form the largest possible 4-digit number. (b) Form the smallest possible 4-digit number. (c) Find the difference between them.",
        "ans": "<strong>(a) Largest 4-digit number:</strong><br>\nTo make the largest number, arrange digits in descending order: <strong>9,730</strong>.<br><br>\n<strong>(b) Smallest 4-digit number:</strong><br>\nWe cannot put 0 at the thousands place (or it becomes a 3-digit number). So choose the smallest non-zero digit first (3), followed by 0, then remaining digits in ascending order: <strong>3,079</strong>.<br><br>\n<strong>(c) Difference:</strong><br>\n  &nbsp;&nbsp; 9,730<br>\n- 3,079<br>\n--------<br>\n  <strong>6,651</strong><br>\n<em>Check:</em> 3,079 + 6,651 = 9,730. Correct!",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct largest number 9,730",
            "marks": "1.0 M"
          },
          {
            "key": "Correct smallest number 3,079 (justifying 0 placement)",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate subtraction working 6,651",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Place Value & Expanded Form • 4-Digit Numbers",
        "q": "In the number 7,408: (a) Write its expanded form, (b) Find the difference between the place value and face value of the digit 4.",
        "ans": "<strong>1. Expanded Form:</strong><br>\n7,408 = <strong>7,000 + 400 + 0 + 8</strong> (or 7 Thousands + 4 Hundreds + 0 Tens + 8 Ones).<br><br>\n<strong>2. Place Value vs. Face Value of 4:</strong><br>\n• <strong>Place Value of 4:</strong> Since 4 is in the hundreds place = 4 × 100 = <strong>400</strong>.<br>\n• <strong>Face Value of 4:</strong> The digit itself = <strong>4</strong>.<br>\n• <strong>Difference:</strong> 400 - 4 = <strong>396</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct expanded form",
            "marks": "1.5 M"
          },
          {
            "key": "Place value (400), face value (4), difference (396)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Estimation • Rounding Numbers",
        "q": "A cricket stadium sold 6,874 tickets on Saturday. Round this attendance to: (a) the nearest 10, (b) the nearest 100, (c) the nearest 1,000.",
        "ans": "<strong>Rounding 6,874:</strong><br>\n• <strong>(a) Nearest 10:</strong> The ones digit is 4 (&lt; 5), so round down to <strong>6,870</strong>.<br>\n• <strong>(b) Nearest 100:</strong> The tens digit is 7 (≥ 5), so round up to <strong>6,900</strong>.<br>\n• <strong>(c) Nearest 1,000:</strong> The hundreds digit is 8 (≥ 5), so round up to <strong>7,000</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Nearest 10: 6,870",
            "marks": "1.0 M"
          },
          {
            "key": "Nearest 100: 6,900",
            "marks": "1.0 M"
          },
          {
            "key": "Nearest 1,000: 7,000",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Bank Token Display Counter",
      "text": "At a rural bank branch, token numbers run from 1,001 to 2,000. Customer Aman holds token 1,489. Customer Priya holds token 1,512.",
      "question": "How many tokens are there strictly between Aman's token and Priya's token? Who will be served first?",
      "answer": "<strong>Aman will be served first</strong> because 1,489 < 1,512.<br><strong>Tokens between them:</strong><br>1,512 - 1,489 - 1 = <strong>22 tokens</strong> strictly between them (from 1,490 to 1,511).",
      "rubric": "1 Mark for identifying Aman served first; 1 Mark for calculating 22 tokens."
    }
  },
  {
    "id": "mm5",
    "num": 5,
    "unit": "Unit 3: Operations & Arithmetic Problem Solving",
    "title": "Sharing and Measuring",
    "subtitle": "Equal Sharing, Division Concepts, Quotients, Remainders & Real-Life Grouping",
    "concepts": [
      "Division as equal sharing and repeated subtraction.",
      "Terms of division: Dividend ÷ Divisor = Quotient with Remainder.",
      "The division check rule: Dividend = (Divisor × Quotient) + Remainder, where Remainder < Divisor.",
      "Solving real-world word problems involving distribution of seeds, sweets, and books."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fdf4ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#86198f\" text-anchor=\"middle\">Equal Sharing: 23 Marbles Shared Among 4 Children</text>\n      <!-- Group 1 -->\n      <rect x=\"50\" y=\"50\" width=\"90\" height=\"70\" fill=\"#fae8ff\" stroke=\"#c026d3\" stroke-width=\"2\" rx=\"8\"/>\n      <text x=\"95\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#701a75\" text-anchor=\"middle\">Child A</text>\n      <text x=\"95\" y=\"105\" font-size=\"16\" text-anchor=\"middle\">🔴🔴🔴🔴🔴</text>\n      <!-- Group 2 -->\n      <rect x=\"160\" y=\"50\" width=\"90\" height=\"70\" fill=\"#fae8ff\" stroke=\"#c026d3\" stroke-width=\"2\" rx=\"8\"/>\n      <text x=\"205\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#701a75\" text-anchor=\"middle\">Child B</text>\n      <text x=\"205\" y=\"105\" font-size=\"16\" text-anchor=\"middle\">🔴🔴🔴🔴🔴</text>\n      <!-- Group 3 -->\n      <rect x=\"270\" y=\"50\" width=\"90\" height=\"70\" fill=\"#fae8ff\" stroke=\"#c026d3\" stroke-width=\"2\" rx=\"8\"/>\n      <text x=\"315\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#701a75\" text-anchor=\"middle\">Child C</text>\n      <text x=\"315\" y=\"105\" font-size=\"16\" text-anchor=\"middle\">🔴🔴🔴🔴🔴</text>\n      <!-- Group 4 -->\n      <rect x=\"380\" y=\"50\" width=\"90\" height=\"70\" fill=\"#fae8ff\" stroke=\"#c026d3\" stroke-width=\"2\" rx=\"8\"/>\n      <text x=\"425\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#701a75\" text-anchor=\"middle\">Child D</text>\n      <text x=\"425\" y=\"105\" font-size=\"16\" text-anchor=\"middle\">🔴🔴🔴🔴🔴</text>\n      <!-- Leftover -->\n      <circle cx=\"525\" cy=\"85\" r=\"28\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n      <text x=\"525\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"800\" fill=\"#854d0e\" text-anchor=\"middle\">Leftover</text>\n      <text x=\"525\" y=\"100\" font-size=\"14\" text-anchor=\"middle\">🔴🔴🔴</text>\n      <text x=\"290\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#86198f\" text-anchor=\"middle\">23 = (4 × 5) + 3 ➔ Quotient = 5, Remainder = 3</text>\n    </svg>",
    "questions": [
      {
        "category": "Division with Remainder & Verification",
        "q": "A farmer packs 148 oranges equally into boxes that hold 6 oranges each. (a) How many full boxes can he pack? (b) How many oranges are left over? (c) Verify your answer using the division verification rule.",
        "ans": "<strong>Step 1: Perform the division:</strong><br>\nWe need to calculate 148 ÷ 6.<br>\n• Divide 14 by 6: 6 × 2 = 12. Remainder = 14 - 12 = 2.<br>\n• Bring down 8 to make 28.<br>\n• Divide 28 by 6: 6 × 4 = 24. Remainder = 28 - 24 = <strong>4</strong>.<br>\n• <strong>Quotient = 24, Remainder = 4.</strong><br><br>\n<strong>(a)</strong> The farmer can pack <strong>24 full boxes</strong>.<br>\n<strong>(b)</strong> <strong>4 oranges</strong> are left over.<br><br>\n<strong>(c) Verification:</strong><br>\n• Formula: <em>Dividend = (Divisor × Quotient) + Remainder</em><br>\n• RHS = (6 × 24) + 4 = 144 + 4 = <strong>148</strong>.<br>\n• LHS = Dividend = 148. Verified successfully!",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct division steps showing Quotient 24 & Remainder 4",
            "marks": "1.5 M"
          },
          {
            "key": "Accurate verification formula and arithmetic proof",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Real-Life Grouping Word Problem",
        "q": "In a school library, there are 215 storybooks. The librarian wants to place an equal number of books on 7 empty shelves. How many books will be placed on each shelf, and how many additional books are needed to fill the last shelf completely?",
        "ans": "<strong>Step 1: Divide books equally:</strong><br>\nCalculate 215 ÷ 7.<br>\n• 7 × 30 = 210.<br>\n• 215 - 210 = 5 remainder.<br>\n• So, each shelf gets <strong>30 books</strong>.<br>\n• 5 books remain on the last shelf.<br><br>\n<strong>Step 2: Additional books needed for full shelf:</strong><br>\n• Each shelf needs 31 books if all shelves are equally full.<br>\n• Currently, 5 books are left.<br>\n• Additional books needed = 7 - 5 = <strong>2 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct quotient 30 books per shelf",
            "marks": "1.5 M"
          },
          {
            "key": "Correct calculation of 2 additional books needed",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Fraction of a Collection • Word Problem",
        "q": "A fruit vendor has a basket of 36 mangoes. He sells 1/4 of them in the morning and 1/2 of them in the afternoon. (a) How many mangoes did he sell in total? (b) How many mangoes are left?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>\nTotal mangoes = 36<br><br>\n1. <strong>Morning Sales:</strong><br>\n1/4 of 36 = 36 ÷ 4 = <strong>9 mangoes</strong>.<br><br>\n2. <strong>Afternoon Sales:</strong><br>\n1/2 of 36 = 36 ÷ 2 = <strong>18 mangoes</strong>.<br><br>\n3. <strong>Total Sold:</strong><br>\n9 + 18 = <strong>27 mangoes</strong>.<br><br>\n4. <strong>Mangoes Left:</strong><br>\n36 - 27 = <strong>9 mangoes</strong> (which is 1/4 of the basket).",
        "marks": 3,
        "rubric": [
          {
            "key": "Morning calculation (9) and afternoon (18)",
            "marks": "1.5 M"
          },
          {
            "key": "Total sold (27) and remaining mangoes (9)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Equivalent Fractions • Shading Models",
        "q": "Show that 2/4 and 4/8 are equivalent to 1/2 using a rectangular strip model.",
        "ans": "<strong>Demonstration of Equivalent Fractions:</strong><br>\nTake three identical strips of paper of length 12 cm:<br>\n1. <strong>Strip 1 (1/2):</strong> Divide into 2 equal parts of 6 cm each. Shade 1 part. Shaded length = <strong>6 cm</strong>.<br>\n2. <strong>Strip 2 (2/4):</strong> Divide into 4 equal parts of 3 cm each. Shade 2 parts. Shaded length = 2 × 3 cm = <strong>6 cm</strong>.<br>\n3. <strong>Strip 3 (4/8):</strong> Divide into 8 equal parts of 1.5 cm each. Shade 4 parts. Shaded length = 4 × 1.5 cm = <strong>6 cm</strong>.<br><br>\nSince all three shaded portions cover the exact same physical length of 6 cm, <strong>1/2 = 2/4 = 4/8</strong>. They represent the exact same fraction of the whole.",
        "marks": 2,
        "rubric": [
          {
            "key": "Equal partition measurement of strips",
            "marks": "1.0 M"
          },
          {
            "key": "Equal shaded length proving equivalence",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "School Van Seating Arrangement",
      "text": "A school organizes an excursion for 58 students. Each school cab can carry a maximum of 8 students safely.",
      "question": "How many cabs must be booked so that EVERY student gets a seat?",
      "answer": "<strong>Answer: 8 cabs must be booked.</strong><br><strong>Explanation:</strong> 58 ÷ 8 = 7 with a remainder of 2 students.<br>7 cabs can only seat 7 × 8 = 56 students. The remaining 2 students cannot be left behind, so 1 more cab must be hired.<br>Total cabs required = 7 + 1 = <strong>8 cabs</strong>.",
      "rubric": "1 Mark for division quotient 7 with remainder 2; 1 Mark for practical round-up to 8 cabs."
    }
  },
  {
    "id": "mm6",
    "num": 6,
    "unit": "Unit 3: Measurement & Metric Conversions",
    "title": "Measuring Length",
    "subtitle": "Centimetres, Metres, Kilometres, Conversions & Perimeter of Shapes",
    "concepts": [
      "Metric units of length: millimetre (mm), centimetre (cm), metre (m), and kilometre (km).",
      "Key conversion relationships: 1 m = 100 cm; 1 km = 1,000 m; 1 cm = 10 mm.",
      "Measuring curved paths using a string and ruler.",
      "Calculating perimeter (total boundary length) by summing the lengths of all outer sides."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#ecfeff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0e7490\" text-anchor=\"middle\">Perimeter Calculation for a Flower Garden</text>\n      <!-- Garden Shape -->\n      <polygon points=\"180,60 400,60 400,120 180,120\" fill=\"#cffafe\" stroke=\"#0891b2\" stroke-width=\"2.5\"/>\n      <text x=\"290\" y=\"52\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#155e75\" text-anchor=\"middle\">Length = 12 m</text>\n      <text x=\"290\" y=\"136\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#155e75\" text-anchor=\"middle\">Length = 12 m</text>\n      <text x=\"145\" y=\"95\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#155e75\" text-anchor=\"middle\">Width = 5 m</text>\n      <text x=\"435\" y=\"95\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#155e75\" text-anchor=\"middle\">Width = 5 m</text>\n      <text x=\"290\" y=\"93\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0891b2\" text-anchor=\"middle\">Perimeter = 12 + 5 + 12 + 5 = 34 m</text>\n    </svg>",
    "questions": [
      {
        "category": "Metric Unit Conversions",
        "q": "Convert the following: (a) 4 metres 65 centimetres into cm; (b) 7,500 metres into kilometres and metres; (c) 8 kilometres 40 metres into metres.",
        "ans": "<strong>(a) 4 m 65 cm into cm:</strong><br>\n• Since 1 m = 100 cm, 4 m = 4 × 100 = 400 cm.<br>\n• Total = 400 cm + 65 cm = <strong>465 cm</strong>.<br><br>\n<strong>(b) 7,500 m into km and m:</strong><br>\n• Since 1,000 m = 1 km, divide 7,500 by 1,000.<br>\n• 7,500 m = 7,000 m + 500 m = <strong>7 km 500 m</strong>.<br><br>\n<strong>(c) 8 km 40 m into m:</strong><br>\n• Since 1 km = 1,000 m, 8 km = 8 × 1,000 = 8,000 m.<br>\n• Total = 8,000 m + 40 m = <strong>8,040 m</strong> (be careful not to write 8,400 m!).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct conversion for (a)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct conversion for (b)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct conversion for (c) with zero placeholder",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Perimeter Word Problem",
        "q": "A rectangular playground is 35 metres long and 20 metres wide. An athlete runs around the boundary 4 times every morning. What is the total distance run by the athlete in metres and kilometres?",
        "ans": "<strong>Step 1: Calculate the perimeter of the playground:</strong><br>\n• Formula: <em>Perimeter = 2 × (Length + Width)</em><br>\n• Perimeter = 2 × (35 m + 20 m) = 2 × 55 m = <strong>110 metres</strong>.<br>\n(One full round = 110 m).<br><br>\n<strong>Step 2: Calculate distance for 4 rounds:</strong><br>\n• Total distance = 4 × 110 m = <strong>440 metres</strong>.<br><br>\n<strong>Step 3: Convert into kilometres:</strong><br>\n• 440 m = 440 ÷ 1,000 = <strong>0.44 km</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Perimeter calculation of 110 m",
            "marks": "1.5 M"
          },
          {
            "key": "Total 4 rounds distance 440 m and km conversion",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Geometry • Perimeter Calculation",
        "q": "A rectangular school playground is 45 metres long and 30 metres wide. (a) What is its perimeter? (b) If an athlete runs 3 complete rounds around it, what total distance does she run?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>\nLength (l) = 45 m, Breadth (b) = 30 m<br><br>\n1. <strong>Perimeter of the Playground:</strong><br>\nPerimeter = 2 × (Length + Breadth)<br>\n= 2 × (45 m + 30 m) = 2 × 75 m = <strong>150 metres</strong>.<br><br>\n2. <strong>Total Distance for 3 Rounds:</strong><br>\nDistance = 3 × Perimeter = 3 × 150 m = <strong>450 metres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Perimeter formula and correct answer (150 m)",
            "marks": "1.5 M"
          },
          {
            "key": "Multiplication by 3 rounds (450 m)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Unit Conversions • Metres & Kilometres",
        "q": "Convert: (a) 4,250 metres into kilometres and metres, (b) 7 kilometres 85 metres into metres.",
        "ans": "<strong>Conversions (1 km = 1,000 m):</strong><br>\n• <strong>(a) 4,250 m:</strong><br>\n4,250 ÷ 1,000 = <strong>4 km and 250 m</strong>.<br><br>\n• <strong>(b) 7 km 85 m:</strong><br>\n(7 × 1,000 m) + 85 m = 7,000 m + 85 m = <strong>7,085 m</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): 4 km 250 m",
            "marks": "1.0 M"
          },
          {
            "key": "Part (b): 7,085 m",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "School Boundary Fencing Budget",
      "text": "The school management needs to put a wire fence around a square herb garden measuring 15 metres on each side. The fencing contractor charges ₹40 per metre of wire.",
      "question": "Calculate: (a) The total length of wire needed for 1 round of fence, (b) The total cost of fencing.",
      "answer": "<strong>(a) Length of wire:</strong><br>Perimeter of square garden = 4 × side = 4 × 15 m = <strong>60 metres</strong>.<br><strong>(b) Total Cost:</strong><br>Cost = 60 m × ₹40/m = <strong>₹2,400</strong>.",
      "rubric": "1 Mark for perimeter 60 m; 1 Mark for multiplying rate to get ₹2,400."
    }
  },
  {
    "id": "mm7",
    "num": 7,
    "unit": "Unit 3: Community Projects & Applied Arithmetic",
    "title": "The Cleanest Village",
    "subtitle": "Data Organization, Tally Marks, Environmental Cleanliness Drives & Applied Math",
    "concepts": [
      "Using tally marks (groups of 5: ||||) to record counts efficiently.",
      "Solving multi-step addition and subtraction problems based on community waste collection.",
      "Calculating recyclable waste weights and earnings from community recycling.",
      "Promoting civic responsibility through mathematical measurement."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f7fee7\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#3f6212\" text-anchor=\"middle\">Waste Collection Tally Chart (Mawlynnong Village Drive)</text>\n      <!-- Header -->\n      <rect x=\"70\" y=\"45\" width=\"440\" height=\"28\" fill=\"#d9f99d\" stroke=\"#65a30d\" stroke-width=\"1.5\"/>\n      <text x=\"140\" y=\"64\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#365314\" text-anchor=\"middle\">Item Collected</text>\n      <text x=\"290\" y=\"64\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#365314\" text-anchor=\"middle\">Tally Marks</text>\n      <text x=\"440\" y=\"64\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#365314\" text-anchor=\"middle\">Total Count</text>\n      <!-- Row 1 -->\n      <rect x=\"70\" y=\"73\" width=\"440\" height=\"28\" fill=\"#ffffff\" stroke=\"#65a30d\" stroke-width=\"1\"/>\n      <text x=\"140\" y=\"92\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"#1e293b\" text-anchor=\"middle\">Plastic Bottles</text>\n      <text x=\"290\" y=\"92\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#4d7c0f\" text-anchor=\"middle\">卌 卌 卌 ||</text>\n      <text x=\"440\" y=\"92\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#365314\" text-anchor=\"middle\">17</text>\n      <!-- Row 2 -->\n      <rect x=\"70\" y=\"101\" width=\"440\" height=\"28\" fill=\"#f7fee7\" stroke=\"#65a30d\" stroke-width=\"1\"/>\n      <text x=\"140\" y=\"120\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"#1e293b\" text-anchor=\"middle\">Tin Cans</text>\n      <text x=\"290\" y=\"120\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#4d7c0f\" text-anchor=\"middle\">卌 卌 |||</text>\n      <text x=\"440\" y=\"120\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#365314\" text-anchor=\"middle\">13</text>\n      <!-- Row 3 -->\n      <rect x=\"70\" y=\"129\" width=\"440\" height=\"25\" fill=\"#ecfccb\" stroke=\"#65a30d\" stroke-width=\"1\"/>\n      <text x=\"215\" y=\"146\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#365314\" text-anchor=\"middle\">Total Recyclables</text>\n      <text x=\"440\" y=\"146\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"900\" fill=\"#365314\" text-anchor=\"middle\">30 Items</text>\n    </svg>",
    "questions": [
      {
        "category": "Tally Chart Interpretation",
        "q": "During a clean-up campaign, children recorded dry leaves baskets using tally marks: Team Red gathered '卌 卌 卌 卌 |', Team Blue gathered '卌 卌 卌 |||', and Team Green gathered '卌 卌 卌 卌 卌'. (a) How many baskets did each team gather? (b) Which team collected the most? (c) What is the total count of baskets?",
        "ans": "<strong>(a) Basket counts from tally marks:</strong><br>\n• <strong>Team Red:</strong> 4 bundles of 5 + 1 = (4 × 5) + 1 = <strong>21 baskets</strong>.<br>\n• <strong>Team Blue:</strong> 3 bundles of 5 + 3 = (3 × 5) + 3 = <strong>18 baskets</strong>.<br>\n• <strong>Team Green:</strong> 5 bundles of 5 = (5 × 5) = <strong>25 baskets</strong>.<br><br>\n<strong>(b) Maximum collection:</strong><br>\n<strong>Team Green</strong> collected the most with 25 baskets.<br><br>\n<strong>(c) Total baskets collected:</strong><br>\nTotal = 21 + 18 + 25 = <strong>64 baskets</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct counts for all three teams",
            "marks": "1.5 M"
          },
          {
            "key": "Correct identification of winner and total sum 64",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Weight & Community Cleanliness • Tally Arithmetic",
        "q": "In a village cleanliness drive, four teams collected wet waste: Team A collected 42 kg 500 g, Team B collected 38 kg 250 g, Team C collected 51 kg 750 g, and Team D collected 47 kg. What was the total weight of wet waste collected?",
        "ans": "<strong>Column Addition of Weight:</strong><br>\n&nbsp;&nbsp;kg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; g<br>\n&nbsp;&nbsp;42 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 500<br>\n+ 38 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 250<br>\n+ 51 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 750<br>\n+ 47 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 000<br>\n-------------------<br>\nSum of grams = 500 + 250 + 750 + 0 = 1,500 g = <strong>1 kg 500 g</strong>.<br>\nSum of kg = 42 + 38 + 51 + 47 + 1 (carry) = <strong>179 kg</strong>.<br><br>\n<strong>Total wet waste collected = 179 kg 500 g</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct column alignment of kg and g",
            "marks": "1.0 M"
          },
          {
            "key": "Gram sum carry-over (1,500 g = 1 kg 500 g)",
            "marks": "1.0 M"
          },
          {
            "key": "Final sum: 179 kg 500 g",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Capacity & Conservation • Water Math",
        "q": "A leaky public tap wastes 150 mL of clean drinking water every minute. How many litres of water are wasted if the tap is left leaking for 2 hours?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>\n1. <strong>Wastage in 1 hour (60 minutes):</strong><br>\n150 mL × 60 = 9,000 mL.<br><br>\n2. <strong>Wastage in 2 hours:</strong><br>\n9,000 mL × 2 = 18,000 mL.<br><br>\n3. <strong>Convert to Litres (1 L = 1,000 mL):</strong><br>\n18,000 ÷ 1,000 = <strong>18 Litres</strong>.<br><br>\nIn 2 hours, <strong>18 litres</strong> of precious drinking water are wasted.",
        "marks": 3,
        "rubric": [
          {
            "key": "Calculating minutes in 2 hours (120 mins)",
            "marks": "1.0 M"
          },
          {
            "key": "Total mL calculation (18,000 mL)",
            "marks": "1.0 M"
          },
          {
            "key": "Conversion to litres (18 L)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practical Arithmetic • Garbage Sorting",
        "q": "A school canteen produced 65 kg of garbage in a week. If 3/5 of it was biodegradable food waste and the rest was recyclable plastic and paper, find the weight of recyclable waste.",
        "ans": "<strong>Fraction & Weight Solution:</strong><br>\nTotal garbage = 65 kg<br><br>\n1. <strong>Weight of Biodegradable Food Waste:</strong><br>\n3/5 of 65 kg = (65 ÷ 5) × 3 = 13 × 3 = <strong>39 kg</strong>.<br><br>\n2. <strong>Weight of Recyclable Waste:</strong><br>\n65 kg - 39 kg = <strong>26 kg</strong>.<br>\n(Alternatively, 1 - 3/5 = 2/5; 2/5 of 65 = 26 kg).",
        "marks": 2,
        "rubric": [
          {
            "key": "Calculating food waste fraction (39 kg)",
            "marks": "1.0 M"
          },
          {
            "key": "Deducting to find recyclable waste (26 kg)",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Recycling Waste Funds for Village Library",
      "text": "The village panchayat collected 120 kg of old newspapers and 45 kg of cardboard boxes. The scrap dealer buys newspapers at ₹14 per kg and cardboard at ₹10 per kg.",
      "question": "How much total money did the village raise for their new reading room?",
      "answer": "<strong>Working:</strong><br>• Money from newspapers = 120 kg × ₹14 = <strong>₹1,680</strong>.<br>• Money from cardboard = 45 kg × ₹10 = <strong>₹450</strong>.<br>• Total funds raised = ₹1,680 + ₹450 = <strong>₹2,130</strong>.",
      "rubric": "1 Mark for individual product calculations; 1 Mark for total ₹2,130."
    }
  },
  {
    "id": "mm8",
    "num": 8,
    "unit": "Unit 3: Weight and Capacity Measurement",
    "title": "Weigh it, Pour it",
    "subtitle": "Grams, Kilograms, Millilitres, Litres, Balance Scales & Liquid Capacities",
    "concepts": [
      "Standard units of mass: Gram (g) and Kilogram (kg); 1 kg = 1,000 g.",
      "Standard units of capacity: Millilitre (ml) and Litre (l); 1 l = 1,000 ml.",
      "Balancing pans: Understanding equilibrium on a two-pan balance beam.",
      "Comparing light and heavy objects; estimating volume in daily household containers."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fef2f2\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Balancing a 1 kg Weight with Smaller Weights</text>\n      <!-- Scale Beam -->\n      <line x1=\"140\" y1=\"65\" x2=\"440\" y2=\"65\" stroke=\"#7f1d1d\" stroke-width=\"4\"/>\n      <polygon points=\"290,65 280,110 300,110\" fill=\"#991b1b\"/>\n      <rect x=\"260\" y=\"110\" width=\"60\" height=\"15\" fill=\"#7f1d1d\" rx=\"3\"/>\n      <!-- Left Pan -->\n      <line x1=\"180\" y1=\"65\" x2=\"160\" y2=\"105\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n      <line x1=\"180\" y1=\"65\" x2=\"200\" y2=\"105\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n      <path d=\"M150 105 Q180 125 210 105 Z\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n      <rect x=\"165\" y=\"80\" width=\"30\" height=\"25\" fill=\"#b91c1c\" rx=\"3\"/>\n      <text x=\"180\" y=\"97\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">1 kg</text>\n      <!-- Right Pan -->\n      <line x1=\"400\" y1=\"65\" x2=\"380\" y2=\"105\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n      <line x1=\"400\" y1=\"65\" x2=\"420\" y2=\"105\" stroke=\"#991b1b\" stroke-width=\"2\"/>\n      <path d=\"M370 105 Q400 125 430 105 Z\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n      <rect x=\"375\" y=\"85\" width=\"22\" height=\"20\" fill=\"#ef4444\" rx=\"2\"/>\n      <text x=\"386\" y=\"99\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">500g</text>\n      <rect x=\"402\" y=\"85\" width=\"22\" height=\"20\" fill=\"#ef4444\" rx=\"2\"/>\n      <text x=\"413\" y=\"99\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">500g</text>\n      <text x=\"290\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#b91c1c\" text-anchor=\"middle\">1 kg = 500 g + 500 g (Equilibrium Balanced)</text>\n    </svg>",
    "questions": [
      {
        "category": "Mass & Capacity Metric Arithmetic",
        "q": "Solve: (a) A grocer has a 5 kg bag of sugar. He sells 1 kg 750 g. How much sugar remains? (b) A jug holds 2 litres of mango juice. If each glass holds 250 ml, how many glasses can be filled?",
        "ans": "<strong>(a) Remaining Sugar:</strong><br>\n• Convert 5 kg to grams: 5 kg = 5,000 g.<br>\n• Convert 1 kg 750 g to grams: 1,000 g + 750 g = 1,750 g.<br>\n• Subtraction: 5,000 g - 1,750 g = <strong>3,250 g</strong>.<br>\n• Converting back to kg and g: <strong>3 kg 250 g</strong> of sugar remains.<br><br>\n<strong>(b) Number of glasses of mango juice:</strong><br>\n• 1 litre = 1,000 ml, so 2 litres = 2 × 1,000 = <strong>2,000 ml</strong>.<br>\n• Capacity of 1 glass = 250 ml.<br>\n• Number of glasses = 2,000 ÷ 250 = <strong>8 glasses</strong>.<br>\n<em>Check:</em> 8 × 250 ml = 2,000 ml = 2 l.",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct subtraction for sugar (3 kg 250 g)",
            "marks": "2.0 M"
          },
          {
            "key": "Correct division for juice glasses (8 glasses)",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Measurement of Capacity • Mixing Solutions",
        "q": "A doctor prescribes 5 mL of cough syrup three times a day to a patient for 6 days. (a) How much syrup does the patient consume in one day? (b) Will a 100 mL bottle be sufficient for the full course?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>\nDosage per intake = 5 mL<br><br>\n1. <strong>Daily Consumption:</strong><br>\n3 doses × 5 mL = <strong>15 mL per day</strong>.<br><br>\n2. <strong>Total Consumption in 6 Days:</strong><br>\n15 mL × 6 = <strong>90 mL</strong>.<br><br>\n3. <strong>Sufficiency of Bottle:</strong><br>\nThe bottle contains 100 mL, and the patient requires 90 mL.<br>\nSince 100 mL &gt; 90 mL, <strong>yes, the 100 mL bottle will be sufficient</strong> (with 10 mL left over).",
        "marks": 3,
        "rubric": [
          {
            "key": "Daily dosage calculation (15 mL)",
            "marks": "1.0 M"
          },
          {
            "key": "Total 6-day requirement (90 mL)",
            "marks": "1.0 M"
          },
          {
            "key": "Comparison and positive conclusion (100 > 90)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Weight Balancing • Pan Scales",
        "q": "You have only three standard weights: 100 g, 250 g, and 500 g. How will you measure exactly 350 g of flour on a two-pan balance in one step?",
        "ans": "<strong>Pan Balance Arrangement:</strong><br>\nTo measure 350 g:<br>\n• Place the <strong>100 g</strong> and <strong>250 g</strong> weights together in the left pan.<br>\n• Total weight in left pan = 100 g + 250 g = <strong>350 g</strong>.<br>\n• Pour flour into the right pan until both pans balance horizontally.<br>\nThe weighed flour will be exactly <strong>350 g</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identifying 100 g + 250 g combination",
            "marks": "1.0 M"
          },
          {
            "key": "Explaining balance equilibrium",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Capacity Arithmetic • Milk Delivery",
        "q": "A milkman has a 20-litre milk can. In the morning, he sells 4 L 750 mL to House A and 6 L 500 mL to House B. How much milk is still left in his can?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>\n1. <strong>Total Milk Sold:</strong><br>\n&nbsp;&nbsp;4 L 750 mL + 6 L 500 mL = 10 L 1,250 mL = <strong>11 L 250 mL</strong>.<br><br>\n2. <strong>Milk Left in the 20 L Can:</strong><br>\n&nbsp;&nbsp;20 L 000 mL - 11 L 250 mL<br>\n= 19 L 1,000 mL - 11 L 250 mL = <strong>8 L 750 mL</strong>.<br><br>\nThe milkman has <strong>8 litres 750 millilitres</strong> of milk left.",
        "marks": 3,
        "rubric": [
          {
            "key": "Adding milk sold (11 L 250 mL)",
            "marks": "1.5 M"
          },
          {
            "key": "Borrowing and subtracting from 20 L (8 L 750 mL)",
            "marks": "1.5 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Measuring Cough Syrup Doses",
      "text": "Doctor advises a patient to take 5 ml of cough syrup three times a day for 7 days. The chemist gives a bottle containing 100 ml of syrup.",
      "question": "Is the 100 ml bottle sufficient for the complete course? How much syrup is used, and how much is left over?",
      "answer": "<strong>Working:</strong><br>• Daily dosage = 5 ml × 3 times = <strong>15 ml per day</strong>.<br>• Dosage for 7 days = 15 ml × 7 = <strong>105 ml</strong>.<br><strong>Conclusion:</strong><br>No, the 100 ml bottle is <em>NOT sufficient</em> because the patient needs 105 ml (short by 5 ml).",
      "rubric": "1 Mark for calculating 105 ml total required; 1 Mark for concluding 100 ml is not sufficient."
    }
  },
  {
    "id": "mm9",
    "num": 9,
    "unit": "Unit 3: Multiplication Strategies & Tables",
    "title": "Equal Groups",
    "subtitle": "Multiplication as Arrays, Distributive Break-up, Box Method & Tables up to 15",
    "concepts": [
      "Multiplication concepts: multiplicand × multiplier = product.",
      "Building multiplication tables using known facts (e.g., table of 7 = table of 5 + table of 2).",
      "Using the box / grid multiplication method for 2-digit by 1-digit and 2-digit numbers.",
      "Solving multi-step real-world problems involving rows and columns of objects."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Box Multiplication Method: 24 × 13</text>\n      <!-- Grid -->\n      <rect x=\"140\" y=\"45\" width=\"300\" height=\"75\" fill=\"#ffffff\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n      <line x1=\"290\" y1=\"45\" x2=\"290\" y2=\"120\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n      <line x1=\"140\" y1=\"82\" x2=\"440\" y2=\"82\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n      <!-- Header labels -->\n      <text x=\"215\" y=\"40\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">20</text>\n      <text x=\"365\" y=\"40\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">4</text>\n      <text x=\"125\" y=\"67\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">10</text>\n      <text x=\"125\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">3</text>\n      <!-- Box Values -->\n      <text x=\"215\" y=\"68\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\" text-anchor=\"middle\">200</text>\n      <text x=\"365\" y=\"68\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\" text-anchor=\"middle\">40</text>\n      <text x=\"215\" y=\"106\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\" text-anchor=\"middle\">60</text>\n      <text x=\"365\" y=\"106\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#1d4ed8\" text-anchor=\"middle\">12</text>\n      <text x=\"290\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Sum = 200 + 40 + 60 + 12 = 312</text>\n    </svg>",
    "questions": [
      {
        "category": "Multiplication Strategy & Break-up",
        "q": "Show how to construct the multiplication table of 8 using the tables of 5 and 3. Write out the values for 8 × 1 up to 8 × 6.",
        "ans": "By the distributive property of multiplication:<br>\n8 × n = (5 + 3) × n = (5 × n) + (3 × n).<br><br>\n• <strong>8 × 1</strong> = (5 × 1) + (3 × 1) = 5 + 3 = <strong>8</strong><br>\n• <strong>8 × 2</strong> = (5 × 2) + (3 × 2) = 10 + 6 = <strong>16</strong><br>\n• <strong>8 × 3</strong> = (5 × 3) + (3 × 3) = 15 + 9 = <strong>24</strong><br>\n• <strong>8 × 4</strong> = (5 × 4) + (3 × 4) = 20 + 12 = <strong>32</strong><br>\n• <strong>8 × 5</strong> = (5 × 5) + (3 × 5) = 25 + 15 = <strong>40</strong><br>\n• <strong>8 × 6</strong> = (5 × 6) + (3 × 6) = 30 + 18 = <strong>48</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "Explains distributive break-up (5 + 3)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct step-by-step table construction",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Two-Digit Multiplication Word Problem",
        "q": "A cinema hall has 28 rows of seats, and each row has 15 seats. During a premiere show, all seats are occupied except 12 seats. How many people are watching the movie?",
        "ans": "<strong>Step 1: Calculate total seating capacity:</strong><br>\nTotal seats = 28 rows × 15 seats/row.<br>\n• Using break-up: 28 × 15 = 28 × (10 + 5) = (28 × 10) + (28 × 5)<br>\n• 28 × 10 = 280<br>\n• 28 × 5 = 140<br>\n• Total seats = 280 + 140 = <strong>420 seats</strong>.<br><br>\n<strong>Step 2: Subtract empty seats:</strong><br>\n• Empty seats = 12<br>\n• People watching = 420 - 12 = <strong>408 people</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate multiplication 28 × 15 = 420",
            "marks": "2.0 M"
          },
          {
            "key": "Correct subtraction giving 408 people",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Multiplication Algorithm • 3-Digit by 2-Digit",
        "q": "A school library buys 24 copies of an encyclopedia. If each encyclopedia costs ₹345, calculate the total bill amount using the standard multiplication method.",
        "ans": "<strong>Step-by-Step Multiplication:</strong><br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 4 5<br>\n&nbsp;&nbsp;&nbsp;&nbsp;× &nbsp; 2 4<br>\n-----------<br>\n&nbsp;&nbsp;&nbsp;&nbsp;1 3 8 0 &nbsp;&nbsp;(345 × 4)<br>\n+ &nbsp; 6 9 0 0 &nbsp;&nbsp;(345 × 20)<br>\n-----------<br>\n&nbsp;&nbsp;&nbsp;&nbsp;8 2 8 0<br><br>\nThe total bill amount is <strong>₹8,280</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Partial product 1 (345 × 4 = 1380)",
            "marks": "1.0 M"
          },
          {
            "key": "Partial product 2 (345 × 20 = 6900)",
            "marks": "1.0 M"
          },
          {
            "key": "Final total: ₹8,280",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Math • Multiples of 10 and 100",
        "q": "Calculate mentally using place value patterns:<br>(a) 70 × 60<br>(b) 125 × 40<br>(c) 48 × 25",
        "ans": "<strong>Mental Calculation Strategies:</strong><br>\n• <strong>(a) 70 × 60:</strong><br>\nMultiply the non-zero digits: 7 × 6 = 42, then attach two zeroes: <strong>4,200</strong>.<br><br>\n• <strong>(b) 125 × 40:</strong><br>\nThink of (125 × 4) × 10 = 500 × 10 = <strong>5,000</strong>.<br><br>\n• <strong>(c) 48 × 25:</strong><br>\nSince 25 = 100 ÷ 4, we divide 48 by 4 and multiply by 100: (48 ÷ 4) × 100 = 12 × 100 = <strong>1,200</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) 4,200",
            "marks": "1.0 M"
          },
          {
            "key": "(b) 5,000",
            "marks": "1.0 M"
          },
          {
            "key": "(c) 1,200",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Tree Plantation Drive Rows",
      "text": "The Forest Department plants 36 saplings in each row across 25 parallel strips. The cost of protecting each sapling with a bamboo guard is ₹50.",
      "question": "How many total saplings are planted, and what is the total cost of bamboo guards for all saplings?",
      "answer": "<strong>Step 1: Total saplings:</strong><br>36 × 25 = 36 × (100 ÷ 4) = 3,600 ÷ 4 = <strong>900 saplings</strong>.<br><strong>Step 2: Total cost:</strong><br>900 × ₹50 = <strong>₹45,000</strong>.",
      "rubric": "1 Mark for 900 saplings; 1 Mark for ₹45,000."
    }
  },
  {
    "id": "mm10",
    "num": 10,
    "unit": "Unit 4: Wildlife Conservation & Multi-Digit Operations",
    "title": "Elephants, Tigers, and Leopards",
    "subtitle": "Wildlife Census Data, Addition & Subtraction with Regrouping & Comparison",
    "concepts": [
      "Real-world data handling from wildlife census across Indian National Parks.",
      "Multi-digit addition and subtraction involving regrouping (carrying and borrowing) across thousands.",
      "Estimating sums and differences to the nearest ten and nearest hundred.",
      "Developing environmental appreciation through numerical analysis."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Wildlife Sanctuary Census Comparison</text>\n      <!-- Bar Chart -->\n      <rect x=\"80\" y=\"55\" width=\"90\" height=\"65\" fill=\"#34d399\" stroke=\"#059669\" stroke-width=\"1.5\"/>\n      <text x=\"125\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"900\" fill=\"#064e3b\" text-anchor=\"middle\">1,245</text>\n      <text x=\"125\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Elephants</text>\n      <rect x=\"245\" y=\"75\" width=\"90\" height=\"45\" fill=\"#f59e0b\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\n      <text x=\"290\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"900\" fill=\"#78350f\" text-anchor=\"middle\">680</text>\n      <text x=\"290\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Leopards</text>\n      <rect x=\"410\" y=\"95\" width=\"90\" height=\"25\" fill=\"#f87171\" stroke=\"#dc2626\" stroke-width=\"1.5\"/>\n      <text x=\"455\" y=\"112\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"900\" fill=\"#7f1d1d\" text-anchor=\"middle\">315</text>\n      <text x=\"455\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Tigers</text>\n      <text x=\"290\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#047857\" text-anchor=\"middle\">Total Animals Counted = 1,245 + 680 + 315 = 2,240</text>\n    </svg>",
    "questions": [
      {
        "category": "Multi-Digit Addition & Subtraction",
        "q": "In Corbett National Park, the wildlife census recorded 1,245 elephants, 680 leopards, and 315 tigers. (a) What is the total population of these three animals? (b) How many more elephants are there than tigers and leopards combined?",
        "ans": "<strong>(a) Total Population:</strong><br>\n&nbsp;&nbsp; 1,245<br>\n+ &nbsp; 680<br>\n+ &nbsp; 315<br>\n-------<br>\n  <strong>2,240 total animals</strong>.<br><br>\n<strong>(b) Comparison with combined tigers and leopards:</strong><br>\n• Tigers + Leopards = 315 + 680 = <strong>995 animals</strong>.<br>\n• Difference from elephants = 1,245 - 995 = <strong>250</strong>.<br>\n• There are <strong>250 more elephants</strong> than tigers and leopards combined.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct addition of 2,240 with regrouping",
            "marks": "1.5 M"
          },
          {
            "key": "Correct subtraction giving 250 difference",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Long Division • Quotient and Remainder",
        "q": "Divide 487 by 6. Show the dividend, divisor, quotient, and remainder. Verify your answer using the division verification formula.",
        "ans": "<strong>Step-by-Step Long Division:</strong><br>\n487 ÷ 6<br>\n• 48 ÷ 6 = 8 (6 × 8 = 48), remainder 0.<br>\n• Bring down 7.<br>\n• 7 ÷ 6 = 1 (6 × 1 = 6), remainder 1.<br><br>\n<strong>Components:</strong><br>\n• <strong>Dividend:</strong> 487<br>\n• <strong>Divisor:</strong> 6<br>\n• <strong>Quotient:</strong> 81<br>\n• <strong>Remainder:</strong> 1<br><br>\n<strong>Verification Formula:</strong><br>\nDividend = (Divisor × Quotient) + Remainder<br>\n= (6 × 81) + 1 = 486 + 1 = <strong>487</strong> (Verified).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct division step yielding Q = 81, R = 1",
            "marks": "1.5 M"
          },
          {
            "key": "Identification of components and successful verification",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Real-Life Division • Safari Jeeps",
        "q": "A national park has 125 tourists waiting for a tiger safari. Each safari jeep can seat a maximum of 6 tourists. (a) How many jeeps will be completely full? (b) How many total jeeps are needed so that no tourist is left behind?",
        "ans": "<strong>Step-by-Step Word Problem:</strong><br>\nTotal tourists = 125, Capacity per jeep = 6<br><br>\n1. <strong>Division:</strong><br>\n125 ÷ 6 = <strong>20 with a remainder of 5</strong>.<br><br>\n2. <strong>Answers:</strong><br>\n• <strong>(a) Completely Full Jeeps:</strong> Exactly <strong>20 jeeps</strong> will be completely full (20 × 6 = 120 tourists).<br>\n• <strong>(b) Total Jeeps Needed:</strong> The remaining 5 tourists also need to go on the safari. Therefore, 1 additional jeep is required.<br>\nTotal jeeps needed = 20 + 1 = <strong>21 jeeps</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Division 125 ÷ 6 = 20 R 5",
            "marks": "1.5 M"
          },
          {
            "key": "Interpreting remainder: 20 full jeeps and 21 total jeeps needed",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Equal Sharing",
        "q": "7 children share 91 marbles equally among themselves. How many marbles does each child get?",
        "ans": "<strong>Division:</strong><br>\n91 ÷ 7<br>\n• 70 ÷ 7 = 10<br>\n• 21 ÷ 7 = 3<br>\n• 10 + 3 = 13<br><br>\nEach child gets exactly <strong>13 marbles</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct division yielding 13 marbles",
            "marks": "2.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Wildlife Habitat Expansion Project",
      "text": "The state sanctuary recorded 2,870 deer in 2024. In 2026, 420 fawns were born, while 185 deer were relocated to another forest.",
      "question": "Calculate the current deer population in the sanctuary.",
      "answer": "<strong>Current Population:</strong><br>2,870 + 420 - 185 = 3,290 - 185 = <strong>3,105 deer</strong>.",
      "rubric": "1 Mark for addition (3,290); 1 Mark for subtraction (3,105)."
    }
  },
  {
    "id": "mm11",
    "num": 11,
    "unit": "Unit 4: Symmetry, Reflection & Mirror Images",
    "title": "Fun with Symmetry",
    "subtitle": "Lines of Symmetry, Mirror Reflections, Folding Paper & Symmetrical Shapes",
    "concepts": [
      "A line of symmetry divides a figure into two identical halves that overlap exactly when folded.",
      "Vertical, horizontal, and diagonal lines of symmetry.",
      "Recognizing symmetry in nature (butterflies, leaves), architecture (Taj Mahal), and geometrical shapes.",
      "Completing symmetrical pictures across a dashed mirror line."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#faf5ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#6b21a8\" text-anchor=\"middle\">Lines of Symmetry in Geometrical Shapes</text>\n      <!-- Square -->\n      <g transform=\"translate(60, 50)\">\n        <rect width=\"60\" height=\"60\" fill=\"#f3e8ff\" stroke=\"#7e22ce\" stroke-width=\"2\"/>\n        <line x1=\"30\" y1=\"-5\" x2=\"30\" y2=\"65\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n        <line x1=\"-5\" y1=\"30\" x2=\"65\" y2=\"30\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n        <line x1=\"-5\" y1=\"-5\" x2=\"65\" y2=\"65\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n        <line x1=\"65\" y1=\"-5\" x2=\"-5\" y2=\"65\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n        <text x=\"30\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#581c87\" text-anchor=\"middle\">Square (4 Lines)</text>\n      </g>\n      <!-- Rectangle -->\n      <g transform=\"translate(200, 50)\">\n        <rect width=\"90\" height=\"50\" fill=\"#f3e8ff\" stroke=\"#7e22ce\" stroke-width=\"2\"/>\n        <line x1=\"45\" y1=\"-5\" x2=\"45\" y2=\"55\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n        <line x1=\"-5\" y1=\"25\" x2=\"95\" y2=\"25\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n        <text x=\"45\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#581c87\" text-anchor=\"middle\">Rectangle (2 Lines)</text>\n      </g>\n      <!-- Equilateral Triangle -->\n      <g transform=\"translate(360, 50)\">\n        <polygon points=\"35,0 0,60 70,60\" fill=\"#f3e8ff\" stroke=\"#7e22ce\" stroke-width=\"2\"/>\n        <line x1=\"35\" y1=\"-5\" x2=\"35\" y2=\"65\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n        <text x=\"35\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#581c87\" text-anchor=\"middle\">Equilateral △ (3 Lines)</text>\n      </g>\n      <!-- Circle -->\n      <g transform=\"translate(480, 50)\">\n        <circle cx=\"30\" cy=\"30\" r=\"30\" fill=\"#f3e8ff\" stroke=\"#7e22ce\" stroke-width=\"2\"/>\n        <line x1=\"30\" y1=\"-5\" x2=\"30\" y2=\"65\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n        <line x1=\"-5\" y1=\"30\" x2=\"65\" y2=\"30\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n        <text x=\"30\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#581c87\" text-anchor=\"middle\">Circle (Infinite Lines)</text>\n      </g>\n    </svg>",
    "questions": [
      {
        "category": "Lines of Symmetry in Plane Shapes",
        "q": "How many lines of symmetry do each of the following shapes have? (a) An equilateral triangle, (b) A square, (c) A rectangle, (d) A circle, (e) A scalene triangle.",
        "ans": "<strong>(a) Equilateral Triangle:</strong> <strong>3 lines of symmetry</strong> (one from each vertex perpendicular to the opposite side).<br>\n<strong>(b) Square:</strong> <strong>4 lines of symmetry</strong> (2 through midpoints of opposite sides + 2 along diagonals).<br>\n<strong>(c) Rectangle:</strong> <strong>2 lines of symmetry</strong> (only through midpoints of opposite sides; diagonals are NOT lines of symmetry).<br>\n<strong>(d) Circle:</strong> <strong>Infinite lines of symmetry</strong> (any straight line passing through the centre is a line of symmetry).<br>\n<strong>(e) Scalene Triangle:</strong> <strong>0 lines of symmetry</strong> (all sides and angles are unequal).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct counts for triangle, square, rectangle",
            "marks": "1.5 M"
          },
          {
            "key": "Correct counts for circle (infinite) and scalene triangle (0)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Rotational Symmetry • Turns and Angles",
        "q": "Which of the following English capital letters look identical after a 1/2 turn (180° rotation)?<br><em>A, H, M, O, S, Z</em>",
        "ans": "<strong>Half-Turn (180°) Invariance Analysis:</strong><br>\nRotate each letter upside down by 180°:<br>\n• <strong>A:</strong> Turns upside down (∀) - NO.<br>\n• <strong>H:</strong> Remains exactly <strong>H</strong> - YES.<br>\n• <strong>M:</strong> Turns into W - NO.<br>\n• <strong>O:</strong> Remains exactly <strong>O</strong> - YES.<br>\n• <strong>S:</strong> Remains exactly <strong>S</strong> - YES.<br>\n• <strong>Z:</strong> Remains exactly <strong>Z</strong> - YES.<br><br>\nThe letters that look identical after a 1/2 turn are <strong>H, O, S, and Z</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correctly identifying all 4 letters (H, O, S, Z)",
            "marks": "2.0 M"
          },
          {
            "key": "Accurately ruling out A and M",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Geometric Lines of Symmetry",
        "q": "How many lines of symmetry do each of the following geometric shapes have?<br>(a) Equilateral triangle<br>(b) Square<br>(c) Circle",
        "ans": "<strong>Lines of Symmetry:</strong><br>\n• <strong>(a) Equilateral Triangle:</strong> <strong>3 lines of symmetry</strong> (each passing from a vertex perpendicular to the opposite side).<br>\n• <strong>(b) Square:</strong> <strong>4 lines of symmetry</strong> (2 bisecting opposite sides horizontally and vertically, and 2 along the diagonals).<br>\n• <strong>(c) Circle:</strong> <strong>Infinite (countless) lines of symmetry</strong> (any straight line passing through the centre point is a line of symmetry).",
        "marks": 3,
        "rubric": [
          {
            "key": "Equilateral triangle: 3",
            "marks": "1.0 M"
          },
          {
            "key": "Square: 4",
            "marks": "1.0 M"
          },
          {
            "key": "Circle: Infinite",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mirror Halves • Reflectional Symmetry",
        "q": "Draw an imaginary mirror line through the digit '8' and explain why it has both horizontal and vertical symmetry.",
        "ans": "<strong>Symmetry of Digit 8:</strong><br>\n• <strong>Vertical Line of Symmetry:</strong> A vertical line dividing '8' through the middle produces two identical left and right halves that reflect each other perfectly.<br>\n• <strong>Horizontal Line of Symmetry:</strong> A horizontal line passing through the central intersection produces matching top and bottom loops.<br>\nTherefore, digit 8 possesses <strong>2 lines of reflectional symmetry</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Explanation of vertical reflection",
            "marks": "1.0 M"
          },
          {
            "key": "Explanation of horizontal reflection",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Rangoli Mirror Pattern Creation",
      "text": "Pooja draws half of a diya pattern on folded paper. When she opens the fold, both sides are perfectly identical.",
      "question": "What is the crease of the paper called? If she cuts a heart shape along the fold, how many lines of symmetry will the heart have?",
      "answer": "<strong>Answers:</strong><br>1. The crease is called the <strong>Line of Symmetry (or Axis of Reflection)</strong>.<br>2. A symmetrical heart shape has exactly <strong>1 vertical line of symmetry</strong> running down the center.",
      "rubric": "1 Mark for Line of Symmetry; 1 Mark for 1 vertical line."
    }
  },
  {
    "id": "mm12",
    "num": 12,
    "unit": "Unit 4: Time and Calendar Computations",
    "title": "Ticking Clocks and Turning Calendar",
    "subtitle": "12-Hour vs. 24-Hour Clocks, AM/PM, Elapsed Time & Calendar Logic",
    "concepts": [
      "Reading time to the exact minute on analog and digital clocks.",
      "Converting between 12-hour (am/pm) and 24-hour railway time formats.",
      "Calculating elapsed time (start time, end time, duration).",
      "Understanding calendar months, leap years, manufacturing and expiry dates on packaged products."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fff7ed\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">12-Hour (AM/PM) vs. 24-Hour Railway Time</text>\n      <!-- Clock 1: 3:30 PM -->\n      <circle cx=\"160\" cy=\"85\" r=\"35\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n      <line x1=\"160\" y1=\"85\" x2=\"180\" y2=\"95\" stroke=\"#9a3412\" stroke-width=\"3\"/>\n      <line x1=\"160\" y1=\"85\" x2=\"160\" y2=\"115\" stroke=\"#c2410c\" stroke-width=\"2\"/>\n      <text x=\"160\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#9a3412\" text-anchor=\"middle\">3:30 PM</text>\n      <text x=\"160\" y=\"148\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#ea580c\" text-anchor=\"middle\">Afternoon</text>\n      <!-- Arrow -->\n      <text x=\"290\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#ea580c\" text-anchor=\"middle\">+ 12 Hours ➔</text>\n      <!-- Digital 24H Display -->\n      <rect x=\"360\" y=\"60\" width=\"150\" height=\"50\" fill=\"#1e293b\" rx=\"8\"/>\n      <text x=\"435\" y=\"93\" font-family=\"monospace\" font-size=\"20\" font-weight=\"900\" fill=\"#38bdf8\" text-anchor=\"middle\">15:30</text>\n      <text x=\"435\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#1e293b\" text-anchor=\"middle\">15:30 Hours</text>\n      <text x=\"435\" y=\"148\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"middle\">24-Hour Format</text>\n    </svg>",
    "questions": [
      {
        "category": "Time Conversion & Calculation",
        "q": "Convert to 24-hour clock time: (a) 6:15 am, (b) 2:45 pm, (c) 11:20 pm, (d) 12:00 midnight. (e) If a train departs at 08:45 and arrives at 14:15, what is the journey duration?",
        "ans": "<strong>Part 1: Conversions to 24-Hour Time:</strong><br>\n• <strong>(a) 6:15 am</strong> = <strong>06:15 hours</strong> (am times before noon remain unchanged).<br>\n• <strong>(b) 2:45 pm</strong> = 2:45 + 12:00 = <strong>14:45 hours</strong>.<br>\n• <strong>(c) 11:20 pm</strong> = 11:20 + 12:00 = <strong>23:20 hours</strong>.<br>\n• <strong>(d) 12:00 midnight</strong> = <strong>00:00 hours</strong> (or 24:00 hours).<br><br>\n<strong>Part 2: Train Journey Duration:</strong><br>\n• Departure: 08:45 hours.<br>\n• From 08:45 to 09:00 = 15 minutes.<br>\n• From 09:00 to 14:00 = 5 hours.<br>\n• From 14:00 to 14:15 = 15 minutes.<br>\n• Total duration = 5 hours + 15 min + 15 min = <strong>5 hours 30 minutes</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct conversions for all 4 time formats",
            "marks": "2.0 M"
          },
          {
            "key": "Accurate step-by-step elapsed time calculation (5h 30m)",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Time Arithmetic • 24-Hour Railway Clock",
        "q": "Convert the following times between 12-hour clock (am/pm) and 24-hour railway clock:<br>(a) 07:45 am<br>(b) 03:20 pm<br>(c) 21:50 hours",
        "ans": "<strong>Time Conversions:</strong><br>\n• <strong>(a) 07:45 am:</strong> Since it is am before noon, the time remains <strong>07:45 hours</strong>.<br>\n• <strong>(b) 03:20 pm:</strong> Since it is pm after noon, add 12 hours: 3:20 + 12:00 = <strong>15:20 hours</strong>.<br>\n• <strong>(c) 21:50 hours:</strong> Since it is greater than 12:00, subtract 12 hours: 21:50 - 12:00 = <strong>09:50 pm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) 07:45 hours",
            "marks": "1.0 M"
          },
          {
            "key": "(b) 15:20 hours",
            "marks": "1.0 M"
          },
          {
            "key": "(c) 09:50 pm",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Elapsed Time • Journey Duration",
        "q": "A superfast train departs from New Delhi at 06:15 am and arrives in Amritsar on the same day at 01:45 pm. What is the total duration of the train journey?",
        "ans": "<strong>Elapsed Time Calculation:</strong><br>\n• Departure Time: 06:15 am<br>\n• Arrival Time: 01:45 pm<br><br>\n1. From 06:15 am to 12:15 pm (noon) = <strong>6 hours</strong>.<br>\n2. From 12:15 pm to 01:15 pm = <strong>1 hour</strong>.<br>\n3. From 01:15 pm to 01:45 pm = <strong>30 minutes</strong>.<br><br>\nTotal Journey Time = 6 hours + 1 hour + 30 minutes = <strong>7 hours 30 minutes</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Decomposing time to noon milestone",
            "marks": "1.5 M"
          },
          {
            "key": "Accurate sum: 7 hours 30 minutes",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Calendar Literacy • Expiry Dates",
        "q": "A packet of butter shows 'Manufacture Date: 15/04/2026' and 'Best before 180 days from packaging'. Can it be safely consumed on 15th October 2026? Show calculations.",
        "ans": "<strong>Days Count Calculation:</strong><br>\n• Days remaining in April (after 15th): 30 - 15 = 15 days.<br>\n• May: 31 days.<br>\n• June: 30 days.<br>\n• July: 31 days.<br>\n• August: 31 days.<br>\n• September: 30 days.<br>\n• Total days elapsed by Sept 30 = 15 + 31 + 30 + 31 + 31 + 30 = <strong>168 days</strong>.<br><br>\nRemaining valid days for October = 180 - 168 = <strong>12 days</strong>.<br>\nHence, the product expires on <strong>12th October 2026</strong>.<br>\nTherefore, on 15th October 2026 (183 days), the butter is <strong>expired and unsafe to consume</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate month-by-month day counting (168 days up to Sept 30)",
            "marks": "1.5 M"
          },
          {
            "key": "Calculating expiry on Oct 12 and concluding unsafe on Oct 15",
            "marks": "1.5 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Medicine Expiry Date Verification",
      "text": "A medicine bottle has manufacturing date 'MFG: 03/24' and states 'Best before 24 months from manufacture'.",
      "question": "Can this medicine be safely consumed in February 2026? What is the last safe month?",
      "answer": "<strong>Analysis:</strong><br>• Manufacturing date = March 2024 (03/24).<br>• Adding 24 months (2 full years): March 2024 + 2 years = <strong>March 2026</strong>.<br><strong>Conclusion:</strong><br>Yes, it can be safely consumed in February 2026 because February 2026 falls before the expiry date of March 2026.",
      "rubric": "1 Mark for calculating expiry month (March 2026); 1 Mark for valid consumption conclusion."
    }
  },
  {
    "id": "mm13",
    "num": 13,
    "unit": "Unit 5: Financial Literacy, Fares & Travel Planning",
    "title": "The Transport Museum",
    "subtitle": "Ticket Booking, Travel Fares, Currency Operations (Rupees & Paise) & Timetables",
    "concepts": [
      "Financial arithmetic involving Indian Currency: Rupees (₹) and Paise (p); 1 Rupee = 100 Paise.",
      "Reading and interpreting bus/train fare charts and ticket rates for adults and children.",
      "Calculating change returned by cashiers during purchases.",
      "Planning trip budgets and comparing transport choices."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f1f5f9\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Transport Museum Ticket Counter Fare Chart</text>\n      <!-- Table -->\n      <rect x=\"80\" y=\"45\" width=\"420\" height=\"28\" fill=\"#e2e8f0\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <text x=\"180\" y=\"64\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Category</text>\n      <text x=\"350\" y=\"64\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Entry Ticket Rate</text>\n      <rect x=\"80\" y=\"73\" width=\"420\" height=\"28\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1\"/>\n      <text x=\"180\" y=\"92\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"#334155\" text-anchor=\"middle\">Adult (above 12 yrs)</text>\n      <text x=\"350\" y=\"92\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">₹85.00</text>\n      <rect x=\"80\" y=\"101\" width=\"420\" height=\"28\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1\"/>\n      <text x=\"180\" y=\"120\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"#334155\" text-anchor=\"middle\">Child (4 to 12 yrs)</text>\n      <text x=\"350\" y=\"120\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">₹40.00</text>\n      <text x=\"290\" y=\"148\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">Family Ticket (2 Adults + 2 Children) = (2 × 85) + (2 × 40) = ₹170 + ₹80 = ₹250</text>\n    </svg>",
    "questions": [
      {
        "category": "Currency Operations & Change Calculation",
        "q": "A family of 2 adults and 3 children visits the Transport Museum. Ticket rates are ₹85 per adult and ₹40 per child. (a) What is the total ticket cost? (b) The father pays with a ₹500 currency note. How much change does the booking clerk return?",
        "ans": "<strong>(a) Total Ticket Cost:</strong><br>\n• Cost for 2 adults = 2 × ₹85 = <strong>₹170</strong>.<br>\n• Cost for 3 children = 3 × ₹40 = <strong>₹120</strong>.<br>\n• Total cost = ₹170 + ₹120 = <strong>₹290</strong>.<br><br>\n<strong>(b) Change Returned:</strong><br>\n• Amount given = ₹500.<br>\n• Total bill = ₹290.<br>\n• Change = ₹500 - ₹290 = <strong>₹210</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct adult and child ticket total (₹290)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct change calculation (₹210)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Financial Literacy • Creating a Cash Bill",
        "q": "At the transport museum gift shop, Kabir buys 3 toy vintage cars at ₹125 each, 2 model aeroplanes at ₹240 each, and 4 souvenir keychains at ₹35 each. Prepare a cash memo and calculate the total bill.",
        "ans": "<strong>Cash Memo / Bill Preparation:</strong><br>\n-----------------------------------------------------------<br>\nItem &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quantity &nbsp;&nbsp; Rate (₹) &nbsp;&nbsp;&nbsp;&nbsp; Amount (₹)<br>\n-----------------------------------------------------------<br>\n1. Toy Vintage Cars &nbsp;&nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₹125 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₹375<br>\n2. Model Aeroplanes &nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₹240 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₹480<br>\n3. Souvenir Keychains &nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹35 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₹140<br>\n-----------------------------------------------------------<br>\n<strong>Total Bill Amount</strong> = ₹375 + ₹480 + ₹140 = <strong>₹995</strong>.<br>\nIf Kabir pays with a ₹1,000 note, change returned = ₹1,000 - ₹995 = <strong>₹5</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct subtotal for all three items",
            "marks": "1.5 M"
          },
          {
            "key": "Correct grand total of ₹995 and change ₹5",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Unitary Method • Real-World Math",
        "q": "If 8 bus tickets from the city centre to the museum cost ₹360, how much will 15 tickets cost?",
        "ans": "<strong>Unitary Method Solution:</strong><br>\n1. <strong>Cost of 1 ticket:</strong><br>\n₹360 ÷ 8 = <strong>₹45 per ticket</strong>.<br><br>\n2. <strong>Cost of 15 tickets:</strong><br>\n15 × ₹45 = <strong>₹675</strong>.<br><br>\nThe cost of 15 bus tickets is <strong>₹675</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Unit cost calculation: ₹360 ÷ 8 = ₹45",
            "marks": "1.0 M"
          },
          {
            "key": "Final cost calculation: 15 × ₹45 = ₹675",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Money Arithmetic • Currency Denominations",
        "q": "How many ₹50 notes make ₹2,500? How many ₹200 notes make ₹1,600?",
        "ans": "<strong>Currency Calculations:</strong><br>\n• (a) ₹2,500 ÷ ₹50 = <strong>50 notes</strong> of ₹50.<br>\n• (b) ₹1,600 ÷ ₹200 = <strong>8 notes</strong> of ₹200.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) 50 notes",
            "marks": "1.0 M"
          },
          {
            "key": "(b) 8 notes",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Toy Train Ride Booking",
      "text": "The museum toy train operates every 20 minutes from 10:00 am. It accommodates 32 passengers per trip.",
      "question": "How many trips will the train make between 10:00 am and 12:00 noon, and what is the maximum number of visitors it can carry?",
      "answer": "<strong>Trip Calculation:</strong><br>• Duration from 10:00 am to 12:00 noon = 2 hours = 120 minutes.<br>• Number of trips = 120 min ÷ 20 min = <strong>6 trips</strong> (at 10:00, 10:20, 10:40, 11:00, 11:20, 11:40).<br>• Maximum visitors = 6 trips × 32 passengers = <strong>192 passengers</strong>.",
      "rubric": "1 Mark for 6 trips; 1 Mark for 192 total passengers."
    }
  },
  {
    "id": "mm14",
    "num": 14,
    "unit": "Unit 5: Data Representation & Interpretation",
    "title": "Data Handling",
    "subtitle": "Pictographs, Bar Graphs, Tally Tables & Frequency Distribution",
    "concepts": [
      "Representing information using pictographs with a defined scale key (e.g., 1 icon = 5 students).",
      "Drawing and reading vertical and horizontal bar graphs with labeled axes.",
      "Finding maximum, minimum, and difference values from graphical data.",
      "Drawing valid conclusions and inferences from statistical representations."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f0f9ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Bar Graph: Favorite Fruits of Class 4 Students</text>\n      <!-- Axes -->\n      <line x1=\"80\" y1=\"125\" x2=\"520\" y2=\"125\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"35\" x2=\"80\" y2=\"125\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <!-- Bars -->\n      <rect x=\"120\" y=\"55\" width=\"50\" height=\"70\" fill=\"#38bdf8\" stroke=\"#0284c7\" stroke-width=\"1.5\"/>\n      <text x=\"145\" y=\"50\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0369a1\" text-anchor=\"middle\">14</text>\n      <text x=\"145\" y=\"142\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Mango</text>\n      <rect x=\"220\" y=\"70\" width=\"50\" height=\"55\" fill=\"#f472b6\" stroke=\"#db2777\" stroke-width=\"1.5\"/>\n      <text x=\"245\" y=\"65\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#9d174d\" text-anchor=\"middle\">11</text>\n      <text x=\"245\" y=\"142\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Apple</text>\n      <rect x=\"320\" y=\"85\" width=\"50\" height=\"40\" fill=\"#fbbf24\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\n      <text x=\"345\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b45309\" text-anchor=\"middle\">8</text>\n      <text x=\"345\" y=\"142\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Banana</text>\n      <rect x=\"420\" y=\"60\" width=\"50\" height=\"65\" fill=\"#4ade80\" stroke=\"#16a34a\" stroke-width=\"1.5\"/>\n      <text x=\"445\" y=\"55\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#15803d\" text-anchor=\"middle\">13</text>\n      <text x=\"445\" y=\"142\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Orange</text>\n    </svg>",
    "questions": [
      {
        "category": "Pictograph & Scale Interpretation",
        "q": "In a pictograph, the symbol 📚 represents 6 library books borrowed. Look at the data: Class 4A has 5 symbols; Class 4B has 4 symbols; Class 4C has 6 symbols; Class 4D has 3 and a half symbols. (a) How many books were borrowed by each class? (b) What is the total number of books borrowed?",
        "ans": "<strong>Scale:</strong> 1 symbol 📚 = 6 books.<br>\nHalf symbol = 6 ÷ 2 = 3 books.<br><br>\n<strong>(a) Books borrowed by each section:</strong><br>\n• <strong>Class 4A:</strong> 5 × 6 = <strong>30 books</strong>.<br>\n• <strong>Class 4B:</strong> 4 × 6 = <strong>24 books</strong>.<br>\n• <strong>Class 4C:</strong> 6 × 6 = <strong>36 books</strong>.<br>\n• <strong>Class 4D:</strong> (3 × 6) + 3 = 18 + 3 = <strong>21 books</strong>.<br><br>\n<strong>(b) Total books borrowed:</strong><br>\nTotal = 30 + 24 + 36 + 21 = <strong>111 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct calculation for all 4 sections with half-symbol logic",
            "marks": "2.0 M"
          },
          {
            "key": "Accurate sum of 111 books",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Data Handling • Pictograph Interpretation",
        "q": "In a school library pictograph, one symbol 📖 represents 10 books. The records show:<br>• Science: 📖 📖 📖 📖<br>• Maths: 📖 📖 📖 📖 📖 📖<br>• Storybooks: 📖 📖 📖 📖 📖 📖 📖 📖<br>(a) How many Maths books are there? (b) How many more Storybooks are there than Science books?",
        "ans": "<strong>Pictograph Reading (Key: 📖 = 10 books):</strong><br>\n• Science = 4 symbols × 10 = 40 books.<br>\n• Maths = 6 symbols × 10 = 60 books.<br>\n• Storybooks = 8 symbols × 10 = 80 books.<br><br>\n1. <strong>(a) Number of Maths books:</strong> <strong>60 books</strong>.<br>\n2. <strong>(b) Difference between Storybooks and Science:</strong><br>\n80 - 40 = <strong>40 more Storybooks</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Using key scale of 10 books accurately",
            "marks": "1.0 M"
          },
          {
            "key": "Maths books count = 60",
            "marks": "1.0 M"
          },
          {
            "key": "Difference = 40 books",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Data Visualization • Chapati (Pie) Chart",
        "q": "A survey of 40 children about their favourite sport revealed: 20 like Cricket, 10 like Football, and 10 like Badminton. Represent this data as fractions on a circular Chapati Chart.",
        "ans": "<strong>Circular Chart Representation (Total = 40 children):</strong><br>\n• <strong>Cricket:</strong> 20 out of 40 = 20/40 = <strong>1/2 (Half of the circle)</strong>.<br>\n• <strong>Football:</strong> 10 out of 40 = 10/40 = <strong>1/4 (One-fourth / quarter of the circle)</strong>.<br>\n• <strong>Badminton:</strong> 10 out of 40 = 10/40 = <strong>1/4 (One-fourth / quarter of the circle)</strong>.<br><br>\nOn the circular chart, draw a straight diameter dividing the circle into two halves; label one half 'Cricket (1/2)'. Divide the other half into two equal quarters; label one 'Football (1/4)' and the other 'Badminton (1/4)'.",
        "marks": 3,
        "rubric": [
          {
            "key": "Calculating correct fractional share (1/2, 1/4, 1/4)",
            "marks": "1.5 M"
          },
          {
            "key": "Describing accurate geometric sector partition of circle",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Tally Marks • Organizing Raw Data",
        "q": "Represent the number 18 using standard 5-bar tally marks.",
        "ans": "<strong>Tally Marks for 18:</strong><br>\nStandard tally marks group in clusters of five (four vertical bars crossed by a diagonal fifth bar <s>||||</s>):<br>\n• 18 = 5 + 5 + 5 + 3<br>\n• <strong><s>||||</s> &nbsp; <s>||||</s> &nbsp; <s>||||</s> &nbsp; |||</strong><br>\n(Three groups of five plus three individual tally bars).",
        "marks": 2,
        "rubric": [
          {
            "key": "Three groups of 5 tallies plus 3 singles correctly written",
            "marks": "2.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "School Canteen Drink Preferences",
      "text": "A bar graph shows fruit juice sales: Lemonade = 45 glasses, Apple Juice = 30 glasses, Orange Juice = 55 glasses, and Coconut Water = 70 glasses.",
      "question": "Which drink is the most popular, and how many more glasses of coconut water were sold than apple juice?",
      "answer": "<strong>Analysis:</strong><br>• Most popular drink = <strong>Coconut Water (70 glasses)</strong>.<br>• Difference between coconut water and apple juice = 70 - 30 = <strong>40 glasses</strong>.",
      "rubric": "1 Mark for identifying coconut water; 1 Mark for 40 glasses difference."
    }
  }
];

module.exports = { mathsMelaChapters };
