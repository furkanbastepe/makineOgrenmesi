# K-En Yakın Komşu (K-Nearest Neighbors - KNN)

> Bu belge **K-En Yakın Komşu (K-Nearest Neighbors - KNN)** sunumunun eksiksiz metin dökümüdür. Toplam 52 slayt.


---

## Slayt 1

- K En Yakın Komşuluk Algoritması (KNN) K-Nearest Neighbors
- .

---

## Slayt 2


### K En Yakın Komşuluk Algoritması (KNN) K-Nearest Neighbors

- K-Nearest Neighbors (KNN), temel bir makine öğrenmesi algoritmasıdır.
- KNN, denetimli/gözetimli öğrenme kategorisine girer ve sınıflandırma ile regresyon problemlerini çözmek için kullanılabilir.
- KNN algoritması, öğrenme ve tahminleme sürecinde veri noktaları arasındaki benzerlik ölçüsünü kullanır.

---

## Slayt 3


### K En Yakın Komşuluk Algoritması (KNN) K-Nearest Neighbors


---

## Slayt 4

- Örneğin, yeni bir telefon almak istediğinizi ancak önce arkadaşlarınızla kullandıkları markaların neler olduğunu kontrol ederek karar vermek istediğinizi düşünün.
- Daha sonra en çok arkadaşınız olarak en çok satın alınan markayı satın alırsınız. Bu KNN'dir.

---

## Slayt 5


**[Şema / SmartArt]**

- KNN'nin temel özellikleri :
- Basitlik: KNN, basit bir algoritmadır ve anlaşılması kolaydır.
- Parametre Azlığı: KNN'nin temel parametresi, k değeridir. Ancak, uzaklık ölçüm metriği gibi diğer parametreler de etkili olabilir.
- Esneklik: KNN, herhangi bir öğrenme sürecine sahip olmadığı için, yeni veri noktaları eklemek veya modeli güncellemek kolaydır.
- Yüksek Hafıza İhtiyacı: KNN, tahmin yaparken tüm veri setine erişim gerektirir. Bu nedenle, büyük veri setleri için yüksek bellek ihtiyacına sahip olabilir.
- Etkinlik Problemleri: KNN, her tahmin yapmak için tüm veri setini tarar, bu da büyük veri setleri için yavaş çalışmasına neden olabilir.


---

## Slayt 6


### KNN Algoritması Parametreleri


**[Şema / SmartArt]**

- Uzaklık Ölçütleri
- Komşu Sayısı
- Ağırlıklandırma


---

## Slayt 7


### Uzaklık Ölçütleri


**[Şema / SmartArt]**

- Distance (Uzaklık): Tahmin edilecek noktanın diğer noktalara olan uzaklığı hesaplanır.
- Öklid Uzaklığı
- Manhattan Uzaklığı
- Minkowski Uzaklığı
- Chebyschev Uzaklığı
- Dilca Uzaklığı


---

## Slayt 8


### Öklid Uzaklığı

- Öklid uzaklığı, sınıflandırma ve kümeleme algoritmalarında en sık kullanılan uzaklık ölçütüdür.
- Öklid uzaklığı, iki nokta arasındaki doğrusal uzaklık olup herhangi iki nokta,
- P ve Q arasındaki Öklid uzaklığı P=(x1, x2, …xn) ve Q=(y1, y2, ..yn) olmak üzere, Eşitliğe göre hesaplanır.

---

## Slayt 9


### Manhattan Uzaklığı

- Manhattan uzaklığı, n boyutlu iki nokta arasındaki farkların mutlak değerlerinin toplamıdır.
- Herhangi iki nokta, P ve Q arasındaki Manhattan uzaklığı P=(x1, x2, …xn) ve Q=(y1, y2, ..yn) olmak üzere, Eşitliğine göre hesaplanır.

---

## Slayt 10


### Chebyschev Uzaklığı

- Chebyschev uzaklığı (maksimum değer uzaklığı), Minkowski uzaklığının, n→∞  olduğu özel durum olup iki nokta arasındaki farkların mutlak değerlerinin maksimumu olarak tanımlanmaktadır.
- Herhangi iki nokta, P ve Q arasındaki Chebyschev uzaklığı
- P=(x1, x2, …xn) ve Q=(y1, y2, ..yn) olmak üzere, Eşitliğe göre hesaplanır.

---

## Slayt 11


### Minkowski Uzaklığı

- Minkowski Uzaklığı, Öklid uzayında tanımlı bir dizidir.
- Öklid uzaklığı, Manhattan uzaklığı gibi uzaklık ölçütlerinin genelleştirilmiş halidir.
- Minkowski ölçütünün
  - p=2 olduğu özel durumu : Öklid uzaklığını,
  - p=1 olduğu özel durumu: Manhattan uzaklığının
  - n→∞ olduğu özel durum Chebyschev uzaklığını vermektedir.

---

## Slayt 12


### Dilca (Distance Learning in Categorical Attribute)

- Dilca uzaklığı, kategorik öznitelik değerleri arasındaki uzaklığı ölçümlemek için kullanılan iki aşamalı bir ölçüttür.
- Bu ölçütte öncelikle, simetrik belirsizlik katsayısı yöntemi kullanılarak öznitelik seçimi işlemi gerçekleştirilerek eş-oluşum tablosu oluşturulmaktadır.
- Ardından, eş-oluşum tablosu üzerinde koşullu olasılık ve Öklid uzaklığına dayalı hesaplama gerçekleştirilerek uzaklık ölçümlenmektedir.

---

## Slayt 13

- Bilgi kazancı, yüksek değer içeren özniteliklere karşı taraflıdır.
- Simetrik belirsizlik katsayısı (symmertrical uncertainty) (SU), bilgi kazancının (information gain) (IG) bu problemi ortadan kaldırmak için, bilgi kazancının X ve Y özniteliklerinin entropi değerleri toplamına bölünmesi ile eşitlik elde edilir.

### Simetrik belirsizlik katsayısı (SU)


---

## Slayt 14


### K Komşu Sayısı

- K-En Yakın Komşu (KNN) algoritmasında, 'k' değeri, her bir tahmin için kullanılacak olan komşu sayısını belirtir. Bir veri noktasını sınıflandırmak veya tahmin etmek için algoritma, bu noktanın 'k' en yakın komşusunu bulur ve bu komşuların etiketlerini veya değerlerini kullanarak tahmin yapar.
- Dolayısıyla, 'k' değeri, bir veri noktasının etrafındaki komşu sayısını kontrol eder.
- Örneğin, bir sınıflandırma problemi için, bir veri noktasının sınıfını tahmin etmek için 'k' en yakın komşusu alınır ve bu komşuların sınıfları arasında çoğunluk oyu kullanılarak tahmin yapılır. 'k' değeri, bu komşuların sayısını belirler.
- K=1 olursa overfit etme olasılığı çok yüksek olacaktır. Çok büyük olursa da çok genel sonuçlar verecektir.

---

## Slayt 15


### K Komşu Sayısı

- Regresyon problemleri için, 'k' en yakın komşunun etiketlerinin veya değerlerinin bir tür ortalama (genellikle ortalama veya medyan) alınarak tahmin yapılır.
- Yani, 'k' değeri KNN algoritmasında oldukça önemlidir çünkü algoritmanın performansını etkiler.
- 'k' değeri, genellikle uygulayıcı tarafından belirlenir ve deneme yanılma yöntemiyle ayarlanır.
- Bu değer, veri setine, problem türüne ve performans gereksinimlerine bağlı olarak değişebilir.

---

## Slayt 16

- K değerini seçerken şu faktörlere dikkat etmek önemlidir:
- Veri setinin büyüklüğü:
- Daha büyük veri setleri genellikle daha yüksek k değerlerini gerektirir.
- Küçük k değerleri, küçük veri setlerinde aşırı uydurmaya (overfitting) yol açabilirken, büyük k değerleri daha genelleyici sonuçlar üretebilir.

---

## Slayt 17

- K değerini seçerken şu faktörlere dikkat etmek önemlidir:
- 2. Modelin karmaşıklığı: Küçük k değerleri, modelin karmaşıklığını artırırken, büyük k değerleri modelin basitliğini artırır.
- Problem alanına ve veri setine bağlı olarak, karmaşıklık tercih edilen sonuçları elde etmek için ayarlanmalıdır.

---

## Slayt 18

- K değerini seçerken şu faktörlere dikkat etmek önemlidir:
- 3.Çapraz doğrulama (cross-validation):
- K değerini belirlemek için çapraz doğrulama yöntemleri kullanılabilir.
- Veri seti, eğitim ve doğrulama kümelerine ayrılır ve farklı k değerleri için modelin performansı değerlendirilir. Bu yöntem, en iyi k değerini seçmek için bir rehber sağlayabilir.

---

## Slayt 19

- K değerini seçerken şu faktörlere dikkat etmek önemlidir:
- 4.Problemin doğası: Veri setinin yapısına ve problem türüne bağlı olarak, optimal k değeri değişebilir.
- Örneğin, gürültülü veri setleri genellikle daha büyük k değerlerini gerektirirken, daha az gürültülü veri setleri için daha küçük k değerleri daha iyi sonuçlar verebilir.

---

## Slayt 20


### K-NN Nasıl Çalışır?

- K-NN'nin çalışması aşağıdaki algoritmaya dayanarak açıklanabilir:
- Adım-1: Komşuların K sayısını seçin
- Adım-2: K sayıda komşunun Öklid uzaklığını hesaplayın
- Adım-3: Hesaplanan Öklid mesafesine göre en yakın K komşuyu alın.
- Adım-4: Bu k komşu arasında, her kategorideki veri noktalarının sayısını sayın.
- Adım-5: Yeni veri noktalarını komşu sayısının maksimum olduğu kategoriye atayın.
- Adım-6: Model hazır.

---

## Slayt 21


*(Bu slayt yalnızca görsel/şema içeriyor; çıkarılabilir metin yok.)*


---

## Slayt 22

- Öncelikle komşu sayısını seçeceğiz yani k=5'i seçeceğiz.
- Daha sonra veri noktaları arasındaki Öklid mesafesini hesaplayacağız.

---

## Slayt 23

- Öklid Uzaklıkları hesaplama

---

## Slayt 24

- Öklid mesafesini hesaplayarak, A kategorisinde en yakın üç komşu ve B kategorisinde en yakın iki komşu olmak üzere en yakın komşuları elde ettik.
- Görebildiğimiz gibi en yakın 3 komşu A kategorisindedir, dolayısıyla bu yeni veri noktası A kategorisine ait olmalıdır.

---

## Slayt 25

- Örnek:
- “?” işareti ile gösterilen yeni test örneği  hangi sınıf?
- Kırmızı yıldız: Sınıf1 , Yeşil üçgen: Sınıf2
- k=3 için  Yeni test örneği = Sınıf2
- k=7 için  Yeni test örneği = Sınıf1

---

## Slayt 26


### Eşit Sayıda Komşu Olması

- Rastgele Seçim (Random Tie-breaking)
  - Eşitlik durumunda, rastgele bir sınıf seçme yöntemi kullanılabilir. Bu, eşit sayıda komşuya sahip iki sınıf varsa, birini rastgele seçmek anlamına gelir.
- Sınıfların Ağırlıklı Oylaması
  - Bazı durumlarda, komşuların mesafelerine dayalı ağırlıklı oylama kullanılabilir. Bu, daha yakın komşulara daha fazla ağırlık vererek karar verme sürecini etkiler. Eğer eşit sayıda komşu farklı sınıflara aitse, daha yakın olan komşuların sınıfı seçilebilir.

---

## Slayt 27


### Örnek

- K=3 seçilirse ?
- K=5 seçilirse ?

---

## Slayt 28

- Bu yöntemde sabit bir ‘k’ değeri yoktur!
- Optimal ‘k’ değerinin seçilmesi sınıflandırma başarısı için çok önemlidir.
- En uygun ‘k’ değerinin seçilmesi için : Çapraz Doğrulama (Cross Validation)
- Rasgele alt örnekleme çapraz doğrulama (random subsampling cross validation)

---

## Slayt 29

- Bu teknikte tüm örneklemler bir örüntü uzayında saklanır.
- Algoritma, bilinmeyen bir örneklemin hangi sınıfa dahil olduğunu belirlemek için örüntü uzayını araştırarak bilinmeyen örnekleme en yakın olan k örneklemi bulur.
- Yakınlık Öklid uzaklığı ile tanımlanır. Daha sonra, bilinmeyen örneklem, k en yakın komşu içinden en çok benzediği sınıfa atanır.
- k-en yakın komşu algoritması, aynı zamanda, bilinmeyen örneklem için bir gerçek değerin tahmininde de kullanılabilir.

---

## Slayt 30

- Eğitim örnekleri yerleştirildikleri özellik uzayında birer nokta ile temsil edilirler.
- Sınıfı bulunacak olan örnek bu uzayda kendine en yakın ve sayıca belirli bir örneklemin sınıf değerini alır.
- Söz konusu yöntem örnek kümedeki gözlemlerin her birinin , sonradan belirlenen bir gözlem değerine olan uzaklıklarının hesaplanması ve en küçük uzaklığa sahip k sayıda gözlemin seçilmesi esasına dayanmaktadır.
- Uzaklıkların hesaplanmasında, aşağıdaki öklit uzaklık formülü  ile hesaplanır.
- k değeri iyi belirlendiği takdirde olumlu sonuçlar verir.

---

## Slayt 31

- 1
- 2
- 3
- 4
- 5
- 6
- 1
- 2
- 3
- 4
- 5
- 6
- 1. Küme
- 2. Küme
- 3. Küme
- Her nokta kendisi ile en yakın kümeye yerleştirilmelidir.
- Eşik değeri (threshold - t), yeni bir komşuyu veya yeni bir kümeyi belirler.
- Tüm noktalar herhangi bir kümeye yerleştirilinceye kadar işlemlere devam edilir.

---

## Slayt 32

- Tüm noktalar için karşılıklı en yakın komşuluk değerleri Mutual Nearest Neighbor (MNV) belirlenir.
- Eşik değeri yerine en yakın komşu sayısı (k) belirlenir.
- 1
- 2
- 3
- 4
- 5
- 6
- 2’nin en yakın 3. komşusu 5.
- 5’in en yakın 3. komşusu 2.
- MNV(5,2) = MNV(2,5) = 3 + 3 = 6
- MNV = 2,3,…2k için kümeler oluşturulur.
- 2
- 3
- 2k

---

## Slayt 33

- A
- X2
- X1
- A   noktasına en yakın k=3  komşunun belirlenmesi.
- 5  adımda  k–en yakın komşu algoritması :
- K parametresi belirlenir.  Komşuluklarının sayısı belirlenir.
- Komşuluklara ait uzaklıklar hesaplanır.
- 3. Hesaplanan uzaklıklara göre satırlar sıralanarak bunlar içerisinden en küçük k tanesi belirlenir.
- 4 .Belirlenen satırların hangi sınıfa ait olduğu belirlenerek , tekrarlanan sınıf değeri seçilir.
- 5. Seçilen sınıf , tahmin edilmesi beklenen gözlem değerinin sınıfı olarak kabul edilir.

---

## Slayt 34

- Örnek Uygulama : Aşağıdaki tablo X, Y gözlem değerlerinden ve Z sınıf değerlerinden oluşmaktadır.  Bu gözlem değerleriyle yola çıkarak yeni verilen gözlem değerinin hangi sınıfa ait olduğunu k-en yakın komşu yöntemiyle bulalım.
- Yeni gözlem değeri  X=7, Y=3;
- Gözlem Değerleri
- İlk Adım :
- k= 4 için işlem yapalım.
- (Problem için (7,3) noktasına en yakın komşu değerleri arayalım. )

---

## Slayt 35

- İkinci  Adım :
- Öklit bağıntısına göre her bir gözlem değeri için uzaklıkları hesaplayalım.
- Öklid uzaklık formülü                                                        olduğu bilindiğine göre (7,3) noktasının tüm gözlem değerleri ile arasındaki uzaklıkları hesaplayalım.
- Hesaplanan değerler farklı bir
- tablo üzerinde gösterilirse…

---

## Slayt 36

- Gözlenen değerlerlerin (7,3)
- Noktasına olan uzaklığı…
- Üçüncü Adım :
- En küçük uzaklıkların belirlenmesi için satırlar sıralanarak en küçük k=4 tanesi belirleniyor.
- Belirlenen  dört nokta (7,3) noktasına en yakın değerlerdir.
- Uzaklık değerlerine göre k=4 komşu değerlerin belirlenmesi

---

## Slayt 37

- (7,3) Noktasına komşu olan en yakın dört
- gözlenen değerin  koordinat sistemi
- üzerindeki gösterimi

---

## Slayt 38

- Dördüncü Adım :  En küçük satırlara ilişkin sınıfların belirlenmesi işlemi gözlem
- değerlerinin içinde hangi değerin baskın olduğuna göre karar verilir.
- Beşinci Aşama  :
- Gözlem değerlerin içinde bir pozitif ve üç negatif değer olduğundan (7,3) noktasının sınıfı negatif olarak belirlenir.
- (7,3) noktasının
- Sınıfı Negatif olarak belirlenir.

---

## Slayt 39

- Ağırlıklı Oylama :
- Ağırlıklı oylama yöntemi gözlem değerleri için aşağıdaki bağıntıya göre ağırlıklı uzaklıkların hesaplanması yöntemine dayanır.
- Sınıf değerlerinin herbiri için uzaklıkların toplamı hesaplanarak ağırlıklı oylama değeri bulunur.
- En büyük ağırlıklı oylama değerine sahip olan sınıf değeri yeni gözlem değerinin ait olduğu sınıf olarak belirlenir.

---

## Slayt 40

- Örnek Uygulama :
- (0.10, 0.50) gözleminin hangi sınıfa dahil olduğunu k-en yakın komşu algoritmasından ve aşağıdaki tablodan yararlanarak bulunuz.
- İlk adım: K’nın belirlenmesi
- k=3 olarak seçersek (0.10, 0.50) gözlemine en yakın 3 komşuyu arayacağız.
- İkinci adım: Uzaklıkların hesaplanması
- Öklid uzaklık formülü kullanılarak uzaklıklar hesaplandığında oluşan tabloyu belirleyelim.

| X | Y | BAKİYE |
| --- | --- | --- |
| 0,07 | 0,25 | ARTI |
| 0,02 | 0,02 | ARTI |
| 0,25 | 0,08 | ARTI |
| 1 | 0,2 | EKSİ |
| 0,26 | 0,3 | ARTI |
| 0,14 | 0,26 | ARTI |
| 0,28 | 0,36 | ARTI |
| 0,04 | 0,11 | EKSİ |
| 0,03 | 0,55 | ARTI |
| 0,02 | 0,87 | EKSİ |


---

## Slayt 41

- Üçüncü adım: En küçük uzaklıkların belirlenmesi
- k=3 olarak seçilen gözlemin belirlenmesi

---

## Slayt 42

- Ağırlıklı Oylama Yöntemin Uygulanması :
- Bağıntısını kullanılarak hesaplamalar yapılır.
- Elde edilen bu değerlerin tablo üzerine eklenmesi ile yeni tablo;

---

## Slayt 43

- Ağırlıklı uzaklık değerleri tablo üzerinde gösterilirse
- Bakiyeler içinde hepsi ARTI olduğu için aranan yeni gözlem değerinin sınıfının da ARTI’ya  ait olduğu belirlenir.

---

## Slayt 44


### Örnek

- Öklid Uzaklığı için
- Formül şu şekildedir: √(X₂-X₁)²+(Y₂-Y₁)²
- Nerede:
- X₂ = Yeni girişin parlaklığı (20).
- X₁= Mevcut girişin parlaklığı.
- Y₂ = Yeni girişin doygunluğu (35).
- Y₁ = Mevcut girişin doygunluğu.
- Tabloda parlaklık ve doyma değerleri verilen ışıklar için dışarıdan
- parlaklık değeri :20 ve doyma değeri : 35 olan bir ışık geldiğinde hangi sınıfa dahil olur. Öklid uzaklık ölçüsü ve ağırlıklı oylama ile yapınız.

---

## Slayt 45


### Örnek

- d1 = √(20 - 40)² + (35 - 20)² = √400 + 225 = √625 = 25

---

## Slayt 46


### Örnek

- d2 = √(20 - 50)² + (35 - 50)² = √900 + 225 = √1125 = 33,54

---

## Slayt 47


### Örnek

- d2 = √(20 - 60)² + (35 - 90)² = √1600 + 3025 = √4625 = 68,01

---

## Slayt 48


### Örnek


---

## Slayt 49


### Örnek


---

## Slayt 50


### Örnek

- K değeri 5 seçilirse
- Yeni örneğin sınıfı Kırmızı olur.

---

## Slayt 51


### KNN Avantajları

- Basit ve Kolay Anlaşılır
- Parametrelerin Ayarlanması Kolaydır
- Eğitim Süresi Yok veya Düşüktür
- Non-Parametrik Bir Yaklaşım
- Kapsamlı Uygulama Alanları
- Çoklu Sınıf ve Çok Boyutlu Veri Kümesi Desteği:

---

## Slayt 52


### KNN Dezavantajları

- Yüksek Hesaplama Maliyeti: Tahmin yapmak için KNN algoritması, yeni bir veri noktası ile diğer tüm veri noktaları arasındaki uzaklıkları hesaplamak zorundadır. Büyük veri setlerinde veya yüksek boyutlu veri setlerinde bu hesaplama maliyeti yüksek olabilir.
- Hassas Veri Ön İşleme Gerekliliği: KNN algoritması, veri setindeki gürültüye ve özellikler arasındaki ilişkisizliğe oldukça duyarlıdır. Bu nedenle, veri setinin ön işlemesinin yapılması ve gereksiz veya bozuk özelliklerin kaldırılması önemlidir.
- Depolama Alanı İhtiyacı: KNN algoritması, eğitim aşamasında veri noktalarını bellekte saklar. Büyük veri setleriyle çalışırken bu bellek gereksinimi önemli olabilir.
- Ölçeklendirme Sorunları: KNN algoritması, veri setindeki özelliklerin ölçeklerine duyarlıdır. Özelliklerin ölçekleri arasındaki fark çok büyük olduğunda veya farklı ölçeklerde ölçülen özellikler varsa, algoritmanın performansı etkilenebilir.
- Kısa Mesafe Yanlılığı: KNN algoritması, veri noktalarının doğrudan uzaklık ölçümleri üzerinden karar verir. Bu, veri setindeki yoğunluğa veya veri noktalarının dağılımına bağlı olarak yanlı sonuçlara yol açabilir.
- Dengesiz Veri Dağılımı Sorunu: KNN, dengesiz sınıf dağılımlarına sahip veri setlerinde zayıf performans gösterebilir. Nadir sınıfların daha sık sınıflandırılmasına yol açabilir ve genel performansı etkileyebilir.
