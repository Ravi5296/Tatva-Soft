import { useContext } from "react"
import React from 'react'
import { CountContext } from "../../App"

function CompF() {

    const countContext = useContext(CountContext)

    return (
        <div>
            CompF  - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('Decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompF 