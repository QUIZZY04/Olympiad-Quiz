const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c8m');

const ch9Html = `<section class="chapter-section" id="ch9">
  <div class="chapter-header">
    <div class="ch-badge">9</div>
    <div class="chapter-header-info">
      <h2>Chapter 9: The Baudhāyana - Pythagoras Theorem</h2>
      <p>NCERT Ganita Prakash (Class 8 Part 2) — Śulbasūtra Geometric Formulation, Right-Angled Triangles, Pythagorean Triplets, Dissection Proofs &amp; Applications | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Historical Heritage &amp; Geometric Formulation</div>
    <ul class="concept-list">
      <li><strong>Baudhāyana's Śulbasūtra Theorem (c. 800 BCE):</strong>
        <p><em>"The rope stretched along the length of the diagonal of a rectangle produces an area which the vertical and horizontal sides make together."</em><br>
        In modern algebraic notation: <code>Diagonal² = Length² + Breadth²</code>.</p>
      </li>
      <li><strong>Pythagoras Theorem:</strong> In any right-angled triangle, the square of the hypotenuse (the longest side opposite the right angle) is equal to the sum of the squares of the other two sides:
        <ul>
          <li><code>Hypotenuse² = Base² + Perpendicular²</code> (or <code>c² = a² + b²</code>).</li>
        </ul>
      </li>
      <li><strong>Converse of the Theorem:</strong> If the lengths of the three sides of a triangle satisfy <code>a² + b² = c²</code>, then the triangle is necessarily a <strong>right-angled triangle</strong>, with the right angle located opposite side <em>c</em>.</li>
      <li><strong>Pythagorean Triplets:</strong> A set of three positive integers <em>(a, b, c)</em> satisfying <code>a² + b² = c²</code>.
        <ul>
          <li>Primitive Triplets: <code>(3, 4, 5)</code>, <code>(5, 12, 13)</code>, <code>(7, 24, 25)</code>, <code>(8, 15, 17)</code>, <code>(9, 40, 41)</code>, <code>(11, 60, 61)</code>, <code>(12, 35, 37)</code>, <code>(20, 21, 29)</code>.</li>
          <li>For any natural number <em>m &gt; 1</em>: <code>(2m)² + (m² − 1)² = (m² + 1)²</code> generates a Pythagorean triplet.</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- SVG Diagram 9: Classical 3-4-5 Square-on-Sides Proof -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Visual Proof: Squares Erected on Sides of a Right Triangle (3² + 4² = 5²)</text>
      
      <!-- Center Right Triangle -->
      <g transform="translate(180, 70)">
        <!-- Vertical leg = 60 (b = 3), Horizontal leg = 80 (a = 4), Hypotenuse = 100 (c = 5) -->
        <polygon points="0,60 80,60 0,0" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <rect x="0" y="48" width="12" height="12" fill="none" stroke="#ca8a04" stroke-width="1.5"/>

        <!-- Square on base a = 4 (underneath) -->
        <rect x="0" y="60" width="80" height="80" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <text x="40" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1d4ed8" text-anchor="middle">Area = 4² = 16</text>

        <!-- Square on vertical leg b = 3 (to the left) -->
        <rect x="-60" y="0" width="60" height="60" fill="#fce7f3" stroke="#db2777" stroke-width="2"/>
        <text x="-30" y="35" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#9d174d" text-anchor="middle">3² = 9</text>

        <!-- Square on hypotenuse c = 5 (slanted) -->
        <polygon points="0,0 80,60 140,-20 60,-80" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
        <text x="70" y="-10" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#15803d" text-anchor="middle">Area = 5² = 25</text>
        <text x="70" y="8" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#166534" text-anchor="middle">(9 + 16 = 25)</text>

        <text x="40" y="55" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f172a" text-anchor="middle">a = 4</text>
        <text x="-10" y="30" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f172a" text-anchor="middle">b = 3</text>
        <text x="45" y="24" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f172a" text-anchor="middle">c = 5</text>
      </g>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 9.1: Baudhāyana-Pythagorean Geometric Equivalence: Hypotenuse² = Base² + Altitude²</div>
  </div>

  <div class="ex-div">NCERT Ganita Prakash: Figure It Out &amp; Comprehensive Exercises (100% Questions Solved)</div>

  <!-- Q1 -->
  <div class="q-card" id="c8m-ch9-q1">
    <div class="q-head" onclick="toggleQ('c8m-ch9-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">In a right-angled triangle ABC, right-angled at B, if AB = 6 cm and BC = 8 cm, find the length of AC.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Baudhāyana-Pythagoras Theorem:</strong> In right-angled triangle ΔABC with ∠B = 90°, the hypotenuse is AC.<br>
          <code>AC² = AB² + BC²</code>.</p>
          <div class="step">
            1. Substitute AB = 6 cm and BC = 8 cm:<br>
            AC² = 6² + 8²<br>
            AC² = 36 + 64 = 100.<br><br>
            2. Taking the positive square root:<br>
            AC = √100 = <strong>10 cm</strong>.<br><br>
            Therefore, the length of AC is <strong>10 cm</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Applying AC² = AB² + BC²</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Calculating AC = 10 cm</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c8m-ch9-q2">
    <div class="q-head" onclick="toggleQ('c8m-ch9-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">A 15 m long ladder reached a window 12 m high from the ground on placing it against a wall at a distance a. Find the distance of the foot of the ladder from the wall.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. The wall, ground, and ladder form a right-angled triangle where:<br>
            - Hypotenuse (length of ladder) = 15 m.<br>
            - Perpendicular (height of window) = 12 m.<br>
            - Base (distance from wall) = <code>a</code>.<br><br>
            2. By Pythagoras Theorem:<br>
            (Ladder)² = (Wall height)² + a²<br>
            15² = 12² + a²<br>
            225 = 144 + a²<br><br>
            3. Solving for a:<br>
            a² = 225 − 144 = 81<br>
            a = √81 = <strong>9 meters</strong>.<br><br>
            Hence, the foot of the ladder is <strong>9 meters</strong> away from the wall.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Pythagoras equation 15² = 12² + a²</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Solving a² = 81 ⇒ a = 9 m</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c8m-ch9-q3">
    <div class="q-head" onclick="toggleQ('c8m-ch9-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Which of the following can be the sides of a right-angled triangle?<br>(i) 2.5 cm, 6.5 cm, 6 cm<br>(ii) 2 cm, 2 cm, 5 cm<br>(iii) 1.5 cm, 2 cm, 2.5 cm</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Converse Theorem:</strong> Three side lengths form a right triangle if and only if the square of the longest side equals the sum of the squares of the two smaller sides.</p>
          <div class="step">
            • <strong>(i) 2.5 cm, 6.5 cm, 6 cm:</strong><br>
            Longest side = 6.5 cm ⇒ 6.5² = 42.25.<br>
            Sum of squares of other two sides = 2.5² + 6² = 6.25 + 36 = 42.25.<br>
            Since 2.5² + 6² = 6.5², <strong>Yes, they form a right-angled triangle</strong> (right angle is opposite the 6.5 cm side).<br><br>

            • <strong>(ii) 2 cm, 2 cm, 5 cm:</strong><br>
            First check triangle inequality: 2 + 2 = 4 &lt; 5 (Sum of two sides is less than the third side).<br>
            This cannot even form a valid triangle, let alone a right triangle. <strong>No</strong>.<br><br>

            • <strong>(iii) 1.5 cm, 2 cm, 2.5 cm:</strong><br>
            Longest side = 2.5 cm ⇒ 2.5² = 6.25.<br>
            Sum of squares of other sides = 1.5² + 2² = 2.25 + 4 = 6.25.<br>
            Since 1.5² + 2² = 2.5², <strong>Yes, they form a right-angled triangle</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Checking a² + b² = c² condition for each</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Accurate conclusions: (i) Yes, (ii) No, (iii) Yes</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c8m-ch9-q4">
    <div class="q-head" onclick="toggleQ('c8m-ch9-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">A tree is broken at a height of 5 m from the ground and its top touches the ground at a distance of 12 m from the base of the tree. Find the original height of the tree.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Let AB be the upright standing portion of the tree = 5 m.<br>
            Let C be the point on the ground where the top touches, so BC = 12 m.<br>
            Let AC be the broken bent part of the tree (hypotenuse).<br><br>
            2. By Pythagoras Theorem in right triangle ΔABC:<br>
            AC² = AB² + BC²<br>
            AC² = 5² + 12² = 25 + 144 = 169.<br>
            AC = √169 = <strong>13 meters</strong>.<br><br>
            3. The original height of the tree before breaking was:<br>
            <code>Original Height = AB + AC = 5 + 13 = 18 meters</code>.<br><br>
            Hence, the original height of the tree was <strong>18 meters</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Calculating broken part AC = √169 = 13 m</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Total original height = 5 + 13 = 18 m</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c8m-ch9-q5">
    <div class="q-head" onclick="toggleQ('c8m-ch9-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Find the perimeter of the rectangle whose length is 40 cm and a diagonal is 41 cm.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Baudhāyana's Rectangle Rule:</strong> <code>Diagonal² = Length² + Breadth²</code>.</p>
          <div class="step">
            1. Let breadth of the rectangle be <code>b</code> cm.<br>
            Diagonal = 41 cm, Length = 40 cm.<br>
            41² = 40² + b²<br>
            1681 = 1600 + b²<br>
            b² = 1681 − 1600 = 81<br>
            b = √81 = <strong>9 cm</strong>.<br><br>
            2. Perimeter of the rectangle:<br>
            Perimeter = 2 × (Length + Breadth)<br>
            Perimeter = 2 × (40 + 9) = 2 × 49 = <strong>98 cm</strong>.<br><br>
            Therefore, the perimeter of the rectangle is <strong>98 cm</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Breadth calculation: b = √81 = 9 cm</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Perimeter = 2(40 + 9) = 98 cm</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c8m-ch9-q6">
    <div class="q-head" onclick="toggleQ('c8m-ch9-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Find the length of the diagonal of a square whose side is 10 cm. If the diagonal of another square is 16 cm, find its side and area.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Square Diagonal Property:</strong> For a square of side <em>s</em>, the diagonal <em>d</em> satisfies <code>d² = s² + s² = 2s² ⇒ d = s√2</code>.</p>
          <div class="step">
            • <strong>Part 1: Square with side s = 10 cm:</strong><br>
            d² = 10² + 10² = 100 + 100 = 200.<br>
            d = √200 = √(100 × 2) = <strong>10√2 cm</strong> (≈ 14.14 cm).<br><br>

            • <strong>Part 2: Square with diagonal d = 16 cm:</strong><br>
            2s² = d² = 16² = 256.<br>
            s² = 256 / 2 = 128.<br>
            Side s = √128 = √(64 × 2) = <strong>8√2 cm</strong> (≈ 11.31 cm).<br><br>
            Area of the square = s² = <strong>128 cm²</strong><br>
            (Direct formula: Area = d² / 2 = 16² / 2 = 256 / 2 = 128 cm²).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Diagonal of first square = 10√2 cm</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Side = 8√2 cm and Area = 128 cm²</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c8m-ch9-q7">
    <div class="q-head" onclick="toggleQ('c8m-ch9-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Two poles of heights 6 m and 11 m stand on a plane ground. If the distance between their feet is 12 m, find the distance between their tops.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Let AB = 11 m and CD = 6 m be the two vertical poles.<br>
            Distance between feet BD = 12 m.<br>
            Draw a horizontal line segment CE perpendicular to AB.<br><br>
            2. Then CE = BD = 12 m, and EB = CD = 6 m.<br>
            Vertical difference in height AE = AB − EB = 11 − 6 = <strong>5 m</strong>.<br><br>
            3. In right-angled triangle ΔAEC, the distance between the tops is the hypotenuse AC:<br>
            AC² = AE² + CE²<br>
            AC² = 5² + 12² = 25 + 144 = 169.<br>
            AC = √169 = <strong>13 meters</strong>.<br><br>
            Therefore, the distance between their tops is <strong>13 meters</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Geometric construction: AE = 5 m, CE = 12 m</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Pythagoras theorem: AC = √169 = 13 m</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c8m-ch9-q8">
    <div class="q-head" onclick="toggleQ('c8m-ch9-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">A person travels 24 km due East and then 10 km due North. How far is he from his starting point?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. East and North directions are perpendicular to each other (angle = 90°).<br>
            Let starting point be O.<br>
            - Distance East OA = 24 km.<br>
            - Distance North AB = 10 km.<br>
            The direct displacement from O to B is the hypotenuse OB.<br><br>
            2. By Baudhāyana-Pythagoras Theorem:<br>
            OB² = OA² + AB²<br>
            OB² = 24² + 10² = 576 + 100 = 676.<br><br>
            3. Taking the square root:<br>
            OB = √676 = <strong>26 km</strong>.<br><br>
            Hence, he is <strong>26 km</strong> away from his starting point.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Perpendicular directions model: OB² = 24² + 10²</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">OB = √676 = 26 km</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c8m-ch9-q9">
    <div class="q-head" onclick="toggleQ('c8m-ch9-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">An isosceles triangle ABC has AB = AC = 13 cm and base BC = 10 cm. Find the altitude from vertex A to side BC and calculate the area of triangle ABC.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Property:</strong> In an isosceles triangle, the altitude from the vertex angle bisects the base.</p>
          <div class="step">
            1. Let AD be the altitude from A perpendicular to BC.<br>
            Then D is the midpoint of BC ⇒ BD = BC / 2 = 10 / 2 = <strong>5 cm</strong>.<br><br>
            2. In right-angled triangle ΔABD:<br>
            AB² = AD² + BD²<br>
            13² = AD² + 5²<br>
            169 = AD² + 25<br>
            AD² = 169 − 25 = 144<br>
            AD = √144 = <strong>12 cm</strong>.<br><br>
            3. Area of triangle ABC:<br>
            Area = 1/2 × Base × Height = 1/2 × BC × AD<br>
            Area = 1/2 × 10 × 12 = <strong>60 cm²</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Altitude bisects base: BD = 5 cm, AD = 12 cm</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Area = 1/2 × 10 × 12 = 60 cm²</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c8m-ch9-q10">
    <div class="q-head" onclick="toggleQ('c8m-ch9-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">Generate three distinct Pythagorean triplets using the algebraic identity (2m, m² − 1, m² + 1) for m = 3, 4, and 5. Verify the Pythagorean equation for each.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) For m = 3:</strong><br>
            2m = 2(3) = 6.<br>
            m² − 1 = 3² − 1 = 9 − 1 = 8.<br>
            m² + 1 = 3² + 1 = 9 + 1 = 10.<br>
            Triplet: <strong>(6, 8, 10)</strong>.<br>
            <em>Verification:</em> 6² + 8² = 36 + 64 = 100 = 10². Verified.<br><br>

            • <strong>(ii) For m = 4:</strong><br>
            2m = 2(4) = 8.<br>
            m² − 1 = 4² − 1 = 16 − 1 = 15.<br>
            m² + 1 = 4² + 1 = 16 + 1 = 17.<br>
            Triplet: <strong>(8, 15, 17)</strong>.<br>
            <em>Verification:</em> 8² + 15² = 64 + 225 = 289 = 17². Verified.<br><br>

            • <strong>(iii) For m = 5:</strong><br>
            2m = 2(5) = 10.<br>
            m² − 1 = 5² − 1 = 25 − 1 = 24.<br>
            m² + 1 = 5² + 1 = 25 + 1 = 26.<br>
            Triplet: <strong>(10, 24, 26)</strong>.<br>
            <em>Verification:</em> 10² + 24² = 100 + 576 = 676 = 26². Verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Applying 2m, m² − 1, m² + 1 formulas</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Verification of all 3 triplets</span><span class="marking-marks">1.5 Marks</span></div>
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
      <strong>Context — Civil Infrastructure &amp; Cable-Stayed Bridge Construction:</strong> In a river bridge project, a central vertical pylon tower rises 36 meters above the bridge road deck. Two steel stay cables are anchored from the top of the tower to two points on the road deck, one on the North side and one on the South side.<br>
      The North anchoring point is 27 meters away from the base of the pylon, while the South anchoring point is 48 meters away from the base.<br><br>
      (a) Calculate the length of the North stay cable.<br>
      (b) Calculate the length of the South stay cable.<br>
      (c) Find the total length of steel cable used for both stays, and determine the direct horizontal distance between the two cable anchor points on the bridge deck.
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Length of North stay cable (L_N):</strong><br>
        Tower height h = 36 m, North base distance d_N = 27 m.<br>
        L_N² = 36² + 27² = 1296 + 729 = 2025.<br>
        L_N = √2025 = <strong>45 meters</strong>.</p>

        <p><strong>(b) Length of South stay cable (L_S):</strong><br>
        Tower height h = 36 m, South base distance d_S = 48 m.<br>
        L_S² = 36² + 48² = 1296 + 2304 = 3600.<br>
        L_S = √3600 = <strong>60 meters</strong>.</p>

        <p><strong>(c) Total cable length &amp; Anchor distance:</strong><br>
        - Total steel cable length = 45 + 60 = <strong>105 meters</strong>.<br>
        - Since North and South anchors lie on opposite sides of the pylon base along the road deck:<br>
        Direct horizontal distance between anchors = d_N + d_S = 27 + 48 = <strong>75 meters</strong>.</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch9.html'), ch9Html, 'utf8');
console.log('Chapter 9 successfully written with 10 questions + CBQ.');
