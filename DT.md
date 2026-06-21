# Karar Ağaçları (Decision Trees - DT)

> Bu belge **Karar Ağaçları (Decision Trees - DT)** sunumunun eksiksiz metin dökümüdür. Toplam 15 slayt.


---

## Slayt 1


### Makine Öğrenmesi Dersi Hafta 6

- Karar Ağacı Algoritması

---

## Slayt 2


### Karar Ağacı Algoritması

- Karar ağacı, belirli bir soruna yönelik tüm potansiyel çözümleri haritalandıran akış şeması benzeri bir diyagramdır.
- Örneğin, bir şirketin genel merkezini hangi şehre taşıyacağına veya bir uydu ofis açıp açmayacağına karar vermesine yardımcı olmak için bir karar ağacı kullanılabilir.
- Karar ağaçları, tahmine dayalı modeller oluşturmak için kullanılabildiğinden makine öğreniminde de popüler bir araçtır.
- Örneğin, bir müşterinin önceki satın alma geçmişine dayanarak bir ürünü satın alıp almayacağı gibi tahminler yapmak için kullanılabilir.

---

## Slayt 3


### Karar Ağacı Terminolojisi

- Bir karar ağacı algoritması : Kök, düğümler ve yapraklardan oluşur.

---

## Slayt 4


### Karar Ağacı Temel Yapısı

- Karar ağacı, her bir iç düğümün bir özellik testi yapar.
- Yapraklar nihai sonucu verir.
- En hayati özellik kök düğüm olarak adlandırılır.

---

## Slayt 5


### Karar Ağacı Terminolojisi

- Kök Düğüm: Kök düğüm tüm veri kümesini temsil eder ve ağacı başlatmak için kullanılır.
- Ağacın başlangıç noktasıdır ve verileri maksimum bilgi kazancına göre böler.
- Karar ağaçlarının ilk hücrelerine kök (root veya root node) denir. Her bir gözlem kökteki koşula göre “Evet” veya “Hayır” olarak sınıflandırılır.

---

## Slayt 6


### Karar Ağacı Terminolojisi

- İç Düğüm: Her bir iç düğüm, verileri iki veya daha fazla alt kümeye ayıran bir özelliği temsil eder.
- Bölme işlemi özelliğin değerine göre gerçekleştirilir ve her bir gözlemin izleyeceği yolu belirler.
- Bölme işlemi saflık ve kazanca göre yapılır.
- İç düğüm daha sonra birden fazla alt düğüme bölünür.

---

## Slayt 7


### Karar Ağacı Terminolojisi

- Yaprak Düğüm: Yaprak düğüm, verilerin daha fazla bölünemeyen bir alt kümesini temsil eder. Artık karar verilir.
- Kendisine ulaşan gözlemler için nihai tahmini içerir.
- Tahmin, alt kümedeki çoğunluk sınıfına veya hedef değişkenin ortalama değerine dayanır.

---

## Slayt 8


*(Bu slayt yalnızca görsel/şema içeriyor; çıkarılabilir metin yok.)*


---

## Slayt 9

- Karar Ağacı Yöntemi
- Karar Analizi
- Sınıflandırma
- Regresyon

---

## Slayt 10


### Karar Analizi

- Karar verme sürecinde kullanılır.
- Karar ağacı makine öğrenimi modeli, karar sürecini ve sonucunu açıkça sunmak için veri görselleştirmede kullanılabilir.
- Karar ağaçlarının en büyük avantajlarından biri, işlerinde makine öğrenimi ile ilgilenmeyen biri için bile anlaşılabilir ve kolay olmasıdır.

---

## Slayt 11


### Sınıflandırma

- Sınıflandırma, bir sınıf değerini tahmin etmek veya açıklamak için kullanılan bir makine öğrenimi tekniğidir.
- Sınıflandırma algoritmaları ile bir veya daha fazla girdiye dayalı olarak bir olayın meydana gelme olasılığını değerlendirebilirsiniz. Karar ağacı makine öğrenimi modeli tam olarak bununla ilgilidir.
- Örneğin, e-posta’ları spam ve spam olmayan olarak ikiye ayırmak için kullanılabilir.
- Algoritmanız bir dizi soru sorar ve yanıtlara göre belirli bir e-posta’nın spam olup olmadığına karar verir.

---

## Slayt 12


### Regresyon

- Denetimli makine öğrenimi tekniklerinden biridir. Regresyon, bir dizi önceki veriye dayanarak belirli bir değeri tahmin etmenize (veya açıklamanıza) yardımcı olur.
- Bir çalışanın maaşı, hastalığın yayılması veya mülk değeri gibi konuları tahmin etmek için regresyonu kullanabilirsiniz. Bu durumda, buna regresyon ağacı denir.
- Gerçek yaşam koşullarında bu model insanlar tarafından yaygın olarak kullanılmaktadır.

---

## Slayt 13

- Örnekler
- Karar Ağacı
- Karar Ağacı Algoritması
- içerik
- Yeni Örnek
- sınıflandırma

---

## Slayt 14


### Karar Ağacı kullanarak sınıflandırma

- Avantajları:
  - Karar ağacı oluşturmak zahmetsizdir
  - Küçük ağaçları yorumlamak kolaydır
  - Anlaşılabilir kurallar oluşturulabilinir
  - Sürekli ve ayrık nitelik değerleri için kullanılabilir

---

## Slayt 15


### Karar Ağacı kullanarak sınıflandırma

- Dezavantajları:
  - Sürekli nitelik değerlerini tahmin etmekte çok başarılı değildir
  - Sınıf sayısı fazla ve öğrenme kümesi örnekleri sayısı az olduğunda model oluşturma çok başarılı değildir
  - Zaman ve yer karmaşıklığı öğrenme kümesi örnekleri sayısına, nitelik sayısına ve oluşan ağacın yapısına bağlıdır
  - Hem ağaç oluşturma karmaşıklığı hem de ağaç budama karmaşıklığı fazladır
