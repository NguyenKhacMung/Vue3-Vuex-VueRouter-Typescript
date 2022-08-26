import { GetterTree } from 'vuex'
import { IRootState } from '@/store/interfaces';
import { State, Todo } from './state'

export type Getters = {
  getTodos(state: State): Todo[] | []
}

export const getters: GetterTree<State, IRootState> & Getters = {
  getTodos: (state) => state.todos,
}
