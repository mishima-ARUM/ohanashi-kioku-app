# 学習分析ダッシュボード Phase 1 設計書

**Goal:** 個人の学習データから苦手カテゴリ・偏差値・正答率推移を可視化し、弱点改善を促すProgressPageを実装する。

**Architecture:** 既存のlocalStorageデータを集計するutility層を新設し、ProgressPageを全面リニューアルする。外部チャートライブラリは使わずSVGで実装。

**Tech Stack:** React 18 + TypeScript + Tailwind CSS v3 + Vite（既存スタック継続）

---

## 1. データ設計

### 1-1. カテゴリ定義

問題カテゴリは9種類。各Questionに1つのcategoryを付与する。

```typescript
type QuestionCategory =
  | '色の記憶'
  | '数の記憶'
  | '登場人物'
  | '持ち物・もの'
  | '行動・できごと'
  | '場所'
  | '順番・流れ'
  | '仲間はずれ'
  | '季節'
```

### 1-2. Question型の変更

```typescript
interface Question {
  id: string
  type: 'marker'
  text: string
  tasks: MarkerTask[]
  options: Option[]
  explanation: string
  category: QuestionCategory  // ← 追加
}
```

### 1-3. 自動カテゴリタグ付け（スクリプト）

`scripts/tag-categories.mjs` を実行して全storiesファイルを一括更新する。
キーワードマッチングで category を決定。優先順位は上から順に評価し最初にマッチしたものを採用。

| キーワード（設問テキスト） | カテゴリ |
|---|---|
| なにいろ・いろ・なん色 | 色の記憶 |
| いくつ・なんぼん・なんまい・なんこ・なんにん・なん本・なん枚 | 数の記憶 |
| だれ・どの子・どの人・なんという | 登場人物 |
| なかった・ないもの・なかったもの・入っていない | 仲間はずれ |
| きせつ・はる・なつ・あき・ふゆ・春・夏・秋・冬 | 季節 |
| さいしょ・さいご・つぎ・じゅんばん・順番・何番目 | 順番・流れ |
| どこ・場所・どのお店・どの公園 | 場所 |
| もって・かばん・なにを持・何を持 | 持ち物・もの |
| 上記に非該当 | 行動・できごと（デフォルト） |

### 1-4. 偏差値計算（Phase 1：個人正答率ベース）

Phase 1では母集団データがないため、個人の正答率を偏差値スケールに線形マッピングする。
Phase 2（LINEミニアプリ・複数ユーザー）で真の偏差値（集団平均・標準偏差）に差し替える。

```
偏差値 = 30 + (正答率 × 40)

0%   → 偏差値 30
50%  → 偏差値 50
75%  → 偏差値 60
100% → 偏差値 70
```

トレンド表示：直近5回の正答率平均 - その前5回の正答率平均 → 差をΔとして↑↓で表示。

---

## 2. UIレイアウト（ProgressPage）

ProgressPage を以下5セクションで全面リニューアルする。

```
┌─────────────────────────────┐
│ ① 偏差値カード               │
├─────────────────────────────┤
│ ② 苦手カテゴリ TOP3          │
├─────────────────────────────┤
│ ③ 正答率推移グラフ（折れ線） │
├─────────────────────────────┤
│ ④ 月別進捗バー               │
├─────────────────────────────┤
│ ⑤ 問題別スコア一覧（既存）   │
└─────────────────────────────┘
```

### ① 偏差値カード（DeviationCard）

- 総合偏差値・難易度別（やさしい/ふつう/むずかしい）を表示
- 偏差値スケールバー（30〜70のレンジ、現在値をドット表示）
- トレンド：直近5回 vs 前5回の差を ↑+N / ↓-N で表示
- データ不足（5問未満）の場合は「もっと問題をといてね」を表示

### ② 苦手カテゴリ TOP3（WeakCategoryCard）

- 5問以上解いたカテゴリのみ対象
- 正答率の低い順TOP3を表示
- カテゴリ名・正答率・プログレスバーを表示
- 「この問題を練習する」タップでHomePage（該当月フィルタ）へ遷移
  ※ Phase 1ではHomePageに遷移するのみ（フィルタはPhase 2）

### ③ 正答率推移グラフ（AccuracyChart）

- 直近14日間の日別正答率を折れ線グラフで表示
- SVGで実装（外部ライブラリ不使用）
- データが1日分しかない場合は「まだグラフが作れません」を表示
- X軸：日付（M/D形式）、Y軸：0〜100%

### ④ 月別進捗バー（MonthlyProgress）

- 11月〜6月の各月について「挑戦済み問題数 / 総問題数」を表示
- プログレスバー + 数字 + 完了時✅マーク
- 問題を1問も解いていない月はグレー表示

### ⑤ 問題別スコア一覧

既存ProgressPageのリストをそのまま末尾に残す。

---

## 3. ファイル構成

### 新規作成

| ファイル | 責務 |
|---|---|
| `src/utils/analytics.ts` | 偏差値・カテゴリ統計・グラフデータ・月別進捗の計算 |
| `src/components/DeviationCard.tsx` | 偏差値カードUI |
| `src/components/WeakCategoryCard.tsx` | 苦手カテゴリTOP3 UI |
| `src/components/AccuracyChart.tsx` | 正答率推移折れ線グラフ（SVG） |
| `src/components/MonthlyProgress.tsx` | 月別進捗バーUI |
| `scripts/tag-categories.mjs` | 全設問への自動カテゴリタグ付けスクリプト |

### 変更

| ファイル | 変更内容 |
|---|---|
| `src/types/index.ts` | `QuestionCategory` 型追加、`Question.category` フィールド追加 |
| `src/pages/ProgressPage.tsx` | 全面リニューアル（5セクション構成） |
| `src/data/stories.ts` | スクリプトで各Question に category 付与 |
| `src/data/stories-nov.ts` | 同上 |
| `src/data/stories-dec.ts` | 同上 |
| `src/data/stories-jan.ts` | 同上 |
| `src/data/stories-feb.ts` | 同上 |
| `src/data/stories-mar.ts` | 同上 |
| `src/data/stories-apr.ts` | 同上 |
| `src/data/stories-may.ts` | 同上 |
| `src/data/stories-jun.ts` | 同上 |

---

## 4. analyticsユーティリティ インターフェース

```typescript
// カテゴリ別統計
interface CategoryStat {
  category: QuestionCategory
  correct: number
  total: number
  accuracy: number  // 0〜1
}

// 日別正答率（グラフ用）
interface DailyAccuracy {
  date: string       // 'YYYY-MM-DD'
  accuracy: number   // 0〜1
}

// 月別進捗
interface MonthProgress {
  label: string      // '11月' など
  attempted: number  // 挑戦済み問題数
  total: number      // 月の総問題数
}

// 関数シグネチャ
computeDeviation(accuracy: number): number
getTrend(results: QuizResult[]): number  // 直近5回 - 前5回の偏差値差
getCategoryStats(results: QuizResult[], stories: Story[]): CategoryStat[]
getWeakCategories(stats: CategoryStat[], minAttempts?: number): CategoryStat[]
getDailyAccuracy(results: QuizResult[], days?: number): DailyAccuracy[]
getMonthProgress(results: QuizResult[], stories: Story[]): MonthProgress[]
getDifficultyStats(results: QuizResult[], stories: Story[]): Record<1|2|3, CategoryStat>
```

---

## 5. 実装順序

1. `types/index.ts` — QuestionCategory型・category フィールド追加
2. `scripts/tag-categories.mjs` — 自動タグ付けスクリプト実行・全storiesファイル更新
3. `src/utils/analytics.ts` — ユーティリティ実装・ユニットテスト追加
4. `src/components/DeviationCard.tsx` — 偏差値カード
5. `src/components/WeakCategoryCard.tsx` — 苦手カテゴリTOP3
6. `src/components/AccuracyChart.tsx` — SVGグラフ
7. `src/components/MonthlyProgress.tsx` — 月別進捗
8. `src/pages/ProgressPage.tsx` — 全面リニューアル
9. ビルド確認 + デプロイ

---

## 6. Phase 2 への拡張ポイント

- `computeDeviation()` をバックエンドAPIに差し替えるだけで真の偏差値に移行可能
- `CategoryStat` はそのままPhase 2の集団統計にも使用可能
- 苦手カテゴリの「練習する」ボタンをカテゴリフィルタ付きHomePageに接続
