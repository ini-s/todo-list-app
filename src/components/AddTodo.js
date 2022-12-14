import React from 'react'
import '../styles/AddTodo.css'
export default function AddTodo(props) {
    return (
            <form className="todo-input">
                <input type="text" placeholder="Add a new task" value={props.val} onChange={props.handleChange}>
                </input>
                <button type="submit" className="add-btn" onClick={props.add}>Add</button>
            </form>
    )
}