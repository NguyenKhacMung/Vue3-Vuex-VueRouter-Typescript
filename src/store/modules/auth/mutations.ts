import { MutationTree } from 'vuex'
import { userStorage } from '@/storage'
import { AuthMutationTypes } from './mutation-types'
import { State, IUser } from './state'

export type Mutations<S = State> = {
  [AuthMutationTypes.LOGIN_SUCCESS](state: S, payload: IUser): void
  [AuthMutationTypes.LOG_OUT](state: S): void
}

export const mutations: MutationTree<State> & Mutations = {
  [AuthMutationTypes.LOGIN_SUCCESS](state: State, payload: IUser) {
    state.isAuthenticated = true
    state.user = payload
    userStorage.setLocalStorage(payload)
  },
  [AuthMutationTypes.LOG_OUT](state: State) {
    state.isAuthenticated = false
    state.user = null
    userStorage.removeLocalStorage()
  },
}
