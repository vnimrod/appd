import * as todosApi from '../api/todos'

//need tp be async
export const fetchTodos = async () => {
  const resData = await todosApi.getAll()
  return resData
}