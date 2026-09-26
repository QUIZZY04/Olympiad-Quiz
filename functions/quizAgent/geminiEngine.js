/**
 * Gemini Quiz Generation Engine
 * Uses Gemini Flash (Free Tier) to generate high-quality Olympiad questions
 * strictly adhering to the user's JSON schema.
 */

const { getTopicsForClass, SUBJECT_DETAILS } = require("./syllabus");

const GEMINI_MODEL = "gemini-2.0-flash";

/**
 * Clean and normalize a question object to ensure strict adherence to the schema
 */
function validateAndNormalizeQuestion(qObj, classNum, subject, dateStr, index) {
  if (!qObj || typeof qObj !== "object") {
    throw new Error(`Item ${index + 1} is not a valid question object.`);
  }

  const clsStr = "class" + classNum;
  const subStr = (subject || "maths").toLowerCase();
  const subPrefix = (SUBJECT_DETAILS[subStr] && SUBJECT_DETAILS[subStr].codePrefix) || "Q";

  // Build clean ID: e.g. c3_eng_live_20261005_001
  const padIndex = String(index + 1).padStart(3, "0");
  const fallbackId = `c${classNum}_${subStr}_live_${dateStr}_${padIndex}`;
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
    // If given as letter 'A', 'B', 'C', 'D'
    if (typeof qObj.a === "string" && /^[A-D]$/i.test(qObj.a.trim())) {
      a = qObj.a.trim().toUpperCase().charCodeAt(0) - 65;
    } else {
      a = 0; // fallback to 0
    }
  }

  // Topic Code
  const topic = String(qObj.topic || `${subPrefix}01`).trim().toUpperCase();

  // Hint & Solution
  const hint = String(qObj.hint || "").trim();
  const sol = String(qObj.sol || qObj.solution || qObj.explanation || "Correct answer is option: " + o[a]).trim();

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
    sub_type: "SCQ"
  };
}

/**
 * Generate questions for a specific class and subject using Gemini API
 */
async function generateQuizForClass({ apiKey, classNum, subject, count = 15, dateStr = "" }) {
  if (!apiKey) {
    throw new Error("Gemini API key is required. Obtain a free key at https://aistudio.google.com/app/apikey");
  }

  const effectiveDateStr = dateStr || new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const topics = getTopicsForClass(classNum, subject);
  const subjectMeta = SUBJECT_DETAILS[subject] || { name: subject, olympiad: "Olympiad", codePrefix: "GEN" };

  const prompt = `You are an elite, expert Olympiad exam creator for ${subjectMeta.olympiad} (${subjectMeta.name}).
Your task is to generate exactly ${count} original, high-quality, concept-testing multiple-choice questions for Class ${classNum} students.

Curriculum/Topic focus for this week:
${topics.map((t, idx) => `Topic ${subjectMeta.codePrefix}0${idx + 1}: ${t}`).join("\n")}

STRICT GUIDELINES:
1. Appropriateness: Tailored accurately to cognitive level of Class ${classNum}.
2. Quality: Test conceptual clarity and logical thinking. Avoid overly trivial rote-memory questions.
3. Options: Exactly 4 options ('o') per question. Only ONE option must be clearly correct. Options should be distinct, unambiguous, and plausible.
4. Correct Answer: 'a' must be the 0-indexed number of the correct option (0, 1, 2, or 3).
5. Math / Formula formatting: Use clear standard Unicode (e.g. cm², 1/2, ×, ÷, ², √) rather than raw broken LaTeX.
6. Schema: Every item MUST strictly follow this exact JSON schema:
[
  {
    "id": "c${classNum}_${subject}_live_${effectiveDateStr}_001",
    "class": "class${classNum}",
    "subject": "${subject}",
    "q": "Complete question text",
    "image_name": "",
    "image_description": "",
    "o": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "a": 0,
    "topic": "${subjectMeta.codePrefix}01",
    "hint": "Brief pedagogical clue to help a stuck student",
    "sol": "Step-by-step logical explanation and reasoning",
    "sub_type": "SCQ"
  }
]

Return ONLY the valid raw JSON array containing the ${count} question objects. Do NOT include markdown code blocks, do NOT write \`\`\`json or any commentary outside the array.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  const requestBody = {
    contents: [
      {
        parts: [{ text: prompt }]
      }
    ],
    generationConfig: {
      temperature: 0.3,
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

  if (!textOutput) {
    throw new Error("Gemini returned an empty response.");
  }

  // Parse JSON
  let cleanedText = textOutput.trim();
  if (cleanedText.startsWith("```json")) {
    cleanedText = cleanedText.replace(/^```json\s*/, "").replace(/\s*```$/, "");
  } else if (cleanedText.startsWith("```")) {
    cleanedText = cleanedText.replace(/^```\s*/, "").replace(/\s*```$/, "");
  }

  let questionsArray;
  try {
    questionsArray = JSON.parse(cleanedText);
  } catch (err) {
    throw new Error(`Failed to parse Gemini JSON output: ${err.message}\nRaw output preview: ${cleanedText.slice(0, 200)}`);
  }

  if (!Array.isArray(questionsArray)) {
    throw new Error("Gemini did not return a JSON array of questions.");
  }

  // Normalize and validate each question
  const validatedQuestions = questionsArray.map((q, idx) =>
    validateAndNormalizeQuestion(q, classNum, subject, effectiveDateStr, idx)
  );

  return validatedQuestions;
}

module.exports = {
  GEMINI_MODEL,
  generateQuizForClass,
  validateAndNormalizeQuestion
};
