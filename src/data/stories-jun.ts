import type { Story } from '../types'

const INS = 'ただしいこたえをえらんで、あかでまるをおしてください'

export const storiesJun: Story[] = [
  // ===== 6月 やさしい（30問） =====
  {
    id: 'story-228', title: 'あじさいのはな', difficulty: 1,
    estimatedMinutes: 2, icon: '💜',
    story: 'ろくがつになって、にわのあじさいがさきました。ユイはあおとむらさきのあじさいをみつけました。「いくつさいてるかかぞえてみよう」とゆいはかぞえました。あおのあじさいがよっこ、むらさきのあじさいがみっこさいていました。「あじさいってなんでいろがちがうの？」とユイがきくと、おかあさんが「つちのせいなんだよ」とおしえてくれました。ユイはすこしきってかびんにかざりました。「きれいだね」とおとうさんがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'さいていたあおのあじさいはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「あおのあじさいがよっこ」さいていました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'あじさいのいろがちがうのはなぜとおかあさんがおしえてくれましたか？',
        tasks: [{ instruction: INS, optionId: 'soil', color: 'red', shape: 'circle' }],
        options: [
          { id: 'soil',  label: 'つちのせい', emoji: '🌍' },
          { id: 'water', label: 'みずのせい', emoji: '💧' },
          { id: 'sun',   label: 'おひさまのせい', emoji: '☀️' },
          { id: 'wind',  label: 'かぜのせい', emoji: '🌬️' },
        ],
        explanation: '「つちのせいなんだよ」とおかあさんがおしえてくれました。',
      },
    ],
  },
  {
    id: 'story-229', title: 'つゆのあめ', difficulty: 1,
    estimatedMinutes: 2, icon: '☔',
    story: 'ろくがつはつゆのきせつです。マナはあめのひ、きいろいながぐつをはいてあるきました。みずたまりをみつけると「ジャブジャブ！」としながらたのしみました。みずたまりはみっつありました。おかあさんが「ながぐつだからだいじょうぶだよ」とわらいながらいいました。かさもさしていたので、あたまはぬれませんでした。かえりみちに、かたつむりをふたつみつけました。「ゆっくりあるいてるね」とマナはいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'マナのながぐつはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'yellow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「きいろいながぐつをはいて」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かえりみちにみつけたかたつむりはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「かたつむりをふたつみつけました」とあります。',
      },
    ],
  },
  {
    id: 'story-230', title: 'かたつむりのかんさつ', difficulty: 1,
    estimatedMinutes: 2, icon: '🐌',
    story: 'あめあがりのこうえんで、ソウはかたつむりをみつけました。「ゆっくりあるいてるね」とソウはしゃがんでみました。かたつむりのからはうずまきがあって、みどりがかったちゃいろでした。つのがふたつでていました。「さわってもいい？」とソウがきくと、おとうさんが「そっとならいいよ」といいました。ゆびでそっとさわると、かたつむりはからのなかにひっこみました。「おどかしてごめんね」とソウはこころのなかでいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かたつむりのからのいろはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'brown', color: 'red', shape: 'circle' }],
        options: [
          { id: 'brown',  label: 'みどりがかったちゃいろ', emoji: '🟤' },
          { id: 'yellow', label: 'きいろ',                 emoji: '🟡' },
          { id: 'white',  label: 'しろ',                   emoji: '⬜' },
          { id: 'gray',   label: 'はいいろ',               emoji: '🩶' },
        ],
        explanation: '「みどりがかったちゃいろでした」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かたつむりのつのはいくつでていましたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「つのがふたつでていました」とあります。',
      },
    ],
  },
  {
    id: 'story-231', title: 'あめのひのとしょかん', difficulty: 1,
    estimatedMinutes: 2, icon: '📚',
    story: 'あめのにちようびに、リナはおかあさんととしょかんへいきました。えほんのコーナーにいくと、「かたつむりのぼうけん」というほんをみつけました。りなはそのほんをよみはじめました。かたつむりがいろいろなくにをたびするおはなしで、ぜんぶでよんじゅうページありました。「おもしろい！」とリナはのめりこみました。よみおわると、もう一さつかりました。かえりみちにあめがあがって、にじがでました。「よいひだったね」とおかあさんがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'リナがよんだほんのなまえはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'snail', color: 'red', shape: 'circle' }],
        options: [
          { id: 'snail',     label: 'かたつむりのぼうけん', emoji: '🐌' },
          { id: 'butterfly', label: 'ちょうちょうのたび',   emoji: '🦋' },
          { id: 'frog',      label: 'かえるのおはなし',     emoji: '🐸' },
          { id: 'rain',      label: 'あめのひのできごと',   emoji: '☔' },
        ],
        explanation: '「かたつむりのぼうけんというほんをみつけました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ほんはなんページありましたか？',
        tasks: [{ instruction: INS, optionId: '40', color: 'red', shape: 'circle' }],
        options: [
          { id: '20', label: '20ページ', emoji: '📄' },
          { id: '30', label: '30ページ', emoji: '📄' },
          { id: '40', label: '40ページ', emoji: '📄' },
          { id: '50', label: '50ページ', emoji: '📄' },
        ],
        explanation: '「ぜんぶでよんじゅうページありました」とあります。',
      },
    ],
  },
  {
    id: 'story-232', title: 'たなばたのかざり', difficulty: 1,
    estimatedMinutes: 2, icon: '🎋',
    story: 'たなばたのじゅんびで、ケイはおかあさんといっしょにたんざくにねがいごとをかきました。ケイはあかいたんざくにかきました。おかあさんはきいろいたんざくにかきました。おとうさんはあおいたんざくにかきました。みんなのたんざくをあわせてさんまいになりました。「ねがいごとがかなうといいね」とおかあさんがいいました。たんざくをたけにむすびつけると、かぜにゆれてきれいでした。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ケイがかいたたんざくはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'red', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「ケイはあかいたんざくにかきました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'たんざくはぜんぶでなんまいでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「みんなのたんざくをあわせてさんまいになりました」とあります。',
      },
    ],
  },
  {
    id: 'story-233', title: 'なつのそうめん', difficulty: 1,
    estimatedMinutes: 2, icon: '🍜',
    story: 'あつい六がつのひるごはんに、タロウのうちではそうめんをたべました。つめたいみずでしめたそうめんをめんつゆでたべました。「つるつるしておいしい！」とタロウはよろこびました。おかあさんがのりをさんまいとみょうがをのせてくれました。おとうさんはそうめんをさんたばゆでました。タロウはふたたばたべました。「なつはそうめんにかぎるね」とおとうさんがいいました。タロウもうなずきながらたべました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'そうめんにのせたのりはなんまいでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「のりをさんまいとみょうがをのせてくれました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'タロウはそうめんをなんたばたべましたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「タロウはふたたばたべました」とあります。',
      },
    ],
  },
  {
    id: 'story-234', title: 'あめのひのおりがみ', difficulty: 1,
    estimatedMinutes: 2, icon: '📄',
    story: 'あめでそとにでられない日、ハナはおりがみをしました。かたつむりをみっこおって、あじさいをふたつつくりました。「かたつむりのつくりかたはむずかしいね」とハナがいいました。おかあさんが「れんしゅうすればできるよ」とはげましてくれました。できあがったかたつむりとあじさいをかみにはって、「あめのひの絵」とタイトルをつけました。おとうさんが「じょうずだね」とほめてくれました。ハナはうれしくなって、かべにはりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かたつむりはなんこつくりましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「かたつむりをみっこおって」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'あじさいはいくつつくりましたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「あじさいをふたつつくりました」とあります。',
      },
    ],
  },
  {
    id: 'story-235', title: 'なつのとうもろこし', difficulty: 1,
    estimatedMinutes: 2, icon: '🌽',
    story: 'ろくがつのおわりに、コウジはおじいちゃんのはたけでとうもろこしをしゅうかくしました。おじいちゃんが「これがいちばんおおきい」といってよっぽんえらんでくれました。おうちにかえってゆでると、あまいにおいがたちこめました。「できた！」とコウジはよろこびました。かぶりつくと、あまくてぷりぷりしていました。「はたけからとったばかりはおいしいね」とおかあさんがいいました。コウジはふたほんたべました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'おじいちゃんがえらんでくれたとうもろこしはなんぽんでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「よっぽんえらんでくれました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'コウジはとうもろこしをなんぽんたべましたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「コウジはふたほんたべました」とあります。',
      },
    ],
  },
  {
    id: 'story-236', title: 'かわのせいぶつかんさつ', difficulty: 1,
    estimatedMinutes: 2, icon: '🦀',
    story: 'ろくがつのにちようびに、アキはかぞくでかわへせいぶつかんさつにいきました。かわのそこをてあみでさがすと、ちいさなさわがにがさんびきとれました。「つめたい！」とアキはさわりながらいいました。しばらくみてから、かわにかえしてあげました。つぎにめだかをみつけました。「きれいだね」とアキがいいました。おとうさんが「むかしはめだかがもっとたくさんいたんだよ」とおしえてくれました。かわのせいぶつはとてもおもしろかったです。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'とれたさわがにはなんびきでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「ちいさなさわがにがさんびきとれました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'さわがにをとったあとどうしましたか？',
        tasks: [{ instruction: INS, optionId: 'release', color: 'red', shape: 'circle' }],
        options: [
          { id: 'release', label: 'かわにかえした',   emoji: '🌊' },
          { id: 'keep',    label: 'いえにもちかえった', emoji: '🏠' },
          { id: 'eat',     label: 'たべた',           emoji: '😋' },
          { id: 'photo',   label: 'しゃしんだけとった', emoji: '📷' },
        ],
        explanation: '「しばらくみてから、かわにかえしてあげました」とあります。',
      },
    ],
  },
  {
    id: 'story-237', title: 'なつのかき氷', difficulty: 1,
    estimatedMinutes: 2, icon: '🍧',
    story: 'あついろくがつのひ、ミサはおかあさんといっしょにかき氷をつくりました。せんようのきかいでこおりをけずると、ふわふわのゆきのようになりました。ミサはいちごシロップをかけました。おかあさんはれもんシロップをかけました。「どっちがおいしそう？」とおかあさんがきくと、「いちごのほうがおいしそう！」とミサがこたえました。ひとくちたべると「つめたい！おいしい！」とミサはよろこびました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ミサがかけたシロップはなにあじでしたか？',
        tasks: [{ instruction: INS, optionId: 'strawberry', color: 'red', shape: 'circle' }],
        options: [
          { id: 'strawberry', label: 'いちご', emoji: '🍓' },
          { id: 'lemon',      label: 'れもん', emoji: '🍋' },
          { id: 'grape',      label: 'ぶどう', emoji: '🍇' },
          { id: 'melon',      label: 'めろん', emoji: '🍈' },
        ],
        explanation: '「ミサはいちごシロップをかけました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かき氷のこおりはどのようでしたか？',
        tasks: [{ instruction: INS, optionId: 'fluffy', color: 'red', shape: 'circle' }],
        options: [
          { id: 'fluffy', label: 'ふわふわのゆきのよう', emoji: '❄️' },
          { id: 'hard',   label: 'かたくてつぶつぶ',     emoji: '🧊' },
          { id: 'smooth', label: 'つるつるしていた',     emoji: '🧊' },
          { id: 'big',    label: 'おおきなかたまり',     emoji: '🧊' },
        ],
        explanation: '「ふわふわのゆきのようになりました」とあります。',
      },
    ],
  },
  {
    id: 'story-238', title: 'なつのゆうだち', difficulty: 1,
    estimatedMinutes: 2, icon: '⛈️',
    story: 'ろくがつのごご、とつぜんおおきなかみなりがなって、ゆうだちがふりはじめました。ノアはそとであそんでいたので、いえのなかにかけこみました。まどからそとをみると、あめがすごいいきおいでふっていました。おかあさんが「かみなりがなったらきのしたにはいってはだめよ」とおしえてくれました。さんじゅっぷんほどでゆうだちはやみました。そとのくうきがすずしくなって、きもちよかったです。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ゆうだちはどのくらいでやみましたか？',
        tasks: [{ instruction: INS, optionId: '30', color: 'red', shape: 'circle' }],
        options: [
          { id: '10', label: '10ぷん', emoji: '⏰' },
          { id: '20', label: '20ぷん', emoji: '⏰' },
          { id: '30', label: '30ぷん', emoji: '⏰' },
          { id: '60', label: '60ぷん', emoji: '⏰' },
        ],
        explanation: '「さんじゅっぷんほどでゆうだちはやみました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かみなりのときにはいってはだめなところはどこですか？',
        tasks: [{ instruction: INS, optionId: 'tree', color: 'red', shape: 'circle' }],
        options: [
          { id: 'tree',  label: 'きのした', emoji: '🌲' },
          { id: 'house', label: 'いえのなか', emoji: '🏠' },
          { id: 'pool',  label: 'プール', emoji: '🏊' },
          { id: 'cave',  label: 'どうくつ', emoji: '🕳️' },
        ],
        explanation: '「かみなりがなったらきのしたにはいってはだめよ」とあります。',
      },
    ],
  },
  {
    id: 'story-239', title: 'なつのすいえいきょうしつ', difficulty: 1,
    estimatedMinutes: 2, icon: '🏊',
    story: 'ろくがつから、コウタはすいえいきょうしつにかよいはじめました。はじめてのひ、みずがこわくてプールのはしにつかまっていました。せんせいが「かおをつけてみよう」といいました。コウタはゆうきをだして、かおをみずのなかにいれました。「できた！」とコウタはうれしくなりました。さんかいれんしゅうすると、すこしなれてきました。「またくるのがたのしみ」とコウタはおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'コウタがすいえいきょうしつにかよいはじめたのはなんがつでしたか？',
        tasks: [{ instruction: INS, optionId: '6', color: 'red', shape: 'circle' }],
        options: [
          { id: '5', label: '5がつ', emoji: '📅' },
          { id: '6', label: '6がつ', emoji: '📅' },
          { id: '7', label: '7がつ', emoji: '📅' },
          { id: '8', label: '8がつ', emoji: '📅' },
        ],
        explanation: '「ろくがつから、コウタはすいえいきょうしつにかよいはじめました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かおをみずにつけるれんしゅうをなんかいしましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「さんかいれんしゅうすると、すこしなれてきました」とあります。',
      },
    ],
  },
  {
    id: 'story-240', title: 'なつのやさいいため', difficulty: 1,
    estimatedMinutes: 2, icon: '🥦',
    story: 'ろくがつのどようびに、リョウはおかあさんといっしょになつのやさいいためをつくりました。ピーマンをみっこ、なすをふたつ、トマトをひとつつかいました。「ピーマンはにがいかな」とリョウがいうと、「いためるとおいしくなるよ」とおかあさんがこたえました。できあがったやさいいためをたべると、「あまい！」とリョウがおどろきました。「やさいはたべかたによってあじがかわるね」とおかあさんがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'つかったピーマンはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「ピーマンをみっこ」つかいました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'つかったなすはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「なすをふたつ」つかいました。',
      },
    ],
  },
  {
    id: 'story-241', title: 'なつのさかなつり', difficulty: 1,
    estimatedMinutes: 2, icon: '🎣',
    story: 'ろくがつのにちようびに、ユウはおとうさんとかわへさかなつりにいきました。きいろいぼうしをかぶって、つりざおをもっていきました。みずにつりいとをたらすと、しばらくしてぴくぴくとうごきました。「かかった！」とユウはさけびました。ひきあげると、ちいさなめだかがふたひきつれていました。「ちいさいけど、つれてよかった！」とユウはうれしそうでした。おとうさんは「もっとおおきいのをねらおう」とわらいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ユウがかぶっていたぼうしはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'yellow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'white',  label: 'しろ',   emoji: '⬜' },
        ],
        explanation: '「きいろいぼうしをかぶって」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'つれたさかなはなんびきでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「ちいさなめだかがふたひきつれていました」とあります。',
      },
    ],
  },
  {
    id: 'story-242', title: 'なつのあさごはん', difficulty: 1,
    estimatedMinutes: 2, icon: '🍳',
    story: 'あついなつのあさ、サクラはおかあさんといっしょにあさごはんをつくりました。たまごをふたつやいて、やさいとトースト、ジュースをならべました。「いただきます」といってたべはじめました。「あついのにちゃんとたべると一日げんきだよ」とおかあさんがいいました。たまごはおひさまのようにきいろくてふわふわでした。サクラはぜんぶたべきりました。「おいしかった！きょうもがんばろう」とサクラはいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'やいたたまごはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「たまごをふたつやいて」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'たまごのいろはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'yellow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'white',  label: 'しろ',   emoji: '⬜' },
          { id: 'orange', label: 'オレンジ', emoji: '🟠' },
          { id: 'red',    label: 'あか',   emoji: '🔴' },
        ],
        explanation: '「おひさまのようにきいろくてふわふわでした」とあります。',
      },
    ],
  },
  {
    id: 'story-243', title: 'なつのかいだん', difficulty: 1,
    estimatedMinutes: 2, icon: '🏫',
    story: 'がっこうのかいだんで、ハルカはともだちのコトとどちらがはやくのぼれるかきょうそうしました。かいだんはぜんぶでにじゅうだんありました。「よーい、どん！」でふたりはいっせいにかけあがりました。ハルカがいっとうでした。「もういっかい！」とコトがいったので、もうさんかいやりました。ぜんぶでよんかいきょうそうして、ハルカがさんかいかちました。「またあしたもやろう」とふたりはなかよくいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かいだんはぜんぶでなんだんでしたか？',
        tasks: [{ instruction: INS, optionId: '20', color: 'red', shape: 'circle' }],
        options: [
          { id: '15', label: '15だん', emoji: '1️⃣5️⃣' },
          { id: '20', label: '20だん', emoji: '2️⃣0️⃣' },
          { id: '25', label: '25だん', emoji: '2️⃣5️⃣' },
          { id: '30', label: '30だん', emoji: '3️⃣0️⃣' },
        ],
        explanation: '「かいだんはぜんぶでにじゅうだんありました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'きょうそうはぜんぶでなんかいしましたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「ぜんぶでよんかいきょうそうして」とあります。',
      },
    ],
  },
  {
    id: 'story-244', title: 'なつのすだれ', difficulty: 1,
    estimatedMinutes: 2, icon: '🏮',
    story: 'あついろくがつのひ、ミオのいえではすだれをとりだしました。おとうさんがまどにすだれをかけると、ひかりがきれいにとおって、へやがすずしくみえました。「いいきもちだね」とミオがいいました。おかあさんが「すだれはむかしからあるえいちのどうぐだよ」とおしえてくれました。ミオはすだれのあいだからはなをみました。「みどりのかわいいはっぱがみえる」とミオはにこにこしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'すだれをかけたのはだれでしたか？',
        tasks: [{ instruction: INS, optionId: 'dad', color: 'red', shape: 'circle' }],
        options: [
          { id: 'dad', label: 'おとうさん', emoji: '👨' },
          { id: 'mom', label: 'おかあさん', emoji: '👩' },
          { id: 'mio', label: 'ミオ',       emoji: '👧' },
          { id: 'all', label: 'みんないっしょ', emoji: '👨‍👩‍👧' },
        ],
        explanation: '「おとうさんがまどにすだれをかけると」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ミオがすだれのあいだからみたのはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'leaf', color: 'red', shape: 'circle' }],
        options: [
          { id: 'leaf',  label: 'みどりのはっぱ', emoji: '🌿' },
          { id: 'flower', label: 'あかいはな',    emoji: '🌺' },
          { id: 'sky',   label: 'あおいそら',     emoji: '☁️' },
          { id: 'bird',  label: 'とり',           emoji: '🐦' },
        ],
        explanation: '「みどりのかわいいはっぱがみえる」とミオはいいました。',
      },
    ],
  },
  {
    id: 'story-245', title: 'なつのミニトマト', difficulty: 1,
    estimatedMinutes: 2, icon: '🍅',
    story: 'ろくがつになって、ダイのそだてているミニトマトがあかくなってきました。「みて！あかくなった！」とダイはおかあさんをよびました。よっこのミニトマトがあかくなっていました。「もうたべられるの？」ときくと、「もうすこしまったほうがおいしいよ」とおかあさんがこたえました。みっかまったら、つやつやのあかいミニトマトができていました。たべてみると、「あまい！」とダイはよろこびました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'あかくなったミニトマトはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「よっこのミニトマトがあかくなっていました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ミニトマトをたべるまでなんにちまちましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1にち', emoji: '1️⃣' },
          { id: '2', label: '2にち', emoji: '2️⃣' },
          { id: '3', label: '3にち', emoji: '3️⃣' },
          { id: '5', label: '5にち', emoji: '5️⃣' },
        ],
        explanation: '「みっかまったら」とあります。',
      },
    ],
  },
  {
    id: 'story-246', title: 'なつのかぼちゃ', difficulty: 1,
    estimatedMinutes: 2, icon: '🎃',
    story: 'おじいちゃんのはたけでかぼちゃがそだっていました。ナツキはおじいちゃんとみにいくと、みどりのかぼちゃがみっこなっていました。「おおきいね！」とナツキがいいました。おじいちゃんが「あつのにはいりにかぼちゃをいれるんだよ」とおしえてくれました。「かぼちゃのてんぷらがたべたい！」とナツキがいいました。「もうすこしまったらとれるよ」とおじいちゃんがこたえました。ナツキはかぼちゃのてんぷらをたのしみにしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'なっていたかぼちゃはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「みどりのかぼちゃがみっこなっていました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ナツキがたべたいといったかぼちゃのりょうりはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'tempura', color: 'red', shape: 'circle' }],
        options: [
          { id: 'tempura', label: 'てんぷら', emoji: '🍤' },
          { id: 'soup',    label: 'スープ',   emoji: '🍲' },
          { id: 'curry',   label: 'カレー',   emoji: '🍛' },
          { id: 'salad',   label: 'サラダ',   emoji: '🥗' },
        ],
        explanation: '「かぼちゃのてんぷらがたべたい！」とナツキがいいました。',
      },
    ],
  },
  {
    id: 'story-247', title: 'なつのにじ', difficulty: 1,
    estimatedMinutes: 2, icon: '🌈',
    story: 'ゆうだちのあと、レンはそとにでると、おおきなにじがかかっていました。「にじだ！」とレンはさけびました。おかあさんもそとにでてきました。にじはそらのはしからはしまでかかっていて、ととてもきれいでした。「なんいろあるかかぞえてみよう」とおかあさんがいいました。ふたりでかぞえると、しちいろありました。「あのむこうがわにはなにがあるんだろう」とレンはゆめをみながらいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'にじのいろはなんいろでしたか？',
        tasks: [{ instruction: INS, optionId: '7', color: 'red', shape: 'circle' }],
        options: [
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
          { id: '8', label: '8', emoji: '8️⃣' },
        ],
        explanation: '「ふたりでかぞえると、しちいろありました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'にじがでたのはどのあとでしたか？',
        tasks: [{ instruction: INS, optionId: 'shower', color: 'red', shape: 'circle' }],
        options: [
          { id: 'shower', label: 'ゆうだちのあと', emoji: '⛈️' },
          { id: 'morning', label: 'あさのあと',   emoji: '🌅' },
          { id: 'night',   label: 'よるのあと',   emoji: '🌙' },
          { id: 'wind',    label: 'かぜのあと',   emoji: '🌬️' },
        ],
        explanation: '「ゆうだちのあと、レンはそとにでると、おおきなにじがかかっていました」とあります。',
      },
    ],
  },
  {
    id: 'story-248', title: 'なつのとうなす', difficulty: 1,
    estimatedMinutes: 2, icon: '🍆',
    story: 'ろくがつのはたけで、ミナはおかあさんといっしょになすをしゅうかくしました。むらさきのなすがよっほんなっていました。「むらさきってきれいな色だね」とミナがいいました。とったなすでおかあさんがみそしるをつくりました。「なすのみそしるはおいしい！」とミナはよろこびました。「はたけのやさいはたべるとおいしいね」とミナがいいました。「そうだね、じぶんでとるからよりおいしいのかもしれないね」とおかあさんがこたえました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'しゅうかくしたなすはなんほんでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「むらさきのなすがよっほんなっていました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'なすでつくったりょうりはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'miso', color: 'red', shape: 'circle' }],
        options: [
          { id: 'miso',  label: 'みそしる', emoji: '🍜' },
          { id: 'curry', label: 'カレー',   emoji: '🍛' },
          { id: 'fry',   label: 'いため',   emoji: '🍳' },
          { id: 'salad', label: 'サラダ',   emoji: '🥗' },
        ],
        explanation: '「おかあさんがみそしるをつくりました」とあります。',
      },
    ],
  },
  {
    id: 'story-249', title: 'なつのひまわり', difficulty: 1,
    estimatedMinutes: 2, icon: '🌻',
    story: 'ろくがつになって、コダイのそだてていたひまわりがさきはじめました。「さいた！」とコダイはよろこびました。きいろのおおきなはながふたつさいていました。おかあさんが「ひまわりはおひさまのほうをむいてさくんだよ」とおしえてくれました。「ほんとだ、おひさまのほうをむいてる！」とコダイはかんしんしました。みずをたっぷりあげると、ひまわりがさらにおおきくなるようなきがしました。「なつまでにもっとおおきくなれ」とコダイはいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'さいていたひまわりはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「きいろのおおきなはながふたつさいていました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ひまわりはどのほうこうをむいてさくとおかあさんがおしえてくれましたか？',
        tasks: [{ instruction: INS, optionId: 'sun', color: 'red', shape: 'circle' }],
        options: [
          { id: 'sun',   label: 'おひさまのほう', emoji: '☀️' },
          { id: 'north', label: 'きたのほう',     emoji: '⬆️' },
          { id: 'south', label: 'みなみのほう',   emoji: '⬇️' },
          { id: 'east',  label: 'ひがしのほう',   emoji: '➡️' },
        ],
        explanation: '「ひまわりはおひさまのほうをむいてさくんだよ」とあります。',
      },
    ],
  },
  {
    id: 'story-250', title: 'なつのわなげ', difficulty: 1,
    estimatedMinutes: 2, icon: '🎯',
    story: 'なつのおまつりで、アイはわなげをさんかいやりました。さいしょのわはとおかったです。にかいめはちかくにおちました。さんかいめにやっとひとつはいりました。「やった！」とアイはおおよろこびでした。わなげのにいさんが「じょうずだったね」といって、きいろいボールをひとつくれました。「またやりたい！」とアイはいいました。おかあさんが「もういっかいやってみよう」といってくれました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'わなげはぜんぶでなんかいやりましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「わなげをさんかいやりました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'けいひんにもらったのはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'ball', color: 'red', shape: 'circle' }],
        options: [
          { id: 'ball',   label: 'きいろいボール', emoji: '🟡' },
          { id: 'sticker', label: 'シール',       emoji: '✨' },
          { id: 'candy',  label: 'あめ',           emoji: '🍬' },
          { id: 'pencil', label: 'えんぴつ',       emoji: '✏️' },
        ],
        explanation: '「きいろいボールをひとつくれました」とあります。',
      },
    ],
  },
  {
    id: 'story-251', title: 'なつのコップ', difficulty: 1,
    estimatedMinutes: 2, icon: '🥤',
    story: 'あつい六がつのひ、ハルはおかあさんといっしょにむぎちゃをつくりました。なべにみずをいれて、むぎちゃのパックをさんこいれてにました。「いいにおいがする！」とハルがいいました。さめたら、れいぞうこにいれてひやしました。のむときはあおいコップにいれてのみました。「おいしい！」とハルはよろこびました。おとうさんもよろこんでくれました。「なつはむぎちゃがいちばんだね」とおとうさんがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'むぎちゃのパックをなんこいれましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「むぎちゃのパックをさんこいれてにました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'むぎちゃをいれたコップはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'blue', color: 'red', shape: 'circle' }],
        options: [
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「あおいコップにいれてのみました」とあります。',
      },
    ],
  },
  {
    id: 'story-252', title: 'なつのせんぷうき', difficulty: 1,
    estimatedMinutes: 2, icon: '🌀',
    story: 'あついろくがつのひ、ノアはせんぷうきのまえにすわりました。「きもちいい！」とノアはよろこびました。せんぷうきのかぜにあたりながら、ほんをよみました。おとうさんが「せんぷうきにあたりながらねるとからだによくないよ」とおしえてくれました。「なんで？」とノアがきくと、「からだがひえすぎるから」とこたえてくれました。ノアはそれからはせんぷうきをよわくにしてつかうことにしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ノアはせんぷうきのまえでなにをしていましたか？',
        tasks: [{ instruction: INS, optionId: 'book', color: 'red', shape: 'circle' }],
        options: [
          { id: 'book',  label: 'ほんをよんだ', emoji: '📚' },
          { id: 'sleep', label: 'ねた',         emoji: '😴' },
          { id: 'eat',   label: 'たべた',       emoji: '🍽️' },
          { id: 'draw',  label: 'えをかいた',   emoji: '🖼️' },
        ],
        explanation: '「せんぷうきのかぜにあたりながら、ほんをよみました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'せんぷうきにあたりながらねるとよくないりゆうはなんですか？',
        tasks: [{ instruction: INS, optionId: 'cold', color: 'red', shape: 'circle' }],
        options: [
          { id: 'cold',  label: 'からだがひえすぎる', emoji: '🥶' },
          { id: 'noisy', label: 'うるさくてねられない', emoji: '😤' },
          { id: 'dry',   label: 'かわいてのどがいたい', emoji: '😷' },
          { id: 'dark',  label: 'くらくなる',         emoji: '🌑' },
        ],
        explanation: '「からだがひえすぎるから」とおとうさんがこたえてくれました。',
      },
    ],
  },
  {
    id: 'story-253', title: 'なつのかえるのうた', difficulty: 1,
    estimatedMinutes: 2, icon: '🐸',
    story: 'ろくがつのあめのよる、ケイコはかわのそばをとおりかかると、かえるのないごえがきこえてきました。「ケロケロ、ケロケロ」とたくさんのかえるがないていました。「かえるはなぜあめのひになくの？」とケイコがおかあさんにきくと、「なつのあいてをさがしているからだよ」とおしえてくれました。「ふうん」とケイコはなっとくしました。かえるのこえをよっつかぞえながらいえへかえりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かえるはなんとないていましたか？',
        tasks: [{ instruction: INS, optionId: 'kero', color: 'red', shape: 'circle' }],
        options: [
          { id: 'kero', label: 'ケロケロ', emoji: '🐸' },
          { id: 'wan',  label: 'ワンワン', emoji: '🐶' },
          { id: 'nyan', label: 'ニャー',   emoji: '🐱' },
          { id: 'pyon', label: 'ピョン',   emoji: '🐰' },
        ],
        explanation: '「ケロケロ、ケロケロとたくさんのかえるがないていました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かえるがなくりゆうはなんとおかあさんがおしえてくれましたか？',
        tasks: [{ instruction: INS, optionId: 'partner', color: 'red', shape: 'circle' }],
        options: [
          { id: 'partner', label: 'なつのあいてをさがしているから', emoji: '💚' },
          { id: 'rain',    label: 'あめがたのしいから',             emoji: '☔' },
          { id: 'hungry',  label: 'おなかがすいているから',         emoji: '😋' },
          { id: 'cold',    label: 'さむいから',                     emoji: '🥶' },
        ],
        explanation: '「なつのあいてをさがしているからだよ」とおかあさんがおしえてくれました。',
      },
    ],
  },
  {
    id: 'story-254', title: 'なつのすいかわり', difficulty: 1,
    estimatedMinutes: 2, icon: '🍉',
    story: 'ろくがつのにちようびに、タイガはおじいちゃんのいえですいかをたべました。おじいちゃんがはたけでそだてたすいかで、おおきくてつやつやしていました。「めをとじてたたいてみよう」とおじいちゃんがいいました。「ポンポン」となるとおいしいすいかだということでした。タイガがたたいてみると「ポンポン」となりました。きってみると、なかはきれいなあかでした。「あまい！」とタイガはよろこびました。たねをよっこだしながらたべました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'おいしいすいかをたたくとどんなおとがしますか？',
        tasks: [{ instruction: INS, optionId: 'ponpon', color: 'red', shape: 'circle' }],
        options: [
          { id: 'ponpon', label: 'ポンポン', emoji: '🍉' },
          { id: 'cocon',  label: 'コンコン', emoji: '🪵' },
          { id: 'banban', label: 'バンバン', emoji: '💥' },
          { id: 'tontons', label: 'トントン', emoji: '🎵' },
        ],
        explanation: '「ポンポンとなるとおいしいすいかだということでした」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'たべながらだしたたねはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「たねをよっこだしながらたべました」とあります。',
      },
    ],
  },
  {
    id: 'story-255', title: 'なつのきゅうリ', difficulty: 1,
    estimatedMinutes: 2, icon: '🥒',
    story: 'ろくがつのあついひ、サヤはれいぞうこからつめたいきゅうりをだしてたべました。おかあさんがうすくきってくれて、うめぼしをのせてくれました。「つめたくておいしい！」とサヤがいいました。おかあさんが「きゅうりはみずぶんがおおくて、あつい日にぴったりだよ」とおしえてくれました。「からだがすずしくなるかんじがする」とサヤがいいました。よっきれたべました。「もっとたべたい！」とサヤがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'きゅうりのうえにのせたのはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'umeboshi', color: 'red', shape: 'circle' }],
        options: [
          { id: 'umeboshi', label: 'うめぼし',   emoji: '🔴' },
          { id: 'salt',     label: 'しお',       emoji: '🧂' },
          { id: 'mayo',     label: 'マヨネーズ', emoji: '🍶' },
          { id: 'miso',     label: 'みそ',       emoji: '🫙' },
        ],
        explanation: '「うめぼしをのせてくれました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'サヤはきゅうりをなんきれたべましたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「よっきれたべました」とあります。',
      },
    ],
  },
  {
    id: 'story-256', title: 'なつのかくれんぼ', difficulty: 1,
    estimatedMinutes: 2, icon: '🙈',
    story: 'ろくがつのにちようびに、ケンとともだちのアツシとミナのさんにんでかくれんぼをしました。ケンがおにになりました。「いーち、にー、さーん」とじゅうかぞえました。みにいくと、アツシはきのうしろにかくれていました。ミナははなだんのなかにかくれていました。「みーつけた！」とケンはよろこびました。つぎはアツシがおにになりました。さんかいかくれんぼをして、ケンはにかいみつけることができました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かくれんぼをしたのはなんにんでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: 'ケンとアツシとミナの「さんにんで」かくれんぼをしました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'アツシはどこにかくれていましたか？',
        tasks: [{ instruction: INS, optionId: 'tree', color: 'red', shape: 'circle' }],
        options: [
          { id: 'tree',   label: 'きのうしろ',   emoji: '🌲' },
          { id: 'flower', label: 'はなだんのなか', emoji: '🌸' },
          { id: 'wall',   label: 'かべのうしろ', emoji: '🧱' },
          { id: 'bush',   label: 'くさむらのなか', emoji: '🌿' },
        ],
        explanation: '「アツシはきのうしろにかくれていました」とあります。',
      },
    ],
  },
  {
    id: 'story-257', title: 'なつのあさのさんぽ', difficulty: 1,
    estimatedMinutes: 2, icon: '🌅',
    story: 'ろくがつのあさ、リョウはおとうさんとはやおきしてさんぽにでかけました。まだすずしくて、くうきがきれいでした。こうえんでとりがさんわないていました。「ちゅんちゅん」というこえがきもちよくひびきました。ひまわりのはながふたつさいていました。「なつはやっぱりひまわりだね」とおとうさんがいいました。かえりみちにジュースをひとつかって、ふたりでわけてのみました。「あしたもはやおきしよう」とリョウはけっしんしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'こうえんでないていたとりはなんわでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「とりがさんわないていました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'さいていたひまわりはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「ひまわりのはながふたつさいていました」とあります。',
      },
    ],
  },
]
