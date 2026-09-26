/**
 * Syllabus and Curriculum Matrix for Classes 1 to 10
 * Rotating across: Mathematics, Science, English, Logical Reasoning
 */

const ROTATION_CYCLE = ["maths", "science", "english", "reasoning"];

const SUBJECT_DETAILS = {
  maths: {
    name: "Mathematics (IMO)",
    olympiad: "International Mathematics Olympiad",
    codePrefix: "M"
  },
  science: {
    name: "Science (NSO)",
    olympiad: "National Science Olympiad",
    codePrefix: "SCI"
  },
  english: {
    name: "English (IEO)",
    olympiad: "International English Olympiad",
    codePrefix: "ENG"
  },
  reasoning: {
    name: "Logical Reasoning",
    olympiad: "Reasoning & Mental Ability Olympiad",
    codePrefix: "LR"
  }
};

const SYLLABUS_BY_CLASS = {
  1: {
    maths: ["Number Sense & Counting up to 100", "Addition & Subtraction (1-2 digits)", "Shapes & Space", "Measurement (Length, Weight)", "Time & Money", "Patterns"],
    science: ["Living & Non-Living Things", "Plants Around Us", "Animals Around Us", "Human Body & Senses", "Good Habits & Safety", "Air, Water & Weather"],
    english: ["Nouns & Common Words", "Pronouns (I, You, He, She, It)", "Action Words (Verbs)", "Articles (A, An)", "Opposites & Rhyming Words", "Simple Prepositions (In, On, Under)"],
    reasoning: ["Patterns & Sequences", "Odd One Out", "Measuring Units & Comparison", "Geometrical Shapes", "Spatial Understanding", "Grouping of Figures"]
  },
  2: {
    maths: ["Numbers up to 1000", "Addition & Subtraction with Regrouping", "Multiplication & Repeated Addition", "Fractions Introduction (Half, Quarter)", "Money & Measurement", "Time & Calendar"],
    science: ["Types of Plants & Uses", "Animal Habitats & Eating Habits", "Human Body Bones & Muscles", "Food & Health", "Housing & Clothing", "Sun, Moon & Stars"],
    english: ["Singular & Plural Nouns", "Possessives (his, her, my)", "Adjectives (Describing Words)", "Helping Verbs (is, am, are, was, were)", "Punctuation & Capitalization", "Compound Words & Homophones"],
    reasoning: ["Number Patterns", "Analogy & Classification", "Alphabet Test", "Coding-Decoding (Simple)", "Mirror Images & Water Reflections", "Embedded Figures"]
  },
  3: {
    maths: ["4-Digit Numbers & Place Value", "Arithmetic Operations (+, -, ×, ÷)", "Fractions & Equivalent Fractions", "Length, Weight & Capacity", "Time, Clock & Calendar", "Geometry (2D & 3D Shapes, Perimeter)"],
    science: ["Parts of Plants & Photosynthesis basics", "Birds: Beaks, Claws & Nests", "Insects & Life Cycles", "Earth, Sun & Solar System", "Matter: Solids, Liquids & Gases", "Environmental Care & Pollution"],
    english: ["Noun Types (Common, Proper, Collective, Abstract)", "Pronouns & Antecedents", "Tenses (Simple Present, Past, Future)", "Adverbs (Manner, Time, Place)", "Prepositions & Conjunctions", "Idioms, Proverbs & Synonyms/Antonyms"],
    reasoning: ["Analogy & Classification", "Alphabet & Number Series", "Ranking & Ordering", "Blood Relations (Basics)", "Direction Sense (4 cardinal directions)", "Logical Deduction"]
  },
  4: {
    maths: ["5-Digit & 6-Digit Numbers", "Factors & Multiples (HCF & LCM basics)", "Fractions & Decimals Introduction", "Perimeter & Area of Rectangles/Squares", "Angles & Lines", "Data Handling & Bar Graphs"],
    science: ["Plant Adaptations (Terrestrial & Aquatic)", "Animal Reproduction & Life Cycles", "Digestive & Excretory Systems", "Force, Work & Simple Machines", "States of Matter & Solutions", "Soil Types & Conservation"],
    english: ["Subject-Verb Agreement", "Transitive & Intransitive Verbs", "Modal Auxiliaries (can, could, must, should)", "Comparative & Superlative Adjectives", "Relative Pronouns (who, which, that)", "Vocabulary, Homophones & Idioms"],
    reasoning: ["Coding-Decoding & Letter Shifting", "Mathematical Operations & Symbol Substitution", "Number Matrix & Missing Numbers", "Direction Sense & Turns", "Venn Diagrams & Categorization", "Paper Folding & Cutting"]
  },
  5: {
    maths: ["Large Numbers & Roman Numerals", "Operations on Large Numbers", "Factors, Prime Factorization, LCM & HCF", "Fraction Operations & Decimals", "Percentage & Profit/Loss basics", "Geometry: Angles, Triangles, Circles, Perimeter & Area"],
    science: ["Human Organ Systems (Circulatory, Nervous, Skeletal)", "Germs, Diseases & Immunity", "Plant Reproduction & Seed Dispersal", "Natural Disasters & Safety", "Atmosphere & Layers of Air", "Light, Shadows & Eclipses"],
    english: ["Complex Tenses (Perfect & Continuous)", "Active & Passive Voice (Basics)", "Direct & Indirect Speech (Intro)", "Correlative Conjunctions & Prepositional Phrases", "Conditionals (If-clauses)", "Advanced Vocabulary & Collocations"],
    reasoning: ["Blood Relations & Family Tree", "Seating Arrangement (Linear & Circular)", "Direction & Distance Calculations", "Cube & Dice Problems", "Figure Matrix & Series", "Statement & Conclusion"]
  },
  6: {
    maths: ["Knowing Our Numbers & Integers", "Playing with Numbers (Divisibility, Prime/Composite)", "Basic Geometrical Ideas & Polygons", "Fractions & Decimals Operations", "Algebraic Expressions & Simple Equations", "Ratio, Proportion & Unitary Method", "Mensuration (Perimeter & Area)"],
    science: ["Components of Food & Nutrients", "Sorting Materials into Groups", "Separation of Substances", "Plants: Structure & Functions", "Body Movements & Joints", "Motion & Measurement of Distances", "Light, Shadows & Reflections", "Electricity & Circuits"],
    english: ["Nouns, Clauses & Phrases", "Finite & Non-Finite Verbs (Gerunds, Infinitives)", "Modal Verbs & Conditionals", "Tenses Mastery", "Reported Speech", "Vocabulary: Latin/Greek Roots, Phrasal Verbs & Advanced Idioms"],
    reasoning: ["Analytical Reasoning & Logic Grids", "Mathematical Operations & Equation Balancing", "Clock & Calendar Problems", "Blood Relations & Coded Relationships", "Venn Diagrams & Syllogisms", "Non-Verbal Series & Rotation"]
  },
  7: {
    maths: ["Integers & Properties of Operations", "Fractions, Decimals & Rational Numbers", "Simple Equations & Linear Inequations", "Lines & Angles, Triangle Properties", "Congruence of Triangles", "Comparing Quantities (Percentage, Simple Interest, Profit/Loss)", "Exponents & Powers", "Perimeter & Area"],
    science: ["Nutrition in Plants & Animals", "Heat & Temperature Transfer (Conduction, Convection, Radiation)", "Acids, Bases & Salts", "Physical & Chemical Changes", "Respiration in Organisms", "Transportation in Animals & Plants", "Motion & Time (Speed graphs)", "Electric Current & Magnetic Effects"],
    english: ["Complex Sentences & Dependent Clauses", "Subjunctive Mood & Inversion", "Active and Passive Transformations", "Direct/Indirect Speech across all sentence types", "Preposition Collocations & Fixed Phrases", "Advanced Reading & Error Spotting"],
    reasoning: ["Coded Inequalities", "Sequential Puzzle & Grid Logic", "Blood Relations (Coded format)", "Direction Sense with Angles & Distances", "Critical Thinking & Cause-Effect", "Mirror, Water & Folding Non-Verbal"]
  },
  8: {
    maths: ["Rational Numbers & Number Systems", "Linear Equations in One Variable", "Understanding Quadrilaterals & Practical Geometry", "Squares, Square Roots, Cubes & Cube Roots", "Comparing Quantities (Compound Interest, Discount)", "Algebraic Expressions & Identities", "Mensuration (Surface Area & Volume of Cubes, Cylinders)", "Exponents & Powers"],
    science: ["Crop Production & Management", "Microorganisms: Friend & Foe", "Coal & Petroleum, Combustion & Flame", "Conservation of Plants & Animals", "Reproduction in Animals & Endocrine System", "Force & Pressure, Friction", "Sound (Frequency, Amplitude, Pitch)", "Chemical Effects of Electric Current", "Light (Reflection, Refraction, Eyes)"],
    english: ["Subject-Verb Concord Advanced Rules", "Verbals (Participles, Gerunds)", "Complex Direct & Indirect Speech", "Transformation of Sentences (Simple, Compound, Complex)", "Determiners & Quantifiers", "High-frequency Olympiad Vocabulary & Etymology"],
    reasoning: ["Coding-Decoding with Advanced Patterns", "Multi-floor & Multi-parameter Puzzles", "Syllogisms & Logical Consistency", "Input-Output & Step Operations", "Data Sufficiency", "Cube Folding & Dot Situation Problems"]
  },
  9: {
    maths: ["Number Systems & Real Numbers", "Polynomials & Remainder/Factor Theorems", "Coordinate Geometry & Linear Equations in Two Variables", "Lines & Angles, Triangles & Congruence", "Quadrilaterals & Circles Theorems", "Heron's Formula & Surface Areas & Volumes", "Statistics & Probability"],
    science: ["Matter in Our Surroundings & Is Matter Around Us Pure", "Atoms, Molecules & Chemical Formulas", "Structure of the Atom", "The Fundamental Unit of Life (Cell Organelles)", "Tissues (Plant & Animal)", "Motion (Equations of Motion & Graphs)", "Force and Laws of Motion (Newton's Laws)", "Gravitation & Floatation", "Work, Energy & Power", "Sound"],
    english: ["Advanced Grammar & Error Spotting", "Parallelism & Sentence Structure", "Conditionals & Wish Clauses", "Vocabulary (Nuanced Synonyms/Antonyms)", "Rhetorical Devices, Tone & Register", "Discourse Markers & Sentence Connectors"],
    reasoning: ["Critical Reasoning & Statement-Assumptions", "Complex Matrix & Circular Arrangements", "Mathematical Inequalities & Data Interpretation", "Coded Syllogisms & Venn Logic", "Cube Cuts, Faces & Painting", "Spatial Visualisation & Embedded Figures"]
  },
  10: {
    maths: ["Real Numbers & Fundamental Theorem of Arithmetic", "Polynomials (Zeroes & Coefficients)", "Pair of Linear Equations in Two Variables", "Quadratic Equations (Discriminant & Roots)", "Arithmetic Progressions (AP)", "Triangles (Similarity, Pythagoras Theorem)", "Coordinate Geometry (Section Formula)", "Trigonometry & Heights/Distances", "Circles & Tangents", "Surface Areas and Volumes", "Statistics & Probability"],
    science: ["Chemical Reactions and Equations", "Acids, Bases and Salts", "Metals and Non-metals", "Carbon and its Compounds", "Life Processes (Nutrition, Respiration, Transport, Excretion)", "Control and Coordination", "How do Organisms Reproduce?", "Heredity and Evolution", "Light - Reflection and Refraction", "The Human Eye and Colourful World", "Electricity (Ohm's Law, Resistance networks)", "Magnetic Effects of Electric Current"],
    english: ["Advanced Syntax & Sentence Transformation", "Phrasal Verbs & Idiomatic Expressions", "Grammatical Concord & Modifier Placement", "Punctuation in Complex & Compound Sentences", "Lexical Range & Precise Diction", "High-Level Olympiad Verbal Aptitude"],
    reasoning: ["Logical Deduction & Truth-Teller/Liar Logic", "Advanced Seating Arrangement & Scheduling", "Cause & Effect, Statement & Course of Action", "Analytical Decision Making", "Complex Coded Blood Relations & Directions", "Non-Verbal Grouping & Series"]
  }
};

/**
 * Returns next subject in weekly rotation
 */
function getNextSubject(lastSubject) {
  if (!lastSubject) return "maths";
  const idx = ROTATION_CYCLE.indexOf(lastSubject.toLowerCase());
  if (idx === -1 || idx === ROTATION_CYCLE.length - 1) {
    return ROTATION_CYCLE[0];
  }
  return ROTATION_CYCLE[idx + 1];
}

/**
 * Get random or weekly topics for class and subject
 */
function getTopicsForClass(classNum, subject) {
  const c = parseInt(classNum, 10);
  const sub = (subject || "").toLowerCase();
  if (SYLLABUS_BY_CLASS[c] && SYLLABUS_BY_CLASS[c][sub]) {
    return SYLLABUS_BY_CLASS[c][sub];
  }
  return ["General Curriculum Topics"];
}

module.exports = {
  ROTATION_CYCLE,
  SUBJECT_DETAILS,
  SYLLABUS_BY_CLASS,
  getNextSubject,
  getTopicsForClass
};
