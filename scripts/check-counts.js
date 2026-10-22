const fs = require('fs');
const reg = require('./audit-register-c4-detailed.json');

const stats = {};
reg.forEach(item => {
  if (!stats[item.subject]) {
    stats[item.subject] = { textbook: item.textbookTitle, exercises: 0, cbqs: 0, total: 0 };
  }
  if (item.questionNumber === 'CBQ') {
    stats[item.subject].cbqs++;
  } else {
    stats[item.subject].exercises++;
  }
  stats[item.subject].total++;
});

console.table(stats);
