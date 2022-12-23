import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import Footer from './components/Footer'
import './App.css'


export default function App() {
    const [todoItems, setTodoItems] = useState(() => JSON.parse(localStorage.getItem("storedTodos")) || [] )
    const [itemToEdit, setItemToEdit] = useState(null)

    function editTodo(id) {
        setItemToEdit(todoItems.find((e) => e.id === id))
    }

    useEffect(() => {
        localStorage.setItem("storedTodos", JSON.stringify(todoItems))
    }, [todoItems])

    return (
        <div className="App">
            <Header />
            <main>
                <AddTodo
                    setTodoItems={setTodoItems}
                    setItemToEdit={setItemToEdit}
                    itemToEdit={itemToEdit}
                />
                <Todo
                    todoItems={todoItems}
                    handleEdit={editTodo}
                    setTodoItems={setTodoItems}
                />
            </main>
            <Footer
                showInstruction={todoItems.length > 0}
            />
        </div>
    )
}