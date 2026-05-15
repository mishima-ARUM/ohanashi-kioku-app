import { useState, useCallback, useEffect } from 'react'
import { loadProgress, saveResult } from '../utils/storage'
import { saveResultToFirestore, loadResultsFromFirestore } from '../lib/firestoreDb'
import type { ProgressData, QuizResult } from '../types'

export function useProgress() {
  const [data, setData] = useState<ProgressData>(() => loadProgress())
  const [synced, setSynced] = useState(false)

  // 起動時に Firestore から最新データを取得してローカルを上書き
  useEffect(() => {
    loadResultsFromFirestore()
      .then(results => {
        setData({ results })
        setSynced(true)
      })
      .catch(err => {
        // オフライン等で失敗した場合は localStorage のデータで継続
        console.warn('Firestore load failed, using local data:', err)
        setSynced(true)
      })
  }, [])

  const addResult = useCallback((result: QuizResult) => {
    // ローカルに即時反映
    saveResult(result)
    setData(loadProgress())

    // Firestore にも非同期で保存
    saveResultToFirestore(result).catch(err => {
      console.warn('Firestore save failed:', err)
    })
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

  return { data, addResult, getStoryBestScore, getPracticedDates, synced }
}
