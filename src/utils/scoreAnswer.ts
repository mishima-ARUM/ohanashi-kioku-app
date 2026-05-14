import type { MarkerTask, MarkerSelection } from '../types'

export function scoreAnswer(tasks: MarkerTask[], selections: MarkerSelection[]): boolean[] {
  return tasks.map(task =>
    selections.some(s =>
      s.optionId === task.optionId &&
      s.color === task.color &&
      s.shape === task.shape
    )
  )
}
