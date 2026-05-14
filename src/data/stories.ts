import type { Story } from '../types'
import { storiesNov } from './stories-nov'
import { storiesDec } from './stories-dec'
import { storiesJan } from './stories-jan'
import { storiesFeb } from './stories-feb'
import { storiesMar } from './stories-mar'
import { storiesApr } from './stories-apr'
import { storiesMay } from './stories-may'
import { storiesJun } from './stories-jun'

const INS = 'ただしいこたえをえらんで、あかでまるをおしてください'

export const stories: Story[] = [
  // ===== ⭐ やさしい（5問） =====
  {
    id: 'story-001', title: 'うさぎのおさんぽ', difficulty: 1,
    estimatedMinutes: 2, icon: '🐰',
    story: 'ある晴れた朝のことです。白いうさぎのミミちゃんは、黄色いぼうしをかぶって、大きなかごをもって、公園へおさんぽに出かけました。そこには赤いチューリップが五本、きれいにさいていました。ミミちゃんがベンチにこしをかけてやすんでいると、りすのりっちゃんがやってきました。りっちゃんは「ミミちゃん、これをどうぞ」といって、どんぐりを三つわたしてくれました。ミミちゃんは「ありがとう、とってもうれしいな」といって、にっこりわらいました。ふたりはしばらくいっしょに、はなをみてたのしみました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ミミちゃんのぼうしはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'yellow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「黄色いぼうし」をかぶっていました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'チューリップはなんぼんさいていましたか？',
        tasks: [{ instruction: INS, optionId: '5', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
        ],
        explanation: '「赤いチューリップが五本」さいていました。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'りっちゃんはどんぐりをいくつくれましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「どんぐりを三つ」わたしてくれました。',
      },
    ],
  },
  {
    id: 'story-002', title: 'ねこのおかいもの', difficulty: 1,
    estimatedMinutes: 2, icon: '🐱',
    story: 'ねこのタマちゃんは、おかあさんに「スーパーへいって、にんじんとたまごをかってきてね」とたのまれました。タマちゃんは青いかごをもってでかけました。スーパーにつくと、にんじんを二本とたまごを六こかごにいれました。レジのまえで、いぬのコロくんにばったりあいました。あかいぼうしをかぶって、しっぽをふってよろこんでくれました。タマちゃんは「またあそぼうね」とあいさつして、おうちへかえりました。おかあさんは「ありがとう、じょうずにかえてきたね」とほめてくれました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'タマちゃんのかごはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'blue', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'pink',   label: 'ぴんく', emoji: '🩷' },
        ],
        explanation: '「青いかご」をもっていました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'たまごはなんこかいましたか？',
        tasks: [{ instruction: INS, optionId: '6', color: 'red', shape: 'circle' }],
        options: [
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
          { id: '8', label: '8', emoji: '8️⃣' },
        ],
        explanation: '「たまごを六こ」かごにいれました。',
      },
    ],
  },
  {
    id: 'story-003', title: 'くまのあさごはん', difficulty: 1,
    estimatedMinutes: 2, icon: '🐻',
    story: 'くまのクーちゃんは、まいあさ六じにおきます。きょうもげんきにおきると、まずかおをあらいました。それからおかあさんといっしょにあさごはんをつくりました。メニューはパンとスープとサラダです。クーちゃんはパンがだいすきで、パンをふたつたべました。たべおわると、「ごちそうさまでした」とげんきよくいいました。おかあさんは「えらいね、クーちゃん」とほめてくれました。クーちゃんはにこにこしながら、きょうも一日がんばろうとおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'クーちゃんはパンをいくつたべましたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「パンをふたつ」たべました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'あさごはんのメニューにないものはどれですか？',
        tasks: [{ instruction: INS, optionId: 'd', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'パン',   emoji: '🍞' },
          { id: 'b', label: 'スープ', emoji: '🍲' },
          { id: 'c', label: 'サラダ', emoji: '🥗' },
          { id: 'd', label: 'ごはん', emoji: '🍚' },
        ],
        explanation: 'メニューは「パンとスープとサラダ」でした。ごはんはありませんでした。',
      },
    ],
  },
  {
    id: 'story-004', title: 'いぬのおてつだい', difficulty: 1,
    estimatedMinutes: 2, icon: '🐶',
    story: 'いぬのシロくんは、土曜日のあさ、おかあさんのおてつだいをすることにしました。まず、おちゃわんをふたつあらいました。つぎに、みどりのぞうきんでテーブルをふきました。さいごに、げんかんのそうじをしました。三つのおてつだいをぜんぶおわると、おかあさんが「シロくん、ありがとう。じょうずにできたね」といって、シロくんのだいすきなりんごを四つくれました。シロくんはにこにこしながら、りんごをおいしくたべました。またおてつだいをしようとおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'シロくんがつかったぞうきんはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'white',  label: 'しろ',   emoji: '⬜' },
        ],
        explanation: '「みどりのぞうきん」でテーブルをふきました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'おかあさんはりんごをいくつくれましたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「りんごを四つ」くれました。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'シロくんがさいごにしたことはどれですか？',
        tasks: [{ instruction: INS, optionId: 'c', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'おちゃわんあらい', emoji: '🍽️' },
          { id: 'b', label: 'テーブルふき',     emoji: '🧽' },
          { id: 'c', label: 'げんかんそうじ',   emoji: '🧹' },
          { id: 'd', label: 'りょうり',         emoji: '🍳' },
        ],
        explanation: '「さいごに、げんかんのそうじをしました」とあります。',
      },
    ],
  },
  {
    id: 'story-005', title: 'たぬきのはなや', difficulty: 1,
    estimatedMinutes: 2, icon: '🦝',
    story: 'たぬきのポンちゃんは、おにわにさいているお花でおはなやさんごっこをすることにしました。あかいバラを三本、しろいひまわりを二本、むらさきのすみれを五本あつめました。きれいにならべると、ねこのミケちゃんとくまのグーちゃんがやってきました。ミケちゃんは「あかいバラをください」といいました。グーちゃんは「むらさきのすみれをふたつください」とたのみました。ポンちゃんはにこにこしながら、それぞれのお花をわたしました。ふたりはありがとうといって、うれしそうにかえっていきました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'むらさきのすみれはなんぼんありましたか？',
        tasks: [{ instruction: INS, optionId: '5', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「むらさきのすみれを五本」あつめました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'あかいバラをかったのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'mike', color: 'red', shape: 'circle' }],
        options: [
          { id: 'pon',  label: 'ポンちゃん', emoji: '🦝' },
          { id: 'mike', label: 'ミケちゃん', emoji: '🐱' },
          { id: 'goo',  label: 'グーちゃん', emoji: '🐻' },
        ],
        explanation: '「ミケちゃんは「あかいバラをください」といいました」とあります。',
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
        text: 'ハルのかごはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
        ],
        explanation: '「みどりのかご」をもっていました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'とちゅうでみかけたどうぶつはどれですか？',
        tasks: [{ instruction: INS, optionId: 'b', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'うさぎとたぬき', emoji: '🐰🦝' },
          { id: 'b', label: 'りすとたぬき',   emoji: '🐿️🦝' },
          { id: 'c', label: 'りすとうさぎ',   emoji: '🐿️🐰' },
          { id: 'd', label: 'くまとたぬき',   emoji: '🐻🦝' },
        ],
        explanation: 'もりのそばで「りす」と「たぬき」をみかけました。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'ハルとお姉さんがかごにいれたものはそれぞれなんですか？',
        tasks: [
          { instruction: 'ハルがかごにいれたものをえらんで、あかでまるをおしてください', optionId: 'apple', color: 'red', shape: 'circle' },
          { instruction: 'お姉さんがかごにいれたものをえらんで、あおでさんかくをおしてください', optionId: 'banana', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'apple',  label: 'りんご',   emoji: '🍎' },
          { id: 'banana', label: 'バナナ',   emoji: '🍌' },
          { id: 'milk',   label: 'ぎゅうにゅう', emoji: '🥛' },
          { id: 'orange', label: 'オレンジ', emoji: '🍊' },
        ],
        explanation: 'ハルはりんごをかごにいれ、お姉さんはバナナをかごにいれていました。',
      },
    ],
  },
  {
    id: 'story-007', title: 'ユウのたいいくたいかい', difficulty: 2,
    estimatedMinutes: 3, icon: '🏅',
    story: 'きょうはユウのたいいくたいかいです。あさからよいてんきで、ユウはわくわくしていました。お父さんとお母さんがおうえんにきてくれました。お母さんはあかいぼうし、お父さんはあおいぼうしをかぶっていました。ユウはともだちのケンといっしょにかけっこにでました。「よーい、どん！」のあいずでふたりはいっしょうけんめいはしりました。ゴールのちかくでユウがさきにとびこんで、いちばんになりました。ケンはにばんでした。たいかいがおわると、ユウはきいろいメダルをもらいました。ケンはみどりのメダルをもらいました。「よくがんばったね」とお父さんがほめてくれました。ユウはとてもうれしかったです。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'お母さんのぼうしはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'red', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「お母さんはあかいぼうし」をかぶっていました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'かけっこでいちばんになったのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'yuu', color: 'red', shape: 'circle' }],
        options: [
          { id: 'yuu', label: 'ユウ', emoji: '👦' },
          { id: 'ken', label: 'ケン', emoji: '👦' },
          { id: 'dad', label: 'お父さん', emoji: '👨' },
        ],
        explanation: '「ユウがさきにとびこんで、いちばんになりました」とあります。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'ユウとケンがもらったメダルのいろはなんいろでしたか？',
        tasks: [
          { instruction: 'ユウがもらったメダルのいろをえらんで、あかでまるをおしてください', optionId: 'yellow', color: 'red', shape: 'circle' },
          { instruction: 'ケンがもらったメダルのいろをえらんで、あおでさんかくをおしてください', optionId: 'green', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
        ],
        explanation: 'ユウはきいろいメダル、ケンはみどりのメダルをもらいました。',
      },
      {
        id: 'q4', type: 'marker',
        text: 'おうえんにきたのはだれとだれですか？',
        tasks: [{ instruction: INS, optionId: 'c', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'お父さんとお兄さん', emoji: '👨👦' },
          { id: 'b', label: 'お母さんとお姉さん', emoji: '👩👧' },
          { id: 'c', label: 'お父さんとお母さん', emoji: '👨👩' },
          { id: 'd', label: 'ケンとお父さん',     emoji: '👦👨' },
        ],
        explanation: '「お父さんとお母さんがおうえんにきてくれました」とあります。',
      },
    ],
  },
  {
    id: 'story-008', title: 'ナナのたんじょうび', difficulty: 2,
    estimatedMinutes: 3, icon: '🎂',
    story: 'きょうはナナのたんじょうびです。ナナはあかいワンピースをきて、ともだちをまっていました。さいしょにサラがやってきました。サラはきいろいふくろにはいったえほんをプレゼントしてくれました。つぎにリクがきました。リクはみどりのはこにはいったパズルをもってきました。「ナナ、たんじょうびおめでとう！」とふたりはいいました。ナナはとてもうれしくなりました。みんなでケーキをたべました。ケーキにはろうそくがごほんたっていました。ナナがふうっとふくと、ろうそくがぜんぶきえました。「やったあ！」とみんなはよろこびました。おかあさんが「みんなよくきてくれたね」といいながら、ジュースをだしてくれました。たのしいたんじょうびになりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ナナのワンピースはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'red', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'pink',   label: 'ぴんく', emoji: '🩷' },
        ],
        explanation: '「あかいワンピース」をきていました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ケーキにたっていたろうそくはなんぼんでしたか？',
        tasks: [{ instruction: INS, optionId: '5', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「ろうそくがごほん」たっていました。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'サラとリクがもってきたプレゼントはなんですか？',
        tasks: [
          { instruction: 'サラがもってきたプレゼントをえらんで、あかでまるをおしてください', optionId: 'book', color: 'red', shape: 'circle' },
          { instruction: 'リクがもってきたプレゼントをえらんで、あおでさんかくをおしてください', optionId: 'puzzle', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'book',   label: 'えほん',  emoji: '📖' },
          { id: 'puzzle', label: 'パズル',  emoji: '🧩' },
          { id: 'cake',   label: 'ケーキ',  emoji: '🎂' },
          { id: 'ball',   label: 'ボール',  emoji: '⚽' },
        ],
        explanation: 'サラはえほん、リクはパズルをプレゼントしました。',
      },
    ],
  },
  {
    id: 'story-009', title: 'ケンのえんそく', difficulty: 2,
    estimatedMinutes: 3, icon: '🌿',
    story: 'ようちえんのえんそくの日です。ケンはともだちのサキといっしょにバスにのって、もりへでかけました。もりはとてもきもちよくて、みどりのはがかがやいていました。しばらくあるくと、りすがきのえだにいるのをみつけました。「かわいいね」とサキがいいました。つぎに、みちのそばでうさぎがとびはねているのをみました。ケンはうれしくてとびはねてまねをしました。おひるになると、ふたりはひろっぱにすわっておべんとうをひらきました。ケンのおべんとうにはからあげがはいっていました。サキのおべんとうにはたまごやきがはいっていました。「おいしいね」といいながら、ふたりはなかよくたべました。かえりのバスのなかで、ケンは「またえんそくにきたいな」とおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'えんそくでさいしょにみたどうぶつはどれですか？',
        tasks: [{ instruction: INS, optionId: 'squirrel', color: 'red', shape: 'circle' }],
        options: [
          { id: 'squirrel', label: 'りす',   emoji: '🐿️' },
          { id: 'rabbit',   label: 'うさぎ', emoji: '🐰' },
          { id: 'bear',     label: 'くま',   emoji: '🐻' },
          { id: 'raccoon',  label: 'たぬき', emoji: '🦝' },
        ],
        explanation: '「りすがきのえだにいるのをみつけました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ケンとサキがたべたおべんとうのおかずはそれぞれなんですか？',
        tasks: [
          { instruction: 'ケンのおべんとうのおかずをえらんで、あかでまるをおしてください', optionId: 'karaage', color: 'red', shape: 'circle' },
          { instruction: 'サキのおべんとうのおかずをえらんで、あおでさんかくをおしてください', optionId: 'tamagoyaki', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'karaage',    label: 'からあげ',   emoji: '🍗' },
          { id: 'tamagoyaki', label: 'たまごやき', emoji: '🍳' },
          { id: 'onigiri',    label: 'おにぎり',   emoji: '🍙' },
          { id: 'sausage',    label: 'ソーセージ', emoji: '🌭' },
        ],
        explanation: 'ケンのおべんとうにはからあげ、サキのおべんとうにはたまごやきがはいっていました。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'えんそくで二ひきめにみたどうぶつはどれですか？',
        tasks: [{ instruction: INS, optionId: 'rabbit', color: 'red', shape: 'circle' }],
        options: [
          { id: 'squirrel', label: 'りす',   emoji: '🐿️' },
          { id: 'rabbit',   label: 'うさぎ', emoji: '🐰' },
          { id: 'bear',     label: 'くま',   emoji: '🐻' },
          { id: 'raccoon',  label: 'たぬき', emoji: '🦝' },
        ],
        explanation: 'つぎに「うさぎがとびはねているのをみました」とあります。',
      },
    ],
  },
  {
    id: 'story-010', title: 'アオイとおばあちゃん', difficulty: 2,
    estimatedMinutes: 3, icon: '🏡',
    story: 'アオイはおばあちゃんのいえにあそびにいきました。おばあちゃんのいえはおおきなにわがあって、はながたくさんさいていました。にわをさんぽしていると、りすがきのうえからおりてきました。「かわいい！」とアオイはよろこびました。りすはしばらくそこにいてから、またきのうえへのぼっていきました。おひるになると、おばあちゃんが「いっしょにりょうりをしようか」といいました。アオイはおばあちゃんといっしょにカレーをつくりました。アオイはやさいをきるてつだいをしました。おばあちゃんはカレーのルーをいれました。できあがったカレーはとてもおいしかったです。「アオイがてつだってくれたから、もっとおいしくなったよ」とおばあちゃんはいいました。アオイはにっこりしながら、またきたいとおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'にわでみたどうぶつはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'squirrel', color: 'red', shape: 'circle' }],
        options: [
          { id: 'squirrel', label: 'りす',   emoji: '🐿️' },
          { id: 'rabbit',   label: 'うさぎ', emoji: '🐰' },
          { id: 'raccoon',  label: 'たぬき', emoji: '🦝' },
          { id: 'bird',     label: 'とり',   emoji: '🐦' },
        ],
        explanation: '「りすがきのうえからおりてきました」とあります。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'アオイとおばあちゃんがつくったりょうりはなんですか？',
        tasks: [
          { instruction: 'アオイとおばあちゃんがつくったりょうりをえらんで、あかでまるをおしてください', optionId: 'curry', color: 'red', shape: 'circle' },
          { instruction: 'アオイがしたてつだいをえらんで、あおでさんかくをおしてください', optionId: 'cut', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'curry',  label: 'カレー',     emoji: '🍛' },
          { id: 'cut',    label: 'やさいをきる', emoji: '🔪' },
          { id: 'soup',   label: 'スープ',     emoji: '🍲' },
          { id: 'wash',   label: 'さらをあらう', emoji: '🍽️' },
        ],
        explanation: 'アオイとおばあちゃんはカレーをつくりました。アオイはやさいをきるてつだいをしました。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'りすはさいごにどこへいきましたか？',
        tasks: [{ instruction: INS, optionId: 'tree', color: 'red', shape: 'circle' }],
        options: [
          { id: 'tree',   label: 'きのうえ',   emoji: '🌲' },
          { id: 'house',  label: 'いえのなか', emoji: '🏠' },
          { id: 'garden', label: 'はなばたけ', emoji: '🌸' },
          { id: 'road',   label: 'みち',       emoji: '🛤️' },
        ],
        explanation: '「またきのうえへのぼっていきました」とあります。',
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
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: 'ソウはあおいゆかた、お兄さんはきいろいゆかたをきていました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ソウはやきとりをなんぼんたべましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「ソウはやきとりをさんぼんたべました」とあります。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'ソウとお兄さんがかったわたあめのいろはなんでしたか？',
        tasks: [
          { instruction: 'ソウがかったわたあめのいろをえらんで、あかでまるをおしてください', optionId: 'white', color: 'red', shape: 'circle' },
          { instruction: 'お兄さんがかったわたあめのいろをえらんで、あおでさんかくをおしてください', optionId: 'pink', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'white',  label: 'しろ',   emoji: '⬜' },
          { id: 'pink',   label: 'ももいろ', emoji: '🩷' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
        ],
        explanation: 'ソウはしろいわたあめ、お兄さんはももいろのわたあめをかいました。',
      },
      {
        id: 'q4', type: 'marker',
        text: 'お父さんがもっていたちょうちんはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'red', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'white',  label: 'しろ',   emoji: '⬜' },
        ],
        explanation: '「お父さんはりょうてにあかいちょうちんをひとつずつもっていました」とあります。',
      },
      {
        id: 'q5', type: 'marker',
        text: 'かわでみたながしびのいろはどれですか？',
        tasks: [{ instruction: INS, optionId: 'b', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'あかとあお',   emoji: '🔴🔵' },
          { id: 'b', label: 'あかとしろ',   emoji: '🔴⬜' },
          { id: 'c', label: 'きいろとしろ', emoji: '🟡⬜' },
          { id: 'd', label: 'あおとみどり', emoji: '🔵🟢' },
        ],
        explanation: '「あかとしろのながしびがかわをながれていて」とあります。',
      },
    ],
  },
  {
    id: 'story-012', title: 'サラのずこう', difficulty: 3,
    estimatedMinutes: 5, icon: '🎨',
    story: 'きょうはずこうのじゅぎょうです。サラはともだちのナナとリクといっしょにえをかきました。せんせいが「すきなどうぶつをかいてください」といいました。サラはうさぎをかくことにして、ぴんくのくれよんをつかいました。ナナはたぬきをかいて、ちゃいろのくれよんをつかいました。リクはくまをかいて、みどりのくれよんをつかいました。えがかきおわると、つぎはてをつかったかたちづくりです。サラはねんどでおはなのかたちをつくりました。ナナはほしのかたちをつくりました。「じょうずにできたね」とせんせいがほめてくれました。リクはハートのかたちをつくっていましたが、かたちがくずれてしまいました。「もういちどやってみよう」とリクはがんばりました。じゅぎょうのおわりに、サラとナナとリクはかいたえをかべにはりました。みんながみてくれて、とてもうれしかったです。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'サラとナナがかいたどうぶつはなんでしたか？',
        tasks: [
          { instruction: 'サラがかいたどうぶつをえらんで、あかでまるをおしてください', optionId: 'rabbit', color: 'red', shape: 'circle' },
          { instruction: 'ナナがかいたどうぶつをえらんで、あおでさんかくをおしてください', optionId: 'raccoon', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'rabbit',  label: 'うさぎ', emoji: '🐰' },
          { id: 'raccoon', label: 'たぬき', emoji: '🦝' },
          { id: 'bear',    label: 'くま',   emoji: '🐻' },
          { id: 'fox',     label: 'きつね', emoji: '🦊' },
        ],
        explanation: 'サラはうさぎ、ナナはたぬきをかきました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'リクがつかったくれよんはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'pink',  label: 'ぴんく',   emoji: '🩷' },
          { id: 'brown', label: 'ちゃいろ', emoji: '🟤' },
          { id: 'green', label: 'みどり',   emoji: '🟢' },
          { id: 'blue',  label: 'あお',     emoji: '🔵' },
        ],
        explanation: '「リクはくまをかいて、みどりのくれよんをつかいました」とあります。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'サラとナナがねんどでつくったかたちはなんでしたか？',
        tasks: [
          { instruction: 'サラがつくったかたちをえらんで、あかでまるをおしてください', optionId: 'flower', color: 'red', shape: 'circle' },
          { instruction: 'ナナがつくったかたちをえらんで、あおでさんかくをおしてください', optionId: 'star', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'flower', label: 'おはな',   emoji: '🌸' },
          { id: 'star',   label: 'ほし',     emoji: '⭐' },
          { id: 'heart',  label: 'ハート',   emoji: '❤️' },
          { id: 'circle', label: 'まる',     emoji: '⭕' },
        ],
        explanation: 'サラはおはな、ナナはほしのかたちをつくりました。',
      },
      {
        id: 'q4', type: 'marker',
        text: 'リクがつくろうとしたかたちはなんでしたか？',
        tasks: [{ instruction: INS, optionId: 'heart', color: 'red', shape: 'circle' }],
        options: [
          { id: 'flower', label: 'おはな',   emoji: '🌸' },
          { id: 'star',   label: 'ほし',     emoji: '⭐' },
          { id: 'heart',  label: 'ハート',   emoji: '❤️' },
          { id: 'circle', label: 'まる',     emoji: '⭕' },
        ],
        explanation: '「リクはハートのかたちをつくっていましたが」とあります。',
      },
      {
        id: 'q5', type: 'marker',
        text: 'じゅぎょうのおわりにみんなはえをどうしましたか？',
        tasks: [{ instruction: INS, optionId: 'c', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'いえにもちかえった', emoji: '🏠' },
          { id: 'b', label: 'せんせいにわたした', emoji: '👩‍🏫' },
          { id: 'c', label: 'かべにはった',       emoji: '🖼️' },
          { id: 'd', label: 'すてた',             emoji: '🗑️' },
        ],
        explanation: '「かいたえをかべにはりました」とあります。',
      },
    ],
  },
  {
    id: 'story-013', title: 'リクとおじいちゃんのつり', difficulty: 3,
    estimatedMinutes: 5, icon: '🎣',
    story: 'どようびのあさ、リクはおじいちゃんといっしょにかわへつりにでかけました。リクはあかいぼうし、おじいちゃんはみどりのぼうしをかぶっていました。かわはとてもきれいで、みずがひかってみえました。おじいちゃんが「つりざおをこうやってもつんだよ」とおしえてくれました。リクはおしえてもらったとおりにつりをはじめました。しばらくすると、リクのつりざおがぐいっとひっぱられました。「かかった！」とリクはさけびました。ひきあげてみると、おおきなさかなでした。「すごいね、いちばんおおきいよ」とおじいちゃんがほめました。おじいちゃんもさかなをみっぴきつりました。リクはにひきつりました。ふたりあわせてごひきになりました。おひるにはおじいちゃんがおにぎりをよっこもってきていました。リクはふたつたべました。「おじいちゃん、またつりにきたい」とリクはいいました。おじいちゃんは「いつでもおいで」とわらいながらこたえました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'リクとおじいちゃんのぼうしのいろはなにいろでしたか？',
        tasks: [
          { instruction: 'リクのぼうしのいろをえらんで、あかでまるをおしてください', optionId: 'red', color: 'red', shape: 'circle' },
          { instruction: 'おじいちゃんのぼうしのいろをえらんで、あおでさんかくをおしてください', optionId: 'green', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
        ],
        explanation: 'リクはあかいぼうし、おじいちゃんはみどりのぼうしをかぶっていました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'リクとおじいちゃんがつったさかなはあわせてなんびきでしたか？',
        tasks: [{ instruction: INS, optionId: '5', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: 'おじいちゃんがみっぴき、リクがにひきで「ごひき」でした。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'おじいちゃんがもってきたおにぎりはなんこで、リクはなんこたべましたか？',
        tasks: [
          { instruction: 'おじいちゃんがもってきたおにぎりのかずをえらんで、あかでまるをおしてください', optionId: '4', color: 'red', shape: 'circle' },
          { instruction: 'リクがたべたおにぎりのかずをえらんで、あおでさんかくをおしてください', optionId: '2', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: 'おじいちゃんはよっこもってきて、リクはふたつたべました。',
      },
      {
        id: 'q4', type: 'marker',
        text: 'リクがつったさかなはなんびきでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「リクはにひきつりました」とあります。',
      },
      {
        id: 'q5', type: 'marker',
        text: 'おじいちゃんはリクになにをおしえてくれましたか？',
        tasks: [{ instruction: INS, optionId: 'a', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'つりざおのもちかた',   emoji: '🎣' },
          { id: 'b', label: 'さかなのつかまえかた', emoji: '🐟' },
          { id: 'c', label: 'おにぎりのつくりかた', emoji: '🍙' },
          { id: 'd', label: 'かわのわたりかた',     emoji: '🌊' },
        ],
        explanation: '「つりざおをこうやってもつんだよ」とおしえてくれました。',
      },
    ],
  },
  {
    id: 'story-014', title: 'ハルのがっこうさい', difficulty: 3,
    estimatedMinutes: 5, icon: '🏫',
    story: 'がっこうさいのひがちかづきました。ハルはともだちのユウとナナといっしょにだしものをじゅんびしました。みんなはたこやきやさんをひらくことにきめました。ハルはあおいエプロンをつけ、ユウはきいろいエプロンをつけました。ナナはみどりのエプロンをつけました。みんなでれんしゅうをしました。ハルはたこやきをまるくやくやくわりをしました。ユウはこむぎこをといてきじをつくりました。ナナはとっぴんぐをのせるやくをしました。がっこうさいのひ、たこやきやさんはとてもにぎわいました。さいしょのおきゃくさんはこ年せいのおとこのこでした。「おいしい！」といってよろこんでくれました。つぎのおきゃくさんはせんせいでした。「じょうずにできたね」とほめてくれました。ハルたちはとてもうれしくなりました。いちにちでたこやきをぜんぶでごじゅうこうりました。「またみんなでやりたい」とハルはおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ハルとユウのエプロンのいろはなにいろでしたか？',
        tasks: [
          { instruction: 'ハルのエプロンのいろをえらんで、あかでまるをおしてください', optionId: 'blue', color: 'red', shape: 'circle' },
          { instruction: 'ユウのエプロンのいろをえらんで、あおでさんかくをおしてください', optionId: 'yellow', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'red',    label: 'あか',   emoji: '🔴' },
        ],
        explanation: 'ハルはあおいエプロン、ユウはきいろいエプロンをつけました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ハルとユウとナナのやくわりはなんでしたか？',
        tasks: [
          { instruction: 'ハルのやくわりをえらんで、あかでまるをおしてください', optionId: 'bake', color: 'red', shape: 'circle' },
          { instruction: 'ユウのやくわりをえらんで、あおでさんかくをおしてください', optionId: 'dough', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'bake',    label: 'たこやきをやく', emoji: '🍡' },
          { id: 'dough',   label: 'きじをつくる',   emoji: '🥣' },
          { id: 'topping', label: 'とっぴんぐをのせる', emoji: '🥄' },
          { id: 'sell',    label: 'うりこみ',       emoji: '📣' },
        ],
        explanation: 'ハルはたこやきをやくやくわり、ユウはきじをつくるやくわりでした。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'さいしょのおきゃくさんはだれでしたか？',
        tasks: [{ instruction: INS, optionId: 'b', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'せんせい',         emoji: '👩‍🏫' },
          { id: 'b', label: 'こ年せいのおとこのこ', emoji: '👦' },
          { id: 'c', label: 'おかあさん',       emoji: '👩' },
          { id: 'd', label: 'おじいちゃん',     emoji: '👴' },
        ],
        explanation: '「さいしょのおきゃくさんはこ年せいのおとこのこでした」とあります。',
      },
      {
        id: 'q4', type: 'marker',
        text: 'ナナのエプロンはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'red',    label: 'あか',   emoji: '🔴' },
        ],
        explanation: '「ナナはみどりのエプロンをつけました」とあります。',
      },
      {
        id: 'q5', type: 'marker',
        text: 'いちにちでうったたこやきはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '50', color: 'red', shape: 'circle' }],
        options: [
          { id: '30', label: '30', emoji: '3️⃣0️⃣' },
          { id: '40', label: '40', emoji: '4️⃣0️⃣' },
          { id: '50', label: '50', emoji: '5️⃣0️⃣' },
          { id: '60', label: '60', emoji: '6️⃣0️⃣' },
        ],
        explanation: '「たこやきをぜんぶでごじゅうこうりました」とあります。',
      },
    ],
  },
  {
    id: 'story-015', title: 'アオイのりょうり', difficulty: 3,
    estimatedMinutes: 5, icon: '🍳',
    story: 'どようびのあさ、アオイはお母さんとお姉さんといっしょにりょうりをすることにしました。きょうのメニューはスープとサラダとオムレツです。アオイはきいろいエプロン、お母さんはしろいエプロン、お姉さんはあかいエプロンをつけました。まずスープをつくりはじめました。お母さんがおなべにみずをいれて、アオイはじゃがいもをみっこいれました。お姉さんはにんじんをふたきれきりました。「いいにおいがしてきたね」とアオイはよろこびました。つぎにサラダをつくりました。お姉さんがレタスをちぎって、アオイはトマトをよっこのせました。お母さんがドレッシングをかけてできあがりです。さいごにオムレツはお母さんがひとりでつくりました。「たまごをじょうずにまくのがむずかしいのよ」といいながら、ふわふわのオムレツができました。みんなでたべると、スープもサラダもオムレツもとてもおいしかったです。「アオイ、りょうりがじょうずになったね」とお姉さんがほめてくれました。アオイはにっこりして「またつくりたい」とおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'アオイとお姉さんのエプロンのいろはなにいろでしたか？',
        tasks: [
          { instruction: 'アオイのエプロンのいろをえらんで、あかでまるをおしてください', optionId: 'yellow', color: 'red', shape: 'circle' },
          { instruction: 'お姉さんのエプロンのいろをえらんで、あおでさんかくをおしてください', optionId: 'red', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'white',  label: 'しろ',   emoji: '⬜' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
        ],
        explanation: 'アオイはきいろいエプロン、お姉さんはあかいエプロンをつけました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'スープにいれたじゃがいもはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「アオイはじゃがいもをみっこいれました」とあります。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'アオイとお姉さんがサラダでしたことはなんでしたか？',
        tasks: [
          { instruction: 'アオイがしたことをえらんで、あかでまるをおしてください', optionId: 'tomato', color: 'red', shape: 'circle' },
          { instruction: 'お姉さんがしたことをえらんで、あおでさんかくをおしてください', optionId: 'lettuce', color: 'blue', shape: 'triangle' },
        ],
        options: [
          { id: 'tomato',   label: 'トマトをのせる', emoji: '🍅' },
          { id: 'lettuce',  label: 'レタスをちぎる', emoji: '🥗' },
          { id: 'dressing', label: 'ドレッシングをかける', emoji: '🫙' },
          { id: 'carrot',   label: 'にんじんをきる', emoji: '🥕' },
        ],
        explanation: 'アオイはトマトをのせ、お姉さんはレタスをちぎりました。',
      },
      {
        id: 'q4', type: 'marker',
        text: 'サラダのドレッシングをかけたのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'mom', color: 'red', shape: 'circle' }],
        options: [
          { id: 'aoi',    label: 'アオイ',   emoji: '👧' },
          { id: 'mom',    label: 'お母さん', emoji: '👩' },
          { id: 'sister', label: 'お姉さん', emoji: '👧' },
        ],
        explanation: '「お母さんがドレッシングをかけてできあがりです」とあります。',
      },
      {
        id: 'q5', type: 'marker',
        text: 'オムレツはだれがつくりましたか？',
        tasks: [{ instruction: INS, optionId: 'mom', color: 'red', shape: 'circle' }],
        options: [
          { id: 'aoi',    label: 'アオイ',   emoji: '👧' },
          { id: 'mom',    label: 'お母さん', emoji: '👩' },
          { id: 'sister', label: 'お姉さん', emoji: '👧' },
          { id: 'all',    label: 'みんなで', emoji: '👨‍👩‍👧' },
        ],
        explanation: '「オムレツはお母さんがひとりでつくりました」とあります。',
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
