# RYZ108 - Tüm Konular

> Bu belge **RYZ108 - Tüm Konular** sunumunun eksiksiz metin dökümüdür. Toplam 55 slayt.


---

## Slayt 1


### RYZ108 MAKİNE ÖĞRENMESİ

- Öğr. Gör. Melike özmen arslan

---

## Slayt 2


### Makine Öğrenmesi Nedir?

- Makine öğrenmesi (Machine Learning, ML), verilerden otomatik olarak öğrenen ve insan müdahalesi olmadan tahminler veya kararlar alabilen algoritmaların geliştirilmesini sağlayan bir yapay zeka dalıdır.
- Makine öğrenmesi sistemleri, açıkça programlanmadan, verilerdeki örüntüleri (pattern) tanıyarak kendilerini geliştirirler.
- Bilgisayar, deneyim kazandıkça performansını artırır ve daha doğru tahminler yapar.

---

## Slayt 3

- Makine Öğrenmesi
- Denetimli Öğrenme
- Denetimsiz Öğrenme
- Pekiştirmeli Öğrenme
- Regresyon
- Doğrusal Regresyon
- K En Yakın Komşuluk
- Karar Ağaçları
- Sınıflandırma
- Lojistik Regresyon
- K En Yakın Komşuluk
- Karar Ağaçları
- Destek Vektör Makineleri
- Hiyerarşik Kümeleme
- K Means
- Apriori Algoritması
- Karar Verme
- -Q Learning
- -TD Learning
- -R Learning

---

## Slayt 4


### Makine Öğrenmesi Terimleri

- Denetimli Öğrenme (Supervised Learning):
- Etiketlenmiş veri kümesine dayalı olarak modelin eğitildiği bir öğrenme türüdür. Girdi ve çıktı ilişkisi belirtilir.

---

## Slayt 5


### Makine Öğrenmesi Terimleri

- Sınıflandırma (classification): Giriş verisine ait çıktıların nitel olduğu durumlarda kullanılan yöntemlerin her veri örneğinin hangi sınıfa ait olduğunu belirlemesidir.
- Eğer ilgilendiğimiz problem sınıflandırma problemi ise; - Accuracy - Precision - Recall - F1 Score - AUC-ROC Curve

---

## Slayt 6


### Bir Sınıflandırma Örneği

- Sağdaki veri kümesinde amaç X girdisine karşı Y etiket (label) değerini üretmektir.
- Öyle bir f : XY sınıflandırma fonksiyonu tanımlanmalıdır ki en az hata ile sınıflandırma yapılabilsin.

---

## Slayt 7


### Sınıflandırma Örneği

- Öğrencilerin notlarına göre geçtiğini veya kaldığını belirleyen bir sınıflandırma

---

## Slayt 8


### Sınıflandırma Örneği

- Hava durumuna göre kişinin şemsiye alıp almayacağını tahmin etmek.

---

## Slayt 9


### Makine Öğrenmesi Performans Metrikleri

- Karmaşıklık/Hata Matrisi (Confusion Matrix) : Makine öğrenmesinde kullanılan sınıflandırma modellerinin performansını değerlendirmek için hedef niteliğe ait tahminlerin ve gerçek değerlerin karşılaştırıldığı hata matrisi sıklıkla kullanılmaktadır. Her ne olursa olsun sınıflandırma tahminleri şu dört değerlendirmeden birine sahip olacaktır:
- Doğruya doğru demek (True Positive – TP) DOĞRU
- Yanlışa yanlış demek (True Negative – TN) DOĞRU
- Doğruya yanlış demek (False Positive – FP) YANLIŞ
- Yanlışa doğru demek(False Negative – FN) YANLIŞ

---

## Slayt 10


### Makine Öğrenmesi Performans Metrikleri

- Accuracy (Doğruluk):
- Sınıflandırma problemlerinde kullanılan bir başarı metriğidir. Doğru olarak sınıflandırılan örneklerin oranını ifade eder.
- Yani; doğrular / toplam.
- Yani yoka yok vara var dediklerimizin toplama oranı. Ayrıca esas köşegenin toplama oranı da diyebiliriz.
- Doğruluk =  TN + TP / TOPLAM = 100+200 / 330 = 0,91

---

## Slayt 11


### Makine Öğrenmesi Performans Metrikleri

- Hata Oranı (Error Rate / Misclassification Rate): Yanlışların toplama oranıdır.
- Bu aynı zamanda 1’den doğruluk oranını çıkararak da elde edilir. Ayrıca yedek köşegenin toplama oranıdır da diyebiliriz.
- Hata Oranı = FN + FP / TOPLAM = 10 + 20 / 330 = 0,09
- Hata Oranı = 1 - Doğruluk = 1 - 0,91 = 0,09

---

## Slayt 12


### Makine Öğrenmesi Performans Metrikleri

- Sensivity (Hassasiyet ) : Doğru olarak tahmin edilen varların (TP) gerçek varlara oranı.
- Modelin doğruları bilme konusundaki etkinliği de denilebilir.
- Hassasiyet = TP / Gerçek Varlar = 200 / (200+10) = 0,95

---

## Slayt 13


### Makine Öğrenmesi Performans Metrikleri

- Yanlış Pozitif Oranı (False Positive Rate): Yok’a var deme oranı. Gerçekte yok olan ancak var diye tahmin edilen hastaların gerçekten hasta olmayanlara oranı. FP / Gerçek Yok Toplamı.
- Yanlış Pozitif Oranı = FP / Gerçek Yoklar = 20 / (100+20) = 0,17

---

## Slayt 14


### Makine Öğrenmesi Performans Metrikleri

- Specifity (Seçicilik): Yok’u tahmin etme etkinliği. Yok’a ne derece yok diyebilmiş yani.
- TN/ Gerçek Yok toplamı.
- Seçicilik = TN / Gerçek Yoklar = 100 / (100+20) = 0,83

---

## Slayt 15


### Makine Öğrenmesi Performans Metrikleri

- Precision (Kesinlik) : Doğru var olarak tahmin edilenlerin, toplam var tahminlere oranı. TP / (FP+TP)
- Kesinlik = TP/(FP+TP) = 200/220 = 0.91

---

## Slayt 16


### Makine Öğrenmesi Performans Metrikleri

- ROC Eğrisi :True Positive Rate ve False Positive Rate Receiver Operating Characteristic (ROC) grafiği çizimi ve Area Under Curve (AUC) hesaplamada kullanılır.
- Performans değerlendirmek için en yaygın kullanılan ölçümlerden biridir.
- Ve modelin tahmininde ne kadar iyi olduğunu açıklar.
- ROC farklı sınıflar için bir olasılık eğrisidir.

---

## Slayt 17


### Makine Öğrenmesi Performans Metrikleri

- Area Under Curve (AUC) : ROC eğrisinin altında kalan alandır. Alanın büyük olması modelin başarılı olduğu, küçük olması ise modelin başarısız olduğu anlamına gelir.
- Yani diğer bir ifadeyle buradaki sürekli çizgi ne kadar geniş bir alan kaplıyorsa modelin tahmin başarısı o kadar yüksek demektir.
- En kötü AUC 0,5 ve en iyi AUC 1,0'dır.

---

## Slayt 18


### Makine Öğrenmesi Performans Metrikleri

- Area Under Curve (AUC): AUC, modelin ayırt ediciliğini temsil eder. AUC yüksek ise model daha iyi tahmin yapmış demektir.

---

## Slayt 19


### Makine Öğrenmesi Terimleri

- Regresyon (Regression): Bağımlı ve bağımsız değişkenler arasındaki ilişkiyi tanımlayan ve sürekli bir çıktı tahmin etmeye yönelik bir makine öğrenmesi tekniğidir.
- Eğer ilgilendiğimiz problem regresyon problemi ise; - MSE (Mean Square Error) - RMSE (Root Mean Square Error) - MAE (Mean Absolute Error)

---

## Slayt 20


### Makine Öğrenmesi Performans Metrikleri

- MSE (Mean Squared Error):Regresyon problemlerinde kullanılan bir hata ölçüsüdür.
- Gerçek ve tahmin edilen değerler arasındaki farkların karelerinin ortalamasıdır.
- Formülü incelediğimizde;
- n gözlem sayısını
- y gerçek değerler
- ŷ ise tahmin edilen değerleri ifade etmektedir.
- (y- ŷ) : hatayı verir.

---

## Slayt 21


### Makine Öğrenmesi Performans Metrikleri

- RMSE (Root Mean Square Error) :MSE ‘nin karekökünün alınmış halidir.
- MSE hesabında gerçek değer ile tahmin edilen değer arasındaki fark sonucu negatiflik / pozitiflik bir ölçüm problemi ortaya çıkmaktadır.
- Bunu ortadan kaldırmak için hatanın kareleri alınır.
- Kare alındığı için bu sefer ölçümler yüksek değer çıkmaktadır, geri dönüşümün sağlanması için karekök işlemi yapılmalıdır. Bu işleme de RMSE denilir.

---

## Slayt 22


### Makine Öğrenmesi Performans Metrikleri

- MAE (Mean Absolute Error- Ortalama Mutlak Hata) :Bir diğer yöntem ise ortalama mutlak hatayı ifade eder. Bütün gözlem birimleri gezilerek, gerçek değer(y) ile model aracılığıyla tahmin edilen(ŷ) arasındaki farkın mutlak değerinin ortalamasının alınması işlemidir.

---

## Slayt 23


### Makine Öğrenmesi Performans Metrikleri

- R-Kare (R² - Coefficient of Determination) : Bağımsız değişkenlerin hedef değişken üzerindeki açıklama oranını temsil eder. 1'e yaklaşan bir R-Kare değeri, modelin bağımsız değişkenlerle hedef değişken arasındaki ilişkiyi ne kadar iyi açıkladığını gösterir.

---

## Slayt 24


### Makine Öğrenmesi Terimleri

- Denetimsiz Öğrenme (Unsupervised Learning): Etiketlenmemiş veri kümesine dayalı olarak modelin eğitildiği bir öğrenme türüdür. Model, veri setindeki yapıları ve desenleri öğrenir.(Kümeleme, ilişkilendirme)

---

## Slayt 25


### Makine Öğrenmesi Terimleri

- İlişkilendirme : Verileriniz arasındaki birlikteliği ortaya çıkarır. Bu algoritma genelde Birliktelik Kuralı Madenciliği (Association Rule Mining) olarak bilinir.
- Genellikle pazar sepeti analizi (market basket analysis) için yani hangi ürünler birlikte satın alınır, insanların birlikte ziyaret etme eğiliminde olduğu mağazalar/siteler, ürün çeşitliliği kararları, çapraz satış gibi alanlarda kullanıldığından alışveriş siteleri, mağazalar gibi satış yapılan alanlarda sıklıkla kullanılır.

---

## Slayt 26


### Makine Öğrenmesi Terimleri

- Kümeleme : Temel olarak, verileri aralarındaki benzerlik ve farklılık temelinde analiz ederek gruplara ayırır.
- Kümeleme algoritmaları verilerinizi işler ve verilerde varsa doğal kümeleri (grupları) bulur. Ayrıca algoritmalarınızın kaç kümeyi tanımlaması gerektiğini ayarlayabilirsiniz böylece grupların ayrıntı düzeyini ayarlamış olursunuz.
- Örn : K-means Kümeleme, Hiyerarşik Kümeleme

---

## Slayt 27


### Makine Öğrenmesi Performans Metrikleri

- Silhouette Skoru (Siluet Katsayısı) : Bu metrik, her bir veri noktasının bulunduğu yere ne kadar yakıştığına odaklanır.
- Bir nesnenin diğer kümelere kıyasla kendi kümesine ne kadar benzer olduğunu ölçer. Siluet -1 ile 1 arasında değişir; burada yüksek bir değer, nesnenin kendi kümesiyle iyi eşleştiğini, komşu kümelerle ise kötü eşleştiğini gösterir.
- Davies-Bouldin Index (Davies-Bouldin Endeksi): Küme merkezlerinin birbirlerine olan uzaklığını küme içi benzerlikle karşılaştıran ölçümdür. Düşük değerler, homojen ve birbirinden farklı kümelemeleri temsil eder.

---

## Slayt 28


### Makine Öğrenmesi Terimleri

- Denetimli – Denetimsiz Öğrenme Farkları

---

## Slayt 29


### Makine Öğrenmesi Terimleri

- Reinforcement (Pekiştirmeli/Takviyeli) Öğrenme :Bir ajanın kendi eylemlerinden ve deneyimlerinden aldığı geri bildirimleri kullanarak deneme yanılma yoluyla maksimum ödüle ulaşmayı hedefleyen makine öğrenmesi tekniğidir.

---

## Slayt 30


### Makine Öğrenmesi Terimleri

- Reinforcement (Takviyeli Öğrenme) : Bazen öğretici, sisteme beklenen sonucu tam söyleyemez. Ama sistemin ürettiği sonuç için “doğru/yanlış” şeklinde fikir belirtir.
- Boltzmann makinesi, (giriş veri seti üzerinde olasılıksal dağılımları öğrenebilen stokastik tekrarlayan bir sinir ağıdır)
- LVQ (Learning vector quantization) (n boyutlu bir vektörü bir vektörler setine haritalamaktatır (uydurmaktır))
- Genetik algoritma (doğada gözlemlenen evrimsel mekanizmalara benzer mekanizmalar kullanarak çalışan en iyileştirme yöntemidir)
- örnek olarak sayılabilir.

---

## Slayt 31


### Makine Öğrenmesi Terimleri

- Aşırı Öğrenme (Overfitting): Modelin eğitim veri setine çok fazla uyum sağladığı durumdur. Bu durum, modelin yeni verilere genelleme yapma yeteneğini azaltabilir.

---

## Slayt 32


### Veri Keşfi ve Analizi (Exploratory Data Analysis - EDA)

- Makine öğrenmesi projelerinde veri kalitesi, modelin başarısını doğrudan etkiler. Veriyi doğru şekilde hazırlamak, doğruluk, genelleme yeteneği ve model performansını artırır. Veri hazırlama sürecinin temel adımları:
- 1. Veri Toplama
- 2. Veri Analizi
- 3.Veri Temizleme
- 4.Veri Dönüştürme
- 5.Özellik seçimi ve Veri Mühendisliği
- 6.Veri Setini Eğitim ve Test olarak Bölme

---

## Slayt 33


### Veri Keşfi ve Analizi (Exploratory Data Analysis - EDA)

- Eksik Veri Kontrolü
- Eksik veya bozuk verilerin belirlenmesi ve bunların düzeltilmesi veya çıkarılması.
- Bu eksik veriler, NaN değerler, boş hücreler veya anlamsız değerler olabilir.
- Pandas kütüphanesi bu tür işlemleri yapmak için oldukça kullanışlıdır.
- Aykırı Değerlerin İşlenmesi (Outlier Handling):
- Aykırı değerler, genellikle istatistiksel analizler ve sınıflandırma modelleri için yanıltıcı olabilir. Bu nedenle, bu aykırı değerlerin tanımlanması ve düzeltilmesi veya çıkarılması önemlidir.
- Aykırı değerleri tespit etmek için istatistiksel yöntemler veya görselleştirme teknikleri kullanılabilir.
- Ardından, aykırı değerler işlenebilir veya değiştirilebilir.

---

## Slayt 34


### Veri Keşfi ve Analizi (Exploratory Data Analysis - EDA)

- Kategorik verilerin sayısal değerlere dönüştürülmesi.
- One-hot encoding veya label encoding gibi teknikler kullanılabilir.

---

## Slayt 35


### Veri Keşfi ve Analizi (Exploratory Data Analysis - EDA)

- Verilerin ölçeklerini dengede tutmak için normalizasyon veya standardizasyon yapılabilir.
- Özelliklerin aynı ölçekte olmasını sağlar ve modelin daha iyi performans göstermesine yardımcı olabilir.
- Normalizasyon : 0-1 arasında verileri yeniden ölçeklendirir.
- Standartlaştırma, verilerin ortalamasını 0 ve standart sapmasını 1 yaparak bir standart normal dağılıma dönüştürür.

---

## Slayt 36


### Makine Öğrenmesi Terimleri

- Doğrulama (Validation): Bir modelin genelleme performansını değerlendirmek için kullanılan bir süreçtir. Genellikle ayrı bir doğrulama veri seti kullanılarak gerçekleştirilir.

---

## Slayt 37


### Çapraz Geçerlik (Cross Validation)

- Bu temel prensibe dayanarak önerilmiş birkaç geçerlik yöntemi vardır. Ama hepsinde temel mantık aynıdır.
- Sistemin başarısını ölçebilmek için mevcut veri kümesi ikiye bölünür.
- Birisi eğitim için (train set) diğeri de sistemin hiç görmediği olası örnekleri temsilen (test set) kullanılır.
- Sistem, seçilen eğitim algoritması ile eğitim kümesini öğrenir. Eğitilen sistemin başarısı daha sonra test kümesi üzerinde hesaplanır.

---

## Slayt 38


### K Parçalı (K-fold) Çapraz Doğrulama

- K parçalıda veri, K adet kümeye ayrılır. Birisi test kümesi için ve diğer K-1 küme birlestirilip eğitim kümesi için seçilir.
- Bu işlem kümeler değiştirilerek K kez tekrarlanır. Genel basarı için K adet başarı değerinin ortalaması alınır.

---

## Slayt 39


### Denetimli Öğrenme Algoritmaları - Regresyon

- Doğrusal Regresyon:
- Bağımlı ve bağımsız değişkenler arasındaki ilişkiyi doğrusal olarak modeller.
- Bu kapsamda yᶦ değerleri bağımlı değişkeni, xᵢ değişkenleri bağımsız değişkenleri wᵢ ifadeleri ise ağırlıkları temsil eder. Bir doğrusal regresyon modelinin öğrenme olarak ifade ettiği kavramlar b sabiti ve wᵢ ağırlıklarıdır.

---

## Slayt 40


### Denetimli Öğrenme Algoritmaları - Regresyon

- Doğrusal Regresyon:
- b sabiti literatürde, ß (beta), intercept, bias olarak da ifade edilir.
- wᵢ ifadesi kat sayı yani ağırlıktır. Bazı kaynaklarda coefficient olarak da ifade edilir. Kat sayısı olduğu değişkeni ifade etmek ve etkilerini belirlemek için kullanılır.
- b sabiti ve wᵢ ağırlıkları, gerçek değerler ile tahmin edilen değerler arasındaki farkların karelerinin toplamını/ortalamasını minimum yapabilecek şekilde kullanılır.

---

## Slayt 41


### Denetimli Öğrenme Algoritmaları - Regresyon

- K En Yakın Komşuluk
- Karar Ağaçları

---

## Slayt 42


### Denetimli Öğrenme Algoritmaları - Sınıflandırma

- Lojistik Regresyon:
- Lojistik regresyon, isminde “regresyon” geçmesine rağmen bir sınıflandırma algoritmasıdır.
- Lojistik regresyon, sınıflandırma yapmak için Sigmoid (Lojistik) Fonksiyonu kullanır. Sigmoid fonksiyonu “S” şeklinde bir eğridir.
- Sigmoid fonksiyonu basitçe, verilerimizi 0 ve 1 arasına sıkıştırmak için kullanılan fonksiyondur. Bu fonksiyon sayesinde sınıflandırma yapabiliriz.

---

## Slayt 43


### Denetimli Öğrenme Algoritmaları - Sınıflandırma

- Karar Ağaçları:
- Destek Vektör Makineleri:
- K En Yakın Komşuluk:

---

## Slayt 44


### Denetimsiz Öğrenme Algoritmaları  - Kümeleme

- K Means Kümeleme: K-Means, denetimsiz öğrenmenin en bilinen algoritmalarından biridir. Amaç, verileri benzerliklerine göre K adet kümeye ayırmaktır.

---

## Slayt 45


### Denetimsiz Öğrenme Algoritmaları  - Kümeleme

- K Means Kümeleme: K-Means, denetimsiz öğrenmenin en bilinen algoritmalarından biridir. Amaç, verileri benzerliklerine göre K adet kümeye ayırmaktır.
- Algoritma genel olarak:
- 1. Küme sayısı belirlenir.
- 2. Rastgele k adet merkez seçilir.
- 3. Her bir gözlemin k merkezlerine olan uzaklıkları hesaplanır.
- 4. Her gözlem en yakın olduğu merkeze (yani kümeye) atanır.
- 5. Atama işlemlerinden sonra oluşan kümeler için tekrar merkez hesaplamaları yapılır.
- . Bu adımlar belirli bir iterasyon adedince tekrar edilir ve küme içi hata kareler toplamlarının toplamının (Total within-cluster variation) minimum olduğu durumda erişilen gözlemlerin kümelenme yapısı, nihai kümelenme olarak seçilir.

---

## Slayt 46


### Denetimsiz Öğrenme Algoritmaları  - Kümeleme

- K Means Kümeleme:
- Hızlıdır
- Basit yapıya sahiptir
- Büyük veri setlerinde etkilidir.
- Temel amaç, gözlem birimlerini kümelere ayırmaktır. Sınıflandırmadan farkı ise; Sınıflar çalışmanın başında belliydi ama K-Means yönteminde sınıf bilgisi yoktur.

---

## Slayt 47


### Denetimsiz Öğrenme Algoritmaları  - Kümeleme

- K Means Kümeleme:
- Kümeleme algoritması çıktısını genelde dairesel olarak hayal edebiliriz fakat kümelerin şekli dairesel olmak gibi bir zorunluluğu yoktur. Zaten düşününce de böylesi mükemmel bir veri seti bulmak gerçek hayatta pek de mümkün değildir.

---

## Slayt 48


### Denetimsiz Öğrenme Algoritmaları  - Kümeleme

- K Means Kümeleme:
- Bu yöntemde K sayısını belirleme önemli bir problemdir. Uygun K sayısını seçmek için çeşitli metotlar bulunmaktadır. Kısaca metotları açıklamak gerekirse;
- 1.Elbow metodu; noktaların her K değerine göre küme merkezine uzaklıklarının karesi toplamı hesaplanmaktadır. Bu değerlere göre her K değeri için grafik çizilmektedir. Grafik üzerinde toplamlar arasındaki farkın azalmaya başladığı dirsek noktası en uygun K değeri olarak belirlenmektedir

---

## Slayt 49


### Denetimsiz Öğrenme Algoritmaları  - Kümeleme

- K Means Kümeleme:
- 2. Silhoutte metodu; her K değeri için kümelerin farklılığına bakmaktadır. Oluşan kümeler için -1 ve 1 arasında değerler üretmektedir. 1'e en yakın K değeri en uygun olarak belirlenmektedir

---

## Slayt 50


### Denetimsiz Öğrenme Algoritmaları  - Kümeleme

- Hiyerarşik Kümeleme: Hiyerarşik kümeleme benzer nesneleri küme adı verilen gruplara ayıran bir algoritmadır. Bu algoritmada veri kümesi gözden geçirilerek veriler arasındaki benzerliğe dayalı olarak benzer bulunan verileri gruplayarak kümeler oluşturulur. Her küme birbirinden farklıdır ve her kümedeki veriler büyük ölçüde birbirine benzer. Yani kümelerin her biri için bir hiyerarşi oluşturulur

---

## Slayt 51


### Denetimsiz Öğrenme Algoritmaları

- Hiyerarşik Kümeleme:
- Kümelemelerden oluşan ağaç benzeri bir hiyerarşi oluşturarak, farklı ayrıntı düzeylerindeki ilişkileri gösterir.
- Veri noktalarını hiyerarşik bir yapıda kümelere ayırmak için kullanılan bir kümeleme yöntemidir. Veri noktaları bir ağaç yapısı olarak temsil edilir, her düğüm kümenin bir alt kümesini veya birleşimini temsil eder.

---

## Slayt 52


### Denetimsiz Öğrenme Algoritmaları  - Kümeleme

- Hiyerarşik Kümeleme:
- Hiyerarşik kümeleme analizi iki farklı yaklaşıma sahiptir:
- Aşağıdan Yukarıya (Agglomerative), Her veri noktası ayrı bir küme olarak başlar. Ardından, benzerlik veya uzaklık metrikleri kullanılarak en yakın iki küme birleştirilir. Bu birleştirme işlemi, benzerlik ölçütüne göre en yakın iki kümenin birleştirilmesiyle devam eder. Bu işlem, tüm veri noktaları tek bir küme haline gelene kadar tekrarlanır.
- Yukarıdan Aşağıya (Divisive), Tüm veri noktaları tek bir küme olarak başlar. Bu küme içerisindeki benzer olmayan veri noktaları alt kümelere ayrılır. Bu ayrıştırma işlemi, veri noktaları alt kümelere ayrılmayacak kadar farklı olana kadar tekrarlanır.

---

## Slayt 53


### Denetimsiz Öğrenme Algoritmaları  - Kümeleme

- Hiyerarşik Kümeleme:
- Küme sayısı baştan verilmek zorunda değildir
- Veriler arasındaki ilişkileri görselleştirmek için uygundur
- Daha küçük veri setlerinde tercih edilir

---

## Slayt 54


### Denetimsiz Öğrenme Algoritmaları  -  İlişkilendirme

- İlişkilendirme algoritması, verileriniz arasındaki birlikteliği ortaya çıkarır. Bu algoritma genelde Birliktelik Kuralı Madenciliği (Association Rule Mining) olarak bilinir. İlişkisel veritabanları, işlem veritabanları ve diğer depo biçimleri gibi çeşitli veritabanlarında bulunan veri kümelerinden sık sık meydana gelen kalıpları, bağıntıları veya ilişkileri gözlemlemeyi amaçlayan bir prosedürdür.
- Genellikle pazar sepeti analizi (market basket analysis) için yani hangi ürünler birlikte satın alınır, insanların birlikte ziyaret etme eğiliminde olduğu mağazalar/siteler, ürün çeşitliliği kararları, çapraz satış gibi alanlarda kullanıldığından alışveriş siteleri, mağazalar gibi satış yapılan alanlarda sıklıkla kullanılır.
- Yukarıdaki örnekte olduğu gibi bir ürünü alan kullanıcıların yanında aldıkları ürünlerin diğer kullanıcılara da tavsiye edilmesi İlişkilendirme algoritmasının en yaygın kullanım alanıdır.

---

## Slayt 55


### Denetimsiz Öğrenme Algoritmaları  -  İlişkilendirme

- Apriori algoritması:  Birliktelik kuralları oluşturmak için kullanılan en eski algoritmalardan biri olan Apriori Algoritması, öğeler arasındaki bağımlılığı hesaplamaya dayanır. Kısacası “tüketiciler hangi ürünleri birlikte alıyor ” sorusunun cevabını vermeye çalışmaktadır. Priori kelimesi önce anlamına gelmektedir ve kendinden önceki ürünlerin durumuna göre sonuçlar çıkarır ve bu sonuçları başka bir tüketici aynı ürünü aldığında ona tavsiye edilecek ürünleri gösterir.
- Diyelim ki bir e-ticaret sayfanız var ve oradan çeşitli ürünler satmaktasınız. Bir müşteri sepetine filtre kahve eklediğinde Apriori algoritması o müşteriye çeşitli kahve kupaları tavsiye edecektir. Böylece satışlarınız artarken karınız da artacaktır.
