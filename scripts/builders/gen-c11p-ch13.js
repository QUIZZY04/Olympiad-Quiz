// scripts/builders/gen-c11p-ch13.js
// Complete, verbatim NCERT generator for Class 11 Physics Chapter 13: Oscillations (All 18 Questions)
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', '..', 'chapters-c11p');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function createQCard(id, num, exercise, qText, answerHtml, marks, rubricRows) {
  const rubricHtml = rubricRows.map(r => `
          <div class="marking-row"><span class="marking-key">${r[0]}</span><span class="marking-marks">${r[1]}</span></div>`).join('');

  return `
  <!-- ${id} (${exercise}) -->
  <div class="q-card" id="${id}">
    <div class="q-head" onclick="toggleQ('${id}')">
      <div class="q-num">${num}</div>
      <div class="q-text">
        <span style="display:inline-block; font-size:0.75rem; font-weight:800; text-transform:uppercase; background:#f5f3ff; color:#7c3aed; padding:2px 8px; border-radius:4px; margin-bottom:4px;">${exercise}</span><br>
        ${qText}
      </div>
      <div class="q-marks">[${marks}]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Step-by-Step Solution</div>
        <div class="answer-text">
          ${answerHtml}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme Rubric (Session 2026–27)</div>
          ${rubricHtml}
        </div>
      </div>
    </div>
  </div>`;
}

const questions = [];

// ============================================================================
// CHAPTER 13: OSCILLATIONS (Questions 13.1 to 13.18)
// ============================================================================

// Question 13.1
questions.push(createQCard(
  'c11p-ch13-q1', 'Question 13.1', 'NCERT Exercise',
  'Which of the following examples represent periodic motion?<br>(a) A swimmer completing one (return) trip from one bank of a river to the other and back.<br>(b) A freely suspended bar magnet displaced from its N-S direction and released.<br>(c) A hydrogen molecule rotating about its centre of mass.<br>(d) An arrow released from a bow.',
  `<div class="step">
    <b>Definition:</b> A motion is defined as <b>periodic</b> if it repeats itself identically after a regular, fixed interval of time (called the time period $T$).<br><br>
    <b>(a) A swimmer completing one return trip from one bank to the other and back:</b><br>
    • <b>Non-periodic motion.</b> Although the swimmer may repeat the crossings, the time taken for successive round trips will vary due to fatigue, changing currents, and variable swimming velocity. It does not repeat at regular, constant time intervals.<br><br>
    <b>(b) A freely suspended bar magnet displaced from its N-S direction and released:</b><br>
    • <b>Periodic (and oscillatory) motion.</b> The magnetic torque exerted by Earth’s horizontal magnetic field provides a linear restoring torque ($\\tau = -M B_H \\sin\\theta \\approx -M B_H \\theta$ for small $\\theta$), causing the magnet to oscillate back and forth periodically with time period $T = 2\\pi \\sqrt{\\frac{I}{M B_H}}$.<br><br>
    <b>(c) A hydrogen molecule rotating about its centre of mass:</b><br>
    • <b>Periodic motion.</b> At a given thermal equilibrium state, the rotation about the centre of mass repeats its angular orientation identically at constant rotational frequency (constant period $T = 2\\pi/\\omega$).<br><br>
    <b>(d) An arrow released from a bow:</b><br>
    • <b>Non-periodic motion.</b> The arrow leaves the bow, travels along a parabolic projectile trajectory, and hits a target or lands on the ground. It never repeats its path.<br><br>
    $$\\mathbf{\\text{Result: Only (b) and (c) represent periodic motion; (a) and (d) are non-periodic.}}$$
  </div>`,
  '2 Marks',
  [
    ['Classification and explanation for (a) and (b)', '1 Mark'],
    ['Classification and explanation for (c) and (d)', '1 Mark']
  ]
));

// Question 13.2
questions.push(createQCard(
  'c11p-ch13-q2', 'Question 13.2', 'NCERT Exercise',
  'Which of the following examples represent (nearly) simple harmonic motion and which represent periodic but not simple harmonic motion?<br>(a) The rotation of earth about its axis.<br>(b) Motion of an oscillating mercury column in a U-tube.<br>(c) Motion of a ball bearing inside a smooth curved bowl, when released from a point slightly above the lowermost point.<br>(d) General vibrations of a polyatomic molecule about its equilibrium position.',
  `<div class="step">
    <b>Criteria for Simple Harmonic Motion (SHM):</b><br>
    A periodic motion is SHM if and only if the restoring force (or acceleration) is directly proportional to the displacement from the equilibrium (mean) position and is always directed towards the mean position ($F = -kx$ or $a = -\\omega^2 x$).<br><br>
    <b>(a) The rotation of earth about its axis:</b><br>
    • <b>Periodic, but NOT simple harmonic.</b> It repeats its orientation every 24 hours, but there is no restoring force towards a mean position or to-and-fro oscillation about an equilibrium.<br><br>
    <b>(b) Motion of an oscillating mercury column in a U-tube:</b><br>
    • <b>Nearly Simple Harmonic Motion (SHM).</b> When the liquid level in one arm is depressed by $y$, the restoring hydrostatic pressure difference is $\\Delta P = 2y \\rho g$, creating a restoring force $F = -2 A \\rho g y = -k y$. Since $F \\propto -y$, the motion is simple harmonic.<br><br>
    <b>(c) Motion of a ball bearing inside a smooth curved bowl (small displacement):</b><br>
    • <b>Nearly Simple Harmonic Motion (SHM).</b> For small angular displacements $\\theta$ inside a spherical bowl of radius $R$, the restoring tangential force is $F = -mg \\sin\\theta \\approx -mg \\left(\\frac{x}{R}\\right) = -\\left(\\frac{mg}{R}\\right) x$. Because $F \\propto -x$, the ball executes SHM with $T = 2\\pi \\sqrt{R/g}$.<br><br>
    <b>(d) General vibrations of a polyatomic molecule about its equilibrium position:</b><br>
    • <b>Periodic, but NOT a single simple harmonic motion.</b> A polyatomic molecule possesses multiple vibrational degrees of freedom with different coupled normal modes and frequencies. Its overall motion is an anharmonic superposition of multiple frequencies rather than a single pure SHM.<br><br>
    $$\\mathbf{\\text{Result: (b) and (c) are SHM; (a) and (d) are periodic but not SHM.}}$$
  </div>`,
  '2 Marks',
  [
    ['(a) Periodic but not SHM & (b) SHM with restoring force $F = -2A\\rho gy$', '1 Mark'],
    ['(c) SHM for small angles ($F \\propto -x$) & (d) Superposition / Periodic but not SHM', '1 Mark']
  ]
));

// Question 13.3
questions.push(createQCard(
  'c11p-ch13-q3', 'Question 13.3', 'NCERT Exercise',
  'Figure depicts four $x\\text{-}t$ plots for linear motion of a particle. Which of the plots represent periodic motion? What is the period of motion (in case of periodic motion)?<br>(i) A graph showing unidirectional motion extending to infinity.<br>(ii) A curve repeating a sinusoidal pattern with time period $2\\text{ s}$.<br>(iii) A graph with a single isolated impulse peak.<br>(iv) A sawtooth repeating profile with period $T = 2\\text{ s}$.',
  `<div class="step">
    <b>Analysis of $x-t$ Plots:</b><br><br>
    <b>Plot (a) / (i):</b><br>
    • <b>Non-periodic motion.</b> The displacement $x$ increases continuously with time and does not repeat. Hence, it has no period.<br><br>
    <b>Plot (b) / (ii):</b><br>
    • <b>Periodic motion.</b> The displacement repeats its waveform identically at regular intervals.<br>
    • From the graph, the waveform pattern repeats every $2\\text{ seconds}$.<br>
    • Therefore, **Time Period $T = 2\\text{ s}$**.<br><br>
    <b>Plot (c) / (iii):</b><br>
    • <b>Non-periodic motion.</b> The curve displays a single isolated pulse/peak from $t = 0$ to $t = 1\\text{ s}$ and stays at $x = 0$ thereafter. A solitary pulse does not repeat.<br><br>
    <b>Plot (d) / (iv):</b><br>
    • <b>Periodic motion.</b> The sawtooth wave profile repeats cyclically every $2\\text{ seconds}$.<br>
    • Therefore, **Time Period $T = 2\\text{ s}$**.<br><br>
    $$\\mathbf{\\text{Conclusion: Plots (b) and (d) are periodic with period } T = 2\\text{ s};\\text{ plots (a) and (c) are non-periodic.}}$$
  </div>`,
  '2 Marks',
  [
    ['Identification of periodic vs non-periodic nature for all 4 plots', '1 Mark'],
    ['Correct time periods $T = 2\\text{ s}$ identified for plots (b) and (d)', '1 Mark']
  ]
));

// Question 13.4
questions.push(createQCard(
  'c11p-ch13-q4', 'Question 13.4', 'NCERT Exercise',
  'Which of the following functions of time represent (a) simple harmonic, (b) periodic but not simple harmonic, and (c) non-periodic motion? Give period for each case of periodic motion ($\\omega$ is any positive constant):<br>(i) $\\sin\\omega t - \\cos\\omega t$<br>(ii) $\\sin^3\\omega t$<br>(iii) $3\\cos(\\pi/4 - 2\\omega t)$<br>(iv) $\\cos\\omega t + \\cos 3\\omega t + \\cos 5\\omega t$<br>(v) $\\exp(-\\omega^2 t^2)$<br>(vi) $1 + \\omega t + \\omega^2 t^2$',
  `<div class="step">
    <b>(i) $y(t) = \\sin\\omega t - \\cos\\omega t$:</b><br>
    Rewrite as a single harmonic function: $y(t) = \\sqrt{2} \\left(\\frac{1}{\\sqrt{2}}\\sin\\omega t - \\frac{1}{\\sqrt{2}}\\cos\\omega t\\right) = \\sqrt{2} \\sin\\left(\\omega t - \\frac{\\pi}{4}\\right)$.<br>
    This satisfies $d^2y/dt^2 = -\\omega^2 y$.<br>
    • **Simple Harmonic Motion (SHM)** with **Time Period $T = \\frac{2\\pi}{\\omega}$**.<br><br>
    <b>(ii) $y(t) = \\sin^3\\omega t$:</b><br>
    Using the trigonometric identity $\\sin 3\\theta = 3\\sin\\theta - 4\\sin^3\\theta \\implies \\sin^3\\omega t = \\frac{1}{4}(3\\sin\\omega t - \\sin 3\\omega t)$.<br>
    This is a superposition of two SHMs with frequencies $\\omega$ and $3\\omega$. The overall acceleration cannot be written as $-\\Omega^2 y$.<br>
    • **Periodic, but NOT SHM**.<br>
    • Fundamental frequency is $\\omega$, so **Time Period $T = \\frac{2\\pi}{\\omega}$**.<br><br>
    <b>(iii) $y(t) = 3\\cos\\left(\\frac{\\pi}{4} - 2\\omega t\\right) = 3\\cos\\left(2\\omega t - \\frac{\\pi}{4}\\right)$:</b><br>
    This is a pure cosine function with angular frequency $\\omega' = 2\\omega$.<br>
    • **Simple Harmonic Motion (SHM)** with **Time Period $T = \\frac{2\\pi}{2\\omega} = \\frac{\\pi}{\\omega}$**.<br><br>
    <b>(iv) $y(t) = \\cos\\omega t + \\cos 3\\omega t + \\cos 5\\omega t$:</b><br>
    This is a linear combination of three harmonic terms with fundamental frequency $\\omega$.<br>
    • **Periodic, but NOT SHM**.<br>
    • **Time Period $T = \\frac{2\\pi}{\\omega}$**.<br><br>
    <b>(v) $y(t) = \\exp(-\\omega^2 t^2)$:</b><br>
    An exponential decay function that decreases monotonically towards $0$ as $t \\to \\infty$ without repeating.<br>
    • **Non-periodic motion** (No time period).<br><br>
    <b>(vi) $y(t) = 1 + \\omega t + \\omega^2 t^2$:</b><br>
    A polynomial function in $t$ that increases monotonically towards $\\infty$ without repeating.<br>
    • **Non-periodic motion** (No time period).
  </div>`,
  '3 Marks',
  [
    ['(i) SHM with $T = 2\\pi/\\omega$ & (ii) Periodic (not SHM) with $T = 2\\pi/\\omega$', '1 Mark'],
    ['(iii) SHM with $T = \\pi/\\omega$ & (iv) Periodic (not SHM) with $T = 2\\pi/\\omega$', '1 Mark'],
    ['(v) Non-periodic & (vi) Non-periodic with clear justifications', '1 Mark']
  ]
));

// Question 13.5
questions.push(createQCard(
  'c11p-ch13-q5', 'Question 13.5', 'NCERT Exercise',
  'A particle is in linear simple harmonic motion between two points, A and B, $10\\text{ cm}$ apart. Take the direction from A to B as the positive direction and give the signs of velocity, acceleration and force on the particle when it is:<br>(a) at the end A,<br>(b) at the end B,<br>(c) at the mid-point of AB going towards A,<br>(d) at $2\\text{ cm}$ away from B going towards A,<br>(e) at $3\\text{ cm}$ away from A going towards B,<br>(f) at $4\\text{ cm}$ away from B going towards A.',
  `<div class="step">
    <b>Coordinate Setup:</b><br>
    • Amplitude $A = 5\\text{ cm}$, total distance between extremes $AB = 2A = 10\\text{ cm}$.<br>
    • Mid-point O is the mean position ($x = 0$).<br>
    • Extreme point A is at $x = -5\\text{ cm}$, extreme point B is at $x = +5\\text{ cm}$.<br>
    • Direction A to B is positive ($+x$ direction).<br>
    • Governing laws: $F = -kx$ and $a = -\\omega^2 x$. Force and acceleration always have the **same sign** (opposite to displacement $x$), while velocity sign matches direction of travel.<br><br>
    <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.85rem;">
      <thead>
        <tr style="background:#f1f5f9; text-align:left; border-bottom:2px solid #cbd5e1;">
          <th style="padding:8px;">Situation</th>
          <th style="padding:8px;">Position ($x$)</th>
          <th style="padding:8px;">Velocity ($v$)</th>
          <th style="padding:8px;">Acceleration ($a$)</th>
          <th style="padding:8px;">Force ($F$)</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px;"><b>(a) At extreme A</b></td>
          <td style="padding:8px;">$x = -5\\text{ cm}$</td>
          <td style="padding:8px;">$0$</td>
          <td style="padding:8px; color:#16a34a; font-weight:bold;">Positive ($+$)</td>
          <td style="padding:8px; color:#16a34a; font-weight:bold;">Positive ($+$)</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px;"><b>(b) At extreme B</b></td>
          <td style="padding:8px;">$x = +5\\text{ cm}$</td>
          <td style="padding:8px;">$0$</td>
          <td style="padding:8px; color:#dc2626; font-weight:bold;">Negative ($-$)</td>
          <td style="padding:8px; color:#dc2626; font-weight:bold;">Negative ($-$)</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px;"><b>(c) Mid-point O going to A</b></td>
          <td style="padding:8px;">$x = 0$</td>
          <td style="padding:8px; color:#dc2626; font-weight:bold;">Negative ($-$)</td>
          <td style="padding:8px;">$0$</td>
          <td style="padding:8px;">$0$</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px;"><b>(d) $2\\text{ cm}$ from B towards A</b></td>
          <td style="padding:8px;">$x = +3\\text{ cm}$</td>
          <td style="padding:8px; color:#dc2626; font-weight:bold;">Negative ($-$)</td>
          <td style="padding:8px; color:#dc2626; font-weight:bold;">Negative ($-$)</td>
          <td style="padding:8px; color:#dc2626; font-weight:bold;">Negative ($-$)</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px;"><b>(e) $3\\text{ cm}$ from A towards B</b></td>
          <td style="padding:8px;">$x = -2\\text{ cm}$</td>
          <td style="padding:8px; color:#16a34a; font-weight:bold;">Positive ($+$)</td>
          <td style="padding:8px; color:#16a34a; font-weight:bold;">Positive ($+$)</td>
          <td style="padding:8px; color:#16a34a; font-weight:bold;">Positive ($+$)</td>
        </tr>
        <tr>
          <td style="padding:8px;"><b>(f) $4\\text{ cm}$ from B towards A</b></td>
          <td style="padding:8px;">$x = +1\\text{ cm}$</td>
          <td style="padding:8px; color:#dc2626; font-weight:bold;">Negative ($-$)</td>
          <td style="padding:8px; color:#dc2626; font-weight:bold;">Negative ($-$)</td>
          <td style="padding:8px; color:#dc2626; font-weight:bold;">Negative ($-$)</td>
        </tr>
      </tbody>
    </table>
  </div>`,
  '3 Marks',
  [
    ['Correct signs for (a) and (b) at turning points', '1 Mark'],
    ['Correct signs for (c) at mean position', '0.5 Mark'],
    ['Correct signs for (d), (e), and (f) using $F = -kx$ and motion direction', '1.5 Marks']
  ]
));

// Question 13.6
questions.push(createQCard(
  'c11p-ch13-q6', 'Question 13.6', 'NCERT Exercise',
  'The motion of a particle executing simple harmonic motion is described by the displacement function, $x(t) = A \\cos(\\omega t + \\phi)$. If the initial ($t = 0$) position of the particle is $1\\text{ cm}$ and its initial velocity is $\\omega\\text{ cm s}^{-1}$, what are its amplitude and initial phase angle? The angular frequency of the particle is $\\pi\\text{ s}^{-1}$. If instead of the cosine function, we choose the sine function to describe the SHM: $x = B \\sin(\\omega t + \\alpha)$, what are the amplitude and initial phase of the particle with the above initial conditions?',
  `<div class="step">
    Given Data:<br>
    • At $t = 0$: $x(0) = 1\\text{ cm}$, $v(0) = \\omega\\text{ cm s}^{-1}$, $\\omega = \\pi\\text{ s}^{-1}$.<br><br>
    <b>Part 1: Using $x(t) = A \\cos(\\omega t + \\phi)$:</b><br>
    • Velocity $v(t) = \\frac{dx}{dt} = -A\\omega \\sin(\\omega t + \\phi)$.<br>
    • At $t = 0$:<br>
    $$1 = A \\cos\\phi \\quad \\text{--- (Eq. 1)}$$<br>
    $$\\omega = -A\\omega \\sin\\phi \\implies -1 = A \\sin\\phi \\quad \\text{--- (Eq. 2)}$$<br>
    • Squaring and adding Eq. 1 and Eq. 2:<br>
    $$A^2 (\\cos^2\\phi + \\sin^2\\phi) = (1)^2 + (-1)^2 = 1 + 1 = 2 \\implies \\mathbf{A = \\sqrt{2}\\text{ cm} \\approx 1.414\\text{ cm}}$$<br>
    • Dividing Eq. 2 by Eq. 1:<br>
    $$\\tan\\phi = \\frac{-1}{1} = -1$$<br>
    Since $\\cos\\phi > 0$ and $\\sin\\phi < 0$, $\\phi$ lies in the 4th quadrant:<br>
    $$\\mathbf{\\phi = -\\frac{\\pi}{4}\\text{ rad} \\quad \\left(\\text{or } \\frac{7\\pi}{4}\\text{ rad}\\right)}$$<br><br>
    <b>Part 2: Using $x(t) = B \\sin(\\omega t + \\alpha)$:</b><br>
    • Velocity $v(t) = B\\omega \\cos(\\omega t + \\alpha)$.<br>
    • At $t = 0$:<br>
    $$1 = B \\sin\\alpha \\quad \\text{--- (Eq. 3)}$$<br>
    $$\\omega = B\\omega \\cos\\alpha \\implies 1 = B \\cos\\alpha \\quad \\text{--- (Eq. 4)}$$<br>
    • Squaring and adding Eq. 3 and Eq. 4:<br>
    $$B^2 = (1)^2 + (1)^2 = 2 \\implies \\mathbf{B = \\sqrt{2}\\text{ cm}}$$<br>
    • Dividing Eq. 3 by Eq. 4:<br>
    $$\\tan\\alpha = \\frac{1}{1} = 1$$<br>
    Since both $\\sin\\alpha > 0$ and $\\cos\\alpha > 0$, $\\alpha$ lies in the 1st quadrant:<br>
    $$\\mathbf{\\alpha = \\frac{\\pi}{4}\\text{ rad}}$$<br><br>
    $$\\mathbf{\\text{Results: Cosine: } A = \\sqrt{2}\\text{ cm},\\; \\phi = -\\frac{\\pi}{4}\\text{ rad};\\quad \\text{Sine: } B = \\sqrt{2}\\text{ cm},\\; \\alpha = \\frac{\\pi}{4}\\text{ rad.}}$$
  </div>`,
  '4 Marks',
  [
    ['Applying boundary conditions to cosine form & calculating $A = \\sqrt{2}\\text{ cm}$', '1 Mark'],
    ['Evaluating initial phase $\\phi = -\\pi/4$ (4th quadrant analysis)', '1 Mark'],
    ['Applying boundary conditions to sine form & calculating $B = \\sqrt{2}\\text{ cm}$', '1 Mark'],
    ['Evaluating initial phase $\\alpha = +\\pi/4$ (1st quadrant analysis)', '1 Mark']
  ]
));

// Question 13.7
questions.push(createQCard(
  'c11p-ch13-q7', 'Question 13.7', 'NCERT Exercise',
  'A spring having with a spring constant $1200\\text{ N m}^{-1}$ is mounted horizontally on a table. A mass of $3\\text{ kg}$ is attached to the free end of the spring, pulled sideways to a distance of $2.0\\text{ cm}$ and released. Determine (i) the frequency of oscillation, (ii) the maximum acceleration of the mass, and (iii) the maximum speed of the mass.',
  `<div class="step">
    Given Data:<br>
    • Spring constant $k = 1200\\text{ N m}^{-1}$<br>
    • Mass $m = 3\\text{ kg}$<br>
    • Amplitude $A = 2.0\\text{ cm} = 0.02\\text{ m}$<br><br>
    <b>(i) Angular Frequency ($\\omega$) and Frequency ($\\nu$):</b><br>
    $$\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{1200\\text{ N m}^{-1}}{3\\text{ kg}}} = \\sqrt{400} = \\mathbf{20\\text{ rad s}^{-1}}$$<br>
    $$\\nu = \\frac{\\omega}{2\\pi} = \\frac{20}{2 \\times 3.1416} = \\frac{10}{3.1416} = \\mathbf{3.18\\text{ s}^{-1} = 3.18\\text{ Hz}}$$<br><br>
    <b>(ii) Maximum Acceleration ($a_{\\max}$):</b><br>
    $$a_{\\max} = \\omega^2 A = (20\\text{ rad s}^{-1})^2 \\times (0.02\\text{ m}) = 400 \\times 0.02 = \\mathbf{8.0\\text{ m s}^{-2}}$$<br>
    <i>(Occurs at the extreme positions $x = \\pm A$).</i><br><br>
    <b>(iii) Maximum Speed ($v_{\\max}$):</b><br>
    $$v_{\\max} = \\omega A = (20\\text{ rad s}^{-1}) \\times (0.02\\text{ m}) = \\mathbf{0.40\\text{ m s}^{-1}}$$<br>
    <i>(Occurs at the mean position $x = 0$).</i><br><br>
    $$\\mathbf{\\text{Summary: } (i)\\; \\nu = 3.18\\text{ Hz},\\; (ii)\\; a_{\\max} = 8.0\\text{ m s}^{-2},\\; (iii)\\; v_{\\max} = 0.40\\text{ m s}^{-1}.}}$$
  </div>`,
  '3 Marks',
  [
    ['Evaluating $\\omega = 20\\text{ rad/s}$ and frequency $\\nu = 3.18\\text{ Hz}$', '1 Mark'],
    ['Evaluating maximum acceleration $a_{\\max} = \\omega^2 A = 8.0\\text{ m s}^{-2}$', '1 Mark'],
    ['Evaluating maximum speed $v_{\\max} = \\omega A = 0.40\\text{ m s}^{-1}$', '1 Mark']
  ]
));

// Question 13.8
questions.push(createQCard(
  'c11p-ch13-q8', 'Question 13.8', 'NCERT Exercise',
  'In Exercise 13.7, let us take the position of mass when the spring is unstreched as $x = 0$, and the direction from left to right as the positive direction of $x$-axis. Give $x$ as a function of time $t$ for the oscillating mass if at the moment we start the stopwatch ($t = 0$), the mass is at:<br>(a) at the maximum stretched position $x = +2.0\\text{ cm}$,<br>(b) at the maximum compressed position $x = -2.0\\text{ cm}$,<br>(c) at the mean position $x = 0$ moving towards right.',
  `<div class="step">
    From Exercise 13.7:<br>
    • Amplitude $A = 2.0\\text{ cm}$<br>
    • Angular frequency $\\omega = 20\\text{ rad s}^{-1}$<br>
    • General SHM equation: $x(t) = A \\cos(\\omega t + \\phi) = 2.0 \\cos(20t + \\phi)\\text{ cm}$<br><br>
    <b>(a) Released at $t = 0$ from maximum stretch $x = +2.0\\text{ cm}$:</b><br>
    At $t = 0$: $2.0 = 2.0 \\cos\\phi \\implies \\cos\\phi = 1 \\implies \\phi = 0$.<br>
    $$x(t) = \\mathbf{2.0 \\cos(20t)\\text{ cm}}$$<br><br>
    <b>(b) Released at $t = 0$ from maximum compression $x = -2.0\\text{ cm}$:</b><br>
    At $t = 0$: $-2.0 = 2.0 \\cos\\phi \\implies \\cos\\phi = -1 \\implies \\phi = \\pi$.<br>
    $$x(t) = 2.0 \\cos(20t + \\pi) = \\mathbf{-2.0 \\cos(20t)\\text{ cm}}$$<br><br>
    <b>(c) At $t = 0$, at mean position $x = 0$ moving towards right (positive velocity):</b><br>
    • Position at $t = 0$: $0 = 2.0 \\cos\\phi \\implies \\phi = \\pm \\frac{\\pi}{2}$.<br>
    • Velocity at $t = 0$: $v(0) = -A\\omega \\sin\\phi > 0 \\implies \\sin\\phi < 0 \\implies \\phi = -\\frac{\\pi}{2}$ (or $\\frac{3\\pi}{2}$).<br>
    $$x(t) = 2.0 \\cos\\left(20t - \\frac{\\pi}{2}\\right) = \\mathbf{2.0 \\sin(20t)\\text{ cm}}$$<br><br>
    $$\\mathbf{\\text{Results: } (a)\\; x = 2.0\\cos(20t),\\; (b)\\; x = -2.0\\cos(20t),\\; (c)\\; x = 2.0\\sin(20t)\\text{ cm.}}$$
  </div>`,
  '3 Marks',
  [
    ['(a) Initial phase $\\phi = 0$ and equation $x = 2\\cos(20t)$', '1 Mark'],
    ['(b) Initial phase $\\phi = \\pi$ and equation $x = -2\\cos(20t)$', '1 Mark'],
    ['(c) Initial phase $\\phi = -\\pi/2$ and equation $x = 2\\sin(20t)$', '1 Mark']
  ]
));

// Question 13.9
questions.push(createQCard(
  'c11p-ch13-q9', 'Question 13.9', 'NCERT Exercise',
  'Figures show two reference circles. For each, indicate the initial position of the particle, the radius of the circle, the angular speed, and the sense of rotation. If the revolving particle P has a projection on the $x$-axis, obtain the simple harmonic motion of the $x$-projection of radius vector of the revolving particle P in each case:<br>(a) Circle of radius $A = 3\\text{ cm}$, period $T = 2\\text{ s}$, anticlockwise sense, initial position at angle $\\theta_0 = 30^\\circ = \\pi/6$.<br>(b) Circle of radius $B = 2\\text{ m}$, period $T = 4\\text{ s}$, clockwise sense, initial position on vertical positive axis at angle $\\theta_0 = 90^\\circ = \\pi/2$.',
  `<div class="step">
    <b>General Principle of Reference Circle:</b><br>
    For a reference circle of radius $A$ rotating with angular velocity $\\omega = \\frac{2\\pi}{T}$ starting from initial angle $\\phi$ with respect to the positive $x$-axis, the $x$-projection is:<br>
    $$x(t) = A \\cos(\\omega t + \\phi) \\quad \\text{(for anticlockwise rotation)}$$<br>
    $$x(t) = A \\cos(-\\omega t + \\phi) = A \\cos(\\omega t - \\phi) \\quad \\text{(for clockwise rotation)}$$<br><br>
    <b>Case (a):</b><br>
    • Radius $A = 3\\text{ cm}$<br>
    • Period $T = 2\\text{ s} \\implies \\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{2} = \\pi\\text{ rad s}^{-1}$<br>
    • Initial angle at $t = 0$: $\\phi = 30^\\circ = +\\frac{\\pi}{6}\\text{ rad}$<br>
    • Sense: Anticlockwise ($+\\omega$)<br>
    • Equation of motion:<br>
    $$x(t) = \\mathbf{3 \\cos\\left(\\pi t + \\frac{\\pi}{6}\\right)\\text{ cm}}$$<br><br>
    <b>Case (b):</b><br>
    • Radius $B = 2\\text{ m} = 200\\text{ cm}$<br>
    • Period $T = 4\\text{ s} \\implies \\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}\\text{ rad s}^{-1}$<br>
    • Initial position is on the $+y$ axis at $t = 0$: $\\phi = +\\frac{\\pi}{2}\\text{ rad}$<br>
    • Sense: Clockwise ($-\\omega$)<br>
    • Position angle at time $t$: $\\theta(t) = \\frac{\\pi}{2} - \\omega t = \\frac{\\pi}{2} - \\frac{\\pi}{2} t$<br>
    • $x$-projection:<br>
    $$x(t) = 2 \\cos\\left(\\frac{\\pi}{2} - \\frac{\\pi}{2} t\\right) = \\mathbf{2 \\sin\\left(\\frac{\\pi}{2} t\\right)\\text{ m} = 2 \\cos\\left(\\frac{\\pi}{2} t - \\frac{\\pi}{2}\\right)\\text{ m}}$$<br><br>
    $$\\mathbf{\\text{Result: } (a)\\; x = 3\\cos\\left(\\pi t + \\frac{\\pi}{6}\\right)\\text{ cm};\\quad (b)\\; x = 2\\sin\\left(\\frac{\\pi}{2}t\\right)\\text{ m.}}$$
  </div>`,
  '3 Marks',
  [
    ['Reference circle parameters ($A, T, \\omega, \\phi$) identified for both cases', '1 Mark'],
    ['Derivation of $x(t) = 3\\cos(\\pi t + \\pi/6)\\text{ cm}$ for Case (a)', '1 Mark'],
    ['Derivation of $x(t) = 2\\sin(\\frac{\\pi}{2}t)\\text{ m}$ for Case (b) taking clockwise sense', '1 Mark']
  ]
));

// Question 13.10
questions.push(createQCard(
  'c11p-ch13-q10', 'Question 13.10', 'NCERT Exercise',
  'Figure shows the reference circle for a particle executing uniform circular motion of radius $R = 2\\text{ m}$, with a period of rotation of $4\\text{ s}$. The sense of rotation is clockwise. At $t = 0$, the particle is on the $x$-axis at $x = -R$. Obtain the simple harmonic motion equation for the $x$-projection of the radius vector of the particle.',
  `<div class="step">
    Given Data:<br>
    • Radius of reference circle $R = A = 2\\text{ m}$<br>
    • Period of revolution $T = 4\\text{ s}$<br>
    • Angular speed $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}\\text{ rad s}^{-1}$<br>
    • Sense of rotation: Clockwise<br>
    • Initial position at $t = 0$: particle is at $x = -R = -2\\text{ m}$ on the negative $x$-axis, so initial angle $\\phi = \\pi\\text{ rad}$ ($180^\\circ$).<br><br>
    <b>1. Position angle $\\theta(t)$ at time $t$:</b><br>
    Since the rotation is clockwise, the angle decreases from $\\pi$:<br>
    $$\\theta(t) = \\pi - \\omega t = \\pi - \\frac{\\pi}{2} t$$<br><br>
    <b>2. Displacement equation for $x$-projection:</b><br>
    $$x(t) = R \\cos[\\theta(t)] = 2 \\cos\\left(\\pi - \\frac{\\pi}{2} t\\right)$$<br>
    Using the identity $\\cos(\\pi - \\theta) = -\\cos\\theta$:<br>
    $$x(t) = \\mathbf{-2 \\cos\\left(\\frac{\\pi}{2} t\\right)\\text{ m}}$$<br>
    Or in standard phase format: $x(t) = 2 \\cos\\left(\\frac{\\pi}{2} t + \\pi\\right)\\text{ m}$.<br><br>
    $$\\mathbf{\\text{The equation of simple harmonic motion is } x(t) = -2 \\cos\\left(\\frac{\\pi}{2} t\\right)\\text{ m.}}$$
  </div>`,
  '2 Marks',
  [
    ['Determining angular speed $\\omega = \\pi/2\\text{ rad/s}$ and initial phase $\\phi = \\pi$', '1 Mark'],
    ['Deriving $x(t) = -2\\cos(\\frac{\\pi}{2} t)\\text{ m}$', '1 Mark']
  ]
));

// Question 13.11
questions.push(createQCard(
  'c11p-ch13-q11', 'Question 13.11', 'NCERT Exercise',
  'Figure shows the $x\\text{-}t$ plot of a one-dimensional simple harmonic motion. What is the time period, amplitude, and the equation of motion if the particle starts from $x = 0$ at $t = 0$ with positive velocity and reaches a peak of $+1\\text{ cm}$ at $t = 1\\text{ s}$ and completes one full wave in $4\\text{ s}$?',
  `<div class="step">
    From the given $x-t$ sinusoidal graph:<br>
    • The maximum displacement from the mean position is $A = 1\\text{ cm} = 0.01\\text{ m}$.<br>
    • The time taken to complete one full cycle of oscillation is $T = 4\\text{ s}$.<br><br>
    <b>1. Angular Frequency ($\\omega$):</b><br>
    $$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{4\\text{ s}} = \\frac{\\pi}{2}\\text{ rad s}^{-1}$$<br><br>
    <b>2. Determining Initial Phase ($\\phi$):</b><br>
    Using the general cosine form: $x(t) = A \\cos(\\omega t + \\phi)$.<br>
    At $t = 0$: $x(0) = 0 \\implies 1 \\cos\\phi = 0 \\implies \\phi = \\pm \\frac{\\pi}{2}$.<br>
    Since velocity at $t = 0$ is positive ($v(0) = -A\\omega \\sin\\phi > 0$), $\\sin\\phi$ must be negative:<br>
    $$\\phi = -\\frac{\\pi}{2}\\text{ rad}$$<br><br>
    <b>3. Equation of Motion:</b><br>
    $$x(t) = 1 \\cos\\left(\\frac{\\pi}{2} t - \\frac{\\pi}{2}\\right) = \\mathbf{1 \\sin\\left(\\frac{\\pi}{2} t\\right)\\text{ cm}}$$<br><br>
    $$\\mathbf{\\text{Summary: } \\text{Amplitude } A = 1\\text{ cm},\\; \\text{Period } T = 4\\text{ s},\\; \\text{Equation: } x(t) = \\sin\\left(\\frac{\\pi}{2} t\\right)\\text{ cm.}}$$
  </div>`,
  '2 Marks',
  [
    ['Extracting $A = 1\\text{ cm}$ and $T = 4\\text{ s}$ from graph', '1 Mark'],
    ['Calculating $\\omega = \\pi/2\\text{ rad/s}$ and writing equation $x(t) = \\sin(\\frac{\\pi}{2}t)\\text{ cm}$', '1 Mark']
  ]
));

// Question 13.12
questions.push(createQCard(
  'c11p-ch13-q12', 'Question 13.12', 'NCERT Exercise',
  'Figure shows two springs of force constants $k_1$ and $k_2$ attached to a mass $m$. Find the time period of vertical oscillations in each of the following arrangements:<br>(a) The two springs are connected in parallel to support the mass $m$.<br>(b) The two springs are connected in series with the mass $m$ attached at the bottom.',
  `<div class="step">
    <b>(a) Parallel Combination:</b><br>
    • When the mass $m$ is displaced by a distance $y$, both springs undergo the <b>same extension</b> $y$.<br>
    • The total restoring force is the sum of the restoring forces of each spring:<br>
    $$F = F_1 + F_2 = -k_1 y - k_2 y = -(k_1 + k_2) y$$<br>
    • The effective spring constant is: $k_p = k_1 + k_2$.<br>
    • The time period is:<br>
    $$T_p = \\mathbf{2\\pi \\sqrt{\\frac{m}{k_1 + k_2}}}$$<br><br>
    <b>(b) Series Combination:</b><br>
    • When the mass $m$ is pulled down, the restoring force $F$ in both springs is the <b>same</b>, but the extensions $y_1$ and $y_2$ are different:<br>
    $$y_1 = \\frac{F}{k_1}, \\quad y_2 = \\frac{F}{k_2}$$<br>
    • Total extension $y = y_1 + y_2 = F \\left(\\frac{1}{k_1} + \\frac{1}{k_2}\\right) = F \\left(\\frac{k_1 + k_2}{k_1 k_2}\\right)$.<br>
    • The effective spring constant is:<br>
    $$k_s = \\frac{F}{y} = \\frac{k_1 k_2}{k_1 + k_2}$$<br>
    • The time period is:<br>
    $$T_s = 2\\pi \\sqrt{\\frac{m}{k_s}} = \\mathbf{2\\pi \\sqrt{\\frac{m(k_1 + k_2)}{k_1 k_2}}}$$<br><br>
    $$\\mathbf{\\text{Results: } (a)\\; T_p = 2\\pi\\sqrt{\\frac{m}{k_1 + k_2}};\\quad (b)\\; T_s = 2\\pi\\sqrt{\\frac{m(k_1 + k_2)}{k_1 k_2}}.}}$$
  </div>`,
  '3 Marks',
  [
    ['Parallel derivation: $k_p = k_1 + k_2$ and $T_p = 2\\pi\\sqrt{m/(k_1+k_2)}$', '1.5 Marks'],
    ['Series derivation: $1/k_s = 1/k_1 + 1/k_2$ and $T_s = 2\\pi\\sqrt{m(k_1+k_2)/(k_1 k_2)}$', '1.5 Marks']
  ]
));

// Question 13.13
questions.push(createQCard(
  'c11p-ch13-q13', 'Question 13.13', 'NCERT Exercise',
  'A block whose mass is $1\\text{ kg}$ is fastened to a spring. The spring has a spring constant of $50\\text{ N m}^{-1}$. The block is pulled to a distance $x = 10\\text{ cm}$ from its equilibrium position at $x = 0$ on a frictionless surface from rest at $t = 0$. Calculate the kinetic, potential and total energies of the block when it is $5\\text{ cm}$ away from the mean position.',
  `<div class="step">
    Given Data:<br>
    • Mass $m = 1\\text{ kg}$<br>
    • Spring constant $k = 50\\text{ N m}^{-1}$<br>
    • Amplitude $A = 10\\text{ cm} = 0.10\\text{ m}$<br>
    • Given displacement $x = 5\\text{ cm} = 0.05\\text{ m}$<br><br>
    <b>1. Total Mechanical Energy ($E$):</b><br>
    The total mechanical energy in SHM is constant and given by:<br>
    $$E = \\frac{1}{2} k A^2 = \\frac{1}{2} \\times (50\\text{ N m}^{-1}) \\times (0.10\\text{ m})^2 = 25 \\times 0.01 = \\mathbf{0.25\\text{ J}}$$<br><br>
    <b>2. Potential Energy ($PE$) at $x = 0.05\\text{ m}$ ($\frac{A}{2}$):</b><br>
    $$PE = \\frac{1}{2} k x^2 = \\frac{1}{2} \\times (50\\text{ N m}^{-1}) \\times (0.05\\text{ m})^2 = 25 \\times 0.0025 = \\mathbf{0.0625\\text{ J}}$$<br><br>
    <b>3. Kinetic Energy ($KE$) at $x = 0.05\\text{ m}$:</b><br>
    By conservation of mechanical energy ($E = KE + PE$):<br>
    $$KE = E - PE = 0.25\\text{ J} - 0.0625\\text{ J} = \\mathbf{0.1875\\text{ J}}$$<br>
    <i>Check via formula: $KE = \\frac{1}{2} k (A^2 - x^2) = 25 \\times (0.01 - 0.0025) = 25 \\times 0.0075 = 0.1875\\text{ J}$.</i><br><br>
    $$\\mathbf{\\text{Summary: } \\text{Total Energy } E = 0.25\\text{ J},\\; PE = 0.0625\\text{ J},\\; KE = 0.1875\\text{ J.}}$$
  </div>`,
  '3 Marks',
  [
    ['Total energy formula & calculation: $E = \\frac{1}{2}kA^2 = 0.25\\text{ J}$', '1 Mark'],
    ['Potential energy calculation: $PE = \\frac{1}{2}kx^2 = 0.0625\\text{ J}$', '1 Mark'],
    ['Kinetic energy calculation: $KE = E - PE = 0.1875\\text{ J}$', '1 Mark']
  ]
));

// Question 13.14
questions.push(createQCard(
  'c11p-ch13-q14', 'Question 13.14', 'NCERT Exercise',
  'A mass $m$ attached to a spring of force constant $k$ oscillates with a time period $T$. What will be the new time period if:<br>(a) the spring is cut into two equal halves and the same mass $m$ is suspended from one of the halves?<br>(b) the mass is doubled ($m\' = 2m$) with the original spring intact?',
  `<div class="step">
    Original time period of spring-mass system:<br>
    $$T = 2\\pi \\sqrt{\\frac{m}{k}}$$<br><br>
    <b>(a) When the spring is cut into two equal halves:</b><br>
    • The spring constant is inversely proportional to its natural length ($k \\propto 1/L$).<br>
    • When cut into two equal halves, the length of each half is $L' = L/2$.<br>
    • Therefore, the new spring constant of one half is:<br>
    $$k' = 2k$$<br>
    • The new time period $T'$ is:<br>
    $$T' = 2\\pi \\sqrt{\\frac{m}{k'}} = 2\\pi \\sqrt{\\frac{m}{2k}} = \\frac{1}{\\sqrt{2}} \\left(2\\pi \\sqrt{\\frac{m}{k}}\\right) = \\mathbf{\\frac{T}{\\sqrt{2}} \\approx 0.707\\, T}$$<br><br>
    <b>(b) When the mass is doubled ($m' = 2m$) with the original spring $k$:</b><br>
    $$T'' = 2\\pi \\sqrt{\\frac{m'}{k}} = 2\\pi \\sqrt{\\frac{2m}{k}} = \\sqrt{2} \\left(2\\pi \\sqrt{\\frac{m}{k}}\\right) = \\mathbf{\\sqrt{2}\\, T \\approx 1.414\\, T}$$<br><br>
    $$\\mathbf{\\text{Results: } (a)\\; T' = \\frac{T}{\\sqrt{2}} = 0.707\\, T;\\quad (b)\\; T'' = \\sqrt{2}\\, T = 1.414\\, T.}}$$
  </div>`,
  '2 Marks',
  [
    ['(a) Deducing $k\' = 2k$ and new time period $T\' = T/\\sqrt{2}$', '1 Mark'],
    ['(b) Deducing $T\'\' = \\sqrt{2} T$ for doubled mass', '1 Mark']
  ]
));

// Question 13.15
questions.push(createQCard(
  'c11p-ch13-q15', 'Question 13.15', 'NCERT Exercise',
  'A simple pendulum of length $1\\text{ m}$ has a bob of mass $100\\text{ g}$. Find the time period of oscillation (a) on the surface of Earth ($g = 9.8\\text{ m s}^{-2}$), and (b) on the surface of the Moon, where acceleration due to gravity is $1.6\\text{ m s}^{-2}$.',
  `<div class="step">
    Given Data:<br>
    • Length of pendulum $L = 1.0\\text{ m}$<br>
    • Mass of bob $m = 100\\text{ g} = 0.1\\text{ kg}$ (Note: Time period of simple pendulum is independent of mass $m$)<br>
    • Acceleration due to gravity on Earth $g_e = 9.8\\text{ m s}^{-2}$<br>
    • Acceleration due to gravity on Moon $g_m = 1.6\\text{ m s}^{-2}$<br><br>
    <b>Formula:</b><br>
    $$T = 2\\pi \\sqrt{\\frac{L}{g}}$$<br><br>
    <b>(a) Time period on Earth ($T_e$):</b><br>
    $$T_e = 2 \\times 3.1416 \\times \\sqrt{\\frac{1.0}{9.8}} = 6.2832 \\times \\sqrt{0.10204} = 6.2832 \\times 0.3194 = \\mathbf{2.007\\text{ s} \\approx 2.0\\text{ s}}$$<br><br>
    <b>(b) Time period on the Moon ($T_m$):</b><br>
    $$T_m = 2 \\times 3.1416 \\times \\sqrt{\\frac{1.0}{1.6}} = 6.2832 \\times \\sqrt{0.625} = 6.2832 \\times 0.7906 = \\mathbf{4.967\\text{ s} \\approx 4.97\\text{ s} \\approx 5.0\\text{ s}}$$<br><br>
    $$\\mathbf{\\text{Summary: } (a)\\; T_{\\text{Earth}} = 2.0\\text{ s},\\; (b)\\; T_{\\text{Moon}} = 4.97\\text{ s} \\text{ (approximately 2.5 times slower on the Moon).}}$$
  </div>`,
  '2 Marks',
  [
    ['(a) Calculation for Earth: $T_e = 2\\pi\\sqrt{1/9.8} \\approx 2.0\\text{ s}$', '1 Mark'],
    ['(b) Calculation for Moon: $T_m = 2\\pi\\sqrt{1/1.6} \\approx 4.97\\text{ s}$', '1 Mark']
  ]
));

// Question 13.16
questions.push(createQCard(
  'c11p-ch13-q16', 'Question 13.16', 'NCERT Exercise',
  'What is the length of a simple pendulum, which ticks seconds (Seconds Pendulum, $T = 2.0\\text{ s}$) on the surface of the Earth? ($g = 9.8\\text{ m s}^{-2}$).',
  `<div class="step">
    <b>Definition:</b> A <b>Seconds Pendulum</b> is a simple pendulum whose time period of one complete oscillation is exactly $2\\text{ seconds}$ (meaning it takes $1\\text{ second}$ to swing from one extreme to the other, ticking every second).<br><br>
    Given Data:<br>
    • Time period $T = 2.0\\text{ s}$<br>
    • Acceleration due to gravity on Earth $g = 9.8\\text{ m s}^{-2}$<br><br>
    <b>Formula:</b><br>
    $$T = 2\\pi \\sqrt{\\frac{L}{g}} \\implies T^2 = 4\\pi^2 \\frac{L}{g} \\implies L = \\frac{g T^2}{4\\pi^2}$$<br><br>
    <b>Calculation:</b><br>
    $$L = \\frac{9.8\\text{ m s}^{-2} \\times (2.0\\text{ s})^2}{4 \\times (3.1416)^2} = \\frac{9.8 \\times 4}{4 \\times 9.8696} = \\frac{9.8}{9.8696} = \\mathbf{0.99295\\text{ m} \\approx 0.993\\text{ m} = 99.3\\text{ cm}}$$<br><br>
    $$\\mathbf{\\text{The length of a seconds pendulum on the surface of the Earth is approximately } 0.993\\text{ m (or } 99.3\\text{ cm}\\text{).}}$$
  </div>`,
  '2 Marks',
  [
    ['Definition of seconds pendulum ($T = 2.0\\text{ s}$) and derivation $L = g T^2 / (4\\pi^2)$', '1 Mark'],
    ['Numerical evaluation $L = 0.993\\text{ m} = 99.3\\text{ cm}$', '1 Mark']
  ]
));

// Question 13.17
questions.push(createQCard(
  'c11p-ch13-q17', 'Question 13.17', 'NCERT Exercise',
  'A cylindrical piece of cork of density $\\rho$, base area $A$, and height $h$ floats in a liquid of density $\\rho_l$. The cork is depressed slightly and then released. Show that the cork oscillates up and down simple harmonically with a period $T = 2\\pi\\sqrt{\\frac{h\\rho}{\\rho_l g}}$.',
  `<div class="step">
    <b>1. Equilibrium State:</b><br>
    • Total mass of cork cylinder: $m = \\text{Volume} \\times \\text{Density} = (A \\cdot h) \\rho$.<br>
    • Weight of the cork acting downwards: $W = m g = A h \\rho g$.<br>
    • Let $l$ be the equilibrium submerged depth in the liquid.<br>
    • Upward buoyant force in equilibrium: $F_B = (A \\cdot l) \\rho_l g$.<br>
    • At equilibrium, Weight = Buoyant force:<br>
    $$A h \\rho g = A l \\rho_l g \\implies h \\rho = l \\rho_l \\quad \\text{--- (Eq. 1)}$$<br><br>
    <b>2. Disturbed State:</b><br>
    • Suppose the cork is pushed downwards by a small vertical displacement $y$.<br>
    • The submerged depth increases to $(l + y)$.<br>
    • New buoyant force: $F_B' = A (l + y) \\rho_l g$.<br>
    • Net restoring force acting on the cork towards the equilibrium position:<br>
    $$F_{\\text{net}} = W - F_B' = A h \\rho g - A (l + y) \\rho_l g$$<br>
    Using Eq. 1 ($A h \\rho g = A l \\rho_l g$):<br>
    $$F_{\\text{net}} = -A \\rho_l g y$$<br><br>
    <b>3. Proving Simple Harmonic Motion:</b><br>
    The restoring force is directly proportional to displacement $y$ and directed opposite to it:<br>
    $$F_{\\text{net}} = -k y \\quad \\text{where } k = A \\rho_l g$$<br>
    Therefore, the cork executes **Simple Harmonic Motion**.<br><br>
    <b>4. Time Period ($T$):</b><br>
    $$T = 2\\pi \\sqrt{\\frac{m}{k}} = 2\\pi \\sqrt{\\frac{A h \\rho}{A \\rho_l g}} = \\mathbf{2\\pi \\sqrt{\\frac{h\\rho}{\\rho_l g}}}$$<br><br>
    $$\\mathbf{\\text{Hence proved: The cork oscillates simple harmonically with time period } T = 2\\pi\\sqrt{\\frac{h\\rho}{\\rho_l g}}.}}$$
  </div>`,
  '4 Marks',
  [
    ['Formulating equilibrium condition $Ah\\rho g = Al\\rho_l g$', '1 Mark'],
    ['Deriving net restoring force $F_{\\text{net}} = -A\\rho_l gy$', '1 Mark'],
    ['Proving linear SHM condition $F \\propto -y$', '1 Mark'],
    ['Deriving final time period formula $T = 2\\pi\\sqrt{\\frac{h\\rho}{\\rho_l g}}$', '1 Mark']
  ]
));

// Question 13.18
questions.push(createQCard(
  'c11p-ch13-q18', 'Question 13.18', 'NCERT Exercise',
  'One end of a U-tube containing mercury is connected to a suction pump and the other end to atmosphere. A small pressure difference is maintained between the two columns. Show that, when the suction pump is removed, the column of mercury in the U-tube executes simple harmonic motion and determine its time period.',
  `<div class="step">
    <b>1. Setup and Equilibrium:</b><br>
    • Let $A$ be the internal cross-sectional area of the U-tube.<br>
    • Let $\\rho$ be the density of mercury.<br>
    • Let $h$ be the initial height of the mercury column in each arm in equilibrium.<br>
    • Total length of the mercury column in the U-tube $L = 2h$.<br>
    • Total mass of the oscillating mercury $M = A \\cdot L \\cdot \\rho = 2 A h \\rho$.<br><br>
    <b>2. Displacement and Restoring Force:</b><br>
    • When the suction pump creates a small depression, let the mercury level in one arm be depressed by a distance $y$ below the equilibrium level.<br>
    • Consequently, the mercury in the other arm rises by the same distance $y$ above the equilibrium level.<br>
    • The difference in height between the two mercury columns is:<br>
    $$\\Delta h = y - (-y) = 2y$$<br>
    • This height difference produces an unbalanced hydrostatic restoring pressure:<br>
    $$\\Delta P = \\Delta h \\cdot \\rho g = 2y \\rho g$$<br>
    • The restoring force acting on the entire liquid column is directed towards the equilibrium position:<br>
    $$F = -\\Delta P \\cdot A = -(2y \\rho g) A = -(2 A \\rho g) y$$<br><br>
    <b>3. Equation of Motion:</b><br>
    $$M \\frac{d^2y}{dt^2} = -(2 A \\rho g) y \\implies \\frac{d^2y}{dt^2} + \\left(\\frac{2 A \\rho g}{M}\\right) y = 0$$<br>
    Substitute $M = 2 A h \\rho$:<br>
    $$\\frac{d^2y}{dt^2} + \\left(\\frac{2 A \\rho g}{2 A h \\rho}\\right) y = 0 \\implies \\frac{d^2y}{dt^2} + \\left(\\frac{g}{h}\\right) y = 0$$<br>
    This is the standard differential equation of Simple Harmonic Motion: $\\frac{d^2y}{dt^2} + \\omega^2 y = 0$, where angular frequency $\\omega = \\sqrt{\\frac{g}{h}}$.<br><br>
    <b>4. Time Period ($T$):</b><br>
    $$T = \\frac{2\\pi}{\\omega} = \\mathbf{2\\pi \\sqrt{\\frac{h}{g}}} = \\mathbf{2\\pi \\sqrt{\\frac{L}{2g}}}$$<br><br>
    $$\\mathbf{\\text{Hence proved: The mercury column executes SHM with period } T = 2\\pi\\sqrt{\\frac{h}{g}} \\text{ (or } 2\\pi\\sqrt{\\frac{L}{2g}}\\text{).}}$$
  </div>`,
  '4 Marks',
  [
    ['Determining height difference $\\Delta h = 2y$ and restoring force $F = -2A\\rho gy$', '1.5 Marks'],
    ['Setting up differential equation of motion $d^2y/dt^2 + (g/h)y = 0$', '1.5 Marks'],
    ['Evaluating time period $T = 2\\pi\\sqrt{h/g} = 2\\pi\\sqrt{L/2g}$', '1 Mark']
  ]
));

// ============================================================================
// VECTOR SVG DIAGRAM: OSCILLATIONS & SHM DYNAMICS
// ============================================================================
const oscillationsSvg = `
  <div style="margin:24px 0; background:white; padding:20px; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <h3 style="font-size:1.05rem; font-weight:800; color:#1e293b; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0-7 17l7-7 7 7a10 10 0 0 0-7-17z"/></svg>
      Oscillatory Micro-Mechanics: Simple Harmonic Reference Circle &amp; Parabolic Energy Interchange Wells
    </h3>
    <svg viewBox="0 0 780 230" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', system-ui, sans-serif;">
      <!-- Panel 1: SHM Reference Circle & Projection -->
      <rect x="15" y="15" width="375" height="200" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="35" y="38" font-size="12" font-weight="bold" fill="#1e293b">1. Reference Circle &amp; Projection on x-axis:</text>

      <!-- Axes -->
      <line x1="80" y1="125" x2="260" y2="125" stroke="#94a3b8" stroke-width="1.2"/>
      <line x1="170" y1="45" x2="170" y2="205" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="263" y="128" font-size="8.5" fill="#475569">+x</text>
      <text x="173" y="48" font-size="8.5" fill="#475569">+y</text>

      <!-- Reference Circle -->
      <circle cx="170" cy="125" r="65" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.8"/>

      <!-- Rotating Radius Vector OP -->
      <line x1="170" y1="125" x2="216" y2="79" stroke="#7c3aed" stroke-width="2.2"/>
      <circle cx="216" cy="79" r="5" fill="#7c3aed"/>
      <text x="224" y="77" font-size="9" font-weight="bold" fill="#7c3aed">P(t)</text>
      <text x="185" y="105" font-size="8.5" font-weight="bold" fill="#5b21b6">A</text>

      <!-- Projection on x-axis P' -->
      <line x1="216" y1="79" x2="216" y2="125" stroke="#ef4444" stroke-dasharray="2,2" stroke-width="1.2"/>
      <circle cx="216" cy="125" r="4.5" fill="#ef4444"/>
      <text x="210" y="140" font-size="8.5" font-weight="bold" fill="#ef4444">P'</text>
      <text x="185" y="137" font-size="8" font-weight="bold" fill="#ef4444">x(t)</text>

      <!-- Sense of rotation arc -->
      <path d="M 230 110 A 68 68 0 0 0 215 70" fill="none" stroke="#2563eb" stroke-width="1.5"/>
      <polygon points="215,70 213,76 220,74" fill="#2563eb"/>
      <text x="235" y="95" font-size="8" font-weight="bold" fill="#2563eb">&omega;</text>

      <!-- Formulas box inside panel 1 -->
      <rect x="275" y="60" width="105" height="135" rx="4" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="281" y="78" font-size="8.5" font-weight="bold" fill="#1e40af">Kinematics:</text>
      <text x="281" y="96" font-size="7.5" fill="#334155">&bull; x = A cos(&omega;t+&phi;)</text>
      <text x="281" y="114" font-size="7.5" fill="#334155">&bull; v = -&omega;A sin(&omega;t+&phi;)</text>
      <text x="281" y="132" font-size="7.5" fill="#334155">&bull; a = -&omega;&sup2; x</text>
      <text x="281" y="150" font-size="7.5" fill="#047857">&bull; v_max = &omega;A</text>
      <text x="281" y="168" font-size="7.5" fill="#b91c1c">&bull; a_max = &omega;&sup2;A</text>
      <text x="281" y="184" font-size="7" fill="#64748b">&bull; T = 2&pi;/&omega;</text>

      <!-- Panel 2: Mechanical Energy Interchange Curves -->
      <rect x="405" y="15" width="360" height="200" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="425" y="38" font-size="12" font-weight="bold" fill="#1e293b">2. SHM Mechanical Energy Conservation:</text>

      <!-- Axes -->
      <line x1="440" y1="180" x2="740" y2="180" stroke="#475569" stroke-width="1.5"/>
      <polygon points="740,180 732,176 732,184" fill="#475569"/>
      <text x="715" y="195" font-size="8.5" font-weight="bold" fill="#475569">Position (x) &rarr;</text>

      <line x1="590" y1="180" x2="590" y2="50" stroke="#475569" stroke-width="1.5"/>
      <polygon points="590,50 586,58 594,58" fill="#475569"/>
      <text x="545" y="60" font-size="8.5" font-weight="bold" fill="#475569">Energy (E) &rarr;</text>

      <text x="480" y="195" font-size="8.5" font-weight="bold" fill="#64748b">-A</text>
      <text x="585" y="195" font-size="8.5" font-weight="bold" fill="#64748b">0 (Mean)</text>
      <text x="695" y="195" font-size="8.5" font-weight="bold" fill="#64748b">+A</text>

      <!-- Potential Energy Parabola (PE = 1/2 k x^2) -->
      <path d="M 485 85 Q 590 180 695 85" fill="none" stroke="#2563eb" stroke-width="2.2"/>
      <text x="500" y="98" font-size="8.5" font-weight="bold" fill="#2563eb">PE = &frac12;kx&sup2;</text>

      <!-- Kinetic Energy Inverted Parabola (KE = 1/2 k (A^2 - x^2)) -->
      <path d="M 485 180 Q 590 85 695 180" fill="none" stroke="#059669" stroke-width="2.2"/>
      <text x="600" y="105" font-size="8.5" font-weight="bold" fill="#059669">KE = &frac12;m v&sup2;</text>

      <!-- Total Energy Horizontal Line -->
      <line x1="485" y1="85" x2="695" y2="85" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2"/>
      <text x="540" y="78" font-size="9" font-weight="bold" fill="#ef4444">Total Energy E = &frac12;kA&sup2; (Constant)</text>

      <!-- Intersection crossover points x = +/- A / sqrt(2) -->
      <circle cx="538" cy="132" r="3.5" fill="#7c3aed"/>
      <circle cx="642" cy="132" r="3.5" fill="#7c3aed"/>
      <text x="548" y="142" font-size="7.5" font-weight="bold" fill="#7c3aed">KE = PE = E/2 at x = &plusmn;A/&radic;2</text>
    </svg>
  </div>
`;

// ============================================================================
// ASSEMBLY OF CH13.HTML
// ============================================================================
const chapterHtml = `
<section class="chapter-section" id="c11p-ch13">
  <div class="chapter-header">
    <div class="ch-badge">13</div>
    <div class="chapter-header-info">
      <div class="ch-category">CBSE Class 11 Physics &bull; Chapter 13</div>
      <h2>Oscillations</h2>
      <p>NCERT Rationalised 2026–27 Syllabus &bull; All 18 Verbatim Questions with Official Step-by-Step Marking Rubrics</p>
    </div>
  </div>

  ${oscillationsSvg}

  <div class="ex-div">NCERT Textbook Exercise 13.1 to 13.18: Periodic &amp; Simple Harmonic Motion, Reference Circles, Spring Systems, Simple &amp; Seconds Pendulums, Floating Bodies &amp; U-Tube Oscillations</div>
${questions.join('\n')}

  <div class="chapter-nav-btns" style="margin-top:40px; display:flex; justify-content:space-between; align-items:center;">
    <button class="ch-nav-btn prev" onclick="showChapter(12)" style="padding:10px 24px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer;">← Prev: Chapter 12 (Kinetic Theory)</button>
    <button class="ch-nav-btn next" onclick="showChapter(14)" style="padding:10px 24px; border-radius:8px; border:none; background:#7c3aed; color:white; font-weight:700; cursor:pointer;">Next: Chapter 14 (Waves) →</button>
  </div>
</section>
`;

// Write ch13.html
const ch13Path = path.join(outDir, 'ch13.html');
fs.writeFileSync(ch13Path, chapterHtml.trim(), 'utf8');
console.log(`Successfully generated: ${ch13Path} (${chapterHtml.length} bytes)`);

// Update chapters-data.js
const dataJsPath = path.join(outDir, 'chapters-data.js');
let existingData = '';
if (fs.existsSync(dataJsPath)) {
  existingData = fs.readFileSync(dataJsPath, 'utf8');
}

// Append or update window.CHAPTER_DATA[13]
if (!existingData.includes('window.CHAPTER_DATA[13] =')) {
  fs.appendFileSync(dataJsPath, `\nwindow.CHAPTER_DATA[13] = ${JSON.stringify(chapterHtml.trim())};\n`, 'utf8');
  console.log(`Appended Chapter 13 to preloaded cache: ${dataJsPath}`);
} else {
  const regex = /window\.CHAPTER_DATA\[13\]\s*=\s*[\s\S]*?;\n/g;
  const updated = existingData.replace(regex, `window.CHAPTER_DATA[13] = ${JSON.stringify(chapterHtml.trim())};\n`);
  fs.writeFileSync(dataJsPath, updated, 'utf8');
  console.log(`Updated Chapter 13 in preloaded cache: ${dataJsPath}`);
}
