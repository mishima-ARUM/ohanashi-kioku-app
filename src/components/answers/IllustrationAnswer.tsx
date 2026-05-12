import type { Option } from '../../types'

interface Props {
  options: Option[]
  selected: string | null
  disabled: boolean
  onSelect: (id: string) => void
}

export function IllustrationAnswer({ options, selected, disabled, onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {options.map(o => (
        <button
          key={o.id}
          disabled={disabled}
          onClick={() => onSelect(o.id)}
          className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-4 text-2xl min-h-[80px]
            transition-all ${selected === o.id
              ? 'border-purple-500 bg-purple-50 scale-105'
              : 'border-gray-200 bg-white hover:border-purple-300'}
            ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
        >
          <span className="text-4xl">{o.emoji}</span>
          <span className="text-lg font-bold text-gray-700">{o.label}</span>
        </button>
      ))}
    </div>
  )
}
