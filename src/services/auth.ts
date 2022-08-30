import axios from '@/axios'

export default {
  postAuth: (body: any) => axios.get(`/users?username=${body.username}&password=${body.password}`),
}
