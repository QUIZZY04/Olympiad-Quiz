const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c8m');

const ch2Html = `<section class="chapter-section" id="ch2">
  <div class="chapter-header">
    <div class="ch-badge">2</div>
    <div class="chapter-header-info">
      <h2>Chapter 2: Linear Equations in One Variable</h2>
      <p>NCERT Exercises 2.1 &amp; 2.2 — Complete Solutions as per CBSE Marking Scheme 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Concepts &amp; Solving Techniques</div>
    <ul class="concept-list">
      <li><strong>Linear Equation in One Variable:</strong> An algebraic equation where the highest power (degree) of the variable is 1, of the general form <span class="math">ax + b = c</span> or <span class="math">ax + b = cx + d</span> (where <span class="math">a \\neq 0</span>).</li>
      <li><strong>Transposition Method:</strong> Any term can be moved from one side of an equation to the other by changing its sign:
        <ul>
          <li><span class="math">+</span> becomes <span class="math">-</span> on transposition, and vice versa.</li>
          <li>Multiplication (<span class="math">\\times</span>) becomes division (<span class="math">\\div</span>) on transposition, and vice versa.</li>
        </ul>
      </li>
      <li><strong>Equations with Variables on Both Sides:</strong> Collect all variable terms on LHS and constant terms on RHS using transposition.</li>
      <li><strong>Reducing Equations to Simpler Form:</strong> Multiply both sides of the equation by the LCM of all denominators to eliminate fractional coefficients.</li>
      <li><strong>Cross-Multiplication Method:</strong> For equations of the form <span class="math">\\frac{ax + b}{cx + d} = \\frac{m}{n}</span>, cross-multiply: <span class="math">n(ax + b) = m(cx + d)</span>.</li>
    </ul>
  </div>

  <!-- EXERCISE 2.1 -->
  <div class="ex-div">NCERT Exercise 2.1</div>

  <div class="q-card" id="q2_1_1">
    <div class="q-head" onclick="toggleQ('q2_1_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Solve the equation and check your result: <span class="math">3x = 2x + 18</span></div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>Given:</strong> <span class="math">3x = 2x + 18</span><br>
            Transposing <span class="math">2x</span> to LHS:<br>
            <span class="math">3x - 2x = 18</span><br>
            <span class="math"><strong>x = 18</strong></span>
          </div>
          <div class="step">
            <strong>Check / Verification:</strong><br>
            <span class="math">\\text{LHS} = 3x = 3(18) = 54</span><br>
            <span class="math">\\text{RHS} = 2x + 18 = 2(18) + 18 = 36 + 18 = 54</span><br>
            Since <span class="math">\\text{LHS} = \\text{RHS}</span>, the solution <span class="math">x = 18</span> is correct.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Transposition and finding x = 18</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Verification of LHS and RHS</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_1_2">
    <div class="q-head" onclick="toggleQ('q2_1_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Solve the equation and check your result: <span class="math">5t - 3 = 3t - 5</span></div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>Given:</strong> <span class="math">5t - 3 = 3t - 5</span><br>
            Transposing <span class="math">3t</span> to LHS and <span class="math">-3</span> to RHS:<br>
            <span class="math">5t - 3t = -5 + 3</span><br>
            <span class="math">2t = -2</span><br>
            <span class="math">t = \\frac{-2}{2} = <strong>-1</strong></span>
          </div>
          <div class="step">
            <strong>Check / Verification:</strong><br>
            <span class="math">\\text{LHS} = 5(-1) - 3 = -5 - 3 = -8</span><br>
            <span class="math">\\text{RHS} = 3(-1) - 5 = -3 - 5 = -8</span><br>
            Since <span class="math">\\text{LHS} = \\text{RHS} = -8</span>, verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Solving for t = -1</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Verification showing LHS = RHS = -8</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_1_3">
    <div class="q-head" onclick="toggleQ('q2_1_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Solve the equation and check your result: <span class="math">5x + 9 = 5 + 3x</span></div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>Given:</strong> <span class="math">5x + 9 = 5 + 3x</span><br>
            Transposing <span class="math">3x</span> to LHS and <span class="math">9</span> to RHS:<br>
            <span class="math">5x - 3x = 5 - 9</span><br>
            <span class="math">2x = -4</span><br>
            <span class="math">x = \\frac{-4}{2} = <strong>-2</strong></span>
          </div>
          <div class="step">
            <strong>Check:</strong><br>
            <span class="math">\\text{LHS} = 5(-2) + 9 = -10 + 9 = -1</span><br>
            <span class="math">\\text{RHS} = 5 + 3(-2) = 5 - 6 = -1</span><br>
            <span class="math">\\text{LHS} = \\text{RHS}</span>. Verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Finding x = -2</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Verification step</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_1_4">
    <div class="q-head" onclick="toggleQ('q2_1_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Solve the equation and check your result: <span class="math">4z + 3 = 6 + 2z</span></div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>Given:</strong> <span class="math">4z + 3 = 6 + 2z</span><br>
            Transposing <span class="math">2z</span> to LHS and <span class="math">3</span> to RHS:<br>
            <span class="math">4z - 2z = 6 - 3</span><br>
            <span class="math">2z = 3 \\implies <strong>z = \\frac{3}{2}</strong></span>
          </div>
          <div class="step">
            <strong>Check:</strong><br>
            <span class="math">\\text{LHS} = 4\\left(\\frac{3}{2}\\right) + 3 = 2(3) + 3 = 6 + 3 = 9</span><br>
            <span class="math">\\text{RHS} = 6 + 2\\left(\\frac{3}{2}\\right) = 6 + 3 = 9</span><br>
            <span class="math">\\text{LHS} = \\text{RHS} = 9</span>. Verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Solution z = 3/2</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Verification step</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_1_5">
    <div class="q-head" onclick="toggleQ('q2_1_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Solve the equation and check your result: <span class="math">2x - 1 = 14 - x</span></div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <span class="math">2x - 1 = 14 - x</span><br>
            Transposing <span class="math">-x</span> to LHS and <span class="math">-1</span> to RHS:<br>
            <span class="math">2x + x = 14 + 1</span><br>
            <span class="math">3x = 15 \\implies <strong>x = 5</strong></span>
          </div>
          <div class="step">
            <strong>Check:</strong><br>
            <span class="math">\\text{LHS} = 2(5) - 1 = 10 - 1 = 9</span><br>
            <span class="math">\\text{RHS} = 14 - 5 = 9</span><br>
            <span class="math">\\text{LHS} = \\text{RHS}</span>. Verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">x = 5 solution</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Verification</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_1_6">
    <div class="q-head" onclick="toggleQ('q2_1_6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Solve the equation and check your result: <span class="math">8x + 4 = 3(x - 1) + 7</span></div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Expand the bracket on RHS:<br>
            <span class="math">8x + 4 = 3x - 3 + 7</span><br>
            <span class="math">8x + 4 = 3x + 4</span><br>
            Transposing <span class="math">3x</span> to LHS and <span class="math">4</span> to RHS:<br>
            <span class="math">8x - 3x = 4 - 4</span><br>
            <span class="math">5x = 0 \\implies <strong>x = 0</strong></span>
          </div>
          <div class="step">
            <strong>Check:</strong><br>
            <span class="math">\\text{LHS} = 8(0) + 4 = 4</span><br>
            <span class="math">\\text{RHS} = 3(0 - 1) + 7 = 3(-1) + 7 = -3 + 7 = 4</span><br>
            <span class="math">\\text{LHS} = \\text{RHS}</span>. Verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Expansion and finding x = 0</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Verification LHS = RHS = 4</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_1_7">
    <div class="q-head" onclick="toggleQ('q2_1_7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Solve the equation and check your result: <span class="math">x = \\frac{4}{5}(x + 10)</span></div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Multiply both sides by 5 to clear denominator:<br>
            <span class="math">5x = 4(x + 10)</span><br>
            <span class="math">5x = 4x + 40</span><br>
            Transposing <span class="math">4x</span> to LHS:<br>
            <span class="math">5x - 4x = 40 \\implies <strong>x = 40</strong></span>
          </div>
          <div class="step">
            <strong>Check:</strong><br>
            <span class="math">\\text{LHS} = 40</span><br>
            <span class="math">\\text{RHS} = \\frac{4}{5}(40 + 10) = \\frac{4}{5}(50) = 4 \\times 10 = 40</span><br>
            <span class="math">\\text{LHS} = \\text{RHS}</span>. Verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Multiplying by 5 and solving x = 40</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Verification step</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_1_8">
    <div class="q-head" onclick="toggleQ('q2_1_8')">
      <div class="q-num">Q8</div>
      <div class="q-text">Solve the equation and check your result: <span class="math">\\frac{2x}{3} + 1 = \\frac{7x}{15} + 3</span></div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Transposing <span class="math">\\frac{7x}{15}</span> to LHS and <span class="math">1</span> to RHS:<br>
            <span class="math">\\frac{2x}{3} - \\frac{7x}{15} = 3 - 1</span><br>
            LCM of 3 and 15 is 15:<br>
            <span class="math">\\frac{10x - 7x}{15} = 2 \\implies \\frac{3x}{15} = 2 \\implies \\frac{x}{5} = 2 \\implies <strong>x = 10</strong></span>
          </div>
          <div class="step">
            <strong>Check:</strong><br>
            <span class="math">\\text{LHS} = \\frac{2(10)}{3} + 1 = \\frac{20}{3} + \\frac{3}{3} = \\frac{23}{3}</span><br>
            <span class="math">\\text{RHS} = \\frac{7(10)}{15} + 3 = \\frac{14}{3} + 3 = \\frac{14 + 9}{3} = \\frac{23}{3}</span><br>
            <span class="math">\\text{LHS} = \\text{RHS}</span>. Verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">LCM and solving x = 10</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Verification LHS = RHS = 23/3</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_1_9">
    <div class="q-head" onclick="toggleQ('q2_1_9')">
      <div class="q-num">Q9</div>
      <div class="q-text">Solve the equation and check your result: <span class="math">2y + \\frac{5}{3} = \\frac{26}{3} - y</span></div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Transposing <span class="math">-y</span> to LHS and <span class="math">\\frac{5}{3}</span> to RHS:<br>
            <span class="math">2y + y = \\frac{26}{3} - \\frac{5}{3}</span><br>
            <span class="math">3y = \\frac{21}{3} = 7 \\implies <strong>y = \\frac{7}{3}</strong></span>
          </div>
          <div class="step">
            <strong>Check:</strong><br>
            <span class="math">\\text{LHS} = 2\\left(\\frac{7}{3}\\right) + \\frac{5}{3} = \\frac{14 + 5}{3} = \\frac{19}{3}</span><br>
            <span class="math">\\text{RHS} = \\frac{26}{3} - \\frac{7}{3} = \\frac{19}{3}</span><br>
            <span class="math">\\text{LHS} = \\text{RHS}</span>. Verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Solving y = 7/3</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Verification step</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_1_10">
    <div class="q-head" onclick="toggleQ('q2_1_10')">
      <div class="q-num">Q10</div>
      <div class="q-text">Solve the equation and check your result: <span class="math">3m = 5m - \\frac{8}{5}</span></div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Transposing <span class="math">5m</span> to LHS:<br>
            <span class="math">3m - 5m = -\\frac{8}{5}</span><br>
            <span class="math">-2m = -\\frac{8}{5}</span><br>
            Divide both sides by <span class="math">-2</span>:<br>
            <span class="math">m = \\frac{-8}{5 \\times (-2)} = <strong>\\frac{4}{5}</strong></span>
          </div>
          <div class="step">
            <strong>Check:</strong><br>
            <span class="math">\\text{LHS} = 3\\left(\\frac{4}{5}\\right) = \\frac{12}{5}</span><br>
            <span class="math">\\text{RHS} = 5\\left(\\frac{4}{5}\\right) - \\frac{8}{5} = 4 - \\frac{8}{5} = \\frac{20 - 8}{5} = \\frac{12}{5}</span><br>
            <span class="math">\\text{LHS} = \\text{RHS}</span>. Verified.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Solving m = 4/5</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Verification step</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- EXERCISE 2.2 -->
  <div class="ex-div">NCERT Exercise 2.2</div>

  <div class="q-card" id="q2_2_1">
    <div class="q-head" onclick="toggleQ('q2_2_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Solve the linear equation: <span class="math">\\frac{x}{2} - \\frac{1}{5} = \\frac{x}{3} + \\frac{1}{4}</span></div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Transposing variable terms to LHS and constant terms to RHS:<br>
            <span class="math">\\frac{x}{2} - \\frac{x}{3} = \\frac{1}{4} + \\frac{1}{5}</span>
          </div>
          <div class="step">
            LCM of 2 and 3 is 6; LCM of 4 and 5 is 20:<br>
            <span class="math">\\frac{3x - 2x}{6} = \\frac{5 + 4}{20}</span><br>
            <span class="math">\\frac{x}{6} = \\frac{9}{20}</span>
          </div>
          <div class="step">
            Multiply both sides by 6:<br>
            <span class="math">x = \\frac{9 \\times 6}{20} = \\frac{54}{20} = <strong>\\frac{27}{10}</strong></span> (or <span class="math">2.7</span>).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Separation of variables and constants</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">LCM simplifications on both sides</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Final answer x = 27/10</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_2_2">
    <div class="q-head" onclick="toggleQ('q2_2_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Solve the linear equation: <span class="math">\\frac{n}{2} - \\frac{3n}{4} + \\frac{5n}{6} = 21</span></div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Find the LCM of the denominators 2, 4, and 6:<br>
            LCM(2, 4, 6) = 12.
          </div>
          <div class="step">
            Express all terms with common denominator 12:<br>
            <span class="math">\\frac{6n - 9n + 10n}{12} = 21</span><br>
            <span class="math">\\frac{7n}{12} = 21</span>
          </div>
          <div class="step">
            Solve for <span class="math">n</span>:<br>
            <span class="math">7n = 21 \\times 12</span><br>
            <span class="math">n = \\frac{21 \\times 12}{7} = 3 \\times 12 = <strong>36</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">LCM determination and common numerator</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Correct evaluation to n = 36</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_2_3">
    <div class="q-head" onclick="toggleQ('q2_2_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Solve: <span class="math">x + 7 - \\frac{8x}{3} = \\frac{17}{6} - \\frac{5x}{2}</span></div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Transposing variable terms to LHS and constants to RHS:<br>
            <span class="math">x - \\frac{8x}{3} + \\frac{5x}{2} = \\frac{17}{6} - 7</span>
          </div>
          <div class="step">
            LCM of denominators on LHS (1, 3, 2) is 6; on RHS (6, 1) is 6:<br>
            <span class="math">\\frac{6x - 16x + 15x}{6} = \\frac{17 - 42}{6}</span><br>
            <span class="math">\\frac{5x}{6} = \\frac{-25}{6}</span>
          </div>
          <div class="step">
            Multiply both sides by 6:<br>
            <span class="math">5x = -25 \\implies x = \\frac{-25}{5} = <strong>-5</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Grouping terms and finding LCM = 6</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Simplification and answer x = -5</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_2_4">
    <div class="q-head" onclick="toggleQ('q2_2_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Solve: <span class="math">\\frac{x - 5}{3} = \\frac{x - 3}{5}</span></div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Apply cross-multiplication:<br>
            <span class="math">5(x - 5) = 3(x - 3)</span>
          </div>
          <div class="step">
            Expand the brackets:<br>
            <span class="math">5x - 25 = 3x - 9</span>
          </div>
          <div class="step">
            Transposing <span class="math">3x</span> to LHS and <span class="math">-25</span> to RHS:<br>
            <span class="math">5x - 3x = -9 + 25</span><br>
            <span class="math">2x = 16 \\implies <strong>x = 8</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Cross-multiplication correctly set up</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Solving to get x = 8</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_2_5">
    <div class="q-head" onclick="toggleQ('q2_2_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Solve: <span class="math">\\frac{3t - 2}{4} - \\frac{2t + 3}{3} = \\frac{2}{3} - t</span></div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Transposing <span class="math">-t</span> to LHS:<br>
            <span class="math">\\frac{3t - 2}{4} - \\frac{2t + 3}{3} + t = \\frac{2}{3}</span>
          </div>
          <div class="step">
            LCM of 4, 3, 1 is 12:<br>
            <span class="math">\\frac{3(3t - 2) - 4(2t + 3) + 12t}{12} = \\frac{2}{3}</span><br>
            <span class="math">\\frac{9t - 6 - 8t - 12 + 12t}{12} = \\frac{2}{3}</span><br>
            <span class="math">\\frac{13t - 18}{12} = \\frac{2}{3}</span>
          </div>
          <div class="step">
            Multiply both sides by 12:<br>
            <span class="math">13t - 18 = \\frac{2}{3} \\times 12 = 8</span><br>
            <span class="math">13t = 8 + 18 = 26 \\implies t = \\frac{26}{13} = <strong>2</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Combining over LCM 12 with correct sign handling</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Simplification and solving t = 2</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_2_6">
    <div class="q-head" onclick="toggleQ('q2_2_6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Solve: <span class="math">m - \\frac{m - 1}{2} = 1 - \\frac{m - 2}{3}</span></div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Transposing variable term from RHS to LHS:<br>
            <span class="math">m - \\frac{m - 1}{2} + \\frac{m - 2}{3} = 1</span>
          </div>
          <div class="step">
            LCM of 1, 2, 3 is 6:<br>
            <span class="math">\\frac{6m - 3(m - 1) + 2(m - 2)}{6} = 1</span><br>
            <span class="math">\\frac{6m - 3m + 3 + 2m - 4}{6} = 1</span><br>
            <span class="math">\\frac{5m - 1}{6} = 1</span>
          </div>
          <div class="step">
            Cross-multiply by 6:<br>
            <span class="math">5m - 1 = 6 \\implies 5m = 7 \\implies <strong>m = \\frac{7}{5}</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Common denominator 6 with bracket expansions</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Final answer m = 7/5</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_2_7">
    <div class="q-head" onclick="toggleQ('q2_2_7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Simplify and solve: <span class="math">3(t - 3) = 5(2t + 1)</span></div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Expand both sides:<br>
            <span class="math">3t - 9 = 10t + 5</span>
          </div>
          <div class="step">
            Transposing <span class="math">10t</span> to LHS and <span class="math">-9</span> to RHS:<br>
            <span class="math">3t - 10t = 5 + 9</span><br>
            <span class="math">-7t = 14 \\implies t = \\frac{14}{-7} = <strong>-2</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Brackets expansion</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Solving to get t = -2</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_2_8">
    <div class="q-head" onclick="toggleQ('q2_2_8')">
      <div class="q-num">Q8</div>
      <div class="q-text">Simplify and solve: <span class="math">15(y - 4) - 2(y - 9) + 5(y + 6) = 0</span></div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Expand all terms carefully:<br>
            <span class="math">15y - 60 - 2y + 18 + 5y + 30 = 0</span>
          </div>
          <div class="step">
            Combine like terms:<br>
            <span class="math">(15y - 2y + 5y) + (-60 + 18 + 30) = 0</span><br>
            <span class="math">18y - 12 = 0</span>
          </div>
          <div class="step">
            Transposing <span class="math">-12</span>:<br>
            <span class="math">18y = 12 \\implies y = \\frac{12}{18} = <strong>\\frac{2}{3}</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct expansion of all brackets</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Combining like terms (18y - 12 = 0)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Final answer y = 2/3</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_2_9">
    <div class="q-head" onclick="toggleQ('q2_2_9')">
      <div class="q-num">Q9</div>
      <div class="q-text">Simplify and solve: <span class="math">3(5z - 7) - 2(9z - 11) = 4(8z - 13) - 17</span></div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Expand both LHS and RHS:<br>
            <span class="math">15z - 21 - 18z + 22 = 32z - 52 - 17</span><br>
            <span class="math">-3z + 1 = 32z - 69</span>
          </div>
          <div class="step">
            Transposing terms:<br>
            <span class="math">-3z - 32z = -69 - 1</span><br>
            <span class="math">-35z = -70</span><br>
            <span class="math">z = \\frac{-70}{-35} = <strong>2</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Expansion on both sides</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Solving z = 2</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q2_2_10">
    <div class="q-head" onclick="toggleQ('q2_2_10')">
      <div class="q-num">Q10</div>
      <div class="q-text">Solve: <span class="math">0.25(4f - 3) = 0.05(10f - 9)</span></div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <em>Method 1 (Multiply by 100 to eliminate decimals):</em><br>
            <span class="math">100 \\times 0.25(4f - 3) = 100 \\times 0.05(10f - 9)</span><br>
            <span class="math">25(4f - 3) = 5(10f - 9)</span>
          </div>
          <div class="step">
            Divide both sides by 5:<br>
            <span class="math">5(4f - 3) = 10f - 9</span><br>
            <span class="math">20f - 15 = 10f - 9</span>
          </div>
          <div class="step">
            Transposing terms:<br>
            <span class="math">20f - 10f = -9 + 15</span><br>
            <span class="math">10f = 6 \\implies f = \\frac{6}{10} = <strong>0.6</strong></span> (or <span class="math">\\frac{3}{5}</span>).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Multiplying by 100 or decimal expansion</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Transposition of terms</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Final answer f = 0.6 (or 3/5)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ SECTION -->
  <div class="cbq-section">
    <div class="cbq-header">
      <span>🎯 Competency-Based Questions (CBQ) &amp; HOTS</span>
      <span class="cbq-badge">CBSE Board Exam Pattern</span>
    </div>
    <div class="cbq-body">
      <div class="cbq-card">
        <div class="cbq-type" style="color:#4f46e5;">Case Study: Age Problems</div>
        <div class="cbq-question"><strong>Scenario:</strong> Aman's age is three times his son's age. Ten years ago he was five times his son's age. Find their present ages.</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">
          <p>Let the present age of the son be <span class="math">x</span> years.<br>
          Then Aman's present age = <span class="math">3x</span> years.</p>
          <p><strong>10 years ago:</strong><br>
          Son's age = <span class="math">x - 10</span> years<br>
          Aman's age = <span class="math">3x - 10</span> years</p>
          <p>According to the given condition:<br>
          <span class="math">3x - 10 = 5(x - 10)</span><br>
          <span class="math">3x - 10 = 5x - 50</span><br>
          <span class="math">50 - 10 = 5x - 3x</span><br>
          <span class="math">40 = 2x \\implies x = 20</span>.</p>
          <p><strong>Final Answer:</strong> Son's present age = <strong>20 years</strong>; Aman's present age = <span class="math">3 \\times 20 = <strong>60 years</strong></span>.</p>
        </div>
      </div>
      <div class="cbq-card">
        <div class="cbq-type" style="color:#10b981;">⚡ Perimeter &amp; Geometry Linkage</div>
        <div class="cbq-question">The perimeter of a rectangular swimming pool is 154 m. Its length is 2 m more than twice its breadth. What are the length and breadth of the pool?</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">
          <p>Let the breadth be <span class="math">b</span> metres.<br>
          Then length <span class="math">l = (2b + 2)</span> metres.<br>
          Perimeter = <span class="math">2(l + b) = 154</span><br>
          <span class="math">2((2b + 2) + b) = 154 \\implies 2(3b + 2) = 154</span><br>
          <span class="math">3b + 2 = 77 \\implies 3b = 75 \\implies b = 25\\text{ m}</span>.<br>
          Length <span class="math">l = 2(25) + 2 = 52\\text{ m}</span>.<br>
          <strong>Breadth = 25 m, Length = 52 m.</strong></p>
        </div>
      </div>
    </div>
  </div>

  <div class="ch-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(1)">← Chapter 1: Rational Numbers</button>
    <button class="ch-nav-btn next" onclick="showChapter(3)">Chapter 3: Quadrilaterals →</button>
  </div>
</section>
`;

fs.writeFileSync(path.join(outDir, 'ch2.html'), ch2Html, 'utf8');
console.log('Generated ch2.html');
