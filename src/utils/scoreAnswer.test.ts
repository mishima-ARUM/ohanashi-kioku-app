import { describe, it, expect } from 'vitest'
import { scoreAnswer } from './scoreAnswer'
import type { MarkerTask, MarkerSelection } from '../types'

const tasks: MarkerTask[] = [
  { instruction: 'test1', optionId: 'a', color: 'red', shape: 'circle' },
  { instruction: 'test2', optionId: 'b', color: 'blue', shape: 'triangle' },
]

describe('scoreAnswer', () => {
  it('空のselectionsはすべてfalse', () => {
    expect(scoreAnswer(tasks, [])).toEqual([false, false])
  })

  it('完全一致するselectionがあればtrue', () => {
    const selections: MarkerSelection[] = [
      { optionId: 'a', color: 'red', shape: 'circle' },
    ]
    expect(scoreAnswer(tasks, selections)).toEqual([true, false])
  })

  it('optionIdが合っても色・形が違えばfalse', () => {
    const selections: MarkerSelection[] = [
      { optionId: 'a', color: 'blue', shape: 'circle' }, // wrong color
    ]
    expect(scoreAnswer(tasks, selections)).toEqual([false, false])
  })

  it('両taskともに正解できる', () => {
    const selections: MarkerSelection[] = [
      { optionId: 'a', color: 'red', shape: 'circle' },
      { optionId: 'b', color: 'blue', shape: 'triangle' },
    ]
    expect(scoreAnswer(tasks, selections)).toEqual([true, true])
  })

  it('余分なselectionがあっても正解判定に影響しない', () => {
    const selections: MarkerSelection[] = [
      { optionId: 'z', color: 'green', shape: 'cross' }, // extra, wrong
      { optionId: 'a', color: 'red', shape: 'circle' },
    ]
    expect(scoreAnswer(tasks, selections)).toEqual([true, false])
  })
})
