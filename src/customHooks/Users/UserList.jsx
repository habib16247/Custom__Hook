import React, { useState } from 'react'
import HookFetch from '../HookFetch'
import "./user.css"
import Users from './Users';
import CommentList from '../Comments/CommentList';
import PostList from '../Posts/PostList';


const UserList = () => {
    const {data:user} = HookFetch("https://jsonplaceholder.typicode.com/posts")
    
    const [seeMore, setSeeMore] = useState(false)
    const moreUser = seeMore ? user : user.slice(0,12)

  return (
    <>
    <div className='usersContainer'>
        <h1>Users</h1> 
        <div className="users-card">
            {
                moreUser.map(item => <Users key={item.id} item={item} />)
            }
        </div>      
        {
            user.length > 1 && (
                <button className='showBtn' onClick={() => setSeeMore(!seeMore)}>{!seeMore ? "See More" : "See Less"}</button>
            )
        } 
    </div>
    
    <CommentList />
    <PostList />
    </>
  )
}

export default UserList