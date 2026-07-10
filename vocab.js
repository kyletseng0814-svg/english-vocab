// 我的英文單字庫 — 依字首字母排序
// 由 Claude 在查單字時自動更新，拼字練習.html 會讀取這份資料
const VOCAB = [
  {
    w: "gist",
    pos: "n.",
    phon: "dʒɪst",
    zh: "要點、主旨、大意",
    en: "the main point or general meaning of something said or written",
    ex: "I didn't catch every word, but I got the gist of his speech.",
    usage: "📝 考試：多益中頻，常見於閱讀/聽力主旨題情境，如 What is the gist of the article?\n💬 口語：很常用，固定搭配 get the gist（抓到重點）、The gist of it is...（重點就是⋯⋯）、I got the gist.（我大概懂了）",
    syn: "summary",
    synNote: "summary 是實際整理出來的「摘要」，具體可數；gist 是抽象的「核心大意」，幾乎都搭配 get/catch the gist 使用",
    added: "2026-07-10"
  },
  {
    w: "glare",
    pos: "v. / n.",
    phon: "ɡler",
    zh: "怒視、瞪；（光線）刺眼、強光",
    en: "to look at someone in an angry way; (of light) to shine too brightly and unpleasantly",
    ex: "She glared at him when he interrupted her.",
    usage: "📝 考試：多益中低頻，多出現在閱讀的敘事或產品描述；常見搭配 glare at sb（瞪某人）、the glare of the sun（刺眼的陽光）\n💬 口語：常用，生氣瞪人說 glare at；3C 產品情境也很常見，如 screen glare（螢幕反光）、anti-glare（防眩光）",
    syn: "stare",
    synNote: "stare 是中性地「盯著看」（好奇、發呆、沒禮貌地直視）；glare 帶怒氣，是「瞪」。另外 glare 有光線刺眼的意思，stare 沒有",
    added: "2026-07-10"
  },
  {
    w: "grace",
    pos: "n.",
    phon: "ɡreɪs",
    zh: "優雅；恩惠、善意；寬限（期）",
    en: "smooth and elegant movement or behavior; extra time given to do something (grace period)",
    ex: "The bank gives you a 15-day grace period before charging interest.",
    usage: "📝 考試：多益中高頻，重點是 grace period（寬限期），常出現在帳單、貸款、合約情境；優雅義則多在人物描述\n💬 口語：常用，如 with grace（優雅地、大方地）、handle it with grace（得體應對）；信用卡帳單上的 grace period 也是生活常見詞",
    syn: "elegance",
    synNote: "elegance 偏外在的精緻、有品味（穿著、設計）；grace 偏動作和態度的自然流暢、從容大方，還多了「恩惠、寬限」的意思，elegance 沒有",
    added: "2026-07-10"
  },
  {
    w: "grain",
    pos: "n.",
    phon: "ɡreɪn",
    zh: "穀物、穀粒；顆粒；（木頭）紋理",
    en: "the seeds of crops such as wheat or rice used as food; a very small hard piece of something; the natural line pattern in wood",
    ex: "Whole grain bread is healthier than white bread.",
    usage: "📝 考試：多益中頻，常見於食品、菜單、農業與健康主題，高頻搭配 whole grain（全穀物）、grain exports（穀物出口）\n💬 口語：常用，健康飲食話題說 whole grains；慣用語 take it with a grain of salt（聽聽就好、別盡信）和 go against the grain（違背常理/本性）都很常見",
    syn: "cereal",
    synNote: "cereal 指「穀類作物」整體或早餐穀片（cornflakes 那種）；grain 指穀粒本身，也能當「一顆、一粒」和「木紋」用，如 a grain of sand（一粒沙）",
    added: "2026-07-10"
  },
  {
    w: "grand",
    pos: "adj. / n.",
    phon: "ɡrænd",
    zh: "宏偉的、盛大的；重大的；（口語）一千元",
    en: "impressive and large in size, appearance, or importance; (informal) a thousand dollars",
    ex: "The store is having a grand opening sale this weekend.",
    usage: "📝 考試：多益高頻！grand opening（盛大開幕）是廣告題型的經典必考詞，另有 grand prize（大獎）、grand total（總計）\n💬 口語：美式口語 a grand ＝ 一千美元，如 He makes five grand a month.（他月薪五千美元）；形容建築氣派也常說 It looks so grand.",
    syn: "magnificent",
    synNote: "magnificent 更強烈，強調「壯麗到令人讚嘆」（風景、宮殿）；grand 強調規模大、氣派、正式，而且有 grand opening 這類固定商用搭配和「一千元」的口語用法",
    added: "2026-07-10"
  },
  {
    w: "hall",
    pos: "n.",
    phon: "hɔːl",
    zh: "大廳、門廳；會堂、禮堂；走廊",
    en: "a large room or building used for events and meetings; the area just inside the entrance of a building; a corridor",
    ex: "The award ceremony will be held in the main hall at 7 p.m.",
    usage: "📝 考試：多益高頻場所字，常見於活動公告與地點題：city hall（市政廳）、concert hall（音樂廳）、exhibition hall（展覽館）、conference hall（會議廳）\n💬 口語：天天用，美式說走廊是 hallway，指路常說 down the hall（走廊那頭），如 The restroom is down the hall on your left.",
    syn: "lobby",
    synNote: "lobby 專指飯店、辦公大樓「入口的等候接待區」（有沙發櫃檯那種）；hall 範圍更廣，可以是大會堂、門廳或走廊。飯店大廳說 lobby 比 hall 道地",
    added: "2026-07-10"
  },
  {
    w: "inch",
    pos: "n. / v.",
    phon: "ɪntʃ",
    zh: "英寸、吋（2.54 公分）；v. 緩慢移動",
    en: "a unit of length equal to 2.54 centimeters (1/12 of a foot); to move very slowly and carefully",
    ex: "The new laptop has a 15-inch display.",
    usage: "📝 考試：多益中頻，幾乎都出現在產品規格與尺寸情境：a 27-inch monitor（27 吋螢幕）、two inches wide（兩吋寬）；注意「數字-inch」當形容詞時 inch 不加 s\n💬 口語：買 3C 天天用（螢幕、手機都講吋）；慣用語 inch by inch（一點一點地）、The traffic inched forward.（車陣緩慢前進）",
    syn: "foot",
    synNote: "都是英制長度單位：1 foot（英尺）＝ 12 inches ＝ 30.48 公分，身高常用 foot（5'11\" 唸 five eleven）；inch 用在小尺寸如螢幕、腰圍。台灣講的「螢幕幾吋」就是 inch",
    added: "2026-07-10"
  },
  {
    w: "negotiate",
    pos: "v.",
    phon: "nɪˈɡoʊʃieɪt",
    zh: "談判、協商",
    en: "to discuss something formally in order to reach an agreement",
    ex: "We negotiated a better price with the supplier.",
    usage: "📝 考試：多益高頻，商務情境（合約、價格、條件）必考，常見搭配 negotiate a contract / price / deal\n💬 口語：商業場合常用，如 The price is negotiable.（價格可以談）；日常閒聊較少出現",
    syn: "bargain",
    synNote: "bargain 較口語，多指買東西討價還價；negotiate 較正式，用於合約、條件協商",
    added: "2026-07-10"
  }
];
