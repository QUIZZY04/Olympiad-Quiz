const admin = require('firebase-admin');
const db = admin.firestore();

exports.bulkUploadNeetQuestions = async (req, res) => {
    try {
        const questions = req.body.questions; // Array of JSON objects
        if (!Array.isArray(questions)) return res.status(400).json({ error: "Invalid payload format" });

        // 1. Fetch Chapter Master for Validation
        const chaptersSnap = await db.collection('sys_master_chapters').get();
        const chapterMaster = {};
        chaptersSnap.forEach(doc => {
            chapterMaster[doc.id] = doc.data();
        });

        const validSubjects = ['BOT', 'ZOO', 'PH', 'CH'];
        const uploadReport = { success: 0, failed: 0, errors: [] };
        const batch = db.batch();
        let batchCount = 0;

        for (let i = 0; i < questions.length; i++) {
            const q = questions[i];
            const rowNum = i + 1;

            // 2. Structural Validation
            if (!validSubjects.includes(q.subject_code)) {
                uploadReport.errors.push(`Row ${rowNum}: Invalid subject_code '${q.subject_code}'`);
                uploadReport.failed++;
                continue;
            }

            if (!q.content || !q.content.options || q.content.options.length !== 4) {
                uploadReport.errors.push(`Row ${rowNum}: Exactly 4 options required`);
                uploadReport.failed++;
                continue;
            }

            if (q.content.correct_option_index < 0 || q.content.correct_option_index > 3) {
                uploadReport.errors.push(`Row ${rowNum}: Correct answer index must be 0, 1, 2, or 3`);
                uploadReport.failed++;
                continue;
            }

            // 3. Strict Chapter Code Binding
            const masterRecord = chapterMaster[q.chapter_code];
            if (!masterRecord) {
                uploadReport.errors.push(`Row ${rowNum}: Chapter code '${q.chapter_code}' not found in Master`);
                uploadReport.failed++;
                continue;
            }

            if (masterRecord.subject_code !== q.subject_code) {
                uploadReport.errors.push(`Row ${rowNum}: Chapter '${q.chapter_code}' does not belong to subject '${q.subject_code}'`);
                uploadReport.failed++;
                continue;
            }

            // 4. Auto-Hydration (Inject Master Data to prevent typos)
            q.chapter_name = masterRecord.chapter_name;
            q.status = "active";
            q.created_at = admin.firestore.FieldValue.serverTimestamp();

            // 4.5. Check if question_id already exists to prevent overwrite
            if (q.question_id) {
                const existingDoc = await db.collection('qb_questions').doc(q.question_id).get();
                if (existingDoc.exists) {
                    uploadReport.errors.push(`Row ${rowNum}: Question ID '${q.question_id}' already exists in the database.`);
                    uploadReport.failed++;
                    continue;
                }
            }

            // 5. Add to Batch
            const docRef = db.collection('qb_questions').doc(q.question_id || db.collection('qb_questions').doc().id);
            batch.set(docRef, q);
            uploadReport.success++;
            batchCount++;

            if (batchCount === 450) { await batch.commit(); batchCount = 0; } // Firestore limit
        }

        if (batchCount > 0) await batch.commit();
        res.status(200).json({ message: "Upload complete", report: uploadReport });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};