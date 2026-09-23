# -*- coding: utf-8 -*-
"""Sozluk denetimi:  kok *.html  <->  lang.js / lang-de.js / lang-fr.js / lang-es.js

NEDEN VAR
---------
lang.js ceviriyi METIN DUGUMU basina yapiyor ve anahtar, dugumun
KIRPILMIS TAMAMI. Yani bir cumlenin yarisini anahtar yazmak HIC
eslesmez; bu depoda tam olarak bu hataya dusuldu.

Elle takip edilemez: dort sozlukte toplam ~4000 kayit var ve bir
sayfa yeniden yazildiginda hangi kaydin oldugu, hangisinin eksik
kaldigi gozle bulunamaz. Bu betik iki soruyu cevaplar:

  EKSIK : sayfada duran ama sozlukte karsiligi OLMAYAN metin
          -> Turkce sayfada Ingilizce kalir
  OLU   : sozlukte duran ama artik hicbir sayfada GECMEYEN kayit
          -> silinmeli (talimat geregi)

⚠️ KAPSAM: yalnizca KOK sayfalar. tr/ de/ fr/ es/ URETILIYOR.
"""
import glob
import io
import json
import os
import re
import sys
from html.parser import HTMLParser

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ATLA = {"script", "style"}
# Cevrilmeyecek sayfalar yok; hepsi lang.js kapsaminda (noindex olanlar da
# istemci tarafinda cevriliyor).
SAYFALAR = sorted(
    os.path.basename(p) for p in glob.glob(os.path.join(KOK, "*.html"))
    if os.path.basename(p) != "_ogbuild.html"
)


class Gezgin(HTMLParser):
    """lang.js'in _rjWalk'unu taklit eder."""

    def __init__(self):
        HTMLParser.__init__(self, convert_charrefs=True)
        self.yig = []
        self.anahtarlar = []
        self.kafada = False
        self.basliklar = []

    def handle_starttag(self, tag, attrs):
        self.yig.append(tag)
        d = dict(attrs)
        if d.get("placeholder"):
            self.anahtarlar.append(d["placeholder"].strip())
        if d.get("aria-label"):
            self.anahtarlar.append(d["aria-label"].strip())
        if d.get("id") == "ck-i18n":
            for ad, deg in attrs:
                if ad.startswith("data-") and ad != "data-live" and deg:
                    # HTML'de … kacisi ham duruyor; lang.js'e giden deger
                    # tarayicinin okudugu degerdir - kacis COZULMEZ, oznitelik
                    # degeri aynen alinir.
                    self.anahtarlar.append(deg.strip())
        if tag == "meta" and d.get("name") == "description" and d.get("content"):
            self.anahtarlar.append(d["content"].strip())
        if tag == "title":
            self.kafada = True

    def handle_endtag(self, tag):
        if tag == "title":
            self.kafada = False
        while self.yig:
            if self.yig.pop() == tag:
                break

    def handle_data(self, veri):
        ebeveyn = self.yig[-1] if self.yig else ""
        if ebeveyn in ATLA:
            return
        k = veri.strip()
        if not k:
            return
        if self.kafada:
            self.anahtarlar.append(k)
            return
        # <head> icindeki metin (ld+json disinda) yok; body metni.
        self.anahtarlar.append(k)
        if ebeveyn in ("h1", "h2", "h3", "h4"):
            self.basliklar.append((ebeveyn, k))


def sayfa_anahtarlari():
    """sayfa -> anahtar kumesi"""
    cikti = {}
    for ad in SAYFALAR:
        g = Gezgin()
        g.feed(io.open(os.path.join(KOK, ad), encoding="utf-8").read())
        cikti[ad] = g.anahtarlar
    return cikti


_KAYIT = re.compile(r'^\s*"((?:[^"\\]|\\.)*)"\s*:', re.M)


def sozluk_anahtarlari(dosya):
    """Sozluk dosyasindan ANAHTARLARI cikarir.

    json.loads kullanilamiyor: dosya bir JS modulu ve icinde /* yorum */
    satirlari var. Anahtarlar her zaman satir basinda tirnak icinde ve
    ardindan ':' geliyor - desen onu yakalar."""
    s = io.open(os.path.join(KOK, dosya), encoding="utf-8").read()
    ham = _KAYIT.findall(s)
    # JS kacislarini coz ("…", "\"", "\\")
    return [json.loads('"%s"' % k) for k in ham]


def main():
    sayfalar = sayfa_anahtarlari()
    tum = set()
    for ad in sayfalar:
        tum |= set(sayfalar[ad])

    sozlukler = {
        "tr": "lang.js", "de": "lang-de.js", "fr": "lang-fr.js", "es": "lang-es.js",
    }
    hata = 0
    for dil, dosya in sozlukler.items():
        anah = sozluk_anahtarlari(dosya)
        kume = set(anah)
        eksik = sorted(k for k in tum if k not in kume)
        olu = sorted(k for k in kume if k not in tum)
        print("\n=== %s (%s) — %d kayit ===" % (dil.upper(), dosya, len(anah)))
        print("  EKSIK: %d   OLU: %d" % (len(eksik), len(olu)))
        if "--eksik" in sys.argv:
            for k in eksik:
                print("   EKSIK | " + k[:150])
        if "--olu" in sys.argv:
            for k in olu:
                print("   OLU   | " + k[:150])
        if eksik:
            hata = 1
    return hata


if __name__ == "__main__":
    sys.exit(main())
