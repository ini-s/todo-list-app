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
        setItemToEdit(id)
    }

    return (
        <div className="App">
            <Header />
            <main>
                <AddTodo
                    setTodoItems={setTodoItems}
                    setItemToEdit={setItemToEdit}
                    itemToEdit={itemToEdit ? todoItems.find((e) => e.id === itemToEdit) :undefined}
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