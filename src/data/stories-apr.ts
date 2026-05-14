import type { Story } from '../types'

const INS = 'ただしいこたえをえらんで、あかでまるをおしてください'

export const storiesApr: Story[] = [
  // ===== 4月 やさしい（30問） =====
  {
    id: 'story-167', title: 'にゅうがくしきのあさ', difficulty: 1,
    estimatedMinutes: 2, icon: '🎒',
    story: 'きょうはにゅうがくしきです。ソウタはあたらしいランドセルをせおって、がっこうへいきました。ランドセルはこんいろでした。こうていにはさくらがまんかいにさいていました。「きれいだな」とソウタはみあげました。しきでは、こうちょうせんせいのおはなしをきいて、なまえをよばれたらへんじをしました。「ソウタ！」とよばれたとき、「はい！」とげんきよくこたえました。「これからがっこうがはじまるね」とソウタはむねがわくわくしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ソウタのランドセルはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'navy', color: 'red', shape: 'circle' }],
        options: [
          { id: 'navy',  label: 'こんいろ', emoji: '🟦' },
          { id: 'red',   label: 'あか',     emoji: '🔴' },
          { id: 'black', label: 'くろ',     emoji: '⬛' },
          { id: 'green', label: 'みどり',   emoji: '🟢' },
        ],
        explanation: '「ランドセルはこんいろでした」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'こうていのさくらはどのようなじょうたいでしたか？',
        tasks: [{ instruction: INS, optionId: 'fullbloom', color: 'red', shape: 'circle' }],
        options: [
          { id: 'fullbloom', label: 'まんかい',   emoji: '🌸' },
          { id: 'bud',       label: 'つぼみ',     emoji: '🌱' },
          { id: 'fallen',    label: 'ちってしまった', emoji: '🍂' },
          { id: 'half',      label: 'はんぶんさいた', emoji: '🌸' },
        ],
        explanation: '「さくらがまんかいにさいていました」とあります。',
      },
    ],
  },
  {
    id: 'story-168', title: 'はじめてのじゅぎょう', difficulty: 1,
    estimatedMinutes: 2, icon: '📝',
    story: 'しょうがっこうにはいって、はじめてのじゅぎょうがありました。リナのクラスはさんじゅうにんです。せんせいのなまえはやまださんでした。「なまえをかいてみましょう」とせんせいがいいました。リナははじめてのじゅぎょうでじぶんのなまえをかきました。えんぴつをゆっくりうごかして、ていねいにかきました。「じょうずにかけたね」とやまださんせいがほめてくれました。リナはとてもうれしくなって、「がんばるぞ」とおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'リナのクラスはなんにんでしたか？',
        tasks: [{ instruction: INS, optionId: '30', color: 'red', shape: 'circle' }],
        options: [
          { id: '25', label: '25', emoji: '2️⃣5️⃣' },
          { id: '28', label: '28', emoji: '2️⃣8️⃣' },
          { id: '30', label: '30', emoji: '3️⃣0️⃣' },
          { id: '32', label: '32', emoji: '3️⃣2️⃣' },
        ],
        explanation: '「リナのクラスはさんじゅうにんです」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'はじめてのじゅぎょうでリナがかいたのはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'name', color: 'red', shape: 'circle' }],
        options: [
          { id: 'name',   label: 'じぶんのなまえ', emoji: '✍️' },
          { id: 'number', label: 'すうじ',         emoji: '🔢' },
          { id: 'picture', label: 'えをかいた',    emoji: '🖼️' },
          { id: 'letter', label: 'てがみ',         emoji: '✉️' },
        ],
        explanation: '「じぶんのなまえをかきました」とあります。',
      },
    ],
  },
  {
    id: 'story-169', title: 'はるのさんぽ', difficulty: 1,
    estimatedMinutes: 2, icon: '🌸',
    story: 'にちようびのごご、ユウキはお母さんといっしょにさくらの名所へさんぽにいきました。みちのりょうがわにさくらのきがならんでいて、ピンクのはなびらがたくさんさいていました。はなびらがかぜでひらひらとちってきました。「ゆきみたいだね」とお母さんがいいました。かわのそばにいくと、みずにもさくらのはなびらがうかんでいました。みっつかぞえるとまたふえていきました。「またらいねんもくようね」とお母さんがいいました。ユウキはうんとうなずきました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かわのみずにうかんでいたはなびらをはじめにかぞえるといくつでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「みっつかぞえると」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'はなびらがちってくるようすをお母さんはなにのようだといいましたか？',
        tasks: [{ instruction: INS, optionId: 'snow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'snow',  label: 'ゆき',   emoji: '❄️' },
          { id: 'rain',  label: 'あめ',   emoji: '🌧️' },
          { id: 'cloud', label: 'くも',   emoji: '☁️' },
          { id: 'star',  label: 'ほし',   emoji: '⭐' },
        ],
        explanation: '「ゆきみたいだね」とお母さんがいいました。',
      },
    ],
  },
  {
    id: 'story-170', title: 'こいのぼりのじゅんび', difficulty: 1,
    estimatedMinutes: 2, icon: '🎏',
    story: 'こどもの日のまえに、ハルカはお父さんといっしょにこいのぼりをかざりました。まずあおいこいのぼりをさいしょにあげました。つぎにあかいこいのぼりをあげました。さいごにきんいろのこいのぼりをあげました。ぜんぶでさんびきのこいのぼりがおそらをおよいでいます。「かぜのなかをおよいでいるみたいだね」とハルカがいいました。お父さんが「このこいのぼりはおじいちゃんがかってくれたんだよ」とおしえてくれました。ハルカは「おじいちゃんにありがとういわなきゃ」とおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'さいしょにあげたこいのぼりはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'blue', color: 'red', shape: 'circle' }],
        options: [
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'gold',   label: 'きんいろ', emoji: '🌟' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「まずあおいこいのぼりをさいしょにあげました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'こいのぼりはぜんぶでなんびきでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「ぜんぶでさんびきのこいのぼり」とあります。',
      },
    ],
  },
  {
    id: 'story-171', title: 'はるのおやつ', difficulty: 1,
    estimatedMinutes: 2, icon: '🍡',
    story: 'はなみのあと、アキはお母さんといっしょにはなみだんごをたべました。みどりとしろとももいろのさんしょくだんごが、くしにさしてありました。「みどりはよもぎ、しろはプレーン、ももいろはさくら味だよ」とお母さんがおしえてくれました。アキはさくらのだんごからたべました。「あまくておいしい！」とアキはよろこびました。だんごのくしはふたりでにほんたべました。「またはなみにきたいな」とアキがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'さくらのだんごはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'pink', color: 'red', shape: 'circle' }],
        options: [
          { id: 'green', label: 'みどり',   emoji: '🟢' },
          { id: 'white', label: 'しろ',     emoji: '⬜' },
          { id: 'pink',  label: 'ももいろ', emoji: '🩷' },
          { id: 'yellow', label: 'きいろ',  emoji: '🟡' },
        ],
        explanation: '「ももいろはさくら味だよ」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ふたりでたべただんごのくしはなんぼんでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「ふたりでにほんたべました」とあります。',
      },
    ],
  },
  {
    id: 'story-172', title: 'はじめてのきゅうしょく', difficulty: 1,
    estimatedMinutes: 2, icon: '🍱',
    story: 'しょうがっこうにはいって、はじめてきゅうしょくをたべました。ケイのクラスでは、じぶんたちではこびをしました。ケイはじゅうにゅうをよんほんはこびました。きょうのメニューはカレーとサラダとゼリーでした。「おいしい！」とケイはよろこびました。ゼリーはきいろいれもんあじでした。たべおわると、みんなで「ごちそうさまでした」といいました。「きゅうしょくってたのしいね」とケイはともだちにいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ケイがはこんだじゅうにゅうはなんほんでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「じゅうにゅうをよんほんはこびました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'きゅうしょくのゼリーはなにあじでしたか？',
        tasks: [{ instruction: INS, optionId: 'lemon', color: 'red', shape: 'circle' }],
        options: [
          { id: 'lemon',      label: 'れもん',   emoji: '🍋' },
          { id: 'strawberry', label: 'いちご',   emoji: '🍓' },
          { id: 'grape',      label: 'ぶどう',   emoji: '🍇' },
          { id: 'melon',      label: 'めろん',   emoji: '🍈' },
        ],
        explanation: '「きいろいれもんあじでした」とあります。',
      },
    ],
  },
  {
    id: 'story-173', title: 'はるのたいそう', difficulty: 1,
    estimatedMinutes: 2, icon: '🏃',
    story: 'ようちえんのあさのたいそうのじかんです。マナはともだちといっしょにたいそうをしました。まずじゅんびたいそうをさんかいしました。つぎにラジオたいそうをしました。それからとびはねるたいそうをにかいしました。「みんなげんきいいね」とせんせいがほめてくれました。たいそうがおわると、からだがほかほかしてきました。「あついね」とマナがいうと、「はるのあいだにからだをきたえてかろうね」とせんせいがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'じゅんびたいそうはなんかいしましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「じゅんびたいそうをさんかいしました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'とびはねるたいそうはなんかいしましたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「とびはねるたいそうをにかいしました」とあります。',
      },
    ],
  },
  {
    id: 'story-174', title: 'はるのかばんのなか', difficulty: 1,
    estimatedMinutes: 2, icon: '🎒',
    story: 'しょうがっこうのじゅんびをしました。ユナはおかあさんといっしょにランドセルのなかみをたしかめました。えんぴつをさんぼん、けしごむをひとつ、のりをひとつ、じょうぎをひとつ、はさみをひとついれました。「ほかになにかいる？」とお母さんがきくと、「クレヨンも！」とユナがいいました。クレヨンのはこもいれました。「じゅんびばっちりだ」とユナはランドセルをせおってにこにこしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ランドセルにいれたえんぴつはなんぼんでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「えんぴつをさんぼん」いれました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ユナがあとからいれたものはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'crayon', color: 'red', shape: 'circle' }],
        options: [
          { id: 'crayon', label: 'クレヨン', emoji: '🖍️' },
          { id: 'pencil', label: 'えんぴつ', emoji: '✏️' },
          { id: 'eraser', label: 'けしごむ', emoji: '🧹' },
          { id: 'ruler',  label: 'じょうぎ', emoji: '📏' },
        ],
        explanation: '「クレヨンも！」とユナがいいました。',
      },
    ],
  },
  {
    id: 'story-175', title: 'はるのおべんとう', difficulty: 1,
    estimatedMinutes: 2, icon: '🍱',
    story: 'にちようびのはなみに、コウはお母さんといっしょにおべんとうをつくりました。さくらのかたぬきでごはんをひとつ、ハートのかたぬきでごはんをひとつつくりました。おかずはたまごやきとミニトマトとブロッコリーをいれました。「はるらしくてかわいい！」とコウはよろこびました。こうえんでひろげると、ともだちが「かわいいね」とほめてくれました。コウはじぶんでつくったとはいわずに、「ありがとう」といいながらはずかしくなりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'さくらのかたぬきでつくったごはんはいくつでしたか？',
        tasks: [{ instruction: INS, optionId: '1', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「さくらのかたぬきでごはんをひとつ」つくりました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'おべんとうにはいっていないものはどれですか？',
        tasks: [{ instruction: INS, optionId: 'karaage', color: 'red', shape: 'circle' }],
        options: [
          { id: 'tamagoyaki', label: 'たまごやき',   emoji: '🍳' },
          { id: 'tomato',     label: 'ミニトマト',   emoji: '🍅' },
          { id: 'broccoli',   label: 'ブロッコリー', emoji: '🥦' },
          { id: 'karaage',    label: 'からあげ',     emoji: '🍗' },
        ],
        explanation: 'おかずは「たまごやきとミニトマトとブロッコリー」で、からあげははいっていません。',
      },
    ],
  },
  {
    id: 'story-176', title: 'はるのせいかつめもり', difficulty: 1,
    estimatedMinutes: 2, icon: '📏',
    story: 'ようちえんではるのせいかつめもりをしました。リョウはかべのしるしで身長をはかりました。「よんじゅっぱっセンチ！」とせんせいがいいました。さいごにはかったのはふゆでよんじゅうごセンチだったので、さんセンチのびていました。「よくのびたね」とせんせいがほめてくれました。つぎにたいじゅうもはかりました。にじゅうキロでした。「げんきにそだっているね」とせんせいがいいました。リョウはもっとのびようとおもいながら、ぎゅうにゅうをのもうとけっしんしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'はるのリョウのしんちょうはなんセンチでしたか？',
        tasks: [{ instruction: INS, optionId: '108', color: 'red', shape: 'circle' }],
        options: [
          { id: '105', label: '105cm', emoji: '📏' },
          { id: '108', label: '108cm', emoji: '📏' },
          { id: '110', label: '110cm', emoji: '📏' },
          { id: '112', label: '112cm', emoji: '📏' },
        ],
        explanation: '「よんじゅっぱっセンチ（108cm）！」とせんせいがいいました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ふゆとくらべてしんちょうはなんセンチのびましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「さんセンチのびていました」とあります。',
      },
    ],
  },
  {
    id: 'story-177', title: 'はるのひ日記', difficulty: 1,
    estimatedMinutes: 2, icon: '📓',
    story: 'ハナははるのひっこしをきっかけに、日記をかくことにしました。まずあたらしいよるのことをかきました。あたらしいいえのまわりにさくらのきがさんぽんあって、まいあさみながらがっこうへいけることをかきました。「きょうのできごとをかいておくと、あとでたのしいね」とお母さんがいいました。ハナはさっそくいちじつめの日記をかきました。えんぴつをにほんつかって、みっぺーじいっぱいにかきました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'いえのまわりにあったさくらのきはなんぽんでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「さくらのきがさんぽんあって」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ハナが日記をかくのにつかったえんぴつはなんぼんでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「えんぴつをにほんつかって」とあります。',
      },
    ],
  },
  {
    id: 'story-178', title: 'こどものひのかぶとかざり', difficulty: 1,
    estimatedMinutes: 2, icon: '⛩️',
    story: 'こどもの日のじゅんびとして、カズマはかぶとをおりがみでつくりました。まずおじいちゃんがおりかたをおしえてくれました。みどりのおりがみをいちまいつかいました。せんにそってしっかりおりました。「ここがいちばんむずかしいよ」とおじいちゃんがいいました。カズマはていねいにおって、さいごにかたちをととのえました。できあがったかぶとはとてもりっぱでした。「かぶってみて」とおじいちゃんがいったので、カズマはかぶってみました。ちょっとおおきかったけれど、うれしかったです。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かぶとはなにいろのおりがみでつくりましたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
        ],
        explanation: '「みどりのおりがみをいちまいつかいました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かぶとのおりかたをおしえてくれたのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'grandpa', color: 'red', shape: 'circle' }],
        options: [
          { id: 'grandpa', label: 'おじいちゃん', emoji: '👴' },
          { id: 'dad',     label: 'お父さん',     emoji: '👨' },
          { id: 'mom',     label: 'お母さん',     emoji: '👩' },
          { id: 'teacher', label: 'せんせい',     emoji: '👩‍🏫' },
        ],
        explanation: '「おじいちゃんがおりかたをおしえてくれました」とあります。',
      },
    ],
  },
  {
    id: 'story-179', title: 'はるのきゅうけい', difficulty: 1,
    estimatedMinutes: 2, icon: '🌼',
    story: 'がっこうのやすみじかん、アイはともだちのミサとコウといっしょにこうていであそびました。みんなでおにごっこをさんかいしました。つぎにはないちもんめをしました。きゅうけいがおわるとき、アイはたんぽぽのはなをふたつみつけました。「もってかえっていい？」とせんせいにきくと、「うちわにかざりましょう」といってくれました。アイはたいせつにポケットにいれておうちへかえりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'おにごっこはなんかいしましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「おにごっこをさんかいしました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'アイがみつけたたんぽぽはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「たんぽぽのはなをふたつみつけました」とあります。',
      },
    ],
  },
  {
    id: 'story-180', title: 'はるのスケッチ', difficulty: 1,
    estimatedMinutes: 2, icon: '✏️',
    story: 'こうえんではるのスケッチをしました。タカシはスケッチブックにさくらのきをかきました。えんぴつでりんかくをかいてから、みずいろのえのぐでそらをぬりました。さくらのはなはピンクでていねいにぬりました。きのみきはちゃいろでかきました。できあがったスケッチをみると、とてもはるらしいえになっていました。「せんせいにみせたいな」とタカシはたのしみにしながらおうちへかえりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'そらはなにいろでぬりましたか？',
        tasks: [{ instruction: INS, optionId: 'lightblue', color: 'red', shape: 'circle' }],
        options: [
          { id: 'lightblue', label: 'みずいろ', emoji: '💧' },
          { id: 'blue',      label: 'あお',     emoji: '🔵' },
          { id: 'white',     label: 'しろ',     emoji: '⬜' },
          { id: 'gray',      label: 'はいいろ', emoji: '🩶' },
        ],
        explanation: '「みずいろのえのぐでそらをぬりました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'きのみきはなにいろでかきましたか？',
        tasks: [{ instruction: INS, optionId: 'brown', color: 'red', shape: 'circle' }],
        options: [
          { id: 'brown',  label: 'ちゃいろ', emoji: '🟤' },
          { id: 'green',  label: 'みどり',   emoji: '🟢' },
          { id: 'black',  label: 'くろ',     emoji: '⬛' },
          { id: 'yellow', label: 'きいろ',   emoji: '🟡' },
        ],
        explanation: '「きのみきはちゃいろでかきました」とあります。',
      },
    ],
  },
  {
    id: 'story-181', title: 'はるのうえきばち', difficulty: 1,
    estimatedMinutes: 2, icon: '🌱',
    story: 'マリはおかあさんといっしょにうえきばちにパンジーをうえました。まずうえきばちにつちをいれました。パンジーのなえをよっつかいました。むらさきのパンジーをふたつ、きいろのパンジーをふたつうえました。「まいにちみずをあげてね」とお母さんがいいました。マリはじょうろでみずをたっぷりあげました。パンジーのはなをみると「きれいだな」とにこにこしました。「はやくもっとさいてくれないかな」とマリはたのしみにしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'うえたパンジーのなえはぜんぶでいくつでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「パンジーのなえをよっつかいました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'むらさきのパンジーはいくつうえましたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「むらさきのパンジーをふたつ」うえました。',
      },
    ],
  },
  {
    id: 'story-182', title: 'はるのてつぼう', difficulty: 1,
    estimatedMinutes: 2, icon: '🏅',
    story: 'こうえんのてつぼうであそびました。ノブはまずぶらさがってさんびょうかぞえました。つぎにまえまわりにちょうせんしました。さいしょはこわくてできませんでした。「できるよ、やってごらん」とお父さんがはげましてくれました。ノブはゆうきをだして、まえまわりをしました。「やった！できた！」とノブはおおよろこびでした。お父さんも「じょうずにできたね」とほめてくれました。ノブはうれしくて、もういちどまえまわりをしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'てつぼうでぶらさがってかぞえたびょうすうはなんびょうでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「ぶらさがってさんびょうかぞえました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ノブをはげましてくれたのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'dad', color: 'red', shape: 'circle' }],
        options: [
          { id: 'dad',     label: 'お父さん', emoji: '👨' },
          { id: 'mom',     label: 'お母さん', emoji: '👩' },
          { id: 'friend',  label: 'ともだち', emoji: '👦' },
          { id: 'teacher', label: 'せんせい', emoji: '👩‍🏫' },
        ],
        explanation: '「お父さんがはげましてくれました」とあります。',
      },
    ],
  },
  {
    id: 'story-183', title: 'はるのころころだんご', difficulty: 1,
    estimatedMinutes: 2, icon: '🍡',
    story: 'こどもの日のよる、ユイはかぞくでかしわもちをたべました。かしわもちはかしわのはにつつまれていて、なかにあんこがはいっていました。「かしわのははどうしてつつんであるの？」とユイがきくと、「かしわのはは、あたらしいはがでるまでおちないから、こどもがすくすくそだつようにというねがいがこめてあるんだよ」とおかあさんがおしえてくれました。「ふうん」とユイはうなずいて、かしわもちをひとくちたべました。あんこがとてもあまくておいしかったです。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かしわもちのなかにはいっていたのはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'anko', color: 'red', shape: 'circle' }],
        options: [
          { id: 'anko',    label: 'あんこ',   emoji: '🫘' },
          { id: 'cream',   label: 'クリーム', emoji: '🍦' },
          { id: 'jam',     label: 'ジャム',   emoji: '🍓' },
          { id: 'cheese',  label: 'チーズ',   emoji: '🧀' },
        ],
        explanation: '「なかにあんこがはいっていました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かしわのはをつかうねがいはなんですか？',
        tasks: [{ instruction: INS, optionId: 'grow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'grow',   label: 'こどもがすくすくそだつように', emoji: '🌱' },
          { id: 'health', label: 'けんこうでいられるように',     emoji: '💪' },
          { id: 'happy',  label: 'しあわせになるように',         emoji: '😊' },
          { id: 'smart',  label: 'かしこくなるように',           emoji: '📚' },
        ],
        explanation: '「こどもがすくすくそだつようにというねがいがこめてある」とあります。',
      },
    ],
  },
  {
    id: 'story-184', title: 'はるのぼうし', difficulty: 1,
    estimatedMinutes: 2, icon: '👒',
    story: 'はるのひざしがつよくなってきました。タナはおかあさんとぼうしをかいにいきました。おみせにはいっていろいろなぼうしをかぶってみました。さいしょはあかいぼうし、つぎはきいろいぼうし、さいごにみどりのぼうしをかぶってみました。「みどりのがいちばんにあうね」とおかあさんがいいました。タナも「うん、これがいい！」といいました。みどりのぼうしをかって、さっそくかぶってかえりました。「はるのさんぽがたのしくなりそう」とタナはうれしくなりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'タナがかったぼうしはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
        ],
        explanation: '「みどりのぼうし」をかいました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ぼうしをかぶってみた順番でさいごはなにいろのぼうしでしたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
        ],
        explanation: '「さいごにみどりのぼうしをかぶってみました」とあります。',
      },
    ],
  },
  {
    id: 'story-185', title: 'はるのぶどうえん', difficulty: 1,
    estimatedMinutes: 2, icon: '🍇',
    story: 'はるになって、タロウのうちのちかくにあるぶどうえんのぶどうのきにちいさなみどりのめがでてきました。「ぶどうのめがでてきたよ」とタロウはおどろきました。お父さんが「なつにはおおきなぶどうになるよ」とおしえてくれました。タロウはめをひとつずつかぞえると、ぜんぶでここのつありました。「なつにはどのくらいのりょうになるんだろう」とタロウはかんがえました。「たのしみにしようね」とお父さんがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ぶどうのめはなんこありましたか？',
        tasks: [{ instruction: INS, optionId: '9', color: 'red', shape: 'circle' }],
        options: [
          { id: '7', label: '7', emoji: '7️⃣' },
          { id: '8', label: '8', emoji: '8️⃣' },
          { id: '9', label: '9', emoji: '9️⃣' },
          { id: '10', label: '10', emoji: '🔟' },
        ],
        explanation: '「ぜんぶでここのつありました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ぶどうはどのきせつにおおきくなるとお父さんがいいましたか？',
        tasks: [{ instruction: INS, optionId: 'summer', color: 'red', shape: 'circle' }],
        options: [
          { id: 'summer', label: 'なつ',   emoji: '☀️' },
          { id: 'autumn', label: 'あき',   emoji: '🍂' },
          { id: 'winter', label: 'ふゆ',   emoji: '❄️' },
          { id: 'spring', label: 'もうすぐ', emoji: '🌸' },
        ],
        explanation: '「なつにはおおきなぶどうになるよ」とあります。',
      },
    ],
  },
  {
    id: 'story-186', title: 'はるのにじいろ', difficulty: 1,
    estimatedMinutes: 2, icon: '🌈',
    story: 'あめのあと、そらにきれいなにじがかかりました。ヒカルはまどからにじをみました。「みて！にじだ！」とヒカルはおかあさんをよびました。にじにはいくつのいろがあるか、ふたりでかぞえました。あか、オレンジ、きいろ、みどり、あお、あいいろ、むらさきの七いろかぞえられました。「いろいろなすきないろがあるね」とおかあさんがいいました。ヒカルは「いちばんすきなのはあか！」といいました。にじはしばらくしてから、すうっときえていきました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'にじのいろはぜんぶでなんいろでしたか？',
        tasks: [{ instruction: INS, optionId: '7', color: 'red', shape: 'circle' }],
        options: [
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
          { id: '8', label: '8', emoji: '8️⃣' },
        ],
        explanation: '「七いろかぞえられました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ヒカルがいちばんすきないろはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'red', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「いちばんすきなのはあか！」とヒカルがいいました。',
      },
    ],
  },
  {
    id: 'story-187', title: 'はるのたけのこほり', difficulty: 1,
    estimatedMinutes: 2, icon: '🎋',
    story: 'はるのにちようびに、ケンとお父さんとおじいちゃんのさんにんでたけのこほりにいきました。たけやぶにはたくさんのたけのこがはえていました。おじいちゃんが「ここがいいよ」とたけのこのありかをおしえてくれました。ケンはスコップでほりはじめると、みっつのたけのこをほることができました。「やったあ！」とケンはよろこびました。「たけのこほりはちからがいるね」とケンはいいました。おうちにかえって、たけのこごはんをつくりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'たけのこほりにいったのはなんにんでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: 'ケンとお父さんとおじいちゃんの「さんにんで」いきました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ケンがほったたけのこはいくつでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「みっつのたけのこをほることができました」とあります。',
      },
    ],
  },
  {
    id: 'story-188', title: 'はるのかえる', difficulty: 1,
    estimatedMinutes: 2, icon: '🐸',
    story: 'かわのちかくをさんぽしていると、ミオはちいさなかえるをみつけました。みどりのかえるで、くさのうえでじっとしていました。「かえるだ！」とミオはよろこびました。おかあさんが「はるになったら、かえるがでてくるんだよ」とおしえてくれました。かえるはミオのかおをみて「ケロッ」となきました。ミオはかわいくておもわずてをのばしましたが、かえるはぴょんととびはねていってしまいました。「またきてね」とミオはかえるがいったほうにてをふりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ミオがみつけたかえるはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'green',  label: 'みどり',   emoji: '🟢' },
          { id: 'brown',  label: 'ちゃいろ', emoji: '🟤' },
          { id: 'yellow', label: 'きいろ',   emoji: '🟡' },
          { id: 'orange', label: 'オレンジ', emoji: '🟠' },
        ],
        explanation: '「みどりのかえる」でした。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かえるはなんとなきましたか？',
        tasks: [{ instruction: INS, optionId: 'kero', color: 'red', shape: 'circle' }],
        options: [
          { id: 'kero',  label: 'ケロッ', emoji: '🐸' },
          { id: 'gero',  label: 'ゲロッ', emoji: '🐸' },
          { id: 'piyo',  label: 'ピヨッ', emoji: '🐣' },
          { id: 'wan',   label: 'ワン',   emoji: '🐶' },
        ],
        explanation: '「かえるはケロッとなきました」とあります。',
      },
    ],
  },
  {
    id: 'story-189', title: 'こどものひのゆうごはん', difficulty: 1,
    estimatedMinutes: 2, icon: '🍛',
    story: 'こどもの日のゆうごはんは、リクのすきなものをつくることにしました。リクはカレーライスとからあげとサラダがたべたいといいました。お母さんはさっそくりょうりをはじめました。「てつだう！」とリクもいいました。リクはサラダのやさいをあらいました。にんじんをさんこ、きゅうりをふたほん、トマトをよっこあらいました。「じょうずにできたね」とお母さんがほめてくれました。ごはんをたべながら、「こどもの日ってたのしいね」とリクはいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'リクがあらったにんじんはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「にんじんをさんこ」あらいました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'リクがあらったトマトはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「トマトをよっこ」あらいました。',
      },
    ],
  },
  {
    id: 'story-190', title: 'はるのばすのたび', difficulty: 1,
    estimatedMinutes: 2, icon: '🚌',
    story: 'はるやすみに、カナはお母さんとバスにのってしょくぶつえんへいきました。バスのなかでみどりのシートにすわりました。「つぎはしょくぶつえんまえ」というアナウンスがきこえたとき、おりるじゅんびをしました。しょくぶつえんではさくらやチューリップやパンジーがさいていました。カナはきいろのチューリップをみっつかぞえました。「いちばんすきなはなはなに？」とお母さんがきくと、「チューリップ！」とカナがこたえました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'バスのなかでかなのすわったシートはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'orange', label: 'オレンジ', emoji: '🟠' },
        ],
        explanation: '「みどりのシートにすわりました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'カナがかぞえたきいろのチューリップはいくつでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「きいろのチューリップをみっつかぞえました」とあります。',
      },
    ],
  },
  {
    id: 'story-191', title: 'はるのおなかいっぱい', difficulty: 1,
    estimatedMinutes: 2, icon: '🍓',
    story: 'はるのにちようびに、ナツキはかぞくでいちごがりにいきました。いちごばたけにはあかくてあまそうないちごがたくさんありました。ナツキはよっこいちごをつみました。お母さんはふたつ、お父さんはみっつつみました。「わたしがいちばんおおく！」とナツキはよろこびました。かごにいれたいちごをかぞえると、ぜんぶでここのつになりました。おうちにかえってジャムにしました。「おいしいジャムができたね」とお父さんがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ナツキがつんだいちごはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「ナツキはよっこいちごをつみました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かごのなかのいちごはぜんぶでなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '9', color: 'red', shape: 'circle' }],
        options: [
          { id: '7', label: '7', emoji: '7️⃣' },
          { id: '8', label: '8', emoji: '8️⃣' },
          { id: '9', label: '9', emoji: '9️⃣' },
          { id: '10', label: '10', emoji: '🔟' },
        ],
        explanation: 'ナツキよっこ＋お母さんふたつ＋お父さんみっつで「ここのつ（9こ）」です。',
      },
    ],
  },
  {
    id: 'story-192', title: 'はるのやきたてパン', difficulty: 1,
    estimatedMinutes: 2, icon: '🥐',
    story: 'はるのひ、ハルトはお母さんといっしょにパンをやきました。クロワッサンのきじをさんこつくりました。おかのはたに、バターをぬってくるくるとまきました。オーブンにいれて、にじゅっぷんまちました。「いいにおいがする！」とハルトがいいました。できあがったクロワッサンはきつね色でふわふわでした。「さくさくしておいしい！」とハルトはよろこびました。お母さんが「じょうずにできたね」とほめてくれました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'クロワッサンのきじはなんこつくりましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「クロワッサンのきじをさんこつくりました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'オーブンでなんぷんやきましたか？',
        tasks: [{ instruction: INS, optionId: '20', color: 'red', shape: 'circle' }],
        options: [
          { id: '10', label: '10ぷん', emoji: '⏰' },
          { id: '15', label: '15ぷん', emoji: '⏰' },
          { id: '20', label: '20ぷん', emoji: '⏰' },
          { id: '30', label: '30ぷん', emoji: '⏰' },
        ],
        explanation: '「にじゅっぷんまちました」とあります。',
      },
    ],
  },
  {
    id: 'story-193', title: 'はるのおりがみ', difficulty: 1,
    estimatedMinutes: 2, icon: '📄',
    story: 'にちようびのごご、ユウはおじいちゃんといっしょにおりがみをしました。まずちょうちょうをよっこおりました。つぎにはなのかたちをみっこおりました。さいごにかぶとをひとつおりました。「かぶとのおりかたはむずかしいね」とユウがいいました。おじいちゃんが「はじめはむずかしくてあたりまえだよ」とはげましてくれました。おりがみはぜんぶでなんこできたかかぞえると、やっつになりました。「つぎはなにをおる？」とユウはわくわくしながらきいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ちょうちょうはなんこおりましたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「ちょうちょうをよっこおりました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'おりがみはぜんぶでなんこできましたか？',
        tasks: [{ instruction: INS, optionId: '8', color: 'red', shape: 'circle' }],
        options: [
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
          { id: '8', label: '8', emoji: '8️⃣' },
          { id: '9', label: '9', emoji: '9️⃣' },
        ],
        explanation: 'ちょうちょうよっこ＋はなみっこ＋かぶとひとつで「やっつ（8こ）」です。',
      },
    ],
  },
  {
    id: 'story-194', title: 'はるのたにし', difficulty: 1,
    estimatedMinutes: 2, icon: '🐚',
    story: 'はるのかわぞいをさんぽしていると、タイガはたにしをみつけました。たにしはちいさなかたつむりのようなすがたで、かわのそこにいました。「これはなに？」とタイガがきくと、お父さんが「たにしだよ。かわやたんぼにすんでいるんだ」とおしえてくれました。タイガはたにしをさんびきかぞえました。「かわいいね」とタイガがいいました。「たにしもはるになるといきいきしてくるね」とお父さんがわらいながらいいました。タイガはたにしをそっとみずのなかにかえしてあげました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'タイガがかぞえたたにしはなんびきでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「たにしをさんびきかぞえました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'たにしはどこにすんでいるとお父さんがおしえてくれましたか？',
        tasks: [{ instruction: INS, optionId: 'river', color: 'red', shape: 'circle' }],
        options: [
          { id: 'river', label: 'かわやたんぼ', emoji: '🌊' },
          { id: 'sea',   label: 'うみ',         emoji: '🌊' },
          { id: 'soil',  label: 'つちのなか',   emoji: '🌍' },
          { id: 'tree',  label: 'きのうえ',     emoji: '🌲' },
        ],
        explanation: '「かわやたんぼにすんでいるんだ」とあります。',
      },
    ],
  },
  {
    id: 'story-195', title: 'はるのとおかい', difficulty: 1,
    estimatedMinutes: 2, icon: '🏞️',
    story: 'はるのにちようびに、ミズキはかぞくでとおかいにいきました。さんのうえにのぼるとけしきがとてもきれいでした。とちゅうにさいているやまざくらをよっぽんみつけました。「うれしいな」とミズキはいいました。さんのちょうじょうにつくと、むすびをたべました。お母さんがつくったおにぎりはしゃけとこんぶのふたしゅるいでした。ミズキはしゃけをたべました。「さんのうえでたべるおにぎりはひとしおだ」とお父さんがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'とちゅうにみつけたやまざくらはなんぽんでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「やまざくらをよっぽんみつけました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ミズキがたべたおにぎりはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'salmon', color: 'red', shape: 'circle' }],
        options: [
          { id: 'salmon', label: 'しゃけ',   emoji: '🍙' },
          { id: 'kelp',   label: 'こんぶ',   emoji: '🍙' },
          { id: 'plum',   label: 'うめ',     emoji: '🍙' },
          { id: 'tuna',   label: 'まぐろ',   emoji: '🍙' },
        ],
        explanation: '「ミズキはしゃけをたべました」とあります。',
      },
    ],
  },
  {
    id: 'story-196', title: 'はるのとびばこ', difficulty: 1,
    estimatedMinutes: 2, icon: '🤸',
    story: 'たいいくでとびばこをしました。コダイはよんだんのとびばこにちょうせんしました。さいしょはおそろしくてとべませんでした。せんせいが「ゆっくりでいいよ」といってくれました。ふたかいめはゆっくりはしっていきました。「とんだ！」とクラスのみんながよろこびました。さんかいめはもうすこしたかくとぶことができました。「コダイくん、じょうずになったね」とせんせいがほめてくれました。コダイはつぎはごだんにちょうせんするとこころのなかできめました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'コダイがちょうせんしたとびばこはなんだんでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「よんだんのとびばこにちょうせんしました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'つぎにちょうせんしようとしたとびばこはなんだんでしたか？',
        tasks: [{ instruction: INS, optionId: '5', color: 'red', shape: 'circle' }],
        options: [
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
        ],
        explanation: '「つぎはごだんにちょうせんする」とこころのなかできめました。',
      },
    ],
  },
]
