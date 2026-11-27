/**
 * JEE Main Syllabus, Exam Format, and PYQ Calibration Matrix
 * =====================================================================
 * Sibling to syllabus.js (which covers Classes 1-10 Olympiad subjects) -
 * JEE Main is a different exam entirely (Class 11-12 engineering-entrance
 * syllabus, NTA's format/marking scheme) so it gets its own taxonomy
 * rather than being bolted onto SYLLABUS_BY_CLASS.
 *
 * SYLLABUS EDITION: "2026-27" - the official NTA JEE Main 2027 information
 * bulletin had not been published as of when this was written. The syllabus
 * below is the stable NCERT Class 11+12 Physics/Chemistry/Maths curriculum
 * JEE Main has used for several cycles running, and EXAM_FORMAT reflects
 * the pattern confirmed for the 2026 cycle (25 compulsory questions/subject:
 * 20 MCQ + 5 Numerical, all compulsory, no internal choice - NTA reverted
 * to this from the old "optional questions" format starting 2025).
 * ONE place to update both when the real 2027 bulletin is published -
 * nothing else in the JEE pipeline should hardcode question counts or
 * marking numbers directly. See EXAM_FORMAT.verified below for exactly
 * which numbers are confirmed vs. provisional.
 */

const SYLLABUS_EDITION = "2026-27";

/**
 * EXAM_FORMAT.verified: false means "carried over from the last confirmed
 * cycle, not yet re-confirmed against an official bulletin for this
 * edition" - NOT "wrong". Check jeemain.nta.nic.in when the next bulletin
 * drops and flip to true (or update the numbers) at that point.
 */
const EXAM_FORMAT = {
  edition: SYLLABUS_EDITION,
  verified: false,
  subjectsPerPaper: ["physics", "chemistry", "maths"],
  perSubject: {
    mcqCount: 20,
    numericalCount: 5,
    mcqMarks: 4,
    mcqNegativeMarks: 1,
    numericalMarks: 4,
    // Confirmed-vs-conflicting in current coaching-institute reporting as
    // of this writing - some say no negative marking on numerical value
    // questions, others say -1. Defaulting to the no-penalty reading (the
    // more specific, more recently-published sources agree on this) but
    // keeping it a named, single flag specifically so it's trivial to flip
    // the instant NTA's bulletin confirms either way, without touching the
    // generation/scoring code at all.
    numericalNegativeMarks: 0,
    allCompulsory: true // no internal choice/optional questions (2025+ format)
  },
  totalQuestions: 75, // 25 x 3 subjects
  totalMarks: 300,    // 100 x 3 subjects
  durationMinutes: 180,
  // Target difficulty mix per subject, modeled on how recent JEE Main
  // papers actually distribute difficulty (not an even/arbitrary split) -
  // used to assemble balanced tests, not just generate questions in
  // isolation. See CALIBRATION per-chapter difficultyWeight below for how
  // an individual chapter's share of "hard" questions is derived from this.
  difficultyMix: { easy: 0.40, moderate: 0.40, hard: 0.20 }
};

/**
 * Chapter-wise PYQ Calibration Profile.
 * Each chapter carries:
 *  - weight: relative share of questions this chapter should get in a
 *    full-syllabus test, modeled on recent (last ~3-4 cycles) JEE Main
 *    chapter-wise weightage as reported consistently across major coaching
 *    institutes (Physics Wallah, Aakash, Resonance chapter-weightage
 *    breakdowns) - not a guess, but also not sourced from a single
 *    official NTA document (NTA doesn't publish weightage), so treat this
 *    as "well-established coaching-industry consensus", re-tunable here
 *    without touching any generation code.
 *  - difficultyBias: nudges a chapter's easy/moderate/hard mix away from
 *    the subject-level default in EXAM_FORMAT.difficultyMix when recent
 *    papers consistently test it harder/easier than the subject average
 *    (e.g. Modern Physics and 3D Geometry routinely skew harder; Units &
 *    Measurements routinely skews easier).
 *  - styleNotes: a short, concrete description of HOW recent JEE Main
 *    papers actually phrase/frame this chapter's questions - passed into
 *    the generation prompt as grounding so the model isn't inventing its
 *    own idea of "JEE-level" from scratch.
 */
const CALIBRATION = {
  physics: {
    "Units and Measurements": { weight: 0.03, difficultyBias: "easier", styleNotes: "Dimensional analysis and error propagation in a measured-quantity setup; usually a single clean numerical, rarely multi-concept." },
    "Kinematics": { weight: 0.05, difficultyBias: "neutral", styleNotes: "Projectile/relative-motion scenario with 2-3 given quantities; expects one clear equation chain, not a trick setup." },
    "Laws of Motion": { weight: 0.05, difficultyBias: "neutral", styleNotes: "Pulley/incline/friction system with a free-body-diagram setup implied in text; tests correct force resolution over raw formula recall." },
    "Work, Energy and Power": { weight: 0.04, difficultyBias: "neutral", styleNotes: "Energy conservation across a described multi-stage process (e.g. spring then incline then friction) rather than a single-formula plug-in." },
    "Rotational Motion": { weight: 0.06, difficultyBias: "harder", styleNotes: "Combined translational+rotational (rolling without slipping) or torque-about-a-point setups; routinely the hardest Mechanics sub-topic in recent papers." },
    "Gravitation": { weight: 0.03, difficultyBias: "neutral", styleNotes: "Orbital mechanics (satellite energy/velocity) or escape-velocity variants; moderate multi-step." },
    "Properties of Solids and Liquids": { weight: 0.04, difficultyBias: "neutral", styleNotes: "Elasticity (stress-strain) or fluid dynamics (Bernoulli/viscosity) numerical with 2-3 given values." },
    "Thermodynamics": { weight: 0.05, difficultyBias: "neutral", styleNotes: "Process-specific (isothermal/adiabatic/cyclic) work/heat calculation with a described PV-diagram process, not just a formula lookup." },
    "Kinetic Theory of Gases": { weight: 0.02, difficultyBias: "easier", styleNotes: "RMS speed / degrees-of-freedom direct application, usually single-step once the right formula is identified." },
    "Oscillations and Waves": { weight: 0.06, difficultyBias: "neutral", styleNotes: "SHM energy/phase relationships or standing-wave/beats numerical; frequently combines two formula relationships." },
    "Electrostatics": { weight: 0.05, difficultyBias: "neutral", styleNotes: "Charge configuration (point charges/dipole/sphere) field-and-potential calculation, often with symmetry reasoning required." },
    "Current Electricity": { weight: 0.05, difficultyBias: "neutral", styleNotes: "Circuit with mixed series-parallel + a measuring instrument (Wheatstone bridge/potentiometer) - setup recognition matters as much as computation." },
    "Magnetic Effects of Current and Magnetism": { weight: 0.05, difficultyBias: "harder", styleNotes: "Force/torque on a current-carrying configuration in a described field, or moving-charge-in-combined-fields; routinely multi-step." },
    "Electromagnetic Induction and AC": { weight: 0.05, difficultyBias: "harder", styleNotes: "EMF-induction scenario (moving rod/changing flux) or AC circuit (LCR) phasor/impedance calculation." },
    "Electromagnetic Waves": { weight: 0.02, difficultyBias: "easier", styleNotes: "Direct conceptual/numerical on wave-parameter relationships (frequency/wavelength/Poynting), rarely multi-step." },
    "Optics": { weight: 0.06, difficultyBias: "neutral", styleNotes: "Combined lens/mirror system or interference (YDSE) numerical with 2+ given optical elements in sequence." },
    "Dual Nature of Radiation and Matter": { weight: 0.03, difficultyBias: "neutral", styleNotes: "Photoelectric-effect numerical (stopping potential/work function) - standard setup, moderate difficulty." },
    "Atoms and Nuclei": { weight: 0.04, difficultyBias: "neutral", styleNotes: "Bohr-model energy-level transitions or radioactive-decay (half-life/activity) numerical." },
    "Electronic Devices": { weight: 0.02, difficultyBias: "easier", styleNotes: "Semiconductor/diode/logic-gate conceptual, rarely numerical." },
    "Experimental Skills": { weight: 0.03, difficultyBias: "easier", styleNotes: "Practical-physics-experiment scenario (screw gauge/vernier/meter bridge reading or error analysis) - tests procedure, not derivation." }
  },
  chemistry: {
    "Some Basic Concepts of Chemistry": { weight: 0.04, difficultyBias: "easier", styleNotes: "Mole-concept/stoichiometry numerical, limiting reagent or percentage composition - single clear calculation chain." },
    "Atomic Structure": { weight: 0.04, difficultyBias: "neutral", styleNotes: "Quantum numbers / Bohr model / de Broglie numerical, direct formula application once the right one is identified." },
    "Chemical Bonding and Molecular Structure": { weight: 0.05, difficultyBias: "neutral", styleNotes: "VSEPR shape/hybridization identification or bond-parameter comparison across a set of molecules - conceptual, reasoning-heavy." },
    "States of Matter": { weight: 0.03, difficultyBias: "easier", styleNotes: "Gas-law numerical (ideal gas equation, van der Waals correction) with 2-3 given state variables." },
    "Thermodynamics": { weight: 0.05, difficultyBias: "neutral", styleNotes: "Enthalpy/entropy/Gibbs-energy calculation across a described reaction or process, often combining Hess's law with a given data table." },
    "Equilibrium": { weight: 0.05, difficultyBias: "harder", styleNotes: "Ionic/chemical equilibrium (pH, buffer, Ksp, Kc/Kp) numerical requiring correct setup of the equilibrium expression before computation." },
    "Redox Reactions": { weight: 0.02, difficultyBias: "easier", styleNotes: "Oxidation-state assignment or balancing a redox equation - procedural, low ambiguity." },
    "Solutions": { weight: 0.04, difficultyBias: "neutral", styleNotes: "Colligative-property numerical (osmotic pressure, freezing-point depression) with molality/molarity conversion embedded." },
    "Electrochemistry": { weight: 0.04, difficultyBias: "neutral", styleNotes: "Nernst-equation or conductivity numerical, standard-cell-potential setup." },
    "Chemical Kinetics": { weight: 0.04, difficultyBias: "neutral", styleNotes: "Rate-law/order-of-reaction determination from a given data set, or half-life numerical for a specified order." },
    "Surface Chemistry": { weight: 0.02, difficultyBias: "easier", styleNotes: "Adsorption isotherm or colloid-property conceptual, rarely numerical." },
    "p-Block Elements": { weight: 0.06, difficultyBias: "neutral", styleNotes: "Property-trend or reaction-product identification across a group - factual recall framed as a comparison/exception question." },
    "d- and f-Block Elements": { weight: 0.04, difficultyBias: "neutral", styleNotes: "Oxidation-state/magnetic-property/color trend across transition-metal compounds - factual, pattern-recognition style." },
    "Coordination Compounds": { weight: 0.05, difficultyBias: "harder", styleNotes: "IUPAC naming + isomerism + CFT (crystal field theory) combined in one scenario - routinely the hardest Inorganic sub-topic." },
    "General Organic Chemistry": { weight: 0.05, difficultyBias: "harder", styleNotes: "Reaction-mechanism or stability-ordering (carbocation/resonance/inductive effect) question requiring multi-concept reasoning, not fact lookup." },
    "Hydrocarbons": { weight: 0.04, difficultyBias: "neutral", styleNotes: "Reaction-sequence or product-identification for a named named reaction (Markovnikov/anti-Markovnikov, ozonolysis)." },
    "Haloalkanes and Haloarenes": { weight: 0.03, difficultyBias: "neutral", styleNotes: "SN1/SN2 mechanism-selection or named-reaction product question." },
    "Alcohols, Phenols and Ethers": { weight: 0.03, difficultyBias: "neutral", styleNotes: "Reaction/property-comparison across the functional group, often multi-step synthesis identification." },
    "Aldehydes, Ketones and Carboxylic Acids": { weight: 0.04, difficultyBias: "neutral", styleNotes: "Named-reaction (Cannizzaro/Aldol/HVZ) product or reactivity-ordering question." },
    "Amines and Biomolecules": { weight: 0.03, difficultyBias: "neutral", styleNotes: "Basicity-ordering or named-reaction identification; biomolecules usually factual (structure/classification)." },
    "Practical Organic Chemistry": { weight: 0.02, difficultyBias: "easier", styleNotes: "Qualitative-analysis/identification-test scenario, procedural rather than conceptual." }
  },
  maths: {
    "Sets, Relations and Functions": { weight: 0.04, difficultyBias: "neutral", styleNotes: "Domain/range or function-composition problem requiring careful case analysis, not a one-line evaluation." },
    "Complex Numbers and Quadratic Equations": { weight: 0.05, difficultyBias: "neutral", styleNotes: "Argand-plane geometric interpretation or nature-of-roots analysis combining 2 conditions." },
    "Matrices and Determinants": { weight: 0.05, difficultyBias: "neutral", styleNotes: "Property-based determinant evaluation or matrix-equation solving, usually requiring a structural trick over raw expansion." },
    "Permutations and Combinations": { weight: 0.04, difficultyBias: "harder", styleNotes: "Constrained-counting scenario (with restrictions/grouping) - routinely the trickiest setup-recognition topic in Algebra." },
    "Binomial Theorem": { weight: 0.04, difficultyBias: "neutral", styleNotes: "Specific-term/coefficient extraction or sum-of-series derived from the expansion, 2-3 step manipulation." },
    "Sequence and Series": { weight: 0.04, difficultyBias: "neutral", styleNotes: "AP-GP-HP mixed relationship or sum-to-n-terms for a non-standard series requiring a summation technique." },
    "Limits, Continuity and Differentiability": { weight: 0.05, difficultyBias: "neutral", styleNotes: "Indeterminate-form limit (L'Hopital or standard-limit substitution) or piecewise-function continuity check at a boundary point." },
    "Differential Calculus (Applications)": { weight: 0.06, difficultyBias: "neutral", styleNotes: "Maxima-minima/tangent-normal/rate-of-change word problem requiring the function to be set up from a described geometric or physical scenario first." },
    "Integral Calculus": { weight: 0.07, difficultyBias: "harder", styleNotes: "Definite integral requiring a substitution/by-parts/property-of-definite-integrals trick, or area-under-curve from two described boundaries - routinely the highest-weight Calculus sub-topic." },
    "Differential Equations": { weight: 0.04, difficultyBias: "neutral", styleNotes: "Formation or solution of a first-order DE from a described rate relationship, variable-separable or linear form." },
    "Coordinate Geometry (Straight Lines and Circles)": { weight: 0.05, difficultyBias: "neutral", styleNotes: "Locus/family-of-lines or circle-tangent-chord problem combining 2 given geometric conditions." },
    "Conic Sections (Parabola, Ellipse, Hyperbola)": { weight: 0.05, difficultyBias: "harder", styleNotes: "Tangent/normal/focal-property problem on a described conic, usually needing the standard-form equation derived first." },
    "Three Dimensional Geometry": { weight: 0.05, difficultyBias: "harder", styleNotes: "Line-plane or skew-lines distance/angle problem in vector or Cartesian form - routinely the hardest Coordinate-Geometry sub-topic." },
    "Vector Algebra": { weight: 0.03, difficultyBias: "neutral", styleNotes: "Scalar/vector-product geometric-interpretation problem (area/volume/projection), 2-3 step." },
    "Statistics and Probability": { weight: 0.05, difficultyBias: "neutral", styleNotes: "Conditional-probability or mean/variance-from-a-described-distribution problem, setup-dependent." },
    "Trigonometry": { weight: 0.04, difficultyBias: "easier", styleNotes: "Identity-based equation-solving or general-solution problem, usually a single clean simplification chain." },
    "Mathematical Reasoning": { weight: 0.02, difficultyBias: "easier", styleNotes: "Logical-statement/truth-table evaluation, procedural rather than computational." },
    "Linear Programming": { weight: 0.02, difficultyBias: "easier", styleNotes: "Feasible-region optimization from 2-3 described constraints, standard corner-point method." }
  }
};

const SUBJECT_DETAILS = {
  physics: { name: "Physics", codePrefix: "P" },
  chemistry: { name: "Chemistry", codePrefix: "C" },
  maths: { name: "Mathematics", codePrefix: "M" }
};

/**
 * @param {"physics"|"chemistry"|"maths"} subject
 * @returns {{name: string, weight: number, difficultyBias: string, styleNotes: string}[]}
 */
function getChaptersForSubject(subject) {
  const cal = CALIBRATION[subject] || {};
  return Object.entries(cal).map(([name, meta]) => ({ name, ...meta }));
}

function getChapterCalibration(subject, chapterName) {
  return (CALIBRATION[subject] || {})[chapterName] || null;
}

module.exports = {
  SYLLABUS_EDITION,
  EXAM_FORMAT,
  CALIBRATION,
  SUBJECT_DETAILS,
  getChaptersForSubject,
  getChapterCalibration
};
