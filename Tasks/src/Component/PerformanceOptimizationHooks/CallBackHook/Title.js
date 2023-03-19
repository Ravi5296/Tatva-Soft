import React from 'react'

function Title() {
  console.log('rendering title');
  return (
    <div>
      <h1>Call back hook use for performance optimization</h1>
      <p>user for function level while react,memo used fro whole component</p>
      <p>useCallback is a hook that will return a memoized version of the callback function that only
        changes if one of the dependencies has changed.</p>
      <p>It is useful when passing callbacks to optimized child components that rely on reference equality
        to prevent unnecessary renders.</p>
    </div>
  )
}

export default React.memo(Title)