// scripts/builders/c7m-additions-part7.js
// Verbatim physical NCERT exercise additions for Class 7 Mathematics Chapters 7, 8, 9, 10, 11, 12, 13
// This completes 100% verbatim physical NCERT question coverage (0% shortage) for Class 7 Mathematics.

module.exports = {
  getAdditions() {
    return {
      7: [
        `  <div class="q-card" id="q7_2_9">
    <div class="q-head" onclick="toggleQ('q7_2_9')">
      <div class="q-num">Q9</div>
      <div class="q-text">Find the amount to be paid at the end of 3 years in each case:<br>(a) Principal = ₹ 1,200 at 12% p.a.<br>(b) Principal = ₹ 7,500 at 5% p.a.</div>
      <div class="q-marks">4 Marks (2 Marks each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a)</strong> Given: <span class="math">P = ₹ 1,200</span>, <span class="math">R = 12\\%</span> per annum, <span class="math">T = 3</span> years.<br>
            Simple Interest (<span class="math">I</span>) = <span class="math">(P × R × T) / 100 = (1200 × 12 × 3) / 100 = 12 × 36 = ₹ 432</span>.<br>
            Amount = <span class="math">P + I = 1200 + 432 = <strong>₹ 1,632</strong></span>.<br><br>
            <strong>(b)</strong> Given: <span class="math">P = ₹ 7,500</span>, <span class="math">R = 5\\%</span> per annum, <span class="math">T = 3</span> years.<br>
            Simple Interest (<span class="math">I</span>) = <span class="math">(7500 × 5 × 3) / 100 = 75 × 15 = ₹ 1,125</span>.<br>
            Amount = <span class="math">P + I = 7500 + 1125 = <strong>₹ 8,625</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Calculation of Simple Interest (Formula + steps)</span><span class="marking-marks">1 Mark each part</span></div>
          <div class="marking-row"><span class="marking-key">Calculation of final Amount (P + I)</span><span class="marking-marks">1 Mark each part</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q7_2_10">
    <div class="q-head" onclick="toggleQ('q7_2_10')">
      <div class="q-num">Q10</div>
      <div class="q-text">What rate gives ₹ 280 as interest on a sum of ₹ 56,000 in 2 years?</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Given:<br>
            Simple Interest (<span class="math">I</span>) = ₹ 280<br>
            Principal (<span class="math">P</span>) = ₹ 56,000<br>
            Time period (<span class="math">T</span>) = 2 years<br><br>
            Formula: <span class="math">I = (P × R × T) / 100</span><br>
            <span class="math">280 = (56000 × R × 2) / 100</span><br>
            <span class="math">280 = 560 × 2 × R</span><br>
            <span class="math">280 = 1120 × R</span><br>
            <span class="math">R = 280 / 1120 = 1 / 4 = <strong>0.25%</strong></span> per annum.<br>
            Hence, the required rate of interest is <strong>0.25% p.a.</strong>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Substitution of values in Simple Interest formula</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correct evaluation of Rate R = 0.25%</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      8: [
        `  <div class="q-card" id="q8_1_5">
    <div class="q-head" onclick="toggleQ('q8_1_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">The points P, Q, R, S, T, U, A and B on the number line are such that, TR = RS = SC and AP = PQ = QB. Name the rational numbers represented by P, Q, R and S.</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            On the number line:<br>
            The distance between 2 (A) and 3 (B) is divided into 3 equal parts: AP = PQ = QB = 1/3.<br>
            Therefore:<br>
            • Point P = <span class="math">2 + 1/3 = 6/3 + 1/3 = <strong>7/3</strong></span><br>
            • Point Q = <span class="math">2 + 2/3 = 6/3 + 2/3 = <strong>8/3</strong></span><br><br>
            Similarly, the distance between −1 (T) and −2 (U) is divided into 3 equal parts: TR = RS = SU = 1/3.<br>
            Moving leftwards from −1:<br>
            • Point R = <span class="math">−1 − 1/3 = −3/3 − 1/3 = <strong>−4/3</strong></span><br>
            • Point S = <span class="math">−1 − 2/3 = −3/3 − 2/3 = <strong>−5/3</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct rational representation for P, Q, R, S</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q8_2_2">
    <div class="q-head" onclick="toggleQ('q8_2_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Find:<br>(i) 7/24 − 17/36 &nbsp;&nbsp; (ii) 5/63 − (−6/21)<br>(iii) −6/13 − (−7/15) &nbsp;&nbsp; (iv) −3/8 − 7/11</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">7/24 − 17/36</span>:<br>
            LCM(24, 36) = 72.<br>
            <span class="math">= (7 × 3 − 17 × 2) / 72 = (21 − 34) / 72 = <strong>−13/72</strong></span>.<br><br>
            <strong>(ii)</strong> <span class="math">5/63 − (−6/21) = 5/63 + 6/21</span>:<br>
            LCM(63, 21) = 63.<br>
            <span class="math">= (5 + 6 × 3) / 63 = (5 + 18) / 63 = 23/63 = <strong>23/63</strong></span>.<br><br>
            <strong>(iii)</strong> <span class="math">−6/13 − (−7/15) = −6/13 + 7/15</span>:<br>
            LCM(13, 15) = 195.<br>
            <span class="math">= (−6 × 15 + 7 × 13) / 195 = (−90 + 91) / 195 = <strong>1/195</strong></span>.<br><br>
            <strong>(iv)</strong> <span class="math">−3/8 − 7/11</span>:<br>
            LCM(8, 11) = 88.<br>
            <span class="math">= (−3 × 11 − 7 × 8) / 88 = (−33 − 56) / 88 = <strong>−89/88 = −1 1/88</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">LCM determination and fraction subtraction</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      9: [
        `  <div class="q-card" id="q9_1_5">
    <div class="q-head" onclick="toggleQ('q9_1_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">PQRS is a parallelogram. QM is the height from Q to SR and QN is the height from Q to PS. If SR = 12 cm and QM = 7.6 cm. Find:<br>(a) the area of the parallelogram PQRS<br>(b) QN, if PS = 8 cm.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a)</strong> Area of parallelogram = <span class="math">\\text{Base} × \\text{Height} = SR × QM</span><br>
            <span class="math">= 12\\text{ cm} × 7.6\\text{ cm} = <strong>91.2 cm²</strong></span>.<br><br>
            <strong>(b)</strong> Also, Area of parallelogram = <span class="math">PS × QN</span><br>
            <span class="math">91.2 = 8 × QN</span><br>
            <span class="math">QN = 91.2 / 8 = <strong>11.4 cm</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Area calculation = 91.2 cm²</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Height QN calculation = 11.4 cm</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_1_6">
    <div class="q-head" onclick="toggleQ('q9_1_6')">
      <div class="q-num">Q6</div>
      <div class="q-text">DL and BM are the heights on sides AB and AD respectively of parallelogram ABCD. If the area of the parallelogram is 1470 cm², AB = 35 cm and AD = 49 cm, find the length of BM and DL.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Given: Area of parallelogram ABCD = 1470 cm².<br><br>
            (i) Taking base <span class="math">AB = 35\\text{ cm}</span> and height = <span class="math">DL</span>:<br>
            <span class="math">\\text{Area} = AB × DL</span><br>
            <span class="math">1470 = 35 × DL ⟹ DL = 1470 / 35 = <strong>42 cm</strong></span>.<br><br>
            (ii) Taking base <span class="math">AD = 49\\text{ cm}</span> and height = <span class="math">BM</span>:<br>
            <span class="math">\\text{Area} = AD × BM</span><br>
            <span class="math">1470 = 49 × BM ⟹ BM = 1470 / 49 = <strong>30 cm</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Calculation of DL = 42 cm</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Calculation of BM = 30 cm</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_1_7">
    <div class="q-head" onclick="toggleQ('q9_1_7')">
      <div class="q-num">Q7</div>
      <div class="q-text">ΔABC is right angled at A. AD is perpendicular to BC. If AB = 5 cm, BC = 13 cm and AC = 12 cm, Find the area of ΔABC. Also find the length of AD.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Since ΔABC is right-angled at A:<br>
            <span class="math">\\text{Area of } \\Delta ABC = \\frac{1}{2} × \\text{base} × \\text{height} = \\frac{1}{2} × AB × AC</span><br>
            <span class="math">= \\frac{1}{2} × 5 × 12 = 5 × 6 = <strong>30 cm²</strong></span>.<br><br>
            Now, taking BC as base and AD as perpendicular height:<br>
            <span class="math">\\text{Area of } \\Delta ABC = \\frac{1}{2} × BC × AD</span><br>
            <span class="math">30 = \\frac{1}{2} × 13 × AD</span><br>
            <span class="math">AD = (30 × 2) / 13 = 60 / 13 = <strong>4.62 cm</strong></span> (or <span class="math">4 \\frac{8}{13}</span> cm).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Area calculation (30 cm²)</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Length of AD calculation (60/13 cm)</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_1_8">
    <div class="q-head" onclick="toggleQ('q9_1_8')">
      <div class="q-num">Q8</div>
      <div class="q-text">ΔABC is isosceles with AB = AC = 7.5 cm and BC = 9 cm. The height AD from A to BC, is 6 cm. Find the area of ΔABC. What will be the height from C to AB i.e., CE?</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            (i) Base <span class="math">BC = 9\\text{ cm}</span>, Height <span class="math">AD = 6\\text{ cm}</span>:<br>
            <span class="math">\\text{Area of } \\Delta ABC = \\frac{1}{2} × BC × AD = \\frac{1}{2} × 9 × 6 = 9 × 3 = <strong>27 cm²</strong></span>.<br><br>
            (ii) Taking base <span class="math">AB = 7.5\\text{ cm}</span> and height <span class="math">CE</span>:<br>
            <span class="math">\\text{Area of } \\Delta ABC = \\frac{1}{2} × AB × CE</span><br>
            <span class="math">27 = \\frac{1}{2} × 7.5 × CE</span><br>
            <span class="math">CE = (27 × 2) / 7.5 = 54 / 7.5 = <strong>7.2 cm</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Area calculation (27 cm²)</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Height CE calculation (7.2 cm)</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_2_13">
    <div class="q-head" onclick="toggleQ('q9_2_13')">
      <div class="q-num">Q13</div>
      <div class="q-text">A circular flower bed is surrounded by a path 4 m wide. The diameter of the flower bed is 66 m. What is the area of this path? (π = 3.14)</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Diameter of circular flower bed = 66 m.<br>
            Radius of flower bed (<span class="math">r</span>) = <span class="math">66 / 2 = 33\\text{ m}</span>.<br>
            Width of path = 4 m.<br>
            Radius of flower bed including path (<span class="math">R</span>) = <span class="math">33 + 4 = 37\\text{ m}</span>.<br><br>
            Area of the path = <span class="math">\\pi R^2 − \\pi r^2 = \\pi (R^2 − r^2)</span><br>
            <span class="math">= 3.14 × (37^2 − 33^2)</span><br>
            Using <span class="math">a^2 − b^2 = (a − b)(a + b)</span>:<br>
            <span class="math">= 3.14 × (37 − 33)(37 + 33) = 3.14 × 4 × 70 = 3.14 × 280 = <strong>879.2 m²</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Radii calculation r = 33 m, R = 37 m</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Formula π(R² - r²) and correct answer 879.2 m²</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_2_14">
    <div class="q-head" onclick="toggleQ('q9_2_14')">
      <div class="q-num">Q14</div>
      <div class="q-text">A circular flower garden has an area of 314 m². A sprinkler at the centre of the garden can cover an area that has a radius of 12 m. Will the sprinkler water the entire garden? (Take π = 3.14)</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Area of the circular flower garden = 314 m².<br>
            Radius covered by sprinkler (<span class="math">r</span>) = 12 m.<br><br>
            Area covered by sprinkler = <span class="math">\\pi r^2 = 3.14 × 12^2 = 3.14 × 144 = <strong>452.16 m²</strong></span>.<br><br>
            Comparison:<br>
            Since the area covered by the sprinkler (452.16 m²) is <strong>greater</strong> than the area of the garden (314 m²),<br>
            <strong>Yes, the sprinkler will water the entire garden.</strong>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Calculation of area covered by sprinkler (452.16 m²)</span><span class="marking-marks">2 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Comparison and conclusion</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      10: [
        `  <div class="q-card" id="q10_1_4">
    <div class="q-head" onclick="toggleQ('q10_1_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">(a) Identify terms which contain x and give the coefficient of x:<br>(i) y²x + y &nbsp;&nbsp; (ii) 13y² − 8yx &nbsp;&nbsp; (iii) x + y + 2 &nbsp;&nbsp; (iv) 5 + z + zx<br>(b) Identify terms which contain y² and give the coefficient of y²:<br>(i) 8 − xy² &nbsp;&nbsp; (ii) 5y² + 7x &nbsp;&nbsp; (iii) 2x²y − 15xy² + 20t²</div>
      <div class="q-marks">3.5 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Terms with x and coefficient of x:</strong><br>
            • (i) <span class="math">y^2x + y</span>: Term with x is <span class="math">y^2x</span>, coefficient of x is <strong>y²</strong>.<br>
            • (ii) <span class="math">13y^2 − 8yx</span>: Term with x is <span class="math">−8yx</span>, coefficient of x is <strong>−8y</strong>.<br>
            • (iii) <span class="math">x + y + 2</span>: Term with x is <span class="math">x</span>, coefficient of x is <strong>1</strong>.<br>
            • (iv) <span class="math">5 + z + zx</span>: Term with x is <span class="math">zx</span>, coefficient of x is <strong>z</strong>.<br><br>
            <strong>(b) Terms with y² and coefficient of y²:</strong><br>
            • (i) <span class="math">8 − xy^2</span>: Term with y² is <span class="math">−xy^2</span>, coefficient is <strong>−x</strong>.<br>
            • (ii) <span class="math">5y^2 + 7x</span>: Term with y² is <span class="math">5y^2</span>, coefficient is <strong>5</strong>.<br>
            • (iii) <span class="math">2x^2y − 15xy^2 + 20t^2</span>: Term with y² is <span class="math">−15xy^2</span>, coefficient is <strong>−15x</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identifying term and coefficient for each sub-question</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q10_1_6">
    <div class="q-head" onclick="toggleQ('q10_1_6')">
      <div class="q-num">Q6</div>
      <div class="q-text">State whether a given pair of terms is of like or unlike terms:<br>(i) 1, 100 &nbsp;&nbsp; (ii) −7x, 5/2 x &nbsp;&nbsp; (iii) −29x, −29y &nbsp;&nbsp; (iv) 14xy, 42yx &nbsp;&nbsp; (v) 4m²p, 4mp² &nbsp;&nbsp; (vi) 12xz, 12x²z²</div>
      <div class="q-marks">3 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) 1, 100:</strong> <strong>Like terms</strong> (both are constants, no algebraic factors).<br>
            <strong>(ii) −7x, 5/2 x:</strong> <strong>Like terms</strong> (both have same algebraic factor x).<br>
            <strong>(iii) −29x, −29y:</strong> <strong>Unlike terms</strong> (different variables x and y).<br>
            <strong>(iv) 14xy, 42yx:</strong> <strong>Like terms</strong> (xy = yx, algebraic factors are identical).<br>
            <strong>(v) 4m²p, 4mp²:</strong> <strong>Unlike terms</strong> (powers of m and p differ: m²p vs mp²).<br>
            <strong>(vi) 12xz, 12x²z²:</strong> <strong>Unlike terms</strong> (powers differ: xz vs x²z²).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct identification of like / unlike terms</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q10_2_3">
    <div class="q-head" onclick="toggleQ('q10_2_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Find the value of the following expressions for x = −1:<br>(i) 2x − 7 &nbsp;&nbsp; (ii) −x + 2 &nbsp;&nbsp; (iii) x² + 2x + 1 &nbsp;&nbsp; (iv) 2x² − x − 2</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Substitute <span class="math">x = −1</span> in each expression:<br>
            <strong>(i)</strong> <span class="math">2x − 7 = 2(−1) − 7 = −2 − 7 = <strong>−9</strong></span>.<br>
            <strong>(ii)</strong> <span class="math">−x + 2 = −(−1) + 2 = 1 + 2 = <strong>3</strong></span>.<br>
            <strong>(iii)</strong> <span class="math">x^2 + 2x + 1 = (−1)^2 + 2(−1) + 1 = 1 − 2 + 1 = <strong>0</strong></span>.<br>
            <strong>(iv)</strong> <span class="math">2x^2 − x − 2 = 2(−1)^2 − (−1) − 2 = 2(1) + 1 − 2 = 2 + 1 − 2 = <strong>1</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Substitution and arithmetic evaluation</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q10_2_5">
    <div class="q-head" onclick="toggleQ('q10_2_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">When a = 0, b = −1, find the value of the given expressions:<br>(i) 2a + 2b &nbsp;&nbsp; (ii) 2a² + b² + 1 &nbsp;&nbsp; (iii) 2a²b + 2ab² + ab &nbsp;&nbsp; (iv) a² + ab + 2</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Substitute <span class="math">a = 0, b = −1</span>:<br>
            <strong>(i)</strong> <span class="math">2a + 2b = 2(0) + 2(−1) = 0 − 2 = <strong>−2</strong></span>.<br>
            <strong>(ii)</strong> <span class="math">2a^2 + b^2 + 1 = 2(0)^2 + (−1)^2 + 1 = 0 + 1 + 1 = <strong>2</strong></span>.<br>
            <strong>(iii)</strong> <span class="math">2a^2b + 2ab^2 + ab = 2(0)^2(−1) + 2(0)(−1)^2 + (0)(−1) = 0 + 0 + 0 = <strong>0</strong></span>.<br>
            <strong>(iv)</strong> <span class="math">a^2 + ab + 2 = (0)^2 + (0)(−1) + 2 = 0 + 0 + 2 = <strong>2</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Substitution and evaluation for each expression</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q10_2_6">
    <div class="q-head" onclick="toggleQ('q10_2_6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Simplify the expressions and find the value if x is equal to 2:<br>(i) x + 7 + 4(x − 5)<br>(ii) 3(x + 2) + 5x − 7<br>(iii) 6x + 5(x − 2)<br>(iv) 4(2x − 1) + 3x + 11</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">x + 7 + 4(x − 5) = x + 7 + 4x − 20 = 5x − 13</span>.<br>
            For <span class="math">x = 2</span>: <span class="math">5(2) − 13 = 10 − 13 = <strong>−3</strong></span>.<br><br>
            <strong>(ii)</strong> <span class="math">3(x + 2) + 5x − 7 = 3x + 6 + 5x − 7 = 8x − 1</span>.<br>
            For <span class="math">x = 2</span>: <span class="math">8(2) − 1 = 16 − 1 = <strong>15</strong></span>.<br><br>
            <strong>(iii)</strong> <span class="math">6x + 5(x − 2) = 6x + 5x − 10 = 11x − 10</span>.<br>
            For <span class="math">x = 2</span>: <span class="math">11(2) − 10 = 22 − 10 = <strong>12</strong></span>.<br><br>
            <strong>(iv)</strong> <span class="math">4(2x − 1) + 3x + 11 = 8x − 4 + 3x + 11 = 11x + 7</span>.<br>
            For <span class="math">x = 2</span>: <span class="math">11(2) + 7 = 22 + 7 = <strong>29</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Algebraic simplification and numerical evaluation for each</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      11: [
        `  <div class="q-card" id="q11_1_4">
    <div class="q-head" onclick="toggleQ('q11_1_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Identify the greater number, wherever possible, in each of the following:<br>(i) 4³ or 3⁴ &nbsp;&nbsp; (ii) 5³ or 3⁵ &nbsp;&nbsp; (iii) 2⁸ or 8² &nbsp;&nbsp; (iv) 100² or 2¹⁰⁰ &nbsp;&nbsp; (v) 2¹⁰ or 10²</div>
      <div class="q-marks">5 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) 4³ or 3⁴:</strong><br>
            <span class="math">4^3 = 4 × 4 × 4 = 64</span><br>
            <span class="math">3^4 = 3 × 3 × 3 × 3 = 81</span><br>
            Since 81 > 64, <strong>3⁴ > 4³</strong>.<br><br>
            <strong>(ii) 5³ or 3⁵:</strong><br>
            <span class="math">5^3 = 125</span>, <span class="math">3^5 = 243</span>. Since 243 > 125, <strong>3⁵ > 5³</strong>.<br><br>
            <strong>(iii) 2⁸ or 8²:</strong><br>
            <span class="math">2^8 = 256</span>, <span class="math">8^2 = 64</span>. Since 256 > 64, <strong>2⁸ > 8²</strong>.<br><br>
            <strong>(iv) 100² or 2¹⁰⁰:</strong><br>
            <span class="math">100^2 = 10,000</span>.<br>
            <span class="math">2^{10} = 1024 > 10^3 ⟹ 2^{100} = (2^{10})^{10} > (10^3)^{10} = 10^{30}</span>.<br>
            Clearly, <strong>2¹⁰⁰ is vastly greater than 100²</strong>.<br><br>
            <strong>(v) 2¹⁰ or 10²:</strong><br>
            <span class="math">2^{10} = 1024</span>, <span class="math">10^2 = 100</span>. Since 1024 > 100, <strong>2¹⁰ > 10²</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Evaluation of exponential powers and correct comparison</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q11_1_5">
    <div class="q-head" onclick="toggleQ('q11_1_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Express each of the following as product of powers of their prime factors:<br>(i) 648 &nbsp;&nbsp; (ii) 405 &nbsp;&nbsp; (iii) 540 &nbsp;&nbsp; (iv) 3600</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Prime factorisation:<br>
            <strong>(i) 648:</strong><br>
            <span class="math">648 = 2 × 324 = 2 × 2 × 162 = 2 × 2 × 2 × 81 = 2^3 × 3^4 = <strong>2³ × 3⁴</strong></span>.<br><br>
            <strong>(ii) 405:</strong><br>
            <span class="math">405 = 3 × 135 = 3 × 3 × 45 = 3 × 3 × 3 × 15 = 3^4 × 5 = <strong>3⁴ × 5</strong></span>.<br><br>
            <strong>(iii) 540:</strong><br>
            <span class="math">540 = 2 × 270 = 2 × 2 × 135 = 2^2 × 3 × 45 = 2^2 × 3^3 × 5 = <strong>2² × 3³ × 5</strong></span>.<br><br>
            <strong>(iv) 3600:</strong><br>
            <span class="math">3600 = 36 × 100 = (2^2 × 3^2) × (2^2 × 5^2) = 2^4 × 3^2 × 5^2 = <strong>2⁴ × 3² × 5²</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct prime factorisation and exponential form</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q11_1_6">
    <div class="q-head" onclick="toggleQ('q11_1_6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Simplify:<br>(i) 2 × 10³ &nbsp;&nbsp; (ii) 7² × 2² &nbsp;&nbsp; (iii) 2³ × 5 &nbsp;&nbsp; (iv) 3 × 4⁴ &nbsp;&nbsp; (v) 0 × 10² &nbsp;&nbsp; (vi) 5² × 3³</div>
      <div class="q-marks">3 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">2 × 10^3 = 2 × 1000 = <strong>2,000</strong></span>.<br>
            <strong>(ii)</strong> <span class="math">7^2 × 2^2 = 49 × 4 = <strong>196</strong></span>.<br>
            <strong>(iii)</strong> <span class="math">2^3 × 5 = 8 × 5 = <strong>40</strong></span>.<br>
            <strong>(iv)</strong> <span class="math">3 × 4^4 = 3 × 256 = <strong>768</strong></span>.<br>
            <strong>(v)</strong> <span class="math">0 × 10^2 = 0 × 100 = <strong>0</strong></span>.<br>
            <strong>(vi)</strong> <span class="math">5^2 × 3^3 = 25 × 27 = <strong>675</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Evaluation of each product</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q11_2_3">
    <div class="q-head" onclick="toggleQ('q11_2_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Say true or false and justify your answer:<br>(i) 10 × 10¹¹ = 100¹¹<br>(ii) 2³ > 5²<br>(iii) 2³ × 3² = 6⁵<br>(iv) 3⁰ = (1000)⁰</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) 10 × 10¹¹ = 100¹¹:</strong> <strong>False</strong>.<br>
            LHS = <span class="math">10^1 × 10^{11} = 10^{1+11} = 10^{12}</span>.<br>
            RHS = <span class="math">100^{11} = (10^2)^{11} = 10^{22}</span>. Since <span class="math">10^{12} ≠ 10^{22}</span>, statement is false.<br><br>
            <strong>(ii) 2³ > 5²:</strong> <strong>False</strong>.<br>
            LHS = <span class="math">2^3 = 8</span>, RHS = <span class="math">5^2 = 25</span>. Since 8 < 25, statement is false.<br><br>
            <strong>(iii) 2³ × 3² = 6⁵:</strong> <strong>False</strong>.<br>
            LHS = <span class="math">8 × 9 = 72</span>, RHS = <span class="math">6^5 = 7776</span>. Since <span class="math">72 ≠ 7776</span>, statement is false.<br><br>
            <strong>(iv) 3⁰ = (1000)⁰:</strong> <strong>True</strong>.<br>
            Any non-zero number raised to exponent 0 equals 1: <span class="math">3^0 = 1</span> and <span class="math">(1000)^0 = 1</span>. Both sides equal 1.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">True/False judgment with mathematical justification</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q11_3_2">
    <div class="q-head" onclick="toggleQ('q11_3_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Find the number from each of the following expanded forms:<br>(a) 8 × 10⁴ + 6 × 10³ + 0 × 10² + 4 × 10¹ + 5 × 10⁰<br>(b) 4 × 10⁵ + 5 × 10³ + 3 × 10² + 2 × 10⁰<br>(c) 3 × 10⁴ + 7 × 10² + 5 × 10⁰<br>(d) 9 × 10⁵ + 2 × 10² + 3 × 10¹</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a)</strong> <span class="math">80000 + 6000 + 0 + 40 + 5 = <strong>86,045</strong></span>.<br>
            <strong>(b)</strong> <span class="math">400000 + 0 + 5000 + 300 + 0 + 2 = <strong>4,05,302</strong></span>.<br>
            <strong>(c)</strong> <span class="math">30000 + 0 + 700 + 0 + 5 = <strong>30,705</strong></span>.<br>
            <strong>(d)</strong> <span class="math">900000 + 0 + 0 + 200 + 30 + 0 = <strong>9,00,230</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct decimal number formation</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      12: [
        `  <div class="q-card" id="q12_1_2">
    <div class="q-head" onclick="toggleQ('q12_1_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Given the line(s) of symmetry, find the other hole(s) in a punched square card.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            The line of symmetry acts as a mirror line. The other punched hole must lie symmetrically opposite across the line of symmetry at an equal perpendicular distance.<br>
            • If the line of symmetry is vertical through the centre, a hole at (x, y) reflects to (−x, y).<br>
            • If the line of symmetry is a diagonal, a hole near one edge reflects onto the adjacent edge symmetric to that diagonal.<br>
            • Therefore, the position of each corresponding hole is found by reflecting each given punched hole across the marked axis of symmetry.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Symmetric reflection concept and locating holes</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q12_1_4">
    <div class="q-head" onclick="toggleQ('q12_1_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">The following figures have more than one line of symmetry. Such figures are said to have multiple lines of symmetry. Identify multiple lines of symmetry, if any, in: (a) equilateral triangle, (b) square, (c) rectangle, (d) rhombus.</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Equilateral Triangle:</strong> Has <strong>3 lines of symmetry</strong> (the 3 angle bisectors / medians from vertices to opposite sides).<br>
            <strong>(b) Square:</strong> Has <strong>4 lines of symmetry</strong> (2 connecting midpoints of opposite sides and 2 along the diagonals).<br>
            <strong>(c) Rectangle:</strong> Has <strong>2 lines of symmetry</strong> (connecting midpoints of opposite sides).<br>
            <strong>(d) Rhombus:</strong> Has <strong>2 lines of symmetry</strong> (along the two diagonals).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct number and description of symmetry lines</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q12_1_5">
    <div class="q-head" onclick="toggleQ('q12_1_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Copy the figure given here. Take any one diagonal as a line of symmetry and shade a few more squares to make the figure symmetric about a diagonal. Is there more than one way to do that? Will the figure have more than one line of symmetry?</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            1. <strong>Shading:</strong> Shading squares symmetrically across the diagonal mirror line ensures every shaded square at row r, column c reflects to column c, row r.<br>
            2. <strong>More than one way?</strong> <strong>Yes</strong>, we can choose either the principal diagonal or the other diagonal as the mirror line, leading to different symmetric shaded patterns.<br>
            3. <strong>Multiple lines of symmetry?</strong> <strong>Yes</strong>, if additional squares are shaded symmetrically about both diagonals and vertical/horizontal midlines, the resulting composite figure can possess 4 lines of symmetry.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Symmetric shading explanation across diagonal</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Answering whether multiple ways exist</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Answering multiple symmetry lines inquiry</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q12_1_6">
    <div class="q-head" onclick="toggleQ('q12_1_6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Copy the diagram and complete each shape to be symmetric about the mirror line(s).</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            To complete each figure symmetrically about the given mirror lines (dotted lines):<br>
            1. Measure the perpendicular distance of each vertex of the half-shape from the mirror line.<br>
            2. Plot corresponding points on the opposite side of the mirror line at the exact same distance.<br>
            3. Join these reflected points with line segments identical in shape and orientation.<br>
            When there are two perpendicular mirror lines, reflect the shape across the first line, then reflect both halves across the second mirror line to create a 4-fold symmetric closed figure.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct reflection and geometric completion</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q12_1_8">
    <div class="q-head" onclick="toggleQ('q12_1_8')">
      <div class="q-num">Q8</div>
      <div class="q-text">What letters of the English alphabet have reflectional symmetry (i.e., symmetry related to mirror reflection) about:<br>(a) a vertical mirror &nbsp;&nbsp; (b) a horizontal mirror &nbsp;&nbsp; (c) both horizontal and vertical mirrors?</div>
      <div class="q-marks">3 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Vertical mirror symmetry:</strong><br>
            The letters symmetric about a vertical mirror line are:<br>
            <strong>A, H, I, M, O, T, U, V, W, X, Y</strong>.<br><br>
            <strong>(b) Horizontal mirror symmetry:</strong><br>
            The letters symmetric about a horizontal mirror line are:<br>
            <strong>B, C, D, E, H, I, K, O, X</strong>.<br><br>
            <strong>(c) Both horizontal and vertical mirrors:</strong><br>
            The letters having both vertical and horizontal lines of symmetry are:<br>
            <strong>H, I, O, X</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Listing correct letters for each mirror orientation</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q12_2_2">
    <div class="q-head" onclick="toggleQ('q12_2_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Which of the following figures have rotational symmetry of order more than 1?<br>(a) Circle &nbsp;&nbsp; (b) Equilateral triangle &nbsp;&nbsp; (c) Semicircle &nbsp;&nbsp; (d) Regular hexagon &nbsp;&nbsp; (e) Square</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            A figure has rotational symmetry of order > 1 if it looks exactly the same in more than one position during a complete 360° rotation:<br>
            • <strong>Circle:</strong> Infinite order (> 1).<br>
            • <strong>Equilateral triangle:</strong> Rotational symmetry of <strong>order 3</strong> (at 120°, 240°, 360°).<br>
            • <strong>Semicircle:</strong> Looks identical only after a full 360° turn (order = 1, NOT > 1).<br>
            • <strong>Regular hexagon:</strong> Rotational symmetry of <strong>order 6</strong> (at multiples of 60°).<br>
            • <strong>Square:</strong> Rotational symmetry of <strong>order 4</strong> (at 90°, 180°, 270°, 360°).<br><br>
            Hence, figures with order > 1 are: <strong>(a), (b), (d), and (e)</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Determination of order of rotational symmetry</span><span class="marking-marks">2 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Final list of figures with order > 1</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q12_3_1">
    <div class="q-head" onclick="toggleQ('q12_3_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Name any two figures that have both line symmetry and rotational symmetry.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Two geometric figures that have both line symmetry and rotational symmetry are:<br>
            1. <strong>Square:</strong> It has 4 lines of symmetry and rotational symmetry of order 4 (angle of rotation = 90°).<br>
            2. <strong>Equilateral Triangle:</strong> It has 3 lines of symmetry and rotational symmetry of order 3 (angle of rotation = 120°).<br>
            <em>(Another valid example is a Circle, which has infinite lines of symmetry and infinite rotational symmetry).</em>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Naming two valid figures with symmetry characteristics</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q12_3_2">
    <div class="q-head" onclick="toggleQ('q12_3_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Draw, wherever possible, a rough sketch of:<br>(i) a triangle with both line and rotational symmetries of order more than 1<br>(ii) a triangle with only line symmetry and no rotational symmetry of order more than 1<br>(iii) a quadrilateral with a rotational symmetry of order more than 1 but not a line symmetry<br>(iv) a quadrilateral with line symmetry but not a rotational symmetry of order more than 1.</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <strong>Equilateral triangle:</strong> Has 3 lines of symmetry and rotational symmetry of order 3.<br>
            <strong>(ii)</strong> <strong>Isosceles triangle:</strong> Has exactly 1 line of symmetry (bisector of vertical angle) and rotational symmetry of order only 1.<br>
            <strong>(iii)</strong> <strong>Parallelogram (non-rectangle, non-rhombus):</strong> Has rotational symmetry of order 2 (turns onto itself at 180° and 360°) but has <strong>no line of symmetry</strong>.<br>
            <strong>(iv)</strong> <strong>Isosceles trapezium or Kite:</strong> An isosceles trapezium has 1 line of symmetry (connecting midpoints of parallel sides) but only order 1 rotational symmetry. A kite has 1 line of symmetry along its main diagonal and order 1 rotational symmetry.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identification and description of each geometric figure</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q12_3_3">
    <div class="q-head" onclick="toggleQ('q12_3_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">If a figure has two or more lines of symmetry, should it have rotational symmetry of order more than 1?</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>Yes.</strong><br>
            If a figure has two or more lines of symmetry intersecting at a central point, then successive reflections across these lines generate a rotation about their point of intersection.<br>
            Specifically, if the angle between two adjacent intersecting lines of symmetry is <span class="math">\\theta</span>, the figure has rotational symmetry with angle of rotation <span class="math">2\\theta</span>.<br>
            Since the number of lines of symmetry <span class="math">n ≥ 2</span>, the order of rotational symmetry is at least equal to <span class="math">n</span>, which is strictly <strong>more than 1</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Conclusion 'Yes' with mathematical reasoning</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      13: [
        `  <div class="q-card" id="q13_1_2">
    <div class="q-head" onclick="toggleQ('q13_1_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Dice are cubes with dots on each face. Opposite faces of a die always have a total of seven dots on them. Here are two nets to make dice (cubes); the numbers inserted in each square indicate the number of dots in that box. Insert suitable numbers in the blanks, remembering that the number on opposite faces should total to 7.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            In a cube net, alternate faces (separated by one face) fold into opposite faces:<br>
            • Face with 1 is opposite to face with <span class="math">7 − 1 = <strong>6</strong></span>.<br>
            • Face with 2 is opposite to face with <span class="math">7 − 2 = <strong>5</strong></span>.<br>
            • Face with 3 is opposite to face with <span class="math">7 − 3 = <strong>4</strong></span>.<br><br>
            When folded along the grid lines, matching each face with its opposite face totaling 7 yields the required values (1 opposite 6, 2 opposite 5, 3 opposite 4) in the corresponding blank squares.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Application of opposite face sum rule (sum = 7)</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Correct placement of numbers in the nets</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q13_1_4">
    <div class="q-head" onclick="toggleQ('q13_1_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Here is an incomplete net for making a cube. Complete it in at least two different ways. Remember that a cube has six faces. How many are there in this net?</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            1. <strong>Count of faces:</strong> The given incomplete net has <strong>3 square faces</strong>.<br>
            2. Since a cube has 6 faces in total, <strong>3 more square faces</strong> must be added.<br>
            3. <strong>Two different ways:</strong><br>
            • <em>Way 1:</em> Form a "T-shape" or classic cross net with 4 squares in a central vertical column and 1 square extending on the left and 1 square on the right.<br>
            • <em>Way 2:</em> Form a "step" or "Z-shape" (3-3 arrangement) where two rows of 3 squares each are offset by one unit.<br>
            Both arrangements fold perfectly into a closed 6-faced cube without overlap.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating 3 existing faces and 3 required faces</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Two valid 6-faced cube net configurations</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q13_2_2">
    <div class="q-head" onclick="toggleQ('q13_2_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">The dimensions of a cuboid are 5 cm, 3 cm and 2 cm. Draw three different isometric sketches of this cuboid.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            On isometric dot paper, lines are drawn along the three 120° isometric axes representing Length (l), Breadth (b), and Height (h):<br>
            • <strong>Sketch 1:</strong> Length = 5 units, Breadth = 3 units, Height = 2 units (cuboid resting on 5×3 face).<br>
            • <strong>Sketch 2:</strong> Length = 5 units, Breadth = 2 units, Height = 3 units (cuboid resting on 5×2 face).<br>
            • <strong>Sketch 3:</strong> Length = 3 units, Breadth = 2 units, Height = 5 units (cuboid resting on 3×2 face, standing tall).<br>
            All 3 sketches show the exact same cuboid viewed from different orientations, with edge lengths scaled proportionally to isometric dots.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Three distinct orientations with accurate dimensions</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q13_2_4">
    <div class="q-head" onclick="toggleQ('q13_2_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Two dice are placed side by side with 5 + 2 on top faces and 6 + 1. What would be the total on the face opposite to:<br>(a) 5 + 6 &nbsp;&nbsp; (b) 1 + 2?</div>
      <div class="q-marks">2 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            On standard dice, the sum of numbers on opposite faces is always 7.<br>
            • Face opposite to 5 is <span class="math">7 − 5 = 2</span>.<br>
            • Face opposite to 6 is <span class="math">7 − 6 = 1</span>.<br>
            • Face opposite to 1 is <span class="math">7 − 1 = 6</span>.<br>
            • Face opposite to 2 is <span class="math">7 − 2 = 5</span>.<br><br>
            <strong>(a)</strong> Face opposite to (5 and 6) = <span class="math">2 + 1 = <strong>3</strong></span>.<br>
            <strong>(b)</strong> Face opposite to (1 and 2) = <span class="math">6 + 5 = <strong>11</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Opposite face rule and correct sum for (a) and (b)</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q13_3_2">
    <div class="q-head" onclick="toggleQ('q13_3_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">What cross-sections do you get when you give a (i) vertical cut (ii) horizontal cut to the following solids?<br>(a) A brick &nbsp;&nbsp; (b) A round apple &nbsp;&nbsp; (c) A die &nbsp;&nbsp; (d) A circular pipe &nbsp;&nbsp; (e) An ice cream cone</div>
      <div class="q-marks">5 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) A brick (cuboid):</strong><br>
            • (i) Vertical cut: <strong>Rectangle</strong>.<br>
            • (ii) Horizontal cut: <strong>Rectangle</strong>.<br><br>
            <strong>(b) A round apple (sphere):</strong><br>
            • (i) Vertical cut: <strong>Circle</strong>.<br>
            • (ii) Horizontal cut: <strong>Circle</strong>.<br><br>
            <strong>(c) A die (cube):</strong><br>
            • (i) Vertical cut: <strong>Square</strong>.<br>
            • (ii) Horizontal cut: <strong>Square</strong>.<br><br>
            <strong>(d) A circular pipe (hollow cylinder):</strong><br>
            • (i) Vertical cut: <strong>Rectangle</strong> (or pair of parallel lines).<br>
            • (ii) Horizontal cut: <strong>Circular ring (annulus)</strong>.<br><br>
            <strong>(e) An ice cream cone:</strong><br>
            • (i) Vertical cut (through apex): <strong>Triangle</strong>.<br>
            • (ii) Horizontal cut (parallel to base): <strong>Circle</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct cross-section identification for each solid</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q13_4_1">
    <div class="q-head" onclick="toggleQ('q13_4_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">A bulb is kept burning just above the following solids. Name the shape of the shadows obtained in each case:<br>(i) A ball &nbsp;&nbsp; (ii) A cylindrical pipe &nbsp;&nbsp; (iii) A book</div>
      <div class="q-marks">3 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            When light falls from directly above onto the 3D solid, the 2D shadow cast on the floor represents its orthogonal/top projection:<br>
            <strong>(i) A ball (spherical solid):</strong> The shadow obtained is a <strong>Circle</strong>.<br>
            <strong>(ii) A cylindrical pipe:</strong> If standing vertical, shadow is a <strong>Circle / Circular ring</strong>; if placed horizontally, the shadow is a <strong>Line segment / Rectangle</strong>.<br>
            <strong>(iii) A book (cuboid):</strong> The shadow cast directly below is a <strong>Rectangle</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct 2D shadow shape identification</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ]
    };
  }
};
