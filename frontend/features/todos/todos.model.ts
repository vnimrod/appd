import { action, makeAutoObservable, runInAction } from "mobx"
import * as todosService from "../../services/todos/todos"


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
    const data = await todosService.fetchTodos()

    if(searchQuery) {
      const searchedTodos = await todosService.searchTodos(searchQuery)
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

  async add (formData: todosService.FormData) {
    const data = await todosService.addTodo(formData)
    this.list = [...this.list, data]
  }

  async update (id: number, editedData: todosService.EditedData) {
    await todosService.updateTodo(id, editedData)
    this.list = this.list.map((item) => item.id === id ? {...item, text: editedData.text}: item)
  }
  
  async delete (id: number) {
    await todosService.deleteSingleTodo(id)
    this.list = this.list.filter((item) => item.id !== id)
  }
}