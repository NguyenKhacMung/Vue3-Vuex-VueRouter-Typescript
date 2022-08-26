import { IRootState } from '@/store/interfaces'
import { todosModule, TodosStore } from '@/store/modules/todo'
import { createStore } from 'vuex'

export type Store = TodosStore<Pick<IRootState, 'todoState'>>

export const store = createStore({
  modules: {
    todosModule,
  },
})

export function userStore(): Store {
  return store as Store
}
