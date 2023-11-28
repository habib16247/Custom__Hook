import React, { useState } from 'react'
import HookFetch from './../HookFetch';
import Commentss from './Commentss';
import "./comment.css"

const CommentList = () => {
    const {data:comment} = HookFetch("https://jsonplaceholder.typicode.com/comments")

    const [data, setData] = useState(false)
    const moreComment = data ? comment : comment.slice(0,15)

  return (
    <div className="commentContainer">
        <h1>Comments</h1>
        <div className="comments-card">
            {
              moreComment.map((item) => <Commentss key={item.id} item={item} />)  
            }
        </div>
        {
            comment.length > 0 && <button className='commentBtn' onClick={() => setData(!data)}>{!data ? "More Comment" : "Less Comment"}</button>
        }
    </div>
  )
}

export default CommentList