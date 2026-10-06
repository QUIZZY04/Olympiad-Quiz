const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6m');

// CHAPTER 1: Patterns in Mathematics
const ch1Html = `<section class="chapter-section" id="ch1">
  <div class="chapter-header">
    <div class="ch-badge">1</div>
    <div class="chapter-header-info">
      <h2>Chapter 1: Patterns in Mathematics</h2>
      <p>NCERT Ganita Prakash (Class 6) — Number Sequences, Triangular & Square Numbers, Matchstick Patterns & Rule Formulation | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Mathematical Concepts &amp; Formulas</div>
    <ul class="concept-list">
      <li><strong>Patterns:</strong> A sequence of numbers, shapes, or designs that follow a definite, repeatable rule.</li>
      <li><strong>Triangular Numbers:</strong> Numbers that can be arranged in the shape of an equilateral triangle: $1, 3, 6, 10, 15, \dots$ The $n$-th triangular number is given by $T_n = \\frac{n(n + 1)}{2}$.</li>
      <li><strong>Square Numbers:</strong> Numbers formed by multiplying an integer by itself: $1^2=1, 2^2=4, 3^2=9, 4^2=16, \dots$ ($S_n = n^2$). Sum of consecutive triangular numbers gives a square number: $T_{n-1} + T_n = n^2$.</li>
      <li><strong>Matchstick Patterns &amp; Algebraic Rules:</strong> If each additional unit requires a fixed number of sticks $d$, the rule for $n$ shapes is given by $d \\cdot n + c$. For example, a row of squares requires $3n + 1$ matchsticks.</li>
    </ul>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 580px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <!-- Title -->
      <text x="270" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Visual Pattern: Triangular Numbers Sequence (T₁ to T₄)</text>
      <!-- T1 = 1 -->
      <circle cx="50" cy="90" r="7" fill="#2563eb"/>
      <text x="50" y="135" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">T₁ = 1</text>
      <!-- T2 = 3 -->
      <circle cx="140" cy="76" r="7" fill="#2563eb"/>
      <circle cx="128" cy="100" r="7" fill="#2563eb"/>
      <circle cx="152" cy="100" r="7" fill="#2563eb"/>
      <text x="140" y="135" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">T₂ = 3</text>
      <!-- T3 = 6 -->
      <circle cx="260" cy="64" r="7" fill="#2563eb"/>
      <circle cx="248" cy="86" r="7" fill="#2563eb"/>
      <circle cx="272" cy="86" r="7" fill="#2563eb"/>
      <circle cx="236" cy="108" r="7" fill="#2563eb"/>
      <circle cx="260" cy="108" r="7" fill="#2563eb"/>
      <circle cx="284" cy="108" r="7" fill="#2563eb"/>
      <text x="260" y="135" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">T₃ = 6</text>
      <!-- T4 = 10 -->
      <circle cx="420" cy="52" r="7" fill="#2563eb"/>
      <circle cx="408" cy="72" r="7" fill="#2563eb"/>
      <circle cx="432" cy="72" r="7" fill="#2563eb"/>
      <circle cx="396" cy="92" r="7" fill="#2563eb"/>
      <circle cx="420" cy="92" r="7" fill="#2563eb"/>
      <circle cx="444" cy="92" r="7" fill="#2563eb"/>
      <circle cx="384" cy="112" r="7" fill="#2563eb"/>
      <circle cx="408" cy="112" r="7" fill="#2563eb"/>
      <circle cx="432" cy="112" r="7" fill="#2563eb"/>
      <circle cx="456" cy="112" r="7" fill="#2563eb"/>
      <text x="420" y="135" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">T₄ = 10</text>
      <!-- Formula caption -->
      <text x="270" y="155" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">General Rule: Tₙ = n(n + 1)/2 | Sum of Two Consecutive Triangular Numbers = Square Number</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 1.1: Dot Array Models for Triangular Numbers Sequence</div>
  </div>

  <div class="ex-div">NCERT Exercise 1.1: Number Patterns &amp; Triangular Numbers</div>

  <div class="q-card" id="c6m-ch1-q1">
    <div class="q-head" onclick="toggleQ('c6m-ch1-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Observe the number sequence: $1, 3, 6, 10, 15, \dots$<br>(i) Write the next three numbers of this sequence.<br>(ii) What is the special mathematical name given to these numbers?<br>(iii) Show that the sum of the $3^{\text{rd}}$ and $4^{\text{th}}$ numbers forms a perfect square.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Pattern Rule &amp; Next Three Numbers:</strong><br>
            Let us find the difference between consecutive terms:<br>
            $3 - 1 = 2$<br>
            $6 - 3 = 3$<br>
            $10 - 6 = 4$<br>
            $15 - 10 = 5$<br>
            Notice that each step adds the next natural number ($+2, +3, +4, +5$).<br>
            Therefore:<br>
            - Next term: $15 + 6 = \mathbf{21}$<br>
            - Next term: $21 + 7 = \mathbf{28}$<br>
            - Next term: $28 + 8 = \mathbf{36}$<br>
            The next three numbers are <strong>21, 28, and 36</strong>.
          </div>
          <div class="step">
            <strong>(ii) Mathematical Name:</strong><br>
            These numbers are called <strong>Triangular Numbers</strong> because they can be represented as dots forming an equilateral triangle.
          </div>
          <div class="step">
            <strong>(iii) Sum of $3^{\text{rd}}$ and $4^{\text{th}}$ Triangular Numbers:</strong><br>
            $3^{\text{rd}}\text{ triangular number} = 6$<br>
            $4^{\text{th}}\text{ triangular number} = 10$<br>
            $\text{Sum} = 6 + 10 = 16 = 4^2$<br>
            Since $16 = 4 \times 4$, the sum is indeed a <strong>perfect square</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Identifying addition pattern and writing 21, 28, 36</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Stating "Triangular Numbers"</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (iii): Computing 6 + 10 = 16 and verifying 4²</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch1-q2">
    <div class="q-head" onclick="toggleQ('c6m-ch1-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Find the $10^{\text{th}}$ triangular number using the formula $T_n = \frac{n(n+1)}{2}$. Verify your answer by summing the first 10 natural numbers.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Step 1: Formula Calculation:</strong><br>
            Given $n = 10$,<br>
            $T_{10} = \frac{10 \times (10 + 1)}{2} = \frac{10 \times 11}{2} = 5 \times 11 = \mathbf{55}$.
          </div>
          <div class="step">
            <strong>Step 2: Verification by Addition:</strong><br>
            $1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = (1 + 10) + (2 + 9) + (3 + 8) + (4 + 7) + (5 + 6)$<br>
            $= 11 \times 5 = \mathbf{55}$.<br>
            Both methods yield <strong>55</strong>. Hence verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct substitution and evaluation to 55</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Step-by-step verification by consecutive addition</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 580px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 140" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Matchstick Square Pattern Sequence: Rule Formulation</text>
      <!-- 1 Square: 4 sticks -->
      <rect x="35" y="45" width="40" height="40" fill="#f8fafc" stroke="#dc2626" stroke-width="3" rx="2"/>
      <circle cx="35" cy="45" r="3.5" fill="#eab308"/>
      <circle cx="75" cy="45" r="3.5" fill="#eab308"/>
      <circle cx="35" cy="85" r="3.5" fill="#eab308"/>
      <circle cx="75" cy="85" r="3.5" fill="#eab308"/>
      <text x="55" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">n = 1 (4 sticks)</text>

      <!-- 2 Squares: 7 sticks -->
      <rect x="150" y="45" width="40" height="40" fill="#f8fafc" stroke="#dc2626" stroke-width="3" rx="2"/>
      <rect x="190" y="45" width="40" height="40" fill="#f8fafc" stroke="#dc2626" stroke-width="3" rx="2"/>
      <text x="190" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">n = 2 (7 sticks)</text>

      <!-- 3 Squares: 10 sticks -->
      <rect x="300" y="45" width="40" height="40" fill="#f8fafc" stroke="#dc2626" stroke-width="3" rx="2"/>
      <rect x="340" y="45" width="40" height="40" fill="#f8fafc" stroke="#dc2626" stroke-width="3" rx="2"/>
      <rect x="380" y="45" width="40" height="40" fill="#f8fafc" stroke="#dc2626" stroke-width="3" rx="2"/>
      <text x="360" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">n = 3 (10 sticks)</text>

      <!-- General rule annotation -->
      <text x="270" y="132" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0284c7" text-anchor="middle">Rule for n Squares: 3n + 1 matchsticks (First square takes 4, each extra square adds 3)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 1.2: Matchstick Pattern of Connected Squares</div>
  </div>

  <div class="ex-div">NCERT Exercise 1.2: Matchstick Patterns &amp; Algebraic Generalization</div>

  <div class="q-card" id="c6m-ch1-q3">
    <div class="q-head" onclick="toggleQ('c6m-ch1-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">A student makes a row of connected squares using matchsticks as shown in Figure 1.2.<br>(i) Find the number of matchsticks required for 1 square, 2 squares, 3 squares, and 4 squares.<br>(ii) Write the general rule for the number of matchsticks required to make $n$ squares.<br>(iii) How many matchsticks are needed to make a row of 25 connected squares?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Count of Matchsticks:</strong><br>
            - For 1 square: $4$ matchsticks.<br>
            - For 2 connected squares: $4 + 3 = 7$ matchsticks (1 common edge shared).<br>
            - For 3 connected squares: $7 + 3 = 10$ matchsticks.<br>
            - For 4 connected squares: $10 + 3 = 13$ matchsticks.
          </div>
          <div class="step">
            <strong>(ii) Formulation of General Rule:</strong><br>
            Observe the pattern: $4 = 3(1) + 1$, $7 = 3(2) + 1$, $10 = 3(3) + 1$, $13 = 3(4) + 1$.<br>
            Therefore, for $n$ connected squares, the general rule is:<br>
            $$\text{Number of matchsticks} = 3n + 1$$
          </div>
          <div class="step">
            <strong>(iii) Calculation for $n = 25$:</strong><br>
            $$\text{Matchsticks} = 3(25) + 1 = 75 + 1 = \mathbf{76}$$
            Hence, <strong>76 matchsticks</strong> are needed to form 25 connected squares.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Tabulating stick counts (4, 7, 10, 13)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Writing correct formula (3n + 1)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (iii): Correct substitution and answer 76</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch1-q4">
    <div class="q-head" onclick="toggleQ('c6m-ch1-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Observe the pattern in the following number pyramid:<br>
      $1 \times 8 + 1 = 9$<br>
      $12 \times 8 + 2 = 98$<br>
      $123 \times 8 + 3 = 987$<br>
      $1234 \times 8 + 4 = 9876$<br>
      Write down the next two lines of this pattern without actual multiplication.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Pattern Analysis:</strong></p>
          <ul>
            <li>In the first factor, digits $1, 2, 3, \dots$ are appended in ascending order.</li>
            <li>The number added is the next natural number ($1, 2, 3, 4, 5, 6$).</li>
            <li>The resulting product displays digits starting from 9 in descending order.</li>
          </ul>
          <div class="step">
            <strong>Line 5:</strong><br>
            $$\mathbf{12345 \times 8 + 5 = 98765}$$
          </div>
          <div class="step">
            <strong>Line 6:</strong><br>
            $$\mathbf{123456 \times 8 + 6 = 987654}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correctly writing line 5 (12345 × 8 + 5 = 98765)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correctly writing line 6 (123456 × 8 + 6 = 987654)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch1-q5">
    <div class="q-head" onclick="toggleQ('c6m-ch1-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">A sequence is defined by the rule: "Multiply the term number by 4 and then subtract 3".<br>(i) Write the first 5 terms of this sequence.<br>(ii) Find the $20^{\text{th}}$ term.<br>(iii) Is the number 85 a term in this sequence? Justify your answer.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) First 5 Terms:</strong><br>
            General term formula: $a_n = 4n - 3$.<br>
            - For $n = 1$: $4(1) - 3 = 1$<br>
            - For $n = 2$: $4(2) - 3 = 5$<br>
            - For $n = 3$: $4(3) - 3 = 9$<br>
            - For $n = 4$: $4(4) - 3 = 13$<br>
            - For $n = 5$: $4(5) - 3 = 17$<br>
            The first 5 terms are <strong>1, 5, 9, 13, 17</strong>.
          </div>
          <div class="step">
            <strong>(ii) $20^{\text{th}}$ Term:</strong><br>
            $$a_{20} = 4(20) - 3 = 80 - 3 = \mathbf{77}$$
          </div>
          <div class="step">
            <strong>(iii) Checking if 85 is in the sequence:</strong><br>
            Set $4n - 3 = 85$:<br>
            $4n = 85 + 3 = 88$<br>
            $n = \frac{88}{4} = 22$<br>
            Since $n = 22$ is a whole number (natural number), <strong>Yes, 85 is the $22^{\text{nd}}$ term</strong> of the sequence.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Computing first 5 terms accurately</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Finding a₂₀ = 77</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (iii): Solving 4n - 3 = 85 and concluding n = 22</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch1-q6">
    <div class="q-head" onclick="toggleQ('c6m-ch1-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Observe the dot pattern for square numbers: $1, 4, 9, 16, 25, \dots$<br>(i) Express $25$ as the sum of consecutive odd natural numbers.<br>(ii) Express $36$ as the sum of two consecutive triangular numbers.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Sum of Consecutive Odd Numbers:</strong><br>
            Every square number $n^2$ is the sum of the first $n$ odd natural numbers.<br>
            Here, $25 = 5^2$. Therefore:<br>
            $$25 = \mathbf{1 + 3 + 5 + 7 + 9}$$
          </div>
          <div class="step">
            <strong>(ii) Sum of Two Consecutive Triangular Numbers:</strong><br>
            $36 = 6^2$. A square number $n^2$ is the sum of the $(n-1)^{\text{th}}$ and $n^{\text{th}}$ triangular numbers.<br>
            $T_5 = \frac{5 \times 6}{2} = 15$<br>
            $T_6 = \frac{6 \times 7}{2} = 21$<br>
            $$36 = \mathbf{15 + 21}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Stating 1 + 3 + 5 + 7 + 9 = 25</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Identifying T₅ = 15, T₆ = 21 and writing 15 + 21 = 36</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Question -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Real-Life Case Study)</div>
    <div class="q-text"><strong>Case Study: School Auditorium Seating Arrangement:</strong><br>
    In a newly constructed school auditorium, the chairs in the rows are arranged in a triangular stage pattern. Row 1 has 3 chairs, Row 2 has 5 chairs, Row 3 has 7 chairs, and so on.<br>
    (a) Formulate the algebraic rule for the number of chairs in Row $n$.<br>
    (b) How many chairs are in the $15^{\text{th}}$ row?<br>
    (c) If the last row contains 41 chairs, find the total number of rows in the auditorium.</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Algebraic Rule:</strong><br>
        The number of chairs in consecutive rows is $3, 5, 7, 9, \dots$<br>
        The common difference is $d = 2$.<br>
        For Row 1: $2(1) + 1 = 3$<br>
        For Row 2: $2(2) + 1 = 5$<br>
        Therefore, for Row $n$: $\mathbf{\text{Chairs} = 2n + 1}$.</p>

        <p><strong>(b) Chairs in $15^{\text{th}}$ Row:</strong><br>
        Substitute $n = 15$:<br>
        $$\text{Chairs} = 2(15) + 1 = 30 + 1 = \mathbf{31\text{ chairs}}.$$</p>

        <p><strong>(c) Total Number of Rows when Last Row has 41 Chairs:</strong><br>
        $$2n + 1 = 41 \implies 2n = 41 - 1 = 40 \implies n = \frac{40}{2} = \mathbf{20\text{ rows}}.$$</p>
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 2: Lines and Angles
const ch2Html = `<section class="chapter-section" id="ch2">
  <div class="chapter-header">
    <div class="ch-badge">2</div>
    <div class="chapter-header-info">
      <h2>Chapter 2: Lines and Angles</h2>
      <p>NCERT Ganita Prakash (Class 6) — Points, Lines, Rays, Angle Classifications, Clock Revolutions, Protractor Measurement &amp; Intersecting Lines | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Geometric Concepts &amp; Angle Classifications</div>
    <ul class="concept-list">
      <li><strong>Point, Line, Ray &amp; Line Segment:</strong> A point marks a position. A line extends infinitely in both directions ($\overleftrightarrow{AB}$). A line segment has two fixed endpoints ($\overline{AB}$). A ray has one initial point and extends infinitely in one direction ($\vec{AB}$).</li>
      <li><strong>Angle Classifications:</strong>
        <ul>
          <li><em>Acute Angle:</em> Greater than $0^\circ$ and less than $90^\circ$.</li>
          <li><em>Right Angle:</em> Exactly equal to $90^\circ$ ($\frac{1}{4}$ of a full revolution).</li>
          <li><em>Obtuse Angle:</em> Greater than $90^\circ$ and less than $180^\circ$.</li>
          <li><em>Straight Angle:</em> Exactly equal to $180^\circ$ ($\frac{1}{2}$ of a full revolution).</li>
          <li><em>Reflex Angle:</em> Greater than $180^\circ$ and less than $360^\circ$.</li>
          <li><em>Complete Angle:</em> Exactly equal to $360^\circ$ (1 full revolution).</li>
        </ul>
      </li>
      <li><strong>Clock Revolutions:</strong> 1 hour on a clock face represents $\frac{360^\circ}{12} = 30^\circ$. Moving 3 hours represents $90^\circ$ (a right angle), and moving 6 hours represents $180^\circ$ (a straight angle).</li>
    </ul>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 600px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 170" width="100%" height="170" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Types of Angles: Visual Classification with Standard Measures</text>
      
      <!-- Acute Angle (45°) -->
      <path d="M 30,120 L 95,120 M 30,120 L 76,74" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 50,120 A 20,20 0 0,0 44,106" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <text x="50" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Acute (&lt; 90°)</text>

      <!-- Right Angle (90°) -->
      <path d="M 140,120 L 205,120 M 140,120 L 140,55" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="140" y="105" width="15" height="15" fill="none" stroke="#16a34a" stroke-width="1.8"/>
      <text x="170" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Right (= 90°)</text>

      <!-- Obtuse Angle (135°) -->
      <path d="M 275,120 L 340,120 M 275,120 L 229,74" stroke="#d97706" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 295,120 A 20,20 0 0,0 261,106" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <text x="285" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Obtuse (&gt; 90°, &lt; 180°)</text>

      <!-- Straight Angle (180°) -->
      <path d="M 380,120 L 510,120" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="445" cy="120" r="4" fill="#7c3aed"/>
      <path d="M 465,120 A 20,20 0 0,0 425,120" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <text x="445" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Straight (= 180°)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 2.1: Geometric Representation of Acute, Right, Obtuse, and Straight Angles</div>
  </div>

  <div class="ex-div">NCERT Exercise 2.1: Angle Types &amp; Identification</div>

  <div class="q-card" id="c6m-ch2-q1">
    <div class="q-head" onclick="toggleQ('c6m-ch2-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Classify each of the following angles into acute, obtuse, right, straight, or reflex:<br>
      (i) $35^\circ$ &nbsp;&nbsp; (ii) $90^\circ$ &nbsp;&nbsp; (iii) $142^\circ$ &nbsp;&nbsp; (iv) $180^\circ$ &nbsp;&nbsp; (v) $245^\circ$ &nbsp;&nbsp; (vi) $89^\circ$</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><em>Standard Definitions:</em> An angle $\theta$ is acute if $0^\circ &lt; \theta &lt; 90^\circ$; right if $\theta = 90^\circ$; obtuse if $90^\circ &lt; \theta &lt; 180^\circ$; straight if $\theta = 180^\circ$; reflex if $180^\circ &lt; \theta &lt; 360^\circ$.</p>
          <div class="step"><strong>(i) $35^\circ$:</strong> Since $35^\circ &lt; 90^\circ$, it is an <strong>Acute Angle</strong>.</div>
          <div class="step"><strong>(ii) $90^\circ$:</strong> Exactly $90^\circ$, it is a <strong>Right Angle</strong>.</div>
          <div class="step"><strong>(iii) $142^\circ$:</strong> Since $90^\circ &lt; 142^\circ &lt; 180^\circ$, it is an <strong>Obtuse Angle</strong>.</div>
          <div class="step"><strong>(iv) $180^\circ$:</strong> Exactly $180^\circ$, it is a <strong>Straight Angle</strong>.</div>
          <div class="step"><strong>(v) $245^\circ$:</strong> Since $180^\circ &lt; 245^\circ &lt; 360^\circ$, it is a <strong>Reflex Angle</strong>.</div>
          <div class="step"><strong>(vi) $89^\circ$:</strong> Since $89^\circ &lt; 90^\circ$, it is an <strong>Acute Angle</strong>.</div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct classification with reason</span><span class="marking-marks">0.5 Mark each (Total 3 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 520px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 480 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
      <text x="240" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Clock Hand Revolutions and Corresponding Angles</text>
      
      <!-- Clock 1: 12 to 3 (Right Angle 90°, 1/4 revolution) -->
      <circle cx="120" cy="95" r="50" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <circle cx="120" cy="95" r="3" fill="#0f172a"/>
      <!-- Hour Hand pointing to 3 -->
      <line x1="120" y1="95" x2="155" y2="95" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
      <!-- Minute Hand pointing to 12 -->
      <line x1="120" y1="95" x2="120" y2="55" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="120" y="85" width="10" height="10" fill="none" stroke="#16a34a" stroke-width="1.5"/>
      <text x="120" y="162" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">12 to 3: 1/4 Rev = 90°</text>

      <!-- Clock 2: 12 to 6 (Straight Angle 180°, 1/2 revolution) -->
      <circle cx="360" cy="95" r="50" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <circle cx="360" cy="95" r="3" fill="#0f172a"/>
      <!-- Hand pointing to 12 -->
      <line x1="360" y1="95" x2="360" y2="55" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Hand pointing to 6 -->
      <line x1="360" y1="95" x2="360" y2="135" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
      <path d="M 375,95 A 15,15 0 0,0 345,95" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <text x="360" y="162" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">12 to 6: 1/2 Rev = 180°</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 2.2: Clock Face Revolutions: Quarter and Half Turns</div>
  </div>

  <div class="ex-div">NCERT Exercise 2.2: Clock Angles &amp; Direction Revolutions</div>

  <div class="q-card" id="c6m-ch2-q2">
    <div class="q-head" onclick="toggleQ('c6m-ch2-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">What fraction of a clockwise revolution does the hour hand of a clock turn through, when it goes from:<br>
      (a) 3 to 9<br>
      (b) 4 to 7<br>
      (c) 7 to 10<br>
      (d) 12 to 9</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><em>Rule:</em> A clock has 12 equal hours. 1 full revolution $= 12\text{ hours} = 360^\circ$.<br>
          Fraction of revolution $= \frac{\text{Number of hours passed}}{12}$.</p>
          <div class="step">
            <strong>(a) From 3 to 9:</strong><br>
            Hours passed $= 9 - 3 = 6\text{ hours}$.<br>
            $\text{Fraction} = \frac{6}{12} = \mathbf{\frac{1}{2}}\text{ revolution (Straight angle = } 180^\circ\text{)}$.
          </div>
          <div class="step">
            <strong>(b) From 4 to 7:</strong><br>
            Hours passed $= 7 - 4 = 3\text{ hours}$.<br>
            $\text{Fraction} = \frac{3}{12} = \mathbf{\frac{1}{4}}\text{ revolution (Right angle = } 90^\circ\text{)}$.
          </div>
          <div class="step">
            <strong>(c) From 7 to 10:</strong><br>
            Hours passed $= 10 - 7 = 3\text{ hours}$.<br>
            $\text{Fraction} = \frac{3}{12} = \mathbf{\frac{1}{4}}\text{ revolution (Right angle = } 90^\circ\text{)}$.
          </div>
          <div class="step">
            <strong>(d) From 12 to 9 (clockwise):</strong><br>
            Hours passed $= 9\text{ hours}$.<br>
            $\text{Fraction} = \frac{9}{12} = \mathbf{\frac{3}{4}}\text{ revolution (Reflex angle = } 270^\circ\text{)}$.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Rule statement: Hours / 12</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (a), (b), (c), (d) correct simplified fractions</span><span class="marking-marks">2.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch2-q3">
    <div class="q-head" onclick="toggleQ('c6m-ch2-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Where will the hand of a clock stop if it:<br>
      (a) Starts at 12 and makes $\frac{1}{2}$ of a revolution, clockwise?<br>
      (b) Starts at 2 and makes $\frac{1}{2}$ of a revolution, clockwise?<br>
      (c) Starts at 5 and makes $\frac{1}{4}$ of a revolution, clockwise?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Starts at 12, $\frac{1}{2}$ revolution:</strong><br>
            Hours moved $= \frac{1}{2} \times 12 = 6\text{ hours}$.<br>
            Starting at 12, moving 6 hours: $12 + 6 \implies$ the hand stops at <strong>6</strong>.
          </div>
          <div class="step">
            <strong>(b) Starts at 2, $\frac{1}{2}$ revolution:</strong><br>
            Hours moved $= \frac{1}{2} \times 12 = 6\text{ hours}$.<br>
            Starting at 2, moving 6 hours: $2 + 6 = 8 \implies$ the hand stops at <strong>8</strong>.
          </div>
          <div class="step">
            <strong>(c) Starts at 5, $\frac{1}{4}$ revolution:</strong><br>
            Hours moved $= \frac{1}{4} \times 12 = 3\text{ hours}$.<br>
            Starting at 5, moving 3 hours: $5 + 3 = 8 \implies$ the hand stops at <strong>8</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct position with calculation</span><span class="marking-marks">1 Mark each (Total 3 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch2-q4">
    <div class="q-head" onclick="toggleQ('c6m-ch2-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">In Figure 2.3, two lines $AB$ and $CD$ intersect at point $O$. If $\angle AOC = 50^\circ$, find the measures of $\angle BOD$, $\angle AOD$, and $\angle BOC$. Give reasons for each step.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="math-diagram-wrap" style="margin: 12px auto; text-align: center; max-width: 440px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 8px; padding: 12px;">
            <svg viewBox="0 0 360 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
              <!-- Line AB -->
              <line x1="30" y1="80" x2="330" y2="80" stroke="#1e293b" stroke-width="2.5"/>
              <text x="20" y="85" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">A</text>
              <text x="335" y="85" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">B</text>
              <!-- Line CD -->
              <line x1="100" y1="140" x2="260" y2="20" stroke="#1e293b" stroke-width="2.5"/>
              <text x="88" y="152" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">C</text>
              <text x="268" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b">D</text>
              <!-- Intersection O -->
              <circle cx="180" cy="80" r="4" fill="#dc2626"/>
              <text x="180" y="100" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#dc2626" text-anchor="middle">O</text>
              <!-- 50° angle label -->
              <text x="135" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#2563eb">50°</text>
            </svg>
            <div style="font-size: 0.8rem; font-weight: 600; color: #475569;">Figure 2.3: Intersecting Lines AB and CD with Vertically Opposite Angles</div>
          </div>
          <div class="step">
            <strong>Step 1: Vertically Opposite Angle:</strong><br>
            $\angle BOD$ and $\angle AOC$ are vertically opposite angles.<br>
            Since vertically opposite angles are equal:<br>
            $$\angle BOD = \angle AOC = \mathbf{50^\circ}$$
          </div>
          <div class="step">
            <strong>Step 2: Linear Pair with $\angle AOC$:</strong><br>
            $AB$ is a straight line, so ray $OC$ stands on it.<br>
            $\angle AOC + \angle BOC = 180^\circ$ (Linear pair property)<br>
            $50^\circ + \angle BOC = 180^\circ$<br>
            $$\angle BOC = 180^\circ - 50^\circ = \mathbf{130^\circ}$$
          </div>
          <div class="step">
            <strong>Step 3: Linear Pair or Vertically Opposite Angle for $\angle AOD$:</strong><br>
            $\angle AOD$ and $\angle BOC$ are vertically opposite angles.<br>
            $$\angle AOD = \angle BOC = \mathbf{130^\circ}$$
          </div>
          <p><strong>Final Answers:</strong> $\angle BOD = 50^\circ$, $\angle AOD = 130^\circ$, and $\angle BOC = 130^\circ$.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">∠BOD = 50° with "vertically opposite angles" justification</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">∠BOC = 130° using linear pair property (180° - 50°)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">∠AOD = 130° with proper geometrical reason</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Question -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Real-World Application)</div>
    <div class="q-text"><strong>Case Study: Ship Navigation Compass:</strong><br>
    A mariner's magnetic compass has four cardinal directions (North, South, East, West) and four intercardinal directions (NE, SE, SW, NW).<br>
    (a) A ship sails facing North. What angle does the ship turn through if it turns clockwise to face South-East (SE)? What type of angle is this?<br>
    (b) If the ship is initially facing West and turns anti-clockwise through $270^\circ$, in which direction is it now facing?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) North to South-East (Clockwise):</strong><br>
        - North to East $= 90^\circ$.<br>
        - East to South-East $= 45^\circ$.<br>
        - Total angle $= 90^\circ + 45^\circ = \mathbf{135^\circ}$.<br>
        Since $90^\circ &lt; 135^\circ &lt; 180^\circ$, it is an <strong>Obtuse Angle</strong>.</p>

        <p><strong>(b) West turning anti-clockwise through $270^\circ$:</strong><br>
        - West to South $= 90^\circ$ (anti-clockwise).<br>
        - South to East $= 90^\circ$ (cumulative $180^\circ$).<br>
        - East to North $= 90^\circ$ (cumulative $270^\circ$).<br>
        Therefore, after turning $270^\circ$ anti-clockwise from West, the ship is facing <strong>North</strong>.</p>
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 3: Number Play
const ch3Html = `<section class="chapter-section" id="ch3">
  <div class="chapter-header">
    <div class="ch-badge">3</div>
    <div class="chapter-header-info">
      <h2>Chapter 3: Number Play</h2>
      <p>NCERT Ganita Prakash (Class 6) — Place Value Systems, Large Numbers, Estimation, Properties of Operations &amp; Magic Squares | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Number Systems &amp; Arithmetic Properties</div>
    <ul class="concept-list">
      <li><strong>Indian Number System:</strong> Uses periods: Ones, Thousands, Lakhs, Crores. Commas are placed after 3 digits from the right, then after every 2 digits (e.g., $7,34,56,812$).</li>
      <li><strong>International Number System:</strong> Uses periods: Ones, Thousands, Millions, Billions. Commas are placed after every 3 digits from the right (e.g., $73,456,812$).</li>
      <li><strong>Conversion Fact:</strong> $1\text{ Million} = 10\text{ Lakhs} = 1,000,000$; $10\text{ Millions} = 1\text{ Crore}$; $1\text{ Billion} = 1,000\text{ Millions} = 100\text{ Crores}$.</li>
      <li><strong>Properties of Operations:</strong>
        <ul>
          <li><em>Commutative:</em> $a + b = b + a$ and $a \times b = b \times a$.</li>
          <li><em>Associative:</em> $(a + b) + c = a + (b + c)$ and $(a \times b) \times c = a \times (b \times c)$.</li>
          <li><em>Distributive Property:</em> $a \times (b + c) = a \times b + a \times c$.</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="ex-div">NCERT Exercise 3.1: Place Value Comparison &amp; Large Numbers</div>

  <div class="q-card" id="c6m-ch3-q1">
    <div class="q-head" onclick="toggleQ('c6m-ch3-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Insert commas suitably and write the number name according to:<br>
      (a) Indian System of Numeration for $87595762$<br>
      (b) International System of Numeration for $78921092$</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Indian System:</strong><br>
            Placing commas (3, 2, 2 rule):<br>
            $$\mathbf{8,75,95,762}$$
            <strong>Number Name:</strong> Eight crore seventy-five lakh ninety-five thousand seven hundred sixty-two.
          </div>
          <div class="step">
            <strong>(b) International System:</strong><br>
            Placing commas (groups of 3):<br>
            $$\mathbf{78,921,092}$$
            <strong>Number Name:</strong> Seventy-eight million nine hundred twenty-one thousand ninety-two.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (a): Correct commas (8,75,95,762) & number name</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (b): Correct commas (78,921,092) & number name</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch3-q2">
    <div class="q-head" onclick="toggleQ('c6m-ch3-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Find the value using suitable properties (distributive, associative or commutative):<br>
      (i) $738 \times 103$<br>
      (ii) $854 \times 102$<br>
      (iii) $258 \times 1008$</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><em>Property:</em> Distributive property of multiplication over addition: $a \times (b + c) = a \times b + a \times c$.</p>
          <div class="step">
            <strong>(i) $738 \times 103$:</strong><br>
            Write $103 = 100 + 3$:<br>
            $= 738 \times (100 + 3) = 738 \times 100 + 738 \times 3$<br>
            $= 73,800 + 2,214 = \mathbf{76,014}$.
          </div>
          <div class="step">
            <strong>(ii) $854 \times 102$:</strong><br>
            Write $102 = 100 + 2$:<br>
            $= 854 \times (100 + 2) = 854 \times 100 + 854 \times 2$<br>
            $= 85,400 + 1,708 = \mathbf{87,108}$.
          </div>
          <div class="step">
            <strong>(iii) $258 \times 1008$:</strong><br>
            Write $1008 = 1000 + 8$:<br>
            $= 258 \times (1000 + 8) = 258 \times 1000 + 258 \times 8$<br>
            $= 258,000 + 2,064 = \mathbf{260,064}$.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each part: Splitting number + applying distributive property + correct answer</span><span class="marking-marks">1 Mark each (3 Marks total)</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 480px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 360 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
      <text x="180" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">3 × 3 Magic Square: Constant Magic Sum = 15</text>
      <!-- Grid Lines -->
      <rect x="60" y="40" width="180" height="150" fill="#f8fafc" stroke="#334155" stroke-width="2.5" rx="4"/>
      <line x1="120" y1="40" x2="120" y2="190" stroke="#334155" stroke-width="2"/>
      <line x1="180" y1="40" x2="180" y2="190" stroke="#334155" stroke-width="2"/>
      <line x1="60" y1="90" x2="240" y2="90" stroke="#334155" stroke-width="2"/>
      <line x1="60" y1="140" x2="240" y2="140" stroke="#334155" stroke-width="2"/>
      <!-- Numbers -->
      <text x="90" y="72" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1d4ed8" text-anchor="middle">8</text>
      <text x="150" y="72" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1d4ed8" text-anchor="middle">1</text>
      <text x="210" y="72" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1d4ed8" text-anchor="middle">6</text>
      <text x="90" y="122" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1d4ed8" text-anchor="middle">3</text>
      <text x="150" y="122" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626" text-anchor="middle">5</text>
      <text x="210" y="122" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1d4ed8" text-anchor="middle">7</text>
      <text x="90" y="172" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1d4ed8" text-anchor="middle">4</text>
      <text x="150" y="172" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1d4ed8" text-anchor="middle">9</text>
      <text x="210" y="172" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1d4ed8" text-anchor="middle">2</text>
      <!-- Sum Labels -->
      <text x="270" y="72" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#059669">→ 15</text>
      <text x="270" y="122" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#059669">→ 15</text>
      <text x="270" y="172" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#059669">→ 15</text>
      <text x="90" y="204" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#059669" text-anchor="middle">↓15</text>
      <text x="150" y="204" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#059669" text-anchor="middle">↓15</text>
      <text x="210" y="204" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#059669" text-anchor="middle">↓15</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 3.1: 3 × 3 Magic Square: All Rows, Columns &amp; Diagonals Sum to 15</div>
  </div>

  <div class="ex-div">NCERT Exercise 3.2: Magic Squares &amp; Estimation</div>

  <div class="q-card" id="c6m-ch3-q3">
    <div class="q-head" onclick="toggleQ('c6m-ch3-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Verify that the square shown in Figure 3.1 is indeed a Magic Square by checking the sum of:<br>
      (a) All three rows.<br>
      (b) All three columns.<br>
      (c) Both main diagonals.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Row Sums:</strong><br>
            - $\text{Row } 1 = 8 + 1 + 6 = \mathbf{15}$<br>
            - $\text{Row } 2 = 3 + 5 + 7 = \mathbf{15}$<br>
            - $\text{Row } 3 = 4 + 9 + 2 = \mathbf{15}$
          </div>
          <div class="step">
            <strong>(b) Column Sums:</strong><br>
            - $\text{Column } 1 = 8 + 3 + 4 = \mathbf{15}$<br>
            - $\text{Column } 2 = 1 + 5 + 9 = \mathbf{15}$<br>
            - $\text{Column } 3 = 6 + 7 + 2 = \mathbf{15}$
          </div>
          <div class="step">
            <strong>(c) Diagonal Sums:</strong><br>
            - $\text{Main Diagonal } 1 = 8 + 5 + 2 = \mathbf{15}$<br>
            - $\text{Main Diagonal } 2 = 6 + 5 + 4 = \mathbf{15}$
          </div>
          <p><strong>Conclusion:</strong> Since the sum of each row, each column, and both diagonals is consistently <strong>15</strong>, it is a verified <strong>Magic Square</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (a): Checking all three rows (15 each)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (b): Checking all three columns (15 each)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (c): Checking both diagonals and concluding validity</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch3-q4">
    <div class="q-head" onclick="toggleQ('c6m-ch3-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Estimate the following products using general rule (rounding off to highest place value):<br>
      (i) $578 \times 161$<br>
      (ii) $5281 \times 3491$</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) $578 \times 161$:</strong><br>
            - Rounding $578$ to nearest hundred $\implies \mathbf{600}$ (since tens digit is 7 $\ge 5$).<br>
            - Rounding $161$ to nearest hundred $\implies \mathbf{200}$ (since tens digit is 6 $\ge 5$).<br>
            $$\text{Estimated Product} = 600 \times 200 = \mathbf{120,000}$$
          </div>
          <div class="step">
            <strong>(ii) $5281 \times 3491$:</strong><br>
            - Rounding $5281$ to nearest thousand $\implies \mathbf{5000}$ (hundreds digit is 2 &lt; 5).<br>
            - Rounding $3491$ to nearest thousand $\implies \mathbf{3000}$ (hundreds digit is 4 &lt; 5).<br>
            $$\text{Estimated Product} = 5000 \times 3000 = \mathbf{15,000,000}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Correct rounding and product 120,000</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Correct rounding and product 15,000,000</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Question -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Financial Literacy)</div>
    <div class="q-text"><strong>Case Study: Government Flood Relief Budget:</strong><br>
    The disaster management department allocated ₹$4,75,00,000$ for flood relief in an affected district. ₹$1,85,50,000$ was spent on medical kits and food supplies, and ₹$1,42,25,000$ was spent on temporary shelters.<br>
    (a) Express the total allocated budget in words according to the International System of Numeration.<br>
    (b) Calculate the total expenditure incurred.<br>
    (c) Find the remaining unspent amount in the relief fund.</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) International Numeration:</strong><br>
        ₹$4,75,00,000 = 47,500,000 \implies$ <strong>Forty-seven million five hundred thousand Rupees</strong>.</p>

        <p><strong>(b) Total Expenditure:</strong><br>
        $$\text{Total} = 1,85,50,000 + 1,42,25,000 = \mathbf{₹\,3,27,75,000}$$</p>

        <p><strong>(c) Remaining Amount:</strong><br>
        $$\text{Balance} = 4,75,00,000 - 3,27,75,000 = \mathbf{₹\,1,47,25,000}\text{ (One crore forty-seven lakh twenty-five thousand)}.$$</p>
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 4: Data Handling and Presentation
const ch4Html = `<section class="chapter-section" id="ch4">
  <div class="chapter-header">
    <div class="ch-badge">4</div>
    <div class="chapter-header-info">
      <h2>Chapter 4: Data Handling and Presentation</h2>
      <p>NCERT Ganita Prakash (Class 6) — Frequency Tally Marks, Pictographs with Scaling &amp; Single Bar Graphs Interpretation and Construction | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Statistical Concepts &amp; Graphical Representations</div>
    <ul class="concept-list">
      <li><strong>Data &amp; Tally Marks:</strong> Raw data is organized using tally marks. Groups of 5 are written as four vertical lines crossed by a diagonal line ($|\!|\!|\!|\!/$).</li>
      <li><strong>Pictograph:</strong> Represents data through pictures or symbols. A clear scale (key) must specify what each symbol stands for (e.g., $\bigstar = 10\text{ books}$).</li>
      <li><strong>Bar Graph:</strong> A visual display of categorical data using rectangular bars of uniform width and equal spaces between them. The height (or length) of each bar is proportional to its frequency.</li>
    </ul>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 580px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 520 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
      <text x="260" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Bar Graph: Weekly Sales of Books Across Subjects</text>
      <!-- Axes -->
      <line x1="70" y1="40" x2="70" y2="180" stroke="#334155" stroke-width="2"/>
      <line x1="70" y1="180" x2="490" y2="180" stroke="#334155" stroke-width="2"/>
      <!-- Y-axis ticks and labels (Scale: 1 unit = 10 books) -->
      <text x="55" y="184" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="end">0</text>
      <line x1="66" y1="150" x2="70" y2="150" stroke="#334155" stroke-width="1.5"/>
      <text x="55" y="154" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="end">20</text>
      <line x1="66" y1="120" x2="70" y2="120" stroke="#334155" stroke-width="1.5"/>
      <text x="55" y="124" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="end">40</text>
      <line x1="66" y1="90" x2="70" y2="90" stroke="#334155" stroke-width="1.5"/>
      <text x="55" y="94" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="end">60</text>
      <line x1="66" y1="60" x2="70" y2="60" stroke="#334155" stroke-width="1.5"/>
      <text x="55" y="64" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="end">80</text>

      <!-- Bars -->
      <!-- Maths: 70 books (height = 105px) -->
      <rect x="100" y="75" width="55" height="105" fill="#2563eb" rx="3"/>
      <text x="127" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">70</text>
      <text x="127" y="196" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">Maths</text>

      <!-- Science: 50 books (height = 75px) -->
      <rect x="195" y="105" width="55" height="75" fill="#16a34a" rx="3"/>
      <text x="222" y="98" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">50</text>
      <text x="222" y="196" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">Science</text>

      <!-- English: 60 books (height = 90px) -->
      <rect x="290" y="90" width="55" height="90" fill="#d97706" rx="3"/>
      <text x="317" y="83" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#d97706" text-anchor="middle">60</text>
      <text x="317" y="196" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">English</text>

      <!-- Hindi: 40 books (height = 60px) -->
      <rect x="385" y="120" width="55" height="60" fill="#8b5cf6" rx="3"/>
      <text x="412" y="113" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#8b5cf6" text-anchor="middle">40</text>
      <text x="412" y="196" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">Hindi</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 4.1: Vertical Bar Graph with Scale 1 Grid Unit = 20 Books</div>
  </div>

  <div class="ex-div">NCERT Exercise 4.1: Bar Graph Interpretation &amp; Analysis</div>

  <div class="q-card" id="c6m-ch4-q1">
    <div class="q-head" onclick="toggleQ('c6m-ch4-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Look at the bar graph in Figure 4.1 and answer the following questions:<br>
      (i) What information is depicted by this bar graph?<br>
      (ii) Which subject has the highest number of books sold, and how many?<br>
      (iii) Which subject has the lowest number of books sold?<br>
      (iv) What is the total number of books sold across all four subjects?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Information Depicted:</strong><br>
            The bar graph shows the weekly sales of books across four different subjects (Maths, Science, English, Hindi).
          </div>
          <div class="step">
            <strong>(ii) Highest Sales:</strong><br>
            <strong>Mathematics</strong> has the tallest bar with <strong>70 books sold</strong>.
          </div>
          <div class="step">
            <strong>(iii) Lowest Sales:</strong><br>
            <strong>Hindi</strong> has the shortest bar with <strong>40 books sold</strong>.
          </div>
          <div class="step">
            <strong>(iv) Total Books Sold:</strong><br>
            $$\text{Total} = 70 + 50 + 60 + 40 = \mathbf{220\text{ books}}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Stating the graph title/information</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Mathematics (70 books)</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (iii): Hindi (40 books)</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (iv): Summing 70 + 50 + 60 + 40 = 220 books</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="c6m-ch4-q2">
    <div class="q-head" onclick="toggleQ('c6m-ch4-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">In a survey of 30 students, the following data about their favorite sports was recorded:<br>
      Football: 8, Cricket: 12, Badminton: 6, Tennis: 4.<br>
      (i) Construct a frequency tally chart for the given data.<br>
      (ii) Which sport is most popular among students?<br>
      (iii) What fraction of total students prefer Cricket?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Frequency Tally Chart:</strong><br>
            <table style="width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 0.95rem;">
              <thead>
                <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                  <th style="padding: 8px; text-align: left;">Sport</th>
                  <th style="padding: 8px; text-align: left;">Tally Marks</th>
                  <th style="padding: 8px; text-align: center;">Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px;">Cricket</td>
                  <td style="padding: 8px; font-family: monospace;">||||/ ||||/ ||</td>
                  <td style="padding: 8px; text-align: center;">12</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px;">Football</td>
                  <td style="padding: 8px; font-family: monospace;">||||/ |||</td>
                  <td style="padding: 8px; text-align: center;">8</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px;">Badminton</td>
                  <td style="padding: 8px; font-family: monospace;">||||/ |</td>
                  <td style="padding: 8px; text-align: center;">6</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px;">Tennis</td>
                  <td style="padding: 8px; font-family: monospace;">||||</td>
                  <td style="padding: 8px; text-align: center;">4</td>
                </tr>
                <tr style="font-weight: bold; background: #fafafa;">
                  <td style="padding: 8px;">Total</td>
                  <td style="padding: 8px;">—</td>
                  <td style="padding: 8px; text-align: center;">30</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="step">
            <strong>(ii) Most Popular Sport:</strong><br>
            <strong>Cricket</strong> with the highest frequency of 12 students.
          </div>
          <div class="step">
            <strong>(iii) Fraction Preferring Cricket:</strong><br>
            $$\text{Fraction} = \frac{12}{30} = \mathbf{\frac{2}{5}}$$
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Accurate tally marks table</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Identifying Cricket as most popular</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (iii): Simplified fraction 12/30 = 2/5</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Question -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Data Analytics)</div>
    <div class="q-text"><strong>Case Study: Community Tree Plantation Drive:</strong><br>
    During an eco-club drive, students planted trees in a residential colony: Neem (45), Peepal (30), Gulmohar (60), Banyan (15).<br>
    (a) If a pictograph is drawn where 1 symbol 🌳 represents 15 trees, how many symbols are drawn for each tree species?<br>
    (b) What percentage of the total planted trees is Gulmohar?<br>
    (c) What is the ratio of Neem trees to Banyan trees in simplest form?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Pictograph Symbols (Scale: 1 🌳 = 15 trees):</strong><br>
        - Neem: $\frac{45}{15} = \mathbf{3\text{ symbols}}$<br>
        - Peepal: $\frac{30}{15} = \mathbf{2\text{ symbols}}$<br>
        - Gulmohar: $\frac{60}{15} = \mathbf{4\text{ symbols}}$<br>
        - Banyan: $\frac{15}{15} = \mathbf{1\text{ symbol}}$</p>

        <p><strong>(b) Percentage of Gulmohar Trees:</strong><br>
        $\text{Total trees} = 45 + 30 + 60 + 15 = 150$.<br>
        $$\text{Percentage} = \frac{60}{150} \times 100\% = \frac{2}{5} \times 100\% = \mathbf{40\%}$$</p>

        <p><strong>(c) Ratio of Neem to Banyan Trees:</strong><br>
        $$\text{Ratio} = \frac{45}{15} = \frac{3}{1} \implies \mathbf{3 : 1}$$</p>
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(dir, 'ch1.html'), ch1Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch2.html'), ch2Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch3.html'), ch3Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch4.html'), ch4Html, 'utf8');

console.log('Successfully generated Batch 1 (Ch 1 to Ch 4) with embedded diagrams, CBSE marking schemes, and CBQs!');
