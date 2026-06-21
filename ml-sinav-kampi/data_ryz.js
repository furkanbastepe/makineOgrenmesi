window.QBANK = window.QBANK || {};
window.QBANK["ryz"] = {
  title: "Makine Öğrenmesi Temelleri (RYZ108)",
  concepts: [
    {
      id: "ryz-c01",
      unit: "temeller",
      title: "Makine Öğrenmesi (ML) Nedir?",
      body: [
        "Verilerden otomatik öğrenen, insan müdahalesi olmadan tahmin/karar üreten algoritmalar geliştiren yapay zeka dalı.",
        "Açıkça programlanmadan, verilerdeki örüntüleri (pattern) tanıyarak kendini geliştirir.",
        "Bilgisayar deneyim kazandıkça performansı artar ve daha doğru tahmin yapar."
      ],
      source: "RYZ108 Slayt 2"
    },
    {
      id: "ryz-c02",
      unit: "temeller",
      title: "Öğrenme Türleri (3 Ana Tür)",
      body: [
        "Denetimli (Supervised): Etiketli veri; girdi-çıktı ilişkisi belirtilir.",
        "Denetimsiz (Unsupervised): Etiketsiz veri; yapı/desen öğrenilir (kümeleme, ilişkilendirme).",
        "Pekiştirmeli (Reinforcement): Ajan deneme-yanılma ile maksimum ödülü hedefler."
      ],
      source: "RYZ108 Slayt 4, 24, 29"
    },
    {
      id: "ryz-c03",
      unit: "temeller",
      title: "Sınıflandırma vs Regresyon",
      body: [
        "Sınıflandırma (classification): Çıktı niteldir (kategorik); örneği bir sınıfa atar.",
        "Regresyon (regression): Çıktı süreklidir (sayısal); bağımlı-bağımsız değişken ilişkisini tahmin eder.",
        "Sınıflandırma metrikleri: Accuracy, Precision, Recall, F1, AUC-ROC.",
        "Regresyon metrikleri: MSE, RMSE, MAE, R²."
      ],
      source: "RYZ108 Slayt 5, 19"
    },
    {
      id: "ryz-c04",
      unit: "temeller",
      title: "Sınıflandırma Fonksiyonu f: X→Y",
      body: [
        "Amaç X girdisine karşı Y etiket (label) değerini üretmek.",
        "En az hata ile sınıflandırma yapacak bir f: X→Y fonksiyonu tanımlanır.",
        "Örnekler: nota göre geçti/kaldı, hava durumuna göre şemsiye al/alma."
      ],
      source: "RYZ108 Slayt 6, 7, 8"
    },
    {
      id: "ryz-c05",
      unit: "metrikler",
      title: "Confusion Matrix Dört Değer (TP/TN/FP/FN)",
      body: [
        "TP (True Positive): Doğruya doğru demek — DOĞRU.",
        "TN (True Negative): Yanlışa yanlış demek — DOĞRU.",
        "FP (False Positive): Doğruya yanlış demek — YANLIŞ.",
        "FN (False Negative): Yanlışa doğru demek — YANLIŞ."
      ],
      source: "RYZ108 Slayt 9"
    },
    {
      id: "ryz-c06",
      unit: "metrikler",
      title: "Doğruluk ve Hata Oranı",
      body: [
        "Doğruluk (Accuracy): Doğruların toplama oranı; esas köşegen / toplam.",
        "Hata Oranı (Error Rate): Yanlışların toplama oranı; yedek köşegen / toplam.",
        "Hata Oranı = 1 - Doğruluk."
      ],
      formula: "Doğruluk=(TN+TP)/TOPLAM ; Hata Oranı=(FN+FP)/TOPLAM=1-Doğruluk",
      source: "RYZ108 Slayt 10, 11"
    },
    {
      id: "ryz-c07",
      unit: "metrikler",
      title: "Hassasiyet, Seçicilik, FPR, Kesinlik",
      body: [
        "Hassasiyet/Recall (Sensitivity) = TP / Gerçek Varlar = TP/(TP+FN).",
        "Seçicilik (Specificity) = TN / Gerçek Yoklar = TN/(TN+FP).",
        "Yanlış Pozitif Oranı (FPR) = FP / Gerçek Yoklar = FP/(TN+FP).",
        "Kesinlik (Precision) = TP / Toplam Var Tahmini = TP/(FP+TP)."
      ],
      formula: "Recall=TP/(TP+FN); Specificity=TN/(TN+FP); FPR=FP/(TN+FP); Precision=TP/(FP+TP)",
      source: "RYZ108 Slayt 12, 13, 14, 15"
    },
    {
      id: "ryz-c08",
      unit: "metrikler",
      title: "Örnek Confusion Matrix Sayıları",
      body: [
        "TP=200, TN=100, FP=20, FN=10, TOPLAM=330.",
        "Doğruluk=300/330≈0,91 ; Hata Oranı=30/330≈0,09.",
        "Recall=200/210≈0,95 ; Specificity=100/120≈0,83.",
        "FPR=20/120≈0,17 ; Precision=200/220≈0,91."
      ],
      source: "RYZ108 Slayt 10-15"
    },
    {
      id: "ryz-c09",
      unit: "metrikler",
      title: "ROC Eğrisi ve AUC",
      body: [
        "ROC: True Positive Rate'e karşı False Positive Rate grafiği; farklı sınıflar için olasılık eğrisi.",
        "AUC: ROC eğrisinin altında kalan alan; modelin ayırt ediciliğini temsil eder.",
        "Alan büyükse model başarılı, küçükse başarısız.",
        "En kötü AUC = 0,5 ; en iyi AUC = 1,0."
      ],
      source: "RYZ108 Slayt 16, 17, 18"
    },
    {
      id: "ryz-c10",
      unit: "metrikler",
      title: "Regresyon Metrikleri (MSE/RMSE/MAE/R²)",
      body: [
        "MSE: Gerçek-tahmin farklarının karelerinin ortalaması.",
        "RMSE: MSE'nin karekökü; ölçeği geri getirir.",
        "MAE: Farkların mutlak değerinin ortalaması.",
        "R²: Bağımsız değişkenlerin hedefi açıklama oranı; 1'e yakınsa iyi."
      ],
      formula: "MSE=ort((y-ŷ)²); RMSE=√MSE; MAE=ort(|y-ŷ|)",
      source: "RYZ108 Slayt 20, 21, 22, 23"
    },
    {
      id: "ryz-c11",
      unit: "metrikler",
      title: "Kümeleme Metrikleri",
      body: [
        "Silhouette (Siluet): Bir noktanın kendi kümesine benzerliği vs komşu kümeler; -1 ile 1 arası.",
        "Yüksek silhouette = nokta kendi kümesiyle iyi eşleşmiş.",
        "Davies-Bouldin Index: Küme merkezleri uzaklığını küme içi benzerlikle karşılaştırır; DÜŞÜK değer iyi (homojen, ayrık kümeler)."
      ],
      source: "RYZ108 Slayt 27"
    },
    {
      id: "ryz-c12",
      unit: "temeller",
      title: "Aşırı Öğrenme (Overfitting)",
      body: [
        "Modelin eğitim veri setine çok fazla uyum sağlaması.",
        "Yeni (görülmemiş) verilere genelleme yeteneğini azaltır.",
        "İyi model genelleme yapabilen modeldir."
      ],
      source: "RYZ108 Slayt 31"
    },
    {
      id: "ryz-c13",
      unit: "veri",
      title: "EDA Veri Hazırlama Adımları",
      body: [
        "1. Veri Toplama, 2. Veri Analizi, 3. Veri Temizleme.",
        "4. Veri Dönüştürme, 5. Özellik seçimi ve Veri Mühendisliği.",
        "6. Veri Setini Eğitim ve Test olarak Bölme.",
        "Veri kalitesi modelin başarısını doğrudan etkiler."
      ],
      source: "RYZ108 Slayt 32"
    },
    {
      id: "ryz-c14",
      unit: "veri",
      title: "Eksik Veri ve Aykırı Değer",
      body: [
        "Eksik veri: NaN, boş hücreler, anlamsız değerler; belirlenip düzeltilir/çıkarılır (Pandas kullanışlıdır).",
        "Aykırı değer (Outlier): istatistiksel analiz ve modeller için yanıltıcı olabilir.",
        "Aykırı değer istatistiksel yöntem veya görselleştirme ile tespit edilir, sonra işlenir/değiştirilir."
      ],
      source: "RYZ108 Slayt 33"
    },
    {
      id: "ryz-c15",
      unit: "veri",
      title: "Encoding ve Ölçeklendirme",
      body: [
        "Kategorik veri sayısala dönüştürülür: One-hot encoding veya Label encoding.",
        "Normalizasyon: Verileri 0-1 arasına yeniden ölçeklendirir.",
        "Standardizasyon: Ortalamayı 0, standart sapmayı 1 yaparak standart normal dağılıma dönüştürür.",
        "Amaç: özelliklerin aynı ölçekte olması, model performansını artırmak."
      ],
      source: "RYZ108 Slayt 34, 35"
    },
    {
      id: "ryz-c16",
      unit: "veri",
      title: "Doğrulama ve Çapraz Geçerlik",
      body: [
        "Doğrulama (Validation): Modelin genelleme performansını ayrı bir doğrulama setiyle değerlendirir.",
        "Çapraz Geçerlik: Veri ikiye bölünür — eğitim (train) ve test (sistemin hiç görmediği) set.",
        "Sistem eğitim setiyle öğrenir, başarı test seti üzerinde hesaplanır."
      ],
      source: "RYZ108 Slayt 36, 37"
    },
    {
      id: "ryz-c17",
      unit: "veri",
      title: "K-Parçalı (K-fold) Çapraz Doğrulama",
      body: [
        "Veri K adet kümeye ayrılır.",
        "Biri test, diğer K-1 küme birleştirilip eğitim için seçilir.",
        "İşlem kümeler değiştirilerek K kez tekrarlanır.",
        "Genel başarı: K adet başarı değerinin ortalaması."
      ],
      source: "RYZ108 Slayt 38"
    },
    {
      id: "ryz-c18",
      unit: "regresyon",
      title: "Doğrusal Regresyon",
      body: [
        "Bağımlı-bağımsız değişken ilişkisini doğrusal modeller.",
        "Öğrenilen kavramlar: b sabiti ve wᵢ ağırlıkları.",
        "b sabiti = beta (ß), intercept, bias; wᵢ = katsayı/coefficient/ağırlık.",
        "b ve wᵢ, gerçek-tahmin farklarının karelerinin toplamını/ortalamasını minimum yapacak şekilde seçilir."
      ],
      source: "RYZ108 Slayt 39, 40"
    },
    {
      id: "ryz-c19",
      unit: "regresyon",
      title: "Lojistik Regresyon ve Sigmoid",
      body: [
        "İsminde 'regresyon' geçse de bir SINIFLANDIRMA algoritmasıdır.",
        "Sınıflandırma için Sigmoid (Lojistik) Fonksiyonu kullanır; 'S' şeklinde eğri.",
        "Sigmoid verileri 0 ile 1 arasına sıkıştırır, böylece sınıflandırma yapılır."
      ],
      source: "RYZ108 Slayt 42"
    },
    {
      id: "ryz-c20",
      unit: "denetimsiz",
      title: "K-Means Kümeleme",
      body: [
        "Denetimsiz öğrenmenin en bilinen algoritmalarından; verileri benzerliklerine göre K kümeye ayırır.",
        "Adımlar: küme sayısı belirle → rastgele k merkez seç → uzaklık hesapla → en yakın merkeze ata → merkezleri yeniden hesapla → tekrar et.",
        "Hızlı, basit, büyük veri setlerinde etkili.",
        "Sınıflandırmadan farkı: K-Means'te sınıf bilgisi yoktur (etiket yok)."
      ],
      source: "RYZ108 Slayt 44, 45, 46"
    },
    {
      id: "ryz-c21",
      unit: "denetimsiz",
      title: "K Seçimi: Elbow vs Silhouette",
      body: [
        "Elbow metodu: Her K için noktaların merkeze uzaklıklarının kareleri toplamı hesaplanır; farkın azalmaya başladığı dirsek noktası en uygun K.",
        "Silhouette metodu: Her K için kümelerin farklılığına bakar, -1 ile 1 arası değer üretir; 1'e en yakın K en uygun."
      ],
      source: "RYZ108 Slayt 48, 49"
    },
    {
      id: "ryz-c22",
      unit: "denetimsiz",
      title: "Hiyerarşik Kümeleme (Agglomerative/Divisive)",
      body: [
        "Benzer nesneleri ağaç benzeri hiyerarşide kümelere ayırır; küme sayısı baştan verilmek zorunda değildir.",
        "Aşağıdan Yukarıya (Agglomerative): Her nokta ayrı küme başlar, en yakın ikisi birleştirilir, tek küme kalana kadar sürer.",
        "Yukarıdan Aşağıya (Divisive): Tüm noktalar tek küme başlar, benzer olmayanlar alt kümelere ayrılır.",
        "Küçük veri setlerinde ve ilişki görselleştirmede tercih edilir."
      ],
      source: "RYZ108 Slayt 50, 51, 52, 53"
    },
    {
      id: "ryz-c23",
      unit: "denetimsiz",
      title: "İlişkilendirme ve Apriori",
      body: [
        "İlişkilendirme: Veriler arası birlikteliği ortaya çıkarır (Birliktelik Kuralı Madenciliği / Association Rule Mining).",
        "En yaygın kullanım: pazar sepeti analizi (market basket analysis) — hangi ürünler birlikte alınır.",
        "Apriori: Birliktelik kuralları oluşturan en eski algoritmalardan; öğeler arası bağımlılığı hesaplar.",
        "Örnek: sepete filtre kahve eklenince kahve kupası tavsiye edilir."
      ],
      source: "RYZ108 Slayt 25, 54, 55"
    }
  ],
  questions: [
    {
      id: "ryz-q001",
      unit: "temeller",
      type: "mcq",
      difficulty: 1,
      q: "Makine öğrenmesi en doğru şekilde nasıl tanımlanır?",
      options: [
        "Her durum için elle yazılmış kuralları çalıştıran bir program",
        "Verilerden otomatik öğrenip insan müdahalesi olmadan tahmin/karar üreten algoritmalar geliştiren yapay zeka dalı",
        "Yalnızca veri tabanı sorgularını hızlandıran bir yöntem",
        "Sadece grafik çizen bir istatistik aracı"
      ],
      answer: 1,
      explanation: "ML, açıkça programlanmadan verilerdeki örüntüleri tanıyarak kendini geliştiren bir yapay zeka dalıdır.",
      source: "RYZ108 Slayt 2"
    },
    {
      id: "ryz-q002",
      unit: "temeller",
      type: "truefalse",
      difficulty: 1,
      q: "Makine öğrenmesi sistemleri açıkça programlanmadan, verilerdeki örüntüleri (pattern) tanıyarak kendilerini geliştirirler.",
      answer: true,
      explanation: "ML'nin temel özelliği örüntü tanıma yoluyla deneyimle gelişmektir.",
      source: "RYZ108 Slayt 2"
    },
    {
      id: "ryz-q003",
      unit: "temeller",
      type: "truefalse",
      difficulty: 1,
      q: "Makine öğrenmesinde bilgisayar deneyim kazandıkça performansını artırır ve daha doğru tahmin yapar.",
      answer: true,
      explanation: "Deneyimle (veriyle) performans artışı ML'nin tanımının bir parçasıdır.",
      source: "RYZ108 Slayt 2"
    },
    {
      id: "ryz-q004",
      unit: "temeller",
      type: "fill",
      difficulty: 1,
      q: "Verilerdeki tekrar eden yapıları ifade eden, ML'nin tanıyarak öğrendiği şeye ne denir (İngilizce terim)?",
      answer: ["pattern", "örüntü", "oruntu", "patern"],
      explanation: "ML, verilerdeki örüntüleri (pattern) tanıyarak öğrenir.",
      source: "RYZ108 Slayt 2"
    },
    {
      id: "ryz-q005",
      unit: "temeller",
      type: "categorize",
      difficulty: 2,
      q: "Aşağıdaki kavramları ait oldukları öğrenme türüne göre sınıflandırın.",
      categories: ["Denetimli", "Denetimsiz", "Pekiştirmeli"],
      items: [
        { text: "Etiketli veriyle eğitim", cat: "Denetimli" },
        { text: "Sınıflandırma", cat: "Denetimli" },
        { text: "Doğrusal Regresyon", cat: "Denetimli" },
        { text: "Kümeleme (K-Means)", cat: "Denetimsiz" },
        { text: "İlişkilendirme (Apriori)", cat: "Denetimsiz" },
        { text: "Etiketsiz veriyle eğitim", cat: "Denetimsiz" },
        { text: "Ajanın ödül için deneme-yanılması", cat: "Pekiştirmeli" },
        { text: "Q-Learning", cat: "Pekiştirmeli" }
      ],
      explanation: "Denetimli=etiketli, Denetimsiz=etiketsiz/yapı keşfi, Pekiştirmeli=ödül temelli deneme-yanılma.",
      source: "RYZ108 Slayt 4, 24, 29, 3"
    },
    {
      id: "ryz-q006",
      unit: "temeller",
      type: "mcq",
      difficulty: 1,
      q: "Denetimli öğrenme (Supervised Learning) neye dayanır?",
      options: [
        "Etiketlenmemiş veri kümesine",
        "Etiketlenmiş veri kümesine; girdi-çıktı ilişkisi belirtilir",
        "Yalnızca ödül sinyaline",
        "Sadece veri görselleştirmeye"
      ],
      answer: 1,
      explanation: "Denetimli öğrenmede etiketli veri vardır ve girdi ile çıktı arasındaki ilişki belirtilir.",
      source: "RYZ108 Slayt 4"
    },
    {
      id: "ryz-q007",
      unit: "temeller",
      type: "mcq",
      difficulty: 1,
      q: "Denetimsiz öğrenme (Unsupervised Learning) neye dayanır?",
      options: [
        "Etiketlenmiş veri kümesine",
        "Etiketlenmemiş veri kümesine; yapı ve desenleri öğrenir",
        "Ödül-ceza mekanizmasına",
        "Önceden tanımlı sınıf etiketlerine"
      ],
      answer: 1,
      explanation: "Denetimsiz öğrenme etiketsiz veride yapıları/desenleri öğrenir (kümeleme, ilişkilendirme).",
      source: "RYZ108 Slayt 24"
    },
    {
      id: "ryz-q008",
      unit: "temeller",
      type: "mcq",
      difficulty: 1,
      q: "Pekiştirmeli (takviyeli) öğrenmenin amacı nedir?",
      options: [
        "Etiketli veriden girdi-çıktı eşlemesi öğrenmek",
        "Bir ajanın deneme-yanılma yoluyla maksimum ödüle ulaşması",
        "Veriyi gruplara ayırmak",
        "Sürekli değer tahmini yapmak"
      ],
      answer: 1,
      explanation: "Pekiştirmeli öğrenmede ajan eylem ve deneyimlerinden gelen geri bildirimlerle maksimum ödülü hedefler.",
      source: "RYZ108 Slayt 29"
    },
    {
      id: "ryz-q009",
      unit: "temeller",
      type: "truefalse",
      difficulty: 2,
      q: "Pekiştirmeli öğrenmede bazen öğretici beklenen sonucu tam söyleyemez ama ürettiği sonuç için 'doğru/yanlış' şeklinde fikir belirtir.",
      answer: true,
      explanation: "Takviyeli öğrenmede tam etiket yerine doğru/yanlış geri bildirimi verilebilir.",
      source: "RYZ108 Slayt 30"
    },
    {
      id: "ryz-q010",
      unit: "temeller",
      type: "categorize",
      difficulty: 3,
      q: "Aşağıdaki yöntem/örnekleri ilgili oldukları öğrenme türüne göre sınıflandırın.",
      categories: ["Denetimli", "Denetimsiz", "Pekiştirmeli"],
      items: [
        { text: "Lojistik Regresyon", cat: "Denetimli" },
        { text: "Karar Ağaçları", cat: "Denetimli" },
        { text: "Destek Vektör Makineleri (SVM)", cat: "Denetimli" },
        { text: "Hiyerarşik Kümeleme", cat: "Denetimsiz" },
        { text: "Apriori Algoritması", cat: "Denetimsiz" },
        { text: "Q-Learning / TD-Learning", cat: "Pekiştirmeli" },
        { text: "Genetik Algoritma", cat: "Pekiştirmeli" }
      ],
      explanation: "Slayt 3 ve 30: SVM/Lojistik/Karar Ağaçları denetimli; kümeleme/Apriori denetimsiz; Q/TD-Learning ve genetik algoritma pekiştirmeli örnekleridir.",
      source: "RYZ108 Slayt 3, 30, 43"
    },
    {
      id: "ryz-q011",
      unit: "temeller",
      type: "mcq",
      difficulty: 1,
      q: "Sınıflandırma (classification) hangi durumda kullanılır?",
      options: [
        "Çıktının sürekli (sayısal) olduğu durumlarda",
        "Çıktının nitel (kategorik) olduğu, her örneğin hangi sınıfa ait olduğunun belirlendiği durumlarda",
        "Sadece etiketsiz veri olduğunda",
        "Yalnızca veri ölçeklendirme için"
      ],
      answer: 1,
      explanation: "Sınıflandırma, çıktıların nitel olduğu durumlarda her örneğin sınıfını belirler.",
      source: "RYZ108 Slayt 5"
    },
    {
      id: "ryz-q012",
      unit: "temeller",
      type: "mcq",
      difficulty: 1,
      q: "Regresyon (regression) neyi tahmin etmeye yöneliktir?",
      options: [
        "Kategorik bir sınıf etiketini",
        "Sürekli bir çıktıyı; bağımlı-bağımsız değişken ilişkisini tanımlar",
        "Bir kümenin merkezini",
        "Birliktelik kurallarını"
      ],
      answer: 1,
      explanation: "Regresyon, bağımlı ve bağımsız değişken ilişkisini tanımlayıp sürekli çıktı tahmin eder.",
      source: "RYZ108 Slayt 19"
    },
    {
      id: "ryz-q013",
      unit: "temeller",
      type: "truefalse",
      difficulty: 2,
      q: "Bir öğrencinin notlarına göre dersi geçip geçmediğini belirlemek bir regresyon problemidir.",
      answer: false,
      explanation: "Geçti/kaldı nitel (kategorik) bir çıktıdır, bu bir sınıflandırma problemidir.",
      source: "RYZ108 Slayt 7"
    },
    {
      id: "ryz-q014",
      unit: "temeller",
      type: "mcq",
      difficulty: 2,
      q: "Hava durumuna göre kişinin şemsiye alıp almayacağını tahmin etmek hangi problem türüdür?",
      options: [
        "Regresyon",
        "Kümeleme",
        "Sınıflandırma",
        "İlişkilendirme"
      ],
      answer: 2,
      explanation: "Al/alma şeklinde kategorik çıktı üretildiği için bu bir sınıflandırma örneğidir.",
      source: "RYZ108 Slayt 8"
    },
    {
      id: "ryz-q015",
      unit: "temeller",
      type: "fill",
      difficulty: 2,
      q: "Sınıflandırmada amaç, X girdisine karşı en az hata ile Y etiketini üreten f: X→Y .......... fonksiyonunu tanımlamaktır. Boşluğa ne gelir?",
      answer: ["sınıflandırma", "siniflandirma", "classification"],
      explanation: "Amaç en az hata ile Y etiketini üreten bir sınıflandırma fonksiyonu tanımlamaktır.",
      source: "RYZ108 Slayt 6"
    },
    {
      id: "ryz-q016",
      unit: "temeller",
      type: "categorize",
      difficulty: 2,
      q: "Aşağıdaki metrikleri ait oldukları problem türüne göre sınıflandırın.",
      categories: ["Sınıflandırma Metriği", "Regresyon Metriği"],
      items: [
        { text: "Accuracy (Doğruluk)", cat: "Sınıflandırma Metriği" },
        { text: "Precision (Kesinlik)", cat: "Sınıflandırma Metriği" },
        { text: "Recall (Hassasiyet)", cat: "Sınıflandırma Metriği" },
        { text: "F1 Score", cat: "Sınıflandırma Metriği" },
        { text: "AUC-ROC", cat: "Sınıflandırma Metriği" },
        { text: "MSE", cat: "Regresyon Metriği" },
        { text: "RMSE", cat: "Regresyon Metriği" },
        { text: "MAE", cat: "Regresyon Metriği" },
        { text: "R²", cat: "Regresyon Metriği" }
      ],
      explanation: "Sınıflandırma metrikleri Accuracy/Precision/Recall/F1/AUC-ROC; regresyon metrikleri MSE/RMSE/MAE/R²'dir.",
      source: "RYZ108 Slayt 5, 19, 23"
    },
    {
      id: "ryz-q017",
      unit: "metrikler",
      type: "mcq",
      difficulty: 1,
      q: "Confusion Matrix (Karmaşıklık/Hata Matrisi) ne için kullanılır?",
      options: [
        "Regresyon modellerinin hatasını ölçmek için",
        "Sınıflandırma modellerinin performansını, tahmin ile gerçek değerleri karşılaştırarak değerlendirmek için",
        "Verileri kümelere ayırmak için",
        "Eksik verileri doldurmak için"
      ],
      answer: 1,
      explanation: "Confusion matrix, sınıflandırma tahminlerini gerçek değerlerle karşılaştıran bir hata matrisidir.",
      source: "RYZ108 Slayt 9"
    },
    {
      id: "ryz-q018",
      unit: "metrikler",
      type: "match",
      difficulty: 1,
      q: "Confusion matrix terimlerini Türkçe karşılıklarıyla eşleştirin.",
      pairs: [
        ["True Positive (TP)", "Doğruya doğru demek (DOĞRU)"],
        ["True Negative (TN)", "Yanlışa yanlış demek (DOĞRU)"],
        ["False Positive (FP)", "Doğruya yanlış demek (YANLIŞ)"],
        ["False Negative (FN)", "Yanlışa doğru demek (YANLIŞ)"]
      ],
      explanation: "TP/TN doğru tahminler; FP/FN yanlış tahminlerdir.",
      source: "RYZ108 Slayt 9"
    },
    {
      id: "ryz-q019",
      unit: "metrikler",
      type: "mcq",
      difficulty: 2,
      q: "Aşağıdakilerden hangisi YANLIŞ (hatalı) bir sınıflandırma tahminine karşılık gelir?",
      options: [
        "True Positive (TP)",
        "True Negative (TN)",
        "False Positive (FP)",
        "Doğru sınıflandırılmış pozitif örnek"
      ],
      answer: 2,
      explanation: "FP (doğruya yanlış demek) hatalı tahmindir; TP ve TN doğrudur. FN de hatalıdır.",
      source: "RYZ108 Slayt 9"
    },
    {
      id: "ryz-q020",
      unit: "metrikler",
      type: "truefalse",
      difficulty: 2,
      q: "False Negative (FN), gerçekte var olan bir durumu yanlışlıkla 'yok' diye tahmin etmektir (yanlışa doğru demek değil, doğruya yanlış demenin tersi).",
      answer: true,
      explanation: "FN = yanlışa doğru demek; yani gerçekte pozitif olanı negatif tahmin etmektir, hatalı bir tahmindir.",
      source: "RYZ108 Slayt 9"
    },
    {
      id: "ryz-q021",
      unit: "metrikler",
      type: "mcq",
      difficulty: 1,
      q: "Doğruluk (Accuracy) nasıl tanımlanır?",
      options: [
        "Yanlışların toplama oranı",
        "Doğru sınıflandırılan örneklerin oranı; doğrular / toplam (esas köşegen / toplam)",
        "TP'nin gerçek varlara oranı",
        "ROC eğrisinin altındaki alan"
      ],
      answer: 1,
      explanation: "Accuracy = (TN+TP)/TOPLAM; doğruların toplama oranı, esas köşegenin toplama oranıdır.",
      source: "RYZ108 Slayt 10"
    },
    {
      id: "ryz-q022",
      unit: "metrikler",
      type: "calc",
      difficulty: 2,
      q: "TP=200, TN=100, FP=20, FN=10, TOPLAM=330 iken Doğruluğu (Accuracy) hesaplayın. Doğruluk=(TN+TP)/TOPLAM.",
      answer: 0.91,
      tolerance: 0.01,
      explanation: "Doğruluk=(TN+TP)/TOPLAM=(100+200)/330=300/330≈0,91.",
      source: "RYZ108 Slayt 10"
    },
    {
      id: "ryz-q023",
      unit: "metrikler",
      type: "mcq",
      difficulty: 2,
      q: "Hata Oranı (Error Rate) hangisine eşittir?",
      options: [
        "TP / (TP+FN)",
        "(FN+FP)/TOPLAM = 1 - Doğruluk",
        "TN / (TN+FP)",
        "Doğruluk + 1"
      ],
      answer: 1,
      explanation: "Hata Oranı = yanlışların toplama oranı = (FN+FP)/TOPLAM = 1 - Doğruluk (yedek köşegen / toplam).",
      source: "RYZ108 Slayt 11"
    },
    {
      id: "ryz-q024",
      unit: "metrikler",
      type: "calc",
      difficulty: 2,
      q: "TP=200, TN=100, FP=20, FN=10, TOPLAM=330 iken Hata Oranını hesaplayın. Hata Oranı=(FN+FP)/TOPLAM.",
      answer: 0.09,
      tolerance: 0.01,
      explanation: "Hata Oranı=(FN+FP)/TOPLAM=(10+20)/330=30/330≈0,09 (=1-0,91).",
      source: "RYZ108 Slayt 11"
    },
    {
      id: "ryz-q025",
      unit: "metrikler",
      type: "calc",
      difficulty: 2,
      q: "Doğruluk 0,91 ise Hata Oranı kaçtır? (Hata Oranı = 1 - Doğruluk)",
      answer: 0.09,
      tolerance: 0.01,
      explanation: "Hata Oranı = 1 - Doğruluk = 1 - 0,91 = 0,09.",
      source: "RYZ108 Slayt 11"
    },
    {
      id: "ryz-q026",
      unit: "metrikler",
      type: "mcq",
      difficulty: 1,
      q: "Hassasiyet (Sensitivity / Recall) nedir?",
      options: [
        "Doğru tahmin edilen varların (TP) gerçek varlara oranı: TP/(TP+FN)",
        "TN'nin gerçek yoklara oranı",
        "FP'nin gerçek yoklara oranı",
        "Doğruların toplama oranı"
      ],
      answer: 0,
      explanation: "Hassasiyet = TP / Gerçek Varlar = TP/(TP+FN); modelin doğruları bilme etkinliği.",
      source: "RYZ108 Slayt 12"
    },
    {
      id: "ryz-q027",
      unit: "metrikler",
      type: "calc",
      difficulty: 2,
      q: "TP=200, FN=10 iken Hassasiyeti (Recall) hesaplayın. Hassasiyet=TP/(TP+FN).",
      answer: 0.95,
      tolerance: 0.01,
      explanation: "Hassasiyet=TP/(TP+FN)=200/(200+10)=200/210≈0,95.",
      source: "RYZ108 Slayt 12"
    },
    {
      id: "ryz-q028",
      unit: "metrikler",
      type: "mcq",
      difficulty: 2,
      q: "Yanlış Pozitif Oranı (False Positive Rate, FPR) neyi ifade eder?",
      options: [
        "Var'a var deme oranı",
        "Yok'a var deme oranı: FP / Gerçek Yoklar = FP/(TN+FP)",
        "Yok'a yok deme oranı",
        "TP / (TP+FN)"
      ],
      answer: 1,
      explanation: "FPR = Yok'a var deme oranı = FP / Gerçek Yoklar = FP/(TN+FP).",
      source: "RYZ108 Slayt 13"
    },
    {
      id: "ryz-q029",
      unit: "metrikler",
      type: "calc",
      difficulty: 2,
      q: "FP=20, TN=100 iken Yanlış Pozitif Oranını (FPR) hesaplayın. FPR=FP/(TN+FP).",
      answer: 0.17,
      tolerance: 0.01,
      explanation: "FPR=FP/(TN+FP)=20/(100+20)=20/120≈0,17.",
      source: "RYZ108 Slayt 13"
    },
    {
      id: "ryz-q030",
      unit: "metrikler",
      type: "mcq",
      difficulty: 1,
      q: "Seçicilik (Specificity) nedir?",
      options: [
        "Yok'u tahmin etme etkinliği: TN / Gerçek Yoklar = TN/(TN+FP)",
        "Var'ı tahmin etme etkinliği: TP/(TP+FN)",
        "Yok'a var deme oranı",
        "Doğruların toplama oranı"
      ],
      answer: 0,
      explanation: "Seçicilik = Yok'a ne derece yok diyebilmiş = TN / Gerçek Yoklar = TN/(TN+FP).",
      source: "RYZ108 Slayt 14"
    },
    {
      id: "ryz-q031",
      unit: "metrikler",
      type: "calc",
      difficulty: 2,
      q: "TN=100, FP=20 iken Seçiciliği (Specificity) hesaplayın. Seçicilik=TN/(TN+FP).",
      answer: 0.83,
      tolerance: 0.01,
      explanation: "Seçicilik=TN/(TN+FP)=100/(100+20)=100/120≈0,83.",
      source: "RYZ108 Slayt 14"
    },
    {
      id: "ryz-q032",
      unit: "metrikler",
      type: "mcq",
      difficulty: 1,
      q: "Kesinlik (Precision) nasıl tanımlanır?",
      options: [
        "Doğru var tahmin edilenlerin toplam var tahminlere oranı: TP/(FP+TP)",
        "TP'nin gerçek varlara oranı",
        "TN'nin gerçek yoklara oranı",
        "Yanlışların toplama oranı"
      ],
      answer: 0,
      explanation: "Kesinlik = TP / (FP+TP); doğru var tahminlerinin toplam var tahminlerine oranıdır.",
      source: "RYZ108 Slayt 15"
    },
    {
      id: "ryz-q033",
      unit: "metrikler",
      type: "calc",
      difficulty: 2,
      q: "TP=200, FP=20 iken Kesinliği (Precision) hesaplayın. Kesinlik=TP/(FP+TP).",
      answer: 0.91,
      tolerance: 0.01,
      explanation: "Kesinlik=TP/(FP+TP)=200/(20+200)=200/220≈0,91.",
      source: "RYZ108 Slayt 15"
    },
    {
      id: "ryz-q034",
      unit: "metrikler",
      type: "match",
      difficulty: 3,
      q: "Metrikleri formülleriyle eşleştirin (TP/TN/FP/FN cinsinden).",
      pairs: [
        ["Doğruluk (Accuracy)", "(TN+TP)/TOPLAM"],
        ["Hassasiyet (Recall)", "TP/(TP+FN)"],
        ["Seçicilik (Specificity)", "TN/(TN+FP)"],
        ["Kesinlik (Precision)", "TP/(FP+TP)"],
        ["Yanlış Pozitif Oranı (FPR)", "FP/(TN+FP)"]
      ],
      explanation: "Her metriğin paydası farklıdır: Recall'ın paydası gerçek varlar, Specificity ve FPR'nin paydası gerçek yoklar, Precision'ın paydası toplam var tahmini.",
      source: "RYZ108 Slayt 10-15"
    },
    {
      id: "ryz-q035",
      unit: "metrikler",
      type: "mcq",
      difficulty: 3,
      q: "Recall (Hassasiyet) ile Precision (Kesinlik) arasındaki temel fark nedir?",
      options: [
        "İkisi de aynıdır",
        "Recall'ın paydası gerçek varlar (TP+FN); Precision'ın paydası toplam var tahmini (TP+FP)",
        "Recall regresyon, Precision sınıflandırma metriğidir",
        "Precision'ın paydası gerçek yoklardır"
      ],
      answer: 1,
      explanation: "Recall=TP/(TP+FN) gerçek varlara oranlar; Precision=TP/(TP+FP) yapılan var tahminlerine oranlar.",
      source: "RYZ108 Slayt 12, 15"
    },
    {
      id: "ryz-q036",
      unit: "metrikler",
      type: "fill",
      difficulty: 1,
      q: "Accuracy'ye, hata matrisinde hangi köşegenin toplama oranı denir (kısaca)?",
      answer: ["esas köşegen", "esas kosegen", "asıl köşegen", "ana köşegen", "esas köşegenin toplama oranı"],
      explanation: "Doğruluk esas köşegenin (TP ve TN) toplama oranıdır; hata oranı ise yedek köşegendir.",
      source: "RYZ108 Slayt 10"
    },
    {
      id: "ryz-q037",
      unit: "metrikler",
      type: "mcq",
      difficulty: 1,
      q: "ROC eğrisi hangi iki değeri kullanır?",
      options: [
        "Precision ve Recall",
        "True Positive Rate ve False Positive Rate",
        "MSE ve RMSE",
        "Accuracy ve Error Rate"
      ],
      answer: 1,
      explanation: "ROC (Receiver Operating Characteristic) True Positive Rate ile False Positive Rate üzerinden çizilir.",
      source: "RYZ108 Slayt 16"
    },
    {
      id: "ryz-q038",
      unit: "metrikler",
      type: "truefalse",
      difficulty: 2,
      q: "ROC farklı sınıflar için bir olasılık eğrisidir ve modelin tahminde ne kadar iyi olduğunu açıklar.",
      answer: true,
      explanation: "ROC, farklı sınıflar için olasılık eğrisidir ve performans değerlendirmede yaygın kullanılır.",
      source: "RYZ108 Slayt 16"
    },
    {
      id: "ryz-q039",
      unit: "metrikler",
      type: "mcq",
      difficulty: 1,
      q: "AUC (Area Under Curve) neyi ifade eder?",
      options: [
        "ROC eğrisinin altında kalan alan; modelin ayırt ediciliğini temsil eder",
        "Hata matrisinin köşegeni",
        "Eğitim setinin boyutu",
        "Kümeler arası uzaklık"
      ],
      answer: 0,
      explanation: "AUC, ROC eğrisinin altındaki alandır; alan büyükse model başarılı, küçükse başarısızdır.",
      source: "RYZ108 Slayt 17, 18"
    },
    {
      id: "ryz-q040",
      unit: "metrikler",
      type: "mcq",
      difficulty: 1,
      q: "AUC değer aralığı için en kötü ve en iyi değerler nedir?",
      options: [
        "En kötü 0, en iyi 100",
        "En kötü 0,5 ve en iyi 1,0",
        "En kötü -1, en iyi 1",
        "En kötü 1, en iyi 0,5"
      ],
      answer: 1,
      explanation: "En kötü AUC 0,5 (rastgele tahmin), en iyi AUC 1,0'dır.",
      source: "RYZ108 Slayt 17"
    },
    {
      id: "ryz-q041",
      unit: "metrikler",
      type: "fill",
      difficulty: 1,
      q: "En iyi (mükemmel) AUC değeri kaçtır?",
      answer: ["1", "1.0", "1,0"],
      explanation: "En iyi AUC 1,0'dır; en kötü ise 0,5.",
      source: "RYZ108 Slayt 17"
    },
    {
      id: "ryz-q042",
      unit: "metrikler",
      type: "truefalse",
      difficulty: 2,
      q: "AUC yüksek ise model daha iyi tahmin yapmış demektir.",
      answer: true,
      explanation: "Yüksek AUC, modelin ayırt ediciliğinin yüksek olduğunu, yani daha iyi tahmin yaptığını gösterir.",
      source: "RYZ108 Slayt 18"
    },
    {
      id: "ryz-q043",
      unit: "metrikler",
      type: "mcq",
      difficulty: 1,
      q: "MSE (Mean Squared Error) neyi ölçer?",
      options: [
        "Gerçek ve tahmin edilen değerler arasındaki farkların karelerinin ortalamasını",
        "Farkların mutlak değerinin ortalamasını",
        "Doğru sınıflandırma oranını",
        "Kümeler arası uzaklığı"
      ],
      answer: 0,
      explanation: "MSE, (y - ŷ) hatalarının karelerinin ortalamasıdır; regresyon hata ölçüsüdür.",
      source: "RYZ108 Slayt 20"
    },
    {
      id: "ryz-q044",
      unit: "metrikler",
      type: "fill",
      difficulty: 2,
      q: "MSE formülünde (y - ŷ) ifadesi neyi verir?",
      answer: ["hata", "hatayı", "error", "fark"],
      explanation: "(y - ŷ) gerçek ile tahmin arasındaki farkı, yani hatayı verir.",
      source: "RYZ108 Slayt 20"
    },
    {
      id: "ryz-q045",
      unit: "metrikler",
      type: "mcq",
      difficulty: 2,
      q: "RMSE (Root Mean Square Error) nedir?",
      options: [
        "MSE'nin karesi",
        "MSE'nin karekökünün alınmış hali",
        "MAE ile aynı şey",
        "R² ile aynı şey"
      ],
      answer: 1,
      explanation: "RMSE, MSE'nin karekökü alınarak elde edilir; kare alma ile büyüyen ölçeği geri getirir.",
      source: "RYZ108 Slayt 21"
    },
    {
      id: "ryz-q046",
      unit: "metrikler",
      type: "truefalse",
      difficulty: 2,
      q: "MSE'de hata kareleri alınmasının nedeni, farkın negatif/pozitif olmasından kaynaklanan ölçüm problemini ortadan kaldırmaktır.",
      answer: true,
      explanation: "Kare alma negatiflik/pozitiflik problemini giderir; sonra karekök (RMSE) ile ölçek geri getirilir.",
      source: "RYZ108 Slayt 21"
    },
    {
      id: "ryz-q047",
      unit: "metrikler",
      type: "mcq",
      difficulty: 2,
      q: "MAE (Mean Absolute Error) nasıl hesaplanır?",
      options: [
        "Farkların karelerinin ortalaması",
        "Gerçek (y) ile tahmin (ŷ) arasındaki farkın mutlak değerinin ortalaması",
        "Farkların karekökü",
        "Doğru tahminlerin oranı"
      ],
      answer: 1,
      explanation: "MAE, tüm gözlemler için |y - ŷ| mutlak farklarının ortalamasıdır.",
      source: "RYZ108 Slayt 22"
    },
    {
      id: "ryz-q048",
      unit: "metrikler",
      type: "mcq",
      difficulty: 2,
      q: "R-Kare (R², Coefficient of Determination) neyi temsil eder?",
      options: [
        "Bağımsız değişkenlerin hedef değişken üzerindeki açıklama oranını",
        "Kümeler arası mesafeyi",
        "Yanlış sınıflandırma oranını",
        "Sigmoid fonksiyonunun çıktısını"
      ],
      answer: 0,
      explanation: "R², bağımsız değişkenlerin hedefi ne kadar iyi açıkladığını gösterir; 1'e yaklaşması iyidir.",
      source: "RYZ108 Slayt 23"
    },
    {
      id: "ryz-q049",
      unit: "metrikler",
      type: "truefalse",
      difficulty: 1,
      q: "1'e yaklaşan bir R-Kare değeri, modelin değişkenler arası ilişkiyi iyi açıkladığını gösterir.",
      answer: true,
      explanation: "R² 1'e yaklaştıkça modelin açıklama gücü artar.",
      source: "RYZ108 Slayt 23"
    },
    {
      id: "ryz-q050",
      unit: "metrikler",
      type: "match",
      difficulty: 2,
      q: "Regresyon metriklerini açıklamalarıyla eşleştirin.",
      pairs: [
        ["MSE", "Farkların karelerinin ortalaması"],
        ["RMSE", "MSE'nin karekökü"],
        ["MAE", "Farkların mutlak değerinin ortalaması"],
        ["R²", "Açıklama oranı; 1'e yakınsa iyi"]
      ],
      explanation: "MSE→kare ortalama, RMSE→karekök, MAE→mutlak ortalama, R²→açıklama oranı.",
      source: "RYZ108 Slayt 20-23"
    },
    {
      id: "ryz-q051",
      unit: "metrikler",
      type: "mcq",
      difficulty: 1,
      q: "Silhouette (Siluet) skoru neyi ölçer ve hangi aralıkta değişir?",
      options: [
        "Modelin doğruluğunu, 0-1 arası",
        "Bir nesnenin kendi kümesine vs komşu kümelere benzerliğini, -1 ile 1 arası",
        "Hata oranını, -∞ ile +∞ arası",
        "Birliktelik gücünü, 0-100 arası"
      ],
      answer: 1,
      explanation: "Silhouette -1 ile 1 arasındadır; yüksek değer nesnenin kendi kümesiyle iyi eşleştiğini gösterir.",
      source: "RYZ108 Slayt 27"
    },
    {
      id: "ryz-q052",
      unit: "metrikler",
      type: "mcq",
      difficulty: 2,
      q: "Davies-Bouldin Index için hangisi doğrudur?",
      options: [
        "Yüksek değer iyi kümelemeyi gösterir",
        "Düşük değer homojen ve birbirinden farklı (iyi) kümelemeyi gösterir",
        "Sadece regresyonda kullanılır",
        "1,0 her zaman en iyisidir"
      ],
      answer: 1,
      explanation: "Davies-Bouldin'de düşük değerler homojen ve ayrık kümeleri (iyi kümeleme) temsil eder.",
      source: "RYZ108 Slayt 27"
    },
    {
      id: "ryz-q053",
      unit: "metrikler",
      type: "truefalse",
      difficulty: 2,
      q: "Silhouette skorunda yüksek değer iyi, Davies-Bouldin endeksinde ise düşük değer iyidir.",
      answer: true,
      explanation: "Silhouette yüksek=iyi (1'e yakın), Davies-Bouldin düşük=iyi.",
      source: "RYZ108 Slayt 27"
    },
    {
      id: "ryz-q054",
      unit: "metrikler",
      type: "categorize",
      difficulty: 3,
      q: "Aşağıdaki metrikleri kullanım alanlarına göre sınıflandırın.",
      categories: ["Sınıflandırma", "Regresyon", "Kümeleme"],
      items: [
        { text: "AUC-ROC", cat: "Sınıflandırma" },
        { text: "F1 Score", cat: "Sınıflandırma" },
        { text: "Confusion Matrix", cat: "Sınıflandırma" },
        { text: "RMSE", cat: "Regresyon" },
        { text: "R²", cat: "Regresyon" },
        { text: "Silhouette", cat: "Kümeleme" },
        { text: "Davies-Bouldin Index", cat: "Kümeleme" }
      ],
      explanation: "AUC/F1/confusion matrix sınıflandırma; RMSE/R² regresyon; silhouette/Davies-Bouldin kümeleme metrikleridir.",
      source: "RYZ108 Slayt 5, 19, 27"
    },
    {
      id: "ryz-q055",
      unit: "temeller",
      type: "mcq",
      difficulty: 1,
      q: "Aşırı Öğrenme (Overfitting) nedir?",
      options: [
        "Modelin eğitim verisine az uyum sağlaması",
        "Modelin eğitim veri setine çok fazla uyum sağlaması ve yeni verilere genelleme yeteneğinin azalması",
        "Verinin etiketsiz olması",
        "Kümelerin dairesel olmaması"
      ],
      answer: 1,
      explanation: "Overfitting, eğitim setine aşırı uyumdur ve genelleme yeteneğini düşürür.",
      source: "RYZ108 Slayt 31"
    },
    {
      id: "ryz-q056",
      unit: "temeller",
      type: "truefalse",
      difficulty: 2,
      q: "Aşırı öğrenme (overfitting), modelin yeni (görülmemiş) verilere genelleme yapma yeteneğini artırır.",
      answer: false,
      explanation: "Overfitting genelleme yeteneğini AZALTIR; model eğitim verisine fazla uyduğu için yeni veride başarısız olur.",
      source: "RYZ108 Slayt 31"
    },
    {
      id: "ryz-q057",
      unit: "temeller",
      type: "fill",
      difficulty: 1,
      q: "Modelin eğitim setine çok fazla uyum sağlayıp genelleme yapamadığı duruma İngilizce ne denir?",
      answer: ["overfitting", "aşırı öğrenme", "asiri ogrenme", "aşırı uyum"],
      explanation: "Bu durumun adı overfitting (aşırı öğrenme/uyum)'dur.",
      source: "RYZ108 Slayt 31"
    },
    {
      id: "ryz-q058",
      unit: "veri",
      type: "order",
      difficulty: 2,
      q: "EDA (Veri Hazırlama) sürecinin temel adımlarını doğru sıraya koyun.",
      items: [
        "Veri Toplama",
        "Veri Analizi",
        "Veri Temizleme",
        "Veri Dönüştürme",
        "Özellik seçimi ve Veri Mühendisliği",
        "Veri Setini Eğitim ve Test olarak Bölme"
      ],
      explanation: "Sıra: Toplama → Analiz → Temizleme → Dönüştürme → Özellik mühendisliği → Eğitim/Test bölme.",
      source: "RYZ108 Slayt 32"
    },
    {
      id: "ryz-q059",
      unit: "veri",
      type: "truefalse",
      difficulty: 1,
      q: "Makine öğrenmesi projelerinde veri kalitesi, modelin başarısını doğrudan etkiler.",
      answer: true,
      explanation: "Doğru veri hazırlığı doğruluk, genelleme ve model performansını artırır.",
      source: "RYZ108 Slayt 32"
    },
    {
      id: "ryz-q060",
      unit: "veri",
      type: "mcq",
      difficulty: 1,
      q: "Eksik veriler aşağıdakilerden hangisi olabilir?",
      options: [
        "Sadece negatif sayılar",
        "NaN değerler, boş hücreler veya anlamsız değerler",
        "Yalnızca aykırı değerler",
        "Sadece kategorik veriler"
      ],
      answer: 1,
      explanation: "Eksik/bozuk veri NaN, boş hücre veya anlamsız değer şeklinde olabilir; Pandas bunlarda kullanışlıdır.",
      source: "RYZ108 Slayt 33"
    },
    {
      id: "ryz-q061",
      unit: "veri",
      type: "mcq",
      difficulty: 2,
      q: "Aykırı değerler (Outlier) hakkında hangisi doğrudur?",
      options: [
        "Modeller için her zaman faydalıdır, korunmalıdır",
        "İstatistiksel analiz ve modeller için yanıltıcı olabilir; tespit edilip işlenmeli/çıkarılmalıdır",
        "Sadece kategorik verilerde görülür",
        "Normalizasyonun başka adıdır"
      ],
      answer: 1,
      explanation: "Aykırı değerler yanıltıcı olabilir; istatistiksel yöntem veya görselleştirme ile tespit edilip işlenir.",
      source: "RYZ108 Slayt 33"
    },
    {
      id: "ryz-q062",
      unit: "veri",
      type: "fill",
      difficulty: 1,
      q: "Python'da eksik veri ve veri temizleme işlemleri için kullanışlı olan kütüphanenin adı nedir?",
      answer: ["pandas", "Pandas"],
      explanation: "Pandas kütüphanesi eksik veri işlemleri için oldukça kullanışlıdır.",
      source: "RYZ108 Slayt 33"
    },
    {
      id: "ryz-q063",
      unit: "veri",
      type: "mcq",
      difficulty: 1,
      q: "Kategorik verileri sayısal değerlere dönüştürmek için hangi teknikler kullanılır?",
      options: [
        "Normalizasyon ve standardizasyon",
        "One-hot encoding veya label encoding",
        "MSE ve RMSE",
        "Elbow ve silhouette"
      ],
      answer: 1,
      explanation: "Kategorik veri sayısala One-hot encoding veya label encoding ile dönüştürülür.",
      source: "RYZ108 Slayt 34"
    },
    {
      id: "ryz-q064",
      unit: "veri",
      type: "mcq",
      difficulty: 1,
      q: "Normalizasyon ne yapar?",
      options: [
        "Verileri 0-1 arasında yeniden ölçeklendirir",
        "Ortalamayı 0, standart sapmayı 1 yapar",
        "Kategorik veriyi sayısala çevirir",
        "Eksik verileri doldurur"
      ],
      answer: 0,
      explanation: "Normalizasyon verileri 0-1 aralığına yeniden ölçeklendirir.",
      source: "RYZ108 Slayt 35"
    },
    {
      id: "ryz-q065",
      unit: "veri",
      type: "mcq",
      difficulty: 1,
      q: "Standardizasyon (standartlaştırma) ne yapar?",
      options: [
        "Verileri 0-1 arasına sıkıştırır",
        "Verilerin ortalamasını 0, standart sapmasını 1 yaparak standart normal dağılıma dönüştürür",
        "Kategorik veriyi one-hot eder",
        "Aykırı değerleri siler"
      ],
      answer: 1,
      explanation: "Standardizasyon ortalama 0, standart sapma 1 olacak şekilde standart normal dağılıma dönüştürür.",
      source: "RYZ108 Slayt 35"
    },
    {
      id: "ryz-q066",
      unit: "veri",
      type: "match",
      difficulty: 2,
      q: "Ölçeklendirme yöntemlerini özellikleriyle eşleştirin.",
      pairs: [
        ["Normalizasyon", "0-1 arasına yeniden ölçeklendirir"],
        ["Standardizasyon", "Ortalama 0, standart sapma 1 yapar"],
        ["One-hot encoding", "Kategorik veriyi sayısala çevirir"],
        ["Label encoding", "Kategorik veriyi sayısala çevirir"]
      ],
      explanation: "Normalizasyon 0-1, standardizasyon ortalama 0/std 1; encoding yöntemleri kategorik→sayısal dönüşümdür.",
      source: "RYZ108 Slayt 34, 35"
    },
    {
      id: "ryz-q067",
      unit: "veri",
      type: "categorize",
      difficulty: 2,
      q: "Aşağıdaki ifadeleri Normalizasyon mu Standardizasyon mu olduğuna göre sınıflandırın.",
      categories: ["Normalizasyon", "Standardizasyon"],
      items: [
        { text: "0-1 aralığına ölçeklendirme", cat: "Normalizasyon" },
        { text: "Min-max tarzı yeniden ölçekleme", cat: "Normalizasyon" },
        { text: "Ortalamayı 0 yapma", cat: "Standardizasyon" },
        { text: "Standart sapmayı 1 yapma", cat: "Standardizasyon" },
        { text: "Standart normal dağılıma dönüştürme", cat: "Standardizasyon" }
      ],
      explanation: "Normalizasyon = 0-1 aralığı; Standardizasyon = ortalama 0 / std 1 (standart normal dağılım).",
      source: "RYZ108 Slayt 35"
    },
    {
      id: "ryz-q068",
      unit: "veri",
      type: "truefalse",
      difficulty: 2,
      q: "Ölçeklendirme (normalizasyon/standardizasyon), özelliklerin aynı ölçekte olmasını sağlayarak model performansını artırabilir.",
      answer: true,
      explanation: "Aynı ölçek, modelin daha iyi performans göstermesine yardımcı olabilir.",
      source: "RYZ108 Slayt 35"
    },
    {
      id: "ryz-q069",
      unit: "temeller",
      type: "mcq",
      difficulty: 1,
      q: "Doğrulama (Validation) nedir?",
      options: [
        "Modeli yalnızca eğitim setinde test etmek",
        "Modelin genelleme performansını, genellikle ayrı bir doğrulama veri seti ile değerlendiren süreç",
        "Veriyi kümelere ayırmak",
        "Kategorik veriyi sayısala çevirmek"
      ],
      answer: 1,
      explanation: "Doğrulama, genelleme performansını ayrı bir doğrulama setiyle değerlendirir.",
      source: "RYZ108 Slayt 36"
    },
    {
      id: "ryz-q070",
      unit: "veri",
      type: "mcq",
      difficulty: 2,
      q: "Çapraz geçerlikte (Cross Validation) veri neden ikiye bölünür?",
      options: [
        "Sadece veri boyutunu küçültmek için",
        "Biri eğitim (train), diğeri sistemin hiç görmediği örnekleri temsil eden test (test) seti olsun diye",
        "İki farklı model eğitmek için",
        "Etiketleri silmek için"
      ],
      answer: 1,
      explanation: "Eğitim seti öğrenme için, test seti sistemin görmediği örneklerde başarı ölçümü içindir.",
      source: "RYZ108 Slayt 37"
    },
    {
      id: "ryz-q071",
      unit: "veri",
      type: "truefalse",
      difficulty: 1,
      q: "Test seti, sistemin eğitim sırasında hiç görmediği olası örnekleri temsil eder ve başarı bu set üzerinde hesaplanır.",
      answer: true,
      explanation: "Sistem eğitim setiyle öğrenir, başarı test seti üzerinde hesaplanır.",
      source: "RYZ108 Slayt 37"
    },
    {
      id: "ryz-q072",
      unit: "veri",
      type: "mcq",
      difficulty: 2,
      q: "K-Parçalı (K-fold) çapraz doğrulamada veri nasıl kullanılır?",
      options: [
        "Veri K kümeye ayrılır; biri test, diğer K-1 küme eğitim için kullanılır; işlem K kez tekrarlanır",
        "Veri tek bir eğitim setine dönüştürülür",
        "Sadece bir kez bölünür, tekrar yoktur",
        "Etiketler çıkarılır ve kümeleme yapılır"
      ],
      answer: 0,
      explanation: "K-fold'da veri K kümeye ayrılır, her seferinde biri test diğer K-1'i eğitim olur, K kez tekrarlanır.",
      source: "RYZ108 Slayt 38"
    },
    {
      id: "ryz-q073",
      unit: "veri",
      type: "mcq",
      difficulty: 2,
      q: "K-fold çapraz doğrulamada genel başarı nasıl belirlenir?",
      options: [
        "En yüksek başarı değeri alınır",
        "K adet başarı değerinin ortalaması alınır",
        "Sadece son katmanın başarısı alınır",
        "Başarı değerleri çarpılır"
      ],
      answer: 1,
      explanation: "Genel başarı için K adet başarı değerinin ortalaması alınır.",
      source: "RYZ108 Slayt 38"
    },
    {
      id: "ryz-q074",
      unit: "veri",
      type: "fill",
      difficulty: 2,
      q: "K-fold çapraz doğrulamada veri K kümeye ayrıldığında eğitim için kaç küme birleştirilir?",
      answer: ["K-1", "k-1", "K eksi 1", "k eksi 1"],
      explanation: "Biri test, geri kalan K-1 küme birleştirilip eğitim seti olur.",
      source: "RYZ108 Slayt 38"
    },
    {
      id: "ryz-q075",
      unit: "regresyon",
      type: "mcq",
      difficulty: 1,
      q: "Doğrusal Regresyon neyi modeller?",
      options: [
        "Bağımlı ve bağımsız değişkenler arasındaki ilişkiyi doğrusal olarak",
        "Verileri kümelere ayırarak",
        "Birliktelik kurallarını",
        "Sınıf etiketlerini sigmoid ile"
      ],
      answer: 0,
      explanation: "Doğrusal regresyon bağımlı-bağımsız değişken ilişkisini doğrusal modeller.",
      source: "RYZ108 Slayt 39"
    },
    {
      id: "ryz-q076",
      unit: "regresyon",
      type: "mcq",
      difficulty: 2,
      q: "Doğrusal regresyonda modelin 'öğrendiği' kavramlar nelerdir?",
      options: [
        "Küme sayısı ve merkezler",
        "b sabiti ve wᵢ ağırlıkları",
        "Sınıf etiketleri",
        "AUC ve ROC"
      ],
      answer: 1,
      explanation: "Doğrusal regresyon modelinin öğrendiği şey b sabiti ve wᵢ ağırlıklarıdır.",
      source: "RYZ108 Slayt 39"
    },
    {
      id: "ryz-q077",
      unit: "regresyon",
      type: "match",
      difficulty: 2,
      q: "Doğrusal regresyon terimlerini karşılıklarıyla eşleştirin.",
      pairs: [
        ["b sabiti", "intercept / bias / beta (ß)"],
        ["wᵢ", "katsayı / ağırlık / coefficient"],
        ["xᵢ", "bağımsız değişkenler"],
        ["yᶦ", "bağımlı değişken"]
      ],
      explanation: "b sabiti=intercept/bias/beta; wᵢ=katsayı/ağırlık; xᵢ bağımsız, yᶦ bağımlı değişken.",
      source: "RYZ108 Slayt 39, 40"
    },
    {
      id: "ryz-q078",
      unit: "regresyon",
      type: "truefalse",
      difficulty: 2,
      q: "Doğrusal regresyonda b sabiti ve wᵢ ağırlıkları, gerçek ile tahmin değerleri arasındaki farkların karelerinin toplamını/ortalamasını minimum yapacak şekilde belirlenir.",
      answer: true,
      explanation: "Amaç hata karelerinin toplamını/ortalamasını minimize edecek b ve wᵢ değerlerini bulmaktır.",
      source: "RYZ108 Slayt 40"
    },
    {
      id: "ryz-q079",
      unit: "regresyon",
      type: "fill",
      difficulty: 1,
      q: "Doğrusal regresyonda b sabitinin literatürdeki diğer iki adından birini yazın (intercept dışında).",
      answer: ["bias", "beta", "ß", "intercept"],
      explanation: "b sabiti literatürde beta (ß), intercept veya bias olarak ifade edilir.",
      source: "RYZ108 Slayt 40"
    },
    {
      id: "ryz-q080",
      unit: "regresyon",
      type: "mcq",
      difficulty: 1,
      q: "Lojistik regresyon hakkında hangisi doğrudur?",
      options: [
        "İsminde regresyon geçtiği için bir regresyon (sürekli değer tahmin) algoritmasıdır",
        "İsminde regresyon geçse de bir sınıflandırma algoritmasıdır",
        "Bir kümeleme algoritmasıdır",
        "Bir birliktelik kuralı algoritmasıdır"
      ],
      answer: 1,
      explanation: "Lojistik regresyon, isminde regresyon geçmesine rağmen bir SINIFLANDIRMA algoritmasıdır.",
      source: "RYZ108 Slayt 42"
    },
    {
      id: "ryz-q081",
      unit: "regresyon",
      type: "mcq",
      difficulty: 1,
      q: "Lojistik regresyon sınıflandırma yapmak için hangi fonksiyonu kullanır?",
      options: [
        "Doğrusal fonksiyon",
        "Sigmoid (Lojistik) fonksiyonu",
        "Karesel fonksiyon",
        "Logaritma fonksiyonu"
      ],
      answer: 1,
      explanation: "Lojistik regresyon, 'S' şeklindeki Sigmoid (Lojistik) fonksiyonunu kullanır.",
      source: "RYZ108 Slayt 42"
    },
    {
      id: "ryz-q082",
      unit: "regresyon",
      type: "mcq",
      difficulty: 2,
      q: "Sigmoid fonksiyonu ne yapar?",
      options: [
        "Verileri -1 ile 1 arasına çeker",
        "Verileri 0 ile 1 arasına sıkıştırır, böylece sınıflandırma yapılabilir",
        "Verileri kümelere ayırır",
        "Eksik verileri doldurur"
      ],
      answer: 1,
      explanation: "Sigmoid, verileri 0 ile 1 arasına sıkıştırır ve bu sayede sınıflandırma yapılır.",
      source: "RYZ108 Slayt 42"
    },
    {
      id: "ryz-q083",
      unit: "regresyon",
      type: "truefalse",
      difficulty: 1,
      q: "Sigmoid fonksiyonu 'S' şeklinde bir eğridir ve verileri 0 ile 1 arasına sıkıştırır.",
      answer: true,
      explanation: "Sigmoid 'S' biçimli bir eğridir; çıktıyı 0-1 aralığına getirir.",
      source: "RYZ108 Slayt 42"
    },
    {
      id: "ryz-q084",
      unit: "regresyon",
      type: "fill",
      difficulty: 1,
      q: "Lojistik regresyonun kullandığı, çıktıyı 0-1 arasına sıkıştıran 'S' şeklindeki fonksiyonun adı nedir?",
      answer: ["sigmoid", "sigmoid fonksiyonu", "lojistik fonksiyon", "logistic"],
      explanation: "Bu fonksiyon Sigmoid (Lojistik) fonksiyonudur.",
      source: "RYZ108 Slayt 42"
    },
    {
      id: "ryz-q085",
      unit: "denetimsiz",
      type: "mcq",
      difficulty: 1,
      q: "K-Means kümelemenin amacı nedir?",
      options: [
        "Verileri etikete göre sınıflara ayırmak",
        "Verileri benzerliklerine göre K adet kümeye ayırmak",
        "Sürekli bir değer tahmin etmek",
        "Birliktelik kuralları üretmek"
      ],
      answer: 1,
      explanation: "K-Means, denetimsiz öğrenmede verileri benzerliklerine göre K kümeye ayırır.",
      source: "RYZ108 Slayt 44"
    },
    {
      id: "ryz-q086",
      unit: "denetimsiz",
      type: "order",
      difficulty: 2,
      q: "K-Means algoritmasının adımlarını doğru sıraya koyun.",
      items: [
        "Küme sayısı belirlenir",
        "Rastgele k adet merkez seçilir",
        "Her gözlemin k merkezlerine uzaklıkları hesaplanır",
        "Her gözlem en yakın merkeze (kümeye) atanır",
        "Oluşan kümeler için tekrar merkez hesaplanır"
      ],
      explanation: "Sıra: küme sayısı → rastgele merkez → uzaklık hesabı → atama → merkez güncelleme; bu adımlar iterasyonla tekrarlanır.",
      source: "RYZ108 Slayt 45"
    },
    {
      id: "ryz-q087",
      unit: "denetimsiz",
      type: "mcq",
      difficulty: 3,
      q: "K-Means'te nihai kümelenme yapısı hangi durumda seçilir?",
      options: [
        "Rastgele merkez seçildiği anda",
        "Küme içi hata kareler toplamlarının toplamının (total within-cluster variation) minimum olduğu durumda",
        "AUC değeri 1,0 olduğunda",
        "Tüm gözlemler tek kümeye toplandığında"
      ],
      answer: 1,
      explanation: "Adımlar belirli iterasyon tekrarlanır; küme içi hata kareler toplamı minimum olan kümelenme nihai seçilir.",
      source: "RYZ108 Slayt 45"
    },
    {
      id: "ryz-q088",
      unit: "denetimsiz",
      type: "mcq",
      difficulty: 2,
      q: "K-Means'in sınıflandırmadan temel farkı nedir?",
      options: [
        "K-Means daha yavaştır",
        "Sınıflandırmada sınıflar baştan belliyken, K-Means'te sınıf (etiket) bilgisi yoktur",
        "K-Means etiketli veri gerektirir",
        "K-Means sürekli değer tahmin eder"
      ],
      answer: 1,
      explanation: "Sınıflandırmada sınıflar başında bellidir; K-Means'te sınıf bilgisi yoktur (denetimsiz).",
      source: "RYZ108 Slayt 46"
    },
    {
      id: "ryz-q089",
      unit: "denetimsiz",
      type: "truefalse",
      difficulty: 1,
      q: "K-Means hızlıdır, basit yapıya sahiptir ve büyük veri setlerinde etkilidir.",
      answer: true,
      explanation: "Slayt 46: K-Means hızlı, basit ve büyük veri setlerinde etkilidir.",
      source: "RYZ108 Slayt 46"
    },
    {
      id: "ryz-q090",
      unit: "denetimsiz",
      type: "truefalse",
      difficulty: 2,
      q: "K-Means kümelerinin şekli zorunlu olarak dairesel olmalıdır.",
      answer: false,
      explanation: "Kümeleri dairesel hayal etsek de dairesel olmak zorunda değildir; gerçek hayatta mükemmel veri nadirdir.",
      source: "RYZ108 Slayt 47"
    },
    {
      id: "ryz-q091",
      unit: "denetimsiz",
      type: "mcq",
      difficulty: 2,
      q: "Elbow (Dirsek) metodu K seçimini nasıl yapar?",
      options: [
        "Silhouette skoru -1'e en yakın K'yi seçer",
        "Her K için merkeze uzaklıkların kareleri toplamı hesaplanır; farkın azalmaya başladığı dirsek noktası en uygun K'dir",
        "AUC'yi maksimize eden K'yi seçer",
        "Rastgele bir K seçer"
      ],
      answer: 1,
      explanation: "Elbow'da her K için kare uzaklık toplamları çizilir; farkın azaldığı dirsek noktası uygun K'dir.",
      source: "RYZ108 Slayt 48"
    },
    {
      id: "ryz-q092",
      unit: "denetimsiz",
      type: "mcq",
      difficulty: 2,
      q: "Silhouette metodu ile K seçiminde hangi K en uygundur?",
      options: [
        "-1'e en yakın K",
        "1'e en yakın değer üreten K",
        "0'a en yakın K",
        "En büyük K"
      ],
      answer: 1,
      explanation: "Silhouette her K için -1 ile 1 arası değer üretir; 1'e en yakın K en uygundur.",
      source: "RYZ108 Slayt 49"
    },
    {
      id: "ryz-q093",
      unit: "denetimsiz",
      type: "match",
      difficulty: 3,
      q: "K seçim metotlarını mantıklarıyla eşleştirin.",
      pairs: [
        ["Elbow metodu", "Merkeze uzaklıkların kareleri toplamı; dirsek noktası seçilir"],
        ["Silhouette metodu", "-1 ile 1 arası değer; 1'e en yakın K seçilir"]
      ],
      explanation: "Elbow kare uzaklık toplamına bakar (dirsek), Silhouette küme farklılığına bakar (1'e yakın iyi).",
      source: "RYZ108 Slayt 48, 49"
    },
    {
      id: "ryz-q094",
      unit: "denetimsiz",
      type: "mcq",
      difficulty: 1,
      q: "Hiyerarşik kümeleme ne yapar?",
      options: [
        "Benzer nesneleri ağaç benzeri bir hiyerarşide kümelere ayırır",
        "Sürekli değer tahmin eder",
        "Sigmoid ile sınıflandırma yapar",
        "Birliktelik kuralları çıkarır"
      ],
      answer: 0,
      explanation: "Hiyerarşik kümeleme benzer nesneleri ağaç benzeri hiyerarşide gruplara ayırır.",
      source: "RYZ108 Slayt 50, 51"
    },
    {
      id: "ryz-q095",
      unit: "denetimsiz",
      type: "mcq",
      difficulty: 2,
      q: "Agglomerative (Aşağıdan Yukarıya) hiyerarşik kümeleme nasıl çalışır?",
      options: [
        "Tüm noktalar tek küme başlar, alt kümelere ayrılır",
        "Her veri noktası ayrı küme başlar, en yakın iki küme birleştirilir, tek küme kalana kadar sürer",
        "Rastgele k merkez seçilir",
        "Sigmoid ile 0-1 arası değer üretir"
      ],
      answer: 1,
      explanation: "Agglomerative aşağıdan yukarıya: her nokta ayrı küme, en yakın ikisi birleşir, tek küme olana dek devam eder.",
      source: "RYZ108 Slayt 52"
    },
    {
      id: "ryz-q096",
      unit: "denetimsiz",
      type: "mcq",
      difficulty: 2,
      q: "Divisive (Yukarıdan Aşağıya) hiyerarşik kümeleme nasıl çalışır?",
      options: [
        "Her nokta ayrı küme başlar, birleştirilir",
        "Tüm noktalar tek küme başlar, benzer olmayanlar alt kümelere ayrılır",
        "K merkez rastgele seçilir",
        "Birliktelik kuralları üretir"
      ],
      answer: 1,
      explanation: "Divisive yukarıdan aşağıya: tüm noktalar tek küme, benzer olmayanlar alt kümelere ayrılarak devam eder.",
      source: "RYZ108 Slayt 52"
    },
    {
      id: "ryz-q097",
      unit: "denetimsiz",
      type: "categorize",
      difficulty: 2,
      q: "Aşağıdaki ifadeleri hiyerarşik kümeleme yaklaşımına göre sınıflandırın.",
      categories: ["Agglomerative (Aşağıdan Yukarıya)", "Divisive (Yukarıdan Aşağıya)"],
      items: [
        { text: "Her veri noktası ayrı küme olarak başlar", cat: "Agglomerative (Aşağıdan Yukarıya)" },
        { text: "En yakın iki küme birleştirilir", cat: "Agglomerative (Aşağıdan Yukarıya)" },
        { text: "Tüm noktalar tek küme olana kadar tekrarlanır", cat: "Agglomerative (Aşağıdan Yukarıya)" },
        { text: "Tüm veri noktaları tek bir küme olarak başlar", cat: "Divisive (Yukarıdan Aşağıya)" },
        { text: "Benzer olmayan noktalar alt kümelere ayrılır", cat: "Divisive (Yukarıdan Aşağıya)" }
      ],
      explanation: "Agglomerative birleştirir (aşağıdan yukarı), Divisive böler (yukarıdan aşağı).",
      source: "RYZ108 Slayt 52"
    },
    {
      id: "ryz-q098",
      unit: "denetimsiz",
      type: "truefalse",
      difficulty: 2,
      q: "Hiyerarşik kümelemede küme sayısı baştan verilmek zorunda değildir.",
      answer: true,
      explanation: "K-Means'in aksine hiyerarşik kümelemede küme sayısı önceden belirtilmek zorunda değildir.",
      source: "RYZ108 Slayt 53"
    },
    {
      id: "ryz-q099",
      unit: "denetimsiz",
      type: "truefalse",
      difficulty: 2,
      q: "Hiyerarşik kümeleme daha büyük veri setlerinde tercih edilir.",
      answer: false,
      explanation: "Hiyerarşik kümeleme daha KÜÇÜK veri setlerinde tercih edilir; ilişki görselleştirmeye uygundur.",
      source: "RYZ108 Slayt 53"
    },
    {
      id: "ryz-q100",
      unit: "denetimsiz",
      type: "mcq",
      difficulty: 3,
      q: "K-Means ile Hiyerarşik kümeleme arasındaki farklardan hangisi doğrudur?",
      options: [
        "K-Means'te küme sayısı (K) belirlenir; hiyerarşikte küme sayısı baştan verilmek zorunda değildir",
        "İkisi de denetimli öğrenmedir",
        "Hiyerarşik kümeleme büyük veri setlerinde, K-Means küçükte tercih edilir",
        "K-Means birliktelik kuralı üretir"
      ],
      answer: 0,
      explanation: "K-Means K'yi gerektirir; hiyerarşikte küme sayısı zorunlu değildir ve küçük veride/görselleştirmede tercih edilir.",
      source: "RYZ108 Slayt 44, 53"
    },
    {
      id: "ryz-q101",
      unit: "denetimsiz",
      type: "mcq",
      difficulty: 1,
      q: "İlişkilendirme (Association) algoritması ne yapar?",
      options: [
        "Veriler arasındaki birlikteliği ortaya çıkarır (Birliktelik Kuralı Madenciliği)",
        "Sürekli değer tahmin eder",
        "Sigmoid ile sınıflandırır",
        "Veriyi normalize eder"
      ],
      answer: 0,
      explanation: "İlişkilendirme, veriler arası birlikteliği ortaya çıkaran Birliktelik Kuralı Madenciliği'dir.",
      source: "RYZ108 Slayt 25, 54"
    },
    {
      id: "ryz-q102",
      unit: "denetimsiz",
      type: "mcq",
      difficulty: 1,
      q: "İlişkilendirme algoritmasının en yaygın kullanım alanı nedir?",
      options: [
        "Görüntü sınıflandırma",
        "Pazar sepeti analizi (market basket analysis) — hangi ürünler birlikte alınır",
        "Hava durumu tahmini",
        "Görüntü kümeleme"
      ],
      answer: 1,
      explanation: "İlişkilendirme en çok pazar sepeti analizinde (birlikte alınan ürünler) kullanılır.",
      source: "RYZ108 Slayt 25, 54"
    },
    {
      id: "ryz-q103",
      unit: "denetimsiz",
      type: "fill",
      difficulty: 2,
      q: "İlişkilendirme algoritmasının İngilizce genel adı nedir (Association ...)?",
      answer: ["Association Rule Mining", "birliktelik kuralı madenciliği", "association rule mining", "birliktelik kurali madenciligi"],
      explanation: "İlişkilendirme genelde Birliktelik Kuralı Madenciliği (Association Rule Mining) olarak bilinir.",
      source: "RYZ108 Slayt 25, 54"
    },
    {
      id: "ryz-q104",
      unit: "denetimsiz",
      type: "mcq",
      difficulty: 1,
      q: "Apriori algoritması ne işe yarar?",
      options: [
        "Birliktelik kuralları oluşturur; 'tüketiciler hangi ürünleri birlikte alıyor' sorusunu yanıtlar",
        "Sürekli değer tahmin eder",
        "Veriyi normalize eder",
        "Aykırı değerleri siler"
      ],
      answer: 0,
      explanation: "Apriori, öğeler arası bağımlılığa dayanarak birliktelik kuralları oluşturan en eski algoritmalardandır.",
      source: "RYZ108 Slayt 55"
    },
    {
      id: "ryz-q105",
      unit: "denetimsiz",
      type: "truefalse",
      difficulty: 2,
      q: "Apriori algoritmasında bir müşteri sepetine filtre kahve eklediğinde algoritma o müşteriye kahve kupaları tavsiye edebilir.",
      answer: true,
      explanation: "Apriori, birlikte alınan ürünlere göre tavsiye yapar (örnek: filtre kahve → kahve kupası).",
      source: "RYZ108 Slayt 55"
    },
    {
      id: "ryz-q106",
      unit: "denetimsiz",
      type: "fill",
      difficulty: 2,
      q: "Apriori kelimesindeki 'Priori' ne anlama gelir?",
      answer: ["önce", "once", "önceki", "önceden"],
      explanation: "Priori kelimesi 'önce' anlamına gelir; algoritma kendinden önceki ürünlere göre sonuç çıkarır.",
      source: "RYZ108 Slayt 55"
    },
    {
      id: "ryz-q107",
      unit: "denetimsiz",
      type: "mcq",
      difficulty: 2,
      q: "Kümeleme algoritmaları temelde ne yapar?",
      options: [
        "Verileri etiketlerine göre önceden tanımlı sınıflara ayırır",
        "Verileri benzerlik ve farklılık temelinde gruplara ayırır, doğal kümeleri bulur",
        "Sürekli değer tahmin eder",
        "Birliktelik kuralları üretir"
      ],
      answer: 1,
      explanation: "Kümeleme, verileri benzerlik/farklılık temelinde gruplara ayırır ve doğal kümeleri bulur.",
      source: "RYZ108 Slayt 26"
    },
    {
      id: "ryz-q108",
      unit: "denetimsiz",
      type: "categorize",
      difficulty: 2,
      q: "Aşağıdaki denetimsiz öğrenme algoritmalarını ait oldukları göreve göre sınıflandırın.",
      categories: ["Kümeleme", "İlişkilendirme"],
      items: [
        { text: "K-Means", cat: "Kümeleme" },
        { text: "Hiyerarşik Kümeleme", cat: "Kümeleme" },
        { text: "Apriori", cat: "İlişkilendirme" }
      ],
      explanation: "K-Means ve Hiyerarşik kümeleme görevidir; Apriori ise ilişkilendirme (birliktelik kuralı) algoritmasıdır.",
      source: "RYZ108 Slayt 26, 55"
    },
    {
      id: "ryz-q109",
      unit: "temeller",
      type: "mcq",
      difficulty: 3,
      q: "Aşağıdakilerden hangisi denetimsiz öğrenmeye ait iki ana görevdir?",
      options: [
        "Regresyon ve Sınıflandırma",
        "Kümeleme ve İlişkilendirme",
        "Doğrulama ve Test",
        "Normalizasyon ve Standardizasyon"
      ],
      answer: 1,
      explanation: "Denetimsiz öğrenmenin iki ana görevi kümeleme ve ilişkilendirmedir.",
      source: "RYZ108 Slayt 24"
    },
    {
      id: "ryz-q110",
      unit: "metrikler",
      type: "calc",
      difficulty: 3,
      q: "TP=200, TN=100, FP=20, FN=10 iken Gerçek Var (pozitif) toplamı kaçtır? (TP+FN)",
      answer: 210,
      tolerance: 0,
      explanation: "Gerçek varlar = TP+FN = 200+10 = 210 (Recall'ın paydası).",
      source: "RYZ108 Slayt 12"
    },
    {
      id: "ryz-q111",
      unit: "metrikler",
      type: "calc",
      difficulty: 3,
      q: "TP=200, TN=100, FP=20, FN=10 iken Gerçek Yok (negatif) toplamı kaçtır? (TN+FP)",
      answer: 120,
      tolerance: 0,
      explanation: "Gerçek yoklar = TN+FP = 100+20 = 120 (Specificity ve FPR'nin paydası).",
      source: "RYZ108 Slayt 13, 14"
    },
    {
      id: "ryz-q112",
      unit: "temeller",
      type: "categorize",
      difficulty: 2,
      q: "Aşağıdaki problemleri Sınıflandırma mı Regresyon mu olduğuna göre ayırın.",
      categories: ["Sınıflandırma", "Regresyon"],
      items: [
        { text: "Nota göre geçti/kaldı tahmini", cat: "Sınıflandırma" },
        { text: "Hava durumuna göre şemsiye al/alma", cat: "Sınıflandırma" },
        { text: "Bir evin fiyatını (sürekli değer) tahmin etme", cat: "Regresyon" },
        { text: "Kategorik bir etiket atama", cat: "Sınıflandırma" },
        { text: "Sürekli sayısal çıktı tahmini", cat: "Regresyon" }
      ],
      explanation: "Kategorik/nitel çıktı → sınıflandırma; sürekli sayısal çıktı → regresyon.",
      source: "RYZ108 Slayt 5, 7, 8, 19"
    },
    {
      id: "ryz-q113",
      unit: "metrikler",
      type: "fill",
      difficulty: 2,
      q: "Hassasiyet (Sensitivity) metriğinin sıklıkla kullanılan diğer İngilizce adı nedir?",
      answer: ["recall", "Recall", "duyarlılık", "anma"],
      explanation: "Sensitivity, Recall (duyarlılık) ile aynı metriktir: TP/(TP+FN).",
      source: "RYZ108 Slayt 12, 5"
    },
    {
      id: "ryz-q114",
      unit: "denetimsiz",
      type: "truefalse",
      difficulty: 1,
      q: "Hiyerarşik kümeleme, veriler arasındaki ilişkileri görselleştirmek için uygundur ve ağaç benzeri bir yapı oluşturur.",
      answer: true,
      explanation: "Hiyerarşik kümeleme ağaç benzeri hiyerarşi ile ilişkileri görselleştirmeye uygundur.",
      source: "RYZ108 Slayt 51, 53"
    },
    {
      id: "ryz-q115",
      unit: "veri",
      type: "order",
      difficulty: 3,
      q: "Çapraz geçerlik (Cross Validation) temel akışını doğru sıraya koyun.",
      items: [
        "Mevcut veri kümesi ikiye bölünür (train ve test)",
        "Sistem, eğitim algoritması ile eğitim kümesini öğrenir",
        "Eğitilen sistemin başarısı test kümesi üzerinde hesaplanır"
      ],
      explanation: "Önce veri train/test olarak bölünür, model eğitim setiyle öğrenir, başarı test setinde ölçülür.",
      source: "RYZ108 Slayt 37"
    },
    {
      id: "ryz-q116",
      unit: "metrikler",
      type: "calc",
      difficulty: 3,
      q: "Bir sınıflandırma modelinde TP=50, TN=30, FP=10, FN=10 ise Doğruluğu hesaplayın. Doğruluk=(TP+TN)/TOPLAM.",
      answer: 0.8,
      tolerance: 0.01,
      explanation: "Doğruluk=(50+30)/100=80/100=0,80. Toplam=50+30+10+10=100.",
      source: "RYZ108 Slayt 10"
    },
    {
      id: "ryz-q117",
      unit: "regresyon",
      type: "categorize",
      difficulty: 2,
      q: "Aşağıdaki algoritmaları görev türüne göre sınıflandırın.",
      categories: ["Regresyon (sürekli tahmin)", "Sınıflandırma"],
      items: [
        { text: "Doğrusal Regresyon", cat: "Regresyon (sürekli tahmin)" },
        { text: "Lojistik Regresyon", cat: "Sınıflandırma" },
        { text: "Destek Vektör Makineleri", cat: "Sınıflandırma" }
      ],
      explanation: "Doğrusal regresyon sürekli değer tahmin eder; lojistik regresyon ve SVM sınıflandırma algoritmalarıdır.",
      source: "RYZ108 Slayt 39, 42, 43"
    },
    {
      id: "ryz-q118",
      unit: "metrikler",
      type: "truefalse",
      difficulty: 1,
      q: "AUC'nin büyük olması modelin başarılı, küçük olması ise başarısız olduğu anlamına gelir.",
      answer: true,
      explanation: "AUC alanı büyükse model başarılı, küçükse başarısızdır.",
      source: "RYZ108 Slayt 17"
    }
  ]
};
