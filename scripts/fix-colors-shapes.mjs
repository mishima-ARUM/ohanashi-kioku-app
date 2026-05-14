/**
 * 全問題の回答形式（color/shape）を多様化し、月別難易度を設定するスクリプト
 *
 * 変更内容:
 * 1. tasks の color/shape を16パターン循環させる
 * 2. instruction テキストを対応する日本語色・形に更新
 * 3. 各月ファイルの difficulty を更新
 *    - 11月・12月・1月: 1（やさしい）← そのまま
 *    - 2月・3月・4月・5月: 2（ふつう）
 *    - 6月以降: 3（むずかしい）
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDir = join(__dirname, '..', 'src', 'data')

// 日本語マッピング
const COLOR_JP = {
  red:    'あか',
  blue:   'あお',
  green:  'みどり',
  yellow: 'きいろ',
}
const SHAPE_JP = {
  circle:         'まる',
  triangle:       'さんかく',
  cross:          'ばつ',
  'double-circle':'にじゅうまる',
}

// 16通り（4色×4形）をバランスよく並べた組み合わせ
// 隣接する組が同じ色・同じ形にならないよう配置
const COMBOS = [
  ['red',    'circle'],
  ['blue',   'triangle'],
  ['green',  'cross'],
  ['yellow', 'double-circle'],
  ['blue',   'circle'],
  ['green',  'triangle'],
  ['yellow', 'cross'],
  ['red',    'double-circle'],
  ['green',  'circle'],
  ['yellow', 'triangle'],
  ['red',    'cross'],
  ['blue',   'double-circle'],
  ['yellow', 'circle'],
  ['red',    'triangle'],
  ['blue',   'cross'],
  ['green',  'double-circle'],
]

let counter = 0

function makeInstruction(color, shape) {
  return `ただしいこたえをえらんで、${COLOR_JP[color]}で${SHAPE_JP[shape]}をおしてください`
}

/**
 * `{ instruction: INS, optionId: '...', color: 'red', shape: 'circle' }`
 * を次の組み合わせに置換する
 */
function replaceTaskPattern(content) {
  return content.replace(
    /\{ instruction: INS, optionId: '([^']+)', color: 'red', shape: 'circle' \}/g,
    (_, optionId) => {
      const [color, shape] = COMBOS[counter % COMBOS.length]
      counter++
      const instruction = makeInstruction(color, shape)
      return `{ instruction: '${instruction}', optionId: '${optionId}', color: '${color}', shape: '${shape}' }`
    }
  )
}

/**
 * 不要になった INS 定数行を削除する
 */
function removeInsConstant(content) {
  return content.replace(/^const INS = '[^']+'\n/m, '')
}

// ファイル設定: difficulty: null = 変更しない
const FILE_CONFIGS = [
  { name: 'stories.ts',     difficulty: null },  // ベース15問（難易度はそのまま）
  { name: 'stories-nov.ts', difficulty: null },   // 11月: やさしい（1のまま）
  { name: 'stories-dec.ts', difficulty: null },   // 12月: やさしい（1のまま）
  { name: 'stories-jan.ts', difficulty: null },   // 1月: やさしい（1のまま）
  { name: 'stories-feb.ts', difficulty: 2 },      // 2月: ふつう
  { name: 'stories-mar.ts', difficulty: 2 },      // 3月: ふつう
  { name: 'stories-apr.ts', difficulty: 2 },      // 4月: ふつう
  { name: 'stories-may.ts', difficulty: 2 },      // 5月: ふつう
  { name: 'stories-jun.ts', difficulty: 3 },      // 6月: むずかしい
]

let totalTasks = 0

for (const { name, difficulty } of FILE_CONFIGS) {
  const filePath = join(dataDir, name)
  let content = readFileSync(filePath, 'utf-8')

  const before = counter

  // 1. color/shape 置換（instruction もインライン化）
  content = replaceTaskPattern(content)

  const taskCount = counter - before

  // 2. INS 定数が全置換されたら削除
  if (taskCount > 0 && !content.includes('instruction: INS')) {
    content = removeInsConstant(content)
  }

  // 3. difficulty 更新（対象月のみ）
  if (difficulty !== null) {
    const diffBefore = (content.match(/difficulty: 1/g) || []).length
    content = content.replace(/difficulty: 1/g, `difficulty: ${difficulty}`)
    console.log(`  difficulty: 1 → ${difficulty} (${diffBefore}箇所)`)
  }

  writeFileSync(filePath, content, 'utf-8')

  totalTasks += taskCount
  const diffMsg = difficulty !== null ? `, difficulty→${difficulty}` : ''
  console.log(`✅ ${name}: ${taskCount}タスク更新${diffMsg}`)
}

console.log(`\n合計 ${totalTasks} タスクの color/shape を更新しました`)
