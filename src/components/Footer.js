import React from 'react'
import '../styles/Footer.css'
export default function Footer({ todoItems }) {
  return (
    <footer>
      {todoItems.length > 0 && <p>Click on item to mark as done or undone</p>}
    </footer>
  )
}
