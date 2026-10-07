const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c8m');

const ch11Html = `<section class="chapter-section" id="ch11">
  <div class="chapter-header">
    <div class="ch-badge">11</div>
    <div class="chapter-header-info">
      <h2>Chapter 11: Exploring Some Geometric Themes</h2>
      <p>NCERT Ganita Prakash (Class 8 Part 2) — Quadrilateral Constructions, 5-Measurement Criteria, Compass &amp; Straightedge Protocols &amp; Tessellations | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Necessary Conditions for Unique Geometric Construction</div>
    <ul class="concept-list">
      <li><strong>5-Measurement Principle:</strong> A unique quadrilateral cannot be constructed with just 4 sides (it can flex into infinitely many shapes). Exactly <strong>5 independent measurements</strong> are required to fix a unique quadrilateral.</li>
      <li><strong>Standard Construction Scenarios:</strong>
        <ol>
          <li>When <strong>four sides and one diagonal</strong> are given (splits into two unique triangles).</li>
          <li>When <strong>two diagonals and three sides</strong> are given.</li>
          <li>When <strong>two adjacent sides and three angles</strong> are given.</li>
          <li>When <strong>three sides and two included angles</strong> are given.</li>
        </ol>
      </li>
      <li><strong>Special Constructions (exploiting inherent geometric symmetry):</strong>
        <ul>
          <li><strong>Square:</strong> Requires only <strong>1 parameter</strong> (side length or diagonal length), because all sides are equal and all angles are 90°.</li>
          <li><strong>Rhombus:</strong> Requires only <strong>2 parameters</strong> (lengths of its two diagonals, since they bisect perpendicularly).</li>
          <li><strong>Rectangle:</strong> Requires only <strong>2 parameters</strong> (length and breadth).</li>
        </ul>
      </li>
      <li><strong>Tessellations &amp; Angle Sum at a Vertex:</strong> A plane can be tiled seamlessly without gaps or overlaps by a regular polygon if and only if its interior angle divides 360° evenly. Only <strong>equilateral triangles (60°), squares (90°), and regular hexagons (120°)</strong> form regular tessellations.</li>
    </ul>
  </div>

  <!-- SVG Diagram 11: Compass Arc Construction Visualization -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Step-by-Step Construction Architecture: Diagonal Base Triangulation</text>
      
      <!-- Base Diagonal AC -->
      <g transform="translate(100, 30)">
        <line x1="20" y1="100" x2="320" y2="100" stroke="#0f172a" stroke-width="2.5"/>
        <circle cx="20" cy="100" r="4" fill="#0f172a"/>
        <circle cx="320" cy="100" r="4" fill="#0f172a"/>
        <text x="12" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">A</text>
        <text x="330" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">C</text>
        <text x="170" y="118" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#64748b" text-anchor="middle">Diagonal AC = 7 cm</text>

        <!-- Top Vertex B Construction -->
        <path d="M 120,30 A 110,110 0 0,1 180,45" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,2"/>
        <path d="M 170,30 A 130,130 0 0,0 140,55" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,2"/>
        <line x1="20" y1="100" x2="155" y2="40" stroke="#2563eb" stroke-width="2"/>
        <line x1="320" y1="100" x2="155" y2="40" stroke="#2563eb" stroke-width="2"/>
        <circle cx="155" cy="40" r="4" fill="#2563eb"/>
        <text x="155" y="28" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1d4ed8" text-anchor="middle">B</text>

        <!-- Bottom Vertex D Construction -->
        <path d="M 110,140 A 100,100 0 0,0 160,165" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,2"/>
        <path d="M 170,140 A 120,120 0 0,1 130,165" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,2"/>
        <line x1="20" y1="100" x2="145" y2="155" stroke="#16a34a" stroke-width="2"/>
        <line x1="320" y1="100" x2="145" y2="155" stroke="#16a34a" stroke-width="2"/>
        <circle cx="145" cy="155" r="4" fill="#16a34a"/>
        <text x="145" y="175" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#15803d" text-anchor="middle">D</text>
      </g>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 11.1: Triangulation Protocol: Partitioning Quadrilateral ABCD into ΔABC and ΔADC</div>
  </div>

  <div class="ex-div">NCERT Ganita Prakash: Figure It Out &amp; Comprehensive Exercises (100% Questions Solved)</div>

  <!-- Q1 -->
  <div class="q-card" id="c8m-ch11-q1">
    <div class="q-head" onclick="toggleQ('c8m-ch11-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Construct a quadrilateral ABCD where AB = 4.5 cm, BC = 5.5 cm, CD = 4 cm, DA = 6 cm, and diagonal AC = 7 cm. Write the step-by-step algorithm of construction.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Geometric Strategy:</strong> The diagonal AC divides quadrilateral ABCD into two triangles, ΔABC and ΔADC. Since all three sides of both triangles are known, both triangles can be constructed uniquely using SSS criterion.</p>
          <div class="step">
            <strong>Step-by-Step Steps of Construction:</strong><br>
            1. <strong>Base Diagonal:</strong> Draw line segment <code>AC = 7 cm</code> using a ruler.<br>
            2. <strong>Locating Vertex B:</strong> With A as center and radius <code>4.5 cm</code>, draw an arc above AC. With C as center and radius <code>5.5 cm</code>, draw another arc intersecting the previous arc at point <strong>B</strong>.<br>
            3. Join AB and BC.<br>
            4. <strong>Locating Vertex D:</strong> With A as center and radius <code>6 cm</code>, draw an arc below AC. With C as center and radius <code>4 cm</code>, draw another arc intersecting the previous arc at point <strong>D</strong>.<br>
            5. Join AD and CD.<br>
            6. <strong>ABCD</strong> is the required quadrilateral.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Drawing diagonal AC = 7 cm and constructing ΔABC</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Constructing ΔADC and completing quadrilateral ABCD</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c8m-ch11-q2">
    <div class="q-head" onclick="toggleQ('c8m-ch11-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Construct a quadrilateral JUMP where JU = 3.5 cm, UM = 4 cm, MP = 5 cm, PJ = 4.5 cm, and PU = 6.5 cm. Detail the steps of construction.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Steps of Construction:</strong><br>
            1. Draw the base diagonal <code>PU = 6.5 cm</code>.<br>
            2. In ΔJPU, with P as center and radius 4.5 cm, draw an arc. With U as center and radius 3.5 cm, draw another arc intersecting the first at <strong>J</strong>.<br>
            3. Join PJ and UJ to complete ΔJPU.<br>
            4. On the other side of PU, with P as center and radius 5 cm, draw an arc. With U as center and radius 4 cm, draw an arc intersecting it at <strong>M</strong>.<br>
            5. Join PM and UM.<br>
            6. <strong>JUMP</strong> is the required quadrilateral.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Drawing diagonal PU = 6.5 cm and locating J</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Locating M and joining boundary segments</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c8m-ch11-q3">
    <div class="q-head" onclick="toggleQ('c8m-ch11-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Construct a rhombus BEND whose diagonals are BN = 5.6 cm and DE = 6.5 cm. Explain why only 2 measurements are sufficient to construct this quadrilateral uniquely.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Geometric Invariant:</strong> The diagonals of a rhombus are <strong>perpendicular bisectors of each other</strong>. This intrinsic property provides 3 implicit constraints (90° intersection, and two midpoints), so knowing just the 2 diagonal lengths fully determines the 5 independent parameters needed for a unique quadrilateral.</p>
          <div class="step">
            <strong>Steps of Construction:</strong><br>
            1. Draw line segment <code>DE = 6.5 cm</code>.<br>
            2. Draw the perpendicular bisector of DE using compass arcs. Let this line intersect DE at midpoint <strong>O</strong> (where OE = OD = 3.25 cm).<br>
            3. Since diagonal BN = 5.6 cm, each half is <code>5.6 / 2 = 2.8 cm</code>.<br>
            4. With O as center and radius 2.8 cm, cut arcs on the perpendicular bisector on both sides to locate vertices <strong>B</strong> and <strong>N</strong>.<br>
            5. Join BD, BE, ND, and NE.<br>
            6. <strong>BEND</strong> is the required rhombus.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Justification: Diagonals are perpendicular bisectors</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Accurate construction steps with 2.8 cm radii</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c8m-ch11-q4">
    <div class="q-head" onclick="toggleQ('c8m-ch11-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Construct a quadrilateral MIST where MI = 3.5 cm, IS = 6.5 cm, ∠M = 75°, ∠I = 105°, and ∠S = 120°. Verify the fourth angle ∠T using the angle sum property.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>Angle Verification:</strong><br>
            In quadrilateral MIST, sum of angles = 360°:<br>
            ∠M + ∠I + ∠S + ∠T = 360°<br>
            75° + 105° + 120° + ∠T = 360°<br>
            300° + ∠T = 360° ⇒ <strong>∠T = 60°</strong>.<br><br>
            • <strong>Steps of Construction:</strong><br>
            1. Draw line segment <code>IS = 6.5 cm</code>.<br>
            2. At I, construct an angle of <code>105°</code> using compass (90° + 15°). On this ray, cut off <code>IM = 3.5 cm</code> to fix vertex M.<br>
            3. At S, construct an angle of <code>120°</code> using compass.<br>
            4. At M, construct an angle of <code>75°</code> to meet the ray from S at point <strong>T</strong>.<br>
            5. Measuring ∠T confirms it is exactly <strong>60°</strong>.<br>
            <strong>MIST</strong> is the required quadrilateral.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Calculating ∠T = 60°</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Step-by-step construction of IS, angles 105°, 120°, 75°</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c8m-ch11-q5">
    <div class="q-head" onclick="toggleQ('c8m-ch11-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Construct a parallelogram HEAR where HE = 5 cm, EA = 6 cm, and ∠R = 85°. Find the other three angles prior to construction.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Parallelogram Properties:</strong> Opposite angles are equal; adjacent angles are supplementary.</p>
          <div class="step">
            1. <strong>Angle Calculations:</strong><br>
            - Opposite angle to ∠R is ∠E ⇒ <strong>∠E = 85°</strong>.<br>
            - Adjacent angle ∠H = 180° − 85° = <strong>95°</strong>.<br>
            - Opposite angle to ∠H is ∠A ⇒ <strong>∠A = 95°</strong>.<br>
            - Opposite sides are equal: AR = HE = 5 cm; RH = EA = 6 cm.<br><br>
            2. <strong>Construction:</strong><br>
            - Draw HE = 5 cm.<br>
            - At E, draw ray making angle 85° and cut off EA = 6 cm.<br>
            - At H, draw ray making angle 95° and cut off HR = 6 cm.<br>
            - Join AR (which will measure 5 cm).<br>
            Hence, <strong>HEAR</strong> is constructed.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Calculating angles: ∠E = 85°, ∠H = ∠A = 95°</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Steps of construction of parallelogram HEAR</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c8m-ch11-q6">
    <div class="q-head" onclick="toggleQ('c8m-ch11-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Can you construct a quadrilateral ABCD with AB = 3 cm, BC = 4 cm, CD = 5 cm, DA = 6 cm, and diagonal AC = 8 cm? Justify mathematically using the triangle inequality.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Triangle Inequality Theorem:</strong> In any triangle, the sum of the lengths of any two sides must be strictly greater than the third side.</p>
          <div class="step">
            1. The diagonal AC = 8 cm forms ΔABC with sides AB = 3 cm and BC = 4 cm.<br><br>
            2. Check the triangle inequality in ΔABC:<br>
            AB + BC = 3 + 4 = <strong>7 cm</strong>.<br>
            Third side AC = <strong>8 cm</strong>.<br>
            Clearly, <code>AB + BC &lt; AC</code> (7 &lt; 8).<br><br>
            3. Since the sum of two sides is less than the third side, <strong>ΔABC cannot exist</strong> (the compass arcs with radii 3 cm and 4 cm from ends of an 8 cm segment will never intersect).<br><br>
            Therefore, <strong>it is IMPOSSIBLE to construct quadrilateral ABCD</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating triangle inequality theorem</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Showing 3 + 4 = 7 &lt; 8, proving construction impossible</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c8m-ch11-q7">
    <div class="q-head" onclick="toggleQ('c8m-ch11-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Construct a rectangle with adjacent sides of lengths 5 cm and 4 cm. State why only 2 sides are specified.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>Geometric Justification:</strong> In any rectangle, all four interior angles are inherently 90°, and opposite sides are equal. Therefore, knowing length (5 cm) and breadth (4 cm) provides all required geometric constraints.<br><br>
            • <strong>Steps of Construction:</strong><br>
            1. Draw line segment AB = 5 cm.<br>
            2. At A and B, construct right angles (90°) using compass.<br>
            3. On the perpendicular rays, cut off AD = 4 cm and BC = 4 cm.<br>
            4. Join CD.<br>
            5. ABCD is the required rectangle (with CD = 5 cm and all angles 90°).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Reason: All angles 90° and opposite sides equal</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Steps of construction of rectangle ABCD</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c8m-ch11-q8">
    <div class="q-head" onclick="toggleQ('c8m-ch11-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">Construct a square with side 4.5 cm. How many independent measurements were needed?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. <strong>Independent Measurements Needed:</strong> Only <strong>1 independent measurement</strong> (the side length 4.5 cm) is needed, because a square is defined by having all 4 sides equal and all 4 angles equal to 90°.<br><br>
            2. <strong>Steps of Construction:</strong><br>
            - Draw base segment AB = 4.5 cm.<br>
            - At A and B, construct 90° perpendicular rays using compass.<br>
            - With compass radius 4.5 cm, cut arcs on these rays from A and B to locate vertices D and C respectively.<br>
            - Join CD.<br>
            - ABCD is the required square of side 4.5 cm.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identifying that only 1 measurement is needed</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Accurate construction procedure</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c8m-ch11-q9">
    <div class="q-head" onclick="toggleQ('c8m-ch11-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">Why can regular pentagons NOT tile a flat floor without gaps or overlaps (i.e. cannot form a regular tessellation)? Prove using the interior angle formula.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Tessellation Condition:</strong> For regular polygons to tile a plane seamlessly around a common vertex, the sum of their interior angles meeting at the vertex must equal exactly <strong>360°</strong>. Thus, each interior angle must be an exact divisor of 360°.</p>
          <div class="step">
            1. Interior angle of a regular pentagon (n = 5):<br>
            Interior Angle = <code>(5 − 2) × 180° / 5 = 540° / 5 = 108°</code>.<br><br>
            2. Let <em>k</em> pentagons meet at a vertex:<br>
            k × 108° = 360° ⇒ k = 360 / 108 = 10 / 3 = <strong>3.33...</strong>.<br><br>
            3. Since 3.33 is not an integer:<br>
            - 3 pentagons give: 3 × 108° = 324° (leaving an empty gap of 36°).<br>
            - 4 pentagons give: 4 × 108° = 432° &gt; 360° (causing overlap).<br><br>
            Therefore, regular pentagons <strong>cannot tile a flat floor</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Interior angle = 108°</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">108° does not divide 360° evenly (360/108 = 3.33)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c8m-ch11-q10">
    <div class="q-head" onclick="toggleQ('c8m-ch11-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">Construct a quadrilateral ABCD where AB = 4 cm, BC = 5 cm, CD = 6.5 cm, ∠B = 105°, and ∠C = 80°.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Steps of Construction (3 sides and 2 included angles):</strong><br>
            1. Draw the base line segment <code>BC = 5 cm</code>.<br>
            2. At B, draw a ray BX making an angle of <code>105°</code> with BC.<br>
            3. On ray BX, cut off <code>BA = 4 cm</code> to locate vertex A.<br>
            4. At C, draw a ray CY making an angle of <code>80°</code> with CB.<br>
            5. On ray CY, cut off <code>CD = 6.5 cm</code> to locate vertex D.<br>
            6. Join AD.<br>
            7. <strong>ABCD</strong> is the required quadrilateral.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Constructing base BC and angles 105° and 80°</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Cutting segments 4 cm and 6.5 cm, joining AD</span><span class="marking-marks">1 Mark</span></div>
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
      <strong>Context — Land Surveying &amp; Plaza Tessellation:</strong> A municipal surveyor is mapping a quadrilateral recreation plaza ABCD with boundary measurements: AB = 40 m, BC = 30 m, CD = 35 m, and DA = 25 m.<br>
      The surveyor notes that without measuring any angle or diagonal, the boundary fences could be deformed into various non-rigid shapes.<br>
      Additionally, the interior plaza is to be paved with regular hexagonal tiles.<br><br>
      (a) Explain geometrically why knowing only the four perimeter sides AB, BC, CD, DA is insufficient to uniquely build the plaza.<br>
      (b) If the surveyor measures diagonal AC = 50 m, verify whether angle ∠ABC is a right angle (90°).<br>
      (c) Calculate the interior angle of a regular hexagonal tile and show why regular hexagons can tile the plaza without any gaps.
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Insufficiency of 4 sides:</strong><br>
        A quadrilateral has 1 internal degree of freedom (flexibility). Four line segments connected at hinged joints can be sheared continuously. Exactly 5 independent parameters (such as an included angle or diagonal) are required to fix the quadrilateral into a rigid structure.</p>

        <p><strong>(b) Verification of Right Angle ∠ABC:</strong><br>
        In ΔABC: AB = 40 m, BC = 30 m, and diagonal AC = 50 m.<br>
        AB² + BC² = 40² + 30² = 1600 + 900 = 2500.<br>
        AC² = 50² = 2500.<br>
        Since AB² + BC² = AC², by the Converse of Baudhāyana-Pythagoras Theorem, ΔABC is right-angled at B (<strong>∠ABC = 90°</strong>).</p>

        <p><strong>(c) Hexagonal Tessellation:</strong><br>
        Interior angle of regular hexagon (n = 6) = (6 − 2) × 180° / 6 = 720° / 6 = <strong>120°</strong>.<br>
        At each shared vertex, 3 tiles meet: 3 × 120° = <strong>360°</strong>.<br>
        Since the sum equals exactly 360°, the tiles fit together perfectly with no gaps or overlaps.</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch11.html'), ch11Html, 'utf8');
console.log('Chapter 11 successfully written with 10 questions + CBQ.');
