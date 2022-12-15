import React, { useState } from 'react'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import Footer from './components/Footer'
import './App.css'
export default function App() {
    const [todoItems, setTodoItems] = useState([])

    return (
        <div className="App">
            <Header />
            <main>
                <AddTodo
                    setTodoItems={setTodoItems}
                />
                <Todo
                    todoItems={todoItems}
                />
            </main>
            <Footer />
        </div>
    )
}