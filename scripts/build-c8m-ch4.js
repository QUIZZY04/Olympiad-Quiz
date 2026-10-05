const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c8m');

const ch4Html = `<section class="chapter-section" id="ch4">
  <div class="chapter-header">
    <div class="ch-badge">4</div>
    <div class="chapter-header-info">
      <h2>Chapter 4: Data Handling</h2>
      <p>NCERT Exercises 4.1 &amp; 4.2 — Complete Solutions as per CBSE Marking Scheme 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Statistical Concepts &amp; Probability Formulas</div>
    <ul class="concept-list">
      <li><strong>Data Representation:</strong>
        <ul>
          <li><em>Bar Graph:</em> Display of information using bars of uniform width with equal spacing.</li>
          <li><em>Double Bar Graph:</em> Compares two sets of data simultaneously.</li>
          <li><em>Histogram:</em> Bar graph that shows data in continuous intervals with no gaps between bars.</li>
          <li><em>Pie Chart (Circle Graph):</em> Shows the relationship between a whole and its parts. Total angle at center = <span class="math">360^\\circ</span>.</li>
        </ul>
      </li>
      <li><strong>Central Angle Formula:</strong>
        <span class="math">\\text{Central angle of a component} = \\frac{\\text{Value of component}}{\\text{Total value}} \\times 360^\\circ</span>.
      </li>
      <li><strong>Probability (<span class="math">P(E)</span>):</strong>
        <span class="math">P(E) = \\frac{\\text{Number of outcomes favourable to } E}{\\text{Total number of equally likely outcomes}}</span>.
      </li>
      <li><strong>Probability Bounds:</strong> For any event <span class="math">E</span>, <span class="math">0 \\le P(E) \\le 1</span>. <span class="math">P(\\text{Impossible event}) = 0</span>, <span class="math">P(\\text{Sure event}) = 1</span>. Complement: <span class="math">P(\\text{not } E) = 1 - P(E)</span>.</li>
    </ul>
  </div>

  <!-- EXERCISE 4.1 -->
  <div class="ex-div">NCERT Exercise 4.1</div>

  <div class="q-card" id="q4_1_1">
    <div class="q-head" onclick="toggleQ('q4_1_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">A survey was made to find the type of music that a certain group of young people liked in a city. The adjoining pie chart shows the findings: Classical 10%, Semi-classical 20%, Light music 40%, Folk music 30%.<br>
      (i) If 20 people liked classical music, how many young people were surveyed?<br>
      (ii) Which type of music is liked by the maximum number of people?<br>
      (iii) If a cassette company were to make 1000 CDs, how many of each type would they make?</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Total number of young people surveyed:</strong><br>
            Let total people surveyed be <span class="math">x</span>.<br>
            Classical music = <span class="math">10\\% \\text{ of } x = 20</span>.<br>
            <span class="math">\\frac{10}{100} \\times x = 20 \\implies x = 20 \\times 10 = <strong>200</strong></span>.<br>
            <strong>200 young people</strong> were surveyed.
          </div>
          <div class="step">
            <strong>(ii) Most liked music:</strong><br>
            <strong>Light music</strong> is liked by the maximum number of people (40%).
          </div>
          <div class="step">
            <strong>(iii) Breakdown for 1000 CDs:</strong><br>
            <ul>
              <li>Classical CDs = <span class="math">10\\% \\text{ of } 1000 = \\frac{10}{100} \\times 1000 = <strong>100</strong></span>.</li>
              <li>Semi-classical CDs = <span class="math">20\\% \\text{ of } 1000 = \\frac{20}{100} \\times 1000 = <strong>200</strong></span>.</li>
              <li>Light music CDs = <span class="math">40\\% \\text{ of } 1000 = \\frac{40}{100} \\times 1000 = <strong>400</strong></span>.</li>
              <li>Folk music CDs = <span class="math">30\\% \\text{ of } 1000 = \\frac{30}{100} \\times 1000 = <strong>300</strong></span>.</li>
            </ul>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Formulating 10% of x = 20 -> x = 200</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Light music (40%) identified</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (iii): Correct CD breakdown for all 4 types</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q4_1_2">
    <div class="q-head" onclick="toggleQ('q4_1_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">A group of 360 people were asked to vote for their favourite season from the three seasons — rainy, winter, and summer.<br>
      (Summer: 90 votes, Rainy: 120 votes, Winter: 150 votes)<br>
      (i) Which season got the most votes?<br>
      (ii) Find the central angle of each sector.<br>
      (iii) Draw a pie chart to show this information.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Most votes:</strong><br>
            <strong>Winter season</strong> received the most votes (150 votes).
          </div>
          <div class="step">
            <strong>(ii) Central angles (Total votes = 360):</strong><br>
            <ul>
              <li><strong>Summer:</strong> <span class="math">\\frac{90}{360} \\times 360^\\circ = <strong>90^\\circ</strong></span></li>
              <li><strong>Rainy:</strong> <span class="math">\\frac{120}{360} \\times 360^\\circ = <strong>120^\\circ</strong></span></li>
              <li><strong>Winter:</strong> <span class="math">\\frac{150}{360} \\times 360^\\circ = <strong>150^\\circ</strong></span></li>
            </ul>
            <em>Check:</em> <span class="math">90^\\circ + 120^\\circ + 150^\\circ = 360^\\circ</span>.
          </div>
          <div class="step">
            <strong>(iii) Pie Chart Construction:</strong><br>
            Draw a circle of convenient radius. Using a protractor, draw radii subtending central angles of <span class="math">90^\\circ</span> for Summer, <span class="math">120^\\circ</span> for Rainy, and <span class="math">150^\\circ</span> for Winter. Label each sector clearly.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Winter season identified</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Correct central angles (90°, 120°, 150°)</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Part (iii): Pie chart representation steps</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q4_1_3">
    <div class="q-head" onclick="toggleQ('q4_1_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Draw a pie chart showing the following information. The table shows the colours preferred by a group of 36 people:<br>
      Blue: 18, Green: 9, Red: 6, Yellow: 3. Total = 36.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <p>Central angle formula: <span class="math">\\text{Central angle} = \\frac{\\text{Frequency}}{\\text{Total (36)}} \\times 360^\\circ</span>.</p>
          <div class="step">
            <ul>
              <li><strong>Blue:</strong> <span class="math">\\frac{18}{36} \\times 360^\\circ = \\frac{1}{2} \\times 360^\\circ = <strong>180^\\circ</strong></span> (Semicircle)</li>
              <li><strong>Green:</strong> <span class="math">\\frac{9}{36} \\times 360^\\circ = \\frac{1}{4} \\times 360^\\circ = <strong>90^\\circ</strong></span> (Quadrant)</li>
              <li><strong>Red:</strong> <span class="math">\\frac{6}{36} \\times 360^\\circ = \\frac{1}{6} \\times 360^\\circ = <strong>60^\\circ</strong></span></li>
              <li><strong>Yellow:</strong> <span class="math">\\frac{3}{36} \\times 360^\\circ = \\frac{1}{12} \\times 360^\\circ = <strong>30^\\circ</strong></span></li>
            </ul>
          </div>
          <div class="step">
            <em>Verification:</em> <span class="math">180^\\circ + 90^\\circ + 60^\\circ + 30^\\circ = 360^\\circ</span>.<br>
            A circle is drawn with sectors having these exact angles and labeled with respective colour names.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Calculation of central angles for each colour</span><span class="marking-marks">2 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Accurate pie chart representation description</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q4_1_4">
    <div class="q-head" onclick="toggleQ('q4_1_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">The adjoining pie chart gives marks scored in an examination by a student in Hindi, English, Mathematics, Social Science, and Science. Total marks = 540. (Central angles: Maths 90°, Social Science 65°, Science 80°, Hindi 70°, English 55°)<br>
      (i) In which subject did the student score 105 marks?<br>
      (ii) How many more marks were obtained by the student in Mathematics than in Hindi?<br>
      (iii) Examine whether the sum of marks obtained in Social Science and Mathematics is more than that in Science and Hindi.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>Formula:</strong> <span class="math">\\text{Marks obtained} = \\frac{\\text{Central angle}}{360^\\circ} \\times 540 = \\text{Central angle} \\times \\frac{3}{2}</span>.<br>
            Conversely, <span class="math">\\text{Central angle} = \\frac{\\text{Marks}}{540} \\times 360^\\circ = \\text{Marks} \\times \\frac{2}{3}</span>.
          </div>
          <div class="step">
            <strong>(i) For 105 marks:</strong><br>
            <span class="math">\\text{Central angle} = 105 \\times \\frac{2}{3} = 35 \\times 2 = <strong>70^\\circ</strong></span>.<br>
            The sector of <span class="math">70^\\circ</span> corresponds to <strong>Hindi</strong>.
          </div>
          <div class="step">
            <strong>(ii) Difference between Mathematics and Hindi:</strong><br>
            Marks in Maths = <span class="math">90^\\circ \\times \\frac{3}{2} = 135 \\text{ marks}</span>.<br>
            Marks in Hindi = 105 marks.<br>
            Difference = <span class="math">135 - 105 = <strong>30 marks</strong></span>.<br>
            <em>(Alternative by angle: <span class="math">(90^\\circ - 70^\\circ) \\times \\frac{3}{2} = 20 \\times 1.5 = 30\\text{ marks}</span>).</em>
          </div>
          <div class="step">
            <strong>(iii) Compare (Social Science + Maths) vs (Science + Hindi):</strong><br>
            Sum of angles for Social Science + Maths = <span class="math">65^\\circ + 90^\\circ = <strong>155^\\circ</strong></span>.<br>
            Sum of angles for Science + Hindi = <span class="math">80^\\circ + 70^\\circ = <strong>150^\\circ</strong></span>.<br>
            Since <span class="math">155^\\circ > 150^\\circ</span>, the sum of marks in Social Science and Mathematics is indeed <strong>more</strong> than that in Science and Hindi.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Central angle calculation (70°) identifying Hindi</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): 135 - 105 = 30 marks</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (iii): Angle comparison (155° > 150°) and confirmation</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- EXERCISE 4.2 -->
  <div class="ex-div">NCERT Exercise 4.2</div>

  <div class="q-card" id="q4_2_1">
    <div class="q-head" onclick="toggleQ('q4_2_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">List the outcomes you can see in these experiments:<br>
      (a) Spinning a wheel with sectors marked A, B, C, D (where A appears twice)<br>
      (b) Tossing two coins together</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Spinning the wheel:</strong><br>
            The distinct outcomes where the pointer can stop are: <strong>A, B, C, D</strong> (4 possible distinct outcomes).
          </div>
          <div class="step">
            <strong>(b) Tossing two coins together:</strong><br>
            Denoting Head as H and Tail as T, the sample space of possible outcomes is:<br>
            <strong>{ (H, H), (H, T), (T, H), (T, T) }</strong> (4 possible outcomes).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (a): A, B, C, D listed</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (b): HH, HT, TH, TT listed</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q4_2_2">
    <div class="q-head" onclick="toggleQ('q4_2_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">When a die is thrown, list the outcomes of an event of getting:<br>
      (i) (a) a prime number &nbsp;&nbsp; (b) not a prime number<br>
      (ii) (a) a number greater than 5 &nbsp;&nbsp; (b) a number not greater than 5</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <p>Total possible outcomes on a single die: <span class="math">S = \\{1, 2, 3, 4, 5, 6\\}</span>.</p>
          <div class="step"><strong>(i) (a) A prime number:</strong> <strong>2, 3, 5</strong></div>
          <div class="step"><strong>(i) (b) Not a prime number:</strong> <strong>1, 4, 6</strong> <em>(Note: 1 is neither prime nor composite)</em></div>
          <div class="step"><strong>(ii) (a) A number greater than 5:</strong> <strong>6</strong></div>
          <div class="step"><strong>(ii) (b) A number not greater than 5:</strong> <strong>1, 2, 3, 4, 5</strong></div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct outcome listing (0.5 marks each)</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q4_2_3">
    <div class="q-head" onclick="toggleQ('q4_2_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Find the:<br>
      (a) Probability of the pointer stopping on D in a 5-sector wheel (A, A, B, C, D)<br>
      (b) Probability of getting an ace from a well-shuffled deck of 52 playing cards<br>
      (c) Probability of getting a red apple from a basket with 4 red and 3 green apples</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Pointer stopping on D:</strong><br>
            Total sectors = 5; Sector with D = 1.<br>
            <span class="math">P(D) = \\frac{1}{5}</span>.
          </div>
          <div class="step">
            <strong>(b) Getting an ace from 52 cards:</strong><br>
            Total cards = 52; Number of aces = 4 (Spade, Club, Heart, Diamond).<br>
            <span class="math">P(\\text{Ace}) = \\frac{4}{52} = <strong>\\frac{1}{13}</strong></span>.
          </div>
          <div class="step">
            <strong>(c) Getting a red apple:</strong><br>
            Total apples = <span class="math">4 + 3 = 7</span>; Red apples = 4.<br>
            <span class="math">P(\\text{Red apple}) = <strong>\\frac{4}{7}</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (a): 1/5</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (b): 4/52 = 1/13</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (c): 4/7</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q4_2_4">
    <div class="q-head" onclick="toggleQ('q4_2_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Numbers 1 to 10 are written on ten separate slips (one number on one slip), kept in a box and mixed well. One slip is chosen from the box without looking into it. What is the probability of:<br>
      (i) getting a number 6?<br>
      (ii) getting a number less than 6?<br>
      (iii) getting a number greater than 6?<br>
      (iv) getting a 1-digit number?</div>
      <div class="q-marks">4 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <p>Total possible outcomes = <span class="math">\\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}</span> (Total = 10).</p>
          <div class="step">
            <strong>(i) Getting a number 6:</strong><br>
            Favourable outcomes = {6} (1 outcome).<br>
            <span class="math">P(6) = <strong>\\frac{1}{10}</strong></span>.
          </div>
          <div class="step">
            <strong>(ii) Getting a number less than 6:</strong><br>
            Favourable outcomes = {1, 2, 3, 4, 5} (5 outcomes).<br>
            <span class="math">P(< 6) = \\frac{5}{10} = <strong>\\frac{1}{2}</strong></span>.
          </div>
          <div class="step">
            <strong>(iii) Getting a number greater than 6:</strong><br>
            Favourable outcomes = {7, 8, 9, 10} (4 outcomes).<br>
            <span class="math">P(> 6) = \\frac{4}{10} = <strong>\\frac{2}{5}</strong></span>.
          </div>
          <div class="step">
            <strong>(iv) Getting a 1-digit number:</strong><br>
            Favourable outcomes = {1, 2, 3, 4, 5, 6, 7, 8, 9} (9 outcomes).<br>
            <span class="math">P(\\text{1-digit}) = <strong>\\frac{9}{10}</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">1 mark for each correctly computed probability</span><span class="marking-marks">4 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="q4_2_5">
    <div class="q-head" onclick="toggleQ('q4_2_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">If you have a spinning wheel with 3 green sectors, 1 blue sector, and 1 red sector, what is the probability of getting a green sector? What is the probability of getting a non-blue sector?</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Total number of sectors = <span class="math">3 + 1 + 1 = 5</span>.
          </div>
          <div class="step">
            <strong>Probability of green sector:</strong><br>
            Number of green sectors = 3.<br>
            <span class="math">P(\\text{Green}) = <strong>\\frac{3}{5}</strong></span>.
          </div>
          <div class="step">
            <strong>Probability of non-blue sector:</strong><br>
            Number of non-blue sectors (Green + Red) = <span class="math">3 + 1 = 4</span>.<br>
            <span class="math">P(\\text{Non-blue}) = <strong>\\frac{4}{5}</strong></span> (or <span class="math">1 - P(\\text{Blue}) = 1 - \\frac{1}{5} = \\frac{4}{5}</span>).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">P(Green) = 3/5</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">P(Non-blue) = 4/5</span><span class="marking-marks">1 Mark</span></div>
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
        <div class="cbq-type" style="color:#4f46e5;">Case Study: Quality Assurance in a Factory</div>
        <div class="cbq-question"><strong>Scenario:</strong> In a manufacturing batch of 1200 LED light bulbs, random sampling showed that 24 bulbs were defective. (i) What is the probability that a bulb selected at random is non-defective? (ii) In an order of 5000 bulbs, approximately how many defective bulbs can be expected?</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">
          <p><strong>(i) Probability of non-defective bulb:</strong><br>
          Non-defective bulbs = <span class="math">1200 - 24 = 1176</span>.<br>
          <span class="math">P(\\text{Non-defective}) = \\frac{1176}{1200} = \\frac{49}{50} = <strong>0.98 \\text{ (or } 98\\%\\text{)}</strong></span>.</p>
          <p><strong>(ii) Expected defective bulbs in 5000:</strong><br>
          Defect rate = <span class="math">\\frac{24}{1200} = \\frac{1}{50} = 0.02</span>.<br>
          Expected defectives = <span class="math">5000 \\times 0.02 = <strong>100 bulbs</strong></span>.</p>
        </div>
      </div>
      <div class="cbq-card">
        <div class="cbq-type" style="color:#10b981;">⚡ Data Interpretation &amp; Misleading Graphs</div>
        <div class="cbq-question">Why is it essential for a bar chart or histogram to maintain a uniform width and start from 0 on the vertical axis, or use a kink (zigzag line) if starting above 0?</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">
          <p>The human eye perceives differences in data based on the relative heights and visual areas of bars. If the vertical scale does not start at 0 and omits a break/kink, small differences between data values are exaggerated dramatically, creating a false visual impression. Uniform bar widths ensure the area of each bar is strictly proportional to its frequency.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="ch-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(3)">← Chapter 3: Quadrilaterals</button>
    <button class="ch-nav-btn next" onclick="showChapter(5)">Chapter 5: Squares &amp; Roots →</button>
  </div>
</section>
`;

fs.writeFileSync(path.join(outDir, 'ch4.html'), ch4Html, 'utf8');
console.log('Generated ch4.html');
