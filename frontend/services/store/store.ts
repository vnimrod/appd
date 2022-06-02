import { createContext, useContext } from "react"
import Todos from '../../features/todos/todos.model'

export type Store = {
  todos: Todos
}

export const store: Store = {
  todos: new Todos()
}

export const StoreContext = createContext(store)

export function useStore() {
  return useContext(StoreContext)
}
