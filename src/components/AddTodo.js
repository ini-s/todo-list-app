import React, { useState } from 'react'
import '../styles/AddTodo.css'
import uuid from 'react-uuid'
export default function AddTodo({ setTodoItems }) {
    const [todoInput, setTodoInput] = useState("")

    function handleTodoInput(e) {
        const newValue = e.target.value
        console.log(newValue)
        setTodoInput(newValue)
    }

    function addItem(e) {
        e.preventDefault()
        const newItem = { id: uuid(), value: todoInput, isDone: false }
        todoInput !== "" && setTodoItems(prevItems => [...prevItems, newItem])
        setTodoInput("")
    }
    return (
        <form className="todo-input">
            <input type="text" placeholder="Add a new task" value={todoInput} onChange={handleTodoInput}>
            </input>
            <button type="submit" className="add-btn" onClick={addItem}>Add</button>
        </form>
    )
}