import { getDeviceId } from './deviceId'

const LINE_USER_KEY = 'ohanashi_line_user_id'

/** LINE ID を保存 */
export function saveLineUserId(lineUserId: string): void {
  localStorage.setItem(LINE_USER_KEY, lineUserId)
}

/** 有効なユーザーID を返す（LINE ID 優先、なければデバイスID） */
export function getUserId(): string {
  return localStorage.getItem(LINE_USER_KEY) ?? getDeviceId()
}

/** LINE ログイン済みかどうか */
export function isLineLoggedIn(): boolean {
  return localStorage.getItem(LINE_USER_KEY) !== null
}
