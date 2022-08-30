export interface IUser {
  id: string
  username: string
  password?: string
  accessToken: string
  email?: string
}

export interface State {
  user: IUser,
  isAuthenticated: boolean
}
export const state: State = {
  isAuthenticated: false,
  user: {
    id: '',
    username: '',
    accessToken: '',
  },
}
