import axios from "axios"
import type { FormData, EditedData } from "../todos/todos"

const BACKEND_BASE_URL = "http://localhost:3333/api"

export const getAll = async () => {
  try {
    const data = await axios.get(`${BACKEND_BASE_URL}/todos`)

    return data.data
  } catch (error) {
    throw new Error("Failed to retrieve data for this request")
  }
}

export const getAllSearched = async (searchQuery: string) => {
  try {
    const data = await axios.get(`${BACKEND_BASE_URL}/todos?search=${searchQuery}`)

    return data.data
  } catch (error) {
    throw new Error("Failed to retrieve data for this request")
  }
}

export const add = async (formData: FormData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const data = await axios.post(
      `${BACKEND_BASE_URL}/todo`,
      formData,
      config
    );

    return data.data
  } catch (error) {
    throw new Error("Failed to add new data. please, try again")
  }
}

export const update = async (id: number, editedData: EditedData) => {

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
      `${BACKEND_BASE_URL}/todo`,
      body,
      config
    );

    return data.data
  } catch (error) {
    throw new Error("Failed to update new data. please, try again")
  }
}

export const singleDelete = async (id: number) => {
  try {
    await axios.delete(`${BACKEND_BASE_URL}/todo/${id}`)
  } catch (error) {
    throw new Error("Failed to delete data. please, try again")
  }
}