import React, { use, useEffect, useState } from 'react'

const Logger = () => {

    const [count, setCount] = useState(0);

    useEffect( () =>{
        console.log('Component rendered or count changed', count)
    });

    
  return (
    <div>
        <h1>Count</h1>
      <button onClick={() => setCount(count +1)}>Increment </button>
    </div>
  )
}

export default Logger
