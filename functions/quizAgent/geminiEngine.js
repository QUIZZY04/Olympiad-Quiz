/**
 * Gemini Quiz Generation Engine
 * Generates:
 * - 40 Regular Questions (1 mark each, crisp conceptual Olympiad standard)
 * - 10 Achiever Section Questions (2 marks each, multi-step HOTS / challenging hardship)
 * Matching the exact structure of previous Olympiad Live Quizzes (e.g. 27 Sept 2026).
 */

const { getTopicsForClass, SUBJECT_DETAILS } = require("./syllabus");

const GEMINI_MODEL = "gemini-2.0-flash";

const OLYMPIAD_CODES = {
  maths: "IMO (Maths)",
  science: "NSO (Science)",
  english: "IEO (English)",
  reasoning: "IRO (Reasoning)"
};

/**
 * Clean and normalize a question object to ensure strict adherence to the schema
 */
function validateAndNormalizeQuestion(qObj, classNum, subject, dateCompact, index, isAchiever = false) {
  if (!qObj || typeof qObj !== "object") {
    throw new Error(`Item ${index + 1} is not a valid question object.`);
  }

  const clsStr = "class" + classNum;
  const subStr = (subject || "maths").toLowerCase();
  const subShort = subStr === "maths" ? "m" : subStr === "science" ? "s" : subStr === "english" ? "eng" : "rea";
  const subPrefix = (SUBJECT_DETAILS[subStr] && SUBJECT_DETAILS[subStr].codePrefix) || "Q";

  // ID format matching previous live quiz format:
  // Regular: c4_m_std_001
  // Achiever: c4_m_ultra_001
  const padIndex = String(index + 1).padStart(3, "0");
  const typeTag = isAchiever ? "ultra" : "std";
  const fallbackId = `c${classNum}_${subShort}_${typeTag}_${padIndex}`;
  const id = (qObj.id && typeof qObj.id === "string" && !qObj.id.includes("/")) ? qObj.id : fallbackId;

  // Question Text
  const q = String(qObj.q || qObj.question || "").trim();
  if (!q) throw new Error(`Question ${index + 1} is missing question text ('q').`);

  // Options: must be exactly 4 strings
  let o = Array.isArray(qObj.o) ? qObj.o : (Array.isArray(qObj.options) ? qObj.options : []);
  o = o.map(opt => String(opt != null ? opt : "").trim());
  if (o.length !== 4 || o.some(opt => opt.length === 0)) {
    throw new Error(`Question ${index + 1} ("${q.slice(0, 30)}...") does not have exactly 4 non-empty options.`);
  }

  // Answer index: 0, 1, 2, or 3
  let a = parseInt(qObj.a != null ? qObj.a : qObj.answer, 10);
  if (isNaN(a) || a < 0 || a > 3) {
    if (typeof qObj.a === "string" && /^[A-D]$/i.test(qObj.a.trim())) {
      a = qObj.a.trim().toUpperCase().charCodeAt(0) - 65;
    } else {
      a = 0;
    }
  }

  // Topic Code
  const topic = String(qObj.topic || `${subPrefix}01`).trim().toUpperCase();

  // Hint & Solution
  const hint = String(qObj.hint || "").trim();
  const sol = String(qObj.sol || qObj.solution || qObj.explanation || "Correct option is: " + o[a]).trim();

  return {
    id,
    class: clsStr,
    subject: subStr,
    q,
    image_name: "",
    image_description: "",
    o,
    a,
    topic,
    hint,
    sol,
    sub_type: "SCQ",
    isAchiever: !!isAchiever
  };
}

/**
 * Call Gemini Flash API with structured JSON output
 */
async function callGeminiRaw({ apiKey, prompt }) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  const requestBody = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.35,
      topP: 0.95,
      responseMimeType: "application/json"
    }
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error (${response.status}): ${errorText}`);
  }

  const result = await response.json();
  const textOutput = result?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!textOutput) throw new Error("Gemini returned an empty response.");

  let cleaned = textOutput.trim();
  if (cleaned.startsWith("```json")) cleaned = cleaned.replace(/^```json\s*/, "").replace(/\s*```$/, "");
  else if (cleaned.startsWith("```")) cleaned = cleaned.replace(/^```\s*/, "").replace(/\s*```$/, "");

  const parsed = JSON.parse(cleaned);
  if (!Array.isArray(parsed)) throw new Error("Gemini output is not a JSON array.");
  return parsed;
}

/**
 * Generate 40 Regular Questions (1 mark each)
 */
async function generateRegularQuestions({ apiKey, classNum, subject, count = 40, dateCompact = "" }) {
  const subMeta = SUBJECT_DETAILS[subject] || { name: subject, olympiad: "Olympiad", codePrefix: "Q" };
  const olympiadName = OLYMPIAD_CODES[subject] || subMeta.name;
  const topics = getTopicsForClass(classNum, subject);
  const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";

  const prompt = `You are the Head Chief Examiner for the ${olympiadName} Official Live Championship.
Generate exactly ${count} REGULAR SECTION multiple-choice questions for Class ${classNum} students (1 mark each).

CURRICULUM TOPICS TO COVER:
${topics.map((t, idx) => `Topic ${subMeta.codePrefix}0${idx + 1}: ${t}`).join("\n")}

STRICT DIFFICULTY & WORD COUNT STANDARDS:
1. Difficulty Level: Standard to Advanced Olympiad level for Class ${classNum}. Focus on conceptual clarity, arithmetic fluency, and accurate application.
2. Question Length: Maintain concise, precise, direct problem statements (between 12 and 30 words per question). Avoid unnecessary storytelling.
3. Options: Exactly 4 distinct options ('o'). Only ONE unambiguously correct answer.
4. Correct Answer: 'a' must be 0, 1, 2, or 3.
5. Symbols: Use standard clean Unicode (e.g. cm², 1/2, ×, ÷, ², √, ₹) rather than broken LaTeX.
6. Schema (strictly adhere):
[
  {
    "id": "c${classNum}_${subShort}_std_001",
    "class": "class${classNum}",
    "subject": "${subject}",
    "q": "Concise 12-30 word question text",
    "image_name": "",
    "image_description": "",
    "o": ["Opt A", "Opt B", "Opt C", "Opt D"],
    "a": 0,
    "topic": "${subMeta.codePrefix}01",
    "hint": "Pedagogical clue",
    "sol": "Direct step-by-step solution",
    "sub_type": "SCQ"
  }
]
Return ONLY the raw JSON array containing exactly ${count} question objects.`;

  const rawArray = await callGeminiRaw({ apiKey, prompt });
  return rawArray.slice(0, count).map((q, idx) =>
    validateAndNormalizeQuestion(q, classNum, subject, dateCompact, idx, false)
  );
}

/**
 * Generate 10 Achievers Section Questions (2 marks each, HOTS)
 */
async function generateAchieverQuestions({ apiKey, classNum, subject, count = 10, dateCompact = "" }) {
  const subMeta = SUBJECT_DETAILS[subject] || { name: subject, olympiad: "Olympiad", codePrefix: "Q" };
  const olympiadName = OLYMPIAD_CODES[subject] || subMeta.name;
  const topics = getTopicsForClass(classNum, subject);
  const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";

  const prompt = `You are the Head Chief Examiner for the ${olympiadName} Official Live Championship.
Generate exactly ${count} ACHIEVERS SECTION (HOTS - Higher Order Thinking Skills) multiple-choice questions for Class ${classNum} students (2 marks each).

CURRICULUM TOPICS TO COVER:
${topics.map((t, idx) => `Topic ${subMeta.codePrefix}0${idx + 1}: ${t}`).join("\n")}

STRICT DIFFICULTY & HARDSHIP STANDARDS:
1. Hardship Level: High-difficulty Achievers/HOTS Section. Every question must test multi-step logical deduction, complex word problems, non-routine cases, combined concepts (e.g. ratio with perimeter, two-stage algebra, tricky exceptions, advanced analogies).
2. Question Length: Substantial, detailed scenario-based problem statements (between 25 and 55 words per question).
3. Options: Exactly 4 tricky, well-crafted distractor options ('o'). Only ONE unambiguously correct answer.
4. Correct Answer: 'a' must be 0, 1, 2, or 3.
5. Symbols: Use standard clean Unicode (e.g. cm², 1/2, ×, ÷, ², √, ₹).
6. Schema (strictly adhere):
[
  {
    "id": "c${classNum}_${subShort}_ultra_001",
    "class": "class${classNum}",
    "subject": "${subject}",
    "q": "Challenging multi-step 25-55 word question text",
    "image_name": "",
    "image_description": "",
    "o": ["Opt A", "Opt B", "Opt C", "Opt D"],
    "a": 0,
    "topic": "${subMeta.codePrefix}01",
    "hint": "Thoughtful clue pointing to the tricky step",
    "sol": "Detailed comprehensive step-by-step mathematical/logical proof",
    "sub_type": "SCQ"
  }
]
Return ONLY the raw JSON array containing exactly ${count} question objects.`;

  const rawArray = await callGeminiRaw({ apiKey, prompt });
  return rawArray.slice(0, count).map((q, idx) =>
    validateAndNormalizeQuestion(q, classNum, subject, dateCompact, idx, true)
  );
}

/**
 * Generate full 50-Question Live Quiz for a Class:
 * 40 Regular (1 Mark) + 10 Achievers (2 Marks) = 50 Questions (60 Marks total)
 */
async function generateFullLiveQuizForClass({ apiKey, classNum, subject, dateCompact = "" }) {
  if (!apiKey) throw new Error("Gemini API key is required.");

  // Generate 40 Regular Questions
  const regularQuestions = await generateRegularQuestions({
    apiKey,
    classNum,
    subject,
    count: 40,
    dateCompact
  });

  // Pacing pause (1.5s) to stay within Gemini Free Tier RPM
  await new Promise(r => setTimeout(r, 1500));

  // Generate 10 Achievers Questions (HOTS)
  const achieverQuestions = await generateAchieverQuestions({
    apiKey,
    classNum,
    subject,
    count: 10,
    dateCompact
  });

  return {
    classNum,
    subject,
    regularQuestions,
    achieverQuestions,
    totalCount: regularQuestions.length + achieverQuestions.length
  };
}

module.exports = {
  GEMINI_MODEL,
  OLYMPIAD_CODES,
  generateRegularQuestions,
  generateAchieverQuestions,
  generateFullLiveQuizForClass,
  validateAndNormalizeQuestion
};
