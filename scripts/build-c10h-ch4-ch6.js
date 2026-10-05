const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c10h');

// CHAPTER 4: एक कहानी यह भी (मन्नू भंडारी)
const ch4 = `<section class="chapter-section" id="ch4" data-book="kshitij-gadh">
  <div class="chapter-header">
    <div class="ch-badge">4</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (गद्य खंड) — पाठ 4</div>
      <h2>एक कहानी यह भी</h2>
      <p>मन्नू भंडारी | आत्मकथ्य — नारी चेतना, स्वतंत्रता आंदोलन, पितृसत्ता से संघर्ष और वैचारिक विकास | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch4-q1">
    <div class="q-head" onclick="toggleQ('ch4-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">लेखिका के व्यक्तित्व पर किन-किन व्यक्तियों का किस रूप में प्रभाव पड़ा?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखिका मन्नू भंडारी के व्यक्तित्व के निर्माण में मुख्य रूप से दो व्यक्तियों का निर्णायक प्रभाव पड़ा:</p>
          <ul>
            <li><strong>पिता का प्रभाव:</strong> लेखिका के पिता ने उनके मन में हीनता की ग्रंथि (काले रंग और दुबलेपन के कारण) भी पैदा की, किंतु साथ ही उनमें देश-दुनिया के प्रति जागरूकता, राजनीतिक समझ और क्रांतिकारी विचार भरने का कार्य भी किया। पिता के शक्की स्वभाव और दंभ ने लेखिका के स्वाभिमान को धार दी।</li>
            <li><strong>हिंदी प्राध्यापिका शीला अग्रवाल का प्रभाव:</strong> कॉलेज में शीला अग्रवाल ने लेखिका को केवल साहित्य पढ़ना ही नहीं सिखाया, बल्कि श्रेष्ठ साहित्य को परखने की दृष्टि दी। उन्होंने लेखिका के रगों में बहते खून को लावे में बदल दिया और उन्हें स्वाधीनता संग्राम की सक्रिय भागीदारी के लिए प्रेरित किया।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पिता के वैचारिक प्रभाव व अंतर्विरोधों का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">शीला अग्रवाल द्वारा साहित्य रुचि व चेतना जगाने का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch4-q2">
    <div class="q-head" onclick="toggleQ('ch4-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">मन्नू भंडारी के पिता के स्वभाव की क्या विशेषताएँ थीं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>मन्नू भंडारी के पिता का व्यक्तित्व अंतर्विरोधों और जटिलताओं से भरा था:</p>
          <ul>
            <li><strong>विद्वान एवं संवेदनशील:</strong> वे अत्यंत कोमल हृदय, दरियादिल, सुशिक्षित और प्रतिष्ठित व्यक्ति थे। उन्होंने अंग्रेजी-हिंदी शब्दकोश का निर्माण किया था।</li>
            <li><strong>क्रोधी और शक्की:</strong> आर्थिक झटकों और अपनों द्वारा दिए गए धोखों के कारण वे अत्यधिक क्रोधी, अहंवादी और संशयवादी बन गए थे।</li>
            <li><strong>विरोधाभासी मानसिकता:</strong> वे एक ओर आधुनिक सोच रखते हुए बेटी को राजनीति व बहसों में शामिल करना चाहते थे, लेकिन दूसरी ओर परंपरावादी होकर उसे चारदीवारी के दायरे में ही रखना चाहते थे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">विद्वत्ता व प्रतिष्ठा के साथ शक्की स्वभाव का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">रूढ़िवादी व प्रगतिशील विचारों के द्वंद्व का वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch4-q3">
    <div class="q-head" onclick="toggleQ('ch4-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">लेखिका के पिता ने रसोई को 'भटियारखाना' कहकर क्यों संबोधित किया?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखिका के पिता रसोई को 'भटियारखाना' इसलिए कहते थे क्योंकि उनका मानना था कि रसोई में लगातार काम करने से व्यक्ति की बौद्धिक क्षमता, प्रतिभा और रचनात्मक ऊर्जा नष्ट हो जाती है। वे अपनी बेटियों को केवल चूल्हे-चौके तक सीमित नहीं देखना चाहते थे, बल्कि देश और समाज की बौद्धिक बहसों में सक्रिय भागीदार बनाना चाहते थे।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">प्रतिभा व क्षमता नष्ट होने के तर्क का उल्लेख</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">बौद्धिक विकास को प्राथमिकता देने का भाव</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch4-q4">
    <div class="q-head" onclick="toggleQ('ch4-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">वह कौन-सी घटना थी जिसके बाद लेखिका को न अपनी आँखों पर विश्वास हो पाया और न अपने कानों पर?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>जब कॉलेज की प्रिंसिपल ने पत्र भेजकर लेखिका के पिता को कॉलेज बुलाया और शिकायत की कि मन्नू के एक इशारे पर लड़कियाँ क्लास छोड़ हड़ताल कर देती हैं, तो पिता क्रोधित होकर घर से निकले थे। लेखिका डरकर पड़ोस में बैठ गई कि घर लौटते ही पिता उसे पीटेंगे।</p>
          <p>किंतु जब पिता कॉलेज से लौटे, तो वे बेहद खुश और गर्व से भरे हुए थे। उन्होंने कहा—"पूरे कॉलेज पर मेरी बेटी का दबदबा है! यह तो स्वाधीनता आंदोलन की पुकार है, इसे कोई कैसे रोक सकता है!" पिता का यह बदला हुआ रूप देखकर लेखिका को न अपनी आँखों पर विश्वास हुआ और न अपने कानों पर।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">प्रिंसिपल की शिकायत और पिता के प्रारंभिक क्रोध का वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पिता के गर्व और प्रशंसा भरे व्यवहार पर लेखिका का आश्चर्य</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch4-q5">
    <div class="q-head" onclick="toggleQ('ch4-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">लेखिका की अपने पिता से वैचारिक टकराहट को अपने शब्दों में लिखिए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखिका और उनके पिता में गहरी वैचारिक टकराहट थी, जो दोनों के विचारों के अंतर्विरोध से उपजी थी:</p>
          <ul>
            <li><strong>घर की सीमा बनाम खुले मैदान की स्वतंत्रता:</strong> पिता चाहते थे कि लेखिका घर में बैठकर राजनीतिक चर्चाएँ सुने और चिंतन करे, किंतु लेखिका नारों, जुलूसों और हड़तालों में सड़कों पर उतरकर सक्रिय क्रांति करना चाहती थी।</li>
            <li><strong>समाज की प्रतिष्ठा की चिंता:</strong> पिता दकियानूसी समाज और पड़ोसियों की टीका-टिप्पणियों से भयभीत हो जाते थे, जबकि लेखिका सामाजिक बंधनों की परवाह किए बिना अपनी राह स्वयं चुनना चाहती थी।</li>
            <li><strong>अहं का टकराव:</strong> पिता का अत्यधिक अहंवादी होना और लेखिका का विद्रोही स्वाभिमान दोनों में निरंतर द्वंद्व उत्पन्न करता था।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">घर की चारदीवारी बनाम सक्रिय भागीदारी का द्वंद्व</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सामाजिक भय बनाम विद्रोही स्वाभिमान का विश्लेषण</span><span class="marking-marks">2.0 अंक</span></div>
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
        <strong>अभिकथन (A):</strong> मन्नू भंडारी के पिता आधुनिक विचारों के समर्थक होते हुए भी पूरी तरह परंपरावादी थे।<br>
        <strong>कारण (R):</strong> वे चाहते थे कि मन्नू देश-दुनिया की राजनीतिक बहसें सुने, परंतु सड़कों पर लड़कों के साथ हड़ताल व नारेबाज़ी न करे।<br>
        <strong>विकल्प:</strong><br>
        (क) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या करता है।<br>
        (ख) (A) और (R) दोनों सही हैं, परंतु (R), (A) की सही व्याख्या नहीं करता।<br>
        (ग) (A) सही है, परंतु (R) गलत है।<br>
        (घ) (A) गलत है, परंतु (R) सही है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>सही उत्तर: (क)</strong><br>
        <em>व्याख्या:</em> पिता के व्यक्तित्व में विरोधाभास था—वे नारी प्रगति तो चाहते थे, लेकिन सामाजिक मर्यादा व प्रतिष्ठा की रूढ़िवादी बेड़ियों से मुक्त नहीं हो सके थे। अतः (R) बिल्कुल सही व्याख्या करता है।
      </div>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 2: मूल्य-आधारित चिंतन प्रश्न (Value-Based Question)</div>
      <div class="cbq-question">
        'एक कहानी यह भी' पाठ के आधार पर स्पष्ट कीजिए कि एक शिक्षक (जैसे शीला अग्रवाल) किसी विद्यार्थी की दिशा और सोच को किस प्रकार रूपांतरित कर सकता है?
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        एक आदर्श शिक्षक केवल पाठ्यपुस्तकें नहीं पढ़ाता, बल्कि विद्यार्थी में छिपी हुई असीम संभावनाओं को जाग्रत करता है। शीला अग्रवाल ने मन्नू भंडारी को मात्र कक्षा का ज्ञान नहीं दिया, बल्कि श्रेष्ठ साहित्य का मर्म समझाया, उनमें स्वतंत्र चिंतन की ज्वाला जलाई और उन्हें स्वाधीनता संघर्ष में सक्रिय भूमिका निभाने का नैतिक साहस प्रदान किया। शिक्षक एक प्रकाश स्तंभ की तरह छात्र की सुप्त चेतना को सामाजिक उत्तरदायित्व में बदल देता है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 5: नौबतखाने में इबादत (यतींद्र मिश्र)
const ch5 = `<section class="chapter-section" id="ch5" data-book="kshitij-gadh">
  <div class="chapter-header">
    <div class="ch-badge">5</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (गद्य खंड) — पाठ 5</div>
      <h2>नौबतखाने में इबादत</h2>
      <p>यतींद्र मिश्र | व्यक्तिचित्र — उस्ताद बिस्मिल्ला खाँ, शहनाई वादन, काशी की गंगा-जमुनी संस्कृति और साधना | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch5-q1">
    <div class="q-head" onclick="toggleQ('ch5-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">शहनाई की दुनिया में डुमराँव को क्यों याद किया जाता है?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>शहनाई की दुनिया में डुमराँव को दो प्रमुख कारणों से याद किया जाता है:</p>
          <ol>
            <li><strong>बिस्मिल्ला खाँ का जन्मस्थान:</strong> भारत रत्न से सम्मानित शहनाई के अद्वितीय वादक उस्ताद बिस्मिल्ला खाँ का जन्म डुमराँव (बिहार) में हुआ था।</li>
            <li><strong>नरकट घास की उपलब्धता:</strong> शहनाई बजाने के लिए जिस 'रीड' की आवश्यकता होती है, वह अंदर से पोली घास 'नरकट' डुमराँव में सोन नदी के किनारों पर ही प्रचुर मात्रा में पाई जाती है। इसके बिना शहनाई का वादन संभव नहीं है।</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बिस्मिल्ला खाँ के जन्मस्थल का उल्लेख</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सोन नदी किनारे नरकट घास की रीड का महत्व</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch5-q2">
    <div class="q-head" onclick="toggleQ('ch5-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">बिस्मिल्ला खाँ को शहनाई की 'मंगलध्वनि का नायक' क्यों कहा गया है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>भारतीय परंपरा में शहनाई विवाह, धार्मिक अनुष्ठान और मांगलिक अवसरों पर बजाई जाने वाली अत्यंत पावन ध्वनि है। बिस्मिल्ला खाँ को इसका नायक इसलिए कहा गया है क्योंकि:</p>
          <ul>
            <li>उन्होंने शहनाई को लोक-वाद्यों के सीमित घेरे से निकालकर शास्त्रीय संगीत के सर्वोच्च मंचों पर प्रतिष्ठित किया।</li>
            <li>वे लगभग अस्सी वर्षों तक अखंड साधना के साथ शहनाई के माध्यम से सुरीली व मंगलकारी सुर-सृष्टि करते रहे।</li>
            <li>उनकी शहनाई के सुरों में ईश्वर की इबादत, विनम्रता और शांति का वास था, जो हर श्रोता को पवित्र आनंद से भर देता था।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शहनाई को शास्त्रीय मंच पर प्रतिष्ठित करने का योगदान</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">अखंड साधना व सुरों की आध्यात्मिक पवित्रता</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch5-q3">
    <div class="q-head" onclick="toggleQ('ch5-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">सुषिर-वाद्यों से क्या अभिप्राय है? शहनाई को 'सुषिर वाद्यों में शाह' की उपाधि क्यों दी गई होगी?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>सुषिर-वाद्य:</strong> वे वाद्य यंत्र जो फूँक मारकर बजाए जाते हैं और जिनमें छिद्रों (नाड़ियों) के माध्यम से सुर निकाले जाते हैं, उन्हें 'सुषिर-वाद्य' कहा जाता है; जैसे—बाँसुरी, शहनाई, शंख आदि।</p>
          <p><strong>'शाह-ने' (शाह) की उपाधि:</strong> अरब देश में फूँककर बजाए जाने वाले वाद्यों को 'नय' कहते हैं। शहनाई की बनावट अत्यंत सुरीली, मधुर और कर्णप्रिय होती है। सभी सुषिर वाद्यों में इसकी ध्वनि सर्वाधिक मनमोहक और राग-रागिनियों को प्रकट करने में सबसे समर्थ है, इसलिए इसे वाद्यों का राजा यानी 'शाह-ने' या 'शहनाई' कहा गया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सुषिर-वाद्य की सटीक परिभाषा</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">'शाह-ने' शब्द की व्युत्पत्ति और मधुरता का तर्क</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch5-q4">
    <div class="q-head" onclick="toggleQ('ch5-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">आशय स्पष्ट कीजिए— "फ़टा सुर न बख्शें। लुंगिया का क्या है, आज फटी है, तो कल सिल जाएगी..."</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>आशय:</strong> जब बिस्मिल्ला खाँ की शिष्या ने उन्हें फटी हुई तहमत (लुंगी) पहनने पर टोका और कहा कि अब आपको भारत रत्न मिल चुका है, तो खाँ साहब ने यह मार्मिक उत्तर दिया।</p>
          <p>इस कथन का गहरा भाव यह है कि खाँ साहब के लिए बाह्य भौतिक चमक-दमक, कपड़े और मान-सम्मान का कोई मूल्य नहीं था। उनके लिए कला (सुर) की साधना सर्वोपरि थी। वे ईश्वर से केवल यही प्रार्थना करते थे कि उनकी कला में कभी कोई खोट (फटा सुर) न आए, क्योंकि वस्त्र तो साधारण वस्तु है जो फटने पर सिली जा सकती है, किंतु यदि साधना और सुर में दरार आ गई तो उसे कभी सुधारा नहीं जा सकता।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भौतिक ऐश्वर्य की तुलना में कला साधना की प्राथमिकता</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">खाँ साहब की निरहंकारिता व सुर-समर्पण का भाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch5-q5">
    <div class="q-head" onclick="toggleQ('ch5-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">बिस्मिल्ला खाँ के व्यक्तित्व की कौन-कौन सी विशेषताओं ने आपको सर्वाधिक प्रभावित किया?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>उस्ताद बिस्मिल्ला खाँ के व्यक्तित्व की निम्नलिखित विशेषताओं ने हमें गहराई से प्रभावित किया:</p>
          <ul>
            <li><strong>सादा जीवन और उच्च विचार:</strong> भारत रत्न प्राप्त करने के बाद भी वे फटी लुंगी पहनने में संकोच नहीं करते थे; उनमें तनिक भी अहंकार नहीं था।</li>
            <li><strong>सांप्रदायिक सौहार्द के प्रतीक:</strong> वे सच्चे मुस्लिम होकर नमाज़ अदा करते थे, तो साथ ही काशी विश्वनाथ और बालाजी मंदिर के प्रति उनकी अटूट श्रद्धा थी। वे भारत की साझी गंगा-जमुनी संस्कृति के जीवंत प्रतीक थे।</li>
            <li><strong>अविराम रियाज़ व समर्पण:</strong> अस्सी वर्ष की आयु में भी वे स्वयं को एक नौसिखिया मानकर ईश्वर से सच्चे सुर की नेमत माँगते थे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सादगी और विनम्रता का वर्णन</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">धार्मिक सहिष्णुता व गंगा-जमुनी समन्वय</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">निरंतर सीखने की लगन व रियाज़</span><span class="marking-marks">1.0 अंक</span></div>
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
      <div class="cbq-type">CBQ 1: केस-आधारित विश्लेषण (Case-Based Competency)</div>
      <div class="cbq-question">
        "काशी संस्कृति की पाठशाला है। शास्त्रों में आनंदकानन के नाम से पूजित। काशी में कलाधर हनुमान व नृत्य विश्वनाथ हैं। काशी में बिस्मिल्ला खाँ हैं।" प्रस्तुत कथन के आलोक में स्पष्ट कीजिए कि बिस्मिल्ला खाँ काशी के सांस्कृतिक समन्वय के प्रतीक कैसे बने?
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        बिस्मिल्ला खाँ भारत की साझी संस्कृति के साकार रूप थे। वे पाँचों वक्त नमाज़ पढ़ते थे, मुहर्रम में नौबत बजाकर रोते थे, और वहीं दूसरी ओर काशी विश्वनाथ और संकटमोचन मंदिर की ड्योढ़ी पर बैठकर शहनाई बजाते थे। जब भी काशी से बाहर जाते, तो सबसे पहले विश्वनाथ जी की दिशा में मुँह करके शहनाई का पहला सुर अर्पित करते थे। उनका यह आचरण सिद्ध करता है कि संगीत और संस्कृति किसी मजहब की सीमाओं में नहीं बँधती।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 6: संस्कृति (भदंत आनंद कौसल्यायन)
const ch6 = `<section class="chapter-section" id="ch6" data-book="kshitij-gadh">
  <div class="chapter-header">
    <div class="ch-badge">6</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (गद्य खंड) — पाठ 6</div>
      <h2>संस्कृति</h2>
      <p>भदंत आनंद कौसल्यायन | विचारात्मक निबंध — सभ्यता और संस्कृति में अंतर, मानव कल्याण, त्याग और वैज्ञानिक दृष्टि | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch6-q1">
    <div class="q-head" onclick="toggleQ('ch6-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">लेखक की दृष्टि में 'सभ्यता' और 'संस्कृति' की सही समझ अब तक क्यों नहीं बन पाई है?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक के अनुसार 'सभ्यता' और 'संस्कृति' ऐसे शब्द हैं जिनका उपयोग सबसे अधिक होता है, किंतु इन्हें सबसे कम समझा गया है। लोग इन दोनों शब्दों को प्रायः एक ही अर्थ में मिला देते हैं और इनके साथ 'भौतिक' या 'आध्यात्मिक' जैसे विशेषण जोड़कर इनके मूल अर्थ को और अधिक भ्रामक व उलझावपूर्ण बना देते हैं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">दोनों शब्दों के घालमेल और विशेषणों द्वारा उत्पन्न भ्रम का उल्लेख</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch6-q2">
    <div class="q-head" onclick="toggleQ('ch6-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">आग की खोज एक बहुत बड़ी खोज क्यों मानी जाती है? इस खोज के पीछे रही प्रेरणा के मुख्य स्रोत क्या रहे होंगे?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>बड़ी खोज का कारण:</strong> आग की खोज ने मानव सभ्यता को अंधकार और कच्चे भोजन के आदिम युग से निकालकर प्रकाश, सुरक्षा और पके हुए भोजन के युग में पहुँचाया। इसने मनुष्य को अन्य प्राणियों से श्रेष्ठ बनाया।</p>
          <p><strong>प्रेरणा के मुख्य स्रोत:</strong></p>
          <ul>
            <li>पेट की ज्वाला (भूख) शांत करने और भोजन को सुपाच्य बनाने की आवश्यकता।</li>
            <li>अंधेरे और जंगली हिंसक पशुओं के भय से आत्मरक्षा की इच्छा।</li>
            <li>शीत व ठंड से बचाव के लिए ऊष्मा (गर्मी) प्राप्त करने की चाहत।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">मानव जीवन में आग के क्रांतिकारी प्रभाव का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भूख, भय व ठंड से बचाव की प्रेरणा का स्पष्टीकरण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch6-q3">
    <div class="q-head" onclick="toggleQ('ch6-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">वास्तविक अर्थों में 'संस्कृत व्यक्ति' किसे कहा जा सकता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक के अनुसार वास्तविक अर्थों में 'संस्कृत व्यक्ति' वह है जो अपनी मूल प्रज्ञा, बुद्धि और योग्यता के बल पर किसी सर्वथा नए तथ्य या वस्तु का पहली बार आविष्कार करता है। जैसे—जिसने पहली बार आग की खोज की या जिसने गुरुत्वाकर्षण का सिद्धांत खोजा (न्यूटन), वे संस्कृत व्यक्ति थे। केवल पूर्वजों की खोजों का उपभोग करने वाला व्यक्ति संस्कृत नहीं, बल्कि केवल 'सभ्य' होता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">अपनी प्रज्ञा से नई वस्तु का आविष्कार करने का लक्षण</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">संस्कृत और सभ्य के बीच मौलिक अंतर</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch6-q4">
    <div class="q-head" onclick="toggleQ('ch6-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">न्यूटन को 'संस्कृत मानव' कहा गया, लेकिन उनके बाद के वैज्ञानिकों को 'सभ्य' कहा गया, 'संस्कृत' नहीं—क्यों?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>न्यूटन ने अपनी मौलिक प्रतिभा और जिज्ञासा से गुरुत्वाकर्षण के सिद्धांत का सबसे पहले आविष्कार किया था, इसलिए वे 'संस्कृत मानव' थे। आज का भौतिक विज्ञान का विद्यार्थी न्यूटन से कहीं अधिक नियमों और गूढ़ रहस्यों को जानता है, परंतु वह ज्ञान उसने स्वयं अपनी मौलिक प्रज्ञा से नहीं खोजा, बल्कि न्यूटन और अन्य पूर्वजों से विरासत में पाया है। अतः आज का विद्यार्थी या वैज्ञानिक न्यूटन से अधिक 'सभ्य' तो हो सकता है, परंतु 'संस्कृत' नहीं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">न्यूटन द्वारा मौलिक खोज का तर्क</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">परवर्ती वैज्ञानिकों द्वारा विरासत में ज्ञान पाने का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch6-q5">
    <div class="q-head" onclick="toggleQ('ch6-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">'मानव संस्कृति एक अविभाज्य वस्तु है'—स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>मानव संस्कृति का मूल तत्व है—कल्याण की भावना, परोपकार, त्याग और सत्य की खोज। इसमें ऐसा कोई भी अंश नहीं है जो मनुष्य को मनुष्य से अलग करे। जब तक मनुष्य का चिंतन और कर्म समस्त मानव जाति के कल्याण से जुड़ा है, तब तक वह संस्कृति है। जब संस्कृति को संकीर्ण मजहब, जाति या राष्ट्र की सीमाओं में बाँटकर दूसरों के विनाश के लिए इस्तेमाल किया जाता है, तो वह संस्कृति नहीं बल्कि 'असंस्कृति' बन जाती है। अतः सच्ची संस्कृति अखंड और अविभाज्य है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कल्याण भावना और सार्वभौमिकता का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">संस्कृति और असंस्कृति का भेद व अखंडता का निष्कर्ष</span><span class="marking-marks">1.5 अंक</span></div>
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
        <strong>अभिकथन (A):</strong> जो आविष्कार मानव कल्याण की भावना से जुड़े नहीं होते, वे संस्कृति का परिणाम नहीं बल्कि असंस्कृति हैं।<br>
        <strong>कारण (R):</strong> परमाणु बम और संहारक अस्त्रों का निर्माण आत्म-विनाश का साधन होने के कारण अप-संस्कृति को जन्म देता है।<br>
        <strong>विकल्प:</strong><br>
        (क) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या करता है।<br>
        (ख) (A) और (R) दोनों सही हैं, परंतु (R), (A) की सही व्याख्या नहीं करता।<br>
        (ग) (A) सही है, परंतु (R) गलत है।<br>
        (घ) (A) गलत है, परंतु (R) सही है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>सही उत्तर: (क)</strong><br>
        <em>व्याख्या:</em> लेखक के अनुसार संस्कृति का मूल तत्व 'कल्याण' है। जब बुद्धि और विज्ञान का प्रयोग मानव जाति के विनाश के लिए होता है, तो वह असंस्कृति कहलाता है, अतः (R) बिल्कुल सही व्याख्या करता है।
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(outDir, 'ch4.html'), ch4, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch5.html'), ch5, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch6.html'), ch6, 'utf8');
console.log('Generated ch4.html, ch5.html, ch6.html');
