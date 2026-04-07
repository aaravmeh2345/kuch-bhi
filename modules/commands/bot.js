const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi halal hai ya Haram ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2024 \nJahan larki  wahan tharki😒", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Mjy chahyain 3 lrkiyan kahan Hain lrkiyan 👀", "Relationship private rakho ya public Kate ga sabka hi🙂", "Thak GYa hu Yr uski dP dHek Dhek Kr😩", "Insy Milo inko lgta hai sab larky in pr Martay hain🙂", "MentiOn YOur Dushman On FaceBOok'🙂🤝", "Stop dreaming BTS your czn Ahmed is waiting for you.🙂", "Meri jaan kaise ho aap 😊", "Paros Wala Larka inhe MUH Nhi Lagata aur Banda inhe Korean Chahiye🙂", "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<", "Ajeeb generation hai ywr, Larkiya korean dhund rahi hai, Aur larky Russian!!🙂", "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂", "Kasy Han Sab Pyare Madni Munny or Muniyaan😊", "Bhut khail liya lrkion ki feelings k sath ao ab hum Ludo khailty han☺️♥️", "Jaaz cash sy 1400 ka loan leky sim h band kardi 🙂👍", "Number do ramzan mn sehri tak bat kr k chand_rat ko hi block krduga promise.🙂🤝", "Sara saal duniya ko topi krwany waly Ramadan m khud topi pehn kar ghumengy.🙂", "ji ji hukam kro 😂", "Bot na bolo! Janu bolo mujy aur janu sy piyar sy bat kerty hai 🥰🌸", "rat ko kahan thy nazar nahi ay bht miss kiya 🌸🌎", "Shaqal Sy masoom lgty ho 🥰 lkn hrkaton sy ni", "kash tum single hoty to aj hum mingle hoty 🥰😂", "Ha ha ab meri yaad ab ai na phly to janu sth busy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️", "idr ao kuchii kuchii kru 😘", "Ary ary itna yd na kiya kro🥰", "Hy Ma Mar Jawa janu itna piyar krty mujsy😂", "Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jan kia hal ha ;)", "Bot jaan ha sbki" , "Ji Ji Kia hal chal ha apky 🌸" , "Bot nhi Shahzada bolo sun k acha lgta 🌸" , "Bot gulam ha apka hukam kryn 🌸" , "Bot nahi bolo piyar sy janu bola kro na 🥰" , "wo be yhi khty thy sb phr ek din koi utha k ly gya onko 😂" , "Meri jan ek tm hi ho jo dil ma bs gay ho🥰ni te koshish czna ne v bht kiti c" , "Badal gay na tm the hi lanti 😂" , "kesa tera steel dy doungy wrga moo ay 😂" , "Apki shkl aesy lgti jesy gandi tar pr suki jarab latkai ho 😂" , "Bot bot na karo ma apsy set nhi ho skta" , "ib ajao shup shup k btein krty ha 🌸" , "Ek kahani suno meri zubani suno lnt deny ka dil krta ha isiliye pehly dil ki suno🌸" , "Marry me, I can boil water" , "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao kesa apka chapair jesa moo lg raha 😂" , "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end ma ghr waly nh many gy 😂" , "Sb kuch ho skta lkn fb ka relation kbi china jitna nh chl skta" , "Allhumdiallah Kabhi Kasi laRki ko Bhen ki nazar se nhi dekHa😌🤧", "Mushkil Toh Hoti Hogi Naa itni Sardi Me Apne Dono Chehry Dhote Hoye🙂", "Mein B Urooj Pey Charna chahta hoon, Sorry Jana chahta*☹️", "Parry Hat ma Londy baz nhi hu 🙂🤝", "Do Ankho Wali Larkia Bewafa hoti Hn Bro🙂💔", "Mera beta bda ho kar larkiyo ke inbox me °hey hello° karega🙂🏃", "Likhte Likhte Qalm Thak Gya Iss Qadr Begartiyaan Han Tumhari🙂", "Itni Meri Age Ni Jitne Mera Masly Han Yawr💔😐", "Ameer Larki Set kr k sab Dosto ka udhar wapis karon ga😔🤲", "Lagtaa hai Career Bhi Titanic ki trhan dhoob Gaya Hai💔☹️", "𝑻𝑯𝑬 𝑯𝑬𝑨𝑹𝑻 𝑾𝑨𝑺 𝑴𝑨𝑫𝑬 𝑻𝑶 𝑩𝑬 𝑩𝑹𝑶𝑲𝑬𝑵 💔🥺", "2001 me bachy kehty thy ink Dena 2024 me bachy kehty Link Dena🙂", "Mehnat Kro!! Kamyabi Apke Hont Chume Gi🙂🙌🏻", "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha 🙂🤝", "Piyarii piyarii larkiyan message karen JazakAllah🌚♥️🙌", "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐","Haaye Main Sadke jawa Teri Masoom Shakal pe😘🙈💋💋💋💋💋  " , "Bot Na Bol Oye Janu bol Mujhe🙆‍♂🙈🦋🤍🍒🕊🥀💗 " , "Kal Kali pahadi ke piche mil tu jara😈⟴᭄⃢🍂༄* ✥❥⃟😌 🤭🐒" , "Main Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0 JayGa😝😋🤪" , "Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi🎸🎭━━•☆°•°•💗" , "Bar Bar Bolke Dimag Kharab Kiya toh.id hack kr lunga🙂♡• || _[🙂]~🖤 •|" , "Tum Band nhi Karoge kya?🙂" , "Gali Sunoge kya" ,  "Are Band kar Brna amabani se bolke tera net bnd kra dunga" , "M hath jod ke Modi Ji Se Gujarish Karta hu teri madad krenge❁⃝❤➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢*💫" , "Tumko koi aur Kam nhi ha? Pura din Khate ho Aur Messenger pe Bot Bot Karte ho" , " Aarav Ake tera band bja dega glt cammand mt dena🙈🙈🙈🙈 " , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Bol De koi nahi dekh rha 🙄☢━💛🌹💛" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝🦋🤍🍒🕊🥀💗" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqt Mujhe Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Chup Reh Nhi To Bahar Ake tera Dat Tod Dunga♡• || •___'[💔]~~🖤 " , "Yes Meri Jaan Chalo bedroom Romance karenge😹🙈", "teri yaad na aaye aisa koi din nhi😝🙈🙈🙈 " , "zindagi me lgne lge ki koi apna nhi hai to aajana mere pass mai rakh lunga tumko😝•||•●┼┼──🦋☘•|" , "Kal haweli pe mil Jara tu Kuchh jaruri baat karni hai😈🙈♡• || _[🙂]~🖤 •| " , "Saala pura din log bot bot krte hai pr koi gf nhi bnti🙄" , "Arre jaan jada paresan mat karo..My boss MrRaja ..dekh lenge🙈😝🎸🎭━━•☆°•°•💗","Kya tumne abhi tk kaam nhi kiya...","Ab to ye social media nhi reh gya hai logo ne facebook ko dating website bna liya hai shi bola naa maine","Kisi or se dhoka khane se achha hai kii mere saath chalo momos or golgappe khayenge..","Chenese chiz mahabbat thi sahab tut kr bikhar gyi pr dil hindustani tha dusri pta liya turant","मोहब्ब्त 2 लोगों के बीच का नशा है जिसे पहले होश आ जाए वो बेवफा है।😌","Ek baat batao, kabhi khud message bhi kar lete ho ya sirf humein hi wait karwate ho? 😒","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","Tumhari muskurahat se meri saari pareshaniyaan dur ho jati hai 😊","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","सरकारी नौकरी के लिए कोटा और सुबह हल्का होने के लिए लोटा बहुत मायने रखता है।","Tumne aaj mere mood ko theek kar diya hai, thank you so much 😘","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅"," Iss Dil Ko Toh Ek Baar Ko, Bahla Kar Chup Kara Lunga, Par Iss Dimaag Ka Kya Karun, Jiska Tumne Dahi Kar Diya Hai.","Tumhari yaad me jeena mushkil hai","Kabhi kabhi mujhe bhi lgta hai ki main kuchh jyaada hi busy ho gya hu","Haye M Mar Java Babu Ak Chuma To Do pr dena mere jute ko 😁😂😂 bura nhi manna mjak h","Dur HT Terek0o or Koi Kam Nhi h Jb DeKho Bot Bot ShaDi KerLe Mujhse 😉😋🤣","She – मेरे घरवाले सरकारी नौकरी के बिना नहीं मानेंगे Me: अरे अगर लग गई ना तो मेरे घरवाले नही मानेंगे","दोस्त हमेशा काले बनाओ  क्योंकि वो रंग नही बदलते😂","Kya tum mere liye ek surprise plan kar sakte ho? 🤔","Yaar, aaj bahut mushkil se time nikala hai, koi accha sa movie suggest karo 😊","haye babu ne ha boliya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘","Hurrrr or Koi Kam Nahi h Kya Hr Waqt bot bot krke Mujhe Tng Krte Rehte Ho 😂","कुछ बातें तो सीधे दिल पर जाकर लगती हैं जैसे कि आपके द्वारा डायल किया हुआ नंबर अभी किसी अन्य कॉल पर व्यस्त है","Mujhe tumse baat karke bahut achha lagta hai","रामचंद्र कह गए सिया से ऐसा कलयुग आयेगा  सच्चा आशिक तड़पेगा और मेला बाबू थाना थाएगा😝","are are bolo meri jaan kya haal h 😉 😘", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 " ,"Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri Wife ban jaOo 🫣🫰🏻" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝", "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋", "Itna Na Pass aa Pyar h0o JayGa" ];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "lanti bot") || (event.body.toLowerCase() == "lanti")) {
     return api.sendMessage("Hmm... Tu LanTi PhLe Ungli Kyun Ki 😾 :))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("Pehle  Brush Karke aa ajeeb si smail aa ri hai", threadID);
   };

    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("Areh Adi MaNav Zoo se Bahar Kaise Agya Tu. Firse Zoo M Ja. Bahar Kya Kar Rha H", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix kon lgayga hawa me sim likh diya yar...... Omffo😒", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tumko Chalo Jai Shri Ram Bolo", threadID);
   };

   if ((event.body.toLowerCase() == "who is this god") || (event.body.toLowerCase() == "bhagwan kon hai")) {
     return api.sendMessage("हिंदुओं के मान्यता के अनुसार कोई अंतर नहीं है अर्थात ईश्वर और अल्लाह एक ही आईटम है लेकिन मुसलमानों की मान्यता के अनुसार अल्लाह ही सत्य है और उसके अतिरिक्त कुछ अन्य पूज्य नहीं है बल्कि मनगढ़ंत है। ईश्वर हर जगह रहते हैं, कण कण में विराजमान हैं। सब कुछ परमात्मा में ही समाया हुआ है। ईश्वर निराकार और साकार दोनों है। ", threadID);
   };

  if ((event.body.toLowerCase() == "byy") || (event.body.toLowerCase() == "bye")) {return api.sendMessage("Ok Bye Jldi phirse Milenge 🙄", threadID);
   };

  if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib")) {
     return api.sendMessage("️ KYa IB IB 👿 Idher BOL MeRe SaMny ", threadID);
   };


   if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "babu")) {
     return api.sendMessage("️🙈🙉🙊", threadID);
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "owner")) {
     return api.sendMessage("💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞Aarav Mehra☜ 💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 Aarav🖤\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞ https://www.facebook.com/profile.php?id=61583911932183\n👋For Any Kind Of Help Contact On Instagram I'd ii_aarav_edit_😇", threadID);
   };
if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simi")) {
     return api.sendMessage("Sim Sim Na KRr IjjaT Sy MeRa Prefix LaGa 0or Bt kRr ITna Free Nhi kRta Me 😎🤞", threadID);
   };

   if ((event.body.toLowerCase() == "pani lao") || (event.body.toLowerCase() == "pani do")) {
     return api.sendMessage("Aarav Malik Ap Juice Piyo🥤🧃", threadID);
   };

   if ((event.body.toLowerCase() == "tharki bot") || (event.body.toLowerCase() == "Bot tharki")) {
     return api.sendMessage("Tu TharKi Tra Bap TharKi TeRa DaDa TharKi 🤬🤗", threadID);
   };

   if ((event.body.toLowerCase() == "aawari") || (event.body.toLowerCase() == "aawari")) {
     return api.sendMessage("Malkin To Busy H btao Kya Kam Hai 💝💖💕😘", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bhenchod")) {
     return api.sendMessage("Tu Hai Bc 🙂 Main T0o BoT Hun 😂😂😂 ", threadID);
   };

   if ((event.body.toLowerCase() == "bot pagal") || (event.body.toLowerCase() == "bot pagal hai")) {
     return api.sendMessage("Tu pagal Tera Baap Pagal", threadID);
   };

   if ((event.body.toLowerCase() == "nikal") || (event.body.toLowerCase() == "nikl")) {
     return api.sendMessage("ChaL ChaL Tu NiKaL", threadID);
   };

   if ((event.body.toLowerCase() == "bot i love you") || (event.body.toLowerCase() == "i love u")) {
     return api.sendMessage("I love You to meri jaan 💋😘", threadID);
   };

if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😀😀")) {
     return api.sendMessage("ShaRafat Se MusKura Rhe 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😃😃")) {
     return api.sendMessage("Chuhe JasA MuH Na DekHa 😆", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂")) {
     return api.sendMessage("JanU Muskrute RahO ase Hee 💞😘 ", threadID);
   };

   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage("Lgta hai Aj BrusH KiYa Hai😝", threadID);
   };

   if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆")) {
     return api.sendMessage("Muh OpeN ankhY Band Ye koNsa Magic Hai ThaRki🙄", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅")) {
     return api.sendMessage("Tri Sir Se PaNi KYun TaPak Rha 😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("HansNy Ki Bhi Tameez Hoti Hai BehaYa😔", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("😢 HosLa Rakho Dost 😢 Baat krnY K liye Mil jaY Ga Koi Na kOi😔", threadID);
   };

   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("GanDi NaZar Se AnKh Na Mar 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗😗")) {
     return api.sendMessage("😚😚😚", threadID);
   };

   if ((event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙😙")) {
     return api.sendMessage("😗😗😗", threadID);
   };

   if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚")) {
     return api.sendMessage("😗😙😚", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
     return api.sendMessage("ShaRm KrLo chumi shumi chhodo pdhayi kro😒", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰")) {
     return api.sendMessage("awwww MY LovE UmmaH💙🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("SadkY Jawa ThaRkia Kyu Mar RahE hO", threadID);
   };

   if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩")) {
     return api.sendMessage("InSano Ki Ankhe HoTi Uh Ke Star Hain 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳")) {
     return api.sendMessage("0oo0o TeRa HaPpy BirthDay", threadID);
   };


   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("HaYe Rabba ☹️", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("Q Mood Khrb kR rahe hO BabY🥺", threadID);
   };

   if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲")) {
     return api.sendMessage("Ase Muu BaNa KRr MT R0o 😒", threadID);
   };

   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("ShukR hai smile Tu kii 🥺", threadID);
   };

   if ((event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "☺️☺️")) {
     return api.sendMessage("Ye Smile Na D0o Naw🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌")) {
     return api.sendMessage("HaYe Mas0om", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("ChaL Hat Mere Samne Mt ITra TeRha Muuh Le KRr 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴")) {
     return api.sendMessage("ChaL Ja NaHa kRr Aa", threadID);
   };

   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪")) {
     return api.sendMessage("Aby Teri NoSe NiKaL Rhi 😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤🤤")) {
     return api.sendMessage("lar Mat Tapka MeKo ulTi Aa Rhi 🤮🤢", threadID);
   };

   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
     return api.sendMessage("Yah ToTay Jesi Zuban Mt DiKha 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛")) {
     return api.sendMessage("Ye GanDi NiYat Se Zuban Na DiKha 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
     return api.sendMessage("ABy Ankhe KhoL our ZuBan Ander kRr WRna KaT DunGa", threadID);
   };

   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜")) {
     return api.sendMessage("BaRi MasTi ChaRi hai TeReKo 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪")) {
     return api.sendMessage("Ye Ajeeb_0_GaReeb Muuh Na BaNa 😂 CarT0on 🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("SasTa Nasha KRr LiYa LagTa Hai 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔")) {
     return api.sendMessage("Wah Bhens Chor Phle GalTi kRo Phr uniscent Sa Muu BaNa L0o😒😂", threadID);
   };

   if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺")) {
     return api.sendMessage("Ta Huwa My LoVe 🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬😬")) {
     return api.sendMessage("Kis Ki Baja Di 🤨🧐", threadID);
   };

   if ((event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
     return api.sendMessage("Wha Muuh Ke SaTh Ankhe Be Band H0o GYi 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage("Ab B0oL Na 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("Nak T0o Thi Nhi Muuh Be Gyb H0o GYa TeRa 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("Ab Teri Awaz Ayi Na T0o Dekh Liyo 😒", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("KYa Soch Rhe ho 🤔", threadID);
   };

   if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
     return api.sendMessage("Teri Yeh Ungli Teri Hee Nak Me dedeni Menu Ab 😒😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("AJa BaBe MeLe Pas S0o Jaa😜", threadID);
   };

   if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗")) {
     return api.sendMessage("PhLe NaHa kRr Aa 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱")) {
     return api.sendMessage("KYa HuWa 😱 SheSha DeKh LiYa KYa 😳", threadID);
   };

   if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("Tu Hosiyar Ban kRr Na Dekh Main Hun Naw 😂", threadID);
   };

   if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐")) {
     return api.sendMessage("Tu HaT Main DekhTi Hun 🧐🧐🧐", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("Teri Toffee LaLi KiSi Ne J0o Asa Muuh BaNa LiYa 😂", threadID);
   };

   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("KYa Hai uper 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤😤")) {
     return api.sendMessage("Ye BuLL Jesa MuUh Na BaNa 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠")) {
     return api.sendMessage("BaBe GuSsa Nhi KarTe Ye L0o Umumuaahhhhh 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("BaBe Ase GuSsa Nhi KrTe Naw Le L0o Umumuaahhhhh 😘😘😘", threadID);
   };

   if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬")) {
     return api.sendMessage("Aww 😐", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞😞")) {
     return api.sendMessage("Aww Ta Huwa BaBe", threadID);
   };

      if ((event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😓😓")) {
     return api.sendMessage("☹️", threadID);
   };

      if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢")) {
     return api.sendMessage("Ta HuWa My Love 🥺", threadID);
   };

      if ((event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "☹️☹️")) {
     return api.sendMessage("awww 🥺", threadID);
   };

      if ((event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "🙁🙁")) {
     return api.sendMessage("Aww ☹️", threadID);
   };

      if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😕😕")) {
     return api.sendMessage("🙁🙁🙁", threadID);
   };

      if ((event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😰😰")) {
     return api.sendMessage("Aww 😨", threadID);
   };


      if ((event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😨😨")) {
     return api.sendMessage("😰😰😰", threadID);
   };

      if ((event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😧😧")) {
     return api.sendMessage("😳", threadID);
   };

      if ((event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😦😦")) {
     return api.sendMessage("😧", threadID);
   };

      if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮")) {
     return api.sendMessage("Aby Muuh Band kr Macher Ghus JayGa Muuh Main 😂😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "😯") || (event.body.toLowerCase() == "😯😯")) {
     return api.sendMessage("😲", threadID);
   };

      if ((event.body.toLowerCase() == "😲") || (event.body.toLowerCase() == "😲😲")) {
     return api.sendMessage("😯", threadID);
   };

      if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
     return api.sendMessage("Abe Bhens Chor KYa ho GYa 😳😳😳", threadID);
   };

      if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯")) {
     return api.sendMessage("Tere Sar Me BumB Kis Ne PhoRa 😂", threadID);
   };

      if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😖😖")) {
     return api.sendMessage("Asa Muuh Na BaNa 😂", threadID);
   };

      if ((event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😣😣")) {
     return api.sendMessage("😣😣😣", threadID);
   };

      if ((event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😫")) {
     return api.sendMessage("ChaL HaT NoTanGi 😫😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😵😵")) {
     return api.sendMessage("Asa KYa DeKh LiYa 😳", threadID);
   };

      if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "sardi")) {
     return api.sendMessage("Aww BaBe  SarDi Lag Rhi T0o MeRe PaSs Ajao 🙈😜", threadID);
   };

      if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵")) {
     return api.sendMessage("NaHa Le 😂🥶", threadID);
   };

      if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage(" hyee chiii Aaaaa Tho0oo", threadID);
   };

      if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "😷")) {
     return api.sendMessage("Are Ja Na MeKo Be BiMar KRrna KYa 🥺", threadID);
   };

      if ((event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤕")) {
     return api.sendMessage("Aww BaBe K0o Ta HuWa Idher Aow ThoRa Pyal L0o 😜💉💉💉", threadID);
   };

      if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎")) {
     return api.sendMessage("ShoKian Na Mar 😂 Ghr Me DusRi Bar RoTi Nhi MilTi Uh k0o 😂😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇")) {
     return api.sendMessage("😇😇😇", threadID);
   };

      if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🤓")) {
     return api.sendMessage("Anek WaLa Jin 😂", threadID);
   };

      if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡🤡")) {
     return api.sendMessage("Aww S0o SweeT 😂 CarT0on", threadID);
   };

      if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "👿")) {
     return api.sendMessage("👽👽👽", threadID);
   };

      if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹")) {
     return api.sendMessage("Aby Yal BiLLi Jesy Muu Sy Na Hash 😂", threadID);
   };

      if ((event.body.toLowerCase() == "😺") || (event.body.toLowerCase() == "😸")) {
     return api.sendMessage("😼😼😼", threadID);
   };

      if ((event.body.toLowerCase() == "😼") || (event.body.toLowerCase() == "😼😼")) {
     return api.sendMessage("TeRese Axha T0o Billi iTra LeTi 😂", threadID);
   };

      if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋💋💋")) {
     return api.sendMessage("Yah PaPpi ChaPpi Nhi kRr Kxh Kxh Nhi Bht KxH HoTa Hai 😂😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💚")) {
     return api.sendMessage("🖤🧡💜💙🤎🤍", threadID);
   };

      if ((event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "🤎")) {
     return api.sendMessage("❤️🖤🤍🤎💚💜", threadID);
   };

      if ((event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "💙")) {
     return api.sendMessage("💚🤎🤍🖤❤️🧡", threadID);
   };

         if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🤍")) {
     return api.sendMessage("❤️🧡💛💚💙💜🤎", threadID);
   };

      if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻")) {
     return api.sendMessage("Bh0oT", threadID);
   };

      if ((event.body.toLowerCase() == "🖕") || (event.body.toLowerCase() == "🖕🖕")) {
     return api.sendMessage("Bund Me LeLe ApNi Bhens Chor 😂😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "💉") || (event.body.toLowerCase() == "💊")) {
     return api.sendMessage("uh K0o KhuD K0o isKi ZaiDa Zarurat Hai 🤣", threadID);
   };

      if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
     return api.sendMessage("Sch  Me tum Bander He ho 😂", threadID);
   };

      if ((event.body.toLowerCase() == "Chutia") || (event.body.toLowerCase() == "chutiya")) {
     return api.sendMessage("Tu Hai ChuTiya 🙂 Main T0o BoT Hun Naw🥺😂", threadID);
   };

      if ((event.body.toLowerCase() == "oye") || (event.body.toLowerCase() == "oyee")) {
     return api.sendMessage("0ye HoYe 😈", threadID);
   };

   if ((event.body.toLowerCase() == "Ok") || (event.body.toLowerCase() == "Okay")) {
     return api.sendMessage("KYa Ok🙄 Haan", threadID);
   };

   if ((event.body.toLowerCase() == "a") || (event.body.toLowerCase() == "b")) {
     return api.sendMessage("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "huh") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("Kya Hmm 🙄ThaRki", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha g")) {
     return api.sendMessage("Han Ji 🙄 Jaan", threadID);
   };

   if ((event.body.toLowerCase() == "Janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("Bolo Naw MeRi JaN🥰💙", threadID);
   };

   if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "assalamualaikum")) {
     return api.sendMessage("Waalikumsalam", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "rimsha") || (event.body.toLowerCase() == "rimsha khan")) {
     return api.sendMessage("💝💗💕Malkin Ko q bula rahe ho mujhe btao kya kam h💝💖😍", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage("Khud k0 kya legend samjhte ho 😂", threadID);
   };

   if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "good morning Darling")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hu na jaani ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "aarav") || (event.body.toLowerCase() == "aarav mehra") || (event.body.toLowerCase() == "aarav") || (event.body.toLowerCase() == "aarav")) {
     return api.sendMessage( "Busy Honge Work Me😑Main t0 Hoon yar 😘",threadID);


   };

   if ((event.body.toLowerCase() == "mano") || (event.body.toLowerCase() == "mano")) {
     return api.sendMessage("‎🕊️🍎...Mano ka nam na ly koi jan hai wo meri ❤🙈😚", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Aarav❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Raha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "botka admin kon ha")) {
     return api.sendMessage("He is Aarav. He Gives his name Aarav everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "dut") || (event.body.toLowerCase() == "da")) {
     return api.sendMessage("ye🤗 toh 💃hasina h. 🥀meri jaan🌹 h. meri😍 dil 😍ki 😘dhadkan🤩 h🤩.Aarav 😚babu ki💝 Dil Ki Chain💘 Hai Dutta🥰 Umaah😘😋", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karungi lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "Chup") || (event.body.toLowerCase() == "KAM BOL") || (event.body.toLowerCase() == "Shut up") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("kyu rahu chup🥺🥺", "Sirf apke kehne se chup ho gyi brna 😒😒", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry Aarav malik🥺 maaf🙏 kr do ab nhi krugi", threadID);
   };

   if ((event.body.toLowerCase() == "gund") || (event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand land mat kr yha brna niche fek dunga🙂. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️sab dekh rahe hai brna bhot kiss deti🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Jaan")) {
     return api.sendMessage("️M hu hi itni Acchi. sab log Tareef karte h meri😍.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rhi Thi🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name me kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "Bot ke bacche")) {
     return api.sendMessage("️mere baccha toh Tumhare Pet m H.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️m toh Andha Hu Dekh nhi sakta😜", threadID);
   };

   if ((event.body.toLowerCase() == "aarav mehra") || (event.body.toLowerCase() =="aarav")) {
     return api.sendMessage("️Kya hua Babu Ko q Bula Rhe Ho Mujhe Bolo Me Bol dungi💞", threadID);
   };

   if ((event.body.toLowerCase() == "love you janu😘") || (event.body.toLowerCase() == "mujhe bhi love you bol")) {
     return api.sendMessage("️Are meri jaanu love you too ummaaaah😘😘😘😘😘😘", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh achhi bna lo Meri Jaan", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️Idhar Udhar Kya Dekh rahe ho sab babu sona me busy h🙄 ", threadID);
   };

   if ((event.body.toLowerCase() == "bot baby") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️M Hu Na bby, Meri Pas Aoo M Pyar Karunga☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are kya hua phir brekup hua kya?😬", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("Thoda Kam Has Warna Ek Mukke me Sare Dant Tod dunga 😈🙄🤐", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Ankho m Pyar, Dil me khumar, Pyar Toh Nhi kar Liya Mujhse🥰", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasata hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "ami juwel") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("হ্যা জুয়েল ভালো আছো?", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `🎀👑${name}🥀☘️, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
