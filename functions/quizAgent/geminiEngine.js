/**
 * Gemini Quiz Generation Engine
 * Generates:
 * - 40 Regular Questions (1 mark each, crisp conceptual Olympiad standard)
 * - 10 Achiever Section Questions (2 marks each, multi-step HOTS / challenging hardship)
 * Matching the exact structure of previous Olympiad Live Quizzes (e.g. 27 Sept 2026).
 */

const { getTopicsForClass, SUBJECT_DETAILS } = require("./syllabus");

const GEMINI_MODELS = [
  "gemini-2.0-flash",
  "gemini-1.5-flash",
  "gemini-2.0-flash-lite"
];

const RETRYABLE_STATUS_CODES = [429, 500, 502, 503, 504];

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
 * Call Gemini Flash API with structured JSON output, exponential backoff, and automatic fallback
 */
async function callGeminiRaw({ apiKey, prompt }) {
  let lastError = null;

  for (const model of GEMINI_MODELS) {
    const maxRetries = 2;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

        const requestBody = {
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.4,
            topP: 0.95
          }
        };

        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
          const errorText = await response.text();

          // Check if retryable (503 high demand spike, 429 rate limit, 500/502/504)
          if (RETRYABLE_STATUS_CODES.includes(response.status) && attempt < maxRetries) {
            const waitSec = (attempt + 1) * 2;
            console.warn(`Model ${model} returned HTTP ${response.status}. Retrying in ${waitSec}s (attempt ${attempt + 1}/${maxRetries})...`);
            await new Promise(r => setTimeout(r, waitSec * 1000));
            continue;
          }

          throw new Error(`Gemini API error (${response.status}) on ${model}: ${errorText}`);
        }

        const result = await response.json();
        const textOutput = result?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!textOutput) throw new Error(`Gemini (${model}) returned an empty response.`);

        let cleaned = textOutput.trim();
        if (cleaned.startsWith("```json")) cleaned = cleaned.replace(/^```json\s*/, "").replace(/\s*```$/, "");
        else if (cleaned.startsWith("```")) cleaned = cleaned.replace(/^```\s*/, "").replace(/\s*```$/, "");
        // If still not starting with '[', extract the JSON array
        if (!cleaned.startsWith("[")) {
          const startIdx = cleaned.indexOf("[");
          const endIdx = cleaned.lastIndexOf("]");
          if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
            cleaned = cleaned.substring(startIdx, endIdx + 1);
          }
        }

        const parsed = JSON.parse(cleaned);
        if (!Array.isArray(parsed)) throw new Error(`Gemini (${model}) output is not a JSON array.`);
        return parsed;

      } catch (err) {
        lastError = err;
        if (err.message && err.message.includes("404")) {
          console.warn(`Model ${model} 404 not found. Trying next fallback...`);
          break;
        }

        if (attempt < maxRetries && RETRYABLE_STATUS_CODES.some(code => err.message && err.message.includes(`(${code})`))) {
          const waitSec = (attempt + 1) * 2;
          console.warn(`Model ${model} transient error. Retrying in ${waitSec}s...`);
          await new Promise(r => setTimeout(r, waitSec * 1000));
          continue;
        }

        break;
      }
    }

    console.warn(`Model ${model} unavailable or overloaded. Trying next fallback model...`);
  }

  throw lastError || new Error("All Gemini model endpoints failed.");
}

/**
 * Generate 40 Regular Questions (1 mark each, min 30 words, 30% numerical, SVG where needed)
 */
async function generateRegularQuestions({ apiKey, classNum, subject, count = 40, dateCompact = "" }) {
  const subMeta = SUBJECT_DETAILS[subject] || { name: subject, olympiad: "Olympiad", codePrefix: "Q" };
  const olympiadName = OLYMPIAD_CODES[subject] || subMeta.name;
  const topics = getTopicsForClass(classNum, subject);
  const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";
  const numericalMin = Math.ceil(count * 0.30);

  const prompt = `You are the Head Chief Examiner for the ${olympiadName} Official Live Championship.
Generate exactly ${count} REGULAR SECTION multiple-choice questions for Class ${classNum} students (1 mark each).

CURRICULUM TOPICS TO COVER:
${topics.map((t, idx) => `Topic ${subMeta.codePrefix}0${idx + 1}: ${t}`).join("\n")}

STRICT STANDARDS (MUST BE FOLLOWED):
1. Difficulty Level: Standard to Advanced Olympiad level for Class ${classNum}.
2. Question Length: MINIMUM 30 words per question. Include context and specific values. Do NOT write short 1-line questions.
3. Numerical Questions: At least ${numericalMin} out of ${count} questions MUST involve actual computation or calculation.
4. SVG Images: For questions involving shapes, geometry diagrams, number lines, clocks, patterns, grids, or graphs — include SVG in 'svg_data'. Leave empty string if not needed.
5. Options: Exactly 4 distinct options. Only ONE correct answer.
6. Correct Answer: 'a' must be 0, 1, 2, or 3 (0-indexed).
7. Symbols: Use clean Unicode (e.g. cm², ×, ÷, ², √, ₹, ½) — never LaTeX.
8. Distribute questions evenly across all listed topics.

SCHEMA (return ONLY the JSON array — no markdown, no explanation):
[
  {
    "id": "c${classNum}_${subShort}_std_001",
    "class": "class${classNum}",
    "subject": "${subject}",
    "q": "Minimum 30-word question with full context and specific numbers",
    "svg_data": "",
    "image_name": "",
    "image_description": "",
    "o": ["Option A", "Option B", "Option C", "Option D"],
    "a": 0,
    "topic": "${subMeta.codePrefix}01",
    "hint": "Pedagogical clue pointing to the key concept",
    "sol": "Step-by-step solution with working",
    "sub_type": "SCQ"
  }
]
Return ONLY the raw JSON array with exactly ${count} objects. No markdown fences, no extra text.`;

  const rawArray = await callGeminiRaw({ apiKey, prompt });
  return rawArray.slice(0, count).map((q, idx) =>
    validateAndNormalizeQuestion(q, classNum, subject, dateCompact, idx, false)
  );
}

/**
 * Generate 10 Achievers HOTS Questions
 * Class 1-5: min 35 words | Class 6-10: min 40 words | 30% numerical | SVG where needed
 */
async function generateAchieverQuestions({ apiKey, classNum, subject, count = 10, dateCompact = "" }) {
  const subMeta = SUBJECT_DETAILS[subject] || { name: subject, olympiad: "Olympiad", codePrefix: "Q" };
  const olympiadName = OLYMPIAD_CODES[subject] || subMeta.name;
  const topics = getTopicsForClass(classNum, subject);
  const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";
  const minWords = classNum <= 5 ? 35 : 40;
  const numericalMin = Math.ceil(count * 0.30);

  const prompt = `You are the Head Chief Examiner for the ${olympiadName} Official Live Championship.
Generate exactly ${count} ACHIEVERS SECTION (HOTS - Higher Order Thinking Skills) multiple-choice questions for Class ${classNum} students (2 marks each).

CURRICULUM TOPICS TO COVER:
${topics.map((t, idx) => `Topic ${subMeta.codePrefix}0${idx + 1}: ${t}`).join("\n")}

STRICT STANDARDS (MUST BE FOLLOWED):
1. Hardship Level: High-difficulty Achievers/HOTS. Every question must test multi-step logical deduction, complex word problems, non-routine cases, and combined concepts.
2. Question Length: MINIMUM ${minWords} words per question. Use detailed scenario-based problem statements with all context, numbers, and conditions specified.
3. Numerical Questions: At least ${numericalMin} out of ${count} questions MUST involve actual multi-step computation or calculation.
4. SVG Images: For questions involving shapes, geometry diagrams, number lines, tables, graphs, patterns, or grid problems — include SVG in 'svg_data'. Leave empty string if not needed.
5. Options: Exactly 4 tricky distractor options. Only ONE unambiguously correct answer.
6. Correct Answer: 'a' must be 0, 1, 2, or 3 (0-indexed).
7. Symbols: Use clean Unicode (e.g. cm², ×, ÷, ², √, ₹, ½) — never LaTeX.
8. Distribute questions across all listed topics.

SCHEMA (return ONLY the JSON array — no markdown, no explanation):
[
  {
    "id": "c${classNum}_${subShort}_ultra_001",
    "class": "class${classNum}",
    "subject": "${subject}",
    "q": "Minimum ${minWords}-word HOTS question with full context and specific values",
    "svg_data": "",
    "image_name": "",
    "image_description": "",
    "o": ["Tricky Option A", "Tricky Option B", "Tricky Option C", "Tricky Option D"],
    "a": 0,
    "topic": "${subMeta.codePrefix}01",
    "hint": "Clue pointing to the tricky multi-step approach",
    "sol": "Detailed step-by-step solution with all working shown",
    "sub_type": "SCQ"
  }
]
Return ONLY the raw JSON array with exactly ${count} objects. No markdown fences, no extra text.`;

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
  GEMINI_MODELS,
  GEMINI_MODEL: GEMINI_MODELS[0],
  OLYMPIAD_CODES,
  generateRegularQuestions,
  generateAchieverQuestions,
  generateFullLiveQuizForClass,
  validateAndNormalizeQuestion
};
