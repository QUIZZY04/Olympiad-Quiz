// scripts/builders/c7m-additions-part6.js
// Verbatim physical NCERT exercise additions for Class 7 Mathematics Chapters 8, 9, 10, 11, 12, 13
module.exports = {
  getAdditions() {
    return {
      8: [
        `  <div class="q-card" id="q8_1_4">
    <div class="q-head" onclick="toggleQ('q8_1_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Draw the number line and represent the following rational numbers on it:<br>(i) 3/4 &nbsp;&nbsp; (ii) −5/8 &nbsp;&nbsp; (iii) −7/4 &nbsp;&nbsp; (iv) 7/8</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) 3/4:</strong> Lies between 0 and 1. Divide unit distance between 0 and 1 into 4 equal parts. The 3rd mark to the right of 0 represents <span class="math"><strong>3/4</strong></span>.<br>
            <strong>(ii) −5/8:</strong> Lies between 0 and −1. Divide unit distance between 0 and −1 into 8 equal parts. The 5th mark to the left of 0 represents <span class="math"><strong>−5/8</strong></span>.<br>
            <strong>(iii) −7/4:</strong> Note <span class="math">−7/4 = −1 3/4</span>. Lies between −1 and −2. Divide unit distance between −1 and −2 into 4 equal parts. The 3rd mark to the left of −1 represents <span class="math"><strong>−7/4</strong></span>.<br>
            <strong>(iv) 7/8:</strong> Lies between 0 and 1. Divide distance between 0 and 1 into 8 equal parts. The 7th mark to the right of 0 represents <span class="math"><strong>7/8</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct number line division and point plotting</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q8_1_6">
    <div class="q-head" onclick="toggleQ('q8_1_6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Which of the following pairs represent the same rational number?<br>(i) −7/21 and 3/9<br>(ii) −16/20 and 20/−25<br>(iii) −2/−3 and 2/3<br>(iv) −3/5 and −12/20</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Reduce each fraction to its standard simplest form:<br>
            <strong>(i)</strong> <span class="math">−7/21 = −1/3</span> and <span class="math">3/9 = 1/3</span>. Since <span class="math">−1/3 ≠ 1/3</span>, they <strong>do not represent the same rational number</strong>.<br>
            <strong>(ii)</strong> <span class="math">−16/20 = −4/5</span> and <span class="math">20/−25 = −4/5</span>. Since <span class="math">−4/5 = −4/5</span>, they <strong>represent the same rational number</strong>.<br>
            <strong>(iii)</strong> <span class="math">−2/−3 = 2/3</span>. Both are equal to <span class="math">2/3</span>. They <strong>represent the same rational number</strong>.<br>
            <strong>(iv)</strong> <span class="math">−12/20 = −3/5</span>. Both are equal to <span class="math">−3/5</span>. They <strong>represent the same rational number</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Simplest form reduction and comparison for each pair</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q8_1_8">
    <div class="q-head" onclick="toggleQ('q8_1_8')">
      <div class="q-num">Q8</div>
      <div class="q-text">Fill in the boxes with the correct symbol out of &lt;, &gt;, and =:<br>(i) −5/7 [ ] 2/3<br>(ii) −4/5 [ ] −5/7<br>(iii) −7/8 [ ] 14/−16<br>(iv) −8/5 [ ] −7/4</div>
      <div class="q-marks">2 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> Negative is always less than positive: <span class="math">−5/7 <strong>&lt;</strong> 2/3</span>.<br>
            <strong>(ii)</strong> Common denominator 35: <span class="math">−4/5 = −28/35</span> and <span class="math">−5/7 = −25/35</span>. Since <span class="math">−28 &lt; −25</span>: <span class="math">−4/5 <strong>&lt;</strong> −5/7</span>.<br>
            <strong>(iii)</strong> <span class="math">14/−16 = −7/8</span>. Therefore: <span class="math">−7/8 <strong>=</strong> 14/−16</span>.<br>
            <strong>(iv)</strong> Common denominator 20: <span class="math">−8/5 = −32/20</span> and <span class="math">−7/4 = −35/20</span>. Since <span class="math">−32 &gt; −35</span>: <span class="math">−8/5 <strong>&gt;</strong> −7/4</span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct relational symbol with mathematical justification</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      9: [
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
            Area of parallelogram ABCD = 1470 cm².<br>
            <strong>1. Height DL on base AB:</strong><br>
            <span class="math">Area = Base × Height ⇒ 1470 = AB × DL = 35 × DL</span><br>
            <span class="math">DL = 1470 / 35 = <strong>42 cm</strong></span>.<br>
            <strong>2. Height BM on base AD:</strong><br>
            <span class="math">Area = AD × BM ⇒ 1470 = 49 × BM</span><br>
            <span class="math">BM = 1470 / 49 = <strong>30 cm</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> DL = <strong>42 cm</strong> and BM = <strong>30 cm</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">DL = 1470 / 35 = 42 cm</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">BM = 1470 / 49 = 30 cm</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_1_7">
    <div class="q-head" onclick="toggleQ('q9_1_7')">
      <div class="q-num">Q7</div>
      <div class="q-text">ΔABC is right angled at A. AD is perpendicular to BC. If AB = 5 cm, BC = 13 cm and AC = 12 cm, find the area of ΔABC. Also find the length of AD.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Area of right-angled ΔABC:</strong><br>
            Base = AB = 5 cm, Height = AC = 12 cm.<br>
            <span class="math">Area = 1/2 × Base × Height = 1/2 × 5 × 12 = 5 × 6 = <strong>30 cm²</strong></span>.<br>
            <strong>2. Length of altitude AD on hypotenuse BC:</strong><br>
            Taking BC = 13 cm as base and AD as height:<br>
            <span class="math">Area = 1/2 × BC × AD ⇒ 30 = 1/2 × 13 × AD ⇒ AD = (30 × 2) / 13 = <strong>60/13 cm ≈ 4.62 cm</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> Area is <strong>30 cm²</strong> and AD is <strong>60/13 cm</strong> (or <strong>4.62 cm</strong>).</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Area = 1/2 × 5 × 12 = 30 cm²</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">AD = 60/13 cm</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_2_1">
    <div class="q-head" onclick="toggleQ('q9_2_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Find the circumference of the circles with the following radius: (Take π = 22/7)<br>(a) 14 cm<br>(b) 28 mm<br>(c) 21 cm</div>
      <div class="q-marks">3 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <em>Formula: Circumference C = 2πr</em><br>
            <strong>(a) r = 14 cm:</strong><br>
            <span class="math">C = 2 × (22/7) × 14 = 2 × 22 × 2 = <strong>88 cm</strong></span>.<br>
            <strong>(b) r = 28 mm:</strong><br>
            <span class="math">C = 2 × (22/7) × 28 = 2 × 22 × 4 = <strong>176 mm</strong></span>.<br>
            <strong>(c) r = 21 cm:</strong><br>
            <span class="math">C = 2 × (22/7) × 21 = 2 × 22 × 3 = <strong>132 cm</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula stated + correct value with unit</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_2_4">
    <div class="q-head" onclick="toggleQ('q9_2_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">A gardener wants to fence a circular garden of diameter 21 m. Find the length of the rope he needs to purchase, if he makes 2 rounds of fence. Also find the cost of the rope, if it costs ₹4 per meter. (Take π = 22/7).</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Diameter of circular garden = 21 m ⇒ Radius <span class="math">r = 21/2 m</span>.<br>
            Length of rope for 1 round = Circumference of garden = <span class="math">2πr = 2 × (22/7) × (21/2) = 22 × 3 = <strong>66 m</strong></span>.<br>
            Length of rope for 2 rounds = <span class="math">2 × 66 = <strong>132 m</strong></span>.<br>
            Cost of rope at ₹4 per metre = <span class="math">132 × ₹4 = <strong>₹528</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> Length of rope needed is <strong>132 m</strong> and total cost is <strong>₹528</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Circumference = 66 m; 2 rounds = 132 m</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Cost = 132 × ₹4 = ₹528</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_2_7">
    <div class="q-head" onclick="toggleQ('q9_2_7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Find the perimeter of the adjoining figure, which is a semicircle including its diameter of 10 cm.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Diameter <span class="math">d = 10 cm</span> ⇒ Radius <span class="math">r = 5 cm</span>.<br>
            Perimeter of semicircle = Circumference of curved boundary + Diameter<br>
            <span class="math">= πr + d = (22/7 × 5) + 10 = (110 / 7) + 10 = 15.71 + 10 = <strong>25.71 cm</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> The perimeter of the figure is <strong>25.71 cm</strong> (or <strong>180/7 cm</strong>).</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula: Perimeter = πr + d</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Calculation: 25.71 cm</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_2_11">
    <div class="q-head" onclick="toggleQ('q9_2_11')">
      <div class="q-num">Q11</div>
      <div class="q-text">A circle of radius 2 cm is cut out from a square piece of an aluminium sheet of side 6 cm. What is the area of the left over aluminium sheet? (Take π = 3.14).</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Side of square aluminium sheet = 6 cm.<br>
            <span class="math">Area of square sheet = side × side = 6 × 6 = <strong>36 cm²</strong></span>.<br>
            Radius of circle = 2 cm.<br>
            <span class="math">Area of circle = πr² = 3.14 × 2² = 3.14 × 4 = <strong>12.56 cm²</strong></span>.<br>
            Area of leftover aluminium sheet = <span class="math">36 − 12.56 = <strong>23.44 cm²</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> The area of the leftover sheet is <strong>23.44 cm²</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Area of square = 36 cm², Area of circle = 12.56 cm²</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Difference = 23.44 cm²</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      10: [
        `  <div class="q-card" id="q10_1_3">
    <div class="q-head" onclick="toggleQ('q10_1_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Identify the numerical coefficients of terms (other than constants) in the following expressions:<br>(i) 5 − 3t² &nbsp;&nbsp; (ii) 1 + t + t² + t³ &nbsp;&nbsp; (iii) x + 2xy + 3y &nbsp;&nbsp; (iv) 100m + 1000n<br>(v) −p²q² + 7pq &nbsp;&nbsp; (vi) 1.2a + 0.8b &nbsp;&nbsp; (vii) 3.14r² &nbsp;&nbsp; (viii) 2(l + b) &nbsp;&nbsp; (ix) 0.1y + 0.01y²</div>
      <div class="q-marks">4.5 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> Term: <span class="math">−3t²</span>, Coefficient: <strong>−3</strong><br>
            <strong>(ii)</strong> Terms: <span class="math">t, t², t³</span>, Coefficients: <strong>1, 1, 1</strong><br>
            <strong>(iii)</strong> Terms: <span class="math">x, 2xy, 3y</span>, Coefficients: <strong>1, 2, 3</strong><br>
            <strong>(iv)</strong> Terms: <span class="math">100m, 1000n</span>, Coefficients: <strong>100, 1000</strong><br>
            <strong>(v)</strong> Terms: <span class="math">−p²q², 7pq</span>, Coefficients: <strong>−1, 7</strong><br>
            <strong>(vi)</strong> Terms: <span class="math">1.2a, 0.8b</span>, Coefficients: <strong>1.2, 0.8</strong><br>
            <strong>(vii)</strong> Term: <span class="math">3.14r²</span>, Coefficient: <strong>3.14</strong><br>
            <strong>(viii)</strong> Terms: <span class="math">2l, 2b</span>, Coefficients: <strong>2, 2</strong><br>
            <strong>(ix)</strong> Terms: <span class="math">0.1y, 0.01y²</span>, Coefficients: <strong>0.1, 0.01</strong>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct numerical coefficient identified</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q10_1_5">
    <div class="q-head" onclick="toggleQ('q10_1_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Classify into monomials, binomials and trinomials:<br>(i) 4y − 7z &nbsp;&nbsp; (ii) y² &nbsp;&nbsp; (iii) x + y − xy &nbsp;&nbsp; (iv) 100<br>(v) ab − a − b &nbsp;&nbsp; (vi) 5 − 3t &nbsp;&nbsp; (vii) 4p²q − 4pq² &nbsp;&nbsp; (viii) 7mn<br>(ix) z² − 3z + 8 &nbsp;&nbsp; (x) a² + b² &nbsp;&nbsp; (xi) z² + z &nbsp;&nbsp; (xii) 1 + x + x²</div>
      <div class="q-marks">3 Marks (1/4 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            • <strong>Monomials (1 term):</strong> (ii) y², (iv) 100, (viii) 7mn.<br>
            • <strong>Binomials (2 terms):</strong> (i) 4y − 7z, (vi) 5 − 3t, (vii) 4p²q − 4pq², (x) a² + b², (xi) z² + z.<br>
            • <strong>Trinomials (3 terms):</strong> (iii) x + y − xy, (v) ab − a − b, (ix) z² − 3z + 8, (xii) 1 + x + x².
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct algebraic polynomial classification</span><span class="marking-marks">1/4 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q10_2_4">
    <div class="q-head" onclick="toggleQ('q10_2_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">If a = 2, b = −2, find the value of:<br>(i) a² + b²<br>(ii) a² + ab + b²<br>(iii) a² − b²</div>
      <div class="q-marks">3 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Substitute <span class="math">a = 2, b = −2</span>:<br>
            <strong>(i)</strong> <span class="math">a² + b² = 2² + (−2)² = 4 + 4 = <strong>8</strong></span>.<br>
            <strong>(ii)</strong> <span class="math">a² + ab + b² = 2² + 2(−2) + (−2)² = 4 − 4 + 4 = <strong>4</strong></span>.<br>
            <strong>(iii)</strong> <span class="math">a² − b² = 2² − (−2)² = 4 − 4 = <strong>0</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct evaluation with proper sign rules</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      11: [
        `  <div class="q-card" id="q11_1_4">
    <div class="q-head" onclick="toggleQ('q11_1_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Identify the greater number, wherever possible, in each of the following:<br>(i) 4³ or 3⁴<br>(ii) 5³ or 3⁵<br>(iii) 2⁸ or 8²<br>(iv) 100² or 2¹⁰⁰<br>(v) 2¹⁰ or 10²</div>
      <div class="q-marks">5 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">4³ = 64</span> and <span class="math">3⁴ = 81</span>. Since <span class="math">81 &gt; 64</span>, <strong>3⁴ is greater</strong>.<br>
            <strong>(ii)</strong> <span class="math">5³ = 125</span> and <span class="math">3⁵ = 243</span>. Since <span class="math">243 &gt; 125</span>, <strong>3⁵ is greater</strong>.<br>
            <strong>(iii)</strong> <span class="math">2⁸ = 256</span> and <span class="math">8² = 64</span>. Since <span class="math">256 &gt; 64</span>, <strong>2⁸ is greater</strong>.<br>
            <strong>(iv)</strong> <span class="math">100² = 10,000</span>. Since <span class="math">2¹⁰ = 1024</span>, <span class="math">2¹⁰⁰ = (2¹⁰)¹⁰ = (1024)¹⁰ &gt;&gt; 10,000</span>. <strong>2¹⁰⁰ is much greater</strong>.<br>
            <strong>(v)</strong> <span class="math">2¹⁰ = 1024</span> and <span class="math">10² = 100</span>. Since <span class="math">1024 &gt; 100</span>, <strong>2¹⁰ is greater</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each comparison evaluated accurately</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q11_2_1">
    <div class="q-head" onclick="toggleQ('q11_2_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Using laws of exponents, simplify and write the answer in exponential form:<br>(i) 3² × 3⁴ × 3⁸<br>(ii) 6¹⁵ ÷ 6¹⁰<br>(iii) a³ × a²<br>(iv) 7ˣ × 7²<br>(v) (5²)³ ÷ 5³<br>(vi) 2⁵ × 5⁵</div>
      <div class="q-marks">3 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">aᵐ × aⁿ = aᵐ⁺ⁿ ⇒ 3²⁺⁴⁺⁸ = <strong>3¹⁴</strong></span><br>
            <strong>(ii)</strong> <span class="math">aᵐ ÷ aⁿ = aᵐ⁻ⁿ ⇒ 6¹⁵⁻¹⁰ = <strong>6⁵</strong></span><br>
            <strong>(iii)</strong> <span class="math">a³⁺² = <strong>a⁵</strong></span><br>
            <strong>(iv)</strong> <span class="math"><strong>7ˣ⁺²</strong></span><br>
            <strong>(v)</strong> <span class="math">(aᵐ)ⁿ = aᵐⁿ ⇒ 5²ˣ³ ÷ 5³ = 5⁶ ÷ 5³ = 5⁶⁻³ = <strong>5³</strong></span><br>
            <strong>(vi)</strong> <span class="math">aᵐ × bᵐ = (ab)ᵐ ⇒ (2 × 5)⁵ = <strong>10⁵</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Laws of exponents stated and applied correctly</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      12: [
        `  <div class="q-card" id="q12_1_8">
    <div class="q-head" onclick="toggleQ('q12_1_8')">
      <div class="q-num">Q8</div>
      <div class="q-text">What letters of the English alphabet have reflectional symmetry (i.e., symmetry related to mirror reflection) about:<br>(a) a vertical mirror<br>(b) a horizontal mirror<br>(c) both horizontal and vertical mirrors</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Reflectional symmetry about a vertical mirror:</strong><br>
            The letters are: <strong>A, H, I, M, O, T, U, V, W, X, Y</strong>.<br>
            <strong>(b) Reflectional symmetry about a horizontal mirror:</strong><br>
            The letters are: <strong>B, C, D, E, H, I, K, O, X</strong>.<br>
            <strong>(c) Reflectional symmetry about both horizontal and vertical mirrors:</strong><br>
            The letters having both symmetries are: <strong>H, I, O, X</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each category of symmetric alphabet letters listed</span><span class="marking-marks">1 Mark each</span></div>
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
            Two figures possessing both line symmetry and rotational symmetry are:<br>
            1. <strong>A Circle:</strong> It has infinitely many lines of symmetry (through any diameter) and rotational symmetry of infinite order around its centre.<br>
            2. <strong>A Square:</strong> It has 4 lines of symmetry and rotational symmetry of order 4 (at angles of 90°, 180°, 270°, 360°).<br>
            <em>(Another valid example is an Equilateral Triangle, which has 3 lines of symmetry and rotational symmetry of order 3).</em>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Two valid figures with symmetry order described</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      13: [
        `  <div class="q-card" id="q13_1_5">
    <div class="q-head" onclick="toggleQ('q13_1_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Match the nets with appropriate solids:<br>(a) Cylinder (tube with 2 circular lids)<br>(b) Square pyramid (square base with 4 triangles)<br>(c) Cube (6 congruent squares)<br>(d) Cone (sector with 1 circular base)</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>Matching 3D Solids to their unfolded 2D Nets:</strong><br>
            • <strong>(a) Cylinder:</strong> Matches net with one rectangular curved face and two identical circular bases.<br>
            • <strong>(b) Square Pyramid:</strong> Matches net with one central square base and four surrounding triangular faces.<br>
            • <strong>(c) Cube:</strong> Matches net consisting of 6 congruent squares in a cross or T-shape.<br>
            • <strong>(d) Cone:</strong> Matches net consisting of a sector of a circle and one circular base.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct net matching</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ]
    };
  }
};
