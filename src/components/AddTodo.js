import React from 'react'
import '../styles/AddTodo.css'
export default function AddTodo() {
    return (
            <form className="todo-input">
                <input type="text" placeholder="Add a new task">
                </input>
                <button type="submit" className="add-btn">Add</button>
            </form>
    )
}