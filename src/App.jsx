import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import { TodoProvider } from "./todoContext"
import "./styles.css"

export const App = () => {
  
  return (
    <TodoProvider>
      <NewTodoForm />
      <h1 className="header">Todo List</h1>
      <TodoList />
    </TodoProvider>
  )
}