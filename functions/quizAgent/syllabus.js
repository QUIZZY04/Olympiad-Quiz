/**
 * Syllabus and Curriculum Matrix for Classes 1 to 10
 * Rotating across: Mathematics, Science, English, Logical Reasoning
 *
 * Topic lists/codes are copied verbatim from chapterwise.html's `sofTopics`
 * object - the canonical topic taxonomy already used across the rest of
 * the site (chapterwise practice, question bank tagging). Keeping the live
 * quiz generator on the SAME taxonomy (not a separate approximation) means
 * its topic codes (M01, M02, ... S01, S16, ...) match what students already
 * see everywhere else, and correctly handles classes with 10+ topics
 * (e.g. Class 8 Science has 16) without the zero-padding bugs a naive
 * "0" + index scheme would produce past index 9.
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
    codePrefix: "S"
  },
  english: {
    name: "English (IEO)",
    olympiad: "International English Olympiad",
    codePrefix: "E"
  },
  reasoning: {
    name: "Logical Reasoning",
    olympiad: "Reasoning & Mental Ability Olympiad",
    codePrefix: "R"
  }
};

// Each topic is {code, name} - code is the canonical code from
// chapterwise.html's sofTopics, not derived/recomputed here.
const SYLLABUS_BY_CLASS = {
  1: {
    maths: [
      { code: "M01", name: "Number Sense" },
      { code: "M02", name: "Addition" },
      { code: "M03", name: "Subtraction" },
      { code: "M04", name: "Lengths, Weights and Comparisons" },
      { code: "M05", name: "Time" },
      { code: "M06", name: "Money" },
      { code: "M07", name: "Geometrical Shapes" }
    ],
    science: [
      { code: "S01", name: "Plants" },
      { code: "S02", name: "Animals" },
      { code: "S03", name: "Human Body" },
      { code: "S04", name: "Food" },
      { code: "S05", name: "Housing and Clothing" },
      { code: "S06", name: "Family and Festivals" },
      { code: "S07", name: "Good Habits and Safety Rules" },
      { code: "S08", name: "Transport and Communication" },
      { code: "S09", name: "Air, Water and Weather" },
      { code: "S10", name: "Earth and Universe" }
    ],
    english: [
      { code: "E01", name: "Word Power (Letters & Words)" },
      { code: "E02", name: "Nouns and Pronouns" },
      { code: "E03", name: "Verbs and Adjectives" },
      { code: "E04", name: "Prepositions and Articles" },
      { code: "E05", name: "Tenses and Punctuation" },
      { code: "E06", name: "Reading Comprehension" },
      { code: "E07", name: "Spoken and Written Expression" }
    ],
    reasoning: [
      { code: "R01", name: "Patterns" },
      { code: "R02", name: "Odd One Out" },
      { code: "R03", name: "Measuring Units" },
      { code: "R04", name: "Geometrical Shapes" },
      { code: "R05", name: "Spatial Understanding" },
      { code: "R06", name: "Grouping and Analogy" },
      { code: "R07", name: "Ranking Test" }
    ]
  },
  2: {
    maths: [
      { code: "M01", name: "Number Sense" },
      { code: "M02", name: "Computation Operations" },
      { code: "M03", name: "Length, Weight, Capacity" },
      { code: "M04", name: "Time and Money" },
      { code: "M05", name: "Lines, Shapes and Solids" },
      { code: "M06", name: "Pictographs" }
    ],
    science: [
      { code: "S01", name: "Plants" },
      { code: "S02", name: "Animals" },
      { code: "S03", name: "Human Body" },
      { code: "S04", name: "Food" },
      { code: "S05", name: "Housing and Clothing" },
      { code: "S06", name: "Family and Festivals" },
      { code: "S07", name: "Good Habits and Safety Rules" },
      { code: "S08", name: "Transport and Communication" },
      { code: "S09", name: "Air, Water and Weather" },
      { code: "S10", name: "Earth and Universe" }
    ],
    english: [
      { code: "E01", name: "Word Power" },
      { code: "E02", name: "Nouns and Pronouns" },
      { code: "E03", name: "Verbs, Adjectives and Adverbs" },
      { code: "E04", name: "Prepositions and Conjunctions" },
      { code: "E05", name: "Articles and Tenses" },
      { code: "E06", name: "Punctuation and Jumbled Words" },
      { code: "E07", name: "Reading Comprehension" },
      { code: "E08", name: "Spoken and Written Expression" }
    ],
    reasoning: [
      { code: "R01", name: "Patterns" },
      { code: "R02", name: "Measuring Units" },
      { code: "R03", name: "Odd One Out" },
      { code: "R04", name: "Series Completion" },
      { code: "R05", name: "Geometrical Shapes" },
      { code: "R06", name: "Analogy and Ranking Test" },
      { code: "R07", name: "Grouping and Coding-Decoding" }
    ]
  },
  3: {
    maths: [
      { code: "M01", name: "Number Sense (Up to 10,000)" },
      { code: "M02", name: "Addition, Subtraction, Multiplication" },
      { code: "M03", name: "Division & Fractions (Basic)" },
      { code: "M04", name: "Money (Indian Currency)" },
      { code: "M05", name: "Measurement (Length, Weight, Capacity)" },
      { code: "M06", name: "Time, Money & Calendar" },
      { code: "M07", name: "Geometry & Symmetry" },
      { code: "M08", name: "Data Handling (Bar Graphs)" }
    ],
    science: [
      { code: "S01", name: "Plants and Animals" },
      { code: "S02", name: "Birds" },
      { code: "S03", name: "Food" },
      { code: "S04", name: "Housing, Clothing and Occupation" },
      { code: "S05", name: "Transport and Communication" },
      { code: "S06", name: "Human Body" },
      { code: "S07", name: "Earth and Universe" },
      { code: "S08", name: "Matter and Materials" },
      { code: "S09", name: "Light, Sound and Force" },
      { code: "S10", name: "Our Environment" }
    ],
    english: [
      { code: "E01", name: "Word Power" },
      { code: "E02", name: "Synonyms and Antonyms" },
      { code: "E03", name: "Nouns, Pronouns and Verbs" },
      { code: "E04", name: "Adverbs and Adjectives" },
      { code: "E05", name: "Articles and Prepositions" },
      { code: "E06", name: "Conjunctions and Tenses" },
      { code: "E07", name: "Punctuation and Jumbled Words" },
      { code: "E08", name: "Reading Comprehension" },
      { code: "E09", name: "Spoken and Written Expression" }
    ],
    reasoning: [
      { code: "R01", name: "Patterns" },
      { code: "R02", name: "Analogy and Classification" },
      { code: "R03", name: "Alphabet Test" },
      { code: "R04", name: "Coding-Decoding" },
      { code: "R05", name: "Ranking Test" },
      { code: "R06", name: "Grouping and Figure Matrix" },
      { code: "R07", name: "Mirror Images and Geometrical Shapes" },
      { code: "R08", name: "Days, Dates and Combinations" }
    ]
  },
  4: {
    maths: [
      { code: "M01", name: "Number Sense" },
      { code: "M02", name: "Computation Operations" },
      { code: "M03", name: "Fractions" },
      { code: "M04", name: "Length, Weight and Capacity" },
      { code: "M05", name: "Time and Money" },
      { code: "M06", name: "Geometry" },
      { code: "M07", name: "Perimeter and Area" },
      { code: "M08", name: "Data Handling" }
    ],
    science: [
      { code: "S01", name: "Plants" },
      { code: "S02", name: "Animals" },
      { code: "S03", name: "Food and Digestion" },
      { code: "S04", name: "Human Needs" },
      { code: "S05", name: "Matter and Materials" },
      { code: "S06", name: "Force, Work and Energy" },
      { code: "S07", name: "Our Environment" },
      { code: "S08", name: "Earth and Universe" }
    ],
    english: [
      { code: "E01", name: "Word Power" },
      { code: "E02", name: "Synonyms and Antonyms" },
      { code: "E03", name: "Nouns, Pronouns and Verbs" },
      { code: "E04", name: "Adverbs and Adjectives" },
      { code: "E05", name: "Articles and Prepositions" },
      { code: "E06", name: "Conjunctions and Tenses" },
      { code: "E07", name: "Punctuation and Jumbled Words" },
      { code: "E08", name: "Reading Comprehension" },
      { code: "E09", name: "Spoken and Written Expression" }
    ],
    reasoning: [
      { code: "R01", name: "Patterns" },
      { code: "R02", name: "Alphabet Test" },
      { code: "R03", name: "Coding-Decoding" },
      { code: "R04", name: "Ranking Test" },
      { code: "R05", name: "Mirror Images" },
      { code: "R06", name: "Geometrical Shapes" },
      { code: "R07", name: "Direction Sense" },
      { code: "R08", name: "Analogy and Classification" }
    ]
  },
  5: {
    maths: [
      { code: "M01", name: "Number Sense" },
      { code: "M02", name: "Computation Operations" },
      { code: "M03", name: "Fractions and Decimals" },
      { code: "M04", name: "Measurement" },
      { code: "M05", name: "Angles" },
      { code: "M06", name: "Perimeter, Area and Volume" },
      { code: "M07", name: "Data Handling" }
    ],
    science: [
      { code: "S01", name: "Animals" },
      { code: "S02", name: "Plants" },
      { code: "S03", name: "Human Body and Health" },
      { code: "S04", name: "Water" },
      { code: "S05", name: "Matter and Materials" },
      { code: "S06", name: "Force, Work and Energy" },
      { code: "S07", name: "Our Environment" },
      { code: "S08", name: "Earth and Universe" }
    ],
    english: [
      { code: "E01", name: "Word Power" },
      { code: "E02", name: "Synonyms and Antonyms" },
      { code: "E03", name: "Idioms and Phrases" },
      { code: "E04", name: "Nouns, Pronouns and Verbs" },
      { code: "E05", name: "Adverbs and Adjectives" },
      { code: "E06", name: "Articles, Prepositions and Conjunctions" },
      { code: "E07", name: "Tenses" },
      { code: "E08", name: "Active/Passive and Direct/Indirect" },
      { code: "E09", name: "Reading Comprehension" },
      { code: "E10", name: "Spoken and Written Expression" }
    ],
    reasoning: [
      { code: "R01", name: "Patterns" },
      { code: "R02", name: "Analogy and Classification" },
      { code: "R03", name: "Geometrical Shapes" },
      { code: "R04", name: "Mirror and Water Images" },
      { code: "R05", name: "Direction Sense" },
      { code: "R06", name: "Ranking Test and Alphabet Test" },
      { code: "R07", name: "Logical Sequence and Puzzle Test" },
      { code: "R08", name: "Coding-Decoding" }
    ]
  },
  6: {
    maths: [
      { code: "M01", name: "Knowing our Numbers" },
      { code: "M02", name: "Whole Numbers" },
      { code: "M03", name: "Playing with Numbers" },
      { code: "M04", name: "Basic Geometrical Ideas" },
      { code: "M05", name: "Understanding Elementary Shapes" },
      { code: "M06", name: "Integers" },
      { code: "M07", name: "Fractions" },
      { code: "M08", name: "Decimals" },
      { code: "M09", name: "Data Handling" },
      { code: "M10", name: "Mensuration" },
      { code: "M11", name: "Algebra" },
      { code: "M12", name: "Ratio and Proportion" },
      { code: "M13", name: "Symmetry" },
      { code: "M14", name: "Practical Geometry" }
    ],
    science: [
      { code: "S01", name: "Food and Its Components" },
      { code: "S02", name: "Sorting Materials" },
      { code: "S03", name: "Separation of Substances" },
      { code: "S04", name: "Getting to Know Plants" },
      { code: "S05", name: "Body Movements" },
      { code: "S06", name: "Living Organisms and Surroundings" },
      { code: "S07", name: "Motion and Measurement" },
      { code: "S08", name: "Light, Shadows and Reflections" },
      { code: "S09", name: "Electricity and Circuits" },
      { code: "S10", name: "Fun with Magnets" },
      { code: "S11", name: "Air and Water" }
    ],
    english: [
      { code: "E01", name: "Synonyms, Antonyms, Analogies" },
      { code: "E02", name: "One Word Substitutions" },
      { code: "E03", name: "Idioms and Phrases" },
      { code: "E04", name: "Parts of Speech" },
      { code: "E05", name: "Articles and Tenses" },
      { code: "E06", name: "Active/Passive and Direct/Indirect" },
      { code: "E07", name: "Punctuation" },
      { code: "E08", name: "Reading Comprehension" },
      { code: "E09", name: "Spoken and Written Expression" }
    ],
    reasoning: [
      { code: "R01", name: "Series Completion" },
      { code: "R02", name: "Analogy and Classification" },
      { code: "R03", name: "Coding-Decoding" },
      { code: "R04", name: "Blood Relations" },
      { code: "R05", name: "Direction Sense Test" },
      { code: "R06", name: "Logical Venn Diagrams" },
      { code: "R07", name: "Mirror/Water Images and Paper Folding" },
      { code: "R08", name: "Figure Matrix and Cubes/Dice" }
    ]
  },
  7: {
    maths: [
      { code: "M01", name: "Integers" },
      { code: "M02", name: "Fractions and Decimals" },
      { code: "M03", name: "Data Handling" },
      { code: "M04", name: "Simple Equations" },
      { code: "M05", name: "Lines and Angles" },
      { code: "M06", name: "The Triangle and its Properties" },
      { code: "M07", name: "Congruence of Triangles" },
      { code: "M08", name: "Comparing Quantities" },
      { code: "M09", name: "Rational Numbers" },
      { code: "M10", name: "Practical Geometry" },
      { code: "M11", name: "Perimeter and Area" },
      { code: "M12", name: "Algebraic Expressions" },
      { code: "M13", name: "Exponents and Powers" },
      { code: "M14", name: "Symmetry" },
      { code: "M15", name: "Visualising Solid Shapes" }
    ],
    science: [
      { code: "S01", name: "Nutrition in Plants and Animals" },
      { code: "S02", name: "Heat" },
      { code: "S03", name: "Acids, Bases and Salts" },
      { code: "S04", name: "Physical and Chemical Changes" },
      { code: "S05", name: "Respiration in Organisms" },
      { code: "S06", name: "Transportation in Plants and Animals" },
      { code: "S07", name: "Reproduction in Plants" },
      { code: "S08", name: "Motion and Time" },
      { code: "S09", name: "Electric Current and its Effects" },
      { code: "S10", name: "Light" },
      { code: "S11", name: "Forests and Wastewater Story" }
    ],
    english: [
      { code: "E01", name: "Synonyms, Antonyms, Analogies" },
      { code: "E02", name: "Spellings and One Word Substitutions" },
      { code: "E03", name: "Idioms and Phrases" },
      { code: "E04", name: "Parts of Speech" },
      { code: "E05", name: "Articles and Tenses" },
      { code: "E06", name: "Active/Passive and Direct/Indirect" },
      { code: "E07", name: "Punctuation" },
      { code: "E08", name: "Reading Comprehension" },
      { code: "E09", name: "Spoken and Written Expression" }
    ],
    reasoning: [
      { code: "R01", name: "Series Completion" },
      { code: "R02", name: "Analogy and Classification" },
      { code: "R03", name: "Coding-Decoding" },
      { code: "R04", name: "Blood Relations" },
      { code: "R05", name: "Direction Sense Test" },
      { code: "R06", name: "Logical Venn Diagrams" },
      { code: "R07", name: "Mirror/Water Images and Paper Folding" },
      { code: "R08", name: "Cubes, Dice and Figure Matrix" }
    ]
  },
  8: {
    maths: [
      { code: "M01", name: "Rational Numbers" },
      { code: "M02", name: "Linear Equations in One Variable" },
      { code: "M03", name: "Understanding Quadrilaterals" },
      { code: "M04", name: "Practical Geometry" },
      { code: "M05", name: "Data Handling" },
      { code: "M06", name: "Squares and Square Roots" },
      { code: "M07", name: "Cubes and Cube Roots" },
      { code: "M08", name: "Comparing Quantities" },
      { code: "M09", name: "Algebraic Expressions and Identities" },
      { code: "M10", name: "Visualising Solid Shapes" },
      { code: "M11", name: "Mensuration" },
      { code: "M12", name: "Exponents and Powers" },
      { code: "M13", name: "Direct and Inverse Proportions" },
      { code: "M14", name: "Factorisation" },
      { code: "M15", name: "Intro to Graphs and Playing with Numbers" }
    ],
    science: [
      { code: "S01", name: "Crop Production and Management" },
      { code: "S02", name: "Microorganisms" },
      { code: "S03", name: "Synthetic Fibres and Plastics" },
      { code: "S04", name: "Materials: Metals and Non-Metals" },
      { code: "S05", name: "Coal and Petroleum" },
      { code: "S06", name: "Combustion and Flame" },
      { code: "S07", name: "Conservation of Plants and Animals" },
      { code: "S08", name: "Cell Structure and Functions" },
      { code: "S09", name: "Reproduction and Adolescence" },
      { code: "S10", name: "Force, Pressure and Friction" },
      { code: "S11", name: "Sound" },
      { code: "S12", name: "Chemical Effects of Electric Current" },
      { code: "S13", name: "Some Natural Phenomena" },
      { code: "S14", name: "Light" },
      { code: "S15", name: "Stars and Solar System" },
      { code: "S16", name: "Pollution of Air and Water" }
    ],
    english: [
      { code: "E01", name: "Synonyms, Antonyms, Analogies" },
      { code: "E02", name: "Spellings and One Word Substitutions" },
      { code: "E03", name: "Idioms and Phrases" },
      { code: "E04", name: "Parts of Speech" },
      { code: "E05", name: "Articles and Tenses" },
      { code: "E06", name: "Active/Passive and Direct/Indirect" },
      { code: "E07", name: "Punctuation" },
      { code: "E08", name: "Reading Comprehension" },
      { code: "E09", name: "Spoken and Written Expression" }
    ],
    reasoning: [
      { code: "R01", name: "Series Completion" },
      { code: "R02", name: "Analogy and Classification" },
      { code: "R03", name: "Coding-Decoding" },
      { code: "R04", name: "Blood Relations" },
      { code: "R05", name: "Direction Sense Test" },
      { code: "R06", name: "Logical Venn Diagrams" },
      { code: "R07", name: "Alphabet and Ranking Test" },
      { code: "R08", name: "Mirror/Water Images and Figure Matrix" }
    ]
  },
  9: {
    maths: [
      { code: "M01", name: "Number Systems" },
      { code: "M02", name: "Polynomials" },
      { code: "M03", name: "Coordinate Geometry" },
      { code: "M04", name: "Linear Equations in Two Variables" },
      { code: "M05", name: "Introduction to Euclid's Geometry" },
      { code: "M06", name: "Lines and Angles" },
      { code: "M07", name: "Triangles" },
      { code: "M08", name: "Quadrilaterals" },
      { code: "M09", name: "Areas of Parallelograms and Triangles" },
      { code: "M10", name: "Circles" },
      { code: "M11", name: "Constructions" },
      { code: "M12", name: "Heron's Formula" },
      { code: "M13", name: "Surface Areas and Volumes" },
      { code: "M14", name: "Statistics" },
      { code: "M15", name: "Probability" }
    ],
    science: [
      { code: "S01", name: "Matter in Our Surroundings" },
      { code: "S02", name: "Is Matter Around Us Pure" },
      { code: "S03", name: "Atoms and Molecules" },
      { code: "S04", name: "Structure of the Atom" },
      { code: "S05", name: "The Fundamental Unit of Life" },
      { code: "S06", name: "Tissues" },
      { code: "S07", name: "Diversity in Living Organisms" },
      { code: "S08", name: "Motion" },
      { code: "S09", name: "Force and Laws of Motion" },
      { code: "S10", name: "Gravitation" },
      { code: "S11", name: "Work and Energy" },
      { code: "S12", name: "Sound" },
      { code: "S13", name: "Why Do We Fall Ill" },
      { code: "S14", name: "Natural Resources" },
      { code: "S15", name: "Improvement in Food Resources" }
    ],
    english: [
      { code: "E01", name: "Synonyms, Antonyms, Analogies" },
      { code: "E02", name: "Spellings and One Word Substitutions" },
      { code: "E03", name: "Idioms and Phrases" },
      { code: "E04", name: "Parts of Speech" },
      { code: "E05", name: "Articles and Tenses" },
      { code: "E06", name: "Active/Passive and Direct/Indirect" },
      { code: "E07", name: "Clauses" },
      { code: "E08", name: "Reading Comprehension" },
      { code: "E09", name: "Spoken and Written Expression" }
    ],
    reasoning: [
      { code: "R01", name: "Series Completion" },
      { code: "R02", name: "Analogy and Classification" },
      { code: "R03", name: "Coding-Decoding" },
      { code: "R04", name: "Blood Relations" },
      { code: "R05", name: "Direction Sense Test" },
      { code: "R06", name: "Logical Venn Diagrams" },
      { code: "R07", name: "Alphabet and Ranking Test" },
      { code: "R08", name: "Mirror/Water Images and Cubes/Dice" }
    ]
  },
  10: {
    maths: [
      { code: "M01", name: "Real Numbers" },
      { code: "M02", name: "Polynomials" },
      { code: "M03", name: "Pair of Linear Equations in Two Variables" },
      { code: "M04", name: "Quadratic Equations" },
      { code: "M05", name: "Arithmetic Progressions" },
      { code: "M06", name: "Triangles" },
      { code: "M07", name: "Coordinate Geometry" },
      { code: "M08", name: "Introduction to Trigonometry" },
      { code: "M09", name: "Some Applications of Trigonometry" },
      { code: "M10", name: "Circles" },
      { code: "M11", name: "Constructions" },
      { code: "M12", name: "Areas Related to Circles" },
      { code: "M13", name: "Surface Areas and Volumes" },
      { code: "M14", name: "Statistics" },
      { code: "M15", name: "Probability" }
    ],
    science: [
      { code: "S01", name: "Chemical Reactions and Equations" },
      { code: "S02", name: "Acids, Bases and Salts" },
      { code: "S03", name: "Metals and Non-Metals" },
      { code: "S04", name: "Carbon and Its Compounds" },
      { code: "S05", name: "Periodic Classification of Elements" },
      { code: "S06", name: "Life Processes" },
      { code: "S07", name: "Control and Coordination" },
      { code: "S08", name: "How Do Organisms Reproduce" },
      { code: "S09", name: "Heredity and Evolution" },
      { code: "S10", name: "Light - Reflection and Refraction" },
      { code: "S11", name: "Human Eye and Colourful World" },
      { code: "S12", name: "Electricity" },
      { code: "S13", name: "Magnetic Effects of Electric Current" },
      { code: "S14", name: "Sources of Energy" },
      { code: "S15", name: "Our Environment" },
      { code: "S16", name: "Management of Natural Resources" }
    ],
    english: [
      { code: "E01", name: "Synonyms, Antonyms, Analogies" },
      { code: "E02", name: "Spellings and One Word Substitutions" },
      { code: "E03", name: "Idioms and Phrases" },
      { code: "E04", name: "Parts of Speech" },
      { code: "E05", name: "Articles and Tenses" },
      { code: "E06", name: "Active/Passive and Direct/Indirect" },
      { code: "E07", name: "Clauses" },
      { code: "E08", name: "Reading Comprehension" },
      { code: "E09", name: "Spoken and Written Expression" }
    ],
    reasoning: [
      { code: "R01", name: "Series Completion" },
      { code: "R02", name: "Analogy and Classification" },
      { code: "R03", name: "Coding-Decoding" },
      { code: "R04", name: "Blood Relations" },
      { code: "R05", name: "Direction Sense Test" },
      { code: "R06", name: "Logical Venn Diagrams" },
      { code: "R07", name: "Alphabet and Ranking Test" },
      { code: "R08", name: "Mirror/Water Images and Cubes/Dice" }
    ]
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
 * Get the topic list ({code, name}[]) for a class and subject.
 */
function getTopicsForClass(classNum, subject) {
  const c = parseInt(classNum, 10);
  const sub = (subject || "").toLowerCase();
  if (SYLLABUS_BY_CLASS[c] && SYLLABUS_BY_CLASS[c][sub]) {
    return SYLLABUS_BY_CLASS[c][sub];
  }
  return [{ code: (SUBJECT_DETAILS[sub]?.codePrefix || "Q") + "01", name: "General Curriculum Topics" }];
}

module.exports = {
  ROTATION_CYCLE,
  SUBJECT_DETAILS,
  SYLLABUS_BY_CLASS,
  getNextSubject,
  getTopicsForClass
};
