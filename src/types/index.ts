export type QuestionType = 'illustration' | 'number' | 'color' | 'character'

export interface Option {
  id: string
  label: string
  emoji?: string
  color?: string
  correct: boolean
}

export interface Question {
  id: string
  type: QuestionType
  text: string
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
  selectedId: string
  correct: boolean
}

export interface QuizResult {
  storyId: string
  date: string
  score: number
  total: number
  answers: Answer[]
}

export interface ProgressData {
  results: QuizResult[]
}
