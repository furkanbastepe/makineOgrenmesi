window.QBANK = window.QBANK || {};
window.QBANK["dt"] = {
  title: "Karar Ağaçları (Decision Trees)",
  concepts: [
    {
      id: "dt-c01",
      unit: "dt",
      title: "Karar Ağacı Nedir?",
      body: [
        "Belirli bir soruna yönelik tüm potansiyel çözümleri haritalandıran akış şeması benzeri bir diyagramdır.",
        "Tahmine dayalı (predictive) modeller oluşturmak için kullanılır.",
        "Makine öğreniminde popüler bir araçtır; hem sınıflandırma hem regresyon için kullanılabilir.",
        "Örnek: bir şirketin genel merkezini hangi şehre taşıyacağına karar vermesine yardımcı olur."
      ],
      source: "DT Slayt 2"
    },
    {
      id: "dt-c02",
      unit: "dt",
      title: "Temel Bileşenler",
      body: [
        "Bir karar ağacı kök, düğümler ve yapraklardan oluşur.",
        "Her bir iç düğüm bir özellik testi yapar.",
        "Yapraklar nihai sonucu verir.",
        "En hayati (en önemli) özellik kök düğüm olarak adlandırılır."
      ],
      source: "DT Slayt 3-4"
    },
    {
      id: "dt-c03",
      unit: "dt",
      title: "Kök Düğüm (Root Node)",
      body: [
        "Tüm veri kümesini temsil eder ve ağacı başlatmak için kullanılır.",
        "Ağacın başlangıç noktasıdır.",
        "Verileri maksimum bilgi kazancına göre böler.",
        "Karar ağacının ilk hücresidir; her gözlem kökteki koşula göre 'Evet' veya 'Hayır' olarak sınıflandırılır."
      ],
      source: "DT Slayt 5"
    },
    {
      id: "dt-c04",
      unit: "dt",
      title: "İç Düğüm (Internal Node)",
      body: [
        "Verileri iki veya daha fazla alt kümeye ayıran bir özelliği temsil eder.",
        "Bölme işlemi özelliğin değerine göre gerçekleştirilir ve her gözlemin izleyeceği yolu belirler.",
        "Bölme işlemi saflık ve kazanca göre yapılır.",
        "İç düğüm daha sonra birden fazla alt düğüme bölünür."
      ],
      source: "DT Slayt 6"
    },
    {
      id: "dt-c05",
      unit: "dt",
      title: "Yaprak Düğüm (Leaf Node)",
      body: [
        "Verilerin daha fazla bölünemeyen bir alt kümesini temsil eder; artık karar verilir.",
        "Kendisine ulaşan gözlemler için nihai tahmini içerir.",
        "Tahmin, alt kümedeki çoğunluk sınıfına veya hedef değişkenin ortalama değerine dayanır."
      ],
      source: "DT Slayt 7"
    },
    {
      id: "dt-c06",
      unit: "dt",
      title: "Karar Ağacı Yöntemi (3 Kullanım Alanı)",
      body: [
        "Karar Analizi: karar verme sürecinde kullanılır.",
        "Sınıflandırma: bir sınıf değerini tahmin eder.",
        "Regresyon: sürekli bir değeri tahmin eder."
      ],
      source: "DT Slayt 9"
    },
    {
      id: "dt-c07",
      unit: "dt",
      title: "Karar Analizi",
      body: [
        "Karar verme sürecinde kullanılır.",
        "Karar sürecini ve sonucunu açıkça sunmak için veri görselleştirmede kullanılabilir.",
        "En büyük avantajlarından biri: makine öğrenimi ile ilgilenmeyen biri için bile anlaşılabilir ve kolaydır."
      ],
      source: "DT Slayt 10"
    },
    {
      id: "dt-c08",
      unit: "dt",
      title: "Sınıflandırma",
      body: [
        "Bir sınıf değerini tahmin etmek veya açıklamak için kullanılan bir ML tekniğidir.",
        "Bir veya daha fazla girdiye dayalı olarak bir olayın olma olasılığını değerlendirir.",
        "Örnek: e-postaları spam ve spam olmayan olarak ikiye ayırmak.",
        "Algoritma bir dizi soru sorar ve yanıtlara göre karar verir."
      ],
      source: "DT Slayt 11"
    },
    {
      id: "dt-c09",
      unit: "dt",
      title: "Regresyon",
      body: [
        "Denetimli (supervised) makine öğrenimi tekniklerinden biridir.",
        "Önceki verilere dayanarak belirli bir (sürekli) değeri tahmin etmeye yardımcı olur.",
        "Örnekler: çalışanın maaşı, hastalığın yayılması, mülk değeri.",
        "Bu durumda modele 'regresyon ağacı' denir."
      ],
      source: "DT Slayt 12"
    },
    {
      id: "dt-c10",
      unit: "dt",
      title: "Avantajları",
      body: [
        "Karar ağacı oluşturmak zahmetsizdir.",
        "Küçük ağaçları yorumlamak kolaydır.",
        "Anlaşılabilir kurallar oluşturulabilir.",
        "Sürekli ve ayrık nitelik değerleri için kullanılabilir."
      ],
      source: "DT Slayt 14"
    },
    {
      id: "dt-c11",
      unit: "dt",
      title: "Dezavantajları",
      body: [
        "Sürekli nitelik değerlerini tahmin etmekte çok başarılı değildir.",
        "Sınıf sayısı fazla ve öğrenme kümesi örnekleri az olduğunda model oluşturma başarılı değildir.",
        "Zaman ve yer karmaşıklığı; örnek sayısına, nitelik sayısına ve oluşan ağacın yapısına bağlıdır.",
        "Hem ağaç oluşturma hem de ağaç budama karmaşıklığı fazladır."
      ],
      source: "DT Slayt 15"
    },
    {
      id: "dt-c12",
      unit: "dt",
      title: "Saflık ve Bilgi Kazancı",
      body: [
        "İç düğümlerde bölme işlemi saflık ve kazanca göre yapılır.",
        "Kök düğüm verileri maksimum bilgi kazancına göre böler.",
        "Bölme, her gözlemin ağaçta izleyeceği yolu belirler."
      ],
      source: "DT Slayt 5-6"
    }
  ],
  questions: [
    {
      id: "dt-q01",
      unit: "dt",
      type: "mcq",
      difficulty: 1,
      q: "Karar ağacı en doğru şekilde nasıl tanımlanır?",
      options: [
        "Yalnızca regresyon için kullanılan doğrusal bir model",
        "Belirli bir soruna yönelik tüm potansiyel çözümleri haritalandıran akış şeması benzeri bir diyagram",
        "Etiketsiz verileri kümelere ayıran denetimsiz bir algoritma",
        "Yalnızca veri görselleştirme amacıyla kullanılan bir grafik türü"
      ],
      answer: 1,
      explanation: "Karar ağacı, bir soruna yönelik tüm potansiyel çözümleri haritalandıran akış şeması benzeri bir diyagramdır ve tahmine dayalı modeller oluşturmak için kullanılır.",
      source: "DT Slayt 2"
    },
    {
      id: "dt-q02",
      unit: "dt",
      type: "truefalse",
      difficulty: 1,
      q: "Karar ağaçları tahmine dayalı modeller oluşturmak için kullanılabildiğinden makine öğreniminde popüler bir araçtır.",
      answer: true,
      explanation: "Karar ağaçları tahmine dayalı (predictive) modeller oluşturmaya imkan verdiği için makine öğreniminde popüler bir araçtır.",
      source: "DT Slayt 2"
    },
    {
      id: "dt-q03",
      unit: "dt",
      type: "mcq",
      difficulty: 1,
      q: "Aşağıdakilerden hangisi karar ağacı kullanımına bir örnek olarak verilmiştir?",
      options: [
        "Bir görüntüdeki nesneleri kümelere ayırmak",
        "Bir şirketin genel merkezini hangi şehre taşıyacağına karar vermesine yardımcı olmak",
        "Metni başka bir dile çevirmek",
        "Sürekli bir sinyali frekans bileşenlerine ayırmak"
      ],
      answer: 1,
      explanation: "Slaytta verilen örnek: bir şirketin genel merkezini hangi şehre taşıyacağına veya uydu ofis açıp açmayacağına karar vermesine yardımcı olmak için karar ağacı kullanılabilir.",
      source: "DT Slayt 2"
    },
    {
      id: "dt-q04",
      unit: "dt",
      type: "truefalse",
      difficulty: 2,
      q: "Bir müşterinin önceki satın alma geçmişine dayanarak bir ürünü satın alıp almayacağını tahmin etmek karar ağaçlarının kullanımına örnektir.",
      answer: true,
      explanation: "Slaytta bu örnek doğrudan veriliyor: önceki satın alma geçmişine dayanarak tahmin yapmak için karar ağaçları kullanılabilir.",
      source: "DT Slayt 2"
    },
    {
      id: "dt-q05",
      unit: "dt",
      type: "fill",
      difficulty: 1,
      q: "Bir karar ağacı algoritması kök, ______ ve yapraklardan oluşur.",
      answer: ["düğümler", "dugumler", "düğüm", "iç düğümler", "ic dugumler"],
      explanation: "Bir karar ağacı algoritması kök, düğümler ve yapraklardan oluşur.",
      source: "DT Slayt 3"
    },
    {
      id: "dt-q06",
      unit: "dt",
      type: "mcq",
      difficulty: 1,
      q: "Karar ağacının temel yapısında her bir iç düğüm ne yapar?",
      options: [
        "Nihai sonucu (tahmini) verir",
        "Bir özellik testi yapar",
        "Tüm veri kümesini temsil eder",
        "Veriyi rastgele iki parçaya böler"
      ],
      answer: 1,
      explanation: "Karar ağacının temel yapısında her bir iç düğüm bir özellik testi yapar; yapraklar ise nihai sonucu verir.",
      source: "DT Slayt 4"
    },
    {
      id: "dt-q07",
      unit: "dt",
      type: "mcq",
      difficulty: 1,
      q: "Karar ağacında nihai sonucu hangi düğümler verir?",
      options: [
        "Kök düğüm",
        "İç düğümler",
        "Yapraklar",
        "Dal düğümleri"
      ],
      answer: 2,
      explanation: "Yapraklar nihai sonucu verir. İç düğümler özellik testi yapar, kök ise ağacı başlatır.",
      source: "DT Slayt 4"
    },
    {
      id: "dt-q08",
      unit: "dt",
      type: "truefalse",
      difficulty: 2,
      q: "Karar ağacında en hayati (en önemli) özellik kök düğüm olarak adlandırılır.",
      answer: true,
      explanation: "Temel yapı slaytına göre en hayati özellik kök düğüm olarak adlandırılır.",
      source: "DT Slayt 4"
    },
    {
      id: "dt-q09",
      unit: "dt",
      type: "mcq",
      difficulty: 1,
      q: "Kök düğüm (root node) neyi temsil eder?",
      options: [
        "Tüm veri kümesini",
        "Daha fazla bölünemeyen bir alt kümeyi",
        "Yalnızca tek bir gözlemi",
        "Hedef değişkenin ortalama değerini"
      ],
      answer: 0,
      explanation: "Kök düğüm tüm veri kümesini temsil eder ve ağacı başlatmak için kullanılır.",
      source: "DT Slayt 5"
    },
    {
      id: "dt-q10",
      unit: "dt",
      type: "mcq",
      difficulty: 2,
      q: "Kök düğüm verileri neye göre böler?",
      options: [
        "Rastgele seçime göre",
        "Maksimum bilgi kazancına göre",
        "Alfabetik sıraya göre",
        "Gözlem sayısının azlığına göre"
      ],
      answer: 1,
      explanation: "Kök düğüm ağacın başlangıç noktasıdır ve verileri maksimum bilgi kazancına göre böler.",
      source: "DT Slayt 5"
    },
    {
      id: "dt-q11",
      unit: "dt",
      type: "fill",
      difficulty: 1,
      q: "Karar ağaçlarının ilk hücrelerine ______ (root veya root node) denir.",
      answer: ["kök", "kok", "kök düğüm", "kok dugum", "root"],
      explanation: "Karar ağaçlarının ilk hücrelerine kök (root veya root node) denir.",
      source: "DT Slayt 5"
    },
    {
      id: "dt-q12",
      unit: "dt",
      type: "truefalse",
      difficulty: 1,
      q: "Her bir gözlem kökteki koşula göre 'Evet' veya 'Hayır' olarak sınıflandırılır.",
      answer: true,
      explanation: "Slayt 5'e göre her bir gözlem kökteki koşula göre 'Evet' veya 'Hayır' olarak sınıflandırılır.",
      source: "DT Slayt 5"
    },
    {
      id: "dt-q13",
      unit: "dt",
      type: "mcq",
      difficulty: 1,
      q: "İç düğüm (internal node) neyi temsil eder?",
      options: [
        "Tüm veri kümesini",
        "Verileri iki veya daha fazla alt kümeye ayıran bir özelliği",
        "Nihai tahmini",
        "Çoğunluk sınıfını"
      ],
      answer: 1,
      explanation: "Her bir iç düğüm, verileri iki veya daha fazla alt kümeye ayıran bir özelliği temsil eder.",
      source: "DT Slayt 6"
    },
    {
      id: "dt-q14",
      unit: "dt",
      type: "mcq",
      difficulty: 2,
      q: "İç düğümlerde bölme işlemi neye göre yapılır?",
      options: [
        "Saflık ve kazanca göre",
        "Gözlemlerin kayıt tarihine göre",
        "Yaprak sayısına göre",
        "Yalnızca rastgele örnekleme ile"
      ],
      answer: 0,
      explanation: "İç düğümlerde bölme işlemi saflık ve kazanca göre yapılır. Bölme, özelliğin değerine göre gerçekleştirilir.",
      source: "DT Slayt 6"
    },
    {
      id: "dt-q15",
      unit: "dt",
      type: "truefalse",
      difficulty: 2,
      q: "İç düğümde bölme işlemi özelliğin değerine göre gerçekleştirilir ve her bir gözlemin izleyeceği yolu belirler.",
      answer: true,
      explanation: "Slayt 6'ya göre bölme özelliğin değerine göre yapılır ve her gözlemin izleyeceği yolu belirler. İç düğüm daha sonra birden fazla alt düğüme bölünür.",
      source: "DT Slayt 6"
    },
    {
      id: "dt-q16",
      unit: "dt",
      type: "mcq",
      difficulty: 1,
      q: "Yaprak düğüm (leaf node) için aşağıdakilerden hangisi doğrudur?",
      options: [
        "Verileri sürekli olarak daha fazla alt kümeye böler",
        "Verilerin daha fazla bölünemeyen bir alt kümesini temsil eder ve nihai karar burada verilir",
        "Ağacı başlatmak için kullanılır",
        "Yalnızca özellik testi yapar"
      ],
      answer: 1,
      explanation: "Yaprak düğüm, verilerin daha fazla bölünemeyen bir alt kümesini temsil eder; artık karar verilir ve nihai tahmin burada bulunur.",
      source: "DT Slayt 7"
    },
    {
      id: "dt-q17",
      unit: "dt",
      type: "mcq",
      difficulty: 2,
      q: "Yaprak düğümdeki tahmin neye dayanır?",
      options: [
        "Yalnızca kök düğümün koşuluna",
        "Alt kümedeki çoğunluk sınıfına veya hedef değişkenin ortalama değerine",
        "Rastgele seçilen bir gözleme",
        "Ağacın toplam derinliğine"
      ],
      answer: 1,
      explanation: "Yaprak düğümdeki tahmin, alt kümedeki çoğunluk sınıfına (sınıflandırmada) veya hedef değişkenin ortalama değerine (regresyonda) dayanır.",
      source: "DT Slayt 7"
    },
    {
      id: "dt-q18",
      unit: "dt",
      type: "truefalse",
      difficulty: 1,
      q: "Yaprak düğüm, kendisine ulaşan gözlemler için nihai tahmini içerir.",
      answer: true,
      explanation: "Slayt 7'ye göre yaprak düğüm, kendisine ulaşan gözlemler için nihai tahmini içerir.",
      source: "DT Slayt 7"
    },
    {
      id: "dt-q19",
      unit: "dt",
      type: "match",
      difficulty: 2,
      q: "Karar ağacı terimlerini doğru tanımlarıyla eşleştirin.",
      pairs: [
        ["Kök Düğüm", "Tüm veri kümesini temsil eder ve ağacı başlatır"],
        ["İç Düğüm", "Verileri iki veya daha fazla alt kümeye ayıran özelliği temsil eder"],
        ["Yaprak Düğüm", "Daha fazla bölünemeyen alt küme; nihai karar/tahmin"]
      ],
      explanation: "Kök = tüm veri kümesi/başlangıç; İç düğüm = bölücü özellik; Yaprak = nihai karar.",
      source: "DT Slayt 5-7"
    },
    {
      id: "dt-q20",
      unit: "dt",
      type: "order",
      difficulty: 2,
      q: "Bir karar ağacında bir gözlemin izlediği yolu baştan sona sıralayın.",
      items: [
        "Kök düğüm (tüm veri kümesi, ağacı başlatır)",
        "İç düğüm (özellik testine göre bölme)",
        "Yaprak düğüm (nihai karar / tahmin)"
      ],
      explanation: "Bir gözlem önce kök düğümden başlar, iç düğümlerdeki özellik testlerine göre dallanır ve bölünemeyen yaprak düğümde nihai tahmine ulaşır.",
      source: "DT Slayt 5-7"
    },
    {
      id: "dt-q21",
      unit: "dt",
      type: "mcq",
      difficulty: 1,
      q: "Karar ağacı yönteminin üç kullanım alanı hangileridir?",
      options: [
        "Karar Analizi, Sınıflandırma, Regresyon",
        "Kümeleme, Boyut İndirgeme, Sınıflandırma",
        "Karar Analizi, Kümeleme, Pekiştirmeli Öğrenme",
        "Regresyon, Kümeleme, Görselleştirme"
      ],
      answer: 0,
      explanation: "Karar ağacı yönteminin kullanım alanları: Karar Analizi, Sınıflandırma ve Regresyon.",
      source: "DT Slayt 9"
    },
    {
      id: "dt-q22",
      unit: "dt",
      type: "mcq",
      difficulty: 2,
      q: "Karar Analizi alanı için slaytta vurgulanan en büyük avantaj nedir?",
      options: [
        "En yüksek tahmin doğruluğunu vermesi",
        "Makine öğrenimi ile ilgilenmeyen biri için bile anlaşılabilir ve kolay olması",
        "Sürekli değerleri mükemmel tahmin etmesi",
        "Hiç budama gerektirmemesi"
      ],
      answer: 1,
      explanation: "Karar analizinin en büyük avantajlarından biri, işlerinde makine öğrenimi ile ilgilenmeyen biri için bile anlaşılabilir ve kolay olmasıdır.",
      source: "DT Slayt 10"
    },
    {
      id: "dt-q23",
      unit: "dt",
      type: "truefalse",
      difficulty: 1,
      q: "Karar ağacı modeli, karar sürecini ve sonucunu açıkça sunmak için veri görselleştirmede kullanılabilir.",
      answer: true,
      explanation: "Karar Analizi slaytına göre karar ağacı, karar sürecini ve sonucunu açıkça sunmak için veri görselleştirmede kullanılabilir.",
      source: "DT Slayt 10"
    },
    {
      id: "dt-q24",
      unit: "dt",
      type: "mcq",
      difficulty: 1,
      q: "Sınıflandırma nedir?",
      options: [
        "Sürekli bir değeri tahmin eden denetimsiz bir teknik",
        "Bir sınıf değerini tahmin etmek veya açıklamak için kullanılan bir makine öğrenimi tekniği",
        "Verileri kümelere ayıran bir teknik",
        "Yalnızca veri görselleştirme için kullanılan bir yöntem"
      ],
      answer: 1,
      explanation: "Sınıflandırma, bir sınıf değerini tahmin etmek veya açıklamak için kullanılan bir makine öğrenimi tekniğidir.",
      source: "DT Slayt 11"
    },
    {
      id: "dt-q25",
      unit: "dt",
      type: "mcq",
      difficulty: 1,
      q: "Sınıflandırma için slaytta verilen örnek aşağıdakilerden hangisidir?",
      options: [
        "Bir çalışanın maaşını tahmin etmek",
        "E-postaları spam ve spam olmayan olarak ikiye ayırmak",
        "Mülk değerini tahmin etmek",
        "Hastalığın yayılmasını tahmin etmek"
      ],
      answer: 1,
      explanation: "Sınıflandırma örneği olarak e-postaların spam ve spam olmayan olarak ikiye ayrılması verilmiştir. Maaş, mülk değeri ve hastalık yayılması ise regresyon örnekleridir.",
      source: "DT Slayt 11"
    },
    {
      id: "dt-q26",
      unit: "dt",
      type: "truefalse",
      difficulty: 2,
      q: "Sınıflandırma algoritmaları ile bir veya daha fazla girdiye dayalı olarak bir olayın meydana gelme olasılığını değerlendirebilirsiniz.",
      answer: true,
      explanation: "Slayt 11'e göre sınıflandırma algoritmaları, bir veya daha fazla girdiye dayalı olarak bir olayın olma olasılığını değerlendirir; karar ağacı modeli tam olarak bununla ilgilidir.",
      source: "DT Slayt 11"
    },
    {
      id: "dt-q27",
      unit: "dt",
      type: "mcq",
      difficulty: 2,
      q: "Regresyon ile ilgili aşağıdakilerden hangisi doğrudur?",
      options: [
        "Denetimsiz bir tekniktir ve verileri kümelere ayırır",
        "Denetimli bir tekniktir ve önceki verilere dayanarak belirli bir değeri tahmin eder",
        "Yalnızca ikili (Evet/Hayır) sonuçlar üretir",
        "Yalnızca ayrık kategorik değerleri tahmin eder"
      ],
      answer: 1,
      explanation: "Regresyon denetimli (supervised) makine öğrenimi tekniklerinden biridir ve önceki verilere dayanarak belirli (sürekli) bir değeri tahmin etmeye yardımcı olur.",
      source: "DT Slayt 12"
    },
    {
      id: "dt-q28",
      unit: "dt",
      type: "mcq",
      difficulty: 1,
      q: "Aşağıdakilerden hangisi regresyon ile tahmin edilebilecek bir örnek DEĞİLDİR?",
      options: [
        "Bir çalışanın maaşı",
        "Mülk değeri",
        "Bir e-postanın spam olup olmadığı",
        "Hastalığın yayılması"
      ],
      answer: 2,
      explanation: "Maaş, mülk değeri ve hastalık yayılması regresyon örnekleridir. Bir e-postanın spam olup olmadığı ise sınıflandırma örneğidir.",
      source: "DT Slayt 11-12"
    },
    {
      id: "dt-q29",
      unit: "dt",
      type: "fill",
      difficulty: 2,
      q: "Sürekli bir değeri (örneğin maaş) tahmin etmek için kullanılan karar ağacına ______ ağacı denir.",
      answer: ["regresyon", "regresyon ağacı", "regression"],
      explanation: "Sürekli bir değeri tahmin etmek için kullanıldığında modele 'regresyon ağacı' denir.",
      source: "DT Slayt 12"
    },
    {
      id: "dt-q30",
      unit: "dt",
      type: "categorize",
      difficulty: 2,
      q: "Verilen tahmin görevlerini Sınıflandırma mı yoksa Regresyon mu olduğuna göre sınıflandırın.",
      categories: ["Sınıflandırma", "Regresyon"],
      items: [
        { text: "E-postanın spam olup olmadığı", cat: "Sınıflandırma" },
        { text: "Bir çalışanın maaşı", cat: "Regresyon" },
        { text: "Mülk değeri", cat: "Regresyon" },
        { text: "Hastalığın yayılması", cat: "Regresyon" },
        { text: "Bir olayın belirli bir sınıfa ait olma olasılığı", cat: "Sınıflandırma" }
      ],
      explanation: "Sınıflandırma bir sınıf/kategori değerini tahmin eder (spam mı değil mi). Regresyon ise sürekli bir değeri tahmin eder (maaş, mülk değeri, yayılma).",
      source: "DT Slayt 11-12"
    },
    {
      id: "dt-q31",
      unit: "dt",
      type: "categorize",
      difficulty: 2,
      q: "Aşağıdaki özellikleri karar ağaçlarının Avantajı mı yoksa Dezavantajı mı olduğuna göre sınıflandırın.",
      categories: ["Avantaj", "Dezavantaj"],
      items: [
        { text: "Karar ağacı oluşturmak zahmetsizdir", cat: "Avantaj" },
        { text: "Küçük ağaçları yorumlamak kolaydır", cat: "Avantaj" },
        { text: "Anlaşılabilir kurallar oluşturulabilir", cat: "Avantaj" },
        { text: "Sürekli ve ayrık nitelik değerleri için kullanılabilir", cat: "Avantaj" },
        { text: "Sürekli nitelik değerlerini tahmin etmekte çok başarılı değildir", cat: "Dezavantaj" },
        { text: "Ağaç oluşturma ve budama karmaşıklığı fazladır", cat: "Dezavantaj" }
      ],
      explanation: "Avantajlar: kolay oluşturma, yorumlanabilirlik, anlaşılır kurallar, sürekli/ayrık değer kullanımı. Dezavantajlar: sürekli değer tahmininde zayıflık, yüksek oluşturma/budama karmaşıklığı.",
      source: "DT Slayt 14-15"
    },
    {
      id: "dt-q32",
      unit: "dt",
      type: "mcq",
      difficulty: 1,
      q: "Aşağıdakilerden hangisi karar ağaçlarının bir AVANTAJIDIR?",
      options: [
        "Sürekli nitelik değerlerini mükemmel tahmin etmesi",
        "Anlaşılabilir kurallar oluşturulabilmesi",
        "Sınıf sayısı fazla ve örnek az olduğunda iyi çalışması",
        "Hiçbir karmaşıklığının olmaması"
      ],
      answer: 1,
      explanation: "Karar ağaçlarının avantajlarından biri anlaşılabilir kurallar oluşturulabilmesidir. Diğer seçenekler ya yanlıştır ya da dezavantaj kapsamındadır.",
      source: "DT Slayt 14"
    },
    {
      id: "dt-q33",
      unit: "dt",
      type: "truefalse",
      difficulty: 1,
      q: "Karar ağaçları sürekli ve ayrık nitelik değerleri için kullanılabilir.",
      answer: true,
      explanation: "Avantajlar slaytına göre karar ağaçları hem sürekli hem ayrık nitelik değerleri için kullanılabilir.",
      source: "DT Slayt 14"
    },
    {
      id: "dt-q34",
      unit: "dt",
      type: "mcq",
      difficulty: 2,
      q: "Aşağıdakilerden hangisi karar ağaçlarının bir DEZAVANTAJIDIR?",
      options: [
        "Küçük ağaçların yorumlanmasının kolay olması",
        "Sürekli nitelik değerlerini tahmin etmekte çok başarılı olmaması",
        "Anlaşılabilir kurallar oluşturulabilmesi",
        "Oluşturmanın zahmetsiz olması"
      ],
      answer: 1,
      explanation: "Karar ağaçları sürekli nitelik değerlerini tahmin etmekte çok başarılı değildir; bu bir dezavantajdır. Diğer seçenekler avantajdır.",
      source: "DT Slayt 15"
    },
    {
      id: "dt-q35",
      unit: "dt",
      type: "truefalse",
      difficulty: 2,
      q: "Sınıf sayısı fazla ve öğrenme kümesi örnekleri az olduğunda karar ağacı modeli oluşturma çok başarılıdır.",
      answer: false,
      explanation: "Tam tersi: sınıf sayısı fazla ve öğrenme kümesi örnekleri az olduğunda model oluşturma çok başarılı DEĞİLDİR; bu bir dezavantajdır.",
      source: "DT Slayt 15"
    },
    {
      id: "dt-q36",
      unit: "dt",
      type: "mcq",
      difficulty: 3,
      q: "Karar ağacının zaman ve yer karmaşıklığı neye bağlıdır?",
      options: [
        "Yalnızca sınıf sayısına",
        "Öğrenme kümesi örnekleri sayısına, nitelik sayısına ve oluşan ağacın yapısına",
        "Yalnızca kök düğümün koşuluna",
        "Yalnızca yaprak sayısına"
      ],
      answer: 1,
      explanation: "Zaman ve yer karmaşıklığı; öğrenme kümesi örnekleri sayısına, nitelik sayısına ve oluşan ağacın yapısına bağlıdır.",
      source: "DT Slayt 15"
    },
    {
      id: "dt-q37",
      unit: "dt",
      type: "truefalse",
      difficulty: 2,
      q: "Karar ağaçlarında hem ağaç oluşturma karmaşıklığı hem de ağaç budama karmaşıklığı fazladır.",
      answer: true,
      explanation: "Dezavantajlar slaytına göre hem ağaç oluşturma hem de ağaç budama karmaşıklığı fazladır.",
      source: "DT Slayt 15"
    },
    {
      id: "dt-q38",
      unit: "dt",
      type: "match",
      difficulty: 2,
      q: "Karar ağacı kullanım alanlarını açıklamalarıyla eşleştirin.",
      pairs: [
        ["Karar Analizi", "Karar verme sürecinde kullanılır, görselleştirmeye uygun ve anlaşılırdır"],
        ["Sınıflandırma", "Bir sınıf değerini tahmin eder, örneğin spam/spam değil"],
        ["Regresyon", "Denetimli teknik; sürekli bir değeri tahmin eder, örneğin maaş"]
      ],
      explanation: "Karar Analizi karar sürecine ve görselleştirmeye odaklanır; Sınıflandırma sınıf değeri tahmin eder; Regresyon sürekli değer tahmin eder.",
      source: "DT Slayt 9-12"
    },
    {
      id: "dt-q39",
      unit: "dt",
      type: "mcq",
      difficulty: 3,
      q: "Bir karar ağacı bir e-postanın spam olup olmadığını belirlemek için kullanılıyorsa bu hangi kullanım alanına ve düğüm davranışına karşılık gelir?",
      options: [
        "Regresyon; yaprakta hedef değişkenin ortalaması alınır",
        "Sınıflandırma; yaprakta çoğunluk sınıfına göre karar verilir",
        "Karar Analizi; yalnızca görselleştirme yapılır, tahmin yapılmaz",
        "Kümeleme; etiketsiz veriler gruplanır"
      ],
      answer: 1,
      explanation: "Spam/spam değil bir sınıf değeri olduğundan bu sınıflandırmadır; yaprak düğümde alt kümedeki çoğunluk sınıfına göre nihai karar verilir.",
      source: "DT Slayt 7, 11"
    },
    {
      id: "dt-q40",
      unit: "dt",
      type: "fill",
      difficulty: 1,
      q: "Karar ağacında bir özellik testi yapan ara düğümlere ______ düğüm denir.",
      answer: ["iç", "ic", "iç düğüm", "ic dugum", "internal"],
      explanation: "Bir özellik testi yapan ve veriyi alt kümelere bölen ara düğümlere iç düğüm (internal node) denir.",
      source: "DT Slayt 4, 6"
    },
    {
      id: "dt-q41",
      unit: "dt",
      type: "truefalse",
      difficulty: 1,
      q: "Karar ağaçları hem sınıflandırma hem de regresyon problemlerinde kullanılabilir.",
      answer: true,
      explanation: "Karar ağacı yöntemi Karar Analizi, Sınıflandırma ve Regresyon alanlarında kullanılır; dolayısıyla hem sınıflandırma hem regresyon için uygundur.",
      source: "DT Slayt 9"
    },
    {
      id: "dt-q42",
      unit: "dt",
      type: "mcq",
      difficulty: 2,
      q: "Bir regresyon ağacında yaprak düğümdeki tahmin tipik olarak nasıl üretilir?",
      options: [
        "Çoğunluk sınıfına göre",
        "Hedef değişkenin ortalama değerine göre",
        "Kök düğümün koşuluna göre",
        "Rastgele bir gözleme göre"
      ],
      answer: 1,
      explanation: "Regresyonda sürekli değer tahmin edildiğinden yaprak düğümdeki tahmin hedef değişkenin ortalama değerine dayanır (sınıflandırmada çoğunluk sınıfı kullanılır).",
      source: "DT Slayt 7, 12"
    }
  ]
};
