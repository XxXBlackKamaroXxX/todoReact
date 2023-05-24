import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
    {todos.length === 0 ? "No Todos" : null}
    {todos.map(todo => 
      <TodoItem 
          {...todo} 
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
      />
    )}
    </ul>
  )
}