/* Jolnova — site tarafi abonelik satin alma.
   ===========================================================================
   AKIS
     1) Ziyaretci fiyat sayfasinda paket secer.
     2) Girisi yoksa once kayit/giris sayfasina gonderilir (donus adresiyle).
     3) Girisi varsa ai-proxy'den Stripe Checkout adresi alinir ve oraya
        gidilir. Odeme Stripe'in kendi sayfasinda yapilir.
     4) Webhook aboneligi kullanicinin Supabase kaydina yazar.
   Uygulamaya AYNI hesapla girildiginde abonelik zaten oradadir - e-posta
   eslestirme hilesi YOKTUR, ayni kullanici kaydidir.

   NEDEN FIYAT BURADA HESAPLANMIYOR
   Ekranda gosterilen indirimli tutar yalnizca BILGIDIR. Gercek tutari
   Stripe belirler (price_id + kupon). Istemcinin hesabi ile Stripe'in
   hesabi ayrisirsa musteri farkli bir tutar oder ve bunu odeme sayfasinda
   gorur - bu yuzden burada yapilan carpma bir VAAT degil, onizlemedir.

   METINLER HTML'DEN OKUNUR (data-* ile). Bes dil surumu var; burada sabit
   Ingilizce cumle yazsaydik Turkce sayfada Ingilizce hata cikardi.
   =========================================================================== */
(function () {
  "use strict";

  var UC = "https://zebgzphzjetdtvhljyyu.supabase.co/functions/v1/ai-proxy";

  /* Sayfadan metin oku; yoksa Ingilizce yedege dus. */
  function yazi(ad, yedek) {
    var k = document.getElementById("ck-i18n");
    var v = k ? k.getAttribute("data-" + ad) : null;
    return v || yedek;
  }

  function oturum() {
    /* supabase.js sayfada zaten yuklu (global `sb`). */
    if (typeof sb === "undefined" || !sb) return Promise.resolve(null);
    return sb.auth.getSession().then(function (r) {
      return (r && r.data && r.data.session) || null;
    }).catch(function () { return null; });
  }

  function girisSayfasi(paket) {
    /* Donus adresi: kayit bitince kullanici fiyat sayfasina ve SECTIGI
       pakete geri gelsin - "nereye basmistim" diye aramasin.
     *
     * ADRES KOKTEN KURULUR, BULUNDUGU KLASORDEN DEGIL.
     * Eskiden `location.pathname`'in son parcasi atilip "signup.html"
     * ekleniyordu. /tr/pricing sayfasinda bu "/tr/signup.html" veriyordu -
     * oyle bir dosya YOK (kimlik sayfalari yalnizca kokte tek kopya durur,
     * build-i18n.py bunu bilerek boyle yapiyor: her dil icin ayri kopya
     * Supabase OAuth izin listesine 16 adres eklemek demekti).
     * Sonuc: dort dil surumunde "Abone ol" kullaniciyi 404 sayfasina
     * goturuyordu. Ingilizce kokte calisiyordu, cunku orada klasor zaten
     * kokun kendisi. */
    var next = encodeURIComponent(location.pathname + "?plan=" + paket);
    /* HESABI OLANI KAYIT SAYFASINA GONDERMEYELIM.
       Oturum suresi dolmus bir musteri de buraya duser; ona "Hesap olustur"
       gostermek "zaten hesabim var" dedirtir ve akisi kirar. localStorage'da
       bizim profil kaydimiz ya da Supabase'in kendi oturum anahtari varsa
       bu kisi DAHA ONCE giris yapmistir -> giris sayfasi.
       (user.js profili kalici tutuyor; oturum dolsa bile kayit kalir - bu
       yuzden ust menude adi gorunurken oturum YOK olabiliyor.) */
    var tanidik = false;
    try {
      tanidik = !!localStorage.getItem("jolnova_profil") ||
        Object.keys(localStorage).some(function (k) {
          return k.indexOf("sb-") === 0 && k.indexOf("-auth-token") > 0;
        });
    } catch (e) { /* ozel sekme: bilinmiyor say */ }
    location.href = (tanidik ? "/login.html?next=" : "/signup.html?next=") + next;
  }

  /* HATA BASILAN DUGMENIN ALTINA DA YAZILIR.
     #ck-msg sayfanin EN USTUNDE duruyor; ziyaretci ise asagidaki paket
     kartinda "Abone ol"a basiyor. Sunucu hata dondurdugunde mesaj gorus
     alaninin disinda kaliyor ve ekranda HICBIR SEY olmamis gibi gorunuyordu -
     kullanici sorunu tam olarak boyle bildirdi ("basiyorum, yonlendirmiyor").
     Sessiz basarisizlik, yanlis bildirilen hatanin ta kendisiydi. */
  function uyari(mesaj, yaninda) {
    var e = document.getElementById("ck-msg");
    if (e) {
      e.textContent = mesaj;
      e.style.display = mesaj ? "" : "none";
    }
    if (yaninda && yaninda.parentNode) {
      var y = yaninda.parentNode.querySelector(".ck-err");
      if (!y) {
        y = document.createElement("div");
        y.className = "ck-err";
        y.setAttribute("role", "alert");
        yaninda.parentNode.insertBefore(y, yaninda.nextSibling);
      }
      y.textContent = mesaj;
      y.style.display = mesaj ? "" : "none";
    }
    if (!e && !yaninda) alert(mesaj);
  }

  function cagir(jeton, govde) {
    return fetch(UC, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + jeton
      },
      body: JSON.stringify(govde)
    }).then(function (r) {
      return r.json().then(function (j) { return { durum: r.status, govde: j }; });
    });
  }

  /* ----------------------------------------------------------- satin alma */
  function satinAl(dugme) {
    var paket = dugme.getAttribute("data-buy");
    if (!paket) return;
    var aralik = (document.querySelector('[data-period].on') || {}).getAttribute
      ? document.querySelector('[data-period].on').getAttribute("data-period")
      : "month";

    uyari("", dugme);
    dugme.disabled = true;
    var eskiYazi = dugme.textContent;
    dugme.textContent = yazi("wait", "Opening checkout…");

    oturum().then(function (s) {
      if (!s) { girisSayfasi(paket); return null; }
      return cagir(s.access_token, {
        op: "checkout_subscription",
        /* SUNUCU SOZLESMESI: argumanlar `payload` ICINDE gider.
           ai-proxy/index.ts: `const payload = (parsed.payload ?? {})`.
           Duz gonderildiginde sunucu payload'i BOS goruyor, plan "" oluyor ve
           400 "Unknown plan: (empty)" donuyordu - yani site uzerinden abone
           olmak HIC calismadi. Masaustu uygulamasi bastan beri dogru sariyor
           (aiproxy.call_ex(op, payload)); ayrisan yalnizca siteydi. */
        /* Kod BURADAN gidiyor. Eskiden gitmiyordu: musteri sitede kodu
           yazip indirimli tutari goruyor, sonra Stripe sayfasinda TAM
           tutarla karsilasiyor ve kodu bir kez daha yazmasi gerekiyordu. */
        payload: { plan: paket, interval: aralik, code: gecerliKod }
      });
    }).then(function (c) {
      if (!c) return;
      dugme.disabled = false;
      dugme.textContent = eskiYazi;
      var g = c.govde || {};
      if (c.durum === 401) { girisSayfasi(paket); return; }
      if (!g.ok || !g.data || !g.data.url) {
        uyari(g.message || yazi("failed", "Checkout could not be opened."), dugme);
        return;
      }
      /* Stripe'in kendi sayfasina gidiyoruz; 3D Secure orada calisir. */
      location.href = g.data.url;
    }).catch(function () {
      dugme.disabled = false;
      dugme.textContent = eskiYazi;
      uyari(yazi("failed", "Checkout could not be opened."), dugme);
    });
  }

  /* ------------------------------------------------------- indirim kodu */
  /* Kod YALNIZCA DOGRULANIR, hicbir sey tuketmez. Kullanim sayaci Stripe'ta
     ve ODEME TAMAMLANINCA duser - kodu yazip vazgecen kimse hakki yakmaz. */
  var indirim = 0;
  /* DOGRULANMIS kod. Odeme oturumuna BU gider; sunucu kodu Stripe'ta
     kendisi arayip geregliligini YENIDEN dogrular, yani buradaki deger
     bir yetki degil yalnizca bir istektir. */
  var gecerliKod = "";

  function fiyatlariCiz() {
    if (typeof RJ_PLANS === "undefined") return;
    var yillik = (document.querySelector('[data-period].on') || {}).getAttribute
      && document.querySelector('[data-period].on').getAttribute("data-period") === "year";
    for (var k in RJ_PLANS) {
      if (!Object.prototype.hasOwnProperty.call(RJ_PLANS, k)) continue;
      var taban = parseFloat(RJ_PLANS[k].price) || 0;
      if (k === "free") continue;
      /* Yillik = 10 ayin ucreti (2 ay bedava) - pricing.py ANNUAL_MONTHS_PAID
         ile AYNI kural. Ayri bir sayi tablosu tutmuyoruz ki ayrismasinlar. */
      var tutar = yillik ? taban * 10 : taban;
      if (indirim > 0) tutar = tutar * (100 - indirim) / 100;
      var els = document.querySelectorAll('[data-price="' + k + '"]');
      for (var i = 0; i < els.length; i++) {
        els[i].textContent = tutar.toFixed(2);
      }
    }
    var sub = document.querySelectorAll("[data-per]");
    for (var j = 0; j < sub.length; j++) {
      sub[j].textContent = yillik ? yazi("peryear", "/year") : yazi("permonth", "/month");
    }
  }

  function kodUygula() {
    var giris = document.getElementById("ck-code");
    var not = document.getElementById("ck-code-msg");
    if (!giris) return;
    var kod = (giris.value || "").trim();
    if (!kod) { indirim = 0; gecerliKod = ""; if (not) not.textContent = ""; fiyatlariCiz(); return; }

    oturum().then(function (s) {
      if (!s) {
        /* Kod kutusu giris ister: acik olsaydi kod adlari deneme yanilmayla
           bulunabilir, sinirli bir kampanya kodu yayilip tukenebilirdi. */
        if (not) not.textContent = yazi("codelogin", "Sign in to use a discount code.");
        return null;
      }
      /* Ayni sozlesme: kod da `payload` icinde gider. Duz gonderildigi icin
         sunucu bos kod goruyor ve 400 "Enter a code." donuyordu - indirim
         kodu sitede bu yuzden "calismiyor"du. */
      return cagir(s.access_token, { op: "promo_check", payload: { code: kod } });
    }).then(function (c) {
      if (!c) return;
      var d = (c.govde && c.govde.data) || {};
      if (!d.valid) {
        indirim = 0;
        gecerliKod = "";
        if (not) not.textContent = yazi("codebad", "That code is not valid.");
        fiyatlariCiz();
        return;
      }
      indirim = d.percent || 0;
      /* KODU DA SAKLA: yalnizca yuzdeyi tutmak ekranda fiyati dusurmeye
         yetiyordu ama odeme oturumuna tasinacak bir sey kalmiyordu. */
      gecerliKod = d.code || kod;
      if (not) {
        not.textContent = (yazi("codeok", "Code applied: -{p}%") || "")
          .replace("{p}", String(indirim));
      }
      fiyatlariCiz();
    }).catch(function () {
      if (not) not.textContent = yazi("codebad", "That code is not valid.");
    });
  }

  /* ------------------------------------------------------------- baglama */
  /* ODEME ACIK MI: #ck-i18n uzerindeki data-live.
     "0" iken satin alma dugmeleri PASIF cizilir ve indirim kodu kutusu
     gizlenir. Sebep: anahtarlar hala sandbox; gercek bir ziyaretci
     "Abone ol" dese Stripe'in TEST sayfasina duser ve kendi karti
     reddedilir. Calismayan bir odeme akisini halka acmaktansa "henuz
     acik degil" demek durustur.
     Aylik/yillik secici ACIK KALIR: kimlik dogrulama istemiyor, fiyati
     yerel olarak hesapliyor ve ziyaretciye gercek bilgi veriyor.
     CANLIYA GECISTE TEK DEGISIKLIK: data-live="1". */
  function odemeAcikMi() {
    var k = document.getElementById("ck-i18n");
    return !!k && k.getAttribute("data-live") === "1";
  }

  function kapaliGorunum() {
    var b = document.querySelectorAll("[data-buy]");
    for (var i = 0; i < b.length; i++) {
      b[i].disabled = true;
      b[i].textContent = yazi("soon", "Checkout not available yet");
    }
    var kutu = document.querySelector(".ck-code");
    if (kutu) kutu.style.display = "none";
    var msg = document.getElementById("ck-code-msg");
    if (msg) msg.style.display = "none";
  }

  function bagla() {
    if (!odemeAcikMi()) {
      kapaliGorunum();
      /* Donem secici yine de calissin - fiyat gostermek icin oturum
         gerekmiyor ve yillik fiyati gormek ziyaretciye yarar. */
      var p0 = document.querySelectorAll("[data-period]");
      for (var q0 = 0; q0 < p0.length; q0++) {
        (function (el) {
          el.addEventListener("click", function () {
            for (var z = 0; z < p0.length; z++) p0[z].classList.remove("on");
            el.classList.add("on");
            fiyatlariCiz();
          });
        })(p0[q0]);
      }
      fiyatlariCiz();
      return;
    }
    var b = document.querySelectorAll("[data-buy]");
    for (var i = 0; i < b.length; i++) {
      (function (el) {
        el.addEventListener("click", function () { satinAl(el); });
      })(b[i]);
    }
    var p = document.querySelectorAll("[data-period]");
    for (var j = 0; j < p.length; j++) {
      (function (el) {
        el.addEventListener("click", function () {
          for (var q = 0; q < p.length; q++) p[q].classList.remove("on");
          el.classList.add("on");
          fiyatlariCiz();
        });
      })(p[j]);
    }
    var u = document.getElementById("ck-code-go");
    if (u) u.addEventListener("click", kodUygula);
    var g = document.getElementById("ck-code");
    if (g) {
      g.addEventListener("keydown", function (e) {
        if (e.key === "Enter") { e.preventDefault(); kodUygula(); }
      });
    }
    /* Kayittan donen kullanici: ?plan=studio -> o kartin dugmesini isaretle */
    var m = /[?&]plan=([a-z_]+)/.exec(location.search);
    if (m) {
      var hedef = document.querySelector('[data-buy="' + m[1] + '"]');
      if (hedef && hedef.scrollIntoView) {
        hedef.scrollIntoView({ block: "center" });
        hedef.classList.add("ck-focus");
      }
    }
    fiyatlariCiz();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bagla);
  } else {
    bagla();
  }
})();
