import { State as TodoState } from '@/store/modules/todo'
import { State as AuthState } from '@/store/modules/auth'

export type IRootState = {
  authState: AuthState
  todoState: TodoState
}
