import type { Story } from '../types'
import { storiesNov } from './stories-nov'
import { storiesDec } from './stories-dec'
import { storiesJan } from './stories-jan'
import { storiesFeb } from './stories-feb'
import { storiesMar } from './stories-mar'
import { storiesApr } from './stories-apr'
import { storiesMay } from './stories-may'
import { storiesJun } from './stories-jun'

export const stories: Story[] = [
  // ===== かんたん（サンプル） =====
  {
    id: 'story-000', title: 'こうえんのおでかけ', difficulty: 0,
    estimatedMinutes: 2, icon: '🌳',
    story: 'ある晴れた日、ゆうたくんと妹のさくらちゃんは、お母さんと一緒に大きな公園へ行きました。公園には赤いカエデの葉っぱがたくさん落ちていて、風が吹くたびに葉っぱがゆっくり舞っていました。最初に三人は噴水の近くにあるベンチに座り、お母さんが作ってくれたおにぎりを食べました。ゆうたくんは鮭のおにぎり、さくらちゃんは梅のおにぎりを食べました。お昼ご飯を食べた後、二人は公園の中を歩きながら池の近くへ行きました。その途中で白い鳥を見つけました。さくらちゃんは「白鳥かな？」と言いましたが、お母さんは「よく見てごらん。あれは白いサギだよ」と教えてくれました。帰る前に三人は売店へ行き、ゆうたくんはりんごジュース、さくらちゃんはいちごジュースを買ってもらいました。そして夕方になる前に、三人は手をつないで家へ帰りました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'さいしょにさんにんはどこへいきましたか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、あかでまるをおしてください', optionId: 'park', color: 'red', shape: 'circle' }],
        options: [
          { id: 'park',     label: 'こうえん', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/park.svg' },
          { id: 'sea',      label: 'うみ',     imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/sea.svg' },
          { id: 'mountain', label: 'やま',     imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/mountain.svg' },
          { id: 'station',  label: 'えき',     imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/station.svg' },
        ],
        explanation: '「大きな公園へ行きました」とあります。',
        category: '場所',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ゆうたくんがたべたおにぎりのぐはなんでしたか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、あおでまるをおしてください', optionId: 'salmon', color: 'blue', shape: 'circle' }],
        options: [
          { id: 'salmon', label: 'さけ',   emoji: '🐟' },
          { id: 'ume',    label: 'うめ',   emoji: '🌸' },
          { id: 'okaka',  label: 'おかか', emoji: '🍙' },
          { id: 'tuna',   label: 'ツナ',   emoji: '🥫' },
        ],
        explanation: '「ゆうたくんは鮭のおにぎりを食べました」とあります。',
        category: '持ち物・もの',
      },
      {
        id: 'q3', type: 'marker',
        text: 'いけのちかくにいたとりはなんでしたか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、みどりでさんかくをおしてください', optionId: 'heron', color: 'green', shape: 'triangle' }],
        options: [
          { id: 'swan',    label: 'はくちょう', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/swan.svg' },
          { id: 'heron',   label: 'しろいサギ', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/heron.svg' },
          { id: 'duck',    label: 'かも',       imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/duck.svg' },
          { id: 'sparrow', label: 'すずめ',     imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/sparrow.svg' },
        ],
        explanation: '「あれは白いサギだよ」とお母さんが教えてくれました。',
        category: '行動・できごと',
      },
      {
        id: 'q4', type: 'marker',
        text: 'さくらちゃんがかってもらったのみものはなんでしたか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、きいろでまるをおしてください', optionId: 'strawberry', color: 'yellow', shape: 'circle' }],
        options: [
          { id: 'apple',      label: 'りんごジュース',   imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/juice-apple.svg' },
          { id: 'strawberry', label: 'いちごジュース',   imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/juice-strawberry.svg' },
          { id: 'orange',     label: 'オレンジジュース', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/juice-orange.svg' },
          { id: 'grape',      label: 'ぶどうジュース',   imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/juice-grape.svg' },
        ],
        explanation: '「さくらちゃんはいちごジュースを買ってもらいました」とあります。',
        category: '持ち物・もの',
      },
      {
        id: 'q5', type: 'marker',
        text: 'このおはなしのきせつはいつでしょうか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、あかでさんかくをおしてください', optionId: 'autumn', color: 'red', shape: 'triangle' }],
        options: [
          { id: 'spring', label: 'はる', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/spring.svg' },
          { id: 'summer', label: 'なつ', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/summer.svg' },
          { id: 'autumn', label: 'あき', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/autumn.svg' },
          { id: 'winter', label: 'ふゆ', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/winter.svg' },
        ],
        explanation: '「赤いカエデの葉っぱ」がヒントで、これは秋の風景です。',
        category: '季節',
      },
    ],
  },

  // ===== ⭐ やさしい（5問） =====
  {
    id: 'story-001', title: 'うさぎのおさんぽ', difficulty: 1,
    estimatedMinutes: 2, icon: '🐰',
    story: 'ある晴れた朝のことです。白いうさぎのミミちゃんは、黄色いぼうしをかぶって、大きなかごをもって、公園へおさんぽに出かけました。そこには赤いチューリップが五本、きれいにさいていました。ミミちゃんがベンチにこしをかけてやすんでいると、りすのりっちゃんがやってきました。りっちゃんは「ミミちゃん、これをどうぞ」といって、どんぐりを三つわたしてくれました。ミミちゃんは「ありがとう、とってもうれしいな」といって、にっこりわらいました。ふたりはしばらくいっしょに、はなをみてたのしみました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ミミちゃんがかぶっていたぼうしはどれですか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、あかでまるをおしてください', optionId: 'yellow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あかいぼうし',   imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/hat-red.svg' },
          { id: 'yellow', label: 'きいろいぼうし', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/hat-yellow.svg' },
          { id: 'blue',   label: 'あおいぼうし',   imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/hat-blue.svg' },
          { id: 'green',  label: 'みどりのぼうし', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/hat-green.svg' },
        ],
        explanation: '「黄色いぼうし」をかぶっていました。',
        category: '色の記憶',
      },
      {
        id: 'q2', type: 'marker',
        text: 'チューリップはなんぼんさいていましたか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、あおでさんかくをおしてください', optionId: '5', color: 'blue', shape: 'triangle' }],
        options: [
          { id: '3', label: '3ほん', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/tulip-3.svg' },
          { id: '4', label: '4ほん', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/tulip-4.svg' },
          { id: '5', label: '5ほん', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/tulip-5.svg' },
          { id: '6', label: '6ほん', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/tulip-6.svg' },
          { id: '7', label: '7ほん', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/tulip-7.svg' },
        ],
        explanation: '「赤いチューリップが五本」さいていました。',
        category: '数の記憶',
      },
      {
        id: 'q3', type: 'marker',
        text: 'りっちゃんはどんぐりをいくつくれましたか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、みどりでばつをおしてください', optionId: '3', color: 'green', shape: 'cross' }],
        options: [
          { id: '1', label: '1こ', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/acorn-1.svg' },
          { id: '2', label: '2こ', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/acorn-2.svg' },
          { id: '3', label: '3こ', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/acorn-3.svg' },
          { id: '4', label: '4こ', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/acorn-4.svg' },
          { id: '5', label: '5こ', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/acorn-5.svg' },
        ],
        explanation: '「どんぐりを三つ」わたしてくれました。',
        category: '数の記憶',
      },
    ],
  },

  // ===== ⭐⭐ ふつう（5問） =====
  {
    id: 'story-006', title: 'ハルのおかいもの', difficulty: 2,
    estimatedMinutes: 3, icon: '🛒',
    story: 'ハルはお母さんに「スーパーでりんごとぎゅうにゅうをかってきてね」とたのまれました。ハルはみどりのかごをもってでかけました。とちゅうで、もりのそばをとおると、りすがどんぐりをひろっているのがみえました。たぬきもちかくでてをふってくれました。スーパーにはいると、ハルはりんごをみっつかごにいれました。それからぎゅうにゅうをひとつとりました。レジにならんでいると、お姉さんがやってきました。「ハル、じょうずにおつかいしてるね」とほめてくれました。お姉さんはバナナをかごにいれていました。ハルは「いっしょにかえろう」といいました。おうちにかえると、お母さんが「ありがとう、えらかったね」とほめてくれました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ハルがもっていたかごはどれですか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、きいろでまるをおしてください', optionId: 'green', color: 'yellow', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あかいかご',   emoji: '🔴' },
          { id: 'blue',   label: 'あおいかご',   emoji: '🔵' },
          { id: 'green',  label: 'みどりのかご', emoji: '🟢' },
          { id: 'yellow', label: 'きいろいかご', emoji: '🟡' },
        ],
        explanation: '「みどりのかご」をもっていました。',
        category: '色の記憶',
      },
      {
        id: 'q2', type: 'marker',
        text: 'とちゅうでみかけたどうぶつはどれですか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、あかでさんかくをおしてください', optionId: 'b', color: 'red', shape: 'triangle' }],
        options: [
          { id: 'a', label: 'うさぎとたぬき', emoji: '🐰🦝' },
          { id: 'b', label: 'りすとたぬき',   emoji: '🐿️🦝' },
          { id: 'c', label: 'りすとうさぎ',   emoji: '🐿️🐰' },
          { id: 'd', label: 'くまとたぬき',   emoji: '🐻🦝' },
        ],
        explanation: 'もりのそばで「りす」と「たぬき」をみかけました。',
        category: '行動・できごと',
      },
      {
        id: 'q3', type: 'marker',
        text: 'ハルとお姉さんがかごにいれたものはそれぞれなんですか？',
        tasks: [
          { instruction: 'ハルがかごにいれたものをえらんで、あかでまるをおしてください', optionId: 'apple', color: 'red', shape: 'circle' },
          { instruction: 'お姉さんがかごにいれたものをえらんで、あおでさんかくをおしてください', optionId: 'banana', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'apple',  label: 'りんご',       imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/apple.svg' },
          { id: 'banana', label: 'バナナ',       imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/banana.svg' },
          { id: 'milk',   label: 'ぎゅうにゅう', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/milk.svg' },
          { id: 'orange', label: 'オレンジ',     imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/orange.svg' },
        ],
        explanation: 'ハルはりんごをかごにいれ、お姉さんはバナナをかごにいれていました。',
        category: '行動・できごと',
      },
    ],
  },

  // ===== ⭐⭐⭐ むずかしい（5問） =====
  {
    id: 'story-011', title: 'ソウのおまつり', difficulty: 3,
    estimatedMinutes: 5, icon: '🏮',
    story: 'なつのよるのことです。ソウはお父さんとお兄さんといっしょにちかくのおまつりへでかけました。ソウはあおいゆかたをきて、お兄さんはきいろいゆかたをきていました。お父さんはりょうてにあかいちょうちんをひとつずつもっていました。おまつりのかいじょうはとてもにぎやかで、たくさんのひとがいました。まずみんなでやきとりとたこやきをたべました。ソウはやきとりがだいすきで、さんぼんたべました。お兄さんはたこやきをよっこたべました。つぎに、わたあめのみせによりました。ソウはしろいわたあめ、お兄さんはももいろのわたあめをかいました。「あまくておいしい！」とソウはよろこびました。それからかわでながしびをみました。あかとしろのながしびがかわをながれていて、とてもきれいでした。「またくるね」とソウはいいながら、おうちへかえりました。お父さんは「たのしかったね」とわらいながらいいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ソウとお兄さんのゆかたはなにいろでしたか？',
        tasks: [
          { instruction: 'ソウのゆかたのいろをえらんで、あかでまるをおしてください', optionId: 'blue', color: 'red', shape: 'circle' },
          { instruction: 'お兄さんのゆかたのいろをえらんで、あおでさんかくをおしてください', optionId: 'yellow', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'blue',   label: 'あおいゆかた',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろいゆかた', emoji: '🟡' },
          { id: 'red',    label: 'あかいゆかた',   emoji: '🔴' },
          { id: 'green',  label: 'みどりのゆかた', emoji: '🟢' },
        ],
        explanation: 'ソウはあおいゆかた、お兄さんはきいろいゆかたをきていました。',
        category: '色の記憶',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ソウはやきとりをなんぼんたべましたか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、あかでにじゅうまるをおしてください', optionId: '3', color: 'red', shape: 'double-circle' }],
        options: [
          { id: '2', label: '2ほん', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/yakitori-2.svg' },
          { id: '3', label: '3ほん', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/yakitori-3.svg' },
          { id: '4', label: '4ほん', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/yakitori-4.svg' },
          { id: '5', label: '5ほん', imageUrl: 'https://mishima-arum.github.io/ohanashi-kioku-app/illust/yakitori-5.svg' },
        ],
        explanation: '「ソウはやきとりをさんぼんたべました」とあります。',
        category: '数の記憶',
      },
      {
        id: 'q3', type: 'marker',
        text: 'ソウとお兄さんがかったわたあめのいろはなんでしたか？',
        tasks: [
          { instruction: 'ソウがかったわたあめのいろをえらんで、あかでまるをおしてください', optionId: 'white', color: 'red', shape: 'circle' },
          { instruction: 'お兄さんがかったわたあめのいろをえらんで、あおでさんかくをおしてください', optionId: 'pink', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'white',  label: 'しろいわたあめ',   emoji: '⬜' },
          { id: 'pink',   label: 'ももいろのわたあめ', emoji: '🩷' },
          { id: 'yellow', label: 'きいろいわたあめ', emoji: '🟡' },
          { id: 'blue',   label: 'あおいわたあめ',   emoji: '🔵' },
        ],
        explanation: 'ソウはしろいわたあめ、お兄さんはももいろのわたあめをかいました。',
        category: '色の記憶',
      },
      {
        id: 'q4', type: 'marker',
        text: 'お父さんがもっていたちょうちんはなにいろでしたか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、みどりでまるをおしてください', optionId: 'red', color: 'green', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あかいちょうちん',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろいちょうちん', emoji: '🟡' },
          { id: 'blue',   label: 'あおいちょうちん',   emoji: '🔵' },
          { id: 'white',  label: 'しろいちょうちん',   emoji: '⬜' },
        ],
        explanation: '「お父さんはりょうてにあかいちょうちんをひとつずつもっていました」とあります。',
        category: '色の記憶',
      },
      {
        id: 'q5', type: 'marker',
        text: 'かわでみたながしびのいろはどれですか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、きいろでさんかくをおしてください', optionId: 'b', color: 'yellow', shape: 'triangle' }],
        options: [
          { id: 'a', label: 'あかとあお',   emoji: '🔴🔵' },
          { id: 'b', label: 'あかとしろ',   emoji: '🔴⬜' },
          { id: 'c', label: 'きいろとしろ', emoji: '🟡⬜' },
          { id: 'd', label: 'あおとみどり', emoji: '🔵🟢' },
        ],
        explanation: '「あかとしろのながしびがかわをながれていて」とあります。',
        category: '色の記憶',
      },
    ],
  },
  ...storiesNov,
  ...storiesDec,
  ...storiesJan,
  ...storiesFeb,
  ...storiesMar,
  ...storiesApr,
  ...storiesMay,
  ...storiesJun,
]
