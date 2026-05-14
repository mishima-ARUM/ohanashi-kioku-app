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
  const story = stories.find(s => s.id === id)
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
        if (next >= (story?.questions.length ?? 0)) {
          finishQuiz(newAnswers)
        } else {
          qIdxRef.current = next
          setQIdx(next)
          startQuestionRef.current(next)
        }
      }, 1000)
    })
  }, [story?.questions?.length, speak, finishQuiz])

  const recordAnswer = useCallback((selections: MarkerSelection[]) => {
    const q = (story?.questions ?? [])[qIdxRef.current]
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
  }, [story?.questions])

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
    const q = (story?.questions ?? [])[index]
    earlyPressRef.current = false
    setPhase('reading')
    const taskLines = q.tasks.map(t => t.instruction).join('。')
    setTimeout(() => {
      speak(`問題${index + 1}。${q.text}。${taskLines}`, () => {
        if (earlyPressRef.current) {
          const newAnswers = recordAnswer([])
          speak('きちんと読み上げるまで、手を膝の上に置いてお待ちください。問題はスキップします。', () => {
            const next = index + 1
            if (next >= (story?.questions.length ?? 0)) {
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
  }, [story?.questions, speak, recordAnswer, finishQuiz])
  startQuestionRef.current = startQuestion

  useEffect(() => {
    if (phase === 'selecting') startTimer()
  }, [phase]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    startQuestion(0)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!story) { navigate('/'); return null }

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
