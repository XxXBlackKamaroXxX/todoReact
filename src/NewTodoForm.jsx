import { useState } from "react"

export const NewTodoForm = ({ onSubmit }) => {
    const [newItem, setNewItem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newItem === "") return
        onSubmit(newItem)
        setNewItem("")
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