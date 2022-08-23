import { Todo } from '../../interfaces'

export type State = {
  todos: Todo[]
}
export const state: State = {
  todos: [],
}
