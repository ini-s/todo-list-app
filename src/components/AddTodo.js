import React from 'react'
import '../styles/AddTodo.css'
import uuid from 'react-uuid'
export default function AddTodo(props) {
    function handleTodoInput(e) {
        const newValue = e.target.value
        console.log(newValue)
        props.setTodoInput(newValue)
    }

    function addItem(e) {
        e.preventDefault()
        const newItem = { id: uuid(), value: props.todoInput, isDone: false }
        props.setTodoItems(prevItems => [...prevItems, newItem])
        console.log(props.todoItems)
        props.setTodoInput("")
    }
    return (
            <form className="todo-input">
                <input type="text" placeholder="Add a new task" value={props.val} onChange={handleTodoInput}>
                </input>
                <button type="submit" className="add-btn" onClick={addItem}>Add</button>
            </form>
    )
}