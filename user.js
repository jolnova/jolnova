/* Jolnova — basliktaki kullanici rozeti
   ============================================================
   NE YAPAR: giris yapilmissa sag ustteki "Giris yap" dugmesini
   kullanicinin FOTOGRAFI + ADI ile degistirir; tiklayinca hesap
   sayfasina goturur.

   NEDEN SUPABASE SDK KULLANMIYOR
   -------------------------------
   supabase.js YALNIZCA dort sayfada yuklu (login/signup/reset/account).
   Rozeti her sayfada gostermek icin SDK'yi tanitim sayfalarina da
   yuklemek gerekirdi; o dosya ~50 KB'tan buyuk ve ana sayfanin ilk
   yuklenmesini yavaslatirdi. Rozet GORSEL bir sey - gercek yetki
   kontrolu zaten korumali sayfalarda (account.html) yapiliyor.

   Bunun yerine account.html girisin hemen ardindan kucuk bir "ipucu"
   birakiyor (jolnovaProfilYaz), burasi da onu okuyor.

   ⚠️ SUPABASE'IN KENDI localStorage ANAHTARI OKUNMUYOR ('sb-...').
   O anahtarin ICERIK BICIMI supabase-js surumune gore degisiyor
   (bir surumde {user:...}, digerinde {currentSession:{user:...}}).
   Kutuphane guncellendiginde rozet sessizce bosalirdi. Kendi
   yazdigimiz kucuk kayit surume bagimli degil.
   ============================================================ */
(function () {
  "use strict";

  var ANAHTAR = "jolnova_profil";

  function oku() {
    try {
      var h = localStorage.getItem(ANAHTAR);
      if (!h) return null;
      var p = JSON.parse(h);
      return (p && (p.ad || p.mail)) ? p : null;
    } catch (e) { return null; }   // ozel sekme / bozuk kayit
  }

  /* Ad yoksa e-postanin @ oncesi. Hicbiri yoksa rozet cizilmez. */
  function gorunenAd(p) {
    var a = (p.ad || "").trim();
    if (a) return a;
    var m = (p.mail || "").split("@")[0];
    return m || "";
  }

  function basHarfler(ad) {
    var p = ad.trim().split(/\s+/);
    var s = (p[0] || "")[0] || "";
    if (p.length > 1) s += (p[p.length - 1] || "")[0] || "";
    return s.toUpperCase();
  }

  function rozet(p, kucuk) {
    var ad = gorunenAd(p);
    var a = document.createElement("a");
    a.href = "account.html";
    a.className = "userchip" + (kucuk ? " sm" : "");
    a.title = p.mail || ad;

    var av = document.createElement("span");
    av.className = "userchip-av";
    if (p.foto) {
      var img = document.createElement("img");
      img.src = p.foto;
      img.alt = "";
      /* Google fotograf adresi zamanla gecersizlesebiliyor; kirik
         gorsel yerine bas harflere don. */
      img.onerror = function () { av.textContent = basHarfler(ad); };
      av.appendChild(img);
    } else {
      av.textContent = basHarfler(ad);
    }

    var isim = document.createElement("span");
    isim.className = "userchip-ad";
    isim.textContent = ad;

    a.appendChild(av);
    a.appendChild(isim);
    return a;
  }

  function uygula() {
    var p = oku();
    if (!p) return;                       // giris yok -> dokunma
    var ad = gorunenAd(p);
    if (!ad) return;

    // Masaustu basligi + mobil menu: ikisinde de giris baglantisi var.
    var hedefler = document.querySelectorAll(
      '.head-cta a[href="login.html"], .mobnav a[href="login.html"]');
    for (var i = 0; i < hedefler.length; i++) {
      var eski = hedefler[i];
      var kucuk = eski.className.indexOf("btn-sm") >= 0;
      eski.parentNode.replaceChild(rozet(p, kucuk), eski);
    }
    // Altbilgideki "Giris yap" -> "Hesabim"
    var alt = document.querySelectorAll('.site-footer a[href="login.html"]');
    for (var j = 0; j < alt.length; j++) {
      alt[j].href = "account.html";
      alt[j].textContent = "My account";
      alt[j].__en = "My account";        // lang.js ceviriyi buradan okur
    }
  }

  /* account.html bunu cagirir; baska sayfalar yalnizca OKUR. */
  window.jolnovaProfilYaz = function (ad, mail, foto) {
    try {
      localStorage.setItem(ANAHTAR, JSON.stringify(
        { ad: ad || "", mail: mail || "", foto: foto || "" }));
    } catch (e) {}
  };
  window.jolnovaProfilSil = function () {
    try { localStorage.removeItem(ANAHTAR); } catch (e) {}
  };

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", uygula);
  else
    uygula();
})();
