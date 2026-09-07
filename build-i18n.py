# -*- coding: utf-8 -*-
"""Dil sayfasi ureticisi:  *.html  ->  tr/*.html  de/*.html  fr/*.html  es/*.html

NEDEN VAR
---------
Sitenin cevirisi ISTEMCI TARAFINDA yapiliyor (lang.js metin dugumlerini
sozlukten geciriyor). Ziyaretci icin mukemmel calisiyor ama ARAMA MOTORU icin
bir sey ifade etmiyor: butun diller AYNI adreste yasiyor.

Eskiden <head> icinde soyle satirlar vardi:
    <link rel="alternate" hreflang="tr" href="https://jolnova.com/?lang=tr">
Bu ISE YARAMIYORDU. ?lang=tr adresi AYNI HTML'i donduruyor ve o HTML'in
canonical'i parametresiz adresi gosteriyor. Google, canonical'i baska yeri
gosteren bir alternatifi kendi kanonigine katar ve hreflang kumesini YOK
SAYAR. Yani 5 dil vardi, Google bir dil goruyordu.

Gercek cozum her dile AYRI ADRES + AYRI CANONICAL. Bu betik onu uretir:
sayfayi ?lang=<dil> ile GERCEKTEN render edip sonucu <dil>/ altina yazar.

⚠️ CEVIRIYI BU BETIK YAPMAZ, lang.js YAPAR. Sozlugu burada yeniden
yorumlasaydik iki ayri ceviri yolu olurdu ve biri otekinden sapardi.

HEDEF: HEM YURT ICI HEM YURT DISI
    Ingilizce KOK adreste durur (x-default). tr/de/fr/es kendi klasorlerinde.
    Sozluk kapsami olculdu: sayfa metninin %84-94'u cevrili ve KALANIN TAMAMI
    cevrilemez icerik (marka parcalari, sayilar, fiyatlar, ikonlar, Kick/
    Twitch/TikTok, plan adlari). Yani gercek metnin tamami cevriliyor.

⚠️ URETILMIS DOSYA = BAYATLAMA RISKI
    Bu projede tam olarak yasandi: marka degistikten sonra mock ekran
    goruntuleri eski adi gostermeye devam etti, cunku kaynak HTML'ler
    yenilenmis ama PNG'ler yeniden cekilmemisti. Ayni tuzak burada da var.
    Onun icin her uretilen dosyaya kaynagin sha1'i gomuluyor ve --check
    bunu denetliyor. YAYIN ONCESI 'python build-i18n.py --check' KOSULMALI.

KULLANIM
    python build-i18n.py            uret
    python build-i18n.py --check    tazelik denetimi (uretim yapmaz)
"""
import hashlib
import io
import os
import re
import subprocess
import sys

KOK = os.path.dirname(os.path.abspath(__file__))
CHROME = os.environ.get("CHROME", r"C:\Program Files\Google\Chrome\Application\chrome.exe")
SITE = "https://jolnova.com"

# dil kodu -> og:locale
DILLER = {"tr": "tr_TR", "de": "de_DE", "fr": "fr_FR", "es": "es_ES"}

# Yalnizca INDEKSLENEBILIR sayfalar. account/login/signup/reset noindex;
# onlarin cevirisini uretmek bos yere 16 dosya ve 16 bayatlama riski demek.
SAYFALAR = [
    "index.html", "how-it-works.html", "features.html", "pricing.html",
    "download.html", "faq.html", "support.html", "privacy.html", "terms.html",
]

# URETILIR ama SITE HARITASINA ve HREFLANG kumesine GIRMEZ.
#
# pricing.html su an "yakinda" sayfasi (odeme altyapisi bagli degil) ve
# <meta name="robots" content="noindex"> tasiyor.
#   - Site haritasina noindex adres koymak Search Console'da
#     "Gonderilen URL noindex olarak isaretlenmis" hatasi uretir.
#   - noindex bir sayfaya hreflang yazmak da anlamsiz; Google zaten
#     indekslemedigi sayfa icin kumeyi degerlendirmez.
# Ama sayfa URETILMEYE devam eder: 13 sayfanin gezinme menusunde linki var,
# uretilmezse /tr/pricing.html gibi adresler 404 verir.
# Fiyatlar acildiginda bu kumeden cikarilacak ve pricing.html'deki noindex
# satiri silinecek.
SITEMAP_DISI = {"pricing.html"}

DAMGA = "<!-- kaynak-sha1: %s -->"
DAMGA_DESEN = re.compile(r"<!-- kaynak-sha1: ([0-9a-f]{40}) -->")


def sha(yol):
    return hashlib.sha1(io.open(yol, "rb").read()).hexdigest()


def adres(dil, sayfa):
    """dil None ise Ingilizce KOK adres. Ana sayfa her zaman klasor adresidir."""
    on = SITE if dil is None else "%s/%s" % (SITE, dil)
    return on + "/" if sayfa == "index.html" else "%s/%s" % (on, sayfa)


def render(sayfa, dil):
    kaynak = os.path.join(KOK, sayfa)
    profil = os.path.join(os.environ.get("TEMP", KOK), "jolnova-i18n-profile")
    komut = [
        CHROME, "--headless=new", "--disable-gpu", "--no-first-run",
        "--no-default-browser-check", "--user-data-dir=" + profil,
        "--virtual-time-budget=8000", "--dump-dom",
        "file:///" + kaynak.replace("\\", "/") + "?lang=" + dil,
    ]
    return subprocess.run(komut, capture_output=True, timeout=180).stdout.decode("utf-8", "replace")


def yollari_duzelt(html):
    """Sayfa ALT KLASORDE oldugu icin ortak varlik yollari bir seviye yukari.

    HTML sayfa linkleri (features.html gibi) BILEREK dokunulmaz: goreli
    kaldiklari icin tr/features.html'e cozulurler - yani ziyaretci gezinirken
    kendi dilinde KALIR.
    """
    for varlik in ("images/", "dl/"):
        html = html.replace('src="' + varlik, 'src="../' + varlik)
        html = html.replace('href="' + varlik, 'href="../' + varlik)
        html = html.replace("url(" + varlik, "url(../" + varlik)
    for dosya in ("site.css", "supabase.js", "lang.js",
                  "lang-de.js", "lang-fr.js", "lang-es.js"):
        html = html.replace('href="' + dosya, 'href="../' + dosya)
        html = html.replace('src="' + dosya, 'src="../' + dosya)

    # KIMLIK SAYFALARI KOKTE TEK KOPYA KALIR -> koke geri baglanir.
    #
    # Neden cevrilmis kopyalari URETILMIYOR:
    #   login/signup, Supabase OAuth'u base + 'account.html' adresine
    #   yonlendiriyor. Her dil icin ayri kopya = her dil icin ayri yonlendirme
    #   adresi ve bunlarin Supabase'de IZIN LISTESINE eklenmesi gerekir
    #   (4 dil x 4 sayfa = 16 adres). Biri unutulursa Google ile giris O DILDE
    #   sessizce kirilir. Ceviri ugruna girisi riske atmak kotu bir takas.
    #
    # Ziyaretci yine kendi dilini gorur: /tr/ sayfasi lang.js'e tercihi
    # yazar (bkz. lang.js "data-static-lang"), kokteki login sayfasi da onu
    # okuyup istemci tarafinda cevirir. Bu sayfalar zaten noindex.
    for kimlik in ("login.html", "signup.html", "account.html", "reset.html"):
        html = html.replace('href="' + kimlik, 'href="../' + kimlik)
    return html


def _damgala(html, kaynak_sha):
    """kaynak-sha1 damgasini gomer. Erken donen dallar da bunu kullanir."""
    return html.replace("</head>", DAMGA % kaynak_sha + "\n</head>", 1)


def kafayi_duzelt(html, dil, sayfa, kaynak_sha):
    kend = adres(dil, sayfa)
    en = adres(None, sayfa)

    html = re.sub(r'<link rel="canonical"[^>]*>',
                  '<link rel="canonical" href="%s">' % kend, html, count=1)
    if 'rel="canonical"' not in html:
        html = html.replace("</title>",
                            '</title>\n<link rel="canonical" href="%s">' % kend, 1)

    # Eski hreflang satirlarini TAMAMEN sil, kumeyi yeniden yaz. Kumede HER
    # dil HER dili gostermeli (kendisi dahil), yoksa Google kumeyi kabul etmez.
    html = re.sub(r'\s*<link rel="alternate" hreflang="[^"]*"[^>]*>', "", html)
    if sayfa in SITEMAP_DISI:          # noindex -> hreflang anlamsiz
        return _damgala(html, kaynak_sha)
    kume = ['<link rel="alternate" hreflang="en" href="%s">' % en]
    kume += ['<link rel="alternate" hreflang="%s" href="%s">' % (d, adres(d, sayfa))
             for d in DILLER]
    kume.append('<link rel="alternate" hreflang="x-default" href="%s">' % en)
    html = html.replace('<link rel="canonical" href="%s">' % kend,
                        '<link rel="canonical" href="%s">\n%s' % (kend, "\n".join(kume)), 1)

    html = re.sub(r'<meta property="og:url" content="[^"]*">',
                  '<meta property="og:url" content="%s">' % kend, html, count=1)
    # og:locale VARSA DEGISTIR, yoksa ekle. "yoksa ekle" yetmiyordu: kok
    # sayfalara once en_US yaziliyor, render o hali getiriyor ve dil sayfasi
    # en_US ile kaliyordu (tr/index.html "en_US" ile uretildi, yakalandi).
    yeni_loc = '<meta property="og:locale" content="%s">' % DILLER[dil]
    if "og:locale" in html:
        html = re.sub(r'<meta property="og:locale" content="[^"]*">', yeni_loc, html, count=1)
    elif "og:url" in html:
        html = html.replace('<meta property="og:url"', yeni_loc + '\n<meta property="og:url"', 1)

    # ONCEDEN URETILMIS sayfa isareti: lang.js dil degistirirken yerinde
    # cevirmek yerine dogru ADRESE gitsin (bkz. lang.js rjSetLang).
    html = re.sub(r"<html([^>]*)>",
                  lambda m: '<html%s data-static-lang="%s">' % (m.group(1), dil),
                  html, count=1)

    return _damgala(html, kaynak_sha)


def kokleri_duzelt():
    """KOK (Ingilizce) sayfalarin hreflang kumesini yeni adreslere baglar.

    Kok sayfalar bu betikle URETILMEZ - elle yazilan asil dosyalardir. Ama
    hreflang kumesi CIFT YONLU olmak zorunda: tr/index.html kokten soz edip
    kok tr'den soz etmezse Google kumeyi kabul etmez. Eskiden buradaki
    satirlar ?lang=tr gosteriyordu; artik /tr/ gosteriyor.

    Ingilizce KOKTE durur ve x-default odur: site uluslararasi, tek bir
    ulkenin dili one cikmaz.
    """
    for sayfa in SAYFALAR:
        p = os.path.join(KOK, sayfa)
        t = io.open(p, encoding="utf-8").read()
        if 'rel="canonical"' not in t:
            print("  ! canonical yok, atlandi: " + sayfa); continue
        t = re.sub(r'\s*<link rel="alternate" hreflang="[^"]*"[^>]*>', "", t)
        if sayfa in SITEMAP_DISI:      # noindex -> hreflang anlamsiz
            io.open(p, "w", encoding="utf-8", newline="").write(t)
            continue
        kume = ['<link rel="alternate" hreflang="en" href="%s">' % adres(None, sayfa)]
        kume += ['<link rel="alternate" hreflang="%s" href="%s">' % (d, adres(d, sayfa))
                 for d in DILLER]
        kume.append('<link rel="alternate" hreflang="x-default" href="%s">' % adres(None, sayfa))
        kan = '<link rel="canonical" href="%s">' % adres(None, sayfa)
        if kan not in t:
            print("  ! canonical beklenen adres degil, atlandi: " + sayfa); continue
        t = t.replace(kan, kan + "\n" + "\n".join(kume), 1)
        if "og:locale" not in t and "og:url" in t:
            t = t.replace('<meta property="og:url"',
                          '<meta property="og:locale" content="en_US">\n'
                          '<meta property="og:url"', 1)
        io.open(p, "w", encoding="utf-8", newline="").write(t)
    print("  kok sayfalarin hreflang kumesi guncellendi (%d sayfa)" % len(SAYFALAR))


def sitemap_yaz():
    """sitemap.xml'i BURADA uretir - elle tutulan bir kopya bayatlardi.

    Her adres, kumedeki TUM dilleri xhtml:link ile listeler. Bu, <head>'deki
    hreflang'in tekrari degil pekistirmesidir: Google iki kaynagi da okur ve
    biri eksikse kumeyi kabul etmeyebilir.

    noindex sayfalar (login/signup/account/reset) BURAYA GIRMEZ: site
    haritasina noindex adres koymak Search Console'da "Gonderilen URL noindex
    olarak isaretlenmis" hatasi uretir.
    """
    onc = {"index.html": "1.0", "how-it-works.html": "0.9", "features.html": "0.9",
           "pricing.html": "0.9", "download.html": "0.8", "faq.html": "0.7",
           "support.html": "0.6", "privacy.html": "0.3", "terms.html": "0.3"}
    sik = {"index.html": "weekly", "download.html": "weekly",
           "privacy.html": "yearly", "terms.html": "yearly"}
    sat = ['<?xml version="1.0" encoding="UTF-8"?>',
           "<!-- build-i18n.py tarafindan URETILIR. ELLE DUZENLEME. -->",
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
           '        xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    for sayfa in SAYFALAR:
        if sayfa in SITEMAP_DISI:
            continue
        alt = ['    <xhtml:link rel="alternate" hreflang="en" href="%s"/>' % adres(None, sayfa)]
        alt += ['    <xhtml:link rel="alternate" hreflang="%s" href="%s"/>' % (d, adres(d, sayfa))
                for d in DILLER]
        alt.append('    <xhtml:link rel="alternate" hreflang="x-default" href="%s"/>'
                   % adres(None, sayfa))
        for dil in [None] + list(DILLER):
            sat.append("  <url>")
            sat.append("    <loc>%s</loc>" % adres(dil, sayfa))
            sat += alt
            sat.append("    <changefreq>%s</changefreq>" % sik.get(sayfa, "monthly"))
            sat.append("    <priority>%s</priority>" % onc[sayfa])
            sat.append("  </url>")
    sat.append("</urlset>")
    io.open(os.path.join(KOK, "sitemap.xml"), "w", encoding="utf-8",
            newline="\n").write("\n".join(sat) + "\n")
    print("  sitemap.xml uretildi (%d adres)" % ((len(SAYFALAR) - len(SITEMAP_DISI)) * (len(DILLER) + 1)))


def uret():
    kokleri_duzelt()
    n = 0
    for dil in DILLER:
        hedef = os.path.join(KOK, dil)
        if not os.path.isdir(hedef):
            os.makedirs(hedef)
        for sayfa in SAYFALAR:
            h = render(sayfa, dil)
            if "<html" not in h:
                print("  HATA render bos: %s/%s" % (dil, sayfa)); continue
            h = kafayi_duzelt(yollari_duzelt(h), dil, sayfa, sha(os.path.join(KOK, sayfa)))
            io.open(os.path.join(hedef, sayfa), "w", encoding="utf-8", newline="").write(h)
            n += 1
        print("  %s/  -> %d sayfa" % (dil, len(SAYFALAR)))
    sitemap_yaz()
    print("\n%d sayfa uretildi" % n)


def denetle():
    bayat, eksik = [], []
    for dil in DILLER:
        for sayfa in SAYFALAR:
            u = os.path.join(KOK, dil, sayfa)
            if not os.path.exists(u):
                eksik.append("%s/%s" % (dil, sayfa)); continue
            m = DAMGA_DESEN.search(io.open(u, encoding="utf-8").read())
            if not m or m.group(1) != sha(os.path.join(KOK, sayfa)):
                bayat.append("%s/%s" % (dil, sayfa))
    if not bayat and not eksik:
        print("TAZE: uretilmis dil sayfalari kaynaklarla uyumlu."); return 0
    for x in eksik: print("  EKSIK : " + x)
    for x in bayat: print("  BAYAT : %s  (kaynagi degismis)" % x)
    print("\n'python build-i18n.py' ile yeniden uret.")
    return 1


if __name__ == "__main__":
    sys.exit(denetle() if "--check" in sys.argv else (uret() or 0))
