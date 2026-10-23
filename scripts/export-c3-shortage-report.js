const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'audit-class-3-strict-shortage.json'), 'utf8'));

let md = `# STRICT AUDIT REPORT: CLASS 3 NCERT SOLUTIONS QUESTION SHORTAGE
**Target Academic Session:** 2026–27 (CBSE / NCERT Curriculum Aligned with NEP 2020 & NCF-SE 2023)  
**Reference Standard:** Official NCERT Physical Textbooks & Tiwari Academy Complete Solutions  
**Document Classification:** Definitive Pedagogical Shortage & Inventory Ledger  
**Date of Audit:** October 23, 2026  

---

## 1. EXECUTIVE SUMMARY: THE UNVARNISHED REALITY

> [!WARNING]
> ### AUDIT FINDING: TRUE COVERAGE IS 37.0% — NOT 100%
> While OlympiadQuiz.org has **100% Chapter Breadth** (all 118 official chapters exist across all 8 textbooks), the website currently operates on a **Fixed Curated Subset Model** (6 to 7 exercise questions + 1 CBQ per chapter).  
> Against the literal complete inventory of exercises, in-text activities, fill-in-the-blanks, math puzzles, word grids, and grammar drills in the official NCERT printed textbooks and Tiwari Academy:
> - **Total Actual Questions in NCERT Textbooks:** **2,183 Questions**
> - **Questions Currently Showing on Website:** **808 Questions** (+ 118 Case Studies = 926 items)
> - **Actual Question Shortage (Deficit):** **-1,375 Questions**
> - **True Question Coverage:** **37.0%**

\`\`\`
=======================================================================================================
                         MACRO AUDIT LEDGER: ALL 8 TEXTBOOKS (CLASS 3)
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

## 2. CHAPTER-BY-CHAPTER DETAILED DEFICIT LEDGER (ALL 118 CHAPTERS)

`;

data.forEach(b => {
  md += `### ${b.subject} — ${b.book} (${b.track})
*Total Chapters: ${b.totalChapters} | Actual NCERT Questions: ${b.actualNCERT} | On Site: ${b.currentQs} Qs (${b.currentItems} Items) | Shortage: -${b.shortage} Qs (${b.coveragePct} Coverage)*

| Ch # | Chapter Title | Actual NCERT Qs | On Site (Ex + CBQ) | Shortage (Gap) | Coverage % | Actual Missing Textbook Exercises & In-Text Tasks |
| :---: | :--- | :---: | :---: | :---: | :---: | :--- |
`;

  b.chapters.forEach(ch => {
    md += `| **${ch.num}** | ${ch.title} | ${ch.actualNCERT} | ${ch.publishedQs} + ${ch.cbqCount} | **-${ch.shortage}** | ${ch.coveragePct} | ${ch.sections} |\n`;
  });

  md += '\n---\n\n';
});

md += `## 3. WHY THE DEFICIT EXISTS & WHAT IS CURRENTLY MISSING

### 1. Mathematics Shortage (-486 Questions across 28 Chapters)
- **Maths Mela (-203 Qs):** The physical textbook contains hands-on grid games, skip counting charts (counting by 10s and 50s), bead sequences, shopping bill practice, Tangram piece manipulations, and abacus spike diagrams. The site currently presents 7 comprehensive word problems per chapter, leaving out in-text arithmetic drills, dot-grid worksheets, and mental math practice tables.
- **Math-Magic (-283 Qs):** Classic chapters like *Fun with Numbers* (34 Qs), *Give and Take* (32 Qs), *How Many Times?* (32 Qs), and *Fun with Give and Take* (30 Qs) contain extensive calculation mazes (Kittu’s 100-room house), spider-leg multiplication tables, cricket scorecard tallies, and meter scale measurements. Currently, each chapter hosts only 7 questions.

### 2. English Shortage (-279 Questions across 22 Chapters)
- **Santoor (-151 Qs):** Missing sections include oral conversation prompts (*Let us speak*), picture decoding tasks, phonics drills (rhyming pairs & vowel sounds), origami paper boat instructions, and vocabulary crosswords.
- **Marigold (-128 Qs):** Each unit combines a poem and a prose story. Full NCERT exercises feature *Reading is Fun* (4-5 Qs), *Talk Time* (3-4 Qs), *Word Building* (4-5 Qs), *Let's Write* (3-4 Qs), and *Team Time* scrapbook activities. Currently, each unit only captures 7 questions.

### 3. Hindi Shortage (-272 Questions across 32 Chapters)
- **Veena (-144 Qs):** The new NEP textbook includes *बातचीत के लिए* (oral discussions), *तुम्हारी बात* (personal reflections), *शब्दों की दुनिया* (word puzzles and synonyms), and *चित्रकारी व हस्तकला* (drawing/craft). Only 6 questions per chapter are currently rendered.
- **Rimjhim (-128 Qs):** Chapters like *शेखीबाज़ मक्खी*, *बहादुर बित्तो*, and *टिपटिपवा* have multi-act drama role-plays, phrase matching, folk story sequencing, and extensive *भाषा की बात* grammar drills that are missing from the current 7-question set.

### 4. EVS / The World Around Us Shortage (-338 Questions across 36 Chapters)
- **Our Wondrous World (-108 Qs):** Experiential tasks such as neighborhood sound maps, home water audit tables, leaf texture rubbings, step-by-step hand-washing sequence diagrams, and waste sorting activities are omitted from the current 7-question format.
- **Looking Around (-230 Qs):** Rich with interactive riddles (*Poonam's Day Out* Who am I riddles, *Flying High* bird riddles), Braille script alphabets, Stappoo (hop-scotch) rules, and house model construction crafts.

---

## 4. ACTIONABLE ROADMAP TO ACHIEVE GENUINE 100% INVENTORY

To advance from the current **Curated Exemplar Model (37.0% / 926 items)** to **True 100% NCERT / Tiwari Academy Ingestion (2,183 questions)**:

\`\`\`mermaid
graph TD
    Current["Current Published State: 808 Qs + 118 CBQs = 926 Items (37.0%)"]
    Step1["Phase 1: Ingest Remaining End-of-Chapter Exercises (~600 Qs -> ~65% Coverage)"]
    Step2["Phase 2: Ingest In-Text Tables, Mazes, Riddles & Worksheets (~450 Qs -> ~85% Coverage)"]
    Step3["Phase 3: Ingest Oral Activities, Role-Plays, Crafts & Field Logs (~325 Qs -> True 100%)"]

    Current --> Step1
    Step1 --> Step2
    Step2 --> Step3
\`\`\`

1. **Phase 1: Primary Textbook Exercises Expansion (+600 Qs):** Ingest every remaining question from "Reading is Fun", "Practice Time", "अभ्यास", and "Find Out".
2. **Phase 2: Worksheets, Fill-in-the-Blanks & Word Grids (+450 Qs):** Ingest all arithmetic tables, secret codes, riddles, and matching exercises.
3. **Phase 3: Oral Discussions, Projects & Activity Prompts (+325 Qs):** Complete all conversational and hands-on tasks for full parity with Tiwari Academy.
`;

fs.writeFileSync(path.join(__dirname, '..', 'reports', 'class-3-ncert-strict-question-shortage-audit.md'), md, 'utf8');
console.log("Class 3 Strict Shortage Audit Report generated successfully!");
