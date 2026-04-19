import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 const [counter, setCounter] = useState(10);

  const addValue = () => {
                             //we are using loop so that the counter value doesn't go above 20  
    if(counter < 20){
      setCounter(counter + 1)
    }
                            // // And this type code use for update value anywhere by hook
    console.log("Clicked" ,counter);

                                   // counter = counter + 1
     // setCounter(counter + 1)  
  }
  const removeValue = () => {
                                  //we are using loop so that the counter value doesn't go below 0 
    if(counter > 0){
      setCounter(counter - 1)
    }                              // And this type code use for update value anywhere by hook
    console.log("Clicked" ,counter);
                          
    // counter = counter - 1
    // setCounter(counter - 1)

  }

  const [count, setCount] = useState(0)

  return (
    <div >
      <h1>Today learning about Hooks</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick = {removeValue}> Remove value</button>
    </div>
  )
}

export default App
