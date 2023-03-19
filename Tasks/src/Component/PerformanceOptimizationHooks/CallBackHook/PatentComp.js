import React, { useState, useCallback } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function PatentComp() {

  const [age, setAge] = useState(25)
  const [sal, setSal] = useState(50000)

  const incAge = useCallback(
    () => {
      setAge(age + 1)
    },
    [age],
  )


  const incSal = useCallback(
    () => {
      setSal(sal + 1)
    },
    [sal],
  )


  return (
    <div>
      <Title />
      <Count text='age' count={age} />
      <Button handleClick={incAge}>Increment Age</Button>
      <Count text='sal' count={sal} />
      <Button handleClick={incSal}>Increment Sal</Button>
    </div>
  )
}

export default PatentComp