import React, { useState } from 'react'
import "./Card.css"

const Card = () => {
  const [count,setcount] = useState(0);
  return (
    <div className='container'>
      <p id ="note">you have clicked {count} times</p>
      <button onClick={() => {setcount(count + 1 )}}>click me</button>
    </div>
  )
}

export default Card
