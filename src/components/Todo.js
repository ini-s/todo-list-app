import React from 'react'
import '../styles/Todo.css'
import TodoItem from './TodoItem'
export default function Todo({ todoItems, handleEdit }) {
    const customStyle = { border: todoItems.length !== 0 && "3px solid #edf2f7" }
    return (
        <div className="todos" style={customStyle}>
            {todoItems.map(item => {
                return <TodoItem
                    key={item.id}
                    id={item.id}
                    value={item.value}
                    handleEdit={()=>handleEdit(item.id)}
                />
            })}
        </div>
    )
}