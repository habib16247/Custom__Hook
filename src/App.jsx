import React from 'react'
import CommentList from './customHooks/Comments/CommentList'
import PostList from './customHooks/Posts/PostList'
import UserList from './customHooks/Users/UserList'

const App = () => {
  return (
    <div>
      <UserList />
      <CommentList />
      <PostList />
    </div>
  )
}


export default App