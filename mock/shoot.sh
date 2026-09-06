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
# Kullanim:  bash mock/shoot.sh            (hepsi)
#            bash mock/shoot.sh schedule   (tek dosya)
set -u
HERE="$(cd "$(dirname "$0")" && pwd)"
OUT="$HERE/../images/mock"
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
for row in $SHOTS; do
  name="${row%%:*}"; rest="${row#*:}"
  w="${rest%%:*}"; rest="${rest#*:}"
  h="${rest%%:*}"; s="${rest#*:}"
  [ -n "$only" ] && [ "$only" != "$name" ] && continue
  src="$HERE/$name.html"
  [ -f "$src" ] || { echo "atlandi (yok): $name"; continue; }
  win="$src"
  case "$win" in /c/*) win="C:${win#/c}";; esac
  "$CHROME" --headless=new --disable-gpu --no-first-run --no-default-browser-check \
    --user-data-dir="$PROFILE" --hide-scrollbars \
    --force-device-scale-factor="$s" --window-size="$w,$h" \
    --screenshot="$OUT/$name.png" "file:///$win" >/dev/null 2>&1
  if [ -f "$OUT/$name.png" ]; then echo "✓ $name.png  ${w}x${h} @${s}x"; else echo "✗ $name"; fi
done
