import type { Story } from '../types'

const INS = 'ただしいこたえをえらんで、あかでまるをおしてください'

export const storiesFeb: Story[] = [
  // ===== 2月 やさしい（28問） =====
  {
    id: 'story-108', title: 'まめまき', difficulty: 1,
    estimatedMinutes: 2, icon: '👹',
    story: 'きょうは節分です。タクはお父さんとお母さんといっしょにまめまきをすることにしました。タクはあかいおにのおめんをかぶりました。お父さんはあおいおにのおめんをかぶりました。お母さんは「おにはそと、ふくはうち！」といいながら、まめをなげました。タクもちからいっぱいまめをなげました。まめまきがおわると、みんなで年のかずだけまめをたべました。タクはしちこたべました。「きょうもげんきでいられるね」とお母さんがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'タクがかぶったおめんはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'red', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「タクはあかいおにのおめんをかぶりました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'タクはまめをなんこたべましたか？',
        tasks: [{ instruction: INS, optionId: '7', color: 'red', shape: 'circle' }],
        options: [
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
          { id: '8', label: '8', emoji: '8️⃣' },
        ],
        explanation: '「タクはしちこたべました」とあります。',
      },
    ],
  },
  {
    id: 'story-109', title: 'おにのおめんづくり', difficulty: 1,
    estimatedMinutes: 2, icon: '🎭',
    story: 'ようちえんで節分のじゅんびをしました。マイはかみでおにのおめんをつくることにしました。まずはさみでかみをきって、おにのかたちにしました。つぎにあかいいろをぬりました。さいごにつのをふたつつけました。せんせいが「じょうずにできたね」とほめてくれました。マイはできあがったおめんをかぶってみました。おともだちのコウはきいろいおめんをつくっていました。ふたりならんでおにのまねをしてわらいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'マイがぬったいろはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'red', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「あかいいろをぬりました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'おめんにつけたつのはいくつでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「つのをふたつつけました」とあります。',
      },
    ],
  },
  {
    id: 'story-110', title: 'チョコレートをつくろう', difficulty: 1,
    estimatedMinutes: 2, icon: '🍫',
    story: 'バレンタインデーのまえのひ、ハナはお母さんといっしょにチョコレートをつくりました。チョコレートをとかして、はこがたのかたにながしこみました。れいぞうこでひやすこと一じかん、かたまったチョコレートができました。ハナはぜんぶでみっつつくりました。ひとつはお父さんへ、ひとつはお兄さんへ、もうひとつはじぶんようにしました。「ありがとう、おいしそう！」とお父さんがよろこびました。ハナはとてもうれしくなりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'チョコレートはぜんぶでいくつつくりましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「ぜんぶでみっつつくりました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'れいぞうこでひやしたのはどのくらいのじかんでしたか？',
        tasks: [{ instruction: INS, optionId: 'b', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: '30ぷん',  emoji: '⏰' },
          { id: 'b', label: '1じかん', emoji: '🕐' },
          { id: 'c', label: '2じかん', emoji: '🕑' },
          { id: 'd', label: '3じかん', emoji: '🕒' },
        ],
        explanation: '「れいぞうこでひやすこと一じかん」とあります。',
      },
    ],
  },
  {
    id: 'story-111', title: 'ゆきだるまをつくろう', difficulty: 1,
    estimatedMinutes: 2, icon: '⛄',
    story: 'あさおきると、そとはいちめんゆきでした。リョウはお姉さんといっしょにゆきだるまをつくることにしました。ふたりでゆきをまるめて、おおきなゆきだまとちいさなゆきだまをつくりました。おおきなゆきだまのうえにちいさなゆきだまをのせました。めにはくろいいしをふたつつかいました。はなにはにんじんをさしました。くびにはあかいマフラーをまきました。「かわいいね」とお姉さんがわらいました。ふたりはゆきだるまのよこにならんでしゃしんをとりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ゆきだるまのはなにつかったものはなんですか？',
        tasks: [{ instruction: INS, optionId: 'carrot', color: 'red', shape: 'circle' }],
        options: [
          { id: 'carrot', label: 'にんじん', emoji: '🥕' },
          { id: 'stone',  label: 'いし',     emoji: '🪨' },
          { id: 'button', label: 'ボタン',   emoji: '🔘' },
          { id: 'stick',  label: 'えだ',     emoji: '🌿' },
        ],
        explanation: '「はなにはにんじんをさしました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ゆきだるまのくびのマフラーはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'red', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「くびにはあかいマフラーをまきました」とあります。',
      },
    ],
  },
  {
    id: 'story-112', title: 'ゆきがっせん', difficulty: 1,
    estimatedMinutes: 2, icon: '❄️',
    story: 'ゆきのつもったこうえんで、ケイはともだちのアツシとゆきがっせんをしました。ふたりはそれぞれゆきだまをよっつずつつくりました。「よーい、スタート！」とあわせていいました。ケイはゆきだまをさんこなげて、ふたつあてました。アツシはよっこなげて、みっつあてました。「アツシのかちだ！」とケイがいいました。そのあとふたりでちからをあわせておおきなゆきのかべをつくりました。「つかれたけどたのしかった」とケイはいいながらおうちへかえりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ふたりがさいしょにつくったゆきだまはそれぞれなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「それぞれゆきだまをよっつずつつくりました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'アツシがなげてあてたゆきだまはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「アツシはよっこなげて、みっつあてました」とあります。',
      },
    ],
  },
  {
    id: 'story-113', title: 'そりあそび', difficulty: 1,
    estimatedMinutes: 2, icon: '🛷',
    story: 'ゆきのつもったおかで、ユキはお父さんといっしょにそりあそびをしました。ユキのそりはあかいいろで、お父さんのそりはあおいいろでした。おかのうえにのぼって、そりにのって「いくよ！」とさけびました。そりはすごいはやさでしたをすべっておりていきました。「きゃー！たのしい！」とユキはおおよろこびでした。ぜんぶでさんかいすべりました。さいごにお父さんがユキをおんぶしてのぼってくれました。「またくるね」とユキはいいながらおうちへかえりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ユキのそりはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'red', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「ユキのそりはあかいいろ」でした。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'そりはぜんぶでなんかいすべりましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「ぜんぶでさんかいすべりました」とあります。',
      },
    ],
  },
  {
    id: 'story-114', title: 'りっしゅんのひ', difficulty: 1,
    estimatedMinutes: 2, icon: '🌱',
    story: 'きょうはりっしゅん、はるのはじまりの日です。ミオはお母さんといっしょにこうえんをさんぽしました。「まださむいけど、すこしだけはるのにおいがするね」とお母さんがいいました。ミオはじめんをよくみると、ちいさなみどりのめがでているのをみつけました。「めがでてる！」とミオはよろこびました。たんぽぽのめでした。かえりみちに、うめのきにちいさなしろいはなが三つさいているのもみつけました。「もうすぐはるだね」とふたりはにっこりしながらおうちへかえりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ミオがじめんでみつけたのはなんのめでしたか？',
        tasks: [{ instruction: INS, optionId: 'dandelion', color: 'red', shape: 'circle' }],
        options: [
          { id: 'dandelion', label: 'たんぽぽ', emoji: '🌼' },
          { id: 'tulip',     label: 'チューリップ', emoji: '🌷' },
          { id: 'clover',    label: 'クローバー', emoji: '🍀' },
          { id: 'sunflower', label: 'ひまわり', emoji: '🌻' },
        ],
        explanation: '「たんぽぽのめでした」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'うめのきのはなはなんこさいていましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「しろいはなが三つさいていた」とあります。',
      },
    ],
  },
  {
    id: 'story-115', title: 'うめのはなみ', difficulty: 1,
    estimatedMinutes: 2, icon: '🌸',
    story: 'にちようびに、ソウとお父さんとおじいちゃんのさんにんでうめまつりにいきました。こうえんにはしろいうめとももいろのうめがたくさんさいていました。「きれいだね」とソウはいいました。おじいちゃんは「むかしからうめはのぞみのはなといわれているんだよ」とおしえてくれました。ソウはしろいうめをみっつ、ももいろのうめをふたつかぞえました。かえりみちにあまざけをのみました。「あまくておいしい！」とソウはにこにこしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'うめまつりにいったのはなんにんでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: 'ソウとお父さんとおじいちゃんの「さんにん」でいきました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かえりみちにのんだのはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'amazake', color: 'red', shape: 'circle' }],
        options: [
          { id: 'amazake', label: 'あまざけ',   emoji: '🍶' },
          { id: 'juice',   label: 'ジュース',   emoji: '🧃' },
          { id: 'cocoa',   label: 'ココア',     emoji: '☕' },
          { id: 'miso',    label: 'みそしる',   emoji: '🍜' },
        ],
        explanation: '「かえりみちにあまざけをのみました」とあります。',
      },
    ],
  },
  {
    id: 'story-116', title: 'なわとびたいかい', difficulty: 1,
    estimatedMinutes: 2, icon: '🪢',
    story: 'ようちえんでなわとびたいかいがありました。カナはいちばんたくさんとべるようにれんしゅうしてきました。たいかいがはじまると、まずコウがとびました。コウはじゅうかいとびました。つぎにカナがとびました。カナはじゅうごかいとべました。「カナのかちだ！」とせんせいがいいました。カナはにっこりして「うれしい！」といいました。たいかいのあと、カナはコウに「いっしょにれんしゅうしようね」とはなしかけました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'コウはなわとびをなんかいとびましたか？',
        tasks: [{ instruction: INS, optionId: '10', color: 'red', shape: 'circle' }],
        options: [
          { id: '8',  label: '8',  emoji: '8️⃣' },
          { id: '10', label: '10', emoji: '🔟' },
          { id: '12', label: '12', emoji: '1️⃣2️⃣' },
          { id: '15', label: '15', emoji: '1️⃣5️⃣' },
        ],
        explanation: '「コウはじゅうかいとびました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'カナはなわとびをなんかいとびましたか？',
        tasks: [{ instruction: INS, optionId: '15', color: 'red', shape: 'circle' }],
        options: [
          { id: '10', label: '10', emoji: '🔟' },
          { id: '12', label: '12', emoji: '1️⃣2️⃣' },
          { id: '15', label: '15', emoji: '1️⃣5️⃣' },
          { id: '20', label: '20', emoji: '2️⃣0️⃣' },
        ],
        explanation: '「カナはじゅうごかいとべました」とあります。',
      },
    ],
  },
  {
    id: 'story-117', title: 'ふゆのこうえん', difficulty: 1,
    estimatedMinutes: 2, icon: '🌲',
    story: 'さむいふゆのひ、レイはお母さんとこうえんにきました。こうえんのかわには、はくちょうがさんわいました。「しろくてきれいだね」とレイがいいました。はくちょうのそばでは、かもがにわいました。レイはかもにパンのひとかけをあげました。かもはよろこんで、すぐたべてくれました。ブランコにもすこしのりました。「またくるね」とレイはかもにてをふってかえりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かわにいたはくちょうはなんわでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「はくちょうがさんわいました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'レイがかもにあげたものはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'bread', color: 'red', shape: 'circle' }],
        options: [
          { id: 'bread',  label: 'パン',     emoji: '🍞' },
          { id: 'rice',   label: 'おこめ',   emoji: '🍚' },
          { id: 'cracker', label: 'せんべい', emoji: '🍘' },
          { id: 'corn',   label: 'トウモロコシ', emoji: '🌽' },
        ],
        explanation: '「かもにパンのひとかけをあげました」とあります。',
      },
    ],
  },
  {
    id: 'story-118', title: 'おでんのよる', difficulty: 1,
    estimatedMinutes: 2, icon: '🍢',
    story: 'さむいふゆのよる、タロウのおうちではおでんをつくりました。おなべのなかには、だいこんとたまごとこんにゃくとちくわがはいっていました。タロウはだいこんがいちばんすきです。「もうできた？」とタロウはなんどもきいてしまいました。ようやくできあがると、タロウはだいこんをふたつたべました。「からだがあたたまるね」とお父さんがいいました。たろうは「もっとたべたい」といいましたが、おなかがいっぱいでたべられませんでした。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'タロウのおでんでいちばんすきなものはなんですか？',
        tasks: [{ instruction: INS, optionId: 'daikon', color: 'red', shape: 'circle' }],
        options: [
          { id: 'daikon',    label: 'だいこん',   emoji: '🥬' },
          { id: 'egg',       label: 'たまご',     emoji: '🥚' },
          { id: 'konnyaku',  label: 'こんにゃく', emoji: '🟫' },
          { id: 'chikuwa',   label: 'ちくわ',     emoji: '🍡' },
        ],
        explanation: '「タロウはだいこんがいちばんすきです」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'タロウはだいこんをいくつたべましたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「タロウはだいこんをふたつたべました」とあります。',
      },
    ],
  },
  {
    id: 'story-119', title: 'あたたかいスープ', difficulty: 1,
    estimatedMinutes: 2, icon: '🍲',
    story: 'さむいあさ、ヒナはお母さんといっしょにやさいスープをつくりました。おなべにお水をいれて、にんじんをさんきれとじゃがいもをふたつといれました。それからたまねぎもいれました。コトコトにると、いいにおいがしてきました。「できたよ」とお母さんがいいました。ヒナはあたたかいスープをふうふうしながらのみました。「からだがほかほかする！」とヒナはよろこびました。「またつくろうね」とお母さんがわらいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'スープにいれたにんじんはなんきれでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「にんじんをさんきれ」いれました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'スープにいれたじゃがいもはいくつでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「じゃがいもをふたつ」いれました。',
      },
    ],
  },
  {
    id: 'story-120', title: 'としょかんのふゆ', difficulty: 1,
    estimatedMinutes: 2, icon: '📚',
    story: 'ふゆやすみのあいだ、アユはお母さんととしょかんにいきました。としょかんのなかはあたたかくて、たくさんのほんがならんでいました。アユはえほんのコーナーへいきました。「このほんがよみたい！」とアユはきいろいひょうしのほんをてにとりました。おはなしのほんとかがくのほんをあわせてよっさつかりました。かさのかりかたをしらせてもらったあと、アユとお母さんはすみのソファにすわってよみはじめました。「しずかでよみやすいね」とお母さんがつぶやきました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'アユがてにとったほんのひょうしはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'yellow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「きいろいひょうしのほん」をてにとりました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'アユはほんをなんさつかりましたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「よっさつかりました」とあります。',
      },
    ],
  },
  {
    id: 'story-121', title: 'おひなさまのかざりつけ', difficulty: 1,
    estimatedMinutes: 2, icon: '🎎',
    story: 'もうすぐひな祭りです。サクラはお母さんとおひなさまをかざりました。まず、あかいもうせんをしきました。それからおひなさまをそっとだして、うえのだんにふたつならべました。まんなかのだんにはさんにんかんじょをならべました。「きれいだね」とサクラがいいました。おひなさまのまえには、しろいおもちとあかいおもちとくさもちのみっつをかざりました。「ひなまつりがたのしみだな」とサクラはにこにこしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'おひなさまのまえにかざったおもちのかずはいくつでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「みっつをかざりました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'もうせんはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'red', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「あかいもうせんをしきました」とあります。',
      },
    ],
  },
  {
    id: 'story-122', title: 'ふゆのよぞら', difficulty: 1,
    estimatedMinutes: 2, icon: '⭐',
    story: 'ふゆのよる、コタロウはお父さんとにわでほしをみました。そらはよくはれていて、ほしがとてもかがやいていました。「あのおおきいほしはなに？」とコタロウがきくと、お父さんは「あれはきらぼしとよばれているんだよ」とおしえてくれました。ふたりはすきなほしをみっつずつえらびました。「このほしにたんてんをつけたら、さんかくになるよ」とコタロウがいいました。「よくきづいたね」とお父さんがほめてくれました。さむかったけど、とてもたのしいよるでした。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ふたりがすきなほしをえらんだのはひとりなんこずつでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「みっつずつえらびました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'コタロウがほしをむすんだらなんのかたちになるといいましたか？',
        tasks: [{ instruction: INS, optionId: 'triangle', color: 'red', shape: 'circle' }],
        options: [
          { id: 'triangle', label: 'さんかく', emoji: '🔺' },
          { id: 'circle',   label: 'まる',     emoji: '⭕' },
          { id: 'square',   label: 'しかく',   emoji: '🟥' },
          { id: 'star',     label: 'ほし',     emoji: '⭐' },
        ],
        explanation: '「さんかくになるよ」とコタロウがいいました。',
      },
    ],
  },
  {
    id: 'story-123', title: 'スキーはじめて', difficulty: 1,
    estimatedMinutes: 2, icon: '⛷️',
    story: 'ふゆやすみに、エマはかぞくでスキーじょうにいきました。エマははじめてスキーをします。まずせんせいにならって、スキーをはくほうほうをおしえてもらいました。ちいさなおかをすべってみると、さいしょはころんでしまいました。「もういちどやってみよう」とエマはがんばりました。さんかいめにやっとうまくすべれました。「やったあ！」とエマはさけびました。お兄さんは「じょうずになったね」とほめてくれました。ゆきのうえをすべるのはとてもきもちよかったです。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'エマがうまくすべれたのはなんかいめでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「さんかいめにやっとうまくすべれました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'エマをほめてくれたのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'brother', color: 'red', shape: 'circle' }],
        options: [
          { id: 'brother', label: 'お兄さん', emoji: '👦' },
          { id: 'teacher', label: 'せんせい', emoji: '👩‍🏫' },
          { id: 'mom',     label: 'お母さん', emoji: '👩' },
          { id: 'dad',     label: 'お父さん', emoji: '👨' },
        ],
        explanation: '「お兄さんは「じょうずになったね」とほめてくれました」とあります。',
      },
    ],
  },
  {
    id: 'story-124', title: 'はくちょうのこうえん', difficulty: 1,
    estimatedMinutes: 2, icon: '🦢',
    story: 'ふゆのにちようび、リナはおばあちゃんといっしょにみずうみのこうえんへいきました。みずうみにはしろいはくちょうがたくさんいました。リナはかずをかぞえると、ぜんぶでごわいました。おばあちゃんが「はくちょうは、うまれたときはいろがちがうんだよ」とおしえてくれました。「へえ、しらなかった！」とリナはおどろきました。こうえんのベンチにすわって、ふたりでおやつのみかんをたべました。リナはみっこたべました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'みずうみのはくちょうはぜんぶでなんわでしたか？',
        tasks: [{ instruction: INS, optionId: '5', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「ぜんぶでごわいました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'リナはみかんをなんこたべましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「リナはみっこたべました」とあります。',
      },
    ],
  },
  {
    id: 'story-125', title: 'えほうまきのひ', difficulty: 1,
    estimatedMinutes: 2, icon: '🍣',
    story: 'きょうは節分の夜です。ダイはかぞくといっしょにえほうまきをたべることにしました。お母さんが「ことしのえほうはみなみみなみひがしだよ」とおしえてくれました。ダイはそのほうこうをむいて、めをとじてえほうまきをかぶりつきました。「しゃべってはいけないよ」とお父さんがいいました。ダイはだまってたべきりました。「ねがいごとがかなうといいね」とお母さんがいいました。えほうまきはとてもおいしかったです。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'えほうまきをたべるときのえほうはどのほうこうでしたか？',
        tasks: [{ instruction: INS, optionId: 'c', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'きた',     emoji: '⬆️' },
          { id: 'b', label: 'みなみ',   emoji: '⬇️' },
          { id: 'c', label: 'みなみみなみひがし', emoji: '↘️' },
          { id: 'd', label: 'にし',     emoji: '⬅️' },
        ],
        explanation: '「ことしのえほうはみなみみなみひがしだよ」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'えほうまきをたべるときにしてはいけないことはなんですか？',
        tasks: [{ instruction: INS, optionId: 'talk', color: 'red', shape: 'circle' }],
        options: [
          { id: 'talk',  label: 'しゃべること', emoji: '🗣️' },
          { id: 'eyes',  label: 'めをあけること', emoji: '👀' },
          { id: 'laugh', label: 'わらうこと',   emoji: '😄' },
          { id: 'walk',  label: 'あるくこと',   emoji: '🚶' },
        ],
        explanation: '「しゃべってはいけないよ」とお父さんがいいました。',
      },
    ],
  },
  {
    id: 'story-126', title: 'バレンタインカード', difficulty: 1,
    estimatedMinutes: 2, icon: '💌',
    story: 'バレンタインデーのまえに、ナツはおじいちゃんとおばあちゃんにカードをつくることにしました。しろいかみにあかいハートをふたつかいて、「だいすきだよ」とかきました。おじいちゃんのカードにはもみじのえをかきました。おばあちゃんのカードにはひまわりのえをかきました。ふうとうにいれて、おじいちゃんとおばあちゃんにわたしました。「ありがとう、うれしいよ」とふたりがいいました。ナツはにっこりして「よかった」とおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'カードにかいたハートはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「あかいハートをふたつかいて」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'おじいちゃんのカードにかいたえはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'maple', color: 'red', shape: 'circle' }],
        options: [
          { id: 'maple',     label: 'もみじ',   emoji: '🍁' },
          { id: 'sunflower', label: 'ひまわり', emoji: '🌻' },
          { id: 'cherry',    label: 'さくら',   emoji: '🌸' },
          { id: 'tulip',     label: 'チューリップ', emoji: '🌷' },
        ],
        explanation: '「おじいちゃんのカードにはもみじのえをかきました」とあります。',
      },
    ],
  },
  {
    id: 'story-127', title: 'チューリップのきゅうこん', difficulty: 1,
    estimatedMinutes: 2, icon: '🌷',
    story: 'ふゆのうちに、コウはお母さんといっしょにチューリップのきゅうこんをうえました。あかいきゅうこんをよっこ、きいろのきゅうこんをさんこ、うえのなかにうめました。「はるになったらはながさくよ」とお母さんがおしえてくれました。コウはまいにちすこしずつみずをあげました。ふゆのあいだはなにもみえませんでしたが、はるになると、あかいはなときいろいはながさきました。「さいた！さいた！」とコウはおおよろこびでした。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'うえたあかいきゅうこんはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「あかいきゅうこんをよっこ」うえました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'うえたきいろのきゅうこんはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「きいろのきゅうこんをさんこ」うえました。',
      },
    ],
  },
  {
    id: 'story-128', title: 'まめごはん', difficulty: 1,
    estimatedMinutes: 2, icon: '🍚',
    story: 'まめまきのあとのひ、ミサはお母さんといっしょに、のこったまめでまめごはんをつくりました。おなべにごはんとまめをいれて、しおをすこしたして、いっしょにたきました。できあがったまめごはんはほくほくしておいしそうでした。ミサはおちゃわんにふたいれもりました。「おいしい！」とミサがいいました。お父さんも「まめごはんはひさしぶりだね」といいながらよろこんでたべました。かぞくみんなでたべるごはんはとくべつにおいしいとミサはおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'まめごはんにいれたものはなんですか？（ごはんのほかに）',
        tasks: [{ instruction: INS, optionId: 'bean', color: 'red', shape: 'circle' }],
        options: [
          { id: 'bean',   label: 'まめ',   emoji: '🫘' },
          { id: 'carrot', label: 'にんじん', emoji: '🥕' },
          { id: 'egg',    label: 'たまご', emoji: '🥚' },
          { id: 'onion',  label: 'たまねぎ', emoji: '🧅' },
        ],
        explanation: '「ごはんとまめをいれて」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ミサはおちゃわんにまめごはんをなんいれもりましたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「おちゃわんにふたいれもりました」とあります。',
      },
    ],
  },
  {
    id: 'story-129', title: 'ふゆのはくさい', difficulty: 1,
    estimatedMinutes: 2, icon: '🥬',
    story: 'おじいちゃんのはたけにいきました。シンはお母さんといっしょに、おじいちゃんのはたけではくさいをとりにいきました。はたけにはおおきなはくさいがよっこならんでいました。おじいちゃんが「いちばんおおきいのをえらんでごらん」といいました。シンはいちばんおおきいはくさいをえらんで、りょうてでだいてみました。「おもい！」とシンがいいました。おじいちゃんは「このはくさいでなべをつくろう」といいました。おうちにかえって、あたたかいはくさいなべをたべました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'はたけにあったはくさいはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「おおきなはくさいがよっこならんでいました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'おじいちゃんははくさいでなにをつくるといいましたか？',
        tasks: [{ instruction: INS, optionId: 'nabe', color: 'red', shape: 'circle' }],
        options: [
          { id: 'nabe',  label: 'なべ',   emoji: '🍲' },
          { id: 'salad', label: 'サラダ', emoji: '🥗' },
          { id: 'soup',  label: 'スープ', emoji: '🍜' },
          { id: 'rice',  label: 'ごはん', emoji: '🍚' },
        ],
        explanation: '「このはくさいでなべをつくろう」といいました。',
      },
    ],
  },
  {
    id: 'story-130', title: 'あたたかいおふろ', difficulty: 1,
    estimatedMinutes: 2, icon: '🛁',
    story: 'さむいふゆのよる、ユウはゆずをうかべたおふろにはいりました。おふろのなかにはきいろいゆずがみっつうかんでいました。「いいにおいがする！」とユウはいいました。お母さんが「ゆずゆにはいると、かぜをひかないんだよ」とおしえてくれました。ユウはあたたかいおふろでからだをよくあたためました。あがったあと、おかあさんがあたたかいミルクをいっぱいくれました。「からだがぽかぽかだ」とユウはにこにこしながらおふとんにはいりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'おふろにうかんでいたゆずはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「きいろいゆずがみっつうかんでいました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'おふろのあとにもらったのはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'milk', color: 'red', shape: 'circle' }],
        options: [
          { id: 'milk',  label: 'ミルク', emoji: '🥛' },
          { id: 'juice', label: 'ジュース', emoji: '🧃' },
          { id: 'cocoa', label: 'ここあ', emoji: '☕' },
          { id: 'tea',   label: 'おちゃ', emoji: '🍵' },
        ],
        explanation: '「あたたかいミルクをいっぱいくれました」とあります。',
      },
    ],
  },
  {
    id: 'story-131', title: 'かみしばい', difficulty: 1,
    estimatedMinutes: 2, icon: '📖',
    story: 'としょかんでかみしばいのかいがありました。アイとお母さんはいっしょにきました。かみしばいやさんのおじさんがおはなしをよんでくれました。「ももたろう」のおはなしでした。おに三びきがしまからやってきて、ももたろうとたたかうおはなしでした。「やっつけろ！」とアイはつい大きなこえでいってしまいました。まわりのこどもたちもわらっていました。かいがおわると、おじさんが「よくきいてくれてありがとう」といって、アイにシールをひとつくれました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かみしばいのおはなしはなんというはなしでしたか？',
        tasks: [{ instruction: INS, optionId: 'momotaro', color: 'red', shape: 'circle' }],
        options: [
          { id: 'momotaro',  label: 'ももたろう',   emoji: '🍑' },
          { id: 'kaguya',    label: 'かぐやひめ',   emoji: '🌕' },
          { id: 'urashima',  label: 'うらしまたろう', emoji: '🐢' },
          { id: 'issunboshi', label: 'いっすんぼうし', emoji: '🗡️' },
        ],
        explanation: '「ももたろうのおはなし」でした。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'おじさんがアイにくれたものはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'sticker', color: 'red', shape: 'circle' }],
        options: [
          { id: 'sticker', label: 'シール',   emoji: '✨' },
          { id: 'book',    label: 'ほん',     emoji: '📕' },
          { id: 'candy',   label: 'あめ',     emoji: '🍬' },
          { id: 'pencil',  label: 'えんぴつ', emoji: '✏️' },
        ],
        explanation: '「シールをひとつくれました」とあります。',
      },
    ],
  },
  {
    id: 'story-132', title: 'みかんのおやつ', difficulty: 1,
    estimatedMinutes: 2, icon: '🍊',
    story: 'ふゆのごご、ケンはこたつにはいってみかんをたべました。かごのなかにはみかんがろっこはいっていました。ケンはふたつたべました。お兄さんがきて「ひとつちょうだい」といったので、ひとつわけてあげました。「みかんはビタミンがあっていいんだよ」とお兄さんがおしえてくれました。「かぜをひかなくなるの？」とケンがきくと、「そうだよ」とお兄さんがこたえました。ケンはのこりのみかんをじぶんのために三つとっておこうとおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かごのなかにみかんはいくつありましたか？',
        tasks: [{ instruction: INS, optionId: '6', color: 'red', shape: 'circle' }],
        options: [
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
        ],
        explanation: '「かごのなかにはみかんがろっこはいっていました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ケンはお兄さんにみかんをいくつわけてあげましたか？',
        tasks: [{ instruction: INS, optionId: '1', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「ひとつわけてあげました」とあります。',
      },
    ],
  },
  {
    id: 'story-133', title: 'ゆきかき', difficulty: 1,
    estimatedMinutes: 2, icon: '❄️',
    story: 'おおゆきのあさ、タツヤはお父さんといっしょにゆきかきをしました。いえのまえにゆきがたくさんつもっていたので、シャベルでゆきをかきました。タツヤはちいさなシャベル、お父さんはおおきなシャベルをつかいました。ふたりでいっしょうけんめいかくと、じゅっぷんでみちができました。「やったね！」とタツヤはいいました。となりのおばさんが「ありがとう、たすかりました」といってくれました。タツヤはとてもうれしくなりました。おうちにはいると、お母さんがあたたかいこうちゃをいれてくれました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'タツヤとお父さんはそれぞれどんなシャベルをつかいましたか？',
        tasks: [{ instruction: INS, optionId: 'small', color: 'red', shape: 'circle' }],
        options: [
          { id: 'small', label: 'タツヤはちいさいシャベル', emoji: '🔧' },
          { id: 'big',   label: 'タツヤはおおきいシャベル', emoji: '⚒️' },
          { id: 'same',  label: 'おなじおおきさのシャベル', emoji: '🛠️' },
          { id: 'none',  label: 'シャベルをつかわなかった', emoji: '❌' },
        ],
        explanation: '「タツヤはちいさなシャベル、お父さんはおおきなシャベルをつかいました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ゆきかきがおわってお母さんがいれてくれたのはなんですか？',
        tasks: [{ instruction: INS, optionId: 'tea', color: 'red', shape: 'circle' }],
        options: [
          { id: 'tea',   label: 'こうちゃ', emoji: '☕' },
          { id: 'milk',  label: 'ミルク',   emoji: '🥛' },
          { id: 'juice', label: 'ジュース', emoji: '🧃' },
          { id: 'cocoa', label: 'ここあ',   emoji: '🍫' },
        ],
        explanation: '「あたたかいこうちゃをいれてくれました」とあります。',
      },
    ],
  },
  {
    id: 'story-134', title: 'ふゆのたのしみ', difficulty: 1,
    estimatedMinutes: 2, icon: '🎿',
    story: 'ふゆになるといろんなたのしみがあります。マナはゆきがつもるとゆきだるまをつくります。こうえんではそりあそびもします。いえのなかではカードゲームやしょうぎをします。おかあさんとなべりょうりをたべるのもすきです。「ふゆはさむいけど、たのしいことがいっぱいだね」とマナがいいました。おかあさんが「そうだね、ふゆならではのたのしみだね」とこたえました。マナはことしのふゆもたくさんたのしもうとおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'マナがいえのなかでするあそびはどれですか？',
        tasks: [{ instruction: INS, optionId: 'b', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'ゆきだるまづくり', emoji: '⛄' },
          { id: 'b', label: 'カードゲームとしょうぎ', emoji: '🃏' },
          { id: 'c', label: 'そりあそび', emoji: '🛷' },
          { id: 'd', label: 'なべりょうり', emoji: '🍲' },
        ],
        explanation: '「いえのなかではカードゲームやしょうぎをします」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'マナがゆきがつもるとはじめにすることはなんですか？',
        tasks: [{ instruction: INS, optionId: 'snowman', color: 'red', shape: 'circle' }],
        options: [
          { id: 'snowman', label: 'ゆきだるまをつくる', emoji: '⛄' },
          { id: 'sled',    label: 'そりあそびをする',   emoji: '🛷' },
          { id: 'card',    label: 'カードゲームをする', emoji: '🃏' },
          { id: 'nabe',    label: 'なべりょうりをたべる', emoji: '🍲' },
        ],
        explanation: '「ゆきがつもるとゆきだるまをつくります」とあります。',
      },
    ],
  },
  {
    id: 'story-135', title: 'はるのじゅんび', difficulty: 1,
    estimatedMinutes: 2, icon: '🌱',
    story: 'ふゆのおわりごろ、ノアはお母さんといっしょにはるのじゅんびをしました。まずはたけをたがやしました。それからはるにうえるたねをよっしゅるいそろえました。チューリップ、なのはな、パンジー、スミレです。「はるになったらどれからうえようか」とノアがきくと、「まずはチューリップかな」とお母さんがこたえました。ノアはたねのふくろをたいせつそうにかごにしまいました。「はるがはやくきてほしいな」とノアはいいました。まどのそとをみると、すこしだけあたたかそうなひかりがさしていました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'そろえたたねはなんしゅるいでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「たねをよっしゅるいそろえました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'はるにさいしょにうえるはなはなんですか？',
        tasks: [{ instruction: INS, optionId: 'tulip', color: 'red', shape: 'circle' }],
        options: [
          { id: 'tulip',    label: 'チューリップ', emoji: '🌷' },
          { id: 'nanohana', label: 'なのはな',     emoji: '🌼' },
          { id: 'pansy',    label: 'パンジー',     emoji: '💜' },
          { id: 'sumire',   label: 'スミレ',       emoji: '🔵' },
        ],
        explanation: '「まずはチューリップかな」とお母さんがこたえました。',
      },
    ],
  },
]
