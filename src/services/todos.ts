import axios from '@/axios'

const baseUrl = process.env.BASE_URL
const getAllTodosUrl = `${baseUrl}/todos`

export default {
  getAllTodos: () => axios.get(`/todos`),
  getTodoByStatus: (status: string) => axios.get(`/todos?status=${status}`),
  updateTodo: (id: string, body: any) => axios.patch(`/todos/${id}`, body),
  addTodo: (body: any) => axios.post(`/todos/`, body),
}
