import type { Story } from '../types'

const INS = 'ただしいこたえをえらんで、あかでまるをおしてください'

export const storiesMay: Story[] = [
  // ===== 5月 やさしい（31問） =====
  {
    id: 'story-197', title: 'はつなつのかぜ', difficulty: 1,
    estimatedMinutes: 2, icon: '🌿',
    story: 'ごがつになって、はつなつのかぜがふいてきました。ユイはこうえんでシートをひいて、お母さんといっしょにほんをよみました。かぜがふくと、みどりのはっぱがきもちよくゆれていました。ちょうちょうがよっひきとんできて、はなのまわりをとびまわっていました。「もうなつがちかいね」とお母さんがいいました。ユイはふかく息をすって「きもちいい！」とわらいました。なんじかんでもここにいたいとおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'とんできたちょうちょうはなんひきでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「ちょうちょうがよっひきとんできて」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かぜでゆれていたのはなんのはっぱでしたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'green',  label: 'みどりのはっぱ', emoji: '🌿' },
          { id: 'cherry', label: 'さくらのはなびら', emoji: '🌸' },
          { id: 'red',    label: 'あかいはっぱ',   emoji: '🍂' },
          { id: 'yellow', label: 'きいろのはっぱ', emoji: '🍁' },
        ],
        explanation: '「みどりのはっぱがきもちよくゆれていました」とあります。',
      },
    ],
  },
  {
    id: 'story-198', title: 'たんぼのかんさつ', difficulty: 1,
    estimatedMinutes: 2, icon: '🌾',
    story: 'ごがつのにちようびに、ソウタはおじいちゃんとたんぼをみにいきました。たんぼにはみずがはられて、みどりのなえがならんでいました。「このなえがおこめになるの？」とソウタがきくと、「そうだよ、あきになったらいっぱいとれるよ」とおじいちゃんがこたえました。なえのひとつをそっとさわってみると、やわらかくてひょろひょろしていました。かえりみちに、おたまじゃくしをさんびきみつけました。「このたんぼのこどもだ」とソウタはおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かえりみちにみつけたおたまじゃくしはなんびきでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「おたまじゃくしをさんびきみつけました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'なえはなにになるとおじいちゃんがおしえてくれましたか？',
        tasks: [{ instruction: INS, optionId: 'rice', color: 'red', shape: 'circle' }],
        options: [
          { id: 'rice',  label: 'おこめ', emoji: '🌾' },
          { id: 'wheat', label: 'むぎ',   emoji: '🌾' },
          { id: 'corn',  label: 'とうもろこし', emoji: '🌽' },
          { id: 'bean',  label: 'まめ',   emoji: '🫘' },
        ],
        explanation: '「このなえがおこめになるの？」に「そうだよ」と答えています。',
      },
    ],
  },
  {
    id: 'story-199', title: 'こどもまつり', difficulty: 1,
    estimatedMinutes: 2, icon: '🎠',
    story: 'ごがつのこどもまつりにいきました。マナはおかあさんといっしょにいきました。まずやきそばのみせによりました。あまいにおいがしていてとてもおいしそうでした。つぎにわたあめをかいました。しろいわたあめがおおきくてびっくりしました。さいごにかなわりゲームをさんかいしました。二かいめにかなをあてて、けいひんのえんぴつをふたつもらいました。「たのしかった！」とマナはうれしくなりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かなわりゲームでもらったえんぴつはなんぼんでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「けいひんのえんぴつをふたつもらいました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かなわりゲームはなんかいしましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「かなわりゲームをさんかいしました」とあります。',
      },
    ],
  },
  {
    id: 'story-200', title: 'はつかつおのごちそう', difficulty: 1,
    estimatedMinutes: 2, icon: '🐟',
    story: 'ごがつになって、おかあさんがはつかつおをかってきました。「ごがつのかつおはおいしいんだよ」とおかあさんがおしえてくれました。ケンはかつおのたたきをよっきれたべました。「しょうがとにんにくといっしょにたべるとおいしいよ」とおとうさんがいいました。たべてみると、「おいしい！」とケンはよろこびました。「またたべたいな」とケンがいうと、「らいしゅうまたかおうね」とおかあさんがこたえました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ケンはかつおのたたきをなんきれたべましたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「かつおのたたきをよっきれたべました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かつおといっしょにたべるとおいしいとお父さんがいったものはどれですか？',
        tasks: [{ instruction: INS, optionId: 'b', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'しおとこしょう',     emoji: '🧂' },
          { id: 'b', label: 'しょうがとにんにく', emoji: '🌿' },
          { id: 'c', label: 'バターとさとう',     emoji: '🧈' },
          { id: 'd', label: 'しょうゆとみりん',   emoji: '🍶' },
        ],
        explanation: '「しょうがとにんにくといっしょにたべるとおいしいよ」とあります。',
      },
    ],
  },
  {
    id: 'story-201', title: 'あじさいのかんさつ', difficulty: 1,
    estimatedMinutes: 2, icon: '💜',
    story: 'ごがつのはじめに、リナはにわのあじさいのつぼみをみつけました。「もうつぼみができてる！」とリナはびっくりしました。おかあさんが「あじさいはろくがつにさくんだよ」とおしえてくれました。つぼみはみっつありました。「いっかいずつかんさつノートにかこう」とリナはにわにでました。えんぴつでていねいにつぼみのえをかきました。まいしゅうかんさつをつづけて、はなのへんかをかくことにしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'あじさいのつぼみはいくつありましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「つぼみはみっつありました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'あじさいがさくのはなんがつですか？',
        tasks: [{ instruction: INS, optionId: '6', color: 'red', shape: 'circle' }],
        options: [
          { id: '5', label: '5がつ', emoji: '📅' },
          { id: '6', label: '6がつ', emoji: '📅' },
          { id: '7', label: '7がつ', emoji: '📅' },
          { id: '8', label: '8がつ', emoji: '📅' },
        ],
        explanation: '「あじさいはろくがつにさくんだよ」とあります。',
      },
    ],
  },
  {
    id: 'story-202', title: 'はつなつのプール', difficulty: 1,
    estimatedMinutes: 2, icon: '🏊',
    story: 'ごがつのれんきゅうに、アキラはかぞくでプールへいきました。そとのプールにはいると、みずがすこしつめたくてきもちよかったです。アキラはおよぐのがすきで、いきをとめてみずのなかをじゅっびょういました。お兄さんはにじゅうびょういられました。「すごい！」とアキラはびっくりしました。プールからでると、からだがさっぱりして、はるよりすずしくかんじました。かえりにソフトクリームをひとつかってもらいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'アキラがみずのなかにいられたびょうすうはなんびょうでしたか？',
        tasks: [{ instruction: INS, optionId: '10', color: 'red', shape: 'circle' }],
        options: [
          { id: '5',  label: '5びょう',  emoji: '5️⃣' },
          { id: '10', label: '10びょう', emoji: '🔟' },
          { id: '15', label: '15びょう', emoji: '1️⃣5️⃣' },
          { id: '20', label: '20びょう', emoji: '2️⃣0️⃣' },
        ],
        explanation: '「みずのなかをじゅっびょうい（10秒）ました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かえりにかってもらったのはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'softcream', color: 'red', shape: 'circle' }],
        options: [
          { id: 'softcream', label: 'ソフトクリーム', emoji: '🍦' },
          { id: 'juice',     label: 'ジュース',       emoji: '🧃' },
          { id: 'icebar',    label: 'アイスバー',     emoji: '🍧' },
          { id: 'candy',     label: 'あめ',           emoji: '🍬' },
        ],
        explanation: '「ソフトクリームをひとつかってもらいました」とあります。',
      },
    ],
  },
  {
    id: 'story-203', title: 'ははのひのプレゼント', difficulty: 1,
    estimatedMinutes: 2, icon: '💐',
    story: 'はははのひです。リョウはおかあさんへのプレゼントをじぶんでつくりました。しろいかみにあかいはなをふたつ、きいろいはなをみっつかきました。「いつもありがとう」とひらがなでかきました。かみをたたんでふうとうにいれました。「どうぞ」とリョウはわたしました。おかあさんはふうとうをあけて、「すてき！うれしいよ」といいながらなみだをうかべました。リョウはびっくりしましたが、「よかった」とおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かみにかいたあかいはなはいくつでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「あかいはなをふたつ」かきました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かみにかいたきいろいはなはいくつでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「きいろいはなをみっつ」かきました。',
      },
    ],
  },
  {
    id: 'story-204', title: 'きゅうりのしゅうかく', difficulty: 1,
    estimatedMinutes: 2, icon: '🥒',
    story: 'はたけのきゅうりがそだってきました。ナナはおとうさんといっしょにきゅうりをしゅうかくしました。みどりにいろづいたきゅうりをよっほんとりました。「もぎたてはどんなあじがするか、たべてみて」とおとうさんがいいました。ナナはいっくちたべると「みずみずしい！」とよろこびました。おかあさんが「きゅうりのあさつけをつくろう」といって、しおをふってたべやすくしてくれました。さっぱりとしておいしかったです。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'しゅうかくしたきゅうりはなんほんでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「きゅうりをよっほんとりました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'おかあさんはきゅうりでなにをつくりましたか？',
        tasks: [{ instruction: INS, optionId: 'tsukemono', color: 'red', shape: 'circle' }],
        options: [
          { id: 'tsukemono', label: 'あさつけ', emoji: '🥒' },
          { id: 'salad',     label: 'サラダ',   emoji: '🥗' },
          { id: 'soup',      label: 'スープ',   emoji: '🍲' },
          { id: 'juice',     label: 'ジュース', emoji: '🧃' },
        ],
        explanation: '「きゅうりのあさつけをつくろう」とあります。',
      },
    ],
  },
  {
    id: 'story-205', title: 'なつのやさいのそだて', difficulty: 1,
    estimatedMinutes: 2, icon: '🍅',
    story: 'ようちえんのはたけで、コウタはトマトのなえをみっぽんうえました。まいにちみずをやって、にしゅうかんたつと、ちいさなきいろいはながさきました。「はながさいたよ！」とコウタはせんせいにしらせました。せんせいが「このはなからトマトができるんだよ」とおしえてくれました。「たのしみだな」とコウタはにこにこしながら、じょうろでみずをあげました。みずをあげながら「おおきくなってね」とこえをかけました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'コウタがうえたトマトのなえはなんぽんでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「トマトのなえをみっぽんうえました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'さいたはなはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'yellow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'white',  label: 'しろ',   emoji: '⬜' },
          { id: 'pink',   label: 'ぴんく', emoji: '🩷' },
        ],
        explanation: '「ちいさなきいろいはながさきました」とあります。',
      },
    ],
  },
  {
    id: 'story-206', title: 'なつのむし', difficulty: 1,
    estimatedMinutes: 2, icon: '🐛',
    story: 'はれたごがつのひ、タロウはこうえんでなつのむしをさがしました。まずあおむしをふたつみつけました。つぎにせみのぬけがらをみっつみつけました。さいごにとんぼをいっぴきみつけました。「むしってどこにでもいるね」とタロウはかんしんしました。おかあさんが「むしはだいじないきものだよ」とおしえてくれました。「ころさないでおこう」とタロウはかんがえました。むしをじっくりみたあと、そっとはなしてあげました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'みつけたあおむしはいくつでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「あおむしをふたつみつけました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'みつけたせみのぬけがらはいくつでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「せみのぬけがらをみっつみつけました」とあります。',
      },
    ],
  },
  {
    id: 'story-207', title: 'はじめてのじてんしゃ', difficulty: 1,
    estimatedMinutes: 2, icon: '🚲',
    story: 'ごがつのにちようびに、ミオはじてんしゃのれんしゅうをしました。まだほじょりんをつけているのではずすことにしました。おとうさんがうしろからてつだってくれながら、ゆっくりこぎはじめました。さいしょはふらふらしていましたが、だんだんまっすぐすすめるようになりました。「てばなすよ！」とおとうさんがいうと、ミオはひとりでこげていました。「やった！ひとりでできた！」とミオはおおよろこびでした。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'じてんしゃのれんしゅうでおとうさんがしてくれたことはなんですか？',
        tasks: [{ instruction: INS, optionId: 'support', color: 'red', shape: 'circle' }],
        options: [
          { id: 'support', label: 'うしろからてつだった', emoji: '👨' },
          { id: 'cheer',   label: 'おうえんした',       emoji: '📣' },
          { id: 'watch',   label: 'みていた',           emoji: '👀' },
          { id: 'push',    label: 'まえからおした',     emoji: '🚲' },
        ],
        explanation: '「おとうさんがうしろからてつだってくれながら」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ミオがひとりでじてんしゃをこげたとき、どういいましたか？',
        tasks: [{ instruction: INS, optionId: 'yatta', color: 'red', shape: 'circle' }],
        options: [
          { id: 'yatta',   label: 'やった！ひとりでできた！', emoji: '🎉' },
          { id: 'kowai',   label: 'こわい！とめて！',         emoji: '😱' },
          { id: 'tanoshi', label: 'たのしい！',               emoji: '😊' },
          { id: 'itai',    label: 'いたい！',                 emoji: '😣' },
        ],
        explanation: '「やった！ひとりでできた！」とミオはおおよろこびでした。',
      },
    ],
  },
  {
    id: 'story-208', title: 'なつのにわしごと', difficulty: 1,
    estimatedMinutes: 2, icon: '🌻',
    story: 'ごがつのはれたひ、ハルはおかあさんとにわしごとをしました。まずなえのまわりのくさをぬきました。つぎによっこのポットにひまわりのたねをまきました。みずをかけると、たねがぬれてかがやいてみえました。「いつさくかな」とハルがたずねると、「なつになったらさくよ」とおかあさんがこたえました。ハルはひまわりがさくのをたのしみにしながら、「おおきくなあれ」とつぶやきました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ひまわりのたねをまいたポットはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「よっこのポットにひまわりのたねをまきました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ひまわりはいつさくとおかあさんがこたえましたか？',
        tasks: [{ instruction: INS, optionId: 'summer', color: 'red', shape: 'circle' }],
        options: [
          { id: 'summer', label: 'なつ',     emoji: '☀️' },
          { id: 'spring', label: 'はる',     emoji: '🌸' },
          { id: 'autumn', label: 'あき',     emoji: '🍂' },
          { id: 'soon',   label: 'もうすぐ', emoji: '⏰' },
        ],
        explanation: '「なつになったらさくよ」とおかあさんがこたえました。',
      },
    ],
  },
  {
    id: 'story-209', title: 'なつのでんしゃたび', difficulty: 1,
    estimatedMinutes: 2, icon: '🚃',
    story: 'ごがつのれんきゅうに、ユナとおかあさんはでんしゃにのっておじいちゃんのいえへいきました。でんしゃのなかでかわをわたるとき、「みて、かわだ！」とユナはまどにかおをよせてみました。えきでおりると、おじいちゃんがまっていてくれました。「よくきたね」とおじいちゃんがうれしそうにいいました。おじいちゃんのいえでおひるごはんをたべました。てんぷらとごはんとみそしるでした。「おじいちゃんのてんぷらはおいしい！」とユナがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'でんしゃのなかでユナがみたのはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'river', color: 'red', shape: 'circle' }],
        options: [
          { id: 'river',    label: 'かわ',     emoji: '🌊' },
          { id: 'mountain', label: 'やま',     emoji: '⛰️' },
          { id: 'sea',      label: 'うみ',     emoji: '🌊' },
          { id: 'forest',   label: 'もり',     emoji: '🌲' },
        ],
        explanation: '「みて、かわだ！」とユナはまどにかおをよせてみました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'おじいちゃんのいえでたべたおひるごはんにはいっていないものはどれですか？',
        tasks: [{ instruction: INS, optionId: 'soba', color: 'red', shape: 'circle' }],
        options: [
          { id: 'tempura', label: 'てんぷら', emoji: '🍤' },
          { id: 'rice',    label: 'ごはん',   emoji: '🍚' },
          { id: 'miso',    label: 'みそしる', emoji: '🍜' },
          { id: 'soba',    label: 'そば',     emoji: '🍜' },
        ],
        explanation: '「てんぷらとごはんとみそしる」で、そばははいっていません。',
      },
    ],
  },
  {
    id: 'story-210', title: 'なつのたいいく', difficulty: 1,
    estimatedMinutes: 2, icon: '⚽',
    story: 'ごがつのたいいくのじゅぎょうで、リクのクラスはサッカーをしました。ふたつのチームにわかれました。リクはあかいビブスをつけました。リクはさんかいシュートをして、そのうちふたかいはいりました。「やったね」とチームのみんながよろこびました。リクのチームがよんたいにで、かちました。「またやりたい！」とリクはうれしそうにいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'リクがつけたビブスはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'red', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「リクはあかいビブスをつけました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'リクはシュートをなんかいしましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「さんかいシュートをして」とあります。',
      },
    ],
  },
  {
    id: 'story-211', title: 'なつのてがみ', difficulty: 1,
    estimatedMinutes: 2, icon: '✉️',
    story: 'ごがつのはじめに、サラはひっこしたともだちのユイにてがみをかきました。みどりのびんせんにひらがなでかきました。「げんきですか。あたらしいがっこうはたのしいですか。わたしはまいにちあなたのことをおもっています。またあいたいな。サラより」とかきました。ふうとうにいれてきってをはりました。「じゃあ、ポストにいれてくるね」とサラはいいながらポストへはしっていきました。ユイからへんじがくるのをたのしみにまちました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'てがみをかいたびんせんはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'pink',   label: 'ぴんく', emoji: '🩷' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
        ],
        explanation: '「みどりのびんせんにひらがなでかきました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'てがみをかいたのはだれでしたか？',
        tasks: [{ instruction: INS, optionId: 'sara', color: 'red', shape: 'circle' }],
        options: [
          { id: 'sara', label: 'サラ', emoji: '👧' },
          { id: 'yui',  label: 'ユイ', emoji: '👧' },
          { id: 'mom',  label: 'おかあさん', emoji: '👩' },
          { id: 'dad',  label: 'おとうさん', emoji: '👨' },
        ],
        explanation: '「サラはひっこしたともだちのユイにてがみをかきました」とあります。',
      },
    ],
  },
  {
    id: 'story-212', title: 'なつのすいか', difficulty: 1,
    estimatedMinutes: 2, icon: '🍉',
    story: 'ごがつのおわりに、おじいちゃんのはたけにすいかのなえがうえられました。カイはおじいちゃんといっしょになえをみっぽんうえました。「おおきなすいかになるといいね」とカイがいいました。おじいちゃんは「なつになったらあまくておいしいすいかができるよ」といいました。カイはまいしゅうみにくることをやくそくしました。「おおきくなあれ」とカイはなえにこえをかけました。なつがたのしみになりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'うえたすいかのなえはなんぽんでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「なえをみっぽんうえました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'すいかはいつたべられるとおじいちゃんがいいましたか？',
        tasks: [{ instruction: INS, optionId: 'summer', color: 'red', shape: 'circle' }],
        options: [
          { id: 'summer', label: 'なつ',     emoji: '☀️' },
          { id: 'spring', label: 'はる',     emoji: '🌸' },
          { id: 'autumn', label: 'あき',     emoji: '🍂' },
          { id: 'soon',   label: 'もうすぐ', emoji: '⏰' },
        ],
        explanation: '「なつになったらあまくておいしいすいかができるよ」とあります。',
      },
    ],
  },
  {
    id: 'story-213', title: 'なつのきゅうしょく', difficulty: 1,
    estimatedMinutes: 2, icon: '🍱',
    story: 'なつのちかいごがつのきゅうしょくに、レイのがっこうではれいめんがでました。「れいめん？」とレイはしらないたべものにびっくりしました。つめたいめんにすいかがのっていました。「すいかがのってる！」とクラスのみんながおどろきました。たべてみると、めんはさっぱりしてつるつるでした。すいかはあまくてよくあいました。「おいしい！」とレイはよろこびました。「なつはれいめんにかぎる」とせんせいがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'きゅうしょくのれいめんにのっていたのはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'watermelon', color: 'red', shape: 'circle' }],
        options: [
          { id: 'watermelon', label: 'すいか',   emoji: '🍉' },
          { id: 'egg',        label: 'たまご',   emoji: '🥚' },
          { id: 'cucumber',   label: 'きゅうり', emoji: '🥒' },
          { id: 'tomato',     label: 'トマト',   emoji: '🍅' },
        ],
        explanation: '「つめたいめんにすいかがのっていました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'めんのくちあたりはどのようでしたか？',
        tasks: [{ instruction: INS, optionId: 'smooth', color: 'red', shape: 'circle' }],
        options: [
          { id: 'smooth',  label: 'さっぱりしてつるつる', emoji: '😋' },
          { id: 'hard',    label: 'かたくてかみごたえがある', emoji: '😄' },
          { id: 'spicy',   label: 'からくてあつい',     emoji: '🌶️' },
          { id: 'sweet',   label: 'あまくてやわらかい', emoji: '🍭' },
        ],
        explanation: '「めんはさっぱりしてつるつるでした」とあります。',
      },
    ],
  },
  {
    id: 'story-214', title: 'なつのかぶとむし', difficulty: 1,
    estimatedMinutes: 2, icon: '🪲',
    story: 'ごがつのよなか、ダイキはおとうさんとかぶとむしをつかまえにもりへいきました。よるのもりはくらかったけど、かいちゅうでんとうをもっていたのでだいじょうぶでした。くぬぎのきのそばにいくと、かぶとむしがふたひきいました。そっとつかまえると、つのがかたくてたくましかったです。「すごい！」とダイキはおどろきました。かごにいれてうちへもってかえりました。「ちゃんとそだてようね」とおとうさんがいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かぶとむしはなんびきいましたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「かぶとむしがふたひきいました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'くらいもりでつかったのはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'flashlight', color: 'red', shape: 'circle' }],
        options: [
          { id: 'flashlight', label: 'かいちゅうでんとう', emoji: '🔦' },
          { id: 'candle',     label: 'ろうそく',           emoji: '🕯️' },
          { id: 'lamp',       label: 'ランプ',             emoji: '🪔' },
          { id: 'phone',      label: 'スマートフォン',     emoji: '📱' },
        ],
        explanation: '「かいちゅうでんとうをもっていたのでだいじょうぶでした」とあります。',
      },
    ],
  },
  {
    id: 'story-215', title: 'なつのアイス', difficulty: 1,
    estimatedMinutes: 2, icon: '🍦',
    story: 'あついごがつのひ、マナはおかあさんといっしょにアイスクリームをつくりました。ぎゅうにゅうとさとうとバナナをまぜて、れいとうこにいれてひやしました。さんじかんまつと、かたまっていました。「できた！」とマナはよろこびました。スプーンですくうと、やわらかくてクリーミーでした。「おかあさん、これおいしい！」とマナがいいました。「またつくろうね」とおかあさんがわらいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'アイスクリームをつくるのにかかったじかんはなんじかんでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1じかん', emoji: '🕐' },
          { id: '2', label: '2じかん', emoji: '🕑' },
          { id: '3', label: '3じかん', emoji: '🕒' },
          { id: '4', label: '4じかん', emoji: '🕓' },
        ],
        explanation: '「さんじかんまつと、かたまっていました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'アイスクリームのざいりょうにはいっていないものはどれですか？',
        tasks: [{ instruction: INS, optionId: 'egg', color: 'red', shape: 'circle' }],
        options: [
          { id: 'milk',   label: 'ぎゅうにゅう', emoji: '🥛' },
          { id: 'sugar',  label: 'さとう',       emoji: '🍚' },
          { id: 'banana', label: 'バナナ',       emoji: '🍌' },
          { id: 'egg',    label: 'たまご',       emoji: '🥚' },
        ],
        explanation: '「ぎゅうにゅうとさとうとバナナをまぜて」で、たまごははいっていません。',
      },
    ],
  },
  {
    id: 'story-216', title: 'なつのじゃがいも', difficulty: 1,
    estimatedMinutes: 2, icon: '🥔',
    story: 'ごがつのはたけで、じゃがいもをしゅうかくしました。ノブはおじいちゃんといっしょにつちをほりました。「ここにあるよ」とおじいちゃんがしめすと、おおきなじゃがいもがでてきました。ノブはよっこじゃがいもをほりました。「こんなにとれた！」とノブはうれしくなりました。おうちにかえって、じゃがいものスープをつくりました。みんなでたべると、「ほくほくしておいしい！」とみんながよろこびました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ノブがほったじゃがいもはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「よっこじゃがいもをほりました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'じゃがいもでつくったりょうりはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'soup', color: 'red', shape: 'circle' }],
        options: [
          { id: 'soup',  label: 'スープ',   emoji: '🍲' },
          { id: 'curry', label: 'カレー',   emoji: '🍛' },
          { id: 'salad', label: 'サラダ',   emoji: '🥗' },
          { id: 'fry',   label: 'フライ',   emoji: '🍟' },
        ],
        explanation: '「じゃがいものスープをつくりました」とあります。',
      },
    ],
  },
  {
    id: 'story-217', title: 'なつのべんきょう', difficulty: 1,
    estimatedMinutes: 2, icon: '📚',
    story: 'ごがつのれんきゅうに、コウはしゅくだいをがんばりました。さんすうのもんだいをにじゅうもん、こくごのもじかきをじゅうごもんやりました。「こんなにできた！」とコウはうれしくなりました。おかあさんが「よくがんばったね、えらい」とほめてくれました。おとうさんも「じゃあ、アイスをかってあげよう」といいました。コウは「やった！」とおおよろこびでした。べんきょうがんばったごほうびにアイスをたべました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'さんすうのもんだいはなんもんやりましたか？',
        tasks: [{ instruction: INS, optionId: '20', color: 'red', shape: 'circle' }],
        options: [
          { id: '10', label: '10もん', emoji: '🔟' },
          { id: '15', label: '15もん', emoji: '1️⃣5️⃣' },
          { id: '20', label: '20もん', emoji: '2️⃣0️⃣' },
          { id: '25', label: '25もん', emoji: '2️⃣5️⃣' },
        ],
        explanation: '「さんすうのもんだいをにじゅうもん」やりました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'べんきょうのごほうびにもらったのはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'ice', color: 'red', shape: 'circle' }],
        options: [
          { id: 'ice',   label: 'アイス',     emoji: '🍦' },
          { id: 'candy', label: 'おかし',     emoji: '🍬' },
          { id: 'book',  label: 'ほん',       emoji: '📕' },
          { id: 'toy',   label: 'おもちゃ',   emoji: '🎮' },
        ],
        explanation: '「アイスをかってあげよう」とおとうさんがいいました。',
      },
    ],
  },
  {
    id: 'story-218', title: 'なつのどうぶつかん', difficulty: 1,
    estimatedMinutes: 2, icon: '🐠',
    story: 'ごがつのにちようびに、アミはかぞくですいぞくかんにいきました。まずおおきなさめをみました。「こわいね」とアミがいいました。つぎにカラフルなさかなのすいそうをみました。あか、きいろ、あおのさかながそれぞれさんびきずつおよいでいました。さいごにいるかのショーをみました。いるかがたかくジャンプするたびに、みんながおどろきました。「もういちどみたい！」とアミはいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'さいしょにみたのはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'shark', color: 'red', shape: 'circle' }],
        options: [
          { id: 'shark',   label: 'さめ',   emoji: '🦈' },
          { id: 'fish',    label: 'さかな', emoji: '🐟' },
          { id: 'dolphin', label: 'いるか', emoji: '🐬' },
          { id: 'turtle',  label: 'かめ',   emoji: '🐢' },
        ],
        explanation: '「まずおおきなさめをみました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'すいそうのなかにさかなはいろごとにそれぞれなんびきいましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「あか、きいろ、あおのさかながそれぞれさんびきずつ」とあります。',
      },
    ],
  },
  {
    id: 'story-219', title: 'なつのソーセージまつり', difficulty: 1,
    estimatedMinutes: 2, icon: '🌭',
    story: 'ごがつのれんきゅうに、ケンとかぞくでバーベキューをしました。おとうさんがソーセージをやきました。きつね色になったソーセージがとてもおいしそうでした。ケンはソーセージをみっぽんたべました。おかあさんはふたほん、おとうさんはよっほんたべました。「やきたてはおいしいね」とみんながいいました。あとでたきびのそばでマシュマロをやいてたべました。「はじめてたべたけどおいしい！」とケンはよろこびました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ケンはソーセージをなんほんたべましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「ケンはソーセージをみっぽんたべました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'たきびでやいたものはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'marshmallow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'marshmallow', label: 'マシュマロ', emoji: '🫧' },
          { id: 'sausage',     label: 'ソーセージ', emoji: '🌭' },
          { id: 'bread',       label: 'パン',       emoji: '🍞' },
          { id: 'banana',      label: 'バナナ',     emoji: '🍌' },
        ],
        explanation: '「たきびのそばでマシュマロをやいてたべました」とあります。',
      },
    ],
  },
  {
    id: 'story-220', title: 'なつのおりょうりきょうしつ', difficulty: 1,
    estimatedMinutes: 2, icon: '🍳',
    story: 'ごがつのどようびに、リナはこどものりょうりきょうしつにさんかしました。きょうのメニューはスクランブルエッグでした。たまごをさんこわって、しおとこしょうをいれてかきまぜました。フライパンにバターをとかしてたまごをいれて、ゆっくりかきまぜると、ふわふわになりました。「ふわふわ！」とリナはうれしくなりました。できあがったスクランブルエッグをトーストにのせてたべました。「また りょうりきょうしつにきたい」とリナはおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'たまごはなんこつかいましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「たまごをさんこわって」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'スクランブルエッグをのせてたべたのはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'toast', color: 'red', shape: 'circle' }],
        options: [
          { id: 'toast',  label: 'トースト', emoji: '🍞' },
          { id: 'rice',   label: 'ごはん',   emoji: '🍚' },
          { id: 'cracker', label: 'クラッカー', emoji: '🫙' },
          { id: 'noodle', label: 'めん',     emoji: '🍜' },
        ],
        explanation: '「できあがったスクランブルエッグをトーストにのせてたべました」とあります。',
      },
    ],
  },
  {
    id: 'story-221', title: 'なつのおんがく', difficulty: 1,
    estimatedMinutes: 2, icon: '🎵',
    story: 'ごがつのおんがくのじゅぎょうで、ミサのクラスはかいしゃくするきょくをきめました。「うみ」というきょくをうたうことになりました。リコーダーパートとピアニカパートにわかれて、れんしゅうしました。ミサはリコーダーをたんとうしました。「ふーっとふいてね」とせんせいがおしえてくれました。ミサはさんじゅっぷんれんしゅうして、きれいにふけるようになりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'うたうきょくのなまえはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'umi', color: 'red', shape: 'circle' }],
        options: [
          { id: 'umi',    label: 'うみ',     emoji: '🌊' },
          { id: 'hana',   label: 'はな',     emoji: '🌸' },
          { id: 'yama',   label: 'やま',     emoji: '⛰️' },
          { id: 'sora',   label: 'そら',     emoji: '☁️' },
        ],
        explanation: '「うみというきょくをうたうことになりました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ミサがたんとうしたがっきはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'recorder', color: 'red', shape: 'circle' }],
        options: [
          { id: 'recorder', label: 'リコーダー', emoji: '🎵' },
          { id: 'pianica',  label: 'ピアニカ',   emoji: '🎹' },
          { id: 'drum',     label: 'たいこ',     emoji: '🥁' },
          { id: 'triangle', label: 'トライアングル', emoji: '🔔' },
        ],
        explanation: '「ミサはリコーダーをたんとうしました」とあります。',
      },
    ],
  },
  {
    id: 'story-222', title: 'なつのほたる', difficulty: 1,
    estimatedMinutes: 2, icon: '✨',
    story: 'ごがつのよる、タカシはおとうさんとかわぞいにほたるをみにいきました。「ほたるがとんでいるよ」とおとうさんがいいました。くらいかわのそばで、みどりのひかりがふわふわとんでいました。「きれい！」とタカシはめをかがやかせました。かぞえると、ほたるがさんびきみえました。「ほたるはなぜひかるの？」とタカシがきくと、「ともだちをさがしているんだよ」とおとうさんがおしえてくれました。「そうか、こいしいひとをさがしているんだね」とタカシはおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'みえたほたるはなんびきでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「ほたるがさんびきみえました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ほたるのひかりはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'white',  label: 'しろ',   emoji: '⬜' },
        ],
        explanation: '「みどりのひかりがふわふわとんでいました」とあります。',
      },
    ],
  },
  {
    id: 'story-223', title: 'なつのぼうえんきょう', difficulty: 1,
    estimatedMinutes: 2, icon: '🔭',
    story: 'ごがつのさむいよる、ユウはおとうさんとぼうえんきょうでほしをみました。「あのほしはきんせいだよ」とおとうさんがおしえてくれました。「ぴかぴかしてるね」とユウがいいました。「まだほかのほしもみたい！」とユウはよろこんでよっつのほしをみつけました。「あのほしはさそりざだよ、さそりのかたちにみえるよ」とおとうさんがいいました。「ほんとだ！」とユウはおどろいてまたのぞきこみました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'おとうさんがおしえてくれたほしはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'venus', color: 'red', shape: 'circle' }],
        options: [
          { id: 'venus',   label: 'きんせい',   emoji: '⭐' },
          { id: 'mars',    label: 'かせい',     emoji: '🔴' },
          { id: 'jupiter', label: 'もくせい',   emoji: '🟡' },
          { id: 'saturn',  label: 'どせい',     emoji: '🪐' },
        ],
        explanation: '「あのほしはきんせいだよ」とおとうさんがおしえてくれました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ユウがみつけたほしはいくつでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「よっつのほしをみつけました」とあります。',
      },
    ],
  },
  {
    id: 'story-224', title: 'なつのかかし', difficulty: 1,
    estimatedMinutes: 2, icon: '🌾',
    story: 'ごがつのにちようびに、カナはおじいちゃんとかかしをつくりました。ふるいシャツをきせて、みどりのぼうしをかぶせました。かおはまるくかいたかみをはりつけました。「こわいかおにしたほうがいいかな」とカナがいうと、「すずめがにげるからね」とおじいちゃんがわらいました。できあがったかかしをたんぼのまんなかにたてました。「よく でできたね」とおじいちゃんがほめてくれました。カナはうれしくなりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'かかしにかぶせたぼうしはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
        ],
        explanation: '「みどりのぼうしをかぶせました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かかしはどこにたてましたか？',
        tasks: [{ instruction: INS, optionId: 'tanbo', color: 'red', shape: 'circle' }],
        options: [
          { id: 'tanbo',  label: 'たんぼのまんなか', emoji: '🌾' },
          { id: 'garden', label: 'にわ',             emoji: '🌳' },
          { id: 'road',   label: 'みちばた',         emoji: '🛤️' },
          { id: 'hill',   label: 'おかのうえ',       emoji: '⛰️' },
        ],
        explanation: '「たんぼのまんなかにたてました」とあります。',
      },
    ],
  },
  {
    id: 'story-225', title: 'なつのはなびらおし', difficulty: 1,
    estimatedMinutes: 2, icon: '🌸',
    story: 'ごがつのにわのはなをつかって、アイははなびらおしをつくりました。さくらのはなびらとすみれとたんぽぽをあつめました。しろいかみのうえにていねいにならべて、その上からかみをかぶせてほんではさみました。いちにちまつと、はなびらがきれいにおされていました。「かわいい！」とアイはよろこびました。それをえはがきにはりつけて、おじいちゃんにおくりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'はなびらおしにつかっていないはなはどれですか？',
        tasks: [{ instruction: INS, optionId: 'rose', color: 'red', shape: 'circle' }],
        options: [
          { id: 'cherry',    label: 'さくら',   emoji: '🌸' },
          { id: 'violet',    label: 'すみれ',   emoji: '💜' },
          { id: 'dandelion', label: 'たんぽぽ', emoji: '🌼' },
          { id: 'rose',      label: 'バラ',     emoji: '🌹' },
        ],
        explanation: 'つかったのは「さくらのはなびらとすみれとたんぽぽ」で、バラはつかっていません。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'できあがったはなびらおしをだれにおくりましたか？',
        tasks: [{ instruction: INS, optionId: 'grandpa', color: 'red', shape: 'circle' }],
        options: [
          { id: 'grandpa', label: 'おじいちゃん', emoji: '👴' },
          { id: 'grandma', label: 'おばあちゃん', emoji: '👵' },
          { id: 'friend',  label: 'ともだち',     emoji: '👧' },
          { id: 'teacher', label: 'せんせい',     emoji: '👩‍🏫' },
        ],
        explanation: '「おじいちゃんにおくりました」とあります。',
      },
    ],
  },
  {
    id: 'story-226', title: 'なつのはとむぎ', difficulty: 1,
    estimatedMinutes: 2, icon: '🍵',
    story: 'おばあちゃんのいえではとむぎちゃをのみました。ミユはにがいかとおもっていましたが、のんでみるとやさしいあじでした。「これはからだにいいんだよ」とおばあちゃんがおしえてくれました。「このちゃはつぶからつくるの？」とミユがきくと、「そうよ、はとむぎというつぶからつくるの」とおばあちゃんがこたえました。ミユはてにとってみると、しろいつぶでした。「きれいなしろいいろだね」とミユがいいました。おばあちゃんはにっこりわらいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'はとむぎちゃのつぶのいろはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'white', color: 'red', shape: 'circle' }],
        options: [
          { id: 'white',  label: 'しろ',     emoji: '⬜' },
          { id: 'brown',  label: 'ちゃいろ', emoji: '🟤' },
          { id: 'green',  label: 'みどり',   emoji: '🟢' },
          { id: 'yellow', label: 'きいろ',   emoji: '🟡' },
        ],
        explanation: '「てにとってみると、しろいつぶでした」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'はとむぎちゃをのんでみてどんなあじでしたか？',
        tasks: [{ instruction: INS, optionId: 'gentle', color: 'red', shape: 'circle' }],
        options: [
          { id: 'gentle', label: 'やさしいあじ', emoji: '😊' },
          { id: 'bitter', label: 'にがいあじ',   emoji: '😣' },
          { id: 'sweet',  label: 'あまいあじ',   emoji: '😋' },
          { id: 'spicy',  label: 'からいあじ',   emoji: '🌶️' },
        ],
        explanation: '「のんでみるとやさしいあじでした」とあります。',
      },
    ],
  },
  {
    id: 'story-227', title: 'なつのあさのじかん', difficulty: 1,
    estimatedMinutes: 2, icon: '🌅',
    story: 'ごがつのあさ、タイヨウはいつもよりはやくめがさめました。まだごじはんでした。まどからそとをみると、そらがオレンジいろとあかいろにそまっていました。「うわあ、きれいだ！」とタイヨウはにわにとびだしました。とりがさんわないていました。「ちゅんちゅん」となきごえがきもちよくひびきました。「こんなにはやいあさっていいな」とタイヨウはおもいました。おかあさんがおきてきて「はやいね」とびっくりしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'タイヨウがおきたじこくはなんじはんでしたか？',
        tasks: [{ instruction: INS, optionId: '5.5', color: 'red', shape: 'circle' }],
        options: [
          { id: '5',   label: 'ごじ',     emoji: '🕔' },
          { id: '5.5', label: 'ごじはん', emoji: '🕠' },
          { id: '6',   label: 'ろくじ',   emoji: '🕕' },
          { id: '6.5', label: 'ろくじはん', emoji: '🕡' },
        ],
        explanation: '「まだごじはんでした」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ないていたとりはなんわでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「とりがさんわないていました」とあります。',
      },
    ],
  },
]
