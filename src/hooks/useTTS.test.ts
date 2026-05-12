import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTTS } from './useTTS'

beforeEach(() => vi.clearAllMocks())

describe('useTTS', () => {
  it('speak()がspeechSynthesis.speakを呼ぶ', () => {
    const { result } = renderHook(() => useTTS())
    act(() => { result.current.speak('こんにちは') })
    expect(window.speechSynthesis.speak).toHaveBeenCalledTimes(1)
  })
  it('speak()後にisPlayingがtrueになる', () => {
    const { result } = renderHook(() => useTTS())
    const utterance = { onstart: null as any, onend: null as any, onpause: null as any, onresume: null as any, lang: '', rate: 1 }
    ;(vi.spyOn(window, 'SpeechSynthesisUtterance' as any) as any).mockImplementation(function() { return utterance })
    act(() => { result.current.speak('テスト') })
    act(() => { utterance.onstart?.() })
    expect(result.current.isPlaying).toBe(true)
  })
  it('onDoneコールバックが読み上げ完了後に呼ばれる', () => {
    const { result } = renderHook(() => useTTS())
    const onDone = vi.fn()
    const utterance = { onstart: null as any, onend: null as any, onpause: null as any, onresume: null as any, lang: '', rate: 1 }
    ;(vi.spyOn(window, 'SpeechSynthesisUtterance' as any) as any).mockImplementation(function() { return utterance })
    act(() => { result.current.speak('テスト', onDone) })
    act(() => { utterance.onend?.() })
    expect(onDone).toHaveBeenCalledTimes(1)
  })
})
