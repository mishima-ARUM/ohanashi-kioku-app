// Marker answer types
export type MarkColor = 'red' | 'blue' | 'green' | 'yellow'
export type MarkShape = 'circle' | 'triangle' | 'cross' | 'double-circle'

export interface MarkerTask {
  instruction: string  // TTS読み上げ用の指示文
  optionId: string     // 正解の選択肢ID
  color: MarkColor     // 正解の色
  shape: MarkShape     // 正解の形
}

export interface MarkerSelection {
  optionId: string
  color: MarkColor
  shape: MarkShape
}

export interface Option {
  id: string
  label: string
  emoji?: string
}

export interface Question {
  id: string
  type: 'marker'
  text: string
  tasks: MarkerTask[]
  options: Option[]
  explanation: string
}

export interface Story {
  id: string
  title: string
  difficulty: 1 | 2 | 3
  estimatedMinutes: number
  icon: string
  story: string
  questions: Question[]
}

export interface Answer {
  questionId: string
  selections: MarkerSelection[]
  taskResults: boolean[]
  score: number      // 正解task数
  maxScore: number   // task総数
}

export interface QuizResult {
  storyId: string
  date: string
  score: number   // 全questionのtask正解数合計
  total: number   // 全questionのtask総数合計
  answers: Answer[]
}

export interface ProgressData {
  results: QuizResult[]
}
