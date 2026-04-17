import React from 'react'
import "./Card.css"

// DeStructure of props, 2nd way of props print name is ({name}) and then acces like this = {name}

// 1st way is below

const Card = (props) => {
  return ( 
    // CHILDREN PROPS IS =  Children in props allow components to receive and display nested content passed between their opening and closing tags.
    <div>
       {props.children}
              
    </div>
  )
}

export default Card
