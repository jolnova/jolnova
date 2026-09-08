/* Mockup ceviri katmani  —  ?lang=tr ile calisir
   ============================================================
   NE ISE YARAR
     Ekran goruntuleri PNG; icindeki yazi sonradan cevrilemez. Bu yuzden
     her mockup HER DIL ICIN AYRI cekiliyor (bkz. mock/shoot.sh) ve
     cekimden once bu dosya sayfayi o dile ceviriyor.

   ADRES: mockup dosyasi file:// ile aciliyor, ornek
     trim.html?lang=tr
   lang yoksa ya da 'en' ise hicbir sey yapilmaz - Ingilizce asil kalir.

   NEYIN CEVRILECEGINI SOZLUK BELIRLER
     Sozlukte KARSILIGI OLMAYAN metne DOKUNULMAZ. Uydurma kanal adlari
     (NovaRift, EchoVibe), dosya yollari, sayilar ve etiketler zaten
     sozlukte olmadigi icin kendiliginden oldugu gibi kalir; ayrica
     "bunu cevirme" diye isaretlemeye gerek yok.

   ⚠️ CEKIM ZAMANLAMASI
     headless Chrome --screenshot, load olayindan sonra goruntuyu alir.
     Bu dosya <body> sonunda, senkron olarak calisiyor; yani goruntu
     alinmadan cok once bitiyor. Asenkron (fetch/await) bir sey EKLEME:
     cekim onu beklemez ve yari cevrilmis kare cikar.
   ============================================================ */
(function () {
  "use strict";

  var m = /[?&]lang=([a-z]{2})/.exec(location.search);
  var dil = m ? m[1] : "en";

  /* Ceviri olmasa bile lang niteligini yaziyoruz: yazi tipi secimi ve
     tireleme buna bakar, ayrica cekilen karede hangi dil oldugu belli olur. */
  document.documentElement.setAttribute("lang", dil);

  /* Kenar cubugundaki dil secici (EN TR DE FR ES) ISARETI de kaymali.
     Yoksa Turkce cekilmis goruntude secici "EN" gosterir ve ekran
     goruntusu kendi kendisiyle celisir. Ceviri tablosundan BAGIMSIZ,
     Ingilizce cekimde de dogru calismali - bu yuzden erken donusten ONCE. */
  var secici = document.querySelectorAll(".lang b");
  if (secici.length) {
    for (var s = 0; s < secici.length; s++) {
      var kod = (secici[s].textContent || "").trim().toLowerCase();
      secici[s].classList.toggle("on", kod === dil);
    }
  }

  if (dil === "en") return;
  var tablo = window.MOCK_SOZLUK && window.MOCK_SOZLUK[dil];
  if (!tablo) return;

  /* Once TUM metin dugumlerini topluyoruz, sonra degistiriyoruz.
     Gezerken degistirmek gezgini bozar (dugum degisince konum kayar). */
  var gezgin = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
  var dugumler = [], d;
  while ((d = gezgin.nextNode())) dugumler.push(d);

  for (var i = 0; i < dugumler.length; i++) {
    var dn = dugumler[i], ust = dn.parentNode;
    if (!ust || /^(SCRIPT|STYLE)$/.test(ust.nodeName)) continue;
    /* Dil secicisinin ICI cevrilmez. Kodlar (EN TR DE FR ES) kisa dizeler
       ve uygulamanin sozlugunde baska bir seye denk gelebiliyorlar:
       "FR" -> uygulamada "Fr" = Cuma kisaltmasi -> secici "CU" gosterdi.
       Uretici tarafinda da engelli (build-sozluk.py DOKUNMA); ikisi birden
       duruyor cunku bu, sessizce yanlis goruntu ureten bir hataydi. */
    if (ust.closest && ust.closest(".lang")) continue;

    var ham = dn.nodeValue;
    /* Anahtar KIRPILMIS metin; degistirirken cevredeki bosluklar korunsun
       diye ham metnin icinde yerine yaziyoruz (biçim bozulmasin). */
    var anahtar = ham.replace(/\s+/g, " ").trim();
    if (!anahtar) continue;

    var ceviri = tablo[anahtar];
    if (ceviri) dn.nodeValue = ham.replace(ham.trim(), ceviri);
  }

  /* placeholder / title / alt gibi nitelikler de gorunur olabiliyor. */
  var nitelikli = document.querySelectorAll("[placeholder],[title],[alt]");
  for (var j = 0; j < nitelikli.length; j++) {
    var el = nitelikli[j];
    ["placeholder", "title", "alt"].forEach(function (n) {
      var v = el.getAttribute(n);
      if (v && tablo[v.trim()]) el.setAttribute(n, tablo[v.trim()]);
    });
  }
})();
