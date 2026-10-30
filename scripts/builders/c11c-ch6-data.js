/**
 * Master Questions Assembler for Class 11 Chemistry Chapter 6: Equilibrium
 * Combines Part 1 (Q6.1 - Q6.34), Part 2 (Q6.35 - Q6.54), and Part 3 (Q6.55 - Q6.73)
 * Total: 73 Verbatim Questions (Rationalised NCERT 2026-27)
 */

const { getPart1Questions } = require('./c11c-ch6-data-part1.js');
const { getPart2Questions } = require('./c11c-ch6-data-part2.js');
const { getPart3Questions } = require('./c11c-ch6-data-part3.js');

function getQuestions() {
  const q1 = getPart1Questions();
  const q2 = getPart2Questions();
  const q3 = getPart3Questions();
  
  const all = [...q1, ...q2, ...q3];
  return all;
}

module.exports = { getQuestions };
