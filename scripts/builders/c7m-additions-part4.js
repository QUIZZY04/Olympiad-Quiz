// scripts/builders/c7m-additions-part4.js
// Verbatim physical NCERT exercise additions for Class 7 Mathematics Chapters 9 to 13
module.exports = {
  getAdditions() {
    return {
      9: [
        `  <div class="q-card" id="q9_1_1">
    <div class="q-head" onclick="toggleQ('q9_1_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Find the area of each of the following parallelograms:<br>(a) base = 7 cm, height = 4 cm<br>(b) base = 5 cm, height = 3 cm<br>(c) base = 2.5 cm, height = 3.5 cm<br>(d) base = 5 cm, height = 4.8 cm<br>(e) base = 2 cm, height = 4.4 cm</div>
      <div class="q-marks">5 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <em>Formula: Area of Parallelogram = base × height</em><br>
            <strong>(a)</strong> <span class="math">7 cm × 4 cm = <strong>28 cm²</strong></span><br>
            <strong>(b)</strong> <span class="math">5 cm × 3 cm = <strong>15 cm²</strong></span><br>
            <strong>(c)</strong> <span class="math">2.5 cm × 3.5 cm = <strong>8.75 cm²</strong></span><br>
            <strong>(d)</strong> <span class="math">5 cm × 4.8 cm = <strong>24 cm²</strong></span><br>
            <strong>(e)</strong> <span class="math">2 cm × 4.4 cm = <strong>8.8 cm²</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula stated + accurate calculation for each</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_1_2">
    <div class="q-head" onclick="toggleQ('q9_1_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Find the area of each of the following triangles:<br>(a) base = 4 cm, height = 3 cm<br>(b) base = 5 cm, height = 3.2 cm<br>(c) base = 3 cm, height = 4 cm<br>(d) base = 3 cm, height = 2 cm</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <em>Formula: Area of Triangle = 1/2 × base × height</em><br>
            <strong>(a)</strong> <span class="math">1/2 × 4 × 3 = 2 × 3 = <strong>6 cm²</strong></span><br>
            <strong>(b)</strong> <span class="math">1/2 × 5 × 3.2 = 5 × 1.6 = <strong>8 cm²</strong></span><br>
            <strong>(c)</strong> <span class="math">1/2 × 3 × 4 = 3 × 2 = <strong>6 cm²</strong></span><br>
            <strong>(d)</strong> <span class="math">1/2 × 3 × 2 = <strong>3 cm²</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct evaluation with formula and cm² unit</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_1_5">
    <div class="q-head" onclick="toggleQ('q9_1_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">PQRS is a parallelogram. QM is the height from Q to SR and QN is the height from Q to PS. If SR = 12 cm and QM = 7.6 cm:<br>(a) Find the area of the parallelogram PQRS.<br>(b) Find QN, if PS = 8 cm.</div>
      <div class="q-marks">4 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Area of parallelogram PQRS:</strong><br>
            Base = SR = 12 cm, Height = QM = 7.6 cm.<br>
            <span class="math">Area = Base × Height = 12 × 7.6 = <strong>91.2 cm²</strong></span>.
          </div>
          <div class="step">
            <strong>(b) Find QN when PS = 8 cm:</strong><br>
            Base = PS = 8 cm, Height = QN.<br>
            <span class="math">Area = Base × Height ⇒ 91.2 = 8 × QN ⇒ QN = 91.2 / 8 = <strong>11.4 cm</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> (a) Area = <strong>91.2 cm²</strong>; (b) QN = <strong>11.4 cm</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (a): Area = 12 × 7.6 = 91.2 cm²</span><span class="marking-marks">2 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Part (b): QN = 91.2 / 8 = 11.4 cm</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_2_3">
    <div class="q-head" onclick="toggleQ('q9_2_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">If the circumference of a circular sheet is 154 m, find its radius. Also find the area of the sheet. (Take π = 22/7).</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Circumference (<span class="math">C</span>) = 154 m.<br>
            <span class="math">2πr = 154 ⇒ 2 × (22/7) × r = 154 ⇒ r = (154 × 7) / 44 = (7 × 7) / 2 = 49/2 = <strong>24.5 m</strong></span>.<br>
            <span class="math">Area = πr² = (22/7) × (49/2) × (49/2) = 11 × 7 × 49 / 2 = 3773 / 2 = <strong>1886.5 m²</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> Radius is <strong>24.5 m</strong> and Area is <strong>1886.5 m²</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Radius = 24.5 m</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Area = 1886.5 m²</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      10: [
        `  <div class="q-card" id="q10_1_1">
    <div class="q-head" onclick="toggleQ('q10_1_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Get the algebraic expressions in the following cases using variables, constants and arithmetic operations:<br>(i) Subtraction of z from y.<br>(ii) One-half of the sum of numbers x and y.<br>(iii) The number z multiplied by itself.<br>(iv) One-fourth of the product of numbers p and q.<br>(v) Numbers x and y both squared and added.<br>(vi) Number 5 added to three times the product of numbers m and n.<br>(vii) Product of numbers y and z subtracted from 10.<br>(viii) Sum of numbers a and b subtracted from their product.</div>
      <div class="q-marks">4 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math"><strong>y − z</strong></span><br>
            <strong>(ii)</strong> <span class="math"><strong>(x + y) / 2</strong></span><br>
            <strong>(iii)</strong> <span class="math"><strong>z²</strong></span><br>
            <strong>(iv)</strong> <span class="math"><strong>pq / 4</strong></span><br>
            <strong>(v)</strong> <span class="math"><strong>x² + y²</strong></span><br>
            <strong>(vi)</strong> <span class="math"><strong>3mn + 5</strong></span><br>
            <strong>(vii)</strong> <span class="math"><strong>10 − yz</strong></span><br>
            <strong>(viii)</strong> <span class="math"><strong>ab − (a + b)</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct algebraic formulation</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q10_2_1">
    <div class="q-head" onclick="toggleQ('q10_2_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">If m = 2, find the value of:<br>(i) m − 2<br>(ii) 3m − 5<br>(iii) 9 − 5m<br>(iv) 3m² − 2m − 7<br>(v) 5m/2 − 4</div>
      <div class="q-marks">5 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Substitute <span class="math">m = 2</span> into each expression:<br>
            <strong>(i)</strong> <span class="math">2 − 2 = <strong>0</strong></span><br>
            <strong>(ii)</strong> <span class="math">3(2) − 5 = 6 − 5 = <strong>1</strong></span><br>
            <strong>(iii)</strong> <span class="math">9 − 5(2) = 9 − 10 = <strong>−1</strong></span><br>
            <strong>(iv)</strong> <span class="math">3(2)² − 2(2) − 7 = 3(4) − 4 − 7 = 12 − 11 = <strong>1</strong></span><br>
            <strong>(v)</strong> <span class="math">5(2)/2 − 4 = 5 − 4 = <strong>1</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct substitution and arithmetic evaluation</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q10_2_9">
    <div class="q-head" onclick="toggleQ('q10_2_9')">
      <div class="q-num">Q9</div>
      <div class="q-text">What should be the value of a if the value of 2x² + x − a equals 5, when x = 0?</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Given expression: <span class="math">2x² + x − a = 5</span>.<br>
            Substitute <span class="math">x = 0</span>:<br>
            <span class="math">2(0)² + (0) − a = 5 ⇒ 0 + 0 − a = 5 ⇒ −a = 5 ⇒ a = <strong>−5</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> The value of <span class="math">a</span> is <strong>−5</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Substitution of x = 0: 0 + 0 − a = 5</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Result: a = −5</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      11: [
        `  <div class="q-card" id="q11_1_1">
    <div class="q-head" onclick="toggleQ('q11_1_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Find the value of:<br>(i) 2⁶<br>(ii) 9³<br>(iii) 11²<br>(iv) 5⁴</div>
      <div class="q-marks">2 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">2⁶ = 2 × 2 × 2 × 2 × 2 × 2 = <strong>64</strong></span><br>
            <strong>(ii)</strong> <span class="math">9³ = 9 × 9 × 9 = <strong>729</strong></span><br>
            <strong>(iii)</strong> <span class="math">11² = 11 × 11 = <strong>121</strong></span><br>
            <strong>(iv)</strong> <span class="math">5⁴ = 5 × 5 × 5 × 5 = <strong>625</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct evaluation</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q11_3_4">
    <div class="q-head" onclick="toggleQ('q11_3_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Express the number appearing in the following statements in standard form:<br>(a) The distance between Earth and Moon is 384,000,000 m.<br>(b) Speed of light in vacuum is 300,000,000 m/s.<br>(c) Diameter of the Earth is 1,27,56,000 m.<br>(d) Diameter of the Sun is 1,400,000,000 m.<br>(e) In a galaxy there are on an average 100,000,000,000 stars.</div>
      <div class="q-marks">5 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <em>Standard scientific notation: <span class="math">k × 10ⁿ</span> where <span class="math">1 ≤ k &lt; 10</span></em>.<br>
            <strong>(a)</strong> <span class="math">384,000,000 m = <strong>3.84 × 10⁸ m</strong></span><br>
            <strong>(b)</strong> <span class="math">300,000,000 m/s = <strong>3.0 × 10⁸ m/s</strong></span><br>
            <strong>(c)</strong> <span class="math">12,756,000 m = <strong>1.2756 × 10⁷ m</strong></span><br>
            <strong>(d)</strong> <span class="math">1,400,000,000 m = <strong>1.4 × 10⁹ m</strong></span><br>
            <strong>(e)</strong> <span class="math">100,000,000,000 = <strong>1.0 × 10¹¹ stars</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct standard form representation with accurate power of 10</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      12: [
        `  <div class="q-card" id="q12_1_7">
    <div class="q-head" onclick="toggleQ('q12_1_7')">
      <div class="q-num">Q7</div>
      <div class="q-text">State the number of lines of symmetry for the following figures:<br>(a) An equilateral triangle<br>(b) An isosceles triangle<br>(c) A scalene triangle<br>(d) A square<br>(e) A rectangle<br>(f) A rhombus<br>(g) A parallelogram<br>(h) A quadrilateral<br>(i) A regular hexagon<br>(j) A circle</div>
      <div class="q-marks">5 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Equilateral triangle:</strong> <strong>3 lines of symmetry</strong>.<br>
            <strong>(b) Isosceles triangle:</strong> <strong>1 line of symmetry</strong>.<br>
            <strong>(c) Scalene triangle:</strong> <strong>0 (no line of symmetry)</strong>.<br>
            <strong>(d) Square:</strong> <strong>4 lines of symmetry</strong>.<br>
            <strong>(e) Rectangle:</strong> <strong>2 lines of symmetry</strong>.<br>
            <strong>(f) Rhombus:</strong> <strong>2 lines of symmetry</strong>.<br>
            <strong>(g) Parallelogram:</strong> <strong>0 lines of symmetry</strong>.<br>
            <strong>(h) Quadrilateral:</strong> <strong>0 lines of symmetry</strong>.<br>
            <strong>(i) Regular hexagon:</strong> <strong>6 lines of symmetry</strong>.<br>
            <strong>(j) Circle:</strong> <strong>Infinitely many lines of symmetry</strong> (any diameter).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct geometric count of lines of symmetry</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q12_3_7">
    <div class="q-head" onclick="toggleQ('q12_3_7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Can we have a rotational symmetry of order more than 1 whose angle of rotation is:<br>(i) 45°?<br>(ii) 17°?</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <em>Rule: A figure has rotational symmetry of order &gt; 1 if and only if 360° is exactly divisible by the angle of rotation.</em><br>
            <strong>(i) 45°:</strong><br>
            <span class="math">360° ÷ 45° = 8</span> (an exact whole number).<br>
            <strong>Yes</strong>, a figure can have rotational symmetry of order <strong>8</strong> with angle of rotation 45°.<br>
            <strong>(ii) 17°:</strong><br>
            <span class="math">360° ÷ 17° = 21.176...</span> (not an integer).<br>
            <strong>No</strong>, a figure cannot have rotational symmetry of order more than 1 with an angle of 17°.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Yes, 360/45 = 8</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): No, 360 is not divisible by 17</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      13: [
        `  <div class="q-card" id="q13_3_1">
    <div class="q-head" onclick="toggleQ('q13_3_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">What cross-sections do you get when you give a (i) vertical cut (ii) horizontal cut to the following solids?<br>(a) A brick<br>(b) A round apple<br>(c) A die<br>(d) A circular pipe<br>(e) An ice cream cone</div>
      <div class="q-marks">5 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) A brick:</strong> (i) Vertical cut: <strong>Rectangle</strong>; (ii) Horizontal cut: <strong>Rectangle</strong>.<br>
            <strong>(b) A round apple:</strong> (i) Vertical cut: <strong>Circle</strong>; (ii) Horizontal cut: <strong>Circle</strong>.<br>
            <strong>(c) A die:</strong> (i) Vertical cut: <strong>Square</strong>; (ii) Horizontal cut: <strong>Square</strong>.<br>
            <strong>(d) A circular pipe:</strong> (i) Vertical cut: <strong>Circle</strong>; (ii) Horizontal cut: <strong>Rectangle</strong>.<br>
            <strong>(e) An ice cream cone:</strong> (i) Vertical cut: <strong>Triangle</strong>; (ii) Horizontal cut: <strong>Circle</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct 2D cross-sectional shape</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ]
    };
  }
};
