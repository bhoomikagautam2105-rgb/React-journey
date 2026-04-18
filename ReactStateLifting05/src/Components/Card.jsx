import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type='text' onChange={(e) => props.setName(e.target.value)}/>
      <p>Name state value inside in input tag {props.card}: {props.name}</p>
    </div>
  )
}

export default Card
