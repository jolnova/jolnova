# -*- coding: utf-8 -*-
"""Sozluk yamasi: yeni kayitlari EKLER, olu kayitlari SILER.

Elle duzenleme yerine betik kullanilmasinin sebebi: dort dosyada ayni
islemin yapilmasi ve bir tanesinin atlanmasinin HICBIR YERDE HATA
VERMEMESI. Atlanan dilde metin sessizce Ingilizce kalirdi.

Kullanim:  python tools/sozluk-yama.py
Denetim :  python tools/sozluk-denetle.py
"""
import io
import json
import os
import re
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DOSYA = {"tr": "lang.js", "de": "lang-de.js", "fr": "lang-fr.js", "es": "lang-es.js"}
# Sozlugun acilis satiri — yeni kayitlar HEMEN BUNUN ALTINA girer.
ACILIS = {"tr": "const TR = {", "de": "var RJ_DE = {",
          "fr": "var RJ_FR = {", "es": "var RJ_ES = {"}

# ---------------------------------------------------------------- EKLENECEK
# Anahtar = sayfadaki INGILIZCE METIN DUGUMUNUN TAMAMI.
# Ton: dort dilde de SAMIMI hitap (tr "sen", de "du", fr "tu", es "tú")
# — mevcut sozluklerde olculen kullanim bu (de: du 178 / Sie 19).
YENI = {
 "Everything it made lands in one queue.": {
  "tr": "Ürettiği her şey tek bir kuyruğa düşer.",
  "de": "Alles, was erzeugt wurde, landet in einer einzigen Warteschlange.",
  "fr": "Tout ce qu'il produit arrive dans une seule file.",
  "es": "Todo lo que produce llega a una sola cola."},
 "Fix what it mishears.": {
  "tr": "Yanlış duyduğunu düzelt.",
  "de": "Korrigiere, was falsch verstanden wurde.",
  "fr": "Corrige ce qu'il a mal entendu.",
  "es": "Corrige lo que oyó mal."},
 "What can you change after the cut?": {
  "tr": "Kesildikten sonra neyi değiştirebilirsin?",
  "de": "Was lässt sich nach dem Schnitt noch ändern?",
  "fr": "Que peux-tu changer après la coupe ?",
  "es": "¿Qué puedes cambiar después del corte?"},
 "Who uses it": {
  "tr": "Kimler kullanıyor",
  "de": "Wer es benutzt",
  "fr": "Qui l'utilise",
  "es": "Quién lo usa"},
 "The tracking view: which sources are being watched, and which one is recording right now.": {
  "tr": "Takip ekranı: hangi kaynaklar izleniyor ve şu anda hangisi kaydediliyor.",
  "de": "Die Tracking-Ansicht: welche Quellen beobachtet werden und welche gerade aufnimmt.",
  "fr": "La vue de suivi : quelles sources sont surveillées et laquelle enregistre en ce moment.",
  "es": "La vista de seguimiento: qué fuentes se vigilan y cuál está grabando ahora mismo."},
 "Windows 10 / 11 · runs locally": {
  "tr": "Windows 10 / 11 · yerelde çalışır",
  "de": "Windows 10 / 11 · läuft lokal",
  "fr": "Windows 10 / 11 · fonctionne en local",
  "es": "Windows 10 / 11 · funciona en local"},
 # --- tablo sutun basliklari ---
 "How it is picked up": {
  "tr": "Nasıl alınıyor",
  "de": "Wie es erfasst wird",
  "fr": "Comment c'est récupéré",
  "es": "Cómo se capta"},
 "What to know": {
  "tr": "Bilinmesi gereken",
  "de": "Was du wissen solltest",
  "fr": "Ce qu'il faut savoir",
  "es": "Lo que conviene saber"},
 "Not in Jolnova": {
  "tr": "Jolnova'da olmayan",
  "de": "Nicht in Jolnova",
  "fr": "Absent de Jolnova",
  "es": "Lo que no hay en Jolnova"},
 "What that means for you": {
  "tr": "Bunun senin için anlamı",
  "de": "Was das für dich bedeutet",
  "fr": "Ce que ça change pour toi",
  "es": "Qué significa para ti"},
}

# ----------------------------------------------------------------- SILINECEK
# Bu oturumda sayfalardan KALDIRILAN metinler. Artik hicbir kok sayfada
# gecmiyorlar; talimat geregi sozlukten de dusuyorlar.
SIL = [
 "AFTER THE DOWNLOAD",
 "Before you decide",
 "Before you run it",
 "Built around the parts you would rather not do by hand.",
 "Built for people with more footage than time.",
 "Cut it, brand it, caption it — without leaving the app.",
 "FEATURES",
 "FIRST RUN",
 "Four platforms, video links and your own files — one pipeline.",
 "HOW IT WORKS",
 "HOW PLATFORM COVERAGE WORKS",
 "LIMITS AND DETECTION",
 "PRICING",
 "Review faster. Keep only the strongest moments.",
 "The four tools you actually use.",
 "Transcription is never perfect. So the text stays editable.",
 "WHAT JOLNOVA DOES NOT DO",
 "WHAT WORKS WHERE",
 "WHO IT IS FOR",
 "What each plan actually gives you.",
]


def js(s):
    """Python dizgesini JS/JSON dizge degismezine cevirir."""
    return json.dumps(s, ensure_ascii=False)


def main():
    for dil, dosya in DOSYA.items():
        yol = os.path.join(KOK, dosya)
        s = io.open(yol, encoding="utf-8").read()

        # --- SILME ---------------------------------------------------------
        silinen = 0
        for anah in SIL:
            # Satir basindaki TAM anahtar + ':' — anahtarin baska bir kaydin
            # DEGERI icinde gecmesi durumunda yanlislikla silinmesin diye
            # satir basina ve ':' sonrasina baglaniyor.
            desen = re.compile(r'^[ \t]*' + re.escape(js(anah)) + r'[ \t]*:.*\r?\n', re.M)
            s, n = desen.subn("", s)
            silinen += n
            if n == 0:
                print("  ! %s: silinecek kayit BULUNAMADI -> %s" % (dosya, anah[:60]))
            elif n > 1:
                print("  ! %s: ayni anahtar %d kez -> %s" % (dosya, n, anah[:60]))

        # --- EKLEME --------------------------------------------------------
        acilis = ACILIS[dil]
        if acilis not in s:
            raise SystemExit("DURDURULDU: %s icinde '%s' bulunamadi." % (dosya, acilis))
        satirlar = []
        eklenen = 0
        for anah, ceviriler in YENI.items():
            if re.search(r'^[ \t]*' + re.escape(js(anah)) + r'[ \t]*:', s, re.M):
                continue                      # zaten var
            satirlar.append("  %s: %s," % (js(anah), js(ceviriler[dil])))
            eklenen += 1
        if satirlar:
            blok = ("\n  /* --- 2026-09 yeniden tasarim: bolum acilislari ve tablo\n"
                    "         basliklari degisti; asagidaki anahtarlar o degisiklikle\n"
                    "         geldi. Anahtar = metin dugumunun TAMAMI. --- */\n"
                    + "\n".join(satirlar))
            s = s.replace(acilis, acilis + blok, 1)

        io.open(yol, "w", encoding="utf-8", newline="").write(s)
        print("%-12s  silinen: %2d   eklenen: %2d" % (dosya, silinen, eklenen))
    return 0


if __name__ == "__main__":
    sys.exit(main())
