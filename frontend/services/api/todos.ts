import axios from "axios"
import type { FormData, EditedData } from "../todos/todos"

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

export const addNewTodo = async (formData: FormData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const data = await axios.post(
      'http://localhost:3333/api/todo',
      formData,
      config
    );

    return data.data
  } catch (error) {
    throw new Error("Failed to add new data. please, try again")
  }
}

export const updateTodo = async (id: number, editedData: EditedData) => {

  const body = {
    id,
    ...editedData
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const data = await axios.patch(
      'http://localhost:3333/api/todo',
      body,
      config
    );

    return data.data
  } catch (error) {
    throw new Error("Failed to update new data. please, try again")
  }
}