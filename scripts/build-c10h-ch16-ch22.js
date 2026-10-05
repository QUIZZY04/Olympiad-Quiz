const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c10h');

// CHAPTER 16: बड़े भाई साहब — प्रेमचंद
const ch16 = `<section class="chapter-section" id="ch16" data-book="sparsh-gadh">
  <div class="chapter-header">
    <div class="ch-badge">16</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (गद्य खंड) — पाठ 1</div>
      <h2>बड़े भाई साहब</h2>
      <p>प्रेमचंद | मनोवैज्ञानिक कहानी — शिक्षा प्रणाली पर व्यंग्य, रटंत विद्या बनाम व्यावहारिक अनुभव और भ्रातृ-प्रेम | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch16-q1">
    <div class="q-head" onclick="toggleQ('ch16-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">छोटे भाई ने अपनी पढ़ाई और खेलकूद के बीच किस प्रकार का टाइम-टेबल बनाया और उसका क्या परिणाम हुआ?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>टाइम-टेबल का निर्माण:</strong> बड़े भाई साहब की डाँट-फटकार सुनकर छोटे भाई ने पढ़ाई के लिए एक अत्यंत कठोर समय-सारणी बनाई, जिसमें सुबह 6 बजे से रात 11 बजे तक हर विषय (अंग्रेजी, गणित, इतिहास आदि) के लिए समय निर्धारित था। किंतु उस टाइम-टेबल में खेलकूद के लिए एक मिनट का भी समय नहीं रखा गया था।</p>
          <p><strong>परिणाम:</strong> टाइम-टेबल बनाना अलग बात है और उस पर अमल करना दूसरी। खेल के मैदान की सुखद हरियाली, फुटबॉल की उछल-कूद और कबड्डी के दाँव-पेंच उसे बरबस खींच ले जाते थे। पहले ही दिन से टाइम-टेबल की धज्जियाँ उड़ने लगीं और वह उसका पालन नहीं कर सका।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कठोर समय-सारणी व खेल के अभाव का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मैदान के आकर्षण व क्रियान्वयन की विफलता का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch16-q2">
    <div class="q-head" onclick="toggleQ('ch16-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">बड़े भाई साहब दिमाग को आराम देने के लिए क्या-क्या करते थे?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>बड़े भाई साहब दिन-रात लगातार पढ़ते रहते थे। जब उनका दिमाग थक जाता था, तो वे अपनी कॉपियों और किताबों के हाशियों पर चिड़ियों, कुत्तों और बिल्लियों की तस्वीरें बनाते थे। कभी-कभी वे एक ही शब्द या नाम को दस-बीस बार लिखते थे या ऐसे बेमेल शेरों और तुकबंदियों की रचना करते थे जिनका कोई सिर-पैर नहीं होता था।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कॉपियों पर जानवरों के चित्र बनाना</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">निरर्थक शब्दों की तुकबंदियाँ व पुनरावृत्ति</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch16-q3">
    <div class="q-head" onclick="toggleQ('ch16-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">बड़े भाई साहब की डाँट-फटकार अगर न मिलती, तो क्या छोटा भाई कक्षा में अव्वल आता? अपने विचार दीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>छोटा भाई स्वाभाविक रूप से कुशाग्र बुद्धि का था, किंतु वह खेलकूद में अधिक मस्त रहता था। यदि बड़े भाई साहब की कड़ी निगरानी, डाँट-फटकार और नैतिक अंकुश न होता, तो वह पढ़ाई के प्रति लापरवाह हो जाता और अपनी प्रतिभा को व्यर्थ गँवा बैठता।</p>
          <p>बड़े भाई साहब का भय ही था जो उसे खेल से वापस खींचकर पढ़ने की मेज पर लाता था। अतः यह निश्चित है कि छोटे भाई के कक्षा में अव्वल आने में बड़े भाई साहब की सतर्कता और डाँट-फटकार की अत्यंत निर्णायक भूमिका थी।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">छोटे भाई की चंचलता व खेलप्रियता का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">बड़े भाई के अंकुश व मार्गदर्शन का सकारात्मक प्रभाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch16-q4">
    <div class="q-head" onclick="toggleQ('ch16-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">बड़े भाई साहब पाठ में लेखक ने समूची शिक्षा प्रणाली पर क्या तीखा व्यंग्य किया है?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>प्रेमचंद जी ने तत्कालीन औपनिवेशिक शिक्षा व्यवस्था की विसंगतियों पर गंभीर कटाक्ष किया है:</p>
          <ul>
            <li><strong>रटंत विद्या पर जोर:</strong> शिक्षा प्रणाली विद्यार्थियों को जीवन की व्यावहारिक सूझबूझ देने के बजाय अंधी रटाई पर मजबूर करती है (जैसे—ज्यामिति में 'अ ब ज' की जगह 'अ ज ब' लिखने पर शून्य अंक देना, दर्जनों हेनरी और जेम्स के इतिहास को रटना)।</li>
            <li><strong>अव्यावहारिक पाठ्यक्रम:</strong> समय की पाबंदी पर चार पन्नों का निबंध लिखने को कहा जाता है और साथ ही यह भी कहा जाता है कि संक्षेप में लिखो। यह विरोधाभासी है।</li>
            <li><strong>डिग्री बनाम व्यावहारिक बुद्धि:</strong> लेखक दर्शाते हैं कि किताबें रटने से केवल परीक्षा पास की जा सकती है, किंतु जीवन जीने की वास्तविक बुद्धि और तजुर्बा दुनिया को देखने और बुजुर्गों के अनुभवों से मिलता है (जैसे—अम्मा और दादा का उदाहरण)।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">रटंत प्रणाली व ज्यामिति/इतिहास के उदाहरण</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">किताबी ज्ञान बनाम व्यावहारिक अनुभव का वैचारिक विश्लेषण</span><span class="marking-marks">2.0 अंक</span></div>
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
      <div class="cbq-type">CBQ 1: केस-आधारित चरित्र विश्लेषण (Character Competency)</div>
      <div class="cbq-question">
        "मैं तुमसे पाँच साल बड़ा हूँ और हमेशा रहूँगा। मुझे दुनिया का और जिंदगी का जो तजुर्बा है, तुम उसकी बराबरी नहीं कर सकते।" बड़े भाई साहब के इस कथन के आलोक में स्पष्ट कीजिए कि क्या केवल परीक्षा में पास होना ही वास्तविक योग्यता का पैमाना है?
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        नहीं, केवल परीक्षा में उत्तीर्ण होकर डिग्री हासिल कर लेना वास्तविक योग्यता का प्रमाण नहीं है। किताबी ज्ञान हमें केवल सूचनाएँ देता है, जबकि जीवन का यथार्थ अनुभव, संकटों से जूझने का सामर्थ्य, व्यावहारिक विवेक और नैतिक मूल्य बुजुर्गों के अनुभवों से आते हैं। बड़े भाई साहब फेल होने के बाद भी अपने जीवन-तजुर्बे और बड़प्पन के कारण छोटे भाई के सच्चे मार्गदर्शक बने रहते हैं।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 17: डायरी का एक पन्ना — सीताराम सेकसरिया
const ch17 = `<section class="chapter-section" id="ch17" data-book="sparsh-gadh">
  <div class="chapter-header">
    <div class="ch-badge">17</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (गद्य खंड) — पाठ 2</div>
      <h2>डायरी का एक पन्ना</h2>
      <p>सीताराम सेकसरिया | दैनंदिनी — 26 जनवरी 1931, कोलकाता में स्वतंत्रता दिवस उत्सव, पुलिस दमन और नारी शक्ति | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch17-q1">
    <div class="q-head" onclick="toggleQ('ch17-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">26 जनवरी 1931 के दिन को अमर बनाने के लिए क्या-क्या तैयारियाँ की गईं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कोलकाता में 26 जनवरी 1931 को प्रथम स्वतंत्रता दिवस की वर्षगाँठ मनाने के लिए अभूतपूर्व तैयारियाँ की गईं:</p>
          <ul>
            <li>प्रचार-प्रसार पर केवल दो हजार रुपये खर्च किए गए और घर-घर जाकर लोगों को समझाया गया।</li>
            <li>शहर के अधिकांश मकानों पर राष्ट्रीय ध्वज फहराया गया और कई मकानों को इस तरह सजाया गया मानो स्वतंत्रता मिल चुकी हो।</li>
            <li>बड़ा बाज़ार के प्रायः सभी मकानों पर तिरंगा लहरा रहा था। कलकत्ता के प्रत्येक भाग में झंडे लगाए गए थे और जन-जन में भारी उत्साह था।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">प्रचार-प्रसार व जन-संपर्क का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मकानों पर ध्वजारोहण व सजावट का वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch17-q2">
    <div class="q-head" onclick="toggleQ('ch17-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">सुभाष बाबू के जुलूस में स्त्री समाज की क्या भूमिका रही?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>सुभाष चंद्र बोस के इस ऐतिहासिक आंदोलन में नारी शक्ति ने अभूतपूर्व शौर्य और त्याग का प्रदर्शन किया:</p>
          <ul>
            <li>सैकड़ों स्त्रियाँ पुलिस की लाठियों और घुड़सवार पुलिस के घेरे की परवाह किए बिना मोनुमेंट की सीढ़ियों पर चढ़ गईं और राष्ट्रीय झंडा फहरा दिया।</li>
            <li>जानकी देवी, मदालसा जैसी प्रमुख महिलाओं ने जुलूस का नेतृत्व किया और लाठीचार्ज के बावजूद डटी रहीं।</li>
            <li>लगभग 105 स्त्रियों को गिरफ्तार करके लालबाजार लॉकअप भेजा गया। भारतीय स्वाधीनता संग्राम में महिलाओं की इतनी बड़ी और निर्भीक भागीदारी कोलकाता में पहली बार देखी गई।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">मोनुमेंट पर झंडा फहराने व लाठीचार्ज सहने का शौर्य</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सामूहिक गिरफ्तारी व ऐतिहासिक नारी चेतना का प्रभाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch17-q3">
    <div class="q-head" onclick="toggleQ('ch17-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">'कलकत्ता के नाम पर कलंक था कि यहाँ काम नहीं हो रहा है'—उस कलंक को किस प्रकार धो दिया गया?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>देशभर में यह आम धारणा बन गई थी कि स्वतंत्रता आंदोलन में कलकत्ता (बंगाल) के लोग बहुत कम योगदान दे रहे हैं।</p>
          <p>किंतु 26 जनवरी 1931 को जिस प्रकार बंगाल और मारवाड़ी समाज के पुरुषों और विशेषकर महिलाओं ने पुलिस कमिश्नर के नोटिस की अवहेलना करते हुए पुलिस की बर्बर लाठियाँ सहीं, खून बहाया और जेलों को भर दिया, उसने यह सिद्ध कर दिया कि कलकत्ता किसी से पीछे नहीं है। इस सामूहिक बलिदान और अभूतपूर्व क्रांति ने कलकत्ता के माथे पर लगे उस कलंक को पूरी तरह धो दिया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कलकत्ता पर लगे कथित कलंक का स्पष्टीकरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सामूहिक त्याग, लाठीचार्ज व जेल भरो द्वारा कलंक मिटाने का तर्क</span><span class="marking-marks">1.5 अंक</span></div>
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
      <div class="cbq-type">CBQ 1: ऐतिहासिक दस्तावेज़ीकरण (Competency Question)</div>
      <div class="cbq-question">
        डायरी विधा की क्या विशेषताएँ होती हैं? 'डायरी का एक पन्ना' पाठ किस प्रकार इतिहास का एक सजीव और विश्वसनीय साक्ष्य प्रस्तुत करता है?
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        डायरी विधा में लेखक प्रतिदिन की घटनाओं को अपनी निजी अनुभूति, यथार्थपरक दृष्टि और तात्कालिक प्रभाव के साथ दर्ज करता है। इसमें कोई बनावटीपन या बाद में गढ़ा गया इतिहास नहीं होता। सीताराम सेकसरिया स्वयं इस आंदोलन के प्रत्यक्षदर्शी और सक्रिय सहभागी थे। उनके द्वारा दर्ज किया गया समय, स्थान, लाठीचार्ज की क्रूरता और स्त्रियों की गिरफ्तारी का ब्यौरा इसे स्वतंत्रता संग्राम का एक जीवंत, प्रामाणिक और ऐतिहासिक दस्तावेज बनाता है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 18: तताँरा-वामीरो कथा — लीलाधर मंडलोई
const ch18 = `<section class="chapter-section" id="ch18" data-book="sparsh-gadh">
  <div class="chapter-header">
    <div class="ch-badge">18</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (गद्य खंड) — पाठ 3</div>
      <h2>तताँरा-वामीरो कथा</h2>
      <p>लीलाधर मंडलोई | लोककथा — अंडमान-निकोबार द्वीप समूह, रूढ़िवादी परंपराओं का विरोध, प्रेम की पावनता और बलिदान | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch18-q1">
    <div class="q-head" onclick="toggleQ('ch18-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">तताँरा की तलवार के बारे में लोगों का क्या मत था?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>तताँरा अपनी कमर में सदैव लकड़ी की एक तलवार बाँधे रहता था। यद्यपि वह लकड़ी की तलवार थी, फिर भी लोगों का यह दृढ़ विश्वास था कि उस तलवार में कोई विलक्षण दैवीय और अद्भुत शक्ति है। तताँरा उस तलवार को कभी किसी के सामने म्यान से बाहर नहीं निकालता था, किंतु उसके साहसिक कारनामों के कारण लोग उस तलवार को चमत्कारी मानते थे।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">लकड़ी की तलवार और दैवीय शक्ति के लोक-विश्वास का उल्लेख</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch18-q2">
    <div class="q-head" onclick="toggleQ('ch18-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">तताँरा और वामीरो के विवाह में क्या मुख्य अड़चन थी?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>तताँरा और वामीरो के विवाह में द्वीप की प्राचीन रूढ़िवादी सामाजिक परंपरा सबसे बड़ी बाधा थी:</p>
          <ul>
            <li>नियम के अनुसार विवाह केवल उसी युवक-युवती के बीच हो सकता था जो एक ही गाँव के रहने वाले हों। दूसरे गाँव के युवक से विवाह संबंध पूर्णतः वर्जित था।</li>
            <li>तताँरा 'पासा' गाँव का रहने वाला था, जबकि वामीरो 'लपाती' गाँव की थी। दोनों अलग-अलग गाँवों के होने के कारण सामाजिक रीति-रिवाजों के अनुसार उनका विवाह असंभव था।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">एक ही गाँव में विवाह की रूढ़िवादी परंपरा का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">तताँरा और वामीरो के भिन्न गाँवों (पासा व लपाती) का संदर्भ</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch18-q3">
    <div class="q-head" onclick="toggleQ('ch18-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">रूढ़ियाँ जब बंधन बन बोझ बनने लगें, तब उनका टूट जाना ही अच्छा है। क्यों? स्पष्ट कीजिए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>यह कथन पूर्णतया युक्तिसंगत और सामयिक है:</p>
          <ul>
            <li><strong>परंपराओं का मूल उद्देश्य:</strong> सामाजिक नियम और परंपराएँ मनुष्य की सुरक्षा, सुव्यवस्था और कल्याण के लिए बनाई जाती हैं; न कि मनुष्य नियमों के लिए बना है।</li>
            <li><strong>विकास में बाधक:</strong> जब कोई परंपरा समय के साथ अप्रासंगिक हो जाए और मानवीय संवेदना, प्रेम तथा प्रगति के मार्ग में रोड़ा बनकर लोगों का जीवन छीनने लगे, तो वह परंपरा न रहकर एक अमानवीय 'रूढ़ि' बन जाती है।</li>
            <li><strong>बलिदान से परिवर्तन:</strong> तताँरा और वामीरो के दुखद आत्म-बलिदान ने समाज की आँखें खोल दीं। निकोबारियों ने उस संकीर्ण गाँव-विवाह प्रथा को समाप्त कर दिया और दूसरे गाँवों में भी वैवाहिक संबंध स्वीकार किए जाने लगे। यदि रूढ़ियाँ न टूटें तो समाज जड़ और गतिहीन होकर नष्ट हो जाता है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">परंपरा बनाम रूढ़ि के अंतर का दार्शनिक विश्लेषण</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">तताँरा-वामीरो के बलिदान से आए सामाजिक सुधार का उदाहरण</span><span class="marking-marks">2.0 अंक</span></div>
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
        <strong>अभिकथन (A):</strong> तताँरा और वामीरो की मृत्यु व्यर्थ नहीं गई, उसने एक नए समाज की नींव रखी।<br>
        <strong>कारण (R):</strong> उनके त्याग के पश्चात निकोबार के लोगों ने पुरानी संकीर्ण परंपरा को त्यागकर दूसरे गाँवों में वैवाहिक संबंध बनाना प्रारंभ कर दिया।<br>
        <strong>विकल्प:</strong><br>
        (क) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या करता है।<br>
        (ख) (A) और (R) दोनों सही हैं, परंतु (R), (A) की सही व्याख्या नहीं करता।<br>
        (ग) (A) सही है, परंतु (R) गलत है।<br>
        (घ) (A) गलत है, परंतु (R) सही है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>सही उत्तर: (क)</strong><br>
        <em>व्याख्या:</em> तताँरा-वामीरो के दुखद अंत ने समाज की जड़ता को तोड़ा और सामाजिक नियमों में क्रांतिकारी परिवर्तन आया। अतः (R) बिल्कुल सही व्याख्या करता है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 19: तीसरी कसम के शिल्पकार शैलेंद्र — प्रहलाद अग्रवाल
const ch19 = `<section class="chapter-section" id="ch19" data-book="sparsh-gadh">
  <div class="chapter-header">
    <div class="ch-badge">19</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (गद्य खंड) — पाठ 4</div>
      <h2>तीसरी कसम के शिल्पकार शैलेंद्र</h2>
      <p>प्रहलाद अग्रवाल | समीक्षात्मक निबंध — गीतकार शैलेंद्र, कलात्मक निष्ठा बनाम व्यावसायिकता, फणीश्वरनाथ 'रेणु' की अमर कृति | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch19-q1">
    <div class="q-head" onclick="toggleQ('ch19-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">'तीसरी कसम' फिल्म को 'सैल्यूलाइड पर लिखी गई कविता' क्यों कहा गया है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>'तीसरी कसम' केवल मनोरंजन या व्यावसायिक लाभ के लिए बनाई गई फिल्म नहीं थी, बल्कि वह कैमरे के पर्दे (सैल्यूलाइड) पर उकेरी गई विशुद्ध मानवीय संवेदना की कविता थी:</p>
          <ul>
            <li>इसमें ग्रामीण अंचल की निश्छलता, हीरामन गाड़ीवान की मासूमियत और हीराबाई की आंतरिक विवशता का अत्यंत सूक्ष्म और काव्यात्मक चित्रण था।</li>
            <li>फिल्म में कोई सस्ता तड़क-भड़क या नकली ड्रामा नहीं था; उसका प्रत्येक दृश्य एक संवेदनशील कविता के छंद की तरह दर्शक के हृदय को छू जाता था।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">व्यावसायिकता से परे मानवीय संवेदना का चित्रण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सैल्यूलाइड पर काव्यात्मक अनुभूति का साकार रूप</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch19-q2">
    <div class="q-head" onclick="toggleQ('ch19-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">शैलेंद्र ने राजकपूर की किन-किन विशेषताओं को अपनी फिल्म में उतारा?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>शैलेंद्र ने राजकपूर के भीतर छिपे विशुद्ध अभिनेता को पहचाना और 'हीरामन' के रूप में उन्हें प्रस्तुत किया:</p>
          <ul>
            <li>राजकपूर को एशिया का सबसे बड़ा शोमैन माना जाता था, किंतु शैलेंद्र ने उनके इस ग्लैमर को उतारकर उन्हें एक सीधा-सादा, देहाती और निश्छल गाड़ीवान बनाया।</li>
            <li>राजकपूर ने हीरामन के किरदार में मासूमियत, बाल-सुलभ लज्जा और आँखों से प्रेम अभिव्यक्त करने का अद्वितीय अभिनय किया, जो उनके जीवन की सर्वश्रेष्ठ भूमिका बन गई।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शोमैन के चोले से निकालकर विशुद्ध अभिनेता की पहचान</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">हीरामन के किरदार में जीवंत देहाती अभिनय की प्रस्तुति</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch19-q3">
    <div class="q-head" onclick="toggleQ('ch19-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">शैलेंद्र एक आदर्शवादी भावुक कवि थे, सफल व्यापारी नहीं—स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>शैलेंद्र की आत्मा एक सच्चे कवि और कलाकार की थी, जो लाभ-हानि के सांसारिक तराजू पर नहीं तौली जा सकती:</p>
          <ul>
            <li>जब राजकपूर ने उन्हें फिल्म निर्माण के वित्तीय जोखिमों और पैसे डूबने की चेतावनी दी, तो शैलेंद्र ने हँसते हुए कहा कि वे फिल्म पैसे कमाने के लिए नहीं, बल्कि साहित्य और कला की सच्ची सेवा के लिए बना रहे हैं।</li>
            <li>वे फिल्म वितरकों के आगे नहीं झुके और न ही बाजारू मांग के अनुसार फिल्म में सस्ते फार्मूले जोड़े। इस कलात्मक निष्ठा के कारण फिल्म को राष्ट्रपति का स्वर्ण पदक तो मिला, किंतु शैलेंद्र आर्थिक रूप से बर्बाद हो गए और मानसिक आघात से असमय संसार से विदा हो गए।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">व्यावसायिक मुनाफे के स्थान पर कलात्मक निष्ठा को प्राथमिकता</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">वित्तीय कठिनाइयों व समझौते न करने का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
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
      <div class="cbq-type">CBQ 1: सिनेमा और साहित्य का अंतर्संबंध (Competency Question)</div>
      <div class="cbq-question">
        आज के व्यावसायिक सिनेमा में साहित्य और मानवीय मूल्यों का अभाव क्यों दिखाई देता है? शैलेंद्र की 'तीसरी कसम' वर्तमान फिल्मकारों को क्या संदेश देती है?
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        आज का सिनेमा मुख्यतः करोड़ों रुपये के बॉक्स-ऑफिस कलेक्शन, हिंसा और तड़क-भड़क पर केंद्रित हो चुका है, जिससे उसमें आत्मा और साहित्यिक गहराई खो गई है। शैलेंद्र की 'तीसरी कसम' यह अमर संदेश देती है कि महान कला वही है जो मानवीय करुणा, निश्छल प्रेम और मिट्टी की महक से जुड़ी हो। बॉक्स ऑफिस की तात्कालिक सफलता से परे कालजयी कला वही बनती है जो दर्शकों के हृदय को झकझोर दे।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 20: अब कहाँ दूसरे के दुख से दुखी होने वाले — निदा फ़ाज़ली
const ch20 = `<section class="chapter-section" id="ch20" data-book="sparsh-gadh">
  <div class="chapter-header">
    <div class="ch-badge">20</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (गद्य खंड) — पाठ 5</div>
      <h2>अब कहाँ दूसरे के दुख से दुखी होने वाले</h2>
      <p>निदा फ़ाज़ली | आत्मकथात्मक निबंध — पर्यावरण असंतुलन, मानवेतर प्राणियों के प्रति संवेदनहीनता, कंक्रीट के जंगल और सह-अस्तित्व | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch20-q1">
    <div class="q-head" onclick="toggleQ('ch20-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">अरब में लशकर को 'नूह' के नाम से क्यों याद किया जाता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>अरब में पैगंबर लशकर को 'नूह' (अर्थात अत्यधिक विलाप करने या रोने वाला) के नाम से इसलिए याद किया जाता है क्योंकि वे जीवन भर एक घायल कुत्ते के प्रति कहे गए अपने कटु वचन के पश्चाताप में रोते रहे।</p>
          <p>एक बार उन्होंने एक जख्मी कुत्ते को देखकर घृणा से दुत्कार दिया था। कुत्ते ने उत्तर दिया—"न मैं अपनी मर्जी से कुत्ता हूँ, न तुम अपनी पसंद से इंसान हो। बनाने वाला हम दोनों का वही एक ईश्वर है।" कुत्ते की इस आध्यात्मिक बात ने नूह के दिल को बींध दिया और वे जीवन भर अपनी भूल पर आँसू बहाते रहे।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">'नूह' शब्द का अर्थ (विलाप करने वाला)</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">कुत्ते द्वारा दिए गए उत्तर व नूह के आजीवन पश्चाताप का उल्लेख</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch20-q2">
    <div class="q-head" onclick="toggleQ('ch20-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">प्रकृति में आए असंतुलन का क्या दुष्परिणाम हुआ है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>मनुष्य ने अपनी स्वार्थपरता और अंधी तृष्णा के कारण प्रकृति के साथ भीषण छेड़छाड़ की है, जिसके विनाशकारी परिणाम सामने आ रहे हैं:</p>
          <ul>
            <li><strong>प्राकृतिक आपदाओं का प्रकोप:</strong> बेमौसम की भारी बरसात, भयानक तूफान, चक्रवात, सुनामी और भूकंप की घटनाओं में निरंतर वृद्धि।</li>
            <li><strong>ऋतु-चक्र का बिगड़ना:</strong> अत्यधिक गर्मी, घटती ठंड और जल-संकट।</li>
            <li><strong>नई बीमारियाँ:</strong> पर्यावरण प्रदूषण के कारण मानव जीवन में नित नए प्राणघातक रोगों का जन्म। समुद्र और प्रकृति का गुस्सा सुनामी बनकर इंसानों और जहाजों को तिनकों की तरह फेंक रहा है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बेमौसम बरसात, तूफान, सुनामी व भूकंप का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">ऋतु-असंतुलन व नई महामारियों का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch20-q3">
    <div class="q-head" onclick="toggleQ('ch20-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">लेखक की माँ ने कबूतर का अंडा टूट जाने पर क्या प्रायश्चित किया?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक के घर में रोशनदान में कबूतर के दो अंडे थे। एक अंडा बिल्ली ने फोड़ दिया था। जब लेखक की माँ दूसरे अंडे को सुरक्षित रखने के लिए स्टूल पर चढ़ीं, तो उनके हाथ से फिसलकर दूसरा अंडा भी फर्श पर गिरकर फूट गया।</p>
          <p>कबूतर के जोड़े को तड़पते और फड़फड़ाते देखकर माँ की आँखों में आँसू आ गए। इस अनजाने में हुए पाप का प्रायश्चित करने के लिए माँ ने पूरे दिन का रोज़ा रखा, दिन भर न कुछ खाया न पिया, और नमाज़ पढ़कर रो-रोकर खुदा से अपने इस गुनाह की माफी माँगती रहीं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">अंडा टूटने की घटना और कबूतरों के विलाप का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">दिन भर रोज़ा रखकर पश्चाताप व नमाज़ में माफी माँगने का वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
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
      <div class="cbq-type">CBQ 1: केस-आधारित पर्यावरण नीतिशास्त्र (Environmental Ethics)</div>
      <div class="cbq-question">
        "डेरा डालने का मतलब है कि कुछ समय के लिए रहना, लेकिन आज पक्षियों और जानवरों के लिए धरती पर कोई स्थायी ठिकाना नहीं बचा।" आधुनिक कंक्रीट के विकास और वन्यजीवों के बेघर होने पर एक विचारपरक टिप्पणी लिखिए।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        यह धरती केवल मनुष्य की निजी जागीर नहीं है, बल्कि इस पर पेड़-पौधों, पशु-पक्षियों और सूक्ष्म जीवों का भी बराबर का अधिकार है। मनुष्य ने जंगलों को काटकर और समुद्र को पीछे धकेलकर कंक्रीट की गगनचुंबी इमारतें खड़ी कर दी हैं। परिणामतः पक्षी अपने घोंसले खोकर फ्लैटों की जालियों और छज्जों पर फड़फड़ा रहे हैं। यदि हमने इस जैव-विविधता और सह-अस्तित्व की रक्षा नहीं की, तो पर्यावरण का यह महाविनाश स्वयं मनुष्य के अस्तित्व को भी समाप्त कर देगा।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 21: पतझर में टूटी पत्तियाँ — रवींद्र केलेकर
const ch21 = `<section class="chapter-section" id="ch21" data-book="sparsh-gadh">
  <div class="chapter-header">
    <div class="ch-badge">21</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (गद्य खंड) — पाठ 6</div>
      <h2>पतझर में टूटी पत्तियाँ</h2>
      <p>रवींद्र केलेकर | निबंध — (1) गिन्नी का सोना (आदर्शवाद बनाम व्यावहारिकता) (2) झेन की देन (टी-सेरेमनी, वर्तमान में जीना, मानसिक शांति) | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch21-q1">
    <div class="q-head" onclick="toggleQ('ch21-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">'शुद्ध सोना' और 'गिन्नी के सोने' में क्या अंतर है? लेखक ने इसके माध्यम से क्या विचार व्यक्त किया है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>अंतर:</strong> 'शुद्ध सोना' 100% खरा होता है, जिसमें कोई मिलावट नहीं होती। किंतु 'गिन्नी का सोना' वह होता है जिसमें थोड़ा ताँबा मिलाया जाता है ताकि वह अधिक चमकदार और मजबूत बने तथा उससे आभूषण गढ़े जा सकें।</p>
          <p><strong>लेखक का विचार:</strong> लेखक ने इसके माध्यम से 'शुद्ध आदर्श' और 'व्यावहारिकता' के द्वंद्व को स्पष्ट किया है। विशुद्ध आदर्शवादी व्यक्ति शुद्ध सोने जैसे होते हैं, जो कभी अपने नैतिक मूल्यों से समझौता नहीं करते (जैसे गांधी जी)। जबकि अवसरवादी लोग आदर्शों में स्वार्थ और व्यावहारिकता का ताँबा मिलाकर केवल अपना लाभ साधते हैं। समाज को शाश्वत दिशा शुद्ध आदर्शवादी ही देते हैं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शुद्ध सोने और गिन्नी के सोने में ताँबे की मिलावट का अंतर</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">शुद्ध आदर्शवादी बनाम व्यावहारिक अवसरवादिता का रूपक</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch21-q2">
    <div class="q-head" onclick="toggleQ('ch21-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">जापान में 'टी-सेरेमनी' (चा-नो-यू) क्या है और इसमें मानसिक शांति कैसे प्राप्त होती है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>जापान में चाय पीने की एक अत्यंत विशिष्ट और ध्यानमग्न पारंपरिक विधि है, जिसे 'चा-नो-यू' (टी-सेरेमनी) कहते हैं:</p>
          <ul>
            <li>यह एक शांत पर्णकुटी में आयोजित की जाती है, जहाँ एक बार में केवल तीन व्यक्तियों को प्रवेश मिलता है ताकि शांति भंग न हो।</li>
            <li>वहाँ चाय तैयार करने वाले (चाजीन) की प्रत्येक चेष्टा, पानी का उबलना, चाय का छनना अत्यंत धीमी और गरिमामय गति से होता है।</li>
            <li>आधा प्याला चाय को घूँट-घूँट कर डेढ़-दो घंटे तक शांत वातावरण में पिया जाता है। इस मूक और तनावमुक्त प्रक्रिया से मन के विचार शून्य हो जाते हैं और व्यक्ति वर्तमान के पल में जीने का असीम आनंद अनुभव करता है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">'चा-नो-यू' विधि और शांत पर्णकुटी के वातावरण का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">घूँट-घूँट पीने से वर्तमान में जीने व विचार शून्यता का लाभ</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch21-q3">
    <div class="q-head" onclick="toggleQ('ch21-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">लेखक के अनुसार वास्तविक सत्य क्या है—भूतकाल, भविष्यकाल या वर्तमानकाल?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक के अनुसार भूतकाल बीत चुका है, जो अब मिथ्या है; और भविष्यकाल अभी आया नहीं है, जो केवल एक कल्पना है। मनुष्य इन दोनों कालों की चिंताओं में उलझकर अपने जीवन को तनावग्रस्त कर लेता है।</p>
          <p>वास्तविक सत्य केवल 'वर्तमान काल' है, जो इस क्षण हमारे सम्मुख उपस्थित है। जो व्यक्ति वर्तमान के प्रत्येक पल को पूरी तन्मयता, शांति और जागरूकता के साथ जीता है, वही वास्तव में जीवन के अमृत और शाश्वत सत्य का साक्षात्कार करता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भूतकाल की अप्रासंगिकता व भविष्य की काल्पनिकता का तर्क</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">वर्तमान क्षण को ही एकमात्र यथार्थ व शाश्वत सत्य मानना</span><span class="marking-marks">1.5 अंक</span></div>
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
        <strong>अभिकथन (A):</strong> जापान में मानसिक रोगियों की संख्या अन्य देशों की तुलना में काफी अधिक है।<br>
        <strong>कारण (R):</strong> वहाँ का जीवन अत्यधिक तीव्र गति से चलता है और लोग एक महीने का काम एक दिन में पूरा करने की अंधी प्रतिस्पर्द्धा में लगे रहते हैं, जिससे दिमाग का इंजन टूट जाता है।<br>
        <strong>विकल्प:</strong><br>
        (क) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या करता है।<br>
        (ख) (A) और (R) दोनों सही हैं, परंतु (R), (A) की सही व्याख्या नहीं करता।<br>
        (ग) (A) सही है, परंतु (R) गलत है।<br>
        (घ) (A) गलत है, परंतु (R) सही है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>सही उत्तर: (क)</strong><br>
        <em>व्याख्या:</em> अत्यधिक मानसिक तनाव और अमेरिका से होड़ के चक्कर में तेज रफ्तार जिंदगी ने जापानी लोगों को अवसाद और मानसिक रोगों की ओर धकेल दिया है। अतः (R) बिल्कुल सही व्याख्या करता है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 22: कारतूस — हबीब तनवीर
const ch22 = `<section class="chapter-section" id="ch22" data-book="sparsh-gadh">
  <div class="chapter-header">
    <div class="ch-badge">22</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (गद्य खंड) — पाठ 7</div>
      <h2>कारतूस</h2>
      <p>हबीब तनवीर | एकांकी — वज़ीर अली का अदम्य साहस, अंग्रेजों के विरुद्ध बगावत, देशभक्ति और चतुरंग कूटनीति | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch22-q1">
    <div class="q-head" onclick="toggleQ('ch22-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">कर्नल कालिंज का खेमा जंगल में क्यों लगा हुआ था?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कर्नल कालिंज अपनी पूरी फौज और लेफ्टिनेंट के साथ गोरखपुर के जंगलों में कई हफ्तों से डेरा डाले हुए था। उसका एकमात्र उद्देश्य अवध के पूर्व नवाब और विद्रोही जाँबाज वज़ीर अली को जिंदा या मुर्दा पकड़ना था, जो अंग्रेजों की नाक में दम किए हुए था और जंगलों में छिपकर अपनी सैन्य शक्ति संगठित कर रहा था।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">वज़ीर अली को गिरफ्तार करने के उद्देश्य का स्पष्ट उल्लेख</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch22-q2">
    <div class="q-head" onclick="toggleQ('ch22-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">वज़ीर अली ने कंपनी के वकील का कत्ल क्यों किया?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>जब अंग्रेजों ने वज़ीर अली को अवध के तख्त से हटाकर बनारस भेज दिया और फिर गवर्नर जनरल ने उसे कलकत्ता तलब किया, तो वज़ीर अली बनारस में रहने वाले कंपनी के वकील के पास शिकायत लेकर गया।</p>
          <p>वकील ने वज़ीर अली की न्यायसंगत शिकायत सुनने के बजाय उसे बुरी तरह खरी-खोटी सुनाई और उसका अपमान किया। वज़ीर अली के स्वाभिमानी और विद्रोही खून ने इस अपमान को सहन नहीं किया। उसने तुरंत अपनी म्यान से खंजर निकाला और उस धृष्ट वकील का काम तमाम कर दिया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कंपनी के वकील द्वारा अपमानित व दुर्व्यवहार करने का कारण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">वज़ीर अली के स्वाभिमान व खंजर से वध करने का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch22-q3">
    <div class="q-head" onclick="toggleQ('ch22-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">सवार ने कर्नल से कारतूस कैसे हासिल किए और कर्नल हक्का-बक्का क्यों रह गया?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>कारतूस हासिल करना:</strong> वज़ीर अली स्वयं एक घुड़सवार के भेष में अकेले कर्नल के खेमे में घुस आया। उसने कर्नल से एकांत में बात करने की माँग की और कहा कि वह भी वज़ीर अली को गिरफ्तार करवाने आया है। उसने बहाना बनाया कि वज़ीर अली को पकड़ने के लिए उसे कुछ कारतूसों की सख्त जरूरत है। कर्नल खुश होकर उसे तुरंत दस कारतूस दे देता है।</p>
          <p><strong>कर्नल का हक्का-बक्का रहना:</strong> जब कर्नल ने जाने से पहले उसका नाम पूछा, तो सवार ने अत्यंत निर्भीकता से कहा—"वज़ीर अली! आपने मुझे कारतूस दिए हैं, इसलिए आपकी जान बख्शता हूँ!" यह कहकर वह बिजली की तेजी से अपने घोड़े पर सवार होकर गायब हो गया। शेर की मांद में घुसकर उसी के हाथों से कारतूस ले जाने वाले इस जाँबाज की अदम्य वीरता देखकर कर्नल सन्न और हक्का-बक्का रह गया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">अकेले खेमे में प्रवेश व कूटनीति से दस कारतूस प्राप्त करना</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">नाम का खुलासा, कर्नल की जान बख्शना व विस्मय का प्रभाव</span><span class="marking-marks">2.0 अंक</span></div>
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
      <div class="cbq-type">CBQ 1: चरित्र मूल्यांकन (Character Competency)</div>
      <div class="cbq-question">
        एकांकी के अंत में कर्नल कालिंज द्वारा वज़ीर अली को 'एक जाँबाज सिपाही' कहना शत्रु के प्रति किस प्रकार के सम्मान को दर्शाता है?
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        यह कथन सिद्ध करता है कि सच्ची वीरता, स्वाभिमान और अदम्य साहस शत्रु के हृदय में भी आदर की भावना पैदा कर देता है। यद्यपि कर्नल वज़ीर अली का कट्टर विरोधी और उसे गिरफ्तार करने आया ब्रिटिश अफसर था, किंतु वज़ीर अली की निडरता, निर्भयता और अकेले दुश्मनों के शिविर में घुसने के हैरतअंगेज कारनामे ने कर्नल को नतमस्तक कर दिया।
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(outDir, 'ch16.html'), ch16, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch17.html'), ch17, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch18.html'), ch18, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch19.html'), ch19, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch20.html'), ch20, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch21.html'), ch21, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch22.html'), ch22, 'utf8');
console.log('Generated ch16.html to ch22.html (Sparsh Prose complete)');
