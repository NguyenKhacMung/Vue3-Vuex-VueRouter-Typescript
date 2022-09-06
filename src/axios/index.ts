import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { AuthActionTypes } from './../store/modules/auth/action-types'
import { accessToken } from '@/storage'
import { store } from '@/store'

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3002',
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axios.defaults.baseURL = 'http://localhost:3002'
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = JSON.parse(accessToken.getLocalStorage()!)
    if (token) {
      config.headers!.Authorization = 'Bearer ' + token
    } else {
      delete axios.defaults.headers.common['Authorization']
    }
    console.log('config', config)
    return config
  },
  (error: AxiosError): Promise<AxiosError> => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    console.log('response', response)
    return response
  },
  (error: AxiosError): Promise<AxiosError> => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.log('error', error.response.data)
          break
        case 401:
          console.log('store', store)
          store.dispatch('authModule/' + AuthActionTypes.LOG_OUT)
          break
        case 404:
          console.error('/not-found')
          break
        case 500:
          console.error('/server-error')
          break
        default:
          console.log('error', error.response.data)
          break
      }
    }
    return Promise.reject(error)
  }
)

export default axios
