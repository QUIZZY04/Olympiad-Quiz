const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6m');

for (let ch = 1; ch <= 12; ch++) {
  const filePath = path.join(dir, `ch${ch}.html`);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix broken div tags
  content = content.replace(/<\/÷>/g, '</div>');
  content = content.replace(/<÷\s+/g, '<div ');
  content = content.replace(/<÷>/g, '<div>');
  content = content.replace(/ex-÷/g, 'ex-div');

  // Fix Chapter 2 stray curly braces
  content = content.replace(/<strong>1\/2<\/strong>}\s*revolution/g, '<strong>1/2</strong> revolution');
  content = content.replace(/<strong>1\/4<\/strong>}\s*revolution/g, '<strong>1/4</strong> revolution');
  content = content.replace(/<strong>3\/4<\/strong>}\s*revolution/g, '<strong>3/4</strong> revolution');

  // Fix Chapter 7 fractions
  content = content.replace(/<strong>5rac\{7<\/strong>10\}/g, '<strong>5 7/10</strong>');
  content = content.replace(/<strong>1rac\{3<\/strong>20 metre\}/g, '<strong>1 3/20 metres</strong>');
  content = content.replace(/22 \+ 35\/10/g, '(22 + 35)/10 = 57/10');
  content = content.replace(/8 \+ 15\/20/g, '(8 + 15)/20 = 23/20');

  // Fix any remaining stray curly braces in text
  content = content.replace(/\s*\}\s*revolution/g, ' revolution');
  content = content.replace(/\s*\}\s*metre/g, ' metre');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Cleaned tags and fractions in ch${ch}.html`);
}

console.log('Done tag and fraction restoration.');
