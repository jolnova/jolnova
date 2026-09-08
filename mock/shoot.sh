#!/usr/bin/env bash
# Jolnova mockup uretici — mock/*.html  ->  images/mock/*.png
#
# NEDEN BOYLE
#   Sitede GERCEK ekran goruntusu KULLANILMAZ: kullanicinin adi, e-postasi ve
#   gercek klipleri siteye dusmesin diye her gorsel bu klasordeki sentetik
#   HTML'lerden uretilir. Kaynak adlari da uydurmadir (NovaRift, PixelPunk,
#   EchoVibe, GlitchWave).
#
# TUVAL OLCUSU KURALI (onemli)
#   Sitede YAN YANA duran mockup'lar AYNI tuval olcusunde uretilir; yoksa
#   kartlar hizasiz durur. Esli olanlar asagida yorum satirinda isaretli.
#
# DIL
#   Her mockup BES DIL icin ayri cekilir. Sayfa dili degisince gorseldeki
#   yazi PNG oldugu icin cevrilemiyordu; Turkce sayfada Ingilizce ekran
#   goruntusu cikiyordu. Artik:
#       images/mock/<ad>.png          -> Ingilizce (kok sayfalar kullanir)
#       images/mock/<dil>/<ad>.png    -> tr / de / fr / es
#   Ceviri mock/_i18n.js + mock/_sozluk.js ile CEKIMDEN ONCE uygulanir;
#   sozluk uygulamanin kendi cevirilerinden uretilir (bkz. build-sozluk.py).
#
# Kullanim:  bash mock/shoot.sh                 (hepsi x 5 dil)
#            bash mock/shoot.sh schedule        (tek mockup, 5 dil)
#            bash mock/shoot.sh schedule tr     (tek mockup, tek dil)
#            LANGS="en tr" bash mock/shoot.sh   (dil kumesini daralt)
set -u
HERE="$(cd "$(dirname "$0")" && pwd)"
OUT="$HERE/../images/mock"
LANGS="${LANGS:-en tr de fr es}"

# Sozluk cekimden once TAZELENIR: uygulamanin metinleri degistiginde
# gorsellerin sessizce eski ceviriyle uretilmesini engeller.
if command -v python >/dev/null 2>&1; then
  python "$HERE/build-sozluk.py" || echo "  UYARI: sozluk uretilemedi, ceviri eksik olabilir"
  echo
fi
CHROME="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"
PROFILE="${TMPDIR:-/tmp}/rj-shoot-profile"

# ad:genislik:yukseklik:olcek
SHOTS="
dashboard:1360:700:1
live:1360:620:1
review:1360:640:1
automation:1360:720:1
files:1360:700:1
vertical:1360:640:1
clips:1360:620:1
analytics:1360:620:1
schedule:1360:620:1
presets:1360:700:1
camera:860:540:2
player:1000:640:2
captions:1000:640:2
capstyle:1000:640:2
settings:1000:520:2
brand:1000:520:2
trim:900:640:2
image:900:640:2
text:900:640:2
"
# esli tuvaller (site kartlari yan yana):
#   captions + capstyle   -> 1000x640 @2
#   settings + brand      -> 1000x520 @2
#   (schedule ve presets ayri bolumlerde durur, esli degil)
#   trim + image + text   ->  900x640 @2

mkdir -p "$OUT" "$PROFILE"
only="${1:-}"
onlylang="${2:-}"
[ -n "$onlylang" ] && LANGS="$onlylang"

toplam=0; hata=0
for lang in $LANGS; do
  # Ingilizce KOKTE kalir: kok sayfalar (jolnova.com/index.html) onu kullanir
  # ve mevcut <img src="images/mock/x.png"> yollari degismeden calisir.
  if [ "$lang" = "en" ]; then dir="$OUT"; else dir="$OUT/$lang"; fi
  mkdir -p "$dir"

  # ⚠️ HER DILE AYRI PROFIL.
  # Tek profili art arda kullanmak, bir onceki headless Chrome ornegi tam
  # cikmadiginda kilidi tutuyor ve SONRAKI cagri SESSIZCE ASILI KALIYOR
  # (olculdu: ayni profille ikinci dil hic donmedi; temiz profille ayni
  # cekim 1 saniye). Profil basina dizin ucuz, asili kalan cekim degil.
  lprof="$PROFILE-$lang"
  rm -rf "$lprof" 2>/dev/null
  mkdir -p "$lprof"

  for row in $SHOTS; do
    name="${row%%:*}"; rest="${row#*:}"
    w="${rest%%:*}"; rest="${rest#*:}"
    h="${rest%%:*}"; s="${rest#*:}"
    [ -n "$only" ] && [ "$only" != "$name" ] && continue
    src="$HERE/$name.html"
    [ -f "$src" ] || { echo "atlandi (yok): $name"; continue; }
    win="$src"
    case "$win" in /c/*) win="C:${win#/c}";; esac
    # ?lang= sorgusu _i18n.js'e gider; file:// adreslerinde de calisir.
    # timeout: yine de asili kalirsa tum cekim durmasin, o kare atlansin.
    timeout 60 "$CHROME" --headless=new --disable-gpu --no-first-run \
      --no-default-browser-check --user-data-dir="$lprof" --hide-scrollbars \
      --force-device-scale-factor="$s" --window-size="$w,$h" \
      --screenshot="$dir/$name.png" "file:///$win?lang=$lang" >/dev/null 2>&1
    if [ -f "$dir/$name.png" ]; then toplam=$((toplam+1)); else
      echo "  X $lang/$name"; hata=$((hata+1)); fi
  done
  echo "  $lang -> $(ls "$dir"/*.png 2>/dev/null | wc -l) gorsel"
done
echo
echo "  toplam $toplam gorsel uretildi${hata:+, $hata hata}"
