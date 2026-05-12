import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { stories } from '../data/stories'
import type { QuestionType } from '../types'

const TYPE_LABEL: Record<QuestionType, string> = {
  illustration: 'えをえらぶ',
  number: 'かずをこたえる',
  color: 'いろをえらぶ',
  character: 'じんぶつをえらぶ',
}

export function ProgressPage() {
  const navigate = useNavigate()
  const { data, getPracticedDates } = useProgress()
  const results = data.results

  const totalAttempts = results.length
  const overallCorrect = results.reduce((s, r) => s + r.score, 0)
  const overallTotal = results.reduce((s, r) => s + r.total, 0)
  const overallPct = overallTotal > 0 ? Math.round((overallCorrect / overallTotal) * 100) : 0

  const typeStats = (['illustration', 'number', 'color', 'character'] as QuestionType[]).map(type => {
    let correct = 0, total = 0
    results.forEach(r => {
      const story = stories.find(s => s.id === r.storyId)
      if (!story) return
      r.answers.forEach(a => {
        const q = story.questions.find(q => q.id === a.questionId)
        if (q?.type === type) { total++; if (a.correct) correct++ }
      })
    })
    return { type, correct, total, pct: total > 0 ? Math.round((correct / total) * 100) : null }
  })

  const weakType = typeStats.filter(t => t.total > 0).sort((a, b) => (a.pct ?? 100) - (b.pct ?? 100))[0]
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

        {weakType && weakType.pct !== null && weakType.pct < 70 && (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 mb-4">
            <p className="text-sm font-bold text-red-600">
              ⚠️ にがてなもんだい: 「{TYPE_LABEL[weakType.type]}」（{weakType.pct}%）
            </p>
          </div>
        )}

        <div className="bg-white rounded-3xl p-5 shadow-sm mb-4">
          <h2 className="text-sm font-bold text-gray-600 mb-3">もんだいタイプ別せいかいりつ</h2>
          {typeStats.map(t => (
            <div key={t.type} className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">{TYPE_LABEL[t.type]}</span>
                <span className="font-bold">{t.pct !== null ? `${t.pct}%` : '—'}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-purple-400 h-2 rounded-full transition-all"
                  style={{ width: t.pct !== null ? `${t.pct}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h2 className="text-sm font-bold text-gray-600 mb-3">もんだい別さいこうスコア</h2>
          {stories.map(s => {
            const rs = results.filter(r => r.storyId === s.id)
            const best = rs.length > 0 ? Math.max(...rs.map(r => r.score)) : null
            return (
              <div key={s.id} className="flex items-center gap-2 py-2 border-b border-gray-100 last:border-0">
                <span className="text-xl">{s.icon}</span>
                <span className="flex-1 text-sm text-gray-700">{s.title}</span>
                <span className="text-sm font-bold text-purple-600">
                  {best !== null ? `${best}/${s.questions.length}` : '—'}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
