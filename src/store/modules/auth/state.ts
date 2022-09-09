import { userStorage } from '@/storage'

export interface User {
  id: string
  username: string
  email: string
}
export interface IUser {
  accessToken: string
  user: IUser
}
export interface State {
  user: IUser | null
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
      user: null,
    }
