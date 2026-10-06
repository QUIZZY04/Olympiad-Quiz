const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6m');

// CHAPTER 9: Symmetry
const ch9Html = `<section class="chapter-section" id="ch9">
  <div class="chapter-header">
    <div class="ch-badge">9</div>
    <div class="chapter-header-info">
      <h2>Chapter 9: Symmetry</h2>
      <p>NCERT Ganita Prakash (Class 6) — Lines of Symmetry, Reflectional Symmetry, Mirror Inversion &amp; Completing Symmetric Figures | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Symmetry Concepts &amp; Properties</div>
    <ul class="concept-list">
      <li><strong>Line of Symmetry (Axis of Symmetry):</strong> An imaginary line that divides a figure into two identical halves such that folding along the line makes both halves coincide exactly.</li>
      <li><strong>Lines of Symmetry in Regular Polygons:</strong> A regular polygon with $n$ sides has exactly $n$ lines of symmetry:
        <ul>
          <li><em>Equilateral Triangle:</em> 3 lines of symmetry.</li>
          <li><em>Square:</em> 4 lines of symmetry (2 along medians, 2 along diagonals).</li>
          <li><em>Regular Pentagon:</em> 5 lines of symmetry.</li>
          <li><em>Regular Hexagon:</em> 6 lines of symmetry.</li>
          <li><em>Circle:</em> Infinitely many lines of symmetry (every diameter is an axis of symmetry).</li>
        </ul>
      </li>
      <li><strong>Reflection and Symmetry:</strong> The object and its mirror reflection are symmetrical about the mirror line. The distance of an object point from the mirror line equals the distance of its image point.</li>
    </ul>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 580px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 520 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
      <text x="260" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Lines of Symmetry in Standard Geometric Shapes</text>
      
      <!-- Shape 1: Equilateral Triangle (3 lines) -->
      <polygon points="75,45 35,125 115,125" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <line x1="75" y1="35" x2="75" y2="135" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <line x1="28" y1="130" x2="98" y2="80" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <line x1="122" y1="130" x2="52" y2="80" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <text x="75" y="155" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Equilateral Δ (3 lines)</text>

      <!-- Shape 2: Square (4 lines) -->
      <rect x="180" y="55" width="70" height="70" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <!-- Vertical -->
      <line x1="215" y1="45" x2="215" y2="135" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <!-- Horizontal -->
      <line x1="170" y1="90" x2="260" y2="90" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <!-- Diagonals -->
      <line x1="175" y1="50" x2="255" y2="130" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <line x1="255" y1="50" x2="175" y2="130" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <text x="215" y="155" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Square (4 lines)</text>

      <!-- Shape 3: Rectangle (2 lines) -->
      <rect x="310" y="60" width="85" height="60" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <!-- Vertical -->
      <line x1="352.5" y1="50" x2="352.5" y2="130" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <!-- Horizontal -->
      <line x1="300" y1="90" x2="405" y2="90" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <text x="352.5" y="155" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Rectangle (2 lines)</text>

      <!-- Shape 4: Isosceles Triangle (1 line) -->
      <polygon points="465,45 435,125 495,125" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <line x1="465" y1="35" x2="465" y2="135" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <text x="465" y="155" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Isosceles Δ (1 line)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 9.1: Symmetry Axes for Triangle, Square, Rectangle, and Isosceles Shapes</div>
  </div>

  <div class="ex-div">NCERT Exercise 9.1: Identifying Lines of Symmetry</div>

  <div class="q-card" id="c6m-ch9-q1">
    <div class="q-head" onclick="toggleQ('c6m-ch9-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Find the number of lines of symmetry for each of the following figures:<br>
      (a) An equilateral triangle<br>
      (b) A square<br>
      (c) A rectangle<br>
      (d) A scalene triangle<br>
      (e) A circle</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step"><strong>(a) Equilateral Triangle:</strong> Has all 3 sides and 3 angles equal. It has <strong>3 lines of symmetry</strong> (one through each vertex and the midpoint of the opposite side).</div>
          <div class="step"><strong>(b) Square:</strong> Has 4 equal sides and four $90^\circ$ angles. It has <strong>4 lines of symmetry</strong> (2 connecting midpoints of opposite sides, 2 along diagonals).</div>
          <div class="step"><strong>(c) Rectangle:</strong> Has opposite sides equal. It has <strong>2 lines of symmetry</strong> (connecting midpoints of opposite sides). Note: Diagonals of a rectangle are NOT lines of symmetry.</div>
          <div class="step"><strong>(d) Scalene Triangle:</strong> All 3 sides are of different lengths. It has <strong>0 lines of symmetry</strong>.</div>
          <div class="step"><strong>(e) Circle:</strong> A circle is symmetrical about any diameter passing through its center. Therefore, it has <strong>infinitely many lines of symmetry</strong>.</div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct count and brief reasoning</span><span class="marking-marks">0.6 Mark each (Total 3 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch9-q2">
    <div class="q-head" onclick="toggleQ('c6m-ch9-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Consider the letters of the English alphabet: $A, B, C, D, E, H, M, O, X$.<br>
      (i) Which of these letters have only vertical line of symmetry?<br>
      (ii) Which of these letters have only horizontal line of symmetry?<br>
      (iii) Which letters have BOTH vertical and horizontal lines of symmetry?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Vertical Line of Symmetry Only:</strong><br>
            Letters that can be split into identical left and right halves:<br>
            <strong>A, M</strong>
          </div>
          <div class="step">
            <strong>(ii) Horizontal Line of Symmetry Only:</strong><br>
            Letters that can be split into identical top and bottom halves:<br>
            <strong>B, C, D, E</strong>
          </div>
          <div class="step">
            <strong>(iii) Both Vertical and Horizontal Lines of Symmetry:</strong><br>
            Letters that have two orthogonal reflection axes:<br>
            <strong>H, O, X</strong>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): A, M</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): B, C, D, E</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (iii): H, O, X</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Question -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Art &amp; Design)</div>
    <div class="q-text"><strong>Case Study: Rangoli &amp; Kaleidoscope Mirror Reflections:</strong><br>
    In a kaleidoscope, two mirrors are placed at an angle of $60^\circ$ to create a symmetrical pattern. Explain why reflections produce multiple lines of symmetry in traditional Indian Rangoli patterns and how symmetry creates aesthetic harmony.</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>Mathematical Explanation:</strong><br>
        When two flat mirrors intersect at an angle of $60^\circ$, the number of reflected images formed is $\frac{360^\circ}{60^\circ} = 6$. This forms a hexagonal rotational and reflectional symmetry with 6 lines of symmetry.</p>
        <p>In Rangoli designs, artists use radial grids where dots are mirrored across horizontal, vertical, and diagonal axes. Because the human eye perceives balanced, proportional visual weights as pleasing, symmetry creates a psychological sense of order, equilibrium, and artistic beauty.</p>
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 10: The Other Side of Zero
const ch10Html = `<section class="chapter-section" id="ch10">
  <div class="chapter-header">
    <div class="ch-badge">10</div>
    <div class="chapter-header-info">
      <h2>Chapter 10: The Other Side of Zero</h2>
      <p>NCERT Ganita Prakash (Class 6) — Negative Numbers, The Set of Integers, Number Line Jumps &amp; Integer Addition and Subtraction | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Integer Rules &amp; Real-Life Representations</div>
    <ul class="concept-list">
      <li><strong>Integers ($\mathbb{Z}$):</strong> The collection of positive natural numbers, zero, and negative natural numbers: $\{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}$. Zero is neither positive nor negative.</li>
      <li><strong>Opposites in Real Life:</strong>
        <ul>
          <li>Above sea level $(+)$, Below sea level $(-)$</li>
          <li>Profit / Earning $(+)$, Loss / Spending $(-)$</li>
          <li>Temperature above $0^\circ\text{C}$ $(+)$, below $0^\circ\text{C}$ $(-)$</li>
        </ul>
      </li>
      <li><strong>Number Line Addition &amp; Subtraction Rules:</strong>
        <ul>
          <li>To add a positive integer: move to the <em>right</em>.</li>
          <li>To add a negative integer: move to the <em>left</em>.</li>
          <li>Subtracting a negative number is equivalent to adding its positive opposite: $a - (-b) = a + b$.</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 580px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Integer Addition on Number Line: (-2) + (+5) = +3</text>
      <!-- Base Number Line -->
      <line x1="30" y1="100" x2="510" y2="100" stroke="#1e293b" stroke-width="2.5"/>
      <!-- Arrowheads -->
      <polygon points="30,100 40,95 40,105" fill="#1e293b"/>
      <polygon points="510,100 500,95 500,105" fill="#1e293b"/>
      
      <!-- Ticks and labels from -5 to +5 -->
      <!-- -5 to +5: spacing = 42px. 0 is at 270 -->
      <!-- -5 at 60, -4 at 102, -3 at 144, -2 at 186, -1 at 228, 0 at 270, +1 at 312, +2 at 354, +3 at 396, +4 at 438, +5 at 480 -->
      <line x1="60" y1="92" x2="60" y2="108" stroke="#64748b" stroke-width="2"/><text x="60" y="125" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">-5</text>
      <line x1="102" y1="92" x2="102" y2="108" stroke="#64748b" stroke-width="2"/><text x="102" y="125" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">-4</text>
      <line x1="144" y1="92" x2="144" y2="108" stroke="#64748b" stroke-width="2"/><text x="144" y="125" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">-3</text>
      
      <!-- -2 Start Point -->
      <line x1="186" y1="90" x2="186" y2="110" stroke="#dc2626" stroke-width="2.5"/>
      <circle cx="186" cy="100" r="5" fill="#dc2626"/>
      <text x="186" y="125" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">-2</text>

      <line x1="228" y1="92" x2="228" y2="108" stroke="#64748b" stroke-width="2"/><text x="228" y="125" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">-1</text>
      <line x1="270" y1="88" x2="270" y2="112" stroke="#0f172a" stroke-width="3"/><text x="270" y="127" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">0</text>
      <line x1="312" y1="92" x2="312" y2="108" stroke="#64748b" stroke-width="2"/><text x="312" y="125" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">+1</text>
      <line x1="354" y1="92" x2="354" y2="108" stroke="#64748b" stroke-width="2"/><text x="354" y="125" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">+2</text>
      
      <!-- +3 End Point -->
      <line x1="396" y1="90" x2="396" y2="110" stroke="#059669" stroke-width="2.5"/>
      <circle cx="396" cy="100" r="5" fill="#059669"/>
      <text x="396" y="125" font-family="sans-serif" font-size="12" font-weight="700" fill="#059669" text-anchor="middle">+3</text>

      <line x1="438" y1="92" x2="438" y2="108" stroke="#64748b" stroke-width="2"/><text x="438" y="125" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">+4</text>
      <line x1="480" y1="92" x2="480" y2="108" stroke="#64748b" stroke-width="2"/><text x="480" y="125" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">+5</text>

      <!-- Jump Arc from -2 (186) to +3 (396) -->
      <path d="M 186,95 Q 291,35 396,95" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="5,3"/>
      <polygon points="396,95 385,88 392,83" fill="#2563eb"/>
      <text x="291" y="48" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">+ 5 steps to the right</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 10.1: Number Line Jump Visualizing (-2) + 5 = +3</div>
  </div>

  <div class="ex-div">NCERT Exercise 10.1: Integer Operations &amp; Comparisons</div>

  <div class="q-card" id="c6m-ch10-q1">
    <div class="q-head" onclick="toggleQ('c6m-ch10-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Represent the following numbers with appropriate positive ($+$) or negative ($-$) signs:<br>
      (a) A submarine is moving at a depth of $800\text{ metres}$ below sea level.<br>
      (b) A deposit of rupees two thousand in a bank account.<br>
      (c) A temperature of $15^\circ\text{C}$ below $0^\circ\text{C}$ in Siachen Glacier.<br>
      (d) A withdrawal of ₹$700$ from an ATM.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step"><strong>(a) Submarine depth 800 m below sea level:</strong> Depths below reference level are represented by negative integers $\implies \mathbf{-800\text{ m}}$.</div>
          <div class="step"><strong>(b) Deposit of ₹2000:</strong> Adding money into an account is positive $\implies \mathbf{+₹\,2000}$.</div>
          <div class="step"><strong>(c) Temperature 15°C below 0°C:</strong> Freezing/below zero temperature is negative $\implies \mathbf{-15^\circ\text{C}}$.</div>
          <div class="step"><strong>(d) Withdrawal of ₹700:</strong> Taking out money is negative $\implies \mathbf{-₹\,700}$.</div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct signed number</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch10-q2">
    <div class="q-head" onclick="toggleQ('c6m-ch10-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Evaluate the following integer expressions:<br>
      (i) $(-7) + (-9) + 4 + 16$<br>
      (ii) $(37) + (-2) + (-65) + (-8)<br>
      (iii) $(-13) + 32 - 8 - 1$</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><em>Rule:</em> Group all positive numbers together and all negative numbers together first.</p>
          <div class="step">
            <strong>(i) $(-7) + (-9) + 4 + 16$:</strong><br>
            Sum of negative integers $= (-7) + (-9) = -16$.<br>
            Sum of positive integers $= 4 + 16 = 20$.<br>
            $$\text{Total} = -16 + 20 = \mathbf{+4}$$
          </div>
          <div class="step">
            <strong>(ii) $(37) + (-2) + (-65) + (-8)$:</strong><br>
            Sum of negative integers $= (-2) + (-65) + (-8) = -75$.<br>
            $$\text{Total} = 37 + (-75) = 37 - 75 = \mathbf{-38}$$
          </div>
          <div class="step">
            <strong>(iii) $(-13) + 32 - 8 - 1$:</strong><br>
            Sum of negative integers $= (-13) + (-8) + (-1) = -22$.<br>
            Positive integer $= 32$.<br>
            $$\text{Total} = 32 - 22 = \mathbf{10}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Grouping and arriving at +4</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Grouping and arriving at -38</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (iii): Grouping and arriving at 10</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch10-q3">
    <div class="q-head" onclick="toggleQ('c6m-ch10-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Find the value of:<br>
      (a) $(-18) - (-25)$<br>
      (b) $(-31) - (-11)$<br>
      (c) $23 - (-12)$</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><em>Rule:</em> Subtracting a negative integer is equivalent to adding its opposite: $a - (-b) = a + b$.</p>
          <div class="step">
            <strong>(a) $(-18) - (-25)$:</strong><br>
            $$= -18 + 25 = \mathbf{7}$$
          </div>
          <div class="step">
            <strong>(b) $(-31) - (-11)$:</strong><br>
            $$= -31 + 11 = \mathbf{-20}$$
          </div>
          <div class="step">
            <strong>(c) $23 - (-12)$:</strong><br>
            $$= 23 + 12 = \mathbf{35}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (a): -18 + 25 = 7</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (b): -31 + 11 = -20</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (c): 23 + 12 = 35</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Question -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Meteorology &amp; Climate)</div>
    <div class="q-text"><strong>Case Study: Global City Temperatures Comparison:</strong><br>
    On a winter day, the recorded temperatures of four cities were:<br>
    Srinagar: $-4^\circ\text{C}$, Shimla: $-2^\circ\text{C}$, Delhi: $+12^\circ\text{C}$, Leh: $-14^\circ\text{C}$.<br>
    (a) Which city recorded the coldest temperature?<br>
    (b) What is the difference in temperature between the warmest and coldest cities?<br>
    (c) Arrange the temperatures in ascending order.</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Coldest City:</strong><br>
        On the number line, numbers located furthest to the left have the smallest value.<br>
        $-14 &lt; -4 &lt; -2 &lt; 12$.<br>
        Therefore, <strong>Leh ($-14^\circ\text{C}$)</strong> recorded the coldest temperature.</p>

        <p><strong>(b) Temperature Difference between Warmest &amp; Coldest:</strong><br>
        Warmest city: Delhi ($+12^\circ\text{C}$)<br>
        Coldest city: Leh ($-14^\circ\text{C}$)<br>
        $$\text{Difference} = 12 - (-14) = 12 + 14 = \mathbf{26^\circ\text{C}}$$</p>

        <p><strong>(c) Ascending Order:</strong><br>
        $$\mathbf{-14^\circ\text{C} &lt; -4^\circ\text{C} &lt; -2^\circ\text{C} &lt; +12^\circ\text{C}}$$
        (Leh, Srinagar, Shimla, Delhi).</p>
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 11: Introduction to Algebra (Bonus Foundation Module)
const ch11Html = `<section class="chapter-section" id="ch11">
  <div class="chapter-header">
    <div class="ch-badge">11</div>
    <div class="chapter-header-info">
      <h2>Chapter 11: Introduction to Algebra</h2>
      <p>NCERT Foundation Module — Variables, Forming Expressions, Evaluating Algebraic Expressions &amp; Solving Simple Equations | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Algebraic Concepts</div>
    <ul class="concept-list">
      <li><strong>Variable:</strong> An entity that can take different numerical values, denoted by letters like $x, y, z, m, n$.</li>
      <li><strong>Constant:</strong> A quantity having a fixed numerical value (e.g., $5, -8, \frac{1}{2}$).</li>
      <li><strong>Algebraic Expression:</strong> A combination of variables and constants connected by arithmetic operations ($+, -, \times, \div$), such as $2x + 7$ or $\frac{3y - 5}{2}$.</li>
      <li><strong>Equation:</strong> A condition on a variable stating that two expressions are equal, containing an equality sign ($=$).</li>
    </ul>
  </div>

  <div class="ex-div">NCERT Foundation Exercise 11.1: Expressions &amp; Simple Equations</div>

  <div class="q-card" id="c6m-ch11-q1">
    <div class="q-head" onclick="toggleQ('c6m-ch11-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Write algebraic expressions for each of the following statements:<br>
      (a) 7 added to $p$<br>
      (b) 7 subtracted from $-m$<br>
      (c) $y$ is multiplied by $-5$ and the result is added to 16<br>
      (d) One-fifth of $x$ added to 3 times $y$</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step"><strong>(a) 7 added to $p$:</strong> $\mathbf{p + 7}$</div>
          <div class="step"><strong>(b) 7 subtracted from $-m$:</strong> $\mathbf{-m - 7}$</div>
          <div class="step"><strong>(c) $y$ multiplied by $-5$ and added to 16:</strong> $(-5 \times y) + 16 = \mathbf{16 - 5y}$</div>
          <div class="step"><strong>(d) One-fifth of $x$ added to 3 times $y$:</strong> $\mathbf{\frac{x}{5} + 3y}$</div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct algebraic expression</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch11-q2">
    <div class="q-head" onclick="toggleQ('c6m-ch11-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Solve the following simple linear equations for the unknown variable:<br>
      (i) $x + 10 = 25$<br>
      (ii) $p - 8 = 17$<br>
      (iii) $5m = 45$<br>
      (iv) $\frac{q}{4} = 7$</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><em>Principle of Transposition / Inverse Operations:</em></p>
          <div class="step"><strong>(i) $x + 10 = 25$:</strong><br>Transpose $+10$ to RHS: $x = 25 - 10 \implies \mathbf{x = 15}$.</div>
          <div class="step"><strong>(ii) $p - 8 = 17$:</strong><br>Transpose $-8$ to RHS: $p = 17 + 8 \implies \mathbf{p = 25}$.</div>
          <div class="step"><strong>(iii) $5m = 45$:</strong><br>Divide both sides by 5: $m = \frac{45}{5} \implies \mathbf{m = 9}$.</div>
          <div class="step"><strong>(iv) $\frac{q}{4} = 7$:</strong><br>Multiply both sides by 4: $q = 7 \times 4 \implies \mathbf{q = 28}$.</div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct equation solution with transposition step</span><span class="marking-marks">0.75 Mark each (Total 3 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Question -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Algebraic Age Problems)</div>
    <div class="q-text"><strong>Case Study: Age Problem Formulation:</strong><br>
    Sarita's present age is $y\text{ years}$.<br>
    (a) What will be her age 5 years from now?<br>
    (b) What was her age 3 years ago?<br>
    (c) Sarita's grandfather is 6 times her age. What is her grandfather's age?<br>
    (d) Grandmother is 2 years younger than grandfather. What is grandmother's age?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Age 5 years from now:</strong> $(y + 5)\text{ years}$.</p>
        <p><strong>(b) Age 3 years ago:</strong> $(y - 3)\text{ years}$.</p>
        <p><strong>(c) Grandfather's age:</strong> $6 \times y = \mathbf{6y\text{ years}}$.</p>
        <p><strong>(d) Grandmother's age:</strong> $(6y - 2)\text{ years}$.</p>
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 12: Ratio and Proportion (Bonus Foundation Module)
const ch12Html = `<section class="chapter-section" id="ch12">
  <div class="chapter-header">
    <div class="ch-badge">12</div>
    <div class="chapter-header-info">
      <h2>Chapter 12: Ratio and Proportion</h2>
      <p>NCERT Foundation Module — Concept of Ratio, Simplest Form, Proportion Verification &amp; Unitary Method Applications | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Ratio &amp; Proportion Principles</div>
    <ul class="concept-list">
      <li><strong>Ratio ($a : b$):</strong> Comparison of two quantities of the same kind and in the same units by division. Stated as $\frac{a}{b}$ (read as "$a$ is to $b$"). A ratio has no units.</li>
      <li><strong>Proportion ($a : b :: c : d$):</strong> When two ratios are equal, they are said to be in proportion.
        $$\frac{a}{b} = \frac{c}{d} \iff a \times d = b \times c \quad (\text{Product of Extremes} = \text{Product of Means})$$</li>
      <li><strong>Unitary Method:</strong> The method in which we first find the value of one unit by division, and then find the value of the required number of units by multiplication.</li>
    </ul>
  </div>

  <div class="ex-div">NCERT Foundation Exercise 12.1: Ratios &amp; Unitary Method</div>

  <div class="q-card" id="c6m-ch12-q1">
    <div class="q-head" onclick="toggleQ('c6m-ch12-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Find the ratio of each of the following in simplest form:<br>
      (a) $30\text{ minutes}$ to $1.5\text{ hours}$<br>
      (b) $40\text{ cm}$ to $1.5\text{ m}$<br>
      (c) $55\text{ paise}$ to ₹$1$</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><em>Rule:</em> Quantities must be converted into the same unit before computing ratio.</p>
          <div class="step">
            <strong>(a) $30\text{ minutes}$ to $1.5\text{ hours}$:</strong><br>
            $1.5\text{ hours} = 1.5 \times 60 = 90\text{ minutes}$.<br>
            $$\text{Ratio} = \frac{30}{90} = \frac{1}{3} \implies \mathbf{1 : 3}$$
          </div>
          <div class="step">
            <strong>(b) $40\text{ cm}$ to $1.5\text{ m}$:</strong><br>
            $1.5\text{ m} = 1.5 \times 100 = 150\text{ cm}$.<br>
            $$\text{Ratio} = \frac{40}{150} = \frac{4}{15} \implies \mathbf{4 : 15}$$
          </div>
          <div class="step">
            <strong>(c) $55\text{ paise}$ to ₹$1$:</strong><br>
            ₹$1 = 100\text{ paise}$.<br>
            $$\text{Ratio} = \frac{55}{100} = \frac{11}{20} \implies \mathbf{11 : 20}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (a): Converting hours to min & ratio 1:3</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (b): Converting m to cm & ratio 4:15</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (c): Converting ₹ to paise & ratio 11:20</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch12-q2">
    <div class="q-head" onclick="toggleQ('c6m-ch12-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">The cost of 6 cans of juice is ₹210. What will be the cost of 4 cans of juice? Solve using unitary method.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Step 1: Find Cost of 1 Can (Unit Cost):</strong><br>
            Cost of 6 cans of juice $= ₹\,210$.<br>
            $$\text{Cost of 1 can} = \frac{210}{6} = \mathbf{₹\,35}$$
          </div>
          <div class="step">
            <strong>Step 2: Find Cost of 4 Cans:</strong><br>
            $$\text{Cost of 4 cans} = 4 \times 35 = \mathbf{₹\,140}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Cost of 1 can = ₹35 (division)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Cost of 4 cans = ₹140 (multiplication)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Question -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Automobile Mileage)</div>
    <div class="q-text"><strong>Case Study: Fuel Consumption &amp; Travel Distance:</strong><br>
    A car travels $90\text{ km}$ on $2.5\text{ litres}$ of petrol.<br>
    (a) How far will the car travel on $5\text{ litres}$ of petrol?<br>
    (b) How much petrol is needed to cover a journey of $180\text{ km}$?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>Step 1: Mileage (Distance per Litre):</strong><br>
        $$\text{Distance per litre} = \frac{90}{2.5} = \mathbf{36\text{ km/litre}}$$</p>

        <p><strong>(a) Distance on 5 litres:</strong><br>
        $$\text{Distance} = 5 \times 36 = \mathbf{180\text{ km}}$$</p>

        <p><strong>(b) Petrol needed for 180 km:</strong><br>
        $$\text{Petrol needed} = \frac{180}{36} = \mathbf{5\text{ litres}}$$</p>
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(dir, 'ch9.html'), ch9Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch10.html'), ch10Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch11.html'), ch11Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch12.html'), ch12Html, 'utf8');

console.log('Successfully generated Batch 3 (Ch 9 to Ch 12) with embedded diagrams, CBSE marking schemes, and CBQs!');
