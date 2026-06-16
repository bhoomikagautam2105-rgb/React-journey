import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  // function handleClick(){
  //   alert('You have clicked..')
  // }
  // function handleMouseOver (){
  //   alert('mei para hu')
  // }
  function handleInputChange(e) {
          console.log("value till now : ", e.target.value);
        }

    function handleSubmit(e){
      e.preventDefault();
      alert('Should I submit the form ?');
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <input type='text' onChange={handleInputChange}/>
        <button type='submit'> Submit</button>
      </form>

      {/* <p onMouseOver={handleMouseOver} style={{border: "1px solid black"}}> hello dosto</p>
      <button onClick={handleClick}>
        Click me !
     </button> */}
    </div>
  )
}

export default App
