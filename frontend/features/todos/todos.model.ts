import { makeAutoObservable } from "mobx"
import axios from 'axios'

type Tag = {
  id: number,
  text: string
}

export type Todo = {
  id: number,
  createdTime: string,
  text: string,
  completed: boolean
  tags?: Tag[] 
}

export default class TodosStore {
  list!: Todo[]

  constructor() {
    makeAutoObservable(this);
  }

  async fetch() {
    const data = await axios.get('http://localhost:3333/api/todos')
      this.list = data?.data
  }
}