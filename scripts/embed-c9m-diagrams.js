const fs = require('fs');
const path = require('path');
const svgs = require('./c9m-svg-definitions.js');

function insertSvgIntoCard(htmlContent, cardId, svgString) {
  const cardStartTag = `<div class="q-card" id="${cardId}">`;
  const cardStartIndex = htmlContent.indexOf(cardStartTag);
  if (cardStartIndex === -1) {
    console.error(`ERROR: Card not found: ${cardId}`);
    return htmlContent;
  }

  // Find end of this card
  const nextCardIndex = htmlContent.indexOf('<div class="q-card"', cardStartIndex + cardStartTag.length);
  const cardEndIndex = nextCardIndex !== -1 ? nextCardIndex : htmlContent.indexOf('</section>', cardStartIndex);
  
  const cardContent = htmlContent.substring(cardStartIndex, cardEndIndex);

  if (cardContent.includes(svgString.substring(0, 50))) {
    console.log(`Skipping ${cardId}: Diagram already present.`);
    return htmlContent;
  }

  const answerTextTag = '<div class="answer-text">';
  const answerTextPos = cardContent.indexOf(answerTextTag);
  if (answerTextPos === -1) {
    console.error(`ERROR: answer-text tag not found in ${cardId}`);
    return htmlContent;
  }

  const insertionPos = answerTextPos + answerTextTag.length;
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

console.log('Embedding SVGs into Class 9 chapters...');

// Process Ch 1
{
  let ch1 = fs.readFileSync('chapters-c9m/ch1.html', 'utf8');
  ch1 = insertSvgIntoCard(ch1, 'q1_1_3', svgs.svgC9_Ch1_CartesianPlane);
  ch1 = insertSvgIntoCard(ch1, 'q1_2_2', svgs.svgC9_Ch1_DistancePythagoras);
  ch1 = insertSvgIntoCard(ch1, 'q1_2_6', svgs.svgC9_Ch1_SquareVerification);
  fs.writeFileSync('chapters-c9m/ch1.html', ch1, 'utf8');
  console.log('Updated ch1.html');
}

// Process Ch 2
{
  let ch2 = fs.readFileSync('chapters-c9m/ch2.html', 'utf8');
  ch2 = insertSvgIntoCard(ch2, 'q2_2_1', svgs.svgC9_Ch2_LineGraph);
  fs.writeFileSync('chapters-c9m/ch2.html', ch2, 'utf8');
  console.log('Updated ch2.html');
}

// Process Ch 3
{
  let ch3 = fs.readFileSync('chapters-c9m/ch3.html', 'utf8');
  ch3 = insertSvgIntoCard(ch3, 'q3_1_3', svgs.svgC9_Ch3_Root2NumberLine);
  fs.writeFileSync('chapters-c9m/ch3.html', ch3, 'utf8');
  console.log('Updated ch3.html');
}

// Process Ch 4
{
  let ch4 = fs.readFileSync('chapters-c9m/ch4.html', 'utf8');
  ch4 = insertSvgIntoCard(ch4, 'q4_1_1', svgs.svgC9_Ch4_SquareIdentity);
  fs.writeFileSync('chapters-c9m/ch4.html', ch4, 'utf8');
  console.log('Updated ch4.html');
}

// Process Ch 5
{
  let ch5 = fs.readFileSync('chapters-c9m/ch5.html', 'utf8');
  ch5 = insertSvgIntoCard(ch5, 'q5_1_2', svgs.svgC9_Ch5_CircularMotion);
  ch5 = insertSvgIntoCard(ch5, 'q5_2_1', svgs.svgC9_Ch5_PeriodicWave);
  fs.writeFileSync('chapters-c9m/ch5.html', ch5, 'utf8');
  console.log('Updated ch5.html');
}

// Process Ch 6
{
  let ch6 = fs.readFileSync('chapters-c9m/ch6.html', 'utf8');
  ch6 = insertSvgIntoCard(ch6, 'q6_2_1', svgs.svgC9_Ch6_HeronTriangle);
  ch6 = insertSvgIntoCard(ch6, 'q6_2_2', svgs.svgC9_Ch6_RhombusArea);
  ch6 = insertSvgIntoCard(ch6, 'q6_3_2', svgs.svgC9_Ch6_Trapezium);
  fs.writeFileSync('chapters-c9m/ch6.html', ch6, 'utf8');
  console.log('Updated ch6.html');
}

// Process Ch 7
{
  let ch7 = fs.readFileSync('chapters-c9m/ch7.html', 'utf8');
  ch7 = insertSvgIntoCard(ch7, 'q7_2_2', svgs.svgC9_Ch7_TwoCoinsTree);
  ch7 = insertSvgIntoCard(ch7, 'q7_2_3', svgs.svgC9_Ch7_DeckOfCards);
  ch7 = insertSvgIntoCard(ch7, 'q7_3_1', svgs.svgC9_Ch7_VennDiagram);
  fs.writeFileSync('chapters-c9m/ch7.html', ch7, 'utf8');
  console.log('Updated ch7.html');
}

// Process Ch 8
{
  let ch8 = fs.readFileSync('chapters-c9m/ch8.html', 'utf8');
  ch8 = insertSvgIntoCard(ch8, 'q8_1_1', svgs.svgC9_Ch8_APStaircase);
  fs.writeFileSync('chapters-c9m/ch8.html', ch8, 'utf8');
  console.log('Updated ch8.html');
}

// Process Ch 9
{
  let ch9 = fs.readFileSync('chapters-c9m/ch9.html', 'utf8');
  ch9 = insertSvgIntoCard(ch9, 'q9_2_1', svgs.svgC9_Ch9_IsoscelesProof);
  ch9 = insertSvgIntoCard(ch9, 'q9_2_2', svgs.svgC9_Ch9_AngleSumTriangle);
  fs.writeFileSync('chapters-c9m/ch9.html', ch9, 'utf8');
  console.log('Updated ch9.html');
}

// Process Ch 10
{
  let ch10 = fs.readFileSync('chapters-c9m/ch10.html', 'utf8');
  ch10 = insertSvgIntoCard(ch10, 'q10_2_3', svgs.svgC9_Ch10_HistogramPolygon);
  fs.writeFileSync('chapters-c9m/ch10.html', ch10, 'utf8');
  console.log('Updated ch10.html');
}

// Process Ch 11
{
  let ch11 = fs.readFileSync('chapters-c9m/ch11.html', 'utf8');
  ch11 = insertSvgIntoCard(ch11, 'q11_2_1', svgs.svgC9_Ch11_EuclidAlgorithmFlowchart);
  fs.writeFileSync('chapters-c9m/ch11.html', ch11, 'utf8');
  console.log('Updated ch11.html');
}

// Process Ch 12
{
  let ch12 = fs.readFileSync('chapters-c9m/ch12.html', 'utf8');
  ch12 = insertSvgIntoCard(ch12, 'q12_1_1', svgs.svgC9_Ch12_ParallelogramDiag);
  ch12 = insertSvgIntoCard(ch12, 'q12_2_1', svgs.svgC9_Ch12_MidpointTheorem);
  fs.writeFileSync('chapters-c9m/ch12.html', ch12, 'utf8');
  console.log('Updated ch12.html');
}

// Process Ch 13
{
  let ch13 = fs.readFileSync('chapters-c9m/ch13.html', 'utf8');
  ch13 = insertSvgIntoCard(ch13, 'q13_3_1', svgs.svgC9_Ch13_LinearGraphIntersections);
  fs.writeFileSync('chapters-c9m/ch13.html', ch13, 'utf8');
  console.log('Updated ch13.html');
}

// Process Ch 14
{
  let ch14 = fs.readFileSync('chapters-c9m/ch14.html', 'utf8');
  ch14 = insertSvgIntoCard(ch14, 'q14_1_1', svgs.svgC9_Ch14_CuboidSolid);
  ch14 = insertSvgIntoCard(ch14, 'q14_2_1', svgs.svgC9_Ch14_CylinderSolid);
  ch14 = insertSvgIntoCard(ch14, 'q14_2_2', svgs.svgC9_Ch14_ConeGeometry);
  ch14 = insertSvgIntoCard(ch14, 'q14_3_3', svgs.svgC9_Ch14_SphereHemisphere);
  fs.writeFileSync('chapters-c9m/ch14.html', ch14, 'utf8');
  console.log('Updated ch14.html');
}

console.log('All chapters-c9m files successfully updated with SVG diagrams!');
