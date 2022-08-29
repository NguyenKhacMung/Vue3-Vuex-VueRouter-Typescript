import axios from '@/axios'

export default {
  postAuth: (body: any) => axios.post('/auth/login', body),
}
