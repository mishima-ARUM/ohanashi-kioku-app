import { useState, useEffect, useCallback, useRef } from 'react'

interface UseQuizTimerReturn {
  timeLeft: number
  isRunning: boolean
  start: () => void
  reset: () => void
}

export function useQuizTimer(seconds: number, onExpire: () => void): UseQuizTimerReturn {
  const [timeLeft, setTimeLeft] = useState(seconds)
  const [isRunning, setIsRunning] = useState(false)
  const onExpireRef = useRef(onExpire)
  const countRef = useRef(seconds)
  const timerIdRef = useRef<number | undefined>(undefined)

  onExpireRef.current = onExpire

  const scheduleTimer = useCallback(() => {
    timerIdRef.current = setTimeout(() => {
      countRef.current -= 1
      setTimeLeft(countRef.current)

      if (countRef.current <= 0) {
        setIsRunning(false)
        onExpireRef.current()
        return
      }

      scheduleTimer()
    }, 1000)
  }, [])

  useEffect(() => {
    if (!isRunning) {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current)
      }
      return
    }

    scheduleTimer()

    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current)
      }
    }
  }, [isRunning, scheduleTimer])

  const start = useCallback(() => {
    countRef.current = seconds
    setTimeLeft(seconds)
    setIsRunning(true)
  }, [seconds])

  const reset = useCallback(() => {
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current)
    }
    countRef.current = seconds
    setIsRunning(false)
    setTimeLeft(seconds)
  }, [seconds])

  return { timeLeft, isRunning, start, reset }
}
