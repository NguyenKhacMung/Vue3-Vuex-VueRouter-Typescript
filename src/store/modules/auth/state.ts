import { userStorage } from '@/storage'

export interface IUser {
  id: string
  username: string
  password?: string
  email: string
}
export interface State {
  user?: IUser
  isAuthenticated: boolean
}

const user = JSON.parse(userStorage.getLocalStorage()!)
export const state: State = user
  ? {
      isAuthenticated: true,
      user,
    }
  : {
      isAuthenticated: false,
      user: null as any,
    }
