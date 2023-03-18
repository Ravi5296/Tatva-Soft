import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

function PostDetails() {

    const [posts, setPosts] = useState([])
    const [postId, setPostId] = useState(1)

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => {
            setPosts(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [postId])

  return (
    <div>
        <input type='number' value={postId} onChange={e => setPostId(e.target.value)} />
        {posts && (
        <div>
          <h3>{posts.title}</h3>
          <p>{posts.body}</p>
        </div>
      )}
    </div>
  )
}

export default PostDetails