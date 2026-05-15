const KEY = 'ohanashi_device_id'

/** localStorage に保存した匿名デバイスIDを返す（なければ生成して保存） */
export function getDeviceId(): string {
  let id = localStorage.getItem(KEY)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(KEY, id)
  }
  return id
}
