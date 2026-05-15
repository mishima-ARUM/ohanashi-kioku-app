import { getCategoryStats, getWeakCategories } from '../utils/analytics'
import type { QuizResult, Story } from '../types'

interface Props {
  results: QuizResult[]
  stories: Story[]
}

export function WeakCategoryCard({ results, stories }: Props) {
  const stats = getCategoryStats(results, stories)
  const weak     = getWeakCategories(stats, 5)

  if (weak.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-5 shadow-sm mb-4 text-center">
        <div className="text-3xl mb-2">🌟</div>
        <p className="text-sm text-gray-500">
          もっとといてね！<br />にがてカテゴリが みえてくるよ
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm mb-4">
      <h2 className="text-sm font-bold text-gray-500 mb-3">😅 にがてカテゴリ TOP3</h2>
      <div className="space-y-3">
        {weak.map((stat, rank) => {
          const pct = Math.round(stat.accuracy * 100)
          return (
            <div key={stat.category}>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-400">
                    {rank + 1}.
                  </span>
                  <span className="text-sm font-bold text-gray-700">
                    {stat.category}
                  </span>
                </div>
                <span className="text-sm font-bold text-red-400">{pct}%</span>
              </div>
              {/* プログレスバー */}
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-400 to-orange-300 rounded-full transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
