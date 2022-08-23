export interface Todo {
  id: string
  title: string
  description?: string
  status: 'completed' | 'removed' | 'inProgress'
  tag?: string
}

export interface IRootStore {
  todos: Todo[]
}
