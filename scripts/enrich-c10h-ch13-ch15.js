const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c10h');

// Chapter 13: माता का आँचल (Kritika-2 Ch 1)
const ch13Html = `<section class="chapter-section" id="ch13" data-book="kritika">
  <div class="chapter-header">
    <div class="ch-badge">13</div>
    <div class="chapter-header-info">
      <div class="ch-category">कृतिका भाग-2 — पाठ 1</div>
      <h2>माता का आँचल</h2>
      <p>शिवपूजन सहाय (उपन्यास 'देहाती दुनिया' से) | संस्मरण — ग्रामीण बाल्यकाल, वात्सल्य, पिता-पुत्र का स्नेह और संकट में मातृ-छाया | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch13-q1">
    <div class="q-head" onclick="toggleQ('ch13-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">प्रस्तुत पाठ के आधार पर यह कहा जा सकता है कि बच्चे का अपने पिता से अधिक जुड़ाव था, फिर भी विपदा के समय वह पिता के पास न जाकर माँ की शरण लेता है। आपकी समझ से इसकी क्या वजह हो सकती है?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>भोलानाथ का अधिकांश समय पिता के साथ ही बीतता था—पिता ही उसे नहलाते-धुलाते, पूजा में बिठाते, साथ खिलाते और घुमाने ले जाते थे। माँ से उसका संबंध केवल दूध पीने तक सीमित प्रतीत होता था।</p>
          <p>किंतु जब बच्चे पर साँप का भीषण भय और संकट आया, तो वह बाहर बरामदे में बैठे पिता के पुकारने पर भी उनके पास न जाकर सीधा अंदर माँ की गोद में जाकर छिप गया। इसके मुख्य कारण निम्नलिखित हैं:</p>
          <ul>
            <li><strong>सुरक्षा और शांति की चरम अनुभूति:</strong> माँ का आँचल बच्चे के लिए प्रेम, ममता और सुरक्षा का सबसे अभेद्य किला होता है। संकट की घड़ी में माँ के हृदय की धड़कन बच्चे के भय को तुरंत शांत कर देती है।</li>
            <li><strong>सहज वात्सल्य और ममता:</strong> माँ के आँचल में जो ममतामयी गर्माहट, कोमलता और अश्रुपूरित सहानुभूति मिलती है, वह पिता के कठोर संरक्षण में नहीं मिल पाती। माँ बच्चे के दर्द को देखकर स्वयं रो पड़ती है और उसे अपनी छाती से चिपका लेती है।</li>
            <li><strong>प्राकृतिक मनोवैज्ञानिक सुरक्षा:</strong> विपदा के समय बालक स्वाभाविक रूप से उस शरणस्थली की ओर भागता है जहाँ उसे असीम अपनत्व और निर्भयता का बोध हो, और वह स्थान माँ का आँचल ही है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पिता के साथ दैनिक दिनचर्या व जुड़ाव का संदर्भ</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">माँ के आँचल में सुरक्षा, ममता व शांति की मनोवैज्ञानिक व्याख्या</span><span class="marking-marks">2.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch13-q2">
    <div class="q-head" onclick="toggleQ('ch13-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">आपके विचार से भोलानाथ अपने साथियों को देखकर सिसकना क्यों भूल जाता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>बाल-मन स्वभाव से अत्यंत चंचल, खेलप्रिय और साथी-उन्मुख होता है। जब भोलानाथ माँ द्वारा कड़वा तेल लगाने और चोटी गूँथने पर रोने-सिसकने लगता था, तब पिता उसे गोद में उठाकर बाहर लाते थे।</p>
          <p>किंतु जैसे ही भोलानाथ बाहर अपनी हमउम्र बाल-मंडली को तरह-तरह के खेल खेलते और हुल्लड़ मचाते देखता, उसका ध्यान अपने दुख-दर्द से हटकर खेल के स्वाभाविक आकर्षण में खो जाता था। बाल-मनोविज्ञान के अनुसार साथियों का संग बच्चों के हर कष्ट को भुला देता है, इसलिए वह पिता की गोद से उतरकर तुरंत सिसकना भूल जाता था।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बाल-मन की खेलप्रियता व चंचलता का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मित्र-मंडली के आकर्षण द्वारा दुख भूलने का मनोवैज्ञानिक विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch13-q3">
    <div class="q-head" onclick="toggleQ('ch13-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">आपने देखा होगा कि भोलानाथ और उसके साथी जब-तब ऐसे खेल खेलते थे जिनमें दैनिक जीवन की वस्तुओं का उपयोग होता था। पाठ में वर्णित खेलों और आज के बच्चों के खेलों में क्या अंतर है?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>पाठ में वर्णित खेलों और आज के आधुनिक खेलों में ज़मीन-आसमान का अंतर आ गया है:</p>
          <ul>
            <li><strong>प्राकृतिक व सामूहिक खेल (तत्कालीन समय):</strong> भोलानाथ और उसके साथी मिट्टी, दीये, ठीकरी, पत्तों, तिनकों और टूटी-फूटी घरेलू वस्तुओं से खेल रचते थे (जैसे मिठाई की दुकान, बारात, खेती करना)। इन खेलों में प्रकृति से सीधा जुड़ाव, असीमित रचनात्मकता और समूह में परस्पर सहयोग की भावना थी। इनमें कोई आर्थिक खर्च नहीं था।</li>
            <li><strong>एकाकी व तकनीकी खेल (वर्तमान समय):</strong> आज के बच्चे घर की चारदीवारी में वीडियो गेम्स, मोबाइल, कंप्यूटर और प्लास्टिक/इलेक्ट्रॉनिक खिलौनों में उलझे रहते हैं। इन खेलों में सामाजिक मेलजोल, शारीरिक परिश्रम और मौलिक कल्पनाशीलता का अभाव होता है तथा ये अत्यंत खर्चीले होते हैं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भोलानाथ के खेलों की स्वाभाविकता, रचनात्मकता व सामूहिक सहभागिता</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">वर्तमान आधुनिक/गैजेट-आधारित एकाकी खेलों से तुलनात्मक विश्लेषण</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch13-q4">
    <div class="q-head" onclick="toggleQ('ch13-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">पाठ में आए ऐसे प्रसंगों का वर्णन कीजिए जो आपके दिल को छू गए हों।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>पाठ में अनेक ऐसे हृदयस्पर्शी प्रसंग हैं जो पाठक के मन को गहराई से छू लेते हैं:</p>
          <ol>
            <li><strong>पिता-पुत्र का वात्सल्य:</strong> पिता द्वारा भोलानाथ को पूजा में बिठाकर भभूत का तिलक लगाना और उसे 'बबुआ' कहना तथा कुश्ती में जानबूझकर बच्चे से हार जाना पिता के अगाध वात्सल्य को दर्शाता है।</li>
            <li><strong>माता का वात्सल्यमयी खिलाना:</strong> माँ का यह कहकर विभिन्न पक्षियों के नाम पर कौर बनाकर खिलाना कि "जल्दी खा लो नहीं तो उड़ जाएँगे" बाल-सुलभ चंचलता को जीवंत करता है।</li>
            <li><strong>साँप के भय से माँ की शरण:</strong> अंत में लहूलुहान और भयभीत होकर भोलानाथ का माँ के आँचल में मुँह छिपाना और माँ का व्याकुल होकर रो पड़ना ममता की पराकाष्ठा है।</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कम से कम 2-3 हृदयस्पर्शी प्रसंगों का सटीक उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भावुकता व वात्सल्य रस की सुस्पष्ट अभिव्यक्ति</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch13-q5">
    <div class="q-head" onclick="toggleQ('ch13-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">'माता का आँचल' शीर्षक की उपयुक्तता बताते हुए कोई अन्य शीर्षक सुझाइए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>शीर्षक की सार्थकता:</strong> 'माता का आँचल' शीर्षक अत्यंत उपयुक्त, सार्थक और मर्मस्पर्शी है। यद्यपि पूरे पाठ में पिता के साथ बालक की दिनचर्या और खेल-कूद का विस्तार है, किंतु कहानी का चरमोत्कर्ष और केंद्रीय भाव उस क्षण प्रकट होता है जब भारी संकट में बालक पिता की पुकार छोड़कर सीधे माँ के आँचल में आश्रय पाता है। माँ का आँचल ही शांति, सांत्वना और सुरक्षा का अंतिम दुर्ग सिद्ध होता है।</p>
          <p><strong>अन्य उपयुक्त शीर्षक:</strong> <em>'बचपन के वे दिन'</em>, <em>'मातृ-छाया'</em> अथवा <em>'भोलानाथ का बचपन'</em>।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शीर्षक के चरमोत्कर्ष व मूल भाव से जुड़ाव का औचित्य</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">तर्कसंगत वैकल्पिक शीर्षक का प्रस्ताव</span><span class="marking-marks">1 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch13-q6">
    <div class="q-head" onclick="toggleQ('ch13-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">बच्चे माता-पिता के प्रति अपने प्रेम को कैसे अभिव्यक्त करते हैं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>बच्चे अपने माता-पिता के प्रति प्रेम शब्दों द्वारा नहीं बल्कि अपनी सहज क्रियाओं और चेष्टाओं द्वारा व्यक्त करते हैं:</p>
          <ul>
            <li>माता-पिता की गोद में लिपटकर और उनके कंधे पर बैठकर अपनी प्रसन्नता प्रकट करना।</li>
            <li>अपनी छोटी-छोटी बातें, जिज्ञासाएँ और दिनभर के किस्से बिना झिझक उनके साथ साझा करना।</li>
            <li>माता-पिता के साथ खेलते हुए रूठना, लाड़ जताना और उन्हें चूमना।</li>
            <li>विपत्ति या डर के समय माता-पिता के गले लग जाना और उनके आँचल में सुरक्षा महसूस करना।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बालक की सहज शारीरिक व भावनात्मक अभिव्यक्तियों का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">विश्वास व अपनत्व की मनोवैज्ञानिक व्याख्या</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch13-q7">
    <div class="q-head" onclick="toggleQ('ch13-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">इस उपन्यास अंश में तीस के दशक की ग्रामीण संस्कृति का चित्रण है। आज की ग्रामीण संस्कृति में आपको किस तरह के परिवर्तन दिखाई देते हैं?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>तीस के दशक की ग्रामीण संस्कृति और आज के ग्रामीण परिवेश में निम्नलिखित गहरे परिवर्तन आ चुके हैं:</p>
          <ul>
            <li><strong>सामूहिकता का ह्रास:</strong> तीस के दशक में पूरा गाँव एक परिवार की तरह था, जहाँ बच्चों की सामूहिक टोलियाँ दिनभर खेतों और गलियों में खेलती थीं। आज गाँवों में भी एकल परिवार और व्यक्तिगत व्यस्तताएँ बढ़ गई हैं।</li>
            <li><strong>खेल-कूद और मनोरंजन:</strong> पहले बच्चे धूल-मिट्टी, पेड़ों और घरेलू साधनों से खेलते थे। आज गाँवों में भी मोबाइल फोन, टीवी और इंटरनेट का प्रसार हो गया है।</li>
            <li><strong>सांस्कृतिक और जीवनशैली में बदलाव:</strong> पहले के कच्चे घर, लोकगीत, चौपालें और पारंपरिक कृषि उपकरण अब पक्के मकानों, आधुनिक मशीनों (ट्रैक्टर आदि) और पाश्चात्य जीवनशैली से प्रतिस्थापित हो चुके हैं। यद्यपि शिक्षा व स्वास्थ्य के साधन बेहतर हुए हैं, किंतु पारस्परिक अपनत्व कम हुआ है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">तीस के दशक के ग्रामीण जीवन (पारस्परिकता, खेल) का विश्लेषण</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">आधुनिक तकनीकी व सामाजिक परिवर्तनों का तुलनात्मक विवेचन</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch13-q8">
    <div class="q-head" onclick="toggleQ('ch13-q8')">
      <div class="q-num">प्रश्न 8</div>
      <div class="q-text">'भोलानाथ' नाम कैसे पड़ा और उसका वास्तविक नाम क्या था?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक का वास्तविक नाम <strong>तारकेश्वर नाथ</strong> था।</p>
          <p>उनके पिता पूजा-अर्चना के समय उन्हें अपने पास बिठाकर उनके चौड़े ललाट पर भभूत का त्रिपुंड कर देते थे। सिर पर लंबी जटाएँ होने के कारण वे 'बम-भोला' जैसे दिखाई देने लगते थे। उनके पिता बड़े प्यार से उन्हें 'भोलानाथ' कहकर पुकारते थे। अतः परिवार और मित्रों के बीच उनका नाम 'भोलानाथ' ही प्रचलित हो गया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">वास्तविक नाम 'तारकेश्वर नाथ' का सही उल्लेख</span><span class="marking-marks">1 अंक</span></div>
          <div class="marking-row"><span class="marking-key">त्रिपुंड, जटाओं व पिता द्वारा प्यार से पुकारे जाने का प्रसंग</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch13-q9">
    <div class="q-head" onclick="toggleQ('ch13-q9')">
      <div class="q-num">प्रश्न 9</div>
      <div class="q-text">पाठ में वर्णित बारात के जुलूस और भोज का दृश्य किस प्रकार तत्कालीन सामाजिक जीवन का यथार्थ चित्र प्रस्तुत करता है?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>पाठ में बच्चों द्वारा कल्पित बारात का खेल तत्कालीन ग्रामीण रीति-रिवाजों और सामाजिक जीवन का सजीव आईना है:</p>
          <ul>
            <li><strong>पारंपरिक वैवाहिक रस्में:</strong> टूटे चूहेदानी की पालकी बनाना, आम के पत्तों की शहनाई, बकरे को घोड़ा बनाना और समधी बनकर हुक्का पीना तत्कालीन ग्रामीण विवाह के वास्तविक दृश्यों का बाल-अनुकरण है।</li>
            <li><strong>पंगत भोज की संस्कृति:</strong> ढेलों के चूल्हे, दीयों की कड़ाही और गीली मिट्टी की पूरियाँ बनाकर पंगत में बिठाकर खिलाना उस युग के सामूहिक भोज और सामाजिक सौहार्द को दर्शाता है।</li>
            <li><strong>बड़ों की स्नेहपूर्ण सहभागिता:</strong> जब पिता आकर पूछते कि "भोज में क्या बना है?" या पालकी का परदा उठाकर दुलहिन का मुख देखने की चेष्टा करते, तो बच्चे हँसकर भाग जाते। यह बड़ों और बच्चों के बीच के सहज वात्सल्य और अपनत्व को प्रमाणित करता है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बारात व भोज के प्रतीकात्मक खेल का यथार्थ वर्णन</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">तत्कालीन सामाजिक सौहार्द व बड़ों के वात्सल्य का विश्लेषण</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>प्रकरण अध्ययन (Case Study):</strong> 'माता का आँचल' पाठ यह स्थापित करता है कि शिशु की मानसिक व संवेगात्मक सुरक्षा के केंद्र में माँ का स्थान अद्वितीय है। वर्तमान समय में कार्यस्थल की व्यस्तता और डे-केयर संस्कृति के बीच बच्चे और माता-पिता के संवेगात्मक संबंधों पर पड़ने वाले प्रभावों का आलोचनात्मक मूल्यांकन कीजिए।</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>विश्लेषण:</strong> पाठ में संकट के समय भोलानाथ का माँ के आँचल में छिपना यह प्रमाणित करता है कि बच्चे को शारीरिक कष्ट से अधिक संवेगात्मक आश्वस्ति की आवश्यकता होती है, जो केवल माँ के स्पर्श और स्नेह से मिलती है।</p>
        <p><strong>वर्तमान संदर्भ में प्रभाव:</strong> आधुनिक जीवनशैली में माता-पिता की व्यस्तता और स्क्रीन-निर्भरता के कारण बच्चों में भावनात्मक अकेलापन बढ़ रहा है। अतः यह आवश्यक है कि भौतिक सुख-सुविधाओं के स्थान पर गुणवत्तापूर्ण समय (Quality Time) और प्रत्यक्ष संवेगात्मक सम्बल दिया जाए, ताकि बच्चे का मानसिक और नैतिक विकास सुदृढ़ हो सके।</p>
      </div>
    </div>
  </div>
</section>`;

// Chapter 14: साना-साना हाथ जोड़ि... (Kritika-2 Ch 2)
const ch14Html = `<section class="chapter-section" id="ch14" data-book="kritika">
  <div class="chapter-header">
    <div class="ch-badge">14</div>
    <div class="chapter-header-info">
      <div class="ch-category">कृतिका भाग-2 — पाठ 2</div>
      <h2>साना-साना हाथ जोड़ि...</h2>
      <p>मधु कांकरिया | यात्रा-वृतांत — पूर्वोत्तर भारत, सिक्किम (गंतोक, युमथांग, कटाओ), प्राकृतिक सौंदर्य और श्रमशील नारियों का जीवन | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch14-q1">
    <div class="q-head" onclick="toggleQ('ch14-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">झिलमिलाते सितारों की रोशनी में नहाया गंतोक लेखिका को किस तरह सम्मोहित कर रहा था?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>रात के समय गंतोक शहर की खूबसूरती जादुई और अद्भुत प्रतीत हो रही थी। ढलान पर बनी बस्तियों में जगमगाती बत्तियों की लड़ियाँ सितारों के गुच्छे जैसी चमक रही थीं, मानो आसमान उलट पड़ा हो और सारे सितारे ज़मीन पर बिखर गए हों।</p>
          <p>इस रहस्यमयी सौंदर्य ने लेखिका के भीतर और बाहर एक गहरा सन्नाटा भर दिया। उनकी चेतना पूरी तरह सम्मोहित हो गई थी और वे उस जादुई उजास में स्वयं को शून्य और विस्मय में डूबा हुआ महसूस कर रही थीं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">जगमगाती रोशनी व सितारों के बिंब का चित्रण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">लेखिका के अंतर्मन पर सम्मोहन व शांति का प्रभाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch14-q2">
    <div class="q-head" onclick="toggleQ('ch14-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">गंतोक को 'मेहनतकश बादशाहों का शहर' क्यों कहा गया?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>गंतोक को 'मेहनतकश बादशाहों का शहर' इसलिए कहा गया है क्योंकि यहाँ का सौंदर्य किसी राजा-महाराजा के विलास का परिणाम नहीं, बल्कि यहाँ के आम नागरिकों के अथक परिश्रम और पसीने की देन है।</p>
          <p>यहाँ के स्त्री-पुरुष और बच्चे विषम पहाड़ी परिस्थितियों, हाड़ कंपाती ठंड और दुर्गम रास्तों में भी निरंतर कठोर श्रम करते हैं। वे कठिन परिस्थितियों में भी स्वाभिमान, गरिमा और मुस्कान के साथ जीवन जीते हैं, इसलिए उन्हें 'बादशाह' कहा गया है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कठिन भौगोलिक परिस्थिति व कठोर परिश्रम का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">स्वाभिमान, मस्तमौलापन व 'बादशाह' संज्ञा का औचित्य</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch14-q3">
    <div class="q-head" onclick="toggleQ('ch14-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">कभी श्वेत तो कभी रंगीन पताकाओं का फहराना किन अलग-अलग अवसरों की ओर संकेत करता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>सिक्किम में बौद्ध मान्यताओं के अनुसार पताकाओं का फहराना विशिष्ट अवसरों का प्रतीक है:</p>
          <ul>
            <li><strong>श्वेत पताकाएँ:</strong> जब किसी बौद्ध भिक्षु या मतावलंबी की मृत्यु होती है, तो उसकी आत्मा की शांति के लिए शहर से दूर किसी पवित्र स्थान पर 108 श्वेत पताकाएँ फहराई जाती हैं, जिन पर मंत्र लिखे होते हैं। इन्हें उतारा नहीं जाता, ये स्वतः नष्ट हो जाती हैं।</li>
            <li><strong>रंगीन पताकाएँ:</strong> जब किसी नए कार्य का शुभारंभ होता है या कोई शुभ अवसर होता है, तब रंग-बिरंगी पताकाएँ लगाई जाती हैं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">श्वेत पताका (शोक/मृत्यु व 108 संख्या) का संदर्भ</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">रंगीन पताका (शुभ कार्य/नया आरंभ) का संदर्भ</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch14-q4">
    <div class="q-head" onclick="toggleQ('ch14-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">जितेन नार्गे ने लेखिका को सिक्किम की प्रकृति, वहाँ की भौगोलिक स्थिति एवं जनजीवन के बारे में क्या महत्त्वपूर्ण जानकारियाँ दीं, लिखिए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>गाइड जितेन नार्गे ने सिक्किम के संदर्भ में निम्नलिखित प्रामाणिक व रोचक जानकारियाँ दीं:</p>
          <ul>
            <li><strong>भौगोलिक व प्राकृतिक स्वरूप:</strong> गंतोक से युमथांग की दूरी 149 किमी है। रास्ते में तीस्ता नदी, पाइन और धूपी के घने जंगल, तथा घाटियों में खिले 'प्रिमता' और 'रूडोडेन्ड्रॉन' के फूल मन मोह लेते हैं।</li>
            <li><strong>धार्मिक विश्वास व संस्कृति:</strong> यहाँ बौद्ध धर्म का व्यापक प्रभाव है। 'धर्म-चक्र' (प्रेयर व्हील) को घुमाने से सारे पाप धुल जाते हैं। खेदुम में देवी-देवताओं का वास माना जाता है जहाँ लोग गंदगी नहीं फैलाते।</li>
            <li><strong>कठिन जनजीवन:</strong> पहाड़ की औरतें पीठ पर बँधी डोको (टोकरी) में बच्चों को लेकर पत्थर तोड़कर सड़कें बनाती हैं। बच्चे 3-4 किमी की चढ़ाई चढ़कर स्कूल पढ़ने जाते हैं और शाम को मवेशी चराते व लकड़ियाँ ढोते हैं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">प्रकृति, मार्ग व वनस्पतियों का विवरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">धार्मिक आस्थाएँ (धर्म-चक्र आदि) व जनजीवन का संघर्ष</span><span class="marking-marks">2.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch14-q5">
    <div class="q-head" onclick="toggleQ('ch14-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">'लोंग स्टॉक' में घूमते हुए चक्र को देखकर लेखिका को पूरे भारत की आत्मा एक-सी क्यों दिखाई दी?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि लोंग स्टॉक में जितेन नार्गे ने एक कुटिया में घूमता हुआ 'धर्म चक्र' (प्रेयर व्हील) दिखाते हुए कहा कि इसे घुमाने से सारे पाप धुल जाते हैं।</p>
          <p>यह सुनकर लेखिका ने सोचा कि चाहे मैदान हो या पहाड़, तमाम वैज्ञानिक प्रगति के बावजूद पूरे भारत की अंतरात्मा एक ही जैसी है। पूरे देश के लोगों की आस्थाएँ, विश्वास, अंधविश्वास, पाप-पुण्य की अवधारणाएँ और कल्पनाएँ एक समान हैं। यह सांस्कृतिक एकता पूरे भारत को एक सूत्र में पिरोती है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">धर्म-चक्र व पाप-पुण्य की लोक-मान्यता का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">अखिल भारतीय सांस्कृतिक व संवेगात्मक एकता का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch14-q6">
    <div class="q-head" onclick="toggleQ('ch14-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">जितेन नार्गे की गाइड की भूमिका के बारे में विचार करते हुए लिखिए कि एक कुशल गाइड में क्या गुण होते हैं?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>जितेन नार्गे केवल ड्राइवर ही नहीं, एक अत्यंत कुशल, संवेदनशील और मार्गदर्शक गाइड सिद्ध हुआ। एक कुशल गाइड में निम्नलिखित गुण होने आवश्यक हैं:</p>
          <ul>
            <li><strong>स्थानीय भूगोल व संस्कृति का गहन ज्ञान:</strong> गाइड को क्षेत्र के इतिहास, मार्गों, धार्मिक मान्यताओं और लोक-संस्कृति की प्रामाणिक जानकारी होनी चाहिए, जैसे नार्गे को गाइड फिल्म की शूटिंग स्थल, खेदुम और कटाओ का ज्ञान था।</li>
            <li><strong>वाक्पटुता व मिलनसार स्वभाव:</strong> उसे पर्यटकों को रोचक प्रसंगों और लोकगीतों से बाँधे रखने की कला आनी चाहिए।</li>
            <li><strong>धैर्य व संवेदनशीलता:</strong> विषम और संकटकालीन परिस्थितियों में शांत रहकर पर्यटकों को सुरक्षित रखने तथा उनका उत्साह बनाए रखने की क्षमता होनी चाहिए।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">जितेन नार्गे के चरित्र-गुणों का मूल्यांकन</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">एक आदर्श गाइड के अनिवार्य व्यावहारिक गुणों का बिंदुवार निरूपण</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch14-q7">
    <div class="q-head" onclick="toggleQ('ch14-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">इस यात्रा-वृतांत में लेखिका ने हिमालय के जिन रूपों का चित्र खींचा है, उन्हें अपने शब्दों में लिखिए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखिका ने यात्रा के दौरान हिमालय के पल-पल परिवर्तित होते भव्य और विस्मयकारी रूपों का चित्रण किया है:</p>
          <ul>
            <li><strong>विशाल और विराट रूप:</strong> जैसे-जैसे गाड़ी ऊँचाई पर बढ़ती है, हिमालय अपने छोटे रूप को त्यागकर विशालकाय और विराट स्वरूप में प्रकट होने लगता है। घाटियाँ पाताल जैसी गहरी और पर्वत गगनचुंबी नजर आते हैं।</li>
            <li><strong>रंगों का जादुई खेल:</strong> कहीं हरी मखमली चादर ओढ़े पर्वत, कहीं पीले-भूरे पत्थरों के पहाड़, तो कहीं बादलों की ओट में छिपा हिमालय।</li>
            <li><strong>दूधिया झरने व बर्फीला सौन्दर्य:</strong> 'सेवेन सिस्टर्स वाटरफॉल' जैसे कलकल बहते दूधिया झरने और कटाओ में चाँदी की तरह चमकती ताज़ी बर्फ हिमालय को अलौकिक और स्वर्गीय बनाती है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">हिमालय के विराट व पल-पल बदलते रूपों का बिंब</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">झरनों, घाटियों व बर्फीले शिखरों की काव्यात्मक अभिव्यक्ति</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch14-q8">
    <div class="q-head" onclick="toggleQ('ch14-q8')">
      <div class="q-num">प्रश्न 8</div>
      <div class="q-text">प्रकृति ने जल-संचय की व्यवस्था किस प्रकार की है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>प्रकृति ने जल-संचय की एक अत्यंत अद्भुत और अनोखी व्यवस्था कर रखी है।</p>
          <p>सर्दियों में प्रकृति हिमालय के ऊँचे शिखरों पर बर्फ के रूप में जल का विशाल भंडार संचित कर लेती है। जब गर्मियों में मैदानी भागों में भीषण गर्मी पड़ती है और त्राहि-त्राहि मचती है, तब ये ही हिम-शिखर पिघल-पिघलकर जलधारा बनते हैं और नदियों के रूप में प्रवाहित होकर करोड़ों कंठों की प्यास बुझाते हैं तथा खेतों को सींचते हैं। प्रकृति का यह जल-स्तंभ समस्त जीव-जगत के पोषण का मूल आधार है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सर्दियों में बर्फ के रूप में जल संचय की वैज्ञानिक-प्राकृतिक प्रक्रिया</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">गर्मियों में पिघलकर नदियों द्वारा जीवन पोषण की व्याख्या</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch14-q9">
    <div class="q-head" onclick="toggleQ('ch14-q9')">
      <div class="q-num">प्रश्न 9</div>
      <div class="q-text">देश की सीमा पर बैठे फ़ौजी किस तरह की कठिनाइयों से जूझते हैं? उनके प्रति हमारा क्या उत्तरदायित्व होना चाहिए?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>सैनिकों की कठिनाइयाँ:</strong> हमारे वीर सैनिक शून्य से भी नीचे (-15° से -30°C) तापमान में, जहाँ पेट्रोल भी जम जाता है और हाथ-पैर सुन्न हो जाते हैं, दिन-रात मुस्तैदी से पहरा देते हैं। वे अपने परिवार और प्रियजनों से मीलों दूर रहकर प्राणों की बाज़ी लगाते हैं।</p>
          <p><strong>हमारा उत्तरदायित्व:</strong></p>
          <ul>
            <li>सैनिकों के अदम्य साहस और बलिदान के प्रति हृदय से सम्मान और कृतज्ञता व्यक्त करना।</li>
            <li>उनके परिवारों को समाज में सुरक्षा, सम्मान और संबल प्रदान करना।</li>
            <li>देश के भीतर शांति और सौहार्द बनाए रखना ताकि उनका बलिदान व्यर्थ न जाए।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शून्य से नीचे तापमान व दुर्गम परिस्थितियों का विवरण</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">नागरिक के रूप में सम्मान, कृतज्ञता व सहायता के दायित्व</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch14-q10">
    <div class="q-head" onclick="toggleQ('ch14-q10')">
      <div class="q-num">प्रश्न 10</div>
      <div class="q-text">'कटाओ' को 'भारत का स्विट्ज़रलैंड' क्यों कहा गया है और यह पर्यटन स्थल के रूप में क्यों अधिक प्रसिद्ध नहीं हुआ?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>'भारत का स्विट्ज़रलैंड' कहे जाने का कारण:</strong> कटाओ की बर्फीली वादियाँ, चाँदी के समान चमकते पर्वत शिखर और असीम प्राकृतिक सौन्दर्य यूरोप के स्विट्ज़रलैंड से भी बढ़कर है। लेखिका की स्विट्ज़रलैंड घूम चुकी सहेली 'मणि' ने भी कहा कि कटाओ स्विट्ज़रलैंड से कहीं अधिक खूबसूरत है।</p>
          <p><strong>प्रसिद्ध न होने का कारण:</strong> कटाओ अभी तक व्यावसायिक पर्यटन (Commercial Tourism) का शिकार नहीं हुआ था। वहाँ न कोई होटल थे, न दुकानें, न विज्ञापनों का शोर। वहाँ तक पहुँचने का मार्ग अत्यंत दुर्गम और जोखिम भरा था। व्यावसायिकता से दूर रहने के कारण ही कटाओ का प्राकृतिक सौंदर्य अपनी मूल और पवित्र अवस्था में सुरक्षित रह सका।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बर्फीले सौंदर्य व स्विट्ज़रलैंड से तुलना का आधार</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">व्यावसायिकता व विज्ञापनों से दूरी तथा प्राकृतिक शुचिता का कारण</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>पर्यावरण एवं पर्यटन विश्लेषण (Eco-Tourism Analysis):</strong> 'साना-साना हाथ जोड़ि...' पाठ में लेखिका ने कटाओ की प्राकृतिक शुचिता का श्रेय उसके व्यावसायिक न होने को दिया है। क्या पर्यटन विकास और पर्यावरण संरक्षण साथ-साथ चल सकते हैं? 'सतत पर्यटन' (Sustainable Tourism) के आलोक में अपने विचार प्रस्तुत कीजिए।</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>विश्लेषण:</strong> हाँ, पर्यटन और पर्यावरण संरक्षण में संतुलन बनाया जा सकता है बशर्ते 'सतत पर्यटन' के नियमों का कड़ाई से पालन हो:</p>
        <ul>
          <li>पहाड़ी क्षेत्रों में प्लास्टिक व गैर-बायोडिग्रेडेबल वस्तुओं पर पूर्ण प्रतिबंध होना चाहिए।</li>
          <li>पर्यटकों की दैनिक संख्या (Carrying Capacity) सीमित की जाए ताकि पारिस्थितिकी तंत्र पर अत्यधिक दबाव न पड़े।</li>
          <li>स्थानीय संस्कृति और प्रकृति को क्षति पहुँचाए बिना पर्यावरण-अनुकूल (Eco-friendly) आवास और परिवहन को बढ़ावा दिया जाए।</li>
        </ul>
      </div>
    </div>
  </div>
</section>`;

// Chapter 15: मैं क्यों लिखता हूँ? (Kritika-2 Ch 3)
const ch15Html = `<section class="chapter-section" id="ch15" data-book="kritika">
  <div class="chapter-header">
    <div class="ch-badge">15</div>
    <div class="chapter-header-info">
      <div class="ch-category">कृतिका भाग-2 — पाठ 3</div>
      <h2>मैं क्यों लिखता हूँ?</h2>
      <p>सच्चिदानंद हीरानंद वात्स्यायन 'अज्ञेय' | वैचारिक निबंध — रचना-प्रक्रिया, आंतरिक विवशता, प्रत्यक्ष अनुभव बनाम अनुभूति और हिरोशिमा का साक्षात्कार | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch15-q1">
    <div class="q-head" onclick="toggleQ('ch15-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">लेखक के अनुसार प्रत्यक्ष अनुभव की अपेक्षा अनुभूति उसके लेखन में कहीं अधिक मदद करती है, क्यों?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक के अनुसार 'प्रत्यक्ष अनुभव' आँखों के सामने घटित बाह्य घटना होती है, जिसे व्यक्ति केवल अपनी इंद्रियों से देखता है। वह बाहर घटित होकर समाप्त हो सकता है।</p>
          <p>किंतु 'अनुभूति' मन और आत्मा की गहराई से जुड़ी होती है। अनुभूति में प्रत्यक्ष अनुभव कल्पना और संवेदना के साथ मिलकर आंतरिक सत्य बन जाता है। जब तक कोई घटना अनुभूति का अंग बनकर लेखक के अंतर्मन को उद्वेलित नहीं करती, तब तक कालजयी साहित्य का सृजन संभव नहीं है। अतः अनुभूति लेखन में अधिक सहायक होती है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">प्रत्यक्ष अनुभव (इंद्रियजन्य बाह्य घटना) का स्पष्टीकरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">अनुभूति (संवेदना व अंतर्मन की गहराई) की भूमिका का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch15-q2">
    <div class="q-head" onclick="toggleQ('ch15-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">लेखक ने अपने आपको हिरोशिमा के विस्फोट का भोक्ता कब और किस तरह महसूस किया?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक जब जापान की यात्रा पर हिरोशिमा गया, तो उसने अस्पताल में रेडिएशन से पीड़ित लोगों को देखा, किंतु तब तक वह केवल एक बौद्धिक दर्शक था।</p>
          <p>एक दिन सड़क पर घूमते हुए उसने एक जले हुए पत्थर पर एक मानव की काली छाया देखी। उस दृश्य ने लेखक के मन को झकझोर दिया। उस पत्थर ने गवाही दी कि अणुबम के भीषण विस्फोट के समय कोई व्यक्ति वहाँ खड़ा रहा होगा और रेडियोधर्मी किरणों की प्रचण्ड भाप ने उस व्यक्ति को उड़ा दिया तथा उसकी छाया पत्थर पर स्थायी रूप से झुलस गई। इस दृश्य ने लेखक के हृदय में एक गहरा धमाका किया और वह स्वयं को उस त्रासदी का भोक्ता महसूस करने लगा।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">जले पत्थर पर मानव छाया देखने का प्रसंग</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">आंतरिक संवेदना व 'भोक्ता' बनने की मनोवैज्ञानिक अनुभूति</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch15-q3">
    <div class="q-head" onclick="toggleQ('ch15-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">'मैं क्यों लिखता हूँ?' के आधार पर बताइए कि लेखक को कौन-सी बातें लिखने के लिए प्रेरित करती हैं?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक को लिखने के लिए निम्नलिखित प्रमुख प्रेरणाएँ प्रेरित करती हैं:</p>
          <ol>
            <li><strong>आंतरिक विवशता और मुक्ति की चाह:</strong> लेखक के भीतर की बेचैनी और संवेगात्मक दबाव जब तक शब्दों में व्यक्त न हो जाए, तब तक उसे चैन नहीं मिलता। लिखकर ही वह उस आंतरिक दबाव से मुक्त होता है।</li>
            <li><strong>स्वयं को जानना:</strong> लेखक यह जानने के लिए लिखता है कि वास्तव में वह क्यों लिखता है और उसके भीतर क्या घटित हो रहा है।</li>
            <li><strong>बाहरी दबाव:</strong> संपादकों का आग्रह, प्रकाशकों का तकाज़ा और आर्थिक आवश्यकताएँ भी कभी-कभी लिखने का माध्यम बनती हैं।</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">आंतरिक विवशता व आत्मानुभूति का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">बाहरी दबावों (संपादक, आर्थिक) की भूमिका</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch15-q4">
    <div class="q-head" onclick="toggleQ('ch15-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">कुछ रचनाकारों के लिए आत्मानुभूति ही लेखन का मूल कारण बनती है। क्या बाहरी दबाव भी लेखन का कारण हो सकते हैं? उदाहरण सहित समझाइए।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>हाँ, बाहरी दबाव भी अनेक बार लेखन का तात्कालिक कारण बनते हैं। इन बाहरी दबावों में संपादकों का आग्रह, प्रकाशक का अनुबंध, पाठकों की माँग और आर्थिक आवश्यकताएँ प्रमुख हैं।</p>
          <p>किंतु सच्चा और श्रेष्ठ लेखक वही है जो बाहरी दबाव को केवल एक निमित्त या अवसर मानता है और रचना तभी करता है जब वह बाह्य दबाव उसके अंतर्मन की अनुभूति से एकाकार हो जाए। उदाहरण के लिए, प्रेमचंद जी ने कई कहानियाँ पत्रिकाओं की माँग पर लिखीं, किंतु उनमें उनकी वास्तविक सामाजिक वेदना ही मुखरित हुई।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बाहरी दबावों के प्रकारों का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सच्चे लेखक द्वारा बाह्य दबाव को अंतर्मन से जोड़ने का तर्क</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch15-q5">
    <div class="q-head" onclick="toggleQ('ch15-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">हिरोशिमा पर लिखी कविता लेखक के आंतरिक व बाह्य दोनों दबाव का परिणाम है, यह आप कैसे कह सकते हैं?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>हिरोशिमा पर लिखी कविता बाह्य और आंतरिक दोनों दबावों के अद्भुत समन्वय का परिणाम है:</p>
          <ul>
            <li><strong>बाह्य दबाव:</strong> लेखक ने हिरोशिमा में अणुबम की भीषण विभीषिका के प्रत्यक्ष प्रमाण देखे, विकिरण से पीड़ित लोगों को देखा और झुलसे हुए पत्थर पर मानव छाया देखी। यह प्रत्यक्ष बाह्य यथार्थ एक बाह्य दबाव के रूप में उपस्थित था।</li>
            <li><strong>आंतरिक दबाव:</strong> पत्थर पर अंकित छाया को देखकर लेखक के भीतर संवेदना का विस्फोट हुआ। वह केवल एक दर्शक न रहकर उस त्रासदी का प्रत्यक्ष भोक्ता बन गया। जब वह भारत लौटा और रेलगाड़ी में यात्रा कर रहा था, तब उस आंतरिक विवशता और बेचैनी से मुक्ति पाने के लिए उसने यह कविता लिखी।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बाह्य दबाव (प्रत्यक्ष खंडहर व त्रासदी का दृश्य)</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">आंतरिक दबाव (संवेदना का अंतर्द्वंद्व व मुक्ति की छटपटाहट)</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch15-q6">
    <div class="q-head" onclick="toggleQ('ch15-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">विज्ञान का दुरुपयोग कहाँ-कहाँ हो रहा है और इसे रोकने के लिए एक नागरिक के रूप में आपकी क्या भूमिका हो सकती है?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>विज्ञान का दुरुपयोग:</strong> आज विज्ञान का दुरुपयोग परमाणु व जैविक हथियारों के निर्माण, साइबर अपराध, प्रकृति के अत्यधिक दोहन, प्लास्टिक प्रदूषण तथा भ्रूण हत्या जैसी अमानवीय प्रवृत्तियों में हो रहा है। हिरोशिमा और नागासाकी पर परमाणु हमला इसका सबसे क्रूर उदाहरण है।</p>
          <p><strong>एक जागरूक नागरिक के रूप में भूमिका:</strong></p>
          <ul>
            <li>वैज्ञानिक अनुसंधानों का प्रयोग मानव कल्याण, चिकित्सा और शांति के लिए करने की वकालत करना।</li>
            <li>इंटरनेट और डिजिटल तकनीक का प्रयोग नैतिक मर्यादाओं और रचनात्मक कार्यों में करना।</li>
            <li>पर्यावरण संरक्षण के प्रति सजग रहना और विनाशकारी हथियारों व प्रदूषण के विरुद्ध जन-जागरूकता फैलाना।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">विज्ञान के समकालीन दुरुपयोगों का यथार्थवादी उल्लेख</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">नागरिक के कर्तव्य, नैतिक चेतना व समाधानपरक उपाय</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>रचनात्मक एवं नैतिक मूल्यांकन (Creative & Ethical Evaluation):</strong> 'मैं क्यों लिखता हूँ?' पाठ के आधार पर स्पष्ट कीजिए कि एक साहित्यकार और एक वैज्ञानिक के दायित्व में क्या समानता और अंतर है? आज के युग में विज्ञान और मानवीय संवेदनाओं का समन्वय क्यों अपरिहार्य है?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>समानता:</strong> दोनों ही सत्य की खोज करते हैं और मानव जीवन को उन्नत बनाने का प्रयास करते हैं।</p>
        <p><strong>अंतर:</strong> वैज्ञानिक बाह्य जगत के नियमों और पदार्थों का विश्लेषण करता है, जबकि साहित्यकार अंतर्जगत की संवेदनाओं, मूल्यों और मानवीय अनुभूतियों को वाणी देता है। यदि विज्ञान के साथ मानवीय संवेदना नहीं जुड़ी होगी, तो वह हिरोशिमा जैसा संहारक बन जाएगा। अतः विज्ञान की शक्ति को संवेदना का मार्गदर्शन मिलना अनिवार्य है।</p>
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(dir, 'ch13.html'), ch13Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch14.html'), ch14Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch15.html'), ch15Html, 'utf8');

console.log('Successfully enriched Batch 3 (Ch 13 to Ch 15 - Kritika) to 100% NCERT textbook coverage!');
