# jolnova.com

Jolnova tanıtım sitesi. Statik HTML + CSS + JS; derleme adımı olmadan da açılır,
ama **üretilen iki şey** var ve bunlar kaynaklarıyla birlikte güncellenmezse
sitede eski içerik yayına çıkar.

## ⚠️ Yayına almadan önce iki komut

```bash
python build-i18n.py --check     # dil sayfaları taze mi?
```

```bash
python build-i18n.py             # bayatsa yeniden üret
```

Ekran görüntülerini (`mock/*.html` → `images/mock/*.png`) değiştirdiysen:

```bash
bash mock/shoot.sh
```

### Neden bu uyarı burada

2026-09-07'de marka adı Jolnova olarak değişti. `mock/*.html` kaynakları
güncellendi ama **PNG'ler yeniden çekilmedi**; ana sayfanın hero görseli dahil
19 ekran görüntüsü eski adı göstermeye devam etti ve bunu ancak site sahibi
fark etti. Aynı tuzak dil sayfaları için de geçerli — o yüzden
`build-i18n.py` her üretilen dosyaya kaynağın sha1'ini gömüyor ve `--check`
bunu denetliyor.

## Klasör düzeni

| Yol | Nedir |
|---|---|
| `*.html` | **Kaynak sayfalar (İngilizce).** Elle düzenlenir. |
| `tr/ de/ fr/ es/` | **ÜRETİLİR.** `build-i18n.py` yazar — elle düzenleme. |
| `sitemap.xml` | **ÜRETİLİR.** `build-i18n.py` yazar. |
| `robots.txt` | Elle. |
| `lang.js` | Çeviri motoru + Türkçe sözlük. |
| `lang-de.js` `lang-fr.js` `lang-es.js` | Diğer sözlükler (`RJ_DE` vb.). |
| `mock/*.html` | Ekran görüntüsü kaynakları (sentetik — gerçek kullanıcı verisi yok). |
| `images/mock/*.png` | **ÜRETİLİR.** `mock/shoot.sh` yazar. |
| `images/og-cover.png` | **ÜRETİLİR.** `_ogbuild.html`'den 1200×630 çekilir. |
| `dl/` | Kurulum dosyası. **Depoya girmez** (bkz. `.gitignore`). |

## Diller ve SEO

İngilizce **kökte** durur ve `x-default` odur; site uluslararası, tek bir ülkenin
dili öne çıkmaz. Türkçe/Almanca/Fransızca/İspanyolca kendi klasörlerinde, her
biri kendi `canonical`'ı ve tam `hreflang` kümesiyle.

Eskiden `hreflang` `?lang=tr` gibi adresleri gösteriyordu. **Bu çalışmıyordu:**
o adresler aynı HTML'i döndürüyor ve o HTML'in `canonical`'ı parametresiz
adresi gösteriyor; Google böyle bir alternatifi kendi kanoniğine katıp hreflang
kümesini yok sayıyor. Yani 5 dil vardı, Google bir dil görüyordu.

Çeviriyi `build-i18n.py` **yapmaz**, `lang.js` yapar — betik sayfayı
`?lang=<dil>` ile gerçekten tarayıcıda render edip sonucu yazar. Sözlük iki
yerde yorumlanmadığı için diller birbirinden sapamaz.

**Kimlik sayfaları (`login` `signup` `account` `reset`) bilerek tek kopya ve
kökte.** Her dile kopyalansalardı Supabase OAuth yönlendirme adresleri
dört katına çıkardı (4 dil × 4 sayfa) ve biri izin listesine eklenmezse o dilde
Google ile giriş sessizce kırılırdı. Ziyaretçi yine kendi dilini görür: dil
sayfası tercihi `localStorage`'a yazar, kökteki sayfa onu okuyup çevirir.
Bu sayfalar zaten `noindex`.
