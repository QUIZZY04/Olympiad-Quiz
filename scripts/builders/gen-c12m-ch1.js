// scripts/builders/gen-c12m-ch1.js
// Chapter 1: Relations and Functions
const { createQCard, saveChapter } = require('./c12m-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f5f3ff; border:1px solid #ddd6fe; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#4f46e5; font-size:1.05rem;">📐 Mathematical Concept Map: Relations & Types of Functions</h4>
  <svg viewBox="0 0 880 280" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #c7d2fe;">
    <!-- Equivalence Relation Card -->
    <rect x="20" y="20" width="260" height="240" rx="10" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
    <text x="150" y="46" font-family="sans-serif" font-size="14" font-weight="bold" fill="#3730a3" text-anchor="middle">Equivalence Relation</text>
    <line x1="35" y1="56" x2="265" y2="56" stroke="#6366f1" stroke-width="1.5"/>

    <text x="35" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4338ca">1. Reflexive:</text>
    <text x="35" y="98" font-family="sans-serif" font-size="11" fill="#334155">&bull; $(a, a) \in R, \quad \forall a \in A$</text>

    <text x="35" y="125" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4338ca">2. Symmetric:</text>
    <text x="35" y="143" font-family="sans-serif" font-size="11" fill="#334155">&bull; $(a, b) \in R \implies (b, a) \in R$</text>

    <text x="35" y="170" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4338ca">3. Transitive:</text>
    <text x="35" y="188" font-family="sans-serif" font-size="11" fill="#334155">&bull; $(a, b) \in R \text{ and } (b, c) \in R$</text>
    <text x="45" y="204" font-family="sans-serif" font-size="11" fill="#334155">$\implies (a, c) \in R$</text>

    <text x="35" y="235" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4f46e5">Partition into Equivalence Classes $[a]$</text>

    <!-- Types of Functions Card -->
    <rect x="310" y="20" width="280" height="240" rx="10" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="2"/>
    <text x="450" y="46" font-family="sans-serif" font-size="14" font-weight="bold" fill="#5b21b6" text-anchor="middle">Classification of Functions</text>
    <line x1="325" y1="56" x2="575" y2="56" stroke="#8b5cf6" stroke-width="1.5"/>

    <text x="325" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6d28d9">1. Injective (One-One):</text>
    <text x="325" y="98" font-family="sans-serif" font-size="11" fill="#334155">&bull; $f(x_1) = f(x_2) \implies x_1 = x_2$</text>
    <text x="325" y="114" font-family="sans-serif" font-size="11" fill="#334155">&bull; Distinct elements have distinct images</text>

    <text x="325" y="142" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6d28d9">2. Surjective (Onto):</text>
    <text x="325" y="160" font-family="sans-serif" font-size="11" fill="#334155">&bull; $\forall y \in Y, \exists x \in X \text{ s.t. } f(x) = y$</text>
    <text x="325" y="176" font-family="sans-serif" font-size="11" fill="#334155">&bull; $\text{Range}(f) = \text{Codomain}(Y)$</text>

    <text x="325" y="204" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6d28d9">3. Bijective (One-One & Onto):</text>
    <text x="325" y="222" font-family="sans-serif" font-size="11" fill="#334155">&bull; Both Injective and Surjective</text>
    <text x="325" y="238" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4f46e5">&bull; Invertible bijection condition</text>

    <!-- Visual Mapping diagrams -->
    <rect x="610" y="20" width="250" height="240" rx="10" fill="#fdf4ff" stroke="#ec4899" stroke-width="2"/>
    <text x="735" y="46" font-family="sans-serif" font-size="14" font-weight="bold" fill="#9d174d" text-anchor="middle">Visual Mapping Schema</text>
    <line x1="625" y1="56" x2="845" y2="56" stroke="#ec4899" stroke-width="1.5"/>

    <!-- Set X ellipse -->
    <ellipse cx="660" cy="120" rx="25" ry="50" fill="#fce7f3" stroke="#db2777"/>
    <text x="660" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="#be185d" text-anchor="middle">X</text>
    <circle cx="660" cy="90" r="3" fill="#be185d"/>
    <circle cx="660" cy="120" r="3" fill="#be185d"/>
    <circle cx="660" cy="150" r="3" fill="#be185d"/>

    <!-- Set Y ellipse -->
    <ellipse cx="780" cy="120" rx="25" ry="50" fill="#fce7f3" stroke="#db2777"/>
    <text x="780" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="#be185d" text-anchor="middle">Y</text>
    <circle cx="780" cy="90" r="3" fill="#be185d"/>
    <circle cx="780" cy="120" r="3" fill="#be185d"/>
    <circle cx="780" cy="150" r="3" fill="#be185d"/>

    <!-- Arrows -->
    <line x1="663" y1="90" x2="777" y2="90" stroke="#db2777" stroke-width="1.5"/>
    <polygon points="777,87 783,90 777,93" fill="#db2777"/>

    <line x1="663" y1="120" x2="777" y2="120" stroke="#db2777" stroke-width="1.5"/>
    <polygon points="777,117 783,120 777,123" fill="#db2777"/>

    <line x1="663" y1="150" x2="777" y2="150" stroke="#db2777" stroke-width="1.5"/>
    <polygon points="777,147 783,150 777,153" fill="#db2777"/>

    <text x="720" y="105" font-family="sans-serif" font-size="11" font-weight="bold" fill="#be185d" text-anchor="middle">f</text>

    <text x="735" y="195" font-family="sans-serif" font-size="11" font-weight="bold" fill="#be185d" text-anchor="middle">Bijective (1-to-1 & Onto)</text>
    <text x="735" y="215" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">Every element of X has unique</text>
    <text x="735" y="230" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">image; every y has a preimage</text>
  </svg>
</div>`;

const questions = [];

// Q1 (Ex 1.1 Q1)
questions.push(createQCard(
  'c12m-ch1-q1',
  'Q1',
  'Exercise 1.1 (Verbatim)',
  `Determine whether each of the following relations are reflexive, symmetric and transitive:
  <br>(i) Relation $R$ in the set $A = \\{1, 2, 3, \\dots, 13, 14\\}$ defined as:
  $$R = \\{(x, y) : 3x - y = 0\\}$$
  <br>(ii) Relation $R$ in the set $\\mathbb{N}$ of natural numbers defined as:
  $$R = \\{(x, y) : y = x + 5 \\text{ and } x < 4\\}$$
  <br>(iii) Relation $R$ in the set $A = \\{1, 2, 3, 4, 5, 6\\}$ as:
  $$R = \\{(x, y) : y \\text{ is divisible by } x\\}$$
  <br>(iv) Relation $R$ in the set $\\mathbb{Z}$ of all integers defined as:
  $$R = \\{(x, y) : x - y \\text{ is an integer}\\}$$
  <br>(v) Relation $R$ in the set $A$ of human beings in a town at a particular time given by:
  <br>&nbsp;&nbsp;&nbsp;&nbsp;(a) $R = \\{(x, y) : x \\text{ and } y \\text{ work at the same place}\\}$
  <br>&nbsp;&nbsp;&nbsp;&nbsp;(b) $R = \\{(x, y) : x \\text{ and } y \\text{ live in the same locality}\\}$
  <br>&nbsp;&nbsp;&nbsp;&nbsp;(c) $R = \\{(x, y) : x \\text{ is exactly } 7\\text{ cm taller than } y\\}$
  <br>&nbsp;&nbsp;&nbsp;&nbsp;(d) $R = \\{(x, y) : x \\text{ is wife of } y\\}$
  <br>&nbsp;&nbsp;&nbsp;&nbsp;(e) $R = \\{(x, y) : x \\text{ is father of } y\\}$`,
  `<p><strong>Detailed Step-by-Step Analysis:</strong></p>

  <p><strong>(i) $A = \\{1, 2, \\dots, 14\\}$, $R = \\{(x, y) : y = 3x\\}$:</strong></p>
  <ul>
    <li>In roster form: $R = \\{(1, 3), (2, 6), (3, 9), (4, 12)\\}$.</li>
    <li><strong>Reflexive:</strong> $(1, 1) \\notin R$ since $3(1) - 1 = 2 \\neq 0$. Hence, $R$ is <strong>not reflexive</strong>.</li>
    <li><strong>Symmetric:</strong> $(1, 3) \\in R$, but $(3, 1) \\notin R$ (since $3(3) - 1 = 8 \\neq 0$). Hence, $R$ is <strong>not symmetric</strong>.</li>
    <li><strong>Transitive:</strong> $(1, 3) \\in R$ and $(3, 9) \\in R$, but $(1, 9) \\notin R$ (since $3(1) - 9 = -6 \\neq 0$). Hence, $R$ is <strong>not transitive</strong>.</li>
    <li><em>Verdict:</em> <strong>Neither reflexive, nor symmetric, nor transitive.</strong></li>
  </ul>

  <p><strong>(ii) In $\\mathbb{N}$, $R = \\{(x, y) : y = x + 5, x < 4\\}$:</strong></p>
  <ul>
    <li>Since $x \\in \\mathbb{N}$ and $x < 4$, possible values of $x$ are $1, 2, 3$.</li>
    <li>$R = \\{(1, 6), (2, 7), (3, 8)\\}$.</li>
    <li><strong>Reflexive:</strong> $(1, 1) \\notin R$. Hence, <strong>not reflexive</strong>.</li>
    <li><strong>Symmetric:</strong> $(1, 6) \\in R$, but $(6, 1) \\notin R$. Hence, <strong>not symmetric</strong>.</li>
    <li><strong>Transitive:</strong> There are no pairs such that $(x, y) \\in R$ and $(y, z) \\in R$. Hence, transitivity holds vacuously, but practically as defined in NCERT standard marking, $(x, y) \\in R$ without $(y, z) \\in R$ means <strong>not transitive</strong> (or vacuously transitive; CBSE accepts neither reflexive, nor symmetric, nor transitive).</li>
  </ul>

  <p><strong>(iii) $A = \\{1, 2, 3, 4, 5, 6\\}$, $R = \\{(x, y) : y \\text{ is divisible by } x\\}$:</strong></p>
  <ul>
    <li><strong>Reflexive:</strong> For any $x \\in A$, $x$ is divisible by $x$. Thus, $(x, x) \\in R, \\forall x \\in A$. Hence, <strong>reflexive</strong>.</li>
    <li><strong>Symmetric:</strong> $(2, 4) \\in R$ (4 is divisible by 2), but $(4, 2) \\notin R$ (2 is not divisible by 4). Hence, <strong>not symmetric</strong>.</li>
    <li><strong>Transitive:</strong> If $y$ is divisible by $x$ (so $y = k_1 x$) and $z$ is divisible by $y$ (so $z = k_2 y$), then $z = k_1 k_2 x$, so $z$ is divisible by $x$. Thus, $(x, z) \\in R$. Hence, <strong>transitive</strong>.</li>
    <li><em>Verdict:</em> <strong>Reflexive and transitive, but not symmetric.</strong></li>
  </ul>

  <p><strong>(iv) In $\\mathbb{Z}$, $R = \\{(x, y) : x - y \\in \\mathbb{Z}\\}$:</strong></p>
  <ul>
    <li><strong>Reflexive:</strong> $\\forall x \\in \\mathbb{Z}$, $x - x = 0 \\in \\mathbb{Z} \\implies (x, x) \\in R$. <strong>Reflexive</strong>.</li>
    <li><strong>Symmetric:</strong> If $(x, y) \\in R$, $x - y = k \\in \\mathbb{Z} \\implies y - x = -k \\in \\mathbb{Z} \\implies (y, x) \\in R$. <strong>Symmetric</strong>.</li>
    <li><strong>Transitive:</strong> If $(x, y) \\in R$ and $(y, z) \\in R$, then $x - y \\in \\mathbb{Z}$ and $y - z \\in \\mathbb{Z}$. Adding both: $(x - y) + (y - z) = x - z \\in \\mathbb{Z} \\implies (x, z) \\in R$. <strong>Transitive</strong>.</li>
    <li><em>Verdict:</em> <strong>Equivalence relation (Reflexive, symmetric, and transitive).</strong></li>
  </ul>

  <p><strong>(v) Relations on Human Beings:</strong></p>
  <ul>
    <li><strong>(a) Work at same place:</strong> Reflexive (person works at same place as self), Symmetric (if $x$ and $y$ work at same place, $y$ and $x$ do), Transitive (if $x, y$ and $y, z$ work at same place, $x, z$ do). &rarr; <strong>Equivalence relation</strong>.</li>
    <li><strong>(b) Live in same locality:</strong> Reflexive, Symmetric, and Transitive. &rarr; <strong>Equivalence relation</strong>.</li>
    <li><strong>(c) $x$ is 7 cm taller than $y$:</strong> Not reflexive (no one is 7 cm taller than self), Not symmetric (if $x$ is taller, $y$ is shorter), Not transitive (if $x$ is 7 cm taller than $y$ and $y$ than $z$, $x$ is 14 cm taller than $z$). &rarr; <strong>Neither reflexive, nor symmetric, nor transitive</strong>.</li>
    <li><strong>(d) $x$ is wife of $y$:</strong> Not reflexive; Not symmetric (if $x$ is wife of $y$, $y$ is husband of $x$); Transitive vacuously (if $x$ is wife of $y$, $y$ is male and cannot be wife of anyone else). &rarr; <strong>Neither reflexive nor symmetric, but transitive</strong>.</li>
    <li><strong>(e) $x$ is father of $y$:</strong> Not reflexive; Not symmetric; Not transitive ($x$ is grandfather of $z$). &rarr; <strong>Neither reflexive, nor symmetric, nor transitive</strong>.</li>
  </ul>`,
  '5 Marks',
  [
    ['(i) & (ii) Testing reflexivity, symmetry, transitivity with counter-examples', '1.5 Marks'],
    ['(iii) Proof of reflexivity and transitivity with counterexample for symmetry', '1 Mark'],
    ['(iv) Rigorous proof of equivalence relation in Z', '1 Mark'],
    ['(v) Accurate classification of all 5 human relation cases', '1.5 Marks']
  ]
));

// Q2 (Ex 1.1 Q2)
questions.push(createQCard(
  'c12m-ch1-q2',
  'Q2',
  'Exercise 1.1 (Verbatim)',
  `Show that the relation $R$ in the set $\\mathbb{R}$ of real numbers, defined as:
  $$R = \\{(a, b) : a \\le b^2\\}$$
  is neither reflexive nor symmetric nor transitive.`,
  `<p><strong>Mathematical Verification using Real Counter-Examples:</strong></p>
  
  <p><strong>1. Not Reflexive:</strong></p>
  <ul>
    <li>For $R$ to be reflexive, $(a, a) \\in R$ must hold for all $a \\in \\mathbb{R}$, which requires $a \\le a^2$.</li>
    <li>Let $a = \\frac{1}{2} \\in \\mathbb{R}$.</li>
    <li>Here, $a^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.</li>
    <li>Since $\\frac{1}{2} \\not\\le \\frac{1}{4}$, we have $\\left(\\frac{1}{2}, \\frac{1}{2}\\right) \\notin R$.</li>
    <li>Hence, $R$ is <strong>not reflexive</strong>.</li>
  </ul>

  <p><strong>2. Not Symmetric:</strong></p>
  <ul>
    <li>For $R$ to be symmetric, $(a, b) \\in R \\implies (b, a) \\in R$.</li>
    <li>Let $a = 1$ and $b = 2$.</li>
    <li>Since $1 \\le 2^2 = 4$, $(1, 2) \\in R$.</li>
    <li>However, for $(2, 1)$ to belong to $R$, we require $2 \\le 1^2 = 1$, which is false.</li>
    <li>Thus, $(1, 2) \\in R$ but $(2, 1) \\notin R$.</li>
    <li>Hence, $R$ is <strong>not symmetric</strong>.</li>
  </ul>

  <p><strong>3. Not Transitive:</strong></p>
  <ul>
    <li>For $R$ to be transitive, $(a, b) \\in R$ and $(b, c) \\in R \\implies (a, c) \\in R$.</li>
    <li>Choose $a = 3$, $b = -2$, and $c = -1$.</li>
    <li>Check $(a, b)$: $3 \\le (-2)^2 = 4$ is true $\\implies (3, -2) \\in R$.</li>
    <li>Check $(b, c)$: $-2 \\le (-1)^2 = 1$ is true $\\implies (-2, -1) \\in R$.</li>
    <li>Now check $(a, c)$: We require $3 \\le (-1)^2 = 1$, which is <strong>false</strong> ($3 \\not\\le 1$).</li>
    <li>Thus, $(3, -2) \\in R$ and $(-2, -1) \\in R$, but $(3, -1) \\notin R$.</li>
    <li>Hence, $R$ is <strong>not transitive</strong>.</li>
  </ul>
  <p><strong>Conclusion:</strong> The relation $R$ is neither reflexive, nor symmetric, nor transitive.</p>`,
  '3 Marks',
  [
    ['Proof that R is not reflexive using a fraction between 0 and 1 (e.g. a = 1/2)', '1 Mark'],
    ['Proof that R is not symmetric using suitable counter-example (e.g. 1 <= 2^2 but 2 > 1^2)', '1 Mark'],
    ['Proof that R is not transitive with clear negative real numbers counter-example (e.g. 3, -2, -1)', '1 Mark']
  ]
));

// Q3 (Ex 1.1 Q3)
questions.push(createQCard(
  'c12m-ch1-q3',
  'Q3',
  'Exercise 1.1 (Verbatim)',
  `Check whether the relation $R$ defined in the set $\\{1, 2, 3, 4, 5, 6\\}$ as:
  $$R = \\{(a, b) : b = a + 1\\}$$
  is reflexive, symmetric or transitive.`,
  `<p>Let $A = \\{1, 2, 3, 4, 5, 6\\}$.</p>
  <p>Given relation: $R = \\{(a, b) : b = a + 1\\}$.</p>
  <p>Writing $R$ in roster form:</p>
  $$R = \\{(1, 2), (2, 3), (3, 4), (4, 5), (5, 6)\\}$$

  <ol>
    <li><strong>Reflexivity:</strong>
      <br>For $R$ to be reflexive, $(a, a) \\in R$ for all $a \\in A$.
      <br>Here, $(1, 1) \\notin R$ because $1 \\neq 1 + 1 = 2$.
      <br>Hence, $R$ is <strong>not reflexive</strong>.
    </li>
    <li><strong>Symmetry:</strong>
      <br>$(1, 2) \\in R$ (since $2 = 1 + 1$).
      <br>However, $(2, 1) \\notin R$ (since $1 \\neq 2 + 1 = 3$).
      <br>Hence, $R$ is <strong>not symmetric</strong>.
    </li>
    <li><strong>Transitivity:</strong>
      <br>Observe that $(1, 2) \\in R$ and $(2, 3) \\in R$.
      <br>For $R$ to be transitive, $(1, 3)$ must belong to $R$.
      <br>However, for $(1, 3)$, $3 \\neq 1 + 1 = 2$, so $(1, 3) \\notin R$.
      <br>Hence, $R$ is <strong>not transitive</strong>.
    </li>
  </ol>
  <p><strong>Conclusion:</strong> The relation $R$ is <strong>neither reflexive, nor symmetric, nor transitive</strong>.</p>`,
  '3 Marks',
  [
    ['Writing R in roster form: {(1,2), (2,3), (3,4), (4,5), (5,6)}', '1 Mark'],
    ['Checking reflexivity (1,1 not in R) and symmetry ((1,2) in R but (2,1) not in R)', '1 Mark'],
    ['Checking transitivity ((1,2) and (2,3) in R but (1,3) not in R)', '1 Mark']
  ]
));

// Q4 (Ex 1.1 Q4)
questions.push(createQCard(
  'c12m-ch1-q4',
  'Q4',
  'Exercise 1.1 (Verbatim)',
  `Show that the relation $R$ in $\\mathbb{R}$ defined as $R = \\{(a, b) : a \\le b\\}$, is reflexive and transitive but not symmetric.`,
  `<p><strong>Proof:</strong></p>
  <ol>
    <li><strong>Reflexive:</strong>
      <br>For any real number $a \\in \\mathbb{R}$, we know that $a = a \\implies a \\le a$.
      <br>Therefore, $(a, a) \\in R$ for all $a \\in \\mathbb{R}$.
      <br>Hence, $R$ is <strong>reflexive</strong>.
    </li>
    <li><strong>Not Symmetric:</strong>
      <br>Take $a = 2$ and $b = 5$.
      <br>Since $2 \\le 5$, we have $(2, 5) \\in R$.
      <br>However, $5 \\not\\le 2$, which means $(5, 2) \\notin R$.
      <br>Therefore, $(a, b) \\in R$ does not imply $(b, a) \\in R$.
      <br>Hence, $R$ is <strong>not symmetric</strong>.
    </li>
    <li><strong>Transitive:</strong>
      <br>Let $(a, b) \\in R$ and $(b, c) \\in R$ for $a, b, c \\in \\mathbb{R}$.
      <br>Then by definition of $R$:
      $$a \\le b \\quad \\text{and} \\quad b \\le c$$
      <br>By the transitive property of real number inequality, $a \\le b \\le c \\implies a \\le c$.
      <br>Thus, $(a, c) \\in R$.
      <br>Hence, $R$ is <strong>transitive</strong>.
    </li>
  </ol>
  <p><strong>Conclusion:</strong> $R$ is reflexive and transitive, but not symmetric.</p>`,
  '3 Marks',
  [
    ['Proof of reflexivity stating a <= a for all real numbers a', '1 Mark'],
    ['Proof of non-symmetry with a specific numerical counter-example (e.g. 2 <= 5 but 5 > 2)', '1 Mark'],
    ['Proof of transitivity using algebraic inequality a <= b and b <= c => a <= c', '1 Mark']
  ]
));

// Q5 (Ex 1.1 Q5)
questions.push(createQCard(
  'c12m-ch1-q5',
  'Q5',
  'Exercise 1.1 (Verbatim)',
  `Check whether the relation $R$ in $\\mathbb{R}$ defined by $R = \\{(a, b) : a \\le b^3\\}$ is reflexive, symmetric or transitive.`,
  `<p><strong>Detailed Mathematical Examination:</strong></p>

  <p><strong>1. Reflexivity:</strong></p>
  <ul>
    <li>For $R$ to be reflexive, $a \\le a^3$ must hold for all $a \\in \\mathbb{R}$.</li>
    <li>Let $a = \\frac{1}{2} \\in \\mathbb{R}$.</li>
    <li>Then $a^3 = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$.</li>
    <li>Since $\\frac{1}{2} \\not\\le \\frac{1}{8}$ (as $0.5 > 0.125$), $\\left(\\frac{1}{2}, \\frac{1}{2}\\right) \\notin R$.</li>
    <li>Hence, $R$ is <strong>not reflexive</strong>.</li>
  </ul>

  <p><strong>2. Symmetry:</strong></p>
  <ul>
    <li>Let $a = 1$ and $b = 2$.</li>
    <li>Then $1 \\le 2^3 = 8$ is true $\\implies (1, 2) \\in R$.</li>
    <li>However, $2 \\le 1^3 = 1$ is false $\\implies (2, 1) \\notin R$.</li>
    <li>Hence, $R$ is <strong>not symmetric</strong>.</li>
  </ul>

  <p><strong>3. Transitivity:</strong></p>
  <ul>
    <li>We search for real numbers $a, b, c$ such that $a \\le b^3$ and $b \\le c^3$, but $a > c^3$.</li>
    <li>Let $a = 7$, $b = 2$, and $c = 1.5 = \\frac{3}{2}$.</li>
    <li>Check $(a, b)$: $a = 7$ and $b^3 = 2^3 = 8$. Since $7 \\le 8$, $(7, 2) \\in R$.</li>
    <li>Check $(b, c)$: $b = 2$ and $c^3 = \\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8} = 3.375$. Since $2 \\le 3.375$, $(2, 1.5) \\in R$.</li>
    <li>Now check $(a, c)$: $a = 7$ and $c^3 = 3.375$. Here $7 \\not\\le 3.375$. Thus, $(7, 1.5) \\notin R$.</li>
    <li>Hence, $R$ is <strong>not transitive</strong>.</li>
  </ul>
  <p><strong>Conclusion:</strong> $R$ is <strong>neither reflexive, nor symmetric, nor transitive</strong>.</p>`,
  '3 Marks',
  [
    ['Proof that R is not reflexive using fraction 1/2 > (1/2)^3', '1 Mark'],
    ['Proof that R is not symmetric (e.g. 1 <= 2^3 but 2 > 1^3)', '1 Mark'],
    ['Proof that R is not transitive with counterexample (e.g. 7, 2, 1.5)', '1 Mark']
  ]
));

// Q6 (Ex 1.1 Q6)
questions.push(createQCard(
  'c12m-ch1-q6',
  'Q6',
  'Exercise 1.1 (Verbatim)',
  `Show that the relation $R$ in the set $A = \\{1, 2, 3\\}$ given by $R = \\{(1, 2), (2, 1)\\}$ is symmetric but neither reflexive nor transitive.`,
  `<p>Let $A = \\{1, 2, 3\\}$ and $R = \\{(1, 2), (2, 1)\\}$.</p>
  <ol>
    <li><strong>Not Reflexive:</strong>
      <br>For $R$ to be reflexive on $A$, $(1, 1), (2, 2), (3, 3)$ must all be in $R$.
      <br>Since $(1, 1) \\notin R$, $R$ is <strong>not reflexive</strong>.
    </li>
    <li><strong>Symmetric:</strong>
      <br>$(1, 2) \\in R \\implies (2, 1) \\in R$, and $(2, 1) \\in R \\implies (1, 2) \\in R$.
      <br>Thus, $(a, b) \\in R \\implies (b, a) \\in R$ for all elements in $R$.
      <br>Hence, $R$ is <strong>symmetric</strong>.
    </li>
    <li><strong>Not Transitive:</strong>
      <br>Observe that $(1, 2) \\in R$ and $(2, 1) \\in R$.
      <br>For $R$ to be transitive, $(1, 1)$ must be in $R$.
      <br>Since $(1, 1) \\notin R$, $R$ is <strong>not transitive</strong>.
    </li>
  </ol>`,
  '2 Marks',
  [
    ['Showing non-reflexivity: (1,1) not in R', '0.5 Mark'],
    ['Showing symmetry: (1,2) in R and (2,1) in R', '1 Mark'],
    ['Showing non-transitivity: (1,2) and (2,1) in R but (1,1) not in R', '0.5 Mark']
  ]
));

// Q7 (Ex 1.1 Q8)
questions.push(createQCard(
  'c12m-ch1-q7',
  'Q7',
  'Exercise 1.1 (Verbatim)',
  `Show that the relation $R$ in the set $A = \\{1, 2, 3, 4, 5\\}$ given by:
  $$R = \\{(a, b) : |a - b| \\text{ is even}\\}$$
  is an equivalence relation. Show that all the elements of $\\{1, 3, 5\\}$ are related to each other and all the elements of $\\{2, 4\\}$ are related to each other, but no element of $\\{1, 3, 5\\}$ is related to any element of $\\{2, 4\\}$.`,
  `<p><strong>Part 1: Proof that $R$ is an Equivalence Relation:</strong></p>
  <ol>
    <li><strong>Reflexive:</strong>
      <br>For any $a \\in A$, $|a - a| = 0$, which is an even integer.
      <br>Thus, $(a, a) \\in R$ for all $a \\in A$. Hence, $R$ is <strong>reflexive</strong>.
    </li>
    <li><strong>Symmetric:</strong>
      <br>Let $(a, b) \\in R$.
      <br>$\\implies |a - b|$ is even.
      <br>Since $|b - a| = |-(a - b)| = |a - b|$, $|b - a|$ is also even.
      <br>$\\implies (b, a) \\in R$. Hence, $R$ is <strong>symmetric</strong>.
    </li>
    <li><strong>Transitive:</strong>
      <br>Let $(a, b) \\in R$ and $(b, c) \\in R$.
      <br>$\\implies |a - b|$ is even and $|b - c|$ is even.
      <br>This implies $(a - b)$ is even and $(b - c)$ is even.
      <br>We know that the sum of two even integers is always even:
      $$(a - b) + (b - c) = a - c \\quad \\text{is even}$$
      <br>$\\implies |a - c|$ is even $\\implies (a, c) \\in R$.
      <br>Hence, $R$ is <strong>transitive</strong>.
    </li>
  </ol>
  <p>Since $R$ is reflexive, symmetric, and transitive, $R$ is an <strong>equivalence relation</strong>.</p>

  <p><strong>Part 2: Elements of $\\{1, 3, 5\\}$ and $\\{2, 4\\}$:</strong></p>
  <ul>
    <li>All elements of $S_1 = \\{1, 3, 5\\}$ are odd numbers. The difference between any two odd numbers is always even ($|1-3|=2, |3-5|=2, |1-5|=4$). Thus, all elements of $\\{1, 3, 5\\}$ are related to each other.</li>
    <li>All elements of $S_2 = \\{2, 4\\}$ are even numbers. The difference between any two even numbers is always even ($|2-4|=2$). Thus, all elements of $\\{2, 4\\}$ are related to each other.</li>
    <li>If we take any element from $\\{1, 3, 5\\}$ (odd) and any element from $\\{2, 4\\}$ (even), the difference between an odd and an even number is always <strong>odd</strong> (e.g., $|1-2|=1, |3-4|=1$). Thus, no element of $\\{1, 3, 5\\}$ can be related to any element of $\\{2, 4\\}$.</li>
  </ul>`,
  '4 Marks',
  [
    ['Proof of reflexivity (|a - a| = 0 is even) and symmetry (|b - a| = |a - b|)', '1.5 Marks'],
    ['Proof of transitivity using (a - b) + (b - c) = a - c being even', '1 Mark'],
    ['Verification of equivalence classes: odd sub-block {1,3,5} and even sub-block {2,4}', '1.5 Marks']
  ]
));

// Q8 (Ex 1.1 Q9)
questions.push(createQCard(
  'c12m-ch1-q8',
  'Q8',
  'Exercise 1.1 (Verbatim)',
  `Show that each of the relation $R$ in the set $A = \\{x \\in \\mathbb{Z} : 0 \\le x \\le 12\\}$, given by:
  <br>(i) $R = \\{(a, b) : |a - b| \\text{ is a multiple of } 4\\}$
  <br>(ii) $R = \\{(a, b) : a = b\\}$
  <br>is an equivalence relation. Find the set of all elements related to $1$ in each case.`,
  `<p>$A = \\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12\\}$.</p>

  <p><strong>(i) $R = \\{(a, b) : |a - b| \\text{ is a multiple of } 4\\}$:</strong></p>
  <ol>
    <li><strong>Reflexive:</strong> $\\forall a \\in A$, $|a - a| = 0 = 0 \\times 4$, which is a multiple of 4. So $(a, a) \\in R$. <strong>Reflexive</strong>.</li>
    <li><strong>Symmetric:</strong> If $(a, b) \\in R \\implies |a - b| = 4k \\implies |b - a| = 4k \\implies (b, a) \\in R$. <strong>Symmetric</strong>.</li>
    <li><strong>Transitive:</strong> If $(a, b) \\in R$ and $(b, c) \\in R$, then $a - b = \\pm 4k_1$ and $b - c = \\pm 4k_2$.
      <br>Adding: $(a - b) + (b - c) = a - c = 4(\\pm k_1 \\pm k_2) = 4m$.
      <br>$\\implies |a - c|$ is a multiple of 4 $\\implies (a, c) \\in R$. <strong>Transitive</strong>.
    </li>
  </ol>
  <p>Hence, $R$ is an <strong>equivalence relation</strong>.</p>
  <p><strong>Set of elements related to 1:</strong>
  <br>Let $x \\in A$ be related to 1:
  $$|x - 1| \\text{ is a multiple of } 4 \\implies |x - 1| \\in \\{0, 4, 8, 12\\}$$
  <ul>
    <li>$|x - 1| = 0 \\implies x = 1$</li>
    <li>$|x - 1| = 4 \\implies x = 5$</li>
    <li>$|x - 1| = 8 \\implies x = 9$</li>
    <li>$|x - 1| = 12 \\implies x = 13 \\notin A$</li>
  </ul>
  <p>Therefore, the set of elements related to 1 (equivalence class $[1]$) is <strong>$\\{1, 5, 9\\}$</strong>.</p>

  <p><strong>(ii) $R = \\{(a, b) : a = b\\}$:</strong></p>
  <ul>
    <li>$a = a \\implies (a, a) \\in R$ (Reflexive).</li>
    <li>$a = b \\implies b = a \\implies (b, a) \\in R$ (Symmetric).</li>
    <li>$a = b$ and $b = c \\implies a = c \\implies (a, c) \\in R$ (Transitive).</li>
    <li>Hence, $R$ is an <strong>equivalence relation</strong>.</li>
    <li><strong>Set of elements related to 1:</strong> $\\{x \\in A : x = 1\\} = \\mathbf{\\{1\\}}$.</li>
  </ul>`,
  '4 Marks',
  [
    ['(i) Proof of equivalence relation for multiple of 4', '1.5 Marks'],
    ['(i) Set of elements related to 1: {1, 5, 9}', '1 Mark'],
    ['(ii) Proof of equivalence relation for equality relation', '1 Mark'],
    ['(ii) Set of elements related to 1: {1}', '0.5 Mark']
  ]
));

// Q9 (Ex 1.2 Q1)
questions.push(createQCard(
  'c12m-ch1-q9',
  'Q9',
  'Exercise 1.2 (Verbatim)',
  `Show that the function $f : \\mathbb{R}_* \\to \\mathbb{R}_*$ defined by $f(x) = \\frac{1}{x}$ is one-one and onto, where $\\mathbb{R}_*$ is the set of all non-zero real numbers. Is the result true, if the domain $\\mathbb{R}_*$ is replaced by $\\mathbb{N}$ with co-domain being same as $\\mathbb{R}_*$?`,
  `<p><strong>Case 1: $f : \\mathbb{R}_* \\to \\mathbb{R}_*$ defined by $f(x) = \\frac{1}{x}$:</strong></p>
  
  <p><strong>1. One-One (Injective):</strong></p>
  <ul>
    <li>Let $x_1, x_2 \\in \\mathbb{R}_*$ such that $f(x_1) = f(x_2)$.</li>
    <li>$$\\frac{1}{x_1} = \\frac{1}{x_2} \\implies x_1 = x_2$$</li>
    <li>Since $f(x_1) = f(x_2) \\implies x_1 = x_2$, the function $f$ is <strong>one-one (injective)</strong>.</li>
  </ul>

  <p><strong>2. Onto (Surjective):</strong></p>
  <ul>
    <li>Let $y \\in \\mathbb{R}_*$ (codomain). We seek $x \\in \\mathbb{R}_*$ such that $f(x) = y$.</li>
    <li>$$y = \\frac{1}{x} \\implies x = \\frac{1}{y}$$</li>
    <li>Since $y \\in \\mathbb{R}_*$, $y \\neq 0$, which implies $x = \\frac{1}{y} \\in \\mathbb{R}_*$ (domain).</li>
    <li>Then $f(x) = f\\left(\\frac{1}{y}\\right) = \\frac{1}{1/y} = y$.</li>
    <li>Thus, for every $y$ in the codomain, there exists a pre-image $x = \\frac{1}{y}$ in the domain.</li>
    <li>Hence, $f$ is <strong>onto (surjective)</strong>.</li>
    <li>Therefore, $f$ is <strong>bijective</strong>.</li>
  </ul>

  <p><strong>Case 2: Domain replaced by $\\mathbb{N}$, so $f : \\mathbb{N} \\to \\mathbb{R}_*$ where $f(x) = \\frac{1}{x}$:</strong></p>
  <ul>
    <li><strong>One-One:</strong> For $x_1, x_2 \\in \\mathbb{N}$, $\\frac{1}{x_1} = \\frac{1}{x_2} \\implies x_1 = x_2$. $f$ remains <strong>one-one</strong>.</li>
    <li><strong>Not Onto:</strong> Consider $y = 2 \\in \\mathbb{R}_*$ (codomain).
      <br>If $f(x) = y \\implies \\frac{1}{x} = 2 \\implies x = \\frac{1}{2}$.
      <br>However, $\\frac{1}{2} \\notin \\mathbb{N}$ (the domain is $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$).
      <br>Thus, $y = 2$ has no pre-image in the domain $\\mathbb{N}$.
      <br>Hence, $f$ is <strong>NOT onto</strong>.
    </li>
  </ul>
  <p><strong>Conclusion:</strong> The result is <strong>not true</strong> when the domain is replaced by $\\mathbb{N}$.</p>`,
  '3 Marks',
  [
    ['Proof of injectivity for R_* -> R_* (f(x1) = f(x2) => x1 = x2)', '1 Mark'],
    ['Proof of surjectivity for R_* -> R_* (pre-image x = 1/y in domain)', '1 Mark'],
    ['Disproving surjectivity when domain is N with counter-example (e.g. y = 2 has x = 1/2 not in N)', '1 Mark']
  ]
));

// Q10 (Ex 1.2 Q2)
questions.push(createQCard(
  'c12m-ch1-q10',
  'Q10',
  'Exercise 1.2 (Verbatim)',
  `Check the injectivity and surjectivity of the following functions:
  <br>(i) $f : \\mathbb{N} \\to \\mathbb{N}$ given by $f(x) = x^2$
  <br>(ii) $f : \\mathbb{Z} \\to \\mathbb{Z}$ given by $f(x) = x^2$
  <br>(iii) $f : \\mathbb{R} \\to \\mathbb{R}$ given by $f(x) = x^2$
  <br>(iv) $f : \\mathbb{N} \\to \\mathbb{N}$ given by $f(x) = x^3$
  <br>(v) $f : \\mathbb{Z} \\to \\mathbb{Z}$ given by $f(x) = x^3$`,
  `<div style="display:flex; flex-direction:column; gap:12px;">
    <div style="background:#f8fafc; padding:10px; border-left:4px solid #4f46e5; border-radius:6px;">
      <strong>(i) $f : \\mathbb{N} \\to \\mathbb{N}, f(x) = x^2$:</strong>
      <ul>
        <li><strong>Injective:</strong> $f(x_1) = f(x_2) \\implies x_1^2 = x_2^2 \\implies x_1 = x_2$ (since $x_1, x_2 \\in \\mathbb{N} > 0$). &rarr; <strong>Injective</strong>.</li>
        <li><strong>Not Surjective:</strong> Consider $2 \\in \\mathbb{N}$ (codomain). If $x^2 = 2 \\implies x = \\sqrt{2} \\notin \\mathbb{N}$. &rarr; <strong>Not Surjective</strong>.</li>
      </ul>
    </div>

    <div style="background:#f8fafc; padding:10px; border-left:4px solid #4f46e5; border-radius:6px;">
      <strong>(ii) $f : \\mathbb{Z} \\to \\mathbb{Z}, f(x) = x^2$:</strong>
      <ul>
        <li><strong>Not Injective:</strong> $f(-1) = (-1)^2 = 1$ and $f(1) = 1^2 = 1$. Since $f(-1) = f(1)$ but $-1 \\neq 1$, $f$ is <strong>not injective</strong>.</li>
        <li><strong>Not Surjective:</strong> Consider $-2 \\in \\mathbb{Z}$. Since $x^2 \\ge 0$ for all real $x$, $x^2 = -2$ has no integer solution. &rarr; <strong>Not Surjective</strong>.</li>
      </ul>
    </div>

    <div style="background:#f8fafc; padding:10px; border-left:4px solid #4f46e5; border-radius:6px;">
      <strong>(iii) $f : \\mathbb{R} \\to \\mathbb{R}, f(x) = x^2$:</strong>
      <ul>
        <li><strong>Not Injective:</strong> $f(-1) = 1 = f(1)$ while $-1 \\neq 1$. &rarr; <strong>Not Injective</strong>.</li>
        <li><strong>Not Surjective:</strong> Negative real numbers (e.g. $-3$) have no pre-images in $\\mathbb{R}$ since $x^2 \\ge 0$. &rarr; <strong>Not Surjective</strong>.</li>
      </ul>
    </div>

    <div style="background:#f8fafc; padding:10px; border-left:4px solid #4f46e5; border-radius:6px;">
      <strong>(iv) $f : \\mathbb{N} \\to \\mathbb{N}, f(x) = x^3$:</strong>
      <ul>
        <li><strong>Injective:</strong> $x_1^3 = x_2^3 \\implies x_1 = x_2$. &rarr; <strong>Injective</strong>.</li>
        <li><strong>Not Surjective:</strong> $2 \\in \\mathbb{N}$ has $x = 2^{1/3} \\notin \\mathbb{N}$. &rarr; <strong>Not Surjective</strong>.</li>
      </ul>
    </div>

    <div style="background:#f8fafc; padding:10px; border-left:4px solid #4f46e5; border-radius:6px;">
      <strong>(v) $f : \\mathbb{Z} \\to \\mathbb{Z}, f(x) = x^3$:</strong>
      <ul>
        <li><strong>Injective:</strong> $x_1^3 = x_2^3 \\implies x_1 = x_2$ for integers. &rarr; <strong>Injective</strong>.</li>
        <li><strong>Not Surjective:</strong> $2 \\in \\mathbb{Z}$ has $x = 2^{1/3} \\notin \\mathbb{Z}$. &rarr; <strong>Not Surjective</strong>.</li>
      </ul>
    </div>
  </div>`,
  '5 Marks',
  [
    ['(i) Injective but not surjective with counter-example', '1 Mark'],
    ['(ii) Neither injective nor surjective with integer counter-examples', '1 Mark'],
    ['(iii) Neither injective nor surjective in real domain R', '1 Mark'],
    ['(iv) Injective but not surjective in N', '1 Mark'],
    ['(v) Injective but not surjective in Z', '1 Mark']
  ]
));

// Q11 (Ex 1.2 Q7)
questions.push(createQCard(
  'c12m-ch1-q11',
  'Q11',
  'Exercise 1.2 (Verbatim)',
  `In each of the following cases, state whether the function is one-one, onto or bijective. Justify your answer:
  <br>(i) $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = 3 - 4x$
  <br>(ii) $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = 1 + x^2$`,
  `<div style="display:flex; flex-direction:column; gap:16px;">
    <div>
      <h5 style="color:#4f46e5; margin:0 0 6px 0;">(i) $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = 3 - 4x$:</h5>
      <p><strong>1. One-One:</strong> Let $x_1, x_2 \\in \\mathbb{R}$ such that $f(x_1) = f(x_2)$.
      $$3 - 4x_1 = 3 - 4x_2 \\implies -4x_1 = -4x_2 \\implies x_1 = x_2$$
      Hence, $f$ is <strong>one-one (injective)</strong>.</p>
      
      <p><strong>2. Onto:</strong> Let $y \\in \\mathbb{R}$ (codomain).
      $$y = 3 - 4x \\implies 4x = 3 - y \\implies x = \\frac{3 - y}{4}$$
      For any real number $y$, $x = \\frac{3 - y}{4} \\in \\mathbb{R}$ (domain).
      Then:
      $$f(x) = f\\left(\\frac{3 - y}{4}\\right) = 3 - 4\\left(\\frac{3 - y}{4}\\right) = 3 - (3 - y) = y$$
      Thus, every $y \\in \\mathbb{R}$ has a pre-image in $\\mathbb{R}$.
      Hence, $f$ is <strong>onto (surjective)</strong>.</p>
      <p><strong>Verdict:</strong> Since $f$ is both one-one and onto, $f$ is <strong>bijective</strong>.</p>
    </div>

    <div>
      <h5 style="color:#4f46e5; margin:0 0 6px 0;">(ii) $f : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = 1 + x^2$:</h5>
      <p><strong>1. Not One-One:</strong>
      Let $x_1 = 1$ and $x_2 = -1$.
      $$f(1) = 1 + (1)^2 = 2 \\quad \\text{and} \\quad f(-1) = 1 + (-1)^2 = 2$$
      Since $f(1) = f(-1) = 2$ but $1 \\neq -1$, $f$ is <strong>not one-one</strong>.</p>

      <p><strong>2. Not Onto:</strong>
      For any $x \\in \\mathbb{R}$, $x^2 \\ge 0 \\implies 1 + x^2 \\ge 1$.
      Therefore, the range of $f$ is $[1, \\infty)$.
      Elements in the codomain $\\mathbb{R}$ that are less than 1 (e.g., $y = -2$) have no pre-image:
      $$1 + x^2 = -2 \\implies x^2 = -3 \\quad \\text{(no real solution)}$$
      Hence, $f$ is <strong>not onto</strong>.</p>
      <p><strong>Verdict:</strong> $f$ is <strong>neither one-one nor onto</strong> (not bijective).</p>
    </div>
  </div>`,
  '4 Marks',
  [
    ['(i) Proof of injectivity (3-4x1 = 3-4x2 => x1=x2) and surjectivity (pre-image x = (3-y)/4)', '2 Marks'],
    ['(i) Conclusion that f is bijective', '0.5 Mark'],
    ['(ii) Disproving injectivity (f(1)=f(-1)=2) and surjectivity (range [1, inf) so y=-2 has no pre-image)', '1.5 Marks']
  ]
));

// Q12 (Ex 1.2 Q9)
questions.push(createQCard(
  'c12m-ch1-q12',
  'Q12',
  'Exercise 1.2 (Verbatim)',
  `Let $f : \\mathbb{N} \\to \\mathbb{N}$ be defined by:
  $$f(n) = \\begin{cases} \\frac{n + 1}{2}, & \\text{if } n \\text{ is odd} \\\\ \\frac{n}{2}, & \\text{if } n \\text{ is even} \\end{cases}$$
  for all $n \\in \\mathbb{N}$. State whether the function $f$ is bijective. Justify your answer.`,
  `<p><strong>Investigation of Injectivity and Surjectivity:</strong></p>

  <p><strong>1. Checking Injectivity (One-One):</strong></p>
  <ul>
    <li>Evaluate $f$ at $n = 1$ (odd):
      $$f(1) = \\frac{1 + 1}{2} = \\frac{2}{2} = 1$$</li>
    <li>Evaluate $f$ at $n = 2$ (even):
      $$f(2) = \\frac{2}{2} = 1$$</li>
    <li>We observe that $f(1) = f(2) = 1$, but $1 \\neq 2$.</li>
    <li>Two distinct elements in the domain have the same image in the codomain.</li>
    <li>Therefore, $f$ is <strong>not one-one (not injective)</strong>.</li>
  </ul>

  <p><strong>2. Checking Surjectivity (Onto):</strong></p>
  <ul>
    <li>Let $m \\in \\mathbb{N}$ be any arbitrary natural number in the codomain.</li>
    <li><strong>Case (a): If $n$ is chosen as $2m - 1$:</strong>
      <br>Since $m \\in \\mathbb{N}$, $2m - 1$ is an odd natural number belonging to the domain $\\mathbb{N}$.
      $$f(2m - 1) = \\frac{(2m - 1) + 1}{2} = \\frac{2m}{2} = m$$
    </li>
    <li><strong>Case (b): If $n$ is chosen as $2m$:</strong>
      <br>$2m$ is an even natural number belonging to the domain $\\mathbb{N}$.
      $$f(2m) = \\frac{2m}{2} = m$$
    </li>
    <li>Thus, for every $m \\in \\mathbb{N}$ in the codomain, there exists at least one pre-image (in fact, two pre-images: $2m-1$ and $2m$) in the domain $\\mathbb{N}$.</li>
    <li>Therefore, $f$ is <strong>onto (surjective)</strong>.</li>
  </ul>

  <p><strong>Conclusion:</strong></p>
  <p>Since $f$ is onto but not one-one, $f$ is <strong>NOT bijective</strong>.</p>`,
  '3 Marks',
  [
    ['Disproving injectivity: f(1) = f(2) = 1 but 1 != 2', '1 Mark'],
    ['Proving surjectivity: Showing pre-images 2m-1 (odd) and 2m (even) for any m in codomain N', '1.5 Marks'],
    ['Conclusion: f is surjective but not injective, hence not bijective', '0.5 Mark']
  ]
));

saveChapter(
  1,
  'Relations and Functions',
  svgDiagram,
  'NCERT Exercises 1.1 & 1.2 (12 Verbatim Core Questions)',
  questions,
  'Inverse Trigonometric Functions'
);
