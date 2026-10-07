const fs = require('fs');
const path = require('path');

const chDir = path.join(__dirname, '..', 'chapters-c8m');
if (!fs.existsSync(chDir)) fs.mkdirSync(chDir, { recursive: true });

const c8Chapters = [
  {
    n: 1,
    title: 'A Square and A Cube',
    part: 'Part 1',
    subtitle: 'Square Numbers, The 100-Locker Exploration, Sum of Odd Numbers, Cube Numbers & Pythagorean Triplets',
    concepts: `
      <li><strong>Square Numbers:</strong> A natural number <em>n</em> is a square number if <em>n = m²</em> for some natural number <em>m</em>. Square numbers can only end in <strong>0, 1, 4, 5, 6, or 9</strong>.</li>
      <li><strong>The 100-Locker / Door Problem:</strong> A door toggled by every person <em>k</em> (where <em>k</em> divides the door number) ends up open if and only if it has an <strong>odd number of factors</strong>. Only <strong>perfect squares</strong> have an odd number of factors because factors usually come in pairs (a × b = n), except when a = b.</li>
      <li><strong>Sum of Consecutive Odds:</strong> The sum of the first <em>n</em> consecutive odd natural numbers is always <em>n²</em>: <code>1 + 3 + 5 + ... + (2n − 1) = n²</code>.</li>
      <li><strong>Consecutive Squares Property:</strong> There are exactly <strong>2n non-square numbers</strong> strictly between <em>n²</em> and <em>(n + 1)²</em>.</li>
      <li><strong>Cube Numbers:</strong> A number <em>n</em> is a perfect cube if <em>n = m³</em>. Cube of an even number is even; cube of an odd number is odd.</li>
      <li><strong>Pythagorean Triplets:</strong> For any natural number <em>m &gt; 1</em>: <code>(2m)² + (m² − 1)² = (m² + 1)²</code>.</li>`,
    questions: [
      {
        id: 'c8m_ch1_q1',
        num: 'Q1',
        text: 'In the classic 100-locker exploration, 100 closed lockers are lined up in a school hallway. Student 1 visits every locker and opens it. Student 2 visits every 2nd locker (2, 4, 6...) and closes it. Student 3 visits every 3rd locker (3, 6, 9...) and changes its state (opens if closed, closes if open). This process continues up to Student 100.<br>(a) Which lockers remain OPEN at the end of the process?<br>(b) Why do only these specific lockers remain open?<br>(c) How many total lockers remain open out of the 100?',
        marks: '4 Marks',
        steps: [
          '<strong>(a) Lockers remaining OPEN:</strong> Lockers numbered <strong>1, 4, 9, 16, 25, 36, 49, 64, 81, and 100</strong>.',
          '<strong>(b) Mathematical Reason:</strong> Locker number <em>L</em> is toggled once for every factor (divisor) it possesses. A closed locker will end up OPEN if and only if it is toggled an <strong>odd number of times</strong> (i.e. has an odd number of positive divisors). In general, factors come in distinct pairs (d, L/d). The only numbers with an odd number of factors are <strong>perfect squares</strong>, where one factor pair consists of identical integers (√L × √L = L).',
          '<strong>(c) Total count:</strong> The perfect squares from 1 to 100 are 1², 2², 3², ..., 10². Exactly <strong>10 lockers</strong> remain open.'
        ],
        scheme: [
          { key: 'Correct list of open lockers (1, 4, 9, ..., 100)', marks: '1 Mark' },
          { key: 'Explanation that factors pair up except for perfect squares', marks: '2 Marks' },
          { key: 'Conclusion: 10 lockers remain open', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch1_q2',
        num: 'Q2',
        text: 'Using the property that the sum of consecutive odd numbers equals a perfect square:<br>(a) Express 64 as the sum of 8 odd numbers.<br>(b) Express 121 as the sum of 11 odd numbers.<br>(c) Without adding, find the sum: 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19 + 21 + 23.',
        marks: '3 Marks',
        steps: [
          '<strong>(a) Express 64:</strong> 64 = 8². Sum of first 8 odd numbers = <span class="math">1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 = 64</span>.',
          '<strong>(b) Express 121:</strong> 121 = 11². Sum of first 11 odd numbers = <span class="math">1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19 + 21 = 121</span>.',
          '<strong>(c) Find sum:</strong> Counting terms: 1, 3, 5, ..., 23 has <em>n = 12</em> consecutive odd numbers. By formula, Sum = <em>n²</em> = 12² = <span class="math">144</span>.'
        ],
        scheme: [
          { key: 'Part (a) correctly written', marks: '1 Mark' },
          { key: 'Part (b) correctly written', marks: '1 Mark' },
          { key: 'Part (c) identifying n = 12 and evaluating 12² = 144', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch1_q3',
        num: 'Q3',
        text: 'How many non-square natural numbers lie strictly between the squares of the following numbers?<br>(i) 12² and 13²<br>(ii) 25² and 26²<br>(iii) 99² and 100²',
        marks: '3 Marks',
        steps: [
          '<strong>Formula:</strong> The number of non-square natural numbers strictly between <em>n²</em> and <em>(n + 1)²</em> is exactly <strong>2n</strong>: ((n + 1)² − n² − 1 = 2n + 1 − 1 = 2n).',
          '<strong>(i) Between 12² and 13²:</strong> n = 12 ⟹ Count = 2(12) = <span class="math">24 non-square numbers</span>.',
          '<strong>(ii) Between 25² and 26²:</strong> n = 25 ⟹ Count = 2(25) = <span class="math">50 non-square numbers</span>.',
          '<strong>(iii) Between 99² and 100²:</strong> n = 99 ⟹ Count = 2(99) = <span class="math">198 non-square numbers</span>.'
        ],
        scheme: [
          { key: 'Property statement 2n between n² and (n+1)²', marks: '½ Mark' },
          { key: 'Correct calculation for (i), (ii), (iii)', marks: '2½ Marks' }
        ]
      },
      {
        id: 'c8m_ch1_q4',
        num: 'Q4',
        text: 'Find a Pythagorean triplet whose smallest member is:<br>(a) 6<br>(b) 14<br>(c) 16',
        marks: '3 Marks',
        steps: [
          '<strong>General Form:</strong> For an integer <em>m &gt; 1</em>, the three numbers <strong>2m, m² − 1, m² + 1</strong> form a Pythagorean triplet.',
          '<strong>(a) Smallest member = 6:</strong> Let 2m = 6 ⟹ m = 3. Then m² − 1 = 3² − 1 = 8, and m² + 1 = 3² + 1 = 10. Verification: 6² + 8² = 36 + 64 = 100 = 10². Triplet: <span class="math">(6, 8, 10)</span>.',
          '<strong>(b) Smallest member = 14:</strong> Let 2m = 14 ⟹ m = 7. Then m² − 1 = 7² − 1 = 48, and m² + 1 = 7² + 1 = 50. Verification: 14² + 48² = 196 + 2304 = 2500 = 50². Triplet: <span class="math">(14, 48, 50)</span>.',
          '<strong>(c) Smallest member = 16:</strong> Let 2m = 16 ⟹ m = 8. Then m² − 1 = 8² − 1 = 63, and m² + 1 = 8² + 1 = 65. Verification: 16² + 63² = 256 + 3969 = 4225 = 65². Triplet: <span class="math">(16, 63, 65)</span>.'
        ],
        scheme: [
          { key: 'Setting 2m = 6 and finding (6, 8, 10)', marks: '1 Mark' },
          { key: 'Setting 2m = 14 and finding (14, 48, 50)', marks: '1 Mark' },
          { key: 'Setting 2m = 16 and finding (16, 63, 65)', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch1_q5',
        num: 'Q5',
        text: 'What is the smallest number by which 675 must be multiplied so that the product becomes a perfect cube? Also find the cube root of the resulting product.',
        marks: '3 Marks',
        steps: [
          '<strong>Step 1: Prime factorisation of 675:</strong><br>675 = 5 × 135 = 5 × 5 × 27 = 3 × 3 × 3 × 5 × 5 = <span class="math">3³ × 5²</span>.',
          '<strong>Step 2: Grouping into triplets:</strong> The prime factor 3 appears in a complete triplet (3³). The prime factor 5 appears only twice (5²). To make it a perfect cube, we need one more factor of 5.',
          '<strong>Smallest multiplier:</strong> The required smallest number to multiply by is <span class="math">5</span>.',
          '<strong>Resulting product:</strong> 675 × 5 = 3375 = 3³ × 5³ = (3 × 5)³ = 15³.<br>Cube root = <span class="math">∛3375 = 15</span>.'
        ],
        scheme: [
          { key: 'Prime factorisation 675 = 3³ × 5²', marks: '1 Mark' },
          { key: 'Identifying missing factor 5', marks: '1 Mark' },
          { key: 'Cube root ∛3375 = 15', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Architectural Tessellation & Square Tiles',
      text: 'A community hall of dimensions 18 meters by 12 meters needs to be paved with the largest possible identical square tiles without cutting any tile.<br>(a) Find the side of the largest square tile that can be used.<br>(b) Calculate the total number of square tiles needed.<br>(c) If each tile has area side², verify that the total area of all tiles equals the hall area.',
      ans: '<strong>(a)</strong> The side of the largest square tile is the HCF of 18 m and 12 m. HCF(18, 12) = <strong>6 meters</strong> (or for practical paving, 60 cm if in centimeters). Using 6 m tiles, side = <strong>6 m</strong>.<br><strong>(b)</strong> Number of tiles = (18 × 12) / (6 × 6) = 216 / 36 = <strong>6 tiles</strong> (if using 60 cm tiles: (1800 × 1200)/(60 × 60) = 600 tiles).<br><strong>(c)</strong> Total area = 6 × (6 × 6) = 6 × 36 = 216 m². Hall area = 18 × 12 = 216 m². Both match perfectly.'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> The square of any odd integer is always of the form 8k + 1 for some integer k.<br><strong>Reason (R):</strong> Any odd integer can be represented as 2m + 1, and its square is (2m + 1)² = 4m(m + 1) + 1, where m(m + 1) is always even.<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation of A. (b) Both A and R are true, but R is not correct explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation of A.</strong><br><em>Explanation:</em> Since one of m or m + 1 is always even, m(m + 1) = 2k for some integer k. Hence (2m + 1)² = 4(2k) + 1 = 8k + 1. For example, 3² = 9 = 8(1) + 1, 5² = 25 = 8(3) + 1, 7² = 49 = 8(6) + 1.'
    }
  },

  {
    n: 2,
    title: 'Power Play',
    part: 'Part 1',
    subtitle: 'Exponents, Paper-Folding Doubling Puzzle, Index Laws, Scientific Notation & Unit Digit Cyclicity',
    concepts: `
      <li><strong>Powers and Exponents:</strong> In <em>aⁿ</em>, <em>a</em> is the <strong>base</strong> and <em>n</em> is the <strong>exponent / power</strong>. It represents repeated multiplication of <em>a</em> by itself <em>n</em> times.</li>
      <li><strong>Paper-Folding Doubling Model:</strong> Folding a paper in half repeatedly doubles its layers: 1 fold = 2¹ = 2 layers; 2 folds = 2² = 4 layers; 3 folds = 2³ = 8 layers; <em>n</em> folds = 2ⁿ layers. Exponential growth rapidly overtakes linear growth.</li>
      <li><strong>Laws of Indices:</strong>
        <ul>
          <li>Product Law: <code>aᵐ × aⁿ = aᵐ⁺ⁿ</code></li>
          <li>Quotient Law: <code>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</code></li>
          <li>Power Law: <code>(aᵐ)ⁿ = aᵐⁿ</code></li>
          <li>Product Bases: <code>aᵐ × bᵐ = (ab)ᵐ</code></li>
          <li>Zero Exponent: <code>a⁰ = 1</code> (a ≠ 0)</li>
          <li>Negative Exponents: <code>a⁻ⁿ = 1 / aⁿ</code> and <code>(a/b)⁻ⁿ = (b/a)ⁿ</code></li>
        </ul>
      </li>
      <li><strong>Standard Form (Scientific Notation):</strong> Writing numbers as <code>k × 10ᵐ</code> where 1 ≤ k &lt; 10.</li>
      <li><strong>Cyclicity of Units Digits:</strong> Powers of 2, 3, 7, 8 repeat in cycles of 4; powers of 4 and 9 repeat in cycles of 2.</li>`,
    questions: [
      {
        id: 'c8m_ch2_q1',
        num: 'Q1',
        text: 'A sheet of paper of thickness 0.1 mm is folded in half repeatedly.<br>(a) Write an exponential expression for the thickness after n folds.<br>(b) Calculate the thickness (in mm and cm) after 10 folds.<br>(c) How many folds would be needed for the thickness to exceed 1 meter (1000 mm)?',
        marks: '3 Marks',
        steps: [
          '<strong>(a) Formula:</strong> After <em>n</em> folds, the number of layers is 2ⁿ. Total thickness = <span class="math">T(n) = 0.1 × 2ⁿ mm</span>.',
          '<strong>(b) For n = 10 folds:</strong> 2¹⁰ = 1024. Thickness = 0.1 × 1024 = <span class="math">102.4 mm = 10.24 cm</span>.',
          '<strong>(c) Exceeding 1 meter:</strong> We require 0.1 × 2ⁿ &gt; 1000 ⟹ 2ⁿ &gt; 10,000. Since 2¹³ = 8,192 and 2¹⁴ = 16,384, at least <span class="math">14 folds</span> are required.'
        ],
        scheme: [
          { key: 'Expression T(n) = 0.1 × 2ⁿ', marks: '1 Mark' },
          { key: 'Evaluating n = 10 as 102.4 mm (10.24 cm)', marks: '1 Mark' },
          { key: 'Determining n = 14 folds', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch2_q2',
        num: 'Q2',
        text: 'Simplify using laws of exponents and express with positive exponents:<br>(a) (2⁻³ × 5⁻³) ÷ 10⁻⁵<br>(b) [(1/3)⁻² − (1/2)⁻³] ÷ (1/4)⁻²<br>(c) (3⁻⁷ ÷ 3⁻¹⁰) × 3⁻⁵',
        marks: '3 Marks',
        steps: [
          '<strong>(a):</strong> Using aᵐ × bᵐ = (ab)ᵐ: 2⁻³ × 5⁻³ = (2 × 5)⁻³ = 10⁻³. Then 10⁻³ ÷ 10⁻⁵ = 10⁻³ ⁻ ⁽⁻⁵⁾ = 10⁻³ ⁺ ⁵ = 10² = <span class="math">100</span>.',
          '<strong>(b):</strong> (1/3)⁻² = 3² = 9. (1/2)⁻³ = 2³ = 8. Inside bracket: 9 − 8 = 1. Divisor: (1/4)⁻² = 4² = 16. Result: 1 ÷ 16 = <span class="math">1/16 = 4⁻²</span>.',
          '<strong>(c):</strong> 3⁻⁷ ÷ 3⁻¹⁰ = 3⁻⁷ ⁻ ⁽⁻¹⁰⁾ = 3³ = 27. Then 3³ × 3⁻⁵ = 3³ ⁻ ⁵ = 3⁻² = <span class="math">1/3² = 1/9</span>.'
        ],
        scheme: [
          { key: 'Part (a) simplification = 100', marks: '1 Mark' },
          { key: 'Part (b) simplification = 1/16', marks: '1 Mark' },
          { key: 'Part (c) simplification = 1/9', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch2_q3',
        num: 'Q3',
        text: 'Find the unit digit of:<br>(a) 3⁶⁵<br>(b) 7⁸²<br>(c) 2¹⁰⁰',
        marks: '3 Marks',
        steps: [
          '<strong>(a) Unit digit of 3⁶⁵:</strong> Powers of 3 have cyclicity 4 (3, 9, 7, 1). Divide exponent by 4: 65 ÷ 4 = 16 remainder 1. Unit digit = 3¹ = <span class="math">3</span>.',
          '<strong>(b) Unit digit of 7⁸²:</strong> Powers of 7 have cyclicity 4 (7, 9, 3, 1). Divide exponent by 4: 82 ÷ 4 = 20 remainder 2. Unit digit = 7² = 49 ⟹ <span class="math">9</span>.',
          '<strong>(c) Unit digit of 2¹⁰⁰:</strong> Powers of 2 have cyclicity 4 (2, 4, 8, 6). 100 ÷ 4 = 25 remainder 0 (equivalent to 4th power in cycle). Unit digit = 2⁴ = 16 ⟹ <span class="math">6</span>.'
        ],
        scheme: [
          { key: 'Cyclicity of 3 used: remainder 1 ⟹ 3', marks: '1 Mark' },
          { key: 'Cyclicity of 7 used: remainder 2 ⟹ 9', marks: '1 Mark' },
          { key: 'Cyclicity of 2 used: remainder 0 ⟹ 6', marks: '1 Mark' }
        ]
      },
      {
        id: 'c8m_ch2_q4',
        num: 'Q4',
        text: 'Express in scientific standard form (k × 10ᵐ):<br>(a) The distance of the Sun from Earth is approximately 149,600,000,000 meters.<br>(b) The size of a plant cell is 0.00001275 meters.<br>(c) The thickness of a human hair is roughly 0.00008 meters.',
        marks: '3 Marks',
        steps: [
          '<strong>(a) Sun distance:</strong> Shift decimal 11 places left: <span class="math">1.496 × 10¹¹ m</span>.',
          '<strong>(b) Plant cell:</strong> Shift decimal 5 places right: <span class="math">1.275 × 10⁻⁵ m</span>.',
          '<strong>(c) Human hair:</strong> Shift decimal 5 places right: <span class="math">8.0 × 10⁻⁵ m</span>.'
        ],
        scheme: [
          { key: 'Correct standard form for (a)', marks: '1 Mark' },
          { key: 'Correct standard form for (b)', marks: '1 Mark' },
          { key: 'Correct standard form for (c)', marks: '1 Mark' }
        ]
      }
    ],
    cbq: {
      title: 'Digital Data Storage Growth (Powers of 2)',
      text: 'Computer memory uses powers of 2. 1 Kilobyte (KB) = 2¹⁰ bytes, 1 Megabyte (MB) = 2²⁰ bytes, 1 Gigabyte (GB) = 2³⁰ bytes.<br>(a) Express 1 Gigabyte in bytes as a power of 2.<br>(b) How many Kilobytes are contained in a 4 GB flash drive?<br>(c) If a photo file takes 2¹⁶ bytes, how many such photos can fit in 1 MB of storage?',
      ans: '<strong>(a)</strong> 1 GB = <strong>2³⁰ bytes = 1,073,741,824 bytes</strong>.<br><strong>(b)</strong> 4 GB = 4 × 2³⁰ bytes = 2² × 2³⁰ = 2³² bytes. Since 1 KB = 2¹⁰ bytes, number of KB = 2³² / 2¹⁰ = 2²² = <strong>4,194,304 KB</strong>.<br><strong>(c)</strong> 1 MB = 2²⁰ bytes. Number of photos = 2²⁰ / 2¹⁶ = 2⁴ = <strong>16 photos</strong>.'
    },
    hots: {
      text: '<strong>Assertion (A):</strong> (a/b)⁻ᵐ × (b/a)⁻ᵐ = 1 for all non-zero real numbers a, b and any integer m.<br><strong>Reason (R):</strong> (a/b)⁻ᵐ = (b/a)ᵐ, and (b/a)ᵐ × (b/a)⁻ᵐ = (b/a)ᵐ⁻ᵐ = (b/a)⁰ = 1.<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation of A. (b) Both A and R are true, but R is not correct explanation. (c) A is true, R is false. (d) A is false, R is true.',
      ans: '<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation of A.</strong><br><em>Explanation:</em> Applying index laws directly converts (a/b)⁻ᵐ to (b/a)ᵐ, and multiplying powers of identical base yields (b/a)⁰ = 1.'
    }
  }
];

// Helper to generate full HTML for a chapter
function renderChapterHtml(ch) {
  const qHtml = ch.questions.map(q => `
  <div class="q-card" id="${q.id}">
    <div class="q-head" onclick="toggleQ('${q.id}')">
      <div class="q-num">${q.num}</div>
      <div class="q-text">${q.text}</div>
      <div class="q-marks">${q.marks}</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✓ Suggested Step-by-Step Solution</div>
        <div class="answer-text">
${q.steps.map(s => `          <div class="step">${s}</div>`).join('\n')}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">Suggested Marks Distribution</div>
${q.scheme.map(r => `          <div class="marking-row"><span class="marking-key">${r.key}</span><span class="marking-marks">${r.marks}</span></div>`).join('\n')}
        </div>
      </div>
    </div>
  </div>`).join('\n');

  const cbqHtml = `
  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency-Based Practice Questions — Chapter ${ch.n}</span><span class="cbq-badge">NCF-SE / OlympiadQuiz</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #4f46e5;">
        <div class="cbq-type" style="color:#4f46e5;">📝 Case Study &amp; Conceptual Modeling</div>
        <div class="cbq-question"><strong>${ch.cbq.title}:</strong> ${ch.cbq.text}</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">${ch.cbq.ans}</div>
      </div>
      <div class="cbq-card" style="border-left:4px solid #f59e0b;">
        <div class="cbq-type" style="color:#f59e0b;">🧠 HOTS Practice Questions (Assertion-Reasoning)</div>
        <div class="cbq-question">${ch.hots.text}</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">${ch.hots.ans}</div>
      </div>
    </div>
  </div>`;

  return `<section class="chapter-section" id="ch${ch.n}">
  <div class="chapter-header">
    <div class="ch-badge">${ch.n}</div>
    <div class="chapter-header-info">
      <h2>Chapter ${ch.n}: ${ch.title}</h2>
      <p>NCERT Ganita Prakash (${ch.part}) — ${ch.subtitle}</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Concepts &amp; Mathematical Foundations</div>
    <ul class="concept-list">
${ch.concepts}
    </ul>
  </div>

  <div class="ex-div">OlympiadQuiz Chapter Practice Questions &amp; Concept Applications</div>
${qHtml}

${cbqHtml}
</section>`;
}

console.log('Script template ready.');
