import { useState } from 'react'
import './App.css'
import LoginBtn from './Components/LoginBtn'
import LogoutBtn from './Components/LogoutBtn'

function App() {
  const [isLoggedIn, setLogedIn] = useState(false);

                                // BY TERNARY OPERATOR
                  // <h1> By Using ternary operator</h1>
  //  return(
  //   <>
  //   {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </>
  //  )                             

                                // BY IF -ELSE CONDITION
            //  <h1> By using if else condition</h1>

    // if(isLoggedIn){
    //   return(
    //      <LogoutBtn />
    //   )
     
    // }
    // else{
    //   return(
    //     <LoginBtn />
    //   )
      
    // }

                                 // BY LOGICAL OPERATOR

                    // <h1> By using Logical operator</h1>             
  // return(
  //   <>
  //   <h1>Using Logical operator for condition check </h1>
  //   <div>
  //     {isLoggedIn && <LogoutBtn/> }
  //   </div>
  //   </>
  // )

                                  // EARLY RETURN
        <h1> By using Early statement</h1>
if(!isLoggedIn){
  return(
    <LoginBtn />
  )
}

}

export default App
