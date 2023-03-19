import axios from 'axios'
import React from 'react'
import { useReducer, useEffect } from 'react'

const initialState = {
  loading: true,
  error: '',
  posts: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.playload,
        error: ''
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'something went wrong with featching data by api'
      }
    default:
      return state
  }
}

function FetctDataWithReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        dispatch({ type: 'FETCH_SUCCESS', playload: res.data })
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR' })
      })
  }, [])


  return (
    <div>
      <h1>FetctDataWithReducer</h1>
      {state.loading ? 'loading' : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default FetctDataWithReducer