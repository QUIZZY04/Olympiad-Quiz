const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c10h');

// CHAPTER 23: साखी — कबीरदास
const ch23 = `<section class="chapter-section" id="ch23" data-book="sparsh-kavya">
  <div class="chapter-header">
    <div class="ch-badge">23</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (काव्य खंड) — पाठ 1</div>
      <h2>साखी</h2>
      <p>संत कबीरदास | सधुक्कड़ी भाषा — नीति, ज्ञान, अहंकार-मुक्ति, नाम-महिमा और भक्ति की साधना | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch23-q1">
    <div class="q-head" onclick="toggleQ('ch23-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">मीठी वाणी बोलने से औरों को सुख और अपने तन को शीतलता कैसे प्राप्त होती है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कबीरदास जी के अनुसार—<em>"ऐसी बाणी बोलिये, मन का आपा खोइ। औरन को सीतल करै, आपहु सीतल होइ॥"</em></p>
          <ul>
            <li>जब मनुष्य अपने अहंकार (आपा) का त्याग करके मधुर और विनम्र वाणी बोलता है, तो उसके भीतर का क्रोध, कटुता और ईर्ष्या समाप्त हो जाती है, जिससे उसका अपना मन और शरीर शांत (शीतल) हो जाता है।</li>
            <li>ऐसी वाणी सुनने वाले के हृदय की पीड़ा को हरकर उसे अपार सुख, प्रेम और आत्मीयता प्रदान करती है। मीठे बोल बैर को मिटाकर सौहार्द की सृष्टि करते हैं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">अहंकार त्याग से आत्मिक शीतलता मिलने का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">श्रोता के मन पर सुखद व शांतिदायक प्रभाव का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch23-q2">
    <div class="q-head" onclick="toggleQ('ch23-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">ईश्वर कण-कण में व्याप्त है, पर हम उसे क्यों नहीं देख पाते?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कबीरदास जी कस्तूरी मृग का उदाहरण देते हुए कहते हैं—<em>"कस्तूरी कुंडलि बसै, मृग ढूँढ़ै बन माहि। ऐसे घटि-घटि रांम हैं, दुनियां देखै नांहि॥"</em></p>
          <p>जिस प्रकार मृग की अपनी नाभि में ही कस्तूरी की सुगंध होती है, किंतु अज्ञानतावश वह उसे सारे जंगल में ढूँढ़ता फिरता है; उसी प्रकार परमात्मा प्रत्येक मनुष्य के अंतःकरण और सृष्टि के कण-कण में समाया हुआ है। किंतु अज्ञान, मोह-माया और अहंकार के पर्दे के कारण मनुष्य उसे अपने भीतर न देखकर मंदिरों, मस्जिदों और तीर्थों में ढूँढ़ता भटकता रहता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कस्तूरी मृग के दृष्टांत का सटीक प्रयोग</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">अज्ञानता व अहंकार द्वारा अंतःकरण के ईश्वर को न देख पाने का कारण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch23-q3">
    <div class="q-head" onclick="toggleQ('ch23-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">अपने स्वभाव को निर्मल रखने के लिए कबीर ने क्या उपाय सुझाया है?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कबीरदास जी ने निंदक (आलोचना करने वाले) को अपने सबसे समीप रखने का उपाय सुझाया है—<em>"निंदक नेड़ा राखिये, आँगण कुटी बँधाइ। बिन साबण पाँणीं बिना, निरमल करै सुभाइ॥"</em></p>
          <p>निंदक हमारी त्रुटियों और कमियों को उजागर करता रहता है। उसकी आलोचना को सुनकर हम बिना साबुन और पानी के ही अपने दोषों को सुधार लेते हैं, जिससे हमारा स्वभाव स्वतः निर्मल और पवित्र बन जाता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">निंदक को समीप रखने का सुझाव</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">दोषों को सुधारकर स्वभाव निर्मल बनाने की प्रक्रिया</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Section -->
  <div class="cbq-section">
    <div class="cbq-header">
      <div class="cbq-badge">CBSE CBQs</div>
      <h3>योग्यता-आधारित उच्च स्तरीय प्रश्न (Competency-Based Questions)</h3>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 1: अभिकथन और कारण (Assertion &amp; Reason)</div>
      <div class="cbq-question">
        <strong>अभिकथन (A):</strong> कबीर संसार के लोगों को 'सुखिया' और स्वयं को 'दुखिया' मानते हैं।<br>
        <strong>कारण (R):</strong> संसार भौतिक भोग-विलास में मग्न होकर सो रहा है, जबकि कबीर नश्वरता और ईश्वर वियोग के सत्य को जानकर जागते हुए रो रहे हैं।<br>
        <strong>विकल्प:</strong><br>
        (क) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या करता है।<br>
        (ख) (A) और (R) दोनों सही हैं, परंतु (R), (A) की सही व्याख्या नहीं करता।<br>
        (ग) (A) सही है, परंतु (R) गलत है।<br>
        (घ) (A) गलत है, परंतु (R) सही है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>सही उत्तर: (क)</strong><br>
        <em>व्याख्या:</em> कबीर की दृष्टि में अज्ञानी संसार खाना-पीना और सोने में ही सुख मानता है, किंतु ज्ञानी संत ईश्वर वियोग और संसार की नश्वरता से दुखी रहता है। अतः (R) बिल्कुल सही व्याख्या करता है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 24: पद — मीराबाई
const ch24 = `<section class="chapter-section" id="ch24" data-book="sparsh-kavya">
  <div class="chapter-header">
    <div class="ch-badge">24</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (काव्य खंड) — पाठ 2</div>
      <h2>पद</h2>
      <p>मीराबाई | राजस्थानी मिश्रित ब्रजभाषा — माधुर्य भाव की भक्ति, दैन्य भाव, अनन्य समर्पण और श्रीकृष्ण के प्रति आर्त पुकार | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch24-q1">
    <div class="q-head" onclick="toggleQ('ch24-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">पहले पद में मीरा ने हरि से अपनी पीड़ा हरने की विनती किस प्रकार की है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>मीराबाई श्रीकृष्ण को उनके भक्तवत्सल रूप की याद दिलाते हुए अपनी पीड़ा हरने की प्रार्थना करती हैं। वे तीन पौराणिक उदाहरण देती हैं:</p>
          <ol>
            <li><strong>द्रौपदी की लाज:</strong> जब दुःशासन चीरहरण कर रहा था, तब प्रभु ने वस्त्र बढ़ाकर भरी सभा में उसकी लाज रखी थी।</li>
            <li><strong>प्रह्लाद की रक्षा:</strong> भक्त प्रह्लाद को बचाने के लिए प्रभु ने नृसिंह रूप धारण कर अहंकारी हिरण्यकश्यप का वध किया था।</li>
            <li><strong>ऐरावत हाथी का उद्धार:</strong> जब मगरमच्छ ने हाथी को पकड़ लिया था, तब भगवान ने ग्राह को मारकर हाथी की पीड़ा हरी थी।</li>
          </ol>
          <p>मीरा कहती हैं कि हे प्रभु! मैं भी आपकी दासी हूँ, इसलिए मेरी भी विरह-पीड़ा और सांसारिक कष्टों को दूर कीजिए।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">द्रौपदी, प्रह्लाद व ऐरावत के प्रसंगों का उल्लेख</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">स्वयं को दासी मानकर आर्त पुकार करने का भाव</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch24-q2">
    <div class="q-head" onclick="toggleQ('ch24-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">दूसरे पद में मीराबाई श्याम की चाकरी क्यों करना चाहती हैं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>मीराबाई श्रीकृष्ण की सेविका (चाकर) बनकर उनके समीप रहना चाहती हैं। चाकरी करने से उन्हें तीन बड़े आध्यात्मिक लाभ प्राप्त होंगे:</p>
          <ul>
            <li><strong>नित्य दर्शन:</strong> वे प्रभु के लिए बाग-बगीचे लगाएँगी जिससे रोज सुबह उठते ही उन्हें कृष्ण के दर्शन प्राप्त होंगे।</li>
            <li><strong>नाम-स्मरण की खर्ची:</strong> वृंदावन की कुंज-गलियों में कृष्ण की लीलाओं के गीत गाएँगी, जिससे उन्हें वेतन के रूप में निरंतर प्रभु के नाम का स्मरण मिलेगा।</li>
            <li><strong>भाव-भक्ति की जागीर:</strong> भक्ति रूपी असीम संपत्ति (जागीर) प्राप्त होगी, जिससे उनका जीवन धन्य हो जाएगा।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">दर्शन, नाम-स्मरण व भाव-भक्ति की जागीर का उल्लेख</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">दास्य भाव और सामीप्य की आकांक्षा</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Section -->
  <div class="cbq-section">
    <div class="cbq-header">
      <div class="cbq-badge">CBSE CBQs</div>
      <h3>योग्यता-आधारित उच्च स्तरीय प्रश्न (Competency-Based Questions)</h3>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 1: रूप-सौंदर्य व काव्य-सौंदर्य विश्लेषण (Competency Question)</div>
      <div class="cbq-question">
        मीराबाई द्वारा दूसरे पद में श्रीकृष्ण के रूप-सौंदर्य का जो वर्णन किया गया है, उसकी प्रमुख विशेषताओं को रेखांकित कीजिए।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        मीरा ने कृष्ण के नटवर वेश का अत्यंत मोहक चित्र खींचा है:<br>
        1. उनके शीश पर मोर के पंखों का मुकुट (मोरमुकुट) सुशोभित है।<br>
        2. उनके अंगों पर पीतांबर (पीले वस्त्र) शोभा पा रहे हैं और गले में वनफूलों की वैजयंती माला विराजमान है।<br>
        3. वे वृंदावन में मधुर बाँसुरी बजाते हुए गायें चराते हैं। यह रूप साक्षात् सौंदर्य और माधुर्य का सागर है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 25: मनुष्यता — मैथिलीशरण गुप्त
const ch25 = `<section class="chapter-section" id="ch25" data-book="sparsh-kavya">
  <div class="chapter-header">
    <div class="ch-badge">25</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (काव्य खंड) — पाठ 3</div>
      <h2>मनुष्यता</h2>
      <p>राष्ट्रकवि मैथिलीशरण गुप्त | खड़ी बोली — विश्व-बंधुत्व, परोपकार, त्याग, अमरता और सच्ची मानवता का संदेश | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch25-q1">
    <div class="q-head" onclick="toggleQ('ch25-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">कवि ने कैसी मृत्यु को 'सुमृत्य' कहा है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि के अनुसार मृत्यु तो सभी जीवों के लिए अनिवार्य और निश्चित है। किंतु 'सुमृत्य' (सार्थक और सुंदर मृत्यु) केवल उसी व्यक्ति की होती है, जो जीते जी परोपकार, समाज सेवा और दूसरों के कल्याण के लिए अपना जीवन समर्पित करता है।</p>
          <p>ऐसे व्यक्ति के मरने के बाद भी समूचा संसार उसके उपकारों को याद रखता है और श्रद्धा से नमन करता है। जो केवल अपने स्वार्थ के लिए जीता और मरता है, उसका जीना और मरना दोनों व्यर्थ है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">परोपकार व समाज कल्याण के लिए जीवन न्योछावर करना</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मृत्योपरांत भी संसार द्वारा श्रद्धा से याद किए जाने का भाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch25-q2">
    <div class="q-head" onclick="toggleQ('ch25-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">कवि ने दधीचि, कर्ण और उशीनर आदि का उदाहरण देकर क्या संदेश दिया है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि ने इन महान पौराणिक विभूतियों के त्याग के माध्यम से यह संदेश दिया है कि यह नश्वर शरीर क्षणभंगुर है, इसलिए परोपकार के लिए इसे न्योछावर करने में तनिक भी संकोच नहीं करना चाहिए:</p>
          <ul>
            <li><strong>महर्षि दधीचि:</strong> देवताओं की रक्षा के लिए अपनी जीवित अस्थियों (हड्डियों) का दान कर दिया।</li>
            <li><strong>राजा उशीनर (शिवि):</strong> एक शरणागत कबूतर की जान बचाने के लिए अपने शरीर का मांस काटकर बाज को दे दिया।</li>
            <li><strong>दानवीर कर्ण:</strong> याचक के माँगने पर अपने प्राण रक्षक कुंडल और कवच सहर्ष दान कर दिए।</li>
          </ul>
          <p>सच्चा मनुष्य वही है जो दूसरों की भलाई के लिए सर्वस्व त्याग दे।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">दधीचि, उशीनर व कर्ण के त्याग का स्पष्ट उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">नश्वर देह से शाश्वत परोपकार करने की प्रेरणा</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch25-q3">
    <div class="q-head" onclick="toggleQ('ch25-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">'मनुष्य मात्र बंधु है' से आप क्या समझते हैं? स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि के अनुसार इस संपूर्ण पृथ्वी पर रहने वाले सभी मनुष्य एक ही परमपिता परमात्मा (ईश्वर) की संतान हैं। अतः जाति, धर्म, वर्ण, देश या भाषा के आधार पर कोई किसी से भिन्न या पराया नहीं है; सभी आपस में सगे भाई (बंधु) हैं।</p>
          <p>मनुष्य का यह सर्वोच्च कर्तव्य है कि वह दूसरे भाई के दुख-दर्द को अपना समझे, उसके आँसू पोंछे और विपत्ति में उसकी सहायता करे। जो मनुष्य अपने भाई की पीड़ा को नहीं समझता, वह पशु के समान है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">एक ही परमपिता की संतान होने का बोध</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">विश्व-बंधुत्व व परस्पर सहानुभूति का कर्तव्य</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Section -->
  <div class="cbq-section">
    <div class="cbq-header">
      <div class="cbq-badge">CBSE CBQs</div>
      <h3>योग्यता-आधारित उच्च स्तरीय प्रश्न (Competency-Based Questions)</h3>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 1: अभिकथन और कारण (Assertion &amp; Reason)</div>
      <div class="cbq-question">
        <strong>अभिकथन (A):</strong> वही मनुष्य है जो मनुष्य के लिए मरे।<br>
        <strong>कारण (R):</strong> केवल अपने लिए भोजन और स्वार्थ साधना पशु-प्रवृत्ति है, जबकि दूसरों के हित के लिए जीना-मरना सच्ची मनुष्यता है।<br>
        <strong>विकल्प:</strong><br>
        (क) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या करता है।<br>
        (ख) (A) और (R) दोनों सही हैं, परंतु (R), (A) की सही व्याख्या नहीं करता।<br>
        (ग) (A) सही है, परंतु (R) गलत है।<br>
        (घ) (A) गलत है, परंतु (R) सही है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>सही उत्तर: (क)</strong><br>
        <em>व्याख्या:</em> मैथिलीशरण गुप्त जी ने स्पष्ट कहा है कि पशु केवल अपनी चराई खोजता है, जबकि सच्चा मनुष्य अपने प्राणों की आहुति देकर भी दूसरे मनुष्य की रक्षा करता है। अतः (R) बिल्कुल सही व्याख्या करता है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 26: पर्वत प्रदेश में पावस — सुमित्रानंदन पंत
const ch26 = `<section class="chapter-section" id="ch26" data-book="sparsh-kavya">
  <div class="chapter-header">
    <div class="ch-badge">26</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (काव्य खंड) — पाठ 4</div>
      <h2>पर्वत प्रदेश में पावस</h2>
      <p>प्रकृति के सुकुमार कवि सुमित्रानंदन पंत | छायावादी कविता — वर्षा ऋतु, हिमालय का जादुई सौंदर्य, मानवीकरण और कल्पनाशीलता | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch26-q1">
    <div class="q-head" onclick="toggleQ('ch26-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">'सहस्र दृग-सुमन' से क्या तात्पर्य है? कवि ने इस पद का प्रयोग किसके लिए किया है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>तात्पर्य:</strong> 'सहस्र' का अर्थ है हजार, 'दृग' का अर्थ है आँखें और 'सुमन' का अर्थ है फूल। 'सहस्र दृग-सुमन' का अर्थ है—हजारों नेत्र रूपी फूल।</p>
          <p><strong>प्रयोग:</strong> कवि ने इस पद का प्रयोग पर्वत के लिए किया है। पर्वत के ढलानों पर खिले हुए हजारों रंग-बिरंगे फूल ऐसे प्रतीत होते हैं मानो वे पर्वत की विशाल आँखें हों, जिनके माध्यम से पर्वत नीचे फैले दर्पण जैसे स्वच्छ तालाब में अपने विराट रूप और सौंदर्य को निहार रहा है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शब्दार्थ का सटीक विश्लेषण (हजारों नेत्र रूपी पुष्प)</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पर्वत द्वारा तालाब में अपना रूप निहारने के मानवीकरण का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch26-q2">
    <div class="q-head" onclick="toggleQ('ch26-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">कवि ने तालाब की समानता किसके साथ दिखाई है और क्यों?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि ने पर्वत के चरणों में स्थित तालाब की समानता एक विशाल 'दर्पण' (आईने) के साथ दिखाई है—<em>"दर्पण-सा फैला है विशाल"</em>।</p>
          <p>इसका कारण यह है कि तालाब का जल अत्यंत निर्मल, पारदर्शी और शांत है, जिसमें सामने खड़े गगनचुंबी पर्वत और खिले हुए फूलों का प्रतिबिंब बिल्कुल शीशे की तरह साफ और सुंदर दिखाई दे रहा है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">दर्पण के साथ समानता का उल्लेख</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">जल की स्वच्छता व प्रतिबिंब के कारण तुलना का औचित्य</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch26-q3">
    <div class="q-head" onclick="toggleQ('ch26-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">शाल के वृक्ष भयभीत होकर धरती में क्यों धँस गए प्रतीत होते हैं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>पावस ऋतु में अचानक आकाश में घने काले बादल छा गए और मूसलाधार बारिश शुरू हो गई मानो आकाश ही टूटकर धरती पर गिर पड़ा हो। चारों ओर धुंध और बादलों का ऐसा सफेद धुआँ उठा कि पर्वत, तालाब और पेड़ सब अदृश्य हो गए।</p>
          <p>शाल के गगनचुंबी पेड़ धुंध में विलीन होकर गायब हो गए। इस दृश्य को देखकर कवि कल्पना करता है मानो आकाश के भयानक प्रहार और बादलों के आतंक से डरकर शाल के वृक्ष धरती में धँस गए हों।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">घनी धुंध और बादलों के आवरण का प्राकृतिक दृश्य</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भयभीत होकर धरती में समाने की मानवीकृत कल्पना</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Section -->
  <div class="cbq-section">
    <div class="cbq-header">
      <div class="cbq-badge">CBSE CBQs</div>
      <h3>योग्यता-आधारित उच्च स्तरीय प्रश्न (Competency-Based Questions)</h3>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 1: छायावादी बिंब-विधान व मानवीकरण (Poetic Imagery)</div>
      <div class="cbq-question">
        "गिरिवर के उर से उठ-उठ कर, उच्चाकांक्षाओं से तरुवर, हैं झाँक रहे नीरव नभ पर, अनिमेश, अटल, कुछ चिंतापर।" इन पंक्तियों में निहित दार्शनिक भाव और मानवीकरण अलंकार को स्पष्ट कीजिए।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        यहाँ पेड़ों का मानवीकरण ऐसे महत्वाकांक्षी व्यक्तियों के रूप में किया गया है जो जीवन में निरंतर ऊँचाइयों को छूना चाहते हैं। पर्वत की छाती से उगे पेड़ शांत आकाश को एकटक (अनिमेष), स्थिर और चिंतामग्न भाव से देख रहे हैं। यह दृश्य मनुष्य की अनंत ऊँचाइयों को छूने की अदम्य इच्छा और उस लक्ष्य को पाने की आंतरिक बेचैनी का सशक्त प्रतीक है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 27: तोप — वीरेन डंगवाल
const ch27 = `<section class="chapter-section" id="ch27" data-book="sparsh-kavya">
  <div class="chapter-header">
    <div class="ch-badge">27</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (काव्य खंड) — पाठ 5</div>
      <h2>तोप</h2>
      <p>वीरेन डंगवाल | समकालीन कविता — 1857 की ऐतिहासिक तोप, औपनिवेशिक क्रूरता, समय का परिवर्तन और शक्ति का नश्वर अंत | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch27-q1">
    <div class="q-head" onclick="toggleQ('ch27-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">कंपनी बाग में रखी तोप क्या संदेश देती है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कंपनी बाग के मुहाने पर रखी 1857 की तोप हमें दो महत्त्वपूर्ण ऐतिहासिक संदेश देती है:</p>
          <ol>
            <li><strong>स्वतंत्रता संग्राम के शहीदों का स्मरण:</strong> यह याद दिलाती है कि हमारे देश के वीर सेनानियों ने किस प्रकार अंग्रेजों के भीषण अत्याचारों और तोपों का सामना करते हुए देश को आजाद कराया।</li>
            <li><strong>सत्ता और शक्ति की नश्वरता:</strong> यह तोप कभी बड़े-बड़े वीरों के परखच्चे उड़ा देती थी, किंतु आज वह केवल एक खिलौना बनकर रह गई है। यह संदेश देती है कि जुल्म और अहंकार कितना भी बड़ा क्यों न हो, एक दिन उसका अंत अवश्यंभावी है।</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">1857 के शहीदों की कुर्बानियों की याद</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">शक्ति और क्रूरता के नश्वर अंत का दार्शनिक संदेश</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch27-q2">
    <div class="q-head" onclick="toggleQ('ch27-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">तोप की वर्तमान स्थिति क्या है? कविता के आधार पर वर्णन कीजिए।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>आज वह भयानक तोप पूर्णतया शक्तिहीन, मूक और निष्प्रभावी हो चुकी है:</p>
          <ul>
            <li>कंपनी बाग में आने वाले छोटे-छोटे बच्चे उसकी पीठ पर बैठकर घुड़सवारी का खेल खेलते हैं।</li>
            <li>जब बच्चे नहीं होते, तो चिड़ियाँ और गौरैये उसके ऊपर बैठकर आपस में गपशप करते हैं और कभी-कभी बेखौफ होकर उसके मुँह के अंदर घुस जाते हैं।</li>
            <li>यह वर्तमान स्थिति दर्शाती है कि शांति और जीवन की शक्ति अंततः हिंसा और हथियारों से सदा श्रेष्ठ सिद्ध होती है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बच्चों की घुड़सवारी व चिड़ियों के गपशप का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">तोप के मुँह में चिड़ियों का प्रवेश (शांति की विजय)</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Section -->
  <div class="cbq-section">
    <div class="cbq-header">
      <div class="cbq-badge">CBSE CBQs</div>
      <h3>योग्यता-आधारित उच्च स्तरीय प्रश्न (Competency-Based Questions)</h3>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 1: ऐतिहासिक धरोहरों की प्रासंगिकता (Heritage Competency)</div>
      <div class="cbq-question">
        "धरोहरें हमें अपने इतिहास से जोड़ती हैं और भविष्य के लिए सचेत करती हैं।" 'तोप' कविता के संदर्भ में इस कथन की सार्थकता सिद्ध कीजिए।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        कंपनी बाग में रखी तोप ईस्ट इंडिया कंपनी के आगमन और उनके दमनकारी शासन की ऐतिहासिक गवाह है। यह धरोहर हमें यह सिखाती है कि हमने आजादी कितने भारी बलिदानों से पाई है, ताकि हम भविष्य में कभी ऐसी भूल न करें जिससे देश की स्वतंत्रता पर पुनः कोई संकट आए। साथ ही यह तानाशाहों को चेतावनी भी देती है कि हथियारों के बल पर कोई शासन सदा नहीं टिकता।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 28: कर चले हम फ़िदा — कैफ़ी आज़मी
const ch28 = `<section class="chapter-section" id="ch28" data-book="sparsh-kavya">
  <div class="chapter-header">
    <div class="ch-badge">28</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (काव्य खंड) — पाठ 6</div>
      <h2>कर चले हम फ़िदा</h2>
      <p>कैफ़ी आज़मी | देशभक्ति गीत (फिल्म 'हकीकत', 1962 भारत-चीन युद्ध) — अमर बलिदान, राष्ट्र रक्षा की शपथ और युवाओं को संदेश | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch28-q1">
    <div class="q-head" onclick="toggleQ('ch28-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">'सर हिमालय का हमने न झुकने दिया'—इस पंक्ति में हिमालय किस बात का प्रतीक है?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>हिमालय भारत के गौरव, मान-सम्मान, संप्रभुता और राष्ट्रीय स्वाभिमान का सर्वोच्च प्रतीक है। सैनिकों ने अपने प्राणों का बलिदान देकर और खून बहाकर भी बर्फीली चोटियों पर शत्रु को आगे नहीं बढ़ने दिया और भारत माता के मस्तक (हिमालय) को कभी झुकने नहीं दिया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">हिमालय को राष्ट्रीय मान-सम्मान व संप्रभुता का प्रतीक बताना</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">प्राण देकर भी भारत के मस्तक की रक्षा करने का भाव</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch28-q2">
    <div class="q-head" onclick="toggleQ('ch28-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">गीत में 'धरती को दुल्हन' क्यों कहा गया है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>भारतीय संस्कृति में दुल्हन को लाल जोड़े में सजाया जाता है और उसकी मर्यादा व सम्मान की रक्षा करना दूल्हे का परम धर्म होता है।</p>
          <p>सैनिकों ने युद्धभूमि में अपने लहू (रक्त) से भारत भूमि को लाल रंग से सराबोर कर दिया है मानो धरती ने लाल जोड़ा पहन लिया हो। जिस प्रकार एक सच्चा वीर अपनी दुल्हन के सम्मान पर कोई आँच नहीं आने देता, उसी प्रकार सैनिकों ने अपने प्राण देकर इस पावन धरती रूपी दुल्हन की अस्मिता की रक्षा की है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">रक्त द्वारा धरती के लाल होने (लाल जोड़ा) का रूपक</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">दुल्हन की तरह मातृभूमि की मर्यादा रक्षा का संकल्प</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch28-q3">
    <div class="q-head" onclick="toggleQ('ch28-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">'खींच दो अपने खूँ से ज़मीं पर लकीर, इस तरफ़ आने पाए न रावण कोई'—पंक्ति का भावार्थ स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>भावार्थ:</strong> यहाँ कवि ने रामायण के 'लक्ष्मण रेखा' और 'रावण' के पौराणिक संदर्भों का सशक्त प्रतीकात्मक प्रयोग किया है:</p>
          <ul>
            <li>सैनिक देश के नवयुवकों से आह्वान करते हैं कि वे सीमाओं पर अपने बलिदान के रक्त से ऐसी अभेद्य रक्षा-रेखा खींच दें, जिसे पार करने की हिम्मत किसी शत्रु में न हो।</li>
            <li>यहाँ 'रावण' देश पर बुरी नजर रखने वाले विदेशी आक्रांताओं (शत्रुओं) का प्रतीक है और 'सीता' भारत माता की प्रतीक है। यदि कोई भी विदेशी रावण भारत माता की ओर हाथ बढ़ाए, तो उसके हाथ काट दिए जाएँ।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">लक्ष्मण रेखा और रावण के प्रतीकात्मक अर्थ का स्पष्टीकरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मातृभूमि की अखंडता व शत्रु विनाश की प्रतिज्ञा</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Section -->
  <div class="cbq-section">
    <div class="cbq-header">
      <div class="cbq-badge">CBSE CBQs</div>
      <h3>योग्यता-आधारित उच्च स्तरीय प्रश्न (Competency-Based Questions)</h3>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 1: नागरिक उत्तरदायित्व (Civic Competency)</div>
      <div class="cbq-question">
        "अब तुम्हारे हवाले वतन साथियो" गीत केवल सीमा पर खड़े सैनिकों के लिए ही नहीं, बल्कि देश के प्रत्येक नागरिक के लिए एक संदेश है। स्पष्ट कीजिए कि शांति काल में आम नागरिक इस गीत की भावना को कैसे चरितार्थ कर सकते हैं?
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        देशभक्ति केवल सीमा पर गोली खाने तक सीमित नहीं है। शांति काल में नागरिक निम्नलिखित कार्यों से इस भावना को चरितार्थ कर सकते हैं:<br>
        1. संविधान और कानूनों का निष्ठापूर्वक पालन करना।<br>
        2. भ्रष्टाचार, सांप्रदायिकता और सामाजिक बुराइयों के विरुद्ध लड़ना।<br>
        3. राष्ट्रीय संपत्ति की रक्षा करना और देश के आर्थिक विकास में ईमानदारी से श्रम करना। देश को सशक्त बनाना ही शहीदों को सच्ची श्रद्धांजलि है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 29: आत्मत्राण — रवींद्रनाथ ठाकुर (अनुवाद: हजारी प्रसाद द्विवेदी)
const ch29 = `<section class="chapter-section" id="ch29" data-book="sparsh-kavya">
  <div class="chapter-header">
    <div class="ch-badge">29</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (काव्य खंड) — पाठ 7</div>
      <h2>आत्मत्राण</h2>
      <p>गुरुदेव रवींद्रनाथ ठाकुर (अनुवाद: आचार्य हजारी प्रसाद द्विवेदी) | प्रार्थना गीत — आत्मबल, स्वावलंबन, संकटों पर विजय और अडिग ईश्वर-विश्वास | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch29-q1">
    <div class="q-head" onclick="toggleQ('ch29-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">कवि ईश्वर से विपदाओं से मुक्ति की प्रार्थना क्यों नहीं करता?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि अन्य पारंपरिक भक्तों की तरह ईश्वर से दुख-दर्द, बीमारी या संकटों को दूर करने की भीख नहीं माँगता। वह एक स्वाभिमानी, कर्मठ और साहसी मनुष्य की तरह जीवन की चुनौतियों का सामना करना चाहता है।</p>
          <p>कवि केवल यह प्रार्थना करता है कि संकट के समय उसका आत्मबल कभी न टूटे, वह भयभीत न हो और अपने पौरुष व शक्ति के बल पर हर आपदा पर विजय प्राप्त कर सके। वह ईश्वर पर बोझ नहीं बनना चाहता।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पारंपरिक याचना से भिन्न स्वाभिमानी दृष्टिकोण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">विपदाओं पर स्वयं विजय पाने के आत्मबल की माँग</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch29-q2">
    <div class="q-head" onclick="toggleQ('ch29-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">'आत्मत्राण' शीर्षक का अर्थ स्पष्ट कीजिए। यह कविता सामान्य प्रार्थना गीतों से किस प्रकार भिन्न है?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>'आत्मत्राण' का अर्थ:</strong> 'आत्म' का अर्थ है स्वयं और 'त्राण' का अर्थ है रक्षा या मुक्ति। अर्थात 'अपनी रक्षा स्वयं करना' अथवा 'आत्म-रक्षा का संकल्प'।</p>
          <p><strong>सामान्य प्रार्थना गीतों से भिन्नता:</strong></p>
          <ul>
            <li><strong>याचनाहीन प्रार्थना:</strong> सामान्य प्रार्थना गीतों में भक्त ईश्वर से धन, सुख, स्वास्थ्य और संकटों से छुटकारा पाने की गुहार लगाता है। किंतु 'आत्मत्राण' में कवि किसी सांसारिक सुख या सांत्वना की याचना नहीं करता।</li>
            <li><strong>पौरुष और संघर्ष की प्रेरणा:</strong> कवि दुख को जीवन की स्वाभाविक परीक्षा मानकर उससे जूझने की आंतरिक शक्ति माँगता है।</li>
            <li><strong>अडिग निष्ठा:</strong> कवि कहता है कि जब संसार के सभी लोग मुझे धोखा दे दें और कोई सहायता न मिले, तब भी मेरा मन आपके प्रति संशय से न भरे। यह सर्वोच्च आत्मिक दृढ़ता का गीत है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">'आत्मत्राण' शब्द की सटीक व्युत्पत्ति व अर्थ</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सामान्य याचना गीतों और इस कविता के आत्मबल में अंतर</span><span class="marking-marks">2.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Section -->
  <div class="cbq-section">
    <div class="cbq-header">
      <div class="cbq-badge">CBSE CBQs</div>
      <h3>योग्यता-आधारित उच्च स्तरीय प्रश्न (Competency-Based Questions)</h3>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 1: अभिकथन और कारण (Assertion &amp; Reason)</div>
      <div class="cbq-question">
        <strong>अभिकथन (A):</strong> सुख के दिनों में भी कवि ईश्वर के प्रति कृतज्ञ बने रहना चाहता है।<br>
        <strong>कारण (R):</strong> प्रायः मनुष्य दुख में भगवान को याद करता है और सुख में भूल जाता है, किंतु कवि सुख के हर पल में ईश्वर का पावन मुख पहचानना चाहता है।<br>
        <strong>विकल्प:</strong><br>
        (क) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या करता है।<br>
        (ख) (A) और (R) दोनों सही हैं, परंतु (R), (A) की सही व्याख्या नहीं करता।<br>
        (ग) (A) सही है, परंतु (R) गलत है।<br>
        (घ) (A) गलत है, परंतु (R) सही है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>सही उत्तर: (क)</strong><br>
        <em>व्याख्या:</em> कवि कहता है—<em>"नतशिर होकर सुख के दिन में, तब मुख पहचानूँ छिन-छिन में।"</em> वह सुख में भी ईश्वर-विस्मृति के दोष से बचना चाहता है, अतः (R) बिल्कुल सही व्याख्या करता है।
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(outDir, 'ch23.html'), ch23, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch24.html'), ch24, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch25.html'), ch25, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch26.html'), ch26, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch27.html'), ch27, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch28.html'), ch28, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch29.html'), ch29, 'utf8');
console.log('Generated ch23.html to ch29.html (Sparsh Poetry complete)');
