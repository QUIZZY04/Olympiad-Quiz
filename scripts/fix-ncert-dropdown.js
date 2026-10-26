// scripts/fix-ncert-dropdown.js
// Fixes Class 1 subject mapping and dropdown population in ncert-solutions.html

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ncertPath = path.join(ROOT, 'ncert-solutions.html');
let content = fs.readFileSync(ncertPath, 'utf8');

// Normalize line endings to LF for consistent replacement, then restore
const isCRLF = content.includes('\r\n');
let normalized = content.replace(/\r\n/g, '\n');

// 1. Insert Class 1 into ncertSolutionsMap
const class1Definition = `    "1": {
      name: "Class 1",
      hubUrl: "ncert-solutions-class-1.html",
      subjects: [
        { name: "Mathematics (Joyful Mathematics & Math-Magic)", url: "ncert-solutions-class-1-maths.html" },
        { name: "English (Mridang & Marigold)", url: "ncert-solutions-class-1-english.html" },
        { name: "Hindi (सारंगी - Sarangi & रिमझिम - Rimjhim)", url: "ncert-solutions-class-1-hindi.html" },
        { name: "Environmental Studies / EVS (Our Living World & Surroundings)", url: "ncert-solutions-class-1-evs.html" }
      ]
    },`;

if (!normalized.includes('"1": {')) {
  normalized = normalized.replace(
    'const ncertSolutionsMap = {\n    "2": {',
    'const ncertSolutionsMap = {\n' + class1Definition + '\n    "2": {'
  );
  console.log('✓ Added Class 1 entry to ncertSolutionsMap');
}

// 2. Enhance onClassChange to provide "All Subjects" option and properly populate subjectSelect
const oldOnClassChangeRegex = /function onClassChange\(\)\s*\{[\s\S]*?history\.replaceState\(null, null, '#class' \+ selectedClass\);\s*\}\s*else\s*\{[\s\S]*?\}\s*\}/;

const newOnClassChange = `function onClassChange() {
    const selectedClass = classSelect.value;
    hideAlert();
    const panel = document.getElementById('allSubjectsPanel');
    if (panel) panel.style.display = 'none';

    // Reset and repopulate subject dropdown
    subjectSelect.innerHTML = '';

    if (selectedClass && ncertSolutionsMap[selectedClass]) {
      const classInfo = ncertSolutionsMap[selectedClass];
      const subjects = classInfo.subjects;

      // Add "All Subjects (Class X Hub)" as the first option
      const optAll = document.createElement('option');
      optAll.value = classInfo.hubUrl || ('ncert-solutions-class-' + selectedClass + '.html');
      optAll.textContent = 'All Subjects (' + classInfo.name + ' Hub)';
      subjectSelect.appendChild(optAll);

      // Add each subject
      subjects.forEach((sub) => {
        const opt = document.createElement('option');
        opt.value = sub.url;
        opt.textContent = sub.name;
        subjectSelect.appendChild(opt);
      });

      // Update URL hash smoothly without jumping
      history.replaceState(null, null, '#class' + selectedClass);
    } else {
      const genericSubjects = [
        { name: "Mathematics", key: "maths" },
        { name: "Science", key: "science" },
        { name: "Social Science", key: "sst" },
        { name: "English", key: "english" },
        { name: "Hindi", key: "hindi" },
        { name: "Sanskrit", key: "sanskrit" }
      ];
      genericSubjects.forEach((sub, idx) => {
        const opt = document.createElement('option');
        opt.value = sub.key;
        opt.textContent = sub.name;
        if (idx === 0) opt.selected = true;
        subjectSelect.appendChild(opt);
      });
    }
  }`;

if (oldOnClassChangeRegex.test(normalized)) {
  normalized = normalized.replace(oldOnClassChangeRegex, newOnClassChange);
  console.log('✓ Updated onClassChange function with All Subjects option');
}

// 3. Enhance goToSolution to handle direct URLs and fallback keys cleanly
const oldGoToSolutionRegex = /function goToSolution\(\)\s*\{[\s\S]*?window\.location\.href = targetUrl;\s*\}/;

const newGoToSolution = `function goToSolution() {
    const classVal = classSelect.value;
    let subjectVal = subjectSelect.value;
    const panel = document.getElementById('allSubjectsPanel');
    if (panel) panel.style.display = 'none';

    if (!classVal) {
      showAlert('Please select your Class first.');
      classSelect.focus();
      return;
    }

    const classInfo = ncertSolutionsMap[classVal];
    if (!classInfo) {
      showAlert('Solutions for Class ' + classVal + ' are currently being updated.');
      return;
    }

    // If subject is missing or "all", default to class hub or first subject
    if (!subjectVal || subjectVal === 'all') {
      window.location.href = classInfo.hubUrl || classInfo.subjects[0].url;
      return;
    }

    // If the subject value is already a full URL (.html), navigate directly
    if (subjectVal.endsWith('.html')) {
      window.location.href = subjectVal;
      return;
    }

    // Otherwise, match generic key (maths, english, hindi, evs, science, sst, etc.)
    const cleanKey = subjectVal.toLowerCase();
    const match = classInfo.subjects.find(s => {
      const u = s.url.toLowerCase();
      if (cleanKey === 'evs') return u.includes('-evs.') || u.includes('-science.');
      if (cleanKey === 'sst') return u.includes('-sst.') || u.includes('-social-science.');
      return u.includes('-' + cleanKey + '.');
    });

    if (match) {
      window.location.href = match.url;
    } else if (classInfo.hubUrl) {
      window.location.href = classInfo.hubUrl;
    } else {
      showAlert('Subject not available for Class ' + classVal + '. Please choose another.');
    }
  }`;

if (oldGoToSolutionRegex.test(normalized)) {
  normalized = normalized.replace(oldGoToSolutionRegex, newGoToSolution);
  console.log('✓ Updated goToSolution function for robust 1-click navigation');
}

// Convert back to CRLF if needed
const finalContent = isCRLF ? normalized.replace(/\n/g, '\r\n') : normalized;
fs.writeFileSync(ncertPath, finalContent, 'utf8');
console.log('✅ Successfully applied fixes to ncert-solutions.html');
