import liff from '@line/liff'

const LIFF_ID = '2010100685-Td3GxCmR'

export interface LineProfile {
  userId: string
  displayName: string
  pictureUrl?: string
}

let initialized = false

/** LIFF を初期化してユーザー情報を返す。LINE 外ブラウザは null */
export async function initLiff(): Promise<LineProfile | null> {
  if (!initialized) {
    await liff.init({ liffId: LIFF_ID })
    initialized = true
  }

  if (!liff.isLoggedIn()) {
    // LINE アプリ外（PC ブラウザ等）では自動ログインしない
    if (liff.isInClient()) {
      liff.login()
    }
    return null
  }

  const profile = await liff.getProfile()
  return {
    userId: profile.userId,
    displayName: profile.displayName,
    pictureUrl: profile.pictureUrl,
  }
}

/** LINE 外ブラウザかどうか */
export function isInLineClient(): boolean {
  return liff.isInClient()
}
