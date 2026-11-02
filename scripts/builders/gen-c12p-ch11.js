// scripts/builders/gen-c12p-ch11.js
// Class 12 Physics - Chapter 11: Dual Nature of Radiation and Matter (20 Questions)
const { createQCard, saveChapter } = require('./c12p-helper');

const chNum = 11;
const chTitle = "Dual Nature of Radiation and Matter";
const nextChTitle = "Atoms";

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
      <text x="380" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e293b">Einstein's Photoelectric Effect ($K_{max} = h\\nu - \\Phi_0$) & de Broglie Waves ($\\lambda = \\frac{h}{p}$)</text>
      
      <!-- Photoelectric Tube schematic -->
      <rect x="70" y="60" width="220" height="120" rx="20" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
      
      <!-- Photosensitive plate C (Cathode) -->
      <rect x="100" y="80" width="10" height="80" rx="2" fill="#3b82f6"/>
      <text x="105" y="175" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#3b82f6">Emitter (C)</text>

      <!-- Collector plate A (Anode) -->
      <rect x="250" y="80" width="10" height="80" rx="2" fill="#10b981"/>
      <text x="255" y="175" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#10b981">Collector (A)</text>

      <!-- Incident photons (wavy arrows) -->
      <path d="M 60 70 Q 75 75, 95 85" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)"/>
      <path d="M 50 100 Q 70 105, 95 115" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="50" y="65" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#d97706">Photons hν</text>

      <!-- Emitted electrons -->
      <circle cx="130" cy="100" r="4" fill="#dc2626"/>
      <line x1="134" y1="100" x2="180" y2="100" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrowRed)"/>
      <circle cx="150" cy="130" r="4" fill="#dc2626"/>
      <line x1="154" y1="130" x2="210" y2="130" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrowRed)"/>
      <text x="160" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#dc2626">e⁻ ($K_{max}$)</text>

      <!-- Governing Formulae -->
      <text x="340" y="60" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b">Fundamental Equations:</text>
      <text x="340" y="85" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Photoelectric Equation: $K_{max} = e V_0 = h\\nu - \\Phi_0 = h(\\nu - \\nu_0)$</text>
      <text x="340" y="110" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Stopping Potential: $V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\Phi_0}{e}$</text>
      <text x="340" y="135" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Photon Momentum: $p = \\frac{E}{c} = \\frac{h}{\\lambda}$</text>
      <text x="340" y="160" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• de Broglie Wavelength: $\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mK}}$</text>
      <text x="340" y="185" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• For Electron: $\\lambda = \\frac{1.227}{\\sqrt{V}} \\text{ nm} = \\frac{12.27}{\\sqrt{V}} \\text{ \\AA}$</text>
    </svg>
  </div>
`;

const questions = [
  // 11.1
  createQCard(
    "c12p-ch11-q1",
    "Q 11.1",
    "Exercise 11.1",
    `Find the:<br>
    <strong>(a)</strong> maximum frequency, and<br>
    <strong>(b)</strong> minimum wavelength of X-rays produced by $30 \\text{ kV}$ electrons.`,
    `<p><strong>Given:</strong><br>
    Accelerating voltage $V = 30 \\text{ kV} = 30 \\times 10^3 \\text{ V} = 3.0 \\times 10^4 \\text{ V}$<br>
    Electronic charge $e = 1.6 \\times 10^{-19} \\text{ C}$<br>
    Planck's constant $h = 6.626 \\times 10^{-34} \\text{ J s}$<br>
    Speed of light $c = 3.0 \\times 10^8 \\text{ m s}^{-1}$</p>

    <p><strong>(a) Maximum Frequency ($\\nu_{max}$):</strong><br>
    The maximum kinetic energy of the striking electron is completely converted into a single X-ray photon (Duane-Hunt law):
    \\[
    E_{max} = e V = h \\nu_{max} \\implies \\nu_{max} = \\frac{e V}{h}
    \\]
    \\[
    \\nu_{max} = \\frac{(1.6 \\times 10^{-19} \\text{ C}) \\times (3.0 \\times 10^4 \\text{ V})}{6.626 \\times 10^{-34} \\text{ J s}} = \\frac{4.8 \\times 10^{-15}}{6.626 \\times 10^{-34}} \\approx 7.244 \\times 10^{18} \\text{ Hz}
    \\]</p>

    <p><strong>(b) Minimum (Cut-off) Wavelength ($\\lambda_{min}$):</strong><br>
    \\[
    \\lambda_{min} = \\frac{c}{\\nu_{max}} = \\frac{h c}{e V}
    \\]
    \\[
    \\lambda_{min} = \\frac{3.0 \\times 10^8 \\text{ m s}^{-1}}{7.244 \\times 10^{18} \\text{ Hz}} \\approx 0.0414 \\times 10^{-9} \\text{ m} = 0.0414 \\text{ nm} = 0.414 \\text{ \\AA}
    \\]</p>`,
    "2 Marks",
    [
      ["Formula and calculation of $\\nu_{max} = 7.24 \\times 10^{18}\\text{ Hz}$", "1 Mark"],
      ["Formula and calculation of $\\lambda_{min} = 0.0414\\text{ nm}$", "1 Mark"]
    ]
  ),

  // 11.2
  createQCard(
    "c12p-ch11-q2",
    "Q 11.2",
    "Exercise 11.2",
    `The work function of caesium metal is $2.14 \\text{ eV}$. When light of frequency $6.0 \\times 10^{14} \\text{ Hz}$ is incident on the metal surface, photoemission of electrons occurs. What is the:<br>
    <strong>(a)</strong> maximum kinetic energy of the emitted electrons,<br>
    <strong>(b)</strong> stopping potential, and<br>
    <strong>(c)</strong> maximum speed of the emitted photoelectrons?`,
    `<p><strong>Given:</strong><br>
    Work function $\\Phi_0 = 2.14 \\text{ eV}$<br>
    Frequency of incident light $\\nu = 6.0 \\times 10^{14} \\text{ Hz}$<br>
    $h = 6.626 \\times 10^{-34} \\text{ J s} = 4.136 \\times 10^{-15} \\text{ eV s}$<br>
    Electron mass $m = 9.11 \\times 10^{-31} \\text{ kg}$</p>

    <p><strong>Step 1: Energy of Incident Photon $E$:</strong><br>
    \\[
    E = h \\nu = (4.136 \\times 10^{-15} \\text{ eV s}) \\times (6.0 \\times 10^{14} \\text{ s}^{-1}) \\approx 2.482 \\text{ eV}
    \\]</p>

    <p><strong>(a) Maximum Kinetic Energy $K_{max}$:</strong><br>
    By Einstein’s photoelectric equation:
    \\[
    K_{max} = h\\nu - \\Phi_0 = 2.482 \\text{ eV} - 2.14 \\text{ eV} = 0.342 \\text{ eV} \\approx 0.34 \\text{ eV}
    \\]
    In Joules:
    \\[
    K_{max} = 0.342 \\times 1.602 \\times 10^{-19} \\text{ J} \\approx 5.48 \\times 10^{-20} \\text{ J}
    \\]</p>

    <p><strong>(b) Stopping Potential $V_0$:</strong><br>
    \\[
    e V_0 = K_{max} \\implies V_0 = \\frac{0.342 \\text{ eV}}{e} = 0.342 \\text{ V} \\approx 0.34 \\text{ V}
    \\]</p>

    <p><strong>(c) Maximum Speed $v_{max}$:</strong><br>
    \\[
    K_{max} = \\frac{1}{2} m v_{max}^2 \\implies v_{max} = \\sqrt{\\frac{2 K_{max}}{m}}
    \\]
    \\[
    v_{max} = \\sqrt{\\frac{2 \\times 5.48 \\times 10^{-20} \\text{ J}}{9.11 \\times 10^{-31} \\text{ kg}}} = \\sqrt{1.203 \\times 10^{11}} = \\sqrt{12.03 \\times 10^{10}} \\approx 3.47 \\times 10^5 \\text{ m s}^{-1}
    \\]</p>`,
    "3 Marks",
    [
      ["Calculation of $K_{max} = 0.34\\text{ eV}$", "1 Mark"],
      ["Calculation of stopping potential $V_0 = 0.34\\text{ V}$", "1 Mark"],
      ["Calculation of maximum velocity $v_{max} = 3.47 \\times 10^5\\text{ m s}^{-1}$", "1 Mark"]
    ]
  ),

  // 11.3
  createQCard(
    "c12p-ch11-q3",
    "Q 11.3",
    "Exercise 11.3",
    `The photoelectric cut-off voltage in a certain experiment is $1.5 \\text{ V}$. What is the maximum kinetic energy of photoelectrons emitted?`,
    `<p><strong>Given:</strong><br>
    Stopping (cut-off) potential $V_0 = 1.5 \\text{ V}$</p>

    <p><strong>Relationship:</strong><br>
    The stopping potential is related to maximum kinetic energy by:
    \\[
    K_{max} = e V_0
    \\]
    1. In electron-volts (eV):
    \\[
    K_{max} = 1.5 \\text{ eV}
    \\]
    2. In Joules (J):
    \\[
    K_{max} = 1.5 \\times 1.6 \\times 10^{-19} \\text{ J} = 2.4 \\times 10^{-19} \\text{ J}
    \\]</p>`,
    "1 Mark",
    [
      ["Calculation $K_{max} = 1.5\\text{ eV} = 2.4 \\times 10^{-19}\\text{ J}$", "1 Mark"]
    ]
  ),

  // 11.4
  createQCard(
    "c12p-ch11-q4",
    "Q 11.4",
    "Exercise 11.4",
    `Monochromatic light of wavelength $632.8 \\text{ nm}$ is produced by a helium-neon laser. The power emitted is $9.42 \\text{ mW}$.<br>
    <strong>(a)</strong> Find the energy and momentum of each photon in the light beam.<br>
    <strong>(b)</strong> How many photons per second, on the average, arrive at a target irradiated by this beam?<br>
    <strong>(c)</strong> How fast does a hydrogen atom have to travel in order to have the same momentum as that of the photon?`,
    `<p><strong>Given:</strong><br>
    $\\lambda = 632.8 \\text{ nm} = 6.328 \\times 10^{-7} \\text{ m}$<br>
    Power $P = 9.42 \\text{ mW} = 9.42 \\times 10^{-3} \\text{ W}$<br>
    $h = 6.626 \\times 10^{-34} \\text{ J s}$, $c = 3.0 \\times 10^8 \\text{ m s}^{-1}$<br>
    Mass of hydrogen atom $m_H = 1.673 \\times 10^{-27} \\text{ kg}$</p>

    <p><strong>(a) Energy and Momentum of Each Photon:</strong><br>
    1. Energy $E$:
    \\[
    E = \\frac{h c}{\\lambda} = \\frac{(6.626 \\times 10^{-34}) \\times (3.0 \\times 10^8)}{6.328 \\times 10^{-7}} = \\frac{1.988 \\times 10^{-25}}{6.328 \\times 10^{-7}} \\approx 3.141 \\times 10^{-19} \\text{ J} \\approx 1.96 \\text{ eV}
    \\]
    2. Momentum $p$:
    \\[
    p = \\frac{h}{\\lambda} = \\frac{6.626 \\times 10^{-34}}{6.328 \\times 10^{-7}} \\approx 1.047 \\times 10^{-27} \\text{ kg m s}^{-1}
    \\]</p>

    <p><strong>(b) Number of Photons Arriving per Second ($n$):</strong><br>
    \\[
    n = \\frac{P}{E} = \\frac{9.42 \\times 10^{-3} \\text{ W}}{3.141 \\times 10^{-19} \\text{ J}} \\approx 3.0 \\times 10^{16} \\text{ photons s}^{-1}
    \\]</p>

    <p><strong>(c) Speed of Hydrogen Atom:</strong><br>
    \\[
    p = m_H v \\implies v = \\frac{p}{m_H} = \\frac{1.047 \\times 10^{-27} \\text{ kg m s}^{-1}}{1.673 \\times 10^{-27} \\text{ kg}} \\approx 0.626 \\text{ m s}^{-1}
    \\]</p>`,
    "3 Marks",
    [
      ["Calculations of photon energy $E = 3.14 \\times 10^{-19}\\text{ J}$ and momentum $p = 1.05 \\times 10^{-27}\\text{ kg m/s}$", "1 Mark"],
      ["Photon emission rate $n = 3.0 \\times 10^{16}\\text{ photons/s}$", "1 Mark"],
      ["Speed of hydrogen atom $v = 0.63\\text{ m s}^{-1}$", "1 Mark"]
    ]
  ),

  // 11.5
  createQCard(
    "c12p-ch11-q5",
    "Q 11.5",
    "Exercise 11.5",
    `The energy flux of sunlight reaching the surface of the earth is $1.388 \\times 10^3 \\text{ W m}^{-2}$. How many photons per square metre are incident on the Earth per second? Assume that the photons in sunlight have an average wavelength of $550 \\text{ nm}$.`,
    `<p><strong>Given:</strong><br>
    Flux (Intensity) $I = 1.388 \\times 10^3 \\text{ W m}^{-2}$<br>
    Average wavelength $\\lambda = 550 \\text{ nm} = 5.5 \\times 10^{-7} \\text{ m}$<br>
    $h = 6.626 \\times 10^{-34} \\text{ J s}$, $c = 3.0 \\times 10^8 \\text{ m s}^{-1}$</p>

    <p><strong>Step 1: Energy of One Average Photon:</strong><br>
    \\[
    E = \\frac{h c}{\\lambda} = \\frac{(6.626 \\times 10^{-34}) \\times (3.0 \\times 10^8)}{5.5 \\times 10^{-7}} = \\frac{1.988 \\times 10^{-25}}{5.5 \\times 10^{-7}} \\approx 3.614 \\times 10^{-19} \\text{ J}
    \\]</p>

    <p><strong>Step 2: Number of Photons Incident per Square Metre per Second ($N$):</strong><br>
    \\[
    N = \\frac{I}{E} = \\frac{1.388 \\times 10^3 \\text{ J s}^{-1} \\text{ m}^{-2}}{3.614 \\times 10^{-19} \\text{ J}} \\approx 3.84 \\times 10^{21} \\text{ photons m}^{-2} \\text{ s}^{-1}
    \\]</p>`,
    "2 Marks",
    [
      ["Calculation of average photon energy $E = 3.614 \\times 10^{-19}\\text{ J}$", "1 Mark"],
      ["Calculation of photon flux $N = 3.84 \\times 10^{21}\\text{ photons m}^{-2}\\text{ s}^{-1}$", "1 Mark"]
    ]
  ),

  // 11.6
  createQCard(
    "c12p-ch11-q6",
    "Q 11.6",
    "Exercise 11.6",
    `In an experiment on photoelectric effect, the slope of the cut-off voltage versus frequency of incident light is found to be $4.12 \\times 10^{-15} \\text{ V s}$. Calculate the value of Planck’s constant.`,
    `<p><strong>Theoretical Relation:</strong><br>
    Einstein’s photoelectric equation written in terms of stopping potential $V_0$:
    \\[
    e V_0 = h \\nu - \\Phi_0 \\implies V_0 = \\left( \\frac{h}{e} \\right) \\nu - \\frac{\\Phi_0}{e}
    \\]
    This is a linear relation of the form $y = m x + c$ where:<br>
    Slope $m = \\frac{h}{e}$.</p>

    <p><strong>Calculation of Planck's Constant $h$:</strong><br>
    Given slope $m = 4.12 \\times 10^{-15} \\text{ V s}$ and $e = 1.602 \\times 10^{-19} \\text{ C}$:
    \\[
    h = m \\times e = (4.12 \\times 10^{-15} \\text{ V s}) \\times (1.602 \\times 10^{-19} \\text{ C}) \\approx 6.60 \\times 10^{-34} \\text{ J s}
    \\]
    <p><strong>Result:</strong> $h \\approx 6.60 \\times 10^{-34} \\text{ J s}$.</p>`,
    "2 Marks",
    [
      ["Identification of slope as $h/e$", "1 Mark"],
      ["Calculation yielding $h = 6.60 \\times 10^{-34}\\text{ J s}$", "1 Mark"]
    ]
  ),

  // 11.7
  createQCard(
    "c12p-ch11-q7",
    "Q 11.7",
    "Exercise 11.7",
    `A $100 \\text{ W}$ sodium lamp radiates energy uniformly in all directions. The lamp is located at the centre of a large sphere that absorbs all the sodium light which is incident on it. The wavelength of the sodium light is $589 \\text{ nm}$.<br>
    <strong>(a)</strong> What is the energy per photon associated with the sodium light?<br>
    <strong>(b)</strong> At what rate are the photons delivered to the sphere?`,
    `<p><strong>Given:</strong><br>
    Power $P = 100 \\text{ W}$<br>
    $\\lambda = 589 \\text{ nm} = 5.89 \\times 10^{-7} \\text{ m}$</p>

    <p><strong>(a) Energy per Photon:</strong><br>
    \\[
    E = \\frac{h c}{\\lambda} = \\frac{(6.626 \\times 10^{-34} \\text{ J s}) \\times (3.0 \\times 10^8 \\text{ m s}^{-1})}{5.89 \\times 10^{-7} \\text{ m}} = \\frac{1.988 \\times 10^{-25}}{5.89 \\times 10^{-7}} \\approx 3.375 \\times 10^{-19} \\text{ J}
    \\]
    In electron-volts:
    \\[
    E = \\frac{3.375 \\times 10^{-19}}{1.602 \\times 10^{-19}} \\approx 2.11 \\text{ eV}
    \\]</p>

    <p><strong>(b) Rate of Delivery of Photons ($N$):</strong><br>
    \\[
    N = \\frac{P}{E} = \\frac{100 \\text{ W}}{3.375 \\times 10^{-19} \\text{ J}} \\approx 2.96 \\times 10^{20} \\text{ photons s}^{-1}
    \\]</p>`,
    "2 Marks",
    [
      ["Photon energy calculation $E = 3.38 \\times 10^{-19}\\text{ J} = 2.11\\text{ eV}$", "1 Mark"],
      ["Rate of photons $N = 2.96 \\times 10^{20}\\text{ photons s}^{-1}$", "1 Mark"]
    ]
  ),

  // 11.8
  createQCard(
    "c12p-ch11-q8",
    "Q 11.8",
    "Exercise 11.8",
    `The threshold frequency for a certain metal is $3.3 \\times 10^{14} \\text{ Hz}$. If light of frequency $8.2 \\times 10^{14} \\text{ Hz}$ is incident on the metal, predict the cut-off voltage for the photoelectric emission.`,
    `<p><strong>Given:</strong><br>
    Threshold frequency $\\nu_0 = 3.3 \\times 10^{14} \\text{ Hz}$<br>
    Incident frequency $\\nu = 8.2 \\times 10^{14} \\text{ Hz}$<br>
    $h = 6.626 \\times 10^{-34} \\text{ J s}$, $e = 1.602 \\times 10^{-19} \\text{ C}$</p>

    <p><strong>Photoelectric Equation:</strong><br>
    \\[
    e V_0 = h (\\nu - \\nu_0) \\implies V_0 = \\frac{h}{e} (\\nu - \\nu_0)
    \\]
    Frequency difference:
    \\[
    \\nu - \\nu_0 = (8.2 - 3.3) \\times 10^{14} = 4.9 \\times 10^{14} \\text{ Hz}
    \\]
    Cut-off voltage:
    \\[
    V_0 = \\frac{(6.626 \\times 10^{-34}) \\times (4.9 \\times 10^{14})}{1.602 \\times 10^{-19}} = \\frac{3.247 \\times 10^{-19}}{1.602 \\times 10^{-19}} \\approx 2.027 \\text{ V} \\approx 2.03 \\text{ V}
    \\]</p>`,
    "2 Marks",
    [
      ["Formula $V_0 = \\frac{h}{e}(\\nu - \\nu_0)$", "1 Mark"],
      ["Evaluation $V_0 = 2.03\\text{ V}$", "1 Mark"]
    ]
  ),

  // 11.9
  createQCard(
    "c12p-ch11-q9",
    "Q 11.9",
    "Exercise 11.9",
    `The work function for a certain metal is $4.2 \\text{ eV}$. Will this metal give photoelectric emission for incident radiation of wavelength $330 \\text{ nm}$?`,
    `<p><strong>Given:</strong><br>
    Work function $\\Phi_0 = 4.2 \\text{ eV}$<br>
    Wavelength $\\lambda = 330 \\text{ nm} = 3300 \\text{ \\AA}$</p>

    <p><strong>Step 1: Calculate Energy of Incident Photon $E$:</strong><br>
    \\[
    E = \\frac{h c}{\\lambda} = \\frac{12400 \\text{ eV \\AA}}{3300 \\text{ \\AA}} \\approx 3.76 \\text{ eV}
    \\]
    Alternatively in Joules:
    \\[
    E = \\frac{(6.626 \\times 10^{-34}) \\times (3.0 \\times 10^8)}{3.3 \\times 10^{-7}} = 6.024 \\times 10^{-19} \\text{ J} = \\frac{6.024 \\times 10^{-19}}{1.602 \\times 10^{-19}} = 3.76 \\text{ eV}
    \\]</p>

    <p><strong>Step 2: Comparison with Work Function:</strong><br>
    For photoelectric emission to occur, the incident photon energy must exceed or equal the work function ($E \\ge \\Phi_0$).<br>
    Here $E = 3.76 \\text{ eV} < \\Phi_0 = 4.2 \\text{ eV}$.<br>
    <p><strong>Conclusion:</strong> <strong>No</strong>, photoelectric emission will NOT take place.</p>`,
    "2 Marks",
    [
      ["Calculation of photon energy $E = 3.76\\text{ eV}$", "1 Mark"],
      ["Comparison $E < \\Phi_0$ and conclusion: No emission", "1 Mark"]
    ]
  ),

  // 11.10
  createQCard(
    "c12p-ch11-q10",
    "Q 11.10",
    "Exercise 11.10",
    `Light of frequency $7.21 \\times 10^{14} \\text{ Hz}$ is incident on a metal surface. Electrons with a maximum speed of $6.0 \\times 10^5 \\text{ m s}^{-1}$ are ejected from the surface. What is the threshold frequency for photoemission of electrons?`,
    `<p><strong>Given:</strong><br>
    Incident frequency $\\nu = 7.21 \\times 10^{14} \\text{ Hz}$<br>
    Maximum velocity $v_{max} = 6.0 \\times 10^5 \\text{ m s}^{-1}$<br>
    $m = 9.11 \\times 10^{-31} \\text{ kg}$, $h = 6.626 \\times 10^{-34} \\text{ J s}$</p>

    <p><strong>Step 1: Maximum Kinetic Energy:</strong><br>
    \\[
    K_{max} = \\frac{1}{2} m v_{max}^2 = \\frac{1}{2} \\times (9.11 \\times 10^{-31}) \\times (6.0 \\times 10^5)^2 = \\frac{1}{2} \\times (9.11 \\times 10^{-31}) \\times (3.6 \\times 10^{11}) = 1.6398 \\times 10^{-19} \\text{ J}
    \\]</p>

    <p><strong>Step 2: Threshold Frequency ($\\nu_0$):</strong><br>
    From $K_{max} = h\\nu - h\\nu_0 \\implies h\\nu_0 = h\\nu - K_{max}$:
    \\[
    \\nu_0 = \\nu - \\frac{K_{max}}{h}
    \\]
    \\[
    \\frac{K_{max}}{h} = \\frac{1.6398 \\times 10^{-19} \\text{ J}}{6.626 \\times 10^{-34} \\text{ J s}} \\approx 2.475 \\times 10^{14} \\text{ Hz}
    \\]
    \\[
    \\nu_0 = 7.21 \\times 10^{14} - 2.475 \\times 10^{14} = 4.735 \\times 10^{14} \\text{ Hz} \\approx 4.74 \\times 10^{14} \\text{ Hz}
    \\]</p>`,
    "3 Marks",
    [
      ["Calculation of $K_{max} = 1.64 \\times 10^{-19}\\text{ J}$", "1 Mark"],
      ["Formula $\\nu_0 = \\nu - K_{max}/h$", "1 Mark"],
      ["Final calculation $\\nu_0 = 4.74 \\times 10^{14}\\text{ Hz}$", "1 Mark"]
    ]
  ),

  // 11.11
  createQCard(
    "c12p-ch11-q11",
    "Q 11.11",
    "Exercise 11.11",
    `Light of wavelength $488 \\text{ nm}$ is produced by an argon laser which is used in the photoelectric effect. When light from this spectral line is incident on the emitter, the stopping (cut-off) potential of photoelectrons is $0.38 \\text{ V}$. Find the work function of the material from which the emitter is made.`,
    `<p><strong>Given:</strong><br>
    $\\lambda = 488 \\text{ nm} = 4.88 \\times 10^{-7} \\text{ m}$<br>
    Stopping potential $V_0 = 0.38 \\text{ V} \\implies K_{max} = 0.38 \\text{ eV}$</p>

    <p><strong>Step 1: Energy of Incident Photon:</strong><br>
    \\[
    E = \\frac{h c}{\\lambda} = \\frac{(6.626 \\times 10^{-34}) \\times (3.0 \\times 10^8)}{4.88 \\times 10^{-7}} = \\frac{1.988 \\times 10^{-25}}{4.88 \\times 10^{-7}} \\approx 4.074 \\times 10^{-19} \\text{ J}
    \\]
    In eV:
    \\[
    E = \\frac{4.074 \\times 10^{-19} \\text{ J}}{1.602 \\times 10^{-19} \\text{ J eV}^{-1}} \\approx 2.543 \\text{ eV}
    \\]</p>

    <p><strong>Step 2: Work Function $\\Phi_0$:</strong><br>
    \\[
    \\Phi_0 = E - K_{max} = 2.543 \\text{ eV} - 0.38 \\text{ eV} = 2.163 \\text{ eV} \\approx 2.16 \\text{ eV}
    \\]
    (or $3.46 \\times 10^{-19} \\text{ J}$).</p>`,
    "2 Marks",
    [
      ["Calculation of incident photon energy $E = 2.54\\text{ eV}$", "1 Mark"],
      ["Calculation of work function $\\Phi_0 = 2.16\\text{ eV}$", "1 Mark"]
    ]
  ),

  // 11.12
  createQCard(
    "c12p-ch11-q12",
    "Q 11.12",
    "Exercise 11.12",
    `Calculate the:<br>
    <strong>(a)</strong> momentum, and<br>
    <strong>(b)</strong> de Broglie wavelength of the electrons accelerated through a potential difference of $56 \\text{ V}$.`,
    `<p><strong>Given:</strong><br>
    Accelerating voltage $V = 56 \\text{ V}$<br>
    $m = 9.11 \\times 10^{-31} \\text{ kg}$, $e = 1.602 \\times 10^{-19} \\text{ C}$, $h = 6.626 \\times 10^{-34} \\text{ J s}$</p>

    <p><strong>(a) Momentum $p$:</strong><br>
    Kinetic energy $K = e V = 1.602 \\times 10^{-19} \\times 56 = 8.971 \\times 10^{-19} \\text{ J}$.<br>
    \\[
    p = \\sqrt{2 m K} = \\sqrt{2 m e V} = \\sqrt{2 \\times (9.11 \\times 10^{-31}) \\times (8.971 \\times 10^{-19})}
    \\]
    \\[
    p = \\sqrt{1.6345 \\times 10^{-48}} \\approx 4.043 \\times 10^{-24} \\text{ kg m s}^{-1}
    \\]</p>

    <p><strong>(b) de Broglie Wavelength $\\lambda$:</strong><br>
    Using standard de Broglie relation for an electron:
    \\[
    \\lambda = \\frac{h}{p} = \\frac{1.227}{\\sqrt{V}} \\text{ nm}
    \\]
    \\[
    \\lambda = \\frac{1.227}{\\sqrt{56}} = \\frac{1.227}{7.483} \\approx 0.164 \\text{ nm} = 1.64 \\text{ \\AA} = 1.64 \\times 10^{-10} \\text{ m}
    \\]</p>`,
    "2 Marks",
    [
      ["Calculation of momentum $p = 4.04 \\times 10^{-24}\\text{ kg m s}^{-1}$", "1 Mark"],
      ["Formula and calculation of $\\lambda = 0.164\\text{ nm}$", "1 Mark"]
    ]
  ),

  // 11.13
  createQCard(
    "c12p-ch11-q13",
    "Q 11.13",
    "Exercise 11.13",
    `What is the:<br>
    <strong>(a)</strong> momentum,<br>
    <strong>(b)</strong> speed, and<br>
    <strong>(c)</strong> de Broglie wavelength of an electron with kinetic energy of $120 \\text{ eV}$?`,
    `<p><strong>Given:</strong><br>
    $K = 120 \\text{ eV} = 120 \\times 1.602 \\times 10^{-19} \\text{ J} = 1.922 \\times 10^{-17} \\text{ J}$<br>
    $m = 9.11 \\times 10^{-31} \\text{ kg}$</p>

    <p><strong>(a) Momentum $p$:</strong><br>
    \\[
    p = \\sqrt{2 m K} = \\sqrt{2 \\times (9.11 \\times 10^{-31}) \\times (1.922 \\times 10^{-17})} = \\sqrt{3.502 \\times 10^{-47}} = \\sqrt{35.02 \\times 10^{-48}} \\approx 5.918 \\times 10^{-24} \\text{ kg m s}^{-1}
    \\]</p>

    <p><strong>(b) Speed $v$:</strong><br>
    \\[
    v = \\frac{p}{m} = \\frac{5.918 \\times 10^{-24} \\text{ kg m s}^{-1}}{9.11 \\times 10^{-31} \\text{ kg}} \\approx 6.496 \\times 10^6 \\text{ m s}^{-1} \\approx 6.50 \\times 10^6 \\text{ m s}^{-1}
    \\]</p>

    <p><strong>(c) de Broglie Wavelength $\\lambda$:</strong><br>
    \\[
    \\lambda = \\frac{h}{p} = \\frac{6.626 \\times 10^{-34}}{5.918 \\times 10^{-24}} \\approx 1.12 \\times 10^{-10} \\text{ m} = 0.112 \\text{ nm} = 1.12 \\text{ \\AA}
    \\]
    (Alternatively: $\\lambda = \\frac{1.227}{\\sqrt{120}} = \\frac{1.227}{10.954} = 0.112 \\text{ nm}$).</p>`,
    "3 Marks",
    [
      ["Calculation of momentum $p = 5.92 \\times 10^{-24}\\text{ kg m s}^{-1}$", "1 Mark"],
      ["Calculation of speed $v = 6.50 \\times 10^6\\text{ m s}^{-1}$", "1 Mark"],
      ["Calculation of de Broglie wavelength $\\lambda = 0.112\\text{ nm}$", "1 Mark"]
    ]
  ),

  // 11.14
  createQCard(
    "c12p-ch11-q14",
    "Q 11.14",
    "Exercise 11.14",
    `The wavelength of light from the spectral emission line of sodium is $589 \\text{ nm}$. Find the kinetic energy at which:<br>
    <strong>(a)</strong> an electron, and<br>
    <strong>(b)</strong> a neutron, would have the same de Broglie wavelength.`,
    `<p><strong>Given:</strong><br>
    $\\lambda = 589 \\text{ nm} = 5.89 \\times 10^{-7} \\text{ m}$<br>
    $h = 6.626 \\times 10^{-34} \\text{ J s}$<br>
    Common momentum:
    \\[
    p = \\frac{h}{\\lambda} = \\frac{6.626 \\times 10^{-34}}{5.89 \\times 10^{-7}} \\approx 1.125 \\times 10^{-27} \\text{ kg m s}^{-1}
    \\]
    Kinetic energy is given by $K = \\frac{p^2}{2m}$.</p>

    <p><strong>(a) For an Electron ($m_e = 9.11 \\times 10^{-31} \\text{ kg}$):</strong><br>
    \\[
    K_e = \\frac{p^2}{2 m_e} = \\frac{(1.125 \\times 10^{-27})^2}{2 \\times 9.11 \\times 10^{-31}} = \\frac{1.2656 \\times 10^{-54}}{1.822 \\times 10^{-30}} \\approx 6.946 \\times 10^{-25} \\text{ J}
    \\]
    In eV:
    \\[
    K_e = \\frac{6.946 \\times 10^{-25} \\text{ J}}{1.602 \\times 10^{-19} \\text{ J eV}^{-1}} \\approx 4.34 \\times 10^{-6} \\text{ eV} = 4.34 \\ \\mu\\text{eV}
    \\]</p>

    <p><strong>(b) For a Neutron ($m_n = 1.675 \\times 10^{-27} \\text{ kg}$):</strong><br>
    \\[
    K_n = \\frac{p^2}{2 m_n} = \\frac{1.2656 \\times 10^{-54}}{2 \\times 1.675 \\times 10^{-27}} = \\frac{1.2656 \\times 10^{-54}}{3.35 \\times 10^{-27}} \\approx 3.778 \\times 10^{-28} \\text{ J}
    \\]
    In eV:
    \\[
    K_n = \\frac{3.778 \\times 10^{-28}}{1.602 \\times 10^{-19}} \\approx 2.36 \\times 10^{-9} \\text{ eV} = 2.36 \\text{ neV}
    \\]</p>`,
    "3 Marks",
    [
      ["Calculation of common momentum $p = 1.125 \\times 10^{-27}\\text{ kg m/s}$", "1 Mark"],
      ["Calculation of $K_e = 4.34 \\times 10^{-6}\\text{ eV}$", "1 Mark"],
      ["Calculation of $K_n = 2.36 \\times 10^{-9}\\text{ eV}$", "1 Mark"]
    ]
  ),

  // 11.15
  createQCard(
    "c12p-ch11-q15",
    "Q 11.15",
    "Exercise 11.15",
    `What is the de Broglie wavelength of:<br>
    <strong>(a)</strong> a bullet of mass $0.040 \\text{ kg}$ travelling at the speed of $1.0 \\text{ km s}^{-1}$,<br>
    <strong>(b)</strong> a ball of mass $0.060 \\text{ kg}$ moving at a speed of $1.0 \\text{ m s}^{-1}$, and<br>
    <strong>(c)</strong> a dust particle of mass $1.0 \\times 10^{-9} \\text{ kg}$ drifting with a speed of $2.2 \\text{ m s}^{-1}$?`,
    `<p><strong>Formula:</strong> $\\lambda = \\frac{h}{m v}$, where $h = 6.626 \\times 10^{-34} \\text{ J s}$.</p>

    <p><strong>(a) Bullet:</strong><br>
    $m = 0.040 \\text{ kg}$, $v = 1.0 \\text{ km s}^{-1} = 1000 \\text{ m s}^{-1}$<br>
    \\[
    \\lambda = \\frac{6.626 \\times 10^{-34}}{0.040 \\times 1000} = \\frac{6.626 \\times 10^{-34}}{40} \\approx 1.66 \\times 10^{-35} \\text{ m}
    \\]</p>

    <p><strong>(b) Ball:</strong><br>
    $m = 0.060 \\text{ kg}$, $v = 1.0 \\text{ m s}^{-1}$<br>
    \\[
    \\lambda = \\frac{6.626 \\times 10^{-34}}{0.060 \\times 1.0} \\approx 1.10 \\times 10^{-32} \\text{ m}
    \\]</p>

    <p><strong>(c) Dust Particle:</strong><br>
    $m = 1.0 \\times 10^{-9} \\text{ kg}$, $v = 2.2 \\text{ m s}^{-1}$<br>
    \\[
    \\lambda = \\frac{6.626 \\times 10^{-34}}{(1.0 \\times 10^{-9}) \\times 2.2} = \\frac{6.626 \\times 10^{-34}}{2.2 \\times 10^{-9}} \\approx 3.01 \\times 10^{-25} \\text{ m}
    \\]
    <p><strong>Physical Note:</strong> These wavelengths are unimaginably small compared to any atomic or diffraction dimensions, explaining why macroscopic objects do not exhibit noticeable wave properties.</p>`,
    "3 Marks",
    [
      ["Calculation for bullet $\\lambda = 1.66 \\times 10^{-35}\\text{ m}$", "1 Mark"],
      ["Calculation for ball $\\lambda = 1.10 \\times 10^{-32}\\text{ m}$", "1 Mark"],
      ["Calculation for dust $\\lambda = 3.01 \\times 10^{-25}\\text{ m}$", "1 Mark"]
    ]
  ),

  // 11.16
  createQCard(
    "c12p-ch11-q16",
    "Q 11.16",
    "Exercise 11.16",
    `An electron and a photon each have a wavelength of $1.00 \\text{ nm}$. Find:<br>
    <strong>(a)</strong> their momenta,<br>
    <strong>(b)</strong> the energy of the photon, and<br>
    <strong>(c)</strong> the kinetic energy of the electron.`,
    `<p><strong>Given:</strong><br>
    $\\lambda = 1.00 \\text{ nm} = 1.00 \\times 10^{-9} \\text{ m}$</p>

    <p><strong>(a) Momenta:</strong><br>
    By de Broglie relation, momentum depends only on wavelength:
    \\[
    p = \\frac{h}{\\lambda} = \\frac{6.626 \\times 10^{-34} \\text{ J s}}{1.00 \\times 10^{-9} \\text{ m}} = 6.63 \\times 10^{-25} \\text{ kg m s}^{-1}
    \\]
    Both the electron and photon possess the exact same momentum: <strong>$6.63 \\times 10^{-25} \\text{ kg m s}^{-1}$</strong>.</p>

    <p><strong>(b) Energy of Photon ($E_{ph}$):</strong><br>
    \\[
    E_{ph} = \\frac{h c}{\\lambda} = \\frac{(6.626 \\times 10^{-34}) \\times (3.0 \\times 10^8)}{1.00 \\times 10^{-9}} = 1.988 \\times 10^{-16} \\text{ J}
    \\]
    In eV:
    \\[
    E_{ph} = \\frac{1.988 \\times 10^{-16} \\text{ J}}{1.602 \\times 10^{-19} \\text{ J eV}^{-1}} \\approx 1241 \\text{ eV} = 1.24 \\text{ keV}
    \\]</p>

    <p><strong>(c) Kinetic Energy of Electron ($K_e$):</strong><br>
    \\[
    K_e = \\frac{p^2}{2 m_e} = \\frac{(6.626 \\times 10^{-25})^2}{2 \\times 9.11 \\times 10^{-31}} = \\frac{4.390 \\times 10^{-49}}{1.822 \\times 10^{-30}} \\approx 2.409 \\times 10^{-19} \\text{ J}
    \\]
    In eV:
    \\[
    K_e = \\frac{2.409 \\times 10^{-19} \\text{ J}}{1.602 \\times 10^{-19} \\text{ J eV}^{-1}} \\approx 1.50 \\text{ eV}
    \\]</p>`,
    "3 Marks",
    [
      ["Calculation of common momentum $p = 6.63 \\times 10^{-25}\\text{ kg m s}^{-1}$", "1 Mark"],
      ["Calculation of photon energy $E = 1.24\\text{ keV}$", "1 Mark"],
      ["Calculation of electron kinetic energy $K = 1.50\\text{ eV}$", "1 Mark"]
    ]
  ),

  // 11.17
  createQCard(
    "c12p-ch11-q17",
    "Q 11.17",
    "Exercise 11.17",
    `<strong>(a)</strong> For what kinetic energy of a neutron will the associated de Broglie wavelength be $1.40 \\times 10^{-10} \\text{ m}$?<br>
    <strong>(b)</strong> Also find the de Broglie wavelength of a neutron in thermal equilibrium with matter, having an average kinetic energy of $\\frac{3}{2} k T$ at $300 \\text{ K}$.`,
    `<p><strong>Given:</strong><br>
    Mass of neutron $m_n = 1.675 \\times 10^{-27} \\text{ kg}$<br>
    Boltzmann constant $k = 1.38 \\times 10^{-23} \\text{ J K}^{-1}$<br>
    $h = 6.626 \\times 10^{-34} \\text{ J s}$</p>

    <p><strong>(a) Kinetic Energy for $\\lambda = 1.40 \\times 10^{-10} \\text{ m}$:</strong><br>
    \\[
    \\lambda = \\frac{h}{\\sqrt{2 m_n K}} \\implies K = \\frac{h^2}{2 m_n \\lambda^2}
    \\]
    \\[
    K = \\frac{(6.626 \\times 10^{-34})^2}{2 \\times (1.675 \\times 10^{-27}) \\times (1.40 \\times 10^{-10})^2} = \\frac{4.390 \\times 10^{-67}}{(3.35 \\times 10^{-27}) \\times (1.96 \\times 10^{-20})} = \\frac{4.390 \\times 10^{-67}}{6.566 \\times 10^{-47}}
    \\]
    \\[
    K \\approx 6.686 \\times 10^{-21} \\text{ J} = \\frac{6.686 \\times 10^{-21}}{1.602 \\times 10^{-19}} \\approx 4.17 \\times 10^{-2} \\text{ eV} = 0.0417 \\text{ eV}
    \\]</p>

    <p><strong>(b) Thermal Neutron de Broglie Wavelength at $T = 300 \\text{ K}$:</strong><br>
    Average thermal kinetic energy:
    \\[
    K_{th} = \\frac{3}{2} k T = \\frac{3}{2} \\times (1.38 \\times 10^{-23}) \\times 300 = 6.21 \\times 10^{-21} \\text{ J}
    \\]
    de Broglie wavelength:
    \\[
    \\lambda = \\frac{h}{\\sqrt{3 m_n k T}} = \\frac{6.626 \\times 10^{-34}}{\\sqrt{3 \\times (1.675 \\times 10^{-27}) \\times (1.38 \\times 10^{-23}) \\times 300}}
    \\]
    \\[
    \\lambda = \\frac{6.626 \\times 10^{-34}}{\\sqrt{2.080 \\times 10^{-47}}} = \\frac{6.626 \\times 10^{-34}}{\\sqrt{20.80 \\times 10^{-48}}} = \\frac{6.626 \\times 10^{-34}}{4.561 \\times 10^{-24}} \\approx 1.45 \\times 10^{-10} \\text{ m} = 0.145 \\text{ nm} = 1.45 \\text{ \\AA}
    \\]</p>`,
    "3 Marks",
    [
      ["Calculation of $K = 0.0417\\text{ eV}$ for part (a)", "1.5 Marks"],
      ["Formula $\\lambda = h/\\sqrt{3mkT}$ and calculation $\\lambda = 0.145\\text{ nm}$", "1.5 Marks"]
    ]
  ),

  // 11.18
  createQCard(
    "c12p-ch11-q18",
    "Q 11.18",
    "Exercise 11.18",
    `Show that the wavelength of electromagnetic radiation is equal to the de Broglie wavelength of its quantum (photon).`,
    `<p><strong>Proof:</strong><br>
    Consider an electromagnetic wave of frequency $\\nu$ propagating with speed $c$.<br>
    Its classical wavelength $\\lambda$ is:
    \\[
    \\lambda = \\frac{c}{\\nu} \\quad \\text{--- (Equation 1)}
    \\]</p>

    <p>According to quantum theory, the energy of a photon is:
    \\[
    E = h \\nu
    \\]
    From Einstein's relativistic energy-momentum relation for a particle of zero rest mass ($m_0 = 0$):
    \\[
    E = p c \\implies p = \\frac{E}{c} = \\frac{h \\nu}{c}
    \\]</p>

    <p>Now, according to de Broglie's hypothesis, the matter wavelength associated with any entity having momentum $p$ is:
    \\[
    \\lambda_{de\\text{-}Broglie} = \\frac{h}{p}
    \\]
    Substituting $p = \\frac{h\\nu}{c}$:
    \\[
    \\lambda_{de\\text{-}Broglie} = \\frac{h}{(h\\nu / c)} = \\frac{c}{\\nu} \\quad \\text{--- (Equation 2)}
    \\]
    Comparing Equations (1) and (2):
    \\[
    \\lambda_{de\\text{-}Broglie} = \\lambda
    \\]
    Hence, the de Broglie wavelength of a photon is identically equal to the wavelength of the corresponding electromagnetic wave.</p>`,
    "2 Marks",
    [
      ["Formulation of photon momentum $p = E/c = h\\nu/c$", "1 Mark"],
      ["Substitution into $\\lambda = h/p$ proving $\\lambda = c/\\nu$", "1 Mark"]
    ]
  ),

  // 11.19
  createQCard(
    "c12p-ch11-q19",
    "Q 11.19",
    "Exercise 11.19",
    `What is the de Broglie wavelength of a nitrogen molecule in air at $300 \\text{ K}$? Assume that the molecule moves with the root-mean-square speed of molecules at this temperature. (Atomic mass of nitrogen $= 14.0076 \\text{ u}$).`,
    `<p><strong>Given:</strong><br>
    Nitrogen gas is diatomic ($N_2$).<br>
    Molecular mass $M = 2 \\times 14.0076 \\text{ u} = 28.0152 \\text{ u}$<br>
    Mass of one molecule $m = 28.0152 \\times 1.6605 \\times 10^{-27} \\text{ kg} \\approx 4.652 \\times 10^{-26} \\text{ kg}$<br>
    Temperature $T = 300 \\text{ K}$<br>
    Boltzmann constant $k = 1.38 \\times 10^{-23} \\text{ J K}^{-1}$<br>
    $h = 6.626 \\times 10^{-34} \\text{ J s}$</p>

    <p><strong>Step 1: RMS Momentum:</strong><br>
    The rms speed is $v_{rms} = \\sqrt{\\frac{3 k T}{m}}$.<br>
    The momentum associated with rms speed is:
    \\[
    p_{rms} = m v_{rms} = m \\sqrt{\\frac{3 k T}{m}} = \\sqrt{3 m k T}
    \\]
    \\[
    p_{rms} = \\sqrt{3 \\times (4.652 \\times 10^{-26}) \\times (1.38 \\times 10^{-23}) \\times 300} = \\sqrt{5.778 \\times 10^{-46}} \\approx 2.404 \\times 10^{-23} \\text{ kg m s}^{-1}
    \\]</p>

    <p><strong>Step 2: de Broglie Wavelength:</strong><br>
    \\[
    \\lambda = \\frac{h}{p_{rms}} = \\frac{6.626 \\times 10^{-34} \\text{ J s}}{2.404 \\times 10^{-23} \\text{ kg m s}^{-1}} \\approx 2.76 \\times 10^{-11} \\text{ m} = 0.0276 \\text{ nm} = 0.276 \\text{ \\AA}
    \\]</p>`,
    "3 Marks",
    [
      ["Conversion of diatomic nitrogen mass $m = 4.65 \\times 10^{-26}\\text{ kg}$", "1 Mark"],
      ["Formula $p = \\sqrt{3mkT}$", "1 Mark"],
      ["Calculation of $\\lambda = 0.0276\\text{ nm}$", "1 Mark"]
    ]
  ),

  // 11.20
  createQCard(
    "c12p-ch11-q20",
    "Q 11.20",
    "Exercise 11.20",
    `State the laws of photoelectric emission and explain how Einstein's photoelectric equation accounts for each of them. Explain why the classical wave theory of light fails to explain the photoelectric effect.`,
    `<p><strong>Laws of Photoelectric Emission:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Threshold Frequency:</strong> For a given photosensitive material, there exists a certain minimum frequency $\\nu_0$ (threshold frequency) below which no photoelectrons are emitted, no matter how intense the incident light is.</li>
      <li><strong>Proportionality of Current to Intensity:</strong> The number of photoelectrons emitted per second (saturation photoelectric current) is directly proportional to the intensity of incident light (for $\\nu > \\nu_0$).</li>
      <li><strong>Kinetic Energy Independent of Intensity:</strong> The maximum kinetic energy $K_{max}$ of the emitted photoelectrons depends linearly on the frequency of incident radiation and is completely independent of the intensity.</li>
      <li><strong>Instantaneous Emission:</strong> Photoelectric emission is an instantaneous process; emission starts without any perceptible time lag ($< 10^{-9} \\text{ s}$) upon illumination.</li>
    </ol>

    <p><strong>Einstein’s Explanation via Quantum Theory ($K_{max} = h\\nu - \\Phi_0$):</strong><br>
    Light consists of discrete energy quanta called photons, each carrying energy $E = h\\nu$. An electron absorbs a single photon in an all-or-nothing process.<br>
    • If $h\\nu < \\Phi_0 = h\\nu_0$ (i.e. $\\nu < \\nu_0$), the energy is insufficient to liberate the electron, explaining the existence of <strong>threshold frequency</strong>.<br>
    • Higher intensity simply means a greater number of photons per second, yielding a proportionately higher number of photoelectrons per second, explaining the <strong>current-intensity proportionality</strong>.<br>
    • Since each electron interacts with only one photon, $K_{max} = h\\nu - \\Phi_0$ depends strictly on photon energy ($h\\nu$) and not on how many photons arrive, explaining why <strong>$K_{max}$ is independent of intensity</strong>.<br>
    • The photon-electron collision is an instantaneous microscopic quantum event, explaining the <strong>absence of time lag</strong>.</p>

    <p><strong>Failure of Classical Wave Theory:</strong><br>
    1. Classical wave theory predicted that energy is spread uniformly over wavefronts; higher intensity (larger wave amplitude) should provide higher kinetic energy to electrons, which directly contradicts experimental observation.<br>
    2. Wave theory predicted that even low-frequency light should eventually eject electrons if intensity is high enough, contradicting the threshold frequency.<br>
    3. Since wave energy is distributed continuously over billions of atoms, an individual electron would take hours or days to accumulate enough energy to escape, contradicting instantaneous emission.</p>`,
    "5 Marks",
    [
      ["Four laws of photoelectric emission stated accurately", "1.5 Marks"],
      ["Einstein's equation $K_{max} = h\\nu - \\Phi_0$ explaining all four laws", "2 Marks"],
      ["Detailed account of three specific failures of classical wave theory", "1.5 Marks"]
    ]
  )
];

saveChapter(chNum, chTitle, svgDiagram, "Exercises 11.1 to 11.20", questions, nextChTitle);
