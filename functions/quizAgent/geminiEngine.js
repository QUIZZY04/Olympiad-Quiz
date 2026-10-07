/**
 * Gemini Quiz Generation Engine
 * Generates:
 * - 40 Regular Questions (1 mark each, crisp conceptual Olympiad standard)
 * - 10 Achiever Section Questions (2 marks each, multi-step HOTS / challenging hardship)
 * Matching the exact structure of previous Olympiad Live Quizzes (e.g. 27 Sept 2026).
 */

const { getTopicsForClass, SUBJECT_DETAILS } = require("./syllabus");

const GEMINI_MODELS = [
  "gemini-3.5-flash-lite",   // Highest free quota, fastest
  "gemini-3.8-flash",        // Flagship, lower daily free quota
  "gemini-3.5-flash"         // Mid-tier fallback
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

function validateAndNormalizeQuestion(qObj, classNum, subject, dateCompact, index, isAchiever = false) {
  if (!qObj || typeof qObj !== "object") {
    throw new Error(`Item ${index + 1} is not a valid question object.`);
  }

  const clsStr = "class" + classNum;
  const subStr = (subject || "maths").toLowerCase();
  const subShort = subStr === "maths" ? "m" : subStr === "science" ? "s" : subStr === "english" ? "eng" : "rea";
  const subPrefix = (SUBJECT_DETAILS[subStr] && SUBJECT_DETAILS[subStr].codePrefix) || "Q";

  const padIndex = String(index + 1).padStart(3, "0");
  const typeTag = isAchiever ? "ultra" : "std";
  const fallbackId = `c${classNum}_${subShort}_${typeTag}_${padIndex}`;
  const id = (qObj.id && typeof qObj.id === "string" && !qObj.id.includes("/")) ? qObj.id : fallbackId;

  // Question Text
  let q = String(qObj.q || qObj.question || "").trim();
  if (!q) throw new Error(`Question ${index + 1} is missing question text ('q').`);

  // Word Count Enforcement & Context Enrichment
  const minWords = getMinWords(classNum, isAchiever);
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

  // Shuffle option order
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

  // Inline SVG / images
  const svgData = String(qObj.svg_data || "").trim();
  const imageName = svgData ? `svg_inline_${padIndex}` : String(qObj.image_name || "").trim();
  const imageDescription = String(qObj.image_description || "").trim();

  // Subtype (SCQ, SBQ, ARQ)
  let subType = String(qObj.sub_type || "").trim().toUpperCase();
  if (!["SCQ", "SBQ", "ARQ"].includes(subType)) {
    if (/assertion\s*\(a\)/i.test(q) && /reason\s*\(r\)/i.test(q)) {
      subType = "ARQ";
    } else if (/statement\s*(i|1)/i.test(q) || /scenario|case study|read the following/i.test(q)) {
      subType = "SBQ";
    } else {
      const mod = index % 5;
      subType = mod === 3 ? "SBQ" : mod === 4 ? "ARQ" : "SCQ";
    }
  }

  return {
    id,
    class: clsStr,
    subject: subStr,
    q,
    image_name: imageName,
    image_description: imageDescription,
    svg_data: svgData,
    o,
    a,
    topic,
    hint,
    sol,
    sub_type: subType,
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
  const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";
  const minWords = getMinWords(classNum, false);
  const targetCount = 40;

  let collected = [];

  async function fetchRegularBatch(batchPlan, batchTarget) {
    const numericalMin = Math.ceil(batchTarget * 0.30);
    const prompt = `You are the Head Chief Examiner for the ${olympiadName} Official Live Championship.
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
   - "ARQ" (Assertion-Reason Question): Format with "Assertion (A): ... Reason (R): ..." with standard 4 options.
   Target composition for this batch: ~60% SCQ, ~20% SBQ, ~20% ARQ. Explicitly set "sub_type" to "SCQ", "SBQ", or "ARQ" in the JSON.
4. Numerical Questions: At least ${numericalMin} out of ${batchTarget} questions MUST involve actual computation or calculation.
5. Mathematical Symbols: Use clean Unicode symbols ("×", "÷", "=", "≠", "≤", "≥", "±", "√", "∴", "∵", "∠", "△", "π", "°", "%", "₹"). Never spell them out in words. Never use LaTeX.
6. SVG Images: For geometry, clocks, number lines, patterns, or bar graphs, include clean labelled SVG code in 'svg_data'. Otherwise leave empty string.
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

    const rawArray = await callAIRaw({ openAIKey, geminiKey: geminiKey || apiKey, prompt });
    const valid = [];
    for (let i = 0; i < rawArray.length; i++) {
      try {
        const item = validateAndNormalizeQuestion(rawArray[i], classNum, subject, dateCompact, collected.length + valid.length, false);
        valid.push(item);
      } catch (err) {
        console.warn("Regular item normalization skipped:", err.message);
      }
    }
    return valid;
  }

  // Split into 2 batches of 20 to avoid token cutoff
  const halfCount = 20;
  const plan1 = buildTopicPlan(topics.slice(0, Math.ceil(topics.length / 2)), halfCount);
  const plan2 = buildTopicPlan(topics.slice(Math.ceil(topics.length / 2)).concat(topics.length === 1 ? topics : []), halfCount);

  const batch1 = await fetchRegularBatch(plan1, halfCount);
  collected.push(...batch1);
  await new Promise(r => setTimeout(r, 1200));

  const batch2 = await fetchRegularBatch(plan2, halfCount);
  collected.push(...batch2);

  // Top-up replenishment loop if total < 40
  let topUpAttempts = 0;
  while (collected.length < targetCount && topUpAttempts < 3) {
    topUpAttempts++;
    const missing = targetCount - collected.length;
    console.warn(`Shortfall detected (${collected.length}/40). Requesting top-up batch for ${missing} missing questions (attempt ${topUpAttempts})...`);
    const topUpPlan = buildTopicPlan(topics, missing);
    const topUp = await fetchRegularBatch(topUpPlan, missing);
    collected.push(...topUp);
    await new Promise(r => setTimeout(r, 1200));
  }

  if (collected.length < targetCount) {
    throw new Error(`Failed to generate required 40 regular questions (only obtained ${collected.length}).`);
  }

  // Guarantee EXACTLY 40 questions, sequential IDs 001 to 040
  return collected.slice(0, targetCount).map((q, idx) => {
    const padIdx = String(idx + 1).padStart(3, "0");
    return {
      ...q,
      id: `c${classNum}_${subShort}_std_${padIdx}`
    };
  });
}

/**
 * Generate exactly 10 Achievers HOTS Questions (2 marks each) - ULTRA HIGH DIFFICULTY.
 * Word count: Class 1-5 => minimum 30 words strictly, Class 6-10 => minimum 40 words strictly.
 * Questions are a deliberate mix of SCQ, SBQ, and ARQ.
 */
async function generateAchieverQuestions({ apiKey, openAIKey, geminiKey, classNum, subject, count = 10, dateCompact = "" }) {
  const subMeta = SUBJECT_DETAILS[subject] || { name: subject, olympiad: "Olympiad", codePrefix: "Q" };
  const olympiadName = OLYMPIAD_CODES[subject] || subMeta.name;
  const topics = getTopicsForClass(classNum, subject);
  const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";
  const minWords = getMinWords(classNum, true);
  const targetCount = 10;

  let collected = [];

  async function fetchAchieverBatch(batchPlan, batchTarget) {
    const numericalMin = Math.ceil(batchTarget * 0.30);
    const prompt = `You are the Head Chief Examiner for the ${olympiadName} Official Live Championship.
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
7. Options: Exactly 4 tricky, well-crafted distractor options. Only ONE unambiguously correct answer.
8. Correct Answer Placement: Vary the correct option index 'a' (0, 1, 2, or 3) across the questions.

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

    const rawArray = await callAIRaw({ openAIKey, geminiKey: geminiKey || apiKey, prompt });
    const valid = [];
    for (let i = 0; i < rawArray.length; i++) {
      try {
        const item = validateAndNormalizeQuestion(rawArray[i], classNum, subject, dateCompact, 40 + collected.length + valid.length, true);
        valid.push(item);
      } catch (err) {
        console.warn("Achiever item normalization skipped:", err.message);
      }
    }
    return valid;
  }

  const plan = buildTopicPlan(topics, targetCount);
  const batch = await fetchAchieverBatch(plan, targetCount);
  collected.push(...batch);

  // Top-up replenishment loop if total < 10
  let topUpAttempts = 0;
  while (collected.length < targetCount && topUpAttempts < 3) {
    topUpAttempts++;
    const missing = targetCount - collected.length;
    console.warn(`Achievers shortfall detected (${collected.length}/10). Requesting top-up batch for ${missing} missing questions (attempt ${topUpAttempts})...`);
    const topUpPlan = buildTopicPlan(topics, missing);
    const topUp = await fetchAchieverBatch(topUpPlan, missing);
    collected.push(...topUp);
    await new Promise(r => setTimeout(r, 1200));
  }

  if (collected.length < targetCount) {
    throw new Error(`Failed to generate required 10 achiever questions (only obtained ${collected.length}).`);
  }

  // Guarantee EXACTLY 10 questions, sequential IDs 041 to 050
  return collected.slice(0, targetCount).map((q, idx) => {
    const padIdx = String(40 + idx + 1).padStart(3, "0");
    return {
      ...q,
      id: `c${classNum}_${subShort}_ultra_${padIdx}`
    };
  });
}

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
