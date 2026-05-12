import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { stories } from '../data/stories'
import { useTTS } from '../hooks/useTTS'

type Phase = 'idle' | 'announcing' | 'reading' | 'done'

const SPEEDS = [0.7, 1.0, 1.2]

export function StoryPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const story = stories.find(s => s.id === id)
  const { speak, stop, isPlaying, rate, setRate } = useTTS()
  const [phase, setPhase] = useState<Phase>('idle')

  useEffect(() => () => { stop() }, [stop])

  const handleStart = useCallback(() => {
    setPhase('announcing')
    speak('これからお話を読みます。手を膝の上において、静かに聞いてください。', () => {
      setPhase('reading')
      speak(story!.story, () => setPhase('done'))
    })
  }, [speak, story])

  const handleReplay = useCallback(() => {
    setPhase('reading')
    speak(story!.story, () => setPhase('done'))
  }, [speak, story])

  if (!story) return <div className="p-8 text-center">もんだいがみつかりません</div>

  const DIFFICULTY_STARS = ['', '⭐', '⭐⭐', '⭐⭐⭐']

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 p-4">
      <div className="max-w-lg mx-auto">
        <button onClick={() => { stop(); navigate('/') }}
          className="text-gray-500 mb-4 flex items-center gap-1">
          ← もどる
        </button>
        <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
          <div className="text-center mb-4">
            <span className="text-5xl">{story.icon}</span>
            <h1 className="text-xl font-bold text-gray-800 mt-2">{story.title}</h1>
            <p className="text-sm text-gray-500">{DIFFICULTY_STARS[story.difficulty]} ・ 約{story.estimatedMinutes}ふん</p>
          </div>

          <div className="flex gap-2 justify-center mb-6">
            {SPEEDS.map(s => (
              <button key={s} onClick={() => setRate(s)}
                className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all
                  ${rate === s ? 'bg-purple-100 border-purple-400 text-purple-700' : 'border-gray-200 text-gray-500'}`}>
                {s}x
              </button>
            ))}
          </div>

          {phase === 'idle' && (
            <button onClick={handleStart}
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-yellow-400 to-pink-400 text-white text-xl font-bold shadow-lg active:scale-95">
              🔊 はじめる
            </button>
          )}
          {(phase === 'announcing' || phase === 'reading') && (
            <div className="text-center py-4">
              <div className="text-4xl animate-pulse mb-2">🔊</div>
              <p className="text-gray-600 font-bold">
                {phase === 'announcing' ? 'アナウンス中...' : 'おはなし よみあげ中...'}
              </p>
            </div>
          )}
          {phase === 'done' && (
            <div className="flex flex-col gap-3">
              <button onClick={() => navigate(`/quiz/${id}`)}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xl font-bold shadow-lg active:scale-95">
                もんだいへすすむ →
              </button>
              <button onClick={handleReplay}
                className="w-full py-3 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold">
                🔁 もういちどきく
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
