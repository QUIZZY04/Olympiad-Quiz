const fs = require('fs');

const mainHtml = fs.readFileSync('ncert-solutions-class-9-maths.html', 'utf8');

for (let ch = 1; ch <= 14; ch++) {
  const frag = fs.readFileSync(`chapters-c9m/ch${ch}.html`, 'utf8');
  const cardRegex = /<div class="q-card"\s+id="([^"]+)">([\s\S]*?)<div class="q-text">([\s\S]*?)<\/div>/g;
  let m;
  const questions = [];
  while ((m = cardRegex.exec(frag)) !== null) {
    const id = m[1];
    const text = m[3].replace(/<[^>]+>/g, '').trim();
    const hasFig = /fig|figure|diagram|in the given figure|in fig/i.test(text);
    questions.push({ id, text, hasFig });
  }
  console.log(`\n=== Chapter ${ch} (${questions.length} questions) ===`);
  const figQuestions = questions.filter(q => q.hasFig);
  if (figQuestions.length > 0) {
    console.log(`  Explicit Figure Mentions (${figQuestions.length}):`);
    figQuestions.forEach(q => console.log(`    [${q.id}] ${q.text.substring(0, 100)}...`));
  } else {
    console.log(`  No explicit figure mentions in question text.`);
  }
}
