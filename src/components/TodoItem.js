import React from 'react'
import '../styles/TodoItem.css'
export default function TodoItem({ value }) {
    return (
        <div className="todo-item" >
            {value}
        </div>
    )
}