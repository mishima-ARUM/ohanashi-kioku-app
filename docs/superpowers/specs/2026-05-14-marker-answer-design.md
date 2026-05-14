# マーカー回答UI 設計書

## 概要

小学校受験「お話の記憶」アプリの回答UIを、実際の受験形式（クーピーで色・形をマークする）に合わせてリニューアルする。現在の4種類の回答タイプ（illustration / number / color / character）を廃止し、「回答選択 → 色選択 → 形選択」の3ステップ統一UIに置き換える。

---

## ゴール

- 実際の受験形式（赤いクーピーで○をつける等）をデジタルで再現する
- 複数の正解組み合わせ（例：うさぎ→赤○、おさる→青△）に対応する
- 採点は組み合わせ単位で部分点あり

---

## データモデル

### 新しい型定義（`src/types/index.ts`）

```typescript
// 色と形の選択肢
export type MarkColor = 'red' | 'blue' | 'green' | 'yellow'
export type MarkShape = 'circle' | 'triangle' | 'cross' | 'double-circle'

// 1つの正解組み合わせ（task）
export interface MarkerTask {
  instruction: string  // TTS読み上げ用の指示文
                       // 例: "回答②に、赤で、まるを押してください"
                       // 複数task目: "おさるさんのこたえを選んで、青で、さんかくを押してください"
  optionId: string     // 正解の選択肢ID
  color: MarkColor     // 正解の色
  shape: MarkShape     // 正解の形
}

// 子どもが選んだ1組み合わせ
export interface MarkerSelection {
  optionId: string
  color: MarkColor
  shape: MarkShape
}
```

### 変更後の `Question`

```typescript
export interface Question {
  id: string
  type: 'marker'         // 全問題がこの1タイプに統一
  text: string           // 問題文本体（色・形の指示は含まない）
  tasks: MarkerTask[]    // 1〜N個の正解組み合わせ
  options: Option[]      // 選択肢（correct boolean を削除）
  explanation: string
}

export interface Option {
  id: string
  label: string
  emoji?: string
  // ※ correct: boolean を削除（正解はMarkerTaskで管理）
}
```

### 変更後の `Answer` / `QuizResult`

```typescript
export interface Answer {
  questionId: string
  selections: MarkerSelection[]  // 子どもが確定した全組み合わせ
  taskResults: boolean[]         // tasks[i] が正解かどうか（順序対応）
  score: number                  // 正解したtask数
  maxScore: number               // この問題のtask総数
}

export interface QuizResult {
  storyId: string
  date: string
  score: number   // 全問題の正解task数の合計
  total: number   // 全問題のtask総数の合計
  answers: Answer[]
}
```

---

## 採点ロジック

各 `MarkerTask` に対して、子どもの `selections` の中に `{ optionId, color, shape }` が**完全一致**するものが1つでもあれば正解。

```typescript
function scoreAnswer(tasks: MarkerTask[], selections: MarkerSelection[]): boolean[] {
  return tasks.map(task =>
    selections.some(s =>
      s.optionId === task.optionId &&
      s.color === task.color &&
      s.shape === task.shape
    )
  )
}
```

---

## TTS読み上げ文フォーマット

### QuizPageでの生成ルール

```
問題{n}。{question.text}。{task1.instruction}。{task2.instruction}。…。回答を選択してください。はじめ
```

**例（1task）：**
```
問題2。チューリップはなんぼんさいていましたか。
回答②に、赤で、まるを押してください。
回答を選択してください。はじめ
```

**例（2tasks）：**
```
問題3。うさぎさんとおさるさんがたべたものはなんですか。
うさぎさんのこたえを選んで、赤で、まるを押してください。
おさるさんのこたえを選んで、青で、さんかくを押してください。
回答を選択してください。はじめ
```

---

## UIコンポーネント

### `MarkerAnswerPanel` （新規）

**場所：** `src/components/answers/MarkerAnswerPanel.tsx`

**Props：**
```typescript
interface Props {
  options: Option[]
  disabled: boolean
  onSelect: (selections: MarkerSelection[]) => void  // 確定ボタン押下時
}
```

**内部状態：**
```typescript
// 選択中（まだ確定していない）
pending: { optionId: string | null, color: MarkColor | null, shape: MarkShape | null }
// 確定済み組み合わせ
confirmed: MarkerSelection[]
```

**UXルール：**
- ①②③の3つがすべて選ばれると**自動で** `confirmed` に追加（ボタン不要）
- 追加後は ①②③ の選択状態がリセット
- 「消す」ボタンで個別削除
- 「この回答で決定する」ボタンで `onSelect(confirmed)` を呼ぶ
- `disabled=true` のとき全ボタン無効（timeout / reading フェーズ）

**レイアウト（上から順）：**
1. ① こたえをえらぶ — グリッド形式の選択肢（emoji + label）
2. ② いろをえらぶ — 赤・青・緑・黄の丸ボタン
3. ③ かたちをえらぶ — ○・△・✕・◎ のボタン
4. えらんだこたえ — pending表示（dashed枠）＋ confirmed一覧＋決定ボタン

---

### 削除するコンポーネント

- `src/components/answers/IllustrationAnswer.tsx`
- `src/components/answers/NumberAnswer.tsx`
- `src/components/answers/ColorAnswer.tsx`
- `src/components/answers/CharacterAnswer.tsx`

---

## QuizPage 変更点

### TTS文生成

```typescript
const buildQuestionTTS = (index: number, q: Question): string => {
  const taskLines = q.tasks.map(t => t.instruction).join('。')
  return `問題${index + 1}。${q.text}。${taskLines}`
}
```

### 採点

```typescript
const handleDecide = (selections: MarkerSelection[]) => {
  const taskResults = scoreAnswer(currentQ.tasks, selections)
  const score = taskResults.filter(Boolean).length
  const answer: Answer = {
    questionId: currentQ.id,
    selections,
    taskResults,
    score,
    maxScore: currentQ.tasks.length,
  }
  // answersRef に追加 → 次の問題へ
}
```

### タイマー終了時（handleTimeout）

タイムアウト時は `MarkerAnswerPanel` の現在の confirmed 一覧を `ref` 経由で取得して採点する。

---

## ResultPage 変更点

- `score / total` の表示を「正解 {score} / {total} 組み合わせ」に変更
- 各問題の詳細に `taskResults` を使って正誤をtask単位で表示

---

## stories.ts 変更内容

全15問を新フォーマットに書き直す。

### 変更後のフォーマット例

```typescript
{
  id: 'q1',
  type: 'marker',
  text: 'チューリップはなんぼんさいていましたか？',
  options: [
    { id: 'a', label: '3', emoji: '3️⃣' },
    { id: 'b', label: '4', emoji: '4️⃣' },
    { id: 'c', label: '5', emoji: '5️⃣' },
    { id: 'd', label: '6', emoji: '6️⃣' },
    { id: 'e', label: '7', emoji: '7️⃣' },
  ],
  tasks: [
    {
      instruction: '正しいこたえを えらんで、あかで まるを おしてください',
      optionId: 'c',
      color: 'red',
      shape: 'circle',
    },
  ],
  explanation: '「赤いチューリップが五本」さいていました。',
}
```

### 複数taskの例

```typescript
{
  id: 'q2',
  type: 'marker',
  text: 'うさぎさんとおさるさんが たべていたものはなんですか？',
  options: [
    { id: 'a', label: 'おべんとう', emoji: '🍱' },
    { id: 'b', label: 'りんご', emoji: '🍎' },
    { id: 'c', label: 'バナナ', emoji: '🍌' },
    { id: 'd', label: 'おにぎり', emoji: '🍙' },
  ],
  tasks: [
    {
      instruction: 'うさぎさんのこたえを えらんで、あかで まるを おしてください',
      optionId: 'a',
      color: 'red',
      shape: 'circle',
    },
    {
      instruction: 'おさるさんのこたえを えらんで、あおで さんかくを おしてください',
      optionId: 'c',
      color: 'blue',
      shape: 'triangle',
    },
  ],
  explanation: 'うさぎさんはおべんとう、おさるさんはバナナをたべていました。',
}
```

---

## ファイル変更一覧

| ファイル | 変更種別 | 内容 |
|---------|---------|------|
| `src/types/index.ts` | 変更 | MarkColor / MarkShape / MarkerTask / MarkerSelection 追加。Question.type を 'marker' に統一。Option.correct 削除。Answer / QuizResult 更新 |
| `src/components/answers/MarkerAnswerPanel.tsx` | 新規 | 3ステップ統一回答UI |
| `src/components/answers/IllustrationAnswer.tsx` | 削除 | |
| `src/components/answers/NumberAnswer.tsx` | 削除 | |
| `src/components/answers/ColorAnswer.tsx` | 削除 | |
| `src/components/answers/CharacterAnswer.tsx` | 削除 | |
| `src/pages/QuizPage.tsx` | 変更 | TTS文生成・採点ロジック・MarkerAnswerPanel使用 |
| `src/pages/ResultPage.tsx` | 変更 | task単位の正誤表示 |
| `src/data/stories.ts` | 変更 | 全15問を新フォーマットに書き直し |
| `src/hooks/useTTS.test.ts` | 変更 | テスト更新 |
| `src/utils/storage.test.ts` | 変更 | Answer型変更に対応 |

---

## 非機能要件

- タイムアウト時は `confirmedRef`（ref経由）で現在の選択を取得して採点
- `disabled` 時はすべてのボタンが押せない（reading / timeout フェーズ）
- 早押し検知（earlyPressRef）は MarkerAnswerPanel のタップでも発動する
