import type { ProgressData, QuizResult } from '../types'

const KEY = 'ohanashi-progress'

export function loadProgress(): ProgressData {
  const raw = localStorage.getItem(KEY)
  if (!raw) return { results: [] }
  try { return JSON.parse(raw) as ProgressData }
  catch { return { results: [] } }
}

export function saveResult(result: QuizResult): void {
  const data = loadProgress()
  data.results.push(result)
  localStorage.setItem(KEY, JSON.stringify(data))
}

export function clearProgress(): void {
  localStorage.removeItem(KEY)
}
