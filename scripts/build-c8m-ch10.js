const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c8m');

const ch10Html = `<section class="chapter-section" id="ch10">
  <div class="chapter-header">
    <div class="ch-badge">10</div>
    <div class="chapter-header-info">
      <h2>Chapter 10: Exponents and Powers</h2>
      <p>NCERT Exercises 10.1 &amp; 10.2 — Complete Solutions as per CBSE Marking Scheme 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Laws of Exponents &amp; Standard Form</div>
    <ul class="concept-list">
      <li><strong>Laws of Exponents (for non-zero integers <span class="math">a, b</span> and integers <span class="math">m, n</span>):</strong>
        <ul>
          <li><span class="math">a^m \\times a^n = a^{m + n}</span> (Product rule)</li>
          <li><span class="math">a^m \\div a^n = a^{m - n}</span> (Quotient rule)</li>
          <li><span class="math">(a^m)^n = a^{mn}</span> (Power of a power)</li>
          <li><span class="math">a^m \\times b^m = (ab)^m</span> (Power of a product)</li>
          <li><span class="math">\\frac{a^m}{b^m} = \\left(\\frac{a}{b}\\right)^m</span> (Power of a quotient)</li>
          <li><span class="math">a^0 = 1</span> (Zero exponent)</li>
          <li><span class="math">a^{-m} = \\frac{1}{a^m}</span> and <span class="math">\\left(\\frac{a}{b}\\right)^{-m} = \\left(\\frac{b}{a}\\right)^m</span> (Negative exponent)</li>
        </ul>
      </li>
      <li><strong>Standard Scientific Notation:</strong> A number expressed in the form <span class="math">k \\times 10^n</span>, where <span class="math">1.0 \\le k < 10.0</span> and <span class="math">n \\in \\mathbb{Z}</span>.</li>
    </ul>
  </div>

  <!-- EXERCISE 10.1 -->
  <div class="ex-div">NCERT Exercise 10.1</div>

  <div class="q-card" id="q10_1_1">
    <div class="q-head" onclick="toggleQ('q10_1_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Evaluate:<br>
      (i) <span class="math">3^{-2}</span> &nbsp;&nbsp; (ii) <span class="math">(-4)^{-2}</span> &nbsp;&nbsp; (iii) <span class="math">\\left(\\frac{1}{2}\\right)^{-5}</span></div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <p><em>Formula:</em> <span class="math">a^{-m} = \\frac{1}{a^m}</span>.</p>
          <div class="step">
            <strong>(i)</strong> <span class="math">3^{-2} = \\frac{1}{3^2} = <strong>\\frac{1}{9}</strong></span>.
          </div>
          <div class="step">
            <strong>(ii)</strong> <span class="math">(-4)^{-2} = \\frac{1}{(-4)^2} = \\frac{1}{16} = <strong>\\frac{1}{16}</strong></span>.
          </div>
          <div class="step">
            <strong>(iii)</strong> <span class="math">\\left(\\frac{1}{2}\\right)^{-5} = \\left(\\frac{2}{1}\\right)^5 = 2^5 = <strong>32</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">1 mark for each part correctly evaluated</span><span class="marking-marks">3 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q10_1_2">
    <div class="q-head" onclick="toggleQ('q10_1_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Simplify and express the result in power notation with positive exponent:<br>
      (i) <span class="math">(-4)^5 \\div (-4)^8</span><br>
      (ii) <span class="math">\\left(\\frac{1}{2^3}\\right)^2</span><br>
      (iii) <span class="math">(-3)^4 \\times \\left(\\frac{5}{3}\\right)^4</span><br>
      (iv) <span class="math">(3^{-7} \\div 3^{-10}) \\times 3^{-5}</span><br>
      (v) <span class="math">2^{-3} \\times (-7)^{-3}</span></div>
      <div class="q-marks">5 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">(-4)^5 \\div (-4)^8 = (-4)^{5 - 8} = (-4)^{-3} = <strong>\\frac{1}{(-4)^3}</strong></span>.
          </div>
          <div class="step">
            <strong>(ii)</strong> <span class="math">\\left(\\frac{1}{2^3}\\right)^2 = \\frac{1^2}{(2^3)^2} = <strong>\\frac{1}{2^6}</strong></span>.
          </div>
          <div class="step">
            <strong>(iii)</strong> <span class="math">(-3)^4 \\times \\frac{5^4}{3^4} = 3^4 \\times \\frac{5^4}{3^4} = <strong>5^4</strong></span>.
          </div>
          <div class="step">
            <strong>(iv)</strong> <span class="math">(3^{-7} \\div 3^{-10}) \\times 3^{-5} = 3^{-7 - (-10)} \\times 3^{-5} = 3^3 \\times 3^{-5} = 3^{3 - 5} = 3^{-2} = <strong>\\frac{1}{3^2}</strong></span>.
          </div>
          <div class="step">
            <strong>(v)</strong> <span class="math">2^{-3} \\times (-7)^{-3} = [2 \\times (-7)]^{-3} = (-14)^{-3} = <strong>\\frac{1}{(-14)^3}</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">1 mark for each law application and positive exponent form</span><span class="marking-marks">5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q10_1_3">
    <div class="q-head" onclick="toggleQ('q10_1_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Find the value of:<br>
      (i) <span class="math">(3^0 + 4^{-1}) \\times 2^2</span><br>
      (ii) <span class="math">(2^{-1} \\times 4^{-1}) \\div 2^{-2}</span><br>
      (iii) <span class="math">\\left(\\frac{1}{2}\\right)^{-2} + \\left(\\frac{1}{3}\\right)^{-2} + \\left(\\frac{1}{4}\\right)^{-2}</span><br>
      (iv) <span class="math">(3^{-1} + 4^{-1} + 5^{-1})^0</span><br>
      (v) <span class="math">\\left\\{\\left(-\\frac{2}{3}\\right)^{-2}\\right\\}^2</span></div>
      <div class="q-marks">5 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">\\left(1 + \\frac{1}{4}\\right) \\times 4 = \\frac{5}{4} \\times 4 = <strong>5</strong></span>.
          </div>
          <div class="step">
            <strong>(ii)</strong> <span class="math">\\left(\\frac{1}{2} \\times \\frac{1}{4}\\right) \\div \\frac{1}{4} = \\frac{1}{8} \\times 4 = <strong>\\frac{1}{2}</strong></span>.
          </div>
          <div class="step">
            <strong>(iii)</strong> <span class="math">2^2 + 3^2 + 4^2 = 4 + 9 + 16 = <strong>29</strong></span>.
          </div>
          <div class="step">
            <strong>(iv)</strong> Since any non-zero real number raised to power 0 equals 1:<br>
            <span class="math">(3^{-1} + 4^{-1} + 5^{-1})^0 = <strong>1</strong></span>.
          </div>
          <div class="step">
            <strong>(v)</strong> <span class="math">\\left(-\\frac{2}{3}\\right)^{-4} = \\left(-\\frac{3}{2}\\right)^4 = \\frac{(-3)^4}{2^4} = <strong>\\frac{81}{16}</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">1 mark for each evaluated numeric result</span><span class="marking-marks">5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q10_1_5">
    <div class="q-head" onclick="toggleQ('q10_1_5')">
      <div class="q-num">Q4</div>
      <div class="q-text">Find the value of <span class="math">m</span> for which <span class="math">5^m \\div 5^{-3} = 5^5</span>.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Using quotient rule <span class="math">a^m \\div a^n = a^{m - n}</span>:<br>
            <span class="math">5^{m - (-3)} = 5^5</span><br>
            <span class="math">5^{m + 3} = 5^5</span>
          </div>
          <div class="step">
            Equating exponents with equal bases:<br>
            <span class="math">m + 3 = 5 \\implies m = 5 - 3 = <strong>2</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Quotient law setup 5^(m+3) = 5^5</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Solving m = 2</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q10_1_7">
    <div class="q-head" onclick="toggleQ('q10_1_7')">
      <div class="q-num">Q5</div>
      <div class="q-text">Simplify:<br>
      (i) <span class="math">\\frac{25 \\times t^{-4}}{5^{-3} \\times 10 \\times t^{-8}}</span> (<span class="math">t \\neq 0</span>)<br>
      (ii) <span class="math">\\frac{3^{-5} \\times 10^{-5} \\times 125}{5^{-7} \\times 6^{-5}}</span></div>
      <div class="q-marks">4 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> Write numbers in powers of prime 5:<br>
            <span class="math">= \\frac{5^2 \\times t^{-4}}{5^{-3} \\times (2 \\times 5) \\times t^{-8}} = \\frac{5^2 \\times t^{-4}}{5^{-3+1} \\times 2 \\times t^{-8}} = \\frac{5^2 \\times t^{-4}}{5^{-2} \\times 2 \\times t^{-8}}</span><br>
            <span class="math">= \\frac{5^{2 - (-2)} \\times t^{-4 - (-8)}}{2} = \\frac{5^4 t^4}{2} = <strong>\\frac{625t^4}{2}</strong></span>.
          </div>
          <div class="step">
            <strong>(ii)</strong> Factorize composite numbers into primes (10 = 2 × 5, 6 = 2 × 3, 125 = 5³):<br>
            <span class="math">= \\frac{3^{-5} \\times (2 \\times 5)^{-5} \\times 5^3}{5^{-7} \\times (2 \\times 3)^{-5}} = \\frac{3^{-5} \\times 2^{-5} \\times 5^{-5} \\times 5^3}{5^{-7} \\times 2^{-5} \\times 3^{-5}}</span><br>
            Cancel identical factors <span class="math">3^{-5}</span> and <span class="math">2^{-5}</span>:<br>
            <span class="math">= \\frac{5^{-5 + 3}}{5^{-7}} = \\frac{5^{-2}}{5^{-7}} = 5^{-2 - (-7)} = 5^5 = <strong>3125</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): 625t⁴ / 2</span><span class="marking-marks">2 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): 5⁵ = 3125</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- EXERCISE 10.2 -->
  <div class="ex-div">NCERT Exercise 10.2</div>

  <div class="q-card" id="q10_2_1">
    <div class="q-head" onclick="toggleQ('q10_2_1')">
      <div class="q-num">Q6</div>
      <div class="q-text">Express the following numbers in standard form:<br>
      (i) 0.0000000000085<br>
      (ii) 0.00000000000942<br>
      (iii) 6020000000000000<br>
      (iv) 0.00000000837<br>
      (v) 31860000000</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <p><em>Rule:</em> Shift decimal point so that exactly one non-zero digit is on the left.</p>
          <div class="step">
            (i) 0.0000000000085: Shift decimal 12 places to the right <span class="math">\\implies <strong>8.5 \\times 10^{-12}</strong></span>.<br>
            (ii) 0.00000000000942: Shift decimal 12 places to the right <span class="math">\\implies <strong>9.42 \\times 10^{-12}</strong></span>.<br>
            (iii) 6020000000000000: Shift decimal 15 places to the left <span class="math">\\implies <strong>6.02 \\times 10^{15}</strong></span>.<br>
            (iv) 0.00000000837: Shift decimal 9 places to the right <span class="math">\\implies <strong>8.37 \\times 10^{-9}</strong></span>.<br>
            (v) 31860000000: Shift decimal 10 places to the left <span class="math">\\implies <strong>3.186 \\times 10^{10}</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct standard form representation</span><span class="marking-marks">3 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q10_2_4">
    <div class="q-head" onclick="toggleQ('q10_2_4')">
      <div class="q-num">Q7</div>
      <div class="q-text">In a stack there are 5 books each of thickness 20 mm and 5 paper sheets each of thickness 0.016 mm. What is the total thickness of the stack? Express in standard form.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Thickness of 5 books = <span class="math">5 \\times 20\\text{ mm} = 100\\text{ mm}</span>.<br>
            Thickness of 5 paper sheets = <span class="math">5 \\times 0.016\\text{ mm} = 0.08\\text{ mm}</span>.
          </div>
          <div class="step">
            Total thickness = <span class="math">100 + 0.08 = 100.08\\text{ mm}</span>.
          </div>
          <div class="step">
            Convert to standard scientific form:<br>
            <span class="math">100.08 = <strong>1.0008 \\times 10^2\\text{ mm}</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Sum computation: 100.08 mm</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Standard form: 1.0008 × 10² mm</span><span class="marking-marks">1.5 Marks</span></div>
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
        <div class="cbq-type" style="color:#4f46e5;">Case Study: Astronomy &amp; Distance in Space</div>
        <div class="cbq-question"><strong>Scenario:</strong> The distance between the Sun and Earth is approximately <span class="math">1.496 \\times 10^{11}</span> metres, and the distance between Earth and the Moon is <span class="math">3.84 \\times 10^8</span> metres. During a solar eclipse, the Moon comes directly between the Earth and the Sun. Find the distance between the Sun and the Moon in scientific form.</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">
          <p>Distance = Distance(Sun-Earth) - Distance(Earth-Moon):<br>
          <span class="math">= 1.496 \\times 10^{11} - 3.84 \\times 10^8</span></p>
          <p>Convert to common power of 10 (<span class="math">10^{11}</span>):<br>
          <span class="math">3.84 \\times 10^8 = 0.00384 \\times 10^{11}</span>.</p>
          <p><span class="math">= (1.496 - 0.00384) \\times 10^{11} = <strong>1.49216 \\times 10^{11}\\text{ metres}</strong></span>.</p>
        </div>
      </div>
      <div class="cbq-card">
        <div class="cbq-type" style="color:#10b981;">⚡ Power Comparison (HOTS)</div>
        <div class="cbq-question">Which is larger: <span class="math">2^{300}</span> or <span class="math">3^{200}</span>? Justify using laws of exponents without evaluating the huge numbers.</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">
          <p>Find the HCF of the exponents 300 and 200: HCF(300, 200) = 100.</p>
          <p>Express both with common outer exponent 100:<br>
          <span class="math">2^{300} = (2^3)^{100} = 8^{100}</span><br>
          <span class="math">3^{200} = (3^2)^{100} = 9^{100}</span></p>
          <p>Since <span class="math">9 > 8</span>, it follows that <span class="math">9^{100} > 8^{100}</span>.<br>
          Therefore, <strong><span class="math">3^{200}</span> is larger</strong>.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="ch-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(9)">← Chapter 9: Mensuration</button>
    <button class="ch-nav-btn next" onclick="showChapter(11)">Chapter 11: Proportions →</button>
  </div>
</section>
`;

fs.writeFileSync(path.join(outDir, 'ch10.html'), ch10Html, 'utf8');
console.log('Generated ch10.html');
