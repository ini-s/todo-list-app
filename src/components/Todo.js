import React from 'react'
import '../styles/Todo.css'
import TodoItem from './TodoItem'
export default function Todo({ todoItems, handleEdit, setTodoItems }) {
    const customStyle = { border: todoItems.length !== 0 && "3px solid #edf2f7" }

    function deleteTodo(id) {
        const newTodos = todoItems.filter(item => item.id !== id)
        setTodoItems(newTodos)
    }

    function handleClick(id) {
        setTodoItems(prevItems => prevItems.map(item => item.id === id ? { ...item, isDone: !item.isDone } : item))
        console.log(todoItems)
    }

    return (
        <div className="todos" style={customStyle}>
            {todoItems.map(item => {
                return <TodoItem
                    key={item.id}
                    id={item.id}
                    value={item.value}
                    handleEdit={() => handleEdit(item.id)}
                    handleDelete={() => deleteTodo(item.id)}
                    handleClick={() => handleClick(item.id)}
                    isDone={item.isDone}
                />
            })}
        </div>
    )
}