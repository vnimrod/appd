import * as api from '../api/todos'

export type FormData = {
  text: string
}

export type EditedData = {
  text: string,
  completed: boolean
}

//need tp be async
export const fetchTodos = async () => {
  const resData = await api.getAll()
  return resData
}

export const searchTodos = async (searchQuery: string) => {
  const resData = await api.getAllSearched(searchQuery)
  return resData
}

export const addTodo = async (formData: FormData) => {
  const resData = await api.add(formData)
  return resData
}

export const updateTodo = async (id: number, editedData: EditedData) => {
  const resData = await api.update(id, editedData)
  return resData
}

export const deleteSingleTodo = async (id: number) => {
  await api.singleDelete(id)
}
