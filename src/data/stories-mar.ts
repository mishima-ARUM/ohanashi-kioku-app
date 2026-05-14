import type { Story } from '../types'

const INS = 'ただしいこたえをえらんで、あかでまるをおしてください'

export const storiesMar: Story[] = [
  // ===== 3月 やさしい（31問） =====
  {
    id: 'story-136', title: 'ひなまつり', difficulty: 1,
    estimatedMinutes: 2, icon: '🎎',
    story: 'きょうはひなまつりです。サクラはお母さんといっしょにちらしずしをつくりました。ごはんにすをまぜて、たまごときゅうりとえびをのせました。おひなさまのまえにかざると、とてもきれいでした。つぎにはまぐりのおすいものをたべました。「はまぐりはふたつのかいがぴったりあうから、なかのよいふうふをあらわすんだよ」とお母さんがおしえてくれました。さいごにひなあられをよっこたべました。「たのしいひなまつりだね」とサクラはよろこびました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ちらしずしにのせていないものはどれですか？',
        tasks: [{ instruction: INS, optionId: 'salmon', color: 'red', shape: 'circle' }],
        options: [
          { id: 'egg',    label: 'たまご', emoji: '🥚' },
          { id: 'salmon', label: 'さけ',   emoji: '🐟' },
          { id: 'shrimp', label: 'えび',   emoji: '🦐' },
          { id: 'cuke',   label: 'きゅうり', emoji: '🥒' },
        ],
        explanation: 'のせたのは「たまごときゅうりとえび」で、さけはのせていません。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'サクラはひなあられをなんこたべましたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「ひなあられをよっこたべました」とあります。',
      },
    ],
  },
  {
    id: 'story-137', title: 'おわかれかい', difficulty: 1,
    estimatedMinutes: 2, icon: '🎓',
    story: 'ようちえんのおわかれかいがありました。コウはともだちのリナとアキといっしょにうたをうたいました。「ありがとうのはな」というきょくを三かいれんしゅうしてから、ほんばんにうたいました。せんせいが「じょうずにうたえたね」とほめてくれました。つぎに、クラスのみんなにてがみをかきました。コウはリナにあおいいろのてがみをわたしました。リナはにこにこしながら「ありがとう、たいせつにするね」といいました。おわかれかいがおわると、コウはちょっとさみしくなりましたが、しょうがっこうがたのしみになりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'うたったきょくのなまえはなんですか？',
        tasks: [{ instruction: INS, optionId: 'b', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'さくらのうた',   emoji: '🌸' },
          { id: 'b', label: 'ありがとうのはな', emoji: '🌼' },
          { id: 'c', label: 'はるのそよかぜ', emoji: '🌬️' },
          { id: 'd', label: 'ともだちのうた', emoji: '🎵' },
        ],
        explanation: '「ありがとうのはなというきょく」をうたいました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'コウがリナにわたしたてがみはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'blue', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「あおいいろのてがみをわたしました」とあります。',
      },
    ],
  },
  {
    id: 'story-138', title: 'さくらのつぼみ', difficulty: 1,
    estimatedMinutes: 2, icon: '🌸',
    story: 'さんぽのとちゅう、ハルはこうえんのさくらのきをみあげました。えだにちいさなピンクのつぼみがみっつついていました。「もうすぐさくらがさくね」とお母さんがいいました。「いつさくの？」とハルがきくと、「あとすこしであったかくなったらだよ」とお母さんがこたえました。ハルはつぼみのちかくでじっとみつめました。ちょうちょうがとんできて、つぼみのそばにとまりました。「はるがきたね」とハルはにこにこしました。またあした、つぼみをみにくることにしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'さくらのえだについていたつぼみはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「ちいさなピンクのつぼみがみっつついていました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'つぼみのそばにとまったのはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'butterfly', color: 'red', shape: 'circle' }],
        options: [
          { id: 'butterfly', label: 'ちょうちょう', emoji: '🦋' },
          { id: 'bee',       label: 'はちみつ',     emoji: '🐝' },
          { id: 'ladybug',   label: 'てんとうむし', emoji: '🐞' },
          { id: 'bird',      label: 'とり',         emoji: '🐦' },
        ],
        explanation: '「ちょうちょうがとんできて、つぼみのそばにとまりました」とあります。',
      },
    ],
  },
  {
    id: 'story-139', title: 'そつえんしき', difficulty: 1,
    estimatedMinutes: 2, icon: '🎓',
    story: 'きょうはようちえんのそつえんしきです。タカはあかいぼうしをかぶって、せいふくをきてほいくえんへいきました。せんせいからそつえんしょうをもらいました。「ありがとうございました」とタカははっきりとしたこえでいいました。しきのあと、ともだちのコウとマナとさんにんでしゃしんをとりました。お母さんが「りっぱだったよ」とほめてくれて、おおきなたばなをくれました。タカは「しょうがっこうもがんばるぞ」とおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'タカがかぶっていたぼうしはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'red', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「あかいぼうしをかぶって」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'しゃしんをとったのはなんにんでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: 'タカとコウとマナの「さんにんで」しゃしんをとりました。',
      },
    ],
  },
  {
    id: 'story-140', title: 'はるやさいのたね', difficulty: 1,
    estimatedMinutes: 2, icon: '🥬',
    story: 'はるになったので、ミドリはお父さんといっしょにはたけにたねをまきました。かぶのたねをよっこ、こまつなのたねをみっこ、にんじんのたねをふたこまきました。たねをまいたあとは、うえからやさしくつちをかけました。「みずはまいにちあげようね」とお父さんがいいました。ミドリはじょうろでみずをあげました。「はやくめがでないかな」とミドリはわくわくしながらきたいしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かぶのたねはなんこまきましたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「かぶのたねをよっこ」まきました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'たねをまいたあとにしたことはなんですか？',
        tasks: [{ instruction: INS, optionId: 'water', color: 'red', shape: 'circle' }],
        options: [
          { id: 'water',   label: 'みずをあげた',     emoji: '💧' },
          { id: 'dig',     label: 'つちをほった',     emoji: '⛏️' },
          { id: 'harvest', label: 'やさいをとった',   emoji: '🥕' },
          { id: 'fertilize', label: 'ひりょうをまいた', emoji: '🌱' },
        ],
        explanation: '「うえからやさしくつちをかけ」て、「じょうろでみずをあげました」とあります。',
      },
    ],
  },
  {
    id: 'story-141', title: 'つくしをみつけた', difficulty: 1,
    estimatedMinutes: 2, icon: '🌿',
    story: 'かわのちかくをさんぽしていたら、レンはつちからでているつくしをみつけました。「つくしだ！」とレンはさけびました。おじいちゃんが「はるがきたしるしだよ」とおしえてくれました。レンはつくしをよっぽんぬきました。てにもつとすこしざらざらしていました。おじいちゃんが「つくしはたべられるんだよ」というので、レンはびっくりしました。おうちにかえってからおじいちゃんがつくしのおひたしをつくってくれました。ちょっとにがかったけれど、おもしろいあじでした。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'レンはつくしをなんぽんぬきましたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「つくしをよっぽんぬきました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'おじいちゃんはつくしでなにをつくってくれましたか？',
        tasks: [{ instruction: INS, optionId: 'ohitashi', color: 'red', shape: 'circle' }],
        options: [
          { id: 'ohitashi', label: 'おひたし',   emoji: '🥗' },
          { id: 'tempura',  label: 'てんぷら',   emoji: '🍤' },
          { id: 'soup',     label: 'スープ',     emoji: '🍲' },
          { id: 'salad',    label: 'サラダ',     emoji: '🥙' },
        ],
        explanation: '「つくしのおひたしをつくってくれました」とあります。',
      },
    ],
  },
  {
    id: 'story-142', title: 'はるのかぜ', difficulty: 1,
    estimatedMinutes: 2, icon: '🎐',
    story: 'あたたかいはるのひ、ミサはこうえんでたこあげをしました。あかいたこをあおいそらにあげると、かぜにのってどんどんたかくあがっていきました。「もっとたかくあがれ！」とミサはいいました。たこのひもをにぎりしめると、てがひっぱられるかんじがしました。となりでは、おとこのこがきいろいたこをあげていました。ふたつのたこがそらでおどっているようでした。かぜがふいてきて、ミサのたこはさらにたかくあがりました。「きもちいいな」とミサはいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ミサがあげたたこはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'red', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「あかいたこをあおいそらにあげると」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'となりのおとこのこがあげていたたこはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'yellow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「おとこのこがきいろいたこをあげていました」とあります。',
      },
    ],
  },
  {
    id: 'story-143', title: 'さくらのはなみ', difficulty: 1,
    estimatedMinutes: 2, icon: '🌸',
    story: 'にちようびに、ユイはかぞく四にんでこうえんへはなみにいきました。さくらのきのしたにシートをしいて、おべんとうをひろげました。おべんとうにはおにぎりとからあげとたまごやきがはいっていました。かぜがふくと、ピンクのはなびらがひらひらおちてきました。「ゆきみたいだね」とユイがいいました。おにぎりはしゃけとうめとこんぶのさんしゅるいでした。ユイはしゃけのおにぎりをたべました。「はなみのおべんとうはとくべつにおいしい」とユイはにこにこしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'はなみにいったのはなんにんでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「かぞく四にんでこうえんへ」いきました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ユイがたべたおにぎりはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'salmon', color: 'red', shape: 'circle' }],
        options: [
          { id: 'salmon',  label: 'しゃけ',   emoji: '🍙' },
          { id: 'plum',    label: 'うめ',     emoji: '🍙' },
          { id: 'kelp',    label: 'こんぶ',   emoji: '🍙' },
          { id: 'tuna',    label: 'まぐろ',   emoji: '🍙' },
        ],
        explanation: '「ユイはしゃけのおにぎりをたべました」とあります。',
      },
    ],
  },
  {
    id: 'story-144', title: 'ちょうちょうのはる', difficulty: 1,
    estimatedMinutes: 2, icon: '🦋',
    story: 'はるのこうえんで、ノゾミはきいろいちょうちょうをみつけました。「きれい！」とノゾミはめをかがやかせました。ちょうちょうはたんぽぽのはなからはなへとびうつっていました。ノゾミはそーっとちかづいていきました。ちょうちょうはノゾミのてのひらにとまりました。「わ、とまった！」とノゾミはうごかずにじっとしていました。しばらくしてちょうちょうはとんでいきました。「またあいたいな」とノゾミはいいながら、ちょうちょうのいったほうをみつめました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ノゾミがみたちょうちょうはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'yellow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'yellow',  label: 'きいろ',   emoji: '🟡' },
          { id: 'white',   label: 'しろ',     emoji: '⬜' },
          { id: 'orange',  label: 'オレンジ', emoji: '🟠' },
          { id: 'blue',    label: 'あお',     emoji: '🔵' },
        ],
        explanation: '「きいろいちょうちょうをみつけました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ちょうちょうはどこにとまりましたか？',
        tasks: [{ instruction: INS, optionId: 'hand', color: 'red', shape: 'circle' }],
        options: [
          { id: 'hand',   label: 'ノゾミのてのひら', emoji: '✋' },
          { id: 'flower', label: 'たんぽぽのはな',   emoji: '🌼' },
          { id: 'tree',   label: 'きのえだ',         emoji: '🌲' },
          { id: 'bench',  label: 'ベンチ',           emoji: '🪑' },
        ],
        explanation: '「ちょうちょうはノゾミのてのひらにとまりました」とあります。',
      },
    ],
  },
  {
    id: 'story-145', title: 'いちごつみ', difficulty: 1,
    estimatedMinutes: 2, icon: '🍓',
    story: 'はるやすみに、アミはかぞくでいちごつみにいきました。いちごのはたけにはあかくておいしそうないちごがたくさんなっていました。アミはあかいいちごをよっこつみました。「おいしい！」とアミはほっぺたをおさえてよろこびました。お母さんはみっこ、お父さんはふたことつみました。かぞくであわせてくつみになりました。つみたてのいちごはとてもあまくて、みんなにっこりしていました。おうちにかえってからいちごジャムをつくるとお母さんがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'アミはいちごをなんこつみましたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「アミはあかいいちごをよっこつみました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かぞくぜんいんでいちごはあわせてなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '9', color: 'red', shape: 'circle' }],
        options: [
          { id: '7', label: '7', emoji: '7️⃣' },
          { id: '8', label: '8', emoji: '8️⃣' },
          { id: '9', label: '9', emoji: '9️⃣' },
          { id: '10', label: '10', emoji: '🔟' },
        ],
        explanation: 'アミよっこ＋お母さんみっこ＋お父さんふたこで「くつみ（9こ）」です。',
      },
    ],
  },
  {
    id: 'story-146', title: 'たんぽぽのわたげ', difficulty: 1,
    estimatedMinutes: 2, icon: '🌼',
    story: 'こうえんのくさばにたんぽぽがさいていました。ヒロはしろいわたげがついたたんぽぽをみっぽんみつけました。「ふうってふくとばせるよ」とお姉さんがおしえてくれました。ヒロはたんぽぽをもって、いきをすってからおもいきりふきました。わたげがくものようにとんでいきました。「うわあ、とんだ！」とヒロはよろこびました。お姉さんも「ねがいごとをしながらふくといいよ」といいました。ヒロはもういっぽんひろって、ねがいごとをしながらふきました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ヒロがみつけたわたげのあるたんぽぽはなんぽんでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「しろいわたげがついたたんぽぽをみっぽんみつけました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'お姉さんがわたげをふくときにするといいといったことはなんですか？',
        tasks: [{ instruction: INS, optionId: 'wish', color: 'red', shape: 'circle' }],
        options: [
          { id: 'wish',  label: 'ねがいごとをする', emoji: '🌟' },
          { id: 'count', label: 'かずをかぞえる',   emoji: '🔢' },
          { id: 'eyes',  label: 'めをとじる',       emoji: '😌' },
          { id: 'shout', label: 'さけぶ',           emoji: '📣' },
        ],
        explanation: '「ねがいごとをしながらふくといいよ」とお姉さんがいいました。',
      },
    ],
  },
  {
    id: 'story-147', title: 'はるのごちそう', difficulty: 1,
    estimatedMinutes: 2, icon: '🍱',
    story: 'きょうのゆうごはんははるのごちそうです。お母さんがたけのこのたきこみごはんとはまぐりのおすいものとふきのとうのてんぷらをつくりました。「みんなはるのたべものだよ」とお母さんがせつめいしてくれました。ダイはてんぷらをさんこたべました。「ちょっとほろにがいけど、おいしい！」とダイがいいました。たきこみごはんはしゃもじでふたはいよそいました。「はるのごちそうはとくべつだね」とお父さんがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ダイはてんぷらをなんこたべましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「ダイはてんぷらをさんこたべました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'たきこみごはんのだいりょうはなんはいでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「しゃもじでふたはいよそいました」とあります。',
      },
    ],
  },
  {
    id: 'story-148', title: 'はるのにえ', difficulty: 1,
    estimatedMinutes: 2, icon: '🖼️',
    story: 'えのぐのじゅぎょうで、リョウははるのえをかきました。さくらのきとちょうちょうをかくことにしました。ピンクのえのぐでさくらのはなびらをたくさんかきました。みどりのえのぐできのみきをかきました。きいろのえのぐでちょうちょうをかきました。さいごにそらをあおいえのぐでぬりました。できあがると、せんせいが「はるらしくてすてきね」といってほめてくれました。リョウのえはかべにはられました。おかあさんが「じょうずにかけたね」とよろこびました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'リョウはちょうちょうをなにいろのえのぐでかきましたか？',
        tasks: [{ instruction: INS, optionId: 'yellow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'pink',   label: 'ぴんく', emoji: '🩷' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
        ],
        explanation: '「きいろのえのぐでちょうちょうをかきました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'そらをぬったのはなにいろのえのぐでしたか？',
        tasks: [{ instruction: INS, optionId: 'blue', color: 'red', shape: 'circle' }],
        options: [
          { id: 'pink',  label: 'ぴんく', emoji: '🩷' },
          { id: 'green', label: 'みどり', emoji: '🟢' },
          { id: 'blue',  label: 'あお',   emoji: '🔵' },
          { id: 'white', label: 'しろ',   emoji: '⬜' },
        ],
        explanation: '「そらをあおいえのぐでぬりました」とあります。',
      },
    ],
  },
  {
    id: 'story-149', title: 'かわのたんけん', difficulty: 1,
    estimatedMinutes: 2, icon: '🏞️',
    story: 'はるのひ、ケンはお父さんとちかくのかわへたんけんにいきました。かわのそばにはやなぎのきがあって、みどりのはがゆれていました。かわのなかをみると、ちいさなおたまじゃくしがさんびきおよいでいました。「いつかえるになるの？」とケンがきくと、「なつごろだよ」とお父さんがこたえました。かわべりにはすみれのむらさきのはながさいていました。「むらさきのはなきれいだね」とケンがいいました。かえりみちに、ちょうちょうをみっぴきかぞえました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かわのなかにいたおたまじゃくしはなんびきでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「おたまじゃくしがさんびきおよいでいました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'すみれのはなはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'purple', color: 'red', shape: 'circle' }],
        options: [
          { id: 'purple', label: 'むらさき', emoji: '🟣' },
          { id: 'yellow', label: 'きいろ',   emoji: '🟡' },
          { id: 'white',  label: 'しろ',     emoji: '⬜' },
          { id: 'pink',   label: 'ぴんく',   emoji: '🩷' },
        ],
        explanation: '「すみれのむらさきのはながさいていました」とあります。',
      },
    ],
  },
  {
    id: 'story-150', title: 'はるのおそうじ', difficulty: 1,
    estimatedMinutes: 2, icon: '🧹',
    story: 'はるになって、ナオはかぞくでおそうじをしました。お母さんはまどをふきました。お父さんはしゅうのうをかたづけました。ナオはじぶんのへやのそうじをしました。ほんをよっさつたなにならべて、おもちゃをはこにしまいました。「きれいになったね」とお母さんがいいました。さいごにみんなでゆかをそうじきでかけました。「ぴかぴかになった！」とナオはよろこびました。おそうじのあとはこころもすっきりした気もちになりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ナオがたなにならべたほんはなんさつでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「ほんをよっさつたなにならべて」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'お母さんがしたそうじはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'window', color: 'red', shape: 'circle' }],
        options: [
          { id: 'window',  label: 'まどをふく',   emoji: '🪟' },
          { id: 'storage', label: 'しゅうのうをかたづける', emoji: '📦' },
          { id: 'vacuum',  label: 'そうじきをかける', emoji: '🌀' },
          { id: 'floor',   label: 'ゆかをふく',   emoji: '🧹' },
        ],
        explanation: '「お母さんはまどをふきました」とあります。',
      },
    ],
  },
  {
    id: 'story-151', title: 'はるのむし', difficulty: 1,
    estimatedMinutes: 2, icon: '🐛',
    story: 'はるになって、アオはこうえんのくさむらでいろいろなむしをみつけました。まずてんとうむしをふたつみつけました。それからありのぎょうれつをみました。ありはちいさいのにじょうずにたべものをはこんでいました。「ありはちからもちだね」とアオはいいました。さいごにあおむしをひとつみつけました。「これがちょうちょうになるんだよ」とおばあちゃんがおしえてくれました。アオはびっくりして、あおむしをじっとみつめました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'アオがさいしょにみつけたむしはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'ladybug', color: 'red', shape: 'circle' }],
        options: [
          { id: 'ladybug', label: 'てんとうむし', emoji: '🐞' },
          { id: 'ant',     label: 'あり',         emoji: '🐜' },
          { id: 'worm',    label: 'あおむし',     emoji: '🐛' },
          { id: 'bee',     label: 'はち',         emoji: '🐝' },
        ],
        explanation: '「まずてんとうむしをふたつみつけました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'あおむしはなんになるとおばあちゃんがおしえてくれましたか？',
        tasks: [{ instruction: INS, optionId: 'butterfly', color: 'red', shape: 'circle' }],
        options: [
          { id: 'butterfly', label: 'ちょうちょう', emoji: '🦋' },
          { id: 'bee',       label: 'はち',         emoji: '🐝' },
          { id: 'ladybug',   label: 'てんとうむし', emoji: '🐞' },
          { id: 'ant',       label: 'あり',         emoji: '🐜' },
        ],
        explanation: '「これがちょうちょうになるんだよ」とおばあちゃんがおしえてくれました。',
      },
    ],
  },
  {
    id: 'story-152', title: 'おはなのかんむり', difficulty: 1,
    estimatedMinutes: 2, icon: '👑',
    story: 'はるのひ、マナはお母さんといっしょにはなのかんむりをつくりました。こうえんでつんだしろいしろつめくさをつかいました。くきをあみあみにあわせて、かんむりのかたちにつくりました。「かわいい！」とマナはよろこびました。しろつめくさをじゅうろっこつかいました。できあがったかんむりをあたまにのせてみると、ぴったりはまりました。お母さんにしゃしんをとってもらいました。「はるのおひめさまだ」とお母さんがわらいました。マナはとてもうれしくなりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かんむりをつくったはなはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'clover', color: 'red', shape: 'circle' }],
        options: [
          { id: 'clover',    label: 'しろつめくさ', emoji: '🍀' },
          { id: 'dandelion', label: 'たんぽぽ',     emoji: '🌼' },
          { id: 'violet',    label: 'すみれ',       emoji: '💜' },
          { id: 'tulip',     label: 'チューリップ', emoji: '🌷' },
        ],
        explanation: '「しろいしろつめくさをつかいました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'しろつめくさはなんこつかいましたか？',
        tasks: [{ instruction: INS, optionId: '16', color: 'red', shape: 'circle' }],
        options: [
          { id: '12', label: '12', emoji: '1️⃣2️⃣' },
          { id: '14', label: '14', emoji: '1️⃣4️⃣' },
          { id: '16', label: '16', emoji: '1️⃣6️⃣' },
          { id: '18', label: '18', emoji: '1️⃣8️⃣' },
        ],
        explanation: '「しろつめくさをじゅうろっこつかいました」とあります。',
      },
    ],
  },
  {
    id: 'story-153', title: 'はるのてつだい', difficulty: 1,
    estimatedMinutes: 2, icon: '🌿',
    story: 'はるのにちようびに、ケンタはおじいちゃんのはたけのてつだいをしました。はたけにはおおきなだいこんがよっぽんそだっていました。「そのだいこんをぬいてごらん」とおじいちゃんがいいました。ケンタはちからをこめてひっぱると、おおきなだいこんがぬけました。「うわあ、おおきい！」とびっくりしました。おじいちゃんはにこにこしながら「よくとれたね」とほめてくれました。おうちにもってかえって、だいこんのみそしるをつくりました。とてもあまくておいしかったです。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'はたけにそだっていただいこんはなんぽんでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「おおきなだいこんがよっぽんそだっていました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'だいこんでなにをつくりましたか？',
        tasks: [{ instruction: INS, optionId: 'miso', color: 'red', shape: 'circle' }],
        options: [
          { id: 'miso',  label: 'みそしる', emoji: '🍜' },
          { id: 'salad', label: 'サラダ',   emoji: '🥗' },
          { id: 'stew',  label: 'シチュー', emoji: '🍲' },
          { id: 'oden',  label: 'おでん',   emoji: '🍢' },
        ],
        explanation: '「だいこんのみそしるをつくりました」とあります。',
      },
    ],
  },
  {
    id: 'story-154', title: 'しゃぼんだま', difficulty: 1,
    estimatedMinutes: 2, icon: '🫧',
    story: 'はれたはるのひ、リサはこうえんでしゃぼんだまをしました。ストローをつかって、そーっとふくと、おおきなしゃぼんだまができました。「やったあ！」とリサはよろこびました。しゃぼんだまはにじいろにかがやいて、とてもきれいでした。みっつつくったとき、かぜがふいてしゃぼんだまがどこかへとんでいきました。「もういっかいやろう」とリサはもういちどふきました。きょうだけでじゅっこいじょうのしゃぼんだまをつくりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'しゃぼんだまをつくるためにつかったものはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'straw', color: 'red', shape: 'circle' }],
        options: [
          { id: 'straw', label: 'ストロー', emoji: '🥤' },
          { id: 'ring',  label: 'わっか',   emoji: '⭕' },
          { id: 'pipe',  label: 'パイプ',   emoji: '🔧' },
          { id: 'tube',  label: 'チューブ', emoji: '🔩' },
        ],
        explanation: '「ストローをつかって」しゃぼんだまをつくりました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かぜがふくまえにしゃぼんだまをいくつつくっていましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「みっつつくったとき、かぜがふいて」とあります。',
      },
    ],
  },
  {
    id: 'story-155', title: 'はるのどうぶつえん', difficulty: 1,
    estimatedMinutes: 2, icon: '🦁',
    story: 'はるやすみに、タロウはかぞくでどうぶつえんにいきました。さいしょにゾウをみました。ゾウははながとてもながくて、みずをおもしろそうにのんでいました。つぎにきりんをみました。きりんはくびがながくて、たかいところのはをたべていました。さいごにライオンをみました。ライオンはおひさまのあたるいわのうえでひるねをしていました。「いちばんおもしろかったのはどれ？」とお母さんがきくと、「ゾウ！」とタロウはすぐにこたえました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'どうぶつえんでさいしょにみたどうぶつはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'elephant', color: 'red', shape: 'circle' }],
        options: [
          { id: 'elephant', label: 'ゾウ',   emoji: '🐘' },
          { id: 'giraffe',  label: 'きりん', emoji: '🦒' },
          { id: 'lion',     label: 'ライオン', emoji: '🦁' },
          { id: 'tiger',    label: 'とら',   emoji: '🐯' },
        ],
        explanation: '「さいしょにゾウをみました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ライオンはどこでひるねをしていましたか？',
        tasks: [{ instruction: INS, optionId: 'rock', color: 'red', shape: 'circle' }],
        options: [
          { id: 'rock',  label: 'いわのうえ',   emoji: '🪨' },
          { id: 'tree',  label: 'きのかげ',     emoji: '🌲' },
          { id: 'grass', label: 'くさのうえ',   emoji: '🌿' },
          { id: 'water', label: 'みずのちかく', emoji: '💧' },
        ],
        explanation: '「おひさまのあたるいわのうえでひるねをしていました」とあります。',
      },
    ],
  },
  {
    id: 'story-156', title: 'はるのソファ読書', difficulty: 1,
    estimatedMinutes: 2, icon: '📘',
    story: 'はるのごご、ミユはえのぐのじかんをつかってほんをよみました。あたたかいひざしのなか、ソファにすわって、すきなえほんをよみました。「ぞうのアップリフト」というほんで、あおいしょうひょうのながいゾウのおはなしでした。ほんのなかにはくだものがたくさんでてきました。りんごがみっつ、バナナがふたつ、いちごがよっこでてきました。「このほんをまたよみたいな」とミユはおもいました。さいごのページをとじると、ひざしがきもちよくてうとうとしてしまいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ほんのなかにでてきたりんごはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「りんごがみっつ」でてきました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ほんのなかにでてきたいちごはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「いちごがよっこ」でてきました。',
      },
    ],
  },
  {
    id: 'story-157', title: 'はるのしょくじ', difficulty: 1,
    estimatedMinutes: 2, icon: '🍜',
    story: 'はるのひ、アキはおばあちゃんといっしょにうどんをつくりました。おばあちゃんがこねたうどんのきじをのばして、ほそくきりました。「おばあちゃん、じょうず！」とアキがいいました。ゆでたうどんにたけのことわかめとかまぼこをのせました。「いただきます」といっていっしょにたべました。「あたたかくておいしい！」とアキはよろこびました。「うどんはつくるのがむずかしいけど、いっしょにつくるとたのしいね」とおばあちゃんがいいました。アキは「またつくりたい」とおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'うどんにのせていないものはどれですか？',
        tasks: [{ instruction: INS, optionId: 'tofu', color: 'red', shape: 'circle' }],
        options: [
          { id: 'takenoko', label: 'たけのこ',   emoji: '🌿' },
          { id: 'wakame',   label: 'わかめ',     emoji: '🌊' },
          { id: 'kamaboko', label: 'かまぼこ',   emoji: '🍥' },
          { id: 'tofu',     label: 'とうふ',     emoji: '⬜' },
        ],
        explanation: '「たけのことわかめとかまぼこをのせました」で、とうふはのせていません。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'うどんのきじをつくったのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'grandma', color: 'red', shape: 'circle' }],
        options: [
          { id: 'grandma', label: 'おばあちゃん', emoji: '👵' },
          { id: 'aki',     label: 'アキ',         emoji: '👧' },
          { id: 'both',    label: 'ふたりいっしょ', emoji: '👧👵' },
          { id: 'mom',     label: 'お母さん',       emoji: '👩' },
        ],
        explanation: '「おばあちゃんがこねたうどんのきじをのばして」とあります。',
      },
    ],
  },
  {
    id: 'story-158', title: 'さくらのかみしばい', difficulty: 1,
    estimatedMinutes: 2, icon: '🎴',
    story: 'はるやすみにとしょかんへいきました。コウタはじぶんでさくらのかみしばいをつくることにしました。かみをよっまいつかって、さくらのはなをかきました。いちまいめはさくらのきのえ、にまいめははなびらがとぶえ、さんまいめはこどもがはなをみているえ、よんまいめはよるのさくらのえをかきました。できあがったかみしばいをせんせいにみせると「じょうずだね」とほめてくれました。ともだちのまえでよんだら、みんながきいてくれてうれしかったです。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かみしばいにつかったかみはなんまいでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「かみをよっまいつかって」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'にまいめのかみのえはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'petals', color: 'red', shape: 'circle' }],
        options: [
          { id: 'tree',     label: 'さくらのきのえ',     emoji: '🌸' },
          { id: 'petals',   label: 'はなびらがとぶえ',   emoji: '🌸' },
          { id: 'children', label: 'こどもがみているえ', emoji: '👧' },
          { id: 'night',    label: 'よるのさくらのえ',   emoji: '🌙' },
        ],
        explanation: '「にまいめははなびらがとぶえ」をかきました。',
      },
    ],
  },
  {
    id: 'story-159', title: 'はるのコンサート', difficulty: 1,
    estimatedMinutes: 2, icon: '🎶',
    story: 'はるに、ようちえんのおんがくはっぴょうかいがありました。ユナはピアニカをえんそうしました。「ちゅうりっぷ」というきょくをれんしゅうしてきました。ほんばんのまえは、むねがどきどきしていました。ステージにあがると、せんせいが「じゃあ、はじめていいよ」といいました。ユナはゆっくりひきはじめました。まちがえないようにていねいにひきました。ひきおわると、おきゃくさんがてをたたいてくれました。「じょうずだったよ」とお父さんがほめてくれました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ユナがえんそうしたがっきはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'pianica', color: 'red', shape: 'circle' }],
        options: [
          { id: 'pianica', label: 'ピアニカ', emoji: '🎹' },
          { id: 'violin',  label: 'バイオリン', emoji: '🎻' },
          { id: 'drum',    label: 'たいこ',    emoji: '🥁' },
          { id: 'flute',   label: 'フルート',  emoji: '🎵' },
        ],
        explanation: '「ユナはピアニカをえんそうしました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'えんそうしたきょくのなまえはなんですか？',
        tasks: [{ instruction: INS, optionId: 'tulip', color: 'red', shape: 'circle' }],
        options: [
          { id: 'tulip',  label: 'ちゅうりっぷ', emoji: '🌷' },
          { id: 'sakura', label: 'さくら',       emoji: '🌸' },
          { id: 'spring', label: 'はるのうた',   emoji: '🎵' },
          { id: 'flower', label: 'おはなのうた', emoji: '🌸' },
        ],
        explanation: '「ちゅうりっぷというきょく」をえんそうしました。',
      },
    ],
  },
  {
    id: 'story-160', title: 'はるのえんそく', difficulty: 1,
    estimatedMinutes: 2, icon: '🎒',
    story: 'きょうはようちえんのはるのえんそくです。バスにのってひろいこうえんへいきました。こうえんにつくと、みんなでおにごっこをしました。つぎにしろいしとはなをさがすあそびをしました。マナはたんぽぽをさんぼん、すみれをふたつみつけました。おひるにはおべんとうをひろいましたのうえでたべました。マナのおべんとうにはからあげとたまごやきとブロッコリーがはいっていました。「えんそくのごはんはおいしいね」とともだちのユイがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'マナがみつけたたんぽぽはなんぼんでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「たんぽぽをさんぼん」みつけました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'マナのおべんとうにはいっていないものはどれですか？',
        tasks: [{ instruction: INS, optionId: 'onigiri', color: 'red', shape: 'circle' }],
        options: [
          { id: 'karaage',    label: 'からあげ',   emoji: '🍗' },
          { id: 'tamagoyaki', label: 'たまごやき', emoji: '🍳' },
          { id: 'broccoli',   label: 'ブロッコリー', emoji: '🥦' },
          { id: 'onigiri',    label: 'おにぎり',   emoji: '🍙' },
        ],
        explanation: '「からあげとたまごやきとブロッコリーがはいっていました」で、おにぎりははいっていません。',
      },
    ],
  },
  {
    id: 'story-161', title: 'はるのスープ', difficulty: 1,
    estimatedMinutes: 2, icon: '🍲',
    story: 'はるのひ、ソウタはお母さんといっしょにたけのこスープをつくりました。たけのこをさんきれにきって、にんじんをふたきれそえました。おなべでコトコトにると、いいにおいがしてきました。「たけのこはにおいがいいね」とソウタがいいました。できあがったスープをおわんによそって、みんなでたべました。お父さんが「はるのたけのこはやわらかくておいしいね」とほめました。ソウタはふたはいたべました。「またつくりたいな」とおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'スープにいれたたけのこはなんきれでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「たけのこをさんきれにきって」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ソウタはスープをなんばいたべましたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「ふたはいたべました」とあります。',
      },
    ],
  },
  {
    id: 'story-162', title: 'はるのあたらしいともだち', difficulty: 1,
    estimatedMinutes: 2, icon: '👫',
    story: 'しょうがっこうのにゅうがくしきのひ、リカはあたらしいともだちのハナとであいました。ハナはみどりのランドセルをせおっていました。リカはあかいランドセルをせおっていました。「なまえはなに？」とリカがきくと、「ハナです」といいました。「いっしょにあそぼう」とリカがさそうと、ハナはうれしそうにうなずきました。ふたりはきゅうけいじかんにすべりだいであそびました。「ともだちができてよかった」とリカはおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ハナのランドセルはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
        ],
        explanation: '「ハナはみどりのランドセルをせおっていました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'きゅうけいじかんにふたりがしたあそびはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'slide', color: 'red', shape: 'circle' }],
        options: [
          { id: 'slide',   label: 'すべりだい',   emoji: '🛝' },
          { id: 'swing',   label: 'ブランコ',     emoji: '🎠' },
          { id: 'sandbox', label: 'すなばあそび', emoji: '🏖️' },
          { id: 'tag',     label: 'おにごっこ',   emoji: '🏃' },
        ],
        explanation: '「すべりだいであそびました」とあります。',
      },
    ],
  },
  {
    id: 'story-163', title: 'はるのにおい', difficulty: 1,
    estimatedMinutes: 2, icon: '🌺',
    story: 'はるのひなたぼっこをしながら、ナルはおかあさんとはなのにおいをかぎました。さきはじめたすみれのはなはあまいにおいがしました。さくらはふわふわとしたやさしいにおいでした。れんぎょうのきいろいはなはすっきりしたにおいでした。「いちばんすきなにおいはどれ？」とお母さんがきくと、「すみれ！」とナルはすぐにこたえました。「どうして？」「あまくてきもちいいから」とナルがこたえました。はるのにおいをいっぱいすいこんで、ナルはしあわせなきもちになりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ナルがいちばんすきなはなのにおいはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'violet', color: 'red', shape: 'circle' }],
        options: [
          { id: 'violet',   label: 'すみれ',   emoji: '💜' },
          { id: 'cherry',   label: 'さくら',   emoji: '🌸' },
          { id: 'forsythia', label: 'れんぎょう', emoji: '🌼' },
          { id: 'plum',     label: 'うめ',     emoji: '🌸' },
        ],
        explanation: '「すみれ！」とナルはすぐにこたえました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'れんぎょうのはなはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'yellow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'yellow', label: 'きいろ',   emoji: '🟡' },
          { id: 'purple', label: 'むらさき', emoji: '🟣' },
          { id: 'pink',   label: 'ぴんく',   emoji: '🩷' },
          { id: 'white',  label: 'しろ',     emoji: '⬜' },
        ],
        explanation: '「れんぎょうのきいろいはな」とあります。',
      },
    ],
  },
  {
    id: 'story-164', title: 'はるのかんさつ', difficulty: 1,
    estimatedMinutes: 2, icon: '🔍',
    story: 'ようちえんで、シンははたけのやさいをかんさつしました。にんじんのはっぱがよっぽん、かぶのはっぱがさんぽんでていました。かんさつノートにえをかきました。つぎの日もかんさつすると、にんじんのはっぱがごほんになっていました。「いちばんおおきくなっているね」とシンはよろこびました。せんせいが「まいにちみてあげるといいね」とおしえてくれました。シンはこれからまいにちかんさつしようとけっしんしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'さいしょのかんさつでにんじんのはっぱはなんぽんでていましたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「にんじんのはっぱがよっぽん」でていました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'つぎのひのかんさつでにんじんのはっぱはなんぽんになっていましたか？',
        tasks: [{ instruction: INS, optionId: '5', color: 'red', shape: 'circle' }],
        options: [
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
        ],
        explanation: '「にんじんのはっぱがごほんになっていました」とあります。',
      },
    ],
  },
  {
    id: 'story-165', title: 'はるのクッキー', difficulty: 1,
    estimatedMinutes: 2, icon: '🍪',
    story: 'はるのひ、カエデはお母さんといっしょにさくらのかたちのクッキーをつくりました。こむぎこをまぜて、きじをつくりました。さくらのかたのぬきがたでよっこぬきました。おかにいれてやいたら、あまいにおいがしてきました。できあがったクッキーにピンクのアイシングをぬると、さくらそっくりになりました。「かわいい！たべるのがもったいない」とカエデがいいました。それでもひとくちたべると「おいしい！」と大きなこえになってしまいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ぬきがたでぬいたクッキーはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「さくらのかたのぬきがたでよっこぬきました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'クッキーにぬったアイシングはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'pink', color: 'red', shape: 'circle' }],
        options: [
          { id: 'pink',   label: 'ぴんく', emoji: '🩷' },
          { id: 'white',  label: 'しろ',   emoji: '⬜' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'red',    label: 'あか',   emoji: '🔴' },
        ],
        explanation: '「ピンクのアイシングをぬると」とあります。',
      },
    ],
  },
  {
    id: 'story-166', title: 'はるのわかれとであい', difficulty: 1,
    estimatedMinutes: 2, icon: '🌷',
    story: 'はるはわかれとであいのきせつです。ヒカルはようちえんをそつえんして、しょうがっこうにはいることになりました。さいごのひ、せんせいからちいさなチューリップのはなをもらいました。「このはなのように、すくすくそだってね」とせんせいがいいました。ヒカルはてをぐっとにぎって「はい、がんばります！」といいました。おうちにかえって、もらったチューリップをかびんにいれました。あかとしろのチューリップがふたつ、まどのひかりにてらされてきれいにかがやいていました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'せんせいからもらったはなはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'tulip', color: 'red', shape: 'circle' }],
        options: [
          { id: 'tulip',     label: 'チューリップ', emoji: '🌷' },
          { id: 'dandelion', label: 'たんぽぽ',     emoji: '🌼' },
          { id: 'cherry',    label: 'さくら',       emoji: '🌸' },
          { id: 'violet',    label: 'すみれ',       emoji: '💜' },
        ],
        explanation: '「ちいさなチューリップのはなをもらいました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かびんにいれたチューリップはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「あかとしろのチューリップがふたつ」とあります。',
      },
    ],
  },
]
