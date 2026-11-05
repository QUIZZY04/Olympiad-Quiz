// scripts/builders/c7m-additions-part2.js
// Verbatim physical NCERT exercise additions for Class 7 Mathematics Chapters 3 and 4
module.exports = {
  getAdditions() {
    return {
      3: [
        `  <div class="q-card" id="q3_1_1">
    <div class="q-head" onclick="toggleQ('q3_1_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Find the range of heights of any ten students of your class.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Let the heights (in cm) of 10 students of the class be:<br>
            128, 132, 135, 139, 140, 142, 145, 148, 150, 152 cm.<br>
            Highest height = 152 cm.<br>
            Lowest height = 128 cm.<br>
            <span class="math">Range = Highest value − Lowest value = 152 cm − 128 cm = <strong>24 cm</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> The range of heights is <strong>24 cm</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Definition: Range = Highest value − Lowest value</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Accurate range computation with sample data</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q3_1_2">
    <div class="q-head" onclick="toggleQ('q3_1_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Organise the following marks in a class assessment in a tabular form:<br>4, 6, 7, 5, 3, 5, 4, 5, 2, 6, 2, 5, 1, 9, 6, 5, 8, 4, 6, 7<br>(i) Which number is the highest?<br>(ii) Which number is the lowest?<br>(iii) What is the range of the data?<br>(iv) Find the arithmetic mean.</div>
      <div class="q-marks">4 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>Frequency Distribution Table:</strong><br>
            Marks: 1 (freq: 1), 2 (freq: 2), 3 (freq: 1), 4 (freq: 3), 5 (freq: 5), 6 (freq: 4), 7 (freq: 2), 8 (freq: 1), 9 (freq: 1).<br>
            Total students = 20.<br>
            <strong>(i) Highest number:</strong> <span class="math"><strong>9</strong></span>.<br>
            <strong>(ii) Lowest number:</strong> <span class="math"><strong>1</strong></span>.<br>
            <strong>(iii) Range:</strong> <span class="math">Highest − Lowest = 9 − 1 = <strong>8</strong></span>.<br>
            <strong>(iv) Arithmetic Mean:</strong><br>
            Sum of all observations = (1×1) + (2×2) + (3×1) + (4×3) + (5×5) + (6×4) + (7×2) + (8×1) + (9×1)<br>
            = 1 + 4 + 3 + 12 + 25 + 24 + 14 + 8 + 9 = 100.<br>
            <span class="math">Mean = Sum of observations / Total number of observations = 100 / 20 = <strong>5</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Frequency table correctly constructed</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Parts (i), (ii), (iii): Highest = 9, Lowest = 1, Range = 8</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Part (iv): Mean = 100/20 = 5</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q3_1_4">
    <div class="q-head" onclick="toggleQ('q3_1_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">A cricketer scores the following runs in eight innings: 58, 76, 40, 35, 46, 45, 0, 100. Find the mean score.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Total number of innings = 8.<br>
            Total runs scored = <span class="math">58 + 76 + 40 + 35 + 46 + 45 + 0 + 100 = <strong>400</strong></span>.<br>
            <span class="math">Mean score = Total runs / Number of innings = 400 / 8 = <strong>50 runs</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> The mean score of the cricketer is <strong>50 runs</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Sum of runs = 400</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Mean = 400/8 = 50 with units</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q3_1_6">
    <div class="q-head" onclick="toggleQ('q3_1_6')">
      <div class="q-num">Q6</div>
      <div class="q-text">The marks (out of 100) obtained by a group of students in a science test are 85, 76, 90, 85, 39, 48, 56, 95, 81 and 75. Find the:<br>(i) Highest and the lowest marks obtained by the students.<br>(ii) Range of the marks obtained.<br>(iii) Mean marks obtained by the group.</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Arranging marks in ascending order: 39, 48, 56, 75, 76, 81, 85, 85, 90, 95.<br>
            <strong>(i)</strong> Highest marks = <strong>95</strong>; Lowest marks = <strong>39</strong>.<br>
            <strong>(ii)</strong> Range = <span class="math">95 − 39 = <strong>56</strong></span>.<br>
            <strong>(iii)</strong> Mean marks = <span class="math">(39 + 48 + 56 + 75 + 76 + 81 + 85 + 85 + 90 + 95) / 10 = 730 / 10 = <strong>73</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> (i) Highest: 95, Lowest: 39; (ii) Range: 56; (iii) Mean: <strong>73</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Part (i): Highest = 95, Lowest = 39</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (ii): Range = 56</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Part (iii): Mean = 730/10 = 73</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q3_1_7">
    <div class="q-head" onclick="toggleQ('q3_1_7')">
      <div class="q-num">Q7</div>
      <div class="q-text">The enrolment in a school during six consecutive years was as follows: 1555, 1670, 1750, 2013, 2540, 2820. Find the mean enrolment of the school for this period.</div>
      <div class="q-marks">2 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Total enrolment over 6 years = <span class="math">1555 + 1670 + 1750 + 2013 + 2540 + 2820 = <strong>12348</strong></span>.<br>
            Number of years = 6.<br>
            <span class="math">Mean enrolment = 12348 / 6 = <strong>2058</strong></span>.
          </div>
          <p><strong>Final Answer:</strong> The mean enrolment of the school for this period is <strong>2058</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Sum of enrolments = 12348</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Mean = 12348/6 = 2058</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q3_1_9">
    <div class="q-head" onclick="toggleQ('q3_1_9')">
      <div class="q-num">Q9</div>
      <div class="q-text">The heights of 10 girls were measured in cm and the results are as follows: 135, 150, 139, 128, 151, 132, 146, 149, 143, 141.<br>(i) What is the height of the tallest girl?<br>(ii) What is the height of the shortest girl?<br>(iii) What is the range of the data?<br>(iv) What is the mean height of the girls?<br>(v) How many girls have heights more than the mean height?</div>
      <div class="q-marks">4 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Arranging heights in ascending order: 128, 132, 135, 139, 141, 143, 146, 149, 150, 151 cm.<br>
            <strong>(i) Height of tallest girl:</strong> <span class="math"><strong>151 cm</strong></span>.<br>
            <strong>(ii) Height of shortest girl:</strong> <span class="math"><strong>128 cm</strong></span>.<br>
            <strong>(iii) Range:</strong> <span class="math">151 − 128 = <strong>23 cm</strong></span>.<br>
            <strong>(iv) Mean height:</strong><br>
            <span class="math">(128 + 132 + 135 + 139 + 141 + 143 + 146 + 149 + 150 + 151) / 10 = 1414 / 10 = <strong>141.4 cm</strong></span>.<br>
            <strong>(v) Girls with height &gt; 141.4 cm:</strong><br>
            The heights greater than 141.4 cm are 143, 146, 149, 150, 151 (total <strong>5 girls</strong>).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Parts (i), (ii), (iii): 151 cm, 128 cm, Range = 23 cm</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Part (iv): Mean = 1414/10 = 141.4 cm</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Part (v): Count = 5 girls</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q3_2_3">
    <div class="q-head" onclick="toggleQ('q3_2_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">The weights (in kg) of 15 students of a class are: 38, 42, 35, 37, 45, 50, 32, 43, 43, 40, 36, 38, 43, 38, 47.<br>(i) Find the mode and median of this data.<br>(ii) Is there more than one mode?</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            Arranging data in ascending order:<br>
            32, 35, 36, 37, 38, 38, 38, 40, 42, 43, 43, 43, 45, 47, 50.<br>
            <strong>(i) Mode:</strong> Both 38 and 43 occur 3 times (highest frequency).<br>
            <span class="math">Mode = <strong>38 kg</strong> and <strong>43 kg</strong></span> (Bimodal).<br>
            <strong>Median:</strong> Middle observation out of <span class="math">n = 15</span> is the <span class="math">(15 + 1)/2 = 8</span>th term.<br>
            8th term = <span class="math"><strong>40 kg</strong></span>.<br>
            <strong>(ii)</strong> Yes, there are <strong>two modes (38 kg and 43 kg)</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Mode = 38 and 43</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Median = 40 kg</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Confirming two modes exist</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q3_2_5">
    <div class="q-head" onclick="toggleQ('q3_2_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Tell whether the statement is true or false:<br>(i) The mode is always one of the numbers in a data.<br>(ii) The mean is one of the numbers in a data.<br>(iii) The median is always one of the numbers in a data.<br>(iv) The data 6, 4, 3, 8, 9, 12, 13, 9 has mean 9.</div>
      <div class="q-marks">2 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) True:</strong> Mode is the observation with the highest frequency, so it must be from the data.<br>
            <strong>(ii) False:</strong> Mean is the average sum/count, which can be a fractional or different value not present in the original dataset.<br>
            <strong>(iii) True:</strong> For an odd number of observations (as standard in Class 7 definition), median is the middle observation from the dataset.<br>
            <strong>(iv) False:</strong> Sum = 6 + 4 + 3 + 8 + 9 + 12 + 13 + 9 = 64. Mean = 64 / 8 = <strong>8</strong> (not 9).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct True/False statement with justification</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q3_4_1">
    <div class="q-head" onclick="toggleQ('q3_4_1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Tell whether the following is certain to happen, impossible, can happen but not certain:<br>(i) You are older today than yesterday.<br>(ii) A tossed coin will land heads up.<br>(iii) A die when tossed shall land up with 8 on top.<br>(iv) The next traffic light seen will be green.<br>(v) Tomorrow will be a cloudy day.</div>
      <div class="q-marks">2.5 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <strong>Certain to happen</strong> (Age increases continuously with time).<br>
            <strong>(ii)</strong> <strong>Can happen but not certain</strong> (Coin has two equally likely outcomes: heads or tails).<br>
            <strong>(iii)</strong> <strong>Impossible</strong> (A standard six-sided die has numbers only from 1 to 6).<br>
            <strong>(iv)</strong> <strong>Can happen but not certain</strong> (Traffic light may be red, yellow or green).<br>
            <strong>(v)</strong> <strong>Can happen but not certain</strong> (Weather depends on atmospheric conditions).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct chance classification</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ],

      4: [
        `  <div class="q-card" id="q4_1_2">
    <div class="q-head" onclick="toggleQ('q4_1_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Check whether the value given in the brackets is a solution to the given equation or not:<br>(a) n + 5 = 19 (n = 1)<br>(b) 7n + 5 = 19 (n = −2)<br>(c) 7n + 5 = 19 (n = 2)<br>(d) 4p − 3 = 13 (p = 1)<br>(e) 4p − 3 = 13 (p = −4)<br>(f) 4p − 3 = 13 (p = 0)</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) n + 5 = 19, n = 1:</strong><br>
            LHS = 1 + 5 = 6 ≠ RHS (19). Hence, <span class="math">n = 1</span> is <strong>not a solution</strong>.<br>
            <strong>(b) 7n + 5 = 19, n = −2:</strong><br>
            LHS = 7(−2) + 5 = −14 + 5 = −9 ≠ RHS (19). <strong>Not a solution</strong>.<br>
            <strong>(c) 7n + 5 = 19, n = 2:</strong><br>
            LHS = 7(2) + 5 = 14 + 5 = 19 = RHS. Hence, <span class="math">n = 2</span> is a <strong>solution</strong>.<br>
            <strong>(d) 4p − 3 = 13, p = 1:</strong><br>
            LHS = 4(1) − 3 = 1 ≠ RHS (13). <strong>Not a solution</strong>.<br>
            <strong>(e) 4p − 3 = 13, p = −4:</strong><br>
            LHS = 4(−4) − 3 = −16 − 3 = −19 ≠ RHS. <strong>Not a solution</strong>.<br>
            <strong>(f) 4p − 3 = 13, p = 0:</strong><br>
            LHS = 4(0) − 3 = −3 ≠ RHS. <strong>Not a solution</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">LHS vs RHS comparison with clear conclusion for all parts</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q4_1_3">
    <div class="q-head" onclick="toggleQ('q4_1_3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Solve the following equations by trial and error method:<br>(i) 5p + 2 = 17<br>(ii) 3m − 14 = 4</div>
      <div class="q-marks">3 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) 5p + 2 = 17:</strong><br>
            Try p = 1: LHS = 5(1) + 2 = 7 ≠ 17.<br>
            Try p = 2: LHS = 5(2) + 2 = 12 ≠ 17.<br>
            Try p = 3: LHS = 5(3) + 2 = 15 + 2 = 17 = RHS.<br>
            Solution is <span class="math"><strong>p = 3</strong></span>.<br>
            <strong>(ii) 3m − 14 = 4:</strong><br>
            Try m = 4: LHS = 3(4) − 14 = −2 ≠ 4.<br>
            Try m = 5: LHS = 3(5) − 14 = 1 ≠ 4.<br>
            Try m = 6: LHS = 3(6) − 14 = 18 − 14 = 4 = RHS.<br>
            Solution is <span class="math"><strong>m = 6</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Trial steps shown with final correct value</span><span class="marking-marks">1.5 Marks each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q4_1_4">
    <div class="q-head" onclick="toggleQ('q4_1_4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Write equations for the following statements:<br>(i) The sum of numbers x and 4 is 9.<br>(ii) 2 subtracted from y is 8.<br>(iii) Ten times a is 70.<br>(iv) The number b divided by 5 gives 6.<br>(v) Three-fourth of t is 15.<br>(vi) Seven times m plus 7 gets you 77.<br>(vii) One-fourth of a number x minus 4 gives 4.<br>(viii) If you take away 6 from 6 times y, you get 60.<br>(ix) If you add 3 to one-third of z, you get 30.</div>
      <div class="q-marks">4.5 Marks (1/2 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> <span class="math"><strong>x + 4 = 9</strong></span><br>
            <strong>(ii)</strong> <span class="math"><strong>y − 2 = 8</strong></span><br>
            <strong>(iii)</strong> <span class="math"><strong>10a = 70</strong></span><br>
            <strong>(iv)</strong> <span class="math"><strong>b / 5 = 6</strong></span><br>
            <strong>(v)</strong> <span class="math"><strong>(3/4)t = 15</strong></span><br>
            <strong>(vi)</strong> <span class="math"><strong>7m + 7 = 77</strong></span><br>
            <strong>(vii)</strong> <span class="math"><strong>(x / 4) − 4 = 4</strong></span><br>
            <strong>(viii)</strong> <span class="math"><strong>6y − 6 = 60</strong></span><br>
            <strong>(ix)</strong> <span class="math"><strong>(z / 3) + 3 = 30</strong></span>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct algebraic equation translation</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q4_1_5">
    <div class="q-head" onclick="toggleQ('q4_1_5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Write the following equations in statement forms:<br>(i) p + 4 = 15 &nbsp;&nbsp; (ii) m − 7 = 3 &nbsp;&nbsp; (iii) 2m = 7 &nbsp;&nbsp; (iv) m/5 = 3<br>(v) 3m/5 = 6 &nbsp;&nbsp; (vi) 3p + 4 = 25 &nbsp;&nbsp; (vii) 4p − 2 = 18 &nbsp;&nbsp; (viii) p/2 + 2 = 8</div>
      <div class="q-marks">4 Marks</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i)</strong> The sum of numbers p and 4 is 15.<br>
            <strong>(ii)</strong> 7 subtracted from m is 3.<br>
            <strong>(iii)</strong> Twice a number m is 7.<br>
            <strong>(iv)</strong> One-fifth of a number m is 3.<br>
            <strong>(v)</strong> Three-fifth of a number m is 6.<br>
            <strong>(vi)</strong> Three times a number p plus 4 gives 25.<br>
            <strong>(vii)</strong> 2 subtracted from four times a number p is 18.<br>
            <strong>(viii)</strong> Add 2 to half of a number p to get 8.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Accurate English mathematical statement for each equation</span><span class="marking-marks">1/2 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q4_3_2">
    <div class="q-head" onclick="toggleQ('q4_3_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Solve the following equations:<br>(a) 2(x + 4) = 12<br>(b) 3(n − 5) = 21<br>(c) 3(n − 5) = −21<br>(d) −4(2 + x) = 8<br>(e) 4(2 − x) = 8</div>
      <div class="q-marks">5 Marks (1 Mark each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) 2(x + 4) = 12:</strong><br>
            Divide both sides by 2: <span class="math">x + 4 = 6 ⇒ x = 6 − 4 = <strong>2</strong></span>.<br>
            <strong>(b) 3(n − 5) = 21:</strong><br>
            Divide both sides by 3: <span class="math">n − 5 = 7 ⇒ n = 7 + 5 = <strong>12</strong></span>.<br>
            <strong>(c) 3(n − 5) = −21:</strong><br>
            Divide both sides by 3: <span class="math">n − 5 = −7 ⇒ n = −7 + 5 = <strong>−2</strong></span>.<br>
            <strong>(d) −4(2 + x) = 8:</strong><br>
            Divide both sides by −4: <span class="math">2 + x = −2 ⇒ x = −2 − 2 = <strong>−4</strong></span>.<br>
            <strong>(e) 4(2 − x) = 8:</strong><br>
            Divide both sides by 4: <span class="math">2 − x = 2 ⇒ −x = 2 − 2 = 0 ⇒ <strong>x = 0</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each step of simplification and accurate variable value</span><span class="marking-marks">1 Mark each</span></div>
        </div>
      </div>
    </div>
  </div>`,

        `  <div class="q-card" id="q4_4_2">
    <div class="q-head" onclick="toggleQ('q4_4_2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Solve the following:<br>(a) The teacher tells the class that the highest marks obtained by a student in her class is twice the lowest marks plus 7. The highest score is 87. What is the lowest score?<br>(b) In an isosceles triangle, the base angles are equal. The vertex angle is 40°. What are the base angles of the triangle? (Remember, the sum of three angles of a triangle is 180°).<br>(c) Sachin scored twice as many runs as Rahul. Together, their runs fell two short of a double century. How many runs did each one score?</div>
      <div class="q-marks">4.5 Marks (1.5 Marks each)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a)</strong> Let the lowest marks be <span class="math">l</span>.<br>
            According to question: <span class="math">2l + 7 = 87 ⇒ 2l = 87 − 7 = 80 ⇒ l = 80 / 2 = <strong>40</strong></span>.<br>
            The lowest score is <strong>40</strong>.<br>
            <strong>(b)</strong> Let each base angle be <span class="math">b</span>.<br>
            Sum of angles in triangle = 180°:<br>
            <span class="math">b + b + 40° = 180° ⇒ 2b = 180° − 40° = 140° ⇒ b = 140° / 2 = <strong>70°</strong></span>.<br>
            Each base angle is <strong>70°</strong>.<br>
            <strong>(c)</strong> Let Rahul's runs be <span class="math">x</span>. Then Sachin's runs = <span class="math">2x</span>.<br>
            Together: <span class="math">x + 2x = 200 − 2 = 198</span>.<br>
            <span class="math">3x = 198 ⇒ x = 198 / 3 = 66</span>.<br>
            Rahul scored <strong>66 runs</strong> and Sachin scored <span class="math">2 × 66 = <strong>132 runs</strong></span>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each equation setup and final value</span><span class="marking-marks">1.5 Marks each</span></div>
        </div>
      </div>
    </div>
  </div>`
      ]
    };
  }
};
