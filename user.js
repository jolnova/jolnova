/* Jolnova — basliktaki kullanici rozeti
   ============================================================
   NE YAPAR: giris yapilmissa sag ustteki "Giris yap" dugmesini
   kullanicinin FOTOGRAFI + ADI ile degistirir; tiklayinca profil
   ayarlari sayfasina (account.html) goturur.

   ---------------------------------------------------------------
   ONCEKI SURUMDEKI HATA (bu dosyanin var olma sebebi)
   ---------------------------------------------------------------
   Rozet YALNIZCA kendi yazdigimiz 'jolnova_profil' kaydini okuyordu ve
   o kaydi SADECE account.html yaziyordu. Yani:

       giris yap -> ana sayfaya don  =>  kayit hic yazilmamis
                                     =>  rozet cizilmiyor
                                     =>  kullanici hala "Giris yap" goruyor

   Rozetin gorunmesi icin once hesap sayfasina ugramak gerekiyordu ki
   bunu kimse yapmiyor. Cozum: oturumun ASIL kaynagini da okumak.

   ---------------------------------------------------------------
   NEDEN SUPABASE SDK'SI YUKLENMIYOR
   ---------------------------------------------------------------
   supabase-js ~50 KB ve yalnizca dort sayfada (login/signup/reset/account)
   gerekiyor. Rozeti her sayfada gostermek icin onu tanitim sayfalarina da
   yuklemek ana sayfanin ilk acilisini yavaslatirdi. Rozet GORSEL bir sey;
   gercek yetki kontrolu zaten korumali sayfada yapiliyor. Bu yuzden
   SDK yerine oturum kaydini DOGRUDAN, surume toleransli bicimde okuyoruz.

   OKUMA SIRASI:
     1) jolnova_profil        -> bizim kaydimiz, hizli ve bicimi sabit
     2) sb-<ref>-auth-token   -> Supabase'in kendi kaydi (yedek)
   2'den okuduysak 1'e de yaziyoruz ("kendini onaran" davranis), boylece
   bir sonraki sayfada tekrar cozmeye gerek kalmiyor.

   2. adimin bicimi supabase-js surumune gore degisiyor; asagidaki
   ayikla() UC bicimi birden karsiliyor ve hicbiri tutmazsa sessizce
   null donuyor - yani kutuphane yarin bicimi yine degistirirse rozet
   kaybolur ama sayfa BOZULMAZ.
   ============================================================ */
(function () {
  "use strict";

  var ANAHTAR = "jolnova_profil";

  /* ---------------------------------------------------------- yardimcilar */

  function jsonCoz(metin) {
    /* supabase-js 2.9x+ degeri "base64-<...>" olarak saklayabiliyor. */
    if (metin.indexOf("base64-") === 0) {
      try { metin = atob(metin.slice(7)); } catch (e) { return null; }
    }
    try { return JSON.parse(metin); } catch (e) { return null; }
  }

  /* Oturum kaydindan kullanici nesnesini cikarir. Bilinen tum bicimler. */
  function ayikla(k) {
    if (!k || typeof k !== "object") return null;
    return k.user                                   /* {access_token, user}   */
        || (k.currentSession && k.currentSession.user)  /* eski gojs bicimi   */
        || (k.session && k.session.user)                /* sarmalanmis bicim  */
        || null;
  }

  /* Supabase'in localStorage kaydini bul. Proje referansi adin icinde
     oldugu icin sabit yazamayiz; kalibi tariyoruz. */
  function supabaseOturumu() {
    var anahtarlar;
    try { anahtarlar = Object.keys(localStorage); } catch (e) { return null; }
    for (var i = 0; i < anahtarlar.length; i++) {
      var ad = anahtarlar[i];
      if (ad.indexOf("sb-") !== 0 || ad.indexOf("-auth-token") < 0) continue;
      var ham;
      try { ham = localStorage.getItem(ad); } catch (e) { continue; }
      if (!ham) continue;
      var u = ayikla(jsonCoz(ham));
      if (u) return u;
    }
    return null;
  }

  /* Supabase kullanicisi -> bizim sade kaydimiz. */
  function kullanicidan(u) {
    var md = u.user_metadata || {};
    return {
      ad:   (md.full_name || md.name || "").trim(),
      mail: u.email || "",
      foto: md.avatar_url || md.picture || ""
    };
  }

  function oku() {
    /* 1) bizim kayit */
    try {
      var h = localStorage.getItem(ANAHTAR);
      if (h) {
        var p = JSON.parse(h);
        if (p && (p.ad || p.mail)) return p;
      }
    } catch (e) {}                       /* ozel sekme / bozuk kayit */

    /* 2) Supabase oturumu — ve kendini onar */
    var u = supabaseOturumu();
    if (!u) return null;
    var y = kullanicidan(u);
    if (!y.ad && !y.mail) return null;
    try { localStorage.setItem(ANAHTAR, JSON.stringify(y)); } catch (e) {}
    return y;
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

  /* ------------------------------------------------------------- cizim */

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
    if (!p) return;                       /* giris yok -> dokunma */
    var ad = gorunenAd(p);
    if (!ad) return;

    /* Masaustu basligi + mobil menu: ikisinde de giris baglantisi var.
       Zaten cizilmis rozeti tekrar cizmemek icin once onlari da sayiyoruz. */
    var hedefler = document.querySelectorAll(
      '.head-cta a[href="login.html"], .mobnav a[href="login.html"]');
    for (var i = 0; i < hedefler.length; i++) {
      var eski = hedefler[i];
      var kucuk = eski.className.indexOf("btn-sm") >= 0;
      eski.parentNode.replaceChild(rozet(p, kucuk), eski);
    }
    /* Altbilgideki "Giris yap" -> "Hesabim" */
    var alt = document.querySelectorAll('.site-footer a[href="login.html"]');
    for (var j = 0; j < alt.length; j++) {
      alt[j].href = "account.html";
      alt[j].textContent = "My account";
      alt[j].__en = "My account";        /* lang.js ceviriyi buradan okur */
    }
  }

  /* ------------------------------------------------------------- API */

  /* account.html / login.html bunu cagirir. */
  window.jolnovaProfilYaz = function (ad, mail, foto) {
    try {
      localStorage.setItem(ANAHTAR, JSON.stringify(
        { ad: ad || "", mail: mail || "", foto: foto || "" }));
    } catch (e) {}
  };
  window.jolnovaProfilSil = function () {
    try { localStorage.removeItem(ANAHTAR); } catch (e) {}
  };
  /* Profil kaydedildikten sonra rozeti sayfa yenilemeden tazeler.
     DIKKAT: rozeti silip uygula()'yi tekrar cagirmak ISE YARAMAZ - uygula()
     'a[href="login.html"]' ariyor, oysa o baglanti ilk cizimde rozetle
     DEGISTIRILDI, yani ortada donusturulecek bir sey kalmiyordu. Bu yuzden
     var olan rozetin ICINI guncelliyoruz. */
  window.jolnovaRozetTazele = function () {
    var p = oku();
    if (!p) return;
    var v = document.querySelectorAll(".userchip");
    for (var i = 0; i < v.length; i++) {
      var yeni = rozet(p, v[i].className.indexOf("sm") >= 0);
      v[i].parentNode.replaceChild(yeni, v[i]);
    }
    if (!v.length) uygula();      /* henuz hic cizilmemisse ilk kez ciz */
  };

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", uygula);
  else
    uygula();
})();
