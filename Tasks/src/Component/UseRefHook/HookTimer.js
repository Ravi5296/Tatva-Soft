import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {

  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    },1000)
  
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  

  return (
    <div>
      hook timer - {timer}
      {/* interval only rroraccesible in useEffect hence error for that we use useref*/}
      {/* <button onClick={() => clearInterval(interval)}>clear</button> */}

      <button onClick={() => clearInterval(intervalRef.current)}>clear</button>


    </div>
  )
}

export default HookTimer