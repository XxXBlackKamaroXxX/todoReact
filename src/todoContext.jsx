import { useEffect, useReducer, createContext, useContext,} from "react"
import { todosReducer }  from "./reducer"


export const TodoContext = createContext(null)

export const TodoDispatchContext = createContext(null)

export const TodoProvider = ({ children }) => {
    const [todos, dispatchTodos] = useReducer(todosReducer, [], () => {
        const localValue = localStorage.getItem("ITEMS") || []
        return JSON.parse(localValue)
    })
    
    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])

    return (
        <TodoContext.Provider value = {todos}>
            <TodoDispatchContext.Provider value = {dispatchTodos}>
              {children}
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
      )
}

export const useTodos = () => {
    return useContext(TodoContext)
}

export const useTodosDispatch = () => {
    return useContext(TodoDispatchContext)
}