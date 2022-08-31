import { MutationTree } from 'vuex'
import { accessToken, user } from '@/storage'
import { AuthMutationTypes } from './mutation-types'
import { State, IUser } from './state'

interface payloadAuth {
  accessToken: string
  user: IUser
}
export type Mutations<S = State> = {
  [AuthMutationTypes.LOGIN_SUCCESS](state: S, payload: payloadAuth): void
  [AuthMutationTypes.LOG_OUT](state: S): void
  [AuthMutationTypes.LOAD_USER](state: S): void
}

export const mutations: MutationTree<State> & Mutations = {
  [AuthMutationTypes.LOGIN_SUCCESS](state: State, payload: payloadAuth) {
    state.isAuthenticated = true
    state.user = payload.user
    accessToken.setLocalStorage(payload.accessToken)
    user.setLocalStorage(JSON.stringify(payload.user))
  },
  [AuthMutationTypes.LOG_OUT](state: State) {
    state.isAuthenticated = false
    state.user = null as any
    accessToken.removeLocalStorage()
    user.removeLocalStorage()
  },
  [AuthMutationTypes.LOAD_USER](state: State) {
    // console.log('ccc', JSON.parse(user.getLocalStorage() as any))
    // state.user = user.getLocalStorage() as any
  },
}
