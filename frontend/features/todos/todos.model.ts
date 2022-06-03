import { action, makeAutoObservable, runInAction } from "mobx"
import { fetchTodos, searchTodos } from "../../services/todos/todos"

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
  list: Todo[] = [] 

  constructor() {
    makeAutoObservable(this,{
      fetch: action.bound
    });
  }

  async fetch(searchQuery: string = '') {
    const data = await fetchTodos()

    if(searchQuery) {
      const searchedTodos = await searchTodos(searchQuery)
      const todosIds = searchedTodos.map((item: Todo) => item.id)
      runInAction(() => {
        this.list = data.filter((item: Todo) => todosIds.includes(item.id))
      })
    } else {
    runInAction(() => {
        this.list = [...data]
      })
    }
  }
}