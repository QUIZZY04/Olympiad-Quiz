const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c8m');

const ch4Html = `<section class="chapter-section" id="ch4">
  <div class="chapter-header">
    <div class="ch-badge">4</div>
    <div class="chapter-header-info">
      <h2>Chapter 4: Quadrilaterals</h2>
      <p>NCERT Ganita Prakash (Class 8 Part 1) — Polygons, Angle Sum Property, Exterior Angles, Parallelograms, Rhombuses, Rectangles, Squares, Trapeziums &amp; Kites | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Geometric Theorems &amp; Properties of Quadrilaterals</div>
    <ul class="concept-list">
      <li><strong>Polygons:</strong> A simple closed curve made up of only line segments.
        <ul>
          <li><strong>Convex Polygon:</strong> All interior angles are strictly less than 180°, and line segments joining any two internal points lie entirely inside the polygon.</li>
          <li><strong>Concave Polygon:</strong> At least one interior angle is reflex (&gt; 180°).</li>
          <li><strong>Regular Polygon:</strong> Both equilateral (all sides equal) and equiangular (all interior angles equal).</li>
        </ul>
      </li>
      <li><strong>Fundamental Angle Theorems:</strong>
        <ul>
          <li><strong>Interior Angle Sum:</strong> For an <em>n</em>-sided polygon, Sum = <code>(n − 2) × 180°</code>. For a quadrilateral (n = 4), Sum = <code>(4 − 2) × 180° = 360°</code>.</li>
          <li><strong>Exterior Angle Sum:</strong> Sum of the exterior angles of any convex polygon is always <strong>360°</strong>.</li>
          <li>Each exterior angle of a regular <em>n</em>-sided polygon = <code>360° / n</code>. Number of sides = <code>360° / (Exterior angle)</code>.</li>
        </ul>
      </li>
      <li><strong>Family of Quadrilaterals:</strong>
        <ul>
          <li><strong>Trapezium:</strong> Quadrilateral having at least one pair of parallel sides.</li>
          <li><strong>Parallelogram:</strong> Both pairs of opposite sides are parallel and equal. Opposite angles are equal; adjacent angles are supplementary (sum = 180°); diagonals bisect each other.</li>
          <li><strong>Rhombus:</strong> Parallelogram with all 4 sides equal. Diagonals are perpendicular bisectors of each other.</li>
          <li><strong>Rectangle:</strong> Parallelogram with four right angles (90°). Diagonals are equal in length and bisect each other.</li>
          <li><strong>Square:</strong> Regular quadrilateral (both rhombus and rectangle). All sides equal, all angles 90°, diagonals equal and perpendicular bisectors.</li>
          <li><strong>Kite:</strong> Has two pairs of equal adjacent sides. Diagonals are perpendicular, and one diagonal bisects the other.</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- SVG Diagram 4: Quadrilateral Hierarchy & Family Tree -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 640px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 600 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
      <text x="300" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Hierarchical Classification of Special Quadrilaterals</text>
      
      <!-- Top Level: Quadrilateral -->
      <rect x="230" y="38" width="140" height="32" rx="6" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>
      <text x="300" y="59" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Quadrilateral (4 sides)</text>

      <!-- Branching lines -->
      <line x1="250" y1="70" x2="110" y2="95" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="300" y1="70" x2="300" y2="95" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="350" y1="70" x2="490" y2="95" stroke="#94a3b8" stroke-width="1.5"/>

      <!-- Level 2: Trapezium, Parallelogram, Kite -->
      <rect x="40" y="95" width="140" height="32" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="110" y="116" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#92400e" text-anchor="middle">Trapezium (1 pair ∥)</text>

      <rect x="220" y="95" width="160" height="32" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="300" y="116" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#1d4ed8" text-anchor="middle">Parallelogram (2 pairs ∥)</text>

      <rect x="420" y="95" width="140" height="32" rx="6" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
      <text x="490" y="116" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#9d174d" text-anchor="middle">Kite (2 pairs adj =)</text>

      <!-- Sub-branches from Parallelogram -->
      <line x1="260" y1="127" x2="190" y2="152" stroke="#3b82f6" stroke-width="1.5"/>
      <line x1="340" y1="127" x2="410" y2="152" stroke="#3b82f6" stroke-width="1.5"/>

      <!-- Level 3: Rectangle, Rhombus -->
      <rect x="120" y="152" width="140" height="30" rx="6" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/>
      <text x="190" y="172" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#3730a3" text-anchor="middle">Rectangle (All 90°)</text>

      <rect x="340" y="152" width="140" height="30" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
      <text x="410" y="172" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#5b21b6" text-anchor="middle">Rhombus (All 4 sides =)</text>

      <!-- Sub-branches merging to Square -->
      <line x1="190" y1="182" x2="270" y2="200" stroke="#6366f1" stroke-width="1.5"/>
      <line x1="410" y1="182" x2="330" y2="200" stroke="#7c3aed" stroke-width="1.5"/>

      <!-- Level 4: Square -->
      <rect x="235" y="190" width="130" height="26" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="300" y="208" font-family="system-ui, sans-serif" font-size="10.5" font-weight="900" fill="#15803d" text-anchor="middle">Square (Regular)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 4.1: Mathematical Taxonomy of Quadrilateral Types &amp; Invariant Properties</div>
  </div>

  <div class="ex-div">NCERT Ganita Prakash: Figure It Out &amp; Comprehensive Exercises (100% Questions Solved)</div>

  <!-- Q1 -->
  <div class="q-card" id="c8m-ch4-q1">
    <div class="q-head" onclick="toggleQ('c8m-ch4-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Find the angle measure x in the following figures:<br>(a) A quadrilateral with angles 50°, 130°, 120°, and x.<br>(b) A quadrilateral where three angles are x, 70°, and 60°, and the angle adjacent to the fourth angle on a straight line is a right angle (90°).</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Theorem:</strong> The sum of all four interior angles of any quadrilateral is always 360°.</p>
          <div class="step">
            • <strong>(a) In quadrilateral with angles 50°, 130°, 120°, x:</strong><br>
            50° + 130° + 120° + x = 360°<br>
            300° + x = 360°<br>
            x = 360° − 300° = <strong>60°</strong>.<br><br>

            • <strong>(b) In quadrilateral with exterior right angle:</strong><br>
            The interior angle adjacent to the exterior 90° angle forms a linear pair:<br>
            Interior angle = 180° − 90° = 90°.<br>
            Now, sum of interior angles = 360°:<br>
            x + 70° + 60° + 90° = 360°<br>
            x + 220° = 360°<br>
            x = 360° − 220° = <strong>140°</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Applying angle sum property of quadrilateral (360°)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correct evaluation: (a) x = 60°, (b) x = 140°</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c8m-ch4-q2">
    <div class="q-head" onclick="toggleQ('c8m-ch4-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Find the measure of each exterior angle of a regular polygon of:<br>(i) 9 sides &nbsp;&nbsp;&nbsp; (ii) 15 sides</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Theorem:</strong> The sum of exterior angles of any convex polygon is 360°. For a regular polygon of <em>n</em> sides, all exterior angles are equal:<br>
          <code>Each Exterior Angle = 360° / n</code>.</p>
          <div class="step">
            • <strong>(i) For a regular polygon with n = 9 sides (Nonagon):</strong><br>
            Each exterior angle = 360° / 9 = <strong>40°</strong>.<br><br>

            • <strong>(ii) For a regular polygon with n = 15 sides:</strong><br>
            Each exterior angle = 360° / 15 = <strong>24°</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula: Exterior angle = 360° / n</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Evaluations: (i) 40°, (ii) 24°</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c8m-ch4-q3">
    <div class="q-head" onclick="toggleQ('c8m-ch4-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">How many sides does a regular polygon have if the measure of an exterior angle is 24°? Is it possible to have a regular polygon with each of its interior angle as 22°? Give reason.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>Part 1:</strong> Number of sides <em>n</em> = 360° / (Exterior angle)<br>
            Here exterior angle = 24°.<br>
            n = 360° / 24° = <strong>15 sides</strong>.<br><br>

            • <strong>Part 2: Regular polygon with interior angle = 22°:</strong><br>
            If interior angle = 22°, then exterior angle = 180° − 22° = 158°.<br>
            For a regular polygon to exist, the number of sides <em>n</em> must be an integer ≥ 3:<br>
            n = 360° / 158° = 180 / 79 ≈ 2.28.<br>
            Since 158 is not an exact divisor of 360° (n is not a natural number), <strong>it is NOT possible</strong> to have a regular polygon with an interior angle of 22°.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Finding n = 15 sides</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Exterior angle 158° does not divide 360° evenly, hence impossible</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c8m-ch4-q4">
    <div class="q-head" onclick="toggleQ('c8m-ch4-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Two adjacent angles of a parallelogram are in the ratio 3 : 2. Find the measure of each of the angles of the parallelogram.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Property:</strong> In a parallelogram, any two adjacent angles are supplementary (their sum is 180°), and opposite angles are equal.</p>
          <div class="step">
            1. Let the two adjacent angles be <code>3x</code> and <code>2x</code>.<br>
            2. Since adjacent angles are supplementary:<br>
            3x + 2x = 180°<br>
            5x = 180° ⇒ x = 180° / 5 = 36°.<br><br>
            3. Therefore:<br>
            First angle = 3x = 3 × 36° = <strong>108°</strong>.<br>
            Second angle = 2x = 2 × 36° = <strong>72°</strong>.<br><br>
            4. Since opposite angles of a parallelogram are equal, the measures of all four angles are:<br>
            <strong>108°, 72°, 108°, and 72°</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formulating 3x + 2x = 180° and solving x = 36°</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Listing all 4 angles (108°, 72°, 108°, 72°)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c8m-ch4-q5">
    <div class="q-head" onclick="toggleQ('c8m-ch4-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">In a parallelogram ABCD, the diagonals AC and BD intersect at point O. If OA = 2x + 1, OC = 15, OB = y + 7, and OD = 20, find the values of x and y.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Property:</strong> The diagonals of a parallelogram bisect each other. Therefore, point O is the midpoint of both diagonals AC and BD.</p>
          <div class="step">
            1. <strong>For diagonal AC:</strong><br>
            OA = OC<br>
            2x + 1 = 15<br>
            2x = 15 − 1 = 14<br>
            x = 14 / 2 = <strong>7</strong>.<br><br>
            2. <strong>For diagonal BD:</strong><br>
            OB = OD<br>
            y + 7 = 20<br>
            y = 20 − 7 = <strong>13</strong>.<br><br>
            Thus, the required values are <strong>x = 7</strong> and <strong>y = 13</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating property: Diagonals bisect each other (OA = OC, OB = OD)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correctly solving x = 7 and y = 13</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c8m-ch4-q6">
    <div class="q-head" onclick="toggleQ('c8m-ch4-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">RENT is a rectangle. Its diagonals meet at O. Find x, if OT = 2x + 4 and OR = 3x + 1.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Property:</strong> The diagonals of a rectangle are equal in length and bisect each other. Therefore, all half-diagonals are equal: <code>OT = OR = OE = ON</code>.</p>
          <div class="step">
            Since OT = OR:<br>
            2x + 4 = 3x + 1<br>
            Transposing variable and constant terms:<br>
            4 − 1 = 3x − 2x<br>
            <strong>x = 3</strong>.<br><br>
            <em>Verification:</em><br>
            OT = 2(3) + 4 = 10 units.<br>
            OR = 3(3) + 1 = 10 units.<br>
            Both half-diagonals are equal to 10 units, confirming the solution.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Quoting rectangle diagonal theorem (diagonals equal and bisect)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Solving 2x + 4 = 3x + 1 to find x = 3</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c8m-ch4-q7">
    <div class="q-head" onclick="toggleQ('c8m-ch4-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Explain why a square is:<br>(i) a quadrilateral &nbsp;&nbsp;&nbsp; (ii) a parallelogram &nbsp;&nbsp;&nbsp; (iii) a rhombus &nbsp;&nbsp;&nbsp; (iv) a rectangle</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) A quadrilateral:</strong> A square is a closed two-dimensional polygon bounded by <strong>4 line segments</strong>.<br><br>
            • <strong>(ii) A parallelogram:</strong> Its opposite pairs of sides are parallel to each other and equal in length.<br><br>
            • <strong>(iii) A rhombus:</strong> It is a parallelogram in which <strong>all four sides are equal</strong> in length, and its diagonals intersect at right angles (90°).<br><br>
            • <strong>(iv) A rectangle:</strong> It is a parallelogram whose <strong>interior angles are all right angles (90°)</strong>, and its diagonals are equal in length.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Clear structural justification for all 4 classifications</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c8m-ch4-q8">
    <div class="q-head" onclick="toggleQ('c8m-ch4-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">The diagonals of a rhombus are of lengths 16 cm and 12 cm. Find the length of each side and the perimeter of the rhombus.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Property:</strong> The diagonals of a rhombus bisect each other at right angles (90°).</p>
          <div class="step">
            1. Let ABCD be the rhombus whose diagonals AC = 16 cm and BD = 12 cm intersect at O.<br>
            Since diagonals bisect each other perpendicularly:<br>
            OA = AC / 2 = 16 / 2 = 8 cm.<br>
            OB = BD / 2 = 12 / 2 = 6 cm.<br>
            ∠AOB = 90°.<br><br>
            2. In right-angled triangle ΔAOB, applying the Pythagoras Theorem:<br>
            AB² = OA² + OB²<br>
            AB² = 8² + 6² = 64 + 36 = 100.<br>
            AB = √100 = <strong>10 cm</strong>.<br><br>
            3. Since all four sides of a rhombus are equal:<br>
            Length of each side = <strong>10 cm</strong>.<br>
            Perimeter = 4 × side = 4 × 10 = <strong>40 cm</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Half-diagonals OA = 8 cm, OB = 6 cm at right angle</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Pythagoras theorem: AB = 10 cm</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Perimeter = 40 cm</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c8m-ch4-q9">
    <div class="q-head" onclick="toggleQ('c8m-ch4-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">In a trapezium ABCD, AB ∥ DC. If ∠A = 55° and ∠B = 70°, find the measures of ∠D and ∠C.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Property:</strong> In trapezium ABCD with AB ∥ DC, the consecutive interior angles on the same side of the transversal line segment are supplementary (their sum is 180°).</p>
          <div class="step">
            1. Transversal AD intersects parallel lines AB and DC:<br>
            ∠A + ∠D = 180°<br>
            55° + ∠D = 180°<br>
            ∠D = 180° − 55° = <strong>125°</strong>.<br><br>
            2. Transversal BC intersects parallel lines AB and DC:<br>
            ∠B + ∠C = 180°<br>
            70° + ∠C = 180°<br>
            ∠C = 180° − 70° = <strong>110°</strong>.<br><br>
            Hence, <strong>∠D = 125°</strong> and <strong>∠C = 110°</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Consecutive interior angles on transversal sum to 180°</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Accurate angles: ∠D = 125° and ∠C = 110°</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c8m-ch4-q10">
    <div class="q-head" onclick="toggleQ('c8m-ch4-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">In a kite ABCD, AB = AD and CB = CD. The diagonals AC and BD intersect at O. If ∠BAC = 35° and ∠BCD = 80°, find: (i) ∠BCA, (ii) ∠ABC.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Property of a Kite:</strong> The main diagonal AC acts as an axis of symmetry, bisecting both vertex angles ∠BAD and ∠BCD. Moreover, ΔABC is congruent to ΔADC.</p>
          <div class="step">
            • <strong>(i) Finding ∠BCA:</strong><br>
            The diagonal AC bisects ∠BCD = 80°.<br>
            Therefore, ∠BCA = ∠BCD / 2 = 80° / 2 = <strong>40°</strong>.<br><br>

            • <strong>(ii) Finding ∠ABC:</strong><br>
            In triangle ΔABC, the sum of interior angles is 180°:<br>
            ∠BAC + ∠BCA + ∠ABC = 180°<br>
            35° + 40° + ∠ABC = 180°<br>
            75° + ∠ABC = 180°<br>
            ∠ABC = 180° − 75° = <strong>105°</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Symmetry property: AC bisects ∠BCD ⇒ ∠BCA = 40°</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Angle sum of ΔABC: ∠ABC = 105°</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q11 -->
  <div class="q-card" id="c8m-ch4-q11">
    <div class="q-head" onclick="toggleQ('c8m-ch4-q11')">
      <div class="q-num">Q11</div>
      <div class="q-text">What is the minimum interior angle possible for a regular polygon? Why? What is the maximum exterior angle possible for a regular polygon?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>Minimum interior angle:</strong><br>
            A regular polygon with the fewest number of sides is an equilateral triangle (n = 3).<br>
            Each interior angle = (3 − 2) × 180° / 3 = 180° / 3 = <strong>60°</strong>.<br>
            As the number of sides increases, interior angles increase. Therefore, the minimum interior angle possible for any regular polygon is <strong>60°</strong>.<br><br>

            • <strong>Maximum exterior angle:</strong><br>
            Since the exterior angle and interior angle form a linear pair (Exterior + Interior = 180°):<br>
            Maximum exterior angle = 180° − (Minimum interior angle) = 180° − 60° = <strong>120°</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Equilateral triangle gives minimum interior angle 60°</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Maximum exterior angle = 180° − 60° = 120°</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q12 -->
  <div class="q-card" id="c8m-ch4-q12">
    <div class="q-head" onclick="toggleQ('c8m-ch4-q12')">
      <div class="q-num">Q12</div>
      <div class="q-text">The adjacent sides of a parallelogram are in the ratio 5 : 3. If the perimeter of the parallelogram is 64 cm, find the lengths of all its sides.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Let the adjacent sides of the parallelogram be <code>5x</code> and <code>3x</code> cm.<br>
            2. In a parallelogram, opposite sides are equal, so the sides are 5x, 3x, 5x, and 3x.<br>
            Perimeter = 2 × (Sum of adjacent sides)<br>
            64 = 2 × (5x + 3x)<br>
            64 = 2 × 8x = 16x<br>
            x = 64 / 16 = <strong>4</strong>.<br><br>
            3. Therefore:<br>
            First side = 5x = 5 × 4 = <strong>20 cm</strong>.<br>
            Second side = 3x = 3 × 4 = <strong>12 cm</strong>.<br><br>
            The lengths of all four sides are <strong>20 cm, 12 cm, 20 cm, and 12 cm</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Perimeter equation 2(5x + 3x) = 64 and x = 4</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Side lengths: 20 cm and 12 cm</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Case Study (CBQ) -->
  <div class="case-study-box" style="margin-top: 30px; background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 22px;">
    <div class="case-study-title" style="font-size: 1.15rem; font-weight: 800; color: #1e293b; margin-bottom: 10px;">
      🎯 Competency-Based Case Study Question (CBSE 2026-27 Pattern)
    </div>
    <div class="case-study-desc" style="font-size: 0.95rem; color: #475569; line-height: 1.6;">
      <strong>Context — Urban Park &amp; Recreational Walkway Architecture:</strong> A civil engineering firm is designing a quadrilateral community park ABCD. The park boundary has opposite sides AB and CD parallel, making it a trapezium, where AB = 80 m, CD = 50 m, and non-parallel sides AD = BC = 25 m (an isosceles trapezium). Inside the park, a central flower pavilion PQRS is built in the shape of a rhombus whose diagonals measure 24 m and 18 m.<br><br>
      (a) In the isosceles trapezium ABCD, find the relationship between base angles ∠A and ∠B, and calculate their measures if ∠D = 120°.<br>
      (b) Calculate the side length of the rhombus-shaped flower pavilion PQRS using the Pythagorean property of its diagonals.<br>
      (c) If a perimeter fence is erected around the entire community park ABCD and around the flower pavilion PQRS, find the total length of fencing required.
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Base angles in Isosceles Trapezium ABCD:</strong><br>
        In an isosceles trapezium with AD = BC, the base angles are equal: ∠A = ∠B, and top angles are equal: ∠D = ∠C.<br>
        Since consecutive interior angles between parallel lines AB and CD sum to 180°:<br>
        ∠A + ∠D = 180° ⇒ ∠A + 120° = 180° ⇒ <strong>∠A = 60°</strong>.<br>
        Since base angles are equal: <strong>∠B = 60°</strong>.</p>

        <p><strong>(b) Side length of Rhombus Pavilion PQRS:</strong><br>
        Diagonals d₁ = 24 m and d₂ = 18 m bisect perpendicularly at center O:<br>
        Half-diagonals: d₁/2 = 12 m and d₂/2 = 9 m.<br>
        By Pythagoras Theorem:<br>
        side² = 12² + 9² = 144 + 81 = 225.<br>
        side = √225 = <strong>15 meters</strong>.</p>

        <p><strong>(c) Total length of fencing required:</strong><br>
        - Perimeter of Trapezium ABCD = AB + BC + CD + DA = 80 + 25 + 50 + 25 = <strong>180 m</strong>.<br>
        - Perimeter of Rhombus PQRS = 4 × side = 4 × 15 = <strong>60 m</strong>.<br>
        - Total fencing required = 180 + 60 = <strong>240 meters</strong>.</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch4.html'), ch4Html, 'utf8');
console.log('Chapter 4 successfully written with 12 questions + CBQ.');
