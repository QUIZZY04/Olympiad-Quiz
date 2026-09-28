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

// OpenAI is the primary provider when a key is available (higher rate limits,
// more reliable than Gemini's free tier) - Gemini remains the fallback.
// Mirrors quizAgentLive.js's client-side provider logic exactly, so the
// automated Monday cron job behaves the same as a manual admin-panel run.
const OPENAI_MODELS = [
  "gpt-4o-mini",
  "gpt-4o"
];

const RETRYABLE_STATUS_CODES = [429, 500, 502, 503, 504];

const OLYMPIAD_CODES = {
  maths: "IMO (Maths)",
  science: "NSO (Science)",
  english: "IEO (English)",
  reasoning: "IRO (Reasoning)"
};

/**
 * Builds a per-topic question-count breakdown. `topics` is the {code,
 * name}[] list from syllabus.js (codes are canonical - M01, M02, ... M15 -
 * copied from chapterwise.html's sofTopics, not recomputed here). Splitting
 * `count` evenly across every listed topic and stating the exact per-topic
 * quota in the prompt (rather than a vague "distribute evenly") is what
 * actually gets every topic covered instead of the model clustering on a
 * handful of them.
 * @param {{code: string, name: string}[]} topics
 * @returns {{code: string, name: string, qty: number}[]}
 */
function buildTopicPlan(topics, count) {
  const n = topics.length;
  const base = Math.floor(count / n);
  const remainder = count % n;
  return topics.map((t, idx) => ({
    code: t.code,
    name: t.name,
    qty: base + (idx < remainder ? 1 : 0)
  }));
}

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

  // Shuffle option order so the correct answer's position is genuinely
  // random - LLMs have a strong, well-documented bias toward placing the
  // correct option at a particular index (often 0 or the position shown in
  // the schema example), which would let students learn to guess by
  // pattern instead of actually solving the question. This is enforced
  // here in code rather than left to the prompt, since prompt instructions
  // alone are not reliable enough for something students could exploit.
  const correctOptionText = o[a];
  for (let i = o.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [o[i], o[j]] = [o[j], o[i]];
  }
  a = o.indexOf(correctOptionText);

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
 * Call OpenAI API (gpt-4o-mini -> gpt-4o fallback) with the same JSON-array
 * contract as callGeminiRaw. Much higher/more predictable rate limits than
 * Gemini's free tier, which is why it's tried first when a key is available.
 */
async function callOpenAIRaw({ apiKey, prompt }) {
  let lastError = null;

  for (const model of OPENAI_MODELS) {
    const maxRetries = 2;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model,
            messages: [
              { role: "system", content: "You are an expert Olympiad question paper setter. Always respond with a valid JSON array only. No markdown, no explanation." },
              { role: "user", content: prompt }
            ],
            temperature: 0.5,
            max_tokens: 16000
          })
        });

        if (!response.ok) {
          const errorText = await response.text();

          if (response.status === 401) {
            throw new Error("OpenAI API key is invalid or expired. Please check your key at https://platform.openai.com/api-keys");
          }

          if (RETRYABLE_STATUS_CODES.includes(response.status) && attempt < maxRetries) {
            let waitSec = (attempt + 1) * 3;
            if (response.status === 429) {
              try {
                const errJson = JSON.parse(errorText);
                const match = (errJson?.error?.message || "").match(/(\d+\.?\d*)\s*seconds?/i);
                if (match) waitSec = Math.ceil(parseFloat(match[1])) + 1;
              } catch (_) { /* ignore parse failure, use default backoff */ }
            }
            console.warn(`OpenAI ${model} returned HTTP ${response.status}. Retrying in ${waitSec}s (attempt ${attempt + 1}/${maxRetries})...`);
            await new Promise(r => setTimeout(r, waitSec * 1000));
            continue;
          }

          throw new Error(`OpenAI API error (${response.status}) on ${model}: ${errorText}`);
        }

        const result = await response.json();
        const textOutput = result?.choices?.[0]?.message?.content;
        if (!textOutput) throw new Error(`OpenAI (${model}) returned an empty response.`);

        let cleaned = textOutput.trim();
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
        return parsed;

      } catch (err) {
        lastError = err;
        // Invalid/expired key is never worth retrying or falling back on model-by-model
        if (err.message && (err.message.includes("invalid") || err.message.includes("401"))) throw err;

        if (attempt < maxRetries && RETRYABLE_STATUS_CODES.some(code => err.message && err.message.includes(`(${code})`))) {
          const waitSec = (attempt + 1) * 3;
          console.warn(`OpenAI ${model} transient error. Retrying in ${waitSec}s...`);
          await new Promise(r => setTimeout(r, waitSec * 1000));
          continue;
        }

        break;
      }
    }

    console.warn(`OpenAI ${model} unavailable or overloaded. Trying next fallback model...`);
  }

  throw lastError || new Error("All OpenAI model endpoints failed.");
}

/**
 * Provider auto-select: OpenAI first if a key is available (skipped
 * entirely, not retried, on an invalid-key error so a bad OpenAI key can't
 * silently block generation when a working Gemini key is also configured),
 * then Gemini as fallback.
 */
async function callAIRaw({ openAIKey, geminiKey, prompt }) {
  if (openAIKey) {
    try {
      return await callOpenAIRaw({ apiKey: openAIKey, prompt });
    } catch (err) {
      if (err.message && (err.message.includes("invalid") || err.message.includes("401"))) throw err;
      console.warn(`OpenAI generation failed: ${err.message}. Trying Gemini fallback...`);
      if (!geminiKey) throw err;
    }
  }
  if (geminiKey) {
    return await callGeminiRaw({ apiKey: geminiKey, prompt });
  }
  throw new Error("No API key available - provide an OpenAI or Gemini API key.");
}

/**
 * Generate 40 Regular Questions (1 mark each).
 * Word count: Class 1-5 => 30 words min, Class 6-10 => 40 words min.
 * 30% numerical, SVG where the topic needs one, every topic covered.
 */
async function generateRegularQuestions({ apiKey, openAIKey, geminiKey, classNum, subject, count = 40, dateCompact = "" }) {
  const subMeta = SUBJECT_DETAILS[subject] || { name: subject, olympiad: "Olympiad", codePrefix: "Q" };
  const olympiadName = OLYMPIAD_CODES[subject] || subMeta.name;
  const topics = getTopicsForClass(classNum, subject);
  const plan = buildTopicPlan(topics, count);
  const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";
  const minWords = classNum <= 5 ? 30 : 40;
  const numericalMin = Math.ceil(count * 0.30);

  const prompt = `You are the Head Chief Examiner for the ${olympiadName} Official Live Championship.
Generate exactly ${count} REGULAR SECTION multiple-choice questions for Class ${classNum} students (1 mark each).

TOPIC PLAN - every topic below MUST be represented, generate EXACTLY this many questions per topic (do not skip any topic, do not cluster on only a few):
${plan.map(p => `Topic ${p.code} — ${p.name}: exactly ${p.qty} question(s)`).join("\n")}

STRICT STANDARDS (MUST BE FOLLOWED):
1. Difficulty Level: Standard to Advanced Olympiad level for Class ${classNum}.
2. Question Length: MINIMUM ${minWords} words per question. Include context and specific values. Do NOT write short 1-line questions.
3. Numerical Questions: At least ${numericalMin} out of ${count} questions MUST involve actual computation or calculation.
4. Mathematical Symbols: Wherever a mathematical/scientific symbol exists, USE THE SYMBOL, never spell it out in words. Write "×" not "multiplied by", "÷" not "divided by", "=" not "equals", "≠", "≤", "≥", "±", "√", "∴", "∵", "∠" not "angle", "△" not "triangle", "π", "°", "%" not "percent", "₹". Use clean Unicode only — never LaTeX.
5. SVG Images: For any topic involving shapes, geometry diagrams, number lines, clocks, patterns, grids, or graphs — include a clear labelled SVG in 'svg_data' for that question. Leave 'svg_data' as an empty string only when the topic genuinely needs no visual.
6. Options: Exactly 4 distinct options. Only ONE correct answer.
7. Correct Answer Placement: Vary WHICH option (1st, 2nd, 3rd, or 4th) is correct essentially at random across the ${count} questions — do not default to always putting the correct answer in the same position (e.g. always first). 'a' must be 0, 1, 2, or 3 (0-indexed).
8. Topic Code: Each question's "topic" field MUST be set to the exact topic code it was generated for (e.g. "${plan[0].code}"), matching the TOPIC PLAN above precisely.

SCHEMA (return ONLY the JSON array — no markdown, no explanation):
[
  {
    "id": "c${classNum}_${subShort}_std_001",
    "class": "class${classNum}",
    "subject": "${subject}",
    "q": "Minimum ${minWords}-word question with full context and specific numbers",
    "svg_data": "",
    "image_name": "",
    "image_description": "",
    "o": ["Option A", "Option B", "Option C", "Option D"],
    "a": 0,
    "topic": "${plan[0].code}",
    "hint": "Pedagogical clue pointing to the key concept",
    "sol": "Step-by-step solution with working",
    "sub_type": "SCQ"
  }
]
Return ONLY the raw JSON array with exactly ${count} objects. No markdown fences, no extra text.`;

  const rawArray = await callAIRaw({ openAIKey, geminiKey: geminiKey || apiKey, prompt });
  return rawArray.slice(0, count).map((q, idx) =>
    validateAndNormalizeQuestion(q, classNum, subject, dateCompact, idx, false)
  );
}

/**
 * Generate 10 Achievers HOTS Questions - ULTRA HIGH DIFFICULTY.
 * Word count: Class 1-5 => 35 words min, Class 6-10 => 45 words min.
 * 30% numerical, SVG where the topic needs one, every topic covered.
 */
async function generateAchieverQuestions({ apiKey, openAIKey, geminiKey, classNum, subject, count = 10, dateCompact = "" }) {
  const subMeta = SUBJECT_DETAILS[subject] || { name: subject, olympiad: "Olympiad", codePrefix: "Q" };
  const olympiadName = OLYMPIAD_CODES[subject] || subMeta.name;
  const topics = getTopicsForClass(classNum, subject);
  const plan = buildTopicPlan(topics, count);
  const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";
  const minWords = classNum <= 5 ? 35 : 45;
  const numericalMin = Math.ceil(count * 0.30);

  const prompt = `You are the Head Chief Examiner for the ${olympiadName} Official Live Championship.
Generate exactly ${count} ACHIEVERS SECTION (HOTS - Higher Order Thinking Skills) multiple-choice questions for Class ${classNum} students (2 marks each).
These are ULTRA HIGH DIFFICULTY questions - the hardest section of the paper, reserved for top-ranking students only.

TOPIC PLAN - every topic below MUST be represented, generate EXACTLY this many questions per topic (do not skip any topic, do not cluster on only a few):
${plan.map(p => `Topic ${p.code} — ${p.name}: exactly ${p.qty} question(s)`).join("\n")}

STRICT STANDARDS (MUST BE FOLLOWED):
1. Difficulty Level: ULTRA HIGH DIFFICULTY Achievers/HOTS - noticeably harder than the regular section. Every question must test multi-step logical deduction, complex word problems, non-routine cases, and combined/cross-topic concepts. A question that could appear in the Regular section is NOT acceptable here.
2. Question Length: MINIMUM ${minWords} words per question. Use detailed scenario-based problem statements with all context, numbers, and conditions specified.
3. Numerical Questions: At least ${numericalMin} out of ${count} questions MUST involve actual multi-step computation or calculation.
4. Mathematical Symbols: Wherever a mathematical/scientific symbol exists, USE THE SYMBOL, never spell it out in words. Write "×" not "multiplied by", "÷" not "divided by", "=" not "equals", "≠", "≤", "≥", "±", "√", "∴", "∵", "∠" not "angle", "△" not "triangle", "π", "°", "%" not "percent", "₹". Use clean Unicode only — never LaTeX.
5. SVG Images: For any topic involving shapes, geometry diagrams, number lines, tables, graphs, patterns, or grid problems — include a clear labelled SVG in 'svg_data' for that question. Leave 'svg_data' as an empty string only when the topic genuinely needs no visual.
6. Options: Exactly 4 tricky distractor options. Only ONE unambiguously correct answer.
7. Correct Answer Placement: Vary WHICH option (1st, 2nd, 3rd, or 4th) is correct essentially at random across the ${count} questions — do not default to always putting the correct answer in the same position (e.g. always first). 'a' must be 0, 1, 2, or 3 (0-indexed).
8. Topic Code: Each question's "topic" field MUST be set to the exact topic code it was generated for (e.g. "${plan[0].code}"), matching the TOPIC PLAN above precisely.

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
    "topic": "${plan[0].code}",
    "hint": "Clue pointing to the tricky multi-step approach",
    "sol": "Detailed step-by-step solution with all working shown",
    "sub_type": "SCQ"
  }
]
Return ONLY the raw JSON array with exactly ${count} objects. No markdown fences, no extra text.`;

  const rawArray = await callAIRaw({ openAIKey, geminiKey: geminiKey || apiKey, prompt });
  return rawArray.slice(0, count).map((q, idx) =>
    validateAndNormalizeQuestion(q, classNum, subject, dateCompact, idx, true)
  );
}

/**
 * Generate full 50-Question Live Quiz for a Class:
 * 40 Regular (1 Mark) + 10 Achievers (2 Marks) = 50 Questions (60 Marks total)
 */
async function generateFullLiveQuizForClass({ apiKey, openAIKey, geminiKey, classNum, subject, dateCompact = "" }) {
  const effectiveGeminiKey = geminiKey || apiKey;
  if (!openAIKey && !effectiveGeminiKey) {
    throw new Error("An OpenAI or Gemini API key is required.");
  }

  // Generate 40 Regular Questions
  const regularQuestions = await generateRegularQuestions({
    openAIKey,
    geminiKey: effectiveGeminiKey,
    classNum,
    subject,
    count: 40,
    dateCompact
  });

  // Pacing pause (1.5s) - mainly relevant to Gemini Free Tier RPM; harmless
  // when running on OpenAI, which has far more headroom.
  await new Promise(r => setTimeout(r, 1500));

  // Generate 10 Achievers Questions (HOTS)
  const achieverQuestions = await generateAchieverQuestions({
    openAIKey,
    geminiKey: effectiveGeminiKey,
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
  OPENAI_MODELS,
  OLYMPIAD_CODES,
  generateRegularQuestions,
  generateAchieverQuestions,
  generateFullLiveQuizForClass,
  validateAndNormalizeQuestion
};
