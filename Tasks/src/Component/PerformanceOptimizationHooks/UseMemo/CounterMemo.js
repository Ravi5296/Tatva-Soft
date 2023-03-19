import React, {useState, useMemo} from 'react'

function CounterMemo() {

  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const inc1 = () => {
    setCounter1(counter1 + 1)
  }
  const inc2 = () => {
    setCounter2(counter2 + 1)
  }

  const isEven = useMemo(() =>{
    let i = 0;
    while(i < 2000000000) i++
    return counter1 % 2 == 0
  },[counter1])
  

  return (
    <div>
      <div>
        <button onClick={inc1}>counter - {counter1}</button>
        <span> {isEven ? 'Even' : 'Odd'} </span>
      </div>
      <div>
        <button onClick={inc2}>counter - {counter2}</button>
      </div>
    </div>
  )
}

export default CounterMemo