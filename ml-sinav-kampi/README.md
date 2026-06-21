# 🎓 ML Sınav Kampı — 3 Günde Tam Puan

RYZ108 Makine Öğrenmesi dersinin **4 sunumundan** (Karar Ağaçları, KNN, SVM, RYZ108 Tüm Konular) üretilmiş, **oyunlaştırılmış** ve **öğrenme piramidine** göre tasarlanmış etkileşimli bir sınav hazırlık uygulaması.

> **289 soru · 70 kavram kartı · 8 konu · 7 farklı soru tipi · 4 etkileşimli simülasyon**

---

## 🚀 Nasıl Açılır?

**En kolay yol:** `index.html` dosyasına **çift tıkla** — tarayıcıda açılır, internet/sunucu gerekmez.

> İlerlemen (XP, seri, hata defteri, aralıklı tekrar) tarayıcının `localStorage`'ında saklanır. Aynı tarayıcıda kaldığın yerden devam edersin.

Alternatif (yerel sunucu):
```bash
cd ml-sinav-kampi
python3 -m http.server 8753
# tarayıcıda: http://localhost:8753
```

📱 Telefonda da çalışır: dosyaları telefona atıp `index.html`'i bir tarayıcıyla aç.

---

## 🧠 Neden Bu Şekilde Tasarlandı? (Öğrenme Bilimi)

Bu uygulama "soru bankası" değil, **sıfırdan öğreten bir öğretmendir**. Çekirdek döngü:

> **📖 ÖĞREN** (görsel + benzetme + örnek anlatım) → **✍️ PRATİK** (o konunun soruları) → **🔁 BİRİKİMLİ TEKRAR** (önceki konulardan serpiştirme) → **🎯 GÜN KONTROL NOKTASI** → **🏁 FİNAL SINAV**

Hiç bilmeyen biri her konuya **konu anlatımıyla** başlar; ardından pratik gelir. **Ustalık modu**: yanlış yaptığın soru, doğru yapana kadar tekrar sorulur — yani bir bölümü bitirdiğinde o konuyu *gerçekten* biliyorsundur.

Pasif okuma en az kalıcı yöntemdir (%5–10). Bu yüzden **piramidin tepesine** odaklanır:

| Yöntem | Kalıcılık | Uygulamada karşılığı |
|---|---|---|
| Görsel + anlatım (dual coding) | ↑ | Her konuda **21 çeşit etkileşimli diyagram** + benzetme + çözümlü örnek |
| Yaparak öğrenme | ~%75 | **Simülasyon Lab** + her soru aktif çözüm |
| Başkasına öğretme | ~%90 | **Anlat Bakalım** (Feynman tekniği) |
| Aktif hatırlama (test etkisi) | yüksek | Ustalık modunda her soru geri-getirme pratiği |
| Aralıklı + birikimli tekrar | yüksek | **Leitner** SRS + bölümler arası serpiştirme + **gün kontrol noktaları** |
| Araya serpiştirme | yüksek | Konular karışık gelir, ezber değil anlama |

**Eksiksizlik kanıtı:** Her sınav sorusu kaynak slayt numarasına bağlıdır; konu anlatımı bu slaytların **tümünü** kapsayacak şekilde üretilip otomatik denetlenmiştir. Yani test edilen hiçbir bilgi, önce öğretilmeden gelmez.

Ek olarak: **anında geri bildirim**, her cevapta **kaynak slayt** referansı, **hata defteri** ile zayıf noktalara odaklanma, ve her birimde **kavram sözlüğü** (tanım/terim/boşluk-doldurma için).

---

## 📅 3 Günlük Çalışma Planı

Uygulama ana ekranda **3 gün sekmesi** olarak hazır gelir:

- **1. Gün — Temel & Ölçme:** ML Temelleri, Performans Metrikleri (confusion matrix, accuracy, precision, recall, ROC/AUC, MSE/RMSE/MAE/R²), Veri Hazırlama (EDA, normalizasyon, çapraz doğrulama)
- **2. Gün — Algoritmalar:** Regresyon (doğrusal & lojistik), Karar Ağaçları, KNN (uzaklıklar, k seçimi, **hesaplama soruları**)
- **3. Gün — İleri & Sınav:** SVM (hiperdüzlem, marjin, C, kernel), Denetimsiz Öğrenme (K-Means, hiyerarşik, Apriori) + **Büyük Deneme Sınavı**

**Her gün için önerilen ritim:**
1. O günün konularındaki dersleri sırayla bitir (her ders ~7 soru).
2. Akşam **🔁 Tekrar** + **🧯 Hata Defteri** ile pekiştir.
3. Yeni bir kavramı **🗣️ Anlat Bakalım**'da kendi cümlelerinle anlat.
4. 3. günün sonunda **📝 Deneme Sınavı**'na gir → hedef **%85+** ("Sınava hazırsın"), ideal **%100** 👑.

---

## ✨ Özellikler

**📖 Konu Anlatımı (yeni):** Her birim, sıfırdan öğreten **bölümlere** ayrılır. Her bölümde sade açıklama, gerçek hayat **benzetmesi**, **çözümlü örnekler**, **kavram sözlüğü**, karşılaştırma tabloları ve **etkileşimli görseller** vardır. Konuyu öğrenmeden pratik başlamaz.

**🎯 Kontrol Noktaları & birikimli ilerleme (yeni):** Her gün sonunda, o güne kadarki TÜM konulardan kümülatif test. Yeni bölümlerde önceki konulardan da sorular serpiştirilir — geçmiş sürekli pekişir.

**🏅 Ustalık modu:** Yanlış yaptığın soru, doğru yapana kadar tekrar gelir. Bölümü bitiren, o konuyu öğrenmiş olur.

**Oyunlaştırma:** XP & seviye, günlük 🔥 seri, ❤️ canlar, kombo çarpanı, günlük hedef halkası, 12 rozet, konfeti & ses efektleri.

**7 soru tipi:**
- Çoktan seçmeli · Doğru/Yanlış · Boşluk doldurma
- **Hesaplama** (Öklid uzaklığı, metrik hesapları — toleranslı sayısal cevap)
- **Sıralama** (algoritma adımları) · **Gruplama** (avantaj/dezavantaj, denetimli/denetimsiz) · **Eşleştirme** (terim ↔ tanım)

**🧪 Simülasyon Lab (yaparak öğren):**
- **KNN Görselleştirici** — noktaya dokun, k'yı değiştir, sınıfın nasıl değiştiğini gör
- **Confusion Matrix Oyun Alanı** — TP/TN/FP/FN gir, 7 metrik anında hesaplansın (ders örneği yüklü: %91, %95, %83…)
- **SVM Marjin & C** — C arttıkça marjinin daralmasını izle
- **Uzaklık Hesaplayıcı** — Öklid / Manhattan / Chebyshev karşılaştırması

**🃏 Kavram Kartları** (çevir-öğren) · **📊 Profil** (konu hakimiyet çubukları, rozetler) · **⚙️ Ayarlar** (ses, sıfırlama).

---

## ⌨️ Klavye Kısayolları (masaüstü)
- `1–4` → çoktan seçmeli şıkkı seç
- `D` / `Y` → Doğru / Yanlış
- `Enter` → Kontrol et / Devam

---

## 📁 Dosya Yapısı
```
ml-sinav-kampi/
├── index.html        # giriş noktası
├── styles.css        # tasarım sistemi
├── app.js            # motor (oyunlaştırma, SRS, sorular, simülasyonlar)
├── data_ryz.js       # 118 soru (temeller, metrikler, veri, regresyon, denetimsiz)
├── data_knn.js       #  77 soru (KNN)
├── data_svm.js       #  52 soru (SVM)
└── data_dt.js        #  40 soru (Karar Ağaçları)
```

Tüm içerik kaynak sunumlardan üretilmiştir; her soruda ilgili **slayt numarası** referans olarak gösterilir. Başarılar! 🍀
