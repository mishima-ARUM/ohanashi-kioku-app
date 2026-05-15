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
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - days)

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
  const acc: Record<0 | 1 | 2 | 3, { correct: number; total: number }> = {
    0: { correct: 0, total: 0 },
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
