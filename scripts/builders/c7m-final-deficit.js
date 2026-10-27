// scripts/builders/c7m-final-deficit.js
// Verbatim physical NCERT additions to close all remaining deficits for Class 7 Mathematics
// Chapters 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13

module.exports = {
  getAdditions() {
    return {
      2: [
        `  <div class="q-card" id="q2_1_4_def">
    <div class="q-head" onclick="toggleQ('q2_1_4_def')">
      <div class="q-num">Q4</div>
      <div class="q-text">A rectangular sheet of paper is 12 ½ cm long and 10 ⅔ cm wide. Find its perimeter.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Length of the sheet (<span class="math">l</span>) = <span class="math">12 \\frac{1}{2}\\text{ cm} = \\frac{25}{2}\\text{ cm}</span>.<br>
            Breadth of the sheet (<span class="math">b</span>) = <span class="math">10 \\frac{2}{3}\\text{ cm} = \\frac{32}{3}\\text{ cm}</span>.<br><br>
            Perimeter of a rectangle = <span class="math">2(l + b)</span><br>
            <span class="math">= 2 × \\left(\\frac{25}{2} + \\frac{32}{3}\\right)</span><br>
            LCM of 2 and 3 is 6.<br>
            <span class="math">= 2 × \\left(\\frac{25 × 3 + 32 × 2}{6}\\right) = 2 × \\left(\\frac{75 + 64}{6}\\right) = 2 × \\frac{139}{6} = \\frac{139}{3} = <strong>46 \\frac{1}{3}\\text{ cm}</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula 2(l + b) and conversion to improper fractions</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">LCM and fraction addition</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Final perimeter 46 1/3 cm (or 139/3 cm)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q2_1_5_def">
    <div class="q-head" onclick="toggleQ('q2_1_5_def')">
      <div class="q-num">Q5</div>
      <div class="q-text">Find the perimeters of (i) ΔABE with sides 5/2 cm, 3 3/5 cm, 2 3/4 cm (ii) the rectangle BCDE in this figure with sides 2 3/4 cm and 7/6 cm. Whose perimeter is greater?</div>
      <div class="q-marks">4 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Perimeter of ΔABE:</strong><br>
            <span class="math">AB = 5/2\\text{ cm}, BE = 2 \\frac{3}{4} = \\frac{11}{4}\\text{ cm}, AE = 3 \\frac{3}{5} = \\frac{18}{5}\\text{ cm}</span>.<br>
            Perimeter = <span class="math">\\frac{5}{2} + \\frac{11}{4} + \\frac{18}{5}</span>. LCM(2, 4, 5) = 20.<br>
            <span class="math">= \\frac{50 + 55 + 72}{20} = \\frac{177}{20} = <strong>8 \\frac{17}{20}\\text{ cm} = 8.85\\text{ cm}</strong></span>.<br><br>
            <strong>(ii) Perimeter of rectangle BCDE:</strong><br>
            Length = <span class="math">11/4\\text{ cm}</span>, Breadth = <span class="math">7/6\\text{ cm}</span>.<br>
            Perimeter = <span class="math">2 × \\left(\\frac{11}{4} + \\frac{7}{6}\\right) = 2 × \\left(\\frac{33 + 14}{12}\\right) = 2 × \\frac{47}{12} = \\frac{47}{6} = <strong>7 \\frac{5}{6}\\text{ cm} ≈ 7.83\\text{ cm}</strong></span>.<br><br>
            <strong>Comparison:</strong> Since <span class="math">8.85 > 7.83</span>, <strong>the perimeter of ΔABE is greater</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Perimeter of triangle calculation (177/20 cm)</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Perimeter of rectangle calculation (47/6 cm)</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Comparison and deduction</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q2_3_8_def">
    <div class="q-head" onclick="toggleQ('q2_3_8_def')">
      <div class="q-num">Q8</div>
      <div class="q-text">(a) (i) Provide the number in the box [ ], such that 2/3 × [ ] = 10/30. (ii) The simplest form of the number obtained in [ ] is _____.<br>(b) (i) Provide the number in the box [ ], such that 3/5 × [ ] = 24/75. (ii) The simplest form of the number obtained in [ ] is _____.</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a)</strong><br>
            (i) <span class="math">\\frac{2}{3} × \\left[\\frac{5}{10}\\right] = \\frac{10}{30}</span>. So the number in [ ] is <strong>5/10</strong>.<br>
            (ii) The simplest form of <span class="math">\\frac{5}{10}</span> is <strong>1/2</strong>.<br><br>
            <strong>(b)</strong><br>
            (i) <span class="math">\\frac{3}{5} × \\left[\\frac{8}{15}\\right] = \\frac{24}{75}</span>. So the number in [ ] is <strong>8/15</strong>.<br>
            (ii) The simplest form of <span class="math">\\frac{8}{15}</span> is <strong>8/15</strong> (coprime numbers, already in simplest form).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct fraction in box for (a)(i) and (b)(i)</span><span class="marking-marks">1 Mark each</span></div>
          <div class="marking-row"><span class="marking-key">Simplest form for (a)(ii) and (b)(ii)</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      3: [
        `  <div class="q-card" id="q3_1_3_def">
    <div class="q-head" onclick="toggleQ('q3_1_3_def')">
      <div class="q-num">Q3</div>
      <div class="q-text">Find the mean of the first five whole numbers.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            The first five whole numbers are: <strong>0, 1, 2, 3, 4</strong>.<br><br>
            Formula: <span class="math">\\text{Mean} = \\frac{\\text{Sum of all observations}}{\\text{Total number of observations}}</span><br>
            <span class="math">= \\frac{0 + 1 + 2 + 3 + 4}{5} = \\frac{10}{5} = <strong>2</strong></span>.<br><br>
            Hence, the mean of the first five whole numbers is <strong>2</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Listing first 5 whole numbers (0, 1, 2, 3, 4)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Sum / 5 = 10/5 = 2</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q3_2_1_def">
    <div class="q-head" onclick="toggleQ('q3_2_1_def')">
      <div class="q-num">Q1</div>
      <div class="q-text">The scores in mathematics test (out of 25) of 15 students is as follows: 19, 25, 23, 20, 9, 20, 15, 10, 5, 16, 25, 20, 24, 12, 20. Find the mode and median of this data. Are they same?</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Arranging scores in ascending order:<br>
            <strong>5, 9, 10, 12, 15, 16, 19, 20, 20, 20, 20, 23, 24, 25, 25</strong>.<br><br>
            1. <strong>Mode:</strong> The observation with highest frequency is <strong>20</strong> (occurs 4 times). Hence, <span class="math">\\text{Mode} = <strong>20</strong></span>.<br>
            2. <strong>Median:</strong> Total observations <span class="math">n = 15</span> (odd).<br>
            Median is the <span class="math">\\frac{n+1}{2}^{\\text{th}} = \\frac{15+1}{2} = 8^{\\text{th}}</span> observation.<br>
            The 8th observation is <strong>20</strong>. Hence, <span class="math">\\text{Median} = <strong>20</strong></span>.<br><br>
            <strong>Yes, the mode and median are the same (both equal to 20).</strong>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Ascending order arrangement &amp; Mode = 20</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Median calculation = 20</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Comparison conclusion 'Yes, they are same'</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q3_2_2_def">
    <div class="q-head" onclick="toggleQ('q3_2_2_def')">
      <div class="q-num">Q2</div>
      <div class="q-text">The runs scored in a cricket match by 11 players is as follows: 6, 15, 120, 50, 100, 80, 10, 15, 8, 10, 15. Find the mean, mode and median of this data. Are the three same?</div>
      <div class="q-marks">4 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Arranging data in ascending order:<br>
            <strong>6, 8, 10, 10, 15, 15, 15, 50, 80, 100, 120</strong>.<br><br>
            • <strong>Mean:</strong> <span class="math">\\frac{6 + 8 + 10 + 10 + 15 + 15 + 15 + 50 + 80 + 100 + 120}{11} = \\frac{429}{11} = <strong>39</strong></span>.<br>
            • <strong>Mode:</strong> 15 occurs most frequently (3 times), so <span class="math">\\text{Mode} = <strong>15</strong></span>.<br>
            • <strong>Median:</strong> Total <span class="math">n = 11</span>. The <span class="math">\\frac{11+1}{2} = 6^{\\text{th}}</span> term is <strong>15</strong>. So <span class="math">\\text{Median} = <strong>15</strong></span>.<br><br>
            <strong>No, the three are not same</strong> (Mean = 39, Mode = 15, Median = 15).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Mean calculation (39)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Mode calculation (15) and Median calculation (15)</span><span class="marking-marks">2 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Comparison conclusion 'No'</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q3_3_3_def">
    <div class="q-head" onclick="toggleQ('q3_3_3_def')">
      <div class="q-num">Q3</div>
      <div class="q-text">Number of children in six different classes are given below: Class Fifth (135), Sixth (120), Seventh (95), Eighth (100), Ninth (90), Tenth (80).<br>(a) How would you choose a scale?<br>(b) Answer the following: (i) Which class has the maximum number of children? And the minimum? (ii) Find the ratio of students of class sixth to the students of class eight.</div>
      <div class="q-marks">4 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Scale:</strong> Since the values range from 80 to 135, an appropriate scale on the vertical axis is <strong>1 unit length = 10 children</strong> (or 20 children).<br><br>
            <strong>(b) (i) Maximum &amp; Minimum:</strong><br>
            • Maximum number of children is in <strong>Class Fifth (135 children)</strong>.<br>
            • Minimum number of children is in <strong>Class Tenth (80 children)</strong>.<br><br>
            <strong>(ii) Ratio of Class Sixth to Class Eighth:</strong><br>
            Number in Class 6 = 120, Number in Class 8 = 100.<br>
            Ratio = <span class="math">\\frac{120}{100} = \\frac{6}{5} = <strong>6 : 5</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Scale selection explanation</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Maximum and minimum classes identification</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Ratio calculation 6 : 5</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      4: [
        `  <div class="q-card" id="q4_1_1_def">
    <div class="q-head" onclick="toggleQ('q4_1_1_def')">
      <div class="q-num">Q1</div>
      <div class="q-text">Check whether the value given in brackets satisfies the equation:<br>(i) x + 3 = 0 (x = 3)<br>(ii) x + 3 = 0 (x = −3)<br>(iii) 5x = 25 (x = 5)<br>(iv) m/3 = 2 (m = 6)</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">x + 3 = 0</span>, for <span class="math">x = 3</span>: LHS = <span class="math">3 + 3 = 6 ≠ 0</span> (RHS). <strong>No, equation is not satisfied.</strong><br>
            <strong>(ii)</strong> <span class="math">x + 3 = 0</span>, for <span class="math">x = −3</span>: LHS = <span class="math">−3 + 3 = 0 = \\text{RHS}</span>. <strong>Yes, equation is satisfied.</strong><br>
            <strong>(iii)</strong> <span class="math">5x = 25</span>, for <span class="math">x = 5</span>: LHS = <span class="math">5 × 5 = 25 = \\text{RHS}</span>. <strong>Yes, equation is satisfied.</strong><br>
            <strong>(iv)</strong> <span class="math">m/3 = 2</span>, for <span class="math">m = 6</span>: LHS = <span class="math">6 / 3 = 2 = \\text{RHS}</span>. <strong>Yes, equation is satisfied.</strong>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">LHS substitution and verification for each equation</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q4_2_2_def">
    <div class="q-head" onclick="toggleQ('q4_2_2_def')">
      <div class="q-num">Q2</div>
      <div class="q-text">Give first the step you will use to separate the variable and then solve the equation:<br>(a) 3l = 42 &nbsp;&nbsp; (b) b/2 = 6 &nbsp;&nbsp; (c) p/7 = 4 &nbsp;&nbsp; (d) 4x = 25</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) 3l = 42:</strong><br>
            • Step: Divide both sides by 3.<br>
            • Solution: <span class="math">l = 42 / 3 = <strong>14</strong></span>.<br><br>
            <strong>(b) b/2 = 6:</strong><br>
            • Step: Multiply both sides by 2.<br>
            • Solution: <span class="math">b = 6 × 2 = <strong>12</strong></span>.<br><br>
            <strong>(c) p/7 = 4:</strong><br>
            • Step: Multiply both sides by 7.<br>
            • Solution: <span class="math">p = 4 × 7 = <strong>28</strong></span>.<br><br>
            <strong>(d) 4x = 25:</strong><br>
            • Step: Divide both sides by 4.<br>
            • Solution: <span class="math">x = <strong>25/4 = 6.25</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating separation step and solving</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q4_2_3_def">
    <div class="q-head" onclick="toggleQ('q4_2_3_def')">
      <div class="q-num">Q3</div>
      <div class="q-text">Give the steps you will use to separate the variable and then solve the equation:<br>(a) 3n − 2 = 46 &nbsp;&nbsp; (b) 5m + 7 = 17 &nbsp;&nbsp; (c) 20p/3 = 40 &nbsp;&nbsp; (d) 3p/10 = 6</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) 3n − 2 = 46:</strong><br>
            • Step 1: Add 2 to both sides: <span class="math">3n = 48</span>.<br>
            • Step 2: Divide both sides by 3: <span class="math">n = 48 / 3 = <strong>16</strong></span>.<br><br>
            <strong>(b) 5m + 7 = 17:</strong><br>
            • Step 1: Subtract 7 from both sides: <span class="math">5m = 10</span>.<br>
            • Step 2: Divide both sides by 5: <span class="math">m = 10 / 5 = <strong>2</strong></span>.<br><br>
            <strong>(c) 20p/3 = 40:</strong><br>
            • Step 1: Multiply both sides by 3: <span class="math">20p = 120</span>.<br>
            • Step 2: Divide both sides by 20: <span class="math">p = 120 / 20 = <strong>6</strong></span>.<br><br>
            <strong>(d) 3p/10 = 6:</strong><br>
            • Step 1: Multiply both sides by 10: <span class="math">3p = 60</span>.<br>
            • Step 2: Divide both sides by 3: <span class="math">p = 60 / 3 = <strong>20</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating 2 steps and final solution</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q4_4_1_def">
    <div class="q-head" onclick="toggleQ('q4_4_1_def')">
      <div class="q-num">Q1</div>
      <div class="q-text">Set up equations and solve them to find the unknown numbers in the following cases:<br>(a) Add 4 to eight times a number; you get 60.<br>(b) One-fifth of a number minus 4 gives 3.<br>(c) If I take three-fourths of a number and add 3 to it, I get 21.<br>(d) When I subtracted 11 from twice a number, the result was 15.</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Let the unknown number be <span class="math">x</span>:<br>
            <strong>(a)</strong> Equation: <span class="math">8x + 4 = 60</span><br>
            <span class="math">8x = 60 − 4 = 56 ⟹ x = 56 / 8 = <strong>7</strong></span>.<br><br>
            <strong>(b)</strong> Equation: <span class="math">\\frac{x}{5} − 4 = 3</span><br>
            <span class="math">\\frac{x}{5} = 7 ⟹ x = 7 × 5 = <strong>35</strong></span>.<br><br>
            <strong>(c)</strong> Equation: <span class="math">\\frac{3}{4}x + 3 = 21</span><br>
            <span class="math">\\frac{3}{4}x = 18 ⟹ x = \\frac{18 × 4}{3} = 6 × 4 = <strong>24</strong></span>.<br><br>
            <strong>(d)</strong> Equation: <span class="math">2x − 11 = 15</span><br>
            <span class="math">2x = 15 + 11 = 26 ⟹ x = 26 / 2 = <strong>13</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Setting up correct equation</span><span class="marking-marks">1/2 Mark each</span></div>
          <div class="marking-row"><span class="marking-key">Solving for unknown number</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      5: [
        `  <div class="q-card" id="q5_1_1_def">
    <div class="q-head" onclick="toggleQ('q5_1_1_def')">
      <div class="q-num">Q1</div>
      <div class="q-text">Find the complement of each of the following angles:<br>(i) 20° &nbsp;&nbsp; (ii) 63° &nbsp;&nbsp; (iii) 57°</div>
      <div class="q-marks">3 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Two angles are complementary if their sum is 90°.<br>
            Complement of an angle = <span class="math">90° − \\text{angle}</span>.<br><br>
            <strong>(i) Complement of 20°:</strong> <span class="math">90° − 20° = <strong>70°</strong></span>.<br>
            <strong>(ii) Complement of 63°:</strong> <span class="math">90° − 63° = <strong>27°</strong></span>.<br>
            <strong>(iii) Complement of 57°:</strong> <span class="math">90° − 57° = <strong>33°</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula 90° − angle and correct evaluation</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q5_1_2_def">
    <div class="q-head" onclick="toggleQ('q5_1_2_def')">
      <div class="q-num">Q2</div>
      <div class="q-text">Find the supplement of each of the following angles:<br>(i) 105° &nbsp;&nbsp; (ii) 87° &nbsp;&nbsp; (iii) 154°</div>
      <div class="q-marks">3 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Two angles are supplementary if their sum is 180°.<br>
            Supplement of an angle = <span class="math">180° − \\text{angle}</span>.<br><br>
            <strong>(i) Supplement of 105°:</strong> <span class="math">180° − 105° = <strong>75°</strong></span>.<br>
            <strong>(ii) Supplement of 87°:</strong> <span class="math">180° − 87° = <strong>93°</strong></span>.<br>
            <strong>(iii) Supplement of 154°:</strong> <span class="math">180° − 154° = <strong>26°</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula 180° − angle and evaluation</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q5_1_9_def">
    <div class="q-head" onclick="toggleQ('q5_1_9_def')">
      <div class="q-num">Q9</div>
      <div class="q-text">In an intersecting lines figure: (i) Is ∠1 adjacent to ∠2? (ii) Is ∠AOC adjacent to ∠AOE? (iii) Do ∠COE and ∠EOD form a linear pair? (iv) Are ∠BOD and ∠DOA supplementary? (v) Is ∠1 vertically opposite to ∠4? (vi) What is the vertically opposite angle of ∠5?</div>
      <div class="q-marks">3 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <strong>Yes</strong>, ∠1 and ∠2 have common vertex O and common arm OC with non-common arms on opposite sides.<br>
            <strong>(ii)</strong> <strong>No</strong>, common arm OA is internal, so non-common arms do not lie on opposite sides.<br>
            <strong>(iii)</strong> <strong>Yes</strong>, ∠COE and ∠EOD lie on a straight line CD and form a linear pair.<br>
            <strong>(iv)</strong> <strong>Yes</strong>, line AB is straight, so ∠BOD + ∠DOA = 180° (supplementary).<br>
            <strong>(v)</strong> <strong>Yes</strong>, lines AB and CD intersect at O making ∠1 and ∠4 vertically opposite.<br>
            <strong>(vi)</strong> Vertically opposite angle of ∠5 (∠AOD) is <strong>∠COB (or ∠2 + ∠3)</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct geometric reasoning for each part</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q5_2_2_def">
    <div class="q-head" onclick="toggleQ('q5_2_2_def')">
      <div class="q-num">Q2</div>
      <div class="q-text">In a pair of parallel lines cut by a transversal, identify:<br>(i) the pairs of corresponding angles<br>(ii) the pairs of alternate interior angles<br>(iii) the pairs of interior angles on the same side of the transversal<br>(iv) the vertically opposite angles.</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            For two parallel lines cut by a transversal labeled with angles 1 through 8:<br>
            <strong>(i) Corresponding angles:</strong> (∠1, ∠5), (∠2, ∠6), (∠4, ∠8), (∠3, ∠7).<br>
            <strong>(ii) Alternate interior angles:</strong> (∠3, ∠5) and (∠2, ∠8).<br>
            <strong>(iii) Interior angles on the same side of transversal:</strong> (∠2, ∠5) and (∠3, ∠8).<br>
            <strong>(iv) Vertically opposite angles:</strong> (∠1, ∠3), (∠2, ∠4), (∠5, ∠7), (∠6, ∠8).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Listing correct pairs for each angle classification</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      6: [
        `  <div class="q-card" id="q6_1_3_def">
    <div class="q-head" onclick="toggleQ('q6_1_3_def')">
      <div class="q-num">Q3</div>
      <div class="q-text">Verify by drawing a diagram if the median and altitude of an isosceles triangle can be same.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            1. Draw an isosceles triangle ΔABC where <span class="math">AB = AC</span>.<br>
            2. Draw median AD from vertex A to the midpoint D of the non-equal base BC (so <span class="math">BD = DC</span>).<br>
            3. In ΔABD and ΔACD:<br>
            • <span class="math">AB = AC</span> (given)<br>
            • <span class="math">BD = DC</span> (AD is median)<br>
            • <span class="math">AD = AD</span> (common side)<br>
            By SSS Congruence, <span class="math">\\Delta ABD \\cong \\Delta ACD</span>.<br>
            Hence, <span class="math">\\angle ADB = \\angle ADC</span> (CPCTC).<br>
            Since they form a linear pair: <span class="math">\\angle ADB + \\angle ADC = 180° ⟹ \\angle ADB = 90°</span>.<br>
            Therefore, AD is perpendicular to BC, making AD an <strong>altitude</strong> as well.<br>
            <strong>Conclusion:</strong> In an isosceles triangle, the median drawn to the non-equal base is identical to its altitude.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Triangle construction and congruence proof</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Conclusion that median = altitude</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q6_2_2_def">
    <div class="q-head" onclick="toggleQ('q6_2_2_def')">
      <div class="q-num">Q2</div>
      <div class="q-text">Find the value of the unknown interior angle x in the following figures:<br>(i) Interior angle 50°, exterior angle 115°<br>(ii) Interior angle 70°, exterior angle 100°<br>(iii) Interior angle 90° (right angle), exterior angle 125°<br>(iv) Interior angle 60°, exterior angle 120°</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            By Exterior Angle Property: <span class="math">\\text{Exterior angle} = \\text{Sum of opposite interior angles}</span>.<br><br>
            <strong>(i)</strong> <span class="math">x + 50° = 115° ⟹ x = 115° − 50° = <strong>65°</strong></span>.<br>
            <strong>(ii)</strong> <span class="math">x + 70° = 100° ⟹ x = 100° − 70° = <strong>30°</strong></span>.<br>
            <strong>(iii)</strong> <span class="math">x + 90° = 125° ⟹ x = 125° − 90° = <strong>35°</strong></span>.<br>
            <strong>(iv)</strong> <span class="math">x + 60° = 120° ⟹ x = 120° − 60° = <strong>60°</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Exterior angle theorem formula and calculation</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q6_3_2_def">
    <div class="q-head" onclick="toggleQ('q6_3_2_def')">
      <div class="q-num">Q2</div>
      <div class="q-text">Find the values of the unknowns x and y in the following diagrams:<br>(i) Interior angles 50°, x, y with exterior to y being 120°<br>(ii) Interior angles y, 50°, x with vertically opposite to y being 80°</div>
      <div class="q-marks">4 Marks (2 Marks each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong><br>
            • Linear pair: <span class="math">y + 120° = 180° ⟹ y = 180° − 120° = <strong>60°</strong></span>.<br>
            • Angle sum property of triangle: <span class="math">50° + x + y = 180°</span><br>
            <span class="math">50° + x + 60° = 180° ⟹ x = 180° − 110° = <strong>70°</strong></span>.<br>
            So, <span class="math"><strong>x = 70°, y = 60°</strong></span>.<br><br>
            <strong>(ii)</strong><br>
            • Vertically opposite angles: <span class="math">y = <strong>80°</strong></span>.<br>
            • Angle sum property of triangle: <span class="math">50° + x + y = 180°</span><br>
            <span class="math">50° + x + 80° = 180° ⟹ x = 180° − 130° = <strong>50°</strong></span>.<br>
            So, <span class="math"><strong>x = 50°, y = 80°</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Values of x and y for part (i)</span><span class="marking-marks">2 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Values of x and y for part (ii)</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q6_5_5_def">
    <div class="q-head" onclick="toggleQ('q6_5_5_def')">
      <div class="q-num">Q5</div>
      <div class="q-text">A tree is broken at a height of 5 m from the ground and its top touches the ground at a distance of 12 m from the base of the tree. Find the original height of the tree.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Let the tree be broken at point B at height <span class="math">AB = 5\\text{ m}</span>.<br>
            Its top touches the ground at point C, so distance <span class="math">AC = 12\\text{ m}</span>.<br>
            The broken part BC forms the hypotenuse of right triangle ΔBAC.<br><br>
            By Pythagoras theorem:<br>
            <span class="math">BC^2 = AB^2 + AC^2</span><br>
            <span class="math">BC^2 = 5^2 + 12^2 = 25 + 144 = 169</span><br>
            <span class="math">BC = \\sqrt{169} = 13\\text{ m}</span>.<br><br>
            Original height of tree = <span class="math">AB + BC = 5 + 13 = <strong>18 m</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Pythagoras formula and finding hypotenuse BC = 13 m</span><span class="marking-marks">2 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Total height AB + BC = 18 m</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      7: [
        `  <div class="q-card" id="q7_1_3_def">
    <div class="q-head" onclick="toggleQ('q7_1_3_def')">
      <div class="q-num">Q3</div>
      <div class="q-text">Estimate what part of the figures is coloured and hence find the per cent which is coloured:<br>(i) 1 part out of 4 is coloured<br>(ii) 3 parts out of 5 are coloured<br>(iii) 3 parts out of 8 are coloured</div>
      <div class="q-marks">3 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> Coloured part = <span class="math">1/4</span>.<br>
            Percentage = <span class="math">\\frac{1}{4} × 100\\% = <strong>25%</strong></span>.<br><br>
            <strong>(ii)</strong> Coloured part = <span class="math">3/5</span>.<br>
            Percentage = <span class="math">\\frac{3}{5} × 100\\% = 3 × 20\\% = <strong>60%</strong></span>.<br><br>
            <strong>(iii)</strong> Coloured part = <span class="math">3/8</span>.<br>
            Percentage = <span class="math">\\frac{3}{8} × 100\\% = \\frac{75}{2}\\% = <strong>37.5%</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Fraction identification and percentage conversion</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q7_1_4_def">
    <div class="q-head" onclick="toggleQ('q7_1_4_def')">
      <div class="q-num">Q4</div>
      <div class="q-text">Find:<br>(a) 15% of 250 &nbsp;&nbsp; (b) 1% of 1 hour &nbsp;&nbsp; (c) 20% of ₹ 2500 &nbsp;&nbsp; (d) 75% of 1 kg</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a)</strong> <span class="math">\\frac{15}{100} × 250 = \\frac{15 × 5}{2} = \\frac{75}{2} = <strong>37.5</strong></span>.<br>
            <strong>(b)</strong> 1 hour = 60 minutes = 3600 seconds.<br>
            <span class="math">\\frac{1}{100} × 60\\text{ min} = \\frac{3}{5}\\text{ min} = \\frac{3}{5} × 60\\text{ sec} = <strong>36 seconds</strong></span>.<br>
            <strong>(c)</strong> <span class="math">\\frac{20}{100} × ₹ 2500 = 20 × 25 = <strong>₹ 500</strong></span>.<br>
            <strong>(d)</strong> 1 kg = 1000 g.<br>
            <span class="math">\\frac{75}{100} × 1000\\text{ g} = 75 × 10 = <strong>750 g (or 0.75 kg)</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Calculation for each percentage evaluation</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q7_1_6_def">
    <div class="q-head" onclick="toggleQ('q7_1_6_def')">
      <div class="q-num">Q6</div>
      <div class="q-text">Convert given per cents to decimal fractions and also to fractions in simplest forms:<br>(a) 25% &nbsp;&nbsp; (b) 150% &nbsp;&nbsp; (c) 20% &nbsp;&nbsp; (d) 5%</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) 25%:</strong><br>
            • Decimal: <span class="math">25 / 100 = <strong>0.25</strong></span>.<br>
            • Simplest fraction: <span class="math">25 / 100 = <strong>1/4</strong></span>.<br><br>
            <strong>(b) 150%:</strong><br>
            • Decimal: <span class="math">150 / 100 = <strong>1.5</strong></span>.<br>
            • Simplest fraction: <span class="math">150 / 100 = <strong>3/2 = 1 ½</strong></span>.<br><br>
            <strong>(c) 20%:</strong><br>
            • Decimal: <span class="math">20 / 100 = <strong>0.2</strong></span>.<br>
            • Simplest fraction: <span class="math">20 / 100 = <strong>1/5</strong></span>.<br><br>
            <strong>(d) 5%:</strong><br>
            • Decimal: <span class="math">5 / 100 = <strong>0.05</strong></span>.<br>
            • Simplest fraction: <span class="math">5 / 100 = <strong>1/20</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Decimal and simplest fraction form for each part</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      8: [
        `  <div class="q-card" id="q8_1_7_def">
    <div class="q-head" onclick="toggleQ('q8_1_7_def')">
      <div class="q-num">Q7</div>
      <div class="q-text">Rewrite the following rational numbers in the simplest form:<br>(i) −8/6 &nbsp;&nbsp; (ii) 25/45 &nbsp;&nbsp; (iii) −44/72 &nbsp;&nbsp; (iv) −8/10</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Divide numerator and denominator by their HCF:<br>
            <strong>(i)</strong> <span class="math">\\text{HCF}(8, 6) = 2 ⟹ \\frac{-8 ÷ 2}{6 ÷ 2} = <strong>-\\frac{4}{3}</strong></span>.<br>
            <strong>(ii)</strong> <span class="math">\\text{HCF}(25, 45) = 5 ⟹ \\frac{25 ÷ 5}{45 ÷ 5} = <strong>\\frac{5}{9}</strong></span>.<br>
            <strong>(iii)</strong> <span class="math">\\text{HCF}(44, 72) = 4 ⟹ \\frac{-44 ÷ 4}{72 ÷ 4} = <strong>-\\frac{11}{18}</strong></span>.<br>
            <strong>(iv)</strong> <span class="math">\\text{HCF}(8, 10) = 2 ⟹ \\frac{-8 ÷ 2}{10 ÷ 2} = <strong>-\\frac{4}{5}</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">HCF division and simplest fraction reduction</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q8_2_3_def">
    <div class="q-head" onclick="toggleQ('q8_2_3_def')">
      <div class="q-num">Q3</div>
      <div class="q-text">Find the product:<br>(i) 9/2 × (−7/4) &nbsp;&nbsp; (ii) 3/10 × (−9) &nbsp;&nbsp; (iii) −6/5 × 9/11 &nbsp;&nbsp; (iv) 3/7 × (−2/5)</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">\\frac{9}{2} × \\frac{-7}{4} = \\frac{9 × (-7)}{2 × 4} = <strong>-\\frac{63}{8} = -7 \\frac{7}{8}</strong></span>.<br>
            <strong>(ii)</strong> <span class="math">\\frac{3}{10} × (-9) = \\frac{3 × (-9)}{10} = <strong>-\\frac{27}{10} = -2 \\frac{7}{10}</strong></span>.<br>
            <strong>(iii)</strong> <span class="math">-\\frac{6}{5} × \\frac{9}{11} = \\frac{-6 × 9}{5 × 11} = <strong>-\\frac{54}{55}</strong></span>.<br>
            <strong>(iv)</strong> <span class="math">\\frac{3}{7} × \\left(-\\frac{2}{5}\\right) = \\frac{3 × (-2)}{7 × 5} = <strong>-\\frac{6}{35}</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Numerator and denominator multiplication with signs</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q8_2_4_def">
    <div class="q-head" onclick="toggleQ('q8_2_4_def')">
      <div class="q-num">Q4</div>
      <div class="q-text">Find the value of:<br>(i) (−4) ÷ 2/3 &nbsp;&nbsp; (ii) −3/5 ÷ 2 &nbsp;&nbsp; (iii) −4/5 ÷ (−3) &nbsp;&nbsp; (iv) −1/8 ÷ 3/4</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Multiply by the reciprocal of divisor:<br>
            <strong>(i)</strong> <span class="math">(-4) ÷ \\frac{2}{3} = (-4) × \\frac{3}{2} = -2 × 3 = <strong>-6</strong></span>.<br>
            <strong>(ii)</strong> <span class="math">-\\frac{3}{5} ÷ 2 = -\\frac{3}{5} × \\frac{1}{2} = <strong>-\\frac{3}{10}</strong></span>.<br>
            <strong>(iii)</strong> <span class="math">-\\frac{4}{5} ÷ (-3) = -\\frac{4}{5} × \\left(-\\frac{1}{3}\\right) = <strong>\\frac{4}{15}</strong></span>.<br>
            <strong>(iv)</strong> <span class="math">-\\frac{1}{8} ÷ \\frac{3}{4} = -\\frac{1}{8} × \\frac{4}{3} = -\\frac{1}{2 × 3} = <strong>-\\frac{1}{6}</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Reciprocal application and correct evaluation</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      9: [
        `  <div class="q-card" id="q9_1_1_def">
    <div class="q-head" onclick="toggleQ('q9_1_1_def')">
      <div class="q-num">Q1</div>
      <div class="q-text">Find the area of each of the following parallelograms:<br>(a) base = 7 cm, height = 4 cm<br>(b) base = 5 cm, height = 3 cm<br>(c) base = 2.5 cm, height = 3.5 cm</div>
      <div class="q-marks">3 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Area of parallelogram = <span class="math">\\text{base} × \\text{height}</span>.<br><br>
            <strong>(a)</strong> <span class="math">\\text{Area} = 7\\text{ cm} × 4\\text{ cm} = <strong>28 cm²</strong></span>.<br>
            <strong>(b)</strong> <span class="math">\\text{Area} = 5\\text{ cm} × 3\\text{ cm} = <strong>15 cm²</strong></span>.<br>
            <strong>(c)</strong> <span class="math">\\text{Area} = 2.5\\text{ cm} × 3.5\\text{ cm} = <strong>8.75 cm²</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula base × height and correct evaluation</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_1_2_def">
    <div class="q-head" onclick="toggleQ('q9_1_2_def')">
      <div class="q-num">Q2</div>
      <div class="q-text">Find the area of each of the following triangles:<br>(a) base = 4 cm, height = 3 cm<br>(b) base = 5 cm, height = 3.2 cm<br>(c) base = 3 cm, height = 4 cm</div>
      <div class="q-marks">3 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Area of triangle = <span class="math">\\frac{1}{2} × \\text{base} × \\text{height}</span>.<br><br>
            <strong>(a)</strong> <span class="math">\\text{Area} = \\frac{1}{2} × 4 × 3 = <strong>6 cm²</strong></span>.<br>
            <strong>(b)</strong> <span class="math">\\text{Area} = \\frac{1}{2} × 5 × 3.2 = 5 × 1.6 = <strong>8 cm²</strong></span>.<br>
            <strong>(c)</strong> <span class="math">\\text{Area} = \\frac{1}{2} × 3 × 4 = <strong>6 cm²</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula 1/2 × b × h and correct calculation</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_2_5_def">
    <div class="q-head" onclick="toggleQ('q9_2_5_def')">
      <div class="q-num">Q5</div>
      <div class="q-text">From a circular sheet of radius 4 cm, a circle of radius 3 cm is removed. Find the area of the remaining sheet. (Take π = 3.14)</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Radius of outer circular sheet (<span class="math">R</span>) = 4 cm.<br>
            Radius of removed circle (<span class="math">r</span>) = 3 cm.<br><br>
            Area of remaining sheet = <span class="math">\\pi R^2 − \\pi r^2 = \\pi (R^2 − r^2)</span><br>
            <span class="math">= 3.14 × (4^2 − 3^2)</span><br>
            <span class="math">= 3.14 × (16 − 9) = 3.14 × 7 = <strong>21.98 cm²</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula π(R² - r²) substitution</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Evaluation 21.98 cm²</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_2_6_def">
    <div class="q-head" onclick="toggleQ('q9_2_6_def')">
      <div class="q-num">Q6</div>
      <div class="q-text">Saima wants to put a lace on the edge of a circular table cover of diameter 1.5 m. Find the length of the lace required and also find its cost if one meter of the lace costs ₹ 15. (Take π = 3.14)</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Diameter of circular table cover (<span class="math">d</span>) = 1.5 m.<br>
            Length of lace required = Circumference = <span class="math">\\pi d</span><br>
            <span class="math">= 3.14 × 1.5 = <strong>4.71 m</strong></span>.<br><br>
            Cost of 1 m lace = ₹ 15.<br>
            Total cost = <span class="math">4.71 × 15 = <strong>₹ 70.65</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Circumference calculation = 4.71 m</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Cost calculation = ₹ 70.65</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q9_2_15_def">
    <div class="q-head" onclick="toggleQ('q9_2_15_def')">
      <div class="q-num">Q15</div>
      <div class="q-text">Find the circumference of the inner and the outer circles, shown in the figure, where outer radius is 19 m and the width of the track is 10 m. (Take π = 3.14)</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Outer radius (<span class="math">R</span>) = 19 m.<br>
            Circumference of outer circle = <span class="math">2\\pi R = 2 × 3.14 × 19 = <strong>119.32 m</strong></span>.<br><br>
            Inner radius (<span class="math">r</span>) = <span class="math">19 − 10 = 9\\text{ m}</span>.<br>
            Circumference of inner circle = <span class="math">2\\pi r = 2 × 3.14 × 9 = <strong>56.52 m</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Outer circumference = 119.32 m</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Inner circumference = 56.52 m</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      10: [
        `  <div class="q-card" id="q10_1_2_def">
    <div class="q-head" onclick="toggleQ('q10_1_2_def')">
      <div class="q-num">Q2</div>
      <div class="q-text">Identify the terms and their factors in the following expressions:<br>(a) −4x + 5 &nbsp;&nbsp; (b) −4x + 5y &nbsp;&nbsp; (c) 5y + 3y² &nbsp;&nbsp; (d) xy + 2x²y²</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) −4x + 5:</strong><br>
            • Terms: <span class="math">−4x</span> and <span class="math">5</span>.<br>
            • Factors: for <span class="math">−4x</span> are <strong>−4, x</strong>; for <span class="math">5</span> is <strong>5</strong>.<br><br>
            <strong>(b) −4x + 5y:</strong><br>
            • Terms: <span class="math">−4x</span> and <span class="math">5y</span>.<br>
            • Factors: for <span class="math">−4x</span> are <strong>−4, x</strong>; for <span class="math">5y</span> are <strong>5, y</strong>.<br><br>
            <strong>(c) 5y + 3y²:</strong><br>
            • Terms: <span class="math">5y</span> and <span class="math">3y²</span>.<br>
            • Factors: for <span class="math">5y</span> are <strong>5, y</strong>; for <span class="math">3y²</span> are <strong>3, y, y</strong>.<br><br>
            <strong>(d) xy + 2x²y²:</strong><br>
            • Terms: <span class="math">xy</span> and <span class="math">2x²y²</span>.<br>
            • Factors: for <span class="math">xy</span> are <strong>x, y</strong>; for <span class="math">2x²y²</span> are <strong>2, x, x, y, y</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Listing terms and factors for each expression</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q10_2_7_def">
    <div class="q-head" onclick="toggleQ('q10_2_7_def')">
      <div class="q-num">Q7</div>
      <div class="q-text">Simplify these expressions and find their values if x = 3, a = −1, b = −2:<br>(i) 3x − 5 − x + 9<br>(ii) 2 − 8x + 4x + 4<br>(iii) 3a + 5 − 8a + 1<br>(iv) 10 − 3b − 4 − 5b</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">3x − x + 9 − 5 = 2x + 4</span>.<br>
            For <span class="math">x = 3</span>: <span class="math">2(3) + 4 = 6 + 4 = <strong>10</strong></span>.<br><br>
            <strong>(ii)</strong> <span class="math">−8x + 4x + 2 + 4 = −4x + 6</span>.<br>
            For <span class="math">x = 3</span>: <span class="math">−4(3) + 6 = −12 + 6 = <strong>−6</strong></span>.<br><br>
            <strong>(iii)</strong> <span class="math">3a − 8a + 5 + 1 = −5a + 6</span>.<br>
            For <span class="math">a = −1</span>: <span class="math">−5(−1) + 6 = 5 + 6 = <strong>11</strong></span>.<br><br>
            <strong>(iv)</strong> <span class="math">10 − 4 − 3b − 5b = 6 − 8b</span>.<br>
            For <span class="math">b = −2</span>: <span class="math">6 − 8(−2) = 6 + 16 = <strong>22</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Simplification and numerical evaluation</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q10_2_8_def">
    <div class="q-head" onclick="toggleQ('q10_2_8_def')">
      <div class="q-num">Q8</div>
      <div class="q-text">(i) If z = 10, find the value of z³ − 3(z − 10).<br>(ii) If p = −10, find the value of p² − 2p − 100.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> Given expression: <span class="math">z^3 − 3(z − 10)</span>.<br>
            Substitute <span class="math">z = 10</span>:<br>
            <span class="math">= 10^3 − 3(10 − 10) = 1000 − 3(0) = 1000 − 0 = <strong>1000</strong></span>.<br><br>
            <strong>(ii)</strong> Given expression: <span class="math">p^2 − 2p − 100</span>.<br>
            Substitute <span class="math">p = −10</span>:<br>
            <span class="math">= (−10)^2 − 2(−10) − 100 = 100 + 20 − 100 = <strong>20</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Value of (i) = 1000</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Value of (ii) = 20</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      11: [
        `  <div class="q-card" id="q11_1_3_def">
    <div class="q-head" onclick="toggleQ('q11_1_3_def')">
      <div class="q-num">Q3</div>
      <div class="q-text">Express each of the following numbers using exponential notation:<br>(i) 512 &nbsp;&nbsp; (ii) 343 &nbsp;&nbsp; (iii) 729 &nbsp;&nbsp; (iv) 3125</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) 512:</strong> <span class="math">512 = 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = <strong>2⁹</strong></span>.<br>
            <strong>(ii) 343:</strong> <span class="math">343 = 7 × 7 × 7 = <strong>7³</strong></span>.<br>
            <strong>(iii) 729:</strong> <span class="math">729 = 3 × 3 × 3 × 3 × 3 × 3 = <strong>3⁶</strong></span> (or <span class="math">9^3</span>).<br>
            <strong>(iv) 3125:</strong> <span class="math">3125 = 5 × 5 × 5 × 5 × 5 = <strong>5⁵</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Prime factorization and exponential notation</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q11_2_4_def">
    <div class="q-head" onclick="toggleQ('q11_2_4_def')">
      <div class="q-num">Q4</div>
      <div class="q-text">Express each of the following as a product of prime factors only in exponential form:<br>(i) 108 × 192 &nbsp;&nbsp; (ii) 270 &nbsp;&nbsp; (iii) 729 × 64 &nbsp;&nbsp; (iv) 768</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) 108 × 192:</strong><br>
            <span class="math">108 = 2^2 × 3^3</span>, <span class="math">192 = 2^6 × 3^1</span>.<br>
            <span class="math">108 × 192 = 2^{2+6} × 3^{3+1} = <strong>2⁸ × 3⁴</strong></span>.<br><br>
            <strong>(ii) 270:</strong><br>
            <span class="math">270 = 2 × 135 = 2 × 3 × 45 = 2 × 3 × 3 × 15 = <strong>2 × 3³ × 5</strong></span>.<br><br>
            <strong>(iii) 729 × 64:</strong><br>
            <span class="math">729 = 3^6</span>, <span class="math">64 = 2^6</span>.<br>
            Product = <span class="math"><strong>2⁶ × 3⁶</strong></span>.<br><br>
            <strong>(iv) 768:</strong><br>
            <span class="math">768 = 2^8 × 3 = <strong>2⁸ × 3</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Product of prime powers in exponential form</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q11_3_3_def">
    <div class="q-head" onclick="toggleQ('q11_3_3_def')">
      <div class="q-num">Q3</div>
      <div class="q-text">Express the following numbers in standard scientific form:<br>(i) 5,00,00,000 &nbsp;&nbsp; (ii) 70,00,000 &nbsp;&nbsp; (iii) 3,18,65,00,000 &nbsp;&nbsp; (iv) 3,90,878</div>
      <div class="q-marks">4 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            In standard form, a number is written as <span class="math">m × 10^n</span> where <span class="math">1 ≤ m < 10</span>:<br>
            <strong>(i) 5,00,00,000 = <strong>5.0 × 10⁷</strong></strong>.<br>
            <strong>(ii) 70,00,000 = <strong>7.0 × 10⁶</strong></strong>.<br>
            <strong>(iii) 3,18,65,00,000 = <strong>3.1865 × 10⁹</strong></strong>.<br>
            <strong>(iv) 3,90,878 = <strong>3.90878 × 10⁵</strong></strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Standard exponential scientific form</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      12: [
        `  <div class="q-card" id="q12_1_1_def">
    <div class="q-head" onclick="toggleQ('q12_1_1_def')">
      <div class="q-num">Q1</div>
      <div class="q-text">Copy the figures with punched holes and find the axes of symmetry for square and rectangular punched sheets.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            The axis of symmetry is the fold line such that both punched holes coincide exactly when the sheet is folded along it:<br>
            • If two holes lie vertically opposite on the top and bottom edge, the axis of symmetry is the <strong>horizontal midline</strong>.<br>
            • If two holes lie horizontally opposite on the left and right edge, the axis of symmetry is the <strong>vertical midline</strong>.<br>
            • If two holes lie at adjacent corners of a square, the axis of symmetry is the <strong>diagonal</strong> passing between them or the perpendicular bisector connecting them.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Symmetry axis identification through folding rule</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q12_1_3_def">
    <div class="q-head" onclick="toggleQ('q12_1_3_def')">
      <div class="q-num">Q3</div>
      <div class="q-text">In the following figures, the mirror line (i.e., the line of symmetry) is given as a dotted line. Complete each figure performing reflection in the dotted line: (a) square (b) triangle (c) rhombus (d) circle (e) pentagon (f) octagon. Also name the complete figure.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Reflecting each half-shape across the dotted mirror line produces the complete symmetric closed polygon:<br>
            • <strong>(a)</strong> Reflecting a rectangle/half-square yields a <strong>Square</strong>.<br>
            • <strong>(b)</strong> Reflecting a right triangle across its altitude yields an <strong>Isosceles Triangle</strong>.<br>
            • <strong>(c)</strong> Reflecting half a rhombus across its diagonal yields a <strong>Rhombus</strong>.<br>
            • <strong>(d)</strong> Reflecting a semicircle across its diameter yields a complete <strong>Circle</strong>.<br>
            • <strong>(e)</strong> Reflecting half a pentagon yields a regular <strong>Pentagon</strong>.<br>
            • <strong>(f)</strong> Reflecting half an octagon yields a regular <strong>Octagon</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Reflection and naming the complete geometric polygon</span><span class="marking-marks">3 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q12_1_7_def">
    <div class="q-head" onclick="toggleQ('q12_1_7_def')">
      <div class="q-num">Q7</div>
      <div class="q-text">State the number of lines of symmetry for the following figures:<br>(a) An equilateral triangle &nbsp;&nbsp; (b) An isosceles triangle &nbsp;&nbsp; (c) A scalene triangle<br>(d) A square &nbsp;&nbsp; (e) A rectangle &nbsp;&nbsp; (f) A rhombus &nbsp;&nbsp; (g) A parallelogram &nbsp;&nbsp; (h) A circle</div>
      <div class="q-marks">4 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(a) Equilateral triangle:</strong> <strong>3 lines of symmetry</strong>.<br>
            • <strong>(b) Isosceles triangle:</strong> <strong>1 line of symmetry</strong>.<br>
            • <strong>(c) Scalene triangle:</strong> <strong>0 lines of symmetry</strong>.<br>
            • <strong>(d) Square:</strong> <strong>4 lines of symmetry</strong>.<br>
            • <strong>(e) Rectangle:</strong> <strong>2 lines of symmetry</strong>.<br>
            • <strong>(f) Rhombus:</strong> <strong>2 lines of symmetry</strong>.<br>
            • <strong>(g) Parallelogram:</strong> <strong>0 lines of symmetry</strong>.<br>
            • <strong>(h) Circle:</strong> <strong>Infinitely many lines of symmetry</strong> (any diameter).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Number of lines of symmetry for each figure</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q12_2_1_def">
    <div class="q-head" onclick="toggleQ('q12_2_1_def')">
      <div class="q-num">Q1</div>
      <div class="q-text">Which of the following figures have rotational symmetry of order more than 1:<br>(a) Windmill &nbsp;&nbsp; (b) Equilateral triangle &nbsp;&nbsp; (c) Propeller with 3 blades &nbsp;&nbsp; (d) H-shape &nbsp;&nbsp; (e) Circle with 3 equally spaced spokes &nbsp;&nbsp; (f) Four-leaf clover?</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            The order of rotational symmetry is the number of times a figure coincides with its original position during a 360° rotation:<br>
            • <strong>(a) Windmill:</strong> Order 4 (rotates by 90°). Order > 1.<br>
            • <strong>(b) Equilateral triangle:</strong> Order 3 (rotates by 120°). Order > 1.<br>
            • <strong>(c) Propeller (3 blades):</strong> Order 3 (rotates by 120°). Order > 1.<br>
            • <strong>(d) H-shape:</strong> Order 2 (rotates by 180°). Order > 1.<br>
            • <strong>(e) Circle with 3 spokes:</strong> Order 3 (rotates by 120°). Order > 1.<br>
            • <strong>(f) Four-leaf clover:</strong> Order 4 (rotates by 90°). Order > 1.<br><br>
            <strong>All figures (a), (b), (c), (d), (e), and (f) have rotational symmetry of order more than 1.</strong>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Order calculation for each shape</span><span class="marking-marks">2 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Final conclusion stating order > 1</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      13: [
        `  <div class="q-card" id="q13_1_1_def">
    <div class="q-head" onclick="toggleQ('q13_1_1_def')">
      <div class="q-num">Q1</div>
      <div class="q-text">Identify the nets which can be used to make cubes among the given 6-square patterns.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            A valid cube net must consist of 6 connected squares such that folding along edges forms a closed cube without any faces overlapping:<br>
            • <strong>Valid nets:</strong> Patterns (ii), (iii), (iv), and (vi) fold into complete closed cubes without overlapping faces.<br>
            • <strong>Invalid nets:</strong> Patterns (i) and (v) cannot make a cube because some faces overlap, leaving one or more faces open.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correctly identifying valid cube folding nets</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q13_2_1_def">
    <div class="q-head" onclick="toggleQ('q13_2_1_def')">
      <div class="q-num">Q1</div>
      <div class="q-text">Explain how isometric dot paper is used to make an isometric sketch of a 3D solid shape like a cuboid.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            On isometric dot paper, dots are arranged at the vertices of equilateral triangles, forming axes at 120° to each other:<br>
            1. Draw the base edges along the slanted isometric axes proportional to the given length and breadth.<br>
            2. Draw vertical line segments at the vertices equal to the height of the cuboid.<br>
            3. Join the top endpoints to form the top face.<br>
            In an isometric sketch, measurements are drawn to exact scale along the isometric axes, preserving proportional dimensions.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Isometric dot paper principles and sketching steps</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q13_3_1_def">
    <div class="q-head" onclick="toggleQ('q13_3_1_def')">
      <div class="q-num">Q1</div>
      <div class="q-text">What cross-sections do you get when you give a: (i) vertical cut (ii) horizontal cut to a solid sphere, cylinder, and cone?</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            A cross-section is the 2D surface exposed when a solid is cut by a plane:<br>
            • <strong>Sphere:</strong> Both vertical and horizontal cuts give a <strong>Circle</strong>.<br>
            • <strong>Cylinder:</strong> A vertical cut gives a <strong>Rectangle</strong>; a horizontal cut gives a <strong>Circle</strong>.<br>
            • <strong>Cone:</strong> A vertical cut through the apex gives a <strong>Triangle</strong>; a horizontal cut gives a <strong>Circle</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Cross-section shapes for each cut orientation</span><span class="marking-marks">3 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`
      ]
    };
  }
};
