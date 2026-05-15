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
  imageUrl?: string  // フリー素材イラスト URL（あるときは emoji より優先表示）
}

// 問題のカテゴリ分類（9種類）
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
  category?: QuestionCategory   // スクリプトで全問題にタグ付け済み（移行前はundefined）
}

export interface Story {
  id: string
  title: string
  difficulty: 0 | 1 | 2 | 3
  estimatedMinutes: number
  releaseDate?: string  // 'MM-DD' 形式 例: '11-01'
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
