import { useState } from "react"
import { useTodosDispatch } from "./todoContext"
import { ADD_TODO } from "./reducer"

export const NewTodoForm = () => {
    const [newItem, setNewItem] = useState("")
    const dispatchTodos = useTodosDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newItem === "") return
        setNewItem("")
        dispatchTodos({
            type: ADD_TODO,
            newTitle: newItem
        })
    }

    const createItem = (e) => {
        setNewItem(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem} 
                    onChange={createItem} 
                    type="text" 
                    id="item" 
                />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}