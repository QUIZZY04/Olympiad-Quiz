const fs = require('fs');
const path = require('path');
const svgs = require('./c10m-svg-definitions.js');

// Helper to insert SVG into a card's answer-text if not already present
function insertSvgIntoCard(htmlContent, cardId, svgString) {
  const cardStartTag = `<div class="q-card" id="${cardId}">`;
  const cardStartIndex = htmlContent.indexOf(cardStartTag);
  if (cardStartIndex === -1) {
    console.error(`ERROR: Card not found: ${cardId}`);
    return htmlContent;
  }

  // Find the end of this card or next card
  const nextCardIndex = htmlContent.indexOf('<div class="q-card"', cardStartIndex + cardStartTag.length);
  const cardEndIndex = nextCardIndex !== -1 ? nextCardIndex : htmlContent.indexOf('</section>', cardStartIndex);
  
  const cardContent = htmlContent.substring(cardStartIndex, cardEndIndex);

  // Check if SVG already present inside this card
  if (cardContent.includes(svgString.substring(0, 50))) {
    console.log(`Skipping ${cardId}: Diagram already present.`);
    return htmlContent;
  }

  // Target insertion point: right after <div class="answer-text">
  const answerTextTag = '<div class="answer-text">';
  const answerTextPos = cardContent.indexOf(answerTextTag);
  if (answerTextPos === -1) {
    console.error(`ERROR: answer-text tag not found in ${cardId}`);
    return htmlContent;
  }

  const insertionPos = answerTextPos + answerTextTag.length;
  // Look ahead: if followed by \n or \r\n, insert right after that line break
  let offset = 0;
  if (cardContent[insertionPos] === '\r' && cardContent[insertionPos + 1] === '\n') {
    offset = 2;
  } else if (cardContent[insertionPos] === '\n') {
    offset = 1;
  }

  const newCardContent = cardContent.substring(0, insertionPos + offset) +
    svgString + '\n' +
    cardContent.substring(insertionPos + offset);

  return htmlContent.substring(0, cardStartIndex) +
    newCardContent +
    htmlContent.substring(cardEndIndex);
}

// Special helper for Ch 12 Q1: replace the misplaced toy diagram with the 2 cubes diagram
function fixCh12Q1(htmlContent) {
  const cardStartTag = '<div class="q-card" id="c10m-ch12-q1">';
  const cardStartIndex = htmlContent.indexOf(cardStartTag);
  if (cardStartIndex === -1) return htmlContent;

  const nextCardIndex = htmlContent.indexOf('<div class="q-card"', cardStartIndex + cardStartTag.length);
  let cardContent = htmlContent.substring(cardStartIndex, nextCardIndex);

  // Replace existing math-diagram-wrap in Q1
  const diagRegex = /<div class="math-diagram-wrap"[\s\S]*?<\/div>\s*<\/div>/;
  if (diagRegex.test(cardContent)) {
    cardContent = cardContent.replace(diagRegex, () => svgs.svgCh12Q1_Cubes);
    console.log('Replaced misplaced toy diagram in c10m-ch12-q1 with 2 Cubes diagram.');
  } else {
    cardContent = insertSvgIntoCard(htmlContent, 'c10m-ch12-q1', svgs.svgCh12Q1_Cubes);
  }

  return htmlContent.substring(0, cardStartIndex) + cardContent + htmlContent.substring(nextCardIndex);
}

// -------------------------------------------------------------
// Process each chapter file
// -------------------------------------------------------------

console.log('Embedding SVG diagrams into Class 10 chapter HTML files...');

// Chapter 2
{
  let ch2 = fs.readFileSync('chapters-c10m/ch2.html', 'utf8');
  ch2 = insertSvgIntoCard(ch2, 'c10m-ch2-q6', svgs.svgCh2Q1);
  fs.writeFileSync('chapters-c10m/ch2.html', ch2, 'utf8');
  console.log('Updated ch2.html');
}

// Chapter 3
{
  let ch3 = fs.readFileSync('chapters-c10m/ch3.html', 'utf8');
  ch3 = insertSvgIntoCard(ch3, 'c10m-ch3-q2', svgs.svgCh3Q2);
  fs.writeFileSync('chapters-c10m/ch3.html', ch3, 'utf8');
  console.log('Updated ch3.html');
}

// Chapter 4
{
  let ch4 = fs.readFileSync('chapters-c10m/ch4.html', 'utf8');
  ch4 = insertSvgIntoCard(ch4, 'c10m-ch4-q1', svgs.svgCh4_Discriminant);
  fs.writeFileSync('chapters-c10m/ch4.html', ch4, 'utf8');
  console.log('Updated ch4.html');
}

// Chapter 5
{
  let ch5 = fs.readFileSync('chapters-c10m/ch5.html', 'utf8');
  ch5 = insertSvgIntoCard(ch5, 'c10m-ch5-q1', svgs.svgCh5_APStaircase);
  fs.writeFileSync('chapters-c10m/ch5.html', ch5, 'utf8');
  console.log('Updated ch5.html');
}

// Chapter 6
{
  let ch6 = fs.readFileSync('chapters-c10m/ch6.html', 'utf8');
  ch6 = insertSvgIntoCard(ch6, 'c10m-ch6-q13', svgs.svgCh6Q13);
  ch6 = insertSvgIntoCard(ch6, 'c10m-ch6-q16', svgs.svgCh6Q16);
  ch6 = insertSvgIntoCard(ch6, 'c10m-ch6-q18', svgs.svgCh6Q18);
  ch6 = insertSvgIntoCard(ch6, 'c10m-ch6-q21', svgs.svgCh6Q21);
  ch6 = insertSvgIntoCard(ch6, 'c10m-ch6-q23', svgs.svgCh6Q23);
  ch6 = insertSvgIntoCard(ch6, 'c10m-ch6-q24', svgs.svgCh6Q24);
  ch6 = insertSvgIntoCard(ch6, 'c10m-ch6-q25', svgs.svgCh6Q25);
  ch6 = insertSvgIntoCard(ch6, 'c10m-ch6-q27', svgs.svgCh6Q27);
  fs.writeFileSync('chapters-c10m/ch6.html', ch6, 'utf8');
  console.log('Updated ch6.html');
}

// Chapter 7
{
  let ch7 = fs.readFileSync('chapters-c10m/ch7.html', 'utf8');
  ch7 = insertSvgIntoCard(ch7, 'c10m-ch7-q1', svgs.svgCh7Q1);
  fs.writeFileSync('chapters-c10m/ch7.html', ch7, 'utf8');
  console.log('Updated ch7.html');
}

// Chapter 8
{
  let ch8 = fs.readFileSync('chapters-c10m/ch8.html', 'utf8');
  ch8 = insertSvgIntoCard(ch8, 'c10m-ch8-q2', svgs.svgCh8Q2);
  ch8 = insertSvgIntoCard(ch8, 'c10m-ch8-q19', svgs.svgCh8Q2);
  fs.writeFileSync('chapters-c10m/ch8.html', ch8, 'utf8');
  console.log('Updated ch8.html');
}

// Chapter 9
{
  let ch9 = fs.readFileSync('chapters-c10m/ch9.html', 'utf8');
  ch9 = insertSvgIntoCard(ch9, 'c10m-ch9-q2', svgs.svgCh9Q2_BrokenTree);
  ch9 = insertSvgIntoCard(ch9, 'c10m-ch9-q4', svgs.svgCh9Q4);
  ch9 = insertSvgIntoCard(ch9, 'c10m-ch9-q7', svgs.svgCh9Q7);
  ch9 = insertSvgIntoCard(ch9, 'c10m-ch9-q13', svgs.svgCh9Q13);
  fs.writeFileSync('chapters-c10m/ch9.html', ch9, 'utf8');
  console.log('Updated ch9.html');
}

// Chapter 10
{
  let ch10 = fs.readFileSync('chapters-c10m/ch10.html', 'utf8');
  ch10 = insertSvgIntoCard(ch10, 'c10m-ch10-thm1', svgs.svgCh10Thm1);
  ch10 = insertSvgIntoCard(ch10, 'c10m-ch10-thm2', svgs.svgCh10Thm2);
  ch10 = insertSvgIntoCard(ch10, 'c10m-ch10-q9', svgs.svgCh10Q9);
  ch10 = insertSvgIntoCard(ch10, 'c10m-ch10-q12', svgs.svgCh10Q12);
  ch10 = insertSvgIntoCard(ch10, 'c10m-ch10-q14', svgs.svgCh10Q14);
  fs.writeFileSync('chapters-c10m/ch10.html', ch10, 'utf8');
  console.log('Updated ch10.html');
}

// Chapter 11
{
  let ch11 = fs.readFileSync('chapters-c10m/ch11.html', 'utf8');
  ch11 = insertSvgIntoCard(ch11, 'c10m-ch11-q2', svgs.svgCh11Q2_Quadrant);
  fs.writeFileSync('chapters-c10m/ch11.html', ch11, 'utf8');
  console.log('Updated ch11.html');
}

// Chapter 12
{
  let ch12 = fs.readFileSync('chapters-c10m/ch12.html', 'utf8');
  ch12 = fixCh12Q1(ch12);
  ch12 = insertSvgIntoCard(ch12, 'c10m-ch12-q3', svgs.svgCh12Q3);
  ch12 = insertSvgIntoCard(ch12, 'c10m-ch12-q6', svgs.svgCh12Q16);
  ch12 = insertSvgIntoCard(ch12, 'c10m-ch12-q16', svgs.svgCh12Q16);
  ch12 = insertSvgIntoCard(ch12, 'c10m-ch12-q17', svgs.svgCh12Q17);
  fs.writeFileSync('chapters-c10m/ch12.html', ch12, 'utf8');
  console.log('Updated ch12.html');
}

// Chapter 13
{
  let ch13 = fs.readFileSync('chapters-c10m/ch13.html', 'utf8');
  ch13 = insertSvgIntoCard(ch13, 'c10m-ch13-q1', svgs.svgCh13_EmpiricalFormula);
  fs.writeFileSync('chapters-c10m/ch13.html', ch13, 'utf8');
  console.log('Updated ch13.html');
}

// Chapter 14
{
  let ch14 = fs.readFileSync('chapters-c10m/ch14.html', 'utf8');
  ch14 = insertSvgIntoCard(ch14, 'c10m-ch14-q7', svgs.svgCh14Q7_DeckOfCards);
  ch14 = insertSvgIntoCard(ch14, 'c10m-ch14-q8', svgs.svgCh14Q27_TwoDiceGrid);
  ch14 = insertSvgIntoCard(ch14, 'c10m-ch14-q19', svgs.svgCh14Q7_DeckOfCards);
  ch14 = insertSvgIntoCard(ch14, 'c10m-ch14-q27', svgs.svgCh14Q27_TwoDiceGrid);
  fs.writeFileSync('chapters-c10m/ch14.html', ch14, 'utf8');
  console.log('Updated ch14.html');
}

console.log('All chapter files updated successfully!');
