import { useState, useCallback } from 'react'
import { loadProgress, saveResult } from '../utils/storage'
import type { ProgressData, QuizResult, QuestionType } from '../types'

export interface TypeAccuracy {
  type: QuestionType
  correct: number
  total: number
}

export function useProgress() {
  const [data, setData] = useState<ProgressData>(() => loadProgress())

  const addResult = useCallback((result: QuizResult) => {
    saveResult(result)
    setData(loadProgress())
  }, [])

  const getStoryBestScore = useCallback((storyId: string) => {
    const rs = data.results.filter(r => r.storyId === storyId)
    if (rs.length === 0) return null
    return Math.max(...rs.map(r => r.score))
  }, [data])

  const getPracticedDates = useCallback((): string[] => {
    const dates = new Set(data.results.map(r => r.date.slice(0, 10)))
    return Array.from(dates)
  }, [data])

  return { data, addResult, getStoryBestScore, getPracticedDates }
}
