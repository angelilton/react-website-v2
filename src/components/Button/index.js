import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle = 'btn-primary',
  buttonSize = 'btn-medium'
}) => {
  return (
    <Link to="sign-up">
      <button
        className={`btn ${buttonStyle} ${buttonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}
