import React, { useState } from 'react'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import Footer from './components/Footer'
import './App.css'
export default function App() {
    const [todoItems, setTodoItems] = useState([])
    const [todoInput, setTodoInput] = useState("")

    return (
        <div className="App">
            <Header />
            <main>
                <AddTodo
                    val={todoInput}
                    todoItems={todoItems}
                    todoInput={todoInput}
                    setTodoItems={setTodoItems}
                    setTodoInput={setTodoInput}
                />
                <Todo />
            </main>
            <Footer />
        </div>
    )
}