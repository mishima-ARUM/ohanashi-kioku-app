import { computeDeviation, getTrend, getDifficultyStats } from '../utils/analytics'
import type { QuizResult, Story } from '../types'

interface Props {
  results: QuizResult[]
  stories: Story[]
}

const DIFFICULTY_LABEL: Record<1 | 2 | 3, string> = {
  1: 'やさしい',
  2: 'ふつう',
  3: 'むずかしい',
}

export function DeviationCard({ results, stories }: Props) {
  const MIN_RESULTS = 5

  if (results.length < MIN_RESULTS) {
    return (
      <div className="bg-white rounded-3xl p-5 shadow-sm mb-4 text-center">
        <div className="text-4xl mb-2">📊</div>
        <p className="text-sm text-gray-500">
          あと <span className="font-bold text-purple-600">{MIN_RESULTS - results.length}</span> もん といてね！
          <br />へんさちが みえるよ✨
        </p>
      </div>
    )
  }

  const totalCorrect = results.reduce((s, r) => s + r.score, 0)
  const totalAll     = results.reduce((s, r) => s + r.total, 0)
  const overallAcc   = totalAll > 0 ? totalCorrect / totalAll : 0
  const deviation    = computeDeviation(overallAcc)
  const trend        = getTrend(results)
  const diffStats    = getDifficultyStats(results, stories)

  // スケールバー上の位置（30〜70 → 0〜100%）
  const dotPosition = Math.min(100, Math.max(0, ((deviation - 30) / 40) * 100))

  const trendLabel = trend === 0
    ? '—'
    : trend > 0
      ? `↑ +${Math.round(trend)}`
      : `↓ ${Math.round(trend)}`

  const trendColor = trend > 0
    ? 'text-green-500'
    : trend < 0
      ? 'text-red-400'
      : 'text-gray-400'

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm mb-4">
      <h2 className="text-sm font-bold text-gray-500 mb-3">📊 へんさち</h2>

      {/* 総合偏差値 */}
      <div className="flex items-end gap-3 mb-3">
        <div className="text-5xl font-bold text-purple-600">
          {Math.round(deviation)}
        </div>
        <div className={`text-lg font-bold mb-1 ${trendColor}`}>
          {trendLabel}
        </div>
      </div>

      {/* スケールバー */}
      <div className="relative h-3 bg-gradient-to-r from-red-200 via-yellow-200 to-green-300 rounded-full mb-4">
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-purple-600 rounded-full border-2 border-white shadow-md"
          style={{ left: `calc(${dotPosition}% - 10px)` }}
        />
        <span className="absolute -bottom-5 left-0 text-xs text-gray-400">30</span>
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-gray-400">50</span>
        <span className="absolute -bottom-5 right-0 text-xs text-gray-400">70</span>
      </div>

      {/* 難易度別 */}
      <div className="grid grid-cols-3 gap-2 mt-6">
        {([1, 2, 3] as const).map(d => {
          const stat = diffStats[d]
          const dev  = stat.total > 0 ? Math.round(computeDeviation(stat.accuracy)) : '—'
          return (
            <div key={d} className="text-center bg-gray-50 rounded-2xl py-2">
              <div className="text-xs text-gray-400 mb-1">{DIFFICULTY_LABEL[d]}</div>
              <div className="text-xl font-bold text-purple-500">{dev}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
