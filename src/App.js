import React from 'react'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import Footer from './components/Footer'
export default function App() {
    return (
        <div>
            <Header />
            <main>
                <AddTodo />
                <Todo />
            </main>
            <Footer />
        </div>
    )
}