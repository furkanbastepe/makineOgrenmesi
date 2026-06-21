window.QBANK = window.QBANK || {};
window.QBANK["knn"] = {
  title: "K-En Yakın Komşu (KNN)",
  concepts: [
    {
      id: "knn-c01",
      unit: "knn",
      title: "KNN Nedir?",
      body: [
        "Temel bir makine öğrenmesi algoritmasıdır.",
        "Denetimli (gözetimli) öğrenme kategorisine girer.",
        "Hem sınıflandırma hem de regresyon problemlerini çözebilir.",
        "Veri noktaları arasındaki benzerlik (uzaklık) ölçüsünü kullanır."
      ],
      source: "KNN Slayt 2"
    },
    {
      id: "knn-c02",
      unit: "knn",
      title: "Sezgisel Mantık (Telefon Örneği)",
      body: [
        "Yeni telefon alırken arkadaşların kullandığı markaları kontrol etmek gibidir.",
        "En çok arkadaşının kullandığı (en sık satın alınan) markayı seçersin.",
        "Çoğunluğa göre karar verme = KNN mantığı."
      ],
      source: "KNN Slayt 4"
    },
    {
      id: "knn-c03",
      unit: "knn",
      title: "KNN'nin Temel Özellikleri",
      body: [
        "Basitlik: anlaşılması kolay bir algoritmadır.",
        "Parametre azlığı: temel parametre k değeridir.",
        "Esneklik: öğrenme süreci yoktur, yeni nokta eklemek/güncellemek kolaydır.",
        "Yüksek hafıza ihtiyacı: tahminde tüm veri setine erişim gerekir.",
        "Etkinlik problemleri: her tahminde tüm veri setini tarar (yavaş)."
      ],
      source: "KNN Slayt 5"
    },
    {
      id: "knn-c04",
      unit: "knn",
      title: "KNN Algoritması Parametreleri",
      body: [
        "Uzaklık Ölçütleri (hangi mesafe metriği).",
        "Komşu Sayısı (k değeri).",
        "Ağırlıklandırma (komşulara verilen ağırlık)."
      ],
      source: "KNN Slayt 6"
    },
    {
      id: "knn-c05",
      unit: "knn",
      title: "Uzaklık Ölçütleri",
      body: [
        "Distance (Uzaklık): tahmin edilecek noktanın diğer noktalara uzaklığı hesaplanır.",
        "Öklid Uzaklığı",
        "Manhattan Uzaklığı",
        "Minkowski Uzaklığı",
        "Chebyshev Uzaklığı",
        "Dilca Uzaklığı"
      ],
      source: "KNN Slayt 7"
    },
    {
      id: "knn-c06",
      unit: "knn",
      title: "Öklid Uzaklığı",
      body: [
        "İki nokta arasındaki doğrusal uzaklıktır.",
        "Sınıflandırma ve kümelemede en sık kullanılan ölçüttür.",
        "Farkların karelerinin toplamının kareköküdür."
      ],
      formula: "d(P,Q) = √( Σ (xi - yi)² )",
      source: "KNN Slayt 8"
    },
    {
      id: "knn-c07",
      unit: "knn",
      title: "Manhattan Uzaklığı",
      body: [
        "n boyutlu iki nokta arasındaki farkların mutlak değerlerinin toplamıdır.",
        "Şehir blokları (taksi) mesafesi olarak da bilinir."
      ],
      formula: "d(P,Q) = Σ |xi - yi|",
      source: "KNN Slayt 9"
    },
    {
      id: "knn-c08",
      unit: "knn",
      title: "Chebyshev Uzaklığı",
      body: [
        "Maksimum değer uzaklığı olarak da bilinir.",
        "İki nokta arasındaki farkların mutlak değerlerinin maksimumudur.",
        "Minkowski uzaklığının n→∞ olduğu özel durumudur."
      ],
      formula: "d(P,Q) = max |xi - yi|",
      source: "KNN Slayt 10"
    },
    {
      id: "knn-c09",
      unit: "knn",
      title: "Minkowski Uzaklığı",
      body: [
        "Öklid uzayında tanımlı genelleştirilmiş bir ölçüttür.",
        "Öklid ve Manhattan gibi ölçütlerin genel halidir.",
        "p=2 → Öklid, p=1 → Manhattan, n→∞ → Chebyshev."
      ],
      formula: "d(P,Q) = ( Σ |xi - yi|^p )^(1/p)",
      source: "KNN Slayt 11"
    },
    {
      id: "knn-c10",
      unit: "knn",
      title: "Dilca Uzaklığı",
      body: [
        "Kategorik öznitelik değerleri arası uzaklığı ölçen iki aşamalı bir ölçüttür.",
        "1. aşama: simetrik belirsizlik katsayısı (SU) ile öznitelik seçimi → eş-oluşum tablosu.",
        "2. aşama: koşullu olasılık ve Öklid uzaklığına dayalı hesaplama."
      ],
      source: "KNN Slayt 12"
    },
    {
      id: "knn-c11",
      unit: "knn",
      title: "Simetrik Belirsizlik Katsayısı (SU)",
      body: [
        "Bilgi kazancı (IG) yüksek değerli özniteliklere karşı taraflıdır (yanlıdır).",
        "SU bu yanlılığı gidermek için bilgi kazancını normalize eder.",
        "Bilgi kazancının X ve Y özniteliklerinin entropi toplamına bölünmesiyle elde edilir."
      ],
      formula: "SU = IG(X,Y) / ( H(X) + H(Y) )",
      source: "KNN Slayt 13"
    },
    {
      id: "knn-c12",
      unit: "knn",
      title: "K Komşu Sayısı",
      body: [
        "k değeri, her tahmin için kullanılacak komşu sayısını belirtir.",
        "Bir noktanın k en yakın komşusu bulunur, etiketleri kullanılarak tahmin yapılır.",
        "Sınıflandırmada çoğunluk oyu uygulanır.",
        "k=1 overfit riskini artırır; çok büyük k aşırı genel sonuç verir."
      ],
      source: "KNN Slayt 14"
    },
    {
      id: "knn-c13",
      unit: "knn",
      title: "Regresyonda KNN ve k Seçimi",
      body: [
        "Regresyonda k komşunun değerlerinin ortalaması (veya medyanı) alınır.",
        "k değeri algoritmanın performansını doğrudan etkiler.",
        "Genellikle uygulayıcı tarafından deneme-yanılma ile belirlenir.",
        "Veri setine, problem türüne ve performans gereksinimine göre değişir."
      ],
      source: "KNN Slayt 15"
    },
    {
      id: "knn-c14",
      unit: "knn",
      title: "k Seçim Faktörleri",
      body: [
        "Veri setinin büyüklüğü: büyük veri daha yüksek k gerektirir.",
        "Modelin karmaşıklığı: küçük k karmaşıklığı artırır, büyük k basitliği artırır.",
        "Çapraz doğrulama (cross-validation) ile en iyi k bulunabilir.",
        "Problemin doğası: gürültülü veri daha büyük k gerektirir."
      ],
      source: "KNN Slayt 16-19"
    },
    {
      id: "knn-c15",
      unit: "knn",
      title: "KNN Nasıl Çalışır? (6 Adım)",
      body: [
        "Adım-1: Komşuların K sayısını seç.",
        "Adım-2: K sayıda komşunun Öklid uzaklığını hesapla.",
        "Adım-3: En yakın K komşuyu al.",
        "Adım-4: Her kategorideki nokta sayısını say.",
        "Adım-5: Yeni noktayı sayının maksimum olduğu kategoriye ata.",
        "Adım-6: Model hazır."
      ],
      source: "KNN Slayt 20"
    },
    {
      id: "knn-c16",
      unit: "knn",
      title: "Eşit Sayıda Komşu Olması",
      body: [
        "Rastgele Seçim (Random Tie-breaking): eşitlikte rastgele bir sınıf seçilir.",
        "Ağırlıklı Oylama: komşuların mesafesine göre ağırlık verilir.",
        "Daha yakın komşulara daha fazla ağırlık verilerek eşitlik çözülür."
      ],
      source: "KNN Slayt 26"
    },
    {
      id: "knn-c17",
      unit: "knn",
      title: "Optimal k ve Çapraz Doğrulama",
      body: [
        "Sabit bir k değeri yoktur; optimal k başarı için çok önemlidir.",
        "Çapraz Doğrulama (Cross Validation) ile en uygun k seçilir.",
        "Rasgele alt örnekleme çapraz doğrulama (random subsampling) kullanılabilir."
      ],
      source: "KNN Slayt 28"
    },
    {
      id: "knn-c18",
      unit: "knn",
      title: "MNV (Mutual Nearest Neighbor)",
      body: [
        "Tüm noktalar için karşılıklı en yakın komşuluk değerleri belirlenir.",
        "Eşik değeri yerine en yakın komşu sayısı (k) kullanılır.",
        "Örnek: 2'nin 3. komşusu 5, 5'in 3. komşusu 2 → MNV(2,5)=3+3=6.",
        "MNV = 2,3,...,2k için kümeler oluşturulur."
      ],
      source: "KNN Slayt 32"
    },
    {
      id: "knn-c19",
      unit: "knn",
      title: "Ağırlıklı Oylama",
      body: [
        "Gözlem değerleri için ağırlıklı uzaklıklar hesaplanır.",
        "Her sınıf için uzaklıkların (ağırlıkların) toplamı bulunur.",
        "En büyük ağırlıklı oylama değerine sahip sınıf seçilir."
      ],
      source: "KNN Slayt 39"
    },
    {
      id: "knn-c20",
      unit: "knn",
      title: "KNN Avantaj ve Dezavantajları",
      body: [
        "Avantaj: basit, parametre ayarı kolay, eğitim süresi yok/düşük, non-parametrik, çoklu sınıf desteği.",
        "Dezavantaj: yüksek hesaplama maliyeti, ön işleme hassasiyeti, depolama ihtiyacı.",
        "Dezavantaj: ölçeklendirme sorunu, kısa mesafe yanlılığı, dengesiz veri sorunu."
      ],
      source: "KNN Slayt 51-52"
    }
  ],
  questions: [
    {
      id: "knn-q01",
      unit: "knn",
      type: "mcq",
      difficulty: 1,
      q: "KNN hangi öğrenme kategorisine girer?",
      options: ["Denetimsiz (gözetimsiz) öğrenme", "Denetimli (gözetimli) öğrenme", "Pekiştirmeli öğrenme", "Yarı denetimli öğrenme"],
      answer: 1,
      explanation: "KNN denetimli/gözetimli öğrenme kategorisine girer ve hem sınıflandırma hem regresyon için kullanılabilir.",
      source: "KNN Slayt 2"
    },
    {
      id: "knn-q02",
      unit: "knn",
      type: "truefalse",
      difficulty: 1,
      q: "KNN yalnızca sınıflandırma problemleri için kullanılabilir, regresyonda kullanılamaz.",
      answer: false,
      explanation: "KNN hem sınıflandırma hem de regresyon problemlerini çözmek için kullanılabilir.",
      source: "KNN Slayt 2"
    },
    {
      id: "knn-q03",
      unit: "knn",
      type: "fill",
      difficulty: 1,
      q: "KNN, öğrenme ve tahminleme sürecinde veri noktaları arasındaki ________ ölçüsünü kullanır.",
      answer: ["benzerlik", "benzerlik ölçüsü", "uzaklık", "uzaklık ölçüsü", "benzerlik (uzaklık)"],
      explanation: "KNN veri noktaları arasındaki benzerlik (uzaklık) ölçüsünü kullanarak çalışır.",
      source: "KNN Slayt 2"
    },
    {
      id: "knn-q04",
      unit: "knn",
      type: "mcq",
      difficulty: 1,
      q: "Telefon alma örneğinde (arkadaşların markalarına bakıp en çok kullanılanı seçme) hangi KNN mantığı anlatılır?",
      options: ["Uzaklık formülünün türetimi", "Çoğunluğa göre karar verme", "Çapraz doğrulama", "Veri normalizasyonu"],
      answer: 1,
      explanation: "En çok arkadaşının kullandığı (çoğunluğun seçtiği) markayı seçmek, KNN'in çoğunluk oyu mantığını gösterir.",
      source: "KNN Slayt 4"
    },
    {
      id: "knn-q05",
      unit: "knn",
      type: "categorize",
      difficulty: 2,
      q: "KNN'nin temel özelliklerini olumlu (kolaylık) ve sınırlama (maliyet) olarak sınıflandırın.",
      categories: ["Olumlu Özellik", "Sınırlama"],
      items: [
        { text: "Basitlik (anlaşılması kolay)", cat: "Olumlu Özellik" },
        { text: "Parametre azlığı (temel parametre k)", cat: "Olumlu Özellik" },
        { text: "Esneklik (öğrenme süreci yok)", cat: "Olumlu Özellik" },
        { text: "Yüksek hafıza ihtiyacı", cat: "Sınırlama" },
        { text: "Etkinlik problemleri (her tahminde tüm veriyi tarar)", cat: "Sınırlama" }
      ],
      explanation: "KNN basit, az parametreli ve esnektir; ancak tahminde tüm veri setine erişim gerektirdiği için yüksek hafıza ihtiyacı ve etkinlik problemleri vardır.",
      source: "KNN Slayt 5"
    },
    {
      id: "knn-q06",
      unit: "knn",
      type: "mcq",
      difficulty: 1,
      q: "KNN algoritmasının temel parametresi aşağıdakilerden hangisidir?",
      options: ["Öğrenme oranı", "k değeri (komşu sayısı)", "Epoch sayısı", "Regularizasyon katsayısı"],
      answer: 1,
      explanation: "KNN'in temel parametresi k değeridir; uzaklık ölçüm metriği gibi parametreler de etkilidir.",
      source: "KNN Slayt 5"
    },
    {
      id: "knn-q07",
      unit: "knn",
      type: "order",
      difficulty: 2,
      q: "KNN'nin esnekliği neden kaynaklanır? Aşağıdaki üç algoritma parametresini slayttaki sırayla diz.",
      items: ["Uzaklık Ölçütleri", "Komşu Sayısı", "Ağırlıklandırma"],
      explanation: "KNN algoritması parametreleri sırasıyla Uzaklık Ölçütleri, Komşu Sayısı ve Ağırlıklandırma olarak listelenir.",
      source: "KNN Slayt 6"
    },
    {
      id: "knn-q08",
      unit: "knn",
      type: "mcq",
      difficulty: 1,
      q: "Aşağıdakilerden hangisi KNN'de kullanılan uzaklık ölçütlerinden biri DEĞİLDİR?",
      options: ["Öklid Uzaklığı", "Manhattan Uzaklığı", "Gini Uzaklığı", "Chebyshev Uzaklığı"],
      answer: 2,
      explanation: "KNN uzaklık ölçütleri: Öklid, Manhattan, Minkowski, Chebyshev ve Dilca. 'Gini' bir uzaklık ölçütü değil, saflık ölçüsüdür.",
      source: "KNN Slayt 7"
    },
    {
      id: "knn-q09",
      unit: "knn",
      type: "match",
      difficulty: 2,
      q: "Uzaklık ölçütlerini tanımlarıyla eşleştirin.",
      pairs: [
        ["Öklid", "İki nokta arası doğrusal uzaklık; farkların karelerinin toplamının karekökü"],
        ["Manhattan", "Farkların mutlak değerlerinin toplamı"],
        ["Chebyshev", "Farkların mutlak değerlerinin maksimumu"],
        ["Minkowski", "Genelleştirilmiş ölçüt (p parametreli)"],
        ["Dilca", "Kategorik öznitelikler için iki aşamalı ölçüt"]
      ],
      explanation: "Öklid karekök tabanlı doğrusal mesafe, Manhattan mutlak farklar toplamı, Chebyshev maksimum fark, Minkowski genel form, Dilca kategorik veriler içindir.",
      source: "KNN Slayt 7-12"
    },
    {
      id: "knn-q10",
      unit: "knn",
      type: "mcq",
      difficulty: 1,
      q: "Sınıflandırma ve kümeleme algoritmalarında en sık kullanılan uzaklık ölçütü hangisidir?",
      options: ["Manhattan", "Öklid", "Chebyshev", "Dilca"],
      answer: 1,
      explanation: "Öklid uzaklığı, sınıflandırma ve kümeleme algoritmalarında en sık kullanılan uzaklık ölçütüdür.",
      source: "KNN Slayt 8"
    },
    {
      id: "knn-q11",
      unit: "knn",
      type: "fill",
      difficulty: 2,
      q: "Öklid uzaklığı, iki nokta arasındaki ________ uzaklık olarak tanımlanır.",
      answer: ["doğrusal", "doğrusal uzaklık"],
      explanation: "Öklid uzaklığı iki nokta arasındaki doğrusal (düz çizgi) uzaklıktır.",
      source: "KNN Slayt 8"
    },
    {
      id: "knn-q12",
      unit: "knn",
      type: "mcq",
      difficulty: 1,
      q: "Manhattan uzaklığı nasıl hesaplanır?",
      options: ["Farkların karelerinin toplamının karekökü", "Farkların mutlak değerlerinin toplamı", "Farkların mutlak değerlerinin maksimumu", "Farkların çarpımının logaritması"],
      answer: 1,
      explanation: "Manhattan uzaklığı, n boyutlu iki nokta arasındaki farkların mutlak değerlerinin toplamıdır.",
      source: "KNN Slayt 9"
    },
    {
      id: "knn-q13",
      unit: "knn",
      type: "truefalse",
      difficulty: 2,
      q: "Chebyshev uzaklığı, iki nokta arasındaki farkların mutlak değerlerinin maksimumudur.",
      answer: true,
      explanation: "Chebyshev (maksimum değer) uzaklığı, farkların mutlak değerlerinin maksimumu olarak tanımlanır.",
      source: "KNN Slayt 10"
    },
    {
      id: "knn-q14",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "Chebyshev uzaklığı, Minkowski uzaklığının hangi özel durumudur?",
      options: ["p=1", "p=2", "n→∞", "p=0"],
      answer: 2,
      explanation: "Chebyshev uzaklığı, Minkowski uzaklığının n→∞ olduğu özel durumudur.",
      source: "KNN Slayt 10"
    },
    {
      id: "knn-q15",
      unit: "knn",
      type: "fill",
      difficulty: 2,
      q: "Chebyshev uzaklığının diğer adı ________ uzaklığıdır.",
      answer: ["maksimum değer", "maksimum", "maksimum değer uzaklığı"],
      explanation: "Chebyshev uzaklığı, maksimum değer uzaklığı olarak da adlandırılır.",
      source: "KNN Slayt 10"
    },
    {
      id: "knn-q16",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "Minkowski uzaklığı için hangi ifade doğrudur?",
      options: ["Sadece kategorik veriler için kullanılır", "Öklid ve Manhattan gibi ölçütlerin genelleştirilmiş halidir", "Her zaman farkların maksimumunu verir", "Yalnızca iki boyutta tanımlıdır"],
      answer: 1,
      explanation: "Minkowski uzaklığı, Öklid ve Manhattan gibi uzaklık ölçütlerinin genelleştirilmiş halidir.",
      source: "KNN Slayt 11"
    },
    {
      id: "knn-q17",
      unit: "knn",
      type: "match",
      difficulty: 2,
      q: "Minkowski uzaklığının özel durumlarını eşleştirin.",
      pairs: [
        ["p = 2", "Öklid uzaklığı"],
        ["p = 1", "Manhattan uzaklığı"],
        ["n → ∞", "Chebyshev uzaklığı"]
      ],
      explanation: "Minkowski'de p=2 Öklid'i, p=1 Manhattan'ı, n→∞ Chebyshev'i verir.",
      source: "KNN Slayt 11"
    },
    {
      id: "knn-q18",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "Minkowski uzaklığında p=2 seçilirse hangi uzaklık elde edilir?",
      options: ["Manhattan", "Öklid", "Chebyshev", "Dilca"],
      answer: 1,
      explanation: "Minkowski ölçütünde p=2 olduğu özel durum Öklid uzaklığını verir.",
      source: "KNN Slayt 11"
    },
    {
      id: "knn-q19",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "Minkowski uzaklığında p=1 seçilirse hangi uzaklık elde edilir?",
      options: ["Öklid", "Manhattan", "Chebyshev", "Dilca"],
      answer: 1,
      explanation: "Minkowski ölçütünde p=1 olduğu özel durum Manhattan uzaklığını verir.",
      source: "KNN Slayt 11"
    },
    {
      id: "knn-q20",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "Dilca uzaklığı hangi tür öznitelikler için kullanılır?",
      options: ["Sürekli (sayısal) öznitelikler", "Kategorik öznitelikler", "Yalnızca ikili (binary) öznitelikler", "Zaman serisi öznitelikleri"],
      answer: 1,
      explanation: "Dilca (Distance Learning in Categorical Attribute), kategorik öznitelik değerleri arasındaki uzaklığı ölçmek için kullanılan iki aşamalı bir ölçüttür.",
      source: "KNN Slayt 12"
    },
    {
      id: "knn-q21",
      unit: "knn",
      type: "truefalse",
      difficulty: 2,
      q: "Dilca uzaklığı iki aşamalı bir ölçüttür ve ilk aşamada simetrik belirsizlik katsayısı ile öznitelik seçimi yapılır.",
      answer: true,
      explanation: "Dilca'da önce SU yöntemiyle öznitelik seçimi yapılıp eş-oluşum tablosu oluşturulur, ardından koşullu olasılık ve Öklid'e dayalı hesaplama yapılır.",
      source: "KNN Slayt 12"
    },
    {
      id: "knn-q22",
      unit: "knn",
      type: "order",
      difficulty: 3,
      q: "Dilca uzaklığının iki aşamasını sırayla diz.",
      items: [
        "Simetrik belirsizlik katsayısı (SU) ile öznitelik seçimi ve eş-oluşum tablosu oluşturma",
        "Koşullu olasılık ve Öklid uzaklığına dayalı hesaplama ile uzaklık ölçme"
      ],
      explanation: "Dilca önce SU ile öznitelik seçimi yapar (eş-oluşum tablosu), sonra koşullu olasılık + Öklid ile uzaklığı hesaplar.",
      source: "KNN Slayt 12"
    },
    {
      id: "knn-q23",
      unit: "knn",
      type: "mcq",
      difficulty: 3,
      q: "Simetrik belirsizlik katsayısı (SU), bilgi kazancının (IG) hangi problemini gidermek için kullanılır?",
      options: ["Bilgi kazancının negatif olması", "Bilgi kazancının yüksek değerli özniteliklere taraflı (yanlı) olması", "Bilgi kazancının her zaman sıfır olması", "Bilgi kazancının hesaplanamaması"],
      answer: 1,
      explanation: "Bilgi kazancı yüksek değer içeren özniteliklere karşı taraflıdır; SU bu yanlılığı, IG'yi entropi toplamına bölerek giderir.",
      source: "KNN Slayt 13"
    },
    {
      id: "knn-q24",
      unit: "knn",
      type: "fill",
      difficulty: 3,
      q: "Simetrik belirsizlik katsayısı, bilgi kazancının X ve Y özniteliklerinin ________ değerleri toplamına bölünmesiyle elde edilir.",
      answer: ["entropi", "entropi değerleri", "entropi değeri"],
      explanation: "SU = IG / (H(X) + H(Y)); yani bilgi kazancı entropi değerleri toplamına bölünür.",
      source: "KNN Slayt 13"
    },
    {
      id: "knn-q25",
      unit: "knn",
      type: "mcq",
      difficulty: 1,
      q: "KNN'de 'k' değeri neyi belirtir?",
      options: ["Toplam öznitelik sayısını", "Her tahmin için kullanılacak komşu sayısını", "Eğitim iterasyon sayısını", "Sınıf sayısını"],
      answer: 1,
      explanation: "'k' değeri, her bir tahmin için kullanılacak olan en yakın komşu sayısını belirtir.",
      source: "KNN Slayt 14"
    },
    {
      id: "knn-q26",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "Sınıflandırmada bir noktanın sınıfı, k komşunun sınıfları arasında nasıl belirlenir?",
      options: ["Ağırlıksız çapraz doğrulama ile", "Çoğunluk oyu ile", "Rastgele atama ile", "Komşuların ortalaması alınarak"],
      answer: 1,
      explanation: "Sınıflandırmada k en yakın komşunun sınıfları arasında çoğunluk oyu kullanılarak tahmin yapılır.",
      source: "KNN Slayt 14"
    },
    {
      id: "knn-q27",
      unit: "knn",
      type: "truefalse",
      difficulty: 2,
      q: "k=1 seçildiğinde overfit (aşırı uydurma) olasılığı çok yüksektir.",
      answer: true,
      explanation: "k=1 olursa overfit etme olasılığı çok yüksek olur; k çok büyük olursa da sonuçlar çok genelleşir.",
      source: "KNN Slayt 14"
    },
    {
      id: "knn-q28",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "k değeri çok büyük seçilirse model nasıl davranır?",
      options: ["Aşırı uydurma (overfitting) yapar", "Çok genel sonuçlar verir", "Hiç tahmin yapamaz", "Eğitim süresi çok artar"],
      answer: 1,
      explanation: "k çok büyük olursa model çok genel sonuçlar verir (aşırı genelleme); k=1 ise overfit eder.",
      source: "KNN Slayt 14"
    },
    {
      id: "knn-q29",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "Regresyon problemlerinde KNN tahmini nasıl yapılır?",
      options: ["Komşuların çoğunluk oyu ile", "k en yakın komşunun değerlerinin ortalaması (veya medyanı) alınarak", "Sadece en yakın komşunun sınıfı ile", "Tüm veri setinin standart sapması ile"],
      answer: 1,
      explanation: "Regresyonda k en yakın komşunun etiket/değerlerinin bir ortalaması (genellikle ortalama veya medyan) alınarak tahmin yapılır.",
      source: "KNN Slayt 15"
    },
    {
      id: "knn-q30",
      unit: "knn",
      type: "fill",
      difficulty: 2,
      q: "k değeri genellikle uygulayıcı tarafından ________ yöntemiyle ayarlanır.",
      answer: ["deneme yanılma", "deneme-yanılma", "deneme yanilma"],
      explanation: "k değeri genellikle uygulayıcı tarafından deneme yanılma yöntemiyle ayarlanır.",
      source: "KNN Slayt 15"
    },
    {
      id: "knn-q31",
      unit: "knn",
      type: "categorize",
      difficulty: 3,
      q: "k seçim faktörlerinin etkisini sınıflandırın: küçük k mı yoksa büyük k mı ile ilişkili?",
      categories: ["Küçük k", "Büyük k"],
      items: [
        { text: "Aşırı uydurma (overfitting) riski", cat: "Küçük k" },
        { text: "Modelin karmaşıklığını artırır", cat: "Küçük k" },
        { text: "Daha genelleyici sonuçlar üretir", cat: "Büyük k" },
        { text: "Modelin basitliğini artırır", cat: "Büyük k" },
        { text: "Gürültülü veri setlerinde tercih edilir", cat: "Büyük k" }
      ],
      explanation: "Küçük k karmaşıklığı ve overfit riskini artırır; büyük k basitliği ve genellemeyi artırır, gürültülü veride tercih edilir.",
      source: "KNN Slayt 16-19"
    },
    {
      id: "knn-q32",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "Veri seti büyüklüğü ile k değeri arasındaki ilişki nedir?",
      options: ["Daha büyük veri setleri genellikle daha yüksek k gerektirir", "Daha büyük veri setleri her zaman k=1 gerektirir", "Veri büyüklüğü k'yı etkilemez", "Daha küçük veri setleri daha yüksek k gerektirir"],
      answer: 0,
      explanation: "Daha büyük veri setleri genellikle daha yüksek k değerlerini gerektirir.",
      source: "KNN Slayt 16"
    },
    {
      id: "knn-q33",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "k değerinin model karmaşıklığına etkisi nedir?",
      options: ["Küçük k basitliği artırır, büyük k karmaşıklığı artırır", "Küçük k karmaşıklığı artırır, büyük k basitliği artırır", "k karmaşıklığı etkilemez", "Sadece çok büyük k karmaşıklığı artırır"],
      answer: 1,
      explanation: "Küçük k değerleri modelin karmaşıklığını artırırken, büyük k değerleri modelin basitliğini artırır.",
      source: "KNN Slayt 17"
    },
    {
      id: "knn-q34",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "En iyi k değerini belirlemek için hangi yöntem kullanılabilir?",
      options: ["Gradyan inişi", "Çapraz doğrulama (cross-validation)", "Bilgi kazancı", "Geri yayılım"],
      answer: 1,
      explanation: "Çapraz doğrulama (cross-validation) ile veri eğitim/doğrulama kümelerine ayrılıp farklı k için performans değerlendirilerek en iyi k seçilebilir.",
      source: "KNN Slayt 18"
    },
    {
      id: "knn-q35",
      unit: "knn",
      type: "truefalse",
      difficulty: 2,
      q: "Gürültülü veri setleri genellikle daha büyük k değerlerini gerektirir.",
      answer: true,
      explanation: "Problemin doğası gereği gürültülü veri setleri daha büyük k gerektirirken, daha az gürültülü veriler için küçük k daha iyi sonuç verebilir.",
      source: "KNN Slayt 19"
    },
    {
      id: "knn-q36",
      unit: "knn",
      type: "order",
      difficulty: 2,
      q: "KNN'nin nasıl çalıştığını anlatan 6 adımı doğru sırayla diz.",
      items: [
        "Komşuların K sayısını seç",
        "K sayıda komşunun Öklid uzaklığını hesapla",
        "En yakın K komşuyu al",
        "Her kategorideki nokta sayısını say",
        "Yeni noktayı sayının maksimum olduğu kategoriye ata",
        "Model hazır"
      ],
      explanation: "Sıra: k seç → Öklid uzaklıklarını hesapla → en yakın k komşuyu al → kategori başına say → çoğunluğa ata → model hazır.",
      source: "KNN Slayt 20"
    },
    {
      id: "knn-q37",
      unit: "knn",
      type: "mcq",
      difficulty: 1,
      q: "KNN'nin 6 adımlık çalışma sürecindeki İLK adım nedir?",
      options: ["Öklid uzaklıklarını hesapla", "Komşuların K sayısını seç", "Kategorileri say", "Modeli kaydet"],
      answer: 1,
      explanation: "Adım-1: Komşuların K sayısını seçmektir.",
      source: "KNN Slayt 20"
    },
    {
      id: "knn-q38",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "KNN çalışma adımlarında uzaklık hesabı için hangi metrik açıkça belirtilir?",
      options: ["Manhattan uzaklığı", "Chebyshev uzaklığı", "Öklid uzaklığı", "Dilca uzaklığı"],
      answer: 2,
      explanation: "Adım-2'de K sayıda komşunun Öklid uzaklığı hesaplanır.",
      source: "KNN Slayt 20"
    },
    {
      id: "knn-q39",
      unit: "knn",
      type: "calc",
      difficulty: 1,
      q: "Öklid: (20,35) ile (40,20) arasındaki uzaklık nedir? d1 = √((20-40)² + (35-20)²)",
      answer: 25,
      tolerance: 0.1,
      explanation: "d1 = √((20-40)² + (35-20)²) = √(400 + 225) = √625 = 25.",
      source: "KNN Slayt 45"
    },
    {
      id: "knn-q40",
      unit: "knn",
      type: "calc",
      difficulty: 2,
      q: "Öklid: (20,35) ile (50,50) arasındaki uzaklık nedir? d2 = √((20-50)² + (35-50)²)",
      answer: 33.54,
      tolerance: 0.1,
      explanation: "d2 = √((20-50)² + (35-50)²) = √(900 + 225) = √1125 ≈ 33,54.",
      source: "KNN Slayt 46"
    },
    {
      id: "knn-q41",
      unit: "knn",
      type: "calc",
      difficulty: 2,
      q: "Öklid: (20,35) ile (60,90) arasındaki uzaklık nedir? d3 = √((20-60)² + (35-90)²)",
      answer: 68.01,
      tolerance: 0.1,
      explanation: "d3 = √((20-60)² + (35-90)²) = √(1600 + 3025) = √4625 ≈ 68,01.",
      source: "KNN Slayt 47"
    },
    {
      id: "knn-q42",
      unit: "knn",
      type: "calc",
      difficulty: 1,
      q: "Öklid: (0,0) ile (3,4) arasındaki uzaklık kaçtır?",
      answer: 5,
      tolerance: 0.01,
      explanation: "√((0-3)² + (0-4)²) = √(9 + 16) = √25 = 5.",
      source: "KNN Slayt 8"
    },
    {
      id: "knn-q43",
      unit: "knn",
      type: "calc",
      difficulty: 2,
      q: "Öklid: (1,2) ile (4,6) arasındaki uzaklık kaçtır?",
      answer: 5,
      tolerance: 0.01,
      explanation: "√((1-4)² + (2-6)²) = √(9 + 16) = √25 = 5.",
      source: "KNN Slayt 8"
    },
    {
      id: "knn-q44",
      unit: "knn",
      type: "calc",
      difficulty: 2,
      q: "Öklid: (7,3) ile (10,7) arasındaki uzaklık kaçtır?",
      answer: 5,
      tolerance: 0.01,
      explanation: "√((7-10)² + (3-7)²) = √(9 + 16) = √25 = 5.",
      source: "KNN Slayt 35"
    },
    {
      id: "knn-q45",
      unit: "knn",
      type: "calc",
      difficulty: 2,
      q: "Öklid: (2,2) ile (5,6) arasındaki uzaklık kaçtır?",
      answer: 5,
      tolerance: 0.01,
      explanation: "√((2-5)² + (2-6)²) = √(9 + 16) = √25 = 5.",
      source: "KNN Slayt 8"
    },
    {
      id: "knn-q46",
      unit: "knn",
      type: "calc",
      difficulty: 2,
      q: "Manhattan: (20,35) ile (40,20) arasındaki uzaklık kaçtır? |x| toplamı olarak.",
      answer: 35,
      tolerance: 0.01,
      explanation: "|20-40| + |35-20| = 20 + 15 = 35.",
      source: "KNN Slayt 9"
    },
    {
      id: "knn-q47",
      unit: "knn",
      type: "calc",
      difficulty: 2,
      q: "Manhattan: (1,2) ile (4,6) arasındaki uzaklık kaçtır?",
      answer: 7,
      tolerance: 0.01,
      explanation: "|1-4| + |2-6| = 3 + 4 = 7. (Aynı noktalar için Öklid 5, Manhattan 7'dir.)",
      source: "KNN Slayt 9"
    },
    {
      id: "knn-q48",
      unit: "knn",
      type: "calc",
      difficulty: 2,
      q: "Chebyshev: (1,2) ile (4,6) arasındaki uzaklık kaçtır? (maksimum mutlak fark)",
      answer: 4,
      tolerance: 0.01,
      explanation: "max(|1-4|, |2-6|) = max(3, 4) = 4.",
      source: "KNN Slayt 10"
    },
    {
      id: "knn-q49",
      unit: "knn",
      type: "calc",
      difficulty: 2,
      q: "Manhattan: (3,3) ile (7,3) arasındaki uzaklık kaçtır?",
      answer: 4,
      tolerance: 0.01,
      explanation: "|3-7| + |3-3| = 4 + 0 = 4.",
      source: "KNN Slayt 9"
    },
    {
      id: "knn-q50",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "Slayt 24 örneğinde en yakın komşulardan 3'ü A, 2'si B kategorisindeyse yeni nokta hangi kategoriye atanır?",
      options: ["B kategorisi", "A kategorisi", "Hiçbiri (eşitlik)", "Rastgele biri"],
      answer: 1,
      explanation: "En yakın 3 komşu A, 2 komşu B kategorisindedir; çoğunluk A olduğundan yeni nokta A kategorisine atanır.",
      source: "KNN Slayt 24"
    },
    {
      id: "knn-q51",
      unit: "knn",
      type: "mcq",
      difficulty: 3,
      q: "Slayt 25 örneğinde aynı '?' test noktası için k=3'te Sınıf2, k=7'de Sınıf1 çıkması neyi gösterir?",
      options: ["Algoritmanın hatalı olduğunu", "k değerinin sınıflandırma sonucunu değiştirebildiğini", "Öklid uzaklığının yanlış hesaplandığını", "Verinin normalize edilmediğini"],
      answer: 1,
      explanation: "Aynı test noktası farklı k değerlerinde farklı sınıfa atanabilir; bu yüzden optimal k seçimi sınıflandırma başarısı için kritiktir.",
      source: "KNN Slayt 25"
    },
    {
      id: "knn-q52",
      unit: "knn",
      type: "fill",
      difficulty: 3,
      q: "Slayt 25 örneğinde k=7 için yeni test örneği ________ olarak belirlenir.",
      answer: ["Sınıf1", "Sinif1", "sınıf 1", "sınıf1"],
      explanation: "k=3 için Sınıf2, k=7 için Sınıf1 sonucu çıkar.",
      source: "KNN Slayt 25"
    },
    {
      id: "knn-q53",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "Eşit sayıda komşu (oy eşitliği) durumunda kullanılabilecek yöntemler hangileridir?",
      options: ["Sadece veriyi silmek", "Rastgele seçim ve ağırlıklı oylama", "k'yı her zaman 1'e indirmek", "Öznitelik sayısını artırmak"],
      answer: 1,
      explanation: "Oy eşitliğinde Rastgele Seçim (random tie-breaking) veya komşu mesafelerine dayalı Ağırlıklı Oylama kullanılabilir.",
      source: "KNN Slayt 26"
    },
    {
      id: "knn-q54",
      unit: "knn",
      type: "truefalse",
      difficulty: 2,
      q: "Ağırlıklı oylamada daha yakın komşulara daha fazla ağırlık verilir.",
      answer: true,
      explanation: "Ağırlıklı oylama, komşuların mesafelerine dayanır; daha yakın komşulara daha fazla ağırlık verilerek karar etkilenir.",
      source: "KNN Slayt 26"
    },
    {
      id: "knn-q55",
      unit: "knn",
      type: "truefalse",
      difficulty: 2,
      q: "KNN'de sabit ve evrensel bir k değeri vardır; her problem için aynı k kullanılır.",
      answer: false,
      explanation: "Sabit bir k değeri yoktur; optimal k seçimi sınıflandırma başarısı için çok önemlidir ve probleme göre değişir.",
      source: "KNN Slayt 28"
    },
    {
      id: "knn-q56",
      unit: "knn",
      type: "fill",
      difficulty: 2,
      q: "En uygun k değerinin seçilmesi için ________ doğrulama yöntemi kullanılır.",
      answer: ["çapraz", "çapraz doğrulama", "capraz", "cross validation"],
      explanation: "En uygun k için Çapraz Doğrulama (Cross Validation) ve rasgele alt örnekleme çapraz doğrulama kullanılır.",
      source: "KNN Slayt 28"
    },
    {
      id: "knn-q57",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "KNN'de tüm örneklemler nerede saklanır ve bilinmeyen örneklem nasıl sınıflandırılır?",
      options: ["Karar ağacında saklanır; entropi ile sınıflandırılır", "Örüntü uzayında saklanır; en yakın k örnekleme bakılarak en çok benzediği sınıfa atanır", "Veritabanında saklanır; kümeleme ile sınıflandırılır", "Bellekte saklanmaz; anlık üretilir"],
      answer: 1,
      explanation: "Tüm örneklemler örüntü uzayında saklanır; bilinmeyen örneklem, yakınlığı Öklid ile tanımlanan k en yakın komşu içinden en çok benzediği sınıfa atanır.",
      source: "KNN Slayt 29"
    },
    {
      id: "knn-q58",
      unit: "knn",
      type: "truefalse",
      difficulty: 2,
      q: "KNN algoritması bilinmeyen örneklem için bir gerçek değerin (sayısal) tahmininde de kullanılabilir.",
      answer: true,
      explanation: "KNN sınıflandırmanın yanı sıra, bilinmeyen örneklem için bir gerçek değerin (regresyon) tahmininde de kullanılabilir.",
      source: "KNN Slayt 29"
    },
    {
      id: "knn-q59",
      unit: "knn",
      type: "mcq",
      difficulty: 3,
      q: "MNV (Mutual Nearest Neighbor) yaklaşımında eşik değeri (threshold) yerine ne belirlenir?",
      options: ["Sınıf sayısı", "En yakın komşu sayısı (k)", "Entropi değeri", "Öğrenme oranı"],
      answer: 1,
      explanation: "MNV'de eşik değeri yerine en yakın komşu sayısı (k) belirlenir ve MNV = 2,3,...,2k için kümeler oluşturulur.",
      source: "KNN Slayt 32"
    },
    {
      id: "knn-q60",
      unit: "knn",
      type: "calc",
      difficulty: 3,
      q: "MNV örneğinde 2'nin en yakın 3. komşusu 5, 5'in en yakın 3. komşusu 2 ise MNV(2,5) değeri kaçtır?",
      answer: 6,
      tolerance: 0,
      explanation: "MNV(5,2) = MNV(2,5) = 3 + 3 = 6.",
      source: "KNN Slayt 32"
    },
    {
      id: "knn-q61",
      unit: "knn",
      type: "order",
      difficulty: 2,
      q: "Slayt 33'teki 5 adımlık k-en yakın komşu algoritmasını sırayla diz.",
      items: [
        "K parametresi (komşu sayısı) belirlenir",
        "Komşuluklara ait uzaklıklar hesaplanır",
        "Uzaklıklara göre satırlar sıralanıp en küçük k tanesi belirlenir",
        "Belirlenen satırların sınıfları bulunup tekrarlanan (baskın) sınıf seçilir",
        "Seçilen sınıf, tahmin edilen gözlemin sınıfı olarak kabul edilir"
      ],
      explanation: "5 adım: k belirle → uzaklıkları hesapla → sırala ve en küçük k'yı seç → baskın sınıfı belirle → sınıfı ata.",
      source: "KNN Slayt 33"
    },
    {
      id: "knn-q62",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "Slayt 34 örneğinde yeni gözlem değeri (X=7, Y=3) için hangi k değeri ile işlem yapılır?",
      options: ["k=2", "k=3", "k=4", "k=5"],
      answer: 2,
      explanation: "İlk adımda k=4 için işlem yapılır; (7,3) noktasına en yakın 4 komşu aranır.",
      source: "KNN Slayt 34"
    },
    {
      id: "knn-q63",
      unit: "knn",
      type: "mcq",
      difficulty: 3,
      q: "(7,3) örneğinde k=4 komşu içinde 1 pozitif ve 3 negatif değer varsa (7,3) noktasının sınıfı nedir?",
      options: ["Pozitif", "Negatif", "Eşitlik (kararsız)", "Belirlenemez"],
      answer: 1,
      explanation: "Komşular içinde bir pozitif ve üç negatif olduğundan baskın sınıf negatiftir; (7,3) noktasının sınıfı negatif belirlenir.",
      source: "KNN Slayt 38"
    },
    {
      id: "knn-q64",
      unit: "knn",
      type: "truefalse",
      difficulty: 2,
      q: "(7,3) örneğinde dördüncü adımda en küçük uzaklıklı satırların hangi sınıfa ait olduğu, içinde hangi değerin baskın olduğuna göre belirlenir.",
      answer: true,
      explanation: "Dördüncü adımda en küçük uzaklıklı satırların sınıfları belirlenir ve baskın (en çok tekrarlanan) sınıf seçilir.",
      source: "KNN Slayt 38"
    },
    {
      id: "knn-q65",
      unit: "knn",
      type: "order",
      difficulty: 3,
      q: "Ağırlıklı oylama yönteminin işleyişini sırayla diz.",
      items: [
        "Gözlem değerleri için ağırlıklı uzaklıklar hesaplanır",
        "Her sınıf değeri için uzaklıkların (ağırlıkların) toplamı bulunur",
        "En büyük ağırlıklı oylama değerine sahip sınıf seçilir"
      ],
      explanation: "Ağırlıklı oylama: ağırlıklı uzaklık hesapla → sınıf başına topla → en büyük toplamı veren sınıfı seç.",
      source: "KNN Slayt 39"
    },
    {
      id: "knn-q66",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "Ağırlıklı oylamada yeni gözlemin sınıfı nasıl belirlenir?",
      options: ["En küçük ağırlıklı oylama değerine sahip sınıf seçilir", "En büyük ağırlıklı oylama değerine sahip sınıf seçilir", "Rastgele bir sınıf seçilir", "Tüm sınıfların ortalaması alınır"],
      answer: 1,
      explanation: "Her sınıf için ağırlıklı uzaklıklar toplanır; en büyük ağırlıklı oylama değerine sahip sınıf yeni gözlemin sınıfı olur.",
      source: "KNN Slayt 39"
    },
    {
      id: "knn-q67",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "Slayt 40 örneğinde (0.10, 0.50) gözlemi için hangi k seçilmiştir?",
      options: ["k=2", "k=3", "k=4", "k=5"],
      answer: 1,
      explanation: "k=3 olarak seçilir; (0.10, 0.50) gözlemine en yakın 3 komşu aranır.",
      source: "KNN Slayt 40"
    },
    {
      id: "knn-q68",
      unit: "knn",
      type: "mcq",
      difficulty: 3,
      q: "Slayt 43'te (0.10, 0.50) örneğinde en yakın 3 komşunun bakiyeleri (sınıfları) hepsi ARTI ise yeni gözlemin sınıfı nedir?",
      options: ["EKSİ", "ARTI", "Eşitlik", "Belirlenemez"],
      answer: 1,
      explanation: "Bakiyelerin hepsi ARTI olduğundan, ağırlıklı oylama sonucunda yeni gözlemin sınıfı da ARTI belirlenir.",
      source: "KNN Slayt 43"
    },
    {
      id: "knn-q69",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "Slayt 44 ışık örneğinde Öklid formülü √((X₂-X₁)²+(Y₂-Y₁)²) için X₂=20 ve Y₂=35 neyi temsil eder?",
      options: ["Mevcut girişin parlaklığı ve doygunluğu", "Yeni girişin parlaklığı (20) ve doygunluğu (35)", "Eşik değeri", "k değeri"],
      answer: 1,
      explanation: "X₂=20 yeni girişin parlaklığı, Y₂=35 yeni girişin doygunluğudur; X₁ ve Y₁ mevcut girişin değerleridir.",
      source: "KNN Slayt 44"
    },
    {
      id: "knn-q70",
      unit: "knn",
      type: "fill",
      difficulty: 2,
      q: "Slayt 50 örneğinde k=5 seçildiğinde yeni örneğin sınıfı ________ olur.",
      answer: ["Kırmızı", "kirmizi", "kırmızı"],
      explanation: "K değeri 5 seçilirse yeni örneğin sınıfı Kırmızı olur.",
      source: "KNN Slayt 50"
    },
    {
      id: "knn-q71",
      unit: "knn",
      type: "categorize",
      difficulty: 2,
      q: "Aşağıdaki maddeleri KNN'nin avantajı mı yoksa dezavantajı mı olduğuna göre sınıflandırın.",
      categories: ["Avantaj", "Dezavantaj"],
      items: [
        { text: "Basit ve kolay anlaşılır", cat: "Avantaj" },
        { text: "Parametre ayarı kolaydır", cat: "Avantaj" },
        { text: "Eğitim süresi yok veya düşüktür", cat: "Avantaj" },
        { text: "Non-parametrik yaklaşım", cat: "Avantaj" },
        { text: "Çoklu sınıf ve çok boyutlu veri desteği", cat: "Avantaj" },
        { text: "Yüksek hesaplama maliyeti", cat: "Dezavantaj" },
        { text: "Hassas veri ön işleme gerekliliği", cat: "Dezavantaj" },
        { text: "Depolama alanı ihtiyacı", cat: "Dezavantaj" },
        { text: "Ölçeklendirme sorunları", cat: "Dezavantaj" },
        { text: "Dengesiz veri dağılımı sorunu", cat: "Dezavantaj" }
      ],
      explanation: "Avantajlar: basitlik, kolay parametre ayarı, düşük eğitim süresi, non-parametriklik, çoklu sınıf desteği. Dezavantajlar: hesaplama maliyeti, ön işleme hassasiyeti, depolama, ölçeklendirme, dengesiz veri.",
      source: "KNN Slayt 51-52"
    },
    {
      id: "knn-q72",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "Aşağıdakilerden hangisi KNN'nin bir avantajıdır?",
      options: ["Yüksek hesaplama maliyeti", "Eğitim süresinin yok veya düşük olması", "Depolama alanı ihtiyacı", "Ölçeklendirme sorunları"],
      answer: 1,
      explanation: "Eğitim süresi yok veya düşük olması KNN'nin avantajıdır (tembel öğrenme); diğer seçenekler dezavantajdır.",
      source: "KNN Slayt 51"
    },
    {
      id: "knn-q73",
      unit: "knn",
      type: "mcq",
      difficulty: 2,
      q: "KNN neden yüksek hesaplama maliyetine sahiptir?",
      options: ["Eğitim aşamasında ağırlıkları optimize ettiği için", "Yeni bir nokta ile diğer tüm noktalar arasındaki uzaklıkları hesaplamak zorunda olduğu için", "Çok katmanlı yapısı olduğu için", "Sürekli yeniden eğitildiği için"],
      answer: 1,
      explanation: "KNN tahmin için yeni nokta ile diğer tüm noktalar arasındaki uzaklıkları hesaplar; büyük/yüksek boyutlu verilerde maliyet yükselir.",
      source: "KNN Slayt 52"
    },
    {
      id: "knn-q74",
      unit: "knn",
      type: "truefalse",
      difficulty: 2,
      q: "KNN özelliklerin ölçeklerine duyarlıdır; farklı ölçekli öznitelikler performansı etkileyebilir.",
      answer: true,
      explanation: "Ölçeklendirme sorunu KNN'nin dezavantajıdır; ölçekler arası fark büyük olduğunda performans etkilenir (bu yüzden ölçeklendirme/normalizasyon önemlidir).",
      source: "KNN Slayt 52"
    },
    {
      id: "knn-q75",
      unit: "knn",
      type: "mcq",
      difficulty: 3,
      q: "KNN'nin dengesiz (imbalanced) veri setlerindeki davranışı nasıldır?",
      options: ["Nadir sınıfları her zaman doğru bulur", "Dengesiz sınıf dağılımında zayıf performans gösterebilir, nadir sınıfları yanlış sınıflandırabilir", "Dengesiz veriden hiç etkilenmez", "Sadece dengeli veride çalışır, dengesizde durur"],
      answer: 1,
      explanation: "KNN dengesiz sınıf dağılımlarında zayıf performans gösterebilir; baskın sınıf çoğunluğu oluşturduğundan nadir sınıflar yanlış sınıflandırılabilir.",
      source: "KNN Slayt 52"
    },
    {
      id: "knn-q76",
      unit: "knn",
      type: "truefalse",
      difficulty: 1,
      q: "KNN bir tembel öğrenme (lazy learning) algoritmasıdır; ayrı bir eğitim süreci yoktur, tahmin anında tüm veriye erişir.",
      answer: true,
      explanation: "KNN'in öğrenme süreci yoktur; eğitim süresi yok/düşüktür ve tahmin sırasında tüm veri setine erişir (tembel öğrenme).",
      source: "KNN Slayt 5"
    },
    {
      id: "knn-q77",
      unit: "knn",
      type: "match",
      difficulty: 3,
      q: "KNN örneklerini sonuçlarıyla eşleştirin.",
      pairs: [
        ["(7,3) örneği, k=4 (1 pozitif, 3 negatif)", "Sınıf: Negatif"],
        ["(0.10,0.50) örneği, k=3 (hepsi ARTI)", "Sınıf: ARTI"],
        ["? örneği, k=7", "Sınıf1"],
        ["Yeni örnek, k=5 (Slayt 50)", "Kırmızı"]
      ],
      explanation: "(7,3) negatif, (0.10,0.50) ARTI, k=7 için Sınıf1, k=5 için Kırmızı sonuçları çıkar.",
      source: "KNN Slayt 25-50"
    }
  ]
};
