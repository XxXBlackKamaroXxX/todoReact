import { useEffect, useReducer } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import { todosReducer }  from "./reducer"
import "./styles.css"

export const App = () => {
  const [todos, dispatchTodos] = useReducer(todosReducer, [], () => {
    const localValue = localStorage.getItem("ITEMS") || []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  const addTodo = (title) => {
    dispatchTodos({
      type: 'add',
      newTitle: title
    })
  }

  const toggleTodo = (id, completed) => {
    dispatchTodos({
      type: 'toggle',
      todoId: id,
      todoCompleted: completed
    })
  }

  const deleteTodo = (id) => {
    dispatchTodos({
      type: 'delete',
      todoId: id
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />
    </>
  )
}