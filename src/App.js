import React, { useState } from 'react'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import Footer from './components/Footer'
import './App.css'


export default function App() {
    const [todoItems, setTodoItems] = useState([])
    const [editId, setEditId] = useState()

    function editTodo(id) {
        setEditId(id)
    }

    return (
        <div className="App">
            <Header />
            <main>
                <AddTodo
                    setTodoItems={setTodoItems}
                    editId={editId}
                    setEditId={setEditId}
                    itemToEdit={editId ? todoItems.find((e) => e.id === editId) :undefined}

                />
                <Todo
                    todoItems={todoItems}
                    handleEdit={editTodo}
                />
            </main>
            <Footer />
        </div>
    )
}