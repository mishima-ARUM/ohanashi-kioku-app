# 学習分析ダッシュボード Phase 1 実装計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 個人の学習データから苦手カテゴリ・偏差値・正答率推移を可視化する ProgressPage を実装する。

**Architecture:** localStorage の QuizResult[] を集計する analytics.ts ユーティリティ層を新設し、ProgressPage を 5 セクション構成に全面リニューアルする。外部チャートライブラリは不使用（SVG）。

**Tech Stack:** React 18 + TypeScript + Tailwind CSS v3 + Vite + Vitest（既存スタック継続）

---

## ファイル構成

### 新規作成

| ファイル | 責務 |
|---|---|
| `src/utils/analytics.ts` | 偏差値・カテゴリ統計・グラフデータ・月別進捗の計算 |
| `src/utils/analytics.test.ts` | analytics ユーティリティのユニットテスト |
| `src/components/DeviationCard.tsx` | 偏差値カード UI |
| `src/components/WeakCategoryCard.tsx` | 苦手カテゴリ TOP3 UI |
| `src/components/AccuracyChart.tsx` | 正答率推移折れ線グラフ（SVG） |
| `src/components/MonthlyProgress.tsx` | 月別進捗バー UI |
| `scripts/tag-categories.mjs` | 全設問への自動カテゴリタグ付けスクリプト |

### 変更

| ファイル | 変更内容 |
|---|---|
| `src/types/index.ts` | `QuestionCategory` 型追加、`Question.category?` フィールド追加 |
| `src/pages/ProgressPage.tsx` | 全面リニューアル（5 セクション構成） |
| `src/data/stories.ts` | スクリプト実行で各 Question に category 付与 |
| `src/data/stories-nov.ts` 〜 `stories-jun.ts` | 同上 |

---

## Task 1: types/index.ts に QuestionCategory を追加

**Files:**
- Modify: `src/types/index.ts`

- [ ] **Step 1: QuestionCategory 型と category フィールドを追加する**

`src/types/index.ts` を以下の差分で編集する。

変更前（`Question` インターフェース）：
```typescript
export interface Question {
  id: string
  type: 'marker'
  text: string
  tasks: MarkerTask[]
  options: Option[]
  explanation: string
}
```

変更後（`Question` インターフェース）＋新しい型定義（ファイル先頭 or `Question` の直前に追加）：
```typescript
export type QuestionCategory =
  | '色の記憶'
  | '数の記憶'
  | '登場人物'
  | '持ち物・もの'
  | '行動・できごと'
  | '場所'
  | '順番・流れ'
  | '仲間はずれ'
  | '季節'

export interface Question {
  id: string
  type: 'marker'
  text: string
  tasks: MarkerTask[]
  options: Option[]
  explanation: string
  category?: QuestionCategory   // ← 追加（スクリプト実行後は全問題に付与される）
}
```

- [ ] **Step 2: TypeScript エラーがないことを確認する**

```bash
npx tsc --noEmit
```

Expected: エラーなし（`category` は optional なので既存データはそのままで OK）

- [ ] **Step 3: コミット**

```bash
git add src/types/index.ts
git commit -m "feat: add QuestionCategory type and optional category field to Question"
```

---

## Task 2: 自動カテゴリタグ付けスクリプト

**Files:**
- Create: `scripts/tag-categories.mjs`

- [ ] **Step 1: スクリプトを作成する**

`scripts/tag-categories.mjs` を以下の内容で作成する。

```javascript
#!/usr/bin/env node
/**
 * tag-categories.mjs
 * 全 stories ファイルの各 Question に category フィールドを付与する。
 * 既に category が付いている設問はスキップ（冪等）。
 *
 * 実行: node scripts/tag-categories.mjs
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

/** カテゴリ判定ルール（上から優先順に評価） */
const RULES = [
  { keywords: ['なにいろ', 'なん色', 'いろ'],                                   category: '色の記憶' },
  { keywords: ['いくつ', 'なんぼん', 'なんまい', 'なんこ', 'なんにん', 'なん本', 'なん枚'], category: '数の記憶' },
  { keywords: ['だれ', 'どの子', 'どの人', 'なんという'],                         category: '登場人物' },
  { keywords: ['なかった', 'ないもの', 'なかったもの', '入っていない'],             category: '仲間はずれ' },
  { keywords: ['きせつ', 'はる', 'なつ', 'あき', 'ふゆ', '春', '夏', '秋', '冬'], category: '季節' },
  { keywords: ['さいしょ', 'さいご', 'つぎ', 'じゅんばん', '順番', '何番目'],      category: '順番・流れ' },
  { keywords: ['どこ', '場所', 'どのお店', 'どの公園'],                            category: '場所' },
  { keywords: ['もって', 'かばん', 'なにを持', '何を持'],                          category: '持ち物・もの' },
]

/**
 * 設問テキストからカテゴリを判定する。
 * @param {string} text - 設問テキスト
 * @returns {string} カテゴリ名
 */
function determineCategory(text) {
  for (const rule of RULES) {
    if (rule.keywords.some(kw => text.includes(kw))) return rule.category
  }
  return '行動・できごと'
}

/**
 * 1 ファイルを処理する。
 * text: フィールドを検出してカテゴリを決定し、
 * explanation: フィールドの直後（まだ category がない場合）に category: を挿入する。
 *
 * @param {string} filePath - 処理するファイルのパス
 */
function processFile(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')
  let pendingCategory = null
  let modified = false
  const output = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // text: フィールドを検出 → カテゴリを決定
    const textMatch = line.match(/^(\s+)text:\s*['"](.+)['"]\s*,?\s*$/)
    if (textMatch) {
      pendingCategory = determineCategory(textMatch[2])
    }

    output.push(line)

    // explanation: フィールドの直後に category: を挿入
    const explMatch = line.match(/^(\s+)explanation:\s*/)
    if (explMatch && pendingCategory !== null) {
      // 次の行に既に category: があればスキップ（冪等）
      const nextLine = lines[i + 1] ?? ''
      if (!nextLine.match(/\s+category:/)) {
        output.push(`${explMatch[1]}category: '${pendingCategory}',`)
        modified = true
      }
      pendingCategory = null
    }
  }

  if (modified) {
    writeFileSync(filePath, output.join('\n'), 'utf-8')
    console.log(`✅ Updated: ${filePath}`)
  } else {
    console.log(`⏭  Skipped (already tagged or no questions): ${filePath}`)
  }
}

// 処理対象ファイル
const targets = [
  'src/data/stories.ts',
  'src/data/stories-nov.ts',
  'src/data/stories-dec.ts',
  'src/data/stories-jan.ts',
  'src/data/stories-feb.ts',
  'src/data/stories-mar.ts',
  'src/data/stories-apr.ts',
  'src/data/stories-may.ts',
  'src/data/stories-jun.ts',
].map(f => join(ROOT, f))

for (const fp of targets) {
  processFile(fp)
}

console.log('\n🎉 カテゴリタグ付け完了')
```

- [ ] **Step 2: スクリプトを実行する**

```bash
node scripts/tag-categories.mjs
```

Expected 出力（例）:
```
✅ Updated: ...\src\data\stories.ts
✅ Updated: ...\src\data\stories-nov.ts
...
🎉 カテゴリタグ付け完了
```

- [ ] **Step 3: タグ付け結果を目視確認する**

`src/data/stories-nov.ts` の最初の question を確認する。`explanation:` の直後に `category: '色の記憶',` のような行が追加されていること。

例（確認イメージ）:
```typescript
explanation: '「ぴんくのきもの」をきていました。',
category: '色の記憶',
```

- [ ] **Step 4: TypeScript エラーがないことを確認する**

```bash
npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 5: コミット**

```bash
git add scripts/tag-categories.mjs src/data/
git commit -m "feat: add tag-categories script and auto-tag all questions with category"
```

---

## Task 3: analytics.ts ユーティリティ（TDD）

**Files:**
- Create: `src/utils/analytics.test.ts`
- Create: `src/utils/analytics.ts`

- [ ] **Step 1: テストファイルを作成する**

`src/utils/analytics.test.ts` を以下の内容で作成する。

```typescript
import { describe, it, expect } from 'vitest'
import {
  computeDeviation,
  getTrend,
  getCategoryStats,
  getWeakCategories,
  getDailyAccuracy,
  getMonthProgress,
  getDifficultyStats,
} from './analytics'
import type { QuizResult, Story } from '../types'

// ────────────────────────────────────────────
// テスト用ヘルパー
// ────────────────────────────────────────────

function makeResult(overrides: Partial<QuizResult> = {}): QuizResult {
  return {
    storyId: 'story-001',
    date: '2026-01-01T00:00:00.000Z',
    score: 3,
    total: 5,
    answers: [],
    ...overrides,
  }
}

function makeStory(overrides: Partial<Story> = {}): Story {
  return {
    id: 'story-001',
    title: 'テスト',
    difficulty: 1,
    estimatedMinutes: 2,
    icon: '📖',
    story: 'テストのおはなし',
    questions: [
      {
        id: 'q1',
        type: 'marker',
        text: 'なにいろでしたか？',
        tasks: [{ instruction: 'えらんでください', optionId: 'red', color: 'red', shape: 'circle' }],
        options: [{ id: 'red', label: 'あか' }],
        explanation: 'あかです。',
        category: '色の記憶',
      },
      {
        id: 'q2',
        type: 'marker',
        text: 'だれがきましたか？',
        tasks: [{ instruction: 'えらんでください', optionId: 'a', color: 'blue', shape: 'triangle' }],
        options: [{ id: 'a', label: 'ねこ' }],
        explanation: 'ねこです。',
        category: '登場人物',
      },
    ],
    ...overrides,
  }
}

// ────────────────────────────────────────────
// computeDeviation
// ────────────────────────────────────────────

describe('computeDeviation', () => {
  it('正答率 0% → 偏差値 30', () => {
    expect(computeDeviation(0)).toBe(30)
  })
  it('正答率 50% → 偏差値 50', () => {
    expect(computeDeviation(0.5)).toBe(50)
  })
  it('正答率 75% → 偏差値 60', () => {
    expect(computeDeviation(0.75)).toBe(60)
  })
  it('正答率 100% → 偏差値 70', () => {
    expect(computeDeviation(1)).toBe(70)
  })
})

// ────────────────────────────────────────────
// getTrend
// ────────────────────────────────────────────

describe('getTrend', () => {
  it('結果が 5 件未満なら 0 を返す', () => {
    expect(getTrend([])).toBe(0)
    expect(getTrend([makeResult()])).toBe(0)
  })

  it('直近 5 回の偏差値平均 - 前 5 回の偏差値平均を返す', () => {
    // 前5回: score/total = 2/5 = 0.4 → 偏差値 46
    // 直近5回: score/total = 4/5 = 0.8 → 偏差値 62
    // トレンド = 62 - 46 = 16
    const prev5 = Array(5).fill(null).map(() =>
      makeResult({ score: 2, total: 5, date: '2026-01-01T00:00:00.000Z' }),
    )
    const recent5 = Array(5).fill(null).map(() =>
      makeResult({ score: 4, total: 5, date: '2026-01-10T00:00:00.000Z' }),
    )
    const results = [...prev5, ...recent5]
    expect(getTrend(results)).toBeCloseTo(16, 0)
  })
})

// ────────────────────────────────────────────
// getCategoryStats
// ────────────────────────────────────────────

describe('getCategoryStats', () => {
  it('カテゴリ別の正解数と総数を集計する', () => {
    const story = makeStory()
    const result = makeResult({
      storyId: 'story-001',
      answers: [
        { questionId: 'q1', selections: [], taskResults: [true],  score: 1, maxScore: 1 },
        { questionId: 'q2', selections: [], taskResults: [false], score: 0, maxScore: 1 },
      ],
    })
    const stats = getCategoryStats([result], [story])
    const color = stats.find(s => s.category === '色の記憶')
    const person = stats.find(s => s.category === '登場人物')
    expect(color?.correct).toBe(1)
    expect(color?.total).toBe(1)
    expect(color?.accuracy).toBeCloseTo(1)
    expect(person?.correct).toBe(0)
    expect(person?.total).toBe(1)
    expect(person?.accuracy).toBeCloseTo(0)
  })

  it('category が未設定の問題は「行動・できごと」にフォールバックする', () => {
    const story = makeStory({
      questions: [
        {
          id: 'q1',
          type: 'marker',
          text: 'なにをしましたか？',
          tasks: [{ instruction: 'えらんでください', optionId: 'a', color: 'red', shape: 'circle' }],
          options: [{ id: 'a', label: 'はしった' }],
          explanation: 'はしりました。',
          // category なし
        },
      ],
    })
    const result = makeResult({
      storyId: 'story-001',
      answers: [{ questionId: 'q1', selections: [], taskResults: [true], score: 1, maxScore: 1 }],
    })
    const stats = getCategoryStats([result], [story])
    const action = stats.find(s => s.category === '行動・できごと')
    expect(action?.total).toBe(1)
  })
})

// ────────────────────────────────────────────
// getWeakCategories
// ────────────────────────────────────────────

describe('getWeakCategories', () => {
  it('正答率が低い順に最大 3 件返す', () => {
    const stats = [
      { category: '色の記憶'    as const, correct: 8, total: 10, accuracy: 0.8 },
      { category: '数の記憶'    as const, correct: 3, total: 10, accuracy: 0.3 },
      { category: '登場人物'    as const, correct: 5, total: 10, accuracy: 0.5 },
      { category: '場所'        as const, correct: 1, total: 10, accuracy: 0.1 },
      { category: '行動・できごと' as const, correct: 7, total: 10, accuracy: 0.7 },
    ]
    const weak = getWeakCategories(stats)
    expect(weak).toHaveLength(3)
    expect(weak[0].category).toBe('場所')        // 最も低い
    expect(weak[1].category).toBe('数の記憶')
    expect(weak[2].category).toBe('登場人物')
  })

  it('minAttempts 未満のカテゴリを除外する', () => {
    const stats = [
      { category: '色の記憶' as const, correct: 0, total: 3, accuracy: 0 }, // 3問 < 5問
      { category: '数の記憶' as const, correct: 3, total: 6, accuracy: 0.5 },
    ]
    const weak = getWeakCategories(stats, 5)
    expect(weak).toHaveLength(1)
    expect(weak[0].category).toBe('数の記憶')
  })
})

// ────────────────────────────────────────────
// getDailyAccuracy
// ────────────────────────────────────────────

describe('getDailyAccuracy', () => {
  it('日別に正答率を集計して日付順に返す', () => {
    const results = [
      makeResult({ date: '2026-01-10T10:00:00.000Z', score: 4, total: 5 }),
      makeResult({ date: '2026-01-10T15:00:00.000Z', score: 2, total: 5 }),
      makeResult({ date: '2026-01-11T10:00:00.000Z', score: 5, total: 5 }),
    ]
    const daily = getDailyAccuracy(results)
    expect(daily.length).toBeGreaterThanOrEqual(2)
    const jan10 = daily.find(d => d.date === '2026-01-10')
    const jan11 = daily.find(d => d.date === '2026-01-11')
    // 1/10: (4+2)/(5+5) = 0.6
    expect(jan10?.accuracy).toBeCloseTo(0.6)
    // 1/11: 5/5 = 1.0
    expect(jan11?.accuracy).toBeCloseTo(1.0)
  })

  it('結果のない日は含まない', () => {
    const results = [
      makeResult({ date: '2026-01-01T00:00:00.000Z', score: 3, total: 5 }),
    ]
    const daily = getDailyAccuracy(results, 14)
    // 結果がある日だけ返る
    expect(daily.every(d => d.accuracy !== undefined)).toBe(true)
    expect(daily.some(d => d.date === '2026-01-01')).toBe(true)
  })
})

// ────────────────────────────────────────────
// getMonthProgress
// ────────────────────────────────────────────

describe('getMonthProgress', () => {
  it('各月の挑戦済み問題数と総問題数を返す', () => {
    const story1 = makeStory({ id: 'nov-001' })
    const story2 = makeStory({ id: 'nov-002' })
    const months = [
      { label: '11月', stories: [story1, story2] },
    ]
    // story1 だけ解いた
    const results = [makeResult({ storyId: 'nov-001' })]
    const progress = getMonthProgress(results, months)
    expect(progress).toHaveLength(1)
    expect(progress[0].label).toBe('11月')
    expect(progress[0].total).toBe(2)
    expect(progress[0].attempted).toBe(1)
  })
})

// ────────────────────────────────────────────
// getDifficultyStats
// ────────────────────────────────────────────

describe('getDifficultyStats', () => {
  it('難易度別の正答率を集計する', () => {
    const easyStory = makeStory({ id: 'story-001', difficulty: 1 })
    const hardStory = makeStory({ id: 'story-002', difficulty: 3 })
    const results = [
      makeResult({ storyId: 'story-001', score: 4, total: 5 }),
      makeResult({ storyId: 'story-002', score: 2, total: 5 }),
    ]
    const dStats = getDifficultyStats(results, [easyStory, hardStory])
    expect(dStats[1].accuracy).toBeCloseTo(0.8)
    expect(dStats[3].accuracy).toBeCloseTo(0.4)
    expect(dStats[2].total).toBe(0)
  })
})
```

- [ ] **Step 2: テストを実行してすべて FAIL することを確認する**

```bash
npx vitest run src/utils/analytics.test.ts
```

Expected: FAIL（analytics.ts がまだ存在しないため）

- [ ] **Step 3: analytics.ts を実装する**

`src/utils/analytics.ts` を以下の内容で作成する。

```typescript
import type { QuizResult, Story, QuestionCategory } from '../types'

// ────────────────────────────────────────────
// 公開インターフェース
// ────────────────────────────────────────────

/** カテゴリ別統計 */
export interface CategoryStat {
  category: QuestionCategory
  correct: number
  total: number
  accuracy: number  // 0〜1
}

/** 日別正答率（グラフ用） */
export interface DailyAccuracy {
  date: string      // 'YYYY-MM-DD'
  accuracy: number  // 0〜1
}

/** 月別進捗 */
export interface MonthProgress {
  label: string     // '11月' など
  attempted: number // 挑戦済みストーリー数
  total: number     // 月の総ストーリー数
}

/** 難易度別統計 */
export interface DiffStat {
  correct: number
  total: number
  accuracy: number
}

/** getMonthProgress に渡す月定義 */
export interface MonthDef {
  label: string
  stories: Story[]
}

// ────────────────────────────────────────────
// 内部ユーティリティ
// ────────────────────────────────────────────

const DEFAULT_CATEGORY: QuestionCategory = '行動・できごと'

function accuracyOf(correct: number, total: number): number {
  return total > 0 ? correct / total : 0
}

// ────────────────────────────────────────────
// 公開関数
// ────────────────────────────────────────────

/**
 * 正答率（0〜1）を偏差値スケール（30〜70）に線形マッピングする。
 * Phase 1 では母集団データがないため個人正答率を使用する。
 *   0%  → 30
 *   50% → 50
 *   75% → 60
 *   100% → 70
 */
export function computeDeviation(accuracy: number): number {
  return 30 + accuracy * 40
}

/**
 * 直近 5 回の偏差値平均 - その前 5 回の偏差値平均を返す。
 * 10 件未満の場合は 0 を返す。
 */
export function getTrend(results: QuizResult[]): number {
  if (results.length < 10) return 0
  const sorted = [...results].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  )
  const prev5   = sorted.slice(-10, -5)
  const recent5 = sorted.slice(-5)

  const avgDev = (rs: QuizResult[]) => {
    const totalCorrect = rs.reduce((s, r) => s + r.score, 0)
    const totalAll     = rs.reduce((s, r) => s + r.total, 0)
    return computeDeviation(accuracyOf(totalCorrect, totalAll))
  }

  return avgDev(recent5) - avgDev(prev5)
}

/**
 * QuizResult[] と Story[] からカテゴリ別統計を計算する。
 * category が未設定の Question は '行動・できごと' にフォールバックする。
 */
export function getCategoryStats(
  results: QuizResult[],
  stories: Story[],
): CategoryStat[] {
  const storyMap = new Map(stories.map(s => [s.id, s]))

  // { category → { correct, total } }
  const acc = new Map<QuestionCategory, { correct: number; total: number }>()

  for (const result of results) {
    const story = storyMap.get(result.storyId)
    if (!story) continue

    for (const answer of result.answers) {
      const question = story.questions.find(q => q.id === answer.questionId)
      const category = question?.category ?? DEFAULT_CATEGORY

      const entry = acc.get(category) ?? { correct: 0, total: 0 }
      entry.correct += answer.score
      entry.total   += answer.maxScore
      acc.set(category, entry)
    }
  }

  return Array.from(acc.entries()).map(([category, { correct, total }]) => ({
    category,
    correct,
    total,
    accuracy: accuracyOf(correct, total),
  }))
}

/**
 * CategoryStat[] から弱点カテゴリを返す。
 * - minAttempts 以上試みたカテゴリのみ対象
 * - 正答率の低い順で最大 3 件
 */
export function getWeakCategories(
  stats: CategoryStat[],
  minAttempts = 5,
): CategoryStat[] {
  return stats
    .filter(s => s.total >= minAttempts)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 3)
}

/**
 * 直近 days 日間の日別正答率を日付昇順で返す。
 * データが存在する日のみ含む。
 */
export function getDailyAccuracy(
  results: QuizResult[],
  days = 14,
): DailyAccuracy[] {
  // 直近 days 日のカットオフ
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - days)

  // 日付ごとに集計
  const byDate = new Map<string, { correct: number; total: number }>()

  for (const r of results) {
    const d = new Date(r.date)
    if (d < cutoff) continue
    const key = r.date.slice(0, 10)  // 'YYYY-MM-DD'
    const entry = byDate.get(key) ?? { correct: 0, total: 0 }
    entry.correct += r.score
    entry.total   += r.total
    byDate.set(key, entry)
  }

  return Array.from(byDate.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, { correct, total }]) => ({
      date,
      accuracy: accuracyOf(correct, total),
    }))
}

/**
 * 月別進捗を返す。
 * 各月について「挑戦済みストーリー数 / 総ストーリー数」を計算する。
 */
export function getMonthProgress(
  results: QuizResult[],
  months: MonthDef[],
): MonthProgress[] {
  const attemptedIds = new Set(results.map(r => r.storyId))

  return months.map(({ label, stories }) => ({
    label,
    total: stories.length,
    attempted: stories.filter(s => attemptedIds.has(s.id)).length,
  }))
}

/**
 * 難易度（1=やさしい / 2=ふつう / 3=むずかしい）別の正答率を返す。
 */
export function getDifficultyStats(
  results: QuizResult[],
  stories: Story[],
): Record<1 | 2 | 3, DiffStat> {
  const storyMap = new Map(stories.map(s => [s.id, s]))
  const acc: Record<1 | 2 | 3, { correct: number; total: number }> = {
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 },
  }

  for (const r of results) {
    const story = storyMap.get(r.storyId)
    if (!story) continue
    const d = story.difficulty
    acc[d].correct += r.score
    acc[d].total   += r.total
  }

  return {
    1: { ...acc[1], accuracy: accuracyOf(acc[1].correct, acc[1].total) },
    2: { ...acc[2], accuracy: accuracyOf(acc[2].correct, acc[2].total) },
    3: { ...acc[3], accuracy: accuracyOf(acc[3].correct, acc[3].total) },
  }
}
```

- [ ] **Step 4: テストを実行してすべて PASS することを確認する**

```bash
npx vitest run src/utils/analytics.test.ts
```

Expected: 全テスト PASS

- [ ] **Step 5: コミット**

```bash
git add src/utils/analytics.ts src/utils/analytics.test.ts
git commit -m "feat: add analytics utility with deviation, category stats, trend, and monthly progress"
```

---

## Task 4: DeviationCard コンポーネント

**Files:**
- Create: `src/components/DeviationCard.tsx`

- [ ] **Step 1: DeviationCard を作成する**

`src/components/DeviationCard.tsx` を以下の内容で作成する。

```tsx
import { computeDeviation, getTrend, getDifficultyStats } from '../utils/analytics'
import type { QuizResult, Story } from '../types'

interface Props {
  results: QuizResult[]
  stories: Story[]
}

const DIFFICULTY_LABEL: Record<1 | 2 | 3, string> = {
  1: 'やさしい',
  2: 'ふつう',
  3: 'むずかしい',
}

export function DeviationCard({ results, stories }: Props) {
  const MIN_RESULTS = 5

  if (results.length < MIN_RESULTS) {
    return (
      <div className="bg-white rounded-3xl p-5 shadow-sm mb-4 text-center">
        <div className="text-4xl mb-2">📊</div>
        <p className="text-sm text-gray-500">
          あと <span className="font-bold text-purple-600">{MIN_RESULTS - results.length}</span> もん といてね！
          <br />へんさちが みえるよ✨
        </p>
      </div>
    )
  }

  const totalCorrect = results.reduce((s, r) => s + r.score, 0)
  const totalAll     = results.reduce((s, r) => s + r.total, 0)
  const overallAcc   = totalAll > 0 ? totalCorrect / totalAll : 0
  const deviation    = computeDeviation(overallAcc)
  const trend        = getTrend(results)
  const diffStats    = getDifficultyStats(results, stories)

  // スケールバー上の位置（30〜70 → 0〜100%）
  const dotPosition = Math.min(100, Math.max(0, ((deviation - 30) / 40) * 100))

  const trendLabel = trend === 0
    ? '—'
    : trend > 0
      ? `↑ +${Math.round(trend)}`
      : `↓ ${Math.round(trend)}`

  const trendColor = trend > 0
    ? 'text-green-500'
    : trend < 0
      ? 'text-red-400'
      : 'text-gray-400'

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm mb-4">
      <h2 className="text-sm font-bold text-gray-500 mb-3">📊 へんさち</h2>

      {/* 総合偏差値 */}
      <div className="flex items-end gap-3 mb-3">
        <div className="text-5xl font-bold text-purple-600">
          {Math.round(deviation)}
        </div>
        <div className={`text-lg font-bold mb-1 ${trendColor}`}>
          {trendLabel}
        </div>
      </div>

      {/* スケールバー */}
      <div className="relative h-3 bg-gradient-to-r from-red-200 via-yellow-200 to-green-300 rounded-full mb-4">
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-purple-600 rounded-full border-2 border-white shadow-md"
          style={{ left: `calc(${dotPosition}% - 10px)` }}
        />
        <span className="absolute -bottom-5 left-0 text-xs text-gray-400">30</span>
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-gray-400">50</span>
        <span className="absolute -bottom-5 right-0 text-xs text-gray-400">70</span>
      </div>

      {/* 難易度別 */}
      <div className="grid grid-cols-3 gap-2 mt-6">
        {([1, 2, 3] as const).map(d => {
          const stat = diffStats[d]
          const dev  = stat.total > 0 ? Math.round(computeDeviation(stat.accuracy)) : '—'
          return (
            <div key={d} className="text-center bg-gray-50 rounded-2xl py-2">
              <div className="text-xs text-gray-400 mb-1">{DIFFICULTY_LABEL[d]}</div>
              <div className="text-xl font-bold text-purple-500">{dev}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: TypeScript エラーがないことを確認する**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: コミット**

```bash
git add src/components/DeviationCard.tsx
git commit -m "feat: add DeviationCard component"
```

---

## Task 5: WeakCategoryCard コンポーネント

**Files:**
- Create: `src/components/WeakCategoryCard.tsx`

- [ ] **Step 1: WeakCategoryCard を作成する**

`src/components/WeakCategoryCard.tsx` を以下の内容で作成する。

```tsx
import { useNavigate } from 'react-router-dom'
import { getCategoryStats, getWeakCategories } from '../utils/analytics'
import type { QuizResult, Story } from '../types'

interface Props {
  results: QuizResult[]
  stories: Story[]
}

export function WeakCategoryCard({ results, stories }: Props) {
  const navigate = useNavigate()
  const stats    = getCategoryStats(results, stories)
  const weak     = getWeakCategories(stats, 5)

  if (weak.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-5 shadow-sm mb-4 text-center">
        <div className="text-3xl mb-2">🌟</div>
        <p className="text-sm text-gray-500">
          もっとといてね！<br />にがてカテゴリが みえてくるよ
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm mb-4">
      <h2 className="text-sm font-bold text-gray-500 mb-3">😅 にがてカテゴリ TOP3</h2>
      <div className="space-y-3">
        {weak.map((stat, rank) => {
          const pct = Math.round(stat.accuracy * 100)
          return (
            <div key={stat.category}>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-400">
                    {rank + 1}.
                  </span>
                  <span className="text-sm font-bold text-gray-700">
                    {stat.category}
                  </span>
                </div>
                <span className="text-sm font-bold text-red-400">{pct}%</span>
              </div>
              {/* プログレスバー */}
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-400 to-orange-300 rounded-full transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
      {/* 練習するボタン（Phase 1 は HomePage へ遷移のみ） */}
      <button
        onClick={() => navigate('/')}
        className="mt-4 w-full py-2 rounded-2xl bg-purple-100 text-purple-700 text-sm font-bold hover:bg-purple-200 transition-colors"
      >
        この もんだいを れんしゅうする →
      </button>
    </div>
  )
}
```

- [ ] **Step 2: TypeScript エラーがないことを確認する**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: コミット**

```bash
git add src/components/WeakCategoryCard.tsx
git commit -m "feat: add WeakCategoryCard component"
```

---

## Task 6: AccuracyChart（SVG 折れ線グラフ）

**Files:**
- Create: `src/components/AccuracyChart.tsx`

- [ ] **Step 1: AccuracyChart を作成する**

`src/components/AccuracyChart.tsx` を以下の内容で作成する。

```tsx
import { getDailyAccuracy } from '../utils/analytics'
import type { QuizResult } from '../types'

interface Props {
  results: QuizResult[]
}

const W   = 300
const H   = 110
const PAD = { top: 10, right: 10, bottom: 22, left: 32 }

export function AccuracyChart({ results }: Props) {
  const data = getDailyAccuracy(results, 14)

  if (data.length < 2) {
    return (
      <div className="bg-white rounded-3xl p-5 shadow-sm mb-4 text-center">
        <div className="text-3xl mb-2">📈</div>
        <p className="text-sm text-gray-500">
          まだグラフが つくれません<br />もっとれんしゅうしてね！
        </p>
      </div>
    )
  }

  const innerW = W - PAD.left - PAD.right
  const innerH = H - PAD.top  - PAD.bottom

  const xStep = data.length > 1 ? innerW / (data.length - 1) : innerW
  const points = data.map((d, i) => ({
    x: PAD.left + i * xStep,
    y: PAD.top  + innerH * (1 - d.accuracy),
  }))

  const pathD = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(' ')

  // X軸ラベルの間引き（最大 7 本）
  const labelStep = Math.max(1, Math.ceil(data.length / 7))

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm mb-4">
      <h2 className="text-sm font-bold text-gray-500 mb-3">📈 せいかいりつのうつりかわり</h2>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        aria-label="正答率推移グラフ"
      >
        {/* Y 軸グリッド＋ラベル */}
        {[0, 50, 100].map(pct => {
          const y = PAD.top + innerH * (1 - pct / 100)
          return (
            <g key={pct}>
              <line
                x1={PAD.left} y1={y}
                x2={W - PAD.right} y2={y}
                stroke="#e5e7eb" strokeWidth="0.75"
              />
              <text
                x={PAD.left - 4} y={y + 3.5}
                textAnchor="end" fontSize="8" fill="#9ca3af"
              >
                {pct}%
              </text>
            </g>
          )
        })}

        {/* 折れ線 */}
        <path
          d={pathD}
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* データ点 */}
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3" fill="#8b5cf6" />
        ))}

        {/* X 軸日付ラベル */}
        {data.map((d, i) => {
          if (i % labelStep !== 0 && i !== data.length - 1) return null
          const mm = d.date.slice(5, 7).replace(/^0/, '')
          const dd = d.date.slice(8, 10).replace(/^0/, '')
          return (
            <text
              key={i}
              x={points[i].x}
              y={H - 4}
              textAnchor="middle"
              fontSize="7"
              fill="#9ca3af"
            >
              {mm}/{dd}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
```

- [ ] **Step 2: TypeScript エラーがないことを確認する**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: コミット**

```bash
git add src/components/AccuracyChart.tsx
git commit -m "feat: add AccuracyChart SVG line graph component"
```

---

## Task 7: MonthlyProgress コンポーネント

**Files:**
- Create: `src/components/MonthlyProgress.tsx`

- [ ] **Step 1: MonthlyProgress を作成する**

`src/components/MonthlyProgress.tsx` を以下の内容で作成する。

```tsx
import { getMonthProgress } from '../utils/analytics'
import type { MonthDef } from '../utils/analytics'
import type { QuizResult } from '../types'

interface Props {
  results: QuizResult[]
  months: MonthDef[]
}

export function MonthlyProgress({ results, months }: Props) {
  const progress = getMonthProgress(results, months)

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm mb-4">
      <h2 className="text-sm font-bold text-gray-500 mb-3">📅 つきべつすすみぐあい</h2>
      <div className="space-y-3">
        {progress.map(({ label, attempted, total }) => {
          const pct      = total > 0 ? Math.round((attempted / total) * 100) : 0
          const complete = attempted === total && total > 0
          const noData   = attempted === 0

          return (
            <div key={label}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold text-gray-700">
                  {label} {complete && '✅'}
                </span>
                <span className={`text-xs font-bold ${noData ? 'text-gray-300' : 'text-purple-600'}`}>
                  {attempted}/{total}
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    noData
                      ? 'bg-gray-200'
                      : complete
                        ? 'bg-green-400'
                        : 'bg-gradient-to-r from-purple-400 to-pink-400'
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: TypeScript エラーがないことを確認する**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: コミット**

```bash
git add src/components/MonthlyProgress.tsx
git commit -m "feat: add MonthlyProgress component"
```

---

## Task 8: ProgressPage 全面リニューアル

**Files:**
- Modify: `src/pages/ProgressPage.tsx`

- [ ] **Step 1: ProgressPage を全面書き換えする**

`src/pages/ProgressPage.tsx` を以下の内容に置き換える。

```tsx
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { stories } from '../data/stories'
import { storiesNov } from '../data/stories-nov'
import { storiesDec } from '../data/stories-dec'
import { storiesJan } from '../data/stories-jan'
import { storiesFeb } from '../data/stories-feb'
import { storiesMar } from '../data/stories-mar'
import { storiesApr } from '../data/stories-apr'
import { storiesMay } from '../data/stories-may'
import { storiesJun } from '../data/stories-jun'
import { DeviationCard }     from '../components/DeviationCard'
import { WeakCategoryCard }  from '../components/WeakCategoryCard'
import { AccuracyChart }     from '../components/AccuracyChart'
import { MonthlyProgress }   from '../components/MonthlyProgress'
import type { MonthDef } from '../utils/analytics'

/** 月別ストーリー定義（MonthlyProgress + analytics に渡す） */
const MONTHS: MonthDef[] = [
  { label: '11月', stories: storiesNov },
  { label: '12月', stories: storiesDec },
  { label: '1月',  stories: storiesJan },
  { label: '2月',  stories: storiesFeb },
  { label: '3月',  stories: storiesMar },
  { label: '4月',  stories: storiesApr },
  { label: '5月',  stories: storiesMay },
  { label: '6月',  stories: storiesJun },
]

/** 全ストーリー（偏差値の難易度別計算に使用） */
const ALL_STORIES = [
  ...stories,
  ...storiesNov,
  ...storiesDec,
  ...storiesJan,
  ...storiesFeb,
  ...storiesMar,
  ...storiesApr,
  ...storiesMay,
  ...storiesJun,
]

export function ProgressPage() {
  const navigate = useNavigate()
  const { data } = useProgress()
  const results = data.results

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 p-4">
      <div className="max-w-lg mx-auto">
        <button
          onClick={() => navigate('/')}
          className="text-gray-500 mb-4"
        >
          ← もどる
        </button>
        <h1 className="text-xl font-bold text-purple-700 mb-4">📊 きろく・ぶんせき</h1>

        {/* ① 偏差値カード */}
        <DeviationCard results={results} stories={ALL_STORIES} />

        {/* ② 苦手カテゴリ TOP3 */}
        <WeakCategoryCard results={results} stories={ALL_STORIES} />

        {/* ③ 正答率推移グラフ */}
        <AccuracyChart results={results} />

        {/* ④ 月別進捗バー */}
        <MonthlyProgress results={results} months={MONTHS} />

        {/* ⑤ 問題別スコア一覧（既存） */}
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h2 className="text-sm font-bold text-gray-600 mb-3">もんだい別さいこうスコア</h2>
          {ALL_STORIES.map(s => {
            const rs   = results.filter(r => r.storyId === s.id)
            const best = rs.length > 0 ? Math.max(...rs.map(r => r.score)) : null
            const bestTotal = rs.length > 0
              ? (rs.find(r => r.score === best)?.total ?? s.questions.length)
              : s.questions.length
            return (
              <div
                key={s.id}
                className="flex items-center gap-2 py-2 border-b border-gray-100 last:border-0"
              >
                <span className="text-xl">{s.icon}</span>
                <span className="flex-1 text-sm text-gray-700">{s.title}</span>
                <span className="text-sm font-bold text-purple-600">
                  {best !== null ? `${best}/${bestTotal}` : '—'}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: TypeScript エラーがないことを確認する**

```bash
npx tsc --noEmit
```

Expected: エラーなし

- [ ] **Step 3: コミット**

```bash
git add src/pages/ProgressPage.tsx
git commit -m "feat: rewrite ProgressPage with 5-section analytics dashboard"
```

---

## Task 9: ビルド確認 + デプロイ

**Files:**
- 変更なし（検証のみ）

- [ ] **Step 1: 全テストを実行する**

```bash
npx vitest run
```

Expected: 全テスト PASS（既存テスト + analytics.test.ts）

- [ ] **Step 2: プロダクションビルドを実行する**

```bash
npm run build
```

Expected:
```
✓ built in ...s
dist/index.html
dist/assets/...
```
エラーなし

- [ ] **Step 3: ローカルプレビューで動作確認する**

```bash
npm run preview
```

ブラウザで `http://localhost:4173/ohanashi-kioku-app/` を開き、以下を確認する。
- ProgressPage（📊 きろく・ぶんせき）を開く
- ① 偏差値カード：「あと N もん といてね！」または偏差値数値が表示される
- ② 苦手カテゴリ：「もっとといてね！」または TOP3 リストが表示される
- ③ グラフ：「まだグラフが つくれません」または折れ線グラフが表示される
- ④ 月別進捗：11月〜6月のバーが表示される
- ⑤ 問題別スコア一覧：全ストーリーのリストが表示される

- [ ] **Step 4: GitHub にプッシュして GitHub Pages にデプロイする**

```bash
git push origin main
```

GitHub Actions が自動ビルド & デプロイを実行する。
`https://github.com/<owner>/ohanashi-kioku-app/actions` でステータスを確認する。

デプロイ完了後、`https://<owner>.github.io/ohanashi-kioku-app/progress` を開いて動作確認する。

---

## 実装チェックリスト（完了後の確認項目）

- [ ] `npx tsc --noEmit` → エラーなし
- [ ] `npx vitest run` → 全 PASS
- [ ] `npm run build` → エラーなし
- [ ] DeviationCard: データ不足時に「あと N もん といてね！」を表示
- [ ] DeviationCard: 5 件以上のデータがある場合に偏差値・スケールバー・難易度別を表示
- [ ] WeakCategoryCard: データ不足時に適切なメッセージを表示
- [ ] WeakCategoryCard: 弱点カテゴリを正答率低い順で最大 3 件表示
- [ ] AccuracyChart: データが 1 日分以下の場合に「まだグラフが つくれません」を表示
- [ ] AccuracyChart: 14 日間の折れ線グラフを SVG で表示
- [ ] MonthlyProgress: 11 月〜6 月の 8 ヶ月分を表示
- [ ] MonthlyProgress: 完了月に ✅ マークを表示
- [ ] 問題別スコア一覧: 全ストーリーを表示（既存機能を維持）
- [ ] GitHub Pages デプロイ成功
