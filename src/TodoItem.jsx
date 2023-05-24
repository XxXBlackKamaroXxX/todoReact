export const TodoItem = (props) => {
  const {completed, id, title, toggleTodo, deleteTodo} = props
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
