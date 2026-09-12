# -*- coding: utf-8 -*-
"""JOLNOVA YAYIN KOSESI ROZETI - gif / webm / png uretir.

NEDEN VAR: yayincinin kosesine konan gorsel KUCUKKEN OKUNMUYORDU (rozet
~150 px, icinde uc katman bilgi; "Jol" kirik beyaz oldugu icin acik oyun
goruntusunde eriyordu).

🔴 IKINCI TUR - "BAHIS SITESI GIBI OLMUS" (kullanici bildirdi).
Ilk surum okunuyordu ama gorsel dili yanlisti. Bahis/kumar afislerinin
imzasi olan ogeler birebir oradaydi:
  * altin degrade + siyah zemin,
  * uclari tam yuvarlak PARLAK HAP bicimi,
  * amber kenarlik,
  * ve en belirleyicisi: yazinin uzerinden gecen ISIK SUPURGESI.
Bu surumde hepsi kaldirildi:
  * SUPURGE YOK. Yerine KAYIT NOKTASI nabzi - urunun kendi isini anlatir
    (otomatik kayit), kumar afisi cagrisimi yapmaz.
  * Degrade yok, ikon DUZ amber.
  * Kenarlik notr ve ince (ya da hic).
  * Kose yaricapi dusuruldu: hap degil, uygulama rozeti.
  * Zemin saf siyah degil, notr koyu arduvaz.
Uc yon uretiliyor; en okunakli/temiz olani secilsin diye yan yana bakiliyor.

Kullanim:
  python tools/yayin_rozeti.py            -> uc yonu de uret
"""
import math
import os
import subprocess
import sys

from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "images", "overlay")
FONT = r"C:\Users\pc\Desktop\Kick-Reels-Bot\assets\fonts\Montserrat-ExtraBold.ttf"

OLCEK = 3
KARE = 30
FPS = 15                       # 2 sn dongu

AMBER = (255, 165, 21)
BEYAZ = (255, 255, 255)
KIRMIZI = (255, 90, 31)
# Notr koyu arduvaz - saf siyah + altin ikilisi kumar afisi okutuyordu.
PLAKA = (23, 26, 33)
HAT = (46, 52, 64)             # notr ince cizgi
GRI = (150, 158, 172)


def _yuvarlak_maske(boyut, r, ust_ornek=4):
    w, h = boyut
    m = Image.new("L", (w * ust_ornek, h * ust_ornek), 0)
    ImageDraw.Draw(m).rounded_rectangle(
        [0, 0, w * ust_ornek - 1, h * ust_ornek - 1],
        radius=int(r * ust_ornek), fill=255)
    return m.resize((w, h), Image.LANCZOS)


def _ikon(boy, nabiz=1.0, mono=False):
    """DUZ amber yuvarlak kare + beyaz oynat ucgeni + kayit noktasi.
    Degrade YOK (parlak altin = bahis afisi cagrisimi)."""
    kat = Image.new("RGBA", (boy, boy), (0, 0, 0, 0))
    renk = BEYAZ if mono else AMBER
    zem = Image.new("RGBA", (boy, boy), renk + (255,))
    zem.putalpha(_yuvarlak_maske((boy, boy), boy * 0.30))
    kat.alpha_composite(zem)

    d = ImageDraw.Draw(kat)
    ucgen = (23, 26, 33, 255) if mono else (255, 255, 255, 255)
    x0, y0 = boy * 0.35, boy * 0.245
    d.polygon([(x0, y0), (x0, boy - y0), (boy * 0.775, boy * 0.5)], fill=ucgen)
    return kat, None


def _nokta(kat, cx, cy, r, guc):
    """KAYIT NOKTASI - nabzi urunun isini anlatir (otomatik kayit).

    ⚠️ YARI SAYDAM HALE YOK. Ilk denemede noktanin cevresine dusuk alfali
    kirmizi bir hale ciziliyordu; amber ikonun uzerine binince kirmizi ile
    amber karisip ZEYTIN YESILI bir leke veriyordu (goruldu). Nokta artik
    TAM OPAK ve kucuk; nabiz yalnizca CAPINDA - renk hic karismiyor."""
    d = ImageDraw.Draw(kat)
    rr = r * (0.82 + 0.30 * guc)
    d.ellipse([cx - rr, cy - rr, cx + rr, cy + rr], fill=KIRMIZI + (255,))


def rozet(stil, guc=1.0):
    """stil: 'sade' | 'mono' | 'plakasiz'"""
    yazi_boy = int(64 * OLCEK)
    f = ImageFont.truetype(FONT, yazi_boy)
    d0 = ImageDraw.Draw(Image.new("RGBA", (10, 10)))
    w_jol = d0.textlength("Jol", font=f)
    w_nova = d0.textlength("nova", font=f)

    pad = int((14 if stil == "plakasiz" else 22) * OLCEK)
    ikon_boy = int(64 * OLCEK)
    bosluk = int(15 * OLCEK)
    W = pad * 2 + ikon_boy + bosluk + int(w_jol + w_nova)
    H = pad * 2 + max(ikon_boy, int(yazi_boy * 1.05))

    kart = Image.new("RGBA", (W, H), (0, 0, 0, 0))

    if stil != "plakasiz":
        # KOSE YARICAPI DUSUK: hap degil, uygulama rozeti.
        zem = Image.new("RGBA", (W, H), PLAKA + (240,))
        zem.putalpha(_yuvarlak_maske((W, H), H * 0.24))
        kart.alpha_composite(zem)
        cizgi = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ImageDraw.Draw(cizgi).rounded_rectangle(
            [1, 1, W - 2, H - 2], radius=int(H * 0.24),
            outline=HAT + (255,), width=max(2, int(1.6 * OLCEK)))
        kart.alpha_composite(cizgi)

    ik, _ = _ikon(ikon_boy, mono=(stil == "mono"))
    ik_y = (H - ikon_boy) // 2
    if stil == "plakasiz":
        # Plaka yoksa ikonun kendi golgesi olsun (her zeminde ayrissin)
        g = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        g.alpha_composite(ik, (pad, ik_y))
        g = g.filter(ImageFilter.GaussianBlur(int(4 * OLCEK)))
        koyu = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        koyu.putalpha(g.getchannel("A").point(lambda v: int(v * 0.75)))
        kart.alpha_composite(koyu)
    kart.alpha_composite(ik, (pad, ik_y))
    # Nokta IKONUN ICINDE dursun. Once kosede yariya kadar disaridaydi ve
    # kazara yapismis bir leke gibi duruyordu.
    _nokta(kart, pad + ikon_boy * 0.775, ik_y + ikon_boy * 0.235,
           ikon_boy * 0.082, guc)

    tx = pad + ikon_boy + bosluk
    ty = (H - yazi_boy * 1.30) / 2
    yazi = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    dy = ImageDraw.Draw(yazi)
    if stil == "mono":
        # Amber YALNIZCA ikonda; yazi tamamen beyaz -> altin baskinligi biter.
        dy.text((tx, ty), "Jolnova", font=f, fill=BEYAZ + (255,))
    else:
        dy.text((tx, ty), "Jol", font=f, fill=BEYAZ + (255,))
        dy.text((tx + w_jol, ty), "nova", font=f, fill=AMBER + (255,))

    if stil == "plakasiz":
        golge = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        golge.putalpha(yazi.getchannel("A"))
        golge = golge.filter(ImageFilter.GaussianBlur(int(3.5 * OLCEK)))
        k2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        k2.putalpha(golge.getchannel("A").point(lambda v: int(v * 0.85)))
        kart.alpha_composite(k2)
    kart.alpha_composite(yazi)
    return kart


def uret(stil):
    ad = "jolnova-rozet-" + stil
    os.makedirs(CIKTI, exist_ok=True)
    kareler = []
    for i in range(KARE):
        t = i / KARE
        # NABIZ: yavas ve tek yonlu bir soluk. Sinus -> dongude kirilma yok.
        guc = 0.5 + 0.5 * math.sin(2 * math.pi * t - math.pi / 2)
        kareler.append(rozet(stil, guc=guc))
    W, H = kareler[0].size

    png = os.path.join(CIKTI, ad + ".png")
    rozet(stil, guc=1.0).save(png)

    ham = os.path.join(CIKTI, "_kare")
    os.makedirs(ham, exist_ok=True)
    for i, k in enumerate(kareler):
        k.save(os.path.join(ham, "%03d.png" % i))

    webm = os.path.join(CIKTI, ad + ".webm")
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-framerate", str(FPS),
                    "-i", os.path.join(ham, "%03d.png"),
                    "-c:v", "libvpx-vp9", "-pix_fmt", "yuva420p",
                    "-b:v", "0", "-crf", "30", "-an", webm], check=True)

    gif = os.path.join(CIKTI, ad + ".gif")
    pal = os.path.join(ham, "pal.png")
    olcek = "scale=520:-1:flags=lanczos"
    subprocess.run(["ffmpeg", "-y", "-v", "error",
                    "-i", os.path.join(ham, "%03d.png"),
                    "-vf", olcek + ",palettegen=reserve_transparent=1:"
                                   "max_colors=128", pal], check=True)
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-framerate", str(FPS),
                    "-i", os.path.join(ham, "%03d.png"), "-i", pal,
                    "-lavfi", olcek + "[x];[x][1:v]paletteuse="
                                      "alpha_threshold=128",
                    "-gifflags", "+transdiff", "-loop", "0", gif], check=True)

    for f in os.listdir(ham):
        os.remove(os.path.join(ham, f))
    os.rmdir(ham)
    print("  %-26s %4dx%-4d  gif %4d KB  webm %4d KB"
          % (stil, W, H, os.path.getsize(gif) // 1024,
             os.path.getsize(webm) // 1024))


if __name__ == "__main__":
    for s in ("sade", "mono", "plakasiz"):
        uret(s)
