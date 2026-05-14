#!/usr/bin/env node
/**
 * tag-categories.mjs
 * 全 stories ファイルの各 Question に category フィールドを付与する。
 * 既に category が付いている設問はスキップ（冪等）。
 *
 * 実行: node scripts/tag-categories.mjs
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

/** カテゴリ判定ルール（上から優先順に評価） */
const RULES = [
  { keywords: ['なにいろ', 'なん色', 'いろ'],                                   category: '色の記憶' },
  { keywords: ['いくつ', 'なんぼん', 'なんまい', 'なんこ', 'なんにん', 'なん本', 'なん枚'], category: '数の記憶' },
  { keywords: ['だれ', 'どの子', 'どの人', 'なんという'],                         category: '登場人物' },
  { keywords: ['なかった', 'ないもの', 'なかったもの', '入っていない'],             category: '仲間はずれ' },
  { keywords: ['きせつ', 'はる', 'なつ', 'あき', 'ふゆ', '春', '夏', '秋', '冬'], category: '季節' },
  { keywords: ['さいしょ', 'さいご', 'つぎ', 'じゅんばん', '順番', '何番目'],      category: '順番・流れ' },
  { keywords: ['どこ', '場所', 'どのお店', 'どの公園'],                            category: '場所' },
  { keywords: ['もって', 'かばん', 'なにを持', '何を持'],                          category: '持ち物・もの' },
]

function determineCategory(text) {
  for (const rule of RULES) {
    if (rule.keywords.some(kw => text.includes(kw))) return rule.category
  }
  return '行動・できごと'
}

function processFile(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')
  let pendingCategory = null
  let modified = false
  const output = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // text: フィールドを検出 → カテゴリを決定
    // 1) standalone: line starts with whitespace then "text:"
    const textMatchStandalone = line.match(/^(\s+)text:\s*['"](.+)['"]\s*,?\s*$/)
    // 2) inline: "text:" appears somewhere in the line (e.g. { id: 'q1', type: 'marker', text: '...',)
    const textMatchInline = !textMatchStandalone && line.match(/\btext:\s*['"](.+?)['"]\s*,/)
    if (textMatchStandalone) {
      pendingCategory = determineCategory(textMatchStandalone[2])
    } else if (textMatchInline) {
      pendingCategory = determineCategory(textMatchInline[1])
    }

    // explanation: フィールドを検出
    // Match lines where "explanation:" appears (standalone or part of a line)
    const explMatch = line.match(/^(\s+)explanation:\s*/)

    if (explMatch && pendingCategory !== null) {
      // Check if line ends with closing brace (inline question object format)
      // e.g. "        explanation: '...' }," or "        explanation: '...' }"
      const closingBraceMatch = line.match(/^(\s+)(explanation:\s*['"].*['"]\s*)(\},?\s*)$/)

      if (closingBraceMatch) {
        // Inline closing brace: need to split the line
        // closingBraceMatch[1] = indent (e.g. "        ")
        // closingBraceMatch[2] = "explanation: '...'"
        // closingBraceMatch[3] = "}," or "}"
        const indent = closingBraceMatch[1]
        const outerIndent = indent.replace(/  $/, '') // 2 spaces less for the closing brace

        // Check idempotency: next line must not be category:
        // But since we're rewriting this line, we check if we've already done this.
        // After transformation, the explanation line won't end with } anymore.
        // So this branch only fires on un-transformed lines.

        // Check if next line already has category: (shouldn't happen in this format
        // but handle gracefully)
        const nextLine = lines[i + 1] ?? ''
        if (nextLine.match(/\s+category:/)) {
          // Already transformed, push as-is
          output.push(line)
        } else {
          // Rewrite: explanation without closing brace, then category, then closing brace
          const trailing = closingBraceMatch[3].trim() // "}" or "},"
          output.push(`${indent}${closingBraceMatch[2].trimEnd()},`)
          output.push(`${indent}category: '${pendingCategory}',`)
          output.push(`${outerIndent}${trailing}`)
          modified = true
        }
      } else {
        // Standalone explanation line (no closing brace on same line)
        output.push(line)
        // Next line has category already?
        const nextLine = lines[i + 1] ?? ''
        if (!nextLine.match(/\s+category:/)) {
          output.push(`${explMatch[1]}category: '${pendingCategory}',`)
          modified = true
        }
      }
      pendingCategory = null
    } else {
      output.push(line)
    }
  }

  if (modified) {
    writeFileSync(filePath, output.join('\n'), 'utf-8')
    console.log(`✅ Updated: ${filePath}`)
  } else {
    console.log(`⏭  Skipped (already tagged or no questions): ${filePath}`)
  }
}

const targets = [
  'src/data/stories.ts',
  'src/data/stories-nov.ts',
  'src/data/stories-dec.ts',
  'src/data/stories-jan.ts',
  'src/data/stories-feb.ts',
  'src/data/stories-mar.ts',
  'src/data/stories-apr.ts',
  'src/data/stories-may.ts',
  'src/data/stories-jun.ts',
].map(f => join(ROOT, f))

for (const fp of targets) {
  processFile(fp)
}

console.log('\n🎉 カテゴリタグ付け完了')
