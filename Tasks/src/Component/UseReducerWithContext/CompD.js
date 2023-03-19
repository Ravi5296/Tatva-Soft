import { useContext } from "react"
import React from 'react'
import { CountContext } from "../../App"

function CompD() {

    const countContext = useContext(CountContext)

    return (
        <div>
            CompD  - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('Decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompD