const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c8m');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// ==========================================
// CHAPTER 1: RATIONAL NUMBERS
// ==========================================
const ch1Html = `<section class="chapter-section" id="ch1">
  <div class="chapter-header">
    <div class="ch-badge">1</div>
    <div class="chapter-header-info">
      <h2>Chapter 1: Rational Numbers</h2>
      <p>NCERT Exercises &amp; Complete Solutions as per CBSE Marking Scheme 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Concepts &amp; Formulas Summary</div>
    <ul class="concept-list">
      <li><strong>Rational Number:</strong> Any number that can be expressed in the form <span class="math">p/q</span>, where <span class="math">p, q \\in \\mathbb{Z}</span> and <span class="math">q \\neq 0</span>.</li>
      <li><strong>Closure Property:</strong> Rational numbers are closed under addition, subtraction, and multiplication. They are <em>not</em> closed under division because division by zero is undefined.</li>
      <li><strong>Commutative Property:</strong> For any two rational numbers <span class="math">a</span> and <span class="math">b</span>:
        <ul>
          <li><span class="math">a + b = b + a</span> (Addition is commutative)</li>
          <li><span class="math">a \\times b = b \\times a</span> (Multiplication is commutative)</li>
          <li>Subtraction and division are <strong>not</strong> commutative.</li>
        </ul>
      </li>
      <li><strong>Associative Property:</strong> For rational numbers <span class="math">a, b, c</span>:
        <ul>
          <li><span class="math">(a + b) + c = a + (b + c)</span></li>
          <li><span class="math">(a \\times b) \\times c = a \\times (b \\times c)</span></li>
          <li>Subtraction and division are <strong>not</strong> associative.</li>
        </ul>
      </li>
      <li><strong>Distributive Property:</strong> <span class="math">a(b + c) = ab + ac</span> and <span class="math">a(b - c) = ab - ac</span>.</li>
      <li><strong>Identities &amp; Inverses:</strong>
        <ul>
          <li><strong>Additive Identity:</strong> <span class="math">0</span>, because <span class="math">a + 0 = 0 + a = a</span>.</li>
          <li><strong>Additive Inverse:</strong> For rational number <span class="math">a</span>, its additive inverse is <span class="math">-a</span>, such that <span class="math">a + (-a) = 0</span>.</li>
          <li><strong>Multiplicative Identity:</strong> <span class="math">1</span>, because <span class="math">a \\times 1 = 1 \\times a = a</span>.</li>
          <li><strong>Multiplicative Inverse (Reciprocal):</strong> For non-zero rational number <span class="math">a/b</span>, its reciprocal is <span class="math">b/a</span>, such that <span class="math">(a/b) \\times (b/a) = 1</span>. Note: 0 has no reciprocal.</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- EXERCISE 1.1 -->
  <div class="ex-div">NCERT Exercise 1.1</div>

  <div class="q-card" id="q1_1">
    <div class="q-head" onclick="toggleQ('q1_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Name the property under multiplication used in each of the following:<br>
      (i) <span class="math">-\\frac{4}{5} \\times 1 = 1 \\times -\\frac{4}{5} = -\\frac{4}{5}</span><br>
      (ii) <span class="math">-\\frac{13}{17} \\times -\\frac{2}{7} = -\\frac{2}{7} \\times -\\frac{13}{17}</span><br>
      (iii) <span class="math">-\\frac{19}{29} \\times \\frac{29}{-19} = 1</span></div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">1</span> is the <strong>Multiplicative Identity</strong>.<br>
            <em>Reason:</em> For any rational number <span class="math">a</span>, <span class="math">a \\times 1 = 1 \\times a = a</span>.
          </div>
          <div class="step">
            <strong>(ii)</strong> <strong>Commutative Property of Multiplication</strong> (Commutativity).<br>
            <em>Reason:</em> For any two rational numbers <span class="math">a</span> and <span class="math">b</span>, <span class="math">a \\times b = b \\times a</span>.
          </div>
          <div class="step">
            <strong>(iii)</strong> <strong>Multiplicative Inverse Property</strong> (or Reciprocal Property).<br>
            <em>Reason:</em> For any non-zero rational number <span class="math">a</span>, <span class="math">a \\times \\frac{1}{a} = 1</span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Multiplicative identity correctly named</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Commutativity correctly identified</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (iii): Multiplicative inverse correctly identified</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q1_2">
    <div class="q-head" onclick="toggleQ('q1_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Tell what property allows you to compute <span class="math">\\frac{1}{3} \\times (6 \\times \\frac{4}{3})</span> as <span class="math">(\\frac{1}{3} \\times 6) \\times \\frac{4}{3}</span>?</div>
      <div class="q-marks">1 Mark</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <p><strong>Property:</strong> <strong>Associative Property of Multiplication</strong> (Associativity).</p>
          <div class="step">
            <strong>Explanation:</strong> For any three rational numbers <span class="math">a, b</span>, and <span class="math">c</span>, the grouping does not affect the product:<br>
            <span class="math">a \\times (b \\times c) = (a \\times b) \\times c</span>.<br>
            Here, <span class="math">a = \\frac{1}{3}</span>, <span class="math">b = 6</span>, and <span class="math">c = \\frac{4}{3}</span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Associative property of multiplication identified with rule formulation</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q1_3">
    <div class="q-head" onclick="toggleQ('q1_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">The product of two rational numbers is always a _______.</div>
      <div class="q-marks">1 Mark</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <p><strong>Answer:</strong> <strong>Rational number</strong>.</p>
          <div class="step">
            <em>Explanation:</em> This follows directly from the <strong>Closure Property of Multiplication</strong> for rational numbers. If <span class="math">a/b</span> and <span class="math">c/d</span> are rational numbers (<span class="math">b, d \\neq 0</span>), then their product <span class="math">(ac)/(bd)</span> is also a rational number because <span class="math">ac \\in \\mathbb{Z}</span> and <span class="math">bd \\in \\mathbb{Z} \\setminus \\{0\\}</span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct answer: rational number with closure explanation</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q1_4">
    <div class="q-head" onclick="toggleQ('q1_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Using appropriate properties, find:<br>
      (i) <span class="math">-\\frac{2}{3} \\times \\frac{3}{5} + \\frac{5}{2} - \\frac{3}{5} \\times \\frac{1}{6}</span><br>
      (ii) <span class="math">\\frac{2}{5} \\times \\left(-\\frac{3}{7}\\right) - \\frac{1}{6} \\times \\frac{3}{2} + \\frac{1}{14} \\times \\frac{2}{5}</span></div>
      <div class="q-marks">4 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Given:</strong> <span class="math">-\\frac{2}{3} \\times \\frac{3}{5} + \\frac{5}{2} - \\frac{3}{5} \\times \\frac{1}{6}</span><br>
            <em>Step 1 (Commutativity):</em> Rearrange terms to bring terms with the common factor <span class="math">\\frac{3}{5}</span> together:<br>
            <span class="math">= -\\frac{2}{3} \\times \\frac{3}{5} - \\frac{3}{5} \\times \\frac{1}{6} + \\frac{5}{2}</span><br>
            <em>Step 2 (Distributivity):</em> Take out common factor <span class="math">\\frac{3}{5}</span>:<br>
            <span class="math">= \\frac{3}{5} \\left(-\\frac{2}{3} - \\frac{1}{6}\\right) + \\frac{5}{2}</span><br>
            <em>Step 3:</em> Simplify bracket: <span class="math">-\\frac{2}{3} - \\frac{1}{6} = \\frac{-4 - 1}{6} = -\\frac{5}{6}</span>.<br>
            <span class="math">= \\frac{3}{5} \\times \\left(-\\frac{5}{6}\\right) + \\frac{5}{2} = -\\frac{1}{2} + \\frac{5}{2} = \\frac{-1 + 5}{2} = \\frac{4}{2} = <strong>2</strong></span>.
          </div>
          <div class="step">
            <strong>(ii) Given:</strong> <span class="math">\\frac{2}{5} \\times \\left(-\\frac{3}{7}\\right) - \\frac{1}{6} \\times \\frac{3}{2} + \\frac{1}{14} \\times \\frac{2}{5}</span><br>
            <em>Step 1 (Commutativity):</em> Rearrange terms containing <span class="math">\\frac{2}{5}</span>:<br>
            <span class="math">= \\frac{2}{5} \\times \\left(-\\frac{3}{7}\\right) + \\frac{1}{14} \\times \\frac{2}{5} - \\left(\\frac{1}{6} \\times \\frac{3}{2}\\right)</span><br>
            <em>Step 2 (Distributivity):</em> Factor out <span class="math">\\frac{2}{5}</span>:<br>
            <span class="math">= \\frac{2}{5} \\left(-\\frac{3}{7} + \\frac{1}{14}\\right) - \\frac{1}{4}</span><br>
            <em>Step 3:</em> Simplify bracket: <span class="math">-\\frac{3}{7} + \\frac{1}{14} = \\frac{-6 + 1}{14} = -\\frac{5}{14}</span>.<br>
            <span class="math">= \\frac{2}{5} \\times \\left(-\\frac{5}{14}\\right) - \\frac{1}{4} = -\\frac{1}{7} - \\frac{1}{4} = \\frac{-4 - 7}{28} = <strong>-\\frac{11}{28}</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Rearranging with commutativity + distributive factoring</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (i): Correct evaluation to 2</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Application of distributive property</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Simplification to final answer -11/28</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q1_5">
    <div class="q-head" onclick="toggleQ('q1_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Write the additive inverse of each of the following:<br>
      (i) <span class="math">\\frac{2}{8}</span> &nbsp;&nbsp; (ii) <span class="math">-\\frac{5}{9}</span> &nbsp;&nbsp; (iii) <span class="math">\\frac{-6}{-5}</span> &nbsp;&nbsp; (iv) <span class="math">\\frac{2}{-9}</span> &nbsp;&nbsp; (v) <span class="math">\\frac{19}{-6}</span></div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <p><em>Rule:</em> The additive inverse of a rational number <span class="math">a</span> is <span class="math">-a</span>, because <span class="math">a + (-a) = 0</span>.</p>
          <div class="step">
            <strong>(i)</strong> Additive inverse of <span class="math">\\frac{2}{8}</span> is <span class="math">-\\frac{2}{8}</span> (or <span class="math">-\\frac{1}{4}</span>).<br>
            <em>Check:</em> <span class="math">\\frac{2}{8} + \\left(-\\frac{2}{8}\\right) = 0</span>.
          </div>
          <div class="step">
            <strong>(ii)</strong> Additive inverse of <span class="math">-\\frac{5}{9}</span> is <span class="math">-\\left(-\\frac{5}{9}\\right) = <strong>\\frac{5}{9}</strong></span>.
          </div>
          <div class="step">
            <strong>(iii)</strong> <span class="math">\\frac{-6}{-5} = \\frac{6}{5}</span>. Additive inverse is <span class="math"><strong>-\\frac{6}{5}</strong></span>.
          </div>
          <div class="step">
            <strong>(iv)</strong> <span class="math">\\frac{2}{-9} = -\\frac{2}{9}</span>. Additive inverse is <span class="math"><strong>\\frac{2}{9}</strong></span>.
          </div>
          <div class="step">
            <strong>(v)</strong> <span class="math">\\frac{19}{-6} = -\\frac{19}{6}</span>. Additive inverse is <span class="math"><strong>\\frac{19}{6}</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula / Concept statement</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Each correct inverse (0.5 mark each for any 5)</span><span class="marking-marks">2.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q1_6">
    <div class="q-head" onclick="toggleQ('q1_6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Verify that <span class="math">-(-x) = x</span> for:<br>
      (i) <span class="math">x = \\frac{11}{15}</span><br>
      (ii) <span class="math">x = -\\frac{13}{17}</span></div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Given <span class="math">x = \\frac{11}{15}</span>:</strong><br>
            The additive inverse of <span class="math">x</span> is <span class="math">-x = -\\frac{11}{15}</span>.<br>
            Since <span class="math">\\frac{11}{15} + \\left(-\\frac{11}{15}\\right) = 0</span>, the additive inverse of <span class="math">-\\frac{11}{15}</span> is <span class="math">-\\left(-\\frac{11}{15}\\right)</span>.<br>
            Therefore, <span class="math">-\\left(-\\frac{11}{15}\\right) = \\frac{11}{15} = x</span>.<br>
            Hence verified: <span class="math">LHS = RHS</span>.
          </div>
          <div class="step">
            <strong>(ii) Given <span class="math">x = -\\frac{13}{17}</span>:</strong><br>
            Additive inverse of <span class="math">x</span> is <span class="math">-x = -\\left(-\\frac{13}{17}\\right) = \\frac{13}{17}</span>.<br>
            Now, <span class="math">-(-x) = -\\left(\\frac{13}{17}\\right) = -\\frac{13}{17} = x</span>.<br>
            Hence verified: <span class="math">LHS = RHS</span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Step-by-step substitution and verification</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Correct sign handling for negative rational number</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q1_7">
    <div class="q-head" onclick="toggleQ('q1_7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Find the multiplicative inverse of the following:<br>
      (i) <span class="math">-13</span> &nbsp;&nbsp; (ii) <span class="math">-\\frac{13}{19}</span> &nbsp;&nbsp; (iii) <span class="math">\\frac{1}{5}</span> &nbsp;&nbsp; (iv) <span class="math">-\\frac{5}{8} \\times -\\frac{3}{7}</span> &nbsp;&nbsp; (v) <span class="math">-1 \\times -\\frac{2}{5}</span> &nbsp;&nbsp; (vi) <span class="math">-1</span></div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <p><em>Rule:</em> Multiplicative inverse of non-zero <span class="math">a/b</span> is <span class="math">b/a</span>, since <span class="math">(a/b) \\times (b/a) = 1</span>.</p>
          <div class="step"><strong>(i)</strong> Multiplicative inverse of <span class="math">-13</span> is <span class="math"><strong>-\\frac{1}{13}</strong></span>.</div>
          <div class="step"><strong>(ii)</strong> Multiplicative inverse of <span class="math">-\\frac{13}{19}</span> is <span class="math"><strong>-\\frac{19}{13}</strong></span>.</div>
          <div class="step"><strong>(iii)</strong> Multiplicative inverse of <span class="math">\\frac{1}{5}</span> is <span class="math"><strong>5</strong></span>.</div>
          <div class="step"><strong>(iv)</strong> First compute: <span class="math">-\\frac{5}{8} \\times -\\frac{3}{7} = \\frac{15}{56}</span>. Multiplicative inverse is <span class="math"><strong>\\frac{56}{15}</strong></span>.</div>
          <div class="step"><strong>(v)</strong> First compute: <span class="math">-1 \\times -\\frac{2}{5} = \\frac{2}{5}</span>. Multiplicative inverse is <span class="math"><strong>\\frac{5}{2}</strong></span>.</div>
          <div class="step"><strong>(vi)</strong> Multiplicative inverse of <span class="math">-1</span> is <span class="math"><strong>-1</strong></span> (since <span class="math">-1 \\times -1 = 1</span>).</div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct reciprocal evaluated (0.5 marks each)</span><span class="marking-marks">3 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q1_8">
    <div class="q-head" onclick="toggleQ('q1_8')">
      <div class="q-num">Q8</div>
      <div class="q-text">Multiply <span class="math">\\frac{6}{13}</span> by the reciprocal of <span class="math">-\\frac{7}{16}</span>.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>Step 1:</strong> Reciprocal of <span class="math">-\\frac{7}{16} = -\\frac{16}{7}</span>.
          </div>
          <div class="step">
            <strong>Step 2:</strong> Multiply <span class="math">\\frac{6}{13}</span> by <span class="math">-\\frac{16}{7}</span>:<br>
            <span class="math">= \\frac{6}{13} \\times \\left(-\\frac{16}{7}\\right) = \\frac{6 \\times (-16)}{13 \\times 7} = <strong>-\\frac{96}{91}</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> <span class="math">-\\frac{96}{91}</span> (or <span class="math">-1\\frac{5}{91}</span>).</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Finding reciprocal of -7/16 = -16/7</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Product computation to -96/91</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q1_9">
    <div class="q-head" onclick="toggleQ('q1_9')">
      <div class="q-num">Q9</div>
      <div class="q-text">Is <span class="math">\\frac{8}{9}</span> the multiplicative inverse of <span class="math">-1\\frac{1}{8}</span>? Why or why not?</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>Condition:</strong> A number <span class="math">a</span> is the multiplicative inverse of <span class="math">b</span> if and only if <span class="math">a \\times b = 1</span>.
          </div>
          <div class="step">
            Convert mixed fraction to improper fraction:<br>
            <span class="math">-1\\frac{1}{8} = -\\frac{8 \\times 1 + 1}{8} = -\\frac{9}{8}</span>.
          </div>
          <div class="step">
            Calculate their product:<br>
            <span class="math">\\frac{8}{9} \\times \\left(-\\frac{9}{8}\\right) = -1 \\neq 1</span>.
          </div>
          <p><strong>Conclusion:</strong> <strong>No</strong>, <span class="math">\\frac{8}{9}</span> is not the multiplicative inverse of <span class="math">-1\\frac{1}{8}</span> because their product is <span class="math">-1</span> and not <span class="math">+1</span>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Multiplicative inverse criterion stated (product must equal 1)</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Calculation: (8/9) × (-9/8) = -1</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Final conclusion: 'No' with correct reason</span><span class="marking-marks">0.5 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q1_10">
    <div class="q-head" onclick="toggleQ('q1_10')">
      <div class="q-num">Q10</div>
      <div class="q-text">Is <span class="math">0.3</span> the multiplicative inverse of <span class="math">3\\frac{1}{3}</span>? Why or why not?</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>Condition:</strong> Product of two numbers must be equal to <span class="math">1</span>.
          </div>
          <div class="step">
            Convert decimal and mixed fraction to rational form:<br>
            <span class="math">0.3 = \\frac{3}{10}</span><br>
            <span class="math">3\\frac{1}{3} = \\frac{3 \\times 3 + 1}{3} = \\frac{10}{3}</span>
          </div>
          <div class="step">
            Now compute the product:<br>
            <span class="math">0.3 \\times 3\\frac{1}{3} = \\frac{3}{10} \\times \\frac{10}{3} = \\frac{30}{30} = <strong>1</strong></span>.
          </div>
          <p><strong>Conclusion:</strong> <strong>Yes</strong>, <span class="math">0.3</span> is the multiplicative inverse of <span class="math">3\\frac{1}{3}</span> because their product is exactly <span class="math">1</span>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Converting to 3/10 and 10/3</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Multiplication showing product = 1 and 'Yes' conclusion</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q1_11">
    <div class="q-head" onclick="toggleQ('q1_11')">
      <div class="q-num">Q11</div>
      <div class="q-text">Find five rational numbers between <span class="math">\\frac{2}{3}</span> and <span class="math">\\frac{4}{5}</span>.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>Step 1:</strong> Make denominators equal by finding the LCM of 3 and 5.<br>
            LCM(3, 5) = 15.<br>
            <span class="math">\\frac{2}{3} = \\frac{2 \\times 5}{3 \\times 5} = \\frac{10}{15}</span><br>
            <span class="math">\\frac{4}{5} = \\frac{4 \\times 3}{5 \\times 3} = \\frac{12}{15}</span>
          </div>
          <div class="step">
            <strong>Step 2:</strong> To find five numbers, multiply numerator and denominator of both by a suitable factor, say 4 (or 5):<br>
            <span class="math">\\frac{10 \\times 4}{15 \\times 4} = \\frac{40}{60}</span><br>
            <span class="math">\\frac{12 \\times 4}{15 \\times 4} = \\frac{48}{60}</span>
          </div>
          <div class="step">
            <strong>Step 3:</strong> The integers between 40 and 48 are 41, 42, 43, 44, 45, 46, 47.<br>
            Hence, five rational numbers between <span class="math">\\frac{2}{3}</span> and <span class="math">\\frac{4}{5}</span> are:<br>
            <span class="math"><strong>\\frac{41}{60}, \\frac{42}{60}, \\frac{43}{60}, \\frac{44}{60}, \\frac{45}{60}</strong></span> (or simplified: <span class="math">\\frac{41}{60}, \\frac{7}{10}, \\frac{43}{60}, \\frac{11}{15}, \\frac{3}{4}</span>).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Equalising denominators using LCM</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Scaling up to create sufficient interval</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Listing 5 valid rational numbers correctly</span><span class="marking-marks">1 Mark</span></div>
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
        <div class="cbq-type" style="color:#4f46e5;">Case Study: Stock Market Variations</div>
        <div class="cbq-question"><strong>Scenario:</strong> An investor notices the price of a green energy stock fluctuating daily. On Monday it changed by <span class="math">+₹\\frac{7}{4}</span>, on Tuesday by <span class="math">-₹\\frac{5}{6}</span>, and on Wednesday by <span class="math">+₹\\frac{1}{2}</span>.<br>
        (i) What is the net price change over the three days?<br>
        (ii) What is the additive inverse of the net change, and what does it represent?</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">
          <p><strong>(i) Net Price Change:</strong><br>
          <span class="math">\\text{Net change} = \\frac{7}{4} + \\left(-\\frac{5}{6}\\right) + \\frac{1}{2}</span><br>
          LCM of 4, 6, 2 is 12.<br>
          <span class="math">= \\frac{7 \\times 3 - 5 \\times 2 + 1 \\times 6}{12} = \\frac{21 - 10 + 6}{12} = \\frac{17}{12} = <strong>+₹1\\frac{5}{12}</strong></span>.<br>
          The stock gained ₹1.42 (or ₹17/12).</p>
          <p><strong>(ii) Additive Inverse:</strong><br>
          The additive inverse of <span class="math">+\\frac{17}{12}</span> is <span class="math"><strong>-\\frac{17}{12}</strong></span>.<br>
          It represents the exact price drop required on Thursday to bring the stock back to its opening value on Monday.</p>
        </div>
      </div>
      <div class="cbq-card">
        <div class="cbq-type" style="color:#10b981;">⚡ Assertion &amp; Reason</div>
        <div class="cbq-question">
          <strong>Assertion (A):</strong> Between any two distinct rational numbers, there are infinitely many rational numbers.<br>
          <strong>Reason (R):</strong> The mean or average <span class="math">\\frac{a+b}{2}</span> of two rational numbers <span class="math">a</span> and <span class="math">b</span> always lies strictly between <span class="math">a</span> and <span class="math">b</span>.<br>
          Choose: (a) Both A and R are true and R is the correct explanation of A. (b) Both A and R are true, but R is not the correct explanation. (c) A is true, R is false. (d) A is false, R is true.
        </div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">
          <strong>Answer: (a) Both A and R are true and R is the correct explanation of A.</strong><br>
          <em>Explanation:</em> By repeatedly applying the mean method <span class="math">m = \\frac{a+b}{2}</span>, between <span class="math">a</span> and <span class="math">m</span>, and between <span class="math">m</span> and <span class="math">b</span>, we generate an endless sequence of rational numbers. This density property proves there are infinitely many rational numbers between any two rational numbers.
        </div>
      </div>
    </div>
  </div>

  <div class="ch-nav-btns">
    <button class="ch-nav-btn" disabled style="opacity:.35;">← Previous</button>
    <button class="ch-nav-btn next" onclick="showChapter(2)">Chapter 2: Linear Equations →</button>
  </div>
</section>
`;

fs.writeFileSync(path.join(outDir, 'ch1.html'), ch1Html, 'utf8');
console.log('Generated ch1.html');
