import { getMonthProgress } from '../utils/analytics'
import type { MonthDef } from '../utils/analytics'
import type { QuizResult } from '../types'

interface Props {
  results: QuizResult[]
  months: MonthDef[]
}

export function MonthlyProgress({ results, months }: Props) {
  const progress = getMonthProgress(results, months)

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm mb-4">
      <h2 className="text-sm font-bold text-gray-500 mb-3">📅 つきべつすすみぐあい</h2>
      <div className="space-y-3">
        {progress.map(({ label, attempted, total }) => {
          const pct      = total > 0 ? Math.round((attempted / total) * 100) : 0
          const complete = attempted === total && total > 0
          const noData   = attempted === 0

          return (
            <div key={label}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold text-gray-700">
                  {label} {complete && '✅'}
                </span>
                <span className={`text-xs font-bold ${noData ? 'text-gray-300' : 'text-purple-600'}`}>
                  {attempted}/{total}
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    noData
                      ? 'bg-gray-200'
                      : complete
                        ? 'bg-green-400'
                        : 'bg-gradient-to-r from-purple-400 to-pink-400'
                  }`}
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
