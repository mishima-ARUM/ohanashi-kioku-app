/**
 * 学習年度（11月〜6月）のカレンダー解放ロジック
 */

// 学年の月順（11月スタート）
const SCHOOL_YEAR_ORDER = [11, 12, 1, 2, 3, 4, 5, 6]

/**
 * 学年内での通算日数を返す（11月1日 = 1）
 */
function schoolYearDay(month: number, day: number): number {
  const idx = SCHOOL_YEAR_ORDER.indexOf(month)
  if (idx === -1) return 999  // 7〜10月は学年外 → 全解放
  // 各月の日数（Feb=28固定でOK、学年比較なので正確な日数は不要）
  const DAYS = [31, 31, 31, 28, 31, 30, 31, 30]  // 11,12,1,2,3,4,5,6
  const baseDays = DAYS.slice(0, idx).reduce((a, b) => a + b, 0)
  return baseDays + day
}

/**
 * releaseDate ('MM-DD') が今日以前かどうかを返す。
 * 学年（11月〜6月）を考慮した比較。
 * releaseDate が未設定の場合は常に true（サンプル問題など）。
 */
export function isUnlocked(releaseDate?: string): boolean {
  if (!releaseDate) return true  // サンプル問題は常に解放

  const [mm, dd] = releaseDate.split('-').map(Number)
  const today = new Date()
  const todayM = today.getMonth() + 1
  const todayD = today.getDate()

  // 今日が学年外（7〜10月）なら全解放
  if (!SCHOOL_YEAR_ORDER.includes(todayM)) return true

  return schoolYearDay(mm, dd) <= schoolYearDay(todayM, todayD)
}

/**
 * 'MM-DD' → '11月1日' 形式に変換する
 */
export function formatReleaseDate(releaseDate: string): string {
  const [mm, dd] = releaseDate.split('-').map(Number)
  return `${mm}月${dd}日`
}
