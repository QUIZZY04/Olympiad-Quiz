// scripts/builders/gen-c12p-ch5.js
// Class 12 Physics - Chapter 5: Magnetism and Matter (16 Questions)
const { createQCard, saveChapter } = require('./c12p-helper');

const chNum = 5;
const chTitle = "Magnetism and Matter";
const nextChTitle = "Electromagnetic Induction";

const svgDiagram = `
  <div style="display:flex; justify-content:center; margin:24px 0;">
    <svg viewBox="0 0 760 220" style="width:100%; max-width:760px; height:auto; background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
        </marker>
        <marker id="arrowRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
        </marker>
      </defs>
      <!-- Title -->
      <text x="380" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e293b">Bar Magnet & Magnetic Field Lines (Gauss's Law $\\oint \\mathbf{B}\\cdot d\\mathbf{A}=0$)</text>
      
      <!-- Bar Magnet -->
      <rect x="290" y="90" width="90" height="40" rx="4" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
      <text x="335" y="115" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#ffffff">N</text>
      <rect x="380" y="90" width="90" height="40" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="425" y="115" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#ffffff">S</text>

      <!-- Magnetic field lines (loops) -->
      <!-- Top loops -->
      <path d="M 335 90 C 335 30, 425 30, 425 90" fill="none" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,2" marker-mid="url(#arrow)"/>
      <path d="M 310 90 C 270 10, 490 10, 450 90" fill="none" stroke="#2563eb" stroke-width="1.8"/>
      
      <!-- Bottom loops -->
      <path d="M 335 130 C 335 190, 425 190, 425 130" fill="none" stroke="#2563eb" stroke-width="1.8"/>
      <path d="M 310 130 C 270 210, 490 210, 450 130" fill="none" stroke="#2563eb" stroke-width="1.8"/>
      
      <!-- Inside magnet lines (S to N) -->
      <line x1="420" y1="110" x2="340" y2="110" stroke="#f8fafc" stroke-width="2" marker-end="url(#arrowRed)"/>

      <!-- Annotations -->
      <text x="130" y="80" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Continuous closed loops</text>
      <text x="130" y="102" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Outside: North to South</text>
      <text x="130" y="124" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Inside: South to North</text>
      <text x="130" y="146" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• No isolated magnetic monopoles</text>

      <text x="540" y="80" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Axial field: $B_{axial} = \\frac{\\mu_0}{4\\pi}\\frac{2M}{r^3}$</text>
      <text x="540" y="105" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Equatorial field: $B_{eq} = \\frac{\\mu_0}{4\\pi}\\frac{M}{r^3}$</text>
      <text x="540" y="130" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Torque: $\\boldsymbol{\\tau} = \\mathbf{M} \\times \\mathbf{B}$</text>
      <text x="540" y="155" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Potential Energy: $U = -\\mathbf{M} \\cdot \\mathbf{B}$</text>
    </svg>
  </div>
`;

const questions = [
  // 5.1
  createQCard(
    "c12p-ch5-q1",
    "Q 5.1",
    "Exercise 5.1",
    `Answer the following questions regarding earth’s magnetism and magnetic field lines:<br>
    <strong>(a)</strong> A vector needs three quantities for its specification. Name the three independent quantities conventionally used to specify the earth’s magnetic field.<br>
    <strong>(b)</strong> The angle of dip at a location in southern India is about 18°. Would you expect a greater or smaller dip angle in Britain?<br>
    <strong>(c)</strong> If you made a map of magnetic field lines in Melbourne (Australia), would the lines seem to go into the ground or come out of the ground?<br>
    <strong>(d)</strong> In which direction would a compass free to move in the vertical plane point if located right on the geomagnetic north or south pole?<br>
    <strong>(e)</strong> The earth’s field, it is claimed, roughly approximates the field due to a dipole of magnetic moment $8 \\times 10^{22} \\text{ J T}^{-1}$ located at its centre. Check the order of magnitude of this number in some way.<br>
    <strong>(f)</strong> Geologists claim that besides the main magnetic N-S direction, there are several local poles oriented in different directions. How is that possible?`,
    `<p><strong>(a) Three Magnetic Elements of Earth:</strong></p>
    <ol>
      <li><strong>Magnetic Declination ($\\theta$ or $D$):</strong> The angle between magnetic meridian and geographic meridian at that place.</li>
      <li><strong>Magnetic Inclination or Dip ($\\delta$ or $I$):</strong> The angle that the total magnetic field vector $\\mathbf{B}_E$ of the earth makes with the horizontal in the magnetic meridian.</li>
      <li><strong>Horizontal Component of Earth’s Magnetic Field ($B_H$):</strong> $B_H = B_E \\cos \\delta$.</li>
    </ol>
    <p><strong>(b) Dip Angle in Britain:</strong><br>
    Britain is situated much closer to the North magnetic pole compared to southern India (which is close to the magnetic equator where $\\delta \\approx 0^\\circ$). Therefore, the angle of dip in Britain is significantly <strong>greater</strong> (around $70^\\circ$).</p>
    <p><strong>(c) Field Lines in Melbourne (Australia):</strong><br>
    Melbourne is in the Southern Hemisphere. Earth behaves like a magnetic dipole with its magnetic south pole situated in the northern hemisphere and magnetic north pole in the southern hemisphere. Therefore, magnetic field lines emerge outward from the southern hemisphere into space. Thus, the field lines <strong>come out of the ground</strong>.</p>
    <p><strong>(d) Compass Needle at Magnetic Poles:</strong><br>
    At the magnetic poles, the field lines are entirely vertical ($B_H = 0$, dip $\\delta = 90^\\circ$). A compass needle free to rotate in a vertical plane will point <strong>straight down (vertically downwards)</strong> at the magnetic north pole, and <strong>straight up (vertically upwards)</strong> at the magnetic south pole. If free only in the horizontal plane, it can point in any arbitrary direction.</p>
    <p><strong>(e) Order of Magnitude Check:</strong><br>
    For a dipole, equatorial magnetic field is:
    \\[
    B = \\frac{\\mu_0}{4\\pi} \\frac{M}{R_E^3}
    \\]
    Taking $M = 8 \\times 10^{22} \\text{ J T}^{-1}$ and radius of earth $R_E \\approx 6.4 \\times 10^6 \\text{ m}$:
    \\[
    B = 10^{-7} \\times \\frac{8 \\times 10^{22}}{(6.4 \\times 10^6)^3} = \\frac{8 \\times 10^{15}}{2.62 \\times 10^{20}} \\approx 3.05 \\times 10^{-5} \\text{ T} \\approx 0.3 \\text{ G}
    \\]
    This matches the observed order of magnitude of the earth's surface field ($0.3 \\text{ to } 0.6 \\text{ G}$).</p>
    <p><strong>(f) Local Magnetic Anomalies:</strong><br>
    The earth's magnetic field is primarily produced by convective circulating molten iron currents in the outer core (dynamo effect). However, magnetized mineral deposits (such as magnetite/iron ores) in the earth's crust create local magnetization and localized magnetic anomalies, giving rise to local poles.</p>`,
    "3 Marks",
    [
      ["Identification of three elements (Declination, Dip, Horizontal component)", "1 Mark"],
      ["Correct explanation of dip variation and direction in Melbourne/poles", "1 Mark"],
      ["Estimation using $B = \\frac{\\mu_0}{4\\pi}\\frac{M}{R^3} \\approx 0.3\\text{ G}$ and core mineralization reason", "1 Mark"]
    ]
  ),

  // 5.2
  createQCard(
    "c12p-ch5-q2",
    "Q 5.2",
    "Exercise 5.2",
    `Answer the following questions:<br>
    <strong>(a)</strong> The magnetic field lines also represent the direction in which a mono-energetic charged particle will move in a magnetic field. Is the statement true?<br>
    <strong>(b)</strong> Magnetic field lines can be entirely confined within the core of a toroid, but not within a straight solenoid. Why?<br>
    <strong>(c)</strong> If magnetic monopoles existed, how would the Gauss’s law of magnetism be modified?<br>
    <strong>(d)</strong> Does a bar magnet exert a torque on itself due to its own field? Does one element of a current-carrying wire exert a force on another element of the same wire?<br>
    <strong>(e)</strong> Magnetic field arises due to charges in motion. Can a system have magnetic moments even though its net charge is zero?`,
    `<p><strong>(a) False.</strong> Magnetic field lines give the direction of the magnetic field $\\mathbf{B}$ at any point. The force on a moving charge is $\\mathbf{F} = q(\\mathbf{v} \\times \\mathbf{B})$, which is always perpendicular to both $\\mathbf{v}$ and $\\mathbf{B}$. Since the acceleration is normal to $\\mathbf{B}$, the particle does not generally follow the magnetic field lines (it moves along helical or circular paths).</p>
    <p><strong>(b) Toroid vs Solenoid:</strong><br>
    A toroid is an endless, closed ring solenoid. Since magnetic field lines form continuous closed loops, they can remain entirely inside the circular core without having to exit into external space. For a straight solenoid of finite length, the continuous flux lines must exit from one end and enter the other end through outer space, preventing complete confinement inside the core.</p>
    <p><strong>(c) Gauss’s Law Modification:</strong><br>
    Currently, Gauss's law for magnetism is:
    \\[
    \\oint \\mathbf{B} \\cdot d\\mathbf{A} = 0
    \\]
    If isolated magnetic monopoles of magnetic pole strength $q_m$ existed, it would become analogous to electrostatics:
    \\[
    \\oint \\mathbf{B} \\cdot d\\mathbf{A} = \\mu_0 \\sum q_m
    \\]
    where $\\sum q_m$ is the net enclosed magnetic pole strength.</p>
    <p><strong>(d) Self-torque and Self-force:</strong><br>
    • No, a bar magnet does not exert a net torque or force on itself. Internal forces and torques between constituent magnetic dipoles cancel out in pairs according to Newton’s third law.<br>
    • Yes, one element of a current-carrying wire does exert a magnetic force (Lorentz force) on other elements of the same wire. For a non-straight or flexible loop, this magnetic force tends to expand the wire into a circle.</p>
    <p><strong>(e) Net Dipole Moment with Zero Net Charge:</strong><br>
    <strong>Yes.</strong> For instance, a neutron has zero net electric charge, but it possesses a non-zero magnetic dipole moment ($-1.91 \\mu_N$) because it consists of constituent charged quarks ($u, d, d$) with internal orbital motions and spins that do not cancel out.</p>`,
    "3 Marks",
    [
      ["Explanation of non-alignment of velocity with $\\mathbf{B}$ ($F \\perp B$)", "0.5 Mark"],
      ["Toroid geometry allowing closed continuous loops", "0.5 Mark"],
      ["Modified Gauss's Law formulation $\\oint \\mathbf{B}\\cdot d\\mathbf{A} = \\mu_0 q_m$", "1 Mark"],
      ["Newton's third law self-torque cancellation & quark example for neutron", "1 Mark"]
    ]
  ),

  // 5.3
  createQCard(
    "c12p-ch5-q3",
    "Q 5.3",
    "Exercise 5.3",
    `A short bar magnet placed with its axis at $30^\\circ$ with an external field of $800 \\text{ G}$ experiences a torque of $0.016 \\text{ N m}$.<br>
    <strong>(a)</strong> What is the magnetic moment of the magnet?<br>
    <strong>(b)</strong> What is the work done in moving it from its most stable to most unstable position?`,
    `<p><strong>Given Data:</strong><br>
    Angle $\\theta = 30^\\circ$<br>
    External magnetic field $B = 800 \\text{ G} = 800 \\times 10^{-4} \\text{ T} = 0.08 \\text{ T}$<br>
    Torque $\\tau = 0.016 \\text{ N m}$</p>

    <p><strong>(a) Magnetic Moment $M$:</strong><br>
    The torque on a magnetic dipole is:
    \\[
    \\tau = M B \\sin \\theta
    \\]
    \\[
    M = \\frac{\\tau}{B \\sin \\theta} = \\frac{0.016}{0.08 \\times \\sin 30^\\circ} = \\frac{0.016}{0.08 \\times 0.5} = \\frac{0.016}{0.04} = 0.40 \\text{ J T}^{-1} \\text{ (or A m}^2\\text{)}
    \\]</p>

    <p><strong>(b) Work Done from Most Stable to Most Unstable Position:</strong><br>
    • Most stable position: $\\theta_1 = 0^\\circ$<br>
    • Most unstable position: $\\theta_2 = 180^\\circ$<br>
    Work done $W$ against the magnetic torque:
    \\[
    W = -M B (\\cos \\theta_2 - \\cos \\theta_1) = M B (\\cos 0^\\circ - \\cos 180^\\circ)
    \\]
    \\[
    W = M B [1 - (-1)] = 2 M B
    \\]
    \\[
    W = 2 \\times 0.40 \\times 0.08 = 0.064 \\text{ J} = 6.4 \\times 10^{-2} \\text{ J}
    \\]</p>`,
    "2 Marks",
    [
      ["Formula $\\tau = MB\\sin\\theta$ and calculation of $M = 0.40\\text{ A m}^2$", "1 Mark"],
      ["Formula $W = 2MB$ and calculation of $W = 0.064\\text{ J}$", "1 Mark"]
    ]
  ),

  // 5.4
  createQCard(
    "c12p-ch5-q4",
    "Q 5.4",
    "Exercise 5.4",
    `A short bar magnet of magnetic moment $m = 0.32 \\text{ J T}^{-1}$ is placed in a uniform magnetic field of $0.15 \\text{ T}$. If the bar is in the plane of the field, find the work done in turning the magnet from its:<br>
    <strong>(a)</strong> most stable to most unstable position,<br>
    <strong>(b)</strong> what is the potential energy of the magnet in each of these positions?`,
    `<p><strong>Given:</strong><br>
    Magnetic moment $M = 0.32 \\text{ J T}^{-1}$<br>
    Uniform magnetic field $B = 0.15 \\text{ T}$</p>

    <p><strong>(a) Work Done in Turning from Most Stable to Most Unstable Position:</strong><br>
    Stable orientation: $\\theta_1 = 0^\\circ$ (aligned with $\\mathbf{B}$)<br>
    Unstable orientation: $\\theta_2 = 180^\\circ$ (antiparallel to $\\mathbf{B}$)<br>
    \\[
    W = -M B (\\cos 180^\\circ - \\cos 0^\\circ) = M B [1 - (-1)] = 2 M B
    \\]
    \\[
    W = 2 \\times 0.32 \\times 0.15 = 0.096 \\text{ J} = 9.6 \\times 10^{-2} \\text{ J}
    \\]</p>

    <p><strong>(b) Potential Energy in Each Case:</strong><br>
    The potential energy of a dipole in a magnetic field is given by:
    \\[
    U = -\\mathbf{M} \\cdot \\mathbf{B} = -M B \\cos \\theta
    \\]
    1. <strong>In Most Stable State ($\\theta = 0^\\circ$):</strong>
    \\[
    U_{stable} = -0.32 \\times 0.15 \\times \\cos 0^\\circ = -0.048 \\text{ J} = -4.8 \\times 10^{-2} \\text{ J}
    \\]
    2. <strong>In Most Unstable State ($\\theta = 180^\\circ$):</strong>
    \\[
    U_{unstable} = -0.32 \\times 0.15 \\times \\cos 180^\\circ = +0.048 \\text{ J} = +4.8 \\times 10^{-2} \\text{ J}
    \\]</p>`,
    "2 Marks",
    [
      ["Calculation of Work Done $W = 2MB = 0.096\\text{ J}$", "1 Mark"],
      ["Calculations of Potential Energy $U_{min} = -0.048\\text{ J}$ and $U_{max} = +0.048\\text{ J}$", "1 Mark"]
    ]
  ),

  // 5.5
  createQCard(
    "c12p-ch5-q5",
    "Q 5.5",
    "Exercise 5.5",
    `A closely wound solenoid of 800 turns and area of cross section $2.5 \\times 10^{-4} \\text{ m}^2$ carries a current of $3.0 \\text{ A}$. Explain the sense in which the solenoid acts like a bar magnet. What is its associated magnetic moment?`,
    `<p><strong>Equivalence of Solenoid and Bar Magnet:</strong><br>
    A finite current-carrying solenoid produces magnetic field lines that emerge from one face (which acts as a North magnetic pole) and curl back into the opposite face (which acts as a South magnetic pole). Inside the solenoid, the field lines run from South to North, forming continuous closed loops identical to the magnetic field pattern of a bar magnet. Along its axis at large distances, it creates an identical magnetic field:
    \\[
    B_{axial} = \\frac{\\mu_0}{4\\pi} \\frac{2M}{r^3}
    \\]</p>

    <p><strong>Calculation of Associated Magnetic Moment $M$:</strong><br>
    Given:<br>
    Number of turns $N = 800$<br>
    Area of cross-section $A = 2.5 \\times 10^{-4} \\text{ m}^2$<br>
    Current $I = 3.0 \\text{ A}$</p>
    \\[
    M = N I A
    \\]
    \\[
    M = 800 \\times 3.0 \\times 2.5 \\times 10^{-4} = 2400 \\times 2.5 \\times 10^{-4} = 0.60 \\text{ J T}^{-1} \\text{ (or A m}^2\\text{)}
    \\]
    <p><strong>Direction:</strong> The magnetic moment vector points along the axis of the solenoid from the South face to the North face, determined by the right-hand grip rule.</p>`,
    "2 Marks",
    [
      ["Physical explanation of field pattern equivalence (loops, axial field)", "1 Mark"],
      ["Formula $M = NIA$ and calculation $M = 0.60\\text{ A m}^2$", "1 Mark"]
    ]
  ),

  // 5.6
  createQCard(
    "c12p-ch5-q6",
    "Q 5.6",
    "Exercise 5.6",
    `If the solenoid in Exercise 5.5 is free to turn about the vertical direction and a uniform horizontal magnetic field of $0.25 \\text{ T}$ is applied, what is the magnitude of torque on the solenoid when its axis makes an angle of $30^\\circ$ with the direction of applied field?`,
    `<p><strong>Given:</strong><br>
    From Exercise 5.5, magnetic moment $M = 0.60 \\text{ J T}^{-1}$<br>
    External magnetic field $B = 0.25 \\text{ T}$<br>
    Angle between magnetic moment and field $\\theta = 30^\\circ$</p>

    <p><strong>Calculation of Torque:</strong><br>
    The magnitude of torque on the magnetic dipole is:
    \\[
    \\tau = M B \\sin \\theta
    \\]
    \\[
    \\tau = 0.60 \\times 0.25 \\times \\sin 30^\\circ
    \\]
    \\[
    \\tau = 0.15 \\times 0.5 = 0.075 \\text{ N m} = 7.5 \\times 10^{-2} \\text{ N m}
    \\]
    <p><strong>Direction:</strong> The torque acts in such a direction as to rotate the solenoid axis into alignment with the external magnetic field direction (tending to reduce $\\theta$ to zero).</p>`,
    "2 Marks",
    [
      ["Formula $\\tau = MB\\sin\\theta$ with substitution", "1 Mark"],
      ["Final calculation $\\tau = 0.075\\text{ N m}$ with proper units and direction", "1 Mark"]
    ]
  ),

  // 5.7
  createQCard(
    "c12p-ch5-q7",
    "Q 5.7",
    "Exercise 5.7",
    `A bar magnet of magnetic moment $1.5 \\text{ J T}^{-1}$ lies aligned with the direction of a uniform magnetic field of $0.22 \\text{ T}$.<br>
    <strong>(a)</strong> What is the amount of work required by an external torque to turn the magnet so as to align its magnetic moment:<br>
    &nbsp;&nbsp;&nbsp;&nbsp;(i) normal to the field direction,<br>
    &nbsp;&nbsp;&nbsp;&nbsp;(ii) opposite to the field direction?<br>
    <strong>(b)</strong> What is the torque on the magnet in cases (i) and (ii)?`,
    `<p><strong>Given:</strong><br>
    Magnetic moment $M = 1.5 \\text{ J T}^{-1}$<br>
    Magnetic field $B = 0.22 \\text{ T}$<br>
    Initial orientation $\\theta_1 = 0^\\circ$</p>

    <p><strong>(a) Work Required by External Torque:</strong><br>
    Work done is given by: $W = -M B (\\cos \\theta_2 - \\cos \\theta_1) = M B (\\cos 0^\\circ - \\cos \\theta_2)$<br>
    Here $M B = 1.5 \\times 0.22 = 0.33 \\text{ J}$.</p>
    <p><strong>(i) Normal to field direction ($\\theta_2 = 90^\\circ$):</strong><br>
    \\[
    W = 0.33 (\\cos 0^\\circ - \\cos 90^\\circ) = 0.33 (1 - 0) = 0.33 \\text{ J}
    \\]</p>
    <p><strong>(ii) Opposite to field direction ($\\theta_2 = 180^\\circ$):</strong><br>
    \\[
    W = 0.33 (\\cos 0^\\circ - \\cos 180^\\circ) = 0.33 (1 - (-1)) = 0.33 \\times 2 = 0.66 \\text{ J}
    \\]</p>

    <p><strong>(b) Magnitude of Torque:</strong><br>
    \\[
    \\tau = M B \\sin \\theta_2
    \\]
    <strong>(i) At $\\theta_2 = 90^\\circ$:</strong><br>
    \\[
    \\tau = 1.5 \\times 0.22 \\times \\sin 90^\\circ = 0.33 \\text{ N m}
    \\]
    (Directing the magnet back towards alignment $\\theta = 0^\\circ$).</p>
    <p><strong>(ii) At $\\theta_2 = 180^\\circ$:</strong><br>
    \\[
    \\tau = 1.5 \\times 0.22 \\times \\sin 180^\\circ = 0 \\text{ N m}
    \\]</p>`,
    "3 Marks",
    [
      ["Work calculations for (i) $0.33\\text{ J}$ and (ii) $0.66\\text{ J}$", "1.5 Marks"],
      ["Torque calculations for (i) $0.33\\text{ N m}$ and (ii) $0\\text{ N m}$", "1.5 Marks"]
    ]
  ),

  // 5.8
  createQCard(
    "c12p-ch5-q8",
    "Q 5.8",
    "Exercise 5.8",
    `A closely wound solenoid of 2000 turns and area of cross-section $1.6 \\times 10^{-4} \\text{ m}^2$, carrying a current of $4.0 \\text{ A}$, is suspended through its centre allowing it to turn in a horizontal plane.<br>
    <strong>(a)</strong> What is the magnetic moment associated with the solenoid?<br>
    <strong>(b)</strong> What is the force and torque on the solenoid if a uniform horizontal magnetic field of $7.5 \\times 10^{-2} \\text{ T}$ is set up at an angle of $30^\\circ$ with the axis of the solenoid?`,
    `<p><strong>Given:</strong><br>
    Number of turns $N = 2000$<br>
    Cross-sectional area $A = 1.6 \\times 10^{-4} \\text{ m}^2$<br>
    Current $I = 4.0 \\text{ A}$<br>
    External field $B = 7.5 \\times 10^{-2} \\text{ T}$<br>
    Angle $\\theta = 30^\\circ$</p>

    <p><strong>(a) Magnetic Moment $M$:</strong><br>
    \\[
    M = N I A = 2000 \\times 4.0 \\times 1.6 \\times 10^{-4} = 1.28 \\text{ J T}^{-1} \\text{ (or A m}^2\\text{)}
    \\]</p>

    <p><strong>(b) Force and Torque on Solenoid:</strong><br>
    1. <strong>Net Force:</strong><br>
    In a uniform magnetic field, the net translatory force on any closed current loop or dipole is <strong>zero</strong> ($\mathbf{F}_{net} = 0$).</p>
    <p>2. <strong>Torque:</strong><br>
    \\[
    \\tau = M B \\sin \\theta = 1.28 \\times (7.5 \\times 10^{-2}) \\times \\sin 30^\\circ
    \\]
    \\[
    \\tau = 1.28 \\times 0.075 \\times 0.5 = 0.048 \\text{ N m} = 4.8 \\times 10^{-2} \\text{ N m}
    \\]
    The direction of torque tends to align the axis of the solenoid with the external magnetic field.</p>`,
    "2 Marks",
    [
      ["Calculation of magnetic moment $M = 1.28\\text{ A m}^2$", "1 Mark"],
      ["Net force = 0 and torque $\\tau = 0.048\\text{ N m}$", "1 Mark"]
    ]
  ),

  // 5.9
  createQCard(
    "c12p-ch5-q9",
    "Q 5.9",
    "Exercise 5.9",
    `A circular coil of 16 turns and radius $10 \\text{ cm}$ carrying a current of $0.75 \\text{ A}$ rests with its plane normal to an external field of magnitude $5.0 \\times 10^{-2} \\text{ T}$. The coil is free to turn about an axis in its plane perpendicular to the field direction. When the coil is turned slightly and released, it oscillates about its stable equilibrium with a frequency of $2.0 \\text{ s}^{-1}$. What is the moment of inertia of the coil about its axis of rotation?`,
    `<p><strong>Given:</strong><br>
    Number of turns $N = 16$<br>
    Radius $r = 10 \\text{ cm} = 0.1 \\text{ m}$<br>
    Current $I = 0.75 \\text{ A}$<br>
    Area of coil $A = \\pi r^2 = \\pi (0.1)^2 = 0.01\\pi \\text{ m}^2$<br>
    Magnetic field $B = 5.0 \\times 10^{-2} \\text{ T}$<br>
    Frequency of oscillation $\\nu = 2.0 \\text{ s}^{-1} \\implies T = \\frac{1}{\\nu} = 0.5 \\text{ s}$</p>

    <p><strong>Step 1: Magnetic Dipole Moment of Coil $M$:</strong><br>
    \\[
    M = N I A = 16 \\times 0.75 \\times (\\pi \\times 0.01) = 0.12 \\pi = 0.377 \\text{ J T}^{-1}
    \\]</p>

    <p><strong>Step 2: Time Period of Dipole in Magnetic Field:</strong><br>
    The restoring torque for small angular displacement $\\theta$ is $\\tau = -M B \\sin \\theta \\approx -M B \\theta = I_{rot} \\frac{d^2\\theta}{dt^2}$.<br>
    Angular frequency $\\omega = \\sqrt{\\frac{M B}{I_{rot}}}$, so the frequency is:
    \\[
    \\nu = \\frac{1}{2\\pi} \\sqrt{\\frac{M B}{I_{rot}}}
    \\]
    Squaring both sides:
    \\[
    \\nu^2 = \\frac{M B}{4\\pi^2 I_{rot}} \\implies I_{rot} = \\frac{M B}{4\\pi^2 \\nu^2}
    \\]</p>

    <p><strong>Step 3: Calculating Moment of Inertia $I_{rot}$:</strong><br>
    \\[
    I_{rot} = \\frac{(0.12\\pi) \\times (5.0 \\times 10^{-2})}{4\\pi^2 \\times (2.0)^2} = \\frac{0.60 \\times 10^{-2} \\pi}{16 \\pi^2} = \\frac{0.60 \\times 10^{-2}}{16 \\pi}
    \\]
    \\[
    I_{rot} = \\frac{6.0 \\times 10^{-3}}{50.265} \\approx 1.19 \\times 10^{-4} \\text{ kg m}^2
    \\]</p>`,
    "3 Marks",
    [
      ["Calculation of magnetic moment $M = 0.377\\text{ J T}^{-1}$", "1 Mark"],
      ["Formula for oscillation frequency $\\nu = \\frac{1}{2\\pi}\\sqrt{\\frac{MB}{I_{rot}}}$", "1 Mark"],
      ["Accurate substitution and value $I_{rot} \\approx 1.2 \\times 10^{-4}\\text{ kg m}^2$", "1 Mark"]
    ]
  ),

  // 5.10
  createQCard(
    "c12p-ch5-q10",
    "Q 5.10",
    "Exercise 5.10",
    `A magnetic needle free to rotate in a vertical plane parallel to the magnetic meridian has its north tip pointing down at $22^\\circ$ with the horizontal. The horizontal component of the earth’s magnetic field at the place is known to be $0.35 \\text{ G}$. Determine the magnitude of the earth’s magnetic field at the place.`,
    `<p><strong>Given:</strong><br>
    Angle of dip $\\delta = 22^\\circ$<br>
    Horizontal component $B_H = 0.35 \\text{ G} = 0.35 \\times 10^{-4} \\text{ T}$</p>

    <p><strong>Formula:</strong><br>
    The relation between earth's total magnetic field $B_E$ and its horizontal component $B_H$ is:
    \\[
    B_H = B_E \\cos \\delta \\implies B_E = \\frac{B_H}{\\cos \\delta}
    \\]</p>

    <p><strong>Calculation:</strong><br>
    $\\cos 22^\\circ \\approx 0.9272$<br>
    \\[
    B_E = \\frac{0.35 \\text{ G}}{0.9272} \\approx 0.3775 \\text{ G} \\approx 0.38 \\text{ G}
    \\]
    In SI units:
    \\[
    B_E = 3.8 \\times 10^{-5} \\text{ T}
    \\]</p>`,
    "2 Marks",
    [
      ["Relation $B_H = B_E \\cos \\delta$", "1 Mark"],
      ["Calculation $B_E \\approx 0.38\\text{ G} = 3.8 \\times 10^{-5}\\text{ T}$", "1 Mark"]
    ]
  ),

  // 5.11
  createQCard(
    "c12p-ch5-q11",
    "Q 5.11",
    "Exercise 5.11",
    `At a certain location in Africa, a compass points $12^\\circ$ west of the geographic north. The north tip of the magnetic needle of a dip circle placed in the plane of magnetic meridian points $60^\\circ$ above the horizontal. The horizontal component of the earth’s field is measured to be $0.16 \\text{ G}$. Specify the direction and magnitude of the earth’s field at the location.`,
    `<p><strong>Given:</strong><br>
    Magnetic declination $D = 12^\\circ \\text{ West}$<br>
    Angle of dip $\\delta = 60^\\circ$ (above horizontal, pointing upwards)<br>
    Horizontal component $B_H = 0.16 \\text{ G} = 0.16 \\times 10^{-4} \\text{ T}$</p>

    <p><strong>Magnitude of Earth’s Magnetic Field $B_E$:</strong><br>
    \\[
    B_H = B_E \\cos \\delta \\implies B_E = \\frac{B_H}{\\cos \\delta}
    \\]
    \\[
    B_E = \\frac{0.16 \\text{ G}}{\\cos 60^\\circ} = \\frac{0.16}{0.5} = 0.32 \\text{ G} = 3.2 \\times 10^{-5} \\text{ T}
    \\]</p>

    <p><strong>Direction of Earth’s Magnetic Field:</strong><br>
    The field lies in a vertical plane making an angle of $12^\\circ$ West with the geographic meridian, and makes an angle of $60^\\circ$ upward with the horizontal direction.</p>`,
    "2 Marks",
    [
      ["Calculation of field magnitude $B_E = 0.32\\text{ G}$", "1 Mark"],
      ["Complete specification of direction (meridian declination $12^\\circ\\text{ W}$, dip $60^\\circ$ above horizontal)", "1 Mark"]
    ]
  ),

  // 5.12
  createQCard(
    "c12p-ch5-q12",
    "Q 5.12",
    "Exercise 5.12",
    `A short bar magnet has a magnetic moment of $0.48 \\text{ J T}^{-1}$. Give the direction and magnitude of the magnetic field produced by the magnet at a distance of $10 \\text{ cm}$ from the centre of the magnet on:<br>
    <strong>(a)</strong> the axis,<br>
    <strong>(b)</strong> the equatorial lines (normal bisector) of the magnet.`,
    `<p><strong>Given:</strong><br>
    Magnetic moment $M = 0.48 \\text{ J T}^{-1}$<br>
    Distance $r = 10 \\text{ cm} = 0.1 \\text{ m}$<br>
    $\\frac{\\mu_0}{4\\pi} = 10^{-7} \\text{ T m A}^{-1}$</p>

    <p><strong>(a) On the Axis of the Magnet ($B_{axial}$):</strong><br>
    For a short bar magnet:
    \\[
    B_{axial} = \\frac{\\mu_0}{4\\pi} \\frac{2M}{r^3}
    \\]
    \\[
    B_{axial} = 10^{-7} \\times \\frac{2 \\times 0.48}{(0.1)^3} = 10^{-7} \\times \\frac{0.96}{10^{-3}} = 0.96 \\times 10^{-4} \\text{ T} = 0.96 \\text{ G}
    \\]
    <strong>Direction:</strong> Directed along the axis from South pole to North pole (along $\\mathbf{M}$).</p>

    <p><strong>(b) On the Equatorial Line ($B_{eq}$):</strong><br>
    \\[
    B_{eq} = \\frac{\\mu_0}{4\\pi} \\frac{M}{r^3} = \\frac{1}{2} B_{axial}
    \\]
    \\[
    B_{eq} = 10^{-7} \\times \\frac{0.48}{(0.1)^3} = 0.48 \\times 10^{-4} \\text{ T} = 0.48 \\text{ G}
    \\]
    <strong>Direction:</strong> Directed parallel to the axis from North pole to South pole (antiparallel to $\\mathbf{M}$).</p>`,
    "3 Marks",
    [
      ["Formula and calculation of $B_{axial} = 0.96 \\times 10^{-4}\\text{ T}$ with direction", "1.5 Marks"],
      ["Formula and calculation of $B_{eq} = 0.48 \\times 10^{-4}\\text{ T}$ with direction", "1.5 Marks"]
    ]
  ),

  // 5.13
  createQCard(
    "c12p-ch5-q13",
    "Q 5.13",
    "Exercise 5.13",
    `A short bar magnet placed in a horizontal plane has its axis aligned along the magnetic north-south direction. Null points are found on the axis of the magnet at $14 \\text{ cm}$ from the centre of the magnet. The earth’s magnetic field at the place is $0.36 \\text{ G}$ and the angle of dip is zero. What is the total magnetic field on the normal bisector of the magnet at the same distance ($14 \\text{ cm}$) from the centre of the magnet?`,
    `<p><strong>Understanding Null Points:</strong><br>
    When null points lie on the axis of the magnet, the field of the magnet is opposite to the earth's horizontal field $B_H$. Since $B_H$ is directed from South to North, the magnet's axial field must point from North to South. This means the magnet's North pole points towards geographic/magnetic North.</p>

    <p><strong>Condition at Null Point on Axis ($d = 14 \\text{ cm}$):</strong><br>
    \\[
    B_{axial} = B_H \\implies \\frac{\\mu_0}{4\\pi} \\frac{2M}{d^3} = 0.36 \\text{ G}
    \\]</p>

    <p><strong>Field on the Equatorial Line (Normal Bisector) at same distance:</strong><br>
    The magnitude of the equatorial field due to the magnet is:
    \\[
    B_{eq} = \\frac{B_{axial}}{2} = \\frac{0.36 \\text{ G}}{2} = 0.18 \\text{ G}
    \\]
    <strong>Direction of $B_{eq}$:</strong> For a North-pointing magnet, the equatorial field points in the same direction as the Earth's field $B_H$ (from South to North).</p>

    <p><strong>Total Magnetic Field on Normal Bisector:</strong><br>
    Both $B_{eq}$ and $B_H$ are directed along the same direction (magnetic South to North):
    \\[
    B_{total} = B_{eq} + B_H = 0.18 \\text{ G} + 0.36 \\text{ G} = 0.54 \\text{ G}
    \\]
    \\[
    B_{total} = 5.4 \\times 10^{-5} \\text{ T} \\quad \\text{in the direction of earth's magnetic field.}
    \\]</p>`,
    "3 Marks",
    [
      ["Condition for null point $B_{axial} = B_H = 0.36\\text{ G}$", "1 Mark"],
      ["Equatorial field magnitude $B_{eq} = B_{axial}/2 = 0.18\\text{ G}$", "1 Mark"],
      ["Vector addition $B_{total} = B_{eq} + B_H = 0.54\\text{ G}$ with direction", "1 Mark"]
    ]
  ),

  // 5.14
  createQCard(
    "c12p-ch5-q14",
    "Q 5.14",
    "Exercise 5.14",
    `If the bar magnet in exercise 5.13 is turned around by $180^\\circ$, where will the new null points be located?`,
    `<p><strong>Analysis:</strong><br>
    When the magnet is turned around by $180^\\circ$, its North pole now points towards the magnetic South.<br>
    In this orientation:
    • Along the axis, the magnet's field points along $B_H$ (no cancellation possible on axis).<br>
    • Along the broadside-on position (equatorial line / normal bisector), the magnet's field is opposite to $B_H$. Therefore, the new null points will lie on the <strong>equatorial line</strong>.</p>

    <p><strong>Condition for Null Point on Equatorial Line at distance $d'$:</strong><br>
    \\[
    B_{eq}' = B_H
    \\]
    \\[
    \\frac{\\mu_0}{4\\pi} \\frac{M}{(d')^3} = B_H
    \\]
    From Exercise 5.13, we had null point on axis at $d = 14 \\text{ cm}$:
    \\[
    \\frac{\\mu_0}{4\\pi} \\frac{2M}{d^3} = B_H
    \\]
    Equating both:
    \\[
    \\frac{\\mu_0}{4\\pi} \\frac{M}{(d')^3} = \\frac{\\mu_0}{4\\pi} \\frac{2M}{d^3}
    \\]
    \\[
    \\frac{1}{(d')^3} = \\frac{2}{d^3} \\implies d' = \\frac{d}{2^{1/3}}
    \\]
    Given $d = 14 \\text{ cm}$ and $2^{1/3} \\approx 1.26$:
    \\[
    d' = \\frac{14 \\text{ cm}}{1.26} \\approx 11.1 \\text{ cm}
    \\]
    <p><strong>Result:</strong> Null points will lie on the normal bisector (equatorial line) of the magnet at a distance of approximately $11.1 \\text{ cm}$ on either side of the centre.</p>`,
    "2 Marks",
    [
      ["Identification of equatorial line for new null points", "1 Mark"],
      ["Relation $d' = d / 2^{1/3}$ and calculation $d' \\approx 11.1\\text{ cm}$", "1 Mark"]
    ]
  ),

  // 5.15
  createQCard(
    "c12p-ch5-q15",
    "Q 5.15",
    "Exercise 5.15",
    `A magnetic dipole is under the influence of two magnetic fields. The angle between the field directions is $60^\\circ$, and one of the fields has a magnitude of $1.2 \\times 10^{-2} \\text{ T}$. If the dipole comes to stable equilibrium at an angle of $15^\\circ$ with this field, what is the magnitude of the other field?`,
    `<p><strong>Given:</strong><br>
    Angle between fields $\\theta = 60^\\circ$<br>
    Field $B_1 = 1.2 \\times 10^{-2} \\text{ T}$<br>
    Dipole makes an angle $\\theta_1 = 15^\\circ$ with field $\\mathbf{B}_1$.<br>
    Therefore, dipole makes angle with $\\mathbf{B}_2$ equal to:
    \\[
    \\theta_2 = 60^\\circ - 15^\\circ = 45^\\circ
    \\]</p>

    <p><strong>Equilibrium Condition:</strong><br>
    For stable equilibrium, the net torque on the dipole must be zero:
    \\[
    \\boldsymbol{\\tau}_1 + \\boldsymbol{\\tau}_2 = 0 \\implies |\\boldsymbol{\\tau}_1| = |\\boldsymbol{\\tau}_2|
    \\]
    \\[
    M B_1 \\sin \\theta_1 = M B_2 \\sin \\theta_2
    \\]
    Cancelling magnetic dipole moment $M$:
    \\[
    B_2 = \\frac{B_1 \\sin \\theta_1}{\\sin \\theta_2}
    \\]</p>

    <p><strong>Calculation:</strong><br>
    \\[
    B_2 = \\frac{(1.2 \\times 10^{-2}) \\times \\sin 15^\\circ}{\\sin 45^\\circ}
    \\]
    Since $\\sin 15^\\circ = \\sin(45^\\circ - 30^\\circ) = \\frac{\\sqrt{6}-\\sqrt{2}}{4} \\approx 0.2588$, and $\\sin 45^\\circ = \\frac{1}{\\sqrt{2}} \\approx 0.7071$:
    \\[
    B_2 = (1.2 \\times 10^{-2}) \\times \\frac{0.2588}{0.7071} \\approx 1.2 \\times 10^{-2} \\times 0.366
    \\]
    \\[
    B_2 \\approx 4.39 \\times 10^{-3} \\text{ T} = 4.4 \\times 10^{-3} \\text{ T}
    \\]</p>`,
    "2 Marks",
    [
      ["Torque balance condition $MB_1\\sin\\theta_1 = MB_2\\sin\\theta_2$", "1 Mark"],
      ["Calculation $B_2 \\approx 4.4 \\times 10^{-3}\\text{ T}$", "1 Mark"]
    ]
  ),

  // 5.16
  createQCard(
    "c12p-ch5-q16",
    "Q 5.16",
    "Exercise 5.16",
    `A sample of paramagnetic salt contains $2.0 \\times 10^{24}$ atomic dipoles each of dipole moment $1.5 \\times 10^{-23} \\text{ J T}^{-1}$. The sample is placed under a homogeneous magnetic field of $0.64 \\text{ T}$ and cooled to a temperature of $4.2 \\text{ K}$. The degree of magnetic saturation achieved is equal to $15\\%$. What is the total dipole moment of the sample for a magnetic field of $0.98 \\text{ T}$ and a temperature of $2.8 \\text{ K}$? (Assume Curie’s law).`,
    `<p><strong>Given:</strong><br>
    Number of dipoles $N = 2.0 \\times 10^{24}$<br>
    Dipole moment of each atomic dipole $\\mu = 1.5 \\times 10^{-23} \\text{ J T}^{-1}$<br>
    Total saturation magnetic dipole moment:
    \\[
    M_{sat} = N \\mu = (2.0 \\times 10^{24}) \\times (1.5 \\times 10^{-23}) = 30 \\text{ J T}^{-1}
    \\]</p>

    <p><strong>Initial State 1:</strong><br>
    Field $B_1 = 0.64 \\text{ T}$, Temperature $T_1 = 4.2 \\text{ K}$<br>
    Degree of saturation $= 15\\%$<br>
    Initial magnetic dipole moment:
    \\[
    M_1 = 0.15 \\times M_{sat} = 0.15 \\times 30 = 4.5 \\text{ J T}^{-1}
    \\]</p>

    <p><strong>Applying Curie's Law:</strong><br>
    According to Curie’s law for paramagnetic materials, magnetization $M$ is directly proportional to applied magnetic field $B$ and inversely proportional to absolute temperature $T$:
    \\[
    M \\propto \\frac{B}{T} \\implies \\frac{M_2}{M_1} = \\frac{B_2}{B_1} \\times \\frac{T_1}{T_2}
    \\]</p>

    <p><strong>State 2:</strong><br>
    Field $B_2 = 0.98 \\text{ T}$, Temperature $T_2 = 2.8 \\text{ K}$<br>
    \\[
    M_2 = M_1 \\times \\left( \\frac{B_2}{B_1} \\right) \\times \\left( \\frac{T_1}{T_2} \\right)
    \\]
    \\[
    M_2 = 4.5 \\times \\left( \\frac{0.98}{0.64} \\right) \\times \\left( \\frac{4.2}{2.8} \\right)
    \\]
    Since $\\frac{4.2}{2.8} = 1.5$:
    \\[
    M_2 = 4.5 \\times 1.53125 \\times 1.5 = 4.5 \\times 2.2969 \\approx 10.34 \\text{ J T}^{-1}
    \\]
    <p><strong>Verification with Saturation:</strong> Since $10.34 \\text{ J T}^{-1} < 30 \\text{ J T}^{-1}$ (about $34.5\\%$ saturation), Curie's law remains valid and saturation has not occurred.</p>`,
    "3 Marks",
    [
      ["Calculation of $M_{sat} = 30\\text{ J T}^{-1}$ and $M_1 = 4.5\\text{ J T}^{-1}$", "1 Mark"],
      ["Statement and ratio formula of Curie's law $M \\propto B/T$", "1 Mark"],
      ["Calculation of new dipole moment $M_2 \\approx 10.34\\text{ J T}^{-1}$", "1 Mark"]
    ]
  )
];

saveChapter(chNum, chTitle, svgDiagram, "Exercises 5.1 to 5.16", questions, nextChTitle);
