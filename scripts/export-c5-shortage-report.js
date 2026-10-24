const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'audit-class-5-strict-shortage.json'), 'utf8'));

let md = `# STRICT AUDIT REPORT: CLASS 5 NCERT SOLUTIONS QUESTION SHORTAGE
**Target Academic Session:** 2026–27 (CBSE / NCERT Curriculum Aligned with NEP 2020 & NCF-SE 2023)  
**Reference Standard:** Official NCERT Physical Textbooks & Tiwari Academy Complete Solutions  
**Document Classification:** Definitive Pedagogical Shortage & Inventory Ledger  
**Date of Audit:** October 24, 2026  

---

## 1. EXECUTIVE SUMMARY: THE UNVARNISHED REALITY

> [!WARNING]
> ### AUDIT FINDING: TRUE COVERAGE IS 24.0% — NOT 100%
> While OlympiadQuiz.org has **100% Chapter Breadth** (all 107 official chapters exist across all 8 textbooks), the website currently operates on a **Base Curated Subset Model** (averaging 3 to 6 authentic textbook questions + 1 CBQ per chapter, supplemented by generic algorithmic templates).  
> Against the literal complete inventory of exercises, in-text activities, fill-in-the-blanks, math drills, word grids, and grammar exercises in the official NCERT printed textbooks and Tiwari Academy:
> - **Total Actual Questions in NCERT Textbooks:** **2,476 Questions**
> - **Base Authentic Questions Currently in Dataset:** **594 Questions** (+ 107 Case Studies = 701 items)
> - **Actual Question Shortage (Deficit):** **-1,882 Questions**
> - **True Question Coverage:** **24.0%**

\`\`\`
=======================================================================================================
                         MACRO AUDIT LEDGER: ALL 8 TEXTBOOKS (CLASS 5)
=======================================================================================================
 Subject             Book Title              Track      Chs   Actual NCERT   On Site (Qs+CBQ)   Shortage   Coverage %
-------------------------------------------------------------------------------------------------------
`;

let grandActual = 0, grandQs = 0, grandCBQs = 0, grandItems = 0, grandShortage = 0, grandChs = 0;

data.forEach(b => {
  grandChs += b.totalChapters;
  grandActual += b.actualNCERT;
  grandQs += b.currentQs;
  grandCBQs += b.currentCBQs;
  grandItems += b.currentItems;
  grandShortage += b.shortage;
  const line = ` ${b.subject.padEnd(19)} ${b.book.padEnd(23)} ${b.track.padEnd(10)} ${String(b.totalChapters).padStart(3)}   ${String(b.actualNCERT).padStart(12)}   ${String(b.currentQs + ' + ' + b.currentCBQs).padStart(16)}   ${String('-' + b.shortage).padStart(8)}   ${b.coveragePct.padStart(10)}`;
  md += line + '\n';
});

const grandCoverage = ((grandQs / grandActual) * 100).toFixed(1) + '%';
md += `-------------------------------------------------------------------------------------------------------
 GRAND TOTALS        8 Official Textbooks    Dual Track ${String(grandChs).padStart(3)}   ${String(grandActual).padStart(12)}   ${String(grandQs + ' + ' + grandCBQs + ' = ' + grandItems).padStart(16)}   ${String('-' + grandShortage).padStart(8)}   ${grandCoverage.padStart(10)}
=======================================================================================================
\`\`\`

---

## 2. CHAPTER-BY-CHAPTER DETAILED DEFICIT LEDGER (ALL 107 CHAPTERS)

`;

data.forEach(b => {
  md += `### ${b.subject} — ${b.book} (${b.track})
*Total Chapters: ${b.totalChapters} | Actual NCERT Questions: ${b.actualNCERT} | Base Authentic Qs: ${b.currentQs} (+${b.currentCBQs} CBQ) | Shortage: -${b.shortage} Qs (${b.coveragePct} Coverage)*

| Ch # | Chapter Title | Actual NCERT Qs | On Site Base Qs | Shortage (Gap) | Coverage % | Actual Missing Textbook Exercises & In-Text Tasks |
| :---: | :--- | :---: | :---: | :---: | :---: | :--- |
`;

  b.chapters.forEach(ch => {
    md += `| **${ch.num}** | ${ch.title} | ${ch.actualNCERT} | ${ch.currentBaseQs} + 1 CBQ | **-${ch.shortage}** | ${ch.coveragePct} | ${ch.sections} |\n`;
  });

  md += '\n---\n\n';
});

md += `## 3. WHY THE DEFICIT EXISTS & WHAT IS CURRENTLY MISSING

### 1. Mathematics Shortage (-545 Questions across 29 Chapters)
- **Maths Mela (-268 Qs):** The physical textbook contains hands-on grid games, angle protractor tasks, fraction strips, common multiple rings, factor trees of 60/75, India Gate scale conversion calculations, 3D cube nets, decimal money in paise, and area tiling problems. The current dataset had only 4–5 base questions per chapter.
- **Math-Magic (-277 Qs):** Chapters like *The Fish Tale* (28 Qs), *Parts and Wholes* (30 Qs), *Ways to Multiply and Divide* (30 Qs), and *Tenths and Hundredths* (28 Qs) have extensive calculations (log boat speeds, Meenkar Bank loans, Rani's chocolate fractions, Bela's multiplication methods, and frog jump lengths) that were not fully represented.

### 2. English Shortage (-316 Questions across 20 Chapters)
- **Santoor (-115 Qs):** Missing sections include oral conversation prompts (*Let us speak*), picture decoding tasks, phonics drills, and writing assignments across Chapters 1 to 10.
- **Marigold (-201 Qs):** Each unit combines a poem and a prose story. Full NCERT exercises feature *Reading is Fun* (4-6 Qs), *Talk Time* (3-4 Qs), *Word Building* (4-5 Qs), *Let's Write* (3-4 Qs), and language study (*Avial recipe*, *Robin Crusoe footprint*, *Bhaiya vs Munna timetable*, *Rip Van Winkle 20-year sleep*). The current dataset had only 5–6 base questions per unit.

### 3. Hindi Shortage (-441 Questions across 26 Chapters)
- **Veena (-168 Qs):** Contains *कविता से*, *बातचीत के लिए*, *तुम्हारी बात*, *भाषा की बात (मुहावरे, पर्यायवाची, विलोम)*, and *रचनात्मक लेखन*. Only 6 base questions per chapter were stored.
- **Rimjhim (-273 Qs):** Classic chapters like *राख की रस्सी*, *फसलों के त्योहार*, *नन्हा फ़नकार*, *जहाँ चाह वहाँ राह*, and *चावल की रोटियाँ* contain extensive dialogue role-plays, folk craft questions, and grammar sections (*तिब्बत की वेशभूषा, कसीदाकारी, डाक टिकट संग्रह, एकांकी नाटक*). The dataset had only 2–3 questions per chapter.

### 4. EVS / The World Around Us Shortage (-580 Questions across 32 Chapters)
- **Our Wondrous World (-160 Qs):** Environmental inquiry tasks such as school eco-garden audits, home water leak calculations, local river pollution surveys, traditional handloom weaving traditions, and seasonal calendars were missing.
- **Looking Around (-420 Qs):** Heavy with authentic textbook exercises (*Super Senses ant scent trails, Kalbeliyas snake venom, Beaumont stomach experiments, Mamidi Tandra mango papad steps, Ghadsisar lake history, Malaria blood test reading, Bachendri Pal Everest ascent, Golconda Fort water wheels, Sunita Williams space hair, Bhuj earthquake safety, Suryamani Kuduk Torang center*).

---

## 4. ACTIONABLE ROADMAP TO ACHIEVE GENUINE 100% INVENTORY

\`\`\`mermaid
graph TD
    Current["Current Base State: 594 Authentic Qs + 107 CBQs (24.0% True Coverage)"]
    Shortage["Identified Deficit: -1,882 Missing Authentic Textbook Questions"]
    Enrich["Systematic Enrichment: Ingest 100% Actual Textbook Exercises (20-30 Qs per chapter)"]
    Rebuild["Rebuild all 107 Modular Chapter Files & 4 Subject Hubs"]
    Final["True 100% Coverage Verified (2,476+ Authentic Solutions)"]
    Current --> Shortage --> Enrich --> Rebuild --> Final
\`\`\`
`;

fs.writeFileSync(path.join(__dirname, '..', 'reports', 'class-5-independent-ncert-coverage-audit.md'), md, 'utf8');
console.log("✅ Successfully exported reports/class-5-independent-ncert-coverage-audit.md!");
