import { IRootState } from '@/store/interfaces'
import { todosModule, TodosStore } from '@/store/modules/todo'
import { authModule, AuthStore } from '@/store/modules/auth'
import { createStore } from 'vuex'

export type Store = TodosStore<Pick<IRootState, 'todoState'>> &
  AuthStore<Pick<IRootState, 'todoState'>>

export const store = createStore({
  modules: {
    authModule,
    todosModule,
  },
})

// export function userStore(): Store {
//   return store as Store
// }
