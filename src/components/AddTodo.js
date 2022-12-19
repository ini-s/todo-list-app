import React, {useState, useEffect} from 'react'
import '../styles/AddTodo.css'
import uuid from 'react-uuid'
export default function AddTodo({todoItems, setTodoItems, editId, setEditId}) {
    
    const [todoInput, setTodoInput] = useState("")

    useEffect(()=>{
        if (editId){
            const editItem = todoItems.find(item => item.id === editId)
            console.log(editItem)
            setTodoInput(editItem.value)
        }
    }, [editId,todoItems])

    function handleTodoInput(e) {
        const newValue = e.target.value
        console.log(newValue)
        setTodoInput(newValue)
    }

    function addItem(e) {
        e.preventDefault()
        if (!todoInput) return
        if (editId) {
            const editedItem = todoInput
            setTodoItems(prevItems => prevItems.map(item => {
                return editId === item.id ? { ...item, value: editedItem } : item
            }))
            setTodoInput("")
            setEditId()
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
            <button type="submit" className="add-btn" onClick={addItem}>{editId ? "Edit" : "Add"}</button>
        </form>
    )
}