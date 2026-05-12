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
  onExpireRef.current = onExpire

  useEffect(() => {
    if (!isRunning) return

    const id = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1
        if (newTime <= 0) {
          setIsRunning(false)
          onExpireRef.current()
          return 0
        }
        return newTime
      })
    }, 1000)

    return () => clearInterval(id)
  }, [isRunning])

  const start = useCallback(() => {
    setTimeLeft(seconds)
    setIsRunning(true)
  }, [seconds])

  const reset = useCallback(() => {
    setIsRunning(false)
    setTimeLeft(seconds)
  }, [seconds])

  return { timeLeft, isRunning, start, reset }
}
