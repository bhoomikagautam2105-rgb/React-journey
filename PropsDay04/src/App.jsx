import { useState } from 'react'
import './App.css'
import Card from "./Components/Card"
import Button from "./Components/Button"

function App() {
  const [count, setCount] = useState(0)

  function handleClick () {
    setCount(count+1);
  }

  return (
   <>
   <Button handleClick = {handleClick} text ="click me">
    <h2>{count}</h2>
   </Button>
    <Card>
      <h1> Learning React  JS </h1>
      <p className="para">By Love Babbar Channel </p>
      <p className='para'> Great feeling in learning and using</p>
    </Card>
   </>
  )
}

export default App
