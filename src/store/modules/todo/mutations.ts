import { MutationTree } from 'vuex'
import { TodosMutationTypes } from './mutation-types'
import { State } from './state'
import { Todo } from '@/store/interfaces'

export type Mutations<S = State> = {
  [TodosMutationTypes.SET_TODOS](state: S, payload: Todo[]): void
  [TodosMutationTypes.ADD_TODO](state: S, payload: Todo): void
  [TodosMutationTypes.UPDATE_TODO](state: S, payload: Todo): void
}

export const mutations: MutationTree<State> & Mutations = {
  [TodosMutationTypes.SET_TODOS](state: State, payload: Todo[]) {
    state.todos = payload
  },
  [TodosMutationTypes.ADD_TODO](state: State, payload: Todo) {
    state.todos = [...state.todos, payload]
  },
  [TodosMutationTypes.UPDATE_TODO](state: State, payload: Todo) {
    state.todos = state.todos.filter((item: Todo) => item.id !== payload.id)
  },
}
