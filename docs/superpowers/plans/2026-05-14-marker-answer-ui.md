# Marker Answer UI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 4 existing answer component types with a single 3-step Marker Answer UI (① 回答選択 → ② 色選択 → ③ 形選択) that mimics real exam format and supports per-combination partial scoring.

**Architecture:** New `MarkerAnswerPanel` component manages its own pending/confirmed state and exposes a ref handle (`getConfirmed()`) so QuizPage can read selections on timeout. All 15 questions are rewritten to the `marker` type with `tasks: MarkerTask[]` for scoring. The old 4 answer component files are deleted.

**Tech Stack:** React 18 + TypeScript, Tailwind CSS, Vitest for tests.

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `src/types/index.ts` | Modify | Add MarkColor/MarkShape/MarkerTask/MarkerSelection; update Question/Answer/QuizResult; remove QuestionType |
| `src/utils/scoreAnswer.ts` | Create | Pure scoring function `scoreAnswer(tasks, selections) → boolean[]` |
| `src/utils/scoreAnswer.test.ts` | Create | TDD tests for scoreAnswer |
| `src/utils/storage.test.ts` | Modify | Update sampleResult to new Answer/QuizResult shape |
| `src/components/answers/MarkerAnswerPanel.tsx` | Create | 3-step answer UI with forwardRef handle |
| `src/pages/QuizPage.tsx` | Modify | Use MarkerAnswerPanel, update TTS/scoring/timeout logic |
| `src/pages/ResultPage.tsx` | Modify | Show taskResults per question |
| `src/pages/ProgressPage.tsx` | Modify | Remove type-based stats (all questions now 'marker') |
| `src/hooks/useProgress.ts` | Modify | Remove TypeAccuracy / QuestionType import |
| `src/data/stories.ts` | Modify | Rewrite all 15 stories to marker format |
| `src/components/answers/IllustrationAnswer.tsx` | Delete | Replaced by MarkerAnswerPanel |
| `src/components/answers/NumberAnswer.tsx` | Delete | Replaced by MarkerAnswerPanel |
| `src/components/answers/ColorAnswer.tsx` | Delete | Replaced by MarkerAnswerPanel |
| `src/components/answers/CharacterAnswer.tsx` | Delete | Replaced by MarkerAnswerPanel |

---

## Task 1: Core types + scoreAnswer utility (TDD)

**Files:**
- Modify: `src/types/index.ts`
- Create: `src/utils/scoreAnswer.ts`
- Create: `src/utils/scoreAnswer.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/utils/scoreAnswer.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { scoreAnswer } from './scoreAnswer'
import type { MarkerTask, MarkerSelection } from '../types'

const tasks: MarkerTask[] = [
  { instruction: 'test1', optionId: 'a', color: 'red', shape: 'circle' },
  { instruction: 'test2', optionId: 'b', color: 'blue', shape: 'triangle' },
]

describe('scoreAnswer', () => {
  it('空のselectionsはすべてfalse', () => {
    expect(scoreAnswer(tasks, [])).toEqual([false, false])
  })

  it('完全一致するselectionがあればtrue', () => {
    const selections: MarkerSelection[] = [
      { optionId: 'a', color: 'red', shape: 'circle' },
    ]
    expect(scoreAnswer(tasks, selections)).toEqual([true, false])
  })

  it('optionIdが合っても色・形が違えばfalse', () => {
    const selections: MarkerSelection[] = [
      { optionId: 'a', color: 'blue', shape: 'circle' }, // wrong color
    ]
    expect(scoreAnswer(tasks, selections)).toEqual([false, false])
  })

  it('両taskともに正解できる', () => {
    const selections: MarkerSelection[] = [
      { optionId: 'a', color: 'red', shape: 'circle' },
      { optionId: 'b', color: 'blue', shape: 'triangle' },
    ]
    expect(scoreAnswer(tasks, selections)).toEqual([true, true])
  })

  it('余分なselectionがあっても正解判定に影響しない', () => {
    const selections: MarkerSelection[] = [
      { optionId: 'z', color: 'green', shape: 'cross' }, // extra, wrong
      { optionId: 'a', color: 'red', shape: 'circle' },
    ]
    expect(scoreAnswer(tasks, selections)).toEqual([true, false])
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```
cd C:\Users\Surface06\ohanashi-kioku-app
npx vitest run src/utils/scoreAnswer.test.ts
```

Expected: FAIL with "Cannot find module './scoreAnswer'"

- [ ] **Step 3: Create scoreAnswer utility**

Create `src/utils/scoreAnswer.ts`:

```typescript
import type { MarkerTask, MarkerSelection } from '../types'

export function scoreAnswer(tasks: MarkerTask[], selections: MarkerSelection[]): boolean[] {
  return tasks.map(task =>
    selections.some(s =>
      s.optionId === task.optionId &&
      s.color === task.color &&
      s.shape === task.shape
    )
  )
}
```

- [ ] **Step 4: Update src/types/index.ts**

Replace the entire file with:

```typescript
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
```

- [ ] **Step 5: Run tests**

```
npx vitest run src/utils/scoreAnswer.test.ts
```

Expected: All 5 tests PASS.

- [ ] **Step 6: Commit**

```
git add src/types/index.ts src/utils/scoreAnswer.ts src/utils/scoreAnswer.test.ts
git commit -m "feat: add marker answer types and scoreAnswer utility"
```

---

## Task 2: Update storage tests for new Answer shape

**Files:**
- Modify: `src/utils/storage.test.ts`

- [ ] **Step 1: Update the test file**

Replace the entire `src/utils/storage.test.ts` with:

```typescript
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
```

- [ ] **Step 2: Run tests**

```
npx vitest run src/utils/storage.test.ts
```

Expected: All tests PASS (storage.ts itself doesn't change — it's type-agnostic JSON).

- [ ] **Step 3: Commit**

```
git add src/utils/storage.test.ts
git commit -m "test: update storage tests for new Answer/QuizResult shape"
```

---

## Task 3: Create MarkerAnswerPanel component

**Files:**
- Create: `src/components/answers/MarkerAnswerPanel.tsx`

- [ ] **Step 1: Create the component**

Create `src/components/answers/MarkerAnswerPanel.tsx`:

```typescript
import { forwardRef, useImperativeHandle, useState, useCallback } from 'react'
import type { Option, MarkColor, MarkShape, MarkerSelection } from '../../types'

export interface MarkerAnswerPanelHandle {
  getConfirmed: () => MarkerSelection[]
}

interface Props {
  options: Option[]
  disabled: boolean
  onSelect: (selections: MarkerSelection[]) => void
  onInteract?: () => void
}

const COLOR_CONFIG: { id: MarkColor; label: string; hex: string; emoji: string }[] = [
  { id: 'red',    label: 'あか',   hex: '#ef4444', emoji: '🔴' },
  { id: 'blue',   label: 'あお',   hex: '#3b82f6', emoji: '🔵' },
  { id: 'green',  label: 'みどり', hex: '#22c55e', emoji: '🟢' },
  { id: 'yellow', label: 'きいろ', hex: '#eab308', emoji: '🟡' },
]

const SHAPE_CONFIG: { id: MarkShape; label: string; symbol: string }[] = [
  { id: 'circle',        label: 'まる',       symbol: '○' },
  { id: 'triangle',      label: 'さんかく',   symbol: '△' },
  { id: 'cross',         label: 'ばつ',       symbol: '✕' },
  { id: 'double-circle', label: 'にじゅうまる', symbol: '◎' },
]

export const MarkerAnswerPanel = forwardRef<MarkerAnswerPanelHandle, Props>(
  function MarkerAnswerPanel({ options, disabled, onSelect, onInteract }, ref) {
    const [pendingOpt, setPendingOpt] = useState<string | null>(null)
    const [pendingColor, setPendingColor] = useState<MarkColor | null>(null)
    const [pendingShape, setPendingShape] = useState<MarkShape | null>(null)
    const [confirmed, setConfirmed] = useState<MarkerSelection[]>([])

    useImperativeHandle(ref, () => ({
      getConfirmed: () => confirmed,
    }), [confirmed])

    const tryAutoConfirm = useCallback(
      (opt: string | null, color: MarkColor | null, shape: MarkShape | null) => {
        if (opt && color && shape) {
          const newItem: MarkerSelection = { optionId: opt, color, shape }
          setConfirmed(prev => [...prev, newItem])
          setPendingOpt(null)
          setPendingColor(null)
          setPendingShape(null)
        }
      },
      []
    )

    const handleOptClick = (optId: string) => {
      if (disabled) return
      onInteract?.()
      const next = optId
      setPendingOpt(next)
      tryAutoConfirm(next, pendingColor, pendingShape)
    }

    const handleColorClick = (color: MarkColor) => {
      if (disabled) return
      onInteract?.()
      setPendingColor(color)
      tryAutoConfirm(pendingOpt, color, pendingShape)
    }

    const handleShapeClick = (shape: MarkShape) => {
      if (disabled) return
      onInteract?.()
      setPendingShape(shape)
      tryAutoConfirm(pendingOpt, pendingColor, shape)
    }

    const handleRemove = (index: number) => {
      setConfirmed(prev => prev.filter((_, i) => i !== index))
    }

    const pendingOptLabel = options.find(o => o.id === pendingOpt)

    return (
      <div className="flex flex-col gap-3">
        {/* ① こたえをえらぶ */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">①</span>
            <span className="text-xs font-bold text-gray-500">こたえをえらぶ</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {options.map(o => (
              <button
                key={o.id}
                onClick={() => handleOptClick(o.id)}
                className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all
                  ${pendingOpt === o.id
                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300'}
                  ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer active:scale-95'}`}
              >
                {o.emoji && <span className="text-2xl">{o.emoji}</span>}
                <span className="text-sm font-bold">{o.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ② いろをえらぶ */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">②</span>
            <span className="text-xs font-bold text-gray-500">いろをえらぶ</span>
          </div>
          <div className="flex gap-3 justify-center">
            {COLOR_CONFIG.map(c => (
              <button
                key={c.id}
                onClick={() => handleColorClick(c.id)}
                className={`flex flex-col items-center gap-1 transition-all
                  ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
              >
                <div
                  className={`w-12 h-12 rounded-full border-4 transition-all active:scale-90
                    ${pendingColor === c.id ? 'border-gray-900 shadow-lg scale-110' : 'border-transparent'}`}
                  style={{ backgroundColor: c.hex }}
                />
                <span className="text-xs text-gray-600">{c.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ③ かたちをえらぶ */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">③</span>
            <span className="text-xs font-bold text-gray-500">かたちをえらぶ</span>
          </div>
          <div className="flex gap-2 justify-center">
            {SHAPE_CONFIG.map(s => (
              <button
                key={s.id}
                onClick={() => handleShapeClick(s.id)}
                className={`flex flex-col items-center gap-1 transition-all
                  ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center text-2xl transition-all active:scale-90
                    ${pendingShape === s.id ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'}`}
                >
                  {s.symbol}
                </div>
                <span className="text-xs text-gray-600">{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* えらんだこたえ */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-3">
          <div className="text-xs font-bold text-amber-800 mb-2">📋 えらんだこたえ</div>

          {/* pending preview */}
          <div className="bg-green-50 border-2 border-dashed border-green-300 rounded-xl p-2 mb-2 min-h-[36px] flex items-center gap-2">
            {pendingOpt || pendingColor || pendingShape ? (
              <>
                {pendingOptLabel && (
                  <span className="text-sm font-bold text-gray-700">
                    {pendingOptLabel.emoji} {pendingOptLabel.label}
                  </span>
                )}
                {pendingColor && (
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: COLOR_CONFIG.find(c => c.id === pendingColor)?.hex }}
                  />
                )}
                {pendingShape && (
                  <span className="text-lg">{SHAPE_CONFIG.find(s => s.id === pendingShape)?.symbol}</span>
                )}
              </>
            ) : (
              <span className="text-xs text-gray-400">①②③をえらぶとここにひょうじされます</span>
            )}
          </div>

          {/* confirmed list */}
          {confirmed.length > 0 && (
            <div className="flex flex-col gap-1.5 mb-2">
              {confirmed.map((item, i) => {
                const opt = options.find(o => o.id === item.optionId)
                const colorCfg = COLOR_CONFIG.find(c => c.id === item.color)
                const shapeCfg = SHAPE_CONFIG.find(s => s.id === item.shape)
                return (
                  <div key={i} className="bg-white rounded-xl px-3 py-2 flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-800 flex-1">
                      {opt?.emoji} {opt?.label}
                    </span>
                    <div className="w-5 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: colorCfg?.hex }} />
                    <span className="text-xl">{shapeCfg?.symbol}</span>
                    <button
                      onClick={() => handleRemove(i)}
                      disabled={disabled}
                      className="bg-red-100 text-red-600 rounded-lg px-2 py-0.5 text-xs font-bold disabled:opacity-50"
                    >
                      消す
                    </button>
                  </div>
                )
              })}
            </div>
          )}

          <button
            onClick={() => onSelect(confirmed)}
            disabled={disabled || confirmed.length === 0}
            className="w-full py-3 rounded-xl font-bold text-base transition-all
              bg-gradient-to-r from-amber-400 to-orange-400 text-white
              disabled:from-gray-300 disabled:to-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed
              active:scale-98"
          >
            このこたえでけっていする →
          </button>
        </div>
      </div>
    )
  }
)
```

- [ ] **Step 2: Commit**

```
git add src/components/answers/MarkerAnswerPanel.tsx
git commit -m "feat: add MarkerAnswerPanel component"
```

---

## Task 4: Update QuizPage

**Files:**
- Modify: `src/pages/QuizPage.tsx`

- [ ] **Step 1: Replace QuizPage.tsx**

```typescript
import { useState, useEffect, useCallback, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { stories } from '../data/stories'
import { useTTS } from '../hooks/useTTS'
import { useQuizTimer } from '../hooks/useQuizTimer'
import { useProgress } from '../hooks/useProgress'
import { ProgressBar } from '../components/ProgressBar'
import { MarkerAnswerPanel, type MarkerAnswerPanelHandle } from '../components/answers/MarkerAnswerPanel'
import { scoreAnswer } from '../utils/scoreAnswer'
import type { Answer, MarkerSelection } from '../types'

type Phase = 'reading' | 'selecting' | 'timeout'

export function QuizPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const story = stories.find(s => s.id === id)!
  const { speak, stop } = useTTS()
  const { addResult } = useProgress()

  const [qIdx, setQIdx] = useState(0)
  const [phase, setPhase] = useState<Phase>('reading')
  const [, setAnswers] = useState<Answer[]>([])

  const qIdxRef = useRef(0)
  const answersRef = useRef<Answer[]>([])
  const earlyPressRef = useRef(false)
  const startQuestionRef = useRef<(index: number) => void>(() => {})
  const panelRef = useRef<MarkerAnswerPanelHandle>(null)

  const { timeLeft, start: startTimer, reset: resetTimer } = useQuizTimer(20, () => handleTimeoutRef.current())

  useEffect(() => () => { stop() }, [stop])

  const finishQuiz = useCallback((finalAnswers: Answer[]) => {
    const score = finalAnswers.reduce((s, a) => s + a.score, 0)
    const total = finalAnswers.reduce((s, a) => s + a.maxScore, 0)
    addResult({
      storyId: id!,
      date: new Date().toISOString(),
      score,
      total,
      answers: finalAnswers,
    })
    navigate(`/result/${id}`)
  }, [addResult, id, navigate])

  const advanceAfterAnswer = useCallback((newAnswers: Answer[]) => {
    setPhase('timeout')
    speak('やめ', () => {
      setTimeout(() => {
        const next = qIdxRef.current + 1
        if (next >= story.questions.length) {
          finishQuiz(newAnswers)
        } else {
          qIdxRef.current = next
          setQIdx(next)
          startQuestionRef.current(next)
        }
      }, 1000)
    })
  }, [story.questions.length, speak, finishQuiz])

  const recordAnswer = useCallback((selections: MarkerSelection[]) => {
    const q = story.questions[qIdxRef.current]
    const taskResults = scoreAnswer(q.tasks, selections)
    const score = taskResults.filter(Boolean).length
    const answer: Answer = {
      questionId: q.id,
      selections,
      taskResults,
      score,
      maxScore: q.tasks.length,
    }
    const newAnswers = [...answersRef.current, answer]
    answersRef.current = newAnswers
    setAnswers(newAnswers)
    return newAnswers
  }, [story.questions])

  const handleDecide = useCallback((selections: MarkerSelection[]) => {
    resetTimer()
    const newAnswers = recordAnswer(selections)
    advanceAfterAnswer(newAnswers)
  }, [resetTimer, recordAnswer, advanceAfterAnswer])

  const handleTimeout = useCallback(() => {
    const currentConfirmed = panelRef.current?.getConfirmed() ?? []
    const newAnswers = recordAnswer(currentConfirmed)
    advanceAfterAnswer(newAnswers)
  }, [recordAnswer, advanceAfterAnswer])

  // keep ref so useQuizTimer always calls latest version
  const handleTimeoutRef = useRef(handleTimeout)
  handleTimeoutRef.current = handleTimeout

  const startQuestion = useCallback((index: number) => {
    const q = story.questions[index]
    earlyPressRef.current = false
    setPhase('reading')
    const taskLines = q.tasks.map(t => t.instruction).join('。')
    setTimeout(() => {
      speak(`問題${index + 1}。${q.text}。${taskLines}`, () => {
        if (earlyPressRef.current) {
          const newAnswers = recordAnswer([])
          speak('きちんと読み上げるまで、手を膝の上に置いてお待ちください。問題はスキップします。', () => {
            const next = index + 1
            if (next >= story.questions.length) {
              finishQuiz(newAnswers)
            } else {
              qIdxRef.current = next
              setQIdx(next)
              startQuestionRef.current(next)
            }
          })
        } else {
          speak('回答を選択してください。はじめ', () => {
            setPhase('selecting')
          })
        }
      })
    }, 1000)
  }, [story.questions, speak, recordAnswer, finishQuiz])
  startQuestionRef.current = startQuestion

  useEffect(() => {
    if (phase === 'selecting') startTimer()
  }, [phase]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    startQuestion(0)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleInteract = () => {
    if (phase === 'reading') earlyPressRef.current = true
  }

  const currentQ = story.questions[qIdx]
  const isDisabled = phase === 'timeout'

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-4">
      <div className="max-w-lg mx-auto">
        <div className="mb-4">
          <ProgressBar current={qIdx} total={story.questions.length} />
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm mb-3">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
              もんだい {qIdx + 1}
            </span>
            {phase === 'selecting' && (
              <span className={`text-lg font-bold tabular-nums ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-gray-500'}`}>
                ⏱ {timeLeft}びょう
              </span>
            )}
            {phase === 'reading' && (
              <span className="text-sm text-gray-400 animate-pulse">🔊 よみあげ中...</span>
            )}
            {phase === 'timeout' && (
              <span className="text-sm font-bold text-red-500">やめ！</span>
            )}
          </div>

          <p className="text-xl font-bold text-gray-800 mb-2 text-center leading-relaxed">
            {currentQ.text}
          </p>

          {currentQ.tasks.map((task, i) => (
            <p key={i} className="text-xs text-center text-purple-600 bg-purple-50 rounded-lg px-3 py-1 mb-1">
              {task.instruction}
            </p>
          ))}
        </div>

        <MarkerAnswerPanel
          ref={panelRef}
          options={currentQ.options}
          disabled={isDisabled}
          onSelect={handleDecide}
          onInteract={handleInteract}
        />
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```
git add src/pages/QuizPage.tsx
git commit -m "feat: update QuizPage to use MarkerAnswerPanel and new scoring"
```

---

## Task 5: Update ResultPage, ProgressPage, useProgress

**Files:**
- Modify: `src/pages/ResultPage.tsx`
- Modify: `src/pages/ProgressPage.tsx`
- Modify: `src/hooks/useProgress.ts`

- [ ] **Step 1: Update ResultPage.tsx**

Replace `src/pages/ResultPage.tsx`:

```typescript
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { stories } from '../data/stories'
import { useProgress } from '../hooks/useProgress'

export function ResultPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data } = useProgress()
  const story = stories.find(s => s.id === id)!

  const latestResult = [...data.results]
    .filter(r => r.storyId === id)
    .sort((a, b) => b.date.localeCompare(a.date))[0]

  useEffect(() => {
    if (!latestResult) navigate('/')
  }, [latestResult, navigate])

  if (!latestResult) return null

  const { score, total, answers } = latestResult
  const pct = total > 0 ? Math.round((score / total) * 100) : 0
  const isPerfect = score === total

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-3xl p-6 shadow-sm mb-4 text-center">
          <div className="text-6xl mb-2">{isPerfect ? '🎉' : score >= total / 2 ? '😊' : '😢'}</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{story.title}</h1>
          <div className="text-4xl font-bold text-purple-600 my-3">
            {score} / {total} せいかい！
          </div>
          <div className="text-sm text-gray-400 mb-1">（くみあわせ正解数）</div>
          <div className="text-lg text-gray-500">{pct}%</div>
          {isPerfect && <p className="text-yellow-500 font-bold mt-2">🌟 ぜんもんせいかい！すごい！</p>}
        </div>

        <div className="flex flex-col gap-3 mb-6">
          {story.questions.map((q, i) => {
            const ans = answers.find(a => a.questionId === q.id)
            const taskResults = ans?.taskResults ?? q.tasks.map(() => false)
            const allCorrect = taskResults.every(Boolean)
            const anyCorrect = taskResults.some(Boolean)
            const borderColor = allCorrect ? 'border-green-300' : anyCorrect ? 'border-yellow-300' : 'border-red-300'
            return (
              <div key={q.id} className={`bg-white rounded-2xl p-4 border-2 ${borderColor}`}>
                <div className="flex items-start gap-2">
                  <span className="text-xl">{allCorrect ? '✅' : anyCorrect ? '🔶' : '❌'}</span>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-700">もんだい{i + 1}: {q.text}</p>
                    {q.tasks.length > 1 && (
                      <div className="mt-1 flex flex-col gap-0.5">
                        {q.tasks.map((task, ti) => (
                          <p key={ti} className="text-xs text-gray-500">
                            {taskResults[ti] ? '✅' : '❌'} {task.instruction}
                          </p>
                        ))}
                      </div>
                    )}
                    {!allCorrect && (
                      <p className="text-xs text-blue-600 mt-1">💡 {q.explanation}</p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col gap-3">
          <button onClick={() => navigate(`/story/${id}`)}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-bold text-lg shadow active:scale-95">
            🔁 もういちどやる
          </button>
          <button onClick={() => navigate('/')}
            className="w-full py-4 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold text-lg">
            🏠 ホームへ
          </button>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Update useProgress.ts**

Replace `src/hooks/useProgress.ts`:

```typescript
import { useState, useCallback } from 'react'
import { loadProgress, saveResult } from '../utils/storage'
import type { ProgressData, QuizResult } from '../types'

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
```

- [ ] **Step 3: Update ProgressPage.tsx**

Replace `src/pages/ProgressPage.tsx`:

```typescript
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { stories } from '../data/stories'

export function ProgressPage() {
  const navigate = useNavigate()
  const { data, getPracticedDates } = useProgress()
  const results = data.results

  const totalAttempts = results.length
  const overallCorrect = results.reduce((s, r) => s + r.score, 0)
  const overallTotal = results.reduce((s, r) => s + r.total, 0)
  const overallPct = overallTotal > 0 ? Math.round((overallCorrect / overallTotal) * 100) : 0
  const practicedDates = getPracticedDates()

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 p-4">
      <div className="max-w-lg mx-auto">
        <button onClick={() => navigate('/')} className="text-gray-500 mb-4">← もどる</button>
        <h1 className="text-xl font-bold text-purple-700 mb-4">📊 きろく・ぶんせき</h1>

        <div className="bg-white rounded-3xl p-5 shadow-sm mb-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600">{totalAttempts}</div>
              <div className="text-xs text-gray-500">ちょうせん</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">{overallPct}%</div>
              <div className="text-xs text-gray-500">せいかいりつ</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-500">{practicedDates.length}</div>
              <div className="text-xs text-gray-500">れんしゅうび</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h2 className="text-sm font-bold text-gray-600 mb-3">もんだい別さいこうスコア</h2>
          {stories.map(s => {
            const rs = results.filter(r => r.storyId === s.id)
            const best = rs.length > 0 ? Math.max(...rs.map(r => r.score)) : null
            const bestTotal = rs.length > 0
              ? rs.find(r => r.score === best)?.total ?? s.questions.length
              : s.questions.length
            return (
              <div key={s.id} className="flex items-center gap-2 py-2 border-b border-gray-100 last:border-0">
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

- [ ] **Step 4: Commit**

```
git add src/pages/ResultPage.tsx src/pages/ProgressPage.tsx src/hooks/useProgress.ts
git commit -m "feat: update result/progress pages for marker answer scoring"
```

---

## Task 6: Rewrite stories.ts

**Files:**
- Modify: `src/data/stories.ts`

All questions use `type: 'marker'`, 1 task each, `color: 'red'`, `shape: 'circle'`.  
Instruction for all: `'ただしいこたえをえらんで、あかでまるをおしてください'`  
Options: remove `correct` and `color` fields; add `emoji` where helpful (color options get color-circle emoji).

- [ ] **Step 1: Replace src/data/stories.ts**

```typescript
import type { Story } from '../types'

const INS = 'ただしいこたえをえらんで、あかでまるをおしてください'

export const stories: Story[] = [
  // ===== ⭐ やさしい（5問） =====
  {
    id: 'story-001', title: 'うさぎのおさんぽ', difficulty: 1,
    estimatedMinutes: 2, icon: '🐰',
    story: 'ある晴れた朝のことです。白いうさぎのミミちゃんは、黄色いぼうしをかぶって、大きなかごをもって、公園へおさんぽに出かけました。そこには赤いチューリップが五本、きれいにさいていました。ミミちゃんがベンチにこしをかけてやすんでいると、りすのりっちゃんがやってきました。りっちゃんは「ミミちゃん、これをどうぞ」といって、どんぐりを三つわたしてくれました。ミミちゃんは「ありがとう、とってもうれしいな」といって、にっこりわらいました。ふたりはしばらくいっしょに、はなをみてたのしみました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'ミミちゃんのぼうしはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'yellow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「黄色いぼうし」をかぶっていました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'チューリップはなんぼんさいていましたか？',
        tasks: [{ instruction: INS, optionId: '5', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
        ],
        explanation: '「赤いチューリップが五本」さいていました。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'りっちゃんはどんぐりをいくつくれましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「どんぐりを三つ」わたしてくれました。',
      },
    ],
  },
  {
    id: 'story-002', title: 'ねこのおかいもの', difficulty: 1,
    estimatedMinutes: 2, icon: '🐱',
    story: 'ねこのタマちゃんは、おかあさんに「スーパーへいって、にんじんとたまごをかってきてね」とたのまれました。タマちゃんは青いかごをもってでかけました。スーパーにつくと、にんじんを二本とたまごを六こかごにいれました。レジのまえで、いぬのコロくんにばったりあいました。あかいぼうしをかぶって、しっぽをふってよろこんでくれました。タマちゃんは「またあそぼうね」とあいさつして、おうちへかえりました。おかあさんは「ありがとう、じょうずにかえてきたね」とほめてくれました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'タマちゃんのかごはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'blue', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'pink',   label: 'ぴんく', emoji: '🩷' },
        ],
        explanation: '「青いかご」をもっていました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'たまごはなんこかいましたか？',
        tasks: [{ instruction: INS, optionId: '6', color: 'red', shape: 'circle' }],
        options: [
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
          { id: '8', label: '8', emoji: '8️⃣' },
        ],
        explanation: '「たまごを六こ」かごにいれました。',
      },
    ],
  },
  {
    id: 'story-003', title: 'くまのあさごはん', difficulty: 1,
    estimatedMinutes: 2, icon: '🐻',
    story: 'くまのクーちゃんは、まいあさ六じにおきます。きょうもげんきにおきると、まずかおをあらいました。それからおかあさんといっしょにあさごはんをつくりました。メニューはパンとスープとサラダです。クーちゃんはパンがだいすきで、パンをふたつたべました。たべおわると、「ごちそうさまでした」とげんきよくいいました。おかあさんは「えらいね、クーちゃん」とほめてくれました。クーちゃんはにこにこしながら、きょうも一日がんばろうとおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'クーちゃんはパンをいくつたべましたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '「パンをふたつ」たべました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'あさごはんのメニューにないものはどれですか？',
        tasks: [{ instruction: INS, optionId: 'd', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'パン',   emoji: '🍞' },
          { id: 'b', label: 'スープ', emoji: '🍲' },
          { id: 'c', label: 'サラダ', emoji: '🥗' },
          { id: 'd', label: 'ごはん', emoji: '🍚' },
        ],
        explanation: 'メニューは「パンとスープとサラダ」でした。ごはんはありませんでした。',
      },
    ],
  },
  {
    id: 'story-004', title: 'いぬのおてつだい', difficulty: 1,
    estimatedMinutes: 2, icon: '🐶',
    story: 'いぬのシロくんは、土曜日のあさ、おかあさんのおてつだいをすることにしました。まず、おちゃわんをふたつあらいました。つぎに、みどりのぞうきんでテーブルをふきました。さいごに、げんかんのそうじをしました。三つのおてつだいをぜんぶおわると、おかあさんが「シロくん、ありがとう。じょうずにできたね」といって、シロくんのだいすきなりんごを四つくれました。シロくんはにこにこしながら、りんごをおいしくたべました。またおてつだいをしようとおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'シロくんがつかったぞうきんはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'white',  label: 'しろ',   emoji: '⬜' },
        ],
        explanation: '「みどりのぞうきん」でテーブルをふきました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'おかあさんはりんごをいくつくれましたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「りんごを四つ」くれました。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'シロくんがさいごにしたことはどれですか？',
        tasks: [{ instruction: INS, optionId: 'c', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'おちゃわんあらい', emoji: '🍽️' },
          { id: 'b', label: 'テーブルふき',     emoji: '🧽' },
          { id: 'c', label: 'げんかんそうじ',   emoji: '🧹' },
          { id: 'd', label: 'りょうり',         emoji: '🍳' },
        ],
        explanation: '「さいごに、げんかんのそうじをしました」とあります。',
      },
    ],
  },
  {
    id: 'story-005', title: 'たぬきのはなや', difficulty: 1,
    estimatedMinutes: 2, icon: '🦝',
    story: 'たぬきのポンちゃんは、おにわにさいているお花でおはなやさんごっこをすることにしました。あかいバラを三本、しろいひまわりを二本、むらさきのすみれを五本あつめました。きれいにならべると、ねこのミケちゃんとくまのグーちゃんがやってきました。ミケちゃんは「あかいバラをください」といいました。グーちゃんは「むらさきのすみれをふたつください」とたのみました。ポンちゃんはにこにこしながら、それぞれのお花をわたしました。ふたりはありがとうといって、うれしそうにかえっていきました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'むらさきのすみれはなんぼんありましたか？',
        tasks: [{ instruction: INS, optionId: '5', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「むらさきのすみれを五本」あつめました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'あかいバラをかったのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'mike', color: 'red', shape: 'circle' }],
        options: [
          { id: 'pon',  label: 'ポンちゃん', emoji: '🦝' },
          { id: 'mike', label: 'ミケちゃん', emoji: '🐱' },
          { id: 'goo',  label: 'グーちゃん', emoji: '🐻' },
        ],
        explanation: '「ミケちゃんは「あかいバラをください」といいました」とあります。',
      },
    ],
  },

  // ===== ⭐⭐ ふつう（5問） =====
  {
    id: 'story-006', title: 'くまのピクニック', difficulty: 2,
    estimatedMinutes: 3, icon: '🧺',
    story: 'はれた日曜日のことです。くまのクーちゃん、うさぎのミミちゃん、ねこのタマちゃんの三人は、こうえんへピクニックにでかけました。クーちゃんはおにぎりをみっつ、ミミちゃんはオレンジジュースをふたつ、タマちゃんはサンドイッチをよっつもってきました。こうえんにつくと、みんなはきれいなしばふのうえにレジャーシートをひいて、まずおにぎりとサンドイッチをたべ、そのあとジュースをのみました。「おそとでたべるとおいしいね」とタマちゃんがいいました。クーちゃんとミミちゃんもにこにこしてうなずきました。こうえんにはかわいいチョウチョウもとんでいて、みんなはきれいだなとおもいました。おひるのあと、三人でおにごっこをしました。クーちゃんがおにになり、さいしょにミミちゃんをつかまえ、つぎにタマちゃんをつかまえました。たくさんあそんでつかれると、みんなはベンチでひとやすみしました。かえりに、みんなでごみをひろってこうえんをきれいにしてかえりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'タマちゃんはサンドイッチをいくつもってきましたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「タマちゃんはサンドイッチをよっつ」もってきました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'おにごっこでさいしょにつかまえられたのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'mimi', color: 'red', shape: 'circle' }],
        options: [
          { id: 'koo',  label: 'クーちゃん', emoji: '🐻' },
          { id: 'mimi', label: 'ミミちゃん', emoji: '🐰' },
          { id: 'tama', label: 'タマちゃん', emoji: '🐱' },
        ],
        explanation: '「さいしょにミミちゃんをつかまえ」とあります。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'たべたじゅんばんとしてただしいものはどれですか？',
        tasks: [{ instruction: INS, optionId: 'a', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'おにぎり・サンドイッチ→ジュース', emoji: '🍙' },
          { id: 'b', label: 'ジュース→おにぎり',               emoji: '🥤' },
          { id: 'c', label: 'サンドイッチだけ',                emoji: '🥪' },
          { id: 'd', label: 'ジュース→サンドイッチ',           emoji: '🥤' },
        ],
        explanation: '「まずおにぎりとサンドイッチをたべ、そのあとジュースをのみました」とあります。',
      },
    ],
  },
  {
    id: 'story-007', title: 'きつねとどんぐり', difficulty: 2,
    estimatedMinutes: 3, icon: '🦊',
    story: 'きつねのコンちゃんは、あかいずきんをかぶり、みどりのかごをもってあきのもりでどんぐりをあつめていました。もりのなかでうさぎのピョンちゃんにあいました。ピョンちゃんも黄色いかごをもっていて、「いっしょにあつめようよ」といいました。ふたりでちからをあわせてどんぐりをあつめると、ぜんぶで十こになりました。「たくさんあつまったね」とコンちゃんはよろこびました。そこへたぬきのポンちゃんもやってきて「ぼくにもわけてほしいな」といいました。かごをもっていなかったので、じぶんのポケットにいれるつもりでした。コンちゃんとピョンちゃんはやさしくて、ポンちゃんにどんぐりを三こあげました。のこったどんぐりをふたりでおなじかずずつわけました。コンちゃんとピョンちゃんはそれぞれよっこもちました。「またいっしょにあそぼうね」とみんなでやくそくしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'コンちゃんのかごはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'green', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
        ],
        explanation: '「みどりのかご」をもっていました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ポンちゃんにあげたどんぐりはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「ポンちゃんにどんぐりを三こあげました」とあります。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'さいごにコンちゃんがもったどんぐりはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
        ],
        explanation: '十こから三こあげると七こ。ふたりでわけると「よっこずつ」になります。',
      },
    ],
  },
  {
    id: 'story-008', title: 'ぞうのおたんじょうび', difficulty: 2,
    estimatedMinutes: 3, icon: '🎂',
    story: 'きょうはぞうのエレちゃんのたんじょうびです。きいろいワンピースをきて、ぴかぴかのくつをはいて、おともだちをわくわくしながらまっていました。さいしょにきたのはきりんのキリちゃんで、赤いふうせんをみっつもってきました。「エレちゃん、おたんじょうびおめでとう！」とキリちゃんはにこにこしながらいいました。エレちゃんはうれしくてふうせんをそらにかかげました。つぎにかばのカバおくんがチョコレートケーキをもってきました。ケーキにはろうそくがよっぽんたっていて、とてもおいしそうなにおいがしました。そのつぎに、さるのサルオくんがオレンジジュースをふたびんもってやってきました。エレちゃんは「みんなありがとう、とってもうれしいよ」とよろこびました。さいごにみんなでケーキをたべて、ジュースをのんで、たのしいパーティーになりました。エレちゃんはこんなにすてきなたんじょうびははじめてだとおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'エレちゃんのワンピースはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'yellow', color: 'red', shape: 'circle' }],
        options: [
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'pink',   label: 'ぴんく', emoji: '🩷' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'white',  label: 'しろ',   emoji: '⬜' },
        ],
        explanation: '「きいろいワンピース」をきていました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'さいしょにきたのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'kirin', color: 'red', shape: 'circle' }],
        options: [
          { id: 'kirin', label: 'キリちゃん', emoji: '🦒' },
          { id: 'kaba',  label: 'カバおくん', emoji: '🦛' },
          { id: 'saru',  label: 'サルオくん', emoji: '🐒' },
          { id: 'ere',   label: 'エレちゃん', emoji: '🐘' },
        ],
        explanation: '「さいしょにきたのはきりんのキリちゃん」でした。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'キリちゃんがもってきたふうせんはなんこでしたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「赤いふうせんをみっつ」もってきました。',
      },
      {
        id: 'q4', type: 'marker',
        text: 'ケーキをもってきたのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'b', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'キリちゃん', emoji: '🦒' },
          { id: 'b', label: 'カバおくん', emoji: '🦛' },
          { id: 'c', label: 'サルオくん', emoji: '🐒' },
          { id: 'd', label: 'エレちゃん', emoji: '🐘' },
        ],
        explanation: '「かばのカバおくんがチョコレートケーキをもってきました」とあります。',
      },
    ],
  },
  {
    id: 'story-009', title: 'さるのえんそく', difficulty: 2,
    estimatedMinutes: 3, icon: '🌿',
    story: 'ようちえんのえんそくの日です。さるのサルオくん、うさぎのミミちゃん、きつねのコンちゃん、たぬきのポンちゃんの四人がきいろいバスにのっておやまへいきました。バスのなかでみんなはうたをうたって、たのしくすごしました。やまにつくと、そらがあおくてきもちがよかったです。みんなでたんぽぽをさがしました。ミミちゃんがいちばんおおくみつけて、四本ひろいました。サルオくんはふたつ、コンちゃんはみっつひろいました。ポンちゃんはたんぽぽはみつからなかったけれど、きれいないしをひとつみつけました。「きれいないしだね」とみんなはいいました。おひるごはんはあおいそらのしたで、おにぎりとサンドイッチをおいしくたべました。おひるごはんのあとで、コンちゃんがいちばんはやくはしれたので、おにごっこではだれもつかまえられませんでした。かえりのバスのなかで、みんなでまたうたをうたってたのしくかえりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'えんそくにいったのはなんにんですか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: 'サルオ・ミミ・コン・ポンの「四人」です。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'たんぽぽをいちばんおおくひろったのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'mimi', color: 'red', shape: 'circle' }],
        options: [
          { id: 'saru', label: 'サルオくん', emoji: '🐒' },
          { id: 'mimi', label: 'ミミちゃん', emoji: '🐰' },
          { id: 'kon',  label: 'コンちゃん', emoji: '🦊' },
          { id: 'pon',  label: 'ポンちゃん', emoji: '🦝' },
        ],
        explanation: '「ミミちゃんがいちばんおおくみつけて」とあります。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'サルオくんがひろったたんぽぽはいくつでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「サルオくんはふたつ」ひろいました。',
      },
    ],
  },
  {
    id: 'story-010', title: 'りすのいえさがし', difficulty: 2,
    estimatedMinutes: 3, icon: '🏡',
    story: 'りすのリーちゃんは、あたらしいおうちをさがしていました。まずおおきなくぬぎのきのそばのあなをみましたが、くらくてせまかったのでやめました。つぎにかわのちかくのほらあなをみにいきました。そこはひろくてきれいでしたが、ふゆはさむそうだとおもいました。さいごに、もりのまんなかにあるふといまつのきのうつろをみつけました。まどがあってそとがよくみえ、かれはがしいてあってあたたかそうです。リーちゃんは「ここにする！」とよろこんで、まつのきのうつろにきめました。ひっこしの日には、くまのクーちゃんとねこのタマちゃんがてつだいにきてくれました。クーちゃんはおもいものをはこんで、タマちゃんはまどをみがいてくれました。「ありがとう、とってもたすかったよ」とリーちゃんはふたりにおれいをいいました。みっつのおうちをまわったすえに、ぴったりのおうちがみつかってよかったとリーちゃんはおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'リーちゃんはなんかしょのおうちをみましたか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: 'くぬぎのき→かわのほらあな→まつのきの「三か所」みました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'リーちゃんがえらんだおうちはどれですか？',
        tasks: [{ instruction: INS, optionId: 'c', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'くぬぎのきのあな', emoji: '🕳️' },
          { id: 'b', label: 'かわのほらあな',   emoji: '🪨' },
          { id: 'c', label: 'まつのきのうつろ', emoji: '🌲' },
          { id: 'd', label: 'もりのこや',       emoji: '🏚️' },
        ],
        explanation: '「まつのきのうつろ」にきめました。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'ひっこしをてつだいにきたのはだれとだれですか？',
        tasks: [{ instruction: INS, optionId: 'koo-tama', color: 'red', shape: 'circle' }],
        options: [
          { id: 'koo-tama', label: 'クーちゃんとタマちゃん', emoji: '🐻🐱' },
          { id: 'koo-mimi', label: 'クーちゃんとミミちゃん', emoji: '🐻🐰' },
          { id: 'tama-mimi',label: 'タマちゃんとミミちゃん', emoji: '🐱🐰' },
          { id: 'koo-kon',  label: 'クーちゃんとコンちゃん', emoji: '🐻🦊' },
        ],
        explanation: '「クーちゃんとタマちゃん」がてつだいにきてくれました。',
      },
      {
        id: 'q4', type: 'marker',
        text: 'くぬぎのきのあなをやめたりゆうはどれですか？',
        tasks: [{ instruction: INS, optionId: 'b', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'さむそうだったから',     emoji: '🥶' },
          { id: 'b', label: 'くらくてせまかったから', emoji: '🌑' },
          { id: 'c', label: 'ぬれていたから',         emoji: '💧' },
          { id: 'd', label: 'とおかったから',         emoji: '🚶' },
        ],
        explanation: '「くらくてせまかったのでやめました」とあります。',
      },
    ],
  },

  // ===== ⭐⭐⭐ むずかしい（5問） =====
  {
    id: 'story-011', title: 'もりのおまつり', difficulty: 3,
    estimatedMinutes: 5, icon: '🏮',
    story: 'なつのおわりのこと、もりのなかまたちはおまつりをひらくことにしました。きつねのコンちゃんが「みんなでやきとうもろこしをつくろう」とていあんしました。みんなはさんせいして、よくじつからじゅんびをはじめることにしました。くまのクーちゃんはたきびのかかりになって、まきをよっぽんあつめました。「これはよくもえるよ」とクーちゃんはじまんしました。うさぎのミミちゃんとたぬきのポンちゃんはとうもろこしをいちばたけからとってきました。ミミちゃんはあおいエプロン、ポンちゃんはしろいエプロンをしていました。とうもろこしはぜんぶでなな本ありました。「おおきくておいしそう！」とふたりはよろこびました。ねこのタマちゃんとさるのサルオくんはかざりつけをたんとうしました。タマちゃんはきいろいちょうちんをみっつ、サルオくんはあかいちょうちんをよっつかざりました。もりのなかがとてもあかるくにぎやかになりました。おまつりがはじまると、まずコンちゃんがたいこをたたきました。そのひびきがもりじゅうにとどきました。つぎにミミちゃんがふえをふきました。きれいなねははるかとおくまできこえました。さいごにみんなでおどりをおどりました。みんなのあしがリズムにあわせてにぎやかにうごきました。やきとうもろこしはとてもおいしくて、みんなはおかわりをしました。コンちゃんは「やっぱりみんなでたべるとおいしいね」といいました。よるがふけると、ほしぞらのしたでみんなはまたおまつりをしようとやくそくをかわしました。たのしかったおまつりのことを、みんなはなんどもはなしてわらいあいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'クーちゃんがあつめたまきはなんぽんでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「まきをよっぽん」あつめました。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'ミミちゃんのエプロンはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'blue', color: 'red', shape: 'circle' }],
        options: [
          { id: 'white',  label: 'しろ',   emoji: '⬜' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'pink',   label: 'ぴんく', emoji: '🩷' },
        ],
        explanation: '「ミミちゃんはあおいエプロン」をしていました。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'とうもろこしはぜんぶでなんほんありましたか？',
        tasks: [{ instruction: INS, optionId: '7', color: 'red', shape: 'circle' }],
        options: [
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
          { id: '8', label: '8', emoji: '8️⃣' },
        ],
        explanation: '「とうもろこしはぜんぶでなな本」ありました。',
      },
      {
        id: 'q4', type: 'marker',
        text: 'おまつりでさいしょにたいこをたたいたのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'kon', color: 'red', shape: 'circle' }],
        options: [
          { id: 'kon',  label: 'コンちゃん', emoji: '🦊' },
          { id: 'mimi', label: 'ミミちゃん', emoji: '🐰' },
          { id: 'tama', label: 'タマちゃん', emoji: '🐱' },
          { id: 'saru', label: 'サルオくん', emoji: '🐒' },
        ],
        explanation: '「まずコンちゃんがたいこをたたきました」とあります。',
      },
      {
        id: 'q5', type: 'marker',
        text: 'サルオくんがかざったあかいちょうちんはいくつでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「サルオくんはあかいちょうちんをよっつかざりました」とあります。',
      },
    ],
  },
  {
    id: 'story-012', title: 'うさぎとかめのレース', difficulty: 3,
    estimatedMinutes: 5, icon: '🏁',
    story: 'もりにはうさぎのミミちゃん、かめのカメタくん、きつねのコンちゃん、たぬきのポンちゃん、くまのクーちゃん、ねこのタマちゃんの六人がいました。ある日、コンちゃんが「もりのおうちからおおきなくぬぎのきまでレースをしよう」とていあんしました。みんなはさんせいして、土曜日のあさにひらかれることになりました。とうじつのあさはとてもよいてんきで、みんなはわくわくしながらスタートのちてんにあつまりました。スタートのあいずはポンちゃんがだしました。ポンちゃんは「よーい、どん！」とおおきなこえでさけびました。ミミちゃんはとてもはやくてさいしょにゴールのちかくにつきましたが、とちゅうでとてもつかれてきのしたでひとやすみしました。ミミちゃんはすこしだけやすむつもりでしたが、そのままねむってしまいました。そのあいだに、カメタくんはゆっくりでもいっぽいっぽあるきつづけました。「あせらずにいこう」とカメタくんはじぶんにしっかりいいきかせながらすすみました。クーちゃんはカメタくんのとなりをゆっくりはしっておうえんしました。「がんばれ、カメタくん！」とクーちゃんはげんきよくいいました。コンちゃんとタマちゃんはなかよくならんではしっていましたが、コンちゃんがさきにゴールしました。ミミちゃんがねむってしまっているあいだに、カメタくんはミミちゃんをぬかしてゴールしました。さいごにめをさましたミミちゃんがゴールしました。レースのけっかは、いちばんがカメタくん、にばんがコンちゃん、さんばんがタマちゃんでした。ミミちゃんは「こつこつつづけることがたいせつなんだね」とおもいました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'レースにさんかしたのはなんにんですか？',
        tasks: [{ instruction: INS, optionId: '6', color: 'red', shape: 'circle' }],
        options: [
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
        ],
        explanation: 'ミミ・カメタ・コン・ポン・クー・タマの「六人」です。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'スタートのあいずをだしたのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'pon', color: 'red', shape: 'circle' }],
        options: [
          { id: 'kon',    label: 'コンちゃん', emoji: '🦊' },
          { id: 'pon',    label: 'ポンちゃん', emoji: '🦝' },
          { id: 'koo',    label: 'クーちゃん', emoji: '🐻' },
          { id: 'tama',   label: 'タマちゃん', emoji: '🐱' },
        ],
        explanation: '「スタートのあいずはポンちゃんがだしました」とあります。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'いちばんになったのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'kameta', color: 'red', shape: 'circle' }],
        options: [
          { id: 'mimi',   label: 'ミミちゃん', emoji: '🐰' },
          { id: 'kameta', label: 'カメタくん', emoji: '🐢' },
          { id: 'kon',    label: 'コンちゃん', emoji: '🦊' },
          { id: 'tama',   label: 'タマちゃん', emoji: '🐱' },
        ],
        explanation: '「いちばんがカメタくん」でした。',
      },
      {
        id: 'q4', type: 'marker',
        text: 'カメタくんのとなりをはしっておうえんしたのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'koo', color: 'red', shape: 'circle' }],
        options: [
          { id: 'kon',  label: 'コンちゃん', emoji: '🦊' },
          { id: 'pon',  label: 'ポンちゃん', emoji: '🦝' },
          { id: 'koo',  label: 'クーちゃん', emoji: '🐻' },
          { id: 'tama', label: 'タマちゃん', emoji: '🐱' },
        ],
        explanation: '「クーちゃんはカメタくんのとなりをゆっくりはしっておうえんしました」とあります。',
      },
      {
        id: 'q5', type: 'marker',
        text: 'にばんにゴールしたのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'kon', color: 'red', shape: 'circle' }],
        options: [
          { id: 'mimi',   label: 'ミミちゃん', emoji: '🐰' },
          { id: 'kameta', label: 'カメタくん', emoji: '🐢' },
          { id: 'kon',    label: 'コンちゃん', emoji: '🦊' },
          { id: 'tama',   label: 'タマちゃん', emoji: '🐱' },
        ],
        explanation: '「にばんがコンちゃん」でした。',
      },
    ],
  },
  {
    id: 'story-013', title: 'なかよしどうぶつえん', difficulty: 3,
    estimatedMinutes: 5, icon: '🦁',
    story: 'おおきなどうぶつえんのおはなしです。このどうぶつえんには、ライオンのレオくん、しまうまのシマくん、キリンのキリちゃん、ゾウのエレちゃん、さるのサルオくんのごひきがくらしていました。みんなはなかよしで、まいにちとてもたのしくすごしていました。ある月曜日のあさ、がいこくからあたらしいどうぶつのパンダのパンちゃんがやってくるというおしらせがきました。みんなはとてもわくわくして、むかえるじゅんびをはじめました。レオくんはみんなにさくせんをおしえて、「みんなでなかよくむかえようよ」とはなしました。キリちゃんはたかいところにきいろいかざりをつけました。たかいところはキリちゃんしかとどかないので、キリちゃんがとくいそうにつけました。エレちゃんはながいはなでみずをまいて、じめんをきれいにしました。みずをまくのがじょうずで、あっというまにぴかぴかになりました。サルオくんはえさのたけをよっぽんよういしました。パンダはたけがだいすきだとだれかがおしえてくれたからです。「パンちゃんによろこんでもらえるといいな」とサルオくんはおもいました。みんながじゅんびをおわったころ、パンちゃんがとうちゃくしたのはごごのにじでした。パンちゃんはくろとしろのかわいいからだで、えんりょがちにあいさつしました。レオくんが「いっしょにたのしくくらそうよ」というと、パンちゃんはうれしそうにうなずきました。みんなはパンちゃんをかこんで、「なかよくしようね」とこえをかけました。こうしてどうぶつえんにあたらしいなかまがふえて、みんなはますますにぎやかにくらすことになりました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'もともとどうぶつえんにいたどうぶつはなんびきでしたか？',
        tasks: [{ instruction: INS, optionId: '5', color: 'red', shape: 'circle' }],
        options: [
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
          { id: '8', label: '8', emoji: '8️⃣' },
        ],
        explanation: 'レオ・シマ・キリ・エレ・サルオの「五ひき」です。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'きいろいかざりをつけたのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'kirin', color: 'red', shape: 'circle' }],
        options: [
          { id: 'leo',   label: 'レオくん',   emoji: '🦁' },
          { id: 'shima', label: 'シマくん',   emoji: '🦓' },
          { id: 'kirin', label: 'キリちゃん', emoji: '🦒' },
          { id: 'ele',   label: 'エレちゃん', emoji: '🐘' },
        ],
        explanation: '「キリちゃんはたかいところにきいろいかざりをつけました」とあります。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'サルオくんがよういしたたけはなんぽんでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「えさのたけをよっぽんよういしました」とあります。',
      },
      {
        id: 'q4', type: 'marker',
        text: 'パンちゃんのからだのいろはどれですか？',
        tasks: [{ instruction: INS, optionId: 'black-white', color: 'red', shape: 'circle' }],
        options: [
          { id: 'black-white', label: 'くろとしろ', emoji: '🐼' },
          { id: 'brown',       label: 'ちゃいろ',   emoji: '🟤' },
          { id: 'white',       label: 'しろだけ',   emoji: '⬜' },
          { id: 'gray',        label: 'はいいろ',   emoji: '🩶' },
        ],
        explanation: '「くろとしろのかわいいからだ」でした。',
      },
      {
        id: 'q5', type: 'marker',
        text: 'パンちゃんはなんじにとうちゃくしましたか？',
        tasks: [{ instruction: INS, optionId: 'b', color: 'red', shape: 'circle' }],
        options: [
          { id: 'a', label: 'じゅうにじ',   emoji: '🕛' },
          { id: 'b', label: 'ごごにじ',     emoji: '🕑' },
          { id: 'c', label: 'ごごさんじ',   emoji: '🕒' },
          { id: 'd', label: 'じゅうじ',     emoji: '🕙' },
        ],
        explanation: '「ごごのにじ」にとうちゃくしました。',
      },
    ],
  },
  {
    id: 'story-014', title: 'はるのおはなばたけ', difficulty: 3,
    estimatedMinutes: 5, icon: '🌸',
    story: 'はるになると、もりのおはなばたけにはたくさんのはながさきます。このおはなばたけをせわしているのは、うさぎのミミちゃん、ちょうのチョウちゃん、みつばちのハチちゃん、もぐらのモグくん、かたつむりのカタちゃん、かえるのケロちゃんのろくひきです。みんなはそれぞれのとくいなことをいかして、まいにちはなばたけをだいじにそだてていました。ある水曜日のあさ、ミミちゃんが「たいせつなバラのはなびらがよっまいなくなっています！」とさけびました。みんなはすぐにあつまって、だれがとったかをよくかんがえました。チョウちゃんは「きのうのごごはずっとはなのみつをあつめていました。ずっとここにいたよ」といいました。ハチちゃんも「わたしもチョウちゃんといっしょでした。とってないよ」といいました。モグくんは「ぼくはずっとじめんのなかをほっていたよ。でももぐっていたからなにもみていないよ」といいました。カタちゃんは「わたしはあめがふっていたのでいえにいました。かたつむりはぬれるのがにがてなんです」といいました。ケロちゃんは「ぼくはかわでおよいでいたよ。きのうはおよぐのがとてもたのしかったな」といいました。みんなのはなしをよくきいたあとで、ミミちゃんはよくかんがえて「きのうはかぜがとてもつよかったね。そのかぜのせいではなびらがとんでいってしまったんだね」といいました。みんなはなるほどとうなずいて、いっしょにはなびらをさがしてあつめてもどしました。あつめたはなびらはぜんぶでじゅうにまいでした。みんながちからをあわせてさがしたおかげで、バラはまたきれいにさきつづけました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'おはなばたけをせわしているのはなんびきですか？',
        tasks: [{ instruction: INS, optionId: '6', color: 'red', shape: 'circle' }],
        options: [
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
          { id: '8', label: '8', emoji: '8️⃣' },
        ],
        explanation: 'ミミ・チョウ・ハチ・モグ・カタ・ケロの「六ひき」です。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'なくなっていたバラのはなびらはなんまいでしたか？',
        tasks: [{ instruction: INS, optionId: '4', color: 'red', shape: 'circle' }],
        options: [
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
        ],
        explanation: '「バラのはなびらがよっまいなくなっています」とあります。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'チョウちゃんといっしょにいたのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'hachi', color: 'red', shape: 'circle' }],
        options: [
          { id: 'mimi',  label: 'ミミちゃん', emoji: '🐰' },
          { id: 'hachi', label: 'ハチちゃん', emoji: '🐝' },
          { id: 'mogu',  label: 'モグくん',   emoji: '🐾' },
          { id: 'kata',  label: 'カタちゃん', emoji: '🐌' },
        ],
        explanation: '「ハチちゃんも「わたしもチョウちゃんといっしょでした」とあります。',
      },
      {
        id: 'q4', type: 'marker',
        text: 'あめがふっていたのでいえにいたのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'kata', color: 'red', shape: 'circle' }],
        options: [
          { id: 'mogu', label: 'モグくん',   emoji: '🐾' },
          { id: 'kata', label: 'カタちゃん', emoji: '🐌' },
          { id: 'kero', label: 'ケロちゃん', emoji: '🐸' },
          { id: 'mimi', label: 'ミミちゃん', emoji: '🐰' },
        ],
        explanation: '「カタちゃんはあめがふっていたのでいえにいました」とあります。',
      },
      {
        id: 'q5', type: 'marker',
        text: 'みんながあつめたはなびらはなんまいでしたか？',
        tasks: [{ instruction: INS, optionId: '12', color: 'red', shape: 'circle' }],
        options: [
          { id: '10', label: '10', emoji: '🔟' },
          { id: '11', label: '11', emoji: '1️⃣1️⃣' },
          { id: '12', label: '12', emoji: '1️⃣2️⃣' },
          { id: '13', label: '13', emoji: '1️⃣3️⃣' },
        ],
        explanation: '「あつめたはなびらはぜんぶでじゅうにまい」でした。',
      },
    ],
  },
  {
    id: 'story-015', title: 'よるのもりのたんけん', difficulty: 3,
    estimatedMinutes: 5, icon: '🌙',
    story: 'よるのもりでたんけんをするけいかくを、ふくろうのフクちゃんがたてました。さんかするのは、ふくろうのフクちゃん、たぬきのポンちゃん、きつねのコンちゃん、ねこのタマちゃん、はりねずみのハリくん、こうもりのコウちゃんのろくひきです。しゅっぱつはよるのはちじにきめました。みんなはじゅんびをしながらわくわくしていました。フクちゃんはあかいランタンをひとつ、コンちゃんはきいろいランタンをふたつもちました。ポンちゃんはちずをよういして、タマちゃんはみんなのぶんのおやつをよっこぶんもちました。「たんけんがおわってからたべようね」とタマちゃんはいいました。ハリくんはきゅうきゅうばこをもち、コウちゃんはそらからみちをしらべるやくをしました。たんけんがはじまると、まずコウちゃんがそらをとんで「みぎのみちがただしい！」とおしえてくれました。みぎのみちをすすむと、おおきなさくらのきがありました。そのきのねもとに、かがやくあおいいしがみっつおちていました。フクちゃんは「これはつきのひかりをすったとくべつないしだよ」といいました。みんなはおどろいてそのいしをじっとみつめました。ほんとうにぴかぴかとひかっていて、とてもきれいでした。みんなはだいじにもちかえることにしましたが、いしはみっつなのでさんにんぶんしかありません。くじびきでえらんで、フクちゃん、ポンちゃん、ハリくんのさんにんがもちかえることになりました。コンちゃん、タマちゃん、コウちゃんはざんねんでしたが、「またたんけんしようね」とやくそくしました。たんけんのあとで、みんなでおやつをたべながらきょうのできごとをたのしくはなしました。',
    questions: [
      {
        id: 'q1', type: 'marker',
        text: 'たんけんにさんかしたのはなんびきですか？',
        tasks: [{ instruction: INS, optionId: '6', color: 'red', shape: 'circle' }],
        options: [
          { id: '5', label: '5', emoji: '5️⃣' },
          { id: '6', label: '6', emoji: '6️⃣' },
          { id: '7', label: '7', emoji: '7️⃣' },
          { id: '8', label: '8', emoji: '8️⃣' },
        ],
        explanation: 'フク・ポン・コン・タマ・ハリ・コウの「六ひき」です。',
      },
      {
        id: 'q2', type: 'marker',
        text: 'コンちゃんがもったランタンはいくつでしたか？',
        tasks: [{ instruction: INS, optionId: '2', color: 'red', shape: 'circle' }],
        options: [
          { id: '1', label: '1', emoji: '1️⃣' },
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
        ],
        explanation: '「コンちゃんはきいろいランタンをふたつ」もちました。',
      },
      {
        id: 'q3', type: 'marker',
        text: 'さくらのきのねもとにあったいしはなにいろでしたか？',
        tasks: [{ instruction: INS, optionId: 'blue', color: 'red', shape: 'circle' }],
        options: [
          { id: 'red',    label: 'あか',   emoji: '🔴' },
          { id: 'yellow', label: 'きいろ', emoji: '🟡' },
          { id: 'blue',   label: 'あお',   emoji: '🔵' },
          { id: 'green',  label: 'みどり', emoji: '🟢' },
        ],
        explanation: '「かがやくあおいいし」がみっつおちていました。',
      },
      {
        id: 'q4', type: 'marker',
        text: 'そらからみちをしらべたのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'kou', color: 'red', shape: 'circle' }],
        options: [
          { id: 'fuku', label: 'フクちゃん', emoji: '🦉' },
          { id: 'kou',  label: 'コウちゃん', emoji: '🦇' },
          { id: 'kon',  label: 'コンちゃん', emoji: '🦊' },
          { id: 'tama', label: 'タマちゃん', emoji: '🐱' },
        ],
        explanation: '「コウちゃんはそらからみちをしらべるやく」でした。',
      },
      {
        id: 'q5', type: 'marker',
        text: 'あおいいしはみっつありましたが、いしをもちかえれなかったのはなんびきですか？',
        tasks: [{ instruction: INS, optionId: '3', color: 'red', shape: 'circle' }],
        options: [
          { id: '2', label: '2', emoji: '2️⃣' },
          { id: '3', label: '3', emoji: '3️⃣' },
          { id: '4', label: '4', emoji: '4️⃣' },
          { id: '5', label: '5', emoji: '5️⃣' },
        ],
        explanation: '六ひきのうち三ひきがもちかえり、コン・タマ・コウの「三びき」はもちかえれませんでした。',
      },
      {
        id: 'q6', type: 'marker',
        text: 'くじびきにあたってもちかえることになったのに入っていないのはだれですか？',
        tasks: [{ instruction: INS, optionId: 'kon', color: 'red', shape: 'circle' }],
        options: [
          { id: 'fuku', label: 'フクちゃん', emoji: '🦉' },
          { id: 'pon',  label: 'ポンちゃん', emoji: '🦝' },
          { id: 'kon',  label: 'コンちゃん', emoji: '🦊' },
          { id: 'hari', label: 'ハリくん',   emoji: '🦔' },
        ],
        explanation: 'あたったのはフク・ポン・ハリ。コンちゃんはあたりませんでした。',
      },
    ],
  },
]
```

- [ ] **Step 2: Run TypeScript check**

```
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```
git add src/data/stories.ts
git commit -m "feat: rewrite all 15 stories to marker format"
```

---

## Task 7: Delete old answer components + build verification

**Files:**
- Delete: `src/components/answers/IllustrationAnswer.tsx`
- Delete: `src/components/answers/NumberAnswer.tsx`
- Delete: `src/components/answers/ColorAnswer.tsx`
- Delete: `src/components/answers/CharacterAnswer.tsx`

- [ ] **Step 1: Delete the 4 old files**

```
del "src\components\answers\IllustrationAnswer.tsx"
del "src\components\answers\NumberAnswer.tsx"
del "src\components\answers\ColorAnswer.tsx"
del "src\components\answers\CharacterAnswer.tsx"
```

Or on Unix:
```
rm src/components/answers/IllustrationAnswer.tsx
rm src/components/answers/NumberAnswer.tsx
rm src/components/answers/ColorAnswer.tsx
rm src/components/answers/CharacterAnswer.tsx
```

- [ ] **Step 2: Run full test suite**

```
npx vitest run
```

Expected: All tests PASS.

- [ ] **Step 3: Build**

```
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit**

```
git add -A
git commit -m "chore: delete old answer components (replaced by MarkerAnswerPanel)"
```

---

## Self-Review

**Spec coverage check:**
- ✅ MarkColor / MarkShape / MarkerTask / MarkerSelection types → Task 1
- ✅ Question.type = 'marker', tasks[], Option.correct removed → Task 1
- ✅ Answer.selections / taskResults / score / maxScore → Task 1
- ✅ QuizResult.score/total counts tasks → Task 1 + Task 4
- ✅ scoreAnswer utility with per-combination matching → Task 1
- ✅ MarkerAnswerPanel with ①②③ auto-confirm, delete, decide → Task 3
- ✅ disabled=true during timeout only → Task 4 (isDisabled = phase === 'timeout')
- ✅ earlyPressRef detection via onInteract → Task 4
- ✅ TTS: question text + task instructions joined → Task 4
- ✅ Timeout reads confirmed via panelRef.current.getConfirmed() → Task 4
- ✅ ResultPage: taskResults per question, partial-credit indicator → Task 5
- ✅ ProgressPage: remove type-based stats → Task 5
- ✅ All 15 stories rewritten → Task 6
- ✅ Old components deleted → Task 7

**Type consistency check:**
- `scoreAnswer(tasks: MarkerTask[], selections: MarkerSelection[]): boolean[]` — used in Task 4 QuizPage with `q.tasks` and `MarkerSelection[]` ✅
- `MarkerAnswerPanelHandle.getConfirmed()` → returns `MarkerSelection[]` — used in `handleTimeout` as `panelRef.current?.getConfirmed() ?? []` ✅
- `Answer.selections: MarkerSelection[]` matches what `handleDecide` and `handleTimeout` pass ✅
- `finishQuiz` sums `a.score` and `a.maxScore` across answers — both fields defined in Task 1 ✅
