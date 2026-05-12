import type { Option } from '../../types'

interface Props {
  options: Option[]
  selected: string | null
  disabled: boolean
  onSelect: (id: string) => void
}

export function ColorAnswer({ options, selected, disabled, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {options.map(o => (
        <button
          key={o.id}
          disabled={disabled}
          onClick={() => onSelect(o.id)}
          className={`flex flex-col items-center gap-1 transition-all
            ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
        >
          <div
            className={`w-16 h-16 rounded-full border-4 transition-all
              ${selected === o.id ? 'border-gray-800 scale-125 shadow-lg' : 'border-gray-300'}`}
            style={{ backgroundColor: o.color ?? '#cccccc' }}
          />
          <span className="text-sm font-bold text-gray-600">{o.label}</span>
        </button>
      ))}
    </div>
  )
}
