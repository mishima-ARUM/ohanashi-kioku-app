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
          { id: 'park',     label: 'こうえん', imageUrl: 'https://freesvg.org/converts/6389/480' },
          { id: 'sea',      label: 'うみ',     imageUrl: 'https://freesvg.org/converts/43381/480' },
          { id: 'mountain', label: 'やま',     imageUrl: 'https://freesvg.org/converts/39008/480' },
          { id: 'station',  label: 'えき',     imageUrl: 'https://freesvg.org/converts/184427/480' },
        ],
        explanation: '「大きな公園へ行きました」とあります。',
        category: '場所',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ゆうたくんがたべたおにぎりのぐはなんでしたか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、あおでまるをおしてください', optionId: 'salmon', color: 'blue', shape: 'circle' }],
        options: [
          { id: 'salmon', label: 'さけ',   imageUrl: 'https://freesvg.org/converts/163512/480' },
          { id: 'ume',    label: 'うめ',   imageUrl: 'https://freesvg.org/converts/75600/480' },
          { id: 'okaka',  label: 'おかか', emoji: '🍙' },
          { id: 'tuna',   label: 'ツナ',   imageUrl: 'https://freesvg.org/converts/169185/480' },
        ],
        explanation: '「ゆうたくんは鮭のおにぎりを食べました」とあります。',
        category: '持ち物・もの',
      },
      {
        id: 'q3', type: 'marker',
        text: 'いけのちかくにいたとりはなんでしたか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、みどりでさんかくをおしてください', optionId: 'heron', color: 'green', shape: 'triangle' }],
        options: [
          { id: 'swan',    label: 'はくちょう', imageUrl: 'https://freesvg.org/converts/38684/480' },
          { id: 'heron',   label: 'しろいサギ', imageUrl: 'https://freesvg.org/converts/34068/480' },
          { id: 'duck',    label: 'かも',       imageUrl: 'https://freesvg.org/converts/48995/480' },
          { id: 'sparrow', label: 'すずめ',     imageUrl: 'https://freesvg.org/converts/180008/480' },
        ],
        explanation: '「あれは白いサギだよ」とお母さんが教えてくれました。',
        category: '行動・できごと',
      },
      {
        id: 'q4', type: 'marker',
        text: 'さくらちゃんがかってもらったのみものはなんでしたか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、きいろでまるをおしてください', optionId: 'strawberry', color: 'yellow', shape: 'circle' }],
        options: [
          { id: 'apple',      label: 'りんごジュース',   imageUrl: 'https://freesvg.org/converts/3535/480' },
          { id: 'strawberry', label: 'いちごジュース',   imageUrl: 'https://freesvg.org/converts/176140/480' },
          { id: 'orange',     label: 'オレンジジュース', imageUrl: 'https://freesvg.org/converts/3539/480' },
          { id: 'grape',      label: 'ぶどうジュース',   imageUrl: 'https://freesvg.org/converts/33285/480' },
        ],
        explanation: '「さくらちゃんはいちごジュースを買ってもらいました」とあります。',
        category: '持ち物・もの',
      },
      {
        id: 'q5', type: 'marker',
        text: 'このおはなしのきせつはいつでしょうか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、あかでさんかくをおしてください', optionId: 'autumn', color: 'red', shape: 'triangle' }],
        options: [
          { id: 'spring', label: 'はる', imageUrl: 'https://freesvg.org/converts/75600/480' },
          { id: 'summer', label: 'なつ', imageUrl: 'https://freesvg.org/converts/12173/480' },
          { id: 'autumn', label: 'あき', imageUrl: 'https://freesvg.org/converts/13769/480' },
          { id: 'winter', label: 'ふゆ', imageUrl: 'https://freesvg.org/converts/28325/480' },
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
          { id: 'red',    label: 'あかいぼうし',   imageUrl: 'https://freesvg.org/converts/11198/480' },
          { id: 'yellow', label: 'きいろいぼうし', imageUrl: 'https://freesvg.org/converts/159591/480' },
          { id: 'blue',   label: 'あおいぼうし',   imageUrl: 'https://freesvg.org/converts/57039/480' },
          { id: 'green',  label: 'みどりのぼうし', imageUrl: 'https://freesvg.org/converts/159582/480' },
        ],
        explanation: '「黄色いぼうし」をかぶっていました。',
        category: '色の記憶',
      },
      {
        id: 'q2', type: 'marker',
        text: 'チューリップはなんぼんさいていましたか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、あおでさんかくをおしてください', optionId: '5', color: 'blue', shape: 'triangle' }],
        options: [
          { id: '3', label: '3ほん', emoji: '3️⃣' },
          { id: '4', label: '4ほん', emoji: '4️⃣' },
          { id: '5', label: '5ほん', emoji: '5️⃣' },
          { id: '6', label: '6ほん', emoji: '6️⃣' },
          { id: '7', label: '7ほん', emoji: '7️⃣' },
        ],
        explanation: '「赤いチューリップが五本」さいていました。',
        category: '数の記憶',
      },
      {
        id: 'q3', type: 'marker',
        text: 'りっちゃんはどんぐりをいくつくれましたか？',
        tasks: [{ instruction: 'ただしいこたえをえらんで、みどりでばつをおしてください', optionId: '3', color: 'green', shape: 'cross' }],
        options: [
          { id: '1', label: '1こ', emoji: '1️⃣' },
          { id: '2', label: '2こ', emoji: '2️⃣' },
          { id: '3', label: '3こ', emoji: '3️⃣' },
          { id: '4', label: '4こ', emoji: '4️⃣' },
          { id: '5', label: '5こ', emoji: '5️⃣' },
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
          { id: 'apple',  label: 'りんご',       imageUrl: 'https://freesvg.org/converts/1548689580/480' },
          { id: 'banana', label: 'バナナ',       imageUrl: 'https://freesvg.org/converts/158955/480' },
          { id: 'milk',   label: 'ぎゅうにゅう', imageUrl: 'https://freesvg.org/converts/145717/480' },
          { id: 'orange', label: 'オレンジ',     imageUrl: 'https://freesvg.org/converts/47926/480' },
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
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
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
