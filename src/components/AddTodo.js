import React from 'react'
import '../styles/AddTodo.css'
export default function AddTodo({ todoInput, handleTodoInput, addItem, editId }) {

    return (
        <form className="todo-input">
            <input type="text" placeholder="Add a new task" value={todoInput} onChange={handleTodoInput}>
            </input>
            <button type="submit" className="add-btn" onClick={addItem}>{editId ? "Edit" : "Add"}</button>
        </form>
    )
}