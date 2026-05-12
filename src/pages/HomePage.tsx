import { stories } from '../data/stories'
import { StoryCard } from '../components/StoryCard'
import { useProgress } from '../hooks/useProgress'
import { useNavigate } from 'react-router-dom'

export function HomePage() {
  const { getStoryBestScore } = useProgress()
  const navigate = useNavigate()

  const easy = stories.filter(s => s.difficulty === 1)
  const normal = stories.filter(s => s.difficulty === 2)
  const hard = stories.filter(s => s.difficulty === 3)

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
        {[
          { label: '⭐ やさしい', list: easy },
          { label: '⭐⭐ ふつう', list: normal },
          { label: '⭐⭐⭐ むずかしい', list: hard },
        ].map(({ label, list }) => (
          <section key={label} className="mb-6">
            <h2 className="text-base font-bold text-gray-600 mb-3">{label}</h2>
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
