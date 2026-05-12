import { useNavigate } from 'react-router-dom'
import type { Story } from '../types'

interface Props {
  story: Story
  bestScore: number | null
}

const DIFFICULTY_LABEL = ['', 'やさしい', 'ふつう', 'むずかしい']
const DIFFICULTY_COLOR = ['', 'bg-yellow-100 border-yellow-300', 'bg-pink-100 border-pink-300', 'bg-blue-100 border-blue-300']

export function StoryCard({ story, bestScore }: Props) {
  const navigate = useNavigate()
  const stars = '⭐'.repeat(story.difficulty)

  return (
    <button
      onClick={() => navigate(`/story/${story.id}`)}
      className={`w-full text-left p-4 rounded-2xl border-2 ${DIFFICULTY_COLOR[story.difficulty]}
        flex items-center gap-4 hover:shadow-md transition-all active:scale-95`}
    >
      <span className="text-4xl">{story.icon}</span>
      <div className="flex-1">
        <div className="text-lg font-bold text-gray-800">{story.title}</div>
        <div className="text-sm text-gray-500">
          {stars} {DIFFICULTY_LABEL[story.difficulty]} ・ 約{story.estimatedMinutes}ふん
        </div>
      </div>
      {bestScore !== null && (
        <div className="text-sm font-bold text-purple-600 bg-white rounded-full px-3 py-1 border border-purple-200">
          {bestScore}/{story.questions.length}もん
        </div>
      )}
    </button>
  )
}
