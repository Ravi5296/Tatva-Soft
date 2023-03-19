import React, { useReducer, useEffect } from 'react';

function Calculator() {
  const initialState = {
    count: 0,
    operation: '',
    result: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return {
          ...state,
          count: state.count + 1  ,
          operation: '+',
          result: state.count + 1
        };
      case 'SUBTRACT':
        return {
          ...state,
          count: state.count - 1,
          operation: '-',
          result: state.count - 1
        };
      case 'MULTIPLY':
        return {
          ...state,
          count: state.count * 2,
          operation: '*',
          result: state.count * 2
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('Component re-rendered');
  }, []);

  return (
    <div>
      <h1>Calculator</h1>
      <h2>Count: {state.count}</h2>
      <h2>Operation: {state.operation}</h2>
      <h2>Result: {state.result}</h2>
      <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>
      <button onClick={() => dispatch({ type: 'SUBTRACT' })}>Subtract</button>
      <button onClick={() => dispatch({ type: 'MULTIPLY' })}>Multiply</button>
    </div>
  );
}

export default Calculator;
