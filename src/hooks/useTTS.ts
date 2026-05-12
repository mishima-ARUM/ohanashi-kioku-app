import { useState, useCallback, useRef, useEffect } from 'react'

interface UseTTSOptions {
  rate?: number
  lang?: string
}

interface UseTTSReturn {
  speak: (text: string, onDone?: () => void) => void
  stop: () => void
  isPlaying: boolean
  rate: number
  setRate: (r: number) => void
}

export function useTTS({ rate: initialRate = 1.0, lang = 'ja-JP' }: UseTTSOptions = {}): UseTTSReturn {
  const [isPlaying, setIsPlaying] = useState(false)
  const [rate, setRate] = useState(initialRate)
  const rateRef = useRef(rate)
  rateRef.current = rate

  useEffect(() => () => { window.speechSynthesis.cancel() }, [])

  const speak = useCallback((text: string, onDone?: () => void) => {
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = lang
    u.rate = rateRef.current
    u.onstart = () => setIsPlaying(true)
    u.onend = () => { setIsPlaying(false); onDone?.() }
    u.onpause = () => setIsPlaying(false)
    u.onresume = () => setIsPlaying(true)
    window.speechSynthesis.speak(u)
  }, [lang])

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
    setIsPlaying(false)
  }, [])

  return { speak, stop, isPlaying, rate, setRate }
}
