import { useTodosDispatch } from "./todoContext"
import { TOGGLE_TODO, DELETE_TODO }  from "./reducer"


export const TodoItem = (todo) => {
  const dispatchTodos = useTodosDispatch()

  const toggle = (e) => {
    dispatchTodos({
      type: TOGGLE_TODO,
      todoId: todo.id,
      todoCompleted: e.target.checked
    })
  } 

  const remove = () => {
    dispatchTodos({
      type: DELETE_TODO,
      todoId: todo.id
    })
  } 


  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={toggle} />
        {todo.title}
      </label>
      <button 
        onClick={remove}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  )
}
