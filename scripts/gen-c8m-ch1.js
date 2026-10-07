const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c8m');

const ch1Html = `<section class="chapter-section" id="ch1">
  <div class="chapter-header">
    <div class="ch-badge">1</div>
    <div class="chapter-header-info">
      <h2>Chapter 1: A Square and A Cube</h2>
      <p>NCERT Ganita Prakash (Class 8 Part 1) — Square Numbers, Square Roots, Long Division, Patterns, Cube Numbers, Cube Roots &amp; Pythagorean Triplets | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Mathematical Concepts &amp; Formulas</div>
    <ul class="concept-list">
      <li><strong>Square Numbers:</strong> A natural number <em>n</em> is a perfect square if <em>n = m²</em> for some natural number <em>m</em>.
        <ul>
          <li>Square numbers end only in digits <strong>0, 1, 4, 5, 6, or 9</strong> at units place. Numbers ending in 2, 3, 7, 8 can never be perfect squares.</li>
          <li>A number with <em>n</em> zeros at the end has <em>2n</em> zeros when squared.</li>
          <li>Non-square numbers between <em>n²</em> and <em>(n + 1)²</em> is exactly <strong>2n</strong>: <code>(n + 1)² − n² − 1 = 2n</code>.</li>
          <li>Sum of first <em>n</em> consecutive odd natural numbers is <em>n²</em>: <code>1 + 3 + 5 + ... + (2n − 1) = n²</code>.</li>
          <li>Pythagorean Triplet: For any natural number <em>m &gt; 1</em>, <code>(2m)² + (m² − 1)² = (m² + 1)²</code>.</li>
        </ul>
      </li>
      <li><strong>Square Roots (√n):</strong> The inverse operation of squaring.
        <ul>
          <li><strong>Repeated Subtraction:</strong> Successively subtract consecutive odd numbers (1, 3, 5, 7...) starting from 1 until 0 is reached. Count of subtractions is √n.</li>
          <li><strong>Prime Factorisation:</strong> Pair identical prime factors in twos. Square root is product of one factor from each pair.</li>
          <li><strong>Long Division Method:</strong> Group digits in pairs (periods) from right to left (for decimals, from decimal point outwards). Essential for large numbers and decimal square roots.</li>
        </ul>
      </li>
      <li><strong>Cube Numbers &amp; Cube Roots (∛n):</strong> A number <em>n</em> is a perfect cube if <em>n = m³</em>.
        <ul>
          <li>In prime factorisation of a perfect cube, every prime factor appears in triplets (multiples of 3).</li>
          <li>Cube of an even number is even; cube of an odd number is odd.</li>
          <li>Cube root by estimation: Group digits in triplets from right. First group gives units digit (by unit digit cube mapping); remaining group gives tens digit by nearest cube.</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- SVG Diagram 1: Geometric Square and Cube Visualizer -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 170" width="100%" height="170" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Geometric Duality: Square (2D Area) vs Cube (3D Volume)</text>
      
      <!-- 2D Square Model -->
      <g transform="translate(60, 35)">
        <rect x="0" y="0" width="90" height="90" fill="#eff6ff" stroke="#2563eb" stroke-width="2" rx="4"/>
        <!-- 3x3 grid lines -->
        <line x1="30" y1="0" x2="30" y2="90" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="3,2"/>
        <line x1="60" y1="0" x2="60" y2="90" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="3,2"/>
        <line x1="0" y1="30" x2="90" y2="30" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="3,2"/>
        <line x1="0" y1="60" x2="90" y2="60" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="3,2"/>
        <text x="45" y="112" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Square: Side = 3 units</text>
        <text x="45" y="127" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#3b82f6" text-anchor="middle">Area = 3² = 9 sq units</text>
      </g>

      <!-- Arrow Indicator -->
      <path d="M 220 80 L 290 80" stroke="#64748b" stroke-width="2" stroke-dasharray="4,3"/>
      <polygon points="295,80 287,76 287,84" fill="#64748b"/>
      <text x="257" y="72" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748b" text-anchor="middle">Add Depth</text>

      <!-- 3D Isometric Cube Model -->
      <g transform="translate(340, 35)">
        <!-- Front face -->
        <polygon points="20,40 70,40 70,90 20,90" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
        <!-- Top face -->
        <polygon points="20,40 50,15 100,15 70,40" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
        <!-- Right face -->
        <polygon points="70,40 100,15 100,65 70,90" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
        <text x="60" y="112" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">Cube: Edge = 3 units</text>
        <text x="60" y="127" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#2563eb" text-anchor="middle">Volume = 3³ = 27 cubic units</text>
      </g>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 1.1: Visual Representation of Square Area (Side²) and Cube Volume (Edge³)</div>
  </div>

  <div class="ex-div">NCERT Ganita Prakash: Figure It Out &amp; Comprehensive Exercises (100% Questions Solved)</div>

  <!-- Q1 -->
  <div class="q-card" id="c8m-ch1-q1">
    <div class="q-head" onclick="toggleQ('c8m-ch1-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">What will be the unit digit of the squares of the following numbers?<br>(i) 81 &nbsp;&nbsp; (ii) 272 &nbsp;&nbsp; (iii) 799 &nbsp;&nbsp; (iv) 3853 &nbsp;&nbsp; (v) 1234 &nbsp;&nbsp; (vi) 26387 &nbsp;&nbsp; (vii) 52698 &nbsp;&nbsp; (viii) 99880 &nbsp;&nbsp; (ix) 12796 &nbsp;&nbsp; (x) 55555</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="12" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Property:</strong> The unit digit of the square of a number depends solely on the unit digit of the number itself. If a number ends in digit <em>u</em>, its square ends in the unit digit of <em>u²</em>.</p>
          <div class="step">
            • <strong>(i) 81:</strong> Unit digit is 1. Since 1² = 1, unit digit of 81² is <strong>1</strong>.<br>
            • <strong>(ii) 272:</strong> Unit digit is 2. Since 2² = 4, unit digit of 272² is <strong>4</strong>.<br>
            • <strong>(iii) 799:</strong> Unit digit is 9. Since 9² = 81 (unit digit 1), unit digit of 799² is <strong>1</strong>.<br>
            • <strong>(iv) 3853:</strong> Unit digit is 3. Since 3² = 9, unit digit of 3853² is <strong>9</strong>.<br>
            • <strong>(v) 1234:</strong> Unit digit is 4. Since 4² = 16 (unit digit 6), unit digit of 1234² is <strong>6</strong>.<br>
            • <strong>(vi) 26387:</strong> Unit digit is 7. Since 7² = 49 (unit digit 9), unit digit of 26387² is <strong>9</strong>.<br>
            • <strong>(vii) 52698:</strong> Unit digit is 8. Since 8² = 64 (unit digit 4), unit digit of 52698² is <strong>4</strong>.<br>
            • <strong>(viii) 99880:</strong> Unit digit is 0. Since 0² = 0, unit digit of 99880² is <strong>0</strong>.<br>
            • <strong>(ix) 12796:</strong> Unit digit is 6. Since 6² = 36 (unit digit 6), unit digit of 12796² is <strong>6</strong>.<br>
            • <strong>(x) 55555:</strong> Unit digit is 5. Since 5² = 25 (unit digit 5), unit digit of 55555² is <strong>5</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating property: Unit digit of square = unit digit of u²</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correct unit digits for all 10 sub-parts</span><span class="marking-marks">2.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c8m-ch1-q2">
    <div class="q-head" onclick="toggleQ('c8m-ch1-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">The following numbers are obviously not perfect squares. Give reasons:<br>(i) 1057 &nbsp;&nbsp; (ii) 23453 &nbsp;&nbsp; (iii) 7928 &nbsp;&nbsp; (iv) 222222 &nbsp;&nbsp; (v) 64000 &nbsp;&nbsp; (vi) 89722 &nbsp;&nbsp; (vii) 222000 &nbsp;&nbsp; (viii) 505050</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Fundamental Properties:</strong><br>
          1. A perfect square never ends in digits <strong>2, 3, 7, or 8</strong>.<br>
          2. A perfect square can never end in an <strong>odd number of zeros</strong>.</p>
          <div class="step">
            • <strong>(i) 1057:</strong> Ends in digit <strong>7</strong>, therefore it cannot be a perfect square.<br>
            • <strong>(ii) 23453:</strong> Ends in digit <strong>3</strong>, therefore it cannot be a perfect square.<br>
            • <strong>(iii) 7928:</strong> Ends in digit <strong>8</strong>, therefore it cannot be a perfect square.<br>
            • <strong>(iv) 222222:</strong> Ends in digit <strong>2</strong>, therefore it cannot be a perfect square.<br>
            • <strong>(v) 64000:</strong> Ends in <strong>3 zeros</strong> (an odd number of trailing zeros), hence cannot be a perfect square.<br>
            • <strong>(vi) 89722:</strong> Ends in digit <strong>2</strong>, therefore it cannot be a perfect square.<br>
            • <strong>(vii) 222000:</strong> Ends in <strong>3 zeros</strong> (odd number of zeros), hence cannot be a perfect square.<br>
            • <strong>(viii) 505050:</strong> Ends in <strong>1 zero</strong> (an odd number of zeros), hence cannot be a perfect square.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Mentioning units digit restriction (2, 3, 7, 8) and odd zeros rule</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Accurate reason given for each part</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c8m-ch1-q3">
    <div class="q-head" onclick="toggleQ('c8m-ch1-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">How many non-square natural numbers lie between the squares of the following numbers?<br>(i) 12 and 13 &nbsp;&nbsp;&nbsp; (ii) 25 and 26 &nbsp;&nbsp;&nbsp; (iii) 99 and 100</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Theorem / Formula:</strong> Between the squares of two consecutive natural numbers <em>n</em> and <em>(n + 1)</em>, the number of non-square natural numbers is given by <strong>2n</strong>.</p>
          <div class="step">
            • <strong>(i) Between 12² and 13²:</strong><br>
            Here <em>n = 12</em>.<br>
            Number of non-square numbers = 2n = 2 × 12 = <strong>24</strong>.<br>
            <em>Verification:</em> 13² − 12² − 1 = 169 − 144 − 1 = 24.<br><br>

            • <strong>(ii) Between 25² and 26²:</strong><br>
            Here <em>n = 25</em>.<br>
            Number of non-square numbers = 2n = 2 × 25 = <strong>50</strong>.<br><br>

            • <strong>(iii) Between 99² and 100²:</strong><br>
            Here <em>n = 99</em>.<br>
            Number of non-square numbers = 2n = 2 × 99 = <strong>198</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula identification: Number of non-square numbers = 2n</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correct evaluation for all 3 cases (24, 50, 198)</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c8m-ch1-q4">
    <div class="q-head" onclick="toggleQ('c8m-ch1-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Without adding, find the sum:<br>(i) 1 + 3 + 5 + 7 + 9<br>(ii) 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19<br>(iii) 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19 + 21 + 23</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Property:</strong> The sum of the first <em>n</em> consecutive odd natural numbers equals <strong>n²</strong>.</p>
          <div class="step">
            • <strong>(i) 1 + 3 + 5 + 7 + 9:</strong><br>
            This is the sum of the first 5 odd natural numbers (<em>n = 5</em>).<br>
            Sum = 5² = <strong>25</strong>.<br><br>

            • <strong>(ii) 1 + 3 + 5 + ... + 19:</strong><br>
            This is the sum of the first 10 odd natural numbers (<em>n = 10</em>).<br>
            Sum = 10² = <strong>100</strong>.<br><br>

            • <strong>(iii) 1 + 3 + 5 + ... + 23:</strong><br>
            This is the sum of the first 12 odd natural numbers (<em>n = 12</em>).<br>
            Sum = 12² = <strong>144</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Quoting formula Sum = n²</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correct sums 25, 100, 144</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c8m-ch1-q5">
    <div class="q-head" onclick="toggleQ('c8m-ch1-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Write a Pythagorean triplet whose smallest member is:<br>(i) 6 &nbsp;&nbsp;&nbsp; (ii) 14 &nbsp;&nbsp;&nbsp; (iii) 16 &nbsp;&nbsp;&nbsp; (iv) 18</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>General Form of Pythagorean Triplet:</strong> For any integer <em>m &gt; 1</em>, the three numbers <code>2m</code>, <code>m² − 1</code>, and <code>m² + 1</code> form a Pythagorean triplet.</p>
          <div class="step">
            • <strong>(i) Smallest member = 6:</strong><br>
            Let 2m = 6 ⇒ m = 3.<br>
            m² − 1 = 3² − 1 = 9 − 1 = 8.<br>
            m² + 1 = 3² + 1 = 9 + 1 = 10.<br>
            Check: 6² + 8² = 36 + 64 = 100 = 10².<br>
            Hence, the required triplet is <strong>(6, 8, 10)</strong>.<br><br>

            • <strong>(ii) Smallest member = 14:</strong><br>
            Let 2m = 14 ⇒ m = 7.<br>
            m² − 1 = 7² − 1 = 49 − 1 = 48.<br>
            m² + 1 = 7² + 1 = 49 + 1 = 50.<br>
            Check: 14² + 48² = 196 + 2304 = 2500 = 50².<br>
            Hence, the required triplet is <strong>(14, 48, 50)</strong>.<br><br>

            • <strong>(iii) Smallest member = 16:</strong><br>
            Let 2m = 16 ⇒ m = 8.<br>
            m² − 1 = 8² − 1 = 64 − 1 = 63.<br>
            m² + 1 = 8² + 1 = 64 + 1 = 65.<br>
            Hence, the required triplet is <strong>(16, 63, 65)</strong>.<br><br>

            • <strong>(iv) Smallest member = 18:</strong><br>
            Let 2m = 18 ⇒ m = 9.<br>
            m² − 1 = 9² − 1 = 81 − 1 = 80.<br>
            m² + 1 = 9² + 1 = 81 + 1 = 82.<br>
            Hence, the required triplet is <strong>(18, 80, 82)</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating 2m, m² − 1, m² + 1 form</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correctly deriving all 4 triplets</span><span class="marking-marks">2.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c8m-ch1-q6">
    <div class="q-head" onclick="toggleQ('c8m-ch1-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Find the square root of 64 and 169 using the method of repeated subtraction.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>For 64:</strong> Successively subtract consecutive odd natural numbers:<br>
            1. 64 − 1 = 63<br>
            2. 63 − 3 = 60<br>
            3. 60 − 5 = 55<br>
            4. 55 − 7 = 48<br>
            5. 48 − 9 = 39<br>
            6. 39 − 11 = 28<br>
            7. 28 − 13 = 15<br>
            8. 15 − 15 = 0<br>
            Since we subtracted 8 consecutive odd numbers to reach 0, <strong>√64 = 8</strong>.<br><br>

            • <strong>For 169:</strong><br>
            1. 169 − 1 = 168 &nbsp;&nbsp;&nbsp; 2. 168 − 3 = 165 &nbsp;&nbsp;&nbsp; 3. 165 − 5 = 160 &nbsp;&nbsp;&nbsp; 4. 160 − 7 = 153<br>
            5. 153 − 9 = 144 &nbsp;&nbsp;&nbsp; 6. 144 − 11 = 133 &nbsp;&nbsp; 7. 133 − 13 = 120 &nbsp;&nbsp; 8. 120 − 15 = 105<br>
            9. 105 − 17 = 88 &nbsp;&nbsp; 10. 88 − 19 = 69 &nbsp;&nbsp;&nbsp; 11. 69 − 21 = 48 &nbsp;&nbsp;&nbsp; 12. 48 − 23 = 25<br>
            13. 25 − 25 = 0.<br>
            Since 0 is reached at the 13th step, <strong>√169 = 13</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Repeated subtraction steps shown accurately</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Final square roots √64 = 8 and √169 = 13</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c8m-ch1-q7">
    <div class="q-head" onclick="toggleQ('c8m-ch1-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Find the square root of the following by Prime Factorisation Method:<br>(i) 729 &nbsp;&nbsp;&nbsp; (ii) 1764 &nbsp;&nbsp;&nbsp; (iii) 4096 &nbsp;&nbsp;&nbsp; (iv) 7744 &nbsp;&nbsp;&nbsp; (v) 9604</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) 729:</strong><br>
            Prime factorisation = 3 × 3 × 3 × 3 × 3 × 3 = (3 × 3) × (3 × 3) × (3 × 3).<br>
            √729 = 3 × 3 × 3 = <strong>27</strong>.<br><br>

            • <strong>(ii) 1764:</strong><br>
            Prime factorisation = 2 × 2 × 3 × 3 × 7 × 7 = (2 × 2) × (3 × 3) × (7 × 7).<br>
            √1764 = 2 × 3 × 7 = <strong>42</strong>.<br><br>

            • <strong>(iii) 4096:</strong><br>
            Prime factorisation = 2¹² = (2 × 2)⁶.<br>
            √4096 = 2⁶ = <strong>64</strong>.<br><br>

            • <strong>(iv) 7744:</strong><br>
            Prime factorisation = 2 × 2 × 2 × 2 × 2 × 2 × 11 × 11 = (2 × 2) × (2 × 2) × (2 × 2) × (11 × 11).<br>
            √7744 = 2 × 2 × 2 × 11 = <strong>88</strong>.<br><br>

            • <strong>(v) 9604:</strong><br>
            Prime factorisation = 2 × 2 × 7 × 7 × 7 × 7 = (2 × 2) × (7 × 7) × (7 × 7).<br>
            √9604 = 2 × 7 × 7 = <strong>98</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Prime factor decomposition with pairs identified</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Accurate square roots (27, 42, 64, 88, 98)</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c8m-ch1-q8">
    <div class="q-head" onclick="toggleQ('c8m-ch1-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">For each of the following numbers, find the smallest whole number by which it should be multiplied so as to get a perfect square number. Also find the square root of the square number so obtained:<br>(i) 252 &nbsp;&nbsp;&nbsp; (ii) 180 &nbsp;&nbsp;&nbsp; (iii) 1008 &nbsp;&nbsp;&nbsp; (iv) 2028</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) 252:</strong><br>
            Prime factorisation: 252 = 2 × 2 × 3 × 3 × 7 = (2 × 2) × (3 × 3) × 7.<br>
            The prime factor 7 has no pair.<br>
            Hence, 252 must be multiplied by <strong>7</strong>.<br>
            New number = 252 × 7 = 1764.<br>
            Square root = √(2² × 3² × 7²) = 2 × 3 × 7 = <strong>42</strong>.<br><br>

            • <strong>(ii) 180:</strong><br>
            Prime factorisation: 180 = 2 × 2 × 3 × 3 × 5 = (2 × 2) × (3 × 3) × 5.<br>
            Factor 5 is unpaired. Hence, smallest multiplier is <strong>5</strong>.<br>
            New number = 180 × 5 = 900.<br>
            Square root = √(2² × 3² × 5²) = 2 × 3 × 5 = <strong>30</strong>.<br><br>

            • <strong>(iii) 1008:</strong><br>
            Prime factorisation: 1008 = 2 × 2 × 2 × 2 × 3 × 3 × 7 = 2⁴ × 3² × 7.<br>
            Factor 7 is unpaired. Hence, smallest multiplier is <strong>7</strong>.<br>
            New number = 1008 × 7 = 7056.<br>
            Square root = √(2⁴ × 3² × 7²) = 2² × 3 × 7 = 4 × 3 × 7 = <strong>84</strong>.<br><br>

            • <strong>(iv) 2028:</strong><br>
            Prime factorisation: 2028 = 2 × 2 × 3 × 13 × 13 = 2² × 13² × 3.<br>
            Factor 3 is unpaired. Hence, smallest multiplier is <strong>3</strong>.<br>
            New number = 2028 × 3 = 6084.<br>
            Square root = √(2² × 13² × 3²) = 2 × 13 × 3 = <strong>78</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identifying unpaired factor for each</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Calculating new number and its square root</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c8m-ch1-q9">
    <div class="q-head" onclick="toggleQ('c8m-ch1-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">Find the square root of each of the following numbers by Long Division Method:<br>(i) 2304 &nbsp;&nbsp;&nbsp; (ii) 4489 &nbsp;&nbsp;&nbsp; (iii) 3481 &nbsp;&nbsp;&nbsp; (iv) 529 &nbsp;&nbsp;&nbsp; (v) 3249 &nbsp;&nbsp;&nbsp; (vi) 1369</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) 2304:</strong><br>
            Group periods: 23 and 04.<br>
            - Largest square ≤ 23 is 4² = 16. Quotient = 4, Remainder = 23 − 16 = 7.<br>
            - Bring down next period '04' to get 704. Double the quotient: 4 × 2 = 8.<br>
            - Trial divisor: 88 × 8 = 704. Remainder = 0.<br>
            Therefore, <strong>√2304 = 48</strong>.<br><br>

            • <strong>(ii) 4489:</strong><br>
            Periods: 44 and 89.<br>
            - 6² = 36 ≤ 44. Remainder = 8. Bring down 89 ⇒ 889.<br>
            - Double quotient = 12. 127 × 7 = 889. Remainder = 0.<br>
            Therefore, <strong>√4489 = 67</strong>.<br><br>

            • <strong>(iii) 3481:</strong><br>
            Periods: 34 and 81.<br>
            - 5² = 25 ≤ 34. Remainder = 9. Bring down 81 ⇒ 981.<br>
            - Double quotient = 10. 109 × 9 = 981. Remainder = 0.<br>
            Therefore, <strong>√3481 = 59</strong>.<br><br>

            • <strong>(iv) 529:</strong><br>
            Periods: 5 and 29.<br>
            - 2² = 4 ≤ 5. Remainder = 1. Bring down 29 ⇒ 129.<br>
            - Double quotient = 4. 43 × 3 = 129. Remainder = 0.<br>
            Therefore, <strong>√529 = 23</strong>.<br><br>

            • <strong>(v) 3249:</strong><br>
            Periods: 32 and 49.<br>
            - 5² = 25 ≤ 32. Remainder = 7. Bring down 49 ⇒ 749.<br>
            - Double quotient = 10. 107 × 7 = 749. Remainder = 0.<br>
            Therefore, <strong>√3249 = 57</strong>.<br><br>

            • <strong>(vi) 1369:</strong><br>
            Periods: 13 and 69.<br>
            - 3² = 9 ≤ 13. Remainder = 4. Bring down 69 ⇒ 469.<br>
            - Double quotient = 6. 67 × 7 = 469. Remainder = 0.<br>
            Therefore, <strong>√1369 = 37</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Grouping in periods and correct division algorithm</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">All 6 roots accurately found</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c8m-ch1-q10">
    <div class="q-head" onclick="toggleQ('c8m-ch1-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">Find the square root of the following decimal numbers:<br>(i) 2.56 &nbsp;&nbsp;&nbsp; (ii) 7.29 &nbsp;&nbsp;&nbsp; (iii) 51.84 &nbsp;&nbsp;&nbsp; (iv) 42.25 &nbsp;&nbsp;&nbsp; (v) 31.36</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) 2.56:</strong><br>
            Periods: 2 and .56.<br>
            1² = 1 ≤ 2. Remainder = 1. Decimal point placed in quotient. Bring down 56 ⇒ 156.<br>
            Double quotient = 2. 26 × 6 = 156. Remainder = 0.<br>
            Therefore, <strong>√2.56 = 1.6</strong>.<br><br>

            • <strong>(ii) 7.29:</strong><br>
            Periods: 7 and .29.<br>
            2² = 4 ≤ 7. Remainder = 3. Bring down 29 ⇒ 329.<br>
            Double quotient = 4. 47 × 7 = 329.<br>
            Therefore, <strong>√7.29 = 2.7</strong>.<br><br>

            • <strong>(iii) 51.84:</strong><br>
            Periods: 51 and .84.<br>
            7² = 49 ≤ 51. Remainder = 2. Bring down 84 ⇒ 284.<br>
            Double quotient = 14. 142 × 2 = 284.<br>
            Therefore, <strong>√51.84 = 7.2</strong>.<br><br>

            • <strong>(iv) 42.25:</strong><br>
            Periods: 42 and .25.<br>
            6² = 36 ≤ 42. Remainder = 6. Bring down 25 ⇒ 625.<br>
            Double quotient = 12. 125 × 5 = 625.<br>
            Therefore, <strong>√42.25 = 6.5</strong>.<br><br>

            • <strong>(v) 31.36:</strong><br>
            Periods: 31 and .36.<br>
            5² = 25 ≤ 31. Remainder = 6. Bring down 36 ⇒ 636.<br>
            Double quotient = 10. 106 × 6 = 636.<br>
            Therefore, <strong>√31.36 = 5.6</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Placement of decimal point in quotient and long division</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Accurate decimal roots</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q11 -->
  <div class="q-card" id="c8m-ch1-q11">
    <div class="q-head" onclick="toggleQ('c8m-ch1-q11')">
      <div class="q-num">Q11</div>
      <div class="q-text">Find the least number which must be subtracted from 4000 so as to get a perfect square. Also find the square root of the perfect square so obtained.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Apply long division on 4000:<br>
            - Grouping: 40 and 00.<br>
            - 6² = 36 ≤ 40. Remainder = 4.<br>
            - Bring down 00 ⇒ 400.<br>
            - Double 6 = 12. 123 × 3 = 369 ≤ 400 (as 124 × 4 = 496 &gt; 400).<br>
            - Remainder = 400 − 369 = <strong>31</strong>.<br><br>
            2. The remainder indicates that 4000 is greater than 63² by 31.<br>
            Therefore, the least number to be subtracted is <strong>31</strong>.<br><br>
            3. Required perfect square = 4000 − 31 = <strong>3969</strong>.<br>
            Square root: √3969 = <strong>63</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Long division and finding remainder 31</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Stating subtracted number 31 and √3969 = 63</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q12 -->
  <div class="q-card" id="c8m-ch1-q12">
    <div class="q-head" onclick="toggleQ('c8m-ch1-q12')">
      <div class="q-num">Q12</div>
      <div class="q-text">Find the least number which must be added to 1750 so as to get a perfect square. Also find the square root of the perfect square so obtained.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Long division on 1750:<br>
            - Periods: 17 and 50.<br>
            - 4² = 16 ≤ 17. Remainder = 1. Bring down 50 ⇒ 150.<br>
            - 81 × 1 = 81. Remainder = 69.<br>
            - Quotient = 41. Thus, 41² &lt; 1750 &lt; 42².<br><br>
            2. The next perfect square is 42²:<br>
            42² = 1764.<br><br>
            3. Number to be added = 1764 − 1750 = <strong>14</strong>.<br>
            The perfect square obtained = 1750 + 14 = <strong>1764</strong>.<br>
            Square root = √1764 = <strong>42</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Evaluating 41² &lt; 1750 and identifying 42² = 1764</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Difference 14 and square root 42</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q13 -->
  <div class="q-card" id="c8m-ch1-q13">
    <div class="q-head" onclick="toggleQ('c8m-ch1-q13')">
      <div class="q-num">Q13</div>
      <div class="q-text">Find the cube root of the following numbers by Prime Factorisation Method:<br>(i) 512 &nbsp;&nbsp;&nbsp; (ii) 1728 &nbsp;&nbsp;&nbsp; (iii) 13824 &nbsp;&nbsp;&nbsp; (iv) 46656 &nbsp;&nbsp;&nbsp; (v) 175616</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) 512:</strong><br>
            512 = 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = (2 × 2 × 2) × (2 × 2 × 2) × (2 × 2 × 2) = 2³ × 2³ × 2³.<br>
            ∛512 = 2 × 2 × 2 = <strong>8</strong>.<br><br>

            • <strong>(ii) 1728:</strong><br>
            1728 = 2⁶ × 3³ = (2 × 2 × 2) × (2 × 2 × 2) × (3 × 3 × 3).<br>
            ∛1728 = 2 × 2 × 3 = <strong>12</strong>.<br><br>

            • <strong>(iii) 13824:</strong><br>
            13824 = 2⁹ × 3³ = (2³)³ × 3³.<br>
            ∛13824 = 2 × 2 × 2 × 3 = <strong>24</strong>.<br><br>

            • <strong>(iv) 46656:</strong><br>
            46656 = 2⁶ × 3⁶ = (2³) × (2³) × (3³) × (3³).<br>
            ∛46656 = 2 × 2 × 3 × 3 = <strong>36</strong>.<br><br>

            • <strong>(v) 175616:</strong><br>
            175616 = 2⁹ × 7³.<br>
            ∛175616 = 2 × 2 × 2 × 7 = 8 × 7 = <strong>56</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Prime factor triplets decomposition</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Accurate cube roots (8, 12, 24, 36, 56)</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q14 -->
  <div class="q-card" id="c8m-ch1-q14">
    <div class="q-head" onclick="toggleQ('c8m-ch1-q14')">
      <div class="q-num">Q14</div>
      <div class="q-text">Find the cube root of 857375 through the Estimation Method without prime factorisation.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Form groups of three digits from the right:<br>
            First group (units group) = <strong>375</strong><br>
            Second group = <strong>857</strong><br><br>
            2. <strong>Determining the units digit:</strong><br>
            The first group is 375, ending in 5. Since only 5³ = 125 ends in 5, the units digit of the cube root must be <strong>5</strong>.<br><br>
            3. <strong>Determining the tens digit:</strong><br>
            Consider the second group: 857.<br>
            We know 9³ = 729 and 10³ = 1000.<br>
            Clearly, 729 &lt; 857 &lt; 1000, i.e., 9³ &lt; 857 &lt; 10³.<br>
            Taking the smaller integer, the tens digit is <strong>9</strong>.<br><br>
            Therefore, <strong>∛857375 = 95</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Grouping into 375 and 857 with units digit identification</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Tens digit by nearest lower cube and final answer 95</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q15 -->
  <div class="q-card" id="c8m-ch1-q15">
    <div class="q-head" onclick="toggleQ('c8m-ch1-q15')">
      <div class="q-num">Q15</div>
      <div class="q-text">Parikshit makes a cuboid of plasticine of sides 5 cm, 2 cm, 5 cm. How many such cuboids will he need to form a cube?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Volume of one cuboid = 5 × 2 × 5 = 50 cm³.<br>
            In prime factor form: <strong>5 × 2 × 5 = 2¹ × 5²</strong>.<br><br>
            2. For these cuboids to combine and form a perfect cube, the prime factors of the total volume must appear in triplets (groups of 3):<br>
            - Factor 2 appears 1 time (needs two more 2s: 2 × 2 = 4).<br>
            - Factor 5 appears 2 times (needs one more 5).<br><br>
            3. Therefore, to make the volume a perfect cube, we must multiply by:<br>
            <code>2 × 2 × 5 = 20</code>.<br><br>
            Hence, Parikshit requires <strong>20 such cuboids</strong> to form a cube.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Writing volume in prime factors 2¹ × 5²</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Finding missing factors 2 × 2 × 5 = 20 cuboids</span><span class="marking-marks">1 Mark</span></div>
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
      <strong>Context — Community Hall Renovation &amp; Cube Packaging:</strong> An architect is renovating a municipal hall whose floor is in the shape of a perfect square with an area of 5929 m². The flooring is to be paved with square marble tiles of side 1 m.<br>
      Additionally, a warehouse supplies cubic storage cartons each of volume 1728 cm³ that are to be packed inside a large master cubic container of side 72 cm.<br><br>
      (a) Find the length of each side of the square community hall.<br>
      (b) If decorative border tiles are placed along the entire boundary (perimeter) of the hall, find how many linear meters of border are needed.<br>
      (c) Calculate the edge length of each cubic storage carton and determine how many cartons fit exactly into the master container.
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Side length of the square community hall:</strong><br>
        Area = side² = 5929 m² ⇒ side = √5929.<br>
        Using Long Division on 5929:<br>
        7² = 49 ≤ 59, remainder = 10. Bring down 29 ⇒ 1029.<br>
        Double 7 = 14. 147 × 7 = 1029. Remainder = 0.<br>
        Therefore, side = <strong>77 meters</strong>.</p>

        <p><strong>(b) Boundary (Perimeter) of the hall:</strong><br>
        Perimeter = 4 × side = 4 × 77 = <strong>308 meters</strong> of decorative border needed.</p>

        <p><strong>(c) Edge length of carton &amp; Master packaging count:</strong><br>
        - Edge of one small carton = ∛1728 = ∛(12³) = <strong>12 cm</strong>.<br>
        - Master cube edge = 72 cm.<br>
        - Number of cartons along each dimension = 72 ÷ 12 = 6 cartons.<br>
        - Total cartons packed = 6 × 6 × 6 = 6³ = <strong>216 cartons</strong>.<br>
        (Verification: Master volume = 72³ = 373,248 cm³. Total = 373,248 ÷ 1728 = 216).</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch1.html'), ch1Html, 'utf8');
console.log('Chapter 1 successfully written with 15 questions + CBQ.');
