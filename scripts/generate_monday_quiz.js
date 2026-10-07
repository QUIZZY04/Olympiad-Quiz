/**
 * CLI Tool: Generate and Upload Monday Live Quizzes via Node.js
 * 
 * Usage:
 *   node scripts/generate_monday_quiz.js
 *   node scripts/generate_monday_quiz.js --subject=maths --classes=1,2,3,4,5,6,7,8,9,10 --count=15
 *   node scripts/generate_monday_quiz.js --dry-run
 */

const fs = require("fs");
const path = require("path");

// Load local environment if available
const envPath = path.join(__dirname, "..", "functions", ".env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  envContent.split("\n").forEach(line => {
    const parts = line.split("=");
    if (parts.length >= 2 && !parts[0].startsWith("#")) {
      const key = parts[0].trim();
      const val = parts.slice(1).join("=").trim().replace(/^['"]|['"]$/g, "");
      if (!process.env[key]) process.env[key] = val;
    }
  });
}

const { generateFullLiveQuizForClass } = require("../functions/quizAgent/geminiEngine");
const { getNextSubject, SUBJECT_DETAILS } = require("../functions/quizAgent/syllabus");

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    subject: null,
    classes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    count: 50,
    date: null,
    time: "11:00",
    duration: 60,
    price: 99,
    dryRun: false,
    apiKey: process.env.GEMINI_API_KEY || null,
    openAIKey: process.env.OPENAI_API_KEY || null
  };

  args.forEach(arg => {
    if (arg === "--dry-run") options.dryRun = true;
    else if (arg.startsWith("--subject=")) options.subject = arg.split("=")[1].toLowerCase();
    else if (arg.startsWith("--classes=")) options.classes = arg.split("=")[1].split(",").map(c => parseInt(c.trim(), 10));
    else if (arg.startsWith("--count=")) options.count = parseInt(arg.split("=")[1], 10);
    else if (arg.startsWith("--date=")) options.date = arg.split("=")[1];
    else if (arg.startsWith("--api-key=")) options.apiKey = arg.split("=")[1];
    else if (arg.startsWith("--openai-key=")) options.openAIKey = arg.split("=")[1];
  });

  return options;
}

async function main() {
  const options = parseArgs();

  console.log("==================================================");
  console.log("🤖 Olympiad Quiz - Monday Live Quiz Generator (50 Questions)");
  console.log("==================================================");

  if (!options.apiKey && !options.openAIKey) {
    console.error("❌ Error: No API key provided (set GEMINI_API_KEY or OPENAI_API_KEY).");
    console.error("Provide it via environment variable or --api-key=YOUR_KEY / --openai-key=YOUR_KEY");
    process.exit(1);
  }

  const subject = options.subject || "maths";
  const dateStr = options.date || new Date().toISOString().slice(0, 10);
  const dateCompact = dateStr.replace(/-/g, "");

  console.log(`📌 Subject: ${SUBJECT_DETAILS[subject]?.name || subject}`);
  console.log(`🎯 Classes: ${options.classes.join(", ")}`);
  console.log(`📝 Questions per class: Exactly 50 (40 Regular @ 1M + 10 Achievers @ 2M)`);
  console.log(`📅 Target Date: ${dateStr}`);
  console.log(`⚙️  Dry Run: ${options.dryRun ? "YES (will save to latest_generated_quiz.json without database write)" : "NO"}`);
  console.log("--------------------------------------------------");

  const allClassResults = [];

  for (let i = 0; i < options.classes.length; i++) {
    const classNum = options.classes[i];
    console.log(`⏳ [${i + 1}/${options.classes.length}] Generating Class ${classNum} (40 Regular + 10 Achievers)...`);

    try {
      const quizResult = await generateFullLiveQuizForClass({
        apiKey: options.apiKey,
        geminiKey: options.apiKey,
        openAIKey: options.openAIKey,
        classNum,
        subject,
        dateCompact
      });

      console.log(`   ✅ Success: ${quizResult.regularQuestions.length} Regular + ${quizResult.achieverQuestions.length} Achievers = ${quizResult.totalCount} questions validated.`);
      allClassResults.push(quizResult);

      if (i < options.classes.length - 1) {
        // 2s pause to remain well within free tier limits
        await new Promise(r => setTimeout(r, 2000));
      }
    } catch (err) {
      console.error(`   ❌ Failed for Class ${classNum}: ${err.message}`);
    }
  }

  const outputPath = path.join(__dirname, "latest_generated_quiz.json");
  fs.writeFileSync(outputPath, JSON.stringify(allClassResults, null, 2));
  console.log(`\n💾 Saved all generated questions to: ${outputPath}`);

  if (options.dryRun) {
    console.log("🏁 Dry run complete! No database modifications made.");
    return;
  }

  console.log("\n📦 For cloud upload, use the interactive Admin Panel at admin.html or deploy the Monday Cloud Function.");
}

main().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
