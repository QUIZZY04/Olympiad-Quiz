/**
 * Master Questions Assembler for Class 11 Chemistry Chapter 8: Organic Chemistry
 * Combines Part 1 (Q8.1 - Q8.20) and Part 2 (Q8.21 - Q8.40)
 * Total: 40 Verbatim Questions (Rationalised NCERT 2026-27)
 */

const { getPart1Questions } = require('./c11c-ch8-data-part1.js');
const { getPart2Questions } = require('./c11c-ch8-data-part2.js');

function getQuestions() {
  const q1 = getPart1Questions();
  const q2 = getPart2Questions();
  return [...q1, ...q2];
}

module.exports = { getQuestions };
