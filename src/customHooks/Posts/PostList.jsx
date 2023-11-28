import React, { useState } from 'react'
import HookFetch from '../HookFetch'
import Posts from './Posts'
import "./post.css"

const PostList = () => {
    const {data:post} = HookFetch("https://jsonplaceholder.typicode.com/albums")
    const [posts, setPosts] = useState(false)
    const shortPost = posts ? post : post.slice(0,12)
  return (
    <div className="post-container">
        <h1>Posts</h1>
        <div className="posts-card">
            {
                shortPost.map(item => <Posts key={item.id} item={item} />)
            }
        </div>
        {
            <button className='postBtn' onClick={() => setPosts(!posts)}>{ !posts ? "More Posts" : "Less Posts"}</button>
        }
    </div>
  )
}

export default PostList