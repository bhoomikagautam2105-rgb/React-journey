import React from 'react'
import './Button.css'
const Button = (props) => {

  return (
    <div>
      {props.children}
      <button id='btn' onClick={props.handleClick}>
         {props.text}
      </button>
    </div>
  )
}

export default Button
