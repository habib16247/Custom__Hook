import React from 'react'

const Users = ({item}) => {
  const {id, title, body} = item;
    console.log(body)
  return (
    <>
     <div className="user-card">
         <div className="card-head">
             <h2>ID: {id}</h2>
             <h2>Title: {title}</h2>
         </div>
         <div className="card-body">
            <p>{body}</p>
         </div>
     </div>
     
    </>
  )
}

export default Users