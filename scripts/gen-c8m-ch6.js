const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c8m');

const ch6Html = `<section class="chapter-section" id="ch6">
  <div class="chapter-header">
    <div class="ch-badge">6</div>
    <div class="chapter-header-info">
      <h2>Chapter 6: We Distribute, Yet Things Multiply</h2>
      <p>NCERT Ganita Prakash (Class 8 Part 1) — Multiplication of Algebraic Expressions, Distributive Law &amp; Standard Algebraic Identities | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Algebraic Laws &amp; Standard Identities</div>
    <ul class="concept-list">
      <li><strong>Distributive Property of Multiplication:</strong> For any terms <em>a, b, c</em>:
        <ul>
          <li><code>a(b + c) = ab + ac</code></li>
          <li><code>a(b − c) = ab − ac</code></li>
          <li>Extends to binomial products: <code>(a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd</code></li>
        </ul>
      </li>
      <li><strong>Standard Algebraic Identities:</strong>
        <ul>
          <li><strong>Identity I (Square of a Binomial Sum):</strong> <code>(a + b)² = a² + 2ab + b²</code></li>
          <li><strong>Identity II (Square of a Binomial Difference):</strong> <code>(a − b)² = a² − 2ab + b²</code></li>
          <li><strong>Identity III (Difference of Two Squares):</strong> <code>(a + b)(a − b) = a² − b²</code></li>
          <li><strong>Identity IV (Product of Two Binomials):</strong> <code>(x + a)(x + b) = x² + (a + b)x + ab</code></li>
        </ul>
      </li>
      <li><strong>Geometric Interpretation of Identities:</strong>
        <ul>
          <li>The algebraic identity <code>(a + b)² = a² + 2ab + b²</code> corresponds to dividing a square of side <em>(a + b)</em> into four geometric regions: a square of area <em>a²</em>, two rectangles of area <em>ab</em>, and a small square of area <em>b²</em>.</li>
          <li>Similarly, <code>a² − b² = (a + b)(a − b)</code> represents the area remaining when a square of side <em>b</em> is cut out from a larger square of side <em>a</em>.</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- SVG Diagram 6: Geometric Decomposition of (a+b)² -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Geometric Dissection Proof of (a + b)² = a² + 2ab + b²</text>
      
      <!-- Big Square Canvas -->
      <g transform="translate(170, 40)">
        <!-- a x a Square (Top Left) -->
        <rect x="0" y="0" width="130" height="130" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
        <text x="65" y="72" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#1e40af" text-anchor="middle">a²</text>
        <text x="65" y="90" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#2563eb" text-anchor="middle">Area = a × a</text>

        <!-- a x b Rectangle (Top Right) -->
        <rect x="130" y="0" width="60" height="130" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="160" y="72" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#92400e" text-anchor="middle">ab</text>

        <!-- b x a Rectangle (Bottom Left) -->
        <rect x="0" y="130" width="130" height="40" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="65" y="155" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#92400e" text-anchor="middle">ab</text>

        <!-- b x b Square (Bottom Right) -->
        <rect x="130" y="130" width="60" height="40" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
        <text x="160" y="155" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#15803d" text-anchor="middle">b²</text>

        <!-- Dimension Labels -->
        <text x="65" y="-6" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">a</text>
        <text x="160" y="-6" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">b</text>
        <text x="-12" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">a</text>
        <text x="-12" y="155" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">b</text>
      </g>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 6.1: Visualizing Total Area (a + b)² as Sum of Component Areas: a² + ab + ab + b²</div>
  </div>

  <div class="ex-div">NCERT Ganita Prakash: Figure It Out &amp; Comprehensive Exercises (100% Questions Solved)</div>

  <!-- Q1 -->
  <div class="q-card" id="c8m-ch6-q1">
    <div class="q-head" onclick="toggleQ('c8m-ch6-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Multiply the following algebraic expressions:<br>(i) 4p and (q + r)<br>(ii) ab and (a − b)<br>(iii) (a + b) and 7a²b²<br>(iv) (a² − 9) and 4a<br>(v) (p + q + r) and 0</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Distributive Law:</strong> <code>x(y + z) = xy + xz</code>.</p>
          <div class="step">
            • <strong>(i) 4p × (q + r):</strong><br>
            = 4p × q + 4p × r = <strong>4pq + 4pr</strong>.<br><br>

            • <strong>(ii) ab × (a − b):</strong><br>
            = ab × a − ab × b = <strong>a²b − ab²</strong>.<br><br>

            • <strong>(iii) (a + b) × 7a²b²:</strong><br>
            = a × 7a²b² + b × 7a²b² = <strong>7a³b² + 7a²b³</strong>.<br><br>

            • <strong>(iv) (a² − 9) × 4a:</strong><br>
            = a² × 4a − 9 × 4a = <strong>4a³ − 36a</strong>.<br><br>

            • <strong>(v) (p + q + r) × 0:</strong><br>
            Any polynomial multiplied by 0 equals <strong>0</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Applying distributive law correctly</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">All 5 expressions accurately expanded</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c8m-ch6-q2">
    <div class="q-head" onclick="toggleQ('c8m-ch6-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Multiply the binomials:<br>(i) (2x + 5) and (4x − 3)<br>(ii) (y − 8) and (3y − 4)<br>(iii) (2.5l − 0.5m) and (2.5l + 0.5m)<br>(iv) (a + 3b) and (x + 5)</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) (2x + 5)(4x − 3):</strong><br>
            = 2x(4x − 3) + 5(4x − 3)<br>
            = 8x² − 6x + 20x − 15<br>
            = <strong>8x² + 14x − 15</strong>.<br><br>

            • <strong>(ii) (y − 8)(3y − 4):</strong><br>
            = y(3y − 4) − 8(3y − 4)<br>
            = 3y² − 4y − 24y + 32<br>
            = <strong>3y² − 28y + 32</strong>.<br><br>

            • <strong>(iii) (2.5l − 0.5m)(2.5l + 0.5m):</strong><br>
            Using Identity III: <code>(a − b)(a + b) = a² − b²</code>:<br>
            = (2.5l)² − (0.5m)²<br>
            = <strong>6.25l² − 0.25m²</strong>.<br><br>

            • <strong>(iv) (a + 3b)(x + 5):</strong><br>
            = a(x + 5) + 3b(x + 5)<br>
            = <strong>ax + 5a + 3bx + 15b</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Expansion steps showing individual terms</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Collecting like terms and final simplified polynomials</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c8m-ch6-q3">
    <div class="q-head" onclick="toggleQ('c8m-ch6-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Simplify the following algebraic expressions:<br>(i) (x² − 5)(x + 5) + 25<br>(ii) (a² + 5)(b³ + 3) + 5<br>(iii) (t + s²)(t² − s)</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) (x² − 5)(x + 5) + 25:</strong><br>
            = x²(x + 5) − 5(x + 5) + 25<br>
            = x³ + 5x² − 5x − 25 + 25<br>
            = <strong>x³ + 5x² − 5x</strong>.<br><br>

            • <strong>(ii) (a² + 5)(b³ + 3) + 5:</strong><br>
            = a²(b³ + 3) + 5(b³ + 3) + 5<br>
            = a²b³ + 3a² + 5b³ + 15 + 5<br>
            = <strong>a²b³ + 3a² + 5b³ + 20</strong>.<br><br>

            • <strong>(iii) (t + s²)(t² − s):</strong><br>
            = t(t² − s) + s²(t² − s)<br>
            = <strong>t³ − st + s²t² − s³</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Binomial distribution shown</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Simplification and constant cancellation</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c8m-ch6-q4">
    <div class="q-head" onclick="toggleQ('c8m-ch6-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Use a suitable identity to get each of the following products:<br>(i) (x + 3)(x + 3)<br>(ii) (2y + 5)(2y + 5)<br>(iii) (2a − 7)(2a − 7)<br>(iv) (3a − 1/2)(3a − 1/2)<br>(v) (1.1m − 0.4)(1.1m + 0.4)</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) (x + 3)(x + 3) = (x + 3)²:</strong><br>
            Using <code>(a + b)² = a² + 2ab + b²</code>:<br>
            = x² + 2(x)(3) + 3² = <strong>x² + 6x + 9</strong>.<br><br>

            • <strong>(ii) (2y + 5)(2y + 5) = (2y + 5)²:</strong><br>
            = (2y)² + 2(2y)(5) + 5² = <strong>4y² + 20y + 25</strong>.<br><br>

            • <strong>(iii) (2a − 7)(2a − 7) = (2a − 7)²:</strong><br>
            Using <code>(a − b)² = a² − 2ab + b²</code>:<br>
            = (2a)² − 2(2a)(7) + 7² = <strong>4a² − 28a + 49</strong>.<br><br>

            • <strong>(iv) (3a − 1/2)²:</strong><br>
            = (3a)² − 2(3a)(1/2) + (1/2)² = <strong>9a² − 3a + 1/4</strong>.<br><br>

            • <strong>(v) (1.1m − 0.4)(1.1m + 0.4):</strong><br>
            Using <code>(a − b)(a + b) = a² − b²</code>:<br>
            = (1.1m)² − (0.4)² = <strong>1.21m² − 0.16</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identification of correct identity for each</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Evaluations: x² + 6x + 9, 4y² + 20y + 25, etc.</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c8m-ch6-q5">
    <div class="q-head" onclick="toggleQ('c8m-ch6-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Use the identity (x + a)(x + b) = x² + (a + b)x + ab to find the following products:<br>(i) (x + 3)(x + 7)<br>(ii) (4x + 5)(4x + 1)<br>(iii) (4x − 5)(4x − 1)<br>(iv) (4x + 5)(4x − 1)<br>(v) (2x + 5y)(2x + 3y)</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) (x + 3)(x + 7):</strong><br>
            Here a = 3, b = 7.<br>
            = x² + (3 + 7)x + (3 × 7) = <strong>x² + 10x + 21</strong>.<br><br>

            • <strong>(ii) (4x + 5)(4x + 1):</strong><br>
            Here variable is (4x), a = 5, b = 1.<br>
            = (4x)² + (5 + 1)(4x) + (5 × 1) = 16x² + 6(4x) + 5 = <strong>16x² + 24x + 5</strong>.<br><br>

            • <strong>(iii) (4x − 5)(4x − 1):</strong><br>
            Here variable is (4x), a = −5, b = −1.<br>
            = (4x)² + ((−5) + (−1))(4x) + ((−5) × (−1)) = 16x² − 6(4x) + 5 = <strong>16x² − 24x + 5</strong>.<br><br>

            • <strong>(iv) (4x + 5)(4x − 1):</strong><br>
            Here variable is (4x), a = 5, b = −1.<br>
            = (4x)² + (5 + (−1))(4x) + (5 × (−1)) = 16x² + 4(4x) − 5 = <strong>16x² + 16x − 5</strong>.<br><br>

            • <strong>(v) (2x + 5y)(2x + 3y):</strong><br>
            Here variable is (2x), a = 5y, b = 3y.<br>
            = (2x)² + (5y + 3y)(2x) + (5y × 3y) = 4x² + (8y)(2x) + 15y² = <strong>4x² + 16xy + 15y²</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Applying formula: (x+a)(x+b) = x² + (a+b)x + ab</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Careful substitution of negative terms and final polynomials</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c8m-ch6-q6">
    <div class="q-head" onclick="toggleQ('c8m-ch6-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Evaluate the following numerical squares using algebraic identities:<br>(i) 71² &nbsp;&nbsp;&nbsp; (ii) 99² &nbsp;&nbsp;&nbsp; (iii) 102² &nbsp;&nbsp;&nbsp; (iv) 998² &nbsp;&nbsp;&nbsp; (v) 5.2²</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) 71² = (70 + 1)²:</strong><br>
            = 70² + 2(70)(1) + 1² = 4900 + 140 + 1 = <strong>5041</strong>.<br><br>

            • <strong>(ii) 99² = (100 − 1)²:</strong><br>
            = 100² − 2(100)(1) + 1² = 10000 − 200 + 1 = <strong>9801</strong>.<br><br>

            • <strong>(iii) 102² = (100 + 2)²:</strong><br>
            = 100² + 2(100)(2) + 2² = 10000 + 400 + 4 = <strong>10404</strong>.<br><br>

            • <strong>(iv) 998² = (1000 − 2)²:</strong><br>
            = 1000² − 2(1000)(2) + 2² = 1000000 − 4000 + 4 = <strong>996004</strong>.<br><br>

            • <strong>(v) 5.2² = (5 + 0.2)²:</strong><br>
            = 5² + 2(5)(0.2) + (0.2)² = 25 + 2 + 0.04 = <strong>27.04</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Splitting into (base ± offset)²</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correct evaluation of all 5 numerical values</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c8m-ch6-q7">
    <div class="q-head" onclick="toggleQ('c8m-ch6-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Using Identity III: a² − b² = (a + b)(a − b), find the values of:<br>(i) 51² − 49²<br>(ii) (1.02)² − (0.98)²<br>(iii) 153² − 147²<br>(iv) 12.1² − 7.9²</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) 51² − 49²:</strong><br>
            = (51 + 49)(51 − 49) = 100 × 2 = <strong>200</strong>.<br><br>

            • <strong>(ii) (1.02)² − (0.98)²:</strong><br>
            = (1.02 + 0.98)(1.02 − 0.98) = 2.00 × 0.04 = <strong>0.08</strong>.<br><br>

            • <strong>(iii) 153² − 147²:</strong><br>
            = (153 + 147)(153 − 147) = 300 × 6 = <strong>1800</strong>.<br><br>

            • <strong>(iv) 12.1² − 7.9²:</strong><br>
            = (12.1 + 7.9)(12.1 − 7.9) = 20.0 × 4.2 = <strong>84</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Applying (a + b)(a − b)</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correct values: 200, 0.08, 1800, 84</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c8m-ch6-q8">
    <div class="q-head" onclick="toggleQ('c8m-ch6-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">Using the identity (x + a)(x + b) = x² + (a + b)x + ab, calculate:<br>(i) 103 × 104<br>(ii) 5.1 × 5.2<br>(iii) 103 × 98<br>(iv) 9.7 × 9.8</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) 103 × 104 = (100 + 3)(100 + 4):</strong><br>
            = 100² + (3 + 4)(100) + (3 × 4) = 10000 + 700 + 12 = <strong>10712</strong>.<br><br>

            • <strong>(ii) 5.1 × 5.2 = (5 + 0.1)(5 + 0.2):</strong><br>
            = 5² + (0.1 + 0.2)(5) + (0.1 × 0.2) = 25 + (0.3 × 5) + 0.02 = 25 + 1.5 + 0.02 = <strong>26.52</strong>.<br><br>

            • <strong>(iii) 103 × 98 = (100 + 3)(100 − 2):</strong><br>
            = 100² + (3 − 2)(100) + (3 × (−2)) = 10000 + 100 − 6 = <strong>10094</strong>.<br><br>

            • <strong>(iv) 9.7 × 9.8 = (10 − 0.3)(10 − 0.2):</strong><br>
            = 10² + ((−0.3) + (−0.2))(10) + ((−0.3) × (−0.2)) = 100 − 5 + 0.06 = <strong>95.06</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Decomposition using base x</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Evaluations: 10712, 26.52, 10094, 95.06</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c8m-ch6-q9">
    <div class="q-head" onclick="toggleQ('c8m-ch6-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">Show that:<br>(i) (3x + 7)² − 84x = (3x − 7)²<br>(ii) (9p − 5q)² + 180pq = (9p + 5q)²<br>(iii) (4/3 m − 3/4 n)² + 2mn = 16/9 m² + 9/16 n²</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) LHS = (3x + 7)² − 84x:</strong><br>
            = (3x)² + 2(3x)(7) + 7² − 84x<br>
            = 9x² + 42x + 49 − 84x<br>
            = 9x² − 42x + 49<br>
            RHS = (3x − 7)² = (3x)² − 2(3x)(7) + 7² = 9x² − 42x + 49.<br>
            Since LHS = RHS, Hence Proved.<br><br>

            • <strong>(ii) LHS = (9p − 5q)² + 180pq:</strong><br>
            = 81p² − 90pq + 25q² + 180pq<br>
            = 81p² + 90pq + 25q²<br>
            RHS = (9p + 5q)² = (9p)² + 2(9p)(5q) + (5q)² = 81p² + 90pq + 25q².<br>
            Since LHS = RHS, Hence Proved.<br><br>

            • <strong>(iii) LHS = (4/3 m − 3/4 n)² + 2mn:</strong><br>
            = (4/3 m)² − 2(4/3 m)(3/4 n) + (3/4 n)² + 2mn<br>
            = 16/9 m² − 2mn + 9/16 n² + 2mn<br>
            = 16/9 m² + 9/16 n² = RHS. Hence Proved.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">LHS algebraic expansion showing middle term adjustments</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Equating to RHS for all three proofs</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c8m-ch6-q10">
    <div class="q-head" onclick="toggleQ('c8m-ch6-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">If x + 1/x = 5, find the values of:<br>(i) x² + 1/x² &nbsp;&nbsp;&nbsp; (ii) x⁴ + 1/x⁴</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) Finding x² + 1/x²:</strong><br>
            Given <code>x + 1/x = 5</code>.<br>
            Squaring both sides:<br>
            (x + 1/x)² = 5²<br>
            x² + 2(x)(1/x) + (1/x)² = 25<br>
            x² + 2 + 1/x² = 25<br>
            x² + 1/x² = 25 − 2 = <strong>23</strong>.<br><br>

            • <strong>(ii) Finding x⁴ + 1/x⁴:</strong><br>
            Squaring the result obtained in (i):<br>
            (x² + 1/x²)² = 23²<br>
            (x²)² + 2(x²)(1/x²) + (1/x²)² = 529<br>
            x⁴ + 2 + 1/x⁴ = 529<br>
            x⁴ + 1/x⁴ = 529 − 2 = <strong>527</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Squaring x + 1/x and finding x² + 1/x² = 23</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Repeated squaring to get x⁴ + 1/x⁴ = 527</span><span class="marking-marks">1 Mark</span></div>
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
      <strong>Context — Landscape Architecture &amp; Garden Expansion:</strong> A landscape designer has a square botanical lawn of side <code>x</code> meters. The municipal corporation requests an expansion by adding a uniform walkway of width <code>3</code> meters around all four sides of the lawn.<br><br>
      (a) Express the area of the original lawn in terms of x.<br>
      (b) Express the total side length of the expanded lawn including the walkway, and write an algebraic expression for the total expanded area in expanded standard form using Identity I.<br>
      (c) Calculate the area of the walkway alone in terms of x, and determine the exact walkway area if the original lawn side is x = 20 meters.
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Area of original square lawn:</strong><br>
        Side = x meters.<br>
        Original Area = <strong>x² sq meters</strong>.</p>

        <p><strong>(b) Expanded lawn dimensions and total area:</strong><br>
        A walkway of width 3 meters is added on both ends along each dimension:<br>
        New side length = x + 3 + 3 = <strong>(x + 6) meters</strong>.<br>
        Total expanded area = (x + 6)².<br>
        Using Identity I: (a + b)² = a² + 2ab + b² where a = x, b = 6:<br>
        Total Area = x² + 2(x)(6) + 6² = <strong>x² + 12x + 36 sq meters</strong>.</p>

        <p><strong>(c) Area of the walkway alone &amp; Numerical evaluation:</strong><br>
        Walkway Area = (Total expanded area) − (Original lawn area)<br>
        = (x² + 12x + 36) − x² = <strong>(12x + 36) sq meters</strong>.<br><br>
        For x = 20 meters:<br>
        Walkway Area = 12(20) + 36 = 240 + 36 = <strong>276 sq meters</strong>.<br>
        (Verification: Total area = (20 + 6)² = 26² = 676. Original area = 20² = 400. Walkway = 676 − 400 = 276 m²).</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch6.html'), ch6Html, 'utf8');
console.log('Chapter 6 successfully written with 10 questions + CBQ.');
