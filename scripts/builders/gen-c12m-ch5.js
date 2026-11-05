// scripts/builders/gen-c12m-ch5.js
// Chapter 5: Continuity and Differentiability (14 Questions)
const { createQCard, saveChapter } = require('./c12m-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f5f3ff; border:1px solid #ddd6fe; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#4f46e5; font-size:1.05rem;">📐 Mathematical Reference: Continuity & Advanced Differentiation Techniques</h4>
  <svg viewBox="0 0 880 260" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #c7d2fe;">
    <!-- Panel 1: Continuity & Differentiability Definition -->
    <rect x="20" y="20" width="260" height="220" rx="10" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
    <text x="150" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#3730a3" text-anchor="middle">Continuity & Differentiability</text>
    <line x1="35" y1="56" x2="265" y2="56" stroke="#6366f1" stroke-width="1.5"/>
    <text x="35" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Continuity at $x = c$:</text>
    <text x="35" y="98" font-family="sans-serif" font-size="11" fill="#334155">$\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = f(c)$</text>
    <text x="35" y="116" font-family="sans-serif" font-size="10.5" fill="#475569">$(\\text{LHL} = \\text{RHL} = \\text{Value of function})$</text>
    <text x="35" y="145" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Differentiability at $x = c$:</text>
    <text x="35" y="165" font-family="sans-serif" font-size="10.5" fill="#334155">$\\text{LHD} = \\lim_{h \\to 0^-} \\frac{f(c+h) - f(c)}{h}$</text>
    <text x="35" y="185" font-family="sans-serif" font-size="10.5" fill="#334155">$\\text{RHD} = \\lim_{h \\to 0^+} \\frac{f(c+h) - f(c)}{h}$</text>
    <text x="35" y="210" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b91c1c">Differentiable $\\implies$ Continuous</text>

    <!-- Panel 2: Chain Rule & Implicit/Parametric -->
    <rect x="310" y="20" width="260" height="220" rx="10" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="2"/>
    <text x="440" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#5b21b6" text-anchor="middle">Rules & Parametric Forms</text>
    <line x1="325" y1="56" x2="555" y2="56" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="325" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Chain Rule:</text>
    <text x="325" y="98" font-family="sans-serif" font-size="11" fill="#334155">$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$</text>
    <text x="325" y="125" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Parametric Derivatives:</text>
    <text x="325" y="145" font-family="sans-serif" font-size="11" fill="#334155">$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} \\quad (dx/dt \\neq 0)$</text>
    <text x="325" y="175" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Second Order Parametric:</text>
    <text x="325" y="195" font-family="sans-serif" font-size="11" fill="#1e293b">$\\frac{d^2y}{dx^2} = \\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) \\cdot \\frac{dt}{dx}$</text>
    <text x="325" y="215" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">⚠️ Must multiply by $dt/dx$!</text>

    <!-- Panel 3: Logarithmic & Inverse Trig -->
    <rect x="600" y="20" width="260" height="220" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="730" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">Logarithmic & Inverse Trig</text>
    <line x1="615" y1="56" x2="845" y2="56" stroke="#10b981" stroke-width="1.5"/>
    <text x="615" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Logarithmic Differentiation:</text>
    <text x="615" y="98" font-family="sans-serif" font-size="10.5" fill="#334155">For $y = [u(x)]^{v(x)}$: take $\\ln y = v \\ln u$</text>
    <text x="615" y="118" font-family="sans-serif" font-size="10.5" fill="#334155">$\\frac{1}{y} \\frac{dy}{dx} = v' \\ln u + \\frac{v u'}{u}$</text>
    <text x="615" y="145" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Key Inverse Trig Derivatives:</text>
    <text x="615" y="165" font-family="sans-serif" font-size="10.5" fill="#334155">$\\frac{d}{dx}(\\sin^{-1} x) = \\frac{1}{\\sqrt{1-x^2}}$</text>
    <text x="615" y="185" font-family="sans-serif" font-size="10.5" fill="#334155">$\\frac{d}{dx}(\\tan^{-1} x) = \\frac{1}{1+x^2}$</text>
    <text x="615" y="205" font-family="sans-serif" font-size="10.5" fill="#334155">$\\frac{d}{dx}(\\cos^{-1} x) = -\\frac{1}{\\sqrt{1-x^2}}$</text>
  </svg>
</div>`;

const questions = [];

// Q1 (Ex 5.1 Q1 & Q2 - Basic Continuity)
questions.push(createQCard(
  'c12m-ch5-q1',
  'Q1',
  'Exercise 5.1 (Verbatim)',
  `(i) Prove that the function $f(x) = 5x - 3$ is continuous at $x = 0$, at $x = -3$ and at $x = 5$.<br>
  (ii) Examine the continuity of the function $f(x) = 2x^2 - 1$ at $x = 3$.`,
  `<p><strong>(i) Function $f(x) = 5x - 3$:</strong></p>
  <ol>
    <li><strong>At $x = 0$:</strong>
      <br>$f(0) = 5(0) - 3 = -3$.
      <br>$\\lim_{x \\to 0} f(x) = \\lim_{x \\to 0} (5x - 3) = 5(0) - 3 = -3$.
      <br>Since $\\lim_{x \\to 0} f(x) = f(0) = -3$, $f(x)$ is continuous at $x = 0$.
    </li>
    <li><strong>At $x = -3$:</strong>
      <br>$f(-3) = 5(-3) - 3 = -15 - 3 = -18$.
      <br>$\\lim_{x \\to -3} f(x) = \\lim_{x \\to -3} (5x - 3) = 5(-3) - 3 = -18$.
      <br>Since $\\lim_{x \\to -3} f(x) = f(-3) = -18$, $f(x)$ is continuous at $x = -3$.
    </li>
    <li><strong>At $x = 5$:</strong>
      <br>$f(5) = 5(5) - 3 = 25 - 3 = 22$.
      <br>$\\lim_{x \\to 5} f(x) = \\lim_{x \\to 5} (5x - 3) = 5(5) - 3 = 22$.
      <br>Since $\\lim_{x \\to 5} f(x) = f(5) = 22$, $f(x)$ is continuous at $x = 5$.
    </li>
  </ol>

  <p><strong>(ii) Function $f(x) = 2x^2 - 1$ at $x = 3$:</strong></p>
  <ul>
    <li>Value of function: $f(3) = 2(3)^2 - 1 = 2(9) - 1 = 18 - 1 = 17$.</li>
    <li>Limit: $\\lim_{x \\to 3} f(x) = \\lim_{x \\to 3} (2x^2 - 1) = 2(3)^2 - 1 = 17$.</li>
    <li>Since $\\lim_{x \\to 3} f(x) = f(3) = 17$, $f(x)$ is continuous at $x = 3$.</li>
  </ul>`,
  '3 Marks',
  [
    ['(i) Proof of continuity at x = 0, -3, 5 showing limit equals function value', '2 Marks'],
    ['(ii) Continuity of 2x² - 1 at x = 3 with f(3) = lim f(x) = 17', '1 Mark']
  ]
));

// Q2 (Ex 5.1 Q6, Q7 - Piecewise Points of Discontinuity)
questions.push(createQCard(
  'c12m-ch5-q2',
  'Q2',
  'Exercise 5.1 (Verbatim)',
  `Find all points of discontinuity of $f$, where $f$ is defined by:<br>
  (i) $f(x) = \\begin{cases} 2x + 3, & \\text{if } x \\le 2 \\\\ 2x - 3, & \\text{if } x > 2 \\end{cases}$<br>
  (ii) $f(x) = \\begin{cases} |x| + 3, & \\text{if } x \\le -3 \\\\ -2x, & \\text{if } -3 < x < 3 \\\\ 6x + 2, & \\text{if } x \\ge 3 \\end{cases}$`,
  `<p><strong>(i) $f(x) = \\begin{cases} 2x + 3, & x \\le 2 \\\\ 2x - 3, & x > 2 \\end{cases}$:</strong></p>
  <p>For $x < 2$ and $x > 2$, $f(x)$ is a polynomial and hence continuous. We check continuity at the partition point $x = 2$:</p>
  <ul>
    <li>$f(2) = 2(2) + 3 = 7$.</li>
    <li><strong>LHL:</strong> $\\lim_{x \\to 2^-} f(x) = \\lim_{h \\to 0} [2(2 - h) + 3] = 4 + 3 = 7$.</li>
    <li><strong>RHL:</strong> $\\lim_{x \\to 2^+} f(x) = \\lim_{h \\to 0} [2(2 + h) - 3] = 4 - 3 = 1$.</li>
  </ul>
  <p>Since $\\text{LHL} \\neq \\text{RHL}$ ($7 \\neq 1$), $\\lim_{x \\to 2} f(x)$ does not exist.
  <br>Therefore, <strong>$x = 2$ is the only point of discontinuity</strong>.</p>

  <p><strong>(ii) $f(x) = \\begin{cases} |x| + 3, & x \\le -3 \\\\ -2x, & -3 < x < 3 \\\\ 6x + 2, & x \\ge 3 \\end{cases}$:</strong></p>
  <p>Since $|x| = -x$ for $x \\le -3$, we write:
  $$f(x) = \\begin{cases} -x + 3, & x \\le -3 \\\\ -2x, & -3 < x < 3 \\\\ 6x + 2, & x \\ge 3 \\end{cases}$$</p>
  <ol>
    <li><strong>At $x = -3$:</strong>
      <ul>
        <li>$f(-3) = -(-3) + 3 = 6$.</li>
        <li>$\\text{LHL} = \\lim_{x \\to -3^-} (-x + 3) = -(-3) + 3 = 6$.</li>
        <li>$\\text{RHL} = \\lim_{x \\to -3^+} (-2x) = -2(-3) = 6$.</li>
        <li>Since $\\text{LHL} = \\text{RHL} = f(-3) = 6$, $f$ is <strong>continuous at $x = -3$</strong>.</li>
      </ul>
    </li>
    <li><strong>At $x = 3$:</strong>
      <ul>
        <li>$f(3) = 6(3) + 2 = 20$.</li>
        <li>$\\text{LHL} = \\lim_{x \\to 3^-} (-2x) = -2(3) = -6$.</li>
        <li>$\\text{RHL} = \\lim_{x \\to 3^+} (6x + 2) = 6(3) + 2 = 20$.</li>
        <li>Since $\\text{LHL} \\neq \\text{RHL}$ ($-6 \\neq 20$), $f$ is <strong>discontinuous at $x = 3$</strong>.</li>
      </ul>
    </li>
  </ol>
  <p><strong>Conclusion:</strong> <strong>$x = 3$ is the only point of discontinuity</strong> of $f$.</p>`,
  '4 Marks',
  [
    ['(i) LHL = 7, RHL = 1 => x = 2 is point of discontinuity', '1.5 Marks'],
    ['(ii) Continuity at x = -3 verified (LHL = RHL = f(-3) = 6)', '1 Mark'],
    ['(ii) Discontinuity at x = 3 demonstrated (LHL = -6 ≠ RHL = 20)', '1.5 Marks']
  ]
));

// Q3 (Ex 5.1 Q17, Q26 - Finding Unknown Parameters k, a, b)
questions.push(createQCard(
  'c12m-ch5-q3',
  'Q3',
  'Exercise 5.1 (Verbatim)',
  `(i) Find the relationship between $a$ and $b$ so that the function $f$ defined by:
  $$f(x) = \\begin{cases} ax + 1, & \\text{if } x \\le 3 \\\\ bx + 3, & \\text{if } x > 3 \\end{cases}$$
  is continuous at $x = 3$.<br><br>
  (ii) Find the value of $k$ so that the function $f$ is continuous at $x = \\frac{\\pi}{2}$:
  $$f(x) = \\begin{cases} \\frac{k \\cos x}{\\pi - 2x}, & \\text{if } x \\neq \\frac{\\pi}{2} \\\\[6pt] 3, & \\text{if } x = \\frac{\\pi}{2} \\end{cases}$$`,
  `<p><strong>(i) Relation between $a$ and $b$ for continuity at $x = 3$:</strong></p>
  Given that $f$ is continuous at $x = 3$, we must have:
  $$\\lim_{x \\to 3^-} f(x) = \\lim_{x \\to 3^+} f(x) = f(3)$$
  <ol>
    <li>$f(3) = a(3) + 1 = 3a + 1$.</li>
    <li>$\\text{LHL} = \\lim_{x \\to 3^-} (ax + 1) = 3a + 1$.</li>
    <li>$\\text{RHL} = \\lim_{x \\to 3^+} (bx + 3) = 3b + 3$.</li>
  </ol>
  Equating LHL and RHL:
  $$3a + 1 = 3b + 3$$
  $$3a - 3b = 2 \\implies 3(a - b) = 2 \\implies a - b = \\frac{2}{3} \\implies \\mathbf{a = b + \\frac{2}{3}}$$

  <p><strong>(ii) Finding $k$ for continuity at $x = \\frac{\\pi}{2}$:</strong></p>
  Given $f\\left(\\frac{\\pi}{2}\\right) = 3$. For $f$ to be continuous at $x = \\frac{\\pi}{2}$:
  $$\\lim_{x \\to \\pi/2} f(x) = f\\left(\\frac{\\pi}{2}\\right) = 3$$
  Evaluate the limit:
  $$\\lim_{x \\to \\pi/2} \\frac{k \\cos x}{\\pi - 2x}$$
  Put $x = \\frac{\\pi}{2} + h$. As $x \\to \\frac{\\pi}{2}$, $h \\to 0$:
  $$\\cos x = \\cos\\left(\\frac{\\pi}{2} + h\\right) = -\\sin h$$
  $$\\pi - 2x = \\pi - 2\\left(\\frac{\\pi}{2} + h\\right) = \\pi - \\pi - 2h = -2h$$
  Substitute into the limit:
  $$\\lim_{h \\to 0} \\frac{k(-\\sin h)}{-2h} = \\frac{k}{2} \\lim_{h \\to 0} \\frac{\\sin h}{h} = \\frac{k}{2} \\times 1 = \\frac{k}{2}$$
  Since the limit must equal $f(\\pi/2) = 3$:
  $$\\frac{k}{2} = 3 \\implies \\mathbf{k = 6}$$`,
  '4 Marks',
  [
    ['(i) Setting LHL = RHL at x = 3 and deriving a = b + 2/3', '2 Marks'],
    ['(ii) Substitution x = π/2 + h and evaluating limit as k/2', '1.5 Marks'],
    ['(ii) Equating limit to 3 to obtain k = 6', '0.5 Mark']
  ]
));

// Q4 (Ex 5.2 Q9, Q10 - Differentiability of Modulus and Greatest Integer Functions)
questions.push(createQCard(
  'c12m-ch5-q4',
  'Q4',
  'Exercise 5.2 (Verbatim)',
  `(i) Prove that the function $f$ given by $f(x) = |x - 1|, \\; x \\in \\mathbb{R}$ is not differentiable at $x = 1$.<br>
  (ii) Prove that the greatest integer function defined by $f(x) = [x], \\; 0 < x < 3$ is not differentiable at $x = 1$ and $x = 2$.`,
  `<p><strong>(i) Non-differentiability of $f(x) = |x - 1|$ at $x = 1$:</strong></p>
  By definition:
  $$f(x) = \\begin{cases} -(x - 1) = 1 - x, & x < 1 \\\\ x - 1, & x \\ge 1 \\end{cases}$$
  Here $f(1) = |1 - 1| = 0$.
  <ol>
    <li><strong>Left Hand Derivative (LHD) at $x = 1$:</strong>
      $$\\text{LHD} = \\lim_{h \\to 0^-} \\frac{f(1 + h) - f(1)}{h} = \\lim_{h \\to 0^-} \\frac{|1 + h - 1| - 0}{h} = \\lim_{h \\to 0^-} \\frac{|h|}{h}$$
      Since $h < 0$, $|h| = -h$:
      $$\\text{LHD} = \\lim_{h \\to 0^-} \\frac{-h}{h} = -1$$
    </li>
    <li><strong>Right Hand Derivative (RHD) at $x = 1$:</strong>
      $$\\text{RHD} = \\lim_{h \\to 0^+} \\frac{f(1 + h) - f(1)}{h} = \\lim_{h \\to 0^+} \\frac{|h|}{h}$$
      Since $h > 0$, $|h| = h$:
      $$\\text{RHD} = \\lim_{h \\to 0^+} \\frac{h}{h} = 1$$
    </li>
  </ol>
  Since $\\text{LHD} \\neq \\text{RHD}$ ($-1 \\neq 1$), $f(x)$ is <strong>not differentiable at $x = 1$</strong>.

  <p><strong>(ii) Non-differentiability of $f(x) = [x]$ at $x = 1$:</strong></p>
  $f(1) = [1] = 1$.
  <ol>
    <li><strong>LHD at $x = 1$:</strong>
      $$\\text{LHD} = \\lim_{h \\to 0^-} \\frac{f(1 + h) - f(1)}{h} = \\lim_{h \\to 0^-} \\frac{[1 + h] - 1}{h}$$
      For $h \\to 0^-$, $1 + h < 1$ (e.g. $1 - 0.01 = 0.99$), so $[1 + h] = 0$:
      $$\\text{LHD} = \\lim_{h \\to 0^-} \\frac{0 - 1}{h} = \\lim_{h \\to 0^-} \\frac{-1}{h} = +\\infty$$
    </li>
    <li><strong>RHD at $x = 1$:</strong>
      For $h \\to 0^+$, $1 + h > 1$ (e.g. $1.01$), so $[1 + h] = 1$:
      $$\\text{RHD} = \\lim_{h \\to 0^+} \\frac{1 - 1}{h} = 0$$
    </li>
  </ol>
  Since $\\text{LHD} \\neq \\text{RHD}$, $f$ is <strong>not differentiable at $x = 1$</strong>.
  <br>(By identical steps, at $x = 2$, $\\text{LHD} \\to \\infty$ and $\\text{RHD} = 0$, so $f$ is not differentiable at $x = 2$).`,
  '4 Marks',
  [
    ['(i) Computing LHD = -1 and RHD = 1 to prove non-differentiability of |x-1|', '2 Marks'],
    ['(ii) Evaluating limits for greatest integer function showing LHD does not match RHD at x = 1 and 2', '2 Marks']
  ]
));

// Q5 (Ex 5.3 Q1, Q4 - Implicit Differentiation)
questions.push(createQCard(
  'c12m-ch5-q5',
  'Q5',
  'Exercise 5.3 (Verbatim)',
  `Find $\\frac{dy}{dx}$ in the following:<br>
  (i) $2x + 3y = \\sin x$<br>
  (ii) $xy + y^2 = \\tan x + y$<br>
  (iii) $\\sin^2 x + \\cos^2 y = 1$`,
  `<p><strong>(i) $2x + 3y = \\sin x$:</strong></p>
  Differentiating both sides with respect to $x$:
  $$\\frac{d}{dx}(2x) + \\frac{d}{dx}(3y) = \\frac{d}{dx}(\\sin x)$$
  $$2 + 3\\frac{dy}{dx} = \\cos x$$
  $$3\\frac{dy}{dx} = \\cos x - 2 \\implies \\mathbf{\\frac{dy}{dx} = \\frac{\\cos x - 2}{3}}$$

  <p><strong>(ii) $xy + y^2 = \\tan x + y$:</strong></p>
  Differentiating with respect to $x$ (applying product rule on $xy$):
  $$\\left(x \\frac{dy}{dx} + y \\cdot 1\\right) + 2y \\frac{dy}{dx} = \\sec^2 x + \\frac{dy}{dx}$$
  Collecting terms containing $\\frac{dy}{dx}$ on LHS:
  $$x \\frac{dy}{dx} + 2y \\frac{dy}{dx} - \\frac{dy}{dx} = \\sec^2 x - y$$
  $$(x + 2y - 1) \\frac{dy}{dx} = \\sec^2 x - y$$
  $$\\mathbf{\\frac{dy}{dx} = \\frac{\\sec^2 x - y}{x + 2y - 1}}$$

  <p><strong>(iii) $\\sin^2 x + \\cos^2 y = 1$:</strong></p>
  Differentiating with respect to $x$ using the chain rule:
  $$2\\sin x \\frac{d}{dx}(\\sin x) + 2\\cos y \\frac{d}{dx}(\\cos y) = 0$$
  $$2\\sin x \\cos x + 2\\cos y \\left(-\\sin y \\frac{dy}{dx}\\right) = 0$$
  $$\\sin 2x - \\sin 2y \\frac{dy}{dx} = 0$$
  $$\\sin 2y \\frac{dy}{dx} = \\sin 2x \\implies \\mathbf{\\frac{dy}{dx} = \\frac{\\sin 2x}{\\sin 2y}}$$`,
  '4 Marks',
  [
    ['(i) Direct implicit differentiation: dy/dx = (cos x - 2)/3', '1 Mark'],
    ['(ii) Applying product rule on xy and isolating dy/dx = (sec²x - y)/(x + 2y - 1)', '1.5 Marks'],
    ['(iii) Chain rule on sin²x and cos²y giving dy/dx = sin 2x / sin 2y', '1.5 Marks']
  ]
));

// Q6 (Ex 5.3 Q9, Q10, Q13 - Inverse Trigonometric Substitution)
questions.push(createQCard(
  'c12m-ch5-q6',
  'Q6',
  'Exercise 5.3 (Verbatim)',
  `Find $\\frac{dy}{dx}$ in the following:<br>
  (i) $y = \\sin^{-1}\\left(\\frac{2x}{1 + x^2}\\right)$<br>
  (ii) $y = \\tan^{-1}\\left(\\frac{3x - x^3}{1 - 3x^2}\\right), \\; -\\frac{1}{\\sqrt{3}} < x < \\frac{1}{\\sqrt{3}}$<br>
  (iii) $y = \\cos^{-1}\\left(\\frac{2x}{1 + x^2}\\right), \\; -1 < x < 1$`,
  `<p><strong>(i) $y = \\sin^{-1}\\left(\\frac{2x}{1 + x^2}\\right)$:</strong></p>
  Let $x = \\tan\\theta \\implies \\theta = \\tan^{-1} x$.
  $$y = \\sin^{-1}\\left(\\frac{2\\tan\\theta}{1 + \\tan^2\\theta}\\right) = \\sin^{-1}(\\sin 2\\theta) = 2\\theta = 2\\tan^{-1} x$$
  Differentiating with respect to $x$:
  $$\\mathbf{\\frac{dy}{dx} = \\frac{2}{1 + x^2}}$$

  <p><strong>(ii) $y = \\tan^{-1}\\left(\\frac{3x - x^3}{1 - 3x^2}\\right)$:</strong></p>
  Let $x = \\tan\\theta \\implies \\theta = \\tan^{-1} x$.
  <br>Given $-\\frac{1}{\\sqrt{3}} < x < \\frac{1}{\\sqrt{3}} \\implies -\\frac{\\pi}{6} < \\theta < \\frac{\\pi}{6} \\implies -\\frac{\\pi}{2} < 3\\theta < \\frac{\\pi}{2}$.
  $$y = \\tan^{-1}\\left(\\frac{3\\tan\\theta - \\tan^3\\theta}{1 - 3\\tan^2\\theta}\\right) = \\tan^{-1}(\\tan 3\\theta) = 3\\theta = 3\\tan^{-1} x$$
  Differentiating with respect to $x$:
  $$\\mathbf{\\frac{dy}{dx} = \\frac{3}{1 + x^2}}$$

  <p><strong>(iii) $y = \\cos^{-1}\\left(\\frac{2x}{1 + x^2}\\right)$:</strong></p>
  Let $x = \\tan\\theta \\implies \\theta = \\tan^{-1} x$.
  $$y = \\cos^{-1}(\\sin 2\\theta) = \\cos^{-1}\\left(\\cos\\left(\\frac{\\pi}{2} - 2\\theta\\right)\\right) = \\frac{\\pi}{2} - 2\\theta = \\frac{\\pi}{2} - 2\\tan^{-1} x$$
  Differentiating with respect to $x$:
  $$\\mathbf{\\frac{dy}{dx} = 0 - 2\\left(\\frac{1}{1 + x^2}\\right) = -\\frac{2}{1 + x^2}}$$`,
  '4 Marks',
  [
    ['(i) Substitution x = tan θ and obtaining dy/dx = 2/(1+x²)', '1 Mark'],
    ['(ii) Substitution and range verification: dy/dx = 3/(1+x²)', '1.5 Marks'],
    ['(iii) Conversion cos⁻¹(sin 2θ) = π/2 - 2θ and derivative: -2/(1+x²)', '1.5 Marks']
  ]
));

// Q7 (Ex 5.4 Q1, Q4, Q8 - Exponential and Logarithmic Derivatives)
questions.push(createQCard(
  'c12m-ch5-q7',
  'Q7',
  'Exercise 5.4 (Verbatim)',
  `Differentiate the following with respect to $x$:<br>
  (i) $\\frac{e^x}{\\sin x}$<br>
  (ii) $\\sin(\\tan^{-1}(e^{-x}))$<br>
  (iii) $\\log(\\log x), \\; x > 1$<br>
  (iv) $\\sqrt{e^{\\sqrt{x}}}, \\; x > 0$`,
  `<p><strong>(i) $y = \\frac{e^x}{\\sin x}$:</strong></p>
  Using quotient rule $\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v u' - u v'}{v^2}$:
  $$\\frac{dy}{dx} = \\frac{\\sin x \\frac{d}{dx}(e^x) - e^x \\frac{d}{dx}(\\sin x)}{\\sin^2 x} = \\frac{\\sin x (e^x) - e^x (\\cos x)}{\\sin^2 x} = \\mathbf{\\frac{e^x (\\sin x - \\cos x)}{\\sin^2 x}}$$

  <p><strong>(ii) $y = \\sin(\\tan^{-1}(e^{-x}))$:</strong></p>
  Applying chain rule step-by-step:
  $$\\frac{dy}{dx} = \\cos(\\tan^{-1}(e^{-x})) \\cdot \\frac{d}{dx}(\\tan^{-1}(e^{-x}))$$
  $$= \\cos(\\tan^{-1}(e^{-x})) \\cdot \\frac{1}{1 + (e^{-x})^2} \\cdot \\frac{d}{dx}(e^{-x})$$
  $$= \\cos(\\tan^{-1}(e^{-x})) \\cdot \\frac{1}{1 + e^{-2x}} \\cdot (-e^{-x}) = \\mathbf{-\\frac{e^{-x} \\cos(\\tan^{-1}(e^{-x}))}{1 + e^{-2x}}}$$

  <p><strong>(iii) $y = \\log(\\log x)$:</strong></p>
  $$\\frac{dy}{dx} = \\frac{1}{\\log x} \\cdot \\frac{d}{dx}(\\log x) = \\frac{1}{\\log x} \\cdot \\frac{1}{x} = \\mathbf{\\frac{1}{x \\log x}}$$

  <p><strong>(iv) $y = \\sqrt{e^{\\sqrt{x}}} = (e^{\\sqrt{x}})^{1/2} = e^{\\frac{1}{2}\\sqrt{x}}$:</strong></p>
  $$\\frac{dy}{dx} = e^{\\frac{1}{2}\\sqrt{x}} \\cdot \\frac{d}{dx}\\left(\\frac{1}{2} x^{1/2}\\right) = e^{\\frac{1}{2}\\sqrt{x}} \\cdot \\frac{1}{4\\sqrt{x}} = \\mathbf{\\frac{\\sqrt{e^{\\sqrt{x}}}}{4\\sqrt{x}}}$$`,
  '4 Marks',
  [
    ['(i) Quotient rule application yielding eˣ(sin x - cos x)/sin²x', '1 Mark'],
    ['(ii) Three-link chain rule application yielding -e⁻ˣ cos(tan⁻¹(e⁻ˣ))/(1 + e⁻²ˣ)', '1 Mark'],
    ['(iii) Derivative of log(log x) = 1/(x log x)', '1 Mark'],
    ['(iv) Derivative of √(e^√x) = √(e^√x)/(4√x)', '1 Mark']
  ]
));

// Q8 (Ex 5.5 Q1, Q4 - Logarithmic Differentiation with Products & Powers)
questions.push(createQCard(
  'c12m-ch5-q8',
  'Q8',
  'Exercise 5.5 (Verbatim)',
  `Differentiate with respect to $x$:<br>
  (i) $\\cos x \\cdot \\cos 2x \\cdot \\cos 3x$<br>
  (ii) $x^x - 2^{\\sin x}$`,
  `<p><strong>(i) $y = \\cos x \\cdot \\cos 2x \\cdot \\cos 3x$:</strong></p>
  Taking natural logarithm on both sides:
  $$\\log y = \\log(\\cos x) + \\log(\\cos 2x) + \\log(\\cos 3x)$$
  Differentiating with respect to $x$:
  $$\\frac{1}{y} \\frac{dy}{dx} = \\frac{1}{\\cos x}(-\\sin x) + \\frac{1}{\\cos 2x}(-2\\sin 2x) + \\frac{1}{\\cos 3x}(-3\\sin 3x)$$
  $$\\frac{1}{y} \\frac{dy}{dx} = -\\tan x - 2\\tan 2x - 3\\tan 3x$$
  $$\\mathbf{\\frac{dy}{dx} = -(\\cos x \\cos 2x \\cos 3x) [\\tan x + 2\\tan 2x + 3\\tan 3x]}$$

  <p><strong>(ii) $y = x^x - 2^{\\sin x}$:</strong></p>
  <p><em>(CBSE Crucial Rule: NEVER take log of a difference directly as $\\log(u - v) \\neq \\log u - \\log v$. We must split into $y = u - v$)</em></p>
  Let $u = x^x$ and $v = 2^{\\sin x}$. Then $y = u - v \\implies \\frac{dy}{dx} = \\frac{du}{dx} - \\frac{dv}{dx}$.
  <ol>
    <li>For $u = x^x$:
      <br>$\\log u = x \\log x$.
      <br>$\\frac{1}{u} \\frac{du}{dx} = x \\cdot \\frac{1}{x} + \\log x \\cdot 1 = 1 + \\log x$.
      <br>$\\frac{du}{dx} = x^x (1 + \\log x)$.
    </li>
    <li>For $v = 2^{\\sin x}$:
      <br>Using standard formula $\\frac{d}{dx}(a^z) = a^z (\\ln a) \\frac{dz}{dx}$:
      <br>$\\frac{dv}{dx} = 2^{\\sin x} (\\log 2) \\cdot \\frac{d}{dx}(\\sin x) = 2^{\\sin x} (\\cos x) \\log 2$.
    </li>
  </ol>
  Combining both parts:
  $$\\mathbf{\\frac{dy}{dx} = x^x (1 + \\log x) - 2^{\\sin x} (\\cos x) \\log 2}$$`,
  '4 Marks',
  [
    ['(i) Taking log of three-factor product and evaluating dy/dx', '1.5 Marks'],
    ['(ii) Splitting y = u - v correctly and evaluating du/dx = xˣ(1 + log x)', '1.5 Marks'],
    ['(ii) Evaluating dv/dx and combining final derivative', '1 Mark']
  ]
));

// Q9 (Ex 5.5 Q7, Q12 - Variable to Variable Power & Implicit Equation)
questions.push(createQCard(
  'c12m-ch5-q9',
  'Q9',
  'Exercise 5.5 (Verbatim)',
  `(i) Differentiate $(\\log x)^x + x^{\\log x}$ with respect to $x$.<br>
  (ii) Find $\\frac{dy}{dx}$ if $x^y + y^x = 1$.`,
  `<p><strong>(i) $y = (\\log x)^x + x^{\\log x}$:</strong></p>
  Let $y = u + v$, where $u = (\\log x)^x$ and $v = x^{\\log x}$.
  <ol>
    <li><strong>For $u = (\\log x)^x$:</strong>
      <br>$\\log u = x \\log(\\log x)$.
      <br>$\\frac{1}{u} \\frac{du}{dx} = x \\cdot \\frac{1}{\\log x} \\cdot \\frac{1}{x} + \\log(\\log x) \\cdot 1 = \\frac{1}{\\log x} + \\log(\\log x)$.
      <br>$$\\frac{du}{dx} = (\\log x)^x \\left[ \\frac{1}{\\log x} + \\log(\\log x) \\right]$$
    </li>
    <li><strong>For $v = x^{\\log x}$:</strong>
      <br>$\\log v = (\\log x) \\log x = (\\log x)^2$.
      <br>$\\frac{1}{v} \\frac{dv}{dx} = 2\\log x \\cdot \\frac{1}{x} = \\frac{2\\log x}{x}$.
      <br>$$\\frac{dv}{dx} = x^{\\log x} \\left( \\frac{2\\log x}{x} \\right) = 2x^{\\log x - 1} \\log x$$
    </li>
  </ol>
  $$\\mathbf{\\frac{dy}{dx} = (\\log x)^x \\left[ \\frac{1}{\\log x} + \\log(\\log x) \\right] + 2x^{\\log x - 1} \\log x}$$

  <p><strong>(ii) $x^y + y^x = 1$:</strong></p>
  Let $u = x^y$ and $v = y^x$. Then $u + v = 1 \\implies \\frac{du}{dx} + \\frac{dv}{dx} = 0$.
  <ol>
    <li>$u = x^y \\implies \\log u = y \\log x$.
      <br>$\\frac{1}{u} \\frac{du}{dx} = y \\cdot \\frac{1}{x} + \\log x \\frac{dy}{dx} \\implies \\frac{du}{dx} = x^y \\left[ \\frac{y}{x} + \\log x \\frac{dy}{dx} \\right] = y x^{y-1} + x^y \\log x \\frac{dy}{dx}$.
    </li>
    <li>$v = y^x \\implies \\log v = x \\log y$.
      <br>$\\frac{1}{v} \\frac{dv}{dx} = x \\cdot \\frac{1}{y} \\frac{dy}{dx} + \\log y \\cdot 1 \\implies \\frac{dv}{dx} = y^x \\left[ \\frac{x}{y} \\frac{dy}{dx} + \\log y \\right] = x y^{x-1} \\frac{dy}{dx} + y^x \\log y$.
    </li>
  </ol>
  Substituting into $\\frac{du}{dx} + \\frac{dv}{dx} = 0$:
  $$\\left( y x^{y-1} + x^y \\log x \\frac{dy}{dx} \\right) + \\left( x y^{x-1} \\frac{dy}{dx} + y^x \\log y \\right) = 0$$
  $$\\left( x^y \\log x + x y^{x-1} \\right) \\frac{dy}{dx} = -\\left( y x^{y-1} + y^x \\log y \\right)$$
  $$\\mathbf{\\frac{dy}{dx} = -\\frac{y x^{y-1} + y^x \\log y}{x^y \\log x + x y^{x-1}}}$$`,
  '5 Marks',
  [
    ['(i) Splitting into u and v and correctly computing du/dx and dv/dx', '2.5 Marks'],
    ['(ii) Differentiating xʸ and yˣ separately and setting sum to 0', '1.5 Marks'],
    ['(ii) Accurately grouping dy/dx terms to reach final expression', '1 Mark']
  ]
));

// Q10 (Ex 5.6 Q7, Q8 - Parametric Differentiation)
questions.push(createQCard(
  'c12m-ch5-q10',
  'Q10',
  'Exercise 5.6 (Verbatim)',
  `(i) Find $\\frac{dy}{dx}$, if $x = a(\\cos t + \\log \\tan(t/2))$ and $y = a \\sin t$.<br>
  (ii) If $x = \\sqrt{a^{\\sin^{-1} t}}$ and $y = \\sqrt{a^{\\cos^{-1} t}}$, show that $\\frac{dy}{dx} = -\\frac{y}{x}$.`,
  `<p><strong>(i) $x = a(\\cos t + \\log \\tan(t/2))$ and $y = a \\sin t$:</strong></p>
  <ol>
    <li>Differentiate $y$ with respect to $t$:
      $$\\frac{dy}{dt} = a \\cos t$$
    </li>
    <li>Differentiate $x$ with respect to $t$:
      $$\\frac{dx}{dt} = a \\left[ -\\sin t + \\frac{1}{\\tan(t/2)} \\cdot \\sec^2(t/2) \\cdot \\frac{1}{2} \\right]$$
      Simplify the second term:
      $$\\frac{\\sec^2(t/2)}{2\\tan(t/2)} = \\frac{1}{2 \\cos^2(t/2) \\frac{\\sin(t/2)}{\\cos(t/2)}} = \\frac{1}{2\\sin(t/2)\\cos(t/2)} = \\frac{1}{\\sin t}$$
      Thus:
      $$\\frac{dx}{dt} = a \\left[ -\\sin t + \\frac{1}{\\sin t} \\right] = a \\left( \\frac{1 - \\sin^2 t}{\\sin t} \\right) = a \\frac{\\cos^2 t}{\\sin t}$$
    </li>
    <li>Compute $\\frac{dy}{dx}$:
      $$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{a \\cos t}{a \\frac{\\cos^2 t}{\\sin t}} = \\frac{\\sin t}{\\cos t} = \\mathbf{\\tan t}$$
    </li>
  </ol>

  <p><strong>(ii) $x = \\sqrt{a^{\\sin^{-1} t}}$ and $y = \\sqrt{a^{\\cos^{-1} t}}$:</strong></p>
  <p><em>Elegant Method:</em> Multiply $x$ and $y$ directly:
  $$xy = \\sqrt{a^{\\sin^{-1} t}} \\cdot \\sqrt{a^{\\cos^{-1} t}} = \\sqrt{a^{\\sin^{-1} t + \\cos^{-1} t}}$$
  Since $\\sin^{-1} t + \\cos^{-1} t = \\frac{\\pi}{2}$ for all $t \\in [-1, 1]$:
  $$xy = \\sqrt{a^{\\pi/2}} = \\text{constant}$$
  Now, differentiate both sides with respect to $x$ using product rule:
  $$x \\frac{dy}{dx} + y(1) = 0$$
  $$x \\frac{dy}{dx} = -y \\implies \\mathbf{\\frac{dy}{dx} = -\\frac{y}{x}}$$
  Hence proved.</p>`,
  '4 Marks',
  [
    ['(i) Simplifying dx/dt to a cos²t / sin t and obtaining dy/dx = tan t', '2 Marks'],
    ['(ii) Applying identity sin⁻¹t + cos⁻¹t = π/2 to get xy = constant', '1 Mark'],
    ['(ii) Implicit differentiation showing dy/dx = -y/x', '1 Mark']
  ]
));

// Q11 (Ex 5.7 Q11, Q13 - Second Order Derivatives & Differential Proofs)
questions.push(createQCard(
  'c12m-ch5-q11',
  'Q11',
  'Exercise 5.7 (Verbatim)',
  `(i) If $y = 5\\cos x - 3\\sin x$, prove that $\\frac{d^2y}{dx^2} + y = 0$.<br>
  (ii) If $y = 3\\cos(\\log x) + 4\\sin(\\log x)$, show that $x^2 y_2 + x y_1 + y = 0$.`,
  `<p><strong>(i) $y = 5\\cos x - 3\\sin x$:</strong></p>
  First derivative:
  $$\\frac{dy}{dx} = 5(-\\sin x) - 3(\\cos x) = -5\\sin x - 3\\cos x$$
  Second derivative:
  $$\\frac{d^2y}{dx^2} = -5(\\cos x) - 3(-\\sin x) = -5\\cos x + 3\\sin x = -(5\\cos x - 3\\sin x) = -y$$
  $$\\frac{d^2y}{dx^2} + y = 0$$
  Hence proved.

  <p><strong>(ii) $y = 3\\cos(\\log x) + 4\\sin(\\log x)$:</strong></p>
  Differentiating with respect to $x$ using chain rule:
  $$y_1 = \\frac{dy}{dx} = -3\\sin(\\log x) \\cdot \\frac{1}{x} + 4\\cos(\\log x) \\cdot \\frac{1}{x}$$
  Multiply both sides by $x$:
  $$x y_1 = -3\\sin(\\log x) + 4\\cos(\\log x)$$
  Differentiating again with respect to $x$ using product rule on LHS:
  $$x y_2 + y_1 (1) = -3\\cos(\\log x) \\cdot \\frac{1}{x} - 4\\sin(\\log x) \\cdot \\frac{1}{x}$$
  Multiply both sides by $x$ again:
  $$x(x y_2 + y_1) = -[3\\cos(\\log x) + 4\\sin(\\log x)]$$
  $$x^2 y_2 + x y_1 = -y$$
  $$\\mathbf{x^2 y_2 + x y_1 + y = 0}$$
  Hence proved.`,
  '4 Marks',
  [
    ['(i) Computing first and second derivative and establishing d²y/dx² + y = 0', '1.5 Marks'],
    ['(ii) First derivative and multiplying by x to clear denominator', '1 Mark'],
    ['(ii) Second derivative by product rule yielding x² y₂ + x y₁ + y = 0', '1.5 Marks']
  ]
));

// Q12 (Ex 5.7 Q14, Q17 - Classical Board Exam Second Order Differential Equations)
questions.push(createQCard(
  'c12m-ch5-q12',
  'Q12',
  'Exercise 5.7 (Verbatim)',
  `(i) If $y = A e^{mx} + B e^{nx}$, show that $\\frac{d^2y}{dx^2} - (m + n)\\frac{dy}{dx} + mny = 0$.<br>
  (ii) If $y = (\\tan^{-1} x)^2$, show that $(x^2 + 1)^2 y_2 + 2x(x^2 + 1)y_1 = 2$.`,
  `<p><strong>(i) $y = A e^{mx} + B e^{nx}$:</strong></p>
  <ol>
    <li>First derivative:
      $$\\frac{dy}{dx} = A m e^{mx} + B n e^{nx}$$
    </li>
    <li>Second derivative:
      $$\\frac{d^2y}{dx^2} = A m^2 e^{mx} + B n^2 e^{nx}$$
    </li>
    <li>Substitute into LHS:
      $$\\text{LHS} = \\frac{d^2y}{dx^2} - (m + n)\\frac{dy}{dx} + mny$$
      $$= (A m^2 e^{mx} + B n^2 e^{nx}) - (m + n)(A m e^{mx} + B n e^{nx}) + mn(A e^{mx} + B e^{nx})$$
      $$= A e^{mx}[m^2 - m(m+n) + mn] + B e^{nx}[n^2 - n(m+n) + mn]$$
      $$= A e^{mx}[m^2 - m^2 - mn + mn] + B e^{nx}[n^2 - mn - n^2 + mn]$$
      $$= A e^{mx}(0) + B e^{nx}(0) = 0 = \\text{RHS}$$
    </li>
  </ol>
  Hence proved.

  <p><strong>(ii) $y = (\\tan^{-1} x)^2$:</strong></p>
  Differentiating with respect to $x$:
  $$y_1 = 2(\\tan^{-1} x) \\cdot \\frac{1}{1 + x^2}$$
  Multiplying both sides by $(1 + x^2)$:
  $$(1 + x^2) y_1 = 2\\tan^{-1} x$$
  Squaring both sides (or differentiating directly by product rule):
  <br>Differentiating with respect to $x$:
  $$(1 + x^2) y_2 + y_1 (2x) = 2 \\cdot \\frac{1}{1 + x^2}$$
  Multiplying both sides by $(1 + x^2)$:
  $$(1 + x^2)^2 y_2 + 2x(1 + x^2) y_1 = 2$$
  $$\\mathbf{(x^2 + 1)^2 y_2 + 2x(x^2 + 1) y_1 = 2}$$
  Hence proved.`,
  '4 Marks',
  [
    ['(i) Computing derivatives and showing complete cancellation to 0', '2 Marks'],
    ['(ii) First derivative y₁ and multiplying across by (1 + x²)', '1 Mark'],
    ['(ii) Applying product rule to get (x² + 1)² y₂ + 2x(x² + 1)y₁ = 2', '1 Mark']
  ]
));

// Q13 (Ex 5.7 Q16 & Parametric Second Derivative)
questions.push(createQCard(
  'c12m-ch5-q13',
  'Q13',
  'Exercise 5.7 & Board Favorite (Verbatim)',
  `(i) If $e^y (x + 1) = 1$, show that $\\frac{d^2y}{dx^2} = \\left(\\frac{dy}{dx}\\right)^2$.<br>
  (ii) If $x = a(\\cos\\theta + \\theta\\sin\\theta)$ and $y = a(\\sin\\theta - \\theta\\cos\\theta)$, find $\\frac{d^2y}{dx^2}$ at $\\theta = \\frac{\\pi}{4}$.`,
  `<p><strong>(i) $e^y (x + 1) = 1$:</strong></p>
  Rewrite as $e^y = \\frac{1}{x + 1} = (x + 1)^{-1}$.
  <br>Taking log on both sides:
  $$y = -\\log(x + 1)$$
  Differentiating with respect to $x$:
  $$\\frac{dy}{dx} = -\\frac{1}{x + 1}$$
  Differentiating again:
  $$\\frac{d^2y}{dx^2} = -\\left(-\\frac{1}{(x + 1)^2}\\right) = \\frac{1}{(x + 1)^2}$$
  Notice that:
  $$\\left(\\frac{dy}{dx}\\right)^2 = \\left(-\\frac{1}{x + 1}\\right)^2 = \\frac{1}{(x + 1)^2}$$
  Therefore:
  $$\\mathbf{\\frac{d^2y}{dx^2} = \\left(\\frac{dy}{dx}\\right)^2}$$
  Hence proved.

  <p><strong>(ii) Second derivative of parametric curve:</strong></p>
  <ol>
    <li>$\\frac{dx}{d\\theta} = a[-\\sin\\theta + (\\theta\\cos\\theta + \\sin\\theta)] = a\\theta\\cos\\theta$.</li>
    <li>$\\frac{dy}{d\\theta} = a[\\cos\\theta - (-\\theta\\sin\\theta + \\cos\\theta)] = a\\theta\\sin\\theta$.</li>
    <li>First derivative:
      $$\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta} = \\frac{a\\theta\\sin\\theta}{a\\theta\\cos\\theta} = \\tan\\theta$$
    </li>
    <li>Second derivative:
      $$\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(\\frac{dy}{dx}\\right) = \\frac{d}{d\\theta}(\\tan\\theta) \\cdot \\frac{d\\theta}{dx}$$
      $$= \\sec^2\\theta \\cdot \\frac{1}{a\\theta\\cos\\theta} = \\frac{\\sec^3\\theta}{a\\theta}$$
    </li>
    <li>At $\\theta = \\frac{\\pi}{4}$:
      $$\\sec\\left(\\frac{\\pi}{4}\\right) = \\sqrt{2} \\implies \\sec^3\\left(\\frac{\\pi}{4}\\right) = (\\sqrt{2})^3 = 2\\sqrt{2}$$
      $$\\left. \\frac{d^2y}{dx^2} \\right|_{\\theta = \\pi/4} = \\frac{2\\sqrt{2}}{a\\left(\\frac{\\pi}{4}\\right)} = \\mathbf{\\frac{8\\sqrt{2}}{\\pi a}}$$
    </li>
  </ol>`,
  '4 Marks',
  [
    ['(i) Logarithmic transformation and proving d²y/dx² = (dy/dx)²', '1.5 Marks'],
    ['(ii) Parametric first derivative dy/dx = tan θ', '1 Mark'],
    ['(ii) Applying chain rule d/dθ(tan θ) * dθ/dx and evaluation at π/4: 8√2/(πa)', '1.5 Marks']
  ]
));

// Q14 (Ex 5.5 Q16 & Logarithmic Differentiation of Composite Functions)
questions.push(createQCard(
  'c12m-ch5-q14',
  'Q14',
  'Exercise 5.5 & Board Exam Special',
  `Find the derivative of the function given by $f(x) = (1 + x)(1 + x^2)(1 + x^4)(1 + x^8)$ and hence find $f'(1)$.`,
  `<p>Given: $f(x) = (1 + x)(1 + x^2)(1 + x^4)(1 + x^8)$.</p>
  <p>Taking natural logarithm on both sides:</p>
  $$\\log f(x) = \\log(1 + x) + \\log(1 + x^2) + \\log(1 + x^4) + \\log(1 + x^8)$$
  <p>Differentiating both sides with respect to $x$:</p>
  $$\\frac{1}{f(x)} f'(x) = \\frac{1}{1 + x} + \\frac{2x}{1 + x^2} + \\frac{4x^3}{1 + x^4} + \\frac{8x^7}{1 + x^8}$$
  $$f'(x) = f(x) \\left[ \\frac{1}{1 + x} + \\frac{2x}{1 + x^2} + \\frac{4x^3}{1 + x^4} + \\frac{8x^7}{1 + x^8} \\right]$$
  $$f'(x) = (1 + x)(1 + x^2)(1 + x^4)(1 + x^8) \\left[ \\frac{1}{1 + x} + \\frac{2x}{1 + x^2} + \\frac{4x^3}{1 + x^4} + \\frac{8x^7}{1 + x^8} \\right]$$

  <p><strong>Finding $f'(1)$:</strong></p>
  <ol>
    <li>Value of $f(1)$:
      $$f(1) = (1 + 1)(1 + 1)(1 + 1)(1 + 1) = 2 \\times 2 \\times 2 \\times 2 = 16$$
    </li>
    <li>Bracketed expression at $x = 1$:
      $$\\left[ \\frac{1}{2} + \\frac{2}{2} + \\frac{4}{2} + \\frac{8}{2} \\right] = \\frac{1 + 2 + 4 + 8}{2} = \\frac{15}{2}$$
    </li>
    <li>Multiplying:
      $$f'(1) = 16 \\times \\frac{15}{2} = 8 \\times 15 = \\mathbf{120}$$
    </li>
  </ol>`,
  '4 Marks',
  [
    ['Applying log to multi-term product: log f(x) = sum of logs', '1.5 Marks'],
    ['Differentiating each term using chain rule to get f\'(x)', '1.5 Marks'],
    ['Evaluating f(1) = 16 and bracket sum = 15/2 yielding f\'(1) = 120', '1 Mark']
  ]
));

saveChapter(
  5,
  'Continuity and Differentiability',
  svgDiagram,
  'NCERT Exercises 5.1 to 5.7 (14 Verbatim Core Questions)',
  questions,
  'Application of Derivatives'
);
