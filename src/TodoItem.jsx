export const TodoItem = (props) => {
  const [completed, id, title, toggleTodo, deleteTodo] = [props.completed, props.id, props.title, props.toggleTodo, props.deleteTodo]

  const toggle = (e) => {
    toggleTodo(id, e.target.checked)
  } 

  const remove = () => {
    deleteTodo(id)
  } 

  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} onChange={toggle} />
        {title}
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