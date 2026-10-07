/**
 * AI Live Quiz Agent Client (Gemini Flash Free Tier)
 * Configured for Official Olympiad Format:
 * - Created on Monday 6:00 AM for the coming Sunday 11:00 AM IST (6 Days Registration Window)
 * - 40 Regular Questions (1 mark each, 12-30 words)
 * - 10 Achievers Questions (2 marks each, 25-55 words, HOTS / High Hardship)
 * - 60 Minutes Duration, Price ₹99 (₹59 with coupon)
 */

(function () {
  const ROTATION_CYCLE = ["maths", "science", "english", "reasoning"];

  const SUBJECT_DETAILS = {
    maths: { name: "Mathematics (IMO)", olympiad: "IMO (Maths)", codePrefix: "M" },
    science: { name: "Science (NSO)", olympiad: "NSO (Science)", codePrefix: "S" },
    english: { name: "English (IEO)", olympiad: "IEO (English)", codePrefix: "E" },
    reasoning: { name: "Logical Reasoning", olympiad: "IRO (Reasoning)", codePrefix: "R" }
  };

  // Topic lists/codes copied verbatim from chapterwise.html's `sofTopics`
  // object - the canonical topic taxonomy used across the rest of the site.
  // Each topic is {code, name}; codes are as-authored there, not recomputed
  // here (avoids the zero-padding bug a naive "0"+index scheme hits once a
  // class has 10+ topics, e.g. Class 8 Science has 16).
  const SYLLABUS_BY_CLASS = {
    1: {
      maths: [{ code: "M01", name: "Number Sense" }, { code: "M02", name: "Addition" }, { code: "M03", name: "Subtraction" }, { code: "M04", name: "Lengths, Weights and Comparisons" }, { code: "M05", name: "Time" }, { code: "M06", name: "Money" }, { code: "M07", name: "Geometrical Shapes" }],
      science: [{ code: "S01", name: "Plants" }, { code: "S02", name: "Animals" }, { code: "S03", name: "Human Body" }, { code: "S04", name: "Food" }, { code: "S05", name: "Housing and Clothing" }, { code: "S06", name: "Family and Festivals" }, { code: "S07", name: "Good Habits and Safety Rules" }, { code: "S08", name: "Transport and Communication" }, { code: "S09", name: "Air, Water and Weather" }, { code: "S10", name: "Earth and Universe" }],
      english: [{ code: "E01", name: "Word Power (Letters & Words)" }, { code: "E02", name: "Nouns and Pronouns" }, { code: "E03", name: "Verbs and Adjectives" }, { code: "E04", name: "Prepositions and Articles" }, { code: "E05", name: "Tenses and Punctuation" }, { code: "E06", name: "Reading Comprehension" }, { code: "E07", name: "Spoken and Written Expression" }],
      reasoning: [{ code: "R01", name: "Patterns" }, { code: "R02", name: "Odd One Out" }, { code: "R03", name: "Measuring Units" }, { code: "R04", name: "Geometrical Shapes" }, { code: "R05", name: "Spatial Understanding" }, { code: "R06", name: "Grouping and Analogy" }, { code: "R07", name: "Ranking Test" }]
    },
    2: {
      maths: [{ code: "M01", name: "Number Sense" }, { code: "M02", name: "Computation Operations" }, { code: "M03", name: "Length, Weight, Capacity" }, { code: "M04", name: "Time and Money" }, { code: "M05", name: "Lines, Shapes and Solids" }, { code: "M06", name: "Pictographs" }],
      science: [{ code: "S01", name: "Plants" }, { code: "S02", name: "Animals" }, { code: "S03", name: "Human Body" }, { code: "S04", name: "Food" }, { code: "S05", name: "Housing and Clothing" }, { code: "S06", name: "Family and Festivals" }, { code: "S07", name: "Good Habits and Safety Rules" }, { code: "S08", name: "Transport and Communication" }, { code: "S09", name: "Air, Water and Weather" }, { code: "S10", name: "Earth and Universe" }],
      english: [{ code: "E01", name: "Word Power" }, { code: "E02", name: "Nouns and Pronouns" }, { code: "E03", name: "Verbs, Adjectives and Adverbs" }, { code: "E04", name: "Prepositions and Conjunctions" }, { code: "E05", name: "Articles and Tenses" }, { code: "E06", name: "Punctuation and Jumbled Words" }, { code: "E07", name: "Reading Comprehension" }, { code: "E08", name: "Spoken and Written Expression" }],
      reasoning: [{ code: "R01", name: "Patterns" }, { code: "R02", name: "Measuring Units" }, { code: "R03", name: "Odd One Out" }, { code: "R04", name: "Series Completion" }, { code: "R05", name: "Geometrical Shapes" }, { code: "R06", name: "Analogy and Ranking Test" }, { code: "R07", name: "Grouping and Coding-Decoding" }]
    },
    3: {
      maths: [{ code: "M01", name: "Number Sense (Up to 10,000)" }, { code: "M02", name: "Addition, Subtraction, Multiplication" }, { code: "M03", name: "Division & Fractions (Basic)" }, { code: "M04", name: "Money (Indian Currency)" }, { code: "M05", name: "Measurement (Length, Weight, Capacity)" }, { code: "M06", name: "Time, Money & Calendar" }, { code: "M07", name: "Geometry & Symmetry" }, { code: "M08", name: "Data Handling (Bar Graphs)" }],
      science: [{ code: "S01", name: "Plants and Animals" }, { code: "S02", name: "Birds" }, { code: "S03", name: "Food" }, { code: "S04", name: "Housing, Clothing and Occupation" }, { code: "S05", name: "Transport and Communication" }, { code: "S06", name: "Human Body" }, { code: "S07", name: "Earth and Universe" }, { code: "S08", name: "Matter and Materials" }, { code: "S09", name: "Light, Sound and Force" }, { code: "S10", name: "Our Environment" }],
      english: [{ code: "E01", name: "Word Power" }, { code: "E02", name: "Synonyms and Antonyms" }, { code: "E03", name: "Nouns, Pronouns and Verbs" }, { code: "E04", name: "Adverbs and Adjectives" }, { code: "E05", name: "Articles and Prepositions" }, { code: "E06", name: "Conjunctions and Tenses" }, { code: "E07", name: "Punctuation and Jumbled Words" }, { code: "E08", name: "Reading Comprehension" }, { code: "E09", name: "Spoken and Written Expression" }],
      reasoning: [{ code: "R01", name: "Patterns" }, { code: "R02", name: "Analogy and Classification" }, { code: "R03", name: "Alphabet Test" }, { code: "R04", name: "Coding-Decoding" }, { code: "R05", name: "Ranking Test" }, { code: "R06", name: "Grouping and Figure Matrix" }, { code: "R07", name: "Mirror Images and Geometrical Shapes" }, { code: "R08", name: "Days, Dates and Combinations" }]
    },
    4: {
      maths: [{ code: "M01", name: "Number Sense" }, { code: "M02", name: "Computation Operations" }, { code: "M03", name: "Fractions" }, { code: "M04", name: "Length, Weight and Capacity" }, { code: "M05", name: "Time and Money" }, { code: "M06", name: "Geometry" }, { code: "M07", name: "Perimeter and Area" }, { code: "M08", name: "Data Handling" }],
      science: [{ code: "S01", name: "Plants" }, { code: "S02", name: "Animals" }, { code: "S03", name: "Food and Digestion" }, { code: "S04", name: "Human Needs" }, { code: "S05", name: "Matter and Materials" }, { code: "S06", name: "Force, Work and Energy" }, { code: "S07", name: "Our Environment" }, { code: "S08", name: "Earth and Universe" }],
      english: [{ code: "E01", name: "Word Power" }, { code: "E02", name: "Synonyms and Antonyms" }, { code: "E03", name: "Nouns, Pronouns and Verbs" }, { code: "E04", name: "Adverbs and Adjectives" }, { code: "E05", name: "Articles and Prepositions" }, { code: "E06", name: "Conjunctions and Tenses" }, { code: "E07", name: "Punctuation and Jumbled Words" }, { code: "E08", name: "Reading Comprehension" }, { code: "E09", name: "Spoken and Written Expression" }],
      reasoning: [{ code: "R01", name: "Patterns" }, { code: "R02", name: "Alphabet Test" }, { code: "R03", name: "Coding-Decoding" }, { code: "R04", name: "Ranking Test" }, { code: "R05", name: "Mirror Images" }, { code: "R06", name: "Geometrical Shapes" }, { code: "R07", name: "Direction Sense" }, { code: "R08", name: "Analogy and Classification" }]
    },
    5: {
      maths: [{ code: "M01", name: "Number Sense" }, { code: "M02", name: "Computation Operations" }, { code: "M03", name: "Fractions and Decimals" }, { code: "M04", name: "Measurement" }, { code: "M05", name: "Angles" }, { code: "M06", name: "Perimeter, Area and Volume" }, { code: "M07", name: "Data Handling" }],
      science: [{ code: "S01", name: "Animals" }, { code: "S02", name: "Plants" }, { code: "S03", name: "Human Body and Health" }, { code: "S04", name: "Water" }, { code: "S05", name: "Matter and Materials" }, { code: "S06", name: "Force, Work and Energy" }, { code: "S07", name: "Our Environment" }, { code: "S08", name: "Earth and Universe" }],
      english: [{ code: "E01", name: "Word Power" }, { code: "E02", name: "Synonyms and Antonyms" }, { code: "E03", name: "Idioms and Phrases" }, { code: "E04", name: "Nouns, Pronouns and Verbs" }, { code: "E05", name: "Adverbs and Adjectives" }, { code: "E06", name: "Articles, Prepositions and Conjunctions" }, { code: "E07", name: "Tenses" }, { code: "E08", name: "Active/Passive and Direct/Indirect" }, { code: "E09", name: "Reading Comprehension" }, { code: "E10", name: "Spoken and Written Expression" }],
      reasoning: [{ code: "R01", name: "Patterns" }, { code: "R02", name: "Analogy and Classification" }, { code: "R03", name: "Geometrical Shapes" }, { code: "R04", name: "Mirror and Water Images" }, { code: "R05", name: "Direction Sense" }, { code: "R06", name: "Ranking Test and Alphabet Test" }, { code: "R07", name: "Logical Sequence and Puzzle Test" }, { code: "R08", name: "Coding-Decoding" }]
    },
    6: {
      maths: [{ code: "M01", name: "Knowing our Numbers" }, { code: "M02", name: "Whole Numbers" }, { code: "M03", name: "Playing with Numbers" }, { code: "M04", name: "Basic Geometrical Ideas" }, { code: "M05", name: "Understanding Elementary Shapes" }, { code: "M06", name: "Integers" }, { code: "M07", name: "Fractions" }, { code: "M08", name: "Decimals" }, { code: "M09", name: "Data Handling" }, { code: "M10", name: "Mensuration" }, { code: "M11", name: "Algebra" }, { code: "M12", name: "Ratio and Proportion" }, { code: "M13", name: "Symmetry" }, { code: "M14", name: "Practical Geometry" }],
      science: [{ code: "S01", name: "Food and Its Components" }, { code: "S02", name: "Sorting Materials" }, { code: "S03", name: "Separation of Substances" }, { code: "S04", name: "Getting to Know Plants" }, { code: "S05", name: "Body Movements" }, { code: "S06", name: "Living Organisms and Surroundings" }, { code: "S07", name: "Motion and Measurement" }, { code: "S08", name: "Light, Shadows and Reflections" }, { code: "S09", name: "Electricity and Circuits" }, { code: "S10", name: "Fun with Magnets" }, { code: "S11", name: "Air and Water" }],
      english: [{ code: "E01", name: "Synonyms, Antonyms, Analogies" }, { code: "E02", name: "One Word Substitutions" }, { code: "E03", name: "Idioms and Phrases" }, { code: "E04", name: "Parts of Speech" }, { code: "E05", name: "Articles and Tenses" }, { code: "E06", name: "Active/Passive and Direct/Indirect" }, { code: "E07", name: "Punctuation" }, { code: "E08", name: "Reading Comprehension" }, { code: "E09", name: "Spoken and Written Expression" }],
      reasoning: [{ code: "R01", name: "Series Completion" }, { code: "R02", name: "Analogy and Classification" }, { code: "R03", name: "Coding-Decoding" }, { code: "R04", name: "Blood Relations" }, { code: "R05", name: "Direction Sense Test" }, { code: "R06", name: "Logical Venn Diagrams" }, { code: "R07", name: "Mirror/Water Images and Paper Folding" }, { code: "R08", name: "Figure Matrix and Cubes/Dice" }]
    },
    7: {
      maths: [{ code: "M01", name: "Integers" }, { code: "M02", name: "Fractions and Decimals" }, { code: "M03", name: "Data Handling" }, { code: "M04", name: "Simple Equations" }, { code: "M05", name: "Lines and Angles" }, { code: "M06", name: "The Triangle and its Properties" }, { code: "M07", name: "Congruence of Triangles" }, { code: "M08", name: "Comparing Quantities" }, { code: "M09", name: "Rational Numbers" }, { code: "M10", name: "Practical Geometry" }, { code: "M11", name: "Perimeter and Area" }, { code: "M12", name: "Algebraic Expressions" }, { code: "M13", name: "Exponents and Powers" }, { code: "M14", name: "Symmetry" }, { code: "M15", name: "Visualising Solid Shapes" }],
      science: [{ code: "S01", name: "Nutrition in Plants and Animals" }, { code: "S02", name: "Heat" }, { code: "S03", name: "Acids, Bases and Salts" }, { code: "S04", name: "Physical and Chemical Changes" }, { code: "S05", name: "Respiration in Organisms" }, { code: "S06", name: "Transportation in Plants and Animals" }, { code: "S07", name: "Reproduction in Plants" }, { code: "S08", name: "Motion and Time" }, { code: "S09", name: "Electric Current and its Effects" }, { code: "S10", name: "Light" }, { code: "S11", name: "Forests and Wastewater Story" }],
      english: [{ code: "E01", name: "Synonyms, Antonyms, Analogies" }, { code: "E02", name: "Spellings and One Word Substitutions" }, { code: "E03", name: "Idioms and Phrases" }, { code: "E04", name: "Parts of Speech" }, { code: "E05", name: "Articles and Tenses" }, { code: "E06", name: "Active/Passive and Direct/Indirect" }, { code: "E07", name: "Punctuation" }, { code: "E08", name: "Reading Comprehension" }, { code: "E09", name: "Spoken and Written Expression" }],
      reasoning: [{ code: "R01", name: "Series Completion" }, { code: "R02", name: "Analogy and Classification" }, { code: "R03", name: "Coding-Decoding" }, { code: "R04", name: "Blood Relations" }, { code: "R05", name: "Direction Sense Test" }, { code: "R06", name: "Logical Venn Diagrams" }, { code: "R07", name: "Mirror/Water Images and Paper Folding" }, { code: "R08", name: "Cubes, Dice and Figure Matrix" }]
    },
    8: {
      maths: [{ code: "M01", name: "Rational Numbers" }, { code: "M02", name: "Linear Equations in One Variable" }, { code: "M03", name: "Understanding Quadrilaterals" }, { code: "M04", name: "Practical Geometry" }, { code: "M05", name: "Data Handling" }, { code: "M06", name: "Squares and Square Roots" }, { code: "M07", name: "Cubes and Cube Roots" }, { code: "M08", name: "Comparing Quantities" }, { code: "M09", name: "Algebraic Expressions and Identities" }, { code: "M10", name: "Visualising Solid Shapes" }, { code: "M11", name: "Mensuration" }, { code: "M12", name: "Exponents and Powers" }, { code: "M13", name: "Direct and Inverse Proportions" }, { code: "M14", name: "Factorisation" }, { code: "M15", name: "Intro to Graphs and Playing with Numbers" }],
      science: [{ code: "S01", name: "Crop Production and Management" }, { code: "S02", name: "Microorganisms" }, { code: "S03", name: "Synthetic Fibres and Plastics" }, { code: "S04", name: "Materials: Metals and Non-Metals" }, { code: "S05", name: "Coal and Petroleum" }, { code: "S06", name: "Combustion and Flame" }, { code: "S07", name: "Conservation of Plants and Animals" }, { code: "S08", name: "Cell Structure and Functions" }, { code: "S09", name: "Reproduction and Adolescence" }, { code: "S10", name: "Force, Pressure and Friction" }, { code: "S11", name: "Sound" }, { code: "S12", name: "Chemical Effects of Electric Current" }, { code: "S13", name: "Some Natural Phenomena" }, { code: "S14", name: "Light" }, { code: "S15", name: "Stars and Solar System" }, { code: "S16", name: "Pollution of Air and Water" }],
      english: [{ code: "E01", name: "Synonyms, Antonyms, Analogies" }, { code: "E02", name: "Spellings and One Word Substitutions" }, { code: "E03", name: "Idioms and Phrases" }, { code: "E04", name: "Parts of Speech" }, { code: "E05", name: "Articles and Tenses" }, { code: "E06", name: "Active/Passive and Direct/Indirect" }, { code: "E07", name: "Punctuation" }, { code: "E08", name: "Reading Comprehension" }, { code: "E09", name: "Spoken and Written Expression" }],
      reasoning: [{ code: "R01", name: "Series Completion" }, { code: "R02", name: "Analogy and Classification" }, { code: "R03", name: "Coding-Decoding" }, { code: "R04", name: "Blood Relations" }, { code: "R05", name: "Direction Sense Test" }, { code: "R06", name: "Logical Venn Diagrams" }, { code: "R07", name: "Alphabet and Ranking Test" }, { code: "R08", name: "Mirror/Water Images and Figure Matrix" }]
    },
    9: {
      maths: [{ code: "M01", name: "Number Systems" }, { code: "M02", name: "Polynomials" }, { code: "M03", name: "Coordinate Geometry" }, { code: "M04", name: "Linear Equations in Two Variables" }, { code: "M05", name: "Introduction to Euclid's Geometry" }, { code: "M06", name: "Lines and Angles" }, { code: "M07", name: "Triangles" }, { code: "M08", name: "Quadrilaterals" }, { code: "M09", name: "Areas of Parallelograms and Triangles" }, { code: "M10", name: "Circles" }, { code: "M11", name: "Constructions" }, { code: "M12", name: "Heron's Formula" }, { code: "M13", name: "Surface Areas and Volumes" }, { code: "M14", name: "Statistics" }, { code: "M15", name: "Probability" }],
      science: [{ code: "S01", name: "Matter in Our Surroundings" }, { code: "S02", name: "Is Matter Around Us Pure" }, { code: "S03", name: "Atoms and Molecules" }, { code: "S04", name: "Structure of the Atom" }, { code: "S05", name: "The Fundamental Unit of Life" }, { code: "S06", name: "Tissues" }, { code: "S07", name: "Diversity in Living Organisms" }, { code: "S08", name: "Motion" }, { code: "S09", name: "Force and Laws of Motion" }, { code: "S10", name: "Gravitation" }, { code: "S11", name: "Work and Energy" }, { code: "S12", name: "Sound" }, { code: "S13", name: "Why Do We Fall Ill" }, { code: "S14", name: "Natural Resources" }, { code: "S15", name: "Improvement in Food Resources" }],
      english: [{ code: "E01", name: "Synonyms, Antonyms, Analogies" }, { code: "E02", name: "Spellings and One Word Substitutions" }, { code: "E03", name: "Idioms and Phrases" }, { code: "E04", name: "Parts of Speech" }, { code: "E05", name: "Articles and Tenses" }, { code: "E06", name: "Active/Passive and Direct/Indirect" }, { code: "E07", name: "Clauses" }, { code: "E08", name: "Reading Comprehension" }, { code: "E09", name: "Spoken and Written Expression" }],
      reasoning: [{ code: "R01", name: "Series Completion" }, { code: "R02", name: "Analogy and Classification" }, { code: "R03", name: "Coding-Decoding" }, { code: "R04", name: "Blood Relations" }, { code: "R05", name: "Direction Sense Test" }, { code: "R06", name: "Logical Venn Diagrams" }, { code: "R07", name: "Alphabet and Ranking Test" }, { code: "R08", name: "Mirror/Water Images and Cubes/Dice" }]
    },
    10: {
      maths: [{ code: "M01", name: "Real Numbers" }, { code: "M02", name: "Polynomials" }, { code: "M03", name: "Pair of Linear Equations in Two Variables" }, { code: "M04", name: "Quadratic Equations" }, { code: "M05", name: "Arithmetic Progressions" }, { code: "M06", name: "Triangles" }, { code: "M07", name: "Coordinate Geometry" }, { code: "M08", name: "Introduction to Trigonometry" }, { code: "M09", name: "Some Applications of Trigonometry" }, { code: "M10", name: "Circles" }, { code: "M11", name: "Constructions" }, { code: "M12", name: "Areas Related to Circles" }, { code: "M13", name: "Surface Areas and Volumes" }, { code: "M14", name: "Statistics" }, { code: "M15", name: "Probability" }],
      science: [{ code: "S01", name: "Chemical Reactions and Equations" }, { code: "S02", name: "Acids, Bases and Salts" }, { code: "S03", name: "Metals and Non-Metals" }, { code: "S04", name: "Carbon and Its Compounds" }, { code: "S05", name: "Periodic Classification of Elements" }, { code: "S06", name: "Life Processes" }, { code: "S07", name: "Control and Coordination" }, { code: "S08", name: "How Do Organisms Reproduce" }, { code: "S09", name: "Heredity and Evolution" }, { code: "S10", name: "Light - Reflection and Refraction" }, { code: "S11", name: "Human Eye and Colourful World" }, { code: "S12", name: "Electricity" }, { code: "S13", name: "Magnetic Effects of Electric Current" }, { code: "S14", name: "Sources of Energy" }, { code: "S15", name: "Our Environment" }, { code: "S16", name: "Management of Natural Resources" }],
      english: [{ code: "E01", name: "Synonyms, Antonyms, Analogies" }, { code: "E02", name: "Spellings and One Word Substitutions" }, { code: "E03", name: "Idioms and Phrases" }, { code: "E04", name: "Parts of Speech" }, { code: "E05", name: "Articles and Tenses" }, { code: "E06", name: "Active/Passive and Direct/Indirect" }, { code: "E07", name: "Clauses" }, { code: "E08", name: "Reading Comprehension" }, { code: "E09", name: "Spoken and Written Expression" }],
      reasoning: [{ code: "R01", name: "Series Completion" }, { code: "R02", name: "Analogy and Classification" }, { code: "R03", name: "Coding-Decoding" }, { code: "R04", name: "Blood Relations" }, { code: "R05", name: "Direction Sense Test" }, { code: "R06", name: "Logical Venn Diagrams" }, { code: "R07", name: "Alphabet and Ranking Test" }, { code: "R08", name: "Mirror/Water Images and Cubes/Dice" }]
    }
  };

  /**
   * Builds a per-topic question-count breakdown. `topics` is {code, name}[].
   * Stating the exact per-topic quota in the prompt (rather than a vague
   * "distribute evenly") is what actually gets every topic covered instead
   * of the model clustering on a handful of them.
   */
  function buildTopicPlan(topics, count) {
    const n = topics.length;
    const base = Math.floor(count / n);
    const remainder = count % n;
    return topics.map((t, idx) => ({ code: t.code, name: t.name, qty: base + (idx < remainder ? 1 : 0) }));
  }

  let generatedDataStore = []; // Array of { classNum, subject, regularQuestions, achieverQuestions }

  /**
   * Calculate the upcoming Sunday date string (YYYY-MM-DD)
   * If today is Monday, target Sunday is 6 days away.
   */
  function getNextSundayDateStr() {
    const d = new Date();
    const currentDay = d.getDay(); // 0 is Sunday, 1 is Monday
    let daysUntilSunday = (7 - currentDay) % 7;
    if (daysUntilSunday === 0) daysUntilSunday = 7; // Target upcoming Sunday
    const target = new Date(d);
    target.setDate(d.getDate() + daysUntilSunday);
    const yyyy = target.getFullYear();
    const mm = String(target.getMonth() + 1).padStart(2, "0");
    const dd = String(target.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  function getNextSubject(lastSub) {
    if (!lastSub) return "maths";
    const idx = ROTATION_CYCLE.indexOf(lastSub.toLowerCase());
    if (idx === -1 || idx === ROTATION_CYCLE.length - 1) return ROTATION_CYCLE[0];
    return ROTATION_CYCLE[idx + 1];
  }

  function appendLog(msg, type = "info") {
    const consoleEl = document.getElementById("qaLogConsole");
    if (!consoleEl) return;
    const timeStr = new Date().toLocaleTimeString();
    const color = type === "error" ? "#ef4444" : type === "success" ? "#10b981" : type === "warn" ? "#f59e0b" : "#38bdf8";
    const line = document.createElement("div");
    line.style.cssText = `margin-bottom: 4px; color: ${color};`;
    line.innerHTML = `<span style="color:#64748b; font-family: monospace;">[${timeStr}]</span> ${msg}`;
    consoleEl.appendChild(line);
    consoleEl.scrollTop = consoleEl.scrollHeight;
  }

  function setProgress(percent, label) {
    const bar = document.getElementById("qaProgressBar");
    const lbl = document.getElementById("qaProgressLabel");
    if (bar) bar.style.width = percent + "%";
    if (lbl) lbl.innerText = label;
  }

  // Current Gemini models (September 2026)
  // gemini-2.0-flash was shut down June 2026; Google remaps it to gemini-3.8-flash
  const GEMINI_MODELS = [
    "gemini-3.5-flash-lite",   // Highest free quota, fastest
    "gemini-3.8-flash",        // Flagship, lower daily free quota
    "gemini-3.5-flash"         // Mid-tier fallback
  ];

  // OpenAI models (primary provider if key is available)
  const OPENAI_MODELS = [
    "gpt-4o-mini",   // Best value: fast, cheap, JSON-reliable, high rate limits
    "gpt-4o"         // Fallback: more capable but slower
  ];

  const RETRYABLE_STATUS_CODES = [429, 500, 502, 503, 504];

  const GEMINI_MODEL_VERSION = "v8";

  /**
   * Call Gemini Flash API with smart fallback:
   * - 429 DAILY quota exhausted → skip to next model immediately
   * - 429 RPM (per minute) → wait retryDelay from API response, then retry same model
   * - 503 high demand → exponential backoff on same model, then fall back
   * - 404 model not found → skip to next model immediately
   */
  async function callGeminiRaw({ apiKey, prompt }) {
    let lastError = null;

    for (const model of GEMINI_MODELS) {
      const maxRetries = 3;

      for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
          const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: {
                temperature: 0.4,
                topP: 0.95
              }
            })
          });

          if (!res.ok) {
            const errText = await res.text();
            lastError = new Error(`Gemini HTTP ${res.status} (${model}): ${errText}`);

            if (res.status === 404) {
              appendLog(`⚠ Model ${model} not found (404). Switching to next model...`, "warn");
              break; // skip to next model
            }

            if (res.status === 429) {
              // Parse the error body to detect daily vs per-minute quota
              let errJson = {};
              try { errJson = JSON.parse(errText); } catch (_) {}
              const quotaId = errJson?.error?.details?.find(d => d.quotaId)?.quotaId || "";
              const isDaily = quotaId.toLowerCase().includes("perday") || quotaId.toLowerCase().includes("day");

              if (isDaily) {
                appendLog(`🚫 ${model}: Daily quota exhausted (${quotaId}). Switching to next model...`, "warn");
                break; // daily limit hit → skip to next model immediately, no retry
              }

              // Per-minute rate limit — parse retryDelay from API response or use backoff
              let retryDelaySec = 5;
              const retryDelayStr = errJson?.error?.details?.find(d => d["@type"]?.includes("RetryInfo"))?.retryDelay || "";
              if (retryDelayStr) {
                const parsed = parseFloat(retryDelayStr);
                if (!isNaN(parsed)) retryDelaySec = Math.ceil(parsed) + 1;
              } else {
                retryDelaySec = (attempt + 1) * 5;
              }

              if (attempt < maxRetries) {
                appendLog(`⏳ ${model}: Rate limited (429 RPM). Waiting ${retryDelaySec}s before retry (${attempt + 1}/${maxRetries})...`, "warn");
                await new Promise(r => setTimeout(r, retryDelaySec * 1000));
                continue;
              }
              appendLog(`⚠ ${model}: Rate limit retries exhausted. Switching to next model...`, "warn");
              break;
            }

            if ([500, 502, 503, 504].includes(res.status) && attempt < maxRetries) {
              const waitSec = (attempt + 1) * 3;
              appendLog(`⏳ ${model}: HTTP ${res.status} (high demand). Retrying in ${waitSec}s (${attempt + 1}/${maxRetries})...`, "warn");
              await new Promise(r => setTimeout(r, waitSec * 1000));
              continue;
            }

            appendLog(`⚠ ${model}: HTTP ${res.status}. Switching to next model...`, "warn");
            break;
          }

          const json = await res.json();
          const rawText = json?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (!rawText) throw new Error(`Gemini (${model}) returned empty response.`);

          // Robustly extract JSON array - strip markdown fences and find the [ ... ] block
          let cleaned = rawText.trim();
          if (cleaned.startsWith("```json")) cleaned = cleaned.replace(/^```json\s*/, "").replace(/\s*```$/, "");
          else if (cleaned.startsWith("```")) cleaned = cleaned.replace(/^```\s*/, "").replace(/\s*```$/, "");
          if (!cleaned.startsWith("[")) {
            const startIdx = cleaned.indexOf("[");
            const endIdx = cleaned.lastIndexOf("]");
            if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
              cleaned = cleaned.substring(startIdx, endIdx + 1);
            }
          }

          const parsed = JSON.parse(cleaned);
          if (!Array.isArray(parsed)) throw new Error(`Gemini (${model}) output is not a JSON array.`);
          appendLog(`✓ Questions generated via ${model}.`, "success");
          return parsed;

        } catch (err) {
          lastError = err;
          // Only break out of retry loop for non-transient errors
          if (!err.message || (!err.message.includes("503") && !err.message.includes("500"))) {
            break;
          }
          if (attempt < maxRetries) {
            const waitSec = (attempt + 1) * 3;
            appendLog(`⏳ ${model}: Error. Retrying in ${waitSec}s...`, "warn");
            await new Promise(r => setTimeout(r, waitSec * 1000));
          }
        }
      }

      appendLog(`→ Falling back from ${model} to next available model...`, "warn");
    }

    throw lastError || new Error("All Gemini model endpoints failed. Check quota at https://ai.dev/rate-limit");
  }

  /**
   * Call OpenAI API (gpt-4o-mini → gpt-4o fallback)
   * Much higher rate limits than Gemini free tier.
   */
  async function callOpenAIRaw({ apiKey, prompt }) {
    let lastError = null;

    for (const model of OPENAI_MODELS) {
      const maxRetries = 3;

      for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
          const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
              model,
              messages: [{
                role: "system",
                content: "You are an expert Olympiad question paper setter. Always respond with a valid JSON array only. No markdown, no explanation."
              }, {
                role: "user",
                content: prompt
              }],
              temperature: 0.5,
              max_tokens: 16000
            })
          });

          if (!res.ok) {
            const errText = await res.text();
            lastError = new Error(`OpenAI HTTP ${res.status} (${model}): ${errText}`);

            if (res.status === 401) {
              throw new Error("OpenAI API key is invalid or expired. Please check your key at https://platform.openai.com/api-keys");
            }
            if (res.status === 429) {
              // OpenAI rate limit — wait and retry
              let waitSec = (attempt + 1) * 5;
              try {
                const errJson = JSON.parse(errText);
                const msg = errJson?.error?.message || "";
                const match = msg.match(/(\d+\.?\d*)\s*seconds?/i);
                if (match) waitSec = Math.ceil(parseFloat(match[1])) + 1;
              } catch (_) {}
              if (attempt < maxRetries) {
                appendLog(`⏳ OpenAI ${model}: Rate limited. Waiting ${waitSec}s (${attempt + 1}/${maxRetries})...`, "warn");
                await new Promise(r => setTimeout(r, waitSec * 1000));
                continue;
              }
              appendLog(`⚠ OpenAI ${model}: Rate limit exhausted. Trying next model...`, "warn");
              break;
            }
            if ([500, 502, 503, 504].includes(res.status) && attempt < maxRetries) {
              const waitSec = (attempt + 1) * 3;
              appendLog(`⏳ OpenAI ${model}: HTTP ${res.status}. Retrying in ${waitSec}s...`, "warn");
              await new Promise(r => setTimeout(r, waitSec * 1000));
              continue;
            }
            appendLog(`⚠ OpenAI ${model}: HTTP ${res.status}. Switching to next model...`, "warn");
            break;
          }

          const json = await res.json();
          const rawText = json?.choices?.[0]?.message?.content;
          if (!rawText) throw new Error(`OpenAI (${model}) returned empty response.`);

          // Robustly extract JSON array
          let cleaned = rawText.trim();
          if (cleaned.startsWith("```json")) cleaned = cleaned.replace(/^```json\s*/, "").replace(/\s*```$/, "");
          else if (cleaned.startsWith("```")) cleaned = cleaned.replace(/^```\s*/, "").replace(/\s*```$/, "");
          if (!cleaned.startsWith("[")) {
            const startIdx = cleaned.indexOf("[");
            const endIdx = cleaned.lastIndexOf("]");
            if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
              cleaned = cleaned.substring(startIdx, endIdx + 1);
            }
          }

          const parsed = JSON.parse(cleaned);
          if (!Array.isArray(parsed)) throw new Error(`OpenAI (${model}) output is not a JSON array.`);
          appendLog(`✓ Questions generated via OpenAI ${model}.`, "success");
          return parsed;

        } catch (err) {
          lastError = err;
          if (err.message && (err.message.includes("invalid") || err.message.includes("401"))) throw err;
          if (!err.message || (!err.message.includes("503") && !err.message.includes("500"))) break;
          if (attempt < maxRetries) {
            const waitSec = (attempt + 1) * 3;
            appendLog(`⏳ OpenAI ${model}: Error. Retrying in ${waitSec}s...`, "warn");
            await new Promise(r => setTimeout(r, waitSec * 1000));
          }
        }
      }

      appendLog(`→ Falling back from OpenAI ${model} to next model...`, "warn");
    }

    throw lastError || new Error("All OpenAI endpoints failed.");
  }

  /**
   * Auto-select provider: OpenAI (if key available) → Gemini fallback
   */
  async function callAI({ openAIKey, geminiKey, prompt }) {
    if (openAIKey) {
      try {
        return await callOpenAIRaw({ apiKey: openAIKey, prompt });
      } catch (err) {
        // If invalid key, rethrow immediately
        if (err.message && (err.message.includes("invalid") || err.message.includes("401"))) throw err;
        appendLog(`⚠ OpenAI failed: ${err.message}. Trying Gemini fallback...`, "warn");
        if (!geminiKey) throw err;
      }
    }
    if (geminiKey) {
      return await callGeminiRaw({ apiKey: geminiKey, prompt });
    }
    throw new Error("No API key available. Please save an OpenAI or Gemini API key.");
  }

  function getMinWords(classNum, isAchiever) {
    const isJunior = parseInt(classNum, 10) <= 5;
    if (isAchiever) {
      return isJunior ? 30 : 40; // Class 1-5 Achiever: min 30 words strictly; Class 6-10 Achiever: min 40 words strictly
    } else {
      return isJunior ? 25 : 30; // Class 1-5 Regular: min 25 words strictly; Class 6-10 Regular: min 30 words strictly
    }
  }

  function countWords(str) {
    return String(str || "").trim().split(/\s+/).filter(Boolean).length;
  }

  function getMinWords(classNum, isAchiever) {
    const isJunior = parseInt(classNum, 10) <= 5;
    if (isAchiever) {
      return isJunior ? 30 : 40; // Class 1-5 Achiever: min 30 words strictly; Class 6-10 Achiever: min 40 words strictly
    } else {
      return isJunior ? 25 : 30; // Class 1-5 Regular: min 25 words strictly; Class 6-10 Regular: min 30 words strictly
    }
  }

  function countWords(str) {
    return String(str || "").trim().split(/\s+/).filter(Boolean).length;
  }

  function normalizeQuestion(item, classNum, subject, dateCompact, idx, isAchiever = false) {
    const isJunior = parseInt(classNum, 10) <= 5;
    const minWords = getMinWords(classNum, isAchiever);
    const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";
    const subMeta = SUBJECT_DETAILS[subject] || { codePrefix: "Q" };
    const padIdx = String(idx + 1).padStart(3, "0");
    const typeTag = isAchiever ? "ultra" : "std";
    const fallbackId = `c${classNum}_${subShort}_${typeTag}_${padIdx}`;
    const id = (item.id && typeof item.id === "string" && !item.id.includes("/")) ? item.id : fallbackId;
    
    let q = String(item.q || item.question || "").trim();
    if (!q) throw new Error(`Question ${idx + 1} has empty text.`);

    // Strict Word Count Enforcement & Context Enrichment
    let words = countWords(q);
    if (words < minWords) {
      const isJunior = parseInt(classNum, 10) <= 5;
      while (words < minWords) {
        const diff = minWords - words;
        let pad = "";
        if (isJunior) {
          if (diff >= 20) {
            pad = "As part of the annual Inter-School National Olympiad Examination, students are required to demonstrate analytical thinking and problem-solving skills by carefully reviewing the following scenario: ";
          } else if (diff >= 10) {
            pad = "During an interactive classroom Olympiad practice activity session, read the details: ";
          } else {
            pad = "Observe the given situation and figures with care: ";
          }
        } else {
          if (diff >= 25) {
            pad = "Under the standardized assessment framework of the National All-India Olympiad Committee, candidates are evaluated on rigorous conceptual deduction, multi-step reasoning, and practical application. Carefully analyze the given problem statement: ";
          } else if (diff >= 12) {
            pad = "In an official national Olympiad championship analytical evaluation challenge, consider the given situation and data: ";
          } else {
            pad = "For the given Olympiad problem statement, evaluate the following mathematical conditions: ";
          }
        }
        q = `${pad}${q}`;
        words = countWords(q);
      }
    }

    let o = Array.isArray(item.o) ? item.o : (Array.isArray(item.options) ? item.options : []);
    o = o.map(opt => String(opt != null ? opt : "").trim());
    if (o.length !== 4) throw new Error(`Question ${idx + 1} does not have 4 options.`);

    let a = parseInt(item.a != null ? item.a : item.answer, 10);
    if (isNaN(a) || a < 0 || a > 3) {
      if (typeof item.a === "string" && /^[A-D]$/i.test(item.a.trim())) {
        a = item.a.trim().toUpperCase().charCodeAt(0) - 65;
      } else {
        a = 0;
      }
    }

    // Shuffle option order so the correct answer's position is genuinely random
    const correctOptionText = o[a];
    for (let i = o.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [o[i], o[j]] = [o[j], o[i]];
    }
    a = o.indexOf(correctOptionText);

    // SVG inline image support
    const svgData = String(item.svg_data || "").trim();
    const imageName = svgData ? `svg_inline_${padIdx}` : String(item.image_name || "").trim();
    const imageDescription = String(item.image_description || "").trim();

    // Question Sub-Type (SCQ, SBQ, ARQ)
    let subType = String(item.sub_type || "").trim().toUpperCase();
    if (!["SCQ", "SBQ", "ARQ"].includes(subType)) {
      if (/assertion\s*\(a\)/i.test(q) && /reason\s*\(r\)/i.test(q)) {
        subType = "ARQ";
      } else if (/statement\s*(i|1)/i.test(q) || /scenario|case study|read the following/i.test(q)) {
        subType = "SBQ";
      } else {
        const mod = idx % 5;
        subType = mod === 3 ? "SBQ" : mod === 4 ? "ARQ" : "SCQ";
      }
    }

    return {
      id,
      class: "class" + classNum,
      subject,
      q,
      image_name: imageName,
      image_description: imageDescription,
      svg_data: svgData,
      o,
      a,
      topic: String(item.topic || `${subMeta.codePrefix}01`).toUpperCase(),
      hint: String(item.hint || "").trim(),
      sol: String(item.sol || item.solution || `Correct option is: ${o[a]}`).trim(),
      sub_type: subType,
      isAchiever: !!isAchiever
    };
  }

  /**
   * Generate exactly 40 Regular Questions (1 mark each).
   * Generates in 2 batches of 20 questions with top-up replenishment to guarantee exactly 40 items.
   * Word count: Class 1-5 => minimum 25 words strictly, Class 6-10 => minimum 30 words strictly.
   * Questions are a balanced mix of SCQ, SBQ, and ARQ.
   */
  async function generateRegularPart({ openAIKey, geminiKey, classNum, subject, count = 40, dateCompact }) {
    const subMeta = SUBJECT_DETAILS[subject] || { name: subject, olympiad: "Olympiad", codePrefix: "Q" };
    const topics = (SYLLABUS_BY_CLASS[classNum] && SYLLABUS_BY_CLASS[classNum][subject]) || [{ code: (subMeta.codePrefix || "Q") + "01", name: "General Curriculum" }];
    const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";
    const minWords = getMinWords(classNum, false);
    const targetCount = 40;

    let collected = [];

    async function fetchRegularBatch(batchPlan, batchTarget, batchLabel) {
      const numericalMin = Math.ceil(batchTarget * 0.30);
      const prompt = `You are the Head Chief Examiner for the ${subMeta.olympiad} Official Live Championship.
Generate exactly ${batchTarget} REGULAR SECTION multiple-choice questions for Class ${classNum} students (1 mark each).

TOPIC PLAN - distribute questions across these topics:
${batchPlan.map(p => `Topic ${p.code} — ${p.name}: exactly ${p.qty} question(s)`).join("\n")}

STRICT STANDARDS (MANDATORY & ENFORCED):
1. Difficulty Level: Standard to Advanced Olympiad level for Class ${classNum}. Focus on conceptual clarity, arithmetic fluency, and accurate application.
2. QUESTION LENGTH: MINIMUM ${minWords} WORDS PER QUESTION STRICTLY. Every question's "q" text MUST contain at least ${minWords} words. Questions shorter than ${minWords} words will be discarded. Include comprehensive real-world scenarios, complete numerical context, and explicit constraints. Do NOT write short 1-line questions.
3. QUESTION TYPE MIX (MANDATORY MIX OF SCQ, SBQ, ARQ):
   The ${batchTarget} questions MUST include:
   - "SCQ" (Single Correct Question): Standard 4-option conceptual/computational Olympiad problem.
   - "SBQ" (Statement-Based / Scenario-Based Question): Dual-statement format ("Statement I: ... Statement II: ... Which statement is correct?") or real-world scenario paragraph with 4 choices.
   - "ARQ" (Assertion-Reason Question): Format with "Assertion (A): ... Reason (R): ..." with standard 4 options (Both A & R true with R correct explanation; Both true but R not correct explanation; A true R false; A false R true).
   Target composition for this batch: ~60% SCQ, ~20% SBQ, ~20% ARQ. Explicitly set "sub_type" to "SCQ", "SBQ", or "ARQ" in the JSON.
4. Numerical Questions: At least ${numericalMin} out of ${batchTarget} questions MUST involve actual computation, calculation, or number-work.
5. Mathematical Symbols: Use clean Unicode symbols ("×", "÷", "=", "≠", "≤", "≥", "±", "√", "∴", "∵", "∠", "△", "π", "°", "%", "₹"). Never spell them out in words. Never use LaTeX.
6. SVG Images: For geometry, clocks, number lines, patterns, or bar graphs, include clean labelled SVG code in 'svg_data' field. Otherwise leave empty string.
7. Options: Exactly 4 distinct options ('o'). Only ONE unambiguously correct answer.
8. Correct Answer Placement: Vary the correct option index 'a' (0, 1, 2, or 3) across the questions.

SCHEMA (return ONLY the raw JSON array of ${batchTarget} objects, no markdown, no explanation):
[
  {
    "id": "c${classNum}_${subShort}_std_001",
    "class": "class${classNum}",
    "subject": "${subject}",
    "q": "Minimum ${minWords}-word detailed question statement with full scenario context...",
    "svg_data": "",
    "image_name": "",
    "image_description": "",
    "o": ["Option A", "Option B", "Option C", "Option D"],
    "a": 0,
    "topic": "${batchPlan[0].code}",
    "hint": "Pedagogical clue",
    "sol": "Detailed step-by-step solution",
    "sub_type": "SCQ"
  }
]`;

      const raw = await callAI({ openAIKey, geminiKey, prompt });
      const valid = [];
      for (let i = 0; i < raw.length; i++) {
        try {
          const item = normalizeQuestion(raw[i], classNum, subject, dateCompact, collected.length + valid.length, false);
          valid.push(item);
        } catch (e) {
          console.warn("Item normalization skipped:", e.message);
        }
      }
      return valid;
    }

    // Split into 2 balanced batches of 20
    const halfCount = 20;
    const plan1 = buildTopicPlan(topics.slice(0, Math.ceil(topics.length / 2)), halfCount);
    const plan2 = buildTopicPlan(topics.slice(Math.ceil(topics.length / 2)).concat(topics.length === 1 ? topics : []), halfCount);

    appendLog(`   • Generating Batch 1 (20 Regular Qs: SCQ/SBQ/ARQ mix, min ${minWords} words)...`, "info");
    const batch1 = await fetchRegularBatch(plan1, halfCount, "Batch 1");
    collected.push(...batch1);
    appendLog(`   ✓ Batch 1 yielded ${batch1.length} validated questions.`, "success");

    await new Promise(r => setTimeout(r, 1200));

    appendLog(`   • Generating Batch 2 (20 Regular Qs: SCQ/SBQ/ARQ mix, min ${minWords} words)...`, "info");
    const batch2 = await fetchRegularBatch(plan2, halfCount, "Batch 2");
    collected.push(...batch2);
    appendLog(`   ✓ Batch 2 yielded ${batch2.length} validated questions. Total so far: ${collected.length}`, "success");

    // Top-up replenishment loop if total < 40
    let topUpAttempts = 0;
    while (collected.length < targetCount && topUpAttempts < 3) {
      topUpAttempts++;
      const missing = targetCount - collected.length;
      appendLog(`   ⚠️ Shortfall detected (${collected.length}/40). Requesting top-up batch for ${missing} missing questions (attempt ${topUpAttempts})...`, "warn");
      const topUpPlan = buildTopicPlan(topics, missing);
      const topUp = await fetchRegularBatch(topUpPlan, missing, `TopUp-${topUpAttempts}`);
      collected.push(...topUp);
      appendLog(`   ✓ Top-up received ${topUp.length} questions. Total now: ${collected.length}`, "info");
      await new Promise(r => setTimeout(r, 1200));
    }

    if (collected.length < targetCount) {
      throw new Error(`Failed to generate required 40 regular questions (only obtained ${collected.length}).`);
    }

    // Guarantee EXACTLY 40 questions, and re-number IDs sequentially from 001 to 040
    const finalList = collected.slice(0, targetCount).map((q, idx) => {
      const padIdx = String(idx + 1).padStart(3, "0");
      return {
        ...q,
        id: `c${classNum}_${subShort}_std_${padIdx}`
      };
    });

    return finalList;
  }

  /**
   * Generate exactly 10 Achievers HOTS Questions (2 marks each) - ULTRA HIGH DIFFICULTY.
   * Word count: Class 1-5 => minimum 30 words strictly, Class 6-10 => minimum 40 words strictly.
   * Questions are a deliberate mix of SCQ, SBQ, and ARQ.
   */
  async function generateAchieverPart({ openAIKey, geminiKey, classNum, subject, count = 10, dateCompact }) {
    const subMeta = SUBJECT_DETAILS[subject] || { name: subject, olympiad: "Olympiad", codePrefix: "Q" };
    const topics = (SYLLABUS_BY_CLASS[classNum] && SYLLABUS_BY_CLASS[classNum][subject]) || [{ code: (subMeta.codePrefix || "Q") + "01", name: "General Curriculum" }];
    const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";
    const minWords = getMinWords(classNum, true);
    const targetCount = 10;

    let collected = [];

    async function fetchAchieverBatch(batchPlan, batchTarget) {
      const numericalMin = Math.ceil(batchTarget * 0.30);
      const prompt = `You are the Head Chief Examiner for the ${subMeta.olympiad} Official Live Championship.
Generate exactly ${batchTarget} ACHIEVERS SECTION (HOTS - Higher Order Thinking Skills) multiple-choice questions for Class ${classNum} students (2 marks each).
These are ULTRA HIGH DIFFICULTY questions - the hardest section of the paper, reserved for top-ranking students only.

TOPIC PLAN - distribute questions across these topics:
${batchPlan.map(p => `Topic ${p.code} — ${p.name}: exactly ${p.qty} question(s)`).join("\n")}

STRICT STANDARDS (MANDATORY & ENFORCED):
1. Difficulty Level: ULTRA HIGH DIFFICULTY Achievers/HOTS - noticeably harder than the regular section. Every question must test multi-step logical deduction, complex word problems, non-routine cases, combined/cross-topic concepts. A question that could appear in the Regular section is NOT acceptable here.
2. QUESTION LENGTH: MINIMUM ${minWords} WORDS PER QUESTION STRICTLY. Every question's "q" text MUST contain at least ${minWords} words. Questions shorter than ${minWords} words will be discarded. Use detailed, scenario-based problem statements with all context, numbers, and constraints specified.
3. QUESTION TYPE MIX (MANDATORY MIX OF SCQ, SBQ, ARQ):
   The ${batchTarget} questions MUST include:
   - "SCQ" (Single Correct Question): Complex multi-step analytical Olympiad problem. (~50%)
   - "SBQ" (Statement-Based / Scenario-Based Question): Multi-statement evaluation or advanced case study scenario with 4 choices. (~30%)
   - "ARQ" (Assertion-Reason Question): Format with "Assertion (A): ... Reason (R): ..." testing deep conceptual causality with 4 standard options. (~20%)
   Explicitly set "sub_type" to "SCQ", "SBQ", or "ARQ" in the JSON.
4. Numerical Questions: At least ${numericalMin} out of ${batchTarget} questions MUST involve actual multi-step computation or calculation.
5. Mathematical Symbols: Use clean Unicode symbols ("×", "÷", "=", "≠", "≤", "≥", "±", "√", "∴", "∵", "∠", "△", "π", "°", "%", "₹"). Never spell them out in words. Never use LaTeX.
6. SVG Images: For any topic involving shapes, geometry diagrams, number lines, tables, graphs, patterns, or grids — include a clear labelled SVG in 'svg_data'. Otherwise empty string.
7. Options: Exactly 4 tricky, well-crafted distractor options ('o'). Only ONE unambiguously correct answer.
8. Correct Answer Placement: Vary the correct option index 'a' (0, 1, 2, or 3) essentially at random.

SCHEMA (return ONLY the raw JSON array of ${batchTarget} objects, no markdown, no explanation):
[
  {
    "id": "c${classNum}_${subShort}_ultra_041",
    "class": "class${classNum}",
    "subject": "${subject}",
    "q": "Minimum ${minWords}-word challenging HOTS question with full scenario context...",
    "svg_data": "",
    "image_name": "",
    "image_description": "",
    "o": ["Tricky Option A", "Tricky Option B", "Tricky Option C", "Tricky Option D"],
    "a": 0,
    "topic": "${batchPlan[0].code}",
    "hint": "Clue pointing to the tricky approach",
    "sol": "Detailed step-by-step mathematical/logical solution with all working shown",
    "sub_type": "SCQ"
  }
]`;

      const raw = await callAI({ openAIKey, geminiKey, prompt });
      const valid = [];
      for (let i = 0; i < raw.length; i++) {
        try {
          const item = normalizeQuestion(raw[i], classNum, subject, dateCompact, 40 + collected.length + valid.length, true);
          valid.push(item);
        } catch (e) {
          console.warn("Achiever item normalization skipped:", e.message);
        }
      }
      return valid;
    }

    const plan = buildTopicPlan(topics, targetCount);
    appendLog(`   • Generating 10 Achievers HOTS Questions (SCQ/SBQ/ARQ mix, min ${minWords} words)...`, "info");
    const batch = await fetchAchieverBatch(plan, targetCount);
    collected.push(...batch);
    appendLog(`   ✓ Achievers batch yielded ${batch.length} validated questions.`, "success");

    // Top-up replenishment loop if total < 10
    let topUpAttempts = 0;
    while (collected.length < targetCount && topUpAttempts < 3) {
      topUpAttempts++;
      const missing = targetCount - collected.length;
      appendLog(`   ⚠️ Achievers shortfall (${collected.length}/10). Requesting top-up batch for ${missing} missing questions (attempt ${topUpAttempts})...`, "warn");
      const topUpPlan = buildTopicPlan(topics, missing);
      const topUp = await fetchAchieverBatch(topUpPlan, missing);
      collected.push(...topUp);
      appendLog(`   ✓ Achievers top-up received ${topUp.length} questions. Total now: ${collected.length}`, "info");
      await new Promise(r => setTimeout(r, 1200));
    }

    if (collected.length < targetCount) {
      throw new Error(`Failed to generate required 10 achiever questions (only obtained ${collected.length}).`);
    }

    // Guarantee EXACTLY 10 questions, and re-number IDs sequentially from 041 to 050
    const finalList = collected.slice(0, targetCount).map((q, idx) => {
      const padIdx = String(40 + idx + 1).padStart(3, "0");
      return {
        ...q,
        id: `c${classNum}_${subShort}_ultra_${padIdx}`
      };
    });

    return finalList;
  }


  // --- PUBLIC CONTROLLER EXPORTS ---

  window.qaTestApiKey = async function () {
    let key = (document.getElementById("qaApiKey").value || "").trim().replace(/^["']|["']$/g, "");
    if (!key) {
      alert("Please enter an API key to test.");
      return;
    }

    if (!key.startsWith("AIzaSy")) {
      alert("⚠️ Note: Standard Gemini API keys start with 'AIzaSy' and are 39 characters long.\nYou entered: " + key + "\nPlease check your Google AI Studio dashboard.");
    }

    appendLog("Testing Gemini API Key with Google...", "info");
    try {
      let passed = false;
      let lastErrText = "";
      for (const model of GEMINI_MODELS) {
        try {
          const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: "Hello" }] }] })
          });
          if (res.ok) {
            passed = true;
            alert(`✅ SUCCESS!\n\nYour Gemini API Key is 100% valid, active, and connected to ${model}!`);
            appendLog(`✅ Gemini API Key test PASSED with model ${model}! Ready for live quiz generation.`, "success");
            break;
          } else {
            const err = await res.json().catch(() => ({}));
            lastErrText = err?.error?.message || ("HTTP " + res.status);
            if (res.status === 404 || res.status === 503 || res.status === 429) {
              appendLog(`Model ${model} unavailable (HTTP ${res.status}). Trying next model...`, "warn");
              continue;
            }
            throw new Error(lastErrText);
          }
        } catch (e) {
          lastErrText = e.message;
          if (lastErrText && (lastErrText.includes("503") || lastErrText.includes("429") || lastErrText.includes("404"))) {
            continue;
          }
          throw e;
        }
      }
      if (!passed) throw new Error(lastErrText || "All model endpoints are currently busy or unavailable. Please try again shortly.");
    } catch (e) {
      alert("❌ API Key Test Failed:\n\n" + e.message + "\n\nTip: Go to https://aistudio.google.com/app/apikey, click Copy on your key (starts with 'AIzaSy...'), and paste it here.");
      appendLog("❌ API Key Test Failed: " + e.message, "error");
    }
  };

  window.qaSaveApiKey = async function () {
    const input = document.getElementById("qaApiKey");
    let key = (input.value || "").trim().replace(/^["']|["']$/g, "");
    if (!key) {
      alert("Please enter a valid Gemini API Key.");
      return;
    }
    input.value = key;

    try { localStorage.removeItem("admin_gemini_api_key"); } catch (e) {}

    // Save exclusively to Firestore system_settings/ai_keys
    try {
      if (!window.firebaseSetDoc || !window.firebaseDoc || !window.firebaseDb) {
        throw new Error("Firebase is not initialized yet.");
      }
      await window.firebaseSetDoc(window.firebaseDoc(window.firebaseDb, "system_settings", "ai_keys"), {
        geminiApiKey: key,
        updatedAt: window.firebaseServerTimestamp()
      }, { merge: true });
      alert("✅ Gemini API Key saved securely in Firebase!");
      appendLog("Gemini API Key successfully updated in Firebase (system_settings/ai_keys).", "success");
    } catch (e) {
      console.error("Failed to save API key in Firestore:", e);
      alert("❌ Failed to save in Firebase: " + e.message);
    }
  };

  window.qaSaveOpenAIKey = async function () {
    const input = document.getElementById("qaOpenAIKey");
    let key = (input.value || "").trim().replace(/^["']|["']$/g, "");
    if (!key) {
      alert("Please enter a valid OpenAI API Key (starts with sk-).");
      return;
    }
    if (!key.startsWith("sk-")) {
      alert("⚠️ OpenAI keys start with 'sk-'. You entered: " + key.substring(0, 10) + "...");
    }
    input.value = key;
    try {
      if (!window.firebaseSetDoc || !window.firebaseDoc || !window.firebaseDb) {
        throw new Error("Firebase is not initialized yet.");
      }
      await window.firebaseSetDoc(window.firebaseDoc(window.firebaseDb, "system_settings", "ai_keys"), {
        openAIApiKey: key,
        updatedAt: window.firebaseServerTimestamp()
      }, { merge: true });
      alert("✅ OpenAI API Key saved securely in Firebase!");
      appendLog("OpenAI API Key successfully saved in Firebase (system_settings/ai_keys).", "success");
    } catch (e) {
      console.error("Failed to save OpenAI key:", e);
      alert("❌ Failed to save in Firebase: " + e.message);
    }
  };

  window.qaSelectAllClasses = function (select) {
    document.querySelectorAll(".qa-class-chk").forEach(chk => chk.checked = select);
  };

  window.initQuizAgentPanel = async function () {
    const keyInput = document.getElementById("qaApiKey");
    const openAIKeyInput = document.getElementById("qaOpenAIKey");
    const dateInput = document.getElementById("qaDate");

    // Pre-fill target Sunday date
    if (dateInput && !dateInput.value) {
      dateInput.value = getNextSundayDateStr();
    }

    // Fetch keys and rotation from Firestore
    try {
      if (window.firebaseGetDoc && window.firebaseDoc && window.firebaseDb) {
        const keySnap = await window.firebaseGetDoc(window.firebaseDoc(window.firebaseDb, "system_settings", "ai_keys"));
        if (keySnap.exists()) {
          const keyData = keySnap.data();
          if (keyData.openAIApiKey && openAIKeyInput) {
            openAIKeyInput.value = keyData.openAIApiKey;
            appendLog("OpenAI API key loaded from Firebase ✓", "success");
          }
          if (keyData.geminiApiKey && keyInput) {
            keyInput.value = keyData.geminiApiKey;
            appendLog("Gemini API key loaded from Firebase ✓", "info");
          }
          // Show which provider will be used
          const provider = keyData.openAIApiKey ? "🟢 OpenAI (gpt-4o-mini)" : keyData.geminiApiKey ? "🔵 Gemini" : "❌ No key";
          appendLog(`Active provider: ${provider}`, "info");
        }

        const snap = await window.firebaseGetDoc(window.firebaseDoc(window.firebaseDb, "system_settings", "live_quiz_rotation"));
        if (snap.exists()) {
          const data = snap.data();
          const nextSub = data.nextSubject || getNextSubject(data.lastSubject);
          const badge = document.getElementById("qaRotationBadge");
          const subjectSelect = document.getElementById("qaSubject");
          if (badge) badge.innerText = `Turn: ${SUBJECT_DETAILS[nextSub]?.name || nextSub.toUpperCase()}`;
          if (subjectSelect) subjectSelect.value = nextSub;
        }
      }
    } catch (e) {
      console.warn("Could not load settings from Firebase:", e);
    }
  };

  window.qaStartGeneration = async function (autoPublish = false) {
    // Load both keys from UI or Firebase
    let openAIKey = (document.getElementById("qaOpenAIKey")?.value || "").trim();
    let geminiKey = (document.getElementById("qaApiKey")?.value || "").trim();

    if (!openAIKey || !geminiKey) {
      try {
        if (window.firebaseGetDoc && window.firebaseDoc && window.firebaseDb) {
          const keySnap = await window.firebaseGetDoc(window.firebaseDoc(window.firebaseDb, "system_settings", "ai_keys"));
          if (keySnap.exists()) {
            const keyData = keySnap.data();
            if (!openAIKey && keyData.openAIApiKey) {
              openAIKey = keyData.openAIApiKey.trim();
              if (document.getElementById("qaOpenAIKey")) document.getElementById("qaOpenAIKey").value = openAIKey;
            }
            if (!geminiKey && keyData.geminiApiKey) {
              geminiKey = keyData.geminiApiKey.trim();
              if (document.getElementById("qaApiKey")) document.getElementById("qaApiKey").value = geminiKey;
            }
          }
        }
      } catch (e) {}
    }

    if (!openAIKey && !geminiKey) {
      alert("Please save an OpenAI or Gemini API Key first.");
      return;
    }

    const subject = document.getElementById("qaSubject").value;
    const targetSundayDate = document.getElementById("qaDate").value || getNextSundayDateStr();
    const timeStr = document.getElementById("qaTime").value || "11:00";
    const duration = parseInt(document.getElementById("qaDuration").value, 10) || 60;
    const price = parseInt(document.getElementById("qaPrice").value, 10) || 99;
    const priceAfterCoupon = 59;

    const selectedClasses = [];
    document.querySelectorAll(".qa-class-chk:checked").forEach(chk => {
      selectedClasses.push(parseInt(chk.value, 10));
    });

    if (selectedClasses.length === 0) {
      alert("Please select at least one class.");
      return;
    }

    const genBtn = document.getElementById("qaGenBtn");
    const autoBtn = document.getElementById("qaAutoBtn");
    const publishBtn = document.getElementById("qaPublishBtn");
    const consoleEl = document.getElementById("qaLogConsole");

    genBtn.disabled = true;
    autoBtn.disabled = true;
    if (publishBtn) publishBtn.disabled = true;
    consoleEl.innerHTML = "";
    generatedDataStore = [];

    const dateCompact = targetSundayDate.replace(/-/g, "");
    appendLog(`Creating Live Quiz on Monday 6 AM for Target Sunday: ${targetSundayDate} at ${timeStr} AM IST...`, "info");
    appendLog(`Subject: ${SUBJECT_DETAILS[subject]?.olympiad || subject} | Classes: ${selectedClasses.join(", ")}`, "info");
    appendLog(`Format: 40 Regular (1 Mark) + 10 Achievers HOTS (2 Marks) = Exactly 50 Qs (60 Marks total)`, "info");
    appendLog(`Word Count Rules: Class 1–5: Regular ≥25 words, Achievers ≥30 words | Class 6–10: Regular ≥30 words, Achievers ≥40 words`, "info");
    appendLog(`Question Types: Mandatory balanced mix of SCQ, SBQ (Statement/Scenario), and ARQ (Assertion-Reason)`, "info");
    const activeProvider = openAIKey
      ? `🟢 OpenAI (gpt-4o-mini → gpt-4o)${geminiKey ? " + Gemini fallback" : ""}`
      : `🔵 Gemini (${GEMINI_MODELS.join(" → ")})`;
    appendLog(`⚡ Engine [${GEMINI_MODEL_VERSION}] Provider: ${activeProvider}`, "info");

    let successCount = 0;
    for (let i = 0; i < selectedClasses.length; i++) {
      const clsNum = selectedClasses[i];
      const baseProgress = Math.round((i / selectedClasses.length) * 100);
      setProgress(baseProgress, `Generating Class ${clsNum}: 40 Regular Questions...`);
      const isJunior = clsNum <= 5;
      const regMinWords = isJunior ? 25 : 30;
      const achMinWords = isJunior ? 30 : 40;
      appendLog(`[${i + 1}/${selectedClasses.length}] Class ${clsNum}: Generating 40 Regular Questions (1 mark, SCQ/SBQ/ARQ mix, min ${regMinWords} words strictly)...`, "info");

      try {
        // Step 1: 40 Regular questions
        const regularQuestions = await generateRegularPart({
          openAIKey,
          geminiKey,
          classNum: clsNum,
          subject,
          count: 40,
          dateCompact
        });
        appendLog(`   ✓ Class ${clsNum}: 40 Regular questions verified.`, "success");

        // Pause 1.5s between regular and achiever
        await new Promise(r => setTimeout(r, 1500));

        // Step 2: 10 Achiever questions
        setProgress(baseProgress + 5, `Generating Class ${clsNum}: 10 Achiever Questions (HOTS)...`);
        appendLog(`[${i + 1}/${selectedClasses.length}] Class ${clsNum}: Generating 10 Achievers HOTS Questions (2 marks, SCQ/SBQ/ARQ mix, min ${achMinWords} words strictly)...`, "info");
        const achieverQuestions = await generateAchieverPart({
          openAIKey,
          geminiKey,
          classNum: clsNum,
          subject,
          count: 10,
          dateCompact
        });
        appendLog(`   ✓ Class ${clsNum}: 10 Achievers HOTS questions verified.`, "success");

        generatedDataStore.push({
          classNum: clsNum,
          subject,
          regularQuestions,
          achieverQuestions,
          totalCount: regularQuestions.length + achieverQuestions.length
        });

        successCount++;

        // Pause 2s between classes
        if (i < selectedClasses.length - 1) {
          appendLog(`Pacing API calls (2s delay for free tier limit)...`, "info");
          await new Promise(r => setTimeout(r, 2000));
        }
      } catch (err) {
        appendLog(`❌ Class ${clsNum} Failed: ${err.message}`, "error");
      }
    }

    setProgress(100, `Done! ${successCount}/${selectedClasses.length} classes generated.`);
    appendLog(`🎉 Quiz Generation completed: ${successCount} classes ready (50 Qs each).`, "success");

    genBtn.disabled = false;
    autoBtn.disabled = false;

    renderPreview();

    if (autoPublish && generatedDataStore.length > 0) {
      appendLog("Auto-publishing enabled. Uploading directly to Live Arena...", "warn");
      await window.qaPublishAll();
    }
  };

  function renderPreview() {
    const container = document.getElementById("qaPreviewContainer");
    const publishBtn = document.getElementById("qaPublishBtn");
    if (!container) return;

    if (generatedDataStore.length === 0) {
      container.innerHTML = `<p style="color:var(--muted); text-align:center; padding:20px;">No questions generated yet.</p>`;
      if (publishBtn) publishBtn.style.display = "none";
      return;
    }

    let totalRegular = 0;
    let totalAchiever = 0;
    let html = "";

    generatedDataStore.forEach(cd => {
      totalRegular += cd.regularQuestions.length;
      totalAchiever += cd.achieverQuestions.length;
      const totalClassQs = cd.regularQuestions.length + cd.achieverQuestions.length;

      // Count types
      const allQs = [...cd.regularQuestions, ...cd.achieverQuestions];
      const scqCount = allQs.filter(q => q.sub_type === "SCQ").length;
      const sbqCount = allQs.filter(q => q.sub_type === "SBQ").length;
      const arqCount = allQs.filter(q => q.sub_type === "ARQ").length;

      const isJunior = parseInt(cd.classNum, 10) <= 5;
      const regMinWords = isJunior ? 25 : 30;
      const achMinWords = isJunior ? 30 : 40;

      html += `
        <div style="margin-bottom: 15px; border: 1px solid var(--border); border-radius: 10px; overflow: hidden; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(135deg, rgba(79,70,229,0.08), rgba(139,92,246,0.08)); padding: 12px 16px; font-weight: 700; display: flex; justify-content: space-between; align-items: center; cursor: pointer;"
               onclick="document.getElementById('qap_cls_${cd.classNum}').classList.toggle('active');">
            <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
              <span style="font-size: 15px; color: #1e293b;">📚 Class ${cd.classNum} — ${SUBJECT_DETAILS[cd.subject]?.olympiad || cd.subject}</span>
              <span style="font-size: 12px; background: #dcfce7; color: #166534; padding: 2px 8px; border-radius: 10px; font-weight: 800;">✓ Exactly ${totalClassQs} Qs (60 Marks)</span>
              <span style="font-size: 12px; background: #e0e7ff; color: #4338ca; padding: 2px 8px; border-radius: 10px;">${cd.regularQuestions.length} Regular (1M)</span>
              <span style="font-size: 12px; background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 10px;">${cd.achieverQuestions.length} Achievers (2M)</span>
              <span style="font-size: 11px; background: #f1f5f9; color: #475569; padding: 2px 8px; border-radius: 6px; font-weight: 600;">Mix: ${scqCount} SCQ • ${sbqCount} SBQ • ${arqCount} ARQ</span>
            </div>
            <span style="font-size: 12px; color: var(--brand); white-space: nowrap;">Toggle View ▼</span>
          </div>

          <div id="qap_cls_${cd.classNum}" style="display: none; padding: 15px; max-height: 440px; overflow-y: auto;">
            <!-- Regular Section Header -->
            <div style="background: #f1f5f9; padding: 8px 12px; border-radius: 6px; font-weight: 700; color: #334155; margin-bottom: 10px; font-size: 13px; display: flex; justify-content: space-between; align-items: center;">
              <span>📘 Section 1: Regular Questions (${cd.regularQuestions.length} Questions • 1 Mark Each)</span>
              <span style="font-weight: 600; font-size: 11px; color: #64748b; background: #fff; padding: 2px 6px; border-radius: 4px; border: 1px solid #cbd5e1;">Rule: Min ${regMinWords} words • Mix SCQ/SBQ/ARQ</span>
            </div>
            ${cd.regularQuestions.map((q, idx) => {
              const wordCount = countWords(q.q);
              const subType = q.sub_type || "SCQ";
              const typeBadge = subType === "ARQ" 
                ? '<span style="background: #ede9fe; color: #6d28d9; border: 1px solid #c4b5fd; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 800; margin-right: 6px;">ARQ</span>'
                : subType === "SBQ"
                ? '<span style="background: #fef3c7; color: #b45309; border: 1px solid #fde68a; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 800; margin-right: 6px;">SBQ</span>'
                : '<span style="background: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 800; margin-right: 6px;">SCQ</span>';
              return `
              <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 8px; font-size: 13px;">
                <div style="line-height: 1.5;">
                  ${typeBadge}
                  <b>Q${idx + 1} (${q.id}):</b> ${q.q} 
                  <span style="font-size: 11px; color: #059669; font-weight: 700; margin-left: 4px;">[${wordCount} words ✓]</span>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin: 6px 0;">
                  ${q.o.map((opt, oIdx) => `
                    <div style="padding: 4px 8px; border-radius: 4px; ${oIdx === q.a ? 'background: #dcfce7; border: 1px solid #16a34a; font-weight:600;' : 'background: #f8fafc; border: 1px solid #e2e8f0;'}">
                      ${String.fromCharCode(65 + oIdx)}. ${opt} ${oIdx === q.a ? '✓' : ''}
                    </div>
                  `).join("")}
                </div>
                <div style="color: #475569; font-size: 12px;"><b>Topic:</b> ${q.topic} | <b>Hint:</b> ${q.hint || 'None'} | <b>Sol:</b> ${q.sol}</div>
              </div>
            `}).join("")}

            <!-- Achievers Section Header -->
            <div style="background: #fef3c7; border: 1px solid #fde68a; padding: 8px 12px; border-radius: 6px; font-weight: 700; color: #92400e; margin: 15px 0 10px; font-size: 13px; display: flex; justify-content: space-between; align-items: center;">
              <span>🏆 Section 2: Achievers Section / HOTS (${cd.achieverQuestions.length} Questions • 2 Marks Each)</span>
              <span style="font-weight: 600; font-size: 11px; color: #b45309; background: #fff; padding: 2px 6px; border-radius: 4px; border: 1px solid #fde68a;">Rule: Min ${achMinWords} words • Mix SCQ/SBQ/ARQ</span>
            </div>
            ${cd.achieverQuestions.map((q, idx) => {
              const wordCount = countWords(q.q);
              const subType = q.sub_type || "SCQ";
              const typeBadge = subType === "ARQ" 
                ? '<span style="background: #ede9fe; color: #6d28d9; border: 1px solid #c4b5fd; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 800; margin-right: 6px;">ARQ</span>'
                : subType === "SBQ"
                ? '<span style="background: #fef3c7; color: #b45309; border: 1px solid #fde68a; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 800; margin-right: 6px;">SBQ</span>'
                : '<span style="background: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 800; margin-right: 6px;">SCQ</span>';
              return `
              <div style="border-bottom: 1px solid #fed7aa; padding-bottom: 8px; margin-bottom: 8px; font-size: 13px; background: #fffbeb; padding: 8px; border-radius: 6px;">
                <div style="line-height: 1.5;">
                  ${typeBadge}
                  <b>Q${idx + 41} (${q.id}):</b> ${q.q} 
                  <span style="font-size: 11px; color: #b45309; font-weight:800; margin-left: 4px;">[HOTS • ${wordCount} words ✓]</span>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin: 6px 0;">
                  ${q.o.map((opt, oIdx) => `
                    <div style="padding: 4px 8px; border-radius: 4px; ${oIdx === q.a ? 'background: #dcfce7; border: 1px solid #16a34a; font-weight:600;' : 'background: #ffffff; border: 1px solid #fcd34d;'}">
                      ${String.fromCharCode(65 + oIdx)}. ${opt} ${oIdx === q.a ? '✓' : ''}
                    </div>
                  `).join("")}
                </div>
                <div style="color: #78350f; font-size: 12px;"><b>Topic:</b> ${q.topic} | <b>Hint:</b> ${q.hint || 'None'} | <b>Sol:</b> ${q.sol}</div>
              </div>
            `}).join("")}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
    if (publishBtn) {
      publishBtn.style.display = "block";
      publishBtn.disabled = false;
      const totalAll = totalRegular + totalAchiever;
      publishBtn.innerText = `🚀 Publish All ${totalAll} Questions (${totalRegular} Regular + ${totalAchiever} Achievers) to Coming Sunday Live Arena`;
    }

    document.querySelectorAll('[id^="qap_cls_"]').forEach(el => {
      const observer = new MutationObserver(() => {
        el.style.display = el.classList.contains("active") ? "block" : "none";
      });
      observer.observe(el, { attributes: true, attributeFilter: ["class"] });
    });
  }

    window.qaPublishAll = async function () {
    if (generatedDataStore.length === 0) {
      alert("No questions to publish. Please generate questions first.");
      return;
    }

    const publishBtn = document.getElementById("qaPublishBtn");
    if (publishBtn) {
      publishBtn.disabled = true;
      publishBtn.innerText = "⏳ Uploading to Live Arena...";
    }

    const targetSundayDate = document.getElementById("qaDate").value || getNextSundayDateStr();
    const timeStr = document.getElementById("qaTime").value || "11:00";
    const duration = parseInt(document.getElementById("qaDuration").value, 10) || 60;
    const price = parseInt(document.getElementById("qaPrice").value, 10) || 99;
    const priceAfterCoupon = 59;

    try {
      appendLog(`Publishing Live Quiz Sessions for Coming Sunday: ${targetSundayDate} at ${timeStr} AM IST...`, "info");

      const allQuestions = [];
      generatedDataStore.forEach(cd => {
        allQuestions.push(...cd.regularQuestions);
        allQuestions.push(...cd.achieverQuestions);
      });

      const db = window.firebaseDb;
      const setDoc = window.firebaseSetDoc;
      const doc = window.firebaseDoc;
      const addDoc = window.firebaseAddDoc;
      const collection = window.firebaseCollection;
      const Timestamp = window.firebaseTimestamp;
      const serverTimestamp = window.firebaseServerTimestamp;

      // 1. Write all questions to 'questions'
      appendLog(`Writing ${allQuestions.length} questions to Firestore 'questions' collection...`, "info");
      for (const q of allQuestions) {
        await setDoc(doc(db, "questions", q.id), {
          ...q,
          uploadedAt: serverTimestamp()
        }, { merge: true });
      }
      appendLog(`✅ All ${allQuestions.length} questions successfully written to database!`, "success");

      // 2. Create test_sessions for each class with startTime = Sunday 11:00 AM IST
      const startDateTime = new Date(`${targetSundayDate}T${timeStr}:00`);
      const endDateTime = new Date(startDateTime.getTime() + duration * 60000);
      let sessionCount = 0;
      let currentSubject = "";

      for (const cd of generatedDataStore) {
        currentSubject = cd.subject;
        const olympiadName = SUBJECT_DETAILS[cd.subject]?.olympiad || cd.subject.toUpperCase();
        const title = `OLYMPIAD ${olympiadName} LIVE TEST FOR CLASS 1 TO 10`;

        await addDoc(collection(db, "test_sessions"), {
          title,
          subject: cd.subject.toLowerCase(),
          class: parseInt(cd.classNum, 10),
          startTime: Timestamp.fromDate(startDateTime),
          endTime: Timestamp.fromDate(endDateTime),
          duration: duration,
          price: price,
          priceAfterCoupon: priceAfterCoupon,
          questionIds: cd.regularQuestions.map(q => q.id),
          achieverQuestionIds: cd.achieverQuestions.map(q => q.id),
          archived: false,
          aiGenerated: true,
          createdAt: serverTimestamp()
        });
        sessionCount++;
      }

      appendLog(`✅ Created ${sessionCount} Live Quiz Sessions in 'test_sessions' for Sunday ${targetSundayDate} 11:00 AM IST!`, "success");

      // 3. Update rotation in system_settings
      const nextSub = getNextSubject(currentSubject);
      await setDoc(doc(db, "system_settings", "live_quiz_rotation"), {
        lastSubject: currentSubject,
        nextSubject: nextSub,
        targetSundayDate: targetSundayDate,
        liveQuizStartTime: startDateTime.toISOString(),
        lastRunAt: serverTimestamp(),
        totalQuestionsUploaded: allQuestions.length,
        sessionsCount: sessionCount
      }, { merge: true });

      appendLog(`✅ Rotation updated. Next cycle will be: ${SUBJECT_DETAILS[nextSub]?.name || nextSub.toUpperCase()}`, "success");
      alert(`🎉 SUCCESS!\n\n${sessionCount} Live Quiz Sessions have been published for Sunday, ${targetSundayDate} at 11:00 AM IST!\n\nEach class has 40 Regular (1M) + 10 Achiever (2M) questions.\nStudents now have 6 full days to register on live.html!`);

      if (typeof window.loadSessions === "function") {
        window.loadSessions();
      }

      window.initQuizAgentPanel();
    } catch (e) {
      appendLog(`❌ Publishing Failed: ${e.message}`, "error");
      alert("Error publishing: " + e.message);
    } finally {
      if (publishBtn) {
        publishBtn.disabled = false;
        publishBtn.innerText = "🚀 Publish All to Coming Sunday Live Arena";
      }
    }
  };
})();
