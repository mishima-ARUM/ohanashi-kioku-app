import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './firebase'
import { getUserId } from './userId'
import type { QuizResult } from '../types'

/** ユーザーのサブコレクション参照を返す（LINE ID 優先、なければデバイスID） */
function resultsRef() {
  return collection(db, 'users', getUserId(), 'results')
}

/** Firestore に結果を保存 */
export async function saveResultToFirestore(result: QuizResult): Promise<void> {
  await addDoc(resultsRef(), {
    ...result,
    savedAt: serverTimestamp(),
  })
}

/** Firestore から全結果を取得 */
export async function loadResultsFromFirestore(): Promise<QuizResult[]> {
  const q = query(resultsRef(), orderBy('date', 'asc'))
  const snap = await getDocs(q)
  return snap.docs.map(d => {
    const data = d.data()
    // serverTimestamp フィールドを除いて QuizResult として返す
    const { savedAt: _savedAt, ...rest } = data
    return rest as QuizResult
  })
}

// ─── 全ユーザー集計（偏差値計算用） ───────────────────────────

/** 全ユーザーの正答率を globalScores コレクションに保存（匿名・個人情報なし） */
export async function saveGlobalScore(accuracy: number): Promise<void> {
  await addDoc(collection(db, 'globalScores'), {
    accuracy,           // 0〜1 の正答率
    savedAt: serverTimestamp(),
  })
}

/** 全ユーザーの正答率一覧を取得（偏差値計算に使用） */
export async function loadGlobalAccuracies(): Promise<number[]> {
  const snap = await getDocs(collection(db, 'globalScores'))
  return snap.docs.map(d => d.data().accuracy as number)
}
