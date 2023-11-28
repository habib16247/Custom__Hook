import React from 'react'

const Posts = ({item}) => {
    const {id, title} = item;
  return (
    <div className="post-card">
        <h2>Id: {id}</h2>
        <h2>Title: <br /> <br />{title}</h2>
    </div>
  )
}

export default Posts