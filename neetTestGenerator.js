const admin = require('firebase-admin');
const db = admin.firestore();

exports.generateFullNeetMock = async (testId, title) => {
    const subjects = ['PH', 'CH', 'BOT', 'ZOO'];
    const testPayload = {
        test_id: testId,
        title: title,
        test_type: "FULL_MOCK",
        exam: "NEET",
        duration_mins: 200,
        total_marks: 720,
        sections: {},
        created_at: admin.firestore.FieldValue.serverTimestamp()
    };

    for (const sub of subjects) {
        // In production, use an aggregated random sampler to prevent table scanning
        // Fetch Section A (35 Qs, Difficulty 1 & 2)
        const secASnap = await db.collection('qb_questions')
            .where('subject_code', '==', sub)
            .where('difficulty', '<=', 2)
            .where('status', '==', 'active')
            .limit(100).get(); // Fetch pool, pick 35 randomly
        
        // Fetch Section B (15 Qs, Difficulty 2 & 3)
        const secBSnap = await db.collection('qb_questions')
            .where('subject_code', '==', sub)
            .where('difficulty', '>=', 2)
            .where('status', '==', 'active')
            .limit(50).get(); // Fetch pool, pick 15 randomly

        const docsA = secASnap.docs.map(d => d.data());
        const docsB = secBSnap.docs.map(d => d.data());
        
        // Shuffle function (Fisher-Yates) assumed implemented here
        const shuffledA = docsA.sort(() => 0.5 - Math.random()).slice(0, 35);
        const shuffledB = docsB.sort(() => 0.5 - Math.random()).slice(0, 15);

        testPayload.sections[`${sub.toLowerCase()}_sec_a`] = shuffledA.map(q => q.question_id);
        testPayload.sections[`${sub.toLowerCase()}_sec_b`] = shuffledB.map(q => q.question_id);
    }

    await db.collection('neet_mock_tests').doc(testId).set(testPayload);
    return testPayload;
};