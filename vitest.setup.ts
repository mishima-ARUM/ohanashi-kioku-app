import '@testing-library/jest-dom'

const mockSpeak = vi.fn()
const mockCancel = vi.fn()
const mockPause = vi.fn()
const mockResume = vi.fn()

Object.defineProperty(window, 'speechSynthesis', {
  value: { speak: mockSpeak, cancel: mockCancel, pause: mockPause, resume: mockResume,
    speaking: false, paused: false, pending: false, getVoices: () => [],
    addEventListener: vi.fn(), removeEventListener: vi.fn() },
  writable: true,
})

Object.defineProperty(window, 'SpeechSynthesisUtterance', {
  value: class {
    text = ''; lang = ''; rate = 1; volume = 1; pitch = 1
    onstart: (() => void) | null = null
    onend: (() => void) | null = null
    onpause: (() => void) | null = null
    onresume: (() => void) | null = null
    onerror: ((e: Event) => void) | null = null
    constructor(text: string) { this.text = text }
  },
  writable: true,
})
