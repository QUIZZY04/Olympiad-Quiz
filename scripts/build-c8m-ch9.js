const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c8m');

const ch9Html = `<section class="chapter-section" id="ch9">
  <div class="chapter-header">
    <div class="ch-badge">9</div>
    <div class="chapter-header-info">
      <h2>Chapter 9: Mensuration</h2>
      <p>NCERT Exercises 9.1, 9.2 &amp; 9.3 — Complete Solutions as per CBSE Marking Scheme 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Mensuration Formulas &amp; Conversion Units</div>
    <ul class="concept-list">
      <li><strong>2D Geometrical Figures:</strong>
        <ul>
          <li><em>Trapezium:</em> <span class="math">\\text{Area} = \\frac{1}{2}(a + b)h</span>, where <span class="math">a, b</span> are parallel sides and <span class="math">h</span> is the perpendicular distance.</li>
          <li><em>General Quadrilateral:</em> <span class="math">\\text{Area} = \\frac{1}{2}d(h_1 + h_2)</span>.</li>
          <li><em>Rhombus:</em> <span class="math">\\text{Area} = \\frac{1}{2}d_1 d_2</span> (or <span class="math">\\text{base} \\times \\text{altitude}</span>).</li>
        </ul>
      </li>
      <li><strong>Surface Area (Total &amp; Lateral/Curved):</strong>
        <ul>
          <li><em>Cuboid:</em> <span class="math">\\text{TSA} = 2(lb + bh + hl)</span>, <span class="math">\\text{LSA (4 walls)} = 2(l + b)h</span>.</li>
          <li><em>Cube:</em> <span class="math">\\text{TSA} = 6a^2</span>, <span class="math">\\text{LSA} = 4a^2</span>.</li>
          <li><em>Right Circular Cylinder:</em> <span class="math">\\text{CSA} = 2\\pi rh</span>, <span class="math">\\text{TSA} = 2\\pi r(r + h)</span>.</li>
        </ul>
      </li>
      <li><strong>Volume (Capacity):</strong>
        <ul>
          <li><em>Cuboid:</em> <span class="math">V = l \\times b \\times h = \\text{Base Area} \\times h</span>.</li>
          <li><em>Cube:</em> <span class="math">V = a^3</span>.</li>
          <li><em>Cylinder:</em> <span class="math">V = \\pi r^2 h = \\text{Base Area} \\times h</span>.</li>
        </ul>
      </li>
      <li><strong>Unit Conversions:</strong> <span class="math">1\\text{ m}^3 = 1000\\text{ litres}</span>, <span class="math">1\\text{ litre} = 1000\\text{ cm}^3</span>, <span class="math">1\\text{ m}^2 = 10000\\text{ cm}^2</span>.</li>
    </ul>
  </div>

  <!-- EXERCISE 9.1 -->
  <div class="ex-div">NCERT Exercise 9.1</div>

  <div class="q-card" id="q9_1_1">
    <div class="q-head" onclick="toggleQ('q9_1_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">The shape of the top surface of a table is a trapezium. Find its area if its parallel sides are 1 m and 1.2 m and perpendicular distance between them is 0.8 m.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Parallel sides <span class="math">a = 1\\text{ m}</span>, <span class="math">b = 1.2\\text{ m}</span>; Height <span class="math">h = 0.8\\text{ m}</span>.
          </div>
          <div class="step">
            <span class="math">\\text{Area of trapezium} = \\frac{1}{2}(a + b) \\times h</span><br>
            <span class="math">= \\frac{1}{2}(1 + 1.2) \\times 0.8 = \\frac{1}{2}(2.2) \\times 0.8 = 1.1 \\times 0.8 = <strong>0.88\\text{ m}^2</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> The area of the table top is <strong>0.88 m²</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula stated: 1/2(a + b)h</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Calculation leading to 0.88 m²</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q9_1_2">
    <div class="q-head" onclick="toggleQ('q9_1_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">The area of a trapezium is 34 cm² and the length of one of the parallel sides is 10 cm and its height is 4 cm. Find the length of the other parallel side.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Let the other parallel side be <span class="math">b</span> cm. Given: Area = 34 cm², <span class="math">a = 10\\text{ cm}</span>, <span class="math">h = 4\\text{ cm}</span>.
          </div>
          <div class="step">
            <span class="math">\\text{Area} = \\frac{1}{2}(a + b)h \\implies 34 = \\frac{1}{2}(10 + b) \\times 4</span><br>
            <span class="math">34 = 2(10 + b) \\implies 10 + b = \\frac{34}{2} = 17</span><br>
            <span class="math">b = 17 - 10 = <strong>7\\text{ cm}</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> The other parallel side is <strong>7 cm</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Equation set up: 34 = 2(10 + b)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Evaluation: b = 7 cm</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q9_1_5">
    <div class="q-head" onclick="toggleQ('q9_1_5')">
      <div class="q-num">Q3</div>
      <div class="q-text">The diagonals of a rhombus are 7.5 cm and 12 cm. Find its area.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Diagonals <span class="math">d_1 = 7.5\\text{ cm}</span> and <span class="math">d_2 = 12\\text{ cm}</span>.
          </div>
          <div class="step">
            <span class="math">\\text{Area of rhombus} = \\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 7.5 \\times 12 = 7.5 \\times 6 = <strong>45\\text{ cm}^2</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula 1/2 × d1 × d2</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Answer 45 cm²</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q9_1_7">
    <div class="q-head" onclick="toggleQ('q9_1_7')">
      <div class="q-num">Q4</div>
      <div class="q-text">The floor of a building consists of 3000 tiles which are rhombus shaped and each of its diagonals are 45 cm and 30 cm in length. Find the total cost of polishing the floor, if the cost per m² is ₹ 4.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Area of one rhombus tile = <span class="math">\\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 45 \\times 30 = 675\\text{ cm}^2</span>.
          </div>
          <div class="step">
            Total area of 3000 tiles = <span class="math">3000 \\times 675 = 20,25,000\\text{ cm}^2</span>.<br>
            Convert to m²: <span class="math">1\\text{ m}^2 = 10,000\\text{ cm}^2 \\implies \\text{Total area} = \\frac{2025000}{10000} = <strong>202.5\\text{ m}^2</strong></span>.
          </div>
          <div class="step">
            Total cost at ₹ 4 per m² = <span class="math">202.5 \\times 4 = <strong>₹ 810</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Area of 1 tile = 675 cm²</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Total area in m² = 202.5 m²</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Total cost = ₹ 810</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- EXERCISE 9.2 -->
  <div class="ex-div">NCERT Exercise 9.2</div>

  <div class="q-card" id="q9_2_1">
    <div class="q-head" onclick="toggleQ('q9_2_1')">
      <div class="q-num">Q5</div>
      <div class="q-text">There are two cuboidal boxes. Box A has dimensions 60 cm × 40 cm × 50 cm. Box B is a cube of side 50 cm. Which box requires the lesser amount of material to make?</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>Total Surface Area of Box A (Cuboid):</strong><br>
            <span class="math">\\text{TSA}_A = 2(lb + bh + hl) = 2(60 \\times 40 + 40 \\times 50 + 50 \\times 60)</span><br>
            <span class="math">= 2(2400 + 2000 + 3000) = 2(7400) = <strong>14,800\\text{ cm}^2</strong></span>.
          </div>
          <div class="step">
            <strong>Total Surface Area of Box B (Cube):</strong><br>
            <span class="math">\\text{TSA}_B = 6a^2 = 6(50)^2 = 6(2500) = <strong>15,000\\text{ cm}^2</strong></span>.
          </div>
          <div class="step">
            Comparing: <span class="math">14,800\\text{ cm}^2 < 15,000\\text{ cm}^2</span>.<br>
            Hence, <strong>Box A</strong> requires the lesser amount of material.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">TSA of Box A = 14,800 cm²</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">TSA of Box B = 15,000 cm²</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Conclusion: Box A</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q9_2_7">
    <div class="q-head" onclick="toggleQ('q9_2_7')">
      <div class="q-num">Q6</div>
      <div class="q-text">A closed cylindrical tank of radius 7 m and height 3 m is made from a sheet of metal. How much sheet of metal is required?</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Given: Radius <span class="math">r = 7\\text{ m}</span>, Height <span class="math">h = 3\\text{ m}</span>.
          </div>
          <div class="step">
            Sheet required = Total Surface Area of closed cylinder:<br>
            <span class="math">\\text{TSA} = 2\\pi r(r + h) = 2 \\times \\frac{22}{7} \\times 7 \\times (7 + 3)</span><br>
            <span class="math">= 44 \\times 10 = <strong>440\\text{ m}^2</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> <strong>440 m²</strong> of metal sheet is required.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula 2πr(r + h)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Calculation to 440 m²</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q9_2_9">
    <div class="q-head" onclick="toggleQ('q9_2_9')">
      <div class="q-num">Q7</div>
      <div class="q-text">A road roller takes 750 complete revolutions to move once over to level a road. Find the area of the road if the diameter of a road roller is 84 cm and length is 1 m.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Diameter = 84 cm <span class="math">\\implies \\text{Radius } r = 42\\text{ cm} = 0.42\\text{ m}</span>.<br>
            Height (length) <span class="math">h = 1\\text{ m}</span>.
          </div>
          <div class="step">
            Area leveled in 1 revolution = Curved Surface Area (CSA) of cylinder:<br>
            <span class="math">\\text{CSA} = 2\\pi rh = 2 \\times \\frac{22}{7} \\times 0.42 \\times 1 = 2 \\times 22 \\times 0.06 = <strong>2.64\\text{ m}^2</strong></span>.
          </div>
          <div class="step">
            Total area of road in 750 revolutions:<br>
            <span class="math">\\text{Area} = 750 \\times 2.64 = <strong>1980\\text{ m}^2</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Unit alignment and CSA = 2.64 m²</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Total area = 750 × 2.64 = 1980 m²</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- EXERCISE 9.3 -->
  <div class="ex-div">NCERT Exercise 9.3</div>

  <div class="q-card" id="q9_3_4">
    <div class="q-head" onclick="toggleQ('q9_3_4')">
      <div class="q-num">Q8</div>
      <div class="q-text">A cuboid is of dimensions 60 cm × 54 cm × 30 cm. How many small cubes with side 6 cm can be placed in the given cuboid?</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Volume of cuboid = <span class="math">60 \\times 54 \\times 30\\text{ cm}^3</span>.<br>
            Volume of one cube = <span class="math">6 \\times 6 \\times 6\\text{ cm}^3</span>.
          </div>
          <div class="step">
            <span class="math">\\text{Number of cubes} = \\frac{\\text{Volume of cuboid}}{\\text{Volume of 1 cube}} = \\frac{60 \\times 54 \\times 30}{6 \\times 6 \\times 6} = 10 \\times 9 \\times 5 = <strong>450</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> <strong>450 small cubes</strong> can be placed in the cuboid.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula: Volume ratio</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Result: 450 cubes</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q9_3_5">
    <div class="q-head" onclick="toggleQ('q9_3_5')">
      <div class="q-num">Q9</div>
      <div class="q-text">Find the height of the cylinder whose volume is 1.54 m³ and diameter of the base is 140 cm.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Volume <span class="math">V = 1.54\\text{ m}^3</span>.<br>
            Diameter = 140 cm <span class="math">\\implies \\text{Radius } r = 70\\text{ cm} = 0.7\\text{ m} = \\frac{7}{10}\\text{ m}</span>.
          </div>
          <div class="step">
            <span class="math">V = \\pi r^2 h \\implies 1.54 = \\frac{22}{7} \\times \\left(\\frac{7}{10}\\right) \\times \\left(\\frac{7}{10}\\right) \\times h</span><br>
            <span class="math">1.54 = \\frac{22 \\times 7}{100} \\times h = \\frac{154}{100} \\times h = 1.54 h</span><br>
            <span class="math">h = \\frac{1.54}{1.54} = <strong>1\\text{ m}</strong></span> (or 100 cm).
          </div>
          <p><strong>Final Answer:</strong> The height of the cylinder is <strong>1 m</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Radius conversion to 0.7 m</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Equation setup and solving to h = 1 m</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q9_3_7">
    <div class="q-head" onclick="toggleQ('q9_3_7')">
      <div class="q-num">Q10</div>
      <div class="q-text">If each edge of a cube is doubled:<br>
      (i) how many times will its surface area increase?<br>
      (ii) how many times will its volume increase?</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <p>Let the original edge of the cube be <span class="math">a</span>. When doubled, the new edge is <span class="math">a' = 2a</span>.</p>
          <div class="step">
            <strong>(i) Surface Area:</strong><br>
            Original SA = <span class="math">6a^2</span>.<br>
            New SA = <span class="math">6(a')^2 = 6(2a)^2 = 6(4a^2) = 4 \\times (6a^2)</span>.<br>
            The surface area increases by <strong>4 times</strong>.
          </div>
          <div class="step">
            <strong>(ii) Volume:</strong><br>
            Original Volume = <span class="math">a^3</span>.<br>
            New Volume = <span class="math">(a')^3 = (2a)^3 = 8a^3 = 8 \\times (a^3)</span>.<br>
            The volume increases by <strong>8 times</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Surface area increases 4 times</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Volume increases 8 times</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ SECTION -->
  <div class="cbq-section">
    <div class="cbq-header">
      <span>🎯 Competency-Based Questions (CBQ) &amp; HOTS</span>
      <span class="cbq-badge">CBSE Board Exam Pattern</span>
    </div>
    <div class="cbq-body">
      <div class="cbq-card">
        <div class="cbq-type" style="color:#4f46e5;">Case Study: Rainwater Harvesting Tank</div>
        <div class="cbq-question"><strong>Scenario:</strong> Water pours into a cuboidal reservoir of dimensions 12 m × 9 m × 1 m at the rate of 60 litres per minute. (i) What is the capacity of the reservoir in litres? (ii) How many hours will it take to completely fill the empty reservoir?</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">
          <p><strong>(i) Capacity in litres:</strong><br>
          <span class="math">\\text{Volume} = 12 \\times 9 \\times 1 = 108\\text{ m}^3</span>.<br>
          Since <span class="math">1\\text{ m}^3 = 1000\\text{ litres}</span>, capacity = <span class="math">108 \\times 1000 = <strong>1,08,000\\text{ litres}</strong></span>.</p>
          <p><strong>(ii) Time required:</strong><br>
          Rate = 60 L/min = <span class="math">60 \\times 60 = 3600\\text{ litres/hour}</span>.<br>
          <span class="math">\\text{Time taken} = \\frac{108000}{3600} = <strong>30\\text{ hours}</strong></span>.</p>
        </div>
      </div>
      <div class="cbq-card">
        <div class="cbq-type" style="color:#10b981;">⚡ Cylinder Optimization Challenge (HOTS)</div>
        <div class="cbq-question">A rectangular sheet of paper 44 cm × 20 cm is rolled along its length without overlapping to make a cylinder. Find the volume of the cylinder formed.</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">
          <p>Rolling along length (44 cm) means circumference of the base <span class="math">2\\pi r = 44\\text{ cm}</span>.<br>
          <span class="math">2 \\times \\frac{22}{7} \\times r = 44 \\implies r = 7\\text{ cm}</span>.<br>
          Height <span class="math">h = 20\\text{ cm}</span>.<br>
          <span class="math">\\text{Volume} = \\pi r^2 h = \\frac{22}{7} \\times 7^2 \\times 20 = 22 \\times 7 \\times 20 = <strong>3080\\text{ cm}^3</strong></span>.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="ch-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(8)">← Chapter 8: Algebraic Expressions</button>
    <button class="ch-nav-btn next" onclick="showChapter(10)">Chapter 10: Exponents &amp; Powers →</button>
  </div>
</section>
`;

fs.writeFileSync(path.join(outDir, 'ch9.html'), ch9Html, 'utf8');
console.log('Generated ch9.html');
