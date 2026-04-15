
import './App.css'

import UserCard from "./Components/UserCard"
import bhoomiPic from './assets/bhoomiPic.png'
import cutie from './assets/cutie.png'
import laado from './assets/laado.png'

function App() {

  return (
    <div className="Container">
      <UserCard name ="Bhoomi Gautam" desc ="My name is Bhoomika Gautam."
      image ={bhoomiPic}
      />
      <UserCard name ="Cutiee" desc ="Myself cutie piee.
      I'm from Sadabad."
      image ={cutie} 
      style = {{"border-radius ":"50px"}}/>
      <UserCard name ="Ghar ki laadli beti  " desc ="Apple of my eye.
     Loving to everyone" 
      image ={laado}/>
    </div>
  )
}

export default App
