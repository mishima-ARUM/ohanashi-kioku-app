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
