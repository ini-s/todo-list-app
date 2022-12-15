import React, { useState } from 'react'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import Footer from './components/Footer'
import './App.css'
import uuid from 'react-uuid'

export default function App() {
    const [todoItems, setTodoItems] = useState([])
    const [todoInput, setTodoInput] = useState("")
    const [editId, setEditId] = useState()

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
        else{
            const newItem = { id: uuid(), value: todoInput, isDone: false }
            setTodoItems(prevItems => [...prevItems, newItem])
            setTodoInput("")
        }
    }

    function handleEdit(id) {
        const editItem = todoItems.find(item => item.id === id)
        console.log(editItem)
        setEditId(editItem.id)
        setTodoInput(editItem.value)
    }

    return (
        <div className="App">
            <Header />
            <main>
                <AddTodo
                    todoInput={todoInput}
                    handleTodoInput={handleTodoInput}
                    addItem={addItem}
                    editId={editId}
                />
                <Todo
                    todoItems={todoItems}
                    handleEdit={handleEdit}
                />
            </main>
            <Footer />
        </div>
    )
}