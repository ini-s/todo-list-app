import React from 'react'
import '../styles/TodoItem.css'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
export default function TodoItem({ value, handleEdit, handleDelete }) {
    return (
        <div className="todo-item" >
            <p>{value}</p>
            <div className="edit" onClick={handleEdit}>
                <FiEdit className="icon" />
            </div>
            <div className="delete" onClick={handleDelete}>
                <RiDeleteBin6Line className="icon" />
            </div>
        </div>
    )
}