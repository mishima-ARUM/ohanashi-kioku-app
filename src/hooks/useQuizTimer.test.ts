import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useQuizTimer } from './useQuizTimer'

beforeEach(() => { vi.useFakeTimers() })
afterEach(() => { vi.useRealTimers() })

describe('useQuizTimer', () => {
  it('start()後にtimeLeftが減っていく', () => {
    const { result } = renderHook(() => useQuizTimer(20, vi.fn()))
    act(() => { result.current.start() })
    act(() => { vi.advanceTimersByTime(3100) })
    expect(result.current.timeLeft).toBe(17)
  })
  it('0になるとonExpireが呼ばれる', () => {
    const onExpire = vi.fn()
    const { result } = renderHook(() => useQuizTimer(3, onExpire))
    act(() => { result.current.start() })
    act(() => { vi.advanceTimersByTime(3100) })
    expect(onExpire).toHaveBeenCalledTimes(1)
  })
  it('reset()でタイマーがリセットされる', () => {
    const { result } = renderHook(() => useQuizTimer(20, vi.fn()))
    act(() => { result.current.start() })
    act(() => { vi.advanceTimersByTime(5000) })
    act(() => { result.current.reset() })
    expect(result.current.timeLeft).toBe(20)
    expect(result.current.isRunning).toBe(false)
  })
})
