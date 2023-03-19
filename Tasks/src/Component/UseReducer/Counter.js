// two use reducer
import React, { useReducer } from 'react'

const initialValue = 0;
function reducer(state, action){
  switch (action) {
    case 'increment':
      return state + 1;
    
    case 'Decrement':
      return state - 1;
    
    case 'reset':
      return initialValue;

    default:
      return state   
  }
}
function Counter() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  const [count2, dispatch2] = useReducer(reducer, initialValue);
  return (
    <div>
      <p>counter - {count}</p>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('Decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <hr></hr>
      <p>counter2 - {count2}</p>
      <button onClick={() => dispatch2('increment')}>Increment</button>
      <button onClick={() => dispatch2('Decrement')}>Decrement</button>
      <button onClick={() => dispatch2('reset')}>Reset</button>
    </div>
  )
}

export default Counter



// // As Object for multiple value  
// // insted of doing this for two counter use above in which we use two different hook with same reducer
// import React, { useReducer } from 'react'
// //state object  
// const initialValue = {
//   firstCounter : 0,
//   secondCounter : 10
// };
// function reducer(state, action){
//   switch (action.type) {
//     case 'increment':
//       return {...state, firstCounter : state.firstCounter + action.value};
    
//     case 'Decrement':
//       return {...state, firstCounter : state.firstCounter - action.value};
      
//       case 'increment2':
//         return {...state, secondCounter : state.secondCounter + action.value};
      
//       case 'Decrement2':
//         return {...state, secondCounter : state.secondCounter - action.value};
      
//     case 'reset':
//       return initialValue;

//     default:
//       return state   
//   }
// }
// function Counter() {
//   const [count, dispatch] = useReducer(reducer, initialValue);
//   return (
//     <>
//       <div>
//       <p>counter - {count.firstCounter}</p>
//       <button onClick={() => dispatch({ type:'increment', value: 1})}>Increment</button>
//       <button onClick={() => dispatch({ type:'Decrement', value: 1})}>Decrement</button>
//       <button onClick={() => dispatch({ type:'increment', value: 5})}>Increment5</button>
//       <button onClick={() => dispatch({ type:'Decrement', value: 5})}>Decrement5</button>
//       <button onClick={() => dispatch({ type:'reset', value: 1})}>Reset</button>
//     </div>
//     <div>
//       <p>counter - {count.secondCounter}</p>
//       <button onClick={() => dispatch({ type:'increment2', value: 1})}>Increment</button>
//       <button onClick={() => dispatch({ type:'Decrement2', value: 1})}>Decrement</button>
//       <button onClick={() => dispatch({ type:'increment2', value: 5})}>Increment5</button>
//       <button onClick={() => dispatch({ type:'Decrement2', value: 5})}>Decrement5</button>
//       <button onClick={() => dispatch({ type:'reset', value: 1})}>Reset</button>
//     </div>
//     </>
//   )
// }

// export default Counter

// argument as a value 
// import React, { useReducer } from 'react'

// const initialValue = 0;
// function reducer(state, action){
//   switch (action) {
//     case 'increment':
//       return state + 1;
    
//     case 'Decrement':
//       return state - 1;
    
//     case 'reset':
//       return initialValue;

//     default:
//       return state   
//   }
// }
// function Counter() {
//   const [count, dispatch] = useReducer(reducer, initialValue);
//   return (
//     <div>
//       <p>counter - {count}</p>
//       <button onClick={() => dispatch('increment')}>Increment</button>
//       <button onClick={() => dispatch('Decrement')}>Decrement</button>
//       <button onClick={() => dispatch('reset')}>Reset</button>
//     </div>
//   )
// }

// export default Counter