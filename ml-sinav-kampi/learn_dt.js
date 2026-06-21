window.SYLLABUS = window.SYLLABUS || {};
window.SYLLABUS["dt"] = {
  unit: "dt",
  intro: "Karar Ağaçları (Decision Trees), bir kararı veya tahmini sorular dizisine dönüştüren, akış şeması benzeri sezgisel bir makine öğrenmesi modelidir. Bu birimde karar ağacının ne olduğunu, kök/iç/yaprak düğüm yapısını, nasıl çalıştığını, hangi alanlarda (karar analizi, sınıflandırma, regresyon) kullanıldığını ve avantaj/dezavantajlarını gerçek hayat örnekleri ve görsellerle sıfırdan öğreneceksin. Karar ağaçları hem ML bilenler hem de bilmeyenler için anlaşılır olmasıyla ünlüdür; bu yüzden harika bir başlangıç konusudur.",
  chapters: [

    /* ===================== CHAPTER 1: Karar Ağacı Nedir ===================== */
    {
      id: "dt-nedir",
      title: "Karar Ağacı Nedir?",
      slides: [2, 3],
      teach: [
        {
          kind: "text",
          html: "<b>Karar ağacı (Decision Tree)</b>, belirli bir soruna yönelik <b>tüm potansiyel çözümleri haritalandıran</b>, <b>akış şeması</b> benzeri bir diyagramdır.<br><br>Yukarıdan aşağıya doğru bir dizi <b>soru</b> sorarak ilerler. Her soruya verilen cevap (genelde <b>Evet/Hayır</b>) bizi bir sonraki adıma götürür ve en sonunda bir <b>karara</b> (sonuca) ulaşırız.<ul><li>Bir şirketin genel merkezini <b>hangi şehre taşıyacağına</b> ya da bir uydu ofis açıp açmayacağına karar vermesine yardımcı olabilir.</li><li>Karar verme sürecini adım adım, gözle görülür biçimde açıklar.</li></ul>"
        },
        {
          kind: "analogy",
          html: "Karar ağacını, çocukluğundan hatırladığın <b>'20 Soru' oyunu</b> gibi düşün. Aklındaki nesneyi bulmak için soru sorarsın: 'Canlı mı?' → Evet → 'Hayvan mı?' → Evet ... Her soru olasılıkları daraltır ve sonunda tek bir cevaba ulaşırsın. Karar ağacı da tam böyle çalışır: doğru soruları doğru sırayla sorarak büyük bir veri kümesini tek bir karara indirir."
        },
        {
          kind: "text",
          html: "Karar ağaçları yalnızca insan kararlarını değil, <b>makine öğrenmesi tahminlerini</b> de modellemek için kullanılır. Bu yüzden ML dünyasında çok popüler bir araçtır.<ul><li>Karar ağacı <b>tahmine dayalı (predictive) bir modeldir</b>: geçmiş verilerden öğrenir, gelecekteki örnekler için tahmin yapar.</li><li>Örneğin bir müşterinin <b>önceki satın alma geçmişine</b> dayanarak bir ürünü satın alıp almayacağını tahmin edebilir.</li></ul>"
        },
        {
          kind: "visual",
          component: "tree",
          caption: "Karar ağacının temel iskeleti: en üstte kök düğüm, ortada özellik testleri yapan iç düğümler, en altta nihai kararı veren yapraklar."
        },
        {
          kind: "example",
          title: "Şemsiye Alalım mı? — En Basit Karar Ağacı",
          steps: [
            "Kök düğümdeki soru: 'Dışarıda yağmur var mı?'",
            "Cevap EVET ise → sağ dala git ve bir soru daha sor: 'Yanımda şemsiye var mı?'",
            "Yağmur var + şemsiye yok → YAPRAK: 'Şemsiye al / dışarı çıkma'.",
            "Yağmur var + şemsiye var → YAPRAK: 'Hazırsın, çıkabilirsin'.",
            "Cevap HAYIR ise (yağmur yok) → YAPRAK: 'Şemsiye gerekmez'.",
            "Gördüğün gibi her gözlem, kökten başlayıp sorulara verdiği cevaplara göre tek bir yaprağa (karara) ulaşır."
          ]
        },
        {
          kind: "key",
          html: "Karar ağacının özü: <b>Veriyi sorularla böl, her dalın sonunda bir karara ulaş.</b> Akış şeması gibi okunur, bu yüzden ML bilmeyen biri bile takip edebilir."
        }
      ]
    },

    /* ===================== CHAPTER 2: Temel Yapı ve Çalışma Mantığı ===================== */
    {
      id: "dt-yapi",
      title: "Temel Yapı ve Çalışma Mantığı",
      slides: [3, 4],
      teach: [
        {
          kind: "text",
          html: "Bir karar ağacı üç tür parçadan oluşur: <b>kök</b>, <b>düğümler (iç düğümler)</b> ve <b>yapraklar</b>.<br><br>Çalışma mantığı çok nettir:<ul><li>Her bir <b>iç düğüm</b> bir <b>özellik testi</b> yapar (örneğin 'Yaş > 30 mu?').</li><li>Test sonucuna göre veri alt dallara ayrılır.</li><li><b>Yapraklar</b> nihai sonucu (kararı/tahmini) verir.</li><li><b>En hayati (en bilgilendirici) özellik</b> en tepeye, yani <b>kök düğüme</b> yerleştirilir.</li></ul>"
        },
        {
          kind: "analogy",
          html: "Bir hastaneye gittiğini düşün. Önce <b>triyaj</b> hemşiresi (kök düğüm) en kritik soruyu sorar: 'Acil bir durum mu?'. Cevaba göre seni bir koridora yönlendirir. Sonra başka bir görevli (iç düğüm) daha ayrıntılı bir soru sorar. En sonunda doktorun odasına (yaprak) varırsın; orada nihai karar verilir. Kök, en önemli ayrımı yapan ilk sorudur; bu yüzden onu en tepeye koyarız."
        },
        {
          kind: "visual",
          component: "iconRow",
          caption: "Karar ağacının üç temel parçası ve görevleri.",
          terms: [
            { term: "Kök Düğüm", def: "Ağacın başlangıcı; tüm veriyi temsil eder, en önemli soruyu sorar." },
            { term: "İç Düğüm", def: "Bir özellik testi yapar, veriyi alt dallara böler." },
            { term: "Yaprak Düğüm", def: "Daha bölünmez; nihai kararı veya tahmini verir." }
          ]
        },
        {
          kind: "text",
          html: "Ağaç nasıl ilerler? Her gözlem (veri satırı) <b>kökten başlar</b> ve aşağı doğru akar:<ul><li>Kökteki koşula göre gözlem <b>'Evet'</b> ya da <b>'Hayır'</b> olarak bir dala yönlendirilir.</li><li>Bir sonraki iç düğümde yeni bir test yapılır, gözlem yine bir dala gider.</li><li>Bu işlem, gözlem bir <b>yaprağa</b> ulaşana kadar tekrarlanır. Yapraktaki değer, o gözlemin tahminidir.</li></ul>"
        },
        {
          kind: "example",
          title: "Kredi Onayı Ağacında Bir Başvuruyu İzleyelim",
          steps: [
            "KÖK DÜĞÜM testi: 'Aylık gelir > 10.000 TL mi?' → Bu en ayırt edici özellik olduğu için köke konuldu.",
            "Başvuran A'nın geliri 15.000 TL → cevap EVET → sağ dala (iç düğüme) geç.",
            "İÇ DÜĞÜM testi: 'Kredi geçmişi temiz mi?' → A'nın geçmişi temiz → EVET dalına geç.",
            "YAPRAK DÜĞÜM: 'Kredi ONAYLANDI'. A'nın yolculuğu burada biter.",
            "Geliri düşük başka bir başvuran ise kökten SOL dala gider ve büyük ihtimalle 'Reddedildi' yaprağına ulaşır.",
            "Özet: Her başvuru kökten yaprağa giden TEK bir yol izler; o yoldaki yaprak nihai kararı verir."
          ]
        },
        {
          kind: "key",
          html: "Akılda kalsın: <b>İç düğüm = özellik testi (soru)</b>, <b>Yaprak = nihai karar</b>, <b>Kök = en önemli ilk soru</b>. Veri yukarıdan aşağı akar; her gözlem bir yaprakta sonlanır."
        }
      ]
    },

    /* ===================== CHAPTER 3: Terminoloji (Kök / İç / Yaprak) ===================== */
    {
      id: "dt-terminoloji",
      title: "Karar Ağacı Terminolojisi",
      slides: [5, 6, 7],
      teach: [
        {
          kind: "text",
          html: "Sınavlarda en çok sorulan kısım: <b>düğüm türlerinin tanımları</b>. Hepsini tek tek, kazanç (bilgi kazancı) ve saflık kavramlarıyla birlikte öğrenelim. Önce hızlı bir özet, sonra net tanımlar."
        },
        {
          kind: "visual",
          component: "tree",
          caption: "Aynı ağaç, terminolojiyle: en üstteki yeşil kutu KÖK, mavi kutular İÇ DÜĞÜM, sarı kutular YAPRAK düğümlerdir."
        },
        {
          kind: "text",
          html: "<b>Kök Düğüm (Root Node):</b><ul><li><b>Tüm veri kümesini</b> temsil eder ve ağacı başlatmak için kullanılır; ağacın <b>başlangıç noktasıdır</b>.</li><li>Veriyi <b>maksimum bilgi kazancına</b> göre böler — yani en çok ayırt eden özelliği seçer.</li><li>Karar ağaçlarının ilk hücresine <b>kök (root / root node)</b> denir. Her gözlem kökteki koşula göre <b>'Evet'</b> ya da <b>'Hayır'</b> olarak sınıflandırılır.</li></ul>"
        },
        {
          kind: "text",
          html: "<b>İç Düğüm (Internal Node):</b><ul><li>Verileri <b>iki veya daha fazla alt kümeye ayıran</b> bir <b>özelliği</b> temsil eder.</li><li>Bölme işlemi, özelliğin <b>değerine göre</b> yapılır ve her gözlemin izleyeceği yolu belirler.</li><li>Bölme; <b>saflık (purity)</b> ve <b>kazanç (gain)</b> ölçütlerine göre yapılır. İç düğüm daha sonra birden fazla alt düğüme bölünebilir.</li></ul>"
        },
        {
          kind: "text",
          html: "<b>Yaprak Düğüm (Leaf Node):</b><ul><li>Verilerin <b>daha fazla bölünemeyen</b> bir alt kümesini temsil eder; artık <b>karar verilir</b>.</li><li>Kendisine ulaşan gözlemler için <b>nihai tahmini</b> içerir.</li><li>Tahmin, alt kümedeki <b>çoğunluk sınıfına</b> (sınıflandırmada) veya hedef değişkenin <b>ortalama değerine</b> (regresyonda) dayanır.</li></ul>"
        },
        {
          kind: "terms",
          terms: [
            { term: "Kök Düğüm (root)", def: "Ağacın başlangıcı. Tüm veri kümesini temsil eder; veriyi maksimum bilgi kazancına göre bölen ilk koşulu içerir." },
            { term: "İç Düğüm", def: "Bir özellik testi yaparak veriyi iki veya daha fazla alt kümeye ayıran ara düğüm. Saflık ve kazanca göre böler." },
            { term: "Yaprak Düğüm", def: "Daha fazla bölünmeyen son düğüm. Kendisine ulaşan gözlemler için nihai kararı/tahmini verir." },
            { term: "akış şeması", def: "Adım adım sorular ve dallanmalarla bir süreci gösteren diyagram. Karar ağacı bu tür bir diyagrama benzer." },
            { term: "bilgi kazancı", def: "Bir özelliğe göre bölme yapıldığında verideki belirsizliğin (saflıksızlığın) ne kadar azaldığını ölçen değer. En yüksek kazançlı özellik köke/üst düğümlere konur." }
          ]
        },
        {
          kind: "analogy",
          html: "<b>Bilgi kazancını</b> bir 'tahmin oyununda en faydalı soru' gibi düşün. 'Sayı tek mi çift mi?' sorusu olasılıkları yarı yarıya böldüğü için çok bilgi kazandırır. 'Sayı tam olarak 7 mi?' sorusu ise çoğu zaman 'Hayır' getirip az şey öğretir. Karar ağacı, her adımda <b>en çok bilgi kazandıran soruyu</b> seçerek hızlıca doğru karara ulaşmaya çalışır."
        },
        {
          kind: "key",
          html: "Üçlü ezberi: <b>Kök = başlangıç (tüm veri)</b> → <b>İç düğüm = özellik testi (böler)</b> → <b>Yaprak = nihai karar</b>. Bölme kararları her zaman <b>bilgi kazancı / saflık</b> ölçütüne göre verilir."
        }
      ]
    },

    /* ===================== CHAPTER 4: Kullanım Alanları ===================== */
    {
      id: "dt-kullanim",
      title: "Karar Ağaçlarının 3 Kullanım Alanı",
      slides: [9, 10, 11, 12],
      teach: [
        {
          kind: "text",
          html: "Karar ağacı yöntemi başlıca üç amaçla kullanılır:<ul><li><b>Karar Analizi</b> — karar verme sürecini görselleştirme.</li><li><b>Sınıflandırma</b> — bir örneği sınıflara ayırma (ör. spam / spam değil).</li><li><b>Regresyon</b> — sayısal bir değeri tahmin etme (ör. maaş, mülk değeri).</li></ul>"
        },
        {
          kind: "visual",
          component: "iconRow",
          caption: "Karar ağaçlarının üç ana kullanım alanı.",
          terms: [
            { term: "Karar Analizi", def: "Karar sürecini görselleştirir; ML bilmeyen biri için bile anlaşılır." },
            { term: "Sınıflandırma", def: "Bir örneği kategorilere ayırır, ör. e-posta spam mı değil mi." },
            { term: "Regresyon", def: "Sayısal bir değer tahmin eder, ör. maaş veya mülk değeri." }
          ]
        },
        {
          kind: "text",
          html: "<b>1) Karar Analizi:</b><ul><li>Karar verme sürecinde kullanılır.</li><li>Karar ağacı modeli, karar sürecini ve sonucunu <b>açıkça sunmak için veri görselleştirmede</b> kullanılabilir.</li><li>En büyük avantajlarından biri: işinde <b>makine öğrenimiyle ilgilenmeyen biri için bile</b> anlaşılır ve kolaydır.</li></ul>"
        },
        {
          kind: "text",
          html: "<b>2) Sınıflandırma:</b><ul><li>Sınıflandırma, bir <b>sınıf değerini tahmin etmek veya açıklamak</b> için kullanılan bir ML tekniğidir.</li><li>Bir veya daha fazla girdiye dayanarak bir olayın <b>gerçekleşme olasılığını</b> değerlendirebilirsin; karar ağacı tam olarak bununla ilgilidir.</li><li>Klasik örnek: <b>e-postaları spam / spam değil</b> diye ikiye ayırmak. Algoritma bir dizi soru sorar ve yanıtlara göre e-postanın spam olup olmadığına karar verir.</li></ul>"
        },
        {
          kind: "example",
          title: "Sınıflandırma Örneği — E-posta Spam mı Değil mi?",
          steps: [
            "KÖK soru: 'Mesajda 'kazandınız / bedava / tıkla' gibi kelimeler geçiyor mu?'",
            "Geçmiyorsa → SOL dal: muhtemelen normal posta yolunda ilerle.",
            "Geçiyorsa → SAĞ dal, yeni soru (iç düğüm): 'Gönderen adres tanıdık mı?'",
            "Gönderen tanıdık değil → yeni soru: 'Çok sayıda bağlantı / ek içeriyor mu?'",
            "Evet → YAPRAK: 'SPAM' sınıfı. Hayır → YAPRAK: 'Spam değil'.",
            "Sonuç: Algoritma sorulara verilen yanıtlara göre e-postayı iki sınıftan birine atar."
          ]
        },
        {
          kind: "text",
          html: "<b>3) Regresyon:</b><ul><li>Denetimli ML tekniklerinden biridir. Regresyon, <b>geçmiş verilere dayanarak belirli bir değeri tahmin etmene</b> (veya açıklamana) yardımcı olur.</li><li>Bir çalışanın <b>maaşını</b>, bir hastalığın yayılmasını veya bir <b>mülkün değerini</b> tahmin etmek için kullanılır. Bu durumda buna <b>regresyon ağacı</b> denir.</li><li>Gerçek yaşamda bu model insanlar tarafından yaygın olarak kullanılır.</li></ul>"
        },
        {
          kind: "analogy",
          html: "Farkı şöyle hatırla: <b>Sınıflandırma</b> 'hangi kutu?' sorusunu yanıtlar (spam mı, değil mi — ayrık etiketler). <b>Regresyon</b> ise 'kaç?' sorusunu yanıtlar (bu evin değeri yaklaşık ne kadar — sürekli bir sayı). Aynı ağaç yapısı kullanılır; tek fark yapraktaki çıktının bir <b>etiket</b> mi yoksa bir <b>sayı</b> mı olduğudur."
        },
        {
          kind: "key",
          html: "Hızlı ayrım: <b>Karar Analizi</b> = görselleştir/açıkla, <b>Sınıflandırma</b> = kategoriye ata (spam), <b>Regresyon</b> = sayısal değer tahmini (maaş/mülk → regresyon ağacı)."
        }
      ]
    },

    /* ===================== CHAPTER 5: Ağaç Nasıl Oluşur (Süreç) ===================== */
    {
      id: "dt-surec",
      title: "Ağaç Nasıl Oluşur ve Nasıl Karar Verir?",
      slides: [4, 5, 6, 7],
      teach: [
        {
          kind: "text",
          html: "Bir karar ağacı, veriden <b>yukarıdan aşağıya</b> doğru inşa edilir. Temel fikir basittir: her adımda <b>veriyi en iyi ayıran özelliği</b> seç ve onunla böl; bu işlemi tekrar et."
        },
        {
          kind: "visual",
          component: "flow",
          caption: "Karar ağacı oluşturma süreci, adım adım.",
          steps: [
            "Tüm veriyi kök düğüme yerleştir (başlangıç noktası).",
            "Her özellik için bilgi kazancını / saflığı hesapla.",
            "En yüksek kazançlı özelliği seç ve veriyi o özelliğe göre böl.",
            "Oluşan her alt küme için aynı işlemi tekrar et (özyineleme).",
            "Bir düğüm yeterince saf olunca dur → orayı yaprak yap.",
            "Aşırı büyümeyi önlemek için ağacı buda (pruning)."
          ]
        },
        {
          kind: "text",
          html: "Süreç neden böyle işler?<ul><li><b>Saflık (purity):</b> Bir düğümdeki örnekler hep aynı sınıftaysa o düğüm 'saf'tır; iyi bölme, alt kümeleri olabildiğince saf yapar.</li><li><b>Bilgi kazancı:</b> Bölmeden önce ve sonra belirsizliğin ne kadar azaldığıdır; en yüksek kazanç sağlayan özellik tercih edilir ve genelde köke yakın yerleşir.</li><li><b>Durma:</b> Düğüm yeterince safsa, örnek azsa ya da derinlik sınırına ulaşıldıysa bölme durur ve yaprak oluşur.</li></ul>"
        },
        {
          kind: "analogy",
          html: "Bir kütüphaneciyi düşün: dağınık kitap yığınını önce en kaba ölçütle ayırır (kurgu / kurgu dışı). Sonra her yığını daha ince ölçütlerle (tür, yazar) tekrar ayırır. Her adımda <b>en faydalı ayrımı</b> seçer ve kitaplar düzenli rafa (yaprağa) ulaşana kadar devam eder. Karar ağacı da veriyi tam böyle, en bilgilendirici sorudan başlayarak kademeli ayırır."
        },
        {
          kind: "key",
          html: "Tek cümlede süreç: <b>Veriyi en yüksek bilgi kazançlı özellikle böl, alt kümeler saflaşana kadar tekrarla, sonra buda.</b> Tahmin anında ise gözlem kökten yaprağa akar ve yapraktaki değeri alır."
        }
      ]
    },

    /* ===================== CHAPTER 6: Avantajlar ve Dezavantajlar ===================== */
    {
      id: "dt-avantaj-dezavantaj",
      title: "Avantajlar ve Dezavantajlar",
      slides: [14, 15],
      teach: [
        {
          kind: "text",
          html: "Her model gibi karar ağaçlarının da güçlü ve zayıf yönleri vardır. Sınavda <b>'hangisi avantaj / hangisi dezavantaj'</b> ayrımı sıkça sorulur; bu yüzden ikisini yan yana görelim."
        },
        {
          kind: "compare",
          title: "Avantajlar vs Dezavantajlar",
          colA: "Avantaj",
          colB: "Dezavantaj",
          rows: [
            { label: "Oluşturma", a: "Karar ağacı oluşturmak zahmetsizdir.", b: "Ağaç oluşturma ve budama karmaşıklığı fazladır." },
            { label: "Yorumlama", a: "Küçük ağaçları yorumlamak kolaydır; anlaşılabilir kurallar üretilir.", b: "Ağaç çok büyüyünce yorumlamak zorlaşır." },
            { label: "Nitelik türü", a: "Hem sürekli hem ayrık nitelik değerleri için kullanılabilir.", b: "Sürekli (sayısal) değerleri tahmin etmede çok başarılı değildir." },
            { label: "Veri durumu", a: "Az kuralla net karar üretir, görselleştirmesi sezgiseldir.", b: "Sınıf sayısı fazla ve öğrenme örneği az ise model başarısız olur." },
            { label: "Maliyet", a: "Küçük problemlerde hızlı ve hafiftir.", b: "Zaman/yer karmaşıklığı; örnek sayısına, nitelik sayısına ve ağaç yapısına bağlıdır." }
          ]
        },
        {
          kind: "terms",
          terms: [
            { term: "Avantaj", def: "Karar ağacının güçlü yönü: oluşturması kolay, küçük ağaçları yorumlamak basit, anlaşılır kurallar üretir, hem sürekli hem ayrık niteliklerle çalışır." },
            { term: "Dezavantaj", def: "Karar ağacının zayıf yönü: sürekli değer tahmininde zayıf, çok sınıf + az örnekte başarısız, zaman/yer karmaşıklığı yüksek, ağaç oluşturma ve budama karmaşık." }
          ]
        },
        {
          kind: "analogy",
          html: "Karar ağacını bir <b>el çizimi yol haritası</b> gibi düşün. Küçük bir mahalle için harika: bakar bakmaz anlarsın, takip etmesi kolaydır (avantaj). Ama bütün bir ülkeyi tek kâğıda çizmeye kalkarsan harita devasa, karmaşık ve okunamaz hâle gelir (dezavantaj). Yani karar ağaçları <b>küçük/orta ölçekte parlak</b>, çok büyüdüklerinde ise hantal olur."
        },
        {
          kind: "key",
          html: "Sınav notu: Avantajlar genelde <b>basitlik ve yorumlanabilirlik</b> ekseninde, dezavantajlar ise <b>sürekli değer tahmini, çok sınıf + az örnek ve karmaşıklık (oluşturma/budama)</b> ekseninde toplanır."
        },
        {
          kind: "text",
          html: "<b>Özet:</b> Karar ağaçları, anlaşılır ve görselleştirmesi kolay yapısıyla hem karar analizinde hem sınıflandırmada hem de regresyonda kullanılır. Güçlü yönü sadeliği, zayıf yönü ise büyüdükçe artan karmaşıklığı ve sürekli değer tahminindeki sınırlarıdır. Bu dengeyi bilmek, ne zaman karar ağacı seçeceğini de öğretir."
        }
      ]
    }

  ]
};
