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
  it('結果が 10 件未満なら 0 を返す', () => {
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
      { category: '色の記憶'      as const, correct: 8, total: 10, accuracy: 0.8 },
      { category: '数の記憶'      as const, correct: 3, total: 10, accuracy: 0.3 },
      { category: '登場人物'      as const, correct: 5, total: 10, accuracy: 0.5 },
      { category: '場所'          as const, correct: 1, total: 10, accuracy: 0.1 },
      { category: '行動・できごと' as const, correct: 7, total: 10, accuracy: 0.7 },
    ]
    const weak = getWeakCategories(stats)
    expect(weak).toHaveLength(3)
    expect(weak[0].category).toBe('場所')
    expect(weak[1].category).toBe('数の記憶')
    expect(weak[2].category).toBe('登場人物')
  })

  it('minAttempts 未満のカテゴリを除外する', () => {
    const stats = [
      { category: '色の記憶' as const, correct: 0, total: 3, accuracy: 0 },
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
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
    const today = new Date().toISOString().slice(0, 10)

    const results = [
      makeResult({ date: `${yesterday}T10:00:00.000Z`, score: 4, total: 5 }),
      makeResult({ date: `${yesterday}T15:00:00.000Z`, score: 2, total: 5 }),
      makeResult({ date: `${today}T10:00:00.000Z`, score: 5, total: 5 }),
    ]
    const daily = getDailyAccuracy(results)
    const dayBefore = daily.find(d => d.date === yesterday)
    const dayToday = daily.find(d => d.date === today)
    expect(dayBefore?.accuracy).toBeCloseTo(0.6)
    expect(dayToday?.accuracy).toBeCloseTo(1.0)
  })

  it('結果のある日だけ含む', () => {
    const recentDate = new Date(Date.now() - 86400000 * 3).toISOString().slice(0, 10)
    const results = [
      makeResult({ date: `${recentDate}T00:00:00.000Z`, score: 3, total: 5 }),
    ]
    const daily = getDailyAccuracy(results, 14)
    expect(daily.some(d => d.date === recentDate)).toBe(true)
    expect(daily.every(d => d.accuracy !== undefined)).toBe(true)
  })
})

// ────────────────────────────────────────────
// getMonthProgress
// ────────────────────────────────────────────

describe('getMonthProgress', () => {
  it('各月の挑戦済みストーリー数と総数を返す', () => {
    const story1 = makeStory({ id: 'nov-001' })
    const story2 = makeStory({ id: 'nov-002' })
    const months = [
      { label: '11月', stories: [story1, story2] },
    ]
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
