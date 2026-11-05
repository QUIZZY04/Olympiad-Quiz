// scripts/builders/c7m-additions-part3.js
// Verbatim physical NCERT exercise additions for Class 7 Mathematics Chapters 5 to 8
module.exports = {
  getAdditions() {
    return {
      5: [
        `  <div class="q-card" id="q5_1_3">
    <div class="q-head" onclick="toggleQ('q5_1_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Identify which of the following pairs of angles are complementary and which are supplementary:<br>(i) 65°, 115°<br>(ii) 63°, 27°<br>(iii) 112°, 68°<br>(iv) 130°, 50°<br>(v) 45°, 45°<br>(vi) 80°, 10°</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <em>Recall: Sum = 90° → Complementary; Sum = 180° → Supplementary.</em><br>
            <strong>(i) 65° + 115° = 180°:</strong> <strong>Supplementary angles</strong>.<br>
            <strong>(ii) 63° + 27° = 90°:</strong> <strong>Complementary angles</strong>.<br>
            <strong>(iii) 112° + 68° = 180°:</strong> <strong>Supplementary angles</strong>.<br>
            <strong>(iv) 130° + 50° = 180°:</strong> <strong>Supplementary angles</strong>.<br>
            <strong>(v) 45° + 45° = 90°:</strong> <strong>Complementary angles</strong>.<br>
            <strong>(vi) 80° + 10° = 90°:</strong> <strong>Complementary angles</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct sum and classification</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q5_1_4">
    <div class="q-head" onclick="toggleQ('q5_1_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Find the angle which is equal to its complement.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Let the required angle be <span class="math">x</span>.<br>
            Its complement is <span class="math">90° − x</span>.<br>
            According to the problem: <span class="math">x = 90° − x ⇒ x + x = 90° ⇒ 2x = 90° ⇒ x = 90° / 2 = <strong>45°</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> The angle which is equal to its complement is <strong>45°</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Equation setup: x = 90° − x</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Solving to get x = 45°</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q5_1_5">
    <div class="q-head" onclick="toggleQ('q5_1_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Find the angle which is equal to its supplement.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Let the required angle be <span class="math">x</span>.<br>
            Its supplement is <span class="math">180° − x</span>.<br>
            According to the problem: <span class="math">x = 180° − x ⇒ 2x = 180° ⇒ x = 180° / 2 = <strong>90°</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> The angle which is equal to its supplement is <strong>90°</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Equation setup: x = 180° − x</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Solving to get x = 90°</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q5_1_7">
    <div class="q-head" onclick="toggleQ('q5_1_7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Can two angles be supplementary if both of them are:<br>(i) acute?<br>(ii) obtuse?<br>(iii) right?</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) No:</strong> If both angles are acute (&lt; 90°), their sum is always strictly less than <span class="math">90° + 90° = 180°</span>.<br>
            <strong>(ii) No:</strong> If both angles are obtuse (&gt; 90°), their sum is always strictly greater than <span class="math">90° + 90° = 180°</span>.<br>
            <strong>(iii) Yes:</strong> If both angles are right angles (90° each), their sum is <span class="math">90° + 90° = 180°</span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each part with accurate mathematical reason</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q5_1_12">
    <div class="q-head" onclick="toggleQ('q5_1_12')">
      <div class="q-num">Q12</div>
      <div class="q-text">Find the values of the angles x, y, and z in each of the following:<br>(i) Two intersecting lines form vertically opposite angles, one of which is 55°.<br>(ii) Three rays meet at a line where angles are 40°, x, 25° on one side, and y and z on the opposite side.</div>
      <div class="q-marks">4 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">x = <strong>55°</strong></span> (Vertically opposite angles are equal).<br>
            Since <span class="math">55° + y = 180°</span> (Linear pair), <span class="math">y = 180° − 55° = <strong>125°</strong></span>.<br>
            <span class="math">z = y = <strong>125°</strong></span> (Vertically opposite to y).<br>
            <strong>(ii)</strong> On the straight line: <span class="math">40° + x + 25° = 180° ⇒ x + 65° = 180° ⇒ x = 180° − 65° = <strong>115°</strong></span>.<br>
            <span class="math">z = 40°</span> (Vertically opposite to 40°).<br>
            <span class="math">y + z = 180° ⇒ y + 40° = 180° ⇒ y = 180° − 40° = <strong>140°</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> (i) x = 55°, y = 125°, z = 125°; (ii) x = 115°, y = 140°, z = 40°.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): x = 55°, y = 125°, z = 125° with geometric theorems</span><span class="marking-marks">2 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): x = 115°, y = 140°, z = 40° with linear pair and vertically opposite rules</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q5_2_4">
    <div class="q-head" onclick="toggleQ('q5_2_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Find the value of x in each of the following figures if l ∥ m:<br>(i) A line intersects parallel lines l and m with an angle 110° and interior angle x.<br>(ii) A transversal intersects parallel lines l and m forming corresponding angles 100° and x.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> Let the angle vertically opposite to 110° be ∠1 = 110°.<br>
            Since l ∥ m, interior angles on the same side of the transversal are supplementary:<br>
            <span class="math">110° + x = 180° ⇒ x = 180° − 110° = <strong>70°</strong></span>.<br>
            <strong>(ii)</strong> Since l ∥ m and the line is a transversal, corresponding angles are equal:<br>
            <span class="math">x = <strong>100°</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> (i) x = 70°, (ii) x = 100°.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Supplementary interior angles calculation: x = 70°</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Corresponding angle property: x = 100°</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      6: [
        `  <div class="q-card" id="q6_1_2">
    <div class="q-head" onclick="toggleQ('q6_1_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Draw rough sketches for the following:<br>(a) In ΔABC, BE is a median.<br>(b) In ΔPQR, PQ and PR are altitudes of the triangle.<br>(c) In ΔXYZ, YL is an altitude in the exterior of the triangle.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) In ΔABC, BE is a median:</strong><br>
            Draw triangle ABC. Locate midpoint E on side AC such that <span class="math">AE = EC</span>. Join vertex B to E. The line segment <strong>BE</strong> is the median.<br>
            <strong>(b) In ΔPQR, PQ and PR are altitudes:</strong><br>
            Draw a right-angled triangle PQR, right-angled at vertex P (∠P = 90°). Here, side <strong>PQ ⊥ PR</strong>, so PQ is the altitude to PR and PR is the altitude to PQ.<br>
            <strong>(c) In ΔXYZ, YL is an altitude in the exterior:</strong><br>
            Draw an obtuse-angled triangle XYZ where ∠X is obtuse (&gt; 90°). Produce the opposite base XZ backwards, and draw a perpendicular from vertex Y to meet the extended base at point L. The line segment <strong>YL</strong> lies in the exterior of ΔXYZ.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Accurate description and geometric properties for each sketch</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q6_4_1">
    <div class="q-head" onclick="toggleQ('q6_4_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Is it possible to have a triangle with the following sides?<br>(i) 2 cm, 3 cm, 5 cm<br>(ii) 3 cm, 6 cm, 7 cm<br>(iii) 6 cm, 3 cm, 2 cm</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <em>Property: The sum of the lengths of any two sides of a triangle must be strictly greater than the third side.</em><br>
            <strong>(i) 2 cm, 3 cm, 5 cm:</strong><br>
            <span class="math">2 + 3 = 5 cm</span>, which is not greater than 5 cm. <strong>Not possible</strong>.<br>
            <strong>(ii) 3 cm, 6 cm, 7 cm:</strong><br>
            <span class="math">3 + 6 = 9 &gt; 7</span>, <span class="math">6 + 7 = 13 &gt; 3</span>, <span class="math">3 + 7 = 10 &gt; 6</span>. All conditions satisfied. <strong>Possible</strong>.<br>
            <strong>(iii) 6 cm, 3 cm, 2 cm:</strong><br>
            <span class="math">3 + 2 = 5 &lt; 6</span> (sum of two smaller sides is less than third side). <strong>Not possible</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each part checked against triangle inequality property</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q6_4_6">
    <div class="q-head" onclick="toggleQ('q6_4_6')">
      <div class="q-num">Q6</div>
      <div class="q-text">The lengths of two sides of a triangle are 12 cm and 15 cm. Between what two measures should the length of the third side fall?</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            1. Sum of two sides = <span class="math">15 cm + 12 cm = 27 cm</span>. The third side must be less than 27 cm.<br>
            2. Difference of two sides = <span class="math">15 cm − 12 cm = 3 cm</span>. The third side must be greater than 3 cm.<br>
            Therefore, the length of the third side should fall between <strong>3 cm and 27 cm</strong>.
          </div>
          <p><strong>Final Answer:</strong> The third side must be greater than <strong>3 cm</strong> and less than <strong>27 cm</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating difference boundary (15 − 12 = 3 cm)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Stating sum boundary (15 + 12 = 27 cm)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q6_5_4">
    <div class="q-head" onclick="toggleQ('q6_5_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Which of the following can be the sides of a right triangle?<br>(i) 2.5 cm, 6.5 cm, 6 cm<br>(ii) 2 cm, 2 cm, 5 cm<br>(iii) 1.5 cm, 2 cm, 2.5 cm<br>In the case of right-angled triangles, identify the right angle.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <em>Converse of Pythagoras Theorem: In a right triangle, square of hypotenuse (longest side) equals sum of squares of other two sides.</em><br>
            <strong>(i) 2.5 cm, 6 cm, 6.5 cm:</strong><br>
            <span class="math">(2.5)² + 6² = 6.25 + 36 = 42.25</span>.<br>
            <span class="math">(6.5)² = 42.25</span>. Since <span class="math">2.5² + 6² = 6.5²</span>, these <strong>can be sides of a right triangle</strong>. The right angle is opposite to the side of 6.5 cm.<br>
            <strong>(ii) 2 cm, 2 cm, 5 cm:</strong><br>
            <span class="math">2² + 2² = 4 + 4 = 8 ≠ 5² (25)</span>. <strong>Cannot be sides of a right triangle</strong>.<br>
            <strong>(iii) 1.5 cm, 2 cm, 2.5 cm:</strong><br>
            <span class="math">(1.5)² + 2² = 2.25 + 4 = 6.25</span>.<br>
            <span class="math">(2.5)² = 6.25</span>. Since <span class="math">1.5² + 2² = 2.5²</span>, these <strong>can be sides of a right triangle</strong>. The right angle is opposite to the side of 2.5 cm.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Pythagoras verification for each triplet</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      7: [
        `  <div class="q-card" id="q7_1_1">
    <div class="q-head" onclick="toggleQ('q7_1_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Convert the given fractional numbers to per cents:<br>(a) 1/8 &nbsp;&nbsp; (b) 5/4 &nbsp;&nbsp; (c) 3/40 &nbsp;&nbsp; (d) 2/7</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            To convert fraction to per cent, multiply by 100%:<br>
            <strong>(a)</strong> <span class="math">1/8 × 100% = 100/8% = 25/2% = <strong>12.5% = 12 1/2%</strong></span><br>
            <strong>(b)</strong> <span class="math">5/4 × 100% = 5 × 25% = <strong>125%</strong></span><br>
            <strong>(c)</strong> <span class="math">3/40 × 100% = 30/4% = 15/2% = <strong>7.5% = 7 1/2%</strong></span><br>
            <strong>(d)</strong> <span class="math">2/7 × 100% = 200/7% = <strong>28 4/7%</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct percentage conversion</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q7_1_2">
    <div class="q-head" onclick="toggleQ('q7_1_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Convert the given decimal fractions to per cents:<br>(a) 0.65 &nbsp;&nbsp; (b) 2.1 &nbsp;&nbsp; (c) 0.02 &nbsp;&nbsp; (d) 12.35</div>
      <div class="q-marks">2 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Multiply decimal by 100%:<br>
            <strong>(a)</strong> <span class="math">0.65 × 100% = <strong>65%</strong></span><br>
            <strong>(b)</strong> <span class="math">2.1 × 100% = <strong>210%</strong></span><br>
            <strong>(c)</strong> <span class="math">0.02 × 100% = <strong>2%</strong></span><br>
            <strong>(d)</strong> <span class="math">12.35 × 100% = <strong>1235%</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each accurate conversion with % symbol</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q7_1_5">
    <div class="q-head" onclick="toggleQ('q7_1_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Find the whole quantity if:<br>(a) 5% of it is 600<br>(b) 12% of it is ₹1080<br>(c) 40% of it is 500 km<br>(d) 70% of it is 14 minutes<br>(e) 8% of it is 40 litres</div>
      <div class="q-marks">5 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Let the whole quantity be <span class="math">x</span>:<br>
            <strong>(a)</strong> <span class="math">5% of x = 600 ⇒ (5/100) × x = 600 ⇒ x = (600 × 100) / 5 = <strong>12,000</strong></span>.<br>
            <strong>(b)</strong> <span class="math">12% of x = ₹1080 ⇒ x = (1080 × 100) / 12 = <strong>₹9,000</strong></span>.<br>
            <strong>(c)</strong> <span class="math">40% of x = 500 km ⇒ x = (500 × 100) / 40 = <strong>1250 km</strong></span>.<br>
            <strong>(d)</strong> <span class="math">70% of x = 14 min ⇒ x = (14 × 100) / 70 = <strong>20 minutes</strong></span>.<br>
            <strong>(e)</strong> <span class="math">8% of x = 40 L ⇒ x = (40 × 100) / 8 = <strong>500 litres</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct algebraic calculation with units</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q7_1_8">
    <div class="q-head" onclick="toggleQ('q7_1_8')">
      <div class="q-num">Q8</div>
      <div class="q-text">Out of 15,000 voters in a constituency, 60% voted. Find the percentage of voters who did not vote. Can you now find how many actually did not vote?</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Total number of voters = 15,000.<br>
            Percentage of voters who voted = 60%.<br>
            Percentage of voters who did not vote = <span class="math">100% − 60% = <strong>40%</strong></span>.<br>
            Number of voters who did not vote = <span class="math">40% of 15,000 = (40 / 100) × 15,000 = 40 × 150 = <strong>6,000 voters</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> <strong>40%</strong> of voters did not vote, which corresponds to <strong>6,000 voters</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Percentage calculation: 100% − 60% = 40%</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Total count: (40/100) × 15000 = 6000 voters</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q7_2_10">
    <div class="q-head" onclick="toggleQ('q7_2_10')">
      <div class="q-num">Q10</div>
      <div class="q-text">What rate gives ₹280 as interest on a sum of ₹56,000 in 2 years?</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Principal (<span class="math">P</span>) = ₹56,000.<br>
            Simple Interest (<span class="math">I</span>) = ₹280.<br>
            Time (<span class="math">T</span>) = 2 years.<br>
            Formula: <span class="math">I = (P × R × T) / 100 ⇒ R = (I × 100) / (P × T)</span>.<br>
            <span class="math">R = (280 × 100) / (56,000 × 2) = 28,000 / 1,12,000 = 28 / 112 = 1 / 4 = <strong>0.25% per annum</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> The rate of interest is <strong>0.25% p.a.</strong> (or 1/4% p.a.).</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula: R = (I × 100) / (P × T)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Calculation: R = 0.25% per annum</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      8: [
        `  <div class="q-card" id="q8_1_1">
    <div class="q-head" onclick="toggleQ('q8_1_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">List five rational numbers between:<br>(i) −1 and 0<br>(ii) −2 and −1<br>(iii) −4/5 and −2/3</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Between −1 and 0:</strong><br>
            Write −1 as <span class="math">−6/6</span> and 0 as <span class="math">0/6</span>.<br>
            Five rational numbers are: <span class="math"><strong>−5/6, −4/6 (−2/3), −3/6 (−1/2), −2/6 (−1/3), −1/6</strong></span>.<br>
            <strong>(ii) Between −2 and −1:</strong><br>
            Write −2 as <span class="math">−12/6</span> and −1 as <span class="math">−6/6</span>.<br>
            Five rational numbers are: <span class="math"><strong>−11/6, −10/6, −9/6, −8/6, −7/6</strong></span>.<br>
            <strong>(iii) Between −4/5 and −2/3:</strong><br>
            LCM of 5 and 3 is 15: <span class="math">−4/5 = −12/15</span> and <span class="math">−2/3 = −10/15</span>.<br>
            Multiply numerator and denominator by 6: <span class="math">−72/90</span> and <span class="math">−60/90</span>.<br>
            Five rational numbers are: <span class="math"><strong>−71/90, −70/90, −69/90, −68/90, −67/90</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Common denominator method shown</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Five valid numbers listed for each part</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q8_1_3">
    <div class="q-head" onclick="toggleQ('q8_1_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Give four rational numbers equivalent to:<br>(i) −2/7 &nbsp;&nbsp; (ii) 5/−3 &nbsp;&nbsp; (iii) 4/9</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Multiply numerator and denominator by 2, 3, 4, 5:<br>
            <strong>(i) −2/7:</strong><br>
            <span class="math">(−2×2)/(7×2) = <strong>−4/14</strong></span>, <span class="math">(−2×3)/(7×3) = <strong>−6/21</strong></span>, <span class="math">(−2×4)/(7×4) = <strong>−8/28</strong></span>, <span class="math">(−2×5)/(7×5) = <strong>−10/35</strong></span>.<br>
            <strong>(ii) 5/−3:</strong><br>
            <span class="math"><strong>10/−6, 15/−9, 20/−12, 25/−15</strong></span>.<br>
            <strong>(iii) 4/9:</strong><br>
            <span class="math"><strong>8/18, 12/27, 16/36, 20/45</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Four correct equivalent fractions for each part</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ]
    };
  }
};
