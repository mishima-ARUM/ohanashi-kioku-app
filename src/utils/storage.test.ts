import { describe, it, expect, beforeEach } from 'vitest'
import { loadProgress, saveResult, clearProgress } from './storage'
import type { QuizResult } from '../types'

const sampleResult: QuizResult = {
  storyId: 'story-001', date: '2026-01-01T00:00:00Z',
  score: 2, total: 3,
  answers: [
    {
      questionId: 'q1',
      selections: [{ optionId: 'yellow', color: 'red', shape: 'circle' }],
      taskResults: [true],
      score: 1,
      maxScore: 1,
    },
    {
      questionId: 'q2',
      selections: [{ optionId: '5', color: 'red', shape: 'circle' }],
      taskResults: [true],
      score: 1,
      maxScore: 1,
    },
    {
      questionId: 'q3',
      selections: [],
      taskResults: [false],
      score: 0,
      maxScore: 1,
    },
  ],
}

beforeEach(() => clearProgress())

describe('loadProgress', () => {
  it('空のとき空のresultsを返す', () => {
    expect(loadProgress()).toEqual({ results: [] })
  })
  it('壊れたJSONのとき空のresultsを返す', () => {
    localStorage.setItem('ohanashi-progress', 'invalid')
    expect(loadProgress()).toEqual({ results: [] })
  })
})

describe('saveResult', () => {
  it('結果を保存して読み込める', () => {
    saveResult(sampleResult)
    expect(loadProgress().results).toHaveLength(1)
    expect(loadProgress().results[0].storyId).toBe('story-001')
  })
  it('複数の結果を蓄積できる', () => {
    saveResult(sampleResult)
    saveResult({ ...sampleResult, date: '2026-01-02T00:00:00Z' })
    expect(loadProgress().results).toHaveLength(2)
  })
})
