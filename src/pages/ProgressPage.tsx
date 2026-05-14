import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { stories } from '../data/stories'
import { storiesNov } from '../data/stories-nov'
import { storiesDec } from '../data/stories-dec'
import { storiesJan } from '../data/stories-jan'
import { storiesFeb } from '../data/stories-feb'
import { storiesMar } from '../data/stories-mar'
import { storiesApr } from '../data/stories-apr'
import { storiesMay } from '../data/stories-may'
import { storiesJun } from '../data/stories-jun'
import { DeviationCard }    from '../components/DeviationCard'
import { WeakCategoryCard } from '../components/WeakCategoryCard'
import { AccuracyChart }    from '../components/AccuracyChart'
import { MonthlyProgress }  from '../components/MonthlyProgress'
import type { MonthDef } from '../utils/analytics'

/** 月別ストーリー定義（MonthlyProgress + analytics に渡す） */
const MONTHS: MonthDef[] = [
  { label: '11月', stories: storiesNov },
  { label: '12月', stories: storiesDec },
  { label: '1月',  stories: storiesJan },
  { label: '2月',  stories: storiesFeb },
  { label: '3月',  stories: storiesMar },
  { label: '4月',  stories: storiesApr },
  { label: '5月',  stories: storiesMay },
  { label: '6月',  stories: storiesJun },
]

/** 全ストーリー（偏差値の難易度別計算に使用） */
const ALL_STORIES = [
  ...stories,
  ...storiesNov,
  ...storiesDec,
  ...storiesJan,
  ...storiesFeb,
  ...storiesMar,
  ...storiesApr,
  ...storiesMay,
  ...storiesJun,
]

export function ProgressPage() {
  const navigate = useNavigate()
  const { data } = useProgress()
  const results = data.results

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 p-4">
      <div className="max-w-lg mx-auto">
        <button
          onClick={() => navigate('/')}
          className="text-gray-500 mb-4"
        >
          ← もどる
        </button>
        <h1 className="text-xl font-bold text-purple-700 mb-4">📊 きろく・ぶんせき</h1>

        {/* ① 偏差値カード */}
        <DeviationCard results={results} stories={ALL_STORIES} />

        {/* ② 苦手カテゴリ TOP3 */}
        <WeakCategoryCard results={results} stories={ALL_STORIES} />

        {/* ③ 正答率推移グラフ */}
        <AccuracyChart results={results} />

        {/* ④ 月別進捗バー */}
        <MonthlyProgress results={results} months={MONTHS} />

        {/* ⑤ 問題別スコア一覧（既存） */}
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h2 className="text-sm font-bold text-gray-600 mb-3">もんだい別さいこうスコア</h2>
          {ALL_STORIES.map(s => {
            const rs   = results.filter(r => r.storyId === s.id)
            const best = rs.length > 0 ? Math.max(...rs.map(r => r.score)) : null
            const bestTotal = rs.length > 0
              ? (rs.find(r => r.score === best)?.total ?? s.questions.length)
              : s.questions.length
            return (
              <div
                key={s.id}
                className="flex items-center gap-2 py-2 border-b border-gray-100 last:border-0"
              >
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
