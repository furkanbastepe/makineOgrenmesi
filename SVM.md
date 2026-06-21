# Destek Vektör Makineleri (Support Vector Machines - SVM)

> Bu belge **Destek Vektör Makineleri (Support Vector Machines - SVM)** sunumunun eksiksiz metin dökümüdür. Toplam 28 slayt.


---

## Slayt 1


### Makine Öğrenmesi

- Destek Vektör Makinaları

---

## Slayt 2


### SVM Nedir ?

- Algoritma Vladimir Vapnik tarafından geliştirilmiştir  ve şu anki standart halini  Corinna Cortes  ve Vladimir Vapnik’in geliştirmesiyle almıştır.
- Verileri analiz eden, modelleri, örüntüleri tanıyan, sınıflama ve regresyon analiz işlemlerinde kullanılan denetimli öğrenme yöntemleridir.
- Eğitim verilerini kullanarak, giriş ile çıkış arasında haritalama fonksiyonu üretir.
            - Sınıflama
            - Regresyon

---

## Slayt 3

- SVM,
- sınıflama problemlerini çözen,
- sınıf sınırlarının daha esnek gösterimini kullanan,
- otomatik karmaşıklık kontrolü kullanan,
- polinominal sürede bulunabilen tek bir global minimuma sahip olan makine öğrenmesi algoritmasıdır.
- Kullanımı kolaydır,
- Genelleme performansı iyidir,
- çok küçük değişikliklerle aynı algoritma kullanılarak birçok problem çözülebilir.

---

## Slayt 4


### SVM AMAÇ?

- Veriyi en iyi şekilde nasıl ayırırız?
- Hedef: İki sınıfı en güvenli mesafeyle ayırmak.
- SVM temel olarak ikili sınıflar içindir ama:
- One-vs-Rest (OvR)
- One-vs-One (OvO) stratejileriyle çoklu sınıflar desteklenir.

---

## Slayt 5


### SVM Temel Prensipleri


**[Şema / SmartArt]**

- Hiperdüzlem
- Marjin
- Destek Vektörleri


---

## Slayt 6


### Hiperdüzlem

- Hiperdüzlem, bir veri uzayında (n boyutlu bir ortamda), o uzayı ikiye bölen geometrik bir düzlemdir.

---

## Slayt 7


### Hiperdüzlem

- İki boyutlu bir uzayda hiperdüzlem bir çizgi, üç boyutlu bir uzayda ise bir düzlem olur.
- Genel olarak, n-boyutlu bir uzayda hiperdüzlem (n-1)-boyutludur.
- SVM, sınıflar arasında optimal bir ayrım sağlayacak hiperdüzlemi bulmak için eğitilir.
- Bu hiperdüzlem, veri noktalarının sınıflarını ayıran sınır olarak işlev görür.

---

## Slayt 8


### Hiperdüzlem Matematiksel İfadesi

- Bir hiperdüzlem :
- w: Ağırlık (vektör), düzlemin yönünü belirler
- x: Girdi vektörü (bir veri noktası)
- b: Bias (düzlemin orijine olan uzaklığını ayarlayan sabit)
- Denklem, tüm veri noktaları için bir karar sınırı (decision boundary) oluşturur.

---

## Slayt 9


### Marjin

- SVM, marjini maksimize etmeye çalışır, yani her iki sınıfa ait destek vektörleri arasındaki en geniş şeridi oluşturmayı amaçlar.
- Marjin ne kadar büyükse, sınıflandırıcının genelleme yeteneği genellikle o kadar iyi olur çünkü hiperdüzlemin rastgele gürültüden etkilenmeyeceği anlamına gelir.

---

## Slayt 10


### Marjin

- Marjin, SVM’in bulduğu hiperdüzleme (karar sınırı) en yakın veri noktalarına olan dik mesafedir.
- Sınıflar ile hiperdüzlem arasındaki boşluk.

---

## Slayt 11


### Soft Marjin ve Hard Marjin

- SVM modelleri iki tür marjin kullanabilir: "hard marjin" ve "soft marjin".
- Hard marjin, veri noktalarının tam olarak doğru sınıflandırıldığı ve hiçbir yanlış sınıflandırma yapılmadığı durumları ifade eder.
- Diğer yandan, soft marjin, bazı yanlış sınıflandırmalara izin verir ve genellikle daha gerçekçi senaryolarda kullanılır.
- Soft marjin, veri setindeki gürültüye veya ayrılabilir olmayan noktalara karşı daha dayanıklıdır.

---

## Slayt 12


### Destek Vektörü

- Destek vektörleri, SVM’de bulunan hiperdüzleme (karar sınırına) en yakın olan veri noktalarıdır.
- Bu noktalar, marjini belirleyen ve hiperdüzlemi konumlandıran örneklerdir.
- Geri kalan veriler, modelin karar sınırını doğrudan etkilemez!

---

## Slayt 13


### SVM Hiperparametreleri


---

## Slayt 14


### C değeri

- C değeri, SVM'nin karar sınırlarını ve marjinal hata toleransını ayarlamak için kullanılan en önemli hiperparametredir.
- Doğru C değeri, modelin genelleme performansını optimize etmek için önemlidir.

---

## Slayt 15


### C Değeri

- C ne kadar büyükse Margin o kadar dardır.
- Model overfit olursa C’yi azaltmamız gerekir.

---

## Slayt 16


### C değeri

- SVM, verileri sınıflara ayırmak için bir hiperdüzlem oluşturur. Ancak, genellikle veri setleri tam olarak ayrılamaz.
- Bu durumda, SVM, marjinal hata toleransını kabul eder. C değeri, bu toleransı kontrol eder.
- Daha yüksek C değerleri, SVM'nin marjinal hata toleransını azaltır ve bu da modelin eğitim veri setine daha fazla uymasını sağlar, ancak aşırı uyuma (overfitting) eğilimini artırabilir.
- Daha düşük C değerleri ise marjinal hata toleransını artırır, bu da modelin daha fazla esneklik kazanmasına ve aşırı uyum riskinin azalmasına neden olabilir, ancak eğitim veri setine daha az uymasına da yol açabilir.

---

## Slayt 17


### Kernel (Çekirdek Fonksiyonları)

- SVM’in amacı sınıfları bir düzlemle (hiperdüzlem) ayırmaktır. Fakat veriler her zaman doğrusal olarak ayrılabilir değildir. Bu durumlarda kernel fonksiyonu devreye girer:
- Kernel, veriyi daha yüksek boyutlara dönüştürerek, orada doğrusal hale getirir.

---

## Slayt 18


### Örnek :

- Diyelim ki elinizde iki tip meyve var: elmalar ve portakallar. Her meyvenin ağırlığı ve rengi gibi iki özelliği (feature) ölçtünüz.
- Bu özellikleri kullanarak bir SVM modeli eğiteceğiz ki bu model yeni gördüğü bir meyveyi elma mı yoksa portakal mı olduğunu tahmin edebilsin.

---

## Slayt 19


### Örnek :

- Veri Toplama ve Görselleştirme:
  - Elmanın ve portakalın ağırlığını ve rengini temsil eden iki özellik üzerinden bir veri seti oluşturulur.
  - Bu veriler iki boyutlu bir düzlemde görselleştirilir, burada bir eksen ağırlığı ve diğer eksen rengi temsil eder.

---

## Slayt 20

- 2. Modelin Eğitimi:
  - Elma ve portakal verileri SVM modeline verilir.
  - SVM, elmalar ve portakalları ayıran bir hiperdüzlem (bu durumda bir çizgi) bulmaya çalışır.
  - Bu çizgi, her iki meyve kategorisinin de en yakın örneklerine maksimum marjin (en büyük mesafe) ile ayrılacak şekilde seçilir. Bu en yakın örnekler "destek vektörleri" olarak adlandırılır.

---

## Slayt 21

- 3. Optimizasyon ve Marjin:
- Marjin, iki sınıfı ayıran çizginin her iki yanındaki boşluk olarak düşünülebilir.
- SVM, bu marjini maksimize edecek şekilde hiperdüzlemi (ayırma çizgisini) bulmaya çalışır.

---

## Slayt 22

- 4. Çekirdek Trick:
- Eğer veriler doğrusal olarak ayrılabilir değilse, yani bir çizgiyle ayrılamıyorsa, çekirdek trick devreye girer.
- Çekirdek fonksiyonları, özellikleri daha yüksek boyutlu bir uzaya taşıyarak, örneğin, basit bir çizgi yerine bir eğri veya düzlem kullanarak sınıfları ayırmayı mümkün kılar.

---

## Slayt 23

- 5. Modelin Test Edilmesi ve Tahminler:
  - Eğitim tamamlandıktan sonra, model yeni verilerle test edilir.
  - Model, yeni bir meyvenin özelliklerini alır ve bu meyvenin hangi marjinin içinde kaldığına bakarak elma mı yoksa portakal mı olduğunu tahmin eder.

---

## Slayt 24

  - 6. Sonuç ve İyileştirme:
  - Modelin performansı, gerçek etiketlerle tahminleri karşılaştırarak değerlendirilir.
  - Eğer model yeterince iyi performans göstermezse, hiperparametre ayarlama ve çekirdek seçimi gibi iyileştirmeler yapılabilir.

---

## Slayt 25


### Klasik Yaklaşımlardan Farkı

- Klasik yaklaşımda,
- Veriler bir dizi lineer parametreli fonksiyonlarla modellenir.
- Verilerin olasılık bileşenleri, normal olasılık dağılım kurallarıdır  ve Gaussian fonksiyonu kullanılmaktadır.
- Parametre tahminleri maksimum benzerlik yöntemine bağlıdır;  böylece uygulamalarda karesel hata toplamının minimizasyonu  işleminde maliyet azaltılır.
- Modele uygun yapı seçilir; örneğin, polinominal, HL nöron sayısı, fuzzy modeldeki kural sayısı.
- Tahmini hata sabit tutularak, eğitim verilerindeki hata minimize edilir.

> **Konuşmacı Notları:**

> Modern problems are high-dimensional, and if the underlying mapping is
> not very smooth the linear paradigm needs an exponentially increasing
> number of terms with an increasing dimensionality of the input space X
> (an increasing number of independent variables).
> 2. The underlying real-life data generation laws may typically be very far from
> the normal distribution and a model-builder must consider this difference
> in order to construct an effective learning algorithm.
> 3. From the first two points it follows that the maximum likelihood estimator
> (and consequently the sum-of-error-squares cost function) should be
> replaced by a new induction paradigm that is uniformly better, in order to
> model non-Gaussian distributions.

---

## Slayt 26

- SVM ise,
- Yüksek boyutlu ve dağınıktır.
- Klasik modellerin aksine parametreler önceden tanımlı değildir ve sayısı eğitim verilerine göre değişir.
- Eğitim verilerindeki hata değeri sabit tutularak, güven aralığı minimize edilir.

| MLP | RBF | SVM |
| --- | --- | --- |
|  |  |  |


---

## Slayt 27


### SVM ‘nin Özellikleri

- En etkili ve sınıflamada en çok kullanılan araçtır, diğer yöntemlere göre avantajları bulunmaktadır.
- Convex optimization problemine dayanmaktadır; quadratic kriterle lineer kısıtları bulunmaktadır. Bu nedenle lokal minima problemi bulunmamaktadır.
- Çok büyük veri setlerinde de başarılı olmaktadır.
- Kernel yöntemleriyle lineer olmayan sınıflamada da başarılıdır.

---

## Slayt 28


### SVM ‘nin Kısıtları

- Kernel fonksiyonunun seçimi,
- Büyük eğitim verileri olmasına rağmen test aşamasında hızı düşürmemek için az sayıda destek vektörlerinin seçilmesi,
- Çok sınıflı SVM sınıflayıcılar için optimal tasarım için araştırmalar devam etmektedir.
