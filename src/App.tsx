import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { HomePage } from './pages/HomePage'
import { StoryPage } from './pages/StoryPage'
import { QuizPage } from './pages/QuizPage'
import { ResultPage } from './pages/ResultPage'
import { ProgressPage } from './pages/ProgressPage'
import { initLiff, type LineProfile } from './lib/liff'
import { saveLineUserId } from './lib/userId'

export default function App() {
  const [lineProfile, setLineProfile] = useState<LineProfile | null>(null)
  const [liffReady, setLiffReady] = useState(false)

  useEffect(() => {
    initLiff()
      .then(profile => {
        if (profile) {
          saveLineUserId(profile.userId)
          setLineProfile(profile)
        }
      })
      .catch(err => {
        // LINE 外ブラウザや初期化失敗は無視してアプリを続行
        console.warn('LIFF init failed:', err)
      })
      .finally(() => {
        setLiffReady(true)
      })
  }, [])

  // LIFF 初期化中は簡易スプラッシュ
  if (!liffReady) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-3">📖</div>
          <p className="text-purple-600 font-bold">よみこみちゅう...</p>
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter basename="/ohanashi-kioku-app">
      <Routes>
        <Route path="/" element={<HomePage lineProfile={lineProfile} />} />
        <Route path="/story/:id" element={<StoryPage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/result/:id" element={<ResultPage />} />
        <Route path="/progress" element={<ProgressPage />} />
      </Routes>
    </BrowserRouter>
  )
}
