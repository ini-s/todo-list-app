import React, { useState } from 'react'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import Footer from './components/Footer'
import './App.css'


export default function App() {
    const [todoItems, setTodoItems] = useState([])
    const [itemToEdit, setItemToEdit] = useState(null)

    function editTodo(id) {
        setItemToEdit(todoItems.find((e) => e.id === id))
    }

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
            <Footer />
        </div>
    )
}