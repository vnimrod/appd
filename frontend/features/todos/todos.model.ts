import { makeAutoObservable } from "mobx"
import axios from 'axios'

type Tags = {
  create: Tags[]
}

export type Todo = {
  id: number,
  createdTime: string,
  text: string,
  completed: boolean
  tags?: Tags 
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