# -*- coding: utf-8 -*-
"""_eksik.json'u ikiye ayirir: cevrilecekler / oldugu gibi kalacaklar.

DOKUNULMAYACAKLAR, mockup'in UYDURMA ORNEK VERISI: kanal adlari, kullanici
adi, etiketler, dosya yolu, platform adlari, sayfalama sayaci. Bunlar
uygulamada da cevrilmez (ozel ad ya da veri).

DIKKAT: icinde "Jolnova" GECEN CUMLE cevrilir - marka adi cumlenin icinde
gecebilir ("Jolnova is up to date"). Yalnizca marka/kanal adinin KENDISI
veri sayilir.
"""
import json
import pathlib
import re

BURASI = pathlib.Path(__file__).resolve().parent
eksik = json.loads((BURASI / "_eksik.json").read_text(encoding="utf-8"))

OZEL_AD = {"NovaRift", "PixelPunk", "EchoVibe", "GlitchWave", "DriftMode",
           "Mila", "Jolnova", "Kick", "Twitch", "YouTube", "TikTok",
           "EN", "TR", "DE", "FR", "ES",
           # Logo iki parcaya bolunmus: <span>Jol<b>nova</b></span>.
           # Metin dugumleri ayri geldigi icin sozlukte "Jol" ve "nova"
           # diye gorunuyorlar; markanin parcalari, cevrilmezler.
           "Jol", "nova",
           "KICK", "REC",                 # platform rozeti / kayit gostergesi
           "Segoe UI Semibold",           # yazi tipi adi
           "Podcast Episode 32.mp4",      # ornek dosya adi
           "channel-logo.png", "kick.com/novarift"}


def veri_mi(t):
    if t.startswith("#"):
        return True
    if t in OZEL_AD:
        return True
    if re.match(r"^[A-Z]:\\", t):                      # dosya yolu
        return True
    # "NovaRift · Kick", "EchoVibe · Kick · 24 seconds · 1080p · 9:16"
    if "·" in t and t.split("·")[0].strip() in OZEL_AD:
        return True
    # "Kick 18", "YouTube 0"  (platform + sayac)
    m = re.match(r"^([A-Za-z]+)\s+\d+$", t)
    if m and m.group(1) in OZEL_AD:
        return True
    if re.match(r"^[\d,]+[–-][\d,]+ of [\d,]+$", t):   # "1–8 of 42"
        return True
    return False


veri = [t for t in sorted(eksik) if veri_mi(t)]
cev = [t for t in sorted(eksik) if not veri_mi(t)]

(BURASI / "_ceviri-gerekli.json").write_text(
    json.dumps(cev, ensure_ascii=False, indent=1), encoding="utf-8")

print("  oldugu gibi kalacak (uydurma veri) : %d" % len(veri))
print("  CEVIRI GEREKEN                     : %d" % len(cev))
print("  -> mock/_ceviri-gerekli.json")
