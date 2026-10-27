// scripts/builders/c7m-additions-part1.js
// Verbatim physical NCERT exercise additions for Class 7 Mathematics Chapters 1 to 4
module.exports = {
  getAdditions() {
    return {
      1: [
        `  <div class="q-card" id="q1_2_4">
    <div class="q-head" onclick="toggleQ('q1_2_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Starting from (−1) × 5, write various products showing some pattern to show (−1) × (−1) = 1.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>Observe the pattern decreasing the multiplier by 1 at each step:</strong><br>
            <span class="math">(−1) × 5 = −5</span><br>
            <span class="math">(−1) × 4 = −4 = (−5) + 1</span><br>
            <span class="math">(−1) × 3 = −3 = (−4) + 1</span><br>
            <span class="math">(−1) × 2 = −2 = (−3) + 1</span><br>
            <span class="math">(−1) × 1 = −1 = (−2) + 1</span><br>
            <span class="math">(−1) × 0 = 0 = (−1) + 1</span><br>
            <span class="math">(−1) × (−1) = 0 + 1 = <strong>1</strong></span>
          </div>
          <p>This systematic pattern proves that the product of two negative integers is a positive integer: <span class="math">(−) × (−) = (+)</span>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Listing steps from (−1) × 5 down to 0 with +1 pattern</span><span class="marking-marks">2 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Concluding (−1) × (−1) = 1 with property</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q1_3_4">
    <div class="q-head" onclick="toggleQ('q1_3_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Fill in the blanks to make the statements true:<br>(a) 369 ÷ _____ = 369<br>(b) (−75) ÷ _____ = −1<br>(c) (−206) ÷ _____ = 1<br>(d) −87 ÷ _____ = 87<br>(e) _____ ÷ 1 = −87<br>(f) _____ ÷ 48 = −1<br>(g) 20 ÷ _____ = −2<br>(h) _____ ÷ (4) = −3</div>
      <div class="q-marks">4 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a)</strong> <span class="math">369 ÷ <strong>1</strong> = 369</span> &nbsp;<em>[Identity element of division]</em><br>
            <strong>(b)</strong> <span class="math">(−75) ÷ <strong>75</strong> = −1</span><br>
            <strong>(c)</strong> <span class="math">(−206) ÷ <strong>(−206)</strong> = 1</span><br>
            <strong>(d)</strong> <span class="math">−87 ÷ <strong>(−1)</strong> = 87</span><br>
            <strong>(e)</strong> <span class="math"><strong>(−87)</strong> ÷ 1 = −87</span><br>
            <strong>(f)</strong> <span class="math"><strong>(−48)</strong> ÷ 48 = −1</span><br>
            <strong>(g)</strong> <span class="math">20 ÷ <strong>(−10)</strong> = −2</span><br>
            <strong>(h)</strong> <span class="math"><strong>(−12)</strong> ÷ 4 = −3</span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct integer with accurate sign</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q1_3_5">
    <div class="q-head" onclick="toggleQ('q1_3_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Write five pairs of integers (a, b) such that a ÷ b = −3. (One such pair is (6, −2) because 6 ÷ (−2) = −3).</div>
      <div class="q-marks">2.5 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Five pairs of integers <span class="math">(a, b)</span> satisfying <span class="math">a ÷ b = −3</span>:<br>
            1. <strong>(−6, 2)</strong> since <span class="math">(−6) ÷ 2 = −3</span>.<br>
            2. <strong>(9, −3)</strong> since <span class="math">9 ÷ (−3) = −3</span>.<br>
            3. <strong>(−9, 3)</strong> since <span class="math">(−9) ÷ 3 = −3</span>.<br>
            4. <strong>(12, −4)</strong> since <span class="math">12 ÷ (−4) = −3</span>.<br>
            5. <strong>(−15, 5)</strong> since <span class="math">(−15) ÷ 5 = −3</span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each valid pair with accurate verification</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q1_3_6">
    <div class="q-head" onclick="toggleQ('q1_3_6')">
      <div class="q-num">Q6</div>
      <div class="q-text">The temperature at 12 noon was 10°C above zero. If it decreases at the rate of 2°C per hour until midnight, at what time would the temperature be 8°C below zero? What would be the temperature at midnight?</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Time when temperature is 8°C below zero (−8°C):</strong><br>
            Initial temperature at 12 noon = <span class="math">+10°C</span>.<br>
            Target temperature = <span class="math">−8°C</span>.<br>
            Total change in temperature = <span class="math">10°C − (−8°C) = 18°C</span>.<br>
            Rate of decrease = <span class="math">2°C per hour</span>.<br>
            Time taken = <span class="math">18 ÷ 2 = 9 hours</span>.<br>
            Time = 12 noon + 9 hours = <strong>9:00 PM</strong>.
          </div>
          <div class="step">
            <strong>(ii) Temperature at midnight (12:00 AM):</strong><br>
            Time duration from 12 noon to midnight = 12 hours.<br>
            Total temperature decrease = <span class="math">12 × 2°C = 24°C</span>.<br>
            Temperature at midnight = <span class="math">10°C − 24°C = <strong>−14°C</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> The temperature will be 8°C below zero at <strong>9:00 PM</strong>, and the temperature at midnight will be <strong>−14°C</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Calculating time taken = 9 hours, giving 9:00 PM</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Calculating midnight temperature = 10 − 24 = −14°C</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q1_3_7">
    <div class="q-head" onclick="toggleQ('q1_3_7')">
      <div class="q-num">Q7</div>
      <div class="q-text">In a class test (+3) marks are given for every correct answer and (−2) marks are given for every incorrect answer and no marks for not attempting any question.<br>(i) Radhika scored 20 marks. If she has got 12 correct answers, how many questions has she attempted incorrectly?<br>(ii) Mohini scores −5 marks in this test, though she has got 7 correct answers. How many questions has she attempted incorrectly?</div>
      <div class="q-marks">4 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) For Radhika:</strong><br>
            Marks given for 1 correct answer = +3.<br>
            Marks for 12 correct answers = <span class="math">12 × 3 = 36</span>.<br>
            Total score obtained = 20.<br>
            Marks obtained for incorrect answers = <span class="math">20 − 36 = −16</span>.<br>
            Marks deducted for each incorrect answer = −2.<br>
            Number of incorrect answers = <span class="math">(−16) ÷ (−2) = <strong>8</strong></span>.
          </div>
          <div class="step">
            <strong>(ii) For Mohini:</strong><br>
            Marks for 7 correct answers = <span class="math">7 × 3 = 21</span>.<br>
            Total score obtained = −5.<br>
            Marks obtained for incorrect answers = <span class="math">−5 − 21 = −26</span>.<br>
            Number of incorrect answers = <span class="math">(−26) ÷ (−2) = <strong>13</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> Radhika attempted <strong>8 questions incorrectly</strong>, and Mohini attempted <strong>13 questions incorrectly</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Formulating (20 − 36)/(-2) = 8 incorrect answers</span><span class="marking-marks">2 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Formulating (-5 − 21)/(-2) = 13 incorrect answers</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      2: [
        `  <div class="q-card" id="q2_1_3">
    <div class="q-head" onclick="toggleQ('q2_1_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Multiply and reduce to lowest form and convert into a mixed fraction:<br>(i) 7 × 3/5 &nbsp;&nbsp; (ii) 4 × 1/3 &nbsp;&nbsp; (iii) 2 × 6/7 &nbsp;&nbsp; (iv) 5 × 2/9 &nbsp;&nbsp; (v) 2/3 × 4<br>(vi) 5/2 × 6 &nbsp;&nbsp; (vii) 11 × 4/7 &nbsp;&nbsp; (viii) 20 × 4/5 &nbsp;&nbsp; (ix) 13 × 1/3 &nbsp;&nbsp; (x) 15 × 3/5</div>
      <div class="q-marks">5 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">7 × 3/5 = 21/5 = <strong>4 1/5</strong></span><br>
            <strong>(ii)</strong> <span class="math">4 × 1/3 = 4/3 = <strong>1 1/3</strong></span><br>
            <strong>(iii)</strong> <span class="math">2 × 6/7 = 12/7 = <strong>1 5/7</strong></span><br>
            <strong>(iv)</strong> <span class="math">5 × 2/9 = 10/9 = <strong>1 1/9</strong></span><br>
            <strong>(v)</strong> <span class="math">2/3 × 4 = 8/3 = <strong>2 2/3</strong></span><br>
            <strong>(vi)</strong> <span class="math">5/2 × 6 = 30/2 = <strong>15</strong></span><br>
            <strong>(vii)</strong> <span class="math">11 × 4/7 = 44/7 = <strong>6 2/7</strong></span><br>
            <strong>(viii)</strong> <span class="math">20 × 4/5 = 4 × 4 = <strong>16</strong></span><br>
            <strong>(ix)</strong> <span class="math">13 × 1/3 = 13/3 = <strong>4 1/3</strong></span><br>
            <strong>(x)</strong> <span class="math">15 × 3/5 = 3 × 3 = <strong>9</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct multiplication and conversion to mixed fraction/integer</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q2_1_5">
    <div class="q-head" onclick="toggleQ('q2_1_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Find:<br>(a) 1/2 of (i) 24 (ii) 46<br>(b) 2/3 of (i) 18 (ii) 27<br>(c) 3/4 of (i) 16 (ii) 36<br>(d) 4/5 of (i) 20 (ii) 35</div>
      <div class="q-marks">4 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a)</strong> (i) <span class="math">1/2 × 24 = <strong>12</strong></span>, (ii) <span class="math">1/2 × 46 = <strong>23</strong></span><br>
            <strong>(b)</strong> (i) <span class="math">2/3 × 18 = 2 × 6 = <strong>12</strong></span>, (ii) <span class="math">2/3 × 27 = 2 × 9 = <strong>18</strong></span><br>
            <strong>(c)</strong> (i) <span class="math">3/4 × 16 = 3 × 4 = <strong>12</strong></span>, (ii) <span class="math">3/4 × 36 = 3 × 9 = <strong>27</strong></span><br>
            <strong>(d)</strong> (i) <span class="math">4/5 × 20 = 4 × 4 = <strong>16</strong></span>, (ii) <span class="math">4/5 × 35 = 4 × 7 = <strong>28</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct evaluation with simplified product</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q2_1_6">
    <div class="q-head" onclick="toggleQ('q2_1_6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Multiply and express as a mixed fraction:<br>(a) 3 × 5 1/5 &nbsp;&nbsp; (b) 5 × 6 3/4 &nbsp;&nbsp; (c) 7 × 2 1/4 &nbsp;&nbsp; (d) 4 × 6 1/3 &nbsp;&nbsp; (e) 3 1/4 × 6 &nbsp;&nbsp; (f) 3 2/5 × 8</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a)</strong> <span class="math">3 × 26/5 = 78/5 = <strong>15 3/5</strong></span><br>
            <strong>(b)</strong> <span class="math">5 × 27/4 = 135/4 = <strong>33 3/4</strong></span><br>
            <strong>(c)</strong> <span class="math">7 × 9/4 = 63/4 = <strong>15 3/4</strong></span><br>
            <strong>(d)</strong> <span class="math">4 × 19/3 = 76/3 = <strong>25 1/3</strong></span><br>
            <strong>(e)</strong> <span class="math">13/4 × 6 = 39/2 = <strong>19 1/2</strong></span><br>
            <strong>(f)</strong> <span class="math">17/5 × 8 = 136/5 = <strong>27 1/5</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct improper fraction and final mixed fraction</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q2_1_7">
    <div class="q-head" onclick="toggleQ('q2_1_7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Find:<br>(a) 1/2 of (i) 2 3/4 (ii) 4 2/9<br>(b) 5/8 of (i) 3 5/6 (ii) 9 2/3</div>
      <div class="q-marks">4 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) (i)</strong> <span class="math">1/2 × 11/4 = 11/8 = <strong>1 3/8</strong></span><br>
            <strong>(a) (ii)</strong> <span class="math">1/2 × 38/9 = 19/9 = <strong>2 1/9</strong></span><br>
            <strong>(b) (i)</strong> <span class="math">5/8 × 23/6 = 115/48 = <strong>2 19/48</strong></span><br>
            <strong>(b) (ii)</strong> <span class="math">5/8 × 29/3 = 145/24 = <strong>6 1/24</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each conversion and reduced mixed fraction</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q2_1_8">
    <div class="q-head" onclick="toggleQ('q2_1_8')">
      <div class="q-num">Q8</div>
      <div class="q-text">Vidya and Pratap went for a picnic. Their mother gave them a water bottle that contained 5 litres of water. Vidya consumed 2/5 of the water. Pratap consumed the remaining water.<br>(i) How much water did Vidya drink?<br>(ii) What fraction of the total quantity of water did Pratap drink?</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Total quantity of water in the bottle = 5 litres.<br>
            <strong>(i) Water consumed by Vidya:</strong><br>
            <span class="math">2/5 of 5 litres = (2/5) × 5 = <strong>2 litres</strong></span>.
          </div>
          <div class="step">
            <strong>(ii) Fraction of water consumed by Pratap:</strong><br>
            Remaining fraction = <span class="math">1 − 2/5 = <strong>3/5</strong></span>.<br>
            <em>(In volume: 5 litres − 2 litres = 3 litres, which is 3/5 of 5 litres).</em>
          </div>
          <p><strong>Final Answer:</strong> Vidya drank <strong>2 litres</strong> of water, and Pratap drank <strong>3/5</strong> of the total quantity of water.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Calculating 2/5 × 5 = 2 litres</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Calculating 1 − 2/5 = 3/5</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q2_2_2">
    <div class="q-head" onclick="toggleQ('q2_2_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Find the reciprocal of each of the following fractions. Classify the reciprocals as proper fractions, improper fractions and whole numbers:<br>(i) 3/7 &nbsp;&nbsp; (ii) 5/8 &nbsp;&nbsp; (iii) 9/7 &nbsp;&nbsp; (iv) 6/5 &nbsp;&nbsp; (v) 12/7 &nbsp;&nbsp; (vi) 1/8 &nbsp;&nbsp; (vii) 1/11</div>
      <div class="q-marks">3.5 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) 3/7:</strong> Reciprocal is <span class="math">7/3</span> → <strong>Improper fraction</strong> (Numerator &gt; Denominator).<br>
            <strong>(ii) 5/8:</strong> Reciprocal is <span class="math">8/5</span> → <strong>Improper fraction</strong>.<br>
            <strong>(iii) 9/7:</strong> Reciprocal is <span class="math">7/9</span> → <strong>Proper fraction</strong> (Numerator &lt; Denominator).<br>
            <strong>(iv) 6/5:</strong> Reciprocal is <span class="math">5/6</span> → <strong>Proper fraction</strong>.<br>
            <strong>(v) 12/7:</strong> Reciprocal is <span class="math">7/12</span> → <strong>Proper fraction</strong>.<br>
            <strong>(vi) 1/8:</strong> Reciprocal is <span class="math">8/1 = 8</span> → <strong>Whole number</strong>.<br>
            <strong>(vii) 1/11:</strong> Reciprocal is <span class="math">11/1 = 11</span> → <strong>Whole number</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct reciprocal and valid classification</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q2_2_3">
    <div class="q-head" onclick="toggleQ('q2_2_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Find:<br>(i) 7/3 ÷ 2 &nbsp;&nbsp; (ii) 4/9 ÷ 5 &nbsp;&nbsp; (iii) 6/13 ÷ 7 &nbsp;&nbsp; (iv) 4 1/3 ÷ 3 &nbsp;&nbsp; (v) 3 1/2 ÷ 4 &nbsp;&nbsp; (vi) 4 3/7 ÷ 7</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">7/3 ÷ 2 = 7/3 × 1/2 = <strong>7/6 = 1 1/6</strong></span><br>
            <strong>(ii)</strong> <span class="math">4/9 ÷ 5 = 4/9 × 1/5 = <strong>4/45</strong></span><br>
            <strong>(iii)</strong> <span class="math">6/13 ÷ 7 = 6/13 × 1/7 = <strong>6/91</strong></span><br>
            <strong>(iv)</strong> <span class="math">4 1/3 ÷ 3 = 13/3 × 1/3 = <strong>13/9 = 1 4/9</strong></span><br>
            <strong>(v)</strong> <span class="math">3 1/2 ÷ 4 = 7/2 × 1/4 = <strong>7/8</strong></span><br>
            <strong>(vi)</strong> <span class="math">4 3/7 ÷ 7 = 31/7 × 1/7 = <strong>31/49</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct inversion to multiplication and final simplified fraction</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q2_2_4">
    <div class="q-head" onclick="toggleQ('q2_2_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Find:<br>(i) 2/5 ÷ 1/2 &nbsp;&nbsp; (ii) 4/9 ÷ 2/3 &nbsp;&nbsp; (iii) 3/7 ÷ 8/7 &nbsp;&nbsp; (iv) 2 1/3 ÷ 3/5<br>(v) 3 1/2 ÷ 8/3 &nbsp;&nbsp; (vi) 2/5 ÷ 1 1/2 &nbsp;&nbsp; (vii) 3 1/5 ÷ 1 2/3 &nbsp;&nbsp; (viii) 2 1/5 ÷ 1 1/5</div>
      <div class="q-marks">4 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math">2/5 × 2/1 = <strong>4/5</strong></span><br>
            <strong>(ii)</strong> <span class="math">4/9 × 3/2 = 12/18 = <strong>2/3</strong></span><br>
            <strong>(iii)</strong> <span class="math">3/7 × 7/8 = <strong>3/8</strong></span><br>
            <strong>(iv)</strong> <span class="math">7/3 × 5/3 = 35/9 = <strong>3 8/9</strong></span><br>
            <strong>(v)</strong> <span class="math">7/2 × 3/8 = 21/16 = <strong>1 5/16</strong></span><br>
            <strong>(vi)</strong> <span class="math">2/5 ÷ 3/2 = 2/5 × 2/3 = <strong>4/15</strong></span><br>
            <strong>(vii)</strong> <span class="math">16/5 ÷ 5/3 = 16/5 × 3/5 = 48/25 = <strong>1 23/25</strong></span><br>
            <strong>(viii)</strong> <span class="math">11/5 ÷ 6/5 = 11/5 × 5/6 = <strong>11/6 = 1 5/6</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct evaluation with accurate reciprocal and simplification</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q2_3_2">
    <div class="q-head" onclick="toggleQ('q2_3_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Find the area of a rectangle whose length is 5.7 cm and breadth is 3 cm.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Length of rectangle (<span class="math">l</span>) = 5.7 cm.<br>
            Breadth of rectangle (<span class="math">b</span>) = 3 cm.<br>
            <span class="math">Area of rectangle = l × b = 5.7 × 3 = <strong>17.1 cm²</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> The area of the rectangle is <strong>17.1 cm²</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula: Area = length × breadth</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Calculation: 5.7 × 3 = 17.1 cm² with unit</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q2_3_4">
    <div class="q-head" onclick="toggleQ('q2_3_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">A two-wheeler covers a distance of 55.3 km in 1 litre of petrol. How much distance will it cover in 10 litres of petrol?</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Distance covered in 1 litre of petrol = 55.3 km.<br>
            Distance covered in 10 litres of petrol = <span class="math">55.3 × 10 = <strong>553.0 km = 553 km</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> The two-wheeler will cover <strong>553 km</strong> in 10 litres of petrol.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Statement and multiplication formulation: 55.3 × 10</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correct answer: 553 km with unit</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q2_4_6">
    <div class="q-head" onclick="toggleQ('q2_4_6')">
      <div class="q-num">Q6</div>
      <div class="q-text">A vehicle covers a distance of 43.2 km in 2.4 litres of petrol. How much distance will it cover in one litre of petrol?</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Total distance covered = 43.2 km.<br>
            Quantity of petrol consumed = 2.4 litres.<br>
            Distance covered in 1 litre = <span class="math">43.2 ÷ 2.4 = 432 / 24 = <strong>18 km</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> The vehicle will cover <strong>18 km</strong> in 1 litre of petrol.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formulating division: 43.2 ÷ 2.4 = 432/24</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correct evaluation: 18 km with units</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`
      ]
    };
  }
};
