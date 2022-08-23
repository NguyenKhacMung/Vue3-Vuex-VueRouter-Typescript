import { ActionContext, ActionTree } from 'vuex'
import todoService from '@/services/todos'
import { TodosActionTypes } from './action-types'
import { TodosMutationTypes } from './mutation-types'
import { Mutations } from './mutations'
import { IRootStore } from '@/store/interfaces'
import { State } from './state'
import { Todo } from '@/store/interfaces'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, IRootStore>, 'commit'>

export interface Actions {
  [TodosActionTypes.GET_ALL_TODOS]({ commit }: AugmentedActionContext): void
  [TodosActionTypes.GET_TODO_BY_STATUS](
    { commit }: AugmentedActionContext,
    payload: any
  ): Promise<void>
  [TodosActionTypes.UPDATE_TODO](
    { commit }: AugmentedActionContext,
    payload: any
  ): void
  [TodosActionTypes.ADD_TODO](
    { commit }: AugmentedActionContext,
    payload: Todo
  ): void
}

export const actions: ActionTree<State, IRootStore> & Actions = {
  async [TodosActionTypes.GET_ALL_TODOS]({ commit }) {
    try {
      const response = await todoService.getAllTodos()
      commit(TodosMutationTypes.SET_TODOS, response.data)
      console.log('getTodos', response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async [TodosActionTypes.GET_TODO_BY_STATUS]({ commit }, payload) {
    try {
      const response = await todoService.getTodoByStatus(payload)
      commit(TodosMutationTypes.SET_TODOS, response.data)
      console.log('getTodoByStatus', response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async [TodosActionTypes.UPDATE_TODO]({ commit }, payload) {
    try {
      const { id, status } = payload
      const response = await todoService.updateTodo(id, { status })
      commit(TodosMutationTypes.UPDATE_TODO, response.data)
      console.log('updateTodo', response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async [TodosActionTypes.ADD_TODO]({ commit }, payload: Todo) {
    try {
      const response = await todoService.addTodo(payload)
      commit(TodosMutationTypes.ADD_TODO, response.data)
      console.log('addTodo', response.data)
    } catch (error) {
      console.log(error)
    }
  },
}
