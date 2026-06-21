window.QBANK = window.QBANK || {};
window.QBANK["svm"] = {
  title: "Destek Vektör Makineleri (SVM)",
  concepts: [
    {
      id: "svm-c01",
      unit: "svm",
      title: "SVM Nedir?",
      body: [
        "Vladimir Vapnik tarafından geliştirilmiştir.",
        "Standart hali Corinna Cortes ve Vladimir Vapnik ile son halini almıştır.",
        "Denetimli (supervised) bir öğrenme yöntemidir.",
        "Hem sınıflama hem de regresyon analizinde kullanılır.",
        "Giriş ile çıkış arasında bir haritalama fonksiyonu üretir."
      ],
      source: "SVM Slayt 2"
    },
    {
      id: "svm-c02",
      unit: "svm",
      title: "SVM'nin Genel Özellikleri",
      body: [
        "Sınıf sınırlarının esnek gösterimini kullanır.",
        "Otomatik karmaşıklık kontrolü yapar.",
        "Polinominal sürede bulunabilen tek bir global minimuma sahiptir.",
        "Genelleme performansı iyidir, kullanımı kolaydır.",
        "Küçük değişikliklerle aynı algoritma birçok probleme uyarlanabilir."
      ],
      source: "SVM Slayt 3"
    },
    {
      id: "svm-c03",
      unit: "svm",
      title: "SVM'nin Amacı",
      body: [
        "Veriyi en iyi şekilde ayırmak.",
        "Hedef: iki sınıfı en güvenli (en geniş) mesafeyle ayırmak.",
        "Temel olarak ikili (binary) sınıflar içindir.",
        "Çoklu sınıf için One-vs-Rest (OvR) ve One-vs-One (OvO) stratejileri kullanılır."
      ],
      source: "SVM Slayt 4"
    },
    {
      id: "svm-c04",
      unit: "svm",
      title: "Üç Temel Prensip",
      body: [
        "Hiperdüzlem: sınıfları ayıran karar sınırı.",
        "Marjin: hiperdüzlem ile en yakın noktalar arası boşluk.",
        "Destek Vektörleri: hiperdüzleme en yakın veri noktaları."
      ],
      source: "SVM Slayt 5"
    },
    {
      id: "svm-c05",
      unit: "svm",
      title: "Hiperdüzlem (Hyperplane)",
      body: [
        "n boyutlu bir uzayı ikiye bölen geometrik bir düzlemdir.",
        "2 boyutlu uzayda çizgi, 3 boyutlu uzayda düzlem olur.",
        "Genel olarak n boyutlu uzayda (n-1) boyutludur.",
        "Veri noktalarının sınıflarını ayıran karar sınırı olarak işlev görür."
      ],
      source: "SVM Slayt 6-7"
    },
    {
      id: "svm-c06",
      unit: "svm",
      title: "Hiperdüzlem Matematiksel İfadesi",
      body: [
        "w: Ağırlık vektörü, düzlemin yönünü belirler.",
        "x: Girdi vektörü (bir veri noktası).",
        "b: Bias, düzlemin orijine olan uzaklığını ayarlayan sabittir.",
        "Denklem tüm veri noktaları için bir karar sınırı (decision boundary) oluşturur."
      ],
      formula: "w·x + b = 0",
      source: "SVM Slayt 8"
    },
    {
      id: "svm-c07",
      unit: "svm",
      title: "Marjin (Margin)",
      body: [
        "Hiperdüzleme en yakın veri noktalarına olan dik mesafedir.",
        "Sınıflar ile hiperdüzlem arasındaki boşluktur.",
        "SVM marjini maksimize etmeye çalışır.",
        "Marjin ne kadar büyükse genelleme yeteneği o kadar iyi olur.",
        "Büyük marjin hiperdüzlemin gürültüden etkilenmemesini sağlar."
      ],
      source: "SVM Slayt 9-10"
    },
    {
      id: "svm-c08",
      unit: "svm",
      title: "Soft Marjin ve Hard Marjin",
      body: [
        "Hard marjin: hiçbir yanlış sınıflandırma yoktur, tam doğru ayrım sağlanır.",
        "Soft marjin: bazı yanlış sınıflandırmalara izin verir.",
        "Soft marjin daha gerçekçi senaryolarda kullanılır.",
        "Soft marjin gürültüye ve ayrılamayan noktalara karşı daha dayanıklıdır."
      ],
      source: "SVM Slayt 11"
    },
    {
      id: "svm-c09",
      unit: "svm",
      title: "Destek Vektörleri (Support Vectors)",
      body: [
        "Hiperdüzleme (karar sınırına) en yakın olan veri noktalarıdır.",
        "Marjini belirleyen ve hiperdüzlemi konumlandıran örneklerdir.",
        "Geri kalan veriler karar sınırını doğrudan etkilemez."
      ],
      source: "SVM Slayt 12"
    },
    {
      id: "svm-c10",
      unit: "svm",
      title: "C Hiperparametresi",
      body: [
        "Karar sınırını ve marjinal hata toleransını ayarlayan en önemli hiperparametredir.",
        "C büyük → marjin dar, eğitim verisine çok uyum, overfit riski artar.",
        "C küçük → marjin geniş, esneklik artar, overfit riski azalır, eğitim verisine az uyum.",
        "Model overfit olursa C azaltılmalıdır.",
        "Yüksek C marjinal hata toleransını azaltır, düşük C artırır."
      ],
      source: "SVM Slayt 14-16"
    },
    {
      id: "svm-c11",
      unit: "svm",
      title: "Kernel (Çekirdek) Fonksiyonu",
      body: [
        "Veriler doğrusal ayrılamadığında devreye girer.",
        "Veriyi daha yüksek boyutlara dönüştürür.",
        "Yüksek boyutta veriyi doğrusal ayrılabilir hale getirir (kernel trick).",
        "Çizgi yerine eğri/düzlem ile sınıfların ayrılmasını mümkün kılar."
      ],
      source: "SVM Slayt 17, 22"
    },
    {
      id: "svm-c12",
      unit: "svm",
      title: "Elma/Portakal Örneği",
      body: [
        "İki özellik kullanılır: ağırlık ve renk.",
        "Veriler 2 boyutlu düzlemde görselleştirilir (bir eksen ağırlık, diğeri renk).",
        "SVM elma ve portakalı ayıran hiperdüzlemi (çizgiyi) bulur.",
        "En yakın örnekler destek vektörleridir; marjin maksimize edilir.",
        "Doğrusal ayrılamazsa kernel trick ile yüksek boyuta taşınır."
      ],
      source: "SVM Slayt 18-24"
    },
    {
      id: "svm-c13",
      unit: "svm",
      title: "Klasik Yaklaşım vs SVM",
      body: [
        "Klasik: lineer parametreli fonksiyonlar, Gauss/normal dağılım.",
        "Klasik: parametre tahmini maksimum benzerlik yöntemiyle yapılır.",
        "Klasik: model yapısı önceden seçilir; tahmini hata sabit, eğitim hatası minimize edilir.",
        "SVM: yüksek boyutludur; parametreler önceden tanımlı değildir, eğitim verisine göre değişir.",
        "SVM: eğitim hatası sabit tutulur, güven aralığı minimize edilir."
      ],
      source: "SVM Slayt 25-26"
    },
    {
      id: "svm-c14",
      unit: "svm",
      title: "SVM Avantajları",
      body: [
        "Convex (dışbükey) optimizasyon problemine dayanır, lokal minima problemi yoktur.",
        "Quadratic kriter ve lineer kısıtlar bulunur.",
        "Çok büyük veri setlerinde de başarılıdır.",
        "Kernel yöntemleriyle lineer olmayan sınıflamada da başarılıdır."
      ],
      source: "SVM Slayt 27"
    },
    {
      id: "svm-c15",
      unit: "svm",
      title: "SVM Kısıtları / Dezavantajları",
      body: [
        "Kernel fonksiyonunun seçimi zordur.",
        "Test hızını düşürmemek için az sayıda destek vektörü seçilmesi gerekir.",
        "Çok sınıflı SVM için optimal tasarım hâlâ araştırma konusudur."
      ],
      source: "SVM Slayt 28"
    }
  ],
  questions: [
    {
      id: "svm-q01",
      unit: "svm",
      type: "mcq",
      difficulty: 1,
      q: "SVM algoritmasını geliştiren ve standart halini kazandıran bilim insanları kimlerdir?",
      options: [
        "Geoffrey Hinton ve Yann LeCun",
        "Vladimir Vapnik ve Corinna Cortes",
        "Tom Mitchell ve Arthur Samuel",
        "Leo Breiman ve Jerome Friedman"
      ],
      answer: 1,
      explanation: "SVM, Vladimir Vapnik tarafından geliştirilmiş ve şu anki standart halini Corinna Cortes ile Vladimir Vapnik'in geliştirmesiyle almıştır.",
      source: "SVM Slayt 2"
    },
    {
      id: "svm-q02",
      unit: "svm",
      type: "truefalse",
      difficulty: 1,
      q: "SVM denetimsiz (unsupervised) bir öğrenme yöntemidir.",
      answer: false,
      explanation: "SVM, eğitim verilerini ve etiketlerini kullanan DENETİMLİ (supervised) bir öğrenme yöntemidir.",
      source: "SVM Slayt 2"
    },
    {
      id: "svm-q03",
      unit: "svm",
      type: "mcq",
      difficulty: 1,
      q: "SVM hangi analiz işlemlerinde kullanılır?",
      options: [
        "Sadece kümeleme",
        "Sadece boyut indirgeme",
        "Sınıflama ve regresyon",
        "Sadece anomali tespiti"
      ],
      answer: 2,
      explanation: "SVM hem sınıflama (classification) hem de regresyon analiz işlemlerinde kullanılan denetimli bir yöntemdir.",
      source: "SVM Slayt 2"
    },
    {
      id: "svm-q04",
      unit: "svm",
      type: "fill",
      difficulty: 2,
      q: "SVM eğitim verilerini kullanarak giriş ile çıkış arasında bir ______ fonksiyonu üretir.",
      answer: ["haritalama", "haritalama fonksiyonu", "eşleme", "mapping"],
      explanation: "SVM, eğitim verilerini kullanarak giriş ile çıkış arasında bir haritalama (mapping) fonksiyonu üretir.",
      source: "SVM Slayt 2"
    },
    {
      id: "svm-q05",
      unit: "svm",
      type: "truefalse",
      difficulty: 2,
      q: "SVM, polinominal sürede bulunabilen tek bir global minimuma sahiptir ve lokal minima problemi yaşamaz.",
      answer: true,
      explanation: "SVM convex optimizasyona dayandığından polinominal sürede bulunabilen tek bir global minimuma sahiptir; bu nedenle lokal minima problemi yoktur.",
      source: "SVM Slayt 3, 27"
    },
    {
      id: "svm-q06",
      unit: "svm",
      type: "mcq",
      difficulty: 1,
      q: "SVM'nin temel amacı aşağıdakilerden hangisidir?",
      options: [
        "Veriyi rastgele kümelere ayırmak",
        "İki sınıfı en güvenli (en geniş) mesafeyle ayırmak",
        "Verinin boyutunu azaltmak",
        "Eksik verileri tamamlamak"
      ],
      answer: 1,
      explanation: "SVM'nin hedefi veriyi en iyi şekilde, yani iki sınıfı en güvenli/en geniş mesafeyle ayırmaktır.",
      source: "SVM Slayt 4"
    },
    {
      id: "svm-q07",
      unit: "svm",
      type: "mcq",
      difficulty: 2,
      q: "SVM temelde ikili sınıflar içindir. Çoklu sınıf problemleri için hangi stratejiler kullanılır?",
      options: [
        "Bagging ve Boosting",
        "One-vs-Rest (OvR) ve One-vs-One (OvO)",
        "K-Means ve DBSCAN",
        "PCA ve LDA"
      ],
      answer: 1,
      explanation: "SVM temelde ikili (binary) sınıflar içindir; çoklu sınıflar One-vs-Rest (OvR) ve One-vs-One (OvO) stratejileriyle desteklenir.",
      source: "SVM Slayt 4"
    },
    {
      id: "svm-q08",
      unit: "svm",
      type: "fill",
      difficulty: 2,
      q: "Çoklu sınıf için kullanılan iki strateji: One-vs-______ (OvR) ve One-vs-______ (OvO).",
      answer: ["Rest, One", "rest one", "rest, one", "Rest One"],
      explanation: "Çoklu sınıf destekleyen iki strateji One-vs-Rest (OvR) ve One-vs-One (OvO)'dur.",
      source: "SVM Slayt 4"
    },
    {
      id: "svm-q09",
      unit: "svm",
      type: "match",
      difficulty: 1,
      q: "SVM'nin üç temel prensibini açıklamalarıyla eşleştirin.",
      pairs: [
        ["Hiperdüzlem", "Sınıfları ayıran karar sınırı"],
        ["Marjin", "Hiperdüzlem ile en yakın noktalar arası boşluk"],
        ["Destek Vektörleri", "Hiperdüzleme en yakın veri noktaları"]
      ],
      explanation: "SVM'nin üç temel prensibi Hiperdüzlem, Marjin ve Destek Vektörleridir.",
      source: "SVM Slayt 5"
    },
    {
      id: "svm-q10",
      unit: "svm",
      type: "mcq",
      difficulty: 1,
      q: "Hiperdüzlem (hyperplane) nedir?",
      options: [
        "Verideki tüm noktaların ortalamasıdır",
        "n boyutlu bir uzayı ikiye bölen geometrik bir düzlemdir",
        "Verinin standart sapmasıdır",
        "İki kümenin birleşimidir"
      ],
      answer: 1,
      explanation: "Hiperdüzlem, n boyutlu bir veri uzayını ikiye bölen geometrik bir düzlemdir ve sınıfları ayıran karar sınırı olarak işlev görür.",
      source: "SVM Slayt 6"
    },
    {
      id: "svm-q11",
      unit: "svm",
      type: "mcq",
      difficulty: 2,
      q: "İki boyutlu (2B) bir uzayda hiperdüzlem ne şeklini alır?",
      options: [
        "Bir nokta",
        "Bir çizgi",
        "Bir düzlem",
        "Bir küre"
      ],
      answer: 1,
      explanation: "2 boyutlu uzayda hiperdüzlem bir çizgi, 3 boyutlu uzayda ise bir düzlem olur.",
      source: "SVM Slayt 7"
    },
    {
      id: "svm-q12",
      unit: "svm",
      type: "mcq",
      difficulty: 2,
      q: "Üç boyutlu (3B) bir uzayda hiperdüzlem ne şeklini alır?",
      options: [
        "Bir çizgi",
        "Bir nokta",
        "Bir düzlem",
        "Bir eğri"
      ],
      answer: 2,
      explanation: "3 boyutlu bir uzayda hiperdüzlem bir düzlem olur (2 boyutta ise çizgidir).",
      source: "SVM Slayt 7"
    },
    {
      id: "svm-q13",
      unit: "svm",
      type: "fill",
      difficulty: 2,
      q: "Genel olarak n boyutlu bir uzayda hiperdüzlem ______ boyutludur.",
      answer: ["(n-1)", "n-1", "n - 1", "n-1 boyutlu"],
      explanation: "Genel kural: n boyutlu bir uzayda hiperdüzlem (n-1) boyutludur. Örneğin 2B'de çizgi (1B), 3B'de düzlem (2B).",
      source: "SVM Slayt 7"
    },
    {
      id: "svm-q14",
      unit: "svm",
      type: "mcq",
      difficulty: 2,
      q: "5 boyutlu bir uzayda hiperdüzlem kaç boyutludur?",
      options: [
        "5 boyutlu",
        "6 boyutlu",
        "4 boyutlu",
        "1 boyutlu"
      ],
      answer: 2,
      explanation: "n boyutlu uzayda hiperdüzlem (n-1) boyutludur. 5 boyutta hiperdüzlem 5-1 = 4 boyutludur.",
      source: "SVM Slayt 7"
    },
    {
      id: "svm-q15",
      unit: "svm",
      type: "truefalse",
      difficulty: 1,
      q: "Hiperdüzlem, veri noktalarının sınıflarını ayıran sınır (karar sınırı) olarak işlev görür.",
      answer: true,
      explanation: "Doğru. SVM, sınıflar arasında optimal ayrım sağlayan hiperdüzlemi bulur ve bu hiperdüzlem karar sınırı olarak çalışır.",
      source: "SVM Slayt 7-8"
    },
    {
      id: "svm-q16",
      unit: "svm",
      type: "fill",
      difficulty: 2,
      q: "Bir hiperdüzlemin matematiksel denklemi: w·x + b = ______",
      answer: ["0", "sıfır"],
      explanation: "Hiperdüzlemin denklemi w·x + b = 0 şeklindedir; bu denklem tüm veri noktaları için bir karar sınırı oluşturur.",
      source: "SVM Slayt 8"
    },
    {
      id: "svm-q17",
      unit: "svm",
      type: "match",
      difficulty: 2,
      q: "w·x + b = 0 denklemindeki terimleri görevleriyle eşleştirin.",
      pairs: [
        ["w (ağırlık vektörü)", "Düzlemin yönünü belirler"],
        ["x (girdi vektörü)", "Bir veri noktası"],
        ["b (bias)", "Düzlemin orijine olan uzaklığını ayarlar"]
      ],
      explanation: "w yönü, x veri noktasını, b ise düzlemin orijine uzaklığını belirler.",
      source: "SVM Slayt 8"
    },
    {
      id: "svm-q18",
      unit: "svm",
      type: "mcq",
      difficulty: 2,
      q: "Hiperdüzlem denkleminde 'w' (ağırlık vektörü) neyi belirler?",
      options: [
        "Düzlemin orijine uzaklığını",
        "Düzlemin yönünü",
        "Veri noktalarının sayısını",
        "Marjinin genişliğini"
      ],
      answer: 1,
      explanation: "w ağırlık vektörü düzlemin yönünü belirler. Orijine uzaklığı ayarlayan ise b (bias) sabitidir.",
      source: "SVM Slayt 8"
    },
    {
      id: "svm-q19",
      unit: "svm",
      type: "mcq",
      difficulty: 2,
      q: "Hiperdüzlem denkleminde 'b' (bias) neyi ayarlar?",
      options: [
        "Düzlemin yönünü",
        "Veri noktalarının renklerini",
        "Düzlemin orijine olan uzaklığını",
        "Destek vektörlerinin sayısını"
      ],
      answer: 2,
      explanation: "b (bias), düzlemin orijine olan uzaklığını ayarlayan sabittir. Düzlemin yönünü ise w belirler.",
      source: "SVM Slayt 8"
    },
    {
      id: "svm-q20",
      unit: "svm",
      type: "mcq",
      difficulty: 1,
      q: "Marjin (margin) nedir?",
      options: [
        "Veri setindeki toplam nokta sayısı",
        "Hiperdüzleme en yakın veri noktalarına olan dik mesafe",
        "İki sınıfın merkezleri arasındaki mesafe",
        "Modelin eğitim süresi"
      ],
      answer: 1,
      explanation: "Marjin, SVM'in bulduğu hiperdüzleme en yakın veri noktalarına olan dik mesafedir; yani sınıflar ile hiperdüzlem arasındaki boşluktur.",
      source: "SVM Slayt 10"
    },
    {
      id: "svm-q21",
      unit: "svm",
      type: "truefalse",
      difficulty: 1,
      q: "SVM, marjini minimize etmeye çalışır.",
      answer: false,
      explanation: "Yanlış. SVM marjini MAKSİMİZE etmeye çalışır; iki sınıfa ait destek vektörleri arasındaki en geniş şeridi oluşturmayı amaçlar.",
      source: "SVM Slayt 9"
    },
    {
      id: "svm-q22",
      unit: "svm",
      type: "mcq",
      difficulty: 2,
      q: "Marjinin büyük olması neden tercih edilir?",
      options: [
        "Eğitim süresini kısalttığı için",
        "Genelleme yeteneğini artırdığı ve gürültüden etkilenmeyi azalttığı için",
        "Destek vektörü sayısını artırdığı için",
        "Modeli daha karmaşık yaptığı için"
      ],
      answer: 1,
      explanation: "Marjin ne kadar büyükse genelleme yeteneği o kadar iyi olur, çünkü hiperdüzlem rastgele gürültüden daha az etkilenir.",
      source: "SVM Slayt 9"
    },
    {
      id: "svm-q23",
      unit: "svm",
      type: "fill",
      difficulty: 1,
      q: "Marjin, sınıflar ile ______ arasındaki boşluktur.",
      answer: ["hiperdüzlem", "hiperdüzlem (karar sınırı)", "karar sınırı"],
      explanation: "Marjin, sınıflar ile hiperdüzlem (karar sınırı) arasındaki boşluk olarak tanımlanır.",
      source: "SVM Slayt 10"
    },
    {
      id: "svm-q24",
      unit: "svm",
      type: "categorize",
      difficulty: 2,
      q: "Aşağıdaki ifadeleri Hard Marjin ve Soft Marjin kategorilerine ayırın.",
      categories: ["Hard Marjin", "Soft Marjin"],
      items: [
        { text: "Hiçbir yanlış sınıflandırmaya izin verilmez", cat: "Hard Marjin" },
        { text: "Tüm noktalar tam doğru sınıflandırılır", cat: "Hard Marjin" },
        { text: "Bazı yanlış sınıflandırmalara izin verir", cat: "Soft Marjin" },
        { text: "Gürültüye ve ayrılamayan noktalara dayanıklıdır", cat: "Soft Marjin" },
        { text: "Daha gerçekçi senaryolarda kullanılır", cat: "Soft Marjin" }
      ],
      explanation: "Hard marjin tam ayrım yapar, hiç hata kabul etmez; soft marjin bazı hatalara izin verir ve gürültüye karşı dayanıklı olduğundan gerçek hayatta daha çok kullanılır.",
      source: "SVM Slayt 11"
    },
    {
      id: "svm-q25",
      unit: "svm",
      type: "truefalse",
      difficulty: 2,
      q: "Soft marjin, veri setindeki gürültüye veya ayrılabilir olmayan noktalara karşı daha dayanıklıdır.",
      answer: true,
      explanation: "Doğru. Soft marjin bazı yanlış sınıflandırmalara izin verdiği için gürültüye ve ayrılamayan noktalara karşı hard marjinden daha dayanıklıdır.",
      source: "SVM Slayt 11"
    },
    {
      id: "svm-q26",
      unit: "svm",
      type: "mcq",
      difficulty: 2,
      q: "Hangi marjin türü hiçbir yanlış sınıflandırmaya izin vermez ve tam doğru ayrım gerektirir?",
      options: [
        "Soft marjin",
        "Hard marjin",
        "Geniş marjin",
        "Esnek marjin"
      ],
      answer: 1,
      explanation: "Hard marjin, veri noktalarının tam olarak doğru sınıflandırıldığı ve hiçbir yanlış sınıflandırma yapılmadığı durumu ifade eder.",
      source: "SVM Slayt 11"
    },
    {
      id: "svm-q27",
      unit: "svm",
      type: "mcq",
      difficulty: 1,
      q: "Destek vektörleri (support vectors) nelerdir?",
      options: [
        "Veri setinin en uzak noktaları",
        "Hiperdüzleme en yakın olan veri noktaları",
        "Sınıf merkezlerindeki noktalar",
        "Yanlış sınıflandırılan tüm noktalar"
      ],
      answer: 1,
      explanation: "Destek vektörleri, hiperdüzleme (karar sınırına) en yakın olan veri noktalarıdır; marjini belirler ve hiperdüzlemi konumlandırırlar.",
      source: "SVM Slayt 12"
    },
    {
      id: "svm-q28",
      unit: "svm",
      type: "truefalse",
      difficulty: 2,
      q: "Destek vektörleri dışındaki geri kalan veriler, modelin karar sınırını doğrudan etkilemez.",
      answer: true,
      explanation: "Doğru. Yalnızca destek vektörleri marjini ve hiperdüzlemi belirler; geri kalan veriler karar sınırını doğrudan etkilemez.",
      source: "SVM Slayt 12"
    },
    {
      id: "svm-q29",
      unit: "svm",
      type: "mcq",
      difficulty: 2,
      q: "Destek vektörlerinin SVM modelindeki rolü nedir?",
      options: [
        "Verinin ortalamasını hesaplamak",
        "Marjini belirlemek ve hiperdüzlemi konumlandırmak",
        "Eğitim verisini rastgele bölmek",
        "Kayıp fonksiyonunu sıfırlamak"
      ],
      answer: 1,
      explanation: "Destek vektörleri, marjini belirleyen ve hiperdüzlemi konumlandıran örneklerdir.",
      source: "SVM Slayt 12"
    },
    {
      id: "svm-q30",
      unit: "svm",
      type: "mcq",
      difficulty: 1,
      q: "SVM'nin karar sınırlarını ve marjinal hata toleransını ayarlamak için kullanılan en önemli hiperparametre hangisidir?",
      options: [
        "Öğrenme oranı (learning rate)",
        "C değeri",
        "Epoch sayısı",
        "Batch boyutu"
      ],
      answer: 1,
      explanation: "C değeri, SVM'nin karar sınırlarını ve marjinal hata toleransını ayarlamak için kullanılan en önemli hiperparametredir.",
      source: "SVM Slayt 14"
    },
    {
      id: "svm-q31",
      unit: "svm",
      type: "truefalse",
      difficulty: 2,
      q: "C değeri ne kadar büyükse marjin o kadar dar olur.",
      answer: true,
      explanation: "Doğru. C büyüdükçe marjin daralır; model eğitim verisine daha çok uyar ve overfit riski artar.",
      source: "SVM Slayt 15"
    },
    {
      id: "svm-q32",
      unit: "svm",
      type: "mcq",
      difficulty: 2,
      q: "Bir SVM modeli aşırı uyum (overfitting) gösteriyorsa C değeri için ne yapılmalıdır?",
      options: [
        "C artırılmalıdır",
        "C azaltılmalıdır",
        "C sabit tutulmalıdır",
        "C sıfırlanmalıdır"
      ],
      answer: 1,
      explanation: "Model overfit olursa C'yi azaltmak gerekir. Küçük C, marjini genişletir, esnekliği artırır ve aşırı uyum riskini düşürür.",
      source: "SVM Slayt 15-16"
    },
    {
      id: "svm-q33",
      unit: "svm",
      type: "categorize",
      difficulty: 3,
      q: "Aşağıdaki etkileri büyük C ve küçük C değerlerine göre kategorize edin.",
      categories: ["Büyük C", "Küçük C"],
      items: [
        { text: "Dar marjin", cat: "Büyük C" },
        { text: "Eğitim verisine fazla uyum (overfit riski)", cat: "Büyük C" },
        { text: "Düşük marjinal hata toleransı", cat: "Büyük C" },
        { text: "Geniş marjin", cat: "Küçük C" },
        { text: "Daha fazla esneklik, overfit riski azalır", cat: "Küçük C" },
        { text: "Eğitim verisine daha az uyum", cat: "Küçük C" }
      ],
      explanation: "Büyük C: dar marjin, eğitim verisine çok uyum, az hata toleransı, overfit riski. Küçük C: geniş marjin, esneklik, yüksek hata toleransı, az uyum.",
      source: "SVM Slayt 15-16"
    },
    {
      id: "svm-q34",
      unit: "svm",
      type: "mcq",
      difficulty: 3,
      q: "Daha yüksek C değerleri SVM modelinin marjinal hata toleransını nasıl etkiler?",
      options: [
        "Hata toleransını artırır, esnekliği yükseltir",
        "Hata toleransını azaltır, eğitim verisine daha fazla uyum sağlar",
        "Hata toleransını etkilemez",
        "Modeli tamamen rastgele yapar"
      ],
      answer: 1,
      explanation: "Daha yüksek C değerleri marjinal hata toleransını azaltır, bu da modelin eğitim verisine daha fazla uymasını sağlar ancak overfitting eğilimini artırır.",
      source: "SVM Slayt 16"
    },
    {
      id: "svm-q35",
      unit: "svm",
      type: "mcq",
      difficulty: 3,
      q: "Daha düşük C değerleri kullanmanın olası bir dezavantajı nedir?",
      options: [
        "Modelin aşırı uyum göstermesi",
        "Marjinin daralması",
        "Modelin eğitim verisine daha az uyması",
        "Hata toleransının azalması"
      ],
      answer: 2,
      explanation: "Düşük C değerleri esnekliği ve hata toleransını artırır, overfit riskini azaltır; ancak modelin eğitim verisine daha az uymasına yol açabilir.",
      source: "SVM Slayt 16"
    },
    {
      id: "svm-q36",
      unit: "svm",
      type: "fill",
      difficulty: 2,
      q: "C değeri, SVM'nin ______ hata toleransını kontrol eder.",
      answer: ["marjinal", "marjinal hata", "margin"],
      explanation: "Veri setleri tam ayrılamadığında SVM marjinal hata toleransını kabul eder; C değeri bu toleransı kontrol eder.",
      source: "SVM Slayt 16"
    },
    {
      id: "svm-q37",
      unit: "svm",
      type: "mcq",
      difficulty: 1,
      q: "Kernel (çekirdek) fonksiyonu ne zaman devreye girer?",
      options: [
        "Veriler doğrusal olarak ayrılabildiğinde",
        "Veriler doğrusal olarak ayrılamadığında",
        "Sadece regresyon problemlerinde",
        "Sadece etiketsiz verilerde"
      ],
      answer: 1,
      explanation: "Veriler her zaman doğrusal ayrılabilir değildir; bu durumlarda kernel fonksiyonu devreye girer.",
      source: "SVM Slayt 17"
    },
    {
      id: "svm-q38",
      unit: "svm",
      type: "mcq",
      difficulty: 2,
      q: "Kernel fonksiyonu veriyi nasıl ayrılabilir hale getirir?",
      options: [
        "Veriyi daha düşük boyuta indirger",
        "Veriyi daha yüksek boyutlara taşıyarak orada doğrusal hale getirir",
        "Veriyi rastgele karıştırır",
        "Gürültülü noktaları siler"
      ],
      answer: 1,
      explanation: "Kernel, veriyi daha yüksek boyutlara dönüştürerek (kernel trick) orada doğrusal olarak ayrılabilir hale getirir.",
      source: "SVM Slayt 17, 22"
    },
    {
      id: "svm-q39",
      unit: "svm",
      type: "truefalse",
      difficulty: 2,
      q: "Çekirdek (kernel) trick sayesinde, basit bir çizgi yerine eğri veya düzlem kullanarak sınıflar ayrılabilir.",
      answer: true,
      explanation: "Doğru. Çekirdek fonksiyonları özellikleri daha yüksek boyutlu uzaya taşıyarak çizgi yerine eğri/düzlem ile sınıfların ayrılmasını mümkün kılar.",
      source: "SVM Slayt 22"
    },
    {
      id: "svm-q40",
      unit: "svm",
      type: "fill",
      difficulty: 2,
      q: "Veriyi daha yüksek boyuta taşıyarak doğrusal ayrılabilir hale getiren tekniğe ______ trick denir.",
      answer: ["kernel", "çekirdek", "kernel (çekirdek)", "kernel trick"],
      explanation: "Bu tekniğin adı kernel (çekirdek) trick'tir; veriyi yüksek boyuta taşıyıp orada doğrusal ayrım sağlar.",
      source: "SVM Slayt 22"
    },
    {
      id: "svm-q41",
      unit: "svm",
      type: "mcq",
      difficulty: 1,
      q: "Elma/portakal örneğinde meyveleri ayırmak için kullanılan iki özellik (feature) nedir?",
      options: [
        "Boy ve hacim",
        "Ağırlık ve renk",
        "Fiyat ve marka",
        "Tat ve koku"
      ],
      answer: 1,
      explanation: "Örnekte her meyvenin iki özelliği ölçülür: ağırlık ve renk. Bunlar 2 boyutlu düzlemde görselleştirilir.",
      source: "SVM Slayt 18-19"
    },
    {
      id: "svm-q42",
      unit: "svm",
      type: "order",
      difficulty: 3,
      q: "Elma/portakal örneğindeki SVM model adımlarını doğru sıraya koyun.",
      items: [
        "Veri Toplama ve Görselleştirme",
        "Modelin Eğitimi (hiperdüzlemi bulma)",
        "Optimizasyon ve Marjin (marjini maksimize etme)",
        "Çekirdek Trick (gerekirse yüksek boyuta taşıma)",
        "Modelin Test Edilmesi ve Tahminler",
        "Sonuç ve İyileştirme"
      ],
      explanation: "Örnekteki sıra: 1) Veri toplama/görselleştirme, 2) Eğitim, 3) Optimizasyon ve marjin, 4) Çekirdek trick, 5) Test ve tahmin, 6) Sonuç ve iyileştirme.",
      source: "SVM Slayt 19-24"
    },
    {
      id: "svm-q43",
      unit: "svm",
      type: "truefalse",
      difficulty: 2,
      q: "Elma/portakal örneğinde SVM, iki sınıfı maksimum marjinle ayıracak bir hiperdüzlem (çizgi) bulmaya çalışır ve en yakın örnekler destek vektörü olur.",
      answer: true,
      explanation: "Doğru. SVM, her iki kategorinin en yakın örneklerine maksimum marjin ile ayıracak çizgiyi seçer; bu en yakın örnekler destek vektörleridir.",
      source: "SVM Slayt 20"
    },
    {
      id: "svm-q44",
      unit: "svm",
      type: "mcq",
      difficulty: 2,
      q: "Elma/portakal örneğinde model yeni bir meyveyi nasıl tahmin eder?",
      options: [
        "Meyvenin fiyatına bakarak",
        "Meyvenin hangi marjinin içinde kaldığına bakarak",
        "Rastgele seçim yaparak",
        "Eğitim verisini tekrar ezberleyerek"
      ],
      answer: 1,
      explanation: "Model, yeni meyvenin özelliklerini alır ve bu meyvenin hangi marjinin/sınıfın içinde kaldığına bakarak elma mı portakal mı olduğunu tahmin eder.",
      source: "SVM Slayt 23"
    },
    {
      id: "svm-q45",
      unit: "svm",
      type: "mcq",
      difficulty: 2,
      q: "Elma/portakal örneğinde model yeterince iyi performans göstermezse hangi iyileştirmeler yapılabilir?",
      options: [
        "Veriyi tamamen silmek",
        "Hiperparametre ayarlama ve çekirdek seçimi",
        "Sadece daha fazla epoch eklemek",
        "Sınıf etiketlerini değiştirmek"
      ],
      answer: 1,
      explanation: "Model yetersizse hiperparametre ayarlama (ör. C) ve çekirdek seçimi gibi iyileştirmeler yapılabilir.",
      source: "SVM Slayt 24"
    },
    {
      id: "svm-q46",
      unit: "svm",
      type: "categorize",
      difficulty: 3,
      q: "Aşağıdaki ifadeleri Klasik Yaklaşım ve SVM kategorilerine ayırın.",
      categories: ["Klasik Yaklaşım", "SVM"],
      items: [
        { text: "Lineer parametreli fonksiyonlarla modelleme", cat: "Klasik Yaklaşım" },
        { text: "Gauss/normal olasılık dağılımı kullanır", cat: "Klasik Yaklaşım" },
        { text: "Parametre tahmini maksimum benzerlik yöntemiyle", cat: "Klasik Yaklaşım" },
        { text: "Tahmini hata sabit tutulur, eğitim hatası minimize edilir", cat: "Klasik Yaklaşım" },
        { text: "Parametreler önceden tanımlı değildir, eğitim verisine göre değişir", cat: "SVM" },
        { text: "Eğitim hatası sabit tutulur, güven aralığı minimize edilir", cat: "SVM" }
      ],
      explanation: "Klasik: lineer/Gauss, maksimum benzerlik, tahmini hata sabit-eğitim hatası minimize. SVM: yüksek boyutlu, parametreler eğitim verisine göre değişir, eğitim hatası sabit-güven aralığı minimize.",
      source: "SVM Slayt 25-26"
    },
    {
      id: "svm-q47",
      unit: "svm",
      type: "mcq",
      difficulty: 3,
      q: "SVM ile klasik yaklaşımın hata minimizasyonundaki temel farkı nedir?",
      options: [
        "Her ikisi de eğitim hatasını minimize eder",
        "Klasik yaklaşım eğitim hatasını minimize eder; SVM ise eğitim hatasını sabit tutup güven aralığını minimize eder",
        "SVM hiç hata kullanmaz",
        "Klasik yaklaşım güven aralığını minimize eder"
      ],
      answer: 1,
      explanation: "Klasik yaklaşımda tahmini hata sabit tutulup eğitim hatası minimize edilir; SVM'de ise eğitim hatası sabit tutulup güven aralığı minimize edilir.",
      source: "SVM Slayt 25-26"
    },
    {
      id: "svm-q48",
      unit: "svm",
      type: "truefalse",
      difficulty: 2,
      q: "Klasik yaklaşımda model yapısı (ör. polinom derecesi, nöron sayısı, kural sayısı) önceden seçilirken; SVM'de parametreler önceden tanımlı değildir ve eğitim verisine göre değişir.",
      answer: true,
      explanation: "Doğru. Klasikte model yapısı önceden seçilir; SVM'de parametreler önceden tanımlı değildir ve sayısı eğitim verisine göre değişir.",
      source: "SVM Slayt 25-26"
    },
    {
      id: "svm-q49",
      unit: "svm",
      type: "mcq",
      difficulty: 2,
      q: "SVM'nin convex (dışbükey) optimizasyona dayanmasının sağladığı en önemli avantaj nedir?",
      options: [
        "Eğitim süresinin her zaman sıfır olması",
        "Lokal minima probleminin bulunmaması (tek global minimum)",
        "Kernel seçimine gerek kalmaması",
        "Etiketsiz veriyle çalışabilmesi"
      ],
      answer: 1,
      explanation: "SVM convex optimizasyon problemine (quadratic kriter, lineer kısıtlar) dayanır; bu nedenle lokal minima problemi yoktur.",
      source: "SVM Slayt 27"
    },
    {
      id: "svm-q50",
      unit: "svm",
      type: "categorize",
      difficulty: 2,
      q: "Aşağıdakileri SVM'nin Avantajı mı yoksa Kısıtı/Dezavantajı mı olduğuna göre ayırın.",
      categories: ["Avantaj", "Kısıt / Dezavantaj"],
      items: [
        { text: "Lokal minima problemi yoktur (convex optimizasyon)", cat: "Avantaj" },
        { text: "Çok büyük veri setlerinde başarılıdır", cat: "Avantaj" },
        { text: "Kernel ile lineer olmayan sınıflamada başarılıdır", cat: "Avantaj" },
        { text: "Kernel fonksiyonunun seçimi zordur", cat: "Kısıt / Dezavantaj" },
        { text: "Çok sınıflı optimal tasarım hâlâ araştırma konusudur", cat: "Kısıt / Dezavantaj" },
        { text: "Test hızı için az sayıda destek vektörü seçilmesi gerekir", cat: "Kısıt / Dezavantaj" }
      ],
      explanation: "Avantajlar: convex optimizasyon, büyük veri başarısı, kernel ile doğrusal olmayan sınıflama. Kısıtlar: kernel seçimi zorluğu, test hızı için az destek vektörü, çok sınıflı optimal tasarımın araştırma konusu olması.",
      source: "SVM Slayt 27-28"
    },
    {
      id: "svm-q51",
      unit: "svm",
      type: "mcq",
      difficulty: 2,
      q: "Aşağıdakilerden hangisi SVM'nin bir kısıtı/dezavantajıdır?",
      options: [
        "Lokal minima probleminin olması",
        "Kernel fonksiyonunun seçiminin zor olması",
        "Sadece küçük veri setlerinde çalışması",
        "Regresyonda kullanılamaması"
      ],
      answer: 1,
      explanation: "SVM'nin kısıtlarından biri kernel fonksiyonunun seçiminin zor olmasıdır. Ayrıca test hızı için az destek vektörü seçimi ve çok sınıflı optimal tasarım da kısıtlar arasındadır.",
      source: "SVM Slayt 28"
    },
    {
      id: "svm-q52",
      unit: "svm",
      type: "truefalse",
      difficulty: 2,
      q: "Büyük eğitim verileri olsa bile, test aşamasında hızı düşürmemek için az sayıda destek vektörü seçilmesi SVM'nin bir kısıtıdır.",
      answer: true,
      explanation: "Doğru. SVM'nin kısıtlarından biri, test aşamasında hızı düşürmemek için az sayıda destek vektörünün seçilmesi gerekliliğidir.",
      source: "SVM Slayt 28"
    }
  ]
};
