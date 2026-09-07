/* Jolnova — EN/TR dil değiştirici
   Site ana dili İNGİLİZCE. TR seçilince metin düğümleri sözlükten çevrilir.
   Orijinal İngilizce düğümde saklanır (node.__en) -> TR<->EN kayıpsız geçiş. */
const TR = {
  // ---- gezinme ----
  "Home": "Ana Sayfa", "How It Works": "Nasıl Çalışır", "Features": "Özellikler",
  "Pricing": "Fiyatlar", "FAQ": "SSS", "Sign in": "Giriş yap", "Sign up": "Kayıt ol",
  // --- destek sayfasi ---
  "Support": "Destek",
  "Tell us what happened.": "Ne olduğunu anlat.",
  "A problem, an idea, or a question — it all lands with the people who build Jolnova. We read every message.":
    "Bir sorun, bir fikir ya da bir soru — hepsi doğrudan Jolnova'yı yapan kişilere ulaşır. Her mesajı okuyoruz.",
  "Problem": "Sorun", "Suggestion": "Öneri", "Question": "Soru",
  "Your e-mail": "E-posta adresin",
  "So we can reply. Nothing else is sent to it.": "Sana dönebilmemiz için. Başka hiçbir şey gönderilmez.",
  "Message": "Mesaj",
  "What happened, or what would you like to see?": "Ne oldu, ya da ne görmek istersin?",
  "Send message": "Mesajı gönder",
  "Sending…": "Gönderiliyor…",
  "Thanks — your message reached us. We reply by e-mail.":
    "Teşekkürler — mesajın bize ulaştı. E-posta ile dönüş yapıyoruz.",
  "Please write a little more so we can help.": "Yardımcı olabilmemiz için biraz daha yaz.",
  "Could not send — check your connection.": "Gönderilemedi — bağlantını kontrol et.",
  "Too many messages in a short time. Try again in a minute.":
    "Kısa sürede çok fazla mesaj. Bir dakika sonra tekrar dene.",
  "Using the app already?": "Uygulamayı zaten kullanıyor musun?",
  "Settings → Support & suggestions": "Ayarlar → Destek ve öneri",
  "inside Jolnova instead. Messages sent from there carry your app version, Windows version and the last lines of the log, so we can usually find the cause without asking you anything.":
    "bölümünü kullan. Oradan gönderilen mesajlar sürümünü, Windows sürümünü ve günlüğün son satırlarını taşır; böylece sebebi genelde sana hiçbir şey sormadan buluruz.",
  "⬇ Download": "⬇ İndir", "My Account": "Hesabım", "Sign out": "Çıkış",
  "Privacy": "Gizlilik", "Terms": "Şartlar", "Legal": "Yasal",

  // ---- ana sayfa ----
  "WATCHING STREAM • BUILDING CLIP": "YAYIN İZLENİYOR • KLİP HAZIRLANIYOR",
  "Turn live streams into": "Yayınları,", "viral Reels": "viral Reels'e",
  "while you sleep.": "çevir — sen uyurken.",
  "Jolnova watches Kick, YouTube and Twitch streamers 24/7, picks the best moments — funny, dramatic, big reactions — with AI and produces captioned vertical clips. You just approve and post.":
    "Jolnova; Kick, YouTube ve Twitch yayıncılarını 7/24 izler, en iyi anları (komik, dram, güçlü tepki) yapay zekâyla seçer ve altyazılı dikey klipler üretir. Sen sadece onayla ve paylaş.",
  "⬇ Download for Windows": "⬇ Windows için indir",
  "Plans & pricing": "Abonelik & fiyatlar", "Plans &amp; pricing": "Abonelik & fiyatlar",
  "// Easy setup · Windows app · First clips in minutes": "// Kolay kurulum · Windows uygulaması · İlk klipler dakikalar içinde",
  "14 clips ready": "14 klip hazır", "Title ready": "Başlık hazır",
  "● LIVE": "● CANLI", "\"He won $10,000 and screamed!\"": "\"10 bin dolar kazandı ve çığlık attı!\"",
  "Automated watching": "Otomatik izleme", "To your first clip": "İlk klibe kadar",
  "How it works": "Nasıl çalışır", "Three steps. The rest is automatic.": "Üç adım. Gerisi otomatik.",
  "Add a streamer and relax. The app watches, clips and writes the titles — you just approve.":
    "Yayıncıyı ekle, geri yaslan. Uygulama izler, kliplar, başlık yazar; sen sadece onaylarsın.",
  "Add a streamer": "Yayıncıyı ekle",
  "Paste a streamer link. When they go live the app starts watching automatically — gaming, slots or IRL, it handles all of them.":
    "Yayıncı linkini yapıştır. Canlıya geçtiğinde uygulama otomatik izlemeye başlar — oyun, slot ya da IRL, hepsini tanır.",
  "AI catches the best moment": "AI en iyi anı yakalar",
  "Approve & post": "Onayla & paylaş", "Approve &amp; post": "Onayla & paylaş",
    "See the details →": "Detaylı anlat →", "Highlights": "Öne çıkanlar",
  "Everything a clip editor does — automatically.": "Bir klip editörünün yaptığı her şey — otomatik.",
  "Not just funny — drama, reactions, insight. It catches every watchable moment and drops the ordinary ones.":
    "Sadece komik değil; dram, tepki, bilgi — izlenir her anı yakalar, sıradanları eler.",
  "Ready-made vertical format": "Hazır dikey format",
  "Camera + gameplay for gaming, full screen for IRL. Captions burned in automatically.":
    "Oyun için kamera+ekran, IRL için tam ekran. Otomatik altyazı gömülü.",
  "Clips from VODs & YouTube": "VOD & YouTube'dan klip", "Clips from VODs &amp; YouTube": "VOD & YouTube'dan klip",
  "Paste a past broadcast or a YouTube link and it pulls clips from the best moments.":
    "Eski yayın ya da YouTube linki yapıştır; en iyi anlardan klip çıkarır.",
  "All features →": "Tüm özellikler →", "Inside the app": "Uygulamadan görünümler",
  "See exactly what you get.": "Ne aldığını tam olarak gör.",
  "No complicated editing software. Everything lives in one simple Windows app.":
    "Karmaşık kurgu programı yok. Her şey tek, sade bir Windows uygulamasında.",
  "Review screen": "Onay ekranı", "Review screen · Pending": "Onay ekranı · Bekleyen",
  "Clips come to you. You just pick.": "Klipler önüne gelir. Sen sadece seçersin.",
  "Clips come to you — you just pick.": "Klipler önüne gelir — sen sadece seçersin.",
  "Streamers make the content. You make the clips.": "Yayıncılar içerik üretir. Sen klipleri.",
  "Jolnova watches, clips and writes for you. All you do is post.":
    "Jolnova senin için izler, kliplar ve yazar. Tek yapman gereken paylaşmak.",
  "Start your subscription →": "Aboneliği başlat →",

  // ---- özellikler ----
  "A closer look at the app.": "Uygulamayı yakından gör.",
  "Artificial intelligence": "Yapay zekâ",
  "Trimming": "Kırpma", "Logo & images": "Logo & görsel", "Logo &amp; images": "Logo & görsel",
  "Drag your own logo and burn it into the clip.": "Kendi logonu sürükle, klibe göm.",
  "Trim on the timeline — no counting seconds.": "Zaman çubuğundan kırp — saniye hesabı yok.",
  "And more": "Ve dahası", "Everything included.": "Kutudan çıkan her şey.",
  "Runs in the background": "Arka planda çalışır",
  "Quality control": "Kalite ayarı", "Automatic captions": "Otomatik altyazı", "Scheduling": "Zamanlama",
  "All in one subscription. AI included.": "Hepsi tek abonelikte. AI dahil.",
  "Clip from a link": "Link'ten klip",

  // ---- fiyatlar ----
  "One subscription, every feature. AI included.": "Tek abonelik, tüm özellikler. AI dahil.",
  "We cover the AI cost — you just subscribe. The longer the plan, the more you save.":
    "Yapay zekâ maliyeti bize ait — sen sadece abone ol. Plan uzadıkça daha çok kazan.",
  "Monthly": "Aylık", "3 Months": "3 Aylık", "Yearly": "Yıllık",
  "For trying it out": "Denemek isteyenler için", "Most popular": "En çok tercih edilen",
  "Best value": "En avantajlı", "POPULAR": "POPÜLER", "Coming soon": "Yakında",
  "🔥 20% off": "🔥 %20 indirim", "💎 30% off": "💎 %30 indirim",
  "Vertical format + automatic captions": "Dikey format + otomatik altyazı",
  "Title, description, hashtags": "Başlık, açıklama, hashtag",
  "Trimming + logo/image overlay": "Kırpma + logo/görsel ekleme",
      "Fast, ad-free interface": "Reklamsız, hızlı arayüz", "Priority support": "Öncelikli destek",
  "Priority support + early features": "Öncelikli destek + erken özellikler",
  "Can I cancel any time?": "İstediğim zaman iptal edebilir miyim?",
  "Do I pay for the AI?": "Yapay zekâ ücretini ben mi ödüyorum?",
  "What's the difference between plans?": "Planlar arasında ne fark var?",
  "How does payment work?": "Ödeme nasıl olacak?",

  // ---- SSS ----
  "Common questions": "Merak edilenler",
  "Can't find what you need? Write to us — we're happy to help.":
    "Aradığını bulamazsan bize yaz — memnuniyetle yardımcı oluruz.",
  "How many streamers can I add?": "Kaç yayıncı ekleyebilirim?",
  "Are clips posted automatically?": "Klipler otomatik mi paylaşılıyor?",
  "Does it work while my computer is off?": "Bilgisayarım kapalıyken çalışır mı?",
  "Can I make clips from past broadcasts?": "Eski yayınlardan klip çıkarabilir miyim?",
  "Can I edit the clips myself?": "Klipleri kendim düzenleyebilir miyim?",
  "Does it only find funny moments?": "Sadece komik anları mı buluyor?",
  "Which platforms is it for?": "Hangi platformlar için uygun?",
  "Is setup difficult?": "Kurulum zor mu?", "Ready when you are.": "Hazırsan başlayalım.",

  // ---- indirme ----
  "Download": "İndir", "Download Jolnova and start in minutes.": "Jolnova'yı indir, dakikalar içinde başla.",
  "⬇ Download for Windows (.exe)": "⬇ Windows için indir (.exe)",
  "Download & run": "İndir & çalıştır", "Download &amp; run": "İndir & çalıştır",
  "Add a streamer": "Yayıncıyı ekle", "No subscription yet? Start there.": "Aboneliğin yoksa oradan başla.",

  // ---- giriş / kayıt / hesap ----
  "Welcome back 👋": "Tekrar hoş geldin 👋",
  "Sign in to your Jolnova account": "Jolnova hesabına giriş yap",
  "Continue with Google": "Google ile devam et", "Sign up with Google": "Google ile kayıt ol",
  "or with email": "ya da e-posta ile", "Email": "E-posta", "Password": "Şifre",
  "Remember me": "Beni hatırla", "Forgot password": "Şifremi unuttum",

  // ---- şifre belirleme / sıfırlama (reset.html) ----
  "Set your password": "Şifreni belirle",
  "We'll email you a link. It works whether you're resetting a forgotten password or setting one for the first time.":
    "Sana e-postayla bir bağlantı göndereceğiz. Unuttuğun şifreyi sıfırlamak için de, ilk kez şifre belirlemek için de aynı bağlantı işini görür.",
  "Send link": "Bağlantıyı gönder",
  "Sending…": "Gönderiliyor…",
  "Signed up with Google?": "Google ile mi kayıt oldun?",
  "Back to sign in": "Girişe dön",
  "Choose a new password": "Yeni bir şifre seç",
  "Almost done — pick a password and you're in.": "Az kaldı — bir şifre seç ve içeri gir.",
  "New password": "Yeni şifre",
  "New password again": "Yeni şifre (tekrar)",
  "At least 8 characters": "En az 8 karakter",
  "Save password": "Şifreyi kaydet",
  "Saving…": "Kaydediliyor…",
  "The two passwords do not match.": "İki şifre birbirini tutmuyor.",
  "If an account exists for that email, the link is on its way. Check your inbox and spam folder.":
    "Bu e-postaya ait bir hesap varsa bağlantı yola çıktı. Gelen kutunu ve spam klasörünü kontrol et.",
  "This link has expired. Request a new one from the sign-in page.":
    "Bu bağlantının süresi dolmuş. Giriş sayfasından yenisini iste.",
  "Password saved. Taking you to your account…": "Şifre kaydedildi. Hesabına yönlendiriliyorsun…",
  "We could not sign you in with that email and password.":
    "Bu e-posta ve şifreyle giriş yapılamadı.",
  "If you created this account with Google, it has no Jolnova password yet — your Google password will not work here. Use the Google button above.":
    "Bu hesabı Google ile açtıysan henüz bir Jolnova şifresi yok — Google şifren burada işe yaramaz. Yukarıdaki Google düğmesini kullan.",
  "Set a password": "Şifre belirle",
  "Then your account has no Jolnova password yet — a Google password is not one.":
    "O zaman hesabının henüz bir Jolnova şifresi yok — Google şifresi bunun yerine geçmez.",
  "Set one here and you'll have a second way in, alongside the Google button.":
    "Buradan bir şifre belirlersen, Google düğmesinin yanında ikinci bir giriş yolun olur.",
  "That link is invalid or has expired.": "Bu bağlantı geçersiz ya da süresi dolmuş.",
  "No account?": "Hesabın yok mu?", "Already have an account?": "Zaten hesabın var mı?",
  "Create account": "Hesap oluştur", "Full name": "Ad Soyad",
  "Start making clips in minutes": "Dakikalar içinde klip üretmeye başla",
  "Subscription": "Abonelik", "App": "Uygulama", "No subscription": "Abonelik yok",
  "⬇ Download the app": "⬇ Uygulamayı indir",
  // --- ek ceviriler ---
  "You paste a link. The app does the rest.": "Sen bir link yapıştır. Gerisini uygulama halleder.",
  "No setup, no editing, no watching streams for hours. The app runs in the background and hands you clips that are ready to post.": "Kurulum, kurgu, saatlerce yayın izleme yok. Uygulama arka planda çalışır; önüne paylaşmaya hazır klipler gelir.",
  "It catches the best moment": "En iyi anı yakalar",
  "It combines chat spikes, audio peaks and speech analysis. Not just funny — it also catches drama, strong reactions, arguments and standout events.": "Chat patlaması, ses yükselmesi ve konuşma çözümlemesini birlikte değerlendirir. Sadece komik değil; dram, güçlü tepki, tartışma ve çarpıcı olayları da yakalar.",
  "AI filters": "Yapay zekâ eler",
  "It makes the vertical clip": "Dikey klibi üretir",
  "In the right format (camera on top + gameplay below for games, full screen for IRL) with captions burned in — and your own logo if you want.": "Doğru formatta (oyunda üstte kamera + altta oyun, IRL'de tam ekran), altyazı gömülü — istersen kendi logonla.",
  "It writes the title & hashtags": "Başlık & hashtag yazar",
  "It writes the title &amp; hashtags": "Başlık & hashtag yazar",
  "A hooky title, a short description and strong hashtags with the streamer's name — copy, paste, done.": "Merak uyandıran başlık, kısa açıklama ve yayıncı adıyla güçlü hashtag'ler — kopyala, yapıştır, hazır.",
    "Making clips has never been this easy.": "Klip üretmek bu kadar kolay olmamıştı.",
  "Set it up once, it runs forever. You just post the best ones.": "Bir kez kur, sonsuza kadar çalışır. Sen sadece en iyilerini paylaş.",
  "See pricing →": "Fiyatları gör →",
  "No need to wait for a live stream. Paste a past broadcast (VOD) or YouTube link and the app processes the video, builds clips from the best moments and drops them into Pending.": "Canlı yayını beklemene gerek yok. Eski yayın (VOD) ya da YouTube linki yapıştır; uygulama videoyu işleyip en iyi anlardan klipler üretir ve Bekleyen'e ekler.",
  "Paste a past broadcast (VOD) or YouTube link — it processes the video and pulls clips from the best moments.": "Eski yayın (VOD) ya da YouTube linki yapıştır — videoyu işleyip en iyi anlardan klip çıkarır.",
  "Paste a past broadcast (VOD) or YouTube link — it pulls clips from the best moments.": "Eski yayın (VOD) ya da YouTube linki yapıştır — en iyi anlardan klip çıkarır.",
  "Paste a link — get clips from a past broadcast or YouTube.": "Bir link yapıştır — eski yayından ya da YouTube'dan klip çıksın.",
  "Downloads → scans loud moments → clips, with": "İndirir → sesli anları tarar → kliplar,",
  "live progress": "ilerleme canlı",
  "an interrupted job never restarts from scratch": "yarıda kesilse baştan indirmez",
  "Automatic": "Otomatik",
  "Automatic title, captions and hashtags on every clip": "Her klibe otomatik başlık, altyazı ve hashtag",
  "on every clip — spot the best instantly": "her klipte — en iyileri anında gör",
  "Title + hashtags ready": "Başlık + hashtag hazır",
  "— copy and post": "— kopyala, paylaş",
  "Approve · Trim · Add image · Reject": "Onayla · Kırp · Görsel ekle · Reddet",
  "on one screen": "tek ekranda",
  "Grouped & collapsible": "Gruplu & açılır-kapanır",
  "Grouped &amp; collapsible": "Gruplu & açılır-kapanır",
  "by streamer — easy to browse even with hundreds of clips": "yayıncıya göre — yüzlerce klipte bile rahat gezin",
  "One click:": "Tek tık:",
  "Approve · Trim · Image · Reject": "Onayla · Kırp · Görsel · Reddet",
  "Watching, editing, captioning and posting — all in one app. Below we walk through every feature with": "İzleme, kurgu, altyazı ve paylaşım — hepsi tek uygulamada. Aşağıda her özelliği şununla anlattık:",
  "real in-app views": "gerçek uygulama görüntüleri",
  "Not just funny: drama, reactions, arguments, insight": "Sadece komik değil: dram, tepki, tartışma, bilgi",
  "A short reason under the score — why it's worth watching": "Puanın altında gerekçe — neden izlenir",
  "Title + description + hashtags with the streamer's name, ready to go": "Başlık + açıklama + yayıncı adıyla hashtag, hazır",
  "No need to wait for a live stream. Paste a VOD or YouTube link and the app processes the video and builds clips from the best moments.": "Canlı yayını beklemene gerek yok. VOD ya da YouTube linki yapıştır; uygulama videoyu işleyip en iyi anlardan klip üretir.",
  "Supports Kick and YouTube (Twitch coming soon)": "Kick ve YouTube desteklenir (Twitch yakında)",
  "Trim on the timeline — no counting seconds.": "Zaman çubuğundan kırp — saniye hesabı yok.",
  "Drag the handles at both ends of the bar under the video. The green part is kept; the video follows along as you drag.": "Videonun altındaki çubuğun iki ucundaki tutamaçları sürükle. Yeşil alan kalır; sürüklerken video da takip eder.",
  "A visual timeline with two handles": "Görsel zaman çubuğu + iki tutamaç",
  "Live preview while dragging": "Sürüklerken anlık önizleme",
  "See the selected length instantly": "Seçili süreyi anında gör",
  "Drag your brand, sticker or watermark anywhere on the clip, resize it from the corner and apply. PNG transparency is preserved.": "Markanı, sticker'ını ya da watermark'ını klibin istediğin yerine sürükle, köşeden boyutlandır ve uygula. PNG şeffaflığı korunur.",
  "Pick an image → place it with drag and drop": "Görsel seç → sürükle-bırak ile yerleştir",
  "Resize from the corner": "Köşeden boyutlandır",
  "Burned into the video — watch it right away": "Videoya gömülür — hemen izle",
    "Follow as many streamers as you like at once — anyone live is recorded automatically.": "İstediğin kadar yayıncıyı aynı anda takip et — canlı olanlar otomatik kaydedilir.",
  "Close the window and it keeps making clips as long as your computer is on.": "Pencereyi kapatsan bile bilgisayarın açık olduğu sürece klip üretmeye devam eder.",
  "Few / Balanced / Many — you decide how many clips you get and how picky it is.": "Az / Normal / Çok — kaç klip gelsin, ne kadar seçici olsun sen belirle.",
  "Speech is transcribed and burned in as modern captions.": "Konuşma yazıya dökülür, modern altyazı olarak gömülür.",
  "No extra tools, no extra fees, no API keys. Download, sign in and go.": "Ekstra araç, ek ücret ya da API anahtarı yok. İndir, giriş yap, başla.",
  "First big payout of the night — he erupted with a wild scream. Legendary reaction.": "Gecenin ilk büyük ödemesi — çılgın bir çığlıkla patladı. Efsane tepki.",
  "🤖 Big win + huge reaction — it hooks even viewers who don't know the context. High viral potential.": "🤖 Büyük kazanç + coşkulu tepki — bağlamı bilmeyen izleyiciyi bile tutar. Viral potansiyeli yüksek.",
  "He Won $10,000 And Screamed!": "10 Bin Dolar Kazandı ve Çığlık Attı!",
  "Chaos: Chat Exploded, Emote Storm": "Kaos: Chat Patladı, Emote Yağmuru",
  "Clip From a Link": "Link'ten Klip Çıkar",
  "Pending Clips": "Bekleyen Klipler",
  "Clip Details": "Klip Detayı",
  "Trim Clip": "Klip Kırp",
  "Add Image": "Görsel Ekle",
  "📥 Process": "📥 İşle",
  "✂️ Clipping…": "✂️ Klipleniyor…",
  "✓ Approve": "✓ Onayla",
  "✂️ Trim": "✂️ Kırp",
  "🖼️ Image": "🖼️ Görsel",
  "selected:": "seçili:",
  "Every plan has the same features. The only difference is the billing period and discount — longer means cheaper.": "Tüm planlarda özellikler aynıdır. Fark yalnızca ödeme dönemi ve indirimdir — uzadıkça ucuzlar.",
  "Yes. Cancel whenever you like — you keep access until the end of the period.": "Evet. İstediğin an iptal et — dönem sonuna kadar kullanmaya devam edersin.",
  "Secure card payments are coming soon. We're setting it up now.": "Kartla güvenli ödeme yakında. Şu an altyapıyı kuruyoruz.",
  "// Pricing and checkout go live soon — purchasing opens once the subscription system is connected.": "// Fiyatlar ve ödeme yakında aktif — abonelik altyapısı bağlanınca satın alma açılacak.",
    "The app runs on Windows and keeps recording in the background even if you close the window. It makes clips as long as the computer is on.": "Uygulama Windows'ta çalışır ve pencereyi kapatsan bile arka planda kaydetmeye devam eder. Bilgisayar açık olduğu sürece klip üretir.",
  "No. Alongside funny moments it catches drama, strong reactions, arguments, surprises and insightful moments — anything worth watching.": "Hayır. Komik anların yanı sıra dram, güçlü tepki, tartışma, sürpriz ve bilgilendirici anları da yakalar — izlenmeye değer her şey.",
  "Unlimited. Add and follow as many as you like — anyone live is recorded automatically, and you can pause any of them.": "Sınırsız. İstediğin kadar ekle ve takip et — canlı olanlar otomatik kaydedilir, istediğini duraklatabilirsin.",
  "Yes. Just paste a VOD or YouTube link and Jolnova processes the video and builds clips from the best moments.": "Evet. VOD ya da YouTube linki yapıştırman yeterli; Jolnova videoyu işleyip en iyi anlardan klip üretir.",
  "Of course. Trim any clip on the timeline, drag in your own logo or image, and copy the title and description.": "Elbette. Her klibi zaman çubuğundan kırp, kendi logonu/görselini sürükle, başlık ve açıklamayı kopyala.",
  "No. Download the Windows app, open it and paste a streamer link. Your first clips arrive within minutes.": "Hayır. Windows uygulamasını indir, aç ve yayıncı linkini yapıştır. İlk klipler dakikalar içinde gelir.",
  "No. The AI cost per clip is included in your subscription — no API key or extra payment needed.": "Hayır. Klip başına AI maliyeti aboneliğe dahildir — API anahtarı ya da ek ödeme gerekmez.",
    "Download Jolnova and start in minutes.": "Jolnova'yı indir, dakikalar içinde başla.",
  "A Windows app. Install it, sign in, paste a streamer link — the rest is automatic.": "Bir Windows uygulaması. Kur, giriş yap, yayıncı linkini yapıştır — gerisi otomatik.",
  "No setup wizard — just run the file you downloaded and Jolnova opens.": "Kurulum sihirbazı yok — indirdiğin dosyayı çalıştır, Jolnova açılır.",
  "Run the setup file and follow the wizard — Jolnova opens when it finishes.": "Kurulum dosyasını çalıştır ve sihirbazı takip et — bitince Jolnova açılır.",
  "A Windows app. Install it, sign in, paste a streamer link — the rest is automatic. Free for 3 days.": "Bir Windows uygulaması. Kur, giriş yap, yayıncı linkini yapıştır — gerisi otomatik. 3 gün ücretsiz.",
  "Sign in with the account you created on the site. Your subscription is detected automatically and everything unlocks.": "Sitede oluşturduğun hesapla giriş yap. Aboneliğin otomatik tanınır ve her şey açılır.",
  "Paste a Kick / YouTube / Twitch streamer link. Your first clips land in Pending within minutes.": "Kick / YouTube / Twitch yayıncı linki yapıştır. İlk klipler dakikalar içinde Bekleyen'e düşer.",
  "Download the app, sign in with the same account and your subscription activates.": "Uygulamayı indir, aynı hesapla giriş yap; aboneliğin aktifleşir.",
  "Download it, sign in with this account and start making clips.": "İndir, bu hesapla giriş yap, klip üretmeye başla.",
  "version 1.0 · Windows 10/11 (64-bit)": "sürüm 1.0 · Windows 10/11 (64-bit)",
  "// Download coming soon — the app is being packaged as an .exe.": "// İndirme yakında — uygulama .exe olarak paketleniyor.",
  "You don't have an active subscription yet. Pick a plan to get started.": "Henüz aktif aboneliğin yok. Başlamak için bir plan seç.",
  "Subscription system is being connected.": "Abonelik altyapısı bağlanıyor.",
  "Jolnova for Windows": "Windows için Jolnova",
  "Sign in to your Jolnova account": "Jolnova hesabına giriş yap",
  "Create a Jolnova account and start making clips.": "Jolnova hesabı oluştur ve klip üretmeye başla.",
  "I agree to the": "Şunları kabul ediyorum:",
  "Terms of Service": "Kullanım Şartları",
  "Privacy Policy": "Gizlilik Politikası",
  "At least 6 characters": "En az 6 karakter",
  "Your name": "Adın",
  // --- parca ceviriler ---
  "— an interrupted job never restarts from scratch": "— yarıda kesilse baştan indirmez",
  "under the score — why it's worth watching": "puanın altında — neden izlenir",
  "drama, reactions, arguments, insight": "dram, tepki, tartışma, bilgi",
  "into the video — watch it right away": "videoya — hemen izle",
  "hashtags with the streamer's name": "yayıncı adıyla hashtag",
  "Pick an image → place it with": "Görsel seç → şununla yerleştir:",
  "title, captions and hashtags": "başlık, altyazı ve hashtag",
  "Reels / Shorts / TikTok": "Reels / Shorts / TikTok",
  "Plans &amp; pricing →": "Abonelik & fiyatlar →",
  "Plans & pricing →": "Abonelik & fiyatlar →",
  "Title + description +": "Başlık + açıklama +",
  "with two handles": "iki tutamaçla",
  "Jolnova watches, clips and writes for you.": "Jolnova senin için izler, kliplar ve yazar.",
  "Not just funny:": "Sadece komik değil:",
  "A short": "Kısa bir",
  "reason": "gerekçe",
  "Resize": "Boyutlandır",
  "from the corner": "köşeden",
  "Burned": "Gömülür",
  "drag and drop": "sürükle-bırak",
  "A visual": "Görsel bir",
  "timeline": "zaman çubuğu",
  "Live preview": "Anlık önizleme",
  "while dragging": "sürüklerken",
  "Downloads → scans loud moments → clips, with": "İndirir → sesli anları tarar → kliplar,",
  "Pause / Resume": "Durdur / Devam",
  "Automatic": "Otomatik",
  "on every clip": "her klipte",
  "— spot the best instantly": "— en iyileri anında gör",
  "Title + hashtags ready": "Başlık + hashtag hazır",
  "— copy and post": "— kopyala, paylaş",
  "on one screen": "tek ekranda",
  "by streamer — easy to browse even with hundreds of clips": "yayıncıya göre — yüzlerce klipte bile rahat gezin",
  "One click:": "Tek tık:",
  "real in-app views": "gerçek uygulama görüntüleri",
    "Professional": "Professional",
  "account + a Meta app.": "hesabı + Meta uygulaması.",
  // --- gorsel anlatim bolumu ---
  "Camera setup": "Kamera ayarı",
  "Show the camera once — every clip gets it right.": "Kamerayı bir kez göster — her klip doğru çıksın.",
  "For gaming streams the clip puts the streamer's camera on top and the gameplay below. Jolnova finds the camera by itself; if you want, drag the green box over it and save. That's the whole setup.": "Oyun yayınlarında klip, yayıncının kamerasını üste, oynanışı alta koyar. Jolnova kamerayı kendi bulur; istersen yeşil kutuyu üzerine sürükleyip kaydedersin. Kurulum bu kadar.",
  "finds the face — usually you touch nothing": "yüzü bulur — genelde hiçbir şeye dokunmazsın",
  "Auto-detect": "Otomatik bul",
  "the green box on a live frame": "yeşil kutuyu canlı kare üzerinde",
  "drag & resize": "sürükle & boyutlandır",
  "drag &amp; resize": "sürükle & boyutlandır",
  "Corner presets:": "Köşe hazır ayarları:",
  "top left · top right · bottom left · bottom right": "sol üst · sağ üst · sol alt · sağ alt",
  "🎥 CAMERA": "🎥 KAMERA",
  "🎥 Auto-detect": "🎥 Otomatik bul",
  "↖ Top left": "↖ Sol üst",
  "↗ Top right": "↗ Sağ üst",
  "↘ Bottom right": "↘ Sağ alt",
  "Smart framing": "Akıllı kadraj",
  "Wide stream in. Full-height vertical out.": "Geniş yayın girer. Tam boy dikey çıkar.",
  "A 16:9 stream squeezed into a 9:16 frame usually leaves huge empty bars. Jolnova crops to what matters, scales it up and keeps the streamer visible in a corner — so your clip fills the screen instead of wasting it.": "16:9 bir yayını 9:16 kareye sığdırmak genelde kocaman boş şeritler bırakır. Jolnova önemli olana kırpar, büyütür ve yayıncıyı köşede görünür tutar — böylece klip ekranı boşa harcamaz, doldurur.",
  "Content fills": "İçerik",
  "~50% more": "~%50 daha fazla",
  "of the frame than a plain fit": "kare dolduruyor (düz sığdırmaya göre)",
  "Streamer stays visible —": "Yayıncı görünür kalır —",
  "reactions are the hook": "tepkiler asıl kanca",
  "Captions burned in, platform badge matched to": "Altyazı gömülü, platform rozeti şuna göre:",
  "Source · 16:9": "Kaynak · 16:9",
  "Clip · 9:16": "Klip · 9:16",
  "stream": "yayın",
  "main content": "ana içerik",
  "Jolnova — Camera setup": "Jolnova — Kamera ayarı",
  // --- yerel dosya ---
  "Links & your own files": "Link ve kendi dosyaların",
  "Links &amp; your own files": "Link ve kendi dosyaların",
  "Paste a past broadcast or YouTube link — or pick a video file from your computer. Podcasts, interviews, your own recordings.": "Eski yayın ya da YouTube linki yapıştır — ya da bilgisayarından bir video dosyası seç. Podcast, röportaj, kendi kayıtların.",
  "Your own video files": "Kendi video dosyaların",
  "Pick any video from your computer — podcast, interview, recording — and the same AI pipeline turns it into vertical clips. Your file is never moved or deleted.": "Bilgisayarındaki herhangi bir videoyu seç — podcast, röportaj, kayıt — aynı AI hattı onu dikey kliplere çevirir. Dosyan taşınmaz ve silinmez.",
  "Can I use my own video files?": "Kendi video dosyalarımı kullanabilir miyim?",
  "Yes. Pick any video on your computer — a podcast, an interview, a recording — and Jolnova runs the same pipeline: it finds the best moments, cuts vertical clips, adds captions and writes the titles. Your original file is never moved or deleted.": "Evet. Bilgisayarındaki herhangi bir videoyu seç — podcast, röportaj, kayıt — Jolnova aynı hattı çalıştırır: en iyi anları bulur, dikey klip keser, altyazı ekler ve başlıkları yazar. Orijinal dosyan taşınmaz ve silinmez.",
  // --- site v2 ---
  "Skip to content": "İçeriğe geç",
  "Sign in": "Giriş yap",
  "↓ Download": "↓ İndir",
  "↓ Download for Windows": "↓ Windows için indir",
  "See how it works": "Nasıl çalıştığını gör",
  "AUTOMATED STREAM CLIPPING FOR WINDOWS": "WINDOWS İÇİN OTOMATİK YAYIN KLİPLEME",
  // --- yeni konumlandirma (2026-08): "AI clipper" degil, "otomatik kliphane".
  // Rakiplerin hepsi "yayini dikey klibe cevir" diyor; ayrisma noktalarimiz
  // BASKASININ yayinini takip edebilmek, kaydi KENDI makinende almak ve
  // olu sureyi kesmek.
  "MULTI-CREATOR CLIPPING FOR WINDOWS": "WINDOWS İÇİN ÇOKLU YAYINCI KLİPLEME",
  "Add the creators.": "Yayıncıları ekle.",
  "Wake up to clips.": "Sabah kliplerle uyan.",
  "Track any public streamer on Kick, Twitch, YouTube or TikTok. Jolnova records every broadcast on your own machine, finds the moments worth posting, and cuts the dead air out of them. You review what is worth keeping.": "Kick, Twitch, YouTube veya TikTok'ta herhangi bir yayıncıyı takip et. Jolnova her yayını kendi bilgisayarında kaydeder, paylaşmaya değer anları bulur ve aradaki ölü süreyi keser. Nesi kalacağına sen karar verirsin.",
  "Track streamers who are not you": "Kendi kanalın olmayan yayıncıları takip et",
  "Records on your PC — no VOD needed": "Kendi bilgisayarında kaydeder — VOD gerekmez",
  "Dead air cut automatically": "Ölü süre otomatik kesilir",
  "Nothing leaves without your approval": "Onayın olmadan hiçbir şey çıkmaz",
  "Turn live streams into": "Canlı yayınları",
  "vertical clips": "dikey kliplere",
  "— automatically.": "— otomatik çevir.",
  "Add a source once. Jolnova watches it in the background, records the broadcast and prepares vertical clips with titles and burned-in subtitles. New clips land in a review queue, waiting for your approval.": "Bir kez kaynak ekle. Jolnova arka planda izler, yayını kaydeder ve başlıklı, altyazısı gömülü dikey klipler hazırlar. Yeni klipler onayını bekleyen bir inceleme kuyruğuna düşer.",
  "Windows desktop app": "Windows masaüstü uygulaması",
  "Kick & Twitch live tracking": "Kick ve Twitch canlı takip",
  "YouTube and VOD links": "YouTube ve VOD linkleri",
  "Local video files": "Yerel video dosyaları",
  // --- YouTube canli takip (1.2.4) ---
  "YouTube — live tracking": "YouTube — canlı takip",
  "Twitch, Kick, TikTok and YouTube are all tracked live — recording starts by itself when the channel goes on air. YouTube also works from links: a video, a VOD or a past broadcast.":
    "Twitch, Kick, TikTok ve YouTube'un dördü de canlı takip edilir — kanal yayına geçtiğinde kayıt kendiliğinden başlar. YouTube ayrıca link ile de çalışır: video, geçmiş yayın ya da eski bir canlı yayın.",
  "Yes. Add the channel link once and Jolnova watches it like a Twitch or Kick source: when the channel goes live, recording starts by itself and clips land in your review queue. Pasting the link of a stream that is already live works too, as does a normal video, VOD or past broadcast.":
    "Evet. Kanal linkini bir kez ekle, Jolnova onu Twitch ya da Kick kaynağı gibi izler: kanal yayına geçtiğinde kayıt kendiliğinden başlar ve klipler inceleme kuyruğuna düşer. Zaten canlı olan bir yayının linkini yapıştırmak da çalışır; normal video, geçmiş yayın ya da eski canlı yayın da öyle.",
  "Kick, Twitch, TikTok and YouTube are all tracked live.":
    "Kick, Twitch, TikTok ve YouTube'un dördü de canlı takip edilir.",
  "Kick — live tracking": "Kick — canlı takip",
  "Twitch — live tracking": "Twitch — canlı takip",
  "YouTube — link processing": "YouTube — link işleme",
  "Local files — MP4, MKV, MOV, WEBM": "Yerel dosyalar — MP4, MKV, MOV, WEBM",
  "9:16 vertical output": "9:16 dikey çıktı",
  "HOW IT WORKS": "NASIL ÇALIŞIR",
  "From live source to review-ready clip.": "Canlı kaynaktan incelemeye hazır klibe.",
  "Jolnova handles the repetitive part — watching, recording, cutting and captioning. You keep the decision about what actually gets posted.": "Tekrar eden işi Jolnova yapar — izleme, kayıt, kesme ve altyazı. Neyin paylaşılacağına sen karar verirsin.",
  "Add a source": "Kaynak ekle",
  "Jolnova captures it": "Jolnova kaydeder",
  "Moments are prepared": "Anlar hazırlanır",
  "Review and export": "İncele ve dışa aktar",
  "CAPABILITIES": "YETENEKLER",
  "Live source tracking": "Canlı kaynak takibi",
  "Vertical formatting": "Dikey biçimlendirme",
  "Burned-in subtitles": "Gömülü altyazı",
  "Titles written for you": "Başlıklar senin yerine yazılır",
  "HD export": "HD dışa aktarım",
  "REVIEW QUEUE": "İNCELEME KUYRUĞU",
  "Review faster. Keep only the strongest moments.": "Daha hızlı incele. Sadece en güçlü anları tut.",
  "SOURCES": "KAYNAKLAR",
  "Live streams, VOD links and local videos — one pipeline.": "Canlı yayın, VOD linki ve yerel video — tek hat.",
  "Live tracking": "Canlı takip",
  "Link processing": "Link işleme",
  "Local processing": "Yerel işleme",
  "Local files": "Yerel dosyalar",
  "WHO IT IS FOR": "KİMLER İÇİN",
  "Built for people with more footage than time.": "Zamanından çok görüntüsü olanlar için.",
  "Streamers": "Yayıncılar",
  "Gaming creators": "Oyun üreticileri",
  "Podcasters & interviews": "Podcast ve röportaj",
  "WHAT WORKS WHERE": "NEREDE NE ÇALIŞIR",
  "Capabilities by source type.": "Kaynak türüne göre yetenekler.",
  "Capability": "Yetenek",
  "Live sources": "Canlı kaynaklar",
  "Video links": "Video linkleri",
  "Automatic recording": "Otomatik kayıt",
  "Moment detection": "An algılama",
  "Vertical 9:16 output": "Dikey 9:16 çıktı",
  "Title generation": "Başlık üretimi",
  "Review queue": "İnceleme kuyruğu",
  "HD download": "HD indirme",
  "Scheduling": "Zamanlama",
  "COMING SOON": "YAKINDA",
  "Build your clip pipeline once.": "Klip hattını bir kez kur.",
  "Add your sources, keep streaming, and review the moments Jolnova prepares while you were busy.": "Kaynaklarını ekle, yayına devam et; sen meşgulken Jolnova'nın hazırladığı anları incele.",
  "PRICING": "FİYATLANDIRMA",
  "One subscription. The full Jolnova workflow.": "Tek abonelik. Jolnova'nın tamamı.",
  "Every plan includes the same capabilities. Only the term length differs.": "Tüm planlar aynı yetenekleri içerir. Yalnızca süre değişir.",
  "Pricing is a preview.": "Fiyatlandırma bir önizlemedir.",
  "Checkout not available yet": "Ödeme henüz açık değil",
  "MOST POPULAR": "EN POPÜLER",
  "Monthly": "Aylık",
  "3 Months": "3 Aylık",
  "Yearly": "Yıllık",
  "Billed every month": "Her ay faturalanır",
  "FAQ": "SSS",
  "Questions about Jolnova?": "Jolnova hakkında sorular",
  "Search the FAQ…": "SSS'de ara…",
  "Getting Started": "Başlarken",
  "Sources and Platforms": "Kaynaklar ve platformlar",
  "Clips and Editing": "Klipler ve düzenleme",
  "Files and Privacy": "Dosyalar ve gizlilik",
  "Pricing and Billing": "Fiyat ve faturalandırma",
  "Troubleshooting": "Sorun giderme",
  "No answer matched your search. Try a different word.": "Aramanla eşleşen yanıt yok. Farklı bir kelime dene.",
  "FEATURES": "ÖZELLİKLER",
  "A closer look at the Jolnova workflow.": "Jolnova akışına yakından bakış.",
  "PRODUCT": "ÜRÜN",
  "RESOURCES": "KAYNAKLAR",
  "LEGAL": "YASAL",
  "Features": "Özellikler",
  "How It Works": "Nasıl Çalışır",
  "Pricing": "Fiyatlar",
  "Download": "İndir",
  "Home": "Ana Sayfa",
  "Create account": "Hesap oluştur",
  "Privacy": "Gizlilik",
  "Terms": "Şartlar",
  "Jolnova for Windows 10 and 11": "Windows 10 ve 11 için Jolnova",
  "© 2026 Jolnova. All rights reserved.": "© 2026 Jolnova. Tüm hakları saklıdır.",
  // --- site govde metinleri ---
  "Kick &amp; Twitch live tracking": "Kick ve Twitch canlı takip",
  "Paste a Kick or Twitch channel, a video link, or pick a file from your computer.": "Kick ya da Twitch kanalı yapıştır, video linki ver veya bilgisayarından bir dosya seç.",
  "Kick and Twitch channels": "Kick ve Twitch kanalları",
  "Live sources are monitored in the background. Links and files are processed on demand.": "Canlı kaynaklar arka planda izlenir. Link ve dosyalar istendiğinde işlenir.",
  "Recording starts when a source goes live": "Kaynak canlıya geçince kayıt başlar",
  "No manual timing needed": "Elle zamanlama gerekmez",
  "Candidate moments are cut, formatted vertically and captioned.": "Aday anlar kesilir, dikey biçimlendirilir ve altyazılanır.",
  "9:16 formatting": "9:16 biçimlendirme",
  "Generated titles": "Üretilen başlıklar",
  "Clips arrive in a queue. Approve what you like and download it in HD.": "Klipler kuyruğa düşer. Beğendiğini onayla ve HD indir.",
  "Approve or reject": "Onayla ya da reddet",
  "Download anywhere you choose": "İstediğin yere indir",
  "Built around the parts you would rather not do by hand.": "Elle yapmak istemeyeceğin işler için tasarlandı.",
  "Jolnova checks your Kick and Twitch sources continuously. The moment a channel goes live, recording begins by itself — you do not have to be at the computer when it starts.": "Jolnova Kick ve Twitch kaynaklarını sürekli kontrol eder. Kanal canlıya geçtiği an kayıt kendi başlar — o sırada bilgisayar başında olman gerekmez.",
  "Every clip comes out 9:16, ready for Reels, Shorts and TikTok. Game mode keeps the camera and gameplay both visible.": "Her klip 9:16 çıkar; Reels, Shorts ve TikTok'a hazır. Oyun modunda kamera ve oyun birlikte görünür.",
  "Speech is transcribed and rendered into the video, so clips stay readable when they autoplay muted.": "Konuşma yazıya çevrilip videoya işlenir; klipler sessiz oynadığında da okunur kalır.",
  "Each clip arrives with a title based on what actually happens in it — not a filename.": "Her klip, içinde gerçekten olan şeye dayanan bir başlıkla gelir — dosya adıyla değil.",
  "Approved clips download at full quality, to any folder you pick. No watermark, no re-encode on the way out.": "Onaylanan klipler tam kalitede, seçtiğin klasöre iner. Filigran yok, çıkışta yeniden sıkıştırma yok.",
  "Every produced clip lands in one queue, grouped by source. Filter by platform, search by title, and approve the ones worth posting.": "Üretilen her klip kaynağa göre gruplanmış tek kuyruğa düşer. Platforma göre filtrele, başlıkta ara, paylaşmaya değenleri onayla.",
  "Filter by Kick, Twitch, YouTube or your own files": "Kick, Twitch, YouTube ya da kendi dosyalarına göre filtrele",
  "Search across titles and sources": "Başlık ve kaynaklarda ara",
  "Approve or reject with a single click": "Tek tıkla onayla ya da reddet",
  "Select several clips and act on them together": "Birden fazla klip seç, hepsine birden işlem yap",
  "Download approved clips in HD": "Onaylanan klipleri HD indir",
  "Add a channel and Jolnova records automatically when it goes live.": "Bir kanal ekle; canlıya geçtiğinde Jolnova otomatik kaydeder.",
  "Same automatic capture workflow as Kick, including past broadcasts.": "Kick ile aynı otomatik yakalama akışı, eski yayınlar dahil.",
  "Paste a video, VOD or past stream link and Jolnova processes it on demand.": "Video, VOD ya da eski yayın linki yapıştır; Jolnova istendiğinde işler.",
  "Pick a video already on your PC. The file is read in place — never moved or deleted.": "Bilgisayarındaki bir videoyu seç. Dosya yerinde okunur — taşınmaz, silinmez.",
  "YouTube &amp; VOD": "YouTube ve VOD",
  "Turn a six-hour broadcast into a set of short-form candidates without scrubbing the timeline yourself.": "Altı saatlik yayını, zaman çizelgesinde tek tek gezmeden kısa video adaylarına çevir.",
  "Reactions, clutches and chat explosions get cut with the camera and gameplay both in frame.": "Tepkiler, kritik anlar ve chat patlamaları kamera ve oyun aynı karede olacak şekilde kesilir.",
  "Point Jolnova at a local recording and get vertical segments with subtitles already burned in.": "Jolnova'yı yerel bir kayda yönlendir; altyazısı gömülü dikey bölümler al.",
  "Live sources are tracked continuously. Links and local files are processed when you ask for them.": "Canlı kaynaklar sürekli takip edilir. Link ve yerel dosyalar sen istediğinde işlenir.",
  "You add the source. Jolnova handles the repetitive work.": "Kaynağı sen ekle. Tekrar eden işi Jolnova yapsın.",
  "Live sources are tracked in the background, links and local files are processed on demand, and everything ends up in one review queue.": "Canlı kaynaklar arka planda takip edilir, link ve yerel dosyalar istendiğinde işlenir, hepsi tek inceleme kuyruğunda toplanır.",
  "Source": "Kaynak",
  "Capture": "Yakala",
  "Detect": "Algıla",
  "Format": "Biçimlendir",
  "Review": "İncele",
  "Export": "Dışa aktar",
  "STEP 01": "ADIM 01",
  "STEP 02": "ADIM 02",
  "STEP 03": "ADIM 03",
  "STEP 04": "ADIM 04",
  "STEP 05": "ADIM 05",
  "STEP 06": "ADIM 06",
  "Add or choose a source": "Kaynak ekle ya da seç",
  "Paste a Kick or Twitch channel to track it continuously, drop in a YouTube or VOD link for a one-off job, or pick a video that is already on your computer.": "Sürekli takip için Kick ya da Twitch kanalı yapıştır, tek seferlik iş için YouTube veya VOD linki ver, ya da bilgisayarındaki bir videoyu seç.",
  "Kick channel — live tracking": "Kick kanalı — canlı takip",
  "Twitch channel — live tracking": "Twitch kanalı — canlı takip",
  "YouTube, Kick VOD and Twitch VOD links": "YouTube, Kick VOD ve Twitch VOD linkleri",
  "Local MP4, MKV, MOV and WEBM files": "Yerel MP4, MKV, MOV ve WEBM dosyaları",
  "Local files are read in place. Jolnova never moves or deletes your originals.": "Yerel dosyalar yerinde okunur. Jolnova orijinallerini taşımaz ya da silmez.",
  "Capture or process the video": "Videoyu yakala ya da işle",
  "Tracked channels are checked on a schedule. When one goes live, Jolnova starts recording without asking. Links and files skip that step and go straight into processing.": "Takip edilen kanallar düzenli kontrol edilir. Biri canlıya geçtiğinde Jolnova sormadan kayda başlar. Link ve dosyalar bu adımı atlayıp doğrudan işleme girer.",
  "Recording starts automatically for live sources": "Canlı kaynaklarda kayıt otomatik başlar",
  "Links are downloaded, then processed": "Linkler indirilir, sonra işlenir",
  "Local files are read directly from disk": "Yerel dosyalar doğrudan diskten okunur",
  "Find the candidate moments": "Aday anları bul",
  "Chat reaction spikes": "Chat tepki sıçramaları",
  "Sudden audio jumps": "Ani ses yükselmeleri",
  "Prepare vertical output": "Dikey çıktıyı hazırla",
  "Each moment is cut and reframed to 9:16. In game mode the camera and the gameplay are both kept in frame; in IRL mode the shot fills the screen vertically.": "Her an kesilip 9:16'ya yeniden kadrajlanır. Oyun modunda kamera ve oyun birlikte kadrajda kalır; IRL modunda görüntü ekranı dikey doldurur.",
  "9:16 output for Reels, Shorts and TikTok": "Reels, Shorts ve TikTok için 9:16 çıktı",
  "Game mode: camera plus gameplay": "Oyun modu: kamera artı oyun",
  "IRL mode: full-screen vertical": "IRL modu: tam ekran dikey",
  "Automatic camera detection when available": "Mümkün olduğunda otomatik kamera algılama",
  "Write the clip metadata": "Klip bilgilerini yaz",
  "Speech is transcribed and burned into the video, and a title is written from what actually happens in the clip — so you are not renaming files by hand.": "Konuşma yazıya çevrilip videoya gömülür ve klipte gerçekten olan şeyden bir başlık yazılır — dosyaları elle yeniden adlandırmazsın.",
  "Transcribed, burned-in subtitles": "Yazıya dökülmüş, gömülü altyazı",
  "Generated titles in English": "İngilizce üretilen başlıklar",
  "Optional text or image overlay you can add yourself": "İstersen kendin ekleyebileceğin yazı ya da görsel katmanı",
  "Open the review queue, work through the candidates, and approve the ones worth posting. Approved clips download in HD to whichever folder you choose.": "İnceleme kuyruğunu aç, adayları gözden geçir, paylaşmaya değenleri onayla. Onaylananlar seçtiğin klasöre HD iner.",
  "Approve or reject in one click": "Tek tıkla onayla ya da reddet",
  "Undo a rejection at any time": "Reddetmeyi istediğin an geri al",
  "Download one clip or a whole selection": "Tek klip ya da bütün bir seçim indir",
  "Choose the destination folder yourself": "Hedef klasörü kendin seç",
    "Ready to build your clip workflow?": "Klip akışını kurmaya hazır mısın?",
  "Install Jolnova, add one source, and let the first clips arrive on their own.": "Jolnova'yı kur, bir kaynak ekle, ilk klipler kendiliğinden gelsin.",
  "Browse the features": "Özelliklere göz at",
  "From source tracking to review-ready vertical clips — here is what the application actually does today.": "Kaynak takibinden incelemeye hazır dikey kliplere — uygulamanın bugün gerçekten yaptıkları.",
  "LIVE TRACKING": "CANLI TAKİP",
  "Know what is live, what is recording and what went quiet": "Ne canlı, ne kayıtta, ne sustu — hepsini gör",
  "One page shows every source you track, with its live state, recording state and capture mode. Pause a source when you do not want clips from it, and resume it later.": "Tek sayfada takip ettiğin her kaynak; canlı durumu, kayıt durumu ve yakalama modu. İstemediğinde duraklat, sonra devam ettir.",
  "Live, Offline, Recording and Paused states": "Canlı, Çevrimdışı, Kayıtta ve Duraklatıldı durumları",
  "Viewer count when the platform reports it": "Platform bildirdiğinde izleyici sayısı",
  "Pause and resume per source": "Kaynak bazında duraklat ve devam ettir",
  "Switch between Auto, Game and IRL capture": "Auto, Game ve IRL yakalama arasında geçiş",
  "Open a detail panel for any source": "Herhangi bir kaynağın ayrıntı panelini aç",
  "One queue for everything Jolnova produced": "Jolnova'nın ürettiği her şey için tek kuyruk",
  "Clips are grouped by source and paginated, so a queue with hundreds of items stays fast. Filter, search, select several at once and act on them together.": "Klipler kaynağa göre gruplanır ve sayfalanır; yüzlerce klipte bile hızlı kalır. Filtrele, ara, birden fazlasını seç ve topluca işlem yap.",
  "Filter by Kick, Twitch, YouTube or local files": "Kick, Twitch, YouTube ya da yerel dosyalara göre filtrele",
  "Search across clip titles and sources": "Klip başlıklarında ve kaynaklarda ara",
  "Select multiple clips and approve or reject as a batch": "Birden fazla klip seçip toplu onayla ya da reddet",
  "Delete every clip from one source in one action": "Bir kaynağın tüm kliplerini tek işlemde sil",
  "LINK PROCESSING": "LİNK İŞLEME",
  "Paste a link, get clips": "Link yapıştır, klip al",
  "Past broadcasts and uploaded videos go through the same pipeline as live recordings. Progress is shown while the video downloads, gets scanned and turns into clips.": "Eski yayınlar ve yüklenen videolar canlı kayıtlarla aynı hattan geçer. Video inerken, taranırken ve kliplere dönüşürken ilerleme gösterilir.",
  "Kick VOD links": "Kick VOD linkleri",
  "Twitch VOD links": "Twitch VOD linkleri",
  "YouTube videos and past streams": "YouTube videoları ve eski yayınlar",
  "Downloaded → scanned → clips land in the queue": "İndirildi → tarandı → klipler kuyruğa düştü",
  "LOCAL FILES": "YEREL DOSYALAR",
  "Your own recordings work too": "Kendi kayıtların da işler",
  "Pick any video sitting on your computer — a podcast, an interview, an old recording — and Jolnova runs the same detection and formatting over it.": "Bilgisayarındaki herhangi bir videoyu seç — podcast, röportaj, eski bir kayıt — Jolnova aynı algılama ve biçimlendirmeyi uygular.",
  "MP4, MKV, MOV and WEBM": "MP4, MKV, MOV ve WEBM",
  "The file is read where it is": "Dosya bulunduğu yerde okunur",
  "Your original is never moved or deleted": "Orijinalin asla taşınmaz ya da silinmez",
  "Titles derived from the file name plus what is said": "Başlıklar dosya adından ve söylenenlerden üretilir",
  "Processing happens on your machine; only the AI text step contacts a service.": "İşlem senin makinende olur; yalnızca AI metin adımı bir servise bağlanır.",
  "VERTICAL LAYOUT": "DİKEY YERLEŞİM",
  "Framed for vertical, not just cropped": "Sadece kırpılmaz — dikey için kadrajlanır",
  "Game mode stacks the streamer camera above the gameplay. IRL mode fills the frame vertically. Auto picks between them based on the source.": "Oyun modu yayıncı kamerasını oyunun üstüne yerleştirir. IRL modu kareyi dikey doldurur. Auto, kaynağa göre ikisi arasında seçim yapar.",
  "Game / Reaction layout": "Oyun / Tepki yerleşimi",
  "IRL and Just Chatting layout": "IRL ve Just Chatting yerleşimi",
  "Automatic camera-box detection": "Otomatik kamera kutusu algılama",
  "Manual camera region when you want control": "Kontrol istediğinde elle kamera bölgesi",
  "SUBTITLES &amp; TITLES": "ALTYAZI VE BAŞLIK",
  "Readable with the sound off": "Ses kapalıyken de okunur",
  "Speech is transcribed and rendered into the video in a single encode, so there is no second-generation quality loss. Titles are written from the transcript and the moment context.": "Konuşma tek geçişte yazıya çevrilip videoya işlenir; ikinci nesil kalite kaybı olmaz. Başlıklar döküm ve anın bağlamından yazılır.",
  "Description and hashtag suggestions": "Açıklama ve hashtag önerileri",
  "Single-pass encoding — no stacked re-compression": "Tek geçişli kodlama — üst üste sıkıştırma yok",
  "OVERLAYS": "KATMANLAR",
  "Add your own text or image": "Kendi yazını ya da görselini ekle",
  "Put a logo or a line of text on any clip. Effects are always re-applied from the untouched original, so adding and removing them never degrades the video.": "Herhangi bir klibe logo ya da bir satır yazı koy. Efektler her zaman dokunulmamış orijinalden yeniden uygulanır; ekleyip kaldırmak videoyu asla bozmaz.",
  "Image overlay with drag-and-resize placement": "Sürükle-boyutlandır ile görsel katmanı",
  "Text overlay with position, size, colour and background": "Konum, boyut, renk ve arka planlı yazı katmanı",
  "Remove and re-add without quality loss": "Kalite kaybı olmadan kaldır ve yeniden ekle",
  "Trim the start and end of a clip": "Klibin başını ve sonunu kırp",
  "EXPORT": "DIŞA AKTARIM",
  "Download where you actually want it": "Gerçekten istediğin yere indir",
  "Approved clips save at full quality to a folder you choose. Save one, or send an entire section to a folder in one action.": "Onaylanan klipler tam kalitede seçtiğin klasöre kaydedilir. Tek klip kaydet ya da bütün bir bölümü tek işlemle gönder.",
  "HD output, no watermark": "HD çıktı, filigran yok",
  "Save a single clip or a whole section": "Tek klip ya da bütün bölümü kaydet",
  "Your originals stay untouched": "Orijinallerin dokunulmadan kalır",
    "ALSO INCLUDED": "AYRICA VAR",
  "Smaller things that add up.": "Toplamda fark yaratan küçük şeyler.",
  "English or Turkish": "İngilizce ya da Türkçe",
  "Switch the whole interface between EN and TR at any time.": "Arayüzün tamamını istediğin an EN ve TR arasında değiştir.",
  "Runs in the background": "Arka planda çalışır",
  "Close the window and tracking keeps going. Reopen it whenever you want to review.": "Pencereyi kapat, takip devam eder. İncelemek istediğinde yeniden aç.",
  "Automatic updates": "Otomatik güncelleme",
  "New versions are detected and installed from inside the app.": "Yeni sürümler uygulama içinden algılanır ve kurulur.",
  "Account protected": "Hesapla korumalı",
  "Sign-in is required and verified on every launch, so a copied install is not usable.": "Giriş zorunludur ve her açılışta doğrulanır; kopyalanmış kurulum kullanılamaz.",
  "Per-source cleanup": "Kaynak bazında temizlik",
  "Remove every clip from a single source without touching the rest.": "Tek bir kaynağın tüm kliplerini diğerlerine dokunmadan kaldır.",
  "Analytics on your own output": "Kendi çıktın üzerine analiz",
  "See how many clips were produced, approval rate and platform split — from your real data.": "Kaç klip üretildi, onay oranı ve platform dağılımı — gerçek verinden.",
  "See it running on your own sources.": "Kendi kaynaklarında çalışırken gör.",
  "Install Jolnova and add a channel — the first clips arrive without any further work.": "Jolnova'yı kur ve bir kanal ekle — ilk klipler başka iş yapmadan gelir.",
  "View pricing": "Fiyatları gör",
  "Subscriptions are not connected yet, so checkout is disabled. The application is available to download and sign in to today; billing will be switched on later.": "Abonelikler henüz bağlı değil, bu yüzden ödeme kapalı. Uygulama bugün indirilebilir ve giriş yapılabilir; faturalandırma sonra açılacak.",
  "Works out to $25 per month": "Aylık 25 dolara denk gelir",
  "Works out to $20.75 per month": "Aylık 20,75 dolara denk gelir",
  "Kick and Twitch live tracking": "Kick ve Twitch canlı takip",
  "YouTube and VOD link processing": "YouTube ve VOD link işleme",
  "Local file processing": "Yerel dosya işleme",
  "All three plans contain exactly the same features. The only difference is how long the term runs and the effective monthly price.": "Üç plan da tamamen aynı özellikleri içerir. Tek fark sürenin uzunluğu ve aylık karşılığıdır.",
  "PRICING QUESTIONS": "FİYAT SORULARI",
  "Before you decide": "Karar vermeden önce",
  "Try it before pricing goes live.": "Fiyatlandırma açılmadan önce dene.",
  "Download Jolnova, sign in and run it on your own sources.": "Jolnova'yı indir, giriş yap ve kendi kaynaklarında çalıştır.",
  "Read the FAQ": "SSS'yi oku",
  "Answers about supported sources, how clips are produced, what happens to your files and how billing will work.": "Desteklenen kaynaklar, kliplerin nasıl üretildiği, dosyalarına ne olduğu ve faturalandırmanın nasıl işleyeceği hakkında yanıtlar.",
  "Still have a question?": "Hâlâ sorun mu var?",
  "Install Jolnova and try it on one source — most questions answer themselves in the first session.": "Jolnova'yı kur ve tek bir kaynakta dene — soruların çoğu ilk oturumda kendiliğinden yanıtlanır.",
  "Automatic stream clipping for Windows. Track your sources, let Jolnova prepare vertical clips, and review what is worth posting.": "Windows için otomatik yayın kliplemesi. Kaynaklarını takip et, Jolnova dikey klipleri hazırlasın, sen paylaşmaya değeni seç.",

  // ---- klip editoru + SSS (2026-08) ----
  "Live Tracking": "Canlı Takip",
  "Review Queue": "İnceleme Kuyruğu",
  "CLIP EDITOR": "KLİP EDİTÖRÜ",
  "Cut it, brand it, caption it — without leaving the app.": "Kes, markanı bas, yazı ekle — uygulamadan çıkmadan.",
  "Open any clip and you get the whole picture: the vertical preview, the generated title, description and hashtags, and the tools to change what you do not like.": "Bir klibi aç, her şey karşında: dikey önizleme, üretilen başlık, açıklama ve hashtagler, bir de beğenmediğini değiştirecek araçlar.",
  "Trim the start and end with two handles": "Başı ve sonu iki tutamakla kırp",
  "Drag an image onto the frame and resize it": "Kareye görsel sürükle ve boyutlandır",
  "Add text with position, size, colour and background": "Konum, boyut, renk ve arka planla yazı ekle",
  "Remove any effect and get the original clip back": "Efekti kaldır, orijinal klibe geri dön",
  "No quality loss — effects are re-applied from the untouched source": "Kalite kaybı yok — efektler el değmemiş kaynaktan yeniden uygulanır",
  "Clip detail": "Klip detayı",
  "Trim": "Kırpma",
  "Trim clip": "Klibi kırp",
  "Drag the handles until the clip opens on the moment itself.": "Klip tam o ana açılana kadar tutamakları sürükle.",
  "Image": "Görsel",
  "Add an image": "Görsel ekle",
  "Place a logo anywhere on the frame and resize it from the corner.": "Logoyu karenin istediğin yerine koy, köşesinden boyutlandır.",
  "Text": "Yazı",
  "Add text": "Yazı ekle",
  "Write a hook, pick where it sits and give it a background if you want one.": "Bir kanca yaz, nerede duracağını seç, istersen arkasına zemin ver.",
  "Fine-tune the clip yourself": "Klibe son dokunuşu sen yap",
  "Before you approve anything you can cut the ends, drop a logo on the frame or write a line across the video. Every change is applied to the original clip, so editing never costs you quality.": "Onaylamadan önce uçları kesebilir, kareye logo bırakabilir ya da videonun üstüne bir satır yazabilirsin. Her değişiklik orijinal klibe uygulanır; düzenleme sana asla kalite kaybettirmez.",
  "Trim the start and the end with two handles": "Başı ve sonu iki tutamakla kırp",
  "Place an image anywhere and resize it": "Görseli istediğin yere koy, boyutlandır",
  "Remove any effect and get the clean clip back": "Efekti kaldır, temiz klibe geri dön",
  "STEP 07": "ADIM 07",
  "Clips library": "Klip kütüphanesi",
  "THE EDITOR": "EDİTÖR",
  "The three tools you actually use.": "Gerçekten kullandığın üç araç.",
  "They sit on the clip itself — open a clip, change it, approve it. There is no separate editing project to manage.": "Araçlar klibin üstünde duruyor — klibi aç, değiştir, onayla. Yönetilecek ayrı bir kurgu projesi yok.",
  "Drag the two handles until the clip starts and ends exactly where the moment does.": "Klip tam anın başladığı ve bittiği yerde başlayıp bitene kadar iki tutamağı sürükle.",
  "Image overlay": "Görsel bindirme",
  "Drag a logo or badge onto the frame, resize it from the corner, apply.": "Kareye logo veya rozet sürükle, köşesinden boyutlandır, uygula.",
  "Text overlay": "Yazı bindirme",
  "Write a hook, choose where it sits and whether it gets a box behind it.": "Bir kanca yaz, nerede duracağını ve arkasına kutu gelip gelmeyeceğini seç.",
  "Effects are always re-applied from the untouched original, so adding and removing them never degrades the video.": "Efektler her zaman el değmemiş orijinalden yeniden uygulanır; eklemek ve kaldırmak videoyu asla bozmaz.",
  "My files": "Dosyalarım",
  "Capture modes": "Yakalama modları",
  "Automation": "Otomasyon",
  "Clip output": "Klip çıktısı",
  "Clips": "Klipler",
  "Settings": "Ayarlar",
  "CAMERA REGION": "KAMERA BÖLGESİ",
  "Tell it where the camera is — or let it find one": "Kameranın yerini söyle — ya da kendisi bulsun",
  "In Game mode the streamer camera goes on top and the gameplay underneath. Jolnova can detect the camera box itself, and when a layout is unusual you draw the box over a real frame from the stream.": "Oyun modunda yayıncı kamerası üste, oynanış alta gelir. Jolnova kamera kutusunu kendi bulabilir; düzen alışılmadıksa kutuyu yayından alınmış gerçek bir karenin üzerine sen çizersin.",
  "Automatic camera detection": "Otomatik kamera algılama",
  "Draw and resize the box yourself": "Kutuyu kendin çiz ve boyutlandır",
  "Positioned over an actual frame from the source": "Kaynaktan alınan gerçek karenin üzerinde konumlanır",
  "Saved per source and reused for every clip": "Kaynak başına kaydedilir, her klipte yeniden kullanılır",
  "Camera setup": "Kamera kurulumu",
  "TEXT OVERLAY": "YAZI BİNDİRME",
  "Put your own line on the video": "Videoya kendi satırını koy",
  "Type the text, choose where it sits, how big it is, what colour it is and whether it gets a solid background behind it. The text is burned into the video so it survives re-uploads.": "Yazıyı gir; nerede duracağını, ne kadar büyük olacağını, hangi renk olacağını ve arkasına dolu bir zemin gelip gelmeyeceğini seç. Yazı videonun içine gömülür, yeniden yüklemelerde kaybolmaz.",
  "Top, middle or bottom placement": "Üst, orta veya alt yerleşim",
  "Size and colour presets": "Boyut ve renk hazır ayarları",
  "Shadow or a solid box behind the text": "Yazının arkasına gölge veya dolu kutu",
  "Live preview before you apply it": "Uygulamadan önce canlı önizleme",
  "Remove it later and the clip returns to its original state": "Sonra kaldır, klip orijinal haline döner",
  "IMAGE OVERLAY": "GÖRSEL BİNDİRME",
  "Drop a logo anywhere on the frame": "Karenin istediğin yerine logo bırak",
  "Pick a PNG or JPG, drag it where you want it and resize it from the corner. Applying burns it into the clip; removing it gives you the clean video back.": "Bir PNG ya da JPG seç, istediğin yere sürükle ve köşesinden boyutlandır. Uyguladığında klibe gömülür, kaldırdığında temiz video geri gelir.",
  "Drag to position, corner handle to resize": "Konum için sürükle, boyut için köşe tutamağı",
  "Preview on the actual frame": "Gerçek karenin üzerinde önizleme",
  "Add and remove as many times as you like": "İstediğin kadar ekle ve kaldır",
  "Every effect is re-applied from the untouched original — no generation loss": "Her efekt el değmemiş orijinalden yeniden uygulanır — nesil kaybı yok",
  "Nothing is stacked on top of an already-compressed export, so a clip you edited five times looks like a clip you edited once.": "Hiçbir şey zaten sıkıştırılmış bir çıktının üstüne yığılmaz; beş kez düzenlediğin klip, bir kez düzenlenmiş gibi görünür.",
  "TRIM": "KIRPMA",
  "Cut the dead air off both ends": "İki uçtaki ölü zamanı kes",
  "Detection gets you close; trimming gets you exact. Drag the start and end handles until the clip opens on the moment itself, and see the resulting length as you go.": "Algılama seni yaklaştırır, kırpma tam noktaya oturtur. Klip tam o ana açılana kadar başlangıç ve bitiş tutamaklarını sürükle, oluşan süreyi anlık gör.",
  "Separate start and end handles": "Ayrı başlangıç ve bitiş tutamakları",
  "Selected duration shown while you drag": "Sürüklerken seçili süre görünür",
  "Frame-accurate cut, re-encoded once": "Kare hassasiyetinde kesim, tek seferde yeniden kodlama",
  "Trim again later — you are always cutting from the original": "Sonra tekrar kırp — her zaman orijinalden kesersin",
  "SETTINGS": "AYARLAR",
  "Tune it once, then leave it alone": "Bir kez ayarla, sonra rahat bırak",
    "Detection sensitivity: low, normal or high": "Algılama hassasiyeti: düşük, normal veya yüksek",
  "Your own download folder": "Kendi indirme klasörün",
  "English or Turkish interface": "İngilizce veya Türkçe arayüz",
  "Version and update check": "Sürüm ve güncelleme kontrolü",
  "/3 mo": "/3 ay",
  "Can I subscribe right now?": "Şu anda abone olabilir miyim?",
  "Not yet. Payment is not connected, so the checkout buttons are disabled. You can download the application and create an account today.": "Henüz değil. Ödeme bağlı olmadığı için ödeme butonları kapalı. Bugün uygulamayı indirip hesap oluşturabilirsin.",
  "Do the plans have different features?": "Planların özellikleri farklı mı?",
  "No. All three plans include the same capabilities. The only difference is the term length and the effective monthly price.": "Hayır. Üç plan da aynı yetenekleri içerir. Tek fark süre uzunluğu ve buna karşılık gelen aylık fiyattır.",
  "Is AI processing included?": "Yapay zekâ işlemleri dahil mi?",
  "How many sources can I track?": "Kaç kaynağı takip edebilirim?",
  "There is no hard limit built into the application today. Practical limits come from your own machine — each live recording uses disk space and CPU.": "Bugün uygulamada sabit bir sınır yok. Pratik sınır kendi makinenden gelir — her canlı kayıt disk alanı ve işlemci kullanır.",
      "Not today. Jolnova produces the clip files and you post them yourself. Account connection is part of the publishing work that is still in development.": "Bugün için hayır. Jolnova klip dosyalarını üretir, paylaşımı sen yaparsın. Hesap bağlama, hâlâ geliştirilmekte olan paylaşım çalışmasının parçası.",
  "What exactly does Jolnova do?": "Jolnova tam olarak ne yapar?",
  "It is a Windows application that watches the stream sources you add, records them when they go live, finds moments worth clipping, cuts them into vertical videos with subtitles and titles, and puts them in a queue for you to approve.": "Eklediğin yayın kaynaklarını izleyen, canlıya geçtiklerinde kaydeden, kliplenmeye değer anları bulan, bunları altyazılı ve başlıklı dikey videolara dönüştüren ve onayın için bir kuyruğa koyan bir Windows uygulamasıdır.",
  "Do I need to install anything else?": "Başka bir şey kurmam gerekiyor mu?",
  "No. The installer brings what it needs. The first launch downloads a video toolkit in the background, which takes a moment on a new machine.": "Hayır. Kurulum ihtiyacı olanı getirir. İlk açılışta arka planda bir video araç seti indirilir; yeni bir makinede bu biraz sürer.",
  "Which Windows versions are supported?": "Hangi Windows sürümleri destekleniyor?",
  "Windows 10 and Windows 11, 64-bit.": "Windows 10 ve Windows 11, 64-bit.",
  "Do I need an account?": "Hesap gerekiyor mu?",
  "Yes. Sign-in is required and is verified against our server every time the application starts.": "Evet. Giriş zorunludur ve uygulama her açıldığında sunucumuz üzerinden doğrulanır.",
  "Which platforms are supported?": "Hangi platformlar destekleniyor?",
  "Kick and Twitch channels can be tracked live, with recording starting by itself. YouTube videos, Kick VODs and Twitch VODs are processed from a link. Local video files on your computer are processed directly.": "Kick ve Twitch kanalları canlı takip edilebilir, kayıt kendiliğinden başlar. YouTube videoları, Kick ve Twitch geçmiş yayınları bağlantıdan işlenir. Bilgisayarındaki yerel video dosyaları doğrudan işlenir.",
  "Does YouTube live tracking work?": "YouTube canlı takibi çalışıyor mu?",
  "No. YouTube works from links only — paste a video, VOD or past stream URL and Jolnova processes it on demand.": "Hayır. YouTube yalnızca bağlantıdan çalışır — bir video, VOD veya geçmiş yayın bağlantısı yapıştır, Jolnova talep üzerine işlesin.",
  "How many sources can I add?": "Kaç kaynak ekleyebilirim?",
  "The application does not impose a fixed limit. What you can realistically run depends on your own disk space and CPU, since each live recording consumes both.": "Uygulama sabit bir sınır koymaz. Gerçekçi olarak neyi çalıştırabileceğin kendi disk alanına ve işlemcine bağlıdır; her canlı kayıt ikisini de tüketir.",
  "Does it keep working when I close the window?": "Pencereyi kapattığımda çalışmaya devam eder mi?",
  "Yes. Tracking and recording continue in the background after you close the window. They stop when you quit the application from the menu.": "Evet. Pencereyi kapattıktan sonra takip ve kayıt arka planda sürer. Menüden uygulamadan çıkınca durur.",
    "What decides which moments become clips?": "Hangi anların klip olacağına ne karar verir?",
  "Can I edit a clip after it is produced?": "Klip üretildikten sonra düzenleyebilir miyim?",
  "You can trim the start and end, add or remove a text overlay, add or remove an image overlay, and change the thumbnail. Effects are always re-applied from the untouched original, so nothing degrades.": "Başı ve sonu kırpabilir, yazı bindirmesi ekleyip kaldırabilir, görsel bindirmesi ekleyip kaldırabilir ve kapak görselini değiştirebilirsin. Efektler her zaman el değmemiş orijinalden yeniden uygulanır, hiçbir şey bozulmaz.",
  "Will repeated edits reduce quality?": "Tekrarlanan düzenlemeler kaliteyi düşürür mü?",
  "No. Each effect change re-renders from the pristine original rather than stacking encodes on top of each other. Removing an effect restores the file byte-for-byte.": "Hayır. Her efekt değişikliği kodlamaları üst üste yığmak yerine el değmemiş orijinalden yeniden işlenir. Bir efekti kaldırmak dosyayı bayt bayt geri getirir.",
  "Are subtitles burned into the video?": "Altyazılar videoya gömülüyor mu?",
  "Yes, they are rendered into the picture in the same encoding pass, so clips stay readable when they autoplay without sound.": "Evet, aynı kodlama geçişinde görüntünün içine işlenir; böylece klipler sessiz otomatik oynatıldığında da okunur kalır.",
  "What resolution do clips come out at?": "Klipler hangi çözünürlükte çıkıyor?",
  "Vertical 9:16 at full quality, with no watermark.": "Tam kalitede dikey 9:16, filigransız.",
  "What happens to my local video files?": "Yerel video dosyalarıma ne oluyor?",
  "They are read where they are. Jolnova does not move, rename or delete your source files.": "Bulundukları yerden okunur. Jolnova kaynak dosyalarını taşımaz, adını değiştirmez, silmez.",
  "Where are the produced clips stored?": "Üretilen klipler nerede saklanıyor?",
  "On your computer, in the application's data folder, until you download them somewhere else. You choose the destination folder when exporting.": "Başka bir yere indirene kadar bilgisayarında, uygulamanın veri klasöründe. Dışa aktarırken hedef klasörü sen seçersin.",
  "Is my video uploaded anywhere?": "Videom bir yere yükleniyor mu?",
  "Can someone use a copy of the application without paying?": "Uygulamanın bir kopyası ödeme yapmadan kullanılabilir mi?",
  "No. Every request inside the application requires a verified sign-in, checked against our server. A copied installation is not usable without an account.": "Hayır. Uygulama içindeki her istek, sunucumuzda doğrulanmış bir giriş gerektirir. Kopyalanmış bir kurulum hesap olmadan kullanılamaz.",
  "Can I subscribe today?": "Bugün abone olabilir miyim?",
  "Not yet. Payment is not connected, so checkout buttons are disabled. Pricing on the site is a preview of the planned plans.": "Henüz değil. Ödeme bağlı olmadığı için ödeme butonları kapalı. Sitedeki fiyatlar planlanan paketlerin bir ön gösterimidir.",
  "Do the plans differ in features?": "Planlar özellik olarak farklı mı?",
  "No. All plans include the same capabilities; only the term length and effective monthly price change.": "Hayır. Tüm planlar aynı yetenekleri içerir; yalnızca süre uzunluğu ve buna karşılık gelen aylık fiyat değişir.",
  "Is there a free trial?": "Ücretsiz deneme var mı?",
  "Trial terms will be announced when billing goes live.": "Deneme koşulları faturalandırma açıldığında duyurulacak.",
  "A clip did not get produced from a stream I expected.": "Beklediğim bir yayından klip üretilmedi.",
  "Detection depends on chat and audio activity. A quiet stretch may not produce candidates. You can lower the detection sensitivity in Settings to catch more moments, at the cost of more weak candidates.": "Algılama sohbet ve ses hareketliliğine bağlıdır. Sessiz bir bölüm aday üretmeyebilir. Daha çok an yakalamak için Ayarlar'dan algılama eşiğini düşürebilirsin; karşılığında daha çok zayıf aday gelir.",
  "The application says my session could not be verified.": "Uygulama oturumumun doğrulanamadığını söylüyor.",
  "That means it could not reach the sign-in service. Check your internet connection — the application keeps working for a grace period offline, then asks you to sign in again.": "Bu, giriş servisine ulaşamadığı anlamına gelir. İnternet bağlantını kontrol et — uygulama çevrimdışı bir süre çalışmaya devam eder, sonra tekrar giriş yapmanı ister.",
  "Clips from a Twitch source look like an advert.": "Twitch kaynağından gelen klipler reklam gibi görünüyor.",
  "Twitch serves adverts at the start of a new session. Jolnova already skips ahead and detects advert frames, but if you still see one, try setting the camera region again once the stream is running normally.": "Twitch yeni bir oturumun başında reklam gösterir. Jolnova zaten ileri sarar ve reklam karelerini algılar; yine de görüyorsan, yayın normal akışına girdikten sonra kamera bölgesini yeniden ayarlamayı dene.",
  "Where do I report a problem?": "Sorunu nereye bildiririm?",
  "Use the contact route in your account area. Include the version number shown in Settings.": "Hesap alanındaki iletişim yolunu kullan. Ayarlar'da görünen sürüm numarasını da ekle.",

  // ---- seviye bazli fiyatlandirma (2026-08) ----
  // eski blokta duran, fiyat DISI kayitlar (korunuyor)
  "It is a Windows application that watches the stream sources you add, records them when they go live, finds moments worth clipping, cuts them into vertical videos with burned-in subtitles, and puts them in a queue for you to approve. Titles are written when you approve a clip.": "Eklediğin yayın kaynaklarını izleyen, canlıya geçtiklerinde kaydeden, klip olmaya değer anları bulan, bunları gömülü altyazılı dikey videolara kesen ve onayın için bir kuyruğa koyan bir Windows uygulamasıdır. Başlıklar, sen klibi onayladığında yazılır.",
  "Add a source once. Jolnova watches it in the background, records the broadcast and prepares vertical clips with burned-in subtitles. New clips land in a review queue, and the AI writes the title when you approve one.": "Kaynağı bir kez ekle. Jolnova arka planda izler, yayını kaydeder ve gömülü altyazılı dikey klipler hazırlar. Yeni klipler inceleme kuyruğuna düşer; birini onayladığında başlığı AI yazar.",
  "Titles written on approval": "Onayda yazılan başlıklar",
  "Approve a clip and the AI writes its title from what actually happens in it — not a filename.": "Bir klibi onayla, AI başlığını klipte gerçekten olan şeyden yazsın — dosya adından değil.",
  "Speech is transcribed and burned into the video. When you approve a clip, a title is written from what actually happens in it — so you are not renaming files by hand.": "Konuşma yazıya dökülür ve videoya gömülür. Bir klibi onayladığında, başlığı klipte gerçekten olan şeyden yazılır — böylece dosyaları elle yeniden adlandırmazsın.",
  "Speech is transcribed and rendered into the video in a single encode, so there is no second-generation quality loss. When you approve a clip, its title is written from the transcript and the moment context.": "Konuşma yazıya dökülür ve tek kodlamada videoya işlenir, böylece ikinci nesil kalite kaybı olmaz. Bir klibi onayladığında, başlığı transkriptten ve anın bağlamından yazılır.",
  "See plans and pricing": "Paketleri ve fiyatları gör",

  // ==== platform kapsami + kademe bazli fiyatlandirma (2026-08) ====
  // Starter / Creator / Pro, her biri Single Platform ve All Platforms olarak.
  // Fiyatlar pricing.html icindeki RJ_PLANS nesnesinden gelir; burada fiyat YOK.
  "/month": "/ay",
  "One platform, or all four.": "Tek platform ya da dördü birden.",
  "Choose how much reach you need, then choose how much of the editor you need. Your own video files are included either way.": "Önce ne kadar erişim istediğini, sonra editörün ne kadarına ihtiyacın olduğunu seç. Kendi video dosyaların her iki durumda da dahil.",
  "Single Platform": "Tek Platform",
  "All Platforms": "Tüm Platformlar",
  "Local video files are included with every plan.": "Yerel video dosyaları her pakete dahildir.",
  "One platform": "Tek platform",
  "All four platforms": "Dört platformun tamamı",
  "Twitch, Kick, YouTube or TikTok — you pick which one": "Twitch, Kick, YouTube ya da TikTok — hangisi olduğunu sen seçersin",
  "Twitch, Kick, YouTube and TikTok together": "Twitch, Kick, YouTube ve TikTok birlikte",
  "Up to": "En fazla",
  "creators tracked": "yayıncı takibi",
  "My Files — your own video files": "Dosyalarım — kendi video dosyaların",
  "My Files — your own videos": "Dosyalarım — kendi videoların",
  "AI clip generation": "AI klip üretimi",
  "Watermark on or off": "Filigran açık ya da kapalı",
  "720p maximum export": "En fazla 720p dışa aktarım",
  "4K maximum export": "En fazla 4K dışa aktarım",
  "1080p maximum export": "En fazla 1080p dışa aktarım",
  "4K export when the source supports it": "Kaynak destekliyorsa 4K dışa aktarım",
  "Only when the source is 4K — Twitch and Kick broadcast at 1080p.": "Yalnızca kaynak 4K olduğunda — Twitch ve Kick en fazla 1080p yayınlar.",
  "Subtitles": "Altyazı",
  "Subtitle editing": "Altyazı düzenleme",
  "±7 sec Clip Context": "±7 sn Klip Bağlamı",
          // ucretsiz seviye seridi
  "FREE": "ÜCRETSİZ",
  "Try it before you pay": "Ödemeden önce dene",
  "2 creators": "2 yayıncı",
  "720p export": "720p dışa aktarım",
  "↓ Start free": "↓ Ücretsiz başla",
  "Export resolution is a ceiling, not a promise. Twitch and Kick broadcast at 1080p at most, so a clip taken from a live stream comes out at 1080p even on Pro. 4K is reachable when the source itself is 4K — a YouTube video or one of your own recordings.": "Dışa aktarma çözünürlüğü bir tavandır, vaat değil. Twitch ve Kick en fazla 1080p yayınlar; dolayısıyla canlı yayından alınan bir klip Pro'da bile 1080p çıkar. 4K, ancak kaynağın kendisi 4K olduğunda mümkündür — bir YouTube videosu ya da kendi kayıtlarından biri.",
  // karsilastirma tablosu
  "COMPARE": "Karşılaştır",
  "What each plan actually gives you.": "Her paket sana gerçekte ne veriyor?",
  "The platform switch above changes the creator limits in this table too.": "Yukarıdaki platform anahtarı bu tablodaki yayıncı limitlerini de değiştirir.",
  "Feature": "Özellik",
  "Maximum export": "En yüksek dışa aktarım",
  "Creators tracked": "Takip edilen yayıncı",
  "* When the source is 4K. Live Twitch and Kick broadcasts are 1080p at most.": "* Kaynak 4K olduğunda. Canlı Twitch ve Kick yayınları en fazla 1080p'dir.",
  // platform kapsami nasil calisir
  "HOW PLATFORM COVERAGE WORKS": "Platform kapsamı nasıl çalışır",
  "Your plan decides the reach. You pick the names.": "Paketin erişimi belirler. İsimleri sen seçersin.",
  "Single Platform means one of Twitch, Kick, YouTube and TikTok — chosen by you inside the application. All Platforms means all four at once.": "Tek Platform, Twitch, Kick, YouTube ve TikTok'tan birini seçmek demektir — hangisi olduğunu uygulamanın içinde sen belirlersin. Tüm Platformlar ise dördünü birden demektir.",
  "Pick it in the app": "Uygulamadan seç",
  "On a Single Platform plan you open Settings and choose Twitch, Kick, YouTube or TikTok. A source from a platform you did not select cannot be added.": "Tek Platform paketinde Ayarlar'ı açar ve Twitch, Kick, YouTube ya da TikTok'u seçersin. Seçmediğin bir platformdan kaynak eklenemez.",
  "Change once a month": "Ayda bir değiştir",
  "If a creator you follow moves platform, swap your selection. The change takes effect immediately and the next change becomes available a month later.": "Takip ettiğin bir yayıncı platform değiştirirse seçimini değiştir. Değişiklik anında geçerli olur, bir sonraki hakkın bir ay sonra açılır.",
  "All Platforms pools the limit": "Tüm Platformlar limiti havuzda toplar",
  "On All Platforms the creator limit is a single total across all four, so you can spend it however you like — twenty on one platform or five on each.": "Tüm Platformlar'da yayıncı limiti dördü için tek bir toplamdır; dilediğin gibi dağıtabilirsin — yirmisi tek platformda ya da her birine beşer.",
  "My Files is included with every plan.": "Dosyalarım her pakete dahildir.",
  // limitler ve tespit
  "LIMITS AND DETECTION": "Limitler ve tespit",
  "The numbers, and how a clip gets picked.": "Sayılar ve bir klibin nasıl seçildiği.",
  "Two things are worth knowing before you choose: how many creators a plan tracks, and what actually decides that a moment becomes a clip.": "Seçim yapmadan önce bilmeye değer iki şey var: bir paketin kaç yayıncı takip ettiği ve bir anın klibe dönüşmesine gerçekte neyin karar verdiği.",
  "Creators tracked per plan": "Pakete göre takip edilen yayıncı",
  "Single Platform — 4 on Starter, 8 on Creator, 16 on Pro": "Tek Platform — Starter'da 4, Creator'da 8, Pro'da 16",
  "All Platforms — 20 on Starter, 40 on Creator, 80 on Pro, counted as one total": "Tüm Platformlar — Starter'da 20, Creator'da 40, Pro'da 80; tek toplam olarak sayılır",
  "All of them can be recording at the same time": "Hepsi aynı anda kayıtta olabilir",
  "The practical ceiling is your own disk space and CPU": "Pratik tavan kendi disk alanın ve işlemcindir",
  "Videos you process from My Files are not creators and are not counted": "Dosyalarım'dan işlediğin videolar yayıncı değildir ve sayılmaz",
  "How a moment is found": "Bir an nasıl bulunur",
  "Jolnova watches three signals in the recording and cuts where they line up:": "Jolnova kayıtta üç sinyali izler ve bunlar aynı yere denk geldiğinde keser:",
  "Chat density — how fast messages arrive compared with the calm baseline": "Chat yoğunluğu — mesajların sakin seviyeye göre ne kadar hızlandığı",
  "Audio spikes — laughter, shouting, a sudden jump in loudness": "Ses patlamaları — kahkaha, bağırma, ani ses yükselmesi",
  "Speech content — what is actually being said, from the transcript": "Konuşma içeriği — transkriptten, gerçekte ne söylendiği",
  "Detection sensitivity is a setting you control. Every clip still lands in the review queue and you decide what leaves it.": "Tespit hassasiyeti senin kontrolündeki bir ayardır. Her klip yine inceleme kuyruğuna düşer, oradan neyin çıkacağına sen karar verirsin.",
  // fiyat sayfasi SSS
  "Do my own video files count as a platform?": "Kendi video dosyalarım platform sayılır mı?",
  "Can I change plan later?": "Sonradan paket değiştirebilir miyim?",
  "Yes. Plan changes will be available from your account area once billing is connected.": "Evet. Faturalandırma bağlandığında paket değişikliği hesap alanından yapılabilecek.",
  "How do the plans differ from each other?": "Paketler birbirinden nasıl farklı?",
  "Which platforms can I choose from?": "Hangi platformlar arasından seçebilirim?",
  "What happens if I add a source outside my plan?": "Paketimin dışında bir kaynak eklersem ne olur?",
  "What is the difference between Single Platform and All Platforms?": "Tek Platform ile Tüm Platformlar arasındaki fark ne?",
  "Single Platform lets you use one of Twitch, Kick, YouTube and TikTok, chosen by you in the application. All Platforms lets you use all four at once and raises the creator limit accordingly. The features of the plan itself are unchanged — only reach and the creator limit differ.": "Tek Platform, Twitch, Kick, YouTube ve TikTok'tan uygulamada senin seçtiğin birini kullanmanı sağlar. Tüm Platformlar dördünü birden açar ve yayıncı limitini buna göre yükseltir. Paketin özellikleri değişmez — yalnızca erişim ve yayıncı limiti farklıdır.",
  "What is the difference between Starter, Creator and Pro?": "Starter, Creator ve Pro arasındaki fark ne?",
  "How many creators can I track?": "Kaç yayıncı takip edebilirim?",
  "Can I really export in 4K?": "Gerçekten 4K dışa aktarabilir miyim?",
  "Only when the source is already 4K — a YouTube video or a recording of your own. Twitch and Kick broadcast at 1080p at most, so a clip cut from a live stream comes out at 1080p whatever your plan says. The plan sets a ceiling; it cannot add resolution that was never in the video.": "Yalnızca kaynak zaten 4K ise — bir YouTube videosu ya da kendi kaydın. Twitch ve Kick en fazla 1080p yayınlar; dolayısıyla canlı yayından kesilen bir klip, paketin ne derse desin 1080p çıkar. Paket bir tavan belirler; videoda hiç olmayan çözünürlüğü ekleyemez.",
  "Chat density, audio spikes and the speech content of the recording. Where those signals line up, Jolnova cuts a candidate and puts it in the review queue. You approve or reject every one of them.": "Chat yoğunluğu, ses patlamaları ve kaydın konuşma içeriği. Bu sinyaller aynı yere denk geldiğinde Jolnova bir aday keser ve inceleme kuyruğuna koyar. Her birini sen onaylar ya da reddedersin.",
  "Can I turn the watermark off?": "Filigranı kapatabilir miyim?",
  "Yes, on every paid plan. It is a switch in Settings rather than a paid upgrade.": "Evet, her ücretli pakette. Ücretli bir yükseltme değil, Ayarlar'daki bir anahtardır.",
  "Yes. Clip detection, transcription and title generation are part of the product — there is no separate API key to buy or configure.": "Evet. Klip tespiti, transkripsiyon ve başlık üretimi ürünün parçasıdır — ayrıca satın alıp yapılandıracağın bir API anahtarı yok.",
  // ---- ana sayfa / ozellikler / nasil calisir ----
  "Plans start at $2.99 a month for one platform, or $6.99 for all four. Your own video files are included on every plan and never count as a platform.": "Paketler tek platform için ayda 2,99 dolardan, dördü birden için 6,99 dolardan başlar. Kendi video dosyaların her pakete dahildir ve asla platform sayılmaz.",
  "Sort by newest, oldest or duration": "En yeni, en eski ya da süreye göre sırala",
  "Watermark on or off — your choice": "Filigran açık ya da kapalı — seçim senin",
  "Export resolution follows your plan and your source: 720p on Starter, 1080p on Creator, and 4K on Pro when the source is 4K. Twitch and Kick broadcast at 1080p at most.": "Dışa aktarma çözünürlüğü paketini ve kaynağını izler: Starter'da 720p, Creator'da 1080p, kaynak 4K ise Pro'da 4K. Twitch ve Kick en fazla 1080p yayınlar.",
  "Jolnova reads three signals from the recording — how dense the chat gets, where the audio jumps, and what is actually being said — and cuts a candidate where they line up.": "Jolnova kayıttan üç sinyal okur — chat'in ne kadar yoğunlaştığı, sesin nerede sıçradığı ve gerçekte ne söylendiği — ve bunlar aynı yere denk geldiğinde bir aday keser.",
  "Chat density against the calm baseline": "Sakin seviyeye karşı chat yoğunluğu",
  "Audio spikes: laughter, shouting, sudden loudness": "Ses patlamaları: kahkaha, bağırma, ani yükselme",
  "Speech content from the transcript": "Transkriptten konuşma içeriği",
  "Detection sensitivity is a setting you control. Every candidate still goes to the review queue, and you decide what leaves it.": "Tespit hassasiyeti senin kontrolündeki bir ayardır. Her aday yine inceleme kuyruğuna gider, oradan neyin çıkacağına sen karar verirsin.",
  "You download the finished clip and post it yourself. Jolnova does not publish to any platform on your behalf.": "Biten klibi sen indirir ve sen paylaşırsın. Jolnova senin adına hiçbir platforma paylaşım yapmaz.",
  // ---- SSS sayfasi (faq.html) ----
  "Twitch, Kick, YouTube and TikTok. A Single Platform plan covers one of them, chosen by you in the application; an All Platforms plan covers all four. My Files — videos already on your computer — is included with every plan and is never counted as a platform.": "Twitch, Kick, YouTube ve TikTok. Tek Platform paketi bunlardan birini kapsar — hangisi olduğunu uygulamada sen seçersin; Tüm Platformlar paketi dördünü birden kapsar. Dosyalarım — bilgisayarında zaten duran videolar — her pakete dahildir ve asla platform sayılmaz.",
  "Three signals in the recording: how dense the chat gets compared with its calm baseline, where the audio spikes, and what is being said in the transcript. Where those line up, a candidate is cut and sent to the review queue. You approve or reject every one of them, and detection sensitivity is a setting you control.": "Kayıttaki üç sinyal: chat'in sakin seviyesine göre ne kadar yoğunlaştığı, sesin nerede patladığı ve transkriptte ne söylendiği. Bunlar aynı yere denk geldiğinde bir aday kesilir ve inceleme kuyruğuna gönderilir. Her birini sen onaylar ya da reddedersin; tespit hassasiyeti de senin kontrolündedir.",
  "Twitch, Kick, YouTube and TikTok. On a Single Platform plan you pick one of them inside the application, so the same plan can be Twitch for one person and TikTok for another. An All Platforms plan gives you all four at once.": "Twitch, Kick, YouTube ve TikTok. Tek Platform paketinde bunlardan birini uygulamanın içinde seçersin; yani aynı paket birinde Twitch, diğerinde TikTok olabilir. Tüm Platformlar paketi dördünü birden verir.",
  "How often can I change my platform?": "Platformumu ne sıklıkta değiştirebilirim?",
  "Once a month, on a Single Platform plan. Open Settings, change the selection and it applies immediately; the next change becomes available a month later.": "Tek Platform paketinde ayda bir. Ayarlar'ı aç, seçimi değiştir; anında geçerli olur. Bir sonraki hakkın bir ay sonra açılır.",
  "The application refuses it and tells you which platform your plan currently covers, so you can either change your selection or move to an All Platforms plan. Sources you already added are not removed.": "Uygulama bunu reddeder ve paketinin şu anda hangi platformu kapsadığını söyler; böylece ya seçimini değiştirirsin ya da Tüm Platformlar paketine geçersin. Daha önce eklediğin kaynaklar silinmez.",
  // ---- kullanim sartlari (terms.html) — yeni model ----
  "Jolnova is a Windows application that automatically produces vertical short-form videos from live streams. Recording, cutting, vertical formatting and subtitles run on your computer. Your subscription covers the AI steps and determines which source platforms you may use, how many creators you may track, the maximum export resolution, and how many YouTube links you may submit each month. Jolnova does not publish anything to any platform on your behalf — you download the finished clip and post it yourself.": "Jolnova, canlı yayınlardan otomatik olarak dikey kısa video üreten bir Windows uygulamasıdır. Kayıt, kesme, dikey formatlama ve altyazı bilgisayarında çalışır. Aboneliğin AI adımlarını kapsar ve hangi kaynak platformları kullanabileceğini, kaç yayıncı takip edebileceğini, en yüksek dışa aktarma çözünürlüğünü ve her ay kaç YouTube linki gönderebileceğini belirler. Jolnova senin adına hiçbir platforma bir şey paylaşmaz — biten klibi sen indirir ve sen paylaşırsın.",
  "Each plan — Starter, Creator and Pro — comes in a Single Platform and an All Platforms version. Single Platform covers one of Twitch, Kick, YouTube and TikTok, chosen by you inside the application and changeable once a month; All Platforms covers all four at once. Video files processed from your own computer are included with every plan and are never counted as a platform.": "Her paket — Starter, Creator ve Pro — Tek Platform ve Tüm Platformlar sürümüyle gelir. Tek Platform, Twitch, Kick, YouTube ve TikTok'tan birini kapsar; hangisi olduğunu uygulamanın içinde sen seçersin ve ayda bir değiştirebilirsin. Tüm Platformlar dördünü birden kapsar. Kendi bilgisayarından işlenen video dosyaları her pakete dahildir ve asla platform sayılmaz.",
  "Each plan sets a limit on how many creators you may track. Single Platform: 4 on Starter, 8 on Creator, 16 on Pro. All Platforms: 20, 40 and 80 respectively, counted as one pooled total across the four platforms.": "Her paket kaç yayıncı takip edebileceğine bir sınır koyar. Tek Platform: Starter'da 4, Creator'da 8, Pro'da 16. Tüm Platformlar: sırasıyla 20, 40 ve 80; dört platform için tek bir havuz toplamı olarak sayılır.",
  "Each plan sets a maximum export resolution — 720p on Starter, 1080p on Creator, 4K on Pro. This is a ceiling and not a guarantee: the output cannot exceed the resolution of the source, and live Twitch and Kick broadcasts are 1080p at most.": "Her paket bir en yüksek dışa aktarma çözünürlüğü belirler — Starter'da 720p, Creator'da 1080p, Pro'da 4K. Bu bir tavandır, garanti değildir: çıktı kaynağın çözünürlüğünü aşamaz ve canlı Twitch ile Kick yayınları en fazla 1080p'dir.",
  "Each plan sets a monthly allowance of YouTube links you may submit for processing: 4 on Starter, 8 on Creator, 12 on Pro.": "Her paket, işlenmek üzere gönderebileceğin YouTube linkleri için aylık bir kota belirler: Starter'da 4, Creator'da 8, Pro'da 12.",
  "The service is provided \"as is\". We don't guarantee uninterrupted operation or that every clip will meet your expectations. Clip detection can make mistakes — the final call is always yours.": "Hizmet \"olduğu gibi\" sunulur. Kesintisiz çalışacağını ya da her klibin beklentini karşılayacağını garanti etmiyoruz. Klip tespiti hata yapabilir — son karar her zaman senindir.",
  // ---- gizlilik politikasi (privacy.html) + sartlar eki — TR ----
  "Twitch, Kick, YouTube and TikTok are independent services. Their rules and API limits can change, and we aren't responsible for interruptions caused by them.": "Twitch, Kick, YouTube ve TikTok bağımsız hizmetlerdir. Kuralları ve API sınırları değişebilir; bunlardan kaynaklanan kesintilerden sorumlu değiliz.",
  "Jolnova (\"the app\", \"we\") is a": "Jolnova (\"uygulama\", \"biz\") bir",
  "Windows desktop application": "Windows masaüstü uygulamasıdır",
  "that automatically turns live streams into short vertical videos. This policy explains what data we process and why.": "— canlı yayınları otomatik olarak kısa dikey videolara dönüştürür. Bu politika hangi verileri neden işlediğimizi açıklar.",
  "1. The app runs on your computer": "1. Uygulama senin bilgisayarında çalışır",
  "Recording, clipping, transcription and image processing all happen": "Kayıt, klip kesme, transkripsiyon ve görüntü işlemenin tamamı",
  "on your own computer": "kendi bilgisayarında",
  ". Recordings and clips are stored on your local disk — they are not uploaded to our servers.": " gerçekleşir. Kayıtlar ve klipler yerel diskinde saklanır — sunucularımıza yüklenmez.",
  "2. Data we process": "2. İşlediğimiz veriler",
  "Account details:": "Hesap bilgileri:",
  "your email address and, if you sign in with Google, your name and profile picture. Used for authentication and subscription management. Our authentication provider is Supabase.": "e-posta adresin ve Google ile giriş yaptıysan adın ve profil fotoğrafın. Kimlik doğrulama ve abonelik yönetimi için kullanılır. Kimlik doğrulama sağlayıcımız Supabase'dir.",
  "Subscription details:": "Abonelik bilgileri:",
  "plan type and status. We never store payment card details — those are handled by the payment provider.": "paket türü ve durumu. Ödeme kartı bilgilerini asla saklamayız — bunlar ödeme sağlayıcısı tarafından işlenir.",
  "Stream content:": "Yayın içeriği:",
  "the publicly available broadcast data of the streamers you follow (video, audio, chat messages) is processed temporarily to create clips and stored locally.": "takip ettiğin yayıncıların herkese açık yayın verileri (video, ses, chat mesajları) klip üretmek için geçici olarak işlenir ve yerelde saklanır.",
  "AI processing:": "AI işleme:",
  "to write a clip's title and description, the": "bir klibin başlığını ve açıklamasını yazmak için",
  "transcript and a chat summary": "transkript ve bir chat özeti",
  "are sent to the Anthropic (Claude) API. This data is not used to train models.": "Anthropic (Claude) API'sine gönderilir. Bu veri model eğitiminde kullanılmaz.",
  "Usage statistics:": "Kullanım istatistikleri:",
  "a small numeric summary of your own activity, grouped by day and by platform (kick, twitch, youtube, tiktok, file or other), with four counters: how many clips were created, approved, rejected and downloaded. We use it to understand how the product is used and to check that subscription limits are working correctly. The only identifier attached is your account UUID, which is read from your sign-in token and is not carried in the data itself — your email address is not sent, and neither is the device identifier described above.": "kendi etkinliğinin küçük bir sayısal özeti; güne ve platforma göre gruplanır (kick, twitch, youtube, tiktok, file ya da other) ve dört sayaç içerir: kaç klip üretildi, onaylandı, reddedildi ve indirildi. Bunu, ürünün nasıl kullanıldığını anlamak ve abonelik limitlerinin doğru işlediğini doğrulamak için kullanırız. Eklenen tek tanımlayıcı hesap UUID'ndir; giriş jetonundan okunur ve verinin içinde taşınmaz — e-posta adresin gönderilmez, yukarıda anlatılan cihaz tanımlayıcı da gönderilmez.",
  "Usage statistics carry no clip content.": "Kullanım istatistikleri klip içeriği taşımaz.",
  "Video files, preview images, clip titles, subtitle text and the names of the channels you follow are not sent to our servers. Only the numeric usage summaries above are sent.": "Video dosyaları, önizleme görselleri, klip başlıkları, altyazı metinleri ve takip ettiğin kanalların adları sunucularımıza gönderilmez. Yalnızca yukarıdaki sayısal kullanım özetleri gönderilir.",
  "Device identifier:": "Cihaz tanımlayıcı:",
  "so that one subscription cannot be run on unlimited machines, the application derives an identifier from your computer and sends it when you sign in. On our server it is kept": "bir aboneliğin sınırsız sayıda makinede çalıştırılamaması için, uygulama bilgisayarından bir tanımlayıcı türetir ve giriş yaparken gönderir. Sunucumuzda",
  "only as an HMAC hash": "yalnızca HMAC ile hash'lenmiş hâlde",
  "— the raw identifier is never stored, and the hash cannot be turned back into information about your hardware. It is used solely to count how many machines an account is active on.": "saklanır — ham tanımlayıcı hiçbir zaman saklanmaz ve hash geri çevrilip donanımın hakkında bilgiye dönüştürülemez. Yalnızca bir hesabın kaç makinede etkin olduğunu saymak için kullanılır.",
  "3. Retention and deletion": "3. Saklama ve silme",
  "Stream recordings are deleted automatically after": "Yayın kayıtları, diskini doldurmasınlar diye varsayılan olarak",
  "6 hours": "6 saat",
  "by default so they don't fill your disk.": "sonra otomatik olarak silinir.",
  "You can delete any clip from the app at any time.": "Herhangi bir klibi uygulamadan dilediğin zaman silebilirsin.",
  "If you want your account and data removed entirely, just write to us.": "Hesabının ve verilerinin tamamen silinmesini istersen bize yazman yeterli.",
  "4. Third-party services": "4. Üçüncü taraf hizmetler",
  "Supabase (authentication and subscriptions) and Anthropic (AI text generation). Jolnova does not connect to your YouTube, Instagram or any other posting account, and does not publish anything on your behalf.": "Supabase (kimlik doğrulama ve abonelik) ve Anthropic (AI metin üretimi). Jolnova; YouTube, Instagram ya da başka bir paylaşım hesabına bağlanmaz ve senin adına hiçbir şey paylaşmaz.",
  "5. Children's privacy": "5. Çocukların gizliliği",
  "Jolnova is not intended for anyone under 18.": "Jolnova 18 yaşından küçükler için tasarlanmamıştır.",
  "6. Changes": "6. Değişiklikler",
  "This policy may be updated. We'll update the date on this page for any significant change.": "Bu politika güncellenebilir. Önemli değişikliklerde bu sayfadaki tarihi güncelleriz.",
  "7. Contact": "7. İletişim",

  // ---- daraltilan yerellik ifadeleri (2026-08-23) ----
  "No. Jolnova is a desktop application: tracking, recording and clip production all run on your own machine, so the computer needs to be on and awake for them to continue.": "Hayır. Jolnova bir masaüstü uygulamasıdır: takip, kayıt ve klip üretiminin tamamı kendi makinende çalışır; dolayısıyla bunların sürmesi için bilgisayarın açık ve uyanık olması gerekir.",
  "Video stays on your machine, and speech is transcribed there too. Only the writing step leaves your computer: a short text description — the transcript and a chat summary — is sent to an AI service so it can write the clip's title. Your video itself is never uploaded.": "Video senin makinende kalır, konuşma da orada yazıya dökülür. Bilgisayarından çıkan tek adım yazma adımıdır: klibin başlığını yazabilmesi için kısa bir metin açıklaması — transkript ve bir chat özeti — bir AI hizmetine gönderilir. Videonun kendisi hiçbir zaman yüklenmez.",
  "Decide how eagerly Jolnova cuts a moment, where finished clips are saved and which language the app speaks. These settings live on your machine.": "Jolnova'nın bir anı ne kadar istekli keseceğine, biten kliplerin nereye kaydedileceğine ve uygulamanın hangi dili konuşacağına karar ver. Bu ayarlar senin makinende durur.",

  // ---- Pro es zamanli kayit / platform rozeti (2026-08-23) ----
  "1 simultaneous recording": "1 eş zamanlı kayıt",
  "2 simultaneous recordings": "2 eş zamanlı kayıt",
  "4 simultaneous recordings": "4 eş zamanlı kayıt",
  "Hide the platform badge": "Platform rozetini gizle",
  "Simultaneous recordings": "Eş zamanlı kayıt",
  "If I record 4 streams at once, will my disk fill up?": "Aynı anda 4 yayın kaydedersem diskim dolar mı?",
  "A live recording uses roughly 5.6 GB per stream per hour, so four at once is about 22 GB an hour. The default cleanup budget is 20 GB, which four simultaneous recordings reach in around 53 minutes.": "Canlı kayıt, yayın başına saatte yaklaşık 5,6 GB kullanır; dolayısıyla dördü birden saatte yaklaşık 22 GB eder. Varsayılan temizlik bütçesi 20 GB'dir ve 4 eş zamanlı kayıt bunu yaklaşık 53 dakikada doldurur.",
  "You can raise or lower that budget in Settings. When it is reached nothing is dropped — further recordings are queued until cleanup frees up space.": "Bu bütçeyi Ayarlar'dan artırabilir ya da azaltabilirsin. Bütçeye ulaşıldığında hiçbir şey düşmez — temizlik yer açana kadar sonraki kayıtlar kuyruğa alınır.",

  // ---- kullanim sartlari (terms.html) ----
  "Last updated: 30 July 2026": "Son güncelleme: 30 Temmuz 2026",
  "By using Jolnova you agree to these terms. If you don't agree, please don't use the app.": "Jolnova'yı kullanarak bu şartları kabul etmiş olursun. Kabul etmiyorsan lütfen uygulamayı kullanma.",
  "1. The service": "1. Hizmet",
  "2. Your account": "2. Hesabın",
  "You are responsible for keeping your account credentials secure and shouldn't share your account. You must be 18 or older to use the service.": "Hesap bilgilerini güvende tutmaktan sen sorumlusun ve hesabını paylaşmamalısın. Hizmeti kullanmak için 18 yaşından büyük olmalısın.",
  "3. Content rights and responsibility": "3. İçerik hakları ve sorumluluk",
  "You are responsible for the rights to the clips you produce.": "Ürettiğin kliplerin haklarından sen sorumlusun.",
  "When you clip and share someone else's broadcast, you must follow that streamer's and that platform's rules.": "Başkasının yayınından klip alıp paylaştığında o yayıncının ve o platformun kurallarına uymak zorundasın.",
  "Any legal liability arising from what you publish is yours. Jolnova is a tool — the selection and the decision to post happen with your approval.": "Yayınladığın içerikten doğan her türlü hukuki sorumluluk sana aittir. Jolnova bir araçtır — seçim ve paylaşma kararı senin onayınla gerçekleşir.",
  "You may not use the app to create illegal, hateful, harassing or platform-violating content.": "Uygulamayı yasa dışı, nefret içeren, taciz edici ya da platform kurallarını ihlal eden içerik üretmek için kullanamazsın.",
  "4. Third-party platforms": "4. Üçüncü taraf platformlar",
        "5. Subscriptions and cancellation": "5. Abonelik ve iptal",
  "Your subscription runs for the period you choose and you can cancel any time — you keep access until the end of that period.": "Aboneliğin seçtiğin süre boyunca devam eder ve dilediğin zaman iptal edebilirsin — o sürenin sonuna kadar erişimin sürer.",
  "Prices may change; changes never affect your current period.": "Fiyatlar değişebilir; değişiklikler yürürlükteki dönemini asla etkilemez.",
  "6. Service availability": "6. Hizmetin sürekliliği",
  "7. Limitation of liability": "7. Sorumluluğun sınırı",
  "To the extent permitted by law, we are not liable for indirect damages. Our total liability will not exceed the subscription fees you paid in the last 3 months.": "Yasaların izin verdiği ölçüde dolaylı zararlardan sorumlu değiliz. Toplam sorumluluğumuz, son 3 ayda ödediğin abonelik ücretlerini aşmaz.",
  "8. Termination": "8. Fesih",
  "We may suspend or terminate access for accounts that violate these terms.": "Bu şartları ihlal eden hesapların erişimini askıya alabilir ya da sonlandırabiliriz.",
  "9. Changes": "9. Değişiklikler",
  "These terms may be updated; we'll update the date on this page for significant changes.": "Bu şartlar güncellenebilir; önemli değişikliklerde bu sayfadaki tarihi güncelleriz.",
  "10. Contact": "10. İletişim",
  "Questions about this page can be sent through your account area inside the application, or by e-mail to": "Bu sayfayla ilgili sorularınızı uygulama içindeki hesap alanından ya da e-posta ile şu adrese iletebilirsiniz:",

  // ---- ozellik turu 2026-08-23: altyazi duzenleme/stili, calisma programi,
  //      klip on ayarlari, platform rozeti, es zamanli kayit, 4 platform,
  //      3 gunluk ucretsiz deneme; AI puanlama/montaj/otomatik paylasim YOK ----
  "Kick, Twitch and TikTok live tracking": "Kick, Twitch ve TikTok canlı takip",
  "TikTok — live tracking": "TikTok — canlı takip",
  "My Files — MP4, MKV, MOV, WEBM": "Dosyalarım — MP4, MKV, MOV, WEBM",
  "Paste a Kick, Twitch or TikTok channel, a video link, or pick a file from your computer.": "Kick, Twitch ya da TikTok kanalı yapıştır, video linki ver veya bilgisayarından bir dosya seç.",
  "Kick, Twitch and TikTok channels": "Kick, Twitch ve TikTok kanalları",
  "Live sources are monitored in the background, within the days and hours you allow.": "Canlı kaynaklar, izin verdiğin gün ve saatler içinde arka planda izlenir.",
  "A run schedule keeps it idle the rest of the time": "Çalışma programı, kalan zamanda boşta bekletir",
  "Moments are found": "Anlar bulunur",
  "Chat density, audio spikes and speech content are read locally and a candidate is cut where they line up.": "Chat yoğunluğu, ses patlamaları ve konuşma içeriği yerelde okunur; bunlar aynı yere denk geldiğinde bir aday kesilir.",
  "No AI score, no quality grade": "AI puanı yok, kalite notu yok",
  "Clips arrive in a queue. Approve what you like, fix the subtitles and download it in HD.": "Klipler kuyruğa düşer. Beğendiğini onayla, altyazısını düzelt ve HD indir.",
  "Jolnova checks your Kick, Twitch and TikTok sources continuously. The moment a channel goes live, recording begins by itself — you do not have to be at the computer when it starts. Starter records one stream at a time, Creator two and Pro four.": "Jolnova, Kick, Twitch ve TikTok kaynaklarını sürekli kontrol eder. Kanal canlıya geçtiği an kayıt kendi başlar — o sırada bilgisayar başında olman gerekmez. Starter aynı anda bir yayın, Creator iki, Pro dört yayın kaydeder.",
  "Five layouts fill a 9:16 frame: Auto, Game, IRL, Camera corner and Full screen — set per streamer.": "9:16 kareyi dolduran beş yerleşim: Auto, Oyun, IRL, Köşede kamera ve Tam ekran — yayıncı bazında seçilir.",
  "Editable subtitles": "Düzenlenebilir altyazı",
  "Speech is transcribed and burned in. Misheard a word? Fix the line or delete it — on every plan.": "Konuşma yazıya dökülür ve videoya gömülür. Bir kelime yanlış mı anlaşıldı? Satırı düzelt ya da sil — her pakette.",
  "Run schedule": "Çalışma programı",
  "Pick the days and hours Jolnova may work. Outside them it stays idle instead of filling your disk.": "Jolnova'nın hangi gün ve saatlerde çalışacağını seç. Dışında diskini doldurmak yerine boşta bekler.",
  "Clip presets": "Klip ön ayarları",
  "Save layout, camera box and clip preferences as a named preset, then apply it to any streamer in one click.": "Yerleşimi, kamera kutusunu ve klip tercihlerini adlandırılmış bir ön ayar olarak kaydet, sonra tek tıkla istediğin yayıncıya uygula.",
  "Approved clips download at full quality to any folder you pick, with the watermark on or off.": "Onaylanan klipler tam kalitede, seçtiğin klasöre iner; filigran açık ya da kapalı, sen seçersin.",
  "SUBTITLES": "ALTYAZI",
  "Transcription is never perfect. So the text stays editable.": "Yazıya dökme hiçbir zaman kusursuz değildir. Bu yüzden metin düzenlenebilir kalır.",
  "Open a clip and every subtitle line is there with its timecode. Fix a misheard word, rewrite the sentence, or delete a line you do not want on screen. The clip is re-rendered once from a clean master, so editing twice does not stack quality loss.": "Bir klibi aç; her altyazı satırı zaman koduyla orada. Yanlış anlaşılmış bir kelimeyi düzelt, cümleyi yeniden yaz ya da ekranda istemediğin satırı sil. Klip temiz bir asıl kopyadan bir kez yeniden işlenir; iki kez düzenlemek kalite kaybını üst üste bindirmez.",
  "Edit or delete any subtitle line — on every plan": "Herhangi bir altyazı satırını düzenle ya da sil — her pakette",
  "Timings stay exactly as transcribed, only the words change": "Zamanlamalar yazıya döküldüğü gibi kalır, yalnızca kelimeler değişir",
  "Font, size, colour, outline, placement and a background box on Creator and Pro": "Creator ve Pro'da yazı tipi, boyut, renk, kontur, yerleşim ve arka plan kutusu",
  "Live preview on a real frame while you tune the style": "Stili ayarlarken gerçek bir kare üzerinde canlı önizleme",
  "RUN SCHEDULE": "ÇALIŞMA PROGRAMI",
  "It works when your streamers do — and rests when they do not.": "Yayıncıların çalışırken çalışır — çalışmadıklarında dinlenir.",
  "A live recording costs roughly 5.6 GB per stream per hour. Tell Jolnova which days and hours to track, and it stays idle the rest of the week instead of burning disk and bandwidth on an empty channel.": "Canlı kayıt, yayın başına saatte yaklaşık 5,6 GB tutar. Jolnova'ya hangi gün ve saatlerde takip edeceğini söyle; haftanın kalanında boş bir kanal için disk ve bant genişliği harcamak yerine boşta bekler.",
  "Weekly time ranges, several days at once": "Haftalık saat aralıkları, aynı anda birden fazla gün",
  "Ranges that pass midnight — 20:00 to 02:00 works": "Gece yarısını aşan aralıklar — 20:00 ile 02:00 çalışır",
  "One-off exceptions for a single date": "Tek bir güne özel istisnalar",
  "Your computer's local clock, so daylight saving takes care of itself": "Bilgisayarının yerel saati kullanılır; yaz saati kendiliğinden doğru çalışır",
  "Filter by Kick, Twitch, TikTok, YouTube or your own files": "Kick, Twitch, TikTok, YouTube ya da kendi dosyalarına göre filtrele",
  "Fix the subtitle text line by line": "Altyazı metnini satır satır düzelt",
  "CLIP BRANDING": "KLİP MARKALAMA",
  "Clip branding": "Klip markalama",
  "Your clip, your name on it.": "Klip senin, üzerindeki isim de senin.",
  "Two things can end up written on a finished clip, and both are switches in Settings rather than paid upgrades.": "Biten bir klibin üzerine iki şey yazılabilir ve ikisi de ücretli yükseltme değil, Ayarlar'daki birer anahtardır.",
  "The Jolnova watermark — off on every paid plan": "Jolnova filigranı — her ücretli pakette kapatılabilir",
  "The platform badge and channel line — hide it on Creator and Pro": "Platform rozeti ve kanal satırı — Creator ve Pro'da gizlenebilir",
  "Both preferences can travel inside a clip preset": "İki tercih de bir klip ön ayarının içinde taşınabilir",
  "The badge is drawn by Jolnova, so removing it leaves the picture untouched": "Rozeti Jolnova çizer; kaldırmak görüntüye dokunmaz",
  "Four platforms, video links and your own files — one pipeline.": "Dört platform, video linkleri ve kendi dosyaların — tek hat.",
  "Tracked live as well. TikTok streams are already vertical, so clips keep the original frame.": "Bu da canlı takip edilir. TikTok yayınları zaten dikeydir; klipler orijinal kadrajı korur.",
  "YouTube & VOD": "YouTube ve VOD",
  "No live tracking here — paste a video, VOD or past stream link and Jolnova processes it on demand.": "Burada canlı takip yok — video, VOD ya da eski yayın linki yapıştır, Jolnova istendiğinde işler.",
  "Pick a video already on your PC — a podcast, an interview, an old recording. The file is read in place, never moved or deleted, and never counts as a platform.": "Bilgisayarındaki bir videoyu seç — podcast, röportaj, eski bir kayıt. Dosya bulunduğu yerde okunur; taşınmaz, silinmez ve asla platform sayılmaz.",
  "Simultaneous recording": "Eş zamanlı kayıt",
  "Subtitle text editing": "Altyazı metin düzenleme",
  "Subtitle styling": "Altyazı stili",
  "Availability also depends on your plan — subtitles, subtitle styling and hiding the platform badge are Creator and Pro features.": "Kullanılabilirlik pakete de bağlıdır — altyazı, altyazı stili ve platform rozetini gizleme Creator ve Pro özellikleridir.",
  "FREE TRIAL": "ÜCRETSİZ DENEME",
  "Free for 3 days.": "3 gün ücretsiz.",
  "What's included →": "Neler dahil →",
  "Nothing is deleted when the trial ends: the clips you already made stay where they are.": "Deneme bittiğinde hiçbir şey silinmez: ürettiğin klipler yerinde kalır.",
  "Nothing is deleted when the trial ends: the clips you already produced stay in your library, ready to export.": "Deneme bittiğinde hiçbir şey silinmez: ürettiğin klipler kütüphanende, dışa aktarılmaya hazır durur.",
  "3 days": "3 gün",
  "Up to 50 clips in total": "Toplam en fazla 50 klip",
  "2 YouTube links in total": "Toplam 2 YouTube linki",
  "Jolnova watermark stays on": "Jolnova filigranı açık kalır",
  "Whichever runs out first ends the trial — the days or the clips. Nothing is deleted: the clips you already made stay where they are.": "Hangisi önce biterse denemeyi o bitirir — günler ya da klipler. Hiçbir şey silinmez: ürettiğin klipler yerinde kalır.",
  "Add your sources, keep streaming, and review the moments Jolnova prepared while you were busy.": "Kaynaklarını ekle, yayına devam et; sen meşgulken Jolnova'nın hazırladığı anları incele.",
  "From source tracking to review-ready vertical clips — here is what the application actually does today. Nothing on this page is planned, coming soon or in beta.": "Kaynak takibinden incelemeye hazır dikey kliplere — uygulamanın bugün gerçekten yaptıkları. Bu sayfada planlanan, yakında gelecek ya da beta olan hiçbir şey yok.",
  "MY FILES": "DOSYALARIM",
  "One page shows every source you track, with its live state, recording state and capture mode. Kick, Twitch and TikTok are tracked live; YouTube is processed from links.": "Tek sayfada takip ettiğin her kaynak; canlı durumu, kayıt durumu ve yakalama modu. Kick, Twitch ve TikTok canlı takip edilir; YouTube linkten işlenir.",
  "Record several streams at once — 1 on Starter, 2 on Creator, 4 on Pro": "Aynı anda birden fazla yayın kaydet — Starter'da 1, Creator'da 2, Pro'da 4",
  "A live recording uses roughly 5.6 GB per stream per hour, so the concurrency limit is about your disk, not about the licence.": "Canlı kayıt, yayın başına saatte yaklaşık 5,6 GB kullanır; yani eş zamanlılık sınırı lisansla değil diskinle ilgilidir.",
  "MOMENT DETECTION": "AN TESPİTİ",
  "Three signals decide what becomes a clip": "Neyin klip olacağına üç sinyal karar verir",
  "Detection runs on your own machine and costs nothing per clip. Jolnova reads three things from the recording and cuts a candidate where they line up.": "Tespit senin makinende çalışır ve klip başına hiçbir maliyeti yoktur. Jolnova kayıttan üç şey okur ve bunlar aynı yere denk geldiğinde bir aday keser.",
  "Detection sensitivity is a setting: Few, Balanced or Many": "Tespit hassasiyeti bir ayardır: Az, Normal ya da Çok",
  "There is no AI score and no quality grade on a clip. The AI writes one thing: the title of a clip you approved.": "Klipte AI puanı ya da kalite notu yoktur. AI tek bir şey yazar: onayladığın klibin başlığı.",
  "Filter by Kick, Twitch, TikTok, YouTube or local files": "Kick, Twitch, TikTok, YouTube ya da yerel dosyalara göre filtrele",
  "Decide the days and hours Jolnova is allowed to work": "Jolnova'nın hangi gün ve saatlerde çalışabileceğine karar ver",
  "Your streamers go live at certain hours. Outside them there is no reason for the application to burn disk and bandwidth. Set a weekly plan and Jolnova stays idle the rest of the time.": "Yayıncıların belli saatlerde yayında olur. Dışında uygulamanın disk ve bant genişliği harcaması için bir sebep yok. Haftalık bir plan kur; Jolnova kalan zamanda boşta bekler.",
  "Weekly time ranges, several days per range": "Haftalık saat aralıkları, aralık başına birden fazla gün",
  "One-off exceptions: stay idle all day, or run only between two hours": "Tek seferlik istisnalar: bütün gün boşta kal ya da yalnızca iki saat arasında çalış",
  "Times follow your computer's local clock, so daylight saving takes care of itself": "Saatler bilgisayarının yerel saatini izler; yaz saati kendiliğinden doğru çalışır",
  "Turn the schedule off and Jolnova tracks around the clock again": "Programı kapat, Jolnova yeniden 7/24 takip etsin",
  "It is a local timer. Jolnova follows the schedule while your computer is on and the app is running — nothing runs in the cloud.": "Bu yerel bir zamanlayıcıdır. Jolnova programı, bilgisayarın açıkken ve uygulama çalışırken uygular — bulutta hiçbir şey çalışmaz.",
  "TikTok video links": "TikTok video linkleri",
  "Included on every plan — your own files are never counted as a platform": "Her pakete dahil — kendi dosyaların asla platform sayılmaz",
  "CLIP LAYOUT": "KLİP YERLEŞİMİ",
  "Five ways to fill a 9:16 frame": "9:16 kareyi doldurmanın beş yolu",
  "A clip is framed for vertical, not cropped down to it. Pick the layout per streamer, or let Auto decide from the source.": "Klip dikeye kırpılmaz, dikey için kadrajlanır. Yerleşimi yayıncı bazında seç ya da kaynağa göre Auto karar versin.",
  "Auto — decide per stream": "Auto — her yayına göre karar ver",
  "Game — camera on top, gameplay below": "Oyun — üstte kamera, altta oynanış",
  "IRL — full frame on a blurred background": "IRL — bulanık zemin üzerinde tam kare",
  "Camera corner — large content with the camera in the corner": "Köşede kamera — büyük içerik, köşede kamera",
  "Full screen — use the source as it is, ideal for TikTok": "Tam ekran — kaynağı olduğu gibi kullan, TikTok için ideal",
  "Corner presets for the four usual positions": "Dört alışılmış konum için köşe hazır ayarları",
  "CLIP PRESETS": "KLİP ÖN AYARLARI",
  "Save a look once, apply it to any streamer": "Görünümü bir kez kaydet, istediğin yayıncıya uygula",
  "A preset is a named bundle of settings you already use: layout, camera box, clip limit per stream, subtitles, watermark, extra context and the platform badge. Apply it to a streamer in one click instead of repeating the same setup by hand.": "Ön ayar, zaten kullandığın ayarların adlandırılmış bir demetidir: yerleşim, kamera kutusu, yayın başına klip sınırı, altyazı, filigran, ek bağlam ve platform rozeti. Aynı kurulumu elle tekrarlamak yerine tek tıkla bir yayıncıya uygula.",
  "Layout and camera box per streamer": "Yayıncı bazında yerleşim ve kamera kutusu",
  "Maximum clips per stream": "Yayın başına en fazla klip",
  "Rename, duplicate and delete your own presets": "Kendi ön ayarlarını yeniden adlandır, çoğalt ve sil",
  "Saving presets is available on every plan, including the free trial": "Ön ayar kaydetmek ücretsiz deneme dahil her pakette var",
  "A preset never bypasses a plan limit. If it carries a setting your plan does not include, the preference is stored but stays inactive.": "Ön ayar hiçbir zaman paket sınırını aşmaz. Paketinde olmayan bir ayarı taşıyorsa tercih saklanır ama etkin olmaz.",
  "Readable with the sound off — and fixable when the transcript is wrong.": "Ses kapalıyken de okunur — döküm yanlışsa düzeltilebilir.",
  "Speech is transcribed on your machine and rendered into the picture in a single encode, so there is no second-generation quality loss. Transcription is never perfect, so the text stays editable afterwards.": "Konuşma senin makinende yazıya dökülür ve tek kodlamada görüntüye işlenir; ikinci nesil kalite kaybı olmaz. Yazıya dökme hiçbir zaman kusursuz değildir, bu yüzden metin sonrasında düzenlenebilir kalır.",
  "Subtitle text": "Altyazı metni",
  "Fix the words": "Kelimeleri düzelt",
  "EVERY PLAN": "HER PAKET",
  "Correct a misheard word, rewrite a whole line, or delete a line you do not want on screen. Timings stay exactly as transcribed — only the words change.": "Yanlış anlaşılmış bir kelimeyi düzelt, bütün bir satırı yeniden yaz ya da ekranda istemediğin satırı sil. Zamanlamalar yazıya döküldüğü gibi kalır — yalnızca kelimeler değişir.",
  "Edit any line in place": "Herhangi bir satırı yerinde düzenle",
  "Delete a line and it disappears from the video": "Bir satırı sil, videodan kaybolsun",
  "Re-rendered once from a clean master, so editing twice does not stack quality loss": "Temiz asıl kopyadan bir kez yeniden işlenir; iki kez düzenlemek kalite kaybını üst üste bindirmez",
  "Included on every plan — fixing your own text is not a paid upgrade": "Her pakete dahil — kendi metnini düzeltmek ücretli bir yükseltme değildir",
  "Subtitle style": "Altyazı stili",
  "Change the look": "Görünümü değiştir",
  "CREATOR & PRO": "CREATOR VE PRO",
  "Give the captions your own look: typeface, size, colour, outline weight and colour, where they sit in the frame and how far from the edge.": "Altyazılara kendi görünümünü ver: yazı tipi, boyut, renk, kontur kalınlığı ve rengi, karede nerede duracağı ve kenardan ne kadar uzak olacağı.",
  "Font, size and text colour": "Yazı tipi, boyut ve yazı rengi",
  "Outline weight and outline colour": "Kontur kalınlığı ve kontur rengi",
  "Nine placement positions, plus distance from the edge": "Dokuz yerleşim konumu ve kenardan uzaklık",
  "Solid background box with its own colour and opacity": "Kendi rengi ve saydamlığı olan dolu arka plan kutusu",
  "Live preview on a real frame — nothing is re-encoded while you tune it": "Gerçek bir kare üzerinde canlı önizleme — ayarlarken hiçbir şey yeniden kodlanmaz",
  "Starter produces clips without subtitles. Creator and Pro burn them in — and wherever there are subtitles, the text stays yours to correct.": "Starter altyazısız klip üretir. Creator ve Pro altyazıyı gömer — ve altyazı olan her yerde metni düzeltmek senin elindedir.",
  "TITLES AND METADATA": "BAŞLIK VE BİLGİLER",
  "The AI writes one thing: the title of a clip you approved": "AI tek bir şey yazar: onayladığın klibin başlığı",
  "When you approve a clip, its transcript and a short chat summary are sent off so a title, a description and hashtags can be written for it. Your video never leaves your computer.": "Bir klibi onayladığında, başlık, açıklama ve hashtag yazılabilmesi için dökümü ve kısa bir chat özeti gönderilir. Videon bilgisayarından hiç çıkmaz.",
  "Titles written on approval, from what actually happens in the clip": "Onayda yazılan başlıklar — klipte gerçekten olan şeyden",
  "Copy and paste them into the platform yourself": "Platforma kendin kopyala yapıştır",
  "No AI scoring, no quality grade — that call is yours at the queue": "AI puanlaması yok, kalite notu yok — o karar kuyrukta senin",
  "Jolnova does not publish to any platform on your behalf. You download the finished clip and post it yourself.": "Jolnova senin adına hiçbir platforma paylaşım yapmaz. Biten klibi sen indirir ve sen paylaşırsın.",
  "Decide what is written on your clip": "Klibinin üzerine ne yazılacağına karar ver",
  "Two things can appear on a finished clip, and both are switches rather than upgrades: the Jolnova watermark and the platform badge with the channel name.": "Biten bir klibin üzerinde iki şey görünebilir ve ikisi de yükseltme değil birer anahtardır: Jolnova filigranı ve kanal adını taşıyan platform rozeti.",
  "Watermark on or off on every paid plan": "Her ücretli pakette filigran açık ya da kapalı",
  "Hide the platform name and channel line — Creator and Pro": "Platform adını ve kanal satırını gizle — Creator ve Pro",
  "Both preferences can be stored inside a clip preset": "İki tercih de bir klip ön ayarının içinde saklanabilir",
  "During the free trial the Jolnova watermark stays on. Every paid plan can switch it off in Settings.": "Ücretsiz deneme boyunca Jolnova filigranı açık kalır. Her ücretli paket bunu Ayarlar'dan kapatabilir.",
  "TRIM AND CONTEXT": "KIRPMA VE BAĞLAM",
  "Watermark on or off — your choice on every paid plan": "Filigran açık ya da kapalı — her ücretli pakette seçim senin",
  "Cleanup budget for recordings, in GB": "Kayıtlar için GB cinsinden temizlik bütçesi",
  "WHAT JOLNOVA DOES NOT DO": "JOLNOVA'UN YAPMADIKLARI",
  "Just as useful to know.": "Bilmesi en az diğerleri kadar yararlı.",
  "Three things people expect from a clipping tool that this one deliberately does not have.": "Bir kliplemede beklenen ama bunda bilerek bulunmayan üç şey.",
  "No automatic publishing": "Otomatik paylaşım yok",
  "Jolnova produces the clip file. It never connects to a posting account and never uploads on your behalf — you download the clip and post it yourself.": "Jolnova klip dosyasını üretir. Hiçbir paylaşım hesabına bağlanmaz ve senin adına yükleme yapmaz — klibi sen indirir, sen paylaşırsın.",
  "No AI scoring": "AI puanlaması yok",
  "No clip carries a score or a quality grade. Detection is a signal-based cut and the decision at the review queue is yours.": "Hiçbir klip puan ya da kalite notu taşımaz. Tespit sinyale dayalı bir kesimdir; inceleme kuyruğundaki karar senindir.",
  "No montage or compilation": "Montaj ya da derleme yok",
  "Clips are produced one at a time. There is no feature that stitches several moments into a single longer video.": "Klipler tek tek üretilir. Birden fazla anı tek bir uzun videoda birleştiren bir özellik yoktur.",
  "The free trial runs for 3 days or 50 clips, whichever comes first, with the Jolnova watermark and 720p export.": "Ücretsiz deneme 3 gün ya da 50 klip — hangisi önce gelirse; Jolnova filigranı açık ve 720p dışa aktarımla.",
  "Schedule": "Program",
  "Set the hours it may work": "Çalışabileceği saatleri belirle",
  "Streamers go live at certain hours, so there is no point tracking an empty channel all week. Give Jolnova a weekly plan and it stays idle outside it — or leave the schedule off and it tracks around the clock.": "Yayıncılar belli saatlerde yayına çıkar; boş bir kanalı bütün hafta takip etmenin anlamı yok. Jolnova'ya haftalık bir plan ver, dışında boşta beklesin — ya da programı kapalı bırak, 7/24 takip etsin.",
  "Ranges that pass midnight, like 20:00 to 02:00": "Gece yarısını aşan aralıklar, örneğin 20:00 – 02:00",
  "A live recording is roughly 5.6 GB per stream per hour, so this is real disk saved": "Canlı kayıt yayın başına saatte yaklaşık 5,6 GB'dir; yani bu gerçekten kazanılan disk demektir",
  "Several streams at once — 1 on Starter, 2 on Creator, 4 on Pro": "Aynı anda birden fazla yayın — Starter'da 1, Creator'da 2, Pro'da 4",
  "Jolnova reads three signals from the recording — how dense the chat gets, where the audio jumps, and what is actually being said — and cuts a candidate where they line up. All three run on your own machine and cost nothing per clip.": "Jolnova kayıttan üç sinyal okur — chat'in ne kadar yoğunlaştığı, sesin nerede sıçradığı ve gerçekte ne söylendiği — ve bunlar aynı yere denk geldiğinde bir aday keser. Üçü de senin makinende çalışır ve klip başına hiçbir maliyeti yoktur.",
  "Sensitivity is a setting: Few, Balanced or Many": "Hassasiyet bir ayardır: Az, Normal ya da Çok",
  "No clip carries an AI score or a quality grade. Every candidate goes to the review queue and you decide what leaves it.": "Hiçbir klip AI puanı ya da kalite notu taşımaz. Her aday inceleme kuyruğuna gider ve oradan neyin çıkacağına sen karar verirsin.",
  "Each moment is cut and reframed to 9:16 using the layout you picked for that streamer — or the one saved in a clip preset.": "Her an kesilir ve o yayıncı için seçtiğin yerleşimle — ya da bir klip ön ayarında kayıtlı olanla — 9:16'ya yeniden kadrajlanır.",
  "Camera corner — large content, camera in the corner": "Köşede kamera — büyük içerik, köşede kamera",
  "Full screen — use the source as it is": "Tam ekran — kaynağı olduğu gibi kullan",
  "Caption it — and correct what was misheard": "Altyazıla — ve yanlış anlaşılanı düzelt",
  "Speech is transcribed and burned into the video in the same encode. Transcription is never perfect, so every line stays editable: fix the wording, or delete a line you do not want on screen.": "Konuşma yazıya dökülür ve aynı kodlamada videoya gömülür. Yazıya dökme hiçbir zaman kusursuz değildir; bu yüzden her satır düzenlenebilir kalır: ifadeyi düzelt ya da ekranda istemediğin satırı sil.",
  "Font, size, colour, outline, placement and background box on Creator and Pro": "Creator ve Pro'da yazı tipi, boyut, renk, kontur, yerleşim ve arka plan kutusu",
  "Saving re-renders the clip once from a clean master, so correcting the text twice does not stack quality loss.": "Kaydetmek klibi temiz bir asıl kopyadan bir kez yeniden işler; metni iki kez düzeltmek kalite kaybını üst üste bindirmez.",
  "When you approve a clip, a title is written from what actually happens in it — so you are not renaming files by hand. A description and hashtags come with it.": "Bir klibi onayladığında, başlığı klipte gerçekten olan şeyden yazılır — böylece dosyaları elle yeniden adlandırmazsın. Yanında açıklama ve hashtag de gelir.",
  "The transcript and a short chat summary are the only things that leave your computer. Your video is never uploaded.": "Bilgisayarından çıkan tek şey döküm ve kısa bir chat özetidir. Videon hiçbir zaman yüklenmez.",
  "Pull up to seven extra seconds back from the recording on Creator and Pro": "Creator ve Pro'da kayıttan yedi saniyeye kadar fazladan süre geri çek",
  "The four tools you actually use.": "Gerçekten kullandığın dört araç.",
  "Fix a misheard word or drop a line. Timings stay exactly as transcribed.": "Yanlış anlaşılmış bir kelimeyi düzelt ya da bir satırı çıkar. Zamanlamalar yazıya döküldüğü gibi kalır.",
  "Font, size, colour, outline, placement and an optional background box.": "Yazı tipi, boyut, renk, kontur, yerleşim ve isteğe bağlı arka plan kutusu.",
  "Paste a Kick, Twitch or TikTok channel to track it continuously, drop in a YouTube or VOD link for a one-off job, or pick a video that is already on your computer.": "Sürekli takip için Kick, Twitch ya da TikTok kanalı yapıştır, tek seferlik iş için YouTube veya VOD linki ver, ya da bilgisayarındaki bir videoyu seç.",
  "TikTok account — live tracking": "TikTok hesabı — canlı takip",
  "STEP 08": "ADIM 08",
  "STEP 09": "ADIM 09",
  "Choose how much reach you need, then choose how much of the editor you need. Clip presets, the run schedule and your own video files are included either way.": "Önce ne kadar erişim istediğini, sonra editörün ne kadarına ihtiyacın olduğunu seç. Klip ön ayarları, çalışma programı ve kendi video dosyaların her iki durumda da dahil.",
  "Automatic clip detection": "Otomatik klip tespiti",
  "Clip presets and run schedule": "Klip ön ayarları ve çalışma programı",
  "Simultaneous recordings: 1 on Starter, 2 on Creator, 4 on Pro": "Eş zamanlı kayıt: Starter'da 1, Creator'da 2, Pro'da 4",
  "Tracking a creator and recording one are different limits": "Bir yayıncıyı takip etmekle kaydetmek farklı limitlerdir",
  "Detection sensitivity is a setting you control: Few, Balanced or Many. Every clip still lands in the review queue and you decide what leaves it.": "Tespit hassasiyeti senin kontrolündeki bir ayardır: Az, Normal ya da Çok. Her klip yine inceleme kuyruğuna düşer ve oradan neyin çıkacağına sen karar verirsin.",
  "No clip carries an AI score or a quality grade. The AI writes one thing — the title of a clip you approved.": "Hiçbir klip AI puanı ya da kalite notu taşımaz. AI tek bir şey yazar — onayladığın klibin başlığını.",
  "2 creators · 720p export": "2 yayıncı · 720p dışa aktarım",
  "Whichever runs out first ends the trial — the three days or the fifty clips. Nothing is deleted when it does: the clips you already produced stay in your library, ready to export.": "Hangisi önce biterse denemeyi o bitirir — üç gün ya da elli klip. Bittiğinde hiçbir şey silinmez: ürettiğin klipler kütüphanende, dışa aktarılmaya hazır durur.",
  "* Correcting the wording of a subtitle is never a paid feature — wherever a clip has subtitles, its text is yours to fix. Starter produces clips without subtitles, so there is nothing to correct there.": "* Bir altyazının ifadesini düzeltmek asla ücretli bir özellik değildir — bir klipte altyazı varsa metnini düzeltmek senindir. Starter altyazısız klip ürettiği için orada düzeltilecek bir şey yoktur.",
  "✦ 4K only when the source is 4K. Live Twitch and Kick broadcasts are 1080p at most.": "✦ 4K yalnızca kaynak 4K olduğunda. Canlı Twitch ve Kick yayınları en fazla 1080p'dir.",
  "Starter produces clips without subtitles, records one stream at a time and exports up to 720p. Creator adds burned-in subtitles, subtitle styling, text editing, ±7 sec Clip Context and hiding the platform badge, records two streams at once and exports up to 1080p. Pro raises the export ceiling to 4K where the source allows it, records four streams at once, triples the monthly YouTube links against Starter and gives the highest creator limit.": "Starter altyazısız klip üretir, aynı anda bir yayın kaydeder ve en fazla 720p dışa aktarır. Creator gömülü altyazı, altyazı stili, yazı düzenleme, ±7 sn Klip Bağlamı ve platform rozetini gizlemeyi ekler; aynı anda iki yayın kaydeder ve en fazla 1080p dışa aktarır. Pro, kaynağın izin verdiği yerde tavanı 4K'ya çıkarır, aynı anda dört yayın kaydeder, aylık YouTube linkini Starter'ın üç katına getirir ve en yüksek yayıncı limitini verir.",
  "Clip presets, the run schedule, automatic clip detection and My Files are on every plan.": "Klip ön ayarları, çalışma programı, otomatik klip tespiti ve Dosyalarım her pakette vardır.",
  "Can I fix a mistake in the subtitles?": "Altyazıdaki bir hatayı düzeltebilir miyim?",
  "Yes. Every subtitle line is listed with its timecode and stays editable: correct a misheard word, rewrite the sentence, or delete a line you do not want on screen. Timings stay exactly as transcribed. Saving re-renders the clip once from a clean master, so correcting it twice does not stack quality loss.": "Evet. Her altyazı satırı zaman koduyla listelenir ve düzenlenebilir kalır: yanlış anlaşılmış bir kelimeyi düzelt, cümleyi yeniden yaz ya da ekranda istemediğin satırı sil. Zamanlamalar yazıya döküldüğü gibi kalır. Kaydetmek klibi temiz bir asıl kopyadan bir kez yeniden işler; iki kez düzeltmek kalite kaybını üst üste bindirmez.",
  "Fixing the wording is never a paid upgrade. Changing how the subtitles look — font, size, colour, outline, placement, background box — is part of Creator and Pro.": "İfadeyi düzeltmek asla ücretli bir yükseltme değildir. Altyazının görünümünü değiştirmek — yazı tipi, boyut, renk, kontur, yerleşim, arka plan kutusu — Creator ve Pro'nun parçasıdır.",
  "What is the run schedule?": "Çalışma programı nedir?",
  "It decides the days and hours Jolnova is allowed to track your streamers. Outside them it stays idle instead of burning disk and bandwidth on a channel that is not live. You can add weekly ranges, ranges that pass midnight, and one-off exceptions for a single date. It is a local timer — it only runs while your computer is on and the app is open. Available on every plan.": "Jolnova'nın yayıncılarını hangi gün ve saatlerde takip edebileceğine karar verir. Dışında, yayında olmayan bir kanal için disk ve bant genişliği harcamak yerine boşta bekler. Haftalık aralıklar, gece yarısını aşan aralıklar ve tek bir güne özel istisnalar ekleyebilirsin. Bu yerel bir zamanlayıcıdır — yalnızca bilgisayarın açıkken ve uygulama açıkken çalışır. Her pakette vardır.",
  "What is a clip preset?": "Klip ön ayarı nedir?",
  "A named bundle of settings you already use: layout, camera box, maximum clips per stream, and your subtitle, watermark, clip context and platform badge preferences. Apply it to a streamer in one click instead of repeating the same setup by hand. Presets are on every plan, including the trial — and a preset never bypasses a plan limit: a setting your plan does not include is stored as a preference but stays inactive.": "Zaten kullandığın ayarların adlandırılmış bir demeti: yerleşim, kamera kutusu, yayın başına en fazla klip ve altyazı, filigran, klip bağlamı ile platform rozeti tercihlerin. Aynı kurulumu elle tekrarlamak yerine tek tıkla bir yayıncıya uygula. Ön ayarlar deneme dahil her pakette vardır — ve bir ön ayar paket sınırını asla aşmaz: paketinde olmayan bir ayar tercih olarak saklanır ama etkin olmaz.",
  "What is the platform badge?": "Platform rozeti nedir?",
  "The platform name and channel line Jolnova draws on the clip, such as the platform name and the channel handle. Creator and Pro can hide it. Because Jolnova draws it rather than the source, removing it leaves the picture untouched.": "Jolnova'nın klip üzerine çizdiği platform adı ve kanal satırı — örneğin platform adı ve kanal kullanıcı adı. Creator ve Pro bunu gizleyebilir. Kaynağın değil Jolnova'nın çizdiği bir şey olduğu için kaldırmak görüntüye dokunmaz.",
  "How many streams can I record at the same time?": "Aynı anda kaç yayın kaydedebilirim?",
  "One on Starter, two on Creator, four on Pro. That is a separate limit from how many creators you track: you can follow sixteen channels and have four of them recording at once. The reason it is capped is disk — a live recording is roughly 5.6 GB per stream per hour.": "Starter'da bir, Creator'da iki, Pro'da dört. Bu, kaç yayıncı takip ettiğinden ayrı bir limittir: on altı kanal takip edip dördünü aynı anda kaydedebilirsin. Sınırın sebebi disk — canlı kayıt yayın başına saatte yaklaşık 5,6 GB'dir.",
  "Yes — 3 days, up to 50 clips in total and 2 YouTube links in total, at 720p and with the Jolnova watermark on. It tracks 2 creators and records one stream at a time. It exists so you can see real output from your own sources before paying anything.": "Evet — 3 gün, toplam en fazla 50 klip ve toplam 2 YouTube linki; 720p ve Jolnova filigranı açık. 2 yayıncı takip eder ve aynı anda bir yayın kaydeder. Hiçbir ödeme yapmadan kendi kaynaklarından gerçek çıktı görebilmen için var.",
  "What happens when the trial ends?": "Deneme bitince ne olur?",
  "Whichever runs out first — the three days or the fifty clips — stops new clip production. Nothing is deleted: everything already in your review queue and clip library stays there and can still be approved, edited and exported. Running out of YouTube links only closes that one route; clips from live sources and from your own files keep coming until the days or the clip cap end the trial.": "Hangisi önce biterse — üç gün ya da elli klip — yeni klip üretimi durur. Hiçbir şey silinmez: inceleme kuyruğunda ve klip kütüphanende olan her şey yerinde kalır; yine onaylanabilir, düzenlenebilir ve dışa aktarılabilir. YouTube linklerinin bitmesi yalnızca o yolu kapatır; canlı kaynaklardan ve kendi dosyalarından klipler, günler ya da klip tavanı denemeyi bitirene kadar gelmeye devam eder.",
  "Yes, on every paid plan. It is a switch in Settings rather than a paid upgrade. During the free trial it stays on.": "Evet, her ücretli pakette. Ücretli bir yükseltme değil, Ayarlar'daki bir anahtardır. Ücretsiz deneme boyunca açık kalır.",
  "Yes, and there is no separate API key to buy or configure. Worth knowing what runs where: clip detection and transcription happen on your own computer and cost nothing per clip. The only step that leaves your machine is the writing one — the transcript and a short chat summary are sent off so the title of a clip you approved can be written.": "Evet ve ayrıca satın alıp yapılandıracağın bir API anahtarı yok. Neyin nerede çalıştığını bilmekte fayda var: klip tespiti ve yazıya dökme senin bilgisayarında olur ve klip başına hiçbir maliyeti yoktur. Makinenden çıkan tek adım yazma adımıdır — onayladığın klibin başlığı yazılabilsin diye döküm ve kısa bir chat özeti gönderilir.",
  "Does Jolnova post the clips for me?": "Jolnova klipleri benim için paylaşıyor mu?",
  "No. Jolnova produces the clip file and you post it yourself. It does not connect to a posting account and does not upload anything on your behalf.": "Hayır. Jolnova klip dosyasını üretir, paylaşımı sen yaparsın. Bir paylaşım hesabına bağlanmaz ve senin adına hiçbir şey yüklemez.",
  "Detection and transcription run on your own machine. The only step that leaves your computer is the writing one, and Jolnova never posts anything for you.": "Tespit ve yazıya dökme senin makinende çalışır. Bilgisayarından çıkan tek adım yazma adımıdır ve Jolnova senin için hiçbir şey paylaşmaz.",
  "Twitch, Kick, TikTok and YouTube. Twitch, Kick and TikTok are tracked live — recording starts by itself when the channel goes on air. YouTube works from links only.": "Twitch, Kick, TikTok ve YouTube. Twitch, Kick ve TikTok canlı takip edilir — kanal yayına geçtiğinde kayıt kendi başlar. YouTube yalnızca linkten çalışır.",
  "A Single Platform plan covers one of the four, chosen by you in the application; an All Platforms plan covers all four. My Files — videos already on your computer — is included with every plan and is never counted as a platform.": "Tek Platform paketi dördünden birini kapsar — hangisi olduğunu uygulamada sen seçersin; Tüm Platformlar paketi dördünü birden kapsar. Dosyalarım — bilgisayarında zaten duran videolar — her pakete dahildir ve asla platform sayılmaz.",
  "It depends on your plan. On a Single Platform plan: 4 on Starter, 8 on Creator, 16 on Pro. On All Platforms the limit is one pooled total across the four platforms: 20 on Starter, 40 on Creator, 80 on Pro. The free trial tracks 2.": "Paketine bağlı. Tek Platform paketinde: Starter'da 4, Creator'da 8, Pro'da 16. Tüm Platformlar'da limit dört platform için tek bir havuz toplamıdır: Starter'da 20, Creator'da 40, Pro'da 80. Ücretsiz deneme 2 yayıncı takip eder.",
  "Tracking a creator and recording one are separate limits — see the question about simultaneous recordings below.": "Bir yayıncıyı takip etmekle kaydetmek ayrı limitlerdir — aşağıdaki eş zamanlı kayıt sorusuna bakabilirsin.",
  "How many streams can Jolnova record at the same time?": "Jolnova aynı anda kaç yayın kaydedebilir?",
  "One on Starter, two on Creator and four on Pro. This is not the same as the creator limit: you can track sixteen channels and have four of them recording at once.": "Starter'da bir, Creator'da iki, Pro'da dört. Bu, yayıncı limitiyle aynı şey değildir: on altı kanal takip edip dördünü aynı anda kaydedebilirsin.",
  "The cap exists because of disk. A live recording is roughly 5.6 GB per stream per hour, so four at once is about 22 GB an hour.": "Sınırın sebebi disk. Canlı kayıt yayın başına saatte yaklaşık 5,6 GB'dir; dolayısıyla dördü birden saatte yaklaşık 22 GB eder.",
  "Can I make Jolnova work only at certain hours?": "Jolnova'yı yalnızca belirli saatlerde çalıştırabilir miyim?",
  "Yes. The run schedule decides which days and hours Jolnova is allowed to track your streamers; outside them it stays idle instead of recording an empty channel.": "Evet. Çalışma programı, Jolnova'nın yayıncılarını hangi gün ve saatlerde takip edebileceğine karar verir; dışında boş bir kanalı kaydetmek yerine boşta bekler.",
  "You can add weekly time ranges over several days, ranges that pass midnight such as 20:00 to 02:00, and one-off exceptions for a single date — either stay idle all day, or run only between two hours. Times follow your computer's local clock, so daylight saving takes care of itself.": "Birden fazla güne yayılan haftalık saat aralıkları, 20:00 – 02:00 gibi gece yarısını aşan aralıklar ve tek bir güne özel istisnalar ekleyebilirsin — ya bütün gün boşta kal ya da yalnızca iki saat arasında çalış. Saatler bilgisayarının yerel saatini izler; yaz saati kendiliğinden doğru çalışır.",
  "It is a local timer: Jolnova can only follow the schedule while your computer is on and the application is running. Turn the schedule off and it tracks around the clock again. Available on every plan.": "Bu yerel bir zamanlayıcıdır: Jolnova programı yalnızca bilgisayarın açıkken ve uygulama çalışırken uygulayabilir. Programı kapatırsan yeniden 7/24 takip eder. Her pakette vardır.",
  "Three signals in the recording: how dense the chat gets compared with its calm baseline, where the audio spikes, and what is being said in the transcript. Where those line up, a candidate is cut and sent to the review queue. You approve or reject every one of them, and detection sensitivity is a setting you control — Few, Balanced or Many.": "Kayıttaki üç sinyal: chat'in sakin seviyesine göre ne kadar yoğunlaştığı, sesin nerede patladığı ve transkriptte ne söylendiği. Bunlar aynı yere denk geldiğinde bir aday kesilir ve inceleme kuyruğuna gönderilir. Her birini sen onaylar ya da reddedersin; tespit hassasiyeti de senin kontrolündedir — Az, Normal ya da Çok.",
  "All three signals are measured on your own computer, so detection costs nothing per clip.": "Üç sinyal de senin bilgisayarında ölçülür; bu yüzden tespitin klip başına hiçbir maliyeti yoktur.",
  "You can trim the start and end, correct the subtitle text, add or remove a text overlay, add or remove an image overlay, and change the thumbnail. Effects are always re-applied from the untouched original, so nothing degrades.": "Başı ve sonu kırpabilir, altyazı metnini düzeltebilir, yazı bindirmesi ekleyip kaldırabilir, görsel bindirmesi ekleyip kaldırabilir ve kapak görselini değiştirebilirsin. Efektler her zaman el değmemiş orijinalden yeniden uygulanır, hiçbir şey bozulmaz.",
  "Yes, they are rendered into the picture in the same encoding pass, so clips stay readable when they autoplay without sound. Starter produces clips without subtitles; Creator and Pro burn them in.": "Evet, aynı kodlama geçişinde görüntünün içine işlenir; böylece klipler sessiz otomatik oynatıldığında da okunur kalır. Starter altyazısız klip üretir; Creator ve Pro altyazıyı gömer.",
  "Vertical 9:16, with the watermark on or off as you prefer on any paid plan. The resolution ceiling follows your plan: 720p on Starter and during the free trial, 1080p on Creator, 4K on Pro. A ceiling is not a promise — Twitch and Kick broadcast at 1080p at most, so 4K is only reachable when the source itself is 4K, such as a YouTube video or one of your own recordings.": "Dikey 9:16; her ücretli pakette filigranı tercihine göre açık ya da kapalı. Çözünürlük tavanı paketini izler: Starter'da ve ücretsiz denemede 720p, Creator'da 1080p, Pro'da 4K. Tavan bir vaat değildir — Twitch ve Kick en fazla 1080p yayınlar; dolayısıyla 4K yalnızca kaynağın kendisi 4K olduğunda, örneğin bir YouTube videosu ya da kendi kayıtlarından biri olduğunda mümkündür.",
  "The subtitles got a word wrong. Can I fix it?": "Altyazı bir kelimeyi yanlış yazdı. Düzeltebilir miyim?",
  "Yes. Every subtitle line is listed with its timecode and stays editable: correct a misheard word, rewrite the whole sentence, or delete a line you do not want on screen. Timings stay exactly as transcribed — only the words change.": "Evet. Her altyazı satırı zaman koduyla listelenir ve düzenlenebilir kalır: yanlış anlaşılmış bir kelimeyi düzelt, bütün cümleyi yeniden yaz ya da ekranda istemediğin satırı sil. Zamanlamalar yazıya döküldüğü gibi kalır — yalnızca kelimeler değişir.",
  "Saving re-renders the clip once from a clean master, so correcting the text twice does not stack quality loss. Fixing the wording is free on every plan; it is not a paid upgrade.": "Kaydetmek klibi temiz bir asıl kopyadan bir kez yeniden işler; metni iki kez düzeltmek kalite kaybını üst üste bindirmez. İfadeyi düzeltmek her pakette ücretsizdir; ücretli bir yükseltme değildir.",
  "Can I change how the subtitles look?": "Altyazının görünümünü değiştirebilir miyim?",
  "Yes, on Creator and Pro. You can set the font, size and text colour, the outline weight and its colour, one of nine placements in the frame, the distance from the edge, and an optional solid background box with its own colour and opacity.": "Evet, Creator ve Pro'da. Yazı tipini, boyutu ve yazı rengini, kontur kalınlığını ve rengini, karedeki dokuz yerleşimden birini, kenardan uzaklığı ve isteğe bağlı olarak kendi rengi ve saydamlığı olan dolu bir arka plan kutusunu ayarlayabilirsin.",
  "A live preview shows the style on a real frame from one of your clips while you tune it, and nothing is re-encoded until you save.": "Canlı önizleme, ayarlarken stili kliplerinden alınmış gerçek bir kare üzerinde gösterir ve sen kaydedene kadar hiçbir şey yeniden kodlanmaz.",
  "A named bundle of the settings you already use: layout, camera box, maximum clips per stream, and your subtitle, watermark, clip context and platform badge preferences. Apply it to a streamer in one click instead of repeating the same setup by hand.": "Zaten kullandığın ayarların adlandırılmış bir demeti: yerleşim, kamera kutusu, yayın başına en fazla klip ve altyazı, filigran, klip bağlamı ile platform rozeti tercihlerin. Aynı kurulumu elle tekrarlamak yerine tek tıkla bir yayıncıya uygula.",
  "Presets are available on every plan, including the free trial. A preset never bypasses a plan limit — a setting your plan does not include is stored as a preference but stays inactive.": "Ön ayarlar ücretsiz deneme dahil her pakette vardır. Bir ön ayar paket sınırını asla aşmaz — paketinde olmayan bir ayar tercih olarak saklanır ama etkin olmaz.",
  "How is a clip framed for vertical?": "Klip dikey için nasıl kadrajlanır?",
  "You pick a layout per streamer, or let Auto decide from the source. Game puts the camera on top with the gameplay below; IRL fills the frame on a blurred background; Camera corner keeps the content large with the camera in a corner; Full screen uses the source as it is, which suits TikTok because those streams are already vertical.": "Yerleşimi yayıncı bazında seçersin ya da kaynağa göre Auto karar verir. Oyun modu kamerayı üste, oynanışı alta koyar; IRL bulanık zemin üzerinde kareyi doldurur; Köşede kamera içeriği büyük tutup kamerayı bir köşeye alır; Tam ekran kaynağı olduğu gibi kullanır ve zaten dikey oldukları için TikTok yayınlarına yakışır.",
  "In Game mode Jolnova can find the camera box itself, and when a layout is unusual you draw the box over a real frame from the stream. It is saved per source and reused for every clip.": "Oyun modunda Jolnova kamera kutusunu kendi bulabilir; düzen alışılmadıksa kutuyu yayından alınmış gerçek bir karenin üzerine sen çizersin. Kaynak başına kaydedilir ve her klipte yeniden kullanılır.",
  "Can I remove the platform name from the clip?": "Platform adını klipten kaldırabilir miyim?",
  "Yes, on Creator and Pro. The platform name and channel line are drawn by Jolnova rather than by the source, so hiding them leaves the picture untouched.": "Evet, Creator ve Pro'da. Platform adını ve kanal satırını kaynak değil Jolnova çizer; bu yüzden gizlemek görüntüye dokunmaz.",
  "Is there an AI score on the clips?": "Kliplerde AI puanı var mı?",
  "No. Clips carry no score and no quality grade, and no model decides whether a moment is good enough. Detection is a signal-based cut — chat density, audio spikes and speech content — and the decision at the review queue is yours.": "Hayır. Klipler puan ya da kalite notu taşımaz ve bir anın yeterince iyi olup olmadığına hiçbir model karar vermez. Tespit sinyale dayalı bir kesimdir — chat yoğunluğu, ses patlamaları ve konuşma içeriği — ve inceleme kuyruğundaki karar senindir.",
  "The AI does one job in Jolnova: it writes the title, description and hashtags of a clip you already approved.": "Jolnova'da AI tek bir iş yapar: onayladığın klibin başlığını, açıklamasını ve hashtag'lerini yazar.",
  "Can Jolnova combine several clips into one longer video?": "Jolnova birden fazla klibi tek bir uzun videoda birleştirebilir mi?",
  "No. Clips are produced one at a time and there is no montage or compilation feature.": "Hayır. Klipler tek tek üretilir ve montaj ya da derleme özelliği yoktur.",
  "No. Jolnova produces the clip file and you post it yourself. It does not connect to a posting account and never uploads anything on your behalf.": "Hayır. Jolnova klip dosyasını üretir, paylaşımı sen yaparsın. Bir paylaşım hesabına bağlanmaz ve senin adına hiçbir şey yüklemez.",
  "Starter produces clips without subtitles, records one stream at a time and exports up to 720p. Creator adds burned-in subtitles, subtitle styling, text editing, ±7 sec Clip Context and hiding the platform badge, records two streams at once and exports up to 1080p. Pro raises the export ceiling to 4K where the source allows it, records four streams at once and gives the highest creator limit.": "Starter altyazısız klip üretir, aynı anda bir yayın kaydeder ve en fazla 720p dışa aktarır. Creator gömülü altyazı, altyazı stili, yazı düzenleme, ±7 sn Klip Bağlamı ve platform rozetini gizlemeyi ekler; aynı anda iki yayın kaydeder ve en fazla 1080p dışa aktarır. Pro, kaynağın izin verdiği yerde tavanı 4K'ya çıkarır, aynı anda dört yayın kaydeder ve en yüksek yayıncı limitini verir.",
  "Automatic clip detection, clip presets, the run schedule and My Files are on every plan. On top of all that, each plan comes in a Single Platform and an All Platforms version.": "Otomatik klip tespiti, klip ön ayarları, çalışma programı ve Dosyalarım her pakette vardır. Bunun üstüne her paket Tek Platform ve Tüm Platformlar sürümüyle gelir.",
  "It counts the YouTube videos you paste in for processing each month: 4 on Starter, 8 on Creator, 12 on Pro. The free trial gets 2 in total rather than per month — the trial only lasts three days, so a monthly renewal would never arrive. Local files and tracked live sources are not affected by it.": "Her ay işlenmek üzere yapıştırdığın YouTube videolarını sayar: Starter'da 4, Creator'da 8, Pro'da 12. Ücretsiz deneme aylık değil toplam 2 hak alır — deneme yalnızca üç gün sürdüğü için aylık bir yenilenme hiç gelmezdi. Yerel dosyalar ve takip edilen canlı kaynaklar bundan etkilenmez.",
  "Yes, on every paid plan. It is a switch in Settings rather than a paid upgrade. During the free trial the Jolnova badge stays on.": "Evet, her ücretli pakette. Ücretli bir yükseltme değil, Ayarlar'daki bir anahtardır. Ücretsiz deneme boyunca Jolnova rozeti açık kalır.",
  "Yes — 3 days and up to 50 clips in total, with 2 YouTube links in total, 2 tracked creators, one recording at a time, 720p export and no subtitles. The Jolnova watermark stays on for the duration.": "Evet — 3 gün ve toplam en fazla 50 klip; toplam 2 YouTube linki, 2 takip edilen yayıncı, aynı anda tek kayıt, 720p dışa aktarım ve altyazı yok. Jolnova filigranı bu süre boyunca açık kalır.",
  "It is there to let you see real output from your own sources before you pay anything.": "Hiçbir ödeme yapmadan kendi kaynaklarından gerçek çıktı görebilmen için var.",
  "What happens when the free trial ends?": "Ücretsiz deneme bitince ne olur?",
  "Whichever runs out first — the three days or the fifty clips — stops new clip production. Nothing is deleted: everything already in your review queue and clip library stays there and can still be approved, edited and exported.": "Hangisi önce biterse — üç gün ya da elli klip — yeni klip üretimi durur. Hiçbir şey silinmez: inceleme kuyruğunda ve klip kütüphanende olan her şey yerinde kalır; yine onaylanabilir, düzenlenebilir ve dışa aktarılabilir.",
  "Running out of the two YouTube links closes only that route. Clips from live sources and from your own files keep coming until the days or the clip cap end the trial.": "İki YouTube linkinin bitmesi yalnızca o yolu kapatır. Canlı kaynaklardan ve kendi dosyalarından klipler, günler ya da klip tavanı denemeyi bitirene kadar gelmeye devam eder.",
  "Jolnova is a Windows application that automatically produces vertical short-form videos from live streams. Recording, moment detection, transcription, cutting, vertical formatting and subtitles all run on your computer. Your subscription covers the AI writing step and determines which source platforms you may use, how many creators you may track, how many streams you may record at the same time, the maximum export resolution, and how many YouTube links you may submit each month. Jolnova does not publish anything to any platform on your behalf — you download the finished clip and post it yourself.": "Jolnova, canlı yayınlardan otomatik olarak dikey kısa video üreten bir Windows uygulamasıdır. Kayıt, an tespiti, yazıya dökme, kesme, dikey formatlama ve altyazının tamamı bilgisayarında çalışır. Aboneliğin AI yazma adımını kapsar ve hangi kaynak platformları kullanabileceğini, kaç yayıncı takip edebileceğini, aynı anda kaç yayın kaydedebileceğini, en yüksek dışa aktarma çözünürlüğünü ve her ay kaç YouTube linki gönderebileceğini belirler. Jolnova senin adına hiçbir platforma bir şey paylaşmaz — biten klibi sen indirir ve sen paylaşırsın.",
  "Each plan sets how many streams may be recorded at the same time: 1 on Starter, 2 on Creator, 4 on Pro. This is separate from the number of creators you may track.": "Her paket aynı anda kaç yayının kaydedilebileceğini belirler: Starter'da 1, Creator'da 2, Pro'da 4. Bu, takip edebileceğin yayıncı sayısından ayrıdır.",
  "The free trial lasts 3 days from account creation and allows up to 50 clips in total, with 2 tracked creators, one recording at a time, 720p export, 2 YouTube links in total and no subtitles. The Jolnova watermark cannot be switched off during the trial.": "Ücretsiz deneme, hesabın oluşturulmasından itibaren 3 gün sürer ve toplam en fazla 50 klibe izin verir; 2 takip edilen yayıncı, aynı anda tek kayıt, 720p dışa aktarım, toplam 2 YouTube linki ve altyazı yok. Deneme boyunca Jolnova filigranı kapatılamaz.",
  "Whichever limit is reached first — the three days or the fifty clips — ends the trial and stops new clip production. Reaching it does not suspend your account and deletes nothing: clips already produced stay in your library and can still be edited and exported.": "Hangi sınıra önce ulaşılırsa — üç gün ya da elli klip — deneme biter ve yeni klip üretimi durur. Bu, hesabını askıya almaz ve hiçbir şeyi silmez: üretilmiş klipler kütüphanende kalır, düzenlenip dışa aktarılabilir.",
  "A Windows app. Install it, sign in, paste a streamer link — the rest is automatic. The free trial runs for 3 days or 50 clips, whichever comes first.": "Bir Windows uygulaması. Kur, giriş yap, yayıncı linkini yapıştır — gerisi otomatik. Ücretsiz deneme 3 gün ya da 50 klip; hangisi önce gelirse.",
  "Paste a Kick, Twitch or TikTok channel — or a YouTube link, or a video file of your own. Your first clips land in Pending within minutes.": "Kick, Twitch ya da TikTok kanalı yapıştır — veya bir YouTube linki ya da kendi video dosyan. İlk klipler dakikalar içinde Bekleyen'e düşer.",
  "// No installer needed — just run the file. FFmpeg is set up automatically on first launch.": "// Kuruluma gerek yok — dosyayı çalıştırman yeterli. FFmpeg ilk açılışta otomatik kurulur.",
  "Detection sensitivity: Few, Balanced or Many": "Tespit hassasiyeti: Az, Normal ya da Çok",
  "Twitch / Kick / YouTube / TikTok": "Twitch / Kick / YouTube / TikTok",
  "n/a": "yok",
  "My Files is included with every plan.": "Dosyalarım her pakete dahildir.",
  "Processing a video already on your computer is not a platform and never counts against your platform choice — on Starter, Creator, Pro and during the free trial alike.": "Bilgisayarında zaten duran bir videoyu işlemek platform sayılmaz ve platform seçiminden düşmez — Starter, Creator, Pro ve ücretsiz denemede aynı şekilde.",
  "No. My Files is included with every plan, including the free trial. Processing a video sitting on your computer never touches your platform selection or your creator limit.": "Hayır. Dosyalarım, ücretsiz deneme dahil her pakete dahildir. Bilgisayarında duran bir videoyu işlemek platform seçimine de yayıncı limitine de dokunmaz.",
  "No. My Files is included with every plan, including the free trial. Processing a video that is already on your computer never touches your platform selection or your creator limit.": "Hayır. Dosyalarım, ücretsiz deneme dahil her pakete dahildir. Bilgisayarında zaten duran bir videoyu işlemek platform seçimine de yayıncı limitine de dokunmaz.",
  // ---- paket duzenlemesi 2026-08 ----
  "Unlimited YouTube links": "Sınırsız YouTube linki",
  "±3 sec Clip Context": "±3 sn Klip Bağlamı",
  "±10 sec Clip Context": "±10 sn Klip Bağlamı",
  "Subtitles and ±3 sec Clip Context": "Altyazı ve ±3 sn Klip Bağlamı",
  "720p export with subtitles on": "Altyazılı 720p dışa aktarım",
  "Clip Context": "Klip Bağlamı",
  "YouTube links": "YouTube linki",
  "Unlimited": "Sınırsız",
  "±3 sec": "±3 sn",
  "±7 sec": "±7 sn",
  "±10 sec": "±10 sn",
  "* Every plan burns subtitles into the clip. What Creator and Pro add is the editor: correcting a misheard word, rewriting a line, deleting one you do not want, and changing how the subtitles look.": "* Her paket altyazıyı klibin içine gömer. Creator ve Pro'nun eklediği şey düzenleyicidir: yanlış duyulan bir kelimeyi düzeltmek, bir satırı yeniden yazmak, istemediğin bir satırı silmek ve altyazının görünümünü değiştirmek.",
  "What is Clip Context?": "Klip Bağlamı nedir?",
  "It lets you pull the start and end of a clip outwards, taken from the original recording rather than from the cut file. Useful when the setup to a joke sits just outside the detected moment. Every plan has it; how far you can reach depends on the plan: ±3 sec on Starter, ±7 sec on Creator, ±10 sec on Pro.": "Bir klibin başını ve sonunu dışarı doğru genişletmeni sağlar; bu süre kesilmiş dosyadan değil orijinal kayıttan alınır. Şakanın girişi tespit edilen anın hemen dışında kaldığında işe yarar. Her pakette vardır; ne kadar uzanabildiğin pakete bağlıdır: Starter'da ±3 sn, Creator'da ±7 sn, Pro'da ±10 sn.",
  "Is there a limit on YouTube links?": "YouTube linklerinde bir sınır var mı?",
  "Not on a paid plan — Starter, Creator and Pro all process as many YouTube links as you paste in. The free trial is the exception: 2 links in total, not per month, because the trial only lasts three days and a monthly renewal would never arrive. Local files and tracked live sources are never counted either way.": "Ücretli pakette yok — Starter, Creator ve Pro yapıştırdığın kadar YouTube linkini işler. İstisna ücretsiz denemedir: ayda değil, toplamda 2 link; çünkü deneme yalnızca üç gün sürer ve aylık bir yenileme hiç gelmez. Yerel dosyalar ve takip edilen canlı kaynaklar hiçbir durumda sayılmaz.",
  "All three burn subtitles into the clip and all three have unlimited YouTube links. Starter records one stream at a time, exports up to 720p and gives ±3 sec Clip Context. Creator adds the subtitle editor, subtitle styling, ±7 sec Clip Context and hiding the platform badge, records two streams at once and exports up to 1080p. Pro raises the export ceiling to 4K where the source allows it, records four streams at once, widens Clip Context to ±10 sec and gives the highest creator limit.": "Üçü de altyazıyı klibin içine gömer ve üçünde de YouTube linki sınırsızdır. Starter aynı anda tek yayın kaydeder, en fazla 720p dışa aktarır ve ±3 sn Klip Bağlamı verir. Creator altyazı düzenleyicisini, altyazı görünümünü, ±7 sn Klip Bağlamı'nı ve platform rozetini gizlemeyi ekler; aynı anda iki yayın kaydeder ve en fazla 1080p dışa aktarır. Pro, kaynağın izin verdiği yerde tavanı 4K'ya çıkarır, aynı anda dört yayın kaydeder, Klip Bağlamı'nı ±10 sn'ye genişletir ve en yüksek yayıncı limitini verir.",
  "All three burn subtitles into the clip and all three take unlimited YouTube links. Starter records one stream at a time, exports up to 720p and gives ±3 sec Clip Context. Creator adds the subtitle editor, subtitle styling, ±7 sec Clip Context and hiding the platform badge, records two streams at once and exports up to 1080p. Pro raises the export ceiling to 4K where the source allows it, records four streams at once, widens Clip Context to ±10 sec and gives the highest creator limit.": "Üçü de altyazıyı klibin içine gömer ve üçü de sınırsız YouTube linki alır. Starter aynı anda tek yayın kaydeder, en fazla 720p dışa aktarır ve ±3 sn Klip Bağlamı verir. Creator altyazı düzenleyicisini, altyazı görünümünü, ±7 sn Klip Bağlamı'nı ve platform rozetini gizlemeyi ekler; aynı anda iki yayın kaydeder ve en fazla 1080p dışa aktarır. Pro, kaynağın izin verdiği yerde tavanı 4K'ya çıkarır, aynı anda dört yayın kaydeder, Klip Bağlamı'nı ±10 sn'ye genişletir ve en yüksek yayıncı limitini verir.",
  "Yes, on Creator and Pro. Every subtitle line is listed with its timecode and stays editable: correct a misheard word, rewrite the sentence, or delete a line you do not want on screen. Timings stay exactly as transcribed. Saving re-renders the clip once from a clean master, so correcting it twice does not stack quality loss.": "Evet, Creator ve Pro'da. Her altyazı satırı zaman koduyla listelenir ve düzenlenebilir kalır: yanlış duyulan bir kelimeyi düzelt, cümleyi yeniden yaz ya da ekranda istemediğin bir satırı sil. Zamanlamalar yazıya döküldüğü gibi kalır. Kaydetmek klibi temiz bir kaynaktan bir kez yeniden işler; iki kez düzeltmek kalite kaybını üst üste bindirmez.",
  "Starter clips carry subtitles too — they are simply produced as transcribed. The editor and the look of the subtitles — font, size, colour, outline, placement, background box — are part of Creator and Pro.": "Starter klipleri de altyazı taşır — yalnızca yazıya döküldüğü hâliyle üretilir. Düzenleyici ve altyazının görünümü — yazı tipi, boyut, renk, kontur, konum, arka plan kutusu — Creator ve Pro'nun parçasıdır.",
  "On Single Platform: 4 on Starter, 8 on Creator, 16 on Pro. On All Platforms the limit is a single pooled total across the four platforms: 16 on Starter, 32 on Creator, 48 on Pro.": "Tek Platform'da: Starter'da 4, Creator'da 8, Pro'da 16. Tüm Platformlar'da limit dört platform için tek bir havuz toplamıdır: Starter'da 16, Creator'da 32, Pro'da 48.",
  "All Platforms — 16 on Starter, 32 on Creator, 48 on Pro, counted as one total": "Tüm Platformlar — Starter'da 16, Creator'da 32, Pro'da 48; tek toplam olarak sayılır",
  "Text overlay is available on every plan, including the free trial.": "Yazı bindirme, ücretsiz deneme dahil her pakette vardır.",
  "Clip Context pulls extra seconds back from the original recording — ±3 sec on Starter, ±7 on Creator, ±10 on Pro": "Klip Bağlamı orijinal kayıttan fazladan saniye geri çeker — Starter'da ±3 sn, Creator'da ±7, Pro'da ±10",
  "Subtitle, watermark, clip context and platform badge preferences": "Altyazı, filigran, klip bağlamı ve platform rozeti tercihleri",
  "Every plan burns subtitles into the clip. Creator and Pro add the editor — correcting the words and changing how the subtitles look.": "Her paket altyazıyı klibin içine gömer. Creator ve Pro düzenleyiciyi ekler — kelimeleri düzeltmek ve altyazının görünümünü değiştirmek.",
  "Availability also depends on your plan — the subtitle editor, subtitle styling and hiding the platform badge are Creator and Pro features. Subtitles themselves are burned in on every plan.": "Kullanılabilirlik paketine de bağlıdır — altyazı düzenleyicisi, altyazı görünümü ve platform rozetini gizleme Creator ve Pro özellikleridir. Altyazının kendisi her pakette gömülür.",
  "Paid plans place no limit on the number of YouTube links you may submit for processing.": "Ücretli paketler, işlenmek üzere gönderebileceğin YouTube linki sayısına sınır koymaz.",
  "It depends on your plan. On a Single Platform plan: 4 on Starter, 8 on Creator, 16 on Pro. On All Platforms the limit is one pooled total across the four platforms: 16 on Starter, 32 on Creator, 48 on Pro. The free trial tracks 2.": "Paketine bağlı. Tek Platform paketinde: Starter'da 4, Creator'da 8, Pro'da 16. Tüm Platformlar'da limit dört platform için tek bir havuz toplamıdır: Starter'da 16, Creator'da 32, Pro'da 48. Ücretsiz deneme 2 yayıncı takip eder.",
  "Yes, they are rendered into the picture in the same encoding pass, so clips stay readable when they autoplay without sound. Every plan burns them in, including the free trial.": "Evet, aynı kodlama geçişinde görüntünün içine işlenir; böylece klipler sessiz otomatik oynatıldığında da okunur kalır. Ücretsiz deneme dahil her paket altyazıyı gömer.",
  "Yes, on Creator and Pro. Every subtitle line is listed with its timecode and stays editable: correct a misheard word, rewrite the whole sentence, or delete a line you do not want on screen. Timings stay exactly as transcribed — only the words change.": "Evet, Creator ve Pro'da. Her altyazı satırı zaman koduyla listelenir ve düzenlenebilir kalır: yanlış duyulan bir kelimeyi düzelt, cümlenin tamamını yeniden yaz ya da ekranda istemediğin bir satırı sil. Zamanlamalar yazıya döküldüğü gibi kalır — yalnızca kelimeler değişir.",
  "Saving re-renders the clip once from a clean master, so correcting the text twice does not stack quality loss. Starter clips carry subtitles too, produced exactly as transcribed; the editor itself is part of Creator and Pro.": "Kaydetmek klibi temiz bir kaynaktan bir kez yeniden işler; metni iki kez düzeltmek kalite kaybını üst üste bindirmez. Starter klipleri de altyazı taşır, tam olarak yazıya döküldüğü hâliyle üretilir; düzenleyicinin kendisi Creator ve Pro'nun parçasıdır.",
  "Yes — 3 days and up to 50 clips in total, with 2 YouTube links in total, 2 tracked creators, one recording at a time and 720p export, subtitles included. The Jolnova watermark stays on for the duration.": "Evet — 3 gün ve toplamda en fazla 50 klip; toplam 2 YouTube linki, 2 takip edilen yayıncı, aynı anda tek kayıt ve 720p dışa aktarım, altyazı dahil. Jolnova filigranı süre boyunca açık kalır.",
  "The free trial lasts 3 days from account creation and allows up to 50 clips in total, with 2 tracked creators, one recording at a time, 720p export and 2 YouTube links in total. Subtitles are included. The Jolnova watermark cannot be switched off during the trial.": "Ücretsiz deneme hesap oluşturmadan itibaren 3 gün sürer ve toplamda en fazla 50 klibe izin verir; 2 takip edilen yayıncı, aynı anda tek kayıt, 720p dışa aktarım ve toplam 2 YouTube linki ile. Altyazı dahildir. Deneme süresince Jolnova filigranı kapatılamaz.",

  // ---- SAYFA BASLIKLARI VE META ACIKLAMALARI ----
  // BUNLAR EKSIKTI. _rjKafa() <title> ve <meta description>'i bu sozlukten
  // cevirir; DE/FR/ES dosyalarinda karsiliklari VARDI, TR'de YOKTU -> Turkce
  // gezen ziyaretcinin sekme basligi ve (dizine girerse) arama sonucu
  // Ingilizce kaliyordu. Asil pazarin dili oldugu icin en cok burada onemli.
  "Jolnova — Add the creators. Wake up to clips.":
    "Jolnova — Yayıncıları ekle. Sabah kliplerle uyan.",
  "Jolnova tracks your Kick, Twitch and TikTok sources, records them when they go live and prepares vertical clips with editable burned-in subtitles. Review and export what is worth posting.":
    "Jolnova; Kick, Twitch ve TikTok kaynaklarını takip eder, yayına geçince kaydeder ve düzenlenebilir altyazılı dikey klipler hazırlar. İncele, paylaşmaya değeni dışa aktar.",

  "How Jolnova Turns Streams Into Vertical Clips":
    "Jolnova Yayınları Dikey Kliplere Nasıl Çevirir?",
  "Add a source, set the hours it may work, and Jolnova records, finds candidate moments, captions them and hands you a review queue. Here is each step.":
    "Bir kaynak ekle, çalışabileceği saatleri belirle; Jolnova kaydeder, aday anları bulur, altyazılar ve sana bir inceleme kuyruğu verir. Her adım burada.",

  "Jolnova Features — Tracking, Subtitles, Schedule and Export":
    "Jolnova Özellikleri — Takip, Altyazı, Zamanlama ve Aktarım",
  "Live tracking for Kick, Twitch and TikTok, YouTube links, subtitle text editing and styling, a run schedule, clip presets, watermark and platform badge control — every Jolnova feature explained.":
    "Kick, Twitch ve TikTok canlı takibi, YouTube linkleri, altyazı düzenleme ve biçimlendirme, çalışma takvimi, klip şablonları, filigran ve platform rozeti — tüm Jolnova özellikleri.",

  "Jolnova Pricing": "Jolnova Fiyatlandırma",
  "Starter, Creator and Pro — from $2.99 a month for one platform, or $6.99 for all four. Free trial: 3 days or 50 clips. Checkout is not connected yet.":
    "Starter, Creator ve Pro — tek platform için ayda 2,99 $, dördü birden 6,99 $. Ücretsiz deneme: 3 gün veya 50 klip. Ödeme henüz bağlı değil.",

  "Download — Jolnova": "İndir — Jolnova",
  "Download the Jolnova Windows app. Install it, sign in and start making clips.":
    "Jolnova Windows uygulamasını indir. Kur, giriş yap ve klip üretmeye başla.",

  "Jolnova FAQ — Sources, Clips, Files and Billing":
    "Jolnova SSS — Kaynaklar, Klipler, Dosyalar ve Ödeme",
  "Answers about supported platforms, the run schedule, subtitle editing, how clips are produced, what happens to local files and how the free trial works.":
    "Desteklenen platformlar, çalışma takvimi, altyazı düzenleme, kliplerin nasıl üretildiği, yerel dosyalara ne olduğu ve ücretsiz deneme hakkında yanıtlar.",

  "Jolnova Support — Report a Problem or Send an Idea":
    "Jolnova Destek — Sorun Bildir veya Fikir Gönder",
  "Report a problem with Jolnova or send us an idea. Every message reaches the people who build it.":
    "Jolnova ile ilgili bir sorunu bildir ya da bize bir fikir gönder. Her mesaj, onu yapan kişilere ulaşır.",

  "Privacy Policy — Jolnova": "Gizlilik Politikası — Jolnova",
  "Jolnova privacy policy: what data we process, why a hashed device identifier and numeric usage statistics are collected, and how we store and delete information.":
    "Jolnova gizlilik politikası: hangi veriler işleniyor, karma cihaz kimliği ve kullanım istatistikleri neden toplanıyor, bilgiler nasıl saklanıp siliniyor.",

  "Terms of Service — Jolnova": "Kullanım Koşulları — Jolnova",
  "Jolnova terms of service: subscriptions, responsibilities, content rights and cancellation.":
    "Jolnova kullanım koşulları: abonelikler, sorumluluklar, içerik hakları ve iptal."
};

/* DE / FR / ES sozlukleri ayri dosyalardan gelir (lang-de.js vb.).
   Yuklenmemislerse bos nesne kullanilir: cevrilmemis anahtar INGILIZCE
   kalir - kirik ya da bos metin gorunmez. */
const DE = (typeof RJ_DE !== 'undefined') ? RJ_DE : {};
const FR = (typeof RJ_FR !== 'undefined') ? RJ_FR : {};
const ES = (typeof RJ_ES !== 'undefined') ? RJ_ES : {};

const DICTS = { tr: TR, de: DE, fr: FR, es: ES };
const LANGS = [['en', 'English'], ['tr', 'Türkçe'], ['de', 'Deutsch'],
               ['fr', 'Français'], ['es', 'Español']];
const _CODES = LANGS.map(function (x) { return x[0]; });

/* TERS SOZLUKLER: hedef dildeki metin -> Ingilizce anahtar.
   DILLER ARASI GECISTE SART. Gezgin Ingilizce aslini node.__en icinde
   saklar, ama sayfaya SONRADAN eklenen dugumlerde (SSS acilir kapanir,
   dinamik fiyat karti) __en yoktur. Iki dilde sorun degildi; bes dilde
   TR'den DE'ye gecerken DOM'da Turkce metin durur ve once Ingilizceye
   donmesi gerekir. */
const REVS = {};
for (const _l in DICTS) {
  const _d = DICTS[_l], _r = {};
  for (const _k in _d) { if (!(_d[_k] in _r)) _r[_d[_k]] = _k; }
  REVS[_l] = _r;
}

/* Dil kaynagi sirasi: ?lang=  ->  localStorage  ->  'en'.
   ?lang= DESTEGI SART: her sayfanin <head>'inde
   <link rel="alternate" hreflang="tr" href="...?lang=tr"> duruyor. Parametre
   okunmazsa arama motoruna duyurulan TR adresi Ingilizce sayfa gosterir. */
let _lang = (function () {
  let q = null;
  try { q = new URLSearchParams(location.search).get('lang'); } catch (e) {}
  if (q && _CODES.indexOf(q) >= 0) {
    try { localStorage.setItem('rj_lang', q); } catch (e) {}
    return q;
  }
  /* KAYITLI TERCIH > TARAYICI DILI > 'en'.
     Eskiden dogrudan 'en'e dusuyordu: Turkiye'den gelen ziyaretci Ingilizce
     sayfa goruyor ve TR'ye gecmek icin ust kosedeki dugmeyi bulmasi
     gerekiyordu. Tarayici dili tr ise varsayilan Turkce.
     KAYDETMIYORUZ: kullanici EN'e gecerse rjSetLang o tercihi yazar; otomatik
     secimi yazsaydik sonradan tarayici dilini degistiren kullanici eski
     secimde sikisirdi. */
  try {
    var kayitli = localStorage.getItem('rj_lang');
    if (kayitli && _CODES.indexOf(kayitli) >= 0) return kayitli;
  } catch (e) {}
  try {
    var diller = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < diller.length; i++) {
      var d = String(diller[i] || '').toLowerCase();
      for (var j = 0; j < _CODES.length; j++) {
        var c = _CODES[j];
        if (d === c || d.indexOf(c + '-') === 0) return c;
      }
    }
  } catch (e) {}
  return 'en';
})();

/* ONCEDEN URETILMIS DIL SAYFASI (build-i18n.py -> tr/ de/ fr/ es/):
   dil ADRESTEN gelir, tarayici/localStorage tercihinden DEGIL.
   Aksi halde Google'dan /tr/ adresine gelen ve daha once 'de' secmis bir
   ziyaretci, Turkce adreste Almanca metin gorurdu - hem sasirtici hem de
   <head>'de arama motoruna verdigimiz hreflang sozune aykiri.

   Tercih ayrica KAYDEDILIR. Kimlik sayfalari (login/signup/account/reset)
   bilerek tek kopya ve kokte duruyor; oraya giden ziyaretci bu kayit
   sayesinde orada da kendi dilini gorur. */
(function () {
  var st = document.documentElement.getAttribute('data-static-lang');
  if (st && _CODES.indexOf(st) >= 0) {
    _lang = st;
    try { localStorage.setItem('rj_lang', st); } catch (e) {}
  }
})();

function _rjWalk(root) {
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  const nodes = []; let n;
  while (n = w.nextNode()) nodes.push(n);
  const d = DICTS[_lang] || null;
  for (const tn of nodes) {
    const p = tn.parentNode;
    if (!p || /^(SCRIPT|STYLE)$/.test(p.nodeName)) continue;
    /* Ingilizce asil: once saklanan, yoksa TERS tablodan bul. Sonradan
       eklenen dugumlerde __en olmadigi icin ikincisi sart (bkz. REVS). */
    if (tn.__en === undefined) {
      const ham = tn.nodeValue, kirp = ham.trim();
      let asil = ham;
      if (kirp) {
        for (const l in REVS) {
          const g = REVS[l][kirp];
          if (g) { asil = ham.replace(kirp, g); break; }
        }
      }
      tn.__en = asil;
    }
    const en = tn.__en, key = en.trim();
    if (!key) continue;
    const ceviri = d ? d[key] : null;
    tn.nodeValue = ceviri ? en.replace(key, ceviri) : en;
  }
  root.querySelectorAll('[placeholder]').forEach(el => {
    if (el.__ph === undefined) el.__ph = el.getAttribute('placeholder');
    const ceviri = d ? d[el.__ph] : null;
    el.setAttribute('placeholder', ceviri || el.__ph);
  });
}

/* <title> ve meta aciklama <head> icindedir; _rjWalk yalnizca body'de
   yuruyor ve bunlara HIC dokunmuyordu -> sayfa cevriliyken tarayici
   sekmesi ve arama sonucu Ingilizce kaliyordu. Ingilizce asil saklanir,
   boylece diller arasi gecis kayipsiz olur. */
let _rjBasHam = null, _rjAcikHam = null;

function _rjKafa() {
  const d = DICTS[_lang] || null;
  if (_rjBasHam === null) _rjBasHam = document.title || '';
  if (_rjBasHam) {
    const c = d ? d[_rjBasHam] : null;
    document.title = c || _rjBasHam;
  }
  const m = document.querySelector('meta[name="description"]');
  if (m) {
    if (_rjAcikHam === null) _rjAcikHam = m.getAttribute('content') || '';
    if (_rjAcikHam) {
      const c = d ? d[_rjAcikHam] : null;
      m.setAttribute('content', c || _rjAcikHam);
    }
  }
}

function rjApplyLang() {
  try { _rjWalk(document.body); } catch (e) {}
  try { _rjKafa(); } catch (e) {}
}

function rjLangMenu(ac) {
  const sw = document.querySelector('.langsw');
  if (!sw) return;
  sw.classList.toggle('open', ac === undefined ? !sw.classList.contains('open') : !!ac);
  const b = document.getElementById('langBtn');
  if (b) b.setAttribute('aria-expanded', sw.classList.contains('open') ? 'true' : 'false');
}

/* Dugmedeki bayrak + ad ve listedeki isaretli satir. */
function _rjLangYuz() {
  const ad = (LANGS.find(x => x[0] === _lang) || LANGS[0])[1];
  const se = document.querySelector('.langopt[data-l="' + _lang + '"] .flag');
  const bay = document.getElementById('langFlag');
  const isim = document.getElementById('langName');
  if (bay && se) bay.innerHTML = se.innerHTML;
  if (isim) isim.textContent = ad;
  document.querySelectorAll('.langopt').forEach(function (o) {
    o.setAttribute('aria-selected', o.dataset.l === _lang ? 'true' : 'false');
  });
}

/* ---- ONCEDEN URETILMIS DIL SAYFALARI (build-i18n.py -> tr/ de/ fr/ es/) ----
   Arama motoru icin her dilin AYRI adresi var; Ingilizce kokte durur.
   Uretilen sayfalar <html data-static-lang="tr"> tasir.

   Boyle bir sayfada dil degistirmek YERINDE CEVIRI olamaz: kullanici
   /tr/ adresinde Almanca metin gorurdu, paylastigi link yanlis dili acardi
   ve <head>'de arama motoruna verdigimiz hreflang sozu tutulmazdi.
   Dil degistirmek = ADRES degistirmek.

   ⚠️ SADECE SUNUCUDA. file:// ile acilan yerel kopyada /tr/ gibi mutlak
   yollar coker; orada eski davranis (yerinde ceviri) surer. */
const _rjSunucuda = (location.protocol === 'http:' || location.protocol === 'https:');

function rjStatikUrl(l) {
  let yol = location.pathname;
  const m = yol.match(/^\/(tr|de|fr|es)(\/|$)/);
  if (m) yol = yol.slice(m[1].length + 1) || '/';   // mevcut dil onekini at
  if (l !== 'en') yol = '/' + l + (yol === '/' ? '/' : yol);
  return yol + location.hash;                        // ?lang= BILEREK dusuruluyor
}

function rjSetLang(l) {
  if (_rjSunucuda) { location.href = rjStatikUrl(l); return; }
  _lang = l;
  try { localStorage.setItem('rj_lang', l); } catch (e) {}
  document.documentElement.lang = l;
  _rjLangYuz();
  rjLangMenu(false);
  rjApplyLang();
}

/* Disari tiklayinca / Esc ile kapan. */
document.addEventListener('click', function (e) {
  if (!e.target.closest('.langsw')) rjLangMenu(false);
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') rjLangMenu(false);
});

document.addEventListener('DOMContentLoaded', () => {
  _rjLangYuz();
  /* <html lang> secili dili yansitmali: ekran okuyucu TR metni EN telaffuzuyla
     okumasin. Sayfa EN yazildigi icin isaret yalnizca TR'ye gecerken degisir. */
  document.documentElement.lang = _lang;
  /* Statik dil sayfasi ZATEN o dilde uretildi; yeniden cevirmek bos is
     (ceviri, ters tablodan Ingilizce'yi bulup ayni sonuca varirdi). */
  if (_lang !== 'en' && !document.documentElement.hasAttribute('data-static-lang'))
    rjApplyLang();
});
