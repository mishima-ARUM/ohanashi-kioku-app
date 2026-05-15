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
