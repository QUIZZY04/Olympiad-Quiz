const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6m');

// CHAPTER 5: Prime Time
const ch5Html = `<section class="chapter-section" id="ch5">
  <div class="chapter-header">
    <div class="ch-badge">5</div>
    <div class="chapter-header-info">
      <h2>Chapter 5: Prime Time</h2>
      <p>NCERT Ganita Prakash (Class 6) — Factors, Multiples, Prime &amp; Composite Numbers, Divisibility Rules, Prime Factor Tree, HCF &amp; LCM | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Number Theory &amp; Divisibility Rules</div>
    <ul class="concept-list">
      <li><strong>Factors &amp; Multiples:</strong> A factor of a number is an exact divisor of that number. A multiple is obtained by multiplying the number by integers.</li>
      <li><strong>Prime &amp; Composite Numbers:</strong> A prime number has exactly two distinct factors: 1 and itself (e.g., $2, 3, 5, 7, 11$). 2 is the only even prime. 1 is neither prime nor composite.</li>
      <li><strong>Divisibility Tests:</strong>
        <ul>
          <li><em>By 3 &amp; 9:</em> Sum of digits is divisible by 3 (or 9).</li>
          <li><em>By 4 &amp; 8:</em> Number formed by last two digits is divisible by 4 (last three digits for 8).</li>
          <li><em>By 6:</em> Divisible by both 2 and 3.</li>
          <li><em>By 11:</em> Difference between sum of odd-placed digits and even-placed digits is 0 or divisible by 11.</li>
        </ul>
      </li>
      <li><strong>HCF &amp; LCM:</strong> Highest Common Factor (HCF) is the greatest factor common to two or more numbers. Lowest Common Multiple (LCM) is the smallest positive multiple common to them.</li>
    </ul>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 500px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 440 200" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="220" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Prime Factor Tree for 72 = 2³ × 3²</text>
      <!-- Root 72 -->
      <rect x="195" y="35" width="50" height="28" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" rx="6"/>
      <text x="220" y="54" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0369a1" text-anchor="middle">72</text>
      <!-- Branch to 8 and 9 -->
      <line x1="205" y1="63" x2="130" y2="85" stroke="#64748b" stroke-width="1.8"/>
      <line x1="235" y1="63" x2="310" y2="85" stroke="#64748b" stroke-width="1.8"/>
      <!-- Node 8 -->
      <rect x="105" y="85" width="50" height="26" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" rx="5"/>
      <text x="130" y="103" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155" text-anchor="middle">8</text>
      <!-- Node 9 -->
      <rect x="285" y="85" width="50" height="26" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" rx="5"/>
      <text x="310" y="103" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155" text-anchor="middle">9</text>
      <!-- Sub-branches of 8 -> 2 and 4 -->
      <line x1="120" y1="111" x2="70" y2="135" stroke="#64748b" stroke-width="1.8"/>
      <line x1="140" y1="111" x2="155" y2="135" stroke="#64748b" stroke-width="1.8"/>
      <!-- Prime Leaf 2 -->
      <circle cx="70" cy="147" r="14" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="70" y="152" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">2</text>
      <!-- Node 4 -->
      <rect x="135" y="135" width="40" height="24" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" rx="4"/>
      <text x="155" y="151" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155" text-anchor="middle">4</text>
      <!-- Sub-branches of 4 -> 2 and 2 -->
      <line x1="145" y1="159" x2="125" y2="175" stroke="#64748b" stroke-width="1.8"/>
      <line x1="165" y1="159" x2="185" y2="175" stroke="#64748b" stroke-width="1.8"/>
      <circle cx="125" cy="184" r="11" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="125" y="188" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d" text-anchor="middle">2</text>
      <circle cx="185" cy="184" r="11" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="185" y="188" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d" text-anchor="middle">2</text>
      <!-- Sub-branches of 9 -> 3 and 3 -->
      <line x1="300" y1="111" x2="275" y2="135" stroke="#64748b" stroke-width="1.8"/>
      <line x1="320" y1="111" x2="345" y2="135" stroke="#64748b" stroke-width="1.8"/>
      <circle cx="275" cy="147" r="14" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="275" y="152" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">3</text>
      <circle cx="345" cy="147" r="14" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="345" y="152" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">3</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 5.1: Prime Factor Tree for 72 Showing Complete Decomposition into Primes</div>
  </div>

  <div class="ex-div">NCERT Exercise 5.1: Divisibility Tests &amp; Factorization</div>

  <div class="q-card" id="c6m-ch5-q1">
    <div class="q-head" onclick="toggleQ('c6m-ch5-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Using divisibility tests, determine whether the number $70169308$ is divisible by:<br>
      (a) 4 &nbsp;&nbsp; (b) 6 &nbsp;&nbsp; (c) 11</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Test for Divisibility by 4:</strong><br>
            A number is divisible by 4 if the number formed by its last two digits is divisible by 4.<br>
            Last two digits $= 08$.<br>
            Since $08 \div 4 = 2$ (remainder 0), <strong>Yes, $70169308$ is divisible by 4</strong>.
          </div>
          <div class="step">
            <strong>(b) Test for Divisibility by 6:</strong><br>
            A number is divisible by 6 if it is divisible by both 2 and 3.<br>
            - Last digit is 8 (even) $\implies$ Divisible by 2.<br>
            - Sum of digits $= 7 + 0 + 1 + 6 + 9 + 3 + 0 + 8 = 34$.<br>
            Since 34 is not divisible by 3 ($34 = 3 \times 11 + 1$), the number is not divisible by 3.<br>
            Therefore, <strong>No, $70169308$ is NOT divisible by 6</strong>.
          </div>
          <div class="step">
            <strong>(c) Test for Divisibility by 11:</strong><br>
            Number $= 70169308$.<br>
            Sum of digits in odd places (from right): $8 + 3 + 6 + 0 = 17$.<br>
            Sum of digits in even places (from right): $0 + 9 + 1 + 7 = 17$.<br>
            Difference $= 17 - 17 = 0$.<br>
            Since the difference is 0, <strong>Yes, $70169308$ is divisible by 11</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (a): Checking last two digits (08) and concluding divisible by 4</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (b): Testing for 2 and 3 (sum = 34) and concluding NOT divisible by 6</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (c): Finding difference of alternate digit sums (17 - 17 = 0) and confirming divisibility by 11</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch5-q2">
    <div class="q-head" onclick="toggleQ('c6m-ch5-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Find the HCF of $24, 36,$ and $60$ by prime factorisation method.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Step 1: Prime Factorisation of Each Number:</strong><br>
            $$24 = 2 \times 2 \times 2 \times 3 = 2^3 \times 3^1$$
            $$36 = 2 \times 2 \times 3 \times 3 = 2^2 \times 3^2$$
            $$60 = 2 \times 2 \times 3 \times 5 = 2^2 \times 3^1 \times 5^1$$
          </div>
          <div class="step">
            <strong>Step 2: Identifying Common Prime Factors:</strong><br>
            To find the HCF, take the lowest power of each common prime factor:<br>
            - Lowest power of 2 $= 2^2 = 4$<br>
            - Lowest power of 3 $= 3^1 = 3$<br>
            $$\text{HCF}(24, 36, 60) = 2^2 \times 3^1 = 4 \times 3 = \mathbf{12}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct prime factorisation of 24, 36, 60</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Selecting common powers and concluding HCF = 12</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch5-q3">
    <div class="q-head" onclick="toggleQ('c6m-ch5-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Three bells toll together at intervals of $9, 12,$ and $15$ minutes respectively. If they toll together now, after how many hours will they toll together next?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><em>Concept:</em> The bells toll together at the common multiple of their time intervals. The earliest next occurrence is given by the <strong>Lowest Common Multiple (LCM)</strong> of $9, 12,$ and $15$.</p>
          <div class="step">
            <strong>Step 1: Prime Factorisation:</strong><br>
            $$9 = 3^2$$
            $$12 = 2^2 \times 3^1$$
            $$15 = 3^1 \times 5^1$$
          </div>
          <div class="step">
            <strong>Step 2: Calculating LCM:</strong><br>
            Take the highest power of each involved prime:<br>
            $$\text{LCM}(9, 12, 15) = 2^2 \times 3^2 \times 5^1 = 4 \times 9 \times 5 = \mathbf{180\text{ minutes}}$$
          </div>
          <div class="step">
            <strong>Step 3: Convert Minutes to Hours:</strong><br>
            $$\text{Time in hours} = \frac{180}{60} = \mathbf{3\text{ hours}}$$
            Hence, the bells will toll together next after <strong>3 hours</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Recognizing need for LCM</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Calculating LCM(9, 12, 15) = 180 minutes</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Converting to hours (180/60 = 3 hours)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Question -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Industrial Application)</div>
    <div class="q-text"><strong>Case Study: Milk Dairy Tanker Distribution:</strong><br>
    Two milk tankers contain 850 litres and 680 litres of milk respectively. Find the maximum capacity of a container which can measure the milk of both tankers in an exact number of times.</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>Concept:</strong> The maximum capacity container required to measure both quantities completely is given by the <strong>Highest Common Factor (HCF)</strong> of 850 and 680.</p>
        <p><strong>Finding HCF(850, 680) by Prime Factorisation:</strong><br>
        $$850 = 2 \times 5^2 \times 17 = 2 \times 25 \times 17$$
        $$680 = 2^3 \times 5 \times 17 = 8 \times 5 \times 17$$
        Common prime factors $= 2^1 \times 5^1 \times 17^1 = 170$.<br>
        Therefore, $\text{HCF}(850, 680) = \mathbf{170\text{ litres}}$.<br>
        <strong>Answer:</strong> The maximum capacity of the measuring container is <strong>170 litres</strong>.</p>
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 6: Perimeter and Area
const ch6Html = `<section class="chapter-section" id="ch6">
  <div class="chapter-header">
    <div class="ch-badge">6</div>
    <div class="chapter-header-info">
      <h2>Chapter 6: Perimeter and Area</h2>
      <p>NCERT Ganita Prakash (Class 6) — Perimeter of Polygons, Rectangles &amp; Squares, Unit Grid Area Estimation, Standard Area Formulas &amp; Real-Life Word Problems | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Mensuration Formulas &amp; Definitions</div>
    <ul class="concept-list">
      <li><strong>Perimeter:</strong> The total length of the continuous boundary enclosing a closed plane figure.
        <ul>
          <li>Perimeter of a Rectangle $= 2 \times (\text{Length} + \text{Breadth}) = 2(l + b)$</li>
          <li>Perimeter of a Square $= 4 \times \text{Side} = 4s$</li>
          <li>Perimeter of a Regular $n$-sided Polygon $= n \times \text{Side length}$</li>
        </ul>
      </li>
      <li><strong>Area:</strong> The measure of the surface enclosed within the boundary of a closed plane figure.
        <ul>
          <li>Area of a Rectangle $= \text{Length} \times \text{Breadth} = l \times b$</li>
          <li>Area of a Square $= \text{Side} \times \text{Side} = s^2$</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 500px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 420 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
      <text x="210" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Compound L-Shaped Polygon: Perimeter &amp; Area Division</text>
      <!-- L-Shape Polygon -->
      <polygon points="80,50 240,50 240,110 320,110 320,180 80,180" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
      <!-- Dimension labels -->
      <!-- Top AB = 8 cm -->
      <text x="160" y="42" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1d4ed8" text-anchor="middle">AB = 8 cm</text>
      <!-- BC = 3 cm -->
      <text x="252" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1d4ed8">3 cm</text>
      <!-- CD = 4 cm -->
      <text x="280" y="104" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1d4ed8" text-anchor="middle">4 cm</text>
      <!-- DE = 3.5 cm -->
      <text x="332" y="145" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1d4ed8">3.5 cm</text>
      <!-- EF (Bottom) = 12 cm -->
      <text x="200" y="198" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1d4ed8" text-anchor="middle">EF = 12 cm</text>
      <!-- FA (Left) = 6.5 cm -->
      <text x="45" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1d4ed8">6.5 cm</text>
      <!-- Dashed partition line for area -->
      <line x1="240" y1="110" x2="240" y2="180" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
      <text x="160" y="125" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#dc2626">Region I</text>
      <text x="280" y="150" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#dc2626">Region II</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 6.1: Compound L-Shaped Polygon Partitioned into Rectangles for Area Calculation</div>
  </div>

  <div class="ex-div">NCERT Exercise 6.1: Perimeter Calculations &amp; Formulas</div>

  <div class="q-card" id="c6m-ch6-q1">
    <div class="q-head" onclick="toggleQ('c6m-ch6-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Find the perimeter of:<br>
      (a) A rectangle with length $= 150\text{ cm}$ and breadth $= 1\text{ m}$.<br>
      (b) A regular hexagon of side $8.5\text{ cm}$.<br>
      (c) An equilateral triangle of side $9.2\text{ cm}$.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Rectangle Perimeter:</strong><br>
            Convert units to same system: $l = 150\text{ cm}$, $b = 1\text{ m} = 100\text{ cm}$.<br>
            $$\text{Perimeter} = 2(l + b) = 2(150 + 100) = 2(250) = \mathbf{500\text{ cm}}\text{ (or } 5\text{ m)}$$
          </div>
          <div class="step">
            <strong>(b) Regular Hexagon:</strong><br>
            A regular hexagon has 6 equal sides.<br>
            $$\text{Perimeter} = 6 \times \text{side} = 6 \times 8.5\text{ cm} = \mathbf{51\text{ cm}}$$
          </div>
          <div class="step">
            <strong>(c) Equilateral Triangle:</strong><br>
            An equilateral triangle has 3 equal sides.<br>
            $$\text{Perimeter} = 3 \times \text{side} = 3 \times 9.2\text{ cm} = \mathbf{27.6\text{ cm}}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (a): Unit conversion + formula 2(l+b) = 500 cm</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (b): 6 × 8.5 = 51 cm</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (c): 3 × 9.2 = 27.6 cm</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch6-q2">
    <div class="q-head" onclick="toggleQ('c6m-ch6-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">A rectangular piece of land measures $0.7\text{ km}$ by $0.5\text{ km}$. Each side is to be fenced with 4 rows of wires. What is the total length of the wire needed in metres?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Step 1: Convert Dimensions to Metres:</strong><br>
            $l = 0.7\text{ km} = 0.7 \times 1000 = 700\text{ m}$<br>
            $b = 0.5\text{ km} = 0.5 \times 1000 = 500\text{ m}$
          </div>
          <div class="step">
            <strong>Step 2: Find Perimeter (Length of 1 Row of Wire):</strong><br>
            $$\text{Perimeter} = 2(l + b) = 2(700 + 500) = 2(1200) = 2400\text{ m}$$
          </div>
          <div class="step">
            <strong>Step 3: Total Wire for 4 Rows:</strong><br>
            $$\text{Total wire} = 4 \times \text{Perimeter} = 4 \times 2400 = \mathbf{9600\text{ m}}\text{ (or } 9.6\text{ km)}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Converting km to m (700 m, 500 m)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Perimeter calculation 2(700 + 500) = 2400 m</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Multiplying by 4 to get 9600 m</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch6-q3">
    <div class="q-head" onclick="toggleQ('c6m-ch6-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">A room floor is $5\text{ m}$ long and $4\text{ m}$ wide. A square carpet of side $3\text{ m}$ is laid on the floor. Find the area of the floor that is NOT carpeted.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Step 1: Calculate Total Area of Floor:</strong><br>
            Length of room $l = 5\text{ m}$, Breadth $b = 4\text{ m}$.<br>
            $$\text{Area of floor} = l \times b = 5 \times 4 = \mathbf{20\text{ m}^2}$$
          </div>
          <div class="step">
            <strong>Step 2: Calculate Area of Square Carpet:</strong><br>
            Side of square carpet $s = 3\text{ m}$.<br>
            $$\text{Area of carpet} = s^2 = 3 \times 3 = \mathbf{9\text{ m}^2}$$
          </div>
          <div class="step">
            <strong>Step 3: Calculate Uncarpeted Area:</strong><br>
            $$\text{Uncarpeted Area} = \text{Area of floor} - \text{Area of carpet}$$
            $$\text{Uncarpeted Area} = 20 - 9 = \mathbf{11\text{ m}^2}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Area of room floor: 5 × 4 = 20 m²</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Area of square carpet: 3 × 3 = 9 m²</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Subtraction: 20 - 9 = 11 m²</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Question -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Architecture &amp; Tiling)</div>
    <div class="q-text"><strong>Case Study: Flooring a Kitchen with Square Tiles:</strong><br>
    How many square tiles of side $20\text{ cm}$ each will be required to pave a kitchen floor measuring $4\text{ m}$ long and $3\text{ m}$ wide? If the cost of tiling is ₹$25$ per tile, find the total cost of paving the floor.</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>Step 1: Convert Floor Dimensions to cm:</strong><br>
        $l = 4\text{ m} = 400\text{ cm}$<br>
        $b = 3\text{ m} = 300\text{ cm}$<br>
        $$\text{Area of floor} = 400 \times 300 = 120,000\text{ cm}^2$$</p>

        <p><strong>Step 2: Area of One Square Tile:</strong><br>
        $$\text{Area of tile} = 20 \times 20 = 400\text{ cm}^2$$</p>

        <p><strong>Step 3: Number of Tiles Required:</strong><br>
        $$\text{Number of tiles} = \frac{\text{Area of floor}}{\text{Area of one tile}} = \frac{120,000}{400} = \mathbf{300\text{ tiles}}$$</p>

        <p><strong>Step 4: Total Cost:</strong><br>
        $$\text{Total Cost} = 300 \times ₹\,25 = \mathbf{₹\,7,500}$$</p>
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 7: Fractions
const ch7Html = `<section class="chapter-section" id="ch7">
  <div class="chapter-header">
    <div class="ch-badge">7</div>
    <div class="chapter-header-info">
      <h2>Chapter 7: Fractions</h2>
      <p>NCERT Ganita Prakash (Class 6) — Parts of a Whole, Number Line Representation, Proper/Improper/Mixed, Equivalent Fractions &amp; Fraction Arithmetic | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Fraction Concepts &amp; Properties</div>
    <ul class="concept-list">
      <li><strong>Fraction:</strong> A number representing a part of a whole. Written as $\frac{a}{b}$, where $a$ is the numerator and $b$ is the denominator ($b \ne 0$).</li>
      <li><strong>Types of Fractions:</strong>
        <ul>
          <li><em>Proper Fraction:</em> Numerator &lt; Denominator (e.g., $\frac{3}{5}$). Value &lt; 1.</li>
          <li><em>Improper Fraction:</em> Numerator $\ge$ Denominator (e.g., $\frac{7}{4}$). Value $\ge$ 1.</li>
          <li><em>Mixed Fraction:</em> Combination of a whole number and a proper fraction (e.g., $1\frac{3}{4}$).</li>
        </ul>
      </li>
      <li><strong>Equivalent Fractions:</strong> Fractions having identical value, obtained by multiplying or dividing numerator and denominator by the same non-zero integer: $\frac{a}{b} = \frac{a \times k}{b \times k}$.</li>
      <li><strong>Simplest Form:</strong> When numerator and denominator have no common factor other than 1 (HCF = 1).</li>
    </ul>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 540px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 500 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <text x="250" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Visual Fraction Models: Shaded Circle (3/4) &amp; Number Line (0 to 1)</text>
      
      <!-- Circle Fraction: 3/4 shaded -->
      <circle cx="90" cy="85" r="45" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <!-- Shaded 3 quadrants: 0 to 270 deg -->
      <path d="M 90,85 L 135,85 A 45,45 0 1,1 90,40 Z" fill="#3b82f6" fill-opacity="0.8" stroke="#2563eb" stroke-width="1.5"/>
      <line x1="45" y1="85" x2="135" y2="85" stroke="#334155" stroke-width="1.8"/>
      <line x1="90" y1="40" x2="90" y2="130" stroke="#334155" stroke-width="1.8"/>
      <text x="90" y="148" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">3/4 Shaded</text>

      <!-- Number Line from 0 to 1 with fourths -->
      <line x1="200" y1="85" x2="470" y2="85" stroke="#1e293b" stroke-width="2.5"/>
      <!-- Ticks -->
      <line x1="220" y1="75" x2="220" y2="95" stroke="#1e293b" stroke-width="2"/>
      <text x="220" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">0</text>

      <line x1="280" y1="78" x2="280" y2="92" stroke="#64748b" stroke-width="2"/>
      <text x="280" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">1/4</text>

      <line x1="340" y1="78" x2="340" y2="92" stroke="#64748b" stroke-width="2"/>
      <text x="340" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">2/4 (1/2)</text>

      <line x1="400" y1="78" x2="400" y2="92" stroke="#64748b" stroke-width="2"/>
      <circle cx="400" cy="85" r="5" fill="#dc2626"/>
      <text x="400" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">3/4</text>

      <line x1="460" y1="75" x2="460" y2="95" stroke="#1e293b" stroke-width="2"/>
      <text x="460" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">1 (4/4)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 7.1: Visualizing 3/4 through Area Model and Partitioned Number Line</div>
  </div>

  <div class="ex-div">NCERT Exercise 7.1: Equivalent Fractions &amp; Number Line</div>

  <div class="q-card" id="c6m-ch7-q1">
    <div class="q-head" onclick="toggleQ('c6m-ch7-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Find the equivalent fraction of $\frac{3}{5}$ having:<br>
      (a) Denominator 20<br>
      (b) Numerator 9<br>
      (c) Denominator 30</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><em>Rule:</em> To obtain an equivalent fraction, multiply both numerator and denominator by the same integer factor $k$.</p>
          <div class="step">
            <strong>(a) Denominator 20:</strong><br>
            To convert denominator 5 to 20, multiply by $4$ ($20 \div 5 = 4$):<br>
            $$\frac{3}{5} = \frac{3 \times 4}{5 \times 4} = \mathbf{\frac{12}{20}}$$
          </div>
          <div class="step">
            <strong>(b) Numerator 9:</strong><br>
            To convert numerator 3 to 9, multiply by $3$ ($9 \div 3 = 3$):<br>
            $$\frac{3}{5} = \frac{3 \times 3}{5 \times 3} = \mathbf{\frac{9}{15}}$$
          </div>
          <div class="step">
            <strong>(c) Denominator 30:</strong><br>
            To convert denominator 5 to 30, multiply by $6$ ($30 \div 5 = 6$):<br>
            $$\frac{3}{5} = \frac{3 \times 6}{5 \times 6} = \mathbf{\frac{18}{30}}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (a): 12/20</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (b): 9/15</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (c): 18/30</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch7-q2">
    <div class="q-head" onclick="toggleQ('c6m-ch7-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Compare the fractions using $&lt;, &gt;,$ or $=$:<br>
      (i) $\frac{3}{6} \text{ and } \frac{5}{6}$<br>
      (ii) $\frac{1}{7} \text{ and } \frac{1}{4}$<br>
      (iii) $\frac{4}{5} \text{ and } \frac{5}{6}$</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) $\frac{3}{6} \text{ and } \frac{5}{6}$:</strong><br>
            These are like fractions (same denominator 6). Compare numerators: $3 &lt; 5$.<br>
            $$\mathbf{\frac{3}{6} &lt; \frac{5}{6}}$$
          </div>
          <div class="step">
            <strong>(ii) $\frac{1}{7} \text{ and } \frac{1}{4}$:</strong><br>
            Fractions with the same numerator 1: The fraction with the smaller denominator is larger.<br>
            Since $7 &gt; 4$, $\frac{1}{7} &lt; \frac{1}{4}$.<br>
            $$\mathbf{\frac{1}{7} &lt; \frac{1}{4}}$$
          </div>
          <div class="step">
            <strong>(iii) $\frac{4}{5} \text{ and } \frac{5}{6}$:</strong><br>
            Convert unlike fractions to common denominator $\text{LCM}(5, 6) = 30$:<br>
            $\frac{4}{5} = \frac{4 \times 6}{5 \times 6} = \frac{24}{30}$<br>
            $\frac{5}{6} = \frac{5 \times 5}{6 \times 5} = \frac{25}{30}$<br>
            Since $24 &lt; 25$,<br>
            $$\mathbf{\frac{4}{5} &lt; \frac{5}{6}}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Like fraction comparison 3/6 &lt; 5/6</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Unit fraction comparison 1/7 &lt; 1/4</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (iii): Converting to common denominator 30 and concluding 4/5 &lt; 5/6</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch7-q3">
    <div class="q-head" onclick="toggleQ('c6m-ch7-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Evaluate the following fraction operations:<br>
      (a) $\frac{5}{8} + \frac{1}{8}$<br>
      (b) $\frac{5}{6} - \frac{1}{4}$<br>
      (c) $2\frac{1}{5} + 3\frac{1}{2}$</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Like Fractions Addition:</strong><br>
            $$\frac{5}{8} + \frac{1}{8} = \frac{5 + 1}{8} = \frac{6}{8} = \mathbf{\frac{3}{4}}\text{ (in simplest form)}$$
          </div>
          <div class="step">
            <strong>(b) Unlike Fractions Subtraction:</strong><br>
            $\text{LCM}(6, 4) = 12$.<br>
            $\frac{5}{6} = \frac{5 \times 2}{6 \times 2} = \frac{10}{12}$<br>
            $\frac{1}{4} = \frac{1 \times 3}{4 \times 3} = \frac{3}{12}$<br>
            $$\frac{10}{12} - \frac{3}{12} = \mathbf{\frac{7}{12}}$$
          </div>
          <div class="step">
            <strong>(c) Mixed Fractions Addition:</strong><br>
            Convert to improper fractions:<br>
            $2\frac{1}{5} = \frac{11}{5}$, &nbsp; $3\frac{1}{2} = \frac{7}{2}$.<br>
            $\text{LCM}(5, 2) = 10$.<br>
            $\frac{11}{5} = \frac{22}{10}$, &nbsp; $\frac{7}{2} = \frac{35}{10}$.<br>
            $$\text{Sum} = \frac{22 + 35}{10} = \frac{57}{10} = \mathbf{5\frac{7}{10}}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (a): 6/8 simplified to 3/4</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (b): Finding LCM 12 and evaluating 7/12</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (c): Mixed to improper + LCM 10 + answer 57/10 or 5 7/10</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Question -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Daily Life Measurement)</div>
    <div class="q-text"><strong>Case Study: Recipe Ingredient Fraction Balancing:</strong><br>
    Sarita bought $\frac{2}{5}\text{ metre}$ of ribbon and Lalita bought $\frac{3}{4}\text{ metre}$ of ribbon. What is the total length of ribbon they bought together? Who bought more ribbon, and by how much?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>Step 1: Total Length of Ribbon Bought:</strong><br>
        $$\text{Total} = \frac{2}{5} + \frac{3}{4}$$
        $\text{LCM}(5, 4) = 20$.<br>
        $\frac{2}{5} = \frac{8}{20}$, &nbsp; $\frac{3}{4} = \frac{15}{20}$.<br>
        $$\text{Total} = \frac{8 + 15}{20} = \frac{23}{20}\text{ m} = \mathbf{1\frac{3}{20}\text{ metre}}$$</p>

        <p><strong>Step 2: Comparison &amp; Difference:</strong><br>
        Since $\frac{15}{20} &gt; \frac{8}{20}$, <strong>Lalita bought more ribbon</strong>.<br>
        $$\text{Difference} = \frac{15}{20} - \frac{8}{20} = \mathbf{\frac{7}{20}\text{ metre}}.$$</p>
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 8: Playing with Constructions
const ch8Html = `<section class="chapter-section" id="ch8">
  <div class="chapter-header">
    <div class="ch-badge">8</div>
    <div class="chapter-header-info">
      <h2>Chapter 8: Playing with Constructions</h2>
      <p>NCERT Ganita Prakash (Class 6) — Compass &amp; Ruler Tools, Circle Constructions, Perpendicular Bisector of Line Segments &amp; Angle Constructions (60°, 90°, 120°) | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Geometric Construction Rules</div>
    <ul class="concept-list">
      <li><strong>Compass and Ruler Rules:</strong> The ruler is used only to draw straight lines and measure lengths. The compass is used to mark equal lengths and draw arcs/circles.</li>
      <li><strong>Circle of Radius $r$:</strong> Open the compass to distance $r$ on the ruler, place the needle at center $O$, and rotate complete $360^\circ$.</li>
      <li><strong>Perpendicular Bisector of $\overline{AB}$:</strong> With centers $A$ and $B$ and radius greater than $\frac{1}{2}AB$, draw intersecting arcs above and below $AB$. The line joining these intersection points bisects $AB$ at $90^\circ$.</li>
      <li><strong>Standard Angles using Compass:</strong>
        <ul>
          <li><em>$60^\circ$ Angle:</em> The first arc cut from the baseline with the same radius gives $60^\circ$.</li>
          <li><em>$120^\circ$ Angle:</em> The second arc cut from the $60^\circ$ point gives $120^\circ$.</li>
          <li><em>$90^\circ$ Angle:</em> Bisecting the angle between $60^\circ$ and $120^\circ$ gives $90^\circ$.</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 520px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 460 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
      <text x="230" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Step-by-Step Compass Construction: Perpendicular Bisector of AB</text>
      <!-- Line segment AB -->
      <line x1="80" y1="110" x2="380" y2="110" stroke="#1e293b" stroke-width="2.5"/>
      <circle cx="80" cy="110" r="4" fill="#1e293b"/>
      <text x="70" y="115" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">A</text>
      <circle cx="380" cy="110" r="4" fill="#1e293b"/>
      <text x="390" y="115" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">B</text>
      <!-- Midpoint M -->
      <circle cx="230" cy="110" r="4" fill="#059669"/>
      <text x="240" y="125" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#059669">M</text>
      <!-- Intersecting Arcs at Top P (230, 45) -->
      <path d="M 215,40 A 170,170 0 0,1 245,50" fill="none" stroke="#2563eb" stroke-width="2"/>
      <path d="M 245,40 A 170,170 0 0,0 215,50" fill="none" stroke="#dc2626" stroke-width="2"/>
      <circle cx="230" cy="45" r="4" fill="#7c3aed"/>
      <text x="240" y="45" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#7c3aed">P</text>
      <!-- Intersecting Arcs at Bottom Q (230, 175) -->
      <path d="M 215,170 A 170,170 0 0,0 245,180" fill="none" stroke="#2563eb" stroke-width="2"/>
      <path d="M 245,170 A 170,170 0 0,1 215,180" fill="none" stroke="#dc2626" stroke-width="2"/>
      <circle cx="230" cy="175" r="4" fill="#7c3aed"/>
      <text x="240" y="180" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#7c3aed">Q</text>
      <!-- Perpendicular Bisector Line PQ -->
      <line x1="230" y1="30" x2="230" y2="190" stroke="#059669" stroke-width="2" stroke-dasharray="4,4"/>
      <!-- Right angle mark at M -->
      <rect x="230" y="100" width="10" height="10" fill="none" stroke="#059669" stroke-width="1.5"/>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 8.1: Construction of Perpendicular Bisector PQ of Line Segment AB</div>
  </div>

  <div class="ex-div">NCERT Exercise 8.1: Circle &amp; Line Segment Constructions</div>

  <div class="q-card" id="c6m-ch8-q1">
    <div class="q-head" onclick="toggleQ('c6m-ch8-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Write the step-by-step procedure to construct the perpendicular bisector of a given line segment $AB$ of length $7.6\text{ cm}$ using ruler and compasses.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Steps of Construction:</strong></p>
          <ol>
            <li><strong>Step 1:</strong> Using a ruler, draw a line segment $AB = 7.6\text{ cm}$.</li>
            <li><strong>Step 2:</strong> With point $A$ as center and compass radius greater than half of $AB$ (i.e., radius &gt; $3.8\text{ cm}$, say $5\text{ cm}$), draw two arcs, one above $AB$ and one below $AB$.</li>
            <li><strong>Step 3:</strong> With point $B$ as center and with the <em>same radius</em>, draw two more arcs intersecting the previous arcs at points $P$ (above) and $Q$ (below).</li>
            <li><strong>Step 4:</strong> Using a ruler, draw a straight line passing through points $P$ and $Q$. Let $PQ$ intersect $AB$ at point $M$.</li>
            <li><strong>Conclusion:</strong> Line $PQ$ is the required <strong>perpendicular bisector</strong> of $AB$. Point $M$ bisects $AB$ so that $AM = MB = 3.8\text{ cm}$ and $\angle PMA = \angle PMB = 90^\circ$.</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Drawing line segment AB = 7.6 cm accurately</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Drawing arcs from A and B with radius &gt; half of AB</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Joining P and Q and verifying perpendicularity (90°) and bisected length (3.8 cm)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch8-q2">
    <div class="q-head" onclick="toggleQ('c6m-ch8-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Write the steps of construction to construct an angle of $60^\circ$ and then bisect it to obtain an angle of $30^\circ$ using compass and ruler only.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Steps of Construction:</strong></p>
          <ol>
            <li><strong>Step 1:</strong> Draw a ray $OA$.</li>
            <li><strong>Step 2 ($60^\circ$ Angle):</strong> With $O$ as center and any convenient compass radius, draw an arc intersecting ray $OA$ at point $B$.</li>
            <li><strong>Step 3:</strong> With $B$ as center and with the <em>same radius</em>, draw an arc cutting the previous arc at point $C$. Draw ray $OC$. Then $\angle AOC = 60^\circ$.</li>
            <li><strong>Step 4 (Bisecting to $30^\circ$):</strong> With $B$ and $C$ as centers and radius greater than half of arc $BC$, draw two arcs intersecting each other at point $D$.</li>
            <li><strong>Step 5:</strong> Join ray $OD$. The ray $OD$ bisects $\angle AOC$. Therefore:
            $$\angle AOD = \frac{1}{2} \times 60^\circ = \mathbf{30^\circ}$$</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Constructing 60° angle accurately</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Bisecting to obtain 30° angle with proper steps</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Question -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Practical Geometry)</div>
    <div class="q-text"><strong>Case Study: Finding the Center of a Round Plate:</strong><br>
    A potter creates a round circular ceramic plate but has lost the exact center point. Describe the geometric construction method using perpendicular bisectors of two chords to locate the exact center of the plate.</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>Geometric Principle:</strong> The perpendicular bisector of any chord of a circle always passes through the center of the circle. Therefore, the intersection of perpendicular bisectors of any two non-parallel chords is the center of the circle.</p>
        <p><strong>Procedure:</strong><br>
        1. Draw two non-parallel chords $AB$ and $CD$ on the circular boundary.<br>
        2. Construct the perpendicular bisector $l_1$ of chord $AB$ using a compass.<br>
        3. Construct the perpendicular bisector $l_2$ of chord $CD$ using a compass.<br>
        4. The point of intersection $O$ of lines $l_1$ and $l_2$ is the <strong>exact center of the circular plate</strong>.</p>
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(dir, 'ch5.html'), ch5Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch6.html'), ch6Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch7.html'), ch7Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch8.html'), ch8Html, 'utf8');

console.log('Successfully generated Batch 2 (Ch 5 to Ch 8) with embedded diagrams, CBSE marking schemes, and CBQs!');
