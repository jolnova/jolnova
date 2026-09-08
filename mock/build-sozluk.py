# -*- coding: utf-8 -*-
"""mock/_sozluk.js URETICISI  —  mockup ekran goruntuleri icin ceviri tablosu

NEDEN VAR
    Mockup'lar PNG'ye cekiliyor; PNG'nin icindeki yazi sonradan cevrilemez.
    Turkce sayfada Ingilizce ekran goruntusu cikiyordu. Cozum: mockup'i her
    dil icin AYRI cekmek - ama once mockup'in kendisinin cevrilmesi lazim.

CEVIRI NEREDEN GELIYOR
    1) UYGULAMANIN KENDI SOZLUGU  (src/panel.py -> const TR/DE/FR/ES)
       Asil kaynak burasi. Ekran goruntusu boylece uygulamanin o dildeki
       GERCEK halini gosterir; ayri bir ceviri uydurmuyoruz, uygulamada ne
       yaziyorsa gorselde de o yaziyor.
    2) _ek-sozluk.json  (elle bakilan)
       Mockup'a OZGU metinler: bolum basliklari, ornek klip adlari,
       aciklamalar. Bunlarin uygulamada karsiligi yok cunku uydurma ornek
       veri (gercek kullanici verisi siteye dusmesin diye).

NEDEN TUM SOZLUGU KOPYALAMIYORUZ
    Uygulamada dort dilde ~6200 giris var; hepsini yazmak ~700 KB'lik bir
    dosya demek. Mockup'lar bunun ancak birkac yuzunu kullaniyor. Bu betik
    mock/*.html'i TARAYIP yalnizca GECEN metinleri yaziyor.

CEVRILMEYENLER (bilerek)
    Sozlukte KARSILIGI OLMAYAN metne DOKUNULMAZ. Boylece uydurma kanal
    adlari (NovaRift, EchoVibe...), dosya yollari, sayilar ve etiketler
    kendiliginden oldugu gibi kaliyor - ayrica isaretlemeye gerek yok.
    Sozluk, cevrilecekler listesinin ta kendisi.

KULLANIM
    python mock/build-sozluk.py            # uret + eksikleri bildir
    python mock/build-sozluk.py --eksik    # yalnizca eksik listesini yaz
"""
import html
import json
import pathlib
import re
import sys

BURASI = pathlib.Path(__file__).resolve().parent
SITE = BURASI.parent
PANEL = pathlib.Path(r"C:\Users\pc\Desktop\Kick-Reels-Bot\src\panel.py")

DILLER = ("tr", "de", "fr", "es")

# ---------------------------------------------------------------- DOKUNMA
# Bu metinler HICBIR ZAMAN cevrilmez. Kisa dizeler uygulamanin sozlugunde
# BASKA bir sey icin bulunabiliyor ve sessizce yanlis ceviri uretiyor:
#
#   "FR" (dil kodu)  ->  uygulamada "Fr" = Cuma kisaltmasi  ->  "CU"
#
# Ekran goruntusunde dil secicisi "EN TR DE CU ES" cikti; olculdu ve
# yakalandi. Ozel adlar ve marka parcalari da burada.
DOKUNMA = {
    "EN", "TR", "DE", "FR", "ES",          # dil secici kodlari
    "Jol", "nova",                          # logo iki metin dugumune bolunmus
    "Jolnova",
    "Kick", "Twitch", "YouTube", "TikTok", "KICK",
    "NovaRift", "PixelPunk", "EchoVibe", "GlitchWave", "DriftMode", "Mila",
    "REC",
    "Segoe UI Semibold",                    # yazi tipi adi
    "Podcast Episode 32.mp4", "channel-logo.png", "kick.com/novarift",
}


# ----------------------------------------------------------- uygulama sozlugu
def uygulama_sozlugu():
    """src/panel.py icindeki `const TR={...};` bloklarini okur."""
    if not PANEL.exists():
        sys.exit("panel.py bulunamadi: %s" % PANEL)
    kaynak = PANEL.read_text(encoding="utf-8", errors="replace")
    out = {}
    for dil in DILLER:
        m = re.search(r"^const %s=\{" % dil.upper(), kaynak, re.M)
        if not m:
            out[dil] = {}
            continue
        son = kaynak.find("\n};", m.end())
        govde = kaynak[m.end():son]
        # "anahtar":"deger"  — kacisli tirnaklari da tasiyabilir
        ciftler = re.findall(r'"((?:[^"\\]|\\.)*)"\s*:\s*"((?:[^"\\]|\\.)*)"', govde)
        out[dil] = {_coz(a): _coz(b) for a, b in ciftler}
    return out


def _coz(s):
    """JS dize kacislarini geri al ( \\" \\\\ \\n )."""
    return s.replace('\\"', '"').replace("\\n", "\n").replace("\\\\", "\\")


# --------------------------------------------------------------- TURETME
# Mockup metni uygulamadakinin SUSLENMIS halidir: basina/sonuna sayi, basina
# emoji, sonuna oklu chevron eklenmis ya da tamami BUYUK HARF yazilmistir.
# Bunlarin her biri icin ayri sozluk girisi yazmak (ve 19 dosyayi elle
# duzenlemek) gereksiz: susu ayirip GOVDEYI ceviriyor, susu geri takiyoruz.
#
# Ornekler:
#   "Kick 18"        -> "Kick" + " 18"
#   "2 live now"     -> "2 " + "live now"
#   "SUBS"           -> "Subs" (buyuk harfe geri)
#   "🖼 Image"        -> "🖼 " + "Image"
#   "Newest first ⌄" -> "Newest first" + " ⌄"

SUS = "⌄⌃▾▴↓↑⬇⬆⌕✂🖼🎥🎮🎨💾⚡✓✔×✕+ \t"

# Turkce buyuk harf: str.upper() "i" harfini "I" yapar, dogrusu "İ".
_TR_BUYUK = str.maketrans("iı", "İI")


def _buyut(s, dil):
    return (s.translate(_TR_BUYUK) if dil == "tr" else s).upper()


def govdesi(s):
    """Bastaki/sondaki susu ve noktalamayi atar (buyuk/kucuk harf korunur)."""
    return s.strip(SUS).strip(" —-–·:.")


def sadelestir(s):
    """Eslesme ANAHTARI: susu atip kucuk harfe indirir."""
    return govdesi(s).lower()


def _bas_buyut(s, dil):
    if not s:
        return s
    ilk = s[0].translate(_TR_BUYUK) if dil == "tr" else s[0]
    return ilk.upper() + s[1:]


def turet(metin, tablo, dil, sade=None):
    """metin sozlukte yoksa suslerini ayirip govdeyi cevirmeyi dener.

    `sade`: tablonun SADELESTIRILMIS anahtar dizini. Sus MOCKUP'ta degil de
    UYGULAMADA olabiliyor ("Save all to folder" <-> "💾 Save all to folder",
    "🎥 Camera setup" <-> "🎥 Camera setup —"); tek yonlu kirpma bunlari
    kaciriyordu.
    """
    # Sayi kalibi ZAMAN degerlerini de kapsar (0:17, 1:04.5): uygulama
    # "selected: " + sure seklinde yaziyor ve sozlukte "selected:" duruyor.
    SAY = r"[\d][\d.,:]*"

    # 1) bastaki sayi:  "2 live now" / "38 clips waiting for review"
    m = re.match(r"^(%s\s+)(.+)$" % SAY, metin)
    if m and m.group(2) in tablo:
        return m.group(1) + tablo[m.group(2)]

    # 2) sondaki sayi:  "Kick 18" / "All 42" / "selected: 0:17"
    m = re.match(r"^(.+?)(\s+%s)$" % SAY, metin)
    if m and m.group(1) in tablo:
        return tablo[m.group(1)] + m.group(2)

    # 3) bastaki/sondaki sus:  "🖼 Image" / "Newest first ⌄"
    govde = metin.strip(SUS)
    if govde and govde != metin and govde in tablo:
        bas = metin[:len(metin) - len(metin.lstrip(SUS))]
        son = metin[len(metin.rstrip(SUS)):]
        return bas + tablo[govde] + son

    # 4) yalnizca buyuk/kucuk harf farki:  "SUBS" -> "Subs"
    #    Cevirinin de mockup'taki bicimi almasi gerekiyor, yoksa tasarimdaki
    #    BUYUK HARF baslik kucuk harfe donerdi.
    if metin.isupper():
        for k, v in tablo.items():
            if k.upper() == metin:
                return _buyut(v, dil)

    # 5) IKI YONLU sadelestirme: sus mockup'ta da olabilir uygulamada da.
    #    Mockup'in kendi susunu KORUYUP govdenin cevirisini koyuyoruz -
    #    yani "🎥 Camera setup" -> "🎥 Kamera kurulumu" (uygulamadaki
    #    sondaki "—" tasarima sizmaz).
    if sade:
        n = sadelestir(metin)
        if n and n in sade:
            bas = metin[:len(metin) - len(metin.lstrip(SUS))]
            son = metin[len(metin.rstrip(SUS)):]
            # DEGERIN susu de atiliyor. Atmazsak uygulamanin kendi emojisi
            # mockup'inkinin ustune biniyordu:
            #   "🎥 Camera setup" -> "🎥 " + "🎥 Kamera ayari —"  (cift emoji)
            # ve mockup'ta emoji olmasa bile deger emojiyi getiriyordu:
            #   "Save all to folder" -> "💾 Hepsini klasore kaydet"
            govde = govdesi(sade[n])
            iskelet = govdesi(metin)
            if iskelet.isupper():
                govde = _buyut(govde, dil)
            elif iskelet[:1].isupper():
                # Uygulamada cumle ICINDE gectigi icin kucuk harfle
                # yazilmis olabilir ("subtitle style"); mockup'ta baslik.
                govde = _bas_buyut(govde, dil)
            return bas + govde + son
    return None


# ------------------------------------------------------- mockup'taki metinler
def mock_metinleri():
    """mock/*.html icindeki GORUNUR metinleri toplar.

    Tarayicidaki metin dugumleriyle ayni sonucu vermeli: bu yuzden HTML
    varliklari cozuluyor (&amp; -> &), bosluklar sadelestiriliyor.
    """
    bulunan = {}
    for f in sorted(BURASI.glob("*.html")):
        h = f.read_text(encoding="utf-8", errors="replace")
        h = re.sub(r"<(script|style)\b.*?</\1>", " ", h, flags=re.S | re.I)
        h = re.sub(r"<!--.*?-->", " ", h, flags=re.S)
        for ham in re.findall(r">([^<>]+)<", h):
            t = re.sub(r"\s+", " ", html.unescape(ham)).strip()
            if len(t) < 2:
                continue
            if not re.search(r"[A-Za-z]{2}", t):     # saf sayi/simge
                continue
            bulunan.setdefault(t, set()).add(f.stem)
    return bulunan


# --------------------------------------------------------------------- uretim
def main():
    app = uygulama_sozlugu()
    for d in DILLER:
        if not app[d]:
            print("  UYARI: uygulamada %s sozlugu bulunamadi" % d.upper())

    ek_yolu = BURASI / "_ek-sozluk.json"
    ek = json.loads(ek_yolu.read_text(encoding="utf-8")) if ek_yolu.exists() else {}

    metinler = mock_metinleri()
    sozluk = {d: {} for d in DILLER}
    eksik = {}

    # Turetme, uygulama sozlugu ILE elle eklerin BIRLESIMI uzerinde calisir:
    # "Stay idle all day ⌄" susunu atinca elle eklenmis "Stay idle all day"a
    # denk geliyor - yalnizca uygulamaya bakan turetme bunu kaciriyordu.
    birlesik, sade = {}, {}
    for d in DILLER:
        birlesik[d] = dict(app[d])
        for en, karsilik in ek.items():
            if isinstance(karsilik, dict) and karsilik.get(d):
                birlesik[d][en] = karsilik[d]
        sade[d] = {}
        for k, v in birlesik[d].items():
            sade[d].setdefault(sadelestir(k), v)

    turetilen = 0
    for t, dosyalar in metinler.items():
        if t in DOKUNMA:
            continue                       # sozluge HIC girmez -> cevrilmez
        nerede = None
        for d in DILLER:
            # SIRA: uygulamanin birebir karsiligi > elle ek > turetme.
            c = app[d].get(t) or (ek.get(t, {}) or {}).get(d)
            if not c:
                c = turet(t, birlesik[d], d, sade[d])
                if c:
                    turetilen += 1
            if c:
                sozluk[d][t] = c
                nerede = True
        if not nerede:
            eksik[t] = sorted(dosyalar)

    # --- _sozluk.js ---
    govde = json.dumps(sozluk, ensure_ascii=False, indent=0, sort_keys=True)
    (BURASI / "_sozluk.js").write_text(
        "/* URETILMIS DOSYA - ELLE DEGISTIRME.\n"
        "   Uretici: mock/build-sozluk.py\n"
        "   Kaynak : Kick-Reels-Bot/src/panel.py (uygulamanin kendi sozlugu)\n"
        "            + mock/_ek-sozluk.json (mockup'a ozgu metinler)\n"
        "   Yeniden uretmek icin: python mock/build-sozluk.py */\n"
        "window.MOCK_SOZLUK = " + govde + ";\n",
        encoding="utf-8")

    toplam = len(metinler)
    kapsanan = toplam - len(eksik)
    print("  mock/*.html icinde %d essiz metin" % toplam)
    for d in DILLER:
        print("    %s: %d ceviri" % (d.upper(), len(sozluk[d])))
    print("  kapsam: %d/%d  (%.0f%%)   [%d giris turetildi]"
          % (kapsanan, toplam, 100.0 * kapsanan / max(1, toplam), turetilen))
    print("  -> mock/_sozluk.js  (%.1f KB)" % ((BURASI / "_sozluk.js").stat().st_size / 1024))

    if eksik:
        yol = BURASI / "_eksik.json"
        yol.write_text(json.dumps(eksik, ensure_ascii=False, indent=1, sort_keys=True),
                       encoding="utf-8")
        print("  CEVRILMEYEN: %d  -> mock/_eksik.json" % len(eksik))
        print("     (uydurma kanal adi / sayi / etiket ise DOGRU davranis;")
        print("      gercek arayuz metniyse _ek-sozluk.json'a eklenmeli)")


if __name__ == "__main__":
    main()
