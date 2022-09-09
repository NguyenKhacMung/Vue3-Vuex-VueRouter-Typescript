import { AxiosResponse } from 'axios'
import axios from '@/axios'
import { IUser } from '@/store/modules/auth/state'

export const authService = {
  postAuth: (body: any): Promise<AxiosResponse> => axios.post<IUser>('/login', body),
}
