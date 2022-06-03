import * as api from '../api/todos'

export type formData = {
  text: string
}

//need tp be async
export const fetchTodos = async () => {
  const resData = await api.getAll()
  return resData
}

export const searchTodos = async (searchQuery: string) => {
  const resData = await api.getSearchedTodo(searchQuery)
  return resData
}

export const addTodo = async (formData: formData) => {
  const resData = await api.addNewTodo(formData)
  return resData
}