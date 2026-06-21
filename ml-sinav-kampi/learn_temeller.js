/* ============================================================
   learn_temeller.js — "MAKİNE ÖĞRENMESİ TEMELLERİ" birimi
   Zengin, görselli ve örnekli konu anlatımı. learn.js'i ezer.
   Kapsanan slaytlar: 2,3,4,5,6,7,8,19,23,24,29,30,31,36,43
   ============================================================ */
window.SYLLABUS = window.SYLLABUS || {};
window.SYLLABUS["temeller"] = {
  unit: "temeller",
  intro: "Makine öğrenmesi, bilgisayarların açıkça programlanmadan, verilerdeki örüntüleri (pattern) keşfederek öğrenmesini sağlayan yapay zeka dalıdır. Bu birimde sıfırdan başlıyoruz: ML nedir, üç ana öğrenme türü (Denetimli, Denetimsiz, Pekiştirmeli), iki temel problem tipi (Sınıflandırma ve Regresyon), modelin tuzağı olan aşırı öğrenme (overfitting) ve başarıyı dürüstçe ölçmenin yolu olan doğrulama (validation). Bol benzetme, bol görsel ve çözümlü örneklerle, sınava eksiksiz hazır olacaksın.",
  chapters: [

    /* ============================================================
       BÖLÜM 1 — Makine Öğrenmesi Nedir? (Slayt 2, 3)
       ============================================================ */
    {
      id: "tem-ml-nedir",
      title: "Makine Öğrenmesi Nedir? (Örüntü & Deneyim)",
      slides: [2, 3],
      teach: [
        {
          kind: "text",
          html: "<b>Makine öğrenmesi (Machine Learning - ML)</b>, verilerden <b>otomatik olarak öğrenen</b> ve insan müdahalesi olmadan tahminler veya kararlar alabilen algoritmaların geliştirilmesini sağlayan bir <b>yapay zeka dalıdır</b>.<br><br>Klasik programlamada her kuralı biz tek tek yazarız (\"eğer not ≥ 50 ise geçti yaz\"). Makine öğrenmesinde ise kuralları biz yazmayız; sisteme bol <b>veri</b> veririz, sistem bu verilerdeki düzenleri <b>kendisi</b> keşfeder."
        },
        {
          kind: "text",
          html: "ML sistemlerinin üç temel özelliği vardır:<ul><li>Açıkça programlanmadan, verilerdeki <b>örüntüleri (pattern)</b> tanıyarak kendilerini geliştirirler.</li><li>Bilgisayar <b>deneyim kazandıkça</b> (yani daha çok veri gördükçe) performansını artırır.</li><li>Daha fazla ve kaliteli veriyle <b>daha doğru tahminler</b> yapar.</li></ul>"
        },
        {
          kind: "analogy",
          html: "Bir çocuğa kedi ile köpeği ayırt etmeyi düşün. Ona tek tek kural saymazsın (\"bıyık 6 cm ise kedidir\"). Sadece bol bol kedi ve köpek resmi gösterirsin; çocuk kafasında <b>örüntüyü</b> kendi kurar. ML de tıpkı böyle: kural değil, <b>örnek</b> gösterirsin. Çocuk ne kadar çok resim görürse o kadar az hata yapar — buna <b>deneyimle gelişmek</b> denir."
        },
        {
          kind: "visual",
          component: "mlmap",
          caption: "Makine öğrenmesi büyük bir ağaç gibidir: tepede ML, altında üç ana öğrenme türü ve onların alt dalları. Bu haritayı aklında tut; tüm birim bu yapının üzerine kurulu."
        },
        {
          kind: "terms",
          terms: [
            { term: "Örüntü (pattern)", def: "Verideki tekrar eden, anlamlı düzen. ML'in 'öğrendiği' şey aslında bu örüntülerdir; kuralları biz değil, model verideki örüntülerden çıkarır." },
            { term: "Yapay Zeka (AI)", def: "Makinelere 'akıllı' davranış kazandıran geniş alan. Makine öğrenmesi bu alanın bir alt dalıdır." },
            { term: "Veri (data)", def: "Modelin öğrenmek için kullandığı ham bilgi. Örnek: öğrenci notları, ev fiyatları, hava durumu kayıtları." },
            { term: "Deneyim", def: "Modelin gördüğü veri miktarı/çeşitliliği. Deneyim arttıkça (daha çok örnek) performans artar." }
          ]
        },
        {
          kind: "key",
          html: "Tek cümlede ML: <b>\"Kural yazmak yerine örnek göster; sistem verideki örüntüyü (pattern) kendisi öğrensin ve deneyimle gelişsin.\"</b> Sınavda 'açıkça programlanmadan öğrenir' ve 'örüntü/pattern tanır' ifadeleri anahtar kelimelerdir."
        }
      ]
    },

    /* ============================================================
       BÖLÜM 2 — Üç Öğrenme Türü (Slayt 3, 4, 24, 29, 30)
       ============================================================ */
    {
      id: "tem-uc-tur",
      title: "Üç Öğrenme Türü: Denetimli, Denetimsiz, Pekiştirmeli",
      slides: [3, 4, 24, 29, 30],
      teach: [
        {
          kind: "text",
          html: "Makine öğrenmesi, verinin <b>etiketli olup olmamasına</b> ve nasıl öğrenildiğine göre üç ana türe ayrılır:<ul><li><b>Denetimli Öğrenme</b> — etiketli veriyle</li><li><b>Denetimsiz Öğrenme</b> — etiketsiz veriyle</li><li><b>Pekiştirmeli Öğrenme</b> — ödül/ceza ile deneme-yanılma</li></ul>"
        },
        {
          kind: "text",
          html: "<b>1) Denetimli Öğrenme (Supervised Learning):</b> Modelin <b>etiketlenmiş</b> bir veri kümesiyle eğitildiği türdür. Her örnek için hem <b>girdi (X)</b> hem de doğru <b>çıktı (Y, etiket)</b> bellidir; yani girdi-çıktı ilişkisi önceden belirtilir. Model bu ilişkiyi öğrenir, sonra yeni girdiler için çıktıyı tahmin eder.<br><br>Denetimli öğrenmenin iki problem tipi vardır: <b>Sınıflandırma</b> ve <b>Regresyon</b> (sonraki bölümler)."
        },
        {
          kind: "text",
          html: "<b>2) Denetimsiz Öğrenme (Unsupervised Learning):</b> Modelin <b>etiketlenmemiş</b> veriyle eğitildiği türdür. Doğru cevaplar (etiketler) yoktur; model veri setindeki <b>yapıları ve desenleri</b> kendisi bulur.<ul><li><b>Kümeleme (clustering):</b> Benzer örnekleri gruplara ayırma (örn. K-Means, Hiyerarşik Kümeleme).</li><li><b>İlişkilendirme (association):</b> Veriler arasındaki birliktelikleri bulma (örn. pazar sepeti analizi: 'X alan Y'yi de alır').</li></ul>"
        },
        {
          kind: "text",
          html: "<b>3) Pekiştirmeli Öğrenme (Reinforcement Learning):</b> Bir <b>ajanın</b>, kendi eylemlerinden aldığı geri bildirimleri (<b>ödül/ceza</b>) kullanarak <b>deneme-yanılma</b> yoluyla maksimum ödüle ulaşmayı hedeflediği türdür.<br><br>Burada öğretici, beklenen sonucu tam söyleyemez; sadece üretilen sonuca <b>\"doğru/yanlış\"</b> şeklinde fikir verir. Örnek yöntemler: <b>Boltzmann makinesi</b> (olasılıksal dağılım öğrenen stokastik sinir ağı), <b>LVQ</b> (Learning Vector Quantization), <b>Genetik algoritma</b> (doğadaki evrime benzer en iyileştirme yöntemi). Karar verme algoritmaları: Q-Learning, TD-Learning, R-Learning."
        },
        {
          kind: "analogy",
          html: "Üçünü bir okul benzetmesiyle düşün:<br><b>Denetimli</b> = cevap anahtarı olan öğretmen: her soruya doğru cevabı gösterir, sen o ilişkiyi öğrenirsin.<br><b>Denetimsiz</b> = cevap anahtarı yok; bir kutu karışık fotoğrafı kimse etiketlemeden sana verir, sen benzeyenleri kendin gruplarsın.<br><b>Pekiştirmeli</b> = bisiklete binmeyi öğrenmek: kimse adım adım söylemez, düşersen 'ceza', dengede kalırsan 'ödül'; deneme-yanılma ile öğrenirsin."
        },
        {
          kind: "visual",
          component: "iconRow",
          caption: "Üç öğrenme türü tek bakışta: etiketli mi, etiketsiz mi, yoksa ödül/ceza ile mi?",
          terms: [
            { term: "Denetimli", def: "etiketli veri girdi cikti ile sinif/sayi tahmini" },
            { term: "Denetimsiz", def: "etiketsiz veri kumeleme ve iliskilendirme" },
            { term: "Pekistirmeli", def: "ajan odul ceza deneme yanilma ile ogrenir" }
          ]
        },
        {
          kind: "compare",
          title: "Denetimli vs Denetimsiz",
          colA: "Denetimli",
          colB: "Denetimsiz",
          rows: [
            { label: "Veri", a: "Etiketli (girdi + doğru çıktı)", b: "Etiketsiz (sadece girdi)" },
            { label: "Amaç", a: "Girdi→çıktı ilişkisini öğrenmek, tahmin", b: "Verideki gizli yapı/grupları bulmak" },
            { label: "Görevler", a: "Sınıflandırma, Regresyon", b: "Kümeleme, İlişkilendirme" },
            { label: "Örnek", a: "Nota göre geçti/kaldı; özelliğe göre ev fiyatı", b: "Müşterileri davranışa göre gruplama" },
            { label: "Algoritma", a: "Lojistik Reg., Karar Ağacı, SVM, KNN, Doğrusal Reg.", b: "K-Means, Hiyerarşik Kümeleme, Apriori" }
          ]
        },
        {
          kind: "terms",
          terms: [
            { term: "Label (etiket)", def: "Bir örneğin doğru çıktı değeri. Örn. bir e-postanın 'spam' / 'spam değil' etiketi. Denetimli öğrenmede etiketler vardır, denetimsizde yoktur." },
            { term: "Denetimli (Supervised)", def: "Etiketli veriyle eğitim; girdi-çıktı ilişkisi bellidir." },
            { term: "Denetimsiz (Unsupervised)", def: "Etiketsiz veriyle eğitim; model yapıları/desenleri kendisi keşfeder (kümeleme, ilişkilendirme)." },
            { term: "Pekiştirmeli (Reinforcement)", def: "Ajan, ödül/ceza geri bildirimiyle deneme-yanılma yaparak maksimum ödülü hedefler." }
          ]
        },
        {
          kind: "key",
          html: "Ayırt etme kuralı: <b>Etiket var mı?</b> Varsa Denetimli. Yoksa ve grup/birliktelik arıyorsan Denetimsiz. <b>Ödül/ceza ile deneme-yanılma</b> varsa Pekiştirmeli. Pekiştirmeli için anahtar kelimeler: <b>ajan, ödül/ceza, deneme-yanılma</b>; örnekler: Boltzmann, LVQ, genetik algoritma."
        }
      ]
    },

    /* ============================================================
       BÖLÜM 3 — Sınıflandırma (Slayt 5, 6, 7, 8)
       ============================================================ */
    {
      id: "tem-siniflandirma",
      title: "Sınıflandırma: Nitel Çıktı ve f: X→Y",
      slides: [5, 6, 7, 8],
      teach: [
        {
          kind: "text",
          html: "<b>Sınıflandırma (classification)</b>, giriş verisine ait çıktıların <b>nitel (kategorik)</b> olduğu durumlarda kullanılır. Amaç: her veri örneğinin <b>hangi sınıfa ait</b> olduğunu belirlemektir. Çıktı sayı değil, bir <b>etikettir</b>: 'geçti/kaldı', 'spam/değil', 'hasta/sağlam' gibi."
        },
        {
          kind: "text",
          html: "Sağdaki gibi bir veri kümesinde amaç, <b>X girdisine</b> karşılık <b>Y etiket (label)</b> değerini üretmektir. Öyle bir <b>f : X → Y</b> sınıflandırma fonksiyonu tanımlanmalıdır ki, <b>en az hata</b> ile sınıflandırma yapılabilsin.<br><br>Sınıflandırma bir <b>denetimli öğrenme</b> problemidir (eğitimde etiketler bellidir). Başarı metrikleri: <b>Accuracy, Precision, Recall, F1 Score, AUC-ROC</b>."
        },
        {
          kind: "example",
          title: "Örnek 1 — Öğrenci Notuna Göre Geçti/Kaldı",
          steps: [
            "Girdi (X): öğrencinin sınav notu. Çıktı (Y): 'Geçti' veya 'Kaldı' (nitel → sınıflandırma).",
            "Eğitim verisi (etiketli): {45 → Kaldı, 80 → Geçti, 30 → Kaldı, 95 → Geçti, 55 → Geçti}.",
            "Model bu örneklerden bir f: X→Y öğrenir; ör. 'not ~50 civarı bir eşikten büyükse Geçti'.",
            "Yeni öğrenci gelir: not = 72. Model tahmini → 'Geçti'.",
            "Önemli: çıktı bir kategori (sınıf), sayı değil. Bu yüzden bu bir SINIFLANDIRMA problemidir."
          ]
        },
        {
          kind: "example",
          title: "Örnek 2 — Hava Durumuna Göre Şemsiye Al/Alma",
          steps: [
            "Girdi (X): hava durumu özellikleri (yağış olasılığı, bulutluluk, nem).",
            "Çıktı (Y): 'Şemsiye al' veya 'Alma' — iki sınıflı (nitel) bir karar.",
            "Etiketli geçmiş veri: {yağmurlu → Al, güneşli → Alma, çok bulutlu → Al, açık → Alma}.",
            "Model f: X→Y'yi öğrenir: yağış olasılığı yüksekse 'Al'.",
            "Tahmin: bugün %70 yağış → 'Şemsiye al'. Yine çıktı bir kategori olduğu için sınıflandırmadır."
          ]
        },
        {
          kind: "analogy",
          html: "Sınıflandırma, gelen postaları <b>kutulara ayırmaya</b> benzer: 'fatura', 'reklam', 'kişisel'. Her zarfı doğru kutuya (sınıfa) koymaya çalışırsın. f: X→Y fonksiyonu da zarfa (X) bakıp doğru kutuyu (Y) seçen kuraldır; amacın en az yanlış kutu seçmektir."
        },
        {
          kind: "key",
          html: "Sınıflandırmanın imzası: <b>çıktı niteldir (kategori/etiket)</b> ve <b>f: X → Y</b> ile en az hatayla sınıf atanır. Sınava not: 'geçti/kaldı' ve 'şemsiye al/alma' klasik sınıflandırma örnekleridir; çıktının kategori olması onu regresyondan ayırır."
        }
      ]
    },

    /* ============================================================
       BÖLÜM 4 — Regresyon + Sınıflandırma vs Regresyon (Slayt 19, 23)
       ============================================================ */
    {
      id: "tem-regresyon",
      title: "Regresyon: Sürekli Çıktı ve Sınıflandırma ile Farkı",
      slides: [19, 23],
      teach: [
        {
          kind: "text",
          html: "<b>Regresyon (regression)</b>, bağımlı ve bağımsız değişkenler arasındaki ilişkiyi tanımlayan ve <b>sürekli bir çıktı (sayı)</b> tahmin etmeye yönelik bir makine öğrenmesi tekniğidir.<br><br>Sınıflandırmadan farkı: çıktı bir kategori değil, bir <b>sayıdır</b>. Örn. ev fiyatı (1.250.000 TL), sıcaklık (23.4°C), bir öğrencinin alacağı tam not (78.5)."
        },
        {
          kind: "text",
          html: "Regresyon da bir <b>denetimli öğrenme</b> problemidir (eğitimde gerçek sayısal çıktılar bellidir). Başarı, tahmin ile gerçek sayı arasındaki <b>hata</b> ile ölçülür:<ul><li><b>MSE</b> (Mean Squared Error) — hata karelerinin ortalaması</li><li><b>RMSE</b> (Root Mean Squared Error) — MSE'nin karekökü</li><li><b>MAE</b> (Mean Absolute Error) — mutlak hataların ortalaması</li><li><b>R² (R-Kare)</b> — bağımsız değişkenlerin hedefi açıklama oranı; <b>1'e</b> yaklaştıkça model ilişkiyi o kadar iyi açıklar.</li></ul>"
        },
        {
          kind: "example",
          title: "Örnek 3 — Ev Özelliklerine Göre Fiyat Tahmini (Regresyon)",
          steps: [
            "Girdi (X): evin özellikleri — metrekare, oda sayısı, semt, bina yaşı.",
            "Çıktı (Y): evin fiyatı (TL) — SÜREKLİ bir sayı, kategori değil → REGRESYON.",
            "Etiketli veri: {120 m² → 2.4 M TL, 80 m² → 1.6 M TL, 150 m² → 3.1 M TL ...}.",
            "Model özellikler ile fiyat arasındaki ilişkiyi öğrenir (ör. doğrusal regresyon).",
            "Yeni ev: 100 m², 3 oda → tahmini fiyat ≈ 2.0 M TL. Çıktı bir sayı olduğu için bu regresyondur."
          ]
        },
        {
          kind: "visual",
          component: "linreg",
          caption: "Regresyonda model, noktalar arasından geçen bir doğru/eğri uydurur (ŷ = b + w·x) ve amaç hata karelerini en aza indirmektir. Yeni bir x için doğrunun verdiği y, tahminimizdir."
        },
        {
          kind: "compare",
          title: "Sınıflandırma vs Regresyon",
          colA: "Sınıflandırma",
          colB: "Regresyon",
          rows: [
            { label: "Çıktı tipi", a: "Nitel / kategorik (sınıf, etiket)", b: "Sürekli / sayısal (gerçek sayı)" },
            { label: "Örnek soru", a: "Bu öğrenci geçer mi, kalır mı?", b: "Bu öğrenci kaç puan alır?" },
            { label: "Tipik örnek", a: "Geçti/kaldı, spam/değil, şemsiye al/alma", b: "Ev fiyatı, sıcaklık, satış miktarı" },
            { label: "Metrikler", a: "Accuracy, Precision, Recall, F1, AUC-ROC", b: "MSE, RMSE, MAE, R²" },
            { label: "Algoritma", a: "Lojistik Reg., Karar Ağacı, SVM, KNN", b: "Doğrusal Reg., KNN, Karar Ağacı" }
          ]
        },
        {
          kind: "analogy",
          html: "Bir teraziyle düşün: <b>Sınıflandırma</b> sana 'ağır mı, hafif mi?' (iki kutu) der. <b>Regresyon</b> ise 'tam olarak 3,27 kg' der — kesin bir sayı. Aynı veriden hangi soruyu sorduğun, problemini sınıflandırma mı yoksa regresyon mu yaptığını belirler."
        },
        {
          kind: "key",
          html: "Ayırt etmenin altın kuralı: <b>Çıktı sayı mı, kategori mi?</b> Sayı (sürekli) → <b>Regresyon</b>. Kategori (nitel) → <b>Sınıflandırma</b>. Dikkat: 'Lojistik Regresyon' isminde regresyon geçse de bir <b>sınıflandırma</b> algoritmasıdır!"
        }
      ]
    },

    /* ============================================================
       BÖLÜM 5 — Overfitting & Validation (Slayt 31, 36)
       ============================================================ */
    {
      id: "tem-overfitting-validation",
      title: "Aşırı Öğrenme (Overfitting) ve Doğrulama (Validation)",
      slides: [31, 36],
      teach: [
        {
          kind: "text",
          html: "<b>Aşırı Öğrenme (Overfitting):</b> Modelin <b>eğitim veri setine çok fazla uyum sağladığı</b> durumdur. Model eğitim verisini adeta ezberler; eğitimdeki gürültüyü bile öğrenir. Sonuç: eğitimde çok başarılı görünür ama <b>yeni (görmediği) verilere genelleme yeteneği zayıflar</b>."
        },
        {
          kind: "analogy",
          html: "Overfitting, sınava çıkmış soruları <b>ezberleyen</b> öğrenci gibidir: aynı sorular çıkarsa tam puan alır, ama soru biraz değişince çakar — çünkü konuyu değil, soruları ezberlemiştir. İyi bir model konuyu (genel örüntüyü) öğrenir, soruları değil. Buna <b>genelleme</b> denir."
        },
        {
          kind: "text",
          html: "<b>Doğrulama (Validation):</b> Bir modelin <b>genelleme performansını</b> değerlendirmek için kullanılan süreçtir. Genellikle <b>ayrı bir doğrulama veri seti</b> kullanılarak gerçekleştirilir — yani modeli, eğitimde görmediği veriyle test ederiz.<br><br>Mantık: veriyi <b>eğitim (train)</b> ve <b>test</b> olarak ikiye böl. Model eğitim kümesiyle öğrenir; başarısı, hiç görmediği test kümesinde ölçülür. Böylece ezberleyip ezberlemediği (overfitting) ortaya çıkar."
        },
        {
          kind: "visual",
          component: "cvSplit",
          caption: "Veriyi eğitim ve test diye ayırırız. Model yalnızca eğitim kümesinden öğrenir; gerçek başarısı, hiç görmediği test kümesinde ölçülür. Overfitting'i yakalamanın yolu budur."
        },
        {
          kind: "visual",
          component: "flow",
          caption: "Doğrulama ile dürüst değerlendirme akışı",
          steps: [
            "Veriyi eğitim (train) ve test olarak böl",
            "Modeli yalnızca eğitim kümesiyle eğit",
            "Modeli hiç görmediği test kümesinde dene",
            "Test başarısı ölç → genelleme bunu gösterir",
            "Eğitim çok iyi ama test kötüyse: OVERFITTING"
          ]
        },
        {
          kind: "compare",
          title: "İyi Genelleme vs Overfitting",
          colA: "İyi Model (genelleme)",
          colB: "Overfitting (aşırı öğrenme)",
          rows: [
            { label: "Eğitim başarısı", a: "Yüksek", b: "Çok yüksek (ezber)" },
            { label: "Test başarısı", a: "Yüksek", b: "Düşük" },
            { label: "Yeni veri", a: "Doğru tahmin eder", b: "Yanılır, zayıf kalır" },
            { label: "Öğrendiği", a: "Genel örüntü", b: "Gürültü + ezber" }
          ]
        },
        {
          kind: "terms",
          terms: [
            { term: "Overfitting (aşırı öğrenme)", def: "Modelin eğitim verisine fazla uyum sağlaması; yeni verilere genelleme yeteneğinin azalması." },
            { term: "Validation (doğrulama)", def: "Modelin genelleme performansını, ayrı bir doğrulama/test veri setiyle ölçme süreci." },
            { term: "Genelleme", def: "Modelin daha önce görmediği yeni verilerde de doğru tahmin yapabilme yeteneği — ML'in asıl hedefi." },
            { term: "Eğitim / Test bölmesi", def: "Veriyi modelin öğrendiği (train) ve sınandığı (test) kısımlara ayırma; doğrulamanın temel adımı." }
          ]
        },
        {
          kind: "key",
          html: "Özet: <b>Overfitting = eğitimde harika, testte berbat</b> (ezber, zayıf genelleme). <b>Validation</b> bunu yakalamanın yoludur: modeli görmediği veriyle ölçeriz. İyi model, eğitim ve test başarısı <b>birbirine yakın ve yüksek</b> olandır."
        }
      ]
    },

    /* ============================================================
       BÖLÜM 6 — Denetimli Sınıflandırma Algoritmaları (Slayt 43, +42)
       ============================================================ */
    {
      id: "tem-siniflandirma-algoritmalari",
      title: "Denetimli Sınıflandırma Algoritmaları: Lojistik Reg., Karar Ağacı, SVM, KNN",
      slides: [43],
      teach: [
        {
          kind: "text",
          html: "Sınıflandırma probleminin (çıktı = sınıf) çözümünde kullanılan başlıca <b>denetimli</b> algoritmalar:<ul><li><b>Lojistik Regresyon</b></li><li><b>Karar Ağaçları</b></li><li><b>Destek Vektör Makineleri (SVM)</b></li><li><b>K En Yakın Komşuluk (KNN)</b></li></ul>Hepsi etiketli veriyle eğitilir ve yeni örneğe bir <b>sınıf</b> atar; yaklaşımları farklıdır."
        },
        {
          kind: "text",
          html: "<b>Lojistik Regresyon:</b> İsminde 'regresyon' geçse de bir <b>sınıflandırma</b> algoritmasıdır. Sınıflandırma için <b>Sigmoid (Lojistik) fonksiyonu</b> kullanır — 'S' şeklinde bir eğri. Sigmoid, çıktıyı <b>0 ile 1 arasına sıkıştırır</b> (bir olasılık gibi); örn. 0,5'ten büyükse 'Pozitif', küçükse 'Negatif' sınıfı seçilir."
        },
        {
          kind: "visual",
          component: "sigmoid",
          caption: "Lojistik regresyonun kalbi sigmoid fonksiyonudur: girdiyi 0–1 arasına sıkıştırır. 0,5 eşiğinin üstü bir sınıf, altı diğer sınıf olarak yorumlanır."
        },
        {
          kind: "text",
          html: "Diğer üç sınıflandırıcının mantığı:<ul><li><b>Karar Ağaçları:</b> Veriyi 'evet/hayır' soru zincirleriyle dallara böler; her yaprak bir sınıf kararıdır. Yorumlaması kolaydır (bir akış şeması gibi).</li><li><b>Destek Vektör Makineleri (SVM):</b> İki sınıfı en geniş <b>marjinle</b> ayıran bir sınır (hiperdüzlem) bulmaya çalışır; sınırı belirleyen kritik noktalara destek vektörü denir.</li><li><b>K En Yakın Komşuluk (KNN):</b> Yeni örneği, kendisine <b>en yakın k komşunun</b> çoğunluk sınıfına atar. 'Bana arkadaşını söyle, sana kim olduğunu söyleyeyim' mantığı.</li></ul>"
        },
        {
          kind: "analogy",
          html: "Bir öğrenciyi sınıflandırmanın dört yolu gibi düşün:<br><b>Lojistik Reg.</b> = bir olasılık skoru verir ('%80 geçer') ve eşikten karar çıkarır.<br><b>Karar Ağacı</b> = sırayla soru sorar ('Devam %70+ mi? Ödev verdi mi?') ve sonuca varır.<br><b>SVM</b> = geçenler ile kalanlar arasına en güvenli, en geniş çizgiyi çeker.<br><b>KNN</b> = 'Bu öğrenciye en benzeyen 5 kişi ne yaptı?' diye bakar, çoğunluğa uyar."
        },
        {
          kind: "compare",
          title: "Dört Sınıflandırıcı Bir Bakışta",
          colA: "Nasıl karar verir?",
          colB: "Akılda kalan",
          rows: [
            { label: "Lojistik Reg.", a: "Sigmoid ile olasılık, eşikle sınıf", b: "Adı regresyon ama sınıflandırma!" },
            { label: "Karar Ağacı", a: "Evet/hayır soru dalları", b: "Akış şeması gibi, yorumlanabilir" },
            { label: "SVM", a: "En geniş marjinli sınır (hiperdüzlem)", b: "Destek vektörleri sınırı belirler" },
            { label: "KNN", a: "En yakın k komşunun çoğunluğu", b: "Benzerine bak, ona uy" }
          ]
        },
        {
          kind: "key",
          html: "Sınava net: <b>Lojistik Regresyon, Karar Ağaçları, SVM ve KNN</b> denetimli <b>sınıflandırma</b> algoritmalarıdır. En sık tuzak soru: 'Lojistik regresyon bir regresyon mudur?' — Hayır, <b>sigmoid kullanan bir sınıflandırma</b> algoritmasıdır."
        }
      ]
    }

  ]
};
