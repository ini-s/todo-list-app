import React from 'react'
import '../styles/TodoItem.css'
export default function TodoItem({ value, todoItems }) {
    const customStyle = { borderBottom: todoItems.length >1 && "1px solid #EDF2F7"}
    return (
        <div className="todo-item" style={customStyle}>
            {value}
        </div>
    )
}