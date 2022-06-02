import { makeAutoObservable } from "mobx"
import { fetchTodos } from "../../services/todos/todos"

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
    const data = await fetchTodos()
    this.list = data
  }
}