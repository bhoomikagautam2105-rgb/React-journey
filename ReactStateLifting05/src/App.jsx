import { useState } from 'react'
import './App.css'
import Card from './Components/Card'


function App() {
  // CREATE STATE 
  // MANAGAE STATE 
  // CHANGE STATE 
  // SABHI CHILD M STATE KO SYNC KRWANA


  const [name, setName] = useState('')

  return (
    <div>
      <Card title ="card 1" name ={name} setName={setName}/>
      <Card title ="card 2" name ={name} setName={setName}/>
      <p>I'm inside parent component and value of name is : {name} </p>
    </div>
    
  )
}

export default App
