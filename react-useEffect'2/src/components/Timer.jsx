import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Timer () {
    const [seconds, setSeconds] = useState(0);

    useEffect (() => {
        const intervalId = setInterval(()=>{
            console.log('Set Interval executed');
            setSeconds(prevSeconds => prevSeconds +1);
        }, 1000);

        return () =>{
            console.log('time to stop')
            clearInterval(intervalId);
        };
    }, []);


          // useEffect( () =>{
          //   const id = setInterval( () =>{
          //     console.log("hello");
          //   },1000);
          //   return () => clearInterval(id);
          // },[]) 


           // IT WILL RETURN ONLY 1ST RENDER

  return (
    <div>
      <h1>Seconds : {seconds}</h1>
    </div>
  );
}

export default Timer
