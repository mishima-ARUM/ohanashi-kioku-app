import { forwardRef, useImperativeHandle, useState } from 'react'
import type { Option, MarkColor, MarkShape, MarkerSelection } from '../../types'

export interface MarkerAnswerPanelHandle {
  getConfirmed: () => MarkerSelection[]
}

interface Props {
  options: Option[]
  disabled: boolean
  onSelect?: (selections: MarkerSelection[]) => void
  onInteract?: () => void
}

const COLOR_CONFIG: { id: MarkColor; label: string; hex: string; emoji: string }[] = [
  { id: 'red',    label: 'あか',   hex: '#ef4444', emoji: '🔴' },
  { id: 'blue',   label: 'あお',   hex: '#3b82f6', emoji: '🔵' },
  { id: 'green',  label: 'みどり', hex: '#22c55e', emoji: '🟢' },
  { id: 'yellow', label: 'きいろ', hex: '#eab308', emoji: '🟡' },
]

const SHAPE_CONFIG: { id: MarkShape; label: string; symbol: string }[] = [
  { id: 'circle',        label: 'まる',       symbol: '○' },
  { id: 'triangle',      label: 'さんかく',   symbol: '△' },
  { id: 'cross',         label: 'ばつ',       symbol: '✕' },
  { id: 'double-circle', label: 'にじゅうまる', symbol: '◎' },
]

export const MarkerAnswerPanel = forwardRef<MarkerAnswerPanelHandle, Props>(
  function MarkerAnswerPanel({ options, disabled, onInteract }, ref) {
    const [pendingOpt, setPendingOpt] = useState<string | null>(null)
    const [pendingColor, setPendingColor] = useState<MarkColor | null>(null)
    const [pendingShape, setPendingShape] = useState<MarkShape | null>(null)

    useImperativeHandle(ref, () => ({
      getConfirmed: () => {
        if (pendingOpt && pendingColor && pendingShape) {
          return [{ optionId: pendingOpt, color: pendingColor, shape: pendingShape }]
        }
        return []
      },
    }), [pendingOpt, pendingColor, pendingShape])

    const handleOptClick = (optId: string) => {
      if (disabled) return
      onInteract?.()
      setPendingOpt(optId)
    }

    const handleColorClick = (color: MarkColor) => {
      if (disabled) return
      onInteract?.()
      setPendingColor(color)
    }

    const handleShapeClick = (shape: MarkShape) => {
      if (disabled) return
      onInteract?.()
      setPendingShape(shape)
    }

    return (
      <div className="flex flex-col gap-3">
        {/* ① こたえをえらぶ */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">①</span>
            <span className="text-xs font-bold text-gray-500">こたえをえらぶ</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {options.map(o => (
              <button
                key={o.id}
                onClick={() => handleOptClick(o.id)}
                disabled={disabled}
                className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all
                  ${pendingOpt === o.id
                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300'}
                  ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer active:scale-95'}`}
              >
                {o.emoji && <span className="text-2xl">{o.emoji}</span>}
                <span className="text-sm font-bold">{o.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ② いろをえらぶ */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">②</span>
            <span className="text-xs font-bold text-gray-500">いろをえらぶ</span>
          </div>
          <div className="flex gap-3 justify-center">
            {COLOR_CONFIG.map(c => (
              <button
                key={c.id}
                onClick={() => handleColorClick(c.id)}
                disabled={disabled}
                className={`flex flex-col items-center gap-1 transition-all
                  ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
              >
                <div
                  className={`w-12 h-12 rounded-full border-4 transition-all active:scale-90
                    ${pendingColor === c.id ? 'border-gray-900 shadow-lg scale-110' : 'border-transparent'}`}
                  style={{ backgroundColor: c.hex }}
                />
                <span className="text-xs text-gray-600">{c.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ③ かたちをえらぶ */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">③</span>
            <span className="text-xs font-bold text-gray-500">かたちをえらぶ</span>
          </div>
          <div className="flex gap-2 justify-center">
            {SHAPE_CONFIG.map(s => (
              <button
                key={s.id}
                onClick={() => handleShapeClick(s.id)}
                disabled={disabled}
                className={`flex flex-col items-center gap-1 transition-all
                  ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center text-2xl transition-all active:scale-90
                    ${pendingShape === s.id ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'}`}
                >
                  {s.symbol}
                </div>
                <span className="text-xs text-gray-600">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }
)
