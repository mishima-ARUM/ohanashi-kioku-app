import { useState, useEffect, useCallback, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { stories } from '../data/stories'
import { useTTS } from '../hooks/useTTS'
import { useQuizTimer } from '../hooks/useQuizTimer'
import { useProgress } from '../hooks/useProgress'
import { ProgressBar } from '../components/ProgressBar'
import { IllustrationAnswer } from '../components/answers/IllustrationAnswer'
import { NumberAnswer } from '../components/answers/NumberAnswer'
import { ColorAnswer } from '../components/answers/ColorAnswer'
import { CharacterAnswer } from '../components/answers/CharacterAnswer'
import type { Answer } from '../types'

type Phase = 'reading' | 'selecting' | 'timeout'

export function QuizPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const story = stories.find(s => s.id === id)!
  const { speak, stop } = useTTS()
  const { addResult } = useProgress()

  const [qIdx, setQIdx] = useState(0)
  const [phase, setPhase] = useState<Phase>('reading')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [, setAnswers] = useState<Answer[]>([])

  const selectedIdRef = useRef<string | null>(null)
  const qIdxRef = useRef(0)
  const answersRef = useRef<Answer[]>([])

  useEffect(() => () => { stop() }, [stop])

  const finishQuiz = useCallback((finalAnswers: Answer[]) => {
    const score = finalAnswers.filter(a => a.correct).length
    addResult({
      storyId: id!,
      date: new Date().toISOString(),
      score,
      total: story.questions.length,
      answers: finalAnswers,
    })
    navigate(`/result/${id}`)
  }, [addResult, id, story.questions.length, navigate])

  const startQuestion = useCallback((index: number) => {
    const q = story.questions[index]
    selectedIdRef.current = null
    setSelectedId(null)
    setPhase('reading')
    const text = `問題${index + 1}。${q.text}。回答を選択してください。はじめ`
    speak(text, () => {
      setPhase('selecting')
    })
  }, [story.questions, speak])

  const handleTimeout = useCallback(() => {
    const q = story.questions[qIdxRef.current]
    const sid = selectedIdRef.current
    const correct = sid ? (q.options.find(o => o.id === sid)?.correct ?? false) : false
    const answer: Answer = { questionId: q.id, selectedId: sid ?? '', correct }
    const newAnswers = [...answersRef.current, answer]
    answersRef.current = newAnswers
    setAnswers(newAnswers)
    setPhase('timeout')
    speak('やめ', () => {
      const next = qIdxRef.current + 1
      if (next >= story.questions.length) {
        finishQuiz(newAnswers)
      } else {
        qIdxRef.current = next
        setQIdx(next)
        startQuestion(next)
      }
    })
  }, [story.questions, speak, finishQuiz, startQuestion])

  const { timeLeft, start: startTimer } = useQuizTimer(20, handleTimeout)

  useEffect(() => {
    if (phase === 'selecting') startTimer()
  }, [phase]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    startQuestion(0)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelect = (optionId: string) => {
    if (phase !== 'selecting') return
    selectedIdRef.current = optionId
    setSelectedId(optionId)
  }

  const currentQ = story.questions[qIdx]
  const isDisabled = phase !== 'selecting'

  const AnswerComponent = {
    illustration: IllustrationAnswer,
    number: NumberAnswer,
    color: ColorAnswer,
    character: CharacterAnswer,
  }[currentQ.type] ?? IllustrationAnswer

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-4">
      <div className="max-w-lg mx-auto">
        <div className="mb-4">
          <ProgressBar current={qIdx} total={story.questions.length} />
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
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

          <p className="text-xl font-bold text-gray-800 mb-6 text-center leading-relaxed">
            {currentQ.text}
          </p>

          <AnswerComponent
            options={currentQ.options}
            selected={selectedId}
            disabled={isDisabled}
            onSelect={handleSelect}
          />
        </div>
      </div>
    </div>
  )
}
