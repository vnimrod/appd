import axios from "axios"

export const getAll = async () => {
  try {
    const data = await axios.get('http://localhost:3333/api/todos')
    return data.data
  } catch (error) {
    throw new Error("Failed to retrieve data for this request")
  }
}

export const getSearchedTodo = async (searchQuery: string) => {
  try {
    const data = await axios.get(`http://localhost:3333/api/todos?search=${searchQuery}`)
    return data.data
  } catch (error) {
    throw new Error("Failed to retrieve data for this request")
  }
}