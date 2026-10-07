const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c8m');

const ch13Html = `<section class="chapter-section" id="ch13">
  <div class="chapter-header">
    <div class="ch-badge">13</div>
    <div class="chapter-header-info">
      <h2>Chapter 13: Algebra Play</h2>
      <p>NCERT Ganita Prakash (Class 8 Part 2) — Linear Equations in One Variable, Cross-Multiplication, Word Problem Modelling &amp; Factorisation | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Algebraic Solving Techniques &amp; Factorisation Methods</div>
    <ul class="concept-list">
      <li><strong>Linear Equations in One Variable:</strong> An algebraic equation of degree 1 with only one variable, of the general form <code>ax + b = cx + d</code> (where <em>a ≠ c</em>).
        <ul>
          <li><strong>Transposition Protocol:</strong> Shifting terms across the equality sign changes their operational sign (+ becomes −, − becomes +, × becomes ÷, ÷ becomes ×).</li>
          <li><strong>Cross-Multiplication Method:</strong> For fractional equations of the form <code>(ax + b) / (cx + d) = m / n</code>, cross-multiply: <code>n(ax + b) = m(cx + d)</code>.</li>
        </ul>
      </li>
      <li><strong>Factorisation of Algebraic Expressions:</strong> Decomposing a polynomial into products of irreducible factors.
        <ul>
          <li><strong>Common Factor Method:</strong> Extract the Highest Common Factor (HCF) of all terms: <code>ka + kb = k(a + b)</code>.</li>
          <li><strong>Regrouping Method:</strong> Group terms in pairs sharing common binomial factors: <code>ax + ay + bx + by = a(x + y) + b(x + y) = (x + y)(a + b)</code>.</li>
          <li><strong>Using Identities:</strong>
            <ul>
              <li><code>a² + 2ab + b² = (a + b)²</code></li>
              <li><code>a² − 2ab + b² = (a − b)²</code></li>
              <li><code>a² − b² = (a + b)(a − b)</code></li>
            </ul>
          </li>
          <li><strong>Splitting the Middle Term:</strong> For quadratic trinomials <code>x² + px + q</code>, find two numbers <em>a</em> and <em>b</em> such that <code>a + b = p</code> and <code>ab = q</code>. Then <code>x² + px + q = (x + a)(x + b)</code>.</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- SVG Diagram 13: Visual Balance Scale of Linear Equation -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 200" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Algebraic Balance Paradigm: Preserving Equality Under Invariant Operations</text>
      
      <!-- Balance Stand -->
      <g transform="translate(270, 100)">
        <!-- Vertical Column -->
        <line x1="0" y1="0" x2="0" y2="70" stroke="#475569" stroke-width="4"/>
        <polygon points="0,0 -8,-10 8,-10" fill="#334155"/>
        <path d="M -30,70 L 30,70 L 20,80 L -20,80 Z" fill="#64748b"/>

        <!-- Horizontal Lever Beam -->
        <line x1="-180" y1="-10" x2="180" y2="-10" stroke="#0f172a" stroke-width="3"/>
        <circle cx="0" cy="-10" r="4" fill="#0f172a"/>

        <!-- Left Pan: 3x + 5 -->
        <line x1="-160" y1="-10" x2="-180" y2="35" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="-160" y1="-10" x2="-140" y2="35" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M -190,35 Q -160,50 -130,35 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <text x="-160" y="25" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1d4ed8" text-anchor="middle">LHS: 3x + 5</text>

        <!-- Right Pan: 2x + 12 -->
        <line x1="160" y1="-10" x2="140" y2="35" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="160" y1="-10" x2="180" y2="35" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M 130,35 Q 160,50 190,35 Z" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
        <text x="160" y="25" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#15803d" text-anchor="middle">RHS: 2x + 12</text>

        <!-- Dynamic Action Indicator -->
        <text x="0" y="45" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#2563eb" text-anchor="middle">Subtract 2x and 5 from both sides</text>
        <text x="0" y="62" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#0f172a" text-anchor="middle">x = 7</text>
      </g>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 13.1: The Mechanical Balance Principle Governing Linear Equation Invariance</div>
  </div>

  <div class="ex-div">NCERT Ganita Prakash: Figure It Out &amp; Comprehensive Exercises (100% Questions Solved)</div>

  <!-- Q1 -->
  <div class="q-card" id="c8m-ch13-q1">
    <div class="q-head" onclick="toggleQ('c8m-ch13-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Solve the following linear equations and check your results:<br>(i) 3x = 2x + 18<br>(ii) 5t − 3 = 3t − 5<br>(iii) 5x + 9 = 5 + 3x<br>(iv) 4z + 3 = 6 + 2z</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) 3x = 2x + 18:</strong><br>
            Transpose 2x to LHS: 3x − 2x = 18 ⇒ <strong>x = 18</strong>.<br>
            <em>Check:</em> LHS = 3(18) = 54. RHS = 2(18) + 18 = 36 + 18 = 54. Verified.<br><br>

            • <strong>(ii) 5t − 3 = 3t − 5:</strong><br>
            5t − 3t = −5 + 3<br>
            2t = −2 ⇒ <strong>t = −1</strong>.<br>
            <em>Check:</em> LHS = 5(−1) − 3 = −8. RHS = 3(−1) − 5 = −8. Verified.<br><br>

            • <strong>(iii) 5x + 9 = 5 + 3x:</strong><br>
            5x − 3x = 5 − 9<br>
            2x = −4 ⇒ <strong>x = −2</strong>.<br>
            <em>Check:</em> LHS = 5(−2) + 9 = −1. RHS = 5 + 3(−2) = −1. Verified.<br><br>

            • <strong>(iv) 4z + 3 = 6 + 2z:</strong><br>
            4z − 2z = 6 − 3<br>
            2z = 3 ⇒ <strong>z = 3/2</strong>.<br>
            <em>Check:</em> LHS = 4(3/2) + 3 = 6 + 3 = 9. RHS = 6 + 2(3/2) = 6 + 3 = 9. Verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Transposition method shown for all 4 equations</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Accurate roots: x = 18, t = −1, x = −2, z = 3/2</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c8m-ch13-q2">
    <div class="q-head" onclick="toggleQ('c8m-ch13-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Solve the linear equation: m − (m − 1)/2 = 1 − (m − 2)/3.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Multiply the entire equation by LCM of denominators 2 and 3, which is <strong>6</strong>:<br>
            6 × [m − (m − 1)/2] = 6 × [1 − (m − 2)/3]<br><br>
            2. Expanding carefully:<br>
            6m − 3(m − 1) = 6(1) − 2(m − 2)<br>
            6m − 3m + 3 = 6 − 2m + 4<br>
            3m + 3 = 10 − 2m<br><br>
            3. Transposing terms:<br>
            3m + 2m = 10 − 3<br>
            5m = 7<br>
            <strong>m = 7 / 5</strong>.<br><br>
            <em>Verification:</em><br>
            LHS = 7/5 − (7/5 − 1)/2 = 7/5 − (2/5)/2 = 7/5 − 1/5 = 6/5.<br>
            RHS = 1 − (7/5 − 2)/3 = 1 − (−3/5)/3 = 1 + 1/5 = 6/5. LHS = RHS.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Multiplying by LCM = 6 to clear fractions</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correctly solving 5m = 7 ⇒ m = 7/5</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c8m-ch13-q3">
    <div class="q-head" onclick="toggleQ('c8m-ch13-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Solve using cross-multiplication: (3y + 4) / (2 − 6y) = −2 / 5.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Cross-Multiplication Principle:</strong> If <code>P / Q = R / S</code>, then <code>P × S = Q × R</code>.</p>
          <div class="step">
            1. Cross-multiplying:<br>
            5 × (3y + 4) = −2 × (2 − 6y)<br><br>
            2. Expanding both sides:<br>
            15y + 20 = −4 + 12y<br><br>
            3. Transposing terms:<br>
            15y − 12y = −4 − 20<br>
            3y = −24<br>
            y = −24 / 3 = <strong>−8</strong>.<br><br>
            <em>Verification:</em><br>
            Numerator = 3(−8) + 4 = −24 + 4 = −20.<br>
            Denominator = 2 − 6(−8) = 2 + 48 = 50.<br>
            Ratio = −20 / 50 = −2/5. Verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Cross-multiplication: 5(3y + 4) = −2(2 − 6y)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Solving 3y = −24 ⇒ y = −8</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c8m-ch13-q4">
    <div class="q-head" onclick="toggleQ('c8m-ch13-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">The ages of Hari and Harry are in the ratio 5 : 7. Four years from now the ratio of their ages will be 3 : 4. Find their present ages.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Let the common ratio multiplier be <code>x</code>.<br>
            Present age of Hari = <code>5x</code> years.<br>
            Present age of Harry = <code>7x</code> years.<br><br>
            2. After 4 years:<br>
            Hari's age = <code>5x + 4</code>.<br>
            Harry's age = <code>7x + 4</code>.<br><br>
            3. According to the question, their ratio becomes 3 : 4:<br>
            (5x + 4) / (7x + 4) = 3 / 4<br><br>
            4. Cross-multiplying:<br>
            4(5x + 4) = 3(7x + 4)<br>
            20x + 16 = 21x + 12<br>
            16 − 12 = 21x − 20x<br>
            <strong>x = 4</strong>.<br><br>
            5. Present ages:<br>
            Hari's age = 5x = 5 × 4 = <strong>20 years</strong>.<br>
            Harry's age = 7x = 7 × 4 = <strong>28 years</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formulating (5x + 4)/(7x + 4) = 3/4</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Solving x = 4 and finding Hari = 20 yrs, Harry = 28 yrs</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c8m-ch13-q5">
    <div class="q-head" onclick="toggleQ('c8m-ch13-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">The denominator of a rational number is greater than its numerator by 8. If the numerator is increased by 17 and the denominator is decreased by 1, the number obtained is 3/2. Find the rational number.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Let the numerator of the rational number be <code>x</code>.<br>
            Then the denominator is <code>x + 8</code>.<br>
            Original rational number = <code>x / (x + 8)</code>.<br><br>
            2. According to the conditions:<br>
            New numerator = x + 17.<br>
            New denominator = (x + 8) − 1 = x + 7.<br>
            (x + 17) / (x + 7) = 3 / 2.<br><br>
            3. Cross-multiplying:<br>
            2(x + 17) = 3(x + 7)<br>
            2x + 34 = 3x + 21<br>
            34 − 21 = 3x − 2x<br>
            <strong>x = 13</strong>.<br><br>
            4. Therefore:<br>
            Numerator = 13.<br>
            Denominator = 13 + 8 = 21.<br>
            The required rational number is <strong>13 / 21</strong>.<br><br>
            <em>Check:</em> (13 + 17) / (21 − 1) = 30 / 20 = 3/2. Verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Setting up equation (x + 17)/(x + 7) = 3/2</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Solving x = 13 and original fraction = 13/21</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c8m-ch13-q6">
    <div class="q-head" onclick="toggleQ('c8m-ch13-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Deveshi has a total of ₹ 590 as currency notes in the denominations of ₹ 50, ₹ 20, and ₹ 10. The ratio of the number of ₹ 50 notes and ₹ 20 notes is 3 : 5. If she has a total of 25 notes, how many notes of each denomination does she have?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Let the number of ₹ 50 notes be <code>3x</code> and ₹ 20 notes be <code>5x</code>.<br>
            Total number of notes = 25.<br>
            Number of ₹ 10 notes = <code>25 − (3x + 5x) = 25 − 8x</code>.<br><br>
            2. Total value of the notes is ₹ 590:<br>
            Value = 50(3x) + 20(5x) + 10(25 − 8x)<br>
            590 = 150x + 100x + 250 − 80x<br>
            590 = 170x + 250<br><br>
            3. Solving for x:<br>
            170x = 590 − 250 = 340<br>
            x = 340 / 170 = <strong>2</strong>.<br><br>
            4. Number of notes of each denomination:<br>
            - Number of ₹ 50 notes = 3x = 3 × 2 = <strong>6 notes</strong>.<br>
            - Number of ₹ 20 notes = 5x = 5 × 2 = <strong>10 notes</strong>.<br>
            - Number of ₹ 10 notes = 25 − 8(2) = 25 − 16 = <strong>9 notes</strong>.<br><br>
            <em>Check:</em> 6(50) + 10(20) + 9(10) = 300 + 200 + 90 = ₹ 590. Verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formulating value equation: 170x + 250 = 590</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Count: 6 notes of ₹50, 10 of ₹20, 9 of ₹10</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c8m-ch13-q7">
    <div class="q-head" onclick="toggleQ('c8m-ch13-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Factorise the following expressions using common factors and grouping:<br>(i) 12a²b + 15ab²<br>(ii) 10x² − 18x³ + 14x⁴<br>(iii) z − 7 + 7xy − xyz<br>(iv) 15xy − 6x + 5y − 2</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) 12a²b + 15ab²:</strong><br>
            HCF of 12 and 15 is 3. HCF of a²b and ab² is ab.<br>
            Factoring 3ab: = <strong>3ab(4a + 5b)</strong>.<br><br>

            • <strong>(ii) 10x² − 18x³ + 14x⁴:</strong><br>
            HCF of coefficients = 2. HCF of powers of x = x².<br>
            Factoring 2x²: = <strong>2x²(5 − 9x + 7x²)</strong>.<br><br>

            • <strong>(iii) z − 7 + 7xy − xyz:</strong><br>
            Regrouping: (z − 7) − xy(z − 7)<br>
            Taking common binomial (z − 7): = <strong>(z − 7)(1 − xy)</strong>.<br><br>

            • <strong>(iv) 15xy − 6x + 5y − 2:</strong><br>
            Group first two and last two terms:<br>
            3x(5y − 2) + 1(5y − 2)<br>
            = <strong>(5y − 2)(3x + 1)</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">HCF extraction for (i) and (ii)</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Regrouping binomials for (iii) and (iv)</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c8m-ch13-q8">
    <div class="q-head" onclick="toggleQ('c8m-ch13-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">Factorise the following expressions using algebraic identities:<br>(i) 49y² + 84yz + 36z²<br>(ii) 4x² − 12xy + 9y²<br>(iii) 49x² − 36<br>(iv) (l + m)² − (l − m)²</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) 49y² + 84yz + 36z²:</strong><br>
            Notice: (7y)² + 2(7y)(6z) + (6z)². Matches <code>(a + b)²</code>.<br>
            = <strong>(7y + 6z)²</strong> (or (7y + 6z)(7y + 6z)).<br><br>

            • <strong>(ii) 4x² − 12xy + 9y²:</strong><br>
            Notice: (2x)² − 2(2x)(3y) + (3y)². Matches <code>(a − b)²</code>.<br>
            = <strong>(2x − 3y)²</strong>.<br><br>

            • <strong>(iii) 49x² − 36:</strong><br>
            Notice: (7x)² − 6². Matches <code>a² − b² = (a + b)(a − b)</code>.<br>
            = <strong>(7x + 6)(7x − 6)</strong>.<br><br>

            • <strong>(iv) (l + m)² − (l − m)²:</strong><br>
            Using <code>a² − b² = (a + b)(a − b)</code> where a = (l + m) and b = (l − m):<br>
            = [(l + m) + (l − m)] × [(l + m) − (l − m)]<br>
            = (2l) × (2m) = <strong>4lm</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Applying (a + b)², (a − b)², and a² − b²</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Accurate factored products for all 4 parts</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c8m-ch13-q9">
    <div class="q-head" onclick="toggleQ('c8m-ch13-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">Factorise the quadratic trinomials by splitting the middle term:<br>(i) p² + 6p + 8<br>(ii) q² − 10q + 21<br>(iii) p² + 6p − 16<br>(iv) x² − 2x − 15</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Rule:</strong> To factorise <code>x² + bx + c</code>, find two numbers whose sum is <em>b</em> and product is <em>c</em>.</p>
          <div class="step">
            • <strong>(i) p² + 6p + 8:</strong><br>
            Sum = 6, Product = 8. The numbers are 4 and 2.<br>
            = p² + 4p + 2p + 8 = p(p + 4) + 2(p + 4) = <strong>(p + 4)(p + 2)</strong>.<br><br>

            • <strong>(ii) q² − 10q + 21:</strong><br>
            Sum = −10, Product = 21. The numbers are −7 and −3.<br>
            = q² − 7q − 3q + 21 = q(q − 7) − 3(q − 7) = <strong>(q − 7)(q − 3)</strong>.<br><br>

            • <strong>(iii) p² + 6p − 16:</strong><br>
            Sum = 6, Product = −16. The numbers are 8 and −2.<br>
            = p² + 8p − 2p − 16 = p(p + 8) − 2(p + 8) = <strong>(p + 8)(p − 2)</strong>.<br><br>

            • <strong>(iv) x² − 2x − 15:</strong><br>
            Sum = −2, Product = −15. The numbers are −5 and 3.<br>
            = x² − 5x + 3x − 15 = x(x − 5) + 3(x − 5) = <strong>(x − 5)(x + 3)</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Splitting middle terms based on sum/product pairs</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Correct binomial factors for all 4 trinomials</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c8m-ch13-q10">
    <div class="q-head" onclick="toggleQ('c8m-ch13-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">Divide the polynomial by the given binomial:<br>(i) (y² + 7y + 10) ÷ (y + 5)<br>(ii) (m² − 14m − 32) ÷ (m + 2)<br>(iii) 5pq(p² − q²) ÷ 2p(p + q)</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) (y² + 7y + 10) ÷ (y + 5):</strong><br>
            Factorise numerator: y² + 7y + 10 = (y + 2)(y + 5).<br>
            Division = [(y + 2)(y + 5)] / (y + 5) = <strong>y + 2</strong>.<br><br>

            • <strong>(ii) (m² − 14m − 32) ÷ (m + 2):</strong><br>
            Factorise numerator: Sum = −14, Product = −32 (numbers −16 and 2).<br>
            m² − 14m − 32 = (m − 16)(m + 2).<br>
            Division = [(m − 16)(m + 2)] / (m + 2) = <strong>m − 16</strong>.<br><br>

            • <strong>(iii) 5pq(p² − q²) ÷ 2p(p + q):</strong><br>
            Factorise (p² − q²) = (p − q)(p + q).<br>
            Division = [5pq(p − q)(p + q)] / [2p(p + q)].<br>
            Cancelling common factor p(p + q):<br>
            = <strong>5/2 q(p − q)</strong> (or 2.5q(p − q)).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Factorising numerators before cancellation</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Accurate quotients: (y + 2), (m − 16), 5/2 q(p − q)</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q11 -->
  <div class="q-card" id="c8m-ch13-q11">
    <div class="q-head" onclick="toggleQ('c8m-ch13-q11')">
      <div class="q-num">Q11</div>
      <div class="q-text">Find and correct the errors in the following mathematical statements:<br>(i) 4(x − 5) = 4x − 5<br>(ii) (2x)² + 4(2x) + 7 = 2x² + 8x + 7<br>(iii) (3x + 2)² = 9x² + 4</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) In 4(x − 5) = 4x − 5:</strong><br>
            Error: The factor 4 was not distributed to the second term −5.<br>
            Correct statement: <code>4(x − 5) = 4x − 20</code>.<br><br>

            • <strong>(ii) In (2x)² + 4(2x) + 7 = 2x² + 8x + 7:</strong><br>
            Error: In (2x)², the coefficient 2 was not squared.<br>
            (2x)² = 2² × x² = 4x².<br>
            Correct statement: <code>(2x)² + 4(2x) + 7 = 4x² + 8x + 7</code>.<br><br>

            • <strong>(iii) In (3x + 2)² = 9x² + 4:</strong><br>
            Error: The middle term 2ab was completely omitted.<br>
            Using Identity I: (3x + 2)² = (3x)² + 2(3x)(2) + 2² = 9x² + 12x + 4.<br>
            Correct statement: <code>(3x + 2)² = 9x² + 12x + 4</code>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identifying exact conceptual error for each statement</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Providing corrected algebraic identities</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q12 -->
  <div class="q-card" id="c8m-ch13-q12">
    <div class="q-head" onclick="toggleQ('c8m-ch13-q12')">
      <div class="q-num">Q12</div>
      <div class="q-text">Sum of the digits of a two-digit number is 9. When we interchange the digits, it is found that the resulting new number is greater than the original number by 27. What is the two-digit number?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Let the units digit be <code>x</code>.<br>
            Since sum of digits is 9, tens digit = <code>9 − x</code>.<br>
            Original number = 10(tens digit) + units digit<br>
            = 10(9 − x) + x = 90 − 10x + x = <strong>90 − 9x</strong>.<br><br>
            2. On interchanging digits:<br>
            New units digit = 9 − x, New tens digit = x.<br>
            New number = 10x + (9 − x) = <strong>9x + 9</strong>.<br><br>
            3. Given: (New Number) − (Original Number) = 27<br>
            (9x + 9) − (90 − 9x) = 27<br>
            9x + 9 − 90 + 9x = 27<br>
            18x − 81 = 27<br>
            18x = 27 + 81 = 108<br>
            x = 108 / 18 = <strong>6</strong>.<br><br>
            4. Therefore:<br>
            Units digit x = 6.<br>
            Tens digit = 9 − 6 = 3.<br>
            The original number is <strong>36</strong>.<br><br>
            <em>Verification:</em> Reversal = 63. Difference = 63 − 36 = 27. Sum of digits = 3 + 6 = 9. Verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Expressing original number as 90 − 9x and reversed as 9x + 9</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Solving 18x = 108 ⇒ x = 6 and number = 36</span><span class="marking-marks">1.5 Marks</span></div>
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
      <strong>Context — Sustainable Craft Micro-Enterprise Financial Model:</strong> A self-help cooperative manufactures handmade jute shopping bags. The fixed monthly operational expense (rent, electricity, machinery depreciation) is ₹ 12,000. Each bag incurs a variable material and artisan labor cost of ₹ 60.<br>
      The cooperative retails the finished bags at a uniform price of ₹ 140 per bag.<br><br>
      (a) Formulate an algebraic expression for the Total Production Cost <code>C(x)</code> and Total Revenue <code>R(x)</code> when <code>x</code> bags are manufactured and sold.<br>
      (b) Set up and solve a linear equation in one variable to determine the Break-Even Volume (the number of bags that must be sold to cover all expenses exactly).<br>
      (c) How many bags must be sold in a festive month to generate a net profit of ₹ 20,000?
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Cost and Revenue Functions:</strong><br>
        - Total Cost: <code>C(x) = 12000 + 60x</code> (in ₹).<br>
        - Total Revenue: <code>R(x) = 140x</code> (in ₹).</p>

        <p><strong>(b) Break-Even Volume Equation:</strong><br>
        At break-even: Total Revenue = Total Cost.<br>
        140x = 12000 + 60x<br>
        140x − 60x = 12000<br>
        80x = 12000<br>
        x = 12000 / 80 = <strong>150 bags</strong>.<br>
        The cooperative must produce and sell at least <strong>150 bags</strong> to break even.</p>

        <p><strong>(c) Production Volume for ₹ 20,000 Profit:</strong><br>
        Profit = Revenue − Cost = 140x − (12000 + 60x) = <code>80x − 12000</code>.<br>
        80x − 12000 = 20000<br>
        80x = 32000<br>
        x = 32000 / 80 = <strong>400 bags</strong>.<br>
        Selling <strong>400 bags</strong> yields exactly ₹ 20,000 net profit.</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch13.html'), ch13Html, 'utf8');
console.log('Chapter 13 successfully written with 12 questions + CBQ.');
