import type { Option } from '../../types'

interface Props {
  options: Option[]
  selected: string | null
  disabled: boolean
  onSelect: (id: string) => void
}

export function NumberAnswer({ options, selected, disabled, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {options.map(o => (
        <button
          key={o.id}
          disabled={disabled}
          onClick={() => onSelect(o.id)}
          className={`w-16 h-16 rounded-2xl border-4 text-2xl font-bold
            transition-all ${selected === o.id
              ? 'border-blue-500 bg-blue-100 scale-110'
              : 'border-gray-200 bg-sky-50 hover:border-blue-300'}
            ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
