import { MutationTree } from 'vuex'
import { accessToken, userStorage } from '@/storage'
import { AuthMutationTypes } from './mutation-types'
import { State, IUser } from './state'

interface payloadAuth {
  accessToken: string
  user: IUser
}
export type Mutations<S = State> = {
  [AuthMutationTypes.LOGIN_SUCCESS](state: S, payload: payloadAuth): void
  [AuthMutationTypes.LOG_OUT](state: S): void
}

export const mutations: MutationTree<State> & Mutations = {
  [AuthMutationTypes.LOGIN_SUCCESS](state: State, payload: payloadAuth) {
    state.isAuthenticated = true
    state.user = payload.user
    accessToken.setLocalStorage(payload.accessToken)
    userStorage.setLocalStorage(payload.user)
  },
  [AuthMutationTypes.LOG_OUT](state: State) {
    state.isAuthenticated = false
    state.user = null as any
    accessToken.removeLocalStorage()
    userStorage.removeLocalStorage()
  },
}
