/**
 * Generator for Class 9 Sanskrit - Chapter 2: स्वर्णकाकः (Svarṇakākaḥ)
 * NCERT Rationalised 2026–27 Syllabus • Shemushi Prathamo Bhagah (Code 122)
 * All 7 Verbatim Textbook Exercises (44 sub-questions/items) + CBSE Step Marking Rubrics + Competency HOTS
 * Strictly zero shortage, custom vector SVG, offline preloaded cache.
 * NO PDF download buttons/toolbars (strictly restricted to Physics Ch 7).
 */
const fs = require('fs');
const path = require('path');

const ch2Path = path.join(__dirname, '..', '..', 'chapters-c9sk', 'ch2.html');
const cachePath = path.join(__dirname, '..', '..', 'chapters-c9sk', 'chapters-data.js');

// High-fidelity custom SVG: The Golden Crow, Palace, Staircases & Moral of Greed vs Contentment
const svgDiagram = `
  <div style="margin:22px 0; background:white; padding:18px; border-radius:14px; border:1.5px solid #ede9fe; box-shadow:0 3px 12px rgba(124,58,237,0.06);">
    <h3 style="font-size:1.02rem; font-weight:800; color:#5b21b6; margin-bottom:12px; display:flex; align-items:center; gap:8px; font-family:'Noto Sans Devanagari', sans-serif;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2.2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      कथा-दर्शनम्: स्वर्णकाकः, सोपान-मञ्जूषा-चयनम् एवं लोभस्य दुष्परिणामः
    </h3>
    <svg viewBox="0 0 780 250" style="width:100%; height:auto; font-family:'Noto Sans Devanagari', system-ui, sans-serif;">
      <!-- Panel 1: Swarnakaka & Golden Palace -->
      <rect x="15" y="15" width="375" height="220" rx="10" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5"/>
      <text x="32" y="38" font-size="12" font-weight="bold" fill="#b45309">१. स्वर्णपक्ष-काकः एवं सुवर्णमय-प्रासादः:</text>

      <g transform="translate(30, 52)">
        <rect x="0" y="0" width="345" height="162" rx="8" fill="#ffffff" stroke="#fef3c7"/>
        <!-- Golden Crow Motif -->
        <circle cx="50" cy="50" r="24" fill="#fef08a" stroke="#eab308" stroke-width="2"/>
        <polygon points="74,48 88,52 74,56" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/> <!-- Silver Beak -->
        <ellipse cx="40" cy="70" rx="20" ry="12" fill="#fde047" stroke="#ca8a04"/>
        <text x="24" y="54" font-size="10" font-weight="bold" fill="#713f12">स्वर्णकाकः</text>
        <text x="96" y="44" font-size="8.8" font-weight="bold" fill="#b45309">• स्वर्णपक्षः, रजतचञ्चुः</text>
        <text x="96" y="58" font-size="8" fill="#475569">(सोने के पंख, चांदी की चोंच)</text>
        <text x="96" y="72" font-size="8.2" fill="#713f12">• न्यग्रोधवृक्षस्योपरि स्वर्णमयः प्रासादः</text>

        <!-- Three Staircases Matrix -->
        <rect x="12" y="92" width="100" height="58" rx="5" fill="#fef9c3" stroke="#fde047"/>
        <text x="18" y="108" font-size="8" font-weight="bold" fill="#854d0e">१. स्वर्णसोपानम्</text>
        <text x="18" y="122" font-size="7.2" fill="#713f12">सोने की सीढ़ी</text>
        <text x="18" y="136" font-size="7.2" fill="#166534">विनम्रायै प्रदत्तम्</text>

        <rect x="122" y="92" width="100" height="58" rx="5" fill="#f1f5f9" stroke="#cbd5e1"/>
        <text x="128" y="108" font-size="8" font-weight="bold" fill="#334155">२. रजतसोपानम्</text>
        <text x="128" y="122" font-size="7.2" fill="#475569">चांदी की सीढ़ी</text>
        <text x="128" y="136" font-size="7.2" fill="#475569">मध्यम-विकल्पः</text>

        <rect x="232" y="92" width="100" height="58" rx="5" fill="#ffedd5" stroke="#fed7aa"/>
        <text x="238" y="108" font-size="8" font-weight="bold" fill="#9a3412">३. ताम्रसोपानम्</text>
        <text x="238" y="122" font-size="7.2" fill="#9a3412">तांबे की सीढ़ी</text>
        <text x="238" y="136" font-size="7.2" fill="#b91c1c">लुब्धायै दत्तम</text>
      </g>

      <!-- Panel 2: The Two Girls & Two Outcomes -->
      <rect x="405" y="15" width="360" height="220" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="422" y="38" font-size="12" font-weight="bold" fill="#0f172a">२. सन्तोषः vs लोभः (कर्मफल-सिद्धान्तः):</text>

      <g transform="translate(420, 52)">
        <!-- Box A: Vinamra Balika -->
        <rect x="0" y="0" width="160" height="162" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="10" y="20" font-size="8.8" font-weight="bold" fill="#166534">विनम्रा निर्धना बालिका:</text>
        <text x="10" y="36" font-size="7.6" fill="#334155">• ताम्रसोपानं प्रार्थयत्</text>
        <text x="10" y="50" font-size="7.6" fill="#334155">• ताम्रथाल्यां भोजनम् ऐच्छत्</text>
        <text x="10" y="66" font-size="8" font-weight="bold" fill="#047857">• लघुत्तमां मञ्जूषां नीतवती</text>
        <rect x="10" y="78" width="140" height="72" rx="4" fill="#ffffff" stroke="#bbf7d0"/>
        <text x="16" y="96" font-size="8.5" font-weight="bold" fill="#15803d">फलम्: महार्हाणि हीरकाणि</text>
        <text x="16" y="112" font-size="7.4" fill="#166534">धनिका सञ्जाता</text>
        <text x="16" y="128" font-size="7.8" font-weight="bold" fill="#059669">✅ 'सन्तोषः परमो लाभः'</text>
        <text x="16" y="142" font-size="6.8" fill="#64748b">(निःस्वार्थतायाः पुरस्कारः)</text>

        <!-- Box B: Lubdha Balika -->
        <rect x="170" y="0" width="160" height="162" rx="6" fill="#fef2f2" stroke="#fca5a5"/>
        <text x="180" y="20" font-size="8.8" font-weight="bold" fill="#991b1b">गर्विता लुब्धा बालिका:</text>
        <text x="180" y="36" font-size="7.6" fill="#334155">• स्वर्णसोपानम् अयाचत्</text>
        <text x="180" y="50" font-size="7.6" fill="#334155">• स्वर्णथाल्यां भोजनं दम्भात्</text>
        <text x="180" y="66" font-size="8" font-weight="bold" fill="#b91c1c">• बृहत्तमां मञ्जूषां गृहीतवती</text>
        <rect x="180" y="78" width="140" height="72" rx="4" fill="#ffffff" stroke="#fecaca"/>
        <text x="186" y="96" font-size="8.5" font-weight="bold" fill="#dc2626">फलम्: भीषणः कृष्णसर्पः</text>
        <text x="186" y="112" font-size="7.4" fill="#991b1b">लोभस्य फलम् आसादितम्</text>
        <text x="186" y="128" font-size="7.8" font-weight="bold" fill="#b91c1c">❌ 'लोभः पापस्य कारणम्'</text>
        <text x="186" y="142" font-size="6.8" fill="#64748b">(लोभं परित्यक्तवती)</text>
      </g>
    </svg>
  </div>
`;

// Chapter 2 Section HTML
const ch2Html = `<section class="chapter-section" id="ch2" data-book="shemushi">
  <div class="chapter-header">
    <div class="ch-badge">पाठः २</div>
    <div class="chapter-header-info">
      <div class="ch-category">गद्यभागः (नीतिकथा) • शेमुषी प्रथमो भागः (Code 122)</div>
      <h2>द्वितीयः पाठः — स्वर्णकाकः</h2>
      <p class="ch-author">रचयिता: श्रीपद्मशास्त्री (कथासङ्ग्रहः: ‘विश्वकथाशतकम्’ - बर्मा/म्यांमारदेशस्य लोककथा)</p>
    </div>
  </div>

  <div class="theme-card">
    <div class="theme-header">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      <span>पाठ-सारः एवं मुख्य-सन्देशः (Chapter Summary & Central Theme)</span>
    </div>
    <div class="theme-body">
      <p>प्रस्तुतोऽयं पाठः श्रीपद्मशास्त्रिणा विरचितस्य ‘विश्वकथाशतकम्’ इति कथासङ्ग्रहात् गृहीतोऽस्ति। एषा म्यांमार (बर्मा) देशस्य एका प्रसिद्धा श्रेष्ठतमा च लोककथा वर्तते। अस्यां कथायां लोभस्य दुष्परिणामः तथा त्यागस्य, विनम्रतायाः, सन्तोषस्य च शुभफलम् एका विचित्रकाकमाध्यमेन अतिरोचकशैल्या वर्णितमस्ति।</p>
      <p style="margin-top:8px;font-style:italic;color:#6b21a8;"><strong>नीति-शिक्षा:</strong> मनुष्येण लोभः कदापि न करणीयः। यतः ‘लोभः पापस्य कारणम्’ भवति। सन्तोषी, विनम्रः च मानवः एव संसारे सुखं, मानं, वास्तविकं वैभवं च प्राप्नोति।</p>
    </div>
  </div>

  <!-- Custom Educational SVG -->
  ${svgDiagram}

  <div class="ex-div">📖 एनसीईआरटी अभ्यास-प्रश्नोत्तराणि एवं सीबीएसई अंक-योजना (NCERT Exercises & CBSE Marking Rubrics 2026-27)</div>

  <!-- अभ्यासः १ -->
  <div class="q-card" id="c9sk_ch2_q1">
    <div class="q-head" onclick="toggleQ('c9sk_ch2_q1')">
      <div class="q-head-left">
        <span class="q-num">अभ्यासः १ (क-ङ) — एकपदेन उत्तरं लिखत</span>
        <span class="word-limit-pill">शब्द-सीमा: १-२ शब्दाः (Direct Case-Ending Precision)</span>
      </div>
      <div class="q-text">
        अधोलिखितानां प्रश्नानाम् उत्तराणि एकपदेन लिखत:<br>
        (क) माता काम् आदिशत्?<br>
        (ख) स्वर्णकाकः कान् अखादत्?<br>
        (ग) प्रासादः कीदृशः वर्तते?<br>
        (घ) गृहमागत्य तया का समुद्घाटिता?<br>
        (ङ) लोभाविष्टा बालिका कीदृशीं मञ्जूषां नयति?
      </div>
      <div class="q-marks">१/२ × ५ = २.५ अंकाः</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ सीबीएसई मानक उत्तरम् (CBSE Model Answer & Detailed Explanation)</div>
        <div class="answer-text">
          <div class="sans-ans-block">
            <p><strong>(क)</strong> <span class="ans-highlight">पुत्रीम्</span> (दुहितरम्)</p>
            <p><strong>(ख)</strong> <span class="ans-highlight">तण्डुलान्</span></p>
            <p><strong>(ग)</strong> <span class="ans-highlight">स्वर्णमयः</span></p>
            <p><strong>(घ)</strong> <span class="ans-highlight">मञ्जूषा</span> (पेटिका)</p>
            <p><strong>(ङ)</strong> <span class="ans-highlight">बृहत्तमाम्</span> (विशालत्तमाम्)</p>
          </div>
          <div class="hi-trans">
            <strong>हिन्दी व्याख्या:</strong><br>
            • (क) माँ ने अपनी पुत्री को चावलों की रक्षा करने का आदेश दिया।<br>
            • (ख) सोने के कौवे ने धूप में रखे चावलों को खा लिया।<br>
            • (ग) पीपल के वृक्ष के ऊपर बना महल सोने का (स्वर्णमय) था।<br>
            • (घ) घर आकर विनम्र बालिका ने संदूक (मञ्जूषा) खोली।<br>
            • (ङ) लालची लड़की सबसे बड़ी पेटी उठाकर ले गई।
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">📋 सीबीएसई चरणबद्ध अंक-विभाजन योजना (CBSE Step Marking Rubrics 2026-27)</div>
          <div class="marking-row"><span class="marking-key">(क) ‘पुत्रीम्’ शुद्ध द्वितीया-विभक्तियुक्तपदाय</span><span class="marking-marks">१/२ अंकः</span></div>
          <div class="marking-row"><span class="marking-key">(ख) ‘तण्डुलान्’ द्वितीया-बहुवचनपदाय</span><span class="marking-marks">१/२ अंकः</span></div>
          <div class="marking-row"><span class="marking-key">(ग) ‘स्वर्णमयः’ प्रथमा-विशेषणपदाय</span><span class="marking-marks">१/२ अंकः</span></div>
          <div class="marking-row"><span class="marking-key">(घ) ‘मञ्जूषा’ शुद्ध स्त्रीलिंगपदाय</span><span class="marking-marks">१/२ अंकः</span></div>
          <div class="marking-row"><span class="marking-key">(ङ) ‘बृहत्तमाम्’ तमप्-प्रत्ययान्तपदाय</span><span class="marking-marks">१/२ अंकः</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- अभ्यासः २ -->
  <div class="q-card" id="c9sk_ch2_q2">
    <div class="q-head" onclick="toggleQ('c9sk_ch2_q2')">
      <div class="q-head-left">
        <span class="q-num">अभ्यासः २ (क-ङ) — संस्कृतभाषया पूर्णवाक्येन उत्तरत</span>
        <span class="word-limit-pill">शब्द-सीमा: १०-२० शब्दाः (Full Sentence with Textual Accuracy)</span>
      </div>
      <div class="q-text">
        अधोलिखितानां प्रश्नानाम् उत्तराणि संस्कृतभाषया लिखत:<br>
        (क) निर्धनायाः वृद्धायाः दुहिता कीदृशी आसीत्?<br>
        (ख) बालिकया पूर्वं कीदृशः काकः न दृष्टः आसीत्?<br>
        (ग) निर्धनायाः दुहिता मञ्जूषायां कानि अपश्यत्?<br>
        (घ) बालिका किं दृष्ट्वा आश्चर्यचकिता जाता?<br>
        (ङ) गर्विता बालिका कीदृशं सोपानम् अयाचत् कीदृशं च प्राप्नोत्?
      </div>
      <div class="q-marks">१ × ५ = ५ अंकाः</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ सीबीएसई मानक उत्तरम् (CBSE Model Answer & Detailed Explanation)</div>
        <div class="answer-text">
          <div class="sans-ans-block">
            <p><strong>(क)</strong> निर्धनायाः वृद्धायाः दुहिता <strong>विनम्रा मनोहरा चासीत्</strong>।</p>
            <p><strong>(ख)</strong> बालिकया पूर्वं <strong>स्वर्णपक्षः रजतचञ्चुः स्वर्णकाकः</strong> न दृष्टः आसीत्।</p>
            <p><strong>(ग)</strong> निर्धनायाः दुहिता मञ्जूषायां <strong>महार्हाणि हीरकाणि</strong> (बहुमूल्यानि रत्नानि) अपश्यत्।</p>
            <p><strong>(घ)</strong> बालिका वृक्षस्योपरि <strong>स्वर्णमयं प्रासादं</strong> दृष्ट्वा आश्चर्यचकिता जाता।</p>
            <p><strong>(ङ)</strong> गर्विता बालिका <strong>स्वर्णमयं सोपानम् अयाचत्, परं स्वर्णकाकः तस्यै ताम्रमयं सोपानमेव प्रायच्छत्</strong>।</p>
          </div>
          <div class="hi-trans">
            <strong>हिन्दी व्याख्या:</strong><br>
            • (क) निर्धन वृद्धा की पुत्री स्वभाव से अत्यंत विनम्र और सुंदर थी।<br>
            • (ख) बालिका ने इससे पूर्व सोने के पंखों और चाँदी की चोंच वाला ऐसा अनोखा स्वर्णकाक कभी नहीं देखा था।<br>
            • (ग) निर्धन बालिका ने सबसे छोटी संदूक खोली तो उसमें बहुमूल्य चमकते हुए हीरे देखे।<br>
            • (घ) पीपल के विशाल वृक्ष पर सोने का महल देखकर वह बालिका आश्चर्यचकित रह गई।<br>
            • (ङ) घमंडी बालिका ने सोने की सीढ़ी माँगी, लेकिन कौवे ने उसे तांबे की सीढ़ी ही प्रदान की।
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">📋 सीबीएसई चरणबद्ध अंक-विभाजन योजना (CBSE Step Marking Rubrics 2026-27)</div>
          <div class="marking-row"><span class="marking-key">(क) ‘विनम्रा मनोहरा च’ विशेषणद्वयोल्लेखेन पूर्णवाक्यरचना</span><span class="marking-marks">१ अंकः</span></div>
          <div class="marking-row"><span class="marking-key">(ख) ‘स्वर्णपक्षः रजतचञ्चुः’ यथार्थोल्लेखेन वाक्यरचना</span><span class="marking-marks">१ अंकः</span></div>
          <div class="marking-row"><span class="marking-key">(ग) ‘महार्हाणि हीरकाणि’ शुद्ध द्वितीया-बहुवचनपदप्रयोगः</span><span class="marking-marks">१ अंकः</span></div>
          <div class="marking-row"><span class="marking-key">(घ) ‘स्वर्णमयं प्रासादम्’ कर्मपदप्रयोगः</span><span class="marking-marks">१ अंकः</span></div>
          <div class="marking-row"><span class="marking-key">(ङ) स्वर्ण-ताम्र-उभयोः सोपानयोः स्पष्टोल्लेखः</span><span class="marking-marks">१ अंकः</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- अभ्यासः ३ -->
  <div class="q-card" id="c9sk_ch2_q3">
    <div class="q-head" onclick="toggleQ('c9sk_ch2_q3')">
      <div class="q-head-left">
        <span class="q-num">अभ्यासः ३ — अधोलिखितानां पदानां विलोमपदं लिखत</span>
        <span class="word-limit-pill">सटीक विलोमपदानि</span>
      </div>
      <div class="q-text">
        अधोलिखितानां पदानां विलोमपदं पाठात् चित्वा लिखत:<br>
        (क) पश्चात्<br>
        (ख) हसितुम्<br>
        (ग) अधः<br>
        (घ) श्वेतः<br>
        (ङ) सूर्योदयः<br>
        (च) सुप्तः
      </div>
      <div class="q-marks">१/२ × ६ = ३ अंकाः</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ सीबीएसई मानक उत्तरम् (CBSE Model Answer & Detailed Explanation)</div>
        <div class="answer-text">
          <div class="sans-ans-block">
            <p><strong>(क) पश्चात्</strong> (बाद में) $\times$ <span class="ans-highlight">पूर्वं / प्राक्</span> (पहले)</p>
            <p><strong>(ख) हसितुम्</strong> (हँसने के लिए) $\times$ <span class="ans-highlight">रोदितुम्</span> (रोने के लिए)</p>
            <p><strong>(ग) अधः</strong> (नीचे) $\times$ <span class="ans-highlight">उपरि</span> (ऊपर)</p>
            <p><strong>(घ) श्वेतः</strong> (सफेद) $\times$ <span class="ans-highlight">कृष्णः</span> (काला)</p>
            <p><strong>(ङ) सूर्योदयः</strong> (सूरज निकलना) $\times$ <span class="ans-highlight">सूर्यास्तः</span> (सूरज डूबना)</p>
            <p><strong>(च) सुप्तः</strong> (सोया हुआ) $\times$ <span class="ans-highlight">प्रबुद्धः / जाग्रतः</span> (जागा हुआ)</p>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">📋 सीबीएसई चरणबद्ध अंक-विभाजन योजना (CBSE Step Marking Rubrics 2026-27)</div>
          <div class="marking-row"><span class="marking-key">प्रत्येकस्मिन् शुद्ध-विलोमपदलेखनाय</span><span class="marking-marks">१/२ अंकः</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- अभ्यासः ४ -->
  <div class="q-card" id="c9sk_ch2_q4">
    <div class="q-head" onclick="toggleQ('c9sk_ch2_q4')">
      <div class="q-head-left">
        <span class="q-num">अभ्यासः ४ — सन्धिं कुरुत</span>
        <span class="word-limit-pill">नियमसम्मत सन्धियुक्त पदम्</span>
      </div>
      <div class="q-text">
        सन्धिं कुरुत:<br>
        (१) नि + अवसत् = _____<br>
        (२) सूर्य + उदयः = _____<br>
        (३) वृक्षस्य + उपरि = _____<br>
        (४) हि + अकारयत् = _____<br>
        (५) च + एकाकिनी = _____<br>
        (६) इति + उक्त्वा = _____<br>
        (७) प्रति + अवदत् = _____<br>
        (८) प्र + उक्तम् = _____<br>
        (९) अत्र + एव = _____<br>
        (१०) तत्र + उपस्थिता = _____<br>
        (११) यथा + इच्छम् = _____
      </div>
      <div class="q-marks">१/२ × ११ = ५.५ अंकाः</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ सीबीएसई मानक उत्तरम् (CBSE Model Answer & Detailed Explanation)</div>
        <div class="answer-text">
          <div class="sans-ans-block">
            <p>(१) नि + अवसत् = <span class="ans-highlight">न्यवसत्</span> <em>(यण्-स्वरसन्धिः: इ/ई + अ &rarr; य् + अ)</em></p>
            <p>(२) सूर्य + उदयः = <span class="ans-highlight">सूर्योदयः</span> <em>(गुण-स्वरसन्धिः: अ + उ &rarr; ओ)</em></p>
            <p>(३) वृक्षस्य + उपरि = <span class="ans-highlight">वृक्षस्योपरि</span> <em>(गुण-स्वरसन्धिः: अ + उ &rarr; ओ)</em></p>
            <p>(४) हि + अकारयत् = <span class="ans-highlight">ह्यकारयत्</span> <em>(यण्-स्वरसन्धिः: इ + अ &rarr; य् + अ)</em></p>
            <p>(५) च + एकाकिनी = <span class="ans-highlight">चैकाकिनी</span> <em>(वृद्धि-स्वरसन्धिः: अ + ए &rarr; ऐ)</em></p>
            <p>(६) इति + उक्त्वा = <span class="ans-highlight">इत्युक्त्वा</span> <em>(यण्-स्वरसन्धिः: इ + उ &rarr; यु)</em></p>
            <p>(७) प्रति + अवदत् = <span class="ans-highlight">प्रत्यवदत्</span> <em>(यण्-स्वरसन्धिः: इ + अ &rarr; य् + अ)</em></p>
            <p>(८) प्र + उक्तम् = <span class="ans-highlight">प्रोक्तम्</span> <em>(गुण-स्वरसन्धिः: अ + उ &rarr; ओ)</em></p>
            <p>(९) अत्र + एव = <span class="ans-highlight">अत्रैव</span> <em>(वृद्धि-स्वरसन्धिः: अ + ए &rarr; ऐ)</em></p>
            <p>(१०) तत्र + उपस्थिता = <span class="ans-highlight">तत्रोपस्थिता</span> <em>(गुण-स्वरसन्धिः: अ + उ &rarr; ओ)</em></p>
            <p>(११) यथा + इच्छम् = <span class="ans-highlight">यथेच्छम्</span> <em>(गुण-स्वरसन्धिः: आ + इ &rarr; ए)</em></p>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">📋 सीबीएसई चरणबद्ध अंक-विभाजन योजना (CBSE Step Marking Rubrics 2026-27)</div>
          <div class="marking-row"><span class="marking-key">प्रत्येकस्मिन् शुद्ध-सन्धियुक्तपदे</span><span class="marking-marks">१/२ अंकः</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- अभ्यासः ५ -->
  <div class="q-card" id="c9sk_ch2_q5">
    <div class="q-head" onclick="toggleQ('c9sk_ch2_q5')">
      <div class="q-head-left">
        <span class="q-num">अभ्यासः ५ — स्थूलपदान्यधिकृत्य प्रश्ननिर्माणम्</span>
        <span class="word-limit-pill">प्रश्नवाचक-चिह्नयुक्त (?) पूर्णवाक्यम्</span>
      </div>
      <div class="q-text">
        स्थूलपदान्यधिकृत्य प्रश्ननिर्माणं कुरुत:<br>
        (क) ग्रामे <u>निर्धना स्त्री</u> अवसत्।<br>
        (ख) <u>स्वर्णकाकं</u> निवारयन्ती बालिका प्रार्थयत्।<br>
        (ग) <u>सूर्योदयात्</u> पूर्वमेव बालिका तत्रोपस्थिता।<br>
        (घ) बालिका <u>निर्धनमातुः</u> दुहिता आसीत्।<br>
        (ङ) लुब्धा वृद्धा <u>स्वर्णकाकस्य</u> रहस्यमभिज्ञातवती।
      </div>
      <div class="q-marks">१ × ५ = ५ अंकाः</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ सीबीएसई मानक उत्तरम् (CBSE Model Answer & Detailed Explanation)</div>
        <div class="answer-text">
          <div class="sans-ans-block">
            <p><strong>(क)</strong> ग्रामे <strong>का</strong> अवसत्? <em>(स्त्रीलिंग-प्रथमा-एकवचनम्)</em></p>
            <p><strong>(ख)</strong> <strong>कम्</strong> निवारयन्ती बालिका प्रार्थयत्? <em>(पुंल्लिङ्ग-द्वितीया-एकवचनम्)</em></p>
            <p><strong>(ग)</strong> <strong>कस्मात्</strong> पूर्वमेव बालिका तत्रोपस्थिता? <em>(पुंल्लिङ्ग-पञ्चमी-एकवचनम् अथवा 'कदा')</em></p>
            <p><strong>(घ)</strong> बालिका <strong>कस्याः</strong> दुहिता आसीत्? <em>(स्त्रीलिंग-षष्ठी-एकवचनम्)</em></p>
            <p><strong>(ङ)</strong> लुब्धा वृद्धा <strong>कस्य</strong> रहस्यमभिज्ञातवती? <em>(पुंल्लिङ्ग-षष्ठी-एकवचनम्)</em></p>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">📋 सीबीएसई चरणबद्ध अंक-विभाजन योजना (CBSE Step Marking Rubrics 2026-27)</div>
          <div class="marking-row"><span class="marking-key">सटीक-किम्-रूपप्रयोगार्थं तथा पूर्णवाक्ये ‘?’ चिह्नाय</span><span class="marking-marks">१ अंकः प्रतिप्रश्नम्</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- अभ्यासः ६ -->
  <div class="q-card" id="c9sk_ch2_q6">
    <div class="q-head" onclick="toggleQ('c9sk_ch2_q6')">
      <div class="q-head-left">
        <span class="q-num">अभ्यासः ६ — प्रकृतिमप्रत्ययं संयोज्य/विभज्य लिखत</span>
        <span class="word-limit-pill">धातु-प्रत्यय-संयोजनम्</span>
      </div>
      <div class="q-text">
        प्रकृति-प्रत्यय-संयोगं विभागं वा कुरुत:<br>
        (१) वि + लोक् + ल्यप् = _____<br>
        (२) नि + क्षिप् + ल्यप् = _____<br>
        (३) आ + गम् + ल्यप् = _____<br>
        (४) दृश् + क्त्वा = _____<br>
        (५) शी + क्त्वा = _____<br>
        (६) लघु + तमप् = _____<br>
        (७) हस् + शतृ = _____
      </div>
      <div class="q-marks">१/२ × ७ = ३.५ अंकाः</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ सीबीएसई मानक उत्तरम् (CBSE Model Answer & Detailed Explanation)</div>
        <div class="answer-text">
          <div class="sans-ans-block">
            <p>(१) वि + लोक् + ल्यप् = <span class="ans-highlight">विलोक्य</span> <em>(देखकर)</em></p>
            <p>(२) नि + क्षिप् + ल्यप् = <span class="ans-highlight">निक्षिप्य</span> <em>(रखकर / फेंककर)</em></p>
            <p>(३) आ + गम् + ल्यप् = <span class="ans-highlight">आगम्य</span> <em>(आकर)</em></p>
            <p>(४) दृश् + क्त्वा = <span class="ans-highlight">दृष्ट्वा</span> <em>(देखकर)</em></p>
            <p>(५) शी + क्त्वा = <span class="ans-highlight">शयित्वा</span> <em>(सोकर)</em></p>
            <p>(६) लघु + तमप् = <span class="ans-highlight">लघुतमम् / लघुतमः</span> <em>(सबसे छोटा)</em></p>
            <p>(७) हस् + शतृ = <span class="ans-highlight">हसन् / हसन्ती</span> <em>(हँसता हुआ / हँसती हुई)</em></p>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">📋 सीबीएसई चरणबद्ध अंक-विभाजन योजना (CBSE Step Marking Rubrics 2026-27)</div>
          <div class="marking-row"><span class="marking-key">प्रत्येकस्मिन् शुद्ध-प्रत्ययान्तरूपाय</span><span class="marking-marks">१/२ अंकः</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- अभ्यासः ७ -->
  <div class="q-card" id="c9sk_ch2_q7">
    <div class="q-head" onclick="toggleQ('c9sk_ch2_q7')">
      <div class="q-head-left">
        <span class="q-num">अभ्यासः ७ — कः/का कम्/कां कथयति?</span>
        <span class="word-limit-pill">कथन-वक्तृ-श्रोतृ-ज्ञानम्</span>
      </div>
      <div class="q-text">
        अधोलिखितानि कथनानि कः/का कम्/कां प्रति कथयति?<br>
        (क) ‘पूर्वम् प्रातराशः क्रियताम्।’<br>
        (ख) ‘सूर्यातपे तण्डुलान् खगेभ्यो रक्ष।’<br>
        (ग) ‘तण्डुलान् मा भक्षय।’<br>
        (घ) ‘अहं तुभ्यं तण्डुलमूल्यं दास्यामि।’<br>
        (ङ) ‘भो नीचकाक! अहमागता, मह्यं तण्डुलमूल्यं प्रयच्छ।’
      </div>
      <div class="q-marks">१ × ५ = ५ अंकाः</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ सीबीएसई मानक उत्तरम् (CBSE Model Answer & Detailed Explanation)</div>
        <div class="answer-text">
          <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.9rem;">
            <thead>
              <tr style="background:#f5f3ff; text-align:left; border-bottom:2px solid #ddd6fe;">
                <th style="padding:10px; color:#5b21b6;">कथनम् (संवादः)</th>
                <th style="padding:10px; color:#5b21b6;">कः / का (वक्ता)</th>
                <th style="padding:10px; color:#5b21b6;">कम् / काम् (श्रोता)</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid #f1f5f9;">
                <td style="padding:9px;">(क) ‘पूर्वम् प्रातराशः क्रियताम्।’</td>
                <td style="padding:9px; font-weight:700; color:#7c3aed;">स्वर्णकाकः</td>
                <td style="padding:9px; font-weight:700; color:#059669;">बालिकाम् (निर्धनाम्)</td>
              </tr>
              <tr style="border-bottom:1px solid #f1f5f9;">
                <td style="padding:9px;">(ख) ‘सूर्यातपे तण्डुलान् खगेभ्यो रक्ष।’</td>
                <td style="padding:9px; font-weight:700; color:#7c3aed;">माता</td>
                <td style="padding:9px; font-weight:700; color:#059669;">पुत्रीम् (दुहितरम्)</td>
              </tr>
              <tr style="border-bottom:1px solid #f1f5f9;">
                <td style="padding:9px;">(ग) ‘तण्डुलान् मा भक्षय।’</td>
                <td style="padding:9px; font-weight:700; color:#7c3aed;">बालिका</td>
                <td style="padding:9px; font-weight:700; color:#059669;">स्वर्णकाकम्</td>
              </tr>
              <tr style="border-bottom:1px solid #f1f5f9;">
                <td style="padding:9px;">(घ) ‘अहं तुभ्यं तण्डुलमूल्यं दास्यामि।’</td>
                <td style="padding:9px; font-weight:700; color:#7c3aed;">स्वर्णकाकः</td>
                <td style="padding:9px; font-weight:700; color:#059669;">बालिकाम्</td>
              </tr>
              <tr>
                <td style="padding:9px;">(ङ) ‘भो नीचकाक! अहमागता, मह्यं तण्डुलमूल्यं प्रयच्छ।’</td>
                <td style="padding:9px; font-weight:700; color:#7c3aed;">लुब्धा (गर्विता) बालिका</td>
                <td style="padding:9px; font-weight:700; color:#059669;">स्वर्णकाकम्</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">📋 सीबीएसई चरणबद्ध अंक-विभाजन योजना (CBSE Step Marking Rubrics 2026-27)</div>
          <div class="marking-row"><span class="marking-key">वक्तृ-श्रोतृ-उभयोः शुद्ध-विभक्ति-सहित-लेखनाय प्रतिप्रश्नम्</span><span class="marking-marks">१ अंकः (१/२ + १/२)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Section -->
  <div class="cbq-section">
    <div class="cbq-header">
      <span>🎯 योग्यता-आधारिताः एवं मूल्यपरक-प्रश्नाः (CBSE Competency-Based / HOTS Questions)</span>
      <span class="cbq-badge">NEP 2020 Aligned</span>
    </div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #7c3aed;">
        <div class="cbq-type" style="color:#7c3aed;">योग्यता-आधारितः प्रश्नः (NEP 2020 Competency HOTS Question)</div>
        <div class="cbq-question">
          <strong>प्रश्नः:</strong> ‘स्वर्णकाकः’ इति कथायाः आधारेण स्पष्टीकुरुत यत् लोभस्य किं दुष्फलं भवति तथा च सन्तोषस्य कः लाभः? (शब्द-सीमा: ३०-४० शब्दाः | अंकाः: २)
        </div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तरं पश्यतु (Show Answer)</button>
        <div class="cbq-answer">
          <p>‘स्वर्णकाकः’ कथायाः सन्देशः अस्ति यत् ‘लोभः पापस्य कारणम्’ तथा ‘सन्तोषः परमो लाभः’। निर्धना बालिका स्वभावेन विनम्रा सन्तोषिणी चासीत्, अतः सा लघुत्तमां मञ्जूषां गृहीत्वापि अमूल्यानि हीरकाणि प्राप्तवती। अपरपक्षे गर्विता बालिका लोभवशात् स्वर्णसोपानम् ऐच्छत् बृहत्तमां मञ्जूषां च नीतवती, फलतः सा मञ्जूषातः केवलं भीषणं कृष्णसर्पं प्राप्य दुःखम् अन्वभवत्। अतः मानवेन लोभः सर्वथा त्याज्यः।</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Chapter Nav Buttons -->
  <div class="chapter-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(1)">← पूर्वः पाठः: भारतीवसन्तगीतिः (Ch 1)</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ शीर्षं प्रति (Back to Top)</button>
    <button class="ch-nav-btn next" onclick="showChapter(3)">अग्रिमः पाठः: गोदोहनम् (Ch 3) →</button>
  </div>
</section>`;

// Write ch2.html
fs.writeFileSync(ch2Path, ch2Html, 'utf8');
console.log(`Successfully generated Chapter 2: ${ch2Path} (${ch2Html.length} bytes)`);

// Append to chapters-data.js cache
const cacheAppend = `\nwindow.PRELOADED_CHAPTERS_C9SK["2"] = ${JSON.stringify(ch2Html)};\n`;
fs.appendFileSync(cachePath, cacheAppend, 'utf8');
console.log(`Appended Chapter 2 to preloaded cache: ${cachePath}`);
