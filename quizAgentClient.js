/**
 * AI Live Quiz Agent Client (Gemini Flash Free Tier)
 * Modular client-side controller for Admin Panel (admin.html)
 */

(function () {
  const ROTATION_CYCLE = ["maths", "science", "english", "reasoning"];

  const SUBJECT_DETAILS = {
    maths: { name: "Mathematics (IMO)", olympiad: "International Mathematics Olympiad", codePrefix: "M" },
    science: { name: "Science (NSO)", olympiad: "National Science Olympiad", codePrefix: "SCI" },
    english: { name: "English (IEO)", olympiad: "International English Olympiad", codePrefix: "ENG" },
    reasoning: { name: "Logical Reasoning", olympiad: "Reasoning & Mental Ability Olympiad", codePrefix: "LR" }
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

  let generatedDataStore = []; // Array of { classNum, subject, questions }

  /**
   * Calculate next upcoming Monday in YYYY-MM-DD format
   */
  function getNextMondayDateStr() {
    const d = new Date();
    const day = d.getDay(); // 0 is Sunday, 1 is Monday
    let daysUntilMonday = (1 - day + 7) % 7;
    if (daysUntilMonday === 0) {
      // If today is Monday, target today
      daysUntilMonday = 0;
    }
    const target = new Date(d);
    target.setDate(d.getDate() + daysUntilMonday);
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

  /**
   * Gemini API call with strict schema validation
   */
  async function callGeminiForClass({ apiKey, classNum, subject, count, dateCompact }) {
    const subMeta = SUBJECT_DETAILS[subject] || { name: subject, olympiad: "Olympiad", codePrefix: "Q" };
    const topics = (SYLLABUS_BY_CLASS[classNum] && SYLLABUS_BY_CLASS[classNum][subject]) || ["General Curriculum"];

    const prompt = `You are an elite, expert Olympiad exam creator for ${subMeta.olympiad} (${subMeta.name}).
Generate exactly ${count} original, high-quality, concept-testing multiple-choice questions for Class ${classNum} students.

Curriculum/Topic focus for this week:
${topics.map((t, idx) => `Topic ${subMeta.codePrefix}0${idx + 1}: ${t}`).join("\n")}

STRICT GUIDELINES:
1. Appropriateness: Tailored accurately to cognitive level of Class ${classNum}.
2. Quality: Test conceptual clarity and logical thinking. Avoid overly trivial questions.
3. Options: Exactly 4 options ('o') per question. Only ONE option must be clearly correct. Options must be distinct, unambiguous, and plausible.
4. Correct Answer: 'a' must be the 0-indexed number of the correct option (0, 1, 2, or 3).
5. Math / Formula formatting: Use clear standard Unicode (e.g. cm², 1/2, ×, ÷, ², √) rather than raw broken LaTeX.
6. Schema: Every item MUST strictly follow this exact JSON schema:
[
  {
    "id": "c${classNum}_${subject}_live_${dateCompact}_001",
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
    "topic": "${subMeta.codePrefix}01",
    "hint": "Brief pedagogical clue to help a stuck student",
    "sol": "Step-by-step logical explanation and reasoning",
    "sub_type": "SCQ"
  }
]

Return ONLY the raw JSON array containing the ${count} question objects. No markdown codeblocks, no commentary.`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,
          responseMimeType: "application/json"
        }
      })
    });

    if (!res.ok) {
      const errText = await res.text();
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

    // Normalize and validate
    return parsed.map((item, idx) => {
      const padIdx = String(idx + 1).padStart(3, "0");
      const fallbackId = `c${classNum}_${subject}_live_${dateCompact}_${padIdx}`;
      const id = (item.id && typeof item.id === "string" && !item.id.includes("/")) ? item.id : fallbackId;
      const q = String(item.q || item.question || "").trim();
      if (!q) throw new Error(`Question ${idx + 1} has empty question text.`);

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
        sub_type: "SCQ"
      };
    });
  }

  // --- PUBLIC CONTROLLER EXPORTS ---

  window.qaSaveApiKey = async function () {
    const input = document.getElementById("qaApiKey");
    const key = (input.value || "").trim();
    if (!key) {
      alert("Please enter a valid Gemini API Key.");
      return;
    }
    localStorage.setItem("admin_gemini_api_key", key);

    // Save to Firestore system_settings/ai_keys for Cloud Functions as well
    try {
      if (window.firebaseSetDoc && window.firebaseDoc && window.firebaseDb) {
        await window.firebaseSetDoc(window.firebaseDoc(window.firebaseDb, "system_settings", "ai_keys"), {
          geminiApiKey: key,
          updatedAt: window.firebaseServerTimestamp()
        }, { merge: true });
      }
      alert("✅ Gemini API Key saved locally and in Firestore!");
    } catch (e) {
      alert("✅ API Key saved locally (Firestore sync skipped: " + e.message + ")");
    }
  };

  window.qaSelectAllClasses = function (select) {
    document.querySelectorAll(".qa-class-chk").forEach(chk => chk.checked = select);
  };

  window.initQuizAgentPanel = async function () {
    const keyInput = document.getElementById("qaApiKey");
    const dateInput = document.getElementById("qaDate");
    const savedKey = localStorage.getItem("admin_gemini_api_key");
    if (savedKey && keyInput && !keyInput.value) {
      keyInput.value = savedKey;
    }

    if (dateInput && !dateInput.value) {
      dateInput.value = getNextMondayDateStr();
    }

    // Read current rotation from Firestore
    try {
      if (window.firebaseGetDoc && window.firebaseDoc && window.firebaseDb) {
        const snap = await window.firebaseGetDoc(window.firebaseDoc(window.firebaseDb, "system_settings", "live_quiz_rotation"));
        if (snap.exists()) {
          const data = snap.data();
          const nextSub = data.nextSubject || getNextSubject(data.lastSubject);
          const badge = document.getElementById("qaRotationBadge");
          const subjectSelect = document.getElementById("qaSubject");
          if (badge) {
            badge.innerText = `Turn this week: ${SUBJECT_DETAILS[nextSub]?.name || nextSub.toUpperCase()}`;
          }
          if (subjectSelect) {
            subjectSelect.value = nextSub;
          }
        }
      }
    } catch (e) {
      console.warn("Could not load rotation status:", e);
    }
  };

  window.qaStartGeneration = async function (autoPublish = false) {
    const apiKey = (document.getElementById("qaApiKey").value || "").trim();
    if (!apiKey) {
      alert("Please provide a Gemini API Key first.");
      document.getElementById("qaApiKey").focus();
      return;
    }

    const subject = document.getElementById("qaSubject").value;
    const dateStr = document.getElementById("qaDate").value;
    const timeStr = document.getElementById("qaTime").value || "18:00";
    const duration = parseInt(document.getElementById("qaDuration").value, 10) || 40;
    const count = parseInt(document.getElementById("qaCount").value, 10) || 15;
    const price = parseInt(document.getElementById("qaPrice").value, 10) || 0;

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

    const dateCompact = dateStr.replace(/-/g, "");
    appendLog(`Starting generation for ${selectedClasses.length} classes [${selectedClasses.join(", ")}]...`, "info");
    appendLog(`Subject: ${SUBJECT_DETAILS[subject]?.name || subject} | Questions/Class: ${count} | Target Date: ${dateStr}`, "info");

    let successCount = 0;
    for (let i = 0; i < selectedClasses.length; i++) {
      const clsNum = selectedClasses[i];
      const percent = Math.round(((i) / selectedClasses.length) * 100);
      setProgress(percent, `Generating Class ${clsNum} (${i + 1}/${selectedClasses.length})...`);
      appendLog(`[${i + 1}/${selectedClasses.length}] Contacting Gemini Flash for Class ${clsNum}...`, "info");

      try {
        const questions = await callGeminiForClass({
          apiKey,
          classNum: clsNum,
          subject,
          count,
          dateCompact
        });

        generatedDataStore.push({
          classNum: clsNum,
          subject,
          questions
        });

        appendLog(`✅ Class ${clsNum}: Verified ${questions.length} questions matching schema!`, "success");
        successCount++;

        // Free tier rate pacing: wait 2 seconds between classes
        if (i < selectedClasses.length - 1) {
          appendLog(`Pacing API calls (2s delay for free tier quota)...`, "info");
          await new Promise(r => setTimeout(r, 2000));
        }
      } catch (err) {
        appendLog(`❌ Class ${clsNum} Failed: ${err.message}`, "error");
      }
    }

    setProgress(100, `Done! ${successCount}/${selectedClasses.length} classes generated.`);
    appendLog(`🎉 Generation completed: ${successCount} classes ready.`, "success");

    genBtn.disabled = false;
    autoBtn.disabled = false;

    // Render Preview
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

    let totalQ = 0;
    let html = "";
    generatedDataStore.forEach(cd => {
      totalQ += cd.questions.length;
      html += `
        <div style="margin-bottom: 12px; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; background: #fff;">
          <div style="background: rgba(79,70,229,0.06); padding: 10px 14px; font-weight: 700; display: flex; justify-content: space-between; align-items: center; cursor: pointer;"
               onclick="document.getElementById('qap_cls_${cd.classNum}').classList.toggle('active');">
            <span>📚 Class ${cd.classNum} — ${SUBJECT_DETAILS[cd.subject]?.name || cd.subject} (${cd.questions.length} Questions)</span>
            <span style="font-size: 12px; color: var(--brand);">Toggle View ▼</span>
          </div>
          <div id="qap_cls_${cd.classNum}" style="display: none; padding: 12px; max-height: 350px; overflow-y: auto;">
            ${cd.questions.map((q, idx) => `
              <div style="border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-bottom: 8px; font-size: 13px;">
                <div><b>Q${idx + 1} (${q.id}):</b> ${q.q}</div>
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
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
    if (publishBtn) {
      publishBtn.style.display = "block";
      publishBtn.disabled = false;
      publishBtn.innerText = `🚀 Publish All ${totalQ} Questions & Create ${generatedDataStore.length} Live Sessions`;
    }

    // Toggle helper
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

    const dateStr = document.getElementById("qaDate").value;
    const timeStr = document.getElementById("qaTime").value || "18:00";
    const duration = parseInt(document.getElementById("qaDuration").value, 10) || 40;
    const price = parseInt(document.getElementById("qaPrice").value, 10) || 0;

    try {
      appendLog("Writing questions to Firestore 'questions' collection in batches...", "info");

      // Batch upload questions
      const allQ = [];
      generatedDataStore.forEach(cd => allQ.push(...cd.questions));

      const db = window.firebaseDb;
      const setDoc = window.firebaseSetDoc;
      const doc = window.firebaseDoc;
      const addDoc = window.firebaseAddDoc;
      const collection = window.firebaseCollection;
      const Timestamp = window.firebaseTimestamp;
      const serverTimestamp = window.firebaseServerTimestamp;

      // Upload questions
      for (const q of allQ) {
        await setDoc(doc(db, "questions", q.id), {
          ...q,
          uploadedAt: serverTimestamp()
        }, { merge: true });
      }
      appendLog(`✅ All ${allQ.length} questions written to 'questions' collection!`, "success");

      // Create test_sessions
      const startDateTime = new Date(`${dateStr}T${timeStr}:00`);
      const endDateTime = new Date(startDateTime.getTime() + duration * 60000);
      let sessionCount = 0;
      let currentSubject = "";

      for (const cd of generatedDataStore) {
        currentSubject = cd.subject;
        const title = `Weekly Olympiad Championship - Class ${cd.classNum} ${SUBJECT_DETAILS[cd.subject]?.name || cd.subject}`;

        await addDoc(collection(db, "test_sessions"), {
          title,
          subject: cd.subject.toLowerCase(),
          class: parseInt(cd.classNum, 10),
          startTime: Timestamp.fromDate(startDateTime),
          endTime: Timestamp.fromDate(endDateTime),
          duration: duration,
          price: price,
          priceAfterCoupon: null,
          questionIds: cd.questions.map(q => q.id),
          achieverQuestionIds: [],
          archived: false,
          aiGenerated: true,
          createdAt: serverTimestamp()
        });
        sessionCount++;
      }

      appendLog(`✅ Created ${sessionCount} live sessions in 'test_sessions' collection!`, "success");

      // Update rotation
      const nextSub = getNextSubject(currentSubject);
      await setDoc(doc(db, "system_settings", "live_quiz_rotation"), {
        lastSubject: currentSubject,
        nextSubject: nextSub,
        lastRunDate: dateStr,
        lastRunAt: serverTimestamp(),
        totalQuestionsUploaded: allQ.length,
        sessionsCount: sessionCount
      }, { merge: true });

      appendLog(`✅ Rotation updated. Next turn will be: ${SUBJECT_DETAILS[nextSub]?.name || nextSub.toUpperCase()}`, "success");
      alert(`🎉 Success! ${sessionCount} Live Quiz Sessions with ${allQ.length} questions are now LIVE on olympiadquiz.org/live.html!`);

      // Refresh managed sessions list if function exists
      if (typeof window.loadSessions === "function") {
        window.loadSessions();
      }

      // Re-init panel
      window.initQuizAgentPanel();
    } catch (e) {
      appendLog(`❌ Publishing Failed: ${e.message}`, "error");
      alert("Error publishing: " + e.message);
    } finally {
      if (publishBtn) {
        publishBtn.disabled = false;
        publishBtn.innerText = "🚀 Publish All to Live Arena";
      }
    }
  };
})();
