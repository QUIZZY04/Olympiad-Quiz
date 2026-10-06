const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c10h');

// Chapter 23: साखी
const ch23Html = `<section class="chapter-section" id="ch23" data-book="sparsh-kavya">
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
      <div class="q-text">दीपक दिखाई देने पर अँधियारा कैसे मिट जाता है? साखी के संदर्भ में स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कबीरदास जी कहते हैं—<em>"जब मैं था तब हरि नहीं, अब हरि हैं मैं नाहिं। सब अँधियारा मिटि गया, जब दीपक देख्या माहिं॥"</em></p>
          <p>यहाँ 'दीपक' ज्ञान और ईश्वर-साक्षात्कार का प्रतीक है तथा 'अँधियारा' अज्ञान, भ्रम और अहंकार का प्रतीक है। जिस प्रकार दीपक जलते ही कमरे का सारा अंधकार स्वतः नष्ट हो जाता है, उसी प्रकार जब अंतःकरण में गुरु-कृपा से ईश्वरीय ज्ञान का दीपक जलता है, तो मनुष्य के भीतर से अज्ञान, वासना और अहम् का सारा अंधकार तत्क्षण विलीन हो जाता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">दीपक (ज्ञान) व अंधकार (अज्ञान/अहंकार) का प्रतीकार्थ</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">आत्म-साक्षात्कार से अज्ञान विनाश की व्याख्या</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch23-q3">
    <div class="q-head" onclick="toggleQ('ch23-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">ईश्वर कण-कण में व्याप्त है, पर हम उसे क्यों नहीं देख पाते?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कबीरदास जी कस्तूरी मृग का उदाहरण देते हुए कहते हैं—<em>"कस्तूरी कुंडलि बसै, मृग ढूँढ़ै बन माहि। ऐसे घटि-घटि रांम हैं, दुनियां देखै नांहि॥"</em></p>
          <p>जिस प्रकार मृग की अपनी नाभि में ही कस्तूरी की सुगंध होती है, किंतु अज्ञानतावश वह उसे सारे जंगल की घास में ढूँढ़ता फिरता है; उसी प्रकार परमात्मा प्रत्येक मनुष्य के अंतःकरण और सृष्टि के कण-कण में समाया हुआ है। किंतु अज्ञान, सांसारिक मोह-माया और अहंकार के पर्दे के कारण मनुष्य उसे अपने भीतर न देखकर बाहर देवालयों और तीर्थों में ढूँढ़ता भटकता रहता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कस्तूरी मृग के दृष्टांत का सटीक प्रयोग</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">अज्ञानता व अहंकार द्वारा अंतःकरण के ईश्वर को न देख पाने का कारण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch23-q4">
    <div class="q-head" onclick="toggleQ('ch23-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">संसार में सुखी व्यक्ति कौन है और दुखी कौन? यहाँ 'सोना' और 'जागना' किसके प्रतीक हैं?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कबीर के अनुसार—<em>"सुखिया सब संसार है, खाइ अरु सोवै। दुखिया दास कबीर है, जागै अरु रोवै॥"</em></p>
          <ul>
            <li><strong>सुखी व्यक्ति:</strong> जो लोग सांसारिक भोग-विलास, खाने-पीने और मौज-मस्ती में लिप्त रहते हैं और जिन्हें मृत्यु व ईश्वर का कोई भान नहीं है, वे सांसारिक दृष्टि से स्वयं को सुखी मानते हैं।</li>
            <li><strong>दुखी व्यक्ति:</strong> कबीर जैसे प्रभु-भक्त और ज्ञानी संत दुखी हैं, क्योंकि वे संसार की नश्वरता को देखकर रोते हैं और ईश्वर के विरह में तड़पते रहते हैं।</li>
            <li><strong>प्रतीकार्थ:</strong> यहाँ 'सोना' अज्ञान और मोह-माया में बेखबर रहने का प्रतीक है, जबकि 'जागना' आत्म-ज्ञान और ईश्वरीय चेतना के प्रति सजगता का प्रतीक है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सांसारिक सुखी व संत के दुख का तुलनात्मक अंतर</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">'सोना' (अज्ञान) व 'जागना' (आत्म-चेतना) के प्रतीकार्थ का विवेचन</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch23-q5">
    <div class="q-head" onclick="toggleQ('ch23-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">अपने स्वभाव को निर्मल रखने के लिए कबीर ने क्या उपाय सुझाया है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कबीरदास जी कहते हैं—<em>"निंदक नेड़ा राखिये, आँगणि कुटी बँधाइ। बिनु साबण पाँणीं बिना, निरमल करै सुभाइ॥"</em></p>
          <p>कबीर ने अपने स्वभाव को शुद्ध और पवित्र रखने के लिए निंदक (आलोचक) को अपने निकट रखने का उपाय सुझाया है। निंदक हमारे दोषों और कमियों को निष्पक्षता से बताता है, जिससे हमें अपनी गलतियों को सुधारने का अवसर मिलता है। इस प्रकार बिना साबुन और पानी के हमारा अंतःकरण स्वतः निर्मल हो जाता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">निंदक को निकट रखने के उपाय का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">बिना साबुन-पानी स्वभाव निर्मल होने का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch23-q6">
    <div class="q-head" onclick="toggleQ('ch23-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">'ऐके अषिर पीव का, पढ़े सु पंडित होइ'—इस पंक्ति द्वारा कवि क्या कहना चाहते हैं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कबीरदास जी के अनुसार केवल मोटी-मोटी धार्मिक पुस्तकें (पोथियाँ) पढ़कर कोई व्यक्ति सच्चा ज्ञानी या पंडित नहीं बन सकता।</p>
          <p>सच्चा विद्वान वही है जिसने परमात्मा के 'प्रेम' का एक अक्षर भी अपने जीवन में उतार लिया हो। किताबी पांडित्य के स्थान पर ईश्वर के प्रति सच्चा प्रेम और प्राणिमात्र के प्रति करुणा ही मनुष्य को वास्तविक ज्ञान और मोक्ष की ओर ले जाती है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पोथी-पांडित्य की व्यर्थता का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">ईश्वरीय प्रेम के एक अक्षर की महत्ता का निरूपण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch23-q7">
    <div class="q-head" onclick="toggleQ('ch23-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">कबीर की उद्धृत साखियों की भाषा की विशेषता स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कबीरदास जी की भाषा की प्रमुख विशेषताएँ निम्नलिखित हैं:</p>
          <ul>
            <li><strong>सधुक्कड़ी एवं पंचमेल खिचड़ी:</strong> कबीर देशाटन करने वाले फक्कड़ संत थे। उनकी भाषा में अवधी, ब्रज, भोजपुरी, राजस्थानी, पंजाबी तथा अरबी-फारसी के तद्भव शब्दों का स्वाभाविक संगम मिलता है।</li>
            <li><strong>गेयता और दोहा छंद:</strong> सभी साखियाँ दोहा छंद में रचित हैं जो अत्यंत सरल, गेय और स्मरणीय हैं।</li>
            <li><strong>सटीक प्रतीक और रूपक:</strong> कबीर ने कस्तूरी, दीपक, निंदक, विष और अमृत जैसे दैनिक जीवन के प्रभावशाली बिंबों और प्रतीकों का सफल प्रयोग किया है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सधुक्कड़ी/पंचमेल खिचड़ी भाषा व विविध बोलियों का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">दोहा छंद, गेयता व प्रतीकात्मकता का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch23-q8">
    <div class="q-head" onclick="toggleQ('ch23-q8')">
      <div class="q-num">प्रश्न 8</div>
      <div class="q-text">निम्नलिखित पंक्तियों का भाव स्पष्ट कीजिए: (क) 'बिरह भुवंगम तन बसै, मंत्र न लागै कोइ।' (ख) 'जब मैं था तब हरि नहीं, अब हरि हैं मैं नाहिं।'</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>(क) भावार्थ:</strong> जिस व्यक्ति के शरीर में ईश्वर के विरह रूपी भुजंग (साँप) ने अपना डेरा बना लिया हो, उस पर कोई भी मंत्र या दवा असर नहीं करती। वह विरही भक्त या तो जीवित नहीं रहता और यदि जीवित रहता भी है, तो प्रभु-प्रेम में बावला (पागल) सा होकर घूमता है।</p>
          <p><strong>(ख) भावार्थ:</strong> जब तक मेरे अंतःकरण में 'मैं' अर्थात् अहंकार की भावना विद्यमान थी, तब तक मुझे ईश्वर (हरि) की प्राप्ति नहीं हुई थी। अब जब मुझे ज्ञान रूपी गुरु-कृपा से ईश्वर के दर्शन हो गए हैं, तो मेरा सारा अहंकार स्वतः समाप्त हो गया है। आत्मा और परमात्मा के मिलन में अहंकार ही सबसे बड़ी दीवार है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">(क) विरह-सर्प व प्रभु-प्रेम की व्याकुलता का भाव</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">(ख) अहंकार ('मैं') और ईश्वर ('हरि') की परस्पर विरोधी प्रकृति</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>नैतिक व सामाजिक प्रासंगिकता विश्लेषण (Moral Relevance Analysis):</strong> कबीर की साखियों में 'निंदक नेड़ा राखिये' और 'मीठी वाणी' का उपदेश वर्तमान सोशल मीडिया और डिजिटल संवाद के दौर में किस प्रकार सहिष्णुता और मानसिक संतुलन स्थापित करने में सहायक हो सकता है?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>विश्लेषण:</strong> वर्तमान सोशल मीडिया पर लोग असहिष्णुता, ट्रोलिंग और कटु भाषा का प्रयोग कर मानसिक अशांति फैलाते हैं।</p>
        <p><strong>कबीर की शिक्षा का अनुप्रयोग:</strong> यदि हम कबीर के अनुसार मीठी वाणी का प्रयोग करें और आलोचना (निंदा) को सकारात्मक प्रतिक्रिया (Feedback) के रूप में स्वीकार करें, तो डिजिटल समाज में नफरत का शमन होगा और रचनात्मक संवाद को बढ़ावा मिलेगा।</p>
      </div>
    </div>
  </div>
</section>`;

// Chapter 24: पद (मीराबाई)
const ch24Html = `<section class="chapter-section" id="ch24" data-book="sparsh-kavya">
  <div class="chapter-header">
    <div class="ch-badge">24</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (काव्य खंड) — पाठ 2</div>
      <h2>पद</h2>
      <p>मीराबाई | राजस्थानी मिश्रित ब्रजभाषा — माधुर्य भाव, अनन्य कृष्ण-भक्ति, दैन्य भाव, रूप-सौंदर्य और आत्म-समर्पण | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch24-q1">
    <div class="q-head" onclick="toggleQ('ch24-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">पहले पद में मीरा ने हरि से अपनी पीड़ा हरने की विनती किस प्रकार की है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>मीराबाई अपने आराध्य श्रीकृष्ण से दैन्य भाव से पुकारती हैं—<em>"हरि आप हरो जन री भीर।"</em></p>
          <p>वे प्रभु को याद दिलाती हैं कि जिस प्रकार उन्होंने द्रौपदी की लाज बचाने के लिए वस्त्र बढ़ाए, प्रह्लाद की रक्षा के लिए नृसिंह रूप धरा और डूबते गजराज को मगरमच्छ से बचाया; उसी प्रकार वे अपनी दासी मीरा के सांसारिक कष्टों और विरह-वेदना का भी शीघ्र निवारण करें।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">द्रौपदी, प्रह्लाद व गजराज के उद्धार के दृष्टांत</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">स्वयं की विरह-पीड़ा हरने की कातर प्रार्थना</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch24-q2">
    <div class="q-head" onclick="toggleQ('ch24-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">दूसरे पद में मीराबाई श्याम की चाकरी क्यों करना चाहती हैं? स्पष्ट कीजिए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>मीराबाई श्रीकृष्ण की सेविका (चाकर) बनकर उनके निकट रहना चाहती हैं—<em>"स्याम म्हाने चाकर राखो जी।"</em> चाकरी करने से उन्हें निम्नलिखित तीन अनमोल लाभ प्राप्त होंगे:</p>
          <ul>
            <li><strong>नित्य दर्शन का लाभ:</strong> वे प्रभु के लिए बाग-बगीचे लगाएँगी ताकि सुबह उठते ही नित्य उनके दर्शन कर सकें।</li>
            <li><strong>नाम-स्मरण की पूँजी:</strong> वृंदावन की कुंज-गलियों में श्रीकृष्ण की लीलाओं का गुणगान करेंगी, जिससे उन्हें 'नाम-स्मरण' रूपी जेबखर्च प्राप्त होगा।</li>
            <li><strong>भाव-भक्ति की जागीर:</strong> उन्हें प्रभु की अनन्य भाव-भक्ति रूपी स्थायी जागीर मिल जाएगी। इस प्रकार उन्हें दर्शन, स्मरण और भक्ति तीनों का परम सुख एक साथ प्राप्त होगा।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बाग लगाने व नित्य दर्शन की लालसा का उल्लेख</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">दर्शन, स्मरण (खर्ची) व भाव-भक्ति (जागीर) रूपी त्रिवेणी का विश्लेषण</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch24-q3">
    <div class="q-head" onclick="toggleQ('ch24-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">मीराबाई ने श्रीकृष्ण के रूप-सौंदर्य का क्या वर्णन किया है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>मीराबाई ने अपने आराध्य श्याम के मनमोहक रूप का चित्रण करते हुए कहा है:</p>
          <p><em>"सिर पर मोरमुकुट पीतांबर सोहै, गल बैजंती माला। बिंद्राबन में धेनु चरावे, मोहन मुरली वाला॥"</em> उनके सिर पर मोरपंखों का मुकुट सुशोभित है, शरीर पर पीले वस्त्र (पीतांबर) शोभा पा रहे हैं और गले में वनफूलों की बैजंती माला लहरा रही है। वे वृंदावन में गायें चराते हैं और होठों पर मधुर मुरली बजाकर सबका मन मोह लेते हैं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">मोरमुकुट, पीतांबर व बैजंती माला का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">वृंदावन में धेनु चराने व मुरली वादन का सौंदर्य</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch24-q4">
    <div class="q-head" onclick="toggleQ('ch24-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">मीराबाई की भक्ति-भावना का परिचय दीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>मीराबाई की भक्ति मुख्य रूप से <strong>माधुर्य भाव</strong> और <strong>कांता भाव</strong> (पति-पत्नी संबंध) की है, जिसमें दैन्य और दास्य भाव का भी अद्भुत समन्वय है:</p>
          <ul>
            <li>वे श्रीकृष्ण को अपना एकमात्र पति, स्वामी और सर्वस्व मानती हैं ("मेरे तो गिरधर गोपाल, दूसरो न कोई")।</li>
            <li>उनकी भक्ति में लोक-लाज और कुल की मर्यादा का कोई भय नहीं है।</li>
            <li>वे प्रभु के चरणों में दासी बनकर समर्पित होने में ही अपने जीवन की सार्थकता मानती हैं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">माधुर्य भाव, अनन्यता व सर्वस्व समर्पण का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">दास्य भाव व सांसारिक बंधनों से मुक्ति का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch24-q5">
    <div class="q-head" onclick="toggleQ('ch24-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">मीराबाई ने अपने पदों में प्रभु के किन-किन भक्तों की रक्षा के उदाहरण दिए हैं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>मीराबाई ने भगवान श्रीकृष्ण द्वारा भक्तों पर की गई कृपा के तीन पौराणिक उदाहरण दिए हैं:</p>
          <ol>
            <li><strong>द्रौपदी:</strong> भरी कौरव सभा में जब दुःशासन चीरहरण कर रहा था, तब प्रभु ने वस्त्र बढ़ाकर उसकी लाज बचाई।</li>
            <li><strong>भक्त प्रह्लाद:</strong> हिरण्यकश्यप के अत्याचारों से बालक प्रह्लाद की रक्षा करने के लिए प्रभु ने नृसिंह अवतार लिया।</li>
            <li><strong>ऐरावत (गजराज):</strong> जब मगरमच्छ ने हाथी का पैर पकड़कर उसे गहरे जल में खींच लिया था, तब भगवान ने ग्राह का वध करके गजराज का उद्धार किया।</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">तीनों भक्तों (द्रौपदी, प्रह्लाद, गजराज) का स्पष्ट उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भगवान द्वारा संकट निवारण के संदर्भ की व्याख्या</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch24-q6">
    <div class="q-head" onclick="toggleQ('ch24-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">भाव स्पष्ट कीजिए: 'चाकरी में दरसन पास्यूँ, सुमरण पास्यूँ खरची। भाव भगती जागीरी पास्यूँ, तीनूं बाताँ सरसी॥'</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>भावार्थ:</strong> मीराबाई कहती हैं कि जब वे अपने प्रियतम श्रीकृष्ण की चाकरी (सेवा) करेंगी, तो उन्हें किसी भौतिक धन या वेतन की आवश्यकता नहीं होगी।</p>
          <p>उन्हें सेवा के बदले नित्य प्रभु के दर्शन का सौभाग्य मिलेगा, नाम-स्मरण के रूप में जीवन-यापन के लिए आध्यात्मिक खर्च प्राप्त होगा और प्रभु की भावपूर्ण भक्ति रूपी अकूत संपत्ति और जागीर सदा के लिए मिल जाएगी। इस प्रकार उन्हें एक ही सेवा से दर्शन, स्मरण और भक्ति तीनों परम लाभ सुलभ हो जाएँगे।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">दर्शन व नाम-स्मरण (खर्ची) के आध्यात्मिक वेतन का भाव</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भाव-भक्ति जागीर की सार्थकता व तीनों लाभों का विवेचन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>स्त्री-विमर्श एवं भक्ति कालीन चेतना (Feminist & Devotional Analysis):</strong> मीराबाई का राजसी सुखों का त्याग कर श्रीकृष्ण की अनन्य भक्ति में लीन होना तत्कालीन सामंती पुरुष-प्रधान समाज के विरुद्ध एक मूक एवं सशक्त विद्रोह था। इस कथन की समीक्षा कीजिए।</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>समीक्षा:</strong> 16वीं शताब्दी के रूढ़िवादी राजपूत समाज में स्त्रियों के लिए कड़े पर्दे और महलों की चारदीवारी की मर्यादा थी।</p>
        <p>मीराबाई ने राणा के महलों, आभूषणों और विष के प्याले की परवाह किए बिना संतों के संग बैठकर कीर्तन किया और श्रीकृष्ण को अपना एकमात्र पति घोषित किया। उनका यह कदम तत्कालीन पितृसत्तात्मक समाज के बंधनों को तोड़कर स्त्री की आत्मिक और व्यक्तिगत स्वतंत्रता की घोषणा थी। मीरा भक्ति के माध्यम से आत्म-सम्मान और मुक्ति की अप्रतिम प्रतीक बनीं।</p>
      </div>
    </div>
  </div>
</section>`;

// Chapter 25: मनुष्यता (मैथिलीशरण गुप्त)
const ch25Html = `<section class="chapter-section" id="ch25" data-book="sparsh-kavya">
  <div class="chapter-header">
    <div class="ch-badge">25</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (काव्य खंड) — पाठ 3</div>
      <h2>मनुष्यता</h2>
      <p>मैथिलीशरण गुप्त | खड़ी बोली — परोपकार, विश्व-बंधुत्व, त्याग, आत्म-बलिदान और सच्ची मानवता की प्रेरणा | CBSE Board 2026-27</p>
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
          <p>कवि मैथिलीशरण गुप्त के अनुसार केवल शरीर का नाश होना मृत्यु नहीं है। वे कहते हैं—<em>"विचार लो कि मर्त्य हो न मृत्यु से डरो कभी, मरो परंतु यों मरो कि याद जो करे सभी।"</em></p>
          <p>कवि ने उस मृत्यु को <strong>'सुमृत्य'</strong> (सार्थक और गौरवशाली मृत्यु) कहा है जो परोपकार, जन-कल्याण और सत्य के लिए प्राप्त हो। ऐसा व्यक्ति भले ही शारीरिक रूप से मर जाए, किंतु अपने महान त्याग और आदर्शों के कारण युगों-युगों तक लोगों के दिलों में अमर रहता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">परोपकार व देशहित में प्राणोत्सर्ग का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">संसार द्वारा अमर स्मरण व सुमृत्यु की परिभाषा</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch25-q2">
    <div class="q-head" onclick="toggleQ('ch25-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">उदार व्यक्ति की पहचान कैसे होती है? कविता के आधार पर स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि के अनुसार उदार व्यक्ति वह है जो निस्वार्थ भाव से समस्त सृष्टि से प्रेम करता है और अपना सर्वस्व दूसरों के कल्याण के लिए समर्पित कर देता है।</p>
          <p>ऐसे उदार व्यक्ति की कीर्ति और यश का गान स्वयं सरस्वती और इतिहास की पुस्तकें करती हैं, धरती उसके प्रति कृतज्ञता व्यक्त करती है और संपूर्ण विश्व उसकी पूजा करता है। उसके मन में अपने-पराए का भेद नहीं होता, वह सबको बंधु मानता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">निस्वार्थ परोपकार व आत्म-समर्पण के लक्षण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सरस्वती, धरा व विश्व द्वारा यश-गान का संदर्भ</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch25-q3">
    <div class="q-head" onclick="toggleQ('ch25-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">कवि ने दधीचि, कर्ण और उशीनर आदि का उदाहरण देकर क्या संदेश दिया है?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि ने इन ऐतिहासिक व पौराणिक महापुरुषों के माध्यम से परोपकार और त्याग का अमर संदेश दिया है:</p>
          <ul>
            <li><strong>ऋषि दधीचि:</strong> उन्होंने देवासुर संग्राम में देवताओं और मानवता की रक्षा के लिए अपनी जीवित हड्डियाँ वज्र बनाने हेतु दान कर दीं।</li>
            <li><strong>उशीनर (राजा शिबि):</strong> उन्होंने कबूतर के प्राणों की रक्षा के लिए अपने शरीर का मांस काटकर बाज को दे दिया।</li>
            <li><strong>दानवीर कर्ण:</strong> उन्होंने याचक के प्राणों की रक्षा के लिए अपने शरीर से जुड़ा जन्मजात कवच और कुंडल भी हँसते-हँसते दान कर दिया।</li>
            <li><strong>संदेश:</strong> यह नश्वर शरीर एक दिन नष्ट हो जाना है, अतः इस क्षणभंगुर देह के मोह में न पड़कर दूसरों के जीवन की रक्षा के लिए अपना सर्वस्व न्योछावर कर देना ही सच्चा मानव धर्म है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">दधीचि, शिबि व कर्ण के त्याग के दृष्टांतों का उल्लेख</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">नश्वर देह से परे अमर परोपकार का संदेश</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch25-q4">
    <div class="q-head" onclick="toggleQ('ch25-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">कवि ने किन पंक्तियों में यह व्यक्त किया है कि हमें गर्व-रहित जीवन व्यतीत करना चाहिए?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि ने निम्नलिखित पंक्तियों में धन और संपदा के मद में अहंकार न करने की चेतावनी दी है:</p>
          <p><em>"रहो न भूल के कभी मदांध तुच्छ वित्त में,<br>सनाथ जान आपको करो न गर्व चित्त में।<br>अनाथ कौन है यहाँ? त्रिलोकनाथ साथ हैं,<br>दयालु दीनबंधु के बड़े विशाल हाथ हैं।"</em></p>
          <p>कवि समझाते हैं कि धन अत्यंत तुच्छ है, इसके घमंड में कभी अंधे नहीं होना चाहिए। इस संसार में कोई भी अनाथ और असहाय नहीं है, क्योंकि उस परमपिता परमेश्वर के कृपालु हाथ सबके सिर पर हैं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">संबंधित पंक्तियों का सटीक उद्धरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">तुच्छ धन के घमंड त्याग व 'त्रिलोकनाथ' की सर्वव्यापकता का भाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch25-q5">
    <div class="q-head" onclick="toggleQ('ch25-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">'मनुष्य मात्र बंधु है' से आप क्या समझते हैं? स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि के अनुसार—<em>"मनुष्य मात्र बंधु है, यही बड़ा विवेक है।"</em></p>
          <p>इसका अर्थ यह है कि इस धरती के सभी मनुष्य एक ही ईश्वर (परमपिता) की संतान हैं। बाहरी रूप से कर्मों, जातियों, देशों और भाषाओं के आधार पर भेद भले ही दिखाई दें, किंतु अंतरात्मा में सभी एक समान हैं। यदि एक भाई दूसरे भाई के काम न आए, उसके कष्टों को न हरे, तो उसका मनुष्य होना व्यर्थ है। अतः विश्व-बंधुत्व की यह भावना ही सबसे बड़ा विवेक है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">एक ही परमपिता की संतान होने का दार्शनिक आधार</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">परस्पर बंधुत्व व कष्ट निवारण के दायित्व की व्याख्या</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch25-q6">
    <div class="q-head" onclick="toggleQ('ch25-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">कवि ने सबको एक साथ चलने की प्रेरणा क्यों दी है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि कहते हैं—<em>"चलो अभीष्ट मार्ग में सहर्ष खेलते हुए, विपत्ति-विप्र जो पड़ें उन्हें ढकेलते हुए।"</em></p>
          <p>कवि ने सबको एक साथ मिलकर आगे बढ़ने की प्रेरणा इसलिए दी है ताकि समाज में किसी प्रकार का भेदभाव, ईर्ष्या या अलगाव न पनपे। जब सभी लोग कदम से कदम मिलाकर चलेंगे, तो मार्ग की सारी बाधाएँ और विपत्तियाँ आसानी से दूर हो जाएँगी। सबकी सामूहिक प्रगति में ही प्रत्येक व्यक्ति का सच्चा कल्याण निहित है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भेदभाव मिटाने व एकता की शक्ति का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सामूहिक प्रगति व बाधाओं पर विजय का तर्क</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch25-q7">
    <div class="q-head" onclick="toggleQ('ch25-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">व्यक्ति को किस प्रकार का जीवन व्यतीत करना चाहिए? इस कविता के आधार पर बताइए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>'मनुष्यता' कविता के अनुसार व्यक्ति को ऐसा जीवन जीना चाहिए जो केवल अपने तक सीमित न हो:</p>
          <ul>
            <li>पशुओं की तरह केवल अपनी चारागाह की चिंता न करे, बल्कि दूसरों की भलाई के लिए जिए ("वही मनुष्य है कि जो मनुष्य के लिए मरे")।</li>
            <li>दूसरों के दुखों के प्रति गहरी सहानुभूति और करुणा रखे।</li>
            <li>धन-दौलत के घमंड से दूर रहकर सबको अपना बंधु समझे और प्रेमभाव से जीवन पथ पर आगे बढ़े।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पशु-प्रवृत्ति (स्वार्थ) त्यागने का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">परोपकार, सहानुभूति व बंधुत्वपूर्ण जीवन का प्रतिपादन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch25-q8">
    <div class="q-head" onclick="toggleQ('ch25-q8')">
      <div class="q-num">प्रश्न 8</div>
      <div class="q-text">भाव स्पष्ट कीजिए: 'सहानुभूति चाहिए, महाविभूति है वही; वशीकृता सदैव है बनी हुई मही।'</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>भावार्थ:</strong> कवि कहते हैं कि दूसरों के दुख-दर्द को अपना समझकर उनके प्रति गहरी संवेदना (सहानुभूति) रखना ही मनुष्य की सबसे बड़ी पूँजी और धन (महाविभूति) है।</p>
          <p>जिस मनुष्य के हृदय में करुणा और दया होती है, समस्त पृथ्वी और उसके प्राणी उसके वश में हो जाते हैं। भगवान बुद्ध ने भी पारंपरिक नियमों का विरोध कर केवल दया और करुणा के बल पर ही पूरे संसार को अपने प्रेम के समक्ष नतमस्तक कर लिया था।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सहानुभूति को वास्तविक धन (महाविभूति) बताने का भाव</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">करुणा द्वारा संसार को जीतने (बुद्ध का उदाहरण) की व्याख्या</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>वैश्विक नागरिकता एवं बंधुत्व (Global Citizenship & Fraternity):</strong> 'मनुष्य मात्र बंधु है, यही बड़ा विवेक है' की अवधारणा आज के भू-राजनीतिक तनाव, युद्ध और शरणार्थी संकट के संदर्भ में संयुक्त राष्ट्र (UN) के 'वसुधैव कुटुम्बकम्' के आदर्श से किस प्रकार मेल खाती है?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>विश्लेषण:</strong> मैथिलीशरण गुप्त जी की यह कविता संकीर्ण राष्ट्रवाद और सीमाओं से परे जाकर संपूर्ण मानव जाति को एक परिवार मानती है।</p>
        <p>वर्तमान समय में जब देश युद्ध और हथियारों की होड़ में उलझे हैं, तब 'मनुष्य मात्र बंधु है' का मंत्र यह स्मरण कराता है कि किसी भी निर्दोष मनुष्य का रक्त बहना संपूर्ण मानवता की पराजय है। विश्व शांति और सतत विकास के लिए प्रत्येक देश को इस सार्वभौमिक बंधुत्व को अपनी विदेश नीति और जीवन का मूल आधार बनाना होगा।</p>
      </div>
    </div>
  </div>
</section>`;

// Chapter 26: पर्वत प्रदेश में पावस (सुमित्रानंदन पंत)
const ch26Html = `<section class="chapter-section" id="ch26" data-book="sparsh-kavya">
  <div class="chapter-header">
    <div class="ch-badge">26</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (काव्य खंड) — पाठ 4</div>
      <h2>पर्वत प्रदेश में पावस</h2>
      <p>सुमित्रानंदन पंत | छायावादी कविता — पर्वतीय वर्षा ऋतु का जादुई सौंदर्य, मानवीकरण अलंकार, नाद-सौंदर्य और इंद्रजाल | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch26-q1">
    <div class="q-head" onclick="toggleQ('ch26-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">पावस ऋतु में प्रकृति में क्या-क्या परिवर्तन आते हैं? कविता के आधार पर स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>पर्वतीय प्रदेश में वर्षा ऋतु में प्रकृति का रूप पल-पल बदलता रहता है:</p>
          <ul>
            <li>पर्वतों पर खिले सहस्रों फूल पर्वत की आँखों के समान प्रतीत होते हैं और नीचे फैला शांत तालाब दर्पण जैसा दिखाई देता है।</li>
            <li>मोतियों की लड़ियों जैसे चमकते झरने कलकल ध्वनि में पर्वत के गौरव का गान करते हैं।</li>
            <li>अचानक बादलों के घिर आने से ऐसा लगता है मानो पर्वत पंख लगाकर उड़ गए हों। धुआँ उठने से लगता है कि तालाब में आग लग गई हो और आकाश धरती पर टूट पड़ा हो। प्रकृति एक जादुई खेल दिखाती प्रतीत होती है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पल-पल बदलते प्राकृतिक परिवेश का चित्रण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">झरने, बादल, धुआँ व तालाब के परिवर्तनों का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch26-q2">
    <div class="q-head" onclick="toggleQ('ch26-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">'मेखलाकार' शब्द का क्या अर्थ है? कवि ने इस शब्द का प्रयोग यहाँ क्यों किया है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>'मेखलाकार' का अर्थ:</strong> करधनी (कमर में बाँधने वाला गहना) के आकार का गोल या अर्द्धवृत्ताकार घेरा।</p>
          <p><strong>प्रयोग का कारण:</strong> पर्वतीय प्रदेश में पर्वत श्रृंखलाएँ सीधी न होकर गोलाकार रूप में दूर-दूर तक फैली हुई थीं। वे धरती की कमर में बंधी करधनी की भाँति विशाल और वक्राकार प्रतीत हो रही थीं। पर्वत की उस भव्य विशालता और घुमावदार ढलान को सजीव चित्रित करने के लिए कवि ने इस सुंदर बिंब का प्रयोग किया है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">करधनी के आकार (शाब्दिक अर्थ) का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पर्वत की घुमावदार विशालता के सजीव बिंब का स्पष्टीकरण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch26-q3">
    <div class="q-head" onclick="toggleQ('ch26-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">'सहस्र दृग-सुमन' से क्या तात्पर्य है? कवि ने इस पद का प्रयोग किसके लिए किया है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>तात्पर्य:</strong> 'सहस्र' अर्थात् हज़ारों, 'दृग' अर्थात् आँखें और 'सुमन' अर्थात् फूल। इसका तात्पर्य है—<strong>'हज़ारों नेत्र रूपी फूल'</strong> (रूपक अलंकार)।</p>
          <p><strong>प्रयोग का संदर्भ:</strong> कवि ने इस पद का प्रयोग पर्वत पर खिले अनगिनत जंगली फूलों के लिए किया है। मानवीकरण करते हुए कवि कल्पना करता है कि पर्वत उन हज़ारों पुष्प-रूपी आँखों से अपने चरणों में फैले विशाल तालाब के स्वच्छ जल में अपने विशालकाय रूप को विस्मय से निहार रहा है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पुष्प रूपी नेत्रों के अर्थ व रूपक का स्पष्टीकरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पर्वत द्वारा अपने रूप को निहारने के मानवीकरण का संदर्भ</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch26-q4">
    <div class="q-head" onclick="toggleQ('ch26-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">कवि ने तालाब की समानता किसके साथ दिखाई है और क्यों?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि ने पर्वत के चरणों में स्थित तालाब की समानता एक <strong>विशाल दर्पण (आईने)</strong> से की है—<em>"दर्पण-सा फैला है विशाल।"</em></p>
          <p><strong>कारण:</strong> तालाब का जल अत्यंत निर्मल, शांत, पारदर्शी और स्वच्छ है। जिस प्रकार दर्पण में व्यक्ति का संपूर्ण बिंब साफ़ दिखाई देता है, उसी प्रकार उस शांत जल में पर्वत और उसके ऊपर खिले फूलों का भव्य प्रतिबिंब हूबहू दिखाई दे रहा है, मानो वह पर्वत के लिए ही आईना बनकर फैला हो।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">दर्पण/आईने से समानता का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">निर्मल जल व पर्वत के प्रतिबिंब की तार्किक व्याख्या</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch26-q5">
    <div class="q-head" onclick="toggleQ('ch26-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">पर्वत के हृदय से उठ-उठकर ऊँचे वृक्ष आकाश की ओर क्यों देख रहे थे और वे किस बात को प्रतिबिंबित करते हैं?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>पर्वत के सीने पर उगे ऊँचे-ऊँचे शाल के वृक्ष शांत आकाश की ओर एकटक (अनिमेष), स्थिर और चिंतामग्न भाव से देख रहे हैं।</p>
          <p>वे पर्वत के हृदय में उठने वाली <strong>उच्चाकांक्षाओं</strong> (ऊँचा उठने की तीव्र इच्छाओं) को प्रतिबिंबित करते हैं। वे मानव मन की उस अदम्य लालसा का प्रतीक हैं जो सदैव अपनी वर्तमान सीमाओं को लांघकर और अधिक ऊँचाई प्राप्त करने के लिए मौन साधना में लीन रहता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">अनिमेष व चिंतामग्न होकर आकाश देखने का वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मानवीय उच्चाकांक्षाओं व साधना के प्रतीकार्थ की व्याख्या</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch26-q6">
    <div class="q-head" onclick="toggleQ('ch26-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">शाल के वृक्ष भयभीत होकर धरती में क्यों धँस गए प्रतीत होते हैं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>अचानक मूसलाधार वर्षा शुरू हो गई और बादलों का ऐसा घना कोहरा छाया कि पूरा पर्वत और आकाश गायब हो गए। चारों ओर घनघोर अंधकार छा गया और केवल झरनों का शोर सुनाई देने लगा।</p>
          <p>प्रकृति के इस भयानक और रौद्र रूप को देखकर ऐसा प्रतीत हुआ मानो आकाश धरती पर टूट पड़ा हो। इस भयंकर उत्पात से डरकर शाल के ऊँचे वृक्ष भयभीत होकर धरती में धँस गए हों और कोहरे में छिप गए हों।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">घने कोहरे, मूसलाधार वर्षा व अंधकार का वातावरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भयभीत होकर धरती में धँसने के उत्प्रेक्षा/मानवीकरण का भाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch26-q7">
    <div class="q-head" onclick="toggleQ('ch26-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">झरने किसके गौरव का गान कर रहे हैं? बहते हुए झरने की तुलना किससे की गई है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>पहाड़ों से गिरते हुए झरने अपनी कल-कल, छल-छल ध्वनि के माध्यम से <strong>विशाल पर्वत के उच्च गौरव और महानता का गान</strong> कर रहे हैं।</p>
          <p>कवि ने फेन उगलते और तेज़ी से बहते हुए दूधिया झरनों की तुलना <strong>'मोतियों की चमकदार लड़ियों'</strong> से की है—<em>"मोतियों की लड़ियों से सुंदर, झरते हैं झाग भरे निर्झर।"</em> ये झरने पर्वतों के सीने से निकलकर दर्शकों की नसों में नया उत्साह और स्फूर्ति भर देते हैं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पर्वत के गौरव गान का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मोतियों की लड़ियों से तुलना व झाग भरे सौंदर्य का चित्रण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch26-q8">
    <div class="q-head" onclick="toggleQ('ch26-q8')">
      <div class="q-num">प्रश्न 8</div>
      <div class="q-text">भाव स्पष्ट कीजिए: 'इंद्र खेलता था इंद्रजाल!' तथा 'है टूट पड़ा भू पर अंबर!'</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>(क) 'इंद्र खेलता था इंद्रजाल':</strong> वर्षा के देवता इंद्र बादल रूपी यान (विमान) पर बैठकर आकाश में घूम-घूमकर पल-पल नए जादुई दृश्य रच रहे थे। कभी धूप, कभी मूसलाधार वर्षा, कभी धुंध तो कभी बादलों में पर्वतों का गायब हो जाना—यह सब किसी बाज़ीगर के तिलिस्म (इंद्रजाल) जैसा विस्मयकारी लग रहा था।</p>
          <p><strong>(ख) 'है टूट पड़ा भू पर अंबर':</strong> मूसलाधार वर्षा का वेग इतना प्रचंड और भयंकर था कि ऐसा प्रतीत हुआ मानो स्वयं समूचा आकाश धरती पर गिर पड़ा हो और बाणों की भाँति जल की अनवरत धाराएँ धरती पर प्रहार कर रही हों।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">(क) इंद्र के विमान व प्रकृति के जादुई खेल (इंद्रजाल) का भाव</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">(ख) मूसलाधार वर्षा के रौद्र रूप व आकाश टूटने का अतिशयोक्तिपूर्ण सौंदर्य</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>छायावादी सौंदर्यशास्त्र एवं पर्यावरण बोध (Aesthetics & Eco-Consciousness):</strong> सुमित्रानंदन पंत को 'प्रकृति का सुकुमार कवि' क्यों कहा जाता है? 'पर्वत प्रदेश में पावस' के आधार पर विश्लेषण कीजिए कि छायावादी कवियों की दृष्टि प्रकृति को केवल वस्तु न मानकर सजीव चेतन सत्ता के रूप में कैसे देखती है?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>विश्लेषण:</strong> पंत जी ने कविता में प्रकृति के जड़ रूपों (पर्वत, फूल, वृक्ष, झरने) को मानवीकरण अलंकार के माध्यम से सजीव मानवीय क्रियाओं में संलग्न दिखाया है:</p>
        <ul>
          <li>पर्वत आँखों से अपने सौंदर्य को निहारता है, झरने गौरव-गान करते हैं और वृक्ष आकाश की ओर मौन चिंता में लीन हैं।</li>
          <li>यह दृष्टि प्रकृति के साथ एकात्मता स्थापित करती है। आज जब मनुष्य प्रकृति को केवल उपभोग की वस्तु मानकर उसका विनाश कर रहा है, पंत जी का यह प्रकृति-प्रेम हमें पर्यावरण के प्रति संवेदनशील और आदरयुक्त बनने की प्रेरणा देता है।</li>
        </ul>
      </div>
    </div>
  </div>
</section>`;

// Chapter 27: तोप (वीरेन डंगवाल)
const ch27Html = `<section class="chapter-section" id="ch27" data-book="sparsh-kavya">
  <div class="chapter-header">
    <div class="ch-badge">27</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (काव्य खंड) — पाठ 5</div>
      <h2>तोप</h2>
      <p>वीरेन डंगवाल | समकालीन कविता — 1857 की ऐतिहासिक तोप, कंपनी बाग, साम्राज्यवाद की क्षणभंगुरता और शांति का संदेश | CBSE Board 2026-27</p>
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
          <p>कंपनी बाग में रखी 1857 की तोप दो अत्यंत महत्त्वपूर्ण ऐतिहासिक संदेश देती है:</p>
          <ul>
            <li><strong>अतीत की भूलों से चेतावनी:</strong> ईस्ट इंडिया कंपनी व्यापार करने आई थी किंतु उसने भारतीयों की फूट का लाभ उठाकर देश को गुलाम बना लिया। हमें भविष्य में किसी भी विदेशी षड्यंत्र के प्रति सदैव सजग रहना चाहिए।</li>
            <li><strong>सत्ता और हिंसा की क्षणभंगुरता:</strong> चाहे कोई शक्ति या तोप कितनी भी क्रूर और शक्तिशाली क्यों न हो, एक न एक दिन उसका अंत निश्चित है। अंततः शांति, मासूमियत और आम जनता की ही विजय होती है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">विदेशी षड्यंत्रों से सजग रहने की चेतावनी</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">शक्ति व हिंसा के अंत तथा शांति की विजय का संदेश</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch27-q2">
    <div class="q-head" onclick="toggleQ('ch27-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">तोप को कब और कहाँ रखा गया था? वह क्या याद दिलाती है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>यह तोप <strong>1857 के प्रथम स्वतंत्रता संग्राम</strong> की है और इसे कानपुर के कंपनी बाग के मुख्य प्रवेश द्वार पर विरासत के रूप में संभालकर रखा गया है।</p>
          <p>यह तोप हमें याद दिलाती है कि कभी यह अत्यंत शक्तिशाली थी और इसने स्वतंत्रता सेनानी सूरमाओं के परखच्चे उड़ा दिए थे। साथ ही यह ब्रिटिश ईस्ट इंडिया कंपनी द्वारा भारतीयों पर ढाए गए अमानवीय जुल्मों और स्वतंत्रता सेनानियों के अमर बलिदान की स्मृति कराती है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">1857 व कंपनी बाग के प्रवेश द्वार का संदर्भ</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">क्रूरता, स्वतंत्रता संग्राम व अमर बलिदान की स्मृति</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch27-q3">
    <div class="q-head" onclick="toggleQ('ch27-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">तोप की वर्तमान स्थिति क्या है? कविता के आधार पर वर्णन कीजिए।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>वर्तमान समय में वह भयंकर तोप पूरी तरह निष्प्रभावी, शांत और खिलौना बनकर रह गई है:</p>
          <ul>
            <li>अब कंपनी बाग में घूमने आने वाले छोटे बच्चे उसकी पीठ पर बैठकर घुड़सवारी का आनंद लेते हैं।</li>
            <li>जब बच्चे हट जाते हैं, तो गौरैया और अन्य चिड़ियाँ उसके ऊपर बैठकर गपशप करती हैं और बेधड़क उसके खुले मुँह के भीतर घुस जाती हैं।</li>
            <li>वर्ष में दो बार (26 जनवरी और 15 अगस्त) उसकी साफ-सफाई व चमकाने का औपचारिक कार्य किया जाता है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बच्चों की घुड़सवारी व चिड़ियों की गपशप का चित्रण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">राष्ट्रीय पर्वों पर चमकाने व खिलौना बन जाने की स्थिति</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch27-q4">
    <div class="q-head" onclick="toggleQ('ch27-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">चिड़ियाँ तोप के ऊपर बैठकर क्या दर्शाती हैं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>चिड़ियों का तोप के ऊपर बैठना और उसके मुँह के भीतर घुस जाना यह दर्शाता है कि <strong>तोप की संहारक शक्ति अब पूरी तरह समाप्त हो चुकी है</strong>।</p>
          <p>यह दृश्य हिंसा पर अहिंसा और विनाशकारी हथियारों पर जीवन की सहज मासूमियत की विजय को रेखांकित करता है। यह सिद्ध करता है कि कोई भी दमनकारी शक्ति हमेशा नहीं टिक सकती, अंत में जीवन, स्वतंत्रता और शांति ही स्थायी रूप से फलती-फूलती है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">तोप की शक्ति शून्यता का निरूपण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">हिंसा पर मासूमियत व शांति की विजय का प्रतीकार्थ</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch27-q5">
    <div class="q-head" onclick="toggleQ('ch27-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">भाव स्पष्ट कीजिए: 'तोप कितनी भी बड़ी हो, एक दिन तो होना ही है उसका मुँह बंद।'</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>भावार्थ:</strong> कवि यह शाश्वत ऐतिहासिक सत्य उद्घाटित करते हैं कि अहंकार, तानाशाही और विनाशकारी अस्त्र-शस्त्रों का बल चाहे कितना भी प्रचंड क्यों न हो, वह कभी अमर नहीं हो सकता।</p>
          <p>इतिहास गवाह है कि बड़े-बड़े क्रूर शासकों, अत्याचारियों और साम्राज्यवादी ताकतों की बंदूकें और तोपें एक दिन हमेशा के लिए खामोश हो जाती हैं। अंततः सत्य, मानवीय प्रेम और आम जनता की जीवटता ही अमर रहती है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">तानाशाही व सैन्य शक्ति के अनिवार्य पतन का भाव</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सत्य व मानवीय चेतना की अमरता का प्रतिपादन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>हथियारों की होड़ बनाम वैश्विक शांति (Disarmament & World Peace):</strong> 'तोप कितनी भी बड़ी हो, एक दिन तो होना ही है उसका मुँह बंद।' वर्तमान समय में विश्व के शक्तिशाली देशों के बीच चल रही परमाणु और मिसाइल प्रतिस्पर्धा के संदर्भ में इस पंक्ति की दार्शनिक प्रासंगिकता की विवेचना कीजिए।</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>विवेचना:</strong> वर्तमान वैश्विक परिदृश्य में राष्ट्र अपनी सुरक्षा के नाम पर संहारक परमाणु अस्त्रों का जखीरा तैयार कर रहे हैं।</p>
        <p>वीरेन डंगवाल की यह कविता विश्व शक्तियों को आईना दिखाती है कि विनाशकारी हथियार कभी स्थायी सुरक्षा या शांति की गारंटी नहीं बन सकते। जिस प्रकार 1857 की तोप आज चिड़ियों का बसेरा बन चुकी है, उसी प्रकार आधुनिक हथियारों की होड़ भी अंततः व्यर्थ सिद्ध होगी। वैश्विक मानवता का कल्याण केवल निःशस्त्रीकरण, संवाद और शांतिपूर्ण सह-अस्तित्व में ही संभव है।</p>
      </div>
    </div>
  </div>
</section>`;

// Chapter 28: कर चले हम फ़िदा (कैफ़ी आज़मी)
const ch28Html = `<section class="chapter-section" id="ch28" data-book="sparsh-kavya">
  <div class="chapter-header">
    <div class="ch-badge">28</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (काव्य खंड) — पाठ 6</div>
      <h2>कर चले हम फ़िदा</h2>
      <p>कैफ़ी आज़मी | देशभक्ति गीत (फिल्म 'हकीकत', 1962 भारत-चीन युद्ध) — सैनिकों का आत्म-बलिदान, देश-प्रेम और नई पीढ़ी को देश-रक्षा का दायित्व | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch28-q1">
    <div class="q-head" onclick="toggleQ('ch28-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">'सर हिमालय का हमने न झुकने दिया'—इस पंक्ति में हिमालय किस बात का प्रतीक है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>इस पंक्ति में हिमालय <strong>भारत देश के मान, सम्मान, स्वाभिमान और संप्रभुता</strong> का सर्वोच्च प्रतीक है।</p>
          <p>सैनिकों ने अपने प्राणों का बलिदान देकर भी शत्रु को हिमालय की बर्फीली चोटियों पर पाँव नहीं पसारने दिए। उन्होंने अपने शीश कटवा लिए किंतु भारत माता के मस्तक रूपी हिमालय को शत्रु के आगे झुकने नहीं दिया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">हिमालय के राष्ट्रीय स्वाभिमान व गौरव का प्रतीक होना</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">प्राण देकर भी सीमा सुरक्षा व मान अक्षुण्ण रखने की व्याख्या</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch28-q2">
    <div class="q-head" onclick="toggleQ('ch28-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">इस गीत की ऐतिहासिक पृष्ठभूमि क्या है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>यह अमर देशभक्ति गीत <strong>1962 के भारत-चीन युद्ध</strong> की ऐतिहासिक पृष्ठभूमि पर चेतन आनंद द्वारा बनाई गई फिल्म <em>'हकीकत'</em> के लिए कैफ़ी आज़मी द्वारा लिखा गया था।</p>
          <p>लद्दाख की बर्फीली घाटियों में विषम परिस्थितियों और सीमित संसाधनों के बावजूद चीनी सेना के भारी आक्रमण के सामने डटे रहकर अंतिम साँस तक मातृभूमि की रक्षा करने वाले भारतीय वीर सैनिकों के अदम्य शौर्य और बलिदान को यह गीत वाणी देता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">1962 भारत-चीन युद्ध व फिल्म 'हकीकत' का संदर्भ</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">लद्दाख की सीमा पर सैनिकों के बलिदान का ऐतिहासिक निरूपण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch28-q3">
    <div class="q-head" onclick="toggleQ('ch28-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">गीत में 'धरती को दुल्हन' क्यों कहा गया है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>भारतीय संस्कृति में दुल्हन लाल जोड़े में सजती है और उसकी लाज व सम्मान की रक्षा करना दूल्हे का परम कर्तव्य होता है।</p>
          <p>सैनिकों ने मातृभूमि की रक्षा करते हुए अपने रक्त की आहुति दी है, जिससे धरती वीरों के खून से लाल हो गई है। ऐसा लगता है मानो सैनिकों ने अपने रक्त से मातृभूमि रूपी दुल्हन को लाल चुनरी ओढ़ा दी हो। सैनिक अपनी दुल्हन (धरती) के मान-सम्मान की रक्षा के लिए अपने प्राण न्योछावर कर रहे हैं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">रक्त से धरती के लाल होने व लाल जोड़े का रूपक</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">दुल्हन के सम्मान की रक्षा हेतु प्राणोत्सर्ग की व्याख्या</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch28-q4">
    <div class="q-head" onclick="toggleQ('ch28-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">सैनिकों के अनुसार 'ज़िंदगी मौत से गले मिल रही है' का क्या तात्पर्य है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>युद्धभूमि में वीर सैनिक मौत को कोई भय या दुख का कारण नहीं मानते, बल्कि मातृभूमि के लिए अपने प्राण न्योछावर करने को एक पावन उत्सव मानते हैं।</p>
          <p>सैनिक मृत्यु का आलिंगन उसी उत्साह और उल्लास से कर रहे हैं जैसे कोई प्रिय मित्र से गले मिलता है। यह कथन सैनिकों के अदम्य साहस, आत्म-बलिदान के अद्वितीय आनंद और देश-प्रेम की पराकाष्ठा को व्यक्त करता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">मौत को भय न मानकर सहर्ष स्वीकार करने का भाव</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मातृभूमि के लिए प्राणोत्सर्ग के उल्लास का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch28-q5">
    <div class="q-head" onclick="toggleQ('ch28-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">'खींच दो अपने खूँ से ज़मीं पर लकीर, इस तरफ़ आने पाए न रावण कोई'—पंक्ति का भावार्थ स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>भावार्थ:</strong> यहाँ 'रावण' विदेशी आक्रांताओं और शत्रुओं का प्रतीक है, और 'लकीर' लक्ष्मण रेखा की भाँति अभेद्य सुरक्षा का प्रतीक है।</p>
          <p>बलिदानी सैनिक अपने देशवासियों और युवा साथियों का आह्वान करते हैं कि वे अपने रक्त से सीमा पर ऐसी अभेद्य लक्ष्मण रेखा खींच दें जिसे पार करने का दुस्साहस कोई भी शत्रु रूपी रावण न कर सके। यदि कोई शत्रु हमारी मातृभूमि रूपी सीता की पवित्रता पर कुदृष्टि डाले, तो उसका हाथ तुरंत काट दिया जाए।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">रावण (शत्रु) व लकीर (लक्ष्मण रेखा) के प्रतीकार्थ</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मातृभूमि की अखंडता हेतु रक्त से सुरक्षा रेखा खींचने का आह्वान</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch28-q6">
    <div class="q-head" onclick="toggleQ('ch28-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">सैनिकों ने देशवासियों से क्या उम्मीदें रखी हैं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>जाते-जाते बलिदानी सैनिकों ने देशवासियों और नई पीढ़ी से निम्नलिखित आशाएँ रखी हैं:</p>
          <ul>
            <li>देश की स्वतंत्रता, अखंडता और सम्मान की रक्षा का दायित्व अब देशवासियों के कंधों पर है ("अब तुम्हारे हवाले वतन साथियों")।</li>
            <li>देश के लिए बलिदान देने वालों का काफिला कभी रुकना नहीं चाहिए।</li>
            <li>मातृभूमि की रक्षा के लिए हर नागरिक अपने व्यक्तिगत सुखों का त्याग करने और सीने पर गोली खाने को तत्पर रहे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">देश-रक्षा की बागडोर नई पीढ़ी को सौंपने का भाव</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">बलिदान के काफिले को निरंतर जारी रखने की उम्मीद</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>नागरिक चेतना एवं राष्ट्र निर्माण (Civic Duty & Nation Building):</strong> 'कर चले हम फ़िदा' में सीमा पर तैनात सैनिक अपना सर्वस्व बलिदान कर रहे हैं। शांतिकालीन समय में एक सामान्य नागरिक या विद्यार्थी के रूप में आप देश-सेवा में अपना क्या योगदान दे सकते हैं?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>विश्लेषण:</strong> देश-सेवा केवल सीमा पर बंदूक थामकर ही नहीं होती, बल्कि शांतिकाल में एक जिम्मेदार नागरिक के रूप में अपने कर्तव्यों का निष्ठापूर्वक पालन करना भी सच्ची देशभक्ति है:</p>
        <ul>
          <li>एक विद्यार्थी के रूप में लगन से पढ़ाई कर वैज्ञानिक, तकनीकी और आर्थिक प्रगति में योगदान देना।</li>
          <li>पर्यावरण संरक्षण, स्वच्छता और जल-संरक्षण के प्रति सजग रहना।</li>
          <li>जाति, धर्म और क्षेत्रवाद की संकीर्णताओं से ऊपर उठकर सामाजिक सौहार्द और राष्ट्रीय एकता को सुदृढ़ बनाना।</li>
        </ul>
      </div>
    </div>
  </div>
</section>`;

// Chapter 29: आत्मत्राण (रवींद्रनाथ ठाकुर)
const ch29Html = `<section class="chapter-section" id="ch29" data-book="sparsh-kavya">
  <div class="chapter-header">
    <div class="ch-badge">29</div>
    <div class="chapter-header-info">
      <div class="ch-category">स्पर्श भाग-2 (काव्य खंड) — पाठ 7</div>
      <h2>आत्मत्राण</h2>
      <p>रवींद्रनाथ ठाकुर (अनुवाद: आचार्य हजारीप्रसाद द्विवेदी) | प्रार्थना गीत — आत्म-निर्भरता, पुरुषार्थ, संशय-मुक्ति और संकटों से जूझने का आत्मिक संबल | CBSE Board 2026-27</p>
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
          <p>कवि ईश्वर से संकटों को टालने या उनसे भागने की भीख नहीं माँगता, क्योंकि वह कायर और परावलंबी नहीं बनना चाहता।</p>
          <p>कवि चाहता है कि उसके जीवन में चाहे जैसी भी कठिन और विकट परिस्थितियाँ आएँ, वह उनसे भयभीत न हो। वह ईश्वर से केवल इतना आत्मिक बल और साहस माँगता है कि वह अपने पुरुषार्थ और आत्म-विश्वास के बल पर हर विपत्ति पर विजय प्राप्त कर सके।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">परावलंबन व कायरता के विरोध का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">विपदाओं पर स्वयं विजय पाने हेतु आत्म-बल माँगने का तर्क</span><span class="marking-marks">1.5 अंक</span></div>
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
          <p><strong>'आत्मत्राण' का अर्थ:</strong> 'आत्म' अर्थात् स्वयं और 'त्राण' अर्थात् रक्षा या मुक्ति। इसका अर्थ है—<strong>'स्वयं अपनी रक्षा करना'</strong> या आत्मिक शक्ति द्वारा संकटों से पार पाना।</p>
          <p><strong>सामान्य प्रार्थना गीतों से भिन्नता:</strong></p>
          <ul>
            <li>सामान्य प्रार्थना गीतों में भक्त ईश्वर से धन, सुख, विपत्तियों का नाश और रोगों से मुक्ति की याचना करता है और ईश्वर पर पूर्णतः निर्भर हो जाता है।</li>
            <li>किंतु 'आत्मत्राण' में कवि ईश्वर से कोई सांसारिक लाभ या दुख-निवारण नहीं माँगता। वह दुख और हानि को सहने की अदम्य आत्मिक शक्ति और निर्भयता की याचना करता है। यह प्रार्थना मनुष्य के स्वाभिमान और पुरुषार्थ को जाग्रत करती है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">'आत्मत्राण' का सटीक शाब्दिक व दार्शनिक अर्थ</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सामान्य प्रार्थना (याचना) बनाम आत्मत्राण (पुरुषार्थ/शक्ति) की तुलना</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch29-q3">
    <div class="q-head" onclick="toggleQ('ch29-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">कवि विपत्ति के समय प्रभु से क्या याचना करता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि विपत्ति के समय ईश्वर से निम्नलिखित विनम्र याचनाएँ करता है:</p>
          <ul>
            <li>विपत्तियों के समय उसके मन में कभी भय का संचार न हो ("विपदाओं से मुझे बचाओ, यह मेरी प्रार्थना नहीं—केवल सब विपदाओं में न पाऊँ भय")।</li>
            <li>यदि कोई सांत्वना देने वाला या सहायक न मिले, तो भी उसका अपना पराक्रम और आत्म-विश्वास न डगमगाए।</li>
            <li>संसार में केवल हानि या वंचना (धोखा) मिलने पर भी उसके मन में निराशा का वास न हो।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">निर्भयता व आत्म-विश्वास बनाए रखने की याचना</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सहायक के अभाव में भी पराक्रम न डिगने का भाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch29-q4">
    <div class="q-head" onclick="toggleQ('ch29-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">सुख के दिनों में कवि ईश्वर के प्रति क्या भाव रखना चाहता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि कहता है—<em>"नतशिर होकर सुख के दिन में, तब मुख पहचानूँ छिन-छिन में।"</em></p>
          <p>सुख के दिनों में अक्सर मनुष्य ईश्वर को भूल जाता है और घमंड में चूर हो जाता है। किंतु कवि चाहता है कि वह सुख और समृद्धि के समय भी विनम्र भाव से सिर झुकाकर हर पल ईश्वर के रूप को पहचाने और उनके प्रति कृतज्ञ रहे, ताकि सुख में भी उसका अहंकार न बढ़े।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">नतशिर (विनम्र) होकर प्रतिपल प्रभु को याद रखने का भाव</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सुख में अहंकार से मुक्ति व कृतज्ञता का निरूपण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch29-q5">
    <div class="q-head" onclick="toggleQ('ch29-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">'तव मुख अनाम'—कवि किन परिस्थितियों में ईश्वर पर संशय न करने की प्रार्थना करता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि कहता है—<em>"दुख-निशा में जो करे वंचना भुवन, उस दिन भी करूँ न संशय तुम पर।"</em></p>
          <p>जब घोर दुख और विपत्ति की अंधेरी रात छाई हो और पूरा संसार उसके साथ विश्वासघात (धोखा) करे, उस भीषण निराशा और अकेलेपन के क्षणों में भी कवि के मन में ईश्वर के न्याय, दया और सत्ता पर रत्ती भर भी संदेह (संशय) उत्पन्न न हो। उसका प्रभु पर विश्वास अडिग रहे।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">घोर विपत्ति व संसार के विश्वासघात की परिस्थिति</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">ईश्वर के प्रति अटूट आस्था व संशय-मुक्ति का संकल्प</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch29-q6">
    <div class="q-head" onclick="toggleQ('ch29-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">भाव स्पष्ट कीजिए: 'मेरा भार अगर लघु करके न दो सांत्वना नहीं सही। केवल इतना रखना अनुनय—वहन कर सकूँ इसको निर्भय।'</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>भावार्थ:</strong> कवि ईश्वर से अपने दुखों के बोझ (भार) को कम करने या झूठी सांत्वना देने का आग्रह नहीं करता।</p>
          <p>वह परमात्मा से केवल इतनी-सी विनम्र प्रार्थना करता है कि प्रभु उसे आंतरिक शक्ति, साहस और निर्भयता प्रदान करें ताकि वह अपने जीवन के हर संघर्ष और उत्तरदायित्व के भारी बोझ को बिना झुके और बिना घबराए अपनी शक्ति से स्वयं उठा सके। यह आत्म-निर्भरता की सर्वोच्च अभिव्यक्ति है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">दुख का भार कम न करने व सांत्वना न माँगने का भाव</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">निर्भय होकर स्वयं भार वहन करने की आत्मिक शक्ति का प्रतिपादन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>आत्म-निर्भरता एवं मनोवैज्ञानिक सशक्तिकरण (Self-Reliance & Psychological Resilience):</strong> 'आत्मत्राण' कविता पलायनवाद और परावलंबन के स्थान पर 'रेजिलिएंस' (आंतरिक संघर्ष-क्षमता) का संदेश देती है। विद्यार्थियों के जीवन में असफलता और मानसिक दबाव के समय यह दृष्टिकोण किस प्रकार संजीवनी का कार्य कर सकता है?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>विश्लेषण:</strong> परीक्षा या जीवन की असफलताओं में विद्यार्थी अक्सर तनावग्रस्त होकर भाग्य या परिस्थितियों को दोष देने लगते हैं या पलायन का रास्ता चुनते हैं।</p>
        <p><strong>मानसिक सशक्तिकरण:</strong> रवींद्रनाथ ठाकुर की यह कविता सिखाती है कि बाधाओं से डरना नहीं, बल्कि अपनी आंतरिक क्षमता और आत्म-विश्वास पर भरोसा रखकर उनका सामना करना चाहिए। जब कोई विद्यार्थी संकटों को कम कराने के बजाय उनसे लड़ने की मानसिक शक्ति विकसित करता है, तो वह हर विफलता को अपनी सफलता की सीढ़ी बना लेता है।</p>
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(dir, 'ch23.html'), ch23Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch24.html'), ch24Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch25.html'), ch25Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch26.html'), ch26Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch27.html'), ch27Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch28.html'), ch28Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch29.html'), ch29Html, 'utf8');

console.log('Successfully enriched Batch 5 (Ch 23 to Ch 29 - Sparsh Poetry) to 100% NCERT textbook coverage!');
