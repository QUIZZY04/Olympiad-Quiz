const fs = require('fs');
const path = require('path');

const chDir = path.join(__dirname, '..', 'chapters-c9m');

const cbqData = {
  1: {
    caseStudy: {
      title: "Smart Delivery Drone Navigation (Cartesian Coordinates)",
      text: "A delivery hub is located at the origin O(0, 0). Drone Alpha delivers packages to customer A at (4, 3) and then directly to customer B at (-2, 3), before returning to the hub.<br>(a) In which quadrant is customer A located?<br>(b) Calculate the straight-line distance from customer A(4, 3) to customer B(-2, 3).<br>(c) Find the total round-trip distance traveled by Drone Alpha.",
      ans: "<strong>(a)</strong> Customer A(4, 3) has both coordinates positive, so it lies in <strong>Quadrant I</strong>.<br><strong>(b)</strong> Since both points have the same y-coordinate (y = 3), distance AB = |x₂ - x₁| = |(-2) - 4| = <strong>6 units</strong> (or by distance formula: √((-2-4)² + (3-3)²) = √36 = 6).<br><strong>(c)</strong> OA = √(4² + 3²) = √25 = 5 units. OB = √((-2)² + 3²) = √(4 + 9) = √13 ≈ 3.61 units. Total round-trip distance = OA + AB + BO = 5 + 6 + √13 = <strong>11 + √13 units (≈ 14.61 units)</strong>."
    },
    hots: {
      title: "Assertion & Reasoning — Distance and Quadrants",
      text: "<strong>Assertion (A):</strong> The distance between the points P(-3, 0) and Q(5, 0) on the x-axis is 8 units.<br><strong>Reason (R):</strong> The distance between two points (x₁, 0) and (x₂, 0) on the x-axis is given by |x₂ - x₁|.<br><em>Choose:</em> (a) Both A and R are true and R is correct explanation of A. (b) Both A and R are true, but R is not the correct explanation. (c) A is true, R is false. (d) A is false, R is true.",
      ans: "<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation of A.</strong><br><em>Explanation:</em> Distance PQ = |5 - (-3)| = |5 + 3| = 8 units. Reason (R) states the universal formula for points lying on the horizontal axis, which directly explains (A)."
    }
  },
  2: {
    caseStudy: {
      title: "App-Based Cab Fare Modeling (Linear Polynomials)",
      text: "In a metropolitan city, a cab aggregator charges a fixed base booking fee of ₹40 plus ₹15 per kilometer traveled. Let x denote the distance in kilometers and C(x) denote the total fare.<br>(a) Formulate the fare as a linear polynomial C(x).<br>(b) Find the fare for a trip of 12 km.<br>(c) Find the zero of the polynomial C(x) and state whether it has physical significance.",
      ans: "<strong>(a)</strong> Linear polynomial: <span class=\"math\">C(x) = 15x + 40</span> (degree 1).<br><strong>(b)</strong> For x = 12 km: C(12) = 15(12) + 40 = 180 + 40 = <strong>₹220</strong>.<br><strong>(c)</strong> Zero of C(x): 15x + 40 = 0 ⟹ 15x = -40 ⟹ x = -40/15 = -8/3 ≈ -2.67 km. Since distance cannot be negative, this zero has mathematical validity but no physical significance for a real cab ride."
    },
    hots: {
      title: "Assertion & Reasoning — Roots of Linear Polynomials",
      text: "<strong>Assertion (A):</strong> Every linear polynomial in one variable ax + b (where a ≠ 0) has exactly one unique zero.<br><strong>Reason (R):</strong> A polynomial of degree n can have at most n distinct real zeros, and a linear polynomial has degree 1.<br><em>Choose:</em> (a) Both A and R are true and R is the correct explanation. (b) Both A and R are true but R is not the correct explanation. (c) A is true, R is false. (d) A is false, R is true.",
      ans: "<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> Setting ax + b = 0 with a ≠ 0 yields x = -b/a. Since a and b are fixed constants, -b/a is unique. This is directly substantiated by the Fundamental Theorem of Algebra (Reason R)."
    }
  },
  3: {
    caseStudy: {
      title: "Precision Engineering & Real Number Expansions",
      text: "A precision laser cutting machine works with tolerances measured in rational fractions and irrational square roots. An engineer models a component with dimension d = 3.142857142857... mm and diagonal D = √8 mm.<br>(a) Express d in p/q form.<br>(b) State whether diagonal D is rational or irrational and find its simplest radical form.<br>(c) Is the sum d + D rational or irrational?",
      ans: "<strong>(a)</strong> d has a 6-digit repeating block: 3.142857... = 3 + 142857/999999 = 3 + 1/7 = <strong>22/7 mm</strong>.<br><strong>(b)</strong> D = √8 = √(4 × 2) = <strong>2√2 mm</strong>. Since 2 is a non-square integer, √2 is irrational, so D is <strong>irrational</strong>.<br><strong>(c)</strong> d is rational and D is irrational. The sum of a rational and an irrational number is always <strong>irrational</strong>. Therefore, d + D is irrational."
    },
    hots: {
      title: "Assertion & Reasoning — Density of Rational Numbers",
      text: "<strong>Assertion (A):</strong> Between any two distinct rational numbers, there exist infinitely many rational and irrational numbers.<br><strong>Reason (R):</strong> The set of real numbers satisfies the completeness and density property on the number line.<br><em>Choose:</em> (a) Both A and R are true and R is the correct explanation. (b) Both A and R are true, but R is not correct explanation. (c) A is true, R is false. (d) A is false, R is true.",
      ans: "<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> Density property ensures that for any a < b, the arithmetic mean (a+b)/2 provides an intermediate rational number, which can be repeated indefinitely. The real number continuum guarantees uncountably many numbers between any interval."
    }
  },
  4: {
    caseStudy: {
      title: "Architectural Space Planning & Identities",
      text: "An architect designs a modular pavilion with square base of side (x + y). Later, a storage corridor of width 2 units is attached so total dimensions become (x + y + 2) by (x + y - 2).<br>(a) Use standard algebraic identity to find the expanded expression for the area.<br>(b) If x + y = 10 meters, find the total floor area.<br>(c) Verify your answer using numerical substitution.",
      ans: "<strong>(a)</strong> Using identity (A + B)(A - B) = A² - B² where A = (x + y) and B = 2:<br>Area = (x + y)² - 2² = <strong>x² + 2xy + y² - 4</strong>.<br><strong>(b)</strong> If x + y = 10 m: Area = (10)² - 4 = 100 - 4 = <strong>96 m²</strong>.<br><strong>(c)</strong> Direct substitution: (10 + 2)(10 - 2) = 12 × 8 = <strong>96 m²</strong>. The results match perfectly."
    },
    hots: {
      title: "Assertion & Reasoning — Conditional Identity",
      text: "<strong>Assertion (A):</strong> If a + b + c = 0, then a³ + b³ + c³ = 3abc.<br><strong>Reason (R):</strong> a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca).<br><em>Choose:</em> (a) Both A and R are true and R is the correct explanation. (b) Both A and R are true, but R is not correct explanation. (c) A is true, R is false. (d) A is false, R is true.",
      ans: "<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> If (a + b + c) = 0, then the product (a + b + c)(a² + b² + c² - ab - bc - ca) vanishes to 0. Transposing -3abc yields a³ + b³ + c³ = 3abc."
    }
  },
  5: {
    caseStudy: {
      title: "Clockwork Mechanisms & Rotational Angles",
      text: "In an antique clock tower, the minute hand has length 14 cm and the hour hand has length 10.5 cm.<br>(a) Find the angle swept by the minute hand between 3:00 PM and 3:25 PM.<br>(b) What angle does the hour hand rotate through in 20 minutes?<br>(c) At 3:00 PM, what is the measure of the angle between the two hands?",
      ans: "<strong>(a)</strong> In 60 minutes, the minute hand covers 360°. In 25 minutes: θ = (360°/60) × 25 = 6° × 25 = <strong>150°</strong>.<br><strong>(b)</strong> The hour hand rotates 360° in 12 hours (720 minutes), which is 0.5° per minute. In 20 minutes: (0.5°) × 20 = <strong>10°</strong>.<br><strong>(c)</strong> At 3:00 PM, the hour hand points at 3 (90°) and the minute hand points at 12 (0°). The angle between them is <strong>90°</strong> (right angle)."
    },
    hots: {
      title: "Assertion & Reasoning — Oscillatory Periodicity",
      text: "<strong>Assertion (A):</strong> A pendulum bob that oscillates through an angle of 30° on either side of the vertical sweeps a total angular span of 60° during each swing.<br><strong>Reason (R):</strong> The total angular range is the sum of displacements from the central equilibrium position to both extreme positions.<br><em>Choose:</em> (a) Both A and R are true and R is the correct explanation. (b) Both A and R are true, but R is not correct explanation. (c) A is true, R is false. (d) A is false, R is true.",
      ans: "<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> From -30° to +30° the angular displacement is 30° + 30° = 60°, which matches the physical span from one amplitude to the other."
    }
  },
  6: {
    caseStudy: {
      title: "Agricultural Land Surveying (Heron's Formula)",
      text: "A farmer owns a triangular plot of land with sides a = 35 m, b = 53 m, and c = 66 m. The farmer wants to sow wheat which costs ₹12 per square meter for seeds and tilling.<br>(a) Calculate the semi-perimeter s of the triangular field.<br>(b) Calculate the total area using Heron's formula.<br>(c) Determine the total cost of cultivation.",
      ans: "<strong>(a)</strong> Semi-perimeter: s = (a + b + c)/2 = (35 + 53 + 66)/2 = 154/2 = <strong>77 m</strong>.<br><strong>(b)</strong> s - a = 77 - 35 = 42; s - b = 77 - 53 = 24; s - c = 77 - 66 = 11.<br>Area = √(77 × 42 × 24 × 11) = √(11 × 7 × 7 × 6 × 6 × 4 × 11) = 11 × 7 × 6 × 2 = <strong>924 m²</strong>.<br><strong>(c)</strong> Cost of cultivation = 924 × ₹12 = <strong>₹11,088</strong>."
    },
    hots: {
      title: "Assertion & Reasoning — Isoperimetric Comparison",
      text: "<strong>Assertion (A):</strong> Among all triangles with a given fixed perimeter, the equilateral triangle encloses the maximum area.<br><strong>Reason (R):</strong> In Heron's formula √[s(s-a)(s-b)(s-c)], the product (s-a)(s-b)(s-c) is maximized when the factors are equal (AM = GM inequality).<br><em>Choose:</em> (a) Both A and R are true and R is the correct explanation. (b) Both A and R are true, but R is not correct explanation. (c) A is true, R is false. (d) A is false, R is true.",
      ans: "<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> By the AM-GM inequality, the product of terms with constant sum is maximized when all terms are equal: s - a = s - b = s - c ⟹ a = b = c."
    }
  },
  7: {
    caseStudy: {
      title: "Quality Control in Electronics (Probability)",
      text: "A batch of 500 LED computer monitors was tested at a manufacturing plant. 465 passed all quality checks on the first attempt, 25 had minor display defects that could be repaired, and 10 were completely discarded.<br>(a) What is the probability that a randomly chosen monitor passes without defect?<br>(b) What is the probability that a monitor requires repair?<br>(c) Verify that the sum of probabilities of all elementary events equals 1.",
      ans: "<strong>(a)</strong> P(Pass) = 465 / 500 = <strong>93/100 = 0.93</strong>.<br><strong>(b)</strong> P(Repair) = 25 / 500 = <strong>1/20 = 0.05</strong>.<br><strong>(c)</strong> P(Discard) = 10 / 500 = 0.02. Sum = 0.93 + 0.05 + 0.02 = <strong>1.00</strong>. This verifies the fundamental probability law."
    },
    hots: {
      title: "Assertion & Reasoning — Complementary Events",
      text: "<strong>Assertion (A):</strong> If the probability of winning a chess game is 0.68, then the probability of not winning is 0.32.<br><strong>Reason (R):</strong> For any event E, P(E) + P(not E) = 1.<br><em>Choose:</em> (a) Both A and R are true and R is the correct explanation. (b) Both A and R are true, but R is not correct explanation. (c) A is true, R is false. (d) A is false, R is true.",
      ans: "<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> The complementary event of winning is 'not winning'. By rule P(not E) = 1 - P(E) = 1 - 0.68 = 0.32, which directly validates both statement and reason."
    }
  },
  8: {
    caseStudy: {
      title: "Solar Energy Deployment Trends (Sequences)",
      text: "A clean energy initiative installs 120 rooftop solar units in Month 1. Due to increased subsidies, they install 25 additional units each consecutive month (145 in Month 2, 170 in Month 3, and so on).<br>(a) Identify the type of sequence and state its first term a and common difference d.<br>(b) How many solar units will be installed in Month 12?<br>(c) Find the total number of solar units installed during the first year (12 months).",
      ans: "<strong>(a)</strong> It forms an <strong>Arithmetic Progression (AP)</strong> with first term <span class=\"math\">a = 120</span> and common difference <span class=\"math\">d = 25</span>.<br><strong>(b)</strong> Month 12: a₁₂ = a + (12 - 1)d = 120 + 11(25) = 120 + 275 = <strong>395 units</strong>.<br><strong>(c)</strong> Total units in year 1: S₁₂ = (12/2)[2a + (12 - 1)d] = 6[2(120) + 275] = 6[240 + 275] = 6 × 515 = <strong>3,090 solar units</strong>."
    },
    hots: {
      title: "Assertion & Reasoning — Linear Form of AP Terms",
      text: "<strong>Assertion (A):</strong> The n-th term of any Arithmetic Progression is a linear expression in n of the form an = pn + q.<br><strong>Reason (R):</strong> In an AP, an = a + (n - 1)d = dn + (a - d), where the coefficient of n is the common difference d.<br><em>Choose:</em> (a) Both A and R are true and R is the correct explanation. (b) Both A and R are true, but R is not correct explanation. (c) A is true, R is false. (d) A is false, R is true.",
      ans: "<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> Expanding an = a + (n-1)d yields dn + (a-d). Here d and (a-d) are constants, making an a linear polynomial in n."
    }
  },
  9: {
    caseStudy: {
      title: "Logical Deductions & Geometry Theorems",
      text: "Consider the geometric proposition: 'If two lines intersect, then the vertically opposite angles are equal.'<br>(a) Identify the hypothesis (P) and the conclusion (Q) in the proposition.<br>(b) Write the converse of the statement.<br>(c) Is the converse always true? Explain with a counterexample or diagrammatic explanation.",
      ans: "<strong>(a)</strong> <strong>Hypothesis (P):</strong> 'Two straight lines intersect.' <strong>Conclusion (Q):</strong> 'The vertically opposite angles are equal.'<br><strong>(b)</strong> <strong>Converse:</strong> 'If two angles formed by intersecting lines are equal, then they are vertically opposite angles.'<br><strong>(c)</strong> The converse is <strong>not necessarily true in general</strong> without specifying geometric orientation: two non-vertically opposite angles can also be equal (for example, alternate interior angles or adjacent supplementary angles each equal to 90°)."
    },
    hots: {
      title: "Assertion & Reasoning — Validity of Proofs by Counterexample",
      text: "<strong>Assertion (A):</strong> A single counterexample is sufficient to disprove a universally quantified mathematical conjecture.<br><strong>Reason (R):</strong> For a universal statement 'For all x, P(x)' to be true, P(x) must hold for every member of the domain without exception.<br><em>Choose:</em> (a) Both A and R are true and R is the correct explanation. (b) Both A and R are true, but R is not correct explanation. (c) A is true, R is false. (d) A is false, R is true.",
      ans: "<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> The negation of '∀x, P(x)' is '∃x such that ¬P(x)'. Finding even one instance where the conjecture fails proves the negation and invalidates the claim."
    }
  },
  10: {
    caseStudy: {
      title: "Environmental Science & Weighted Air Quality Index",
      text: "An environmental research station records the particulate matter (PM2.5) concentrations at four different monitoring points with weights based on population exposure:<br>Point 1: 45 µg/m³ (weight 3), Point 2: 60 µg/m³ (weight 2), Point 3: 80 µg/m³ (weight 4), Point 4: 110 µg/m³ (weight 1).<br>(a) Find the simple arithmetic mean of the four readings.<br>(b) Calculate the weighted mean concentration of PM2.5.<br>(c) Why is the weighted mean a more reliable representation than the simple mean?",
      ans: "<strong>(a)</strong> Simple Mean = (45 + 60 + 80 + 110) / 4 = 295 / 4 = <strong>73.75 µg/m³</strong>.<br><strong>(b)</strong> Weighted Mean = Σ(w · x) / Σw = [3(45) + 2(60) + 4(80) + 1(110)] / (3 + 2 + 4 + 1) = [135 + 120 + 320 + 110] / 10 = 685 / 10 = <strong>68.5 µg/m³</strong>.<br><strong>(c)</strong> The weighted mean gives greater importance to heavily populated zones (Points 1 & 3), giving a truer measure of actual public health exposure."
    },
    hots: {
      title: "Assertion & Reasoning — Outlier Impact on Central Tendencies",
      text: "<strong>Assertion (A):</strong> The median is a more robust measure of central tendency than the mean when a dataset contains extreme outliers.<br><strong>Reason (R):</strong> The mean utilizes the numerical values of all observations, whereas the median depends only on the positional rank of observations.<br><em>Choose:</em> (a) Both A and R are true and R is the correct explanation. (b) Both A and R are true, but R is not correct explanation. (c) A is true, R is false. (d) A is false, R is true.",
      ans: "<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> A single extreme value can shift the mean drastically, whereas the middle rank (median) remains stable. Reason (R) correctly explains this structural robustness."
    }
  },
  11: {
    caseStudy: {
      title: "Computer Science & Cryptography (Euclidean Algorithm)",
      text: "A cybersecurity protocol requires computing the greatest common divisor of two large encryption keys, 1147 and 899, to establish a coprime shared key.<br>(a) Apply Euclid's Division Algorithm to find gcd(1147, 899).<br>(b) State the number of division steps taken to reach the remainder zero.<br>(c) Express the final gcd as a linear combination of 1147 and 899 (Bézout's identity).",
      ans: "<strong>(a)</strong> Step 1: 1147 = 899 × 1 + 248<br>Step 2: 899 = 248 × 3 + 155<br>Step 3: 248 = 155 × 1 + 93<br>Step 4: 155 = 93 × 1 + 62<br>Step 5: 93 = 62 × 1 + 31<br>Step 6: 62 = 31 × 2 + 0.<br>The last non-zero remainder is <strong>31</strong>. Thus, <strong>gcd(1147, 899) = 31</strong>.<br><strong>(b)</strong> It took <strong>6 division steps</strong>.<br><strong>(c)</strong> Back substitution: 31 = 93 - 62 = 93 - (155 - 93) = 2(93) - 155 = 2(248 - 155) - 155 = 2(248) - 3(155) = 2(248) - 3(899 - 3×248) = 11(248) - 3(899) = 11(1147 - 899) - 3(899) = <strong>11(1147) - 14(899) = 31</strong>."
    },
    hots: {
      title: "Assertion & Reasoning — Algorithmic Termination",
      text: "<strong>Assertion (A):</strong> The Euclidean algorithm for finding the GCD of any two positive integers always terminates in a finite number of steps.<br><strong>Reason (R):</strong> The sequence of remainders r₁, r₂, r₃... forms a strictly decreasing sequence of non-negative integers bounded below by zero.<br><em>Choose:</em> (a) Both A and R are true and R is the correct explanation. (b) Both A and R are true, but R is not correct explanation. (c) A is true, R is false. (d) A is false, R is true.",
      ans: "<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> Since b > r₁ > r₂ > ... ≥ 0, each remainder is strictly smaller than the preceding one. Any strictly decreasing sequence of non-negative integers must reach zero in at most b steps."
    }
  },
  12: {
    caseStudy: {
      title: "Civil Engineering & Structural Midpoints (Varignon's Theorem)",
      text: "Four structural columns A, B, C, D form an arbitrary non-planar quadrilateral ABCD on a construction site. Surveyors mark the midpoints of the four sides: P on AB, Q on BC, R on CD, and S on DA.<br>(a) State Varignon's Theorem concerning the quadrilateral PQRS formed by joining the midpoints.<br>(b) Prove that PQRS is always a parallelogram using the Midpoint Theorem on ΔABC and ΔADC.<br>(c) If the diagonals AC = 18 m and BD = 24 m intersect at right angles, what special shape does PQRS become?",
      ans: "<strong>(a)</strong> <strong>Varignon's Theorem:</strong> The figure formed by connecting the midpoints of the sides of any quadrilateral is always a <strong>parallelogram</strong>.<br><strong>(b)</strong> In ΔABC, P and Q are midpoints of AB and BC. By the Midpoint Theorem: PQ || AC and PQ = ½ AC. In ΔADC, S and R are midpoints of AD and CD. By Midpoint Theorem: SR || AC and SR = ½ AC. Hence, PQ || SR and PQ = SR. Since one pair of opposite sides is equal and parallel, <strong>PQRS is a parallelogram</strong>.<br><strong>(c)</strong> When diagonals AC ⊥ BD, the adjacent sides PQ (parallel to AC) and QR (parallel to BD) are perpendicular. A parallelogram with a right angle is a <strong>rectangle</strong>."
    },
    hots: {
      title: "Assertion & Reasoning — Diagonals of Parallelograms",
      text: "<strong>Assertion (A):</strong> The diagonals of a rectangle are equal in length and bisect each other.<br><strong>Reason (R):</strong> A rectangle is a parallelogram with all four interior angles equal to 90°.<br><em>Choose:</em> (a) Both A and R are true and R is the correct explanation. (b) Both A and R are true, but R is not correct explanation. (c) A is true, R is false. (d) A is false, R is true.",
      ans: "<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> Since it is a parallelogram, its diagonals bisect each other. Considering right triangles with common base and equal heights, hypotenuses (the diagonals) are congruent by SAS."
    }
  },
  13: {
    caseStudy: {
      title: "Student Startup Economics (Break-Even Line)",
      text: "A student startup manufactures recycled notebooks. Their fixed monthly operational cost is ₹3,000, and variable production cost is ₹25 per notebook. They sell each notebook for ₹65.<br>(a) Write the total cost equation C(x) and total revenue equation R(x) for x notebooks.<br>(b) Set up the linear equation in two variables for the break-even point where Revenue = Cost.<br>(c) How many notebooks must they sell to break even?",
      ans: "<strong>(a)</strong> Total Cost: <span class=\"math\">C(x) = 25x + 3000</span>. Total Revenue: <span class=\"math\">R(x) = 65x</span>.<br><strong>(b)</strong> Break-even occurs when R(x) = C(x) ⟹ 65x = 25x + 3000 ⟹ <strong>40x - 3000 = 0</strong> (or 40x - y = 0 where y is cost/revenue).<br><strong>(c)</strong> Solving: 40x = 3000 ⟹ x = 3000 / 40 = <strong>75 notebooks</strong>. They must sell 75 notebooks to break even."
    },
    hots: {
      title: "Assertion & Reasoning — Graphical Solution of 2-Variable Equations",
      text: "<strong>Assertion (A):</strong> The graph of every linear equation ax + by + c = 0 (where a and b are not both zero) is a straight line.<br><strong>Reason (R):</strong> Every point (x, y) whose coordinates satisfy the equation lies on this line, and every point on the line satisfies the equation.<br><em>Choose:</em> (a) Both A and R are true and R is the correct explanation. (b) Both A and R are true, but R is not correct explanation. (c) A is true, R is false. (d) A is false, R is true.",
      ans: "<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> A linear algebraic relation between two variables defines a 1-dimensional manifold with constant slope, corresponding to Euclid's geometric definition of a straight line."
    }
  },
  14: {
    caseStudy: {
      title: "Sustainable Packaging Optimization (Surface Area & Volume)",
      text: "A juice manufacturer needs to pack 1 litre (1,000 cm³) of fruit juice. They are comparing two options: Option A is a cuboidal tetra-pack of base 10 cm × 5 cm and height 20 cm. Option B is a cylindrical tin can of radius r = 5 cm and height h = 12.73 cm.<br>(a) Verify that both containers have approximately 1,000 cm³ volume.<br>(b) Calculate the total surface area (packaging material required) for Option A.<br>(c) Calculate the total surface area for Option B and determine which packaging is more eco-friendly (uses less material).",
      ans: "<strong>(a)</strong> Volume A = 10 × 5 × 20 = <strong>1,000 cm³</strong>. Volume B = πr²h = (22/7) × 25 × 12.73 ≈ <strong>1,000 cm³</strong>.<br><strong>(b)</strong> Surface Area A = 2(lb + bh + hl) = 2(10×5 + 5×20 + 20×10) = 2(50 + 100 + 200) = 2(350) = <strong>700 cm²</strong>.<br><strong>(c)</strong> Surface Area B = 2πr(r + h) = 2 × (22/7) × 5 × (5 + 12.73) = (220/7) × 17.73 ≈ <strong>557.2 cm²</strong>.<br><strong>Conclusion:</strong> The cylindrical can requires <strong>142.8 cm² less material</strong> (≈ 20.4% less), making Option B significantly more eco-friendly and resource-efficient."
    },
    hots: {
      title: "Assertion & Reasoning — Scaling Law of 3D Solids",
      text: "<strong>Assertion (A):</strong> When all linear dimensions of a cube are tripled, its surface area increases 9-fold, while its volume increases 27-fold.<br><strong>Reason (R):</strong> Surface area scales proportionally with the square of the linear scale factor (k²), while volume scales with the cube of the linear factor (k³).<br><em>Choose:</em> (a) Both A and R are true and R is the correct explanation. (b) Both A and R are true, but R is not correct explanation. (c) A is true, R is false. (d) A is false, R is true.",
      ans: "<strong>Correct Choice: (a) Both A and R are true and R is the correct explanation.</strong><br><em>Explanation:</em> For scaling factor k = 3: Area' = 6(3a)² = 9(6a²) = 9 × Area. Volume' = (3a)³ = 27a³ = 27 × Volume. The geometric square-cube scaling law perfectly explains this."
    }
  }
};

console.log('=== Adding CBQs to all 14 chapters ===');

for (let i = 1; i <= 14; i++) {
  const filePath = path.join(chDir, `ch${i}.html`);
  let content = fs.readFileSync(filePath, 'utf8');

  // Strip old cbq-section if already present
  content = content.replace(/<div class="cbq-section">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i, '');

  const data = cbqData[i];
  if (!data) continue;

  const cbqHtml = `
  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency-Based Questions (CBQ) &amp; HOTS — Chapter ${i}</span><span class="cbq-badge">CBSE / NEP 2020</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #4f46e5;">
        <div class="cbq-type" style="color:#4f46e5;">📝 Case Study &amp; Real-Life Modeling</div>
        <div class="cbq-question"><strong>${data.caseStudy.title}:</strong> ${data.caseStudy.text}</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">${data.caseStudy.ans}</div>
      </div>
      <div class="cbq-card" style="border-left:4px solid #f59e0b;">
        <div class="cbq-type" style="color:#f59e0b;">🧠 HOTS &amp; Assertion-Reasoning</div>
        <div class="cbq-question">${data.hots.text}</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer">${data.hots.ans}</div>
      </div>
    </div>
  </div>`;

  // Insert before ch-nav-btns
  if (content.includes('<div class="ch-nav-btns">')) {
    content = content.replace('<div class="ch-nav-btns">', `${cbqHtml}\n\n  <div class="ch-nav-btns">`);
  } else {
    content = content.replace('</section>', `${cbqHtml}\n</section>`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Added 2 CBQs to Ch ${i} (${filePath})`);
}

console.log('All 14 chapters now have rich Competency-Based Questions!');
