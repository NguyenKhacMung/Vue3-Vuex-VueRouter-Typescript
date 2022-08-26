export interface Todo {
  id: string
  title: string
  description?: string
  status: 'completed' | 'removed' | 'inProgress'
  tag?: string
}

export interface State {
  todos: Todo[]
}
export const state: State = {
  todos: [],
}
