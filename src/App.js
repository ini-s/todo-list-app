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

    function handleTodoInput(e) {
        const newValue = e.target.value
        console.log(newValue)
        setTodoInput(newValue)
    }

    function addItem(e) {
        e.preventDefault()
        const newItem = { id: uuid(), value: todoInput, isDone: false }
        setTodoItems(prevItems => [...prevItems, newItem])
        console.log(todoItems)
        setTodoInput("")
    }
    return (
        <div className="App">
            <Header />
            <main>
                <AddTodo
                    val={todoInput}
                    handleChange={handleTodoInput}
                    add={addItem}
                />
                <Todo />
            </main>
            <Footer />
        </div>
    )
}