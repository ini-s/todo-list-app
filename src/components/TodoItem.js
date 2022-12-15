import React from 'react'
import '../styles/TodoItem.css'
import { FiEdit } from 'react-icons/fi'
export default function TodoItem({ value, handleEdit }) {
    return (
        <div className="todo-item" >
            <p>{value}</p>
            <div className="edit" onClick={handleEdit}>
                <FiEdit />
            </div>
        </div>
    )
}