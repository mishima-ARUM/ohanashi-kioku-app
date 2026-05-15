import { useNavigate } from 'react-router-dom'
import type { Story } from '../types'
import { isUnlocked, formatReleaseDate } from '../utils/dateUtils'

interface Props {
  story: Story
  bestScore: number | null
}

const DIFFICULTY_LABEL = ['', 'やさしい', 'ふつう', 'むずかしい']
const DIFFICULTY_COLOR = ['', 'bg-yellow-100 border-yellow-300', 'bg-pink-100 border-pink-300', 'bg-blue-100 border-blue-300']
const DIFFICULTY_LOCKED = ['', 'bg-gray-50 border-gray-200', 'bg-gray-50 border-gray-200', 'bg-gray-50 border-gray-200']

export function StoryCard({ story, bestScore }: Props) {
  const navigate = useNavigate()
  const locked = !isUnlocked(story.releaseDate)
  const stars = '⭐'.repeat(story.difficulty)

  return (
    <button
      onClick={() => !locked && navigate(`/story/${story.id}`)}
      disabled={locked}
      className={`w-full text-left p-4 rounded-2xl border-2
        flex items-center gap-4 transition-all
        ${locked
          ? `${DIFFICULTY_LOCKED[story.difficulty]} cursor-not-allowed opacity-60`
          : `${DIFFICULTY_COLOR[story.difficulty]} hover:shadow-md active:scale-95`
        }`}
    >
      <span className="text-4xl">{locked ? '🔒' : story.icon}</span>
      <div className="flex-1">
        <div className={`text-lg font-bold ${locked ? 'text-gray-400' : 'text-gray-800'}`}>
          {story.title}
        </div>
        <div className="text-sm text-gray-400 flex items-center gap-2">
          <span>{stars} {DIFFICULTY_LABEL[story.difficulty]} ・ 約{story.estimatedMinutes}ふん</span>
          {story.releaseDate && (
            <span className="text-xs bg-white border border-gray-200 rounded-full px-2 py-0.5">
              {formatReleaseDate(story.releaseDate)}
            </span>
          )}
        </div>
      </div>
      {!locked && bestScore !== null && (
        <div className="text-sm font-bold text-purple-600 bg-white rounded-full px-3 py-1 border border-purple-200">
          {bestScore}/{story.questions.length}もん
        </div>
      )}
      {locked && (
        <div className="text-xs text-gray-400">
          {story.releaseDate && formatReleaseDate(story.releaseDate)}に<br />かいほう
        </div>
      )}
    </button>
  )
}
