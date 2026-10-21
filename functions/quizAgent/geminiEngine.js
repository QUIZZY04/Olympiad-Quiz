/**
 * Gemini Quiz Generation Engine
 * Generates:
 * - 40 Regular Questions (1 mark each, crisp conceptual Olympiad standard)
 * - 10 Achiever Section Questions (2 marks each, multi-step HOTS / challenging hardship)
 * Matching the exact structure of previous Olympiad Live Quizzes (e.g. 27 Sept 2026).
 */

const crypto = require("crypto");
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
/**
 * Word-count band per class group, calibrated to how real SOF Olympiad
 * (IMO/NSO/IEO) papers are actually written - concise for Regular, a bit
 * longer for Achievers/HOTS since those need a multi-step scenario. Same
 * four class bands as getDifficultyGuidance. Both a floor AND a ceiling:
 * previously there was only a minimum, enforced by gluing generic filler
 * text onto short questions, which produced artificially bloated questions
 * (some over 60 words) with no cap at all on natural verbosity either.
 */
function getWordLimits(classNum, isAchiever) {
  const c = parseInt(classNum, 10);
  const band = c <= 2 ? 0 : c <= 5 ? 1 : c <= 8 ? 2 : 3;
  const regularBands = [
    { min: 15, max: 35 },  // Class 1-2
    { min: 20, max: 40 },  // Class 3-5
    { min: 25, max: 45 },  // Class 6-8
    { min: 30, max: 50 }   // Class 9-10
  ];
  const achieverBands = [
    { min: 25, max: 45 },  // Class 1-2
    { min: 30, max: 55 },  // Class 3-5
    { min: 35, max: 65 },  // Class 6-8
    { min: 40, max: 70 }   // Class 9-10
  ];
  return (isAchiever ? achieverBands : regularBands)[band];
}

function countWords(str) {
  return String(str || "").trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Normalizes question text into a stable "template" signature for duplicate
 * detection: strips digits/currency/punctuation and collapses whitespace, so
 * two questions that are the same template with different numbers plugged in
 * (a common LLM failure mode) still collide instead of slipping through as
 * "different" questions.
 */
function normalizeForFingerprint(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[0-9]+/g, "#")
    .replace(/[^\w\s#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function fingerprintOf(text) {
  return crypto.createHash("sha1").update(normalizeForFingerprint(text)).digest("hex");
}

/**
 * Exact integer type-count quota (not a percentage hint the model can drift
 * from) so the type mix is something we can verify after generation rather
 * than only ask for.
 */
function computeTypeQuota(total, ratios) {
  const scq = Math.round(total * ratios.SCQ);
  const sbq = Math.round(total * ratios.SBQ);
  const arq = Math.max(0, total - scq - sbq);
  return { SCQ: scq, SBQ: sbq, ARQ: arq };
}

/**
 * Concrete, class-band-calibrated difficulty guidance (replacing vague
 * "Standard to Advanced" / "Ultra High" adjectives) anchored to how real SOF
 * Olympiad papers scale difficulty by grade band and section.
 */
function getDifficultyGuidance(classNum, isAchiever) {
  const c = parseInt(classNum, 10);
  const band = c <= 2 ? "lower-primary (Class 1-2)" : c <= 5 ? "upper-primary (Class 3-5)" : c <= 8 ? "middle school (Class 6-8)" : "secondary (Class 9-10)";

  const regularByBand = {
    "lower-primary (Class 1-2)": "match SOF Olympiad Level-1 difficulty for this band: direct application of one concept, but phrased so the student must read carefully and extract the right numbers/relationship rather than spot the answer instantly.",
    "upper-primary (Class 3-5)": "match SOF Olympiad Level-1 difficulty for this band: a full word-problem requiring one clear multi-step calculation (not a one-line fact lookup), consistent with real SOF IMO/NSO paper questions at this grade.",
    "middle school (Class 6-8)": "match SOF Olympiad Level-1 difficulty for this band: requires combining two steps or two related concepts from the syllabus, at the level of actual SOF Level-1 exam papers (not textbook-exercise-easy).",
    "secondary (Class 9-10)": "match SOF Olympiad Level-1 difficulty for this band: genuine multi-step application requiring correct setup before computation, at the level of real SOF IMO/NSO Level-1 papers - harder than a standard school test question."
  };

  const achieverByBand = {
    "lower-primary (Class 1-2)": "match SOF Achievers/HOTS section difficulty: a 2-step chain of reasoning (e.g. combine two operations or two pieces of given information) - clearly harder than anything in the Regular section, but still age-appropriate.",
    "upper-primary (Class 3-5)": "match SOF Achievers/HOTS section difficulty: multi-step reasoning across 2-3 operations or combined concepts (e.g. geometry + arithmetic, or a logic puzzle requiring elimination) - the level reserved for top-ranking SOF students.",
    "middle school (Class 6-8)": "match SOF Level-2 / Achievers difficulty: cross-topic problems combining two syllabus chapters, non-routine setups the student hasn't seen as a worked example, requiring genuine deduction rather than formula substitution.",
    "secondary (Class 9-10)": "match SOF Level-2 difficulty: problems that would challenge students scoring in the top 10-15% - combined concepts, non-obvious setup, and at least one step that isn't a direct formula application."
  };

  return isAchiever ? achieverByBand[band] : regularByBand[band];
}

/**
 * Heuristic: does this question's topic/text imply a visual (diagram, clock
 * face, number line, graph, pattern grid) that the question can't be solved
 * without? If so, `svg_data` MUST be present and valid - this is exactly the
 * "references a chart that was never attached" defect class found auditing
 * the live database, and this check stops new occurrences of it at
 * generation time instead of discovering them after they've gone live.
 */
// Narrow and precise on purpose: only trigger when the question text
// explicitly references an accompanying visual it depends on, never on
// generic topical words (a prior broader version matched ordinary phrasing
// like "observe the..." or "study the..." in plain Science questions that
// need no diagram at all, causing mass false-positive rejections and
// cascading generation failures across most classes).
const DIAGRAM_KEYWORDS = /\b(shown|given|depicted|illustrated)\s+(in\s+the\s+)?(figure|diagram|image|picture|chart|graph|table)\b|\b(figure|diagram|image|picture|chart|graph|table)\s+(shown|given|below|above)\b|\bnumber\s*line\s+(shown|given|below|above)\b|\bclock\s*(face)?\s*(shown|given|below|above)\b|\bpictograph\b|\bbar\s*graph\b|\bsee\s+the\s+(figure|diagram|image|picture|chart|graph)\b/i;

function questionNeedsDiagram(questionText, topicName) {
  return DIAGRAM_KEYWORDS.test(questionText) || DIAGRAM_KEYWORDS.test(topicName || "");
}

function isPlausibleSvg(svgData) {
  return typeof svgData === "string" && /<svg[\s>]/i.test(svgData) && /<\/svg>/i.test(svgData);
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

  // Word Count Enforcement: reject and let the caller regenerate rather than
  // gluing generic filler text onto short questions (the old approach, which
  // produced artificially bloated, formulaic-sounding questions and had no
  // ceiling at all, letting naturally verbose ones run past 60+ words).
  const { min: minWords, max: maxWords } = getWordLimits(classNum, isAchiever);
  const words = countWords(q);
  if (words < minWords) {
    throw new Error(`Question ${index + 1} ("${q.slice(0, 30)}...") is too short (${words} words, minimum ${minWords}).`);
  }
  if (words > maxWords) {
    throw new Error(`Question ${index + 1} ("${q.slice(0, 30)}...") is too long (${words} words, maximum ${maxWords}).`);
  }

  // Options: must be exactly 4 strings
  let o = Array.isArray(qObj.o) ? qObj.o : (Array.isArray(qObj.options) ? qObj.options : []);
  o = o.map(opt => String(opt != null ? opt : "").trim());
  if (o.length !== 4 || o.some(opt => opt.length === 0)) {
    throw new Error(`Question ${index + 1} ("${q.slice(0, 30)}...") does not have exactly 4 non-empty options.`);
  }
  const normalizedOptionSet = new Set(o.map(opt => opt.toLowerCase().replace(/\s+/g, " ").trim()));
  if (normalizedOptionSet.size !== o.length) {
    throw new Error(`Question ${index + 1} ("${q.slice(0, 30)}...") has duplicate option values.`);
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
  if (svgData && !isPlausibleSvg(svgData)) {
    throw new Error(`Question ${index + 1} ("${q.slice(0, 30)}...") has svg_data that isn't valid SVG markup.`);
  }
  if (!svgData && questionNeedsDiagram(q)) {
    throw new Error(`Question ${index + 1} ("${q.slice(0, 30)}...") appears to need a diagram/chart but svg_data is empty - unsolvable as text-only.`);
  }
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
 * Provider auto-select: Gemini first if a key is available, OpenAI as
 * fallback. (Swapped from OpenAI-primary on request - Gemini is now the
 * default provider, OpenAI only kicks in if Gemini fails or no Gemini key
 * is configured.)
 */
async function callAIRaw({ openAIKey, geminiKey, prompt }) {
  if (geminiKey) {
    try {
      return await callGeminiRaw({ apiKey: geminiKey, prompt });
    } catch (err) {
      console.warn(`Gemini generation failed: ${err.message}. Trying OpenAI fallback...`);
      if (!openAIKey) throw err;
    }
  }
  if (openAIKey) {
    return await callOpenAIRaw({ apiKey: openAIKey, prompt });
  }
  throw new Error("No API key available - provide an OpenAI or Gemini API key.");
}

const ANSWER_LETTERS = ["A", "B", "C", "D"];
const VERIFY_CHUNK_SIZE = 12;

/**
 * Independently re-solves a batch of already-generated questions (blind to
 * which option is currently marked correct) and returns every parseable
 * verdict as id -> verifiedOptionIndex (not just mismatches), so callers can
 * compare against the stored answer themselves and, for disagreements, run
 * a tie-break instead of just vetoing the question.
 */
async function verifyAnswers({ openAIKey, geminiKey, questions, subject }) {
  const verdicts = new Map();

  for (let i = 0; i < questions.length; i += VERIFY_CHUNK_SIZE) {
    const chunk = questions.slice(i, i + VERIFY_CHUNK_SIZE);
    const prompt = `You are an independent answer-key verifier for a ${subject} Olympiad exam. Below are ${chunk.length} multiple-choice questions. For EACH one, solve it completely from scratch - do NOT assume any option is already correct, work out the real answer yourself first.

${chunk.map((q, idx) => `${idx + 1}. [id: ${q.id}]\n${q.q}\nA) ${q.o[0]}\nB) ${q.o[1]}\nC) ${q.o[2]}\nD) ${q.o[3]}`).join("\n\n")}

Return ONLY a raw JSON array (no markdown), one object per question, in this exact shape:
[{"id": "<the id given above>", "correct_option": "A"|"B"|"C"|"D"}]`;

    try {
      const raw = await callAIRaw({ openAIKey, geminiKey, prompt });
      for (const entry of raw) {
        const letter = String(entry?.correct_option || "").trim().toUpperCase();
        const verifiedIndex = ANSWER_LETTERS.indexOf(letter);
        if (verifiedIndex === -1 || !entry?.id) continue; // unparseable verdict - skip rather than guess
        verdicts.set(entry.id, verifiedIndex);
      }
    } catch (err) {
      console.warn(`Answer verification chunk failed (${err.message}) - skipping verification for this chunk rather than blocking generation.`);
    }

    await new Promise(r => setTimeout(r, 800));
  }

  return verdicts;
}

/**
 * For questions where the verifier's independent answer disagreed with the
 * stored one, get a third opinion (blind, same format) to break the tie
 * instead of either (a) blindly trusting the single verifier, which proved
 * unreliable on its own (~30% self-disagreement rate observed live), or (b)
 * dropping and regenerating the whole question, which was disruptive and
 * usually unnecessary. Majority vote among {original, verifier, tie-break}:
 * - tie-break agrees with the original -> keep the original, no change.
 * - tie-break agrees with the verifier -> fix `a` in place to that index
 *   (and replace `sol` with a plain confirmation, since the old explanation
 *   text may no longer match the corrected option).
 * - all three disagree -> leave as-is; genuinely ambiguous, flag for manual
 *   review rather than guess.
 * Mutates the question objects in `disputed` in place and returns a summary
 * for logging.
 */
async function resolveDisputedAnswers({ openAIKey, geminiKey, disputed, subject }) {
  const fixed = [];
  const unresolved = [];

  for (let i = 0; i < disputed.length; i += VERIFY_CHUNK_SIZE) {
    const chunk = disputed.slice(i, i + VERIFY_CHUNK_SIZE);
    const prompt = `You are a tie-breaking answer-key verifier for a ${subject} Olympiad exam. Two earlier checks disagreed on these ${chunk.length} questions. Solve each one completely and carefully from scratch, showing no work in your answer - just give your final, confident answer.

${chunk.map((d, idx) => `${idx + 1}. [id: ${d.question.id}]\n${d.question.q}\nA) ${d.question.o[0]}\nB) ${d.question.o[1]}\nC) ${d.question.o[2]}\nD) ${d.question.o[3]}`).join("\n\n")}

Return ONLY a raw JSON array (no markdown), one object per question, in this exact shape:
[{"id": "<the id given above>", "correct_option": "A"|"B"|"C"|"D"}]`;

    try {
      const raw = await callAIRaw({ openAIKey, geminiKey, prompt });
      const byId = new Map(chunk.map(d => [d.question.id, d]));
      for (const entry of raw) {
        const d = byId.get(entry?.id);
        if (!d) continue;
        const letter = String(entry.correct_option || "").trim().toUpperCase();
        const tieBreakIndex = ANSWER_LETTERS.indexOf(letter);
        if (tieBreakIndex === -1) continue;

        if (tieBreakIndex === d.question.a) {
          // Tie-break sides with the original - no change needed.
        } else if (tieBreakIndex === d.verifierIndex) {
          d.question.a = tieBreakIndex;
          d.question.sol = `Correct option is: ${d.question.o[tieBreakIndex]}`;
          fixed.push(d.question.id);
        } else {
          unresolved.push(d.question.id); // all three disagreed - leave untouched
        }
      }
    } catch (err) {
      console.warn(`Tie-break verification chunk failed (${err.message}) - leaving these questions as originally generated.`);
    }

    await new Promise(r => setTimeout(r, 800));
  }

  return { fixed, unresolved };
}

/**
 * Generate 40 Regular Questions (1 mark each).
 * Word count: see getWordLimits() - a min/max band per class group (1-2,
 * 3-5, 6-8, 9-10).
 * 30% numerical, SVG where the topic needs one, every topic covered.
 */
async function generateRegularQuestions({ apiKey, openAIKey, geminiKey, classNum, subject, count = 40, dateCompact = "", db = null, seenFingerprints = new Set() }) {
  const subMeta = SUBJECT_DETAILS[subject] || { name: subject, olympiad: "Olympiad", codePrefix: "Q" };
  const olympiadName = OLYMPIAD_CODES[subject] || subMeta.name;
  const topics = getTopicsForClass(classNum, subject);
  const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";
  const { min: minWords, max: maxWords } = getWordLimits(classNum, false);
  const targetCount = 40;
  const difficultyGuidance = getDifficultyGuidance(classNum, false);

  let collected = [];

  /**
   * Accepts valid, non-duplicate items from a raw AI batch into `collected`.
   * Duplicate detection runs against both this run's own fingerprints
   * (`seenFingerprints`, shared across regular+achiever for this class so the
   * same question can't appear twice in one paper) and, when `db` is
   * provided, against every fingerprint ever published for this class+subject
   * (so a question can't repeat week over week either).
   */
  async function acceptValidatedItems(rawArray, startIndex) {
    const valid = [];
    for (let i = 0; i < rawArray.length; i++) {
      let item;
      try {
        item = validateAndNormalizeQuestion(rawArray[i], classNum, subject, dateCompact, startIndex + valid.length, false);
      } catch (err) {
        console.warn("Regular item normalization skipped:", err.message);
        continue;
      }
      const fp = fingerprintOf(item.q);
      if (seenFingerprints.has(fp)) {
        console.warn(`Regular item skipped: duplicate/near-duplicate of another question in this run ("${item.q.slice(0, 40)}...").`);
        continue;
      }
      if (db) {
        try {
          const fpDoc = await db.collection("quiz_question_fingerprints").doc(`c${classNum}_${subject}_${fp}`).get();
          if (fpDoc.exists) {
            console.warn(`Regular item skipped: duplicate of a previously published question ("${item.q.slice(0, 40)}...").`);
            continue;
          }
        } catch (err) {
          console.warn("Fingerprint lookup failed, continuing without cross-history dedup for this item:", err.message);
        }
      }
      seenFingerprints.add(fp);
      item._fingerprint = fp;
      valid.push(item);
    }
    return valid;
  }

  async function fetchRegularBatch(batchPlan, batchTarget) {
    const numericalMin = Math.ceil(batchTarget * 0.30);
    const typeQuota = computeTypeQuota(batchTarget, { SCQ: 0.6, SBQ: 0.2, ARQ: 0.2 });
    const prompt = `You are the Head Chief Examiner for the ${olympiadName} Official Live Championship.
Generate exactly ${batchTarget} REGULAR SECTION multiple-choice questions for Class ${classNum} students (1 mark each).

SUBJECT LOCK (MANDATORY): Every single question MUST be a pure ${subMeta.name} question testing ${subMeta.name} concepts ONLY. Do NOT include questions from any other subject, general knowledge, current affairs, or reasoning/logic puzzles unless ${subMeta.name} itself IS reasoning - stay strictly within the ${subMeta.name} syllabus for Class ${classNum}.

TOPIC PLAN - distribute questions across these topics:
${batchPlan.map(p => `Topic ${p.code} — ${p.name}: exactly ${p.qty} question(s)`).join("\n")}

STRICT STANDARDS (MANDATORY & ENFORCED):
1. Difficulty Level: ${difficultyGuidance}
2. QUESTION LENGTH: Every question's "q" text MUST be between ${minWords} and ${maxWords} words (strict range - both too short and too long will be discarded). Include enough real-world scenario/numerical context to need that many words, but stay concise - do not pad with unnecessary preamble or filler sentences.
3. QUESTION TYPE MIX (EXACT COUNTS, NOT APPROXIMATE):
   Of these ${batchTarget} questions, exactly ${typeQuota.SCQ} MUST be "SCQ", exactly ${typeQuota.SBQ} MUST be "SBQ", and exactly ${typeQuota.ARQ} MUST be "ARQ". These are precise required counts.
   - "SCQ" (Single Correct Question): Standard 4-option conceptual/computational Olympiad problem.
   - "SBQ" (Statement-Based / Scenario-Based Question): Dual-statement format ("Statement I: ... Statement II: ... Which statement is correct?") or real-world scenario paragraph with 4 choices.
   - "ARQ" (Assertion-Reason Question): Format with "Assertion (A): ... Reason (R): ..." with standard 4 options.
   Explicitly set "sub_type" to "SCQ", "SBQ", or "ARQ" in the JSON for every question, matching the exact counts above.
4. Numerical Questions: At least ${numericalMin} out of ${batchTarget} questions MUST involve actual computation or calculation.
5. Mathematical Symbols: Use clean Unicode symbols ("×", "÷", "=", "≠", "≤", "≥", "±", "√", "∴", "∵", "∠", "△", "π", "°", "%", "₹"). Never spell them out in words. Never use LaTeX.
6. SVG Images (MANDATORY WHEN APPLICABLE): Any question whose topic involves geometry/shapes, clocks, number lines, patterns, grids, or bar/pictographs MUST include a clean, labelled, self-contained <svg>...</svg> in 'svg_data' with all values the question refers to actually drawn in it - a question that says "see the figure/chart below" with an empty svg_data will be discarded. For every other question, leave 'svg_data' as an empty string.
7. Options: Exactly 4 distinct options ('o') - no two options may be the same value. Only ONE unambiguously correct answer.
8. Correct Answer Placement: Vary the correct option index 'a' (0, 1, 2, or 3) across the questions.
9. Uniqueness: Every question must be a genuinely distinct problem (different scenario/numbers/concept) - do not generate two questions that are the same template with only the numbers changed.

SCHEMA (return ONLY the raw JSON array of ${batchTarget} objects, no markdown, no explanation):
[
  {
    "id": "c${classNum}_${subShort}_std_001",
    "class": "class${classNum}",
    "subject": "${subject}",
    "q": "A ${minWords}-${maxWords} word detailed question statement with full scenario context...",
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
    return acceptValidatedItems(rawArray, collected.length);
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

  // Top-up replenishment loop if total < 40 (also absorbs items dropped for
  // being duplicates, having bad diagrams, etc. - any shortfall gets topped up)
  let topUpAttempts = 0;
  while (collected.length < targetCount && topUpAttempts < 4) {
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

  // Independent answer-correctness verification pass - diagnostic only.
  // Dropping and regenerating on every disputed verdict turned out to cause
  // more harm than good in practice: a same-tier model re-solving HOTS-level
  // questions disagrees with itself on a large fraction of genuinely-correct
  // questions (observed ~30% dispute rate live), so auto-regenerating on
  // that signal mostly just churns good questions and breaks the clean
  // 40-then-10 batch flow. Flag disputes for visibility, keep the questions.
  console.log(`Verifying answers for ${collected.length} regular questions (Class ${classNum} ${subject})...`);
  const regularVerdicts = await verifyAnswers({ openAIKey, geminiKey: geminiKey || apiKey, questions: collected, subject });
  const regularDisputed = collected
    .filter(q => regularVerdicts.has(q.id) && regularVerdicts.get(q.id) !== q.a)
    .map(q => ({ question: q, verifierIndex: regularVerdicts.get(q.id) }));
  if (regularDisputed.length > 0) {
    console.log(`Verification disputed ${regularDisputed.length}/${collected.length} regular answer(s) - running tie-break...`);
    const { fixed, unresolved } = await resolveDisputedAnswers({ openAIKey, geminiKey: geminiKey || apiKey, disputed: regularDisputed, subject });
    if (fixed.length) console.warn(`Corrected ${fixed.length} regular answer(s) after tie-break confirmed the original was wrong: ${fixed.join(", ")}`);
    if (unresolved.length) console.warn(`${unresolved.length} regular question(s) remain genuinely ambiguous after 3-way disagreement (left as-is, needs manual review): ${unresolved.join(", ")}`);
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
 * Word count: see getWordLimits() - a min/max band per class group (1-2,
 * 3-5, 6-8, 9-10).
 * Questions are a deliberate mix of SCQ, SBQ, and ARQ.
 */
async function generateAchieverQuestions({ apiKey, openAIKey, geminiKey, classNum, subject, count = 10, dateCompact = "", db = null, seenFingerprints = new Set() }) {
  const subMeta = SUBJECT_DETAILS[subject] || { name: subject, olympiad: "Olympiad", codePrefix: "Q" };
  const olympiadName = OLYMPIAD_CODES[subject] || subMeta.name;
  const topics = getTopicsForClass(classNum, subject);
  const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";
  const { min: minWords, max: maxWords } = getWordLimits(classNum, true);
  const targetCount = 10;
  const difficultyGuidance = getDifficultyGuidance(classNum, true);

  let collected = [];

  async function acceptValidatedItems(rawArray, startIndex) {
    const valid = [];
    for (let i = 0; i < rawArray.length; i++) {
      let item;
      try {
        item = validateAndNormalizeQuestion(rawArray[i], classNum, subject, dateCompact, startIndex + valid.length, true);
      } catch (err) {
        console.warn("Achiever item normalization skipped:", err.message);
        continue;
      }
      const fp = fingerprintOf(item.q);
      if (seenFingerprints.has(fp)) {
        console.warn(`Achiever item skipped: duplicate/near-duplicate of another question in this run ("${item.q.slice(0, 40)}...").`);
        continue;
      }
      if (db) {
        try {
          const fpDoc = await db.collection("quiz_question_fingerprints").doc(`c${classNum}_${subject}_${fp}`).get();
          if (fpDoc.exists) {
            console.warn(`Achiever item skipped: duplicate of a previously published question ("${item.q.slice(0, 40)}...").`);
            continue;
          }
        } catch (err) {
          console.warn("Fingerprint lookup failed, continuing without cross-history dedup for this item:", err.message);
        }
      }
      seenFingerprints.add(fp);
      item._fingerprint = fp;
      valid.push(item);
    }
    return valid;
  }

  async function fetchAchieverBatch(batchPlan, batchTarget) {
    const numericalMin = Math.ceil(batchTarget * 0.30);
    const typeQuota = computeTypeQuota(batchTarget, { SCQ: 0.5, SBQ: 0.3, ARQ: 0.2 });
    const prompt = `You are the Head Chief Examiner for the ${olympiadName} Official Live Championship.
Generate exactly ${batchTarget} ACHIEVERS SECTION (HOTS - Higher Order Thinking Skills) multiple-choice questions for Class ${classNum} students (2 marks each).
These are ULTRA HIGH DIFFICULTY questions - the hardest section of the paper, reserved for top-ranking students only.

SUBJECT LOCK (MANDATORY): Every single question MUST be a pure ${subMeta.name} question testing ${subMeta.name} concepts ONLY. Do NOT include questions from any other subject, general knowledge, current affairs, or reasoning/logic puzzles unless ${subMeta.name} itself IS reasoning - stay strictly within the ${subMeta.name} syllabus for Class ${classNum}.

TOPIC PLAN - distribute questions across these topics:
${batchPlan.map(p => `Topic ${p.code} — ${p.name}: exactly ${p.qty} question(s)`).join("\n")}

STRICT STANDARDS (MANDATORY & ENFORCED):
1. Difficulty Level: ${difficultyGuidance} A question that could appear in the Regular section is NOT acceptable here.
2. QUESTION LENGTH: Every question's "q" text MUST be between ${minWords} and ${maxWords} words (strict range - both too short and too long will be discarded). Use a detailed, scenario-based problem statement with all context, numbers, and constraints specified, but stay concise - do not pad with unnecessary preamble or filler sentences.
3. QUESTION TYPE MIX (EXACT COUNTS, NOT APPROXIMATE):
   Of these ${batchTarget} questions, exactly ${typeQuota.SCQ} MUST be "SCQ", exactly ${typeQuota.SBQ} MUST be "SBQ", and exactly ${typeQuota.ARQ} MUST be "ARQ". These are precise required counts.
   - "SCQ" (Single Correct Question): Complex multi-step analytical Olympiad problem.
   - "SBQ" (Statement-Based / Scenario-Based Question): Multi-statement evaluation or advanced case study scenario with 4 choices.
   - "ARQ" (Assertion-Reason Question): Format with "Assertion (A): ... Reason (R): ..." testing deep conceptual causality with 4 standard options.
   Explicitly set "sub_type" to "SCQ", "SBQ", or "ARQ" in the JSON for every question, matching the exact counts above.
4. Numerical Questions: At least ${numericalMin} out of ${batchTarget} questions MUST involve actual multi-step computation or calculation.
5. Mathematical Symbols: Use clean Unicode symbols ("×", "÷", "=", "≠", "≤", "≥", "±", "√", "∴", "∵", "∠", "△", "π", "°", "%", "₹"). Never spell them out in words. Never use LaTeX.
6. SVG Images (MANDATORY WHEN APPLICABLE): Any question whose topic involves shapes, geometry diagrams, number lines, tables, graphs, patterns, or grids MUST include a clear, labelled, self-contained <svg>...</svg> in 'svg_data' with all values the question refers to actually drawn in it - a question that says "see the figure/chart below" with an empty svg_data will be discarded. For every other question, leave 'svg_data' as an empty string.
7. Options: Exactly 4 tricky, well-crafted, DISTINCT distractor options - no two options may be the same value. Only ONE unambiguously correct answer.
8. Correct Answer Placement: Vary the correct option index 'a' (0, 1, 2, or 3) across the questions.
9. Uniqueness: Every question must be a genuinely distinct problem (different scenario/numbers/concept) - do not generate two questions that are the same template with only the numbers changed.

SCHEMA (return ONLY the raw JSON array of ${batchTarget} objects, no markdown, no explanation):
[
  {
    "id": "c${classNum}_${subShort}_ultra_041",
    "class": "class${classNum}",
    "subject": "${subject}",
    "q": "A ${minWords}-${maxWords} word challenging HOTS question with full scenario context...",
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
    return acceptValidatedItems(rawArray, 40 + collected.length);
  }

  const plan = buildTopicPlan(topics, targetCount);
  const batch = await fetchAchieverBatch(plan, targetCount);
  collected.push(...batch);

  // Top-up replenishment loop if total < 10 (also absorbs items dropped for
  // being duplicates, having bad diagrams, etc.)
  let topUpAttempts = 0;
  while (collected.length < targetCount && topUpAttempts < 4) {
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

  // Independent answer-correctness verification pass - diagnostic only, see
  // the matching comment in generateRegularQuestions for why this no longer
  // drops and regenerates on a disputed verdict.
  console.log(`Verifying answers for ${collected.length} achiever questions (Class ${classNum} ${subject})...`);
  const achieverVerdicts = await verifyAnswers({ openAIKey, geminiKey: geminiKey || apiKey, questions: collected, subject });
  const achieverDisputed = collected
    .filter(q => achieverVerdicts.has(q.id) && achieverVerdicts.get(q.id) !== q.a)
    .map(q => ({ question: q, verifierIndex: achieverVerdicts.get(q.id) }));
  if (achieverDisputed.length > 0) {
    console.log(`Verification disputed ${achieverDisputed.length}/${collected.length} achiever answer(s) - running tie-break...`);
    const { fixed, unresolved } = await resolveDisputedAnswers({ openAIKey, geminiKey: geminiKey || apiKey, disputed: achieverDisputed, subject });
    if (fixed.length) console.warn(`Corrected ${fixed.length} achiever answer(s) after tie-break confirmed the original was wrong: ${fixed.join(", ")}`);
    if (unresolved.length) console.warn(`${unresolved.length} achiever question(s) remain genuinely ambiguous after 3-way disagreement (left as-is, needs manual review): ${unresolved.join(", ")}`);
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

async function generateFullLiveQuizForClass({ apiKey, openAIKey, geminiKey, classNum, subject, dateCompact = "", db = null }) {
  const effectiveGeminiKey = geminiKey || apiKey;
  if (!openAIKey && !effectiveGeminiKey) {
    throw new Error("An OpenAI or Gemini API key is required.");
  }

  // Shared across regular+achiever so the same question can't appear twice
  // in one class's paper (as well as being checked against Firestore history
  // via `db`, when provided, for week-over-week uniqueness).
  const seenFingerprints = new Set();

  // Generate 40 Regular Questions
  const regularQuestions = await generateRegularQuestions({
    openAIKey,
    geminiKey: effectiveGeminiKey,
    classNum,
    subject,
    count: 40,
    dateCompact,
    db,
    seenFingerprints
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
    dateCompact,
    db,
    seenFingerprints
  });

  // Pull the fingerprints out for the caller to persist after a successful
  // publish, and strip the internal field off the objects that get uploaded.
  const fingerprints = [];
  const stripFingerprint = (q) => {
    if (q._fingerprint) fingerprints.push({ fingerprint: q._fingerprint, questionId: q.id });
    const { _fingerprint, ...rest } = q;
    return rest;
  };
  const cleanRegular = regularQuestions.map(stripFingerprint);
  const cleanAchiever = achieverQuestions.map(stripFingerprint);

  return {
    classNum,
    subject,
    regularQuestions: cleanRegular,
    achieverQuestions: cleanAchiever,
    totalCount: cleanRegular.length + cleanAchiever.length,
    fingerprints
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
  validateAndNormalizeQuestion,
  verifyAnswers,
  resolveDisputedAnswers,
  fingerprintOf
};
