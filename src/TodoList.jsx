import { useContext } from "react"
import { TodoItem } from "./TodoItem"
import { useTodos } from "./todoContext"

export const TodoList = () => {
  const todos = useTodos()
  return (
    <ul className="list">
    {todos.length === 0 ? "No Todos" : null}
    {todos.map(todo => 
      <TodoItem 
          {...todo} 
          key={todo.id}
      />
    )}
    </ul>
  )
}