function clickAllCheck(){for(var e=0;e<document.settingForm.songs.length;e++)document.settingForm.songs[e].checked=!0}function clickAllClear(){for(var e=0;e<document.settingForm.songs.length;e++)document.settingForm.songs[e].checked=!1}function ChooseButtonClick(){var e=[],a=[],i=0,n="",t=!1,i=document.getElementById("js-quantity").value,o=parseInt(i);if(o>101)return alert("曲数は1~100の間で設定してください。"),!1;for(var r=0;r<document.settingForm.length;r++)if(document.settingForm.songs[r].checked){t=!0;var a=a.concat(document.settingForm.songs[r].value)}if(a.indexOf("newsNippon")>=0)var e=e.concat(newsNippon);if(a.indexOf("yell")>=0)var e=e.concat(yell);if(a.indexOf("akaku")>=0)var e=e.concat(akaku);if(a.indexOf("cherish")>=0)var e=e.concat(cherish);if(a.indexOf("teppen")>=0)var e=e.concat(teppen);if(a.indexOf("sayaHadashi")>=0)var e=e.concat(sayaHadashi);if(a.indexOf("hoshimeza")>=0)var e=e.concat(hoshimeza);if(a.indexOf("weeeek")>=0)var e=e.concat(weeeek);if(a.indexOf("taiyono")>=0)var e=e.concat(taiyono);if(a.indexOf("summerTime")>=0)var e=e.concat(summerTime);if(a.indexOf("happyBirthday")>=0)var e=e.concat(happyBirthday);if(a.indexOf("abo")>=0)var e=e.concat(abo);if(a.indexOf("sakuraGirl")>=0)var e=e.concat(sakuraGirl);if(a.indexOf("fighting")>=0)var e=e.concat(fighting);if(a.indexOf("chanka")>=0)var e=e.concat(chanka);if(a.indexOf("worldPoko")>=0)var e=e.concat(worldPoko);if(a.indexOf("one")>=0)var e=e.concat(one);if(a.indexOf("kaguya")>=0)var e=e.concat(kaguya);if(a.indexOf("cuum")>=0)var e=e.concat(cuum);if(a.indexOf("yonjushi")>=0)var e=e.concat(yonjushi);if(a.indexOf("hikariTouch")>=0)var e=e.concat(hikariTouch);if(a.indexOf("koishira")>=0)var e=e.concat(koishira);if(a.indexOf("emma")>=0)var e=e.concat(emma);if(a.indexOf("lps")>=0)var e=e.concat(lps);if(a.indexOf("blue")>=0)var e=e.concat(blue);if(a.indexOf("ikiro")>=0)var e=e.concat(ikiro);if(a.indexOf("topLove")>=0)var e=e.concat(topLove);if(a.indexOf("touch")>=0)var e=e.concat(touch);if(a.indexOf("pacific")>=0)var e=e.concat(pacific);if(a.indexOf("color")>=0)var e=e.concat(color);if(a.indexOf("live")>=0)var e=e.concat(live);if(a.indexOf("newsBest")>=0)var e=e.concat(newsBest);if(a.indexOf("newsAlbum")>=0)var e=e.concat(newsAlbum);if(a.indexOf("white")>=0)var e=e.concat(white);if(a.indexOf("quartetto")>=0)var e=e.concat(quartetto);if(a.indexOf("neverland")>=0)var e=e.concat(neverland);if(a.indexOf("epcotia")>=0)var e=e.concat(epcotia);if(a.indexOf("worldista")>=0)var e=e.concat(worldista);if(a.indexOf("story")>=0)var e=e.concat(story);if(a.indexOf("biren")>=0)var e=e.concat(biren);if(a.indexOf("tenTh")>=0)var e=e.concat(tenTh);if(a.indexOf("whiteLive")>=0)var e=e.concat(whiteLive);if(a.indexOf("quartettoLive")>=0)var e=e.concat(quartettoLive);if(a.indexOf("neverlandLive")>=0)var e=e.concat(neverlandLive);if(a.indexOf("epcotiaLive")>=0)var e=e.concat(epcotiaLive);if(a.indexOf("strawberry")>=0)var e=e.concat(strawberry);if(a.indexOf("epcotiaEnc")>=0)var e=e.concat(epcotiaEnc);if(a.indexOf("koya")>=0)var e=e.concat(koya);if(a.indexOf("shige")>=0)var e=e.concat(shige);if(a.indexOf("mass")>=0)var e=e.concat(mass);if(a.indexOf("tego")>=0)var e=e.concat(tego);if(t>0)for(var c=0;c<o;c++){target=document.getElementById("js-result-output");var E=Math.floor(Math.random()*e.length);n=n+"<p>"+e[E]+"</p>",target.innerHTML=n}t||alert("曲を選択してください。")}var newsNippon=["NEWSニッポン","ありがとう・今","Private Hearts"],yell=["希望～Yell～","Stand Up","Good News!","LET’S GO TO THE PLANETS"],akaku=["紅く燃ゆる太陽","忘れないさ～LIFE GOES ON～","DREAMS","BEACH ANGEL"],cherish=["チェリッシュ","Party Time","SHOCK ME","Devil or Angel"],teppen=["TEPPEN","夢の数だけ愛が生まれる","NANDE×2 DAME","Fiesta"],sayaHadashi=["サヤエンドウ","裸足のシンデレラボーイ"],hoshimeza=["星をめざして","Boom! Boom! POWER","紅い花","Best Friend"],weeeek=["weeeek","with me","Why","Rainbow"],taiyono=["太陽のナミダ","美しすぎて Beautiful Eyes","バンビーナ","Lady Spider"],summerTime=["SUMMER TIME","EASY COME, EASY GO","Liar","Baby! Be My Baby!"],happyBirthday=["Happy Birthday","ガンガンガンバッテ","GAME of LOVE","Push On!"],abo=["恋のABO","ラビリンス","OPEN YOUR EYES","Share（Live at TOKYO DOME）"],sakuraGirl=["さくらガール","あなたがとなりにいるだけで","Love Melodies","FREEDOM","さくらガール（A cappella version）"],fighting=["Fighting Man","ガムシャラ Cha Cha Cha","Wake Up","Winter Moon","愛はシンプルなカレーライス"],chanka=["チャンカパーナ","フルスイング","Starry","ヴァンパイアはかく語りき","PeekaBoo...","Addict"],worldPoko=["WORLD QUEST","ポコポンペコーリャ","Hello","Quntastic!","36℃"],one=["ONE -for the win-","SEVEN COLORS","君がいた夏","FLYING BIRD"],kaguya=["KAGUYA","バタフライ","TRAVeLiNG","勿忘草","TOP OF THE WORLD"],cuum=["チュムチュム","日はまた昇る","メガロマニア","Sweet Martini","ささぶね"],yonjushi=["四銃士","ANTHEM","永遠","SPEAKER"],hikariTouch=["ヒカリノシズク","Touch","星の旅人たち","whis･per"],koishira=["恋を知らない君へ","Smile","サマラバ","Distance"],emma=["EMMA","Snow Dance","スノードロップ","さくらガール -Represent NEWS Mix-","I･ZA･NA･I･ZU･KI -Represent NEWS Mix-"],lps=["LPS","NEWSICAL","madoromi","チェリッシュ -Represent NEWS Mix-","真冬のナガレボシ -Represent NEWS Mix-"],blue=["BLUE","Cascade","夜よ踊れ","NEWSニッポン -Represent NEWS Mix-","Stand Up -Represent NEWS Mix-"],ikiro=["｢生きろ｣","Bring Back the Summer","LVE","希望～Yell～ -Represent NEWS Mix-","エンドレス・サマー -Represent NEWS Mix-"],topLove=["トップガン","Love Story","Dragonism","weeeek -Represent NEWS Mix-","夢の数だけ愛が生まれる -Represent NEWS Mix-"],touch=["希望～Yell～","きらめきの彼方へ","紅く燃ゆる太陽","I・ZA・NA・I・ZU・KI","LOVE SONG","ずっと","High TEN!","恋焼け","疾走！Friday Night","Say Hello","チェリッシュ","柔らかなままで","NEWSニッポン","夢の数だけ愛が生まれる<A cappella version＞","Stand Up＜Rock version＞","チェリッシュ＜Ryoji（from ケツメイシ）Remix＞"],pacific=["愛のマタドール","サヤエンドウ","TEPPEN","Change the World","君想フ夜","アリバイ","code","チラリズム","愛なんて","なんとかなるさ","ゴメンネ ジュリエット","裸足のシンデレラボーイ","星をめざして","真冬のナガレボシ","その笑顔 僕に見せて"],color=["weeeek","STARDUST","SUMMER TIME","SNOW EXPRESS","Forever","MOLA","ケセナイ","ordinary","みんながいる世界をひとつに愛をもっとGive & Takeしましょう","ムラリスト","太陽のナミダ","Smile Maker","Happy Birthday","FLY AGAIN","永遠色の恋"],live=["恋のABO","LIVE","生まれし君へ","Supernatural","秋の空","2人/130000000の奇跡","Dancin’ in the Secret","ワンダーランド","さくらガール","BE FUNKY!","D.T.F","内容の無い手紙","エンドレス・サマー","Share","Forever（Unplugged Ver.）"],newsBest=["NEWSニッポン","希望～Yell～","紅く燃ゆる太陽","チェリッシュ","TEPPEN","サヤエンドウ","裸足のシンデレラボーイ","星をめざして","weeeek","太陽のナミダ","SUMMER TIME","Happy Birthday","恋のABO","さくらガール","Fighting Man","エンドレス・サマー","Share","I・ZA・NA・I・ZU・KI","SNOW EXPRESS","DREAMS","FLY AGAIN","Smile Maker","Forever","バンビーナ","きらめきの彼方へ","夢の数だけ愛が生まれる","2人/130000000の奇跡","真冬のナガレボシ","チェリッシュ ＜Ryoji（from ケツメイシ）Remix＞","永遠色の恋","Love Addiction","Private Hearts","Uri Sarang","暁-AKATSUKI-","Pumpkin","SUPERMAN","HAPPY MUSIC","カカオ","シャララタンバリン","ごみ箱","Stars","愛なんて"],newsAlbum=["WORLD QUEST","4+FAN","渚のお姉サマー","ポコポンペコーリャ","恋祭り","Greedier","ベサメ･ムーチョ～狂おしいボレロ～","チャンカパーナ","Dance in the dark","HIGHER GROUND","フルスイング","CRY","Beautiful Rain","Dreamcatcher","Remedy","Lovin’ U"],white=["MR.WHITE","KAGUYA","NYARO","SEVEN COLORS","Weather NEWS","SuperSONIC","BYAKUYA","ONE -for the win-","White Love Story","愛言葉","ロメオ 2015","Skye Beautiful","あなた","ESCORT"],quartetto=["QUARTETTO","ANTHEM","シリウス","Touch","NEWSKOOL","四銃士","Wonder","ライフ","チュムチュム","Departure","ヒカリノシズク","LIS’N","愛のエレジー","星の王子さま","Encore"],neverland=["NEVERLAND","アン･ドゥ･トロワ","EMMA","Brightest","Silent Love","恋を知らない君へ","ミステリア","BLACK FIRE","ORIHIME","流れ星","U R not alone","I’m coming","ニャン太","あやめ","FOREVER MINE"],epcotia=["EPCOTIA","KINGDOM","TWINKLE STAR","LPS","恋する惑星","JUMP AROUND","AVALON","IT’S YOU","UFO","EROTICA","BLACKHOLE","星に願いを","イノセンス","HAPPY ENDING","プラトニック","銀座ラプソディ","氷温","Thunder"],worldista=["WORLDISTA","DEAD END","CASINO DRIVE","インビジブル ダンジョン","SPIRIT","BLUE","FIGHTERS.COM","Digital Love","リボン","サンタのいないクリスマス","Strawberry","｢生きろ｣","Symphony of Dissonance","DoLLs","Going that way","世界"],story=["STORY","SEVEN","SUPERSTAR","何度でも","STAY WITH ME","Perfect Lover","Love Story","エス","トップガン","君の言葉に笑みを","クローバー","NEW STORY","戀","Narrative","STAY ALIVE","プロポーズ"],biren=["チャンカパーナ","NEWSニッポン","weeeek","Happy Birthday","Fighting Man","恋のABO","BE FUNKY!","BEACH ANGEL","SUMMER TIME","LET’S GO TO THE PLANETS","愛はシンプルなカレーライス","あなたがとなりにいるだけで","紅い花","星をめざして","DREAMS","希望～Yell～","きらめきの彼方へ","サヤエンドウ","希望～Yell～","裸足のシンデレラボーイ","TEPPEN","Addict","ヴァンパイアはかく語りき","エンドレス･サマー","Share","I･ZA･NA･I･ZU･KI","チェリッシュ","PeekaBoo...","Starry","バンビーナ","Dancin’ in the Secret","紅く燃ゆる太陽","Smile Maker","2人/130000000の奇跡","フルスイング","さくらガール","NEWSニッポン","チャンカパーナ","weeeek","チャンカパーナ"],tenTh=["WORLD QUEST","チャンカパーナ","4+FAN","渚のお姉サマー","恋祭り","フルスイング","Good News!","NEWSニッポン","希望～Yell～","太陽のナミダ","ポコポンペコーリャ","エンドレス･サマー","Greedier","Remedy","SHOCK ME 2013","BE FUNKY!","Beautiful Rain","2人/130000000の奇跡","SUMMER TIME","チェリッシュ","Dreamcatcher","Lovin’U","Liar","ベサメ･ムーチョ～狂おしいボレロ～","Dance in the dark","Fighting Man","紅く燃ゆる太陽","TEPPEN","サヤエンドウ","裸足のシンデレラボーイ","星をめざして","さくらガール","恋のABO","weeeek","HIGHER GROUND","CRY","Happy Birthday","4+FAN","恋祭り","愛言葉～てをひいて～"],whiteLive=["MR.WHITE","ONE -for the win-","恋のABO","NYARO","weeeek","恋祭り","バタフライ","フルスイング","ロメオ 2015","ESCORT","KAGUYA","チャンカパーナ","WORLD QUEST","さくらガール","Weather NEWS","勿忘草","あなた","Skye Beautiful","BYAKUYA","SuperSONIC","SNOW EXPRESS","Winter Moon","NEWSニッポン","希望～Yell～","サヤエンドウ","ポコポンペコーリャ","4+FAN","SEVEN COLORS","White Love Story","渚のお姉サマー","愛言葉","チュムチュム","NYARO"],quartettoLive=["QUARTETTO","ANTHEM","チャンカパーナ","希望～Yell～","チュムチュム","KAGUYA","太陽のナミダ","Happy Birthday","チェリッシュ","星の王子さま","LIS’N","Touch","NEWSKOOL","weeeek","Departure","愛言葉","四銃士","星をめざして","愛のエレジー","Encore","I･ZA･NA･I･ZU･KI","Wonder","シリウス","NEWSニッポン","ライフ","サヤエンドウ","恋のABO","TEPPEN","NYARO","ヒカリノシズク","ONE -for the win-","さくらガール","恋祭り","weeeek"],neverlandLive=["NEVERLAND","アン･ドゥ･トロワ","EMMA","KAGUYA","恋祭り","D.T.F","4+FAN","あやめ","Brightest","シリウス","Snow Dance","スノードロップ","Touch","ニャン太","恋を知らない君へ","フルスイング","恋のABO","サマラバ","NYARO","ORIHIME","FOREVER MINE","Silent Love","ミステリア","BYAKUYA","さくらガール","I’m coming","BLACK FIRE","バンビーナ","ANTHEM","チャンカパーナ","チュムチュム","渚のお姉サマー","weeeek","ポコポンペコーリャ","流れ星","U R not alone"],epcotiaLive=["EPCOTIA","KINGDOM","TWINKLE STAR","紅く燃ゆる太陽","LIVE","LPS","NYARO","恋する惑星","銀座ラプソディ","Sweet Martini","madoromi","チャンカパーナ","JUMP AROUND","BLACKHOLE","Thunder","氷温","AVALON","IT’S YOU","星に願いを","プラトニック","UFO","EMMA","EROTICA","メガロマニア","4＋FAN","D.T.F","weeeek","U R not alone","イノセンス","HAPPY ENDING"],strawberry=["BLUE","恋祭り","チュムチュム","サマラバ","BEACH ANGEL","恋のABO","weeeek","Happy Birthday","愛言葉","チャンカパーナ","SUMMER TIME","フルスイング","U R not alone","青いベンチ","Share","Touch","エンドレス･サマー","ヒカリノシズク","夜よ踊れ","JUMP AROUND","紅く燃ゆる太陽","BLACK FIRE","NEWSニッポン","渚のお姉サマー","NYARO","星をめざして","チェリッシュ","4＋FAN","Stand Up","希望～Yell～","SHOCK ME 2013","KAGUYA","サヤエンドウ","裸足のシンデレラボーイ","BYAKUYA","さくらガール","Fighting Man","LPS","｢生きろ｣"],epcotiaEnc=["EPCOTIA","TWINKLE STAR","U R not alone","SPIRIT","紅く燃ゆる太陽","Stand Up","NEWSニッポン","LIVE","weeeek","恋する惑星","IT’S YOU","SHOCK ME 2013","チャンカパーナ","夜よ踊れ","LVE","JUMP AROUND","BLACK FIRE","Strawberry","ずっと一緒さ","DANCIN’☆TO ME","カカオ","茜空","Cascade","AVALON","EROTICA","UFO","メガロマニア","BLACKHOLE","LPS","恋祭り","NYARO","渚のお姉サマー","EMMA","チュムチュム","KAGUYA","Fighting Man","裸足のシンデレラボーイ","TEPPEN","希望～Yell～","4＋FAN","｢生きろ｣","HAPPY ENDING","BLUE"],koya=["Love Addiction","Private Hearts","Uri Sarang","Starry","Beautiful Rain","ロメオ 2015","愛のエレジー","ニャン太","銀座ラプソディ","Going that way","STAY ALIVE"],shige=["HAPPY MUSIC","シャララタンバリン","カカオ","ヴァンパイアはかく語りき","Dreamcatcher","ESCORT","星の王子さま","あやめ","氷温","世界","Narrative"],mass=["Pumpkin","SUPERMAN","暁-AKATSUKI-","PeekaBoo...","Remedy","Skye Beautiful","LIS’N","FOREVER MINE","Thunder","Symphony of Dissonance","戀"],tego=["Stars","ごみ箱","Addict","Lovin’ U","あなた","Encore","I’m coming","プラトニック","DoLLs","プロポーズ"];