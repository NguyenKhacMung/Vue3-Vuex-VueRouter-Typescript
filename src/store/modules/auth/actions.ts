import { AuthMutationTypes } from './mutation-types'
import { ActionContext, ActionTree } from 'vuex'
import { AuthActionTypes } from './action-types'
import { Mutations } from './mutations'
import authService from '@/services/auth'
import { IRootState } from '@/store/interfaces'
import { State, IUser } from './state'
import router from '@/router'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, IRootState>, 'commit'>

export interface Actions {
  [AuthActionTypes.LOGIN]({ commit }: AugmentedActionContext, payload: any): Promise<void>

  [AuthActionTypes.LOG_OUT]({ commit }: AugmentedActionContext): void
}

export const actions: ActionTree<State, IRootState> & Actions = {
  async [AuthActionTypes.LOGIN]({ commit }, payload: any) {
    try {
      const response = await authService.postAuth(payload)
      commit(AuthMutationTypes.LOGIN_SUCCESS, response.data)
      router.push('/')
      return Promise.resolve(response.data)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  [AuthActionTypes.LOG_OUT]({ commit }: AugmentedActionContext) {
    commit(AuthMutationTypes.LOG_OUT)
    router.push('/login')
  },
}
