const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c3e');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

console.log(`Auditing ${files.length} English Chapter Files in chapters-c3e/...`);

let totalQs = 0;
let totalCbqs = 0;
let totalRubrics = 0;
let errors = 0;

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const qCount = (content.match(/class="q-card/g) || []).length;
  const cbqCount = (content.match(/class="cbq-card/g) || []).length;
  const rubricCount = (content.match(/class="marking-row/g) || []).length;
  const undefCount = (content.match(/undefined/g) || []).length;
  const nanCount = (content.match(/NaN/g) || []).length;
  const objCount = (content.match(/\[object Object\]/g) || []).length;

  totalQs += qCount;
  totalCbqs += cbqCount;
  totalRubrics += rubricCount;

  // Validate Schema.org JSON-LD
  const scriptMatches = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || [];
  let schemaValid = true;
  scriptMatches.forEach(sm => {
    const jsonStr = sm.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>/, '');
    try {
      JSON.parse(jsonStr);
    } catch (e) {
      schemaValid = false;
      console.error(`  ❌ Invalid JSON-LD in ${f}: ${e.message}`);
      errors++;
    }
  });

  if (undefCount > 0 || nanCount > 0 || objCount > 0 || !schemaValid || qCount === 0) {
    console.error(`  ❌ Issue in ${f}: Qs=${qCount}, Undef=${undefCount}, NaN=${nanCount}, Obj=${objCount}, SchemaValid=${schemaValid}`);
    errors++;
  }
});

console.log("--------------------------------------------------");
console.log(`Audited ${files.length} Files:`);
console.log(`Total Exercise Questions: ${totalQs}`);
console.log(`Total CBQs: ${totalCbqs}`);
console.log(`Total Solutions + Case Studies: ${totalQs + totalCbqs}`);
console.log(`Total CBSE Marking Rows: ${totalRubrics}`);
console.log(`Errors: ${errors}`);

if (errors === 0) {
  console.log("🎉 100% ENGLISH CHAPTERS AUDIT PASSED CLEANLY!");
} else {
  console.log(`Verification failed with ${errors} errors.`);
}
