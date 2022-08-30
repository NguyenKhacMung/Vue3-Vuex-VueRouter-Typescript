import { AuthMutationTypes } from './mutation-types'
import { ActionContext, ActionTree } from 'vuex'
import { AuthActionTypes } from './action-types'
import { Mutations } from './mutations'
import authService from '@/services/auth'
import { IRootState } from '@/store/interfaces'
import { State, IUser } from './state'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, IRootState>, 'commit'>

export interface Actions {
  [AuthActionTypes.LOGIN]({ commit }: AugmentedActionContext, payload: any): Promise<void>
}

export const actions: ActionTree<State, IRootState> & Actions = {
  async [AuthActionTypes.LOGIN]({ commit }, payload: any) {
    try {
      const response = await authService.postAuth(payload)
      commit(AuthMutationTypes.LOGIN_SUCCESS, response.data[0])
    } catch (error) {
      console.log(error)
    }
  },
}
