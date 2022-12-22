import React from 'react'
import '../styles/TodoItem.css'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function TodoItem({ value, handleEdit, handleDelete, handleClick, isDone }) {
    const strike = {textDecoration : isDone && "line-through"}
    return (
        <div className="todo-item" >
            <p onClick={handleClick} style={strike}>{value}</p>
            <div className="edit" onClick={handleEdit}>
                <FiEdit className="icon" />
            </div>
            <div className="delete" onClick={handleDelete}>
                <RiDeleteBin6Line className="icon" />
            </div>
        </div>
    )
}