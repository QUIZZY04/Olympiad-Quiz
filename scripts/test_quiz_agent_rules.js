const assert = require("assert");

// Test functions from functions/quizAgent/geminiEngine
const { validateAndNormalizeQuestion } = require("../functions/quizAgent/geminiEngine");

console.log("=== RUNNING QUIZ AGENT COMPLIANCE TESTS ===");

// 1. Test Word Count Thresholds for Class 1-5
// Regular: min 25 words
const shortRegularJunior = {
  id: "test_c3_std_001",
  q: "What is 15 + 27?",
  o: ["42", "40", "41", "45"],
  a: 0,
  topic: "M01",
  sub_type: "SCQ"
};

const normRegJunior = validateAndNormalizeQuestion(shortRegularJunior, 3, "maths", "20261011", 0, false);
const wordsRegJunior = normRegJunior.q.trim().split(/\s+/).length;
console.log(`Class 3 Regular Question word count: ${wordsRegJunior} (Expected >= 25)`);
assert(wordsRegJunior >= 25, `Class 3 Regular question must have >= 25 words, got ${wordsRegJunior}`);

// Achiever: min 30 words strictly
const shortAchJunior = {
  id: "test_c3_ultra_041",
  q: "Solve the perimeter problem for a rectangle.",
  o: ["10 cm", "20 cm", "30 cm", "40 cm"],
  a: 1,
  topic: "M05",
  sub_type: "SBQ"
};

const normAchJunior = validateAndNormalizeQuestion(shortAchJunior, 3, "maths", "20261011", 40, true);
const wordsAchJunior = normAchJunior.q.trim().split(/\s+/).length;
console.log(`Class 3 Achiever Question word count: ${wordsAchJunior} (Expected >= 30)`);
assert(wordsAchJunior >= 30, `Class 3 Achiever question must have >= 30 words, got ${wordsAchJunior}`);

// 2. Test Word Count Thresholds for Class 6-10
// Regular: min 30 words
const shortRegSenior = {
  id: "test_c8_std_001",
  q: "Find the root of the linear equation 2x + 5 = 15.",
  o: ["5", "10", "15", "20"],
  a: 0,
  topic: "M02",
  sub_type: "SCQ"
};

const normRegSenior = validateAndNormalizeQuestion(shortRegSenior, 8, "maths", "20261011", 0, false);
const wordsRegSenior = normRegSenior.q.trim().split(/\s+/).length;
console.log(`Class 8 Regular Question word count: ${wordsRegSenior} (Expected >= 30)`);
assert(wordsRegSenior >= 30, `Class 8 Regular question must have >= 30 words, got ${wordsRegSenior}`);

// Achiever: min 40 words strictly
const shortAchSenior = {
  id: "test_c8_ultra_041",
  q: "Find the area of the polygon given in the diagram with coordinate vertices.",
  o: ["50 sq units", "60 sq units", "70 sq units", "80 sq units"],
  a: 2,
  topic: "M11",
  sub_type: "ARQ"
};

const normAchSenior = validateAndNormalizeQuestion(shortAchSenior, 8, "maths", "20261011", 40, true);
const wordsAchSenior = normAchSenior.q.trim().split(/\s+/).length;
console.log(`Class 8 Achiever Question word count: ${wordsAchSenior} (Expected >= 40)`);
assert(wordsAchSenior >= 40, `Class 8 Achiever question must have >= 40 words, got ${wordsAchSenior}`);

// 3. Test Question Subtype handling (SCQ, SBQ, ARQ)
const scqItem = validateAndNormalizeQuestion({
  q: "A very long detailed question statement explaining an Olympiad scenario with sufficient words to pass the threshold easily without prefix.",
  o: ["A", "B", "C", "D"],
  a: 0,
  sub_type: "SCQ"
}, 8, "maths", "20261011", 0, false);
assert.strictEqual(scqItem.sub_type, "SCQ", "Should preserve SCQ sub_type");

const sbqItem = validateAndNormalizeQuestion({
  q: "Statement I: Every rational number is real. Statement II: Every real number is rational. Read carefully and choose the correct conclusion.",
  o: ["Both true", "Both false", "Only I true", "Only II true"],
  a: 2,
  sub_type: "SBQ"
}, 8, "maths", "20261011", 1, false);
assert.strictEqual(sbqItem.sub_type, "SBQ", "Should preserve SBQ sub_type");

const arqItem = validateAndNormalizeQuestion({
  q: "Assertion (A): Square roots of primes are irrational. Reason (R): Prime numbers have only two factors, 1 and itself.",
  o: ["Both true and R explains A", "Both true but R doesn't explain A", "A true R false", "A false R true"],
  a: 0,
  sub_type: "ARQ"
}, 8, "maths", "20261011", 2, false);
assert.strictEqual(arqItem.sub_type, "ARQ", "Should preserve ARQ sub_type");

// Auto-detection of ARQ when missing
const autoArqItem = validateAndNormalizeQuestion({
  q: "Assertion (A): The sum of angles in a triangle is 180°. Reason (R): A triangle is a polygon with three sides and interior angle sum formula (n-2)*180 applies.",
  o: ["Both true", "Both false", "A true R false", "A false R true"],
  a: 0
}, 8, "maths", "20261011", 3, false);
assert.strictEqual(autoArqItem.sub_type, "ARQ", "Should auto-detect ARQ from Assertion and Reason in question");

// 4. Test ID sequencing and total questions counts simulation
const fakeRawRegular = [];
for (let i = 0; i < 40; i++) {
  const mod = i % 5;
  const subType = mod === 3 ? "SBQ" : mod === 4 ? "ARQ" : "SCQ";
  fakeRawRegular.push(validateAndNormalizeQuestion({
    q: `Class 5 Olympiad problem ${i + 1} checking mathematics arithmetic skills and logical deduction across numbers.`,
    o: ["10", "20", "30", "40"],
    a: i % 4,
    sub_type: subType
  }, 5, "maths", "20261011", i, false));
}

assert.strictEqual(fakeRawRegular.length, 40, "Must be exactly 40 regular questions");
assert.strictEqual(fakeRawRegular[0].id, "c5_m_std_001", "First regular question must have id c5_m_std_001");
assert.strictEqual(fakeRawRegular[39].id, "c5_m_std_040", "40th regular question must have id c5_m_std_040");

const fakeRawAchiever = [];
for (let i = 0; i < 10; i++) {
  const mod = i % 5;
  const subType = mod === 3 ? "SBQ" : mod === 4 ? "ARQ" : "SCQ";
  fakeRawAchiever.push(validateAndNormalizeQuestion({
    q: `Class 5 HOTS Olympiad multi-step problem ${i + 41} checking complex logical deduction and area perimeter geometry.`,
    o: ["15 sq cm", "25 sq cm", "35 sq cm", "45 sq cm"],
    a: (i + 1) % 4,
    sub_type: subType
  }, 5, "maths", "20261011", 40 + i, true));
}

assert.strictEqual(fakeRawAchiever.length, 10, "Must be exactly 10 achiever questions");
assert.strictEqual(fakeRawAchiever[0].id, "c5_m_ultra_041", "First achiever question must have id c5_m_ultra_041");
assert.strictEqual(fakeRawAchiever[9].id, "c5_m_ultra_050", "10th achiever question must have id c5_m_ultra_050");

const totalQs = fakeRawRegular.length + fakeRawAchiever.length;
assert.strictEqual(totalQs, 50, "Total questions must be EXACTLY 50");

const totalMarks = (fakeRawRegular.length * 1) + (fakeRawAchiever.length * 2);
assert.strictEqual(totalMarks, 60, "Total marks must be EXACTLY 60 (40*1 + 10*2)");

console.log("Total Regular Questions:", fakeRawRegular.length, "(IDs:", fakeRawRegular[0].id, "to", fakeRawRegular[39].id, ")");
console.log("Total Achievers Questions:", fakeRawAchiever.length, "(IDs:", fakeRawAchiever[0].id, "to", fakeRawAchiever[9].id, ")");
console.log(`Total Exam: ${totalQs} Questions, ${totalMarks} Marks`);
console.log("Subtype mix in Regular:", {
  SCQ: fakeRawRegular.filter(q => q.sub_type === "SCQ").length,
  SBQ: fakeRawRegular.filter(q => q.sub_type === "SBQ").length,
  ARQ: fakeRawRegular.filter(q => q.sub_type === "ARQ").length
});
console.log("Subtype mix in Achievers:", {
  SCQ: fakeRawAchiever.filter(q => q.sub_type === "SCQ").length,
  SBQ: fakeRawAchiever.filter(q => q.sub_type === "SBQ").length,
  ARQ: fakeRawAchiever.filter(q => q.sub_type === "ARQ").length
});

console.log("✅ All unit and structural tests PASSED successfully!");
