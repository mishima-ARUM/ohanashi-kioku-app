import { useState, useCallback, useRef, useEffect } from 'react'

interface UseTTSOptions {
  rate?: number
  lang?: string
  pauseMs?: number
}

interface UseTTSReturn {
  speak: (text: string, onDone?: () => void) => void
  stop: () => void
  isPlaying: boolean
  rate: number
  setRate: (r: number) => void
}

function selectBestVoice(lang: string): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices?.() ?? []
  const jaVoices = voices.filter(v => v.lang.startsWith(lang.slice(0, 2)))
  return (
    jaVoices.find(v => v.name.includes('Nanami')) ||
    jaVoices.find(v => v.name.includes('Google') && v.lang === lang) ||
    jaVoices.find(v => v.lang === lang) ||
    jaVoices[0] ||
    null
  )
}

function splitBySentence(text: string): string[] {
  return text
    .split(/(?<=[。、！？\n])/)
    .map(s => s.replace(/[。！？]+$/, '').trim())  // 末尾の句読点を削除（TTS が「まる」と読むのを防ぐ）
    .filter(s => s.length > 0)
}

export function useTTS({ rate: initialRate = 1.0, lang = 'ja-JP', pauseMs = 500 }: UseTTSOptions = {}): UseTTSReturn {
  const [isPlaying, setIsPlaying] = useState(false)
  const [rate, setRate] = useState(initialRate)
  const rateRef = useRef(rate)
  rateRef.current = rate
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null)
  const speakIdRef = useRef(0)

  useEffect(() => {
    const loadVoice = () => { voiceRef.current = selectBestVoice(lang) }
    loadVoice()
    window.speechSynthesis.onvoiceschanged = loadVoice
    return () => { window.speechSynthesis.onvoiceschanged = null }
  }, [lang])

  useEffect(() => () => { window.speechSynthesis.cancel() }, [])

  const speak = useCallback((text: string, onDone?: () => void) => {
    window.speechSynthesis.cancel()
    speakIdRef.current += 1
    const myId = speakIdRef.current

    // ブラウザのonend二重発火バグや複数経路からの呼び出しを防ぐ
    let called = false
    const safeOnDone = () => {
      if (called) return
      called = true
      onDone?.()
    }

    const segments = splitBySentence(text)
    if (segments.length === 0) { safeOnDone(); return }

    const speakNext = (remaining: string[]) => {
      if (speakIdRef.current !== myId) return
      if (remaining.length === 0) {
        setIsPlaying(false)
        safeOnDone()
        return
      }

      const [current, ...rest] = remaining
      const u = new SpeechSynthesisUtterance(current)
      u.lang = lang
      u.rate = rateRef.current
      if (voiceRef.current) u.voice = voiceRef.current
      u.onstart = () => setIsPlaying(true)
      u.onend = () => {
        if (speakIdRef.current !== myId) return
        if (rest.length === 0) {
          setIsPlaying(false)
          safeOnDone()
        } else {
          setTimeout(() => speakNext(rest), pauseMs)
        }
      }
      u.onerror = (e) => {
        if (speakIdRef.current !== myId) return
        setIsPlaying(false)
        // 'interrupted' はキャンセルによるものなので onDone を呼ばない
        if (e.error !== 'interrupted') { safeOnDone() }
      }
      window.speechSynthesis.speak(u)
    }

    speakNext(segments)
  }, [lang, pauseMs])

  const stop = useCallback(() => {
    speakIdRef.current += 1
    window.speechSynthesis.cancel()
    setIsPlaying(false)
  }, [])

  return { speak, stop, isPlaying, rate, setRate }
}
