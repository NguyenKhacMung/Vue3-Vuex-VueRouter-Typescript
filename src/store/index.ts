import { createStore } from 'vuex'
import todoService from '@/services/todos'
import { TodosMutationTypes as types } from './type'
import { Todo } from './interfaces'
interface Store {
  todos: Todo[]
}
export default createStore<Store>({
  state: {
    todos: [],
  },
  getters: {},
  mutations: {
    [types.SET_TODOS](state, payload) {
      state.todos = payload
    },
    [types.ADD_TODO](state, payload) {
      state.todos = [...state.todos, payload]
    },
    [types.UPDATE_TODO](state, payload) {
      state.todos = state.todos.filter((item) => item.id !== payload.id)
    },
  },
  actions: {
    async getTodos({ commit }) {
      try {
        const response = await todoService.getAllTodos()
        commit(types.SET_TODOS, response.data)
        console.log('getTodos', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getTodoByStatus({ commit }, payload) {
      try {
        const response = await todoService.getTodoByStatus(payload)
        commit(types.SET_TODOS, response.data)
        console.log('getTodoByStatus', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async updateTodo({ commit }, payload) {
      try {
        const { id, status } = payload
        const response = await todoService.updateTodo(id, { status })
        commit(types.UPDATE_TODO, response.data)
        console.log('updateTodo', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async addTodo({ commit }, payload) {
      try {
        const response = await todoService.addTodo(payload)
        commit(types.ADD_TODO, response.data)
        console.log('addTodo', response.data)
      } catch (error) {
        console.log(error)
      }
    },
  },
  modules: {},
})
