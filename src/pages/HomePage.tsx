import { stories } from '../data/stories'
import { storiesNov } from '../data/stories-nov'
import { storiesDec } from '../data/stories-dec'
import { storiesJan } from '../data/stories-jan'
import { storiesFeb } from '../data/stories-feb'
import { storiesMar } from '../data/stories-mar'
import { storiesApr } from '../data/stories-apr'
import { storiesMay } from '../data/stories-may'
import { storiesJun } from '../data/stories-jun'
import { StoryCard } from '../components/StoryCard'
import { useProgress } from '../hooks/useProgress'
import { useNavigate } from 'react-router-dom'

const MONTHS = [
  { label: '11月', emoji: '🍂', list: storiesNov },
  { label: '12月', emoji: '⛄', list: storiesDec },
  { label: '1月',  emoji: '🎍', list: storiesJan },
  { label: '2月',  emoji: '💕', list: storiesFeb },
  { label: '3月',  emoji: '🌸', list: storiesMar },
  { label: '4月',  emoji: '🌷', list: storiesApr },
  { label: '5月',  emoji: '🎏', list: storiesMay },
  { label: '6月',  emoji: '☔', list: storiesJun },
]

// 月別セットに含まれない基本サンプル問題
const monthlyIdSet = new Set(MONTHS.flatMap(m => m.list.map(s => s.id)))
const sampleStories = stories.filter(s => !monthlyIdSet.has(s.id))

export function HomePage() {
  const { getStoryBestScore } = useProgress()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 p-4">
      <div className="max-w-lg mx-auto">
        <header className="text-center py-6">
          <div className="text-5xl mb-2">📖</div>
          <h1 className="text-2xl font-bold text-purple-700">おはなしきおく</h1>
          <p className="text-sm text-gray-500">もんだいをえらんでね</p>
        </header>

        <button
          onClick={() => navigate('/progress')}
          className="w-full mb-6 py-2 rounded-xl bg-white border-2 border-purple-200 text-purple-600 font-bold text-sm"
        >
          📊 きろくをみる
        </button>

        {/* サンプル問題（月別以外） */}
        {sampleStories.length > 0 && (
          <section className="mb-6">
            <h2 className="text-base font-bold text-gray-600 mb-3">⭐ サンプルもんだい</h2>
            <div className="flex flex-col gap-3">
              {sampleStories.map(s => (
                <StoryCard key={s.id} story={s} bestScore={getStoryBestScore(s.id)} />
              ))}
            </div>
          </section>
        )}

        {/* 月別セクション */}
        {MONTHS.map(({ label, emoji, list }) => (
          <section key={label} className="mb-6">
            <h2 className="text-base font-bold text-gray-600 mb-3">
              {emoji} {label}
            </h2>
            <div className="flex flex-col gap-3">
              {list.map(s => (
                <StoryCard key={s.id} story={s} bestScore={getStoryBestScore(s.id)} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
