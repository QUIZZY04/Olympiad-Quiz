// scripts/builders/gen-c12m-ch2.js
// Chapter 2: Inverse Trigonometric Functions (20 Questions)
const { createQCard, saveChapter } = require('./c12m-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f5f3ff; border:1px solid #ddd6fe; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#4f46e5; font-size:1.05rem;">📐 Master Reference Table: Principal Value Branches (PVB) of Inverse Trigonometric Functions</h4>
  <svg viewBox="0 0 880 280" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #c7d2fe;">
    <!-- PVB Table -->
    <rect x="20" y="20" width="840" height="240" rx="10" fill="#f8fafc" stroke="#6366f1" stroke-width="2"/>
    
    <!-- Header row -->
    <rect x="20" y="20" width="840" height="40" rx="10" fill="#eef2ff"/>
    <text x="120" y="45" font-family="sans-serif" font-size="13" font-weight="bold" fill="#3730a3" text-anchor="middle">Function $y = f(x)$</text>
    <text x="360" y="45" font-family="sans-serif" font-size="13" font-weight="bold" fill="#3730a3" text-anchor="middle">Domain</text>
    <text x="660" y="45" font-family="sans-serif" font-size="13" font-weight="bold" fill="#3730a3" text-anchor="middle">Principal Value Branch (Range)</text>

    <line x1="20" y1="60" x2="860" y2="60" stroke="#c7d2fe" stroke-width="1.5"/>

    <!-- Row 1: sin^-1 -->
    <text x="120" y="85" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4338ca" text-anchor="middle">$y = \\sin^{-1} x$</text>
    <text x="360" y="85" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">$[-1, 1]$</text>
    <text x="660" y="85" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$</text>
    <line x1="20" y1="95" x2="860" y2="95" stroke="#e2e8f0" stroke-width="1"/>

    <!-- Row 2: cos^-1 -->
    <text x="120" y="118" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4338ca" text-anchor="middle">$y = \\cos^{-1} x$</text>
    <text x="360" y="118" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">$[-1, 1]$</text>
    <text x="660" y="118" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">$[0, \\pi]$</text>
    <line x1="20" y1="128" x2="860" y2="128" stroke="#e2e8f0" stroke-width="1"/>

    <!-- Row 3: tan^-1 -->
    <text x="120" y="150" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4338ca" text-anchor="middle">$y = \\tan^{-1} x$</text>
    <text x="360" y="150" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">$\\mathbb{R}$</text>
    <text x="660" y="150" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">$\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$</text>
    <line x1="20" y1="160" x2="860" y2="160" stroke="#e2e8f0" stroke-width="1"/>

    <!-- Row 4: cosec^-1 -->
    <text x="120" y="182" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4338ca" text-anchor="middle">$y = \\operatorname{cosec}^{-1} x$</text>
    <text x="360" y="182" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">$\\mathbb{R} - (-1, 1)$</text>
    <text x="660" y="182" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$</text>
    <line x1="20" y1="192" x2="860" y2="192" stroke="#e2e8f0" stroke-width="1"/>

    <!-- Row 5: sec^-1 -->
    <text x="120" y="214" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4338ca" text-anchor="middle">$y = \\sec^{-1} x$</text>
    <text x="360" y="214" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">$\\mathbb{R} - (-1, 1)$</text>
    <text x="660" y="214" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">$[0, \\pi] - \\left\\{\\frac{\\pi}{2}\\right\\}$</text>
    <line x1="20" y1="224" x2="860" y2="224" stroke="#e2e8f0" stroke-width="1"/>

    <!-- Row 6: cot^-1 -->
    <text x="120" y="246" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4338ca" text-anchor="middle">$y = \\cot^{-1} x$</text>
    <text x="360" y="246" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">$\\mathbb{R}$</text>
    <text x="660" y="246" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">$(0, \\pi)$</text>
  </svg>
</div>`;

const questions = [];

// Q1 (Ex 2.1 Q1)
questions.push(createQCard(
  'c12m-ch2-q1',
  'Q1',
  'Exercise 2.1 (Verbatim)',
  `Find the principal value of $\\sin^{-1}\\left(-\\frac{1}{2}\\right)$.`,
  `<p>Let $y = \\sin^{-1}\\left(-\\frac{1}{2}\\right)$.</p>
  <p>Then $\\sin y = -\\frac{1}{2}$.</p>
  <p>We know that the principal value branch of $\\sin^{-1}$ is $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.</p>
  <p>Since $\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$, we have:</p>
  $$\\sin y = -\\sin\\left(\\frac{\\pi}{6}\\right) = \\sin\\left(-\\frac{\\pi}{6}\\right)$$
  <p>Since $-\\frac{\\pi}{6} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, the principal value of $\\sin^{-1}\\left(-\\frac{1}{2}\\right)$ is:</p>
  $$\\mathbf{-\\frac{\\pi}{6}}$$`,
  '1 Mark',
  [
    ['Mentioning the principal value branch [-pi/2, pi/2]', '0.5 Mark'],
    ['Evaluating correct angle -pi/6', '0.5 Mark']
  ]
));

// Q2 (Ex 2.1 Q2)
questions.push(createQCard(
  'c12m-ch2-q2',
  'Q2',
  'Exercise 2.1 (Verbatim)',
  `Find the principal value of $\\cos^{-1}\\left(\\frac{\\sqrt{3}}{2}\\right)$.`,
  `<p>Let $y = \\cos^{-1}\\left(\\frac{\\sqrt{3}}{2}\\right)$.</p>
  <p>Then $\\cos y = \\frac{\\sqrt{3}}{2}$.</p>
  <p>The principal value branch of $\\cos^{-1}$ is $[0, \\pi]$.</p>
  <p>We know that $\\cos\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2}$.</p>
  <p>Since $\\frac{\\pi}{6} \\in [0, \\pi]$, the principal value is:</p>
  $$\\mathbf{\\frac{\\pi}{6}}$$`,
  '1 Mark',
  [
    ['Mentioning principal value branch [0, pi]', '0.5 Mark'],
    ['Final answer pi/6', '0.5 Mark']
  ]
));

// Q3 (Ex 2.1 Q3)
questions.push(createQCard(
  'c12m-ch2-q3',
  'Q3',
  'Exercise 2.1 (Verbatim)',
  `Find the principal value of $\\operatorname{cosec}^{-1}(2)$.`,
  `<p>Let $y = \\operatorname{cosec}^{-1}(2) \\implies \\operatorname{cosec} y = 2$.</p>
  <p>The principal value branch of $\\operatorname{cosec}^{-1}$ is $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$.</p>
  <p>We know that $\\operatorname{cosec}\\left(\\frac{\\pi}{6}\\right) = 2$.</p>
  <p>Since $\\frac{\\pi}{6} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$, the principal value is:</p>
  $$\\mathbf{\\frac{\\pi}{6}}$$`,
  '1 Mark',
  [
    ['Principal value branch of cosec^-1 identified', '0.5 Mark'],
    ['Final answer pi/6', '0.5 Mark']
  ]
));

// Q4 (Ex 2.1 Q4)
questions.push(createQCard(
  'c12m-ch2-q4',
  'Q4',
  'Exercise 2.1 (Verbatim)',
  `Find the principal value of $\\tan^{-1}(-\\sqrt{3})$.`,
  `<p>Let $y = \\tan^{-1}(-\\sqrt{3}) \\implies \\tan y = -\\sqrt{3}$.</p>
  <p>The principal value branch of $\\tan^{-1}$ is $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.</p>
  <p>Since $\\tan\\left(\\frac{\\pi}{3}\\right) = \\sqrt{3}$, we have:</p>
  $$\\tan y = -\\tan\\left(\\frac{\\pi}{3}\\right) = \\tan\\left(-\\frac{\\pi}{3}\\right)$$
  <p>Since $-\\frac{\\pi}{3} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, the principal value is:</p>
  $$\\mathbf{-\\frac{\\pi}{3}}$$`,
  '1 Mark',
  [
    ['Principal value branch (-pi/2, pi/2) noted', '0.5 Mark'],
    ['Final answer -pi/3', '0.5 Mark']
  ]
));

// Q5 (Ex 2.1 Q5)
questions.push(createQCard(
  'c12m-ch2-q5',
  'Q5',
  'Exercise 2.1 (Verbatim)',
  `Find the principal value of $\\cos^{-1}\\left(-\\frac{1}{2}\\right)$.`,
  `<p>Let $y = \\cos^{-1}\\left(-\\frac{1}{2}\\right) \\implies \\cos y = -\\frac{1}{2}$.</p>
  <p>The principal value branch of $\\cos^{-1}$ is $[0, \\pi]$.</p>
  <p>We know that $\\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$.</p>
  <p>Using the identity $\\cos(\\pi - \\theta) = -\\cos\\theta$:</p>
  $$\\cos y = -\\cos\\left(\\frac{\\pi}{3}\\right) = \\cos\\left(\\pi - \\frac{\\pi}{3}\\right) = \\cos\\left(\\frac{2\\pi}{3}\\right)$$
  <p>Since $\\frac{2\\pi}{3} \\in [0, \\pi]$, the principal value is:</p>
  $$\\mathbf{\\frac{2\\pi}{3}}$$`,
  '1 Mark',
  [
    ['Using cos(pi - theta) = -cos theta in [0, pi]', '0.5 Mark'],
    ['Final answer 2pi/3', '0.5 Mark']
  ]
));

// Q6 (Ex 2.1 Q6)
questions.push(createQCard(
  'c12m-ch2-q6',
  'Q6',
  'Exercise 2.1 (Verbatim)',
  `Find the principal value of $\\tan^{-1}(-1)$.`,
  `<p>Let $y = \\tan^{-1}(-1) \\implies \\tan y = -1$.</p>
  <p>The principal value branch of $\\tan^{-1}$ is $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.</p>
  <p>Since $\\tan\\left(\\frac{\\pi}{4}\\right) = 1$, we have:</p>
  $$\\tan y = -\\tan\\left(\\frac{\\pi}{4}\\right) = \\tan\\left(-\\frac{\\pi}{4}\\right)$$
  <p>Since $-\\frac{\\pi}{4} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, the principal value is:</p>
  $$\\mathbf{-\\frac{\\pi}{4}}$$`,
  '1 Mark',
  [
    ['Applying tan(-theta) = -tan theta in (-pi/2, pi/2)', '0.5 Mark'],
    ['Final answer -pi/4', '0.5 Mark']
  ]
));

// Q7 (Ex 2.1 Q7)
questions.push(createQCard(
  'c12m-ch2-q7',
  'Q7',
  'Exercise 2.1 (Verbatim)',
  `Find the principal value of $\\sec^{-1}\\left(\\frac{2}{\\sqrt{3}}\\right)$.`,
  `<p>Let $y = \\sec^{-1}\\left(\\frac{2}{\\sqrt{3}}\\right) \\implies \\sec y = \\frac{2}{\\sqrt{3}}$.</p>
  <p>The principal value branch of $\\sec^{-1}$ is $[0, \\pi] - \\left\\{\\frac{\\pi}{2}\\right\\}$.</p>
  <p>Since $\\sec\\left(\\frac{\\pi}{6}\\right) = \\frac{2}{\\sqrt{3}}$ and $\\frac{\\pi}{6} \\in [0, \\pi] - \\left\\{\\frac{\\pi}{2}\\right\\}$, the principal value is:</p>
  $$\\mathbf{\\frac{\\pi}{6}}$$`,
  '1 Mark',
  [
    ['Principal value branch of sec^-1 noted', '0.5 Mark'],
    ['Final answer pi/6', '0.5 Mark']
  ]
));

// Q8 (Ex 2.1 Q8)
questions.push(createQCard(
  'c12m-ch2-q8',
  'Q8',
  'Exercise 2.1 (Verbatim)',
  `Find the principal value of $\\cot^{-1}(\\sqrt{3})$.`,
  `<p>Let $y = \\cot^{-1}(\\sqrt{3}) \\implies \\cot y = \\sqrt{3}$.</p>
  <p>The principal value branch of $\\cot^{-1}$ is $(0, \\pi)$.</p>
  <p>Since $\\cot\\left(\\frac{\\pi}{6}\\right) = \\sqrt{3}$ and $\\frac{\\pi}{6} \\in (0, \\pi)$, the principal value is:</p>
  $$\\mathbf{\\frac{\\pi}{6}}$$`,
  '1 Mark',
  [
    ['Principal value branch of cot^-1 noted', '0.5 Mark'],
    ['Final answer pi/6', '0.5 Mark']
  ]
));

// Q9 (Ex 2.1 Q9)
questions.push(createQCard(
  'c12m-ch2-q9',
  'Q9',
  'Exercise 2.1 (Verbatim)',
  `Find the principal value of $\\cos^{-1}\\left(-\\frac{1}{\\sqrt{2}}\\right)$.`,
  `<p>Let $y = \\cos^{-1}\\left(-\\frac{1}{\\sqrt{2}}\\right) \\implies \\cos y = -\\frac{1}{\\sqrt{2}}$.</p>
  <p>The principal value branch of $\\cos^{-1}$ is $[0, \\pi]$.</p>
  <p>Since $\\cos\\left(\\frac{\\pi}{4}\\right) = \\frac{1}{\\sqrt{2}}$:</p>
  $$\\cos y = -\\cos\\left(\\frac{\\pi}{4}\\right) = \\cos\\left(\\pi - \\frac{\\pi}{4}\\right) = \\cos\\left(\\frac{3\\pi}{4}\\right)$$
  <p>Since $\\frac{3\\pi}{4} \\in [0, \\pi]$, the principal value is:</p>
  $$\\mathbf{\\frac{3\\pi}{4}}$$`,
  '1 Mark',
  [
    ['Using cos(pi - pi/4) = -cos(pi/4)', '0.5 Mark'],
    ['Final answer 3pi/4', '0.5 Mark']
  ]
));

// Q10 (Ex 2.1 Q10)
questions.push(createQCard(
  'c12m-ch2-q10',
  'Q10',
  'Exercise 2.1 (Verbatim)',
  `Find the principal value of $\\operatorname{cosec}^{-1}(-\\sqrt{2})$.`,
  `<p>Let $y = \\operatorname{cosec}^{-1}(-\\sqrt{2}) \\implies \\operatorname{cosec} y = -\\sqrt{2}$.</p>
  <p>The principal value branch of $\\operatorname{cosec}^{-1}$ is $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$.</p>
  <p>Since $\\operatorname{cosec}\\left(\\frac{\\pi}{4}\\right) = \\sqrt{2}$, we have:</p>
  $$\\operatorname{cosec} y = -\\operatorname{cosec}\\left(\\frac{\\pi}{4}\\right) = \\operatorname{cosec}\\left(-\\frac{\\pi}{4}\\right)$$
  <p>Since $-\\frac{\\pi}{4} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] - \\{0\\}$, the principal value is:</p>
  $$\\mathbf{-\\frac{\\pi}{4}}$$`,
  '1 Mark',
  [
    ['Principal value branch of cosec^-1 identified', '0.5 Mark'],
    ['Final answer -pi/4', '0.5 Mark']
  ]
));

// Q11 (Ex 2.1 Q11)
questions.push(createQCard(
  'c12m-ch2-q11',
  'Q11',
  'Exercise 2.1 (Verbatim)',
  `Find the value of:
  $$\\tan^{-1}(1) + \\cos^{-1}\\left(-\\frac{1}{2}\\right) + \\sin^{-1}\\left(-\\frac{1}{2}\\right)$$`,
  `<p><strong>Method 1: Direct Principal Value Evaluation:</strong></p>
  <ul>
    <li>$\\tan^{-1}(1) = \\frac{\\pi}{4}$ (since $\\frac{\\pi}{4} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$).</li>
    <li>$\\cos^{-1}\\left(-\\frac{1}{2}\\right) = \\pi - \\cos^{-1}\\left(\\frac{1}{2}\\right) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.</li>
    <li>$\\sin^{-1}\\left(-\\frac{1}{2}\\right) = -\\sin^{-1}\\left(\\frac{1}{2}\\right) = -\\frac{\\pi}{6}$.</li>
  </ul>
  <p>Substitute these values into the given expression:</p>
  $$\\text{Value} = \\frac{\\pi}{4} + \\frac{2\\pi}{3} - \\frac{\\pi}{6}$$
  <p>Taking common denominator $12$:</p>
  $$\\text{Value} = \\frac{3\\pi + 8\\pi - 2\\pi}{12} = \\frac{9\\pi}{12} = \\mathbf{\\frac{3\\pi}{4}}$$

  <p><strong>Method 2: Using the Identity $\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}$:</strong></p>
  <p>Notice that for $x = -\\frac{1}{2}$, $\\cos^{-1}\\left(-\\frac{1}{2}\\right) + \\sin^{-1}\\left(-\\frac{1}{2}\\right) = \\frac{\\pi}{2}$.</p>
  $$\\text{Value} = \\tan^{-1}(1) + \\frac{\\pi}{2} = \\frac{\\pi}{4} + \\frac{\\pi}{2} = \\mathbf{\\frac{3\\pi}{4}}$$`,
  '2 Marks',
  [
    ['Evaluation of each term: tan^-1(1)=pi/4, cos^-1(-1/2)=2pi/3, sin^-1(-1/2)=-pi/6', '1 Mark'],
    ['Summation leading to 9pi/12 = 3pi/4', '1 Mark']
  ]
));

// Q12 (Ex 2.1 Q12)
questions.push(createQCard(
  'c12m-ch2-q12',
  'Q12',
  'Exercise 2.1 (Verbatim)',
  `Find the value of:
  $$\\cos^{-1}\\left(\\frac{1}{2}\\right) + 2\\sin^{-1}\\left(\\frac{1}{2}\\right)$$`,
  `<p><strong>Step-by-Step Evaluation:</strong></p>
  <ul>
    <li>$\\cos^{-1}\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{3}$ (since $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$ and $\\frac{\\pi}{3} \\in [0, \\pi]$).</li>
    <li>$\\sin^{-1}\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{6}$ (since $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$ and $\\frac{\\pi}{6} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$).</li>
  </ul>
  <p>Substituting into the given expression:</p>
  $$\\text{Value} = \\frac{\\pi}{3} + 2\\left(\\frac{\\pi}{6}\\right) = \\frac{\\pi}{3} + \\frac{\\pi}{3} = \\mathbf{\\frac{2\\pi}{3}}$$`,
  '2 Marks',
  [
    ['Evaluation of cos^-1(1/2) = pi/3 and sin^-1(1/2) = pi/6', '1 Mark'],
    ['Substitution and summation: pi/3 + pi/3 = 2pi/3', '1 Mark']
  ]
));

// Q13 (Ex 2.1 Q13)
questions.push(createQCard(
  'c12m-ch2-q13',
  'Q13',
  'Exercise 2.1 (Verbatim)',
  `If $\\sin^{-1} x = y$, then:
  <br>(A) $0 \\le y \\le \\pi$
  <br>(B) $-\\frac{\\pi}{2} \\le y \\le \\frac{\\pi}{2}$
  <br>(C) $0 < y < \\pi$
  <br>(D) $-\\frac{\\pi}{2} < y < \\frac{\\pi}{2}$`,
  `<p><strong>Correct Option: (B) $-\\frac{\\pi}{2} \\le y \\le \\frac{\\pi}{2}$</strong></p>
  <p><strong>Mathematical Explanation:</strong></p>
  <ul>
    <li>For the function $y = \\sin^{-1} x$, the domain is $[-1, 1]$.</li>
    <li>By definition, the <strong>principal value branch (range)</strong> of the inverse sine function is the closed interval:
    $$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$$</li>
    <li>Therefore, $-\\frac{\\pi}{2} \\le y \\le \\frac{\\pi}{2}$.</li>
  </ul>`,
  '1 Mark',
  [
    ['Correct choice (B)', '0.5 Mark'],
    ['Justification based on definition of principal value branch of sin^-1', '0.5 Mark']
  ]
));

// Q14 (Ex 2.1 Q14)
questions.push(createQCard(
  'c12m-ch2-q14',
  'Q14',
  'Exercise 2.1 (Verbatim)',
  `$\\tan^{-1}\\sqrt{3} - \\sec^{-1}(-2)$ is equal to:
  <br>(A) $\\pi$
  <br>(B) $-\\frac{\\pi}{3}$
  <br>(C) $\\frac{\\pi}{3}$
  <br>(D) $\\frac{2\\pi}{3}$`,
  `<p><strong>Correct Option: (B) $-\\frac{\\pi}{3}$</strong></p>
  <p><strong>Step-by-Step Evaluation:</strong></p>
  <ol>
    <li>Evaluate $\\tan^{-1}\\sqrt{3}$:
      <br>Since $\\tan\\left(\\frac{\\pi}{3}\\right) = \\sqrt{3}$ and $\\frac{\\pi}{3} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$,
      $$\\tan^{-1}\\sqrt{3} = \\frac{\\pi}{3}$$
    </li>
    <li>Evaluate $\\sec^{-1}(-2)$:
      <br>Let $z = \\sec^{-1}(-2) \\implies \\sec z = -2 \\implies \\cos z = -\\frac{1}{2}$.
      <br>In the principal value branch $[0, \\pi] - \\left\\{\\frac{\\pi}{2}\\right\\}$:
      $$z = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$$
    </li>
    <li>Subtract the two values:
      $$\\tan^{-1}\\sqrt{3} - \\sec^{-1}(-2) = \\frac{\\pi}{3} - \\frac{2\\pi}{3} = \\mathbf{-\\frac{\\pi}{3}}$$
    </li>
  </ol>`,
  '1 Mark',
  [
    ['Evaluation of tan^-1(sqrt(3)) = pi/3 and sec^-1(-2) = 2pi/3', '0.5 Mark'],
    ['Subtraction yielding -pi/3 and selecting (B)', '0.5 Mark']
  ]
));

// Q15 (Ex 2.2 Q1)
questions.push(createQCard(
  'c12m-ch2-q15',
  'Q15',
  'Exercise 2.2 (Verbatim)',
  `Prove that:
  $$3\\sin^{-1}x = \\sin^{-1}(3x - 4x^3), \\quad x \\in \\left[-\\frac{1}{2}, \\frac{1}{2}\\right]$$`,
  `<p><strong>Proof:</strong></p>
  <p>Let $\\sin^{-1} x = \\theta \\implies x = \\sin\\theta$.</p>
  <p>Given $x \\in \\left[-\\frac{1}{2}, \\frac{1}{2}\\right]$:</p>
  $$-\\frac{1}{2} \\le x \\le \\frac{1}{2} \\implies -\\frac{1}{2} \\le \\sin\\theta \\le \\frac{1}{2} \\implies -\\frac{\\pi}{6} \\le \\theta \\le \\frac{\\pi}{6}$$
  <p>Multiplying by $3$:</p>
  $$-\\frac{\\pi}{2} \\le 3\\theta \\le \\frac{\\pi}{2}$$
  <p>We know the standard trigonometric identity for $\\sin(3\\theta)$:</p>
  $$\\sin 3\\theta = 3\\sin\\theta - 4\\sin^3\\theta$$
  <p>Since $x = \\sin\\theta$, this gives:</p>
  $$\\sin 3\\theta = 3x - 4x^3$$
  <p>Since $3\\theta \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ (which is the principal value branch of $\\sin^{-1}$), we can take $\\sin^{-1}$ on both sides:</p>
  $$3\\theta = \\sin^{-1}(3x - 4x^3)$$
  <p>Substituting back $\\theta = \\sin^{-1} x$:</p>
  $$3\\sin^{-1} x = \\sin^{-1}(3x - 4x^3)$$
  <p>Hence Proved.</p>`,
  '3 Marks',
  [
    ['Substitution x = sin theta and verifying range -pi/2 <= 3*theta <= pi/2', '1 Mark'],
    ['Using identity sin 3theta = 3sin theta - 4sin^3 theta = 3x - 4x^3', '1 Mark'],
    ['Concluding 3*theta = sin^-1(3x - 4x^3) and substituting theta = sin^-1 x', '1 Mark']
  ]
));

// Q16 (Ex 2.2 Q2)
questions.push(createQCard(
  'c12m-ch2-q16',
  'Q16',
  'Exercise 2.2 (Verbatim)',
  `Prove that:
  $$3\\cos^{-1}x = \\cos^{-1}(4x^3 - 3x), \\quad x \\in \\left[\\frac{1}{2}, 1\\right]$$`,
  `<p><strong>Proof:</strong></p>
  <p>Let $\\cos^{-1} x = \\theta \\implies x = \\cos\\theta$.</p>
  <p>Given $x \\in \\left[\\frac{1}{2}, 1\\right]$:</p>
  $$\\frac{1}{2} \\le \\cos\\theta \\le 1 \\implies 0 \\le \\theta \\le \\frac{\\pi}{3}$$
  <p>Multiplying by $3$:</p>
  $$0 \\le 3\\theta \\le \\pi$$
  <p>We know the standard trigonometric identity for $\\cos(3\\theta)$:</p>
  $$\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta$$
  <p>Substituting $x = \\cos\\theta$:</p>
  $$\\cos 3\\theta = 4x^3 - 3x$$
  <p>Since $3\\theta \\in [0, \\pi]$ (which is the principal value branch of $\\cos^{-1}$), we can take $\\cos^{-1}$ on both sides:</p>
  $$3\\theta = \\cos^{-1}(4x^3 - 3x)$$
  <p>Substituting back $\\theta = \\cos^{-1} x$:</p>
  $$3\\cos^{-1} x = \\cos^{-1}(4x^3 - 3x)$$
  <p>Hence Proved.</p>`,
  '3 Marks',
  [
    ['Substitution x = cos theta and verifying range 0 <= 3*theta <= pi', '1 Mark'],
    ['Using identity cos 3theta = 4cos^3 theta - 3cos theta = 4x^3 - 3x', '1 Mark'],
    ['Concluding 3*theta = cos^-1(4x^3 - 3x) and substituting back', '1 Mark']
  ]
));

// Q17 (Ex 2.2 Q5)
questions.push(createQCard(
  'c12m-ch2-q17',
  'Q17',
  'Exercise 2.2 (Verbatim)',
  `Write the function in the simplest form:
  $$\\tan^{-1}\\left(\\frac{\\sqrt{1+x^2}-1}{x}\\right), \\quad x \\neq 0$$`,
  `<p><strong>Simplification:</strong></p>
  <p>Put $x = \\tan\\theta \\implies \\theta = \\tan^{-1} x$, where $\\theta \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right) - \\{0\\}$.</p>
  <p>Substitute $x = \\tan\\theta$ into the expression:</p>
  $$\\frac{\\sqrt{1+x^2}-1}{x} = \\frac{\\sqrt{1+\\tan^2\\theta}-1}{\\tan\\theta} = \\frac{\\sqrt{\\sec^2\\theta}-1}{\\tan\\theta} = \\frac{\\sec\\theta - 1}{\\tan\\theta}$$
  <p>Expressing in terms of $\\sin\\theta$ and $\\cos\\theta$:</p>
  $$= \\frac{\\frac{1}{\\cos\\theta} - 1}{\\frac{\\sin\\theta}{\\cos\\theta}} = \\frac{1 - \\cos\\theta}{\\sin\\theta}$$
  <p>Using half-angle trigonometric formulas $1 - \\cos\\theta = 2\\sin^2\\left(\\frac{\\theta}{2}\\right)$ and $\\sin\\theta = 2\\sin\\left(\\frac{\\theta}{2}\\right)\\cos\\left(\\frac{\\theta}{2}\\right)$:</p>
  $$= \\frac{2\\sin^2(\\theta/2)}{2\\sin(\\theta/2)\\cos(\\theta/2)} = \\frac{\\sin(\\theta/2)}{\\cos(\\theta/2)} = \\tan\\left(\\frac{\\theta}{2}\\right)$$
  <p>Now evaluate the inverse tangent:</p>
  $$\\tan^{-1}\\left(\\tan\\frac{\\theta}{2}\\right) = \\frac{\\theta}{2}$$
  <p>Substituting back $\\theta = \\tan^{-1} x$:</p>
  $$= \\mathbf{\\frac{1}{2}\\tan^{-1} x}$$`,
  '3 Marks',
  [
    ['Substitution x = tan theta and simplifying (sec theta - 1)/tan theta', '1 Mark'],
    ['Converting to (1 - cos theta)/sin theta and using half-angle formulas to obtain tan(theta/2)', '1 Mark'],
    ['Concluding theta/2 = (1/2) tan^-1 x', '1 Mark']
  ]
));

// Q18 (Ex 2.2 Q6)
questions.push(createQCard(
  'c12m-ch2-q18',
  'Q18',
  'Exercise 2.2 (Verbatim)',
  `Write the function in the simplest form:
  $$\\tan^{-1}\\left(\\sqrt{\\frac{1-\\cos x}{1+\\cos x}}\\right), \\quad 0 < x < \\pi$$`,
  `<p><strong>Simplification:</strong></p>
  <p>Given $0 < x < \\pi \\implies 0 < \\frac{x}{2} < \\frac{\\pi}{2}$.</p>
  <p>Recall the standard half-angle identities:</p>
  $$1 - \\cos x = 2\\sin^2\\left(\\frac{x}{2}\\right)$$
  $$1 + \\cos x = 2\\cos^2\\left(\\frac{x}{2}\\right)$$
  <p>Substitute these into the radical expression:</p>
  $$\\sqrt{\\frac{1-\\cos x}{1+\\cos x}} = \\sqrt{\\frac{2\\sin^2(x/2)}{2\\cos^2(x/2)}} = \\sqrt{\\tan^2\\left(\\frac{x}{2}\\right)}$$
  <p>Since $0 < \\frac{x}{2} < \\frac{\\pi}{2}$, $\\tan(x/2) > 0$. Hence:</p>
  $$\\sqrt{\\tan^2(x/2)} = \\tan\\left(\\frac{x}{2}\\right)$$
  <p>Now evaluate:</p>
  $$\\tan^{-1}\\left(\\tan\\frac{x}{2}\\right) = \\mathbf{\\frac{x}{2}}$$`,
  '2 Marks',
  [
    ['Applying half-angle formulas 1-cos x = 2sin^2(x/2) and 1+cos x = 2cos^2(x/2)', '1 Mark'],
    ['Evaluating tan^-1(tan(x/2)) = x/2', '1 Mark']
  ]
));

// Q19 (Ex 2.2 Q7)
questions.push(createQCard(
  'c12m-ch2-q19',
  'Q19',
  'Exercise 2.2 (Verbatim)',
  `Write the function in the simplest form:
  $$\\tan^{-1}\\left(\\frac{\\cos x - \\sin x}{\\cos x + \\sin x}\\right), \\quad -\\frac{\\pi}{4} < x < \\frac{3\\pi}{4}$$`,
  `<p><strong>Simplification:</strong></p>
  <p>Divide both numerator and denominator by $\\cos x$ (since $\\cos x \\neq 0$ on the given interval):</p>
  $$\\frac{\\cos x - \\sin x}{\\cos x + \\sin x} = \\frac{1 - \\frac{\\sin x}{\\cos x}}{1 + \\frac{\\sin x}{\\cos x}} = \\frac{1 - \\tan x}{1 + \\tan x}$$
  <p>Using the identity $\\tan\\left(\\frac{\\pi}{4}\\right) = 1$:</p>
  $$= \\frac{\\tan(\\pi/4) - \\tan x}{1 + \\tan(\\pi/4)\\tan x} = \\tan\\left(\\frac{\\pi}{4} - x\\right)$$
  <p>Check the domain condition: Given $-\\frac{\\pi}{4} < x < \\frac{3\\pi}{4}$:</p>
  $$-\\frac{3\\pi}{4} < -x < \\frac{\\pi}{4} \\implies \\frac{\\pi}{4} - \\frac{3\\pi}{4} < \\frac{\\pi}{4} - x < \\frac{\\pi}{4} + \\frac{\\pi}{4} \\implies -\\frac{\\pi}{2} < \\frac{\\pi}{4} - x < \\frac{\\pi}{2}$$
  <p>Since $\\left(\\frac{\\pi}{4} - x\\right)$ lies strictly within the principal value branch $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ of $\\tan^{-1}$:</p>
  $$\\tan^{-1}\\left(\\tan\\left(\\frac{\\pi}{4} - x\\right)\\right) = \\mathbf{\\frac{\\pi}{4} - x}$$`,
  '3 Marks',
  [
    ['Dividing numerator and denominator by cos x to get (1 - tan x)/(1 + tan x)', '1 Mark'],
    ['Transforming into tan(pi/4 - x) using tan(A - B) expansion', '1 Mark'],
    ['Verifying principal value branch condition and concluding pi/4 - x', '1 Mark']
  ]
));

// Q20 (Ex 2.2 Q16 & Q17)
questions.push(createQCard(
  'c12m-ch2-q20',
  'Q20',
  'Exercise 2.2 (Verbatim)',
  `Find the values of each of the following:
  <br>(i) $\\sin^{-1}\\left(\\sin\\frac{2\\pi}{3}\\right)$
  <br>(ii) $\\tan^{-1}\\left(\\tan\\frac{3\\pi}{4}\\right)$`,
  `<div style="display:flex; flex-direction:column; gap:16px;">
    <div>
      <h5 style="color:#4f46e5; margin:0 0 6px 0;">(i) Evaluate $\\sin^{-1}\\left(\\sin\\frac{2\\pi}{3}\\right)$:</h5>
      <p>We know that $\\sin^{-1}(\\sin\\theta) = \\theta$ <strong>only if</strong> $\\theta \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.</p>
      <p>Here, $\\frac{2\\pi}{3} = 120^\\circ \\notin \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.</p>
      <p>Using the reduction formula $\\sin(\\pi - x) = \\sin x$:</p>
      $$\\sin\\left(\\frac{2\\pi}{3}\\right) = \\sin\\left(\\pi - \\frac{\\pi}{3}\\right) = \\sin\\left(\\frac{\\pi}{3}\\right)$$
      <p>Since $\\frac{\\pi}{3} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$:</p>
      $$\\sin^{-1}\\left(\\sin\\frac{2\\pi}{3}\\right) = \\sin^{-1}\\left(\\sin\\frac{\\pi}{3}\\right) = \\mathbf{\\frac{\\pi}{3}}$$
    </div>

    <div>
      <h5 style="color:#4f46e5; margin:0 0 6px 0;">(ii) Evaluate $\\tan^{-1}\\left(\\tan\\frac{3\\pi}{4}\\right)$:</h5>
      <p>We know that $\\tan^{-1}(\\tan\\theta) = \\theta$ <strong>only if</strong> $\\theta \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.</p>
      <p>Here, $\\frac{3\\pi}{4} = 135^\\circ \\notin \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.</p>
      <p>Using the reduction formula $\\tan(\\pi - x) = -\\tan x = \\tan(-x)$:</p>
      $$\\tan\\left(\\frac{3\\pi}{4}\\right) = \\tan\\left(\\pi - \\frac{\\pi}{4}\\right) = -\\tan\\left(\\frac{\\pi}{4}\\right) = \\tan\\left(-\\frac{\\pi}{4}\\right)$$
      <p>Since $-\\frac{\\pi}{4} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$:</p>
      $$\\tan^{-1}\\left(\\tan\\frac{3\\pi}{4}\\right) = \\tan^{-1}\\left(\\tan\\left(-\\frac{\\pi}{4}\\right)\\right) = \\mathbf{-\\frac{\\pi}{4}}$$
    </div>
  </div>`,
  '3 Marks',
  [
    ['(i) Noting 2pi/3 not in [-pi/2, pi/2], using sin(pi - pi/3) = sin(pi/3), arriving at pi/3', '1.5 Marks'],
    ['(ii) Noting 3pi/4 not in (-pi/2, pi/2), using tan(pi - pi/4) = tan(-pi/4), arriving at -pi/4', '1.5 Marks']
  ]
));

saveChapter(
  2,
  'Inverse Trigonometric Functions',
  svgDiagram,
  'NCERT Exercises 2.1 & 2.2 (20 Verbatim Questions)',
  questions,
  'Matrices'
);
