import { CommitOptions, DispatchOptions, Module, Store } from 'vuex'
import { State, state } from './state'
import { Getters, getters } from './getters'
import { Mutations, mutations } from './mutations'
import { Actions, actions } from './actions'
import { IRootState } from '../../interfaces'

export { State }

export type AuthStore<S = State> = Omit<
  Store<S>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

export const authModule: Module<State, IRootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
}
