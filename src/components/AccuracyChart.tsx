import { getDailyAccuracy } from '../utils/analytics'
import type { QuizResult } from '../types'

interface Props {
  results: QuizResult[]
}

const W   = 300
const H   = 110
const PAD = { top: 10, right: 10, bottom: 22, left: 32 }

export function AccuracyChart({ results }: Props) {
  const data = getDailyAccuracy(results, 14)

  if (data.length < 2) {
    return (
      <div className="bg-white rounded-3xl p-5 shadow-sm mb-4 text-center">
        <div className="text-3xl mb-2">📈</div>
        <p className="text-sm text-gray-500">
          まだグラフが つくれません<br />もっとれんしゅうしてね！
        </p>
      </div>
    )
  }

  const innerW = W - PAD.left - PAD.right
  const innerH = H - PAD.top  - PAD.bottom

  const xStep = data.length > 1 ? innerW / (data.length - 1) : innerW
  const points = data.map((d, i) => ({
    x: PAD.left + i * xStep,
    y: PAD.top  + innerH * (1 - d.accuracy),
  }))

  const pathD = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(' ')

  // X軸ラベルの間引き（最大 7 本）
  const labelStep = Math.max(1, Math.ceil(data.length / 7))

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm mb-4">
      <h2 className="text-sm font-bold text-gray-500 mb-3">📈 せいかいりつのうつりかわり</h2>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        aria-label="正答率推移グラフ"
      >
        {/* Y 軸グリッド＋ラベル */}
        {[0, 50, 100].map(pct => {
          const y = PAD.top + innerH * (1 - pct / 100)
          return (
            <g key={pct}>
              <line
                x1={PAD.left} y1={y}
                x2={W - PAD.right} y2={y}
                stroke="#e5e7eb" strokeWidth="0.75"
              />
              <text
                x={PAD.left - 4} y={y + 3.5}
                textAnchor="end" fontSize="8" fill="#9ca3af"
              >
                {pct}%
              </text>
            </g>
          )
        })}

        {/* 折れ線 */}
        <path
          d={pathD}
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* データ点 */}
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3" fill="#8b5cf6" />
        ))}

        {/* X 軸日付ラベル */}
        {data.map((d, i) => {
          if (i % labelStep !== 0 && i !== data.length - 1) return null
          const mm = d.date.slice(5, 7).replace(/^0/, '')
          const dd = d.date.slice(8, 10).replace(/^0/, '')
          return (
            <text
              key={i}
              x={points[i].x}
              y={H - 4}
              textAnchor="middle"
              fontSize="7"
              fill="#9ca3af"
            >
              {mm}/{dd}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
