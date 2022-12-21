import React, { useState, useEffect } from 'react'
import '../styles/AddTodo.css'
import uuid from 'react-uuid'
export default function AddTodo({ itemToEdit, setTodoItems, setItemToEdit }) {

    const [todoInput, setTodoInput] = useState("")
    useEffect(() => {
        itemToEdit && setTodoInput(itemToEdit.value)
    }, [itemToEdit])

    function handleTodoInput(e) {
        const newValue = e.target.value
        console.log(newValue)
        setTodoInput(newValue)
    }

    function addItem(e) {
        e.preventDefault()
        if (!todoInput) return
        if (itemToEdit) {
            const editedItem = todoInput
            setTodoItems(prevItems => prevItems.map(item => {
                return itemToEdit.id === item.id ? { ...item, value: editedItem } : item
            }))
            setTodoInput("")
            setItemToEdit("")
        }
        else {
            const newItem = { id: uuid(), value: todoInput, isDone: false }
            setTodoItems(prevItems => [...prevItems, newItem])
            setTodoInput("")
        }
    }



    return (
        <form className="todo-input">
            <input type="text" placeholder="Add a new task" value={todoInput} onChange={handleTodoInput}>
            </input>
            <button type="submit" className="add-btn" onClick={addItem}>{itemToEdit ? "Edit" : "Add"}</button>
        </form>
    )
}