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

  const SYLLABUS_BY_CLASS = {
    1: {
      maths: ["Number Sense & Counting up to 100", "Addition & Subtraction (1-2 digits)", "Shapes & Space", "Measurement", "Time & Money", "Patterns"],
      science: ["Living & Non-Living Things", "Plants Around Us", "Animals Around Us", "Human Body & Senses", "Good Habits & Safety", "Air, Water & Weather"],
      english: ["Nouns & Common Words", "Pronouns (I, You, He, She, It)", "Action Words (Verbs)", "Articles (A, An)", "Opposites & Rhyming Words", "Simple Prepositions"],
      reasoning: ["Patterns & Sequences", "Odd One Out", "Measuring Units", "Geometrical Shapes", "Spatial Understanding", "Grouping of Figures"]
    },
    2: {
      maths: ["Numbers up to 1000", "Addition & Subtraction with Regrouping", "Multiplication basics", "Fractions Introduction", "Money & Measurement", "Time & Calendar"],
      science: ["Types of Plants & Uses", "Animal Habitats & Eating Habits", "Bones & Muscles", "Food & Health", "Housing & Clothing", "Sun, Moon & Stars"],
      english: ["Singular & Plural Nouns", "Possessives", "Adjectives", "Helping Verbs", "Punctuation & Capitalization", "Compound Words & Homophones"],
      reasoning: ["Number Patterns", "Analogy & Classification", "Alphabet Test", "Coding-Decoding (Simple)", "Mirror Images", "Embedded Figures"]
    },
    3: {
      maths: ["4-Digit Numbers & Place Value", "Arithmetic Operations (+, -, ×, ÷)", "Fractions", "Length, Weight & Capacity", "Time & Calendar", "Geometry & Perimeter"],
      science: ["Plant Parts & Photosynthesis", "Birds & Nests", "Insects & Life Cycles", "Earth & Solar System", "Matter: Solids, Liquids & Gases", "Pollution & Environment"],
      english: ["Noun Types (Common, Proper, Collective, Abstract)", "Pronouns", "Tenses", "Adverbs", "Prepositions & Conjunctions", "Idioms & Vocabulary"],
      reasoning: ["Analogy & Classification", "Series Completion", "Ranking & Ordering", "Blood Relations (Basics)", "Direction Sense", "Logical Deduction"]
    },
    4: {
      maths: ["5-Digit & 6-Digit Numbers", "Factors & Multiples (HCF/LCM)", "Fractions & Decimals", "Perimeter & Area", "Angles & Lines", "Data Handling"],
      science: ["Plant & Animal Adaptations", "Life Cycles & Reproduction", "Digestive & Excretory Systems", "Force, Work & Simple Machines", "States of Matter", "Soil Types"],
      english: ["Subject-Verb Agreement", "Transitive/Intransitive Verbs", "Modal Auxiliaries", "Comparative/Superlative Adjectives", "Relative Pronouns", "Vocabulary & Idioms"],
      reasoning: ["Coding-Decoding", "Mathematical Operations", "Number Matrix", "Direction Sense", "Venn Diagrams", "Paper Folding & Cutting"]
    },
    5: {
      maths: ["Large Numbers & Roman Numerals", "Operations on Large Numbers", "Factors, Primes, LCM & HCF", "Fraction Operations & Decimals", "Percentage & Profit/Loss", "Geometry & Angles"],
      science: ["Circulatory, Nervous & Skeletal Systems", "Germs, Diseases & Immunity", "Plant Reproduction & Seeds", "Natural Disasters", "Atmosphere", "Light & Shadows"],
      english: ["Complex Tenses", "Active & Passive Voice", "Direct & Indirect Speech", "Correlative Conjunctions", "Conditionals (If-clauses)", "Advanced Vocabulary"],
      reasoning: ["Blood Relations & Family Tree", "Seating Arrangement", "Direction & Distance", "Cube & Dice", "Figure Matrix", "Statement & Conclusion"]
    },
    6: {
      maths: ["Knowing Our Numbers & Integers", "Divisibility & Primes", "Basic Geometry & Polygons", "Fractions & Decimals", "Algebraic Expressions", "Ratio, Proportion & Unitary Method", "Mensuration"],
      science: ["Food Components & Nutrients", "Separation of Substances", "Plants: Structure & Functions", "Body Movements & Joints", "Motion & Measurement", "Light & Electricity"],
      english: ["Clauses & Phrases", "Gerunds & Infinitives", "Modal Verbs", "Tenses Mastery", "Reported Speech", "Phrasal Verbs & Advanced Idioms"],
      reasoning: ["Analytical Reasoning & Grids", "Mathematical Operations", "Clock & Calendar", "Blood Relations", "Venn Diagrams & Syllogisms", "Non-Verbal Series"]
    },
    7: {
      maths: ["Integers & Properties", "Fractions, Decimals & Rational Numbers", "Simple Equations", "Lines, Angles & Triangles", "Comparing Quantities (Percentage, SI, Profit/Loss)", "Exponents & Powers", "Perimeter & Area"],
      science: ["Nutrition in Plants & Animals", "Heat & Heat Transfer", "Acids, Bases & Salts", "Physical & Chemical Changes", "Respiration in Organisms", "Motion & Time", "Electric Current & Magnets"],
      english: ["Complex Sentences", "Active & Passive Transformations", "Direct/Indirect Speech", "Preposition Collocations", "Sentence Correction", "Advanced Vocabulary"],
      reasoning: ["Coded Inequalities", "Sequential Puzzles", "Coded Blood Relations", "Direction Sense with Angles", "Cause & Effect", "Non-Verbal Transformations"]
    },
    8: {
      maths: ["Rational Numbers", "Linear Equations in One Variable", "Understanding Quadrilaterals", "Square & Cube Roots", "Comparing Quantities (Compound Interest)", "Algebraic Expressions & Identities", "Mensuration & Volume", "Exponents"],
      science: ["Microorganisms", "Coal & Petroleum", "Conservation of Plants & Animals", "Reproduction & Endocrine System", "Force, Pressure & Friction", "Sound (Frequency, Pitch)", "Light (Reflection, Refraction)"],
      english: ["Subject-Verb Concord", "Verbals (Participles, Gerunds)", "Complex Speech", "Sentence Transformation", "Determiners & Quantifiers", "Etymology & Advanced Idioms"],
      reasoning: ["Advanced Coding-Decoding", "Floor & Parameter Puzzles", "Syllogisms", "Input-Output Steps", "Data Sufficiency", "Cube Folding"]
    },
    9: {
      maths: ["Number Systems & Real Numbers", "Polynomials & Remainder Theorem", "Coordinate Geometry & Linear Equations", "Lines, Angles & Triangles", "Quadrilaterals & Circles", "Heron's Formula & Surface Areas", "Probability"],
      science: ["Matter in Our Surroundings", "Atoms & Molecules", "Cell Organelles", "Tissues", "Motion (Equations & Graphs)", "Newton's Laws of Motion", "Gravitation & Floatation", "Work, Energy & Power"],
      english: ["Advanced Grammar & Error Spotting", "Parallelism", "Conditionals & Subjunctive", "Nuanced Vocabulary", "Tone & Register", "Connectors & Discourse Markers"],
      reasoning: ["Critical Reasoning", "Matrix & Circular Arrangements", "Mathematical Inequalities", "Venn Logic", "Cube Painting & Cuts", "Spatial Visualisation"]
    },
    10: {
      maths: ["Real Numbers", "Polynomials", "Pair of Linear Equations", "Quadratic Equations", "Arithmetic Progressions (AP)", "Triangles & Similarity", "Coordinate Geometry", "Trigonometry", "Circles & Tangents", "Surface Areas & Volumes", "Statistics & Probability"],
      science: ["Chemical Reactions & Equations", "Acids, Bases & Salts", "Metals & Non-metals", "Carbon Compounds", "Life Processes", "Control & Coordination", "Reproduction & Heredity", "Light (Reflection & Refraction)", "Electricity (Ohm's Law)", "Magnetic Effects"],
      english: ["Advanced Syntax Transformation", "Phrasal Verbs & Idioms", "Grammatical Concord", "Complex Punctuation", "Lexical Precision", "High-Level Verbal Aptitude"],
      reasoning: ["Logical Deduction & Truth-Tellers", "Advanced Seating & Scheduling", "Cause & Effect", "Decision Making", "Complex Directions", "Non-Verbal Grouping"]
    }
  };

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

  const GEMINI_MODELS = ["gemini-3.8-flash", "gemini-2.5-flash", "gemini-1.5-flash"];

  /**
   * Call Gemini Flash API with structured JSON output and automatic fallback
   */
  async function callGeminiRaw({ apiKey, prompt }) {
    let lastError = null;
    for (const model of GEMINI_MODELS) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.35,
              topP: 0.95,
              responseMimeType: "application/json"
            }
          })
        });

        if (!res.ok) {
          const errText = await res.text();
          if (res.status === 404) {
            console.warn(`Model ${model} returned 404, falling back to next model...`);
            lastError = new Error(`Gemini HTTP 404 (${model}): ${errText}`);
            continue;
          }
          throw new Error(`Gemini HTTP ${res.status}: ${errText}`);
        }

        const json = await res.json();
        const rawText = json?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawText) throw new Error("Gemini returned empty response.");

        let cleaned = rawText.trim();
        if (cleaned.startsWith("```json")) cleaned = cleaned.replace(/^```json\s*/, "").replace(/\s*```$/, "");
        else if (cleaned.startsWith("```")) cleaned = cleaned.replace(/^```\s*/, "").replace(/\s*```$/, "");

        const parsed = JSON.parse(cleaned);
        if (!Array.isArray(parsed)) throw new Error("Response is not a JSON array.");
        return parsed;
      } catch (err) {
        if (err.message && err.message.includes("404")) {
          lastError = err;
          continue;
        }
        throw err;
      }
    }
    throw lastError || new Error("All Gemini model endpoints failed.");
  }

  function normalizeQuestion(item, classNum, subject, dateCompact, idx, isAchiever = false) {
    const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";
    const subMeta = SUBJECT_DETAILS[subject] || { codePrefix: "Q" };
    const padIdx = String(idx + 1).padStart(3, "0");
    const typeTag = isAchiever ? "ultra" : "std";
    const fallbackId = `c${classNum}_${subShort}_${typeTag}_${padIdx}`;
    const id = (item.id && typeof item.id === "string" && !item.id.includes("/")) ? item.id : fallbackId;
    const q = String(item.q || item.question || "").trim();
    if (!q) throw new Error(`Question ${idx + 1} has empty text.`);

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

    return {
      id,
      class: "class" + classNum,
      subject,
      q,
      image_name: "",
      image_description: "",
      o,
      a,
      topic: String(item.topic || `${subMeta.codePrefix}01`).toUpperCase(),
      hint: String(item.hint || "").trim(),
      sol: String(item.sol || item.solution || `Correct option is: ${o[a]}`).trim(),
      sub_type: "SCQ",
      isAchiever: !!isAchiever
    };
  }

  /**
   * Generate 40 Regular Questions (1 mark each, 12-30 words, concise, standard Olympiad level)
   */
  async function generateRegularPart({ apiKey, classNum, subject, count = 40, dateCompact }) {
    const subMeta = SUBJECT_DETAILS[subject] || { name: subject, olympiad: "Olympiad", codePrefix: "Q" };
    const topics = (SYLLABUS_BY_CLASS[classNum] && SYLLABUS_BY_CLASS[classNum][subject]) || ["General Curriculum"];
    const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";

    const prompt = `You are the Head Chief Examiner for the ${subMeta.olympiad} Official Live Championship.
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

    const raw = await callGeminiRaw({ apiKey, prompt });
    return raw.slice(0, count).map((item, idx) => normalizeQuestion(item, classNum, subject, dateCompact, idx, false));
  }

  /**
   * Generate 10 Achievers Section Questions (2 marks each, 25-55 words, challenging HOTS)
   */
  async function generateAchieverPart({ apiKey, classNum, subject, count = 10, dateCompact }) {
    const subMeta = SUBJECT_DETAILS[subject] || { name: subject, olympiad: "Olympiad", codePrefix: "Q" };
    const topics = (SYLLABUS_BY_CLASS[classNum] && SYLLABUS_BY_CLASS[classNum][subject]) || ["General Curriculum"];
    const subShort = subject === "maths" ? "m" : subject === "science" ? "s" : subject === "english" ? "eng" : "rea";

    const prompt = `You are the Head Chief Examiner for the ${subMeta.olympiad} Official Live Championship.
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

    const raw = await callGeminiRaw({ apiKey, prompt });
    return raw.slice(0, count).map((item, idx) => normalizeQuestion(item, classNum, subject, dateCompact, idx, true));
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
          const err = await res.json();
          lastErrText = err?.error?.message || ("HTTP " + res.status);
          if (res.status === 404) continue;
          throw new Error(lastErrText);
        }
      }
      if (!passed) throw new Error(lastErrText || "Model unavailable.");
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

  window.qaSelectAllClasses = function (select) {
    document.querySelectorAll(".qa-class-chk").forEach(chk => chk.checked = select);
  };

  window.initQuizAgentPanel = async function () {
    const keyInput = document.getElementById("qaApiKey");
    const dateInput = document.getElementById("qaDate");

    try { localStorage.removeItem("admin_gemini_api_key"); } catch (e) {}

    // Pre-fill target Sunday date (e.g. Coming Sunday 11:00 AM)
    if (dateInput && !dateInput.value) {
      dateInput.value = getNextSundayDateStr();
    }

    // Fetch key and rotation exclusively from Firestore
    try {
      if (window.firebaseGetDoc && window.firebaseDoc && window.firebaseDb) {
        const keySnap = await window.firebaseGetDoc(window.firebaseDoc(window.firebaseDb, "system_settings", "ai_keys"));
        if (keySnap.exists()) {
          const keyData = keySnap.data();
          if (keyData.geminiApiKey && keyInput) {
            keyInput.value = keyData.geminiApiKey;
            appendLog("Gemini API key loaded from Firebase.", "info");
          }
        }

        const snap = await window.firebaseGetDoc(window.firebaseDoc(window.firebaseDb, "system_settings", "live_quiz_rotation"));
        if (snap.exists()) {
          const data = snap.data();
          const nextSub = data.nextSubject || getNextSubject(data.lastSubject);
          const badge = document.getElementById("qaRotationBadge");
          const subjectSelect = document.getElementById("qaSubject");
          if (badge) {
            badge.innerText = `Turn: ${SUBJECT_DETAILS[nextSub]?.name || nextSub.toUpperCase()}`;
          }
          if (subjectSelect) {
            subjectSelect.value = nextSub;
          }
        }
      }
    } catch (e) {
      console.warn("Could not load settings from Firebase:", e);
    }
  };

  window.qaStartGeneration = async function (autoPublish = false) {
    let apiKey = (document.getElementById("qaApiKey").value || "").trim();
    if (!apiKey) {
      try {
        if (window.firebaseGetDoc && window.firebaseDoc && window.firebaseDb) {
          const keySnap = await window.firebaseGetDoc(window.firebaseDoc(window.firebaseDb, "system_settings", "ai_keys"));
          if (keySnap.exists() && keySnap.data().geminiApiKey) {
            apiKey = keySnap.data().geminiApiKey.trim();
            document.getElementById("qaApiKey").value = apiKey;
          }
        }
      } catch (e) {}
    }

    if (!apiKey) {
      alert("Please enter and save your Gemini API Key in Firebase first.");
      document.getElementById("qaApiKey").focus();
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
    appendLog(`Format: 40 Regular (1 Mark) + 10 Achievers HOTS (2 Marks) = 50 Qs (60 Marks total)`, "info");

    let successCount = 0;
    for (let i = 0; i < selectedClasses.length; i++) {
      const clsNum = selectedClasses[i];
      const baseProgress = Math.round((i / selectedClasses.length) * 100);
      setProgress(baseProgress, `Generating Class ${clsNum}: 40 Regular Questions...`);
      appendLog(`[${i + 1}/${selectedClasses.length}] Class ${clsNum}: Generating 40 Regular Questions (1 mark, 12-30 words)...`, "info");

      try {
        // Step 1: 40 Regular questions
        const regularQuestions = await generateRegularPart({
          apiKey,
          classNum: clsNum,
          subject,
          count: 40,
          dateCompact
        });
        appendLog(`   ✓ Class ${clsNum}: 40 Regular questions verified.`, "success");

        // Pause 1.5s
        await new Promise(r => setTimeout(r, 1500));

        // Step 2: 10 Achiever questions
        setProgress(baseProgress + 5, `Generating Class ${clsNum}: 10 Achiever Questions (HOTS)...`);
        appendLog(`[${i + 1}/${selectedClasses.length}] Class ${clsNum}: Generating 10 Achievers Questions (2 marks, 25-55 words HOTS)...`, "info");
        const achieverQuestions = await generateAchieverPart({
          apiKey,
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

      html += `
        <div style="margin-bottom: 15px; border: 1px solid var(--border); border-radius: 10px; overflow: hidden; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(135deg, rgba(79,70,229,0.08), rgba(139,92,246,0.08)); padding: 12px 16px; font-weight: 700; display: flex; justify-content: space-between; align-items: center; cursor: pointer;"
               onclick="document.getElementById('qap_cls_${cd.classNum}').classList.toggle('active');">
            <div>
              <span style="font-size: 15px; color: #1e293b;">📚 Class ${cd.classNum} — ${SUBJECT_DETAILS[cd.subject]?.olympiad || cd.subject}</span>
              <span style="margin-left: 10px; font-size: 12px; background: #e0e7ff; color: #4338ca; padding: 2px 8px; border-radius: 10px;">${cd.regularQuestions.length} Regular (1M)</span>
              <span style="margin-left: 5px; font-size: 12px; background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 10px;">${cd.achieverQuestions.length} Achievers (2M)</span>
            </div>
            <span style="font-size: 12px; color: var(--brand);">Toggle View ▼</span>
          </div>

          <div id="qap_cls_${cd.classNum}" style="display: none; padding: 15px; max-height: 400px; overflow-y: auto;">
            <!-- Regular Section Header -->
            <div style="background: #f1f5f9; padding: 8px 12px; border-radius: 6px; font-weight: 700; color: #334155; margin-bottom: 10px; font-size: 13px;">
              📘 Section 1: Regular Questions (40 Questions • 1 Mark Each)
            </div>
            ${cd.regularQuestions.map((q, idx) => `
              <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 8px; font-size: 13px;">
                <div><b>Q${idx + 1} (${q.id}):</b> ${q.q} <span style="font-size: 11px; color: #64748b;">[${q.q.split(/\s+/).length} words]</span></div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin: 6px 0;">
                  ${q.o.map((opt, oIdx) => `
                    <div style="padding: 4px 8px; border-radius: 4px; ${oIdx === q.a ? 'background: #dcfce7; border: 1px solid #16a34a; font-weight:600;' : 'background: #f8fafc; border: 1px solid #e2e8f0;'}">
                      ${String.fromCharCode(65 + oIdx)}. ${opt} ${oIdx === q.a ? '✓' : ''}
                    </div>
                  `).join("")}
                </div>
                <div style="color: #475569; font-size: 12px;"><b>Hint:</b> ${q.hint || 'None'} | <b>Sol:</b> ${q.sol}</div>
              </div>
            `).join("")}

            <!-- Achievers Section Header -->
            <div style="background: #fef3c7; border: 1px solid #fde68a; padding: 8px 12px; border-radius: 6px; font-weight: 700; color: #92400e; margin: 15px 0 10px; font-size: 13px;">
              🏆 Section 2: Achievers Section / HOTS (10 Questions • 2 Marks Each)
            </div>
            ${cd.achieverQuestions.map((q, idx) => `
              <div style="border-bottom: 1px solid #fed7aa; padding-bottom: 8px; margin-bottom: 8px; font-size: 13px; background: #fffbeb; padding: 8px; border-radius: 6px;">
                <div><b>Q${idx + 41} (${q.id}):</b> ${q.q} <span style="font-size: 11px; color: #b45309; font-weight:700;">[HOTS • ${q.q.split(/\s+/).length} words]</span></div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin: 6px 0;">
                  ${q.o.map((opt, oIdx) => `
                    <div style="padding: 4px 8px; border-radius: 4px; ${oIdx === q.a ? 'background: #dcfce7; border: 1px solid #16a34a; font-weight:600;' : 'background: #ffffff; border: 1px solid #fcd34d;'}">
                      ${String.fromCharCode(65 + oIdx)}. ${opt} ${oIdx === q.a ? '✓' : ''}
                    </div>
                  `).join("")}
                </div>
                <div style="color: #78350f; font-size: 12px;"><b>Hint:</b> ${q.hint || 'None'} | <b>Sol:</b> ${q.sol}</div>
              </div>
            `).join("")}
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
