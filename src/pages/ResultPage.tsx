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
  const pct = Math.round((score / total) * 100)
  const isPerfect = score === total

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-3xl p-6 shadow-sm mb-4 text-center">
          <div className="text-6xl mb-2">{isPerfect ? '🎉' : score >= total / 2 ? '😊' : '😢'}</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{story.title}</h1>
          <div className="text-4xl font-bold text-purple-600 my-3">
            {score} / {total} もん せいかい！
          </div>
          <div className="text-lg text-gray-500">{pct}%</div>
          {isPerfect && <p className="text-yellow-500 font-bold mt-2">🌟 ぜんもんせいかい！すごい！</p>}
        </div>

        <div className="flex flex-col gap-3 mb-6">
          {story.questions.map((q, i) => {
            const ans = answers.find(a => a.questionId === q.id)
            const correct = ans?.correct ?? false
            return (
              <div key={q.id}
                className={`bg-white rounded-2xl p-4 border-2 ${correct ? 'border-green-300' : 'border-red-300'}`}>
                <div className="flex items-start gap-2">
                  <span className="text-xl">{correct ? '✅' : '❌'}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-700">もんだい{i + 1}: {q.text}</p>
                    {!correct && (
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
