import { useState } from 'react'
import './App.css'
import Logger from './components/Logger'
import Timer from './components/Timer'
import Resize from './components/Resize'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Logger /> */}
      {/* <Timer /> */}
      <Resize />
    </div>
  )
}

export default App
