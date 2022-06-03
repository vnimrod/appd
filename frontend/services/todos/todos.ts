import * as todosApi from '../api/todos'

//need tp be async
export const fetchTodos = async () => {
  const resData = await todosApi.getAll()
  return resData
}

export const searchTodos = async (searchQuery: string) => {
  const resData = await todosApi.getSearchedTodo(searchQuery)
  return resData
}