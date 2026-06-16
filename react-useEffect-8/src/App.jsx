import { use, useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  // useEffect( () =>{
  //    // First -> side-effect function
  //    // Second -> Clean-up function
  //    // Third -> Comma saparated dependancy list
  //   first 

  //   return() =>{
  //     second
  //   }
  // },[thirsd] )


                                           // Variation -1 runs on every render

  // useEffect(() =>{
  //   alert('I will run on each render');
  // })


                                       // Variation -2 that run on only 1st render

  // useEffect(() => {
  //   alert('I will run on 1st render');
  // },[])

                                    // Variation 3

  // useEffect(() => {
  //   alert('I will run on every time when count is updated');
  // },[count])

                                   // Variation 4

  //   useEffect(() => {
  //   alert('I will run on every time when count/total is updated');
  // },[count,total])


                       //VARIATION 5 

                                  // LETS ADD A CLEAN UP FUNCTION ... 
    
  // useEffect(() => {
  //   alert ('count is updated ');

  //   return () => {
  //      alert ('count is unmounted for UI ');

  //   }

  // }, [count])


    function handleClick(){
      setCount(count+1);
    }

    function handleClickTotal(){
      setTotal(total+1);
    }
  return (

    <div>
      <button onClick={handleClick}>Update count</button>
      <br/>
      count is: {count}
    <br />
      <button onClick={handleClickTotal}>Update total</button>
      <br/>
      Total is: {total}

    </div>
  )
}
export default App
