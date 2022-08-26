import axios from '@/axios'
import { Todo } from '@/store/modules/todo/state'

const baseUrl = process.env.BASE_URL
const getAllTodosUrl = `${baseUrl}/todos`

export default {
  getAllTodos: () => axios.get<Todo[]>(`/todos`),
  getTodoByStatus: (status: string) =>
    axios.get<Todo[]>(`/todos?status=${status}`),
  updateTodo: (id: string, body: any) =>
    axios.patch<Todo>(`/todos/${id}`, body),
  addTodo: (body: Todo) => axios.post<Todo>(`/todos/`, body),
}
