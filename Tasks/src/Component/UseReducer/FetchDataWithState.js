import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function FetchDataWithState() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setLoading(false)
                setPost(res.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('something went wrong')
            })
    }, [])
    

  return (  
    <div><h1>FetchDataWithState</h1>
        {loading ? 'loading' : post.title}
        {error ? error : null}
    </div>
  )
}

export default FetchDataWithState