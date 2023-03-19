import { useRef, useEffect } from "react"
import React from 'react'
import HookTimer from "./HookTimer"

function FocusInputHook() {

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  

  return (
    <div>
      <h1>used for focus on load and </h1>
      <input ref={inputRef} ></input>

      <HookTimer/>
    </div>
  )
}

export default FocusInputHook