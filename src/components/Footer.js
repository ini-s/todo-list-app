import React from 'react'
import '../styles/Footer.css'
export default function Footer({ showInstruction }) {
  return (
    <footer>
      {showInstruction && <p>Click on item to mark as completed</p>}
    </footer>
  )
}
