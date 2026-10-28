const fs = require('fs');

const mainHtml = fs.readFileSync('ncert-solutions-class-9-maths.html', 'utf8');

for (let i = 1; i <= 14; i++) {
  const chFragment = fs.readFileSync(`chapters-c9m/ch${i}.html`, 'utf8').trim();
  const secStart = mainHtml.indexOf(`<section class="chapter-section" id="ch${i}">`);
  let secEnd;
  if (i < 14) {
    secEnd = mainHtml.indexOf(`<section class="chapter-section" id="ch${i+1}"`);
  } else {
    secEnd = mainHtml.indexOf('</section>', secStart) + '</section>'.length;
  }
  
  if (secStart === -1) {
    console.log(`Ch ${i}: NOT FOUND in mainHtml!`);
    continue;
  }
  
  const mainSec = mainHtml.substring(secStart, secEnd).trim();
  const cardCountMain = (mainSec.match(/<div class="q-card"/g) || []).length;
  const cardCountFrag = (chFragment.match(/<div class="q-card"/g) || []).length;
  console.log(`Ch ${i}: Cards in Main = ${cardCountMain}, Cards in Fragment = ${cardCountFrag}`);
}
