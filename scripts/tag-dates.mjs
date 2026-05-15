#!/usr/bin/env node
/**
 * tag-dates.mjs
 * 各月のstoriesファイルの各Storyに releaseDate: 'MM-DD' を付与する。
 * 各ファイルの1番目のストーリー = その月の1日、2番目 = 2日、...
 * 既に releaseDate が付いているファイルはスキップ（冪等）。
 *
 * 実行: node scripts/tag-dates.mjs
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const MONTH_FILES = [
  { file: 'src/data/stories-nov.ts', month: '11' },
  { file: 'src/data/stories-dec.ts', month: '12' },
  { file: 'src/data/stories-jan.ts', month: '01' },
  { file: 'src/data/stories-feb.ts', month: '02' },
  { file: 'src/data/stories-mar.ts', month: '03' },
  { file: 'src/data/stories-apr.ts', month: '04' },
  { file: 'src/data/stories-may.ts', month: '05' },
  { file: 'src/data/stories-jun.ts', month: '06' },
]

function processFile(filePath, month) {
  const content = readFileSync(filePath, 'utf-8')

  // 既にタグ付き？
  if (content.includes('releaseDate:')) {
    console.log(`⏭  Skipped (already tagged): ${filePath}`)
    return
  }

  const lines = content.split('\n')
  const output = []
  let dayCounter = 1
  let modified = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // estimatedMinutes: フィールドの直後に releaseDate を挿入
    // パターン1: estimatedMinutes が行末にある（マルチライン形式）
    const estMatchMultiline = line.match(/^(\s+)estimatedMinutes:\s*\d+,\s*$/)
    if (estMatchMultiline) {
      output.push(line)
      const day = String(dayCounter).padStart(2, '0')
      output.push(`${estMatchMultiline[1]}releaseDate: '${month}-${day}',`)
      dayCounter++
      modified = true
      continue
    }

    // パターン2: estimatedMinutes が行の途中にある（コンパクト形式）例: estimatedMinutes: 2, icon:
    const estMatchInline = line.match(/^(\s+)(.*?estimatedMinutes:\s*\d+),(\s*.*)$/)
    if (estMatchInline) {
      const day = String(dayCounter).padStart(2, '0')
      output.push(`${estMatchInline[1]}${estMatchInline[2]}, releaseDate: '${month}-${day}',${estMatchInline[3]}`)
      dayCounter++
      modified = true
      continue
    }

    output.push(line)
  }

  if (modified) {
    writeFileSync(filePath, output.join('\n'), 'utf-8')
    console.log(`✅ Updated: ${filePath} (${dayCounter - 1} stories tagged)`)
  } else {
    console.log(`⚠️  No estimatedMinutes found: ${filePath}`)
  }
}

for (const { file, month } of MONTH_FILES) {
  processFile(join(ROOT, file), month)
}

console.log('\n🎉 日付タグ付け完了')
