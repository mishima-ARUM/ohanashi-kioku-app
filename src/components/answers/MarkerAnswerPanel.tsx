import { forwardRef, useImperativeHandle, useState, useCallback } from 'react'
import type { Option, MarkColor, MarkShape, MarkerSelection } from '../../types'

export interface MarkerAnswerPanelHandle {
  getConfirmed: () => MarkerSelection[]
}

interface Props {
  options: Option[]
  disabled: boolean
  onSelect: (selections: MarkerSelection[]) => void
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
  function MarkerAnswerPanel({ options, disabled, onSelect, onInteract }, ref) {
    const [pendingOpt, setPendingOpt] = useState<string | null>(null)
    const [pendingColor, setPendingColor] = useState<MarkColor | null>(null)
    const [pendingShape, setPendingShape] = useState<MarkShape | null>(null)
    const [confirmed, setConfirmed] = useState<MarkerSelection[]>([])

    useImperativeHandle(ref, () => ({
      getConfirmed: () => confirmed,
    }), [confirmed])

    const tryAutoConfirm = useCallback(
      (opt: string | null, color: MarkColor | null, shape: MarkShape | null) => {
        if (opt && color && shape) {
          const newItem: MarkerSelection = { optionId: opt, color, shape }
          setConfirmed(prev => [...prev, newItem])
          setPendingOpt(null)
          setPendingColor(null)
          setPendingShape(null)
        }
      },
      []
    )

    const handleOptClick = (optId: string) => {
      if (disabled) return
      onInteract?.()
      const next = optId
      setPendingOpt(next)
      tryAutoConfirm(next, pendingColor, pendingShape)
    }

    const handleColorClick = (color: MarkColor) => {
      if (disabled) return
      onInteract?.()
      setPendingColor(color)
      tryAutoConfirm(pendingOpt, color, pendingShape)
    }

    const handleShapeClick = (shape: MarkShape) => {
      if (disabled) return
      onInteract?.()
      setPendingShape(shape)
      tryAutoConfirm(pendingOpt, pendingColor, shape)
    }

    const handleRemove = (index: number) => {
      setConfirmed(prev => prev.filter((_, i) => i !== index))
    }

    const pendingOptLabel = options.find(o => o.id === pendingOpt)

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

        {/* えらんだこたえ */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-3">
          <div className="text-xs font-bold text-amber-800 mb-2">📋 えらんだこたえ</div>

          {/* pending preview */}
          <div className="bg-green-50 border-2 border-dashed border-green-300 rounded-xl p-2 mb-2 min-h-[36px] flex items-center gap-2">
            {pendingOpt || pendingColor || pendingShape ? (
              <>
                {pendingOptLabel && (
                  <span className="text-sm font-bold text-gray-700">
                    {pendingOptLabel.emoji} {pendingOptLabel.label}
                  </span>
                )}
                {pendingColor && (
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: COLOR_CONFIG.find(c => c.id === pendingColor)?.hex }}
                  />
                )}
                {pendingShape && (
                  <span className="text-lg">{SHAPE_CONFIG.find(s => s.id === pendingShape)?.symbol}</span>
                )}
              </>
            ) : (
              <span className="text-xs text-gray-400">①②③をえらぶとここにひょうじされます</span>
            )}
          </div>

          {/* confirmed list */}
          {confirmed.length > 0 && (
            <div className="flex flex-col gap-1.5 mb-2">
              {confirmed.map((item, i) => {
                const opt = options.find(o => o.id === item.optionId)
                const colorCfg = COLOR_CONFIG.find(c => c.id === item.color)
                const shapeCfg = SHAPE_CONFIG.find(s => s.id === item.shape)
                return (
                  <div key={i} className="bg-white rounded-xl px-3 py-2 flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-800 flex-1">
                      {opt?.emoji} {opt?.label}
                    </span>
                    <div className="w-5 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: colorCfg?.hex }} />
                    <span className="text-xl">{shapeCfg?.symbol}</span>
                    <button
                      onClick={() => handleRemove(i)}
                      disabled={disabled}
                      className="bg-red-100 text-red-600 rounded-lg px-2 py-0.5 text-xs font-bold disabled:opacity-50"
                    >
                      消す
                    </button>
                  </div>
                )
              })}
            </div>
          )}

          <button
            onClick={() => onSelect(confirmed)}
            disabled={disabled || confirmed.length === 0}
            className="w-full py-3 rounded-xl font-bold text-base transition-all
              bg-gradient-to-r from-amber-400 to-orange-400 text-white
              disabled:from-gray-300 disabled:to-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed
              active:scale-98"
          >
            このこたえでけっていする →
          </button>
        </div>
      </div>
    )
  }
)
